import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerWarningSigns = [
  "It says you won something you did not enter.",
  "It promises free game coins, points, or rewards.",
  "It says the offer will disappear quickly.",
  "It asks for a password, address, phone number, or school name.",
  "It tells you not to ask an adult.",
  "It looks exciting but comes from a place you do not know.",
];

const vocabulary = [
  {
    term: "Too good to be true",
    meaning:
      "Something that sounds so amazing, easy, or surprising that students should pause and check before believing it.",
  },
  {
    term: "Fake prize",
    meaning:
      "A message, popup, or offer that says someone won something, even though it may only be trying to trick them.",
  },
  {
    term: "Reward offer",
    meaning:
      "A message that promises points, coins, prizes, upgrades, or gifts. Some are real, but suspicious ones should be checked with a trusted adult.",
  },
  {
    term: "Pressure",
    meaning:
      "Words that try to make someone act quickly before thinking, such as now, hurry, last chance, or click fast.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student sees a popup promising a free tablet and asks a parent or teacher before clicking.",
  },
  {
    label: "Unsafe example",
    text: "A student types a game password into a message that promises unlimited free coins.",
  },
  {
    label: "Safer example",
    text: "A student closes a strange reward message and tells a trusted adult because it feels suspicious.",
  },
];

const realLifeSteps = [
  "Pause when an offer sounds too exciting, too easy, or too urgent.",
  "Do not click prize popups, reward links, or free coin messages that feel strange.",
  "Do not type passwords or private information to claim a prize.",
  "Ask a trusted adult before believing surprise offers.",
  "Tell a trusted adult if an offer asks you to keep it secret.",
];

const practiceQuestions = [
  {
    question:
      "A popup says you won a new phone, but you never entered a contest. What should you do?",
    answer:
      "Do not click it. Surprise prize messages can be warning signs. Pause and ask a trusted adult.",
  },
  {
    question:
      "A game message promises free coins if you type your password. What is unsafe about this?",
    answer:
      "Passwords are private. A real practice activity or safe game message should not ask for a password to give a reward.",
  },
  {
    question:
      "A message says, 'Hurry! Click now before the prize disappears!' What warning sign do you notice?",
    answer:
      "The warning sign is pressure. It is trying to make someone click quickly before thinking.",
  },
  {
    question:
      "An offer looks exciting, but you are not sure if it is safe. What should you do?",
    answer:
      "Pause and ask a trusted adult before clicking, replying, downloading, or sharing information.",
  },
];

const reviewChecklist = [
  "I can explain what too-good-to-be-true means.",
  "I can recognize fake prize and reward warning signs.",
  "I know not to click strange prize popups or reward links.",
  "I know not to type passwords or private information to claim a prize.",
  "I can pause when an offer feels urgent or suspicious.",
  "I can ask a trusted adult before believing surprise offers.",
];

export default function KidsTooGoodToBeTrueOffersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3 • Lesson 3.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Too-Good-to-Be-True Offers
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn why surprise prizes, free game
              coins, impossible rewards, and urgent offers can be scam warning
              signs. Students will practice slowing down before clicking or
              sharing information.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/what-is-a-scam"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 3
              </Link>

              <Link
                href="/kids/scam-spotting/strange-messages"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                What You Will Learn
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this lesson, students should be able to:
              </h2>

              <div className="space-y-3">
                {[
                  "Explain what too-good-to-be-true means.",
                  "Recognize fake prize and reward warning signs.",
                  "Understand why urgent offers can be risky.",
                  "Pause and ask a trusted adult before clicking or sharing.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Do not test suspicious offers.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not click real suspicious links, claim unknown
                prizes, download strange files, or type real passwords into
                reward messages. CyberShield examples should stay fake, safe,
                and classroom appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Simple Explanation
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Some offers are designed to make people react fast.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A too-good-to-be-true offer is something that sounds amazing but
                may not be safe. It might promise free prizes, free game coins,
                special rewards, or a surprise gift. Scams often use exciting or
                urgent words because they want people to click before thinking.
                The safer habit is to pause, check, and ask a trusted adult.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {offerWarningSigns.map((sign) => (
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Key Vocabulary
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Words to know
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabulary.map((word) => (
                <div
                  key={word.term}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                    {word.term}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {word.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice spotting suspicious offers.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                never use real passwords or real private information in
                CyberShield activities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => (
                <div
                  key={example.text}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="mb-3 text-xl font-bold text-cyan-200">
                    {example.label}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {example.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Why can surprise prizes be warning signs?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                A surprise prize may be unsafe if the student did not enter a
                contest, does not know who sent it, or is asked to click quickly.
                It is especially suspicious if the offer asks for a password,
                private information, or secrecy.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What should you check before believing a message that says you
                  won something?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the sounds-too-good habit.
              </h2>

              <div className="space-y-3">
                {realLifeSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What is the safer choice?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and think about the safest answer. These
                practice questions use fake examples only.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                    <h4 className="mb-2 font-bold text-cyan-200">
                      Safer answer
                    </h4>

                    <p className="leading-relaxed text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to Lesson 3.3, students should be able to say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Scam Spotting module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn how to notice strange messages that ask
              for secrets, private information, passwords, money, or fast
              action.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/what-is-a-scam"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/scam-spotting/strange-messages"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}