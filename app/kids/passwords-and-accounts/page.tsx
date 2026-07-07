import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "2.1",
    title: "What Passwords Protect",
    href: "/kids/passwords-and-accounts/what-passwords-protect",
    status: "Live",
    description:
      "Learn that passwords help protect games, school tools, learning accounts, videos, devices, and personal settings.",
    learn: [
      "What a password does",
      "Why accounts need protection",
      "Why students should not treat passwords like toys or jokes",
    ],
  },
  {
    number: "2.2",
    title: "Why Passwords Stay Secret",
    href: "/kids/passwords-and-accounts/why-passwords-stay-secret",
    status: "Live",
    description:
      "Learn why passwords should not be shared with friends, strangers, online players, or people in messages.",
    learn: [
      "Why passwords are private",
      "Why sharing passwords can cause problems",
      "How to say no if someone asks for a password",
    ],
  },
  {
    number: "2.3",
    title: "Asking for Account Help",
    href: "/kids/passwords-and-accounts/asking-for-account-help",
    status: "Live",
    description:
      "Learn how to ask a parent, teacher, guardian, or school technology staff member for help with accounts.",
    learn: [
      "Who can help with account problems",
      "What to do if you forget a password",
      "Why students should not guess, panic, or hide account problems",
    ],
  },
  {
    number: "2.4",
    title: "Safe Account Habits",
    href: "/kids/passwords-and-accounts/safe-account-habits",
    status: "Live",
    description:
      "Learn simple habits like signing out, locking devices, using trusted websites, and checking before saving passwords.",
    learn: [
      "Why signing out matters",
      "Why devices should be protected",
      "Why students should ask before saving passwords",
    ],
  },
  {
    number: "2.5",
    title: "Module Review",
    href: "/kids/passwords-and-accounts/review",
    status: "Live",
    description:
      "Review password safety, account safety, trusted adult help, and safer choices for common account situations.",
    learn: [
      "How to protect passwords",
      "How to respond to password requests",
      "How to ask for help with account problems",
    ],
  },
];

const keyIdeas = [
  {
    title: "Passwords are like keys",
    text: "A password is like a key to an account. Students should not give that key to other people.",
  },
  {
    title: "Accounts hold important things",
    text: "Accounts can hold school work, messages, game progress, videos, settings, and personal information.",
  },
  {
    title: "Friends should not ask for passwords",
    text: "Even if someone is a friend, passwords should stay private unless a trusted adult is helping.",
  },
  {
    title: "Ask for help early",
    text: "If a student forgets a password, sees a strange login page, or thinks someone knows their password, they should ask a trusted adult.",
  },
];

const accountExamples = [
  {
    label: "Safer choice",
    example:
      "A student forgets a school password and asks a teacher or school technology staff member for help.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student gives their game password to a friend who promises to win more points for them.",
  },
  {
    label: "Safer choice",
    example:
      "A student signs out of a school account before returning a shared classroom device.",
  },
];

const safetyRules = [
  "Do not share passwords with friends, strangers, online players, or people in messages.",
  "Do not type real passwords into practice activities, games, popups, or random websites.",
  "Ask a trusted adult before creating a new account.",
  "Ask a trusted adult if you forget a password or think someone else knows it.",
  "Sign out of accounts on shared school, library, or family devices when a trusted adult says to.",
  "Use fake examples only when learning about passwords.",
];

export default function KidsPasswordsAndAccountsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Passwords and Accounts
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This module teaches elementary students that passwords protect
              accounts, accounts can hold important information, and password
              problems should be handled with help from a trusted adult.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/what-passwords-protect"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 2.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 1
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Module Lessons
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What students will complete
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 2 is the next Kids learning unit. Each lesson will become
                its own page, just like Module 1. The goal is to help students
                build safe password and account habits without asking them to
                enter real passwords.
              </p>
            </div>

            <div className="space-y-6">
              {moduleLessons.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                          Lesson {lesson.number}
                        </span>

                        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-300">
                          {lesson.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        {lesson.title}
                      </h3>

                      <p className="max-w-3xl leading-relaxed text-slate-300">
                        {lesson.description}
                      </p>
                    </div>

                    <Link
                      href={lesson.href}
                      className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Open Lesson
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {lesson.learn.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">Big Ideas</p>

              <h2 className="mb-6 text-3xl font-bold">
                What students should remember
              </h2>

              <div className="space-y-4">
                {keyIdeas.map((idea) => (
                  <div
                    key={idea.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="mb-2 text-xl font-bold text-cyan-200">
                      {idea.title}
                    </h3>

                    <p className="leading-relaxed text-slate-300">
                      {idea.text}
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
                Never enter real passwords here.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                CyberShield Kids should never ask students to type real
                passwords, real account names, real email addresses, or real
                private details. Password examples should be fake, simple, and
                used only for learning.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If a student forgets a password, sees a strange sign-in page,
                  gets locked out, or thinks someone else knows their password,
                  they should ask a parent, teacher, guardian, counselor, or
                  school technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Practice Preview
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safer and unsafe account choices
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples help students practice password and account
                safety without using real account information.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {accountExamples.map((item) => (
                <div
                  key={item.example}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    {item.label}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Password and Account Safety Rules
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Rules for this module
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {safetyRules.map((rule) => (
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

        <section className="border-t border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Build Step
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Next, build Lesson 2.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/passwords-and-accounts/what-passwords-protect
              </span>
              . That page will become the first individual lesson in Kids Module
              2.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/passwords-and-accounts/what-passwords-protect"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 2.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Continue Learning
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ready for Module 3?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After finishing Passwords and Accounts, students can continue to
              Scam Spotting to learn how to notice strange messages, fake
              offers, and unsafe clicking.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/passwords-and-accounts/review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 2
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Module →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}