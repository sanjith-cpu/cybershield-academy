import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what digital citizenship means",
  "Understand that online choices can affect safety, learning, relationships, and reputation",
  "Recognize that respectful, legal, and ethical behavior matters online",
  "Practice safer choices before posting, sharing, copying, replying, or using digital tools",
  "Know when to ask a trusted adult before making an online choice that feels confusing, risky, or unfair",
];

const vocabulary = [
  {
    term: "Digital Citizenship",
    definition:
      "Using technology, online spaces, apps, devices, and accounts in ways that are safe, respectful, responsible, legal, and ethical.",
  },
  {
    term: "Responsibility",
    definition:
      "Thinking about how an online choice could affect yourself, other people, school, devices, accounts, or your future reputation.",
  },
  {
    term: "Respect",
    definition:
      "Treating people online with care, even when you disagree, feel frustrated, or are communicating through messages, posts, comments, or games.",
  },
  {
    term: "Ethics",
    definition:
      "Thinking about what is right, fair, honest, and safe, not just what is possible to do with technology.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of posts, comments, messages, accounts, photos, usernames, and online actions that can affect how others see someone.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or school staff member who can help students make safe and responsible online decisions.",
  },
];

const citizenshipSituations = [
  {
    title: "Posting or Commenting",
    explanation:
      "A student wants to post a joke, reply to a comment, or react to something online, but the message could hurt someone or be misunderstood.",
    saferChoice:
      "Pause and ask whether the post is respectful, necessary, safe, and something the student would be comfortable explaining later.",
  },
  {
    title: "Using Someone Else's Work",
    explanation:
      "A student finds a picture, paragraph, video, answer, or project idea online and wants to use it for school or a post.",
    saferChoice:
      "Give credit, follow school rules, use original work when required, and ask a teacher when unsure.",
  },
  {
    title: "Online Conflict",
    explanation:
      "A student is upset during a chat, game, comment thread, or group message and feels tempted to respond harshly.",
    saferChoice:
      "Step away, avoid escalating, save important information if needed, and ask a trusted adult for help when the situation feels unsafe.",
  },
  {
    title: "Rules and Permissions",
    explanation:
      "A student wants to use an app, website, school device, account, image, or online tool but is not sure what the rules allow.",
    saferChoice:
      "Check the rules, use school-approved tools, respect permissions, and ask a trusted adult before guessing.",
  },
];

const warningSigns = [
  {
    title: "It Could Hurt Someone",
    text: "A post, message, joke, screenshot, or comment could embarrass, pressure, insult, exclude, or target another person.",
  },
  {
    title: "It Uses Work Without Credit",
    text: "A student copies words, images, answers, videos, code, or ideas without permission, credit, or teacher guidance.",
  },
  {
    title: "It Breaks a Rule",
    text: "The choice may go against school rules, app rules, family expectations, classroom directions, or website terms.",
  },
  {
    title: "It Feels Secretive",
    text: "Someone asks the student to hide a message, account, screenshot, download, login, or online action from trusted adults.",
  },
  {
    title: "It Could Damage Reputation",
    text: "The choice could make someone look unsafe, dishonest, unkind, disrespectful, or irresponsible later.",
  },
  {
    title: "It Feels Unfair or Dishonest",
    text: "The student knows the choice might not be honest, respectful, legal, or fair, even if it seems easy to do online.",
  },
];

const scenarios = [
  {
    title: "The Mean Joke Comment",
    situation:
      "A student sees classmates joking about someone in a comment thread and feels tempted to add a funny but hurtful reply.",
    warningSigns:
      "The comment could embarrass or target another person, even if others are laughing.",
    riskyResponse:
      "Join in because everyone else is doing it and the comment might get likes.",
    smarterResponse:
      "Do not add to the hurtful thread. Step away, choose a respectful response, or ask a trusted adult if someone is being targeted.",
    whyItWorks:
      "Digital citizenship means thinking about how online actions affect other people. Respectful choices can prevent harm and escalation.",
  },
  {
    title: "The Copied Homework Answer",
    situation:
      "A student finds a full answer online and wants to copy it into a school assignment because it saves time.",
    warningSigns:
      "The choice uses someone else's work without doing the learning or giving proper credit.",
    riskyResponse:
      "Copy the answer and turn it in as original work.",
    smarterResponse:
      "Use the source for understanding, write original work, give credit when allowed, and ask the teacher what is acceptable.",
    whyItWorks:
      "Responsible digital citizens use online information honestly and follow school expectations for credit and originality.",
  },
  {
    title: "The Screenshot Share",
    situation:
      "A student has a screenshot of a private message and is thinking about sharing it in a group chat.",
    warningSigns:
      "The screenshot could expose someone, create drama, or spread private information without permission.",
    riskyResponse:
      "Send it to the group because it seems interesting or dramatic.",
    smarterResponse:
      "Do not spread it. If the message shows a safety concern, show it to a trusted adult instead of sharing it widely.",
    whyItWorks:
      "Digital citizenship includes privacy, respect, and safe reporting. Sensitive information should not be used for drama.",
  },
  {
    title: "The Rule-Confusing App",
    situation:
      "A student wants to use a new online tool for a school project, but they are not sure if the tool is allowed or safe for class.",
    warningSigns:
      "The student is unsure about school rules, permissions, privacy, or whether the tool is approved.",
    riskyResponse:
      "Use the tool anyway and hope no one notices.",
    smarterResponse:
      "Ask a teacher or trusted adult, check class directions, and use an approved tool if the answer is unclear.",
    whyItWorks:
      "Checking rules before using digital tools helps students stay safe, fair, honest, and responsible.",
  },
];

const actionSteps = [
  "Pause before posting, replying, sharing, copying, downloading, or using a new online tool.",
  "Ask: Is this safe, respectful, honest, fair, legal, and allowed by school or family rules?",
  "Think about how the choice could affect another person, your digital footprint, or your reputation.",
  "Give credit when using someone else's work and follow teacher directions for assignments.",
  "Avoid joining online drama, spreading private information, or responding while angry.",
  "Ask a trusted adult when an online choice feels confusing, risky, unfair, secretive, or unsafe.",
];

const reflectionQuestions = [
  "What does digital citizenship mean?",
  "Why do online choices still count as real choices?",
  "How can respect change the way students post, comment, or message?",
  "Why is it important to give credit for someone else's work?",
  "Who can students ask for help when they are unsure about an online rule or choice?",
];

const skillCheck = [
  {
    question:
      "A student is about to post a joke that could embarrass someone. What is the safer response?",
    choices: [
      "Post it quickly because jokes do not matter online",
      "Pause and choose not to post something that could hurt or embarrass someone",
      "Ask other people to make the joke worse",
    ],
    answer: "Choice B",
    explanation:
      "Digital citizenship includes respect. Students should pause before posting something that could hurt, embarrass, or target someone.",
  },
  {
    question:
      "A student finds a full homework answer online. What is the responsible choice?",
    choices: [
      "Copy it and turn it in as original work",
      "Use it honestly for understanding, follow teacher rules, and give credit when allowed",
      "Share it with everyone so nobody has to do the work",
    ],
    answer: "Choice B",
    explanation:
      "Responsible digital citizens use online information honestly and follow school expectations for original work and credit.",
  },
  {
    question:
      "A student wants to share a screenshot of a private message in a group chat. What should they consider first?",
    choices: [
      "Whether it could spread private information or create harm",
      "Whether the screenshot will get attention",
      "Whether the group chat has enough people in it",
    ],
    answer: "Choice A",
    explanation:
      "Sharing screenshots can affect privacy and reputation. If there is a safety concern, students should show a trusted adult instead of spreading it.",
  },
  {
    question:
      "What is a good digital citizenship habit?",
    choices: [
      "Think about safety, respect, honesty, fairness, and rules before acting online",
      "Do anything online as long as it is possible",
      "Ignore school rules when using websites or apps",
    ],
    answer: "Choice A",
    explanation:
      "Good digital citizenship means making online choices that are safe, respectful, responsible, legal, and ethical.",
  },
];

const checklist = [
  "I can explain what digital citizenship means.",
  "I can recognize that online choices can affect people, school, safety, and reputation.",
  "I can pause before posting, replying, sharing, copying, or using online tools.",
  "I can choose respect during online communication and conflict.",
  "I can use online information honestly and give credit when needed.",
  "I know when to ask a trusted adult about confusing, risky, unfair, or unsafe online choices.",
];

export default function WhatDigitalCitizenshipMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Digital Citizenship Means
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital citizenship means using technology and online spaces in ways
          that are safe, respectful, responsible, legal, and ethical. This lesson
          helps students think before posting, sharing, copying, replying, or
          using digital tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 11
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws/online-rules-terms-and-school-policies"
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
              Online choices are still real choices.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student posts a comment, shares a screenshot, copies an
              answer, uses a new app, or joins an online argument. Digital
              citizenship helps the student pause and think about safety,
              respect, honesty, fairness, rules, and consequences before acting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Digital citizenship helps students make better choices online.
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
              Do not use real people, private information, or real conflicts for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              post private information, expose screenshots, copy schoolwork,
              break rules, target people, or test school systems for practice.
              Ask a trusted adult when an online choice feels uncertain.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Digital citizenship means using technology with responsibility and respect.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Students use technology for school, games, videos, messages,
            research, creativity, and friendships. Every online space has choices:
            what to post, what to share, how to reply, what tools to use, and how
            to treat other people.
          </p>

          <p>
            Digital citizenship means remembering that online actions can affect
            real people. A message can encourage or hurt someone. A screenshot
            can protect evidence or spread private information. A copied answer
            can seem easy but may be dishonest. A post can become part of a
            student's digital footprint.
          </p>

          <p>
            A responsible digital citizen pauses before acting. Students should
            ask whether a choice is safe, respectful, honest, fair, legal, and
            allowed by school or family rules. When the answer is unclear, it is
            safer to ask a trusted adult instead of guessing.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding digital citizenship.
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
          Digital Citizenship Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online spaces can create different kinds of responsibility decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {citizenshipSituations.map((item) => (
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
            Digital citizenship means noticing when an online choice deserves a pause.
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
          Responsible online choices protect people and reputation.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts while angry, shares private screenshots, copies
              work without credit, ignores rules, or treats online actions like
              they do not have real consequences.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, thinks about safety and respect, follows
              school and family rules, gives credit, avoids drama, and asks a
              trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice digital citizenship decisions using fake examples.
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
          Use these habits before making online choices.
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
          Before finishing Lesson 11.1, students should be able to say:
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
            Lesson 11.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 11.2 will explain online rules, terms, and school
            policies in a student-friendly way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 11
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws/online-rules-terms-and-school-policies"
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