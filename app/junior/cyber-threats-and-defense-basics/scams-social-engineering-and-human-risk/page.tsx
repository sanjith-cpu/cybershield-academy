import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what scams and social engineering mean in a safe, beginner-friendly way",
  "Understand how online messages can pressure people into risky choices",
  "Recognize warning signs like urgency, fear, fake rewards, and requests for private information",
  "Practice safer responses without replying to suspicious messages or testing risky links",
  "Know when to ask a trusted adult before sharing information, clicking links, or following instructions from a message",
];

const vocabulary = [
  {
    term: "Scam",
    definition:
      "A dishonest message, post, call, website, or request that tries to trick someone into giving information, money, access, or attention.",
  },
  {
    term: "Social Engineering",
    definition:
      "When someone tries to manipulate a person into making a risky choice, often by using trust, fear, urgency, curiosity, or rewards.",
  },
  {
    term: "Human Risk",
    definition:
      "The risk that comes from people being rushed, confused, pressured, distracted, or tricked into unsafe online actions.",
  },
  {
    term: "Impersonation",
    definition:
      "When someone pretends to be a friend, teacher, company, app, school, or trusted person to make a request seem real.",
  },
  {
    term: "Private Information",
    definition:
      "Information that should be protected, such as passwords, login codes, home details, school details, account information, or personal contact information.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other safe adult who can help a student make a safer choice online.",
  },
];

const scamSituations = [
  {
    title: "Fake Prize Message",
    explanation:
      "A student receives a message saying they won a reward, gift card, game item, or special access they did not enter to win.",
    saferChoice:
      "Do not click the link or share information. Ask a trusted adult to help check whether the message is real.",
  },
  {
    title: "Pretend Authority Request",
    explanation:
      "A message claims to be from a school, app, coach, club, or company and asks the student to act quickly.",
    saferChoice:
      "Use an official source or ask a trusted adult before following instructions from the message.",
  },
  {
    title: "Friend Account Acting Strange",
    explanation:
      "A message seems to come from someone the student knows, but the wording, request, or link feels unusual.",
    saferChoice:
      "Do not assume it is safe. Check with the person another way or ask a trusted adult before responding.",
  },
  {
    title: "Pressure to Keep a Secret",
    explanation:
      "Someone online asks the student not to tell adults while pushing them to share information, click something, or continue a conversation.",
    saferChoice:
      "Stop responding and tell a trusted adult. Safe help is more important than keeping a suspicious online request secret.",
  },
];

const warningSigns = [
  {
    title: "Urgent Pressure",
    text: "The message says the student must act immediately or something bad will happen.",
  },
  {
    title: "Too-Good Reward",
    text: "The message promises free money, game items, followers, gift cards, prizes, or special access for almost no effort.",
  },
  {
    title: "Private Information Request",
    text: "Someone asks for passwords, login codes, account details, school details, addresses, phone numbers, or other private information.",
  },
  {
    title: "Pretending to Be Trusted",
    text: "The sender claims to be a teacher, friend, company, school, app, coach, or organization but something feels off.",
  },
  {
    title: "Secret Instructions",
    text: "The person tells the student not to tell a parent, guardian, teacher, or other trusted adult.",
  },
  {
    title: "Emotional Pressure",
    text: "The message uses fear, guilt, excitement, embarrassment, curiosity, or panic to make the student act without thinking.",
  },
];

const scenarios = [
  {
    title: "The Free Gift Card Message",
    situation:
      "A student gets a message saying they won a gift card. The message includes a link and asks for a name, school, and email address to claim the reward.",
    warningSigns:
      "The reward was unexpected, the message asks for personal information, and the link is not from an official source.",
    riskyResponse:
      "Click the link and fill out the form quickly before the reward disappears.",
    smarterResponse:
      "Do not click the link or enter information. Show the message to a trusted adult and use official sources to check it.",
    whyItWorks:
      "Unexpected rewards can be used to pressure people into sharing information. Pausing and getting help reduces risk.",
  },
  {
    title: "The Fake School Account Alert",
    situation:
      "A message says a student school account will be locked unless they click a link and sign in immediately.",
    warningSigns:
      "The message creates urgency, asks for account action, and sends the student to a link instead of an official school login path.",
    riskyResponse:
      "Click the link and sign in because the message sounds serious.",
    smarterResponse:
      "Do not use the message link. Ask a teacher, school staff member, parent, or guardian to help check the account through the official school system.",
    whyItWorks:
      "Account warnings should be checked through trusted official sources, not through scary or urgent message links.",
  },
  {
    title: "The Friend Request That Feels Off",
    situation:
      "A student receives a message from a friend account asking them to send a login code because the friend is locked out.",
    warningSigns:
      "The request is unusual, asks for a code, and could mean the friend account is not actually being controlled by the friend.",
    riskyResponse:
      "Send the code because the message appears to come from someone familiar.",
    smarterResponse:
      "Do not send the code. Check with the friend another way or ask a trusted adult for help.",
    whyItWorks:
      "Login codes are private. Even familiar-looking accounts can send unsafe requests if something is wrong.",
  },
  {
    title: "The Secret Instructions",
    situation:
      "Someone online tells a student they can get special access to a game if they keep the conversation secret and follow instructions in a link.",
    warningSigns:
      "The person asks for secrecy, offers a reward, and pressures the student to follow unknown instructions.",
    riskyResponse:
      "Keep the secret and follow the link because the reward sounds exciting.",
    smarterResponse:
      "Stop responding, do not click the link, and tell a trusted adult what happened.",
    whyItWorks:
      "Safe online choices should not require secrecy from trusted adults. Getting help protects the student.",
  },
];

const actionSteps = [
  "Pause when a message creates urgency, fear, excitement, or pressure.",
  "Do not click suspicious links from messages, posts, pop-ups, or unknown senders.",
  "Do not share passwords, login codes, private information, or account details.",
  "Check important requests through official apps, school tools, websites, or trusted adults.",
  "Be careful even when a message appears to come from someone familiar.",
  "Ask a trusted adult when a message feels secretive, confusing, emotional, urgent, or too good to be true.",
];

const reflectionQuestions = [
  "What does social engineering mean?",
  "Why do scams often use urgency or rewards?",
  "Why should students protect login codes and private information?",
  "Why can a familiar-looking account still send risky messages?",
  "Who can students ask for help when a message feels suspicious?",
];

const skillCheck = [
  {
    question:
      "A message says a student won a gift card and must enter personal information to claim it. What is the safer response?",
    choices: [
      "Enter the information quickly",
      "Do not click or share information, and ask a trusted adult to help check it",
      "Send the message to more classmates",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected prizes can be warning signs. Students should avoid clicking or sharing information and get trusted help.",
  },
  {
    question:
      "A message says an account will be locked unless the student clicks a link immediately. What is the warning sign?",
    choices: [
      "The message creates urgent pressure",
      "The message has a sentence",
      "The message mentions an account",
    ],
    answer: "Choice A",
    explanation:
      "Urgent pressure is a common warning sign. Important account issues should be checked through official sources.",
  },
  {
    question:
      "A friend account asks a student to send a login code. What should the student do?",
    choices: [
      "Send the code because it is from a friend",
      "Do not send the code, and check with the friend another way or ask a trusted adult",
      "Post the code in a group chat",
    ],
    answer: "Choice B",
    explanation:
      "Login codes are private. A familiar-looking account can still send unsafe requests if something is wrong.",
  },
  {
    question:
      "Someone online says to keep a request secret from adults. What is the safer response?",
    choices: [
      "Keep the secret and follow the instructions",
      "Stop responding and tell a trusted adult",
      "Click the link first and decide later",
    ],
    answer: "Choice B",
    explanation:
      "Suspicious online requests should not be kept secret from trusted adults. Getting help is the safer choice.",
  },
];

const checklist = [
  "I can explain what scams and social engineering mean.",
  "I can recognize urgency, fear, rewards, secrecy, and private-information requests as warning signs.",
  "I can protect passwords, login codes, account details, and personal information.",
  "I can check important requests through official sources instead of message links.",
  "I can be careful even when a message seems to come from someone familiar.",
  "I know when to ask a trusted adult for help.",
];

export default function ScamsSocialEngineeringAndHumanRiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10 • Lesson 10.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Scams, Social Engineering, and Human Risk
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Cyber threats are not always about complicated technology. Many risks
          start when a message, post, website, or person pressures someone into
          clicking, sharing information, sending a code, or trusting the wrong
          request. This lesson teaches students how to pause and respond safely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics/malware-viruses-and-ransomware-basics"
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
            href="/junior/cyber-threats-and-defense-basics/updates-backups-and-basic-protection"
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
              Some cyber threats target people, not just devices.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student gets a message that says their account will be
              locked unless they click now. Another message promises a free
              prize. Another asks for a login code. These messages may try to
              use emotion, trust, or pressure to make the student act too fast.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safer online choices start with slowing down.
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
              Do not reply to suspicious messages for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real suspicious links, reply to real scam messages, send
              fake information, share login codes, or try to trick others for
              practice. The safer action is to pause and ask for trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Social engineering uses pressure to turn normal people into the target.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A scam is a dishonest attempt to trick someone. Social engineering
            is when a person or message tries to influence someone into making a
            risky choice. The request might look like a prize, a warning, a
            favor, an account alert, a friendship message, or a fake official
            notice.
          </p>

          <p>
            Human risk happens because people can be rushed, embarrassed,
            excited, scared, curious, or distracted. A student might click a
            link because a message sounds urgent, share a code because a friend
            account asks, or trust a request because it looks official.
          </p>

          <p>
            Students do not need to investigate suspicious messages alone. A
            safer response is to stop, avoid clicking or replying, protect
            private information, check through official sources, and ask a
            trusted adult when a request feels confusing, secretive, emotional,
            urgent, or too good to be true.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding scams and human risk.
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
          Scam Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Scams can appear in many everyday online spaces.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {scamSituations.map((item) => (
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
            Scams often use pressure before students have time to think.
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
          A message should not pressure students into unsafe actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks a suspicious link, replies to an unusual request,
              shares a login code, or follows instructions because the message
              sounds urgent, exciting, official, or secret.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids replying or clicking, protects private
              information, checks through official sources, and asks a trusted
              adult for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer responses to scam pressure using fake examples.
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
          Use these habits when messages or posts feel suspicious.
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
          Before finishing Lesson 10.3, students should be able to say:
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
            Lesson 10.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 10.4 will explain how updates, backups, and basic
            protection help reduce cyber risk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics/malware-viruses-and-ransomware-basics"
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
              href="/junior/cyber-threats-and-defense-basics/updates-backups-and-basic-protection"
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