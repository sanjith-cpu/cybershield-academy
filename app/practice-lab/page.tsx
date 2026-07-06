import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const labStations = [
  {
    title: "Password Check Station",
    topic: "Password Safety",
    task:
      "Compare two fake passwords and decide which one is safer. Focus on length, uniqueness, and whether it avoids personal information.",
    fakeExample:
      "Weak fake example: soccer123 | Stronger fake example: Cloud-River-Planet-82!",
    safeTakeaway:
      "Longer, unique passphrases are safer than short predictable passwords.",
    href: "/lessons/password-safety",
  },
  {
    title: "Scam Message Station",
    topic: "Scam Awareness",
    task:
      "Read a fake urgent message and list the red flags before deciding what the student should do.",
    fakeExample:
      "Fake message: Your account closes in 5 minutes. Click this link and enter your password now.",
    safeTakeaway:
      "Urgency, fear, suspicious links, and password requests are major warning signs.",
    href: "/lessons/scam-awareness",
  },
  {
    title: "Privacy Review Station",
    topic: "Privacy Basics",
    task:
      "Review a fake student profile and decide what information should be removed before it is public.",
    fakeExample:
      "Fake profile includes full name, school, team schedule, personal email, and public location tags.",
    safeTakeaway:
      "Public profiles should not reveal private information, exact location, or school routines.",
    href: "/lessons/privacy-basics",
  },
  {
    title: "Safe Browsing Station",
    topic: "Safe Browsing",
    task:
      "Look at a fake website situation and decide whether the student should click, download, close the page, or ask for help.",
    fakeExample:
      "Fake website: Download the free answer key now. Disable your browser protection to continue.",
    safeTakeaway:
      "Fake download buttons and pressure messages should be treated carefully.",
    href: "/lessons/safe-browsing",
  },
  {
    title: "Digital Footprint Station",
    topic: "Digital Footprint",
    task:
      "Review a fake post and decide how it could affect reputation, privacy, and respect for others.",
    fakeExample:
      "Fake post: A student posts an angry public comment about a classmate after an argument.",
    safeTakeaway:
      "Posts and comments can be copied, screenshotted, and remembered later.",
    href: "/lessons/digital-footprint",
  },
  {
    title: "Ethics Decision Station",
    topic: "Cyber Ethics",
    task:
      "Read a fake technology situation and decide what the ethical defensive choice would be.",
    fakeExample:
      "Fake situation: A student finds another student still logged in on a shared computer.",
    safeTakeaway:
      "Permission, privacy, and reporting are more important than curiosity.",
    href: "/lessons/cyber-ethics",
  },
];

const labRules = [
  "Use fake examples only.",
  "Do not enter real passwords or login codes.",
  "Do not test real suspicious links.",
  "Do not download unknown files for practice.",
  "Do not access accounts, devices, files, or networks without permission.",
  "Ask a trusted adult, teacher, or technology staff member when something feels suspicious.",
];

export default function PracticeLabPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield Practice
          </p>

          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Practice Lab
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Practice Lab gives students short, safe cybersecurity stations
              that connect directly to the main CyberShield lessons. Each station
              uses fake examples only and focuses on defensive decision-making.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/activities"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Activities
              </Link>

              <Link
                href="/lessons"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Review Lessons
              </Link>

              <Link
                href="/scenario-room"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Scenario Room
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Goal</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Help students practice safer cybersecurity choices without using
                real accounts, real passwords, or real suspicious websites.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Best For</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Classroom practice, cybersecurity club meetings, outreach
                sessions, and independent review after completing lessons.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>
              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                This lab is for safe, ethical, defensive learning only. Use fake
                examples and ask for help when a situation feels risky.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              How to Use the Practice Lab
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Choose",
                  detail: "Pick a station based on the lesson topic.",
                },
                {
                  step: "2",
                  title: "Read",
                  detail: "Review the fake example carefully.",
                },
                {
                  step: "3",
                  title: "Decide",
                  detail: "Choose the safest defensive action.",
                },
                {
                  step: "4",
                  title: "Explain",
                  detail: "Write why that action protects people.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-bold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6">
            {labStations.map((station, index) => (
              <div
                key={station.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Station {index + 1}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                      {station.title}
                    </h2>
                  </div>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {station.topic}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                    <h3 className="font-bold text-slate-100">Task</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {station.task}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5">
                    <h3 className="font-bold text-cyan-100">Fake Example</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {station.fakeExample}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                    <h3 className="font-bold text-emerald-100">
                      Safe Takeaway
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {station.safeTakeaway}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={station.href}
                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Review Related Lesson →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Practice Lab Safety Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              These rules keep the lab safe for students, teachers, and outreach
              sessions.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {labRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-yellow-50/90"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Reflection Questions
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-slate-300">
              <li>Which station was easiest to understand?</li>
              <li>Which station felt most realistic?</li>
              <li>What warning sign appeared in more than one station?</li>
              <li>What is one safe habit you would teach another student?</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/activities"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Activities
              </Link>

              <Link
                href="/worksheets"
                className="rounded-xl border border-emerald-500/30 px-5 py-3 font-semibold text-emerald-50 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Open Worksheets
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-emerald-500/30 px-5 py-3 font-semibold text-emerald-50 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}