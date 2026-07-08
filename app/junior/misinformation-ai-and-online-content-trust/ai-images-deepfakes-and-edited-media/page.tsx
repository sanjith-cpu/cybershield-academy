import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain that images, videos, and audio can be edited or AI-generated",
  "Understand why realistic media is not always proof",
  "Recognize warning signs of misleading edited media",
  "Practice checking context before believing or sharing a shocking image or video",
  "Know when to ask a trusted adult before reacting to serious or confusing media",
];

const vocabulary = [
  {
    term: "AI-Generated Image",
    definition:
      "An image created by an artificial intelligence tool instead of being taken directly by a real camera.",
  },
  {
    term: "Edited Media",
    definition:
      "A photo, video, screenshot, or audio clip that has been changed, cropped, filtered, rearranged, or taken out of context.",
  },
  {
    term: "Deepfake",
    definition:
      "A realistic-looking video, image, or audio clip made or changed with technology to make it seem like someone said or did something they may not have said or done.",
  },
  {
    term: "Context",
    definition:
      "The background details that help explain what media really shows, including who posted it, when it was made, where it came from, and what happened around it.",
  },
  {
    term: "Manipulation",
    definition:
      "Changing or presenting media in a way that can mislead people, pressure them, or make them believe something false.",
  },
  {
    term: "Verification",
    definition:
      "Checking whether media is real, current, complete, and supported by trusted sources before believing or sharing it.",
  },
];

const contentSituations = [
  {
    title: "Shocking Image",
    explanation:
      "A student sees a dramatic image that claims something serious happened, but there is no clear source or trusted confirmation.",
    saferChoice:
      "Pause before reacting, check trusted sources, and avoid sharing it until it is confirmed.",
  },
  {
    title: "Edited Screenshot",
    explanation:
      "A screenshot appears to show a message or post, but it may be cropped, edited, or missing the full conversation.",
    saferChoice:
      "Do not treat it as complete proof. Avoid spreading it and ask a trusted adult if someone could be harmed.",
  },
  {
    title: "AI-Looking Photo",
    explanation:
      "A photo looks realistic, but small details seem unusual or the post gives no original source.",
    saferChoice:
      "Look for context and trusted confirmation instead of assuming the image is real.",
  },
  {
    title: "Fake Voice or Video Claim",
    explanation:
      "A clip claims a person said something surprising, but it comes from an unknown account and is not confirmed anywhere reliable.",
    saferChoice:
      "Be cautious, do not pile on or repost, and check trusted sources before believing it.",
  },
];

const warningSigns = [
  {
    title: "No Original Source",
    text: "The media is shared by random accounts, but nobody can show where it first came from or who created it.",
  },
  {
    title: "Missing Context",
    text: "The post does not explain when, where, why, or how the media was made.",
  },
  {
    title: "Too Shocking to Pause",
    text: "The image or video is designed to make students feel angry, scared, embarrassed, or rushed into sharing.",
  },
  {
    title: "Cropped or Cut Off",
    text: "The media shows only part of a message, image, video, or conversation and may leave out important details.",
  },
  {
    title: "Unusual Details",
    text: "Parts of the media look strange, mismatched, blurry, inconsistent, or hard to explain.",
  },
  {
    title: "No Trusted Confirmation",
    text: "A serious claim appears in one post but is not confirmed by reliable sources, official accounts, or trusted adults.",
  },
];

const scenarios = [
  {
    title: "The Viral Photo",
    situation:
      "A student sees a dramatic photo claiming something scary happened near school, but the post does not show an official source or current date.",
    warningSigns:
      "The image is serious, but the source, date, and context are unclear.",
    riskyResponse:
      "Share the image quickly because everyone needs to know right away.",
    smarterResponse:
      "Pause, avoid sharing it, check official school messages or trusted sources, and ask a trusted adult.",
    whyItWorks:
      "Serious images can spread panic if they are false, old, edited, or missing context. Checking first protects others.",
  },
  {
    title: "The Cropped Screenshot",
    situation:
      "A screenshot in a group chat appears to show someone saying something rude, but it is cropped and does not show the full conversation.",
    warningSigns:
      "The screenshot may leave out what happened before or after the message.",
    riskyResponse:
      "Treat the screenshot as full proof and join the argument.",
    smarterResponse:
      "Do not spread it, avoid adding to the drama, and get trusted adult help if someone is being targeted.",
    whyItWorks:
      "Cropped screenshots can be misleading. Slowing down can prevent unfair blame and harm.",
  },
  {
    title: "The Fake Celebrity Clip",
    situation:
      "A short video claims a famous person said something shocking, but it only appears on one random account and no trusted source confirms it.",
    warningSigns:
      "The clip makes a big claim without reliable confirmation.",
    riskyResponse:
      "Repost the clip because it is funny or surprising.",
    smarterResponse:
      "Avoid reposting it and check trusted sources before believing the claim.",
    whyItWorks:
      "Realistic clips can be edited or AI-generated. Students should not help misleading content spread.",
  },
  {
    title: "The AI Image Debate",
    situation:
      "A student sees an image that looks real, but some details look unusual and the caption does not say where it came from.",
    warningSigns:
      "The image may be AI-generated, edited, or presented without enough context.",
    riskyResponse:
      "Argue with others online and claim it is definitely real.",
    smarterResponse:
      "Say it needs checking, avoid making strong claims, and look for reliable confirmation.",
    whyItWorks:
      "Students do not need to guess immediately. Careful language and checking help stop misinformation.",
  },
];

const actionSteps = [
  "Pause before reacting to shocking images, videos, screenshots, or audio clips.",
  "Ask: Who posted this, where did it come from, and is there trusted confirmation?",
  "Look for the date, original source, and missing context.",
  "Avoid sharing media that could embarrass, scare, target, or mislead someone.",
  "Do not contact unknown accounts or search for harmful content to investigate.",
  "Ask a trusted adult when media feels serious, confusing, harmful, or too intense to handle alone.",
];

const reflectionQuestions = [
  "Why is realistic media not always proof?",
  "How can a cropped screenshot mislead people?",
  "Why should students check the source and context of a shocking image or video?",
  "What should students do before sharing media that could affect someone's reputation or safety?",
  "Who can students ask for help when media feels serious or confusing?",
];

const skillCheck = [
  {
    question:
      "A shocking image spreads in a group chat, but no one knows where it came from. What is the safer response?",
    choices: [
      "Share it quickly before checking",
      "Pause, avoid sharing, and check trusted sources or ask a trusted adult",
      "Assume it is real because it looks realistic",
    ],
    answer: "Choice B",
    explanation:
      "Realistic media can be old, edited, AI-generated, or missing context. Students should check before believing or sharing it.",
  },
  {
    question:
      "A screenshot is cropped and only shows part of a conversation. What is the warning sign?",
    choices: [
      "It may not show the full context",
      "It is automatically official proof",
      "It has a dark background",
    ],
    answer: "Choice A",
    explanation:
      "Cropped screenshots can leave out important details. Students should avoid treating them as complete proof.",
  },
  {
    question:
      "A video claims someone said something shocking, but only one random account posted it. What should a student do?",
    choices: [
      "Repost it because it is surprising",
      "Avoid reposting and look for trusted confirmation",
      "Join the comments and accuse the person",
    ],
    answer: "Choice B",
    explanation:
      "Deepfakes and edited clips can mislead people. Trusted confirmation matters before believing serious claims.",
  },
  {
    question:
      "What is a smart habit for AI images, deepfakes, and edited media?",
    choices: [
      "Believe it if it has many likes",
      "Pause, check context, and ask for help when needed",
      "Share first and check later",
    ],
    answer: "Choice B",
    explanation:
      "Students should slow down and check context before reacting to media that could mislead or harm others.",
  },
];

const checklist = [
  "I can explain that realistic media is not always proof.",
  "I can recognize that images, videos, screenshots, and audio can be edited or AI-generated.",
  "I can identify warning signs like missing context, unclear sources, and shocking captions.",
  "I can avoid sharing media that could mislead, embarrass, or harm someone.",
  "I can check for trusted confirmation before believing serious media claims.",
  "I know when to ask a trusted adult for help with confusing or harmful media.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          AI Images, Deepfakes, and Edited Media
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          AI images, deepfakes, and edited media can make online content look
          real even when it is changed, missing context, or completely created
          by technology. This lesson teaches students to pause before believing
          or sharing realistic-looking media.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/checking-sources-and-evidence"
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
            href="/junior/misinformation-ai-and-online-content-trust/sharing-responsibly-online"
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
              Seeing is not always the same as knowing.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a photo, screenshot, or video that looks
              real and starts spreading fast. It may still be edited,
              AI-generated, cropped, old, or missing important context. Smart
              digital citizens pause before treating media as proof.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Realistic media can still need careful checking.
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
              Do not search for harmful deepfakes or suspicious media for
              practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              look for harmful images, deepfakes, rumors, or embarrassing media
              to test their skills. When media could hurt, scare, embarrass, or
              mislead someone, students should stop and ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          AI and editing tools can make media look believable, even when it is
          not reliable.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online media can feel convincing because people often trust what
            they can see or hear. But technology can create realistic images,
            change videos, edit audio, crop screenshots, and remove context.
            This means a photo, video, screenshot, or voice clip is not always
            enough to prove a claim.
          </p>

          <p>
            Misleading media does not always look obviously fake. Sometimes the
            problem is not the image itself, but how it is shared. A real photo
            can be old, a screenshot can be cropped, a video can be edited, and
            a caption can make people believe something that is not fully true.
          </p>

          <p>
            Students do not need to solve every media mystery. A safer response
            is to pause, avoid reposting, check trusted sources, use careful
            language, and ask a trusted adult when media could affect someone's
            safety, privacy, reputation, or emotions.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding AI and edited media.
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
          Media Trust Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different kinds of media need careful thinking.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {contentSituations.map((item) => (
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
            AI-generated, edited, or misleading media often has clues worth
            checking.
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
          Realistic media should still be checked before students react.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student believes, reposts, or comments on a shocking image,
              screenshot, video, or audio clip because it looks real and many
              people are reacting to it.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source and context, avoids
              spreading the media, and asks a trusted adult when it could harm
              someone or mislead others.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responding to AI and edited media using fake examples.
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
          Use these habits before trusting or sharing realistic-looking media.
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
          Before finishing Lesson 8.4, students should be able to say:
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
            Lesson 8.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 8.5 will explain how students can share online content
            more responsibly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/checking-sources-and-evidence"
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
              href="/junior/misinformation-ai-and-online-content-trust/sharing-responsibly-online"
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