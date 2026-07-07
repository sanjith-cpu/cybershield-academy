import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cleanupSteps = [
  "Pause before reacting, replying, deleting quickly, or sending more messages.",
  "Do not panic. Online mistakes can happen, and the next safe choice matters.",
  "Do not keep the problem secret if it feels confusing, embarrassing, unsafe, scary, urgent, or too big to handle alone.",
  "Tell a trusted adult what happened using calm and honest words.",
  "Ask for help with deleting, removing, reporting, or explaining the situation.",
  "Learn a safer choice for next time before posting, sharing, or commenting again.",
];

const vocabulary = [
  {
    term: "Mistake",
    meaning:
      "Something someone did by accident or wishes they had done differently. Online mistakes should not be hidden when help is needed.",
  },
  {
    term: "Trusted adult",
    meaning:
      "A safe grown-up who can help, such as a parent, guardian, teacher, counselor, coach, librarian, or school technology staff member.",
  },
  {
    term: "Delete or remove",
    meaning:
      "Taking something down when it should not stay online. A trusted adult can help decide if this is the right step.",
  },
  {
    term: "Report",
    meaning:
      "Telling a trusted adult or using a safe reporting tool when something online feels wrong, unsafe, mean, or confusing.",
  },
  {
    term: "Ask for help",
    meaning:
      "Talking to a trusted adult instead of trying to fix a serious online problem alone.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student accidentally posts a fake example that includes a school name and asks a trusted adult whether it should be removed.",
  },
  {
    label: "Unsafe choice",
    text: "A student feels worried about a screenshot spreading but keeps it secret and tries to solve it alone.",
  },
  {
    label: "Safer choice",
    text: "A student shares a photo without asking, then talks to a trusted adult and learns to ask permission next time.",
  },
];

const realLifeSteps = [
  "Pause and take a breath before doing anything else.",
  "Tell a trusted adult what happened.",
  "Do not share more screenshots or private messages to explain the problem.",
  "Do not use real private information in practice activities.",
  "Ask whether something should be deleted, removed, reported, or left for an adult to handle.",
  "Remember the safer habit: pause, ask, and get help early.",
];

const practiceQuestions = [
  {
    question:
      "A student accidentally posts a picture where a school name is visible in the background. What should they do?",
    answer:
      "They should pause and tell a trusted adult. The adult can help decide whether the post should be removed or changed.",
  },
  {
    question:
      "A student shares a photo that includes another person before asking permission. What is the safer next step?",
    answer:
      "They should ask a trusted adult for help and learn to ask permission before sharing photos of other people.",
  },
  {
    question:
      "A screenshot is being shared and someone feels upset. What should a student avoid doing?",
    answer:
      "They should avoid spreading the screenshot more. The safer choice is to stop sharing it and tell a trusted adult.",
  },
  {
    question:
      "A student wrote a comment and later feels worried that it may have hurt someone. What should they do?",
    answer:
      "They should talk to a trusted adult and ask how to make a kind and safe repair if appropriate.",
  },
  {
    question:
      "A student is not sure whether to ask a parent, teacher, counselor, or school technology staff member. What should they do?",
    answer:
      "They can start with any trusted adult. That adult can help them find the right person to help.",
  },
];

const reviewChecklist = [
  "I can pause before reacting to an online mistake.",
  "I know that I should not keep online worries secret.",
  "I can name trusted adults who can help me.",
  "I know not to fix serious online problems alone.",
  "I understand that deleting, removing, or reporting should be done with trusted adult help when needed.",
  "I can make safer choices before posting, sharing, or commenting next time.",
];

export default function KidsCleaningUpAndAskingForHelpPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 5 • Lesson 5.4
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Cleaning Up and Asking for Help
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students learn what to do if they post something
              by mistake, feel worried about an online choice, or need help with
              a photo, post, comment, message, screenshot, or private
              information.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/photos-posts-and-screenshots"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module 5
              </Link>

              <Link
                href="/kids/digital-footprints/review"
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
                  "Explain what to do after an online mistake.",
                  "Understand why online worries should not be kept secret.",
                  "Name trusted adults who can help with online problems.",
                  "Practice safer choices for next time.",
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
                Do not use real private information.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                CyberShield practice examples should stay fake and classroom
                safe. Students should not use real screenshots, real private
                messages, real names, real conflicts, real passwords, real
                addresses, or real school information in practice activities.
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
                Online mistakes should be handled with help, not panic.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Sometimes a student may post something by mistake, share a photo
                too quickly, write a comment they regret, or feel worried about
                a screenshot or message. The safest response is to pause, stay
                calm, and ask a trusted adult for help. Students should not try
                to fix serious online problems alone.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {cleanupSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5 text-slate-200"
                >
                  {step}
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
                Practice asking for help.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                practice with made-up situations, not real screenshots, real
                private information, real names, or real conflicts.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => (
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
                Why should students ask for help early?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Asking for help early can stop a small online mistake from
                becoming a bigger problem. Trusted adults can help students stay
                safe, protect private information, and make respectful choices.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Who is one trusted adult a student could talk to if something
                  online feels confusing, embarrassing, unsafe, secret, or
                  urgent?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use the pause-and-ask habit.
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
                What is the safest next step?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each fake situation and think about the safest answer.
                These practice questions use fake examples only.
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
                Before moving to Lesson 5.5, students should be able to say:
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
              Continue the Digital Footprints module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will review the main ideas from Module 5,
              including digital footprints, thinking before sharing, photos,
              screenshots, and asking trusted adults for help.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/digital-footprints/photos-posts-and-screenshots"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Previous Lesson
              </Link>

              <Link
                href="/kids/digital-footprints"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Module
              </Link>

              <Link
                href="/kids/digital-footprints/review"
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