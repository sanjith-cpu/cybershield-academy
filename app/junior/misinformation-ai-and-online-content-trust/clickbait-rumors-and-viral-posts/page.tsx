import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what clickbait means",
  "Understand how rumors and viral posts can spread before they are checked",
  "Recognize emotional headlines, pressure, and missing evidence",
  "Practice safer choices before reacting, reposting, forwarding, or commenting",
  "Know when to check trusted sources or ask a trusted adult",
];

const vocabulary = [
  {
    term: "Clickbait",
    definition:
      "Online content that uses dramatic titles, images, or captions to make people click, even when the full content may be weak, misleading, or incomplete.",
  },
  {
    term: "Rumor",
    definition:
      "Information that people repeat before they know whether it is true, complete, or fair.",
  },
  {
    term: "Viral Post",
    definition:
      "A post, video, image, or message that spreads quickly because many people view, react to, comment on, or share it.",
  },
  {
    term: "Engagement",
    definition:
      "The likes, comments, shares, views, clicks, and reactions that show people are interacting with online content.",
  },
  {
    term: "Headline",
    definition:
      "The title or main text that tries to get attention before someone reads, watches, or checks the full content.",
  },
  {
    term: "Verification",
    definition:
      "Checking a claim with trustworthy sources before believing, sharing, or acting on it.",
  },
];

const contentSituations = [
  {
    title: "Dramatic Headline",
    explanation:
      "A post uses words like shocking, unbelievable, exposed, or must-see to make students click quickly.",
    saferChoice:
      "Pause and check whether the headline matches the actual information and comes from a trustworthy source.",
  },
  {
    title: "Fast-Spreading Rumor",
    explanation:
      "A rumor about a person, school event, game update, or online trend spreads through chats before anyone confirms it.",
    saferChoice:
      "Do not repeat or forward it. Look for official information or ask a trusted adult.",
  },
  {
    title: "Viral Pressure",
    explanation:
      "A popular post says everyone should repost, comment, tag friends, or react immediately.",
    saferChoice:
      "Slow down and decide whether sharing would be true, helpful, respectful, and safe.",
  },
  {
    title: "Missing Evidence",
    explanation:
      "A post makes a big claim but provides no reliable evidence, original source, date, or full context.",
    saferChoice:
      "Treat the claim carefully and check trusted sources before believing or sharing it.",
  },
];

const warningSigns = [
  {
    title: "Emotional Words",
    text: "The headline tries to make students feel shocked, angry, scared, embarrassed, or curious before they think.",
  },
  {
    title: "No Reliable Source",
    text: "The post does not show where the information came from or links only to random pages or unknown accounts.",
  },
  {
    title: "Pressure to Share",
    text: "The message tells people to repost, forward, tag friends, or spread it before checking whether it is true.",
  },
  {
    title: "Popularity Treated as Proof",
    text: "The post has many likes, views, or comments, but popularity does not automatically mean the claim is true.",
  },
  {
    title: "Missing Date or Context",
    text: "The content may be old, cropped, edited, exaggerated, or missing important background information.",
  },
  {
    title: "Targets a Person",
    text: "The rumor or viral post embarrasses, blames, mocks, or spreads private information about someone else.",
  },
];

const scenarios = [
  {
    title: "The Shocking Headline",
    situation:
      "A student sees a post titled, 'You will not believe what happened at school today!' The post gives no official source and tells people to click for the full story.",
    warningSigns:
      "The headline is dramatic, vague, and designed to make people click before checking details.",
    riskyResponse:
      "Click immediately, believe the headline, and share it with friends.",
    smarterResponse:
      "Pause and check whether the information appears in a trusted school message or reliable source before reacting.",
    whyItWorks:
      "Clickbait often uses emotion and curiosity to rush people. Checking first helps students avoid spreading misleading claims.",
  },
  {
    title: "The Group Chat Rumor",
    situation:
      "A group chat says a student is in trouble, but nobody knows who started the message or whether it is true.",
    warningSigns:
      "The claim is personal, unconfirmed, and could hurt someone's reputation.",
    riskyResponse:
      "Forward the rumor to another group chat so more people can talk about it.",
    smarterResponse:
      "Do not forward it. Step away from the rumor and ask a trusted adult if someone may be hurt or targeted.",
    whyItWorks:
      "Repeating rumors can harm people. Refusing to spread unverified claims helps reduce drama and protect others.",
  },
  {
    title: "The Viral Challenge Post",
    situation:
      "A viral post says students should repost a message by midnight or they will miss out on something important.",
    warningSigns:
      "The post creates pressure, urgency, and fear of missing out without giving real evidence.",
    riskyResponse: "Repost it quickly because lots of people are doing it.",
    smarterResponse:
      "Pause, avoid reposting, and check whether the claim has a trustworthy source.",
    whyItWorks:
      "Viral pressure can make weak claims feel important. Students should not let popularity replace careful thinking.",
  },
  {
    title: "The Old Video Repost",
    situation:
      "A video goes viral with a caption saying it happened today, but the video has no date, source, or confirmation.",
    warningSigns:
      "The video may be old, taken out of context, or paired with a misleading caption.",
    riskyResponse:
      "Comment on it and share it as if the caption is definitely true.",
    smarterResponse:
      "Look for context, check trusted sources, and avoid sharing it as fact unless it is confirmed.",
    whyItWorks:
      "Old or out-of-context videos can mislead people. Checking context helps students avoid spreading false information.",
  },
];

const actionSteps = [
  "Pause before clicking a dramatic headline or reacting to a viral post.",
  "Ask: Who posted this, and where did the information come from?",
  "Check whether the headline matches the actual content.",
  "Do not forward rumors about people, school events, safety issues, or private situations.",
  "Remember that likes, views, and shares do not prove something is true.",
  "Ask a trusted adult when a rumor or viral post feels harmful, urgent, scary, or confusing.",
];

const reflectionQuestions = [
  "What does clickbait mean?",
  "Why can rumors spread quickly online?",
  "Why does popularity not prove a post is true?",
  "What warning signs can appear in dramatic headlines or viral posts?",
  "Who can students ask for help when a rumor or viral post feels harmful?",
];

const skillCheck = [
  {
    question:
      "A headline says something shocking happened at school, but it gives no source. What is the safer response?",
    choices: [
      "Believe it because the headline sounds serious",
      "Pause and check trusted school information or ask a trusted adult",
      "Share it with friends before reading more",
    ],
    answer: "Choice B",
    explanation:
      "Dramatic headlines can be misleading. Students should check trusted sources before believing or sharing serious claims.",
  },
  {
    question:
      "A group chat spreads a rumor about another student, but nobody knows if it is true. What should a student do?",
    choices: [
      "Forward it to another group",
      "Do not spread it and ask a trusted adult if someone may be hurt",
      "Add guesses to make the story more interesting",
    ],
    answer: "Choice B",
    explanation:
      "Unverified rumors can hurt people. Not spreading them is a safer and more respectful choice.",
  },
  {
    question:
      "A viral post has thousands of likes and says everyone should repost it immediately. What is the warning sign?",
    choices: [
      "It has pressure to share quickly",
      "It is online",
      "It has many words",
    ],
    answer: "Choice A",
    explanation:
      "Pressure to share quickly is a warning sign. Popularity does not prove that a claim is true.",
  },
  {
    question:
      "A video caption says something happened today, but there is no date or reliable source. What is a safer habit?",
    choices: [
      "Share it as fact because videos always show the full story",
      "Check the context and trusted sources before believing or sharing",
      "Comment with a strong opinion before checking",
    ],
    answer: "Choice B",
    explanation:
      "Videos can be old, edited, or taken out of context. Checking context helps students avoid spreading misinformation.",
  },
];

const checklist = [
  "I can explain what clickbait means.",
  "I can recognize when a headline is trying to get a quick reaction.",
  "I can explain why rumors can be harmful when they are shared before being checked.",
  "I can remember that likes, views, and shares do not prove a post is true.",
  "I can pause before reposting, forwarding, commenting, or reacting.",
  "I know when to ask a trusted adult about a rumor or viral post.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Clickbait, Rumors, and Viral Posts
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Clickbait, rumors, and viral posts can push students to react before
          they think. This lesson teaches students to notice emotional
          headlines, missing evidence, viral pressure, and unverified claims
          before they click, comment, repost, or forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/what-misinformation-means"
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
            href="/junior/misinformation-ai-and-online-content-trust/checking-sources-and-evidence"
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
              Viral content can make fast reactions feel normal.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a shocking headline or a rumor spreading in
              a group chat. Everyone is commenting, reposting, and reacting. The
              post feels important because it is popular, but popularity does
              not prove it is true. Students need habits that help them pause
              first.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Viral content should be checked before students help it spread.
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
              Do not spread rumors or test suspicious claims for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              search for harmful rumors, open suspicious links, harass people,
              spread private information, or repost unverified claims for
              practice. When something feels harmful or unsafe, ask a trusted
              adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Clickbait and viral posts often reward attention, not accuracy.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online platforms often show content that gets attention. A post may
            spread because it is funny, shocking, emotional, or dramatic, even
            when it is not true or does not show the full story. This is why
            students should not treat popularity as proof.
          </p>

          <p>
            Clickbait tries to make people click quickly. Rumors try to travel
            quickly through chats, comments, and reposts. Viral posts can make
            students feel like they must react right away because everyone else
            is already reacting.
          </p>

          <p>
            A safer habit is to slow down. Students can ask who posted it, what
            evidence is shown, whether the claim has a trustworthy source, and
            whether sharing it could confuse or hurt someone. If the content
            feels serious, harmful, private, or stressful, students should ask a
            trusted adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding clickbait, rumors, and viral
            posts.
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
          Viral Content Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Clickbait, rumors, and viral posts can create different kinds of
          pressure.
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
            Viral content can use pressure, emotion, and popularity to rush
            students.
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
          A viral post should not rush students into spreading it.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks, comments, reposts, or forwards a rumor because
              the headline is dramatic or the post is popular.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source and evidence, avoids
              spreading rumors, and asks a trusted adult when the content feels
              harmful or unclear.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer responses to clickbait, rumors, and viral pressure.
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
          Use these habits before clicking, reposting, or forwarding viral
          content.
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
          Before finishing Lesson 8.2, students should be able to say:
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
            Lesson 8.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 8.3 will explain how students can check sources and
            evidence before trusting online information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/what-misinformation-means"
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
              href="/junior/misinformation-ai-and-online-content-trust/checking-sources-and-evidence"
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