import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/security-policies-and-risk`;

const lessons = [
  {
    "number": "I14.1",
    "title": "Security Governance and Policy Foundations",
    "slug": "security-governance-and-policy-foundations",
    "focus": "Understand how fictional organizations connect mission, leadership, governance, policy ownership, accountability, ethics, and security responsibilities.",
    "lab": "Build a fictional governance map showing decision owners, policy owners, control owners, reviewers, exceptions, and escalation paths."
  },
  {
    "number": "I14.2",
    "title": "Risk Identification and Assessment",
    "slug": "risk-identification-and-assessment",
    "focus": "Identify fictional assets, threats, vulnerabilities, exposures, dependencies, control gaps, uncertainty, and business consequences.",
    "lab": "Create a fictional risk register using evidence, likelihood, impact, confidence, assumptions, owners, and review dates."
  },
  {
    "number": "I14.3",
    "title": "Asset, Data, and Business Impact Analysis",
    "slug": "asset-data-and-business-impact-analysis",
    "focus": "Connect fictional systems, data classes, services, users, dependencies, recovery needs, criticality, and mission impact.",
    "lab": "Build a fictional asset and business-impact map with owners, classifications, recovery priorities, and dependency chains."
  },
  {
    "number": "I14.4",
    "title": "Risk Treatment and Control Selection",
    "slug": "risk-treatment-and-control-selection",
    "focus": "Compare fictional risk avoidance, reduction, transfer, acceptance, and monitoring while selecting proportionate controls.",
    "lab": "Design a fictional treatment plan with preventive, detective, corrective, recovery, governance, and compensating controls."
  },
  {
    "number": "I14.5",
    "title": "Security Standards, Procedures, and Exceptions",
    "slug": "security-standards-procedures-and-exceptions",
    "focus": "Distinguish policy, standard, procedure, guideline, baseline, exception, waiver, and approval records.",
    "lab": "Create a fictional policy hierarchy and an exception record with scope, reason, controls, residual risk, expiration, and removal plan."
  },
  {
    "number": "I14.6",
    "title": "Third-Party and Supply Chain Risk",
    "slug": "third-party-and-supply-chain-risk",
    "focus": "Evaluate fictional vendors, partners, service providers, software dependencies, data sharing, access, monitoring, contracts, and exit planning.",
    "lab": "Build a fictional third-party risk review with due diligence, evidence, access boundaries, incident duties, monitoring, and offboarding."
  },
  {
    "number": "I14.7",
    "title": "Security Metrics, Reporting, and Review",
    "slug": "security-metrics-reporting-and-review",
    "focus": "Design fictional metrics that connect security evidence, control health, risk reduction, ownership, trends, limitations, and decisions.",
    "lab": "Create a fictional leadership risk report with technical measures, business meaning, confidence, limits, actions, and review cadence."
  },
  {
    "number": "I14.8",
    "title": "Security Policies and Risk Lab",
    "slug": "security-policies-and-risk-lab",
    "focus": "Integrate governance, assets, risk assessment, treatment, policies, exceptions, third parties, metrics, and communication.",
    "lab": "Complete a fictional risk-governance case and produce a portfolio-ready policy and risk package."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the decision",
    "detail": "State the fictional business question, scope, authority, owners, time window, evidence sources, privacy limits, and expected outcome."
  },
  {
    "step": "2",
    "title": "Map assets and dependencies",
    "detail": "Identify fictional people, systems, data, services, suppliers, locations, recovery needs, and critical business relationships."
  },
  {
    "step": "3",
    "title": "Identify risk conditions",
    "detail": "Separate fictional threats, vulnerabilities, exposure, control gaps, uncertainty, assumptions, and missing evidence."
  },
  {
    "step": "4",
    "title": "Evaluate likelihood and impact",
    "detail": "Use fictional evidence, business context, control health, exposure, history, dependency, and confidence to rank risk."
  },
  {
    "step": "5",
    "title": "Select treatment and controls",
    "detail": "Choose fictional avoidance, reduction, transfer, acceptance, or monitoring with proportionate preventive, detective, corrective, and recovery controls."
  },
  {
    "step": "6",
    "title": "Document policy and ownership",
    "detail": "Assign fictional policy, control, asset, data, third-party, exception, review, and escalation owners."
  },
  {
    "step": "7",
    "title": "Validate and communicate",
    "detail": "Confirm fictional effectiveness, residual risk, evidence limits, metrics, leadership decisions, and approved communication."
  },
  {
    "step": "8",
    "title": "Review and improve",
    "detail": "Track fictional changes, incidents, exceptions, supplier updates, control failures, lessons learned, and scheduled reassessment."
  }
];
const objectives = [
  "Explain the relationship among fictional governance, policy, standards, procedures, controls, risk ownership, and leadership accountability.",
  "Create evidence-based fictional risk assessments that separate observations, assumptions, alternatives, confidence, limitations, and missing information.",
  "Connect fictional assets, data, services, suppliers, dependencies, criticality, recovery needs, and business impact.",
  "Compare fictional risk treatment choices and select proportionate controls with named owners, validation, monitoring, and residual-risk decisions.",
  "Build portfolio-safe fictional policy, exception, third-party, metrics, and risk-reporting artifacts for technical and leadership audiences.",
  "Complete an integrated fictional policies-and-risk case without using any real private data, company systems, or confidential records."
];
const evidencePreview = [
  "A fictional vendor retains access after a project ends.",
  "A critical service has no confirmed recovery owner.",
  "An exception expired but the control gap remains.",
  "A risk dashboard shows a high score, but evidence confidence is only medium.",
  "A policy requires annual review, but the last approval is older than the stated cycle.",
  "No supplied evidence supports a confirmed incident or data disclosure."
];
const portfolioOutcomes = [
  "Governance and responsibility matrix",
  "Asset, data, service, and dependency register",
  "Business-impact and recovery-priority analysis",
  "Evidence-based risk register",
  "Risk treatment and control-selection plan",
  "Policy, standard, procedure, and guideline hierarchy",
  "Exception and residual-risk register",
  "Third-party and supply-chain risk review",
  "Security metrics and leadership reporting package",
  "Integrated portfolio-safe risk-governance case"
];

export default function SecurityPoliciesAndRiskModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.13),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_54%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-purple-200">
              Module I14
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              8 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14 Security Policies and Risk
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional organizations turn security evidence into
            governance, policies, standards, procedures, risk decisions,
            third-party oversight, measurable controls, leadership reporting,
            and accountable improvement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/security-governance-and-policy-foundations`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I14.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              Module snapshot
            </p>
            <p className="mt-3 text-3xl font-black text-white">8 Lessons</p>
            <p className="mt-2 text-sm leading-6 text-cyan-50">
              Governance, risk, assets, treatment, policies, suppliers,
              metrics, and an integrated lab.
            </p>
          </article>

          <article className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
              Final assessment
            </p>
            <p className="mt-3 text-3xl font-black text-white">25 Questions</p>
            <p className="mt-2 text-sm leading-6 text-purple-50">
              One complete module test with hidden answers and explanations.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Portfolio outcome
            </p>
            <p className="mt-3 text-3xl font-black text-white">10 Artifacts</p>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              A fictional governance, policy, risk, supplier, and reporting package.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Main Question
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            How Should an Organization Turn Uncertainty into an Accountable Security Decision?
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-300">
            Security policy and risk work is not a search for perfect
            certainty. It is a disciplined process for defining the decision,
            identifying assets and dependencies, gathering evidence, evaluating
            likelihood and impact, choosing treatment, assigning ownership,
            documenting exceptions, validating controls, communicating limits,
            and reviewing the decision as conditions change.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black text-yellow-100">
              Safety and privacy boundary
            </p>
            <p className="mt-2 leading-7">
              Every organization, policy, vendor, risk record, incident,
              account, identity, system, data set, contract, metric, owner, and
              decision in this module is fictional. Do not use real private
              company data, school records, credentials, contracts, internal
              policies, or confidential risk information.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Workflow
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Eight Steps from Question to Reviewable Risk Decision
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.12fr_0.38fr_1fr]"
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
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Learning Objectives
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
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
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Lesson Path
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Complete I14.1 through I14.8 in Order
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                      Lesson {index + 1} of 8
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      {lesson.number} {lesson.title}
                    </h3>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open Lesson
                  </Link>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-6">{lesson.focus}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Lab output
                    </p>
                    <p className="mt-2 text-sm leading-6">{lesson.lab}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Fictional Evidence Preview
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            The Northbridge Risk-Governance Case
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            Throughout Module I14, you will analyze a fictional organization
            that must update policy, clarify ownership, review a vendor,
            evaluate an expired exception, prioritize recovery risk, and report
            uncertainty to leadership without overstating incidents or impact.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-sm leading-6 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Portfolio Outcome
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Build a Fictional Security Policy and Risk Package
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            Each lesson contributes one or more artifacts. By the end of the
            module, you should have a complete fictional package that shows how
            evidence, business context, policy ownership, control design,
            exceptions, suppliers, metrics, and leadership decisions connect.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioOutcomes.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-200">
            Final Assessment
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            I14 Security Policies and Risk Module Test
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            After completing all eight lessons, take the exact 25-question
            module test. The assessment will cover governance, asset and data
            impact, risk identification, treatment, control selection, policy
            hierarchy, exceptions, suppliers, metrics, reporting, and
            integrated risk decisions.
          </p>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
          >
            Open Module Test
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Begin Security Policies and Risk
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/security-governance-and-policy-foundations`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I14.1
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