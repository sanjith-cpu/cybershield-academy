import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what responsible sharing means",
  "Understand why students should pause before reposting online content",
  "Recognize that fast sharing can spread rumors or misinformation",
  "Practice checking source, evidence, date, and context before sharing",
  "Know when to ask a trusted adult before posting or forwarding something uncertain",
];

const vocabulary = [
  {
    term: "Responsible Sharing",
    definition:
      "Pausing before posting, reposting, forwarding, or reacting to online content so that misinformation, rumors, private details, or harmful claims are not spread.",
  },
  {
    term: "Repost",
    definition:
      "Sharing someone else's post again so more people can see it.",
  },
  {
    term: "Forward",
    definition:
      "Sending a message, image, video, or link to another person or group chat.",
  },
  {
    term: "Context",
    definition:
      "The background information that helps someone understand what a post, image, quote, or video really means.",
  },
  {
    term: "Source Check",
    definition:
      "Looking for where information came from and whether the source is trustworthy before believing or sharing it.",
  },
  {
    term: "Pause Before Sharing",
    definition:
      "A safety habit where students stop and think before spreading content that may be false, private, upsetting, or missing context.",
  },
];

const sharingSituations = [
  {
    title: "Viral Claim",
    explanation:
      "A post says something shocking is happening, but it does not show a trustworthy source or clear evidence.",
    saferChoice:
      "Do not repost it right away. Check reliable sources or ask a trusted adult before sharing.",
  },
  {
    title: "Group Chat Rumor",
    explanation:
      "A message about a student, teacher, school event, or local situation spreads quickly in a chat.",
    saferChoice:
      "Avoid forwarding rumors. Ask a trusted adult or official source if the information matters.",
  },
  {
    title: "Emotional Post",
    explanation:
      "A post is designed to make students angry, scared, or excited so they share quickly.",
    saferChoice:
      "Pause and check whether the post uses emotion instead of evidence.",
  },
  {
    title: "Old Content Shared Again",
    explanation:
      "A photo, screenshot, or headline from the past is shared like it is happening today.",
    saferChoice:
      "Check the date and context before believing or sharing it.",
  },
];

const warningSigns = [
  {
    title: "No Clear Source",
    text: "The post does not show where the information came from or only says someone heard it from someone else.",
  },
  {
    title: "Pressure to Share",
    text: "The content says to repost immediately, forward to everyone, or share before it gets deleted.",
  },
  {
    title: "Big Emotion",
    text: "The post uses fear, anger, shock, or excitement to push people to react before checking.",
  },
  {
    title: "Missing Context",
    text: "A screenshot, quote, or video clip is shared without enough background to understand what really happened.",
  },
  {
    title: "Private Information",
    text: "The content includes personal details, faces, usernames, locations, messages, or school information that should not be spread.",
  },
  {
    title: "Too Good or Too Bad to Be True",
    text: "The claim sounds extreme, unbelievable, or shocking but does not include trustworthy evidence.",
  },
];

const scenarios = [
  {
    title: "The Urgent School Rumor",
    situation:
      "A student sees a message in a group chat claiming a school event is canceled. The message says to forward it to everyone, but it does not include an official school source.",
    warningSigns:
      "The message creates urgency, asks people to forward it, and does not show an official source.",
    riskyResponse:
      "Forward the message to more group chats so everyone hears about it quickly.",
    smarterResponse:
      "Pause and check an official school source or ask a trusted adult before sharing the claim.",
    whyItWorks:
      "Important information should come from trusted sources. Sharing unconfirmed claims can confuse people.",
  },
  {
    title: "The Shocking Screenshot",
    situation:
      "A screenshot appears online showing part of a conversation. People are reacting strongly, but the screenshot does not show the full context.",
    warningSigns:
      "The content is incomplete and may be missing important background information.",
    riskyResponse:
      "Post the screenshot again with a strong comment because everyone else is reacting.",
    smarterResponse:
      "Do not repost it. Remember that screenshots can be incomplete, edited, or missing context.",
    whyItWorks:
      "Responsible sharing means not spreading content that could be misleading or unfair without context.",
  },
  {
    title: "The Viral Prize Post",
    situation:
      "A post says students can win a free gift card if they share the post, tag friends, and click a link.",
    warningSigns:
      "The post promises a reward and pushes students to spread it quickly.",
    riskyResponse:
      "Share it with friends because the reward sounds exciting.",
    smarterResponse:
      "Do not share or click the link. Ask a trusted adult and look for an official source if needed.",
    whyItWorks:
      "Reward posts can be used to spread unreliable content or risky links. Pausing protects students and friends.",
  },
  {
    title: "The Old Video Shared as New",
    situation:
      "A video is shared with a caption saying it happened today, but there is no date or reliable source attached.",
    warningSigns:
      "The post may be missing date, source, and context.",
    riskyResponse:
      "Repost the video because it looks real.",
    smarterResponse:
      "Check the date, source, and context before believing or sharing it.",
    whyItWorks:
      "Old or out-of-context media can mislead people when it is shared like current news.",
  },
];

const actionSteps = [
  "Pause before reposting, forwarding, or reacting to surprising content.",
  "Ask: Who made this post, and where did the information come from?",
  "Look for reliable sources, official pages, trusted adults, or school-approved information.",
  "Check whether the post includes evidence, date, and context.",
  "Avoid sharing rumors, private information, screenshots, or emotional claims without verification.",
  "When unsure, do not share it and ask a trusted adult for help.",
];

const reflectionQuestions = [
  "What does responsible sharing mean?",
  "Why can reposting too quickly spread misinformation?",
  "What warning signs should students notice before sharing a post?",
  "Why is context important for screenshots, quotes, and short video clips?",
  "Who can students ask for help when they are not sure whether something is true?",
];

const skillCheck = [
  {
    question:
      "A group chat message says a school event is canceled, but it does not include an official source. What is the safer response?",
    choices: [
      "Forward it to everyone quickly",
      "Pause and check an official school source or ask a trusted adult",
      "Post it publicly with a warning",
    ],
    answer: "Choice B",
    explanation:
      "Important information should be checked with trusted or official sources before it is shared.",
  },
  {
    question:
      "A screenshot is going viral, but it only shows part of a conversation. What is the warning sign?",
    choices: [
      "It may be missing context",
      "It has text in it",
      "It came from a screen",
    ],
    answer: "Choice A",
    explanation:
      "Screenshots can be incomplete, edited, or missing important background information.",
  },
  {
    question:
      "A post says to share immediately before it gets deleted. What should a student do?",
    choices: [
      "Share it before reading carefully",
      "Pause, check the source, and avoid spreading it if it is not confirmed",
      "Send it to every group chat",
    ],
    answer: "Choice B",
    explanation:
      "Pressure to share quickly is a warning sign. Students should pause and check first.",
  },
  {
    question:
      "What is a good habit before sharing online content?",
    choices: [
      "Check the source, evidence, date, and context",
      "Share anything that looks popular",
      "Trust every post with lots of comments",
    ],
    answer: "Choice A",
    explanation:
      "Responsible sharing means checking whether content is trustworthy before spreading it.",
  },
];

const checklist = [
  "I can explain what responsible sharing means.",
  "I can pause before reposting or forwarding surprising content.",
  "I can look for source, evidence, date, and context.",
  "I can recognize pressure to share as a warning sign.",
  "I can avoid spreading rumors, private information, or unverified screenshots.",
  "I know when to ask a trusted adult before sharing uncertain content.",
];

export default function SharingResponsiblyOnlinePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Sharing Responsibly Online
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Responsible sharing means pausing before posting, reposting, or
          forwarding content. This lesson teaches students how to avoid spreading
          rumors, misinformation, missing context, private details, or content
          that has not been checked.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/ai-images-deepfakes-and-edited-media"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/misinformation-ai-and-online-content-trust"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 8
          </Link>

          <Link
            href="/junior/misinformation-ai-and-online-content-trust/review"
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
              Sharing is powerful because it spreads information fast.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a shocking post, a rumor in a group chat,
              or a screenshot that everyone is talking about. It can feel easy
              to repost quickly. Responsible sharing helps students pause before
              spreading something that may be false, private, or missing context.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Responsible sharing protects both the student and the people around
          them.
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
              Do not spread uncertain, private, or harmful content for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              create rumors, repost private information, test people with fake
              stories, share real screenshots, or spread unverified claims to see
              what happens.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sharing responsibly means checking before spreading.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online content can move quickly through posts, stories, comments,
            messages, group chats, and screenshots. A single repost can help more
            people see useful information, but it can also spread rumors,
            misinformation, private details, or content that is missing important
            context.
          </p>

          <p>
            Before sharing, students should ask simple questions. Who made this?
            Where did the information come from? Is there evidence? Is the date
            clear? Is the content trying to make me react quickly? Could sharing
            this hurt someone, embarrass someone, or confuse people?
          </p>

          <p>
            Students do not have to decide alone. If a post seems serious,
            emotional, confusing, private, or too surprising, the safer choice is
            to pause, avoid spreading it, check trusted sources, and ask a trusted
            adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding responsible sharing.
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
          Sharing Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online sharing can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sharingSituations.map((item) => (
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
            Responsible sharing means noticing warning signs before reposting.
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
          Sharing quickly is not the same as sharing responsibly.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student reposts a rumor, screenshot, shocking claim, or private
              detail because it is popular, emotional, or being shared by other
              people.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source and context, avoids sharing
              private or uncertain content, and asks a trusted adult when the
              content feels serious or confusing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responsible sharing decisions using fake examples.
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
          Use these habits before posting, reposting, or forwarding content.
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
          Before finishing Lesson 8.5, students should be able to say:
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
            Lesson 8.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, the Module 8 review will help students practice checking
            misinformation, clickbait, sources, AI media, and responsible
            sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/ai-images-deepfakes-and-edited-media"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/misinformation-ai-and-online-content-trust"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 8
            </Link>

            <Link
              href="/junior/misinformation-ai-and-online-content-trust/review"
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