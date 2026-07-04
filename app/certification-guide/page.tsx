import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const overviewCards = [
  {
    title: "What is a certification?",
    detail:
      "A certification is usually an optional credential that shows someone studied and passed an exam about a specific technology or skill area.",
  },
  {
    title: "Are certifications required?",
    detail:
      "No. Students can learn cybersecurity through classes, projects, clubs, outreach, practice, reading, and mentorship before thinking about certifications.",
  },
  {
    title: "Why learn about them?",
    detail:
      "Certifications can help students understand what topics professionals study, such as networking, security basics, cloud systems, and risk management.",
  },
  {
    title: "What should students avoid?",
    detail:
      "Students should not rush into expensive exams, memorize without understanding, or treat certifications as more important than real learning and ethics.",
  },
];

const beginnerPathways = [
  {
    title: "Computer Basics",
    description:
      "Start by understanding devices, operating systems, files, updates, browsers, accounts, and basic troubleshooting.",
    topics: [
      "Computer hardware and software",
      "Operating system basics",
      "File safety",
      "Updates and backups",
      "Account protection",
    ],
  },
  {
    title: "Networking Basics",
    description:
      "Networking knowledge helps students understand how devices connect, how information moves, and why secure connections matter.",
    topics: [
      "Wi-Fi safety",
      "Routers and networks",
      "IP addresses at a high level",
      "Safe browsing",
      "Basic troubleshooting",
    ],
  },
  {
    title: "Security Fundamentals",
    description:
      "Security fundamentals focus on protecting accounts, recognizing threats, reducing risk, and responding safely to suspicious activity.",
    topics: [
      "Passwords and MFA",
      "Phishing and scams",
      "Privacy settings",
      "Risk awareness",
      "Incident reporting basics",
    ],
  },
  {
    title: "Cloud and Modern Technology",
    description:
      "Many organizations use cloud tools. Students can begin by learning safe account access, permissions, storage, and shared documents.",
    topics: [
      "Cloud accounts",
      "Shared files",
      "Permissions",
      "Data privacy",
      "Secure collaboration",
    ],
  },
];

const studyHabits = [
  "Build understanding before memorizing terms.",
  "Take notes in your own words.",
  "Use safe practice examples only.",
  "Review vocabulary regularly.",
  "Connect topics to real-life student situations.",
  "Create small projects to teach what you learned.",
  "Document progress honestly.",
  "Check official exam providers for current requirements before spending money.",
];

const certificationWarnings = [
  "Certification names, exam objectives, prices, and rules can change.",
  "Students should check official certification websites before making plans.",
  "Certifications are optional learning goals, not a requirement to begin cybersecurity.",
  "A certificate or certification does not replace ethics, responsibility, and real understanding.",
  "CyberShield Academy badges are not official industry certifications.",
];

const projectConnections = [
  {
    title: "Password Safety Lab",
    detail:
      "Supports account protection fundamentals using fake practice passwords only.",
    href: "/password-lab",
  },
  {
    title: "Spot the Scam",
    detail:
      "Builds phishing and scam awareness through safe example messages.",
    href: "/spot-the-scam",
  },
  {
    title: "Safe Browsing Challenge",
    detail:
      "Helps students practice checking links, pop-ups, and download warnings.",
    href: "/safe-browsing",
  },
  {
    title: "Cyber Ethics Scenarios",
    detail:
      "Connects certification learning to permission, privacy, reporting, and responsibility.",
    href: "/cyber-ethics",
  },
];

const relatedLinks = [
  {
    label: "High School Track",
    href: "/high-school",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
  },
];

export default function CertificationGuidePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Certification Guide
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            A student-friendly guide to cybersecurity certifications.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Certifications can be useful future learning goals, but they are not
            required to start learning cybersecurity. This guide explains
            certification pathways in a beginner-friendly way so students can
            explore them carefully and responsibly.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Important: CyberShield Academy does not provide official industry
            certifications. The CyberShield badges are learning recognition
            badges only.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-xl font-bold text-cyan-200">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Beginner Learning Pathways
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Before choosing any exam, students should build a strong
              foundation. These areas are useful for many beginner cybersecurity
              pathways.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {beginnerPathways.map((pathway) => (
                <div
                  key={pathway.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-white">
                    {pathway.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {pathway.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pathway.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
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
                Helpful Study Habits
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Good preparation is not just memorizing answers. Students should
                focus on understanding, safety, and honest progress.
              </p>

              <div className="mt-6 grid gap-3">
                {studyHabits.map((habit) => (
                  <div
                    key={habit}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {habit}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Certification Warnings
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Certification planning should be careful, realistic, and
                up-to-date.
              </p>

              <div className="mt-6 grid gap-3">
                {certificationWarnings.map((warning) => (
                  <div
                    key={warning}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {warning}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              CyberShield Activities That Support Certification Learning
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These activities do not replace certification study, but they help
              students build practical cybersecurity literacy.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {projectConnections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-cyan-300">
                    Open →
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
              Certification exploration connects to careers, high school
              learning, safety, resources, and project documentation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {relatedLinks.map((link) => (
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