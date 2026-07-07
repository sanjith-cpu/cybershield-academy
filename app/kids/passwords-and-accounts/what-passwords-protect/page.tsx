import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const protectedThings = [
  "School accounts",
  "Learning apps",
  "Game accounts",
  "Video accounts",
  "Device settings",
  "Messages",
  "Saved work",
  "Personal settings",
];

const vocabulary = [
  {
    term: "Password",
    meaning:
      "A secret word, phrase, or set of characters that helps protect an account.",
  },
  {
    term: "Account",
    meaning:
      "A place online where a person signs in to use a website, app, game, school tool, or device.",
  },
  {
    term: "Sign in",
    meaning:
      "To enter the correct account information so a website, app, or device knows who is using it.",
  },
  {
    term: "Protect",
    meaning:
      "To keep something safer from people who should not be able to see, change, or use it.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student uses a school account with help from a teacher and keeps the password private.",
  },
  {
    label: "Unsafe example",
    text: "A student tells another player their game password so the player can use the account.",
  },
  {
    label: "Safer example",
    text: "A student forgets a password and asks a trusted adult for help instead of guessing or sharing it.",
  },
];

const realLifeSteps = [
  "Remember that passwords are like keys for accounts.",
  "Do not share passwords with friends, strangers, online players, or people in messages.",
  "Ask a trusted adult if you forget a password or cannot sign in.",
  "Do not type real passwords into random websites, popups, games, or practice activities.",
  "Tell a trusted adult if someone asks for your password.",
];

const practiceQuestions = [
  {
    question: "What does a password help protect?",
    answer:
      "A password can help protect an account, such as a school account, game account, learning app, or device setting.",
  },
  {
    question:
      "A friend asks for your game password so they can help you win. What should you do?",
    answer:
      "Do not share the password. Passwords are private, even with friends.",
  },
  {
    question:
      "You forget a school password. Should you guess many times or ask for help?",
    answer:
      "Ask a trusted adult, teacher, or school technology staff member for help.",
  },
  {
    question:
      "Should CyberShield ask you to type your real password into a practice activity?",
    answer:
      "No. CyberShield activities should use fake examples only and should never ask for real passwords.",
  },
];

const reviewChecklist = [
  "I can explain what a password does.",
  "I can name things passwords help protect.",
  "I understand that passwords are like keys for accounts.",
  "I know not to share passwords with friends, strangers, or online players.",
  "I know to ask a trusted adult if I forget a password or see something strange.",
  "I understand that practice activities should never use real passwords.",
];

export default function KidsWhatPasswordsProtectPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2 • Lesson 2.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              What Passwords Protect
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn that passwords help protect
              accounts, school work, games, devices, messages, and personal
              settings. A password is like a key, so students should keep it
              private and ask a trusted adult for help when needed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 2
              </Link>

              <Link
                href="/kids/passwords-and-accounts/why-passwords-stay-secret"
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
                  "Explain what a password helps protect.",
                  "Name examples of accounts that may use passwords.",
                  "Understand that passwords are private.",
                  "Ask a trusted adult for help with password problems.",
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
                Never type real passwords here.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                This lesson should never ask students to enter real passwords,
                real usernames, real emails, or real account details. Use fake
                examples only. If students have a real account problem, they
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
                Passwords are like keys.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A password helps protect an account. An account might be used
                for school, games, videos, learning apps, messages, or devices.
                If someone else knows a password, they might be able to open the
                account, change things, see information, or pretend to be the
                student. That is why passwords should stay private.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {protectedThings.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center font-semibold text-cyan-200"
                >
                  {item}
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
                Practice thinking about account safety.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                never use real passwords in CyberShield practice activities.
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
                Why do accounts need protection?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Accounts can hold things that matter. A school account might
                hold assignments. A game account might hold progress. A device
                account might hold settings. If someone else uses an account
                without permission, they could change things or cause problems.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Why is a password like a key for an account?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the protect-the-key habit.
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
                What do passwords protect?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each question and think about the safest answer. These
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
                Before moving to Lesson 2.2, students should be able to say:
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
              Continue the Passwords and Accounts module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn why passwords should stay secret and why
              password sharing can create account problems.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts"
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
                href="/kids/passwords-and-accounts/why-passwords-stay-secret"
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