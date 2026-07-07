import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatYouWillLearn = [
  "Practice choosing safer online actions in everyday situations.",
  "Review how to pause before clicking, posting, sharing, replying, or downloading.",
  "Compare safe and unsafe choices using fake classroom scenarios.",
  "Know when to ask a trusted adult for help.",
];

const vocabulary = [
  {
    term: "Scenario",
    meaning:
      "A practice situation used for learning. In CyberShield Kids, scenarios should be fake and safe.",
  },
  {
    term: "Safe choice",
    meaning:
      "A choice that protects privacy, avoids rushing, uses kindness, and asks for help when needed.",
  },
  {
    term: "Unsafe choice",
    meaning:
      "A choice that could cause problems, such as clicking too quickly, sharing private information, spreading screenshots, or keeping unsafe things secret.",
  },
  {
    term: "Warning sign",
    meaning:
      "A clue that something may be unsafe, such as urgency, secrecy, unknown senders, private information requests, or too-good-to-be-true offers.",
  },
  {
    term: "Pause",
    meaning:
      "Stopping to think before making an online choice.",
  },
];

const scenarioRules = [
  "Use fake examples only.",
  "Do not use real names, real screenshots, real private messages, or real conflicts.",
  "Do not type real passwords or account details.",
  "Do not click real suspicious links.",
  "Ask a trusted adult when something feels strange, unsafe, embarrassing, secret, scary, confusing, or urgent.",
  "Choose the action that protects privacy, kindness, and safety.",
];

const examples = [
  {
    label: "Safer choice",
    text: "A student sees a fake prize message and asks a trusted adult before clicking anything.",
  },
  {
    label: "Unsafe choice",
    text: "A student shares a screenshot because other people in the group chat are sharing it too.",
  },
  {
    label: "Safer choice",
    text: "A student pauses before posting a photo and asks permission from the people in it.",
  },
  {
    label: "Unsafe choice",
    text: "A student types a real password into a practice activity instead of using a fake example.",
  },
  {
    label: "Safer choice",
    text: "A student sees a mean comment and chooses not to add another mean reply.",
  },
  {
    label: "Unsafe choice",
    text: "A student keeps a scary online message secret because the message told them not to tell anyone.",
  },
];

const scenarios = [
  {
    title: "Scenario 1: The Fake Prize",
    situation:
      "A student sees a message that says they won a free game reward. The message says they must click quickly.",
    unsafe:
      "Clicking right away because the message sounds exciting and urgent.",
    safer:
      "Pause and ask a trusted adult before clicking. Urgent prize messages can be fake or unsafe.",
  },
  {
    title: "Scenario 2: The Password Practice Box",
    situation:
      "A classroom activity asks students to practice making a strong password.",
    unsafe:
      "Typing a real password that the student uses for an account.",
    safer:
      "Use a fake practice example only. Never type real passwords in practice activities.",
  },
  {
    title: "Scenario 3: The Group Photo",
    situation:
      "A student wants to post a group photo from a school activity.",
    unsafe:
      "Posting it immediately without asking anyone in the photo.",
    safer:
      "Pause and ask permission before sharing photos or information about other people.",
  },
  {
    title: "Scenario 4: The Mean Group Chat",
    situation:
      "A group chat starts using mean words about someone.",
    unsafe:
      "Adding another mean comment because everyone else is doing it.",
    safer:
      "Do not add mean words. Pause, leave the situation if needed, and ask a trusted adult for help.",
  },
  {
    title: "Scenario 5: The Spreading Screenshot",
    situation:
      "A screenshot of a private message is being shared in a chat.",
    unsafe:
      "Forwarding the screenshot to more people.",
    safer:
      "Do not spread it. Ask a trusted adult what to do next.",
  },
  {
    title: "Scenario 6: The Secret Message",
    situation:
      "A message tells a student not to tell a parent, teacher, or trusted adult.",
    unsafe:
      "Keeping the message secret because it said not to tell anyone.",
    safer:
      "Tell a trusted adult right away. Unsafe online problems should not stay secret.",
  },
];

const realLifeSteps = [
  "Pause before making an online choice.",
  "Look for warning signs like urgency, secrecy, private information requests, or unknown senders.",
  "Protect private information, passwords, locations, school names, and family details.",
  "Use kind words in games, chats, comments, posts, and messages.",
  "Ask permission before sharing photos or information about another person.",
  "Ask a trusted adult when the safest choice is not clear.",
];

const practiceQuestions = [
  {
    question:
      "A fake message says, “Click now or you will lose your prize.” What is the safer choice?",
    answer:
      "Pause and ask a trusted adult before clicking. Messages that rush people can be unsafe.",
  },
  {
    question:
      "A student wants to use a real password in a lesson because they think they will remember it better. Is that safe?",
    answer:
      "No. Students should use fake practice examples only and never type real passwords in classroom activities.",
  },
  {
    question:
      "A group chat is becoming mean. What is a safer choice than joining in?",
    answer:
      "The student should avoid adding mean words, pause, and ask a trusted adult for help if the chat feels hurtful or unsafe.",
  },
  {
    question:
      "A screenshot is spreading. What should a student avoid doing?",
    answer:
      "They should avoid forwarding or reposting it. The safer choice is to stop spreading it and ask a trusted adult.",
  },
  {
    question:
      "A student is unsure whether a post includes private information. What should they do?",
    answer:
      "They should pause and ask a trusted adult before posting or sharing.",
  },
];

const reviewChecklist = [
  "I can compare safer and unsafe online choices.",
  "I can pause before clicking, posting, sharing, replying, or downloading.",
  "I can spot warning signs like urgency, secrecy, and private information requests.",
  "I know not to spread screenshots or private messages.",
  "I know not to type real passwords in practice activities.",
  "I can use kind words online.",
  "I know to ask a trusted adult when something feels unsafe, confusing, scary, embarrassing, secret, or urgent.",
];

export default function KidsSafeChoicesScenariosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6 • Lesson 6.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Safe Choices Scenarios
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students practice choosing safer online actions
              using fake classroom scenarios. Students review how to pause,
              protect private information, use kind words, avoid unsafe choices,
              and ask trusted adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/trusted-adult-practice"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids/cyber-safety-review/final-review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                What You Will Learn
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this lesson, students should be able to:
              </h2>

              <div className="space-y-3">
                {whatYouWillLearn.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Scenarios must stay fake and safe.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Do not use real passwords, real private information, real
                screenshots, real messages, real names, real school details,
                real account information, or real online conflicts in practice
                activities. Use made-up examples only.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Simple Explanation
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safer choices usually start with a pause.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Online choices can happen quickly. A student might see a strange
                message, a mean comment, a screenshot, a photo, or a link that
                feels urgent. Safe choices usually begin with pausing. Pausing
                gives students time to think about privacy, kindness, permission,
                warning signs, and whether a trusted adult should help.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {scenarioRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Key Vocabulary
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Words to remember
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabulary.map((word) => (
                <div
                  key={word.term}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                    {word.term}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {word.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Compare the choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice noticing which choice protects privacy, kindness, and
                safety.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((example) => (
                <div
                  key={example.text}
                  className={`rounded-3xl border p-6 ${
                    example.label === "Safer choice"
                      ? "border-emerald-500/30 bg-emerald-950/20"
                      : "border-red-500/30 bg-red-950/20"
                  }`}
                >
                  <h3
                    className={`mb-3 text-xl font-bold ${
                      example.label === "Safer choice"
                        ? "text-emerald-200"
                        : "text-red-200"
                    }`}
                  >
                    {example.label}
                  </h3>

                  <p className="leading-relaxed text-slate-200">
                    {example.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Scenario Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Choose the safer next step.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Each scenario is made up for learning. Students should compare
                the unsafe choice with the safer choice.
              </p>
            </div>

            <div className="space-y-6">
              {scenarios.map((scenario) => (
                <div
                  key={scenario.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                    {scenario.title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-slate-300">
                    {scenario.situation}
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5">
                      <h4 className="mb-2 font-bold text-red-200">
                        Unsafe choice
                      </h4>

                      <p className="leading-relaxed text-slate-200">
                        {scenario.unsafe}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                      <h4 className="mb-2 font-bold text-emerald-200">
                        Safer choice
                      </h4>

                      <p className="leading-relaxed text-slate-200">
                        {scenario.safer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                What makes a choice safer?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                A safer choice usually protects private information, avoids
                rushing, treats others kindly, does not spread harmful content,
                and asks a trusted adult for help when needed.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What warning sign would make you pause and ask a trusted adult
                  before acting online?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use a safe choice check.
              </h2>

              <div className="space-y-3">
                {realLifeSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Pick the safer choice.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each fake practice question and review the safer answer.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <h4 className="mb-2 font-bold text-cyan-200">
                      Safer answer
                    </h4>

                    <p className="leading-relaxed text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to Lesson 6.4, students should be able to say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Cyber Safety Review module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will complete the CyberShield Kids final review
              across all Kids modules.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/trusted-adult-practice"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids/cyber-safety-review/final-review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}