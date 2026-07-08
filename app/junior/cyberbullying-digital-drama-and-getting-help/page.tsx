import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "7.1",
    title: "What Cyberbullying Means",
    description:
      "Learn what cyberbullying means and how repeated hurtful online behavior can affect students, friendships, and school communities.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/what-cyberbullying-means",
  },
  {
    number: "7.2",
    title: "Digital Drama vs Serious Harm",
    description:
      "Learn the difference between online disagreements, digital drama, and behavior that becomes serious, unsafe, or harmful.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/digital-drama-vs-serious-harm",
  },
  {
    number: "7.3",
    title: "Bystanders, Upstanders, and Safe Support",
    description:
      "Learn how students can avoid joining hurtful behavior, support others safely, and get help without making the situation worse.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/bystanders-upstanders-and-safe-support",
  },
  {
    number: "7.4",
    title: "Saving Evidence and Reporting Safely",
    description:
      "Learn why students should save important evidence, avoid arguing back, and report harmful online behavior with trusted adult help.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/saving-evidence-and-reporting-safely",
  },
  {
    number: "7.5",
    title: "Asking Trusted Adults for Help",
    description:
      "Learn how to ask a trusted adult for help when online behavior feels hurtful, stressful, unsafe, or too difficult to handle alone.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/asking-trusted-adults-for-help",
  },
  {
    number: "7.6",
    title: "Cyberbullying, Digital Drama, and Getting Help Review",
    description:
      "Review cyberbullying warning signs, digital drama, safe support, saving evidence, reporting, and asking trusted adults for help.",
    href: "/junior/cyberbullying-digital-drama-and-getting-help/review",
  },
];

const skillGoals = [
  "Explain what cyberbullying means",
  "Tell the difference between digital drama and serious harm",
  "Recognize when online behavior becomes unsafe or repeated",
  "Understand safe bystander and upstander choices",
  "Know why saving evidence and reporting can help",
  "Ask trusted adults for help when online behavior feels hurtful or unsafe",
];

const realWorldSituations = [
  "A group chat starts making repeated jokes about one student",
  "A private message turns into pressure, threats, or insults",
  "A student is unsure whether online drama has become serious",
  "A friend shares screenshots of hurtful messages",
  "A student wants to help someone without escalating the problem",
  "A student feels nervous about telling an adult what happened online",
];

const safetyRules = [
  "Use fake examples only",
  "Do not send hurtful messages for practice",
  "Do not join, repeat, forward, or react to bullying behavior",
  "Do not retaliate or start an online argument when something feels unsafe",
  "Do not share private screenshots publicly or use them to embarrass someone",
  "Ask a trusted adult when online behavior feels hurtful, repeated, threatening, or unsafe",
];

export default function CyberbullyingDigitalDramaAndGettingHelpPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyberbullying, Digital Drama, and Getting Help
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 7 teaches students how to recognize cyberbullying, understand
          the difference between digital drama and serious harm, support others
          safely, save evidence, report concerns, and ask trusted adults for
          help. The goal is to build respectful, safe, and supportive online
          habits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/what-cyberbullying-means"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 7.1
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Module
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
          <p className="text-cyan-300 font-semibold mb-3">
            Module Big Question
          </p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students respond safely when online behavior becomes
              hurtful, stressful, or unsafe?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Online conflict can spread quickly through messages, group chats,
              comments, screenshots, and posts. This module helps students slow
              down, avoid retaliation, support others safely, save important
              information, and get trusted help before problems grow.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students will be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGoals.map((goal) => (
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
          <p className="text-cyan-300 font-semibold mb-3">
            Lessons in This Module
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Follow the lessons in order to build safer response and support
            habits.
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition block"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-cyan-300 font-semibold">
                      Lesson {lesson.number}
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">
                      {lesson.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    Live
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {lesson.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-World Situations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students will practice safer decisions in situations like:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realWorldSituations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Safety Reminder
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            This module teaches safe recognition, support, and reporting, not
            retaliation.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-slate-200"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8">
          <p className="text-emerald-200 font-semibold mb-3">
            Module Completion Goal
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Earn the Digital Respect Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can recognize hurtful or
            repeated online behavior, tell when digital drama becomes serious,
            avoid joining harmful situations, support others safely, save
            important evidence, report concerns, and ask trusted adults for
            help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 7?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 7.1 to learn what cyberbullying means and why
            students should respond safely when online behavior becomes hurtful
            or repeated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/what-cyberbullying-means"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 7.1
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Module
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