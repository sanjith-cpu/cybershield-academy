import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonsReviewed = [
  {
    number: "1.1",
    title: "Personal Information",
    text: "Students learned that personal information means details about a person, and they should pause before sharing information online.",
  },
  {
    number: "1.2",
    title: "Private Information",
    text: "Students learned that addresses, phone numbers, passwords, school names, locations, and family details should be protected.",
  },
  {
    number: "1.3",
    title: "Safe Usernames",
    text: "Students learned that usernames should not reveal full names, schools, birthdays, locations, or password clues.",
  },
  {
    number: "1.4",
    title: "Trusted Adults",
    text: "Students learned to ask a parent, guardian, teacher, counselor, or school technology staff member when something online feels unsafe.",
  },
];

const vocabularyReview = [
  {
    term: "Personal information",
    meaning:
      "Information about a person, such as a name, favorite activity, hobby, age, or other detail.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as home address, phone number, password, school name, location, or family details.",
  },
  {
    term: "Username",
    meaning:
      "A name used on a website, game, app, or school tool instead of always showing a full real name.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A grown-up who helps students stay safe, such as a parent, guardian, teacher, counselor, or school technology staff member.",
  },
  {
    term: "Warning sign",
    meaning:
      "Something that tells a student to pause and ask for help before clicking, replying, sharing, or continuing.",
  },
  {
    term: "Oversharing",
    meaning:
      "Sharing too many details online, especially details that strangers, games, popups, or unsafe websites do not need.",
  },
];

const safetyQuestions = [
  {
    question:
      "A website asks for your home address so you can win a prize. What should you do?",
    answer:
      "Do not type the address. Pause and ask a trusted adult because a home address is private information.",
  },
  {
    question:
      "Someone in an online game asks what school you go to. What should you do?",
    answer:
      "Do not share your school name. School information can reveal where you are during the day, so ask a trusted adult for help.",
  },
  {
    question:
      "Which username is safer: DragonCloud24 or Sophia_ElmStreetSchool?",
    answer:
      "DragonCloud24 is safer because it does not reveal a full name, school, or location clue.",
  },
  {
    question:
      "A message says, 'Do not tell your parents, but send me your password.' What should you do?",
    answer:
      "Do not reply or send the password. This is a warning sign. Tell a trusted adult right away.",
  },
];

const safeOrUnsafe = [
  {
    situation:
      "A student asks a teacher before clicking a strange link in a classroom tool.",
    answer: "Safer choice",
    reason:
      "Asking a trusted adult before clicking something suspicious is a smart cyber safety habit.",
  },
  {
    situation:
      "A student uses their full name, school name, and birthday in a username.",
    answer: "Unsafe choice",
    reason:
      "That username reveals identity and location clues that should stay private.",
  },
  {
    situation:
      "A student sees a scary popup and steps away from the device to tell a parent.",
    answer: "Safer choice",
    reason:
      "Students should not handle scary or suspicious online situations alone.",
  },
  {
    situation:
      "A student shares their game password with a friend who promises to help.",
    answer: "Unsafe choice",
    reason:
      "Passwords should stay private, even with friends.",
  },
];

const finalChecklist = [
  "I can explain the difference between personal information and private information.",
  "I can name details that should stay private online.",
  "I can choose safer usernames that do not reveal private clues.",
  "I can recognize warning signs like secrets, pressure, strange popups, and private questions.",
  "I can pause before clicking, replying, sharing, or filling out forms.",
  "I can ask a trusted adult when something online feels confusing, scary, urgent, secret, or unsafe.",
  "I understand that CyberShield examples should use fake information only.",
];

export default function KidsOnlineSafetyBasicsReviewPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1 • Lesson 1.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Online Safety Basics Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This review helps students practice the biggest ideas from Module
              1: personal information, private information, safe usernames,
              trusted adults, warning signs, and safe next steps.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/trusted-adults"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 1
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
                Review Goal
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this review, students should be able to:
              </h2>

              <div className="space-y-3">
                {[
                  "Explain what information should stay private.",
                  "Choose safer actions when websites, games, apps, or people ask for information.",
                  "Recognize safer and unsafe username choices.",
                  "Know when to pause and ask a trusted adult.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                This review uses fake examples only.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not type real passwords, real home addresses,
                real phone numbers, real school names, real usernames, or real
                family details into CyberShield activities. If anything online
                feels unsafe, students should ask a trusted adult for help.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Lessons Reviewed
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Module 1 covered
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 1 introduced the first cyber safety habits elementary
                students should practice before clicking, sharing, replying, or
                making usernames online.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {lessonsReviewed.map((lesson) => (
                <div
                  key={lesson.number}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    Lesson {lesson.number}
                  </p>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {lesson.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {lesson.text}
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
                Vocabulary Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Important words from Module 1
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabularyReview.map((word) => (
                <div
                  key={word.term}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                    {word.term}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {word.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Questions
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Choose the safer answer
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students can answer each question out loud, in a notebook, or
                during a classroom discussion.
              </p>
            </div>

            <div className="space-y-6">
              {safetyQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Question {index + 1}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe or Unsafe Review
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice spotting safe choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and classroom safe. Students should use
                them to practice deciding what the safer choice is.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {safeOrUnsafe.map((item) => (
                <div
                  key={item.situation}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-4 text-2xl font-bold">
                    {item.situation}
                  </h3>

                  <p className="mb-3 font-semibold text-cyan-300">
                    Answer: {item.answer}
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                Real-Life Safety Habit
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Remember: pause, check, ask.
              </h2>

              <div className="space-y-3">
                {[
                  "Pause before clicking, replying, sharing, or filling out forms.",
                  "Check whether a message, popup, username, or website asks for private information.",
                  "Ask a trusted adult when something feels strange, scary, urgent, secret, or unsafe.",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Reflection
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Think about your online safety plan.
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Students can think about this question after finishing the
                review:
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <p className="leading-relaxed text-slate-300">
                  What is one online safety habit you will remember the next
                  time you use a website, game, app, school tool, or device?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Final Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Students are ready to finish Module 1 when they can say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {finalChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Module Complete
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              You finished Kids Module 1.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              The next future Kids module will focus on passwords and accounts.
              For now, students can return to the Kids track, review the module,
              or practice more activities.
            </p>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-6 text-left">
              <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                Cyber Safety Pledge
              </h3>

              <p className="leading-relaxed text-slate-300">
                I will protect private information, choose safer usernames,
                pause before clicking or sharing, be kind online, and ask a
                trusted adult when something online feels wrong.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/trusted-adults"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Practice Activities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}