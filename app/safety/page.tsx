import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const safetyPrinciples = [
  {
    title: "Educational Purpose Only",
    detail:
      "CyberShield Academy is designed to teach online safety, scam awareness, privacy, password habits, digital citizenship, and ethical defensive cybersecurity.",
  },
  {
    title: "No Real Passwords",
    detail:
      "Students should never type real school, email, gaming, banking, or social media passwords into CyberShield Academy activities.",
  },
  {
    title: "No Private Information",
    detail:
      "Students should not share private details such as full names, addresses, phone numbers, school IDs, account details, or personal schedules.",
  },
  {
    title: "Defensive Cybersecurity Only",
    detail:
      "CyberShield Academy teaches students to protect accounts, recognize risks, respect privacy, and ask trusted adults for help.",
  },
];

const safeLearningRules = [
  "Use fake examples during cybersecurity activities.",
  "Do not enter real passwords into the Password Safety Lab.",
  "Do not share private personal information in feedback or class discussions.",
  "Do not try to access anyone else’s account, device, or network.",
  "Ask a trusted adult, teacher, or school technology staff member when something online feels suspicious.",
  "Use cybersecurity knowledge to protect people, not to harm or embarrass others.",
];

const feedbackPrivacyNotes = [
  {
    title: "Feedback is currently a demo",
    detail:
      "The Feedback Center previews what safe feedback could look like, but it does not save real responses yet.",
  },
  {
    title: "General feedback only",
    detail:
      "Feedback should focus on lesson clarity, usefulness, age-level fit, and improvement ideas.",
  },
  {
    title: "No sensitive details",
    detail:
      "Students should not include names, contact information, passwords, private account details, or personal safety situations.",
  },
  {
    title: "Real concerns need trusted adults",
    detail:
      "If a student has a real online safety problem, they should talk to a parent, teacher, counselor, or school staff member.",
  },
];

const classroomSafety = [
  "Teachers should use fake scam messages and fake password examples only.",
  "Teachers should not ask students to reveal personal experiences that include private information.",
  "Outreach volunteers should follow school rules and teacher guidance during presentations.",
  "Real safety concerns should be handled by the appropriate adult or school staff member.",
  "Cybersecurity lessons should stay age-appropriate, ethical, and defensive.",
];

const relatedLinks = [
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Feedback Center",
    href: "/feedback",
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
    label: "Roadmap",
    href: "/roadmap",
  },
];

export default function SafetyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Safety & Privacy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Safe, ethical, and privacy-aware cybersecurity learning.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy is an educational platform. It teaches students
            how to make safer online choices, recognize scams, protect accounts,
            respect privacy, and learn cybersecurity responsibly.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Important: Do not enter real passwords, private account details,
            addresses, phone numbers, school IDs, or other sensitive information
            anywhere on this site.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {safetyPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-xl font-bold text-cyan-200">
                  {principle.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {principle.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Safe Cyber Learning Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These rules help keep CyberShield Academy safe for students,
              teachers, parents, and outreach volunteers.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {safeLearningRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Feedback Privacy
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Feedback should help improve the project without collecting
                private student information.
              </p>

              <div className="mt-6 grid gap-4">
                {feedbackPrivacyNotes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {note.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {note.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Classroom & Outreach Safety
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Teachers and outreach volunteers should keep lessons practical,
                age-appropriate, and focused on defensive cybersecurity.
              </p>

              <div className="mt-6 grid gap-3">
                {classroomSafety.map((item) => (
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
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What This Site Does Not Do
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is not a professional security service, not an
              emergency reporting system, and not a place to submit private
              information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not collect real passwords.
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not verify real cybersecurity incidents.
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not replace help from parents, teachers, counselors, or
                school technology staff.
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not teach students to break into accounts, devices, or
                networks.
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not save demo feedback responses right now.
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300">
                It does not claim fake school outreach or fake student impact.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Related Safety Pages
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These pages connect safety, privacy, feedback, outreach, and
              honest impact tracking across CyberShield Academy.
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