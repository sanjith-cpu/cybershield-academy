import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why saving evidence can help trusted adults understand what happened",
  "Identify safer ways to document hurtful or unsafe online behavior",
  "Understand why students should not argue back or make the situation bigger",
  "Practice reporting concerns through safe school, app, or adult-supported steps",
  "Know when a situation should be shared with a trusted adult right away",
];

const vocabulary = [
  {
    term: "Evidence",
    definition:
      "Information that helps show what happened, such as a screenshot, message, username, date, time, or link.",
  },
  {
    term: "Screenshot",
    definition:
      "A picture of what is shown on a screen. It can help a trusted adult see a message or post before it is deleted.",
  },
  {
    term: "Report",
    definition:
      "A tool or process used to tell an app, website, school, or trusted adult about unsafe or harmful behavior.",
  },
  {
    term: "Block",
    definition:
      "A safety setting that can stop another account from contacting or viewing someone, depending on the app.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or school staff member who can help a student handle an online problem safely.",
  },
  {
    term: "Context",
    definition:
      "The details around a situation, such as what happened before, who was involved, when it happened, and where it happened online.",
  },
];

const evidenceSituations = [
  {
    title: "Hurtful Message",
    explanation:
      "A student receives a mean or threatening message in a chat, direct message, or group conversation.",
    saferChoice:
      "Do not reply with anger. Save the message if safe, then show a trusted adult.",
  },
  {
    title: "Deleted Post Concern",
    explanation:
      "A harmful post appears online, but the student worries it might be deleted before an adult can see it.",
    saferChoice:
      "Take a screenshot if allowed and safe, write down basic details, and ask for help quickly.",
  },
  {
    title: "Repeated Comments",
    explanation:
      "The same person keeps leaving rude comments, unwanted messages, or embarrassing jokes.",
    saferChoice:
      "Save examples, avoid arguing back, and report the pattern to a trusted adult or school staff member.",
  },
  {
    title: "App Report Button",
    explanation:
      "An app or website has a report option, but the student is not sure what to choose or what to write.",
    saferChoice:
      "Ask a trusted adult to help use the report tool correctly and calmly.",
  },
];

const warningSigns = [
  {
    title: "Repeated Behavior",
    text: "The problem keeps happening after the student has tried to avoid it or asked for it to stop.",
  },
  {
    title: "Threats or Fear",
    text: "A message makes someone feel unsafe, scared, pressured, or worried about what might happen next.",
  },
  {
    title: "Private Information Shared",
    text: "Someone shares or threatens to share personal details, photos, screenshots, school information, or account information.",
  },
  {
    title: "Group Pile-On",
    text: "Multiple people join in, laugh, forward messages, or make the situation spread wider.",
  },
  {
    title: "Pressure to Stay Silent",
    text: "Someone tells the student not to tell adults, not to report, or not to save what happened.",
  },
  {
    title: "Student Feels Stuck",
    text: "The student is unsure what to do, feels overwhelmed, or cannot solve the situation safely alone.",
  },
];

const scenarios = [
  {
    title: "The Mean Group Chat Message",
    situation:
      "A student sees a hurtful message about them in a group chat. Other students are reacting with jokes and emojis.",
    warningSigns:
      "The message is hurtful, public within the group, and other people are helping it spread.",
    riskyResponse:
      "Reply with insults, start a bigger argument, or delete everything before asking for help.",
    smarterResponse:
      "Save the message if safe, do not argue back, and show a trusted adult who can help decide what to do next.",
    whyItWorks:
      "Saving evidence helps adults understand what happened, while avoiding an angry reply can keep the situation from getting worse.",
  },
  {
    title: "The Disappearing Post",
    situation:
      "A student notices a hurtful post online and thinks the person might delete it soon.",
    warningSigns:
      "The post may disappear, and the student may need help explaining what happened.",
    riskyResponse:
      "Comment angrily on the post or share it with more students to prove a point.",
    smarterResponse:
      "Take a screenshot if safe and allowed, record basic details, and bring it to a trusted adult without spreading it further.",
    whyItWorks:
      "A screenshot and basic details can help adults review the problem without making the harmful post reach more people.",
  },
  {
    title: "The Report Button Confusion",
    situation:
      "A student wants to report a harmful account, but the app asks for a reason and the student is not sure what to select.",
    warningSigns:
      "The student is unsure and may accidentally choose the wrong option or leave out important context.",
    riskyResponse:
      "Randomly click report options or give up because the process feels confusing.",
    smarterResponse:
      "Ask a parent, guardian, teacher, or counselor to help use the report tool calmly and accurately.",
    whyItWorks:
      "Trusted adults can help students report clearly, save useful details, and choose safer next steps.",
  },
  {
    title: "The Pressure to Stay Quiet",
    situation:
      "Someone sends a message saying not to tell anyone about what happened in a chat.",
    warningSigns:
      "Pressure to stay silent can be a sign that adult help is needed.",
    riskyResponse:
      "Stay quiet because the person said not to tell anyone.",
    smarterResponse:
      "Save the message if safe and tell a trusted adult, especially if the student feels worried or unsafe.",
    whyItWorks:
      "Students should not have to handle unsafe pressure alone. Trusted adults can help protect the student and decide what to do next.",
  },
];

const actionSteps = [
  "Pause before replying to hurtful or unsafe messages.",
  "Save useful evidence when it is safe, allowed, and appropriate.",
  "Record basic details such as the app, date, time, username, and what happened.",
  "Do not spread harmful posts or screenshots to more students.",
  "Use block or report tools with trusted adult support when needed.",
  "Tell a trusted adult quickly when the situation feels unsafe, repeated, private, or overwhelming.",
];

const reflectionQuestions = [
  "Why can saving evidence help when reporting an online problem?",
  "Why should students avoid replying with anger during digital conflict?",
  "What kinds of details can help a trusted adult understand what happened?",
  "Why should harmful screenshots not be spread to more people?",
  "Who can help a student report a serious online concern safely?",
];

const skillCheck = [
  {
    question:
      "A student receives a hurtful message in a group chat. What is the safer first response?",
    choices: [
      "Reply with a mean message back",
      "Save the message if safe and show a trusted adult",
      "Send the screenshot to everyone at school",
    ],
    answer: "Choice B",
    explanation:
      "Saving the message and showing a trusted adult can help the student get support without making the conflict bigger.",
  },
  {
    question:
      "Why is it risky to spread screenshots of hurtful posts to classmates?",
    choices: [
      "It can make the harmful content reach more people",
      "It always solves the problem immediately",
      "It makes the post disappear faster",
    ],
    answer: "Choice A",
    explanation:
      "Sharing harmful screenshots widely can make the problem bigger. It is safer to share evidence only with trusted adults or proper reporting channels.",
  },
  {
    question:
      "A report form inside an app feels confusing. What should the student do?",
    choices: [
      "Guess randomly and click anything",
      "Ignore the problem forever",
      "Ask a trusted adult to help report it clearly",
    ],
    answer: "Choice C",
    explanation:
      "A trusted adult can help the student choose the right reporting option and include helpful context.",
  },
  {
    question:
      "Which detail can help when explaining an online problem to an adult?",
    choices: [
      "The app or website where it happened",
      "A made-up story to make it sound bigger",
      "A rumor from someone who was not involved",
    ],
    answer: "Choice A",
    explanation:
      "The app or website, date, time, username, and what happened can help adults understand the situation accurately.",
  },
];

const checklist = [
  "I can explain why saving evidence can help trusted adults.",
  "I can identify safer ways to document online problems.",
  "I can avoid arguing back when messages are hurtful or unsafe.",
  "I can explain why harmful screenshots should not be spread.",
  "I can ask a trusted adult for help using report or block tools.",
  "I know when an online problem should be reported quickly.",
];

export default function SavingEvidenceAndReportingSafelyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Saving Evidence and Reporting Safely
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Saving evidence and reporting safely helps students get support when
          online behavior becomes hurtful, repeated, private, or unsafe. This
          lesson teaches students how to pause, document carefully, avoid
          spreading harm, and ask trusted adults for help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/bystanders-upstanders-and-safe-support"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 7
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/asking-trusted-adults-for-help"
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
              Reporting is easier when students save the right information.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a hurtful message, but the message is
              deleted before a teacher or parent sees it. Saving evidence safely
              can help trusted adults understand what happened and respond in a
              fair, careful way.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Evidence should help solve the problem, not spread the problem.
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
              Do not investigate, argue, or spread harmful content.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test reporting systems for fun, send harmful screenshots to more
              classmates, argue back to prove a point, or handle serious online
              problems alone. Trusted adult help is the safer path.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Safe reporting means collecting helpful details and getting support.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online problems can be hard to explain if messages are deleted,
            usernames change, or different people remember the situation in
            different ways. Evidence can help trusted adults see what happened
            instead of guessing.
          </p>

          <p>
            Useful evidence can include a screenshot, the app or website name,
            the date and time, the username involved, and a short explanation of
            what happened. Students should only save what is needed and should
            avoid forwarding harmful content to more people.
          </p>

          <p>
            Reporting safely also means choosing the right support. A student
            may need help from a parent, guardian, teacher, counselor, coach,
            school staff member, or the app report tool. When a situation feels
            unsafe, repeated, private, or overwhelming, students should get help
            quickly instead of trying to handle it alone.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for saving evidence and reporting safely.
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
          Evidence Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different online problems may need different kinds of support.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {evidenceSituations.map((item) => (
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
            These clues mean students should get help instead of handling it alone.
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
          Evidence should be shared with helpers, not used to fuel drama.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student argues back, forwards screenshots to classmates, makes
              public posts about the conflict, or deletes everything before
              asking for help.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student saves helpful details, avoids making the conflict
              bigger, uses report or block tools with support, and shows a
              trusted adult what happened.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer reporting decisions using fake examples.
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
          Use these steps when an online problem needs help.
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
          Before finishing Lesson 7.4, students should be able to say:
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
            Lesson 7.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 7.5 will explain how students can ask trusted
            adults for help when online behavior becomes hurtful, stressful, or
            unsafe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/bystanders-upstanders-and-safe-support"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 7
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/asking-trusted-adults-for-help"
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