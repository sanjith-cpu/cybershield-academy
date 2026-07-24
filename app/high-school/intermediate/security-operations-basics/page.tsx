import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/security-operations-basics`;

const lessons = [
  {
    "number": "I15.1",
    "title": "SOC Roles, Responsibilities, and Workflow",
    "slug": "soc-roles-responsibilities-and-workflow",
    "focus": "Understand how fictional security operations teams organize analysts, engineers, incident responders, service owners, risk owners, communications, leadership, and escalation.",
    "lab": "Build a fictional SOC responsibility map, shift workflow, escalation path, and evidence-safe operating charter."
  },
  {
    "number": "I15.2",
    "title": "Alert Triage and Prioritization",
    "slug": "alert-triage-and-prioritization",
    "focus": "Evaluate fictional alerts through source health, asset context, identity, behavior, confidence, scope, business impact, duplication, and urgency.",
    "lab": "Create a fictional triage matrix that separates supported facts, reasonable conclusions, missing evidence, priority, and next action."
  },
  {
    "number": "I15.3",
    "title": "Case Management and Evidence Handling",
    "slug": "case-management-and-evidence-handling",
    "focus": "Document fictional cases with timelines, evidence references, ownership, decisions, communications, privacy limits, status, validation, and closure criteria.",
    "lab": "Build a fictional case file, evidence register, action log, decision record, and closure checklist."
  },
  {
    "number": "I15.4",
    "title": "Detection Engineering and Tuning Basics",
    "slug": "detection-engineering-and-tuning-basics",
    "focus": "Connect fictional detection goals, data sources, logic, thresholds, expected behavior, testing, false positives, false negatives, source health, and change control.",
    "lab": "Design and tune a fictional defensive detection with approved test evidence and rollback."
  },
  {
    "number": "I15.5",
    "title": "Escalation, Communication, and Handoffs",
    "slug": "escalation-communication-and-handoffs",
    "focus": "Practice fictional technical, operational, leadership, supplier, and incident communication while preserving evidence limits and decision authority.",
    "lab": "Create a fictional escalation matrix, shift handoff, leadership update, supplier request, and communication review."
  },
  {
    "number": "I15.6",
    "title": "Threat Intelligence in Security Operations",
    "slug": "threat-intelligence-in-security-operations",
    "focus": "Use fictional threat information safely by evaluating relevance, source quality, confidence, timeliness, local context, operational value, and limitations.",
    "lab": "Build a fictional intelligence note and convert only supported information into defensive monitoring and review tasks."
  },
  {
    "number": "I15.7",
    "title": "SOC Metrics, Quality, and Continuous Improvement",
    "slug": "soc-metrics-quality-and-continuous-improvement",
    "focus": "Measure fictional alert quality, case quality, review time, evidence coverage, escalation, closure, backlog, source health, and improvement progress.",
    "lab": "Create a fictional SOC metrics catalog, dashboard critique, quality-review plan, and improvement backlog."
  },
  {
    "number": "I15.8",
    "title": "Security Operations Integrated Lab",
    "slug": "security-operations-integrated-lab",
    "focus": "Integrate fictional alerts, evidence, triage, cases, detections, communications, intelligence, metrics, ownership, validation, and improvement.",
    "lab": "Complete a decision-ready fictional SOC case package and portfolio artifact."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Confirm scope and authority",
    "detail": "Define the fictional services, assets, identities, suppliers, evidence sources, owners, time window, privacy limits, and decisions allowed."
  },
  {
    "step": "2",
    "title": "Validate source health",
    "detail": "Check fictional log delivery, parsing, timestamps, coverage, ownership, exclusions, delays, duplicates, and known blind spots."
  },
  {
    "step": "3",
    "title": "Triage the signal",
    "detail": "Compare fictional alert details with asset criticality, identity context, behavior, history, confidence, business impact, and alternate explanations."
  },
  {
    "step": "4",
    "title": "Open and manage the case",
    "detail": "Record fictional facts, evidence references, timeline, owner, status, actions, decisions, communications, risks, and missing information."
  },
  {
    "step": "5",
    "title": "Escalate and coordinate",
    "detail": "Route fictional technical, business, supplier, recovery, privacy, leadership, or incident decisions to the correct authority."
  },
  {
    "step": "6",
    "title": "Validate response and closure",
    "detail": "Confirm fictional security outcome, business function, monitoring, residual risk, evidence quality, owner signoff, and reassessment triggers."
  }
];
const objectives = [
  "Explain fictional SOC roles, responsibilities, authority, shift workflow, escalation, communication, and service ownership.",
  "Evaluate fictional alerts using source health, asset and identity context, confidence, impact, duplication, and evidence limits.",
  "Create fictional cases with clear timelines, evidence references, ownership, actions, decisions, validation, and closure criteria.",
  "Design and tune fictional defensive detections through testable objectives, approved data, change control, monitoring, and rollback.",
  "Use fictional threat intelligence proportionately and translate only relevant, supported information into defensive action.",
  "Measure fictional SOC quality through transparent definitions, source health, targets, thresholds, trends, ownership, and improvement."
];
const evidencePreview = [
  "A fictional high-severity alert reports unusual access to a confidential support service.",
  "The related identity has approved access during a scheduled maintenance window.",
  "The alert source is healthy, but one supporting storage source is delayed.",
  "A similar alert fired during two prior approved maintenance events.",
  "No supplied evidence confirms unauthorized access, data exposure, or service impact.",
  "The case requires validation, tuning review, and an evidence-limited conclusion."
];
const portfolioOutcomes = [
  "SOC operating charter",
  "Responsibility and escalation matrix",
  "Alert-triage worksheet",
  "Case-management template",
  "Evidence and timeline register",
  "Detection design and tuning record",
  "Shift handoff and leadership update",
  "Threat-intelligence assessment",
  "SOC metrics catalog",
  "Integrated security-operations case package"
];

export default function SecurityOperationsBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.13),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I15
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Security Operations
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                I15 Security Operations Basics
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how fictional security operations teams validate signals,
                triage alerts, manage cases, design detections, coordinate
                escalation, use threat intelligence, measure quality, and turn
                evidence into responsible defensive decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Module Snapshot
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  ["8", "Lessons"],
                  ["1", "Module Test"],
                  ["6", "Core Workflow Steps"],
                  ["10", "Portfolio Outcomes"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-cyan-300/20 bg-slate-950/60 p-4"
                  >
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start I15.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Main Question
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              How Does a SOC Turn Noisy Signals into Defensible Decisions?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              A fictional alert is only the beginning. Professional security
              operations requires healthy sources, context, documented
              reasoning, correct ownership, proportionate escalation,
              communication, validation, and continuous improvement.
            </p>
          </article>

          <article className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
              Safety Boundary
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Defensive, Fictional, and Evidence-Limited
            </h2>

            <p className="mt-4 leading-8">
              Use only fictional alerts, logs, identities, assets, suppliers,
              cases, incidents, and decisions supplied in the lessons. Never
              request or expose real credentials, private company evidence,
              school records, employee data, incident details, or confidential
              security operations information.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Security Operations Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Steps from Signal to Reviewed Closure
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.12fr_0.45fr_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Objectives
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What You Will Be Able to Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <article
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Objective {index + 1}
                </p>

                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Lessons
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Security Operations Lessons
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.16fr_1fr_0.28fr] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
                        {lesson.number}
                      </span>

                      {index === 0 && (
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                          Start Here
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Lesson focus
                        </p>

                        <p className="mt-2 text-sm leading-6">{lesson.focus}</p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Defensive lab
                        </p>

                        <p className="mt-2 text-sm leading-6">{lesson.lab}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center font-bold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Fictional Evidence Preview
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Scheduled Maintenance or Suspicious Access?
            </h2>

            <div className="mt-5 grid gap-3">
              {evidencePreview.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              The safest conclusion is evidence-limited: the alert requires
              validation and possible tuning, but the supplied records do not
              confirm unauthorized access, data exposure, or service impact.
            </div>
          </article>

          <article className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
              Professional Standard
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              A SOC Case Should Be Reconstructable
            </h2>

            <p className="mt-4 leading-8">
              Another reviewer should be able to understand the alert, sources,
              timeline, facts, assumptions, actions, decisions, communications,
              missing evidence, validation, owner signoff, and closure without
              guessing.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio Outcome
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Artifacts You Will Build
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioOutcomes.map((item, index) => (
              <article
                key={item}
                className="flex gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="font-semibold leading-7">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
            Module Assessment
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            I15 Security Operations Basics Module Test
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            After all eight lessons, complete one exact twenty-five-question
            module test covering SOC workflow, triage, case management,
            evidence, detection tuning, escalation, threat intelligence,
            metrics, quality, validation, and closure.
          </p>

          <div className="mt-5">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl bg-purple-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-purple-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Begin Module I15
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start I15.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}