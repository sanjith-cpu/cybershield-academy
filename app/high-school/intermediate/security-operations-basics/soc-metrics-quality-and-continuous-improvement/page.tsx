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
const modulePath = `${trackPath}/security-operations-basics`;
const previousLesson = `${modulePath}/threat-intelligence-in-security-operations`;
const nextLesson = `${modulePath}/security-operations-integrated-lab`;

const objectives = [
  "Explain how fictional SOC metrics connect operational goals, definitions, data sources, owners, targets, thresholds, trends, decisions, and improvement.",
  "Distinguish fictional activity metrics, quality metrics, outcome metrics, risk indicators, service indicators, source-health metrics, workload measures, and assurance evidence.",
  "Evaluate fictional metrics for clarity, consistency, timeliness, completeness, relevance, comparability, privacy, gaming risk, and decision usefulness.",
  "Build a fictional SOC quality-review process covering alert triage, case records, detection changes, communications, handoffs, source health, closures, and improvement actions.",
  "Create a portfolio-safe fictional SOC metrics package with a metric catalog, dashboard critique, review plan, findings, action backlog, leadership summary, and reassessment schedule."
];
const vocabulary = [
  [
    "Metric",
    "A fictional defined measure used to describe activity, quality, outcome, risk, service, source health, or improvement."
  ],
  [
    "Key performance indicator",
    "A fictional measure used to evaluate progress toward a defined operational objective."
  ],
  [
    "Key risk indicator",
    "A fictional measure used to signal increasing exposure, control weakness, service risk, source blindness, or decision delay."
  ],
  [
    "Service level objective",
    "A fictional target for timeliness, availability, completion, response, or quality that supports a security operations service."
  ],
  [
    "Target",
    "A fictional desired performance level connected to an owner, time period, rationale, and action if missed."
  ],
  [
    "Threshold",
    "A fictional value or condition that triggers review, escalation, correction, or a change in priority."
  ],
  [
    "Trend",
    "A fictional pattern across time that may show improvement, deterioration, seasonality, workload change, or data-quality issues."
  ],
  [
    "Numerator",
    "The fictional counted value above the fraction line in a rate or percentage."
  ],
  [
    "Denominator",
    "The fictional eligible population used to interpret a rate or percentage."
  ],
  [
    "Data lineage",
    "A fictional record of where metric data comes from, how it is transformed, who owns it, and which limits apply."
  ],
  [
    "Metric owner",
    "The fictional role accountable for definition, source health, calculation, reporting, review, and improvement use."
  ],
  [
    "Quality sampling",
    "A fictional review of selected alerts, cases, communications, detections, handoffs, or closures using a documented method."
  ],
  [
    "Leading indicator",
    "A fictional measure that may signal future risk or performance before the final outcome occurs."
  ],
  [
    "Lagging indicator",
    "A fictional measure that describes a result after the event, case, response, or improvement has occurred."
  ],
  [
    "Goodhart risk",
    "A fictional risk that people optimize the measured number rather than the real security outcome."
  ],
  [
    "Continuous improvement",
    "A fictional repeatable process that converts evidence, reviews, metrics, incidents, near misses, and lessons into validated operational changes."
  ]
];
const metricDesignQuestions = [
  {
    "question": "Which objective does the metric support?",
    "strong": "The fictional metric names the operational goal, audience, owner, decision, time period, and expected use.",
    "weak": "The dashboard includes the number because it is easy to count.",
    "review": "What decision changes when the value moves?"
  },
  {
    "question": "Is the definition precise?",
    "strong": "The fictional metric defines numerator, denominator, inclusion, exclusion, status, time window, duplicates, and source.",
    "weak": "Different teams calculate the same label differently.",
    "review": "Could two reviewers reproduce the same result?"
  },
  {
    "question": "Is the source healthy?",
    "strong": "The fictional metric records source ownership, delivery, parsing, coverage, completeness, latency, and known blind spots.",
    "weak": "The metric is reported even when required records are missing.",
    "review": "Can the source support this conclusion?"
  },
  {
    "question": "Is the metric actionable?",
    "strong": "The fictional metric has a target, threshold, owner, review cadence, decision path, and improvement response.",
    "weak": "The value appears on a dashboard but no one knows what to do.",
    "review": "Who acts when the metric is outside range?"
  },
  {
    "question": "Does the metric measure quality or only activity?",
    "strong": "The fictional dashboard combines activity with evidence quality, outcomes, source health, business validation, and residual risk.",
    "weak": "Success is measured by alerts closed, cases closed, or messages sent alone.",
    "review": "Could the number improve while security quality gets worse?"
  },
  {
    "question": "Can the metric be gamed?",
    "strong": "The fictional design tests whether analysts could improve the number by lowering priority, closing early, splitting cases, or avoiding difficult work.",
    "weak": "The target rewards speed without quality safeguards.",
    "review": "Which unintended behavior could this target encourage?"
  },
  {
    "question": "Is the metric comparable over time?",
    "strong": "The fictional design records definition changes, source changes, staffing changes, volume changes, seasonality, and version history.",
    "weak": "A current value is compared with an older value calculated differently.",
    "review": "Did the process or data change?"
  },
  {
    "question": "Does the metric protect privacy and context?",
    "strong": "The fictional report minimizes unnecessary identity or case detail and explains uncertainty, scope, and limitations.",
    "weak": "The dashboard exposes sensitive case information or ranks individuals without context.",
    "review": "Is the measure necessary, fair, and appropriately handled?"
  }
];
const metricCatalog = [
  {
    "id": "NBR-MET-01",
    "name": "Alert triage within target",
    "type": "Service performance",
    "definition": "Percentage of eligible fictional alerts receiving documented initial triage within the priority-specific target.",
    "source": "Alert queue, triage record, priority model, and source-health register.",
    "target": "90% overall with separate targets by priority.",
    "owner": "SOC Manager",
    "decision": "Review staffing, routing, queue aging, priority rules, and source delays.",
    "risk": "Analysts may perform shallow triage to meet the clock."
  },
  {
    "id": "NBR-MET-02",
    "name": "Triage quality pass rate",
    "type": "Quality",
    "definition": "Percentage of sampled fictional triage records containing source health, context, facts, alternatives, confidence, priority rationale, owner, and next action.",
    "source": "Quality-review sample and triage records.",
    "target": "95% pass rate with no critical evidence omissions.",
    "owner": "SOC Quality Lead",
    "decision": "Improve coaching, templates, reviews, and escalation guidance.",
    "risk": "Sampling only easy alerts can inflate quality."
  },
  {
    "id": "NBR-MET-03",
    "name": "Cases with complete evidence registers",
    "type": "Case quality",
    "definition": "Percentage of eligible fictional cases with traceable evidence identifiers, sources, owners, timestamps, relevance, source health, scope, confidence, and limitations.",
    "source": "Case system and evidence-register quality review.",
    "target": "98% for High and Critical cases; 90% for others.",
    "owner": "Case Management Lead",
    "decision": "Return incomplete cases, improve templates, and address source or training gaps.",
    "risk": "Completeness can become a checkbox exercise without evidence relevance."
  },
  {
    "id": "NBR-MET-04",
    "name": "Open cases beyond review threshold",
    "type": "Risk indicator",
    "definition": "Count and percentage of fictional open cases older than the priority-specific review threshold without documented owner action or approved delay.",
    "source": "Case status, priority, action log, owner, and review deadlines.",
    "target": "Zero Critical; fewer than 5% overall.",
    "owner": "SOC Operations Lead",
    "decision": "Escalate ownership, rebalance workload, resolve blockers, or revise unrealistic targets.",
    "risk": "Closing cases early can improve the number while weakening quality."
  },
  {
    "id": "NBR-MET-05",
    "name": "Critical source-health coverage",
    "type": "Source assurance",
    "definition": "Percentage of required fictional critical security sources reporting within approved timeliness, parsing, completeness, and coverage limits.",
    "source": "Source-health monitor, ownership register, parser status, and coverage inventory.",
    "target": "99.5% with documented compensating evidence during gaps.",
    "owner": "Telemetry Owner",
    "decision": "Restore sources, activate compensating controls, and escalate blind spots.",
    "risk": "Availability alone may hide parsing or field-quality failures."
  },
  {
    "id": "NBR-MET-06",
    "name": "Detection changes with complete testing",
    "type": "Detection assurance",
    "definition": "Percentage of fictional detection changes with positive, negative, boundary, missing-data, replay, business-validation, rollback, approval, and monitoring evidence.",
    "source": "Detection version history and change records.",
    "target": "100% for production changes.",
    "owner": "Detection Engineering Lead",
    "decision": "Block deployment, improve testing, or return the change for review.",
    "risk": "Teams may copy test templates without meaningful coverage."
  },
  {
    "id": "NBR-MET-07",
    "name": "False-positive reduction with preserved test coverage",
    "type": "Outcome quality",
    "definition": "Change in unnecessary fictional alert volume after tuning, paired with successful positive tests and no increase in missed synthetic conditions.",
    "source": "Alert outcomes, test results, version history, and quality review.",
    "target": "Meaningful noise reduction with full required test pass.",
    "owner": "Detection Engineer",
    "decision": "Keep, revise, or roll back tuning.",
    "risk": "Lower alert volume alone can hide false negatives."
  },
  {
    "id": "NBR-MET-08",
    "name": "Shift handoffs acknowledged on time",
    "type": "Workflow quality",
    "definition": "Percentage of fictional handoffs acknowledged by the incoming owner before the required transfer deadline.",
    "source": "Handoff records, case assignments, and acknowledgement timestamps.",
    "target": "100% for open High and Critical cases; 95% overall.",
    "owner": "Shift Lead",
    "decision": "Escalate missing ownership and improve handoff process.",
    "risk": "Automatic assignment may be counted as acknowledgement without real review."
  },
  {
    "id": "NBR-MET-09",
    "name": "Leadership updates with complete decision fields",
    "type": "Communication quality",
    "definition": "Percentage of sampled fictional leadership updates containing facts, business meaning, uncertainty, actions, owners, decisions, deadlines, and next update.",
    "source": "Communication log and quality-review sample.",
    "target": "95% quality pass rate.",
    "owner": "SOC Manager",
    "decision": "Improve templates, review, communication authority, and training.",
    "risk": "Overly rigid templates may create long or unreadable updates."
  },
  {
    "id": "NBR-MET-10",
    "name": "Improvement actions closed with validation",
    "type": "Continuous improvement",
    "definition": "Percentage of fictional improvement actions completed by deadline with owner evidence, test results, outcome validation, and reassessment trigger.",
    "source": "Improvement backlog, action records, tests, and owner signoff.",
    "target": "90% on time; 100% of High-priority actions validated.",
    "owner": "SOC Improvement Lead",
    "decision": "Escalate blockers, revise ownership, or reopen incomplete work.",
    "risk": "Marking an action complete without proving the outcome."
  }
];
const dashboardRecords = [
  {
    "id": "NBR-DASH-01",
    "metric": "Mean time to close",
    "value": "4.2 hours",
    "good": "The fictional calculation separates priority, case type, duplicate cases, waiting states, and approved delays.",
    "problem": "One average hides Critical cases, simple duplicates, complex supplier cases, and premature closures.",
    "better": "Report distributions by priority and pair speed with case-quality and reopen measures."
  },
  {
    "id": "NBR-DASH-02",
    "metric": "Alerts closed per analyst",
    "value": "38 per shift",
    "good": "The fictional value may help understand workload when combined with alert complexity and quality.",
    "problem": "The metric can reward shallow triage, duplicate splitting, and early closure.",
    "better": "Pair activity with quality sampling, escalation accuracy, case outcomes, and source-health context."
  },
  {
    "id": "NBR-DASH-03",
    "metric": "False-positive rate",
    "value": "22%",
    "good": "The fictional rate uses reviewed outcomes and a documented denominator.",
    "problem": "The label may mix expected behavior, duplicate alerts, insufficient evidence, and detection design errors.",
    "better": "Separate outcome categories and pair tuning results with positive-test coverage."
  },
  {
    "id": "NBR-DASH-04",
    "metric": "Source availability",
    "value": "99.8%",
    "good": "The fictional metric reports uptime for required security sources.",
    "problem": "Availability can remain high while parsing, field completeness, latency, or coverage is poor.",
    "better": "Add timeliness, parsing, completeness, coverage, ownership, and blind-spot duration."
  },
  {
    "id": "NBR-DASH-05",
    "metric": "Cases closed this month",
    "value": "412",
    "good": "The fictional activity measure shows throughput.",
    "problem": "Higher closure volume does not prove stronger outcomes and may hide reopenings or incomplete evidence.",
    "better": "Add closure-quality pass rate, reopen rate, residual-risk documentation, and improvement follow-up."
  },
  {
    "id": "NBR-DASH-06",
    "metric": "High-severity alerts",
    "value": "86",
    "good": "The fictional count shows tool output volume.",
    "problem": "Severity is not triage priority, incident severity, or business impact.",
    "better": "Show triage priority, case conversion, supported impact, duplicate rate, source health, and final outcomes."
  },
  {
    "id": "NBR-DASH-07",
    "metric": "Handoff completion",
    "value": "100%",
    "good": "The fictional dashboard shows every required handoff record exists.",
    "problem": "Completion does not prove the incoming owner read or accepted the case.",
    "better": "Measure acknowledgement, missing fields, missed commitments, and quality-review results."
  },
  {
    "id": "NBR-DASH-08",
    "metric": "Training completion",
    "value": "97%",
    "good": "The fictional metric shows assigned learning completion.",
    "problem": "Completion does not prove the skill changed case quality or decision accuracy.",
    "better": "Connect training to observed quality gaps, practical assessment, coaching, and later metric change."
  }
];
const qualitySampleAreas = [
  {
    "area": "Alert triage",
    "sample": "Fictional alerts across priority, source, service, analyst, shift, and outcome.",
    "checks": "Source health, context, facts, alternatives, confidence, priority rationale, owner, next action, and deadline.",
    "failure": "Severity copied as priority or evidence limits omitted.",
    "action": "Coaching, template change, detection tuning, source correction, or workflow review."
  },
  {
    "area": "Case management",
    "sample": "Fictional open, closed, duplicate, supplier, source-gap, maintenance, and control-change cases.",
    "checks": "Scope, evidence register, timeline, actions, decisions, communication, validation, residual risk, and closure.",
    "failure": "Untraceable evidence or premature closure.",
    "action": "Return case, improve review, correct process, or escalate ownership."
  },
  {
    "area": "Detection changes",
    "sample": "Fictional new, tuned, rolled-back, retired, and pilot detections.",
    "checks": "Objective, data map, tests, approval, staging, monitoring, versioning, rollback, case value, and drift.",
    "failure": "Noise reduced without false-negative testing.",
    "action": "Pause deployment, extend testing, roll back, or revise logic."
  },
  {
    "area": "Communications",
    "sample": "Fictional technical, owner, supplier, leadership, incident, and handoff messages.",
    "checks": "Facts, audience, uncertainty, impact status, authority, decision, deadline, next update, acknowledgement, and closure.",
    "failure": "Possible impact reported as confirmed.",
    "action": "Correct the message, coach the sender, improve templates, or review authority."
  },
  {
    "area": "Source health",
    "sample": "Fictional critical and noncritical sources with healthy, delayed, misparsed, missing-field, and restored states.",
    "checks": "Delivery, parsing, completeness, timeliness, coverage, owner, compensating evidence, restoration, and validation.",
    "failure": "Availability reported while fields are unusable.",
    "action": "Repair source, add monitoring, revise metric, or improve ownership."
  },
  {
    "area": "Shift handoffs",
    "sample": "Fictional handoffs across priority, shift, supplier dependency, open decision, and communication commitment.",
    "checks": "Scope, facts, evidence, actions, decisions, deadlines, risks, commitments, closure criteria, and acknowledgement.",
    "failure": "Incoming ownership assumed but not accepted.",
    "action": "Escalate transfer, improve process, or add quality controls."
  },
  {
    "area": "Case closure",
    "sample": "Fictional cases closed as benign, duplicate, monitoring complete, control corrected, supplier recovered, or incident resolved.",
    "checks": "Security validation, business validation, source health, residual risk, owner signoff, follow-up, retention, and improvement.",
    "failure": "Alert disappearance treated as proof of completion.",
    "action": "Reopen case, correct closure, and review systemic causes."
  },
  {
    "area": "Improvement actions",
    "sample": "Fictional detection, source, training, staffing, supplier, runbook, policy, and communication improvements.",
    "checks": "Owner, deadline, evidence, test, outcome, metric, residual risk, signoff, and reassessment.",
    "failure": "Task marked complete without outcome validation.",
    "action": "Reopen, reassign, escalate, or redesign the action."
  }
];
const improvementWorkflow = [
  {
    "step": "1",
    "title": "Define the operational objective",
    "detail": "State the fictional service goal, risk question, quality expectation, audience, owner, and decision the metric supports.",
    "output": "Measurement charter."
  },
  {
    "step": "2",
    "title": "Design the metric",
    "detail": "Document fictional numerator, denominator, inclusion, exclusion, source, owner, target, threshold, cadence, privacy, and limitations.",
    "output": "Metric specification."
  },
  {
    "step": "3",
    "title": "Validate source health",
    "detail": "Check fictional delivery, parsing, completeness, timeliness, coverage, lineage, version, and known blind spots.",
    "output": "Source-assurance record."
  },
  {
    "step": "4",
    "title": "Collect and compare",
    "detail": "Calculate fictional values consistently, preserve context, compare trends, separate segments, and identify definition or environment changes.",
    "output": "Metric result and trend."
  },
  {
    "step": "5",
    "title": "Review quality and gaming risk",
    "detail": "Sample fictional records, test whether the number reflects real quality, identify unintended incentives, and challenge alternate explanations.",
    "output": "Quality-review finding."
  },
  {
    "step": "6",
    "title": "Prioritize improvement",
    "detail": "Create fictional actions with owner, risk, expected outcome, deadline, resources, dependencies, test plan, and rollback.",
    "output": "Improvement backlog."
  },
  {
    "step": "7",
    "title": "Implement and validate",
    "detail": "Complete fictional changes, test results, monitor side effects, compare metrics, validate security and business outcomes, and record residual risk.",
    "output": "Validated improvement record."
  },
  {
    "step": "8",
    "title": "Report and reassess",
    "detail": "Communicate fictional outcomes, limitations, remaining risk, next review, metric revisions, lessons learned, and closure.",
    "output": "Assurance and leadership report."
  }
];
const findings = [
  {
    "id": "NBR-MET-F01",
    "statement": "The fictional mean time to close metric is insufficient without priority, case type, waiting-state, quality, and reopen context.",
    "support": "Mixed case complexity, duplicate cases, supplier dependencies, premature-closure risk, and one broad average.",
    "alternative": "The average may still provide a high-level workload trend when paired with detail.",
    "confidence": "High",
    "limitation": "The current distribution is not fully displayed."
  },
  {
    "id": "NBR-MET-F02",
    "statement": "The fictional source-availability metric overstates assurance because it does not include parsing, completeness, latency, and coverage.",
    "support": "High reported availability, known delayed source, possible field-quality issues, critical-service dependency, and source-health requirements.",
    "alternative": "The existing availability measure may still be accurate for simple uptime.",
    "confidence": "High",
    "limitation": "Additional field-quality evidence is needed to calculate full assurance."
  },
  {
    "id": "NBR-MET-F03",
    "statement": "The fictional alert-closure productivity metric creates gaming risk unless paired with quality and outcome measures.",
    "support": "Per-analyst closure count, risk of shallow triage, duplicate splitting, early closure, and missing quality context.",
    "alternative": "The metric may help with staffing when not used as an individual performance score.",
    "confidence": "High",
    "limitation": "Actual analyst behavior is not directly observed in the supplied records."
  },
  {
    "id": "NBR-MET-F04",
    "statement": "The fictional false-positive rate should separate expected behavior, duplicates, insufficient evidence, and detection-design errors.",
    "support": "Mixed outcome categories, tuning decisions, case records, and the need for different corrective actions.",
    "alternative": "A single high-level rate may be useful for leadership trend reporting.",
    "confidence": "Medium-High",
    "limitation": "Outcome classification quality must first be validated."
  },
  {
    "id": "NBR-MET-F05",
    "statement": "The fictional handoff completion metric should require incoming-owner acknowledgement rather than record creation alone.",
    "support": "Open commitments, acknowledgement risk, shift-transfer workflow, and cases where ownership can remain unclear.",
    "alternative": "Automated assignment may count if policy proves it includes real review.",
    "confidence": "High",
    "limitation": "Acknowledgement methods may vary by workflow."
  },
  {
    "id": "NBR-MET-F06",
    "statement": "Fictional improvement actions should remain open until the intended outcome is validated, not merely until the task is completed.",
    "support": "Detection tuning, source restoration, training, supplier recovery, runbook changes, and residual-risk requirements.",
    "alternative": "Some administrative actions may close with simpler evidence.",
    "confidence": "High",
    "limitation": "Validation depth should remain proportional to risk."
  }
];
const commonMistakes = [
  "Choosing fictional metrics because they are easy to count rather than because they support a decision.",
  "Using averages that hide priority, complexity, waiting states, outliers, and distributions.",
  "Reporting percentages without clear numerators, denominators, inclusion, exclusion, and source definitions.",
  "Treating alert severity as incident severity, business impact, or response priority.",
  "Measuring activity without quality, outcomes, source health, business validation, or residual risk.",
  "Setting speed targets that encourage shallow triage or premature closure.",
  "Ranking individual analysts without workload, complexity, shift, source, training, and quality context.",
  "Comparing trends across changed definitions, sources, staffing, systems, or business periods without explanation.",
  "Reporting source availability without parsing, completeness, timeliness, and coverage.",
  "Treating lower alert volume as proof of better detection.",
  "Counting a handoff as complete without incoming-owner acknowledgement.",
  "Closing improvement actions when tasks finish rather than when outcomes are validated.",
  "Hiding metric limitations, missing data, gaming risk, or uncertainty from leadership.",
  "Using or exposing real employee performance data, private company cases, source records, alerts, supplier data, incident metrics, school records, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "What makes a fictional SOC metric useful?",
    "choices": [
      "It has a clear objective, definition, healthy source, owner, target, threshold, decision path, context, and limitations.",
      "It is easy to count.",
      "It always increases.",
      "It appears on a dashboard."
    ],
    "answer": 0,
    "explanation": "A useful metric should support a real decision and be reproducible."
  },
  {
    "question": "Why can mean time to close be misleading?",
    "choices": [
      "One average can hide priority, complexity, waiting states, duplicates, outliers, and premature closure.",
      "Time can never be measured.",
      "All cases should take the same amount of time.",
      "Only incidents have closure times."
    ],
    "answer": 0,
    "explanation": "Case populations need segmentation and quality context."
  },
  {
    "question": "What is Goodhart risk?",
    "choices": [
      "People may optimize the measured number instead of the real security outcome.",
      "A source may stop reporting.",
      "A case may have duplicate alerts.",
      "A supplier may miss a deadline."
    ],
    "answer": 0,
    "explanation": "Targets can create unintended behavior when the number becomes the goal."
  },
  {
    "question": "What should a fictional source-health metric include beyond availability?",
    "choices": [
      "Parsing, completeness, timeliness, coverage, ownership, blind spots, and restoration validation.",
      "Only the alert severity.",
      "Only the server uptime.",
      "Only the number of cases."
    ],
    "answer": 0,
    "explanation": "A source can be available while its evidence remains unusable."
  },
  {
    "question": "What makes fictional quality sampling defensible?",
    "choices": [
      "A documented method that covers relevant priorities, case types, sources, shifts, analysts, outcomes, and risks.",
      "Reviewing only easy records.",
      "Selecting only failed cases.",
      "Using one example forever."
    ],
    "answer": 0,
    "explanation": "Sampling should represent the process and its important risks."
  },
  {
    "question": "When should a fictional improvement action close?",
    "choices": [
      "After the intended security and business outcome is validated and residual risk and follow-up are documented.",
      "When the task ticket is marked complete.",
      "When the owner sends an email.",
      "When the dashboard turns green."
    ],
    "answer": 0,
    "explanation": "Task completion and outcome validation are different."
  },
  {
    "question": "What makes a fictional leadership metric report trustworthy?",
    "choices": [
      "Clear definitions, source health, trends, context, targets, limitations, gaming risks, owners, decisions, and follow-up.",
      "Only favorable values.",
      "No uncertainty.",
      "Individual rankings without context."
    ],
    "answer": 0,
    "explanation": "Trustworthy reporting preserves both meaning and limitations."
  }
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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>

      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function SOCMetricsQualityContinuousImprovementPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I15
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.7 SOC Metrics, Quality, and Continuous Improvement
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders define fictional SOC metrics, validate data,
            review quality, detect misleading dashboards, avoid gaming, measure
            outcomes, prioritize improvements, and prove whether operational
            changes actually worked.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I15: Security Operations Basics"
          lessonTitle="SOC Metrics, Quality, and Continuous Improvement"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge alerts, cases, detections, sources, handoffs, communications, metrics, actions, and decisions.",
            "I will not request, expose, or evaluate real employee performance data, private company cases, source records, alerts, supplier data, incident metrics, school records, or confidential SOC information.",
            "I will distinguish activity, quality, outcome, risk, service, source-health, workload, leading, lagging, and assurance measures.",
            "I will not treat faster closure, lower alert volume, higher throughput, or dashboard targets as automatic proof of better security.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Green Dashboard Can Still Hide Weak Security Operations"
        >
          <p className="leading-8">
            A fictional Northbridge dashboard shows fast case closure, high
            source availability, strong handoff completion, and lower alert
            volume. Yet some cases closed before evidence was complete, source
            parsing quality was not measured, handoffs lacked acknowledgement,
            and detection tuning had not completed false-negative tests. Strong
            measurement asks whether the number reflects the real security
            outcome.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak measurement
              </p>

              <p className="mt-2 leading-7">
                Count easy activity, hide definitions, ignore source gaps,
                reward speed alone, rank individuals without context, and close
                improvement tickets without outcome validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional measurement
              </p>

              <p className="mt-2 leading-7">
                Define the objective, validate sources, combine activity with
                quality and outcomes, test gaming risk, assign owners, improve,
                and verify results.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Metrics Shape Staffing, Priorities, Training, Detection, and Leadership Decisions"
        >
          <p className="leading-8">
            Fictional SOC metrics influence workload, staffing, service targets,
            detection tuning, source investment, supplier escalation, training,
            quality review, and leadership confidence. Poor metrics can reward
            unsafe shortcuts or hide control weakness. Strong metrics preserve
            definitions, source health, context, limitations, ownership, and
            validated outcomes.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Objectiveā€“Definitionā€“Sourceā€“Decisionā€“Validation Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Objective", "Which fictional operational goal, risk question, service, audience, owner, and decision should the metric support?"],
              ["Definition", "Which fictional numerator, denominator, inclusions, exclusions, time window, status, segments, and versions make the measure reproducible?"],
              ["Source", "Which fictional records, lineage, ownership, delivery, parsing, completeness, timeliness, coverage, and limitations support the result?"],
              ["Decision", "Which fictional target, threshold, trend, review cadence, owner action, escalation, and improvement follow from the value?"],
              ["Validation", "Which fictional quality sample, outcome test, business check, gaming review, residual risk, and reassessment prove the measure is useful?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>

                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Metrics, Quality, and Improvement Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Metric Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Publishing a Fictional SOC Metric
          </h2>

          <div className="mt-6 grid gap-5">
            {metricDesignQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak design
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Metric Catalog
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Northbridge Fictional SOC Metrics
          </h2>

          <div className="mt-6 grid gap-5">
            {metricCatalog.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.name}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.type}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Definition", item.definition],
                    ["Source", item.source],
                    ["Target", item.target],
                    ["Decision use", item.decision],
                    ["Gaming or quality risk", item.risk],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Dashboard Critique
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Dashboard Measures to Challenge
          </h2>

          <div className="mt-6 grid gap-5">
            {dashboardRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.metric}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.value}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Useful part
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.good}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Main problem
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.problem}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Better measure
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.better}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Quality Sampling
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional SOC Quality-Review Areas
          </h2>

          <div className="mt-6 grid gap-5">
            {qualitySampleAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.area}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Sample", item.sample],
                    ["Quality checks", item.checks],
                    ["Failure example", item.failure],
                    ["Improvement action", item.action],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.area}-${label}`}
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Improvement Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Measurement to Validated Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {improvementWorkflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge SOC Metrics Dashboard"
          subtitle="Training dashboard for fictional security-operations measurement only."
          metrics={[
            {
              label: "Cases closed within target",
              value: "94%",
              note: "The value is incomplete without priority, waiting-state, case-quality, and reopen context.",
            },
            {
              label: "Critical source availability",
              value: "99.8%",
              note: "Availability is high, but parsing, completeness, timeliness, and coverage still require validation.",
            },
            {
              label: "Improvement actions validated",
              value: "61%",
              note: "Several tasks are marked complete, but their intended outcomes have not yet been proven.",
            },
          ]}
        />

        <FakeAlertCard
          title="Dashboard Target Is Green but Case Quality Has Fallen"
          severity="High"
          time="11:08 PM"
          source="Fake Northbridge SOC Quality Console"
          details="A fictional dashboard shows faster case closure and more alerts closed per analyst. Quality sampling found incomplete evidence registers, shallow triage notes, and cases closed before owner validation."
          recommendation="Do not treat the green target as proof of success. Segment the metric, validate definitions and sources, pair speed with quality and outcome measures, investigate gaming risk, assign corrective actions, and monitor whether the improvement restores both timeliness and case quality."
        />

        <FakeLogPanel
          title="Fake Northbridge Metrics Review Timeline"
          logs={[
            "08:00 METRIC close-within-target='94%'",
            "08:08 METRIC alerts-per-analyst='38'",
            "08:16 QUALITY sample-size='24 cases'",
            "08:24 FINDING incomplete-evidence='5 cases'",
            "08:32 FINDING premature-closure='3 cases'",
            "08:40 FINDING handoff-ack-missing='2 cases'",
            "08:48 SOURCE availability='99.8%'",
            "08:56 SOURCE parsing-quality='not measured'",
            "09:04 RISK gaming='speed target may reward early closure'",
            "09:12 ACTION revise-dashboard='approved'",
            "09:20 ACTION add-quality-metrics='owner assigned'",
            "09:28 ACTION reopen-cases='3'",
            "09:36 TRAINING case-quality='scheduled'",
            "09:44 REVIEW detection-noise='paired with test coverage'",
            "09:52 VALIDATE improvement='pending'",
            "10:00 REPORT leadership='green target not sufficient'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Metrics Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Did Faster Case Closure Improve the SOC?"
          evidence={[
            "The fictional close-within-target value increased to ninety-four percent.",
            "Alerts closed per analyst also increased.",
            "Quality sampling found incomplete evidence registers.",
            "Three cases closed before owner validation.",
            "Two handoffs lacked incoming-owner acknowledgement.",
            "The dashboard did not include quality or reopen measures.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The speed metric improved, but the supplied evidence does not support an overall quality improvement and indicates possible gaming or unsafe shortcuts.",
            "The SOC definitely improved because the dashboard target is green.",
            "The SOC failed completely because some cases had quality issues.",
            "Case speed should never be measured.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves the valid speed result while recognizing missing quality and outcome evidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken SOC Metrics and Continuous Improvement"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build the Northbridge SOC Metrics and Improvement Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Metric Design, Dashboard Review, Quality Sampling, and Improvement
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                decision-ready SOC measurement and continuous-improvement
                package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Measurement charter with goals, audiences, decisions, owners, privacy, and reporting cadence.</li>
                <li>Metric catalog with definitions, numerators, denominators, inclusions, exclusions, sources, targets, thresholds, owners, and limitations.</li>
                <li>Source-health and data-lineage review.</li>
                <li>Dashboard critique covering activity, quality, outcomes, risk, service, source health, and gaming risk.</li>
                <li>Quality-sampling plan for triage, cases, detections, communications, handoffs, sources, closures, and improvements.</li>
                <li>Findings with evidence, alternatives, confidence, limitations, owners, decisions, and next actions.</li>
                <li>Prioritized improvement backlog with tests, expected outcomes, deadlines, validation, metrics, and rollback.</li>
                <li>Leadership summary, technical summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real employee performance data, company cases,
            source records, alerts, supplier data, incident metrics, school
            records, or confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants to Rank Analysts by Alerts Closed"
          scenario="The fictional dashboard has per-analyst closure counts but does not include alert complexity, shift, source health, quality, or case outcomes."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not publish individual rankings. Use the metric for workload analysis only after adding complexity, quality, outcome, shift, source, and gaming-risk context.",
              outcome:
                "Best measurement choice. The metric is used proportionately and fairly.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Publish the ranking because higher activity always means better performance.",
              outcome:
                "Unsafe. The metric can reward shallow work and lacks context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all productivity metrics permanently.",
              outcome:
                "Premature. Activity measures can still support staffing when used carefully.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Detection Tuning Task Is Marked Complete after Alert Volume Drops"
          scenario="The fictional change reduced alerts by seventy percent, but positive replay tests and missed-event review remain incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the improvement action open, complete coverage and false-negative validation, review case outcomes, and close only after the intended security result is proven.",
              outcome:
                "Best improvement choice. Task completion is separated from outcome validation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the action because lower alert volume proves success.",
              outcome:
                "Unsafe. Missed-event risk is not known.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Roll back immediately without testing.",
              outcome:
                "Premature. The result requires validation before the final decision.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="SOC Metrics, Quality, and Continuous Improvement Checklist"
          items={[
            "I can distinguish fictional activity, quality, outcome, risk, service, source-health, leading, lagging, and assurance metrics.",
            "I can define fictional metrics with objective, numerator, denominator, inclusion, exclusion, source, owner, target, threshold, cadence, and limitations.",
            "I can validate fictional source delivery, parsing, completeness, timeliness, coverage, lineage, ownership, and blind spots.",
            "I can identify fictional metrics that may reward shallow triage, premature closure, broad suppression, or hidden work.",
            "I can combine fictional speed and activity measures with quality, outcomes, source health, business validation, residual risk, and reopen context.",
            "I can design fictional quality samples that cover priorities, case types, sources, shifts, outcomes, and important risks.",
            "I can write fictional findings with evidence, alternatives, confidence, limitations, owner, decision, and next action.",
            "I can build fictional improvement actions with expected outcome, owner, deadline, test, metric, rollback, validation, and reassessment.",
            "I can produce fictional leadership reports that preserve definitions, trends, uncertainty, gaming risk, decisions, and follow-up.",
            "I will use only fictional evidence and never expose real employee data, cases, sources, alerts, suppliers, incidents, school records, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.7 Mini Quiz: SOC Metrics, Quality, and Continuous Improvement"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional SOC Metrics, Quality, and Continuous Improvement Package for Northbridge. Include the measurement charter, metric catalog, numerator and denominator definitions, data lineage, source-health review, target and threshold model, dashboard critique, quality-sampling plan, gaming-risk review, findings, prioritized improvement backlog, validation plan, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional alerts, cases, detections, sources, handoffs, communications, metrics, actions, dates, owners, and outcomes.",
            "Do not treat faster closure, higher throughput, lower alert volume, target achievement, or training completion as automatic proof of better security.",
            "Make every metric traceable to a real objective, reproducible definition, healthy source, owner, decision, limitation, and review.",
            "Show how a metric can be numerically correct but operationally misleading.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A useful SOC metric supports a real objective and decision.",
            "Precise definitions, healthy data, ownership, targets, thresholds, and limitations are essential.",
            "Activity and speed should be paired with quality, outcomes, source health, and residual risk.",
            "Metrics can create unsafe incentives when the number becomes the goal.",
            "Quality sampling should challenge whether dashboard results reflect real operational performance.",
            "Improvement actions close only after intended outcomes are validated.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational metrics.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I15
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}