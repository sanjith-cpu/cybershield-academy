import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/incident-response-basics`;

const moduleSnapshot = [
  [
    "Track",
    "High School Intermediate"
  ],
  [
    "Module",
    "I11 of 17"
  ],
  [
    "Lessons",
    "8 detailed lessons"
  ],
  [
    "Assessment",
    "25-question module test"
  ],
  [
    "Primary skill",
    "Evidence-based incident coordination"
  ],
  [
    "Portfolio artifact",
    "Fictional incident-response case package"
  ]
];
const workflow = [
  {
    "step": "1",
    "title": "Prepare",
    "description": "Define fictional authority, roles, severity rules, evidence sources, playbooks, continuity, communication, and closure before an event occurs."
  },
  {
    "step": "2",
    "title": "Detect and triage",
    "description": "Preserve the original fictional signal, confirm source health, correlate independent evidence, assign confidence, and decide whether the record is operational, suspicious, or incident-related."
  },
  {
    "step": "3",
    "title": "Scope and contain",
    "description": "Identify affected fictional assets, users, identities, data, workflows, environments, and time windows while applying narrow, reversible, evidence-preserving controls."
  },
  {
    "step": "4",
    "title": "Investigate and coordinate",
    "description": "Build a fictional timeline, distinguish confirmed facts from supported conclusions, assign owners, communicate accurately, and preserve decision history."
  },
  {
    "step": "5",
    "title": "Eradicate and recover",
    "description": "Correct the fictional root cause, restore approved services in stages, validate identities and configurations, test source health, monitor, and preserve rollback."
  },
  {
    "step": "6",
    "title": "Review and improve",
    "description": "Document fictional lessons, residual risk, metrics, action owners, deadlines, governance decisions, reopen triggers, and closure evidence."
  }
];
const objectives = [
  "Explain the fictional incident-response lifecycle from readiness through closure and continuous improvement.",
  "Distinguish alerts, suspicious activity, confirmed security events, operational failures, evidence gaps, incidents, and business impacts.",
  "Build defensible fictional scope using asset, identity, data, route, service, transaction, file, source-health, and business evidence.",
  "Apply narrow fictional containment that reduces risk while preserving evidence, legitimate workflows, continuity, and rollback.",
  "Create a fictional evidence index, correlated timeline, communication record, recovery plan, post-incident review, and closure package.",
  "Use only supplied fictional evidence and never access, test, alter, identify, or publish real systems, people, credentials, logs, or private organizational records."
];
const lessons = [
  {
    "number": "I11.1",
    "title": "Incident Response Lifecycle and Readiness",
    "slug": "incident-response-lifecycle-and-readiness",
    "focus": "Build a fictional response program with purpose, authority, roles, severity rules, evidence sources, playbooks, communication, continuity, and closure standards.",
    "lab": "Create a fictional incident-response readiness charter, role matrix, evidence-source register, escalation map, and safe-lab boundary."
  },
  {
    "number": "I11.2",
    "title": "Detection, Triage, and Initial Assessment",
    "slug": "detection-triage-and-initial-assessment",
    "focus": "Separate fictional alerts, suspicious activity, confirmed security events, operational failures, evidence gaps, and possible incidents using corroborated evidence.",
    "lab": "Triage a fictional alert set and produce a defensible initial assessment with confidence, gaps, owners, and next actions."
  },
  {
    "number": "I11.3",
    "title": "Scoping, Containment, and Coordination",
    "slug": "scoping-containment-and-coordination",
    "focus": "Map fictional affected assets, users, identities, data, services, workflows, and time windows while applying narrow, reversible, evidence-preserving containment.",
    "lab": "Build a fictional scope-and-containment plan that protects legitimate school operations and avoids overbroad disruption."
  },
  {
    "number": "I11.4",
    "title": "Evidence Preservation and Timeline Building",
    "slug": "evidence-preservation-and-timeline-building",
    "focus": "Preserve fictional logs, alerts, transactions, files, identity events, source health, timestamps, ownership, and limitations in a reviewable evidence timeline.",
    "lab": "Create a fictional evidence index and correlated timeline without changing or overstating the supplied records."
  },
  {
    "number": "I11.5",
    "title": "Eradication, Recovery, and Service Restoration",
    "slug": "eradication-recovery-and-service-restoration",
    "focus": "Remove fictional root causes, restore approved services safely, validate identities and configurations, monitor for recurrence, and preserve rollback and continuity.",
    "lab": "Design a fictional staged recovery plan with positive and negative tests, source-health checks, business validation, and reopen triggers."
  },
  {
    "number": "I11.6",
    "title": "Communication, Escalation, and Documentation",
    "slug": "communication-escalation-and-documentation",
    "focus": "Write accurate fictional technical, business, leadership, support, and closure updates that separate facts, conclusions, uncertainty, impact, actions, and decisions.",
    "lab": "Produce a fictional stakeholder communication set and escalation record with privacy-aware detail and accountable owners."
  },
  {
    "number": "I11.7",
    "title": "Post-Incident Review and Lessons Learned",
    "slug": "post-incident-review-and-lessons-learned",
    "focus": "Review fictional causes, controls, evidence quality, decisions, recovery, communication, metrics, residual risk, and improvement actions without assigning blame.",
    "lab": "Create a fictional post-incident review, action register, metric correction plan, and governance follow-up."
  },
  {
    "number": "I11.8",
    "title": "Incident Response Basics Lab",
    "slug": "incident-response-basics-lab",
    "focus": "Integrate readiness, triage, scope, containment, evidence, recovery, communication, review, metrics, and closure into one fictional defensive case.",
    "lab": "Complete a fictional end-to-end incident-response case package using only supplied evidence and safe, authorized training decisions."
  }
];

export default function IncidentResponseBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Module I11
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Incident Response
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11: Incident Response Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defensive teams prepare for incidents, evaluate fictional
            alerts, build evidence-based scope, contain risk safely, preserve
            records, coordinate recovery, communicate accurately, review
            decisions, and close a case with accountable technical, business,
            monitoring, and governance evidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/incident-response-lifecycle-and-readiness`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I11.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Module Snapshot
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            What You Will Complete
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moduleSnapshot.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  {label}
                </p>

                <p className="mt-2 text-lg font-black text-cyan-100">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
            Main Question
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            How can a defensive team move from an uncertain signal to a safe,
            evidence-based, and reviewable incident decision?
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            The answer requires more than reacting to an alert. The team must
            validate sources, preserve evidence, establish scope, protect
            legitimate workflows, coordinate owners, separate fact from
            inference, restore service safely, communicate uncertainty, measure
            outcomes, and define what evidence supports closure or reopening.
          </p>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200">
            Defensive Safety Boundary
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Fictional Evidence Only
          </h2>

          <p className="mt-4 leading-8">
            Every scenario, asset, identity, event, log, alert, file, route,
            user, owner, organization, and impact record in Module I11 is
            fictional. Students will not scan, probe, access, alter, test,
            identify, or publish real systems, accounts, networks, credentials,
            private data, or incident records.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Six Steps from Readiness to Improvement
          </h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-lg font-black text-cyan-200">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Learning Objectives
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            By the End of Module I11
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>

                <p className="mt-2 leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Lessons
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Eight Detailed Lessons
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-400/60"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                        {lesson.number}
                      </span>

                      <h3 className="text-xl font-black text-white">
                        {lesson.title}
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                          Focus
                        </p>

                        <p className="mt-2 text-sm leading-6">
                          {lesson.focus}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                          Defensive Lab
                        </p>

                        <p className="mt-2 text-sm leading-6">
                          {lesson.lab}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-center font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open Lesson
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-200">
            Fictional Evidence Preview
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            The Meadowbrook Student-Support Service Case
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            Across the module, students will review a fictional mixed evidence
            set involving an unusual support-service alert, identity events,
            file and queue activity, deployment records, runtime health,
            business transactions, source-health gaps, recovery dependencies,
            containment decisions, communication drafts, and post-incident
            actions. The evidence is designed to require correlation rather than
            guesswork.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-purple-300/20 bg-slate-950/70 p-4">
              <p className="font-black text-purple-100">Confirmed facts</p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                Facts supported directly by supplied current records.
              </p>
            </div>

            <div className="rounded-xl border border-purple-300/20 bg-slate-950/70 p-4">
              <p className="font-black text-purple-100">Supported conclusions</p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                Narrow interpretations supported by several independent sources.
              </p>
            </div>

            <div className="rounded-xl border border-purple-300/20 bg-slate-950/70 p-4">
              <p className="font-black text-purple-100">Evidence gaps</p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                Missing or unreliable records that limit confidence and action.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-200">
            Portfolio Outcome
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Fictional Incident Response Case Package
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            By the end of Module I11, students will produce a portfolio-safe
            package containing a readiness charter, triage record, scope map,
            containment plan, evidence index, correlated timeline, recovery
            plan, stakeholder communication set, post-incident review, action
            register, governance dashboard, residual-risk statement, and
            closure checklist.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
                Module Assessment
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                I11 Incident Response Basics Module Test
              </h2>

              <p className="mt-4 leading-8 text-cyan-50">
                Complete a 25-question assessment covering readiness, triage,
                scope, containment, evidence, recovery, communication,
                post-incident review, metrics, residual risk, and closure.
                Choices appear first, with explanations revealed afterward.
              </p>
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-center font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Begin Module I11
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/incident-response-lifecycle-and-readiness`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I11.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}