import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what a personal cyber safety plan is",
  "Identify online habits that need safer routines",
  "Choose trusted adults and safe support options",
  "Connect passwords, privacy, browsing, communication, and device safety into one plan",
  "Practice making a simple plan for real-life cyber safety choices",
];

const vocabulary = [
  {
    term: "Cyber Safety Plan",
    definition:
      "A personal set of habits, reminders, and help steps someone uses to stay safer online and respond to problems calmly.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other safe adult a student can ask for help when something online feels confusing or unsafe.",
  },
  {
    term: "Safety Habit",
    definition:
      "A repeated action that helps protect accounts, privacy, devices, communication, and online choices.",
  },
  {
    term: "Warning Sign",
    definition:
      "A clue that something online may be risky, fake, unsafe, hurtful, or worth checking before responding.",
  },
  {
    term: "Response Step",
    definition:
      "A safe action someone takes after noticing a problem, such as pausing, saving evidence, reporting, blocking, or asking for help.",
  },
  {
    term: "Reflection",
    definition:
      "Thinking carefully about past choices, current habits, and better steps for the future.",
  },
];

const planParts = [
  {
    title: "Account Safety",
    explanation:
      "A student decides how they will protect accounts, passwords, login codes, and recovery information.",
    saferChoice:
      "Use strong unique passwords, protect login codes, and ask a trusted adult before responding to suspicious account messages.",
  },
  {
    title: "Privacy and Sharing",
    explanation:
      "A student decides what personal information, photos, screenshots, and posts should stay private or be checked first.",
    saferChoice:
      "Pause before sharing and avoid posting private details, embarrassing content, or information about other people without permission.",
  },
  {
    title: "Communication Safety",
    explanation:
      "A student decides how to handle group chats, friend requests, strangers, conflict, and online pressure.",
    saferChoice:
      "Communicate respectfully, avoid replying to pressure, and ask for help when messages feel unsafe, hurtful, or suspicious.",
  },
  {
    title: "Device and Browsing Safety",
    explanation:
      "A student decides how they will respond to unfamiliar websites, unknown downloads, public Wi-Fi, pop-ups, and device warnings.",
    saferChoice:
      "Avoid unsafe testing, do not download unknown files, use trusted sources, and show warnings to a trusted adult.",
  },
];

const warningSigns = [
  {
    title: "No Help Plan",
    text: "The student does not know who to ask when something online feels scary, confusing, suspicious, or hurtful.",
  },
  {
    title: "Same Habit Everywhere",
    text: "The student uses the same weak password, same sharing choices, or same risky response across many apps and accounts.",
  },
  {
    title: "Quick Reactions",
    text: "The student clicks, replies, downloads, forwards, or posts before pausing to think about safety.",
  },
  {
    title: "Too Much Sharing",
    text: "The student shares personal details, screenshots, location clues, or private conversations without checking first.",
  },
  {
    title: "Ignoring Warnings",
    text: "The student sees account alerts, browser warnings, strange messages, or device prompts but keeps going without trusted help.",
  },
  {
    title: "Handling Problems Alone",
    text: "The student tries to solve unsafe online problems alone instead of getting support from a trusted adult.",
  },
];

const scenarios = [
  {
    title: "The Account Alert Plan",
    situation:
      "A student receives a message saying their account will be locked unless they click a link and enter a login code.",
    warningSigns:
      "The message creates urgency, asks for account information, and pushes a link.",
    riskyResponse:
      "Click the link and enter the code because the account seems important.",
    smarterResponse:
      "Do not click the link. Go to the official app or website separately and ask a trusted adult for help checking the alert.",
    whyItWorks:
      "A cyber safety plan helps students respond calmly to urgent messages instead of giving away private account information.",
  },
  {
    title: "The Group Chat Plan",
    situation:
      "A group chat starts spreading a screenshot of another student and people are adding jokes and comments.",
    warningSigns:
      "The screenshot involves another person, could embarrass them, and the chat is pressuring people to join in.",
    riskyResponse:
      "Forward the screenshot or add a joke so the student does not feel left out.",
    smarterResponse:
      "Do not forward it. Avoid adding to the harm, save evidence if needed, and ask a trusted adult for support.",
    whyItWorks:
      "A strong plan includes respectful communication and safe support when online behavior becomes hurtful.",
  },
  {
    title: "The Download Plan",
    situation:
      "A website says a student must download a special file to unlock a free game reward.",
    warningSigns:
      "The site offers a reward and pushes an unknown download from an unfamiliar source.",
    riskyResponse:
      "Download the file quickly because the reward sounds exciting.",
    smarterResponse:
      "Do not download it. Use official sources only and ask a trusted adult before installing anything unknown.",
    whyItWorks:
      "A cyber safety plan reminds students not to test suspicious downloads or trust random websites.",
  },
  {
    title: "The Sharing Plan",
    situation:
      "A student wants to post a photo from school that shows classmates, a classroom board, and a school schedule in the background.",
    warningSigns:
      "The image may reveal other people, location details, school information, or private background information.",
    riskyResponse:
      "Post it immediately because it looks fun.",
    smarterResponse:
      "Pause, check what is visible, avoid sharing private details, and get permission before posting others.",
    whyItWorks:
      "A safety plan helps students think about privacy and reputation before posting.",
  },
];

const actionSteps = [
  "Write down at least two trusted adults who can help with online safety problems.",
  "Choose one account safety habit to improve, such as stronger passwords or protecting login codes.",
  "Choose one privacy habit to improve before sharing photos, screenshots, posts, or personal information.",
  "Choose one communication habit for group chats, conflict, followers, and friend requests.",
  "Choose one device or browsing habit for websites, downloads, Wi-Fi, pop-ups, and alerts.",
  "Use the pause-check-ask routine when something online feels urgent, confusing, unsafe, or too good to be true.",
];

const reflectionQuestions = [
  "What is one online habit I already do well?",
  "What is one online habit I should improve?",
  "Who are two trusted adults I can ask for help?",
  "What warning sign should make me pause before acting?",
  "How can a cyber safety plan help me respond calmly instead of reacting quickly?",
];

const skillCheck = [
  {
    question:
      "A student gets an urgent account message asking for a login code. What should their cyber safety plan tell them to do?",
    choices: [
      "Share the code quickly",
      "Do not share the code, use official sources, and ask a trusted adult for help",
      "Forward the message to friends",
    ],
    answer: "Choice B",
    explanation:
      "Login codes should be protected. Urgent messages should be checked through official sources with trusted help.",
  },
  {
    question:
      "Which is an important part of a personal cyber safety plan?",
    choices: [
      "Knowing trusted adults to ask for help",
      "Trying suspicious links to see what happens",
      "Sharing every warning with a group chat",
    ],
    answer: "Choice A",
    explanation:
      "A safety plan should include trusted adults and calm response steps. Students should not test suspicious links.",
  },
  {
    question:
      "A student wants to post a screenshot of a private chat. What is the safer response?",
    choices: [
      "Post it before anyone else does",
      "Pause and think about privacy, permission, and possible harm",
      "Add more private details to explain it",
    ],
    answer: "Choice B",
    explanation:
      "Screenshots can affect privacy, reputation, and trust. Students should pause before sharing private conversations.",
  },
  {
    question:
      "What does a cyber safety plan help students do?",
    choices: [
      "React faster without thinking",
      "Handle online problems alone",
      "Use safer habits and ask for help when needed",
    ],
    answer: "Choice C",
    explanation:
      "A cyber safety plan helps students use safer habits, recognize warning signs, and get support instead of handling problems alone.",
  },
];

const checklist = [
  "I can explain what a personal cyber safety plan is.",
  "I can name trusted adults who can help me with online problems.",
  "I can connect account safety, privacy, communication, browsing, and device safety into one plan.",
  "I can recognize warning signs that should make me pause.",
  "I can choose safer response steps for common online situations.",
  "I know not to test suspicious links, downloads, websites, or messages for practice.",
];

export default function BuildingPersonalCyberSafetyPlanPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Building a Personal Cyber Safety Plan
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          A personal cyber safety plan helps students turn everything they have
          learned into clear habits for accounts, privacy, communication,
          browsing, devices, and getting help. This lesson teaches students how
          to build a simple plan they can use in real life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 12
          </Link>

          <Link
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-suspicious-message"
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
              A good safety plan helps before something goes wrong.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student gets a suspicious message, sees a scary pop-up,
              or feels pressured in a group chat. In the moment, it can be hard
              to decide what to do. A personal cyber safety plan gives the
              student safer steps before they feel rushed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A cyber safety plan connects habits, warning signs, and help steps.
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
              Do not test unsafe links, files, websites, or messages.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click suspicious links, download unknown files, visit unsafe
              websites, contact strangers, or test risky messages for practice.
              The safer choice is to pause and ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A personal cyber safety plan turns lessons into real-life routines.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Throughout the Junior track, students learned about identity,
            privacy, passwords, scams, safe browsing, communication,
            cyberbullying, misinformation, networks, cyber threats, and digital
            citizenship. A cyber safety plan combines those topics into one
            simple guide for everyday decisions.
          </p>

          <p>
            A good plan does not need to be complicated. It should answer basic
            questions: How will I protect my accounts? What information should I
            avoid sharing? How will I respond to suspicious messages? What will I
            do if a website, download, or device warning feels unsafe? Who can I
            ask for help?
          </p>

          <p>
            The best plan is calm and realistic. Students should not try to
            solve every online problem alone. Safer cyber habits include
            pausing, checking trusted sources, avoiding risky actions, saving
            evidence when needed, reporting safely, and asking trusted adults for
            support.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for building a cyber safety plan.
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
          Cyber Safety Plan Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A strong plan covers the online choices students make most often.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {planParts.map((item) => (
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
            A plan is most helpful when students know what should make them
            pause.
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
          A safety plan helps students slow down before reacting.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student reacts quickly, clicks a suspicious link, shares private
              information, joins hurtful behavior, downloads an unknown file, or
              tries to fix an online problem alone.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks warning signs, avoids risky actions,
              uses trusted sources, saves evidence when needed, and asks a
              trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice using a cyber safety plan with fake examples.
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
          Use these steps to start building a personal cyber safety plan.
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
          Before finishing Lesson 12.1, students should be able to say:
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
            Lesson 12.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 12.2 will use a suspicious message scenario to practice
            safe decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 12
            </Link>

            <Link
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-suspicious-message"
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