import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what password reuse means",
  "Understand why one exposed password can put other accounts at risk",
  "Recognize risky habits like using the same password everywhere",
  "Understand why important accounts need unique passwords",
  "Practice safer account decisions using fake examples only",
];

const vocabulary = [
  {
    term: "Password Reuse",
    definition: "Using the same password for more than one account.",
  },
  {
    term: "Unique Password",
    definition:
      "A password that is used for only one account, not copied across many accounts.",
  },
  {
    term: "Account Chain",
    definition:
      "A group of accounts that connect to each other, such as email, school tools, games, cloud storage, and password reset options.",
  },
  {
    term: "Exposed Password",
    definition:
      "A password that may no longer be secret because it was shared, guessed, leaked, or entered somewhere unsafe.",
  },
  {
    term: "Password Reset",
    definition:
      "A process used to change or recover an account password, usually through an email, phone, trusted device, or official account page.",
  },
  {
    term: "Account Risk",
    definition:
      "The chance that an account could be accessed, changed, misused, or locked because of unsafe login habits.",
  },
];

const reusePatterns = [
  {
    title: "Same Password Everywhere",
    example:
      "A student uses the same password for email, games, school tools, and social apps.",
    whyRisky:
      "If one account has a problem, the same password could put other accounts at risk too.",
    smarterHabit:
      "Use unique passwords for important accounts and ask a trusted adult for help managing them.",
  },
  {
    title: "Small Changes Only",
    example:
      "A student uses the same password idea but changes one number at the end.",
    whyRisky:
      "Tiny changes can still be predictable if the main password pattern stays the same.",
    smarterHabit:
      "Avoid obvious password patterns and use stronger unique passwords.",
  },
  {
    title: "Shared Password Reuse",
    example:
      "A student shares one password with a friend and also uses that password for other accounts.",
    whyRisky:
      "Once a password is shared, it is no longer private. Other accounts using that password may also be affected.",
    smarterHabit:
      "Do not share passwords, and change reused passwords with trusted adult help if needed.",
  },
  {
    title: "Email Password Reuse",
    example:
      "A student uses the same password for email and several other accounts.",
    whyRisky:
      "Email accounts can be used for password resets, so they need extra protection.",
    smarterHabit:
      "Keep email passwords unique and ask a trusted adult about stronger protection.",
  },
];

const risks = [
  {
    title: "One Problem Spreads",
    text: "If the same password is used everywhere, one exposed password can create problems for multiple accounts.",
  },
  {
    title: "Important Accounts Are Connected",
    text: "Email, school tools, games, cloud storage, and apps may connect through password resets or shared login information.",
  },
  {
    title: "Harder Recovery",
    text: "When multiple accounts share the same password, fixing one account may not be enough.",
  },
];

const scenarios = [
  {
    title: "The Same Password Habit",
    situation:
      "A student uses the same password for their game account, email account, school account, and video app.",
    warningSigns:
      "The same password protects many different accounts.",
    riskyResponse:
      "Keep using the same password because it is easy to remember.",
    smarterResponse:
      "Ask a trusted adult for help making important accounts unique and safer.",
    whyItWorks:
      "Unique passwords help prevent one account problem from spreading to other accounts.",
  },
  {
    title: "The Friend Who Knows the Password",
    situation:
      "A student told a friend their game password months ago. Later, the student realizes the same password is used for email too.",
    warningSigns:
      "The password was shared and reused on a more important account.",
    riskyResponse:
      "Do nothing because the friend probably forgot it.",
    smarterResponse:
      "Ask a trusted adult for help changing reused passwords and keeping account logins private.",
    whyItWorks:
      "Once a password has been shared, it should not be trusted for important accounts.",
  },
  {
    title: "The Tiny Change Pattern",
    situation:
      "A student uses similar passwords like fakegame1, fakegame2, and fakegame3 for different accounts.",
    warningSigns:
      "The password pattern is predictable because only a small part changes.",
    riskyResponse:
      "Assume the passwords are unique because the number is different.",
    smarterResponse:
      "Use truly unique passwords or passphrases with trusted adult help.",
    whyItWorks:
      "Tiny changes may still be easy to guess if the main pattern is obvious.",
  },
  {
    title: "The Email Account Chain",
    situation:
      "A student uses one email account to reset passwords for games, school tools, and apps.",
    warningSigns:
      "The email account connects to many other accounts.",
    riskyResponse:
      "Use the same password on the email account and every connected account.",
    smarterResponse:
      "Protect the email account with a unique password and ask a trusted adult about extra login protection.",
    whyItWorks:
      "Email accounts are often connected to account recovery, so they need stronger protection.",
  },
];

const actionSteps = [
  "Do not use the same password for every account.",
  "Keep important accounts, especially email and school accounts, unique.",
  "Do not share passwords with friends or classmates.",
  "If a password has been shared, ask a trusted adult for help changing it.",
  "If a password is reused on many accounts, ask a trusted adult for help making important accounts safer.",
  "Use fake examples only during lessons. Never type real passwords into CyberShield Academy.",
];

const reflectionQuestions = [
  "Why is password reuse risky?",
  "Why can one exposed password affect more than one account?",
  "Why should email accounts have stronger protection?",
  "Why are tiny password changes not always enough?",
  "When should a student ask a trusted adult for password help?",
];

const skillCheck = [
  {
    question:
      "A student uses the same password for email, games, and school tools. What is the main risk?",
    choices: [
      "One exposed password could put multiple accounts at risk",
      "The password becomes stronger each time it is reused",
      "Only the game account matters",
    ],
    answer: "Choice A",
    explanation:
      "Password reuse can allow one account problem to spread to other accounts that use the same password.",
  },
  {
    question:
      "A student changes only the last number of the same password for each account. Why is this risky?",
    choices: [
      "The pattern may still be predictable",
      "Changing one number always makes a password perfect",
      "Numbers should never appear in passwords",
    ],
    answer: "Choice A",
    explanation:
      "Tiny changes can still leave the password pattern easy to guess.",
  },
  {
    question:
      "A student shared a password with a friend and also uses it for email. What is the safer response?",
    choices: [
      "Do nothing because the friend is trusted",
      "Ask a trusted adult for help changing reused passwords",
      "Share the password with more friends so everyone knows it",
    ],
    answer: "Choice B",
    explanation:
      "Once a password has been shared, it is no longer private. Reused passwords should be changed with trusted help.",
  },
  {
    question:
      "Why is an email account especially important?",
    choices: [
      "It may be used to reset passwords for other accounts",
      "It never needs a unique password",
      "It is only used for unimportant messages",
    ],
    answer: "Choice A",
    explanation:
      "Email accounts often connect to recovery and password reset options for other accounts.",
  },
];

const checklist = [
  "I can explain what password reuse means.",
  "I can explain why using the same password everywhere is risky.",
  "I can recognize tiny password changes as a weak habit.",
  "I can explain why email accounts need unique protection.",
  "I know not to share passwords with friends or classmates.",
  "I know when to ask a trusted adult for help with reused passwords.",
];

export default function PasswordReuseAndAccountRiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Password Reuse and Account Risk
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Using the same password across many accounts may feel convenient, but
          it can make account problems spread. This lesson teaches students why
          unique passwords matter, especially for important accounts like email
          and school tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/password-strength-and-passphrases"
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
            href="/junior/passwords-accounts-and-login-safety/multi-factor-authentication-and-login-codes"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Next Lesson
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
          <p className="text-cyan-300 font-semibold mb-3">Real-Life Hook</p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              One reused password can connect many accounts.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student uses the same password for a game, email,
              school tool, and video app. If that password stops being private,
              the problem may not stay with one account. It could affect every
              account using the same login secret.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Password reuse can turn one account problem into many.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningGoals.map((goal) => (
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
          <p className="text-cyan-300 font-semibold mb-3">Safety Rule</p>

          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-8">
            <h2 className="text-3xl font-bold text-red-200 mb-4">
              Do not type real passwords into this lesson.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              This lesson is for learning safe habits with fake examples only.
              Students should never reveal, test, compare, or write real
              passwords in CyberShield Academy activities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Reusing one password across many accounts creates a chain reaction
          risk.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Password reuse means using the same password for more than one
            account. It is common because it feels easy to remember. But if that
            password is shared, guessed, exposed, or entered somewhere unsafe,
            every account using that password may need attention.
          </p>

          <p>
            Important accounts should have unique passwords. Email accounts are
            especially important because they may connect to password resets for
            other accounts. School accounts also matter because they can protect
            assignments, messages, grades, and student information.
          </p>

          <p>
            Students do not need to solve password management alone. If they
            realize they reused a password, shared one, or received an account
            warning, the safest next step is to ask a trusted adult for help
            using official account settings.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding password reuse.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((word) => (
              <div
                key={word.term}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
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
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Password Reuse Pattern Lab
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Recognize reuse patterns before they become account problems.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reusePatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {pattern.title}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 mb-4">
                <h4 className="font-bold text-slate-200 mb-2">Example</h4>
                <p className="text-slate-300 leading-relaxed">
                  {pattern.example}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Why Risky</h4>
                <p className="text-slate-200 leading-relaxed">
                  {pattern.whyRisky}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {pattern.smarterHabit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Risk Breakdown</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Password reuse makes account recovery harder.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-red-200 mb-3">
                  {risk.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{risk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Smarter Choice vs Risky Choice
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Convenience should not make every account depend on one password.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student uses the same password for email, school, games, apps,
              and cloud storage because it is easy to remember.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student keeps important accounts unique and asks a trusted
              adult for help managing passwords safely.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding what to do when passwords are reused.
          </h2>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4">
                    <h4 className="font-bold text-yellow-200 mb-2">
                      Warning Signs
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.warningSigns}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">
                      Risky Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.riskyResponse}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Why the Smarter Response Works
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.whyItWorks}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-Life Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these habits when thinking about password reuse.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actionSteps.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {step}
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

            <h2 className="text-3xl font-bold mb-6">Think before moving on.</h2>

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
            <p className="text-cyan-300 font-semibold mb-3">Skill Check</p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <p className="text-sm text-cyan-300 font-semibold mb-2">
                    Question {index + 1}
                  </p>

                  <h3 className="font-bold text-cyan-200 mb-3">
                    {item.question}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {item.choices.map((choice, choiceIndex) => (
                      <div
                        key={choice}
                        className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-200"
                      >
                        <span className="font-bold text-cyan-200">
                          Choice {String.fromCharCode(65 + choiceIndex)}:
                        </span>{" "}
                        {choice}
                      </div>
                    ))}
                  </div>

                  <details className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-3">
                    <summary className="cursor-pointer font-bold text-emerald-200">
                      Reveal safer response
                    </summary>

                    <div className="mt-3 text-slate-200 leading-relaxed">
                      <p className="font-bold mb-2">
                        Correct Answer: {item.answer}
                      </p>

                      <p>{item.explanation}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 3.3, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {checklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 3.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 3.4 will explain multi-factor authentication and login
            codes in a safe beginner-friendly way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/password-strength-and-passphrases"
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
              href="/junior/passwords-accounts-and-login-safety/multi-factor-authentication-and-login-codes"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
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