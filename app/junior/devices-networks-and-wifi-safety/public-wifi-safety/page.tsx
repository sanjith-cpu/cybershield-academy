import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what public Wi-Fi means",
  "Understand why public networks can be less private than home or school networks",
  "Recognize risky signs before connecting to a public network",
  "Practice safer choices before signing in, sharing, or sending information",
  "Know when to ask a trusted adult before using unfamiliar Wi-Fi",
];

const vocabulary = [
  {
    term: "Public Wi-Fi",
    definition:
      "A wireless network available in a shared place, such as a library, airport, store, restaurant, hotel, or community space.",
  },
  {
    term: "Network Name",
    definition:
      "The name shown when a device searches for nearby Wi-Fi networks. Students should make sure it matches the trusted location before connecting.",
  },
  {
    term: "Sign-In Page",
    definition:
      "A page that may appear before using a public network. It might ask users to accept rules, create an account, or enter information.",
  },
  {
    term: "Private Information",
    definition:
      "Information that should be protected, such as passwords, account details, school login information, personal messages, or payment details.",
  },
  {
    term: "File Sharing",
    definition:
      "A setting or feature that can allow devices to share files or discover each other on a network.",
  },
  {
    term: "Trusted Network",
    definition:
      "A network that a student is allowed to use and that has been confirmed by a trusted adult, school, family, or official location.",
  },
];

const publicWifiSituations = [
  {
    title: "Library or School Guest Wi-Fi",
    explanation:
      "A student wants to connect to a guest network while studying or using a school-approved device.",
    saferChoice:
      "Use the official network name provided by the school, library, teacher, or trusted adult before connecting.",
  },
  {
    title: "Cafe or Store Wi-Fi",
    explanation:
      "A student sees several similar network names while waiting in a public place.",
    saferChoice:
      "Confirm the correct network with a trusted adult or staff member and avoid connecting to random look-alike names.",
  },
  {
    title: "Public Sign-In Page",
    explanation:
      "A public Wi-Fi page asks for personal information, an account login, or details that seem unnecessary.",
    saferChoice:
      "Do not enter private information unless a trusted adult confirms the page is expected and appropriate.",
  },
  {
    title: "Sensitive Account Use",
    explanation:
      "A student wants to check an important account while connected to unfamiliar public Wi-Fi.",
    saferChoice:
      "Avoid signing in to sensitive accounts on unfamiliar public Wi-Fi when possible and ask a trusted adult for safer options.",
  },
];

const warningSigns = [
  {
    title: "Look-Alike Network Name",
    text: "The network name looks similar to a real place but has extra words, misspellings, symbols, or numbers.",
  },
  {
    title: "No Trusted Confirmation",
    text: "The student does not know who owns the network or whether they are allowed to use it.",
  },
  {
    title: "Too Much Information",
    text: "The sign-in page asks for personal details that do not match basic Wi-Fi access.",
  },
  {
    title: "Pressure to Install",
    text: "The network page says the student must download a file, app, certificate, extension, or tool before browsing.",
  },
  {
    title: "Sensitive Tasks",
    text: "The student is about to enter passwords, payment information, private school details, or personal account information.",
  },
  {
    title: "Unexpected Device Sharing",
    text: "The device seems discoverable to others or shows sharing options that the student did not mean to use.",
  },
];

const scenarios = [
  {
    title: "The Airport Wi-Fi List",
    situation:
      "A student is traveling with family and sees several Wi-Fi names that look like they belong to the airport.",
    warningSigns:
      "There are multiple similar network names, and the student is not sure which one is official.",
    riskyResponse:
      "Connect to the strongest-looking network without checking because it loads quickly.",
    smarterResponse:
      "Ask a trusted adult to confirm the official network name before connecting.",
    whyItWorks:
      "Public places can have many nearby networks. Confirming the correct network helps students avoid random or confusing options.",
  },
  {
    title: "The Cafe Sign-In Page",
    situation:
      "A student connects to cafe Wi-Fi, and the sign-in page asks for their full name, school email, password, and birthday.",
    warningSigns:
      "The page asks for private information that does not seem necessary for basic Wi-Fi access.",
    riskyResponse:
      "Enter the information because the student wants to get online quickly.",
    smarterResponse:
      "Stop, do not enter the information, and ask a trusted adult whether the page is safe or necessary.",
    whyItWorks:
      "Students should not give private information to unfamiliar sign-in pages without trusted help.",
  },
  {
    title: "The Download Requirement",
    situation:
      "A public Wi-Fi page says the student must install a special tool before using the internet.",
    warningSigns:
      "The page pushes an unknown download before allowing access.",
    riskyResponse:
      "Download the tool because the page says it is required.",
    smarterResponse:
      "Do not download it. Ask a trusted adult for help and use official or approved network instructions only.",
    whyItWorks:
      "Unknown downloads can be risky. Students should not install files or tools just because a public page asks them to.",
  },
  {
    title: "The Important Account Check",
    situation:
      "A student is on public Wi-Fi and wants to sign in to an important account to check private information.",
    warningSigns:
      "The student is using an unfamiliar shared network for a sensitive account.",
    riskyResponse:
      "Sign in quickly and ignore whether the network is trusted.",
    smarterResponse:
      "Wait until using a trusted network or ask a trusted adult for a safer option.",
    whyItWorks:
      "Public Wi-Fi is not always the best place for private tasks. Slowing down helps protect account information.",
  },
];

const actionSteps = [
  "Ask a trusted adult before connecting to unfamiliar public Wi-Fi.",
  "Confirm the official network name before joining.",
  "Avoid entering private information on unexpected Wi-Fi sign-in pages.",
  "Do not download files, apps, certificates, or tools from public Wi-Fi pages without trusted help.",
  "Avoid sensitive account activity on unfamiliar public networks when possible.",
  "Turn off sharing or discoverable features if a trusted adult or school policy tells you to do so.",
];

const reflectionQuestions = [
  "What does public Wi-Fi mean?",
  "Why should students confirm a public network before joining?",
  "Why can look-alike network names be confusing?",
  "Why should students be careful with Wi-Fi sign-in pages?",
  "Who can students ask for help before using unfamiliar Wi-Fi?",
];

const skillCheck = [
  {
    question:
      "A student sees three similar Wi-Fi names at a public place. What is the safer response?",
    choices: [
      "Choose the one with the strongest signal",
      "Ask a trusted adult or staff member to confirm the official network",
      "Connect to all of them until one works",
    ],
    answer: "Choice B",
    explanation:
      "Students should confirm the official network name before connecting to public Wi-Fi.",
  },
  {
    question:
      "A public Wi-Fi sign-in page asks for a school password and birthday. What is the warning sign?",
    choices: [
      "It asks for private information that may not be needed",
      "It has a sign-in page",
      "It is in a public place",
    ],
    answer: "Choice A",
    explanation:
      "Students should be careful when unfamiliar pages ask for private information. Trusted adult help is safer.",
  },
  {
    question:
      "A Wi-Fi page says a student must download a tool before browsing. What should the student do?",
    choices: [
      "Download it immediately",
      "Do not download it and ask a trusted adult for help",
      "Share the download with friends",
    ],
    answer: "Choice B",
    explanation:
      "Unknown downloads from public Wi-Fi pages can be risky. Students should not install them without trusted help.",
  },
  {
    question:
      "What is a safer habit when using unfamiliar public Wi-Fi?",
    choices: [
      "Do sensitive account tasks quickly before anyone notices",
      "Avoid sensitive tasks when possible and use trusted help",
      "Ignore the network name as long as the internet works",
    ],
    answer: "Choice B",
    explanation:
      "Public Wi-Fi may be less private than trusted home or school networks, so students should be careful with sensitive tasks.",
  },
];

const checklist = [
  "I can explain what public Wi-Fi means.",
  "I can recognize why public Wi-Fi needs extra caution.",
  "I can check for look-alike network names.",
  "I can avoid entering private information into unfamiliar Wi-Fi pages.",
  "I can avoid unknown downloads from public Wi-Fi pages.",
  "I know when to ask a trusted adult before connecting.",
];

export default function PublicWifiSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Public Wi-Fi Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Public Wi-Fi can be helpful when students are away from home, but it
          can also be less private and more confusing than trusted networks.
          This lesson teaches students to confirm network names, avoid risky
          sign-in pages, and ask for help before using unfamiliar Wi-Fi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/home-wifi-and-router-safety"
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
            href="/junior/devices-networks-and-wifi-safety/bluetooth-airdrop-and-nearby-sharing"
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
              Public Wi-Fi can be useful, but students should not connect blindly.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student is at a library, airport, hotel, or cafe and
              wants to connect quickly. Several Wi-Fi names appear, and one page
              asks for information or a download. Public Wi-Fi safety helps the
              student slow down and make a safer choice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Public Wi-Fi safety starts before connecting.
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
              Do not test public networks or investigate suspicious Wi-Fi.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test public networks, inspect other devices, try to access network
              settings, download unknown tools, or enter private information for
              practice. When Wi-Fi feels suspicious, ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Public Wi-Fi is shared, so students should use extra caution.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Public Wi-Fi is a network that many people may use in the same
            place. It can be helpful for schoolwork, travel, and basic browsing,
            but students should remember that it is not always as familiar as a
            home or school network.
          </p>

          <p>
            Before connecting, students should ask simple questions. Is this the
            official network name? Did a trusted adult or staff member confirm
            it? Is the sign-in page asking for information that makes sense? Is
            the page pressuring me to install something or share private details?
          </p>

          <p>
            Students do not need to solve Wi-Fi concerns alone. A safer response
            is to pause, avoid risky downloads or sensitive logins, use trusted
            networks when possible, and ask a trusted adult before continuing.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding public Wi-Fi safety.
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
          Public Wi-Fi Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Public networks can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {publicWifiSituations.map((item) => (
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
            Public Wi-Fi safety means checking warning signs before connecting or signing in.
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
          Public Wi-Fi should not pressure students into private actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student connects to a random network, enters private
              information, downloads an unknown tool, or signs in to sensitive
              accounts without checking first.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student confirms the official network, avoids suspicious
              sign-in pages and downloads, limits sensitive tasks, and asks a
              trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer public Wi-Fi decisions using fake examples.
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
          Use these habits before trusting public Wi-Fi.
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
          Before finishing Lesson 9.3, students should be able to say:
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
            Lesson 9.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 9.4 will explain Bluetooth, AirDrop, and nearby
            sharing safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/home-wifi-and-router-safety"
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
              href="/junior/devices-networks-and-wifi-safety/bluetooth-airdrop-and-nearby-sharing"
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