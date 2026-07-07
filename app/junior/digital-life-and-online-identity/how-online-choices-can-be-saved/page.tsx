import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain how screenshots can make messages last longer",
  "Understand how reposts, downloads, and copied messages can spread content",
  "Recognize why private messages can still affect reputation",
  "Identify risky choices before posting, sending, or sharing",
  "Practice smarter responses when online content is saved or spread",
];

const vocabulary = [
  {
    term: "Screenshot",
    definition:
      "A saved image of what appears on a screen. Screenshots can capture messages, posts, images, profiles, or comments.",
  },
  {
    term: "Repost",
    definition:
      "Sharing something again so a new audience can see it.",
  },
  {
    term: "Download",
    definition:
      "Saving a file, image, video, or document onto a device.",
  },
  {
    term: "Forward",
    definition:
      "Sending a message, image, link, or file to another person or group.",
  },
  {
    term: "Digital Record",
    definition:
      "A saved or stored piece of online activity, such as a post, message, screenshot, comment, or file.",
  },
  {
    term: "Context",
    definition:
      "The background information that helps explain what something means. Online content can look different when context is missing.",
  },
];

const risks = [
  {
    title: "Screenshots Can Spread",
    text: "A message sent to one person can be captured and shown to other people.",
  },
  {
    title: "Context Can Be Lost",
    text: "A joke, comment, or message can look different when only part of it is saved or shared.",
  },
  {
    title: "Saved Content Can Affect Reputation",
    text: "Old posts, comments, images, or messages can shape how others see someone later.",
  },
];

const savedContentTypes = [
  {
    title: "Screenshots",
    explanation:
      "Screenshots can save messages, images, posts, or comments even if the original content is deleted later.",
    smarterHabit:
      "Before sending, ask: Would I be okay if this was saved or shown to a trusted adult?",
  },
  {
    title: "Reposts",
    explanation:
      "Reposts can move content from one audience to a much larger audience.",
    smarterHabit:
      "Avoid reposting private, embarrassing, hurtful, or unclear content.",
  },
  {
    title: "Copied Messages",
    explanation:
      "Text can be copied and pasted into another chat, document, post, or screenshot.",
    smarterHabit:
      "Do not type something that could hurt someone or make a situation worse.",
  },
  {
    title: "Downloads",
    explanation:
      "Images, videos, and files can be saved on devices and shared again later.",
    smarterHabit:
      "Do not share private photos, personal documents, or anything that should stay offline.",
  },
];

const scenarios = [
  {
    title: "The Screenshoted Joke",
    situation:
      "A student sends a joke in a private chat. It is meant for one friend, but the friend screenshots it and shares it with a larger group.",
    warningSigns:
      "The joke mentions another student and could sound mean without the full conversation.",
    riskyResponse:
      "Sending more angry messages and blaming everyone in the group chat.",
    smarterResponse:
      "Pause, stop adding more messages, and ask a trusted adult for help if the screenshot is being used to hurt someone.",
    whyItWorks:
      "Stopping prevents more content from being saved, and trusted adults can help handle the situation safely.",
  },
  {
    title: "The Deleted Post",
    situation:
      "A student posts an embarrassing photo as a joke and deletes it a few minutes later. Later, they find out someone saved it.",
    warningSigns:
      "Deleting a post does not guarantee that nobody saved, screenshotted, or downloaded it.",
    riskyResponse:
      "Posting another joke about the situation to make it seem less serious.",
    smarterResponse:
      "Avoid posting more, ask the person not to share it, and get help from a trusted adult if it spreads.",
    whyItWorks:
      "The student focuses on stopping the spread instead of adding more attention to the problem.",
  },
  {
    title: "The Copied Group Chat Message",
    situation:
      "A student writes a frustrated message about a classmate in a group chat. Someone copies the message and sends it to the classmate.",
    warningSigns:
      "The message involves another person, was written while frustrated, and could hurt someone if shared.",
    riskyResponse:
      "Writing more negative messages to explain what they meant.",
    smarterResponse:
      "Stop messaging, take time to calm down, and apologize or ask an adult for help if needed.",
    whyItWorks:
      "Pausing helps prevent conflict from growing and gives the student time to respond responsibly.",
  },
  {
    title: "The Reposted Profile Picture",
    situation:
      "A student uses a profile picture with a school logo in the background. Someone reposts it in another online space.",
    warningSigns:
      "The image reveals school information and is now visible outside the original audience.",
    riskyResponse:
      "Ignoring it because it was only a profile picture.",
    smarterResponse:
      "Change the profile picture, avoid private background details, and ask for help if the repost feels unsafe.",
    whyItWorks:
      "Changing the image reduces future risk and helps protect private school or location details.",
  },
];

const actionSteps = [
  "Pause before sending messages when angry, embarrassed, excited, or pressured.",
  "Ask yourself: Could this be screenshotted, copied, forwarded, or reposted?",
  "Avoid sharing private details, personal photos, school information, or exact location.",
  "Do not repost content that could embarrass, hurt, or expose someone else.",
  "If something spreads, stop adding more content and ask a trusted adult for help.",
  "Use respectful language, even in private chats.",
];

const reflectionQuestions = [
  "Why can a deleted post still cause problems?",
  "What is one reason screenshots matter?",
  "How can missing context change the meaning of a message?",
  "Why should students pause before posting when angry?",
  "What should someone do if private content is being spread?",
];

const skillCheck = [
  {
    question: "Why can screenshots be risky?",
    answer:
      "Screenshots can save content and allow it to be shared with people outside the original audience.",
  },
  {
    question: "What does it mean when context is lost?",
    answer:
      "It means part of a message, joke, or post is shown without the full background, which can make it look different than intended.",
  },
  {
    question: "What is a smarter choice before sending a private message?",
    answer:
      "Think about whether the message would still be okay if it were saved, copied, or shared later.",
  },
  {
    question: "What should a student do if saved content starts spreading?",
    answer:
      "Stop adding more content, avoid arguing, and ask a trusted adult, teacher, guardian, counselor, or school technology staff member for help.",
  },
];

const checklist = [
  "I can explain how screenshots can save online content.",
  "I can explain why deleted content may not fully disappear.",
  "I can identify risks with reposts, downloads, and copied messages.",
  "I can pause before posting or sending something risky.",
  "I can choose a smarter response if content is saved or spread.",
  "I know when to ask a trusted adult for help.",
];

export default function HowOnlineChoicesCanBeSavedPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          How Online Choices Can Be Saved
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online choices can last longer than expected. Screenshots, reposts,
          copied messages, downloads, and forwarded content can make posts,
          chats, images, and comments travel beyond the original audience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/public-vs-private-online-spaces"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-life-and-online-identity"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 1
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
              Deleting something does not always mean it disappears.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sends a message in a private chat and deletes it
              later. Another person already took a screenshot. The student
              thought the message was gone, but a saved copy still exists.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online content can be saved, copied, and shared in different ways.
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
          <p className="text-cyan-300 font-semibold mb-3">Why This Matters</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Saved content can affect friendships, trust, school reputation, and
            future opportunities.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students often use group chats, gaming communities,
            school platforms, and social apps. A message or post may feel
            temporary, but someone else may save it. When content spreads
            without context, it can create conflict, embarrassment, privacy
            problems, or reputation damage. Thinking before sharing helps
            students avoid problems before they grow.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Online choices can last because other people can save them.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A screenshot can capture a message, post, comment, image, or profile
            exactly as it appears on a screen. Even if the original content is
            deleted later, the screenshot may still exist on someone else’s
            device.
          </p>

          <p>
            Reposts, forwards, copied messages, and downloads can also move
            content to new places. A message meant for one friend can end up in a
            group chat. A photo meant for a small group can be reposted. A
            comment made quickly can be copied and shown without the full
            conversation.
          </p>

          <p>
            This does not mean students should be scared of the internet. It
            means students should pause before sharing. A smarter question is:
            “Would this still be okay if someone saved it or showed it to
            others later?”
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding saved online content.
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
          How Content Can Be Saved
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different saving methods create different risks.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {savedContentTypes.map((item) => (
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
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {item.smarterHabit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Risk Breakdown</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            The risk is not just what you post. It is where it can go after.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-red-200 mb-3">
                  {risk.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{risk.text}</p>
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
          Pause before sending something that could be saved.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student sends an angry message because they think it will stay
              private and disappear after they delete it.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student waits before replying, avoids sending anything hurtful,
              and talks to a trusted adult if the situation feels serious.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responding when online content is saved or shared.
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
          Use these habits before posting, sending, reposting, or replying.
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

            <h2 className="text-3xl font-bold mb-6">Quick review.</h2>

            <div className="space-y-4">
              {skillCheck.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <h3 className="font-bold text-cyan-200 mb-2">
                    {item.question}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 1.4, students should be able to say:
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
            Lesson 1.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 1.5 will focus on managing your digital reputation
            through kindness, privacy, and thoughtful posting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/public-vs-private-online-spaces"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 1
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity/managing-your-digital-reputation"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}