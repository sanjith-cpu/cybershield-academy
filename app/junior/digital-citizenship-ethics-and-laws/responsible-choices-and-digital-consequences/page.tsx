import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what digital consequences are",
  "Understand that online choices can affect privacy, trust, reputation, and safety",
  "Recognize that posts, messages, screenshots, and account actions can spread beyond the original moment",
  "Practice safer decisions before posting, sharing, replying, downloading, or testing something online",
  "Know when to pause, apologize, report, delete safely, or ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Digital Consequence",
    definition:
      "A result that happens because of an online choice, such as a change in trust, privacy, safety, reputation, or access to technology.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The way someone's online actions, posts, messages, comments, and choices can affect how others see their character and judgment.",
  },
  {
    term: "Online Responsibility",
    definition:
      "Thinking about how digital actions may affect yourself, other people, accounts, school rules, and future opportunities.",
  },
  {
    term: "Pause Check",
    definition:
      "A short moment before acting online where a student asks whether the choice is safe, respectful, legal, and necessary.",
  },
  {
    term: "Repair Step",
    definition:
      "A helpful action taken after a mistake, such as apologizing, removing a post, reporting a problem, or asking an adult for help.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or other responsible adult who can help students make safer choices online.",
  },
];

const consequenceSituations = [
  {
    title: "Posting Without Thinking",
    explanation:
      "A student wants to post a joke, comment, photo, or reaction quickly without thinking about who might see it later.",
    saferChoice:
      "Pause and ask whether the post is kind, respectful, accurate, and safe to share before posting.",
  },
  {
    title: "Sharing Someone Else's Information",
    explanation:
      "A student is about to share a screenshot, photo, message, location, or personal detail that involves another person.",
    saferChoice:
      "Do not share private information about others without permission. Ask a trusted adult if the situation feels serious or confusing.",
  },
  {
    title: "Breaking an Online Rule",
    explanation:
      "A student is tempted to ignore a school policy, app rule, website rule, or account safety guideline because friends are doing it.",
    saferChoice:
      "Choose the safer rule-following option and step away from pressure that could create consequences.",
  },
  {
    title: "Fixing a Digital Mistake",
    explanation:
      "A student realizes they sent something hurtful, shared something too personal, or clicked something they should not have clicked.",
    saferChoice:
      "Stop, avoid making it worse, take a repair step, and ask a trusted adult for help when needed.",
  },
];

const warningSigns = [
  {
    title: "Acting While Angry",
    text: "A student is about to reply, post, comment, or message while upset, embarrassed, jealous, or pressured.",
  },
  {
    title: "Private Information",
    text: "The choice involves real names, photos, locations, passwords, addresses, schedules, school details, or private messages.",
  },
  {
    title: "Peer Pressure",
    text: "Friends are pushing the student to post, share, prank, test, download, or break a rule even though it feels wrong.",
  },
  {
    title: "Could Spread Further",
    text: "The message, screenshot, photo, or post could be saved, forwarded, copied, or seen by people beyond the intended group.",
  },
  {
    title: "Rule or Policy Concern",
    text: "The action may go against school rules, app terms, family expectations, classroom instructions, or technology-use policies.",
  },
  {
    title: "Trying to Hide It",
    text: "The student feels they need to hide the action from trusted adults, teachers, parents, guardians, or the person affected.",
  },
];

const scenarios = [
  {
    title: "The Angry Reply",
    situation:
      "A student receives a rude message and starts typing an angry response that includes insults and personal details.",
    warningSigns:
      "The student is reacting while upset, and the reply could make the conflict bigger or hurt someone's privacy.",
    riskyResponse:
      "Send the message immediately so the other person knows they are wrong.",
    smarterResponse:
      "Pause, do not send the angry reply, take a break, save evidence if needed, and ask a trusted adult if the situation continues.",
    whyItWorks:
      "Pausing prevents one mistake from becoming a bigger digital consequence. Trusted support can help students respond safely.",
  },
  {
    title: "The Screenshot Share",
    situation:
      "A student has a screenshot of a private group chat and wants to send it to more people because it seems interesting.",
    warningSigns:
      "The screenshot may include private messages, names, feelings, or personal details that were not meant to spread.",
    riskyResponse:
      "Forward the screenshot because everyone else will want to see it.",
    smarterResponse:
      "Do not spread the screenshot. If the message shows a safety concern, show a trusted adult instead of sharing it around.",
    whyItWorks:
      "Responsible digital choices protect privacy. Serious concerns should go to trusted adults, not become gossip.",
  },
  {
    title: "The Rule-Breaking Challenge",
    situation:
      "A group chat dares students to break a school device rule and post proof that they did it.",
    warningSigns:
      "The challenge involves peer pressure, rule-breaking, screenshots, and possible consequences at school or home.",
    riskyResponse:
      "Join the challenge so the group does not make fun of the student.",
    smarterResponse:
      "Do not participate, leave or mute the pressure if needed, and ask a trusted adult for help if the group keeps pushing.",
    whyItWorks:
      "Students do not have to follow unsafe group pressure. Choosing not to participate protects trust and avoids preventable consequences.",
  },
  {
    title: "The Mistake After Posting",
    situation:
      "A student posts a joke and later realizes it embarrassed someone and may have hurt their feelings.",
    warningSigns:
      "The post affected another person, and leaving it up could continue the harm.",
    riskyResponse:
      "Ignore it and hope nobody notices, or blame the other person for being upset.",
    smarterResponse:
      "Remove the post if possible, apologize respectfully, and ask a trusted adult for help if the situation becomes bigger.",
    whyItWorks:
      "Responsible digital citizenship includes repair steps. Mistakes can be handled better when students take responsibility early.",
  },
];

const actionSteps = [
  "Use a pause check before posting, replying, sharing, downloading, or joining a challenge.",
  "Ask: Is this safe, respectful, legal, accurate, and necessary?",
  "Think about who could see, save, forward, screenshot, or misunderstand the message later.",
  "Protect other people's privacy by not sharing photos, screenshots, messages, or personal details without permission.",
  "Step away from peer pressure that involves rule-breaking, embarrassment, unsafe testing, or risky online behavior.",
  "If a mistake happens, stop, take a repair step, and ask a trusted adult for help when needed.",
];

const reflectionQuestions = [
  "What is a digital consequence?",
  "Why should students pause before posting or replying online?",
  "How can screenshots or private messages spread farther than expected?",
  "Why is peer pressure risky when it involves online rules or other people's privacy?",
  "What repair steps can students take after making a digital mistake?",
];

const skillCheck = [
  {
    question:
      "A student is angry and wants to send a rude reply with personal details. What is the safer response?",
    choices: [
      "Send it quickly before changing their mind",
      "Pause, do not send it, take a break, and ask for help if needed",
      "Add more people to the conversation",
    ],
    answer: "Choice B",
    explanation:
      "Pausing helps prevent bigger conflict and protects privacy. Trusted adult support can help students respond safely.",
  },
  {
    question:
      "A student has a screenshot of a private chat. What should they think about before sharing it?",
    choices: [
      "Whether it could expose private information or hurt someone",
      "Whether the screenshot looks colorful",
      "Whether sending it will make the phone battery lower",
    ],
    answer: "Choice A",
    explanation:
      "Screenshots can spread private information. Students should not share private messages or personal details without permission.",
  },
  {
    question:
      "A group chat dares students to break a school device rule. What is the smarter choice?",
    choices: [
      "Join because everyone else is doing it",
      "Do not participate and ask a trusted adult for help if pressure continues",
      "Post proof to avoid being teased",
    ],
    answer: "Choice B",
    explanation:
      "Peer pressure can lead to digital consequences. Students can step away from unsafe or rule-breaking behavior.",
  },
  {
    question:
      "A student realizes a post hurt someone. What is a responsible repair step?",
    choices: [
      "Ignore it and blame the other person",
      "Delete everything secretly and pretend it never happened",
      "Remove the post if possible, apologize respectfully, and ask for help if needed",
    ],
    answer: "Choice C",
    explanation:
      "Repair steps help students take responsibility and reduce harm. Trusted adults can help when the situation is serious or confusing.",
  },
];

const checklist = [
  "I can explain what digital consequences are.",
  "I can pause before posting, replying, sharing, downloading, or joining online challenges.",
  "I can think about how a message, post, photo, or screenshot could spread.",
  "I can protect other people's privacy before sharing online.",
  "I can step away from peer pressure that breaks rules or creates risk.",
  "I know repair steps to take after a digital mistake.",
];

export default function ResponsibleChoicesAndDigitalConsequencesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Responsible Choices and Digital Consequences
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital citizenship means understanding that online choices can affect
          privacy, trust, safety, reputation, school rules, and relationships.
          This lesson teaches students to pause before acting online and to take
          responsible repair steps when mistakes happen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/ethical-hacking-vs-harmful-hacking"
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
            href="/junior/digital-citizenship-ethics-and-laws/review"
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
              Online choices can last longer than the moment.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sends a message while angry, shares a screenshot
              from a private chat, or joins a rule-breaking challenge because
              friends are watching. Digital choices can spread quickly, so
              responsible students pause before acting and get help when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Responsible digital choices protect privacy, trust, and safety.
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
              Do not post, share, test, or join online actions that could hurt people or break rules.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              share real private screenshots, expose personal information, join
              unsafe challenges, test real systems, or hide risky online
              behavior. When a choice feels serious, confusing, or pressured,
              pause and ask a trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Digital consequences come from what people post, share, click, and do online.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Every online action can have a result. A message can be saved, a
            screenshot can be forwarded, a post can be misunderstood, and a rule
            violation can affect trust at home, school, or in a community. This
            does not mean students should be afraid of technology. It means they
            should use it thoughtfully.
          </p>

          <p>
            Responsible digital citizens slow down before they act. They ask
            whether a choice is safe, respectful, legal, accurate, and necessary.
            They also think about other people's privacy and whether the action
            could spread beyond the original audience.
          </p>

          <p>
            Mistakes can happen online. A responsible response is to stop,
            avoid making the situation worse, take a repair step, and ask a
            trusted adult for help when needed. Digital citizenship is not about
            being perfect. It is about making safer choices and taking
            responsibility.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding digital consequences.
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
          Digital Consequence Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online choices can affect privacy, relationships, rules, and trust.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {consequenceSituations.map((item) => (
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
            Pause when an online choice could spread, hurt, or break trust.
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
          Responsible choices happen before and after online actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts, shares, replies, joins a challenge, or breaks a
              rule quickly because they feel angry, pressured, curious, or want
              attention.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, thinks about consequences, protects privacy,
              follows rules, steps away from pressure, and asks for trusted help
              when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responsible digital decisions using fake examples.
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
          Use these habits before and after important online choices.
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
          Before finishing Lesson 11.5, students should be able to say:
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
            Lesson 11.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 11.6 will review digital citizenship, ethics, rules,
            copyright, ethical cybersecurity, and responsible consequences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/ethical-hacking-vs-harmful-hacking"
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
              href="/junior/digital-citizenship-ethics-and-laws/review"
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