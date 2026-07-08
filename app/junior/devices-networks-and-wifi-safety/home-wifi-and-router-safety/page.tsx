import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what home Wi-Fi and routers do",
  "Understand why home networks should be protected",
  "Recognize safe habits for Wi-Fi names, passwords, guests, and connected devices",
  "Identify warning signs that a home network situation may need trusted adult help",
  "Know not to change router settings or share access without permission",
];

const vocabulary = [
  {
    term: "Home Wi-Fi",
    definition:
      "A wireless network used at home that lets approved devices connect to the internet and other trusted services.",
  },
  {
    term: "Router",
    definition:
      "A device that helps home devices connect to the network and usually helps them reach the internet.",
  },
  {
    term: "Wi-Fi Password",
    definition:
      "A password used to join a Wi-Fi network. It should be shared only with permission from a trusted adult.",
  },
  {
    term: "Guest Network",
    definition:
      "A separate Wi-Fi option that some homes use for visitors so the main household network stays more private.",
  },
  {
    term: "Connected Device",
    definition:
      "Any phone, laptop, tablet, smart TV, game console, speaker, camera, or other device that uses the home network.",
  },
  {
    term: "Router Settings",
    definition:
      "Controls for a home network. Students should not change these settings without a trusted adult.",
  },
];

const wifiSituations = [
  {
    title: "Family Wi-Fi Password",
    explanation:
      "A friend asks a student to send the home Wi-Fi password through a message so they can connect later.",
    saferChoice:
      "Do not send the password. Ask a trusted adult before sharing access to the home network.",
  },
  {
    title: "New Smart Device",
    explanation:
      "A student wants to connect a new speaker, camera, TV, game console, or other smart device to the home Wi-Fi.",
    saferChoice:
      "Ask a trusted adult before connecting the device and make sure it belongs in the home network.",
  },
  {
    title: "Router Setting Question",
    explanation:
      "A student sees online advice saying they should change router settings to make games, apps, or videos work better.",
    saferChoice:
      "Do not change settings alone. Ask a trusted adult or the person responsible for the home network.",
  },
  {
    title: "Unknown Connected Device",
    explanation:
      "A family notices a device name connected to the home network that nobody recognizes.",
    saferChoice:
      "Do not guess or change settings alone. Show a trusted adult so they can check safely.",
  },
];

const warningSigns = [
  {
    title: "Password Sharing Pressure",
    text: "Someone asks for the home Wi-Fi password in a chat, post, game lobby, or message without clear permission.",
  },
  {
    title: "Unknown Device",
    text: "A device name appears on the home network that the family does not recognize or remember adding.",
  },
  {
    title: "Setting Change Advice",
    text: "A video, website, classmate, or stranger says to change router settings without explaining the risk or asking an adult.",
  },
  {
    title: "Confusing Router Message",
    text: "A router app, browser page, or device alert asks for passwords, setup choices, or access changes the student does not understand.",
  },
  {
    title: "Too Many Shared Devices",
    text: "Many visitors, friends, or old devices have access, but nobody is sure who still needs the network.",
  },
  {
    title: "Unexpected Network Problems",
    text: "The home Wi-Fi suddenly acts differently, devices disconnect, pages redirect, or warnings appear after a change.",
  },
];

const scenarios = [
  {
    title: "The Password Text",
    situation:
      "A friend messages a student and asks for the family Wi-Fi password so they can connect when they come over later.",
    warningSigns:
      "The request asks for access to a household network through a message.",
    riskyResponse:
      "Send the password right away because the friend might need it later.",
    smarterResponse:
      "Do not send the password. Ask a trusted adult whether it is okay to share Wi-Fi access.",
    whyItWorks:
      "A home Wi-Fi password controls access to the family network. Students should not share it without permission.",
  },
  {
    title: "The New Game Console",
    situation:
      "A student wants to connect a new game console to the home Wi-Fi and it asks for network information.",
    warningSigns:
      "The device is asking to join the home network and may need setup choices.",
    riskyResponse: "Guess the settings and connect it without telling anyone.",
    smarterResponse:
      "Ask a trusted adult for help connecting it to the correct network safely.",
    whyItWorks:
      "New devices should be added with permission so the home network stays organized and trusted.",
  },
  {
    title: "The Speed Fix Video",
    situation:
      "A video says changing router settings will make games faster and tells viewers to open the router settings page.",
    warningSigns:
      "The video encourages changing important network settings without trusted help.",
    riskyResponse: "Follow the video and change settings to see what happens.",
    smarterResponse:
      "Do not change router settings alone. Show the video to a trusted adult and ask if the advice is safe.",
    whyItWorks:
      "Router settings can affect the whole household network. Students should not experiment with them alone.",
  },
  {
    title: "The Unknown Device Name",
    situation:
      "A student sees a device name connected to the home network that nobody in the family recognizes.",
    warningSigns:
      "The connected device is unknown and may need an adult to check it carefully.",
    riskyResponse:
      "Start changing settings randomly to remove it or fix the network.",
    smarterResponse:
      "Tell a trusted adult and let them check the router or network app safely.",
    whyItWorks:
      "Unknown devices should be handled carefully. Trusted adults can check access without students guessing or making unsafe changes.",
  },
];

const actionSteps = [
  "Treat the home Wi-Fi password like private access information.",
  "Ask a trusted adult before sharing Wi-Fi access with friends, visitors, or group chats.",
  "Ask before connecting new smart devices, game consoles, speakers, cameras, or other equipment.",
  "Do not change router settings, network names, passwords, or security options alone.",
  "Tell a trusted adult if a connected device looks unfamiliar or a router message seems confusing.",
  "Use the home network respectfully and follow family rules for devices and internet access.",
];

const reflectionQuestions = [
  "What does a home router help devices do?",
  "Why should students be careful with a home Wi-Fi password?",
  "Why should students ask before connecting a new device to the home network?",
  "Why is it risky to change router settings without trusted help?",
  "Who should students ask when a home Wi-Fi or router situation feels confusing?",
];

const skillCheck = [
  {
    question:
      "A friend asks for the home Wi-Fi password in a message. What is the safer response?",
    choices: [
      "Send it quickly so the friend can connect",
      "Do not send it and ask a trusted adult first",
      "Post it in the group chat so everyone has it",
    ],
    answer: "Choice B",
    explanation:
      "A home Wi-Fi password gives access to the household network. Students should ask a trusted adult before sharing it.",
  },
  {
    question:
      "A video says to change router settings to make games faster. What should a student do?",
    choices: [
      "Follow the video alone",
      "Do not change settings and ask a trusted adult for help",
      "Try random settings until the game works",
    ],
    answer: "Choice B",
    explanation:
      "Router settings can affect the whole home network. Students should not change them without trusted support.",
  },
  {
    question:
      "A student wants to connect a new smart device to the home Wi-Fi. What is a safer habit?",
    choices: [
      "Ask a trusted adult before connecting it",
      "Connect every device without checking",
      "Use any random network nearby",
    ],
    answer: "Choice A",
    explanation:
      "New devices should be added with permission so the household knows what is connected to the network.",
  },
  {
    question:
      "A family sees an unknown device connected to the home network. What should the student do?",
    choices: [
      "Ignore it forever",
      "Start changing router settings alone",
      "Tell a trusted adult so they can check safely",
    ],
    answer: "Choice C",
    explanation:
      "Unknown devices should be handled carefully with adult help, not random setting changes.",
  },
];

const checklist = [
  "I can explain what home Wi-Fi and routers do.",
  "I can treat a Wi-Fi password like private access information.",
  "I can ask before sharing home Wi-Fi access.",
  "I can ask before connecting new devices to the home network.",
  "I can avoid changing router settings without trusted help.",
  "I know when to ask a trusted adult about home Wi-Fi or router concerns.",
];

export default function HomeWifiAndRouterSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Home Wi-Fi and Router Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Home Wi-Fi helps students connect devices for school, games, videos,
          and communication. This lesson teaches students how to protect home
          network access, avoid sharing Wi-Fi passwords carelessly, and ask for
          trusted help before changing router settings or connecting new
          devices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/devices-and-network-basics"
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
            href="/junior/devices-networks-and-wifi-safety/public-wifi-safety"
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
              Home Wi-Fi is useful, but access should be handled carefully.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student connects a laptop, phone, game console, smart
              TV, and speaker to home Wi-Fi. The network becomes part of daily
              life, so students need safe habits for passwords, connected
              devices, visitors, router messages, and trusted adult support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Home network safety starts with protecting access and asking for help.
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
              Do not change router settings or share Wi-Fi access for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test routers, guess Wi-Fi passwords, change home network settings,
              disconnect devices, share access, or follow random router advice
              for practice. Ask a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A home router helps trusted devices connect, but students should not
          manage it alone.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A home Wi-Fi network lets devices connect wirelessly to the internet
            and sometimes to other devices in the home. A router helps organize
            that connection. Phones, laptops, tablets, game consoles, smart TVs,
            speakers, and other devices may all use the same network.
          </p>

          <p>
            Because a home network supports many devices and accounts, access
            should be protected. Students should be careful with Wi-Fi
            passwords, avoid sharing network access in chats, and ask before
            connecting new devices. Even helpful-looking settings can affect the
            whole household.
          </p>

          <p>
            Students do not need to fix home Wi-Fi or router problems alone. A
            safer response is to pause, avoid guessing, avoid changing settings,
            and tell a trusted adult when a router message, device list,
            password request, or network problem feels confusing.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding home Wi-Fi and routers.
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
          Home Wi-Fi Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Home networks can create different kinds of access decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {wifiSituations.map((item) => (
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
            Home Wi-Fi safety means noticing warning signs before acting.
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
          Home network access should be protected with permission and trusted
          help.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student shares the Wi-Fi password, connects unknown devices,
              follows random router advice, or changes home network settings
              without permission.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student protects Wi-Fi access, asks before connecting new
              devices, avoids changing router settings alone, and tells a
              trusted adult about confusing network issues.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer home Wi-Fi decisions using fake examples.
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
          Use these habits before sharing Wi-Fi access or changing home network
          settings.
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
          Before finishing Lesson 9.2, students should be able to say:
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
            Lesson 9.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 9.3 will explain safer choices when using public Wi-Fi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/devices-and-network-basics"
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
              href="/junior/devices-networks-and-wifi-safety/public-wifi-safety"
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