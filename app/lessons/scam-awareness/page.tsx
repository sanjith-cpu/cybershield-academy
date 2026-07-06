import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ScamAwarenessLessonPage() {
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
              Scam Awareness
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Scams are tricks that try to pressure people into clicking links,
              sharing private information, sending money, or giving away account
              access. This lesson helps students recognize warning signs and
              make safer choices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/spot-the-scam"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Try Spot the Scam
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
                <li>Identify common scam and phishing red flags.</li>
                <li>Understand how urgency and fear are used to pressure people.</li>
                <li>Know safer actions to take instead of clicking.</li>
                <li>Learn when to report suspicious messages.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Key Skill</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Pause before clicking, check the message carefully, and ask a
                trusted adult or technology staff member when something feels
                suspicious.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                Do not click real suspicious links to test them. Use fake
                examples only and report real concerns safely.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Are Scams and Phishing?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              A scam is a dishonest message, website, call, or post that tries
              to trick someone. Phishing is a type of scam that often pretends
              to be a trusted person, company, school, or service.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Scammers may ask for passwords, login codes, personal details,
              payment information, or urgent action. A safer response is to
              pause, verify, and ask for help before doing anything.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Common Scam Red Flags
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Urgency",
                  detail:
                    "Messages that say you must act immediately or your account will be closed.",
                },
                {
                  title: "Fear",
                  detail:
                    "Messages that try to scare you into clicking, replying, or sharing information.",
                },
                {
                  title: "Prizes",
                  detail:
                    "Messages claiming you won something you never entered.",
                },
                {
                  title: "Unknown Senders",
                  detail:
                    "Messages from people, accounts, or addresses you do not recognize.",
                },
                {
                  title: "Suspicious Links",
                  detail:
                    "Links that look strange, misspelled, shortened, or unrelated to the real organization.",
                },
                {
                  title: "Requests for Passwords or Codes",
                  detail:
                    "Messages asking for passwords, MFA codes, verification codes, or private information.",
                },
              ].map((flag) => (
                <div
                  key={flag.title}
                  className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-red-200">{flag.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {flag.detail}
                  </p>
                </div>
              ))}
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
                  Fake Message 1
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  “Your school account will be deleted in 10 minutes. Click this
                  fake link now and enter your password to keep access.”
                </p>

                <h3 className="mt-5 font-bold text-red-200">Red Flags</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>It uses fear and urgency.</li>
                  <li>It asks for a password.</li>
                  <li>The link is not verified.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Message 2
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  “Congratulations! You won a free phone. Reply with your full
                  name, birthday, address, and login code to claim it.”
                </p>

                <h3 className="mt-5 font-bold text-red-200">Red Flags</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>It offers a prize you did not enter.</li>
                  <li>It asks for private information.</li>
                  <li>It asks for a login code.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                What To Do Instead of Clicking
              </h2>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Pause and do not rush.</li>
                <li>Do not click the link.</li>
                <li>Do not reply with private information.</li>
                <li>Do not share passwords or login codes.</li>
                <li>Check with a trusted adult, teacher, or school tech staff.</li>
                <li>Go to the real website or app by typing it yourself.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Reporting Suspicious Messages
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Reporting is a smart defensive action. If a suspicious message
                appears on a school account, tell a teacher or technology staff
                member. If it appears on a personal account, ask a parent,
                guardian, or trusted adult for help.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Do not investigate suspicious links alone. The goal is to stay
                safe, protect your accounts, and help others avoid the same
                trick.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">Common Mistakes</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Clicking because the message looks official.",
                "Sharing a login code because someone says it is urgent.",
                "Trusting a prize message without checking if it is real.",
                "Testing suspicious links on your own device.",
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
              Read a fake message and list three red flags. Then write one safe
              action the student should take instead of clicking, replying, or
              sharing information.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/spot-the-scam"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Spot the Scam
              </Link>

              <Link
                href="/quiz"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Take Cyber Safety Quiz
              </Link>

              <Link
                href="/worksheets"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Open Worksheets
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
              <li>Why do scammers often create urgency?</li>
              <li>What should you do before clicking a link in a message?</li>
              <li>Why should login codes stay private?</li>
              <li>Who could you report a suspicious school message to?</li>
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
              Do not test real suspicious links, collect private information, or
              investigate accounts that are not yours. Use fake examples only.
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
                href="/spot-the-scam"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Spot the Scam</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Practice identifying fake scam examples.
                </p>
              </Link>

              <Link
                href="/worksheets"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Worksheets</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Use printable classroom activities.
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