import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain when a suspicious message should be reported",
  "Understand why blocking can help stop unwanted contact",
  "Know why students should not argue with suspicious senders",
  "Practice asking trusted adults for help",
  "Choose safer responses when a scam or phishing message appears",
];

const vocabulary = [
  {
    term: "Report",
    definition:
      "Using an app, website, school tool, or trusted adult to let the right people know about suspicious, harmful, or unsafe activity.",
  },
  {
    term: "Block",
    definition:
      "A feature that can stop or limit messages, calls, comments, or contact from another account.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, librarian, or school technology staff member who can help students make safer choices.",
  },
  {
    term: "Evidence",
    definition:
      "Information that helps explain what happened, such as the message, sender name, time, screenshot, or link preview. Students should only save evidence with trusted adult guidance.",
  },
  {
    term: "Escalate",
    definition:
      "To ask for more help when a situation feels unsafe, confusing, threatening, or too serious to handle alone.",
  },
  {
    term: "Do Not Engage",
    definition:
      "A safety habit where students avoid replying, arguing, clicking, sending codes, or continuing a suspicious conversation.",
  },
];

const responseOptions = [
  {
    title: "Pause",
    explanation:
      "Stopping for a moment gives students time to think instead of reacting to pressure.",
    saferChoice:
      "Pause before clicking, replying, downloading, scanning, or sharing.",
  },
  {
    title: "Do Not Engage",
    explanation:
      "Replying to suspicious messages can keep the conversation going or give the sender more chances to pressure the student.",
    saferChoice:
      "Do not argue, negotiate, explain, or send private information.",
  },
  {
    title: "Block",
    explanation:
      "Blocking can help stop repeated unwanted messages from the same account.",
    saferChoice:
      "Block suspicious or unwanted contacts when appropriate, with trusted adult help if needed.",
  },
  {
    title: "Report",
    explanation:
      "Reporting helps the app, school, platform, or trusted adults know that something unsafe may be happening.",
    saferChoice:
      "Report suspicious messages through official tools or show them to a trusted adult.",
  },
  {
    title: "Ask for Help",
    explanation:
      "Some messages are too confusing, urgent, scary, or personal for students to handle alone.",
    saferChoice:
      "Ask a trusted adult, teacher, guardian, counselor, or school technology staff member.",
  },
];

const warningSigns = [
  {
    title: "Repeated Messages",
    text: "The sender keeps messaging after the student does not respond.",
  },
  {
    title: "Requests for Private Information",
    text: "The message asks for passwords, login codes, reset codes, personal details, school information, or account access.",
  },
  {
    title: "Threats or Fear",
    text: "The message tries to scare, embarrass, pressure, or threaten the student into acting.",
  },
  {
    title: "Fake Support",
    text: "The sender pretends to be support staff and asks for private account information.",
  },
  {
    title: "Suspicious Links or Files",
    text: "The message pushes the student to click a link, open an attachment, scan a code, or download something.",
  },
  {
    title: "Secrecy",
    text: "The message says not to tell a parent, teacher, guardian, counselor, or other trusted adult.",
  },
];

const scenarios = [
  {
    title: "The Repeated Scam Message",
    situation:
      "A student keeps getting messages from an account promising a free prize if they click a link.",
    warningSigns:
      "The message is repeated, promises a reward, and pushes a link.",
    riskyResponse:
      "Reply angrily and click the link to prove it is fake.",
    smarterResponse:
      "Do not engage. Block or report the account if appropriate and ask a trusted adult for help.",
    whyItWorks:
      "Students do not need to investigate suspicious messages. Blocking, reporting, and trusted help are safer.",
  },
  {
    title: "The Fake Support Account",
    situation:
      "An account claims to be support staff and asks a student to send a login code to fix an account problem.",
    warningSigns:
      "The sender asks for a private login code and claims to be support.",
    riskyResponse:
      "Send the code so the account problem can be fixed quickly.",
    smarterResponse:
      "Do not send the code. Stop responding, report the account if possible, and check official support with trusted adult help.",
    whyItWorks:
      "Login codes should stay private. Official support should be reached through real app or website tools.",
  },
  {
    title: "The Threatening Message",
    situation:
      "A message says something bad will happen unless the student clicks a link or replies immediately.",
    warningSigns:
      "The message uses fear, pressure, and urgency.",
    riskyResponse:
      "Click or reply because the message feels scary.",
    smarterResponse:
      "Do not click or reply. Tell a trusted adult right away and follow their guidance.",
    whyItWorks:
      "Threatening messages should not be handled alone. Trusted adults can help students decide what to do next.",
  },
  {
    title: "The Suspicious School File",
    situation:
      "A student receives a file that claims to be from school, but the sender is unfamiliar and the teacher never mentioned it.",
    warningSigns:
      "The file is unexpected and the sender does not look trusted.",
    riskyResponse:
      "Open the file because it might be important.",
    smarterResponse:
      "Do not open it. Ask the teacher or school technology staff member to confirm whether it is real.",
    whyItWorks:
      "Checking with a trusted source prevents students from opening unknown files just because they seem school-related.",
  },
];

const actionSteps = [
  "Pause before replying, clicking, downloading, scanning, or sharing.",
  "Do not argue with suspicious accounts or try to prove a scam is fake.",
  "Do not share passwords, login codes, reset codes, or personal information.",
  "Block unwanted or suspicious contacts when appropriate.",
  "Report suspicious messages using official tools or trusted adult help.",
  "Ask a trusted adult immediately if a message feels threatening, secret, scary, confusing, or too serious to handle alone.",
];

const reflectionQuestions = [
  "Why should students avoid arguing with suspicious senders?",
  "When might blocking be useful?",
  "Why can reporting help?",
  "Who are trusted adults a student could ask for help?",
  "What should a student do if a suspicious message feels scary or threatening?",
];

const skillCheck = [
  {
    question:
      "A suspicious account keeps sending prize links. What is the safer response?",
    choices: [
      "Reply angrily and click the link to check it",
      "Do not engage, block or report if appropriate, and ask a trusted adult for help",
      "Send the link to classmates so everyone can test it",
    ],
    answer: "Choice B",
    explanation:
      "Students should not investigate suspicious links. Blocking, reporting, and asking for help are safer choices.",
  },
  {
    question:
      "A fake support account asks for a login code. What should the student do?",
    choices: [
      "Send the code quickly",
      "Post the code publicly so support can see it",
      "Do not send the code and use official support with trusted adult help",
    ],
    answer: "Choice C",
    explanation:
      "Login codes are private. Students should not share them in messages, even if someone claims to be support.",
  },
  {
    question:
      "Why is replying to a suspicious sender risky?",
    choices: [
      "It can keep the conversation going and create more pressure",
      "It always makes the sender stop",
      "It proves the message is safe",
    ],
    answer: "Choice A",
    explanation:
      "Continuing a suspicious conversation can give the sender more chances to pressure, confuse, or trick the student.",
  },
  {
    question:
      "A message feels threatening and tells the student not to tell anyone. What is the safer response?",
    choices: [
      "Handle it alone because the message says to keep it secret",
      "Tell a trusted adult right away",
      "Click the link to make the message go away",
    ],
    answer: "Choice B",
    explanation:
      "Threatening or secret messages should not be handled alone. A trusted adult can help the student stay safe.",
  },
];

const checklist = [
  "I can explain when a suspicious message should be reported.",
  "I can explain why blocking may help stop unwanted contact.",
  "I can avoid arguing with suspicious senders.",
  "I can avoid sharing private information with suspicious accounts.",
  "I can ask a trusted adult for help with scary, urgent, confusing, or secret messages.",
  "I can choose a safer response when a scam or phishing message appears.",
];

export default function ReportingBlockingAndAskingForHelpPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Reporting, Blocking, and Asking for Help
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          When a suspicious message appears, students do not need to handle it
          alone. This lesson teaches safer response habits: pause, do not engage,
          block when appropriate, report when needed, and ask a trusted adult for
          help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/fake-giveaways-and-too-good-to-be-true-offers"
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
            href="/junior/phishing-and-scam-awareness/review"
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
              The safest response is not always to reply.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a suspicious message that feels urgent,
              scary, or too good to be true. Replying can make the situation
              worse. A safer plan is to pause, avoid engaging, and get trusted
              help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Reporting, blocking, and asking for help are safety skills.
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
              Do not investigate suspicious messages alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click suspicious links, open unknown attachments, reply to threats,
              share private information, or test scam messages by themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Students can respond safely without trying to “solve” the scam.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Suspicious messages often try to start a reaction. They may ask the
            student to reply, click, send a code, download a file, scan a QR
            code, or keep the message secret. A safer response is to pause and
            avoid engaging with the sender.
          </p>

          <p>
            Blocking can help stop repeated unwanted contact. Reporting can help
            platforms, schools, or trusted adults understand that something
            suspicious happened. Asking for help is important because students
            should not have to decide alone when a message feels scary,
            confusing, personal, or urgent.
          </p>

          <p>
            Different situations need different help. A teacher or school
            technology staff member may help with school messages. A parent or
            guardian may help with accounts, games, apps, or devices. A
            counselor, coach, librarian, or another trusted adult can also help
            students figure out the next safe step.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for safe response choices.
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
          Safe Response Options
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students have safer choices than clicking or replying.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {responseOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {option.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {option.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Choice
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {option.saferChoice}
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
            These are signs that students should stop and get help.
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
          Students do not need to keep suspicious messages going.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student replies to a suspicious account, argues with the sender,
              clicks a link to test it, or shares information because the
              message feels urgent.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids engaging, blocks or reports when
              appropriate, and asks a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice choosing safer responses to suspicious messages.
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
          Use these habits when suspicious messages appear.
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
          Before finishing Lesson 4.5, students should be able to say:
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
            Lesson 4.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 4.6 will review phishing, suspicious links, pressure
            tactics, fake offers, reporting, blocking, and asking for help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/fake-giveaways-and-too-good-to-be-true-offers"
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
              href="/junior/phishing-and-scam-awareness/review"
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