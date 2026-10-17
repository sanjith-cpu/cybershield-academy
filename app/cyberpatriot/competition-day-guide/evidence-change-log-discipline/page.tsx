import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const logFields = [
  ["Time", "When the finding or change occurred so later events can be correlated."],
  ["System", "The exact device, VM, server, switch, or platform involved."],
  ["Owner", "The teammate responsible for the current state of the item."],
  ["Finding", "What was observed before jumping to a conclusion."],
  ["Evidence", "The command output, log source, path, configuration state, or other support for the finding."],
  ["Change", "Exactly what was changed instead of simply writing that something was fixed."],
  ["Reason", "Why the change was justified by the mission, evidence, and security impact."],
  ["Verification", "How the team proved the security result and required functionality."],
  ["Follow-up", "Unresolved questions, dependencies, rollback notes, or work another teammate must continue."],
];

const evidenceAreas = [
  { title: "Identity", items: ["User and group membership", "Recent account changes", "Privileged logon evidence", "Service-account ownership"] },
  { title: "Services", items: ["Service state", "Startup configuration", "Listening port and owning process", "Role or dependency information"] },
  { title: "Persistence", items: ["Scheduled tasks", "Cron jobs and timers", "Startup entries", "New or unusual services"] },
  { title: "Network", items: ["Interface state", "Routes", "Firewall or ACL state", "Remote-management exposure"] },
  { title: "Files", items: ["Path", "Metadata", "Hash when appropriate", "Related process or account context"] },
  { title: "Mission", items: ["Required application works", "Required service responds", "Approved remote access works", "Expected user can authenticate"] },
];

const preservation = [
  "Capture the original state before changing it.",
  "Separate observation from interpretation.",
  "Do not rely only on terminal scrollback.",
  "Keep timestamps and system names with important evidence.",
  "Preserve useful file metadata before deleting or moving suspicious files.",
  "Record high-impact changes immediately.",
  "Keep unresolved items visible instead of guessing.",
  "Use the shared team record for important findings.",
];

const workflow = [
  ["01", "Observe", "Write down what you actually see before deciding what it means."],
  ["02", "Preserve", "Capture the minimum evidence needed to understand the original state later."],
  ["03", "Decide", "Explain why a change is justified and what required function could be affected."],
  ["04", "Change narrowly", "Modify only the account, service, rule, file, task, or setting supported by the evidence."],
  ["05", "Verify", "Confirm both the intended security improvement and the mission function."],
  ["06", "Document", "Update the shared record with the result, status, and follow-up."],
];

const strongNotes = [
  { weak: "Removed bad admin.", better: "Win11-01, 10:24 - tempadmin was in local Administrators and was not listed as approved. Removed it from Administrators and verified the approved admin still had administrative access." },
  { weak: "Fixed SSH.", better: "Linux-01, 10:41 - sshd is required by mission. Confirmed service and listener state, changed only the justified setting, then tested approved access." },
  { weak: "Changed firewall.", better: "Server-01, 11:05 - inbound rule allowed broader access than required. Narrowed the rule and verified the required service remained reachable from the approved path." },
  { weak: "Suspicious task deleted.", better: "Win11-01, 11:18 - captured task name, trigger, action, run account, and related path before removal. Verified the task was gone and required startup behavior still worked." },
];

const handoffQuestions = [
  "What did you find?",
  "What evidence supports it?",
  "What changed?",
  "Why was that change justified?",
  "How was it verified?",
  "What remains unresolved?",
  "What should the next teammate avoid changing?",
  "What is the next recommended action?",
];

const weakVsBetter = [
  ["Document everything at the end.", "Record high-impact findings and changes while the context is still fresh."],
  ["Copy huge command outputs into the log.", "Capture the evidence that explains the decision and preserve larger output separately only when useful."],
  ["If we fixed it, the original state no longer matters.", "Preserve enough original state to explain what changed and why."],
  ["Everyone can keep their own notes.", "Private notes are fine, but critical findings, changes, verification, and unresolved items belong in the shared record."],
  ["A screenshot proves the conclusion.", "Treat screenshots, logs, commands, and configuration state as evidence that still requires context and interpretation."],
  ["Verified means the command returned success.", "Verification includes both the security result and required mission functionality."],
];

const warningSigns = [
  "A major change has no recorded original state.",
  "A teammate cannot explain why a change was made.",
  "Evidence exists only in terminal history.",
  "The shared log contains vague entries such as fixed, done, or cleaned.",
  "A suspicious file was deleted before its path or metadata was recorded.",
  "A high-impact change is marked complete without verification.",
  "Two teammates have conflicting notes about the same system.",
  "An unresolved issue disappeared from the board without a decision.",
];

const finalChecklist = [
  "Important findings include system and time context.",
  "Original state is captured before high-impact changes.",
  "Observation is separated from interpretation.",
  "Evidence is concise but sufficient.",
  "Important persistence or file evidence is preserved before removal.",
  "Each major change includes a reason.",
  "Verification covers security and mission functionality.",
  "Shared notes are updated during the round.",
  "Unresolved findings remain visible.",
  "Handoffs include evidence, change, verification, and next action.",
  "Private notes do not replace the shared team record.",
  "The final log can explain the major decisions of the round.",
];

function Heading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export default function EvidenceChangeLogDisciplinePage() {
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
            <Link href="/cyberpatriot/competition-day-guide/platform-work-cycles" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/mid-round-team-sync"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Competition Day Guide &middot; Guide 08 &middot; Evidence &amp; Change Log</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Evidence &amp; Change Log Discipline</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The team should be able to explain what it observed, what it changed, why the change was justified, and how the result was verified. That requires evidence and documentation during the round, not reconstructed from memory at the end.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">Good notes reduce duplicate work, improve handoffs, preserve context, and make high-impact decisions easier to review.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Documentation Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                {[['Original state','Captured'],['Evidence','Specific'],['Changes','Traceable'],['Verification','Recorded']].map(([a,b]) => (
                  <div key={a} className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3 last:border-0 last:pb-0"><span>{a}</span><span className="font-bold text-white">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Evidence rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Preserve enough original state to explain the decision later</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Documentation should support action, not slow the team down. Capture what matters, make the narrow change, verify it, and update the shared record while the context is still fresh.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <Heading label="Change log fields" title="Record the information the next teammate will actually need" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {logFields.map(([title, detail]) => <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-cyan-300">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{detail}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <Heading label="Evidence categories" title="Preserve the evidence that explains the system state" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {evidenceAreas.map((area) => <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-xl font-black text-white">{area.title}</h3><div className="mt-4 grid gap-2">{area.items.map((item) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">{item}</div>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Change discipline</p>
          <h2 className="mt-3 text-3xl font-black text-white">Keep evidence, action, and verification connected</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{workflow.map(([step,title,detail]) => <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-sm font-black text-cyan-300">Step {step}</p><h3 className="mt-3 text-lg font-black text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{detail}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <Heading label="Preservation rules" title="Keep evidence useful without turning documentation into the whole round" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">{preservation.map((item,index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <Heading label="Strong notes" title="Write notes that preserve the decision, not just the outcome" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">{strongNotes.map((item) => <div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Too vague</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better note</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak habit vs better habit</p>
          <h2 className="mt-3 text-3xl font-black text-white">Replace memory-based documentation with live operational records</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{weakVsBetter.map(([weak,better]) => <div key={weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak habit</p><p className="mt-2 text-sm leading-7 text-slate-400">{weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better habit</p><p className="mt-2 text-sm leading-7 text-slate-300">{better}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <Heading label="Handoff questions" title="A clean handoff should answer these immediately" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">{handoffQuestions.map((item,index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(index+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Documentation warning signs</p>
          <h2 className="mt-3 text-3xl font-black text-white">These signals mean the team is losing operational context</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{warningSigns.map((item,index) => <div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Evidence &amp; Change Log final checklist</p>
          <h2 className="mt-3 text-3xl font-black text-white">Make every major decision understandable after the fact</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{finalChecklist.map((item,index) => <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index+1).padStart(2,'0')}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/platform-work-cycles" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/mid-round-team-sync"
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
