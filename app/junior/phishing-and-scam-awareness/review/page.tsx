import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Phishing tries to trick people.",
    text: "Students learned that phishing messages, fake pages, or suspicious accounts may pretend to be trustworthy so someone clicks, replies, downloads, scans, or shares private information.",
  },
  {
    title: "Suspicious links and attachments deserve a pause.",
    text: "Students learned to avoid clicking random links, opening unknown attachments, downloading unknown files, or scanning random QR codes for practice.",
  },
  {
    title: "Pressure tactics rush decisions.",
    text: "Students learned that urgency, fear, excitement, scarcity, secrecy, and threats can push people to act before thinking.",
  },
  {
    title: "Fake giveaways can hide risk.",
    text: "Students learned that fake prizes, game rewards, gift cards, rare items, and free upgrades may be used to collect information or account access.",
  },
  {
    title: "Reporting, blocking, and asking for help are safety skills.",
    text: "Students learned that they do not need to investigate suspicious messages alone. Safer choices include pausing, not engaging, blocking, reporting, and asking trusted adults for help.",
  },
];

const vocabularyReview = [
  {
    term: "Phishing",
    definition:
      "A trick where a message, website, or person pretends to be trustworthy so someone shares information, clicks something, or gives account access.",
  },
  {
    term: "Suspicious Link",
    definition:
      "A link that seems unexpected, confusing, urgent, unfamiliar, shortened, misspelled, or connected to a risky request.",
  },
  {
    term: "Attachment",
    definition:
      "A file included with a message, such as a document, image, slide, video, or compressed file.",
  },
  {
    term: "Pressure Tactic",
    definition:
      "A trick that tries to make someone act quickly, emotionally, or without thinking carefully.",
  },
  {
    term: "Fake Giveaway",
    definition:
      "A message, post, or page that promises a prize or reward but is really trying to trick someone.",
  },
  {
    term: "Report",
    definition:
      "Using an app, website, school tool, or trusted adult to let the right people know about suspicious, harmful, or unsafe activity.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Free Game Reward",
    situation:
      "A student gets a message saying they won free game currency and must sign in through a link.",
    risk:
      "The message is unexpected, exciting, and pushes a login through a random link.",
    smarterChoice:
      "Do not click the link. Check the official game app or website with trusted adult help if needed.",
  },
  {
    title: "Scenario 2: The Unknown File",
    situation:
      "A student receives an attachment that claims to be a homework file, but it comes from an unfamiliar sender.",
    risk:
      "The file is unexpected and the sender does not look trusted.",
    smarterChoice:
      "Do not open the file. Ask the teacher, guardian, or school technology staff member to confirm it.",
  },
  {
    title: "Scenario 3: The Urgent Account Warning",
    situation:
      "A message says an account will be deleted in one hour unless the student clicks a link.",
    risk:
      "The message uses fear, urgency, and a link to pressure the student.",
    smarterChoice:
      "Do not click the link. Use the official app or website with trusted adult help.",
  },
  {
    title: "Scenario 4: The Too-Good-To-Be-True Prize",
    situation:
      "A message says the student won a gift card and must provide personal information to claim it.",
    risk:
      "The reward is unexpected and asks for private information.",
    smarterChoice:
      "Do not fill out the form. Ask a trusted adult to help check whether the offer is real.",
  },
  {
    title: "Scenario 5: The Suspicious Sender",
    situation:
      "A suspicious account keeps sending prize links and asks the student to reply.",
    risk:
      "Replying can keep the conversation going and create more pressure.",
    smarterChoice:
      "Do not engage. Block or report when appropriate and ask a trusted adult for help.",
  },
];

const saferResponseQuestions = [
  {
    question:
      "A message says a student won free game currency and must sign in through a link. What is the safer response?",
    choices: [
      "Click the link and sign in quickly",
      "Do not click the link and check through official tools with trusted help",
      "Share the link with classmates so everyone can try it",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected reward links can be phishing attempts. Official apps or websites are safer than random message links.",
  },
  {
    question:
      "A student receives an unexpected attachment from an unfamiliar sender. What should they do?",
    choices: [
      "Open it to see what it is",
      "Avoid opening it and ask a trusted adult or teacher",
      "Download it and forward it to friends",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected attachments can be risky. Students should ask trusted help before opening unknown files.",
  },
  {
    question:
      "A message says an account will be deleted in one hour unless the student clicks a link. What tactic is being used?",
    choices: [
      "Urgency and fear",
      "A normal reminder",
      "A safe classroom update",
    ],
    answer: "Choice A",
    explanation:
      "The message uses a deadline and fear to pressure the student to click before thinking.",
  },
  {
    question:
      "A prize form asks for a student’s name, school, phone number, and address. What is the warning sign?",
    choices: [
      "It asks for personal information",
      "It has a form",
      "It mentions a prize",
    ],
    answer: "Choice A",
    explanation:
      "Students should be careful when a reward requires personal information, especially when the prize was unexpected.",
  },
  {
    question:
      "A suspicious account keeps sending messages. What is the safer response?",
    choices: [
      "Keep replying until the sender stops",
      "Click the link to prove whether it is fake",
      "Do not engage, block or report when appropriate, and ask a trusted adult for help",
    ],
    answer: "Choice C",
    explanation:
      "Students do not need to investigate suspicious messages. Blocking, reporting, and trusted help are safer.",
  },
];

const reflectionQuestions = [
  "What does phishing mean?",
  "Why should suspicious links, attachments, downloads, and QR codes create a pause?",
  "How do pressure tactics try to make students rush?",
  "Why are unexpected prizes and free rewards warning signs?",
  "Why is it risky to argue with suspicious senders?",
  "Who could a student ask for help if a message feels scary, urgent, secret, or confusing?",
];

const finalChecklist = [
  "I can explain what phishing means.",
  "I can recognize suspicious links, attachments, downloads, and QR codes.",
  "I can identify urgency, fear, excitement, scarcity, secrecy, and threats.",
  "I can explain why fake giveaways and too-good-to-be-true offers can be risky.",
  "I can avoid sharing passwords, login codes, reset codes, and personal information in suspicious messages.",
  "I can choose not to click, reply, download, scan, or share when something feels suspicious.",
  "I can block or report suspicious messages when appropriate.",
  "I know when to ask a trusted adult, teacher, guardian, counselor, coach, librarian, or school technology staff member for help.",
];

const badgeSkills = [
  "Phishing awareness",
  "Suspicious link safety",
  "Attachment caution",
  "Pressure tactic recognition",
  "Fake offer detection",
  "Safe reporting and blocking",
];

export default function PhishingAndScamAwarenessReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Phishing and Scam Awareness Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 4: Phishing and Scam Awareness.
          Students will review phishing warning signs, suspicious links,
          attachments, pressure tactics, fake giveaways, reporting, blocking,
          and asking for trusted help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/reporting-blocking-and-asking-for-help"
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
            Module 4 taught students how to pause before suspicious messages
            turn into risky actions.
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
          Review the key phishing and scam awareness words from this module.
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
              Think about how Module 4 connects to real life.
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
              Scam Spotter
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can recognize phishing warning signs,
              pause before suspicious links or attachments, identify pressure
              tactics, avoid fake offers, and ask for help when suspicious
              messages appear.
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
          Final Module 4 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 4, students should be able to say:
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
              Module 4 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Phishing and Scam Awareness.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module,
              where they will keep building safer digital decision-making skills
              through real-life scenarios and defensive habits.
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
            Module 4 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 4 or return to the Junior
            learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/reporting-blocking-and-asking-for-help"
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