import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-defensive-labs`;

const lessons = [
  {
    number: "I16.1",
    title: "Fake Log Investigation Lab",
    slug: "fake-log-investigation-lab",
    focus:
      "Analyze fictional authentication, endpoint, network, service, and source-health records while separating direct observations, supported conclusions, alternate explanations, missing evidence, and unsupported claims.",
    lab:
      "Build a fictional log-investigation package with a scope statement, evidence register, normalized timeline, source-health review, findings, confidence, limitations, owners, and next actions.",
  },
  {
    number: "I16.2",
    title: "Fake Phishing Triage Lab",
    slug: "fake-phishing-triage-lab",
    focus:
      "Review fictional email headers, sender context, message language, links, attachment descriptions, identity activity, reporting history, and user impact without opening real suspicious content.",
    lab:
      "Create a fictional phishing-triage worksheet, message disposition, evidence matrix, user guidance, escalation path, communication record, and defensive improvement plan.",
  },
  {
    number: "I16.3",
    title: "Fake IAM Permission Review Lab",
    slug: "fake-iam-permission-review-lab",
    focus:
      "Evaluate fictional identities, roles, group membership, privileged access, service accounts, supplier access, exceptions, approvals, business need, and separation of duties.",
    lab:
      "Produce a fictional permission-review package with an identity inventory, entitlement matrix, owner decisions, access changes, exceptions, validation, residual risk, and review dates.",
  },
  {
    number: "I16.4",
    title: "Fake Web Defense Review Lab",
    slug: "fake-web-defense-review-lab",
    focus:
      "Assess fictional web alerts, application behavior, authentication records, input-handling evidence, security headers, configuration, source health, business context, and defensive controls.",
    lab:
      "Build a fictional web-defense review with evidence-limited findings, owner questions, monitoring improvements, secure-coding recommendations, validation, and safe communication.",
  },
  {
    number: "I16.5",
    title: "Fake Cloud Misconfiguration Review Lab",
    slug: "fake-cloud-misconfiguration-review-lab",
    focus:
      "Review fictional cloud identities, storage policies, network exposure, logging, encryption concepts, resource ownership, changes, suppliers, shared responsibility, and monitoring gaps.",
    lab:
      "Create a fictional cloud-misconfiguration case with scope, evidence, effective-access review, rollback decision, owner map, source-health checks, validation, and residual risk.",
  },
  {
    number: "I16.6",
    title: "Fake Incident Response Tabletop",
    slug: "fake-incident-response-tabletop",
    focus:
      "Coordinate a fictional incident-response scenario through readiness, detection, triage, declaration criteria, containment concepts, recovery, communication, evidence preservation, and lessons learned.",
    lab:
      "Complete a fictional tabletop package with inject decisions, authority, actions, service impact, communications, handoffs, recovery validation, closure criteria, and improvement actions.",
  },
  {
    number: "I16.7",
    title: "Writing a Defensive Report",
    slug: "writing-a-defensive-report",
    focus:
      "Turn fictional technical evidence into accurate analyst notes, case findings, owner requests, leadership summaries, recommendations, limitations, and portfolio-safe defensive reports.",
    lab:
      "Write a fictional professional report with an executive summary, scope, methods, evidence, findings, alternatives, risk, recommendations, validation, limitations, and appendices.",
  },
  {
    number: "I16.8",
    title: "Intermediate Multi-Step Lab",
    slug: "intermediate-multi-step-lab",
    focus:
      "Integrate fictional logs, alerts, phishing, IAM, web, cloud, incident response, reporting, communication, metrics, ownership, authority, validation, and continuous improvement.",
    lab:
      "Complete a fictional multi-stage defensive investigation and produce one decision-ready case package and portfolio artifact.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Confirm scope and safety",
    detail:
      "Define the fictional systems, identities, services, suppliers, data, time window, approved evidence, privacy limits, authority, and decisions allowed.",
  },
  {
    step: "2",
    title: "Validate evidence quality",
    detail:
      "Check fictional source health, timestamps, parsing, ownership, coverage, completeness, duplicates, delays, conflicts, and known blind spots.",
  },
  {
    step: "3",
    title: "Analyze and prioritize",
    detail:
      "Compare fictional facts with context, business criticality, active exposure, expected behavior, alternate explanations, confidence, and urgency.",
  },
  {
    step: "4",
    title: "Decide and document",
    detail:
      "Record fictional findings, evidence references, owners, actions, authority, deadlines, rollback, communications, limitations, and residual risk.",
  },
  {
    step: "5",
    title: "Coordinate and communicate",
    detail:
      "Route fictional technical, service, supplier, risk, incident, leadership, and handoff decisions through the correct approved roles.",
  },
  {
    step: "6",
    title: "Validate and improve",
    detail:
      "Confirm fictional security outcome, business function, source health, control operation, owner signoff, closure criteria, metrics, and follow-up improvements.",
  },
];

const objectives = [
  "Analyze fictional logs and alerts through source health, timelines, identity, assets, services, behavior, confidence, and evidence limits.",
  "Triage fictional phishing safely without opening real suspicious links, attachments, files, accounts, messages, or private evidence.",
  "Review fictional identity and access permissions using business need, least privilege, ownership, approvals, exceptions, validation, and residual risk.",
  "Evaluate fictional web and cloud defensive evidence while separating configuration risk, possible exposure, confirmed impact, missing evidence, and owner decisions.",
  "Coordinate a fictional incident-response tabletop through authority, containment concepts, service continuity, communication, recovery, closure, and lessons learned.",
  "Write accurate fictional defensive reports and combine multiple evidence sources into a complete portfolio-ready investigation package.",
];

const evidencePreview = [
  "A fictional supplier identity accessed a confidential support service after its documented exception expired.",
  "A fictional email message used urgent language and an unfamiliar sign-in link, but no attachment was opened.",
  "A fictional web alert occurred during approved maintenance while one supporting source was delayed.",
  "A fictional cloud storage policy changed outside the approved window, but data access is not confirmed.",
  "A fictional critical audit source stopped reporting for thirty-five minutes while compensating evidence remained available.",
  "The records require separate owners, priorities, actions, confidence statements, validation steps, and evidence-limited conclusions.",
];

const portfolioOutcomes = [
  "Fake log investigation package",
  "Phishing triage and reporting worksheet",
  "IAM permission and exception review",
  "Web defense evidence review",
  "Cloud misconfiguration assessment",
  "Incident response tabletop record",
  "Professional defensive report",
  "Evidence and decision register",
  "Leadership and technical summaries",
  "Intermediate multi-step lab portfolio artifact",
];

export default function IntermediateDefensiveLabsModulePage() {
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
              Module I16
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Applied Defensive Labs
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                I16 Intermediate Defensive Labs
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Practice safe, fictional defender tasks across logs, phishing,
                identity and access, web security, cloud configuration,
                incident response, written reporting, and multi-step defensive
                analysis.
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
              Start I16.1
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
              How Do Defenders Turn Mixed Evidence into Safe, Actionable Work?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Applied defensive analysis requires more than spotting a warning
              sign. Students must validate sources, define scope, compare
              evidence, preserve uncertainty, assign the correct owner, choose
              proportionate action, communicate clearly, and prove the result.
            </p>
          </article>

          <article className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
              Safety Boundary
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Fictional Evidence and Defensive Decisions Only
            </h2>

            <p className="mt-4 leading-8">
              Use only the fictional logs, messages, identities, permissions,
              systems, websites, cloud resources, suppliers, cases, incidents,
              and reports supplied in the lessons. Never open real suspicious
              links or files, request credentials, access private systems, or
              expose school, employee, company, supplier, or incident data.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Lab Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Steps from Lab Scope to Validated Improvement
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
            Eight Intermediate Defensive Labs
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
              One Shift, Several Defensive Questions
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
              The safest approach is to separate the records, validate each
              source, assign the correct owner, preserve limitations, and avoid
              combining unrelated evidence into one unsupported incident claim.
            </div>
          </article>

          <article className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
              Professional Standard
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Every Lab Must Produce a Reviewable Decision Trail
            </h2>

            <p className="mt-4 leading-8">
              Another authorized reviewer should be able to follow the scope,
              evidence, source health, timeline, findings, alternatives,
              confidence, owners, actions, authority, communications,
              validation, residual risk, and closure without guessing.
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
            I16 Intermediate Defensive Labs Module Test
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            After all eight labs, complete one exact twenty-five-question
            module test covering applied defensive analysis using fictional
            logs, alerts, phishing, IAM, web, cloud, incident response, written
            reports, evidence limits, ownership, validation, and improvement.
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
            Begin Module I16
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start I16.1
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