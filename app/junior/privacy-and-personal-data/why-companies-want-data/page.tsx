import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why apps and websites may collect data",
  "Understand the difference between helpful data use and risky data sharing",
  "Recognize how recommendations, personalization, ads, and analytics can use data",
  "Identify when data collection feels unnecessary or confusing",
  "Practice making smarter choices before sharing information with apps or websites",
];

const vocabulary = [
  {
    term: "Data Collection",
    definition:
      "The process of gathering information from users, devices, accounts, clicks, searches, settings, or activity.",
  },
  {
    term: "Personalization",
    definition:
      "Using data to change what a user sees, such as recommended videos, suggested posts, or app settings.",
  },
  {
    term: "Recommendation",
    definition:
      "A suggestion made by an app or website based on activity, interests, searches, or other signals.",
  },
  {
    term: "Advertising",
    definition:
      "Messages or promotions shown to users. Some ads may be based on activity, interests, or general information.",
  },
  {
    term: "Analytics",
    definition:
      "Information used by companies to understand how people use an app, website, feature, or service.",
  },
  {
    term: "Privacy Tradeoff",
    definition:
      "A situation where a user gets convenience or personalization but may share more data in return.",
  },
];

const dataUses = [
  {
    title: "Recommendations",
    explanation:
      "Apps may use watch history, searches, likes, or activity to suggest videos, posts, games, music, or products.",
    smarterHabit:
      "Remember that recommendations are shaped by data and may not always show the full picture.",
  },
  {
    title: "Personalization",
    explanation:
      "Websites and apps may use data to remember settings, show favorite topics, or organize content around user interests.",
    smarterHabit:
      "Use personalization carefully and avoid sharing private details just to make an app feel more customized.",
  },
  {
    title: "Advertising",
    explanation:
      "Some services may use general interests or activity to decide what ads or promotions a user sees.",
    smarterHabit:
      "Do not click ads that feel suspicious, too urgent, too personal, or too good to be true.",
  },
  {
    title: "Analytics",
    explanation:
      "Companies may study how users move through an app, which buttons they click, and what features are popular.",
    smarterHabit:
      "Understand that app activity can create data even when a student is not typing private information.",
  },
];

const risks = [
  {
    title: "More Data Than Needed",
    text: "An app may ask for information that does not match what the app actually needs to do.",
  },
  {
    title: "Personalized Pressure",
    text: "Recommendations, ads, or notifications can make content feel more tempting or urgent.",
  },
  {
    title: "Hidden Data Clues",
    text: "Clicks, searches, watch history, settings, and activity can reveal interests or habits over time.",
  },
];

const scenarios = [
  {
    title: "The Video Recommendation Loop",
    situation:
      "A student watches one dramatic video. Soon the app recommends many similar videos, even when the student wants to stop seeing them.",
    warningSigns:
      "The app is using activity to recommend more of the same content and keep the student engaged.",
    riskyResponse:
      "Keep clicking every recommendation without thinking about why it appears.",
    smarterResponse:
      "Pause, choose content more intentionally, use settings when available, and take a break if the recommendations feel overwhelming.",
    whyItWorks:
      "Students can enjoy online content while still noticing how recommendations influence attention.",
  },
  {
    title: "The Quiz That Wants Too Much",
    situation:
      "A fun personality quiz asks for name, birthday, school, city, email, and permission to access contacts.",
    warningSigns:
      "The quiz asks for private details that are not needed to answer fun questions.",
    riskyResponse:
      "Entering all the information because the quiz looks entertaining.",
    smarterResponse:
      "Do not enter private information, skip unnecessary fields, and ask a trusted adult if the quiz seems suspicious.",
    whyItWorks:
      "Fun activities should not require students to give away sensitive information.",
  },
  {
    title: "The Shopping Ad",
    situation:
      "A student searches for a backpack once, and later sees many backpack ads on different pages.",
    warningSigns:
      "Online activity may influence what ads or suggestions appear later.",
    riskyResponse:
      "Clicking every ad because it feels connected to what the student wanted.",
    smarterResponse:
      "Be cautious with ads, avoid suspicious offers, and ask a trusted adult before buying, entering information, or creating accounts.",
    whyItWorks:
      "Students learn that ads can be influenced by data and should still be treated carefully.",
  },
  {
    title: "The App Setup Screen",
    situation:
      "A study app asks for interests, grade level, school name, location, and contact information before the student can start.",
    warningSigns:
      "Some information may help personalize learning, but school name, exact location, and contact details may be unnecessary.",
    riskyResponse:
      "Filling in every field because the setup screen asks for it.",
    smarterResponse:
      "Share only what is necessary, skip private details when possible, and ask a trusted adult before entering sensitive information.",
    whyItWorks:
      "Students can use helpful tools without oversharing private data.",
  },
];

const actionSteps = [
  "Ask why an app or website wants each piece of information.",
  "Do not enter private details just to unlock a quiz, reward, or recommendation.",
  "Remember that clicks, searches, likes, and watch history can shape what appears next.",
  "Be cautious with ads, sponsored content, fake rewards, and urgent offers.",
  "Use settings carefully and ask a trusted adult before changing privacy or personalization controls.",
  "Take a break if recommendations or notifications feel too distracting or pressuring.",
];

const reflectionQuestions = [
  "Why might an app want to personalize what a student sees?",
  "What is one helpful use of data?",
  "What is one risky or unnecessary use of data?",
  "How can recommendations influence what someone watches or clicks next?",
  "Why should students be careful with quizzes that ask for private details?",
];

const skillCheck = [
  {
    question:
      "A fun quiz asks for school name, birthday, city, email, and contacts. What is the smarter response?",
    choices: [
      "Enter everything because quizzes are always harmless",
      "Do not enter private details, skip unnecessary fields, and ask a trusted adult if it seems suspicious",
      "Use a friend’s information instead",
    ],
    answer: "Choice B",
    explanation:
      "A quiz does not need sensitive details like school, city, email, or contacts. Students should avoid oversharing.",
  },
  {
    question:
      "An app keeps recommending similar videos after a student watches one. What does this show?",
    choices: [
      "Recommendations can be shaped by activity data",
      "The app can read the student’s mind",
      "All recommended videos are automatically trustworthy",
    ],
    answer: "Choice A",
    explanation:
      "Apps may use watch history, clicks, searches, or likes to recommend more content.",
  },
  {
    question:
      "Why should students be careful with personalized ads?",
    choices: [
      "Ads are always fake",
      "Ads can feel relevant or tempting, but students should still avoid suspicious offers and ask before entering information",
      "Personalized ads mean the student must buy something",
    ],
    answer: "Choice B",
    explanation:
      "Even if an ad seems connected to a student’s interests, it should still be treated carefully.",
  },
  {
    question:
      "What is a privacy tradeoff?",
    choices: [
      "Getting convenience or personalization while sharing more data",
      "Deleting every app from a device",
      "Sharing passwords with a company",
    ],
    answer: "Choice A",
    explanation:
      "A privacy tradeoff happens when a user gets a feature or convenience but gives up some information in return.",
  },
];

const checklist = [
  "I can explain why companies may collect data.",
  "I can describe recommendations, personalization, advertising, and analytics.",
  "I can recognize when an app asks for more data than needed.",
  "I can explain how clicks, searches, and activity can shape what appears next.",
  "I can make safer choices before entering information into apps or websites.",
  "I know when to ask a trusted adult for help.",
];

export default function WhyCompaniesWantDataPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Why Companies Want Data
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Apps and websites may use data to personalize content, recommend
          videos, show ads, improve features, or understand how people use a
          service. This lesson helps students understand those uses without
          oversharing private information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/location-photos-contacts-and-app-permissions"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/privacy-and-personal-data"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 2
          </Link>

          <Link
            href="/junior/privacy-and-personal-data/privacy-settings-and-account-controls"
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
              A recommended video does not appear by accident.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student watches one video about a game. Later, the app
              recommends more videos about the same game, related channels, and
              similar topics. The app is using activity data to guess what the
              student might want to see next.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Data can make apps feel useful, but it can also create privacy tradeoffs.
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
            Students should understand why apps ask for information before they share it.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students use apps and websites for school, games,
            entertainment, creativity, and communication. Many services use data
            to improve the experience, but students should still think carefully.
            A feature that feels helpful may also collect activity, interests,
            settings, or profile details. Understanding this helps students make
            smarter privacy decisions.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Companies may use data to make apps more useful, more engaging, or more profitable.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Data can help apps remember preferences, recommend content, improve
            features, fix problems, or understand what users like. For example,
            a learning app might remember progress, and a music app might
            suggest songs based on what someone listens to.
          </p>

          <p>
            Data can also be used for advertising, engagement, and business
            decisions. A service may study what people click, how long they stay,
            what features they use, and what content keeps attention. Students
            do not need to know every technical detail, but they should know
            that online activity can create information about habits and
            interests.
          </p>

          <p>
            This does not mean every app is bad. It means students should be
            thoughtful. Before sharing data, they should ask: Does this app need
            this information? Is this private? Can I skip this field? Should I
            ask a trusted adult before continuing?
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding how data is used.
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
          Data Use Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Data can be used in different ways.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {dataUses.map((use) => (
            <div
              key={use.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {use.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {use.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {use.smarterHabit}
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
            The risk is not just what students type. Activity can become data too.
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
          Helpful features should not require unnecessary private information.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student enters full name, school, city, birthday, email, and
              contacts into a fun quiz because it promises a personalized result.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student skips unnecessary fields, avoids sharing private
              details, and asks a trusted adult before using a quiz or app that
              requests sensitive information.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice noticing how data can shape online experiences.
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
          Use these habits when apps or websites ask for data.
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
          Before finishing Lesson 2.3, students should be able to say:
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
            Lesson 2.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 2.4 will explain how privacy settings and account
            controls can limit who sees profiles, posts, messages, and activity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/location-photos-contacts-and-app-permissions"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/privacy-and-personal-data"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 2
            </Link>

            <Link
              href="/junior/privacy-and-personal-data/privacy-settings-and-account-controls"
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