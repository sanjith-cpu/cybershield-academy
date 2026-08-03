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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/siem-and-alert-triage-concepts`;
const previousLesson = `${modulePath}/dashboards-and-metrics`;
const nextLesson = `${modulePath}/siem-triage-lab`;

const objectives = [
  "Explain fictional alert noise as a quality problem that may originate in sources, mappings, logic, context, grouping, thresholds, ownership, workflow, recovery, or documentation rather than only in alert volume.",
  "Distinguish fictional source repair, enrichment, deduplication, grouping, threshold adjustment, narrow suppression, expected-activity handling, routing improvement, contract improvement, and rule retirement.",
  "Evaluate fictional tuning proposals for false-positive reduction, false-negative risk, coverage preservation, break conditions, source-health effects, privacy, rollback, ownership, and mission impact.",
  "Design a fictional improvement cycle with baseline evidence, root-cause classification, a testable hypothesis, validation cases, shadow comparison, approval, staged rollout, monitoring, rollback, review, and expiration.",
  "Create a portfolio-ready fictional Reducing Noise and Improving Quality Package containing a taxonomy, tuning register, validation matrix, quality metrics, ownership, residual risk, and leadership communication."
];
const vocabulary = [
  [
    "Alert noise",
    "Fictional alert work that consumes attention without proportionate decision value because of duplication, expected activity, weak context, source defects, poor logic, stale ownership, recovery behavior, or workflow design."
  ],
  [
    "Alert quality",
    "The fictional degree to which an alert is useful, evidence-aware, source-health-aware, specific, understandable, appropriately prioritized, and connected to a defender decision."
  ],
  [
    "Root cause",
    "The fictional underlying source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, or documentation condition that creates repeated quality problems."
  ],
  [
    "Tuning",
    "A fictional documented change intended to improve alert usefulness while preserving mission-relevant evidence and coverage."
  ],
  [
    "Deduplication",
    "A fictional process that identifies repeated representations of the same underlying event while preserving legitimately distinct events."
  ],
  [
    "Grouping",
    "A fictional process that combines related alerts into one work item while preserving break conditions for meaningful changes."
  ],
  [
    "Suppression",
    "A fictional time-bounded decision not to create or display certain alerts under narrowly defined expected conditions."
  ],
  [
    "Expected activity",
    "A fictional condition that matches current approved, documented, scoped, owned, time-bounded, and source-supported work."
  ],
  [
    "Break condition",
    "A fictional identity, session, destination, service, severity, source-health, time, scope, owner, result, or impact change that stops grouping or expected handling."
  ],
  [
    "Shadow mode",
    "A fictional evaluation in which proposed logic runs alongside current logic without replacing the current decision path."
  ],
  [
    "Regression test",
    "A fictional test confirming that a change does not break previously supported behavior or coverage."
  ],
  [
    "False-positive risk",
    "The fictional risk that expected or harmless activity is treated as meaningful suspicious activity."
  ],
  [
    "False-negative risk",
    "The fictional risk that meaningful activity becomes hidden, unalerted, grouped incorrectly, or suppressed."
  ],
  [
    "Coverage preservation",
    "A fictional requirement that tuning maintain visibility for mission-relevant identities, services, destinations, behaviors, source states, and periods."
  ],
  [
    "Rollback",
    "A fictional documented return to the last validated state when a change causes unacceptable defects or risk."
  ],
  [
    "Tuning owner",
    "The fictional role accountable for evidence, hypothesis, testing, approval, rollout, monitoring, rollback, documentation, and review."
  ],
  [
    "Quality debt",
    "Fictional unresolved work involving weak context, stale thresholds, source defects, missing tests, broad suppression, poor grouping, owner gaps, or outdated documentation."
  ],
  [
    "Tuning expiration",
    "A fictional date or condition requiring review because ownership, scope, source health, approved activity, or mission context may have changed."
  ]
];
const noiseSources = [
  {
    "title": "Duplicate delivery and replay",
    "observation": "Fictional retries, recovery replay, multiple collectors, or duplicate paths create several records for one underlying event.",
    "question": "Are the records truly the same event, or do they differ by event time, session, destination, result, service, identity, or state?",
    "response": "Use documented uniqueness keys and preserve delivery history while keeping legitimate repeated activity visible.",
    "risk": "Over-deduplication can hide repeated behavior, state changes, or widening scope."
  },
  {
    "title": "Weak grouping",
    "observation": "Fictional related alerts create several cases, or broad groups hide meaningful differences.",
    "question": "Which fields define one analyst question, and which fields must break the group?",
    "response": "Group only stable relationships and break on identity, session, destination, service, severity, impact, result, or source-health changes.",
    "risk": "Broad grouping can turn a real scope change into invisible background activity."
  },
  {
    "title": "Missing or stale context",
    "observation": "Fictional analysts repeatedly search for identity, service, destination, approval, owner, criticality, or change context.",
    "question": "Which context is necessary for the defender question, authoritative, current, and privacy-appropriate?",
    "response": "Add purpose-limited enrichment with provenance, freshness, owner, fallback behavior, and expiration.",
    "risk": "Stale enrichment can create false certainty or incorrect Expected labels."
  },
  {
    "title": "Threshold mismatch",
    "observation": "A fictional global count, duration, rate, or sequence threshold does not fit different services or populations.",
    "question": "What segmented baseline, distribution, mission impact, and source-health evidence justifies the boundary?",
    "response": "Use service- or population-aware thresholds and test just below, at, and above the boundary.",
    "risk": "Higher thresholds may reduce visible noise while creating false negatives."
  },
  {
    "title": "Source-health defect",
    "observation": "Fictional delayed, duplicated, Blind, Conflicting, or Recovering evidence creates repeated or misleading alerts.",
    "question": "Can the source be repaired instead of tuning around the defect?",
    "response": "Prioritize source repair, label affected confidence, and reassess alerts after recovery.",
    "risk": "Suppressing around a broken source can make evidence loss permanent."
  },
  {
    "title": "Normalization mismatch",
    "observation": "Fictional source values with different meanings map into one shared category.",
    "question": "Does normalization preserve the distinction needed by the defender question?",
    "response": "Correct mappings, retain source-specific meaning, and rerun dependent regression tests.",
    "risk": "A semantic defect can produce both false positives and false negatives across several rules."
  },
  {
    "title": "Routing and ownership problem",
    "observation": "A fictional useful alert repeatedly reaches an analyst or owner who cannot answer its primary question.",
    "question": "Which role owns the evidence, service, identity, supplier, privacy, recovery, or risk decision?",
    "response": "Improve routing, ownership, and bounded handoff fields before changing detection logic.",
    "risk": "Changing the rule may weaken a useful alert while leaving the workflow defect unresolved."
  },
  {
    "title": "Obsolete defender question",
    "observation": "A fictional alert remains active after the service, process, identity model, source, or risk decision has changed.",
    "question": "Does the alert still support a current mission-relevant question, and is replacement coverage available?",
    "response": "Redesign or retire the alert with owner approval, coverage review, residual-risk acceptance, and documentation.",
    "risk": "Retirement without replacement coverage can create an unowned gap."
  }
];
const improvementMethods = [
  {
    "method": "Source repair",
    "use": "Use when fictional freshness, completeness, schema, parser, queue, clock, conflict, Blind state, or recovery defects drive poor quality.",
    "evidence": "Affected sources, fields, populations, periods, detections, owners, alternate evidence, and recovery obligations.",
    "safeguard": "Do not hide source defects with broad suppression or threshold changes.",
    "validation": "Freshness, completeness, backlog, replay, duplicates, schema, timing, and historical reassessment pass."
  },
  {
    "method": "Context enrichment",
    "use": "Use when fictional identity, service, destination, owner, approval, criticality, or change context is repeatedly needed.",
    "evidence": "Field purpose, provenance, freshness, owner, access, retention, transformation, and fallback behavior.",
    "safeguard": "Add only context required for the defender question.",
    "validation": "Context remains current, correctly mapped, privacy-reviewed, and non-authoritative assumptions remain visible."
  },
  {
    "method": "Deduplication and grouping",
    "use": "Use when fictional retries, replay, or closely related alerts represent one bounded analyst question.",
    "evidence": "Event identifiers, event time, sessions, destinations, results, services, relationships, source paths, and health states.",
    "safeguard": "Break on meaningful identity, session, destination, service, severity, impact, result, or source-health changes.",
    "validation": "Duplicate work falls while distinct events and widening scope remain visible."
  },
  {
    "method": "Threshold adjustment",
    "use": "Use when a fictional count, duration, rate, or sequence boundary does not match segmented normal and risky patterns.",
    "evidence": "Baselines, distributions, mission context, service behavior, source health, reviewed outcomes, and known misses.",
    "safeguard": "Avoid one global threshold when populations differ.",
    "validation": "Boundary, rare-impact, source-degraded, and regression tests pass."
  },
  {
    "method": "Narrow expected handling",
    "use": "Use when fictional activity is current, approved, scoped, owned, time-bounded, and repeatedly creates low-value alerts.",
    "evidence": "Identity, service, destination, purpose, owner, approval, start, end, scope, expected behavior, and source health.",
    "safeguard": "Use expiration, visibility, break conditions, and rollback.",
    "validation": "Expired, changed-owner, changed-scope, new-destination, new-session, and source-degraded cases remain visible."
  },
  {
    "method": "Routing and contract improvement",
    "use": "Use when fictional alerts are useful but reach the wrong owner or omit evidence, context, source health, alternatives, and non-proof statements.",
    "evidence": "Primary defender question, owner matrix, handoff history, missing fields, evidence-request burden, and state corrections.",
    "safeguard": "Preserve one coordinating owner and avoid unnecessary context.",
    "validation": "Acceptance time, response quality, evidence-request burden, and triage accuracy improve."
  },
  {
    "method": "Rule redesign",
    "use": "Use when fictional logic, sequence, relationships, scope, or presentation no longer supports the intended question.",
    "evidence": "Alert contract, test history, false positives, known misses, coverage map, source dependencies, owner feedback, and mission changes.",
    "safeguard": "Preserve replacement coverage and rollback.",
    "validation": "Positive, negative, boundary, source-health, regression, and explanation tests pass."
  },
  {
    "method": "Rule retirement",
    "use": "Use when a fictional question is obsolete, duplicated, unsupported, unowned, or replaced by stronger coverage.",
    "evidence": "Current mission question, owner, overlap, replacement rule, test status, source health, residual risk, and review history.",
    "safeguard": "Require replacement coverage or explicit accepted residual risk.",
    "validation": "Retirement creates no unowned mission gap and linked documentation is updated."
  }
];
const qualityCycle = [
  [
    "1. Define the quality problem",
    "Describe fictional duplicate work, expected activity, missing context, weak grouping, threshold mismatch, source defect, routing failure, recovery behavior, or obsolete purpose.",
    "Neutral quality-problem statement.",
    "The problem is supported by evidence rather than frustration alone."
  ],
  [
    "2. Measure the baseline",
    "Document fictional raw alerts, unique conditions, grouped work, analyst effort, source health, false positives, known misses, coverage, queue age, and reopenings.",
    "Baseline quality profile.",
    "Population, denominator, time range, health, and limitations are explicit."
  ],
  [
    "3. Classify root cause",
    "Determine whether the fictional cause is source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, or documentation.",
    "Root-cause matrix.",
    "The proposed change addresses the cause rather than only the symptom."
  ],
  [
    "4. Write a tuning hypothesis",
    "State how the fictional change should improve decision value and which coverage or false-negative risk could worsen.",
    "Testable hypothesis.",
    "Success, failure, and rollback conditions are measurable."
  ],
  [
    "5. Define break conditions",
    "List fictional identity, session, destination, service, severity, impact, source-health, time, scope, owner, and result changes that must remain visible.",
    "Break-condition register.",
    "Grouping or expected handling cannot hide meaningful novelty."
  ],
  [
    "6. Build the validation suite",
    "Create fictional positive, negative, boundary, regression, recovery, privacy, duplicate, changed-scope, and rollback cases.",
    "Validation matrix.",
    "False-positive and false-negative tests both exist."
  ],
  [
    "7. Compare in shadow mode",
    "Run fictional current and proposed behavior against the same inert test evidence and compare counts, uniqueness, coverage, explanations, effort, and owner outcomes.",
    "Shadow comparison.",
    "Every difference is explainable and reviewed."
  ],
  [
    "8. Approve staged rollout",
    "Document fictional approvers, scope, monitoring, failure triggers, rollback, expiration, communication, and privacy review.",
    "Release plan.",
    "No broad or permanent exception enters without ownership and rollback."
  ],
  [
    "9. Monitor post-change quality",
    "Track fictional usefulness, duplicates, grouping breaks, source health, known misses, coverage, queue age, effort, reopenings, and feedback.",
    "Post-change review.",
    "Lower volume cannot override failed coverage or regression."
  ],
  [
    "10. Govern the lifecycle",
    "Record fictional residual risk, debt, owners, review dates, expiration, replacement coverage, future tests, and retirement conditions.",
    "Lifecycle record.",
    "The change cannot become permanent, stale, invisible, or unowned."
  ]
];
const breakConditions = [
  [
    "New identity",
    "A different fictional identity may represent new scope, authority, or ownership.",
    "Create a separate analyst-visible item or end expected handling."
  ],
  [
    "New session",
    "A second fictional session may change chronology, concurrency, or effective access.",
    "Keep session identity and sequence visible."
  ],
  [
    "New destination",
    "A fictional destination outside the documented purpose may change risk.",
    "Break grouping and recalculate priority."
  ],
  [
    "New service",
    "A second fictional service may expand mission scope or criticality.",
    "Create separate service-impact and owner review."
  ],
  [
    "Severity or active-impact change",
    "Current fictional impact or potential consequence may increase.",
    "Break the group and update urgency."
  ],
  [
    "Source-health change",
    "Healthy evidence becoming Degraded, Blind, Conflicting, or Recovering changes confidence.",
    "Stop expected handling and show the evidence boundary."
  ],
  [
    "Authorization expiration",
    "Approved fictional activity may no longer be valid.",
    "End suppression or Expected status automatically."
  ],
  [
    "Scope, purpose, owner, or result change",
    "A fictional approval may not cover the new object, owner, result, operation, or period.",
    "Require visible review and current owner evidence."
  ]
];
const validationCases = [
  [
    "TUNE-T01",
    "True duplicate",
    "Three fictional records share event ID, event time, session, destination, result, and recovery-replay marker.",
    "Deduplicate into one work item while preserving delivery history.",
    "Workload without loss of traceability."
  ],
  [
    "TUNE-T02",
    "Distinct repetition",
    "Three fictional records have different event times and results within one session.",
    "Do not collapse them as one duplicate; preserve sequence.",
    "False-negative prevention."
  ],
  [
    "TUNE-T03",
    "Grouping break",
    "A grouped condition gains a new destination and higher active impact.",
    "Break the group and create new attention.",
    "Widening-scope visibility."
  ],
  [
    "TUNE-T04",
    "Current expected work",
    "Maintenance matches identity, service, destination, purpose, owner, time, scope, and source health.",
    "Label Expected or narrowly suppress with expiration and break conditions.",
    "Low-value repetition control."
  ],
  [
    "TUNE-T05",
    "Expired expected work",
    "The same condition occurs after the approved end time.",
    "Expected handling stops and normal review resumes.",
    "Stale-exception prevention."
  ],
  [
    "TUNE-T06",
    "Blind evidence",
    "A required fictional source is Blind during evaluation.",
    "Validation remains Conditional; no absence or success claim is allowed.",
    "Evidence honesty."
  ],
  [
    "TUNE-T07",
    "Threshold boundary",
    "Activity appears just below and just above the proposed threshold.",
    "Review both sides for mission meaning, segmentation, and missed-risk potential.",
    "Boundary quality."
  ],
  [
    "TUNE-T08",
    "Normalization defect",
    "Two fictional source values with different meaning map into one Success category.",
    "Fix mapping before rule or threshold tuning.",
    "Semantic accuracy."
  ],
  [
    "TUNE-T09",
    "Routing defect",
    "A useful alert repeatedly reaches an owner who cannot answer the service question.",
    "Improve routing and handoff rather than detection logic.",
    "Correct root-cause treatment."
  ],
  [
    "TUNE-T10",
    "Rollback trigger",
    "Post-change monitoring shows fewer alerts but misses a changed destination.",
    "Rollback to the last validated state and reopen root-cause review.",
    "Coverage preservation."
  ]
];
const qualityMetrics = [
  [
    "Unique work reduction",
    "Did fictional tuning reduce duplicate analyst work rather than only raw alert count?",
    "Raw alerts, unique conditions, grouped work items, duplicates, replay, effort, and break events.",
    "Lower unique work may still reflect lost coverage."
  ],
  [
    "Alert usefulness",
    "Did fictional alerts become more helpful for answering defender questions?",
    "Question completeness, evidence requests, state accuracy, owner feedback, and case outcomes.",
    "Usefulness ratings require calibration and sampling."
  ],
  [
    "False-positive change",
    "Did fictional unsupported or expected alerts decrease under stable definitions and populations?",
    "Reviewed outcomes, denominator, Expected, Unknown, Source-Degraded, source health, and exclusions.",
    "A lower rate may reflect forced closure or denominator changes."
  ],
  [
    "Known false-negative change",
    "Did testing, owner reports, recovery, or later evidence reveal meaningful missed conditions?",
    "Regression failures, known misses, changed-scope cases, reopenings, and reassessment.",
    "Unknown misses cannot be counted completely."
  ],
  [
    "Coverage preservation",
    "Did fictional identity, service, destination, behavior, source, period, and source-health coverage remain intact?",
    "Coverage map, break-condition tests, source states, service review, and residual risk.",
    "Documented coverage may still miss unknown conditions."
  ],
  [
    "Source-quality improvement",
    "Did fictional repair reduce delay, duplication, conflicts, blind periods, schema defects, or recovery debt?",
    "Freshness, completeness, blind minutes, duplicate rate, schema tests, queue state, and reconciliation.",
    "Healthy transport does not prove semantic quality."
  ],
  [
    "Analyst-effort change",
    "Did fictional evidence hunting, duplicate review, owner requests, handoffs, rework, and case time decrease?",
    "Effort samples, requests, owner delay, duplicate work, reopenings, and complexity.",
    "Less time may reflect weaker review rather than improvement."
  ],
  [
    "Rollback readiness",
    "Can fictional defenders return to the last validated state when a failure trigger occurs?",
    "Rollback plan, owner, prior version, activation time, communication, and post-rollback validation.",
    "A documented rollback still requires execution readiness."
  ]
];
const commonMistakes = [
  [
    "Threshold-first tuning",
    "A fictional team raises a global threshold before reviewing source defects or service differences.",
    "Meaningful low-volume behavior may disappear.",
    "Classify root cause, segment populations, and test both sides of the boundary."
  ],
  [
    "Suppression replaces source repair",
    "A Degraded fictional source creates repeated alerts, so every related alert is suppressed.",
    "Evidence defects become permanent and meaningful conditions may disappear.",
    "Repair the source and use only temporary narrow handling when necessary."
  ],
  [
    "Grouping has no breaks",
    "A fictional group combines new destinations, sessions, services, and health changes.",
    "Widening scope and changed risk are hidden.",
    "Define explicit identity, session, destination, service, severity, result, time, and health breaks."
  ],
  [
    "Expected means invisible",
    "A fictional approved condition is permanently suppressed.",
    "Expired or changed-scope activity may be missed.",
    "Use time-bounded Expected handling, expiration, owner review, and break conditions."
  ],
  [
    "Raw count is the success measure",
    "A fictional change is approved because alert volume falls.",
    "Unique work, coverage, misses, health, quality, and reopenings are ignored.",
    "Use balanced post-change metrics and regression gates."
  ],
  [
    "Routing noise is called detection noise",
    "A useful fictional alert is changed because it reaches the wrong owner.",
    "The defender question may become weaker while routing remains broken.",
    "Improve ownership and handoff first."
  ],
  [
    "Shadow comparison lacks expected results",
    "Current and proposed fictional logic are compared only by alert count.",
    "Coverage and explanation defects remain invisible.",
    "Document expected results for positive, negative, boundary, health, and regression cases."
  ],
  [
    "Rollback is undefined",
    "A fictional rollout has no last validated version or failure trigger.",
    "Coverage defects may continue while owners decide what to do.",
    "Define rollback owner, prior state, triggers, communication, and validation."
  ]
];
const labSteps = [
  [
    "1",
    "Define the noise problem",
    "Describe a fictional repeated quality issue using alert count, unique conditions, source health, analyst effort, mission effect, and limitations.",
    "Neutral quality-problem statement.",
    "The statement does not assume the solution."
  ],
  [
    "2",
    "Build the baseline",
    "Measure fictional volume, uniqueness, duplicates, expected alerts, queue age, effort, source health, false positives, known misses, coverage, and reopenings.",
    "Baseline dashboard.",
    "Populations, denominators, periods, and limitations are explicit."
  ],
  [
    "3",
    "Classify root cause",
    "Choose fictional source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, or documentation cause.",
    "Root-cause matrix.",
    "The proposed change addresses the underlying cause."
  ],
  [
    "4",
    "Design the improvement",
    "Select fictional repair, enrichment, deduplication, grouping, threshold, expected handling, routing, redesign, or retirement.",
    "Tuning design record.",
    "Expected benefit, false-negative risk, and owner are documented."
  ],
  [
    "5",
    "Define breaks and tests",
    "List fictional break conditions and create positive, negative, boundary, regression, source-health, recovery, privacy, and rollback tests.",
    "Break-condition register and validation matrix.",
    "Meaningful novelty cannot disappear."
  ],
  [
    "6",
    "Run shadow comparison",
    "Compare fictional current and proposed behavior for raw alerts, unique work, coverage, explanations, effort, and owner outcomes.",
    "Shadow report.",
    "A failed coverage test blocks approval."
  ],
  [
    "7",
    "Plan rollout and rollback",
    "Document fictional approvers, staged scope, monitoring, failure triggers, previous version, rollback owner, and communication.",
    "Release and rollback plan.",
    "The last validated state can be restored quickly."
  ],
  [
    "8",
    "Prepare the portfolio package",
    "Combine the fictional taxonomy, baseline, root cause, design, tests, shadow report, metrics, debt, residual risk, leadership brief, and reflection.",
    "Public-safe quality package.",
    "Every organization, alert, source, rule, owner, value, test, decision, and outcome is invented."
  ]
];
const quizQuestions = [
  {
    "question": "What is the strongest first step when a fictional alert creates too much noise?",
    "choices": [
      "Raise the threshold immediately.",
      "Suppress the alert permanently.",
      "Measure the problem and classify the root cause before choosing a change.",
      "Delete the rule."
    ],
    "answer": 2,
    "explanation": "Noise may come from sources, mappings, context, routing, grouping, thresholds, recovery, or documentation. The change should address the actual cause."
  },
  {
    "question": "What is the main purpose of a fictional grouping break condition?",
    "choices": [
      "To make groups larger.",
      "To preserve meaningful identity, session, destination, service, severity, source-health, scope, time, owner, impact, or result changes.",
      "To suppress repeated alerts.",
      "To lower severity."
    ],
    "answer": 1,
    "explanation": "Break conditions prevent grouping from hiding novelty, widening scope, changed impact, or evidence-quality changes."
  },
  {
    "question": "A fictional source is Degraded and creates repeated alerts. What is the strongest response?",
    "choices": [
      "Suppress every related alert.",
      "Repair the source, preserve confidence limits, and reassess affected alerts after recovery.",
      "Raise every threshold.",
      "Mark every alert Expected."
    ],
    "answer": 1,
    "explanation": "Source repair addresses the root cause. Tuning around broken evidence can make the defect permanent."
  },
  {
    "question": "When is fictional expected-activity handling strongest?",
    "choices": [
      "When an owner once said the work was normal.",
      "When current identity, service, destination, purpose, owner, time, scope, approval, and source health support it, with expiration and break conditions.",
      "Whenever the alert repeats.",
      "Whenever severity is Low."
    ],
    "answer": 1,
    "explanation": "Expected handling must be current, scoped, evidence-supported, owned, time-limited, visible, and reversible."
  },
  {
    "question": "Why is lower raw alert count not enough to approve tuning?",
    "choices": [
      "Alert counts are never useful.",
      "The change may also hide unique conditions, coverage, source-health problems, grouping breaks, or known misses.",
      "Lower volume always means source failure.",
      "Every tuning change should increase alerts."
    ],
    "answer": 1,
    "explanation": "Balanced validation must include uniqueness, coverage, quality, source health, workload, and false-negative risk."
  },
  {
    "question": "What should happen when fictional shadow mode shows fewer alerts but misses a changed destination?",
    "choices": [
      "Approve the change because volume improved.",
      "Hide the failed case.",
      "Revise or reject the change and preserve rollback to the last validated state.",
      "Lower the destination's importance."
    ],
    "answer": 2,
    "explanation": "A failed break-condition or coverage test outweighs raw count reduction."
  },
  {
    "question": "Which public portfolio approach is safest?",
    "choices": [
      "Use sanitized real tuning history.",
      "Use real rule names with fake counts.",
      "Invent every organization, alert, source, rule, owner, value, test, decision, and outcome.",
      "Blur internal screenshots."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real systems, people, suppliers, priorities, and defensive capabilities."
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A6
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function ReducingNoiseAndImprovingQualityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A6</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 9 of 10</span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Root Cause, Tuning, Testing, Rollback, Coverage, and Risk
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.9 Reducing Noise and Improving Quality
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defenders reduce repetitive or low-value alert work through evidence-based source repair, context, deduplication, grouping, thresholds, expected handling, routing, documentation, testing, rollback, coverage review, and lifecycle governance.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A6: SIEM and Alert Triage Concepts"
          lessonTitle="Reducing Noise and Improving Quality"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, rules, sources, services, identities, owners, values, tests, decisions, and outcomes.",
            "I will measure fictional noise and classify root cause before choosing deduplication, grouping, thresholds, suppression, routing, context, source repair, redesign, or retirement.",
            "I will preserve false-negative risk, source-health limits, mission coverage, break conditions, rollback, ownership, and residual risk.",
            "I will not treat lower raw alert count as automatic proof of improved quality.",
            "I will use fictional positive, negative, boundary, regression, source-health, privacy, recovery, shadow, and rollback tests.",
            "I will not access, copy, sanitize, upload, tune, suppress, test, modify, retire, or deploy any real alert, rule, SIEM, source, account, service, organization, system, or person.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Fastest Way to Reduce Noise Can Also Reduce Coverage">
          <p className="leading-8">
            A fictional alert generates hundreds of records during source recovery. A quick global threshold increase lowers volume by seventy percent. Shadow testing later shows that a changed destination and a second session disappeared inside the new behavior. The visible number improved, but the defender question became weaker.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak tuning</p>
              <p className="mt-2 leading-7">“Raise the threshold because analysts receive too many alerts.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong tuning</p>
              <p className="mt-2 leading-7">“Identify replay duplication as the root cause, deduplicate only identical events, preserve new sessions and destinations, test both positive and negative cases, and keep rollback ready.”</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Quality improvement means reducing unnecessary work while preserving the evidence and coverage needed for real decisions.
          </div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Noise Consumes the Same Attention Needed for Important Work">
          <p className="leading-8">
            Fictional analysts have limited attention. Duplicate alerts, stale expected conditions, missing context, weak routing, source defects, broad grouping, poor thresholds, and obsolete rules can delay active-impact review and increase case debt. Aggressive tuning can create silent false negatives. Professional quality work protects both workload and mission coverage.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Root-cause first","Treat fictional source, mapping, context, grouping, threshold, ownership, workflow, recovery, and documentation problems differently."],
              ["Coverage always","Preserve fictional identities, sessions, destinations, services, severity changes, source-health changes, and widening scope."],
              ["Lifecycle forever","Require fictional owners, tests, approvals, monitoring, rollback, expiration, residual risk, replacement coverage, and retirement review."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The Q-U-A-L-I-T-Y Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Q — Quantify the problem","Measure fictional raw alerts, unique conditions, analyst effort, source health, coverage, false positives, known misses, and mission impact."],
              ["U — Understand root cause","Classify fictional source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, or documentation causes."],
              ["A — Architect the change","Choose fictional repair, enrichment, deduplication, grouping, threshold, expected handling, routing, redesign, or retirement."],
              ["L — List break conditions","Preserve fictional identity, session, destination, service, severity, source-health, time, scope, owner, impact, and result changes."],
              ["I — Inspect with tests","Run fictional positive, negative, boundary, regression, recovery, privacy, source-health, shadow, and rollback cases."],
              ["T — Track post-change quality","Monitor fictional usefulness, unique work, coverage, misses, source health, effort, reopenings, and owner feedback."],
              ["Y — Yield a governed lifecycle","Document fictional ownership, approval, rollout, rollback, expiration, review, residual risk, replacement coverage, and retirement."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Decision-ready tuning statement</p>
            <p className="mt-2 leading-7">
              This fictional change groups only identical recovery-replay records by event identifier, session, destination, result, service, and source state. It breaks for any new identity, session, destination, service, severity, active impact, result, or health change. Rollback activates if a break-condition test fails.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Noise Reduction and Quality">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Instructional Section 1</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Diagnose Eight Sources of Alert Noise</h2>
          <div className="mt-6 grid gap-5">
            {noiseSources.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Root question</p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong response</p>
                    <p className="mt-2 text-sm leading-6">{item.response}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Risk</p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard eyebrow="Instructional Section 2" title="Compare Eight Quality-Improvement Methods">
          <div className="grid gap-5">
            {improvementMethods.map((item) => (
              <article key={item.method} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-purple-100">{item.method}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Use when",item.use],
                    ["Required fictional evidence",item.evidence],
                    ["Safeguard",item.safeguard],
                    ["Validation",item.validation],
                  ].map(([label, detail]) => (
                    <div key={`${item.method}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 3" title="Use a Ten-Step Quality Improvement Cycle">
          <div className="grid gap-5">
            {qualityCycle.map(([step, action, output, gate]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{step}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Analyst action</p>
                    <p className="mt-2 text-sm leading-6">{action}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality gate</p>
                    <p className="mt-2 text-sm leading-6">{gate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 4" title="Preserve Eight Break Conditions">
          <div className="grid gap-5 md:grid-cols-2">
            {breakConditions.map(([condition, why, preserve]) => (
              <article key={condition} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{condition}</h3>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Why it matters</p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Preserve this behavior</p>
                  <p className="mt-2 text-sm leading-6">{preserve}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 5" title="Validate Ten Tuning Scenarios">
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Case","Type","Fictional input","Expected result","Quality protected"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(([id, type, input, expected, protects]) => (
                  <tr key={id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">{id}</td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">{type}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{input}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{expected}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{protects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 6" title="Measure Eight Quality Outcomes">
          <div className="grid gap-5 md:grid-cols-2">
            {qualityMetrics.map(([metric, question, evidence, limitation]) => (
              <article key={metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{metric}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Fictional Quality Architecture" title="Northbridge Alert-Quality Improvement Model">
          <p className="leading-8">
            This conceptual architecture is completely invented and intentionally non-operational. It teaches alert-quality improvement without real products, rules, source names, identities, services, screenshots, owners, suppliers, values, or internal priorities.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Problem inputs","Volume, uniqueness, effort, source health, coverage"],
                ["Context inputs","Identity, service, destination, approval, owner"],
                ["Quality inputs","False positives, known misses, grouping, routing"],
                ["Lifecycle inputs","Tests, approval, rollout, rollback, expiration"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50">
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Fictional Quality Core</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Measure","Baseline, population, source health, limitations"],
                  ["Classify","Source, mapping, logic, context, workflow, recovery"],
                  ["Design","Repair, enrich, group, threshold, route, retire"],
                  ["Protect","Break conditions, false-negative risk, privacy"],
                  ["Test","Positive, negative, boundary, regression, rollback"],
                  ["Compare","Current and proposed behavior in shadow mode"],
                  ["Release","Approval, staged rollout, monitoring, rollback"],
                  ["Maintain","Metrics, debt, residual risk, expiration, retirement"],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4">
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {[
                ["Analyst output","Fewer duplicate work items and better context"],
                ["Owner output","Source, service, routing, approval, rollback actions"],
                ["Leadership output","Quality, coverage, effort, debt, residual risk"],
                ["Portfolio boundary","Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50">
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Alert Quality Dashboard"
          subtitle="Fictional raw alerts, unique conditions, duplicates, grouping breaks, source health, known misses, analyst effort, coverage, rollback readiness, and quality debt for training only."
          metrics={[
            {
              label: "Raw alerts reduced after proposed tuning",
              value: "62%",
              note: "Shadow mode also found a changed-destination regression, so the proposal is not approved.",
            },
            {
              label: "Detections affected by source-quality defects",
              value: "5",
              note: "Two require source repair before further tuning and three remain Conditional during recovery.",
            },
            {
              label: "Open fictional quality-debt items",
              value: "11",
              note: "Grouping breaks, source repair, stale expected conditions, routing, segmentation, tests, rollback, ownership, documentation, expiration, and retirement remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Proposed Noise Reduction Failed Coverage Validation"
          severity="High"
          time="5:47 PM"
          source="Fake Northbridge Quality Governance Console"
          details="The fictional proposal reduces raw alerts by 62% and duplicate work by 48%, but shadow testing shows that a changed destination and second session were grouped into an existing case. The extension source is Recovering, rollback ownership is assigned, and the current rule remains the last validated state."
          recommendation="Reject or revise the fictional proposal. Add destination and session break conditions, complete source recovery, rerun positive, negative, boundary, regression, health, and rollback tests, and approve only after coverage-preservation gates pass."
        />

        <FakeLogPanel
          title="Fake Quality Improvement Timeline"
          logs={[
            "09:00 TUNING id='TUNE-NB-014'",
            "09:02 BASELINE raw-alerts='120'",
            "09:03 BASELINE unique-conditions='18'",
            "09:04 BASELINE analyst-hours='6'",
            "09:05 SOURCE extension='recovering'",
            "09:06 ROOTCAUSE replay='confirmed'",
            "09:07 PROPOSAL grouping='event-session'",
            "09:08 BREAK destination='missing'",
            "09:09 BREAK second-session='missing'",
            "09:10 SHADOW raw-reduction='62-percent'",
            "09:11 SHADOW unique-work-reduction='48-percent'",
            "09:12 TEST changed-destination='failed'",
            "09:13 TEST second-session='failed'",
            "09:14 COVERAGE status='not-preserved'",
            "09:15 ROLLBACK owner='assigned'",
            "09:16 CURRENT state='last-validated'",
            "09:17 APPROVAL status='rejected'",
            "17:47 ALERT issue='coverage-validation'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fictional Evidence Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Quality Evidence Supports—and What It Does Not Prove</h2>
          <div className="mt-6 grid gap-5">
            {[
              ["QUALITY-E01","Alert-volume review","Raw volume is high, but replay markers and identical event identifiers explain most repeated records.","Duplicate delivery contributes to workload.","Not every repeated record is a duplicate.","Review uniqueness keys and preserve distinct time, session, destination, result, and state changes."],
              ["QUALITY-E02","Grouping review","Current grouping combines different destinations and hides one changed service.","Grouping is too broad for the defender question.","Grouping does not need to be removed entirely.","Add destination and service break conditions."],
              ["QUALITY-E03","Context review","Analysts repeatedly request service criticality, owner, and approval evidence that is current in authoritative sources.","Purpose-limited enrichment may reduce repetitive evidence hunting.","Context may become stale or require privacy review.","Add provenance, freshness, owner, and fallback behavior."],
              ["QUALITY-E04","Source-health review","A Degraded extension source creates repeated stale-authorization alerts.","Source quality contributes to noise and confidence limits.","The source defect does not prove every alert is low value.","Repair the source and preserve meaningful stale-authority review."],
              ["QUALITY-E05","Threshold review","One global threshold creates many alerts for one service and misses rare impactful behavior for another.","The threshold should be segmented by mission context.","Segmentation alone does not establish the correct boundary.","Use service-specific baselines and boundary tests."],
              ["QUALITY-E06","Shadow comparison","Proposed grouping reduces work by sixty percent but misses a changed destination.","The proposal weakens coverage.","The root-cause hypothesis may still be correct.","Revise or rollback before rollout."],
            ].map(([id, source, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <h3 className="font-black text-white">{source}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation",observation],
                    ["Supports",supports],
                    ["Does not prove",limits],
                    ["Quality use",use],
                  ].map(([label, detail]) => (
                    <div key={`${id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Tuning Decision Is Best Supported?"
          question="Which fictional decision best fits the Northbridge shadow comparison?"
          evidence={[
            "Proposed grouping reduces raw alerts by 62%.",
            "Unique analyst work decreases by 48%.",
            "A changed-destination case is grouped into an existing work item.",
            "A second session is also grouped into the existing work item.",
            "The extension source remains Recovering.",
            "Rollback owner and last validated version are documented.",
            "Current logic preserves the changed-destination and second-session cases.",
            "The proposal has not passed coverage-preservation gates.",
          ]}
          options={[
            "Reject or revise the fictional proposal, add destination and session break conditions, complete source recovery, rerun the validation suite, and preserve the last validated state until all gates pass.",
            "Approve the proposal because raw alert count improved.",
            "Suppress the failed test cases because they are rare.",
            "Remove rollback because workload already improved.",
          ]}
          bestAnswer={0}
          explanation="The first option values balanced quality and coverage over raw count reduction while preserving rollback and evidence limitations."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Eight Noise-Reduction and Quality Errors">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Decision impact</p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Practice Lab" title="Build the Northbridge Reducing Noise and Improving Quality Package">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not access, copy, sanitize, upload, tune, suppress, test, deploy, modify, retire, or compare any real alert, rule, SIEM, source, account, service, organization, system, or person.
          </div>
          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality check</p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Degraded Source Creates Repeated Alerts"
          scenario="A fictional extension source is delayed and produces repeated stale-authorization alerts. Analysts propose suppressing every related alert until the source is repaired."
          choices={[
            {
              label: "Choice A",
              response: "Prioritize fictional source repair, mark authorization confidence Conditional, preserve meaningful stale-authority visibility, use only temporary narrow handling if necessary, and reassess alerts after recovery.",
              outcome: "Best defensive choice. The response treats the source defect as the root cause without hiding mission-relevant conditions.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Suppress every related alert until further notice.",
              outcome: "Weak. Broad suppression can hide real stale authority and make the source defect invisible.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Raise the threshold so fewer alerts appear.",
              outcome: "Weak. A threshold change does not repair delayed authorization evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Shadow Mode Reduces Volume but Hides New Scope"
          scenario="A fictional grouping proposal reduces alert volume by 62%, but a changed destination and second session no longer create separate analyst-visible work."
          choices={[
            {
              label: "Choice A",
              response: "Reject or revise the fictional proposal, add destination and session break conditions, rerun regression and rollback tests, and keep the current validated logic until coverage passes.",
              outcome: "Best choice. Coverage-preservation failures outweigh raw volume improvement.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Approve the proposal because workload improved.",
              outcome: "Weak. The grouping hides meaningful novelty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove the failed test cases from validation.",
              outcome: "Weak. Validation should reveal risk, not be changed to guarantee approval.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Tuning Proposal before a Review Board">
          <p className="leading-8">
            Fictional Northbridge has high replay volume, delayed authorization evidence, missing service context, broad grouping, one global threshold, stale maintenance exceptions, weak routing, and an obsolete alert. The board asks which conditions require source repair, enrichment, deduplication, grouping, thresholds, expected handling, routing, redesign, or retirement.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend the baseline","Explain fictional raw alerts, unique conditions, source health, effort, false positives, known misses, coverage, queue age, and mission impact."],
              ["Defend root cause","Explain fictional source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, and documentation classifications."],
              ["Defend the change","Explain fictional repair, enrichment, deduplication, grouping, threshold, expected handling, routing, redesign, or retirement."],
              ["Defend coverage","Explain fictional identity, session, destination, service, severity, health, scope, time, owner, impact, and result break conditions."],
              ["Defend validation","Explain fictional positive, negative, boundary, regression, source-health, recovery, privacy, shadow, and rollback tests."],
              ["Defend lifecycle","Explain fictional approval, rollout, monitoring, rollback, expiration, review, debt, residual risk, replacement coverage, and retirement."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50">
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional noise taxonomy, baseline dashboard, root-cause matrix, tuning register, break-condition register, validation suite, shadow comparison, approval record, rollout and rollback plan, post-change review, quality metric dictionary, quality-debt register, residual-risk statement, leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Reducing Noise and Improving Quality Checklist"
          items={[
            "I can explain fictional alert noise as a source, mapping, logic, context, grouping, threshold, ownership, workflow, recovery, or documentation problem.",
            "I can distinguish fictional source repair, enrichment, deduplication, grouping, threshold tuning, expected handling, routing, redesign, and retirement.",
            "I can measure fictional raw alerts, unique conditions, duplicates, effort, source health, false positives, known misses, coverage, queue age, and reopenings.",
            "I can define fictional break conditions for identity, session, destination, service, severity, impact, source health, time, scope, owner, and result.",
            "I can preserve source-health limits and refuse absence or success claims during Blind or Recovering periods.",
            "I can create fictional positive, negative, boundary, regression, recovery, privacy, shadow, and rollback tests.",
            "I can reject fictional tuning that lowers volume while hiding changed destination, second session, widening scope, active impact, or source-health changes.",
            "I can keep Expected activity current, scoped, owned, time-bounded, visible, and reversible.",
            "I can separate fictional routing and documentation problems from logic problems.",
            "I can define fictional approval, staged rollout, monitoring, failure triggers, rollback, expiration, review, residual risk, replacement coverage, and retirement.",
            "I can measure fictional unique work reduction, usefulness, false positives, known misses, coverage, source quality, effort, and rollback readiness.",
            "I can create a completely fictional quality artifact without exposing real alerts, rules, sources, owners, services, values, tests, or internal priorities.",
          ]}
        />

        <MiniQuiz title="A6.9 Mini Quiz: Reducing Noise and Improving Quality" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Reducing Noise and Improving Quality Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, noise definitions, alert-quality definitions, raw alerts, unique conditions, grouped work items, duplicates, replay, Expected alerts, analyst effort, queue age, source health, false positives, known false negatives, coverage, reopenings, root-cause categories, source repair, enrichment, deduplication, grouping, threshold adjustment, expected handling, routing improvement, alert-contract improvement, redesign, retirement, baselines, hypotheses, expected benefits, false-negative risks, break conditions, positive tests, negative tests, boundary tests, source-health tests, recovery tests, privacy tests, regression tests, shadow comparisons, current results, proposed results, coverage differences, explanation differences, owners, approvers, rollout, monitoring, rollback triggers, prior version, rollback owner, post-rollback validation, post-change metrics, quality debt, residual risk, expiration, replacement coverage, retirement criteria, leadership summary, reflection, and a statement that every organization, alert, source, rule, owner, value, test, decision, and outcome is invented."
          tips={[
            "Measure the fictional problem and classify root cause before choosing a tuning technique.",
            "Preserve false-negative risk, break conditions, source health, coverage, privacy, rollback, ownership, and residual risk.",
            "Use balanced fictional outcomes rather than raw alert count alone.",
            "Require positive, negative, boundary, regression, recovery, shadow, and rollback validation.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for the SIEM Triage Lab?">
          <p className="leading-8">
            Before moving to A6.10, rate your readiness from 1 to 5 for noise taxonomy, root cause, source repair, context, deduplication, grouping, thresholds, expected handling, routing, break conditions, validation, shadow mode, rollback, coverage, metrics, lifecycle, residual risk, and complete fictionalization.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can distinguish fictional alert-count reduction from real quality improvement.",
              "I can identify the fictional root cause before choosing a tuning method.",
              "I can preserve break conditions and mission coverage.",
              "I can test fictional false-positive and false-negative risk.",
              "I can use shadow comparison and reject changes that fail coverage.",
              "I can define staged rollout, rollback, expiration, replacement coverage, and retirement.",
              "I can measure fictional quality with balanced metrics.",
              "I can produce a safe fictional tuning package without copying real rules, alerts, source details, or values.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional noise problem, its root cause, one proposed improvement, one break condition, one regression test, one rollback trigger, and one question you will carry into A6.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional alert noise may come from sources, mappings, logic, context, grouping, thresholds, ownership, workflow, recovery, or documentation.",
            "The strongest quality change addresses root cause rather than only lowering visible alert count.",
            "Deduplication, grouping, thresholds, expected handling, routing, source repair, enrichment, redesign, and retirement solve different problems.",
            "Grouping and expected handling require explicit break conditions for identity, session, destination, service, severity, impact, source health, time, scope, owner, and result changes.",
            "Blind, Degraded, Conflicting, or Recovering sources should limit conclusions and may require repair before tuning.",
            "Positive, negative, boundary, regression, recovery, privacy, shadow, and rollback tests support balanced quality.",
            "A lower raw count cannot pass when changed scope, destination, session, source health, or coverage tests fail.",
            "Expected activity must remain current, scoped, owned, time-bounded, source-supported, visible, and reversible.",
            "Every fictional tuning change needs owners, approval, staged rollout, monitoring, rollback, expiration, residual risk, replacement coverage, and retirement review.",
            "Every CyberShield quality artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module A6</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, combine SIEM purpose, collection, normalization, correlation, severity, priority, triage, evidence review, escalation, case management, dashboards, metrics, and quality improvement in the fully fictional A6 capstone lab.
          </p>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}