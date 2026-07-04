import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
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
        label: "Certificates",
        href: "/certificates",
      },
    ],
  },
  {
    title: "Student Tracks",
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
    title: "Safety",
    links: [
      {
        label: "Safety & Privacy",
        href: "/safety",
      },
      {
        label: "Teacher Toolkit",
        href: "/teacher-toolkit",
      },
      {
        label: "Feedback Center",
        href: "/feedback",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-cyan-300 transition hover:text-cyan-200"
            >
              CyberShield Academy
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              A student-built cybersecurity literacy platform teaching online
              safety, scam awareness, password security, digital citizenship,
              and ethical defensive cybersecurity.
            </p>

            <p className="mt-5 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm leading-6 text-yellow-100">
              Safety reminder: Do not enter real passwords or private personal
              information into CyberShield Academy activities.
            </p>
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
                      className="text-sm text-slate-300 transition hover:text-cyan-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm leading-6 text-slate-400">
          <p>
            © 2026 CyberShield Academy. Built as a student-led cybersecurity
            literacy initiative.
          </p>
        </div>
      </div>
    </footer>
  );
}