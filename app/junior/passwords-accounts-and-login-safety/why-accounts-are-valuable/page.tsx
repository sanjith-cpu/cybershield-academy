import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why online accounts are valuable",
  "Identify what kinds of information accounts can protect",
  "Understand why even game, school, and email accounts matter",
  "Recognize risky account habits like sharing logins or ignoring alerts",
  "Practice safer choices when an account problem appears",
];

const vocabulary = [
  {
    term: "Account",
    definition:
      "A profile or login that lets someone access an app, website, school tool, game, email, or online service.",
  },
  {
    term: "Login",
    definition:
      "The process of entering account information, such as a username and password, to access an account.",
  },
  {
    term: "Username",
    definition:
      "A name or ID used to identify an account. It should not reveal too much private information.",
  },
  {
    term: "Account Value",
    definition:
      "The reason an account matters, such as messages, schoolwork, photos, progress, purchases, contacts, or access to other accounts.",
  },
  {
    term: "Account Access",
    definition:
      "The ability to open, use, or control an account.",
  },
  {
    term: "Login Alert",
    definition:
      "A message that warns about account activity, such as a sign-in from a new device or a password reset request.",
  },
];

const accountExamples = [
  {
    title: "School Accounts",
    examples: [
      "Assignments and grades",
      "School email",
      "Classroom tools",
      "Teacher messages",
      "Shared documents",
    ],
    whyItMatters:
      "School accounts can hold academic work, communication, and personal school information.",
  },
  {
    title: "Game Accounts",
    examples: [
      "Progress and achievements",
      "Friend lists",
      "Chats or messages",
      "Saved items",
      "Purchases or rewards",
    ],
    whyItMatters:
      "Game accounts can still contain time, value, contacts, and personal information.",
  },
  {
    title: "Email Accounts",
    examples: [
      "Password reset links",
      "Important messages",
      "Account recovery options",
      "School or family communication",
      "Connected services",
    ],
    whyItMatters:
      "Email accounts are especially important because they may help recover other accounts.",
  },
];

const risks = [
  {
    title: "Shared Logins",
    text: "Sharing a password or account with friends can lead to lost access, changed settings, private messages being seen, or actions done under someone else’s name.",
  },
  {
    title: "Weak Protection",
    text: "If an account has weak login habits, it may be easier for someone else to guess, misuse, or access it.",
  },
  {
    title: "Ignored Warnings",
    text: "Login alerts, password reset messages, or strange account activity should not be ignored, even if the account seems small.",
  },
];

const scenarios = [
  {
    title: "The Shared Game Account",
    situation:
      "A student lets a friend use their game account for one weekend. Later, the student notices changed settings and missing items.",
    warningSigns:
      "The student gave someone else access to the account and lost control over what happened inside it.",
    riskyResponse:
      "Keep sharing the account because the friend says it was an accident.",
    smarterResponse:
      "Stop sharing the login, ask a trusted adult for help, and change the password with adult support if needed.",
    whyItWorks:
      "Accounts are easier to protect when only the account owner and trusted adult support have access.",
  },
  {
    title: "The School Account Problem",
    situation:
      "A student shares their school account password with a classmate so the classmate can check an assignment.",
    warningSigns:
      "The account may include grades, messages, school files, and private school information.",
    riskyResponse:
      "Share the password because it feels faster than helping in another way.",
    smarterResponse:
      "Do not share the login. Help the classmate find the assignment another way or ask the teacher for help.",
    whyItWorks:
      "School accounts should stay private because they protect schoolwork, messages, and student information.",
  },
  {
    title: "The Unexpected Login Alert",
    situation:
      "A student receives a message saying there was a login from a new device, but they did not sign in.",
    warningSigns:
      "The alert may mean someone else tried to access the account or that the account needs attention.",
    riskyResponse:
      "Ignore the alert because the account is only for a game.",
    smarterResponse:
      "Do not click suspicious links. Show the alert to a trusted adult and use the official app or website to check the account safely.",
    whyItWorks:
      "Account warnings should be handled carefully with trusted help, especially when the student did not request the activity.",
  },
  {
    title: "The Account That Connects Everything",
    situation:
      "A student uses one email account for school tools, games, cloud storage, and password resets.",
    warningSigns:
      "If the email account is not protected, many connected accounts may also be affected.",
    riskyResponse:
      "Treat the email account like it does not matter because it is not a social media account.",
    smarterResponse:
      "Protect the email account carefully, avoid sharing the login, and ask a trusted adult about stronger account protection.",
    whyItWorks:
      "Email accounts can be connected to many other accounts, so they need strong protection.",
  },
];

const actionSteps = [
  "Treat school, email, game, and app accounts as valuable.",
  "Do not share passwords or login codes with friends.",
  "Use fake examples only when practicing account safety lessons.",
  "Do not type real passwords into class activities or random websites.",
  "Take login alerts, password reset messages, and unusual account activity seriously.",
  "Ask a trusted adult before responding to account warnings or recovery messages.",
];

const reflectionQuestions = [
  "Why can a game account still be valuable?",
  "Why should students avoid sharing school account passwords?",
  "Why is an email account especially important?",
  "What should a student do if they receive a login alert they did not expect?",
  "How can one account connect to other accounts?",
];

const skillCheck = [
  {
    question:
      "A friend asks to borrow a student’s game account login for the weekend. What is the safer response?",
    choices: [
      "Share it because it is only a game account",
      "Do not share the login and keep the account protected",
      "Share it only if the friend promises not to change anything",
    ],
    answer: "Choice B",
    explanation:
      "Game accounts can include progress, messages, purchases, friend lists, and personal information. Logins should not be shared.",
  },
  {
    question:
      "Why is a school account valuable?",
    choices: [
      "It may contain assignments, grades, school messages, and shared documents",
      "It has no value because it is only for school",
      "It only matters if the student uses it for games",
    ],
    answer: "Choice A",
    explanation:
      "School accounts can protect academic work, school communication, and personal student information.",
  },
  {
    question:
      "A student receives a login alert they did not expect. What should they do?",
    choices: [
      "Ignore it because alerts are always fake",
      "Click every link in the alert immediately",
      "Show a trusted adult and check the account safely through the official app or website",
    ],
    answer: "Choice C",
    explanation:
      "Unexpected login alerts should be handled carefully. Students should get trusted help and avoid clicking suspicious links.",
  },
  {
    question:
      "Why can an email account be extra important?",
    choices: [
      "It may be connected to password resets and other accounts",
      "It can never have privacy risks",
      "It is only useful for sending jokes",
    ],
    answer: "Choice A",
    explanation:
      "Email accounts often connect to other accounts and may be used for password resets or recovery messages.",
  },
];

const checklist = [
  "I can explain why accounts are valuable.",
  "I can identify information that accounts may protect.",
  "I can explain why game accounts, school accounts, and email accounts matter.",
  "I can recognize why sharing logins is risky.",
  "I can respond safely to an unexpected login alert.",
  "I know when to ask a trusted adult for account help.",
];

export default function WhyAccountsAreValuablePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Why Accounts Are Valuable
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Accounts are more than usernames and passwords. They can protect
          messages, schoolwork, progress, photos, purchases, contacts, settings,
          and access to other accounts. This lesson helps students understand why
          even small accounts deserve protection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 3
          </Link>

          <Link
            href="/junior/passwords-accounts-and-login-safety/password-strength-and-passphrases"
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
              A student might think, “It is just a game account,” but that
              account may still matter.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student spends months building progress in a game,
              messaging teammates, saving items, and connecting the account to
              an email address. If someone else gets access, the student could
              lose progress, privacy, settings, or control of the account.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Account safety starts with understanding why accounts are worth
          protecting.
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
          <p className="text-cyan-300 font-semibold mb-3">Why This Matters</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Accounts can hold information, identity, access, and trust.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students use accounts for school, games, email,
            videos, clubs, learning tools, cloud storage, and communication. If
            an account is not protected, someone else may see private
            information, change settings, send messages, delete work, or use the
            account in ways the student did not choose.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          An account is valuable because of what it protects and what it connects
          to.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Some accounts protect obvious information, like school assignments,
            grades, emails, photos, or messages. Other accounts may protect less
            obvious things, like game progress, saved settings, achievements,
            friend lists, creative projects, or club communication.
          </p>

          <p>
            Accounts can also connect to each other. An email account might be
            used to reset passwords for games, school tools, or apps. A cloud
            storage account might hold documents and photos. A school account
            might connect to classroom tools. This means one weak account can
            sometimes create risk for other accounts too.
          </p>

          <p>
            The safest mindset is simple: if an account belongs to you, protect
            it. Do not share logins with friends, do not type real passwords into
            practice activities, and do not ignore unexpected login alerts or
            reset messages. When something feels confusing, ask a trusted adult.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding account value.
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
          Account Value Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different accounts protect different kinds of value.
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {accountExamples.map((account) => (
            <div
              key={account.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {account.title}
              </h3>

              <div className="space-y-3 mb-5">
                {account.examples.map((example) => (
                  <div
                    key={example}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    {example}
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Why It Matters
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {account.whyItMatters}
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
            Account risk often starts with small choices.
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
          Treat every account like it protects something important.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student shares a login with a friend, ignores account alerts,
              and assumes the account does not matter because it is only for a
              game or school tool.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student keeps logins private, takes alerts seriously, uses
              trusted adult help when needed, and remembers that even small
              accounts can protect valuable information.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding why an account needs protection.
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
          Use these habits when thinking about account safety.
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
          Before finishing Lesson 3.1, students should be able to say:
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
            Lesson 3.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 3.2 will explain password strength and passphrases
            using fake examples only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 3
            </Link>

            <Link
              href="/junior/passwords-accounts-and-login-safety/password-strength-and-passphrases"
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