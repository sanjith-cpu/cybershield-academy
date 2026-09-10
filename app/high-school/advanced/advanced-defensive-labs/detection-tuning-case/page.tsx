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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = `${modulePath}/incident-response-tabletop-case`;
const nextLesson = `${modulePath}/risk-register-case`;

const objectives = [
  "Evaluate a fictional detection using alert volume, true-positive usefulness, false-positive patterns, analyst effort, context quality, evidence completeness, and business relevance rather than raw alert count.",
  "Distinguish safe detection tuning from unsafe blind suppression by preserving the defensive purpose, important coverage, review evidence, rollback criteria, and post-change monitoring.",
  "Identify whether noise is caused by rule logic, missing context, stale ownership, duplicate events, maintenance activity, workflow design, or changing business behavior before changing the detection.",
  "Design a bounded tuning recommendation with baseline metrics, expected outcome, validation criteria, exception handling, monitoring window, owner, and rollback trigger.",
  "Build a Detection Tuning Recommendation that explains what should change, what should not change, what evidence supports the decision, and how defensive value will be measured after tuning.",
];

const tuningPrinciples = [
  {
    principle: "Preserve the detection purpose",
    meaning:
      "A tuning change should still support the original defensive question the detection was designed to answer.",
    review:
      "Before changing anything, state the detection purpose in one sentence and identify the evidence it is supposed to surface.",
  },
  {
    principle: "Tune the cause of noise",
    meaning:
      "High alert volume can come from several causes, and only some require changing the rule itself.",
    review:
      "Check context, duplicates, maintenance, ownership, workflow, event population, and source quality before rewriting the detection concept.",
  },
  {
    principle: "Measure useful signal",
    meaning:
      "A lower alert count is not automatically better.",
    review:
      "Track whether analysts receive clearer, more actionable, better-supported alerts after the change.",
  },
  {
    principle: "Keep uncertainty visible",
    meaning:
      "Tuning should not hide events simply because they are inconvenient or hard to explain.",
    review:
      "Use review states, context flags, or bounded exclusions only when evidence supports them.",
  },
  {
    principle: "Use reversible change",
    meaning:
      "A tuning decision should have a clear rollback path if quality drops.",
    review:
      "Define the condition that would trigger rollback before the change is approved.",
  },
  {
    principle: "Validate after change",
    meaning:
      "A tuning recommendation is not complete until post-change behavior is reviewed.",
    review:
      "Use a defined monitoring window and compare the same quality metrics used in the baseline.",
  },
  {
    principle: "Document business context",
    meaning:
      "Normal changes in business activity can alter alert patterns.",
    review:
      "Maintenance windows, seasonal activity, new applications, and service migrations can change what 'normal' looks like.",
  },
  {
    principle: "Keep human review",
    meaning:
      "Ambiguous changes should remain reviewable instead of being silently discarded.",
    review:
      "If evidence quality is uncertain, route for analyst review rather than suppressing the signal completely.",
  },
];

const noiseSources = [
  {
    source: "Duplicate events",
    signal:
      "Several alerts describe the same underlying fictional event or repeated telemetry.",
    risk:
      "Analysts spend time reviewing copies instead of distinct security questions.",
    safeResponse:
      "Group or deduplicate while preserving the original evidence and allowing review of the grouped records.",
  },
  {
    source: "Known maintenance",
    signal:
      "Alert spikes align with approved fictional maintenance or deployment windows.",
    risk:
      "Expected operational activity may appear suspicious without context.",
    safeResponse:
      "Add maintenance context or review-state labeling rather than permanently suppressing all similar activity.",
  },
  {
    source: "Stale ownership",
    signal:
      "Alerts route to the wrong team because the service owner record is outdated.",
    risk:
      "Triage appears slow even though the detection itself may be useful.",
    safeResponse:
      "Fix ownership enrichment or workflow routing before changing detection logic.",
  },
  {
    source: "Missing asset context",
    signal:
      "The same condition means different things for test, development, and production assets.",
    risk:
      "Severity and analyst effort become inconsistent.",
    safeResponse:
      "Add current asset criticality and environment context.",
  },
  {
    source: "Changing business activity",
    signal:
      "A new approved workflow increases event volume.",
    risk:
      "Historical thresholds may no longer reflect the current business process.",
    safeResponse:
      "Re-baseline carefully using current legitimate activity while preserving the defensive intent.",
  },
  {
    source: "Weak rule assumption",
    signal:
      "The detection relies on a condition that no longer separates interesting from routine behavior well.",
    risk:
      "Noise remains high even with good context and routing.",
    safeResponse:
      "Refine the conceptual detection criteria using evidence-backed distinctions and validation data.",
  },
  {
    source: "Incomplete evidence",
    signal:
      "Alerts trigger before necessary supporting context arrives.",
    risk:
      "Analysts see low-confidence alerts that later become understandable.",
    safeResponse:
      "Improve evidence timing, enrichment, or workflow state rather than suppressing early uncertainty.",
  },
  {
    source: "Alert fan-out",
    signal:
      "One underlying condition creates several downstream alert types.",
    risk:
      "The queue overstates the number of distinct issues.",
    safeResponse:
      "Correlate related alerts into a case while preserving each original source record.",
  },
];

const qualityMetrics = [
  {
    metric: "Alert volume",
    question:
      "How many alerts are created in the review window?",
    caution:
      "Useful as context, but volume alone does not prove quality.",
  },
  {
    metric: "Distinct-case rate",
    question:
      "How many alerts represent genuinely separate reviewable cases?",
    caution:
      "Helps reveal duplicate or fan-out problems.",
  },
  {
    metric: "Evidence completeness",
    question:
      "Do alerts contain the context analysts need to understand the condition?",
    caution:
      "Lower volume with worse evidence can still be a bad tuning result.",
  },
  {
    metric: "Analyst rework",
    question:
      "How often do analysts need to search for missing ownership, asset, or business context?",
    caution:
      "Rework can hide behind apparently fast closure times.",
  },
  {
    metric: "Reassignment rate",
    question:
      "How often is the alert or ticket sent to the wrong owner first?",
    caution:
      "Routing problems should not automatically be blamed on detection logic.",
  },
  {
    metric: "Duplicate rate",
    question:
      "How many alerts are copies or near-copies of the same review need?",
    caution:
      "Deduplication can reduce workload without reducing defensive visibility.",
  },
  {
    metric: "Context-valid closure rate",
    question:
      "How often can analysts confidently close alerts because evidence supports a benign explanation?",
    caution:
      "Closure should be evidence-based, not optimized for speed.",
  },
  {
    metric: "Escalation quality",
    question:
      "Do escalated alerts contain enough evidence for the next reviewer to act?",
    caution:
      "More escalations are not automatically better or worse.",
  },
  {
    metric: "Override / reopen rate",
    question:
      "How often do analysts reverse an automated grouping or closure recommendation?",
    caution:
      "Frequent overrides may indicate the tuning model is too aggressive.",
  },
  {
    metric: "Post-change missed-context signal",
    question:
      "Do analysts report that important context or cases are no longer surfacing?",
    caution:
      "This is a critical warning that tuning may have reduced useful coverage.",
  },
];

const northbridgeCase = [
  {
    id: "DET-1801",
    area: "Baseline",
    observation:
      "Synthetic detection DET-NB-7 created 420 alerts during the prior 14-day review window.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Volume is high but does not yet explain whether the detection is poor.",
  },
  {
    id: "DET-1802",
    area: "Distinct cases",
    observation:
      "The 420 alerts mapped to 168 distinct fictional review cases.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Alert count overstates distinct analyst work because of duplication and fan-out.",
  },
  {
    id: "DET-1803",
    area: "Duplicates",
    observation:
      "126 alerts were confirmed duplicates of an already-open case.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Strong evidence for grouping or deduplication improvement.",
  },
  {
    id: "DET-1804",
    area: "Maintenance",
    observation:
      "74 alerts occurred during approved fictional maintenance windows.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Maintenance context may improve interpretation, but not every maintenance-window alert should be discarded.",
  },
  {
    id: "DET-1805",
    area: "Ownership",
    observation:
      "61 alerts were first routed to a stale service owner before analyst correction.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "This is primarily a workflow/context problem, not necessarily detection logic.",
  },
  {
    id: "DET-1806",
    area: "Evidence completeness",
    observation:
      "Only 57% of alerts contained current asset criticality at creation time.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Missing context may make otherwise valid alerts harder to prioritize.",
  },
  {
    id: "DET-1807",
    area: "Analyst feedback",
    observation:
      "Analysts rated 63% of DET-NB-7 alerts as useful once ownership and maintenance context were added.",
    freshness:
      "Current",
    confidence:
      "Moderate to High",
    note:
      "Suggests the underlying signal has value despite workflow noise.",
  },
  {
    id: "DET-1808",
    area: "Rule assumption",
    observation:
      "The detection treats all matching events equally even though test-environment assets create substantially more routine matches.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Environment context may support better prioritization or bounded tuning.",
  },
  {
    id: "DET-1809",
    area: "Business change",
    observation:
      "A new approved batch workflow started six weeks ago and increased matching event volume by 28%.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Historical baseline should be updated with legitimate current behavior.",
  },
  {
    id: "DET-1810",
    area: "Escalation",
    observation:
      "High-confidence escalations from DET-NB-7 were accepted by the next review tier 81% of the time.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "The detection still produces meaningful signal.",
  },
  {
    id: "DET-1811",
    area: "Reopen",
    observation:
      "Seven cases closed as maintenance-related were later reopened because the maintenance window did not explain all supporting evidence.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Warns against auto-closing based on maintenance context alone.",
  },
  {
    id: "DET-1812",
    area: "Context timing",
    observation:
      "Asset-owner enrichment arrives a median of four minutes after alert creation.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Enrichment timing contributes to early triage friction.",
  },
  {
    id: "DET-1813",
    area: "Environment",
    observation:
      "Test-environment alerts have a much higher benign-review rate than production alerts.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Environment can be a useful review dimension if the distinction remains transparent.",
  },
  {
    id: "DET-1814",
    area: "Coverage",
    observation:
      "The case package contains no evidence that production high-priority cases should be excluded.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Any tuning should preserve production visibility.",
  },
  {
    id: "DET-1815",
    area: "Workflow",
    observation:
      "Duplicate grouping is currently manual and occurs after ticket creation.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Moving safe grouping earlier could reduce ticket noise without suppressing evidence.",
  },
  {
    id: "DET-1816",
    area: "Monitoring",
    observation:
      "The team does not currently track reopen rate as a formal tuning metric.",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "A useful post-change quality metric is missing.",
  },
];

const findings = [
  {
    id: "TUNE-1801",
    title: "Duplicate fan-out is a major workload driver",
    evidence:
      "DET-1802, DET-1803, DET-1815",
    conclusion:
      "A significant share of alert volume represents repeated work rather than distinct cases.",
    recommendation:
      "Group duplicate alerts earlier while preserving original evidence and analyst override.",
    expected:
      "Lower ticket duplication with no reduction in distinct-case visibility.",
    risk:
      "Over-grouping unrelated alerts.",
    validation:
      "Monitor distinct-case count, override rate, and reopened grouped cases.",
    priority:
      "P0",
  },
  {
    id: "TUNE-1802",
    title: "Maintenance context should enrich, not auto-close",
    evidence:
      "DET-1804, DET-1811",
    conclusion:
      "Maintenance explains some alert context but is not reliable enough for automatic closure.",
    recommendation:
      "Attach maintenance status and use it as analyst context while preserving review.",
    expected:
      "Faster benign interpretation without hiding unmatched evidence.",
    risk:
      "Analysts could over-trust the maintenance label.",
    validation:
      "Track reopen rate and sample maintenance-labeled cases.",
    priority:
      "P0",
  },
  {
    id: "TUNE-1803",
    title: "Stale ownership is inflating triage friction",
    evidence:
      "DET-1805, DET-1812",
    conclusion:
      "Many early routing problems are caused by missing or stale context rather than poor detection logic.",
    recommendation:
      "Improve owner enrichment freshness and attach current owner before ticket routing.",
    expected:
      "Lower reassignment and analyst rework.",
    risk:
      "Incorrect enrichment could route cases incorrectly.",
    validation:
      "Measure reassignment rate and owner-correction rate.",
    priority:
      "P0",
  },
  {
    id: "TUNE-1804",
    title: "Asset criticality is missing too often",
    evidence:
      "DET-1806",
    conclusion:
      "Analysts lack an important prioritization signal in nearly half of alerts.",
    recommendation:
      "Make current asset criticality a required enrichment field when available, with explicit Missing state when unavailable.",
    expected:
      "More consistent prioritization and clearer escalation decisions.",
    risk:
      "Stale criticality could create false confidence.",
    validation:
      "Track evidence completeness and stale-context rate.",
    priority:
      "P1",
  },
  {
    id: "TUNE-1805",
    title: "Test-environment behavior should be treated differently but not hidden",
    evidence:
      "DET-1808, DET-1813, DET-1814",
    conclusion:
      "Test assets generate more routine matches, but production coverage remains important.",
    recommendation:
      "Use environment context to adjust review priority or grouping while preserving visible records.",
    expected:
      "Less queue pressure from lower-risk test activity without suppressing production signal.",
    risk:
      "Environment labels could be stale or misapplied.",
    validation:
      "Sample test and production alerts and track override rate.",
    priority:
      "P1",
  },
  {
    id: "TUNE-1806",
    title: "Historical baseline no longer reflects current business activity",
    evidence:
      "DET-1809",
    conclusion:
      "A legitimate new batch workflow changed the normal event population.",
    recommendation:
      "Re-baseline using current approved activity and document the business change.",
    expected:
      "Threshold and volume expectations become more realistic.",
    risk:
      "Re-baselining could normalize genuinely important changes if done without review.",
    validation:
      "Compare post-change cases with known legitimate workflow periods and analyst outcomes.",
    priority:
      "P1",
  },
  {
    id: "TUNE-1807",
    title: "The underlying detection still has defensive value",
    evidence:
      "DET-1807, DET-1810",
    conclusion:
      "Analyst usefulness and escalation acceptance indicate that the signal should be improved, not discarded.",
    recommendation:
      "Preserve the core detection purpose while fixing context, duplication, and workflow issues first.",
    expected:
      "Better analyst experience with retained meaningful coverage.",
    risk:
      "Over-tuning could reduce useful signal.",
    validation:
      "Track usefulness, escalations, distinct cases, and missed-context reports.",
    priority:
      "P0",
  },
  {
    id: "TUNE-1808",
    title: "Reopen rate should become a formal quality metric",
    evidence:
      "DET-1811, DET-1816",
    conclusion:
      "The team lacks a direct measure of over-aggressive benign classification.",
    recommendation:
      "Add reopen rate and reason to the tuning scorecard.",
    expected:
      "Faster detection of unsafe or overly aggressive tuning.",
    risk:
      "Metric could be misunderstood without denominator and review reason.",
    validation:
      "Define denominator, target, threshold, and review cadence.",
    priority:
      "P1",
  },
];

const tuningDecisionTypes = [
  {
    type: "Context improvement",
    use:
      "The signal is useful, but analysts lack owner, criticality, maintenance, environment, or business context.",
    example:
      "Add current asset criticality and owner enrichment.",
  },
  {
    type: "Deduplication / correlation",
    use:
      "Several alerts represent the same distinct review need.",
    example:
      "Group repeated alerts into one case while preserving source records.",
  },
  {
    type: "Workflow improvement",
    use:
      "Routing, timing, evidence packaging, or ticket creation creates avoidable rework.",
    example:
      "Attach current owner before ticket routing.",
  },
  {
    type: "Priority adjustment",
    use:
      "Context changes urgency but should not erase the evidence.",
    example:
      "Lower review priority for well-understood test-environment activity while keeping it visible.",
  },
  {
    type: "Conceptual rule refinement",
    use:
      "The detection condition itself no longer separates interesting from routine behavior well enough.",
    example:
      "Refine the fictional condition using reviewed contextual distinctions.",
  },
  {
    type: "No change",
    use:
      "Evidence shows the alert is noisy-looking but still valuable, and proposed tuning would create more risk than benefit.",
    example:
      "Retain production coverage while improving analyst guidance instead.",
  },
  {
    type: "Pause tuning",
    use:
      "Evidence is too incomplete to support a safe change.",
    example:
      "Wait for current environment and owner data before changing review behavior.",
  },
  {
    type: "Rollback",
    use:
      "Post-change monitoring shows quality loss or missed-context warning signals.",
    example:
      "Restore the prior tuning state and investigate why useful coverage dropped.",
  },
];

const antiPatterns = [
  {
    pattern: "Optimize for fewer alerts",
    problem:
      "A lower count can be achieved by hiding useful evidence.",
    better:
      "Optimize for useful distinct cases, evidence completeness, analyst effort, and retained defensive value.",
  },
  {
    pattern: "Maintenance means close",
    problem:
      "Maintenance may overlap with an alert without fully explaining it.",
    better:
      "Use maintenance as context and preserve analyst review when evidence remains unmatched.",
  },
  {
    pattern: "Test environment means ignore",
    problem:
      "Test systems can still produce evidence worth reviewing, and labels can be stale.",
    better:
      "Use environment as a prioritization input rather than an automatic discard rule.",
  },
  {
    pattern: "High false-positive count means delete the rule",
    problem:
      "Noise may come from missing context, duplicates, or workflow issues.",
    better:
      "Identify the actual source of analyst friction before changing the detection purpose.",
  },
  {
    pattern: "One good week proves success",
    problem:
      "Short windows may not include enough varied business conditions.",
    better:
      "Use a defined monitoring period and compare multiple quality dimensions.",
  },
  {
    pattern: "No analyst complaints means safe",
    problem:
      "Missing feedback does not prove the tuning preserved visibility.",
    better:
      "Use explicit metrics, sampling, and review criteria.",
  },
  {
    pattern: "Every override is failure",
    problem:
      "Some human overrides are expected in ambiguous workflows.",
    better:
      "Track override patterns and reasons to learn whether the tuning model is too aggressive.",
  },
  {
    pattern: "Do not document rollback",
    problem:
      "Teams may hesitate or improvise when tuning causes quality loss.",
    better:
      "Define rollback triggers and owner before approval.",
  },
];

const recommendationFields = [
  {
    field: "Detection ID",
    purpose:
      "Identifies the fictional detection being reviewed.",
    example:
      "DET-NB-7",
  },
  {
    field: "Defensive purpose",
    purpose:
      "States the security question the detection is meant to support.",
    example:
      "Surface unusual service-state changes for analyst review",
  },
  {
    field: "Baseline window",
    purpose:
      "Defines the time period used for comparison.",
    example:
      "Prior 14 days",
  },
  {
    field: "Baseline metrics",
    purpose:
      "Records alert volume, distinct cases, duplicates, reassignments, evidence completeness, usefulness, and reopens.",
    example:
      "420 alerts, 168 cases, 126 duplicates",
  },
  {
    field: "Noise source",
    purpose:
      "Explains why analysts are doing avoidable work.",
    example:
      "Duplicate fan-out + stale ownership",
  },
  {
    field: "Proposed change",
    purpose:
      "Describes the bounded tuning action.",
    example:
      "Earlier duplicate grouping and current owner enrichment",
  },
  {
    field: "What stays unchanged",
    purpose:
      "Protects important defensive coverage and boundaries.",
    example:
      "Production alert visibility and analyst review",
  },
  {
    field: "Expected outcome",
    purpose:
      "Defines how the change should improve defensive work.",
    example:
      "Lower duplicate tickets and reassignments",
  },
  {
    field: "Safety risk",
    purpose:
      "Names what could go wrong with the tuning.",
    example:
      "Over-grouping unrelated alerts",
  },
  {
    field: "Monitoring window",
    purpose:
      "Defines how long post-change behavior will be reviewed.",
    example:
      "14-day validation window",
  },
  {
    field: "Rollback trigger",
    purpose:
      "Defines when the previous tuning state should be restored.",
    example:
      "Distinct-case loss or reopen rate above threshold",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional person or team accountable for review.",
    example:
      "Detection Engineering Owner",
  },
  {
    field: "Validation evidence",
    purpose:
      "Defines what proves the change achieved its intended effect safely.",
    example:
      "Lower duplicates with stable distinct-case and escalation quality",
  },
  {
    field: "Leadership summary",
    purpose:
      "Explains the tuning decision in business-friendly language.",
    example:
      "Reduce duplicate workload while preserving production visibility",
  },
];

const postChangeSignals = [
  {
    signal: "Distinct-case count drops sharply",
    meaning:
      "Tuning may be grouping or excluding too aggressively.",
    response:
      "Review samples and consider rollback.",
  },
  {
    signal: "Reopen rate increases",
    meaning:
      "Benign classification or grouping may be hiding important differences.",
    response:
      "Inspect reopened cases and tighten the tuning boundary.",
  },
  {
    signal: "Analyst rework decreases",
    meaning:
      "Context or workflow improvements may be working.",
    response:
      "Confirm the improvement is not caused by reduced visibility.",
  },
  {
    signal: "Reassignment rate decreases",
    meaning:
      "Owner enrichment may be improving routing.",
    response:
      "Confirm ownership accuracy remains high.",
  },
  {
    signal: "Evidence completeness increases",
    meaning:
      "Alerts arrive with better context.",
    response:
      "Check freshness so more data does not create false confidence.",
  },
  {
    signal: "Escalation acceptance remains stable",
    meaning:
      "Useful higher-confidence signal may be preserved.",
    response:
      "Continue review across the full monitoring window.",
  },
  {
    signal: "Override rate spikes",
    meaning:
      "Analysts may be correcting over-aggressive grouping or prioritization.",
    response:
      "Review override reasons before expanding tuning.",
  },
  {
    signal: "Production visibility complaints appear",
    meaning:
      "Tuning may have reduced meaningful coverage.",
    response:
      "Treat as a serious safety signal and review rollback criteria.",
  },
];

const dashboardMetrics = [
  {
    label: "Baseline alerts",
    value: "420",
    note: "Synthetic 14-day review window",
  },
  {
    label: "Distinct cases",
    value: "168",
    note: "Alert count includes substantial duplication and fan-out",
  },
  {
    label: "Confirmed duplicates",
    value: "126",
    note: "Strong candidate for safe grouping improvement",
  },
  {
    label: "Real detections changed",
    value: "0",
    note: "All tuning remains fictional, conceptual, and defensive",
  },
];

const logs = [
  "[08:10] DET-1801 detection=DET-NB-7 baseline_alerts=420 window=14_DAYS",
  "[08:28] DET-1802 distinct_cases=168 duplicate_pressure=HIGH",
  "[08:46] DET-1803 confirmed_duplicates=126 action=CANDIDATE_GROUPING",
  "[09:04] DET-1804 maintenance_overlap=74 auto_close=NOT_SUPPORTED",
  "[09:22] DET-1805 stale_owner_routes=61 cause=CONTEXT_WORKFLOW",
  "[09:40] DET-1806 asset_criticality_present=57% evidence_gap=YES",
  "[09:58] DET-1810 escalation_acceptance=81% signal_value=SUPPORTED",
  "[10:16] DET-1811 reopened_maintenance_cases=7 warning=OVER_AGGRESSIVE_CLOSURE",
  "[10:34] DET-1816 formal_reopen_metric=NO action=ADD_TO_SCORECARD",
];

const safeLabTasks = [
  "Create at least forty fictional DET evidence records.",
  "Give every record a stable DET ID.",
  "Define one fictional detection purpose.",
  "Create a baseline review window.",
  "Record total alert volume.",
  "Record distinct-case count.",
  "Record duplicate count.",
  "Record maintenance-overlap count.",
  "Record reassignment count.",
  "Record evidence-completeness rate.",
  "Record analyst usefulness feedback.",
  "Record escalation quality.",
  "Record reopen count.",
  "Record override count.",
  "Record environment distribution.",
  "Record business-change context.",
  "Record ownership freshness.",
  "Record enrichment timing.",
  "Identify at least five duplicate/fan-out cases.",
  "Identify at least five maintenance-context cases.",
  "Identify at least five stale-ownership cases.",
  "Identify at least five missing-context cases.",
  "Identify at least five environment-context cases.",
  "Identify at least five business-baseline changes.",
  "Create at least fifteen TUNE recommendations.",
  "Give every recommendation a stable TUNE ID.",
  "Link each recommendation to DET evidence.",
  "State what the proposed change is.",
  "State what must remain unchanged.",
  "State expected outcome.",
  "State safety risk.",
  "Define monitoring window.",
  "Define rollback trigger.",
  "Assign fictional owner.",
  "Define validation evidence.",
  "Create at least three recommendations where no detection-logic change is needed.",
  "Create at least three recommendations focused on context enrichment.",
  "Create at least three recommendations focused on deduplication or correlation.",
  "Create at least three recommendations focused on workflow or ownership.",
  "Create at least three recommendations focused on priority or baseline adjustment.",
  "Write a post-change scorecard.",
  "Write a one-page leadership recommendation.",
  "Keep all detections, alerts, cases, metrics, and changes fictional.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Use approved maintenance as visible analyst context, preserve the alert, and require supporting evidence before closing it as benign.",
    outcome:
      "Best. Maintenance can explain activity without automatically explaining every alert.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Automatically close every alert that overlaps a maintenance window.",
    outcome:
      "Risky. The case already shows reopened maintenance-related alerts where the window did not explain all evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore maintenance context completely.",
    outcome:
      "Caution. Legitimate operational context can reduce unnecessary analyst work when used carefully.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Group confirmed duplicates earlier, preserve original records, allow analyst override, and monitor distinct-case and reopen metrics after the change.",
    outcome:
      "Best. This targets duplicated work without hiding the underlying evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Delete duplicate-looking alerts before preserving source records.",
    outcome:
      "Risky. Evidence should remain traceable and reviewable.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Leave every duplicate as a separate ticket because any grouping is unsafe.",
    outcome:
      "Caution. Safe, reversible grouping can reduce repeated work while preserving visibility.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the best reason to tune a detection?",
    choices: [
      "To improve defensive signal quality and analyst usefulness while preserving important coverage.",
      "To make the alert count as low as possible.",
      "To hide alerts that are difficult to explain.",
      "To remove human review.",
    ],
    answer: 0,
    explanation:
      "Detection tuning should improve defensive value, not simply reduce visible activity.",
  },
  {
    question:
      "What should happen before changing detection logic?",
    choices: [
      "Check whether noise comes from duplicates, missing context, stale ownership, workflow, maintenance, or business changes.",
      "Suppress the highest-volume source immediately.",
      "Delete old alerts.",
      "Remove logging.",
    ],
    answer: 0,
    explanation:
      "Analyst friction may come from surrounding context or workflow rather than the detection itself.",
  },
  {
    question:
      "What is the safest treatment of approved maintenance context?",
    choices: [
      "Use it as evidence for interpretation while preserving review when other evidence remains unexplained.",
      "Automatically close all overlapping alerts.",
      "Ignore it completely.",
      "Use it to remove all future alerts from that service.",
    ],
    answer: 0,
    explanation:
      "Maintenance is context, not automatic proof of a benign cause.",
  },
  {
    question:
      "Why is distinct-case count useful?",
    choices: [
      "It helps separate real analyst case volume from duplicate or fan-out alert volume.",
      "It proves every case is malicious.",
      "It replaces evidence completeness.",
      "It removes the need for analyst review.",
    ],
    answer: 0,
    explanation:
      "Raw alert count can overstate workload when many alerts describe the same review need.",
  },
  {
    question:
      "What is a strong rollback trigger?",
    choices: [
      "Evidence that useful distinct-case visibility drops or reopen/override rates exceed the approved threshold.",
      "Any day with fewer alerts.",
      "Any analyst disagreement.",
      "A lower ticket count.",
    ],
    answer: 0,
    explanation:
      "Rollback should be tied to quality loss or unsafe outcomes, not ordinary variation.",
  },
  {
    question:
      "What should happen when test-environment alerts are often benign?",
    choices: [
      "Use environment as transparent context for priority or grouping while preserving important visibility.",
      "Suppress every test-environment alert forever.",
      "Delete the environment field.",
      "Treat test assets as identical to production in every situation.",
    ],
    answer: 0,
    explanation:
      "Environment can support safer prioritization without becoming an automatic discard rule.",
  },
  {
    question:
      "What is the purpose of the Detection Tuning Recommendation?",
    choices: [
      "Document evidence, baseline, proposed change, protected coverage, expected outcome, safety risk, monitoring, rollback, owner, and validation.",
      "Teach ways to evade detection.",
      "Reduce alerts without measurement.",
      "Change real production detections.",
    ],
    answer: 0,
    explanation:
      "The artifact is a defensive, evidence-based tuning plan with clear safety and validation controls.",
  },
];

const checklistItems = [
  "The defensive purpose of the detection is explicit.",
  "Baseline window is defined.",
  "Raw alert volume is not the only metric.",
  "Distinct-case count is measured.",
  "Duplicate/fan-out behavior is reviewed.",
  "Maintenance context is reviewed.",
  "Ownership freshness is reviewed.",
  "Asset criticality and environment context are reviewed.",
  "Business changes are included in the baseline.",
  "Evidence completeness is measured.",
  "Analyst rework is considered.",
  "Reassignment rate is considered.",
  "Escalation quality is considered.",
  "Reopen rate is considered.",
  "Override rate is considered.",
  "Proposed tuning preserves important coverage.",
  "What stays unchanged is documented.",
  "Post-change monitoring window is defined.",
  "Rollback trigger is defined.",
  "No guidance is included for bypassing or evading real detections.",
];

const takeaways = [
  "Detection tuning is about improving defensive signal quality, not simply reducing alert volume.",
  "Noise can come from duplicates, maintenance, stale ownership, missing context, workflow design, business changes, or weak rule assumptions.",
  "A useful detection should not be discarded before surrounding context and workflow problems are examined.",
  "Maintenance and test-environment labels are context, not automatic reasons to hide evidence.",
  "Distinct-case count is often more meaningful than raw alert count when fan-out and duplication are high.",
  "Post-change monitoring must look for quality loss as well as efficiency gains.",
  "Reopen and override rates can reveal overly aggressive tuning.",
  "Rollback criteria should be defined before a tuning change is approved.",
  "Strong recommendations state both what should change and what must remain unchanged.",
  "The Detection Tuning Recommendation becomes the sixth artifact in the A18 Advanced Defensive Casebook.",
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
        Module A18
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

export default function DetectionTuningCasePage() {
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
              A18.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Detection Tuning Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A noisy detection is not automatically a bad detection. Sometimes
            the signal is valuable but arrives with duplicate alerts, weak
            context, stale ownership, poor routing, or a baseline that no longer
            reflects the business.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches safe defensive tuning using synthetic evidence
            only. It does not teach detection bypass, evasion, or ways to hide
            activity from security controls.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Detection Tuning Case"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.6 Entry Readiness"
          items={[
            "I can distinguish alert volume from actual defensive value.",
            "I understand that context, workflow, duplicates, ownership, and business changes can create analyst noise.",
            "I can evaluate tuning using evidence, metrics, post-change monitoring, and rollback criteria.",
            "I will keep all tuning fictional and defensive and will not provide methods for bypassing or evading real detections.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Best Tuning Change May Not Touch the Detection Logic"
        >
          <p className="leading-8">
            Imagine a fictional detection that creates 420 alerts in two weeks.
            At first glance, the rule looks noisy. But after review, 126 alerts
            are duplicates, 61 are routed to stale owners, and nearly half are
            missing current asset criticality. Analysts still rate many alerts
            useful once the missing context arrives.
          </p>

          <p className="mt-4 leading-8">
            In that case, rewriting the detection first could solve the wrong
            problem. The safer approach is to identify where the analyst effort
            is actually coming from and tune the system around the signal
            carefully.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good tuning removes avoidable work while preserving the evidence that makes the detection useful.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
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
          eyebrow="Tuning Principles"
          title="Eight Principles for Safe Defensive Tuning"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tuningPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.principle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Where Noise Comes From"
          title="Eight Sources of Analyst Friction"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {noiseSources.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.source}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Signal: {item.signal}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Safe response: {item.safeResponse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Measurement"
          title="Ten Metrics That Tell a Better Story Than Alert Count Alone"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityMetrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.metric}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case File"
          title="Northbridge Synthetic Detection Evidence"
        >
          <div className="grid gap-5">
            {northbridgeCase.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.area}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.freshness}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white">
                  {item.observation}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      {item.confidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Tuning note
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Detection Tuning Dashboard"
          subtitle="Fictional baseline volume, distinct cases, duplicate pressure, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="High Volume Does Not Yet Justify Suppression"
          severity="Medium"
          time="10:34"
          source="Fictional Detection Engineering Queue"
          details="DET-NB-7 created 420 alerts in fourteen days, but the evidence shows substantial duplication, stale ownership, missing asset context, maintenance overlap, and continued useful escalations."
          recommendation="Fix duplicate handling, context, ownership, and baseline quality before considering any broader reduction in detection coverage."
        />

        <FakeLogPanel
          title="Northbridge Fictional Detection Tuning Log"
          logs={logs}
        />

        <Section
          eyebrow="Tuning Findings"
          title="Eight Evidence-Backed Recommendations"
        >
          <div className="grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Conclusion", item.conclusion],
                    ["Recommendation", item.recommendation],
                    ["Expected outcome", item.expected],
                    ["Safety risk", item.risk],
                    ["Validation", item.validation],
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

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Is the Detection Itself the Main Problem?"
          question="What is the strongest conclusion from the Northbridge baseline?"
          evidence={[
            "420 alerts were created in fourteen days.",
            "Only 168 distinct cases existed.",
            "126 alerts were confirmed duplicates.",
            "61 alerts were routed to stale owners.",
            "Asset criticality was present at creation only 57% of the time.",
            "Analysts rated 63% of alerts useful after context was added.",
            "High-confidence escalations were accepted 81% of the time.",
          ]}
          options={[
            "The detection still has defensive value, and much of the analyst friction comes from duplication, context, and workflow problems that should be addressed before reducing core coverage.",
            "The detection should be disabled immediately because 420 alerts is too many.",
            "All alerts should be auto-closed during maintenance.",
            "The case proves every alert is a false positive.",
          ]}
          bestAnswer={0}
          explanation="The evidence suggests the signal remains useful while surrounding context and workflow inflate the workload."
        />

        <Section
          eyebrow="Types of Tuning Decisions"
          title="Not Every Improvement Is a Rule Change"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tuningDecisionTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Use when: {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Anti-Patterns"
          title="Eight Ways Detection Tuning Goes Wrong"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {antiPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Problem: {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recommendation Artifact"
          title="What a Professional Detection Tuning Recommendation Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {recommendationFields.map((item) => (
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

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Maintenance Context"
          scenario="A fictional alert overlaps an approved maintenance window, but the supporting evidence contains one condition that the maintenance record does not explain."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Duplicate Fan-Out"
          scenario="Several synthetic alerts are confirmed to represent the same underlying fictional review case, and analysts currently create a separate ticket for each one."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Post-Change Review"
          title="Signals That Tell You Whether the Tuning Was Safe"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {postChangeSignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Meaning: {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Detection Tuning Recommendation"
        >
          <p className="leading-8">
            Create a synthetic detection case where the initial complaint is
            “too many alerts,” then determine whether the real causes are
            duplication, context, workflow, business changes, or the detection
            concept itself.
          </p>

          <div className="mt-6 grid gap-4">
            {safeLabTasks.map((item, index) => (
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
              Use only fictional detections, alerts, tickets, maintenance
              records, asset metadata, owner records, metrics, and analyst
              feedback. Do not test real systems, alter real detection rules, or
              provide methods for evading or bypassing monitoring.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Maintenance Auto-Closure"
          question="What is the strongest tuning decision for maintenance-related alerts?"
          evidence={[
            "74 alerts overlapped approved maintenance.",
            "Seven maintenance-related cases were later reopened.",
            "The reopened cases contained evidence not explained by the maintenance record.",
            "Analysts find maintenance context useful.",
            "No evidence supports treating every maintenance-window alert as benign.",
          ]}
          options={[
            "Attach maintenance context and preserve analyst review instead of auto-closing all overlapping alerts.",
            "Auto-close every alert during maintenance.",
            "Ignore maintenance context entirely.",
            "Remove the detection during all planned changes.",
          ]}
          bestAnswer={0}
          explanation="Maintenance is valuable context, but the reopen evidence shows it is not reliable enough to become an automatic closure rule."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Before-and-After Tuning Scorecard"
        >
          <p className="leading-8">
            Use the fictional Northbridge case to create a baseline and target
            scorecard. Your target should improve analyst workload without
            sacrificing distinct-case visibility or escalation quality.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Alert volume baseline",
              "Distinct-case baseline",
              "Duplicate-rate baseline",
              "Evidence-completeness baseline",
              "Reassignment baseline",
              "Analyst rework baseline",
              "Escalation-quality baseline",
              "Reopen baseline",
              "Override baseline",
              "Target duplicate rate",
              "Target evidence completeness",
              "Target reassignment rate",
              "Protected distinct-case threshold",
              "Protected escalation-quality threshold",
              "Rollback trigger",
              "Review owner",
              "Monitoring window",
              "Leadership decision",
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
            The strongest scorecard makes it impossible to call the tuning a
            success merely because the alert count fell.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.6 Mini Quiz: Detection Tuning Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Detection Tuning Recommendation"
          prompt="Create the sixth artifact for your A18 Advanced Defensive Casebook: a fictional Detection Tuning Recommendation. Include detection purpose, baseline window, alert volume, distinct-case count, duplicate rate, maintenance context, ownership quality, evidence completeness, analyst rework, escalation quality, reopen/override metrics, identified noise sources, proposed changes, what must remain unchanged, expected outcome, safety risks, monitoring window, rollback criteria, owner, validation evidence, and a one-page leadership recommendation."
          tips={[
            "Do not optimize for lower alert count alone.",
            "Check context and workflow before changing the detection concept.",
            "Use maintenance and environment as context, not automatic suppression.",
            "Preserve original evidence when grouping duplicates.",
            "Define rollback before approval.",
            "Keep every detection and metric fictional.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.7?"
        >
          <p className="leading-8">
            A18.7 turns technical and operational findings into a Risk Register
            Case. Before continuing, make sure you can explain why safe tuning
            needs both efficiency evidence and proof that useful defensive
            visibility is still intact.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish alert volume from distinct defensive cases.",
              "I can identify whether analyst friction comes from context, workflow, duplicates, or rule design.",
              "I can use maintenance and environment context without blindly suppressing alerts.",
              "I can define post-change metrics and rollback triggers.",
              "I can write a defensive tuning recommendation without providing ways to evade monitoring.",
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
          title="How to Make the Tuning Recommendation Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the purpose",
                detail:
                  "A reviewer should know what defensive question the detection is intended to answer before evaluating its noise.",
              },
              {
                title: "Show the baseline",
                detail:
                  "Use more than alert count: include distinct cases, duplicates, context quality, rework, escalations, and reopens.",
              },
              {
                title: "Name the actual noise source",
                detail:
                  "Do not call the detection bad when the evidence points to routing or enrichment problems.",
              },
              {
                title: "Protect what matters",
                detail:
                  "State explicitly which coverage, visibility, and human-review boundaries must remain unchanged.",
              },
              {
                title: "Make the change reversible",
                detail:
                  "Every material tuning recommendation should include rollback criteria.",
              },
              {
                title: "Measure after change",
                detail:
                  "Use the same quality dimensions after tuning so success is not defined by a convenient metric.",
              },
              {
                title: "Preserve uncertainty",
                detail:
                  "If evidence is incomplete, use conditional approval or pause tuning rather than guessing.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.7 will translate several of these findings into formal risk statements, owners, treatment decisions, and review dates.",
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
            A18.6 stays fictional, defensive, review-focused, and non-evasive
          </h2>
          <p className="mt-3 leading-7">
            Do not test, change, disable, bypass, or evade real detection
            systems. Do not provide methods for hiding activity from monitoring.
            This lesson uses synthetic alerts and metrics to teach defensive
            signal quality, context, workflow, evidence, measurement, rollback,
            and governance.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.6 Detection Tuning Case Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible tuning model covering signal quality,
            duplicates, maintenance, context, ownership, evidence completeness,
            workflow, baselines, post-change measurement, rollback, and
            protected coverage. Next, A18.7 turns technical findings into a
            formal Risk Register Case.
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