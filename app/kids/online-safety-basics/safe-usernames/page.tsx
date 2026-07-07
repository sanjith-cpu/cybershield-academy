import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const usernameRules = [
  "Do not include your full real name.",
  "Do not include your school name.",
  "Do not include your home address or location.",
  "Do not include your birthday, age, or phone number.",
  "Do not include your password or hints about your password.",
  "Ask a trusted adult before making a new account or username.",
];

const vocabulary = [
  {
    term: "Username",
    meaning:
      "A name someone uses on a website, game, app, or school tool instead of always showing their full real name.",
  },
  {
    term: "Safe username",
    meaning:
      "A username that does not reveal private details like a full name, school, birthday, address, or location.",
  },
  {
    term: "Nickname",
    meaning:
      "A made-up or shortened name. Nicknames can be safer when they do not reveal private information.",
  },
  {
    term: "Identity clue",
    meaning:
      "A detail that can help someone guess who you are, where you go to school, where you live, or how to find you.",
  },
];

const usernameExamples = [
  {
    label: "Safer username",
    username: "BlueRocket27",
    reason:
      "This does not show a full name, school, address, birthday, or location.",
  },
  {
    label: "Unsafe username",
    username: "Aarav_BriarWoods_2015",
    reason:
      "This gives clues about a real name, school, and possible birth year.",
  },
  {
    label: "Safer username",
    username: "PixelPanda",
    reason:
      "This is playful and does not include private information.",
  },
  {
    label: "Unsafe username",
    username: "Maya_Loudoun_Address123",
    reason:
      "This gives identity and location clues that should stay private.",
  },
];

const safeUnsafeExamples = [
  {
    label: "Safer choice",
    text: "A student chooses a fun username based on an animal, color, or hobby without adding their full name, school, or birthday.",
  },
  {
    label: "Unsafe choice",
    text: "A student makes a username with their full name, school name, and birth year.",
  },
  {
    label: "Safer choice",
    text: "A student asks a parent or teacher before creating a username for a new website, game, or app.",
  },
];

const realLifeSteps = [
  "Pause before creating a username for a game, app, website, or school tool.",
  "Check whether the username includes your full name, school, birthday, address, location, or phone number.",
  "Choose words that are fun but do not identify you, such as animals, colors, space words, nature words, or hobbies.",
  "Do not use your password or password hints inside your username.",
  "Ask a trusted adult before making a new account or username.",
];

const practiceQuestions = [
  {
    question: "Which username is safer: SoccerStar22 or Emma_RiverRoadSchool?",
    answer:
      "SoccerStar22 is safer because it does not reveal a full name or school name.",
  },
  {
    question:
      "Why is it unsafe to put your school name in a username?",
    answer:
      "A school name can give strangers a clue about where you are during the day. It is safer to keep school details private.",
  },
  {
    question:
      "A game asks you to create a username. You are not sure what to choose. What should you do?",
    answer:
      "Ask a trusted adult for help choosing a username that does not reveal private information.",
  },
  {
    question:
      "Is it safe to put your password hint in your username?",
    answer:
      "No. A username should never include a password, password hint, or anything that helps someone guess your account information.",
  },
];

const reviewChecklist = [
  "I can explain what a username is.",
  "I can describe what makes a username safer.",
  "I can avoid using my full name, school, birthday, address, or location in a username.",
  "I can choose fun username ideas that do not reveal private information.",
  "I can ask a trusted adult before creating a new account or username.",
];

export default function KidsSafeUsernamesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1 • Lesson 1.3
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Safe Usernames
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn how usernames can reveal clues
              about them. They will practice choosing usernames that are fun,
              simple, and safer because they do not include private information.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/private-information"
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
                href="/kids/online-safety-basics/trusted-adults"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                What You Will Learn
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                By the end of this lesson, students should be able to:
              </h2>

              <div className="space-y-3">
                {[
                  "Explain what a username is.",
                  "Recognize when a username gives away private information.",
                  "Choose username ideas that do not reveal identity or location clues.",
                  "Ask a trusted adult before making a new account or username.",
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
                Do not create real accounts for this lesson.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                This page is for learning only. Students should not create real
                accounts, enter real passwords, or use real private information
                while practicing username safety. Use fake examples only.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Simple Explanation
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What makes a username safer?
              </h2>

              <p className="leading-relaxed text-slate-300">
                A username is a name used on a website, game, app, or school
                tool. A safer username does not reveal who you are, where you
                live, where you go to school, how old you are, or how to contact
                you. Good usernames can be creative, but they should not include
                private information.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {usernameRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Key Vocabulary
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Words to know
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {vocabulary.map((word) => (
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
                Username Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Compare safer and unsafe usernames.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These are fake examples for practice. Students should never use
                real private information in CyberShield activities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {usernameExamples.map((example) => (
                <div
                  key={example.username}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-3 font-semibold text-cyan-300">
                    {example.label}
                  </p>

                  <h3 className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-2xl font-bold text-white">
                    {example.username}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {example.reason}
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
                Safe and Unsafe Choices
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice spotting username safety.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A username should not make it easy for strangers to learn who a
                student is, where they go to school, or where they live.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safeUnsafeExamples.map((example) => (
                <div
                  key={example.text}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="mb-3 text-xl font-bold text-cyan-200">
                    {example.label}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {example.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                What clues can a username give away?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                A username might accidentally reveal a student's name, school,
                age, birthday, favorite location, team, or town. Even one clue
                can sometimes tell strangers too much, especially when combined
                with other online details.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Why is a username like StarTiger or BlueRocket usually safer
                  than a username with a full name and school name?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the no-private-clues habit.
              </h2>

              <div className="space-y-3">
                {realLifeSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Which username choice is safer?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and choose the safer response. These are
                fake examples made for learning.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
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
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to Lesson 1.4, students should be able to say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
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

        <section className="border-t border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Online Safety Basics module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn who trusted adults are and when they
              should ask for help online.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/private-information"
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
                href="/kids/online-safety-basics/trusted-adults"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}