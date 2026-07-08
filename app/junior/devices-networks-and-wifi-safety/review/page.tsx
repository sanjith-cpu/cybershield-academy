import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonRecap = [
  {
    number: "9.1",
    title: "Devices and Network Basics",
    text: "Devices are tools like laptops, tablets, phones, and school computers. Networks help devices connect to the internet, school tools, apps, printers, and other services.",
  },
  {
    number: "9.2",
    title: "Home Wi-Fi and Router Safety",
    text: "Home Wi-Fi safety means using strong passwords, keeping router settings private, updating devices when trusted adults approve, and not changing network settings without permission.",
  },
  {
    number: "9.3",
    title: "Public Wi-Fi Safety",
    text: "Public Wi-Fi can be useful, but students should avoid private actions, check with trusted adults, and be careful before signing in, shopping, sharing, or entering sensitive information.",
  },
  {
    number: "9.4",
    title: "Bluetooth, AirDrop, and Nearby Sharing",
    text: "Nearby sharing tools can send files or requests between close devices, so students should control who can send to them and reject unknown requests.",
  },
  {
    number: "9.5",
    title: "Shared Devices and School Device Safety",
    text: "Shared and school devices need careful habits, including signing out, protecting privacy, following school rules, and asking for help when warnings or account problems appear.",
  },
];

const reviewGoals = [
  "Explain what devices, networks, Wi-Fi, and routers do",
  "Recognize why home Wi-Fi passwords and router settings matter",
  "Make safer choices on public Wi-Fi",
  "Respond carefully to Bluetooth, AirDrop, and nearby sharing requests",
  "Protect accounts and privacy on shared or school devices",
  "Ask a trusted adult before changing settings or responding to device warnings",
];

const keyIdeas = [
  {
    title: "Connections Need Care",
    text: "When a device connects to Wi-Fi, Bluetooth, or another network, students should think about where the connection came from and whether it is trusted.",
  },
  {
    title: "Passwords Protect Access",
    text: "Wi-Fi passwords, device passcodes, and account passwords help keep private spaces from being used by the wrong people.",
  },
  {
    title: "Public Networks Need Extra Caution",
    text: "Public Wi-Fi is shared by many people, so students should avoid sensitive actions unless a trusted adult says it is safe.",
  },
  {
    title: "Nearby Sharing Should Be Controlled",
    text: "Unknown file requests, random AirDrop messages, and unexpected Bluetooth prompts should be rejected or shown to a trusted adult.",
  },
  {
    title: "Shared Devices Require Sign-Out Habits",
    text: "Students should not leave accounts open on shared computers, school laptops, library devices, or borrowed tablets.",
  },
  {
    title: "Permission Matters",
    text: "Students should not change router settings, device settings, school device settings, or network tools without trusted adult permission.",
  },
];

const reviewScenarios = [
  {
    title: "The Random Wi-Fi Network",
    situation:
      "A student is at a store and sees a free Wi-Fi network with a name that looks similar to the store name, but they are not sure it is official.",
    warningSigns:
      "The network name is unclear, and the student cannot confirm who owns it.",
    riskyResponse:
      "Connect right away and sign in to personal accounts because the network is free.",
    saferResponse:
      "Pause, avoid private actions, and ask a trusted adult before using the network.",
    lesson:
      "Students should be careful on public Wi-Fi and avoid sensitive actions on unclear networks.",
  },
  {
    title: "The Router Settings Page",
    situation:
      "A student finds a router settings page at home and wants to change options because an online video said it could make games faster.",
    warningSigns:
      "The student is about to change network settings without understanding the effect or having permission.",
    riskyResponse:
      "Change settings quickly and see what happens.",
    saferResponse:
      "Do not change router settings. Ask a parent, guardian, or trusted adult for help.",
    lesson:
      "Router and network settings can affect everyone in the home and should not be changed without permission.",
  },
  {
    title: "The Unknown AirDrop Request",
    situation:
      "A student receives an AirDrop or nearby sharing request from a device name they do not recognize.",
    warningSigns:
      "The request is unexpected, and the sender is unknown.",
    riskyResponse:
      "Accept the request to see what the file is.",
    saferResponse:
      "Reject the request, change sharing settings if needed, and tell a trusted adult if it keeps happening.",
    lesson:
      "Unknown nearby sharing requests should not be accepted just out of curiosity.",
  },
  {
    title: "The Shared School Computer",
    situation:
      "A student finishes work on a school computer and realizes their email or class account is still open.",
    warningSigns:
      "Other people may use the same device after the student leaves.",
    riskyResponse:
      "Walk away because the next student probably will not look.",
    saferResponse:
      "Sign out, close the browser if allowed, and ask a teacher for help if the account will not sign out.",
    lesson:
      "Shared devices require careful sign-out habits to protect privacy and accounts.",
  },
];

const responsibleActions = [
  "Pause before connecting to unfamiliar Wi-Fi networks.",
  "Do not change router, Wi-Fi, or school device settings without permission.",
  "Avoid entering private information on public networks unless a trusted adult says it is safe.",
  "Reject unknown Bluetooth, AirDrop, or nearby sharing requests.",
  "Sign out of accounts on shared, school, library, or borrowed devices.",
  "Ask a trusted adult when a device, network, or account warning appears.",
];

const reflectionQuestions = [
  "Why do devices and networks need safe habits?",
  "Why should students avoid changing router settings without permission?",
  "What makes public Wi-Fi different from a trusted home or school network?",
  "Why should unknown nearby sharing requests be rejected?",
  "What should students do before leaving a shared or school device?",
];

const finalCheck = [
  {
    question:
      "A student sees a free public Wi-Fi network but cannot confirm who owns it. What is the safer response?",
    choices: [
      "Connect and enter private account information right away",
      "Pause, avoid sensitive actions, and ask a trusted adult before using it",
      "Share the network name with everyone as safe",
    ],
    answer: "Choice B",
    explanation:
      "Unclear public Wi-Fi networks need extra caution. Students should avoid sensitive actions and ask for trusted help.",
  },
  {
    question:
      "A student finds home router settings and wants to change them after watching a video. What should they do?",
    choices: [
      "Change the settings to see what happens",
      "Guess the best option and save it",
      "Do not change settings without a trusted adult's permission",
    ],
    answer: "Choice C",
    explanation:
      "Router settings can affect the whole home network. Students should not change them without permission and help.",
  },
  {
    question:
      "A phone receives a nearby sharing request from an unknown device. What is the safer choice?",
    choices: [
      "Reject the request",
      "Accept it to check the file",
      "Forward it to a friend",
    ],
    answer: "Choice A",
    explanation:
      "Unknown nearby sharing requests can be risky or unwanted. Rejecting the request is safer.",
  },
  {
    question:
      "What should a student do after using a shared school computer?",
    choices: [
      "Leave accounts open so work is easier next time",
      "Sign out of accounts and ask for help if something will not close",
      "Save passwords in the browser for convenience",
    ],
    answer: "Choice B",
    explanation:
      "Signing out helps protect accounts and privacy on devices that other people may use.",
  },
  {
    question:
      "What is a strong Module 9 habit?",
    choices: [
      "Connect to any network that looks useful",
      "Accept unknown file requests to see what they contain",
      "Ask a trusted adult before changing settings or responding to confusing device warnings",
    ],
    answer: "Choice C",
    explanation:
      "Students should get trusted help before making changes or responding to device and network warnings.",
  },
];

const checklist = [
  "I can explain what devices, networks, Wi-Fi, and routers do.",
  "I can describe why Wi-Fi passwords and router settings matter.",
  "I can make safer choices on public Wi-Fi.",
  "I can reject unknown Bluetooth, AirDrop, or nearby sharing requests.",
  "I can protect my privacy on shared and school devices.",
  "I know when to ask a trusted adult for device or network help.",
];

export default function DevicesNetworksAndWifiSafetyReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Devices, Networks, and Wi-Fi Safety Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This review helps students practice the main ideas from Module 9:
          device basics, networks, home Wi-Fi, router safety, public Wi-Fi,
          Bluetooth, AirDrop, nearby sharing, shared devices, and school device
          safety. The goal is to build safer everyday habits, not to test or
          change real networks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/shared-devices-and-school-device-safety"
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
            href="/junior/cyber-threats-and-defense-basics"
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
          <p className="text-cyan-300 font-semibold mb-3">Module Big Question</p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students use devices and networks more safely at home,
              school, and public places?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Students can use devices and networks more safely by pausing
              before connecting, protecting passwords and accounts, avoiding
              unknown sharing requests, signing out of shared devices, and
              asking trusted adults before changing settings or responding to
              confusing warnings.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this review, students should be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewGoals.map((goal) => (
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
              Do not test, change, or break into networks for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              try to access networks, routers, devices, accounts, or settings
              that they do not own or have permission to use. Students should
              not accept unknown file requests or change device settings for
              practice. If something feels confusing, urgent, or unsafe, they
              should ask a trusted adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Lesson Recap</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review what each Module 9 lesson covered.
        </h2>

        <div className="space-y-6">
          {lessonRecap.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-cyan-300 font-semibold mb-2">
                Lesson {lesson.number}
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {lesson.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{lesson.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Ideas</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            These ideas help students use devices and networks more safely.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyIdeas.map((idea) => (
              <div
                key={idea.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {idea.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{idea.text}</p>
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
          Device and network safety starts before connecting or changing settings.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student connects to unknown networks, changes settings without
              permission, accepts random sharing requests, or leaves accounts
              open on shared devices.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, uses trusted connections, protects accounts,
              rejects unknown requests, signs out of shared devices, and asks a
              trusted adult before making device or network changes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer device and network decisions using fake examples.
          </h2>

          <div className="space-y-6">
            {reviewScenarios.map((scenario) => (
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
                      Safer Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.saferResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Review Lesson
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Responsible Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these steps when working with devices, networks, and Wi-Fi.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {responsibleActions.map((step) => (
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
            <p className="text-cyan-300 font-semibold mb-3">
              Final Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {finalCheck.map((item, index) => (
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
          Before finishing Module 9, students should be able to say:
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
            Module 9 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Module 10 will teach students about common cyber threats,
            safer defense habits, updates, backups, basic protection, and what
            cyber defenders do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/shared-devices-and-school-device-safety"
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
              href="/junior/cyber-threats-and-defense-basics"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}