import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    number: "01",
    route: "/cyberpatriot/common-mistakes/competition-strategy-mistakes",
    title: "Competition Strategy Mistakes",
    focus:
      "Rushing the opening, ignoring the README or mission, making broad changes too early, and working without priorities.",
    lesson:
      "Replace random hardening with mission-first triage, clear ownership, and evidence-backed decisions.",
  },
  {
    number: "02",
    route: "/cyberpatriot/common-mistakes/windows-11-mistakes",
    title: "Windows 11 Mistakes",
    focus:
      "Blind service disabling, unsafe account cleanup, over-hardening RDP, weak verification, and ignoring persistence.",
    lesson:
      "Use narrow Windows changes that preserve required functionality and leave evidence intact.",
  },
  {
    number: "03",
    route: "/cyberpatriot/common-mistakes/windows-server-mistakes",
    title: "Windows Server Mistakes",
    focus:
      "Breaking roles, shares, domain services, service accounts, remote administration, and dependent applications.",
    lesson:
      "Treat server roles and identity dependencies as mission-critical infrastructure.",
  },
  {
    number: "04",
    route: "/cyberpatriot/common-mistakes/linux-mistakes",
    title: "Linux Mistakes",
    focus:
      "Recursive permission changes, careless sudo edits, unsafe SSH changes, killing unknown processes, and deleting persistence evidence.",
    lesson:
      "Inspect ownership, privilege, services, logs, and dependencies before modifying Linux state.",
  },
  {
    number: "05",
    route: "/cyberpatriot/common-mistakes/cisco-networking-mistakes",
    title: "Cisco & Networking Mistakes",
    focus:
      "Changing multiple layers at once, broad ACL edits, broken trunks, missing routes, management lockout, and forgetting to save.",
    lesson:
      "Troubleshoot from interface state through policy and verify every path before saving configuration.",
  },
  {
    number: "06",
    route: "/cyberpatriot/common-mistakes/forensics-mistakes",
    title: "Forensics Mistakes",
    focus:
      "Destroying evidence, jumping to conclusions, mixing observation with interpretation, and ignoring time context.",
    lesson:
      "Preserve artifacts first, correlate multiple sources, and document confidence instead of guessing.",
  },
  {
    number: "07",
    route: "/cyberpatriot/common-mistakes/accounts-privilege-mistakes",
    title: "Accounts & Privilege Mistakes",
    focus:
      "Deleting unfamiliar users, removing every admin, disabling service accounts, and confusing account existence with privilege.",
    lesson:
      "Classify identities, verify the roster, and remove only unauthorized access or excess privilege.",
  },
  {
    number: "08",
    route: "/cyberpatriot/common-mistakes/services-remote-access-mistakes",
    title: "Services & Remote Access Mistakes",
    focus:
      "Closing ports without mapping them, disabling required services, unsafe RDP or SSH changes, and ignoring service dependencies.",
    lesson:
      "Map listeners to processes and services, then reduce only unnecessary exposure.",
  },
  {
    number: "09",
    route: "/cyberpatriot/common-mistakes/evidence-documentation-mistakes",
    title: "Evidence & Documentation Mistakes",
    focus:
      "Writing vague notes, failing to record original state, missing verification, and keeping evidence only in terminal scrollback.",
    lesson:
      "Create a change log another teammate can trust without repeating your investigation.",
  },
  {
    number: "10",
    route: "/cyberpatriot/common-mistakes/troubleshooting-verification-mistakes",
    title: "Troubleshooting & Verification Mistakes",
    focus:
      "Changing too many variables, skipping regression checks, troubleshooting from assumptions, and retesting too late.",
    lesson:
      "Use narrow hypotheses, compare before and after state, and verify required functionality throughout the round.",
  },
  {
    number: "11",
    route: "/cyberpatriot/common-mistakes/team-communication-mistakes",
    title: "Team Communication Mistakes",
    focus:
      "Duplicate work, unclear ownership, undocumented changes, weak handoffs, and teammates working from different assumptions.",
    lesson:
      "Use concise status updates, shared evidence, explicit ownership, and do-not-touch warnings.",
  },
  {
    number: "12",
    route: "/cyberpatriot/common-mistakes/final-minute-mistakes",
    title: "Final-Minute Mistakes",
    focus:
      "Starting risky changes too late, chasing low-value hardening, forgetting network saves, and discovering breakage at the buzzer.",
    lesson:
      "Shift from broad hardening to stability, verification, documentation, and handoff.",
  },
];

const rules = [
  {
    title: "Mission before habit",
    detail:
      "A setting that is normally secure may be wrong for the competition scenario if it breaks a required service or approved access path.",
  },
  {
    title: "Evidence before remediation",
    detail:
      "Record the original state of suspicious accounts, services, tasks, files, listeners, and configuration before changing them.",
  },
  {
    title: "One justified change",
    detail:
      "Avoid broad hardening when one specific group membership, service, ACL entry, or setting is the confirmed problem.",
  },
  {
    title: "Verification after change",
    detail:
      "A change is not complete until the security result and required mission function are both rechecked.",
  },
  {
    title: "Document uncertainty",
    detail:
      "If the team does not know whether an item is required, mark it unresolved and investigate instead of guessing.",
  },
  {
    title: "Protect the final state",
    detail:
      "As time gets short, reduce experimentation and prioritize stability, evidence, and high-confidence work.",
  },
];

const categories = [
  {
    label: "Decision mistakes",
    examples:
      "Acting before reading the mission, guessing whether an account or service is allowed, or following a generic hardening checklist without context.",
  },
  {
    label: "Technical mistakes",
    examples:
      "Breaking permissions, services, VLANs, ACLs, authentication, remote management, or application dependencies.",
  },
  {
    label: "Evidence mistakes",
    examples:
      "Destroying logs, losing hashes, failing to capture original state, or making conclusions without enough artifacts.",
  },
  {
    label: "Team mistakes",
    examples:
      "Duplicate work, conflicting changes, unclear ownership, weak handoffs, and undocumented decisions.",
  },
];

export default function CommonMistakesHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      {/* CyberPatriot compact section navigation */}
      <section className="mx-auto max-w-7xl px-6 pt-5 lg:px-8 lg:pt-6">
        <div className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-1">
          <Link
            href="/cyberpatriot"
            className="shrink-0 rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; CyberPatriot Hub
          </Link>

          <Link
            href="/cyberpatriot/competition-checklists"
            className="shrink-0 rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Competition Checklists
          </Link>

          <div className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-200">
            Common Mistakes
          </div>

          <Link
            href="/cyberpatriot/competition-day-guide"
            className="shrink-0 rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Competition Day Guide &rarr;
          </Link>
        </div>
      </section>



      

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot &middot; Common Mistakes
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Common Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn the decisions that cost teams time, evidence,
                functionality, and confidence during a competition round, then
                replace them with safer defensive habits.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This section is not a list of forbidden actions. It explains
                why common competition mistakes happen, how to recognize them,
                what damage they can cause, and what a stronger response looks
                like.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Section Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Guides</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Scope</span>
                  <span className="font-bold text-white">Cross-platform</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Focus</span>
                  <span className="font-bold text-white">Avoid + Replace</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Safer decisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Six habits that prevent most mistakes
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Strong teams slow down at the right moments
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{rule.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {rule.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mistake categories
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Most competition errors fall into four groups
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            12-guide pathway
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Learn the mistake, the consequence, and the safer replacement
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            The cards will become clickable after all twelve guides are created
            and checked. This avoids publishing routes that still return 404.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <Link href={item.route}
              key={item.number}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-cyan-300">
                  Guide {item.number}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Common Mistake
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-black text-white">
                {item.title}
              </h3>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  What goes wrong
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.focus}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  Stronger replacement
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.lesson}
                </p>
              </div>

              <div className="mt-auto pt-5">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-500">
                  Open guide &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Start here
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Guide 01: Competition Strategy Mistakes
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Start with the mistakes that affect every platform: skipping the
            mission, hardening too early, weak prioritization, unclear
            ownership, and making changes without evidence or verification.
          </p>

          <Link
            href="/cyberpatriot/common-mistakes/competition-strategy-mistakes"
            className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
          >
            Open Guide 01 &rarr;
          </Link>
        </div>
      </section>

      
      {/* CyberPatriot section navigation */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 lg:p-6">
          <div className="mb-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Section 10 of 12
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                &larr; Previous Section
              </p>
              <p className="mt-2 font-black text-white transition group-hover:text-cyan-200">
                Competition Checklists
              </p>
            </Link>

            <Link
              href="/cyberpatriot"
              className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 px-6 py-4 text-center text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide"
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left transition hover:border-cyan-400/40 hover:bg-slate-950 md:text-right"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Next Section &rarr;
              </p>
              <p className="mt-2 font-black text-white transition group-hover:text-cyan-200">
                Competition Day Guide
              </p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
