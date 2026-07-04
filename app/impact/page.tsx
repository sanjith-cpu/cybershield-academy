import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const currentMetrics = [
  {
    label: "Schools Contacted",
    value: "0",
    note: "Will be updated after real outreach begins.",
  },
  {
    label: "Sessions Delivered",
    value: "0",
    note: "No school sessions have been completed yet.",
  },
  {
    label: "Students Reached",
    value: "0",
    note: "This will only include real counted participants.",
  },
  {
    label: "Feedback Responses",
    value: "0",
    note: "Feedback collection has not started yet.",
  },
];

const impactGoals = [
  {
    title: "Teach practical online safety",
    detail:
      "Help students recognize scams, protect accounts, avoid oversharing, and ask for help when something feels suspicious.",
  },
  {
    title: "Support teachers and schools",
    detail:
      "Provide classroom-friendly lessons, activities, and safety reminders that can be used during school sessions.",
  },
  {
    title: "Make cybersecurity understandable",
    detail:
      "Explain cybersecurity in beginner-friendly language for elementary, middle, and high school students.",
  },
  {
    title: "Promote ethical defensive learning",
    detail:
      "Keep all cybersecurity learning focused on safety, privacy, responsibility, and helping others.",
  },
];

const futureSchoolTracker = [
  {
    school: "Future School Partner",
    status: "Not contacted yet",
    sessionType: "To be decided",
    notes: "This row is a placeholder for future outreach tracking.",
  },
  {
    school: "Future School Partner",
    status: "Not contacted yet",
    sessionType: "To be decided",
    notes: "Add real school information only after outreach begins.",
  },
  {
    school: "Future School Partner",
    status: "Not contacted yet",
    sessionType: "To be decided",
    notes: "Do not list a school as reached unless a session actually happens.",
  },
];

const feedbackCategories = [
  {
    category: "Lesson Clarity",
    question:
      "Did students understand the cybersecurity topic in simple language?",
  },
  {
    category: "Activity Usefulness",
    question:
      "Did the activity help students practice a real online safety skill?",
  },
  {
    category: "Student Confidence",
    question:
      "Do students feel more confident spotting scams or protecting accounts?",
  },
  {
    category: "Teacher Usefulness",
    question:
      "Would a teacher use this lesson, activity, or resource again?",
  },
  {
    category: "Improvement Ideas",
    question:
      "What should be clearer, shorter, more interactive, or more useful?",
  },
];

const evidencePlan = [
  "Keep screenshots of major website updates.",
  "Record dates when pages are upgraded or launched.",
  "Track real outreach emails only after they are sent.",
  "Track school sessions only after they actually happen.",
  "Use feedback without collecting private student information.",
  "Write reflections about what improved after each outreach attempt.",
];

const privacyRules = [
  "Do not collect student names, personal emails, passwords, phone numbers, addresses, or private account details.",
  "Use general feedback categories instead of private personal information.",
  "Only count real outreach, real sessions, and real feedback.",
  "If a real online safety concern is shared, involve the proper teacher, parent, counselor, or school staff member.",
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Impact Tracker
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Tracking CyberShield Academy’s growth honestly.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page tracks the project’s progress, outreach goals, feedback
            categories, and future impact. Numbers will only be updated when
            real outreach, real sessions, or real feedback happen.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Honesty note: CyberShield Academy does not claim fake student
            reach, fake school partnerships, or fake feedback. Current numbers
            are placeholders until real outreach begins.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {currentMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold text-slate-400">
                  {metric.label}
                </p>

                <p className="mt-3 text-5xl font-bold text-cyan-200">
                  {metric.value}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Impact Means
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Impact is not just about large numbers. For this project, impact
              means making cybersecurity easier to understand, safer to learn,
              and more useful for students and teachers.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {impactGoals.map((goal) => (
                <div
                  key={goal.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {goal.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {goal.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Future Schools Contacted
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This table is a future tracking area. It should only be updated
              after real outreach begins and real schools are contacted.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <div className="grid bg-slate-950/80 text-sm font-semibold text-slate-200 md:grid-cols-4">
                <div className="border-b border-slate-800 p-4 md:border-r">
                  School
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Status
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Session Type
                </div>
                <div className="border-b border-slate-800 p-4">Notes</div>
              </div>

              {futureSchoolTracker.map((row, index) => (
                <div
                  key={`${row.school}-${index}`}
                  className="grid text-sm text-slate-300 md:grid-cols-4"
                >
                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.school}
                  </div>
                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.status}
                  </div>
                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.sessionType}
                  </div>
                  <div className="border-b border-slate-800 p-4">
                    {row.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Feedback Categories
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Feedback should focus on improving the project, not collecting
              private student information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {feedbackCategories.map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {item.category}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/feedback"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Feedback Center
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Evidence and Progress Plan
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These steps can help document the project honestly for outreach,
                reflections, and future college application materials.
              </p>

              <div className="mt-6 grid gap-3">
                {evidencePlan.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Privacy and Safety Rules
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Impact tracking should be useful, honest, and privacy-aware.
              </p>

              <div className="mt-6 grid gap-3">
                {privacyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Building Impact
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The next step is to prepare outreach materials, improve feedback
              collection, and keep the project honest as it grows.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/outreach"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Outreach Page
              </Link>

              <Link
                href="/teacher-toolkit"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/feedback"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Feedback Center
              </Link>

              <Link
                href="/roadmap"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}