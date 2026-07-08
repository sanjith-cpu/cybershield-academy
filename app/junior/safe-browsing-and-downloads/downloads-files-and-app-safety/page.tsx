import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why unknown downloads can be risky",
  "Recognize warning signs around files, apps, tools, and browser extensions",
  "Understand why students should use trusted sources",
  "Practice safer choices before downloading or installing anything",
  "Know when to ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Download",
    definition:
      "Saving a file, app, tool, image, document, extension, or other item from the internet onto a device.",
  },
  {
    term: "File",
    definition:
      "A saved item on a device, such as a document, image, video, slide, compressed folder, or installer.",
  },
  {
    term: "App",
    definition:
      "A program used on a phone, tablet, computer, or other device.",
  },
  {
    term: "Browser Extension",
    definition:
      "A small tool added to a web browser that can change or add features. Students should only add extensions with trusted adult guidance.",
  },
  {
    term: "Trusted Source",
    definition:
      "An official app store, official website, school-approved source, teacher-provided source, or trusted adult-approved source.",
  },
  {
    term: "Install",
    definition:
      "Adding a program, app, extension, or tool onto a device so it can run.",
  },
];

const downloadTypes = [
  {
    title: "School Files",
    explanation:
      "A student may receive files for homework, classwork, projects, or club activities.",
    risk:
      "A file can be risky if it is unexpected, from an unfamiliar sender, or not confirmed by a teacher or trusted adult.",
    saferChoice:
      "Only open school files that come from trusted school tools, teachers, or approved sources.",
  },
  {
    title: "Game Tools",
    explanation:
      "A website or message may offer a tool, mod, cheat, booster, free currency, or rare item download.",
    risk:
      "Exciting game downloads from unknown sources can be used to trick students into installing unsafe items.",
    saferChoice:
      "Do not download unknown game tools. Use official game sources and trusted adult guidance.",
  },
  {
    title: "Apps",
    explanation:
      "Students may find apps through websites, ads, messages, videos, or app stores.",
    risk:
      "Apps from random links can ask for too much access or come from untrusted sources.",
    saferChoice:
      "Use official app stores or official websites with trusted adult approval.",
  },
  {
    title: "Browser Extensions",
    explanation:
      "Extensions may promise extra features, themes, coupons, game tools, or faster browsing.",
    risk:
      "Extensions can affect browsing and may ask for permissions students do not understand.",
    saferChoice:
      "Do not install browser extensions without trusted adult or school technology guidance.",
  },
];

const warningSigns = [
  {
    title: "Unknown Source",
    text: "The download comes from a random message, pop-up, ad, comment, video description, or unfamiliar website.",
  },
  {
    title: "Too-Good-To-Be-True Tool",
    text: "The download promises free rewards, game currency, premium access, cheats, upgrades, or special features for almost no effort.",
  },
  {
    title: "Pressure to Install",
    text: "The page says the student must download or install something immediately to continue.",
  },
  {
    title: "Unexpected File",
    text: "The student did not ask for the file or does not recognize the sender.",
  },
  {
    title: "Confusing Permission Request",
    text: "An app or extension asks for access that does not seem related to what it is supposed to do.",
  },
  {
    title: "Fake Update Message",
    text: "A website or pop-up says the student must download an update from a random page.",
  },
];

const scenarios = [
  {
    title: "The Free Game Booster",
    situation:
      "A student finds a website promising a free game booster that will make their account stronger.",
    warningSigns:
      "The download comes from an unknown website and promises an exciting advantage.",
    riskyResponse:
      "Download and install the booster because it sounds useful.",
    smarterResponse:
      "Do not download it. Use official game sources and ask a trusted adult before installing anything.",
    whyItWorks:
      "Unknown game tools can be risky. Official sources and trusted adult guidance are safer.",
  },
  {
    title: "The Mystery School File",
    situation:
      "A student receives a file claiming to be class notes, but the teacher never mentioned it and the sender is unfamiliar.",
    warningSigns:
      "The file is unexpected and does not clearly come from a trusted school source.",
    riskyResponse:
      "Open the file because it might help with class.",
    smarterResponse:
      "Do not open it. Ask the teacher or school technology staff member to confirm it first.",
    whyItWorks:
      "Unexpected files should be checked before opening, even if they sound school-related.",
  },
  {
    title: "The Pop-Up Update",
    situation:
      "A website pop-up says the student’s browser is outdated and must download an update immediately.",
    warningSigns:
      "The update appears from a random website and creates urgency.",
    riskyResponse:
      "Click the update button because the message looks important.",
    smarterResponse:
      "Do not click the pop-up. Ask a trusted adult and use official device or browser update tools.",
    whyItWorks:
      "Real updates should come from official system, app, or browser tools, not random pop-ups.",
  },
  {
    title: "The Helpful Extension",
    situation:
      "A video says a browser extension can unlock free premium features and asks students to add it right away.",
    warningSigns:
      "The extension promises something valuable for free and pushes quick installation.",
    riskyResponse:
      "Install the extension because the video recommends it.",
    smarterResponse:
      "Do not install it without trusted adult or school technology guidance.",
    whyItWorks:
      "Extensions can affect browsing and permissions, so students should not add them casually.",
  },
];

const actionSteps = [
  "Pause before downloading, opening, installing, or adding anything.",
  "Ask: Did this come from a trusted source?",
  "Ask: Did I expect this file, app, tool, or extension?",
  "Avoid downloads from random pop-ups, ads, message links, comments, or unfamiliar websites.",
  "Use official app stores, official websites, teacher-provided tools, or school-approved sources.",
  "Ask a trusted adult before installing apps, extensions, tools, updates, or unknown files.",
];

const reflectionQuestions = [
  "Why can unknown downloads be risky?",
  "Why should students be careful with game tools or free boosters?",
  "Why should school files still come from trusted sources?",
  "Why can browser extensions require extra caution?",
  "Who can help a student decide whether a download is safe?",
];

const skillCheck = [
  {
    question:
      "A website offers a free game booster download from an unknown source. What is the safer response?",
    choices: [
      "Download it quickly before it disappears",
      "Do not download it and use official game sources with trusted adult help",
      "Send it to friends so they can test it",
    ],
    answer: "Choice B",
    explanation:
      "Unknown game tools can be risky, especially when they promise exciting advantages. Official sources are safer.",
  },
  {
    question:
      "A student receives an unexpected class file from an unfamiliar sender. What should they do?",
    choices: [
      "Open it because it says it is for class",
      "Do not open it; confirm with the teacher or school technology staff",
      "Download it and upload it somewhere else",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected school files should be confirmed through trusted school sources before opening.",
  },
  {
    question:
      "A pop-up says the browser must be updated immediately through a download button. What is the warning sign?",
    choices: [
      "The update is coming from a random pop-up",
      "The browser exists",
      "The page has a button",
    ],
    answer: "Choice A",
    explanation:
      "Real updates should come from official device, app, or browser tools, not random website pop-ups.",
  },
  {
    question:
      "Why should students be careful with browser extensions?",
    choices: [
      "Extensions can affect browsing and ask for permissions",
      "Extensions are always school assignments",
      "Extensions cannot change anything",
    ],
    answer: "Choice A",
    explanation:
      "Browser extensions can change or access parts of browsing, so students should install them only with trusted guidance.",
  },
];

const checklist = [
  "I can explain why unknown downloads can be risky.",
  "I can recognize warning signs around files, apps, tools, and extensions.",
  "I can avoid downloads from random pop-ups, ads, comments, and message links.",
  "I can use official or trusted sources for files and apps.",
  "I can pause before installing anything.",
  "I know when to ask a trusted adult for help.",
];

export default function DownloadsFilesAndAppSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Downloads, Files, and App Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Downloads can look helpful, fun, or necessary, but students should be
          careful before opening files, installing apps, adding browser
          extensions, or downloading tools from unknown sources.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/recognizing-website-warning-signs"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 5
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads/pop-ups-ads-and-redirects"
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
              Not every useful-looking download is safe to open or install.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student finds a free game tool, a class file, a browser
              extension, or an urgent update pop-up. The safest move is not to
              download first and think later. Students should check the source
              before adding anything to a device.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Download safety starts with checking the source.
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
              Do not download unknown files, apps, tools, updates, or browser
              extensions for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test random downloads, install unknown tools, open unfamiliar
              files, or add browser extensions without trusted adult guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A download adds something to a device, so it deserves extra caution.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Downloads can include school documents, images, videos, apps, games,
            installers, updates, browser extensions, compressed folders, and
            tools. Some downloads are normal and useful when they come from
            trusted sources. Others can be risky when they come from random
            links, pop-ups, ads, comments, unfamiliar websites, or unknown
            senders.
          </p>

          <p>
            Students should pay attention to the source and the reason for the
            download. Did a teacher send it through a trusted school tool? Is it
            from an official app store or official website? Did the student
            expect the file? Is the download asking for permissions or access
            that seems confusing?
          </p>

          <p>
            The safer habit is to pause before opening or installing anything.
            Students can use official sources, avoid random downloads, and ask a
            trusted adult, teacher, guardian, or school technology staff member
            before adding something to a device.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding download safety.
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
          Download Type Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Downloads can appear in many different forms.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {downloadTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4">
                {item.explanation}
              </p>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Why Risky</h4>
                <p className="text-slate-200 leading-relaxed">{item.risk}</p>
              </div>

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
            Pause before downloading when these clues appear.
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
          A download should come from a trusted source, not pressure or
          curiosity.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student downloads or installs something because it looks useful,
              exciting, urgent, or popular, without checking where it came from.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source, avoids unknown downloads,
              uses official or school-approved tools, and asks trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer download decisions using fake examples.
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
          Use these habits before downloading or installing anything.
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
          Before finishing Lesson 5.3, students should be able to say:
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
            Lesson 5.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 5.4 will explain pop-ups, ads, and redirects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/recognizing-website-warning-signs"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 5
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads/pop-ups-ads-and-redirects"
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