import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aboutHighlights = [
  {
    label: "Project Type",
    value: "Student-Built",
    detail:
      "CyberShield Academy was built as a real student project using a full website workflow.",
  },
  {
    label: "Main Focus",
    value: "Cyber Literacy",
    detail:
      "The site teaches online safety, scam awareness, privacy, passwords, safe browsing, digital footprint, and cyber ethics.",
  },
  {
    label: "Audience",
    value: "Students + Educators",
    detail:
      "CyberShield is designed for students, teachers, families, clubs, and future outreach partners.",
  },
  {
    label: "Documentation",
    value: "Build Log Added",
    detail:
      "The project now includes a Build Log, Roadmap, Project Story, and Impact Tracker for honest documentation.",
  },
];

const missionCards = [
  {
    title: "Make cybersecurity easier to understand",
    detail:
      "Cybersecurity can feel too technical for many students. CyberShield explains important ideas in clear, student-friendly language.",
  },
  {
    title: "Teach safer online habits",
    detail:
      "The project focuses on practical habits students can actually use, such as slowing down before clicking, protecting passwords, and asking trusted adults for help.",
  },
  {
    title: "Support future school outreach",
    detail:
      "CyberShield includes teacher resources, worksheets, presentation outlines, and outreach materials that can support real school or club presentations later.",
  },
];

const whoItServes = [
  {
    title: "Elementary Students",
    detail:
      "Younger students can learn basic online safety ideas through simple language, safe examples, and clear reminders.",
  },
  {
    title: "Middle School Students",
    detail:
      "Middle school students can practice spotting scams, protecting accounts, thinking about privacy, and making safer choices online.",
  },
  {
    title: "High School Students",
    detail:
      "High school students can explore deeper cybersecurity topics, career pathways, certification ideas, cyber ethics, and responsible technology use.",
  },
  {
    title: "Teachers and Families",
    detail:
      "Teachers and families can use resources, worksheets, discussion prompts, and safety reminders to support cybersecurity education.",
  },
];

const projectSystems = [
  {
    title: "Learning Library",
    detail:
      "A connected lesson system covering password safety, scam awareness, privacy basics, safe browsing, digital footprint, and cyber ethics.",
    href: "/lessons",
    label: "Explore Lessons",
  },
  {
    title: "Practice Activities",
    detail:
      "Safe activities such as quizzes, scam spotting, password practice, browsing checks, Scenario Room, and Practice Lab.",
    href: "/activities",
    label: "View Activities",
  },
  {
    title: "Teacher Support",
    detail:
      "Teacher Toolkit, worksheets, presentation outlines, and resources for classroom-friendly cybersecurity learning.",
    href: "/teacher-toolkit",
    label: "Open Teacher Toolkit",
  },
  {
    title: "Outreach Preparation",
    detail:
      "Outreach materials and email templates designed to prepare for future school, club, or community presentations.",
    href: "/outreach",
    label: "View Outreach",
  },
  {
    title: "Project Documentation",
    detail:
      "Project Story, Roadmap, Build Log, and Impact pages explain the project’s growth, progress, and future plans honestly.",
    href: "/build-log",
    label: "Open Build Log",
  },
  {
    title: "Safety and Privacy",
    detail:
      "Safety reminders explain what the site does not collect and how students should handle real online concerns.",
    href: "/safety",
    label: "Safety & Privacy",
  },
];

const values = [
  {
    title: "Safe",
    detail:
      "CyberShield uses fake examples only and avoids real passwords, private student information, and real suspicious links.",
  },
  {
    title: "Ethical",
    detail:
      "The site teaches defensive cybersecurity, permission, privacy, respect, and responsible online behavior.",
  },
  {
    title: "Student-Friendly",
    detail:
      "Content is written to be understandable for students instead of being overly technical or confusing.",
  },
  {
    title: "Honest",
    detail:
      "The project does not claim fake outreach, fake partnerships, fake student reach, or fake impact numbers.",
  },
];

const safetyPromises = [
  "CyberShield does not ask students to enter real passwords.",
  "CyberShield does not teach unauthorized access.",
  "CyberShield does not use real suspicious links for practice.",
  "CyberShield does not collect private student information.",
  "CyberShield does not claim school partnerships before they exist.",
  "CyberShield keeps real outreach numbers at 0 until real outreach happens.",
];

const documentationLinks = [
  {
    title: "Project Story",
    detail:
      "Explains why CyberShield Academy was created and how the idea grew into a full website.",
    href: "/project-story",
  },
  {
    title: "Build Log",
    detail:
      "Documents the development phases, tools used, workflow, and lessons learned while building the site.",
    href: "/build-log",
  },
  {
    title: "Roadmap",
    detail:
      "Shows completed work, current work, future plans, safety rules, and final QA goals.",
    href: "/roadmap",
  },
  {
    title: "Impact Tracker",
    detail:
      "Separates real build progress from future outreach impact and keeps all numbers honest.",
    href: "/impact",
  },
];

const aboutLinks = [
  {
    label: "Lessons",
    href: "/lessons",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Project Story",
    href: "/project-story",
  },
  {
    label: "Build Log",
    href: "/build-log",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Impact",
    href: "/impact",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About CyberShield Academy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            A student-built platform for safer online learning.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy is a cybersecurity literacy website created to
            help students understand online safety, scam awareness, password
            security, privacy, safe browsing, digital footprint, cyber ethics,
            and defensive cybersecurity in a clear and age-appropriate way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lessons"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Learning
            </Link>

            <Link
              href="/build-log"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Build Log
            </Link>

            <Link
              href="/project-story"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Project Story
            </Link>

            <Link
              href="/roadmap"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Roadmap
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety note: CyberShield Academy is for education, awareness, and
            defensive learning only. Students should not enter real passwords,
            private information, or real suspicious links anywhere on this site.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold text-slate-400">
                  {item.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-cyan-200">
                  {item.value}
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {missionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-2xl font-bold text-cyan-200">
                  {card.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Who CyberShield Academy Serves
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield is designed for different audiences so cybersecurity
              education can be useful for students, teachers, families, and
              future outreach settings.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {whoItServes.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-100">{group.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {group.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What the Website Includes
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is organized into connected systems for
              learning, practice, outreach, documentation, and safety.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectSystems.map((system) => (
                <Link
                  key={system.title}
                  href={system.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {system.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {system.detail}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    {system.label} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                Project Values
              </h2>

              <p className="mt-3 leading-7 text-emerald-50/90">
                These values guide the lessons, activities, resources, and
                future outreach plans.
              </p>

              <div className="mt-6 grid gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-bold text-emerald-100">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {value.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Safety Promises
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                These promises keep the project age-appropriate, defensive, and
                honest.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyPromises.map((promise) => (
                  <div
                    key={promise}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {promise}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              Project Documentation
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy includes documentation pages that explain the
              project clearly and honestly. These pages help visitors understand
              what was built, why it was built, and what still comes next.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {documentationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5 transition hover:border-purple-300 hover:bg-slate-900"
                >
                  <h3 className="text-lg font-bold text-purple-100">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-purple-200">
                    Open page →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Explore CyberShield Academy
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to explore the main learning system, project
              documentation, safety rules, and future growth plan.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aboutLinks.map((link) => (
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