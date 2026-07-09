import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Recognize privacy, reputation, and communication risks in everyday online situations",
  "Explain why photos, screenshots, posts, and messages can spread beyond the first audience",
  "Practice safer choices before posting, forwarding, replying, or joining online drama",
  "Use respectful communication habits when a situation feels tense or confusing",
  "Know when to pause, save information if needed, and ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Privacy",
    definition:
      "Protecting personal information, photos, messages, location, school details, and other details that should not be shared widely.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The impression someone creates through their posts, comments, messages, photos, screenshots, and online choices over time.",
  },
  {
    term: "Screenshot",
    definition:
      "An image capture of something on a screen that can be saved or shared by someone else.",
  },
  {
    term: "Audience",
    definition:
      "The people who can see a message, photo, post, chat, profile, or shared content.",
  },
  {
    term: "Context",
    definition:
      "The situation or background that helps people understand what a message, photo, joke, or post was supposed to mean.",
  },
  {
    term: "Respectful Communication",
    definition:
      "Using words and choices online that are safe, kind, thoughtful, and not meant to embarrass, pressure, or harm others.",
  },
];

const communicationSituations = [
  {
    title: "A Photo Before Posting",
    explanation:
      "A student wants to post a group photo, but other people in the photo may not want it shared online.",
    saferChoice:
      "Pause, ask permission, avoid sharing private details, and choose not to post if someone is uncomfortable.",
  },
  {
    title: "A Screenshot in a Group Chat",
    explanation:
      "A student receives a screenshot of a private conversation and the chat starts reacting to it.",
    saferChoice:
      "Do not forward it, do not add to the drama, and ask a trusted adult if the situation seems hurtful or unsafe.",
  },
  {
    title: "A Heated Comment Thread",
    explanation:
      "A disagreement online turns into fast replies, jokes, insults, or pressure to take sides.",
    saferChoice:
      "Slow down, avoid replying while upset, leave the argument if needed, and use respectful words or trusted help.",
  },
  {
    title: "A Post With Private Clues",
    explanation:
      "A post seems normal, but it shows a school name, location, schedule, uniform, address clue, or personal detail.",
    saferChoice:
      "Remove private clues before sharing, limit the audience, or choose not to post at all.",
  },
];

const warningSigns = [
  {
    title: "Private Details",
    text: "A post, photo, message, profile, or screenshot includes personal information, location clues, school details, schedules, or account information.",
  },
  {
    title: "No Permission",
    text: "Someone is sharing another person’s photo, message, name, mistake, or private situation without asking first.",
  },
  {
    title: "Pressure to Forward",
    text: "A chat encourages students to pass along a screenshot, rumor, embarrassing photo, or private message.",
  },
  {
    title: "Fast Angry Replies",
    text: "People are replying quickly while upset, making jokes at someone’s expense, or trying to win an argument instead of solving it.",
  },
  {
    title: "Missing Context",
    text: "A message, joke, clip, or screenshot could be misunderstood because people seeing it do not know the full situation.",
  },
  {
    title: "Reputation Risk",
    text: "A post or comment may make someone look careless, unkind, unsafe, or disrespectful later, even if it feels harmless in the moment.",
  },
];

const scenarios = [
  {
    title: "The Group Photo Post",
    situation:
      "A student takes a group photo after school and wants to post it. One person in the photo says they do not want it online.",
    warningSigns:
      "The post includes other people, and not everyone is comfortable being shared online.",
    riskyResponse:
      "Post it anyway because most of the group likes the photo.",
    smarterResponse:
      "Do not post the photo with that person included. Ask permission, crop or blur private details if appropriate, or choose a different photo.",
    whyItWorks:
      "Respecting permission protects privacy and shows that online sharing should not ignore someone else’s comfort or safety.",
  },
  {
    title: "The Private Screenshot",
    situation:
      "A student receives a screenshot of a private chat. People in the group chat start laughing and asking everyone to forward it.",
    warningSigns:
      "A private conversation is being shared without permission, and the group is pressuring others to spread it.",
    riskyResponse:
      "Forward the screenshot to more friends because everyone else is talking about it.",
    smarterResponse:
      "Do not forward it. Avoid adding comments, save information only if a trusted adult needs to see it, and ask for help if someone is being hurt.",
    whyItWorks:
      "Not spreading private screenshots can reduce harm. Trusted adult support is safer when the situation becomes hurtful or serious.",
  },
  {
    title: "The Comment Argument",
    situation:
      "A student sees a comment thread where classmates are arguing. Someone tags the student and tells them to take a side.",
    warningSigns:
      "The conversation is becoming emotional, public, and focused on winning instead of solving the problem.",
    riskyResponse:
      "Jump in with a harsh reply so the group knows which side the student is on.",
    smarterResponse:
      "Pause before replying, avoid insulting anyone, and move the conversation offline with trusted help if it needs to be solved.",
    whyItWorks:
      "Public arguments can grow quickly online. Pausing and choosing respectful communication helps protect safety and reputation.",
  },
  {
    title: "The Location Clue Post",
    situation:
      "A student wants to post a photo from an event, but the photo shows a school badge, location sign, and time details in the background.",
    warningSigns:
      "The photo includes clues about where the student is, what school they attend, and when they are there.",
    riskyResponse:
      "Post it immediately because the background does not seem important.",
    smarterResponse:
      "Check the photo before posting, remove private clues, limit the audience, or wait until later to share safely.",
    whyItWorks:
      "Small details can reveal more than students intend. Checking before posting helps protect privacy and safety.",
  },
];

const actionSteps = [
  "Pause before posting, forwarding, replying, or sharing screenshots.",
  "Ask permission before sharing photos or messages that include other people.",
  "Check photos and posts for private clues like school, location, schedules, names, or account details.",
  "Avoid forwarding screenshots, rumors, embarrassing content, or private conversations.",
  "Do not reply quickly when upset; wait, reread, and choose respectful words.",
  "Ask a trusted adult for help when a situation feels hurtful, unsafe, confusing, or out of control.",
];

const reflectionQuestions = [
  "Why should students ask permission before posting photos of other people?",
  "How can screenshots create privacy or reputation risks?",
  "Why can a public comment argument get worse quickly?",
  "What private clues should students look for before posting a photo?",
  "Who can students ask for help when online communication becomes stressful or unsafe?",
];

const skillCheck = [
  {
    question:
      "A student wants to post a group photo, but one person says they do not want it online. What is the safer response?",
    choices: [
      "Post it anyway because most people like it",
      "Respect the person’s choice and do not post them without permission",
      "Tag the person so they can explain why they object",
    ],
    answer: "Choice B",
    explanation:
      "Photos can affect privacy and comfort. Students should respect permission before sharing images that include other people.",
  },
  {
    question:
      "A student receives a screenshot of a private chat and classmates ask them to forward it. What should the student do?",
    choices: [
      "Forward it before the conversation gets old",
      "Add a joke so it seems less serious",
      "Do not forward it and ask for trusted help if someone is being hurt",
    ],
    answer: "Choice C",
    explanation:
      "Forwarding private screenshots can spread harm. Trusted help is safer when a situation becomes hurtful or serious.",
  },
  {
    question:
      "A photo shows a school badge and location sign in the background. What is the warning sign?",
    choices: [
      "The photo may reveal private location or school details",
      "The photo has a background",
      "The photo was taken at an event",
    ],
    answer: "Choice A",
    explanation:
      "Background details can reveal more information than students intended. It is safer to check photos before posting.",
  },
  {
    question:
      "A comment thread becomes angry and classmates pressure a student to take a side. What is a safer choice?",
    choices: [
      "Reply quickly while upset",
      "Pause, avoid insults, and get trusted help if needed",
      "Post the strongest comeback possible",
    ],
    answer: "Choice B",
    explanation:
      "Online arguments can grow quickly. Pausing and using respectful communication protects safety and reputation.",
  },
];

const checklist = [
  "I can recognize privacy risks before posting or sharing online.",
  "I can explain why screenshots and forwarded messages can spread harm.",
  "I can check photos and posts for private clues before sharing.",
  "I can choose respectful communication during online conflict.",
  "I know not to spread rumors, embarrassing content, or private conversations.",
  "I know when to ask a trusted adult for help with online communication problems.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Scenario Challenge: Privacy, Reputation, and Communication
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Privacy, reputation, and communication choices can affect people
          beyond the moment. This lesson helps students practice safer choices
          before posting, forwarding, replying, or sharing online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-unsafe-website-or-download"
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
            href="/junior/junior-cyber-safety-capstone/cyber-safety-reflection-and-goal-setting"
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
              One post, screenshot, or reply can travel farther than expected.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student posts a photo, forwards a screenshot, or replies
              in an argument without thinking. The content can be copied,
              misunderstood, or shared with people the student did not expect.
              Safer communication means pausing before the choice spreads.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Privacy and reputation are easier to protect before something is
          shared.
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
              Do not spread private, embarrassing, or hurtful content for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              post real private information, forward real screenshots, expose
              someone’s personal details, join online harassment, or test how far
              private content can spread.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Online communication should protect privacy, respect people, and avoid
          choices that are hard to undo.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Students communicate through posts, group chats, comments, direct
            messages, images, videos, and screenshots. These tools can help
            people stay connected, but they can also spread private information
            or create misunderstandings when used too quickly.
          </p>

          <p>
            A message or photo may seem small in the moment, but the audience can
            change. Someone can screenshot, forward, save, or repost content.
            That means students should think about permission, private clues,
            tone, context, and how a choice could affect someone’s reputation.
          </p>

          <p>
            A safer response is to pause before posting or replying, avoid
            spreading private content, use respectful words, and ask a trusted
            adult when online communication becomes hurtful, confusing, or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for privacy, reputation, and communication choices.
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
          Privacy and Communication Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different communication problems can use the same pause-and-check
          routine.
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
            Privacy and reputation risks often appear before someone shares.
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
          Students should think about audience, permission, and impact before
          sharing.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts quickly, forwards screenshots, shares private
              details, joins online drama, or replies while upset because the
              moment feels funny, urgent, or exciting.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks for private details, asks permission,
              avoids spreading screenshots or rumors, chooses respectful words,
              and gets trusted help when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice privacy, reputation, and communication decisions using fake
            examples.
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
          Use these steps before posting, forwarding, replying, or sharing.
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
          Before finishing Lesson 12.4, students should be able to say:
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
            Lesson 12.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 12.5 will help students reflect on their cyber safety
            habits and set personal goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-unsafe-website-or-download"
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
              href="/junior/junior-cyber-safety-capstone/cyber-safety-reflection-and-goal-setting"
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