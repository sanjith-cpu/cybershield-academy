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
const modulePath = `${trackPath}/security-automation-concepts`;
const previousLesson = `${modulePath}/automation-failure-modes`;
const nextLesson = `${modulePath}/governance-for-automation`;

const objectives = [
  "Explain why automation value must be measured across speed, analyst effort, consistency, evidence quality, reliability, exception handling, safety, and business outcomes rather than raw action count alone.",
  "Design balanced metrics using baselines, targets, thresholds, trends, confidence, denominators, and review periods so automation performance can be interpreted responsibly.",
  "Evaluate automation quality using measures such as time to usable evidence, routing accuracy, reassignment rate, override rate, exception rate, stale-data rate, duplicate rate, evidence completeness, recovery time, and analyst workload.",
  "Recognize misleading metrics, vanity metrics, denominator problems, automation gaming, hidden rework, and situations where faster processing can actually reduce quality or safety.",
  "Build an Automation Value Scorecard that becomes the eighth artifact in the A17 Safe Automation Design and Governance Plan.",
];

const valueDomains = [
  {
    domain: "Speed",
    question:
      "Does automation help analysts reach usable evidence or the correct workflow state faster?",
    goodMetrics:
      "Time to usable evidence, time to first assignment, time to complete enrichment, queue age.",
    caution:
      "Faster is not better if the workflow hides missing evidence or creates more rework.",
  },
  {
    domain: "Analyst effort",
    question:
      "How much repetitive manual work is removed without removing meaningful judgment?",
    goodMetrics:
      "Manual lookup time, repeated data-entry time, number of low-value clicks, analyst minutes per ticket.",
    caution:
      "A lower number of clicks is not useful if analysts spend more time correcting bad automation.",
  },
  {
    domain: "Consistency",
    question:
      "Does the same type of valid input receive the same approved workflow treatment?",
    goodMetrics:
      "Required-field completion, routing consistency, status-transition consistency, version alignment.",
    caution:
      "Consistently applying the wrong rule is still poor automation.",
  },
  {
    domain: "Evidence quality",
    question:
      "Does the workflow preserve the context, source, freshness, confidence, and decision evidence analysts need?",
    goodMetrics:
      "Evidence completeness, source attribution rate, stale-field visibility, approval-evidence completeness.",
    caution:
      "High field count can look impressive while actual evidence quality remains weak.",
  },
  {
    domain: "Reliability",
    question:
      "Does the automation keep working predictably under normal and degraded conditions?",
    goodMetrics:
      "Success rate, dependency error rate, retry rate, duplicate rate, heartbeat availability.",
    caution:
      "A high success rate can hide silent failure when the system does not know what it failed to record.",
  },
  {
    domain: "Exception quality",
    question:
      "Does the workflow send unusual cases to the right human-owned fallback instead of guessing?",
    goodMetrics:
      "Exception rate, exception-resolution time, repeated exception categories, safe-fallback success.",
    caution:
      "A low exception rate is not automatically good if the workflow is forcing uncertain cases through normal logic.",
  },
  {
    domain: "Human judgment",
    question:
      "Does automation preserve meaningful human decisions where ambiguity, authority, or consequence requires them?",
    goodMetrics:
      "Approval quality, override rate, override reasons, recommendation acceptance, escalation quality.",
    caution:
      "High acceptance can indicate good recommendations—or rubber-stamp behavior.",
  },
  {
    domain: "Safety",
    question:
      "Does the automation remain within its approved action and permission boundary?",
    goodMetrics:
      "Boundary violations, blocked unsafe proposals, failed authorization checks, unsafe-action count.",
    caution:
      "The safest target for prohibited autonomous actions is zero, not 'low enough.'",
  },
  {
    domain: "Business usefulness",
    question:
      "Does automation help the defensive team manage real operational priorities more effectively?",
    goodMetrics:
      "Queue backlog, aged work, reassignment, escalation quality, analyst capacity, review throughput.",
    caution:
      "Throughput should not be increased by lowering review quality.",
  },
];

const baselinePrinciples = [
  {
    concept: "Baseline",
    explanation:
      "Measure how the workflow performs before or without the automation so later improvement has a reference point.",
    example:
      "Median time to usable evidence was 18 fictional minutes before enrichment automation.",
  },
  {
    concept: "Target",
    explanation:
      "Define the desired performance level based on the workflow purpose.",
    example:
      "Target median time to usable evidence: 8 fictional minutes.",
  },
  {
    concept: "Threshold",
    explanation:
      "Define a level that should trigger investigation, maintenance, or disable review.",
    example:
      "If routing accuracy falls below 90% for two review windows, open maintenance review.",
  },
  {
    concept: "Trend",
    explanation:
      "Compare change over several periods instead of reacting to one unusual measurement.",
    example:
      "Override rate rose for three consecutive weekly review windows.",
  },
  {
    concept: "Denominator",
    explanation:
      "Define what total population the metric is calculated from.",
    example:
      "Routing accuracy = correctly routed tickets divided by all automatically routed tickets.",
  },
  {
    concept: "Review window",
    explanation:
      "Use a time period that is meaningful for the workflow volume and change rate.",
    example:
      "Weekly operational review plus monthly governance review.",
  },
  {
    concept: "Confidence",
    explanation:
      "Consider whether enough observations exist to support a strong conclusion.",
    example:
      "A 100% success rate from two synthetic cases is not enough evidence for scale.",
  },
  {
    concept: "Context",
    explanation:
      "Explain what changed in the environment, volume, data, or process while the metric changed.",
    example:
      "Queue volume doubled after a new fictional detection source was added.",
  },
];

const metricDefinitions = [
  {
    metric: "Time to usable evidence",
    definition:
      "Elapsed time from intake until the analyst has the minimum trustworthy evidence needed to begin review.",
    formula:
      "Usable evidence timestamp - intake timestamp",
    interpretation:
      "Lower can be better when evidence completeness remains healthy.",
  },
  {
    metric: "Routing accuracy",
    definition:
      "Share of automatically routed tickets that reach the correct initial review queue.",
    formula:
      "Correct automatic routes / all automatic routes",
    interpretation:
      "Higher is better, but review override reasons for hidden ownership drift.",
  },
  {
    metric: "Reassignment rate",
    definition:
      "Share of automatically routed tickets that later require reassignment.",
    formula:
      "Reassigned automatic routes / all automatic routes",
    interpretation:
      "Lower is generally better when analysts retain legitimate override.",
  },
  {
    metric: "Override rate",
    definition:
      "Share of automated recommendations or actions that analysts correct or reject.",
    formula:
      "Overrides / eligible automated outputs",
    interpretation:
      "Neither high nor low is automatically good; reasons matter.",
  },
  {
    metric: "Exception rate",
    definition:
      "Share of workflow items that leave normal automation and enter a safe exception path.",
    formula:
      "Exception items / all processed items",
    interpretation:
      "Trend and category matter more than minimizing the number at all costs.",
  },
  {
    metric: "Duplicate rate",
    definition:
      "Share of logical work items that create unintended repeated records or actions.",
    formula:
      "Unintended duplicates / logical work items",
    interpretation:
      "Should remain very low; spikes can indicate retry or idempotency failure.",
  },
  {
    metric: "Evidence completeness",
    definition:
      "Share of review-ready items containing all required evidence metadata.",
    formula:
      "Complete evidence packages / review-ready items",
    interpretation:
      "High values support trust; missing evidence should block readiness where required.",
  },
  {
    metric: "Stale-data rate",
    definition:
      "Share of enrichment fields beyond their approved freshness threshold.",
    formula:
      "Stale required enrichments / required enrichment checks",
    interpretation:
      "Rising values may signal source health or maintenance problems.",
  },
  {
    metric: "Safe-fallback success",
    definition:
      "Share of eligible failure cases that move to the intended degraded or manual path.",
    formula:
      "Correct safe fallbacks / eligible failure events",
    interpretation:
      "High values show failure handling is working as designed.",
  },
  {
    metric: "Mean recovery time",
    definition:
      "Average time from detected automation degradation until the workflow returns to an approved stable state.",
    formula:
      "Total recovery duration / recovery events",
    interpretation:
      "Lower is useful when re-enable validation remains strong.",
  },
  {
    metric: "Recommendation acceptance",
    definition:
      "Share of automation recommendations analysts choose without correction.",
    formula:
      "Accepted recommendations / all recommendations",
    interpretation:
      "Useful only alongside override reasons and analyst feedback.",
  },
  {
    metric: "Queue age",
    definition:
      "How long work remains unreviewed or unresolved in a queue.",
    formula:
      "Current time - queue-entry time",
    interpretation:
      "Trend by priority and queue is more meaningful than one blended average.",
  },
];

const misleadingMetrics = [
  {
    metric: "Total automated actions",
    whyMisleading:
      "A large number can mean useful scale or unnecessary machine activity.",
    better:
      "Pair volume with quality, safety, exception, and analyst-effort measures.",
  },
  {
    metric: "Tickets closed",
    whyMisleading:
      "Closure count can rise because automation closes work too aggressively.",
    better:
      "Measure evidence completeness, reopen rate, closure review quality, and analyst confirmation.",
  },
  {
    metric: "Average handling time only",
    whyMisleading:
      "Averages can hide a long tail of stuck or complex cases.",
    better:
      "Use median, percentiles conceptually, queue age, and exception categories.",
  },
  {
    metric: "Recommendation acceptance only",
    whyMisleading:
      "High acceptance can mean good guidance or a rubber-stamp workflow.",
    better:
      "Add override reasons, analyst feedback, review time, and evidence quality.",
  },
  {
    metric: "Low exception rate",
    whyMisleading:
      "A workflow may force uncertain cases through normal logic instead of recognizing exceptions.",
    better:
      "Measure whether exceptions are correctly identified and resolved.",
  },
  {
    metric: "High success rate",
    whyMisleading:
      "The denominator may exclude silent failures or unlogged work.",
    better:
      "Use heartbeat, evidence completeness, expected-vs-observed volume, and failure reconciliation.",
  },
  {
    metric: "Alerts processed per analyst",
    whyMisleading:
      "Higher throughput may come from lower review depth rather than better automation.",
    better:
      "Pair throughput with quality, reopen, escalation, evidence, and analyst-effort indicators.",
  },
  {
    metric: "Zero overrides",
    whyMisleading:
      "It may mean perfect automation—or that analysts cannot or do not feel empowered to correct it.",
    better:
      "Confirm override availability, analyst behavior, and independent quality checks.",
  },
];

const balancedScorecardAreas = [
  {
    area: "Efficiency",
    measures:
      "Time to usable evidence, manual minutes saved, queue age, duplicate work avoided.",
    question:
      "Does the automation remove repetitive work without creating hidden rework?",
  },
  {
    area: "Quality",
    measures:
      "Routing accuracy, evidence completeness, stale-data rate, reassignment rate.",
    question:
      "Are outputs correct, attributable, current, and useful?",
  },
  {
    area: "Human effectiveness",
    measures:
      "Override rate, recommendation acceptance, analyst feedback, approval quality.",
    question:
      "Does automation support judgment instead of replacing or exhausting it?",
  },
  {
    area: "Reliability",
    measures:
      "Failure rate, dependency health, retry rate, duplicate rate, recovery time.",
    question:
      "Does the workflow remain predictable during failure and recovery?",
  },
  {
    area: "Safety",
    measures:
      "Boundary violations, blocked unsafe proposals, authorization failures, successful safe fallback.",
    question:
      "Does automation stay within approved permissions and action boundaries?",
  },
  {
    area: "Governance",
    measures:
      "Owner response time, review cadence, overdue changes, retired-version usage, evidence retention.",
    question:
      "Is the automation still actively owned, reviewed, and explainable?",
  },
];

const scorecardFields = [
  {
    field: "VAL ID",
    purpose:
      "Stable identifier for the scorecard metric.",
    example:
      "VAL-801",
  },
  {
    field: "Linked artifact",
    purpose:
      "Connects the metric to the automation or failure it measures.",
    example:
      "WFA-402 / FM-701",
  },
  {
    field: "Value domain",
    purpose:
      "Classifies the metric as Efficiency, Quality, Human Effectiveness, Reliability, Safety, or Governance.",
    example:
      "Quality",
  },
  {
    field: "Metric",
    purpose:
      "Names the measure precisely.",
    example:
      "Routing accuracy",
  },
  {
    field: "Definition",
    purpose:
      "Explains exactly what the measure means.",
    example:
      "Correct initial automatic routes divided by all automatic routes",
  },
  {
    field: "Baseline",
    purpose:
      "Shows pre-automation or earlier-period performance.",
    example:
      "82%",
  },
  {
    field: "Target",
    purpose:
      "Defines the desired performance.",
    example:
      "95%+",
  },
  {
    field: "Threshold",
    purpose:
      "Defines when investigation or maintenance is required.",
    example:
      "Below 90% for two weekly windows",
  },
  {
    field: "Review window",
    purpose:
      "Defines how often the metric is evaluated.",
    example:
      "Weekly",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional role responsible for the metric.",
    example:
      "SOC Workflow Owner",
  },
  {
    field: "Evidence source",
    purpose:
      "Defines where the synthetic measurement comes from.",
    example:
      "Ticket routing history and analyst override records",
  },
  {
    field: "Decision",
    purpose:
      "Defines what happens if the metric improves, degrades, or becomes unreliable.",
    example:
      "Continue, investigate, tune, pause, or disable",
  },
];

const northbridgeScorecard = [
  {
    id: "VAL-801",
    linked:
      "OPP-101 / ENR-301 / FM-701",
    domain:
      "Efficiency",
    metric:
      "Median time to usable evidence",
    definition:
      "Elapsed fictional minutes from alert intake to minimum reviewable evidence package.",
    baseline:
      "18 min",
    current:
      "7 min",
    target:
      "≤ 8 min",
    threshold:
      "> 12 min for two weekly windows",
    trend:
      "Improving",
    evidence:
      "Synthetic intake and evidence-ready timestamps",
    owner:
      "Security Platform Owner",
    decision:
      "Continue; monitor evidence completeness alongside speed.",
    state:
      "Healthy",
  },
  {
    id: "VAL-802",
    linked:
      "WFA-402 / FM-701",
    domain:
      "Quality",
    metric:
      "Routing accuracy",
    definition:
      "Correct initial automatic queue assignments divided by all automatic queue assignments.",
    baseline:
      "81%",
    current:
      "94%",
    target:
      "≥ 95%",
    threshold:
      "< 90% for two weekly windows",
    trend:
      "Improving",
    evidence:
      "Synthetic routing history and reassignment reasons",
    owner:
      "SOC Workflow Owner",
    decision:
      "Tune stale ownership handling before declaring target achieved.",
    state:
      "Watch",
  },
  {
    id: "VAL-803",
    linked:
      "HITL-203 / PRB-501",
    domain:
      "Human Effectiveness",
    metric:
      "Playbook recommendation acceptance",
    definition:
      "Analyst-selected recommended playbooks divided by all eligible recommendations.",
    baseline:
      "No baseline",
    current:
      "78%",
    target:
      "70–90% with healthy override reasons",
    threshold:
      "> 98% or < 50% without explanation",
    trend:
      "Stable",
    evidence:
      "Synthetic recommendation and analyst-selection records",
    owner:
      "Incident Response Process Owner",
    decision:
      "Continue; sample accepted cases to ensure the metric is not rubber-stamping.",
    state:
      "Healthy",
  },
  {
    id: "VAL-804",
    linked:
      "WFA-403 / FM-702",
    domain:
      "Reliability",
    metric:
      "Unintended duplicate rate",
    definition:
      "Unintended duplicate fictional tickets divided by logical ticket-creation requests.",
    baseline:
      "4.8%",
    current:
      "0.4%",
    target:
      "< 0.5%",
    threshold:
      "> 1.0%",
    trend:
      "Improving",
    evidence:
      "Synthetic request IDs, ticket IDs, and reconciliation records",
    owner:
      "SOC Workflow Owner",
    decision:
      "Continue idempotency control; investigate any threshold breach.",
    state:
      "Healthy",
  },
  {
    id: "VAL-805",
    linked:
      "ENR-301 / ENR-306 / FM-704",
    domain:
      "Quality",
    metric:
      "Stale required-enrichment rate",
    definition:
      "Required enrichment checks beyond freshness threshold divided by all required checks.",
    baseline:
      "6.2%",
    current:
      "2.1%",
    target:
      "< 2%",
    threshold:
      "> 5%",
    trend:
      "Improving",
    evidence:
      "Synthetic source-refresh and enrichment-state records",
    owner:
      "Security Platform Owner",
    decision:
      "Continue source-health work; target not yet consistently achieved.",
    state:
      "Watch",
  },
  {
    id: "VAL-806",
    linked:
      "FM-704 / FM-708",
    domain:
      "Reliability",
    metric:
      "Safe-fallback success",
    definition:
      "Eligible failure cases that enter the approved degraded/manual path divided by eligible failures.",
    baseline:
      "72%",
    current:
      "97%",
    target:
      "≥ 98%",
    threshold:
      "< 95%",
    trend:
      "Improving",
    evidence:
      "Synthetic failure and fallback-state records",
    owner:
      "Security Automation Engineer",
    decision:
      "Review the remaining failed fallback cases before scale.",
    state:
      "Watch",
  },
  {
    id: "VAL-807",
    linked:
      "BND-607",
    domain:
      "Safety",
    metric:
      "Unsafe autonomous action count",
    definition:
      "Number of blocked-boundary actions that actually execute.",
    baseline:
      "0",
    current:
      "0",
    target:
      "0",
    threshold:
      "> 0",
    trend:
      "Stable",
    evidence:
      "Synthetic boundary-review and blocked-action records",
    owner:
      "A17 Governance Boundary",
    decision:
      "Any nonzero result requires immediate stop and governance review.",
    state:
      "Healthy",
  },
  {
    id: "VAL-808",
    linked:
      "FM-705 / WFA-408",
    domain:
      "Quality",
    metric:
      "Review-ready evidence completeness",
    definition:
      "Review-ready fictional tickets with all required evidence metadata divided by all review-ready tickets.",
    baseline:
      "88%",
    current:
      "99%",
    target:
      "≥ 99%",
    threshold:
      "< 97%",
    trend:
      "Improving",
    evidence:
      "Synthetic ticket evidence package records",
    owner:
      "SOC Workflow Owner",
    decision:
      "Maintain; block readiness when required evidence is missing.",
    state:
      "Healthy",
  },
  {
    id: "VAL-809",
    linked:
      "FM-703 / WFA-407",
    domain:
      "Reliability",
    metric:
      "Routing-loop rate",
    definition:
      "Tickets that hit the defined loop threshold divided by automatically routed tickets.",
    baseline:
      "1.8%",
    current:
      "0.2%",
    target:
      "< 0.3%",
    threshold:
      "> 0.5%",
    trend:
      "Improving",
    evidence:
      "Synthetic queue-hop history",
    owner:
      "Security Platform Owner",
    decision:
      "Continue loop detection; review any repeated queue pair.",
    state:
      "Healthy",
  },
  {
    id: "VAL-810",
    linked:
      "HITL-204 / WFA-406 / FM-707",
    domain:
      "Governance",
    metric:
      "Explicit approval completeness",
    definition:
      "Authority-sensitive decisions with explicit reviewer, decision, rationale, and timestamp divided by all such decisions.",
    baseline:
      "91%",
    current:
      "100%",
    target:
      "100%",
    threshold:
      "< 100%",
    trend:
      "Improving",
    evidence:
      "Synthetic approval records",
    owner:
      "Incident Response Lead",
    decision:
      "Any missing approval record blocks the workflow state.",
    state:
      "Healthy",
  },
];

const dashboardMetrics = [
  {
    label: "Scorecard metrics",
    value: "10",
    note: "Efficiency, quality, human effectiveness, reliability, safety, and governance",
  },
  {
    label: "Healthy",
    value: "7",
    note: "Most measures meet or nearly meet defined targets",
  },
  {
    label: "Watch",
    value: "3",
    note: "Routing, stale-data, and fallback metrics need continued review",
  },
  {
    label: "Unsafe actions executed",
    value: "0",
    note: "The safety boundary target remains zero",
  },
];

const logs = [
  "[08:10] VAL-801 metric=TIME_TO_USABLE_EVIDENCE baseline=18m current=7m target=8m state=HEALTHY",
  "[08:32] VAL-802 metric=ROUTING_ACCURACY baseline=81% current=94% target=95% state=WATCH",
  "[08:54] VAL-803 metric=RECOMMENDATION_ACCEPTANCE current=78% override_review=ENABLED state=HEALTHY",
  "[09:16] VAL-804 metric=DUPLICATE_RATE baseline=4.8% current=0.4% target=<0.5% state=HEALTHY",
  "[09:38] VAL-805 metric=STALE_REQUIRED_ENRICHMENT current=2.1% target=<2% state=WATCH",
  "[10:00] VAL-806 metric=SAFE_FALLBACK_SUCCESS current=97% target=98% state=WATCH",
  "[10:22] VAL-807 metric=UNSAFE_ACTION_EXECUTED current=0 target=0 state=HEALTHY",
  "[10:44] VAL-808 metric=EVIDENCE_COMPLETENESS current=99% target=99% state=HEALTHY",
  "[11:06] VAL-809 metric=ROUTING_LOOP_RATE current=0.2% target=<0.3% state=HEALTHY",
  "[11:28] VAL-810 metric=APPROVAL_COMPLETENESS current=100% target=100% state=HEALTHY",
];

const decisionPatterns = [
  {
    pattern: "Continue",
    when:
      "The metric meets target and related safety/quality indicators remain healthy.",
    example:
      "Time to usable evidence improved while evidence completeness stayed at 99%.",
  },
  {
    pattern: "Tune",
    when:
      "The metric is useful but slightly below target and failure impact remains contained.",
    example:
      "Routing accuracy is 94% against a 95% target with clear stale-owner override reasons.",
  },
  {
    pattern: "Investigate",
    when:
      "A trend worsens, confidence is weak, or metrics disagree.",
    example:
      "Recommendation acceptance rises to 99% while analyst review time collapses.",
  },
  {
    pattern: "Pause expansion",
    when:
      "The automation is stable enough to continue existing use but not safe to scale.",
    example:
      "Safe-fallback success remains below target during repeated dependency failures.",
  },
  {
    pattern: "Disable",
    when:
      "Boundary, authorization, severe evidence, or repeated safety thresholds are breached.",
    example:
      "Any prohibited autonomous action actually executes.",
  },
  {
    pattern: "Retire",
    when:
      "The automation no longer creates meaningful value or another workflow replaces it.",
    example:
      "A manual task disappears after the underlying platform is redesigned.",
  },
];

const antiPatterns = [
  {
    title: "Celebrate raw action count",
    problem:
      "The team reports millions of automated actions without showing whether those actions helped anyone.",
    better:
      "Measure analyst effort, correctness, evidence, safety, reliability, and business usefulness.",
  },
  {
    title: "Optimize speed alone",
    problem:
      "The workflow gets faster by skipping context or reducing review.",
    better:
      "Pair speed with evidence completeness, override, exception, reopen, and safety metrics.",
  },
  {
    title: "Hide the denominator",
    problem:
      "A 95% number is reported without explaining 95% of what.",
    better:
      "Define numerator, denominator, scope, and review window.",
  },
  {
    title: "Use one good week as proof",
    problem:
      "A small or unusual sample is treated as long-term evidence.",
    better:
      "Use trends, context, and enough observations to support the conclusion.",
  },
  {
    title: "Punish exceptions",
    problem:
      "Teams try to drive exception rate to zero even when exceptions are the safe path for ambiguous cases.",
    better:
      "Measure whether exceptions are correct, useful, and resolved well.",
  },
  {
    title: "Reward zero overrides",
    problem:
      "Analysts become reluctant to correct automation because override looks like failure.",
    better:
      "Use override as quality feedback and investigate the reasons.",
  },
  {
    title: "Ignore hidden rework",
    problem:
      "Automation appears to save time, but analysts spend extra minutes fixing routing, duplicates, or missing evidence.",
    better:
      "Measure total analyst effort including correction and reconciliation.",
  },
  {
    title: "Move the target after failure",
    problem:
      "A threshold is changed only because the automation missed it.",
    better:
      "Change targets through documented review with evidence and rationale.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the faster enrichment automation only if evidence completeness, stale-data rate, override quality, and analyst feedback remain healthy.",
    outcome:
      "Best. Speed is useful only when quality and safety remain intact.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Declare success because median handling time dropped.",
    outcome:
      "Caution. One efficiency metric cannot prove overall value.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove all human review to make the time metric even lower.",
    outcome:
      "Risky. That optimizes the measure by weakening the workflow itself.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Investigate why recommendation acceptance is 99%, sample accepted cases, review override accessibility, and compare analyst review time before calling it a success.",
    outcome:
      "Best. Extremely high acceptance can reflect excellent guidance or weak human review.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Set 100% acceptance as the new target.",
    outcome:
      "Risky. That can pressure analysts to rubber-stamp recommendations.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Disable analyst override because almost nobody uses it.",
    outcome:
      "Risky. Low observed use does not mean correction capability is unnecessary.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why is total automated action count a weak value metric?",
    choices: [
      "It shows activity but not whether the automation improved quality, analyst effort, reliability, or safety.",
      "Automation should never be measured.",
      "Action count is always zero.",
      "It is only useful for financial systems.",
    ],
    answer: 0,
    explanation:
      "Volume without outcome and quality context is a vanity metric.",
  },
  {
    question:
      "What is a baseline?",
    choices: [
      "A reference measurement from before the automation or from an earlier approved period.",
      "The maximum possible metric value.",
      "A hidden threshold.",
      "A replacement for a target.",
    ],
    answer: 0,
    explanation:
      "Baselines allow teams to compare later performance with a meaningful reference.",
  },
  {
    question:
      "Why does the denominator matter?",
    choices: [
      "It defines what population the percentage actually represents.",
      "It makes every metric larger.",
      "It eliminates the need for review windows.",
      "It is optional for percentages.",
    ],
    answer: 0,
    explanation:
      "Percentages are difficult to interpret without knowing what total set they are calculated from.",
  },
  {
    question:
      "What does a high override rate mean?",
    choices: [
      "It requires investigation; the automation may be wrong, the context may be changing, or override may be doing exactly what it should.",
      "Automation definitely failed.",
      "Analysts should lose override access.",
      "The automation should automatically ignore analysts.",
    ],
    answer: 0,
    explanation:
      "Override is a contextual quality signal, not a simple good/bad number.",
  },
  {
    question:
      "What is strongest when a speed metric improves but evidence completeness falls?",
    choices: [
      "Do not call the automation successful until the quality loss is understood and corrected.",
      "Keep optimizing speed.",
      "Remove the completeness metric.",
      "Hide missing evidence.",
    ],
    answer: 0,
    explanation:
      "Balanced measurement prevents optimization of one metric at the expense of another.",
  },
  {
    question:
      "What should the target be for prohibited autonomous actions executed?",
    choices: [
      "Zero.",
      "Less than 5%.",
      "Less than 10%.",
      "Whatever the baseline was.",
    ],
    answer: 0,
    explanation:
      "Unsafe or prohibited autonomous actions are boundary violations, not acceptable error rates.",
  },
  {
    question:
      "What is the purpose of the Automation Value Scorecard?",
    choices: [
      "Combine balanced measures, baselines, targets, thresholds, trends, evidence sources, owners, and decisions into one reviewable view.",
      "Prove automation is always worth keeping.",
      "Maximize ticket volume.",
      "Replace governance review.",
    ],
    answer: 0,
    explanation:
      "The scorecard helps teams decide whether automation should continue, improve, pause, disable, or retire.",
  },
];

const checklistItems = [
  "Automation value is measured across multiple domains.",
  "Raw action count is not treated as the main success metric.",
  "Every percentage has a clear denominator.",
  "Baselines are documented.",
  "Targets are documented.",
  "Thresholds are documented.",
  "Review windows are defined.",
  "Metric owners are assigned.",
  "Evidence sources are defined.",
  "Speed is paired with quality.",
  "Analyst effort includes rework.",
  "Override reasons are reviewed.",
  "Exception quality is measured.",
  "Routing accuracy is measured.",
  "Evidence completeness is measured.",
  "Stale-data rate is measured.",
  "Failure and recovery metrics are included.",
  "Safety boundary metrics are included.",
  "Any prohibited autonomous execution target is zero.",
  "Metrics can trigger continue, tune, investigate, pause, disable, or retire decisions.",
];

const takeaways = [
  "Automation value is multidimensional: speed, effort, quality, reliability, human effectiveness, safety, and governance all matter.",
  "A baseline shows where the workflow started; a target shows where it should go; a threshold shows when intervention is required.",
  "Every percentage needs a clear numerator, denominator, scope, and review window.",
  "Faster processing is not valuable if evidence quality or analyst judgment degrades.",
  "Override and exception rates require interpretation rather than simple minimization.",
  "Hidden rework can erase apparent time savings.",
  "Reliability metrics should include duplicates, retries, stale data, fallback success, and recovery time.",
  "Safety metrics are not ordinary optimization targets; prohibited autonomous actions should remain at zero.",
  "Balanced scorecards support continue, tune, investigate, pause, disable, and retire decisions.",
  "The Automation Value Scorecard prepares you for A17.9 Governance for Automation.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
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
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A17
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

export default function MeasuringAutomationValuePage() {
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
              A17.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Measuring Automation Value
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Automation is valuable when it improves defensive work without
            weakening evidence, judgment, reliability, or safety. This lesson
            builds a balanced measurement model that helps teams distinguish
            real improvement from impressive-looking activity.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All metrics, tickets, alerts, dashboards, workflows, and scorecard
            records in this lesson are fictional or synthetic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A17: Security Automation Concepts"
          lessonTitle="Measuring Automation Value"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.8 Entry Readiness"
          items={[
            "I can identify automation failure modes and health signals.",
            "I understand why speed or action count alone cannot prove value.",
            "I can distinguish normal exceptions from unsafe automation failure.",
            "I will use only fictional or synthetic measurement data.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Faster Workflow Can Still Be a Worse Workflow"
        >
          <p className="leading-8">
            Imagine a fictional automation that reduces average ticket handling
            time by 40%. That sounds successful—until analysts discover that
            evidence completeness fell, reassignment increased, and more cases
            had to be reopened.
          </p>

          <p className="mt-4 leading-8">
            Measurement should protect teams from that kind of false success.
            The right question is not “Did the number go up or down?” The right
            question is “Did the automation improve the intended outcome without
            degrading another important part of the system?”
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good metrics help teams make decisions. Bad metrics help teams congratulate themselves.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Value Domains"
          title="Nine Ways to Ask Whether Automation Is Helping"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {valueDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Useful measures: {item.goodMetrics}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Measurement Foundations"
          title="Baseline, Target, Threshold, Trend, Denominator, Window, Confidence, Context"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {baselinePrinciples.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.concept}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Metric Definitions"
          title="Twelve Practical Measures for Security Automation"
        >
          <div className="grid gap-5">
            {metricDefinitions.map((item) => (
              <article
                key={item.metric}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.metric}
                </h3>
                <p className="mt-2 leading-7 text-purple-100">
                  {item.definition}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Conceptual formula
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.formula}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Interpretation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.interpretation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Balanced Scorecard"
          title="Six Areas That Keep One Metric From Taking Over"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {balancedScorecardAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.area}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Measures: {item.measures}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Ask: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Metric Traps"
          title="Eight Numbers That Can Look Better Than They Really Are"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {misleadingMetrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.metric}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Why misleading: {item.whyMisleading}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better measurement: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Metric Interpretation"
          title="One Number Rarely Tells the Whole Story"
        >
          <p className="leading-8">
            Metrics should be read together. For example, faster evidence
            collection is encouraging, but only when evidence completeness
            remains high. Lower exception rates may look efficient, but not if
            analysts report that ambiguous cases are being forced through the
            normal path.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Speed improves + evidence completeness stable = likely real efficiency gain.",
              "Speed improves + evidence completeness drops = investigate hidden quality loss.",
              "Override rises + routing accuracy drops = likely rule or ownership drift.",
              "Override rises + analyst feedback positive = automation may be surfacing edge cases correctly.",
              "Exception rate drops + unresolved cases rise = exceptions may be getting suppressed.",
              "Recommendation acceptance rises + review time collapses = check for rubber-stamp behavior.",
              "Failure rate stable + heartbeat disappears = success metrics may be incomplete.",
              "Throughput rises + reopen rate rises = automation may be moving work too quickly.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Scorecard Anatomy"
          title="What a Reviewable Automation Value Metric Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {scorecardFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Scorecard"
          title="Ten Northbridge Automation Value Metrics"
        >
          <div className="grid gap-5">
            {northbridgeScorecard.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.domain}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.metric}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-purple-200">
                  Linked evidence: {item.linked}
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.definition}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Baseline", item.baseline],
                    ["Current", item.current],
                    ["Target", item.target],
                    ["Threshold", item.threshold],
                    ["Trend", item.trend],
                    ["Evidence source", item.evidence],
                    ["Owner", item.owner],
                    ["Decision", item.decision],
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
        </Section>

        <FakeDashboardCard
          title="Northbridge Automation Value Dashboard"
          subtitle="Fictional efficiency, quality, reliability, human-effectiveness, safety, and governance summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Routing Accuracy Improved but Still Missed the Approved Target"
          severity="Medium"
          time="10:22"
          source="Fictional Automation Value Monitor"
          details="VAL-802 improved from an 81% baseline to 94%, but the approved target is at least 95%. Override reasons show that stale ownership remains the main source of incorrect routing."
          recommendation="Keep the workflow active, continue source-quality improvements, and avoid declaring the routing objective complete until the target is consistently met."
        />

        <FakeLogPanel
          title="Fictional Automation Value Scorecard Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Faster but Lower Quality"
          question="A fictional enrichment workflow becomes 35% faster, but evidence completeness falls from 99% to 91%. What is the strongest conclusion?"
          evidence={[
            "Median enrichment time improved materially.",
            "Required evidence completeness dropped by eight percentage points.",
            "Analysts report more manual lookup after automation finishes.",
            "The automation still processes the same volume.",
            "No safety boundary was breached.",
          ]}
          options={[
            "Do not declare success; investigate the quality loss and hidden rework before keeping the optimization.",
            "Declare success because speed improved.",
            "Remove the evidence-completeness metric.",
            "Reduce human review to make the workflow even faster.",
          ]}
          bestAnswer={0}
          explanation="Balanced measurement prevents one improved metric from hiding a worse overall outcome."
        />

        <Section
          eyebrow="Metric-to-Decision"
          title="Six Decisions a Scorecard Can Support"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Use when: {item.when}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Measurement Mistakes"
          title="Eight Ways Teams Accidentally Reward Bad Automation"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Faster Enrichment"
          scenario="A fictional enrichment workflow becomes much faster after optimization. The team must decide whether speed improvement alone proves the automation is more valuable."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — 99% Recommendation Acceptance"
          scenario="A fictional playbook recommendation system reaches 99% analyst acceptance. Reviewers are considering making 100% acceptance the target."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Automation Value Scorecard"
        >
          <p className="leading-8">
            Build a balanced fictional scorecard that measures whether the A17
            automations improve efficiency, quality, analyst effectiveness,
            reliability, safety, and governance.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least forty fictional VAL records.",
              "Give every record a stable VAL ID.",
              "Link each metric to relevant OPP, HITL, ENR, WFA, PRB, BND, and FM records.",
              "Classify the value domain.",
              "Name the metric precisely.",
              "Define the numerator where relevant.",
              "Define the denominator where relevant.",
              "Define the baseline.",
              "Define the current value.",
              "Define the target.",
              "Define the investigation threshold.",
              "Define the disable threshold where relevant.",
              "Define the review window.",
              "Define the evidence source.",
              "Assign a metric owner.",
              "Record the trend.",
              "Record confidence in the measurement.",
              "Record important context.",
              "Define a Continue decision.",
              "Define a Tune decision.",
              "Define an Investigate decision.",
              "Define a Pause Expansion decision.",
              "Define a Disable decision where relevant.",
              "Define a Retire decision where relevant.",
              "Include at least eight Efficiency metrics.",
              "Include at least eight Quality metrics.",
              "Include at least six Human Effectiveness metrics.",
              "Include at least eight Reliability metrics.",
              "Include at least five Safety metrics.",
              "Include at least five Governance metrics.",
              "Include time-to-usable-evidence.",
              "Include routing accuracy.",
              "Include reassignment rate.",
              "Include override rate.",
              "Include exception rate.",
              "Include duplicate rate.",
              "Include evidence completeness.",
              "Include stale-data rate.",
              "Include safe-fallback success.",
              "Include recovery time.",
              "Include queue-age metrics.",
              "Include approval completeness.",
              "Include at least five examples where a good metric worsens while another improves.",
              "Include at least five vanity metrics that are rejected or paired with stronger measures.",
              "Include at least three metrics whose acceptable target is zero.",
              "Include at least three examples where a metric triggers pause or disable review.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Use synthetic metrics and fictional workflow data only. Do not
              collect private real-world performance data, access real security
              platforms, or optimize metrics in ways that encourage unsafe
              behavior. The goal is evidence-based defensive measurement.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Extremely High Recommendation Acceptance"
          question="A fictional recommendation system reaches 99% acceptance. What is the strongest next step?"
          evidence={[
            "The acceptance rate increased from 76% to 99%.",
            "Analyst review time fell sharply.",
            "Override capability still exists.",
            "No independent quality sample has been reviewed yet.",
            "The recommendation model changed recently.",
          ]}
          options={[
            "Investigate accepted cases, analyst review behavior, and override quality before treating the 99% rate as success.",
            "Raise the target to 100%.",
            "Disable override because it is rarely used.",
            "Use acceptance rate as the only quality metric.",
          ]}
          bestAnswer={0}
          explanation="Very high acceptance can indicate excellent recommendations or weakened human review, so supporting evidence matters."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Automation Measurement Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide measurement standard that
            defines what teams must measure before automation can expand, remain
            in service, or be retired.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Metric purpose",
              "Value domain",
              "Baseline",
              "Target",
              "Threshold",
              "Numerator",
              "Denominator",
              "Review window",
              "Trend",
              "Confidence",
              "Context",
              "Evidence source",
              "Metric ownership",
              "Efficiency measures",
              "Quality measures",
              "Human-effectiveness measures",
              "Reliability measures",
              "Safety measures",
              "Governance measures",
              "Decision rules",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            The standard should prevent teams from declaring victory based on a
            single attractive number.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.8 Mini Quiz: Measuring Automation Value"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Automation Value Scorecard"
          prompt="Create the eighth artifact for your A17 Safe Automation Design and Governance Plan: a fictional Automation Value Scorecard with at least forty metrics. Include VAL ID, linked OPP/HITL/ENR/WFA/PRB/BND/FM IDs, value domain, metric, definition, numerator, denominator, baseline, current value, target, threshold, review window, evidence source, owner, trend, confidence, context, and decision rule. Use balanced Efficiency, Quality, Human Effectiveness, Reliability, Safety, and Governance measures."
          tips={[
            "Avoid raw action count as the main success measure.",
            "Pair speed with quality and safety.",
            "Define denominators clearly.",
            "Interpret override and exception metrics in context.",
            "Use zero-tolerance targets for prohibited autonomous execution.",
            "Use synthetic measurement data only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.9?"
        >
          <p className="leading-8">
            A17.9 focuses on Governance for Automation. Before continuing, make
            sure you can explain which metrics should be owned, reviewed,
            escalated, and tied to decisions about continuing, tuning, pausing,
            disabling, or retiring an automation.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why automation value must be balanced across multiple domains.",
              "I can define baselines, targets, thresholds, trends, denominators, and review windows.",
              "I can identify vanity metrics and hidden rework.",
              "I can interpret override, exception, reliability, and safety metrics in context.",
              "I can connect scorecard results to operational and governance decisions.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Automation Value Scorecard Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Define every metric",
                detail:
                  "A reviewer should know exactly what is being counted and why.",
              },
              {
                title: "Show the baseline",
                detail:
                  "Without a reference point, improvement claims are difficult to defend.",
              },
              {
                title: "Use thresholds",
                detail:
                  "Metrics should trigger action, not merely appear on a dashboard.",
              },
              {
                title: "Balance domains",
                detail:
                  "Efficiency should not overpower quality, reliability, human judgment, safety, or governance.",
              },
              {
                title: "Show denominators",
                detail:
                  "Percentages need a clear population and review window.",
              },
              {
                title: "Show confidence",
                detail:
                  "Small samples and changing environments should reduce certainty.",
              },
              {
                title: "Connect metrics to decisions",
                detail:
                  "A professional scorecard should support continue, tune, investigate, pause, disable, or retire decisions.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.9 will assign governance owners, approval authority, review cadence, and change control to the automation portfolio.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A17.8 measurement remains fictional, defensive, and evidence-based
          </h2>
          <p className="mt-3 leading-7">
            Use synthetic metrics only. Do not access real security systems,
            collect private employee performance data, or optimize metrics in
            ways that reward unsafe behavior. The goal is to measure whether
            defensive automation improves work while preserving evidence,
            judgment, reliability, and safety.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.8 Measuring Automation Value Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for baselines, targets, thresholds,
            balanced scorecards, analyst effort, routing accuracy, overrides,
            exceptions, reliability, evidence completeness, safe fallback,
            recovery, safety metrics, and metric-to-decision logic. Next, A17.9
            focuses on Governance for Automation.
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