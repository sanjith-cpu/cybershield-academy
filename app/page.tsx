import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const audienceCards = [
  {
    title: "CyberShield Kids",
    audience: "Elementary Students",
    description:
      "Simple online safety lessons about private information, kind choices, trusted adults, and strange links.",
    href: "/kids",
  },
  {
    title: "CyberShield Junior",
    audience: "Middle School Students",
    description:
      "Practical lessons about scams, passwords, privacy, safe browsing, reporting, and digital citizenship.",
    href: "/junior",
  },
  {
    title: "CyberShield High School",
    audience: "High School Students",
    description:
      "Deeper cybersecurity literacy with ethics, careers, certifications, digital footprint, and defensive thinking.",
    href: "/high-school",
  },
];

const featureCards = [
  {
    title: "Full Lesson Library",
    description:
      "Six complete lessons covering password safety, scams, privacy, safe browsing, digital footprint, and cyber ethics.",
    href: "/lessons",
    label: "Open Lessons",
  },
  {
    title: "Interactive Practice",
    description:
      "Scenario Room, Practice Lab, quizzes, and challenges help students apply safe cybersecurity habits.",
    href: "/activities",
    label: "Try Activities",
  },
  {
    title: "Student Resources",
    description:
      "Glossary, safety checklist, family guide, teacher handout sections, and reporting reminders.",
    href: "/resources",
    label: "View Resources",
  },
  {
    title: "Outreach Ready",
    description:
      "Presentation outlines, worksheets, teacher tools, and email templates support real school outreach.",
    href: "/outreach",
    label: "Explore Outreach",
  },
];

const activityCards = [
  {
    title: "Scenario Room",
    description:
      "Read fake cybersecurity situations and choose the safest response.",
    href: "/scenario-room",
  },
  {
    title: "Practice Lab",
    description:
      "Move through six safe practice stations connected to the main lessons.",
    href: "/practice-lab",
  },
  {
    title: "Spot the Scam",
    description:
      "Practice identifying suspicious messages, fake prizes, urgency, and unsafe requests.",
    href: "/spot-the-scam",
  },
  {
    title: "Password Lab",
    description:
      "Use fake passwords only to learn about length, uniqueness, and safer account habits.",
    href: "/password-lab",
  },
];

const learningFlow = [
  {
    step: "1",
    title: "Learn",
    description:
      "Start with a lesson written for students using clear, safe examples.",
  },
  {
    step: "2",
    title: "Practice",
    description:
      "Use activities like Scenario Room, Practice Lab, quizzes, and reflections.",
  },
  {
    step: "3",
    title: "Reflect",
    description:
      "Answer questions about safer choices, warning signs, privacy, and reporting.",
  },
  {
    step: "4",
    title: "Share Safely",
    description:
      "Use teacher tools and outreach materials without collecting private student information.",
  },
];

const safetyPrinciples = [
  "Use fake examples only.",
  "Do not enter real passwords.",
  "Do not test real suspicious links.",
  "Do not collect private student information.",
  "Do not access accounts, devices, networks, or files without permission.",
  "Ask a trusted adult, teacher, or technology staff member when something feels suspicious.",
];

const quickLinks = [
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
    label: "Worksheets",
    href: "/worksheets",
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

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                CyberShield Academy
              </p>

              <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
                Cybersecurity literacy for safer students, stronger classrooms,
                and responsible digital citizens.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                CyberShield Academy is a student-built cybersecurity education
                platform that teaches online safety, scam awareness, password
                security, privacy, digital footprint, safe browsing, and ethical
                defensive cybersecurity.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/lessons"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Learning
                </Link>

                <Link
                  href="/scenario-room"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Try Scenario Room
                </Link>

                <Link
                  href="/resources"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View Resources
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
                Safety reminder: CyberShield Academy teaches safe, ethical, and
                defensive cybersecurity only. Students should use fake examples,
                protect privacy, and ask trusted adults for help.
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 shadow-xl shadow-cyan-950/20">
              <h2 className="text-2xl font-bold text-cyan-200">
                What CyberShield includes
              </h2>

              <div className="mt-6 grid gap-3">
                {[
                  "6 complete student lesson pages",
                  "Scenario-based cybersecurity practice",
                  "Practice Lab skill stations",
                  "Resources for students, families, and teachers",
                  "Worksheets and outreach materials",
                  "Honest impact tracking for future school sessions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Learn why CyberShield was created →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <h2 className="text-2xl font-bold text-white">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  {feature.label} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Choose a Learning Track
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is organized by age level so students can
              learn cybersecurity in a way that feels understandable, useful,
              and safe.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {audienceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <p className="text-sm font-semibold text-cyan-300">
                    {card.audience}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open track →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              How students move through CyberShield
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The platform is designed as a simple learning flow: understand the
              topic, practice safely, reflect on decisions, and use the knowledge
              responsibly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {learningFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Featured Practice Activities
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These activities help students practice safe decisions using fake
              examples only.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {activityCards.map((activity) => (
                <Link
                  key={activity.href}
                  href={activity.href}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-2xl font-bold text-cyan-200">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activity.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open activity →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                Built for real school outreach
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                CyberShield Academy is designed to support short classroom
                presentations, cybersecurity club sessions, and student-led
                outreach. The project includes teacher tools, worksheets,
                presentation outlines, and safe feedback resources.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/outreach"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Outreach Hub
                </Link>

                <Link
                  href="/presentation-outlines"
                  className="rounded-xl border border-emerald-500/30 px-5 py-3 font-semibold text-emerald-50 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Presentation Outlines
                </Link>

                <Link
                  href="/teacher-toolkit"
                  className="rounded-xl border border-emerald-500/30 px-5 py-3 font-semibold text-emerald-50 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Teacher Toolkit
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Honest impact tracking
              </h2>

              <p className="mt-4 leading-8 text-yellow-50/90">
                CyberShield Academy does not claim fake outreach numbers. The
                Impact page is designed to track real future sessions, real
                feedback, and real progress after outreach begins.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/impact"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Impact Tracker
                </Link>

                <Link
                  href="/feedback"
                  className="rounded-xl border border-yellow-500/30 px-5 py-3 font-semibold text-yellow-50 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Feedback Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Safety principles behind every page
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Every CyberShield page should stay defensive, ethical,
              age-appropriate, and privacy-aware.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {safetyPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {principle}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/safety"
                className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Review Safety & Privacy →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Explore CyberShield Academy
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to move through lessons, activities, resources,
              school outreach planning, and honest project documentation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
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