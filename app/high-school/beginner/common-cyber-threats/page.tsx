import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B8.1",
    title: "What Cyber Threats Are",
    route: "what-cyber-threats-are",
    focus: "Understand what a cyber threat is, how threats differ from vulnerabilities and incidents, and why defenders classify risk.",
    lab: "Review fake digital events and decide whether each one is a threat, vulnerability, warning sign, or normal activity.",
  },
  {
    number: "B8.2",
    title: "Malware and Ransomware Concepts",
    route: "malware-and-ransomware-concepts",
    focus: "Learn safe high-level concepts for malware and ransomware without studying harmful creation, delivery, or execution steps.",
    lab: "Analyze a fake device alert panel and identify defensive actions such as isolation, reporting, updates, and recovery.",
  },
  {
    number: "B8.3",
    title: "Phishing and Social Engineering Overview",
    route: "phishing-and-social-engineering-overview",
    focus: "Recognize how suspicious messages use urgency, fear, trust, rewards, and impersonation to influence decisions.",
    lab: "Review fictional messages and identify manipulation clues without opening links, attachments, or replying.",
  },
  {
    number: "B8.4",
    title: "Credential Theft and Account Takeover Concepts",
    route: "credential-theft-and-account-takeover-concepts",
    focus: "Understand how exposed credentials, unsafe sharing, fake login prompts, and weak recovery controls can place accounts at risk.",
    lab: "Examine fake account evidence and choose defensive actions such as changing credentials, enabling MFA, and reviewing sessions.",
  },
  {
    number: "B8.5",
    title: "Unsafe Downloads and Malicious Attachments",
    route: "unsafe-downloads-and-malicious-attachments",
    focus: "Identify risky downloads, unexpected attachments, fake update prompts, and file warning signs before interacting with them.",
    lab: "Sort fictional download and attachment examples into safer, suspicious, and report-first categories.",
  },
  {
    number: "B8.6",
    title: "Defense Basics: Updates, Backups, and Caution",
    route: "defense-basics-updates-backups-and-caution",
    focus: "Connect software updates, protected backups, careful verification, account security, and safe reporting to basic threat defense.",
    lab: "Build a fake threat-defense plan using prevention, detection, response, and recovery actions.",
  },
  {
    number: "B8.7",
    title: "Threat Recognition Lab",
    route: "threat-recognition-lab",
    focus: "Apply threat-category knowledge to fake alerts, messages, files, account events, and device warnings.",
    lab: "Complete a multi-step fictional threat review and write a short defender recommendation with safe escalation steps.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B8 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain the difference between threats, vulnerabilities, warning signs, and security incidents.",
  "Recognize common malware, ransomware, phishing, credential, download, and attachment threat concepts.",
  "Identify warning signs without opening, testing, or interacting with suspicious content.",
  "Choose safe defensive responses involving updates, backups, account protection, reporting, and trusted help.",
  "Analyze fictional threat evidence and write a clear beginner defender recommendation.",
];

const threatFlow = [
  { label: "Threat Source", text: "A suspicious person, message, file, program, account event, or digital condition may create risk." },
  { label: "Warning Signs", text: "Unexpected behavior, urgency, unfamiliar senders, unusual files, alerts, or account changes provide clues." },
  { label: "Possible Impact", text: "Threats may affect accounts, devices, files, privacy, availability, trust, or school operations." },
  { label: "Defensive Action", text: "Users pause, avoid interaction, update protection, secure accounts, preserve backups, and report safely." },
  { label: "Recovery and Review", text: "Trusted adults or technology staff help contain the issue, restore access or data, and improve defenses." },
];

const fakeThreatEvents = [
  ["Message", "Unexpected attachment claims to contain a school schedule", "Do not open"],
  ["Device", "Fake security alert reports unusual file changes", "Report and isolate"],
  ["Account", "New login appears from an unfamiliar browser", "Review access"],
  ["Update", "Official system update is available through device settings", "Install safely"],
];

export default function CommonCyberThreatsModulePage() {
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
              href="/high-school/beginner/passwords-authentication-and-account-security"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/common-cyber-threats/what-cyber-threats-are"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B8
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Common Cyber Threats
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how defenders recognize common threat categories, warning signs, and safe responses without
                opening suspicious content, testing harmful files, or studying attack instructions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/common-cyber-threats/what-cyber-threats-are"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/common-cyber-threats/module-test"
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
            <h2 className="mt-3 text-3xl font-black text-white">Recognize threats before interacting with them.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Cyber threats can appear through messages, files, downloads, account activity, device behavior, or fake
              warnings. Students learn to classify common threat concepts, notice evidence, avoid risky interaction,
              protect important accounts and data, and report concerns through trusted channels.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              This module uses fake alerts, fake files, fake messages, fake login events, and fictional threat evidence.
              Students should not open suspicious attachments, test unknown downloads, visit suspicious links, or attempt
              to create, run, or investigate harmful software.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Threat recognition and defense flow</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Defenders identify the possible threat source, review warning signs, consider the potential impact, choose a
              safe response, and involve trusted help for recovery and improvement.
            </p>
            <div className="mt-6 space-y-3">
              {threatFlow.map((step, index) => (
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
                    <h3 className="text-xl font-black text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Threat Panel</p>
                <h2 className="mt-2 text-2xl font-black text-white">Threat Review Events</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeThreatEvents.map(([area, event, status]) => (
                <div key={`${area}-${event}`} className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3">
                  <span className="font-mono font-bold text-cyan-200">{area}</span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. It helps students practice threat recognition without using real malware, real
              suspicious files, real private messages, or unsafe links.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B8 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional messages, files, alerts, account events, and device warnings to build safe threat
            recognition and defensive response habits.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/common-cyber-threats/${lesson.route}`}
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
            <h2 className="mt-2 text-3xl font-black text-white">B8 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering threat categories, malware and ransomware concepts,
              phishing and social engineering warning signs, credential risk, unsafe downloads, malicious attachments,
              defensive responses, safe reporting, and fictional threat scenario analysis. Answers and explanations stay
              hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/common-cyber-threats/module-test"
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
            href="/high-school/beginner/passwords-authentication-and-account-security"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/common-cyber-threats/what-cyber-threats-are"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B8.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}