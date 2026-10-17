import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const extractionFields = [
  { title: "Approved users", detail: "Write down which users are expected to exist, which accounts are administrators, and whether any special-purpose identities are explicitly required." },
  { title: "Required services", detail: "Record the services, roles, applications, shares, websites, or network functions that must remain available during the round." },
  { title: "Remote access", detail: "Identify whether RDP, SSH, WinRM, VPN, console access, or another management path is required, optional, restricted, or prohibited." },
  { title: "Network requirements", detail: "Capture required IP relationships, VLANs, routing behavior, DNS, gateway, or reachability expectations described in the scenario." },
  { title: "Special constraints", detail: "Record explicit do-not-change instructions, required software, protected files, evidence requirements, or platform-specific limitations." },
  { title: "Scoring-sensitive functions", detail: "Mark anything whose failure would affect mission availability so the team verifies it after related changes." },
];

const extractionProcess = [
  { step: "01", title: "Read once without editing", detail: "Read the scenario from beginning to end before changing settings. The first pass builds context and prevents isolated details from being misunderstood." },
  { step: "02", title: "Highlight mission requirements", detail: "Mark users, services, access paths, network functions, applications, files, and restrictions that the team must preserve." },
  { step: "03", title: "Separate facts from assumptions", detail: "Only place explicit scenario statements into the mission record. Keep uncertain interpretations in a separate notes area." },
  { step: "04", title: "Assign platform owners", detail: "Route each requirement to the teammate responsible for that platform so nobody misses a critical dependency." },
  { step: "05", title: "Create verification targets", detail: "Turn mission requirements into checks the team can repeat after changes and again late in the round." },
  { step: "06", title: "Keep the mission visible", detail: "The extracted mission should stay open or easy to reach so it remains part of technical decision-making throughout the round." },
];

const extractionTable = [
  ["Approved users", "Who must exist?", "Identity owner"],
  ["Privileged users", "Who may be admin/root?", "Identity owner"],
  ["Required services", "What must stay running?", "Platform owner"],
  ["Remote access", "What management path is required?", "Platform owner"],
  ["Network path", "What systems must communicate?", "Network owner"],
  ["Applications / shares", "What function must remain usable?", "Platform owner"],
  ["Protected evidence", "What should not be altered?", "Forensics owner"],
  ["Restrictions", "What does the scenario explicitly forbid?", "Team lead"],
];

const commonMistakes = [
  "Reading only the first paragraph and beginning changes immediately.",
  "Treating every unfamiliar user as unauthorized.",
  "Disabling a service because it is not personally familiar.",
  "Assuming RDP or SSH should always be disabled.",
  "Ignoring application or share requirements while hardening the host.",
  "Forgetting that a network rule can break a required service even when the host itself is healthy.",
  "Mixing explicit scenario requirements with guesses or habits from previous rounds.",
  "Keeping mission details in one teammate's private notes instead of the shared team view.",
  "Failing to turn requirements into verification checks.",
  "Not revisiting the mission before late-round high-impact changes.",
];

const weakVsBetter = [
  { weak: "The README says web server, so just leave port 80 open.", better: "Record the required web function, identify the actual service and path that support it, then verify that function after any firewall or service change." },
  { weak: "This account looks suspicious, so remove it.", better: "Check whether the account is listed as approved, privileged, service-related, or otherwise required before changing it." },
  { weak: "Remote access is insecure, so disable it.", better: "First determine whether the scenario requires RDP, SSH, WinRM, VPN, or another management path, then secure only what is actually required." },
  { weak: "We already read the mission at the start.", better: "Keep the extracted mission visible and re-check it before high-impact or late-round changes." },
  { weak: "Everyone can remember the important requirements.", better: "Turn explicit requirements into a shared record with owners and verification targets." },
  { weak: "If the system still boots, the mission is fine.", better: "Verify the actual required application, share, remote-access path, route, or service after related changes." },
];

const verificationTargets = [
  "Required user can still authenticate when appropriate.",
  "Required administrator or privileged path still exists.",
  "Required service is running.",
  "Required application or role responds correctly.",
  "Required share or file path is reachable.",
  "Required remote-access method still works when permitted.",
  "Required network path still passes expected traffic.",
  "Required DNS / gateway behavior remains correct.",
  "Protected evidence remains intact.",
  "Scenario-specific restrictions are still being respected.",
];

const missionQuestions = [
  "Which users are explicitly approved?",
  "Which users are allowed to be administrators or privileged?",
  "Which services or applications must remain operational?",
  "Which remote-access methods are required or prohibited?",
  "Which hosts or networks must communicate?",
  "Which files, shares, roles, or applications are mission-critical?",
  "What actions does the scenario explicitly prohibit?",
  "Which findings need evidence preserved before remediation?",
  "What should be verified after every related change?",
  "What remains uncertain and should not be guessed?",
];

const finalChecklist = [
  "Scenario / README was read completely before major changes.",
  "Approved users were extracted.",
  "Approved privileged users were extracted.",
  "Required services and applications were recorded.",
  "Required remote-access paths were recorded.",
  "Required network relationships were recorded.",
  "Special restrictions were recorded.",
  "Protected files or evidence requirements were recorded.",
  "Each mission requirement has a platform owner.",
  "Verification targets were created for critical functions.",
  "Assumptions are separated from explicit scenario facts.",
  "The extracted mission remains visible to the team.",
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

export default function MissionReadmeExtractionPage() {
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
            <Link href="/cyberpatriot/competition-day-guide/first-10-minutes" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link>
            <Link
              href="/cyberpatriot/competition-day-guide/baseline-priority-board"
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
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Competition Day Guide &middot; Guide 05 &middot; Mission Extraction</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Mission &amp; README Extraction</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The scenario is a technical constraint document. Extract the users, services, access paths, network relationships, special restrictions, and mission-critical functions before broad hardening begins.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">The goal is to turn prose into a shared operating record that guides decisions and gives the team clear verification targets.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Extraction Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Facts</span><span className="font-bold text-white">Extracted</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Owners</span><span className="font-bold text-white">Assigned</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Constraints</span><span className="font-bold text-white">Visible</span></div>
                <div className="flex items-center justify-between gap-6"><span>Verification</span><span className="font-bold text-white">Defined</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Mission rule</p><h2 className="mt-3 text-3xl font-black text-white">Do not harden away the function you are supposed to defend</h2><p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Security decisions should preserve the required mission. A setting can be more restrictive and still be wrong if it disables an approved user, required service, remote-access method, application, share, or network path.</p></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="What to extract" title="Turn the scenario into six categories of constraints" /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{extractionFields.map((item) => (<div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-xl font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Extraction process" title="Move from reading to an operational mission record" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{extractionProcess.map((item) => (<div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-sm font-black text-cyan-300">{item.step}</p><h3 className="mt-3 text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Shared extraction board</p><h2 className="mt-3 text-3xl font-black text-white">Give each mission requirement an owner</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-800"><div className="grid grid-cols-3 bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-slate-400"><span>Requirement</span><span>Question</span><span>Owner</span></div>{extractionTable.map(([requirement, question, owner]) => (<div key={requirement} className="grid grid-cols-3 gap-3 border-t border-slate-800 bg-slate-950/60 px-4 py-4 text-sm"><span className="font-semibold text-white">{requirement}</span><span className="text-slate-400">{question}</span><span className="text-cyan-300">{owner}</span></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Common extraction mistakes</p><h2 className="mt-3 text-3xl font-black text-white">Do not replace the scenario with assumptions</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{commonMistakes.map((item, index) => (<div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"><span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak extraction vs better extraction</p><h2 className="mt-3 text-3xl font-black text-white">Convert vague scenario memory into usable technical constraints</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{weakVsBetter.map((item) => (<div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak approach</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better approach</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Verification targets" title="Turn mission requirements into checks the team can repeat" /><div className="mt-8 grid gap-3 md:grid-cols-2">{verificationTargets.map((item, index) => (<div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><SectionHeading label="Mission questions" title="The team should be able to answer these before broad hardening" /><div className="mt-8 grid gap-3 md:grid-cols-2">{missionQuestions.map((question, index) => (<div key={question} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{question}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Mission &amp; README final checklist</p><h2 className="mt-3 text-3xl font-black text-white">Finish extraction with a shared mission record the team can use</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{finalChecklist.map((item, index) => (<div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>))}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8"><div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8"><div className="flex flex-wrap gap-3"><Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Competition Day Guide</Link><Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link></div><div className="flex flex-wrap gap-3"><Link href="/cyberpatriot/competition-day-guide/first-10-minutes" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Guide</Link><Link
              href="/cyberpatriot/competition-day-guide/baseline-priority-board"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Next Guide &rarr;
            </Link></div></div></section>

      <Footer />
    </main>
  );
}
