import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Safe browsing means pausing before acting.",
    text: "Students learned that websites can ask for clicks, sign-ins, downloads, permissions, forms, and personal information. Safe browsing starts with slowing down and checking the source.",
  },
  {
    title: "Website warning signs matter.",
    text: "Students learned to notice unexpected pages, confusing redirects, unrealistic rewards, pushy forms, fake login pages, and websites that ask for too much information.",
  },
  {
    title: "Downloads need trusted sources.",
    text: "Students learned to avoid unknown files, apps, tools, browser extensions, fake updates, and downloads from random ads, pop-ups, comments, message links, or unfamiliar websites.",
  },
  {
    title: "Pop-ups, ads, and redirects can create pressure.",
    text: "Students learned that fake warnings, prize ads, notification prompts, confusing buttons, and redirect loops can push people into risky clicks.",
  },
  {
    title: "Updates, permissions, and device warnings should be checked.",
    text: "Students learned that updates should come from official tools, permissions should match an app’s purpose, and confusing device warnings should be handled with trusted help.",
  },
];

const vocabularyReview = [
  {
    term: "Safe Browsing",
    definition:
      "Using websites and online pages carefully by checking warning signs before clicking, sharing, downloading, signing in, or allowing access.",
  },
  {
    term: "Website Warning Sign",
    definition:
      "A clue that a website may be unsafe, fake, confusing, pushy, or worth checking before trusting.",
  },
  {
    term: "Download",
    definition:
      "Saving a file, app, tool, image, document, extension, or other item from the internet onto a device.",
  },
  {
    term: "Pop-Up",
    definition:
      "A box, window, or message that appears on top of a webpage and often asks someone to click, close, allow, download, or respond.",
  },
  {
    term: "Permission",
    definition:
      "Access an app or website asks for, such as camera, microphone, location, contacts, photos, notifications, or files.",
  },
  {
    term: "Official Source",
    definition:
      "The real app, website, school tool, teacher, company, organization, app store, browser tool, or device setting that can be trusted to confirm information safely.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Homework Website",
    situation:
      "A student clicks a homework result, but the page asks for their name, school, phone number, and email before showing information.",
    risk:
      "The website asks for too much personal information before providing basic content.",
    smarterChoice:
      "Do not enter the information. Use a teacher-provided, school-approved, library, or trusted source instead.",
  },
  {
    title: "Scenario 2: The Free Game Tool",
    situation:
      "A website offers a free game booster download that promises special features.",
    risk:
      "The download comes from an unknown source and promises something exciting for almost no effort.",
    smarterChoice:
      "Do not download it. Use official game sources and trusted adult guidance.",
  },
  {
    title: "Scenario 3: The Scary Pop-Up",
    situation:
      "A pop-up says the device is infected and must be fixed immediately.",
    risk:
      "The pop-up uses fear and urgency to pressure the student into clicking.",
    smarterChoice:
      "Do not click the pop-up. Stop interacting and ask a trusted adult for help.",
  },
  {
    title: "Scenario 4: The Notification Request",
    situation:
      "A random website asks the student to allow notifications before showing a video.",
    risk:
      "The website asks for access that may not match the reason the student visited.",
    smarterChoice:
      "Do not allow notifications from unfamiliar websites. Use a trusted source or ask for help.",
  },
  {
    title: "Scenario 5: The School Device Warning",
    situation:
      "A school laptop shows a warning the student does not understand.",
    risk:
      "Clicking random buttons on a school device can cause more confusion or problems.",
    smarterChoice:
      "Ask a teacher or school technology staff member for help.",
  },
];

const reviewQuestions = [
  {
    question:
      "A website asks for personal information before showing a homework answer. What is the safer response?",
    choices: [
      "Enter the information quickly",
      "Use a trusted school-approved source or ask a trusted adult",
      "Send the form to classmates",
    ],
    answer: "Choice B",
    explanation:
      "Students should not share personal information with unfamiliar websites when safer school-approved or trusted sources exist.",
  },
  {
    question:
      "A random page offers a free game booster download. What warning sign appears?",
    choices: [
      "The download comes from an unknown source",
      "The page mentions a game",
      "The student is online",
    ],
    answer: "Choice A",
    explanation:
      "Unknown downloads, especially ones promising exciting advantages, should be avoided unless confirmed through official sources and trusted help.",
  },
  {
    question:
      "A pop-up says the device is infected and demands an immediate click. What tactic is being used?",
    choices: [
      "Fear and urgency",
      "A normal classroom reminder",
      "A trusted update process",
    ],
    answer: "Choice A",
    explanation:
      "Scary pop-ups can use fear and urgency to pressure students into unsafe clicks.",
  },
  {
    question:
      "A simple quiz website asks for camera and microphone access. What is the safer response?",
    choices: [
      "Click allow because every website needs access",
      "Do not allow access if the permission does not match the purpose",
      "Allow access and enter personal information",
    ],
    answer: "Choice B",
    explanation:
      "Permissions should match what the app or website actually needs to do. A simple quiz usually does not need camera or microphone access.",
  },
  {
    question:
      "A school device shows a confusing warning. What should the student do?",
    choices: [
      "Click random buttons until it disappears",
      "Download a fix from a random website",
      "Ask a teacher or school technology staff member for help",
    ],
    answer: "Choice C",
    explanation:
      "School device warnings should be handled with trusted school guidance.",
  },
];

const reflectionQuestions = [
  "What does safe browsing mean?",
  "Why should students be careful when a website asks for personal information?",
  "Why should downloads come from official or trusted sources?",
  "Why can pop-ups, ads, and redirects create risky situations?",
  "Why should permissions match the purpose of an app or website?",
  "Who can help when a website, download, warning, or school device feels confusing?",
];

const finalChecklist = [
  "I can explain what safe browsing means.",
  "I can recognize website warning signs.",
  "I can avoid entering private information into unfamiliar forms.",
  "I can avoid unknown downloads, apps, tools, updates, and browser extensions.",
  "I can respond safely to pop-ups, ads, redirects, and fake warnings.",
  "I can think carefully before allowing permissions.",
  "I can use official sources, school-approved tools, and trusted websites.",
  "I know when to ask a trusted adult, teacher, guardian, or school technology staff member for help.",
];

const badgeSkills = [
  "Safe browsing habits",
  "Website warning signs",
  "Download caution",
  "Pop-up and ad safety",
  "Permission awareness",
  "Device warning response",
];

export default function SafeBrowsingAndDownloadsReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Safe Browsing and Downloads Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 5: Safe Browsing and Downloads.
          Students will review website warning signs, downloads, files, apps,
          browser extensions, pop-ups, ads, redirects, updates, permissions, and
          device warnings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/updates-permissions-and-device-warnings"
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
            href="/junior#junior-learning-path"
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
          <p className="text-cyan-300 font-semibold mb-3">Module Summary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 5 taught students to check before visiting, clicking,
            downloading, allowing, or trusting.
          </h2>

          <div className="space-y-5">
            {moduleSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Vocabulary Review</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review the key safe browsing and download safety words.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyReview.map((word) => (
            <div
              key={word.term}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Review each situation, identify the risk, and compare the safer
            choice.
          </h2>

          <div className="space-y-6">
            {scenarioReview.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">Risk</h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Choice
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterChoice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Choose the Safer Response
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Choose first, then reveal the safer answer.
        </h2>

        <div className="space-y-5">
          {reviewQuestions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-sm text-cyan-300 font-semibold mb-3">
                Question {index + 1}
              </p>

              <h3 className="text-2xl font-bold mb-5">{item.question}</h3>

              <div className="space-y-3 mb-5">
                {item.choices.map((choice, choiceIndex) => (
                  <div
                    key={choice}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    <span className="font-bold text-cyan-200">
                      Choice {String.fromCharCode(65 + choiceIndex)}:
                    </span>{" "}
                    {choice}
                  </div>
                ))}
              </div>

              <details className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <summary className="cursor-pointer font-bold text-emerald-200">
                  Reveal safer response
                </summary>

                <div className="mt-4 text-slate-200 leading-relaxed">
                  <p className="font-bold mb-2">
                    Correct Answer: {item.answer}
                  </p>

                  <p>{item.explanation}</p>
                </div>
              </details>
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

            <h2 className="text-3xl font-bold mb-6">
              Think about how Module 5 connects to real browsing.
            </h2>

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
              Junior Skill Badge
            </p>

            <h2 className="text-3xl font-bold mb-6">Safe Browser</h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can recognize suspicious websites,
              avoid unknown downloads, respond carefully to pop-ups and browser
              warnings, think before allowing permissions, and ask for help
              before taking risky online actions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {badgeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Final Module 5 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 5, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {finalChecklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <p className="text-emerald-200 font-semibold mb-3">
              Module 5 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Safe Browsing and Downloads.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module,
              where they will keep practicing safe, thoughtful, defensive
              digital decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Module 5 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 5 or return to the Junior
            learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/updates-permissions-and-device-warnings"
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
              href="/junior#junior-learning-path"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              View Next Module
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}