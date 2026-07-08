import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what shared devices and school devices are",
  "Understand why students should protect accounts on devices used by others",
  "Recognize risky signs before saving passwords, staying signed in, or changing settings",
  "Practice safer choices before using a library, classroom, family, or school device",
  "Know when to ask a trusted adult for help with shared device problems",
];

const vocabulary = [
  {
    term: "Shared Device",
    definition:
      "A phone, tablet, laptop, desktop, Chromebook, or other device that is used by more than one person.",
  },
  {
    term: "School Device",
    definition:
      "A device provided or managed by a school for learning, assignments, research, communication, or classroom work.",
  },
  {
    term: "Sign Out",
    definition:
      "Ending an account session so the next person using the device cannot access the account.",
  },
  {
    term: "Saved Password",
    definition:
      "A password stored by a browser, app, or device so it can be filled in later without typing it again.",
  },
  {
    term: "Device Settings",
    definition:
      "Controls that change how a device works, connects, stores information, shares information, or protects accounts.",
  },
  {
    term: "Managed Device",
    definition:
      "A device controlled by a school, parent, organization, or trusted adult with rules, protections, and settings already applied.",
  },
];

const sharedDeviceSituations = [
  {
    title: "Classroom Computer",
    explanation:
      "A student uses a classroom computer to check an assignment, open a school account, or submit work.",
    saferChoice:
      "Use only the needed school tools, avoid saving passwords, and sign out before leaving.",
  },
  {
    title: "Library Device",
    explanation:
      "A student uses a library or public device for research, printing, or schoolwork.",
    saferChoice:
      "Avoid private accounts when possible, do not save login information, and ask staff or a trusted adult for help if something seems wrong.",
  },
  {
    title: "Borrowed Family Device",
    explanation:
      "A student borrows a family tablet, laptop, or phone to complete homework or open an online tool.",
    saferChoice:
      "Ask permission, use the correct account, avoid changing settings, and sign out when finished.",
  },
  {
    title: "School Chromebook",
    explanation:
      "A student uses a school-managed device that may have school rules, monitoring, filters, or required settings.",
    saferChoice:
      "Follow school rules, do not try to bypass settings, and ask a teacher or trusted adult before changing anything.",
  },
];

const warningSigns = [
  {
    title: "Someone Else Is Signed In",
    text: "A device opens an account, email, document, or app that belongs to another person.",
  },
  {
    title: "Save Password Prompt",
    text: "The browser or app asks whether to save a password on a device that other people may use.",
  },
  {
    title: "Private Information Left Open",
    text: "Messages, documents, grades, files, searches, or account pages are visible after someone finishes using the device.",
  },
  {
    title: "Unexpected Downloads",
    text: "Files, extensions, apps, or tools appear on a shared or school device without a clear reason.",
  },
  {
    title: "Pressure to Break Rules",
    text: "Someone tells the student to change school settings, avoid protections, share a login, or use the device in a way that breaks rules.",
  },
  {
    title: "Device Acting Strange",
    text: "The device shows unusual pop-ups, confusing warnings, unknown tabs, or settings the student does not understand.",
  },
];

const scenarios = [
  {
    title: "The Saved Password Prompt",
    situation:
      "A student signs in to a school account on a classroom computer. The browser asks if it should save the password.",
    warningSigns:
      "The device may be used by other students, and saving the password could let someone else access the account later.",
    riskyResponse:
      "Click save because it will make signing in faster next time.",
    smarterResponse:
      "Do not save the password, finish the work, and sign out before leaving the computer.",
    whyItWorks:
      "Shared devices should not store student passwords. Signing out helps protect accounts from the next person using the device.",
  },
  {
    title: "The Open Account",
    situation:
      "A student sits down at a library computer and sees that another student's email or document is still open.",
    warningSigns:
      "Someone else's private information is visible on a shared device.",
    riskyResponse:
      "Look through the account or send a message as a joke.",
    smarterResponse:
      "Do not open or change anything. Tell a teacher, librarian, or trusted adult so the account can be protected.",
    whyItWorks:
      "Respecting other people's privacy is part of digital citizenship. A trusted adult can help close the session safely.",
  },
  {
    title: "The Borrowed Tablet",
    situation:
      "A student borrows a family tablet for homework and is tempted to change settings so a game or website works differently.",
    warningSigns:
      "The device belongs to someone else, and the setting change may affect other people or reduce safety.",
    riskyResponse:
      "Change settings without asking because the student only needs it for a few minutes.",
    smarterResponse:
      "Ask permission before changing settings and use the device only for the approved purpose.",
    whyItWorks:
      "Shared devices affect more than one person. Asking permission prevents accidental privacy, safety, or rule problems.",
  },
  {
    title: "The School Device Shortcut",
    situation:
      "A classmate tells a student they know a way to get around a school device rule during class.",
    warningSigns:
      "The request involves avoiding school protections or using the device against school rules.",
    riskyResponse:
      "Try it because the classmate says everyone does it.",
    smarterResponse:
      "Do not try to bypass school settings. Use the device for school-approved work and ask a teacher if something is blocked by mistake.",
    whyItWorks:
      "School device rules are there to protect students, accounts, and learning. Students should solve access problems through trusted adults, not shortcuts.",
  },
];

const actionSteps = [
  "Use shared and school devices only for approved purposes.",
  "Do not save passwords on devices used by other people.",
  "Sign out of accounts before leaving a shared device.",
  "Do not open, read, change, or share someone else's account, document, message, or file.",
  "Do not change device settings, install apps, or add extensions without trusted permission.",
  "Ask a trusted adult when a shared or school device shows strange pop-ups, unknown files, open accounts, or confusing warnings.",
];

const reflectionQuestions = [
  "Why should students sign out after using a shared device?",
  "Why can saving passwords on shared devices be risky?",
  "What should a student do if someone else's account is left open?",
  "Why should school device settings and rules be respected?",
  "Who can students ask for help when a shared device feels confusing or unsafe?",
];

const skillCheck = [
  {
    question:
      "A browser asks to save a password on a classroom computer. What is the safer response?",
    choices: [
      "Save it so logging in is faster later",
      "Do not save it and sign out when finished",
      "Share the password with a friend",
    ],
    answer: "Choice B",
    explanation:
      "Shared devices should not store student passwords. Not saving the password and signing out helps protect the account.",
  },
  {
    question:
      "A student sees someone else's email open on a library computer. What should they do?",
    choices: [
      "Read it because it was already open",
      "Do not interact with it and tell a trusted adult or staff member",
      "Send a message from the account as a joke",
    ],
    answer: "Choice B",
    explanation:
      "Students should respect privacy and avoid using someone else's account. Trusted adult help is safer.",
  },
  {
    question:
      "A student borrows a family tablet and wants to change settings. What should they do first?",
    choices: [
      "Ask permission before changing anything",
      "Change the settings and change them back later",
      "Install a new app without asking",
    ],
    answer: "Choice A",
    explanation:
      "Shared devices belong to or affect other people. Students should ask before changing settings or installing anything.",
  },
  {
    question:
      "A classmate suggests getting around a school device rule. What is the safer choice?",
    choices: [
      "Try it once to see if it works",
      "Avoid bypassing rules and ask a teacher if there is a real access problem",
      "Show others how to do it",
    ],
    answer: "Choice B",
    explanation:
      "School device protections should be respected. Real access problems should be handled through teachers or trusted adults.",
  },
];

const checklist = [
  "I can explain what shared devices and school devices are.",
  "I can avoid saving passwords on devices used by other people.",
  "I can sign out after using shared or school accounts.",
  "I can respect other people's accounts, documents, messages, and files.",
  "I can avoid changing settings, installing apps, or adding extensions without permission.",
  "I know when to ask a trusted adult for help with shared or school device problems.",
];

export default function SharedDevicesAndSchoolDeviceSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Shared Devices and School Device Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Shared devices and school devices can help students learn, research,
          communicate, and complete assignments. This lesson teaches students to
          protect accounts, sign out, avoid saving passwords, respect other
          people's privacy, follow device rules, and ask for help when something
          feels confusing or unsafe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/bluetooth-airdrop-and-nearby-sharing"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 9
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety/review"
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
              Shared devices need extra care because the next user matters too.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student uses a classroom computer, library device,
              family tablet, or school Chromebook. If they stay signed in, save a
              password, change settings, or leave private information open, the
              next person might see or access something they should not.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Shared device safety starts with protecting accounts and respecting others.
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
              Do not save passwords, stay signed in, or change settings on shared devices without permission.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test school rules, use someone else's account, install unknown
              tools, change managed settings, or try to bypass protections. When
              a shared or school device feels confusing, students should pause
              and ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Shared and school devices should protect every user's privacy and safety.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Shared devices are used by more than one person. They might be in a
            classroom, library, family room, computer lab, or school cart. School
            devices may also have special rules, filters, apps, and settings that
            help protect students and support learning.
          </p>

          <p>
            Because shared devices can hold signs of what people typed, opened,
            saved, or signed into, students should be careful before using them.
            They can ask: Am I using the correct account? Did I save my password?
            Did I sign out? Am I changing something that affects other people?
          </p>

          <p>
            Students should never use another person's open account, read private
            messages or files, or change device settings without permission. A
            safer response is to sign out, avoid saving passwords, follow school
            rules, respect privacy, and ask a trusted adult when something looks
            wrong.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding shared and school device safety.
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
          Shared Device Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Shared devices can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sharedDeviceSituations.map((item) => (
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
            Shared device safety means noticing account, privacy, and setting risks.
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
          Shared devices should not leave private accounts or information exposed.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student saves a password, stays signed in, opens someone else's
              account, changes settings without permission, or ignores school
              device rules.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student uses the device for the approved task, avoids saving
              passwords, signs out, respects other accounts, follows school
              rules, and asks a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer shared device decisions using fake examples.
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
          Use these habits before, during, and after using a shared device.
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
          Before finishing Lesson 9.5, students should be able to say:
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
            Lesson 9.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 9.6 will review devices, networks, and Wi-Fi safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/bluetooth-airdrop-and-nearby-sharing"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 9
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety/review"
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