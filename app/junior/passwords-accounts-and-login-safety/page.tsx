import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "3.1",
    title: "Why Accounts Are Valuable",
    summary:
      "Learn why accounts matter and what can happen when an account is weak, shared, or not protected.",
    skill: "Understand account value",
    href: "/junior/passwords-accounts-and-login-safety/why-accounts-are-valuable",
  },
  {
    number: "3.2",
    title: "Password Strength and Passphrases",
    summary:
      "Learn how stronger passwords and passphrases protect accounts better than short, common, or easy-to-guess passwords.",
    skill: "Create stronger password habits",
    href: "/junior/passwords-accounts-and-login-safety/password-strength-and-passphrases",
  },
  {
    number: "3.3",
    title: "Password Reuse and Account Risk",
    summary:
      "Understand why using the same password on many accounts can create bigger problems if one account is exposed.",
    skill: "Avoid password reuse",
    href: "/junior/passwords-accounts-and-login-safety/password-reuse-and-account-risk",
  },
  {
    number: "3.4",
    title: "Multi-Factor Authentication and Login Codes",
    summary:
      "Learn how extra login steps, trusted devices, and login codes can help protect accounts.",
    skill: "Understand extra login protection",
    href: "/junior/passwords-accounts-and-login-safety/multi-factor-authentication-and-login-codes",
  },
  {
    number: "3.5",
    title: "Account Recovery and Security Alerts",
    summary:
      "Learn what to do when an account has a warning, login alert, password reset message, or recovery problem.",
    skill: "Respond safely to account alerts",
    href: "/junior/passwords-accounts-and-login-safety/account-recovery-and-security-alerts",
  },
  {
    number: "3.6",
    title: "Passwords, Accounts, and Login Safety Checkpoint",
    summary:
      "Review account value, password strength, password reuse, MFA, login codes, recovery, and security alerts.",
    skill: "Apply Module 3 decisions",
    href: "/junior/passwords-accounts-and-login-safety/review",
  },
];

const skillGoals = [
  "Explain why accounts are valuable",
  "Recognize weak password habits",
  "Understand why password reuse is risky",
  "Explain how passphrases can help",
  "Understand multi-factor authentication at a beginner level",
  "Know when to ask a trusted adult for account help",
];

const situations = [
  "A student uses the same password for games, email, and school tools",
  "A friend asks to borrow an account login",
  "A student receives a login code they did not request",
  "A password reset email appears unexpectedly",
  "An app says there was a login from a new device",
  "A student wants to make a password that is easy to remember but hard to guess",
];

const safetyRules = [
  "Use fake examples only.",
  "Do not type real passwords into the website.",
  "Do not share real login codes, backup codes, or recovery codes.",
  "Do not test real account recovery steps during lessons.",
  "Do not ask classmates for passwords or account access.",
  "Ask a trusted adult if an account warning, login alert, reset message, or suspicious request appears.",
];

export default function PasswordsAccountsAndLoginSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Passwords, Accounts, and Login Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This module helps middle school students understand why accounts are
          valuable, how stronger login habits protect digital life, and what to
          do when account warnings or suspicious login messages appear.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/why-accounts-are-valuable"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 3.1
          </Link>

          <Link
            href="/junior/privacy-and-personal-data/review"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Module
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Module Big Question
          </p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-100 mb-5">
              Why are accounts worth protecting even when they seem small?
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Students often think only bank accounts or adult accounts matter.
              But school accounts, game accounts, email accounts, cloud storage,
              social profiles, and learning tools can all hold personal
              information, messages, progress, photos, contacts, purchases, or
              access to other accounts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students should understand safer account
          and login habits.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGoals.map((goal) => (
            <div
              key={goal}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {goal}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Lessons in This Module
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 3 includes six lessons about account value, password habits,
            login protection, and account recovery.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-sm text-cyan-300 font-semibold">
                    Lesson {lesson.number}
                  </p>

                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">
                    Live
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {lesson.summary}
                </p>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Skill practiced
                  </p>

                  <p className="text-slate-200">{lesson.skill}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-World Situations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students will practice with fake account and login situations that
          feel realistic.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Safety Reminder
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Module 3 stays safe, defensive, and school-appropriate.
            </h2>

            <div className="space-y-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Module Completion Goal
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Students should leave Module 3 with stronger login judgment.
            </h2>

            <p className="text-slate-300 leading-relaxed mb-5">
              By the end of this module, students should be able to explain why
              accounts matter, choose safer password habits, avoid password
              reuse, understand extra login protection, and respond carefully to
              account warnings or reset messages.
            </p>

            <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
              <h3 className="font-bold text-emerald-200 mb-2">
                Junior Skill Badge
              </h3>

              <p className="text-slate-200 leading-relaxed">
                Login Safety Protector
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to begin Module 3?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Start with Lesson 3.1 to learn why accounts are valuable and why
            login safety matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/why-accounts-are-valuable"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 3.1
            </Link>

            <Link
              href="/junior/privacy-and-personal-data/review"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Module
            </Link>

            <Link
              href="/junior"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Junior Track
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}