import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scamClues = [
  "It says you won something you did not enter.",
  "It tells you to click quickly.",
  "It asks for a password or private information.",
  "It asks you to keep a secret from trusted adults.",
  "It sounds too exciting, scary, or urgent.",
  "It comes from someone or somewhere you do not know.",
];

const vocabulary = [
  {
    term: "Scam",
    meaning:
      "A trick that tries to get someone to click, share information, believe something fake, or do something unsafe.",
  },
  {
    term: "Trick",
    meaning:
      "Something that tries to fool a person into making a choice they would not make if they knew the truth.",
  },
  {
    term: "Warning sign",
    meaning:
      "A clue that tells students to pause, slow down, and ask for help before continuing.",
  },
  {
    term: "Urgent",
    meaning:
      "Something that tries to make a person feel like they must act right away without thinking.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student sees a message saying they won a prize and asks a trusted adult before clicking anything.",
  },
  {
    label: "Unsafe example",
    text: "A student clicks a popup that promises free game coins and types in a password.",
  },
  {
    label: "Safer example",
    text: "A student ignores a strange message asking for private information and tells a teacher or parent.",
  },
];

const realLifeSteps = [
  "Pause when a message, popup, prize, or link feels strange.",
  "Do not click links, buttons, popups, or downloads that you do not trust.",
  "Do not share passwords, addresses, phone numbers, school names, or family details.",
  "Do not keep suspicious online messages secret from trusted adults.",
  "Ask a parent, teacher, guardian, counselor, or school technology staff member for help.",
];

const practiceQuestions = [
  {
    question:
      "A popup says you won a tablet, but you did not enter a contest. What should you do?",
    answer:
      "Do not click it. Pause and ask a trusted adult because surprise prize messages can be scam warning signs.",
  },
  {
    question:
      "A message says, 'Click fast or you will lose your reward!' What is the warning sign?",
    answer:
      "The warning sign is pressure. Scams often try to make people act quickly before thinking.",
  },
  {
    question:
      "Someone online asks for your password to give you free game coins. What should you do?",
    answer:
      "Do not share the password. Passwords are private. Ask a trusted adult for help.",
  },
  {
    question:
      "A message says, 'Do not tell your teacher or parents.' What should you do?",
    answer:
      "Tell a trusted adult. Asking students to keep online secrets can be a warning sign.",
  },
];

const reviewChecklist = [
  "I can explain what a scam is.",
  "I can name scam warning signs.",
  "I know that fake prizes and urgent messages can be unsafe.",
  "I know not to click strange links, buttons, popups, or downloads.",
  "I know not to share private information because of a message or prize.",
  "I can ask a trusted adult when something online feels strange.",
];

export default function KidsWhatIsAScamPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3 • Lesson 3.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              What Is a Scam?
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn that scams are tricks that try to
              get people to click, share, believe, or do something unsafe.
              Students will practice noticing warning signs using safe, fake,
              age-appropriate examples.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 3
              </Link>

              <Link
                href="/kids/scam-spotting/too-good-to-be-true-offers"
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
                  "Explain what a scam is in simple words.",
                  "Recognize common scam warning signs.",
                  "Understand why scams may look exciting, scary, or urgent.",
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
                This lesson uses fake examples only.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield should not include real scam links, real suspicious
                downloads, real phishing pages, or real private student
                information. Students should not click suspicious links to test
                them. They should ask a trusted adult for help.
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
                A scam is an online trick.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A scam is a trick that tries to get someone to do something
                unsafe. A scam might say there is a prize, a problem, a reward,
                or an emergency. It may try to make students click quickly,
                share private information, type a password, or keep something
                secret. The safest habit is to pause and ask a trusted adult.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {scamClues.map((clue) => (
                <div
                  key={clue}
                  className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5 text-slate-200"
                >
                  {clue}
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
                Practice spotting scam choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                not click real suspicious links or type real passwords into
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
                Why do scams try to make people hurry?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                When people hurry, they may not stop to think carefully. A scam
                may use words like fast, now, last chance, winner, free, or
                emergency to make someone react quickly. Students should slow
                down before clicking or sharing.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one reason a surprise prize message might be unsafe?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-before-reacting habit.
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
                Before moving to Lesson 3.2, students should be able to say:
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
              Next, students will learn why free prizes, free game coins,
              surprise rewards, and impossible offers can be warning signs.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/scam-spotting/too-good-to-be-true-offers"
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