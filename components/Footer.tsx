import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
      {
        label: "Cyber Safety Starter",
        href: "/cyber-safety-starter",
      },
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
    ],
  },
  {
    title: "Practice",
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
    title: "Explore",
    links: [
      {
        label: "Resources",
        href: "/resources",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Certification Guide",
        href: "/certification-guide",
      },
      {
        label: "Certificates",
        href: "/certificates",
      },
      {
        label: "Safety & Privacy",
        href: "/safety",
      },
      {
        label: "About",
        href: "/about",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="text-2xl font-bold text-cyan-300">
              CyberShield Academy
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              A student-built cybersecurity learning platform for online safety,
              scam awareness, password security, privacy, responsible technology
              use, and ethical defensive cybersecurity.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm leading-6 text-yellow-100">
              Learn safely. Use fictional examples, protect private information,
              and keep cybersecurity practice ethical and defensive.
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          © 2026 CyberShield Academy. Built for cybersecurity education and safer
          online habits.
        </div>
      </div>
    </footer>
  );
}