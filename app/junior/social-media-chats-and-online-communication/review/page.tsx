import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Online communication should be thoughtful before it is fast.",
    text: "Students learned that messages, comments, replies, usernames, emojis, and posts can affect privacy, friendships, reputation, and trust. Safer communication starts with pausing before sending.",
  },
  {
    title: "Group chats can spread information quickly.",
    text: "Students learned that group chats can include many people, screenshots, forwarded messages, inside jokes, pressure, and confusion. A safer habit is to avoid sharing private details and ask for help when a chat feels unsafe.",
  },
  {
    title: "Friend requests, followers, and strangers need caution.",
    text: "Students learned that not every online profile is someone they know. Students should be careful with unknown requests, private messages, follower pressure, and accounts that ask for personal information.",
  },
  {
    title: "Photos, screenshots, and posts can travel beyond the original audience.",
    text: "Students learned to think before sharing images, screenshots, comments, jokes, or posts because online content can be copied, saved, forwarded, or misunderstood.",
  },
  {
    title: "Respectful communication can reduce conflict.",
    text: "Students learned that online conflict can grow quickly when people reply with anger, pile on, screenshot, gossip, or pressure others. Safer choices include pausing, using respectful words, leaving unsafe conversations, and asking trusted adults for help.",
  },
];

const vocabularyReview = [
  {
    term: "Online Communication",
    definition:
      "Using messages, comments, posts, chats, video calls, usernames, emojis, or reactions to interact with other people online.",
  },
  {
    term: "Group Chat",
    definition:
      "An online conversation with multiple people where messages, images, jokes, screenshots, and replies can spread quickly.",
  },
  {
    term: "Friend Request",
    definition:
      "A request from another account to connect, follow, message, or see more information on a platform.",
  },
  {
    term: "Screenshot",
    definition:
      "An image saved of something on a screen, such as a message, photo, post, profile, comment, or conversation.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The impression people may form from someone’s online posts, messages, photos, comments, and behavior.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or school staff member who can help when online communication feels confusing, unsafe, private, or hurtful.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Fast Reply",
    situation:
      "A student receives a message that feels rude and wants to reply immediately with an angry comeback.",
    risk:
      "A fast angry reply can make conflict worse, be screenshotted, or spread to more people.",
    smarterChoice:
      "Pause, do not reply while upset, save the message if needed, and ask a trusted adult for help if the situation feels serious.",
  },
  {
    title: "Scenario 2: The Group Chat Screenshot",
    situation:
      "Someone in a group chat sends a screenshot of another student’s private message and asks everyone to react.",
    risk:
      "Sharing or reacting to private screenshots can hurt someone’s privacy and increase online drama.",
    smarterChoice:
      "Do not pile on or forward it. Leave the conversation if needed and tell a trusted adult if someone is being targeted.",
  },
  {
    title: "Scenario 3: The Unknown Follower",
    situation:
      "An account the student does not recognize sends a friend request and asks what school they attend.",
    risk:
      "The account may not be who it claims to be, and the question asks for private personal information.",
    smarterChoice:
      "Do not share school, location, schedule, phone number, passwords, codes, or private details. Ask a trusted adult if unsure.",
  },
  {
    title: "Scenario 4: The Photo Before Posting",
    situation:
      "A student wants to post a photo from an event, but other students are visible in the background.",
    risk:
      "Photos can reveal people, locations, uniforms, school details, or private moments that others did not agree to share.",
    smarterChoice:
      "Pause before posting, think about privacy, get permission when needed, and avoid sharing details that identify people or places.",
  },
  {
    title: "Scenario 5: The Conflict Pile-On",
    situation:
      "A disagreement starts in a comment section, and classmates begin joining in with jokes and insults.",
    risk:
      "More replies can turn a disagreement into a bigger conflict that hurts people and damages reputations.",
    smarterChoice:
      "Do not join the pile-on. Step away, report or mute when appropriate, and ask a trusted adult if someone is being hurt or threatened.",
  },
];

const reviewQuestions = [
  {
    question:
      "A student gets an unknown friend request from an account asking what school they attend. What is the safer response?",
    choices: [
      "Share the school name to be friendly",
      "Do not share private details and ask a trusted adult if unsure",
      "Send the account more personal information",
    ],
    answer: "Choice B",
    explanation:
      "Unknown accounts should be handled carefully. Students should not share school, location, schedule, phone number, passwords, codes, or private information with unfamiliar people online.",
  },
  {
    question:
      "Someone posts a screenshot of a private message in a group chat. What is the warning sign?",
    choices: [
      "Private information is being spread without care",
      "The chat has more than one person",
      "The message uses normal words",
    ],
    answer: "Choice A",
    explanation:
      "Screenshots can spread private conversations beyond the original audience. Students should avoid forwarding, reacting to, or piling on when someone’s privacy is being harmed.",
  },
  {
    question:
      "A student is angry and wants to send a harsh reply immediately. What should they do first?",
    choices: [
      "Send the reply before thinking",
      "Pause and avoid replying while upset",
      "Post the argument publicly",
    ],
    answer: "Choice B",
    explanation:
      "Pausing can prevent online conflict from growing. Messages can be saved, forwarded, or misunderstood, so students should think before sending.",
  },
  {
    question:
      "Before posting a group photo, what should a student think about?",
    choices: [
      "Whether the photo could reveal people, locations, or private details",
      "Only whether the photo looks funny",
      "Whether strangers will like the post",
    ],
    answer: "Choice A",
    explanation:
      "Photos can reveal personal details and include people who did not agree to be posted. Students should pause and think about privacy before sharing.",
  },
  {
    question:
      "A group chat turns into insults and classmates start piling on. What is the safer choice?",
    choices: [
      "Join in so the student is not left out",
      "Forward the messages to more people",
      "Do not join the pile-on and ask a trusted adult if someone is being targeted",
    ],
    answer: "Choice C",
    explanation:
      "Joining a pile-on can make harm worse. A safer response is to step away, avoid spreading it, and get trusted help when someone is being hurt or targeted.",
  },
];

const reflectionQuestions = [
  "Why should students pause before sending messages or posting online?",
  "How can group chats make private information spread quickly?",
  "Why should students be careful with unknown followers or friend requests?",
  "What should students think about before sharing a photo, screenshot, or post?",
  "How can respectful communication help prevent online conflict from growing?",
  "Who can help when an online conversation becomes confusing, unsafe, private, or hurtful?",
];

const finalChecklist = [
  "I can explain why online communication should be thoughtful and respectful.",
  "I can make safer choices before sending messages, replies, comments, or posts.",
  "I can recognize group chat risks like screenshots, pressure, and private information spreading.",
  "I can handle unknown friend requests, followers, and messages with caution.",
  "I can think before sharing photos, screenshots, jokes, or posts.",
  "I can avoid joining pile-ons, gossip, pressure, or online conflict.",
  "I can protect privacy by not sharing personal details with unfamiliar people online.",
  "I know when to ask a trusted adult, teacher, guardian, or counselor for help.",
];

const badgeSkills = [
  "Thoughtful messaging",
  "Group chat safety",
  "Friend request caution",
  "Screenshot awareness",
  "Respectful conflict response",
  "Trusted adult help",
];

export default function SocialMediaChatsAndOnlineCommunicationReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Social Media, Chats, and Online Communication Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 6: Social Media, Chats, and Online
          Communication. Students will review online communication basics,
          group chat safety, friend requests, followers, photos, screenshots,
          posts, respectful communication, and online conflict.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/respectful-communication-and-online-conflict"
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
            href="/junior#junior-learning-path"
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
          <p className="text-cyan-300 font-semibold mb-3">Module Summary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 6 taught students to communicate online with safety,
            respect, privacy, and thoughtfulness.
          </h2>

          <div className="space-y-5">
            {moduleSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Vocabulary Review</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review the key online communication safety words.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyReview.map((word) => (
            <div
              key={word.term}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Review each situation, identify the risk, and compare the safer
            choice.
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

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">Risk</h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Choice
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterChoice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Choose the Safer Response
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Choose first, then reveal the safer answer.
        </h2>

        <div className="space-y-5">
          {reviewQuestions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-sm text-cyan-300 font-semibold mb-3">
                Question {index + 1}
              </p>

              <h3 className="text-2xl font-bold mb-5">{item.question}</h3>

              <div className="space-y-3 mb-5">
                {item.choices.map((choice, choiceIndex) => (
                  <div
                    key={choice}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    <span className="font-bold text-cyan-200">
                      Choice {String.fromCharCode(65 + choiceIndex)}:
                    </span>{" "}
                    {choice}
                  </div>
                ))}
              </div>

              <details className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <summary className="cursor-pointer font-bold text-emerald-200">
                  Reveal safer response
                </summary>

                <div className="mt-4 text-slate-200 leading-relaxed">
                  <p className="font-bold mb-2">
                    Correct Answer: {item.answer}
                  </p>

                  <p>{item.explanation}</p>
                </div>
              </details>
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

            <h2 className="text-3xl font-bold mb-6">
              Think about how Module 6 connects to real communication.
            </h2>

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
            <p className="text-cyan-300 font-semibold mb-3">
              Junior Skill Badge
            </p>

            <h2 className="text-3xl font-bold mb-6">Smart Communicator</h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can communicate online more safely,
              think before sending or posting, protect privacy in group chats,
              handle friend requests carefully, avoid online conflict, and ask
              trusted adults for help when communication feels unsafe.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {badgeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Final Module 6 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 6, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {finalChecklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <p className="text-emerald-200 font-semibold mb-3">
              Module 6 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Social Media, Chats, and Online Communication.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module,
              where they will learn how to respond safely when online behavior
              becomes hurtful, stressful, or unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Module 6 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 6 or return to the Junior
            learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/respectful-communication-and-online-conflict"
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
              href="/junior#junior-learning-path"
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