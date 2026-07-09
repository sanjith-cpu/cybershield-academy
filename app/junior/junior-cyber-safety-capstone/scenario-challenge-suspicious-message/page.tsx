import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Recognize common warning signs in suspicious messages",
  "Explain why urgent messages should be checked before acting",
  "Practice safer responses to fake account alerts, prize messages, and stranger messages",
  "Use trusted sources instead of clicking message links",
  "Know when to ask a trusted adult for help with suspicious messages",
];

const vocabulary = [
  {
    term: "Suspicious Message",
    definition:
      "A message that may be fake, unsafe, misleading, or designed to pressure someone into clicking, sharing, downloading, or replying.",
  },
  {
    term: "Urgency",
    definition:
      "Pressure that makes someone feel they must act immediately, often before they have time to think or ask for help.",
  },
  {
    term: "Verification",
    definition:
      "Checking information through a trusted source before believing a message or taking action.",
  },
  {
    term: "Official Source",
    definition:
      "The real app, website, teacher, school tool, organization, or trusted adult that can confirm whether a message is real.",
  },
  {
    term: "Private Information",
    definition:
      "Information that should be protected, such as passwords, login codes, location, school details, account information, or personal details.",
  },
  {
    term: "Safe Report",
    definition:
      "A careful report made through a trusted app, school process, or adult helper without replying to or interacting with the suspicious message.",
  },
];

const messageSituations = [
  {
    title: "Account Warning Message",
    explanation:
      "A message claims an account will be locked unless the student clicks a link or shares a login code.",
    saferChoice:
      "Do not click the link or share codes. Check the account through the official app or website with trusted adult help.",
  },
  {
    title: "Prize or Reward Message",
    explanation:
      "A message says the student won a free gift card, game reward, or special prize and must respond quickly.",
    saferChoice:
      "Pause and treat unexpected rewards carefully. Do not enter personal information or download anything from the message.",
  },
  {
    title: "Stranger Direct Message",
    explanation:
      "An unfamiliar person sends a friendly message, asks personal questions, or wants the student to move to another app.",
    saferChoice:
      "Do not share personal information or move the conversation. Block, report, or ask a trusted adult when needed.",
  },
  {
    title: "School or Team Message",
    explanation:
      "A message looks like it is from a school, class, club, or team, but the sender or link feels unusual.",
    saferChoice:
      "Verify through the teacher, coach, official school tool, or trusted adult instead of clicking the message link.",
  },
];

const warningSigns = [
  {
    title: "Urgent Deadline",
    text: "The message says the student must act immediately or something bad will happen.",
  },
  {
    title: "Private Information Request",
    text: "The message asks for passwords, login codes, account details, location, school information, or personal details.",
  },
  {
    title: "Unexpected Link",
    text: "The message includes a link the student was not expecting or does not recognize.",
  },
  {
    title: "Too Good to Be True",
    text: "The message promises a prize, reward, free item, upgrade, or special access for almost no effort.",
  },
  {
    title: "Unknown Sender",
    text: "The message comes from someone the student does not know or from an account that looks unusual.",
  },
  {
    title: "Pressure to Keep Quiet",
    text: "The message tells the student not to tell parents, teachers, friends, or other trusted adults.",
  },
];

const scenarios = [
  {
    title: "The Locked Account Message",
    situation:
      "A student gets a message saying, 'Your account will be locked today. Click this link and enter your login code to keep access.'",
    warningSigns:
      "The message creates urgency, uses a link, and asks for a login code.",
    riskyResponse:
      "Click the link and enter the code because the student does not want to lose the account.",
    smarterResponse:
      "Do not click the link or share the code. Open the official app or website separately and ask a trusted adult for help checking the alert.",
    whyItWorks:
      "Login codes should be protected. Official sources and trusted adult help are safer than reacting to an urgent message.",
  },
  {
    title: "The Free Gift Card Message",
    situation:
      "A student receives a message saying they won a free gift card and must fill out a form with their name, school, phone number, and email.",
    warningSigns:
      "The message offers an unexpected reward and asks for personal information.",
    riskyResponse:
      "Fill out the form quickly because the prize might disappear.",
    smarterResponse:
      "Pause, do not enter personal information, and ask a trusted adult before responding to any unexpected prize message.",
    whyItWorks:
      "Unexpected rewards can be used to pressure students into sharing private information. Pausing protects privacy.",
  },
  {
    title: "The New Follower Direct Message",
    situation:
      "A new follower messages a student, compliments them, and asks what school they go to and where they live nearby.",
    warningSigns:
      "The sender is unfamiliar and asks personal location and school questions.",
    riskyResponse:
      "Answer the questions because the person seems friendly.",
    smarterResponse:
      "Do not share personal details. Stop replying, block or report if needed, and tell a trusted adult if the message feels uncomfortable.",
    whyItWorks:
      "Friendly messages can still be unsafe when they ask for private details. Students do not need to continue uncomfortable conversations.",
  },
  {
    title: "The Fake Club Announcement",
    situation:
      "A message says a school club meeting moved to a new location and tells students to click a link to confirm attendance.",
    warningSigns:
      "The message claims to be school-related, but the sender is unfamiliar and the link was unexpected.",
    riskyResponse:
      "Click the link because it sounds like a real school update.",
    smarterResponse:
      "Check with the teacher, club sponsor, school platform, or trusted adult instead of clicking the link.",
    whyItWorks:
      "Even messages that look school-related should be verified through trusted sources when something feels unusual.",
  },
];

const actionSteps = [
  "Pause before clicking links in unexpected messages.",
  "Do not share passwords, login codes, private information, or location details through messages.",
  "Check urgent account messages through the official app or website instead of message links.",
  "Ask a trusted adult before responding to messages that feel scary, confusing, secretive, or too good to be true.",
  "Block or report suspicious messages when appropriate, using safe app or school reporting tools.",
  "Save evidence with trusted adult guidance if a message is threatening, harmful, repeated, or important to report.",
];

const reflectionQuestions = [
  "What warning signs can make a message suspicious?",
  "Why should students avoid clicking unexpected message links?",
  "Why should login codes and passwords never be shared through messages?",
  "Who can help verify whether a message is real?",
  "What should students do if a message asks them to keep something secret from trusted adults?",
];

const skillCheck = [
  {
    question:
      "A message says an account will be locked unless a student clicks a link and enters a login code. What is the safer response?",
    choices: [
      "Click the link and enter the code quickly",
      "Do not click the link, protect the code, and check through the official app or trusted adult",
      "Forward the message to classmates",
    ],
    answer: "Choice B",
    explanation:
      "Urgent messages asking for login codes are warning signs. Students should protect codes and verify through official sources with trusted help.",
  },
  {
    question:
      "A message says a student won a prize but needs personal information first. What is the warning sign?",
    choices: [
      "It offers an unexpected reward and asks for private details",
      "It uses friendly words",
      "It arrives during the day",
    ],
    answer: "Choice A",
    explanation:
      "Unexpected rewards can pressure students to share personal information. Students should pause and ask for help.",
  },
  {
    question:
      "An unfamiliar person asks a student what school they go to and where they live. What should the student do?",
    choices: [
      "Answer because the person seems nice",
      "Share only part of the information",
      "Do not share personal details and ask a trusted adult if needed",
    ],
    answer: "Choice C",
    explanation:
      "School and location details are private. Students should not share them with unfamiliar people online.",
  },
  {
    question:
      "What is a good rule for suspicious messages?",
    choices: [
      "Click first and check later",
      "Pause, verify through trusted sources, and ask for help when unsure",
      "Reply to prove the message is fake",
    ],
    answer: "Choice B",
    explanation:
      "Safe message habits include pausing, verifying, avoiding risky actions, and getting trusted help.",
  },
];

const checklist = [
  "I can identify warning signs in suspicious messages.",
  "I can explain why urgent messages should not control my choices.",
  "I know not to share passwords, login codes, location, or private information through messages.",
  "I can verify messages through official sources or trusted adults.",
  "I can choose safer responses to fake account alerts, prize messages, stranger messages, and unusual school messages.",
  "I know not to test suspicious message links for practice.",
];

export default function ScenarioChallengeSuspiciousMessagePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Scenario Challenge: Suspicious Message
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Suspicious messages can pressure students to click links, share
          private information, reply to strangers, or act quickly. This lesson
          helps students practice safer decisions using fake suspicious message
          scenarios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/building-a-personal-cyber-safety-plan"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/junior-cyber-safety-capstone"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 12
          </Link>

          <Link
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-unsafe-website-or-download"
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
              A message can look normal but still deserve a pause.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student gets a message saying their account will be
              locked, they won a prize, or someone wants to know personal
              details. The safest response is not to panic or click quickly. It
              is to pause, check warning signs, and ask for help when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Suspicious messages are easier to handle when students know the safe
          response pattern.
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
              Do not click or test suspicious message links.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real suspicious messages, click unknown links, reply to
              strangers, share login codes, enter personal information, or
              download files from messages for practice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Suspicious messages often try to rush students into unsafe choices.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Messages can arrive through texts, email, school tools, social
            media, games, group chats, or direct messages. Many messages are
            normal, but some can be fake, misleading, or unsafe. A suspicious
            message may ask students to click a link, enter account information,
            share a login code, download something, or answer personal
            questions.
          </p>

          <p>
            A strong warning sign is pressure. Suspicious messages may say an
            account will be locked, a prize will disappear, a problem must be
            fixed immediately, or the student should keep the message secret.
            Pressure makes people react quickly instead of checking carefully.
          </p>

          <p>
            Students do not need to prove whether a suspicious message is real
            by clicking it. A safer response is to pause, avoid interacting with
            the message, check through official sources, block or report when
            appropriate, and ask a trusted adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for handling suspicious messages.
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
          Suspicious Message Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different message situations can use the same safe response pattern.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {messageSituations.map((item) => (
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
                  Safer Choice
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {item.saferChoice}
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
            Suspicious messages often include clues that students should pause.
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
          Students should not let a message control their next action.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks quickly, shares a login code, fills out a form,
              replies to a stranger, downloads a file, or keeps the message
              secret because the message pressures them.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids clicking or replying, protects private
              information, checks through trusted sources, and asks a trusted
              adult for support when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice suspicious message decisions using fake examples.
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
          Use these steps when a message feels suspicious.
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
          Before finishing Lesson 12.2, students should be able to say:
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
            Lesson 12.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 12.3 will use an unsafe website or download scenario to
            practice safer decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/building-a-personal-cyber-safety-plan"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/junior-cyber-safety-capstone"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 12
            </Link>

            <Link
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-unsafe-website-or-download"
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