import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const careerPaths = [
  {
    title: "Cybersecurity Analyst",
    level: "Great beginner career path",
    description:
      "Cybersecurity analysts help monitor alerts, review suspicious activity, investigate possible security issues, and support safer technology systems.",
    skills: [
      "Problem solving",
      "Reading alerts carefully",
      "Understanding scams and threats",
      "Documenting what happened",
      "Communicating with a team",
    ],
  },
  {
    title: "Security Engineer",
    level: "Technical builder role",
    description:
      "Security engineers help design and improve systems that protect accounts, networks, apps, and company data.",
    skills: [
      "Secure system design",
      "Network basics",
      "Cloud and app security",
      "Automation",
      "Testing defensive controls",
    ],
  },
  {
    title: "Digital Forensics Investigator",
    level: "Investigation-focused role",
    description:
      "Digital forensics investigators study digital evidence after incidents to understand what happened and help organizations respond properly.",
    skills: [
      "Attention to detail",
      "Evidence handling",
      "Timeline building",
      "Report writing",
      "Ethical investigation",
    ],
  },
  {
    title: "Cloud Security Specialist",
    level: "Modern infrastructure role",
    description:
      "Cloud security specialists help protect online systems, cloud accounts, storage, permissions, and services used by organizations.",
    skills: [
      "Cloud basics",
      "Account permissions",
      "Data protection",
      "Monitoring",
      "Security best practices",
    ],
  },
  {
    title: "Network Security Administrator",
    level: "Network protection role",
    description:
      "Network security administrators help protect Wi-Fi, routers, firewalls, connected devices, and internal networks.",
    skills: [
      "Networking basics",
      "Firewall concepts",
      "Device updates",
      "Troubleshooting",
      "Access control",
    ],
  },
  {
    title: "Security Awareness Educator",
    level: "Teaching and communication role",
    description:
      "Security awareness educators teach people how to avoid scams, protect accounts, recognize risks, and make safer online choices.",
    skills: [
      "Teaching",
      "Public speaking",
      "Writing clearly",
      "Scam awareness",
      "Creating lessons and activities",
    ],
  },
];

const studentSteps = [
  {
    title: "Start with online safety",
    detail:
      "Learn passwords, scams, privacy, digital citizenship, safe browsing, and ethical cybersecurity basics.",
  },
  {
    title: "Build small projects",
    detail:
      "Create educational pages, quizzes, checklists, reflections, or classroom activities that help others learn safely.",
  },
  {
    title: "Practice communication",
    detail:
      "Cybersecurity is not only technical. Explaining risks clearly is a valuable skill.",
  },
  {
    title: "Document your work",
    detail:
      "Keep track of what you built, what you learned, what problems you solved, and how your project improved.",
  },
  {
    title: "Stay ethical",
    detail:
      "Only practice in safe, legal, approved environments and focus on protecting people.",
  },
];

const beginnerProjects = [
  "Create a scam red flags checklist",
  "Build a password safety lesson using fake examples",
  "Make a digital footprint reflection activity",
  "Create a safe browsing challenge",
  "Prepare a classroom cybersecurity presentation",
  "Write a guide about reporting suspicious messages safely",
];

const careerSkills = [
  {
    skill: "Technical Curiosity",
    detail:
      "Cybersecurity professionals need to keep learning how systems, accounts, networks, and apps work.",
  },
  {
    skill: "Ethical Judgment",
    detail:
      "Knowing what not to do is just as important as knowing what to do. Permission and safety matter.",
  },
  {
    skill: "Communication",
    detail:
      "Security teams often explain risks to people who are not technical. Clear writing and speaking are important.",
  },
  {
    skill: "Problem Solving",
    detail:
      "Cybersecurity involves noticing patterns, asking careful questions, and thinking through possible causes.",
  },
  {
    skill: "Documentation",
    detail:
      "Good notes, reports, checklists, and timelines help teams understand and fix problems.",
  },
  {
    skill: "Responsibility",
    detail:
      "Cybersecurity work can involve sensitive information, so trust and professionalism are important.",
  },
];

const relatedLinks = [
  {
    label: "High School Track",
    href: "/high-school",
  },
  {
    label: "Cyber Ethics",
    href: "/cyber-ethics",
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
    label: "Roadmap",
    href: "/roadmap",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Cybersecurity Careers
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Explore cybersecurity career paths.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cybersecurity includes many different careers. Some roles are very
            technical, some focus on investigation, some focus on teaching, and
            some focus on helping organizations make safer decisions.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Career reminder: Cybersecurity careers require ethics, permission,
            responsibility, and defensive thinking. CyberShield Academy focuses
            on safe learning, not harmful hacking.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((career) => (
              <div
                key={career.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {career.level}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  {career.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {career.description}
                </p>

                <div className="mt-5">
                  <h3 className="font-semibold text-cyan-200">
                    Helpful skills
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              How Students Can Start
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Students do not need to know their exact career right away. A
              strong start is learning safe habits, building helpful projects,
              and documenting progress honestly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {studentSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Beginner Project Ideas
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These project ideas are safe, educational, and useful for
                students who want to explore cybersecurity.
              </p>

              <div className="mt-6 grid gap-3">
                {beginnerProjects.map((project) => (
                  <div
                    key={project}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Career Skills That Matter
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Cybersecurity careers combine technical learning with ethics,
                communication, documentation, and responsibility.
              </p>

              <div className="mt-6 grid gap-4">
                {careerSkills.map((item) => (
                  <div
                    key={item.skill}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {item.skill}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Exploring
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Career exploration connects to ethics, classroom lessons, student
              projects, outreach, and the high school learning track.
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