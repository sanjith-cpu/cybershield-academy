import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what pop-ups, ads, and redirects are",
  "Recognize when a pop-up or ad is trying to pressure a student",
  "Understand why fake warnings and download buttons can be risky",
  "Practice safer choices before clicking pop-ups, ads, or redirected pages",
  "Know when to stop interacting and ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Pop-Up",
    definition:
      "A box, window, or message that appears on top of a webpage and often asks someone to click, close, allow, download, or respond.",
  },
  {
    term: "Ad",
    definition:
      "A message or image that promotes something, such as a product, app, game, deal, video, or download.",
  },
  {
    term: "Redirect",
    definition:
      "When a website sends someone to another page, sometimes without the person clearly choosing it.",
  },
  {
    term: "Fake Warning",
    definition:
      "A message that pretends something is wrong with a device, account, or browser so someone clicks quickly.",
  },
  {
    term: "Clickbait",
    definition:
      "Content designed to make people click by using curiosity, shock, excitement, fear, or exaggeration.",
  },
  {
    term: "Close Button",
    definition:
      "A button that appears to close a pop-up. Students should still be careful because confusing pages can make buttons misleading.",
  },
];

const popUpTypes = [
  {
    title: "Fake Device Warning",
    explanation:
      "A pop-up says the device is infected, broken, locked, or unsafe and must be fixed immediately.",
    risk:
      "The message uses fear and urgency to make the student click without thinking.",
    saferChoice:
      "Do not click the warning. Stop interacting and ask a trusted adult for help.",
  },
  {
    title: "Prize Ad",
    explanation:
      "An ad says the student won a gift card, game reward, rare item, or free upgrade.",
    risk:
      "The ad may lead to a form, download, or page asking for private information.",
    saferChoice:
      "Do not click the prize ad. Check official sources or ask trusted help.",
  },
  {
    title: "Allow Notifications Prompt",
    explanation:
      "A website asks the student to allow notifications before showing content.",
    risk:
      "Allowing notifications can let a site send more messages or alerts later.",
    saferChoice:
      "Do not allow notifications from unfamiliar websites. Ask a trusted adult when unsure.",
  },
  {
    title: "Redirect Chain",
    explanation:
      "A student clicks one page, then gets sent to multiple pages, tabs, or ads.",
    risk:
      "The student may lose track of where they are and accidentally click something risky.",
    saferChoice:
      "Stop clicking and ask a trusted adult for help closing the pages safely.",
  },
];

const warningSigns = [
  {
    title: "Urgent Language",
    text: "The pop-up says the student must click, fix, download, or respond immediately.",
  },
  {
    title: "Scary Device Claims",
    text: "The page says the device is infected, hacked, locked, damaged, or unsafe.",
  },
  {
    title: "Free Prize Claims",
    text: "An ad says the student won something even though they did not enter a real contest.",
  },
  {
    title: "Confusing Buttons",
    text: "The page shows many buttons, fake close buttons, flashing boxes, or unclear instructions.",
  },
  {
    title: "Unexpected Redirects",
    text: "The page sends the student somewhere they did not mean to go.",
  },
  {
    title: "Requests for Access",
    text: "The page asks to allow notifications, location, camera, microphone, downloads, or other access without a clear reason.",
  },
];

const scenarios = [
  {
    title: "The Scary Device Pop-Up",
    situation:
      "A student visits a page and sees a pop-up saying the device is infected and must be fixed now.",
    warningSigns:
      "The pop-up creates fear and pressure to click immediately.",
    riskyResponse:
      "Click the button because the warning seems serious.",
    smarterResponse:
      "Do not click the pop-up. Stop interacting and ask a trusted adult for help.",
    whyItWorks:
      "Scary pop-ups can pressure students into unsafe clicks. Trusted help is safer than reacting alone.",
  },
  {
    title: "The Prize Advertisement",
    situation:
      "An ad says the student won a gift card and must click to claim it.",
    warningSigns:
      "The prize is unexpected and the ad pushes a click.",
    riskyResponse:
      "Click the ad and fill out the prize form.",
    smarterResponse:
      "Do not click the ad. Ask a trusted adult and use official sources if needed.",
    whyItWorks:
      "Unexpected prize ads can lead to risky forms, downloads, or pages.",
  },
  {
    title: "The Notification Request",
    situation:
      "A random website asks the student to allow notifications before showing a video.",
    warningSigns:
      "The website asks for permission even though it does not clearly need it.",
    riskyResponse:
      "Click allow because the student wants to watch the video.",
    smarterResponse:
      "Do not allow notifications from unfamiliar websites. Leave the page or ask a trusted adult.",
    whyItWorks:
      "Permission requests should match the purpose of the website. Random sites should not get extra access.",
  },
  {
    title: "The Redirect Maze",
    situation:
      "A student clicks one button, but the browser opens several tabs with ads and unknown pages.",
    warningSigns:
      "The browser sends the student to pages they did not choose.",
    riskyResponse:
      "Keep clicking buttons to find the original page.",
    smarterResponse:
      "Stop clicking and ask a trusted adult for help closing the pages safely.",
    whyItWorks:
      "Redirects and confusing pages can lead to accidental risky clicks. Pausing reduces the chance of mistakes.",
  },
];

const actionSteps = [
  "Pause when a pop-up, ad, or page appears unexpectedly.",
  "Do not click scary warnings, prize ads, fake update buttons, or confusing prompts.",
  "Do not allow notifications, location, camera, microphone, or downloads from unfamiliar websites.",
  "Stop clicking when a page keeps opening new tabs, pop-ups, or redirects.",
  "Use official apps, websites, and device settings instead of pop-up instructions.",
  "Ask a trusted adult when a page feels scary, confusing, urgent, or hard to close.",
];

const reflectionQuestions = [
  "What is a pop-up?",
  "Why can fake device warnings be risky?",
  "Why should students be careful with prize ads?",
  "Why are redirects a reason to stop clicking?",
  "Who can help a student when a page is confusing or hard to close?",
];

const skillCheck = [
  {
    question:
      "A pop-up says the device is infected and the student must click a button immediately. What is the safer response?",
    choices: [
      "Click the button right away",
      "Do not click the pop-up and ask a trusted adult for help",
      "Enter a password into the pop-up",
    ],
    answer: "Choice B",
    explanation:
      "Scary pop-ups can use fear and urgency. Students should not click them or handle them alone.",
  },
  {
    question:
      "An ad says a student won a gift card even though they did not enter a contest. What is the warning sign?",
    choices: [
      "The prize is unexpected",
      "The ad has colors",
      "The student has a browser",
    ],
    answer: "Choice A",
    explanation:
      "Unexpected prize ads can be risky because they may lead to forms, downloads, or suspicious pages.",
  },
  {
    question:
      "A random website asks to allow notifications before showing content. What should the student do?",
    choices: [
      "Allow notifications immediately",
      "Do not allow notifications from unfamiliar websites",
      "Allow notifications and then share personal information",
    ],
    answer: "Choice B",
    explanation:
      "Students should be careful with permission requests from unfamiliar websites.",
  },
  {
    question:
      "A page keeps opening new tabs and redirecting the student. What is the safer choice?",
    choices: [
      "Keep clicking until the original page appears",
      "Stop interacting and ask a trusted adult for help",
      "Download whatever the page suggests",
    ],
    answer: "Choice B",
    explanation:
      "Redirects and pop-ups can cause accidental risky clicks. Stopping and asking for help is safer.",
  },
];

const checklist = [
  "I can explain what pop-ups, ads, and redirects are.",
  "I can recognize fake warnings and pressure messages.",
  "I can avoid clicking suspicious pop-ups or prize ads.",
  "I can be careful with permission requests from unfamiliar websites.",
  "I can stop interacting when pages become confusing.",
  "I know when to ask a trusted adult for help.",
];

export default function PopUpsAdsAndRedirectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Pop-Ups, Ads, and Redirects
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Pop-ups, ads, and redirects can pressure students to click, download,
          allow access, or share information. This lesson teaches students to
          pause when a webpage becomes confusing, urgent, scary, or too good to
          be true.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/downloads-files-and-app-safety"
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
            href="/junior/safe-browsing-and-downloads/updates-permissions-and-device-warnings"
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
              A pop-up can make a page feel urgent, even when the safest choice
              is to stop.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a warning that the device is infected, a
              prize ad, or a page that keeps opening new tabs. The student does
              not need to click through the confusion. Pausing and asking for
              help is safer.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Pop-ups and redirects often try to control attention.
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
              Do not click pop-ups, ads, fake warnings, or redirects for
              practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real pop-ups, click suspicious ads, follow redirects, or
              allow permissions from unfamiliar websites for practice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pop-ups, ads, and redirects can turn browsing into pressure.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A pop-up is a box or window that appears on top of a page. An ad
            promotes something, such as a deal, app, game, video, prize, or
            download. A redirect sends a person to a different page, sometimes
            unexpectedly.
          </p>

          <p>
            These things are not always unsafe, but they deserve caution when
            they create urgency, fear, confusion, or excitement. A pop-up may
            claim the device is infected. An ad may promise a prize. A redirect
            may keep sending the student to pages they did not choose.
          </p>

          <p>
            The safer habit is to stop interacting when a page becomes
            confusing or pushy. Students can avoid clicking suspicious buttons,
            avoid allowing permissions, use official tools, and ask a trusted
            adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding pop-ups, ads, and redirects.
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
          Pop-Up and Redirect Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Pushy web messages can appear in different forms.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {popUpTypes.map((item) => (
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
            Stop and get help when pages show these clues.
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
          More clicking is not the answer when a page becomes confusing.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks pop-ups, ads, fake warnings, and redirect pages
              because they are trying to make the page go away or find the
              original content.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student stops interacting, avoids suspicious buttons, does not
              allow permissions, and asks a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer responses using fake pop-up and redirect examples.
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
          Use these habits when a page becomes pushy or confusing.
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
          Before finishing Lesson 5.4, students should be able to say:
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
            Lesson 5.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 5.5 will explain updates, permissions, and device
            warnings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/downloads-files-and-app-safety"
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
              href="/junior/safe-browsing-and-downloads/updates-permissions-and-device-warnings"
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