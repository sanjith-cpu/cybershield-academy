import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scenarios = [
  {
    title: "The Urgent School Email",
    category: "Scam Awareness",
    situation:
      "A student gets an email claiming their school account will be deleted in 10 minutes unless they click a link and enter their password.",
    bestResponse:
      "Do not click the link. Report the message to a teacher or school technology staff member.",
    why:
      "The message uses urgency and asks for a password, which are common scam warning signs.",
  },
  {
    title: "The Shared Computer",
    category: "Cyber Ethics",
    situation:
      "A student notices that someone else forgot to log out of a school account on a shared computer.",
    bestResponse:
      "Do not look through the account. Tell a teacher or staff member so the account can be protected.",
    why:
      "Even if the account is open, it is still private. Ethical cybersecurity requires permission and respect.",
  },
  {
    title: "The Fake Download Button",
    category: "Safe Browsing",
    situation:
      "A homework website has several large download buttons, but the student is not sure which one is real.",
    bestResponse:
      "Do not download anything. Close the page and ask a trusted adult or teacher for help.",
    why:
      "Fake download buttons can lead to unwanted files, scams, or unsafe websites.",
  },
  {
    title: "The Public Profile",
    category: "Privacy Basics",
    situation:
      "A student’s public profile includes their full name, school name, team schedule, and personal email.",
    bestResponse:
      "Remove private details and review privacy settings with a trusted adult.",
    why:
      "Public profiles can reveal more personal information than intended.",
  },
  {
    title: "The Angry Comment",
    category: "Digital Footprint",
    situation:
      "A student wants to post an angry comment about a classmate after an argument.",
    bestResponse:
      "Pause before posting. Do not publish hurtful comments. Talk to a trusted adult if needed.",
    why:
      "Online comments can be copied, screenshotted, and affect both people involved.",
  },
  {
    title: "The Login Code Request",
    category: "Password Safety",
    situation:
      "Someone messages a student saying they need the student’s login code to fix an account problem.",
    bestResponse:
      "Do not share the code. Login codes should stay private, even if the message sounds urgent.",
    why:
      "MFA and login codes protect accounts. Real support should not ask students to share them through messages.",
  },
];

const decisionRules = [
  "Pause before clicking, replying, downloading, or sharing.",
  "Use fake examples only for practice.",
  "Do not enter real passwords or login codes.",
  "Do not investigate suspicious links alone.",
  "Ask a trusted adult, teacher, or school technology staff member for help.",
  "Report suspicious messages safely.",
];

export default function ScenarioRoomPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Interactive Practice
          </p>

          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Scenario Room
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Practice making safe cybersecurity decisions using fake student
              scenarios. Each situation focuses on defensive choices, privacy,
              reporting, and responsible online behavior.
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
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">
                Practice Goal
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Learn how to choose safer actions when something online feels
                urgent, suspicious, private, or confusing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">
                Best For
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Students, teachers, club leaders, and outreach sessions that
                need short discussion-based cybersecurity practice.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                These are fake scenarios. Do not test real suspicious links,
                collect private information, or access anything without
                permission.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              How to Use Scenario Room
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Read",
                  detail: "Read the fake situation carefully.",
                },
                {
                  step: "2",
                  title: "Pause",
                  detail: "Look for warning signs or privacy concerns.",
                },
                {
                  step: "3",
                  title: "Choose",
                  detail: "Pick the safest defensive response.",
                },
                {
                  step: "4",
                  title: "Reflect",
                  detail: "Explain why that choice protects people.",
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
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Scenario {index + 1}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                      {scenario.title}
                    </h2>
                  </div>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {scenario.category}
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <h3 className="font-bold text-slate-100">Situation</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {scenario.situation}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                    <h3 className="font-bold text-emerald-100">
                      Safest Response
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {scenario.bestResponse}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5">
                    <h3 className="font-bold text-cyan-100">Why This Works</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {scenario.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              CyberShield Decision Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these rules whenever a scenario feels suspicious, private, or
              risky.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {decisionRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Reflection Questions
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-yellow-50/90">
              <li>Which scenario felt most realistic to you?</li>
              <li>What warning sign appeared more than once?</li>
              <li>Why is reporting safer than investigating alone?</li>
              <li>What is one rule you would teach a younger student?</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/lessons"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Review Lessons
              </Link>

              <Link
                href="/worksheets"
                className="rounded-xl border border-yellow-500/30 px-5 py-3 font-semibold text-yellow-50 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Open Worksheets
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-yellow-500/30 px-5 py-3 font-semibold text-yellow-50 transition hover:border-cyan-300 hover:text-cyan-200"
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