import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why sources matter when checking online information",
  "Understand the difference between a claim and evidence",
  "Recognize stronger and weaker sources",
  "Practice checking dates, authors, context, and supporting details",
  "Know when to ask a trusted adult before believing or sharing serious information",
];

const vocabulary = [
  {
    term: "Source",
    definition:
      "The person, website, organization, account, or place where information comes from.",
  },
  {
    term: "Evidence",
    definition:
      "Details, examples, data, documents, images, expert statements, or official information that support a claim.",
  },
  {
    term: "Claim",
    definition:
      "Something a post, video, website, or person says is true.",
  },
  {
    term: "Official Source",
    definition:
      "A trusted school, organization, company, government agency, teacher, or verified place that can confirm important information.",
  },
  {
    term: "Context",
    definition:
      "The background information that helps people understand what something really means, including time, place, purpose, and missing details.",
  },
  {
    term: "Cross-Check",
    definition:
      "Looking at more than one trustworthy source to see whether the same information is confirmed elsewhere.",
  },
];

const contentSituations = [
  {
    title: "School Announcement Claim",
    explanation:
      "A post says a school rule or schedule changed, but it does not show an official school message.",
    saferChoice:
      "Check the school website, teacher message, official email, or ask a trusted adult before believing or sharing it.",
  },
  {
    title: "Health or Safety Claim",
    explanation:
      "A video gives serious health or safety advice but does not show a trustworthy expert or official source.",
    saferChoice:
      "Do not treat it as advice. Ask a trusted adult and check reliable sources before acting on it.",
  },
  {
    title: "Screenshot as Proof",
    explanation:
      "A screenshot is shared as evidence, but it may be cropped, edited, missing context, or from an unknown source.",
    saferChoice:
      "Avoid treating the screenshot as complete proof. Look for context and trusted confirmation.",
  },
  {
    title: "Old Information Reposted",
    explanation:
      "A post may be from months or years ago but is shared like it is happening today.",
    saferChoice:
      "Check the date, original source, and current trusted information before reacting.",
  },
];

const warningSigns = [
  {
    title: "No Source Listed",
    text: "The post makes a big claim but does not say where the information came from.",
  },
  {
    title: "Weak Evidence",
    text: "The content uses opinions, guesses, screenshots, or dramatic comments instead of reliable support.",
  },
  {
    title: "Missing Date",
    text: "The information may be old, reposted, or no longer accurate, but the post does not clearly show when it happened.",
  },
  {
    title: "Unclear Author",
    text: "The person or account sharing the claim may not have the knowledge, role, or reliability needed to confirm it.",
  },
  {
    title: "Only One Place Says It",
    text: "A serious claim appears in only one random post or page and is not confirmed by trustworthy sources.",
  },
  {
    title: "Missing Context",
    text: "The content may leave out what happened before, after, or around the situation.",
  },
];

const scenarios = [
  {
    title: "The Schedule Change Post",
    situation:
      "A student sees a post saying school starts two hours later tomorrow, but the post is not from the school, a teacher, or an official message.",
    warningSigns:
      "The claim is important, but the source is unclear and there is no official confirmation.",
    riskyResponse:
      "Believe the post and tell friends the schedule changed.",
    smarterResponse:
      "Check the official school website, school email, teacher message, or ask a trusted adult before believing it.",
    whyItWorks:
      "Important information should be confirmed by trusted sources. Checking first helps students avoid spreading wrong information.",
  },
  {
    title: "The Screenshot Claim",
    situation:
      "A screenshot is shared in a group chat claiming someone said something mean, but the screenshot is cropped and no one knows where it came from.",
    warningSigns:
      "The screenshot may be missing context, edited, or incomplete.",
    riskyResponse:
      "Treat the screenshot as full proof and join the argument.",
    smarterResponse:
      "Avoid spreading it, do not pile on, and ask a trusted adult if someone may be harmed or targeted.",
    whyItWorks:
      "Screenshots can be incomplete. Waiting and getting help can prevent unfair blame and digital drama.",
  },
  {
    title: "The Health Tip Video",
    situation:
      "A short video gives serious health advice and says everyone should try it, but it does not name a reliable expert or official source.",
    warningSigns:
      "The advice could affect someone's safety, but the evidence and source are weak.",
    riskyResponse:
      "Follow the advice because the video looks confident and has many likes.",
    smarterResponse:
      "Do not act on it. Ask a trusted adult and use reliable health or school-approved sources.",
    whyItWorks:
      "Serious health or safety claims should be checked carefully with trusted adults and reliable sources.",
  },
  {
    title: "The Old News Repost",
    situation:
      "A post about a local event starts spreading again, but the original article was from two years ago.",
    warningSigns:
      "The date is old, but the repost makes it look current.",
    riskyResponse:
      "Share it as if the event is happening now.",
    smarterResponse:
      "Check the date, look for current information, and avoid sharing it as new unless it is confirmed.",
    whyItWorks:
      "Old information can confuse people when it is shared without context. Checking dates helps students understand what is current.",
  },
];

const actionSteps = [
  "Pause before believing or sharing a serious claim.",
  "Ask: Who is the source, and why should this source be trusted?",
  "Look for evidence that supports the claim instead of only reactions or opinions.",
  "Check the date, author, original source, and missing context.",
  "Cross-check important claims with more than one trustworthy source.",
  "Ask a trusted adult when information feels serious, harmful, confusing, or unsafe.",
];

const reflectionQuestions = [
  "What is the difference between a claim and evidence?",
  "Why should students check where information came from?",
  "Why can screenshots be incomplete evidence?",
  "Why is it important to check the date of a post or article?",
  "Who can students ask for help when they are unsure whether information is trustworthy?",
];

const skillCheck = [
  {
    question:
      "A post says school is canceled tomorrow, but it is not from the school or a trusted adult. What is the safer response?",
    choices: [
      "Believe it because it sounds exciting",
      "Check official school information or ask a trusted adult",
      "Share it with everyone before checking",
    ],
    answer: "Choice B",
    explanation:
      "Important claims should be checked with trusted sources before students believe or share them.",
  },
  {
    question:
      "A screenshot is shared as proof, but it is cropped and missing context. What is the warning sign?",
    choices: [
      "The screenshot may not show the full story",
      "Screenshots are always official",
      "The image has text in it",
    ],
    answer: "Choice A",
    explanation:
      "Screenshots can be incomplete, edited, or missing context. Students should be careful before treating them as full proof.",
  },
  {
    question:
      "A video gives serious safety advice but does not include a reliable source. What should a student do?",
    choices: [
      "Follow the advice because the video is popular",
      "Do not act on it and ask a trusted adult or reliable source",
      "Comment that everyone should try it",
    ],
    answer: "Choice B",
    explanation:
      "Serious safety or health claims should be checked with trusted adults and reliable sources before anyone acts on them.",
  },
  {
    question:
      "What is a good way to check important online information?",
    choices: [
      "Only read the headline",
      "Cross-check it with trusted sources and look for evidence",
      "Trust it if it has many likes",
    ],
    answer: "Choice B",
    explanation:
      "Checking trustworthy sources and evidence is a safer habit than trusting headlines, likes, or pressure.",
  },
];

const checklist = [
  "I can explain why sources matter.",
  "I can tell the difference between a claim and evidence.",
  "I can check dates, authors, context, and original sources.",
  "I can avoid treating screenshots as complete proof without context.",
  "I can cross-check important claims with trusted sources.",
  "I know when to ask a trusted adult for help checking information.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8 • Lesson 8.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Checking Sources and Evidence
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Checking sources and evidence helps students decide whether online
          information is trustworthy before they believe, repost, comment, or
          act on it. This lesson teaches students to look for the source, date,
          context, and support behind online claims.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/clickbait-rumors-and-viral-posts"
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
            href="/junior/misinformation-ai-and-online-content-trust/ai-images-deepfakes-and-edited-media"
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
              A claim is not the same thing as proof.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a post that sounds serious. It has a bold
              headline, a screenshot, and many comments. But nobody knows where
              the information came from, when it happened, or whether the
              screenshot shows the full story. Checking sources and evidence
              helps students slow down before trusting it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Trustworthy information should have a clear source and evidence.
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
              Do not investigate harmful or suspicious content alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              open suspicious links, contact unknown accounts, search for
              harmful content, or spread unverified claims for practice. When
              information feels serious, harmful, scary, or confusing, students
              should ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Checking sources and evidence means asking where information came from
          and how it is supported.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online information can look convincing even when it is incomplete or
            wrong. A post may include confident words, screenshots, comments, or
            a dramatic caption, but those details do not always prove the claim.
            Students need to look beyond the first thing they see.
          </p>

          <p>
            A source tells students where the information came from. Evidence
            shows what supports the claim. Stronger information usually has a
            clear source, current date, reliable details, and confirmation from
            trusted places. Weaker information may rely on guesses, rumors,
            cropped screenshots, or pressure to believe quickly.
          </p>

          <p>
            Students do not need to become investigators. A safer habit is to
            pause, check official or trusted sources, look for context, and ask a
            trusted adult when the information could affect someone's safety,
            privacy, reputation, or decisions.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for checking sources and evidence.
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
          Source Check Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online claims can require different kinds of checking.
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
            Weak sources and missing evidence can make information less
            trustworthy.
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
          Strong claims need stronger checking.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student believes or shares a serious claim because it has a
              screenshot, many comments, or a confident caption.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student checks the source, evidence, date, and context, then
              asks a trusted adult when the claim could affect someone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice checking sources and evidence using fake examples.
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
          Use these habits before trusting important online information.
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
          Before finishing Lesson 8.3, students should be able to say:
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
            Lesson 8.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 8.4 will explain how AI images, deepfakes, and edited
            media can affect what students trust online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/clickbait-rumors-and-viral-posts"
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
              href="/junior/misinformation-ai-and-online-content-trust/ai-images-deepfakes-and-edited-media"
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