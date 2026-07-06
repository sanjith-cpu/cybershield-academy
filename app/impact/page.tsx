import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const realImpactMetrics = [
  {
    label: "Schools Reached",
    value: "0",
    note: "No school outreach sessions have happened yet.",
  },
  {
    label: "Students Reached",
    value: "0",
    note: "This will only change after real counted sessions happen.",
  },
  {
    label: "Sessions Delivered",
    value: "0",
    note: "Future classroom, club, or school sessions will be tracked here.",
  },
  {
    label: "Feedback Responses",
    value: "0",
    note: "Feedback collection has not started yet.",
  },
];

const currentStatusSnapshot = [
  {
    title: "Website Build",
    status: "In progress and live",
    detail:
      "CyberShield Academy has working pages, lessons, activities, resources, and outreach materials that can be improved over time.",
  },
  {
    title: "External Outreach",
    status: "Not started yet",
    detail:
      "School, classroom, club, or community outreach should only be counted after real sessions or real contact happen.",
  },
  {
    title: "Impact Data",
    status: "0 tracked so far",
    detail:
      "Student reach, school participation, feedback responses, and session counts should remain 0 until there is real evidence.",
  },
];

const realBuildProgress = [
  {
    title: "Learning System Built",
    detail:
      "CyberShield Academy now includes a Learning Library with six connected lesson pages.",
  },
  {
    title: "Practice System Built",
    detail:
      "Students can practice with the Scenario Room, Practice Lab, quizzes, scam examples, and password safety activities.",
  },
  {
    title: "Outreach Materials Built",
    detail:
      "The project includes teacher resources, worksheets, presentation outlines, and email templates for future outreach.",
  },
  {
    title: "Safety Standards Built In",
    detail:
      "The site avoids real passwords, real suspicious links, fake impact claims, and private student data collection.",
  },
];

const impactGoals = [
  {
    title: "Improve cybersecurity literacy",
    detail:
      "Help students understand scams, passwords, privacy, safe browsing, digital footprint, and cyber ethics.",
  },
  {
    title: "Build safer online habits",
    detail:
      "Encourage students to slow down, check warning signs, protect accounts, and ask trusted adults for help.",
  },
  {
    title: "Support teachers and schools",
    detail:
      "Provide classroom-friendly lessons, activities, worksheets, and discussion prompts.",
  },
  {
    title: "Keep learning ethical",
    detail:
      "Teach defensive cybersecurity only, with fake examples and clear permission boundaries.",
  },
];

const plannedMetrics = [
  {
    metric: "Schools contacted",
    whyItMatters:
      "Shows how many real outreach attempts were made to teachers, schools, clubs, or community programs.",
    safeTracking:
      "Track school or organization names only after real contact happens.",
  },
  {
    metric: "Sessions delivered",
    whyItMatters:
      "Shows whether CyberShield materials were actually used in a classroom, club, or presentation setting.",
    safeTracking:
      "Record date, session type, grade level, and general topic without student private information.",
  },
  {
    metric: "Students reached",
    whyItMatters:
      "Shows how many students were present for real sessions.",
    safeTracking:
      "Use total attendance counts only. Do not collect student names, emails, or personal details.",
  },
  {
    metric: "Teacher feedback",
    whyItMatters:
      "Shows whether the materials are useful, clear, age-appropriate, and classroom-ready.",
    safeTracking:
      "Collect general teacher feedback about lessons, clarity, timing, and improvements.",
  },
  {
    metric: "Student confidence",
    whyItMatters:
      "Shows whether students feel more prepared to recognize scams or protect accounts.",
    safeTracking:
      "Use anonymous general survey questions without private student information.",
  },
  {
    metric: "Website improvements",
    whyItMatters:
      "Shows how feedback leads to real changes in the project.",
    safeTracking:
      "Record what changed, why it changed, and when it was updated.",
  },
];

const futureOutreachLog = [
  {
    date: "Future date",
    audience: "Future school, club, or classroom",
    session: "To be decided",
    status: "Not started",
    evidence: "Add only after real outreach happens.",
  },
  {
    date: "Future date",
    audience: "Future teacher or organization",
    session: "To be decided",
    status: "Not started",
    evidence: "Do not list as completed until confirmed.",
  },
  {
    date: "Future date",
    audience: "Future student group",
    session: "To be decided",
    status: "Not started",
    evidence: "Use real notes only after the session happens.",
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
    category: "Timing",
    question:
      "Was the session short enough, clear enough, and realistic for a classroom?",
  },
  {
    category: "Improvement Ideas",
    question:
      "What should be clearer, shorter, more interactive, or more useful?",
  },
];

const evidencePlan = [
  "Keep screenshots of major website updates.",
  "Record dates when important pages are upgraded or launched.",
  "Save safe notes from outreach planning and real presentations.",
  "Track outreach emails only after they are actually sent.",
  "Track school sessions only after they actually happen.",
  "Use feedback without collecting private student information.",
  "Write short reflections after each outreach attempt or site improvement.",
  "Update impact numbers only when there is real evidence.",
];

const whatWeWillNotClaim = [
  "Do not claim students reached until real students attend a session.",
  "Do not claim school partnerships until a school or teacher actually agrees.",
  "Do not claim feedback responses until real feedback is collected.",
  "Do not claim research results until data is collected safely and ethically.",
  "Do not claim expert review unless an expert actually reviews the project.",
  "Do not claim automatic certificates, student accounts, or dashboards unless those features exist.",
  "Do not use fake numbers to make the project look bigger.",
  "Do not collect private student information just to prove impact.",
];

const privacyRules = [
  "Do not collect student names, personal emails, passwords, phone numbers, addresses, or private account details.",
  "Use general feedback categories instead of private personal information.",
  "Only count real outreach, real sessions, and real feedback.",
  "Use fake examples during lessons and activities.",
  "If a real online safety concern is shared, involve the proper teacher, parent, counselor, or school staff member.",
];

const improvementLoop = [
  {
    step: "1",
    title: "Build",
    detail:
      "Create lessons, activities, worksheets, resources, and outreach materials.",
  },
  {
    step: "2",
    title: "Test",
    detail:
      "Check that pages work locally, links connect correctly, and mobile layout looks clean.",
  },
  {
    step: "3",
    title: "Share",
    detail:
      "Use the site during real outreach only when materials are ready and safe.",
  },
  {
    step: "4",
    title: "Improve",
    detail:
      "Use safe feedback to update lessons, activities, explanations, and resources.",
  },
];

const impactLinks = [
  {
    label: "Outreach Hub",
    href: "/outreach",
  },
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Presentation Outlines",
    href: "/presentation-outlines",
  },
  {
    label: "Worksheets",
    href: "/worksheets",
  },
  {
    label: "Feedback Center",
    href: "/feedback",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
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
            Tracking CyberShield Academy’s impact honestly.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page separates real progress from future goals. CyberShield
            Academy will only count real outreach, real sessions, real students,
            and real feedback after they actually happen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/outreach"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Outreach Hub
            </Link>

            <Link
              href="/feedback"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Feedback Center
            </Link>

            <Link
              href="/roadmap"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Roadmap
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Honesty note: CyberShield Academy does not claim fake student
            reach, fake school partnerships, fake expert review, or fake
            feedback. Current outreach numbers remain 0 until real outreach
            begins.
          </div>
        </section>
	<section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Current Status Snapshot
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This snapshot shows where CyberShield Academy stands right now:
              the website is being built and improved, while external outreach
              impact has not been counted yet.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {currentStatusSnapshot.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {item.status}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-white">
            Real Outreach Impact So Far
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            These numbers should only change after actual outreach, sessions, or
            feedback happen. Right now, external outreach impact has not started.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {realImpactMetrics.map((metric) => (
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
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Real Build Progress So Far
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Even before school outreach begins, the project has real build
              progress that can be documented honestly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {realBuildProgress.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-emerald-100">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Impact Means
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Impact is not just about large numbers. For CyberShield Academy,
              impact means making cybersecurity easier to understand, safer to
              learn, and more useful for students, families, and teachers.
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
              Planned Metrics
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These are the metrics CyberShield can track later. Each one should
              be tracked in a way that protects privacy and avoids fake claims.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <div className="grid bg-slate-950/80 text-sm font-semibold text-slate-200 md:grid-cols-3">
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Metric
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Why It Matters
                </div>
                <div className="border-b border-slate-800 p-4">
                  Safe Tracking Method
                </div>
              </div>

              {plannedMetrics.map((row) => (
                <div
                  key={row.metric}
                  className="grid text-sm text-slate-300 md:grid-cols-3"
                >
                  <div className="border-b border-slate-800 p-4 font-semibold text-cyan-100 md:border-r">
                    {row.metric}
                  </div>

                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.whyItMatters}
                  </div>

                  <div className="border-b border-slate-800 p-4">
                    {row.safeTracking}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Future Outreach Log
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This table is a future tracking area. It should only be updated
              after real outreach begins and real information exists.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <div className="grid bg-slate-950/80 text-sm font-semibold text-slate-200 md:grid-cols-5">
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Date
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Audience
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Session
                </div>
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Status
                </div>
                <div className="border-b border-slate-800 p-4">Evidence</div>
              </div>

              {futureOutreachLog.map((row, index) => (
                <div
                  key={`${row.date}-${index}`}
                  className="grid text-sm text-slate-300 md:grid-cols-5"
                >
                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.date}
                  </div>

                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.audience}
                  </div>

                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.session}
                  </div>

                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.status}
                  </div>

                  <div className="border-b border-slate-800 p-4">
                    {row.evidence}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Feedback Categories
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Feedback should focus on improving the project, not collecting
                private student information.
              </p>

              <div className="mt-6 grid gap-4">
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

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              Improvement Loop
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield impact should grow through a simple cycle: build,
              test, share safely, and improve based on real feedback.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {improvementLoop.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-bold text-purple-100">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
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

            <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
              <h2 className="text-3xl font-bold text-red-100">
                What We Will Not Claim Yet
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                This section protects the project from exaggeration and keeps
                the impact tracker honest.
              </p>

              <div className="mt-6 grid gap-3">
                {whatWeWillNotClaim.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-red-500/20 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
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

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {impactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}