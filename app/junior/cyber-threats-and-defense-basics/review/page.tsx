import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonRecap = [
  {
    number: "10.1",
    title: "What Cyber Threats Are",
    text: "Cyber threats are risks that can affect devices, accounts, data, people, or organizations. Students learned to recognize threats safely without testing real attacks.",
  },
  {
    number: "10.2",
    title: "Malware, Viruses, and Ransomware Basics",
    text: "Malware, viruses, and ransomware are unsafe software risks. Students learned that suspicious files, unknown downloads, and fake tools should not be opened or tested.",
  },
  {
    number: "10.3",
    title: "Scams, Social Engineering, and Human Risk",
    text: "Social engineering uses pressure, trust, fear, curiosity, or urgency to push people into unsafe choices. Students learned to pause before clicking, sharing, or responding.",
  },
  {
    number: "10.4",
    title: "Updates, Backups, and Basic Protection",
    text: "Updates, backups, screen locks, trusted apps, and careful settings help reduce risk. Students learned that basic protection habits matter before problems happen.",
  },
  {
    number: "10.5",
    title: "What Cyber Defenders Do",
    text: "Cyber defenders help protect systems, support people, reduce risk, document issues, follow rules, and act ethically. Students learned that defense is about safety and responsibility.",
  },
];

const reviewGoals = [
  "Explain what cyber threats are in a safe beginner-friendly way",
  "Recognize malware, viruses, and ransomware as risks that should never be tested",
  "Identify how scams and social engineering pressure people",
  "Describe basic protection habits like updates, backups, locks, and trusted apps",
  "Explain what cyber defenders do to reduce risk safely and ethically",
  "Know when to stop, report, and ask a trusted adult for help",
];

const keyIdeas = [
  {
    title: "Threats Are Risks",
    text: "A cyber threat is something that could harm devices, accounts, information, privacy, money, or trust if people do not respond carefully.",
  },
  {
    title: "Unsafe Files Are Not Practice Tools",
    text: "Students should never open, download, run, test, or share suspicious files, apps, scripts, attachments, or tools to see what happens.",
  },
  {
    title: "People Can Be Targeted",
    text: "Scams and social engineering often target human feelings like fear, curiosity, excitement, kindness, embarrassment, or pressure to act quickly.",
  },
  {
    title: "Protection Starts Early",
    text: "Updates, backups, screen locks, trusted sources, and careful permissions help reduce problems before something goes wrong.",
  },
  {
    title: "Defenders Follow Rules",
    text: "Cyber defenders help only in approved ways, respect privacy, document concerns, report safely, and avoid actions that could harm others.",
  },
  {
    title: "Trusted Help Matters",
    text: "When a threat, warning, message, file, or account problem appears, students should pause and ask a trusted adult instead of experimenting alone.",
  },
];

const reviewScenarios = [
  {
    title: "The Free Reward App",
    situation:
      "A student sees a post claiming that a free app can unlock special game rewards, but the app is not from an official store or trusted source.",
    warningSigns:
      "The app promises something exciting and comes from an unknown source.",
    riskyResponse:
      "Download the app quickly to see if the reward is real.",
    saferResponse:
      "Do not download it. Use official sources and ask a trusted adult before installing anything unfamiliar.",
    lesson:
      "Unknown apps and files can be risky. Students should avoid unsafe downloads and use trusted sources.",
  },
  {
    title: "The Scary Account Warning",
    situation:
      "A message says a student's account will be closed unless they click a link and sign in immediately.",
    warningSigns:
      "The message creates urgency and asks the student to click and sign in right away.",
    riskyResponse:
      "Click the link and enter the account information before the account closes.",
    saferResponse:
      "Do not click the link. Check through the official app or website with help from a trusted adult.",
    lesson:
      "Social engineering often uses fear and urgency. Safer choices involve pausing and using official sources.",
  },
  {
    title: "The Missing School Project",
    situation:
      "A student cannot find an important school project and realizes they never saved a backup copy.",
    warningSigns:
      "The file may be lost, and there is no backup plan.",
    riskyResponse:
      "Give up or download a random recovery tool from an unknown website.",
    saferResponse:
      "Ask a teacher or trusted adult for help and start using approved backup habits for important files.",
    lesson:
      "Backups reduce stress when files are lost, changed, or damaged.",
  },
  {
    title: "The Defender Decision",
    situation:
      "A student notices a security concern on a school device and wants to prove it by experimenting with the system.",
    warningSigns:
      "The student is thinking about testing something without permission.",
    riskyResponse:
      "Try different actions to prove the problem exists.",
    saferResponse:
      "Do not test it. Report the concern to a teacher, school tech staff, or another trusted adult.",
    lesson:
      "Cyber defenders act safely and ethically. Reporting is safer than experimenting without permission.",
  },
];

const responsibleActions = [
  "Pause before opening unfamiliar files, apps, attachments, or links.",
  "Do not test malware, viruses, ransomware, scams, or suspicious tools.",
  "Use official sources for apps, updates, account notices, and help pages.",
  "Keep devices updated when a trusted adult or school says it is appropriate.",
  "Back up important files in approved places.",
  "Report security concerns safely instead of experimenting without permission.",
];

const reflectionQuestions = [
  "What is a cyber threat?",
  "Why should students never test suspicious files or malware?",
  "How can scams use pressure or emotions to influence people?",
  "How do updates, backups, and locks help reduce risk?",
  "What makes a cyber defender responsible and ethical?",
];

const finalCheck = [
  {
    question:
      "A student finds an unknown app that promises free rewards. What is the safer response?",
    choices: [
      "Download it to test whether it works",
      "Avoid the download and ask a trusted adult before installing anything unfamiliar",
      "Send the app to friends so they can try it first",
    ],
    answer: "Choice B",
    explanation:
      "Unknown apps can be risky. Students should use official sources and ask trusted adults before installing unfamiliar tools.",
  },
  {
    question:
      "A message says an account will close unless the student clicks a link immediately. What warning sign is present?",
    choices: [
      "The message uses urgency and pressure",
      "The message has a sentence",
      "The message mentions an account",
    ],
    answer: "Choice A",
    explanation:
      "Scams and social engineering often use urgency to push people into clicking or signing in without thinking.",
  },
  {
    question:
      "Why are backups important?",
    choices: [
      "They can help recover important files if something is lost, changed, or damaged",
      "They make passwords unnecessary",
      "They allow students to ignore updates forever",
    ],
    answer: "Choice A",
    explanation:
      "Backups can reduce the damage from mistakes, device problems, accidental deletion, or other issues.",
  },
  {
    question:
      "A student notices a security concern on a school device. What should they do?",
    choices: [
      "Test it without permission",
      "Try to prove it by changing settings",
      "Report it to a teacher, school tech staff, or trusted adult",
    ],
    answer: "Choice C",
    explanation:
      "Responsible cyber defenders do not experiment without permission. Reporting safely is the right choice.",
  },
  {
    question:
      "What is a strong Module 10 habit?",
    choices: [
      "Pause, protect, report, and ask trusted adults when something seems unsafe",
      "Open suspicious files to learn from them",
      "Click urgent messages quickly to avoid problems",
    ],
    answer: "Choice A",
    explanation:
      "Module 10 focuses on safe awareness and defense habits, not testing dangerous files, scams, or systems.",
  },
];

const checklist = [
  "I can explain what cyber threats are.",
  "I can recognize that malware, viruses, and ransomware should never be tested.",
  "I can identify how scams and social engineering pressure people.",
  "I can describe basic protection habits like updates, backups, locks, and trusted apps.",
  "I can explain what cyber defenders do safely and ethically.",
  "I know when to report a concern and ask a trusted adult for help.",
];

export default function CyberThreatsAndDefenseBasicsReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10 • Lesson 10.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber Threats and Defense Basics Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This review helps students practice the main ideas from Module 10:
          cyber threat basics, malware awareness, scam and social engineering
          pressure, updates, backups, basic protection, and what cyber defenders
          do. The goal is safe awareness and defense, not testing unsafe files,
          scams, accounts, networks, or systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics/what-cyber-defenders-do"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/cyber-threats-and-defense-basics"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 10
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws"
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
          <p className="text-cyan-300 font-semibold mb-3">Module Big Question</p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What are common cyber threats, and how do defenders reduce risk
              safely and ethically?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Common cyber threats can include unsafe files, scams, fake
              warnings, account tricks, and risky downloads. Defenders reduce
              risk by protecting systems, helping people, reporting problems,
              following rules, and choosing safe actions instead of harmful or
              unauthorized testing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this review, students should be able to:
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
              Do not test cyber threats for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test malware, viruses, ransomware, scams, suspicious files,
              suspicious links, accounts, networks, websites, or devices. If
              something seems unsafe, confusing, urgent, or too good to be true,
              students should stop, avoid interacting, and ask a trusted adult
              for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Lesson Recap</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review what each Module 10 lesson covered.
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
            These ideas help students understand cyber threats safely.
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
          Threat awareness should lead to safer decisions, not risky testing.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student opens suspicious files, tests unknown tools, clicks
              urgent messages, ignores updates, skips backups, or experiments
              with systems without permission.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids suspicious actions, uses trusted
              sources, keeps basic protections in place, reports concerns
              safely, and asks a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer cyber defense decisions using fake examples.
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
          Use these steps when cyber threats or security concerns appear.
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
          Before finishing Module 10, students should be able to say:
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
            Module 10 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Module 11 will teach students about digital citizenship,
            ethics, online rules, school policies, copyright, credit, and
            responsible digital consequences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics/what-cyber-defenders-do"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/cyber-threats-and-defense-basics"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 10
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}