import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "1.1",
    title: "Personal Information",
    href: "/kids/online-safety-basics/personal-information",
    status: "Next",
    description:
      "Learn what personal information means and why students should be careful when sharing details online.",
    learn: [
      "What personal information is",
      "Why websites, games, and apps may ask for information",
      "Why students should pause before sharing",
    ],
  },
  {
    number: "1.2",
    title: "Private Information",
    href: "/kids/online-safety-basics/private-information",
    status: "Planned",
    description:
      "Learn which details should stay private, including addresses, phone numbers, school names, passwords, and family information.",
    learn: [
      "Which details are private",
      "Why private information should be protected",
      "How to ask a trusted adult before sharing",
    ],
  },
  {
    number: "1.3",
    title: "Safe Usernames",
    href: "/kids/online-safety-basics/safe-usernames",
    status: "Planned",
    description:
      "Learn how to create usernames that do not reveal full names, schools, birthdays, or locations.",
    learn: [
      "What makes a username safer",
      "What details should not go in a username",
      "How to choose a username with adult help",
    ],
  },
  {
    number: "1.4",
    title: "Trusted Adults",
    href: "/kids/online-safety-basics/trusted-adults",
    status: "Planned",
    description:
      "Learn when to pause, step away, and ask a parent, teacher, counselor, or school technology staff member for help.",
    learn: [
      "Who trusted adults can be",
      "When to ask for help",
      "Why asking for help is a smart safety habit",
    ],
  },
  {
    number: "1.5",
    title: "Module Review",
    href: "/kids/online-safety-basics/review",
    status: "Planned",
    description:
      "Review safe choices, warning signs, and what to do when something online feels confusing, strange, or unsafe.",
    learn: [
      "How to spot risky situations",
      "How to choose safe next steps",
      "How to explain online safety habits",
    ],
  },
];

const keyIdeas = [
  {
    title: "Pause first",
    text: "Before clicking, sharing, replying, or downloading, students should pause and think.",
  },
  {
    title: "Protect private details",
    text: "Students should not share real addresses, phone numbers, passwords, school details, or family information online.",
  },
  {
    title: "Use safe examples only",
    text: "This module uses fake examples. Students should never type real private information into CyberShield activities.",
  },
  {
    title: "Ask for help",
    text: "When something feels confusing, scary, secret, urgent, or unsafe, students should ask a trusted adult.",
  },
];

const safeVsUnsafe = [
  {
    label: "Safer choice",
    example:
      "A student asks a parent or teacher before entering information into a new game website.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student types their home address into a random popup to win a prize.",
  },
  {
    label: "Safer choice",
    example:
      "A student uses a username that does not include their full real name, school, or birthday.",
  },
];

export default function KidsOnlineSafetyBasicsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Online Safety Basics
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This module helps elementary students learn the first safety
              habits they need online: protect private information, use safer
              usernames, pause before sharing, and ask trusted adults for help
              when something feels wrong.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/personal-information"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 1.1
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
                Each lesson will eventually become its own page. For now, this
                module page shows the full structure so the Kids track feels
                like a real curriculum path.
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
              <p className="mb-3 font-semibold text-cyan-300">
                Big Ideas
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                The safety habits students should remember
              </h2>

              <div className="space-y-4">
                {keyIdeas.map((idea) => (
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
                Teacher and Family Note
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                This module is defensive and age-appropriate.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                Students should not enter real passwords, real addresses, real
                phone numbers, real school information, or private family
                details. CyberShield examples should stay fake, simple, and safe.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult reminder
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If something online feels confusing, scary, urgent, secret, or
                  unsafe, students should pause and ask a parent, teacher,
                  counselor, or school technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Practice Preview
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safe or unsafe examples
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are simple practice situations. They do not use
                real links, real passwords, or real student information.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safeVsUnsafe.map((item) => (
                <div
                  key={item.example}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
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

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Build Step
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Next, build Lesson 1.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/online-safety-basics/personal-information
              </span>
              . That page will become the first individual Kids lesson.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/personal-information"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 1.1
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