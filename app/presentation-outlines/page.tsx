import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const presentationOutlines = [
  {
    audience: "Elementary School",
    length: "20–25 minutes",
    goal:
      "Help younger students understand simple online safety habits using clear examples, short explanations, and safe discussion.",
    focusTopics: [
      "Ask a trusted adult before clicking something confusing",
      "Do not share private information online",
      "Be careful with fake prizes and strange messages",
      "Use kind and respectful behavior online",
    ],
    timeBreakdown: [
      {
        time: "2 minutes",
        part: "Friendly introduction",
        detail:
          "Introduce CyberShield Academy and explain that cybersecurity means helping people stay safer online.",
      },
      {
        time: "5 minutes",
        part: "Online safety basics",
        detail:
          "Explain private information, trusted adults, strange links, and why students should pause before clicking.",
      },
      {
        time: "6 minutes",
        part: "Scam red flags mini-activity",
        detail:
          "Show a fake example message and ask students what seems suspicious.",
      },
      {
        time: "5 minutes",
        part: "Safe choices discussion",
        detail:
          "Ask students what they should do if they see a strange pop-up, fake prize, or unknown message.",
      },
      {
        time: "3–5 minutes",
        part: "Exit question",
        detail:
          "Students share one online safety habit they will remember.",
      },
    ],
    activities: [
      "Use a fake scam message from Spot the Scam.",
      "Use the Safe Browsing Checklist from Worksheets.",
      "Ask students to name one trusted adult they can ask for help.",
    ],
    teacherNotes: [
      "Keep examples simple and non-scary.",
      "Avoid technical vocabulary unless it is explained clearly.",
      "Do not ask students to share personal stories or private information.",
      "Use short questions and let students answer out loud.",
    ],
  },
  {
    audience: "Middle School",
    length: "30–35 minutes",
    goal:
      "Teach students how scams, passwords, privacy, safe browsing, and digital footprints connect to their everyday online choices.",
    focusTopics: [
      "Phishing and scam red flags",
      "Password safety and multi-factor authentication",
      "Digital footprint and online reputation",
      "Reporting suspicious messages safely",
    ],
    timeBreakdown: [
      {
        time: "3 minutes",
        part: "Introduction",
        detail:
          "Explain the goal: learning how to recognize risks and make safer choices online.",
      },
      {
        time: "7 minutes",
        part: "Scam awareness lesson",
        detail:
          "Cover urgency, fake rewards, suspicious links, unknown senders, and requests for private information.",
      },
      {
        time: "7 minutes",
        part: "Password safety lesson",
        detail:
          "Explain long passphrases, unique passwords, not sharing passwords, and using MFA when available.",
      },
      {
        time: "7 minutes",
        part: "Digital footprint discussion",
        detail:
          "Discuss how posts, usernames, comments, photos, and privacy settings can affect reputation.",
      },
      {
        time: "6–10 minutes",
        part: "Activity and reflection",
        detail:
          "Students complete a short worksheet prompt or interactive activity and share one takeaway.",
      },
    ],
    activities: [
      "Use Spot the Scam as a class activity.",
      "Use Password Lab with fake examples only.",
      "Use Digital Footprint Reflection for a written prompt.",
      "Use Cybersecurity Exit Ticket from Worksheets.",
    ],
    teacherNotes: [
      "Middle school students may know the vocabulary but still need examples.",
      "Keep the tone practical instead of scary.",
      "Remind students not to test suspicious links.",
      "Encourage reporting instead of investigating problems themselves.",
    ],
  },
  {
    audience: "High School",
    length: "40–45 minutes",
    goal:
      "Connect cybersecurity literacy to real-world responsibility, privacy, careers, certifications, ethics, and school/community impact.",
    focusTopics: [
      "Defensive cybersecurity and ethics",
      "Scam recognition and social engineering",
      "Account security and privacy habits",
      "Cybersecurity careers and learning pathways",
      "Responsible reporting and digital citizenship",
    ],
    timeBreakdown: [
      {
        time: "5 minutes",
        part: "Opening and purpose",
        detail:
          "Explain why cybersecurity literacy matters for students, families, schools, and future careers.",
      },
      {
        time: "8 minutes",
        part: "Real-world cyber safety habits",
        detail:
          "Review scams, passwords, MFA, safe browsing, digital footprints, and privacy settings.",
      },
      {
        time: "8 minutes",
        part: "Cyber ethics discussion",
        detail:
          "Discuss permission, privacy, reporting, and the difference between learning cybersecurity and misusing skills.",
      },
      {
        time: "8 minutes",
        part: "Career and certification overview",
        detail:
          "Introduce beginner-friendly roles and explain that certifications are optional future learning goals.",
      },
      {
        time: "8 minutes",
        part: "Scenario activity",
        detail:
          "Use a fake scenario and ask students to choose the safest, most responsible response.",
      },
      {
        time: "3–8 minutes",
        part: "Reflection and questions",
        detail:
          "Students answer an exit question or ask questions about cybersecurity learning and outreach.",
      },
    ],
    activities: [
      "Use Cyber Ethics Scenarios.",
      "Use the Certification Guide as a future learning reference.",
      "Use Careers page examples for discussion.",
      "Use Digital Footprint Reflection for a personal planning activity.",
    ],
    teacherNotes: [
      "High school students can handle deeper discussion, but keep everything defensive and ethical.",
      "Do not include real hacking demonstrations.",
      "Use school-appropriate examples only.",
      "Make clear that permission matters in all cybersecurity learning.",
    ],
  },
];

const presenterChecklist = [
  "Practice the presentation before visiting a classroom.",
  "Use fake examples only.",
  "Keep explanations age-appropriate.",
  "Prepare one activity and one backup activity.",
  "Bring worksheet prompts or have the website ready.",
  "Avoid collecting private student information.",
  "End with clear safety takeaways.",
];

const outreachMaterials = [
  {
    title: "Worksheets",
    detail:
      "Printable-style prompts for scam red flags, password safety, digital footprint, cyber ethics, safe browsing, and exit tickets.",
    href: "/worksheets",
  },
  {
    title: "Teacher Toolkit",
    detail:
      "Classroom safety guidelines, activity options, lesson starters, and discussion support.",
    href: "/teacher-toolkit",
  },
  {
    title: "Activities",
    detail:
      "Interactive practice pages for quizzes, scams, passwords, safe browsing, digital footprint, and ethics.",
    href: "/activities",
  },
  {
    title: "Outreach",
    detail:
      "The main school outreach page with goals, structure, volunteer roles, and school use ideas.",
    href: "/outreach",
  },
];

const safetyRules = [
  "Do not use real student accounts, passwords, messages, or private information.",
  "Do not ask students to click suspicious links.",
  "Do not demonstrate breaking into systems or accounts.",
  "Do not collect student contact information.",
  "Keep all examples fake, educational, defensive, and school-appropriate.",
  "Encourage students to report suspicious activity to trusted adults or school technology staff.",
];

export default function PresentationOutlinesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Outreach Presentation Outlines
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Ready-to-use cybersecurity presentation plans.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These outlines help CyberShield Academy prepare school outreach
            sessions for elementary, middle school, and high school audiences.
            Each outline includes timing, activity suggestions, and teacher
            notes.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Outreach presentations should stay educational,
            ethical, defensive, and age-appropriate. Use fake examples only.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6">
            {presentationOutlines.map((outline) => (
              <div
                key={outline.audience}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-3xl font-bold text-white">
                    {outline.audience}
                  </h2>

                  <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                    {outline.length}
                  </span>
                </div>

                <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                  {outline.goal}
                </p>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                    <h3 className="text-xl font-bold text-cyan-200">
                      Focus Topics
                    </h3>

                    <div className="mt-4 grid gap-3">
                      {outline.focusTopics.map((topic) => (
                        <div
                          key={topic}
                          className="rounded-xl bg-slate-900 p-3 text-sm leading-6 text-slate-300"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 lg:col-span-2">
                    <h3 className="text-xl font-bold text-cyan-200">
                      Time Breakdown
                    </h3>

                    <div className="mt-4 grid gap-3">
                      {outline.timeBreakdown.map((item) => (
                        <div
                          key={`${outline.audience}-${item.time}-${item.part}`}
                          className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                        >
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                              {item.time}
                            </span>

                            <h4 className="font-semibold text-white">
                              {item.part}
                            </h4>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                    <h3 className="text-xl font-bold text-cyan-200">
                      Activity Suggestions
                    </h3>

                    <div className="mt-4 grid gap-3">
                      {outline.activities.map((activity) => (
                        <div
                          key={activity}
                          className="rounded-xl bg-slate-900 p-3 text-sm leading-6 text-slate-300"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5">
                    <h3 className="text-xl font-bold text-yellow-100">
                      Teacher Notes
                    </h3>

                    <div className="mt-4 grid gap-3">
                      {outline.teacherNotes.map((note) => (
                        <div
                          key={note}
                          className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-3 text-sm leading-6 text-yellow-50/90"
                        >
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-3xl font-bold text-cyan-200">
                Presenter Checklist
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use this checklist before presenting CyberShield Academy to a
                class, club, or school group.
              </p>

              <div className="mt-6 grid gap-3">
                {presenterChecklist.map((item) => (
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
                Presentation Safety Rules
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                These rules help keep outreach sessions safe and responsible for
                all students.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Outreach Materials
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These pages can support presentation planning, classroom
              activities, printable prompts, and safe school outreach.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {outreachMaterials.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-cyan-300">
                    Open →
                  </p>
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