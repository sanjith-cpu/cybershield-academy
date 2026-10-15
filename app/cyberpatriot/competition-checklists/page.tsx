import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const checklists = [
  { number: "01", title: "Competition Start Checklist", area: "Strategy", focus: "Read the scenario, identify required services, record approved users, assign platform owners, establish a change log, and capture the initial state before touching configuration.", use: "Use during the first 10 to 15 minutes so the team starts from the mission instead of random hardening.", tags: ["Mission", "Roles", "Baseline", "Notes", "Priorities", "Coordination"] },
  { number: "02", title: "Windows 11 Checklist", area: "Windows 11", focus: "Review accounts, Administrators, Defender, Firewall, updates, services, startup items, scheduled tasks, remote access, processes, listeners, shares, and event evidence.", use: "Use as the main workstation review list after reading the image-specific requirements.", tags: ["Accounts", "Defender", "Firewall", "Services", "Tasks", "Events"] },
  { number: "03", title: "Windows Server Checklist", area: "Windows Server", focus: "Review privileged identities, installed roles, required shares, active sessions, services, RDP, firewall state, authentication evidence, and dependencies.", use: "Use when securing a server without breaking required organization services.", tags: ["Admins", "Roles", "SMB", "RDP", "Services", "Logs"] },
  { number: "04", title: "Linux Ubuntu & Mint Checklist", area: "Linux", focus: "Review users, groups, sudo, ownership, permissions, packages, services, SSH, firewall state, cron, systemd timers, processes, listeners, and authentication logs.", use: "Use for Ubuntu and Mint while adapting commands to the actual image and mission.", tags: ["Users", "Sudo", "Permissions", "Services", "Cron", "Logs"] },
  { number: "05", title: "Cisco & Networking Checklist", area: "Cisco / Networking", focus: "Review interface state, VLANs, trunks, access ports, routing, ARP, ACLs, VTY access, SSH, port security, logging, and required reachability.", use: "Use to troubleshoot methodically instead of changing configuration by guesswork.", tags: ["Interfaces", "VLANs", "Trunks", "Routes", "ACLs", "SSH"] },
  { number: "06", title: "Forensics Checklist", area: "Forensics", focus: "Preserve hashes, paths, timestamps, authentication evidence, process clues, services, scheduled activity, browser artifacts, and network context before drawing conclusions.", use: "Use when a round includes a forensic question or suspicious activity needs evidence-based investigation.", tags: ["Hashes", "Timeline", "Processes", "Tasks", "Browser", "Evidence"] },
  { number: "07", title: "Accounts & Privilege Checklist", area: "Identity", focus: "Compare every user and privileged group against the mission, investigate recent account changes, verify administrative rights, and avoid removing approved service or administrator accounts.", use: "Use across Windows, Server, and Linux whenever identity or privilege findings appear.", tags: ["Users", "Admins", "Sudo", "Groups", "Auth", "Verification"] },
  { number: "08", title: "Services & Remote Access Checklist", area: "Services", focus: "Identify required services, investigate unknown services, review SSH and RDP requirements, correlate listeners with processes, and verify that disabling an unneeded service does not break the mission.", use: "Use before stopping, disabling, or removing anything network-facing.", tags: ["Services", "RDP", "SSH", "Listeners", "Dependencies", "Logs"] },
  { number: "09", title: "Evidence & Change Log Checklist", area: "Documentation", focus: "Record the original state, commands run, evidence found, exact changes made, reasons, verification results, and unresolved questions.", use: "Keep this open throughout the round so the team can coordinate and avoid duplicate or unexplained changes.", tags: ["Evidence", "Commands", "Changes", "Time", "Results", "Handoff"] },
  { number: "10", title: "Mid-Round Verification Checklist", area: "Verification", focus: "Re-check required services, core security controls, privileged access, network reachability, active listeners, scheduled activity, and high-risk findings already remediated.", use: "Run after the main hardening pass to catch accidental breakage before the final minutes.", tags: ["Services", "Security", "Network", "Accounts", "Tasks", "Regression"] },
  { number: "11", title: "Final 15-Minute Checklist", area: "Competition Finish", focus: "Stop risky experimentation, verify mission-critical functionality, review unresolved high-impact findings, confirm persistence and remote access state, save approved network configuration, and perform a final handoff.", use: "Use when the round is almost over and stability matters more than broad last-second changes.", tags: ["Final Review", "Stability", "Persistence", "Network", "Handoff", "Save"] },
  { number: "12", title: "Team Lead Handoff Checklist", area: "Team Coordination", focus: "Collect platform status, unresolved findings, verified changes, required-service checks, forensic notes, and final priorities from each teammate before the round ends.", use: "Use by the team lead to maintain one clear picture of the environment.", tags: ["Team", "Status", "Priority", "Notes", "Handoff", "Final Review"] },
];

const checklistRoutes: Record<string, string> = {
  "01": "/cyberpatriot/competition-checklists/competition-start-checklist",
  "02": "/cyberpatriot/competition-checklists/windows-11-checklist",
  "03": "/cyberpatriot/competition-checklists/windows-server-checklist",
  "04": "/cyberpatriot/competition-checklists/linux-ubuntu-mint-checklist",
  "05": "/cyberpatriot/competition-checklists/cisco-networking-checklist",
  "06": "/cyberpatriot/competition-checklists/forensics-checklist",
  "07": "/cyberpatriot/competition-checklists/accounts-privilege-checklist",
  "08": "/cyberpatriot/competition-checklists/services-remote-access-checklist",
  "09": "/cyberpatriot/competition-checklists/evidence-change-log-checklist",
  "10": "/cyberpatriot/competition-checklists/mid-round-verification-checklist",
  "11": "/cyberpatriot/competition-checklists/final-15-minute-checklist",
  "12": "/cyberpatriot/competition-checklists/team-lead-handoff-checklist",
};
const checklistRules = [
  ["Mission first", "The scenario requirements always override a generic checklist."],
  ["Inspect before changing", "Establish the current state before making configuration changes."],
  ["Preserve evidence", "Record useful logs, hashes, paths, timestamps, PIDs, service state, ACL counters, and network evidence before remediation."],
  ["Make narrow changes", "Use the smallest justified correction instead of broad cleanup."],
  ["Verify immediately", "Repeat the check that revealed the issue and confirm required functionality still works."],
  ["Document uncertainty", "If evidence is incomplete, record the finding as unresolved instead of guessing."],
];

const roundFlow = [
  ["01", "Read", "Identify required services, approved users, restrictions, and image-specific instructions."],
  ["02", "Baseline", "Capture accounts, services, processes, network state, security controls, and logs."],
  ["03", "Prioritize", "Handle active suspicious behavior, privilege exposure, disabled security controls, and broken mission services first."],
  ["04", "Remediate", "Make one narrow, justified change at a time and record it."],
  ["05", "Verify", "Confirm the change worked and did not break required users, services, shares, routes, or management access."],
  ["06", "Re-sweep", "Use the mid-round and final checklists to catch persistence, regression, and unfinished high-impact findings."],
];

const finalStandards = [
  "Required users, services, shares, roles, and network paths still work.",
  "Core security controls remain enabled and healthy.",
  "Privileged access matches the mission.",
  "Unneeded remote access is disabled only when the scenario supports that decision.",
  "High-impact findings are backed by evidence and verified after remediation.",
  "Important logs and forensic artifacts were preserved before state-changing actions.",
  "Every major change has a reason and a verification result.",
  "The team can explain what remains unresolved and why.",
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export default function CompetitionChecklistsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
            &larr; CyberPatriot Hub
          </Link>
          <div className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-400">
            Competition Checklists
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Competition Checklists
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fast reference without blind hardening
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Twelve quick-reference checklists for competition workflow, operating systems, networking, forensics, identity, services, documentation, verification, and final-round review.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                These support authorized practice and competition preparation. They do not replace scenario instructions or provide live-round answers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Section Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Total checklists</span><span className="font-bold text-white">12</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Platforms</span><span className="font-bold text-white">Windows + Linux + Cisco</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Forensics</span><span className="font-bold text-white">Included</span></div>
                <div className="flex items-center justify-between gap-6"><span>Primary goal</span><span className="font-bold text-white">Speed + Verification</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">What these are</p>
            <h2 className="mt-3 text-2xl font-black text-white">A competition memory aid</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Each checklist helps you remember what to inspect, what evidence to preserve, what dependencies to protect, and what to verify before moving on.</p>
          </div>
          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">What these are not</p>
            <h2 className="mt-3 text-2xl font-black text-white">Not a universal answer sheet</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">The scenario always overrides a generic checklist. Required accounts, services, remote access, shares, roles, and network behavior may differ from image to image.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Checklist rules" title="Use the lists without turning them into blind automation" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {checklistRules.map(([title, text]) => (
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
          <SectionHeading label="Checklist library" title="Twelve competition-ready references" description="Open any checklist below for a fast competition-ready reference." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {checklists.map((item) => (
              <Link href={checklistRoutes[item.number]} key={item.number} className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/40 hover:bg-slate-950">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-cyan-300">Checklist {item.number}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">{item.area}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">Focus</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.focus}</p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">When to use it</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.use}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-400">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center text-sm font-semibold text-cyan-200 transition group-hover:bg-cyan-400/10">
                    Open Checklist &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Round flow" title="Where the checklists fit during a competition" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roundFlow.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{number}</span>
                <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Final standard</p>
          <h2 className="mt-3 text-3xl font-black text-white">A checklist item is complete only when it is verified</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalStandards.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-3xl font-black text-white">Begin with the Competition Start Checklist</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Start with the opening-round checklist, then use the platform and verification references whenever they fit the competition phase.
          </p>
          <Link
            href="/cyberpatriot/competition-checklists/competition-start-checklist"
            className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/15"
          >
            Start Checklist 01 &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
