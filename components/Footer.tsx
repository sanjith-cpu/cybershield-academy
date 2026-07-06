import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
      {
        label: "Kids",
        href: "/kids",
      },
      {
        label: "Junior",
        href: "/junior",
      },
      {
        label: "High School",
        href: "/high-school",
      },
      {
        label: "Lessons",
        href: "/lessons",
      },
      {
        label: "Certificates",
        href: "/certificates",
      },
      {
        label: "Certification Guide",
        href: "/certification-guide",
      },
    ],
  },
  {
    title: "Activities",
    links: [
      {
        label: "Activities",
        href: "/activities",
      },
      {
        label: "Scenario Room",
        href: "/scenario-room",
      },
      {
        label: "Practice Lab",
        href: "/practice-lab",
      },
      {
        label: "Quiz",
        href: "/quiz",
      },
      {
        label: "Spot the Scam",
        href: "/spot-the-scam",
      },
      {
        label: "Password Lab",
        href: "/password-lab",
      },
      {
        label: "Safe Browsing",
        href: "/safe-browsing",
      },
      {
        label: "Digital Footprint",
        href: "/digital-footprint",
      },
      {
        label: "Cyber Ethics",
        href: "/cyber-ethics",
      },
    ],
  },
  {
    title: "Project",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Project Story",
        href: "/project-story",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Roadmap",
        href: "/roadmap",
      },
      {
        label: "Outreach",
        href: "/outreach",
      },
      {
        label: "Impact",
        href: "/impact",
      },
    ],
  },
  {
    title: "Support",
    links: [
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
        label: "Presentation Outlines",
        href: "/presentation-outlines",
      },
      {
        label: "Safety & Privacy",
        href: "/safety",
      },
      {
        label: "Feedback",
        href: "/feedback",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link href="/" className="text-2xl font-bold text-cyan-300">
              CyberShield Academy
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              A student-built cybersecurity literacy platform that teaches
              online safety, scam awareness, password habits, privacy,
              responsible technology use, and defensive cybersecurity.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm leading-6 text-yellow-100">
              CyberShield Academy is for safe, ethical, and defensive learning
              only.
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {section.title}
                </h2>

                <div className="mt-4 grid gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-cyan-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 CyberShield Academy. Built for cybersecurity education,
          outreach, and safer online habits.
        </div>
      </div>
    </footer>
  );
}