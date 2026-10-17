import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syncQuestions = [
  "What is each platform's current status?",
  "What has been verified since the last sync?",
  "What remains unresolved?",
  "Which finding has the highest current mission or security impact?",
  "Are two people unknowingly working the same problem?",
  "Did any recent change create a dependency for another platform?",
  "Does any platform need a second reviewer?",
  "Is the team still spending time on low-value work?",
];

const syncAreas = [
  { title: "Platform Health", detail: "Summarize whether each system is stable, degraded, blocked, or still awaiting verification." },
  { title: "Verified Progress", detail: "Identify work that is truly complete so the team does not duplicate or reopen it." },
  { title: "Unresolved Risk", detail: "Surface findings that still lack evidence, confidence, ownership, or a safe remediation path." },
  { title: "Dependencies", detail: "Call out services, accounts, network paths, or evidence that another teammate could accidentally disrupt." },
  { title: "Next Priorities", detail: "Choose the highest-value work for the next period instead of continuing automatically with whatever is open." },
  { title: "Time & Risk", detail: "Adjust the team's appetite for experimentation based on how much recovery time remains." },
];

const platformPrompts = [
  { platform: "Windows 11", items: ["Approved users and administrators still correct?", "Required services functional?", "Remote-access state understood?", "Persistence findings resolved or owned?", "Any high-impact change still awaiting verification?"] },
  { platform: "Windows Server", items: ["Required roles and services healthy?", "Privilege changes verified?", "Shares and permissions still support the mission?", "RDP or WinRM requirements still satisfied?", "Any reboot or role change carrying unresolved risk?"] },
  { platform: "Linux", items: ["Required services active and reachable?", "Users, groups, and sudo state understood?", "SSH requirement and exposure verified?", "Cron, timers, and persistence reviewed?", "Permission changes verified against required functionality?"] },
  { platform: "Cisco & Networking", items: ["Interfaces and VLANs expected?", "Required routes and reachability verified?", "ACL or management changes validated?", "Known-good configuration saved only after verification?", "Any unresolved path affecting another platform?"] },
  { platform: "Forensics", items: ["Important evidence preserved?", "Timeline work producing actionable findings?", "Suspicious files or processes still awaiting classification?", "Evidence linked to correct system and time context?", "Any high-confidence finding platform owners need now?"] },
  { platform: "Team Operations", items: ["Shared log current?", "Every active issue has one owner?", "Any duplicate work?", "Any teammate blocked?", "Does the lead know the current top priorities?"] },
];

const decisions = [
  { title: "Continue", detail: "The task remains high value, evidence is strong, and the owner has a safe next step." },
  { title: "Escalate", detail: "The issue crosses platforms, affects required functionality, or needs a second reviewer." },
  { title: "Pause", detail: "Evidence is weak, mission impact is uncertain, or the remediation risk is too high." },
  { title: "Reassign", detail: "A teammate is blocked while another teammate has the needed expertise or capacity." },
  { title: "Verify", detail: "A high-impact change is complete but the security result or mission function is not confirmed." },
  { title: "Defer", detail: "The issue is lower value than higher-priority work still open." },
];

const weakVsBetter = [
  { weak: "Everyone just says whether they are done.", better: "Each owner reports current state, verified work, unresolved risk, dependencies, and next action." },
  { weak: "Keep working unless something breaks.", better: "Use a short sync to catch duplicate work, hidden dependencies, and stale priorities early." },
  { weak: "Only discuss problems.", better: "Also identify verified work so the team protects known-good state." },
  { weak: "Do a long meeting in the middle of the round.", better: "Keep the sync brief, structured, and focused on decisions that change what happens next." },
  { weak: "If a task is complicated, save it for later.", better: "Mark it unresolved, assign ownership, document the blocker, and decide if it is worth more time." },
  { weak: "The lead should decide every technical detail.", better: "Platform owners provide evidence and status; the lead coordinates priorities and cross-platform risk." },
];

const duplicateSignals = [
  "Two teammates are reviewing the same account list.",
  "A platform owner discovers a setting someone else already changed.",
  "Multiple people are investigating the same service or listener.",
  "Two different versions of the status log exist.",
  "A teammate repeats evidence collection already completed elsewhere.",
  "A verified issue reappears because completion was not documented.",
];

const dependencySignals = [
  "A service account is used by another platform or scheduled task.",
  "A firewall or ACL change affects required remote management.",
  "A server role supports a required application or share.",
  "A network path is needed for verification on another system.",
  "A user or group change affects access to multiple systems.",
  "A reboot could interrupt another teammate's investigation.",
  "A file slated for removal is still needed for evidence.",
  "A configuration save could preserve a broken network state.",
];

const warningSigns = [
  "A platform owner cannot summarize current status in one minute.",
  "The team does not know which issues are already verified.",
  "Two people are working the same problem without coordination.",
  "An unresolved dependency exists only in private notes.",
  "Low-priority cleanup is consuming time while P1 or P2 work remains.",
  "A major change has no verifier.",
  "The team lead does not know which platform is most at risk.",
  "A teammate has been blocked for a long time without escalating.",
];

const finalChecklist = [
  "Every platform reported current health.",
  "Verified work was identified and protected.",
  "Unresolved items remain visible.",
  "Duplicate work was stopped.",
  "Cross-platform dependencies were surfaced.",
  "Blocked teammates received help or a new plan.",
  "High-impact unverified changes were identified.",
  "P1 and P2 priorities were refreshed.",
  "Low-value work was deferred when necessary.",
  "The team understands the next major action on each platform.",
  "Shared documentation was updated.",
  "Risk tolerance was adjusted for the remaining time.",
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

export default function MidRoundTeamSyncPage() {
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
            <Link href="/cyberpatriot/competition-day-guide/evidence-change-log-discipline" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/final-30-minutes"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">CyberPatriot &middot; Competition Day Guide &middot; Guide 09</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Mid-Round Team Sync</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A short mid-round sync lets the team compare platform health, verified progress, unresolved risk, dependencies, and the next highest-value work before small coordination problems become late-round failures.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">This is not a long meeting. It is a decision point for what the team should continue, stop, verify, escalate, reassign, or defer.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Sync Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                {[['Status','Shared'],['Duplicates','Stopped'],['Dependencies','Visible'],['Priorities','Refreshed']].map(([a,b], i) => (
                  <div key={a} className={`flex items-center justify-between gap-6 ${i < 3 ? 'border-b border-slate-800 pb-3' : ''}`}><span>{a}</span><span className="font-bold text-white">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Mid-round rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Stop briefly so the team can move faster in the right direction</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">A two- to five-minute synchronization can save much more time when it prevents duplicate investigations, conflicting changes, hidden dependencies, or stale priorities.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Eight sync questions" title="Get the current operational picture quickly" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {syncQuestions.map((q, i) => <div key={q} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{q}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Sync board" title="Review the areas that can change the team's next move" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {syncAreas.map((x) => <div key={x.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-cyan-300">{x.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{x.detail}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Platform prompts" title="Each owner should be able to summarize these points" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformPrompts.map((area) => <div key={area.platform} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-xl font-black text-white">{area.platform}</h3><div className="mt-4 grid gap-2">{area.items.map((item) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">{item}</div>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Duplicate-work signals</p>
            <h2 className="mt-3 text-3xl font-black text-white">Stop spending two people's time on one discovery</h2>
            <div className="mt-8 grid gap-3">{duplicateSignals.map((x,i) => <div key={x} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{x}</p></div>)}</div>
          </div>
          <div className="rounded-3xl border border-yellow-400/15 bg-yellow-400/5 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Dependency signals</p>
            <h2 className="mt-3 text-3xl font-black text-white">Surface what another teammate could accidentally break</h2>
            <div className="mt-8 grid gap-3">{dependencySignals.map((x,i) => <div key={x} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"><span className="font-black text-yellow-200">{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{x}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Sync decisions</p>
          <h2 className="mt-3 text-3xl font-black text-white">End with clear decisions, not only status updates</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{decisions.map((x) => <div key={x.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-cyan-300">{x.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{x.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak sync vs better sync</p>
          <h2 className="mt-3 text-3xl font-black text-white">Replace a long meeting with a short operational reset</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{weakVsBetter.map((x) => <div key={x.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak sync</p><p className="mt-2 text-sm leading-7 text-slate-400">{x.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better sync</p><p className="mt-2 text-sm leading-7 text-slate-300">{x.better}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Sync warning signs</p>
          <h2 className="mt-3 text-3xl font-black text-white">These signals mean shared situational awareness is slipping</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{warningSigns.map((x,i) => <div key={x} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{x}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Mid-Round Sync final checklist</p>
          <h2 className="mt-3 text-3xl font-black text-white">Resume with shared priorities and fewer hidden risks</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{finalChecklist.map((x,i) => <div key={x} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{x}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/evidence-change-log-discipline" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/final-30-minutes"
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
