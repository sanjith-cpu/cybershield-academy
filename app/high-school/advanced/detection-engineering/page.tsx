import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/detection-engineering`;
const previousModule = `${trackPath}/advanced-networking-defense`;
const nextModule = `${trackPath}/siem-and-alert-triage-concepts`;

const lessons = [
  {
    number: "A5.1",
    title: "What Detection Engineering Means",
    slug: "what-detection-engineering-means",
    summary:
      "Define detection engineering as a professional defensive discipline that turns mission risks, defender questions, data sources, behavior hypotheses, logic, testing, tuning, documentation, ownership, and lifecycle review into maintainable detection capabilities.",
    skills: [
      "Distinguish detection engineering from alert monitoring alone",
      "Connect detections to mission, assets, identities, services, and risks",
      "Separate observation, evidence, hypothesis, logic, alert, triage, and response",
      "Document detection purpose, owner, assumptions, limits, and review triggers",
    ],
    portfolio:
      "Create a fictional detection-engineering charter with mission questions, stakeholders, scope, evidence boundaries, and lifecycle responsibilities.",
  },
  {
    number: "A5.2",
    title: "Data Sources for Detection",
    slug: "data-sources-for-detection",
    summary:
      "Examine fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, physical-context, and source-health data as evidence inputs with different strengths, gaps, privacy limits, ownership, and failure modes.",
    skills: [
      "Map defender questions to the strongest available fictional sources",
      "Evaluate provenance, freshness, completeness, timing, schema, and coverage",
      "Recognize blind spots, duplication, transformation, and correlation limits",
      "Design privacy-aware source inventories and health requirements",
    ],
    portfolio:
      "Build a fictional detection data-source catalog, provenance map, health matrix, privacy plan, and coverage-gap register.",
  },
  {
    number: "A5.3",
    title: "Detection Logic Concepts",
    slug: "detection-logic-concepts",
    summary:
      "Study how fictional detection logic combines conditions, sequences, counts, time windows, relationships, allow context, exclusions, confidence, severity, source health, and evidence requirements without turning conceptual training into operational attack guidance.",
    skills: [
      "Translate defender questions into conceptual detection conditions",
      "Compare single-event, sequence, threshold, relationship, and state logic",
      "Document assumptions, required fields, missing-data behavior, and limits",
      "Evaluate logic quality before deciding alert severity or prevention",
    ],
    portfolio:
      "Produce a fictional detection-logic design sheet with hypotheses, conditions, windows, exclusions, source requirements, and validation criteria.",
  },
  {
    number: "A5.4",
    title: "Behavior-Based Detection Thinking",
    slug: "behavior-based-detection-thinking",
    summary:
      "Learn to reason about fictional behavior patterns across identity, device, service, destination, time, sequence, frequency, privilege, change, peer context, baselines, and mission impact rather than relying only on static indicators.",
    skills: [
      "Define expected and unusual fictional behavior contextually",
      "Use identity, service, destination, sequence, time, and peer relationships",
      "Separate rare behavior from unauthorized or harmful behavior",
      "Write behavior hypotheses with alternatives, confidence, and evidence limits",
    ],
    portfolio:
      "Create a fictional behavior-detection hypothesis library and expected-versus-unusual behavior matrix.",
  },
  {
    number: "A5.5",
    title: "False Positives and False Negatives",
    slug: "false-positives-and-false-negatives",
    summary:
      "Evaluate how fictional detections can alert on acceptable activity, miss meaningful conditions, overfit training data, rely on unhealthy sources, or create hidden coverage gaps—and how defenders review these outcomes responsibly.",
    skills: [
      "Distinguish false positive, false negative, expected alert, and unknown outcome",
      "Identify data, logic, context, threshold, coverage, and labeling causes",
      "Balance noise reduction with missed-condition risk",
      "Document evidence, impact, confidence, review, and corrective action",
    ],
    portfolio:
      "Build a fictional detection-quality register with false-positive reviews, missed-condition reviews, root-cause hypotheses, and improvement actions.",
  },
  {
    number: "A5.6",
    title: "Detection Tuning and Context",
    slug: "detection-tuning-and-context",
    summary:
      "Design fictional tuning around mission importance, identity, assets, service roles, time, peer groups, maintenance, change, geography concepts, device posture, source health, and expected workflows without suppressing risk blindly.",
    skills: [
      "Separate safe tuning from broad alert suppression",
      "Add context that improves precision and analyst usefulness",
      "Use exceptions with owners, evidence, expiration, and review",
      "Measure how tuning changes alert volume, coverage, and missed risk",
    ],
    portfolio:
      "Create a fictional detection-tuning plan, contextual enrichment matrix, exception register, validation record, and rollback criteria.",
  },
  {
    number: "A5.7",
    title: "Mapping Alerts to Defender Questions",
    slug: "mapping-alerts-to-defender-questions",
    summary:
      "Turn fictional alerts into structured defender questions about identity, device, service, destination, sequence, authorization, source health, scope, impact, ownership, alternatives, and next evidence instead of treating alert text as a conclusion.",
    skills: [
      "Write clear defender questions for each alert",
      "Identify which evidence can answer each question",
      "Separate alert severity from investigation priority",
      "Define escalation, closure, and unresolved-evidence criteria",
    ],
    portfolio:
      "Build a fictional alert-to-question matrix, evidence-request plan, triage handoff, and closure checklist.",
  },
  {
    number: "A5.8",
    title: "Testing Detections Safely With Fake Data",
    slug: "testing-detections-safely-with-fake-data",
    summary:
      "Test fictional detection ideas using invented events, controlled expected outcomes, source-health variations, edge cases, negative cases, change scenarios, privacy checks, and regression records without touching real environments.",
    skills: [
      "Design positive, negative, boundary, degraded-source, and regression cases",
      "Use invented data with expected alert and non-alert outcomes",
      "Compare observed results with detection objectives and evidence limits",
      "Document failures, fixes, retesting, rollback, and approval",
    ],
    portfolio:
      "Produce a fictional detection test plan, synthetic event set, expected-results matrix, defect log, and regression record.",
  },
  {
    number: "A5.9",
    title: "Detection Documentation",
    slug: "detection-documentation",
    summary:
      "Create professional fictional documentation covering purpose, risk, defender question, data sources, fields, logic, assumptions, exclusions, severity, testing, tuning, ownership, privacy, dependencies, response guidance, lifecycle, and change history.",
    skills: [
      "Write documentation that analysts and owners can maintain",
      "Record evidence meaning, source health, limits, and alternative explanations",
      "Define testing, tuning, deployment, review, and retirement requirements",
      "Communicate technical and leadership summaries at the right depth",
    ],
    portfolio:
      "Create a fictional detection specification, analyst guide, owner record, change log, review checklist, and executive summary.",
  },
  {
    number: "A5.10",
    title: "Detection Design Lab",
    slug: "detection-design-lab",
    summary:
      "Integrate the complete A5 workflow in a safe fictional lab covering defender questions, risk, data sources, logic, behavior, false positives, false negatives, tuning, testing, documentation, ownership, validation, and executive communication.",
    skills: [
      "Conduct a complete fictional detection-design review",
      "Maintain traceability from risk and question to source, logic, alert, and action",
      "Balance coverage, precision, privacy, usability, operations, and resilience",
      "Defend detection decisions with evidence, testing, limits, and lifecycle",
    ],
    portfolio:
      "Produce a complete fictional detection-engineering package and leadership-ready improvement plan.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the defensive problem",
    description:
      "State which fictional asset, identity, service, workflow, trust boundary, policy, supplier, administrative function, or recovery outcome requires detection support.",
    output: "Detection purpose and mission-risk statement",
  },
  {
    step: "2",
    title: "Write the defender question",
    description:
      "Describe exactly what a fictional defender needs to know, which decision the answer supports, and what the detection cannot prove by itself.",
    output: "Defender-question and decision record",
  },
  {
    step: "3",
    title: "Map evidence sources",
    description:
      "Identify fictional identity, endpoint, network, DNS, application, cloud, supplier, administrative, support, and source-health evidence with provenance, coverage, privacy, and limitations.",
    output: "Data-source and evidence coverage map",
  },
  {
    step: "4",
    title: "Form a behavior hypothesis",
    description:
      "Describe fictional expected behavior, meaningful deviation, sequence, relationship, identity, destination, time, frequency, privilege, and alternative explanations.",
    output: "Behavior hypothesis and assumptions sheet",
  },
  {
    step: "5",
    title: "Design conceptual logic",
    description:
      "Define fictional conditions, required fields, time windows, sequences, counts, relationships, context, exclusions, missing-data behavior, severity, and confidence.",
    output: "Detection-logic design specification",
  },
  {
    step: "6",
    title: "Create safe test cases",
    description:
      "Build invented positive, negative, boundary, maintenance, change, degraded-source, privacy, edge, and regression cases with expected outcomes.",
    output: "Synthetic test-data and expected-results package",
  },
  {
    step: "7",
    title: "Measure detection quality",
    description:
      "Review fictional true alerts, expected alerts, false positives, false negatives, unknown outcomes, source-health failures, coverage gaps, and analyst usefulness.",
    output: "Detection-quality and defect register",
  },
  {
    step: "8",
    title: "Tune with context",
    description:
      "Add fictional identity, asset, service, peer, time, device, maintenance, change, source-health, and authorization context while avoiding broad suppression.",
    output: "Tuning, enrichment, exception, and rollback plan",
  },
  {
    step: "9",
    title: "Document and approve",
    description:
      "Record fictional ownership, purpose, evidence, logic, limits, privacy, severity, testing, response guidance, dependencies, lifecycle, and change history.",
    output: "Detection specification and approval packet",
  },
  {
    step: "10",
    title: "Deploy conceptually and maintain",
    description:
      "Define fictional validation gates, observation periods, source-health monitoring, metrics, reviews, change triggers, reopened findings, retirement, and lessons learned.",
    output: "Detection lifecycle and maintenance plan",
  },
];

const objectives = [
  "Explain detection engineering as a mission-driven process for converting risks and defender questions into tested, documented, maintainable, and reviewable detection capabilities.",
  "Design a safe fictional detection scope covering assets, identities, users, devices, services, suppliers, trust boundaries, evidence sources, privacy, exclusions, and operational ownership.",
  "Evaluate fictional data sources using provenance, field meaning, freshness, completeness, timing, coverage, transformation, duplication, source health, privacy, and failure behavior.",
  "Translate fictional behavior hypotheses into conceptual detection logic using conditions, sequences, relationships, time windows, counts, context, exclusions, confidence, and missing-data handling.",
  "Analyze fictional false positives, false negatives, expected alerts, unknown outcomes, blind spots, source-health failures, and labeling limitations without hiding uncertainty.",
  "Tune fictional detections using identity, asset, service, device, peer, time, change, maintenance, authorization, source health, and mission context while preserving meaningful coverage.",
  "Create safe fictional test plans with invented positive, negative, boundary, degraded-source, edge, privacy, change, maintenance, and regression cases.",
  "Produce a portfolio-ready fictional detection-engineering package containing defender questions, source maps, logic, tests, tuning, documentation, metrics, residual risks, ownership, and leadership communication.",
];

const evidencePreview = [
  {
    id: "DE-01",
    source: "Fictional mission-risk brief",
    observation:
      "A student-support platform depends on employee identities, service identities, remote support, supplier results, notifications, DNS, wireless service devices, administrative changes, monitoring, and recovery workflows.",
    supports:
      "Detection questions should cover identity, service, supplier, administrative, naming, wireless, evidence, and recovery behavior rather than one generic alert stream.",
    limits:
      "The brief does not prove which data sources exist, which behaviors are detectable, or which events indicate harmful activity.",
    designUse:
      "Use it to define detection priorities, stakeholders, defender questions, ownership, and evidence needs.",
  },
  {
    id: "DE-02",
    source: "Fictional data-source inventory",
    observation:
      "Identity, network, DNS, application, wireless, remote-access, supplier, and source-health evidence exists, but field quality and retention differ.",
    supports:
      "Detection design must document which source can answer which question and how source health affects confidence.",
    limits:
      "The inventory does not prove complete coverage, correct normalization, current events, or reliable correlation.",
    designUse:
      "Create provenance, field, freshness, coverage, privacy, and blind-period requirements.",
  },
  {
    id: "DE-03",
    source: "Fictional alert-quality review",
    observation:
      "One administrative detection creates many alerts during approved maintenance, while a separate missed case involved a stale emergency role after an exercise.",
    supports:
      "Tuning must consider maintenance context without suppressing lifecycle and revocation risk.",
    limits:
      "The review does not prove the noisy alerts are useless or that one missed case represents the entire detection's coverage.",
    designUse:
      "Design positive, negative, maintenance, expiration, source-degraded, and regression tests.",
  },
  {
    id: "DE-04",
    source: "Fictional source-health timeline",
    observation:
      "A network event stream remained connected while freshness exceeded the approved range and application correlation was delayed.",
    supports:
      "Detection logic and alert confidence need explicit source-health and missing-context behavior.",
    limits:
      "Delayed evidence does not prove event loss, manipulation, normal behavior, or harmful behavior.",
    designUse:
      "Define Degraded states, alternate evidence, confidence changes, and analyst guidance.",
  },
  {
    id: "DE-05",
    source: "Fictional behavior comparison",
    observation:
      "A workflow service reached a new destination after a deployment, one supplier session occurred outside its usual window, and one wireless service device changed network class.",
    supports:
      "Behavior detections need change, identity, destination, time, class, ownership, authorization, and alternative-explanation context.",
    limits:
      "The differences do not prove compromise, misuse, or unacceptable activity.",
    designUse:
      "Write defender questions and conceptual logic that preserves uncertainty.",
  },
  {
    id: "DE-06",
    source: "Fictional detection test summary",
    observation:
      "The initial logic detected all supplied positive cases but also alerted on approved recovery activity and failed when one required field was missing.",
    supports:
      "Coverage, precision, degraded-source behavior, recovery context, and missing-data handling require improvement.",
    limits:
      "A small synthetic test set does not prove performance across all future cases.",
    designUse:
      "Expand negative, boundary, recovery, missing-field, and regression tests before approval.",
  },
];

const portfolioArtifacts = [
  "Fictional detection-engineering purpose, mission risk, stakeholders, scope, exclusions, authorization, and safety boundary",
  "Asset, identity, service, supplier, administrative, wireless, DNS, evidence, and recovery detection-priority map",
  "Defender-question catalog with decision use, non-proof statement, evidence needs, owner, priority, and review trigger",
  "Data-source inventory with provenance, fields, freshness, completeness, timing, schema, transformation, duplication, coverage, privacy, and source health",
  "Behavior-hypothesis library with expected state, meaningful deviation, identity, destination, sequence, time, peer context, alternatives, and confidence",
  "Conceptual detection-logic specifications with conditions, windows, counts, sequences, relationships, exclusions, missing-data behavior, severity, and limits",
  "False-positive, false-negative, expected-alert, unknown-outcome, source-degraded, and coverage-gap review register",
  "Detection-tuning and contextual-enrichment plan with owners, evidence, exceptions, expiration, validation, metrics, and rollback",
  "Alert-to-defender-question matrix with evidence requests, triage context, escalation criteria, unresolved states, and closure requirements",
  "Synthetic detection-test package with invented positive, negative, boundary, maintenance, change, degraded-source, privacy, edge, and regression cases",
  "Detection documentation packet with purpose, sources, logic, assumptions, severity, testing, tuning, response guidance, privacy, ownership, dependencies, and lifecycle",
  "Detection-quality metrics plan covering coverage, precision, noise, missed conditions, source health, analyst usefulness, review time, and residual risk",
  "Multidisciplinary detection-review findings, disagreement log, owner actions, completion criteria, validation results, and reopened issues",
  "Leadership summary, technical appendix, analyst guide, portfolio reflection, and complete fictionalization statement",
];

const risks = [
  {
    risk: "Alert-first thinking",
    description:
      "Starting with a fictional alert title or product feature before defining the mission risk and defender question.",
    control:
      "Trace every detection from mission and asset to behavior hypothesis, evidence source, logic, test, alert, decision, and owner.",
  },
  {
    risk: "Data presence equals data quality",
    description:
      "Assuming a fictional log source is useful because it exists, even when fields, freshness, timing, coverage, provenance, or source health are weak.",
    control:
      "Document required fields, meaning, health, blind periods, transformations, privacy, and confidence effects.",
  },
  {
    risk: "Rare equals harmful",
    description:
      "Treating fictional unusual timing, destinations, identities, devices, or sequences as malicious without change, maintenance, assignment, recovery, or peer context.",
    control:
      "Use behavior hypotheses, alternative explanations, authorization evidence, confidence, scope, and mission impact.",
  },
  {
    risk: "Noise reduction equals success",
    description:
      "Suppressing fictional alerts broadly until volume falls, without measuring missed conditions, coverage loss, stale exceptions, or lifecycle gaps.",
    control:
      "Tune narrowly with context, owners, expiration, tests, rollback, and false-negative review.",
  },
  {
    risk: "Synthetic tests prove production quality",
    description:
      "Assuming a fictional detection is complete because it passes a small set of invented positive examples.",
    control:
      "Use positive, negative, edge, maintenance, change, missing-field, degraded-source, privacy, and regression cases with documented limits.",
  },
  {
    risk: "Alert severity equals priority",
    description:
      "Treating a fictional High alert as more important than a lower-severity condition involving privileged identity, critical assets, confirmed impact, or weak recoverability.",
    control:
      "Prioritize using mission, identity, asset value, evidence, scope, impact, source health, and recoverability.",
  },
  {
    risk: "Documentation after deployment",
    description:
      "Creating fictional detections without current purpose, fields, logic, assumptions, testing, tuning, ownership, response guidance, or retirement criteria.",
    control:
      "Make documentation and approval part of the design and lifecycle, not an optional final task.",
  },
  {
    risk: "Unsafe real-event detail",
    description:
      "Using real logs, identities, domains, addresses, alerts, supplier activity, internal behavior, or incident records in a public learning artifact.",
    control:
      "Invent every organization, source, identity, event, field, rule, alert, test, owner, date, decision, and outcome from scratch.",
  },
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/what-detection-engineering-means`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A5.1
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-bold text-emerald-100 transition hover:bg-emerald-400/20"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function DetectionEngineeringModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-purple-200">
              Module A5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
              10 Lessons + Module Test
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
              Fake Data Only
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5 Detection Engineering
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders convert mission risks and
            defender questions into evidence-aware, behavior-focused, tested,
            tuned, documented, maintainable, and measurable detection
            capabilities using only invented data and safe conceptual logic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-14">
        <SectionCard eyebrow="Module Snapshot" title="What A5 Covers">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Module", "A5 Detection Engineering"],
              ["Lessons", "10 complete Advanced lessons"],
              ["Assessment", "25-question module test"],
              ["Portfolio", "Complete fictional detection package"],
              ["Primary focus", "Design, testing, tuning, and documentation"],
              ["Evidence", "Identity, endpoint, network, DNS, app, cloud, supplier"],
              ["Professional skill", "Translate risk into defender questions and logic"],
              ["Safety model", "Invented events and non-operational concepts only"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {label}
                </p>
                <p className="mt-2 font-semibold leading-7 text-slate-200">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Question before rule",
                "Begin with the fictional mission risk and defender decision instead of copying an alert idea.",
              ],
              [
                "Evidence before certainty",
                "Document source health, field meaning, coverage, alternatives, confidence, and what the detection cannot prove.",
              ],
              [
                "Lifecycle before volume",
                "Test, tune, document, approve, monitor, review, improve, and retire detections instead of optimizing only for fewer alerts.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Main Question"
          title="How Do Defenders Turn Risk and Evidence into Reliable Detection Decisions?"
        >
          <p className="leading-8">
            Detection engineering is not simply writing a condition that
            produces an alert. A professional detection must answer a useful
            defender question, rely on understood evidence, represent a clear
            behavior hypothesis, handle expected variation, survive missing or
            degraded data, support triage, protect privacy, and remain
            testable, explainable, maintainable, and owned.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Start with risk",
                "Connect each fictional detection to a mission, asset, identity, service, trust boundary, policy, supplier, or recovery concern.",
              ],
              [
                "Design for decisions",
                "State which fictional question the alert helps answer and which evidence or analyst action must come next.",
              ],
              [
                "Improve continuously",
                "Measure fictional quality, review missed conditions, tune carefully, retest, document changes, and preserve residual risk.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safety Boundary"
          title="Detection Engineering Must Remain Fictional, Authorized, Defensive, and Non-Operational"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                This module includes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Invented organizations, users, devices, services, identities,
                  fields, events, logs, alerts, dashboards, tests, findings,
                  decisions, and outcomes.
                </li>
                <li>
                  Conceptual defender questions, source evaluation, behavior
                  hypotheses, logic, testing, tuning, documentation, metrics,
                  ownership, and lifecycle.
                </li>
                <li>
                  Static fake evidence and portfolio-ready defensive planning
                  artifacts.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                This module does not authorize
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Collecting, querying, searching, scanning, monitoring,
                  profiling, testing, changing, or analyzing real systems,
                  accounts, devices, networks, domains, services, or users.
                </li>
                <li>
                  Using real credentials, addresses, domains, internal names,
                  supplier data, alerts, incident records, logs, queries,
                  detection rules, or monitoring configurations.
                </li>
                <li>
                  Writing operational instructions for unauthorized access,
                  malware, evasion, persistence, credential theft, destructive
                  action, or hiding harmful behavior.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 leading-7 text-yellow-50">
            Every A5 activity uses only supplied fictional information. It does
            not grant permission to collect, inspect, search, query, correlate,
            test, deploy, tune, suppress, block, investigate, or modify any real
            telemetry, account, endpoint, network, domain, application, cloud
            service, supplier, alerting platform, or organizational system.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Ten Steps from Mission Risk to Maintained Detection
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.42fr_1fr] lg:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Module Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              A5 Lesson Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Complete All Ten Lessons
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              Each lesson uses fictional detection context, professional
              defensive reasoning, fake evidence, hidden-answer checks, safe
              testing, and one connected portfolio artifact.
            </p>
          </div>

          <div className="grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
              >
                <div className="grid gap-0 lg:grid-cols-[0.28fr_1fr]">
                  <div className="border-b border-slate-800 bg-[linear-gradient(145deg,_rgba(34,211,238,0.15),_rgba(15,23,42,0.9))] p-6 lg:border-b-0 lg:border-r">
                    <p className="text-4xl font-black text-cyan-200">
                      {lesson.number}
                    </p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                      Lesson {index + 1} of 10
                    </p>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                          Core skills
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                          Portfolio outcome
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.portfolio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Detection Evidence You Will Learn to Analyze
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Detection-design use", item.designUse],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Detection Quality Preview"
          title="A Strong Detection Must Answer More Than “Did It Alert?”"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Purpose",
                "Which fictional mission risk and defender question does the detection address?",
              ],
              [
                "Evidence",
                "Which fictional sources and fields support the logic, and how healthy are they?",
              ],
              [
                "Behavior",
                "Which fictional sequence, relationship, state, or deviation is being evaluated?",
              ],
              [
                "Quality",
                "Which fictional true, expected, false-positive, false-negative, or unknown outcomes occurred?",
              ],
              [
                "Context",
                "Which fictional identity, asset, service, peer, time, change, maintenance, or authorization details matter?",
              ],
              [
                "Action",
                "Which fictional analyst question, evidence request, triage step, or escalation follows?",
              ],
              [
                "Lifecycle",
                "Who owns fictional testing, tuning, documentation, review, change, and retirement?",
              ],
              [
                "Limits",
                "What can the fictional detection not prove, and which residual risks remain?",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Detection Engineering Portfolio Package"
        >
          <p className="leading-8">
            By the end of A5, you will have one connected fictional package
            showing how a professional defender moves from mission risk and
            evidence to behavior hypotheses, logic, testing, tuning,
            documentation, quality review, ownership, and leadership
            communication.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Artifact {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{artifact}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Detection Risk Preview"
          title="Eight Mistakes This Module Will Teach You to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{item.risk}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it is risky
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Test"
          title="A5 Detection Engineering Assessment"
        >
          <p className="leading-8">
            Complete a 25-question hidden-answer assessment covering detection
            data sources, provenance, behavior hypotheses, conceptual logic,
            false positives, false negatives, tuning, context, defender
            questions, safe testing, documentation, source health, privacy,
            ownership, metrics, and lifecycle decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "25 questions",
                "Every answer remains hidden until the student chooses to reveal it.",
              ],
              [
                "All ten lessons",
                "The assessment covers the complete A5 Detection Engineering pathway.",
              ],
              [
                "Decision-focused",
                "Questions measure evidence-aware defensive judgment rather than memorized alert terms.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 font-black text-yellow-100 transition hover:bg-yellow-400/20"
            >
              Open A5 Module Test
            </Link>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Begin Detection Engineering
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Start with A5.1 to learn why detection engineering begins with
            mission risks and defender questions—not alert volume, product
            features, or copied rules.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}