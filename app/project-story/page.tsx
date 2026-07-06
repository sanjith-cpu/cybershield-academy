import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const storySections = [
  {
    title: "Why I Built It",
    detail:
      "Cybersecurity is becoming part of everyday student life, but many students do not get enough practical guidance about scams, privacy, passwords, safe browsing, digital footprint, and ethical technology use. CyberShield Academy was built to make these topics easier to understand and easier to teach.",
  },
  {
    title: "Who It Helps",
    detail:
      "The project is designed for students, teachers, families, clubs, and future outreach partners. It includes lessons, activities, classroom resources, and safe practice tools for different age levels.",
  },
  {
    title: "What Makes It Different",
    detail:
      "CyberShield Academy is not just a single page or simple slideshow. It is a growing cybersecurity literacy platform with connected lessons, practice activities, teacher tools, outreach materials, impact tracking, a build log, and a roadmap for future growth.",
  },
];

const projectStats = [
  {
    label: "Learning Focus",
    value: "Cyber Safety",
    note: "Scams, passwords, privacy, safe browsing, digital footprint, and cyber ethics.",
  },
  {
    label: "Audience",
    value: "Students + Schools",
    note: "Built for students, teachers, families, and future outreach settings.",
  },
  {
    label: "Project Type",
    value: "Student-Built",
    note: "Created as a real website using a step-by-step development workflow.",
  },
  {
    label: "Impact Status",
    value: "Honest Tracking",
    note: "Real outreach numbers stay at 0 until real outreach happens.",
  },
];

const growthTimeline = [
  {
    stage: "Stage 1",
    title: "Website Foundation",
    detail:
      "The project started with the main website structure, homepage, navigation, footer, and early pages that explained the mission.",
  },
  {
    stage: "Stage 2",
    title: "Age-Level Learning Tracks",
    detail:
      "CyberShield expanded into Kids, Junior, and High School tracks so cybersecurity topics could be explained at different student levels.",
  },
  {
    stage: "Stage 3",
    title: "Learning Library",
    detail:
      "A lessons hub and six individual lessons were created for password safety, scam awareness, privacy basics, safe browsing, digital footprint, and cyber ethics.",
  },
  {
    stage: "Stage 4",
    title: "Practice Activities",
    detail:
      "The site added quizzes, scam spotting, password practice, safe browsing challenges, digital footprint reflection, cyber ethics scenarios, Scenario Room, and Practice Lab.",
  },
  {
    stage: "Stage 5",
    title: "Outreach Preparation",
    detail:
      "Teacher resources, worksheets, presentation outlines, outreach materials, email templates, feedback planning, and impact tracking were added to support future school presentations.",
  },
  {
    stage: "Stage 6",
    title: "Polish and Launch Readiness",
    detail:
      "The current phase is focused on improving quality, testing pages, strengthening wording, checking links, documenting the build, and preparing the site for future real outreach.",
  },
];

const buildSkills = [
  {
    title: "Planning",
    detail:
      "I learned how to break a large idea into smaller pages, sections, phases, and checkpoints instead of trying to build everything at once.",
  },
  {
    title: "Web Development",
    detail:
      "I practiced building with Next.js, Tailwind CSS, reusable components, page routes, local testing, GitHub commits, and Vercel deployment.",
  },
  {
    title: "Product Thinking",
    detail:
      "I learned to think about different audiences, including elementary students, middle school students, high school students, teachers, and families.",
  },
  {
    title: "Safety Design",
    detail:
      "I learned that cybersecurity education must be ethical, defensive, age-appropriate, and careful about privacy.",
  },
];

const lessonsLearned = [
  "A real project needs planning, testing, patience, and many small improvements.",
  "Good cybersecurity education should be practical, safe, and understandable.",
  "A website becomes stronger when pages are connected instead of isolated.",
  "Outreach materials need to be useful for teachers, not just impressive to look at.",
  "Impact should be documented honestly instead of exaggerated.",
  "GitHub, Vercel, and testing checkpoints make the project safer to improve.",
];

const projectValues = [
  {
    title: "Safety First",
    detail:
      "CyberShield uses fake examples only and avoids real passwords, real suspicious links, harmful instructions, and private student data collection.",
  },
  {
    title: "Student-Friendly",
    detail:
      "The content is written in clear language so students can understand important online safety ideas without needing advanced technical knowledge.",
  },
  {
    title: "Defensive Learning",
    detail:
      "The project focuses on prevention, awareness, privacy, reporting, permission, and responsible decision-making.",
  },
  {
    title: "Honest Impact",
    detail:
      "CyberShield does not claim students reached, school partnerships, feedback responses, or expert review until those things actually happen.",
  },
];

const websiteSystems = [
  {
    title: "Learning System",
    detail:
      "Lessons and age-level tracks teach the core ideas of cybersecurity literacy.",
    href: "/lessons",
    label: "View Lessons",
  },
  {
    title: "Practice System",
    detail:
      "Activities help students apply what they learn through safe, fake, defensive examples.",
    href: "/practice-lab",
    label: "Open Practice Lab",
  },
  {
    title: "Teacher Support System",
    detail:
      "Teacher Toolkit, worksheets, and presentation outlines help prepare classroom-friendly learning.",
    href: "/teacher-toolkit",
    label: "Open Teacher Toolkit",
  },
  {
    title: "Outreach System",
    detail:
      "Outreach materials and email templates support future school or community presentations.",
    href: "/outreach",
    label: "View Outreach",
  },
  {
    title: "Documentation System",
    detail:
      "Roadmap, Impact, Project Story, and Build Log pages explain what is built, what is planned, and what should not be claimed yet.",
    href: "/build-log",
    label: "Open Build Log",
  },
  {
    title: "Safety System",
    detail:
      "Safety and privacy reminders keep the project focused on ethical, age-appropriate learning.",
    href: "/safety",
    label: "Safety & Privacy",
  },
];

const whatComesNext = [
  {
    title: "Final Site Testing",
    detail:
      "Test every page, route, button, footer link, mobile layout, and live Vercel page before calling the site launch-ready.",
  },
  {
    title: "Outreach Preparation",
    detail:
      "Polish teacher materials, worksheets, presentation outlines, and outreach email templates for future school contact.",
  },
  {
    title: "Real Outreach",
    detail:
      "After the site is ready, CyberShield can be shared with teachers, clubs, schools, or community programs through real outreach.",
  },
  {
    title: "Feedback Improvements",
    detail:
      "Future updates should be based on real feedback, real testing, and real student or teacher needs.",
  },
];

const whatThisProjectDoesNotDo = [
  "It does not ask students to enter real passwords.",
  "It does not use real suspicious links for practice.",
  "It does not collect private student information.",
  "It does not teach unauthorized access.",
  "It does not encourage testing real systems.",
  "It does not claim fake outreach numbers.",
  "It does not claim school partnerships before they exist.",
  "It does not replace help from teachers, parents, or school technology staff.",
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
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
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
  {
    label: "Build Log",
    href: "/build-log",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
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
            project created to help students build safer online habits, practice
            ethical decision-making, and understand cybersecurity in a way that
            is clear, useful, and age-appropriate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lessons"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Lessons
            </Link>

            <Link
              href="/build-log"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Build Log
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((item) => (
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
                  {item.note}
                </p>
              </div>
            ))}
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
              CyberShield Academy grew step by step from a basic website idea
              into a larger cybersecurity education and outreach platform.
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
                and a real learning experience in planning, design, safety, and
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
                Skills Built During the Project
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                CyberShield Academy helped turn an idea into a real product with
                planning, building, testing, publishing, and improvement cycles.
              </p>

              <div className="mt-6 grid gap-4">
                {buildSkills.map((skill) => (
                  <div
                    key={skill.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-bold text-cyan-200">{skill.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What the Website Includes
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is organized into connected systems so the
              project can support learning, practice, outreach, safety, and
              honest documentation.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {websiteSystems.map((system) => (
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
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              Project Values
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These values guide every CyberShield page, feature, lesson, and
              future outreach plan.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projectValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-purple-100">{value.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {value.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
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
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-100">{item.title}</h3>

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
              teach harmful actions, collect private student information, or
              encourage students to test real systems.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {whatThisProjectDoesNotDo.map((item) => (
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
              practice, resources, outreach, safety, build documentation, and
              honest impact tracking.
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