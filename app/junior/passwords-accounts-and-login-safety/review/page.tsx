import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Accounts are valuable.",
    text: "Students learned that school accounts, game accounts, email accounts, cloud storage, and learning tools can protect messages, progress, schoolwork, files, contacts, purchases, and access to other accounts.",
  },
  {
    title: "Strong passwords are harder to guess.",
    text: "Students learned to avoid personal details, short common passwords, simple number patterns, and real-password practice during lessons.",
  },
  {
    title: "Password reuse creates chain reaction risk.",
    text: "Students learned that using the same password on many accounts can cause one account problem to spread to other accounts.",
  },
  {
    title: "Extra login steps can protect accounts.",
    text: "Students learned that multi-factor authentication, login codes, trusted devices, and approval prompts can add protection when used carefully.",
  },
  {
    title: "Account recovery and alerts need careful responses.",
    text: "Students learned to avoid suspicious links, not panic-click warnings, and ask a trusted adult when login alerts or reset messages appear unexpectedly.",
  },
];

const vocabularyReview = [
  {
    term: "Account",
    definition:
      "A profile or login that lets someone access an app, website, school tool, game, email, or online service.",
  },
  {
    term: "Password Strength",
    definition:
      "How difficult a password may be to guess. Longer, less predictable passwords are usually stronger.",
  },
  {
    term: "Passphrase",
    definition:
      "A longer password made from multiple words or a memorable phrase. It should still be unique and not obvious.",
  },
  {
    term: "Password Reuse",
    definition:
      "Using the same password for more than one account.",
  },
  {
    term: "Multi-Factor Authentication",
    definition:
      "An extra login protection step that asks for more than just a password, such as a code, app approval, or trusted device.",
  },
  {
    term: "Account Recovery",
    definition:
      "The process of getting back into an account or securing it after a password problem, login issue, or suspicious activity.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Shared Game Login",
    situation:
      "A student lets a friend use a game account login. Later, settings are changed and items are missing.",
    risk:
      "The student gave someone else access to an account and lost control over what happened inside it.",
    smarterChoice:
      "Stop sharing the login, ask a trusted adult for help, and change the password using official account tools if needed.",
  },
  {
    title: "Scenario 2: The Easy Password",
    situation:
      "A student uses a school name, team name, birthday, or simple number pattern as a password.",
    risk:
      "The password may be easier to guess because it is based on personal details or predictable patterns.",
    smarterChoice:
      "Use a longer, less predictable password or passphrase with trusted adult help, and use fake examples only in lessons.",
  },
  {
    title: "Scenario 3: The Same Password Everywhere",
    situation:
      "A student uses the same password for email, school tools, games, and apps.",
    risk:
      "If one password is exposed, multiple accounts could be affected.",
    smarterChoice:
      "Ask a trusted adult for help making important accounts unique and safer.",
  },
  {
    title: "Scenario 4: The Unexpected Login Code",
    situation:
      "A student receives a login code and someone in a message asks them to send it.",
    risk:
      "The code is private and may allow account access if shared.",
    smarterChoice:
      "Do not share the code. Use official account tools only and ask a trusted adult if the message feels suspicious.",
  },
  {
    title: "Scenario 5: The Password Reset Warning",
    situation:
      "A student receives a password reset message they did not request.",
    risk:
      "The message could be a real warning or a fake message trying to make the student click an unsafe link.",
    smarterChoice:
      "Avoid suspicious links and check the account through the official app or website with trusted adult help.",
  },
];

const saferResponseQuestions = [
  {
    question:
      "A friend asks to borrow a student’s account login for one weekend. What is the safer response?",
    choices: [
      "Share it because the friend promised to be careful.",
      "Do not share the login and ask a trusted adult or official support option for help if needed.",
      "Text the password and delete the message later.",
    ],
    answer: "Choice B",
    explanation:
      "Accounts can protect messages, progress, schoolwork, purchases, settings, and access to other accounts. Logins should stay private.",
  },
  {
    question:
      "A student uses the same password for email, school, games, and cloud storage. What is the main risk?",
    choices: [
      "One exposed password could put multiple accounts at risk.",
      "The password becomes stronger when it is used more often.",
      "Only the game account could ever be affected.",
    ],
    answer: "Choice A",
    explanation:
      "Password reuse can create a chain reaction. If one password stops being private, other accounts using it may need attention too.",
  },
  {
    question:
      "A student receives a login approval prompt even though they are not signing in. What should they do?",
    choices: [
      "Approve it to make the notification disappear.",
      "Deny the request and show a trusted adult.",
      "Share the account password with a friend to ask them to check.",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected approval prompts may mean someone else is trying to access the account. Students should deny and ask for trusted help.",
  },
  {
    question:
      "A message claims to be support and asks for a password reset code. What is the warning sign?",
    choices: [
      "It asks for a private account code and creates pressure.",
      "It mentions the word account.",
      "It appears on a screen.",
    ],
    answer: "Choice A",
    explanation:
      "Messages that ask for private login, verification, reset, or recovery codes are risky, especially when they create urgency.",
  },
  {
    question:
      "A student receives a password reset email they did not request. What is the safer response?",
    choices: [
      "Click the link immediately because it looks urgent.",
      "Ignore every alert forever.",
      "Ask a trusted adult and check the account through the official app or website.",
    ],
    answer: "Choice C",
    explanation:
      "Unexpected reset messages should be checked carefully through official account tools, not suspicious links.",
  },
];

const reflectionQuestions = [
  "Why are school, email, and game accounts worth protecting?",
  "Why should students use fake password examples instead of real passwords during lessons?",
  "Why is password reuse risky?",
  "Why should login codes stay private?",
  "What should a student do if an account alert appears unexpectedly?",
  "When should a student ask a trusted adult for account help?",
];

const finalChecklist = [
  "I can explain why accounts are valuable.",
  "I can recognize weak password habits.",
  "I can explain what a passphrase is.",
  "I can explain why password reuse is risky.",
  "I can keep login codes and recovery codes private.",
  "I can respond safely to unexpected login prompts and account alerts.",
  "I can avoid suspicious account links and panic-clicking.",
  "I know when to ask a trusted adult, teacher, guardian, counselor, coach, or school technology staff member for help.",
];

const badgeSkills = [
  "Account value awareness",
  "Password safety",
  "Passphrase thinking",
  "Password reuse prevention",
  "Login code privacy",
  "Account alert response",
];

export default function PasswordsAccountsAndLoginSafetyCheckpointPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Passwords, Accounts, and Login Safety Checkpoint
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 3: Passwords, Accounts, and Login
          Safety. Students will review account value, password strength,
          password reuse, multi-factor authentication, login codes, recovery,
          and security alerts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/account-recovery-and-security-alerts"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/passwords-accounts-and-login-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 3
          </Link>

          <Link
            href="/junior#junior-learning-path"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            View Next Module
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
            Module Summary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 3 taught safer decisions for accounts, passwords, login
            codes, and account warnings.
          </h2>

          <div className="space-y-5">
            {moduleSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Vocabulary Review
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review the key login safety words from this module.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyReview.map((word) => (
            <div
              key={word.term}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-200 mb-3">
                {word.term}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {word.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Scenario Review
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Review each situation, identify the risk, and compare the smarter
            choice.
          </h2>

          <div className="space-y-6">
            {scenarioReview.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">Risk</h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Choice
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterChoice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Choose the Safer Response
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Choose first, then reveal the safer answer.
        </h2>

        <div className="space-y-5">
          {saferResponseQuestions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-sm text-cyan-300 font-semibold mb-3">
                Question {index + 1}
              </p>

              <h3 className="text-2xl font-bold mb-5">
                {item.question}
              </h3>

              <div className="space-y-3 mb-5">
                {item.choices.map((choice, choiceIndex) => (
                  <div
                    key={choice}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    <span className="font-bold text-cyan-200">
                      Choice {String.fromCharCode(65 + choiceIndex)}:
                    </span>{" "}
                    {choice}
                  </div>
                ))}
              </div>

              <details className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <summary className="cursor-pointer font-bold text-emerald-200">
                  Reveal safer response
                </summary>

                <div className="mt-4 text-slate-200 leading-relaxed">
                  <p className="font-bold mb-2">
                    Correct Answer: {item.answer}
                  </p>

                  <p>{item.explanation}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Think about how Module 3 connects to real life.
            </h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Junior Skill Badge
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Login Safety Protector
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can explain why accounts are valuable,
              recognize safer password habits, avoid password reuse, protect
              login codes, and respond carefully to account warnings or recovery
              messages.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {badgeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Final Module 3 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 3, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {finalChecklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <p className="text-emerald-200 font-semibold mb-3">
              Module 3 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Passwords, Accounts, and Login Safety.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module:
              Phishing and Scam Awareness, where they will learn how suspicious
              messages, fake offers, and pressure tactics try to trick people.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Module 3 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 3 or return to the Junior
            learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/account-recovery-and-security-alerts"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/passwords-accounts-and-login-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 3
            </Link>

            <Link
              href="/junior#junior-learning-path"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              View Next Module
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}