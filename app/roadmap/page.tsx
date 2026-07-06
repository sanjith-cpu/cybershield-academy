import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const completedWork = [
  {
    category: "Core Website",
    items: [
      "Homepage created and upgraded",
      "Navbar created and upgraded for mobile",
      "Footer created and connected",
      "About page created",
      "Safety & Privacy page created and upgraded",
      "Project Story page created and upgraded",
      "Build Log page created",
      "Full route audit completed earlier after clearing .next",
    ],
  },
  {
    category: "Learning Tracks",
    items: [
      "Kids track upgraded",
      "Junior track upgraded",
      "High School track upgraded",
      "Lessons hub upgraded into a Learning Library",
      "All six individual lesson pages created and connected",
    ],
  },
  {
    category: "Lesson Pages",
    items: [
      "Password Safety lesson page live",
      "Scam Awareness lesson page live",
      "Privacy Basics lesson page live",
      "Safe Browsing lesson page live",
      "Digital Footprint lesson page live",
      "Cyber Ethics lesson page live",
    ],
  },
  {
    category: "Interactive Practice",
    items: [
      "Cyber Safety Quiz upgraded",
      "Spot the Scam upgraded",
      "Password Safety Lab upgraded",
      "Safe Browsing Challenge created and connected",
      "Digital Footprint Reflection created and connected",
      "Cyber Ethics Scenarios created and connected",
      "Scenario Room created and connected",
      "Practice Lab created and connected",
    ],
  },
  {
    category: "Outreach and Support",
    items: [
      "Resources page upgraded",
      "Teacher Toolkit upgraded",
      "Worksheets page created",
      "Presentation Outlines page created",
      "Email Templates page created and connected through Outreach",
      "Outreach page upgraded",
      "Feedback Center upgraded",
    ],
  },
  {
    category: "High School Expansion",
    items: [
      "Careers page created and connected",
      "Certification Guide created and connected",
      "Certificate Pathways upgraded",
      "Impact Tracker upgraded",
    ],
  },
];

const currentWork = [
  {
    title: "Build Log Connection",
    status: "Current",
    detail:
      "The Build Log page has been created and is being connected through the Footer, Project Story, Roadmap, and About page.",
  },
  {
    title: "Final Public Page Polish",
    status: "Current",
    detail:
      "The project is now focused on carefully polishing important public pages without breaking pages that already work.",
  },
  {
    title: "Outreach Readiness",
    status: "Current",
    detail:
      "Teacher resources, worksheets, presentation outlines, email templates, and outreach pages are being reviewed so they are ready for future real school outreach.",
  },
  {
    title: "Final Quality Pass",
    status: "Upcoming",
    detail:
      "Before calling the site launch-ready, every major route, button, mobile layout, footer link, and safety reminder should be tested again.",
  },
];

const nearTermWork = [
  {
    title: "Finish Build Log Connections",
    detail:
      "Connect the Build Log through major project pages so visitors can understand how CyberShield Academy was built.",
    href: "/build-log",
  },
  {
    title: "Polish Outreach Materials",
    detail:
      "Review presentation outlines, teacher resources, worksheets, and email templates before school outreach begins.",
    href: "/outreach",
  },
  {
    title: "Prepare Final Site QA",
    detail:
      "Test all routes, links, mobile layouts, grammar, spacing, and live Vercel pages before calling V1 launch-ready.",
    href: "/safety",
  },
  {
    title: "Document Real Impact Later",
    detail:
      "Keep the Impact page honest by only updating outreach numbers after real sessions, real feedback, or real student reach happen.",
    href: "/impact",
  },
];

const futureWork = [
  "Printable PDF worksheet downloads",
  "Downloadable certificate templates",
  "Project demo video script",
  "More scenario-based practice activities",
  "Student cyber glossary expansion",
  "More teacher handout formats",
  "Optional safe feedback storage system if privacy rules are clear",
  "Real outreach log after actual school sessions happen",
  "Real impact metrics after students or schools are actually reached",
];

const longTermVision = [
  {
    title: "More Learning Paths",
    detail:
      "Expand beginner, intermediate, and advanced cybersecurity literacy topics while keeping all content safe and defensive.",
  },
  {
    title: "More Classroom Tools",
    detail:
      "Create stronger resources for teachers, families, clubs, outreach teams, and school presentations.",
  },
  {
    title: "More Practice Systems",
    detail:
      "Add more safe simulations, scenario activities, reflection tools, and challenge pages using fake examples only.",
  },
  {
    title: "Research and Impact",
    detail:
      "Eventually collect meaningful, privacy-aware insights about cybersecurity readiness only if safe consent and privacy rules are clear.",
  },
];

const qaChecklist = [
  "Test every navbar link.",
  "Test every footer link.",
  "Test every homepage button and card.",
  "Test every lesson Open Lesson button.",
  "Test every activity card.",
  "Test every outreach and teacher resource link.",
  "Test the Build Log route and all Build Log links.",
  "Test mobile menu on a narrow screen.",
  "Check that every page has Navbar and Footer.",
  "Check spelling, grammar, spacing, and repeated wording.",
  "Check that no page asks for real passwords.",
  "Check that no page encourages testing real suspicious links.",
  "Check that no fake impact numbers are claimed.",
  "Check live Vercel pages after each push.",
];

const safetyRules = [
  "Use fake examples only.",
  "Do not enter real passwords.",
  "Do not test real suspicious links.",
  "Do not collect private student information.",
  "Do not access accounts, devices, networks, or files without permission.",
  "Tell students to ask a trusted adult, teacher, or technology staff member when something feels suspicious.",
];

const roadmapLinks = [
  {
    label: "Homepage",
    href: "/",
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
];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Project Roadmap
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building CyberShield Academy step by step.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This roadmap shows what has already been built, what is being
            improved now, what should come next, and what belongs in the
            long-term vision. The goal is to keep CyberShield Academy honest,
            useful, safe, and outreach-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lessons"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Lessons
            </Link>

            <Link
              href="/build-log"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Build Log
            </Link>

            <Link
              href="/project-story"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Project Story
            </Link>

            <Link
              href="/impact"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Impact Tracker
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Honesty note: Features, outreach numbers, and impact should only be
            marked complete when they are actually built, tested, pushed live,
            or completed in real outreach.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Project Stage",
                value: "Build + Polish",
                note: "Core pages are live. The focus is now quality, depth, and outreach readiness.",
              },
              {
                label: "Lesson System",
                value: "6 Lessons Live",
                note: "All main individual lesson pages are created, connected, and live.",
              },
              {
                label: "Practice System",
                value: "Expanded",
                note: "Scenario Room and Practice Lab now support safe decision-based practice.",
              },
              {
                label: "Documentation",
                value: "Build Log Added",
                note: "Project Story, Roadmap, Impact, and Build Log explain the project honestly.",
              },
            ].map((item) => (
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
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Completed Work
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These parts have been created, tested locally, committed, pushed,
              or prepared during the step-by-step build process.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {completedWork.map((section) => (
                <div
                  key={section.category}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-emerald-100">
                    {section.category}
                  </h3>

                  <div className="mt-4 grid gap-3">
                    {section.items.map((item) => (
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
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Current Work
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The project is no longer just trying to finish quickly. The focus
              is now making CyberShield Academy deeper, clearer, safer, better
              documented, and more impressive before outreach.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {currentWork.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-bold text-cyan-100">{item.title}</h3>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
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
              Recommended Next Work
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These are the next realistic improvements before the final launch
              checklist. They keep the project honest and useful.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {nearTermWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open related page →
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
                Future Work
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These items should stay listed as future work until they are
                actually created, connected, tested, and pushed live.
              </p>

              <div className="mt-6 grid gap-3">
                {futureWork.map((item) => (
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
                Final QA Checklist
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                This should happen near the final launch week, not too early.
                Every major page and link should be tested carefully.
              </p>

              <div className="mt-6 grid gap-3">
                {qaChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              Long-Term Vision
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The long-term goal is to grow CyberShield Academy into a broader
              cybersecurity literacy, education, and outreach platform while
              keeping student safety, privacy, and ethical learning at the
              center.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {longTermVision.map((item) => (
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
              What CyberShield Should Not Claim Yet
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This section keeps the project honest for college applications,
              outreach, and public viewing.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Do not claim students reached until real students are reached.",
                "Do not claim school partnerships until real schools agree.",
                "Do not claim research results until real data is collected safely and ethically.",
                "Do not claim automatic certificates unless that feature is actually built.",
                "Do not claim teacher dashboards or student accounts until they exist.",
                "Do not claim expert review unless an expert actually reviews the content.",
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

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Safety Rules for Future Features
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Every future CyberShield feature should follow these rules.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Roadmap Navigation
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to review the current project, test major
              sections, document the build, and continue preparing for outreach.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roadmapLinks.map((link) => (
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