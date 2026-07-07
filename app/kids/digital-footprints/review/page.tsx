import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonsReviewed = [
  {
    lesson: "5.1",
    title: "What Is a Digital Footprint?",
    summary:
      "A digital footprint is the trail of information connected to what someone does online, such as posts, comments, photos, usernames, and activity.",
  },
  {
    lesson: "5.2",
    title: "Think Before You Share",
    summary:
      "Before sharing online, students should pause and think about privacy, kindness, permission, safety, and whether a trusted adult should help.",
  },
  {
    lesson: "5.3",
    title: "Photos, Posts, and Screenshots",
    summary:
      "Photos, posts, and screenshots can spread quickly. Students should use fake examples in practice and ask before sharing about others.",
  },
  {
    lesson: "5.4",
    title: "Cleaning Up and Asking for Help",
    summary:
      "If something online feels confusing, embarrassing, unsafe, secret, or urgent, students should pause and ask a trusted adult for help.",
  },
];

const vocabularyReview = [
  "Digital footprint",
  "Post",
  "Photo",
  "Screenshot",
  "Private information",
  "Permission",
  "Trusted adult",
  "Delete or remove",
  "Report",
  "Ask for help",
];

const safeUnsafeExamples = [
  {
    label: "Safer choice",
    text: "A student uses a fake example during class instead of sharing a real screenshot or private message.",
  },
  {
    label: "Unsafe choice",
    text: "A student posts a photo that includes another person without asking permission first.",
  },
  {
    label: "Safer choice",
    text: "A student notices private information in a post and asks a trusted adult what to do.",
  },
  {
    label: "Unsafe choice",
    text: "A student feels worried about something online but keeps it secret because they are embarrassed.",
  },
  {
    label: "Safer choice",
    text: "A student pauses before posting and thinks about whether the post is kind, safe, and private.",
  },
  {
    label: "Unsafe choice",
    text: "A student spreads a screenshot because other people are sharing it too.",
  },
];

const reviewQuestions = [
  {
    question: "What is a digital footprint?",
    answer:
      "A digital footprint is the trail of information connected to what someone does online.",
  },
  {
    question: "Why should students pause before sharing online?",
    answer:
      "Pausing helps students think about privacy, kindness, permission, and safety before something becomes part of their digital footprint.",
  },
  {
    question: "Why can screenshots be tricky?",
    answer:
      "Screenshots can be saved, copied, and shared by others, even when the original message or post is removed.",
  },
  {
    question: "What should students do if they post something by mistake?",
    answer:
      "They should pause, stay calm, and ask a trusted adult for help instead of trying to fix a serious problem alone.",
  },
  {
    question: "Who can be a trusted adult?",
    answer:
      "A trusted adult can be a parent, guardian, teacher, counselor, coach, librarian, or school technology staff member.",
  },
];

const finalChecklist = [
  "I can explain what a digital footprint is.",
  "I can pause before posting, sharing, commenting, or sending.",
  "I know not to share real private information in practice activities.",
  "I know to ask permission before sharing photos or information about others.",
  "I understand that screenshots can spread quickly.",
  "I know that online worries should not be kept secret.",
  "I can ask a trusted adult for help when something feels unsafe or confusing.",
  "I can make kind, safe, and responsible choices online.",
];

export default function KidsDigitalFootprintsReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5 • Lesson 5.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Digital Footprints Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this review lesson, students practice the most important ideas
              from Module 5: digital footprints, thinking before sharing,
              photos, posts, screenshots, cleanup choices, and asking trusted
              adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/cleaning-up-and-asking-for-help"
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
                Lessons Reviewed
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Module 5 covered four important safety lessons.
              </h2>

              <div className="space-y-4">
                {lessonsReviewed.map((item) => (
                  <div
                    key={item.lesson}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-cyan-300">
                      Lesson {item.lesson}
                    </p>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-slate-300">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Keep practice examples fake and safe.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                Students should not use real private information, real
                screenshots, real messages, real passwords, real names, real
                conflicts, or real school information in practice activities.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/50 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Review Rule
                </h3>

                <p className="leading-relaxed text-yellow-100">
                  Pause before sharing. Ask before posting about others. Get a
                  trusted adult when something feels unsafe, confusing,
                  embarrassing, secret, scary, or urgent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Vocabulary Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Important words from Module 5
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students should be able to explain these words in simple,
                age-appropriate language.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {vocabularyReview.map((word) => (
                <div
                  key={word}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center font-semibold text-cyan-200"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Can you spot the safer choice?
              </h2>

              <p className="leading-relaxed text-slate-300">
                These are fake classroom examples. Students should practice
                choosing the safer response without using real screenshots,
                real private messages, or real personal details.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {safeUnsafeExamples.map((example) => (
                <div
                  key={example.text}
                  className={`rounded-3xl border p-6 ${
                    example.label === "Safer choice"
                      ? "border-emerald-500/30 bg-emerald-950/20"
                      : "border-red-500/30 bg-red-950/20"
                  }`}
                >
                  <h3
                    className={`mb-3 text-xl font-bold ${
                      example.label === "Safer choice"
                        ? "text-emerald-200"
                        : "text-red-200"
                    }`}
                  >
                    {example.label}
                  </h3>

                  <p className="leading-relaxed text-slate-200">
                    {example.text}
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
                Check your understanding.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each question and review the safer answer.
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
                      Review answer
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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                Real-Life Safety Habit
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Pause, think, ask, then share.
              </h2>

              <p className="leading-relaxed text-slate-200">
                Before posting, commenting, sending, or sharing, students should
                pause and ask: Is this kind? Is this private? Did I get
                permission? Could this become part of my digital footprint? Do I
                need a trusted adult?
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Digital Footprint Pledge
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                I will make safer online choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                I will pause before I post, share, comment, or send. I will
                protect private information, ask permission before sharing about
                others, use kind words online, and ask a trusted adult for help
                when something feels unsafe, confusing, embarrassing, secret, or
                urgent.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Students are ready to finish Module 5 when they can say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {finalChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Module 5 is almost complete.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Use the buttons below to review Digital Footprints, return to the
              Kids Track, or explore CyberShield activities.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/cleaning-up-and-asking-for-help"
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
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Kids Track
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Activities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}