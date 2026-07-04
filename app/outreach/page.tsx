import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outreachGoals = [
  {
    title: "Teach cybersecurity basics",
    detail:
      "Help students understand passwords, scams, privacy, safe browsing, digital footprint, and cyber ethics.",
  },
  {
    title: "Support younger students",
    detail:
      "Create age-appropriate lessons for elementary, middle school, and high school audiences.",
  },
  {
    title: "Promote safe habits",
    detail:
      "Encourage students to pause, think, ask trusted adults, and report suspicious activity safely.",
  },
  {
    title: "Build community impact",
    detail:
      "Use CyberShield Academy as a student-led outreach project that helps schools and families.",
  },
];

const outreachSteps = [
  {
    step: "1",
    title: "Choose an audience",
    detail:
      "Decide whether the session is for elementary school, middle school, high school, a club, or a classroom.",
  },
  {
    step: "2",
    title: "Pick a presentation outline",
    detail:
      "Use the Presentation Outlines page to choose timing, focus topics, activities, and teacher notes.",
  },
  {
    step: "3",
    title: "Prepare materials",
    detail:
      "Use worksheets, activities, and teacher toolkit notes to prepare a safe lesson plan.",
  },
  {
    step: "4",
    title: "Contact a school or teacher",
    detail:
      "Use the Email Templates page to draft a professional outreach message and ask for permission.",
  },
  {
    step: "5",
    title: "Practice delivery",
    detail:
      "Practice explaining the topic clearly, using fake examples only, and keeping the session age-appropriate.",
  },
  {
    step: "6",
    title: "Run the session",
    detail:
      "Teach the lesson, guide discussion, run an activity, and end with clear online safety takeaways.",
  },
  {
    step: "7",
    title: "Reflect and improve",
    detail:
      "Record what worked, what students asked, and what should be improved for the next outreach session.",
  },
];

const outreachMaterials = [
  {
    title: "Presentation Outlines",
    description:
      "Elementary, middle school, and high school presentation plans with timing, topics, activities, and teacher notes.",
    href: "/presentation-outlines",
    button: "View Outlines",
  },
  {
    title: "Email Templates",
    description:
      "Professional outreach email drafts for contacting teachers, counselors, administrators, clubs, and school partners.",
    href: "/email-templates",
    button: "View Templates",
  },
  {
    title: "Worksheets",
    description:
      "Printable-style prompts for scam awareness, password safety, digital footprint, cyber ethics, and exit tickets.",
    href: "/worksheets",
    button: "Open Worksheets",
  },
  {
    title: "Teacher Toolkit",
    description:
      "Lesson starters, classroom activity support, safety reminders, and teaching guidance.",
    href: "/teacher-toolkit",
    button: "Open Toolkit",
  },
  {
    title: "Activities",
    description:
      "Interactive student practice pages for quizzes, scams, passwords, safe browsing, digital footprint, and ethics.",
    href: "/activities",
    button: "View Activities",
  },
];

const sessionIdeas = [
  {
    audience: "Elementary School",
    length: "20–25 minutes",
    focus:
      "Trusted adults, private information, strange links, fake prizes, and kind online behavior.",
  },
  {
    audience: "Middle School",
    length: "30–35 minutes",
    focus:
      "Scam red flags, password safety, digital footprint, safe browsing, and reporting suspicious messages.",
  },
  {
    audience: "High School",
    length: "40–45 minutes",
    focus:
      "Defensive cybersecurity, ethics, privacy, careers, certification awareness, and responsible reporting.",
  },
];

const safetyRules = [
  "Use fake examples only.",
  "Do not use real student accounts, passwords, private messages, or private information.",
  "Do not ask students to click suspicious links.",
  "Do not demonstrate breaking into accounts, devices, or networks.",
  "Do not collect student contact information.",
  "Keep all activities defensive, ethical, and school-appropriate.",
  "Encourage students to ask trusted adults or school technology staff for help.",
];

const volunteerRoles = [
  {
    role: "Presenter",
    detail:
      "Explains the lesson, guides discussion, and keeps the session moving.",
  },
  {
    role: "Activity Leader",
    detail:
      "Runs the worksheet, quiz, scenario, or group activity using safe examples.",
  },
  {
    role: "Timekeeper",
    detail:
      "Keeps each section on schedule so the session ends on time.",
  },
  {
    role: "Reflection Lead",
    detail:
      "Collects takeaways, exit ticket responses, and ideas for improvement.",
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
            Bring cybersecurity literacy to classrooms and communities.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy can support school presentations, club
            workshops, classroom lessons, and student-led outreach. The goal is
            to help students build safer online habits through ethical,
            defensive cybersecurity education.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/presentation-outlines"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Presentation Outlines
            </Link>

            <Link
              href="/email-templates"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Email Templates
            </Link>

            <Link
              href="/worksheets"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Open Worksheets
            </Link>

            <Link
              href="/teacher-toolkit"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Teacher Toolkit
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Outreach sessions should use fake examples only
            and should never involve real passwords, real suspicious links, or
            unauthorized systems.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outreachGoals.map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-xl font-bold text-cyan-200">
                  {goal.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {goal.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Outreach Planning Steps
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these steps to plan a safe, organized, and age-appropriate
              cybersecurity session.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {outreachSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
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
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Outreach Materials
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These pages support presentation planning, school communication,
              classroom activities, printable prompts, and safe teaching.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {outreachMaterials.map((material) => (
                <Link
                  key={material.href}
                  href={material.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {material.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {material.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-cyan-300">
                    {material.button} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Session Ideas by Audience
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Outreach sessions should match the age group, attention span,
                and classroom setting.
              </p>

              <div className="mt-6 grid gap-4">
                {sessionIdeas.map((session) => (
                  <div
                    key={session.audience}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-semibold text-cyan-200">
                        {session.audience}
                      </h3>

                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                        {session.length}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {session.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Outreach Safety Rules
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                These rules keep outreach sessions safe, ethical, and
                appropriate for school settings.
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
              Student Volunteer Roles
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              If multiple students help with outreach, each person can have a
              clear role during the session.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {volunteerRoles.map((role) => (
                <div
                  key={role.role}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">{role.role}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {role.detail}
                  </p>
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