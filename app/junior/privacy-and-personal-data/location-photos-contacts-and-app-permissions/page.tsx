import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what app permissions are",
  "Understand why location, photos, contacts, camera, and microphone access can affect privacy",
  "Recognize when an app permission does not match what the app needs to do",
  "Identify risky permission requests before allowing access",
  "Practice asking a trusted adult before changing important privacy settings",
];

const vocabulary = [
  {
    term: "App Permission",
    definition:
      "A setting that allows an app to access part of a device, such as location, camera, microphone, photos, contacts, or notifications.",
  },
  {
    term: "Location Access",
    definition:
      "Permission that may allow an app to know where a device is or where it has been.",
  },
  {
    term: "Contacts",
    definition:
      "A list of saved names, phone numbers, emails, or other contact details on a device or account.",
  },
  {
    term: "Camera Access",
    definition:
      "Permission that lets an app use the device camera.",
  },
  {
    term: "Microphone Access",
    definition:
      "Permission that lets an app use the device microphone.",
  },
  {
    term: "Photo Library",
    definition:
      "The saved photos and videos on a device or account. Some apps may ask to view or use these files.",
  },
];

const permissionTypes = [
  {
    title: "Location",
    explanation:
      "Location access can help maps or weather apps, but it may be unnecessary for a simple game, wallpaper app, or quiz app.",
    smarterHabit:
      "Ask why the app needs location before allowing it.",
  },
  {
    title: "Photos",
    explanation:
      "Photo access can help editing apps, but photos may include private details in backgrounds, screenshots, documents, or locations.",
    smarterHabit:
      "Share only the photos needed, and avoid uploading private images.",
  },
  {
    title: "Contacts",
    explanation:
      "Contact access may let an app see names, phone numbers, or emails saved on a device.",
    smarterHabit:
      "Do not allow contact access just for rewards, games, or random features.",
  },
  {
    title: "Camera and Microphone",
    explanation:
      "Camera and microphone access may be useful for video calls, but it should make sense for the app’s purpose.",
    smarterHabit:
      "Pause before allowing access and ask a trusted adult if unsure.",
  },
];

const risks = [
  {
    title: "Unnecessary Access",
    text: "Some apps may ask for permissions that do not match what the app actually needs.",
  },
  {
    title: "Private Details in Photos",
    text: "Photos can reveal school logos, house numbers, documents, uniforms, street signs, or location clues.",
  },
  {
    title: "Contacts and Social Pressure",
    text: "Apps may encourage users to upload contacts or invite friends even when it is not necessary.",
  },
];

const scenarios = [
  {
    title: "The Game Reward Permission",
    situation:
      "A game says a student can unlock a bonus reward if they allow access to contacts.",
    warningSigns:
      "The game does not need contact information to let the student play.",
    riskyResponse:
      "Allowing contact access quickly because the reward looks exciting.",
    smarterResponse:
      "Do not allow contact access, skip the reward, and ask a trusted adult if the app keeps pressuring them.",
    whyItWorks:
      "Contacts contain other people’s information too, so students should not share them for rewards.",
  },
  {
    title: "The Photo Editing App",
    situation:
      "A student downloads a photo editing app. The app asks for access to the entire photo library.",
    warningSigns:
      "The student only wants to edit one picture, but the app asks for much more access.",
    riskyResponse:
      "Giving full photo access without checking what the app actually needs.",
    smarterResponse:
      "Use the smallest access option available, choose only the photo needed, or ask a trusted adult before allowing full access.",
    whyItWorks:
      "Limiting access helps protect private photos, screenshots, documents, and background details.",
  },
  {
    title: "The Location Request",
    situation:
      "A simple puzzle app asks for location access when the student opens it for the first time.",
    warningSigns:
      "A puzzle app usually does not need exact location to work.",
    riskyResponse:
      "Allowing location because the pop-up appears before the student can play.",
    smarterResponse:
      "Deny location access or ask a trusted adult if the student is unsure why the app needs it.",
    whyItWorks:
      "Students should understand why location is needed before sharing it.",
  },
  {
    title: "The Camera and Microphone Pop-Up",
    situation:
      "A random website asks to use the camera and microphone even though the student is only reading a page.",
    warningSigns:
      "Camera and microphone access do not match the activity.",
    riskyResponse:
      "Clicking allow because the pop-up blocks part of the page.",
    smarterResponse:
      "Do not allow access, leave the site if it feels suspicious, and ask a trusted adult for help.",
    whyItWorks:
      "Camera and microphone permissions should only be allowed when they make sense and are trusted.",
  },
];

const actionSteps = [
  "Pause before tapping Allow on a permission request.",
  "Ask: Does this app really need this permission to work?",
  "Avoid allowing location, contacts, camera, microphone, or full photo access for random rewards.",
  "Check photos for private details before uploading or sharing.",
  "Use the smallest permission option when possible.",
  "Ask a trusted adult before changing important app, account, or device privacy settings.",
];

const reflectionQuestions = [
  "Why might a game asking for contacts be risky?",
  "What private details can appear in a photo background?",
  "Why should students think before allowing location access?",
  "When does camera or microphone access make sense?",
  "What should a student do if they do not understand a permission request?",
];

const skillCheck = [
  {
    question:
      "A puzzle app asks for exact location before letting a student play. What is the smarter response?",
    choices: [
      "Allow it because all apps probably need location",
      "Pause, question why the app needs location, and deny or ask a trusted adult if unsure",
      "Enter a fake address into the app",
    ],
    answer: "Choice B",
    explanation:
      "A puzzle app usually does not need exact location. Students should pause and ask why the permission is needed.",
  },
  {
    question:
      "A game offers a reward if a student shares contacts. What is the main privacy concern?",
    choices: [
      "Contacts include other people’s names, phone numbers, or emails",
      "Rewards are always safe",
      "Contact access only affects the game screen color",
    ],
    answer: "Choice A",
    explanation:
      "Contacts can include private information about other people, so students should not share them for a reward.",
  },
  {
    question:
      "Before uploading a photo, what should a student check?",
    choices: [
      "Whether the background shows school logos, documents, house numbers, street signs, or location clues",
      "Whether the photo has enough likes",
      "Whether the app asks for more hashtags",
    ],
    answer: "Choice A",
    explanation:
      "Photos can reveal private details through backgrounds, logos, documents, uniforms, or location clues.",
  },
  {
    question:
      "A website asks for camera and microphone access while a student is only reading an article. What is the smarter response?",
    choices: [
      "Allow it because websites always need camera access",
      "Allow microphone but not camera",
      "Do not allow access, leave if it feels suspicious, and ask a trusted adult for help",
    ],
    answer: "Choice C",
    explanation:
      "Camera and microphone permissions should only be allowed when they are needed and trusted.",
  },
];

const checklist = [
  "I can explain what app permissions are.",
  "I can identify privacy risks with location access.",
  "I can explain why photos can reveal private details.",
  "I can explain why contacts should not be shared for rewards.",
  "I can pause before allowing camera or microphone access.",
  "I know when to ask a trusted adult for help with permissions.",
];

export default function LocationPhotosContactsAndAppPermissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Location, Photos, Contacts, and App Permissions
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Apps and websites sometimes ask for permission to access parts of a
          device. This lesson helps students pause and think before allowing
          access to location, photos, contacts, camera, or microphone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/personal-data-vs-private-data"
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
            href="/junior/privacy-and-personal-data/why-companies-want-data"
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
              The Allow button can feel small, but it can open a big door.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student downloads a new game. Before they even play, the
              game asks for location, contacts, photos, camera, and microphone.
              The student wants to click Allow quickly, but not every permission
              is needed for every app.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Permission requests deserve a pause before clicking.
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
            Permissions can affect privacy even when students are just trying to
            use an app.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students use games, school apps, creative tools, video
            apps, and social platforms. Some apps need permissions to work, but
            others may ask for more than necessary. Learning to question
            permissions helps students protect private information, photos,
            contacts, location, and device privacy.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A permission should match the app’s purpose.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            App permissions are settings that allow an app to use parts of a
            device or account. A map app may need location. A video call app may
            need camera and microphone. A photo editing app may need access to a
            photo. But a simple game or quiz app may not need contacts, exact
            location, or full photo library access.
          </p>

          <p>
            The safest habit is to pause and ask why the app needs the
            permission. If the permission does not match the app’s purpose, the
            student should be careful. They can deny the permission, choose a
            smaller access option when available, or ask a trusted adult before
            continuing.
          </p>

          <p>
            Permissions are also important because they can involve other
            people. Contacts may include friends and family. Photos may include
            classmates, school details, documents, or location clues. Students
            should not share access just because an app offers a reward or makes
            the request look urgent.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding app permissions.
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
          Common permissions need careful thinking.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {permissionTypes.map((permission) => (
            <div
              key={permission.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {permission.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {permission.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {permission.smarterHabit}
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
            Permission risks often appear when access is unnecessary or too broad.
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
          Think before giving an app access.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student taps Allow for location, contacts, photos, camera, and
              microphone without reading why the app wants access.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks whether the permission matches the app,
              chooses limited access when possible, and asks a trusted adult if
              the request seems confusing or unnecessary.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding whether a permission request makes sense.
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
          Use these habits before allowing app access.
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
          Before finishing Lesson 2.2, students should be able to say:
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
            Lesson 2.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 2.3 will explain why companies may want data for
            personalization, recommendations, advertising, analytics, and app
            decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/personal-data-vs-private-data"
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
              href="/junior/privacy-and-personal-data/why-companies-want-data"
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