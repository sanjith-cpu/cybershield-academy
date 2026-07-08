import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why updates help protect devices and apps",
  "Understand how backups help students recover important files",
  "Recognize basic protection habits like screen locks, trusted settings, and careful permissions",
  "Practice safer choices when a device shows an update, warning, or storage problem",
  "Know when to ask a trusted adult before changing important settings or installing updates",
];

const vocabulary = [
  {
    term: "Update",
    definition:
      "A change made to an app, device, browser, or system that can fix problems, improve features, or close safety gaps.",
  },
  {
    term: "Security Patch",
    definition:
      "A type of update that fixes a safety weakness so a device, app, or system is better protected.",
  },
  {
    term: "Backup",
    definition:
      "A saved copy of important files, photos, schoolwork, or settings that can help someone recover if something is lost or damaged.",
  },
  {
    term: "Basic Protection",
    definition:
      "Everyday safety habits such as locking devices, using strong account protection, updating trusted apps, and asking before changing important settings.",
  },
  {
    term: "Permission",
    definition:
      "Access an app or website asks for, such as camera, microphone, location, contacts, photos, notifications, or files.",
  },
  {
    term: "Trusted Source",
    definition:
      "An official app store, device settings page, school tool, parent or guardian, teacher, or other safe source used to check important device actions.",
  },
];

const protectionSituations = [
  {
    title: "Update Notification",
    explanation:
      "A device or app says an update is available and asks the student to install it.",
    saferChoice:
      "Check that the update is coming from the official device settings, app store, school tool, or another trusted source before installing.",
  },
  {
    title: "Important School File",
    explanation:
      "A student has a project, essay, presentation, or photo collection that they would not want to lose.",
    saferChoice:
      "Save important work in a trusted place and use approved backup options when available.",
  },
  {
    title: "Permission Request",
    explanation:
      "An app asks for access to the camera, microphone, location, contacts, files, or photos.",
    saferChoice:
      "Pause and ask whether the permission matches the app purpose. Ask a trusted adult if unsure.",
  },
  {
    title: "Device Warning",
    explanation:
      "A device shows a warning about storage, an outdated app, account settings, or protection settings.",
    saferChoice:
      "Do not guess or click randomly. Ask a trusted adult and use official settings or school support when needed.",
  },
];

const warningSigns = [
  {
    title: "Fake Update Pop-Up",
    text: "A random website says the device needs an update and pushes a download button instead of using official settings or an app store.",
  },
  {
    title: "Ignored Updates",
    text: "A device or app has been asking for trusted updates for a long time, which may leave known problems unfixed.",
  },
  {
    title: "No Copy of Important Work",
    text: "A student has important files saved in only one place, so losing the device or file could mean losing the work.",
  },
  {
    title: "Permission Does Not Match",
    text: "An app asks for access that does not make sense for what the app is supposed to do.",
  },
  {
    title: "Unlocked Shared Device",
    text: "A phone, tablet, laptop, or school device is left open where other people could use it without permission.",
  },
  {
    title: "Random Setting Changes",
    text: "Someone changes device, browser, privacy, or account settings without understanding what the setting does.",
  },
];

const scenarios = [
  {
    title: "The Official Update Reminder",
    situation:
      "A student sees an update reminder inside the device settings. The student is busy and wants to ignore it forever.",
    warningSigns:
      "Ignoring trusted updates for a long time can leave problems unfixed.",
    riskyResponse:
      "Keep dismissing trusted updates and never ask whether they should be installed.",
    smarterResponse:
      "Ask a trusted adult when a good time would be to install the official update and keep the device charged during the process.",
    whyItWorks:
      "Trusted updates can fix bugs and safety weaknesses. Asking for help makes the update safer and less confusing.",
  },
  {
    title: "The Website Update Button",
    situation:
      "A student visits a random page and sees a message saying they must download a device update from that website right now.",
    warningSigns:
      "The update is pushed by a random website instead of official device settings or a trusted app store.",
    riskyResponse:
      "Click the website download button because it says the update is required.",
    smarterResponse:
      "Do not click the website button. Leave the page if possible and ask a trusted adult to check official update settings.",
    whyItWorks:
      "Real updates should come from trusted sources. Random website download buttons can be unsafe or misleading.",
  },
  {
    title: "The Lost Project Problem",
    situation:
      "A student is working on a big school presentation saved only on one device. The device starts acting strangely before the project is turned in.",
    warningSigns:
      "Important work exists in only one place and could be lost if the device has a problem.",
    riskyResponse:
      "Hope nothing goes wrong and keep the only copy on the same device.",
    smarterResponse:
      "Save a copy in a trusted school-approved location or ask a trusted adult how to back it up safely.",
    whyItWorks:
      "Backups protect important work from accidents, device problems, or accidental deletion.",
  },
  {
    title: "The App Permission Question",
    situation:
      "A simple wallpaper app asks for access to contacts, location, microphone, and photos before it will open.",
    warningSigns:
      "The permissions do not clearly match what a wallpaper app should need.",
    riskyResponse:
      "Allow every permission so the app opens faster.",
    smarterResponse:
      "Pause, do not allow unnecessary access, and ask a trusted adult whether the app is safe or needed.",
    whyItWorks:
      "Permissions can expose private information or device features. Students should only allow access that makes sense and is trusted.",
  },
];

const actionSteps = [
  "Use official device settings, app stores, school tools, or trusted adults for updates.",
  "Do not download updates from random websites, pop-ups, ads, or message links.",
  "Save important schoolwork and files in trusted places approved by home or school.",
  "Think before allowing app permissions like camera, microphone, location, contacts, photos, or files.",
  "Lock devices when stepping away and avoid leaving accounts open on shared devices.",
  "Ask a trusted adult before changing important device, browser, privacy, or account settings.",
];

const reflectionQuestions = [
  "Why can trusted updates help protect devices and apps?",
  "Why should students avoid update buttons from random websites or pop-ups?",
  "How can backups help protect important schoolwork or photos?",
  "Why should app permissions match the app purpose?",
  "Who can students ask for help before changing important settings?",
];

const skillCheck = [
  {
    question:
      "A device shows an update reminder inside official settings. What is a safer response?",
    choices: [
      "Ignore all updates forever",
      "Ask a trusted adult when it is a good time to install the trusted update",
      "Search random websites for a faster update file",
    ],
    answer: "Choice B",
    explanation:
      "Trusted updates can fix problems and safety weaknesses. A trusted adult can help students install them safely.",
  },
  {
    question:
      "A random website says the device needs an update and pushes a download button. What is the warning sign?",
    choices: [
      "The update is coming from a random website instead of a trusted source",
      "The website has words on it",
      "The student is using a device",
    ],
    answer: "Choice A",
    explanation:
      "Students should not download updates from random websites or pop-ups. Official settings and trusted sources are safer.",
  },
  {
    question:
      "A student has an important project saved in only one place. What is the safer habit?",
    choices: [
      "Keep only one copy and hope it never gets lost",
      "Save a copy in a trusted school-approved location or ask how to back it up safely",
      "Delete the file to save space",
    ],
    answer: "Choice B",
    explanation:
      "Backups help protect important work from accidents, device issues, or accidental deletion.",
  },
  {
    question:
      "A simple app asks for permissions that do not match its purpose. What should the student do?",
    choices: [
      "Allow every permission immediately",
      "Pause, avoid unnecessary access, and ask a trusted adult if unsure",
      "Share the permission request with strangers online",
    ],
    answer: "Choice B",
    explanation:
      "Permissions can give access to private information or device features. Students should pause and get trusted help.",
  },
];

const checklist = [
  "I can explain why trusted updates matter.",
  "I can avoid fake update buttons from random websites, pop-ups, ads, or messages.",
  "I can explain why backups help protect important files.",
  "I can think before allowing app permissions.",
  "I can use screen locks and careful shared-device habits.",
  "I know when to ask a trusted adult before changing important settings.",
];

export default function UpdatesBackupsAndBasicProtectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10 • Lesson 10.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Updates, Backups, and Basic Protection
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Updates, backups, and basic protection habits help reduce cyber risk
          before something goes wrong. This lesson teaches students how to use
          trusted update sources, protect important files, think about app
          permissions, and ask for help before changing important settings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics/scams-social-engineering-and-human-risk"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/cyber-threats-and-defense-basics"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 10
          </Link>

          <Link
            href="/junior/cyber-threats-and-defense-basics/what-cyber-defenders-do"
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
              Good protection habits can prevent bigger problems later.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student ignores trusted updates for months, saves a big
              project in only one place, and allows every permission an app asks
              for. Nothing may look wrong at first, but those small choices can
              make files, accounts, and devices harder to protect.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Basic protection is built from everyday habits.
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
              Do not download updates from random websites or pop-ups.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test fake update links, download unknown files, change important
              settings alone, turn off protections for practice, or install
              tools from suspicious pages. Use trusted sources and trusted adult
              help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Protection is easier when students prepare before trouble happens.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Updates can fix bugs and safety weaknesses in devices, apps,
            browsers, and systems. When updates come from trusted places like
            official settings, trusted app stores, or school tools, they can
            make technology safer and more reliable.
          </p>

          <p>
            Backups help protect important files. If a device breaks, a file is
            deleted, or an account has a problem, a trusted backup can make it
            easier to recover schoolwork, photos, notes, and projects.
          </p>

          <p>
            Basic protection also includes locking devices, thinking before
            allowing permissions, avoiding random downloads, keeping accounts
            signed out on shared devices, and asking a trusted adult before
            changing settings that students do not fully understand.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding updates, backups, and protection.
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
          Protection Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Updates, backups, permissions, and warnings all require careful choices.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {protectionSituations.map((item) => (
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
            Basic protection means noticing risky update, backup, and setting choices.
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
          Protection choices should come from trusted sources, not pressure.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student downloads an update from a random pop-up, allows every
              app permission, leaves important files in only one place, or
              changes device settings without understanding them.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student uses trusted update sources, backs up important work,
              thinks before allowing permissions, locks devices, and asks a
              trusted adult before making major changes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer protection decisions using fake examples.
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
          Use these habits to keep devices, files, and settings safer.
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
          Before finishing Lesson 10.4, students should be able to say:
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
            Lesson 10.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 10.5 will explain what cyber defenders do and how they
            reduce risk safely and ethically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics/scams-social-engineering-and-human-risk"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/cyber-threats-and-defense-basics"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 10
            </Link>

            <Link
              href="/junior/cyber-threats-and-defense-basics/what-cyber-defenders-do"
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