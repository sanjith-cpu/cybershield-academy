import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Recognize warning signs on unsafe websites and download pages",
  "Explain why unknown files, apps, extensions, and updates should not be downloaded",
  "Practice safer responses to pop-ups, fake rewards, redirects, and download prompts",
  "Use official sources and trusted adult help before installing anything",
  "Know how to pause when a website feels urgent, confusing, or too good to be true",
];

const vocabulary = [
  {
    term: "Unsafe Website",
    definition:
      "A website or online page that may pressure someone to click, download, share information, sign in, or take another risky action.",
  },
  {
    term: "Download Prompt",
    definition:
      "A message or button that asks someone to download a file, app, tool, update, extension, or installer.",
  },
  {
    term: "Redirect",
    definition:
      "When a website sends someone to a different page or tab, sometimes to a place they did not choose or expect.",
  },
  {
    term: "Pop-Up",
    definition:
      "A box, window, or message that appears on top of a webpage and may ask someone to click, allow, download, or respond.",
  },
  {
    term: "Official Source",
    definition:
      "The real app store, school tool, company website, teacher, parent, guardian, or trusted adult that can confirm whether something is safe to use.",
  },
  {
    term: "Permission Request",
    definition:
      "A request from a website, app, or extension to access something on a device, such as notifications, camera, microphone, files, or location.",
  },
];

const websiteSituations = [
  {
    title: "Homework Website With a Form",
    explanation:
      "A student clicks a search result for homework help, but the page asks for personal information before showing the answer.",
    saferChoice:
      "Do not enter private information. Use a trusted school resource, library source, teacher-approved site, or trusted adult help.",
  },
  {
    title: "Game Upgrade Download",
    explanation:
      "A website claims it has a free tool that gives special game upgrades, but it asks the student to download a file first.",
    saferChoice:
      "Do not download the file. Use official game sources and ask a trusted adult before installing anything.",
  },
  {
    title: "Fake Device Warning",
    explanation:
      "A pop-up says the device is infected, broken, or locked and tells the student to click a button immediately.",
    saferChoice:
      "Do not click the warning. Stop interacting with the page and show a trusted adult.",
  },
  {
    title: "Unexpected Permission Request",
    explanation:
      "A website or extension asks for access to notifications, camera, files, microphone, or location even though the request does not match the activity.",
    saferChoice:
      "Pause and do not allow access until a trusted adult helps check whether the permission makes sense.",
  },
];

const warningSigns = [
  {
    title: "Unknown Download",
    text: "The page asks the student to download a file, app, tool, installer, extension, or update from an unfamiliar source.",
  },
  {
    title: "Scary Pop-Up",
    text: "The page claims the device has a serious problem and pushes the student to click immediately.",
  },
  {
    title: "Too Much Information",
    text: "The website asks for personal details, account information, school information, or login information that does not match the activity.",
  },
  {
    title: "Too Good to Be True",
    text: "The page promises free rewards, cheats, game upgrades, prizes, or special access for almost no effort.",
  },
  {
    title: "Confusing Redirects",
    text: "The student keeps being sent to pages, ads, pop-ups, or tabs they did not choose.",
  },
  {
    title: "Strange Permissions",
    text: "The website or extension asks for access that seems unrelated, such as location for a simple quiz or files for a basic page.",
  },
];

const scenarios = [
  {
    title: "The Free Game Upgrade Page",
    situation:
      "A student finds a website claiming it can unlock free game upgrades. The page says the student must download a special file to continue.",
    warningSigns:
      "The website offers an exciting reward and pushes an unknown download.",
    riskyResponse:
      "Download the file because the upgrade sounds helpful and other students might use it.",
    smarterResponse:
      "Do not download the file. Use official game resources or ask a trusted adult before installing anything.",
    whyItWorks:
      "Unknown downloads can put devices and accounts at risk. Official sources and trusted adult help are safer.",
  },
  {
    title: "The Fake Virus Warning",
    situation:
      "A student clicks a page and sees a large pop-up saying the device is infected and must be fixed right now by pressing a button.",
    warningSigns:
      "The pop-up uses fear, urgency, and pressure to make the student click quickly.",
    riskyResponse:
      "Click the button because the warning looks serious.",
    smarterResponse:
      "Do not click the pop-up. Stop interacting with the page and ask a trusted adult for help.",
    whyItWorks:
      "Scary pop-ups can be designed to pressure unsafe clicks. A trusted adult can help close or check the issue safely.",
  },
  {
    title: "The Homework Answer Form",
    situation:
      "A student searches for homework help. A website says the answer is available, but only after the student enters their name, email, school, and password.",
    warningSigns:
      "The website asks for too much personal and account information for a simple homework answer.",
    riskyResponse:
      "Fill out the form quickly to get the answer.",
    smarterResponse:
      "Leave the form, do not enter private information, and use a teacher-approved or school-approved resource instead.",
    whyItWorks:
      "Students should not trade private information for unknown website access. Trusted school resources are safer.",
  },
  {
    title: "The Extension Permission Request",
    situation:
      "A page says a student must add a browser extension to watch a video, and the extension asks for broad access to websites and device data.",
    warningSigns:
      "The page pushes an extension and asks for permissions that do not clearly match the student’s goal.",
    riskyResponse:
      "Install the extension because the video might not work without it.",
    smarterResponse:
      "Do not install the extension. Use an official source or ask a trusted adult to check whether the tool is needed.",
    whyItWorks:
      "Extensions can affect browsing and data. Students should avoid installing unknown tools without trusted help.",
  },
];

const actionSteps = [
  "Pause before clicking download buttons, pop-ups, or permission requests.",
  "Do not download unknown files, apps, tools, updates, or browser extensions from random websites.",
  "Use official app stores, school tools, teacher-approved resources, and trusted websites when possible.",
  "Do not enter private information into unfamiliar website forms.",
  "Stop interacting with pages that show scary warnings, confusing redirects, or too-good-to-be-true rewards.",
  "Ask a trusted adult before installing anything or responding to website warnings.",
];

const reflectionQuestions = [
  "What warning signs can make a website or download unsafe?",
  "Why should students avoid unknown downloads and extensions?",
  "Why can scary pop-ups lead to risky choices?",
  "What should students do when a website asks for too much information?",
  "Who can help students decide whether a download or website is safe?",
];

const skillCheck = [
  {
    question:
      "A website says a student must download a special tool to get free game upgrades. What is the safer response?",
    choices: [
      "Download the tool because the reward sounds useful",
      "Do not download it and use official sources or trusted adult help",
      "Share the download link with classmates",
    ],
    answer: "Choice B",
    explanation:
      "Unknown downloads from random websites can be risky. Official sources and trusted adult guidance are safer.",
  },
  {
    question:
      "A pop-up says the device is infected and the student must click a button immediately. What is the warning sign?",
    choices: [
      "The pop-up uses fear and urgency",
      "The pop-up has a button",
      "The student is using a browser",
    ],
    answer: "Choice A",
    explanation:
      "Scary urgent pop-ups can pressure students into unsafe actions. Students should not click them for practice.",
  },
  {
    question:
      "A homework page asks for a student’s name, school, email, and password before showing an answer. What should the student do?",
    choices: [
      "Enter the details to save time",
      "Use a simple password so it is less important",
      "Do not enter private information and use a trusted school resource",
    ],
    answer: "Choice C",
    explanation:
      "Unfamiliar websites should not receive private or account information. Trusted school resources are safer.",
  },
  {
    question:
      "What is a good rule before installing an app, file, update, or extension from a website?",
    choices: [
      "Install first and ask questions later",
      "Only install it if the website looks colorful",
      "Pause, check the source, and ask a trusted adult when unsure",
    ],
    answer: "Choice C",
    explanation:
      "Students should pause and check with trusted help before installing anything from an unfamiliar website.",
  },
];

const checklist = [
  "I can identify warning signs on unsafe websites and download pages.",
  "I know not to download unknown files, apps, tools, updates, or extensions from random websites.",
  "I can respond safely to scary pop-ups and fake device warnings.",
  "I can explain why unfamiliar forms should not ask for private information.",
  "I know to use official sources and trusted adult help before installing anything.",
  "I know not to test unsafe websites or downloads for practice.",
];

export default function ScenarioChallengeUnsafeWebsiteOrDownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12 • Lesson 12.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Scenario Challenge: Unsafe Website or Download
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Unsafe websites and downloads can pressure students to click, install,
          allow permissions, or share information. This lesson helps students
          practice safer decisions using fake website and download scenarios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-suspicious-message"
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
            href="/junior/junior-cyber-safety-capstone/scenario-challenge-privacy-reputation-and-communication"
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
              A website can pressure students before they have time to think.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student opens a page that promises a reward, shows a
              scary device warning, or says a file must be downloaded to
              continue. A safer student does not click quickly. They pause,
              notice warning signs, and ask for trusted help before taking
              action.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Unsafe website and download scenarios are safer to handle when
          students follow a pause-and-check routine.
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
              Do not visit unsafe websites or download unknown files for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real suspicious websites, click unknown download buttons,
              install random files, allow strange permissions, enter private
              information, or try to prove whether a page is unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Unsafe websites often ask students to take actions that put privacy,
          accounts, or devices at risk.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Websites can be useful for school, hobbies, games, videos, shopping,
            and research. But some pages are confusing, misleading, or unsafe.
            They may ask for personal information, push a download, request
            permissions, show scary warnings, or keep redirecting students to
            unexpected pages.
          </p>

          <p>
            Downloads deserve extra caution because students may not know what a
            file, app, tool, update, or extension really does. A page may make a
            download sound required, exciting, or urgent, but students should not
            install unknown items from random websites.
          </p>

          <p>
            Students do not need to investigate unsafe websites alone. A safer
            response is to stop interacting with the page, avoid downloads and
            permissions, use official sources, and ask a trusted adult for help
            when a website feels confusing, urgent, scary, or too good to be
            true.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for handling unsafe website and download scenarios.
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
          Website and Download Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different website problems can use the same safe response pattern.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {websiteSituations.map((item) => (
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
            Unsafe websites and downloads often include clues that students
            should pause.
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
          Students should not let a website rush them into downloading or
          allowing access.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks pop-ups, follows redirects, enters private
              information, allows strange permissions, or downloads a file
              because the website makes it feel required.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids downloads and permissions, protects
              private information, uses official sources, and asks a trusted
              adult for help when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice unsafe website and download decisions using fake examples.
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
          Use these steps when a website or download feels unsafe.
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
          Before finishing Lesson 12.3, students should be able to say:
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
            Lesson 12.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 12.4 will use a privacy, reputation, and communication
            scenario to practice safer online choices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-suspicious-message"
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
              href="/junior/junior-cyber-safety-capstone/scenario-challenge-privacy-reputation-and-communication"
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