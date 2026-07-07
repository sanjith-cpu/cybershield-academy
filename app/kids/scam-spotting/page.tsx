import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "3.1",
    title: "What Is a Scam?",
    href: "/kids/scam-spotting/what-is-a-scam",
    status: "Next",
    description:
      "Learn that scams are tricks that try to get people to click, share, believe, or do something unsafe.",
    learn: [
      "What a scam means",
      "Why scams can look exciting or urgent",
      "Why students should pause and ask for help",
    ],
  },
  {
    number: "3.2",
    title: "Too-Good-to-Be-True Offers",
    href: "/kids/scam-spotting/too-good-to-be-true-offers",
    status: "Planned",
    description:
      "Learn why free prizes, free game coins, surprise rewards, and impossible offers can be warning signs.",
    learn: [
      "What too-good-to-be-true means",
      "Why prize messages can be unsafe",
      "How to ask a trusted adult before clicking",
    ],
  },
  {
    number: "3.3",
    title: "Strange Messages",
    href: "/kids/scam-spotting/strange-messages",
    status: "Planned",
    description:
      "Learn how to notice messages that ask for secrets, passwords, private information, money, or fast action.",
    learn: [
      "Common strange message warning signs",
      "Why secrets and pressure are unsafe",
      "What to do before replying",
    ],
  },
  {
    number: "3.4",
    title: "Pause Before You Click",
    href: "/kids/scam-spotting/pause-before-you-click",
    status: "Planned",
    description:
      "Learn a simple pause-check-ask habit before clicking buttons, links, popups, downloads, or messages.",
    learn: [
      "How to pause before clicking",
      "What to check for",
      "When to ask a trusted adult",
    ],
  },
  {
    number: "3.5",
    title: "Module Review",
    href: "/kids/scam-spotting/review",
    status: "Planned",
    description:
      "Review scam warning signs, fake prize messages, strange requests, and safe next steps.",
    learn: [
      "How to spot scam warning signs",
      "How to choose safe next steps",
      "How to explain the pause-check-ask habit",
    ],
  },
];

const keyIdeas = [
  {
    title: "Scams try to trick people",
    text: "A scam may try to make something look exciting, scary, urgent, secret, or too good to be true.",
  },
  {
    title: "Pause before reacting",
    text: "Students should slow down before clicking, replying, downloading, or sharing information.",
  },
  {
    title: "Never share private information",
    text: "Students should not share passwords, addresses, phone numbers, school names, or family details because of a message or popup.",
  },
  {
    title: "Ask a trusted adult",
    text: "If something feels strange, students should ask a parent, teacher, guardian, counselor, or school technology staff member.",
  },
];

const scamWarningSigns = [
  "A message says you won a prize you did not enter.",
  "A popup tells you to click quickly.",
  "A game offer asks for your password.",
  "Someone asks you to keep a secret from your family or teacher.",
  "A message asks for private information.",
  "A link, button, or download feels strange or unexpected.",
];

const examples = [
  {
    label: "Safer choice",
    example:
      "A student sees a fake prize popup and asks a trusted adult before clicking anything.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student types a password into a game message that promises free coins.",
  },
  {
    label: "Safer choice",
    example:
      "A student does not reply when a stranger asks for private information.",
  },
];

const safetyRules = [
  "Do not click strange links, buttons, popups, or downloads.",
  "Do not type real passwords into messages, games, popups, or practice activities.",
  "Do not share private information because of a prize, reward, warning, or urgent message.",
  "Do not keep secrets from trusted adults when something online feels strange.",
  "Ask a trusted adult before replying to suspicious messages.",
  "Use fake examples only when learning about scams.",
];

export default function KidsScamSpottingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Scam Spotting
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This module teaches elementary students how to notice scam warning
              signs in safe, fake examples. Students will learn to pause before
              clicking, avoid sharing private information, and ask trusted adults
              when something online feels strange.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/what-is-a-scam"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 3.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/passwords-and-accounts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 2
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Module Lessons
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What students will complete
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 3 helps students practice scam awareness using safe,
                fake, age-appropriate examples. The goal is not to scare
                students. The goal is to help them slow down and ask for help.
              </p>
            </div>

            <div className="space-y-6">
              {moduleLessons.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                          Lesson {lesson.number}
                        </span>

                        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-300">
                          {lesson.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        {lesson.title}
                      </h3>

                      <p className="max-w-3xl leading-relaxed text-slate-300">
                        {lesson.description}
                      </p>
                    </div>

                    <Link
                      href={lesson.href}
                      className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Open Lesson
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {lesson.learn.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Big Ideas
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                What students should remember
              </h2>

              <div className="space-y-4">
                {keyIdeas.map((idea) => (
                  <div
                    key={idea.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="mb-2 text-xl font-bold text-cyan-200">
                      {idea.title}
                    </h3>

                    <p className="leading-relaxed text-slate-300">
                      {idea.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Do not click real suspicious links.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                CyberShield Kids should not include real scam links, real
                phishing links, real suspicious downloads, or real private
                student information. All scam examples should be fake, safe, and
                classroom appropriate.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If a message, popup, prize, link, or online person feels
                  strange, urgent, secret, or unsafe, students should pause and
                  ask a parent, teacher, guardian, counselor, or school
                  technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Warning Signs
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Scam signs students should notice
              </h2>

              <p className="leading-relaxed text-slate-300">
                These warning signs are simple examples. Students should not try
                to test suspicious messages by clicking them. They should ask a
                trusted adult.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {scamWarningSigns.map((sign) => (
                <div
                  key={sign}
                  className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5 text-slate-200"
                >
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Practice Preview
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safer and unsafe scam choices
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples help students practice scam spotting without
                using real suspicious links, real passwords, or real private
                information.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((item) => (
                <div
                  key={item.example}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    {item.label}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Scam Spotting Rules
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Rules for this module
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {safetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Build Step
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Next, build Lesson 3.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/scam-spotting/what-is-a-scam
              </span>
              . That page will become the first individual lesson in Kids Module
              3.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/what-is-a-scam"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 3.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}