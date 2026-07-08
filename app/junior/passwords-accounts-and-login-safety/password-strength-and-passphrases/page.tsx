import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why password strength matters",
  "Recognize weak password patterns",
  "Understand what a passphrase is",
  "Compare short passwords with longer passphrases",
  "Practice safer password thinking using fake examples only",
];

const vocabulary = [
  {
    term: "Password",
    definition:
      "A secret word, phrase, or set of characters used to help protect an account.",
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
    term: "Predictable Pattern",
    definition:
      "A password habit that is easy to guess, such as using a name, birthday, team, pet, school, or simple number pattern.",
  },
  {
    term: "Unique Password",
    definition:
      "A password used for only one account, not reused across many accounts.",
  },
  {
    term: "Password Manager",
    definition:
      "A tool that can help store and organize passwords. Students should only use one with trusted adult guidance.",
  },
];

const passwordPatterns = [
  {
    title: "Weak Pattern: Personal Details",
    example: "Using a name, birthday, school, team, pet, or favorite number.",
    whyRisky:
      "People who know the student may be able to guess personal details.",
    smarterHabit:
      "Avoid using private or obvious personal information in passwords.",
  },
  {
    title: "Weak Pattern: Short and Common",
    example: "Using very short words, common phrases, or simple keyboard patterns.",
    whyRisky:
      "Short and common passwords are easier to guess than longer, less predictable ones.",
    smarterHabit:
      "Use longer passwords or passphrases that are not common or obvious.",
  },
  {
    title: "Weak Pattern: Tiny Changes",
    example: "Changing only one number or symbol when making a new password.",
    whyRisky:
      "Small changes may still leave the password predictable.",
    smarterHabit:
      "Use a unique password for each important account.",
  },
  {
    title: "Better Pattern: Longer Passphrases",
    example:
      "Using a longer fake phrase with multiple words, not based on personal details.",
    whyRisky:
      "A passphrase can still be risky if it is too obvious or reused everywhere.",
    smarterHabit:
      "Make passphrases long, unique, and not connected to private information.",
  },
];

const fakeExamples = [
  {
    label: "Weak fake example",
    example: "soccer123",
    reason:
      "It is short, common, and connected to a normal interest plus a simple number pattern.",
  },
  {
    label: "Weak fake example",
    example: "schoolname2026",
    reason:
      "It uses school information and a predictable year pattern.",
  },
  {
    label: "Stronger fake example",
    example: "BlueRiverJumpingClouds!",
    reason:
      "It is longer and less predictable, but it is still only a fake classroom example and should not be used as a real password.",
  },
  {
    label: "Stronger fake example",
    example: "PaperTigerMoonLamp47!",
    reason:
      "It is longer and uses unrelated words, but it is still only a fake classroom example and should not be used for a real account.",
  },
];

const risks = [
  {
    title: "Easy Guessing",
    text: "Passwords based on names, birthdays, schools, teams, pets, or simple patterns can be easier for others to guess.",
  },
  {
    title: "Shared Secrets",
    text: "A password stops being secret when it is shared with friends, classmates, or strangers online.",
  },
  {
    title: "False Confidence",
    text: "Adding one symbol or number does not automatically make a weak password strong if the main idea is still predictable.",
  },
];

const scenarios = [
  {
    title: "The Favorite Team Password",
    situation:
      "A student makes a password using their favorite team name and the number 123.",
    warningSigns:
      "The password is based on a known interest and a simple number pattern.",
    riskyResponse:
      "Use it because it is easy to remember and the student likes the team.",
    smarterResponse:
      "Choose something longer, less predictable, and not based on personal details.",
    whyItWorks:
      "A password should not be easy for classmates, friends, or online contacts to guess.",
  },
  {
    title: "The Birthday Password",
    situation:
      "A student uses their name and birthday as a password because they never forget it.",
    warningSigns:
      "Names and birthdays are personal details that other people may know or find.",
    riskyResponse:
      "Use it for important accounts because it is convenient.",
    smarterResponse:
      "Avoid personal details and ask a trusted adult for help creating a safer password habit.",
    whyItWorks:
      "Convenient passwords can still be risky if they are predictable.",
  },
  {
    title: "The Fake Passphrase Practice",
    situation:
      "In class, students compare fake password examples and decide which one is stronger.",
    warningSigns:
      "Students might accidentally type or discuss real passwords if the teacher does not set rules.",
    riskyResponse:
      "Use real passwords to test whether they are strong.",
    smarterResponse:
      "Use fake examples only and never type real passwords into classroom activities.",
    whyItWorks:
      "Students can learn password safety without exposing real account information.",
  },
  {
    title: "The Friend Who Wants Help",
    situation:
      "A friend asks a student to tell them their password so they can help log into an account.",
    warningSigns:
      "A password is a secret and should not be shared with friends.",
    riskyResponse:
      "Share the password because the friend is trying to help.",
    smarterResponse:
      "Do not share the password. Ask a trusted adult, teacher, guardian, or official support option for help.",
    whyItWorks:
      "Keeping passwords private protects the account and avoids confusion about who used it.",
  },
];

const actionSteps = [
  "Never type real passwords into CyberShield Academy lessons or classroom examples.",
  "Avoid using names, birthdays, school names, team names, pets, or simple number patterns.",
  "Use longer passwords or passphrases that are not obvious.",
  "Do not share passwords with friends or classmates.",
  "Use unique passwords for important accounts.",
  "Ask a trusted adult before using a password manager or changing important account settings.",
];

const reflectionQuestions = [
  "Why are personal details risky in passwords?",
  "What makes a passphrase different from a short password?",
  "Why should students use fake examples when learning password safety?",
  "Why is sharing a password with a friend still risky?",
  "When should a student ask a trusted adult for password help?",
];

const skillCheck = [
  {
    question:
      "A student wants to use their school name and birthday as a password. What is the main problem?",
    choices: [
      "It uses personal information that may be predictable",
      "It is automatically strong because it has letters and numbers",
      "It is safe as long as the student remembers it",
    ],
    answer: "Choice A",
    explanation:
      "School names and birthdays are personal details that others may know or guess.",
  },
  {
    question:
      "Which classroom password example is stronger?",
    choices: [
      "team123",
      "password1",
      "RiverCloudTigerLamp47!",
    ],
    answer: "Choice C",
    explanation:
      "The third fake example is longer and less predictable. It should still not be used as a real password.",
  },
  {
    question:
      "Why should students use fake examples in password lessons?",
    choices: [
      "So real passwords are not exposed",
      "So everyone can copy the same password",
      "So passwords become easier to guess",
    ],
    answer: "Choice A",
    explanation:
      "Real passwords should never be typed into lessons, shared in class, or entered into random websites.",
  },
  {
    question:
      "A friend asks for a student’s password to help with an account. What is the safer response?",
    choices: [
      "Share it only one time",
      "Do not share the password and ask a trusted adult or official support option for help",
      "Text the password and delete the message later",
    ],
    answer: "Choice B",
    explanation:
      "Passwords should stay private. A trusted adult or official support option is safer than sharing a login.",
  },
];

const checklist = [
  "I can explain why password strength matters.",
  "I can recognize weak password patterns.",
  "I can explain what a passphrase is.",
  "I can compare short predictable passwords with longer safer examples.",
  "I know not to type real passwords into lessons or random websites.",
  "I know when to ask a trusted adult for password help.",
];

export default function PasswordStrengthAndPassphrasesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 3 • Lesson 3.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Password Strength and Passphrases
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Passwords help protect accounts, but not all passwords are equally
          safe. This lesson teaches students how to recognize weak patterns,
          understand passphrases, and practice password safety using fake
          examples only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/passwords-accounts-and-login-safety/why-accounts-are-valuable"
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
            href="/junior/passwords-accounts-and-login-safety/password-reuse-and-account-risk"
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
              A password can be easy to remember but still too easy to guess.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student uses their favorite sport, school name, or
              birthday in a password. It feels simple and memorable, but people
              who know the student may be able to guess those details. Stronger
              password habits help protect accounts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Stronger passwords are longer, less predictable, private, and unique.
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
              Never type real passwords into this website or any classroom
              activity.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              This lesson uses fake examples only. Students should never test,
              share, write down, or display real passwords during the lesson.
              Real password help should happen with a trusted adult and official
              account tools.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Password strength is about being harder to guess.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A weak password is often short, common, reused, or based on personal
            information. Examples include names, birthdays, school names, team
            names, pets, simple numbers, or keyboard patterns. These may be easy
            to remember, but they can also be easier to guess.
          </p>

          <p>
            A passphrase is a longer password made from multiple words or a
            memorable phrase. A passphrase can be easier to remember than random
            characters while still being stronger than a short predictable
            password. However, it should not be based on private information or
            reused for every account.
          </p>

          <p>
            Passwords should also stay private. A password is not safe once it
            is shared with a friend, typed into a random website, posted in a
            chat, or used in a classroom activity. Students should use fake
            examples for learning and ask a trusted adult for real account help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding password safety.
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
          Password Pattern Lab
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Learn which password patterns are risky and which habits are safer.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {passwordPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {pattern.title}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 mb-4">
                <h4 className="font-bold text-slate-200 mb-2">Example Type</h4>
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
          <p className="text-cyan-300 font-semibold mb-3">
            Fake Example Comparison
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            These are fake classroom examples. Do not use them as real
            passwords.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {fakeExamples.map((item) => (
              <div
                key={item.example}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <p className="text-sm text-cyan-300 font-semibold mb-3">
                  {item.label}
                </p>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 mb-4">
                  <code className="text-cyan-200 break-words">
                    {item.example}
                  </code>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Risk Breakdown</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Password risk often comes from predictability, sharing, or false
          confidence.
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Smarter Choice vs Risky Choice
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Memorability should not come from obvious personal details.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
              <h3 className="text-2xl font-bold text-red-200 mb-4">
                Risky Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                A student uses their name, school, favorite team, birthday, or
                a simple number pattern because it is easy to remember.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
              <h3 className="text-2xl font-bold text-emerald-200 mb-4">
                Smarter Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                The student uses a longer, less predictable, unique password or
                passphrase and asks a trusted adult for help with real account
                password decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Practice spotting weak password habits safely.
        </h2>

        <div className="space-y-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {scenario.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Action Steps
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Use these habits when thinking about passwords and passphrases.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionSteps.map((step) => (
              <div
                key={step}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">Think before moving on.</h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">Skill Check</p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
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
                        className="rounded-lg border border-slate-800 bg-slate-900/70 p-3 text-slate-200"
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

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Before finishing Lesson 3.2, students should be able to say:
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
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 3.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 3.3 will explain why password reuse can create bigger
            account risk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/passwords-accounts-and-login-safety/why-accounts-are-valuable"
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
              href="/junior/passwords-accounts-and-login-safety/password-reuse-and-account-risk"
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