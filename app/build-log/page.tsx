import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const buildSummary = [
  {
    label: "Project Type",
    value: "Student-Built Website",
    note: "A cybersecurity literacy platform built with Next.js, Tailwind CSS, GitHub, and Vercel.",
  },
  {
    label: "Main Goal",
    value: "Cyber Safety Education",
    note: "Teach safer online habits, scam awareness, privacy, password security, and cyber ethics.",
  },
  {
    label: "Current Phase",
    value: "Build + Polish",
    note: "Core pages are live, and the project is being improved before future outreach.",
  },
  {
    label: "Impact Status",
    value: "Honest Tracking",
    note: "Real outreach numbers stay at 0 until real outreach sessions or feedback happen.",
  },
];

const buildPhases = [
  {
    phase: "Phase 1",
    title: "Website Foundation",
    status: "Completed",
    detail:
      "Created the main website structure, homepage, navigation, footer, and core public pages.",
    items: [
      "Homepage created and upgraded",
      "Navbar created and improved for mobile",
      "Footer created and connected",
      "About page upgraded",
      "Safety & Privacy page created and upgraded",
      "Project Story page created and upgraded",
    ],
  },
  {
    phase: "Phase 2",
    title: "Learning System",
    status: "Completed",
    detail:
      "Built the main learning structure so students can explore cybersecurity topics by age level and topic.",
    items: [
      "Kids page upgraded",
      "Junior page upgraded",
      "High School page upgraded",
      "Lessons hub created",
      "Six individual lesson pages created and connected",
      "Lessons cover passwords, scams, privacy, safe browsing, digital footprint, and cyber ethics",
    ],
  },
  {
    phase: "Phase 3",
    title: "Practice Activities",
    status: "Completed",
    detail:
      "Added safe, fake-example activities so students can practice defensive cybersecurity decisions.",
    items: [
      "Cyber Safety Quiz upgraded",
      "Spot the Scam upgraded",
      "Password Lab upgraded",
      "Safe Browsing Challenge created",
      "Digital Footprint Reflection created",
      "Cyber Ethics Scenarios created",
      "Scenario Room and Practice Lab created",
    ],
  },
  {
    phase: "Phase 4",
    title: "Teacher and Outreach Tools",
    status: "Completed",
    detail:
      "Created classroom-friendly resources that can support future school presentations and outreach.",
    items: [
      "Resources page upgraded",
      "Teacher Toolkit upgraded",
      "Worksheets page created",
      "Presentation Outlines page created",
      "Email Templates page created",
      "Outreach page upgraded and tested live",
      "Feedback Center upgraded",
    ],
  },
  {
    phase: "Phase 5",
    title: "Documentation and Trust",
    status: "In Progress",
    detail:
      "Strengthened the pages that explain the project honestly, including what is built, what is planned, and what should not be claimed yet.",
    items: [
      "Impact page upgraded with honest 0-count tracking",
      "Roadmap page updated",
      "Project Story page upgraded",
      "Safety & Privacy page upgraded",
      "Build Log page added",
      "Future work should continue to separate real progress from future goals",
    ],
  },
];

const toolsUsed = [
  {
    title: "Next.js",
    detail:
      "Used to organize the website into routes, pages, and reusable components.",
  },
  {
    title: "Tailwind CSS",
    detail:
      "Used to design the dark theme, cards, spacing, borders, and responsive layouts.",
  },
  {
    title: "GitHub",
    detail:
      "Used to save progress with commits and protect the project with version history.",
  },
  {
    title: "Vercel",
    detail:
      "Used to publish the website live and test pages after each push.",
  },
  {
    title: "Cursor",
    detail:
      "Used as the coding editor for making and testing project files.",
  },
  {
    title: "PowerShell",
    detail:
      "Used to run local development, Git commands, and project checks.",
  },
];

const workflowSteps = [
  {
    step: "1",
    title: "Edit one page at a time",
    detail:
      "Major pages were improved carefully instead of changing the whole project at once.",
  },
  {
    step: "2",
    title: "Test locally",
    detail:
      "Each page was tested with npm run dev before committing or pushing changes.",
  },
  {
    step: "3",
    title: "Commit working code",
    detail:
      "Only working changes were committed to GitHub after local testing passed.",
  },
  {
    step: "4",
    title: "Check the live site",
    detail:
      "After pushing, the matching Vercel page was opened to confirm the live version worked.",
  },
];

const safetyDecisions = [
  "Use fake scam examples only.",
  "Do not ask students to enter real passwords.",
  "Do not use real suspicious links for practice.",
  "Do not collect private student information.",
  "Do not teach unauthorized access.",
  "Keep activities defensive, ethical, and age-appropriate.",
  "Tell students to ask trusted adults, teachers, or school technology staff when something feels suspicious.",
  "Keep impact numbers at 0 until real outreach happens.",
];

const buildLessons = [
  "Large projects become easier when they are divided into smaller checkpoints.",
  "Testing locally before committing helps prevent broken code from going live.",
  "GitHub and Vercel make the project safer because working versions can be preserved.",
  "A strong website needs both good design and honest content.",
  "Cybersecurity education must be careful, ethical, and privacy-aware.",
  "Project documentation is important because it explains the work behind the final website.",
];

const nextSteps = [
  {
    title: "Connect Build Log",
    detail:
      "Add links to this page from Project Story, Roadmap, About, and the Footer.",
    href: "/project-story",
  },
  {
    title: "Final Launch QA",
    detail:
      "Test every major route, mobile menu, footer link, homepage button, and activity link.",
    href: "/roadmap",
  },
  {
    title: "Prepare Outreach",
    detail:
      "Polish worksheets, presentations, teacher materials, and email templates before real outreach.",
    href: "/outreach",
  },
  {
    title: "Document Real Impact Later",
    detail:
      "Update the Impact page only after real school contact, real sessions, or real feedback happen.",
    href: "/impact",
  },
];

const buildLinks = [
  {
    label: "Project Story",
    href: "/project-story",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Impact Tracker",
    href: "/impact",
  },
  {
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
  },
];

export default function BuildLogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Build Log
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            How CyberShield Academy was built.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This build log documents the development process behind CyberShield
            Academy. It shows how the project grew from a basic idea into a
            student-built cybersecurity literacy website with lessons,
            activities, resources, outreach materials, and honest impact
            tracking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/project-story"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Read Project Story
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
            Honesty note: This page documents real website progress and future
            plans. It does not claim real school outreach, student reach, or
            partnerships before they happen.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {buildSummary.map((item) => (
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
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Build Phases
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy was built in phases so each part could be
              tested, improved, and connected before moving to the next section.
            </p>

            <div className="mt-6 grid gap-5">
              {buildPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {phase.phase}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {phase.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {phase.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {phase.detail}
                  </p>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {phase.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm leading-6 text-slate-300"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                Tools Used
              </h2>

              <p className="mt-3 leading-7 text-emerald-50/90">
                These tools helped build, test, save, and publish CyberShield
                Academy.
              </p>

              <div className="mt-6 grid gap-4">
                {toolsUsed.map((tool) => (
                  <div
                    key={tool.title}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-bold text-emerald-100">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {tool.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Development Workflow
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                The project followed a careful workflow to avoid committing
                broken code and to keep the live website stable.
              </p>

              <div className="mt-6 grid gap-4">
                {workflowSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                        {item.step}
                      </span>

                      <h3 className="font-bold text-cyan-200">
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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Safety Decisions During the Build
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              Since this is a cybersecurity literacy project for students, the
              build process included safety rules from the beginning.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {safetyDecisions.map((decision) => (
                <div
                  key={decision}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {decision}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              Lessons Learned From Building
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is not only a website. It is also a learning
              experience in planning, coding, testing, safety, and
              communication.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {buildLessons.map((lesson) => (
                <div
                  key={lesson}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Recommended Next Steps
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These are realistic next steps for making the project more
              complete without exaggerating what has already happened.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {nextSteps.map((step) => (
                <Link
                  key={step.title}
                  href={step.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-lg font-bold text-cyan-200">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {step.detail}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open related page →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Exploring
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These pages explain the project story, roadmap, outreach plan,
              safety rules, and honest impact tracking.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {buildLinks.map((link) => (
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