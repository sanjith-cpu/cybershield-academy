import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain the difference between digital drama and serious online harm",
  "Recognize when online conflict needs trusted adult help",
  "Understand why students should not handle scary or unsafe situations alone",
  "Practice safer choices when messages become hurtful, threatening, or overwhelming",
  "Know when to save evidence, stop responding, and ask for help",
];

const vocabulary = [
  {
    term: "Digital Drama",
    definition:
      "Online conflict, gossip, arguments, misunderstandings, or tension that can spread through messages, posts, comments, or group chats.",
  },
  {
    term: "Serious Harm",
    definition:
      "Online behavior that feels unsafe, threatening, repeated, targeted, or too serious for a student to handle alone.",
  },
  {
    term: "Escalation",
    definition:
      "When a situation becomes more intense, more public, more repeated, or more harmful over time.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, school staff member, or another responsible adult who can help keep a student safe.",
  },
  {
    term: "Evidence",
    definition:
      "Saved proof of what happened, such as screenshots, message dates, usernames, links, or descriptions that can help a trusted adult understand the situation.",
  },
  {
    term: "Report",
    definition:
      "Using a school, app, website, or trusted adult process to ask for help with unsafe or harmful online behavior.",
  },
];

const harmSituations = [
  {
    title: "Misunderstanding",
    explanation:
      "Two students read a message differently, and the conversation becomes tense or awkward.",
    saferChoice:
      "Pause before replying, use calm words, and move the conversation to a trusted adult if it keeps getting worse.",
  },
  {
    title: "Repeated Targeting",
    explanation:
      "A student keeps receiving mean comments, unwanted messages, or public embarrassment from the same person or group.",
    saferChoice:
      "Do not handle it alone. Save evidence, stop responding, and ask a trusted adult for help.",
  },
  {
    title: "Unsafe Threat",
    explanation:
      "A message includes a serious threat, pressure, or language that makes a student worry about safety.",
    saferChoice:
      "Get trusted adult help right away and follow school or family safety steps.",
  },
  {
    title: "Public Pile-On",
    explanation:
      "A group chat, comment section, or post turns into many people joining in against one student.",
    saferChoice:
      "Avoid joining in, avoid arguing back, save evidence, and involve a trusted adult.",
  },
];

const warningSigns = [
  {
    title: "Repeated Behavior",
    text: "The same hurtful behavior happens again and again instead of being a one-time disagreement.",
  },
  {
    title: "Targeting One Person",
    text: "The messages, comments, screenshots, or jokes focus on embarrassing or isolating one student.",
  },
  {
    title: "Threatening Language",
    text: "The message makes someone feel unsafe, pressured, or afraid to go to school, join a chat, or use an account.",
  },
  {
    title: "Private Information Shared",
    text: "Someone shares personal details, screenshots, photos, locations, rumors, or account information to embarrass or pressure another person.",
  },
  {
    title: "Group Pressure",
    text: "Other people are encouraged to laugh, comment, share, exclude, or gang up on someone online.",
  },
  {
    title: "Student Feels Unsafe",
    text: "The situation feels too serious, stressful, scary, or overwhelming for a student to solve alone.",
  },
];

const scenarios = [
  {
    title: "The Joke That Keeps Going",
    situation:
      "A student makes a joke in a group chat, but classmates keep repeating it after the student asks them to stop.",
    warningSigns:
      "The behavior is repeated and continues after the student clearly wants it to stop.",
    riskyResponse:
      "Ignore it forever or argue back with harsher messages.",
    smarterResponse:
      "Save the messages, stop adding to the argument, and ask a trusted adult for help if it continues.",
    whyItWorks:
      "Repeated targeting can become more serious. Evidence and trusted help make it easier to respond safely.",
  },
  {
    title: "The Screenshot Problem",
    situation:
      "A private message is screenshotted and shared in a group chat to embarrass another student.",
    warningSigns:
      "Private communication is being shared publicly to embarrass someone.",
    riskyResponse:
      "Forward the screenshot again because everyone else is doing it.",
    smarterResponse:
      "Do not share it further. Save evidence if needed and tell a trusted adult or school staff member.",
    whyItWorks:
      "Sharing private content can make harm spread. Stopping the spread and getting help protects the targeted student.",
  },
  {
    title: "The Threatening Message",
    situation:
      "A student receives a message that makes them feel unsafe and worried about what might happen next.",
    warningSigns:
      "The message creates fear, pressure, or concern about safety.",
    riskyResponse:
      "Respond angrily, delete everything, or try to handle it alone.",
    smarterResponse:
      "Do not respond further. Save what happened and show a trusted adult right away.",
    whyItWorks:
      "Safety concerns should not be handled alone. Trusted adults can help decide the safest next step.",
  },
  {
    title: "The Comment Section Pile-On",
    situation:
      "A post turns into many students making mean comments about one person.",
    warningSigns:
      "A group is joining in against one student, and the harm is becoming public.",
    riskyResponse:
      "Add another comment to fit in with the group.",
    smarterResponse:
      "Do not join in. Support the targeted student privately if safe, save evidence if needed, and ask a trusted adult for help.",
    whyItWorks:
      "Students can reduce harm by refusing to participate and getting safe support instead of adding to the pile-on.",
  },
];

const actionSteps = [
  "Pause before replying to online conflict.",
  "Ask: Is this a one-time disagreement or repeated targeted behavior?",
  "Do not join group chats, posts, or comments that target someone.",
  "Save evidence when a situation feels serious, repeated, or unsafe.",
  "Stop responding when messages become threatening, overwhelming, or harmful.",
  "Ask a trusted adult for help instead of trying to solve serious online harm alone.",
];

const reflectionQuestions = [
  "What is the difference between digital drama and serious online harm?",
  "Why can repeated behavior be more serious than a one-time disagreement?",
  "Why should students avoid joining a public pile-on?",
  "Why is saving evidence helpful when asking for help?",
  "Who can students go to when online conflict feels unsafe or overwhelming?",
];

const skillCheck = [
  {
    question:
      "A group chat argument happens once, and both students calm down after. What is this most likely?",
    choices: [
      "Digital drama or conflict that still needs respectful choices",
      "Something students should make worse for attention",
      "A reason to share private information",
    ],
    answer: "Choice A",
    explanation:
      "A one-time disagreement may be digital drama, but students should still use respectful communication and avoid escalating it.",
  },
  {
    question:
      "A student keeps receiving mean messages from the same group after asking them to stop. What is the safer response?",
    choices: [
      "Reply with meaner messages",
      "Save evidence, stop responding, and ask a trusted adult for help",
      "Delete the app and never tell anyone",
    ],
    answer: "Choice B",
    explanation:
      "Repeated targeted behavior can become serious. Evidence and trusted adult support are safer than handling it alone.",
  },
  {
    question:
      "A private screenshot is being shared to embarrass someone. What should a student do?",
    choices: [
      "Forward it because others already saw it",
      "Do not share it further and ask for help if needed",
      "Post it on another app",
    ],
    answer: "Choice B",
    explanation:
      "Sharing private content can spread harm. The safer choice is to stop the spread and involve trusted help when needed.",
  },
  {
    question:
      "What is a warning sign that online conflict may be serious?",
    choices: [
      "The situation is repeated, targeted, threatening, or makes someone feel unsafe",
      "Someone uses punctuation",
      "A chat has more than three people",
    ],
    answer: "Choice A",
    explanation:
      "Repeated, targeted, threatening, or unsafe behavior should be taken seriously and brought to a trusted adult.",
  },
];

const checklist = [
  "I can explain what digital drama means.",
  "I can recognize when online behavior may be serious harm.",
  "I can notice warning signs like repeated targeting or unsafe pressure.",
  "I can avoid joining online pile-ons or spreading private screenshots.",
  "I can save evidence when a situation feels serious or unsafe.",
  "I know when to ask a trusted adult for help.",
];

export default function DigitalDramaVsSeriousHarmPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Digital Drama vs Serious Harm
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital drama can include online arguments, gossip, misunderstandings,
          and group chat conflict. Serious harm happens when behavior becomes
          repeated, targeted, threatening, unsafe, or too overwhelming for a
          student to handle alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/what-cyberbullying-means"
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
            href="/junior/cyberbullying-digital-drama-and-getting-help/bystanders-upstanders-and-safe-support"
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
              Not every online argument is the same.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a group chat joke turns into repeated messages about one
              student. At first it may look like drama, but if it keeps going,
              targets someone, or makes someone feel unsafe, students should not
              handle it alone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online conflict needs careful judgment and safe support.
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
              Do not try to solve serious online harm alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              respond to threats, join harmful chats, spread private screenshots,
              or investigate unsafe situations by themselves. When something
              feels serious or unsafe, students should ask a trusted adult for
              help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The difference is how serious, repeated, targeted, or unsafe the behavior becomes.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Digital drama often includes arguments, rumors, awkward comments,
            hurt feelings, or misunderstandings. It can still be stressful, but
            students may be able to calm it down by pausing, using respectful
            words, leaving the conversation, or asking for support.
          </p>

          <p>
            Serious online harm is different. It may involve repeated targeting,
            public embarrassment, threats, pressure, private information being
            shared, or a situation that makes someone feel unsafe. When that
            happens, students should not keep arguing or try to fix it alone.
          </p>

          <p>
            A safer response is to stop adding to the conflict, save evidence if
            needed, and ask a trusted adult for help. Getting help is not
            overreacting. It is a smart safety step when online behavior becomes
            harmful, scary, repeated, or too much to handle alone.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online conflict and harm.
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
          Online Harm Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different online situations need different safety choices.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {harmSituations.map((item) => (
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
            These clues show online conflict may need adult help.
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
          Serious online harm should not turn into a back-and-forth fight.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student argues back, joins the pile-on, deletes all evidence, or
              tries to handle repeated or unsafe behavior alone.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, stops responding, saves evidence when needed,
              avoids spreading harm, and asks a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding when online conflict needs support.
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
          Use these steps when online conflict starts to feel serious.
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
          Before finishing Lesson 7.2, students should be able to say:
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
            Lesson 7.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 7.3 will explain how bystanders and upstanders can
            support others safely without making online conflict worse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/what-cyberbullying-means"
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
              href="/junior/cyberbullying-digital-drama-and-getting-help/bystanders-upstanders-and-safe-support"
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