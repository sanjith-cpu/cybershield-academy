import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what multi-factor authentication means",
  "Understand why login codes should stay private",
  "Recognize suspicious requests for login codes",
  "Understand why trusted devices and extra login steps can help protect accounts",
  "Practice safer responses to unexpected code messages using fake examples only",
];

const vocabulary = [
  {
    term: "Multi-Factor Authentication",
    definition:
      "An extra login protection step that asks for more than just a password, such as a code, app approval, or trusted device.",
  },
  {
    term: "Login Code",
    definition:
      "A temporary code used during sign-in or account recovery. It should not be shared with friends, strangers, or people in messages.",
  },
  {
    term: "Trusted Device",
    definition:
      "A device that an account recognizes as safe or familiar after a successful sign-in.",
  },
  {
    term: "Verification",
    definition:
      "A step used to check that the person signing in is really allowed to access the account.",
  },
  {
    term: "Code Request Scam",
    definition:
      "A trick where someone asks for a login or verification code so they can try to access an account.",
  },
  {
    term: "Account Approval",
    definition:
      "A prompt or notification asking the account owner to approve or deny a login attempt.",
  },
];

const protectionTypes = [
  {
    title: "Password Plus Code",
    explanation:
      "Some accounts ask for a password and then a temporary code from an email, text, authenticator app, or trusted device.",
    smarterHabit:
      "Never share login codes with other people. Use them only on the official account sign-in screen.",
  },
  {
    title: "Trusted Device Check",
    explanation:
      "An account may notice when a login happens from a new device, browser, or location and ask for extra verification.",
    smarterHabit:
      "Take new-device alerts seriously, especially if the student did not try to sign in.",
  },
  {
    title: "Approval Notification",
    explanation:
      "Some accounts send a prompt asking the user to approve or deny a login attempt.",
    smarterHabit:
      "Deny login prompts that the student did not start and ask a trusted adult for help.",
  },
  {
    title: "Backup or Recovery Codes",
    explanation:
      "Some accounts provide backup codes for account recovery. These should be stored carefully with trusted adult guidance.",
    smarterHabit:
      "Do not share, post, screenshot publicly, or type backup codes into random websites.",
  },
];

const risks = [
  {
    title: "Sharing Codes",
    text: "A login code is like a temporary key. Sharing it can give someone else a chance to access the account.",
  },
  {
    title: "Unexpected Prompts",
    text: "A login approval prompt that appears when the student is not signing in may mean someone else is trying to access the account.",
  },
  {
    title: "Fake Support Messages",
    text: "Someone may pretend to be support, a friend, or a company and ask for a code. Real help should not require sharing login codes in chat.",
  },
];

const scenarios = [
  {
    title: "The Friend Code Request",
    situation:
      "A student receives a message from a gaming friend asking them to send a login code that just appeared on their phone.",
    warningSigns:
      "The code is connected to account access, and another person is asking for it.",
    riskyResponse:
      "Send the code because the friend says they need help quickly.",
    smarterResponse:
      "Do not share the code. Stop the conversation and ask a trusted adult for help if the message feels suspicious.",
    whyItWorks:
      "Login codes should only be used by the account owner on the official sign-in page.",
  },
  {
    title: "The Login Prompt Surprise",
    situation:
      "A student gets a login approval prompt even though they are not trying to sign in.",
    warningSigns:
      "The student did not start the login attempt.",
    riskyResponse:
      "Approve it to make the notification go away.",
    smarterResponse:
      "Deny the request and show a trusted adult the alert.",
    whyItWorks:
      "Approving a login prompt can let someone else into the account. Unexpected prompts should be treated carefully.",
  },
  {
    title: "The Fake Support Message",
    situation:
      "A message claims to be account support and says the student must send a verification code to avoid losing the account.",
    warningSigns:
      "The message creates urgency and asks for a private login code.",
    riskyResponse:
      "Send the code before the account gets deleted.",
    smarterResponse:
      "Do not send the code. Use the official app or website with trusted adult help to check the account.",
    whyItWorks:
      "Fake support messages often pressure people to share private account information.",
  },
  {
    title: "The New Device Alert",
    situation:
      "An account sends an email saying there was a sign-in from a new device the student does not recognize.",
    warningSigns:
      "The alert describes account activity the student did not do.",
    riskyResponse:
      "Ignore it because the account still seems to work.",
    smarterResponse:
      "Do not click suspicious links. Ask a trusted adult and check the account through the official app or website.",
    whyItWorks:
      "Account alerts can be important, but they should be handled through official tools, not random links.",
  },
];

const actionSteps = [
  "Never share login codes, verification codes, backup codes, or recovery codes with friends or strangers.",
  "Use fake examples only during CyberShield Academy lessons.",
  "Only enter login codes on the official account sign-in or recovery page.",
  "Deny login approval prompts that the student did not start.",
  "Do not click suspicious links in account warning messages.",
  "Ask a trusted adult when a login code, new-device alert, approval prompt, or recovery message appears unexpectedly.",
];

const reflectionQuestions = [
  "Why should login codes stay private?",
  "What should a student do if they receive a login prompt they did not start?",
  "Why can fake support messages be dangerous?",
  "How can multi-factor authentication help protect an account?",
  "When should a student ask a trusted adult about login codes or alerts?",
];

const skillCheck = [
  {
    question:
      "A friend asks a student to send a login code that appeared on the student’s phone. What is the safer response?",
    choices: [
      "Send the code quickly because the friend asked",
      "Do not share the code and ask a trusted adult if the message feels suspicious",
      "Post the code in the group chat so everyone can help",
    ],
    answer: "Choice B",
    explanation:
      "Login codes are private account access tools. They should not be shared with friends, strangers, or group chats.",
  },
  {
    question:
      "A student gets an account approval prompt even though they are not signing in. What should they do?",
    choices: [
      "Approve it to make the pop-up disappear",
      "Deny the request and show a trusted adult",
      "Ignore it forever and keep using the account",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected login prompts may mean someone else is trying to access the account. Students should deny and get trusted help.",
  },
  {
    question:
      "A message claims to be support and asks for a verification code. What is the warning sign?",
    choices: [
      "It asks for a private login code and creates pressure",
      "It uses the word support",
      "It appears on a screen",
    ],
    answer: "Choice A",
    explanation:
      "Messages that ask for login codes are risky, especially when they create urgency or pressure.",
  },
  {
    question:
      "Where should a login code be entered?",
    choices: [
      "In a random chat message",
      "On the official account sign-in or recovery page, with trusted adult help when needed",
      "In a public comment so support can see it",
    ],
    answer: "Choice B",
    explanation:
      "Login codes should only be used through official account tools, not shared in chats, comments, or suspicious links.",
  },
];

const checklist = [
  "I can explain what multi-factor authentication means.",
  "I can explain why login codes should stay private.",
  "I can recognize suspicious requests for verification codes.",
  "I can respond safely to unexpected login approval prompts.",
  "I can explain why trusted devices and new-device alerts matter.",
  "I know when to ask a trusted adult for help with login codes or account prompts.",
];

export default function MultiFactorAuthenticationAndLoginCodesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Multi-Factor Authentication and Login Codes
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Multi-factor authentication adds extra protection to accounts by using
          more than just a password. This lesson teaches students why login
          codes, approval prompts, and trusted devices matter — and why codes
          should never be shared.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/password-reuse-and-account-risk"
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
            href="/junior/passwords-accounts-and-login-safety/account-recovery-and-security-alerts"
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
              A login code is like a temporary key.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a code after trying to sign in. That
              code is meant to help prove the student owns the account. If
              someone else asks for the code, the student should pause because
              sharing it could let another person into the account.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Extra login steps help only when students keep codes private.
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
              Never share real login codes, verification codes, or backup codes.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy lessons use fake examples only. Students
              should not type, paste, post, screenshot, or send real account
              codes during lessons, chats, games, or support messages.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Multi-factor authentication adds another check before account access.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A password is one way to prove someone should access an account.
            Multi-factor authentication adds another step, such as a temporary
            code, approval prompt, authenticator app, or trusted device. This can
            make accounts safer because a password alone may not be enough.
          </p>

          <p>
            Login codes and approval prompts are powerful because they can help
            confirm account access. That also means they must stay private. If a
            person in a message asks for a code, the student should not send it.
            The code belongs only on the official sign-in or recovery page.
          </p>

          <p>
            Students should also pay attention to unexpected prompts. If a code
            arrives or an approval request appears when the student is not
            signing in, they should deny the request when possible, avoid
            suspicious links, and ask a trusted adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding extra login protection.
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
          Extra Login Protection Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different accounts may use different extra login steps.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {protectionTypes.map((item) => (
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
            Login code risk often comes from sharing, pressure, or unexpected
            prompts.
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
          A code should never be treated like a normal chat message.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student sends a login code to someone in a message because the
              person says they need it quickly.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student keeps the code private, uses official account tools
              only, and asks a trusted adult if the code or prompt was
              unexpected.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responding to login codes and approval prompts safely.
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
          Use these habits when codes, prompts, or login alerts appear.
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
          Before finishing Lesson 3.4, students should be able to say:
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
            Lesson 3.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 3.5 will explain account recovery and security alerts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/password-reuse-and-account-risk"
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
              href="/junior/passwords-accounts-and-login-safety/account-recovery-and-security-alerts"
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