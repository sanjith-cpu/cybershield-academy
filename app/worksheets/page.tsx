import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const worksheetPacks = [
  {
    title: "Scam Red Flags Checklist",
    audience: "Grades 5–12",
    description:
      "A printable checklist students can use to identify urgency, fake rewards, password requests, suspicious links, and unknown senders.",
    items: [
      "Does the message create urgency or fear?",
      "Does it ask for a password, code, or private information?",
      "Does the link or sender look strange?",
      "Does it offer a prize that seems too good to be true?",
      "Would I feel comfortable asking a trusted adult before clicking?",
    ],
    relatedLink: "/spot-the-scam",
    relatedLabel: "Practice Spot the Scam",
  },
  {
    title: "Password Safety Worksheet",
    audience: "Grades 4–12",
    description:
      "A safe worksheet for learning password habits using fake examples only. Students should never write real passwords.",
    items: [
      "Use long passphrases instead of short passwords.",
      "Do not reuse the same password everywhere.",
      "Never share passwords with friends.",
      "Use multi-factor authentication when available.",
      "Use a trusted password manager with parent or guardian guidance.",
    ],
    relatedLink: "/password-lab",
    relatedLabel: "Open Password Lab",
  },
  {
    title: "Digital Footprint Reflection",
    audience: "Grades 6–12",
    description:
      "A reflection activity that helps students think about posts, usernames, photos, comments, privacy settings, and future opportunities.",
    items: [
      "What could someone learn about me from my public profiles?",
      "Are my usernames appropriate and safe?",
      "Would I be comfortable if a teacher, coach, or future college saw this?",
      "What private details should I avoid sharing online?",
      "What is one privacy setting I should review?",
    ],
    relatedLink: "/digital-footprint",
    relatedLabel: "Open Digital Footprint",
  },
  {
    title: "Cyber Ethics Scenario Sheet",
    audience: "Grades 6–12",
    description:
      "A worksheet for discussing permission, privacy, reporting, responsibility, and defensive cybersecurity choices.",
    items: [
      "Do I have permission?",
      "Could this action harm someone?",
      "Am I respecting privacy?",
      "Should I report this to a trusted adult or technology staff member?",
      "Is this helping protect people instead of causing problems?",
    ],
    relatedLink: "/cyber-ethics",
    relatedLabel: "Practice Cyber Ethics",
  },
  {
    title: "Safe Browsing Checklist",
    audience: "Grades 4–12",
    description:
      "A quick checklist students can use before clicking links, downloading files, or responding to pop-ups.",
    items: [
      "Check the website address carefully.",
      "Avoid clicking random pop-ups.",
      "Do not download files from unknown sources.",
      "Be careful with urgent account warnings.",
      "Ask a trusted adult if something feels suspicious.",
    ],
    relatedLink: "/safe-browsing",
    relatedLabel: "Open Safe Browsing",
  },
  {
    title: "Cybersecurity Exit Ticket",
    audience: "All student groups",
    description:
      "A short reflection teachers or outreach leaders can use at the end of a lesson or presentation.",
    items: [
      "One thing I learned today was...",
      "One online safety habit I will use is...",
      "One red flag I will watch for is...",
      "One question I still have is...",
      "One person I can help teach is...",
    ],
    relatedLink: "/activities",
    relatedLabel: "View Activities",
  },
];

const classroomTips = [
  "Print one worksheet per student or project it on a screen.",
  "Use fake examples only. Students should not write real passwords or private information.",
  "Let students discuss answers in pairs before sharing with the class.",
  "Use worksheets before or after an interactive activity.",
  "Collect exit tickets to understand what students learned.",
  "Remind students to ask trusted adults before clicking suspicious links.",
];

const lessonFlow = [
  {
    step: "1",
    title: "Start with a short lesson",
    detail:
      "Introduce the topic using simple examples, such as scam red flags, password habits, or privacy settings.",
  },
  {
    step: "2",
    title: "Complete the worksheet",
    detail:
      "Students answer reflection questions, checklists, or scenario prompts using safe examples only.",
  },
  {
    step: "3",
    title: "Discuss as a group",
    detail:
      "Ask students to explain their thinking and connect the worksheet to real online safety habits.",
  },
  {
    step: "4",
    title: "Practice with an activity",
    detail:
      "Use a CyberShield interactive activity to reinforce the same skill.",
  },
];

const relatedLinks = [
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Activities",
    href: "/activities",
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

export default function WorksheetsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Printable Worksheets
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Classroom-ready cybersecurity worksheets.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These worksheet ideas support classroom lessons, club meetings, and
            outreach sessions. They are designed for safe, ethical, defensive
            cybersecurity learning.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Students should never write real passwords, private
            account details, personal contact information, or real suspicious
            links on worksheets.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {worksheetPacks.map((pack) => (
              <div
                key={pack.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {pack.audience}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  {pack.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {pack.description}
                </p>

                <div className="mt-5 space-y-3">
                  {pack.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href={pack.relatedLink}
                  className="mt-5 inline-block rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {pack.relatedLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Suggested Lesson Flow
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These worksheets can fit into short classroom lessons or outreach
              presentations.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {lessonFlow.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {step.step}
                  </div>

                  <h3 className="mt-4 font-semibold text-white">
                    {step.title}
                  </h3>

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
                Classroom Tips
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These tips help teachers, club leaders, and outreach volunteers
                use worksheets safely and effectively.
              </p>

              <div className="mt-6 grid gap-3">
                {classroomTips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Print-Friendly Use
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Students can copy questions into notebooks, teachers can print
                sections from this page, and outreach leaders can use these
                prompts during short cybersecurity sessions.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-6 text-yellow-50/90">
                <p className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4">
                  For younger students, choose one short checklist and discuss
                  it out loud.
                </p>

                <p className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4">
                  For middle school students, combine a checklist with a simple
                  scenario.
                </p>

                <p className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4">
                  For high school students, add reflection questions about
                  privacy, ethics, reporting, and future consequences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Teaching
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Worksheets work best when connected to lessons, interactive
              activities, resources, and outreach planning.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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