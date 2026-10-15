import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const labs = [
  { number: "01", title: "Windows 11 Baseline Review", platform: "Windows 11", difficulty: "Foundation", focus: "Review local accounts, groups, services, firewall profiles, updates, startup items, scheduled tasks, and basic network state.", mission: "Build a repeatable first-pass inspection routine without making blind changes.", evidence: ["Accounts", "Services", "Firewall", "Startup", "Updates", "Network"] },
  { number: "02", title: "Windows 11 Account & Service Investigation", platform: "Windows 11", difficulty: "Intermediate", focus: "Investigate unusual local accounts, administrator membership, service configuration, process ownership, and recent event evidence.", mission: "Separate suspicious-looking configuration from evidence that actually supports a conclusion.", evidence: ["Users", "Groups", "Services", "Processes", "Event Logs", "Verification"] },
  { number: "03", title: "Windows Server Roles & Shares", platform: "Windows Server", difficulty: "Intermediate", focus: "Identify required server roles, review SMB shares, services, firewall state, event logs, and role dependencies.", mission: "Harden a server without breaking the services the fictional organization depends on.", evidence: ["Roles", "Shares", "Services", "Firewall", "Logs", "Dependencies"] },
  { number: "04", title: "Windows Server Identity Review", platform: "Windows Server", difficulty: "Advanced", focus: "Review local or domain-aware users, privileged groups, authentication evidence, remote access, and account changes.", mission: "Determine which identity changes are expected and which need deeper investigation.", evidence: ["Accounts", "Groups", "Authentication", "RDP", "Events", "Privileges"] },
  { number: "05", title: "Linux Users, Sudo & Permissions", platform: "Ubuntu / Mint", difficulty: "Foundation", focus: "Review users, groups, sudo permissions, file ownership, mode bits, ACLs, packages, and common security-sensitive paths.", mission: "Correct narrowly scoped permission problems without using broad fixes.", evidence: ["Users", "Sudo", "Ownership", "Permissions", "Packages", "Paths"] },
  { number: "06", title: "Linux Services, Logs & Scheduled Activity", platform: "Ubuntu / Mint", difficulty: "Intermediate", focus: "Investigate running services, SSH, journal entries, auth logs, cron jobs, systemd timers, processes, and network listeners.", mission: "Correlate service state with logs and scheduled activity before deciding what should change.", evidence: ["Services", "SSH", "Logs", "Cron", "Timers", "Sockets"] },
  { number: "07", title: "Cisco VLAN & Routing Troubleshooting", platform: "Cisco / Networking", difficulty: "Intermediate", focus: "Use interface state, VLAN membership, trunks, routing tables, ARP, and path testing to locate a connectivity problem.", mission: "Troubleshoot from Layer 1 upward instead of changing configuration by guesswork.", evidence: ["Interfaces", "VLANs", "Trunks", "Routes", "ARP", "Reachability"] },
  { number: "08", title: "Cisco ACL & Port Security Review", platform: "Cisco / Networking", difficulty: "Advanced", focus: "Review ACL placement, rule order, switch-port configuration, port-security state, management access, and logging.", mission: "Identify the smallest justified network change while preserving required connectivity.", evidence: ["ACLs", "Switchports", "Port Security", "SSH", "Logging", "Verification"] },
  { number: "09", title: "Forensics Evidence Timeline", platform: "Forensics", difficulty: "Intermediate", focus: "Correlate account activity, file metadata, hashes, logs, scheduled tasks, processes, and network evidence.", mission: "Build a defensible timeline that separates direct observations from inference.", evidence: ["Accounts", "Files", "Hashes", "Logs", "Tasks", "Timeline"] },
  { number: "10", title: "Forensics Suspicious Download Case", platform: "Forensics", difficulty: "Advanced", focus: "Trace a fictional browser download through file metadata, process execution clues, scheduled activity, and network context.", mission: "Determine what the evidence proves without assuming that download automatically means execution.", evidence: ["Browser", "Downloads", "Files", "Processes", "Tasks", "Network"] },
  { number: "11", title: "Mixed-System Incident Triage", platform: "Mixed Environment", difficulty: "Advanced", focus: "Combine Windows, Linux, networking, and forensics evidence across several fictional hosts.", mission: "Prioritize findings, preserve evidence, and decide which systems require immediate defensive attention.", evidence: ["Windows", "Linux", "Network", "Forensics", "Prioritization", "Evidence"] },
  { number: "12", title: "Full Competition Simulation", platform: "Mixed Environment", difficulty: "Challenge", focus: "Work through a longer fictional competition-style environment with required services, multiple platforms, evidence questions, and verification checkpoints.", mission: "Practice disciplined competition workflow from initial read-through to final verification without live-round answers.", evidence: ["Strategy", "Windows", "Linux", "Cisco", "Forensics", "Final Review"] },
];

const labRoutes: Record<string, string> = {
  "01": "/cyberpatriot/practice-labs/windows-11-baseline-review",
  "02": "/cyberpatriot/practice-labs/windows-11-account-service-investigation",
  "03": "/cyberpatriot/practice-labs/windows-server-roles-shares",
  "04": "/cyberpatriot/practice-labs/windows-server-identity-review",
  "05": "/cyberpatriot/practice-labs/linux-users-sudo-permissions",
  "06": "/cyberpatriot/practice-labs/linux-services-logs-scheduled-activity",
  "07": "/cyberpatriot/practice-labs/cisco-vlan-routing-troubleshooting",
  "08": "/cyberpatriot/practice-labs/cisco-acl-port-security-review",
  "09": "/cyberpatriot/practice-labs/forensics-evidence-timeline",
  "10": "/cyberpatriot/practice-labs/forensics-suspicious-download-case",
  "11": "/cyberpatriot/practice-labs/mixed-system-incident-triage",
  "12": "/cyberpatriot/practice-labs/full-competition-simulation",
};
const labRules = [
  ["Read the scenario first", "Every lab begins with fictional requirements. Required services, users, roles, and connectivity must be understood before remediation."],
  ["Inspect before changing", "The first phase of each lab emphasizes read-only checks so you can establish the current state."],
  ["Preserve useful evidence", "Record hashes, paths, timestamps, PIDs, log entries, task details, and network state before changing evidence-bearing configuration."],
  ["Make narrow changes", "Labs reward justified corrections, not broad cleanup or disabling everything unfamiliar."],
  ["Verify after remediation", "After each defensive change, re-check the system and confirm required functionality still works."],
  ["Explain the reasoning", "Each lab includes short reflection prompts so the learner practices explaining why a finding matters."],
];

const labFlow = [
  ["01", "Mission briefing", "Read the fictional organization, system role, required services, restrictions, and what must remain functional."],
  ["02", "Initial inventory", "Inspect accounts, services, processes, packages, interfaces, logs, shares, tasks, or other evidence relevant to the platform."],
  ["03", "Findings", "Classify observations as expected, questionable, misconfigured, or requiring more evidence."],
  ["04", "Evidence check", "Corroborate important findings with a second source before making a high-impact change."],
  ["05", "Defensive action", "Make the smallest justified change and record what you changed."],
  ["06", "Verification", "Re-run the relevant checks and confirm required users, services, access, and connectivity still work."],
  ["07", "Debrief", "Answer reflection questions about what evidence mattered, what could have been misleading, and how you verified the result."],
];

const progression = [
  ["Foundation", "Labs 01 and 05", "Build platform-specific inspection habits and learn to avoid broad changes."],
  ["Intermediate", "Labs 02, 03, 06, 07 and 09", "Correlate multiple evidence sources and troubleshoot configuration more systematically."],
  ["Advanced", "Labs 04, 08, 10 and 11", "Handle ambiguity, dependencies, mixed evidence, and higher-impact decisions."],
  ["Challenge", "Lab 12", "Combine competition strategy, operating systems, networking, and forensics in one longer simulation."],
];

const completionStandards = [
  "Identify the system role before making high-impact changes.",
  "Use evidence to explain why each finding is important.",
  "Record the original state before changing evidence-bearing configuration.",
  "Avoid unnecessary or unrelated changes.",
  "Preserve required services and connectivity.",
  "Verify each major remediation step.",
  "Separate direct observations from assumptions or inference.",
  "Complete the final debrief without relying on hidden answer keys during the lab.",
];

const safetyBoundaries = [
  "All scenarios are fictional and intended for authorized training systems or virtual machines.",
  "Labs focus on defensive configuration, evidence review, troubleshooting, and verification.",
  "No live CyberPatriot round answers or hidden scoring keys are provided.",
  "No persistence, credential theft, evasion, or destructive activity is taught.",
  "Commands that modify state appear only when the fictional scenario clearly justifies the defensive action.",
  "The learner is expected to preserve evidence and required functionality before remediation.",
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

export default function PracticeLabsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; CyberPatriot Hub
          </Link>

          <div className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-400">
            Practice Labs
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Practice Labs
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Practice the decisions, not just the commands
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Twelve fictional competition-style labs covering Windows 11,
                Windows Server, Ubuntu/Mint, Cisco networking, forensics, and
                mixed-system scenarios.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Each lab is built around inspection, evidence, narrow defensive
                action, and verification.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Total labs</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platforms</span>
                  <span className="font-bold text-white">Windows + Linux + Cisco</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Forensics</span>
                  <span className="font-bold text-white">Included</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Final challenge</span>
                  <span className="font-bold text-white">Mixed simulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              What makes these different
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The answer is not shown first
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Each lab gives you a fictional environment, requirements, clues,
              and verification goals. You work through the evidence before any debrief.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition mindset
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Required functionality always matters
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The goal is not to disable everything unfamiliar. Preserve required
              services while hardening the system.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Lab rules" title="The habits every practice lab reinforces" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labRules.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Practice pathway"
            title="Twelve competition-style labs"
            description="Open any lab below to practice the platform skills, evidence review, remediation decisions, and verification workflow."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labs.map((lab) => (
              <div
                key={lab.number}
                className="relative flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/40"
              >
                <Link
                  href={labRoutes[lab.number]}
                  aria-label={"Open Lab " + lab.number + ": " + lab.title}
                  className="absolute inset-0 z-10 rounded-2xl"
                >
                  <span className="sr-only">Open Lab {lab.number}: {lab.title}</span>
                </Link>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-cyan-300">Lab {lab.number}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {lab.difficulty}
                  </span>
                </div>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  {lab.platform}
                </p>

                <h3 className="mt-2 text-xl font-black text-white">{lab.title}</h3>

                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">Focus</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{lab.focus}</p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Mission</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{lab.mission}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {lab.evidence.map((item) => (
                    <span key={item} className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                    Open Lab &rarr;
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
            label="Lab flow"
            title="A consistent practice rhythm without forcing one lesson format"
            description="The lab sequence stays predictable, but the evidence and troubleshooting structure changes naturally by platform."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labFlow.map(([step, title, text]) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Progression" title="Labs become more ambiguous as you advance" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {progression.map(([stage, labText, description]) => (
              <div key={stage} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{stage}</p>
                <p className="mt-3 font-bold text-white">{labText}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Completion standard</p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A lab is complete when the reasoning is defensible
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionStandards.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Safety boundary</p>
          <h2 className="mt-3 text-3xl font-black text-white">Authorized defensive training only</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {safetyBoundaries.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-3xl font-black text-white">Begin with Windows 11 Baseline Review</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Work through the labs in order to reuse skills from the earlier CyberPatriot
            training while adding more realistic decision-making.
          </p>
          <Link
            href="/cyberpatriot/practice-labs/windows-11-baseline-review"
            className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
          >
            Start Lab 01 &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
