import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B1.1",
    title: "What Cybersecurity Protects",
    route: "what-cybersecurity-protects",
    focus: "Understand the people, devices, accounts, networks, and data cybersecurity protects.",
    lab: "Map fake school assets to what could go wrong and how defenders reduce risk.",
  },
  {
    number: "B1.2",
    title: "Confidentiality, Integrity, and Availability",
    route: "confidentiality-integrity-availability",
    focus: "Learn the CIA triad as the foundation for explaining security goals.",
    lab: "Classify fake incidents by which part of the CIA triad is affected.",
  },
  {
    number: "B1.3",
    title: "Threats, Vulnerabilities, and Risk",
    route: "threats-vulnerabilities-risk",
    focus: "Separate threats, weaknesses, impact, likelihood, and risk.",
    lab: "Review a fake risk board and choose the safest defensive priority.",
  },
  {
    number: "B1.4",
    title: "How Cyber Defenders Think",
    route: "how-cyber-defenders-think",
    focus: "Think like a defender: protect first, verify evidence, document clearly, and ask for help.",
    lab: "Triage fake alerts without guessing or overreacting.",
  },
  {
    number: "B1.5",
    title: "Security Controls and Layers",
    route: "security-controls-layers",
    focus: "Understand preventive, detective, and corrective controls in layered defense.",
    lab: "Build a defense-in-depth plan for a fake student account system.",
  },
  {
    number: "B1.6",
    title: "Safe Case Study: What Went Wrong?",
    route: "safe-case-study-what-went-wrong",
    focus: "Use a fake incident story to identify missed controls and safer choices.",
    lab: "Analyze fake evidence and write a short defensive summary.",
  },
  {
    number: "B1.7",
    title: "Foundations Review Lab",
    route: "foundations-review-lab",
    focus: "Review the whole module through applied fake-data decisions.",
    lab: "Complete a beginner defender checklist and portfolio reflection.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B1 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain what cybersecurity protects in real life.",
  "Use confidentiality, integrity, and availability to describe security goals.",
  "Tell the difference between threats, vulnerabilities, and risk.",
  "Describe how defenders use evidence, controls, and calm decisions.",
  "Apply defense-in-depth thinking to safe fake scenarios.",
];

export default function CybersecurityFoundationsModulePage() {
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
              href="/high-school/beginner/cybersecurity-foundations/what-cybersecurity-protects"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B1
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Cybersecurity Foundations
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Start the High School Beginner track by learning what cybersecurity protects, how defenders think,
                and how risk, controls, and defense-in-depth fit together in safe, school-appropriate scenarios.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/cybersecurity-foundations/what-cybersecurity-protects"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/cybersecurity-foundations/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">Module Snapshot</h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">{value}</span>
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Module Mission</p>
            <h2 className="mt-3 text-3xl font-black text-white">Build your defender foundation.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              This module gives students the professional vocabulary and thinking habits needed before moving into
              accounts, networks, web safety, threats, devices, data protection, and defensive labs. Every activity uses
              fake examples only and focuses on safe defensive reasoning.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Boundary</p>
            <p className="mt-3 leading-7 text-yellow-50">
              Do not test real systems, links, accounts, devices, or websites. CyberShield labs use fake data and teach
              students to ask trusted adults or school technology staff when something feels unsafe.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B1 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson will become a full professional-style page with a progress bar, readiness check, fake dashboard,
            evidence analysis, decision challenge, mini scored quiz, and portfolio prompt.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/cybersecurity-foundations/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">{lesson.number}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Lesson {index + 1}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.focus}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Safe Lab</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.lab}</p>
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Objectives</p>
            <h2 className="mt-2 text-3xl font-black text-white">By the end, students can:</h2>
            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div key={objective} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">Module Assessment</p>
            <h2 className="mt-2 text-3xl font-black text-white">B1 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering cybersecurity vocabulary, the CIA triad, risk
              thinking, defensive controls, and safe case-study reasoning. Answers and explanations stay hidden until
              submission.
            </p>
            <Link
              href="/high-school/beginner/cybersecurity-foundations/module-test"
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
            href="/high-school/beginner"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Back to Beginner Track
          </Link>
          <Link
            href="/high-school/beginner/cybersecurity-foundations/what-cybersecurity-protects"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B1.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}