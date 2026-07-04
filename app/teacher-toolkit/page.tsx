import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const toolkitSections = [
  {
    title: "Lesson Starter",
    description:
      "Use a short real-world example to introduce cybersecurity topics like scams, passwords, privacy, or safe browsing.",
    items: [
      "Start with a simple question students can answer.",
      "Use fake examples only.",
      "Connect the topic to everyday online choices.",
      "Keep the opening under 5 minutes.",
    ],
  },
  {
    title: "Discussion Guide",
    description:
      "Help students talk through online safety decisions using clear, age-appropriate prompts.",
    items: [
      "Ask students what red flags they notice.",
      "Let students explain their reasoning.",
      "Avoid using real private messages or real passwords.",
      "End with one safe action students can take.",
    ],
  },
  {
    title: "Activity Support",
    description:
      "Pair lessons with CyberShield activities so students can practice what they learned.",
    items: [
      "Use Spot the Scam after a phishing lesson.",
      "Use Password Lab after a password safety lesson.",
      "Use Safe Browsing after a link safety lesson.",
      "Use Cyber Ethics after discussing responsibility.",
    ],
  },
  {
    title: "Reflection and Exit Ticket",
    description:
      "Use quick reflection prompts to check what students learned and what questions they still have.",
    items: [
      "One thing I learned today was...",
      "One red flag I will watch for is...",
      "One safety habit I will use is...",
      "One question I still have is...",
    ],
  },
];

const classroomActivities = [
  {
    title: "Scam Message Review",
    time: "10–15 minutes",
    description:
      "Students review a fake message and identify urgency, suspicious links, unknown senders, or requests for private information.",
    link: "/spot-the-scam",
    label: "Open Spot the Scam",
  },
  {
    title: "Password Safety Practice",
    time: "10–15 minutes",
    description:
      "Students use fake practice passwords to learn why length, uniqueness, and multi-factor authentication matter.",
    link: "/password-lab",
    label: "Open Password Lab",
  },
  {
    title: "Safe Browsing Check",
    time: "10–15 minutes",
    description:
      "Students practice checking links, download buttons, pop-ups, and urgent account warnings.",
    link: "/safe-browsing",
    label: "Open Safe Browsing",
  },
  {
    title: "Cyber Ethics Discussion",
    time: "15–20 minutes",
    description:
      "Students think through permission, privacy, reporting, respect, and responsible technology choices.",
    link: "/cyber-ethics",
    label: "Open Cyber Ethics",
  },
];

const safetyGuidelines = [
  "Use fake examples instead of real student messages, accounts, or passwords.",
  "Do not ask students to share private personal information.",
  "Do not ask students to test real suspicious links.",
  "Do not have students access accounts, devices, networks, or files without permission.",
  "Encourage students to report suspicious activity to trusted adults or school technology staff.",
  "Keep all activities defensive, ethical, and focused on safer online habits.",
];

const worksheetIdeas = [
  "Scam Red Flags Checklist",
  "Password Safety Worksheet",
  "Digital Footprint Reflection",
  "Cyber Ethics Scenario Sheet",
  "Safe Browsing Checklist",
  "Cybersecurity Exit Ticket",
];

const quickLinks = [
  {
    label: "Worksheets",
    href: "/worksheets",
  },
  {
    label: "Presentation Outlines",
    href: "/presentation-outlines",
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
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Safety & Privacy",
    href: "/safety",
  },
];

export default function TeacherToolkitPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Teacher Toolkit
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Tools for teaching cybersecurity safely.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This toolkit helps teachers, club leaders, and outreach volunteers
            use CyberShield Academy in classrooms, workshops, and short
            presentations. The focus is safe, ethical, defensive cybersecurity
            learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/worksheets"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Worksheets
            </Link>

            <Link
              href="/presentation-outlines"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Presentation Outlines
            </Link>

            <Link
              href="/activities"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Activities
            </Link>

            <Link
              href="/resources"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Review Resources
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: CyberShield Academy should only be used for
            educational, ethical, and defensive learning. Do not use real
            passwords, private student information, or real suspicious links in
            classroom activities.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {toolkitSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-2xl font-bold text-cyan-200">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {section.description}
                </p>

                <div className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Classroom Activity Options
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These activities can be used as warm-ups, practice sections,
              station rotations, or short outreach activities.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {classroomActivities.map((activity) => (
                <div
                  key={activity.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {activity.time}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activity.description}
                  </p>

                  <Link
                    href={activity.link}
                    className="mt-5 inline-block rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {activity.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Printable Worksheet Pack
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                The Worksheets page includes printable-style prompts and
                checklists that teachers and outreach leaders can use during
                lessons.
              </p>

              <div className="mt-6 grid gap-3">
                {worksheetIdeas.map((worksheet) => (
                  <div
                    key={worksheet}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {worksheet}
                  </div>
                ))}
              </div>

              <Link
                href="/worksheets"
                className="mt-6 inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Worksheets
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Outreach Presentation Planning
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                The Presentation Outlines page includes ready-to-use plans for
                elementary, middle school, and high school cybersecurity
                outreach sessions.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                  Elementary school outline: 20–25 minutes
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                  Middle school outline: 30–35 minutes
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                  High school outline: 40–45 minutes
                </div>
              </div>

              <Link
                href="/presentation-outlines"
                className="mt-6 inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Presentation Outlines
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Classroom Safety Guidelines
            </h2>

            <p className="mt-3 leading-7 text-yellow-50/90">
              These reminders help keep cybersecurity lessons safe, respectful,
              and appropriate for students.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {safetyGuidelines.map((guideline) => (
                <div
                  key={guideline}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {guideline}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Teaching
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages together to plan lessons, print prompts, run
              activities, and support safe cybersecurity outreach.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {quickLinks.map((link) => (
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