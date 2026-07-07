import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const helpSituations = [
  "You forget a password.",
  "You get locked out of an account.",
  "A sign-in page looks strange or different.",
  "Someone asks for your password.",
  "You see changes in your account that you did not make.",
  "You are not sure if a website, app, or game login is safe.",
];

const trustedHelpers = [
  "Parent or guardian",
  "Teacher",
  "School counselor",
  "School technology staff member",
  "Librarian",
  "Another trusted adult chosen by your family or school",
];

const vocabulary = [
  {
    term: "Account help",
    meaning:
      "Getting support from a trusted adult when something about an account, password, or sign-in page is confusing or unsafe.",
  },
  {
    term: "Locked out",
    meaning:
      "When someone cannot get into an account because the password is forgotten, changed, or not working.",
  },
  {
    term: "Sign-in page",
    meaning:
      "A page where someone enters account information to open a website, app, game, or school tool.",
  },
  {
    term: "Trusted helper",
    meaning:
      "A safe adult who can help with account problems, such as a parent, teacher, guardian, or school technology staff member.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student forgets a school password and asks a teacher or school technology staff member for help.",
  },
  {
    label: "Unsafe example",
    text: "A student guesses many passwords and then asks a friend to share their account instead.",
  },
  {
    label: "Safer example",
    text: "A student sees a strange sign-in page and asks a parent before typing anything.",
  },
];

const realLifeSteps = [
  "Pause if you cannot sign in or if something looks strange.",
  "Do not keep guessing passwords again and again.",
  "Do not ask friends for their passwords or accounts.",
  "Do not type your password into a website, popup, or message that feels suspicious.",
  "Ask a trusted adult, teacher, guardian, or school technology staff member for help.",
  "Tell a trusted adult if you think someone else knows your password.",
];

const practiceQuestions = [
  {
    question: "You forget your school password. What should you do?",
    answer:
      "Ask a teacher or school technology staff member for help instead of guessing many times or asking a friend for their account.",
  },
  {
    question:
      "A sign-in page looks different than usual and asks for your password. What should you do?",
    answer:
      "Pause and ask a trusted adult before typing anything. It is smart to check first.",
  },
  {
    question:
      "You think someone else may have used your account. What should you do?",
    answer:
      "Tell a parent, teacher, guardian, or school technology staff member so they can help protect the account.",
  },
  {
    question:
      "A friend says, 'Just use my account instead.' Is that a safe solution?",
    answer:
      "No. Students should not use another person's account. They should ask a trusted adult for help with their own account.",
  },
];

const reviewChecklist = [
  "I can name account problems that need trusted adult help.",
  "I know not to keep guessing passwords again and again.",
  "I know not to use another person's account.",
  "I can pause before typing a password into a strange sign-in page.",
  "I can ask a teacher, parent, guardian, or school technology staff member for help.",
  "I know CyberShield practice should never ask for real passwords.",
];

export default function KidsAskingForAccountHelpPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2 • Lesson 2.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Asking for Account Help
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn what to do when they forget a
              password, get locked out, see a strange sign-in page, or think
              someone else may know their password. Account problems should be
              handled with help from a trusted adult.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/why-passwords-stay-secret"
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
                href="/kids/passwords-and-accounts/safe-account-habits"
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
                  "Recognize when an account problem needs help.",
                  "Know who to ask for password or account support.",
                  "Avoid unsafe choices like sharing accounts or guessing passwords many times.",
                  "Pause before typing passwords into strange sign-in pages.",
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
                Do not solve account problems alone.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not type real passwords into CyberShield, share
                passwords with friends, use someone else's account, or hide
                account problems. Asking for help is the safe choice.
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
                Account problems need trusted help.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Sometimes students forget passwords, get locked out, or see
                sign-in pages that look strange. When that happens, the safest
                choice is not to panic, guess many times, use a friend's account,
                or type passwords into random places. The safest choice is to
                pause and ask a trusted adult for help.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {helpSituations.map((situation) => (
                <div
                  key={situation}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300"
                >
                  {situation}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Trusted Helpers
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who can help with account problems?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students should ask a safe adult who is allowed to help with
                school, family, or device accounts.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustedHelpers.map((helper) => (
                <div
                  key={helper}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-center font-semibold text-emerald-100"
                >
                  {helper}
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
                Words to know
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
                Practice choosing a safe next step.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                not use real account information in practice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => (
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
                Why is asking for help better than guessing?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Guessing passwords many times can make an account problem worse.
                Using someone else's account can also cause problems. A trusted
                adult can help students use the correct safe steps for school,
                family, or device accounts.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Who would you ask for help if you forgot a school password?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-and-ask habit.
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
                What is the safest next step?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and choose the safest response.
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
                Before moving to Lesson 2.4, students should be able to say:
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
              Continue the Passwords and Accounts module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn safe account habits like signing out,
              protecting devices, and asking before saving passwords.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/why-passwords-stay-secret"
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
                href="/kids/passwords-and-accounts/safe-account-habits"
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