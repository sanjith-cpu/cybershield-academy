import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatYouWillLearn = [
  "Review all five main Kids modules.",
  "Connect online safety, passwords, scams, kindness, and digital footprints.",
  "Practice choosing safe actions in everyday online situations.",
  "Prepare for the final Kids Track completion lesson.",
];

const modulesReviewed = [
  {
    module: "Module 1",
    title: "Online Safety Basics",
    summary:
      "Students learned about personal information, private information, safe usernames, and trusted adults.",
  },
  {
    module: "Module 2",
    title: "Passwords and Accounts",
    summary:
      "Students learned what passwords protect, why passwords stay secret, how to ask for account help, and safe account habits.",
  },
  {
    module: "Module 3",
    title: "Scam Spotting",
    summary:
      "Students learned what scams are, how to notice too-good-to-be-true offers, strange messages, and why they should pause before clicking.",
  },
  {
    module: "Module 4",
    title: "Kind and Safe Technology Use",
    summary:
      "Students learned how to use kind words online, make safe choices in group chats and games, respond to meanness, and be digital helpers.",
  },
  {
    module: "Module 5",
    title: "Digital Footprints",
    summary:
      "Students learned what digital footprints are, why to think before sharing, how photos and screenshots can spread, and how to ask for help.",
  },
];

const vocabulary = [
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as passwords, addresses, phone numbers, locations, school names, and private family details.",
  },
  {
    term: "Password",
    meaning:
      "A secret key that helps protect an account. Students should never type real passwords in practice activities.",
  },
  {
    term: "Scam",
    meaning:
      "A trick that tries to make someone click, share information, send something, or believe something fake.",
  },
  {
    term: "Digital footprint",
    meaning:
      "The trail of information connected to what someone does online, such as posts, comments, photos, usernames, and screenshots.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A safe grown-up who can help, such as a parent, guardian, teacher, counselor, coach, librarian, or school technology staff member.",
  },
];

const reviewHabits = [
  "Pause before clicking, posting, replying, downloading, or sharing.",
  "Keep passwords and private information secret.",
  "Use fake examples only in classroom practice.",
  "Ask permission before sharing photos or information about others.",
  "Use kind words in chats, games, comments, posts, and messages.",
  "Ask a trusted adult when something feels unsafe, confusing, embarrassing, secret, scary, or urgent.",
];

const examples = [
  {
    label: "Safer choice",
    text: "A student gets a strange message about a prize and asks a trusted adult before clicking.",
  },
  {
    label: "Unsafe choice",
    text: "A student types a real password into a practice activity.",
  },
  {
    label: "Safer choice",
    text: "A student asks permission before sharing a photo that includes other people.",
  },
  {
    label: "Unsafe choice",
    text: "A student spreads a screenshot because other people are sharing it too.",
  },
  {
    label: "Safer choice",
    text: "A student sees mean words in a group chat and chooses not to add another mean reply.",
  },
  {
    label: "Unsafe choice",
    text: "A student keeps a scary online message secret because the message told them not to tell anyone.",
  },
];

const finalReviewQuestions = [
  {
    question:
      "A student sees a message that says they won a prize and must click right now. What should they do?",
    answer:
      "They should pause and ask a trusted adult before clicking. Urgent prize messages can be unsafe or fake.",
  },
  {
    question:
      "A lesson asks students to practice making passwords. Should a student use a real password?",
    answer:
      "No. Students should use fake practice examples only and never type real passwords into class activities.",
  },
  {
    question:
      "A student wants to share a photo with other people in it. What should they do first?",
    answer:
      "They should ask permission before sharing the photo and ask a trusted adult if they are unsure.",
  },
  {
    question:
      "A group chat becomes mean. What is the safer choice?",
    answer:
      "The student should avoid adding mean words, pause, and ask a trusted adult for help if the chat feels hurtful or unsafe.",
  },
  {
    question:
      "A student accidentally shares private information. What should they do?",
    answer:
      "They should stay calm, pause, and ask a trusted adult for help instead of trying to fix it alone.",
  },
];

const realLifeSteps = [
  "Pause when something feels strange, urgent, secret, scary, or too good to be true.",
  "Check whether private information is being shown or requested.",
  "Think about whether the choice is kind, respectful, and safe.",
  "Ask permission before posting or sharing about someone else.",
  "Do not spread screenshots, private messages, or hurtful content.",
  "Ask a trusted adult when help is needed.",
];

const reviewChecklist = [
  "I can explain why private information should stay private.",
  "I know not to type real passwords in practice activities.",
  "I can pause before clicking strange links or messages.",
  "I can spot warning signs like urgency, secrecy, and too-good-to-be-true offers.",
  "I can use kind words online.",
  "I can ask permission before sharing photos or information about others.",
  "I understand that screenshots and posts can become part of a digital footprint.",
  "I know to ask a trusted adult when something feels unsafe, confusing, scary, embarrassing, secret, or urgent.",
];

export default function KidsFinalReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6 • Lesson 6.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              CyberShield Kids Final Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students review the biggest safety ideas from the
              full CyberShield Kids Track. This final review connects online
              safety basics, passwords, scam spotting, kind technology use, and
              digital footprints.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safe-choices-scenarios"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids/cyber-safety-review/completion"
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
                {whatYouWillLearn.map((item) => (
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
                Final review still uses fake examples only.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not use real passwords, real private
                information, real screenshots, real messages, real names, real
                school details, real account information, or real online
                conflicts in practice activities. If something online feels
                unsafe, confusing, scary, embarrassing, secret, or urgent,
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
                Cyber safety means using safe habits together.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Each Kids module taught one part of cyber safety. Together,
                these lessons help students make safer online choices. Students
                can protect private information, keep passwords secret, pause
                before clicking, spot suspicious messages, use kind words, think
                before sharing, and ask trusted adults for help.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviewHabits.map((habit) => (
                <div
                  key={habit}
                  className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-slate-200"
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
                Modules Reviewed
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Review the full Kids Track.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These five modules helped build the CyberShield Kids safety
                foundation.
              </p>
            </div>

            <div className="space-y-6">
              {modulesReviewed.map((module) => (
                <div
                  key={module.module}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 font-semibold text-cyan-300">
                    {module.module}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {module.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {module.summary}
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
                Key Vocabulary
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Final words to remember
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabulary.map((word) => (
                <div
                  key={word.term}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Final choice check
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice spotting which choices protect privacy, kindness, and
                safety.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((example) => (
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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Which safety habit matters most?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Different online situations need different safety habits.
                Sometimes the most important habit is pausing. Sometimes it is
                protecting private information. Sometimes it is asking a trusted
                adult. The strongest cyber safety skill is knowing when to slow
                down and get help.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one CyberShield Kids safety habit you could use almost
                  every day?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the final safety check.
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
                Final review questions
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each fake practice question and review the safer answer.
              </p>
            </div>

            <div className="space-y-6">
              {finalReviewQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Review Question {index + 1}
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
                Before moving to Lesson 6.5, students should be able to say:
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

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue to Kids Track Completion.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will finish the CyberShield Kids Track and review
              their final safety promise.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safe-choices-scenarios"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids/cyber-safety-review/completion"
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