import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what respectful online communication means",
  "Understand how tone, timing, and audience can affect online messages",
  "Recognize when online conflict is becoming stressful, hurtful, or unsafe",
  "Practice safer choices before replying to anger, rumors, jokes, or drama",
  "Know when to pause, save evidence, step away, or ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Respectful Communication",
    definition:
      "Using words, reactions, and online behavior in ways that are safe, thoughtful, and not meant to embarrass, threaten, or pressure others.",
  },
  {
    term: "Online Conflict",
    definition:
      "A disagreement, argument, misunderstanding, or tense situation that happens through messages, comments, posts, games, or group chats.",
  },
  {
    term: "Tone",
    definition:
      "The feeling a message gives, such as friendly, angry, sarcastic, rude, serious, or joking.",
  },
  {
    term: "Digital Drama",
    definition:
      "Online arguments, rumors, screenshots, comments, or group chat tension that can spread quickly and make people feel stressed.",
  },
  {
    term: "Escalation",
    definition:
      "When a conflict becomes bigger, meaner, louder, more public, or harder to control.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other responsible adult who can help a student handle an online situation safely.",
  },
];

const communicationSituations = [
  {
    title: "Angry Message",
    explanation:
      "A student receives a rude message and wants to reply immediately because they feel upset.",
    saferChoice:
      "Pause before replying, avoid matching the anger, and ask a trusted adult for help if the message feels hurtful or unsafe.",
  },
  {
    title: "Misunderstood Joke",
    explanation:
      "A joke, emoji, comment, or short message is misunderstood and starts an argument.",
    saferChoice:
      "Clarify calmly, avoid sarcasm, and move the conversation offline or to a trusted adult if it keeps getting worse.",
  },
  {
    title: "Group Chat Pile-On",
    explanation:
      "Multiple people in a group chat begin criticizing one student or pushing everyone to take sides.",
    saferChoice:
      "Do not join the pile-on. Support kindness, avoid forwarding drama, and get help if someone is being targeted.",
  },
  {
    title: "Public Comment Conflict",
    explanation:
      "A disagreement moves into comments where many people can watch, react, screenshot, or add pressure.",
    saferChoice:
      "Avoid making the conflict more public. Step away, use platform tools when appropriate, and ask for help if needed.",
  },
];

const warningSigns = [
  {
    title: "Replying While Angry",
    text: "The student wants to send a message quickly because they feel embarrassed, angry, pressured, or ready to argue.",
  },
  {
    title: "Public Pressure",
    text: "Other people are watching, reacting, taking sides, tagging people, or encouraging the conflict to continue.",
  },
  {
    title: "Name-Calling or Insults",
    text: "The conversation starts using rude labels, mocking comments, threats, repeated teasing, or personal attacks.",
  },
  {
    title: "Screenshots and Rumors",
    text: "Messages are being copied, posted, forwarded, or used to create drama without full context.",
  },
  {
    title: "Repeated Contact",
    text: "Someone keeps messaging, commenting, tagging, or pressuring a student after they have tried to stop the conversation.",
  },
  {
    title: "Feeling Unsafe or Overwhelmed",
    text: "The situation makes a student feel scared, trapped, stressed, or unsure how to handle it alone.",
  },
];

const scenarios = [
  {
    title: "The Angry Reply",
    situation:
      "A student gets a rude message after a game. They start typing an angry reply and want to send it right away.",
    warningSigns:
      "The student is reacting while upset, which can make the conflict bigger.",
    riskyResponse:
      "Send a mean reply back because the other person started it.",
    smarterResponse:
      "Pause, do not match the anger, step away from the chat, and ask a trusted adult for help if the message feels hurtful or unsafe.",
    whyItWorks:
      "Pausing gives the student time to make a safer choice instead of escalating the conflict.",
  },
  {
    title: "The Group Chat Side Battle",
    situation:
      "A group chat argument starts after two friends disagree. Other students begin choosing sides and sending screenshots.",
    warningSigns:
      "The conflict is becoming public, spreading through screenshots, and pulling more people into the drama.",
    riskyResponse:
      "Pick a side, send more screenshots, and add comments to make the group laugh.",
    smarterResponse:
      "Do not fuel the argument. Avoid forwarding screenshots, encourage people to stop, and ask a trusted adult if someone is being targeted.",
    whyItWorks:
      "Not spreading drama helps prevent the conflict from becoming more harmful or harder to fix.",
  },
  {
    title: "The Misread Joke",
    situation:
      "A student posts a joke that another person thinks is an insult. Comments start becoming tense.",
    warningSigns:
      "Tone is being misunderstood, and the conversation is moving toward public conflict.",
    riskyResponse:
      "Use sarcasm and tell everyone the other person is overreacting.",
    smarterResponse:
      "Clarify calmly, apologize if the message hurt someone, and stop arguing publicly.",
    whyItWorks:
      "Calm clarification can reduce misunderstanding before a small problem becomes a bigger online conflict.",
  },
  {
    title: "The Repeated Messages",
    situation:
      "A student asks someone to stop messaging them, but the person keeps sending comments, tags, and messages.",
    warningSigns:
      "The contact is repeated and unwanted, and the student may need support instead of handling it alone.",
    riskyResponse:
      "Keep replying again and again because ignoring feels difficult.",
    smarterResponse:
      "Stop engaging, save important evidence if needed, use platform tools when appropriate, and ask a trusted adult for help.",
    whyItWorks:
      "Students should not have to manage repeated unwanted contact alone. Trusted help can make the response safer.",
  },
];

const actionSteps = [
  "Pause before replying when angry, embarrassed, or pressured.",
  "Use calm words and avoid insults, threats, sarcasm, or public callouts.",
  "Do not forward screenshots, rumors, or private messages to fuel drama.",
  "Step away from group chats or comment sections when conflict grows.",
  "Save important evidence if something feels hurtful, repeated, or unsafe.",
  "Ask a trusted adult for help when online conflict feels serious, stressful, or hard to stop.",
];

const reflectionQuestions = [
  "Why can replying while angry make online conflict worse?",
  "How can tone be misunderstood in messages or comments?",
  "Why should students avoid forwarding screenshots during drama?",
  "What is a respectful way to respond to a misunderstanding?",
  "Who can students ask for help if online conflict feels unsafe or stressful?",
];

const skillCheck = [
  {
    question:
      "A student receives a rude message and wants to reply with an insult. What is the safer response?",
    choices: [
      "Reply with something even meaner",
      "Pause, avoid matching the anger, and ask for help if needed",
      "Send the message to everyone in the group chat",
    ],
    answer: "Choice B",
    explanation:
      "Pausing helps students avoid escalating conflict. If a message feels hurtful or unsafe, trusted adult help is safer.",
  },
  {
    question:
      "A group chat starts spreading screenshots from an argument. What is the warning sign?",
    choices: [
      "The conflict is spreading and becoming more public",
      "The group chat has more than one person",
      "The messages are short",
    ],
    answer: "Choice A",
    explanation:
      "Screenshots can spread drama, remove context, and make conflict harder to stop. Students should avoid forwarding them.",
  },
  {
    question:
      "A joke online is misunderstood and comments become tense. What is a respectful choice?",
    choices: [
      "Clarify calmly and avoid arguing publicly",
      "Use sarcasm so everyone knows it was a joke",
      "Tag more people into the argument",
    ],
    answer: "Choice A",
    explanation:
      "Calm clarification can reduce misunderstanding. Sarcasm and public pressure can make conflict worse.",
  },
  {
    question:
      "Someone keeps messaging a student after being asked to stop. What should the student do?",
    choices: [
      "Keep replying all night",
      "Stop engaging, save important evidence if needed, and ask a trusted adult for help",
      "Create a public post about the person",
    ],
    answer: "Choice B",
    explanation:
      "Repeated unwanted contact can become stressful or unsafe. Students should get trusted help instead of handling it alone.",
  },
];

const checklist = [
  "I can explain what respectful online communication means.",
  "I can recognize when tone or timing may cause conflict.",
  "I can pause before replying to anger, drama, or pressure.",
  "I can avoid spreading screenshots, rumors, or private messages.",
  "I can choose calmer responses that reduce conflict.",
  "I know when to ask a trusted adult for help with online conflict.",
];

export default function RespectfulCommunicationAndOnlineConflictPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Respectful Communication and Online Conflict
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online communication can become stressful when messages are rude,
          misunderstood, public, or shared too quickly. This lesson teaches
          students to pause before replying, avoid spreading drama, communicate
          respectfully, and ask for help when conflict feels unsafe or hard to
          stop.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/sharing-photos-screenshots-and-posts"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 6
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication/review"
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
              A fast reply can make a small conflict much bigger.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a rude message, sees a group chat
              argument, or gets tagged in an upsetting comment. The easiest
              reaction might be to reply quickly, but respectful communication
              means slowing down before the conflict grows.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Respectful online communication is a safety skill.
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
              Do not create real conflict or expose real messages for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              start arguments, send hurtful messages, share real screenshots, or
              pressure others while practicing online communication skills.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Respectful communication means thinking before reacting.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online messages can move quickly. A short reply, emoji, screenshot,
            or comment can be misunderstood because people cannot always hear
            tone or see the full situation. What one student thinks is a joke
            may feel rude or embarrassing to someone else.
          </p>

          <p>
            Conflict can also grow when more people join in. Group chats,
            public comments, tags, and screenshots can turn a small disagreement
            into digital drama. When students reply while angry or embarrassed,
            they may say something they would not normally say face to face.
          </p>

          <p>
            A safer habit is to pause before responding. Students can use calm
            words, avoid public arguments, stop forwarding screenshots, step away
            from the conversation, save important evidence when needed, and ask a
            trusted adult for help if the situation feels serious, repeated, or
            unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online conflict.
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
          Communication Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online conflict can appear in different communication spaces.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {communicationSituations.map((item) => (
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
            Respectful communication means noticing when conflict is escalating.
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
          Conflict should not be answered with more conflict.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student replies while angry, uses insults, shares screenshots,
              calls someone out publicly, or keeps arguing because they want to
              win the conflict.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, uses calmer words, avoids spreading drama,
              steps away when needed, saves important evidence, and asks a
              trusted adult for help if the situation feels unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice respectful conflict decisions using fake examples.
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
          Use these habits before replying to online conflict.
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
          Before finishing Lesson 6.5, students should be able to say:
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
            Lesson 6.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 6.6 will review social media, chats, and online
            communication safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/sharing-photos-screenshots-and-posts"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 6
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication/review"
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