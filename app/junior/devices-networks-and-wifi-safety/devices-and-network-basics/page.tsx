import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what devices and networks are",
  "Understand how phones, laptops, tablets, apps, routers, and Wi-Fi work together",
  "Recognize why connected devices need safe habits",
  "Identify basic network warning signs students may notice at home, school, or public places",
  "Know when to ask a trusted adult before changing settings, joining networks, or sharing access",
];

const vocabulary = [
  {
    term: "Device",
    definition:
      "A tool that can store, send, receive, or process information, such as a phone, laptop, tablet, game console, smartwatch, or school computer.",
  },
  {
    term: "Network",
    definition:
      "A group of connected devices that can share information, internet access, printers, files, or online services.",
  },
  {
    term: "Wi-Fi",
    definition:
      "A wireless way for devices to connect to a network and often reach the internet without using a cable.",
  },
  {
    term: "Router",
    definition:
      "A device that helps connect home or school devices to a network and usually helps them reach the internet.",
  },
  {
    term: "Account Access",
    definition:
      "The ability to use an account, device, app, or service, usually protected by a password, code, or permission.",
  },
  {
    term: "Network Safety Habit",
    definition:
      "A careful action that helps protect devices and information, such as using trusted networks, asking before changing settings, and keeping access private.",
  },
];

const networkSituations = [
  {
    title: "Home Device Connection",
    explanation:
      "A student connects a laptop, phone, tablet, or game console to the home Wi-Fi network.",
    saferChoice:
      "Use the trusted home network and ask a trusted adult before sharing the Wi-Fi password or changing settings.",
  },
  {
    title: "School Network Use",
    explanation:
      "A student uses a school device or school Wi-Fi for classwork, research, assignments, or online learning tools.",
    saferChoice:
      "Follow school rules, use school-approved tools, and avoid changing settings or installing anything without permission.",
  },
  {
    title: "Public Network Question",
    explanation:
      "A student sees a free Wi-Fi network in a public place and wants to connect quickly.",
    saferChoice:
      "Pause and ask a trusted adult before joining. Avoid signing in to important accounts on unknown public networks.",
  },
  {
    title: "Shared Device Moment",
    explanation:
      "A student uses a shared family, classroom, library, or friend device to open a website or account.",
    saferChoice:
      "Do not save passwords on shared devices. Sign out when finished and ask for help if something looks unusual.",
  },
];

const warningSigns = [
  {
    title: "Unknown Network Name",
    text: "The Wi-Fi name looks unfamiliar, copied, misspelled, or too generic to know who controls it.",
  },
  {
    title: "Pressure to Connect",
    text: "A page, pop-up, or person says the student must connect to a network or change settings right away.",
  },
  {
    title: "Unexpected Sign-In Page",
    text: "A network or website asks for account details, school information, or personal information when the student did not expect it.",
  },
  {
    title: "Shared Password Request",
    text: "Someone asks for a Wi-Fi password, device password, login code, or account access that they do not need.",
  },
  {
    title: "Changed Device Behavior",
    text: "A device suddenly redirects pages, shows strange warnings, loses connection, or behaves differently after joining a network.",
  },
  {
    title: "Permission Confusion",
    text: "A device, app, or browser asks for access that does not match what the student is trying to do.",
  },
];

const scenarios = [
  {
    title: "The New Wi-Fi Name",
    situation:
      "A student is at a community center and sees a free Wi-Fi network with a name that sounds official, but they are not sure it belongs to the building.",
    warningSigns:
      "The network name is unfamiliar and the student cannot confirm who owns it.",
    riskyResponse:
      "Join the network immediately and sign in to personal accounts because it is free.",
    smarterResponse:
      "Pause and ask a trusted adult or staff member which network is official before connecting.",
    whyItWorks:
      "Students should not guess which network is safe. Confirming the official network reduces confusion and protects account access.",
  },
  {
    title: "The School Laptop Setting",
    situation:
      "A student is using a school laptop, and a classmate says changing a network setting will make the internet faster.",
    warningSigns:
      "The suggestion involves changing school device settings without permission.",
    riskyResponse:
      "Change the setting because a classmate said it might help.",
    smarterResponse:
      "Do not change the setting. Ask a teacher, technology staff member, or trusted adult for help.",
    whyItWorks:
      "School devices often have rules and protections. Students should not change settings without permission or trusted support.",
  },
  {
    title: "The Shared Tablet",
    situation:
      "A student uses a shared tablet to check a school account and sees an option to save the password for next time.",
    warningSigns:
      "The device is shared, so saving the password could let someone else access the account later.",
    riskyResponse:
      "Save the password to make signing in easier next time.",
    smarterResponse:
      "Do not save the password. Finish the work, sign out, and close the page when done.",
    whyItWorks:
      "Shared devices need extra care because other people may use them later. Signing out helps protect accounts.",
  },
  {
    title: "The Wi-Fi Password Request",
    situation:
      "Someone in a group chat asks a student to send the home Wi-Fi password because they want to use it later.",
    warningSigns:
      "The request asks for access to a network that belongs to the family or household.",
    riskyResponse:
      "Send the password in the chat so the person can connect.",
    smarterResponse:
      "Do not share the password in the chat. Ask a trusted adult before sharing any network access.",
    whyItWorks:
      "Wi-Fi access should be handled carefully. Students should not share household network passwords without permission.",
  },
];

const actionSteps = [
  "Use trusted home, school, or adult-approved networks when possible.",
  "Ask a trusted adult before joining an unfamiliar network.",
  "Do not share Wi-Fi passwords, device passwords, login codes, or account access without permission.",
  "Do not change network, router, school device, or security settings without trusted help.",
  "Sign out of accounts on shared devices when finished.",
  "Tell a trusted adult if a device behaves strangely after connecting to a network.",
];

const reflectionQuestions = [
  "What is a device?",
  "What is a network?",
  "Why should students be careful before joining unfamiliar Wi-Fi networks?",
  "Why should students avoid changing school device or network settings without permission?",
  "Who can students ask for help when a device or network situation feels confusing?",
];

const skillCheck = [
  {
    question:
      "A student sees an unfamiliar free Wi-Fi network in a public place. What is the safer response?",
    choices: [
      "Join it immediately and sign in to important accounts",
      "Pause and ask a trusted adult or staff member which network is official",
      "Share the network name with everyone and tell them to join",
    ],
    answer: "Choice B",
    explanation:
      "Students should confirm unfamiliar networks before connecting. Trusted adult or staff guidance is safer than guessing.",
  },
  {
    question:
      "A classmate says to change a school laptop network setting to make the internet faster. What should the student do?",
    choices: [
      "Change the setting quickly",
      "Ask a teacher, technology staff member, or trusted adult before changing anything",
      "Try random settings until something works",
    ],
    answer: "Choice B",
    explanation:
      "School devices and network settings should not be changed without permission or trusted support.",
  },
  {
    question:
      "A shared device asks whether to save a password. What is the safer choice?",
    choices: [
      "Save the password because it is faster",
      "Do not save the password and sign out when finished",
      "Let a friend use the account too",
    ],
    answer: "Choice B",
    explanation:
      "Shared devices may be used by other people later. Not saving passwords and signing out helps protect accounts.",
  },
  {
    question:
      "Someone asks for the home Wi-Fi password in a group chat. What is a safer response?",
    choices: [
      "Send the password to be helpful",
      "Do not share it in the chat and ask a trusted adult first",
      "Post the password publicly so everyone can use it",
    ],
    answer: "Choice B",
    explanation:
      "Wi-Fi passwords give access to a network. Students should not share them without permission from a trusted adult.",
  },
];

const checklist = [
  "I can explain what devices and networks are.",
  "I can describe how Wi-Fi helps devices connect.",
  "I can recognize why unfamiliar networks deserve caution.",
  "I can avoid changing device or network settings without permission.",
  "I can protect account access on shared devices.",
  "I know when to ask a trusted adult for help with device or network questions.",
];

export default function DevicesAndNetworkBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Devices and Network Basics
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Devices and networks help students learn, communicate, play games,
          complete schoolwork, and use online services. This lesson teaches
          students what devices and networks are, why connected technology needs
          careful habits, and when to ask for trusted help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 9
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety/home-wifi-and-router-safety"
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
              Every connected device is part of a bigger digital space.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student uses a phone at home, a school laptop in class,
              a shared tablet at a library, and Wi-Fi at a public place. Each
              situation can be useful, but each one also requires careful choices
              about access, settings, passwords, and trusted networks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Device and network safety starts with understanding the basics.
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
              Do not change network or device settings for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test networks, change router settings, change school device
              settings, guess passwords, share access, or join suspicious
              networks for practice. Ask a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Devices connect to networks so people can communicate and access online services.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A device is something students use to access digital information,
            such as a phone, laptop, tablet, game console, smartwatch, or school
            computer. A network is a group of connected devices. Wi-Fi is one
            common way devices connect wirelessly to a network and the internet.
          </p>

          <p>
            Networks are useful because they let students open websites, submit
            assignments, join learning tools, communicate, stream videos, print,
            and use apps. But because connected devices can send and receive
            information, students need safe habits around passwords, settings,
            public Wi-Fi, shared devices, and account access.
          </p>

          <p>
            Students do not need to solve network problems alone. A safer
            response is to use trusted networks, avoid changing settings without
            permission, protect passwords and login codes, sign out on shared
            devices, and ask a trusted adult when something feels confusing or
            unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding devices and networks.
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
          Device and Network Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Connected devices can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {networkSituations.map((item) => (
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
            Device and network safety means noticing warning signs before acting.
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
          Devices and networks should be used with permission and trusted help.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student joins unknown Wi-Fi, shares passwords, saves logins on
              shared devices, or changes network settings without permission.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student uses trusted networks, protects access, signs out on
              shared devices, avoids changing settings alone, and asks a trusted
              adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer device and network decisions using fake examples.
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
          Use these habits before connecting devices or changing settings.
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
          Before finishing Lesson 9.1, students should be able to say:
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
            Lesson 9.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 9.2 will explain home Wi-Fi and router safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 9
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety/home-wifi-and-router-safety"
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