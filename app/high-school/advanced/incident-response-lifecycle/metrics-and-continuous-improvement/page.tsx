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
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousLesson = `${modulePath}/post-incident-review`;
const nextLesson = `${modulePath}/incident-response-simulation-lab`;

const objectives = [
  "Distinguish fictional readiness, detection, scoping, containment, communication, evidence, recovery, review, corrective-action, continuity, privacy, and leadership metrics without reducing incident response to speed alone.",
  "Build fictional metric definitions containing purpose, decision, population, numerator, denominator, time range, source health, owner, target, limitations, interpretation, and required action.",
  "Evaluate fictional dashboards for unstable denominators, averages that hide variation, scope changes, missing quality gates, personal rankings, stale targets, metric gaming, and false improvement.",
  "Design fictional continuous-improvement loops connecting observations, metrics, quality sampling, exercises, corrective actions, owners, validation, recurrence, residual risk, and governance review.",
  "Create a portfolio-ready fictional Incident Response Metrics and Continuous Improvement Package containing a metric dictionary, balanced dashboard, quality scorecard, debt tracker, exercise dashboard, action tracker, leadership brief, and reflection.",
];

const vocabulary = [
  ["Metric", "A fictional defined measurement used to answer a bounded program, decision, quality, readiness, risk, or improvement question."],
  ["Measure", "A fictional observed value such as time, count, percentage, rate, ratio, distribution, status, or quality score."],
  ["Indicator", "A fictional signal suggesting that a condition, trend, risk, improvement, or weakness may deserve review."],
  ["Key performance indicator", "A fictional high-priority metric tied to a defined organizational objective and owner."],
  ["Key risk indicator", "A fictional metric showing increasing exposure, debt, failure probability, uncertainty, or control weakness."],
  ["Metric purpose", "The fictional decision, behavior, risk, outcome, or improvement question the metric is meant to support."],
  ["Population", "The fictional complete set of cases, alerts, users, services, decisions, exercises, actions, or records eligible for the metric."],
  ["Numerator", "The fictional count or value placed above the division line in a rate or percentage."],
  ["Denominator", "The fictional eligible population or opportunity count used to give a rate or percentage meaning."],
  ["Time range", "The fictional period covered by the metric and the comparison periods used for interpretation."],
  ["Segment", "A fictional subgroup such as severity, service, source health, business criticality, case type, supplier, team, or recovery wave."],
  ["Distribution", "A fictional view of how values vary rather than relying only on one average."],
  ["Median", "A fictional middle value that can resist extreme outliers better than a simple average."],
  ["Percentile", "A fictional value below which a defined percentage of observations falls."],
  ["Target", "A fictional desired value or range connected to purpose, risk, capacity, and expected behavior."],
  ["Threshold", "A fictional point that triggers review, escalation, investigation, resourcing, or corrective action."],
  ["Baseline", "A fictional approved reference period or state used for comparison."],
  ["Normalization", "A fictional process for accounting for case mix, severity, service criticality, source health, staffing, scope, volume, or other context."],
  ["Quality gate", "A fictional requirement that must pass before a favorable speed, volume, closure, or completion metric is accepted."],
  ["Leading indicator", "A fictional measure that may predict future readiness, risk, or improvement, such as exercise performance or source-health debt."],
  ["Lagging indicator", "A fictional measure reflecting outcomes that have already occurred, such as recurrence or validated recovery failures."],
  ["Vanity metric", "A fictional value that looks impressive but does not support a meaningful decision or outcome."],
  ["Metric gaming", "A fictional behavior in which work changes to improve the displayed number without improving the intended result."],
  ["Goodhart effect", "A fictional measurement risk in which a target becomes less useful when people optimize only for the target."],
  ["Quality sampling", "A fictional review of selected cases, decisions, communications, evidence, or actions to test whether reported performance reflects actual quality."],
  ["Continuous improvement", "A fictional governed cycle of measuring, learning, prioritizing, changing, validating, monitoring, and revisiting program performance."],
  ["Improvement debt", "Fictional unresolved readiness, source, playbook, owner, exercise, action, validation, communication, recovery, privacy, or governance work."],
];

const metricDesignFields = [
  {
    field: "Purpose",
    question: "Which fictional decision, risk, behavior, outcome, or improvement question should the metric support?",
    strong: "The metric can be connected to a clear owner and possible action.",
    weak: "The metric exists because it is easy to count.",
  },
  {
    field: "Population",
    question: "Which fictional cases, alerts, decisions, users, services, actions, exercises, or records are eligible?",
    strong: "Inclusions, exclusions, segments, and scope changes are documented.",
    weak: "The denominator changes silently from month to month.",
  },
  {
    field: "Numerator",
    question: "Which fictional event, result, status, duration, count, or quality outcome is measured?",
    strong: "The numerator is defined so independent reviewers count it the same way.",
    weak: "Completed means different things to different teams.",
  },
  {
    field: "Denominator",
    question: "What fictional opportunity or eligible population gives the numerator meaning?",
    strong: "The denominator is stable or its changes are visible.",
    weak: "A percentage improves because difficult cases are excluded.",
  },
  {
    field: "Time range",
    question: "Which fictional event, report, decision, action, validation, closure, or review times define the measure?",
    strong: "Start, stop, pauses, exclusions, and comparison periods are explicit.",
    weak: "One processing timestamp substitutes for the entire lifecycle.",
  },
  {
    field: "Source health",
    question: "Can the fictional sources support the metric for the relevant period and fields?",
    strong: "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering periods are recorded.",
    weak: "Missing evidence is counted as zero events or perfect performance.",
  },
  {
    field: "Segmentation",
    question: "Which fictional severity, criticality, case type, service, source, supplier, or recovery category should be separated?",
    strong: "The dashboard shows meaningful variation and case mix.",
    weak: "One average hides high-risk failures.",
  },
  {
    field: "Target and threshold",
    question: "What fictional value or range supports the desired behavior and risk tolerance?",
    strong: "Targets include quality gates and review conditions.",
    weak: "A speed target rewards premature closure.",
  },
  {
    field: "Owner",
    question: "Who owns fictional definition, data quality, review, interpretation, action, and retirement?",
    strong: "Primary and alternate owners are documented.",
    weak: "A dashboard exists without anyone responsible for the result.",
  },
  {
    field: "Limitation",
    question: "What can the fictional metric not establish?",
    strong: "The dashboard prevents readers from confusing correlation with cause or speed with quality.",
    weak: "A green value is treated as proof of full program success.",
  },
  {
    field: "Interpretation",
    question: "Which fictional conclusion is justified and which alternatives remain?",
    strong: "The conclusion combines value, context, trend, uncertainty, and comparison.",
    weak: "The team announces improvement from one isolated month.",
  },
  {
    field: "Action",
    question: "What fictional review, test, resource, correction, escalation, or design decision should follow?",
    strong: "The metric produces a clear owned response.",
    weak: "The number is displayed but never changes decisions.",
  },
];

const balancedMetricFamilies = [
  {
    family: "Readiness",
    purpose: "Measure fictional role, playbook, contact, source, supplier, continuity, recovery, exercise, and alternate-owner preparedness.",
    examples: "Role acknowledgement, alternate coverage, playbook review age, exercise pass rate, source-health debt, and supplier-contact freshness.",
    qualityPair: "Pair completion rates with scenario validation and owner acknowledgement.",
    failureRisk: "High document completion can hide untested readiness.",
  },
  {
    family: "Detection and activation",
    purpose: "Measure fictional signal quality, routing, acknowledgement, activation accuracy, context, and source health.",
    examples: "Time to acknowledgement, owner-routing accuracy, source context completeness, activation precision, and missed-signal review.",
    qualityPair: "Pair speed with decision quality and false activation review.",
    failureRisk: "Faster acknowledgement can coexist with poor interpretation.",
  },
  {
    family: "Scoping",
    purpose: "Measure fictional time, evidence, source health, version quality, entity coverage, Unknowns, and change control.",
    examples: "Time to initial scope, time to decision-ready scope, source-health coverage, scope revision count, and unresolved Unknown aging.",
    qualityPair: "Pair time with completeness, provenance, confidence, and later correction.",
    failureRisk: "A fast scope may be overbroad, incomplete, or unsupported.",
  },
  {
    family: "Containment",
    purpose: "Measure fictional decision time, narrow-action selection, expected-state validation, continuity, side effects, rollback, and residual risk.",
    examples: "Time to containment decision, time to validated containment, narrow-action rate, side-effect rate, and rollback readiness.",
    qualityPair: "Pair speed with evidence, authority, blast radius, continuity, and validation.",
    failureRisk: "A fast broad action can create a second incident.",
  },
  {
    family: "Communication",
    purpose: "Measure fictional first update, commitment reliability, audience acknowledgement, corrections, conflicts, privacy, and guidance usefulness.",
    examples: "Time to first approved update, next-update reliability, High-impact correction acknowledgement, and conflicting-message rate.",
    qualityPair: "Pair timeliness with evidence accuracy, privacy, audience fit, and action clarity.",
    failureRisk: "Fast communication can spread unsupported claims.",
  },
  {
    family: "Evidence preservation",
    purpose: "Measure fictional purpose, provenance, timing, source health, access, custody, retention, correction, and derived-artifact traceability.",
    examples: "Purpose completeness, provenance completeness, access-review completion, custody-gap rate, and correction propagation time.",
    qualityPair: "Pair completeness with privacy proportionality and decision usefulness.",
    failureRisk: "More preserved material can increase privacy and governance risk.",
  },
  {
    family: "Recovery",
    purpose: "Measure fictional clean-state readiness, wave performance, validation, rollback, user acceptance, supplier reconciliation, source recovery, and observation.",
    examples: "Time to trusted service, wave pass rate, rollback readiness, side-effect rate, and observation recurrence.",
    qualityPair: "Pair restoration speed with multi-domain gates and accepted outcomes.",
    failureRisk: "Service availability can be mistaken for trusted recovery.",
  },
  {
    family: "Post-incident improvement",
    purpose: "Measure fictional review timing, evidence completeness, decision coverage, action ownership, validation, recurrence, and debt.",
    examples: "Time to review, action-validation rate, overdue high-risk actions, recurrence rate, and improvement-debt aging.",
    qualityPair: "Pair action counts with validated outcomes and residual risk.",
    failureRisk: "Closed tickets can be mistaken for improved capability.",
  },
  {
    family: "Continuity and user outcomes",
    purpose: "Measure fictional critical-workflow completion, alternate-process quality, accessibility, queue health, support demand, and user acceptance.",
    examples: "Critical-task completion, alternate-workflow wait time, accessibility review coverage, backlog age, and user-guidance usefulness.",
    qualityPair: "Pair security actions with mission and user outcomes.",
    failureRisk: "A secure control can fail the mission if continuity is ignored.",
  },
  {
    family: "Leadership and risk",
    purpose: "Measure fictional decision timeliness, decision clarity, resource response, risk ownership, review dates, and escalation.",
    examples: "Decision turnaround, acknowledgement, residual-risk review coverage, overdue risk acceptance, and resource blocker aging.",
    qualityPair: "Pair speed with evidence completeness and decision consequences.",
    failureRisk: "Fast approvals can still be poorly informed.",
  },
];

const metricDictionary = [
  {
    id: "IR-M01",
    name: "Time to decision-ready scope",
    purpose: "Measure how quickly fictional responders reach a bounded, evidence-supported scope useful for containment, communication, and leadership decisions.",
    population: "Material fictional incident cases with documented activation and at least one scope decision.",
    numerator: "Elapsed minutes from activation to the first scope version that passes required quality gates.",
    denominator: "Not a rate; report distribution across eligible cases.",
    segments: "Severity, service criticality, source health, supplier dependency, and case type.",
    source: "Case chronology, scope versions, evidence register, source-health record, and decision log.",
    target: "Use a fictional range by case segment rather than one universal number.",
    qualityGate: "Confirmed, possible, Unknown, unaffected, excluded, source-health, confidence, owner, and next evidence are documented.",
    limitation: "Faster scope does not prove accurate or complete scope.",
    action: "Review slow or fast outliers for missing evidence, broad assumptions, owner delay, or strong reusable practice.",
  },
  {
    id: "IR-M02",
    name: "Validated containment time",
    purpose: "Measure fictional time from authorized containment decision to evidence-supported expected state.",
    population: "Fictional containment actions requiring explicit validation.",
    numerator: "Elapsed minutes between approval and independent validation.",
    denominator: "Not a rate; report median and selected percentiles by action type.",
    segments: "Session, role, service function, service, supplier, data workflow, and communication action.",
    source: "Decision record, action record, validation evidence, source health, continuity, and rollback log.",
    target: "Target ranges depend on action type, criticality, and continuity.",
    qualityGate: "Authority, target precision, expected state, side effects, source health, continuity, and residual risk pass.",
    limitation: "Fast containment may be broad, disruptive, or poorly validated.",
    action: "Investigate delays, failed validation, broad blast radius, and opportunities for narrower approved options.",
  },
  {
    id: "IR-M03",
    name: "Narrow-action selection rate",
    purpose: "Review whether fictional response compares precise containment options before selecting broader disruption.",
    population: "Fictional incidents with at least one material containment decision.",
    numerator: "Cases selecting the narrowest evidence-supported effective action.",
    denominator: "All eligible cases after independent quality review.",
    segments: "Risk type, service criticality, source health, continuity complexity, and available authority.",
    source: "Option matrix, scope record, decision review, outcome validation, and side-effect record.",
    target: "No fixed universal percentage; use review thresholds and exceptions.",
    qualityGate: "The selected action actually reduced the supported risk and did not simply appear narrow.",
    limitation: "Broad action may be correct for broad active risk.",
    action: "Review exceptions and update playbooks, authority, or architecture when narrow choices were unavailable.",
  },
  {
    id: "IR-M04",
    name: "First approved stakeholder update time",
    purpose: "Measure fictional communication timeliness without rewarding unsupported or unapproved messages.",
    population: "Fictional incidents requiring internal, leadership, user, supplier, privacy, or recovery communication.",
    numerator: "Elapsed minutes from communication trigger to first approved audience-appropriate update.",
    denominator: "Not a rate; report by message type and audience.",
    segments: "Internal situation report, user advisory, supplier request, leadership brief, correction, and recovery update.",
    source: "Communication timeline, approvals, versions, distribution, acknowledgement, and corrections.",
    target: "Use audience- and trigger-specific fictional ranges.",
    qualityGate: "Facts, uncertainty, impact, guidance, privacy, ownership, version, and next-update commitment pass.",
    limitation: "A fast message can still be harmful or unnecessary.",
    action: "Review approval delays, stale templates, unclear ownership, and cases requiring correction.",
  },
  {
    id: "IR-M05",
    name: "High-impact correction acknowledgement",
    purpose: "Measure whether fictional decision-changing corrections reach and are understood by affected owners.",
    population: "Fictional corrections classified High impact.",
    numerator: "Affected decision owners acknowledging the current version within the defined period.",
    denominator: "All required affected decision owners.",
    segments: "Leadership, recovery, privacy, service, supplier, technical, and user-support decisions.",
    source: "Correction record, audience map, distribution log, acknowledgement tracker, and connected-record updates.",
    target: "Use a high fictional completion target with immediate escalation for critical gaps.",
    qualityGate: "The correction identifies prior error, current evidence, decision effect, guidance effect, and current version.",
    limitation: "Acknowledgement does not prove the owner changed the action correctly.",
    action: "Escalate missing acknowledgement and verify affected decisions and artifacts were updated.",
  },
  {
    id: "IR-M06",
    name: "Evidence-purpose completeness",
    purpose: "Measure whether fictional preserved evidence is connected to a bounded question and governance lifecycle.",
    population: "Fictional evidence items used in material incident decisions.",
    numerator: "Items containing purpose, authority, scope, provenance, timing, source health, access, retention, supports, and limitations.",
    denominator: "All eligible evidence items.",
    segments: "Identity, service, data, supplier, communication, recovery, user, and derived artifacts.",
    source: "Evidence register, source inventory, custody log, access matrix, and retention plan.",
    target: "Use a high completion target with quality sampling.",
    qualityGate: "Minimum necessary, decision usefulness, and privacy proportionality pass.",
    limitation: "Complete metadata does not prove authentic or relevant evidence.",
    action: "Correct missing fields, review access, and update preservation templates or training.",
  },
  {
    id: "IR-M07",
    name: "Clean-state gate pass rate",
    purpose: "Measure fictional recovery readiness across multiple required domains.",
    population: "Required clean-state gates for approved recovery waves.",
    numerator: "Gates passing with qualified evidence and owner acceptance.",
    denominator: "All required gates for the wave.",
    segments: "Identity, sessions, configuration, service, data, supplier, source, dependency, monitoring, and user acceptance.",
    source: "Recovery plan, evidence, source health, validation, rollback, and acceptance records.",
    target: "All mandatory gates must pass unless an explicit risk exception is authorized.",
    qualityGate: "A pass cannot rely on a Blind source or service availability alone.",
    limitation: "A high percentage can hide one critical failed gate.",
    action: "Display mandatory failures separately and block expansion when required.",
  },
  {
    id: "IR-M08",
    name: "Time to trusted service",
    purpose: "Measure fictional recovery from containment stability to multi-domain accepted operation.",
    population: "Fictional incidents involving service recovery.",
    numerator: "Elapsed time from stable containment to approved technical, business, privacy, supplier, source, monitoring, and continuity acceptance.",
    denominator: "Not a rate; report distributions by service and case complexity.",
    segments: "Criticality, supplier dependency, data sensitivity, source health, and recovery-wave count.",
    source: "Recovery timeline, clean-state gates, canary results, user acceptance, source health, and observation.",
    target: "Use service-specific ranges with quality requirements.",
    qualityGate: "Recovery acceptance and observation begin only after mandatory gates pass.",
    limitation: "Long recovery can reflect prudent validation rather than poor performance.",
    action: "Review dependency delays, missing baselines, weak rollback, supplier bottlenecks, and reusable recovery practice.",
  },
  {
    id: "IR-M09",
    name: "Corrective-action validation rate",
    purpose: "Measure whether fictional post-incident improvements produce tested outcomes.",
    population: "Fictional corrective actions marked Implemented or In validation.",
    numerator: "Actions passing defined validation and owner acceptance.",
    denominator: "All eligible implemented actions.",
    segments: "Playbook, identity, source, communication, supplier, recovery, evidence, privacy, and governance action.",
    source: "Action register, test evidence, exercise results, owner acceptance, recurrence, and residual risk.",
    target: "Use a high validation expectation and separate actions still within planned observation.",
    qualityGate: "Validation tests the intended outcome rather than only document completion.",
    limitation: "Some improvements need longer observation before final acceptance.",
    action: "Escalate unvalidated actions, redesign failed tests, and update residual risk.",
  },
  {
    id: "IR-M10",
    name: "Overdue high-risk improvement actions",
    purpose: "Show fictional risk created by delayed or blocked corrective actions.",
    population: "Fictional actions classified High risk or critical to recurrence prevention.",
    numerator: "Eligible actions past due or blocked beyond the approved threshold.",
    denominator: "All open High-risk actions.",
    segments: "Owner, dependency, action family, blocker, risk authority, and age band.",
    source: "Action tracker, risk register, owner acknowledgement, blockers, escalation, and leadership decisions.",
    target: "Use a very low fictional tolerance and immediate escalation rules.",
    qualityGate: "Risk classification, due date, blocker, owner, alternate, and review are current.",
    limitation: "A low count can result from weak risk classification or unrealistic due dates.",
    action: "Escalate resources, reassign ownership, accept time-bounded risk, or change scope and validation.",
  },
  {
    id: "IR-M11",
    name: "Exercise decision-quality score",
    purpose: "Measure fictional tabletop performance across evidence, source health, authority, scope, continuity, communication, containment, recovery, and reopening.",
    population: "Material decisions in approved fictional exercises.",
    numerator: "Weighted quality points earned across required decision dimensions.",
    denominator: "Maximum eligible quality points.",
    segments: "Role, scenario branch, decision type, source-health condition, and exercise iteration.",
    source: "Exercise records, decision worksheets, observer notes, evidence, communications, and after-action review.",
    target: "Use dimension-specific thresholds instead of one pass score only.",
    qualityGate: "Observers use consistent criteria and preserve uncertainty.",
    limitation: "Exercise performance may not predict every real response condition.",
    action: "Target training, playbook, authority, source, communication, or recovery improvements by dimension.",
  },
  {
    id: "IR-M12",
    name: "Response-condition recurrence",
    purpose: "Measure whether fictional control gaps or unsafe conditions recur after corrective action.",
    population: "Fictional incidents, exercises, alerts, or reviews involving a previously addressed condition.",
    numerator: "Eligible recurrences of the defined condition or materially similar gap.",
    denominator: "Exposure opportunities or monitored periods when meaningful; otherwise report counts and context.",
    segments: "Cause, contributing factor, service, source, supplier, action, and validation status.",
    source: "Incident records, exercises, alerts, source recovery, user reports, action history, and risk review.",
    target: "Use condition-specific thresholds and investigation requirements.",
    qualityGate: "Confirm that the event is comparable before calling it recurrence.",
    limitation: "A similar symptom may have a different cause.",
    action: "Reopen the action or incident review, reassess root cause, validation, ownership, and residual risk.",
  },
];

const qualityGates = [
  {
    metricType: "Speed metric",
    requiredGates: "Evidence quality, source health, authority, scope, expected state, side effects, continuity, and decision outcome.",
    rejectWhen: "Work was closed early, evidence is incomplete, or quality declined.",
    example: "Fictional containment time improves, but side-effect rate rises and validation is missing.",
  },
  {
    metricType: "Closure metric",
    requiredGates: "Owner validation, evidence completeness, communication, recovery, residual risk, corrective actions, archive, and reopen triggers.",
    rejectWhen: "Cases close before acceptance or with unresolved decision-changing evidence.",
    example: "Fictional cases close within target, but three lack owner acceptance.",
  },
  {
    metricType: "Volume metric",
    requiredGates: "Case complexity, quality sampling, duplicate handling, scope, outcomes, and workload context.",
    rejectWhen: "Higher throughput results from splitting, grouping, excluding, or prematurely closing work.",
    example: "Fictional analyst case counts rise because one case is divided into five records.",
  },
  {
    metricType: "Automation metric",
    requiredGates: "Coverage, precision, missed conditions, source health, explainability, ownership, rollback, and privacy.",
    rejectWhen: "Automation reduces visible work while increasing Blind spots or unsupported decisions.",
    example: "Fictional auto-closure rises, but reopened cases and missed owner validation also rise.",
  },
  {
    metricType: "Recovery metric",
    requiredGates: "Clean state, identity, data, supplier, sources, monitoring, user acceptance, rollback, and observation.",
    rejectWhen: "Service availability is counted as trusted recovery.",
    example: "Fictional service responds while the data gate remains Blind.",
  },
  {
    metricType: "Action-completion metric",
    requiredGates: "Expected outcome, validation test, independent evidence, acceptance, recurrence review, and residual risk.",
    rejectWhen: "Implementation or ticket closure substitutes for validated improvement.",
    example: "Fictional playbook updates close without exercise testing.",
  },
  {
    metricType: "Communication metric",
    requiredGates: "Facts, uncertainty, audience fit, approval, privacy, guidance, version, acknowledgement, and correction.",
    rejectWhen: "Faster messages require more corrections or confuse users.",
    example: "Fictional first-update time improves while unsupported claims increase.",
  },
  {
    metricType: "Readiness metric",
    requiredGates: "Current owners, alternates, exercises, scenario performance, source branches, continuity, and recovery.",
    rejectWhen: "Document completion is counted as operational readiness.",
    example: "Fictional playbooks are current, but alternates fail the exercise.",
  },
];

const gamingPatterns = [
  {
    pattern: "Premature closure",
    signal: "Fictional close-within-target improves while reopen, correction, or missing-owner rates rise.",
    whyItHappens: "A visible speed target is rewarded more than decision quality.",
    detection: "Sample closed cases for evidence, owner validation, recovery, residual risk, and reopen triggers.",
    correction: "Pair closure speed with mandatory quality gates and reopen analysis.",
  },
  {
    pattern: "Denominator shrinkage",
    signal: "Fictional success percentage rises after difficult cases are excluded or recategorized.",
    whyItHappens: "The eligible population is not controlled or reviewed.",
    detection: "Compare population definitions, exclusions, case mix, and total opportunity counts across periods.",
    correction: "Version metric definitions and display denominator changes.",
  },
  {
    pattern: "Case splitting",
    signal: "Fictional throughput rises because one complex incident becomes several simple records.",
    whyItHappens: "Volume is rewarded without complexity or outcome controls.",
    detection: "Review linked cases, shared evidence, common scope, and coordinated decisions.",
    correction: "Measure case families, complexity, and validated outcomes.",
  },
  {
    pattern: "Case grouping",
    signal: "Fictional alert volume falls because unrelated items are grouped too broadly.",
    whyItHappens: "Lower counts are rewarded without coverage review.",
    detection: "Test changed identity, service, destination, source health, severity, and time boundaries.",
    correction: "Require grouping break conditions and quality sampling.",
  },
  {
    pattern: "Fast acknowledgement without ownership",
    signal: "Fictional acknowledgement time improves, but action or decision time does not.",
    whyItHappens: "Clicking acknowledge is easier than accepting responsibility.",
    detection: "Compare acknowledgement with owner assignment, first decision, and completed next action.",
    correction: "Measure decision-ready ownership rather than clicks alone.",
  },
  {
    pattern: "Green dashboard by missing data",
    signal: "Fictional failures fall when a source becomes Blind or records stop arriving.",
    whyItHappens: "Missing events are treated as zero failures.",
    detection: "Display source health, coverage, expected volume, and Blind periods beside the metric.",
    correction: "Mark the metric Unknown or Conditional rather than green.",
  },
  {
    pattern: "Target avoidance",
    signal: "Fictional cases are reclassified below a threshold or transferred before the timer ends.",
    whyItHappens: "People optimize the visible category rather than the outcome.",
    detection: "Review classification changes, transfers, timer resets, and boundary cases.",
    correction: "Preserve original classification and show adjusted plus unadjusted values.",
  },
  {
    pattern: "Personal ranking",
    signal: "Fictional analysts avoid difficult cases or over-close work to improve individual scores.",
    whyItHappens: "Metrics are used for competition rather than system learning.",
    detection: "Compare case complexity, collaboration, handoffs, quality, and team outcomes.",
    correction: "Use metrics to improve systems and capacity, not create simplistic personal leaderboards.",
  },
  {
    pattern: "Action ticket closure",
    signal: "Fictional corrective-action completion rises while validation and recurrence results remain absent.",
    whyItHappens: "Implementation status is easier to report than outcome evidence.",
    detection: "Separate Assigned, Implemented, In validation, Accepted, Complete, and Reopened states.",
    correction: "Count completion only after validated outcome and acceptance.",
  },
  {
    pattern: "Average-only reporting",
    signal: "Fictional average response time improves while high-severity outliers worsen.",
    whyItHappens: "One summary value hides distribution and segments.",
    detection: "Review median, percentiles, range, outliers, severity, source health, and criticality.",
    correction: "Publish distributions and segment-specific interpretation.",
  },
];

const improvementLoop = [
  {
    step: "1. Observe",
    purpose: "Identify fictional response outcomes, friction, uncertainty, recurrence, user impact, source weakness, action debt, or exercise failure.",
    evidence: "Cases, exercises, dashboards, quality samples, owner reports, user feedback, source health, suppliers, and reviews.",
    output: "Bounded improvement question.",
    gate: "The observation is connected to evidence and a program objective.",
  },
  {
    step: "2. Define",
    purpose: "Create or revise the fictional metric definition.",
    evidence: "Purpose, population, numerator, denominator, time range, segment, owner, source health, target, limitation, and action.",
    output: "Versioned metric dictionary entry.",
    gate: "Independent reviewers can calculate and interpret the metric consistently.",
  },
  {
    step: "3. Measure",
    purpose: "Produce the fictional value with source-health and quality context.",
    evidence: "Qualified records, exclusions, missing data, comparison period, distribution, and segments.",
    output: "Current measure and uncertainty statement.",
    gate: "Blind or changing evidence does not appear as confident performance.",
  },
  {
    step: "4. Diagnose",
    purpose: "Determine which fictional system conditions may explain the measure.",
    evidence: "Case sampling, chronology, source health, roles, playbooks, workload, dependencies, suppliers, quality gates, and alternatives.",
    output: "Contributing-condition and hypothesis register.",
    gate: "Correlation is not automatically presented as cause.",
  },
  {
    step: "5. Prioritize",
    purpose: "Choose fictional improvements using risk, mission effect, recurrence, feasibility, dependency, cost, privacy, and leadership need.",
    evidence: "Risk register, action options, owners, resources, due dates, expected outcomes, and residual risk.",
    output: "Approved improvement priority.",
    gate: "The selected action addresses the supported condition rather than only the displayed number.",
  },
  {
    step: "6. Change",
    purpose: "Implement the fictional playbook, source, role, detection, communication, recovery, evidence, supplier, training, or governance improvement.",
    evidence: "Change record, owner, authority, dependencies, rollback, communication, and expected state.",
    output: "Implemented change with validation plan.",
    gate: "Implementation remains separate from completion.",
  },
  {
    step: "7. Validate",
    purpose: "Test whether the fictional change produced the intended outcome without unacceptable side effects.",
    evidence: "Exercises, case samples, source tests, user tests, recovery tests, communication tests, recurrence, and owner acceptance.",
    output: "Pass, fail, Conditional, retest, rollback, or redesign decision.",
    gate: "Validation uses evidence beyond the implementation record.",
  },
  {
    step: "8. Monitor",
    purpose: "Observe fictional durability, recurrence, gaming, drift, workload, privacy, user effect, and residual risk.",
    evidence: "Trend, distribution, segments, quality samples, action aging, source health, and reopen triggers.",
    output: "Sustained outcome or renewed action.",
    gate: "One successful test does not establish permanent improvement.",
  },
  {
    step: "9. Standardize",
    purpose: "Preserve fictional successful practices in roles, playbooks, training, exercises, dashboards, sources, templates, and governance.",
    evidence: "Validated results, owner acceptance, documentation, alternate coverage, and review date.",
    output: "Versioned standard and owner assignment.",
    gate: "The improvement remains usable and maintainable.",
  },
  {
    step: "10. Revisit",
    purpose: "Retire, redefine, escalate, or replace fictional metrics and actions as goals, risks, sources, services, or behavior change.",
    evidence: "Metric usefulness, cost, gaming, stale targets, source changes, risk, and leadership decisions.",
    output: "Renewed, revised, retired, or replaced metric and improvement plan.",
    gate: "Dashboards do not accumulate permanent unused measures.",
  },
];

const exerciseScorecard = [
  {
    dimension: "Role activation",
    success: "Fictional primary or alternate owners acknowledge and accept responsibility within the expected window.",
    evidence: "Role chart, acknowledgements, escalation, and handoff record.",
    failure: "The role is named but no owner accepts the decision.",
    improvement: "Update alternates, contact paths, authority, and exercise branches.",
  },
  {
    dimension: "Source-health reasoning",
    success: "Fictional Healthy, Degraded, Blind, Conflicting, and Recovering sources produce appropriate confidence and branches.",
    evidence: "Decision worksheets, source-health records, and observer notes.",
    failure: "Missing evidence is treated as proof of no activity.",
    improvement: "Add source-health fields, prompts, and validation cases.",
  },
  {
    dimension: "Scoping quality",
    success: "Fictional scope separates confirmed, possible, Unknown, unaffected, excluded, and out of scope.",
    evidence: "Scope versions, entity register, relationships, and hypotheses.",
    failure: "Every related entity is called affected.",
    improvement: "Practice relationship classes, non-proof statements, and next-evidence ownership.",
  },
  {
    dimension: "Containment quality",
    success: "Fictional response compares options and chooses the narrowest effective authorized action.",
    evidence: "Option matrix, authority, continuity, validation, and rollback.",
    failure: "The broadest action is selected automatically.",
    improvement: "Add decision branches and mission-impact review.",
  },
  {
    dimension: "Communication quality",
    success: "Fictional audiences receive accurate, tailored, approved, versioned, actionable updates.",
    evidence: "Messages, approvals, distribution, acknowledgement, and corrections.",
    failure: "One technical message is sent to every audience.",
    improvement: "Use audience maps, templates, and correction exercises.",
  },
  {
    dimension: "Evidence quality",
    success: "Fictional evidence remains purposeful, traceable, time-aware, source-qualified, access-controlled, and retained appropriately.",
    evidence: "Evidence register, custody, access, retention, and corrections.",
    failure: "Preserve everything replaces bounded evidence design.",
    improvement: "Add purpose, minimum necessary, provenance, and retention gates.",
  },
  {
    dimension: "Recovery quality",
    success: "Fictional clean-state gates, canary waves, validation, rollback, and user acceptance control restoration.",
    evidence: "Recovery plan, gate results, source health, supplier state, and observation.",
    failure: "Service availability is called full recovery.",
    improvement: "Practice failed gates, canary rollback, and source Blindness.",
  },
  {
    dimension: "Improvement quality",
    success: "Fictional review lessons become owned, testable, measurable corrective actions.",
    evidence: "Review report, action register, validation, recurrence, and debt.",
    failure: "The review ends with vague recommendations.",
    improvement: "Require outcomes, owners, alternates, due dates, tests, and escalation.",
  },
];

const actionTracker = [
  {
    id: "IMP-01",
    action: "Add fictional source-health branches to activation, scoping, communication, and recovery playbooks.",
    metric: "Exercise source-health decision-quality score.",
    baseline: "62%",
    target: "At least 90% across all six source states.",
    owner: "Incident-response program owner",
    due: "30 fictional days",
    validation: "Run six branch scenarios with independent scoring.",
    current: "In validation",
    risk: "Blind or Degraded evidence may continue producing unsupported certainty.",
  },
  {
    id: "IMP-02",
    action: "Create fictional alternate ownership for identity, supplier, privacy, recovery, and communication roles.",
    metric: "Critical-role alternate coverage.",
    baseline: "70%",
    target: "100% validated coverage for critical roles.",
    owner: "Program governance owner",
    due: "20 fictional days",
    validation: "Exercise primary-owner absence and verify acknowledgement plus decision continuity.",
    current: "Implemented",
    risk: "Owner unavailability may delay or stop critical decisions.",
  },
  {
    id: "IMP-03",
    action: "Require fictional High-impact correction acknowledgement.",
    metric: "Correction acknowledgement within target.",
    baseline: "55%",
    target: "At least 95% with immediate escalation for critical gaps.",
    owner: "Incident communications owner",
    due: "20 fictional days",
    validation: "Run a decision-changing correction scenario and verify connected-record updates.",
    current: "Approved",
    risk: "Old unsupported conclusions may continue guiding response.",
  },
  {
    id: "IMP-04",
    action: "Add fictional accessibility review to user-advisory approval.",
    metric: "Accessibility gate completion.",
    baseline: "60%",
    target: "100% or documented urgent exception with later review.",
    owner: "Service communications owner",
    due: "15 fictional days",
    validation: "Run standard, urgent, and alternate-owner advisory scenarios.",
    current: "In progress",
    risk: "Critical users may not be able to follow guidance.",
  },
  {
    id: "IMP-05",
    action: "Build fictional supplier queue-reconciliation and escalation testing.",
    metric: "Supplier recovery-gate validation rate.",
    baseline: "40%",
    target: "At least 90% across delayed, conflicting, and unavailable supplier cases.",
    owner: "Supplier relationship owner",
    due: "35 fictional days",
    validation: "Run three supplier scenarios with local evidence and fallback decisions.",
    current: "Planned",
    risk: "Recovery and data integrity may remain uncertain.",
  },
  {
    id: "IMP-06",
    action: "Require fictional multi-domain recovery gates before expansion.",
    metric: "Mandatory clean-state gate compliance.",
    baseline: "75%",
    target: "100% mandatory-gate compliance or explicit authorized exception.",
    owner: "Recovery lead",
    due: "25 fictional days",
    validation: "Run canary success, Blind source, user failure, queue mismatch, and rollback tests.",
    current: "In validation",
    risk: "Premature recovery may reintroduce unsafe state.",
  },
  {
    id: "IMP-07",
    action: "Separate fictional action implementation from validation and acceptance.",
    metric: "Corrective-action validation rate.",
    baseline: "50%",
    target: "At least 90% validated within approved observation windows.",
    owner: "Security program owner",
    due: "40 fictional days",
    validation: "Audit action states and test three implemented-but-unvalidated examples.",
    current: "Approved",
    risk: "Ticket closure may hide ineffective improvement.",
  },
  {
    id: "IMP-08",
    action: "Create fictional metric-definition versioning and retirement reviews.",
    metric: "Metric dictionary governance coverage.",
    baseline: "58%",
    target: "100% of leadership metrics with owner, version, limitation, action, and annual review.",
    owner: "Measurement governance owner",
    due: "45 fictional days",
    validation: "Review every dashboard metric and retire at least one vanity measure.",
    current: "Planned",
    risk: "Stale targets and misleading metrics may shape behavior.",
  },
];

const validationCases = [
  ["MET-T01", "Speed improves, quality falls", "Fictional validated-containment time improves while side effects and missing evidence rise.", "Reject the improvement claim and review quality gates, case mix, and action design.", "Balanced measurement"],
  ["MET-T02", "Denominator changes", "A fictional completion rate rises after difficult cases are excluded.", "Version the definition, disclose the population change, and compare both old and new denominators.", "Comparability"],
  ["MET-T03", "Blind source appears green", "A fictional dashboard shows zero data-access events during a Blind period.", "Mark the metric Unknown or Conditional and display source-health coverage.", "Source-health honesty"],
  ["MET-T04", "Average hides outliers", "Fictional average response time improves while high-severity cases become slower.", "Show median, percentiles, segments, and critical outliers.", "Distribution awareness"],
  ["MET-T05", "Fast acknowledgement", "Fictional acknowledgement time improves but owner assignment and first decision do not.", "Measure decision-ready ownership rather than acknowledgement alone.", "Ownership quality"],
  ["MET-T06", "Action tickets close", "Fictional corrective actions are marked complete when documents are updated.", "Keep actions In validation until expected outcomes are tested and accepted.", "Outcome validation"],
  ["MET-T07", "Recovery availability", "A fictional service responds while data, supplier, source, and user gates remain incomplete.", "Do not count trusted recovery until mandatory clean-state gates pass or an exception is authorized.", "Recovery integrity"],
  ["MET-T08", "Personal ranking", "Fictional responders avoid difficult cases to protect individual scores.", "Stop simplistic rankings and review team, complexity, collaboration, and quality measures.", "Healthy behavior"],
  ["MET-T09", "One good month", "A fictional metric improves once after a small number of easy cases.", "Preserve uncertainty and wait for sufficient trend, distribution, and context.", "Statistical caution"],
  ["MET-T10", "Target becomes stale", "A fictional response target no longer matches service criticality or current risk.", "Review, revise, version, or retire the metric and target.", "Metric lifecycle"],
  ["MET-T11", "Exercise success", "A fictional tabletop score is high, but observers used different criteria.", "Reconcile scoring definitions, observer calibration, evidence, and retest.", "Measurement consistency"],
  ["MET-T12", "Public portfolio", "A student plans to adapt a real incident-response dashboard.", "Fail portfolio validation and invent every organization, metric, value, source, owner, and outcome.", "Confidentiality and safety"],
];

const leadershipQuestions = [
  {
    question: "Are fictional response times improving without reducing quality?",
    evidence: "Timeliness distributions, quality gates, side effects, corrections, reopenings, and source health.",
    decision: "Maintain target, adjust target, add quality gates, fund capacity, or investigate gaming.",
  },
  {
    question: "Where is fictional readiness debt creating the greatest decision risk?",
    evidence: "Role alternates, playbook age, source-health debt, supplier contacts, exercises, and recovery tests.",
    decision: "Prioritize ownership, exercises, source repair, playbook redesign, or supplier preparation.",
  },
  {
    question: "Which fictional corrective actions are reducing recurrence?",
    evidence: "Validation results, observation, recurrence, exercise performance, source health, and residual risk.",
    decision: "Standardize, retest, redesign, escalate, or accept bounded risk.",
  },
  {
    question: "Are fictional dashboards rewarding the intended behavior?",
    evidence: "Gaming patterns, exclusions, classification changes, case mix, personal behavior, quality samples, and outcomes.",
    decision: "Change incentives, redefine measures, remove rankings, or retire metrics.",
  },
  {
    question: "Which fictional source limitations make performance uncertain?",
    evidence: "Blind periods, Degraded fields, Conflicting records, coverage gaps, and correction history.",
    decision: "Repair sources, qualify dashboards, use alternate evidence, or suspend conclusions.",
  },
  {
    question: "Are fictional continuity and user outcomes protected?",
    evidence: "Critical-task completion, alternate workflow, accessibility, backlog, support reports, and recovery acceptance.",
    decision: "Change containment, communication, capacity, recovery, or support design.",
  },
  {
    question: "Which fictional risks need leadership ownership?",
    evidence: "Overdue high-risk actions, residual-risk age, blocked dependencies, supplier issues, privacy gaps, and resource requests.",
    decision: "Assign resources, accept time-bounded risk, change priority, or escalate authority.",
  },
  {
    question: "Which fictional metrics should be retired?",
    evidence: "Low decision use, stale targets, high collection cost, gaming, duplication, weak sources, and no owned action.",
    decision: "Retire, replace, merge, simplify, or redesign the measure.",
  },
];

const commonMistakes = [
  ["Speed becomes success", "A fictional dashboard treats faster detection, containment, communication, or closure as complete improvement.", "Quality, continuity, evidence, privacy, recovery, and recurrence can worsen invisibly.", "Pair every speed measure with decision and outcome quality gates."],
  ["Counts replace rates", "A fictional team compares raw case counts across periods with different volumes.", "Workload and performance are confused.", "Use denominators, population definitions, and context."],
  ["Averages hide variation", "A fictional average improves while critical outliers worsen.", "Leadership misses the cases with the greatest risk.", "Show distributions, percentiles, segments, and outliers."],
  ["Blind data becomes zero", "A fictional missing source produces zero recorded failures.", "The dashboard displays false improvement.", "Mark the metric Unknown or Conditional and show coverage."],
  ["Targets never change", "A fictional target remains after services, risks, staffing, or sources change.", "People optimize for a stale objective.", "Review, version, and retire metrics."],
  ["Personal rankings distort behavior", "Fictional responders are ranked by speed or volume.", "People avoid complexity, collaboration, escalation, and careful evidence work.", "Measure team systems and outcomes instead of simplistic individual scores."],
  ["Implementation equals improvement", "A fictional action closes when a document or control changes.", "The intended outcome may not exist.", "Require validation, acceptance, observation, and recurrence review."],
  ["Correlation becomes cause", "A fictional metric improves after a change, so the change is declared causal.", "Other case-mix, source, staffing, or volume factors are ignored.", "Use hypotheses, comparison, quality sampling, and limitations."],
  ["Dashboards contain everything", "A fictional program adds measures without retirement or audience design.", "Important signals are buried and collection cost rises.", "Use bounded audience dashboards and metric lifecycle reviews."],
  ["Real metrics enter the portfolio", "A student sanitizes a real response dashboard or action tracker.", "Sensitive performance, incidents, sources, staffing, and capability may remain identifiable.", "Invent every metric, value, source, owner, organization, and outcome."],
];

const labSteps = [
  ["1", "Define the fictional measurement mission", "Document program objectives, leadership questions, audiences, risks, quality boundaries, privacy, source health, and safety.", "Metrics and improvement charter.", "The charter states that metrics support learning and decisions rather than punishment."],
  ["2", "Build the metric dictionary", "Create fictional purpose, population, numerator, denominator, time range, source, health, segments, target, owner, limitation, and action.", "Twelve-entry metric dictionary.", "Independent reviewers can calculate and interpret every metric consistently."],
  ["3", "Design balanced metric families", "Combine fictional readiness, detection, scope, containment, communication, evidence, recovery, review, continuity, and leadership measures.", "Balanced measurement map.", "No one family dominates the complete response story."],
  ["4", "Add quality gates", "Pair fictional speed, closure, volume, automation, recovery, action, communication, and readiness measures with outcome checks.", "Quality-gate scorecard.", "A favorable number cannot pass when required quality fails."],
  ["5", "Review gaming and bias", "Test fictional denominator shrinkage, premature closure, case splitting, grouping, target avoidance, personal ranking, Blind data, and average-only reporting.", "Metric-risk register.", "Every gaming pattern has detection and correction."],
  ["6", "Build the exercise scorecard", "Measure fictional role activation, source reasoning, scope, containment, communication, evidence, recovery, and improvement.", "Exercise dashboard.", "Observer criteria and evidence are consistent."],
  ["7", "Create the action tracker", "Link fictional metrics to owners, alternates, baselines, targets, due dates, validation, risk, and status.", "Improvement action tracker.", "Implemented remains separate from validated and complete."],
  ["8", "Run the improvement loop", "Move fictional observations through definition, measurement, diagnosis, prioritization, change, validation, monitoring, standardization, and review.", "Continuous-improvement cycle record.", "The change addresses the supported condition rather than only the number."],
  ["9", "Prepare the leadership brief", "Summarize fictional outcomes, uncertainty, source health, gaming risk, debt, actions, resources, and decisions.", "Leadership improvement brief.", "Every leadership ask is bounded and evidence-supported."],
  ["10", "Prepare the portfolio package", "Combine charter, dictionary, dashboard, gates, gaming review, exercise scorecard, action tracker, loop, metrics, risk, and reflection.", "Public-safe Incident Response Metrics Package.", "No real dashboard, metric, staffing, incident, source, or capability information appears."],
];

const quizQuestions = [
  {
    question: "What makes a fictional incident-response metric useful?",
    choices: [
      "It is easy to count.",
      "It has a purpose, defined population, reliable sources, limitations, owner, and action.",
      "It is always green.",
      "It ranks individual responders.",
    ],
    answer: 1,
    explanation: "Useful metrics support bounded decisions and governed action.",
  },
  {
    question: "A fictional source is Blind and the dashboard shows zero failures. What is strongest?",
    choices: [
      "Celebrate perfect performance.",
      "Mark the metric Unknown or Conditional and display the coverage limitation.",
      "Delete the source-health record.",
      "Use zero as the denominator.",
    ],
    answer: 1,
    explanation: "Missing evidence cannot support a zero-event conclusion.",
  },
  {
    question: "Why should fictional speed metrics use quality gates?",
    choices: [
      "To make teams slower.",
      "To prevent faster but unsafe, unsupported, disruptive, or premature work from appearing successful.",
      "To remove targets.",
      "To avoid measuring outcomes.",
    ],
    answer: 1,
    explanation: "Speed is valuable only when the required decision and outcome quality remains acceptable.",
  },
  {
    question: "Which fictional action state represents validated improvement?",
    choices: [
      "Assigned",
      "Implemented",
      "Passed defined outcome validation and owner acceptance",
      "Ticket closed",
    ],
    answer: 2,
    explanation: "Implementation is not the same as evidence-supported success.",
  },
  {
    question: "What is strongest when a fictional average improves but critical outliers worsen?",
    choices: [
      "Report only the average.",
      "Show distributions, percentiles, segments, and the critical outliers.",
      "Remove the outliers.",
      "Change the time range until the result is green.",
    ],
    answer: 1,
    explanation: "Distribution and segmentation preserve important variation.",
  },
  {
    question: "Why are simplistic fictional personal rankings risky?",
    choices: [
      "They use numbers.",
      "They may encourage avoiding difficult work, premature closure, weak collaboration, and metric gaming.",
      "They require dashboards.",
      "They always improve quality.",
    ],
    answer: 1,
    explanation: "Measurement changes behavior and should improve systems rather than reward shortcuts.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real incident dashboard.",
      "Use real performance values with fake labels.",
      "Invent every organization, metric, value, source, owner, action, date, and outcome.",
      "Use a real action tracker without names.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real incidents, capability, sources, staffing, and performance.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A7
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function MetricsAndContinuousImprovementPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A7
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Balanced Metrics, Quality Gates, Gaming Risk, and Program Learning
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.9 Metrics and Continuous Improvement
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident-response programs measure readiness,
            decisions, scope, containment, communication, evidence, recovery,
            review, corrective actions, continuity, risk, and improvement
            without rewarding speed, volume, or closure alone.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A7: Incident Response Lifecycle"
          lessonTitle="Metrics and Continuous Improvement"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, incidents, cases, metrics, values, sources, owners, actions, dates, dashboards, and outcomes.",
            "I will distinguish fictional speed, count, rate, quality, outcome, readiness, risk, debt, validation, and recurrence measures.",
            "I will define fictional population, numerator, denominator, time range, source health, owner, target, limitations, and action.",
            "I will pair favorable fictional speed, closure, volume, recovery, communication, and completion values with quality gates.",
            "I will look for fictional gaming, unstable denominators, average-only reporting, Blind data, stale targets, and personal-ranking harms.",
            "I will not access, copy, sanitize, upload, reuse, or publish any real incident-response dashboard, metric, staffing value, source, action tracker, organization, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Green Dashboard Can Describe a Worsening Program"
        >
          <p className="leading-8">
            Fictional Northbridge reports faster case closure, more alerts
            completed per analyst, and fewer recorded data-access concerns. A
            quality sample finds three cases closed before owner validation,
            one Blind data source counted as zero events, and two responders
            avoiding complex cases because individual speed rankings affect
            recognition. Every headline number is green, but the program may be
            less trustworthy.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak measurement
              </p>
              <p className="mt-2 leading-7">
                “The number improved, so the response program improved.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong measurement
              </p>
              <p className="mt-2 leading-7">
                “Interpret the value with population, source health, case mix,
                quality gates, outcomes, behavior, limitations, and action.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Metrics do not merely observe behavior. Targets, rankings, and
            dashboards can change behavior, so measurement design is also
            response governance.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exactly Five Learning Objectives"
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

        <SectionCard
          eyebrow="Why This Matters"
          title="Measurement Shapes Decisions, Resources, and Defender Behavior"
        >
          <p className="leading-8">
            Fictional incident-response programs use metrics to prioritize
            training, source repair, playbooks, staffing, suppliers, recovery,
            communication, action validation, and leadership decisions. Weak
            metrics can reward premature closure, broad containment, poor
            evidence, inaccessible guidance, hidden source failures, and
            unvalidated improvement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Measure outcomes", "Fictional numbers should reveal whether risk, continuity, evidence, user, and recovery outcomes improved."],
              ["Protect behavior", "Fictional targets should not reward shortcuts, hidden uncertainty, case avoidance, or personal competition."],
              ["Create action", "Fictional dashboards should lead to owned review, testing, resources, correction, escalation, or retirement."],
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

        <SectionCard eyebrow="Core Framework" title="The M-E-A-S-U-R-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["M — Mission", "Define the fictional decision, objective, risk, audience, and behavior the metric should support."],
              ["E — Eligible population", "Document fictional inclusions, exclusions, denominator, segments, case mix, and scope changes."],
              ["A — Assure evidence", "Review fictional source health, timing, completeness, corrections, and missing-data treatment."],
              ["S — Safeguard quality", "Pair fictional speed, count, closure, recovery, and completion values with quality gates."],
              ["U — Understand variation", "Use fictional distributions, percentiles, segments, outliers, baselines, and uncertainty."],
              ["R — Respond", "Assign fictional owner, threshold, review, action, validation, risk, and escalation."],
              ["E — Evolve", "Monitor fictional gaming, drift, recurrence, cost, usefulness, and retirement needs."],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready metric statement
            </p>
            <p className="mt-2 leading-7">
              Fictional validated-containment time improved from a median of
              twenty-four to nineteen minutes for session-level actions. The
              eligible population and source health remained stable, but two
              quality samples lacked independent side-effect review. The
              timeliness result is valid; the overall containment-quality claim
              remains Conditional until the sample gap is corrected.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Metrics and Continuous Improvement"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 1"
          title="Define Twelve Metric Fields"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {metricDesignFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.field}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Design question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong design
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak design
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Balance Ten Metric Families"
        >
          <div className="grid gap-5">
            {balancedMetricFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.family}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Fictional examples", item.examples],
                    ["Quality pair", item.qualityPair],
                    ["Failure risk", item.failureRisk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.family}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Build a Twelve-Metric Dictionary"
        >
          <div className="grid gap-6">
            {metricDictionary.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                      {item.id}
                    </span>
                    <h3 className="mt-3 text-xl font-black text-white">
                      {item.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    Versioned definition
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Population", item.population],
                    ["Numerator", item.numerator],
                    ["Denominator", item.denominator],
                    ["Segments", item.segments],
                    ["Source", item.source],
                    ["Target", item.target],
                    ["Quality gate", item.qualityGate],
                    ["Limitation", item.limitation],
                    ["Required action", item.action],
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Apply Eight Quality-Gate Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityGates.map((item) => (
              <article
                key={item.metricType}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.metricType}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Required gates
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.requiredGates}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Reject favorable result when
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.rejectWhen}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Detect Ten Metric-Gaming Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {gamingPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.pattern}
                </h3>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Signal", item.signal],
                    ["Why it happens", item.whyItHappens],
                    ["Detection", item.detection],
                    ["Correction", item.correction],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.pattern}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Run a Ten-Step Continuous-Improvement Loop"
        >
          <div className="grid gap-5">
            {improvementLoop.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.step}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Evidence", item.evidence],
                    ["Output", item.output],
                    ["Quality gate", item.gate],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.step}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Score Eight Exercise Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {exerciseScorecard.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Success
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.success}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Improvement
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.improvement}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Track Eight Improvement Actions"
        >
          <div className="grid gap-5">
            {actionTracker.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                      {item.id}
                    </span>
                    <h3 className="mt-3 text-xl font-black text-white">
                      {item.action}
                    </h3>
                  </div>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.current}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Linked metric", item.metric],
                    ["Baseline", item.baseline],
                    ["Target", item.target],
                    ["Owner", item.owner],
                    ["Due", item.due],
                    ["Validation", item.validation],
                    ["Risk", item.risk],
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Answer Eight Leadership Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {leadershipQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Possible decision
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.decision}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 10"
          title="Validate Twelve Measurement Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Case",
                    "Type",
                    "Fictional input",
                    "Expected result",
                    "Quality protected",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(
                  ([id, type, input, expected, protects]) => (
                    <tr key={id}>
                      <td className="px-4 py-4 align-top font-mono font-bold text-white">
                        {id}
                      </td>
                      <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                        {type}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {input}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {expected}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {protects}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Measurement Architecture"
          title="Northbridge Response-to-Improvement Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches measurement and program
            learning without real incidents, staffing, performance values,
            systems, sources, suppliers, dashboards, or organizations.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Response inputs", "Readiness, detection, scope, containment, communication"],
                ["Recovery inputs", "Clean state, waves, validation, observation, recurrence"],
                ["Quality inputs", "Evidence, source health, continuity, privacy, side effects"],
                ["Governance inputs", "Owners, targets, risk, actions, validation, retirement"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"
                >
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Measurement Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Define", "Purpose, population, calculation, source, owner"],
                  ["Qualify", "Health, completeness, case mix, uncertainty"],
                  ["Balance", "Speed, quality, outcomes, continuity, risk"],
                  ["Segment", "Severity, criticality, source, service, case type"],
                  ["Sample", "Cases, decisions, messages, evidence, actions"],
                  ["Improve", "Hypothesis, priority, change, validation"],
                  ["Monitor", "Trend, gaming, recurrence, debt, side effects"],
                  ["Evolve", "Version, retarget, simplify, retire, replace"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Team output", "Quality feedback, training, playbook, capacity"],
                ["Program output", "Dashboard, actions, validation, debt, recurrence"],
                ["Leadership output", "Risk, resources, priorities, decisions"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Incident Response Improvement Dashboard"
          subtitle="Fictional readiness, timeliness, quality gates, source health, recovery, action validation, recurrence, gaming risk, and improvement debt."
          metrics={[
            {
              label: "Validated fictional improvement actions",
              value: "5 / 8",
              note: "Three actions remain Implemented, In validation, or Planned and cannot be counted as complete.",
            },
            {
              label: "Fictional metrics passing quality gates",
              value: "9 / 12",
              note: "Closure speed, supplier recovery, and source-health coverage remain Conditional.",
            },
            {
              label: "Open fictional improvement debt",
              value: "7",
              note: "Source repair, alternate ownership, supplier testing, correction acknowledgement, accessibility, metric retirement, and recurrence observation remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Favorable Closure Metric Fails Quality Review"
          severity="High"
          time="4:12 PM"
          source="Fake Northbridge Measurement Governance Console"
          details="Fictional close-within-target improved from eighty-three to ninety-four percent. Quality sampling found three cases closed before owner validation, two missing evidence limitations, and one case reopened after late source recovery."
          recommendation="Preserve the valid timeliness result, reject the overall quality-improvement claim, correct the sampled cases, revise closure quality gates, and investigate whether the target is rewarding premature closure."
        />

        <FakeLogPanel
          title="Fake Continuous-Improvement Timeline"
          logs={[
            "WEEK-1 METRIC dictionary='version-2.0'",
            "WEEK-1 SOURCE coverage='conditional'",
            "WEEK-2 SAMPLE closed-cases='12'",
            "WEEK-2 QUALITY failures='3'",
            "WEEK-2 GAMING pattern='premature-closure'",
            "WEEK-3 ACTION created='IMP-07'",
            "WEEK-3 EXERCISE source-health='scheduled'",
            "WEEK-4 VALIDATION actions='5-of-8'",
            "WEEK-4 RECURRENCE status='monitoring'",
            "WEEK-4 DEBT open='7'",
            "WEEK-4 ALERT closure-quality='failed'",
            "WEEK-5 LEADERSHIP decision='target-review'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Metrics Support—and What They Do Not Prove"
        >
          <div className="grid gap-5">
            {[
              ["MET-E01", "Validated-containment time", "Shows fictional elapsed time from approval to evidence-supported expected state.", "Does not prove narrow action, continuity, or low side effects without quality gates."],
              ["MET-E02", "Close-within-target", "Shows fictional cases reaching the defined closure state within the target period.", "Does not prove evidence completeness, owner acceptance, trusted recovery, or low recurrence."],
              ["MET-E03", "Source-health coverage", "Shows fictional metric records carrying a time-bounded source-health state.", "Does not prove the source supports every field or conclusion."],
              ["MET-E04", "Correction acknowledgement", "Shows fictional decision owners received and acknowledged the current message version.", "Does not prove every connected action was corrected."],
              ["MET-E05", "Clean-state gate pass rate", "Shows fictional required recovery domains passing qualified checks.", "Does not prove a failed mandatory gate can be ignored because the percentage is high."],
              ["MET-E06", "Action-validation rate", "Shows fictional implemented actions passing defined outcome tests.", "Does not prove permanent improvement without observation and recurrence review."],
              ["MET-E07", "Exercise decision-quality score", "Shows fictional tabletop decisions meeting consistent scoring criteria.", "Does not prove identical performance in every real condition."],
              ["MET-E08", "Recurrence measure", "Shows fictional previously addressed conditions appearing again under defined comparison rules.", "Does not prove the same root cause without renewed analysis."],
            ].map(([id, metric, supports, limits]) => (
              <article
                key={id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {id}
                  </span>
                  <h3 className="font-black text-white">{metric}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-6">{supports}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{limits}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Did Faster Closure Improve the Program?"
          question="Which fictional conclusion is best supported by the Northbridge dashboard and quality sample?"
          evidence={[
            "Close-within-target increased from eighty-three to ninety-four percent.",
            "The eligible case population remained similar.",
            "Three sampled cases closed before owner validation.",
            "Two sampled evidence records omitted material limitations.",
            "One case reopened after late source recovery.",
            "The dashboard did not previously display owner validation, corrections, or reopenings.",
          ]}
          options={[
            "The timeliness metric improved, but the supplied evidence does not support an overall response-quality improvement and indicates a possible premature-closure incentive.",
            "The entire program improved because the closure value is green.",
            "The program completely failed because one case reopened.",
            "Closure timing should never be measured.",
          ]}
          bestAnswer={0}
          explanation="The first conclusion preserves the valid timeliness result while recognizing failed quality gates, missing context, and possible gaming."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Metrics and Improvement Errors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article
                key={mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Metrics and Continuous Improvement Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, reuse, inspect, calculate, rank, or publish any
            real incident-response dashboard, staffing value, metric, action
            tracker, source, supplier, organization, team, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Green Dashboard with a Blind Source"
          scenario="Fictional Northbridge reports zero protected-data concerns during a month when the decision-critical data source was Blind for thirty percent of the eligible period."
          choices={[
            {
              label: "Choice A",
              response: "Mark the fictional data metric Unknown or Conditional, display the Blind coverage, preserve alternate evidence and limitations, and prevent the value from supporting an improvement claim.",
              outcome: "Best defensive choice. Missing evidence cannot become zero observed risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the dashboard green because no data events were recorded.",
              outcome: "Weak. The source could not observe the required condition.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the source-health field so the dashboard remains simple.",
              outcome: "Weak. Simplicity cannot justify misleading certainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Corrective Actions Are Implemented but Not Validated"
          scenario="Eight fictional improvement actions are marked Complete because documents, workflows, and ownership fields were updated. No exercise, case sample, user test, source test, or recurrence review has occurred."
          choices={[
            {
              label: "Choice A",
              response: "Return the fictional actions to Implemented or In validation, run the defined outcome tests, record side effects and acceptance, monitor recurrence, and close only after evidence supports the intended improvement.",
              outcome: "Best choice. Activity and validated outcome remain separate.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep every action Complete because the implementation tickets closed.",
              outcome: "Weak. Ticket completion does not prove program improvement.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove validation from the metric dictionary because it slows completion.",
              outcome: "Weak. This directly rewards false improvement.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Balanced Incident-Response Dashboard before a Governance Board"
        >
          <p className="leading-8">
            Fictional Northbridge shows faster closure, faster containment, a
            higher action-completion rate, and fewer recorded protected-data
            concerns. Quality sampling finds premature closure, two missing
            evidence limitations, a Blind data source, three unvalidated
            actions, worsening high-severity outliers, and behavior changes
            caused by personal speed rankings.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend metric definitions", "Explain fictional purpose, population, numerator, denominator, time range, source health, segments, target, owner, limitation, and action."],
              ["Defend quality gates", "Explain fictional evidence, authority, scope, continuity, privacy, side effects, recovery, validation, and reopen conditions."],
              ["Defend the gaming review", "Explain fictional premature closure, denominator changes, case splitting, target avoidance, Blind data, personal rankings, and average-only reporting."],
              ["Defend the improvement loop", "Explain fictional observation, diagnosis, priority, change, validation, monitoring, standardization, and metric retirement."],
              ["Defend leadership decisions", "Explain fictional resource needs, blocked actions, residual risk, target changes, source repair, and escalation."],
              ["Defend portfolio safety", "Explain fictional complete invention, privacy, audience limits, non-operational content, and public-safe reporting."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional measurement charter, twelve-metric
              dictionary, ten-family balanced dashboard, eight-gate scorecard,
              ten-pattern gaming review, exercise scorecard, eight-action
              tracker, source-health review, quality sample, leadership
              questions, debt register, target-retirement decision, improvement
              brief, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Metrics and Continuous Improvement Checklist"
          items={[
            "I can distinguish fictional measures, metrics, indicators, targets, thresholds, baselines, leading indicators, lagging indicators, quality gates, and improvement debt.",
            "I can define fictional purpose, population, numerator, denominator, time range, segments, sources, source health, owner, target, limitation, and action.",
            "I can pair fictional speed, closure, volume, automation, recovery, communication, readiness, and completion metrics with quality gates.",
            "I can use fictional distributions, medians, percentiles, segments, case mix, and outliers rather than one average alone.",
            "I can detect fictional premature closure, denominator shrinkage, case splitting, grouping, target avoidance, Blind-data green status, personal ranking, and ticket-closure gaming.",
            "I can keep fictional Assigned, Implemented, In validation, Accepted, Complete, and Reopened action states separate.",
            "I can design fictional exercise scoring across roles, sources, scope, containment, communication, evidence, recovery, and improvement.",
            "I can connect fictional metrics to specific owners, decisions, actions, validation, residual risk, and escalation.",
            "I can mark fictional metrics Unknown or Conditional when source health cannot support the conclusion.",
            "I can review fictional targets and retire metrics that are stale, duplicative, costly, gameable, or unused.",
            "I can use fictional measurement to improve systems rather than punish or rank individuals simplistically.",
            "I can create a completely fictional measurement artifact without exposing real incidents, performance, staffing, sources, teams, systems, or response capability.",
          ]}
        />

        <MiniQuiz
          title="A7.9 Mini Quiz: Metrics and Continuous Improvement"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Incident Response Metrics and Continuous Improvement Package for the Northbridge Student-Support Cooperative. Include measurement mission, objectives, audiences, leadership questions, privacy boundary, safety boundary, metric purpose, population, inclusions, exclusions, numerator, denominator, time range, event time, decision time, validation time, segments, case mix, source, source health, baseline, target, threshold, owner, alternate owner, limitation, interpretation, required action, readiness metrics, detection metrics, activation metrics, scoping metrics, containment metrics, communication metrics, evidence metrics, recovery metrics, post-incident metrics, continuity metrics, user metrics, leadership metrics, risk metrics, leading indicators, lagging indicators, distributions, medians, percentiles, outliers, quality gates, speed gates, closure gates, volume gates, automation gates, recovery gates, action-validation gates, communication gates, readiness gates, premature-closure review, denominator review, case-splitting review, grouping review, acknowledgement review, Blind-data review, target-avoidance review, personal-ranking review, ticket-closure review, average-only review, continuous-improvement loop, observation, definition, measurement, diagnosis, priority, change, validation, monitoring, standardization, retirement, exercise scorecard, action tracker, action state, validation, recurrence, improvement debt, source-health debt, playbook debt, owner debt, supplier debt, recovery debt, privacy debt, leadership brief, resource decisions, residual risk, escalation, reflection, and a statement that every organization, metric, value, source, case, owner, action, date, and outcome is invented."
          tips={[
            "Start every fictional metric with the decision or behavior it should support.",
            "Show fictional source health, population changes, case mix, distributions, limitations, and quality gates beside the value.",
            "Use fictional metrics to improve systems, roles, sources, playbooks, communication, recovery, and governance rather than create simplistic personal rankings.",
            "Keep fictional implementation, validation, acceptance, completion, recurrence, and retirement separate.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the Incident Response Simulation Lab?"
        >
          <p className="leading-8">
            Before moving to A7.10, rate your readiness from 1 to 5 for metric
            purpose, populations, numerators, denominators, time ranges, source
            health, segments, targets, quality gates, distributions, gaming,
            exercises, action validation, recurrence, debt, leadership
            decisions, metric retirement, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional faster does not automatically mean better.",
              "I can build a fictional metric dictionary that another reviewer can reproduce.",
              "I can mark a fictional metric Unknown or Conditional when sources are weak.",
              "I can identify fictional gaming and unintended incentives.",
              "I can build fictional quality gates around speed, closure, recovery, and action completion.",
              "I can connect fictional dashboards to owned and validated improvement actions.",
              "I can defend fictional leadership decisions using balanced evidence and limitations.",
              "I can produce a safe fictional metrics package without adapting real dashboards or performance values.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional metric purpose, one denominator risk, one
            source-health limitation, one quality gate, one gaming pattern, one
            validated action, one metric-retirement condition, and one question
            you will carry into A7.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional incident-response metrics should support bounded decisions, outcomes, risks, and improvements rather than exist because they are easy to count.",
            "Every fictional metric needs purpose, population, numerator, denominator, time range, source health, segments, owner, target, limitation, interpretation, and action.",
            "Speed, volume, closure, recovery, communication, readiness, and completion measures require fictional quality gates.",
            "Distributions, percentiles, segments, case mix, and outliers often reveal risks hidden by averages.",
            "Blind, Degraded, Conflicting, or Recovering sources must change fictional metric confidence and dashboard status.",
            "Targets can create fictional premature closure, denominator shrinkage, case splitting, grouping, target avoidance, personal ranking, and other gaming.",
            "Assigned, Implemented, In validation, Accepted, Complete, and Reopened are different fictional corrective-action states.",
            "Continuous improvement connects fictional observation, definition, measurement, diagnosis, priority, change, validation, monitoring, standardization, and review.",
            "Metrics should be versioned, owned, reviewed, simplified, and retired when they become stale, gameable, duplicative, costly, or unused.",
            "Every CyberShield metrics artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real incidents, teams, staffing, sources, performance, or response capabilities.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A7
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, integrate roles, playbooks, activation, evidence, source
            health, scoping, priority, containment, continuity, communication,
            preservation, recovery, validation, leadership decisions,
            post-incident review, metrics, and continuous improvement in the
            fully fictional A7 incident-response simulation.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}