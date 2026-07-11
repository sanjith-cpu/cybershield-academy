import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B14.1",
    title: "Lab Safety, Scope, and Authorization",
    route: "lab-safety-scope-and-authorization",
    focus:
      "Learn how defensive labs use written scope, fictional data, isolated environments, approved tools, evidence preservation, and stop conditions.",
    lab:
      "Review a fictional lab brief and decide which systems, actions, data, tools, and evidence are inside or outside the approved scope.",
  },
  {
    number: "B14.2",
    title: "Identity and Access Review Lab",
    route: "identity-and-access-review-lab",
    focus:
      "Practice reviewing fictional account roles, authentication events, access levels, MFA status, and least-privilege decisions.",
    lab:
      "Analyze a fictional access review and recommend safer role assignments, account actions, documentation, and escalation.",
  },
  {
    number: "B14.3",
    title: "Phishing and Email Triage Lab",
    route: "phishing-and-email-triage-lab",
    focus:
      "Practice identifying suspicious email indicators, separating evidence from assumptions, and choosing safe reporting and response actions.",
    lab:
      "Review fictional message headers, links, sender details, attachment warnings, and user reports without opening dangerous content.",
  },
  {
    number: "B14.4",
    title: "Endpoint Alert Analysis Lab",
    route: "endpoint-alert-analysis-lab",
    focus:
      "Learn how defenders review fictional endpoint alerts, device context, file events, process activity, and containment decisions.",
    lab:
      "Triage a fictional endpoint alert queue and decide which cases should be closed, monitored, isolated, or escalated.",
  },
  {
    number: "B14.5",
    title: "Network Traffic Review Lab",
    route: "network-traffic-review-lab",
    focus:
      "Practice reading safe fictional network summaries, connection patterns, service usage, timing, and segmentation evidence.",
    lab:
      "Compare fictional traffic patterns with approved business activity and identify which events need further investigation.",
  },
  {
    number: "B14.6",
    title: "Backup and Recovery Validation Lab",
    route: "backup-and-recovery-validation-lab",
    focus:
      "Learn how defenders verify backup coverage, restore readiness, ownership, retention, testing, and recovery priorities.",
    lab:
      "Review a fictional backup dashboard and build a safe validation plan for missing copies, failed jobs, and untested restores.",
  },
  {
    number: "B14.7",
    title: "Multi-Alert Defensive Challenge",
    route: "multi-alert-defensive-challenge",
    focus:
      "Combine identity, email, endpoint, network, backup, documentation, and escalation skills in one fictional incident queue.",
    lab:
      "Prioritize a fictional shift of related alerts, document evidence, assign owners, and choose the safest response sequence.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B14 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Apply authorization, scope, evidence, privacy, and stop-condition rules to defensive labs.",
  "Review fictional identity, email, endpoint, network, and backup evidence safely.",
  "Separate facts, assumptions, missing context, and justified conclusions.",
  "Prioritize alerts and choose close, monitor, investigate, contain, or escalate decisions.",
  "Write clear defensive notes that preserve evidence, ownership, timing, and next actions.",
];

const labFlow = [
  {
    label: "Confirm scope",
    text:
      "Review the fictional environment, approved actions, prohibited actions, tools, data, owners, and stop conditions.",
  },
  {
    label: "Collect evidence",
    text:
      "Use provided logs, dashboards, tickets, alerts, diagrams, and reports without changing or inventing evidence.",
  },
  {
    label: "Analyze safely",
    text:
      "Separate facts from assumptions, identify missing context, and compare activity with approved expectations.",
  },
  {
    label: "Choose action",
    text:
      "Decide whether to close, monitor, investigate, contain, recover, or escalate according to evidence and authority.",
  },
  {
    label: "Document and review",
    text:
      "Record timestamps, reasoning, owners, limitations, unresolved questions, and the next defensive step.",
  },
];

const fakeLabEvents = [
  [
    "Identity",
    "New admin login from an unfamiliar device",
    "Verify context and escalate if unconfirmed",
  ],
  [
    "Email",
    "Message uses urgent language and a mismatched link",
    "Report safely and preserve evidence",
  ],
  [
    "Endpoint",
    "Security tool blocks a suspicious file",
    "Follow approved containment playbook",
  ],
  [
    "Backup",
    "Critical restore has never been tested",
    "Schedule validation and assign ownership",
  ],
];

export default function BeginnerDefensivePracticeLabsModulePage() {
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
              href="/high-school/beginner/cybersecurity-careers-and-certifications"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Beginner Track →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B14
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Beginner Defensive Practice Labs
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Apply beginner defensive skills through fictional identity,
                email, endpoint, network, backup, and multi-alert practice labs
                built around authorization, evidence, documentation, and safe
                escalation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/beginner-defensive-practice-labs/lab-safety-scope-and-authorization"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/beginner-defensive-practice-labs/module-test"
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
              Turn beginner cybersecurity knowledge into careful defensive
              decisions.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              This module brings together the beginner track through safe,
              fictional labs. Students practice reviewing evidence, prioritizing
              risk, following scope, protecting privacy, documenting reasoning,
              and escalating cases without touching real systems.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Lab Safety Rule
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every system, user, account, message, log, file, network, alert,
              and organization in these labs is fictional. Never scan, access,
              test, change, or investigate a real system without explicit
              authorization and approved scope.
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
              The safe defensive-lab workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Each lab follows the same disciplined process from authorization
              to evidence review, action, documentation, and reflection.
            </p>

            <div className="mt-6 space-y-3">
              {labFlow.map((step, index) => (
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
                  Fake Lab Queue
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Defensive Review Examples
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeLabEvents.map(([area, event, action]) => (
                <div
                  key={`${area}-${event}`}
                  className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.8fr] sm:gap-3"
                >
                  <span className="font-mono font-bold text-cyan-200">
                    {area}
                  </span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">
                    {action}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              The strongest defensive decision is supported by evidence,
              authorization, context, clear ownership, and documented reasoning.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Practice Path
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">B14 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional dashboards, alerts, logs, tickets,
            diagrams, messages, and case notes. Students choose actions before
            revealing outcomes and explanations.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/beginner-defensive-practice-labs/${lesson.route}`}
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
              B14 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering scope,
              authorization, evidence, identity review, email triage, endpoint
              alerts, network analysis, backup validation, documentation,
              prioritization, and escalation. Answers and explanations remain
              hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/beginner-defensive-practice-labs/module-test"
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
            href="/high-school/beginner/cybersecurity-careers-and-certifications"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/beginner-defensive-practice-labs/lab-safety-scope-and-authorization"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B14.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}