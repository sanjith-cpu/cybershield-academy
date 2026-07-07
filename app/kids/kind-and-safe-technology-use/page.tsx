import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleLessons = [
  {
    number: "4.1",
    title: "Kind Words Online",
    href: "/kids/kind-and-safe-technology-use/kind-words-online",
    status: "Next",
    description:
      "Learn why online words matter and how kind messages can help people feel safe and respected.",
    learn: [
      "Why online words affect real people",
      "How to choose kind messages",
      "Why students should pause before posting or replying",
    ],
  },
  {
    number: "4.2",
    title: "Group Chats and Games",
    href: "/kids/kind-and-safe-technology-use/group-chats-and-games",
    status: "Planned",
    description:
      "Learn safe and respectful choices in group chats, games, comments, classroom tools, and online communities.",
    learn: [
      "How group chats can spread messages quickly",
      "How to avoid joining mean behavior",
      "When to step away and ask for help",
    ],
  },
  {
    number: "4.3",
    title: "What to Do if Someone Is Mean",
    href: "/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean",
    status: "Planned",
    description:
      "Learn safe next steps when someone is being mean, hurtful, or disrespectful online.",
    learn: [
      "How to avoid responding with more hurtful words",
      "How to save the situation for a trusted adult when appropriate",
      "How to ask for help safely",
    ],
  },
  {
    number: "4.4",
    title: "Being a Digital Helper",
    href: "/kids/kind-and-safe-technology-use/being-a-digital-helper",
    status: "Planned",
    description:
      "Learn how students can support others online without joining drama, arguments, or unsafe conversations.",
    learn: [
      "How to be supportive online",
      "How to avoid making problems bigger",
      "How to get trusted adult help",
    ],
  },
  {
    number: "4.5",
    title: "Module Review",
    href: "/kids/kind-and-safe-technology-use/review",
    status: "Planned",
    description:
      "Review kind words, respectful technology use, group chat choices, and safe ways to respond to online problems.",
    learn: [
      "How to choose kind online actions",
      "How to respond safely to mean behavior",
      "How to ask trusted adults for help",
    ],
  },
];

const keyIdeas = [
  {
    title: "Online words affect real people",
    text: "Messages, comments, and game chats can make people feel included, hurt, supported, or embarrassed.",
  },
  {
    title: "Pause before replying",
    text: "When students feel upset, they should pause before sending a message that could hurt someone or make a problem bigger.",
  },
  {
    title: "Do not join mean behavior",
    text: "If others are being mean online, students should not pile on, laugh, repost, or encourage it.",
  },
  {
    title: "Ask for help",
    text: "If something online feels hurtful, scary, confusing, or unsafe, students should tell a trusted adult.",
  },
];

const respectfulChoices = [
  "Use kind words in messages, comments, games, and classroom tools.",
  "Pause before posting or replying when upset.",
  "Do not share embarrassing pictures, screenshots, or private messages.",
  "Do not join group chat drama or mean jokes.",
  "Step away from hurtful conversations.",
  "Tell a trusted adult if someone is being hurtful or unsafe online.",
];

const examples = [
  {
    label: "Safer choice",
    example:
      "A student sees a mean comment and does not join in. They step away and tell a teacher.",
  },
  {
    label: "Unsafe choice",
    example:
      "A student shares a screenshot to make fun of someone in a group chat.",
  },
  {
    label: "Safer choice",
    example:
      "A student writes a respectful message even when they disagree with someone online.",
  },
];

const safetyRules = [
  "Do not post or send messages meant to hurt, embarrass, threaten, or shame someone.",
  "Do not share private messages, screenshots, photos, or videos to make fun of someone.",
  "Do not join online drama, pile-ons, or group teasing.",
  "Do not respond to hurtful behavior with more hurtful behavior.",
  "Ask a trusted adult if online messages feel scary, mean, confusing, or unsafe.",
  "Use fake examples only when practicing online kindness scenarios.",
];

export default function KidsKindAndSafeTechnologyUsePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Kind and Safe Technology Use
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This module teaches elementary students how to use technology with
              kindness, respect, and safety. Students will learn why online words
              matter, how to avoid joining mean behavior, and when to ask trusted
              adults for help.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/kind-words-online"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Lesson 4.1
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Module 3
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
                Module 4 focuses on digital citizenship for younger students.
                The goal is to help students understand that technology should
                be used in ways that are kind, safe, respectful, and responsible.
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
                What students should remember
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
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Students should not handle hurtful situations alone.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                If online messages, comments, chats, screenshots, or games feel
                mean, scary, embarrassing, confusing, or unsafe, students should
                pause and ask a trusted adult for help.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Students can ask a parent, guardian, teacher, counselor,
                  coach, librarian, or school technology staff member when
                  online behavior feels hurtful or unsafe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Respectful Technology Choices
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Kind and safe habits students can practice
              </h2>

              <p className="leading-relaxed text-slate-300">
                These habits help students use online tools, games, group chats,
                comments, and classroom technology in respectful ways.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {respectfulChoices.map((choice) => (
                <div
                  key={choice}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {choice}
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
                Safer and unsafe technology choices
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples help students practice kind online choices using
                fake, safe, classroom-appropriate situations.
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
                Kind Technology Rules
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
              Next, build Lesson 4.1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this module page works, the next route should be{" "}
              <span className="font-semibold text-cyan-200">
                /kids/kind-and-safe-technology-use/kind-words-online
              </span>
              . That page will become the first individual lesson in Kids Module
              4.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/kind-and-safe-technology-use/kind-words-online"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Go to Lesson 4.1
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