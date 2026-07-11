import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modulePath = "/high-school/beginner/beginner-capstone-review";

const lessons = [
  {
    number: "B15.1",
    title: "Cybersecurity Foundations Review",
    route: "cybersecurity-foundations-review",
    focus:
      "Review confidentiality, integrity, availability, assets, threats, vulnerabilities, risk, controls, defense in depth, and the defender mindset.",
    challenge:
      "Analyze a fictional organization and connect its assets, risks, controls, evidence, and defensive priorities.",
  },
  {
    number: "B15.2",
    title: "Ethics and Safe Learning Review",
    route: "ethics-and-safe-learning-review",
    focus:
      "Review authorization, scope, privacy, evidence handling, safe labs, responsible disclosure, stop conditions, and professional conduct.",
    challenge:
      "Evaluate fictional learning scenarios and decide which actions are authorized, prohibited, uncertain, or require escalation.",
  },
  {
    number: "B15.3",
    title: "Networking and Web Concepts Review",
    route: "networking-and-web-concepts-review",
    focus:
      "Review devices, networks, IP concepts, DNS, routers, ports, protocols, browsers, URLs, HTTPS, cookies, downloads, and safe browsing.",
    challenge:
      "Use fictional diagrams, browser evidence, and connection summaries to explain how data moves and where defenses belong.",
  },
  {
    number: "B15.4",
    title: "Accounts, Privacy, and Data Review",
    route: "accounts-privacy-and-data-review",
    focus:
      "Review digital identity, privacy, passphrases, password managers, MFA, account recovery, permissions, data classification, cloud storage, and backups.",
    challenge:
      "Build a fictional protection plan for accounts, personal information, shared files, cloud data, and recovery.",
  },
  {
    number: "B15.5",
    title: "Threats and Defenses Review",
    route: "threats-and-defenses-review",
    focus:
      "Review malware, ransomware concepts, phishing, impersonation, social engineering, unsafe files, device protection, alerts, reporting, and response.",
    challenge:
      "Triage a fictional queue containing messages, device alerts, account events, and network evidence.",
  },
  {
    number: "B15.6",
    title: "Beginner Portfolio Reflection",
    route: "beginner-portfolio-reflection",
    focus:
      "Review completed work, identify evidence of growth, improve explanations, protect sensitive information, and plan stronger portfolio artifacts.",
    challenge:
      "Create a structured reflection connecting skills, evidence, ethical limits, lessons learned, and future goals.",
  },
  {
    number: "B15.7",
    title: "Beginner Final Readiness Lab",
    route: "beginner-final-readiness-lab",
    focus:
      "Combine the full Beginner Track through mixed fictional evidence, safe decisions, confidence checks, gap review, and final assessment planning.",
    challenge:
      "Complete a comprehensive fictional readiness shift before the module test, two practice tests, and Beginner Final Test.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B15 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain the most important concepts from all fourteen previous Beginner modules.",
  "Apply ethical, defensive reasoning to fictional accounts, messages, devices, networks, data, and alerts.",
  "Connect evidence across cybersecurity foundations, privacy, authentication, threats, defenses, cryptography, careers, and labs.",
  "Identify personal strengths, knowledge gaps, and the next review action before track-level assessments.",
  "Prepare a safe beginner portfolio reflection supported by clear evidence and honest skill claims.",
];

const readinessFlow = [
  {
    label: "Recall",
    text:
      "Bring back essential vocabulary, principles, controls, processes, and defensive habits from the full track.",
  },
  {
    label: "Connect",
    text:
      "Explain how identity, devices, networks, browsers, data, threats, controls, people, and recovery affect one another.",
  },
  {
    label: "Apply",
    text:
      "Use fictional evidence to choose safe, ethical, proportionate, and documented defensive actions.",
  },
  {
    label: "Reflect",
    text:
      "Identify strengths, gaps, portfolio evidence, and the learning strategies that helped most.",
  },
  {
    label: "Prepare",
    text:
      "Use the module test, two practice tests, and final test as a structured readiness path.",
  },
];

const reviewDomains = [
  {
    title: "Foundations and ethics",
    items:
      "CIA, assets, threats, vulnerabilities, risk, controls, defense in depth, authorization, scope, privacy, and responsible learning.",
  },
  {
    title: "Systems, networks, and web",
    items:
      "Devices, operating systems, routers, DNS, ports, protocols, URLs, HTTPS, browsers, downloads, cookies, updates, and permissions.",
  },
  {
    title: "Identity, accounts, and data",
    items:
      "Digital identity, passphrases, password managers, MFA, recovery, privacy, classification, cloud storage, backups, and restore readiness.",
  },
  {
    title: "Threats and defensive response",
    items:
      "Malware concepts, phishing, social engineering, suspicious files, account alerts, device protection, reporting, triage, evidence, and escalation.",
  },
  {
    title: "Cryptography and trust",
    items:
      "Encryption, encoding, hashing, keys, certificates, HTTPS concepts, integrity checks, and secret protection.",
  },
  {
    title: "Careers and professional growth",
    items:
      "Career families, SOC work, engineering, GRC, certifications, portfolios, documentation, communication, and learning paths.",
  },
];

export default function BeginnerCapstoneReviewModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
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
              href="/high-school/beginner/beginner-defensive-practice-labs"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/practice-test-1"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Practice Test 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B15
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Beginner Capstone Review
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Review the entire High School Beginner Track, connect major
                cybersecurity concepts, reflect on portfolio evidence, identify
                readiness gaps, and prepare for the module test, practice tests,
                and Beginner Final Test.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`${modulePath}/cybersecurity-foundations-review`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href={`${modulePath}/module-test`}
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

              <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">
                  Final Beginner Module
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  B15 completes the fifteen-module Beginner curriculum and opens
                  the track-level assessment path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Capstone Mission
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Turn separate Beginner lessons into one connected cybersecurity
              foundation.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students revisit essential concepts from every module, apply them
              to mixed fictional evidence, explain the reasoning behind safe
              decisions, and prepare a clear plan for final review.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Capstone Safety Rule
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every account, person, organization, message, file, device,
              network, alert, log, dashboard, and scenario is fictional. Review
              evidence only through the safe activities provided on the site.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Visual Framework
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              The Beginner Capstone Readiness Cycle
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Strong readiness grows through repeated recall, connection,
              application, reflection, and preparation.
            </p>

            <div className="mt-6 space-y-3">
              {readinessFlow.map((step, index) => (
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Full-Track Review Map
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Six Connected Review Domains
            </h2>
            <div className="mt-6 space-y-4">
              {reviewDomains.map((domain) => (
                <div
                  key={domain.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-cyan-100">{domain.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {domain.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Capstone Path
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">B15 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson reviews earlier learning while adding mixed scenarios,
            readiness checks, reflection, evidence analysis, and assessment
            preparation.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`${modulePath}/${lesson.route}`}
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
                    Capstone Challenge
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.challenge}
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
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Assessment Path
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Module Test to Beginner Final
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              Begin with the 25-question B15 Module Test. Then complete two
              50-question practice tests before the 125-question Beginner Final
              Test. Answers and explanations remain hidden until submission.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                href={`${modulePath}/module-test`}
                className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                B15 Module Test →
              </Link>
              <Link
                href="/high-school/beginner/practice-test-1"
                className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
              >
                Beginner Practice Test 1 →
              </Link>
              <Link
                href="/high-school/beginner/practice-test-2"
                className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
              >
                Beginner Practice Test 2 →
              </Link>
              <Link
                href="/high-school/beginner/final-test"
                className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
              >
                Beginner Final Test →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href="/high-school/beginner/beginner-defensive-practice-labs"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href={`${modulePath}/cybersecurity-foundations-review`}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B15.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}