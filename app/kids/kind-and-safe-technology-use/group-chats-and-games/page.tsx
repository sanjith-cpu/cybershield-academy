import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const groupChatRules = [
  "Group messages can spread quickly.",
  "Do not join mean jokes, teasing, or drama.",
  "Do not share screenshots to embarrass someone.",
  "Pause before replying when a chat feels upsetting.",
  "Leave or step away from conversations that feel unsafe.",
  "Ask a trusted adult if a chat or game message feels mean, scary, confusing, or unsafe.",
];

const vocabulary = [
  {
    term: "Group chat",
    meaning:
      "A message space where more than two people can talk, such as a class chat, team chat, game chat, or friend group message.",
  },
  {
    term: "Game chat",
    meaning:
      "A chat or message area inside a game where players can talk or send messages.",
  },
  {
    term: "Drama",
    meaning:
      "A stressful online argument or conflict that can grow when people keep replying, sharing, or joining in.",
  },
  {
    term: "Step away",
    meaning:
      "Choosing to stop replying, leave the chat, close the app, or ask for help instead of making the problem bigger.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student sees classmates making fun of someone in a group chat and does not join in.",
  },
  {
    label: "Unsafe choice",
    text: "A student shares a screenshot from a private chat to embarrass someone.",
  },
  {
    label: "Safer choice",
    text: "A student leaves a game chat that becomes mean and tells a trusted adult.",
  },
];

const realLifeSteps = [
  "Pause before replying in a group chat or game chat.",
  "Ask yourself: Will this message help, hurt, or make the problem bigger?",
  "Do not join teasing, pile-ons, mean jokes, or embarrassing comments.",
  "Do not share screenshots, photos, or private messages to make fun of someone.",
  "Step away if a chat becomes mean, stressful, scary, or unsafe.",
  "Ask a trusted adult for help if the situation continues or feels serious.",
];

const practiceQuestions = [
  {
    question:
      "A group chat starts making fun of a student who is not there. What should you do?",
    answer:
      "Do not join in. Step away from the mean behavior and ask a trusted adult if someone is being hurt.",
  },
  {
    question:
      "Someone sends you a screenshot and asks you to share it to embarrass another student. What is the safer choice?",
    answer:
      "Do not share it. Sharing screenshots to embarrass someone is unsafe and unkind.",
  },
  {
    question:
      "A game chat becomes mean and stressful. What can you do?",
    answer:
      "Stop replying, step away, and ask a trusted adult for help if needed.",
  },
  {
    question:
      "Before sending a message in a group chat, what should you check?",
    answer:
      "Check if the message is kind, respectful, safe, and not making a problem bigger.",
  },
];

const reviewChecklist = [
  "I can explain why group chats can spread messages quickly.",
  "I can make respectful choices in group chats and game chats.",
  "I know not to join mean jokes, teasing, or pile-ons.",
  "I know not to share screenshots or private messages to embarrass someone.",
  "I can step away when a chat becomes mean or unsafe.",
  "I can ask a trusted adult when online group behavior feels hurtful or unsafe.",
];

export default function KidsGroupChatsAndGamesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4 • Lesson 4.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Group Chats and Games
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn how to make kind and safe choices
              in group chats, game chats, comments, classroom tools, and online
              communities. Students will practice stepping away instead of
              joining mean behavior.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/kind-words-online"
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
                href="/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean"
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
                  "Explain why group chats can spread messages quickly.",
                  "Recognize unkind or unsafe group chat behavior.",
                  "Avoid joining teasing, drama, or pile-ons.",
                  "Step away and ask a trusted adult when a chat feels unsafe.",
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
                Group chats can affect real people.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not use real names, real screenshots, real
                private messages, or real conflicts in practice activities. If a
                real chat feels mean, scary, confusing, or unsafe, students
                should ask a trusted adult for help.
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
                Group chats can make small problems bigger.
              </h2>

              <p className="leading-relaxed text-slate-300">
                In a group chat or game chat, many people can see and respond to
                messages quickly. That means kind messages can help a group feel
                safe, but mean messages can spread and hurt people fast. A safer
                habit is to pause before replying, avoid joining mean behavior,
                and ask a trusted adult when something feels unsafe.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {groupChatRules.map((rule) => (
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
                Practice group chat choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real names, screenshots, or
                private conversations.
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
                Why can group chats become stressful?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Group chats can become stressful when many people reply quickly,
                repeat mean jokes, share screenshots, or make a problem bigger.
                Students do not have to join in. They can step away and ask a
                trusted adult for help.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one safe choice you can make if a group chat starts
                  becoming mean?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the step-away habit.
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
                What is the safer group choice?
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
                Before moving to Lesson 4.3, students should be able to say:
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
              Next, students will learn what to do if someone is mean online and
              how to ask trusted adults for help.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/kind-words-online"
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
                href="/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean"
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