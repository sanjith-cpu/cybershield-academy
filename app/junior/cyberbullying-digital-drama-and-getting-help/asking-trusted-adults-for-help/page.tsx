import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why trusted adults can help with online problems",
  "Identify which situations should be shared with an adult quickly",
  "Practice asking for help clearly and calmly",
  "Understand why students do not have to handle serious online problems alone",
  "Know how to share useful details without spreading drama",
];

const vocabulary = [
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, school staff member, or other safe adult who can help a student make careful decisions.",
  },
  {
    term: "Support",
    definition:
      "Help, guidance, protection, or advice from someone who can respond safely and responsibly.",
  },
  {
    term: "Serious Concern",
    definition:
      "An online problem that feels unsafe, repeated, private, threatening, overwhelming, or too difficult for a student to handle alone.",
  },
  {
    term: "Context",
    definition:
      "The details that help explain what happened, such as where it happened, who was involved, when it happened, and what was said or posted.",
  },
  {
    term: "Reporting Path",
    definition:
      "The safe steps a student can use to get help, such as telling an adult, using school support, or using an app report tool with guidance.",
  },
  {
    term: "Calm Explanation",
    definition:
      "A clear, honest description of what happened without adding rumors, exaggeration, or extra drama.",
  },
];

const supportSituations = [
  {
    title: "Repeated Hurtful Messages",
    explanation:
      "A student keeps receiving mean comments or messages even after trying to avoid the conflict.",
    saferChoice:
      "Save useful details if safe, avoid arguing back, and tell a trusted adult what has been happening.",
  },
  {
    title: "Private Information Shared",
    explanation:
      "Someone shares or threatens to share private details, screenshots, photos, school information, or account information.",
    saferChoice:
      "Ask a trusted adult for help right away instead of trying to solve the situation alone.",
  },
  {
    title: "Confusing Report Tool",
    explanation:
      "An app has a report or block option, but the student is unsure what to choose or what information to include.",
    saferChoice:
      "Ask an adult to help choose the correct option and explain the situation clearly.",
  },
  {
    title: "Feeling Overwhelmed",
    explanation:
      "A student feels stressed, worried, or unsure because an online situation keeps growing.",
    saferChoice:
      "Tell a trusted adult early and ask for help making a safe plan.",
  },
];

const warningSigns = [
  {
    title: "The Problem Keeps Happening",
    text: "The same person or group continues sending hurtful messages, comments, posts, or jokes.",
  },
  {
    title: "Someone Feels Unsafe",
    text: "A message, post, or chat makes someone feel afraid, pressured, threatened, or worried about what could happen next.",
  },
  {
    title: "Private Details Are Involved",
    text: "The situation includes personal information, photos, screenshots, account details, school information, or rumors about someone.",
  },
  {
    title: "Pressure to Stay Silent",
    text: "Someone says not to tell adults, not to report, or not to save what happened.",
  },
  {
    title: "Group Pressure",
    text: "A group chat, comment section, or social media post turns into many people piling on or spreading the problem.",
  },
  {
    title: "The Student Feels Stuck",
    text: "The student is unsure what to do, has already tried to avoid the issue, or feels like the problem is too big to handle alone.",
  },
];

const scenarios = [
  {
    title: "The Message That Keeps Coming Back",
    situation:
      "A student keeps getting rude messages from the same account after trying not to respond.",
    warningSigns:
      "The behavior is repeated, unwanted, and difficult for the student to stop alone.",
    riskyResponse:
      "Keep arguing, send rude messages back, or hide the situation because it feels embarrassing.",
    smarterResponse:
      "Save a few helpful details if safe, avoid replying with anger, and tell a parent, guardian, teacher, or counselor.",
    whyItWorks:
      "Trusted adults can help identify patterns, choose safe reporting steps, and support the student without making the conflict bigger.",
  },
  {
    title: "The Private Screenshot Problem",
    situation:
      "Someone says they might share an embarrassing screenshot in a group chat.",
    warningSigns:
      "Private content is being used to pressure or embarrass someone.",
    riskyResponse:
      "Beg the person not to share it, send more private information, or try to handle it alone.",
    smarterResponse:
      "Tell a trusted adult quickly, explain what happened, and ask for help deciding the safest next step.",
    whyItWorks:
      "Private information problems can grow quickly. Adult support helps the student respond calmly and safely.",
  },
  {
    title: "The Confusing School Situation",
    situation:
      "A group chat argument starts affecting students at school, but the student is not sure whether to tell a teacher.",
    warningSigns:
      "The online conflict is spreading into real life and involving more people.",
    riskyResponse:
      "Wait until it gets worse or ask classmates to pick sides.",
    smarterResponse:
      "Talk to a teacher, counselor, or school staff member and explain the situation clearly with only the needed details.",
    whyItWorks:
      "School staff can help students handle conflicts that affect safety, learning, or relationships at school.",
  },
  {
    title: "The Report Button Worry",
    situation:
      "A student wants to report a harmful post but worries they might choose the wrong report option.",
    warningSigns:
      "The student is unsure and needs help using the tool correctly.",
    riskyResponse:
      "Click random buttons, make a public post about it, or ignore the concern completely.",
    smarterResponse:
      "Ask a trusted adult to help review the options and report the post calmly and accurately.",
    whyItWorks:
      "Getting help can make reporting clearer, safer, and more useful without adding extra drama.",
  },
];

const actionSteps = [
  "Choose a trusted adult who listens and can help safely.",
  "Start with a simple sentence like: I need help with something that happened online.",
  "Share where it happened, when it happened, who was involved, and what was said or posted.",
  "Show evidence only to the trusted adult or proper reporting channel when needed.",
  "Avoid adding rumors, insults, or guesses that could make the situation harder to solve.",
  "Ask for help making a next-step plan, such as blocking, reporting, documenting, or involving school support.",
];

const reflectionQuestions = [
  "Why is it sometimes safer to ask an adult for help early?",
  "Who are trusted adults a student could talk to at home or school?",
  "What details help an adult understand an online problem clearly?",
  "Why should students avoid spreading screenshots to classmates?",
  "What could a student say if they feel nervous asking for help?",
];

const skillCheck = [
  {
    question:
      "A student keeps receiving hurtful messages from the same account. What is the safer response?",
    choices: [
      "Keep arguing until the other person stops",
      "Save useful details if safe and tell a trusted adult",
      "Hide the problem forever",
    ],
    answer: "Choice B",
    explanation:
      "Repeated hurtful messages should not be handled alone. A trusted adult can help the student make a safer plan.",
  },
  {
    question:
      "Someone tells a student not to tell adults about an online problem. What is the warning sign?",
    choices: [
      "Pressure to stay silent",
      "A normal homework question",
      "A safe school reminder",
    ],
    answer: "Choice A",
    explanation:
      "Pressure to stay silent can be a sign that trusted adult support is needed.",
  },
  {
    question:
      "What is a helpful way to ask for adult support?",
    choices: [
      "Start with: I need help with something that happened online",
      "Only share rumors from other people",
      "Post the problem publicly first",
    ],
    answer: "Choice A",
    explanation:
      "A simple, calm opening can help a student start the conversation and get support.",
  },
  {
    question:
      "Which detail can help a trusted adult understand an online problem?",
    choices: [
      "The app or chat where it happened",
      "A made-up detail to make it sound worse",
      "A random guess about someone’s motive",
    ],
    answer: "Choice A",
    explanation:
      "Clear details like the app, date, time, username, and what happened help adults respond fairly and safely.",
  },
];

const checklist = [
  "I can explain why trusted adults can help with online problems.",
  "I can identify when a situation should be shared with an adult quickly.",
  "I can ask for help using a clear and calm explanation.",
  "I can share useful details without spreading drama.",
  "I can avoid trying to solve serious online problems alone.",
  "I know that trusted adults can help with reporting, blocking, and next steps.",
];

export default function AskingTrustedAdultsForHelpPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Asking Trusted Adults for Help
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Asking trusted adults for help is one of the safest ways students can
          respond when online behavior becomes hurtful, confusing, repeated, or
          unsafe. This lesson teaches students when to ask for support, what
          details to share, and how to avoid handling serious problems alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/saving-evidence-and-reporting-safely"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 7
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/review"
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
              Students should not have to solve serious online problems alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student feels stuck because a group chat conflict keeps
              growing. They might feel nervous about telling an adult, but a
              trusted adult can help them slow down, understand the problem, and
              choose safer next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Getting help is a strength, not an overreaction.
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
              Do not handle serious online problems alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              investigate harmful accounts, argue back, spread screenshots, or
              keep unsafe situations secret. If something feels threatening,
              repeated, private, or overwhelming, a trusted adult should be
              involved quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Trusted adults can help students choose safer next steps.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online problems can feel confusing because messages move quickly,
            screenshots spread, and group chats can make small conflicts feel
            much bigger. Students may worry that asking for help will make them
            look weak or get someone in trouble, but support can prevent the
            problem from becoming worse.
          </p>

          <p>
            A trusted adult does not need a perfect speech from the student. A
            student can start with a simple sentence like, “I need help with
            something that happened online.” Then they can explain the app or
            chat where it happened, when it happened, who was involved, and what
            they are worried about.
          </p>

          <p>
            Asking for help is especially important when a situation is repeated,
            private, threatening, connected to school, or emotionally
            overwhelming. Trusted adults can help with documenting, reporting,
            blocking, school support, and safe next steps without spreading the
            problem to more people.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for asking trusted adults for help.
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
          Support Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different online problems may need different kinds of adult support.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {supportSituations.map((item) => (
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
            These clues mean students should ask for help quickly.
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
          Asking for help can stop a problem from growing.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student hides the problem, argues back, asks classmates to pick
              sides, or shares screenshots widely because they feel embarrassed
              or unsure what to do.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student tells a trusted adult, shares clear details, avoids
              spreading the conflict, and asks for help choosing safe reporting,
              blocking, or school support steps.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice asking for help using fake examples.
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
          Use these steps when an online problem feels too big to handle alone.
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
          Before finishing Lesson 7.5, students should be able to say:
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
            Lesson 7.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 7.6 will review cyberbullying, digital drama, safe
            support, evidence, reporting, and trusted adult help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/saving-evidence-and-reporting-safely"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 7
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/review"
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