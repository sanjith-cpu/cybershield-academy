import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roles = [
  { title: "Team Lead", detail: "Maintains priorities, watches the clock, resolves ownership conflicts, coordinates late-round risk, and keeps the team aligned with the mission." },
  { title: "Platform Owner", detail: "Owns the current state of one system or platform, including findings, changes, verification, and handoff." },
  { title: "Verifier", detail: "Confirms that high-impact changes achieved the intended security result without breaking required functionality." },
  { title: "Evidence / Log Owner", detail: "Keeps the shared record usable and makes sure important evidence does not remain only in private notes." },
];

const statuses = [
  { state: "Not Started", meaning: "Known task, but nobody is actively working it yet." },
  { state: "Investigating", meaning: "Evidence is being collected and no final remediation decision has been made." },
  { state: "Changed", meaning: "A remediation was applied but verification is still pending." },
  { state: "Verified", meaning: "The change was confirmed and required functionality still works." },
  { state: "Unresolved", meaning: "The team lacks enough evidence, confidence, or time for a safe decision." },
  { state: "Do Not Touch", meaning: "A known dependency or high-risk area should not be changed without coordination." },
];

const communicationRules = [
  "Say what system you are talking about.",
  "Say what you observed, not only what you think happened.",
  "Say what you changed.",
  "Say whether the change was verified.",
  "Say what remains unresolved.",
  "Say what other teammates should avoid touching.",
  "Keep updates short enough that people will actually use them.",
  "Escalate early when a dependency crosses platforms.",
];

const handoff = [
  "Platform / system",
  "Current owner",
  "Current status",
  "Important finding",
  "Supporting evidence",
  "Change made",
  "Verification result",
  "Known dependency",
  "Unresolved item",
  "Next recommended action",
];

const examples = [
  { weak: "Windows is done.", better: "Windows 11: users, admins, services, Defender, Firewall, tasks, and RDP reviewed. One unauthorized admin removed and verified. No unresolved items." },
  { weak: "Can someone check Linux?", better: "Linux: sshd is required, but exposure looks broader than expected. Service and firewall state checked. Need a second review of allowed source scope before changing anything." },
  { weak: "I fixed the network.", better: "Cisco: VLAN 20 was missing from one trunk. Added VLAN 20 only, verified required reachability, and saved the known-good config." },
  { weak: "Don't touch that account.", better: "Do not change svc-backup yet. It appears to run the scheduled backup task and still needs dependency review." },
];

const escalation = [
  "What system is affected?",
  "What exact symptom or finding exists?",
  "What evidence supports the concern?",
  "What has already been checked or changed?",
  "What required function could break?",
  "What specific help is needed?",
];

const warnings = [
  "Two teammates are modifying the same system.",
  "Nobody can say who owns a platform.",
  "A major change was made but not verified.",
  "A known dependency exists only in one person's memory.",
  "The shared log is missing recent high-impact work.",
  "An unresolved issue has no owner.",
  "A teammate says a platform is done without evidence.",
  "A risky late change is happening without the team lead knowing.",
];

const finalChecklist = [
  "Every major platform has a clear owner.",
  "The team lead understands current priorities.",
  "A verifier role is available for high-impact changes.",
  "The shared status method is ready before the round starts.",
  "Status labels mean the same thing to everyone.",
  "Important findings move into the shared record.",
  "Dependencies and do-not-touch items are visible.",
  "Escalations include enough context to avoid repeating discovery work.",
  "Major changes are reported with verification results.",
  "Unresolved items have owners or are clearly documented.",
  "Late-round risky changes require coordination.",
  "Handoffs preserve evidence, change, verification, and next action.",
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
    </div>
  );
}

export default function TeamRolesCommunicationPlanPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/arrival-workspace-setup" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/first-10-minutes"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Competition Day Guide &middot; Guide 03 &middot; Team Roles</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Team Roles &amp; Communication Plan</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Before the round starts, the team should know who owns each platform, who coordinates priorities, how major changes are verified, and how important findings move into the shared record.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">Good communication is not constant talking. It is concise, specific, and tied to ownership, evidence, status, and next action.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Team Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Ownership</span><span className="font-bold text-white">Clear</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Status</span><span className="font-bold text-white">Shared</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Escalation</span><span className="font-bold text-white">Specific</span></div>
                <div className="flex items-center justify-between gap-6"><span>Handoff</span><span className="font-bold text-white">Complete</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Team rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Every important system should have one clear current owner</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Multiple teammates can help, but ownership should never become ambiguous. One person should know the current state, recent changes, verification result, and unresolved risk for each platform.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Core roles" title="Assign responsibilities before the clock starts" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{roles.map((item)=><div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Communication rules" title="Keep updates short and actionable" /><div className="mt-8 grid gap-3">{communicationRules.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Status language" title="Use shared states" /><div className="mt-8 grid gap-3">{statuses.map((item)=><div key={item.state} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-black text-cyan-300">{item.state}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.meaning}</p></div>)}</div></div>
      </div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Handoff template" title="Preserve context when ownership changes" /><div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{handoff.map((item,index)=><div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center"><p className="text-sm font-black text-cyan-300">{String(index+1).padStart(2,"0")}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9"><SectionHeading label="Strong messages" title="Replace vague updates with useful context" /><div className="mt-8 grid gap-5 md:grid-cols-2">{examples.map((item)=><div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Too vague</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Escalation" title="Ask for help without restarting the investigation" /><div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{escalation.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9"><SectionHeading label="Warning signs" title="Stop and realign when coordination breaks down" /><div className="mt-8 grid gap-3 md:grid-cols-2">{warnings.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9"><SectionHeading label="Final checklist" title="Start with clear ownership and clean handoffs" /><div className="mt-8 grid gap-3 md:grid-cols-2">{finalChecklist.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/arrival-workspace-setup" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/first-10-minutes"
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
