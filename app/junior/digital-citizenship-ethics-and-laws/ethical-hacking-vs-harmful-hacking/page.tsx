import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain the difference between ethical hacking and harmful hacking",
  "Understand that permission is required before testing any system, account, device, or network",
  "Recognize that curiosity online must stay safe, legal, respectful, and supervised",
  "Practice safer choices when students notice a bug, weakness, mistake, or security concern",
  "Know when to stop, document safely, and ask a trusted adult or teacher for help",
];

const vocabulary = [
  {
    term: "Ethical Hacking",
    definition:
      "Authorized security testing done with clear permission, rules, supervision, and a goal of helping people fix problems.",
  },
  {
    term: "Harmful Hacking",
    definition:
      "Trying to access, change, damage, disrupt, or explore systems without permission or in a way that can hurt people.",
  },
  {
    term: "Permission",
    definition:
      "Clear approval from the owner or responsible adult that says what is allowed, where it is allowed, and when to stop.",
  },
  {
    term: "Scope",
    definition:
      "The exact boundary of what someone is allowed to test or examine during an approved security activity.",
  },
  {
    term: "Responsible Disclosure",
    definition:
      "Reporting a security concern privately to the right person or organization instead of sharing it publicly or misusing it.",
  },
  {
    term: "Cyber Ethics",
    definition:
      "Making online and technology choices that are legal, respectful, honest, helpful, and safe for others.",
  },
];

const ethicsSituations = [
  {
    title: "Finding a Login Mistake",
    explanation:
      "A student notices that a school tool or website seems to show something unexpected or private.",
    saferChoice:
      "Stop exploring, do not click around for more, and report the concern to a teacher or trusted adult.",
  },
  {
    title: "Testing a Friend's Account",
    explanation:
      "A student wants to see whether they can guess a friend's password or get into an account as a joke.",
    saferChoice:
      "Do not try. Accounts belong to other people, and testing them without permission is unsafe and wrong.",
  },
  {
    title: "Learning Cybersecurity Skills",
    explanation:
      "A student is curious about cybersecurity and wants to practice safely without hurting anyone.",
    saferChoice:
      "Use teacher-approved lessons, fake examples, school-safe labs, or practice spaces designed for learning.",
  },
  {
    title: "Sharing a Security Concern",
    explanation:
      "A student thinks they found a problem and wants to post it online to prove they discovered it.",
    saferChoice:
      "Do not post details publicly. Tell a trusted adult and report it through the proper private channel.",
  },
];

const warningSigns = [
  {
    title: "No Permission",
    text: "A student is trying to test, access, change, or explore something without clear approval from the owner or responsible adult.",
  },
  {
    title: "Outside the Rules",
    text: "The activity goes beyond a class assignment, approved lab, or teacher-given instruction.",
  },
  {
    title: "Real Accounts or Data",
    text: "The activity involves real passwords, private messages, grades, photos, personal information, or accounts that belong to someone else.",
  },
  {
    title: "Trying to Bypass Controls",
    text: "A student is attempting to get around rules, blocks, settings, warnings, filters, permissions, or account protections.",
  },
  {
    title: "Keeping It Secret",
    text: "The student feels they need to hide what they are doing from teachers, parents, guardians, or the owner of the system.",
  },
  {
    title: "Showing Off a Weakness",
    text: "A student wants to publicly share a bug, private information, or a way to misuse a system instead of reporting it safely.",
  },
];

const scenarios = [
  {
    title: "The Unexpected Page",
    situation:
      "A student clicks a normal school link and unexpectedly sees a page that looks like it might show information they should not see.",
    warningSigns:
      "The student may be seeing something private or unintended, and clicking around could make the situation worse.",
    riskyResponse:
      "Keep exploring the page to see what else is visible and tell friends about it.",
    smarterResponse:
      "Stop immediately, do not look for more, and show a teacher or trusted adult what happened.",
    whyItWorks:
      "Ethical choices protect people's privacy. Reporting safely helps adults fix the issue without spreading the problem.",
  },
  {
    title: "The Friend Password Challenge",
    situation:
      "A friend says their password is strong, and another student wants to prove they can guess it or get into the account.",
    warningSigns:
      "The account belongs to another person, and trying to access it without permission is unsafe and disrespectful.",
    riskyResponse:
      "Try guesses, use personal clues, or ask others for hints because it seems like a challenge.",
    smarterResponse:
      "Do not try to access the account. Talk about password safety in a respectful way instead.",
    whyItWorks:
      "Even jokes can cross a serious line. Ethical cyber behavior respects other people's accounts and privacy.",
  },
  {
    title: "The Curious Student",
    situation:
      "A student wants to learn how cybersecurity professionals find and fix weaknesses.",
    warningSigns:
      "Curiosity can become risky if the student experiments on real websites, devices, school tools, or networks.",
    riskyResponse:
      "Test random sites or school systems to see what happens.",
    smarterResponse:
      "Use approved lessons, fake examples, supervised practice, and teacher-approved learning spaces only.",
    whyItWorks:
      "Learning cybersecurity is positive when it stays inside safe boundaries. Permission and supervision keep learning helpful and legal.",
  },
  {
    title: "The Public Post",
    situation:
      "A student thinks they found a security problem and wants to post details online so others know they discovered it.",
    warningSigns:
      "Public details could help others misuse the problem or expose private information.",
    riskyResponse:
      "Post screenshots, details, or instructions publicly to get attention.",
    smarterResponse:
      "Do not share details publicly. Ask a trusted adult how to report the concern privately and responsibly.",
    whyItWorks:
      "Responsible disclosure focuses on fixing problems safely, not spreading risk or showing off.",
  },
];

const actionSteps = [
  "Ask: Do I have clear permission to do this?",
  "Stay inside teacher-approved lessons, fake examples, and supervised practice spaces.",
  "Never test real accounts, school systems, websites, devices, or networks without permission.",
  "Stop immediately if you see private information, unexpected access, or something that feels wrong.",
  "Report concerns privately to a trusted adult, teacher, parent, guardian, or official support channel.",
  "Use cybersecurity skills to protect people, not to embarrass, trick, access, damage, or show off.",
];

const reflectionQuestions = [
  "Why does ethical hacking require permission?",
  "What is the difference between curiosity and unsafe testing?",
  "Why should students stop if they see private or unexpected information?",
  "Why can publicly sharing a security problem be risky?",
  "How can students learn cybersecurity skills in a safe and respectful way?",
];

const skillCheck = [
  {
    question:
      "A student finds a page that seems to show information they should not see. What is the safer response?",
    choices: [
      "Keep clicking to learn more",
      "Stop and report it to a teacher or trusted adult",
      "Send it to friends so they can check too",
    ],
    answer: "Choice B",
    explanation:
      "Students should not explore private or unexpected information. Stopping and getting trusted help protects others and keeps the response ethical.",
  },
  {
    question:
      "A student wants to test a friend's password as a joke. What is the problem?",
    choices: [
      "It involves trying to access someone else's account without permission",
      "It takes too long",
      "It only works on weekends",
    ],
    answer: "Choice A",
    explanation:
      "Accounts belong to people. Trying to access them without permission is unsafe, disrespectful, and not ethical hacking.",
  },
  {
    question:
      "What makes cybersecurity practice safer for students?",
    choices: [
      "Practicing only in teacher-approved lessons, fake examples, or supervised learning spaces",
      "Trying random websites to see what happens",
      "Keeping experiments secret from adults",
    ],
    answer: "Choice A",
    explanation:
      "Safe practice happens in approved spaces with rules and supervision. Students should not test real systems on their own.",
  },
  {
    question:
      "A student thinks they found a security problem. What should they avoid doing?",
    choices: [
      "Reporting it privately with trusted adult help",
      "Posting details publicly to show everyone",
      "Stopping before exploring further",
    ],
    answer: "Choice B",
    explanation:
      "Publicly sharing details can create more risk. Responsible reporting focuses on getting the problem fixed safely.",
  },
];

const checklist = [
  "I can explain the difference between ethical hacking and harmful hacking.",
  "I can explain why permission is required before testing anything.",
  "I can recognize warning signs that curiosity is becoming unsafe.",
  "I can stop when I see private, unexpected, or concerning information.",
  "I can report a security concern privately and responsibly.",
  "I know cybersecurity skills should be used to help and protect people.",
];

export default function EthicalHackingVsHarmfulHackingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Ethical Hacking vs Harmful Hacking
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital citizenship means using cybersecurity curiosity in safe,
          legal, and respectful ways. This lesson teaches students the
          difference between ethical security learning and harmful actions that
          cross boundaries, invade privacy, or break rules.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/copyright-credit-and-creative-work"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 11
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws/responsible-choices-and-digital-consequences"
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
              Cybersecurity curiosity must stay inside safe boundaries.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student notices a weird login page, an unexpected
              setting, or a possible mistake in a website. Curiosity is normal,
              but ethical cyber behavior means stopping before exploring, asking
              for help, and never testing anything without permission.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ethical cybersecurity is about helping people, not crossing boundaries.
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
              Do not test real systems, accounts, devices, or networks without permission.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              try to break into accounts, bypass rules, scan systems, guess
              passwords, change settings, or test real websites, school tools,
              devices, or networks. When unsure, stop and ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The difference is permission, purpose, rules, and respect.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Ethical hacking is not random experimenting. It is authorized
            security work done with clear permission, clear boundaries, and a
            helpful purpose. Ethical security learners follow rules, protect
            privacy, document concerns safely, and stop when something is
            outside the approved activity.
          </p>

          <p>
            Harmful hacking happens when someone tries to access, explore,
            change, damage, disrupt, or share information without permission.
            Even if someone says they are just curious or joking, testing real
            accounts, school systems, websites, devices, or networks can hurt
            people and lead to serious consequences.
          </p>

          <p>
            Students can absolutely learn cybersecurity, but they should do it
            through safe lessons, fake examples, school-approved labs, and
            trusted adult guidance. The safest question is always: Do I have
            permission, and am I helping protect people?
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding cybersecurity ethics.
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
          Cyber Ethics Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Cybersecurity choices depend on permission, boundaries, and purpose.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {ethicsSituations.map((item) => (
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
            Digital citizenship means noticing when cyber curiosity becomes unsafe.
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
          Ethical cyber choices protect privacy, trust, and safety.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student tests real accounts, tools, websites, devices, or
              networks without permission because they are curious, joking, or
              trying to prove they can do it.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student stays inside approved learning spaces, stops when a
              boundary appears, protects privacy, and reports concerns to a
              trusted adult or official support channel.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice ethical cyber decisions using fake examples.
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
          Use these habits before testing, exploring, or reporting security concerns.
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
          Before finishing Lesson 11.4, students should be able to say:
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
            Lesson 11.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 11.5 will explain responsible choices and digital
            consequences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/copyright-credit-and-creative-work"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 11
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws/responsible-choices-and-digital-consequences"
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