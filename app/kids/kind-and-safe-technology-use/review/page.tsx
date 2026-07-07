import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonsReviewed = [
  {
    number: "4.1",
    title: "Kind Words Online",
    text: "Students learned that online words affect real people and should be kind, respectful, and safe.",
  },
  {
    number: "4.2",
    title: "Group Chats and Games",
    text: "Students learned how to avoid joining mean behavior, group chat drama, teasing, and unsafe conversations.",
  },
  {
    number: "4.3",
    title: "What to Do if Someone Is Mean",
    text: "Students learned how to pause, step away, avoid hurtful replies, and ask trusted adults for help.",
  },
  {
    number: "4.4",
    title: "Being a Digital Helper",
    text: "Students learned how to support others online without joining drama or trying to solve unsafe problems alone.",
  },
];

const vocabularyReview = [
  {
    term: "Kind words",
    meaning:
      "Words that are respectful, helpful, calm, and safe for others to read.",
  },
  {
    term: "Group chat",
    meaning:
      "A message space where more than two people can talk, such as a class chat, team chat, game chat, or friend group message.",
  },
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
    term: "Digital helper",
    meaning:
      "Someone who uses technology in a kind, safe, and responsible way to support others.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A parent, guardian, teacher, counselor, coach, librarian, or school technology staff member who can help.",
  },
];

const reviewQuestions = [
  {
    question:
      "A classmate makes a mistake online and people start laughing. What is a kind choice?",
    answer:
      "Do not join the teasing. Use kind words, help the person feel included, or ask a trusted adult if needed.",
  },
  {
    question:
      "A group chat starts sharing screenshots to embarrass someone. What should you do?",
    answer:
      "Do not share the screenshot. Do not join the drama. Tell a trusted adult because private messages should not be used to embarrass people.",
  },
  {
    question:
      "Someone sends you a mean message and you feel angry. What is the safer response?",
    answer:
      "Pause before replying. Do not send mean words back. Step away and ask a trusted adult if the situation feels hurtful or unsafe.",
  },
  {
    question:
      "What does a digital helper do when an online conversation becomes unsafe?",
    answer:
      "A digital helper uses calm words, does not join drama, steps away, and asks a trusted adult for help.",
  },
];

const safeOrUnsafe = [
  {
    situation:
      "A student pauses before replying to an angry message and asks a teacher for help.",
    answer: "Safer choice",
    reason:
      "Pausing and asking a trusted adult can stop the problem from getting bigger.",
  },
  {
    situation:
      "A student shares a private screenshot because other people think it is funny.",
    answer: "Unsafe choice",
    reason:
      "Private screenshots should not be shared to embarrass or hurt someone.",
  },
  {
    situation:
      "A student sees mean comments and does not join in.",
    answer: "Safer choice",
    reason:
      "Not joining mean behavior helps keep online spaces safer and kinder.",
  },
  {
    situation:
      "A student sends a hurtful reply because they are upset.",
    answer: "Unsafe choice",
    reason:
      "Hurtful replies can make the situation worse. It is safer to pause and step away.",
  },
];

const kindnessRules = [
  "Use kind and respectful words.",
  "Pause before posting or replying.",
  "Do not join teasing, drama, or pile-ons.",
  "Do not share screenshots or private messages to embarrass someone.",
  "Step away from hurtful conversations.",
  "Ask a trusted adult when something online feels mean, scary, confusing, or unsafe.",
];

const finalChecklist = [
  "I can explain why online words matter.",
  "I can choose kind and respectful messages.",
  "I know not to join mean jokes, teasing, or group chat drama.",
  "I know not to share screenshots or private messages to embarrass someone.",
  "I can pause before replying when I feel upset.",
  "I can step away from hurtful chats, games, comments, or messages.",
  "I can be a digital helper without making the problem bigger.",
  "I can ask a trusted adult when online behavior feels hurtful or unsafe.",
];

export default function KidsKindAndSafeTechnologyUseReviewPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4 • Lesson 4.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Kind and Safe Technology Use Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This review helps students practice the biggest ideas from Module
              4: kind words, respectful group chat choices, safe responses to
              mean behavior, and being a digital helper.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/being-a-digital-helper"
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
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Kids Track
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Goal
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this review, students should be able to:
              </h2>

              <div className="space-y-3">
                {[
                  "Explain why online kindness matters.",
                  "Recognize unsafe or unkind online behavior.",
                  "Choose safer responses in chats, games, comments, and messages.",
                  "Ask trusted adults for help when online behavior feels unsafe.",
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
                Practice should stay fake and safe.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield activities should not use real names, real private
                messages, real screenshots, real conflicts, or real student
                information. If something online feels mean, scary, confusing,
                embarrassing, or unsafe, students should ask a trusted adult for
                help.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Lessons Reviewed
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Module 4 covered
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 4 helped students practice kind, safe, and respectful
                technology choices.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {lessonsReviewed.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    Lesson {lesson.number}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {lesson.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {lesson.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Vocabulary Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Important words from Module 4
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabularyReview.map((word) => (
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
                Review Questions
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Choose the kind and safe answer
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students can answer these questions out loud, in a notebook, or
                during a classroom discussion.
              </p>
            </div>

            <div className="space-y-6">
              {reviewQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Question {index + 1}
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
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe or Unsafe Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice spotting better technology choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and classroom safe. Students should use
                them to practice kind and safe online decision-making.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {safeOrUnsafe.map((item) => (
                <div
                  key={item.situation}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-4 text-2xl font-bold">
                    {item.situation}
                  </h3>

                  <p className="mb-3 font-semibold text-cyan-300">
                    Answer: {item.answer}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                Real-Life Safety Habit
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Remember: pause, choose kindness, ask for help.
              </h2>

              <div className="space-y-3">
                {[
                  "Pause before posting, replying, sharing, or joining a group conversation.",
                  "Choose words and actions that are kind, respectful, and safe.",
                  "Ask a trusted adult when online behavior feels mean, scary, confusing, embarrassing, or unsafe.",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Module 4 Rules
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Kind technology reminders
              </h2>

              <div className="grid gap-3">
                {kindnessRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Students are ready to finish Module 4 when they can say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {finalChecklist.map((item) => (
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
              Module Complete
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              You finished Kids Module 4.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              The next Kids module will focus on digital footprints. Students
              will learn how online actions can leave traces and why thoughtful
              sharing matters.
            </p>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-6 text-left">
              <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                Kind Technology Pledge
              </h3>

              <p className="leading-relaxed text-slate-300">
                I will use technology with kindness, pause before posting or
                replying, avoid joining mean behavior, protect private messages,
                step away from hurtful conversations, and ask a trusted adult
                when something online feels unsafe.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/being-a-digital-helper"
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
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Practice Activities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}