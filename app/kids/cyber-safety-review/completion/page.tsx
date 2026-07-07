import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const completedModules = [
  {
    module: "Module 1",
    title: "Online Safety Basics",
    reminder:
      "Students learned the difference between personal information and private information, safer usernames, and trusted adults.",
  },
  {
    module: "Module 2",
    title: "Passwords and Accounts",
    reminder:
      "Students learned that passwords protect accounts, passwords should stay secret, and trusted adults can help with account problems.",
  },
  {
    module: "Module 3",
    title: "Scam Spotting",
    reminder:
      "Students learned to watch for strange messages, too-good-to-be-true offers, urgency, and unsafe clicking.",
  },
  {
    module: "Module 4",
    title: "Kind and Safe Technology Use",
    reminder:
      "Students learned how to use kind words online, stay safe in games and group chats, and help others responsibly.",
  },
  {
    module: "Module 5",
    title: "Digital Footprints",
    reminder:
      "Students learned that posts, photos, comments, screenshots, and sharing choices can become part of a digital footprint.",
  },
  {
    module: "Module 6",
    title: "Cyber Safety Review",
    reminder:
      "Students reviewed the biggest CyberShield Kids safety habits and practiced safe choices with fake classroom scenarios.",
  },
];

const completionSkills = [
  "Pause before clicking, posting, replying, downloading, or sharing.",
  "Protect passwords and private information.",
  "Use fake examples only in practice activities.",
  "Ask permission before sharing photos or information about others.",
  "Use kind and respectful words online.",
  "Watch for scam warning signs like urgency, secrecy, unknown senders, and too-good-to-be-true offers.",
  "Ask a trusted adult when something feels unsafe, confusing, scary, embarrassing, secret, or urgent.",
];

const pledgeLines = [
  "I will pause before I click, post, reply, download, or share.",
  "I will keep private information and passwords safe.",
  "I will use kind words in chats, games, comments, messages, and online spaces.",
  "I will think before sharing photos, screenshots, or information about others.",
  "I will ask a trusted adult when something online feels strange, unsafe, confusing, scary, embarrassing, secret, or urgent.",
];

const trustedAdults = [
  "Parent or guardian",
  "Teacher",
  "School counselor",
  "Coach",
  "Librarian",
  "School technology staff",
];

const finalQuestions = [
  {
    question:
      "What should a student do before clicking a strange link or message?",
    answer:
      "Pause and ask a trusted adult before clicking, replying, downloading, or sharing information.",
  },
  {
    question:
      "Should students ever type real passwords into CyberShield practice activities?",
    answer:
      "No. Students should use fake practice examples only and never type real passwords into lessons or classroom activities.",
  },
  {
    question:
      "What should a student do if something online feels scary, secret, confusing, or unsafe?",
    answer:
      "They should ask a trusted adult for help. Unsafe online problems should not be handled alone or kept secret.",
  },
  {
    question:
      "Why should students think before posting photos or screenshots?",
    answer:
      "Photos and screenshots can spread, affect others, and become part of a digital footprint.",
  },
];

const celebrationChecklist = [
  "I completed the CyberShield Kids learning path.",
  "I can explain basic online safety habits.",
  "I can protect private information.",
  "I can pause before risky online choices.",
  "I can use kind words online.",
  "I can ask trusted adults for help.",
  "I am ready to keep practicing cyber safety in real life.",
];

export default function KidsTrackCompletionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6 • Lesson 6.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Kids Track Completion
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              Congratulations! This final lesson celebrates the completion of
              the CyberShield Kids Track. Students review their biggest safety
              habits, complete a final pledge, and prepare to keep making safe,
              kind, and responsible choices online.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/final-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 6
              </Link>

              <Link
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Kids Track
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                What You Completed
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Students completed the full CyberShield Kids Track.
              </h2>

              <p className="leading-relaxed text-slate-300">
                The Kids Track introduced safe, beginner-friendly cyber habits.
                Students practiced protecting private information, keeping
                passwords safe, spotting suspicious messages, using kind words,
                thinking before sharing, and asking trusted adults for help.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Final Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Safe learning continues after this lesson.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should never use real passwords, real private
                information, real screenshots, real messages, real names, real
                school details, real account information, or real online
                conflicts in practice activities. When something online feels
                unsafe or confusing, students should ask a trusted adult.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Track Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Six modules completed
              </h2>

              <p className="leading-relaxed text-slate-300">
                Each module helped students build one part of their online
                safety foundation.
              </p>
            </div>

            <div className="space-y-6">
              {completedModules.map((module) => (
                <div
                  key={module.module}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 font-semibold text-cyan-300">
                    {module.module}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {module.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {module.reminder}
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
                Skills Students Practiced
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                CyberShield Kids safety skills
              </h2>

              <p className="leading-relaxed text-slate-300">
                These are the main habits students should keep practicing after
                finishing the Kids Track.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {completionSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                CyberShield Kids Pledge
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                My final safety promise
              </h2>

              <div className="space-y-3">
                {pledgeLines.map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Trusted Adults
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                People who can help
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {trustedAdults.map((adult) => (
                  <div
                    key={adult}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center font-semibold text-cyan-200"
                  >
                    {adult}
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-relaxed text-slate-300">
                Students do not need to handle unsafe online situations alone.
                Asking for help is a smart and responsible cyber safety habit.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Mini Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Last safety check
              </h2>

              <p className="leading-relaxed text-slate-300">
                These final questions help students review the safest choices
                from the full Kids Track.
              </p>
            </div>

            <div className="space-y-6">
              {finalQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Final Question {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
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

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Completion Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Students can celebrate completion when they can say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {celebrationChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Completion Message
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Congratulations, CyberShield Kids learners!
            </h2>

            <p className="mx-auto max-w-3xl leading-relaxed text-slate-300">
              You practiced important cyber safety habits that can help you make
              safer, kinder, and more responsible choices online. Keep pausing,
              thinking, protecting private information, and asking trusted
              adults for help when you need it.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Kids Track complete.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Return to the Kids Track, review Module 6, or visit the activities
              page for more safe cyber learning.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/final-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Module 6
              </Link>

              <Link
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Kids Track
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Activities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}