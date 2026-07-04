import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sessionOutlines = [
  {
    title: "Elementary School Session",
    audience: "Grades 3–5",
    time: "20–25 minutes",
    goal:
      "Teach younger students simple online safety habits using clear language, examples, and discussion.",
    topics: [
      "Do not share private information online",
      "Ask a trusted adult before clicking strange links",
      "Use kind and respectful words online",
      "Tell an adult if something online feels scary or confusing",
    ],
    activity:
      "Students review simple safe-or-unsafe examples and explain what they would do.",
  },
  {
    title: "Middle School Session",
    audience: "Grades 6–8",
    time: "25–35 minutes",
    goal:
      "Help students recognize scams, protect accounts, and think before posting or clicking.",
    topics: [
      "Scam red flags like urgency, fear, prizes, and secrecy",
      "Password safety and why reusing passwords is risky",
      "Digital footprint and online reputation",
      "How to report suspicious messages safely",
    ],
    activity:
      "Students complete a short Spot the Scam activity and discuss the red flags they noticed.",
  },
  {
    title: "High School Session",
    audience: "Grades 9–12",
    time: "35–45 minutes",
    goal:
      "Connect cybersecurity literacy to real-life safety, digital citizenship, careers, and ethical defensive learning.",
    topics: [
      "Phishing and social engineering",
      "Account protection and multi-factor authentication",
      "Defensive cybersecurity ethics",
      "Cybersecurity career pathways and future learning",
    ],
    activity:
      "Students discuss realistic scenarios and reflect on how cybersecurity can be used to protect people.",
  },
];

const presentationFlow = [
  {
    part: "Introduction",
    time: "3–5 minutes",
    detail:
      "Introduce CyberShield Academy, explain the goal of the session, and remind students that the lesson is about safety and defense.",
  },
  {
    part: "Main Lesson",
    time: "10–15 minutes",
    detail:
      "Teach the key topic using simple examples, discussion questions, and safe fake scenarios.",
  },
  {
    part: "Interactive Activity",
    time: "10–15 minutes",
    detail:
      "Use an activity like Spot the Scam, Password Lab, or a safe classroom discussion prompt.",
  },
  {
    part: "Reflection",
    time: "5 minutes",
    detail:
      "Ask students what they learned and what safety habit they can use after the session.",
  },
  {
    part: "Teacher Follow-Up",
    time: "Optional",
    detail:
      "Share CyberShield resources, teacher toolkit materials, and possible next steps for future lessons.",
  },
];

const volunteerRoles = [
  {
    role: "Lead Presenter",
    description:
      "Guides the session, introduces the topic, explains examples, and keeps the lesson moving.",
  },
  {
    role: "Activity Helper",
    description:
      "Helps students during activities, answers simple questions, and keeps students focused.",
  },
  {
    role: "Teacher Contact",
    description:
      "Communicates with teachers or school staff before and after the session.",
  },
  {
    role: "Materials Organizer",
    description:
      "Prepares slides, worksheets, links, timing plans, and classroom materials.",
  },
  {
    role: "Reflection Recorder",
    description:
      "Tracks non-private feedback, lesson notes, and ideas for improving future sessions.",
  },
];

const schoolUseCases = [
  "Digital citizenship lessons",
  "Advisory or homeroom activities",
  "Computer science or technology classes",
  "Cybersecurity club meetings",
  "Counselor-led online safety sessions",
  "Parent or student safety awareness events",
];

const outreachSafetyRules = [
  "Use fake examples only. Do not ask students for real passwords or private account details.",
  "Do not collect private student information during activities.",
  "Keep all lessons defensive, ethical, and age-appropriate.",
  "Ask teachers or school staff to handle real student safety concerns.",
  "Do not teach students how to access systems, accounts, or networks without permission.",
];

const preparationChecklist = [
  "Confirm the audience grade level.",
  "Choose the correct session outline.",
  "Prepare slides or talking points.",
  "Choose one activity from CyberShield Academy.",
  "Review teacher safety notes before presenting.",
  "Prepare a short reflection or exit question.",
  "Ask the teacher what classroom rules or school policies should be followed.",
];

const outreachLinks = [
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Spot the Scam",
    href: "/spot-the-scam",
  },
  {
    label: "Password Lab",
    href: "/password-lab",
  },
  {
    label: "Impact Tracker",
    href: "/impact",
  },
];

export default function OutreachPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            School Outreach
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Helping schools teach cybersecurity literacy.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy can support classroom lessons, school clubs,
            advisory periods, and student-led outreach sessions. The goal is to
            teach online safety, scam awareness, digital citizenship, and
            defensive cybersecurity in a safe and age-appropriate way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/teacher-toolkit"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Teacher Toolkit
            </Link>

            <Link
              href="/resources"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Review Resources
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Outreach Session Outlines
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These outlines help presenters adjust CyberShield Academy lessons
              for different age groups.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {sessionOutlines.map((session) => (
                <div
                  key={session.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {session.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {session.audience}
                    </span>

                    <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">
                      {session.time}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-white">Goal:</span>{" "}
                    {session.goal}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                    {session.topics.map((topic) => (
                      <li key={topic} className="rounded-xl bg-slate-900 p-3">
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-cyan-200">
                      Activity:
                    </span>{" "}
                    {session.activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Suggested Presentation Flow
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This structure can be used for school visits, club presentations,
              classroom sessions, or short workshops.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {presentationFlow.map((item) => (
                <div
                  key={item.part}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{item.part}</h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-200">
                    {item.time}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
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
                Volunteer Roles
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These roles can help student volunteers organize a stronger and
                more professional outreach session.
              </p>

              <div className="mt-6 grid gap-4">
                {volunteerRoles.map((role) => (
                  <div
                    key={role.role}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {role.role}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                How Schools Can Use This
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                CyberShield Academy can fit into different school settings
                without needing a full cybersecurity class.
              </p>

              <div className="mt-6 grid gap-3">
                {schoolUseCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Outreach Safety Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              Outreach should always protect students and keep cybersecurity
              learning ethical, defensive, and school-appropriate.
            </p>

            <div className="mt-6 grid gap-3">
              {outreachSafetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Outreach Preparation Checklist
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use this checklist before contacting a school or presenting a
              CyberShield Academy lesson.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {preparationChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Useful Pages for Outreach
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These pages can support school presentations, teacher follow-up,
              and student practice after a session.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {outreachLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label}
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