import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  "Passwords let people open accounts.",
  "Someone with your password could change settings.",
  "Someone with your password could pretend to be you.",
  "Someone with your password could see information they should not see.",
  "Someone with your password could cause problems in your account.",
  "Passwords are private, even from friends.",
];

const vocabulary = [
  {
    term: "Secret",
    meaning:
      "Something that should not be shared with other people unless a trusted adult says it is safe.",
  },
  {
    term: "Password sharing",
    meaning:
      "Giving another person your password. This can be unsafe because they may use your account.",
  },
  {
    term: "Pretend to be you",
    meaning:
      "When someone uses your account or name in a way that makes others think they are you.",
  },
  {
    term: "Account problem",
    meaning:
      "Something wrong with an account, such as being locked out, seeing strange changes, or thinking someone else knows the password.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student says, 'I cannot share my password. I can ask a trusted adult if I need help.'",
  },
  {
    label: "Unsafe example",
    text: "A student gives a friend their game password so the friend can play on the account.",
  },
  {
    label: "Safer example",
    text: "A student tells a teacher when someone keeps asking for their school password.",
  },
];

const realLifeSteps = [
  "Do not share passwords with friends, strangers, online players, or people in messages.",
  "Do not type passwords into random websites, popups, chats, or practice activities.",
  "Say no if someone asks for your password.",
  "Ask a trusted adult if someone keeps asking for your password.",
  "Ask for help if you think someone else knows your password.",
];

const practiceQuestions = [
  {
    question:
      "A friend asks for your game password so they can help you win. What should you do?",
    answer:
      "Do not share the password. Passwords are private, even when someone is a friend.",
  },
  {
    question:
      "Someone online says they need your password to give you a free prize. What should you do?",
    answer:
      "Do not share it. Free prize messages can be warning signs. Ask a trusted adult for help.",
  },
  {
    question:
      "You think someone else may know your school password. What should you do?",
    answer:
      "Tell a teacher, parent, guardian, or school technology staff member so they can help.",
  },
  {
    question:
      "Should CyberShield ask you to type your real password during practice?",
    answer:
      "No. CyberShield should use fake examples only and should never ask for real passwords.",
  },
];

const reviewChecklist = [
  "I can explain why passwords should stay secret.",
  "I know not to share passwords with friends, strangers, or online players.",
  "I can say no if someone asks for my password.",
  "I can ask a trusted adult if someone keeps asking for my password.",
  "I know to get help if I think someone else knows my password.",
  "I understand that practice activities should never ask for real passwords.",
];

export default function KidsWhyPasswordsStaySecretPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2 • Lesson 2.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Why Passwords Stay Secret
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn why passwords should not be shared
              with friends, strangers, online players, popups, or people in
              messages. Passwords protect accounts, so students should keep them
              private and ask a trusted adult for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/what-passwords-protect"
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
                href="/kids/passwords-and-accounts/asking-for-account-help"
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
                  "Explain why passwords should stay secret.",
                  "Understand that friends should not ask for passwords.",
                  "Recognize unsafe password requests.",
                  "Ask a trusted adult if someone asks for a password.",
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
                Never share or type real passwords here.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                This lesson should use fake examples only. Students should never
                type real passwords, real usernames, real emails, or real
                account details into CyberShield activities.
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
                A password is private.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A password is like a key to an account. If another person gets
                the password, they may be able to open the account, change
                things, see information, or pretend to be the account owner.
                That is why passwords should stay secret. Students should not
                share passwords with friends, strangers, online players, or
                people in messages.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300"
                >
                  {reason}
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
                Practice password safety choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                use them to practice what to do when someone asks for a
                password.
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
                Why can password sharing cause problems?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Even if someone says they only want to help, sharing a password
                can lead to account changes, lost progress, confusing messages,
                or someone pretending to be the student. A password should stay
                private unless a trusted adult is helping.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What could happen if someone else uses your account without
                  permission?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the keep-it-secret habit.
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
                What should you do?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and think about the safest answer. These
                practice questions do not use real passwords.
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
                Before moving to Lesson 2.3, students should be able to say:
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
              Next, students will learn how to ask trusted adults for help when
              they forget a password, get locked out, or see something strange
              with an account.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/what-passwords-protect"
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
                href="/kids/passwords-and-accounts/asking-for-account-help"
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