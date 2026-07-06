import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const storySections = [
  {
    title: "Why I Built CyberShield Academy",
    detail:
      "Cybersecurity is becoming more important for students, but many online safety lessons are either too basic, too technical, or not designed for real school use. I built CyberShield Academy to make cybersecurity literacy easier for students to understand and easier for teachers to share.",
  },
  {
    title: "The Problem It Solves",
    detail:
      "Students use the internet every day for school, communication, games, social media, and personal accounts, but many do not get enough practical guidance about scams, passwords, privacy, safe browsing, digital footprint, and ethical online choices.",
  },
  {
    title: "The Goal of the Project",
    detail:
      "The goal is to create a student-friendly cybersecurity learning platform with lessons, activities, resources, teacher tools, and outreach materials that can support real school presentations.",
  },
];

const growthTimeline = [
  {
    stage: "Stage 1",
    title: "Basic Website Foundation",
    detail:
      "The project started with the main website structure, homepage, navigation, footer, and early learning pages.",
  },
  {
    stage: "Stage 2",
    title: "Age-Level Learning Tracks",
    detail:
      "CyberShield expanded into Kids, Junior, and High School tracks so different students could learn at the right level.",
  },
  {
    stage: "Stage 3",
    title: "Lessons and Activities",
    detail:
      "The platform grew with a Learning Library, six individual lesson pages, quizzes, scam practice, password safety, Scenario Room, and Practice Lab.",
  },
  {
    stage: "Stage 4",
    title: "Outreach Preparation",
    detail:
      "The project added resources, teacher tools, worksheets, presentation outlines, email templates, feedback planning, and honest impact tracking.",
  },
  {
    stage: "Stage 5",
    title: "Polish and Launch Readiness",
    detail:
      "The current focus is improving quality, testing routes, strengthening content, and preparing the site for future school outreach.",
  },
];

const lessonsLearned = [
  "How to plan a real project with multiple pages, goals, and audiences.",
  "How to use Next.js, Tailwind CSS, GitHub, and Vercel in a real workflow.",
  "How to test locally before pushing changes live.",
  "How to keep cybersecurity content safe, ethical, and age-appropriate.",
  "How to build for students, teachers, families, and outreach at the same time.",
  "How to document progress honestly without exaggerating impact.",
];

const projectValues = [
  {
    title: "Safety First",
    detail:
      "CyberShield uses fake examples only and avoids real passwords, real suspicious links, and private student data.",
  },
  {
    title: "Student-Friendly",
    detail:
      "Lessons are written in clear language so students can understand cybersecurity without needing advanced technical knowledge.",
  },
  {
    title: "Ethical Learning",
    detail:
      "The project focuses on defensive cybersecurity, privacy, permission, and responsible online behavior.",
  },
  {
    title: "Honest Impact",
    detail:
      "CyberShield does not claim students reached, school partnerships, or feedback until those things actually happen.",
  },
];

const whatComesNext = [
  {
    title: "Final Quality Testing",
    detail:
      "Test every page, button, route, mobile layout, safety reminder, and live Vercel link before outreach.",
  },
  {
    title: "Outreach Preparation",
    detail:
      "Prepare short school presentations, teacher handouts, worksheets, and email messages for future outreach.",
  },
  {
    title: "Real School Sessions",
    detail:
      "After the site is ready, CyberShield can be shared with teachers, clubs, or schools through real outreach.",
  },
  {
    title: "Feedback-Based Improvements",
    detail:
      "Future updates should be based on real feedback, real testing, and real student or teacher needs.",
  },
];

const projectLinks = [
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
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Impact",
    href: "/impact",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
];

export default function ProjectStoryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Project Story
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            The story behind CyberShield Academy.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy is a student-built cybersecurity literacy
            project created to help students learn safer online habits, practice
            ethical decision-making, and prepare for a more secure digital
            world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lessons"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Lessons
            </Link>

            <Link
              href="/roadmap"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Roadmap
            </Link>

            <Link
              href="/impact"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Impact Tracker
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Project note: CyberShield Academy is still growing. The site should
            only claim real features, real outreach, and real impact after they
            actually exist.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {storySections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-2xl font-bold text-cyan-200">
                  {section.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {section.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              How the Project Grew
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy grew step by step from a basic idea into a
              larger cybersecurity education platform.
            </p>

            <div className="mt-6 grid gap-4">
              {growthTimeline.map((item) => (
                <div
                  key={item.stage}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <p className="text-sm font-semibold text-cyan-300">
                    {item.stage}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
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
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                What I Learned
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Building CyberShield Academy has been both a technical project
                and a learning experience in planning, design, safety, and
                communication.
              </p>

              <div className="mt-6 grid gap-3">
                {lessonsLearned.map((lesson) => (
                  <div
                    key={lesson}
                    className="rounded-xl border border-emerald-500/20 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {lesson}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Project Values
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These values guide every CyberShield page, feature, lesson, and
                future outreach plan.
              </p>

              <div className="mt-6 grid gap-4">
                {projectValues.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-bold text-cyan-200">{value.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {value.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              What Comes Next
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The next phase is about testing, polishing, preparing outreach,
              and improving the project based on real use.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {whatComesNext.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-purple-100">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              What This Project Does Not Do
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is a safe educational project. It does not
              teach harmful actions or encourage students to test real systems.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "It does not ask students to enter real passwords.",
                "It does not use real suspicious links for practice.",
                "It does not collect private student information.",
                "It does not teach unauthorized access.",
                "It does not claim fake outreach numbers.",
                "It does not replace help from teachers, parents, or technology staff.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
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
              Explore the Project
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to see how CyberShield Academy connects learning,
              practice, resources, outreach, and honest documentation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projectLinks.map((link) => (
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