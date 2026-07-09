"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const quizQuestions: Question[] = [
  {
    question: "Why are updates important for system health?",
    options: [
      "They only change the appearance of the device.",
      "They can fix security weaknesses, bugs, and reliability problems.",
      "They remove the need for backups.",
      "They make every app automatically safe forever."
    ],
    answer: 1,
    explanation:
      "Updates often patch known weaknesses and improve stability. They are one layer of defense, not a replacement for other safe habits."
  },
  {
    question: "A school laptop repeatedly says updates failed. What is the safest next step?",
    options: [
      "Ignore the message because failed updates do not matter.",
      "Search random forums and run unknown repair files.",
      "Report it to a trusted adult or school technology staff.",
      "Disable all security settings so the update stops appearing."
    ],
    answer: 2,
    explanation:
      "On managed school devices, students should not try risky fixes. Reporting the issue to trusted staff is the safest defensive action."
  },
  {
    question: "Which sign may show poor system health?",
    options: [
      "The device has enough storage, updates are current, and protection is active.",
      "The device restarts normally after a planned update.",
      "The device has repeated crashes, failed updates, and low storage warnings.",
      "The device asks for confirmation before installing a trusted update."
    ],
    answer: 2,
    explanation:
      "Repeated crashes, failed updates, and storage warnings can point to maintenance problems that should be checked safely."
  },
  {
    question: "What should students avoid when trying to improve system health?",
    options: [
      "Keeping the device charged during updates.",
      "Using official settings and trusted support channels.",
      "Downloading unknown 'speed booster' or 'driver fixer' tools.",
      "Restarting after updates when prompted."
    ],
    answer: 2,
    explanation:
      "Unknown cleanup, booster, or driver tools can create more risk. Safer maintenance uses official tools and trusted help."
  }
];

function MiniQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return quizQuestions.reduce((total, q, index) => total + (answers[index] === q.answer ? 1 : 0), 0);
  }, [answers]);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/20">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Mini Scored Quiz</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Check your update and system health judgment</h2>
        </div>
        {submitted && (
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200">
            Score: {score}/{quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
          </div>
        )}
      </div>

      <div className="space-y-5">
        {quizQuestions.map((q, index) => (
          <div key={q.question} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="font-semibold text-slate-100">{index + 1}. {q.question}</p>
            <div className="mt-3 grid gap-2">
              {q.options.map((option, optionIndex) => {
                const selected = answers[index] === optionIndex;
                const correct = submitted && optionIndex === q.answer;
                const incorrect = submitted && selected && optionIndex !== q.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((prev) => ({ ...prev, [index]: optionIndex }))}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                      correct
                        ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                        : incorrect
                          ? "border-red-400 bg-red-400/10 text-red-100"
                          : selected
                            ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                            : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-500/70 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-3 text-sm text-slate-300"><span className="font-semibold text-cyan-200">Explanation:</span> {q.explanation}</p>}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Submit quiz
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
          }}
          className="mt-5 rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Reset quiz
        </button>
      )}
    </section>
  );
}

function SectionCard({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/20">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function NavButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/apps-processes-and-permissions" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/shared-devices-and-safe-use" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300">
        Next Lesson
      </Link>
      <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
    </div>
  );
}

export default function UpdatesAndSystemHealthPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">High School Beginner • B3.5</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Updates and System Health</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn why updates, patches, storage, restarts, and basic maintenance matter from a defensive cybersecurity point of view.
          </p>
          <div className="mt-8"><NavButtons /></div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cyan-200">Lesson Progress</p>
              <p className="text-xs text-slate-400">Module B3: Computers, Devices, and Operating Systems • Lesson 5 of 7</p>
            </div>
            <p className="text-sm font-bold text-cyan-100">71%</p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[71%] rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          <SectionCard title="Before You Start" eyebrow="Readiness Check">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Can you explain what an operating system does?",
                "Can you identify why apps need permissions?",
                "Can you describe what a security update is meant to fix?"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Professional Hook" eyebrow="Why defenders care">
            <p>
              In real organizations, many security problems begin with ordinary maintenance issues: old software, failed patches, ignored warnings, low storage, disabled protection, or devices that have not restarted in weeks. Defenders do not treat updates as random pop-ups. They treat them as part of system health.
            </p>
          </SectionCard>

          <SectionCard title="Learning Objectives" eyebrow="You will be able to">
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Explain the difference between updates, patches, and upgrades.",
                "Describe why outdated software can increase risk.",
                "Recognize safe and unsafe responses to update warnings.",
                "Analyze fake system health evidence without guessing.",
                "Create a basic system health checklist for personal or school devices."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Core Concept" eyebrow="Updates protect more than features">
            <p>
              An <span className="font-semibold text-cyan-200">update</span> is a change released by a trusted software provider. A <span className="font-semibold text-cyan-200">patch</span> often fixes a specific bug or security weakness. An <span className="font-semibold text-cyan-200">upgrade</span> may move the device or app to a newer major version. From a defensive view, updates are important because they can close known weaknesses, improve reliability, fix errors, and keep protection tools working correctly.
            </p>
            <p className="mt-4">
              Updates do not make a device perfect. They are one layer in a larger safety plan that also includes strong account security, backups, careful downloads, trusted support, and safe reporting.
            </p>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
            <h2 className="mt-2 text-2xl font-bold text-white">System Health Loop</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {[
                ["1", "Check status", "Updates, storage, battery, protection"],
                ["2", "Review warnings", "Read the message before acting"],
                ["3", "Use trusted source", "Official settings or school tech staff"],
                ["4", "Restart safely", "Let updates finish without interruption"],
                ["5", "Confirm health", "No failed updates or repeated alerts"]
              ].map(([num, title, detail]) => (
                <div key={title} className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-slate-950">{num}</div>
                  <h3 className="mt-4 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <SectionCard title="Key Vocabulary" eyebrow="Terms to know">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Patch", "A targeted fix for a software problem or weakness."],
                ["Update", "A trusted change that may improve security, stability, or features."],
                ["System health", "The overall condition of a device, including storage, updates, protection, and stability."],
                ["End-of-life", "A product stage where normal updates may no longer be provided."],
                ["Rollback", "Returning to an earlier version, usually with trusted support when an update causes problems."],
                ["Maintenance window", "A planned time when updates or system work can happen safely."]
              ].map(([term, definition]) => (
                <div key={term} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-cyan-200">{term}</h3>
                  <p className="mt-1 text-sm text-slate-400">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Technical Breakdown" eyebrow="How defenders think about update health">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Security", "Updates can close known weaknesses before they are abused."],
                ["Reliability", "Bug fixes reduce crashes, errors, and failed app behavior."],
                ["Compatibility", "Current apps, browsers, and protection tools often need current system components."],
                ["Visibility", "Defenders need clear status: current, pending, failed, or unsupported."],
                ["Recovery", "Backups and restore options matter before major changes."],
                ["Trust", "Updates should come from official settings, trusted app stores, or managed school systems."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Common Mistakes" eyebrow="Avoid these choices">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Ignoring failed update messages for months.",
                "Downloading unknown driver, booster, or cleanup tools.",
                "Turning off protection tools because they are annoying.",
                "Interrupting a device while an update is installing.",
                "Assuming every pop-up is real without checking the source.",
                "Trying to repair a school device without permission."
              ].map((mistake) => (
                <div key={mistake} className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                  {mistake}
                </div>
              ))}
            </div>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Dashboard</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Device Health Snapshot</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["OS Update", "Pending restart", "yellow"],
                ["Storage", "9% free", "red"],
                ["Protection", "Active", "green"],
                ["Backup", "Last checked: 9 days", "yellow"]
              ].map(([label, status, color]) => (
                <div key={label} className={`rounded-xl border p-4 ${color === "green" ? "border-emerald-500/30 bg-emerald-500/10" : color === "red" ? "border-red-500/30 bg-red-500/10" : "border-yellow-500/30 bg-yellow-500/10"}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300">
              <p>[08:10] update_status: pending_restart</p>
              <p>[08:11] storage_warning: drive_free_space_low</p>
              <p>[08:12] protection_status: active</p>
              <p>[08:14] recommended_action: restart_after_saving_work_and_report_if_update_fails</p>
            </div>
          </section>

          <SectionCard title="Safe Defensive Lab" eyebrow="Fake-data only">
            <p>
              Review this fake device health situation: a student laptop shows a pending restart, low storage, and an update that failed once yesterday. The student has homework saved locally and the device belongs to the school.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Save work, plug in the device, restart when appropriate, and report repeated failures to school technology staff.
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Download a random repair tool from an unknown website to force the update to install.
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
                Delete unknown system folders to make more space without asking anyone.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Analyze the Evidence" eyebrow="Defender reasoning">
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-950 text-cyan-200">
                  <tr>
                    <th className="p-3">Evidence</th>
                    <th className="p-3">What it suggests</th>
                    <th className="p-3">Safe conclusion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/60 text-slate-300">
                  <tr><td className="p-3">Pending restart</td><td className="p-3">An update may need completion.</td><td className="p-3">Save work and restart safely.</td></tr>
                  <tr><td className="p-3">Failed update yesterday</td><td className="p-3">The device may need trusted support if it repeats.</td><td className="p-3">Do not use unknown repair tools.</td></tr>
                  <tr><td className="p-3">Low storage</td><td className="p-3">Updates may fail when space is too low.</td><td className="p-3">Ask before deleting managed files.</td></tr>
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="Scenario Decision Challenge" eyebrow="Choose the best response">
            <p>
              A friend says, “My laptop is slow, so I found a free tool that promises to update every driver and clean everything. Should I run it?”
            </p>
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              Best response: Do not run unknown maintenance tools. Use official update settings, trusted app stores, or ask a trusted adult or school technology staff for help.
            </div>
          </SectionCard>

          <SectionCard title="Defender Checklist" eyebrow="Skills you should now have">
            <ul className="space-y-3">
              {[
                "I can explain why updates are part of defense-in-depth.",
                "I can tell the difference between official updates and suspicious pop-ups.",
                "I can identify device health clues like failed updates, low storage, and repeated crashes.",
                "I can choose safe next steps for school-owned or shared devices.",
                "I can avoid risky repair tools and ask trusted people for help."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">☐ {item}</li>
              ))}
            </ul>
          </SectionCard>

          <MiniQuiz />

          <SectionCard title="Portfolio Prompt" eyebrow="Build your cyber notebook">
            <p>
              Create a one-page “System Health Checklist” for a student device. Include safe update habits, storage checks, backup reminders, official support options, and what to do when an update fails.
            </p>
          </SectionCard>

          <SectionCard title="Key Takeaways" eyebrow="Remember">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Updates reduce known risk, but they are only one security layer.",
                "System health includes storage, protection, stability, backups, and update status.",
                "For school or shared devices, safe reporting is better than risky self-repair."
              ].map((item) => (
                <div key={item} className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">{item}</div>
              ))}
            </div>
          </SectionCard>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <NavButtons />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}