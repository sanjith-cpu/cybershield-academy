import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PasswordSafetyLessonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            CyberShield Lesson
          </p>

          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Password Safety
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Passwords protect your school accounts, games, email, apps, and
              personal information. This lesson teaches how to create stronger
              passwords, avoid password reuse, understand MFA, and practice
              safely using fake examples only.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/password-lab"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Try Password Lab
              </Link>

              <Link
                href="/lessons"
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Back to Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-300">Learning Goals</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Understand why passwords matter.</li>
              <li>Learn why longer passwords are usually stronger.</li>
              <li>Explain why password reuse is risky.</li>
              <li>Understand MFA and password managers safely.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-300">Key Skill</h2>
            <p className="mt-4 text-slate-300">
              Creating strong, memorable passphrases without using private
              information like your name, birthday, school, address, or team.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-300">Safety Rule</h2>
            <p className="mt-4 text-slate-300">
              Never type a real password into a practice website, worksheet, or
              classroom activity. Use fake examples only.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Why Passwords Matter</h2>
            <p className="mt-4 leading-8 text-slate-300">
              A password is like a lock for your digital accounts. If someone
              guesses or steals it, they may be able to read private messages,
              change account settings, pretend to be you, or access information
              you did not want to share.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Good password habits reduce the chance of account problems. They
              are one of the simplest ways students can protect themselves
              online.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Length and Passphrases</h2>
            <p className="mt-4 leading-8 text-slate-300">
              A passphrase is a longer password made from multiple words or a
              memorable sentence. Longer passwords are often harder to guess than
              short passwords, especially when they do not use obvious personal
              information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-red-400/20 bg-red-950/20 p-5">
                <h3 className="font-bold text-red-300">Weak Example</h3>
                <p className="mt-2 text-slate-300">
                  cyber123
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  This is short, common, and easy to guess.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/20 p-5">
                <h3 className="font-bold text-emerald-300">Stronger Fake Example</h3>
                <p className="mt-2 text-slate-300">
                  River-Turtle-Moon-47!
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  This is longer and uses unrelated words. Do not use this exact
                  example for a real account.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Password Reuse Risk</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Password reuse means using the same password on more than one
              account. This is risky because if one account has a problem, other
              accounts using the same password may also be in danger.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-cyan-300">Fake Scenario</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Maya uses the same fake password for a game account and a school
                club account. If the game account password gets exposed, someone
                might try the same password on the school club account. That is
                why every important account should have its own unique password.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">MFA: Extra Protection</h2>
            <p className="mt-4 leading-8 text-slate-300">
              MFA means multi-factor authentication. It adds another step after
              your password, such as a code, approval prompt, or security app.
              This can help protect an account even if a password is guessed or
              exposed.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Never share MFA codes with anyone who messages you, calls you, or
              claims there is an emergency. Real support teams should not ask for
              your login codes.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Password Managers</h2>
            <p className="mt-4 leading-8 text-slate-300">
              A password manager is a tool that stores passwords securely and
              helps people use unique passwords for different accounts. Students
              should ask a parent, guardian, or trusted adult before setting one
              up, especially for school or family devices.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Myths vs Facts</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-red-300">Myth</h3>
                <p className="mt-2 text-slate-300">
                  “Adding 123 at the end makes any password strong.”
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-emerald-300">Fact</h3>
                <p className="mt-2 text-slate-300">
                  Longer, unique passwords are safer than predictable patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-red-300">Myth</h3>
                <p className="mt-2 text-slate-300">
                  “It is okay to share my password with a close friend.”
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-emerald-300">Fact</h3>
                <p className="mt-2 text-slate-300">
                  Passwords should stay private, even with friends.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Safe Habits</h2>
            <ul className="mt-5 space-y-3 leading-7 text-slate-300">
              <li>Use a different password for important accounts.</li>
              <li>Make passwords longer instead of relying on simple tricks.</li>
              <li>Turn on MFA when available.</li>
              <li>Do not share passwords or login codes.</li>
              <li>Ask a trusted adult before using a password manager.</li>
              <li>Use fake passwords only when practicing.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Common Mistakes</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-cyan-300">Mistake 1</h3>
                <p className="mt-2 text-slate-300">
                  Using your name, birthday, school, pet, or favorite team in a
                  password.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-cyan-300">Mistake 2</h3>
                <p className="mt-2 text-slate-300">
                  Reusing the same password across school, games, email, and
                  social accounts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-cyan-300">Mistake 3</h3>
                <p className="mt-2 text-slate-300">
                  Sharing passwords through text messages, group chats, or
                  screenshots.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-bold text-cyan-300">Mistake 4</h3>
                <p className="mt-2 text-slate-300">
                  Typing real passwords into games, quizzes, fake forms, or
                  practice labs.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/20 p-8">
            <h2 className="text-3xl font-bold">Practice Activity</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Create three fake passphrases that are long, memorable, and do not
              include personal information. Then compare them in the Password
              Lab using fake examples only.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/password-lab"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Password Lab
              </Link>

              <Link
                href="/worksheets"
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Open Worksheets
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Reflection Questions</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-300">
              <li>Why is password reuse dangerous?</li>
              <li>What makes a passphrase easier to remember but harder to guess?</li>
              <li>Why should MFA codes never be shared?</li>
              <li>Who is a trusted adult you could ask for help with account safety?</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-950/20 p-8">
            <h2 className="text-3xl font-bold text-amber-300">Safety Reminder</h2>
            <p className="mt-4 leading-8 text-slate-300">
              CyberShield Academy is for safe, ethical, defensive learning. Do
              not test real accounts, collect anyone’s password, or ask others
              for login information. Practice with fake examples only.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Continue Learning</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/lessons"
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-300">Learning Library</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Return to all CyberShield lessons.
                </p>
              </Link>

              <Link
                href="/worksheets"
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-300">Worksheets</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Use printable activities for practice.
                </p>
              </Link>

              <Link
                href="/quiz"
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-300">Cyber Safety Quiz</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Check your understanding with a short quiz.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}