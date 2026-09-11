import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const activities = [
  {
    title: "Scenario Room",
    type: "Scenario Practice",
    description:
      "Choose the safest response in fictional cybersecurity situations about scams, privacy, passwords, safe browsing, digital footprint, and ethics.",
    skills: ["Decision Making", "Reporting", "Ethics", "Safe Choices"],
    href: "/scenario-room",
  },
  {
    title: "Practice Lab",
    type: "Skill Stations",
    description:
      "Move through safe practice stations connected to CyberShield’s main lessons and online safety habits.",
    skills: ["Practice", "Reflection", "Lesson Review", "Safe Habits"],
    href: "/practice-lab",
  },
  {
    title: "Cyber Safety Quiz",
    type: "Knowledge Check",
    description:
      "Review passwords, scams, privacy, digital citizenship, safe browsing, ethics, and defensive cybersecurity.",
    skills: ["Recall", "Review", "Online Safety", "Cyber Basics"],
    href: "/quiz",
  },
  {
    title: "Spot the Scam",
    type: "Scam Awareness",
    description:
      "Practice identifying fake prizes, urgency, fear, secrecy, suspicious links, and unsafe requests.",
    skills: ["Scam Red Flags", "Suspicious Messages", "Safe Reporting"],
    href: "/spot-the-scam",
  },
  {
    title: "Password Safety Lab",
    type: "Interactive Lab",
    description:
      "Use fake practice passwords to learn about length, uniqueness, character variety, MFA, and safer account habits.",
    skills: ["Password Strength", "MFA", "Account Safety", "Privacy"],
    href: "/password-lab",
  },
  {
    title: "Safe Browsing Challenge",
    type: "Browsing Safety",
    description:
      "Practice checking website addresses, fake pop-ups, suspicious download buttons, and urgent account warnings.",
    skills: ["Safe Browsing", "Suspicious Links", "Fake Downloads"],
    href: "/safe-browsing",
  },
  {
    title: "Digital Footprint Reflection",
    type: "Reflection Activity",
    description:
      "Think through how posts, photos, usernames, comments, profiles, and privacy settings shape an online footprint.",
    skills: ["Privacy", "Reputation", "Reflection", "Digital Citizenship"],
    href: "/digital-footprint",
  },
  {
    title: "Cyber Ethics Scenarios",
    type: "Ethics Practice",
    description:
      "Practice responsible technology decisions about permission, privacy, reporting, respect, and defensive cybersecurity.",
    skills: ["Ethics", "Permission", "Responsibility", "Respect"],
    href: "/cyber-ethics",
  },
];

const activityPath = [
  {
    step: "1",
    title: "Pick a topic",
    detail:
      "Choose a skill to practice, such as scam awareness, passwords, privacy, safe browsing, or cyber ethics.",
  },
  {
    step: "2",
    title: "Use safe examples",
    detail:
      "Every activity uses fictional messages, fake passwords, or clearly safe practice situations.",
  },
  {
    step: "3",
    title: "Make a decision",
    detail:
      "Look for warning signs, compare the choices, and decide which response is safest.",
  },
  {
    step: "4",
    title: "Reflect",
    detail:
      "Connect the activity to safer everyday decisions without testing anything risky in the real world.",
  },
];

const lessonPairings = [
  {
    activity: "Password Safety Lab",
    lesson: "Password Safety Lesson",
    href: "/lessons/password-safety",
  },
  {
    activity: "Spot the Scam",
    lesson: "Scam Awareness Lesson",
    href: "/lessons/scam-awareness",
  },
  {
    activity: "Safe Browsing Challenge",
    lesson: "Safe Browsing Lesson",
    href: "/lessons/safe-browsing",
  },
  {
    activity: "Digital Footprint Reflection",
    lesson: "Digital Footprint Lesson",
    href: "/lessons/digital-footprint",
  },
  {
    activity: "Cyber Ethics Scenarios",
    lesson: "Cyber Ethics Lesson",
    href: "/lessons/cyber-ethics",
  },
  {
    activity: "Scenario Room",
    lesson: "Full Learning Library",
    href: "/lessons",
  },
];

const safetyReminders = [
  "Use fictional or clearly safe examples only.",
  "Do not enter real passwords.",
  "Do not click real suspicious links to test them.",
  "Do not share private personal information in activity responses.",
  "Do not try to access accounts, devices, networks, files, or private information without permission.",
  "Use activities to learn safer decisions, not to experiment on real systems or people.",
];

const quickLinks = [
  {
    label: "Learning Library",
    href: "/lessons",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
  },
  {
    label: "About CyberShield",
    href: "/about",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              CyberShield Activities
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Practice cybersecurity skills in a safe environment.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              CyberShield activities help students practice online safety, scam
              awareness, password security, safe browsing, privacy, digital
              citizenship, cyber ethics, and defensive cybersecurity using
              fictional examples.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/scenario-room"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Scenario Room
              </Link>

              <Link
                href="/practice-lab"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Open Practice Lab
              </Link>

              <Link
                href="/lessons"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Review Lessons
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
              Safety reminder: these activities are for learning only. Do not use
              real passwords, private information, real suspicious links, or
              unauthorized systems.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-slate-400">
                Practice Pages
              </p>
              <p className="mt-3 text-4xl font-bold text-cyan-200">8</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Eight focused activities for cybersecurity review, reflection,
                and safer decision-making.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-slate-400">
                Safety Standard
              </p>
              <p className="mt-3 text-4xl font-bold text-cyan-200">Fake Only</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Practice uses made-up examples instead of real accounts,
                passwords, private messages, or suspicious links.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-slate-400">
                Learning Style
              </p>
              <p className="mt-3 text-4xl font-bold text-cyan-200">Interactive</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use scenarios, quizzes, labs, reflections, and decision-making
                activities to reinforce what you learn.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Activity Library
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Each activity focuses on a different cybersecurity habit. Practice
              safely, explain your thinking, and connect each choice to safer
              online behavior.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
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

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {activity.title}
                  </h3>

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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Recommended Activity Flow
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use this simple flow whenever you work through a CyberShield
              activity.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {activityPath.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-bold text-white">{item.title}</h3>

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
              Pair Activities With Lessons
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Learn the concept first, then use the matching activity to practice
              it with safe examples.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {lessonPairings.map((pairing) => (
                <Link
                  key={`${pairing.activity}-${pairing.lesson}`}
                  href={pairing.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <span className="font-semibold text-cyan-200">
                    {pairing.activity}
                  </span>{" "}
                  → {pairing.lesson}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Activity Safety Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              CyberShield activities should always stay safe, defensive,
              ethical, privacy-aware, and permission-based.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
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
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Learning
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Review lessons, student resources, safety guidance, or information
              about CyberShield Academy after completing an activity.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label} →
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