import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  { window: "15-12 minutes", title: "Freeze broad experimentation", detail: "Stop low-confidence changes, large configuration rewrites, unnecessary installs, and anything without a fast rollback path." },
  { window: "12-9 minutes", title: "Verify mission functions", detail: "Check required services, approved access, network paths, applications, shares, and platform-specific mission requirements." },
  { window: "9-6 minutes", title: "Finish only high-confidence work", detail: "Complete small, evidence-backed fixes that can be verified immediately. Defer uncertain or invasive work." },
  { window: "6-4 minutes", title: "Stabilize and save", detail: "Preserve known-good state, save verified network configuration, and avoid replacing a working state with an unverified one." },
  { window: "4-2 minutes", title: "Team status sweep", detail: "Every owner reports final state, unresolved items, verification status, and any area that should not be touched." },
  { window: "2-0 minutes", title: "Documentation and final check", detail: "Confirm the shared record is current, unresolved risks are visible, and no teammate is still making an uncoordinated high-impact change." },
];

const platformChecks = [
  { title: "Windows 11", items: ["Approved users and administrators are correct.", "Required applications and services still work.", "Firewall and remote-access state are understood.", "Security controls changed during the round are verified.", "No unverified startup or scheduled-task changes remain."] },
  { title: "Windows Server", items: ["Required roles and services are healthy.", "Approved administrative access still works.", "Shares and required permissions remain functional.", "RDP or WinRM requirements are satisfied.", "No risky reboot or role change remains pending."] },
  { title: "Linux", items: ["Required services are active.", "Approved users and sudo state remain correct.", "SSH requirements are preserved.", "Firewall and listening-service changes are verified.", "No permission or package change remains unverified."] },
  { title: "Cisco & Networking", items: ["Interfaces and required VLANs are up.", "Expected routes and reachability work.", "ACL or management-access changes are verified.", "Known-good configuration is saved only after validation.", "No experimental network change remains active."] },
  { title: "Forensics", items: ["Important evidence has been preserved.", "High-confidence findings were communicated to platform owners.", "Suspicious files or artifacts were not destroyed prematurely.", "Timeline notes include system and time context.", "Unresolved evidence questions are documented."] },
  { title: "Team Operations", items: ["Shared change log is current.", "Every major issue has a final status.", "Unresolved items are visible.", "No duplicate work is still happening.", "Team lead knows the final risk picture."] },
];

const stopDoing = [
  "Bulk account cleanup without confirmed mission context",
  "Large firewall or ACL rewrites",
  "Recursive permission changes",
  "Unplanned package removal",
  "New security-tool installations",
  "Service disablement based only on unfamiliarity",
  "Experimental registry or policy changes",
  "Unnecessary reboots",
  "Deleting evidence before documentation",
  "Changing several variables at once",
  "Reopening already verified issues without new evidence",
  "Making a major change without telling the team",
];

const safeLateActions = [
  "Verify required functionality.",
  "Confirm approved users and administrators.",
  "Record unresolved findings.",
  "Finish a small high-confidence remediation.",
  "Re-test a recently changed service.",
  "Confirm network reachability.",
  "Save a verified known-good network configuration.",
  "Update the shared change log.",
  "Hand off remaining risk clearly.",
  "Protect stable systems from unnecessary changes.",
];

const goNoGo = [
  "Do we have strong evidence for this change?",
  "Is the security or mission value high enough to justify it now?",
  "Can we verify the result before time expires?",
  "Can we reverse the change if it fails?",
  "Could it break required functionality?",
  "Does the platform owner know this change is happening?",
  "Is a safer alternative available?",
  "Would leaving the system in its current verified state be lower risk?",
];

const statusReport = ["Platform", "Owner", "Mission status", "Last verified change", "Outstanding risk", "Unresolved item", "Do-not-touch area", "Final recommendation"];

const weakVsBetter = [
  { weak: "Use every remaining minute to keep hardening.", better: "Shift from discovery and experimentation to verification, stabilization, and only high-confidence fixes." },
  { weak: "If a change is probably right, do it before time runs out.", better: "Require evidence, mission value, a verification path, and acceptable rollback risk." },
  { weak: "Save the network config at the end no matter what.", better: "Save only a configuration that has been validated as known-good." },
  { weak: "Ignore documentation because time is short.", better: "Use concise final notes so unresolved risks and major changes are not lost." },
  { weak: "Reboot if something seems strange.", better: "Reboot only when clearly justified and when there is still enough time to verify recovery." },
  { weak: "Everyone should finish their own tasks independently.", better: "Use a final team sync so one late change does not break another platform or required dependency." },
];

const warningSigns = [
  "A teammate is still making broad changes with only a few minutes left.",
  "A required service has not been re-tested after recent changes.",
  "The network configuration is being saved without verification.",
  "An unresolved high-impact issue has no owner or note.",
  "A reboot is being considered without a clear reason.",
  "The shared log has not been updated recently.",
  "Two teammates disagree about the current state of a platform.",
  "Someone is still experimenting on a stable system.",
];

const finalChecklist = [
  "Broad experimentation has stopped.",
  "Required services and applications were re-tested.",
  "Approved administrative access still works.",
  "Network reachability is verified.",
  "High-impact changes have verification results.",
  "Known-good network configuration is saved if appropriate.",
  "No unnecessary reboot is pending.",
  "Unresolved findings are documented.",
  "Shared change log is current.",
  "Each platform owner reported final status.",
  "The team lead understands remaining risk.",
  "No last-second uncoordinated change is in progress.",
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

export default function FinalFifteenMinutesPage() {
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
            <Link href="/cyberpatriot/competition-day-guide/final-30-minutes" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/post-round-debrief"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Competition Day Guide &middot; Guide 11 &middot; Final 15 Minutes</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Final 15 Minutes</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The final fifteen minutes are about protecting known-good state. Broad experimentation stops. Verification, stabilization, documentation, and clean team handoffs become the priority.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">A small late improvement is not worth creating a regression the team no longer has time to diagnose and recover from.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Final 15 Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Experimentation</span><span className="font-bold text-white">Frozen</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Mission functions</span><span className="font-bold text-white">Verified</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Known-good state</span><span className="font-bold text-white">Protected</span></div>
                <div className="flex items-center justify-between gap-6"><span>Team status</span><span className="font-bold text-white">Finalized</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Final-15 rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Stabilization is more valuable than one more uncertain change</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">As recovery time disappears, the threshold for making a change should rise. Prefer verified functionality, known-good state, and clean documentation over low-confidence last-minute hardening.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="15-minute timeline" title="Reduce risk as the clock approaches zero" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.window} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black text-cyan-300">{item.window}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Platform sweeps" title="Verify the systems the team is about to leave in place" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformChecks.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{area.title}</h3>
                <div className="mt-4 grid gap-2">
                  {area.items.map((item) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Stop doing</p>
            <h2 className="mt-3 text-3xl font-black text-white">Avoid late changes with large blast radius</h2>
            <div className="mt-8 grid gap-3">
              {stopDoing.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/5 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Safer late actions</p>
            <h2 className="mt-3 text-3xl font-black text-white">Spend the remaining time on confidence and stability</h2>
            <div className="mt-8 grid gap-3">
              {safeLateActions.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Go / No-Go questions</p>
          <h2 className="mt-3 text-3xl font-black text-white">Ask these before any meaningful late change</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {goNoGo.map((question, index) => <div key={question} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{question}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Final status report" title="Every platform owner should leave these fields clear" />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {statusReport.map((item, index) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center"><p className="text-sm font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak habit vs better habit</p>
          <h2 className="mt-3 text-3xl font-black text-white">Replace late-round urgency with disciplined stabilization</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {weakVsBetter.map((item) => (
              <div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak habit</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better habit</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Final warning signs</p>
          <h2 className="mt-3 text-3xl font-black text-white">These signals mean the team should stop and protect the current state</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {warningSigns.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Final 15 Minutes checklist</p>
          <h2 className="mt-3 text-3xl font-black text-white">Finish stable, verified, documented, and coordinated</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide/final-30-minutes" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/post-round-debrief"
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
