import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const privateInfoExamples = [
  "Home address",
  "Phone number",
  "Passwords",
  "School name",
  "Birthday",
  "Family details",
  "Location",
  "Email address",
];

const vocabulary = [
  {
    term: "Private information",
    meaning:
      "Details that should be protected because they can tell others too much about you, your family, your accounts, or where you are.",
  },
  {
    term: "Personal information",
    meaning:
      "Information about a person. Some personal information is harmless, but some details should stay private.",
  },
  {
    term: "Location",
    meaning:
      "Information that shows where someone is, where they live, where they go to school, or where they are right now.",
  },
  {
    term: "Oversharing",
    meaning:
      "Sharing too many details online, especially details that strangers or unsafe websites do not need.",
  },
];

const safeUnsafeExamples = [
  {
    label: "Safer example",
    text: "A student uses a classroom nickname during a teacher-approved activity and does not share their address, phone number, password, or school name.",
  },
  {
    label: "Unsafe example",
    text: "A student tells a stranger in an online game their full name, school, birthday, and where they live.",
  },
  {
    label: "Safer example",
    text: "A student asks a parent or teacher before filling out a form on a new website.",
  },
];

const realLifeSteps = [
  "Pause before sharing details in a game, chat, form, comment, or popup.",
  "Ask yourself: Could this help a stranger find me, contact me, or guess something about my account?",
  "Do not share passwords, addresses, phone numbers, school names, or location details online.",
  "Ask a trusted adult before filling out forms or answering questions from websites, games, or apps.",
  "Tell a trusted adult if someone online asks for private information or tells you to keep it secret.",
];

const practiceQuestions = [
  {
    question:
      "A game asks for your home address before giving you free coins. What should you do?",
    answer:
      "Do not type your address. Pause and ask a trusted adult because your home address is private information.",
  },
  {
    question:
      "A class website asks for your first name while your teacher is helping the class. What should you do?",
    answer:
      "Follow your teacher's directions. If you are unsure, ask the teacher before typing anything.",
  },
  {
    question:
      "Someone in an online game asks what school you go to. What should you do?",
    answer:
      "Do not share your school name. School information can help someone learn where you are, so ask a trusted adult for help.",
  },
  {
    question:
      "A friend asks for your password so they can help you in a game. What should you do?",
    answer:
      "Do not share your password. Passwords are private, even with friends.",
  },
];

const reviewChecklist = [
  "I can name examples of private information.",
  "I understand why addresses, phone numbers, passwords, school names, and locations should be protected.",
  "I can pause before typing private details online.",
  "I can ask a trusted adult before filling out online forms.",
  "I know that CyberShield practice should use fake examples only.",
];

export default function KidsPrivateInformationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 1 • Lesson 1.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Private Information
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn which details should stay private
              online. They will practice recognizing information that could
              reveal where they live, where they go to school, how to contact
              them, or how to access their accounts.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/personal-information"
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
                href="/kids/online-safety-basics/safe-usernames"
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
                  "Explain what private information means.",
                  "Name examples of information that should not be shared with strangers online.",
                  "Understand why location, school, and account details should be protected.",
                  "Ask a trusted adult before sharing sensitive information.",
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
                Do not type real private details.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                This lesson should never ask students to enter real addresses,
                real phone numbers, real passwords, real school names, real
                birthdays, or real family details. All examples should be fake,
                safe, and age-appropriate.
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
                What information should stay private?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Private information is information that can tell others too much
                about you, your family, your location, or your accounts. Some
                websites and games may ask for information they do not need.
                Students should pause before sharing and ask a trusted adult if
                they are not sure.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {privateInfoExamples.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center font-semibold text-cyan-200"
                >
                  {item}
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
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice noticing private information.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples use fake situations. Students should use them to
                practice deciding when to pause and ask for help.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safeUnsafeExamples.map((example) => (
                <div
                  key={example.text}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Think About It
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Why should some information stay private?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Private information can help someone contact you, find where you
                are, pretend to be you, or get into one of your accounts. That is
                why students should slow down and ask for help before sharing
                sensitive details.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Why might sharing your school name or home address online be
                  unsafe?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the protect-private-info habit.
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

        <section className="px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Mini Practice
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What should stay private?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and think about the safest response. These
                are classroom-safe examples and do not include real private
                student information.
              </p>
            </div>

            <div className="space-y-6">
              {practiceQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    Practice {index + 1}
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
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Review Checklist
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Before moving to Lesson 1.3, students should be able to say:
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {reviewChecklist.map((item) => (
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
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Online Safety Basics module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will learn how to choose safer usernames that do
              not reveal private information.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics/personal-information"
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
                href="/kids/online-safety-basics/safe-usernames"
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