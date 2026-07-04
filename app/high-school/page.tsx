import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackSections = [
  {
    title: "Beginner Track",
    description:
      "Start with the core habits every high school student should know before going deeper into cybersecurity.",
    modules: [
      "Online safety habits and recognizing risky situations",
      "Password security, passphrases, and multi-factor authentication",
      "Phishing, fake login pages, suspicious links, and scam red flags",
      "Digital footprint basics and how online choices can affect your future",
    ],
  },
  {
    title: "Intermediate Track",
    description:
      "Build stronger cybersecurity thinking by learning how systems, accounts, networks, and people are protected.",
    modules: [
      "How attackers use social engineering and how defenders reduce risk",
      "Basic network safety concepts like Wi-Fi security, updates, and secure browsing",
      "Privacy settings, app permissions, and protecting personal information",
      "Cybersecurity teamwork: reporting problems, documenting issues, and helping others safely",
    ],
  },
  {
    title: "Advanced Track",
    description:
      "Explore career-connected cybersecurity concepts while staying ethical, defensive, and age-appropriate.",
    modules: [
      "Defensive security mindset: protecting systems instead of breaking them",
      "Risk assessment: identifying what could go wrong and how to reduce harm",
      "Incident response basics: what to do when something suspicious happens",
      "Career preparation through projects, documentation, certifications, and outreach",
    ],
  },
];

const ethicsRules = [
  "Only practice cybersecurity skills in safe, legal, and approved environments.",
  "Never try to access someone else’s account, device, network, or private information.",
  "Use cybersecurity knowledge to protect people, report problems, and reduce harm.",
  "When in doubt, ask a teacher, parent, mentor, or trusted adult before taking action.",
];

const careerPaths = [
  {
    role: "Cybersecurity Analyst",
    detail:
      "Monitors alerts, investigates suspicious activity, and helps organizations respond to threats.",
  },
  {
    role: "Security Awareness Educator",
    detail:
      "Teaches students, employees, and communities how to avoid scams and stay safer online.",
  },
  {
    role: "Network Security Specialist",
    detail:
      "Helps protect networks, Wi-Fi systems, firewalls, and connected devices.",
  },
  {
    role: "Digital Forensics Investigator",
    detail:
      "Studies digital evidence after incidents and helps understand what happened.",
  },
];

const certificationTopics = [
  "Basic computer and networking knowledge",
  "Cybersecurity vocabulary and common threats",
  "Safe account protection habits",
  "Ethics, laws, and responsible technology use",
  "Risk management and security best practices",
];

const discussionPrompts = [
  "Why do scams often use urgency, fear, or rewards to pressure people?",
  "How can students protect their digital footprint before applying to colleges or jobs?",
  "What is the difference between learning cybersecurity and misusing cybersecurity skills?",
  "Why is reporting a suspicious message usually safer than trying to investigate it yourself?",
];

export default function HighSchoolPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield High School
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Cybersecurity learning for high school students.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This track helps high school students build strong online safety
            habits, understand defensive cybersecurity, explore career pathways,
            and prepare for future learning in a safe and ethical way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lessons"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Lessons
            </Link>

            <Link
              href="/activities"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Try Activities
            </Link>

            <Link
              href="/careers"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Explore Careers
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {trackSections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-cyan-200">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {section.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {section.modules.map((module) => (
                    <li key={module} className="rounded-xl bg-slate-950/70 p-3">
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Defensive Cybersecurity Ethics
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy teaches cybersecurity as a defensive skill.
              Students should use what they learn to protect accounts, help
              their communities, and make safer choices online.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {ethicsRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/cyber-ethics"
                className="inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Practice Cyber Ethics
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-3xl font-bold text-white">
                Career Pathway Examples
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                High school students do not need to know their exact career yet,
                but exploring roles can make cybersecurity feel more real and
                useful.
              </p>

              <div className="mt-6 space-y-4">
                {careerPaths.map((career) => (
                  <div
                    key={career.role}
                    className="rounded-xl bg-slate-950/70 p-4"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {career.role}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {career.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/careers"
                  className="inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Full Careers Page
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-3xl font-bold text-white">
                Certification Preparation Overview
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Certifications are optional future goals, not required to use
                this website. This page introduces topics that can help students
                prepare for beginner cybersecurity learning later.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {certificationTopics.map((topic) => (
                  <li key={topic} className="rounded-xl bg-slate-950/70 p-3">
                    {topic}
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm leading-6 text-yellow-100">
                Reminder: CyberShield Academy certificates are learning
                recognition badges, not official industry certifications.
              </p>

              <div className="mt-6">
                <Link
                  href="/certification-guide"
                  className="inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Certification Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-3xl font-bold text-white">
              Discussion Prompts
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              These questions can be used by students, teachers, clubs, or
              outreach volunteers to start meaningful conversations.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {discussionPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-xl bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Learning
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              After finishing this page, students can explore lessons, complete
              activities, use resources, review teacher materials, explore
              careers, review certification guidance, or check the project
              roadmap.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              <Link
                href="/lessons"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Lessons
              </Link>

              <Link
                href="/activities"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Activities
              </Link>

              <Link
                href="/resources"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Resources
              </Link>

              <Link
                href="/teacher-toolkit"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/careers"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Careers
              </Link>

              <Link
                href="/certification-guide"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Certification Guide
              </Link>

              <Link
                href="/roadmap"
                className="rounded-xl bg-slate-950/80 p-4 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
              >
                Roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}