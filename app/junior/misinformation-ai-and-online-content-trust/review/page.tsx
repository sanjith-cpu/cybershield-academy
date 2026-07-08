import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonRecap = [
  {
    number: "8.1",
    title: "What Misinformation Means",
    text: "Misinformation is information that can be wrong, incomplete, misleading, outdated, or missing important context, even when people share it without trying to cause harm.",
  },
  {
    number: "8.2",
    title: "Clickbait, Rumors, and Viral Posts",
    text: "Clickbait and rumors often use emotion, curiosity, urgency, or popularity to make people click or share before checking.",
  },
  {
    number: "8.3",
    title: "Checking Sources and Evidence",
    text: "Trustworthy online decisions come from checking the source, looking for evidence, comparing information, and asking who created the content.",
  },
  {
    number: "8.4",
    title: "AI Images, Deepfakes, and Edited Media",
    text: "Images, videos, audio, screenshots, and posts can be edited or AI-generated, so students should not believe media only because it looks real.",
  },
  {
    number: "8.5",
    title: "Sharing Responsibly Online",
    text: "Responsible sharing means pausing, checking, avoiding rumors, adding context when needed, and not spreading content that could mislead or harm others.",
  },
];

const reviewGoals = [
  "Explain what misinformation means",
  "Recognize clickbait, rumors, and viral pressure",
  "Check sources, evidence, dates, and context",
  "Understand that AI-generated or edited media can look realistic",
  "Pause before sharing emotional, shocking, or uncertain content",
  "Ask a trusted adult when online content feels confusing, serious, or unsafe",
];

const keyIdeas = [
  {
    title: "Wrong Information Can Spread Fast",
    text: "A post can be shared many times before anyone checks whether it is accurate.",
  },
  {
    title: "Popularity Is Not Proof",
    text: "Likes, views, reposts, and comments do not automatically mean something is true.",
  },
  {
    title: "Screenshots Need Context",
    text: "Screenshots can be cropped, edited, outdated, fake, or missing the full conversation.",
  },
  {
    title: "AI Media Can Look Real",
    text: "Students should slow down before trusting images, videos, or audio that seem surprising or unbelievable.",
  },
  {
    title: "Responsible Sharing Protects Others",
    text: "Sharing responsibly helps reduce confusion, fear, embarrassment, and online harm.",
  },
  {
    title: "Trusted Help Matters",
    text: "Students do not need to investigate serious or confusing claims alone.",
  },
];

const reviewScenarios = [
  {
    title: "The Viral School Rumor",
    situation:
      "A student sees a post claiming a school event is canceled, but the post does not come from the school, a teacher, or an official announcement.",
    warningSigns:
      "The source is unclear, and the post asks people to spread the news quickly.",
    riskyResponse:
      "Share the post immediately so everyone hears about it.",
    saferResponse:
      "Check the official school source or ask a trusted adult before sharing.",
    lesson:
      "Students should confirm important information before spreading it.",
  },
  {
    title: "The Shocking AI Image",
    situation:
      "A dramatic image of a public place appears online, and people in the comments are arguing about what happened.",
    warningSigns:
      "The image is emotional, surprising, and has no clear source or evidence.",
    riskyResponse:
      "Believe the image because it looks real and has many comments.",
    saferResponse:
      "Pause, look for reliable sources, and avoid reposting until the information is confirmed.",
    lesson:
      "Realistic-looking media still needs context and evidence.",
  },
  {
    title: "The Clickbait Headline",
    situation:
      "A headline says, 'You will not believe what happened next!' but the article does not clearly explain who wrote it or where the information came from.",
    warningSigns:
      "The headline is designed to trigger curiosity, but the source and evidence are weak.",
    riskyResponse:
      "Click, believe it, and send it to friends because it sounds exciting.",
    saferResponse:
      "Treat it carefully, check another trusted source, and avoid sharing it as fact.",
    lesson:
      "Clickbait is built to get attention, not always to give accurate information.",
  },
  {
    title: "The Screenshot Without Context",
    situation:
      "Someone shares a screenshot of a message and says it proves another student did something wrong.",
    warningSigns:
      "The screenshot may be missing context, cropped, edited, or shared to create drama.",
    riskyResponse:
      "React publicly and spread the screenshot to others.",
    saferResponse:
      "Do not pile on or spread it. Ask a trusted adult if the situation seems serious.",
    lesson:
      "Screenshots can affect real people, so students should avoid spreading uncertain claims.",
  },
];

const responsibleActions = [
  "Pause before believing or sharing surprising content.",
  "Check who created the post and where the information came from.",
  "Look for evidence from trustworthy sources.",
  "Check whether the information is current or outdated.",
  "Avoid sharing rumors, screenshots, or claims that could embarrass or harm someone.",
  "Ask a trusted adult when content feels serious, confusing, scary, or hard to verify.",
];

const reflectionQuestions = [
  "What is one reason misinformation spreads quickly online?",
  "Why are likes and views not the same as proof?",
  "How can AI-generated or edited media make online content harder to trust?",
  "What should students do before sharing a rumor or surprising post?",
  "Who can students ask for help when they are unsure whether content is trustworthy?",
];

const finalCheck = [
  {
    question:
      "A viral post says something serious happened at school, but it does not come from an official source. What is the safer response?",
    choices: [
      "Share it quickly before anyone else does",
      "Check an official school source or ask a trusted adult before sharing",
      "Add more dramatic words to make people pay attention",
    ],
    answer: "Choice B",
    explanation:
      "Important information should be checked with official or trusted sources before it is shared.",
  },
  {
    question:
      "A video looks real, but there is no clear source and the comments are full of arguments. What should a student remember?",
    choices: [
      "If it looks real, it must be real",
      "Popular videos do not need evidence",
      "Videos can be edited, AI-generated, or missing context",
    ],
    answer: "Choice C",
    explanation:
      "Media can look realistic even when it is edited, AI-generated, or missing important context.",
  },
  {
    question:
      "What is a warning sign of clickbait?",
    choices: [
      "A headline uses shock, mystery, or pressure to make people click",
      "A page includes a date",
      "A source explains where its information came from",
    ],
    answer: "Choice A",
    explanation:
      "Clickbait often uses emotion or curiosity to push people into clicking before thinking.",
  },
  {
    question:
      "A friend sends a screenshot about another student and asks you to repost it. What is the safer choice?",
    choices: [
      "Repost it so others can decide",
      "Do not spread it, and ask a trusted adult if the situation seems serious",
      "Edit the screenshot to make it funnier",
    ],
    answer: "Choice B",
    explanation:
      "Screenshots can be incomplete, private, or harmful. Students should avoid spreading them and get help when needed.",
  },
  {
    question:
      "What does responsible sharing mean?",
    choices: [
      "Sharing anything that gets attention",
      "Pausing, checking, and avoiding content that could mislead or harm others",
      "Only checking posts after they become popular",
    ],
    answer: "Choice B",
    explanation:
      "Responsible sharing means slowing down, checking information, and thinking about how a post could affect others.",
  },
];

const checklist = [
  "I can explain what misinformation means.",
  "I can recognize clickbait, rumors, and viral pressure.",
  "I can check a source before trusting a post.",
  "I can explain why screenshots, images, videos, and audio may need extra context.",
  "I can pause before sharing surprising or emotional content.",
  "I know when to ask a trusted adult for help checking online content.",
];

export default function MisinformationAIAndOnlineContentTrustReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Misinformation, AI, and Online Content Trust Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This review helps students practice the main ideas from Module 8:
          misinformation, clickbait, rumors, source checking, evidence, AI-made
          media, edited content, and responsible sharing. The goal is to build
          careful thinking before believing or spreading online content.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/sharing-responsibly-online"
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
            href="/junior/devices-networks-and-wifi-safety"
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
          <p className="text-cyan-300 font-semibold mb-3">Module Big Question</p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students decide whether online content is trustworthy
              before believing or sharing it?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Students can pause, check sources, look for evidence, compare
              information, notice emotional pressure, and ask trusted adults when
              claims are serious, confusing, or hard to confirm.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this review, students should be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewGoals.map((goal) => (
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
              Do not investigate risky content alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              open suspicious links, search for harmful content, contact unknown
              accounts, spread rumors, or test questionable media for practice.
              If content feels serious, scary, private, or confusing, students
              should ask a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Lesson Recap</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review what each Module 8 lesson covered.
        </h2>

        <div className="space-y-6">
          {lessonRecap.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-cyan-300 font-semibold mb-2">
                Lesson {lesson.number}
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {lesson.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{lesson.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Ideas</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            These ideas help students decide what to trust.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyIdeas.map((idea) => (
              <div
                key={idea.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {idea.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{idea.text}</p>
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
          Trustworthy thinking starts before sharing.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student believes or shares a post because it is shocking,
              popular, funny, emotional, or sent by a friend, without checking
              the source or evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks where the information came from, looks
              for evidence and context, avoids spreading rumors, and asks a
              trusted adult when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice careful online content decisions using fake examples.
          </h2>

          <div className="space-y-6">
            {reviewScenarios.map((scenario) => (
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
                      Safer Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.saferResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Review Lesson
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Responsible Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these steps before believing or sharing online content.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {responsibleActions.map((step) => (
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
            <p className="text-cyan-300 font-semibold mb-3">
              Final Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {finalCheck.map((item, index) => (
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
          Before finishing Module 8, students should be able to say:
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
            Module 8 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Module 9 will teach students how to use devices, networks,
            Wi-Fi, Bluetooth, nearby sharing, and shared devices more safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/sharing-responsibly-online"
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
              href="/junior/devices-networks-and-wifi-safety"
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