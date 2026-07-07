import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const helperHabits = [
  "Use kind and calm words.",
  "Do not join mean jokes, teasing, or drama.",
  "Support people without making the problem bigger.",
  "Do not share screenshots, private messages, or embarrassing pictures.",
  "Step away from unsafe conversations.",
  "Ask a trusted adult when someone needs help online.",
];

const vocabulary = [
  {
    term: "Digital helper",
    meaning:
      "Someone who uses technology in a kind, safe, and responsible way to support others.",
  },
  {
    term: "Support",
    meaning:
      "Helping someone feel included, respected, or safe without joining drama or unsafe behavior.",
  },
  {
    term: "Drama",
    meaning:
      "An online argument or conflict that can grow when people keep replying, sharing, or joining in.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A parent, guardian, teacher, counselor, coach, librarian, or school technology staff member who can help.",
  },
];

const examples = [
  {
    label: "Helper choice",
    text: "A student sees someone being left out in a class chat and sends a kind message to include them.",
  },
  {
    label: "Unsafe choice",
    text: "A student joins a group making fun of someone because everyone else is doing it.",
  },
  {
    label: "Helper choice",
    text: "A student notices a game chat becoming mean, steps away, and tells a trusted adult.",
  },
];

const realLifeSteps = [
  "Pause before joining a conversation.",
  "Ask yourself: Will this help someone or make the problem bigger?",
  "Use kind words when someone makes a mistake.",
  "Do not repost, screenshot, or share hurtful messages.",
  "Do not argue with people who are trying to cause drama.",
  "Ask a trusted adult when someone is being hurt, embarrassed, scared, or unsafe online.",
];

const practiceQuestions = [
  {
    question:
      "A classmate makes a mistake in an online activity and people start laughing. What could a digital helper do?",
    answer:
      "A digital helper could send a kind message, not join the teasing, and ask a teacher for help if needed.",
  },
  {
    question:
      "A group chat is spreading a screenshot to embarrass someone. What is the safer choice?",
    answer:
      "Do not share it. Do not join the drama. Tell a trusted adult because screenshots can hurt real people.",
  },
  {
    question:
      "Someone in a game chat says something mean to another player. What should you avoid doing?",
    answer:
      "Avoid joining in, laughing, repeating it, or sending more mean messages. Step away and ask for help if needed.",
  },
  {
    question:
      "How can you support someone online without making the problem bigger?",
    answer:
      "Use calm and kind words, do not argue, do not share hurtful messages, and ask a trusted adult when needed.",
  },
];

const reviewChecklist = [
  "I can explain what a digital helper is.",
  "I can support people online with kind and calm words.",
  "I know not to join drama, teasing, or pile-ons.",
  "I know not to share screenshots or private messages to embarrass someone.",
  "I can step away when a conversation becomes unsafe.",
  "I can ask a trusted adult when someone needs help online.",
];

export default function KidsBeingADigitalHelperPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4 • Lesson 4.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Being a Digital Helper
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn how to support others online
              without joining drama, arguments, or unsafe conversations.
              Students will practice using kind words, stepping away, and asking
              trusted adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 4
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use/review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Module Review
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
                  "Explain what a digital helper is.",
                  "Use kind words to support others online.",
                  "Avoid joining drama, teasing, or unsafe behavior.",
                  "Ask a trusted adult when someone needs help online.",
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
                Helping does not mean handling everything alone.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students can be kind helpers, but they should not try to solve
                serious or unsafe online problems by themselves. If someone is
                being hurt, embarrassed, scared, threatened, or unsafe online,
                students should ask a trusted adult for help.
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
                Digital helpers make online spaces safer.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A digital helper is someone who uses technology in a kind, safe,
                and responsible way. Digital helpers do not join mean behavior,
                spread private messages, or make drama bigger. They use calm
                words, support others, step away from unsafe conversations, and
                ask trusted adults for help when needed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {helperHabits.map((habit) => (
                <div
                  key={habit}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {habit}
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
                Practice being helpful online.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                not use real names, screenshots, private messages, or real
                conflicts in practice activities.
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
                How can helping online be safe?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Helping online is safest when students use kind words, avoid
                arguments, do not share hurtful messages, and ask trusted adults
                for help. A digital helper does not have to solve every problem
                alone.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one way you can support someone online without joining
                  drama?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the help-without-drama habit.
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
                What would a digital helper do?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and think about the safest, kindest answer.
                These practice questions use fake examples only.
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
                      Helper answer
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
                Before moving to the Module 4 review, students should be able to
                say:
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
              Continue to the Module 4 review.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will review kind words, group chat choices, safe
              responses to mean behavior, and how to be a digital helper.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use/review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Module Review
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}