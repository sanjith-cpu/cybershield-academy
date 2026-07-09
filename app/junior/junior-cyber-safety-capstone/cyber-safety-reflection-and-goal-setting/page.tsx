import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Reflect on personal cyber safety habits from the Junior track",
  "Identify online choices that are already safe and responsible",
  "Choose cyber safety habits that need more practice",
  "Set realistic goals for passwords, privacy, communication, browsing, devices, and reporting",
  "Create a simple plan for getting trusted help when something feels unsafe or confusing",
];

const vocabulary = [
  {
    term: "Reflection",
    definition:
      "Thinking carefully about past choices, habits, strengths, and areas for improvement.",
  },
  {
    term: "Cyber Safety Goal",
    definition:
      "A specific habit someone wants to practice to become safer, more respectful, and more responsible online.",
  },
  {
    term: "Action Step",
    definition:
      "A clear next step that makes a goal easier to follow in real life.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, librarian, or other safe adult who can help with online problems.",
  },
  {
    term: "Digital Habit",
    definition:
      "A repeated online behavior, such as checking privacy settings, pausing before clicking, or asking before sharing.",
  },
  {
    term: "Progress Check",
    definition:
      "A simple way to review whether a goal is being practiced and what should improve next.",
  },
];

const reflectionAreas = [
  {
    title: "Account Safety",
    explanation:
      "A student reviews whether they use strong passwords, keep login codes private, and ask for help with suspicious sign-in problems.",
    saferChoice:
      "Choose one account habit to improve, such as using unique passwords or never sharing verification codes.",
  },
  {
    title: "Privacy and Sharing",
    explanation:
      "A student thinks about what information they share in profiles, posts, chats, photos, and screenshots.",
    saferChoice:
      "Check for personal details before sharing and ask permission before posting content that includes other people.",
  },
  {
    title: "Browsing and Downloads",
    explanation:
      "A student reviews whether they pause before clicking unfamiliar links, downloading files, or responding to pop-ups.",
    saferChoice:
      "Use official sources, avoid suspicious downloads, and ask a trusted adult when a page feels unsafe or confusing.",
  },
  {
    title: "Getting Help",
    explanation:
      "A student plans who they can talk to if they see cyberbullying, scams, unsafe messages, account problems, or device warnings.",
    saferChoice:
      "Write down trusted adults and practice asking for help early instead of waiting until a problem grows.",
  },
];

const warningSigns = [
  {
    title: "Too Many Goals at Once",
    text: "A student tries to change every online habit immediately, then forgets the plan or gives up quickly.",
  },
  {
    title: "Vague Goal",
    text: "The goal is too general, such as 'be safer online,' without a clear action step to practice.",
  },
  {
    title: "No Trusted Help Plan",
    text: "The student knows a situation may be unsafe but does not know which adult to ask or what to say.",
  },
  {
    title: "Ignoring Small Problems",
    text: "The student notices warning signs but waits too long to ask for help because the problem seems small at first.",
  },
  {
    title: "Copying Someone Else’s Plan",
    text: "A student copies a goal that does not match their real online habits, devices, or responsibilities.",
  },
  {
    title: "No Progress Check",
    text: "The student sets a goal but never reviews whether the habit is actually improving.",
  },
];

const scenarios = [
  {
    title: "The Password Habit Goal",
    situation:
      "A student realizes they sometimes reuse passwords across different accounts because it is easier to remember them.",
    warningSigns:
      "The habit creates account safety risk, and the student needs a realistic way to improve.",
    riskyResponse:
      "Ignore the problem because changing passwords feels annoying.",
    smarterResponse:
      "Set one clear goal: start with important accounts, use stronger unique passwords, and ask a trusted adult for help managing them safely.",
    whyItWorks:
      "A small, clear account safety goal is easier to follow than trying to fix everything at once.",
  },
  {
    title: "The Posting Reflection",
    situation:
      "A student looks back and notices they sometimes post photos quickly without checking the background or asking if others are comfortable.",
    warningSigns:
      "Photos can reveal private clues or include people who did not agree to be posted.",
    riskyResponse:
      "Keep posting quickly because nothing bad has happened yet.",
    smarterResponse:
      "Set a goal to pause before posting, check for private details, and ask permission when other people are included.",
    whyItWorks:
      "Reflection helps students improve before a privacy or reputation problem happens.",
  },
  {
    title: "The Suspicious Link Plan",
    situation:
      "A student admits they sometimes click links in chats before checking who sent them or why they were sent.",
    warningSigns:
      "Unexpected links can lead to scams, fake sign-in pages, unsafe downloads, or confusing websites.",
    riskyResponse:
      "Keep clicking because most links are probably fine.",
    smarterResponse:
      "Set a goal to pause, check the source, avoid entering information, and ask a trusted adult when a link feels suspicious.",
    whyItWorks:
      "A pause-before-clicking goal helps students avoid risky actions before they happen.",
  },
  {
    title: "The Help Plan",
    situation:
      "A student knows they should ask for help, but they worry they will get in trouble if they show an adult an online problem.",
    warningSigns:
      "The student may hide the problem or wait until it gets worse.",
    riskyResponse:
      "Handle the problem alone and hope it disappears.",
    smarterResponse:
      "Choose two trusted adults ahead of time and practice a simple sentence like, 'I saw something online that made me uncomfortable, and I need help.'",
    whyItWorks:
      "Planning who to ask and what to say makes it easier to get help early and safely.",
  },
];

const actionSteps = [
  "Choose one cyber safety habit to improve first.",
  "Make the goal specific, realistic, and connected to real online choices.",
  "Write one action step that can be practiced this week.",
  "Choose at least two trusted adults who can help with online problems.",
  "Use a pause-and-check routine before clicking, posting, replying, downloading, or sharing.",
  "Review progress and update the goal when the habit improves.",
];

const reflectionQuestions = [
  "Which cyber safety habit am I already doing well?",
  "Which online habit should I improve first?",
  "What is one specific action step I can practice this week?",
  "Who are two trusted adults I can ask for help?",
  "How will I know if my cyber safety goal is improving?",
];

const skillCheck = [
  {
    question:
      "A student wants to improve online safety but writes, 'I will be safer online.' What is the problem with this goal?",
    choices: [
      "It is too vague and does not include a clear action step",
      "It is too short to read",
      "It mentions online safety",
    ],
    answer: "Choice A",
    explanation:
      "A strong goal should be specific. A clearer goal might be, 'I will pause before clicking links in group chats.'",
  },
  {
    question:
      "A student wants to improve photo sharing habits. What is a safer goal?",
    choices: [
      "Post faster so friends see it first",
      "Pause before posting, check for private details, and ask permission when others are included",
      "Assume every photo is fine if it looks normal",
    ],
    answer: "Choice B",
    explanation:
      "Checking details and asking permission helps protect privacy, reputation, and respect for others.",
  },
  {
    question:
      "A student is nervous about asking for help with online problems. What should they do before a problem happens?",
    choices: [
      "Choose trusted adults and practice what they could say",
      "Promise to handle every problem alone",
      "Delete every app immediately without talking to anyone",
    ],
    answer: "Choice A",
    explanation:
      "Having a help plan makes it easier to ask for support early when something online feels unsafe, confusing, or uncomfortable.",
  },
  {
    question:
      "What is a good progress check for a cyber safety goal?",
    choices: [
      "Never look at the goal again",
      "Ask whether the habit was practiced and what should improve next",
      "Change the goal every day before practicing it",
    ],
    answer: "Choice B",
    explanation:
      "A progress check helps students see what is working, what still needs practice, and what the next safe step should be.",
  },
];

const checklist = [
  "I can reflect on my cyber safety habits honestly.",
  "I can identify one online safety habit I already do well.",
  "I can choose one specific cyber safety habit to improve.",
  "I can write a realistic action step for my goal.",
  "I can name trusted adults who can help me with online problems.",
  "I can review my progress and keep improving my cyber safety plan.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber Safety Reflection and Goal Setting
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Reflection helps students turn cyber safety lessons into real habits.
          This lesson guides students through choosing strengths, identifying
          areas to improve, setting realistic goals, and planning trusted help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-privacy-reputation-and-communication"
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
            href="/junior/junior-cyber-safety-capstone/review"
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
              Cyber safety becomes stronger when students turn lessons into habits.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student finishes learning about passwords, privacy,
              scams, browsing, communication, devices, and getting help. The
              next step is deciding what they will actually do differently in
              everyday online life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A strong cyber safety plan starts with honest reflection and one clear goal.
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
              Do not test unsafe situations to prove a goal works.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click suspicious links, visit unsafe websites, share private
              information, download unknown files, message strangers, or create
              conflict for practice. A safe goal improves everyday choices
              without creating new risks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Reflection helps students choose cyber safety habits they can actually practice.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Cyber safety is not only about knowing rules. It is also about
            building habits: pausing before clicking, thinking before sharing,
            protecting accounts, communicating respectfully, checking sources,
            and asking for help when something feels unsafe.
          </p>

          <p>
            A strong goal should be specific and realistic. Instead of saying,
            "I will be safer online," a student can choose a clear habit like,
            "I will pause before clicking links in group chats," or "I will ask
            permission before posting photos with other people."
          </p>

          <p>
            Goal setting also includes trusted support. Students should know who
            they can ask for help, what they can say, and how they will check
            whether their habit is improving over time.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for reflection and goal setting.
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
          Goal Setting Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students can reflect on different parts of their online life.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reflectionAreas.map((item) => (
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
            Cyber safety goals work best when they are clear, realistic, and supported.
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
          A helpful goal should guide real choices, not create pressure or risk.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student writes a vague goal, tries to change everything at once,
              avoids trusted adults, or tests unsafe links, websites, messages,
              or downloads to see whether they can handle them.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student chooses one realistic habit, writes a clear action
              step, practices it in normal online life, and asks trusted adults
              for support when something feels unsafe or confusing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice turning cyber safety reflection into realistic goals.
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
          Use these steps to build a personal cyber safety goal.
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
          Before finishing Lesson 12.5, students should be able to say:
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
            Lesson 12.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 12.6 will review the full Junior Cyber Safety Capstone
            and help students finish the Junior track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-privacy-reputation-and-communication"
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
              href="/junior/junior-cyber-safety-capstone/review"
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