import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatYouWillLearn = [
  "Review the most important safety habits from the Kids Track.",
  "Practice pausing before clicking, posting, sharing, replying, or downloading.",
  "Remember how to protect private information.",
  "Know when to ask a trusted adult for help.",
];

const vocabulary = [
  {
    term: "Safety habit",
    meaning:
      "A repeated safe choice that helps protect someone online, such as pausing before clicking or asking a trusted adult for help.",
  },
  {
    term: "Pause",
    meaning:
      "To stop and think before making an online choice, especially when something feels strange, urgent, confusing, or unsafe.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should not be shared with strangers online, such as passwords, addresses, phone numbers, locations, school names, and family details.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A safe grown-up who can help, such as a parent, guardian, teacher, counselor, coach, librarian, or school technology staff member.",
  },
  {
    term: "Safe choice",
    meaning:
      "A choice that protects privacy, shows kindness, avoids suspicious actions, and gets help when needed.",
  },
];

const safetyHabits = [
  {
    title: "Pause before clicking",
    text: "If a link, button, message, download, or pop-up feels strange, students should stop and ask a trusted adult before clicking.",
  },
  {
    title: "Keep private information private",
    text: "Students should not share real passwords, addresses, phone numbers, school names, locations, account details, or family information in practice or online spaces.",
  },
  {
    title: "Use kind words online",
    text: "Students should use respectful words in games, group chats, comments, posts, and messages.",
  },
  {
    title: "Ask before sharing about others",
    text: "Students should ask permission before sharing photos, names, screenshots, comments, or information about another person.",
  },
  {
    title: "Watch for scam signs",
    text: "Students should slow down when something sounds too good to be true, feels urgent, asks for private information, or comes from someone they do not know.",
  },
  {
    title: "Ask a trusted adult",
    text: "If something online feels unsafe, scary, confusing, embarrassing, secret, or urgent, students should not handle it alone.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student gets a strange message saying they won a prize and asks a trusted adult before clicking anything.",
  },
  {
    label: "Unsafe choice",
    text: "A student types a real password into a classroom practice box because the activity says password practice.",
  },
  {
    label: "Safer choice",
    text: "A student pauses before posting a group photo and asks if everyone is okay with it being shared.",
  },
  {
    label: "Unsafe choice",
    text: "A student sees a mean comment in a group chat and adds another mean reply.",
  },
  {
    label: "Safer choice",
    text: "A student feels worried about a screenshot and tells a trusted adult instead of spreading it.",
  },
  {
    label: "Unsafe choice",
    text: "A student sees a fake urgent message and clicks quickly without asking for help.",
  },
];

const realLifeSteps = [
  "Pause when something online feels strange, rushed, secret, scary, or too exciting.",
  "Check whether private information is being asked for or shown.",
  "Think about whether the choice is kind and respectful.",
  "Ask permission before posting or sharing about another person.",
  "Use fake examples only in classroom practice.",
  "Ask a trusted adult before clicking, replying, downloading, sharing, or trying to fix a serious online problem.",
];

const practiceQuestions = [
  {
    question:
      "A student sees a pop-up that says they must click right now to claim a prize. What safety habit should they use?",
    answer:
      "They should pause and ask a trusted adult before clicking. Urgent prize messages can be unsafe or fake.",
  },
  {
    question:
      "A classroom activity asks students to practice making a password. Should students type a real password?",
    answer:
      "No. They should only use fake practice examples and never type a real password into a lesson or activity.",
  },
  {
    question:
      "A student wants to post a photo that includes friends. What should they do first?",
    answer:
      "They should ask permission before sharing the photo and talk to a trusted adult if they are not sure.",
  },
  {
    question:
      "A message online feels scary and tells a student not to tell anyone. What should the student do?",
    answer:
      "They should tell a trusted adult right away. Unsafe messages should not be kept secret.",
  },
  {
    question:
      "A student feels angry in a group chat. What is a safer choice before replying?",
    answer:
      "They should pause, avoid sending mean words, and ask for help if the chat feels unsafe or hurtful.",
  },
];

const reviewChecklist = [
  "I can pause before clicking, posting, sharing, replying, or downloading.",
  "I know not to type real passwords in practice activities.",
  "I can protect private information online.",
  "I can use kind words in chats, games, comments, and messages.",
  "I can ask permission before sharing about another person.",
  "I can spot when something feels too urgent, strange, or too good to be true.",
  "I know to ask a trusted adult when something feels unsafe, confusing, scary, embarrassing, secret, or urgent.",
];

export default function KidsSafetyHabitsReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6 • Lesson 6.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Safety Habits Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students review the most important safety habits
              from CyberShield Kids. These habits help students pause, protect
              private information, use kind words, avoid suspicious choices, and
              ask trusted adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Kids Track
              </Link>

              <Link
                href="/kids/cyber-safety-review/trusted-adult-practice"
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
                Review with fake examples only.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not use real passwords, real private
                information, real screenshots, real messages, real names, real
                school details, real account information, or real online
                conflicts in practice activities. If something online feels
                unsafe, confusing, secret, scary, embarrassing, or urgent,
                students should ask a trusted adult for help.
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
                Cyber safety is built from small habits.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A safety habit is a choice students practice again and again.
                Cyber safety does not mean solving problems alone or learning
                risky tricks. It means making careful, kind, and responsible
                choices online. The most important habits are simple: pause,
                protect private information, think before sharing, use kind
                words, and ask a trusted adult when help is needed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safetyHabits.map((habit) => (
                <div
                  key={habit.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="mb-3 text-xl font-bold text-cyan-200">
                    {habit.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {habit.text}
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
                Review safer online choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real screenshots, real
                passwords, real private messages, or real personal details.
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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Why does pausing help?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Pausing gives students time to notice warning signs before they
                click, reply, download, post, or share. Many online problems get
                worse when people rush. A short pause can help students choose a
                safer next step.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What is one online situation where pausing before acting could
                  help a student stay safe?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the CyberShield safety habit check.
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

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Choose the safety habit.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each fake situation and review the safest habit to use.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to Lesson 6.2, students should be able to say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Cyber Safety Review module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will practice choosing when to ask a trusted adult
              and how to ask for help safely.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Kids Track
              </Link>

              <Link
                href="/kids/cyber-safety-review/trusted-adult-practice"
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