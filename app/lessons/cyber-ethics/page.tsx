import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CyberEthicsLessonPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield Lesson
          </p>

          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Cyber Ethics
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Cyber ethics means using technology knowledge responsibly, safely,
              and with permission. This lesson teaches students why privacy,
              respect, reporting, and defensive cybersecurity matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cyber-ethics"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Cyber Ethics Scenarios
              </Link>

              <Link
                href="/lessons"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Back to Lessons
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">
                Learning Goals
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>Understand why permission matters in cybersecurity.</li>
                <li>Respect privacy, accounts, devices, and data.</li>
                <li>Know when to report a problem instead of investigating alone.</li>
                <li>Use cybersecurity knowledge to protect people.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Key Skill</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Before taking action, ask: “Do I have permission, is this safe,
                and does this protect someone instead of harming them?”
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                Do not access accounts, devices, files, networks, or systems
                without clear permission.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Is Cyber Ethics?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Cyber ethics is about making responsible choices with technology.
              It means respecting people’s privacy, following rules, asking for
              permission, and using cybersecurity skills for protection instead
              of harm.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Cybersecurity knowledge can be powerful. That is why ethical
              learners focus on defense, safety, honesty, and helping others.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              The Four Core Ideas
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Permission",
                  detail:
                    "Only work on accounts, devices, files, websites, or systems when you clearly have permission.",
                },
                {
                  title: "Privacy",
                  detail:
                    "Respect personal information, private messages, photos, accounts, and data that belong to others.",
                },
                {
                  title: "Responsibility",
                  detail:
                    "Use technology knowledge carefully and think about how your actions could affect other people.",
                },
                {
                  title: "Reporting",
                  detail:
                    "If something looks unsafe or suspicious, report it to a trusted adult, teacher, or technology staff member.",
                },
              ].map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-200">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {idea.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                Defensive Cybersecurity
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Defensive cybersecurity focuses on protecting people, accounts,
                devices, networks, and information. It includes safer habits,
                awareness, reporting, education, and prevention.
              </p>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Helping people recognize scams.</li>
                <li>Teaching strong password habits.</li>
                <li>Encouraging safe browsing choices.</li>
                <li>Reporting suspicious activity responsibly.</li>
                <li>Protecting privacy and personal information.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
              <h2 className="text-3xl font-bold text-red-100">
                What Not To Do
              </h2>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Do not guess, steal, or share passwords.</li>
                <li>Do not try to access accounts that are not yours.</li>
                <li>Do not test school systems, websites, or devices without permission.</li>
                <li>Do not collect private information from others.</li>
                <li>Do not spread suspicious links or harmful files.</li>
                <li>Do not investigate serious problems alone.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Fake Scenario Examples
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 1
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  A student notices that a classmate left a school account open
                  on a shared computer.
                </p>

                <h3 className="mt-5 font-bold text-emerald-200">
                  Ethical Choice
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Do not look through the account. Tell the classmate, teacher,
                  or school technology staff so the account can be protected.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 2
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  A student finds a suspicious message sent to a school club
                  account and wants to click the link to see what happens.
                </p>

                <h3 className="mt-5 font-bold text-emerald-200">
                  Ethical Choice
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Do not click the link. Save the message if needed and report it
                  to a teacher, advisor, or technology staff member.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Why Ethics Matters for Careers
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Cybersecurity careers require trust. People who work in security
              may help protect accounts, networks, companies, schools, hospitals,
              and communities. That means they must follow rules, protect
              privacy, communicate honestly, and act responsibly.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Strong ethics can help students become better leaders, safer
              learners, and more responsible future cybersecurity professionals.
            </p>

            <div className="mt-6">
              <Link
                href="/careers"
                className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Cybersecurity Careers →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Ethical Cyber Habits
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Ask for permission before touching someone else’s device or account.",
                "Respect private messages, photos, files, and personal information.",
                "Use fake examples for practice activities.",
                "Report suspicious activity to a trusted adult or technology staff member.",
                "Help others learn safer online habits.",
                "Use cybersecurity knowledge to defend, not harm.",
                "Be honest about what you know and what you are allowed to do.",
                "Stop and ask for help when a situation feels unclear.",
              ].map((habit) => (
                <div
                  key={habit}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {habit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">Common Mistakes</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Thinking curiosity is a reason to access something without permission.",
                "Clicking suspicious links to investigate alone.",
                "Sharing screenshots that include private information.",
                "Trying to fix a security issue without telling an adult or staff member.",
                "Using cybersecurity knowledge to embarrass, scare, or pressure others.",
                "Assuming small actions online cannot affect real people.",
              ].map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {mistake}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Practice Activity
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Read a fake cybersecurity scenario. Decide whether the action is
              ethical, explain why, and write a safer defensive response.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/cyber-ethics"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Cyber Ethics Scenarios
              </Link>

              <Link
                href="/careers"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Careers
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Reflection Questions
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-slate-300">
              <li>Why does permission matter in cybersecurity?</li>
              <li>What should you do if you find a suspicious message?</li>
              <li>How does privacy connect to cyber ethics?</li>
              <li>Why do cybersecurity careers require trust?</li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Safety Reminder
            </h2>

            <p className="mt-4 leading-8 text-yellow-50/90">
              CyberShield Academy teaches safe, ethical, defensive cybersecurity.
              Do not access anything without permission, do not collect private
              information, and do not investigate risky situations alone.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/lessons"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Back to Lessons</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Return to the Learning Library.
                </p>
              </Link>

              <Link
                href="/cyber-ethics"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Ethics Scenarios</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Practice making responsible decisions.
                </p>
              </Link>

              <Link
                href="/safety"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Safety & Privacy</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Review CyberShield safety guidelines.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}