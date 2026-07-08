import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what cyber defenders do",
  "Understand that cyber defense focuses on protection, safety, and recovery",
  "Recognize different defender roles like analysts, technicians, teachers, and administrators",
  "Practice safer choices when a student notices a possible cyber problem",
  "Know why cyber defenders must follow rules, ethics, and trusted adult guidance",
];

const vocabulary = [
  {
    term: "Cyber Defender",
    definition:
      "A person who helps protect people, devices, accounts, networks, data, or organizations from cyber risks in safe and legal ways.",
  },
  {
    term: "Security Analyst",
    definition:
      "A defender who watches for warning signs, studies reports, and helps teams respond to possible cyber problems.",
  },
  {
    term: "Incident Response",
    definition:
      "The careful steps a trusted team takes when something suspicious or unsafe happens, such as reporting, containing, fixing, and learning from the problem.",
  },
  {
    term: "Policy",
    definition:
      "A rule or guideline that explains how people should use technology safely, legally, and responsibly.",
  },
  {
    term: "Ethics",
    definition:
      "Doing the right thing online, respecting privacy, following rules, and avoiding actions that could harm others.",
  },
  {
    term: "Report",
    definition:
      "A safe message or form used to tell a trusted adult, teacher, school technology team, parent, or guardian about a possible cyber problem.",
  },
];

const defenderSituations = [
  {
    title: "Suspicious Message Report",
    explanation:
      "A student receives a strange message that asks for login information or pushes an urgent link.",
    saferChoice:
      "Do not click or reply. Save what is needed safely, report it to a trusted adult, and let the right person handle it.",
  },
  {
    title: "Device Problem",
    explanation:
      "A device starts showing warnings, strange pop-ups, or unusual behavior during schoolwork.",
    saferChoice:
      "Stop interacting with suspicious prompts and ask a trusted adult or school technology helper for support.",
  },
  {
    title: "Classroom Safety Rule",
    explanation:
      "A teacher explains rules for passwords, school devices, file sharing, and respectful technology use.",
    saferChoice:
      "Follow the rules, ask questions when confused, and remember that policies help protect everyone.",
  },
  {
    title: "Helping a Friend",
    explanation:
      "A friend says their account may be acting strangely and asks another student to fix it for them.",
    saferChoice:
      "Do not try to access the friend’s account. Encourage the friend to tell a trusted adult and use official recovery steps.",
  },
];

const warningSigns = [
  {
    title: "Trying to Fix Alone",
    text: "A student tries to investigate a suspicious account, link, file, or device problem without trusted adult help.",
  },
  {
    title: "Breaking Rules to Help",
    text: "Someone thinks helping means guessing passwords, entering another person’s account, bypassing settings, or testing suspicious tools.",
  },
  {
    title: "Ignoring Reports",
    text: "A cyber problem is noticed, but nobody tells a trusted adult, teacher, parent, guardian, or school technology helper.",
  },
  {
    title: "Sharing Private Details",
    text: "A person shares screenshots, names, passwords, codes, or private information with people who do not need to see them.",
  },
  {
    title: "Panic Response",
    text: "Someone clicks quickly, deletes important context, changes random settings, or responds angrily because they feel rushed.",
  },
  {
    title: "Curiosity Over Safety",
    text: "A student wants to test suspicious links, files, websites, or accounts to see what happens instead of reporting safely.",
  },
];

const scenarios = [
  {
    title: "The Suspicious Login Message",
    situation:
      "A student receives a message saying their school account will be locked unless they click a link and sign in right away.",
    warningSigns:
      "The message creates urgency and asks for account access through a link.",
    riskyResponse:
      "Click the link, enter the login information, and try to figure out whether it is real alone.",
    smarterResponse:
      "Do not click or sign in through the message. Show it to a trusted adult, teacher, parent, guardian, or school technology helper.",
    whyItWorks:
      "Cyber defenders protect people by reporting safely and using trusted channels, not by testing suspicious messages alone.",
  },
  {
    title: "The Friend Account Problem",
    situation:
      "A friend says their account is acting strangely and asks the student to log in for them to check what happened.",
    warningSigns:
      "Logging into another person’s account can break rules and expose private information.",
    riskyResponse:
      "Use the friend’s password to look around the account and try to fix it.",
    smarterResponse:
      "Do not access the friend’s account. Encourage the friend to ask a trusted adult and use official account recovery or support options.",
    whyItWorks:
      "Good defenders respect privacy, follow rules, and get the right support instead of taking over someone else’s account.",
  },
  {
    title: "The Strange Device Warning",
    situation:
      "A school device shows unusual pop-ups and a student wants to click different buttons to make them disappear.",
    warningSigns:
      "The device is showing unusual behavior, and random clicking could make the situation worse.",
    riskyResponse:
      "Click through the pop-ups, download anything suggested, or change random settings.",
    smarterResponse:
      "Stop interacting with the pop-ups and tell a teacher or school technology helper what happened.",
    whyItWorks:
      "Incident response starts with careful reporting and trusted help, not guessing or clicking under pressure.",
  },
  {
    title: "The Helpful Classmate",
    situation:
      "A student notices classmates sharing passwords in a group chat and wants to help them be safer.",
    warningSigns:
      "Passwords are being shared where others can see, copy, or misuse them.",
    riskyResponse:
      "Call everyone out publicly, repost the message, or screenshot it for people who do not need it.",
    smarterResponse:
      "Encourage classmates not to share passwords and tell a trusted adult if private information may be exposed.",
    whyItWorks:
      "Defenders help in respectful ways that reduce harm, protect privacy, and involve trusted support when needed.",
  },
];

const actionSteps = [
  "Pause when something seems suspicious, urgent, confusing, or unsafe.",
  "Do not test suspicious links, files, websites, accounts, or messages.",
  "Report possible cyber problems to a trusted adult, teacher, parent, guardian, or school technology helper.",
  "Respect privacy and never enter someone else’s account or guess someone else’s password.",
  "Use official support, school rules, trusted settings, and approved recovery steps.",
  "Help others calmly by encouraging safer choices and trusted adult support.",
];

const reflectionQuestions = [
  "What does a cyber defender do?",
  "Why should defenders follow rules and ethics?",
  "Why is reporting safer than testing suspicious links or files?",
  "How can a student help a friend with an account problem without entering the account?",
  "Who can students ask for help when they notice a possible cyber problem?",
];

const skillCheck = [
  {
    question:
      "A student gets a suspicious login message. What is the safer defender response?",
    choices: [
      "Click the link and test it alone",
      "Do not click and show it to a trusted adult or school technology helper",
      "Forward it to everyone in the class",
    ],
    answer: "Choice B",
    explanation:
      "Defenders report suspicious messages through trusted channels instead of testing risky links alone.",
  },
  {
    question:
      "A friend asks a student to log into their account to fix a problem. What should the student do?",
    choices: [
      "Use the friend’s password and look around",
      "Avoid entering the account and encourage trusted adult or official support",
      "Guess the password if the friend forgot it",
    ],
    answer: "Choice B",
    explanation:
      "Good defenders respect privacy and rules. Account problems should be handled through trusted support and official recovery steps.",
  },
  {
    question:
      "A school device shows strange pop-ups. What is a safer response?",
    choices: [
      "Click random buttons until the pop-ups disappear",
      "Stop interacting with the pop-ups and tell a teacher or technology helper",
      "Download whatever the pop-up suggests",
    ],
    answer: "Choice B",
    explanation:
      "Random clicking can increase risk. Trusted adults and technology helpers can guide the next safe step.",
  },
  {
    question:
      "Which action matches cyber defender ethics?",
    choices: [
      "Following rules, respecting privacy, and reporting safely",
      "Testing suspicious files to see what happens",
      "Entering another person’s account to help faster",
    ],
    answer: "Choice A",
    explanation:
      "Cyber defenders protect people by using safe, legal, respectful, and approved actions.",
  },
];

const checklist = [
  "I can explain what cyber defenders do.",
  "I can describe why defenders focus on protection, safety, and recovery.",
  "I can recognize that reporting is safer than testing suspicious content.",
  "I can respect privacy and avoid entering someone else’s account.",
  "I can help others calmly without making the situation worse.",
  "I know when to ask a trusted adult or school technology helper for support.",
];

export default function WhatCyberDefendersDoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10 • Lesson 10.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Cyber Defenders Do
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Cyber defenders help protect people, devices, accounts, networks, and
          information. This lesson teaches students that real cyber defense is
          safe, legal, respectful, help-focused, and based on reporting problems
          instead of testing suspicious things alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics/updates-backups-and-basic-protection"
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
            href="/junior/cyber-threats-and-defense-basics/review"
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
              Cyber defenders protect people before, during, and after problems.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student notices a suspicious message, a strange device
              warning, or a friend’s account problem. A defender mindset does
              not mean trying to hack, test, or fix everything alone. It means
              pausing, protecting privacy, following rules, and getting trusted
              help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Cyber defense is about protection, not curiosity or shortcuts.
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
              Do not test suspicious links, files, websites, or accounts.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              investigate suspicious content alone, enter another person’s
              account, guess passwords, bypass settings, download unknown tools,
              or try to prove whether something is unsafe. Report concerns to a
              trusted adult or approved technology helper.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Cyber defenders reduce risk by helping people make safer choices.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Cyber defenders can work in many roles. Some help people reset
            accounts safely, some teach safer habits, some manage school or
            workplace technology, and some study reports to spot problems. Their
            goal is to protect people and systems, not to scare people or show
            off.
          </p>

          <p>
            Good defenders follow rules and respect privacy. They do not enter
            someone else’s account without permission, test suspicious files for
            fun, share private details widely, or take risky actions just
            because they are curious.
          </p>

          <p>
            Students can practice a defender mindset by pausing, reporting
            problems, using trusted adults, following school rules, helping
            friends calmly, and choosing safe recovery steps instead of unsafe
            shortcuts.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding cyber defenders.
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
          Defender Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Cyber defenders respond carefully instead of rushing into risky actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {defenderSituations.map((item) => (
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
            Defender thinking means knowing what not to do.
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
          A defender mindset protects people without breaking trust.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student tests suspicious links, tries to access someone else’s
              account, guesses passwords, shares private screenshots widely, or
              changes settings without permission.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids unsafe testing, protects privacy,
              follows rules, reports concerns, and gets trusted adult or school
              technology support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice cyber defender decisions using fake examples.
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
          Use these habits to practice cyber defender thinking safely.
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
          Before finishing Lesson 10.5, students should be able to say:
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
            Lesson 10.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, the Module 10 review will help students check their
            understanding of cyber threats, defense habits, protection steps,
            and what cyber defenders do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics/updates-backups-and-basic-protection"
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
              href="/junior/cyber-threats-and-defense-basics/review"
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