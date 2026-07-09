import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonRecap = [
  {
    number: "12.1",
    title: "Building a Personal Cyber Safety Plan",
    text: "Students built a personal cyber safety plan that connects account safety, privacy, communication, browsing, devices, reporting, and trusted adult support.",
  },
  {
    number: "12.2",
    title: "Scenario Challenge: Suspicious Message",
    text: "Students practiced pausing before clicking, checking warning signs, avoiding suspicious links or attachments, saving useful details safely, and asking a trusted adult for help.",
  },
  {
    number: "12.3",
    title: "Scenario Challenge: Unsafe Website or Download",
    text: "Students practiced safer choices when a website, pop-up, file, app, browser warning, or download request feels risky, confusing, urgent, or too good to be true.",
  },
  {
    number: "12.4",
    title: "Scenario Challenge: Privacy, Reputation, and Communication",
    text: "Students practiced thinking before posting, sharing screenshots, reacting in group chats, sending photos, or joining online conflict that could affect privacy and reputation.",
  },
  {
    number: "12.5",
    title: "Cyber Safety Reflection and Goal Setting",
    text: "Students reflected on their strongest cyber safety habits, identified areas to improve, and chose realistic goals for safer online decisions at home, school, and with friends.",
  },
];

const reviewGoals = [
  "Review the most important skills from the Junior track",
  "Connect cyber safety habits across accounts, privacy, scams, browsing, communication, devices, and ethics",
  "Practice safer responses in realistic school-appropriate scenarios",
  "Explain when to pause, check, report, block, save evidence, or ask for help",
  "Build confidence using a personal cyber safety plan",
  "Finish the Junior track with safe, respectful, and responsible online habits",
];

const keyIdeas = [
  {
    title: "Pause Before Acting",
    text: "A short pause can help students avoid unsafe clicks, rushed replies, oversharing, unknown downloads, and decisions made under pressure.",
  },
  {
    title: "Protect Private Information",
    text: "Passwords, codes, addresses, schedules, school details, private messages, photos, and account information should be handled carefully.",
  },
  {
    title: "Check Warning Signs",
    text: "Urgency, fear, prizes, unknown links, strange requests, fake warnings, suspicious downloads, and pressure to keep secrets can all be warning signs.",
  },
  {
    title: "Use Trusted Help",
    text: "Students should not handle risky, scary, private, confusing, or harmful online situations alone. Trusted adults can help students respond safely.",
  },
  {
    title: "Communicate Respectfully",
    text: "Online messages, screenshots, comments, group chats, and posts can affect real people, friendships, school trust, privacy, and reputation.",
  },
  {
    title: "Stay Ethical and Safe",
    text: "Cybersecurity learning should happen in approved lessons, labs, competitions, and practice spaces, never by testing real people, accounts, devices, or systems without permission.",
  },
];

const reviewScenarios = [
  {
    title: "The Suspicious Prize Message",
    situation:
      "A student gets a message saying they won a free reward and must click a link, sign in, and keep the message secret.",
    warningSigns:
      "The message creates excitement, asks for a login, includes an unexpected link, and pressures the student to keep it secret.",
    riskyResponse:
      "Click the link, sign in, and share the message with friends before checking if it is real.",
    saferResponse:
      "Do not click the link or sign in. Save useful details, report or block if appropriate, and show a trusted adult.",
    lesson:
      "Suspicious messages should be handled with pausing, checking, reporting, and trusted adult support.",
  },
  {
    title: "The Download Pop-Up",
    situation:
      "A website says the student needs to install a special file to watch a video or unlock a game feature.",
    warningSigns:
      "The page pushes an unknown download and makes it seem required before the student can continue.",
    riskyResponse:
      "Download and open the file because the website says it is needed.",
    saferResponse:
      "Do not download or open it. Leave the page if possible, use official sources, and ask a trusted adult for help.",
    lesson:
      "Unknown files, apps, extensions, and downloads should not be tested for practice or opened just because a website says so.",
  },
  {
    title: "The Group Chat Screenshot",
    situation:
      "A student sees classmates sharing screenshots from a private chat and making jokes about someone who is not there.",
    warningSigns:
      "Private messages are being shared without permission, and the conversation could hurt someone or damage trust.",
    riskyResponse:
      "Join the jokes, forward the screenshots, or stay in the chat while it gets worse.",
    saferResponse:
      "Do not forward the screenshots, avoid adding hurtful comments, save evidence if needed, and ask a trusted adult if someone may be harmed.",
    lesson:
      "Privacy, reputation, kindness, and safe support matter in group chats and online communication.",
  },
  {
    title: "The Device Warning",
    situation:
      "A student's device shows a warning or alert they do not understand while using a website or app.",
    warningSigns:
      "The student feels unsure and does not know whether the alert is real, safe, or related to the website they were using.",
    riskyResponse:
      "Click buttons quickly, ignore the warning, or try random fixes from the internet.",
    saferResponse:
      "Stop interacting with the alert, avoid entering information, and ask a trusted adult or school tech helper for guidance.",
    lesson:
      "Students should not guess when a device warning feels confusing. Trusted help is safer.",
  },
];

const responsibleActions = [
  "Pause before clicking, downloading, posting, replying, sharing, or signing in.",
  "Check whether a message, website, request, or account action makes sense.",
  "Protect passwords, login codes, private photos, screenshots, addresses, schedules, and personal details.",
  "Use official sources, school-approved tools, and trusted adults when unsure.",
  "Avoid testing suspicious links, unsafe websites, unknown files, real accounts, devices, or networks.",
  "Ask for help when something online feels risky, private, upsetting, confusing, urgent, or harmful.",
];

const reflectionQuestions = [
  "Which Junior cyber safety habit is most important for me to remember?",
  "What warning signs should make students pause before acting online?",
  "How can students protect privacy and reputation in chats, posts, and screenshots?",
  "Why is asking a trusted adult a smart cyber safety skill?",
  "What is one cyber safety goal I can keep using after this course?",
];

const finalCheck = [
  {
    question:
      "A student gets an unexpected message with a prize link and a request to sign in. What is the safer response?",
    choices: [
      "Click the link and sign in quickly",
      "Do not click or sign in; show a trusted adult and report or block if appropriate",
      "Forward the message to friends so they can try it too",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected prize messages with links and login requests can be unsafe. Students should avoid clicking and get trusted help.",
  },
  {
    question:
      "A website says a student must download a special file to continue. What should the student do?",
    choices: [
      "Download it to see what happens",
      "Avoid the download, use official sources, and ask a trusted adult",
      "Open the file only once",
    ],
    answer: "Choice B",
    explanation:
      "Unknown downloads can be risky. Students should use official sources and trusted adult guidance instead of testing unknown files.",
  },
  {
    question:
      "A group chat is sharing private screenshots and making fun of someone. What is the smarter choice?",
    choices: [
      "Do not forward the screenshots and ask for help if someone may be harmed",
      "Add more jokes so the group likes the message",
      "Post the screenshots somewhere else",
    ],
    answer: "Choice A",
    explanation:
      "Sharing private screenshots can hurt people and damage trust. Students should avoid spreading them and ask for help when needed.",
  },
  {
    question:
      "A student sees a device warning they do not understand. What is the safer response?",
    choices: [
      "Click random buttons until it goes away",
      "Enter personal information into the warning",
      "Stop interacting with it and ask a trusted adult or school tech helper",
    ],
    answer: "Choice C",
    explanation:
      "When students are unsure about a warning, they should avoid guessing and get trusted help.",
  },
  {
    question:
      "What is the strongest final Junior cyber safety habit?",
    choices: [
      "Pause, check warning signs, protect private information, and ask for trusted help when unsure",
      "Act quickly so problems disappear faster",
      "Test suspicious websites to learn from them",
    ],
    answer: "Choice A",
    explanation:
      "The Junior track is about safe, defensive, responsible decisions: pause, check, protect information, and ask for help.",
  },
];

const checklist = [
  "I can build and explain a personal cyber safety plan.",
  "I can respond safely to suspicious messages and risky links.",
  "I can avoid unknown downloads, unsafe websites, and confusing pop-ups.",
  "I can protect privacy, reputation, passwords, login codes, and personal information.",
  "I can communicate respectfully and avoid spreading harmful screenshots or messages.",
  "I know when to ask a trusted adult for help instead of handling a risky situation alone.",
];

export default function JuniorCyberSafetyFinalReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Junior Cyber Safety Final Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This final review helps students combine everything from the Junior
          track into safer real-life choices. Students review suspicious
          messages, unsafe websites, downloads, privacy, reputation,
          communication, devices, ethics, and trusted adult support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/cyber-safety-reflection-and-goal-setting"
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
            href="/junior"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Finish Junior Track
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
          <p className="text-cyan-300 font-semibold mb-3">Module Big Question</p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students combine everything they learned into a real-life
              cyber safety plan?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Students can combine cyber safety skills by pausing before they
              act, checking warning signs, protecting private information,
              communicating respectfully, avoiding unsafe testing, using trusted
              sources, and asking trusted adults for help when a situation feels
              risky or confusing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this final review, students should be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewGoals.map((goal) => (
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
              Do not test suspicious links, files, websites, accounts, devices,
              or networks for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click real suspicious links, open unknown files, visit unsafe
              websites, test real systems, enter real personal information, or
              handle serious online problems alone. When something feels unsafe,
              private, harmful, or confusing, students should ask a trusted
              adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Lesson Recap</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review what each Module 12 lesson covered.
        </h2>

        <div className="space-y-6">
          {lessonRecap.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-cyan-300 font-semibold mb-2">
                Lesson {lesson.number}
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {lesson.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{lesson.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Ideas</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            These final ideas help students keep using cyber safety after the
            Junior track.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyIdeas.map((idea) => (
              <div
                key={idea.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {idea.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{idea.text}</p>
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
          The safest students pause, check, and get help instead of reacting
          quickly.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks quickly, downloads unknown files, shares private
              screenshots, reacts while upset, ignores warning signs, tests
              suspicious pages, or tries to handle serious online problems
              alone.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the situation, protects private
              information, avoids unsafe actions, communicates respectfully,
              saves useful details when appropriate, and asks a trusted adult
              for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice final Junior cyber safety decisions using fake examples.
          </h2>

          <div className="space-y-6">
            {reviewScenarios.map((scenario) => (
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
                      Safer Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.saferResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Review Lesson
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Responsible Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these steps as the final Junior cyber safety routine.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {responsibleActions.map((step) => (
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

            <h2 className="text-3xl font-bold mb-6">Think before finishing.</h2>

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
              Final Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {finalCheck.map((item, index) => (
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
          Before finishing the Junior track, students should be able to say:
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
            Junior Cyber Safety Capstone complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Students have completed the Junior track when they can use safe
            cyber habits in real-life situations, protect privacy, communicate
            respectfully, avoid risky actions, and ask trusted adults for help
            when needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/cyber-safety-reflection-and-goal-setting"
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
              href="/junior"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Finish Junior Track
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