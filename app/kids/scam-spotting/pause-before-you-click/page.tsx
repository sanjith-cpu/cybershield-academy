import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clickWarningSigns = [
  "A button says to click quickly.",
  "A popup says you won a prize.",
  "A link comes from someone you do not know.",
  "A message asks for a password or private information.",
  "A download appears when you were not expecting it.",
  "A message tells you not to ask a trusted adult.",
];

const pauseCheckAskSteps = [
  {
    step: "Pause",
    text: "Stop before clicking, replying, downloading, or typing information.",
  },
  {
    step: "Check",
    text: "Look for warning signs like pressure, prizes, secrets, strange links, or private questions.",
  },
  {
    step: "Ask",
    text: "Ask a parent, teacher, guardian, counselor, or school technology staff member for help.",
  },
];

const vocabulary = [
  {
    term: "Link",
    meaning:
      "Text or a button that can take someone to another page, website, app, or file.",
  },
  {
    term: "Popup",
    meaning:
      "A box or message that appears on a screen, sometimes asking someone to click, download, or share information.",
  },
  {
    term: "Download",
    meaning:
      "A file that moves onto a device. Students should ask a trusted adult before downloading anything.",
  },
  {
    term: "Pause-check-ask",
    meaning:
      "A safety habit: pause first, check for warning signs, and ask a trusted adult before continuing.",
  },
];

const examples = [
  {
    label: "Safer example",
    text: "A student sees a strange button that says 'Click now!' and asks a trusted adult before clicking.",
  },
  {
    label: "Unsafe example",
    text: "A student downloads a file from a random message because it says there is a free prize.",
  },
  {
    label: "Safer example",
    text: "A student closes a suspicious popup and tells a teacher because it asked for private information.",
  },
];

const realLifeSteps = [
  "Pause before clicking links, buttons, popups, downloads, or messages.",
  "Check whether the message feels urgent, strange, secret, or too good to be true.",
  "Do not click links from strangers or unexpected messages.",
  "Do not download files without trusted adult permission.",
  "Do not type passwords or private information into popups or strange pages.",
  "Ask a trusted adult when something online feels confusing, scary, urgent, secret, or unsafe.",
];

const practiceQuestions = [
  {
    question:
      "A popup says, 'Click now to claim your prize!' What should you do?",
    answer:
      "Pause and ask a trusted adult before clicking. Surprise prize popups can be warning signs.",
  },
  {
    question:
      "A stranger sends a link in a game chat. What is the safer choice?",
    answer:
      "Do not click the link. Ask a trusted adult for help because links from strangers can be unsafe.",
  },
  {
    question:
      "A website asks you to download something, but you do not know what it is. What should you do?",
    answer:
      "Do not download it. Ask a trusted adult before downloading files.",
  },
  {
    question:
      "A message asks for your password before letting you see a reward. What should you do?",
    answer:
      "Do not type your password. Passwords are private. Tell a trusted adult about the message.",
  },
];

const reviewChecklist = [
  "I can explain the pause-check-ask habit.",
  "I can pause before clicking links, buttons, popups, or downloads.",
  "I can check for warning signs like pressure, prizes, secrets, and private questions.",
  "I know not to download strange files without trusted adult permission.",
  "I know not to type passwords or private information into suspicious pages.",
  "I can ask a trusted adult when something online feels strange or unsafe.",
];

export default function KidsPauseBeforeYouClickPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3 • Lesson 3.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Pause Before You Click
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn a simple safety habit for links,
              buttons, popups, downloads, and messages: pause, check, and ask.
              Students should slow down before clicking anything that feels
              strange, urgent, secret, or unsafe.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/strange-messages"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 3
              </Link>

              <Link
                href="/kids/scam-spotting/review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Module Review
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
                  "Explain why it is important to pause before clicking.",
                  "Recognize risky links, buttons, popups, downloads, and messages.",
                  "Use the pause-check-ask habit.",
                  "Ask a trusted adult before clicking something suspicious.",
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
                Do not click real suspicious links.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield examples should stay fake and safe. Students should
                not click real suspicious links, download strange files, visit
                unknown pages, or type real passwords or private information
                into practice activities.
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
                Clicking should not be automatic.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Some links, buttons, popups, and downloads are safe, especially
                when a teacher, parent, or trusted adult is guiding the student.
                But suspicious messages may try to make students click quickly.
                The safe habit is to pause, check for warning signs, and ask a
                trusted adult before continuing.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {clickWarningSigns.map((sign) => (
                <div
                  key={sign}
                  className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5 text-slate-200"
                >
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Pause-Check-Ask
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                A simple safety routine
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students can use this routine any time something online feels
                strange, urgent, secret, confusing, or unsafe.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pauseCheckAskSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6"
                >
                  <h3 className="mb-3 text-2xl font-bold text-emerald-200">
                    {item.step}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {item.text}
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
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
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

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Safe and Unsafe Examples
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Practice before clicking.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                not click real suspicious links or download real suspicious
                files during practice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => (
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
                Why should students pause before clicking?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Clicking quickly can lead to unknown websites, strange
                downloads, fake prize pages, or messages that ask for private
                information. Pausing gives students time to notice warning signs
                and get help before something becomes a problem.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What warning signs would make you pause before clicking a
                  button, link, popup, or download?
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
                Should you click?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each situation and choose the safest response. These
                practice questions use fake examples only.
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
                Before moving to the Module 3 review, students should be able to
                say:
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
              Continue to the Module 3 review.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will review scams, fake offers, strange messages,
              warning signs, and the pause-check-ask habit.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/strange-messages"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/scam-spotting"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/scam-spotting/review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Module Review
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}