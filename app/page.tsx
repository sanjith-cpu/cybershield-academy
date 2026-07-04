import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const audienceCards = [
  {
    title: "CyberShield Kids",
    audience: "Elementary Students",
    description:
      "Simple online safety lessons about private information, safe choices, kindness online, and asking trusted adults for help.",
    href: "/kids",
  },
  {
    title: "CyberShield Junior",
    audience: "Middle School Students",
    description:
      "Practical lessons about scam red flags, passwords, digital citizenship, privacy, and safer online habits.",
    href: "/junior",
  },
  {
    title: "CyberShield High School",
    audience: "High School Students",
    description:
      "Deeper cybersecurity literacy with defensive ethics, career pathways, certifications, and real-world safety habits.",
    href: "/high-school",
  },
];

const activityCards = [
  {
    title: "Cyber Safety Quiz",
    description:
      "Test knowledge about passwords, scams, privacy, digital citizenship, safe browsing, and defensive cybersecurity.",
    href: "/quiz",
  },
  {
    title: "Spot the Scam",
    description:
      "Practice identifying suspicious messages that use fake prizes, urgency, fear, secrecy, or suspicious links.",
    href: "/spot-the-scam",
  },
  {
    title: "Password Safety Lab",
    description:
      "Use fake practice passwords to learn about length, uniqueness, symbols, multi-factor authentication, and password safety.",
    href: "/password-lab",
  },
];

const projectHighlights = [
  "Student-built cybersecurity literacy platform",
  "Age-appropriate lessons for elementary, middle, and high school students",
  "Interactive activities for scams, passwords, and online safety",
  "Teacher resources for classroom use",
  "Outreach-ready lesson outlines for schools",
  "Honest impact tracking without fake numbers",
];

const outreachSteps = [
  {
    step: "1",
    title: "Prepare lessons",
    description:
      "Use the Teacher Toolkit, Resources page, and activity pages to plan a safe cybersecurity session.",
  },
  {
    step: "2",
    title: "Present to students",
    description:
      "Run a short elementary, middle school, or high school session using age-appropriate examples.",
  },
  {
    step: "3",
    title: "Collect safe feedback",
    description:
      "Use general feedback without collecting private student information.",
  },
  {
    step: "4",
    title: "Track real impact",
    description:
      "Update the Impact Tracker only after real outreach, real sessions, or real feedback happen.",
  },
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
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Impact",
    href: "/impact",
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
                Cybersecurity literacy for students, classrooms, and school
                outreach.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                CyberShield Academy is a student-built platform that teaches
                online safety, scam awareness, password security, digital
                citizenship, and ethical defensive cybersecurity for elementary,
                middle, and high school students.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/lessons"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Learning
                </Link>

                <Link
                  href="/activities"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Try Activities
                </Link>

                <Link
                  href="/outreach"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Explore Outreach
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-cyan-200">
                What students can learn
              </h2>

              <div className="mt-6 grid gap-3">
                {projectHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {activityCards.map((activity) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <h2 className="text-2xl font-bold text-cyan-200">
                  {activity.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {activity.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  Open activity →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Built for school outreach
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is designed to support real school
              presentations, teacher follow-up, and student-led cybersecurity
              education without collecting private student information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {outreachSteps.map((item) => (
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

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/teacher-toolkit"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/feedback"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Feedback Center
              </Link>

              <Link
                href="/impact"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Impact Tracker
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

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
              Safety reminder: CyberShield Academy teaches ethical defensive
              cybersecurity. Students should use these lessons to protect
              people, respect privacy, avoid risky behavior, and ask trusted
              adults for help when needed.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}