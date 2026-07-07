import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "6.1",
    title: "Safety Habits Review",
    href: "/kids/cyber-safety-review/safety-habits-review",
    status: "Next",
    description:
      "Review the most important online safety habits from the Kids Track, including privacy, pausing, kindness, scam spotting, and asking trusted adults for help.",
    learn: [
      "How to pause before online choices",
      "How to protect private information",
      "When to ask a trusted adult",
    ],
  },
  {
    number: "6.2",
    title: "Trusted Adult Practice",
    href: "/kids/cyber-safety-review/trusted-adult-practice",
    status: "Planned",
    description:
      "Practice choosing when to ask a trusted adult and who can help when something online feels confusing, unsafe, embarrassing, secret, or urgent.",
    learn: [
      "Who trusted adults can be",
      "What situations need help",
      "How to ask for help clearly",
    ],
  },
  {
    number: "6.3",
    title: "Safe Choices Scenarios",
    href: "/kids/cyber-safety-review/safe-choices-scenarios",
    status: "Planned",
    description:
      "Use fake classroom scenarios to decide which online choices are safer and which choices could create problems.",
    learn: [
      "How to compare safe and unsafe choices",
      "How to slow down before reacting",
      "How to choose a safer next step",
    ],
  },
  {
    number: "6.4",
    title: "CyberShield Kids Final Review",
    href: "/kids/cyber-safety-review/final-review",
    status: "Planned",
    description:
      "Review all five Kids modules: online safety, passwords, scams, kind technology use, and digital footprints.",
    learn: [
      "How the Kids modules connect",
      "How to remember key safety habits",
      "How to use safety rules together",
    ],
  },
  {
    number: "6.5",
    title: "Kids Track Completion",
    href: "/kids/cyber-safety-review/completion",
    status: "Planned",
    description:
      "Celebrate finishing the Kids Track and prepare students for a safe, simple completion activity or certificate.",
    learn: [
      "How to review final safety promises",
      "How to celebrate safe learning",
      "How to keep practicing cyber safety",
    ],
  },
];

const bigIdeas = [
  {
    title: "Pause before acting online",
    text: "Students should slow down before clicking, posting, replying, downloading, sharing, or reacting to something online.",
  },
  {
    title: "Private information stays private",
    text: "Students should protect passwords, addresses, phone numbers, school names, locations, private messages, and family details.",
  },
  {
    title: "Kindness matters online",
    text: "Students should use kind words in chats, games, comments, messages, and group spaces.",
  },
  {
    title: "Trusted adults can help",
    text: "If something online feels confusing, unsafe, embarrassing, secret, scary, or urgent, students should ask a trusted adult for help.",
  },
];

const safeHabits = [
  "Pause before clicking, posting, replying, downloading, or sharing.",
  "Never type real passwords in practice activities.",
  "Do not share addresses, phone numbers, school names, locations, or private family details.",
  "Ask a trusted adult when a message, link, offer, screenshot, or comment feels strange.",
  "Use kind words in group chats, games, comments, and messages.",
  "Ask permission before sharing photos or information about another person.",
];

const examples = [
  {
    label: "Safer choice",
    example:
      "A student sees a strange message and asks a trusted adult before clicking anything.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student types a real password into a classroom practice activity.",
  },
  {
    label: "Safer choice",
    example:
      "A student pauses before posting a photo and asks if everyone in the photo is okay with it.",
  },
];

const safetyRules = [
  "Use fake examples only.",
  "Do not type real passwords in practice activities.",
  "Do not use real private information, real screenshots, real messages, or real online conflicts.",
  "Do not use real names, addresses, phone numbers, school names, locations, or account details.",
  "Do not share someone else’s information without permission.",
  "Ask a trusted adult when something online feels confusing, scary, embarrassing, secret, urgent, or unsafe.",
];

export default function KidsCyberSafetyReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Cyber Safety Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This final Kids module helps students review the most important
              safety habits from the full CyberShield Kids Track. Students will
              practice safe choices, trusted adult help, privacy, kindness, scam
              spotting, password safety, and digital footprint awareness.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safety-habits-review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 6.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 5
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Module Lessons
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What students will complete
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 6 helps students review the safety skills they learned
                across the Kids Track. The goal is to help students remember
                simple, safe, and responsible habits they can use in everyday
                online situations.
              </p>
            </div>

            <div className="space-y-6">
              {moduleLessons.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                          Lesson {lesson.number}
                        </span>

                        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-300">
                          {lesson.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        {lesson.title}
                      </h3>

                      <p className="max-w-3xl leading-relaxed text-slate-300">
                        {lesson.description}
                      </p>
                    </div>

                    <Link
                      href={lesson.href}
                      className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Open Lesson
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {lesson.learn.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">Big Ideas</p>

              <h2 className="mb-6 text-3xl font-bold">
                What students should remember
              </h2>

              <div className="space-y-4">
                {bigIdeas.map((idea) => (
                  <div
                    key={idea.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="mb-2 text-xl font-bold text-cyan-200">
                      {idea.title}
                    </h3>

                    <p className="leading-relaxed text-slate-300">
                      {idea.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Review practice should stay fake and safe.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                Students should not use real passwords, real private
                information, real screenshots, real messages, real names, real
                accounts, real school details, or real online conflicts in
                practice activities.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If something online feels strange, confusing, unsafe,
                  embarrassing, secret, scary, or urgent, students should ask a
                  parent, guardian, teacher, counselor, coach, librarian, or
                  school technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Cyber Safety Habits
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safe habits students can practice
              </h2>

              <p className="leading-relaxed text-slate-300">
                These habits help students slow down, protect private
                information, use kind words, and ask for help when something
                online feels wrong.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {safeHabits.map((habit) => (
                <div
                  key={habit}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {habit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Practice Preview
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safer and unsafe cyber choices
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real private information,
                real passwords, real screenshots, or real messages.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((item) => (
                <div
                  key={item.example}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    {item.label}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.example}
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
                Module Safety Rules
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Rules for this final review module
              </h2>

              <p className="leading-relaxed text-slate-300">
                These rules keep the final CyberShield Kids review safe,
                defensive, ethical, and age-appropriate.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Build Step
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Next, build Lesson 6.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/cyber-safety-review/safety-habits-review
              </span>
              . That page will become the first individual lesson in Kids Module
              6.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safety-habits-review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 6.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}