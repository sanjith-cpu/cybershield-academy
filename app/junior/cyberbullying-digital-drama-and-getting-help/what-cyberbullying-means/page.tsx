import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what cyberbullying means",
  "Understand how repeated hurtful online behavior can affect students",
  "Recognize that cyberbullying can happen through messages, posts, comments, group chats, games, or shared media",
  "Practice safer choices when online behavior becomes hurtful or uncomfortable",
  "Know when to save evidence, stop responding, and ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Cyberbullying",
    definition:
      "Using digital tools to repeatedly hurt, embarrass, threaten, exclude, or pressure another person.",
  },
  {
    term: "Digital Drama",
    definition:
      "Online conflict, rumors, arguments, or tension that may be stressful but may not always be repeated targeting.",
  },
  {
    term: "Target",
    definition:
      "The person receiving hurtful, repeated, or unwanted online behavior.",
  },
  {
    term: "Bystander",
    definition:
      "Someone who sees hurtful online behavior happening but is not directly involved.",
  },
  {
    term: "Upstander",
    definition:
      "Someone who responds in a safe and helpful way, such as supporting the target or getting trusted help.",
  },
  {
    term: "Evidence",
    definition:
      "A safe record of what happened, such as screenshots, message details, dates, usernames, or links shown to a trusted adult.",
  },
];

const cyberbullyingSituations = [
  {
    title: "Repeated Hurtful Messages",
    explanation:
      "A student keeps receiving mean or insulting messages even after they show they do not want the conversation to continue.",
    saferChoice:
      "Do not argue back. Save evidence if it is safe, block or mute when appropriate, and ask a trusted adult for help.",
  },
  {
    title: "Embarrassing Posts",
    explanation:
      "Someone posts or shares content meant to embarrass, shame, or make fun of another student.",
    saferChoice:
      "Do not spread the post. Save evidence, report it when appropriate, and tell a trusted adult.",
  },
  {
    title: "Group Chat Exclusion",
    explanation:
      "A group chat is used to leave someone out on purpose, make jokes about them, or pressure others to join in.",
    saferChoice:
      "Avoid joining the hurtful behavior. Support the student privately and get trusted help if the behavior continues.",
  },
  {
    title: "Online Game Harassment",
    explanation:
      "A player uses chat, voice, usernames, or repeated messages to target another player in a hurtful way.",
    saferChoice:
      "Use platform safety tools, avoid responding with insults, save details if needed, and ask for help from a trusted adult.",
  },
];

const warningSigns = [
  {
    title: "It Keeps Happening",
    text: "The behavior is repeated instead of being a one-time disagreement or misunderstanding.",
  },
  {
    title: "It Targets One Person",
    text: "The messages, posts, jokes, or comments are aimed at the same student again and again.",
  },
  {
    title: "It Tries to Humiliate",
    text: "The goal seems to be embarrassing, shaming, mocking, or making someone feel unsafe or unwelcome.",
  },
  {
    title: "It Pressures Others to Join",
    text: "Other students are encouraged to laugh, share, comment, exclude, or pile on.",
  },
  {
    title: "It Moves Across Platforms",
    text: "The same hurtful behavior follows the student through texts, social media, games, school tools, or group chats.",
  },
  {
    title: "It Feels Unsafe or Overwhelming",
    text: "The student feels uncomfortable, stressed, scared, trapped, or unsure how to make it stop safely.",
  },
];

const scenarios = [
  {
    title: "The Repeated Message Chain",
    situation:
      "A student receives several mean messages from the same person after school. The messages continue even after the student stops replying.",
    warningSigns:
      "The behavior is repeated and targeted at one student.",
    riskyResponse:
      "Send angry messages back and try to win the argument.",
    smarterResponse:
      "Stop responding, save evidence if it is safe, and show the messages to a trusted adult.",
    whyItWorks:
      "Arguing back can make the situation worse. Trusted adults can help students choose safer next steps.",
  },
  {
    title: "The Embarrassing Screenshot",
    situation:
      "Someone shares a screenshot in a group chat to make another student look bad. Other people start reacting and adding comments.",
    warningSigns:
      "The screenshot is being used to embarrass someone and encourage others to join in.",
    riskyResponse:
      "React with laughing emojis or forward the screenshot to another chat.",
    smarterResponse:
      "Do not spread it. Save evidence if needed, support the student, and ask a trusted adult for help.",
    whyItWorks:
      "Not spreading hurtful content reduces harm and helps keep the situation from growing.",
  },
  {
    title: "The Group Chat Pile-On",
    situation:
      "A group chat starts making jokes about one student again and again. Some students feel uncomfortable but do not know what to say.",
    warningSigns:
      "The jokes are repeated, targeted, and meant to make one student feel left out or embarrassed.",
    riskyResponse:
      "Stay silent forever or join in so the group does not turn on you.",
    smarterResponse:
      "Avoid joining the hurtful comments, support the target privately, and ask a trusted adult for help if it continues.",
    whyItWorks:
      "Students do not have to handle group pressure alone. Safe support can interrupt hurtful behavior.",
  },
  {
    title: "The Game Chat Problem",
    situation:
      "During an online game, one player keeps targeting another player with insulting chat messages and follows them into new matches.",
    warningSigns:
      "The behavior is repeated and follows the student across online spaces.",
    riskyResponse:
      "Insult the player back or share personal information to scare them away.",
    smarterResponse:
      "Use mute, block, or report tools when appropriate, avoid sharing personal details, and tell a trusted adult.",
    whyItWorks:
      "Platform safety tools and trusted help are safer than escalating or sharing private information.",
  },
];

const actionSteps = [
  "Pause before replying to hurtful messages.",
  "Do not forward, repost, like, or react to content meant to embarrass someone.",
  "Save evidence when it is safe and appropriate, such as screenshots or message details.",
  "Use mute, block, report, or privacy tools with trusted guidance when needed.",
  "Support the target without creating more conflict.",
  "Ask a trusted adult when online behavior becomes repeated, hurtful, threatening, or overwhelming.",
];

const reflectionQuestions = [
  "What does cyberbullying mean?",
  "How is repeated hurtful online behavior different from a normal disagreement?",
  "Why is forwarding embarrassing content harmful?",
  "What can a bystander do safely?",
  "Who can students ask for help when online behavior becomes hurtful or unsafe?",
];

const skillCheck = [
  {
    question:
      "A student keeps receiving mean messages after they stop replying. What is the safer response?",
    choices: [
      "Send mean messages back",
      "Stop responding, save evidence if safe, and ask a trusted adult for help",
      "Post the messages publicly to embarrass the other person",
    ],
    answer: "Choice B",
    explanation:
      "Repeated hurtful messages can be cyberbullying. Students should avoid escalating and get trusted help.",
  },
  {
    question:
      "Someone shares an embarrassing screenshot in a group chat. What should a student avoid doing?",
    choices: [
      "Forwarding or reacting to spread it further",
      "Refusing to participate",
      "Asking a trusted adult for help",
    ],
    answer: "Choice A",
    explanation:
      "Spreading embarrassing content can make the harm worse. A safer response is not to share it and to get help when needed.",
  },
  {
    question:
      "Which warning sign suggests behavior may be cyberbullying?",
    choices: [
      "It happens repeatedly and targets the same person",
      "Two friends disagree once about a game",
      "Someone asks a normal homework question",
    ],
    answer: "Choice A",
    explanation:
      "Repeated, targeted hurtful behavior is a major warning sign of cyberbullying.",
  },
  {
    question:
      "What is a safer bystander choice?",
    choices: [
      "Join in so the group laughs",
      "Stay safe, avoid spreading harm, support the target, and get trusted help",
      "Make a new group chat to continue the jokes",
    ],
    answer: "Choice B",
    explanation:
      "Bystanders can help by not spreading harm, supporting the target, and involving trusted adults when needed.",
  },
];

const checklist = [
  "I can explain what cyberbullying means.",
  "I can recognize repeated hurtful online behavior.",
  "I can identify ways cyberbullying can happen through messages, posts, group chats, games, or shared media.",
  "I can avoid spreading embarrassing or hurtful content.",
  "I can choose safer responses like saving evidence, stopping replies, blocking or reporting, and asking for help.",
  "I know when to involve a trusted adult.",
];

export default function WhatCyberbullyingMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Cyberbullying Means
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Cyberbullying means using digital tools to repeatedly hurt, embarrass,
          threaten, exclude, or pressure another person. This lesson teaches
          students how to recognize cyberbullying warning signs and choose safer
          ways to respond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 7
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/digital-drama-vs-serious-harm"
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
              Cyberbullying can happen anywhere students communicate online.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student opens a group chat, game chat, comment section,
              or social media app and sees the same person being targeted again
              and again. Cyberbullying awareness helps students recognize the
              pattern, avoid joining in, and get safe help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Recognizing cyberbullying is the first step toward safer support.
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
              Do not respond to cyberbullying by escalating it.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              send insults back, spread embarrassing content, expose private
              information, or try to handle serious online harm alone. A safer
              response is to pause, save evidence when safe, and ask a trusted
              adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Cyberbullying is repeated hurtful behavior through digital tools.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Students use digital tools to learn, play, chat, create, and stay
            connected. But those same tools can also be misused when someone
            repeatedly sends hurtful messages, spreads embarrassing content,
            excludes someone on purpose, or pressures others to join in.
          </p>

          <p>
            Cyberbullying is more than a normal disagreement. Warning signs
            include repetition, targeting, humiliation, pressure, threats, or a
            pattern that follows a student across apps, chats, games, or school
            tools. Even when something starts as a joke, it can become harmful if
            it keeps hurting someone.
          </p>

          <p>
            Students do not have to solve cyberbullying alone. Safer responses
            include not replying with more hurtful messages, not spreading the
            content, saving evidence when safe, using privacy or reporting tools
            with guidance, and asking a trusted adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding cyberbullying.
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
          Cyberbullying Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Hurtful online behavior can appear in different places.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cyberbullyingSituations.map((item) => (
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
            Cyberbullying warning signs often involve patterns, pressure, and
            targeting.
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
          Hurtful online behavior should not be answered with more harm.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student sends insults back, forwards embarrassing content,
              joins a pile-on, or tries to handle repeated hurtful behavior
              alone.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids spreading harm, saves evidence when
              safe, uses safety tools with guidance, and asks a trusted adult
              for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer responses using fake cyberbullying examples.
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
          Use these habits when online behavior becomes hurtful.
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
          Before finishing Lesson 7.1, students should be able to say:
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
            Lesson 7.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 7.2 will explain the difference between digital drama
            and more serious online harm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 7
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/digital-drama-vs-serious-harm"
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