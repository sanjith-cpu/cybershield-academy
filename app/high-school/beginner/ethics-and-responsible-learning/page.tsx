import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B2.1",
    title: "Why Permission Matters",
    route: "why-permission-matters",
    focus: "Understand authorization, consent, ownership, and why permission is the first rule of ethical cybersecurity.",
    lab: "Sort fake situations into allowed, not allowed, and ask-for-permission-first categories.",
  },
  {
    number: "B2.2",
    title: "Legal vs Illegal Cyber Activity",
    route: "legal-vs-illegal-cyber-activity",
    focus: "Learn how the same technical idea can be safe or unsafe depending on permission, scope, and intent.",
    lab: "Review fake scenarios and identify which ones cross legal or school-safe boundaries.",
  },
  {
    number: "B2.3",
    title: "School Rules and Acceptable Use",
    route: "school-rules-and-acceptable-use",
    focus: "Connect cybersecurity learning to school technology rules, device policies, accounts, and networks.",
    lab: "Analyze a fake acceptable-use policy and choose responsible student actions.",
  },
  {
    number: "B2.4",
    title: "Safe Labs vs Real Systems",
    route: "safe-labs-vs-real-systems",
    focus: "Tell the difference between controlled learning labs and real systems that students should not test.",
    lab: "Build a safe-lab boundary checklist using fake examples and fake systems only.",
  },
  {
    number: "B2.5",
    title: "Responsible Reporting Concepts",
    route: "responsible-reporting-concepts",
    focus: "Learn what to do when something seems unsafe: stop, document safely, and report to trusted adults or staff.",
    lab: "Write a short fake report that explains a concern without exposing private details or taking unsafe action.",
  },
  {
    number: "B2.6",
    title: "Professional Ethics and Digital Trust",
    route: "professional-ethics-and-digital-trust",
    focus: "Explore how professional defenders build trust through honesty, restraint, privacy, and documentation.",
    lab: "Review fake team decisions and choose the option that protects people, data, and trust.",
  },
  {
    number: "B2.7",
    title: "Ethics Decision Lab",
    route: "ethics-decision-lab",
    focus: "Apply the full module to realistic school-safe decision scenarios.",
    lab: "Complete a fake ethics case board and create a personal responsible-learning pledge.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B2 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain why permission and authorization come before any cybersecurity activity.",
  "Identify the difference between safe learning labs and real systems.",
  "Apply school technology rules and acceptable-use expectations to cyber learning.",
  "Describe safe responsible-reporting habits using fake examples only.",
  "Make ethical decisions that protect people, privacy, trust, and school safety.",
];

const ethicsFlow = [
  { step: "1", title: "Pause", text: "Do not click, test, scan, change, share, or investigate real systems." },
  { step: "2", title: "Check Permission", text: "Ask: Do I own it? Was I clearly allowed? Is this inside a safe lab?" },
  { step: "3", title: "Protect People", text: "Avoid exposing private data, embarrassing others, or spreading suspicious material." },
  { step: "4", title: "Report Safely", text: "Tell a trusted adult, teacher, guardian, counselor, or school technology staff." },
];

export default function EthicsResponsibleLearningModulePage() {
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
              href="/high-school/beginner/cybersecurity-foundations"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/ethics-and-responsible-learning/why-permission-matters"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B2
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Ethics and Responsible Learning
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Build the legal, ethical, and school-safe boundaries students need before learning more technical
                cybersecurity. This module makes permission, scope, privacy, documentation, and trusted reporting clear.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/ethics-and-responsible-learning/why-permission-matters"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/ethics-and-responsible-learning/module-test"
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
            <h2 className="mt-3 text-3xl font-black text-white">Learn cyber the right way.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Cybersecurity skill is not just technical. It also requires permission, restraint, privacy, honesty, and
              respect for rules. This module helps students understand that safe learning happens inside clear boundaries,
              with fake data, fake systems, and trusted adults available when something feels unsafe.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Core Rule</p>
            <p className="mt-3 leading-7 text-yellow-50">
              Curiosity is good, but permission decides what is allowed. Students should never test real accounts,
              devices, networks, websites, links, or apps without clear authorization and adult guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">The responsible learning decision flow</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Students should follow this mental checklist before taking action in any cybersecurity activity.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {ethicsFlow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B2 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fake scenarios, decision checkpoints, safety reminders, and scored review to make ethical
            boundaries feel practical instead of vague.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/ethics-and-responsible-learning/${lesson.route}`}
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
            <h2 className="mt-2 text-3xl font-black text-white">B2 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering permission, authorization, safe labs, school rules,
              responsible reporting, and ethical decision-making scenarios. Answers and explanations stay hidden until
              submission.
            </p>
            <Link
              href="/high-school/beginner/ethics-and-responsible-learning/module-test"
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
            href="/high-school/beginner/cybersecurity-foundations"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/ethics-and-responsible-learning/why-permission-matters"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B2.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}