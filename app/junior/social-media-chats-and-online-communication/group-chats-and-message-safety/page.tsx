import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why group chats need extra care",
  "Understand how messages can spread beyond the original conversation",
  "Recognize risky pressure in group chats and direct messages",
  "Practice safer choices before replying, forwarding, screenshotting, or sharing",
  "Know when to mute, leave, report, or ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Group Chat",
    definition:
      "A message conversation with multiple people where everyone can see the messages that are sent inside the chat.",
  },
  {
    term: "Direct Message",
    definition:
      "A private message between people, often inside an app, game, social media platform, or school tool.",
  },
  {
    term: "Screenshot",
    definition:
      "A picture of what appears on a screen. Screenshots can be saved, shared, or forwarded by someone else.",
  },
  {
    term: "Forwarding",
    definition:
      "Sending a message, photo, screenshot, link, or file from one conversation to another person or group.",
  },
  {
    term: "Online Pressure",
    definition:
      "When people push someone to reply quickly, share information, join drama, send a photo, click something, or do something uncomfortable.",
  },
  {
    term: "Message Safety",
    definition:
      "Making careful choices before sending, replying, forwarding, screenshotting, or sharing anything in a chat.",
  },
];

const messageSituations = [
  {
    title: "New Group Chat",
    explanation:
      "A student gets added to a chat with classmates, teammates, friends, or people they do not know well.",
    saferChoice:
      "Check who is in the chat, avoid sharing private information, and leave or ask for help if the chat feels unsafe.",
  },
  {
    title: "Fast Replies",
    explanation:
      "People in a chat keep asking the student to answer immediately or react without thinking.",
    saferChoice:
      "Pause before replying. Students do not have to respond quickly when a message feels stressful, confusing, or risky.",
  },
  {
    title: "Forwarded Screenshot",
    explanation:
      "Someone sends a screenshot from another conversation and asks the group to react, laugh, or spread it.",
    saferChoice:
      "Do not forward private screenshots or join gossip. Ask a trusted adult if the screenshot could hurt someone or cause drama.",
  },
  {
    title: "Private Information Request",
    explanation:
      "Someone in a chat asks for a phone number, address, school schedule, password, code, location, or personal photo.",
    saferChoice:
      "Do not share private information in a chat. Ask a trusted adult when someone asks for details that feel personal or unnecessary.",
  },
];

const warningSigns = [
  {
    title: "Unknown People",
    text: "The chat includes people the student does not know, does not trust, or did not expect to be added with.",
  },
  {
    title: "Pressure to Respond",
    text: "Messages tell the student to answer now, prove something, send something, or join in before thinking.",
  },
  {
    title: "Private Information",
    text: "Someone asks for personal details, account information, login codes, location details, schedules, or private photos.",
  },
  {
    title: "Screenshots and Forwarding",
    text: "Someone shares private messages or asks others to screenshot, save, forward, or spread a conversation.",
  },
  {
    title: "Mean or Hurtful Messages",
    text: "The chat turns into insults, rumors, threats, embarrassment, exclusion, or pressure to make fun of someone.",
  },
  {
    title: "Suspicious Links or Files",
    text: "Someone posts a link, file, invite, or download and pushes others to open it without explaining why it is safe.",
  },
];

const scenarios = [
  {
    title: "The New Group Invite",
    situation:
      "A student is added to a group chat with a few friends and several people they do not recognize. The group starts asking everyone to share where they live.",
    warningSigns:
      "Unknown people are in the chat, and the group is asking for private location information.",
    riskyResponse:
      "Share the information because everyone else seems to be doing it.",
    smarterResponse:
      "Do not share private details. Leave the chat or ask a trusted adult for help if the situation feels uncomfortable.",
    whyItWorks:
      "Students should not share personal location details in group chats, especially when unknown people can see the messages.",
  },
  {
    title: "The Screenshot Chain",
    situation:
      "Someone posts a screenshot of another student's private message and tells the group to forward it to more people.",
    warningSigns:
      "A private message is being spread, and the group is being pressured to join in.",
    riskyResponse:
      "Forward the screenshot because it seems funny or popular in the chat.",
    smarterResponse:
      "Do not forward the screenshot. Avoid joining the drama and ask a trusted adult if someone may be hurt or embarrassed.",
    whyItWorks:
      "Forwarding private screenshots can harm someone and make a situation worse. Refusing to spread it is a safer choice.",
  },
  {
    title: "The Angry Reply",
    situation:
      "A group chat argument starts after someone makes a rude comment. A student feels angry and wants to send a harsh reply right away.",
    warningSigns:
      "The conversation is emotional, public, and moving quickly.",
    riskyResponse:
      "Send an angry message immediately so everyone knows how the student feels.",
    smarterResponse:
      "Pause before replying, step away from the chat, and ask a trusted adult or calm friend for support if needed.",
    whyItWorks:
      "Messages sent in anger can spread, be screenshotted, or make conflict worse. Pausing gives the student time to choose a safer response.",
  },
  {
    title: "The Suspicious Link",
    situation:
      "A person in a group chat sends a link and says everyone must click it to get a prize or keep access to the chat.",
    warningSigns:
      "The message uses pressure, a reward, and a link that students did not ask for.",
    riskyResponse:
      "Click the link quickly because the chat says everyone must do it.",
    smarterResponse:
      "Do not click the link. Ask a trusted adult or use an official source to check whether the message is real.",
    whyItWorks:
      "Group pressure can make unsafe links feel normal. Students should not test suspicious links or click because others are pressuring them.",
  },
];

const actionSteps = [
  "Pause before replying when a message feels stressful, urgent, angry, or confusing.",
  "Check who is in a group chat before sharing anything personal.",
  "Do not share passwords, login codes, location details, schedules, or private photos in chats.",
  "Do not forward screenshots, rumors, private messages, suspicious links, or unknown files.",
  "Mute, leave, block, or report a chat when the platform and a trusted adult say it is appropriate.",
  "Ask a trusted adult for help when a chat becomes unsafe, hurtful, scary, or too pressured.",
];

const reflectionQuestions = [
  "Why do group chats need extra care?",
  "Why can screenshots make private messages less private?",
  "What should students do when a chat pressures them to respond quickly?",
  "Why should students avoid forwarding private screenshots or rumors?",
  "Who can students ask for help when a chat feels unsafe or hurtful?",
];

const skillCheck = [
  {
    question:
      "A group chat includes people a student does not know and asks everyone to share where they live. What is the safer response?",
    choices: [
      "Share the information because everyone else is doing it",
      "Do not share private details and ask a trusted adult if needed",
      "Send even more personal details to seem friendly",
    ],
    answer: "Choice B",
    explanation:
      "Students should avoid sharing private location details in group chats, especially when unknown people can see the messages.",
  },
  {
    question:
      "Someone sends a screenshot of another student's private message and tells the group to forward it. What should a student do?",
    choices: [
      "Forward it quickly",
      "Do not forward it and avoid joining the drama",
      "Post it in a bigger group chat",
    ],
    answer: "Choice B",
    explanation:
      "Forwarding private screenshots can hurt people and make conflict worse. A safer choice is not to spread it.",
  },
  {
    question:
      "A chat argument makes a student angry and they want to reply harshly right away. What is a safer habit?",
    choices: [
      "Pause before replying and step away if needed",
      "Send the harsh reply before thinking",
      "Ask others to join the argument",
    ],
    answer: "Choice A",
    explanation:
      "Pausing helps students avoid sending messages they may regret or that could make conflict worse.",
  },
  {
    question:
      "A group chat link promises a prize and says everyone must click now. What is the warning sign?",
    choices: [
      "It uses pressure and a reward to push a click",
      "It was sent in a group chat",
      "It has words in the message",
    ],
    answer: "Choice A",
    explanation:
      "Pressure plus a reward can be a warning sign. Students should not test suspicious links and should ask trusted adults when unsure.",
  },
];

const checklist = [
  "I can explain why group chats need extra care.",
  "I can check who is in a chat before sharing information.",
  "I can avoid sharing private details in messages.",
  "I can avoid forwarding private screenshots, rumors, suspicious links, or unknown files.",
  "I can pause before replying when a chat feels stressful or angry.",
  "I know when to ask a trusted adult for help with a chat.",
];

export default function GroupChatsAndMessageSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Group Chats and Message Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Group chats and messages can help students stay connected, but they
          can also spread screenshots, rumors, private information, pressure,
          and conflict very quickly. This lesson teaches students to pause
          before replying, forwarding, sharing, or clicking inside chats.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/online-communication-basics"
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
            href="/junior/social-media-chats-and-online-communication/strangers-followers-and-friend-requests"
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
              Group chats can move faster than students can think.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student is added to a group chat after school. At first,
              it feels normal. Then people start sharing screenshots, asking for
              personal details, posting suspicious links, or arguing. Message
              safety helps students slow down before the chat leads to risky
              choices.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Message safety is about thinking before sending or spreading.
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
              Do not test suspicious links, files, or unsafe chats.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click real suspicious links, open unknown files, share real
              private information, join unsafe chats for practice, or handle
              harmful messages alone. Ask a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Group chat safety means slowing down before messages spread.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Group chats can feel casual because messages come from classmates,
            teammates, friends, or people nearby. But group chats are not always
            private. Messages can be screenshotted, forwarded, misunderstood,
            saved, or shown to people outside the original conversation.
          </p>

          <p>
            Students should be careful when chats ask for private information,
            push quick replies, share screenshots, spread rumors, post unknown
            links, or turn into arguments. A message that seems small in the
            moment can affect someone later if it is saved or shared.
          </p>

          <p>
            Students do not need to solve unsafe chat situations alone. Safer
            choices include pausing before replying, not forwarding private
            content, leaving or muting stressful chats when appropriate, using
            report tools with trusted help, and asking a trusted adult when a
            chat becomes unsafe, hurtful, scary, or too pressured.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding message safety.
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
          Message Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Chats can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {messageSituations.map((item) => (
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
            Message safety means noticing warning signs before responding.
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
          A chat should not pressure students into unsafe sharing or fast replies.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student shares private information, forwards screenshots,
              clicks a suspicious link, or sends an angry message because the
              group is pressuring them.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids spreading private or harmful content,
              refuses unsafe pressure, and asks a trusted adult when a chat
              feels risky or hurtful.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer message decisions using fake examples.
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
          Use these habits before replying or sharing in a chat.
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
          Before finishing Lesson 6.2, students should be able to say:
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
            Lesson 6.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 6.3 will explain how students can think carefully about
            strangers, followers, and friend requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/online-communication-basics"
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
              href="/junior/social-media-chats-and-online-communication/strangers-followers-and-friend-requests"
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