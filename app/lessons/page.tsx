import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonModules = [
  {
    title: "Password Safety",
    level: "Beginner",
    time: "15–20 minutes",
    lessonHref: "/lessons/password-safety",
    description:
      "Learn how strong passwords, passphrases, password managers, and multi-factor authentication help protect accounts.",
    learningGoals: [
      "Explain why long passwords are stronger than short passwords.",
      "Understand why password reuse is risky.",
      "Recognize why multi-factor authentication adds protection.",
      "Practice safer password habits using fake examples only.",
    ],
    practiceLinks: [
      {
        label: "Password Lab",
        href: "/password-lab",
      },
      {
        label: "Worksheets",
        href: "/worksheets",
      },
    ],
  },
  {
    title: "Scam Awareness",
    level: "Beginner",
    time: "15–25 minutes",
    lessonHref: "/lessons/scam-awareness",
    description:
      "Learn how scams use urgency, fear, fake prizes, suspicious links, and requests for private information.",
    learningGoals: [
      "Identify common scam red flags.",
      "Explain why scammers pressure people to act quickly.",
      "Avoid clicking suspicious links or sharing private information.",
      "Know when to report a suspicious message.",
    ],
    practiceLinks: [
      {
        label: "Spot the Scam",
        href: "/spot-the-scam",
      },
      {
        label: "Cyber Safety Quiz",
        href: "/quiz",
      },
    ],
  },
  {
    title: "Privacy Basics",
    level: "Beginner",
    time: "15–20 minutes",
    lessonHref: "/lessons/privacy-basics",
    description:
      "Learn what personal information is, why privacy settings matter, and how to avoid oversharing online.",
    learningGoals: [
      "Recognize examples of private information.",
      "Understand why privacy settings should be reviewed.",
      "Avoid sharing personal details with strangers online.",
      "Ask a trusted adult before sharing sensitive information.",
    ],
    practiceLinks: [
      {
        label: "Resources",
        href: "/resources",
      },
      {
        label: "Safety & Privacy",
        href: "/safety",
      },
    ],
  },
  {
    title: "Safe Browsing",
    level: "Beginner to Intermediate",
    time: "15–25 minutes",
    lessonHref: "",
    description:
      "Learn how to check links, avoid fake download buttons, recognize pop-ups, and pause before clicking.",
    learningGoals: [
      "Check website addresses carefully.",
      "Avoid suspicious pop-ups and fake download buttons.",
      "Understand why HTTPS alone does not guarantee a website is safe.",
      "Ask for help when a website feels suspicious.",
    ],
    practiceLinks: [
      {
        label: "Safe Browsing Challenge",
        href: "/safe-browsing",
      },
      {
        label: "Worksheets",
        href: "/worksheets",
      },
    ],
  },
  {
    title: "Digital Footprint",
    level: "Intermediate",
    time: "20–30 minutes",
    lessonHref: "",
    description:
      "Learn how posts, usernames, comments, photos, and privacy settings can shape your online reputation.",
    learningGoals: [
      "Explain what a digital footprint is.",
      "Reflect on how online choices can affect future opportunities.",
      "Review usernames, profiles, and privacy settings.",
      "Make safer and more respectful online choices.",
    ],
    practiceLinks: [
      {
        label: "Digital Footprint Reflection",
        href: "/digital-footprint",
      },
      {
        label: "High School Track",
        href: "/high-school",
      },
    ],
  },
  {
    title: "Cyber Ethics",
    level: "Intermediate to Advanced",
    time: "20–30 minutes",
    lessonHref: "",
    description:
      "Learn how permission, privacy, responsibility, reporting, and defensive thinking guide ethical cybersecurity learning.",
    learningGoals: [
      "Understand why permission matters in cybersecurity.",
      "Respect accounts, devices, networks, and private information.",
      "Report suspicious problems instead of investigating them alone.",
      "Use cybersecurity knowledge to protect people.",
    ],
    practiceLinks: [
      {
        label: "Cyber Ethics Scenarios",
        href: "/cyber-ethics",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
];

const trackPaths = [
  {
    title: "Kids Path",
    audience: "Elementary students",
    description:
      "Simple online safety lessons about trusted adults, private information, kind behavior, and strange links.",
    href: "/kids",
  },
  {
    title: "Junior Path",
    audience: "Middle school students",
    description:
      "Practical lessons about scams, passwords, safe browsing, privacy, and reporting suspicious messages.",
    href: "/junior",
  },
  {
    title: "High School Path",
    audience: "High school students",
    description:
      "Deeper cybersecurity literacy with ethics, careers, certifications, digital footprint, and responsible learning.",
    href: "/high-school",
  },
];

const classroomFlow = [
  {
    step: "1",
    title: "Introduce the topic",
    detail:
      "Start with a short explanation and a safe example students can understand.",
  },
  {
    step: "2",
    title: "Discuss the risk",
    detail:
      "Ask students what could go wrong and what safer choices would look like.",
  },
  {
    step: "3",
    title: "Practice with an activity",
    detail:
      "Use a CyberShield activity, worksheet, or reflection to reinforce the lesson.",
  },
  {
    step: "4",
    title: "Reflect and report",
    detail:
      "End with one takeaway and remind students how to report suspicious activity safely.",
  },
];

const safetyRules = [
  "Use fake examples only.",
  "Do not enter real passwords.",
  "Do not click real suspicious links to test them.",
  "Do not share private personal information.",
  "Do not access accounts, devices, networks, or files without permission.",
  "Ask a trusted adult, teacher, or technology staff member when something feels suspicious.",
];

const nextLessonBuilds = [
  "/lessons/safe-browsing",
  "/lessons/digital-footprint",
  "/lessons/cyber-ethics",
];

export default function LessonsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Learning Library
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Learn cybersecurity step by step.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The CyberShield Academy Learning Library organizes cybersecurity
            literacy into clear modules. Students can learn the basics, practice
            safely, reflect on real-life choices, and build stronger defensive
            cybersecurity habits.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/activities"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Activities
            </Link>

            <Link
              href="/resources"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Review Resources
            </Link>

            <Link
              href="/teacher-toolkit"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Teacher Toolkit
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: These lessons are for safe, ethical, and defensive
            learning only. Do not use real passwords, private information, real
            suspicious links, or unauthorized systems.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {trackPaths.map((track) => (
              <Link
                key={track.href}
                href={track.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {track.audience}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  {track.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {track.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  Open track →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Lesson Modules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Each module includes a topic summary, learning goals, full lesson
              pages when available, and practice pages that connect the lesson
              to interactive learning.
            </p>

            <div className="mt-6 grid gap-6">
              {lessonModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      {module.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                        {module.level}
                      </span>

                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300">
                        {module.time}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                    {module.description}
                  </p>

                  {module.lessonHref && (
                    <div className="mt-5">
                      <Link
                        href={module.lessonHref}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open Lesson →
                      </Link>
                    </div>
                  )}

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-cyan-200">
                        Learning Goals
                      </h4>

                      <div className="mt-3 grid gap-3">
                        {module.learningGoals.map((goal) => (
                          <div
                            key={goal}
                            className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300"
                          >
                            {goal}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-200">
                        Practice Links
                      </h4>

                      <div className="mt-3 grid gap-3">
                        {module.practiceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-800"
                          >
                            {link.label} →
                          </Link>
                        ))}
                      </div>
                    </div>
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
                Classroom Lesson Flow
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Teachers, club leaders, and outreach volunteers can use this
                simple structure for short cybersecurity lessons.
              </p>

              <div className="mt-6 grid gap-4">
                {classroomFlow.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                        {item.step}
                      </div>

                      <h3 className="font-semibold text-cyan-200">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Lesson Safety Rules
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                These rules keep every lesson safe, ethical, and appropriate for
                students.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyRules.map((rule) => (
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
              Next Lesson Pages to Build
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Password Safety, Scam Awareness, and Privacy Basics are now
              connected. Next, we will continue building the remaining full
              individual lesson pages one at a time.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nextLessonBuilds.map((route) => (
                <div
                  key={route}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-slate-300"
                >
                  {route}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}