import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const guides = [
  { number: "01", route: "/cyberpatriot/competition-day-guide/night-before-preparation", title: "Night-Before Preparation", focus: "Equipment, accounts, chargers, notes, local references, sleep, arrival plan, and avoiding unnecessary last-minute changes.", outcome: "Show up ready to compete instead of spending the morning fixing preventable setup problems." },
  { number: "02", route: "/cyberpatriot/competition-day-guide/arrival-workspace-setup", title: "Arrival & Workspace Setup", focus: "Organize the team area, verify power and networking, place references, assign seats, and prepare the shared status system.", outcome: "Create a calm workspace where every teammate can begin quickly and communicate clearly." },
  { number: "03", route: "/cyberpatriot/competition-day-guide/team-roles-communication-plan", title: "Team Roles & Communication Plan", focus: "Platform ownership, team lead duties, escalation paths, verifier roles, and concise status language.", outcome: "Prevent duplicate work and make ownership obvious before the round begins." },
  { number: "04", route: "/cyberpatriot/competition-day-guide/first-10-minutes", title: "First 10 Minutes", focus: "Do not rush into hardening. Read the scenario, identify required services, assign systems, and establish the first baseline.", outcome: "Use the opening minutes to reduce uncertainty and prevent high-cost mistakes." },
  { number: "05", route: "/cyberpatriot/competition-day-guide/mission-readme-extraction", title: "Mission & README Extraction", focus: "Pull approved users, required services, remote-access needs, prohibited actions, and special scenario requirements into one team view.", outcome: "Turn the competition instructions into concrete technical constraints." },
  { number: "06", route: "/cyberpatriot/competition-day-guide/baseline-priority-board", title: "Baseline & Priority Board", focus: "Capture initial users, services, listeners, privileged groups, network state, important evidence, and ranked priorities.", outcome: "Give the team a known starting point and a clear order of work." },
  { number: "07", route: "/cyberpatriot/competition-day-guide/platform-work-cycles", title: "Platform Work Cycles", focus: "Use repeatable inspect, decide, change, verify, and document cycles without forcing every platform into one identical procedure.", outcome: "Keep progress controlled while preserving required functionality." },
  { number: "08", route: "/cyberpatriot/competition-day-guide/evidence-change-log-discipline", title: "Evidence & Change Log Discipline", focus: "Record original state, evidence, exact remediation, verification, unresolved items, and ownership while the context is fresh.", outcome: "Create a shared operational record the whole team can trust." },
  { number: "09", route: "/cyberpatriot/competition-day-guide/mid-round-team-sync", title: "Mid-Round Team Sync", focus: "Pause briefly to compare platform health, unresolved risks, duplicate work, dependencies, and the next high-value priorities.", outcome: "Realign the team before small coordination problems become late-round failures." },
  { number: "10", route: "/cyberpatriot/competition-day-guide/final-30-minutes", title: "Final 30 Minutes", focus: "Reduce experimentation, finish high-confidence work, verify mission functions, resolve ownership gaps, and prepare the final sweep.", outcome: "Shift from broad hardening to controlled stabilization." },
  { number: "11", route: "/cyberpatriot/competition-day-guide/final-15-minutes", title: "Final 15 Minutes", focus: "Freeze risky changes, run platform checks, save known-good network state, confirm documentation, and complete final handoffs.", outcome: "Finish stable, verified, and coordinated instead of creating a last-second regression." },
  { number: "12", route: "/cyberpatriot/competition-day-guide/post-round-debrief", title: "Post-Round Debrief", focus: "Review what worked, what broke, which investigations were slow, which references were missing, and what the team should practice next.", outcome: "Turn one competition round into a better plan for the next one." },
];

const dayFlow = [
  { phase: "Before arrival", detail: "Protect sleep, confirm equipment, and avoid unnecessary changes to working competition devices." },
  { phase: "Before the clock", detail: "Set roles, references, communication, and the shared status system." },
  { phase: "Opening", detail: "Read the scenario, identify constraints, baseline systems, and rank priorities." },
  { phase: "Main round", detail: "Work in controlled platform cycles with continuous evidence, verification, and documentation." },
  { phase: "Late round", detail: "Lower risk, finish high-confidence work, and protect known-good state." },
  { phase: "After round", detail: "Debrief quickly while the details are still fresh and turn lessons into future practice." },
];

const principles = [
  "Mission before hardening",
  "Ownership before parallel work",
  "Evidence before remediation",
  "Narrow changes before broad changes",
  "Verification after high-impact work",
  "Documentation while context is fresh",
  "Lower risk as time decreases",
  "Debrief while details are fresh",
];

export default function CompetitionDayGuideHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          &larr; CyberPatriot Hub
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot &middot; Competition Day Guide
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Competition Day Guide</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A complete operational guide for the hours before the round, the opening minutes, the main work period, the final checks, and the post-round debrief.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to memorize one rigid sequence. The goal is to create a competition rhythm that protects required functionality, keeps the team coordinated, and becomes more conservative as recovery time disappears.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Section Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Guides</span><span className="font-bold text-white">12</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Timeline</span><span className="font-bold text-white">Before to After</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Focus</span><span className="font-bold text-white">Team Operations</span></div>
                <div className="flex items-center justify-between gap-6"><span>Goal</span><span className="font-bold text-white">Stable execution</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Competition-day rhythm</p>
          <h2 className="mt-3 text-3xl font-black text-white">The operating model changes as the day progresses</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dayFlow.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.phase}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Core principles</p>
          <h2 className="mt-3 text-3xl font-black text-white">Eight rules that should survive every competition format</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">12-guide pathway</p>
          <h2 className="mt-3 text-3xl font-black text-white">From the night before to the post-round debrief</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">The cards will become clickable after all twelve guide pages are created and checked so incomplete routes do not produce 404s.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((item) => (
            <Link href={item.route} key={item.number} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-cyan-300">Guide {item.number}</span>
                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Competition Day</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.focus}</p>
              </div>
              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.outcome}</p>
              </div>
              <div className="mt-auto pt-5">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-500">Open guide &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-3xl font-black text-white">Guide 01: Night-Before Preparation</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Competition day begins before the competition. Start by eliminating preventable equipment, account, reference, transportation, and sleep-related problems so the team arrives ready to work.</p>
          <Link
            href="/cyberpatriot/competition-day-guide/night-before-preparation"
            className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
          >
            Start Guide 01 &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
