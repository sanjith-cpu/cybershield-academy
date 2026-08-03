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
const previousLesson = `${modulePath}/case-management-and-notes`;
const nextLesson = `${modulePath}/reducing-noise-and-improving-quality`;

const objectives = [
  "Explain how fictional SIEM dashboards and metrics should support defender decisions rather than reward alert volume, rapid closure, broad suppression, or unsupported certainty.",
  "Distinguish fictional volume, timeliness, source-health, alert-quality, triage, escalation, case-quality, coverage, workload, privacy, recovery, and residual-risk metrics.",
  "Design fictional metric definitions with purpose, population, numerator, denominator, grain, time range, source health, owner, threshold, limitation, review trigger, and decision use.",
  "Evaluate fictional dashboards for misleading averages, hidden backlog, duplicate inflation, blind periods, stale context, denominator problems, privacy risk, and metric gaming.",
  "Create a portfolio-ready fictional Dashboards and Metrics Package containing dashboard layouts, metric dictionaries, evidence models, quality gates, owner matrices, validation cases, leadership summaries, residual risks, and review triggers.",
];

const vocabulary = [
  ["Dashboard", "A fictional visual summary that combines selected measures, states, trends, exceptions, and context to support a bounded defensive decision."],
  ["Metric", "A fictional defined measure with purpose, population, numerator, denominator, time range, source, owner, limitation, and decision use."],
  ["Measure", "A fictional observed value such as a count, duration, percentage, rate, ratio, trend, state, distribution, or age."],
  ["Indicator", "A fictional measure interpreted as a signal about quality, risk, workload, source health, coverage, or performance."],
  ["KPI", "A fictional key performance indicator selected because it supports an important mission or program decision."],
  ["KRI", "A fictional key risk indicator selected because it signals meaningful exposure, uncertainty, deterioration, or residual risk."],
  ["Numerator", "The fictional counted or measured events that appear above the division line in a rate or percentage."],
  ["Denominator", "The fictional full relevant population used to interpret the numerator."],
  ["Population", "The fictional identities, devices, services, alerts, cases, sources, owners, time periods, or records included in a metric."],
  ["Metric grain", "The fictional level at which a measure is calculated, such as alert, rule, case, service, source, identity category, owner, or day."],
  ["Aggregation", "A fictional combination of multiple values into a count, average, median, percentile, rate, distribution, or trend."],
  ["Average", "A fictional arithmetic mean that may hide extreme values, uneven populations, or skewed distributions."],
  ["Median", "A fictional middle value that may better represent typical performance when extremes exist."],
  ["Percentile", "A fictional value below which a defined percentage of observations fall."],
  ["Rate", "A fictional measure comparing counted events to a relevant population or time period."],
  ["Trend", "A fictional pattern of change over time that may reflect real improvement, seasonality, source changes, scope changes, or measurement drift."],
  ["Baseline", "A fictional documented reference used to compare current values with expected historical, peer, service, or operating-state patterns."],
  ["Threshold", "A fictional documented boundary that triggers review, escalation, communication, or another decision."],
  ["Leading indicator", "A fictional measure that may signal future quality or risk before the final outcome occurs."],
  ["Lagging indicator", "A fictional measure that describes a result after activity or decisions have already occurred."],
  ["Coverage metric", "A fictional measure of which identities, services, sources, behaviors, periods, or states are included, excluded, blind, degraded, or untested."],
  ["Quality metric", "A fictional measure of usefulness, evidence completeness, source health, false positives, false negatives, state accuracy, closure quality, or documentation quality."],
  ["Workload metric", "A fictional measure of analyst effort, queue age, owner delay, duplicate work, evidence requests, reopenings, or handoffs."],
  ["Metric gaming", "A fictional behavior in which people optimize the measured number while weakening the real mission outcome."],
];

const metricFamilies = [
  {
    family: "Alert volume",
    purpose: "Measure fictional raw alerts, grouped alerts, unique conditions, expected alerts, duplicates, replay, and suppression.",
    strongQuestions: "How many distinct work items exist? Which rules, sources, services, and identity categories contribute volume? Which records are duplicate, expected, or replayed?",
    weakUse: "Treating lower alert count as proof of better detection quality.",
    decisionUse: "Identify workload, duplication, source recovery, grouping needs, and sudden volume changes.",
  },
  {
    family: "Timeliness",
    purpose: "Measure fictional event-to-collection, collection-to-processing, processing-to-alert, alert-to-review, owner-response, action, validation, and closure time.",
    strongQuestions: "Where does delay occur, and which delays reduce evidence quality, response opportunity, user protection, or recovery options?",
    weakUse: "Rewarding fast closure without measuring decision quality or reopen rate.",
    decisionUse: "Improve collection, queue, triage, ownership, escalation, recovery, and closure timing.",
  },
  {
    family: "Source health",
    purpose: "Measure fictional freshness, completeness, schema, parser, queue, clock, coverage, conflicts, blind periods, recovery, and replay.",
    strongQuestions: "Which conclusions and detections are affected by Conditional, Degraded, Blind, Conflicting, or Recovering evidence?",
    weakUse: "Reporting source connectivity without measuring usable evidence quality.",
    decisionUse: "Prioritize restoration, alternate evidence, historical reassessment, and source-quality improvements.",
  },
  {
    family: "Alert quality",
    purpose: "Measure fictional usefulness, expected alerts, false positives, known false negatives, missing context, source-health handling, and alert-contract completeness.",
    strongQuestions: "Does each alert help answer its defender question, and which evidence or context is usually missing?",
    weakUse: "Using analyst closure labels as the only quality truth.",
    decisionUse: "Improve rule logic, source requirements, context, alert presentation, testing, and documentation.",
  },
  {
    family: "Triage quality",
    purpose: "Measure fictional question quality, evidence-layer accuracy, source-health visibility, request precision, state accuracy, and owner response.",
    strongQuestions: "Do analysts ask bounded questions, preserve uncertainty, and request only decision-relevant evidence?",
    weakUse: "Measuring only time to first review.",
    decisionUse: "Improve runbooks, training, evidence requests, state definitions, and owner workflows.",
  },
  {
    family: "Escalation quality",
    purpose: "Measure fictional trigger precision, delayed escalation, premature escalation, handoff completeness, acceptance, aging, and de-escalation.",
    strongQuestions: "Did the right question reach the right owner at the right time with complete context?",
    weakUse: "Rewarding more escalations as proof of stronger security.",
    decisionUse: "Improve thresholds, recipients, deadlines, handoffs, leadership paths, and de-escalation.",
  },
  {
    family: "Case quality",
    purpose: "Measure fictional note neutrality, evidence traceability, chronology, decision logs, action-validation separation, owner deadlines, closure, and reopening.",
    strongQuestions: "Can another reviewer reconstruct the case and defend each decision?",
    weakUse: "Measuring case count and closure speed alone.",
    decisionUse: "Improve case templates, note quality, validation, residual risk, and lifecycle.",
  },
  {
    family: "Coverage",
    purpose: "Measure fictional identity, device, service, destination, source, behavior, time, environment, state, and test coverage.",
    strongQuestions: "Which mission-relevant areas are monitored, unmonitored, degraded, blind, excluded, or untested?",
    weakUse: "Reporting number of rules without showing what they cover.",
    decisionUse: "Prioritize new coverage, source investment, testing, residual risk, and leadership decisions.",
  },
  {
    family: "Workload and capacity",
    purpose: "Measure fictional queue age, analyst effort, evidence hunting, duplicate work, owner delay, reopenings, handoffs, and specialist demand.",
    strongQuestions: "Which work consumes time without improving decisions, and where is capacity insufficient?",
    weakUse: "Comparing analysts by closed-case count without complexity or quality context.",
    decisionUse: "Improve staffing, automation, ownership, training, evidence access, and prioritization.",
  },
  {
    family: "Privacy and governance",
    purpose: "Measure fictional field purpose, access, sharing, retention, unnecessary evidence, corrections, ownership, and review status.",
    strongQuestions: "Are dashboards and case metrics using only necessary, current, appropriately shared information?",
    weakUse: "Displaying identity-level performance without a bounded need.",
    decisionUse: "Reduce exposure, clarify access, update retention, review purpose, and improve governance.",
  },
  {
    family: "Recovery and resilience",
    purpose: "Measure fictional restoration, backlog, replay, duplicates, session state, source health, service validation, historical reassessment, and rollback.",
    strongQuestions: "Has trustworthy mission and evidence recovery occurred, or only connectivity restoration?",
    weakUse: "Marking recovery complete when a source reconnects.",
    decisionUse: "Improve recovery criteria, validation, rollback, ownership, and historical review.",
  },
  {
    family: "Residual risk and debt",
    purpose: "Measure fictional unresolved coverage, stale context, missing tests, owner gaps, source risk, case debt, escalation debt, and documentation debt.",
    strongQuestions: "Which known limitations remain, who owns them, and when will they be reviewed?",
    weakUse: "Counting debt without mission impact, age, or owner context.",
    decisionUse: "Support prioritization, resource allocation, risk acceptance, and roadmap planning.",
  },
];

const metricDefinitionFields = [
  ["Metric name", "Use a fictional clear name that describes the measure without implying an unsupported outcome.", "Median Alert-to-First-Review Time"],
  ["Decision purpose", "State which fictional decision the metric supports.", "Identify queue or staffing delay that may reduce response opportunity."],
  ["Population", "Define fictional alerts, cases, sources, services, owners, identities, or periods included and excluded.", "All High-priority fictional alerts opened during the month, excluding synthetic validation alerts."],
  ["Numerator or measured value", "Define exactly what is counted or measured.", "Minutes between alert creation and first documented analyst review."],
  ["Denominator", "Define the relevant fictional population for rates or percentages.", "All eligible High-priority alerts with valid timestamps."],
  ["Grain", "Define whether the metric is calculated per alert, rule, case, service, source, owner, or time period.", "Per alert, summarized monthly by median and 90th percentile."],
  ["Time range and update cadence", "Define the fictional measurement period and refresh schedule.", "Rolling thirty days, refreshed daily."],
  ["Data sources and provenance", "List fictional source categories, fields, transformations, health, and owners.", "Alert record, case intake note, state-transition log, and source-health record."],
  ["Threshold or interpretation", "Explain which fictional values trigger review and why.", "Review when median exceeds fifteen minutes or the 90th percentile exceeds forty-five minutes."],
  ["Limitations", "Document fictional missing timestamps, reopened cases, complexity, source delay, duplicates, and scope changes.", "Fast review does not prove good triage or correct priority."],
  ["Owner", "Assign the fictional role responsible for definition, data quality, review, and action.", "Queue-quality owner with analyst-lead review."],
  ["Review trigger", "Define which fictional source, scope, workflow, policy, or mission changes require reassessment.", "New case tool, changed priority model, source outage, or major staffing change."],
];

const dashboardPanels = [
  {
    panel: "Mission impact overview",
    question: "Which fictional users, services, identities, suppliers, privacy outcomes, evidence capabilities, or recovery functions are currently affected?",
    measures: "Active-impact cases, critical-service cases, privileged-authority cases, broad source Blind periods, recovery exceptions, and residual-risk count.",
    risk: "Leadership may see workload without understanding mission consequence.",
    owner: "Program owner and service-risk owner.",
  },
  {
    panel: "Alert volume and uniqueness",
    question: "How much fictional work is unique, duplicate, expected, grouped, suppressed, replayed, or newly changed?",
    measures: "Raw alerts, grouped alerts, unique conditions, expected alerts, duplicates, replay records, and grouping break events.",
    risk: "Raw volume may exaggerate workload or hide important new scope.",
    owner: "Detection-quality owner.",
  },
  {
    panel: "Source-health coverage",
    question: "Which fictional sources, fields, populations, periods, and detections are Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering?",
    measures: "Health-state duration, affected rules, affected services, blind minutes, recovery backlog, schema defects, and unresolved conflicts.",
    risk: "Quiet alerts may look healthy during missing evidence.",
    owner: "Source-quality owner.",
  },
  {
    panel: "Queue and priority",
    question: "Which fictional alerts and cases are aging, blocked, misprioritized, or missing owners?",
    measures: "Queue age by priority, first-review delay, owner-response delay, aging overrides, starvation, reassignment, and priority debt.",
    risk: "Averages may hide a small number of severely delayed cases.",
    owner: "Queue-quality owner.",
  },
  {
    panel: "Triage quality",
    question: "Are fictional analysts using neutral questions, complete evidence, source-health context, and correct states?",
    measures: "Question completeness, evidence-layer errors, source-health visibility, request precision, state corrections, and Conditional/Unknown use.",
    risk: "Low Unknown count may indicate forced certainty rather than strong evidence.",
    owner: "Triage-quality owner.",
  },
  {
    panel: "Escalation and ownership",
    question: "Do fictional escalations reach the correct owner with complete handoffs and timely acceptance?",
    measures: "Escalations by type and level, delayed escalation, premature escalation, handoff completeness, owner acceptance, aging, and de-escalation.",
    risk: "More escalations may reflect weak triage or unclear ownership.",
    owner: "Escalation-governance owner.",
  },
  {
    panel: "Case quality and closure",
    question: "Can fictional cases be reconstructed, validated, closed, and reopened correctly?",
    measures: "Evidence-ledger completeness, decision-log completeness, action-validation separation, closure checklist completion, reopen rate, and case debt.",
    risk: "Fast closure may hide weak evidence, residual risk, or premature resolution.",
    owner: "Case-quality owner.",
  },
  {
    panel: "Coverage and residual risk",
    question: "Which fictional mission-relevant areas remain unmonitored, degraded, untested, undocumented, or accepted as residual risk?",
    measures: "Coverage by service, identity category, behavior, source, period, health state, test status, debt age, owner, and risk acceptance.",
    risk: "High rule count may hide important coverage gaps.",
    owner: "Coverage and risk owner.",
  },
  {
    panel: "Workload and capacity",
    question: "Where does fictional analyst or owner effort concentrate, and which work creates little decision value?",
    measures: "Case complexity, evidence requests, duplicate work, reopenings, owner delays, specialist demand, queue age, and workload distribution.",
    risk: "Comparing people by case count may punish careful work or complex assignments.",
    owner: "Operations and workforce owner.",
  },
  {
    panel: "Privacy and governance",
    question: "Are fictional dashboard fields, case notes, metrics, sharing, and retention purpose-limited and current?",
    measures: "Unnecessary fields, broad access, overdue retention, privacy exceptions, owner gaps, review dates, and public-safe validation.",
    risk: "Dashboards can expose identity-level data without a bounded need.",
    owner: "Privacy and governance owner.",
  },
];

const misleadingPatterns = [
  ["Average hides the tail", "Fictional mean first-review time is eight minutes, but several High-priority alerts waited more than an hour.", "A few severe delays may be hidden by many fast reviews.", "Use median, percentile, distribution, priority segment, and longest-delay review."],
  ["Raw count hides duplicates", "Fictional alert volume rises by 200%, but most records are recovery replay duplicates.", "The measure confuses delivery repetition with unique analyst work.", "Show raw alerts, unique conditions, grouped work items, duplicates, replay, and break conditions."],
  ["Lower volume appears successful", "Fictional alerts fall after broad suppression, but one meaningful destination change is no longer visible.", "Noise reduction may have weakened coverage.", "Pair volume with misses, coverage, grouping regression, source health, and quality review."],
  ["Closure speed rewards weak cases", "Fictional average closure time improves because cases close when alerts stop.", "Source recovery, validation, residual risk, and reopen criteria may remain incomplete.", "Measure closure quality, reopen rate, validation completeness, residual risk, and source-health reconciliation."],
  ["No alerts appears healthy", "Fictional alert volume drops to zero while a required source is Blind.", "Missing evidence may appear as normal quiet activity.", "Show source-health state, blind duration, affected detections, and Unknown coverage."],
  ["Rule count appears to equal coverage", "Fictional program reports one hundred rules but does not show which services, identities, behaviors, or blind periods are covered.", "Many rules can overlap while important mission areas remain uncovered.", "Measure coverage by mission question, population, source, state, and test status."],
  ["Percentages use unstable denominators", "Fictional false-positive rate falls because unreviewed and Unknown cases are removed from the denominator.", "The result changes because the population changed, not necessarily because quality improved.", "Define reviewed, unreviewed, Unknown, Source-Degraded, Expected, reopened, and excluded populations clearly."],
  ["Individual rankings distort behavior", "Fictional analysts are ranked by closed-case count.", "Complexity, quality, collaboration, source gaps, and owner delay are ignored.", "Measure team outcomes, case complexity, quality, evidence, workload, and improvement rather than personal scoreboards."],
  ["Trend ignores scope change", "Fictional alert rate rises after adding a new service and source.", "The program may have expanded coverage rather than become noisier.", "Annotate source, scope, population, rule, policy, and workflow changes."],
  ["Metric becomes a target", "Fictional team closes cases faster to meet a target, increasing reopenings.", "The measured number improves while the mission outcome weakens.", "Use balanced measures, quality gates, review samples, and anti-gaming checks."],
];

const sourceHealthMetrics = [
  ["Freshness compliance", "Percentage of fictional source intervals meeting documented freshness requirements.", "All expected source intervals for the included population and time range.", "Fresh data may still be incomplete, semantically wrong, or poorly mapped.", "Investigate delay patterns and affected detections."],
  ["Completeness rate", "Percentage of fictional expected records or required fields received for the documented population.", "Expected records or fields based on service, source, and operating-state assumptions.", "The expected population may itself be uncertain.", "Review source gaps, denominator assumptions, and alternate evidence."],
  ["Blind minutes", "Total fictional minutes in which required evidence was unavailable for a defined population.", "Reported directly and as a percentage of expected monitoring time.", "A short Blind period can still be high impact if time-sensitive.", "Prioritize restoration and historical reassessment."],
  ["Schema and parser defect rate", "Percentage of fictional records or intervals affected by unsupported schema, parser, or field-mapping behavior.", "All processed records or intervals for the source version.", "Low defect rate may hide defects in rare critical fields.", "Review field-level impact, regression, and rollout controls."],
  ["Conflict rate", "Percentage of fictional related source relationships that disagree beyond documented tolerance.", "All relationships eligible for comparison.", "Some source differences are expected and meaningful rather than errors.", "Review source authority, timing, semantics, and owner reconciliation."],
  ["Recovery reconciliation", "Percentage of fictional backlog, replay, duplicate, schema, timing, and historical obligations reconciled after recovery.", "All documented recovery obligations for the affected source period.", "Connectivity restoration can make this metric look better before validation is complete.", "Keep source Recovering until obligations pass."],
];

const qualityMetricCards = [
  {
    metric: "Alert usefulness rate",
    definition: "Percentage of fictional reviewed alerts that helped answer the documented defender question.",
    numerator: "Reviewed alerts rated useful for a bounded decision.",
    denominator: "All reviewed alerts in scope, including Expected, Conditional, Unknown, and Source-Degraded.",
    limitation: "Analyst ratings may vary and require calibration.",
  },
  {
    metric: "Alert-contract completeness",
    definition: "Percentage of fictional alerts containing observation, evidence, source health, context, confidence, severity, priority, alternatives, owners, and non-proof statements.",
    numerator: "Alerts passing all required contract fields.",
    denominator: "All alerts in the reviewed rule population.",
    limitation: "Complete fields may still contain stale or incorrect values.",
  },
  {
    metric: "Expected-alert accuracy",
    definition: "Percentage of fictional Expected alerts matching current approval, scope, owner, purpose, time, service, destination, and source health.",
    numerator: "Validated Expected alerts with current matching context.",
    denominator: "All alerts labeled Expected during the period.",
    limitation: "Validation may depend on delayed or stale owner evidence.",
  },
  {
    metric: "False-positive rate",
    definition: "Percentage of fictional reviewed alerts whose risky interpretation was unsupported after evidence review.",
    numerator: "Reviewed alerts labeled false positive under current definitions.",
    denominator: "All reviewed alerts eligible for that outcome.",
    limitation: "Unknown, Source-Degraded, and unreviewed alerts should not be forced into the denominator.",
  },
  {
    metric: "Known false-negative count",
    definition: "Count of fictional meaningful conditions discovered through testing, owner reports, recovery, or later evidence that were not alerted.",
    numerator: "Known missed conditions.",
    denominator: "Reported as a count plus affected coverage because the full unknown population is unavailable.",
    limitation: "Unknown misses cannot be measured completely.",
  },
  {
    metric: "Triage-state correction rate",
    definition: "Percentage of fictional cases whose state changed after quality review because the earlier state did not match evidence.",
    numerator: "Cases with documented state correction.",
    denominator: "All cases sampled for quality review.",
    limitation: "A higher rate may reflect better review or weaker initial triage.",
  },
  {
    metric: "Closure-quality pass rate",
    definition: "Percentage of fictional closed cases meeting evidence, source health, authorization, scope, impact, validation, owner, residual-risk, and reopen requirements.",
    numerator: "Closed cases passing all closure gates.",
    denominator: "All closed cases in the reviewed sample.",
    limitation: "Passing sampled cases does not prove all cases are high quality.",
  },
  {
    metric: "Reopen rate",
    definition: "Percentage of fictional closed cases reopened because of new evidence, failed validation, changed scope, repeated behavior, or source recovery.",
    numerator: "Cases reopened within the defined review period.",
    denominator: "All eligible closed cases.",
    limitation: "A low reopen rate may mean strong closure or weak detection of reopen triggers.",
  },
];

const workloadMetrics = [
  ["Queue age by priority", "Show fictional unresolved alert and case age separately for High, Medium, and Low priority.", "Median, 90th percentile, oldest cases, owner status, source health, and active-impact segment.", "One average across all priorities.", "Identify starvation, blocked work, owner delay, and staffing need."],
  ["Evidence-request burden", "Measure fictional requests per case, response delay, repeated requests, missing fields, and owner effort.", "Requests by purpose, owner, case complexity, source health, and decision value.", "Total request count only.", "Improve evidence access, runbooks, source context, ownership, and automation."],
  ["Duplicate work", "Measure fictional repeated alerts, repeated evidence review, duplicate cases, replay, and unaccepted handoffs.", "Duplicate cause, affected rule or source, hours, owners, and corrective action.", "Analyst case count without uniqueness.", "Improve grouping, case linking, recovery, routing, and ownership."],
  ["Owner-response delay", "Measure fictional time between bounded request, receiving-owner acceptance, response, and validation.", "By owner role, urgency, case type, response quality, alternate path, and missed deadline.", "Average response time without complexity or deadline context.", "Improve ownership, backups, escalation, service expectations, and communication."],
  ["Rework rate", "Measure fictional repeated triage, corrected notes, reopened cases, failed validation, and repeated owner requests.", "Rework reason, mission impact, source health, owner, and preventable cause.", "Treating all rework as analyst failure.", "Improve alerts, sources, runbooks, training, case templates, and closure."],
  ["Specialist demand", "Measure fictional technical, identity, service, supplier, privacy, recovery, and leadership escalations.", "Demand by bounded question, level, urgency, handoff quality, response, and outcome.", "Total escalation count.", "Improve specialist capacity, training, ownership, evidence access, and thresholds."],
];

const validationCases = [
  ["DASH-T01", "Duplicate inflation", "Recovery replay triples raw alert volume without increasing unique conditions.", "Separate raw alerts, unique conditions, grouped work items, duplicates, replay, and affected rules.", "Accurate workload and trend interpretation."],
  ["DASH-T02", "Blind source", "Alert volume falls to zero while a required source is Blind.", "Highlight Blind state, affected detections, blind minutes, Unknown coverage, and reassessment.", "False-normal interpretation."],
  ["DASH-T03", "Average hides delay", "Mean first-review time is eight minutes, but several High-priority alerts waited over one hour.", "Show median, percentiles, distribution, oldest cases, and priority segments.", "Tail-risk visibility."],
  ["DASH-T04", "Denominator change", "False-positive rate drops after unreviewed and Unknown cases are removed.", "Fail validation until reviewed, unreviewed, Unknown, Source-Degraded, Expected, and excluded populations are documented.", "Rate integrity."],
  ["DASH-T05", "Broad suppression", "Alert volume decreases, but grouping regression reveals a hidden new destination.", "Keep noise metric Conditional and show regression failure, coverage risk, and rollback status.", "Balanced quality."],
  ["DASH-T06", "Fast closure", "Closure time improves while reopen rate and incomplete source reconciliation rise.", "Flag the tradeoff and require closure-quality review.", "Anti-gaming behavior."],
  ["DASH-T07", "Coverage expansion", "Alert rate increases after a new service and source enter scope.", "Add scope-change annotation and normalized population view.", "Fair trend interpretation."],
  ["DASH-T08", "Source recovery", "Source reconnects, but backlog, replay, duplicates, schema, and historical gaps remain.", "Keep source Recovering and show reconciliation obligations.", "Recovery quality."],
  ["DASH-T09", "Individual ranking", "Analysts are ranked by cases closed.", "Fail privacy and governance review; shift to team-level quality, complexity, workload, and improvement.", "Fairness and healthy behavior."],
  ["DASH-T10", "Stale criticality", "Priority dashboard uses a service-criticality catalog not reviewed for nine months.", "Mark metric Conditional and trigger owner review.", "Context freshness."],
  ["DASH-T11", "Missing owner", "Leadership dashboard includes residual-risk count with no definition or owner.", "Fail governance validation until definition, population, owner, limitation, and decision use are documented.", "Accountability."],
  ["DASH-T12", "Public portfolio", "Student uses sanitized real dashboard screenshots.", "Fail portfolio validation; every organization, source, metric, alert, owner, date, and value must be invented.", "Confidentiality and safety."],
];

const evidenceMatrix = [
  ["METRIC-E01", "Fictional alert-volume dashboard", "Raw alert volume increased by 180%, but unique conditions increased by only 8% and replay markers explain most of the difference.", "Duplicate or replay delivery is a major volume driver.", "The dashboard does not prove all repeated alerts are unnecessary.", "Review uniqueness, grouping, recovery, and workload separately."],
  ["METRIC-E02", "Fictional source-health panel", "Network source is Blind for forty minutes across three service zones, while alert volume for related rules is near zero.", "The quiet period is not trustworthy as normal activity.", "The panel does not prove harmful activity occurred.", "Show Unknown coverage, affected rules, restoration, and reassessment."],
  ["METRIC-E03", "Fictional queue dashboard", "Median first-review time is seven minutes, but the 90th percentile is fifty-two minutes and four High-priority alerts exceed deadline.", "The typical case is fast, but a meaningful delayed tail exists.", "The panel does not identify every cause of delay.", "Review priority, ownership, staffing, source health, and blocked cases."],
  ["METRIC-E04", "Fictional closure dashboard", "Average closure time improved by 30%, while reopen rate doubled and closure-quality pass rate fell.", "Faster closure may be weakening case quality.", "The panel does not prove every fast closure is poor.", "Review closure definitions, validation, residual risk, and incentives."],
  ["METRIC-E05", "Fictional coverage panel", "Rule count increased, but two critical services remain Blind during recovery periods and one privileged identity category is untested.", "Rule count does not equal mission coverage.", "The panel does not show every unrecognized coverage gap.", "Prioritize mission-based coverage and testing."],
  ["METRIC-E06", "Fictional triage-quality panel", "Unknown and Conditional states fell sharply after a reporting target was introduced, while state-correction rate increased.", "Analysts may be forcing certainty to satisfy the target.", "The panel does not prove intentional gaming.", "Review definitions, incentives, coaching, and quality samples."],
  ["METRIC-E07", "Fictional privacy panel", "An analyst leaderboard displays identity-level case counts and closure times without a bounded operational need.", "The dashboard exceeds purpose and fairness boundaries.", "The finding does not prevent all workload measurement.", "Move to team-level, role-level, complexity-aware quality and capacity views."],
  ["METRIC-E08", "Fictional metric dictionary", "Residual-risk count has no population, owner, denominator, aging rule, or decision use.", "The metric is not decision-ready or governable.", "The count may still identify real unresolved work.", "Complete definition and ownership before leadership use."],
];

const governanceDomains = [
  ["Purpose", "Which fictional decision should the dashboard or metric support?", "Mission question, stakeholder need, meeting decision, owner workflow, and expected action.", "The dashboard becomes decoration or encourages unbounded monitoring."],
  ["Definition", "Are fictional population, numerator, denominator, grain, time range, exclusions, and transformations explicit?", "Metric dictionary, field definitions, examples, tests, and owner review.", "Different viewers interpret the same number differently."],
  ["Source health", "Can fictional source delay, Blind periods, schema changes, duplicates, conflicts, and recovery affect the measure?", "Source-health states, quality tests, affected periods, and confidence rules.", "Missing evidence becomes false improvement."],
  ["Ownership", "Who owns fictional metric definition, source quality, dashboard review, threshold response, and retirement?", "Owner matrix, review dates, escalation path, change log, and debt register.", "Metrics remain stale or trigger no action."],
  ["Interpretation", "Which fictional conclusions are supported, and which are not?", "Decision notes, limitations, examples, counterexamples, and review guidance.", "A single number becomes a broad performance judgment."],
  ["Thresholds", "Which fictional values trigger review, escalation, communication, or action, and why?", "Baseline, percentiles, service expectations, risk tolerance, owner input, and validation.", "Thresholds become arbitrary or copied across different populations."],
  ["Privacy and fairness", "Does the fictional dashboard expose unnecessary identity, owner, team, or case-level information?", "Purpose map, access roles, aggregation, sharing, retention, and fairness review.", "Metrics create surveillance or unhealthy personal rankings."],
  ["Anti-gaming", "Could fictional users improve the metric while weakening the mission outcome?", "Balanced measures, counter-metrics, quality samples, reopenings, misses, and behavior review.", "Teams optimize the number rather than the real result."],
  ["Change management", "How do fictional source, scope, rule, workflow, staffing, policy, or mission changes affect trends?", "Annotations, version history, change dates, normalized views, and review triggers.", "Trends appear to improve or worsen because the measurement changed."],
  ["Retirement", "When should the fictional metric or panel be replaced, merged, archived, or removed?", "Decision use, duplication, owner review, stale context, low action value, and replacement coverage.", "Dashboards accumulate stale measures and conflicting definitions."],
];

const commonMistakes = [
  ["Alert volume is treated as security performance", "A fictional dashboard celebrates lower alert count without reviewing source health, coverage, suppression, or misses.", "Coverage loss may appear as improvement.", "Pair volume with uniqueness, expected alerts, source health, coverage, regressions, and known misses."],
  ["Fast closure is rewarded alone", "A fictional team target reduces average closure time while reopenings increase.", "Cases may close before evidence, validation, residual risk, and reopen criteria are complete.", "Balance timeliness with closure quality, reopen rate, source reconciliation, and residual risk."],
  ["Average hides important cases", "A fictional average first-review time looks healthy despite several severely delayed High-priority alerts.", "Tail risk and starvation remain hidden.", "Use median, percentiles, distribution, priority segments, and oldest-case review."],
  ["The denominator is unclear", "A fictional false-positive rate excludes Unknown, Source-Degraded, and unreviewed cases without documentation.", "The percentage may be misleading or impossible to compare.", "Define the complete population, exclusions, eligibility, and missing outcomes."],
  ["No alerts is treated as no risk", "A fictional panel shows zero alerts during a Blind source period.", "Missing evidence becomes false normality.", "Show source health, blind duration, affected detections, Unknown coverage, and reassessment."],
  ["Rule count is treated as coverage", "A fictional program reports many rules without mission, service, identity, behavior, source, or test coverage.", "Overlapping rules may hide critical gaps.", "Measure coverage by defender question, population, source, state, and validation."],
  ["Personal leaderboards are used", "A fictional dashboard ranks analysts by cases closed and average closure time.", "People may avoid complex cases, close early, or compete instead of sharing evidence.", "Use team-level, complexity-aware, quality-focused, privacy-reviewed measures."],
  ["Trends ignore scope changes", "A fictional alert-rate increase is called deterioration after new services and sources enter scope.", "Coverage expansion may be mislabeled as noise growth.", "Annotate changes and use normalized populations."],
  ["Metrics have no owner or action", "A fictional dashboard displays residual-risk count without a definition, owner, threshold, or next step.", "The number creates concern but no accountable decision.", "Assign purpose, definition, owner, threshold, limitation, review trigger, and decision use."],
  ["Real dashboards enter the portfolio", "A fictional project uses sanitized real screenshots, alert counts, source names, owners, or service metrics.", "Sensitive systems, priorities, people, suppliers, and defensive capabilities may still be exposed.", "Invent every organization, source, metric, alert, owner, date, value, decision, and outcome."],
];

const labSteps = [
  ["1", "Define dashboard audiences", "Choose fictional analyst, source-owner, service-owner, detection-owner, privacy, recovery, risk, and leadership decisions.", "Audience-to-decision map.", "Every panel has a bounded user and decision purpose."],
  ["2", "Select metric families", "Choose fictional alert volume, timeliness, source health, alert quality, triage, escalation, case quality, coverage, workload, privacy, recovery, and residual risk.", "Metric-family inventory.", "The set balances speed, quality, coverage, risk, workload, and governance."],
  ["3", "Write metric definitions", "Document fictional name, purpose, population, numerator, denominator, grain, time range, sources, threshold, limitation, owner, and review trigger.", "Metric dictionary.", "Another reviewer can reproduce and interpret each measure."],
  ["4", "Design dashboard panels", "Create fictional mission, volume, source-health, queue, triage, escalation, case, coverage, workload, privacy, recovery, and residual-risk panels.", "Dashboard wireframe.", "Each panel shows context, state, trend, exceptions, and decision use."],
  ["5", "Add source-health context", "Show fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states with affected metrics and periods.", "Metric-confidence layer.", "Missing evidence cannot appear as improvement."],
  ["6", "Add balanced views", "Pair fictional volume with uniqueness, speed with quality, closure with reopening, suppression with coverage, and workload with complexity.", "Balanced-metric matrix.", "No single metric can reward harmful behavior by itself."],
  ["7", "Test misleading patterns", "Evaluate fictional duplicates, blind periods, averages, denominator changes, scope expansion, suppression, fast closure, personal rankings, and stale context.", "Dashboard validation matrix.", "Expected interpretations are documented before review."],
  ["8", "Define governance", "Assign fictional purpose, definition, source, threshold, privacy, anti-gaming, change, review, and retirement owners.", "Metric-governance matrix.", "Every measure has an accountable lifecycle."],
  ["9", "Create leadership communication", "Summarize fictional mission impact, trend, uncertainty, source health, workload, debt, decisions, owners, milestones, and residual risk.", "Leadership dashboard brief.", "The summary explains what decisions are needed, not only what numbers changed."],
  ["10", "Prepare the portfolio package", "Combine the fictional audiences, metric families, dictionary, panels, balanced views, tests, governance, leadership brief, residual risks, and reflection.", "Public-safe Dashboards and Metrics Package.", "Every organization, source, metric, alert, owner, date, value, decision, and outcome is invented."],
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of a fictional SIEM dashboard?",
    choices: ["To display as many numbers as possible.", "To support bounded defender decisions using selected measures, states, context, trends, and limitations.", "To rank individual analysts.", "To prove the program is successful."],
    answer: 1,
    explanation: "A useful dashboard is decision-oriented and includes context, limitations, ownership, and source health.",
  },
  {
    question: "Why is raw alert volume alone weak?",
    choices: ["Because alerts should never be counted.", "Because it may include duplicates, replay, expected alerts, grouped conditions, scope changes, and source-health effects.", "Because volume always stays constant.", "Because alert count proves coverage."],
    answer: 1,
    explanation: "Raw volume does not show uniqueness, usefulness, coverage, quality, or why the count changed.",
  },
  {
    question: "A fictional average first-review time is eight minutes, but several High-priority alerts waited over one hour. What is the best improvement?",
    choices: ["Keep only the average.", "Show median, percentiles, distribution, priority segments, and oldest cases.", "Remove the delayed alerts.", "Lower their priority."],
    answer: 1,
    explanation: "Distribution and tail measures reveal delays hidden by a single average.",
  },
  {
    question: "A fictional source is Blind and related alert volume drops to zero. What should the dashboard show?",
    choices: ["No risk.", "Improved performance.", "Blind state, affected detections, blind duration, Unknown coverage, alternate evidence, and reassessment.", "A true-negative rate of 100%."],
    answer: 2,
    explanation: "Missing evidence cannot support normal or absence conclusions.",
  },
  {
    question: "Why must a fictional metric define its denominator?",
    choices: ["To make the dashboard more technical.", "Because rates and percentages are meaningful only when the full relevant population is clear.", "Because every metric must be a percentage.", "Because the denominator is always alert volume."],
    answer: 1,
    explanation: "Changing or unclear populations can make trends and comparisons misleading.",
  },
  {
    question: "Which fictional metric set is most balanced?",
    choices: ["Alert count and closure speed only.", "Volume, uniqueness, source health, coverage, quality, timeliness, workload, privacy, recovery, and residual risk.", "Number of escalations only.", "Individual analyst rankings only."],
    answer: 1,
    explanation: "Balanced measures reduce the chance that one target rewards harmful behavior or hides risk.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: ["Use sanitized real dashboards.", "Use real metric names with fake values.", "Invent every organization, source, metric, alert, owner, date, value, decision, and outcome.", "Blur real service names."],
    answer: 2,
    explanation: "Complete fictionalization protects real systems, people, suppliers, priorities, and defensive capabilities.",
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
        Module A6
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

export default function DashboardsAndMetricsPage() {
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
              Module A6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Quality, Coverage, Workload, Source Health, Recovery, and Risk
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.8 Dashboards and Metrics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defenders design dashboards and metrics that
            support real decisions about alert quality, source health, queue
            aging, triage, escalation, case closure, coverage, workload,
            privacy, recovery, residual risk, and improvement.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A6: SIEM and Alert Triage Concepts"
          lessonTitle="Dashboards and Metrics"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented dashboards, metrics, alerts, cases, sources, owners, services, identities, dates, values, decisions, and outcomes.",
            "I will define fictional purpose, population, numerator, denominator, grain, time range, source health, owner, threshold, limitation, and decision use.",
            "I will not treat lower volume, faster closure, fewer Unknown states, or more escalations as automatic improvement.",
            "I will preserve source-health states, blind periods, scope changes, duplicates, replay, denominator changes, privacy, and anti-gaming controls.",
            "I will balance fictional speed with quality, workload with complexity, suppression with coverage, and closure with reopening.",
            "I will not access, copy, sanitize, upload, review, measure, publish, compare, or modify any real dashboard, metric, SIEM, alert, case, source, account, service, supplier, organization, team, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Better Number Can Represent a Worse Outcome"
        >
          <p className="leading-8">
            A fictional program celebrates three improvements: alert volume is
            down, average closure time is faster, and Unknown cases are nearly
            gone. A closer review shows that broad suppression hid a changed
            destination, cases close when alerts stop, and analysts avoid
            Unknown because it lowers their score. The numbers improved while
            detection coverage, case quality, and evidence honesty weakened.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “Fewer alerts and faster closure prove the SIEM program is
                improving.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “Volume and speed improved, but grouping regression, reopen
                rate, source health, coverage, closure quality, and state
                corrections show whether the mission outcome actually improved.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Metrics are tools for decisions. When they become targets without
            balance, they can reward the wrong behavior.
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
          title="Dashboards Shape Attention, Incentives, and Resource Decisions"
        >
          <p className="leading-8">
            Fictional dashboards influence which sources are repaired, which
            alerts are tuned, which cases are reviewed, which owners receive
            resources, which services appear at risk, and which program changes
            are considered successful. Weak measures can hide Blind periods,
            duplicate inflation, stale context, queue starvation, incomplete
            recovery, privacy problems, or residual risk.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Decision-centered", "Every fictional panel should support a bounded analyst, owner, quality, privacy, recovery, risk, or leadership decision."],
              ["Evidence-aware", "Every fictional metric should show population, source health, scope, transformation, limitations, and uncertainty."],
              ["Behavior-aware", "Balanced fictional measures should discourage broad suppression, premature closure, forced certainty, and unhealthy rankings."],
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
          eyebrow="Core Framework"
          title="The M-E-A-S-U-R-E Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["M — Mission decision", "Define the fictional user, analyst, source, service, privacy, recovery, risk, or leadership decision the measure supports."],
              ["E — Exact definition", "Document fictional population, numerator, denominator, grain, time range, exclusions, fields, and transformations."],
              ["A — Assess source health", "Show fictional freshness, completeness, schema, parser, queue, duplicates, conflicts, blind periods, recovery, and confidence."],
              ["S — Segment the view", "Break fictional results by priority, service, source, rule, state, owner role, complexity, time, and mission context."],
              ["U — Use balanced measures", "Pair fictional speed with quality, volume with uniqueness, suppression with coverage, closure with reopening, and workload with complexity."],
              ["R — Review behavior and risk", "Check fictional gaming, privacy, fairness, stale context, denominator drift, scope changes, thresholds, and residual risk."],
              ["E — Evolve or retire", "Assign fictional owners, review dates, change history, tests, thresholds, actions, debt, replacement coverage, and retirement."],
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
              This fictional metric measures median and 90th-percentile
              alert-to-first-review time for High-priority alerts, excludes
              synthetic validation alerts, shows source-health and owner-delay
              context, and triggers review when either threshold exceeds the
              documented response expectation.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Dashboards and Metrics"
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Twelve Metric Families
          </h2>

          <div className="mt-6 grid gap-5">
            {metricFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.family}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Strong questions</p>
                    <p className="mt-2 text-sm leading-6">{item.strongQuestions}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak use</p>
                    <p className="mt-2 text-sm leading-6">{item.weakUse}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Decision use</p>
                    <p className="mt-2 text-sm leading-6">{item.decisionUse}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Write a Twelve-Field Metric Definition"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Field", "Requirement", "Fictional example"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {metricDefinitionFields.map(([field, requirement, example]) => (
                  <tr key={field}>
                    <td className="px-4 py-4 align-top font-bold text-white">{field}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{requirement}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Design Ten Dashboard Panels"
        >
          <div className="grid gap-5">
            {dashboardPanels.map((item) => (
              <article
                key={item.panel}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">{item.panel}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Decision question", item.question],
                    ["Fictional measures", item.measures],
                    ["Risk if weak", item.risk],
                    ["Primary owner", item.owner],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.panel}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Recognize Ten Misleading Metric Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {misleadingPatterns.map(([pattern, example, whyMisleading, correction]) => (
              <article
                key={pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{pattern}</h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional example</p>
                  <p className="mt-2 text-sm leading-6">{example}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why misleading</p>
                  <p className="mt-2 text-sm leading-6">{whyMisleading}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Measure Six Source-Health Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {sourceHealthMetrics.map(([metric, definition, denominator, caution, decision]) => (
              <article
                key={metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{metric}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{definition}</p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Denominator or population</p>
                  <p className="mt-2 text-sm leading-6">{denominator}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Caution</p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Decision</p>
                  <p className="mt-2 text-sm leading-6">{decision}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Define Eight Alert and Case Quality Metrics"
        >
          <div className="grid gap-5">
            {qualityMetricCards.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">{item.metric}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.definition}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Numerator</p>
                    <p className="mt-2 text-sm leading-6">{item.numerator}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Denominator</p>
                    <p className="mt-2 text-sm leading-6">{item.denominator}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Measure Six Workload and Capacity Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {workloadMetrics.map(([metric, purpose, strongView, weakView, decision]) => (
              <article
                key={metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">{metric}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{purpose}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong view</p>
                  <p className="mt-2 text-sm leading-6">{strongView}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak view</p>
                  <p className="mt-2 text-sm leading-6">{weakView}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Decision use</p>
                  <p className="mt-2 text-sm leading-6">{decision}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Validate Twelve Dashboard Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Case", "Type", "Fictional input", "Expected result", "Quality protected"].map((heading) => (
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

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Govern Ten Metric Lifecycle Domains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceDomains.map(([domain, question, evidence, failure]) => (
              <article
                key={domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{domain}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Governance question</p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Failure if ignored</p>
                  <p className="mt-2 text-sm leading-6">{failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Dashboard Architecture"
          title="Northbridge Decision-to-Metric Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches metric design without
            real dashboards, products, alerts, source names, identities,
            services, owners, screenshots, values, suppliers, or internal
            priorities.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission inputs", "Users, services, identity, privacy, recovery, risk"],
                ["Evidence inputs", "Alerts, cases, sources, timing, health, coverage"],
                ["Workflow inputs", "Queue, triage, escalation, decisions, actions"],
                ["Governance inputs", "Owners, thresholds, privacy, change, retirement"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50">
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Metric Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Purpose", "Decision, audience, mission, expected action"],
                  ["Definition", "Population, numerator, denominator, grain, time"],
                  ["Evidence", "Sources, fields, transformations, health, limits"],
                  ["Balance", "Speed, quality, volume, uniqueness, coverage, risk"],
                  ["Segmentation", "Priority, service, source, state, owner role"],
                  ["Validation", "Blind, duplicate, average, denominator, scope tests"],
                  ["Governance", "Owner, threshold, privacy, anti-gaming, change"],
                  ["Lifecycle", "Review, debt, replacement, retirement, residual risk"],
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
                ["Analyst output", "Queue, quality, evidence, workload decisions"],
                ["Owner output", "Source, service, detection, privacy, recovery actions"],
                ["Leadership output", "Impact, trends, resources, debt, milestones"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
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
          title="Fake Northbridge SIEM Quality Dashboard"
          subtitle="Fictional alert uniqueness, source health, queue aging, triage quality, closure quality, coverage, recovery, privacy, and residual risk for training only."
          metrics={[
            {
              label: "High-priority alerts beyond review deadline",
              value: "4",
              note: "Median review time is healthy, but the 90th percentile and oldest-case view reveal delayed tail risk.",
            },
            {
              label: "Detections affected by Blind or Recovering sources",
              value: "7",
              note: "Three critical-service detections require historical reassessment after source recovery.",
            },
            {
              label: "Open fictional dashboard and metric debt",
              value: "12",
              note: "Definitions, denominators, source health, owners, privacy, thresholds, change annotations, anti-gaming checks, validation, residual risk, review dates, and retirement remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Dashboard Interpretation Requires Immediate Review"
          severity="High"
          time="5:24 PM"
          source="Fake Northbridge Metrics Governance Console"
          details="The fictional dashboard reports lower alert volume and faster closure as improvements. However, a required source was Blind, broad grouping failed regression, reopen rate doubled, four High-priority alerts exceeded deadline, and the false-positive denominator excludes Unknown and Source-Degraded cases."
          recommendation="Mark the fictional dashboard Conditional. Correct source-health context, uniqueness, grouping regression, closure-quality measures, tail latency, denominator definitions, owner assignments, privacy review, and leadership interpretation before use."
        />

        <FakeLogPanel
          title="Fake Dashboard Review Timeline"
          logs={[
            "09:00 DASHBOARD id='METRICS-ST-06'",
            "09:02 METRIC raw-alerts='down-28-percent'",
            "09:03 METRIC unique-conditions='down-4-percent'",
            "09:04 SOURCE network='blind'",
            "09:05 COVERAGE affected-rules='7'",
            "09:06 METRIC closure-time='improved'",
            "09:07 METRIC reopen-rate='doubled'",
            "09:08 METRIC review-median='7-minutes'",
            "09:09 METRIC review-p90='52-minutes'",
            "09:10 QUEUE high-overdue='4'",
            "09:11 GROUPING regression='failed'",
            "09:12 DENOMINATOR unknown='excluded'",
            "09:13 DENOMINATOR source-degraded='excluded'",
            "09:14 PRIVACY analyst-ranking='present'",
            "09:15 OWNER residual-risk='missing'",
            "09:16 STATUS dashboard='conditional'",
            "17:24 ALERT issue='interpretation-review'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Dashboard Evidence Supports—and What It Does Not Prove
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map(([id, source, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <h3 className="font-black text-white">{source}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Does not prove", limits],
                    ["Dashboard use", use],
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
          title="Which Dashboard Decision Is Best Supported?"
          question="Which fictional conclusion best represents the Northbridge metrics review?"
          evidence={[
            "Raw alert volume fell by 28%, but unique conditions fell by only 4%.",
            "A required network source was Blind and affected seven detections.",
            "Broad grouping failed a regression case involving a new destination.",
            "Average closure time improved while reopen rate doubled.",
            "Median first-review time is seven minutes, but four High-priority alerts exceeded deadline.",
            "False-positive rate excludes Unknown and Source-Degraded cases.",
            "An analyst leaderboard displays personal case counts and closure times.",
            "Residual-risk count has no definition or owner.",
          ]}
          options={[
            "Keep the fictional dashboard Conditional and correct source-health context, uniqueness, coverage, grouping regression, closure-quality balance, tail latency, denominator definitions, privacy, ownership, and residual-risk governance before leadership use.",
            "Approve the dashboard because alert volume and closure time improved.",
            "Remove the Blind-source and reopen panels because they make the program look worse.",
            "Rank analysts more aggressively so closure time improves further.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves useful measures while correcting the exact evidence, quality, coverage, denominator, privacy, and governance defects that affect trustworthy decisions."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Dashboard and Metric Errors"
        >
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

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Dashboards and Metrics Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, copy, sanitize, upload, inspect, measure, compare, publish,
            review, or modify any real dashboard, metric, SIEM, alert, case,
            source, account, service, supplier, organization, team, or person.
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
          title="Alert Volume Falls during a Blind Source Period"
          scenario="A fictional dashboard reports a major improvement because related alert volume falls to zero. The required network source was Blind for forty minutes across three critical service zones."
          choices={[
            {
              label: "Choice A",
              response: "Mark the fictional volume metric Conditional, display the Blind period, affected detections, Unknown coverage, alternate evidence, restoration status, and historical reassessment before interpreting the drop.",
              outcome: "Best defensive choice. Missing evidence cannot be counted as quiet normal activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Celebrate the lower alert count as successful tuning.",
              outcome: "Weak. The volume decrease may be caused by evidence loss.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove source-health information so the trend remains clear.",
              outcome: "Weak. The missing context is essential to interpretation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Closure Time Improves while Reopen Rate Doubles"
          scenario="A fictional dashboard shows a 30% improvement in case-closure time. Quality review shows that cases often close when alerts stop, source reconciliation remains incomplete, and reopen rate has doubled."
          choices={[
            {
              label: "Choice A",
              response: "Keep the fictional timeliness metric but pair it with closure-quality pass rate, reopen rate, source reconciliation, validation completeness, residual risk, and anti-gaming review.",
              outcome: "Best choice. Speed remains useful only when balanced with decision quality.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the closure target because faster is always better.",
              outcome: "Weak. The target may be rewarding premature closure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Stop measuring closure quality because it conflicts with the speed metric.",
              outcome: "Weak. Conflicting measures reveal an important program tradeoff.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a SIEM Dashboard before a Review Board"
        >
          <p className="leading-8">
            Fictional Northbridge presents a leadership dashboard with lower
            alert volume, faster closure, fewer Unknown states, more
            escalations, and higher rule count. The dashboard does not show
            unique conditions, source Blind periods, coverage, denominator
            changes, reopenings, closure quality, grouping regression, workload
            complexity, privacy, or residual-risk ownership.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend the decisions", "Explain which fictional analyst, source, service, privacy, recovery, risk, and leadership decisions each panel supports."],
              ["Defend the definitions", "Explain fictional populations, numerators, denominators, grain, time range, exclusions, transformations, and limitations."],
              ["Defend source health", "Explain fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering effects on metrics."],
              ["Defend balance", "Explain fictional volume versus uniqueness, speed versus quality, suppression versus coverage, and closure versus reopening."],
              ["Defend behavior and privacy", "Explain fictional anti-gaming, team-level views, complexity, access, retention, fairness, and purpose limitation."],
              ["Defend lifecycle", "Explain fictional owners, thresholds, review triggers, change annotations, debt, residual risk, replacement, and retirement."],
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
              Produce a fictional dashboard charter, audience map, metric-family
              inventory, metric dictionary, dashboard wireframe, balanced-metric
              matrix, source-health layer, misleading-pattern review,
              validation matrix, privacy review, anti-gaming review, owner
              matrix, change history, metric-debt register, residual-risk
              statement, leadership brief, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Dashboards and Metrics Checklist"
          items={[
            "I can explain a fictional dashboard as a decision-support tool rather than proof of program success.",
            "I can distinguish fictional volume, timeliness, source health, alert quality, triage, escalation, case quality, coverage, workload, privacy, recovery, and residual-risk metrics.",
            "I can define fictional metric purpose, population, numerator, denominator, grain, time range, sources, threshold, limitation, owner, and review trigger.",
            "I can use median, percentiles, distributions, segments, and longest-case views when averages hide important tails.",
            "I can separate fictional raw alerts, unique conditions, grouped work items, duplicates, replay, expected alerts, and scope changes.",
            "I can make Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states visible in metric interpretation.",
            "I can balance fictional speed with quality, closure with reopening, suppression with coverage, and workload with complexity.",
            "I can identify denominator problems, stale context, scope changes, metric gaming, personal-ranking risk, and privacy concerns.",
            "I can design fictional coverage metrics around mission questions, populations, source health, and validation rather than rule count alone.",
            "I can assign fictional metric owners, thresholds, actions, review dates, change history, debt, residual risk, and retirement criteria.",
            "I can validate fictional dashboards against duplicates, blind periods, averages, denominator changes, grouping regression, recovery, and public-safety boundaries.",
            "I can create a completely fictional dashboard artifact without exposing real alerts, metrics, sources, owners, services, teams, suppliers, or internal priorities.",
          ]}
        />

        <MiniQuiz
          title="A6.8 Mini Quiz: Dashboards and Metrics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Dashboards and Metrics Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, dashboard audiences, analyst decisions, source-owner decisions, service-owner decisions, detection-owner decisions, privacy decisions, recovery decisions, risk decisions, leadership decisions, alert-volume metrics, raw-alert counts, unique-condition counts, grouped-work-item counts, expected-alert counts, duplicate counts, replay counts, timeliness metrics, event-to-collection time, collection-to-processing time, processing-to-alert time, alert-to-first-review time, owner-response time, action time, validation time, closure time, source-health metrics, freshness, completeness, schema quality, parser quality, queue health, clock health, conflict rate, blind minutes, recovery reconciliation, alert-quality metrics, usefulness, alert-contract completeness, expected-alert accuracy, false-positive rate, known false-negative count, triage-quality metrics, question quality, evidence-layer accuracy, source-health visibility, request precision, state accuracy, escalation metrics, trigger precision, delayed escalation, premature escalation, handoff completeness, acceptance, aging, de-escalation, case-quality metrics, note neutrality, evidence traceability, chronology accuracy, decision-log completeness, action-validation separation, closure quality, reopen rate, coverage metrics, identity coverage, device coverage, service coverage, destination coverage, behavior coverage, source coverage, time coverage, environment coverage, source-health coverage, test coverage, workload metrics, queue age, evidence-request burden, duplicate work, owner-response delay, rework rate, specialist demand, privacy metrics, unnecessary fields, access, sharing, retention, exceptions, review dates, recovery metrics, backlog, replay, duplicates, sessions, source health, service validation, residual-risk metrics, coverage debt, detection debt, priority debt, escalation debt, case debt, documentation debt, metric names, decision purpose, populations, numerators, denominators, grain, time ranges, update cadence, data sources, provenance, transformations, thresholds, interpretations, limitations, owners, review triggers, mission-impact panel, volume panel, source-health panel, queue panel, triage panel, escalation panel, case-quality panel, coverage panel, workload panel, privacy panel, recovery panel, residual-risk panel, average-versus-median review, percentiles, distributions, duplicate-inflation review, blind-source review, denominator review, scope-change annotations, suppression-regression review, fast-closure review, individual-ranking review, stale-criticality review, metric-owner review, privacy review, anti-gaming review, change management, metric retirement, validation cases, expected outcomes, observed outcomes, defects, corrective actions, quality gates, metric debt, owner matrix, leadership summary, reflection, and a statement that every organization, source, metric, alert, owner, date, value, decision, and outcome is invented."
          tips={[
            "Begin with fictional decisions and audiences before selecting measures.",
            "Define every population, numerator, denominator, time range, source-health rule, owner, limitation, and review trigger.",
            "Balance fictional speed, volume, quality, coverage, workload, privacy, recovery, and residual risk.",
            "Test for blind periods, duplicates, denominator changes, scope expansion, grouping regressions, premature closure, and metric gaming.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Reducing Noise and Improving Quality?"
        >
          <p className="leading-8">
            Before moving to A6.9, rate your readiness from 1 to 5 for dashboard
            purpose, metric families, populations, numerators, denominators,
            grain, time ranges, source health, distributions, coverage,
            workload, privacy, anti-gaming, governance, residual risk, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a better-looking fictional metric may represent a worse mission outcome.",
              "I can define a fictional metric so another reviewer can reproduce it.",
              "I can identify misleading averages, denominators, raw counts, and scope changes.",
              "I can make source-health and coverage limitations visible.",
              "I can balance fictional speed, quality, workload, coverage, recovery, and residual risk.",
              "I can design privacy-aware and anti-gaming dashboard controls.",
              "I can assign fictional metric ownership, thresholds, review triggers, change history, debt, and retirement.",
              "I can produce a safe fictional dashboard package without copying real screenshots, values, sources, or priorities.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional dashboard decision, one metric, its population,
            numerator, denominator, source-health limitation, owner, and one
            question you will carry into A6.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional dashboards should support bounded decisions rather than prove success or reward activity.",
            "Every fictional metric needs purpose, population, numerator, denominator, grain, time range, sources, limitations, owner, threshold, and review trigger.",
            "Raw alert volume does not show uniqueness, usefulness, coverage, source health, or why the count changed.",
            "Averages can hide severely delayed cases; medians, percentiles, distributions, segments, and oldest-case views provide stronger context.",
            "Blind or Degraded sources can make quiet dashboards look healthy even when evidence is missing.",
            "Balanced measures should pair speed with quality, suppression with coverage, closure with reopening, and workload with complexity.",
            "False-positive, closure, and quality rates require clear denominators that preserve Unknown, Source-Degraded, unreviewed, Expected, and excluded populations.",
            "Personal leaderboards, stale context, unowned metrics, and target-driven gaming can weaken privacy, fairness, collaboration, and mission outcomes.",
            "Dashboard governance includes purpose, definition, source health, ownership, interpretation, thresholds, privacy, anti-gaming, change management, and retirement.",
            "Every CyberShield dashboard artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A6
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how fictional defenders reduce alert noise and improve
            quality through root-cause analysis, source repair, context,
            grouping, deduplication, thresholds, suppression, testing, rollback,
            ownership, coverage review, and residual-risk tracking.
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