import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/risk-management-and-compliance`;
const previousModule = `${trackPath}/cryptography-and-key-management-concepts`;

const lessons = [
  {
    code: "A15.1",
    title: "Risk Management in Cybersecurity",
    slug: "risk-management-in-cybersecurity",
    focus:
      "Understand cybersecurity risk as a business decision involving uncertainty, assets, threats, impact, ownership, controls, and acceptable residual risk.",
    lab:
      "Build a fictional Cyber Risk Context Map connecting business services, security concerns, owners, and decision boundaries.",
    portfolio: "Cyber Risk Context Map",
  },
  {
    code: "A15.2",
    title: "Assets, Threats, Impact, and Likelihood",
    slug: "assets-threats-impact-and-likelihood",
    focus:
      "Evaluate risk using assets, threat events, business impact, likelihood, uncertainty, dependencies, and evidence without pretending risk scores are perfect predictions.",
    lab:
      "Create a fictional Risk Analysis Worksheet for business services with evidence-backed impact and likelihood reasoning.",
    portfolio: "Risk Analysis Worksheet",
  },
  {
    code: "A15.3",
    title: "Risk Registers and Ownership",
    slug: "risk-registers-and-ownership",
    focus:
      "Turn scattered security concerns into a structured risk register with owners, status, evidence, treatment, due dates, and review triggers.",
    lab:
      "Build a fictional Cybersecurity Risk Register with accountable risk and control owners.",
    portfolio: "Cybersecurity Risk Register",
  },
  {
    code: "A15.4",
    title: "Security Controls and Control Testing",
    slug: "security-controls-and-control-testing",
    focus:
      "Connect risks to preventive, detective, corrective, recovery, administrative, technical, and physical controls, then evaluate whether those controls are designed and operating as intended.",
    lab:
      "Create a fictional Control Effectiveness Review using safe evidence, expected outcomes, owners, and remediation.",
    portfolio: "Control Effectiveness Review",
  },
  {
    code: "A15.5",
    title: "Compliance Framework Concepts",
    slug: "compliance-framework-concepts",
    focus:
      "Understand frameworks, standards, control catalogs, policy mappings, and compliance evidence without treating compliance as identical to security.",
    lab:
      "Map fictional security requirements to a Framework and Control Mapping Register.",
    portfolio: "Framework and Control Mapping Register",
  },
  {
    code: "A15.6",
    title: "Audit Evidence and Documentation",
    slug: "audit-evidence-and-documentation",
    focus:
      "Evaluate evidence quality, freshness, attribution, completeness, repeatability, and traceability for audits and internal reviews.",
    lab:
      "Build a fictional Audit Evidence Register with strong, weak, stale, missing, and contradictory evidence examples.",
    portfolio: "Audit Evidence Register",
  },
  {
    code: "A15.7",
    title: "Risk Acceptance and Exceptions",
    slug: "risk-acceptance-and-exceptions",
    focus:
      "Distinguish remediation, mitigation, transfer, avoidance, acceptance, exceptions, compensating controls, residual risk, expiry, and risk-owner accountability.",
    lab:
      "Create a fictional Risk Acceptance and Exception Register with bounded approval and closure criteria.",
    portfolio: "Risk Acceptance and Exception Register",
  },
  {
    code: "A15.8",
    title: "Third-Party Risk Concepts",
    slug: "third-party-risk-concepts",
    focus:
      "Review supplier, vendor, partner, and service-provider dependencies using data access, criticality, contractual expectations, evidence, concentration risk, and exit planning.",
    lab:
      "Build a fictional Third-Party Risk Review covering suppliers, sponsors, evidence, dependencies, and treatment decisions.",
    portfolio: "Third-Party Risk Review",
  },
  {
    code: "A15.9",
    title: "Communicating Risk to Leaders",
    slug: "communicating-risk-to-leaders",
    focus:
      "Translate technical findings into decision-ready language using business impact, uncertainty, options, tradeoffs, timelines, ownership, and recommended action.",
    lab:
      "Create a fictional Leadership Risk Brief that turns a detailed risk register into a concise executive recommendation.",
    portfolio: "Leadership Risk Brief",
  },
  {
    code: "A15.10",
    title: "Risk Decision Lab",
    slug: "risk-decision-lab",
    focus:
      "Integrate assets, threat events, impact, likelihood, controls, evidence, exceptions, third parties, ownership, and leadership communication into one enterprise risk decision.",
    lab:
      "Produce the final Risk Register and Leadership Recommendation for a fictional organization.",
    portfolio: "Risk Register and Leadership Recommendation",
  },
];

const outcomes = [
  "Explain cybersecurity risk in business terms using assets, threats, impact, likelihood, uncertainty, controls, and ownership.",
  "Build and maintain a structured cyber risk register with decision states, treatment, evidence, owners, and review triggers.",
  "Evaluate security controls using design intent, implementation state, operating evidence, control gaps, and remediation.",
  "Connect security work to compliance frameworks, audits, policy mappings, exceptions, and evidence without confusing compliance with complete security.",
  "Assess third-party and supplier risk using dependency, data access, criticality, sponsorship, evidence, concentration, and exit considerations.",
  "Communicate risk to leaders through concise recommendations that explain impact, uncertainty, treatment options, residual risk, ownership, and next actions.",
];

const workflow = [
  {
    step: "Frame the decision",
    description:
      "Identify the business service, asset, data, dependency, stakeholder, decision scope, and reason the risk review exists.",
    evidence:
      "Business context, service inventory, data classification, owner, architecture notes.",
  },
  {
    step: "Analyze the risk",
    description:
      "Describe the threat event, exposure condition, impact, likelihood, uncertainty, and existing control environment.",
    evidence:
      "Risk scenario, dependency map, incident history, control evidence, architecture findings.",
  },
  {
    step: "Evaluate controls and evidence",
    description:
      "Determine which controls reduce the risk and whether evidence shows those controls are designed and operating as intended.",
    evidence:
      "Control owner, expected outcome, test evidence, monitoring, audit evidence, source freshness.",
  },
  {
    step: "Choose a treatment",
    description:
      "Recommend remediation, mitigation, transfer, avoidance, acceptance, or another governed treatment based on business need and residual risk.",
    evidence:
      "Treatment options, cost/effort, business impact, exception state, risk-owner decision.",
  },
  {
    step: "Communicate and review",
    description:
      "Record ownership, due dates, decision state, residual risk, leadership recommendation, evidence requirements, and triggers that reopen the risk.",
    evidence:
      "Risk register, leadership brief, exception expiry, review cadence, closure evidence.",
  },
];

const roles = [
  ["Security Risk Analyst", "Frames risk scenarios, evaluates evidence, maintains risk registers, and supports treatment decisions."],
  ["Security Architect", "Explains technical control design, dependencies, trust boundaries, and remediation options."],
  ["Governance / Compliance Analyst", "Maps controls to policy and framework requirements, evidence, audits, and exceptions."],
  ["Control Owner", "Operates the security control, maintains evidence, and remediates control weaknesses."],
  ["Risk Owner", "Makes the business decision about residual risk and whether treatment or acceptance is appropriate."],
  ["Third-Party Risk Analyst", "Evaluates supplier dependencies, evidence, sponsorship, contracts, concentration, and exit considerations."],
  ["Internal Auditor", "Assesses whether evidence supports the stated control objective and whether governance processes are functioning."],
  ["Executive / Business Leader", "Uses concise risk information to prioritize resources, deadlines, treatment options, and accepted residual risk."],
];

const evidencePreview = [
  {
    id: "RSK-01",
    service: "Student Services Portal",
    scenario: "Sensitive student-support service depends on current identity, application, and database controls.",
    impact: "High",
    likelihood: "Medium",
    controls: "Strong authentication, workload authorization, database encryption, monitoring, recovery",
    evidence: "Current control review + current recovery evidence",
    owner: "Student Services Product Owner",
    decision: "Monitor",
  },
  {
    id: "RSK-02",
    service: "Legacy Reporting Service",
    scenario: "Legacy application uses broad trust relationships and has incomplete modernization.",
    impact: "High",
    likelihood: "Medium-High",
    controls: "Restricted network scope, modernization exception, partial monitoring",
    evidence: "Current exception + partial legacy inventory",
    owner: "Reporting Product Owner",
    decision: "Treat",
  },
  {
    id: "RSK-03",
    service: "Partner Scheduling Integration",
    scenario: "External partner certificate lifecycle is approaching renewal and service depends on timely transition.",
    impact: "Medium-High",
    likelihood: "Medium",
    controls: "Partner sponsor, certificate monitoring, renewal workflow",
    evidence: "Current certificate + renewal ticket",
    owner: "Integration Owner",
    decision: "Treat / Monitor",
  },
  {
    id: "RSK-04",
    service: "Recovery Backup Repository",
    scenario: "Backup encryption is current but recovery evidence becomes stale if full restore testing is missed.",
    impact: "High",
    likelihood: "Low-Medium",
    controls: "Encrypted backup storage, protected replication, restore testing",
    evidence: "Current key inventory + restore-test status",
    owner: "Resilience Team",
    decision: "Monitor / Treat if overdue",
  },
  {
    id: "RSK-05",
    service: "Critical SaaS Provider",
    scenario: "A major business workflow depends heavily on one external provider.",
    impact: "High",
    likelihood: "Medium",
    controls: "Contract review, security evidence, continuity planning, exit strategy",
    evidence: "Supplier assessment + continuity plan",
    owner: "Business Service Owner",
    decision: "Mitigate",
  },
  {
    id: "RSK-06",
    service: "Analytics Export Workflow",
    scenario: "Sensitive data exports require both technical protection and business approval.",
    impact: "High",
    likelihood: "Low-Medium",
    controls: "Export authorization, encrypted staging, protected transfer, signed manifest",
    evidence: "Current export control evidence",
    owner: "Analytics Product Owner",
    decision: "Monitor",
  },
];

const portfolioSections = [
  ["Executive Summary", "Business context, top risks, overall risk posture, top treatment priorities, Accepted Risks, and leadership recommendation."],
  ["Risk Register", "Risk IDs, services, scenarios, impact, likelihood, evidence, owners, controls, treatment, residual risk, status, and review triggers."],
  ["Control Effectiveness", "Control objectives, design state, operating state, evidence quality, gaps, remediation, and owners."],
  ["Compliance and Audit Mapping", "Policy/standard mappings, framework relationships, evidence ownership, freshness, exceptions, and audit notes."],
  ["Exception and Accepted Risk Register", "Scope, reason, compensating controls, risk owner, expiry, residual risk, review cadence, and closure criteria."],
  ["Third-Party Risk Review", "Supplier criticality, data access, dependencies, evidence, sponsor, contractual expectations, concentration, continuity, and exit planning."],
  ["Leadership Recommendation", "Decision-ready summary of what should be treated now, what can be monitored, what can be accepted, and what must block approval."],
];

const decisionStates = [
  ["Monitor", "Current risk and controls are acceptable, but evidence or business conditions require routine observation."],
  ["Treat", "Risk should be reduced through a defined remediation or mitigation plan."],
  ["Conditional", "The business decision can continue only under specific time-bounded conditions."],
  ["Accepted Risk", "An authorized risk owner formally accepts the residual risk for a defined scope and period."],
  ["Blocked", "The risk or control weakness is too significant for approval under current evidence."],
  ["Closed", "Remediation and validation evidence show the risk was resolved or reduced to the approved target state."],
];

function LessonCard({
  code,
  title,
  slug,
  focus,
  lab,
  portfolio,
}: {
  code: string;
  title: string;
  slug: string;
  focus: string;
  lab: string;
  portfolio: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
          {code}
        </span>
        <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
          Portfolio Artifact
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
        {title}
      </h3>

      <div className="mt-5 grid gap-4">
        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
            Focus
          </p>
          <p className="mt-2 text-sm leading-7 text-blue-50">{focus}</p>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
            Defensive Lab
          </p>
          <p className="mt-2 text-sm leading-7 text-emerald-50">{lab}</p>
        </div>

        <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
            Adds to portfolio
          </p>
          <p className="mt-2 text-sm font-black leading-7 text-purple-50">
            {portfolio}
          </p>
        </div>
      </div>

      <Link
        href={`${modulePath}/${slug}`}
        className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Open {code}
      </Link>
    </article>
  );
}

export default function RiskManagementAndComplianceModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Module A15
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Governance and Automation
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Module 15
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Management and Compliance
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cybersecurity teams do more than identify technical weaknesses.
            They help organizations decide what matters, how serious a risk is,
            which controls reduce it, who owns the decision, what evidence is
            trustworthy, and which actions should happen first.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            A15 teaches defensive risk analysis using fictional organizations,
            synthetic evidence, safe control reviews, governance records, and
            business-focused decision making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/risk-management-in-cybersecurity`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A15.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Advanced Track
            </Link>

            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A14
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Lessons", "10", "A15.1 through A15.10"],
            ["Module Test", "25 Q", "One Advanced assessment"],
            ["Portfolio Outcome", "1", "Risk Register and Leadership Recommendation"],
            ["Primary Lens", "Risk", "Business decisions backed by security evidence"],
          ].map(([label, value, note]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-3xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Main Question
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            How should security teams turn technical uncertainty into a business decision?
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-cyan-50">
            Risk management is not a contest to create the most dramatic score.
            The goal is to describe uncertainty clearly, connect it to business
            impact, evaluate the controls that already exist, identify what
            evidence supports the conclusion, and recommend a treatment that an
            accountable owner can act on.
          </p>
        </section>

        <section className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6 md:p-8 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety and Ethics Boundary
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Risk analysis uses authorized evidence—not unsafe testing
          </h2>
          <p className="mt-5 leading-8">
            Every A15 scenario is fictional and defensive. Students evaluate
            synthetic risk records, architecture findings, control evidence,
            audits, exception records, supplier information, and leadership
            decisions. No lesson requires exploiting vulnerabilities, scanning
            real systems, collecting credentials, accessing private
            organizational information, bypassing controls, or testing
            third-party systems without authorization.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            A Five-Part Risk Decision Pattern
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            This is a module-level orientation, not a rigid pattern every lesson
            must repeat. Individual lessons will use the structure that best
            fits the topic: risk scenarios, registers, control reviews, evidence
            analysis, exception decisions, supplier reviews, or leadership
            communication.
          </p>

          <div className="mt-6 grid gap-5">
            {workflow.map((item, index) => (
              <article
                key={item.step}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.step}
                    </h3>
                    <p className="mt-2 leading-7 text-purple-100">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Evidence: {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
            Learning Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Six Outcomes for A15
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <article
                key={outcome}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-blue-50">{outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
            Professional Roles
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Who Uses These Skills?
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {roles.map(([role, contribution]) => (
              <article
                key={role}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{role}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {contribution}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
            Lesson Map
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Ten Advanced Lessons
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Each lesson adds one professional artifact. By A15.10, those
            artifacts combine into a complete Risk Register and Leadership
            Recommendation.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.code} {...lesson} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Northbridge Risk Review Snapshot
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    Decision: {item.decision}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Risk scenario", item.scenario],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Existing controls", item.controls],
                    ["Evidence", item.evidence],
                    ["Risk owner", item.owner],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
            Decision Language
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Risk States Should Lead to Action
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionStates.map(([state, meaning]) => (
              <article
                key={state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{state}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {meaning}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            Portfolio Outcome
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Risk Register and Leadership Recommendation
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-emerald-50">
            A15 culminates in a professional-style risk package that shows not
            only what the risks are, but why they matter, what evidence supports
            them, which controls reduce them, who owns the decisions, what
            exceptions exist, which third parties matter, and what leaders
            should do next.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {portfolioSections.map(([section, content]) => (
              <article
                key={section}
                className="rounded-2xl border border-emerald-300/20 bg-slate-950/40 p-5"
              >
                <h3 className="font-black text-emerald-50">{section}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {content}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/25 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            A15 Risk Management and Compliance Test
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-cyan-50">
            After all ten lessons, complete a 25-question assessment covering
            risk vocabulary, assets, threats, impact, likelihood, risk
            registers, control testing, compliance concepts, audit evidence,
            exceptions, third-party risk, leadership communication, and final
            risk decisions.
          </p>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Open A15 Module Test
          </Link>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Module Navigation
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Continue the Advanced Track
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A14 Cryptography
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Advanced Track
            </Link>

            <Link
              href={`${modulePath}/risk-management-in-cybersecurity`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Next: A15.1
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}