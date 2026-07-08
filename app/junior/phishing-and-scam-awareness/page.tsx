import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "4.1",
    title: "What Phishing Means",
    description:
      "Learn what phishing is, why it tries to trick people, and how fake messages can target accounts or personal information.",
    href: "/junior/phishing-and-scam-awareness/what-phishing-means",
  },
  {
    number: "4.2",
    title: "Suspicious Links and Attachments",
    description:
      "Learn why students should pause before clicking links, opening attachments, scanning codes, or downloading files from messages.",
    href: "/junior/phishing-and-scam-awareness/suspicious-links-and-attachments",
  },
  {
    number: "4.3",
    title: "Pressure Tactics and Urgent Messages",
    description:
      "Learn how scams use fear, urgency, rewards, and pressure to make people act before thinking.",
    href: "/junior/phishing-and-scam-awareness/pressure-tactics-and-urgent-messages",
  },
  {
    number: "4.4",
    title: "Fake Giveaways and Too-Good-To-Be-True Offers",
    description:
      "Learn how fake prizes, free items, game rewards, and unbelievable deals can be used to collect information or account access.",
    href: "/junior/phishing-and-scam-awareness/fake-giveaways-and-too-good-to-be-true-offers",
  },
  {
    number: "4.5",
    title: "Reporting, Blocking, and Asking for Help",
    description:
      "Learn what to do when a suspicious message appears, including when to report, block, save evidence, and ask a trusted adult.",
    href: "/junior/phishing-and-scam-awareness/reporting-blocking-and-asking-for-help",
  },
  {
    number: "4.6",
    title: "Phishing and Scam Awareness Review",
    description:
      "Review phishing warning signs, suspicious links, pressure tactics, fake offers, and safer response choices.",
    href: "/junior/phishing-and-scam-awareness/review",
  },
];

const skillGoals = [
  "Explain what phishing means",
  "Recognize suspicious messages, links, and attachments",
  "Identify urgency, fear, reward, and pressure tactics",
  "Understand why fake giveaways can be risky",
  "Practice safer responses to suspicious messages",
  "Know when to report, block, and ask for trusted help",
];

const realWorldSituations = [
  "A message says a student won a free prize",
  "A fake account asks for a login code",
  "A link claims a game account will be deleted today",
  "A file attachment appears from someone the student does not know",
  "A message pressures the student to act fast",
  "A student is unsure whether a message is real or fake",
];

const safetyRules = [
  "Use fake examples only",
  "Do not click real suspicious links for practice",
  "Do not open unknown attachments for practice",
  "Do not scan random QR codes from messages or posters",
  "Do not enter real usernames, passwords, login codes, or private information",
  "Ask a trusted adult when a message feels suspicious, urgent, scary, or too good to be true",
];

export default function PhishingAndScamAwarenessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Phishing and Scam Awareness
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 4 teaches students how to recognize suspicious messages,
          pressure tactics, fake offers, unsafe links, and account tricks. The
          goal is not to investigate scams, but to pause, protect information,
          and ask for help before acting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/what-phishing-means"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 4.1
          </Link>

          <Link
            href="/junior/passwords-accounts-and-login-safety"
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
              How can students slow down and make safer choices when a message
              tries to trick them?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Scams often work by making people feel rushed, scared, excited, or
              curious. This module helps students practice noticing warning
              signs before they click, reply, download, scan, or share.
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
            Follow the lessons in order to build phishing and scam awareness.
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
            This module teaches recognition and safe response, not scam testing.
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
            Earn the Scam Spotter Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can explain phishing,
            recognize suspicious message warning signs, identify pressure
            tactics, avoid unsafe links or attachments, and ask for trusted help
            before responding to suspicious online messages.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 4?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 4.1 to learn what phishing means and why fake
            messages try to trick people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/what-phishing-means"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 4.1
            </Link>

            <Link
              href="/junior/passwords-accounts-and-login-safety"
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