import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const activities = [
  {
    title: "Scenario Room",
    type: "Scenario Practice",
    description:
      "Practice choosing the safest response in fake cybersecurity situations about scams, privacy, passwords, safe browsing, digital footprint, and ethics.",
    skills: ["Decision Making", "Safety", "Reporting", "Ethics"],
    href: "/scenario-room",
  },
  {
    title: "Practice Lab",
    type: "Skill Stations",
    description:
      "Move through six safe cybersecurity practice stations connected to passwords, scams, privacy, browsing, footprint, and ethics.",
    skills: ["Practice", "Lessons", "Reflection", "Safe Habits"],
    href: "/practice-lab",
  },
  {
    title: "Cyber Safety Quiz",
    type: "Quiz",
    description:
      "Answer questions about passwords, scams, privacy, digital citizenship, safe browsing, ethics, and defensive cybersecurity.",
    skills: ["Passwords", "Scams", "Privacy", "Digital Citizenship"],
    href: "/quiz",
  },
  {
    title: "Spot the Scam",
    type: "Scenario Activity",
    description:
      "Practice identifying suspicious messages that use fake prizes, urgency, fear, secrecy, password requests, and suspicious links.",
    skills: ["Scam Awareness", "Red Flags", "Safe Reporting"],
    href: "/spot-the-scam",
  },
  {
    title: "Password Safety Lab",
    type: "Interactive Lab",
    description:
      "Use fake practice passwords to learn about length, uniqueness, character variety, myths, and safer account habits.",
    skills: ["Password Strength", "MFA", "Account Safety"],
    href: "/password-lab",
  },
  {
    title: "Safe Browsing Challenge",
    type: "Challenge",
    description:
      "Practice checking website addresses, fake pop-ups, suspicious download buttons, and urgent account warnings.",
    skills: ["Safe Browsing", "Suspicious Links", "Fake Downloads"],
    href: "/safe-browsing",
  },
  {
    title: "Digital Footprint Reflection",
    type: "Reflection Activity",
    description:
      "Learn how posts, photos, usernames, comments, profiles, and privacy settings can shape your online footprint.",
    skills: ["Privacy", "Reputation", "Digital Citizenship"],
    href: "/digital-footprint",
  },
  {
    title: "Cyber Ethics Scenarios",
    type: "Scenario Activity",
    description:
      "Practice responsible technology decisions about permission, privacy, reporting, respect, and defensive cybersecurity.",
    skills: ["Ethics", "Permission", "Privacy", "Responsibility"],
    href: "/cyber-ethics",
  },
];

const classroomUses = [
  "Use Scenario Room as a 10–15 minute discussion activity.",
  "Use Practice Lab as a station-based review activity.",
  "Use one activity as a classroom warm-up.",
  "Pair an activity with a short lesson from the Learning Library.",
  "Have students explain the red flags or safety habit after each activity.",
  "Use activities during school outreach sessions or cybersecurity club meetings.",
];

const safetyReminders = [
  "Use fake examples only.",
  "Do not enter real passwords.",
  "Do not click real suspicious links to test them.",
  "Do not share private personal information in reflection boxes.",
  "Do not try to access accounts, devices, networks, or private information without permission.",
  "Ask a trusted adult, teacher, or school technology staff member if something online feels suspicious.",
];

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield Activities
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practice cybersecurity skills with safe interactive activities.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These activities help students practice online safety, scam
            awareness, password security, safe browsing, privacy, digital
            citizenship, cyber ethics, and defensive cybersecurity using
            age-appropriate examples.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: These activities are for learning only. Do not use
            real passwords, private information, real suspicious links, or
            unauthorized systems.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {activity.type}
                  </span>

                  <span className="text-sm font-semibold text-cyan-300">
                    Open →
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  {activity.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {activity.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-3xl font-bold text-cyan-200">
                Classroom Use Ideas
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Teachers, club leaders, and outreach volunteers can use these
                activities as short practice sections during lessons.
              </p>

              <div className="mt-6 grid gap-3">
                {classroomUses.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Activity Safety Reminders
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                CyberShield activities should always stay safe, defensive,
                ethical, and privacy-aware.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyReminders.map((item) => (
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

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Learning
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Activities work best when students also review lessons, resources,
              and safety reminders.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/lessons"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Lessons
              </Link>

              <Link
                href="/resources"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Review Resources
              </Link>

              <Link
                href="/teacher-toolkit"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}