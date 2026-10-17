import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baselineAreas = [
  {
    title: "Identity",
    items: [
      "Approved users and expected administrators",
      "Disabled or unfamiliar accounts",
      "Privileged group membership",
      "Service and automation accounts",
      "Recent account changes if evidence is available",
    ],
  },
  {
    title: "Services & Remote Access",
    items: [
      "Required services and roles",
      "Unexpected listeners",
      "RDP, SSH, WinRM, or management exposure",
      "Service startup state",
      "Dependencies that could affect required functionality",
    ],
  },
  {
    title: "Persistence",
    items: [
      "Scheduled tasks",
      "Cron jobs and timers",
      "Startup entries",
      "New or unusual services",
      "Known autorun or login-start locations",
    ],
  },
  {
    title: "Network",
    items: [
      "IP configuration",
      "Default route and expected reachability",
      "Important VLAN or interface state",
      "Firewall or ACL posture",
      "Required remote paths",
    ],
  },
  {
    title: "Evidence",
    items: [
      "Important logs",
      "Relevant timestamps",
      "Suspicious file locations",
      "Process and service evidence",
      "Notes about what existed before remediation",
    ],
  },
  {
    title: "Mission Health",
    items: [
      "Required applications work",
      "Required shares or services respond",
      "Approved remote access works",
      "Important users can authenticate",
      "Platform owner can explain current status",
    ],
  },
];

const priorityFactors = [
  { title: "Mission Impact", question: "Could this issue break a required service, approved access path, or scoring-sensitive function?" },
  { title: "Security Impact", question: "Does this issue create meaningful unauthorized access, privilege, persistence, exposure, or evidence risk?" },
  { title: "Evidence Confidence", question: "Do we have enough evidence to justify the conclusion and the remediation?" },
  { title: "Change Risk", question: "Could the proposed action create a larger problem than the one we are trying to solve?" },
  { title: "Reversibility", question: "Can we safely undo the change if verification fails?" },
  { title: "Time Cost", question: "Is the likely value worth the investigation and remediation time right now?" },
];

const boardColumns = [
  { title: "Finding", detail: "Short description of the issue or question." },
  { title: "Platform", detail: "Windows, Server, Linux, Cisco, Forensics, or shared operations." },
  { title: "Owner", detail: "One person responsible for the current state of the item." },
  { title: "Priority", detail: "P1, P2, P3, or P4 based on mission, security, evidence, and risk." },
  { title: "Evidence", detail: "What supports the finding before remediation." },
  { title: "Status", detail: "Investigating, Changed, Verified, Unresolved, or Do Not Touch." },
  { title: "Verification", detail: "How the team will prove both security improvement and mission health." },
  { title: "Notes", detail: "Dependencies, rollback information, and handoff details." },
];

const priorityModel = [
  { level: "P1", title: "Immediate", detail: "Mission-breaking failure, dangerous unauthorized privilege, major persistence, or critical network/service problem with strong evidence." },
  { level: "P2", title: "High Value", detail: "Confirmed security issue with meaningful impact, understood remediation, and a safe verification path." },
  { level: "P3", title: "Useful", detail: "Hardening or cleanup that improves security but is less urgent than confirmed access, privilege, persistence, or mission problems." },
  { level: "P4", title: "Low Confidence / Low Value", detail: "Weak evidence, small likely benefit, cosmetic cleanup, or a risky change that is not justified by current information." },
];

const boardExamples = [
  { finding: "Unknown local administrator", priority: "P1 or P2", reason: "Potential unauthorized privilege. Confirm identity and mission context before removal." },
  { finding: "Required service stopped", priority: "P1", reason: "Mission impact is immediate. Verify expected role and restore only with evidence-backed reasoning." },
  { finding: "Unfamiliar scheduled task", priority: "P2", reason: "Potential persistence. Preserve task details and related evidence before remediation." },
  { finding: "Cosmetic desktop setting", priority: "P4", reason: "Little security value compared with identity, persistence, service, and network work." },
  { finding: "Broad remote-management exposure", priority: "P2", reason: "Meaningful exposure, but changes must preserve approved administration requirements." },
  { finding: "Package or service that is merely unfamiliar", priority: "Investigate first", reason: "Unknown does not equal malicious. Gather dependency and mission evidence before changing it." },
];

const weakVsBetter = [
  { weak: "Make a giant checklist and work top to bottom.", better: "Build a live priority board and reorder work as stronger evidence or mission problems appear." },
  { weak: "Everything suspicious is urgent.", better: "Separate confirmed high-impact issues from low-confidence findings." },
  { weak: "Baseline means taking screenshots of everything.", better: "Capture the state that will help explain later changes, verify mission health, and preserve evidence." },
  { weak: "The first person who sees an issue should fix it.", better: "Assign an owner, record evidence, rank priority, then remediate with a verification plan." },
  { weak: "Once an issue is fixed, remove it from the board.", better: "Keep the item visible as Verified so the team preserves history and avoids duplicate work." },
  { weak: "Low-priority means ignore forever.", better: "Defer low-value work until higher-risk items are controlled, then reassess if time allows." },
];

const recheckTriggers = [
  "A required service stops working.",
  "A new privileged account is discovered.",
  "A suspicious persistence mechanism is confirmed.",
  "Network reachability changes unexpectedly.",
  "A teammate makes a high-impact change.",
  "New evidence changes confidence in an earlier conclusion.",
  "A platform owner hands work to another teammate.",
  "The round enters the final 30 minutes.",
];

const finalQuestions = [
  "Can the team explain the current baseline of every platform?",
  "Are required services and remote-access paths documented?",
  "Are privileged identities and service accounts classified?",
  "Does every major finding have an owner?",
  "Are P1 and P2 issues clearly separated from lower-value work?",
  "Does each high-impact change have a verification plan?",
  "Are low-confidence findings marked as unresolved rather than guessed at?",
  "Can the team identify the single highest-value next action?",
];

const finalChecklist = [
  "Baseline covers identity, services, persistence, network, evidence, and mission health.",
  "Required functions are recorded before major changes.",
  "Priority board is visible to the team.",
  "Every active item has one owner.",
  "P1 issues represent true mission or critical security risk.",
  "P2 issues have meaningful impact and strong evidence.",
  "P3 work waits behind higher-value findings.",
  "P4 work does not distract the team early.",
  "Evidence is recorded before remediation.",
  "Verification is defined before risky changes.",
  "Verified work remains visible in the team record.",
  "Priorities are rechecked when conditions change.",
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

export default function BaselinePriorityBoardPage() {
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
            <Link href="/cyberpatriot/competition-day-guide/mission-readme-extraction" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/platform-work-cycles"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Competition Day Guide &middot; Guide 06 &middot; Baseline &amp; Priority</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Baseline &amp; Priority Board</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A baseline tells the team what existed before major changes. A priority board turns findings into controlled work instead of a race to fix everything at once.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">The strongest teams know both the current system state and the reason one task deserves attention before another.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Operating Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Baseline</span><span className="font-bold text-white">Known</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Findings</span><span className="font-bold text-white">Owned</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Priorities</span><span className="font-bold text-white">Ranked</span></div>
                <div className="flex items-center justify-between gap-6"><span>Changes</span><span className="font-bold text-white">Verifiable</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Baseline rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Capture enough original state to explain and verify what changes</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">A baseline is not endless documentation. It is a practical record of the identities, services, persistence, network state, evidence, and mission functions that matter to later decisions.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Baseline areas" title="Know the starting state that matters" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {baselineAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{area.title}</h3>
                <div className="mt-4 grid gap-2">{area.items.map((item) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Priority factors" title="Rank work using more than suspicion" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{priorityFactors.map((item)=><div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-cyan-300">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.question}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">P1-P4 model</p><h2 className="mt-3 text-3xl font-black text-white">Give the team a shared meaning for urgency</h2><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{priorityModel.map((item)=><div key={item.level} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-2xl font-black text-cyan-300">{item.level}</p><h3 className="mt-3 text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Priority board" title="Track the information needed to make safe decisions" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{boardColumns.map((item)=><div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Example findings" title="Think about evidence and mission impact together" /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{boardExamples.map((item)=><div key={item.finding} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">{item.priority}</p><h3 className="mt-3 text-lg font-black text-white">{item.finding}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.reason}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak habit vs better habit</p><h2 className="mt-3 text-3xl font-black text-white">Replace random task selection with visible priorities</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{weakVsBetter.map((item)=><div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak habit</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better habit</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Re-prioritize when</p><h2 className="mt-3 text-3xl font-black text-white">The board should change when the environment changes</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{recheckTriggers.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Final questions" title="Check whether the team is working from the same picture" /><div className="mt-8 grid gap-3 md:grid-cols-2">{finalQuestions.map((question,index)=><div key={question} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{question}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Baseline &amp; Priority final checklist</p><h2 className="mt-3 text-3xl font-black text-white">Know the starting state and the highest-value next action</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{finalChecklist.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/mission-readme-extraction" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/platform-work-cycles"
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
