import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const meanBehaviorSigns = [
  "Someone sends hurtful or embarrassing messages.",
  "Someone makes fun of another person in a chat, game, or comment.",
  "Someone shares screenshots, photos, or private messages to embarrass someone.",
  "Someone keeps bothering another person after being asked to stop.",
  "A group starts joining in on mean jokes or teasing.",
  "A message makes someone feel scared, unsafe, worried, or upset.",
];

const vocabulary = [
  {
    term: "Mean online behavior",
    meaning:
      "Messages, comments, posts, screenshots, or game chats that hurt, embarrass, scare, or disrespect someone.",
  },
  {
    term: "Step away",
    meaning:
      "Stop replying, close the chat, leave the game, or take a break instead of making the problem bigger.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A parent, guardian, teacher, counselor, coach, librarian, or school technology staff member who can help.",
  },
  {
    term: "Report",
    meaning:
      "Using a tool in an app, game, or website to ask for help with unsafe behavior. Younger students should ask a trusted adult to help with this.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student receives a mean message, does not reply with mean words, and tells a trusted adult.",
  },
  {
    label: "Unsafe choice",
    text: "A student sends more hurtful messages back because they feel angry.",
  },
  {
    label: "Safer choice",
    text: "A student sees someone being teased in a group chat, does not join in, and asks a teacher for help.",
  },
];

const safeSteps = [
  "Pause before replying.",
  "Do not answer mean words with more mean words.",
  "Step away from the chat, game, comment section, or message.",
  "Do not share screenshots, private messages, photos, or jokes to embarrass someone.",
  "Tell a trusted adult what happened.",
  "Ask a trusted adult to help block, report, or save important information safely if needed.",
];

const practiceQuestions = [
  {
    question:
      "Someone sends you a mean message in a game chat. What should you do first?",
    answer:
      "Pause and do not reply with mean words. Step away and tell a trusted adult if it feels hurtful or unsafe.",
  },
  {
    question:
      "A group chat is making fun of another student. What is the safer choice?",
    answer:
      "Do not join in. Step away from the mean behavior and ask a trusted adult for help.",
  },
  {
    question:
      "You feel angry and want to send a hurtful reply. What should you do?",
    answer:
      "Do not send the hurtful reply. Take a break, pause, and ask a trusted adult if you need help.",
  },
  {
    question:
      "Someone shares a private screenshot to embarrass another person. What should you do?",
    answer:
      "Do not share it again. Do not join the teasing. Tell a trusted adult because private messages should not be used to embarrass people.",
  },
];

const reviewChecklist = [
  "I can recognize mean online behavior.",
  "I know not to reply to mean words with more mean words.",
  "I can step away from hurtful chats, games, comments, or messages.",
  "I know not to share screenshots or private messages to embarrass someone.",
  "I can ask a trusted adult when online behavior feels hurtful or unsafe.",
  "I know a trusted adult can help with blocking, reporting, or getting support.",
];

export default function KidsWhatToDoIfSomeoneIsMeanPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4 • Lesson 4.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              What to Do if Someone Is Mean
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn safe steps to take when someone is
              mean, hurtful, or disrespectful online. Students will practice
              pausing, stepping away, not joining in, and asking trusted adults
              for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/group-chats-and-games"
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
                href="/kids/kind-and-safe-technology-use/being-a-digital-helper"
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
                  "Recognize mean online behavior.",
                  "Pause instead of sending hurtful replies.",
                  "Step away from unsafe chats, games, comments, or messages.",
                  "Ask a trusted adult for help when something feels hurtful or unsafe.",
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
                Students should not handle hurtful situations alone.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                If online messages, comments, screenshots, group chats, or games
                feel mean, scary, confusing, embarrassing, or unsafe, students
                should ask a trusted adult for help. Practice examples should
                stay fake and classroom safe.
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
                Mean behavior online is still real behavior.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Hurtful words, screenshots, jokes, comments, and game messages
                can affect real people. When someone is mean online, students do
                not need to fight back or solve it alone. A safer choice is to
                pause, step away, avoid joining in, and ask a trusted adult for
                help.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {meanBehaviorSigns.map((sign) => (
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
                Practice safer responses.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                not use real names, real screenshots, real private messages, or
                real conflicts in practice activities.
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
                Why is fighting back online risky?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Replying with more mean words can make a problem bigger and
                hurt more people. Students can make safer choices by pausing,
                stepping away, and asking a trusted adult for help instead of
                joining the hurtful behavior.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one safe thing you can do if someone sends a hurtful
                  message?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-step-away-ask habit.
              </h2>

              <div className="space-y-3">
                {safeSteps.map((step) => (
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
                Before moving to Lesson 4.4, students should be able to say:
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
              Next, students will learn how to be digital helpers without
              joining drama, arguments, or unsafe conversations.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/group-chats-and-games"
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
                href="/kids/kind-and-safe-technology-use/being-a-digital-helper"
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