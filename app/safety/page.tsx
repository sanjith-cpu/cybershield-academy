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
      "CyberShield Academy teaches students to protect accounts, recognize risks, respect privacy, report concerns, and ask trusted adults for help.",
  },
];

const privacySnapshot = [
  {
    label: "Real Passwords",
    status: "Not collected",
    detail:
      "CyberShield activities should only use fake practice examples and should never ask for real account passwords.",
  },
  {
    label: "Student Accounts",
    status: "Not required",
    detail:
      "The current site does not require students to create accounts or submit personal profiles.",
  },
  {
    label: "Feedback Storage",
    status: "Demo only",
    detail:
      "The Feedback Center previews safe feedback categories, but it does not save real responses right now.",
  },
  {
    label: "Impact Data",
    status: "Honest tracking",
    detail:
      "Outreach numbers should stay at 0 until real sessions, real feedback, or real student reach happen.",
  },
];

const safeLearningRules = [
  "Use fake examples during cybersecurity activities.",
  "Do not enter real passwords into the Password Safety Lab.",
  "Do not share private personal information in feedback or class discussions.",
  "Do not try to access anyone else’s account, device, file, or network.",
  "Do not test real suspicious links or unknown downloads.",
  "Ask a trusted adult, teacher, or school technology staff member when something online feels suspicious.",
  "Use cybersecurity knowledge to protect people, not to harm, embarrass, or trick others.",
  "Keep all learning age-appropriate, ethical, defensive, and permission-based.",
];

const dataNotCollected = [
  "Real passwords",
  "Private login codes",
  "Home addresses",
  "Phone numbers",
  "Student ID numbers",
  "Private account details",
  "Personal schedules",
  "Sensitive safety reports",
  "Private messages",
  "Financial information",
  "Medical information",
  "Exact student location",
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
      "Feedback should focus on lesson clarity, usefulness, age-level fit, timing, and improvement ideas.",
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
  "Teachers should avoid asking students to open unknown links, downloads, or files.",
  "Outreach volunteers should follow school rules and teacher guidance during presentations.",
  "Real safety concerns should be handled by the appropriate adult or school staff member.",
  "Cybersecurity lessons should stay age-appropriate, ethical, and defensive.",
];

const studentHelpSteps = [
  {
    step: "1",
    title: "Stop",
    detail:
      "If something feels suspicious, stop clicking, stop replying, and do not enter private information.",
  },
  {
    step: "2",
    title: "Do not hide it",
    detail:
      "Mistakes can happen. It is safer to ask for help quickly instead of trying to fix a real issue alone.",
  },
  {
    step: "3",
    title: "Ask a trusted adult",
    detail:
      "Tell a parent, teacher, counselor, or school technology staff member if a message, link, account warning, or online interaction feels unsafe.",
  },
  {
    step: "4",
    title: "Use official help",
    detail:
      "For real school accounts or devices, follow school technology rules and ask the proper staff member for help.",
  },
];

const siteLimitations = [
  {
    title: "Not an emergency service",
    detail:
      "CyberShield Academy is not a place to report emergencies or urgent safety threats.",
  },
  {
    title: "Not professional legal advice",
    detail:
      "The site teaches general cybersecurity literacy and does not provide legal advice.",
  },
  {
    title: "Not a security incident response tool",
    detail:
      "The site does not investigate real hacks, scams, malware, or account problems.",
  },
  {
    title: "Not a replacement for school staff",
    detail:
      "Students should involve trusted adults, teachers, or school technology staff when real concerns happen.",
  },
];

const whatThisSiteDoesNotDo = [
  "It does not collect real passwords.",
  "It does not ask students to share private personal information.",
  "It does not verify real cybersecurity incidents.",
  "It does not replace help from parents, teachers, counselors, or school technology staff.",
  "It does not teach students to break into accounts, devices, or networks.",
  "It does not encourage students to test real suspicious links.",
  "It does not save demo feedback responses right now.",
  "It does not claim fake school outreach or fake student impact.",
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

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resources"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Resources
            </Link>

            <Link
              href="/teacher-toolkit"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Teacher Toolkit
            </Link>

            <Link
              href="/feedback"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Feedback Center
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Important: Do not enter real passwords, private account details,
            addresses, phone numbers, school IDs, login codes, or other
            sensitive information anywhere on this site.
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
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Privacy Status Snapshot
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-emerald-50/90">
              This snapshot explains how CyberShield Academy currently handles
              privacy, feedback, passwords, and impact tracking.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {privacySnapshot.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                >
                  <p className="text-sm font-semibold text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-emerald-100">
                    {item.status}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
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

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Information This Site Should Not Collect
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy should avoid collecting sensitive student
              information. Learning activities should use general, fake,
              classroom-safe examples.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {dataNotCollected.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-red-500/20 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
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
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              If Something Online Feels Suspicious
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Students should not try to handle real online safety concerns
              alone. A calm reporting plan helps students get help safely.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {studentHelpSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-bold text-purple-100">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
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
              Site Limitations
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is a learning project. It can teach safer
              habits, but it is not a professional response system for real
              incidents.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {siteLimitations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-200">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
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
              What This Site Does Not Do
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is not a professional security service, not an
              emergency reporting system, and not a place to submit private
              information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {whatThisSiteDoesNotDo.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
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