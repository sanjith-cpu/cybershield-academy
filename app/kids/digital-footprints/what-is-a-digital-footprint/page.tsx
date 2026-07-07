import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footprintExamples = [
  "Posts",
  "Comments",
  "Messages",
  "Photos",
  "Videos",
  "Likes",
  "Searches",
  "Game activity",
  "Account activity",
  "Shared screenshots",
];

const vocabulary = [
  {
    term: "Digital footprint",
    meaning:
      "The traces that online actions can leave behind, such as posts, comments, photos, messages, and account activity.",
  },
  {
    term: "Online trace",
    meaning:
      "A sign that something happened online, like a saved post, message, photo, search, or comment.",
  },
  {
    term: "Post",
    meaning:
      "Something someone shares online, such as words, pictures, videos, or updates.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as addresses, phone numbers, school names, locations, passwords, and family details.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student thinks carefully before posting a comment because online words can be saved or remembered.",
  },
  {
    label: "Unsafe choice",
    text: "A student shares their school name and location in a public game chat.",
  },
  {
    label: "Safer choice",
    text: "A student asks a trusted adult before posting a photo that includes another person.",
  },
];

const realLifeSteps = [
  "Pause before posting, commenting, sending, or sharing.",
  "Ask yourself: Could this be saved, copied, or remembered later?",
  "Do not share private information online.",
  "Ask permission before posting photos or information about someone else.",
  "Do not use real private information in practice activities.",
  "Ask a trusted adult if you posted something by mistake or feel worried.",
];

const practiceQuestions = [
  {
    question: "What is a digital footprint?",
    answer:
      "A digital footprint is the trace that online actions can leave behind, such as posts, comments, photos, messages, and account activity.",
  },
  {
    question:
      "A student posts their phone number in a public comment. Why is that unsafe?",
    answer:
      "A phone number is private information. It should not be posted publicly because other people may see, save, or share it.",
  },
  {
    question:
      "A student wants to post a photo with a friend in it. What should they do first?",
    answer:
      "They should ask permission and check with a trusted adult if they are unsure.",
  },
  {
    question:
      "A student posts something by mistake and feels worried. What is the safest next step?",
    answer:
      "They should ask a trusted adult for help instead of trying to handle it alone.",
  },
];

const reviewChecklist = [
  "I can explain what a digital footprint is.",
  "I can name examples of online traces.",
  "I know online actions can sometimes be saved, copied, or remembered.",
  "I know not to share private information online.",
  "I know to ask before posting about someone else.",
  "I can ask a trusted adult if I make a mistake online.",
];

export default function KidsWhatIsADigitalFootprintPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5 • Lesson 5.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              What Is a Digital Footprint?
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn that online actions can leave
              traces. Students will practice understanding digital footprints in
              a safe, simple, and age-appropriate way.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 5
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/digital-footprints/think-before-you-share"
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
                  "Explain what a digital footprint is.",
                  "Name examples of online traces.",
                  "Understand why online actions can matter later.",
                  "Ask a trusted adult when they need help with something online.",
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
                Do not use real private information.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not use real names, addresses, phone numbers,
                school names, locations, passwords, private messages, or real
                screenshots in practice activities. CyberShield examples should
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
                A digital footprint is like an online trail.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A digital footprint is the trace that online actions can leave
                behind. When people post, comment, message, search, like, play,
                or share online, those actions can sometimes be saved, copied,
                remembered, or seen later. This does not mean students should be
                scared of technology. It means students should pause and make
                thoughtful choices before sharing.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {footprintExamples.map((example) => (
                <div
                  key={example}
                  className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5 text-center font-semibold text-cyan-100"
                >
                  {example}
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
                Practice thinking about online traces.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations instead of real personal
                information.
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
                Why should students think before sharing?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Online actions can sometimes last longer than expected. A post,
                comment, photo, or screenshot might be saved or copied. Thinking
                before sharing helps students protect themselves and respect
                other people.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one thing you should pause and check before posting
                  online?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the think-before-sharing habit.
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
                Before moving to Lesson 5.2, students should be able to say:
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
              Next, students will learn how to think before sharing personal
              details, photos, messages, locations, and information about other
              people.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints"
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
                href="/kids/digital-footprints/think-before-you-share"
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