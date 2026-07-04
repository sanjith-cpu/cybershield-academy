import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const emailTemplates = [
  {
    title: "Initial School Outreach Email",
    useCase: "Use this when contacting a teacher, counselor, club sponsor, or administrator for the first time.",
    subject: "Student-Led Cybersecurity Literacy Presentation Opportunity",
    lines: [
      "Hello [Teacher/Administrator Name],",
      "My name is [Your Name], and I am a high school student working on CyberShield Academy, a student-built cybersecurity literacy project designed to teach safe online habits to students.",
      "The project covers topics like scam awareness, password safety, privacy, safe browsing, digital footprints, and responsible technology use. All lessons are educational, age-appropriate, and focused on defensive cybersecurity.",
      "I wanted to ask if there might be an opportunity to present a short cybersecurity literacy session to students at [School/Program Name]. I can adjust the presentation for elementary, middle school, or high school students.",
      "The session could include a short lesson, a simple activity, and a quick reflection. I would be happy to share the website, presentation outline, and materials in advance for review.",
      "Thank you for your time and consideration.",
      "Sincerely,",
      "[Your Name]",
    ],
  },
  {
    title: "Follow-Up Email",
    useCase: "Use this if you already sent an email and have not received a response after several days.",
    subject: "Following Up: Cybersecurity Literacy Outreach",
    lines: [
      "Hello [Teacher/Administrator Name],",
      "I hope you are doing well. I wanted to follow up on my previous email about CyberShield Academy, my student-led cybersecurity literacy project.",
      "I am hoping to offer a short, safe, and age-appropriate presentation about online safety topics such as scams, passwords, privacy, digital footprints, and responsible technology use.",
      "I understand that schedules can be busy, so I would be happy to adjust the timing, audience, or format based on what works best for your school or classroom.",
      "Thank you again for your time.",
      "Sincerely,",
      "[Your Name]",
    ],
  },
  {
    title: "Teacher Collaboration Email",
    useCase: "Use this when asking a teacher to review or support your materials.",
    subject: "Request for Feedback on Cybersecurity Education Materials",
    lines: [
      "Hello [Teacher Name],",
      "I am working on CyberShield Academy, a cybersecurity literacy website for students. The goal is to make online safety topics easier to understand through lessons, activities, worksheets, and presentation outlines.",
      "Would you be willing to review some of the materials and give feedback on whether they are clear, age-appropriate, and useful for students?",
      "The project includes resources on scam awareness, password safety, privacy, safe browsing, cyber ethics, and digital footprints.",
      "Any feedback would help me improve the project before using it for school outreach.",
      "Thank you for your help.",
      "Sincerely,",
      "[Your Name]",
    ],
  },
  {
    title: "Club or Honor Society Outreach Email",
    useCase: "Use this when asking a club, honor society, or student organization to help with outreach.",
    subject: "Cybersecurity Literacy Outreach Volunteer Opportunity",
    lines: [
      "Hello [Club Sponsor/Officer Name],",
      "I am organizing a student-led cybersecurity literacy outreach project through CyberShield Academy. The project teaches students about online safety, scam awareness, password habits, privacy, digital footprints, and responsible technology use.",
      "I wanted to ask if members of [Club/Organization Name] might be interested in helping with outreach sessions, classroom presentations, or activity support.",
      "Possible volunteer roles include presenter, activity leader, timekeeper, and reflection lead. All materials are designed to be safe, ethical, and defensive.",
      "I would be happy to share the website and presentation outlines if this sounds like something the club may want to support.",
      "Thank you.",
      "Sincerely,",
      "[Your Name]",
    ],
  },
  {
    title: "Thank You Email",
    useCase: "Use this after a teacher, school, or organization allows you to present.",
    subject: "Thank You for Supporting CyberShield Academy",
    lines: [
      "Hello [Teacher/Administrator Name],",
      "Thank you for giving me the opportunity to share CyberShield Academy with your students.",
      "I appreciate your support and the chance to teach cybersecurity literacy topics like scam awareness, password safety, privacy, safe browsing, digital footprints, and responsible technology use.",
      "The session helped me improve my communication, leadership, and outreach skills while also helping students learn safer online habits.",
      "Thank you again for your time and support.",
      "Sincerely,",
      "[Your Name]",
    ],
  },
];

const outreachChecklist = [
  "Use a polite and professional subject line.",
  "Introduce yourself clearly.",
  "Explain CyberShield Academy in one or two simple sentences.",
  "Mention that the project is safe, ethical, educational, and defensive.",
  "Offer to share materials in advance.",
  "Ask for permission before presenting.",
  "Keep the email short enough that a busy teacher can read it quickly.",
  "Proofread before sending.",
];

const safetyBoundaries = [
  "Do not collect private student information.",
  "Do not ask for student account details or passwords.",
  "Do not include real suspicious links in emails.",
  "Do not promise official certifications or official school approval unless you have it.",
  "Do not pressure teachers or schools to respond.",
  "Have a trusted adult, teacher, or mentor review important outreach emails when possible.",
];

const planningLinks = [
  {
    title: "Presentation Outlines",
    detail:
      "Use ready-to-follow outreach plans for elementary, middle school, and high school sessions.",
    href: "/presentation-outlines",
  },
  {
    title: "Worksheets",
    detail:
      "Use printable-style prompts, checklists, and exit tickets for classroom activities.",
    href: "/worksheets",
  },
  {
    title: "Teacher Toolkit",
    detail:
      "Use teacher guidance, classroom safety rules, and lesson support materials.",
    href: "/teacher-toolkit",
  },
  {
    title: "Outreach",
    detail:
      "Review outreach goals, planning steps, volunteer roles, and safety rules.",
    href: "/outreach",
  },
];

export default function EmailTemplatesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Outreach Email Templates
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Professional emails for school outreach.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These templates help students contact teachers, counselors,
            administrators, clubs, and school partners about CyberShield Academy
            outreach. Each template can be edited based on the school, audience,
            and purpose.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Outreach emails should be respectful,
            school-appropriate, and honest. Do not collect private student
            information or promise anything that has not been approved.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6">
            {emailTemplates.map((template) => (
              <div
                key={template.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-white">
                    {template.title}
                  </h2>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Email Template
                  </span>
                </div>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
                  {template.useCase}
                </p>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm font-semibold text-cyan-200">
                    Subject:
                  </p>

                  <p className="mt-2 rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                    {template.subject}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-200">
                    Body:
                  </p>

                  <div className="mt-2 space-y-4 rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                    {template.lines.map((line) => (
                      <p key={`${template.title}-${line}`}>{line}</p>
                    ))}
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
                Outreach Email Checklist
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use this checklist before sending a school outreach email.
              </p>

              <div className="mt-6 grid gap-3">
                {outreachChecklist.map((item) => (
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
                Safety and Professional Boundaries
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                These reminders help keep outreach communication safe,
                respectful, and appropriate.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyBoundaries.map((item) => (
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
              Plan the Outreach Session
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              After contacting a school or teacher, use these pages to prepare
              the actual session.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {planningLinks.map((item) => (
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