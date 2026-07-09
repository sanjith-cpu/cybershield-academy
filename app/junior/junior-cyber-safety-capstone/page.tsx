import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "12.1",
    title: "Building a Personal Cyber Safety Plan",
    description:
      "Create a personal cyber safety plan that combines account safety, privacy, communication, browsing, devices, and help-seeking habits.",
    href: "/junior/junior-cyber-safety-capstone/building-a-personal-cyber-safety-plan",
  },
  {
    number: "12.2",
    title: "Scenario Challenge: Suspicious Message",
    description:
      "Practice responding safely to a suspicious message using clues, safer choices, trusted adults, and careful reporting habits.",
    href: "/junior/junior-cyber-safety-capstone/scenario-challenge-suspicious-message",
  },
  {
    number: "12.3",
    title: "Scenario Challenge: Unsafe Website or Download",
    description:
      "Practice deciding what to do when a website, pop-up, file, app, or download request feels risky or confusing.",
    href: "/junior/junior-cyber-safety-capstone/scenario-challenge-unsafe-website-or-download",
  },
  {
    number: "12.4",
    title: "Scenario Challenge: Privacy, Reputation, and Communication",
    description:
      "Practice safer choices when photos, posts, screenshots, group chats, privacy, reputation, and online conflict are involved.",
    href: "/junior/junior-cyber-safety-capstone/scenario-challenge-privacy-reputation-and-communication",
  },
  {
    number: "12.5",
    title: "Cyber Safety Reflection and Goal Setting",
    description:
      "Reflect on cyber safety habits, choose realistic goals, and plan how to keep improving after the Junior track is finished.",
    href: "/junior/junior-cyber-safety-capstone/cyber-safety-reflection-and-goal-setting",
  },
  {
    number: "12.6",
    title: "Junior Cyber Safety Final Review",
    description:
      "Review the full Junior track and show understanding of privacy, passwords, scams, browsing, communication, devices, ethics, and safe help-seeking.",
    href: "/junior/junior-cyber-safety-capstone/review",
  },
];

const skillGoals = [
  "Build a personal cyber safety plan",
  "Use safer responses in suspicious message scenarios",
  "Respond carefully to unsafe websites, pop-ups, files, and downloads",
  "Think about privacy, reputation, and respectful communication before posting",
  "Know when and how to ask trusted adults for help",
  "Combine Junior cyber safety habits into real-life decisions",
];

const realWorldSituations = [
  "A student receives a suspicious message asking them to click a link",
  "A website claims a download is required to continue",
  "A group chat starts sharing screenshots without permission",
  "A student needs to decide what information belongs in a post",
  "A device warning appears and the student is unsure what to do",
  "A student wants to set cyber safety goals for school, home, and social life",
];

const safetyRules = [
  "Use fake examples only",
  "Do not click suspicious links, open unknown files, or test unsafe websites",
  "Do not enter real personal information into practice examples",
  "Do not share real screenshots, private messages, passwords, or account details",
  "Do not handle serious online problems alone",
  "Ask a trusted adult when something online feels risky, private, upsetting, confusing, or urgent",
];

export default function JuniorCyberSafetyCapstonePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 12
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Junior Cyber Safety Capstone
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 12 helps students combine everything they learned in the
          Junior track into a real-life cyber safety plan. Students practice
          safe decision-making through capstone scenarios about suspicious
          messages, unsafe websites, downloads, privacy, reputation,
          communication, and asking trusted adults for help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/junior-cyber-safety-capstone/building-a-personal-cyber-safety-plan"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 12.1
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws"
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
              How can students combine everything they learned into a real-life
              cyber safety plan?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Cyber safety works best when students connect many habits
              together. This capstone helps students pause, check warning
              signs, protect private information, communicate respectfully,
              avoid risky actions, and ask for help when a situation feels
              unsafe or confusing.
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
            Follow the lessons in order to complete the Junior cyber safety
            capstone.
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
            This capstone teaches safe planning and response, not unsafe
            testing.
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
            Earn the Junior CyberShield Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can build a personal cyber
            safety plan, respond safely to common online scenarios, protect
            privacy and reputation, communicate respectfully, avoid unsafe
            testing, and ask trusted adults for help when needed.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 12?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 12.1 to build a personal cyber safety plan that
            connects the most important habits from the Junior track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/junior-cyber-safety-capstone/building-a-personal-cyber-safety-plan"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 12.1
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws"
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