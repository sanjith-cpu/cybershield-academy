import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B13.1",
    title: "Cybersecurity Career Families",
    route: "cybersecurity-career-families",
    focus:
      "Explore major cybersecurity career families, including operations, engineering, risk, privacy, investigations, education, and leadership.",
    lab:
      "Match fictional job responsibilities, work environments, and professional strengths with suitable career families.",
  },
  {
    number: "B13.2",
    title: "What SOC Analysts Do",
    route: "what-soc-analysts-do",
    focus:
      "Learn how security operations center analysts monitor alerts, review evidence, document findings, escalate incidents, and support defensive response.",
    lab:
      "Review fictional alerts, tickets, logs, and escalation choices from a beginner SOC workflow.",
  },
  {
    number: "B13.3",
    title: "Security Engineering and Architecture Roles",
    route: "security-engineering-and-architecture-roles",
    focus:
      "Understand how engineers and architects design, build, test, maintain, and improve secure systems and controls.",
    lab:
      "Connect fictional security requirements with engineering, architecture, administration, and design responsibilities.",
  },
  {
    number: "B13.4",
    title: "Governance, Risk, and Compliance Roles",
    route: "governance-risk-and-compliance-roles",
    focus:
      "Explore policy, risk assessment, compliance, privacy, auditing, awareness, and business-focused security work.",
    lab:
      "Analyze fictional policies, risks, control evidence, and communication needs from a GRC perspective.",
  },
  {
    number: "B13.5",
    title: "Certifications and Learning Paths",
    route: "certifications-and-learning-paths",
    focus:
      "Learn how students can compare foundational learning, certifications, college programs, labs, competitions, and experience without chasing credentials blindly.",
    lab:
      "Build a fictional beginner learning roadmap based on interests, time, budget, skills, and career direction.",
  },
  {
    number: "B13.6",
    title: "Building a Beginner Cyber Portfolio",
    route: "building-a-beginner-cyber-portfolio",
    focus:
      "Learn how to document safe projects, labs, reflections, diagrams, reports, presentations, and growth evidence professionally.",
    lab:
      "Organize a fictional student portfolio with clear descriptions, ethical boundaries, evidence, reflection, and next steps.",
  },
  {
    number: "B13.7",
    title: "Career Planning Lab",
    route: "career-planning-lab",
    focus:
      "Combine career interests, strengths, skill gaps, learning choices, certifications, projects, networking, and professional habits into a realistic plan.",
    lab:
      "Create a fictional one-year cybersecurity career-readiness plan with milestones, evidence, review points, and alternatives.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B13 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Describe major cybersecurity career families and how their responsibilities differ.",
  "Explain the beginner responsibilities of SOC, engineering, architecture, GRC, privacy, and awareness roles.",
  "Compare education, certifications, projects, competitions, and experience as parts of a learning path.",
  "Build a safe beginner portfolio that shows evidence, reflection, ethics, and growth.",
  "Create a realistic career plan based on interests, strengths, constraints, and next steps.",
];

const careerFlow = [
  {
    label: "Explore roles",
    text:
      "Review real categories of work instead of assuming every cybersecurity professional performs the same tasks.",
  },
  {
    label: "Understand yourself",
    text:
      "Identify interests, strengths, preferred work style, values, learning needs, and practical constraints.",
  },
  {
    label: "Build foundations",
    text:
      "Develop communication, ethics, computing, networking, operating-system, security, and problem-solving knowledge.",
  },
  {
    label: "Create evidence",
    text:
      "Document safe projects, labs, reports, diagrams, presentations, reflections, and teamwork.",
  },
  {
    label: "Review and adjust",
    text:
      "Use feedback and new experience to update goals instead of treating one path as permanent.",
  },
];

const fakeCareerEvents = [
  [
    "SOC analysis",
    "Review alerts and document evidence",
    "Operations and response",
  ],
  [
    "Security design",
    "Plan secure systems and controls",
    "Engineering and architecture",
  ],
  [
    "Risk review",
    "Connect controls with policy and business needs",
    "Governance, risk, and compliance",
  ],
  [
    "Portfolio",
    "Explain a safe project and lessons learned",
    "Career readiness",
  ],
];

export default function CybersecurityCareersCertificationsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
            <Link
              href="/high-school/beginner/intro-to-cryptography-concepts"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/beginner-defensive-practice-labs"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Next Module →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B13
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Cybersecurity Careers and Certifications
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Explore cybersecurity career families, professional
                responsibilities, learning paths, certifications, portfolios,
                communication skills, and realistic career-planning decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/cybersecurity-careers-and-certifications/cybersecurity-career-families"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/cybersecurity-careers-and-certifications/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">
                Module Snapshot
              </h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Module Mission
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Turn cybersecurity interest into an informed, ethical, and
              realistic learning plan.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Cybersecurity includes many different kinds of work. This module
              helps students explore those differences, understand how skills
              and credentials fit together, document safe evidence of growth,
              and build a plan that can change as they gain experience.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Career Safety Reminder
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Students should never claim skills, certifications, experience, or
              project results they have not earned. Portfolios must avoid real
              credentials, private data, unauthorized systems, harmful code, and
              confidential organization information.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Visual Framework
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              The career-readiness workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Strong career planning connects exploration, self-awareness,
              foundations, evidence, feedback, and flexible next steps.
            </p>

            <div className="mt-6 space-y-3">
              {careerFlow.map((step, index) => (
                <div
                  key={step.label}
                  className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div className="hidden h-px w-10 bg-cyan-400/30 sm:block" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                  Fake Career Panel
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Role and Skill Matches
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeCareerEvents.map(([area, task, match]) => (
                <div
                  key={`${area}-${task}`}
                  className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.42fr_1fr_0.65fr] sm:gap-3"
                >
                  <span className="font-mono font-bold text-cyan-200">
                    {area}
                  </span>
                  <span className="text-slate-300">{task}</span>
                  <span className="text-right font-bold text-emerald-200">
                    {match}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These fictional examples show that cybersecurity work includes
              technical, analytical, communication, business, policy, education,
              and leadership responsibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Learning Path
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">B13 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional job descriptions, tickets, projects,
            learning plans, portfolios, interviews, and career decisions so
            students can explore safely and honestly.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/cybersecurity-careers-and-certifications/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">
                    {lesson.number}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Lesson {index + 1}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.focus}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    Safe Lab
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.lab}
                  </p>
                </div>

                <span className="text-sm font-bold text-cyan-300">Open →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Objectives
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              By the end, students can:
            </h2>

            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Module Assessment
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              B13 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering career
              families, SOC responsibilities, engineering and architecture,
              governance and risk, certifications, learning paths, portfolios,
              professional skills, ethics, and career-planning decisions.
              Answers and explanations remain hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/cybersecurity-careers-and-certifications/module-test"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href="/high-school/beginner/intro-to-cryptography-concepts"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/cybersecurity-careers-and-certifications/cybersecurity-career-families"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B13.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}