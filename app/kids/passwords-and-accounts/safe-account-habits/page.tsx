import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const accountHabits = [
  "Sign out of shared devices when a trusted adult says to.",
  "Do not save passwords on shared school, library, or public devices.",
  "Ask before creating a new account.",
  "Use trusted websites, apps, and school tools.",
  "Tell a trusted adult if an account looks different or strange.",
  "Do not let friends use your account.",
];

const vocabulary = [
  {
    term: "Shared device",
    meaning:
      "A device used by more than one person, such as a classroom computer, library computer, family tablet, or school Chromebook.",
  },
  {
    term: "Sign out",
    meaning:
      "To close your account session so the next person using the device cannot open your account.",
  },
  {
    term: "Saved password",
    meaning:
      "A password that a browser, app, or device remembers. Students should ask a trusted adult before saving passwords.",
  },
  {
    term: "Account habit",
    meaning:
      "A repeated safety action that helps protect accounts, devices, and private information.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student finishes using a classroom computer and signs out of the school account before leaving.",
  },
  {
    label: "Unsafe example",
    text: "A student stays signed in on a shared library computer and walks away.",
  },
  {
    label: "Safer example",
    text: "A student asks a parent or teacher before letting a website save a password.",
  },
];

const realLifeSteps = [
  "Ask a trusted adult before creating a new account.",
  "Use school tools, apps, and websites that a teacher or trusted adult approves.",
  "Sign out of shared devices when you are finished.",
  "Do not save passwords on shared computers unless a trusted adult says it is okay.",
  "Do not let friends use your account, even if they say they only want to help.",
  "Tell a trusted adult if your account looks different, strange, or changed.",
];

const practiceQuestions = [
  {
    question:
      "You finish using a shared classroom computer. What should you do before leaving?",
    answer:
      "Sign out of your account if your teacher or school rules say to. This helps stop the next person from opening your account.",
  },
  {
    question:
      "A website asks if it should save your password on a library computer. What should you do?",
    answer:
      "Do not save the password. Ask a trusted adult because shared devices should not remember private passwords.",
  },
  {
    question:
      "A friend wants to use your school account because they forgot theirs. What should you do?",
    answer:
      "Do not share your account. Tell the friend to ask a teacher or school technology staff member for help.",
  },
  {
    question:
      "You open an account and notice settings or messages you did not change. What should you do?",
    answer:
      "Pause and tell a trusted adult. Strange account changes can mean the account needs help.",
  },
];

const reviewChecklist = [
  "I can explain why signing out of shared devices matters.",
  "I know not to save passwords on shared devices without trusted adult help.",
  "I know to ask before creating a new account.",
  "I know not to let friends use my account.",
  "I can tell a trusted adult if an account looks strange or changed.",
  "I understand that CyberShield should never ask for real passwords.",
];

export default function KidsSafeAccountHabitsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2 • Lesson 2.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Safe Account Habits
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn simple account safety habits like
              signing out of shared devices, asking before saving passwords,
              using trusted websites, and telling a trusted adult when an
              account looks strange.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/asking-for-account-help"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/passwords-and-accounts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 2
              </Link>

              <Link
                href="/kids/passwords-and-accounts/review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Module Review
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
                  "Explain why shared devices need extra care.",
                  "Understand why signing out can protect accounts.",
                  "Know why passwords should not be saved on shared devices without adult help.",
                  "Ask a trusted adult when an account looks strange or changed.",
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
                Safe habits protect real accounts.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield should never ask students to enter real passwords,
                real usernames, real emails, or real account details. Students
                should ask a trusted adult before saving passwords, creating new
                accounts, or changing account settings.
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
                Account safety is a habit.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Safe account habits are small actions that help protect accounts
                every time students use technology. Students may use shared
                devices at school, home, or the library. If they stay signed in,
                save passwords, or let someone else use their account, private
                information and school work may be easier for others to access.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {accountHabits.map((habit) => (
                <div
                  key={habit}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300"
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
                Practice safer account choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                use them to practice safe habits for shared devices and
                accounts.
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
                Why are shared devices different?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                A shared device may be used by many people. If a student stays
                signed in or saves a password on a shared device, the next
                person might accidentally or intentionally open the account.
                That is why shared devices need extra care.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What could happen if you walk away from a shared device while
                  still signed in?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the sign-out-and-check habit.
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
                What is the safer account habit?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and choose the safest response. These
                examples do not use real passwords or real account details.
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
                Before moving to the Module 2 review, students should be able to
                say:
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
              Continue to the Module 2 review.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will review what passwords protect, why passwords
              stay secret, how to ask for account help, and safe account habits.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/asking-for-account-help"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/passwords-and-accounts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/passwords-and-accounts/review"
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