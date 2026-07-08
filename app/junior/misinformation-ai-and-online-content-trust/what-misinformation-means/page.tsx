import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what misinformation means",
  "Understand why false or confusing information can spread online",
  "Recognize that posts, images, videos, comments, and headlines can be misleading",
  "Practice pausing before believing or sharing online content",
  "Know when to check trusted sources or ask a trusted adult",
];

const vocabulary = [
  {
    term: "Misinformation",
    definition:
      "Information that is false, incorrect, incomplete, or misleading, even if the person sharing it did not mean to cause harm.",
  },
  {
    term: "Disinformation",
    definition:
      "False or misleading information that is shared on purpose to confuse, pressure, trick, or influence people.",
  },
  {
    term: "Claim",
    definition:
      "A statement that says something is true, such as a post, headline, caption, video, comment, or message.",
  },
  {
    term: "Source",
    definition:
      "The person, website, organization, account, or place where information comes from.",
  },
  {
    term: "Evidence",
    definition:
      "Facts, data, examples, official information, or trustworthy proof that helps support a claim.",
  },
  {
    term: "Context",
    definition:
      "Extra information that helps people understand the full situation, such as when something happened, who said it, and what was left out.",
  },
];

const misinformationSituations = [
  {
    title: "Viral Rumor",
    explanation:
      "A student sees a popular post claiming something serious happened at school, but the post gives no clear source.",
    saferChoice:
      "Pause before believing or sharing it. Check official school communication or ask a trusted adult.",
  },
  {
    title: "Misleading Screenshot",
    explanation:
      "A screenshot appears to show someone saying something shocking, but the student cannot tell whether it is real, edited, or taken out of context.",
    saferChoice:
      "Do not spread it. Think about missing context and avoid helping a rumor grow.",
  },
  {
    title: "Fake Health or Safety Tip",
    explanation:
      "A message claims to give urgent advice, but it does not come from a trusted health, school, or safety source.",
    saferChoice:
      "Ask a trusted adult and look for official information instead of following random online advice.",
  },
  {
    title: "AI or Edited Media",
    explanation:
      "A picture, video, or audio clip looks real, but it may have been edited, staged, or created with AI tools.",
    saferChoice:
      "Treat it carefully, check reliable sources, and avoid sharing it as fact until it is confirmed.",
  },
];

const warningSigns = [
  {
    title: "No Clear Source",
    text: "The post makes a big claim but does not say where the information came from.",
  },
  {
    title: "Strong Emotion",
    text: "The content tries to make people panic, get angry, feel embarrassed, or react immediately.",
  },
  {
    title: "Too Good or Too Shocking",
    text: "The claim sounds unbelievable, extreme, or designed to grab attention fast.",
  },
  {
    title: "Missing Context",
    text: "The post shows only part of a story, screenshot, quote, video, or image.",
  },
  {
    title: "Pressure to Share",
    text: "The message tells people to repost, forward, tag friends, or spread it quickly before checking.",
  },
  {
    title: "Unverified Account",
    text: "The information comes from an unknown account, fake-looking profile, random page, or account pretending to be official.",
  },
];

const scenarios = [
  {
    title: "The School Rumor Post",
    situation:
      "A student sees a post saying a big school event has been canceled, but the post is from a random account and gives no proof.",
    warningSigns:
      "The post gives no official source and could spread confusion quickly.",
    riskyResponse:
      "Share the post in multiple group chats because it sounds important.",
    smarterResponse:
      "Pause, avoid spreading it, and check the school website, teacher messages, or a trusted adult.",
    whyItWorks:
      "Important school information should come from trusted sources. Sharing unconfirmed rumors can confuse people.",
  },
  {
    title: "The Edited Screenshot",
    situation:
      "A screenshot appears to show a student saying something mean, but the conversation is cropped and no one knows whether it is real.",
    warningSigns:
      "The screenshot may be missing context, edited, or shared to start drama.",
    riskyResponse:
      "Forward it to friends and comment on it before knowing the full story.",
    smarterResponse:
      "Do not spread it. Step away from the drama and ask a trusted adult if someone may be hurt or targeted.",
    whyItWorks:
      "Screenshots can be misleading. Not sharing helps reduce harm and stops rumors from growing.",
  },
  {
    title: "The Viral Safety Tip",
    situation:
      "A video claims students should follow a new safety tip immediately, but it does not come from a school, parent, doctor, or official safety source.",
    warningSigns:
      "The video creates urgency but does not provide a reliable source.",
    riskyResponse:
      "Follow the advice and tell others to do the same because the video has many views.",
    smarterResponse:
      "Check with a trusted adult or official source before believing or acting on the advice.",
    whyItWorks:
      "Popularity does not prove information is true. Trusted adults and official sources are safer for serious topics.",
  },
  {
    title: "The AI Image Surprise",
    situation:
      "A realistic image appears online showing a celebrity, teacher, or student doing something surprising, but no trusted news or official source confirms it.",
    warningSigns:
      "The image may be edited, AI-generated, or shared without context.",
    riskyResponse:
      "Assume it is real and repost it with a shocked caption.",
    smarterResponse:
      "Pause, avoid sharing it as fact, and look for confirmation from trustworthy sources.",
    whyItWorks:
      "Images can be changed or created. Pausing helps students avoid spreading false or unfair information.",
  },
];

const actionSteps = [
  "Pause before believing or sharing surprising online content.",
  "Ask: Who is the source, and are they trustworthy?",
  "Look for evidence before treating a claim as true.",
  "Check whether a screenshot, quote, image, or video is missing context.",
  "Use official school, family, news, or safety sources for serious information.",
  "Ask a trusted adult when information feels urgent, scary, harmful, or confusing.",
];

const reflectionQuestions = [
  "What does misinformation mean?",
  "Why can false information spread quickly online?",
  "Why is a clear source important?",
  "How can missing context make a post misleading?",
  "Who can students ask when they are unsure whether information is true?",
];

const skillCheck = [
  {
    question:
      "A student sees a viral post with a serious school claim, but there is no official source. What is the safer response?",
    choices: [
      "Share it quickly so everyone knows",
      "Pause and check an official school source or trusted adult",
      "Add more guesses in the comments",
    ],
    answer: "Choice B",
    explanation:
      "Serious information should be checked with trusted sources before students believe or share it.",
  },
  {
    question:
      "A screenshot is cropped and missing part of the conversation. What is the warning sign?",
    choices: [
      "It may be missing context",
      "It has text in it",
      "It was sent by a classmate",
    ],
    answer: "Choice A",
    explanation:
      "Cropped screenshots can leave out important context and may make a situation look different from reality.",
  },
  {
    question:
      "A post says to forward it immediately before anyone checks whether it is true. What should a student do?",
    choices: [
      "Forward it to every group chat",
      "Pause, avoid spreading it, and check trusted sources",
      "Change the words and repost it",
    ],
    answer: "Choice B",
    explanation:
      "Pressure to share quickly is a warning sign. Checking first helps prevent misinformation from spreading.",
  },
  {
    question:
      "What is a good habit for handling AI images, edited videos, or shocking posts?",
    choices: [
      "Assume realistic content is always true",
      "Share first and check later",
      "Look for trustworthy confirmation before believing or sharing",
    ],
    answer: "Choice C",
    explanation:
      "Realistic-looking content can be edited or AI-generated, so students should look for trustworthy confirmation.",
  },
];

const checklist = [
  "I can explain what misinformation means.",
  "I can recognize why false information can spread online.",
  "I can identify warning signs like no source, pressure, and missing context.",
  "I can pause before sharing surprising or emotional content.",
  "I can use trusted sources to check important claims.",
  "I know when to ask a trusted adult for help checking information.",
];

export default function WhatMisinformationMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Misinformation Means
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Misinformation means information that is false, incomplete, or
          misleading. This lesson teaches students to slow down before believing
          or sharing online content, especially when a post feels urgent,
          shocking, emotional, or unclear.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 8
          </Link>

          <Link
            href="/junior/misinformation-ai-and-online-content-trust/clickbait-rumors-and-viral-posts"
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
              Online information can look true before it is checked.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a post, screenshot, video, or message that
              everyone is talking about. It feels important, but no one knows
              where it came from. Understanding misinformation helps students
              pause before helping a false or confusing claim spread.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Trustworthy online choices start with pausing and checking.
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
              Do not spread unverified claims for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              create fake rumors, target real people, share private screenshots,
              or repost harmful content to test whether others believe it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Misinformation is false or misleading information that can spread fast.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Misinformation can appear in posts, captions, comments, videos,
            screenshots, headlines, group chats, images, or messages. Sometimes
            people share it by accident because they think it is true. Other
            times, people may share misleading information on purpose to get
            attention, start drama, or influence what others believe.
          </p>

          <p>
            A claim can be misleading even when part of it is true. A screenshot
            may leave out the full conversation. A headline may make something
            sound more dramatic than it really is. A video may be old, edited,
            staged, or missing important context.
          </p>

          <p>
            Students do not need to become investigators. A safer response is to
            pause before reacting, check where the information came from, look
            for trustworthy evidence, avoid spreading harmful claims, and ask a
            trusted adult when the content feels serious, confusing, or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding misinformation.
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
          Misinformation Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online content can create different kinds of trust decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {misinformationSituations.map((item) => (
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
            Misinformation often has clues students can notice before sharing.
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
          A viral post should not pressure students into instant belief.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student reposts a rumor, screenshot, or shocking claim because
              many people are talking about it or because it feels urgent.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source, looks for trustworthy
              evidence, avoids spreading harmful claims, and asks for help when
              needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice checking online content using fake examples.
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
          Use these habits before believing or sharing online content.
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
          Before finishing Lesson 8.1, students should be able to say:
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
            Lesson 8.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 8.2 will explain how clickbait, rumors, and viral posts
            can pressure students before they check the truth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 8
            </Link>

            <Link
              href="/junior/misinformation-ai-and-online-content-trust/clickbait-rumors-and-viral-posts"
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