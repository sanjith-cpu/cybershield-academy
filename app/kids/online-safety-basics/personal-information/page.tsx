import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vocabulary = [
  {
    term: "Personal information",
    meaning:
      "Details about a person, such as their name, age, school, hobbies, or favorite things.",
  },
  {
    term: "Private information",
    meaning:
      "Information that should be protected, such as home address, phone number, passwords, or family details.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A parent, teacher, counselor, guardian, or school technology staff member who can help students make safe choices.",
  },
  {
    term: "Online form",
    meaning:
      "A place on a website or app that asks someone to type information.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student says they like soccer, drawing, or science without sharing their full name, address, school, or password.",
  },
  {
    label: "Unsafe example",
    text: "A student types their full name, home address, school name, and phone number into a random game popup.",
  },
];

const realLifeSteps = [
  "Pause before typing information into a website, game, app, form, or chat.",
  "Ask: Does this website really need this information?",
  "Do not share your address, phone number, password, school name, or family details without trusted adult help.",
  "Tell a trusted adult if a website, game, or person asks for information that feels strange.",
];

const practiceQuestions = [
  {
    question:
      "A game asks for your favorite color. Is that usually personal information or private information?",
    answer:
      "It is usually personal information, but students should still be careful and ask for help if the game also asks for private details.",
  },
  {
    question:
      "A popup asks for your home address to win a prize. What should you do?",
    answer:
      "Do not type the address. Pause, close or step away from the popup, and ask a trusted adult for help.",
  },
  {
    question:
      "A class website asks for your first name during a teacher-led activity. What should you do?",
    answer:
      "Follow the teacher's instructions. If unsure, ask the teacher before typing anything.",
  },
];

const reviewChecklist = [
  "I can explain what personal information means.",
  "I can name examples of information that should be protected.",
  "I can pause before typing information online.",
  "I can ask a trusted adult when a website, game, app, or person asks for private details.",
  "I understand that CyberShield examples should use fake information only.",
];

export default function KidsPersonalInformationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1 • Lesson 1.1
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Personal Information
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn what personal information means,
              why websites and apps may ask for information, and why it is
              important to pause before sharing details online.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 1
              </Link>

              <Link
                href="/kids/online-safety-basics/private-information"
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
                  "Explain what personal information means.",
                  "Give examples of personal information.",
                  "Understand that some information should not be shared online.",
                  "Pause and ask a trusted adult before sharing details.",
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
                Never use real private information in practice.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                This lesson should use safe, fake examples only. Students should
                not type real home addresses, phone numbers, passwords, school
                names, or family details into CyberShield activities.
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
                What is personal information?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Personal information is information about you. Some personal
                information may seem simple, like a favorite sport or favorite
                color. Other information is more sensitive, like where you live,
                what school you attend, your phone number, or your password.
                Online, students should be careful because websites, games,
                apps, popups, and strangers may ask for information they do not
                really need.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((example) => (
                <div
                  key={example.label}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-cyan-200">
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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Why might a website ask for information?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Some websites need information for safe reasons, like a teacher
                helping students sign into a school tool. But other websites,
                games, popups, or strangers may ask for information they should
                not have.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What should you do if a website asks for information and you
                  are not sure if it is safe?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-check-ask habit.
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
                Choose the safer answer
              </h2>

              <p className="leading-relaxed text-slate-300">
                These questions use safe examples only. Students should answer
                by thinking about whether information is okay to share or should
                stay protected.
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
                Before moving to Lesson 1.2, students should be able to say:
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
              Next, students will learn which details should stay private and
              why they should ask a trusted adult before sharing sensitive
              information online.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Kids Track
              </Link>

              <Link
                href="/kids/online-safety-basics/private-information"
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