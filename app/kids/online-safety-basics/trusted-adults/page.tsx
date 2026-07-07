import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trustedAdults = [
  "Parent or guardian",
  "Teacher",
  "School counselor",
  "Librarian",
  "Coach",
  "School technology staff member",
];

const warningSigns = [
  "Someone online asks you to keep a secret from your family or teacher.",
  "A website, game, popup, or message asks for private information.",
  "A message says you must click quickly or you will lose a prize.",
  "Someone sends a message that feels scary, mean, confusing, or uncomfortable.",
  "A stranger online asks where you live, what school you go to, or when you are home.",
  "A website or app asks for a password when you do not understand why.",
];

const vocabulary = [
  {
    term: "Trusted adult",
    meaning:
      "A grown-up who helps keep students safe, such as a parent, guardian, teacher, counselor, or school technology staff member.",
  },
  {
    term: "Warning sign",
    meaning:
      "Something that tells you to slow down, pause, and ask for help before continuing.",
  },
  {
    term: "Uncomfortable",
    meaning:
      "A feeling that something is strange, wrong, scary, confusing, or unsafe.",
  },
  {
    term: "Report",
    meaning:
      "To tell a trusted adult about something unsafe, hurtful, strange, or suspicious.",
  },
];

const safeUnsafeExamples = [
  {
    label: "Safer choice",
    text: "A student sees a strange popup and asks a parent or teacher before clicking anything.",
  },
  {
    label: "Unsafe choice",
    text: "A student keeps talking to a stranger online after the stranger asks where they live.",
  },
  {
    label: "Safer choice",
    text: "A student tells a trusted adult when someone online asks them to keep a secret.",
  },
];

const realLifeSteps = [
  "Pause when something online feels strange, scary, confusing, urgent, secret, or unsafe.",
  "Step away from the device if you feel uncomfortable or pressured.",
  "Do not reply to people who ask for private information or tell you to keep secrets.",
  "Do not click suspicious buttons, popups, links, or downloads.",
  "Tell a trusted adult what happened and show them the message, popup, game, app, or website if it is safe to do so.",
];

const practiceQuestions = [
  {
    question:
      "A game message says, 'Tell me your school name, but do not tell your parents.' What should you do?",
    answer:
      "Do not answer. This is a warning sign because the message asks for private information and asks you to keep a secret. Tell a trusted adult.",
  },
  {
    question:
      "A popup says you won a free prize and must click quickly. What should you do?",
    answer:
      "Pause and ask a trusted adult before clicking. Urgent prize messages can be unsafe or fake.",
  },
  {
    question:
      "Someone in a class chat is being mean to another student. What is a safer choice?",
    answer:
      "Do not join in. Step away and tell a teacher, counselor, or another trusted adult.",
  },
  {
    question:
      "You feel confused about a website asking for your password. What should you do?",
    answer:
      "Do not type the password until a trusted adult helps you check if the website is safe and expected.",
  },
];

const reviewChecklist = [
  "I can name trusted adults who can help me.",
  "I can explain why asking for help is a smart safety habit.",
  "I can recognize warning signs like secrets, pressure, private questions, and scary messages.",
  "I can pause before clicking, replying, or sharing information.",
  "I can tell a trusted adult when something online feels wrong.",
];

export default function KidsTrustedAdultsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1 • Lesson 1.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Trusted Adults
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn when to pause, step away, and ask a
              trusted adult for help. Asking for help is not getting in trouble.
              It is a smart cyber safety habit.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/safe-usernames"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 1
              </Link>

              <Link
                href="/kids/online-safety-basics/review"
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
                  "Name trusted adults who can help with online safety.",
                  "Recognize warning signs that mean it is time to ask for help.",
                  "Understand that asking for help is responsible, not embarrassing.",
                  "Use a pause-step-away-ask habit when something online feels wrong.",
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
                Students should not handle unsafe situations alone.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                If something online feels scary, confusing, secret, urgent,
                mean, or unsafe, students should pause and ask a trusted adult.
                CyberShield should always encourage safe help-seeking, not
                hiding problems.
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
                Who is a trusted adult?
              </h2>

              <p className="leading-relaxed text-slate-300">
                A trusted adult is a grown-up who helps keep students safe.
                Trusted adults can help students decide whether a website, game,
                message, popup, link, or online situation is safe. Students
                should never feel like they have to solve confusing online
                problems by themselves.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustedAdults.map((adult) => (
                <div
                  key={adult}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center font-semibold text-cyan-200"
                >
                  {adult}
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
                Warning Signs
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                When should students ask for help?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students should ask for help when something online feels strange
                or unsafe. These warning signs are examples of moments when it
                is smart to pause and talk to a trusted adult.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {warningSigns.map((sign) => (
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
                Safe and Unsafe Choices
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice choosing when to ask.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These are safe, fake examples. Students should use them to
                practice knowing when to pause, step away, and ask for help.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safeUnsafeExamples.map((example) => (
                <div
                  key={example.text}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
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

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Why is asking for help a strong choice?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Online problems can be confusing. A trusted adult may notice
                warning signs that a student does not see yet. Asking for help
                can protect private information, accounts, feelings, and safety.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What are three online situations where a student should ask a
                  trusted adult for help?
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What should the student do?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and think about the safest next step.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
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

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to the Module 1 review, students should be able to
                say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
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

        <section className="border-t border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue to the Module 1 review.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will review personal information, private
              information, safe usernames, and trusted adult safety habits.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/safe-usernames"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/online-safety-basics/review"
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