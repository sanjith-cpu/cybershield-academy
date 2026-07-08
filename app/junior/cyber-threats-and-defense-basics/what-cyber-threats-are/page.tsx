import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what cyber threats are",
  "Understand that threats can involve people, devices, accounts, messages, apps, files, or websites",
  "Recognize common threat categories without testing them",
  "Practice safer responses when something online feels suspicious, urgent, or unsafe",
  "Know when to ask a trusted adult before clicking, downloading, replying, changing settings, or sharing information",
];

const vocabulary = [
  {
    term: "Cyber Threat",
    definition:
      "A possible danger to a device, account, network, data, privacy, money, safety, or reputation in a digital space.",
  },
  {
    term: "Risk",
    definition:
      "The chance that something harmful could happen if a student takes an unsafe action or ignores warning signs.",
  },
  {
    term: "Defender",
    definition:
      "A person who helps reduce cyber risk by using safe habits, reporting concerns, protecting systems, and helping others make careful choices.",
  },
  {
    term: "Malware",
    definition:
      "Harmful software that can cause problems for devices, accounts, files, or systems. Students should not download or test suspicious files.",
  },
  {
    term: "Social Engineering",
    definition:
      "A trick that pressures or manipulates people into clicking, sharing, replying, downloading, paying, or giving access.",
  },
  {
    term: "Defense Habit",
    definition:
      "A safe action that lowers risk, such as pausing, checking the source, using updates, protecting passwords, and asking trusted adults for help.",
  },
];

const threatSituations = [
  {
    title: "Suspicious Message",
    explanation:
      "A student receives a message that claims something urgent happened and asks them to click a link or reply with private information.",
    saferChoice:
      "Pause, do not click or reply, and check with a trusted adult or the official source.",
  },
  {
    title: "Unknown File or App",
    explanation:
      "A website, message, or classmate suggests downloading a file, game tool, extension, or app from an unfamiliar place.",
    saferChoice:
      "Do not download it. Use official sources and ask a trusted adult before installing anything.",
  },
  {
    title: "Account Access Request",
    explanation:
      "Someone asks for a password, login code, recovery code, or permission to use a student account.",
    saferChoice:
      "Keep account access private and ask a trusted adult for help if someone pressures for it.",
  },
  {
    title: "Device Warning or Problem",
    explanation:
      "A device shows a warning, starts acting strangely, or asks for permission that does not match what the student is doing.",
    saferChoice:
      "Stop interacting with the suspicious page or request and show a trusted adult what happened.",
  },
];

const warningSigns = [
  {
    title: "Urgent Pressure",
    text: "A message or page says the student must act immediately, or something bad will happen.",
  },
  {
    title: "Private Information Request",
    text: "Someone asks for passwords, login codes, personal information, school information, payment information, or account access.",
  },
  {
    title: "Unknown Download",
    text: "A file, app, extension, update, or tool comes from an unfamiliar source or random message.",
  },
  {
    title: "Too Good to Be True",
    text: "A post or message promises free rewards, game upgrades, gift cards, followers, prizes, or special access for almost no effort.",
  },
  {
    title: "Unusual Account Behavior",
    text: "An account sends messages the student did not write, has unexpected login alerts, or shows changes the student did not make.",
  },
  {
    title: "Confusing Permission Request",
    text: "A website, app, or device asks for access that does not match what the student is trying to do.",
  },
];

const scenarios = [
  {
    title: "The Urgent Account Message",
    situation:
      "A student gets a message saying their account will be locked unless they click a link and sign in right away.",
    warningSigns:
      "The message creates urgency and asks the student to click and sign in through a link.",
    riskyResponse:
      "Click the link and type the password quickly because the message sounds serious.",
    smarterResponse:
      "Do not click the link. Check the account through the official app or website with help from a trusted adult.",
    whyItWorks:
      "Threats often use pressure to rush people. Going through the official source and asking for help is safer than trusting a random link.",
  },
  {
    title: "The Free Game Tool",
    situation:
      "A website claims a student can unlock special game features by downloading a free tool from the page.",
    warningSigns:
      "The site offers something exciting and pushes an unknown download.",
    riskyResponse:
      "Download the tool because it might make the game better.",
    smarterResponse:
      "Do not download it. Use official game settings, official stores, or trusted adult guidance.",
    whyItWorks:
      "Unknown files and apps can create risk. Students should use official sources and avoid testing downloads.",
  },
  {
    title: "The Login Code Request",
    situation:
      "Someone says they need a student’s login code to help fix an account problem.",
    warningSigns:
      "The request asks for account access that should stay private.",
    riskyResponse:
      "Send the code because the person says they are helping.",
    smarterResponse:
      "Do not share the code. Tell a trusted adult and use official account recovery steps with help.",
    whyItWorks:
      "Login codes can protect accounts. Sharing them can let someone else get access, so students should keep them private.",
  },
  {
    title: "The Strange Device Warning",
    situation:
      "A page says the student’s device has a serious problem and shows buttons that say fix, scan, or allow.",
    warningSigns:
      "The page uses fear and asks the student to click buttons or allow access.",
    riskyResponse:
      "Click the button because the warning looks scary.",
    smarterResponse:
      "Do not click the warning. Stop interacting with the page and show a trusted adult.",
    whyItWorks:
      "Scary warnings can pressure students into unsafe actions. Trusted adult help is safer than clicking through the page.",
  },
];

const actionSteps = [
  "Pause when a message, page, app, file, or request feels urgent or strange.",
  "Ask: Who is asking, what do they want, and does this request make sense?",
  "Do not click suspicious links or download unknown files, apps, tools, or extensions.",
  "Never share passwords, login codes, recovery codes, or private account access.",
  "Use official apps, official websites, school-approved tools, and trusted adult guidance.",
  "Tell a trusted adult when an account, device, message, or website feels unsafe or confusing.",
];

const reflectionQuestions = [
  "What is a cyber threat?",
  "Why do cyber threats often use urgency or pressure?",
  "Why should students avoid unknown downloads?",
  "Why should login codes and passwords stay private?",
  "Who can students ask for help when a threat warning sign appears?",
];

const skillCheck = [
  {
    question:
      "A message says a student’s account will be locked unless they click a link and sign in immediately. What is the safer response?",
    choices: [
      "Click the link and sign in quickly",
      "Do not click the link; check through the official source with trusted help",
      "Forward the link to classmates",
    ],
    answer: "Choice B",
    explanation:
      "Urgent messages can pressure students into unsafe actions. Official sources and trusted adult help are safer.",
  },
  {
    question:
      "A website offers a free game tool that must be downloaded from an unfamiliar page. What is the warning sign?",
    choices: [
      "It pushes an unknown download",
      "It mentions a game",
      "It has a title on the page",
    ],
    answer: "Choice A",
    explanation:
      "Unknown downloads can create risk. Students should use official sources and ask a trusted adult before installing anything.",
  },
  {
    question:
      "Someone asks for a student’s login code to help with an account problem. What should the student do?",
    choices: [
      "Send the code because it sounds helpful",
      "Keep the code private and ask a trusted adult for help",
      "Post the code in a group chat",
    ],
    answer: "Choice B",
    explanation:
      "Login codes protect accounts. Students should not share them, even when someone claims to be helping.",
  },
  {
    question:
      "What is a good cyber defense habit for students?",
    choices: [
      "Pause, check the source, and ask for help when unsure",
      "Click quickly before a warning disappears",
      "Test suspicious files to see what happens",
    ],
    answer: "Choice A",
    explanation:
      "Good defense habits focus on slowing down, checking sources, avoiding unsafe testing, and asking trusted adults for help.",
  },
];

const checklist = [
  "I can explain what cyber threats are.",
  "I can recognize that threats can involve messages, websites, files, apps, devices, accounts, or people.",
  "I can identify warning signs like urgency, unknown downloads, and private information requests.",
  "I can avoid clicking, downloading, replying, or sharing access when something feels suspicious.",
  "I can use official sources and trusted adult help instead of guessing.",
  "I know cyber defense is about safe habits, not unsafe testing.",
];

export default function WhatCyberThreatsArePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10 • Lesson 10.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Cyber Threats Are
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Cyber threats are possible dangers that can affect devices, accounts,
          privacy, data, money, safety, or reputation. This lesson helps
          students recognize threat warning signs and respond safely without
          testing suspicious links, files, apps, or websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 10
          </Link>

          <Link
            href="/junior/cyber-threats-and-defense-basics/malware-viruses-and-ransomware-basics"
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
              Cyber threats are not always obvious at first.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a message, download, pop-up, login request,
              or account warning that looks serious. A cyber threat may try to
              rush the student into clicking, sharing, downloading, or giving
              access before they have time to think.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Understanding threats helps students make safer defensive choices.
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
              Do not test cyber threats for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              click suspicious links, download unknown files, test malware,
              visit unsafe websites, guess passwords, change settings, or try to
              access systems for practice. Ask a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A cyber threat is anything that could create digital harm or risk.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Cyber threats can appear through messages, websites, apps, files,
            devices, accounts, networks, or people. A threat does not always look
            scary. It might look like a helpful link, a free reward, a school
            message, a game tool, a device warning, or a request from someone who
            seems friendly.
          </p>

          <p>
            Students do not need to know advanced technical details to respond
            safely. The most important habit is to notice when something asks for
            a risky action, such as clicking a link, downloading a file, sharing a
            password, giving a login code, allowing access, or changing a device
            setting.
          </p>

          <p>
            Good cyber defense is about reducing risk. Students can protect
            themselves by pausing, checking the source, avoiding unsafe testing,
            using official tools, keeping private access private, and asking a
            trusted adult when something feels urgent, confusing, or suspicious.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding cyber threats.
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
          Threat Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Cyber threats can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {threatSituations.map((item) => (
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
            Cyber threat safety means noticing warning signs before acting.
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
          Cyber defense starts with pausing before risky actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks urgent links, downloads unknown files, shares
              login codes, trusts scary pop-ups, or tries to test suspicious
              tools alone.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids unsafe actions, checks official
              sources, keeps private access private, and asks a trusted adult
              when something feels suspicious.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer threat response using fake examples.
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
          Use these habits when something online feels risky.
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
          Before finishing Lesson 10.1, students should be able to say:
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
            Lesson 10.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 10.2 will explain malware, viruses, and ransomware
            basics in a safe, defensive way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 10
            </Link>

            <Link
              href="/junior/cyber-threats-and-defense-basics/malware-viruses-and-ransomware-basics"
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