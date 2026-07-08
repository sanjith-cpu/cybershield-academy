import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what account recovery means",
  "Recognize common security alerts and login warnings",
  "Understand why password reset messages should be handled carefully",
  "Identify suspicious account messages without clicking unsafe links",
  "Practice safer responses when account problems appear",
];

const vocabulary = [
  {
    term: "Account Recovery",
    definition:
      "The process of getting back into an account or securing it after a password problem, login issue, or suspicious activity.",
  },
  {
    term: "Security Alert",
    definition:
      "A message that warns about account activity, such as a new login, password change, recovery attempt, or unusual sign-in.",
  },
  {
    term: "Password Reset",
    definition:
      "A process used to create a new password for an account, usually through official account tools.",
  },
  {
    term: "Recovery Email",
    definition:
      "An email address used to help recover or protect an account.",
  },
  {
    term: "Suspicious Link",
    definition:
      "A link that may lead to a fake or unsafe page. Students should not click suspicious links in account messages.",
  },
  {
    term: "Official Account Page",
    definition:
      "The real app or website used to manage account settings, passwords, recovery, and security alerts.",
  },
];

const alertTypes = [
  {
    title: "New Login Alert",
    explanation:
      "An account may warn that someone signed in from a new device, browser, or location.",
    smarterHabit:
      "If the student did not sign in, they should show a trusted adult and check through the official app or website.",
  },
  {
    title: "Password Reset Message",
    explanation:
      "A password reset email or text may appear when someone requests to change the password.",
    smarterHabit:
      "Do not click suspicious links. Use official account tools with trusted adult help.",
  },
  {
    title: "Recovery Information Change",
    explanation:
      "An alert may say that a recovery email, phone number, or account setting was changed.",
    smarterHabit:
      "Treat unexpected recovery changes seriously and ask a trusted adult for help.",
  },
  {
    title: "Unusual Activity Warning",
    explanation:
      "Some accounts send warnings when activity looks different from normal.",
    smarterHabit:
      "Pause, avoid panic-clicking, and verify the warning through official account settings.",
  },
];

const risks = [
  {
    title: "Panic Clicking",
    text: "Security alerts can feel urgent. Clicking quickly without checking can lead students to unsafe links or fake pages.",
  },
  {
    title: "Fake Reset Messages",
    text: "A message may pretend to be a real account warning so the student enters login information on a fake page.",
  },
  {
    title: "Ignoring Real Alerts",
    text: "Not every alert is fake. Some warnings may be important and should be reviewed with trusted help.",
  },
];

const scenarios = [
  {
    title: "The Password Reset Email",
    situation:
      "A student receives a password reset email for an account, but they did not request a reset.",
    warningSigns:
      "The reset message was unexpected and may need careful checking.",
    riskyResponse:
      "Click the link immediately because the email says the account may be locked.",
    smarterResponse:
      "Do not click suspicious links. Show a trusted adult and check the account through the official app or website.",
    whyItWorks:
      "Official account tools help avoid fake links and reduce the chance of entering information on an unsafe page.",
  },
  {
    title: "The New Device Alert",
    situation:
      "An account says there was a login from a device the student does not recognize.",
    warningSigns:
      "The student did not sign in from that device.",
    riskyResponse:
      "Ignore the alert because the account still opens normally.",
    smarterResponse:
      "Ask a trusted adult for help reviewing account activity through the official account page.",
    whyItWorks:
      "Unexpected login alerts can matter even if the account still seems usable.",
  },
  {
    title: "The Urgent Chat Message",
    situation:
      "A message says the student must send their password reset code in five minutes or lose the account.",
    warningSigns:
      "The message creates pressure and asks for private account information.",
    riskyResponse:
      "Send the code quickly to avoid losing the account.",
    smarterResponse:
      "Do not send codes or passwords in chat. Ask a trusted adult and use official account support only.",
    whyItWorks:
      "Real account safety does not require sharing private codes in random messages.",
  },
  {
    title: "The Recovery Email Changed",
    situation:
      "A student gets an alert that the recovery email on an account was changed, but they did not change it.",
    warningSigns:
      "Recovery information changed unexpectedly.",
    riskyResponse:
      "Delete the alert because it seems confusing.",
    smarterResponse:
      "Show the alert to a trusted adult and check the account through official settings.",
    whyItWorks:
      "Recovery information helps protect accounts, so unexpected changes should be reviewed carefully.",
  },
];

const actionSteps = [
  "Do not panic-click links in account warning messages.",
  "Do not share passwords, login codes, reset codes, or recovery codes in chats.",
  "Use the official app or website to check account alerts.",
  "Ask a trusted adult before responding to unexpected password reset messages.",
  "Take new-device alerts and recovery changes seriously.",
  "Use fake examples only during CyberShield Academy lessons.",
];

const reflectionQuestions = [
  "Why should students avoid panic-clicking links in security alerts?",
  "What should a student do if they receive a password reset message they did not request?",
  "Why can fake support messages be risky?",
  "Why should recovery information changes be taken seriously?",
  "When should a student ask a trusted adult about account recovery?",
];

const skillCheck = [
  {
    question:
      "A student receives a password reset email they did not request. What is the safer response?",
    choices: [
      "Click the link immediately because it looks urgent",
      "Ignore every alert forever",
      "Show a trusted adult and check the account through the official app or website",
    ],
    answer: "Choice C",
    explanation:
      "Unexpected reset messages should be handled carefully through official account tools and trusted adult help.",
  },
  {
    question:
      "A chat message asks for a reset code to prevent account deletion. What is the warning sign?",
    choices: [
      "It creates pressure and asks for a private code",
      "It uses normal words",
      "It mentions an account",
    ],
    answer: "Choice A",
    explanation:
      "Messages that create urgency and ask for private account codes are risky.",
  },
  {
    question:
      "An account alert says a new device signed in, but the student did not sign in. What should the student do?",
    choices: [
      "Ignore it because the account still works",
      "Ask a trusted adult for help checking account activity through official tools",
      "Share the password with a friend to ask them to check",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected new-device alerts should be reviewed carefully with trusted help.",
  },
  {
    question:
      "Why should students use official account pages for recovery?",
    choices: [
      "Official tools reduce the risk of using fake links or unsafe pages",
      "Official tools always ask students to share passwords in chat",
      "Official tools are only for adults",
    ],
    answer: "Choice A",
    explanation:
      "Using official apps or websites helps students avoid suspicious links and fake recovery pages.",
  },
];

const checklist = [
  "I can explain what account recovery means.",
  "I can recognize common security alerts.",
  "I can respond safely to unexpected password reset messages.",
  "I can avoid suspicious links in account warnings.",
  "I can explain why recovery information matters.",
  "I know when to ask a trusted adult for account recovery help.",
];

export default function AccountRecoveryAndSecurityAlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Account Recovery and Security Alerts
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Account recovery and security alerts help students notice account
          problems, but they can also feel confusing or urgent. This lesson
          teaches students how to slow down, avoid suspicious links, and ask a
          trusted adult for help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/multi-factor-authentication-and-login-codes"
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
            href="/junior/passwords-accounts-and-login-safety/review"
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
              An account warning can be important, but students should not rush.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives an email saying their account had a new
              login or password reset request. The message may be real or fake.
              The safest habit is to slow down, avoid suspicious links, and get
              trusted adult help before acting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Account alerts should be checked carefully, not ignored or panic-clicked.
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
              Do not click suspicious account links or share recovery codes.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real account recovery steps during lessons. Real account
              problems should be handled with a trusted adult through official
              account tools.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Account recovery is helpful, but it must be handled carefully.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Account recovery is the process of getting back into an account or
            securing it after a login problem. It can involve password resets,
            recovery email messages, trusted devices, security questions, or
            official account settings.
          </p>

          <p>
            Security alerts can warn about new logins, password changes,
            recovery changes, or unusual activity. Students should not ignore
            alerts, but they also should not rush to click links. Some fake
            messages pretend to be real alerts so people enter passwords or
            codes on unsafe pages.
          </p>

          <p>
            The safest response is to use official account tools. That usually
            means opening the real app or website directly, checking settings
            with trusted adult help, and avoiding links or code requests from
            suspicious messages.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding recovery and alerts.
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
          Alert Type Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different account alerts need careful checking.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {alertTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {item.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {item.smarterHabit}
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
            Recovery risks often come from urgency, fake links, or ignoring real
            warnings.
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
          Slow down before responding to account warnings.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks a link in a scary account warning message and
              enters private login information without checking if the message
              is real.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student avoids suspicious links, asks a trusted adult, and
              checks the account through the official app or website.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responding to recovery messages and account alerts safely.
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
          Use these habits when account alerts or recovery messages appear.
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
          Before finishing Lesson 3.5, students should be able to say:
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
            Lesson 3.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 3.6 will review account value, password safety,
            password reuse, MFA, login codes, recovery, and security alerts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/multi-factor-authentication-and-login-codes"
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
              href="/junior/passwords-accounts-and-login-safety/review"
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