import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonsReviewed = [
  {
    number: "3.1",
    title: "What Is a Scam?",
    text: "Students learned that scams are tricks that try to get people to click, share, believe, or do something unsafe.",
  },
  {
    number: "3.2",
    title: "Too-Good-to-Be-True Offers",
    text: "Students learned that surprise prizes, free game coins, impossible rewards, and urgent offers can be warning signs.",
  },
  {
    number: "3.3",
    title: "Strange Messages",
    text: "Students learned how to notice messages that ask for secrets, passwords, private information, fast replies, or unsafe actions.",
  },
  {
    number: "3.4",
    title: "Pause Before You Click",
    text: "Students learned the pause-check-ask habit before clicking links, buttons, popups, downloads, or messages.",
  },
];

const vocabularyReview = [
  {
    term: "Scam",
    meaning:
      "A trick that tries to get someone to click, share information, believe something fake, or do something unsafe.",
  },
  {
    term: "Warning sign",
    meaning:
      "A clue that tells students to pause, slow down, and ask for help before continuing.",
  },
  {
    term: "Too good to be true",
    meaning:
      "Something that sounds so amazing, easy, or surprising that students should pause and check before believing it.",
  },
  {
    term: "Strange message",
    meaning:
      "A message that feels confusing, suspicious, unsafe, unexpected, or uncomfortable.",
  },
  {
    term: "Popup",
    meaning:
      "A box or message that appears on a screen, sometimes asking someone to click, download, or share information.",
  },
  {
    term: "Pause-check-ask",
    meaning:
      "A safety habit: pause first, check for warning signs, and ask a trusted adult before continuing.",
  },
];

const reviewQuestions = [
  {
    question:
      "A popup says you won a prize, but you did not enter a contest. What should you do?",
    answer:
      "Do not click it. Surprise prize messages can be scam warning signs. Pause and ask a trusted adult.",
  },
  {
    question:
      "A game message promises free coins if you type your password. What is unsafe about this?",
    answer:
      "Passwords are private. Students should not type passwords into reward messages, games, popups, or practice activities.",
  },
  {
    question:
      "Someone online asks what school you go to and says not to tell your parents. What warning signs do you notice?",
    answer:
      "The message asks for private information and asks for secrecy. Do not reply. Tell a trusted adult.",
  },
  {
    question:
      "A stranger sends a link in a game chat. What is the safer choice?",
    answer:
      "Do not click the link. Ask a trusted adult because links from strangers can be unsafe.",
  },
];

const safeOrUnsafe = [
  {
    situation:
      "A student sees a strange prize popup and asks a parent before clicking.",
    answer: "Safer choice",
    reason:
      "Asking a trusted adult before clicking suspicious popups is a smart safety habit.",
  },
  {
    situation:
      "A student types a password into a message promising free game rewards.",
    answer: "Unsafe choice",
    reason:
      "Passwords should stay private and should not be typed into suspicious messages or reward offers.",
  },
  {
    situation:
      "A student gets a message asking for private information and does not reply.",
    answer: "Safer choice",
    reason:
      "Students should not reply to suspicious messages asking for private information.",
  },
  {
    situation:
      "A student downloads a file from an unexpected message because it says there is a prize.",
    answer: "Unsafe choice",
    reason:
      "Students should not download strange files. They should pause and ask a trusted adult first.",
  },
];

const finalChecklist = [
  "I can explain what a scam is.",
  "I can recognize warning signs like prizes, pressure, secrets, private questions, and strange links.",
  "I know not to click suspicious links, buttons, popups, or downloads.",
  "I know not to type real passwords into messages, popups, games, or practice activities.",
  "I know not to share private information because of a prize or urgent message.",
  "I can pause before replying to strange messages.",
  "I can use the pause-check-ask habit.",
  "I can ask a trusted adult when something online feels confusing, scary, urgent, secret, or unsafe.",
];

const scamSafetyRules = [
  "Pause before clicking.",
  "Check for warning signs.",
  "Ask a trusted adult.",
  "Do not share passwords.",
  "Do not share private information.",
  "Do not keep suspicious messages secret.",
];

export default function KidsScamSpottingReviewPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 3 • Lesson 3.5
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Scam Spotting Review
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              This review helps students practice the biggest ideas from Module
              3: what scams are, how fake offers work, how to notice strange
              messages, and how to use the pause-check-ask habit before
              clicking.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/pause-before-you-click"
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
                  "Explain scam warning signs in simple words.",
                  "Recognize suspicious offers, popups, links, and messages.",
                  "Choose safer actions before clicking or replying.",
                  "Ask trusted adults for help when something feels unsafe.",
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
                CyberShield should not include real scam links, real suspicious
                downloads, real phishing pages, or real private student
                information. Students should not click real suspicious links to
                test them. They should ask a trusted adult for help.
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
                What Module 3 covered
              </h2>

              <p className="leading-relaxed text-slate-300">
                Module 3 helped students practice scam awareness without using
                real suspicious links, real passwords, or real private
                information.
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
                Important words from Module 3
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
                Students can answer these questions out loud, in a notebook, or
                during a classroom discussion.
              </p>
            </div>

            <div className="space-y-6">
              {reviewQuestions.map((item, index) => (
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
                Practice spotting safer scam choices.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and classroom safe. Students should use
                them to practice noticing scam warning signs.
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
                  "Pause before clicking, replying, downloading, or sharing information.",
                  "Check for warning signs like prizes, pressure, secrets, strange links, and private questions.",
                  "Ask a trusted adult when something online feels confusing, scary, urgent, secret, or unsafe.",
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
                Module 3 Rules
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Scam spotting reminders
              </h2>

              <div className="grid gap-3">
                {scamSafetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {rule}
                  </div>
                ))}
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
                Students are ready to finish Module 3 when they can say:
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
              You finished Kids Module 3.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              The next future Kids module will focus on kind and safe technology
              use. For now, students can return to the Kids track, review Module
              3, or practice more activities.
            </p>

            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-6 text-left">
              <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                Scam Spotting Pledge
              </h3>

              <p className="leading-relaxed text-slate-300">
                I will pause before clicking, check for warning signs, protect
                my private information, avoid suspicious links and downloads,
                and ask a trusted adult when something online feels strange or
                unsafe.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/scam-spotting/pause-before-you-click"
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