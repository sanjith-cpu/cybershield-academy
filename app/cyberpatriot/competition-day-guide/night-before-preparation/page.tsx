import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const preparationAreas = [
  {
    title: "Equipment",
    items: [
      "Confirm competition laptops or desktops are available and physically ready.",
      "Pack chargers, power adapters, Ethernet cables, approved peripherals, and any required accessories.",
      "Avoid unnecessary hardware swaps or last-minute upgrades on systems that already work.",
      "Label shared equipment so the team can identify ownership quickly.",
    ],
  },
  {
    title: "Accounts & Access",
    items: [
      "Confirm every teammate knows which approved accounts they are expected to use.",
      "Verify access to required collaboration tools, local references, and team documentation.",
      "Do not wait until competition morning to discover an expired password or inaccessible shared resource.",
      "Avoid changing credentials unless there is a real reason and time to verify the result.",
    ],
  },
  {
    title: "References",
    items: [
      "Organize approved local notes, command references, checklists, and platform guides.",
      "Keep frequently used references easy to reach instead of buried in large folders.",
      "Make sure references are readable offline when internet access may be restricted.",
      "Remove duplicate or outdated copies that could confuse the team.",
    ],
  },
  {
    title: "Logistics",
    items: [
      "Confirm arrival time, location, transportation, parking, and school or venue entry requirements.",
      "Know who is bringing shared equipment and who has backup items.",
      "Plan enough extra travel time so a small delay does not become a rushed arrival.",
      "Confirm food, water, and break expectations if the event allows them.",
    ],
  },
  {
    title: "Team Readiness",
    items: [
      "Confirm each teammate's likely platform or responsibility.",
      "Review the communication plan and how the team will record status.",
      "Identify any weak area that needs a short review, not a major late-night cram session.",
      "Agree that high-risk technical experiments stop the night before.",
    ],
  },
  {
    title: "Personal Readiness",
    items: [
      "Protect sleep instead of extending preparation deep into the night.",
      "Pack clothes, identification, school materials, water, and any allowed personal items.",
      "Set alarms and confirm wake-up time.",
      "Leave enough mental energy for the competition itself.",
    ],
  },
];

const avoidTonight = [
  "Major operating-system updates",
  "Driver changes",
  "BIOS or firmware updates",
  "New virtualization platforms",
  "Large tool installations",
  "Unfamiliar security software",
  "Bulk cleanup of team reference folders",
  "Last-minute account migrations",
  "Unverified network changes",
  "Practice sessions that continue until teammates are exhausted",
];

const readinessChecks = [
  "Competition device powers on normally.",
  "Required charger is packed.",
  "Ethernet cable is packed if needed.",
  "Approved accounts are known.",
  "Shared notes are accessible.",
  "Offline references are available.",
  "Arrival time and location are confirmed.",
  "Transportation plan is confirmed.",
  "Platform responsibilities are roughly assigned.",
  "Team status method is chosen.",
  "No risky technical change is still in progress.",
  "Everyone has a realistic sleep plan.",
];

const morningBag = [
  "Competition device",
  "Power adapter",
  "Ethernet cable",
  "Mouse or approved peripherals",
  "Notebook and pen",
  "Approved local reference material",
  "Water",
  "Identification if required",
  "Any school or venue materials",
  "Backup charger or cable if available",
];

const badVsBetter = [
  {
    weak: "Stay up late and review everything one more time.",
    better:
      "Do one short targeted review, then protect sleep so the team can think clearly during the round.",
  },
  {
    weak: "Update the laptop tonight so it is fully current.",
    better:
      "If the working environment is already approved and stable, avoid unnecessary late changes that could create a new problem.",
  },
  {
    weak: "We will figure out roles when we arrive.",
    better:
      "Have a rough ownership plan before arrival so the first minutes are not spent deciding who handles what.",
  },
  {
    weak: "All our references are somewhere in the shared folder.",
    better:
      "Place the most useful competition references in a simple, predictable structure that works offline.",
  },
  {
    weak: "We can reset any passwords tomorrow if needed.",
    better:
      "Confirm expected account access before competition morning whenever possible.",
  },
  {
    weak: "One more long practice round will help.",
    better:
      "Use the final evening for confidence, organization, and rest rather than exhausting the team.",
  },
];

const finalQuestions = [
  "Can every teammate arrive with the equipment they are responsible for?",
  "Can everyone access the approved references they need?",
  "Are there any account or password problems still unresolved?",
  "Is anyone planning a risky technical change tonight?",
  "Does the team know its expected arrival time and location?",
  "Does everyone know the rough platform ownership plan?",
  "Is the team relying on any single cable, charger, or device with no backup?",
  "Will everyone get enough sleep to make good decisions tomorrow?",
];

const finalChecklist = [
  "Competition equipment is packed and labeled.",
  "Chargers and required cables are packed.",
  "Approved accounts and shared resources are accessible.",
  "Local and offline references are organized.",
  "Arrival time, venue, and transportation are confirmed.",
  "Shared equipment responsibility is clear.",
  "Platform ownership is roughly assigned.",
  "The team status method is chosen.",
  "No unnecessary high-risk technical changes remain.",
  "Morning alarms are set.",
  "Personal items are packed.",
  "The team stops preparation early enough to protect sleep.",
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

export default function NightBeforePreparationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Day Guide
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/competition-day-guide/arrival-workspace-setup"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Next Guide &rarr;
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Day Guide &middot; Guide 01 &middot; Night Before
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Night-Before Preparation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Competition day starts the night before. The goal is not to
                squeeze in one more major technical session. It is to remove
                preventable setup problems and arrive rested, organized, and
                ready to make good decisions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A stable device, accessible references, known logistics, and a
                rested team are more valuable than risky last-minute changes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Night-Before Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Equipment</span>
                  <span className="font-bold text-white">Ready</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>References</span>
                  <span className="font-bold text-white">Accessible</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Logistics</span>
                  <span className="font-bold text-white">Confirmed</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Team</span>
                  <span className="font-bold text-white">Rested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Night-before rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not create a new problem while trying to prepare for tomorrow
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            If a competition device, account, or reference setup already works,
            avoid unnecessary changes that cannot be fully tested before the
            team goes to sleep.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Six preparation areas" title="Finish the night organized instead of rushed" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {preparationAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{area.title}</h3>
                <div className="mt-4 grid gap-2">
                  {area.items.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Avoid tonight</p>
          <h2 className="mt-3 text-3xl font-black text-white">High-risk changes that can wait</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {avoidTonight.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Readiness check" title="Confirm the basics before anyone goes to sleep" />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {readinessChecks.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Morning bag" title="Pack the items that are easy to forget" />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {morningBag.map((item, index) => (
              <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                <p className="text-sm font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak habit vs better habit</p>
          <h2 className="mt-3 text-3xl font-black text-white">Replace last-minute pressure with readiness</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Final questions" title="Ask these before ending preparation" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalQuestions.map((question, index) => (
              <div key={question} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">Q{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Night-Before final checklist</p>
          <h2 className="mt-3 text-3xl font-black text-white">End preparation with everything ready and nothing risky in progress</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/competition-day-guide" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Competition Day Guide
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <Link
              href="/cyberpatriot/competition-day-guide/arrival-workspace-setup"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Next Guide &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
