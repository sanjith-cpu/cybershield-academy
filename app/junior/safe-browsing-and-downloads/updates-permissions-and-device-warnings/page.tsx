import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why updates, permissions, and device warnings matter",
  "Recognize safe ways to handle update messages",
  "Understand why app permissions should match the app’s purpose",
  "Practice safer choices before allowing access or responding to alerts",
  "Know when to ask a trusted adult or school technology staff member for help",
];

const vocabulary = [
  {
    term: "Update",
    definition:
      "A change that improves, fixes, or adds features to a device, browser, app, or system. Updates should come from official tools.",
  },
  {
    term: "Permission",
    definition:
      "Access an app or website asks for, such as camera, microphone, location, contacts, photos, notifications, or files.",
  },
  {
    term: "Device Warning",
    definition:
      "A message from a device, app, browser, or website that says something needs attention.",
  },
  {
    term: "Official Update Tool",
    definition:
      "The real settings, app store, browser tool, school device tool, or system feature used to update safely.",
  },
  {
    term: "Allow",
    definition:
      "Choosing to give an app or website access to something on a device.",
  },
  {
    term: "Deny",
    definition:
      "Choosing not to give an app or website access to something on a device.",
  },
];

const permissionTypes = [
  {
    title: "Location",
    explanation:
      "Some apps ask to know where a device is. This may make sense for maps, weather, or ride apps, but not every app needs it.",
    saferChoice:
      "Pause and ask whether the app truly needs location access for its purpose.",
  },
  {
    title: "Camera and Microphone",
    explanation:
      "Video calls, recording tools, and camera apps may need camera or microphone access, but random websites usually do not.",
    saferChoice:
      "Do not allow camera or microphone access unless the reason is clear and trusted.",
  },
  {
    title: "Contacts and Photos",
    explanation:
      "Some apps ask for contacts or photos, which can include personal information about the student and others.",
    saferChoice:
      "Ask a trusted adult before giving apps access to contacts or photo libraries.",
  },
  {
    title: "Notifications",
    explanation:
      "Notifications let a website or app send alerts later, even when the student is not on the page.",
    saferChoice:
      "Do not allow notifications from unfamiliar websites or random pages.",
  },
];

const warningSigns = [
  {
    title: "Update From a Pop-Up",
    text: "A random website or pop-up says the student must download an update immediately.",
  },
  {
    title: "Permission Does Not Match",
    text: "An app or website asks for access that does not seem related to what it does.",
  },
  {
    title: "Scary Device Alert",
    text: "A page claims the device is infected, locked, hacked, or broken and pushes a quick fix.",
  },
  {
    title: "Pressure to Allow",
    text: "The page says the student must allow notifications, location, camera, or downloads to continue.",
  },
  {
    title: "Unknown App Request",
    text: "An app the student does not recognize asks for access or changes.",
  },
  {
    title: "School Device Confusion",
    text: "A school device shows a warning or request the student does not understand.",
  },
];

const scenarios = [
  {
    title: "The Random Update Pop-Up",
    situation:
      "A website pop-up says the browser is outdated and the student must download an update immediately.",
    warningSigns:
      "The update appears through a random website pop-up and creates urgency.",
    riskyResponse:
      "Click the download button because updates sound important.",
    smarterResponse:
      "Do not click the pop-up. Ask a trusted adult and use official browser, app store, or device settings.",
    whyItWorks:
      "Real updates should come from official tools, not random website pop-ups.",
  },
  {
    title: "The Camera Permission Request",
    situation:
      "A random quiz website asks for camera and microphone access before showing the questions.",
    warningSigns:
      "The permissions do not match the purpose of a simple quiz page.",
    riskyResponse:
      "Click allow because the page says it is required.",
    smarterResponse:
      "Do not allow access. Leave the page or ask a trusted adult for help.",
    whyItWorks:
      "Permission requests should match the app or website’s purpose. Random pages should not get extra access.",
  },
  {
    title: "The Notification Trap",
    situation:
      "A page says the student must allow notifications to watch a video.",
    warningSigns:
      "The page asks for notification access before showing content.",
    riskyResponse:
      "Allow notifications to continue watching.",
    smarterResponse:
      "Do not allow notifications from unfamiliar websites. Use a trusted source for the video.",
    whyItWorks:
      "Notifications can allow a site to send more alerts later. Students should avoid allowing them from random pages.",
  },
  {
    title: "The School Device Warning",
    situation:
      "A school laptop shows a warning the student does not understand during class.",
    warningSigns:
      "The student is unsure what the warning means and the device belongs to school.",
    riskyResponse:
      "Click random buttons until the warning disappears.",
    smarterResponse:
      "Stop and ask the teacher or school technology staff member for help.",
    whyItWorks:
      "School devices should be handled with school guidance when warnings appear.",
  },
];

const actionSteps = [
  "Pause before clicking update, allow, install, fix, continue, or download buttons.",
  "Use official settings, official app stores, official browser tools, or school technology support for updates.",
  "Ask whether the permission matches what the app or website is supposed to do.",
  "Deny or avoid permission requests from unfamiliar websites when the reason is unclear.",
  "Do not respond to scary device warnings from random websites or pop-ups.",
  "Ask a trusted adult, teacher, guardian, or school technology staff member when unsure.",
];

const reflectionQuestions = [
  "Why should updates come from official tools?",
  "Why should permissions match an app’s purpose?",
  "Why can fake device warnings be risky?",
  "Why should students avoid allowing notifications from random websites?",
  "Who can help if a school device shows a confusing warning?",
];

const skillCheck = [
  {
    question:
      "A random website says the browser is outdated and asks the student to download an update. What is the safer response?",
    choices: [
      "Click the pop-up update button immediately",
      "Do not click the pop-up; use official update tools with trusted help",
      "Share the update pop-up with classmates",
    ],
    answer: "Choice B",
    explanation:
      "Real updates should come from official settings, app stores, browser tools, or school technology support, not random pop-ups.",
  },
  {
    question:
      "A simple quiz website asks for camera and microphone access. What is the warning sign?",
    choices: [
      "The requested permissions do not match the website’s purpose",
      "The website has questions",
      "The student is using a browser",
    ],
    answer: "Choice A",
    explanation:
      "Permission requests should match what the app or website needs to do. A quiz usually does not need camera and microphone access.",
  },
  {
    question:
      "A random page asks the student to allow notifications before showing a video. What should the student do?",
    choices: [
      "Allow notifications immediately",
      "Avoid allowing notifications from unfamiliar websites",
      "Allow notifications and enter personal information",
    ],
    answer: "Choice B",
    explanation:
      "Students should be careful with notification requests from unfamiliar websites.",
  },
  {
    question:
      "A school laptop shows a warning the student does not understand. What is the safer choice?",
    choices: [
      "Click random buttons until it disappears",
      "Ask a teacher or school technology staff member for help",
      "Download a fix from a random website",
    ],
    answer: "Choice B",
    explanation:
      "School device warnings should be handled with teacher or school technology staff guidance.",
  },
];

const checklist = [
  "I can explain why updates should come from official tools.",
  "I can recognize when a permission request does not match an app’s purpose.",
  "I can avoid allowing access from unfamiliar websites.",
  "I can respond safely to scary device warnings.",
  "I can ask for help with school device warnings.",
  "I know when to ask a trusted adult before clicking allow, update, install, or download.",
];

export default function UpdatesPermissionsAndDeviceWarningsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Updates, Permissions, and Device Warnings
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Updates, permissions, and device warnings can be normal, but students
          should handle them carefully. This lesson teaches students to check
          whether a request is official, necessary, and safe before clicking
          allow, update, install, fix, or download.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/pop-ups-ads-and-redirects"
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
            href="/junior/safe-browsing-and-downloads/review"
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
              Not every “allow” or “update” button should be clicked.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a message asking to allow notifications,
              use the camera, download an update, or fix a device problem. Some
              requests are normal, but others are suspicious. The safest habit is
              to pause and check the source.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Updates and permissions should make sense before students accept them.
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
              Do not click random update, allow, fix, install, or download
              buttons for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real pop-ups, change real permissions, install unknown
              updates, or respond to device warnings without trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A safe request should come from a trusted place and match the purpose.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Updates can help fix problems or improve apps, browsers, and
            devices. However, students should be careful when an update appears
            as a random website pop-up or message link. Real updates should come
            from official settings, official app stores, official browser tools,
            or school technology support.
          </p>

          <p>
            Permissions give websites and apps access to parts of a device, such
            as camera, microphone, location, contacts, photos, files, or
            notifications. Before allowing access, students should ask whether
            the permission matches what the app or website is supposed to do.
          </p>

          <p>
            Device warnings can be real or fake. If a warning feels scary,
            confusing, urgent, or appears on a school device, students should not
            click random buttons. They should stop, avoid risky actions, and ask
            a trusted adult or school technology staff member for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for updates, permissions, and warnings.
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
          Permission Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Permissions should match the app or website’s purpose.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {permissionTypes.map((item) => (
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
            Pause when update, permission, or warning messages show these clues.
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
          “Allow” should never be automatic.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks allow, update, install, fix, or download because
              a page says it is required, urgent, or important.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the source, asks whether the request
              makes sense, uses official tools, and asks trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer responses to updates, permissions, and warnings.
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
          Use these habits before allowing access or responding to warnings.
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
          Before finishing Lesson 5.5, students should be able to say:
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
            Lesson 5.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 5.6 will review safe browsing, warning signs,
            downloads, pop-ups, permissions, and device warnings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/pop-ups-ads-and-redirects"
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
              href="/junior/safe-browsing-and-downloads/review"
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