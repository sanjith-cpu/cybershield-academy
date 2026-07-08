import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "11.1",
    title: "What Digital Citizenship Means",
    description:
      "Learn how digital citizenship means making online choices that are safe, respectful, responsible, and helpful to others.",
    href: "/junior/digital-citizenship-ethics-and-laws/what-digital-citizenship-means",
  },
  {
    number: "11.2",
    title: "Online Rules, Terms, and School Policies",
    description:
      "Learn why online platforms, apps, schools, and devices have rules that students should understand and follow.",
    href: "/junior/digital-citizenship-ethics-and-laws/online-rules-terms-and-school-policies",
  },
  {
    number: "11.3",
    title: "Copyright, Credit, and Creative Work",
    description:
      "Learn why students should respect creative work, give credit, avoid copying, and use online content responsibly.",
    href: "/junior/digital-citizenship-ethics-and-laws/copyright-credit-and-creative-work",
  },
  {
    number: "11.4",
    title: "Ethical Hacking vs Harmful Hacking",
    description:
      "Learn the difference between ethical cybersecurity learning and harmful online behavior that breaks trust, rules, or laws.",
    href: "/junior/digital-citizenship-ethics-and-laws/ethical-hacking-vs-harmful-hacking",
  },
  {
    number: "11.5",
    title: "Responsible Choices and Digital Consequences",
    description:
      "Learn how online choices can affect trust, safety, reputation, school life, and future opportunities.",
    href: "/junior/digital-citizenship-ethics-and-laws/responsible-choices-and-digital-consequences",
  },
  {
    number: "11.6",
    title: "Digital Citizenship, Ethics, and Laws Review",
    description:
      "Review digital citizenship, online rules, school policies, copyright, ethical cybersecurity, and responsible online decisions.",
    href: "/junior/digital-citizenship-ethics-and-laws/review",
  },
];

const skillGoals = [
  "Explain what digital citizenship means",
  "Understand why online rules and school policies matter",
  "Respect copyright, credit, and creative work",
  "Recognize the difference between ethical learning and harmful actions",
  "Think about digital consequences before acting online",
  "Make online choices that are safe, legal, respectful, and responsible",
];

const realWorldSituations = [
  "A student wants to repost an image or video they found online",
  "A classmate asks for help bypassing a school device rule",
  "A student copies text from a website into an assignment",
  "Someone says a harmful online action is just a joke",
  "A platform rule says users should not share certain information",
  "A student has to decide whether an online choice could hurt trust or safety",
];

const safetyRules = [
  "Use fake examples only",
  "Do not break into accounts, devices, apps, websites, or school systems",
  "Do not bypass school rules, filters, permissions, or device settings",
  "Do not copy someone else’s work without permission or credit",
  "Do not share private information, screenshots, or creative work unfairly",
  "Ask a trusted adult before doing anything online that feels risky, secret, harmful, or against rules",
];

export default function DigitalCitizenshipEthicsAndLawsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Digital Citizenship, Ethics, and Laws
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 11 teaches students how to make online choices that are safe,
          legal, respectful, and ethical. Students learn about digital
          citizenship, online rules, school policies, copyright, responsible
          cybersecurity learning, and the consequences of online decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/what-digital-citizenship-means"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 11.1
          </Link>

          <Link
            href="/junior/cyber-threats-and-defense-basics"
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
              How can students make online choices that are safe, legal,
              respectful, and ethical?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Digital citizenship is about more than avoiding danger. It also
              means respecting people, following rules, giving credit, learning
              cybersecurity responsibly, and thinking before online choices
              create consequences for yourself or others.
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
            Follow the lessons in order to build ethical digital citizenship
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
          Students will practice responsible decisions in situations like:
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
            This module teaches responsible choices, not rule-breaking or
            unsafe testing.
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
            Earn the Ethical Digital Citizen Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can explain digital
            citizenship, follow online rules and school policies, respect
            creative work, understand ethical cybersecurity learning, and make
            responsible choices that protect safety, trust, and respect.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 11?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 11.1 to learn what digital citizenship means and
            how students can make safer, more respectful choices online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/what-digital-citizenship-means"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 11.1
            </Link>

            <Link
              href="/junior/cyber-threats-and-defense-basics"
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