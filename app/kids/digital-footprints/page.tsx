import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "5.1",
    title: "What Is a Digital Footprint?",
    href: "/kids/digital-footprints/what-is-a-digital-footprint",
    status: "Next",
    description:
      "Learn that online actions can leave traces, like posts, messages, searches, comments, photos, and account activity.",
    learn: [
      "What a digital footprint means",
      "How online actions can leave traces",
      "Why students should think before sharing",
    ],
  },
  {
    number: "5.2",
    title: "Think Before You Share",
    href: "/kids/digital-footprints/think-before-you-share",
    status: "Planned",
    description:
      "Learn how to pause before sharing personal details, photos, messages, locations, or information about others.",
    learn: [
      "What information should stay private",
      "Why sharing can affect other people",
      "How to ask before posting about someone",
    ],
  },
  {
    number: "5.3",
    title: "Photos, Posts, and Screenshots",
    href: "/kids/digital-footprints/photos-posts-and-screenshots",
    status: "Planned",
    description:
      "Learn why photos, posts, screenshots, and private messages should be handled carefully and respectfully.",
    learn: [
      "Why screenshots can spread",
      "Why photos need permission",
      "How posts can be remembered later",
    ],
  },
  {
    number: "5.4",
    title: "Cleaning Up and Asking for Help",
    href: "/kids/digital-footprints/cleaning-up-and-asking-for-help",
    status: "Planned",
    description:
      "Learn what students can do if they posted something by mistake or need help with an online situation.",
    learn: [
      "How to pause after a mistake",
      "When to ask a trusted adult",
      "How to make safer choices next time",
    ],
  },
  {
    number: "5.5",
    title: "Module Review",
    href: "/kids/digital-footprints/review",
    status: "Planned",
    description:
      "Review digital footprints, thoughtful sharing, photos, screenshots, posts, privacy, and trusted adult help.",
    learn: [
      "How digital footprints work",
      "How to think before sharing",
      "How to ask for help safely",
    ],
  },
];

const bigIdeas = [
  {
    title: "Online actions can leave traces",
    text: "Posts, comments, photos, messages, searches, and account activity can sometimes be saved, copied, or remembered.",
  },
  {
    title: "Sharing should be thoughtful",
    text: "Students should pause before sharing anything about themselves or others, especially private information.",
  },
  {
    title: "Other people have privacy too",
    text: "Students should not post photos, screenshots, private messages, or personal details about someone without permission.",
  },
  {
    title: "Trusted adults can help",
    text: "If a student shares something by mistake or feels worried about an online post, a trusted adult can help them choose next steps.",
  },
];

const safeHabits = [
  "Pause before posting, sharing, commenting, or sending.",
  "Do not share addresses, phone numbers, school names, locations, passwords, or private family details.",
  "Ask permission before sharing photos or information about someone else.",
  "Do not share screenshots or private messages to embarrass someone.",
  "Remember that online posts can be saved or copied.",
  "Ask a trusted adult if you posted something by mistake or feel worried.",
];

const examples = [
  {
    label: "Safer choice",
    example:
      "A student wants to post a photo with a friend and asks for permission first.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student shares a screenshot of a private message to make fun of someone.",
  },
  {
    label: "Safer choice",
    example:
      "A student notices they posted something private by mistake and asks a parent or teacher for help.",
  },
];

const safetyRules = [
  "Do not use real private information in practice activities.",
  "Do not post real addresses, phone numbers, school names, passwords, or locations.",
  "Do not use real photos, screenshots, or private messages in classroom examples.",
  "Do not share someone else’s information without permission.",
  "Do not embarrass someone with posts, comments, photos, or screenshots.",
  "Ask a trusted adult when an online footprint situation feels confusing, scary, embarrassing, or unsafe.",
];

export default function KidsDigitalFootprintsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Digital Footprints
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This module teaches elementary students that online actions can
              leave traces. Students will learn how to think before sharing,
              protect private information, respect other people’s privacy, and
              ask trusted adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/what-is-a-digital-footprint"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 5.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/kind-and-safe-technology-use"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 4
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
                Module 5 helps students understand that online choices can
                matter later. The goal is not to scare students, but to teach
                them thoughtful, safe, and respectful sharing habits.
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
                Practice should not use real private information.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                Students should not use real names, addresses, phone numbers,
                school names, passwords, locations, private messages, or real
                screenshots in practice activities.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If a student shares something by mistake or feels worried
                  about an online post, message, photo, or screenshot, they
                  should ask a parent, guardian, teacher, counselor, or school
                  technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Digital Footprint Habits
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Safe sharing habits students can practice
              </h2>

              <p className="leading-relaxed text-slate-300">
                These habits help students slow down and think before posting,
                sharing, commenting, or sending information online.
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
                Safer and unsafe digital footprint choices
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real private information
                or real screenshots.
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
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Module Safety Rules
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Rules for this module
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {safetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Build Step
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Next, build Lesson 5.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/digital-footprints/what-is-a-digital-footprint
              </span>
              . That page will become the first individual lesson in Kids Module
              5.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/what-is-a-digital-footprint"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 5.1
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