import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionPoints = [
  {
    title: "Make cybersecurity easier to understand",
    detail:
      "CyberShield Academy explains online safety, scams, passwords, privacy, and digital citizenship in simple student-friendly language.",
  },
  {
    title: "Teach practical safety habits",
    detail:
      "The project focuses on real-life choices students face, such as suspicious messages, weak passwords, oversharing, and unsafe links.",
  },
  {
    title: "Support schools and teachers",
    detail:
      "The site includes lesson tracks, activities, resources, a teacher toolkit, and outreach outlines that can support classroom use.",
  },
  {
    title: "Promote ethical defensive cybersecurity",
    detail:
      "CyberShield Academy teaches students to use cybersecurity knowledge to protect people, respect privacy, and reduce harm.",
  },
];

const whyItMatters = [
  "Students use technology for school, games, communication, research, and social media.",
  "Scams and suspicious messages often target people who are rushed, confused, or unsure what to do.",
  "Strong passwords, privacy settings, and safe browsing habits can protect accounts and personal information.",
  "Digital citizenship helps students make respectful and responsible choices online.",
  "Cybersecurity literacy gives students confidence to pause, think, and ask for help when something feels wrong.",
];

const projectValues = [
  {
    value: "Safety",
    description:
      "Students should learn how to protect themselves and others online without being exposed to risky instructions.",
  },
  {
    value: "Clarity",
    description:
      "Cybersecurity topics should be explained in a way that younger students, older students, teachers, and parents can understand.",
  },
  {
    value: "Honesty",
    description:
      "The project should not fake outreach, impact numbers, feedback, or partnerships. Progress should be documented truthfully.",
  },
  {
    value: "Responsibility",
    description:
      "Cybersecurity skills should be connected to permission, privacy, ethics, and defensive learning.",
  },
];

const outreachConnections = [
  {
    title: "Elementary school outreach",
    detail:
      "Short lessons can teach younger students about private information, trusted adults, safe choices, and kindness online.",
  },
  {
    title: "Middle school outreach",
    detail:
      "Sessions can focus on scam red flags, password safety, privacy, digital footprint, and responsible group chat behavior.",
  },
  {
    title: "High school outreach",
    detail:
      "Older students can explore defensive cybersecurity, ethical decision-making, career pathways, certifications, and real-world safety habits.",
  },
];

const builtSections = [
  "Age-level learning tracks for Kids, Junior, and High School students",
  "Interactive Cyber Safety Quiz",
  "Spot the Scam activity",
  "Password Safety Lab using fake examples only",
  "Cybersecurity Resources page",
  "Teacher Toolkit",
  "Certificate Pathways",
  "School Outreach page",
  "Impact Tracker",
  "Feedback Center",
  "Project Roadmap",
];

const relatedLinks = [
  {
    label: "Lessons",
    href: "/lessons",
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
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Impact",
    href: "/impact",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About CyberShield Academy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            A student-built platform for cybersecurity literacy.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy is designed to help students learn online
            safety, scam awareness, password security, digital citizenship,
            privacy habits, and ethical defensive cybersecurity in a safe and
            age-appropriate way.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-5 text-sm leading-6 text-cyan-100">
            The goal is not to teach harmful hacking. The goal is to help
            students protect accounts, recognize risks, respect privacy, and
            make safer choices online.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">Mission</h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy exists to make cybersecurity literacy more
              understandable, practical, and accessible for students and
              classrooms.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {missionPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-3xl font-bold text-cyan-200">
                Why Cybersecurity Literacy Matters
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Cybersecurity is not only for experts. Students need basic
                safety habits because technology is part of everyday school and
                personal life.
              </p>

              <div className="mt-6 grid gap-3">
                {whyItMatters.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Student-Built Project
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                CyberShield Academy is being built as a student passion project
                to combine technology, cybersecurity education, community
                service, and school outreach.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                The project is growing step by step through live pages,
                interactive activities, teacher resources, outreach planning,
                feedback improvements, and honest impact tracking.
              </p>

              <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
                Founder note: This project should show real learning, real
                effort, and real progress. Outreach and impact should only be
                claimed after they actually happen.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Ethical Cybersecurity Statement
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              CyberShield Academy teaches cybersecurity as a defensive and
              responsible skill. Students should use what they learn to protect
              accounts, help others stay safe, and report problems properly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {projectValues.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-yellow-500/20 bg-slate-950/60 p-5"
                >
                  <h3 className="font-semibold text-yellow-100">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-yellow-50/90">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Connection to School Outreach
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is being prepared for school outreach so the
              lessons can support real classrooms, clubs, advisory sessions, and
              student-led presentations.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {outreachConnections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/outreach"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Outreach Page
              </Link>

              <Link
                href="/teacher-toolkit"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/impact"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Impact Tracker
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Has Been Built
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy currently includes core pages for learning,
              practice, outreach planning, teacher support, and project
              documentation.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {builtSections.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-500/20 bg-green-950/20 p-4 text-sm leading-6 text-green-100"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Explore the Project
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to learn, practice, prepare outreach, and review
              the project’s progress.
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