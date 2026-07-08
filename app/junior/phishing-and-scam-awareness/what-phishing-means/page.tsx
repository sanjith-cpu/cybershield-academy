import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what phishing means",
  "Recognize that phishing messages try to trick people into unsafe actions",
  "Identify common phishing warning signs",
  "Understand why students should not click, reply, or share information too quickly",
  "Practice safer responses using fake examples only",
];

const vocabulary = [
  {
    term: "Phishing",
    definition:
      "A trick where a message, website, or person pretends to be trustworthy so someone shares information, clicks something, or gives account access.",
  },
  {
    term: "Scam",
    definition:
      "A dishonest trick designed to get something from someone, such as money, information, attention, or account access.",
  },
  {
    term: "Suspicious Message",
    definition:
      "A message that feels unusual, urgent, unexpected, too good to be true, or asks for private information.",
  },
  {
    term: "Impersonation",
    definition:
      "Pretending to be another person, company, school, game platform, or support team.",
  },
  {
    term: "Warning Sign",
    definition:
      "A clue that something may be unsafe, misleading, fake, or worth checking with a trusted adult.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, librarian, or school technology staff member who can help students make safer choices.",
  },
];

const phishingTargets = [
  {
    title: "Account Access",
    explanation:
      "A phishing message may ask for a password, login code, reset code, or account approval.",
    saferThought:
      "Passwords and login codes should stay private and should only be used through official account tools.",
  },
  {
    title: "Personal Information",
    explanation:
      "A message may ask for a name, address, school, phone number, birthday, photos, or other private details.",
    saferThought:
      "Students should pause before sharing information and ask a trusted adult when unsure.",
  },
  {
    title: "Clicks and Downloads",
    explanation:
      "A message may include a link, attachment, file, QR code, or download that claims to be important.",
    saferThought:
      "Students should not click suspicious links, open unknown attachments, or scan random codes for practice.",
  },
  {
    title: "Fast Reactions",
    explanation:
      "A message may use fear, rewards, urgency, or curiosity to make students act before thinking.",
    saferThought:
      "Slowing down is a safety skill. Urgency is often a reason to pause, not rush.",
  },
];

const warningSigns = [
  {
    title: "Too Urgent",
    text: "The message says the student must act immediately or something bad will happen.",
  },
  {
    title: "Too Good to Be True",
    text: "The message promises a free prize, rare game item, money, reward, or special access for almost no effort.",
  },
  {
    title: "Private Information Request",
    text: "The message asks for passwords, login codes, reset codes, personal details, or account access.",
  },
  {
    title: "Unexpected Sender",
    text: "The message comes from someone unexpected, a strange account, or a sender pretending to be official.",
  },
  {
    title: "Suspicious Link or Attachment",
    text: "The message pushes the student to click a link, open a file, download something, or scan a code.",
  },
  {
    title: "Pressure to Keep Secret",
    text: "The message tells the student not to tell parents, teachers, friends, or trusted adults.",
  },
];

const scenarios = [
  {
    title: "The Fake Game Reward",
    situation:
      "A student receives a message saying they won free game currency and must sign in through a link to claim it.",
    warningSigns:
      "The offer is exciting, unexpected, and asks the student to use a link to sign in.",
    riskyResponse:
      "Click the link quickly before the reward expires.",
    smarterResponse:
      "Do not click the link. Check through the official game app or website with trusted adult help if needed.",
    whyItWorks:
      "Fake rewards can be used to collect account information. Official tools are safer than random links.",
  },
  {
    title: "The Account Problem Message",
    situation:
      "A message says a student’s account will be deleted today unless they reply with their password.",
    warningSigns:
      "The message creates fear and asks for a private password.",
    riskyResponse:
      "Reply with the password to save the account.",
    smarterResponse:
      "Do not reply with private information. Show the message to a trusted adult and use official account support.",
    whyItWorks:
      "Real account support should not ask students to send passwords in messages.",
  },
  {
    title: "The Fake School Notice",
    situation:
      "A student receives a message that looks like a school announcement, but the sender seems strange and the link looks unfamiliar.",
    warningSigns:
      "The sender and link do not seem normal, even though the message pretends to be school-related.",
    riskyResponse:
      "Click the link because the message mentions school.",
    smarterResponse:
      "Do not click. Ask a teacher, guardian, or school technology staff member to confirm it.",
    whyItWorks:
      "Messages can pretend to be official. Checking with a trusted source helps prevent unsafe clicks.",
  },
  {
    title: "The Secret Prize",
    situation:
      "A message says a student won a prize but must keep it secret and send personal information to receive it.",
    warningSigns:
      "The message asks for personal information and tells the student not to tell anyone.",
    riskyResponse:
      "Send the information secretly to claim the prize.",
    smarterResponse:
      "Do not send the information. Save the message if needed and ask a trusted adult.",
    whyItWorks:
      "Pressure to keep secrets can be a major warning sign. Trusted adults can help students evaluate the message.",
  },
];

const actionSteps = [
  "Pause before clicking, replying, downloading, scanning, or sharing.",
  "Ask: Is this message expected, official, and safe?",
  "Do not share passwords, login codes, reset codes, or personal details in messages.",
  "Do not click suspicious links or open unknown attachments for practice.",
  "Use official apps or websites instead of random message links.",
  "Ask a trusted adult when a message feels urgent, scary, exciting, secret, or too good to be true.",
];

const reflectionQuestions = [
  "What does phishing mean?",
  "Why do phishing messages often create urgency or excitement?",
  "Why is a message asking for a password or login code a warning sign?",
  "Why should students avoid clicking suspicious links?",
  "Who could a student ask for help when a message feels suspicious?",
];

const skillCheck = [
  {
    question:
      "A message says a student won free game currency and must sign in through a link. What is the safer response?",
    choices: [
      "Click the link quickly before the reward expires",
      "Do not click the link and check through official tools with trusted help if needed",
      "Share the link with friends so they can try too",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected rewards and sign-in links can be phishing warning signs. Official apps or websites are safer than random links.",
  },
  {
    question:
      "Which message is most suspicious?",
    choices: [
      "A teacher reminds the class about homework in the normal classroom app",
      "A random account asks for a password to prevent account deletion today",
      "A friend says hello",
    ],
    answer: "Choice B",
    explanation:
      "A message from a random account asking for a password and creating urgency is a major warning sign.",
  },
  {
    question:
      "What is phishing trying to do?",
    choices: [
      "Trick someone into sharing information, clicking something, or giving account access",
      "Teach students how to organize homework",
      "Make all messages safer automatically",
    ],
    answer: "Choice A",
    explanation:
      "Phishing is a trick that tries to make people take unsafe actions, such as sharing private information or clicking unsafe links.",
  },
  {
    question:
      "A message says not to tell parents or teachers about a prize. What is the warning sign?",
    choices: [
      "It pressures the student to keep the message secret",
      "It has words in it",
      "It mentions a prize",
    ],
    answer: "Choice A",
    explanation:
      "Pressure to keep secrets from trusted adults is a serious warning sign.",
  },
];

const checklist = [
  "I can explain what phishing means.",
  "I can recognize that phishing tries to trick people.",
  "I can identify common phishing warning signs.",
  "I can avoid sharing private information in suspicious messages.",
  "I can pause before clicking links, opening files, or scanning codes.",
  "I know when to ask a trusted adult for help.",
];

export default function WhatPhishingMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Phishing Means
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Phishing is when a message, website, or person pretends to be
          trustworthy so someone shares information, clicks something, or gives
          account access. This lesson teaches students how to recognize the idea
          of phishing without testing real suspicious links.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 4
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness/suspicious-links-and-attachments"
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
              A message can look exciting, scary, or official — and still be
              unsafe.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a message saying they won a prize, must
              save an account, or need to sign in through a link. The message
              might be designed to make the student act fast before thinking.
              Phishing awareness helps students pause.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Phishing is about tricking people into unsafe choices.
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
              Do not click real suspicious links for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real phishing messages, open unknown attachments, scan random
              codes, or type private information into suspicious websites.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Phishing works by pretending to be trustworthy.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A phishing message may pretend to come from a game platform, school,
            store, delivery service, social app, bank, support team, friend, or
            popular company. The goal is to make the person trust the message
            enough to click, reply, download, scan, or share information.
          </p>

          <p>
            Phishing does not always look obvious. Some messages are full of
            mistakes, but others look polished. That is why students should focus
            on behavior: Is the message unexpected? Is it urgent? Does it ask
            for private information? Does it push a link, file, code, or login?
          </p>

          <p>
            The safest response is to pause. Students can avoid suspicious links,
            use official apps or websites instead, and ask a trusted adult before
            taking action. The goal is not to investigate the suspicious message
            alone. The goal is to make a safer choice.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding phishing.
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
          What Phishing May Target
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Phishing messages often want one of these things.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {phishingTargets.map((target) => (
            <div
              key={target.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {target.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {target.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Thought
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {target.saferThought}
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
            Phishing messages often use warning signs like these.
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
          Suspicious messages should create a pause, not a rush.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks a link, replies with private information, or
              downloads something because the message feels urgent or exciting.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks warning signs, avoids suspicious links,
              uses official tools, and asks a trusted adult before acting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice recognizing phishing without clicking anything real.
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
          Use these habits when a suspicious message appears.
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
          Before finishing Lesson 4.1, students should be able to say:
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
            Lesson 4.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 4.2 will explain suspicious links and attachments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 4
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness/suspicious-links-and-attachments"
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