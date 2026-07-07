import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const messageWarningSigns = [
  "The message asks for a password.",
  "The message asks for private information.",
  "The message tells you to keep a secret from trusted adults.",
  "The message says you must reply quickly.",
  "The message comes from someone you do not know.",
  "The message makes you feel scared, confused, pressured, or uncomfortable.",
];

const vocabulary = [
  {
    term: "Strange message",
    meaning:
      "A message that feels confusing, suspicious, unsafe, unexpected, or uncomfortable.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as passwords, addresses, phone numbers, school names, locations, or family details.",
  },
  {
    term: "Pressure",
    meaning:
      "Words that try to make someone act quickly before thinking carefully.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A parent, guardian, teacher, counselor, or school technology staff member who can help students make safe choices.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student gets a strange message asking for a password and tells a trusted adult without replying.",
  },
  {
    label: "Unsafe example",
    text: "A student replies to a stranger who asks where they live and what school they go to.",
  },
  {
    label: "Safer example",
    text: "A student pauses when a message says to keep a secret and asks a parent or teacher for help.",
  },
];

const realLifeSteps = [
  "Pause before replying to a message that feels strange.",
  "Do not share passwords, addresses, phone numbers, school names, locations, or family details.",
  "Do not keep suspicious online messages secret from trusted adults.",
  "Do not click links or download files from strange messages.",
  "Tell a trusted adult if a message feels scary, confusing, urgent, secret, or unsafe.",
];

const practiceQuestions = [
  {
    question:
      "A message says, 'Send me your password so I can help you.' What should you do?",
    answer:
      "Do not send the password. Passwords are private. Tell a trusted adult about the message.",
  },
  {
    question:
      "Someone you do not know asks what school you go to. What should you do?",
    answer:
      "Do not share your school name. School information is private. Ask a trusted adult for help.",
  },
  {
    question:
      "A message says, 'Do not tell your parents or teacher.' What warning sign do you notice?",
    answer:
      "The warning sign is secrecy. Suspicious messages that ask students to keep secrets should be shown to a trusted adult.",
  },
  {
    question:
      "A message makes you feel worried or uncomfortable. What is the safest next step?",
    answer:
      "Pause, do not reply, and tell a trusted adult. Students should not handle uncomfortable online messages alone.",
  },
];

const reviewChecklist = [
  "I can explain what a strange message is.",
  "I can name warning signs in suspicious messages.",
  "I know not to share passwords or private information in messages.",
  "I know not to keep suspicious online messages secret.",
  "I know not to click strange links or downloads from messages.",
  "I can ask a trusted adult when a message feels confusing, scary, urgent, secret, or unsafe.",
];

export default function KidsStrangeMessagesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3 • Lesson 3.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Strange Messages
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn how to notice strange messages that
              ask for secrets, passwords, private information, fast replies, or
              unsafe actions. Students will practice pausing before replying and
              asking a trusted adult for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/too-good-to-be-true-offers"
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
                href="/kids/scam-spotting/pause-before-you-click"
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
                  "Explain what a strange message is.",
                  "Recognize message warning signs.",
                  "Understand why secrets, pressure, and private questions can be unsafe.",
                  "Pause and ask a trusted adult before replying or clicking.",
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
                Do not reply to suspicious messages.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield examples should stay fake and safe. Students should
                not reply to real suspicious messages, click real suspicious
                links, download strange files, or share real private
                information.
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
                Some messages are warning signs.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A strange message is a message that feels suspicious,
                unexpected, confusing, scary, secret, or unsafe. It might ask
                for a password, private information, money, a fast reply, or a
                secret. Students should not try to handle suspicious messages
                alone. The safest habit is to pause and ask a trusted adult.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {messageWarningSigns.map((sign) => (
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
                Practice spotting strange message choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                never use real passwords, real links, or real private
                information in CyberShield activities.
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
                Why can strange messages be risky?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Strange messages can be risky because they may pressure students
                into clicking, replying, sharing information, or keeping secrets.
                A message that asks for private information or says not to tell
                a trusted adult should be treated as a warning sign.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What should you do if a message asks you to keep something
                  secret from your family or teacher?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-before-replying habit.
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
                What is the safer response?
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
                Before moving to Lesson 3.4, students should be able to say:
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
              Next, students will learn a simple pause-check-ask habit before
              clicking buttons, links, popups, downloads, or messages.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/too-good-to-be-true-offers"
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
                href="/kids/scam-spotting/pause-before-you-click"
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