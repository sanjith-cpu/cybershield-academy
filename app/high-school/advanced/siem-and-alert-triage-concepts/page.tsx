import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/siem-and-alert-triage-concepts`;
const previousModule = `${trackPath}/detection-engineering`;

const lessons = [
  {
    number: "A6.1",
    title: "What a SIEM Does",
    slug: "what-a-siem-does",
    summary:
      "Define a fictional security information and event management system as a defensive coordination layer that collects, normalizes, searches, correlates, presents, and preserves selected evidence so analysts can answer bounded questions without treating the platform as an all-knowing source of truth.",
    skills: [
      "Explain collection, normalization, search, correlation, alerting, dashboards, and case support conceptually",
      "Separate a SIEM platform from source systems, detection logic, analyst judgment, and response authority",
      "Recognize data, source-health, privacy, retention, access, and coverage limits",
      "Document the mission, users, owners, inputs, outputs, dependencies, and non-proof statements",
    ],
    defensiveLab:
      "Create a completely fictional SIEM mission charter and architecture map showing sources, processing stages, analyst users, evidence limits, ownership, privacy boundaries, and lifecycle responsibilities.",
  },
  {
    number: "A6.2",
    title: "Log Collection and Normalization Concepts",
    slug: "log-collection-and-normalization-concepts",
    summary:
      "Study how fictional records move from identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health systems through collection, parsing, field mapping, normalization, enrichment, timing, retention, and quality controls.",
    skills: [
      "Trace fictional event time, collection time, processing time, and alert time",
      "Distinguish raw evidence, parsed fields, normalized fields, enrichment, and derived context",
      "Evaluate schema, field meaning, duplication, delay, loss, transformation, and source coverage",
      "Create source-health and data-quality requirements for reliable analyst decisions",
    ],
    defensiveLab:
      "Build a fictional collection and normalization catalog with provenance, field dictionaries, timing, health states, transformations, retention, privacy, owners, and failure behavior.",
  },
  {
    number: "A6.3",
    title: "Correlation and Alert Rules",
    slug: "correlation-and-alert-rules",
    summary:
      "Examine how fictional SIEM correlation connects identity, device, service, destination, session, request, change, supplier, time, sequence, count, state, and source-health evidence while preserving uncertainty, missing-data behavior, and explainability.",
    skills: [
      "Compare single-record, multi-source, threshold, sequence, relationship, and state-based correlation",
      "Document correlation keys, windows, assumptions, required evidence, and missing-data behavior",
      "Separate a correlation match from confirmed cause, intent, scope, or impact",
      "Evaluate rule quality with positive, negative, boundary, degraded-source, and regression cases",
    ],
    defensiveLab:
      "Design a fictional correlation specification and alert contract using inert evidence cards, conceptual conditions, expected results, alternative explanations, and safe test cases.",
  },
  {
    number: "A6.4",
    title: "Alert Severity and Priority",
    slug: "alert-severity-and-priority",
    summary:
      "Learn to distinguish fictional alert severity, evidence confidence, review priority, response urgency, mission impact, asset criticality, privilege, scope, time sensitivity, user effect, recoverability, and owner expectations.",
    skills: [
      "Separate potential impact from evidence certainty",
      "Prioritize using mission, identity, service, scope, source health, active impact, and response opportunity",
      "Recognize why a High severity label does not prove an alert interpretation",
      "Document severity, confidence, priority, rationale, limits, review triggers, and overrides",
    ],
    defensiveLab:
      "Create a fictional severity-confidence-priority matrix with evidence requirements, mission context, examples, review criteria, and escalation boundaries.",
  },
  {
    number: "A6.5",
    title: "Triage Questions and Evidence Review",
    slug: "triage-questions-and-evidence-review",
    summary:
      "Turn fictional alerts into a repeatable evidence-review process covering observation, identity, device, service, destination, authorization, timing, sequence, source health, scope, impact, alternatives, ownership, next evidence, and decision state.",
    skills: [
      "Lead triage with neutral observations and bounded defender questions",
      "Separate direct evidence, normalized fields, enrichment, hypotheses, and owner statements",
      "Request purpose-limited evidence and preserve privacy",
      "Use New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states",
    ],
    defensiveLab:
      "Complete a fictional alert-triage worksheet and evidence matrix for multiple Northbridge alerts without using real telemetry or operational systems.",
  },
  {
    number: "A6.6",
    title: "Escalation Criteria",
    slug: "escalation-criteria",
    summary:
      "Define when fictional alerts require broader, faster, or more specialized review using confirmed privilege, widening scope, active impact, critical service effect, source loss, repeated failure, owner nonresponse, time sensitivity, legal or privacy concerns, and recovery risk.",
    skills: [
      "Distinguish escalation from severity alone",
      "Write evidence-based technical, service-owner, privacy, leadership, and recovery escalation criteria",
      "Define escalation ownership, timing, communication, handoff, and rollback boundaries",
      "Avoid both premature escalation and dangerous delay",
    ],
    defensiveLab:
      "Build a fictional escalation matrix with triggers, evidence, owners, audiences, time expectations, communication fields, and de-escalation criteria.",
  },
  {
    number: "A6.7",
    title: "Case Management and Notes",
    slug: "case-management-and-notes",
    summary:
      "Create professional fictional case records that preserve alert identity, chronology, evidence, questions, owners, decisions, uncertainty, source health, actions, communications, privacy, residual risk, closure, and reopening without copying sensitive operational details.",
    skills: [
      "Write objective, time-ordered, evidence-linked analyst notes",
      "Separate observations, interpretations, decisions, and unresolved questions",
      "Track ownership, due dates, evidence requests, escalations, actions, validation, and closure",
      "Apply privacy, access, retention, redaction, and public-portfolio boundaries",
    ],
    defensiveLab:
      "Produce a fictional case timeline, decision log, evidence request register, owner matrix, closure checklist, and lessons-learned summary.",
  },
  {
    number: "A6.8",
    title: "Dashboards and Metrics",
    slug: "dashboards-and-metrics",
    summary:
      "Design fictional SIEM dashboards and quality metrics that communicate source health, alert usefulness, expected alerts, false positives, false negatives, Unknown outcomes, decision latency, queue age, workload, service impact, coverage, privacy, and lifecycle debt.",
    skills: [
      "Choose metrics that support analyst, owner, quality, and leadership decisions",
      "Separate counts from rates, trends, denominators, limitations, and confidence",
      "Avoid vanity metrics and misleading alert-volume conclusions",
      "Design audience-specific dashboards with actions, owners, thresholds, and review triggers",
    ],
    defensiveLab:
      "Create a fictional analyst dashboard, source-health dashboard, detection-quality dashboard, and leadership scorecard with documented limitations.",
  },
  {
    number: "A6.9",
    title: "Reducing Noise and Improving Quality",
    slug: "reducing-noise-and-improving-quality",
    summary:
      "Improve fictional SIEM operations by tracing noise and missed-condition risk to source duplication, parsing errors, stale enrichment, timing, broad correlation, thresholds, expected activity, workflow design, ownership, alert presentation, or documentation debt.",
    skills: [
      "Distinguish alert reduction from quality improvement",
      "Identify root causes across source, schema, logic, context, workflow, and ownership",
      "Use narrow tuning, grouping, deduplication, context, expiration, tests, and rollback",
      "Measure before-and-after precision, coverage, effort, impact, privacy, and residual risk",
    ],
    defensiveLab:
      "Build a fictional SIEM quality-improvement plan with root-cause analysis, tuning proposals, validation gates, regression cases, owners, metrics, and rollback.",
  },
  {
    number: "A6.10",
    title: "SIEM Triage Lab",
    slug: "siem-triage-lab",
    summary:
      "Integrate the complete A6 workflow in a fictional lab covering SIEM purpose, collection, normalization, correlation, severity, priority, triage, evidence review, escalation, case notes, dashboards, metrics, noise reduction, quality, privacy, governance, and leadership communication.",
    skills: [
      "Triage a fictional queue using mission, evidence, source health, confidence, severity, priority, and owner context",
      "Create defensible case records, escalations, closure decisions, and reopened findings",
      "Evaluate dashboard and metric quality without relying on alert volume alone",
      "Present a leadership-ready fictional SIEM improvement plan with evidence and limitations",
    ],
    defensiveLab:
      "Produce a complete fictional SIEM and Alert Triage Package containing architecture, source catalog, alert queue, triage records, case notes, escalation decisions, metrics, quality improvements, governance, and reflection.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the SIEM mission",
    description:
      "State which fictional users, identities, services, suppliers, data, trust boundaries, administrative functions, evidence needs, availability outcomes, and recovery decisions the SIEM should support.",
    output: "SIEM mission, scope, stakeholder, and safety charter",
  },
  {
    step: "2",
    title: "Inventory evidence sources",
    description:
      "Identify fictional identity, endpoint, network, DNS, email, application, cloud, supplier, change, support, and source-health evidence with owners, privacy, retention, and coverage.",
    output: "Source inventory and ownership map",
  },
  {
    step: "3",
    title: "Define collection and normalization",
    description:
      "Document fictional event time, collection time, processing time, parsers, schemas, field mappings, transformations, enrichment, duplicates, delay, and failure behavior.",
    output: "Collection pipeline and field dictionary",
  },
  {
    step: "4",
    title: "Design correlation and alerts",
    description:
      "Write fictional conditions, relationships, counts, sequences, windows, source-health behavior, context, alternatives, confidence, severity, and alert presentation.",
    output: "Correlation specification and alert contract",
  },
  {
    step: "5",
    title: "Prioritize the queue",
    description:
      "Rank fictional alerts using mission impact, identity, service criticality, privilege, scope, evidence confidence, source health, active effect, time sensitivity, and response opportunity.",
    output: "Severity-confidence-priority decision matrix",
  },
  {
    step: "6",
    title: "Triage with questions",
    description:
      "Review fictional observations, evidence, identity, device, service, destination, authorization, timing, sequence, alternatives, scope, impact, ownership, and next evidence.",
    output: "Alert triage worksheet and evidence plan",
  },
  {
    step: "7",
    title: "Escalate and coordinate",
    description:
      "Use fictional evidence-based escalation triggers, owners, audiences, time expectations, communications, handoffs, response boundaries, and de-escalation criteria.",
    output: "Escalation and coordination record",
  },
  {
    step: "8",
    title: "Manage the case",
    description:
      "Create fictional objective notes, chronology, evidence links, questions, owners, decisions, actions, privacy controls, validation, residual risk, closure, and reopen criteria.",
    output: "Case file and decision log",
  },
  {
    step: "9",
    title: "Measure quality",
    description:
      "Evaluate fictional source health, queue age, expected alerts, false positives, false negatives, Unknown outcomes, decision latency, workload, service impact, coverage, privacy, and debt.",
    output: "SIEM quality dashboard and metric definitions",
  },
  {
    step: "10",
    title: "Improve and maintain",
    description:
      "Trace fictional defects to sources, fields, schemas, logic, context, workflows, ownership, or documentation; then tune narrowly, test, observe, roll back, review, and retire.",
    output: "Quality-improvement and lifecycle plan",
  },
];

const objectives = [
  "Explain a SIEM as a defensive evidence and workflow platform rather than a complete source of truth, automatic investigation system, or proof of harmful activity.",
  "Design a safe fictional SIEM scope covering mission, stakeholders, source systems, users, access roles, privacy, retention, ownership, dependencies, exclusions, and lifecycle.",
  "Evaluate fictional collection and normalization using provenance, event time, collection time, processing time, schema, parsing, field meaning, transformation, duplication, delay, loss, coverage, and source health.",
  "Create conceptual fictional correlation and alert rules using conditions, relationships, counts, sequences, windows, context, alternatives, missing-data behavior, confidence, severity, and explainability.",
  "Prioritize fictional alerts by separating potential severity, evidence confidence, analyst priority, response urgency, mission impact, privilege, scope, source health, time sensitivity, and recoverability.",
  "Conduct fictional triage using neutral observations, bounded defender questions, purpose-limited evidence requests, alternative explanations, ownership, decision states, escalation, closure, and reopening.",
  "Write professional fictional case notes and coordination records that are chronological, evidence-linked, objective, privacy-aware, maintainable, and suitable for authorized review.",
  "Design fictional dashboards, metrics, quality reviews, tuning proposals, validation gates, regression tests, rollback criteria, residual-risk records, and leadership summaries.",
];

const evidencePreview = [
  {
    id: "SIEM-01",
    source: "Fictional SIEM mission brief",
    observation:
      "Northbridge wants one defensive workspace for identity, service, supplier, network, DNS, application, administrative, source-health, and recovery evidence.",
    supports:
      "The SIEM should support cross-source questions, triage coordination, source-health visibility, and case documentation.",
    limits:
      "The brief does not prove every source is available, complete, lawful to collect, normalized correctly, or useful for every decision.",
    designUse:
      "Define scope, stakeholders, access roles, privacy, ownership, source priorities, and non-proof statements.",
  },
  {
    id: "SIEM-02",
    source: "Fictional collection timeline",
    observation:
      "An identity event occurred at 09:02, was collected at 09:07, normalized at 09:09, enriched at 09:12, and contributed to an alert at 09:14.",
    supports:
      "Analysts must distinguish event time, collection time, processing time, enrichment time, and alert time.",
    limits:
      "The timeline does not prove the event was harmful, complete, unique, or correlated correctly.",
    designUse:
      "Document delay, sequence, freshness, confidence, and boundary behavior.",
  },
  {
    id: "SIEM-03",
    source: "Fictional normalization review",
    observation:
      "Two source categories use different meanings for an invented result field, and one parser maps both to the same normalized value.",
    supports:
      "Field semantics and transformation rules may affect correlation quality.",
    limits:
      "The mapping difference does not prove current alerts are wrong.",
    designUse:
      "Create a field dictionary, schema tests, parser validation, and change-review trigger.",
  },
  {
    id: "SIEM-04",
    source: "Fictional alert queue",
    observation:
      "One High alert has delayed authorization evidence, one Medium alert affects a critical service with confirmed user impact, and one Low alert involves a broad source blind period.",
    supports:
      "Queue priority should not follow severity alone.",
    limits:
      "The queue summary does not prove cause, complete scope, or correct response.",
    designUse:
      "Compare severity, confidence, priority, mission impact, time sensitivity, source health, and owner needs.",
  },
  {
    id: "SIEM-05",
    source: "Fictional case review",
    observation:
      "An analyst note says 'confirmed misuse' before extension, group, session, service, source-health, and owner evidence are reviewed.",
    supports:
      "Case notes need neutral observations, explicit hypotheses, evidence links, uncertainty, and decision criteria.",
    limits:
      "One poor note does not prove the final case decision was incorrect.",
    designUse:
      "Create note-writing standards, review checks, and analyst coaching.",
  },
  {
    id: "SIEM-06",
    source: "Fictional quality dashboard",
    observation:
      "Alert volume fell by forty percent after a broad maintenance suppression, while one stale emergency role and two replay duplicates were missed.",
    supports:
      "Lower alert volume alone does not prove better SIEM quality.",
    limits:
      "The summary does not quantify every hidden miss or determine the final corrective action.",
    designUse:
      "Require precision, coverage, source-health, workflow, privacy, rollback, and residual-risk metrics.",
  },
];

const portfolioArtifacts = [
  "Fictional SIEM mission, purpose, stakeholders, scope, exclusions, authorization, safety boundary, ownership, and lifecycle charter",
  "Source inventory covering identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health evidence",
  "Collection and normalization architecture with event time, collection time, processing time, parsing, schema, field mapping, enrichment, storage, and access",
  "Versioned field dictionary with provenance, meaning, type, allowed values, transformations, requirement, privacy purpose, source health, and limitations",
  "Source-health model covering Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states",
  "Correlation and alert specification library with defender questions, conditions, relationships, windows, counts, sequence, context, alternatives, limits, and tests",
  "Severity-confidence-priority matrix with mission impact, identity, privilege, scope, time sensitivity, user effect, source health, and response opportunity",
  "Fictional alert queue with triage order, evidence gaps, owners, next questions, state, escalation, and closure requirements",
  "Alert triage worksheets and evidence-review matrices using only inert invented evidence",
  "Escalation matrix with technical, service, privacy, leadership, supplier, recovery, and source-health criteria",
  "Case-management package with chronology, notes, evidence requests, owners, decisions, actions, validation, residual risk, closure, and reopen criteria",
  "Analyst, source-health, detection-quality, workload, service-impact, and leadership dashboard designs",
  "Metric definitions covering counts, rates, denominators, periods, confidence, limitations, owners, actions, and review triggers",
  "SIEM noise and quality review with expected alerts, false positives, false negatives, Unknown outcomes, duplicate work, source gaps, and decision latency",
  "Tuning and quality-improvement plan with root-cause hypotheses, context, grouping, deduplication, thresholds, exceptions, expiration, testing, observation, and rollback",
  "Complete fictional SIEM Triage Lab package, leadership brief, technical appendix, analyst guide, portfolio reflection, and fictionalization statement",
];

const risks = [
  {
    risk: "Treating the SIEM as the source of truth",
    description:
      "Assuming fictional normalized records, correlation results, or dashboards are complete and authoritative without reviewing source systems, field meaning, health, and limitations.",
    control:
      "Preserve provenance, source health, direct-versus-derived labels, alternate evidence, confidence, and non-proof statements.",
  },
  {
    risk: "Collecting everything",
    description:
      "Adding fictional sources and fields without a defender question, privacy purpose, retention need, access model, owner, or quality requirement.",
    control:
      "Use purpose limitation, field minimization, documented users, retention, access, deletion, and source-lifecycle review.",
  },
  {
    risk: "Normalization hides meaning",
    description:
      "Mapping fictional source values into one common field while losing important semantic differences, timing, confidence, or provenance.",
    control:
      "Maintain field dictionaries, transformation records, schema tests, source-specific context, and change review.",
  },
  {
    risk: "Correlation equals conclusion",
    description:
      "Treating a fictional multi-source rule match as proof of cause, intent, complete scope, impact, or confirmed incident.",
    control:
      "Use neutral observations, defender questions, alternatives, source-health review, confidence, and evidence-based decision states.",
  },
  {
    risk: "Severity controls the queue",
    description:
      "Reviewing fictional alerts strictly by platform severity while ignoring mission impact, active user effect, evidence confidence, privilege, scope, source loss, and time sensitivity.",
    control:
      "Use a documented severity-confidence-priority model with owner and override review.",
  },
  {
    risk: "Notes become unsupported conclusions",
    description:
      "Writing fictional case notes that mix facts, interpretations, assumptions, decisions, and actions without evidence or timestamps.",
    control:
      "Use objective chronology, evidence references, confidence, alternatives, owners, due dates, and review standards.",
  },
  {
    risk: "Dashboard counts become quality",
    description:
      "Using fictional alert totals, closure counts, or response speed as proof of effectiveness without denominators, misses, source health, outcome quality, or limitations.",
    control:
      "Define decision-focused metrics with rates, trends, confidence, coverage, actions, and residual risk.",
  },
  {
    risk: "Real internal SIEM details enter the portfolio",
    description:
      "Using real source names, schemas, fields, dashboards, alerts, queries, case records, screenshots, owners, or incidents in public work.",
    control:
      "Invent every organization, source, field, record, alert, case, metric, owner, date, decision, and outcome from scratch.",
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
        href={`${modulePath}/what-a-siem-does`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A6.1
      </Link>
    </div>
  );
}

export default function SiemAndAlertTriageConceptsModulePage() {
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
              Module A6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
              10 Lessons + Module Test
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
              Fictional Evidence Only
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6 SIEM and Alert Triage Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders use fictional SIEM evidence to
            collect, normalize, correlate, prioritize, triage, escalate,
            document, measure, improve, and govern alert-review workflows
            without treating platform output as proof or using any real system.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-14">
        <SectionCard eyebrow="Module Snapshot" title="What A6 Covers">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Module", "A6 SIEM and Alert Triage Concepts"],
              ["Lessons", "10 complete Advanced lessons"],
              ["Assessment", "25-question module test"],
              ["Portfolio", "Complete fictional SIEM triage package"],
              ["Primary focus", "Evidence review, triage, cases, and quality"],
              ["Evidence", "Identity, endpoint, network, DNS, app, supplier, health"],
              ["Professional skill", "Turn alerts into defensible decisions"],
              ["Safety model", "Invented records and non-operational workflows only"],
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
                "Evidence before platform confidence",
                "A fictional SIEM can organize evidence, but source meaning, health, coverage, privacy, and limitations still determine trust.",
              ],
              [
                "Questions before conclusions",
                "A fictional alert begins a bounded review; it does not prove intent, cause, complete scope, impact, or required response.",
              ],
              [
                "Quality before volume",
                "A strong fictional SIEM program measures useful decisions, missed conditions, source health, analyst effort, privacy, and lifecycle—not only alert counts.",
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
          title="How Do Defenders Turn SIEM Alerts into Reliable, Evidence-Based Decisions?"
        >
          <p className="leading-8">
            A SIEM can collect and organize fictional evidence, but it cannot
            replace source understanding, analyst judgment, owner context,
            privacy controls, or evidence-based decisions. Professional triage
            requires the analyst to understand what matched, where the data
            came from, how healthy it is, which questions matter, what remains
            unknown, who owns the next answer, and when escalation or closure
            is justified.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Understand the evidence path",
                "Trace fictional records from source event through collection, normalization, enrichment, correlation, alert, triage, case, and decision.",
              ],
              [
                "Prioritize defensibly",
                "Separate fictional severity, confidence, priority, active impact, mission importance, scope, source health, and response opportunity.",
              ],
              [
                "Improve the system",
                "Review fictional cases, metrics, misses, noise, source defects, documentation debt, ownership, testing, tuning, rollback, and lifecycle.",
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
          title="SIEM Learning Must Remain Fictional, Authorized, Defensive, and Non-Operational"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                This module includes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Invented sources, schemas, fields, records, timestamps,
                  identities, services, alerts, queues, cases, dashboards,
                  notes, metrics, owners, decisions, and outcomes.
                </li>
                <li>
                  Conceptual collection, normalization, correlation, alert
                  review, prioritization, escalation, case management,
                  dashboard design, quality improvement, and governance.
                </li>
                <li>
                  Static fictional evidence and public portfolio artifacts with
                  no operational system access.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                This module does not authorize
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Accessing, collecting, querying, searching, monitoring,
                  correlating, scanning, testing, investigating, or changing
                  real systems, accounts, networks, domains, services, users,
                  logs, alerts, or cases.
                </li>
                <li>
                  Using real credentials, addresses, internal names, source
                  schemas, dashboards, alerts, cases, supplier records,
                  incident details, queries, correlation rules, or screenshots.
                </li>
                <li>
                  Writing operational instructions for unauthorized access,
                  exploitation, malware, persistence, evasion, credential
                  theft, destructive action, or hiding harmful behavior.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 leading-7 text-yellow-50">
            Every A6 activity uses only supplied fictional information. It does
            not grant permission to collect, inspect, search, query, monitor,
            correlate, test, tune, suppress, escalate, close, investigate, or
            modify any real telemetry, SIEM platform, account, endpoint,
            network, domain, service, supplier, alert, case, or organization.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Ten Steps from SIEM Mission to Maintained Triage Quality
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
              A6 Lesson Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Complete All Ten Lessons
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              Each lesson uses fictional SIEM context, professional defensive
              reasoning, fake evidence, hidden-answer checks, safe labs, and a
              connected portfolio artifact.
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
                          Defensive lab and portfolio outcome
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.defensiveLab}
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
            SIEM and Triage Evidence You Will Learn to Analyze
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
                    ["SIEM and triage use", item.designUse],
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
          eyebrow="Triage Quality Preview"
          title="A Strong SIEM Workflow Must Answer More Than “What Is the Alert Count?”"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Mission",
                "Which fictional user, identity, service, supplier, privacy, evidence, availability, or recovery decision does the SIEM support?",
              ],
              [
                "Provenance",
                "Which fictional source produced the record, and what do its fields and transformations mean?",
              ],
              [
                "Health",
                "Are fictional freshness, completeness, timing, schema, coverage, duplication, and blind periods acceptable?",
              ],
              [
                "Correlation",
                "Which fictional conditions, relationships, sequences, counts, windows, and context produced the alert?",
              ],
              [
                "Priority",
                "How do fictional severity, confidence, mission impact, privilege, scope, active effect, time, and response opportunity compare?",
              ],
              [
                "Triage",
                "Which fictional observation, question, evidence request, alternative, owner, and decision state comes next?",
              ],
              [
                "Case",
                "Are fictional notes objective, chronological, evidence-linked, privacy-aware, and complete for escalation or closure?",
              ],
              [
                "Quality",
                "Which fictional expected alerts, false positives, false negatives, Unknowns, source gaps, effort, impact, and debt remain?",
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
          title="Build a Complete SIEM and Alert Triage Portfolio Package"
        >
          <p className="leading-8">
            By the end of A6, you will have one connected fictional package
            showing how a professional defender moves from SIEM mission and
            source evidence to normalized records, correlations, alert
            priority, triage, escalation, case management, dashboards, quality
            improvement, governance, and leadership communication.
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
          eyebrow="SIEM Risk Preview"
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
          title="A6 SIEM and Alert Triage Concepts Assessment"
        >
          <p className="leading-8">
            Complete a 25-question hidden-answer assessment covering SIEM
            purpose, collection, normalization, provenance, schemas, timing,
            correlation, source health, severity, confidence, priority, triage,
            evidence review, escalation, case notes, dashboards, metrics,
            quality improvement, privacy, ownership, and lifecycle decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "25 questions",
                "Answers and explanations remain hidden until the student submits the full assessment.",
              ],
              [
                "All ten lessons",
                "The assessment covers the complete A6 SIEM and Alert Triage Concepts pathway.",
              ],
              [
                "Decision-focused",
                "Questions measure evidence-aware triage and governance judgment rather than product memorization.",
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
              Open A6 Module Test
            </Link>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Begin SIEM and Alert Triage Concepts
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Start with A6.1 to learn what a SIEM can help defenders do, what it
            cannot prove, how evidence moves through the platform, and why
            professional triage begins with mission and source understanding.
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