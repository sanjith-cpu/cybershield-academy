import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sharingRisks = [
  "Photos can show private information in the background.",
  "Screenshots can be copied and shared quickly.",
  "Posts can be saved or remembered later.",
  "Private messages should not be shared to embarrass someone.",
  "Photos of other people should not be posted without permission.",
  "Students should ask a trusted adult when unsure if something is safe to share.",
];

const vocabulary = [
  {
    term: "Photo",
    meaning:
      "A picture taken on a device. Photos can sometimes show private information, locations, people, or details in the background.",
  },
  {
    term: "Post",
    meaning:
      "Something shared online, such as words, photos, videos, comments, or updates.",
  },
  {
    term: "Screenshot",
    meaning:
      "A picture of what is on a screen. Screenshots can be saved, copied, or shared by others.",
  },
  {
    term: "Permission",
    meaning:
      "Getting a clear yes before sharing something about another person, such as their photo, message, or information.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student asks a friend for permission before posting a photo that includes them.",
  },
  {
    label: "Unsafe choice",
    text: "A student shares a screenshot of a private message to embarrass someone.",
  },
  {
    label: "Safer choice",
    text: "A student notices a photo shows their school name in the background and asks a trusted adult before posting.",
  },
];

const realLifeSteps = [
  "Pause before posting a photo, screenshot, message, or comment.",
  "Check whether the photo shows private information in the background.",
  "Ask permission before sharing a photo or message that includes someone else.",
  "Do not share screenshots or private messages to embarrass someone.",
  "Do not post photos when someone says no or seems uncomfortable.",
  "Ask a trusted adult if you are unsure whether a photo, post, or screenshot is safe to share.",
];

const practiceQuestions = [
  {
    question:
      "A student takes a photo at home, but their address is visible in the background. What should they do?",
    answer:
      "They should not post it as-is. Addresses are private information. They should ask a trusted adult for help.",
  },
  {
    question:
      "A friend sends a private message. Another student wants to screenshot it and share it as a joke. Is that safe?",
    answer:
      "No. Private messages should not be shared to embarrass someone. The safer choice is not to share it.",
  },
  {
    question:
      "A student wants to post a picture that includes a friend. What should they do first?",
    answer:
      "They should ask for permission before sharing a photo that includes someone else.",
  },
  {
    question:
      "A post feels funny now, but it might hurt someone later. What is the safer choice?",
    answer:
      "Pause and do not post it. If unsure, ask a trusted adult before sharing.",
  },
];

const reviewChecklist = [
  "I can explain why photos should be checked before sharing.",
  "I can explain why screenshots can spread quickly.",
  "I know not to share private messages to embarrass someone.",
  "I know to ask permission before posting photos of other people.",
  "I can check photos for private information in the background.",
  "I can ask a trusted adult when I am unsure if something is safe to share.",
];

export default function KidsPhotosPostsAndScreenshotsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5 • Lesson 5.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Photos, Posts, and Screenshots
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn why photos, posts, screenshots, and
              private messages should be handled carefully. Students will
              practice checking before sharing and asking for permission when
              other people are included.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/think-before-you-share"
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
                href="/kids/digital-footprints/cleaning-up-and-asking-for-help"
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
                  "Explain why photos and posts should be checked before sharing.",
                  "Understand why screenshots can spread quickly.",
                  "Recognize why private messages should stay private.",
                  "Ask permission before sharing something about another person.",
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
                Do not use real private screenshots.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield practice examples should stay fake and classroom
                safe. Students should not use real photos, real screenshots,
                real private messages, real names, real addresses, or real
                school information in practice activities.
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
                Sharing a photo or screenshot can affect more than one person.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Photos, posts, and screenshots can be saved, copied, or shared
                by other people. A photo might show private information in the
                background. A screenshot might include a private message. A post
                might include someone who did not give permission. That is why
                students should pause, check carefully, and ask for help when
                they are unsure.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {sharingRisks.map((risk) => (
                <div
                  key={risk}
                  className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5 text-slate-200"
                >
                  {risk}
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
                Practice careful sharing.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real photos, screenshots,
                private messages, or personal information.
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
                What should students check before posting a photo?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Students should check whether the photo includes private
                information, another person, a location, a school name, or
                anything that could embarrass or hurt someone.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Why should students ask permission before posting a photo with
                  another person in it?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the check-before-posting habit.
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
                Should this photo, post, or screenshot be shared?
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
                Before moving to Lesson 5.4, students should be able to say:
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
              Next, students will learn what to do if they posted something by
              mistake or need trusted adult help with an online situation.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/think-before-you-share"
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
                href="/kids/digital-footprints/cleaning-up-and-asking-for-help"
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