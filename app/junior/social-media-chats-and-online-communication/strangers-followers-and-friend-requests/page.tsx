import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why online connection requests deserve caution",
  "Understand that followers, friends, and mutual contacts are not always trusted people",
  "Recognize warning signs in stranger messages and friend requests",
  "Practice safer choices before accepting, replying, following back, or sharing information",
  "Know when to block, ignore, report, or ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Online Stranger",
    definition:
      "Someone a student does not personally know in real life, even if the person seems friendly, has mutual followers, or uses a familiar profile picture.",
  },
  {
    term: "Follower",
    definition:
      "Someone who can see updates, posts, or profile activity depending on the app and privacy settings.",
  },
  {
    term: "Friend Request",
    definition:
      "A request from another account asking to connect, follow, message, or see more of a student’s online activity.",
  },
  {
    term: "Mutual Connection",
    definition:
      "A person or account that appears to be connected to someone the student knows. This does not automatically mean the account is safe.",
  },
  {
    term: "Private Message",
    definition:
      "A direct message sent inside an app, game, chat, or social platform that may not be visible to everyone else.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other safe adult who can help students handle confusing or unsafe online situations.",
  },
];

const connectionSituations = [
  {
    title: "Unknown Friend Request",
    explanation:
      "A student receives a request from an account they do not recognize, but the account looks friendly or has a popular profile picture.",
    saferChoice:
      "Pause before accepting. Check whether the student actually knows the person in real life and ask a trusted adult when unsure.",
  },
  {
    title: "Mutual Followers",
    explanation:
      "An account has mutual followers or says they know a friend, but the student has never met or talked to them before.",
    saferChoice:
      "Do not trust the account only because of mutuals. Confirm through real-life trusted people before connecting.",
  },
  {
    title: "Private Message From a Stranger",
    explanation:
      "A person the student does not know sends a private message asking questions, giving compliments, or trying to continue the conversation.",
    saferChoice:
      "Avoid sharing private information. Do not feel pressured to reply, and ask a trusted adult if the message feels strange or uncomfortable.",
  },
  {
    title: "Request to Move Apps",
    explanation:
      "Someone asks the student to move the conversation to a different app, game chat, or private space.",
    saferChoice:
      "Pause and get trusted adult help. Moving conversations can make it harder for students to get support or use safety tools.",
  },
];

const warningSigns = [
  {
    title: "The Account Is Unknown",
    text: "The student does not personally know the person behind the account in real life.",
  },
  {
    title: "Too Friendly Too Fast",
    text: "The person acts overly close, gives lots of compliments, or tries to build trust very quickly.",
  },
  {
    title: "Private Information Questions",
    text: "The person asks about school, location, schedule, family, passwords, personal details, or other private information.",
  },
  {
    title: "Pressure to Reply",
    text: "The person keeps messaging, makes the student feel guilty for not answering, or demands quick responses.",
  },
  {
    title: "Move to Another App",
    text: "The person asks to continue on a different app, private chat, game lobby, or account.",
  },
  {
    title: "Secret Conversation",
    text: "The person tells the student not to tell parents, teachers, friends, or other trusted adults.",
  },
];

const scenarios = [
  {
    title: "The Friendly Unknown Request",
    situation:
      "A student gets a friend request from an account with a normal profile picture. The account says, ‘I think we go to the same school.’",
    warningSigns:
      "The student does not actually recognize the person, and the account is asking to connect based on a vague claim.",
    riskyResponse:
      "Accept the request because the account looks normal and might know someone at school.",
    smarterResponse:
      "Do not accept right away. Check with trusted real-life people or ask a trusted adult before connecting.",
    whyItWorks:
      "Profiles and claims can be misleading. Students should not treat an unknown account as safe just because it looks familiar.",
  },
  {
    title: "The Mutual Follower Message",
    situation:
      "A student receives a message from someone with several mutual followers. The person asks what school the student goes to.",
    warningSigns:
      "Mutual followers do not prove trust, and the person is asking for private information.",
    riskyResponse:
      "Answer the question because mutual followers make the account seem safe.",
    smarterResponse:
      "Avoid sharing private information and ask a trusted adult if the message feels suspicious or uncomfortable.",
    whyItWorks:
      "Mutual connections are not proof that someone is safe. School and location details should be protected.",
  },
  {
    title: "The Move Apps Request",
    situation:
      "A person in a game chat asks a student to move the conversation to a private messaging app.",
    warningSigns:
      "The person wants to move the conversation away from the current platform and into a more private space.",
    riskyResponse:
      "Move to the new app because the person seems friendly in the game.",
    smarterResponse:
      "Do not move the conversation. Stop replying if needed and ask a trusted adult for help.",
    whyItWorks:
      "Moving chats can make it harder to use safety tools or get help. Students should keep safety and trusted adults involved.",
  },
  {
    title: "The Secret Message",
    situation:
      "Someone online tells a student, ‘Do not tell anyone we are talking because they will not understand.’",
    warningSigns:
      "The person is trying to make the conversation secret and separate the student from trusted help.",
    riskyResponse:
      "Keep the conversation secret because the person asked nicely.",
    smarterResponse:
      "Do not keep it secret. Save the message if needed, stop replying, and show a trusted adult.",
    whyItWorks:
      "Safe people do not pressure students to hide online conversations from trusted adults.",
  },
];

const actionSteps = [
  "Pause before accepting friend requests, follow requests, or message requests from unknown accounts.",
  "Ask: Do I know this person in real life, and can I confirm who they are?",
  "Do not share private information such as school, address, schedule, family details, passwords, or codes.",
  "Do not move conversations to another app or private space when an unknown person asks.",
  "Use block, mute, report, or privacy tools when a message or request feels unsafe.",
  "Ask a trusted adult when an online connection feels confusing, uncomfortable, pushy, or secretive.",
];

const reflectionQuestions = [
  "Why can an unknown follower or friend request be risky?",
  "Why do mutual followers not automatically make an account safe?",
  "What kinds of questions should students avoid answering from strangers online?",
  "Why is it a warning sign when someone asks to move to another app?",
  "Who can students ask for help when an online request feels uncomfortable?",
];

const skillCheck = [
  {
    question:
      "A student gets a friend request from someone they do not recognize. What is the safer response?",
    choices: [
      "Accept because the profile picture looks normal",
      "Pause, avoid accepting right away, and ask a trusted adult if unsure",
      "Send personal information to figure out who they are",
    ],
    answer: "Choice B",
    explanation:
      "Students should be careful with unknown requests. A normal-looking profile does not prove the person is safe or familiar.",
  },
  {
    question:
      "An unknown account has mutual followers and asks what school a student attends. What is the warning sign?",
    choices: [
      "The account has mutual followers",
      "The account is asking for private information",
      "The message uses a greeting",
    ],
    answer: "Choice B",
    explanation:
      "School information can reveal private details. Mutual followers do not automatically make an unknown account safe.",
  },
  {
    question:
      "Someone in a game chat asks a student to move to a private messaging app. What should the student do?",
    choices: [
      "Move apps right away",
      "Pause, avoid moving the conversation, and ask a trusted adult if unsure",
      "Share their phone number to make chatting easier",
    ],
    answer: "Choice B",
    explanation:
      "Moving conversations to private spaces can reduce safety and support. Students should not feel pressured to move chats.",
  },
  {
    question:
      "What is a safe habit for friend requests and followers?",
    choices: [
      "Accept everyone to be polite",
      "Check whether the person is known in real life before connecting",
      "Reply to every unknown message",
    ],
    answer: "Choice B",
    explanation:
      "Students should think carefully before connecting with people they do not know in real life.",
  },
];

const checklist = [
  "I can explain why unknown friend requests deserve caution.",
  "I can recognize that followers and mutual connections are not always trusted people.",
  "I can identify warning signs in stranger messages.",
  "I can avoid sharing private information with unknown accounts.",
  "I can use safer tools like block, mute, report, or asking for help.",
  "I know when to ask a trusted adult about an online connection.",
];

export default function StrangersFollowersAndFriendRequestsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Strangers, Followers, and Friend Requests
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online connection requests can feel normal, friendly, or exciting, but
          students should think carefully before accepting, replying, following
          back, or sharing information. This lesson teaches students how to
          handle unknown accounts and messages safely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/group-chats-and-message-safety"
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
            href="/junior/social-media-chats-and-online-communication/sharing-photos-screenshots-and-posts"
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
              Not every friendly request comes from a trusted person.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student gets a new follower, a friend request, or a
              private message from someone they do not know. The account looks
              normal and may even have mutual followers. Safer communication
              means pausing before trusting the account or sharing information.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online connections should be checked before they are trusted.
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
              Do not trust unknown accounts just because they look friendly.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test strangers, message unknown accounts for practice, share real
              personal information, or try to investigate suspicious profiles by
              themselves. When unsure, they should ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Safer online communication starts before accepting or replying.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Social apps, games, school tools, and chat platforms can make it
            easy for people to follow, message, or request connections. Some
            requests may come from real friends or classmates. Others may come
            from people the student does not know, fake accounts, or accounts
            that are hard to verify.
          </p>

          <p>
            A student should not trust an account only because it has a profile
            picture, mutual followers, a friendly message, or a familiar-sounding
            username. Safer communication means asking questions first: Do I know
            this person in real life? Can I confirm who they are? Are they asking
            for private information or trying to move the conversation somewhere
            else?
          </p>

          <p>
            Students do not need to handle uncomfortable messages alone. A safer
            response is to pause, avoid sharing private information, use privacy
            tools when needed, and ask a trusted adult if the request feels
            confusing, pushy, secretive, or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online connection safety.
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
          Connection Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Requests, followers, and messages can create different kinds of
          decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {connectionSituations.map((item) => (
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
            Safer communication means noticing red flags before trusting an
            account.
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
          Unknown accounts should not pressure students into quick trust.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student accepts an unknown request, replies to private questions,
              or moves the conversation to another app because the person seems
              friendly.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks whether the person is known in real
              life, avoids sharing private information, and asks a trusted adult
              when the request feels unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer connection decisions using fake examples.
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
          Use these habits before trusting a new online connection.
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
          Before finishing Lesson 6.3, students should be able to say:
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
            Lesson 6.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 6.4 will explain safer choices for sharing photos,
            screenshots, and posts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/group-chats-and-message-safety"
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
              href="/junior/social-media-chats-and-online-communication/sharing-photos-screenshots-and-posts"
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