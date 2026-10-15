import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firstTenMinutes = [
  {
    item: "Read the entire scenario before changing anything.",
    why:
      "Required users, services, shares, roles, remote access, and network behavior may be different from your usual hardening assumptions.",
  },
  {
    item: "Highlight every requirement that must remain functional.",
    why:
      "Competition mistakes often happen when a team secures one setting but accidentally breaks something the scenario explicitly requires.",
  },
  {
    item: "Record approved users and approved administrators.",
    why:
      "This gives the team a trusted reference before anyone removes accounts or changes group membership.",
  },
  {
    item: "Identify required services and remote-access methods.",
    why:
      "Do not disable SSH, RDP, SMB, web services, or other listeners until you know whether the mission depends on them.",
  },
  {
    item: "Assign a primary owner for each platform.",
    why:
      "One person should be accountable for Windows, Server, Linux, Cisco, or forensics work instead of several teammates changing the same system at once.",
  },
  {
    item: "Start one shared change log.",
    why:
      "Every meaningful change should have a time, owner, reason, command or setting, and verification result.",
  },
  {
    item: "Capture the initial state before remediation.",
    why:
      "A baseline helps you prove what existed before your team made changes and gives you something to compare against later.",
  },
  {
    item: "Identify obvious high-risk findings, but do not deep-dive yet.",
    why:
      "The opening phase is for orientation and prioritization, not spending twenty minutes on the first unusual setting you notice.",
  },
];

const missionExtraction = [
  {
    label: "Approved users",
    record:
      "Write down every user who is explicitly authorized to remain on each system.",
  },
  {
    label: "Approved administrators",
    record:
      "Record which users may hold local admin, Domain Admin, sudo, enable, or other privileged access.",
  },
  {
    label: "Required services",
    record:
      "List services, roles, shares, websites, applications, and network paths that must stay functional.",
  },
  {
    label: "Remote access",
    record:
      "Record whether RDP, SSH, Telnet, VNC, WinRM, or other remote access is required or unnecessary.",
  },
  {
    label: "Network requirements",
    record:
      "Record VLANs, subnets, routes, management paths, allowed services, and any required reachability.",
  },
  {
    label: "Security requirements",
    record:
      "Record explicit requirements for antivirus, firewall, updates, password policy, logging, auditing, and account controls.",
  },
  {
    label: "Forbidden changes",
    record:
      "Note anything the scenario says not to remove, stop, uninstall, disable, reset, or reconfigure.",
  },
  {
    label: "Evidence questions",
    record:
      "Record any forensic, incident, or explanation questions that require preserving evidence before remediation.",
  },
];

const ownerAssignments = [
  {
    role: "Windows 11 lead",
    owns:
      "Local users, Administrators, Defender, Firewall, updates, services, startup, scheduled tasks, processes, listeners, shares, and Windows event evidence.",
  },
  {
    role: "Windows Server lead",
    owns:
      "Privileged identities, server roles, SMB shares, sessions, services, RDP, firewall state, authentication evidence, and required server dependencies.",
  },
  {
    role: "Linux lead",
    owns:
      "Users, groups, sudo, permissions, packages, services, SSH, firewall state, cron, systemd timers, processes, sockets, and authentication logs.",
  },
  {
    role: "Cisco / networking lead",
    owns:
      "Interfaces, VLANs, trunks, access ports, routing, ARP, ACLs, VTY access, SSH, port security, logging, and required reachability.",
  },
  {
    role: "Forensics / coordinator",
    owns:
      "Evidence preservation, hashes, timeline notes, cross-system correlation, team status, and the shared change log.",
  },
];

const baselineSections = [
  {
    area: "Identity",
    examples: [
      "Users",
      "Privileged groups",
      "Disabled accounts",
      "Recent account changes",
      "Authentication state",
    ],
    objective:
      "Know who exists and who is privileged before account cleanup begins.",
  },
  {
    area: "Security controls",
    examples: [
      "Defender or antivirus",
      "Firewall profiles",
      "Update state",
      "Logging",
      "Audit settings",
    ],
    objective:
      "Confirm foundational protections before lower-priority tuning.",
  },
  {
    area: "Services",
    examples: [
      "Running services",
      "Startup type",
      "Server roles",
      "Remote-access services",
      "Dependencies",
    ],
    objective:
      "Separate mission-required functionality from unnecessary exposure.",
  },
  {
    area: "Processes and persistence",
    examples: [
      "Running processes",
      "Scheduled tasks",
      "Cron jobs",
      "Systemd timers",
      "Startup items",
    ],
    objective:
      "Identify recurring or active behavior that may deserve higher priority.",
  },
  {
    area: "Network state",
    examples: [
      "Listening ports",
      "Active connections",
      "Interfaces",
      "VLANs",
      "Routes",
      "ACLs",
    ],
    objective:
      "Understand current connectivity before changing network policy.",
  },
  {
    area: "Evidence",
    examples: [
      "Event logs",
      "Authentication logs",
      "Hashes",
      "File paths",
      "Timestamps",
    ],
    objective:
      "Preserve useful context before changes alter system state.",
  },
];

const priorityModel = [
  {
    level: "P1",
    title: "Active high-impact risk",
    examples: [
      "Unknown active process with suspicious network activity",
      "Unexpected privileged account",
      "Disabled core security control",
      "Broken required service",
      "Confirmed malicious persistence",
    ],
    action:
      "Preserve evidence, confirm scope, and address immediately with the smallest justified change.",
  },
  {
    level: "P2",
    title: "Privilege or remote-access exposure",
    examples: [
      "Unapproved administrator",
      "Unrestricted sudo",
      "Unneeded RDP or SSH",
      "Overly broad management access",
      "Unexpected service account rights",
    ],
    action:
      "Investigate quickly and remediate after confirming the mission does not require the access.",
  },
  {
    level: "P3",
    title: "Important hardening issue",
    examples: [
      "Unneeded package",
      "Weak service configuration",
      "Overly broad ACL",
      "Unnecessary startup item",
      "Noncritical policy weakness",
    ],
    action:
      "Record and fix after active risk and mission-critical issues are stable.",
  },
  {
    level: "P4",
    title: "Benign or mission-required",
    examples: [
      "Required SMB service",
      "Approved scheduled backup",
      "Expected management listener",
      "Required server role",
      "Known competition software",
    ],
    action:
      "Document why it is expected so the team does not repeatedly investigate it.",
  },
];

const changeLogFields = [
  "Time",
  "System",
  "Owner",
  "Finding",
  "Evidence",
  "Change made",
  "Reason",
  "Verification result",
  "Unresolved follow-up",
];

const openingMistakes = [
  {
    mistake: "Changing settings before reading the scenario",
    impact:
      "The team may remove required users or break services that were explicitly supposed to remain enabled.",
  },
  {
    mistake: "Everyone working on the same image",
    impact:
      "Changes collide, evidence is lost, and nobody knows who changed what.",
  },
  {
    mistake: "Disabling every unfamiliar service",
    impact:
      "Required functionality can fail and the team may lose time rebuilding what it broke.",
  },
  {
    mistake: "Treating every unusual setting as equally urgent",
    impact:
      "Low-value hardening can consume time while active privilege or persistence remains unresolved.",
  },
  {
    mistake: "No change log",
    impact:
      "Verification becomes difficult and teammates may repeat or reverse each other's work.",
  },
  {
    mistake: "Skipping the baseline",
    impact:
      "Later, the team cannot tell whether a problem existed before remediation or was introduced by a teammate.",
  },
];

const startDecisionQuestions = [
  "What absolutely must remain working?",
  "Which users are explicitly approved?",
  "Who is allowed to be privileged?",
  "Which remote-access methods are required?",
  "Which systems or services appear most exposed right now?",
  "What evidence could be destroyed by an early change?",
  "Which teammate owns each platform?",
  "Where will all changes and verification results be recorded?",
];

const completionChecklist = [
  "The full scenario has been read by at least the platform owners.",
  "Required users and administrators are recorded.",
  "Required services, shares, roles, applications, and network paths are recorded.",
  "Remote-access requirements are recorded.",
  "A platform owner is assigned to each system area.",
  "A shared change log is open and ready.",
  "The baseline state has been captured before major remediation.",
  "High-risk findings have been separated from lower-priority hardening.",
  "No required service has been disabled during the opening review.",
  "The team knows what to investigate first and what can safely wait.",
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

export default function CompetitionStartChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/windows-11-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 01 &middot; Strategy
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Competition Start Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use the opening minutes to understand the mission, protect
                required functionality, assign ownership, capture a baseline,
                and identify the highest-value work before the team starts
                changing configuration.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A disciplined start saves time later because the team knows what
                must remain working, who is authorized, what evidence matters,
                and who owns each system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Best time</span>
                  <span className="font-bold text-white">First 10-15 minutes</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary goal</span>
                  <span className="font-bold text-white">Orientation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Major risk</span>
                  <span className="font-bold text-white">Blind changes</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Prioritized plan</span>
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
            Read first. Change second.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A familiar hardening step can still be wrong if the scenario
            requires the account, service, share, protocol, role, or network path.
            The competition brief is the source of truth for what must remain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="First 10 minutes"
            title="Do these before deep remediation"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {firstTenMinutes.map((item, index) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex gap-4">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.item}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Mission extraction"
            title="Turn the scenario into a working reference"
            description="Write these down before anyone starts account cleanup, service hardening, or network changes."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {missionExtraction.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.record}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Team ownership"
            title="Give each platform a clear primary owner"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ownerAssignments.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.owns}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Baseline"
            title="Capture enough state to know what changed"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {baselineSections.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.area}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Priority model"
            title="Decide what deserves attention first"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {priorityModel.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xl font-black text-cyan-300">
                    {item.level}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Competition priority
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-4 grid gap-2">
                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Shared change log
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Record every meaningful change
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The change log should be simple enough that the team actually uses
            it. One row per meaningful finding or remediation is usually enough.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {changeLogFields.map((field, index) => (
              <div
                key={field}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {field}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Avoid these opening mistakes
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            The fastest start is not the most aggressive start
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {openingMistakes.map((item) => (
              <div
                key={item.mistake}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening decision questions"
            title="Ask these before the first high-impact change"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {startDecisionQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Ready to move on
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Start remediation only when the team can answer these basics
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
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
              href="/cyberpatriot/competition-checklists/windows-11-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
