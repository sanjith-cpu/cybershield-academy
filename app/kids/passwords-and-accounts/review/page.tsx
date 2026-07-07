import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonsReviewed = [
  {
    number: "2.1",
    title: "What Passwords Protect",
    text: "Students learned that passwords help protect accounts, school work, games, devices, messages, settings, and personal information.",
  },
  {
    number: "2.2",
    title: "Why Passwords Stay Secret",
    text: "Students learned that passwords should not be shared with friends, strangers, online players, popups, or people in messages.",
  },
  {
    number: "2.3",
    title: "Asking for Account Help",
    text: "Students learned to ask a parent, guardian, teacher, counselor, or school technology staff member when account problems happen.",
  },
  {
    number: "2.4",
    title: "Safe Account Habits",
    text: "Students learned simple habits like signing out of shared devices, avoiding saved passwords on shared devices, and asking before creating accounts.",
  },
];

const vocabularyReview = [
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
    term: "Sign out",
    meaning:
      "To close your account session so the next person using the device cannot open your account.",
  },
  {
    term: "Shared device",
    meaning:
      "A device used by more than one person, such as a classroom computer, library computer, family tablet, or school Chromebook.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A safe adult who can help with account problems, such as a parent, guardian, teacher, counselor, or school technology staff member.",
  },
];

const reviewQuestions = [
  {
    question: "Why is a password like a key?",
    answer:
      "A password is like a key because it helps open and protect an account. Students should not give that key to other people.",
  },
  {
    question:
      "A friend asks for your password so they can help you in a game. What should you do?",
    answer:
      "Do not share the password. Passwords are private, even with friends.",
  },
  {
    question:
      "You forget your school password. Should you keep guessing or ask for help?",
    answer:
      "Ask a teacher, parent, guardian, or school technology staff member for help.",
  },
  {
    question:
      "A shared library computer asks if it should save your password. What should you do?",
    answer:
      "Do not save the password. Ask a trusted adult because shared devices should not remember private passwords.",
  },
];

const safeOrUnsafe = [
  {
    situation:
      "A student signs out of a classroom computer before leaving.",
    answer: "Safer choice",
    reason:
      "Signing out can help stop the next person from opening the account.",
  },
  {
    situation:
      "A student gives their account password to a friend who promises to help.",
    answer: "Unsafe choice",
    reason:
      "Passwords should stay private, even when someone says they want to help.",
  },
  {
    situation:
      "A student sees a strange sign-in page and asks a parent before typing anything.",
    answer: "Safer choice",
    reason:
      "Asking a trusted adult before typing a password into a strange page is a smart safety habit.",
  },
  {
    situation:
      "A student uses another student's account because they forgot their own password.",
    answer: "Unsafe choice",
    reason:
      "Students should not use someone else's account. They should ask a trusted adult for help.",
  },
];

const finalChecklist = [
  "I can explain what passwords help protect.",
  "I know passwords should stay secret.",
  "I know not to share passwords with friends, strangers, online players, or people in messages.",
  "I can ask a trusted adult if I forget a password or get locked out.",
  "I can pause before typing a password into a strange sign-in page.",
  "I know not to save passwords on shared devices without trusted adult help.",
  "I can sign out of shared devices when I am finished.",
  "I understand that CyberShield should never ask for real passwords.",
];

const accountSafetyRules = [
  "Keep passwords private.",
  "Use fake examples only during practice.",
  "Ask before creating new accounts.",
  "Ask for help when locked out.",
  "Do not use someone else's account.",
  "Sign out of shared devices.",
];

export default function KidsPasswordsAndAccountsReviewPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2 • Lesson 2.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Passwords and Accounts Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This review helps students practice the biggest ideas from Module
              2: what passwords protect, why passwords stay secret, how to ask
              for account help, and how to build safe account habits.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/safe-account-habits"
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
                Review Goal
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this review, students should be able to:
              </h2>

              <div className="space-y-3">
                {[
                  "Explain why passwords protect accounts.",
                  "Recognize unsafe password requests.",
                  "Ask trusted adults for account help.",
                  "Use safe account habits on shared devices.",
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
                This review should never use real passwords.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not type real passwords, real usernames, real
                emails, real school accounts, or real account details into
                CyberShield activities. If there is a real account problem,
                students should ask a trusted adult for help.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Lessons Reviewed
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Module 2 covered
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 2 helped students understand that passwords and accounts
                need protection, and that account problems should be handled
                safely with trusted adult support.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {lessonsReviewed.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    Lesson {lesson.number}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {lesson.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {lesson.text}
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
                Vocabulary Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Important words from Module 2
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabularyReview.map((word) => (
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
                Review Questions
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Choose the safer answer
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students can answer these questions out loud, in a notebook, or
                during a classroom discussion.
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
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe or Unsafe Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice spotting safer account choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and classroom safe. Students should use
                them to practice password and account safety.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {safeOrUnsafe.map((item) => (
                <div
                  key={item.situation}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-4 text-2xl font-bold">
                    {item.situation}
                  </h3>

                  <p className="mb-3 font-semibold text-cyan-300">
                    Answer: {item.answer}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                Real-Life Safety Habit
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Remember: protect, pause, ask.
              </h2>

              <div className="space-y-3">
                {[
                  "Protect passwords by keeping them private.",
                  "Pause before typing passwords into strange pages, popups, or messages.",
                  "Ask a trusted adult when an account problem feels confusing, strange, or unsafe.",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Module 2 Rules
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Account safety reminders
              </h2>

              <div className="grid gap-3">
                {accountSafetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Students are ready to finish Module 2 when they can say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {finalChecklist.map((item) => (
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
              Module Complete
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              You finished Kids Module 2.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              The next future Kids module will focus on scam spotting. For now,
              students can return to the Kids track, review Module 2, or
              practice more activities.
            </p>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-6 text-left">
              <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                Password Safety Pledge
              </h3>

              <p className="leading-relaxed text-slate-300">
                I will keep passwords private, protect my accounts, sign out of
                shared devices when needed, ask before saving passwords, and
                tell a trusted adult when an account problem feels strange or
                unsafe.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/safe-account-habits"
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
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Practice Activities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}