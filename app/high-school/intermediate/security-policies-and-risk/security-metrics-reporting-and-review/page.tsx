import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/security-policies-and-risk`;
const previousLesson = `${modulePath}/third-party-and-supply-chain-risk`;
const nextLesson = `${modulePath}/security-policies-and-risk-lab`;

const objectives = [
  "Explain how fictional security metrics connect control objectives, risk decisions, evidence quality, ownership, targets, trends, limitations, and leadership action.",
  "Distinguish fictional measurements, metrics, indicators, thresholds, targets, trends, dashboards, reports, confidence, and decision context.",
  "Build a fictional measurement model with scope, numerator, denominator, source health, frequency, owner, target, threshold, interpretation, and review.",
  "Evaluate fictional technical and leadership reporting without overstating control effectiveness, compliance, incidents, causation, or risk reduction.",
  "Create a portfolio-safe fictional metrics package with a catalog, dashboard critique, leadership summary, findings, actions, and review plan."
];
const vocabulary = [
  [
    "Measurement",
    "A fictional observed value, count, time, percentage, rate, status, or test result collected from a defined source and scope."
  ],
  [
    "Metric",
    "A fictional measurement or calculation used to evaluate control performance, risk, service health, progress, quality, or decision needs."
  ],
  [
    "Indicator",
    "A fictional signal that may suggest a condition, trend, risk, failure, or change but does not automatically prove cause or impact."
  ],
  [
    "Key performance indicator",
    "A fictional measure focused on whether a team, service, or process is meeting an operational objective."
  ],
  [
    "Key risk indicator",
    "A fictional measure focused on changing exposure, control weakness, uncertainty, dependency, or potential business impact."
  ],
  [
    "Threshold",
    "A fictional value or condition that triggers review, escalation, investigation, treatment, or leadership attention."
  ],
  [
    "Target",
    "A fictional desired level of performance, risk reduction, completion, coverage, or recovery agreed by an owner."
  ],
  [
    "Numerator",
    "The fictional part of a ratio representing measured successes, failures, events, assets, users, or controls."
  ],
  [
    "Denominator",
    "The fictional total eligible population against which the numerator is compared."
  ],
  [
    "Coverage",
    "The fictional portion of relevant systems, identities, data, suppliers, controls, users, or time periods included in a measure."
  ],
  [
    "Source health",
    "A fictional assessment of whether a data source is current, complete, timely, correctly parsed, available, and properly scoped."
  ],
  [
    "Trend",
    "A fictional pattern of change across time rather than a single isolated value."
  ],
  [
    "Leading indicator",
    "A fictional measure that may provide early warning before a larger consequence occurs."
  ],
  [
    "Lagging indicator",
    "A fictional measure that records an outcome, failure, delay, or consequence after it occurs."
  ],
  [
    "Confidence",
    "A fictional judgment about how strongly supplied data supports the metric interpretation and related decision."
  ],
  [
    "Decision-ready reporting",
    "Fictional reporting that connects evidence, scope, business meaning, uncertainty, ownership, action, and review."
  ]
];
const metricDesignFields = [
  {
    "field": "Decision purpose",
    "strong": "The fictional metric answers a specific operational, control, risk, funding, prioritization, or leadership question.",
    "weak": "The metric is collected because a tool can produce it, but no decision depends on it.",
    "question": "What decision should change because of this metric?"
  },
  {
    "field": "Scope and population",
    "strong": "The fictional metric identifies included and excluded systems, identities, data, suppliers, controls, users, regions, and time periods.",
    "weak": "The report says organization-wide even though several systems are silently excluded.",
    "question": "What exact population does the metric represent?"
  },
  {
    "field": "Numerator and denominator",
    "strong": "The fictional calculation defines both the measured result and the total eligible population.",
    "weak": "A percentage appears with no denominator, exclusions, or counting rule.",
    "question": "How was the value calculated and what is missing?"
  },
  {
    "field": "Source health",
    "strong": "The fictional source is current, complete enough, timely, correctly parsed, owned, and monitored for delivery failure.",
    "weak": "A stale dashboard is used without checking whether sources stopped reporting.",
    "question": "Is the source healthy enough to support this interpretation?"
  },
  {
    "field": "Target and threshold",
    "strong": "The fictional target, warning threshold, critical threshold, review trigger, and owner action are documented.",
    "weak": "A red or green color appears with no approved target or decision rule.",
    "question": "What value triggers which action by whom?"
  },
  {
    "field": "Business meaning",
    "strong": "The fictional report translates the value into service, user, data, supplier, recovery, or risk implications.",
    "weak": "A technical count is presented to leadership without explaining why it matters.",
    "question": "What does this value mean for the organization?"
  },
  {
    "field": "Confidence and limitations",
    "strong": "The fictional report documents uncertainty, exclusions, source gaps, assumptions, alternative explanations, and confidence.",
    "weak": "The report sounds certain even though coverage is partial.",
    "question": "What can this metric not prove?"
  },
  {
    "field": "Ownership and review",
    "strong": "The fictional metric has a data owner, control owner, decision owner, review cadence, change trigger, and retirement process.",
    "weak": "No one is accountable for correcting the definition or acting on the result.",
    "question": "Who owns the measure, the control, the decision, and the next review?"
  }
];
const metricTypes = [
  {
    "type": "Control coverage",
    "example": "Percentage of fictional in-scope systems with approved logging enabled.",
    "decision": "Identify missing coverage and assign remediation.",
    "risk": "Coverage does not prove that logs are complete, parsed, reviewed, or useful.",
    "evidence": "Asset inventory, scope rules, configuration evidence, source health, exclusions, and owner review."
  },
  {
    "type": "Control effectiveness",
    "example": "Percentage of fictional access-review decisions completed accurately and validated within the approved cycle.",
    "decision": "Determine whether the control is operating and reducing stale access.",
    "risk": "Completion alone may hide low-quality or rubber-stamped reviews.",
    "evidence": "Review records, decision quality, sampled validation, removals, exceptions, delays, and owner signoff."
  },
  {
    "type": "Risk exposure",
    "example": "Number of fictional high-impact risks with overdue treatment milestones.",
    "decision": "Escalate delayed treatment and review residual risk.",
    "risk": "Counts do not show asset criticality, confidence, or whether risks are independent.",
    "evidence": "Risk register, due dates, owners, impact, likelihood, confidence, treatment status, and dependencies."
  },
  {
    "type": "Detection performance",
    "example": "Median fictional time from supported event occurrence to analyst review.",
    "decision": "Improve telemetry, alert logic, staffing, triage, or escalation.",
    "risk": "Fast review does not prove correct detection or successful response.",
    "evidence": "Event timestamps, receipt times, alerts, case records, source health, staffing, and validation."
  },
  {
    "type": "Incident outcome",
    "example": "Percentage of fictional incidents with validated containment, recovery, and lessons-learned closure.",
    "decision": "Identify recurring gaps in response and improvement.",
    "risk": "Closed cases may still have incomplete root cause or long-term remediation.",
    "evidence": "Incident timeline, actions, validation, recovery, owner signoff, improvement tasks, and review."
  },
  {
    "type": "Third-party performance",
    "example": "Percentage of fictional critical suppliers with current evidence, tested incident contacts, and validated exit plans.",
    "decision": "Prioritize supplier reviews, contract corrections, and continuity tests.",
    "risk": "A completed review does not prove continuous supplier control health.",
    "evidence": "Supplier inventory, criticality, evidence dates, exercises, access, incidents, recovery, and exit tests."
  },
  {
    "type": "Recovery readiness",
    "example": "Percentage of fictional critical services that met approved RTO and RPO during the latest exercise.",
    "decision": "Prioritize recovery improvements and owner actions.",
    "risk": "One successful exercise may not cover every dependency or real disruption condition.",
    "evidence": "Exercise scope, timing, data checks, dependencies, user validation, exceptions, and owner approval."
  },
  {
    "type": "Governance quality",
    "example": "Percentage of fictional high-risk exceptions with current owner, approval, controls, monitoring, and expiration.",
    "decision": "Escalate stale exceptions and weak residual-risk decisions.",
    "risk": "Documentation quality does not automatically prove control effectiveness.",
    "evidence": "Exception register, owners, approvals, controls, monitoring, expiration, renewal, and closure."
  }
];
const reportingLayers = [
  {
    "layer": "Operational view",
    "audience": "Control operators and service teams",
    "content": "Detailed source health, failures, queues, exceptions, tickets, alerts, validation, and immediate actions.",
    "cadence": "Daily or weekly",
    "failure": "Too much raw data without ownership or decision rules."
  },
  {
    "layer": "Control-owner view",
    "audience": "Control and process owners",
    "content": "Control objective, design, operation, coverage, effectiveness, failures, trends, exceptions, remediation, and assurance.",
    "cadence": "Weekly or monthly",
    "failure": "Completion metrics are mistaken for effective control operation."
  },
  {
    "layer": "Risk-owner view",
    "audience": "Business risk owners",
    "content": "Risk scenarios, exposure, control health, residual risk, treatment progress, confidence, decisions, and deadlines.",
    "cadence": "Monthly or event-driven",
    "failure": "Technical counts appear without business impact or treatment choices."
  },
  {
    "layer": "Leadership view",
    "audience": "Executive leadership and governance committees",
    "content": "Top risks, business impact, trends, control health, major exceptions, supplier issues, recovery readiness, decisions, and funding needs.",
    "cadence": "Monthly or quarterly",
    "failure": "Attractive percentages hide scope, exclusions, uncertainty, or overdue actions."
  },
  {
    "layer": "Independent-review view",
    "audience": "Assurance and governance reviewers",
    "content": "Definitions, evidence, sampling, source health, assumptions, limitations, conflicts, owner responses, and validation.",
    "cadence": "Quarterly or planned",
    "failure": "The reviewer accepts dashboard colors without reconstructing the metric."
  },
  {
    "layer": "Incident view",
    "audience": "Responders, risk owners, communications, and leadership",
    "content": "Current facts, supported impact, uncertainty, actions, service status, evidence gaps, decisions, and next update.",
    "cadence": "Event-driven",
    "failure": "Possible impact is reported as confirmed impact."
  },
  {
    "layer": "Supplier view",
    "audience": "Service owners and third-party risk owners",
    "content": "Criticality, access, evidence currency, incidents, service performance, concentration, recovery, exit, and contract actions.",
    "cadence": "Monthly or risk-based",
    "failure": "One assurance report is treated as complete current proof."
  },
  {
    "layer": "Portfolio view",
    "audience": "Reviewers of the learner work",
    "content": "Definitions, fictional evidence, calculations, findings, limits, actions, reflection, and privacy-safe design.",
    "cadence": "At lesson completion",
    "failure": "Real organizational data or unsupported claims are included."
  }
];
const metricRecords = [
  {
    "id": "NBR-MET-01",
    "metric": "Policy compliance rate",
    "value": "98%",
    "scope": "Fictional measured systems only",
    "source": "Control records and asset inventory",
    "issue": "The denominator and excluded legacy systems are not shown in the leadership dashboard.",
    "meaning": "The value is not decision-ready for organization-wide interpretation.",
    "owner": "Security Metrics Owner",
    "action": "Define numerator, denominator, exclusions, source health, confidence, and trend.",
    "limit": "Measured systems may still have strong control performance."
  },
  {
    "id": "NBR-MET-02",
    "metric": "Quarterly access-review completion",
    "value": "92%",
    "scope": "Fictional in-scope business units",
    "source": "Identity review records",
    "issue": "One business unit is overdue and privileged-review quality was not sampled.",
    "meaning": "Completion is strong but does not prove full effectiveness.",
    "owner": "Identity Governance",
    "action": "Complete the overdue review and validate decision quality.",
    "limit": "No specific inappropriate access is confirmed."
  },
  {
    "id": "NBR-MET-03",
    "metric": "Critical supplier evidence currency",
    "value": "75%",
    "scope": "Fictional critical suppliers",
    "source": "Supplier evidence register",
    "issue": "One provider report does not clearly include the exact service and region used.",
    "meaning": "Coverage is partial and one relationship requires service-specific evidence.",
    "owner": "Third-Party Risk Owner",
    "action": "Confirm scope, collect missing evidence, and document limitations.",
    "limit": "No supplier incident is confirmed."
  },
  {
    "id": "NBR-MET-04",
    "metric": "Recovery objective success",
    "value": "80%",
    "scope": "Fictional critical-service exercises",
    "source": "Recovery test records",
    "issue": "One technical restore met timing but lacked business-user validation.",
    "meaning": "Technical recovery evidence is stronger than full business recovery evidence.",
    "owner": "Continuity Manager",
    "action": "Repeat user validation and separate technical and business success rates.",
    "limit": "No current outage is shown."
  },
  {
    "id": "NBR-MET-05",
    "metric": "High-risk exception currency",
    "value": "67%",
    "scope": "Fictional high-risk exceptions",
    "source": "Exception register",
    "issue": "One supplier exception expired and one emergency-role request lacks approval.",
    "meaning": "Governance quality requires immediate owner decisions.",
    "owner": "Security Governance",
    "action": "Remove or renew stale access and complete the emergency-role evidence review.",
    "limit": "Exception gaps do not prove misuse or incident impact."
  },
  {
    "id": "NBR-MET-06",
    "metric": "Log-source health",
    "value": "94%",
    "scope": "Fictional required security sources",
    "source": "Telemetry health monitor",
    "issue": "One storage source has partial object-level coverage under an approved temporary exception.",
    "meaning": "Overall source health is strong but one investigation blind spot remains.",
    "owner": "Security Operations",
    "action": "Monitor compensating logs and complete connector replacement.",
    "limit": "Partial logging does not prove compromise."
  },
  {
    "id": "NBR-MET-07",
    "metric": "Treatment milestones on time",
    "value": "71%",
    "scope": "Fictional high and medium-high risk treatments",
    "source": "Risk treatment register",
    "issue": "Supplier offboarding, policy review, and backup reconstruction tests are delayed.",
    "meaning": "Several important actions require escalation and owner commitment.",
    "owner": "Enterprise Risk Coordinator",
    "action": "Prioritize active stale access and recovery evidence gaps.",
    "limit": "Late milestones do not show that every related control failed."
  },
  {
    "id": "NBR-MET-08",
    "metric": "Incident improvement closure",
    "value": "60%",
    "scope": "Fictional major incident lessons",
    "source": "Lessons-learned action tracker",
    "issue": "One supplier-offboarding improvement has no policy or procedure owner.",
    "meaning": "The organization risks recurrence when lessons are not converted into owned control changes.",
    "owner": "Governance Improvement Lead",
    "action": "Assign owners, update the procedure, test the change, and validate closure.",
    "limit": "Some operational improvements may exist outside the tracker."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Define the fictional decision",
    "detail": "State the control, risk, service, audience, owner, time period, evidence, privacy limits, and decision the metric must support.",
    "output": "Metric and reporting charter."
  },
  {
    "step": "2",
    "title": "Define the metric",
    "detail": "Document purpose, scope, numerator, denominator, exclusions, source, frequency, target, threshold, owner, and calculation.",
    "output": "Metric definition sheet."
  },
  {
    "step": "3",
    "title": "Validate source health",
    "detail": "Review relevance, completeness, timeliness, parsing, delivery, ownership, exclusions, assumptions, and limitations.",
    "output": "Metric evidence register."
  },
  {
    "step": "4",
    "title": "Interpret trend and context",
    "detail": "Compare current value, prior periods, target, threshold, business events, control changes, incidents, dependencies, and uncertainty.",
    "output": "Trend and context analysis."
  },
  {
    "step": "5",
    "title": "Translate for the audience",
    "detail": "Create operational, control-owner, risk-owner, leadership, supplier, incident, or independent-review reporting.",
    "output": "Audience-specific report."
  },
  {
    "step": "6",
    "title": "State findings and limits",
    "detail": "Separate direct observations, supported meaning, alternatives, confidence, limitations, missing evidence, and unsupported claims.",
    "output": "Metric findings matrix."
  },
  {
    "step": "7",
    "title": "Assign decisions and actions",
    "detail": "Define owner actions, due dates, escalation, funding, treatment, validation, monitoring, and review triggers.",
    "output": "Decision and action register."
  },
  {
    "step": "8",
    "title": "Review and improve",
    "detail": "Confirm definition quality, usefulness, changed scope, source health, lessons learned, retirement, replacement, and portfolio safety.",
    "output": "Reviewed metrics package."
  }
];
const findings = [
  {
    "id": "NBR-MET-F01",
    "statement": "The fictional ninety-eight percent policy-compliance metric is not organization-wide because its denominator and excluded systems are undocumented.",
    "support": "Dashboard, metric definition, asset inventory, excluded legacy systems, control records, and owner response.",
    "alternative": "The percentage may be accurate for the measured systems.",
    "confidence": "High",
    "limitation": "The finding does not prove weak control operation within the measured scope."
  },
  {
    "id": "NBR-MET-F02",
    "statement": "The fictional ninety-two percent access-review completion rate overstates control assurance because one unit is overdue and decision quality was not sampled.",
    "support": "Review schedule, completion records, overdue unit, privileged population, decision notes, and missing sample validation.",
    "alternative": "The completed reviews may still be accurate and effective.",
    "confidence": "Medium-High",
    "limitation": "No specific inappropriate access is confirmed."
  },
  {
    "id": "NBR-MET-F03",
    "statement": "The fictional recovery-success metric should separate technical restoration from business-user validation.",
    "support": "Exercise records, restore timing, service health, user-validation gap, owner map, and recovery criteria.",
    "alternative": "Technical recovery may satisfy a limited interim service objective.",
    "confidence": "High",
    "limitation": "No current outage or failed real recovery is shown."
  },
  {
    "id": "NBR-MET-F04",
    "statement": "The fictional supplier-evidence currency rate should not count a report whose scope does not clearly include the exact service and region.",
    "support": "Supplier inventory, report scope, service architecture, region use, due-diligence criteria, and owner response.",
    "alternative": "The supplier may provide a scope clarification that resolves the gap.",
    "confidence": "Medium-High",
    "limitation": "No supplier control failure or incident is confirmed."
  },
  {
    "id": "NBR-MET-F05",
    "statement": "The fictional incident-improvement metric reveals governance risk because an offboarding action remains unowned even though some operational change may exist.",
    "support": "Lessons-learned tracker, recommendation, missing owner, current procedure, supplier exception, and governance matrix.",
    "alternative": "Teams may have implemented an undocumented process improvement.",
    "confidence": "Medium-High",
    "limitation": "The tracker alone cannot prove current process effectiveness."
  },
  {
    "id": "NBR-MET-F06",
    "statement": "The safest leadership report should prioritize active stale access, missing recovery validation, overdue treatment, and unowned improvement rather than highlighting only favorable percentages.",
    "support": "Exception currency, access review, treatment milestones, recovery results, supplier access, and incident-improvement records.",
    "alternative": "Leadership may reorder priorities during an active incident or major business deadline.",
    "confidence": "High",
    "limitation": "Final priority requires fictional leadership and risk-owner decisions."
  }
];
const commonMistakes = [
  "Collecting fictional metrics because tools provide them rather than because a decision requires them.",
  "Publishing percentages without numerator, denominator, exclusions, source health, and counting rules.",
  "Treating control coverage as proof of control effectiveness.",
  "Treating completed reviews, tickets, training, or tests as proof of quality without validation.",
  "Using dashboard colors without documented targets, thresholds, owners, and actions.",
  "Comparing time periods whose scope, source, definitions, or environment changed.",
  "Treating correlation or simultaneous change as proof of causation.",
  "Reporting possible impact, risk, or supplier weakness as a confirmed incident.",
  "Hiding missing sources, partial coverage, stale data, parsing failure, or uncertainty.",
  "Using averages when extreme cases, critical assets, or delayed high-impact actions matter more.",
  "Presenting raw technical counts to leadership without business meaning, decision options, and ownership.",
  "Choosing only favorable metrics and excluding overdue exceptions, failed tests, or unresolved actions.",
  "Keeping a metric after it no longer supports a useful decision or reliable source.",
  "Using or exposing any real company dashboard, employee data, school records, supplier report, internal risk register, incident evidence, credentials, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What makes a fictional security metric useful?",
    "choices": [
      "It supports a defined decision with clear scope, calculation, source health, owner, target, threshold, interpretation, limitations, and review.",
      "It has a colorful dashboard.",
      "It always shows improvement.",
      "It contains the largest possible number."
    ],
    "answer": 0,
    "explanation": "A useful metric connects reliable evidence to an actual decision."
  },
  {
    "question": "Why is a fictional denominator important?",
    "choices": [
      "It identifies the total eligible population and makes a percentage interpretable.",
      "It proves control effectiveness.",
      "It removes all exclusions.",
      "It is needed only for financial reports."
    ],
    "answer": 0,
    "explanation": "Without a denominator, a percentage may hide scope and exclusions."
  },
  {
    "question": "What is the difference between fictional coverage and effectiveness?",
    "choices": [
      "Coverage shows where a control is present, while effectiveness shows whether it operates and reduces the intended risk.",
      "They are identical.",
      "Effectiveness is always higher.",
      "Coverage proves every result is correct."
    ],
    "answer": 0,
    "explanation": "Presence does not automatically prove successful control operation."
  },
  {
    "question": "What does a fictional ninety-eight percent compliance rate prove when exclusions are unclear?",
    "choices": [
      "The measured scope may perform strongly, but organization-wide interpretation is unsupported.",
      "The organization is ninety-eight percent secure.",
      "Every system is compliant.",
      "A confirmed incident occurred."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion preserves both the measured result and the scope limitation."
  },
  {
    "question": "Why should fictional metric confidence be reported?",
    "choices": [
      "To show how strongly source quality, coverage, assumptions, and limitations support the interpretation.",
      "To replace the metric value.",
      "To guarantee accuracy.",
      "To avoid assigning owners."
    ],
    "answer": 0,
    "explanation": "Confidence communicates evidence strength and uncertainty."
  },
  {
    "question": "What belongs in a fictional leadership security report?",
    "choices": [
      "Top risks, business meaning, trends, control health, uncertainty, decisions, owners, deadlines, and required actions.",
      "Only raw log counts.",
      "Only favorable percentages.",
      "Every technical event from every system."
    ],
    "answer": 0,
    "explanation": "Leadership reporting should be concise, decision-ready, and business-connected."
  },
  {
    "question": "What makes a fictional metric finding defensible?",
    "choices": [
      "It links definition, scope, calculation, sources, health, trend, business context, alternatives, confidence, limitations, owners, and actions.",
      "It relies on one dashboard color.",
      "It hides excluded systems.",
      "It assumes correlation proves cause."
    ],
    "answer": 0,
    "explanation": "Defensible reporting makes the full evidence and decision chain visible."
  }
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode; }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Back to Module</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function SecurityMetricsReportingReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I14</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 7 of 8</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I14.7 Security Metrics, Reporting, and Review</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Learn how defenders design fictional measurements, metrics, thresholds, trends, dashboards, technical reports, leadership summaries, evidence limits, decisions, ownership, and continuous review.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Intermediate" moduleTitle="I14: Security Policies and Risk" lessonTitle="Security Metrics, Reporting, and Review" lessonNumber={7} totalLessons={8} />

        <ReadinessCheck title="Before You Start" items={[
          "I will use only the supplied fictional Northbridge metrics, dashboards, sources, owners, risks, controls, suppliers, recovery records, and decisions.",
          "I will not request, expose, or evaluate any real company dashboard, employee data, school records, supplier report, private risk register, incident evidence, credentials, or confidential business information.",
          "I will distinguish measurement, metric, coverage, effectiveness, trend, threshold, target, source health, confidence, and business meaning.",
          "I will not treat percentages, colors, correlation, or partial coverage as proof of overall security, cause, incident, or impact.",
          "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
        ]} />

        <SectionCard eyebrow="Professional Hook" title="A Green Dashboard Can Still Hide a Red Decision">
          <p className="leading-8">The fictional Northbridge leadership dashboard reports ninety-eight percent policy compliance, ninety-two percent access-review completion, eighty percent recovery success, and ninety-four percent log-source health. These values sound strong. Yet the policy metric hides excluded systems, one access review is overdue, one recovery exercise lacks business validation, and one logging source remains partial. Good reporting explains exact scope, strength, limits, and required action.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak reporting</p><p className="mt-2 leading-7">Publish attractive percentages, hide exclusions, use dashboard colors as conclusions, report possible impact as confirmed, and leave values without owners or decisions.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional reporting</p><p className="mt-2 leading-7">Define the metric, validate source health, explain scope and trend, connect business meaning, state confidence and limits, assign actions, and review usefulness.</p></div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">{objectives.map((objective,index)=><div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index+1}</p><p className="mt-3 font-semibold leading-7">{objective}</p></div>)}</section>

        <SectionCard eyebrow="Why This Matters" title="Metrics Shape Priorities, Funding, Escalation, and Risk Decisions"><p className="leading-8">Fictional leaders may approve funding, accept risk, delay a project, change a supplier, or escalate control failure based on a small set of metrics. Poor definitions can create false confidence or false urgency. Strong metrics make the calculation, evidence, scope, uncertainty, business meaning, ownership, and decision path visible.</p></SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Definition–Evidence–Meaning–Decision Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
            ["Definition","Which fictional purpose, scope, numerator, denominator, exclusion, frequency, target, threshold, owner, and calculation define the metric?"],
            ["Evidence","Which fictional sources, source-health checks, records, tests, time periods, assumptions, and limitations support the value?"],
            ["Meaning","Which fictional control, risk, service, users, supplier, recovery objective, trend, confidence, and business effect does the value represent?"],
            ["Decision","Which fictional owner should investigate, remediate, fund, accept, escalate, validate, review, retire, or redesign the metric and related control?"],
          ].map(([title,detail])=><div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p><h2 className="mt-2 text-2xl font-bold text-white">Metrics, Trends, Reporting, and Decision Terms</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{vocabulary.map(([term,definition])=><article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></article>)}</div></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Metric Design</p><h2 className="mt-2 text-2xl font-bold text-white">Eight Questions before Publishing a Fictional Metric</h2><div className="mt-6 grid gap-5">{metricDesignFields.map(item=><article key={item.field} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.field}</h3><div className="mt-4 grid gap-4 lg:grid-cols-3"><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong design</p><p className="mt-2 text-sm leading-6">{item.strong}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak design</p><p className="mt-2 text-sm leading-6">{item.weak}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Reviewer question</p><p className="mt-2 text-sm leading-6">{item.question}</p></div></div></article>)}</div></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Metric Types</p><h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Metric Families and Their Limits</h2><div className="mt-6 grid gap-5">{metricTypes.map(item=><article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.type}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Fictional example",item.example],["Decision use",item.decision],["Interpretation risk",item.risk],["Evidence",item.evidence]].map(([label,detail])=><div key={`${item.type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Reporting Layers</p><h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Reporting Views for Different Decisions</h2><div className="mt-6 grid gap-5">{reportingLayers.map(item=><article key={item.layer} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><h3 className="text-lg font-black text-cyan-100">{item.layer}</h3><span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">{item.audience}</span><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.cadence}</span></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Content</p><p className="mt-2 text-sm leading-6">{item.content}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Failure risk</p><p className="mt-2 text-sm leading-6">{item.failure}</p></div></div></article>)}</div></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Metric Register</p><h2 className="mt-2 text-2xl font-bold text-white">Northbridge Fictional Metric Records</h2><div className="mt-6 grid gap-5">{metricRecords.map(item=><article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><h3 className="text-lg font-black text-white">{item.metric}</h3><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.value}</span></div><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Scope",item.scope],["Source",item.source],["Issue",item.issue],["Supported meaning",item.meaning],["Owner",item.owner],["Required action",item.action],["Evidence limit",item.limit]].map(([label,detail])=><div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p><h2 className="mt-2 text-2xl font-bold text-white">Build a Fictional Security Metrics and Reporting Package</h2><div className="mt-6 grid gap-4">{workflowSteps.map(item=><article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span><h3 className="font-black text-cyan-100">{item.title}</h3><p className="text-sm leading-6 text-slate-300">{item.detail}</p><p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p></article>)}</div></section>

        <FakeDashboardCard title="Fake Northbridge Leadership Security Dashboard" subtitle="Training dashboard for fictional metric and reporting evidence only." metrics={[
          {label:"Policy compliance",value:"98%",note:"Measured systems only; denominator and legacy exclusions must be added before organization-wide interpretation."},
          {label:"Access-review completion",value:"92%",note:"One business unit is overdue and privileged-review quality requires sampled validation."},
          {label:"Recovery success",value:"80%",note:"One technical restore met timing but lacks complete business-user validation."},
        ]} />

        <FakeAlertCard title="Leadership Metric Has an Undefined Denominator" severity="High" time="3:20 PM" source="Fake Metrics Review Console" details="A fictional dashboard reports ninety-eight percent policy compliance, but the metric definition does not identify excluded legacy systems or the full eligible population." recommendation="Pause organization-wide interpretation, define numerator, denominator, scope, exclusions, counting rules, source health, target, trend, confidence, and owner action. Republish the metric with business meaning and limitations without discarding valid measured results." />

        <FakeLogPanel title="Fake Northbridge Metrics Review Records" logs={[
          "09:00 CHARTER audience='leadership and control owners'",
          "09:08 METRIC policy-compliance value='98%' denominator='undefined'",
          "09:16 METRIC access-review value='92%' overdue-unit='1'",
          "09:24 METRIC supplier-evidence value='75%' scope-gap='1'",
          "09:32 METRIC recovery-success value='80%' business-validation='partial'",
          "09:40 METRIC exception-currency value='67%' stale-access='1'",
          "09:48 METRIC log-source-health value='94%' object-coverage='partial'",
          "09:56 METRIC treatment-on-time value='71%' overdue-actions='3'",
          "10:04 METRIC incident-improvement value='60%' unowned-action='1'",
          "10:12 SOURCE_HEALTH critical='mostly healthy'",
          "10:20 FINDING coverage='not equal effectiveness'",
          "10:28 FINDING correlation='not causation'",
          "10:36 REPORT confirmed-incident='none'",
          "10:44 PRIORITY stale-access-and-recovery='first'",
          "10:52 ACTION redefine-policy-metric='required'",
          "11:00 REVIEW decision-ready='after scope and limits'",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Findings Matrix</p><h2 className="mt-2 text-2xl font-bold text-white">Northbridge Metrics Findings and Limits</h2><div className="mt-6 grid gap-5">{findings.map(item=><article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span></div><h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Evidence support</p><p className="mt-2 text-sm leading-6">{item.support}</p></div><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Alternative</p><p className="mt-2 text-sm leading-6">{item.alternative}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Limitation</p><p className="mt-2 text-sm leading-6">{item.limitation}</p></div></div></article>)}</div></section>

        <AnalyzeEvidenceCard title="What Does the Ninety-Eight Percent Compliance Metric Support?" evidence={[
          "The fictional dashboard reports ninety-eight percent policy compliance.",
          "The measured systems have current control records.",
          "Several legacy systems are excluded.",
          "The denominator and exclusions are not shown in the leadership definition.",
          "No evidence shows that the measured value was calculated incorrectly.",
          "No evidence supports organization-wide ninety-eight percent compliance.",
        ]} question="Which conclusion is strongest?" options={[
          "The metric may accurately describe the measured systems, but organization-wide interpretation is unsupported until scope, denominator, exclusions, and source health are documented.",
          "The organization is ninety-eight percent secure.",
          "Every system is compliant.",
          "The metric is useless and should be deleted.",
        ]} bestAnswer={0} explanation="The strongest conclusion preserves valid measured evidence while correcting the unsupported broad interpretation." />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Security Metrics and Reporting"><div className="grid gap-3 md:grid-cols-2">{commonMistakes.map(mistake=><div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>)}</div></SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Northbridge Security Metrics and Reporting Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p><h3 className="mt-3 text-xl font-black text-white">Definitions, Sources, Trends, Meaning, Decisions, and Review</h3><p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge records to complete an end-to-end security metrics, reporting, and review package.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p><ol className="mt-3 list-decimal space-y-2 pl-5 leading-7"><li>Metrics charter with audience, decisions, scope, owners, evidence, privacy, and review cycle.</li><li>Metric catalog with purpose, numerator, denominator, exclusions, source, frequency, target, threshold, and owner.</li><li>Source-health and evidence-quality register.</li><li>Trend, context, leading, lagging, coverage, effectiveness, risk, supplier, and recovery analysis.</li><li>Operational, control-owner, risk-owner, and leadership reporting views.</li><li>Findings with alternatives, confidence, limitations, business meaning, and unsupported claims.</li><li>Decision and action register with owners, deadlines, escalation, validation, and review triggers.</li><li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li></ol></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Complete the lab only with fictional evidence displayed on this page. Do not use real dashboards, company data, employee records, school information, private supplier reports, credentials, incidents, or confidential business information.</div>
        </SectionCard>

        <ScenarioDecisionLab title="Leadership Wants One Overall Security Score" scenario="The fictional leadership team requests a single score combining policy compliance, access reviews, supplier evidence, recovery tests, exception currency, and incident improvements." choices={[
          {label:"Choice A",response:"Provide a concise summary with separate measures, shared definitions, confidence, limits, top risks, trends, and decisions instead of hiding unlike evidence inside one unsupported number.",outcome:"Best reporting choice. Leadership receives a clear overview without false precision.",tone:"best"},
          {label:"Choice B",response:"Average every percentage and call it the organization’s security level.",outcome:"Unsupported. The measures have different scopes, meanings, and evidence quality.",tone:"risk"},
          {label:"Choice C",response:"Refuse to provide any leadership summary.",outcome:"Weak. A concise decision-ready summary is still useful.",tone:"risk"},
        ]} />

        <ScenarioDecisionLab title="A Recovery Metric Is Green, but Business Validation Is Missing" scenario="The fictional reporting service restored within the technical RTO, but the business owner did not validate the minimum service level." choices={[
          {label:"Choice A",response:"Report technical restoration as successful, business recovery as incomplete, explain the difference, assign user validation, and update the metric definition.",outcome:"Best reporting choice. The result remains accurate and decision-ready.",tone:"best"},
          {label:"Choice B",response:"Report full recovery success because the server was available.",outcome:"Unsupported. Business service validation is incomplete.",tone:"risk"},
          {label:"Choice C",response:"Report total recovery failure.",outcome:"Unsupported. Technical restoration succeeded.",tone:"risk"},
        ]} />

        <DefenderChecklist title="Security Metrics, Reporting, and Review Checklist" items={[
          "I can define a fictional metric purpose, scope, numerator, denominator, exclusions, source, frequency, target, threshold, owner, and calculation.",
          "I can distinguish fictional measurement, metric, indicator, target, threshold, trend, coverage, effectiveness, confidence, and business meaning.",
          "I can evaluate fictional source relevance, health, completeness, timeliness, parsing, ownership, and limitations.",
          "I can distinguish fictional control coverage from control effectiveness.",
          "I can separate technical success, business success, possible impact, confirmed impact, correlation, and causation.",
          "I can create fictional operational, control-owner, risk-owner, leadership, supplier, recovery, incident, and independent-review reporting.",
          "I can explain fictional trends without comparing incompatible definitions or scopes.",
          "I can write fictional findings with evidence, alternatives, confidence, limitations, business meaning, owners, and actions.",
          "I can retire or redesign fictional metrics that no longer support a useful decision.",
          "I will use only fictional evidence and never expose real dashboards, company information, employee data, school records, supplier reports, credentials, incidents, or confidential business information.",
        ]} />

        <MiniQuiz title="I14.7 Mini Quiz: Security Metrics, Reporting, and Review" questions={quizQuestions} />

        <PortfolioPrompt title="Portfolio Prompt" prompt="Create a fictional Security Metrics, Reporting, and Review Package for Northbridge. Include the metrics charter, metric catalog, definitions, numerator and denominator rules, exclusions, source-health checks, targets, thresholds, trends, leading and lagging indicators, coverage and effectiveness measures, supplier and recovery metrics, operational and leadership views, findings, confidence, limitations, decisions, actions, review cycle, leadership summary, reflection, and a portfolio-safety statement." tips={[
          "Use only fictional metrics, sources, systems, suppliers, owners, evidence, dates, values, incidents, and decisions.",
          "Do not treat a percentage, dashboard color, source gap, trend, or correlation as proof of overall security, cause, compromise, or confirmed impact.",
          "Make every value traceable to a definition, calculation, source, scope, time period, and owner.",
          "Show both positive results and the exclusions, delays, blind spots, and actions that leadership still needs to understand.",
        ]} />

        <KeyTakeaways takeaways={[
          "Security metrics should exist to support specific decisions.",
          "Percentages require clear numerators, denominators, exclusions, counting rules, and source health.",
          "Control coverage is not the same as control effectiveness.",
          "Technical success may differ from business success.",
          "Metrics need business meaning, confidence, limitations, ownership, and action.",
          "Leadership reporting should prioritize decisions rather than hiding complexity inside one unsupported score.",
          "Portfolio artifacts should use fully fictional metric evidence and never expose real organizational records.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p><h2 className="mt-2 text-2xl font-bold text-white">Continue Module I14</h2><div className="mt-5"><Navigation /></div></section>
      </div>

      <Footer />
    </main>
  );
}

/*
Fictional portfolio review appendix:
- Recalculate every ratio from the numerator and denominator.
- Record every exclusion and explain whether it changes the decision.
- Compare current and prior periods only after checking definition consistency.
- Separate control presence, control operation, control quality, and risk reduction.
- Preserve source-health failures and blind spots as part of the finding.
- Use technical, risk-owner, and leadership summaries with different detail levels.
- State direct observations, supported conclusions, alternatives, confidence, and limitations.
- Assign every metric, action, escalation, and review to an accountable fictional owner.
- Retire metrics that no longer answer a useful question.
- Use no real private data, credentials, employee information, school records, supplier reports, or confidential dashboards.
*/