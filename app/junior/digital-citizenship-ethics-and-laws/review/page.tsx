import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonRecap = [
  {
    number: "11.1",
    title: "What Digital Citizenship Means",
    text: "Digital citizenship means using technology in ways that are safe, respectful, responsible, and helpful. Students learned that online choices affect themselves and others.",
  },
  {
    number: "11.2",
    title: "Online Rules, Terms, and School Policies",
    text: "Online tools, apps, games, websites, and school devices have rules. Students learned to follow age rules, community rules, classroom expectations, and school technology policies.",
  },
  {
    number: "11.3",
    title: "Copyright, Credit, and Creative Work",
    text: "Creative work belongs to people. Students learned to give credit, avoid copying, use approved resources, and respect the effort behind writing, images, videos, music, code, and designs.",
  },
  {
    number: "11.4",
    title: "Ethical Hacking vs Harmful Hacking",
    text: "Ethical cybersecurity work requires permission, rules, safety, and a helpful purpose. Students learned that testing systems without permission is not responsible or allowed.",
  },
  {
    number: "11.5",
    title: "Responsible Choices and Digital Consequences",
    text: "Online choices can have real consequences for privacy, trust, school, friendships, accounts, and reputation. Students learned to pause before acting and ask for help when unsure.",
  },
];

const reviewGoals = [
  "Explain what digital citizenship means",
  "Recognize why online rules, terms, and school policies matter",
  "Understand why copyright, credit, and creative work should be respected",
  "Describe the difference between ethical cybersecurity learning and harmful hacking",
  "Identify responsible choices before posting, sharing, copying, testing, or reacting online",
  "Know when to ask a trusted adult before making a risky digital decision",
];

const keyIdeas = [
  {
    title: "Digital Choices Affect People",
    text: "Messages, posts, comments, shares, searches, downloads, and account actions can affect privacy, safety, trust, friendships, and school communities.",
  },
  {
    title: "Rules Create Safer Spaces",
    text: "School policies, app rules, age rules, classroom expectations, and platform terms help people understand what is allowed and what is not allowed.",
  },
  {
    title: "Credit Shows Respect",
    text: "Giving credit for creative work shows honesty and respect for the person who made the writing, image, video, music, code, or idea.",
  },
  {
    title: "Permission Matters",
    text: "Responsible cybersecurity learning happens only in approved labs, school activities, competitions, or systems where clear permission has been given.",
  },
  {
    title: "Consequences Can Be Real",
    text: "A quick online choice can create problems later if it hurts someone, shares private information, breaks rules, copies work, or damages trust.",
  },
  {
    title: "Trusted Help Is Smart",
    text: "When students are unsure about a rule, post, tool, test, copied work, or online conflict, asking a trusted adult is safer than guessing.",
  },
];

const reviewScenarios = [
  {
    title: "The Copied Image Project",
    situation:
      "A student finds a cool image online and wants to use it in a school project without saying where it came from.",
    warningSigns:
      "The student is using someone else's creative work without credit or checking whether it is allowed.",
    riskyResponse:
      "Paste the image into the project and pretend it was easy to find or create.",
    saferResponse:
      "Use teacher-approved sources, follow project directions, and give credit for the image when required.",
    lesson:
      "Respecting copyright and giving credit shows honesty and protects creative work.",
  },
  {
    title: "The School Device Shortcut",
    situation:
      "A student wants to change settings on a school device to get around a classroom restriction.",
    warningSigns:
      "The student is thinking about changing a school device without permission.",
    riskyResponse:
      "Try to change settings because it seems harmless.",
    saferResponse:
      "Do not change restricted settings. Ask a teacher or school tech staff if something is needed for class.",
    lesson:
      "School devices have rules. Responsible students follow policies and ask for approved help.",
  },
  {
    title: "The Cybersecurity Curiosity",
    situation:
      "A student learns about cybersecurity and wants to test a real website to see if it has a weakness.",
    warningSigns:
      "The student does not have clear permission to test the real website.",
    riskyResponse:
      "Try a few tests to see what happens.",
    saferResponse:
      "Do not test real websites or systems. Use approved practice labs, teacher-guided activities, or legal competitions only.",
    lesson:
      "Ethical cybersecurity requires permission, rules, and a safe learning environment.",
  },
  {
    title: "The Angry Comment",
    situation:
      "A student gets upset during an online discussion and wants to post an angry comment right away.",
    warningSigns:
      "The student is reacting quickly while upset, and the comment could hurt someone or create consequences.",
    riskyResponse:
      "Post the comment immediately because the student feels angry.",
    saferResponse:
      "Pause, step away, reread the message later, and ask a trusted adult if the situation feels serious.",
    lesson:
      "Responsible digital citizens slow down before posting or reacting online.",
  },
];

const responsibleActions = [
  "Pause before posting, sharing, copying, downloading, testing, or reacting online.",
  "Follow school technology policies and classroom expectations.",
  "Use approved sources for school projects and give credit when required.",
  "Do not test real websites, accounts, apps, devices, or networks without permission.",
  "Think about privacy, respect, safety, and consequences before making digital choices.",
  "Ask a trusted adult when a rule, source, post, tool, or situation feels unclear.",
];

const reflectionQuestions = [
  "What does digital citizenship mean?",
  "Why should students follow online rules and school technology policies?",
  "Why is giving credit for creative work important?",
  "What makes cybersecurity learning ethical instead of harmful?",
  "How can students pause before making a digital choice with consequences?",
];

const finalCheck = [
  {
    question:
      "A student wants to use an online image in a school project. What is the safer response?",
    choices: [
      "Use it without credit because it was easy to find",
      "Follow the teacher's directions, use approved sources, and give credit when required",
      "Remove the creator's name so the project looks cleaner",
    ],
    answer: "Choice B",
    explanation:
      "Students should respect creative work by following project rules, using approved sources, and giving credit when required.",
  },
  {
    question:
      "A student wants to change restricted settings on a school device. What should they do?",
    choices: [
      "Change the settings quickly",
      "Ask a teacher or school tech staff for approved help",
      "Tell friends how to change the setting too",
    ],
    answer: "Choice B",
    explanation:
      "School devices have policies and restrictions for a reason. Students should ask for approved help instead of changing settings without permission.",
  },
  {
    question:
      "What is required for ethical cybersecurity testing?",
    choices: [
      "Clear permission and a safe approved environment",
      "Curiosity and a real website",
      "A friend saying it is probably okay",
    ],
    answer: "Choice A",
    explanation:
      "Ethical cybersecurity work requires permission, rules, and safe approved spaces such as labs, classes, or competitions.",
  },
  {
    question:
      "A student is angry and wants to post a harsh comment immediately. What is the smarter choice?",
    choices: [
      "Post it before changing their mind",
      "Pause, step away, and ask for help if the situation feels serious",
      "Make the comment more embarrassing so others notice",
    ],
    answer: "Choice B",
    explanation:
      "Pausing before reacting online helps prevent hurtful choices, conflict, and consequences.",
  },
  {
    question:
      "What is a strong Module 11 habit?",
    choices: [
      "Think about safety, respect, permission, credit, rules, and consequences before acting online",
      "Assume online actions do not matter",
      "Ignore rules when a shortcut seems faster",
    ],
    answer: "Choice A",
    explanation:
      "Digital citizenship means making safe, legal, respectful, and ethical choices online.",
  },
];

const checklist = [
  "I can explain what digital citizenship means.",
  "I can recognize why online rules, terms, and school policies matter.",
  "I can respect copyright, credit, and creative work.",
  "I can explain why cybersecurity testing needs permission.",
  "I can think about digital consequences before posting, sharing, copying, or reacting.",
  "I know when to ask a trusted adult before making a risky digital choice.",
];

export default function DigitalCitizenshipEthicsAndLawsReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Digital Citizenship, Ethics, and Laws Review
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This review helps students practice the main ideas from Module 11:
          digital citizenship, online rules, school policies, copyright, credit,
          ethical cybersecurity, and responsible digital consequences. The goal
          is to help students make online choices that are safe, legal,
          respectful, and ethical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/responsible-choices-and-digital-consequences"
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
            href="/junior/junior-cyber-safety-capstone"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            View Next Module
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
          <p className="text-cyan-300 font-semibold mb-3">Module Big Question</p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students make online choices that are safe, legal,
              respectful, and ethical?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Students can make better digital choices by pausing before they
              act, respecting rules, giving credit, protecting privacy, getting
              permission, avoiding harmful testing, and asking trusted adults
              when something feels unclear or risky.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Review Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this review, students should be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewGoals.map((goal) => (
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
              Do not test real systems without permission.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real websites, accounts, apps, devices, school systems,
              networks, or security settings without clear permission. Ethical
              cybersecurity learning happens in approved labs, classes,
              competitions, and guided practice spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Lesson Recap</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review what each Module 11 lesson covered.
        </h2>

        <div className="space-y-6">
          {lessonRecap.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-cyan-300 font-semibold mb-2">
                Lesson {lesson.number}
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {lesson.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{lesson.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Ideas</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            These ideas help students become responsible digital citizens.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyIdeas.map((idea) => (
              <div
                key={idea.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {idea.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{idea.text}</p>
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
          Responsible digital citizens think before they act online.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student ignores rules, copies creative work without credit,
              changes settings without permission, tests real systems, posts
              while angry, or assumes online choices do not have consequences.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, follows rules, gives credit, gets permission,
              respects others, protects privacy, uses approved learning spaces,
              and asks a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Review</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responsible digital citizenship using fake examples.
          </h2>

          <div className="space-y-6">
            {reviewScenarios.map((scenario) => (
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
                      Safer Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.saferResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Review Lesson
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Responsible Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these steps before making important digital choices.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {responsibleActions.map((step) => (
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
            <p className="text-cyan-300 font-semibold mb-3">
              Final Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {finalCheck.map((item, index) => (
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
          Before finishing Module 11, students should be able to say:
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
            Module 11 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Module 12 will help students combine everything they learned
            into a Junior Cyber Safety Capstone with real-life safety plans,
            scenario challenges, reflection, and final review.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/responsible-choices-and-digital-consequences"
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
              href="/junior/junior-cyber-safety-capstone"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              View Next Module
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