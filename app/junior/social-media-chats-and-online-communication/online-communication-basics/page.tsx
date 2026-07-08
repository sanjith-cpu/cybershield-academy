import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what online communication means",
  "Understand why messages, comments, posts, and chats can affect real people",
  "Recognize that tone can be misunderstood online",
  "Practice safer choices before sending, replying, posting, or sharing",
  "Know when to pause, save evidence, leave a conversation, or ask a trusted adult",
];

const vocabulary = [
  {
    term: "Online Communication",
    definition:
      "Using digital tools like messages, chats, comments, posts, emails, or video calls to share information with others.",
  },
  {
    term: "Tone",
    definition:
      "The feeling or attitude a message seems to have, such as friendly, angry, joking, rude, serious, or confusing.",
  },
  {
    term: "Context",
    definition:
      "The background information that helps someone understand what a message means and why it was sent.",
  },
  {
    term: "Pause Before Sending",
    definition:
      "A safety habit where someone stops to think before sending a message, comment, photo, screenshot, or reply.",
  },
  {
    term: "Private Information",
    definition:
      "Details that should not be shared carelessly online, such as full names, locations, schedules, passwords, account details, school information, or family information.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other safe adult who can help a student handle confusing or risky online situations.",
  },
];

const communicationSituations = [
  {
    title: "Direct Message",
    explanation:
      "A student receives or sends a private message through an app, game, school tool, or social media platform.",
    saferChoice:
      "Think before replying, avoid sharing private information, and ask for help if the message feels uncomfortable or unsafe.",
  },
  {
    title: "Group Chat",
    explanation:
      "A group conversation includes classmates, teammates, friends, or people the student does not know well.",
    saferChoice:
      "Remember that messages can spread, screenshots can be taken, and respectful choices matter even in casual chats.",
  },
  {
    title: "Comment or Reply",
    explanation:
      "A student responds to a post, video, photo, school discussion, game chat, or public thread.",
    saferChoice:
      "Pause before posting and avoid comments that are hurtful, private, rude, threatening, or easy to misunderstand.",
  },
  {
    title: "Online Conflict",
    explanation:
      "A message, joke, or comment creates confusion, drama, pressure, or an argument.",
    saferChoice:
      "Do not escalate. Pause, keep calm, leave the conversation if needed, and ask a trusted adult when the situation feels serious.",
  },
];

const warningSigns = [
  {
    title: "Pressure to Reply Quickly",
    text: "Someone pushes the student to answer right away, share something, join a chat, keep a secret, or respond before thinking.",
  },
  {
    title: "Request for Private Information",
    text: "A message asks for personal details, account details, location, school information, passwords, codes, photos, or schedules.",
  },
  {
    title: "Unclear Tone",
    text: "A message seems like it could be a joke, insult, threat, rumor, or misunderstanding, and the student is not sure how to read it.",
  },
  {
    title: "Conversation Turning Hurtful",
    text: "People start insulting, embarrassing, excluding, threatening, spreading rumors, or pressuring someone in the chat.",
  },
  {
    title: "Screenshots or Sharing Without Permission",
    text: "Someone wants to screenshot, forward, repost, or share a private message, photo, or conversation without permission.",
  },
  {
    title: "Unsafe Stranger Contact",
    text: "Someone the student does not know tries to move the conversation somewhere private, asks personal questions, or acts too familiar too quickly.",
  },
];

const scenarios = [
  {
    title: "The Quick Reply Pressure",
    situation:
      "A student gets a message saying, 'Answer right now and do not tell anyone.' The message asks for personal information about the student's schedule.",
    warningSigns:
      "The message creates pressure, asks for private information, and tells the student to keep it secret.",
    riskyResponse:
      "Reply quickly because the sender sounds urgent.",
    smarterResponse:
      "Do not share the information. Pause, save the message if needed, and show a trusted adult.",
    whyItWorks:
      "Students should be careful when a message pressures them, asks for private details, or tells them not to get help.",
  },
  {
    title: "The Joke That Sounds Mean",
    situation:
      "A group chat joke starts to sound hurtful, and one student becomes the target of repeated comments.",
    warningSigns:
      "The conversation is becoming disrespectful and could embarrass or hurt someone.",
    riskyResponse:
      "Join in because everyone else is doing it.",
    smarterResponse:
      "Do not add hurtful comments. Pause, support the person safely, leave the chat if needed, and ask a trusted adult if it continues.",
    whyItWorks:
      "Online communication affects real people. Safer choices reduce harm instead of making the situation worse.",
  },
  {
    title: "The Misread Message",
    situation:
      "A student receives a short message that seems rude, but they are not sure if the sender meant it that way.",
    warningSigns:
      "Tone can be hard to understand online, especially when a message is short or missing context.",
    riskyResponse:
      "Send an angry reply immediately.",
    smarterResponse:
      "Pause before replying. Ask calmly for clarification or wait until they can talk respectfully.",
    whyItWorks:
      "Pausing helps students avoid turning a misunderstanding into a bigger conflict.",
  },
  {
    title: "The Screenshot Request",
    situation:
      "A student is asked to screenshot and share a private conversation from another friend.",
    warningSigns:
      "The request involves sharing someone else's private message without permission.",
    riskyResponse:
      "Send the screenshot because the group wants to see it.",
    smarterResponse:
      "Do not share the screenshot. Respect privacy and ask a trusted adult if the conversation involves safety concerns.",
    whyItWorks:
      "Private messages can spread quickly. Respecting privacy is a safer and more responsible communication habit.",
  },
];

const actionSteps = [
  "Pause before sending messages, comments, photos, screenshots, or replies.",
  "Ask: Could this message hurt, embarrass, pressure, or confuse someone?",
  "Avoid sharing private information in chats, comments, games, or social media messages.",
  "Do not reply quickly to messages that feel urgent, secretive, scary, or uncomfortable.",
  "Leave or mute conversations that become disrespectful, stressful, or unsafe.",
  "Ask a trusted adult when online communication feels confusing, threatening, private, or too hard to handle alone.",
];

const reflectionQuestions = [
  "What does online communication mean?",
  "Why can tone be misunderstood in messages or comments?",
  "Why should students pause before sending a message?",
  "What kinds of information should students avoid sharing in chats?",
  "Who can students ask for help when an online conversation feels unsafe?",
];

const skillCheck = [
  {
    question:
      "A message asks a student to reply immediately and keep the conversation secret. What is the safer response?",
    choices: [
      "Reply quickly so the sender does not get upset",
      "Pause and show a trusted adult if the message feels unsafe",
      "Send personal information to end the conversation",
    ],
    answer: "Choice B",
    explanation:
      "Messages that create pressure or secrecy can be warning signs. A trusted adult can help the student respond safely.",
  },
  {
    question:
      "A group chat joke starts targeting one student repeatedly. What is the warning sign?",
    choices: [
      "The conversation is becoming hurtful",
      "The chat has more than one person",
      "Someone used emojis",
    ],
    answer: "Choice A",
    explanation:
      "Repeated hurtful comments can harm someone. Students should not join in or make the situation worse.",
  },
  {
    question:
      "A student receives a message that might be rude, but the tone is unclear. What should they do first?",
    choices: [
      "Send an angry reply immediately",
      "Pause and ask calmly for clarification if needed",
      "Post the message publicly",
    ],
    answer: "Choice B",
    explanation:
      "Tone can be misunderstood online. Pausing helps prevent conflict from growing.",
  },
  {
    question:
      "What is a good online communication habit?",
    choices: [
      "Think before sending, replying, posting, or sharing",
      "Share private information when someone asks nicely",
      "Forward private screenshots for entertainment",
    ],
    answer: "Choice A",
    explanation:
      "Safe communication starts with pausing and thinking about privacy, respect, safety, and consequences.",
  },
];

const checklist = [
  "I can explain what online communication means.",
  "I can understand why tone can be misunderstood online.",
  "I can pause before sending, replying, posting, or sharing.",
  "I can recognize warning signs in messages and chats.",
  "I can avoid sharing private information in online conversations.",
  "I know when to ask a trusted adult for help.",
];

export default function OnlineCommunicationBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Online Communication Basics
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online communication means using messages, chats, comments, posts,
          emails, games, and social media to connect with others. This lesson
          teaches students to pause before sending, replying, posting, or
          sharing so their communication stays safer, respectful, and thoughtful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 6
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication/group-chats-and-message-safety"
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
              Communicating online means real choices with real effects.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sends a quick message, replies in a group chat,
              comments on a post, or shares a screenshot. It may feel small in
              the moment, but online communication can spread, be saved, be
              misunderstood, or affect how someone feels.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safer online communication starts before you press send.
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
              Do not share private information or respond to unsafe messages.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              share real private information, send private screenshots, meet
              unknown people from online messages, or handle scary, secretive,
              or unsafe conversations alone. Ask a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Online communication is safer when students pause, think, and choose respect.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Students communicate online through texts, group chats, games,
            social media, school tools, comments, emails, and video calls. These
            tools can help people learn, plan, laugh, collaborate, and stay
            connected. But messages can also be misunderstood, screenshotted,
            forwarded, or used to pressure someone.
          </p>

          <p>
            Safe communication starts with questions. Would I say this in person?
            Could this message hurt or embarrass someone? Am I sharing private
            information? Is someone pressuring me to reply quickly or keep a
            secret? Does this conversation feel respectful and safe?
          </p>

          <p>
            Students do not have to solve uncomfortable online conversations
            alone. A safer response is to pause, avoid escalating, protect
            private information, leave or mute harmful conversations when needed,
            and ask a trusted adult when something feels confusing, threatening,
            secretive, or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online communication.
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
          Online conversations can create different kinds of decisions.
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
            Safe online communication means noticing warning signs before responding.
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
          A message should not pressure students into unsafe choices.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student replies quickly, shares private information, joins in
              hurtful comments, forwards screenshots, or keeps an unsafe
              conversation secret because someone pressured them.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, protects private information, communicates
              respectfully, avoids escalating conflict, and asks a trusted adult
              for help when a conversation feels unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer communication decisions using fake examples.
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
          Use these habits before sending or replying online.
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
          Before finishing Lesson 6.1, students should be able to say:
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
            Lesson 6.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 6.2 will explain how to use group chats and messages
            more safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 6
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication/group-chats-and-message-safety"
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