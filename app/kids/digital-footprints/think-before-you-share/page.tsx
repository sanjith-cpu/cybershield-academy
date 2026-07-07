import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sharingWarningSigns = [
  "The post includes a real address, phone number, school name, or location.",
  "The message shares a password or account information.",
  "The photo shows private information in the background.",
  "The post shares something about someone else without asking.",
  "The message feels embarrassing, mean, or unsafe.",
  "The student feels unsure and has not asked a trusted adult.",
];

const vocabulary = [
  {
    term: "Share",
    meaning:
      "To send, post, upload, comment, or show something online so other people can see it.",
  },
  {
    term: "Permission",
    meaning:
      "Asking and getting a clear yes before posting or sharing something about another person.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as addresses, phone numbers, school names, locations, passwords, and family details.",
  },
  {
    term: "Think before you share",
    meaning:
      "A safety habit where students pause and check whether something is private, hurtful, or unsafe before posting or sending it.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student wants to post a picture with a friend and asks the friend and a trusted adult first.",
  },
  {
    label: "Unsafe choice",
    text: "A student posts a photo that shows their school name, location, and full name.",
  },
  {
    label: "Safer choice",
    text: "A student decides not to share a screenshot because it could embarrass someone.",
  },
];

const realLifeSteps = [
  "Pause before posting, sending, uploading, or commenting.",
  "Check whether the post includes private information.",
  "Ask permission before sharing photos or information about someone else.",
  "Do not share screenshots or private messages to embarrass someone.",
  "Do not post when you are angry, upset, or trying to hurt someone.",
  "Ask a trusted adult if you are unsure whether something is safe to share.",
];

const practiceQuestions = [
  {
    question:
      "A student wants to post a photo, but their school name is visible in the background. What should they do?",
    answer:
      "They should not post it as-is. School names and locations can be private information. They should ask a trusted adult for help.",
  },
  {
    question:
      "A friend sends a funny picture, but you are not sure if they want it posted. What should you do first?",
    answer:
      "Ask permission before sharing. If you are unsure, do not post it and ask a trusted adult.",
  },
  {
    question:
      "A student is angry and wants to post a mean comment. What is the safer choice?",
    answer:
      "Pause and do not post it. Angry messages can hurt people and may be saved or shared.",
  },
  {
    question:
      "A post asks students to share their phone number to join a game group. What should they do?",
    answer:
      "They should not share their phone number. Phone numbers are private information. They should ask a trusted adult.",
  },
];

const reviewChecklist = [
  "I can explain why students should think before sharing.",
  "I can recognize private information in posts, photos, and messages.",
  "I know to ask permission before posting about someone else.",
  "I know not to share screenshots or private messages to embarrass someone.",
  "I can pause before posting when I feel angry or upset.",
  "I can ask a trusted adult when I am unsure if something is safe to share.",
];

export default function KidsThinkBeforeYouSharePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5 • Lesson 5.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Think Before You Share
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn how to pause before sharing posts,
              photos, comments, screenshots, messages, locations, or information
              about themselves or others.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/what-is-a-digital-footprint"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 5
              </Link>

              <Link
                href="/kids/digital-footprints/photos-posts-and-screenshots"
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
                  "Explain why thinking before sharing matters.",
                  "Recognize private information in posts, photos, and messages.",
                  "Understand why permission matters before posting about others.",
                  "Ask a trusted adult when unsure if something is safe to share.",
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
                Sharing can affect yourself and others.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not use real private information, real
                screenshots, real private messages, real names, or real photos
                in practice activities. If something feels confusing,
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
                Simple Explanation
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Sharing should not be automatic.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Before students post, send, comment, upload, or share something,
                they should pause and think. Some information should stay
                private. Some photos or screenshots may include details that
                should not be shared. Some posts may affect other people. The
                safer habit is to pause, check, ask permission, and get help
                from a trusted adult when unsure.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {sharingWarningSigns.map((sign) => (
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
                Practice thoughtful sharing.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real photos, real
                screenshots, or real private information.
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
                What should students check before sharing?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Students should check whether a post includes private
                information, whether it could hurt or embarrass someone, whether
                it includes another person, and whether they have permission to
                share it.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one thing you should ask yourself before posting a
                  photo or comment online?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-check-share habit.
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
                Should this be shared?
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
                Before moving to Lesson 5.3, students should be able to say:
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
              Continue the Digital Footprints module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn how photos, posts, and screenshots can
              spread and why permission matters before sharing.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/what-is-a-digital-footprint"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/digital-footprints/photos-posts-and-screenshots"
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