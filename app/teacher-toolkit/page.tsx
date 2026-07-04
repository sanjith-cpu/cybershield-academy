import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessonPlans = [
  {
    title: "Lesson 1: Scam Red Flags",
    grade: "Elementary / Middle School",
    time: "20–30 minutes",
    goal:
      "Students learn how to recognize suspicious messages that use prizes, fear, urgency, secrecy, or strange links.",
    steps: [
      "Start with a short discussion about messages students see online.",
      "Show safe fake examples of suspicious and normal messages.",
      "Have students identify red flags in each example.",
      "Use the Spot the Scam activity for practice.",
      "End with one safety rule students can remember.",
    ],
  },
  {
    title: "Lesson 2: Password Safety",
    grade: "Middle / High School",
    time: "25–35 minutes",
    goal:
      "Students learn why strong, unique passwords and multi-factor authentication help protect accounts.",
    steps: [
      "Ask students what makes a password easy or hard to guess.",
      "Explain length, uniqueness, and avoiding personal details.",
      "Use the Password Safety Lab with fake examples only.",
      "Discuss password myths vs facts.",
      "End with a checklist students can use for future accounts.",
    ],
  },
  {
    title: "Lesson 3: Digital Footprint",
    grade: "Middle / High School",
    time: "25–40 minutes",
    goal:
      "Students understand how posts, usernames, photos, comments, and profiles can shape their digital footprint.",
    steps: [
      "Ask students what information a stranger might learn from a public profile.",
      "Discuss privacy settings and oversharing.",
      "Give students reflection questions about online choices.",
      "Connect the topic to school, college, jobs, and personal safety.",
      "End with one habit students can improve this week.",
    ],
  },
  {
    title: "Lesson 4: Defensive Cybersecurity Ethics",
    grade: "High School",
    time: "30–45 minutes",
    goal:
      "Students learn the difference between ethical defensive learning and harmful misuse of cybersecurity skills.",
    steps: [
      "Define defensive cybersecurity in student-friendly language.",
      "Discuss permission, privacy, safety, and responsibility.",
      "Review safe examples of helping others online.",
      "Use discussion prompts from the High School track.",
      "End with an ethical cybersecurity pledge or reflection.",
    ],
  },
];

const timingBreakdown = [
  {
    part: "Warm-up",
    time: "3–5 minutes",
    detail:
      "Ask a quick question to activate prior knowledge and connect the lesson to student experiences.",
  },
  {
    part: "Mini Lesson",
    time: "7–10 minutes",
    detail:
      "Teach the main idea using simple examples, classroom discussion, and safe language.",
  },
  {
    part: "Activity",
    time: "10–20 minutes",
    detail:
      "Use a CyberShield activity, worksheet, or scenario discussion to let students practice.",
  },
  {
    part: "Reflection",
    time: "5 minutes",
    detail:
      "Students answer an exit ticket or share one safety habit they will remember.",
  },
];

const warmUpQuestions = [
  "What is one online message that would make you pause before clicking?",
  "Why do you think scammers try to make people feel rushed?",
  "What information should students avoid sharing publicly online?",
  "Why is it important to ask permission before posting someone else’s photo?",
  "What should someone do if they accidentally click a suspicious link?",
];

const exitTickets = [
  "Name one scam red flag you learned today.",
  "Write one rule for creating a safer password.",
  "What is one thing you should keep private online?",
  "What should you do if a suspicious message asks for your password?",
  "Explain the difference between defensive cybersecurity and harmful misuse.",
];

const worksheetIdeas = [
  {
    title: "Scam Red Flags Worksheet",
    detail:
      "Students read fake message examples and circle warning signs like urgency, fear, prizes, secrecy, or suspicious links.",
  },
  {
    title: "Password Strength Checklist",
    detail:
      "Students compare fake passwords and explain which ones are stronger and why.",
  },
  {
    title: "Digital Footprint Reflection",
    detail:
      "Students answer reflection questions about posts, usernames, comments, photos, and privacy settings.",
  },
  {
    title: "Safe or Unsafe?",
    detail:
      "Students sort online situations into safer choices and risky choices, then explain their reasoning.",
  },
  {
    title: "Cyber Vocabulary Match",
    detail:
      "Students match words like phishing, privacy settings, password, and digital footprint with beginner-friendly definitions.",
  },
];

const safetyNotes = [
  "Use fake examples only. Do not ask students to type, share, or test real passwords.",
  "Do not ask students to share personal stories that may reveal private information.",
  "Keep lessons focused on safety, privacy, ethics, and defensive habits.",
  "If a student reports a real online safety issue, follow school policy and involve the appropriate trusted adult or staff member.",
  "Do not teach students how to break into accounts, bypass rules, or access systems without permission.",
];

const toolkitLinks = [
  {
    label: "Resources",
    href: "/resources",
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
    label: "High School Track",
    href: "/high-school",
  },
  {
    label: "Outreach",
    href: "/outreach",
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
            Classroom-ready cybersecurity lesson support.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This toolkit helps teachers, counselors, club sponsors, and outreach
            volunteers use CyberShield Academy in a safe, ethical, and
            student-friendly way.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Mini Lesson Plans
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These lessons are designed to be short, flexible, and easy to use
              during advisory, computer science classes, digital citizenship
              lessons, club meetings, or outreach sessions.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {lessonPlans.map((lesson) => (
                <div
                  key={lesson.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {lesson.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {lesson.grade}
                    </span>
                    <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">
                      {lesson.time}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-white">Goal:</span>{" "}
                    {lesson.goal}
                  </p>

                  <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                    {lesson.steps.map((step, index) => (
                      <li
                        key={step}
                        className="rounded-xl bg-slate-900 p-4"
                      >
                        <span className="font-semibold text-cyan-200">
                          Step {index + 1}:
                        </span>{" "}
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Classroom Timing Breakdown
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Teachers can adjust these times depending on the age group,
              class period length, and student discussion needs.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {timingBreakdown.map((item) => (
                <div
                  key={item.part}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.part}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-200">
                    {item.time}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
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
                Warm-Up Questions
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use these at the beginning of a lesson to start discussion
                without asking students to share private information.
              </p>

              <div className="mt-6 grid gap-3">
                {warmUpQuestions.map((question) => (
                  <div
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Exit Ticket Questions
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use these at the end of a lesson to check understanding and
                help students remember one practical safety habit.
              </p>

              <div className="mt-6 grid gap-3">
                {exitTickets.map((question) => (
                  <div
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Worksheet Placeholders
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These are worksheet ideas for future classroom handouts. They are
              placeholders for now and can be turned into printable worksheets
              later if needed.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {worksheetIdeas.map((worksheet) => (
                <div
                  key={worksheet.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {worksheet.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {worksheet.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Teacher Safety Notes
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              CyberShield Academy should always be used for education,
              prevention, digital citizenship, and defensive cybersecurity.
            </p>

            <div className="mt-6 grid gap-3">
              {safetyNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Helpful CyberShield Pages
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Teachers can use these pages to support lessons, activities,
              outreach sessions, and student practice.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {toolkitLinks.map((link) => (
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