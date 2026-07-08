import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reviewTopics = [
  {
    title: "What Cyberbullying Means",
    text: "Cyberbullying is repeated or targeted hurtful behavior online, such as cruel messages, embarrassing posts, exclusion, threats, or pressure that makes someone feel unsafe or overwhelmed.",
  },
  {
    title: "Digital Drama vs Serious Harm",
    text: "Digital drama may involve arguments or misunderstandings, while serious harm includes repeated targeting, threats, private information sharing, or situations where someone needs trusted adult help right away.",
  },
  {
    title: "Bystanders and Upstanders",
    text: "A bystander sees hurtful behavior. An upstander responds safely by not joining in, supporting the person being targeted, saving evidence when appropriate, and getting help.",
  },
  {
    title: "Saving Evidence and Reporting",
    text: "Students should avoid arguing back, save important information with trusted adult help, and report unsafe behavior through school, app, or family support systems.",
  },
  {
    title: "Asking Trusted Adults",
    text: "Students do not have to handle online harm alone. Trusted adults can help decide what to save, what to report, when to block, and how to stay safe.",
  },
];

const safetyHabits = [
  "Pause before replying to hurtful messages.",
  "Do not join in, laugh at, forward, or repost harmful content.",
  "Support the person being targeted without making the conflict worse.",
  "Save important evidence with help from a trusted adult.",
  "Report serious or repeated online harm to the right adult or platform.",
  "Ask for help when online behavior feels unsafe, stressful, repeated, or threatening.",
];

const warningSigns = [
  {
    title: "Repeated Targeting",
    text: "The same person is being mocked, excluded, pressured, or messaged in a hurtful way again and again.",
  },
  {
    title: "Private Information Shared",
    text: "Someone posts or threatens to share private messages, personal details, photos, screenshots, or rumors without permission.",
  },
  {
    title: "Pressure to Stay Silent",
    text: "Someone tells a student not to tell an adult, not to report, or not to save proof.",
  },
  {
    title: "Group Pile-On",
    text: "Several people join in to embarrass, insult, exclude, or pressure one person online.",
  },
  {
    title: "Threatening Language",
    text: "Messages include threats, intimidation, or pressure that makes someone feel unsafe.",
  },
  {
    title: "Stress or Fear",
    text: "A student feels scared, overwhelmed, distracted, or afraid to open messages or go online.",
  },
];

const scenarioReview = [
  {
    title: "The Group Chat Pile-On",
    situation:
      "A student sees a group chat where several classmates are making fun of one person and encouraging others to join.",
    saferResponse:
      "Do not join in or forward the messages. Support the targeted student privately if safe, save important evidence with trusted adult help, and report it to a teacher, counselor, parent, or guardian.",
    lessonConnection:
      "This connects to bystanders, upstanders, cyberbullying warning signs, and safe reporting.",
  },
  {
    title: "The Screenshot Threat",
    situation:
      "Someone says they will post an embarrassing screenshot unless another student does what they want.",
    saferResponse:
      "Do not argue, bargain, or send more information. Save the message with trusted adult help and report the pressure to a trusted adult right away.",
    lessonConnection:
      "This connects to privacy, pressure, serious harm, evidence, and trusted adult support.",
  },
  {
    title: "The Online Argument",
    situation:
      "Two students are arguing in comments, and the messages are becoming more personal and hurtful.",
    saferResponse:
      "Pause before replying, avoid insults, leave the conversation if needed, and ask for help if the argument becomes repeated, threatening, or unsafe.",
    lessonConnection:
      "This connects to digital drama, respectful communication, and knowing when a problem needs help.",
  },
  {
    title: "The Student Who Feels Stuck",
    situation:
      "A student says they do not want to tell an adult because they are worried the situation will get worse.",
    saferResponse:
      "Choose a trusted adult, explain what happened, show the messages if safe, and ask for help making a plan before responding or reporting alone.",
    lessonConnection:
      "This connects to asking trusted adults for help and not handling online harm alone.",
  },
];

const actionSteps = [
  "Stop and pause before reacting emotionally.",
  "Do not reply with insults, threats, or revenge posts.",
  "Do not spread screenshots, rumors, private messages, or embarrassing content.",
  "Save evidence safely when a trusted adult says it is appropriate.",
  "Block, mute, leave, or report when those tools are safe and helpful.",
  "Tell a trusted adult when online behavior becomes repeated, threatening, stressful, or unsafe.",
];

const reflectionQuestions = [
  "What is one difference between digital drama and cyberbullying?",
  "Why is joining in or forwarding hurtful content risky?",
  "How can an upstander help without making the situation worse?",
  "Why should students ask a trusted adult before handling serious online harm alone?",
  "What should a student do if messages feel threatening, repeated, or unsafe?",
];

const skillCheck = [
  {
    question:
      "A student sees classmates repeatedly making fun of one person in a group chat. What is the safer response?",
    choices: [
      "Join in so the group does not get mad",
      "Do not join in, support the targeted student safely, and ask a trusted adult for help",
      "Forward the messages to more people",
    ],
    answer: "Choice B",
    explanation:
      "Students should not join or spread harmful behavior. Safe support and trusted adult help are better responses.",
  },
  {
    question:
      "Someone threatens to post an embarrassing screenshot unless a student does what they ask. What warning sign is present?",
    choices: [
      "Pressure and private information risk",
      "A normal joke with no concern",
      "A safe request from a friend",
    ],
    answer: "Choice A",
    explanation:
      "Threats and pressure involving screenshots or private content are serious warning signs. Students should get trusted adult help.",
  },
  {
    question:
      "What should a bystander avoid doing when online comments become hurtful?",
    choices: [
      "Laughing, liking, forwarding, or adding more hurtful comments",
      "Leaving the conversation if needed",
      "Telling a trusted adult when someone may be unsafe",
    ],
    answer: "Choice A",
    explanation:
      "Liking, forwarding, laughing, or adding hurtful comments can make the harm spread. Students should avoid helping the conflict grow.",
  },
  {
    question:
      "When should a student ask a trusted adult for help?",
    choices: [
      "Only after replying many times",
      "When behavior feels repeated, threatening, unsafe, overwhelming, or hard to handle alone",
      "Never, because online problems should always stay private",
    ],
    answer: "Choice B",
    explanation:
      "Trusted adults can help students make a safer plan, report correctly, and avoid handling serious online harm alone.",
  },
  {
    question:
      "What is a safer way to handle evidence?",
    choices: [
      "Delete everything immediately before telling anyone",
      "Post the evidence publicly so everyone can see it",
      "Save important information with trusted adult help and avoid spreading it",
    ],
    answer: "Choice C",
    explanation:
      "Evidence can help adults understand what happened, but it should not be spread publicly or used for revenge.",
  },
];

const checklist = [
  "I can explain what cyberbullying means.",
  "I can tell the difference between digital drama and serious online harm.",
  "I can describe how bystanders and upstanders can respond safely.",
  "I can explain why evidence should be handled carefully with trusted adult help.",
  "I can identify when online behavior should be reported.",
  "I know that students should ask trusted adults for help when online behavior feels unsafe or overwhelming.",
];

export default function CyberbullyingDigitalDramaAndGettingHelpReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyberbullying, Digital Drama, and Getting Help Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This review helps students connect the full Module 7 skill set:
          recognizing cyberbullying, understanding digital drama, responding as
          safe upstanders, saving evidence carefully, reporting serious issues,
          and asking trusted adults for help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/asking-trusted-adults-for-help"
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
            href="/junior/misinformation-ai-and-online-content-trust"
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
              How can students respond safely when online behavior becomes
              hurtful, stressful, or unsafe?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              The safest response is not revenge, silence, or handling it alone.
              Students should pause, avoid spreading harm, support others safely,
              save important information carefully, report when needed, and ask
              trusted adults for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Topics</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          What students should remember from Module 7.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-200 mb-3">
                {topic.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{topic.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Safety Reminder</p>

          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-8">
            <h2 className="text-3xl font-bold text-red-200 mb-4">
              Do not respond to online harm with revenge or more harm.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              insult back, threaten back, repost private content, publicly shame
              others, or try to solve serious online harm alone. Safer choices
              include pausing, saving important information carefully, reporting,
              and asking trusted adults for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Safe Response Habits</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safer choices protect people and reduce harm.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {safetyHabits.map((habit) => (
            <div
              key={habit}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {habit}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Warning Signs</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Some online problems need help quickly.
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
          The goal is to reduce harm, not win the argument.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student replies angrily, posts screenshots publicly, spreads the
              drama, joins the group, or keeps the situation secret even when it
              feels unsafe or overwhelming.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids adding harm, supports others safely,
              saves important information carefully, reports serious issues, and
              asks trusted adults for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice connecting Module 7 lessons to real-life choices.
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

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
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
                    Lesson Connection
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.lessonConnection}
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
          Use these steps when online behavior becomes hurtful or unsafe.
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
          Before finishing Module 7, students should be able to say:
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
            Module 7 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Module 8 will help students think carefully about
            misinformation, AI, edited media, source checking, and responsible
            sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/asking-trusted-adults-for-help"
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
              href="/junior/misinformation-ai-and-online-content-trust"
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