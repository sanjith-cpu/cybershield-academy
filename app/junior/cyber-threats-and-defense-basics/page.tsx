import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "10.1",
    title: "What Cyber Threats Are",
    description:
      "Learn what cyber threats are, why they can affect people and organizations, and how students can think about them safely.",
    href: "/junior/cyber-threats-and-defense-basics/what-cyber-threats-are",
  },
  {
    number: "10.2",
    title: "Malware, Viruses, and Ransomware Basics",
    description:
      "Learn the basic meaning of malware, viruses, and ransomware without testing unsafe files or learning harmful steps.",
    href: "/junior/cyber-threats-and-defense-basics/malware-viruses-and-ransomware-basics",
  },
  {
    number: "10.3",
    title: "Scams, Social Engineering, and Human Risk",
    description:
      "Learn how people can be pressured, tricked, or rushed online and how safer choices reduce human risk.",
    href: "/junior/cyber-threats-and-defense-basics/scams-social-engineering-and-human-risk",
  },
  {
    number: "10.4",
    title: "Updates, Backups, and Basic Protection",
    description:
      "Learn how updates, backups, screen locks, trusted apps, and careful settings help protect devices and accounts.",
    href: "/junior/cyber-threats-and-defense-basics/updates-backups-and-basic-protection",
  },
  {
    number: "10.5",
    title: "What Cyber Defenders Do",
    description:
      "Learn how cyber defenders help protect systems, support people, reduce risk, and follow ethical rules.",
    href: "/junior/cyber-threats-and-defense-basics/what-cyber-defenders-do",
  },
  {
    number: "10.6",
    title: "Cyber Threats and Defense Basics Review",
    description:
      "Review cyber threat basics, malware awareness, social engineering, basic protection, and the role of cyber defenders.",
    href: "/junior/cyber-threats-and-defense-basics/review",
  },
];

const skillGoals = [
  "Explain what cyber threats are",
  "Recognize common threat categories in a safe, beginner-friendly way",
  "Understand that malware and ransomware should never be tested",
  "Identify how scams and social engineering target people",
  "Describe basic protection habits like updates, backups, and locks",
  "Explain how cyber defenders reduce risk safely and ethically",
];

const realWorldSituations = [
  "A student hears that a fake app can give free rewards",
  "A device shows strange behavior after an unknown download",
  "A message pressures someone to click quickly",
  "A family member forgets to update an important device",
  "A student loses access to a file and needs a backup",
  "A cyber defender helps people report and fix a security concern safely",
];

const safetyRules = [
  "Use fake examples only",
  "Do not test malware, viruses, ransomware, scams, or suspicious files",
  "Do not download unknown tools, scripts, apps, or attachments",
  "Do not try to break into accounts, networks, websites, or devices",
  "Do not copy real attack steps or unsafe instructions",
  "Ask a trusted adult before responding to suspicious messages, files, warnings, or account problems",
];

export default function CyberThreatsAndDefenseBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 10
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber Threats and Defense Basics
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 10 teaches students what cyber threats are, how common risks can
          affect people, why unsafe files and scams should be avoided, and how
          cyber defenders reduce risk safely and ethically. The goal is awareness
          and protection, not testing or attacking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyber-threats-and-defense-basics/what-cyber-threats-are"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 10.1
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety"
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
              What are common cyber threats, and how do defenders reduce risk
              safely and ethically?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Cyber threats can involve unsafe files, scams, account tricks,
              fake warnings, and other risks. This module helps students learn
              the safer response: pause, protect, report, update, back up, and
              ask trusted adults instead of experimenting with danger.
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
            Follow the lessons in order to build safe cyber defense awareness.
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
            This module teaches safe recognition and defense, not unsafe testing.
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
            Earn the Cyber Defender Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can explain basic cyber
            threats, recognize safer responses to suspicious files and messages,
            understand simple protection habits, and describe how defenders help
            people reduce risk safely and ethically.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 10?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 10.1 to learn what cyber threats are and why
            students should focus on safe awareness, protection, and trusted help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyber-threats-and-defense-basics/what-cyber-threats-are"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 10.1
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety"
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