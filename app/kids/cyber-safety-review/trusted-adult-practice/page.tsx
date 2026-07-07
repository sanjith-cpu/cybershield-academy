import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatYouWillLearn = [
  "Review who trusted adults can be.",
  "Practice knowing when to ask a trusted adult for help.",
  "Learn safe words to use when explaining an online problem.",
  "Understand why students should not keep unsafe online situations secret.",
];

const vocabulary = [
  {
    term: "Trusted adult",
    meaning:
      "A safe grown-up who can help, such as a parent, guardian, teacher, counselor, coach, librarian, or school technology staff member.",
  },
  {
    term: "Ask for help",
    meaning:
      "Telling a trusted adult when something online feels confusing, unsafe, scary, embarrassing, secret, or urgent.",
  },
  {
    term: "Unsafe situation",
    meaning:
      "Something that could make a student feel worried, pressured, tricked, upset, or unsure online.",
  },
  {
    term: "Secret pressure",
    meaning:
      "When someone online tells a student not to tell a trusted adult. Safe adults do not ask students to hide unsafe problems.",
  },
  {
    term: "Report",
    meaning:
      "Getting help from a trusted adult or using a safe school or platform tool when something online feels wrong or unsafe.",
  },
];

const trustedAdults = [
  "Parent or guardian",
  "Teacher",
  "School counselor",
  "Coach",
  "Librarian",
  "School technology staff",
];

const helpSituations = [
  {
    title: "A message feels strange",
    text: "If a message asks for private information, feels urgent, or comes from someone unknown, students should ask a trusted adult before replying or clicking.",
  },
  {
    title: "A link or pop-up feels risky",
    text: "If a link, button, download, or pop-up feels strange, students should pause and ask a trusted adult before clicking.",
  },
  {
    title: "Someone is being mean online",
    text: "If a chat, comment, game, or group message becomes mean or hurtful, students should not respond with more meanness. They should ask for help.",
  },
  {
    title: "A screenshot is spreading",
    text: "If a screenshot or private message is being shared, students should stop spreading it and tell a trusted adult.",
  },
  {
    title: "Private information was shared",
    text: "If a password, school name, address, phone number, location, or private detail was shared by mistake, students should ask for help quickly.",
  },
  {
    title: "Something says to keep it secret",
    text: "If an online message tells a student not to tell anyone, that is a serious reason to ask a trusted adult right away.",
  },
];

const examples = [
  {
    label: "Safer choice",
    text: "A student gets a strange message and tells a parent or teacher before replying.",
  },
  {
    label: "Unsafe choice",
    text: "A student feels scared by a message but keeps it secret because the message told them not to tell anyone.",
  },
  {
    label: "Safer choice",
    text: "A student sees a screenshot spreading and asks a school counselor or teacher for help.",
  },
  {
    label: "Unsafe choice",
    text: "A student clicks a suspicious link because it says they must act right away.",
  },
  {
    label: "Safer choice",
    text: "A student accidentally shares private information and asks a trusted adult what to do next.",
  },
  {
    label: "Unsafe choice",
    text: "A student tries to fix a serious online problem alone instead of asking for help.",
  },
];

const realLifeSteps = [
  "Pause and take a breath.",
  "Do not reply, click, download, share, or delete things quickly without help.",
  "Find a trusted adult nearby or contact one safely.",
  "Use calm words to explain what happened.",
  "Show the trusted adult only if it is safe and appropriate.",
  "Follow the adult’s help steps for deleting, reporting, blocking, or asking school technology staff for support.",
];

const practiceQuestions = [
  {
    question:
      "A message says, “Do not tell your parents or teacher about this.” What should a student do?",
    answer:
      "They should tell a trusted adult right away. Online messages that pressure students to keep secrets can be unsafe.",
  },
  {
    question:
      "A student sees a strange link in a message from someone they do not know. What is the safest next step?",
    answer:
      "They should pause and ask a trusted adult before clicking, replying, or sharing any information.",
  },
  {
    question:
      "A screenshot is spreading in a group chat and someone feels upset. What should a student do?",
    answer:
      "They should stop spreading it and ask a trusted adult, such as a teacher, counselor, parent, or guardian, for help.",
  },
  {
    question:
      "A student accidentally posted a school name in a fake class example. What should they do?",
    answer:
      "They should ask a trusted adult for help and learn to avoid real private information in practice activities.",
  },
  {
    question:
      "A student is not sure which adult to ask. What should they do?",
    answer:
      "They can start with any trusted adult. That adult can help find the right person, such as a teacher, counselor, or school technology staff member.",
  },
];

const reviewChecklist = [
  "I can name trusted adults who can help me.",
  "I know that unsafe online situations should not be kept secret.",
  "I can pause before clicking, replying, downloading, sharing, or reacting.",
  "I can ask for help when something feels strange, scary, confusing, embarrassing, secret, urgent, or unsafe.",
  "I know not to use real private information in practice activities.",
  "I understand that serious online problems should not be handled alone.",
];

export default function KidsTrustedAdultPracticePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids • Module 6 • Lesson 6.2
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Trusted Adult Practice
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              In this lesson, students practice knowing when to ask a trusted
              adult for help. Students review safe ways to explain online
              problems without using real private information, real screenshots,
              real messages, or real conflicts in practice.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safety-habits-review"
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
                href="/kids/cyber-safety-review/safe-choices-scenarios"
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
                {whatYouWillLearn.map((item) => (
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
                Ask for help early.
              </h2>

              <p className="leading-relaxed text-yellow-100">
                Students should not keep unsafe online situations secret.
                Practice activities should use fake examples only. Do not use
                real passwords, real private information, real screenshots, real
                messages, real names, real school details, or real online
                conflicts.
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
                Trusted adults help students stay safe online.
              </h2>

              <p className="leading-relaxed text-slate-300">
                A trusted adult is someone safe who can help when an online
                situation feels too confusing, upsetting, scary, urgent, secret,
                or unsafe to handle alone. Asking for help is not getting in
                trouble. It is a smart safety habit. Trusted adults can help
                students decide what to delete, report, block, save for an adult
                to review, or bring to school technology staff.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustedAdults.map((adult) => (
                <div
                  key={adult}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-center font-semibold text-emerald-200"
                >
                  {adult}
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
                Words to remember
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
                When To Ask For Help
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Some situations need trusted adult support.
              </h2>

              <p className="leading-relaxed text-slate-300">
                Students do not need to solve serious online problems by
                themselves. These fake examples show times when asking for help
                is the safest choice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {helpSituations.map((situation) => (
                <div
                  key={situation.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="mb-3 text-xl font-bold text-cyan-200">
                    {situation.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {situation.text}
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
                Practice choosing help.
              </h2>

              <p className="leading-relaxed text-slate-300">
                These examples are fake and safe for learning. Students should
                never use real private information or real screenshots in class
                practice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((example) => (
                <div
                  key={example.text}
                  className={`rounded-3xl border p-6 ${
                    example.label === "Safer choice"
                      ? "border-emerald-500/30 bg-emerald-950/20"
                      : "border-red-500/30 bg-red-950/20"
                  }`}
                >
                  <h3
                    className={`mb-3 text-xl font-bold ${
                      example.label === "Safer choice"
                        ? "text-emerald-200"
                        : "text-red-200"
                    }`}
                  >
                    {example.label}
                  </h3>

                  <p className="leading-relaxed text-slate-200">
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
                Why should unsafe online problems not stay secret?
              </h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                Keeping an unsafe online problem secret can make it harder for
                someone to help. Trusted adults can help students stay safe,
                protect private information, and make calm choices. Asking for
                help early is a strong safety habit.
              </p>

              <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5">
                <h3 className="mb-2 font-bold text-cyan-200">
                  Discussion Question
                </h3>

                <p className="leading-relaxed text-slate-300">
                  What are three trusted adults a student could ask for help at
                  home, at school, or during an activity?
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <p className="mb-3 font-semibold text-emerald-200">
                What To Do In Real Life
              </p>

              <h2 className="mb-5 text-3xl font-bold">
                Use calm help-seeking steps.
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
                Who should help?
              </h2>

              <p className="leading-relaxed text-slate-300">
                Read each fake situation and review the safest next step.
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
                Before moving to Lesson 6.3, students should be able to say:
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

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Lesson Navigation
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Continue the Cyber Safety Review module.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Next, students will practice safe choices using fake classroom
              scenarios.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review/safety-habits-review"
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
                href="/kids/cyber-safety-review/safe-choices-scenarios"
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