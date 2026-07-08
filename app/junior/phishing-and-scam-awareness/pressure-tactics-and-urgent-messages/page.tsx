import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what pressure tactics are",
  "Recognize urgency, fear, excitement, and scarcity in suspicious messages",
  "Understand why rushing can lead to unsafe choices",
  "Practice slowing down before clicking, replying, downloading, or sharing",
  "Know when to ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Pressure Tactic",
    definition:
      "A trick that tries to make someone act quickly, emotionally, or without thinking carefully.",
  },
  {
    term: "Urgency",
    definition:
      "A feeling that something must be done immediately, even when pausing would be safer.",
  },
  {
    term: "Scarcity",
    definition:
      "A message tactic that says something is limited, rare, or almost gone to make someone rush.",
  },
  {
    term: "Fear Tactic",
    definition:
      "A message that tries to scare someone into clicking, replying, paying, or sharing information.",
  },
  {
    term: "Reward Tactic",
    definition:
      "A message that promises a prize, upgrade, money, gift card, rare item, or special access.",
  },
  {
    term: "Pause Rule",
    definition:
      "A safety habit where students stop and think before reacting to urgent, scary, exciting, or suspicious messages.",
  },
];

const tacticTypes = [
  {
    title: "Urgency",
    example:
      "Act now or your account will close today.",
    risk:
      "The message pushes the student to move quickly before checking if it is real.",
    saferThought:
      "Urgency is a reason to pause, not a reason to rush.",
  },
  {
    title: "Fear",
    example:
      "You are in trouble unless you click this link immediately.",
    risk:
      "The message uses worry or panic to make the student click or reply.",
    saferThought:
      "A scary message should be shown to a trusted adult before any action.",
  },
  {
    title: "Excitement",
    example:
      "You won a free prize, but you must claim it in the next five minutes.",
    risk:
      "The message uses excitement to make the student ignore warning signs.",
    saferThought:
      "Unexpected prizes and rewards should be checked through official sources.",
  },
  {
    title: "Scarcity",
    example:
      "Only three spots are left. Send your information now.",
    risk:
      "The message makes the student feel like they will miss out if they slow down.",
    saferThought:
      "Missing out is better than sharing private information with a suspicious message.",
  },
];

const warningSigns = [
  {
    title: "Countdowns",
    text: "The message uses a timer, deadline, or countdown to make the student hurry.",
  },
  {
    title: "Threats",
    text: "The message says an account will be deleted, locked, banned, or reported unless the student acts.",
  },
  {
    title: "Big Rewards",
    text: "The message promises a prize, rare item, gift card, money, or special access that seems too easy.",
  },
  {
    title: "Secret Instructions",
    text: "The message tells the student not to tell parents, teachers, or other trusted adults.",
  },
  {
    title: "Private Information Requests",
    text: "The message asks for passwords, login codes, reset codes, addresses, school information, or personal details.",
  },
  {
    title: "Emotional Push",
    text: "The message tries to make the student feel scared, excited, guilty, embarrassed, or rushed.",
  },
];

const scenarios = [
  {
    title: "The Account Deletion Warning",
    situation:
      "A student gets a message saying their account will be deleted in one hour unless they click a link and sign in.",
    warningSigns:
      "The message uses fear, urgency, and a link that asks for account access.",
    riskyResponse:
      "Click the link and sign in quickly to save the account.",
    smarterResponse:
      "Do not click the link. Check the account through the official app or website with trusted adult help.",
    whyItWorks:
      "Real account concerns should be handled through official tools, not rushed message links.",
  },
  {
    title: "The Limited Prize",
    situation:
      "A message says the student won a gift card, but only if they reply with personal information before the timer ends.",
    warningSigns:
      "The message uses excitement, scarcity, and a request for personal information.",
    riskyResponse:
      "Reply quickly before the prize disappears.",
    smarterResponse:
      "Do not send personal information. Show the message to a trusted adult.",
    whyItWorks:
      "Unexpected prizes that require private information are strong scam warning signs.",
  },
  {
    title: "The Secret Help Request",
    situation:
      "Someone says they are support staff and tells the student to keep the message secret while sending a login code.",
    warningSigns:
      "The message asks for a private login code and tells the student not to tell anyone.",
    riskyResponse:
      "Send the code because the person says they are helping.",
    smarterResponse:
      "Do not share the code. Stop responding and ask a trusted adult for help.",
    whyItWorks:
      "Login codes should stay private, and pressure to keep secrets is a major warning sign.",
  },
  {
    title: "The Embarrassing Threat",
    situation:
      "A message says embarrassing information will be shared unless the student clicks a link or replies immediately.",
    warningSigns:
      "The message uses fear, embarrassment, and pressure to force a fast reaction.",
    riskyResponse:
      "Click or reply quickly because the message feels scary.",
    smarterResponse:
      "Do not click or reply. Save the message if possible and tell a trusted adult right away.",
    whyItWorks:
      "Threatening messages should not be handled alone. Trusted adults can help students stay safe.",
  },
];

const actionSteps = [
  "Pause when a message feels urgent, scary, exciting, secret, or too good to be true.",
  "Do not click links just because a message has a deadline.",
  "Do not share passwords, login codes, reset codes, or personal information because of pressure.",
  "Use official apps or websites instead of message links.",
  "Save the message if a trusted adult asks to see it.",
  "Ask a trusted adult before reacting to threats, prizes, account warnings, or secret instructions.",
];

const reflectionQuestions = [
  "Why do scam messages use urgency?",
  "Why is fear a powerful pressure tactic?",
  "Why can excitement make people ignore warning signs?",
  "What should a student do if a message says to keep something secret?",
  "Why is pausing a safer response than rushing?",
];

const skillCheck = [
  {
    question:
      "A message says an account will be deleted in one hour unless the student clicks a link. What pressure tactic is being used?",
    choices: [
      "Urgency and fear",
      "A normal reminder",
      "A trusted school announcement",
    ],
    answer: "Choice A",
    explanation:
      "The message creates pressure by using a deadline and fear of losing the account.",
  },
  {
    question:
      "A message says the student won a prize but must send personal information quickly. What is the safer response?",
    choices: [
      "Send the information before the timer ends",
      "Do not send personal information and ask a trusted adult",
      "Post the message publicly to claim the prize",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected prizes that ask for private information are suspicious, especially when they create urgency.",
  },
  {
    question:
      "Why is a message saying 'do not tell an adult' a warning sign?",
    choices: [
      "It pressures the student to stay isolated from trusted help",
      "It makes the message automatically safe",
      "It means the message is from a teacher",
    ],
    answer: "Choice A",
    explanation:
      "Pressure to keep secrets from trusted adults is a major warning sign.",
  },
  {
    question:
      "What is the best first step when a message feels scary or urgent?",
    choices: [
      "Click immediately",
      "Pause and ask a trusted adult before acting",
      "Reply with the requested code",
    ],
    answer: "Choice B",
    explanation:
      "Pausing helps students avoid reacting emotionally to pressure tactics.",
  },
];

const checklist = [
  "I can explain what pressure tactics are.",
  "I can recognize urgency, fear, excitement, and scarcity.",
  "I can explain why rushing can be risky.",
  "I can avoid sharing private information because of pressure.",
  "I can use official apps or websites instead of urgent message links.",
  "I know when to ask a trusted adult for help.",
];

export default function PressureTacticsAndUrgentMessagesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Pressure Tactics and Urgent Messages
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Scam and phishing messages often try to make students act fast by
          using urgency, fear, excitement, scarcity, or secrecy. This lesson
          teaches students to slow down before clicking, replying, downloading,
          scanning, or sharing information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/suspicious-links-and-attachments"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 4
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness/fake-giveaways-and-too-good-to-be-true-offers"
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
              A message that says “act now” may be trying to stop students from
              thinking clearly.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a message saying their account will be
              deleted, they won a prize, or they must reply in five minutes.
              Those feelings are part of the trick. The safer choice is to
              pause.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Pressure tactics try to make students react before they think.
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
              Do not let urgency decide for you.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click real suspicious links, reply to threatening messages, or
              share private information because a message feels urgent or scary.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pressure tactics are designed to rush decision-making.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Pressure tactics are tricks that try to make someone act quickly or
            emotionally. A message may say an account will be deleted, a prize
            will disappear, a secret must be kept, or the student will get in
            trouble unless they act right away.
          </p>

          <p>
            These tactics work because feelings can overpower careful thinking.
            Fear can make students want to click fast. Excitement can make a
            reward seem real. Scarcity can make students feel like they will miss
            out. Secrecy can stop them from asking for help.
          </p>

          <p>
            The safest habit is to pause. Students can avoid clicking links,
            avoid replying with private information, avoid sharing codes, use
            official apps or websites, and ask a trusted adult before acting on
            urgent or emotional messages.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding pressure tactics.
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
          Pressure Tactic Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Suspicious messages may use different emotional pushes.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {tacticTypes.map((tactic) => (
            <div
              key={tactic.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {tactic.title}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 mb-4">
                <h4 className="font-bold text-slate-200 mb-2">Fake Example</h4>
                <p className="text-slate-300 leading-relaxed">
                  {tactic.example}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Why Risky</h4>
                <p className="text-slate-200 leading-relaxed">
                  {tactic.risk}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Thought
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {tactic.saferThought}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Warning Signs</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Pressure messages often include these clues.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign) => (
              <div
                key={sign.title}
                className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-yellow-100 mb-3">
                  {sign.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{sign.text}</p>
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
          A message that rushes you deserves extra caution.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks, replies, shares information, or sends a code
              because a message feels urgent, scary, exciting, or secret.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks warning signs, avoids sharing private
              information, uses official tools, and asks a trusted adult for
              help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice slowing down when a message creates pressure.
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
          Use these habits when a message tries to rush you.
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
          Before finishing Lesson 4.3, students should be able to say:
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
            Lesson 4.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 4.4 will explain fake giveaways and too-good-to-be-true
            offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/suspicious-links-and-attachments"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 4
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness/fake-giveaways-and-too-good-to-be-true-offers"
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