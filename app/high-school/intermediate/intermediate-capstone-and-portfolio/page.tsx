import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;

const lessons = [
  {
    number: "I17.1",
    title: "Intermediate Knowledge Review",
    slug: "intermediate-knowledge-review",
    focus:
      "Review the full Intermediate track through networking, Linux, Windows, logs, tools, IAM, email, web, secure coding, vulnerability management, incident response, forensics, cloud, risk, SOC work, and defensive labs.",
    lab:
      "Build a fictional readiness map that separates strong skills, developing skills, evidence gaps, review priorities, practice goals, and next actions.",
  },
  {
    number: "I17.2",
    title: "Building a Defender Portfolio Artifact",
    slug: "building-a-defender-portfolio-artifact",
    focus:
      "Turn fictional defensive work into a polished artifact that demonstrates scope, evidence handling, judgment, ownership, communication, validation, privacy, and reflection.",
    lab:
      "Create a fictional portfolio artifact with a project brief, evidence register, analysis, decisions, visual support, final report, lessons learned, and portfolio-safety statement.",
  },
  {
    number: "I17.3",
    title: "Writing an Incident Report",
    slug: "writing-an-incident-report",
    focus:
      "Write a fictional incident report that separates observations, conclusions, alternate explanations, impact, decisions, actions, validation, limitations, and residual risk.",
    lab:
      "Produce a fictional incident report with document control, executive summary, scope, timeline, findings, communications, recovery, closure criteria, and appendices.",
  },
  {
    number: "I17.4",
    title: "Creating a Security Diagram",
    slug: "creating-a-security-diagram",
    focus:
      "Create clear fictional security diagrams showing systems, identities, trust boundaries, data flows, controls, evidence sources, owners, risk points, and defensive decisions.",
    lab:
      "Build a fictional architecture or incident-flow diagram with a legend, boundaries, labels, evidence references, assumptions, limitations, and reviewer notes.",
  },
  {
    number: "I17.5",
    title: "Creating a Risk Recommendation",
    slug: "creating-a-risk-recommendation",
    focus:
      "Translate fictional technical evidence into a proportionate risk recommendation with likelihood, impact, control state, business need, options, owners, deadlines, validation, and residual risk.",
    lab:
      "Write a fictional risk recommendation package with evidence, scoring rationale, response options, decision criteria, implementation plan, and success measures.",
  },
  {
    number: "I17.6",
    title: "Explaining Technical Evidence Clearly",
    slug: "explaining-technical-evidence-clearly",
    focus:
      "Explain fictional technical evidence to analysts, service owners, leadership, users, suppliers, teachers, and portfolio reviewers without changing the underlying facts.",
    lab:
      "Create multiple fictional audience summaries from one evidence set and compare detail, tone, terminology, action requests, limitations, and next-update needs.",
  },
  {
    number: "I17.7",
    title: "Intermediate Final Readiness Review",
    slug: "intermediate-final-readiness-review",
    focus:
      "Evaluate complete Intermediate readiness through knowledge, applied analysis, case boundaries, documentation, communication, portfolio quality, ethics, privacy, and safe defensive judgment.",
    lab:
      "Complete a fictional final-readiness dashboard with mastery evidence, weak-area review, test strategy, portfolio checklist, study plan, and improvement commitments.",
  },
  {
    number: "I17.8",
    title: "Intermediate Capstone Lab",
    slug: "intermediate-capstone-lab",
    focus:
      "Integrate fictional evidence from multiple defensive domains into one complete, decision-ready, portfolio-safe capstone while preserving scope, ownership, case boundaries, service continuity, and uncertainty.",
    lab:
      "Produce a fictional capstone package with charter, evidence register, timeline, diagrams, findings, risk recommendation, incident report, communications, validation, metrics, reflection, and final presentation.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Review and select evidence",
    detail:
      "Choose fictional Intermediate work that demonstrates real learning across analysis, decision-making, documentation, communication, validation, and safe defensive practice.",
  },
  {
    step: "2",
    title: "Define audience and purpose",
    detail:
      "State the fictional reader, decision need, scope, privacy boundary, level of detail, artifact type, quality standard, and success criteria.",
  },
  {
    step: "3",
    title: "Build the artifact",
    detail:
      "Organize fictional evidence, timelines, diagrams, findings, risk, recommendations, ownership, communications, validation, limitations, and reflection.",
  },
  {
    step: "4",
    title: "Check technical accuracy",
    detail:
      "Verify fictional identifiers, timestamps, source health, case boundaries, impact language, confidence, terminology, calculations, and traceability.",
  },
  {
    step: "5",
    title: "Refine communication and design",
    detail:
      "Improve fictional structure, readability, diagrams, headings, summaries, audience fit, decision usefulness, accessibility, and portfolio presentation.",
  },
  {
    step: "6",
    title: "Validate, reflect, and present",
    detail:
      "Complete fictional peer review, privacy review, final validation, reflection, readiness assessment, improvement plan, and portfolio-safe presentation.",
  },
];

const objectives = [
  "Review the complete Intermediate curriculum and identify strong skills, developing skills, evidence gaps, and final study priorities.",
  "Build a polished fictional defender portfolio artifact that demonstrates scope, evidence handling, analysis, decisions, communication, validation, and reflection.",
  "Write an accurate fictional incident report with traceable evidence, impact limits, ownership, recovery, closure criteria, and residual risk.",
  "Create clear fictional security diagrams that communicate architecture, trust boundaries, data flows, evidence sources, controls, risks, and owners.",
  "Convert fictional technical evidence into proportionate risk recommendations with options, rationale, implementation, validation, and success measures.",
  "Complete a fictional Intermediate capstone and final-readiness package suitable for practice tests, reflection, presentation, and a privacy-safe student portfolio.",
];

const evidencePreview = [
  "A fictional audit source reports delayed events while a compensating source remains healthy.",
  "A fictional supplier role retains more cloud access than current business need supports.",
  "A fictional suspicious message causes one click but no confirmed credential entry.",
  "A fictional web role reaches a restricted page while no modification is recorded.",
  "A fictional control change is completed, but effective-state validation remains open.",
  "Students must decide which records belong together, which artifacts best communicate the work, and what can be claimed confidently.",
];

const portfolioOutcomes = [
  "Intermediate knowledge and readiness map",
  "Defender portfolio artifact",
  "Professional fictional incident report",
  "Security architecture or evidence-flow diagram",
  "Risk recommendation and decision brief",
  "Technical analyst summary",
  "Leadership and service-owner summary",
  "Final readiness and study plan",
  "Intermediate capstone case package",
  "Portfolio reflection and safety statement",
];

const professionalStandards = [
  {
    title: "Evidence before certainty",
    detail:
      "Every fictional statement should distinguish observation, conclusion, alternate explanation, missing evidence, confidence, potential impact, confirmed impact, and limitation.",
  },
  {
    title: "Audience before detail",
    detail:
      "The same fictional facts should be explained differently to analysts, service owners, leadership, users, suppliers, teachers, and portfolio reviewers.",
  },
  {
    title: "Ownership before action",
    detail:
      "Every fictional recommendation should identify the correct owner, authority, priority, deadline, dependency, rollback, validation, and residual risk.",
  },
  {
    title: "Validation before closure",
    detail:
      "A fictional ticket, document, diagram, or change is not complete until the intended access, configuration, service, communication, and risk outcomes are verified.",
  },
  {
    title: "Privacy before presentation",
    detail:
      "Every portfolio artifact must use invented systems, identities, evidence, dates, organizations, incidents, messages, suppliers, and outcomes.",
  },
  {
    title: "Reflection before completion",
    detail:
      "Strong capstone work explains what was learned, what remains difficult, what changed after review, and what the student will improve next.",
  },
];

export default function IntermediateCapstoneAndPortfolioModulePage() {
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
              Module I17
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Final Capstone Module
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                I17 Intermediate Capstone and Portfolio
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Prepare for Intermediate practice tests and create
                portfolio-ready fictional defensive artifacts that demonstrate
                technical understanding, evidence-based judgment, clear
                communication, risk reasoning, validation, privacy, and
                reflection.
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
                  ["6", "Capstone Steps"],
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
              Start I17.1
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
              How Do You Prove Intermediate Defensive Readiness?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Readiness is more than remembering definitions. Students must
              connect technical evidence to scope, case boundaries, ownership,
              risk, recommendations, communication, validation, reflection, and
              a professional artifact another person can review.
            </p>
          </article>

          <article className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
              Safety Boundary
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Fully Fictional Portfolio Evidence Only
            </h2>

            <p className="mt-4 leading-8">
              Do not copy, lightly edit, upload, or expose real credentials,
              employee records, school records, company systems, private logs,
              messages, incidents, suppliers, cloud resources, source code,
              reports, diagrams, or confidential organizational information.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Capstone Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Steps from Review to Final Presentation
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.42fr_1fr]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
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
            Learning Objectives
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
            Professional Standard
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Standards for a Strong Intermediate Portfolio
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {professionalStandards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{item.title}</h3>

                <p className="mt-3 text-sm leading-6">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Lessons
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Lessons from Review to Capstone
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.14fr_1fr_0.28fr] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      {lesson.number}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                          Focus
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {lesson.focus}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Portfolio Lab
                        </p>

                        <p className="mt-2 text-sm leading-6">{lesson.lab}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.78fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Fictional Evidence Preview
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              One Capstone Evidence Set, Several Professional Artifacts
            </h2>

            <div className="mt-5 grid gap-3">
              {evidencePreview.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Capstone Goal
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Show the Complete Defensive Reasoning Chain
            </h2>

            <div className="mt-5 space-y-4 leading-7">
              <p>
                A strong fictional artifact shows what question was asked,
                which evidence was reviewed, how sources were validated, what
                conclusions were supported, who owned the decision, what action
                occurred, and how the outcome was verified.
              </p>

              <p>
                It also explains uncertainty, alternatives, privacy,
                communication choices, design decisions, reflection, and the
                next improvement.
              </p>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio Outcomes
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Artifacts You Can Complete
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioOutcomes.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
            Module Test
          </p>

          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_0.28fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">
                I17 Intermediate Capstone and Portfolio Module Test
              </h2>

              <p className="mt-4 leading-8">
                Complete 25 questions covering comprehensive Intermediate
                readiness, portfolio artifacts, evidence explanation, incident
                reports, security diagrams, risk recommendations, audience
                communication, validation, and defensive capstone judgment.
              </p>
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-purple-300 px-5 py-3 text-center font-bold text-slate-950 transition hover:bg-purple-200"
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
            Begin the Final Intermediate Module
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start I17.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>

            <Link
              href={`${trackPath}/intermediate-defensive-labs`}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous Module
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}