import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kindWordRules = [
  "Use words that are respectful and safe.",
  "Pause before sending a message when you feel upset.",
  "Do not send messages meant to embarrass, scare, or hurt someone.",
  "Remember that online words affect real people.",
  "Ask a trusted adult if a message feels mean, scary, confusing, or unsafe.",
  "Use fake examples only when practicing online kindness.",
];

const vocabulary = [
  {
    term: "Kind words",
    meaning:
      "Words that are respectful, helpful, calm, and safe for others to read.",
  },
  {
    term: "Online message",
    meaning:
      "A message sent through a game, app, classroom tool, email, comment, or chat.",
  },
  {
    term: "Respect",
    meaning:
      "Treating people in a fair and thoughtful way, even when you disagree.",
  },
  {
    term: "Pause before posting",
    meaning:
      "Stopping to think before sending, replying, commenting, or sharing something online.",
  },
];

const examples = [
  {
    label: "Kind choice",
    text: "A student disagrees in a game chat but says, 'I see it differently. Can we try another way?'",
  },
  {
    label: "Unsafe choice",
    text: "A student sends a message to make fun of someone after they make a mistake.",
  },
  {
    label: "Kind choice",
    text: "A student notices a classmate is being left out and writes a friendly message to include them.",
  },
];

const realLifeSteps = [
  "Read your message before sending it.",
  "Ask yourself: Is this kind, respectful, and safe?",
  "Do not send a message when you are angry or trying to embarrass someone.",
  "Do not share jokes, screenshots, or comments that could hurt someone.",
  "Step away if a conversation becomes mean or stressful.",
  "Tell a trusted adult if online words make someone feel unsafe or upset.",
];

const practiceQuestions = [
  {
    question:
      "You are upset during a game and want to send an angry message. What should you do first?",
    answer:
      "Pause before sending. Take a break, use respectful words, or ask a trusted adult if the situation feels unsafe.",
  },
  {
    question:
      "Someone makes a mistake in a class activity. What is a kinder message to send?",
    answer:
      "A kinder message could be, 'It is okay. We can try again.' Kind words help people feel safe and included.",
  },
  {
    question:
      "A friend asks you to send a mean comment about another student. What should you do?",
    answer:
      "Do not send it. Do not join mean behavior. Step away and ask a trusted adult if needed.",
  },
  {
    question:
      "Before posting a comment, what three things can you check?",
    answer:
      "Check if it is kind, respectful, and safe. If you are unsure, pause and ask a trusted adult.",
  },
];

const reviewChecklist = [
  "I can explain why online words matter.",
  "I can choose kind and respectful messages.",
  "I know to pause before posting or replying.",
  "I know not to send messages that hurt, embarrass, or scare someone.",
  "I know not to join mean online behavior.",
  "I can ask a trusted adult when online words feel unsafe or hurtful.",
];

export default function KidsKindWordsOnlinePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4 • Lesson 4.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Kind Words Online
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn that online words affect real
              people. Students will practice choosing kind, respectful, and safe
              messages before posting, replying, commenting, or chatting.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 4
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use/group-chats-and-games"
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
                  "Explain why online words matter.",
                  "Choose kind and respectful messages.",
                  "Pause before posting or replying.",
                  "Ask a trusted adult when online words feel hurtful or unsafe.",
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
                Online words can affect real people.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not send messages, comments, screenshots, jokes,
                or replies meant to hurt, scare, shame, or embarrass someone. If
                something online feels mean or unsafe, students should ask a
                trusted adult for help.
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
                A screen does not make words less powerful.
              </h2>

              <p className="leading-relaxed text-slate-300">
                When people send messages online, the words still go to real
                people with real feelings. A message can help someone feel
                included, supported, and respected. A message can also hurt,
                embarrass, or scare someone. That is why students should pause
                before sending and choose words that are kind, safe, and
                respectful.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {kindWordRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {rule}
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
                Practice choosing kind words.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice writing respectful messages without using real names,
                real screenshots, or real private conversations.
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
                How can words help people feel safe online?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Kind words can help people feel included, respected, and
                supported. Respectful online messages can make games, classroom
                tools, chats, and comments safer for everyone.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one kind message you could send if someone makes a
                  mistake online?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the kind-before-send habit.
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
                What is the kinder choice?
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
                      Kinder answer
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
                Before moving to Lesson 4.2, students should be able to say:
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
              Continue the Kind and Safe Technology Use module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn how to make safer choices in group
              chats, games, comments, and classroom technology tools.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use"
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
                href="/kids/kind-and-safe-technology-use/group-chats-and-games"
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