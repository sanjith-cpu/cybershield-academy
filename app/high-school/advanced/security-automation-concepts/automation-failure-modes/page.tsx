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
const previousLesson = `${modulePath}/safe-scripting-boundaries`;
const nextLesson = `${modulePath}/measuring-automation-value`;

const objectives = [
  "Explain major automation failure modes including stale data, duplicate execution, routing loops, dependency failure, partial completion, silent failure, configuration drift, approval failure, retry storms, evidence gaps, and false confidence.",
  "Evaluate failure severity using impact, detectability, scope, reversibility, propagation risk, evidence quality, human override, and business dependency.",
  "Design safe controls such as validation, idempotency, bounded retry, circuit breakers, exception queues, degraded mode, health monitoring, ownership, rollback planning, and disable criteria.",
  "Distinguish failures that should degrade gracefully from failures that should stop the workflow entirely and require human review.",
  "Build an Automation Failure Mode Register that becomes the seventh artifact in the A17 Safe Automation Design and Governance Plan.",
];

const failureFamilies = [
  {
    family: "Stale data",
    description:
      "Automation acts on information that is technically available but no longer current enough for the decision.",
    example:
      "A fictional routing rule uses an outdated service-owner mapping.",
    risk:
      "The workflow appears healthy while producing wrong context or assignment.",
    control:
      "Freshness thresholds, stale indicators, source ownership, and safe fallback.",
  },
  {
    family: "Duplicate execution",
    description:
      "The same logical request is processed more than once.",
    example:
      "A retry creates several fictional tickets for one alert.",
    risk:
      "Queue noise, repeated reminders, conflicting ownership, and misleading metrics.",
    control:
      "Idempotency keys, duplicate checks, bounded retry, and reconciliation.",
  },
  {
    family: "Routing loop",
    description:
      "A work item repeatedly moves between states or owners without resolution.",
    example:
      "Two fictional queues keep reassigning the same ticket to each other.",
    risk:
      "Delay, analyst frustration, stale work, and hidden ownership gaps.",
    control:
      "Loop detection, hop limits, exception queues, and ownership review.",
  },
  {
    family: "Dependency failure",
    description:
      "An external or internal workflow dependency becomes unavailable, slow, malformed, or inconsistent.",
    example:
      "A fictional enrichment source times out.",
    risk:
      "Automation may block, guess, or silently omit evidence.",
    control:
      "Timeouts, degraded modes, health checks, source state, and human review.",
  },
  {
    family: "Partial completion",
    description:
      "Some steps succeed while later steps fail.",
    example:
      "A fictional ticket is created but required evidence attachment fails.",
    risk:
      "The record looks complete even though the intended workflow did not finish.",
    control:
      "Step-level status, completion checks, reconciliation, and candidate-for-review states.",
  },
  {
    family: "Silent failure",
    description:
      "The automation stops working or produces incomplete output without a visible error.",
    example:
      "A fictional reminder rule stops firing after a field name changes.",
    risk:
      "Teams assume the workflow is healthy while obligations are missed.",
    control:
      "Health metrics, heartbeat checks, evidence completeness, and alerting.",
  },
  {
    family: "Configuration drift",
    description:
      "The automation still runs, but its rules no longer match current systems, owners, schemas, or governance.",
    example:
      "A retired fictional queue remains in an allowlist.",
    risk:
      "Correct code executes the wrong current policy.",
    control:
      "Version control, dependency inventory, change review, and periodic validation.",
  },
  {
    family: "Approval failure",
    description:
      "A human approval step is missing, unavailable, bypassed, or treated as implied.",
    example:
      "A fictional workflow interprets no response as approval.",
    risk:
      "Consequential action occurs without authority.",
    control:
      "Explicit approval states, safe timeout, escalation, and no implicit approval.",
  },
  {
    family: "Retry storm",
    description:
      "Failure causes repeated retries that create more load, more duplicates, or more failures.",
    example:
      "A fictional dependency outage triggers unlimited retries.",
    risk:
      "A small issue becomes a wider operational problem.",
    control:
      "Bounded retries, backoff concepts, idempotency, circuit-breaker behavior, and manual fallback.",
  },
  {
    family: "Evidence gap",
    description:
      "The workflow acts but does not preserve enough metadata to reconstruct what happened.",
    example:
      "A fictional ticket changes queues with no rule version or reason.",
    risk:
      "The team cannot validate, troubleshoot, audit, or improve the automation.",
    control:
      "Structured evidence, version IDs, timestamps, ownership, and exception capture.",
  },
  {
    family: "False confidence",
    description:
      "Automation output looks precise or authoritative even when source quality or workflow health is weak.",
    example:
      "A fictional score remains visible even though half the enrichment sources are stale.",
    risk:
      "Humans trust the machine more than the evidence supports.",
    control:
      "Confidence labels, missing-data visibility, health status, and analyst judgment.",
  },
  {
    family: "Unsafe scope expansion",
    description:
      "A workflow gradually gains more data, permissions, actions, or authority than the original design approved.",
    example:
      "A fictional read-only helper is proposed for broad write access without a new review.",
    risk:
      "Impact and permissions grow faster than governance.",
    control:
      "Change approval, least privilege, boundary review, and redesign before expansion.",
  },
];

const failureDimensions = [
  {
    dimension: "Impact",
    question:
      "What happens if the automation produces the wrong output?",
    low:
      "Analyst receives incomplete context but can still review safely.",
    high:
      "The workflow could materially misroute, mislead, or affect a consequential decision.",
  },
  {
    dimension: "Scope",
    question:
      "How many records, queues, or workflows could be affected?",
    low:
      "One isolated synthetic record.",
    high:
      "A shared rule could affect an entire fictional queue or many workflows.",
  },
  {
    dimension: "Detectability",
    question:
      "How quickly would a person know the automation failed?",
    low:
      "Visible error and exception state appear immediately.",
    high:
      "The workflow looks normal while producing incomplete or wrong output.",
  },
  {
    dimension: "Reversibility",
    question:
      "How easily can the result be corrected?",
    low:
      "A fictional label or queue can be changed safely.",
    high:
      "The result would be difficult to reconstruct or undo.",
  },
  {
    dimension: "Propagation",
    question:
      "Can this failure trigger additional failures downstream?",
    low:
      "The issue stops at one optional enrichment field.",
    high:
      "Wrong context feeds routing, escalation, reporting, and closure logic.",
  },
  {
    dimension: "Evidence confidence",
    question:
      "Can the team reconstruct what happened?",
    low:
      "Rule version, inputs, output, error, and owner are visible.",
    high:
      "Logs are missing or ambiguous.",
  },
  {
    dimension: "Human override",
    question:
      "Can an authorized person stop or correct the automation safely?",
    low:
      "Override and disable controls exist.",
    high:
      "The workflow cannot be interrupted without broad disruption.",
  },
  {
    dimension: "Business dependency",
    question:
      "How much does normal defensive work depend on the automation?",
    low:
      "Manual review remains easy.",
    high:
      "The team has no practical fallback and the automation is a single point of failure.",
  },
];

const containmentPatterns = [
  {
    pattern: "Fail closed for authority-sensitive transitions",
    use:
      "When approval, authorization, or high-impact judgment is missing.",
    outcome:
      "Pause and require review rather than continue.",
  },
  {
    pattern: "Fail open to manual review for optional support",
    use:
      "When a nonessential enrichment source is unavailable.",
    outcome:
      "Keep the alert visible, mark the context missing, and let the analyst continue.",
  },
  {
    pattern: "Exception queue",
    use:
      "When routing, duplicate handling, validation, or workflow state cannot be resolved automatically.",
    outcome:
      "Move the item to a human-owned queue instead of guessing.",
  },
  {
    pattern: "Circuit-breaker behavior",
    use:
      "When repeated failures show a dependency or rule is unhealthy.",
    outcome:
      "Stop repeated automation attempts and move to degraded/manual mode.",
  },
  {
    pattern: "Reconciliation",
    use:
      "When partial completion or duplicate execution may have created inconsistent records.",
    outcome:
      "Compare intended state with actual fictional records and repair through controlled review.",
  },
  {
    pattern: "Health threshold",
    use:
      "When failure rate, stale data, latency, override, or exception volume rises.",
    outcome:
      "Open maintenance review and consider disable criteria.",
  },
  {
    pattern: "Version rollback concept",
    use:
      "When a recently changed rule causes quality to degrade.",
    outcome:
      "Conceptually return to the last approved stable configuration after review.",
  },
  {
    pattern: "Disable switch",
    use:
      "When continued automation creates more risk than manual fallback.",
    outcome:
      "Stop the affected workflow and route work through the approved manual path.",
  },
];

const detectionSignals = [
  {
    signal: "Failure-rate spike",
    meaning:
      "A previously stable automation begins failing more often.",
    response:
      "Review recent changes, dependency health, and error distribution.",
  },
  {
    signal: "Exception-rate spike",
    meaning:
      "More cases are falling outside normal logic.",
    response:
      "Determine whether the workflow assumptions no longer match reality.",
  },
  {
    signal: "Override-rate spike",
    meaning:
      "Analysts are correcting the automation more often.",
    response:
      "Inspect override reasons for stale rules, ownership drift, or bad recommendations.",
  },
  {
    signal: "Reassignment spike",
    meaning:
      "Routing quality is degrading.",
    response:
      "Check ownership sources and routing logic.",
  },
  {
    signal: "Duplicate-rate spike",
    meaning:
      "Idempotency or duplicate detection may be failing.",
    response:
      "Pause repeated creation and reconcile records.",
  },
  {
    signal: "Stale-data spike",
    meaning:
      "More enrichments exceed freshness thresholds.",
    response:
      "Review source health and whether degraded mode should activate.",
  },
  {
    signal: "Latency spike",
    meaning:
      "Dependencies or processing are slowing.",
    response:
      "Check timeout, queue age, and whether retries are increasing load.",
  },
  {
    signal: "Heartbeat missing",
    meaning:
      "The automation may have stopped entirely.",
    response:
      "Open a maintenance review and switch to fallback.",
  },
  {
    signal: "Evidence completeness drop",
    meaning:
      "Automation still acts but logs or required metadata are missing.",
    response:
      "Treat evidence loss as a control issue, not only a reporting issue.",
  },
  {
    signal: "Closure without review increase",
    meaning:
      "Workflow state may be advancing without required human confirmation.",
    response:
      "Inspect approval and closure controls immediately.",
  },
];

const registerFields = [
  {
    field: "FM ID",
    purpose:
      "Stable identifier for the failure-mode record.",
    example:
      "FM-701",
  },
  {
    field: "Linked automation",
    purpose:
      "Connects the failure to earlier A17 artifacts.",
    example:
      "BND-603 / WFA-402",
  },
  {
    field: "Failure mode",
    purpose:
      "Names the failure clearly.",
    example:
      "Stale ownership routing",
  },
  {
    field: "Trigger / cause",
    purpose:
      "Explains what condition creates the failure.",
    example:
      "Ownership source exceeds freshness threshold",
  },
  {
    field: "Impact",
    purpose:
      "Describes what could go wrong.",
    example:
      "Ticket routed to wrong queue",
  },
  {
    field: "Detectability",
    purpose:
      "Shows how visible the failure is.",
    example:
      "Medium unless override rate is monitored",
  },
  {
    field: "Propagation",
    purpose:
      "Shows whether downstream workflow steps can be affected.",
    example:
      "Routing, SLA ownership, and escalation",
  },
  {
    field: "Containment",
    purpose:
      "Defines the immediate safe response.",
    example:
      "Use fallback queue and mark ownership stale",
  },
  {
    field: "Recovery",
    purpose:
      "Defines how the workflow returns to normal.",
    example:
      "Refresh source, validate mapping, replay only affected synthetic records",
  },
  {
    field: "Evidence",
    purpose:
      "Defines what must be preserved.",
    example:
      "Source timestamp, route history, override, rule version",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional owner responsible for remediation.",
    example:
      "SOC Workflow Owner",
  },
  {
    field: "Disable criteria",
    purpose:
      "Defines when automation should stop.",
    example:
      "Routing error rate above approved threshold for two review windows",
  },
];

const northbridgeFailures = [
  {
    id: "FM-701",
    linked:
      "ENR-301 / WFA-402 / BND-603",
    failure:
      "Stale ownership routing",
    cause:
      "Asset ownership source exceeds freshness threshold.",
    impact:
      "Tickets may route to the wrong fictional queue.",
    detectability:
      "Medium",
    scope:
      "Multiple tickets using the same ownership source",
    propagation:
      "Assignment, SLA reminders, and escalation",
    containment:
      "Mark ownership Stale and route to General Security Review.",
    recovery:
      "Refresh and validate ownership source before restoring automatic routing.",
    evidence:
      "Source age, queue history, override reasons, rule version",
    owner:
      "SOC Workflow Owner",
    disable:
      "Disable automatic ownership routing if stale-rate threshold is exceeded.",
    state:
      "Treat",
  },
  {
    id: "FM-702",
    linked:
      "WFA-401 / BND-603",
    failure:
      "Duplicate ticket creation",
    cause:
      "Retry occurs after the first ticket was created but before confirmation was recorded.",
    impact:
      "Several fictional tickets may represent one alert.",
    detectability:
      "High when duplicate metrics exist",
    scope:
      "Affected alert family",
    propagation:
      "Queue noise, duplicate reminders, split ownership",
    containment:
      "Pause ticket creation for matching request IDs and reconcile duplicates.",
    recovery:
      "Apply idempotency check and preserve one canonical ticket with linked references.",
    evidence:
      "Request ID, ticket IDs, timestamps, retry count",
    owner:
      "SOC Workflow Owner",
    disable:
      "Disable creation rule if duplicate rate exceeds threshold.",
    state:
      "Treat",
  },
  {
    id: "FM-703",
    linked:
      "WFA-407 / PRB-504 / BND-605",
    failure:
      "Routing loop",
    cause:
      "Two queue rules send the same ticket back and forth.",
    impact:
      "Work ages without ownership resolution.",
    detectability:
      "High with hop-count monitoring",
    scope:
      "Tickets matching the conflicting routing rules",
    propagation:
      "SLA breach, analyst reassignment, queue noise",
    containment:
      "Stop automatic routing and move ticket to Workflow Exception Review.",
    recovery:
      "Resolve ownership and update the conflicting rule set.",
    evidence:
      "Queue history, hop count, rule versions, owner decision",
    owner:
      "Security Platform Owner",
    disable:
      "Automatic routing stops immediately at loop threshold.",
    state:
      "Exception",
  },
  {
    id: "FM-704",
    linked:
      "ENR-306 / BND-606",
    failure:
      "Enrichment dependency outage",
    cause:
      "Fictional enrichment source becomes unavailable.",
    impact:
      "Optional context is missing from analyst review.",
    detectability:
      "High",
    scope:
      "Alerts using the failed source",
    propagation:
      "Reduced context only when degraded mode is designed correctly",
    containment:
      "Mark source Unavailable and continue with visible degraded mode.",
    recovery:
      "Restore source, validate freshness, and resume normal enrichment.",
    evidence:
      "Health state, timeout, affected records, recovery time",
    owner:
      "Security Platform Owner",
    disable:
      "Do not disable the whole alert-review workflow if the source is optional.",
    state:
      "Degraded",
  },
  {
    id: "FM-705",
    linked:
      "WFA-401 / PRB-502",
    failure:
      "Partial evidence package completion",
    cause:
      "Ticket creation succeeds but one evidence attachment step fails.",
    impact:
      "Ticket appears created but review package is incomplete.",
    detectability:
      "Medium without completion-state monitoring",
    scope:
      "Affected ticket records",
    propagation:
      "Analyst may review with incomplete context",
    containment:
      "Mark package Incomplete and prevent Ready for Review state.",
    recovery:
      "Retry only the missing bounded attachment step or route to exception review.",
    evidence:
      "Step status, missing field, retry count, final package state",
    owner:
      "SOC Workflow Owner",
    disable:
      "Stop transition to Ready for Review while completeness is below requirement.",
    state:
      "Treat",
  },
  {
    id: "FM-706",
    linked:
      "PRB-501 / PRB-507",
    failure:
      "Retired guidance still linked",
    cause:
      "An old playbook URL or version reference remains in an active workflow.",
    impact:
      "Analysts may follow outdated routing or evidence assumptions.",
    detectability:
      "Low unless version health is monitored",
    scope:
      "Tickets using the stale document reference",
    propagation:
      "Wrong branch, outdated escalation, stale evidence requirements",
    containment:
      "Mark the reference Retired and stop presenting it as current.",
    recovery:
      "Link the current version and review affected synthetic records.",
    evidence:
      "Old/new version, effective date, usage history",
    owner:
      "Security Operations Documentation Owner",
    disable:
      "Block retired versions from current workflow recommendations.",
    state:
      "Treat",
  },
  {
    id: "FM-707",
    linked:
      "HITL-204 / WFA-406 / BND-604",
    failure:
      "Approval timeout treated as approval",
    cause:
      "Workflow uses a weak default when the authorized reviewer does not respond.",
    impact:
      "High-consequence decision could proceed without authority.",
    detectability:
      "High if approval state is explicit",
    scope:
      "Authority-sensitive workflow branch",
    propagation:
      "Potential downstream state changes",
    containment:
      "Pause and escalate; never infer approval from silence.",
    recovery:
      "Require explicit decision and review the approval-state logic.",
    evidence:
      "Approval request, timeout, escalation, reviewer decision",
    owner:
      "Incident Response Lead",
    disable:
      "Block the decision path until explicit approval logic is restored.",
    state:
      "Blocked",
  },
  {
    id: "FM-708",
    linked:
      "BND-603 / BND-605",
    failure:
      "Retry storm",
    cause:
      "Repeated dependency errors trigger immediate unlimited retries.",
    impact:
      "Workflow load and duplicate risk increase rapidly.",
    detectability:
      "High with retry-rate monitoring",
    scope:
      "Affected automation service",
    propagation:
      "Latency, duplicate actions, queue growth",
    containment:
      "Stop retries after bounded attempts and enter degraded/manual mode.",
    recovery:
      "Restore dependency health and restart gradually after validation.",
    evidence:
      "Retry count, error type, timing, circuit state",
    owner:
      "Security Automation Engineer",
    disable:
      "Trip the conceptual circuit breaker after threshold is reached.",
    state:
      "Degraded",
  },
];

const dashboardMetrics = [
  {
    label: "Failure modes",
    value: "8",
    note: "Stale data, duplicates, loops, outages, partial completion, stale guidance, approval failure, and retry storms",
  },
  {
    label: "Immediate stop",
    value: "2",
    note: "Routing loop threshold and approval failure require hard containment",
  },
  {
    label: "Graceful degradation",
    value: "2",
    note: "Optional enrichment outage and bounded retry failure can move to manual mode",
  },
  {
    label: "Evidence-driven recovery",
    value: "8",
    note: "Every failure requires preserved evidence and an accountable owner",
  },
];

const logs = [
  "[08:10] FM-701 failure=STALE_OWNERSHIP source_age=THRESHOLD_EXCEEDED action=FALLBACK_QUEUE",
  "[08:32] FM-702 failure=DUPLICATE_CREATION request_id=REUSED action=PAUSE_AND_RECONCILE",
  "[08:54] FM-703 failure=ROUTING_LOOP hop_count=4 action=STOP_AUTOROUTING",
  "[09:16] FM-704 failure=DEPENDENCY_OUTAGE source=ENRICHMENT action=DEGRADED_MODE",
  "[09:38] FM-705 failure=PARTIAL_COMPLETION package_state=INCOMPLETE action=BLOCK_READY_STATE",
  "[10:00] FM-706 failure=RETIRED_GUIDANCE version=OLD action=BLOCK_REFERENCE",
  "[10:22] FM-707 failure=APPROVAL_TIMEOUT implicit_approval=BLOCKED action=ESCALATE",
  "[10:44] FM-708 failure=RETRY_STORM retry_count=LIMIT action=DEGRADED_MANUAL_MODE",
];

const antiPatterns = [
  {
    title: "Retry forever",
    problem:
      "A failed dependency triggers repeated attempts with no upper bound.",
    better:
      "Use bounded retries, duplicate protection, and a degraded/manual fallback.",
  },
  {
    title: "Treat missing logs as a reporting issue only",
    problem:
      "The workflow keeps acting even though reviewers cannot reconstruct what happened.",
    better:
      "Treat evidence loss as a control failure that can require pause or review.",
  },
  {
    title: "Assume successful first step means successful workflow",
    problem:
      "A ticket exists, so the system assumes the evidence package also completed.",
    better:
      "Track step-level completion and only advance when required stages succeed.",
  },
  {
    title: "Keep stale data because it is better than nothing",
    problem:
      "Old context is shown as current and silently influences decisions.",
    better:
      "Label stale data and decide whether degraded mode is still safe.",
  },
  {
    title: "Use one fallback for every failure",
    problem:
      "Optional enrichment outage and missing approval are treated the same way.",
    better:
      "Choose fail-open-to-review or fail-closed-to-pause based on consequence and authority.",
  },
  {
    title: "Disable override during incidents",
    problem:
      "Humans lose the ability to correct a workflow exactly when quality degrades.",
    better:
      "Preserve controlled override and disable authority.",
  },
  {
    title: "No change linkage",
    problem:
      "Failure rates rise after a rule update, but the team cannot identify which version changed.",
    better:
      "Tie health metrics and evidence to configuration versions.",
  },
  {
    title: "Trust precision-looking output",
    problem:
      "A score or status looks exact even though inputs are stale or incomplete.",
    better:
      "Show confidence, evidence health, and uncertainty directly.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Mark the optional enrichment source Unavailable, preserve the rest of the alert evidence, and continue in visible degraded mode for analyst review.",
    outcome:
      "Best. The optional dependency should not block all defensive review.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Guess the missing enrichment from older records.",
    outcome:
      "Risky. Guessing hides uncertainty and can create false confidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Stop the entire alert queue until the optional source returns.",
    outcome:
      "Caution. That makes a nonessential dependency a single point of failure.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Pause the authority-sensitive branch, escalate the approval request, and require an explicit human decision.",
    outcome:
      "Best. Missing approval must not become implied approval.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat timeout as approval because the reviewer had enough time.",
    outcome:
      "Risky. Silence does not create authority.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Use the automation confidence score as a substitute for approval.",
    outcome:
      "Risky. Confidence and authorization are different concepts.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is a retry storm?",
    choices: [
      "Repeated failed attempts create additional load, duplicates, or cascading failures.",
      "A normal bounded retry with duplicate protection.",
      "A human reviewer asking for more evidence.",
      "A scheduled documentation review.",
    ],
    answer: 0,
    explanation:
      "Retry storms turn one failure into a larger operational problem.",
  },
  {
    question:
      "What is strongest when an optional enrichment source is unavailable?",
    choices: [
      "Mark the source unavailable and use a visible degraded review path.",
      "Guess the missing value.",
      "Stop all alert review.",
      "Hide the missing field.",
    ],
    answer: 0,
    explanation:
      "Optional support should often fail open to manual review rather than stop the whole workflow.",
  },
  {
    question:
      "What should happen when approval times out for a consequential decision?",
    choices: [
      "Pause or escalate and require explicit human approval.",
      "Treat timeout as approval.",
      "Use the automation confidence score instead.",
      "Skip the approval record.",
    ],
    answer: 0,
    explanation:
      "Silence should never create implied authority.",
  },
  {
    question:
      "Why is partial completion dangerous?",
    choices: [
      "Some steps may succeed while the workflow appears complete even though required evidence or state changes failed.",
      "It always means no work was done.",
      "It only affects speed.",
      "It removes the need for recovery.",
    ],
    answer: 0,
    explanation:
      "Step-level status is needed so incomplete workflows do not look finished.",
  },
  {
    question:
      "What is the purpose of a circuit-breaker concept?",
    choices: [
      "Stop repeated failing automation attempts and move to a safe degraded or manual state.",
      "Retry faster.",
      "Hide dependency outages.",
      "Remove human override.",
    ],
    answer: 0,
    explanation:
      "Circuit-breaker behavior contains repeated failure rather than amplifying it.",
  },
  {
    question:
      "What is configuration drift?",
    choices: [
      "Automation continues running but no longer matches current schemas, ownership, rules, or governance.",
      "A script is intentionally updated and reviewed.",
      "An analyst closes a ticket.",
      "A source becomes temporarily unavailable.",
    ],
    answer: 0,
    explanation:
      "Drift occurs when the environment changes around the automation.",
  },
  {
    question:
      "What is the purpose of the Automation Failure Mode Register?",
    choices: [
      "Document failure causes, impact, detectability, propagation, containment, recovery, evidence, ownership, and disable criteria.",
      "Prove automation never fails.",
      "Replace monitoring.",
      "Remove manual fallback.",
    ],
    answer: 0,
    explanation:
      "The register makes failure planning explicit and reviewable.",
  },
];

const checklistItems = [
  "Failure modes are documented before scale.",
  "Stale data is detectable.",
  "Duplicate execution is considered.",
  "Idempotency or duplicate protection exists.",
  "Routing-loop detection exists.",
  "Dependency timeout exists.",
  "Retry limits are bounded.",
  "Partial completion is visible.",
  "Silent failure has health monitoring.",
  "Configuration drift has review triggers.",
  "Approval timeout cannot imply approval.",
  "Evidence gaps are treated as control failures.",
  "False confidence is reduced through health and uncertainty labels.",
  "Optional dependencies can degrade safely.",
  "Authority-sensitive failures stop safely.",
  "Exception queues are defined.",
  "Manual fallback is documented.",
  "Override and disable controls exist.",
  "Recovery evidence is preserved.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Automation failure is normal; unmanaged failure is the real problem.",
  "Stale data, duplicates, routing loops, partial completion, silent failure, and retry storms need different controls.",
  "Optional support can often degrade to manual review, while authority-sensitive decisions should stop.",
  "Idempotency and bounded retry reduce duplicate side effects.",
  "Health monitoring should detect failure rate, exceptions, overrides, latency, stale data, and missing heartbeats.",
  "Evidence gaps can be as serious as action failures because the team loses the ability to reconstruct events.",
  "Configuration drift means working code can still implement outdated assumptions.",
  "Approval timeout should never become implied approval.",
  "Disable criteria and manual fallback make automation resilient when quality degrades.",
  "The Automation Failure Mode Register prepares you for A17.8 Measuring Automation Value.",
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

export default function AutomationFailureModesPage() {
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
              A17.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Automation Failure Modes
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Good automation design assumes that data will become stale,
            dependencies will fail, retries will happen, rules will drift, and
            humans will sometimes need to intervene. This lesson focuses on
            containing those failures before they become cascading problems.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All systems, queues, tickets, failures, alerts, metrics, and
            automation records in this lesson are fictional or synthetic.
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
          lessonTitle="Automation Failure Modes"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.7 Entry Readiness"
          items={[
            "I understand safe scripting boundaries, validation, allowlists, timeouts, and idempotency.",
            "I can explain why automation needs manual fallback and disable criteria.",
            "I understand that different failure types require different containment strategies.",
            "I will use only fictional or synthetic failure scenarios.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Question Is Not Whether Automation Will Fail"
        >
          <p className="leading-8">
            Any sufficiently complex automation will eventually encounter bad
            input, unavailable dependencies, stale data, unexpected state,
            duplicate events, or a rule that no longer matches reality. Mature
            teams do not design as though those conditions are impossible.
          </p>

          <p className="mt-4 leading-8">
            Instead, they decide in advance which failures should degrade to
            manual review, which should pause the workflow, which should trigger
            exception handling, and which should disable the automation
            entirely.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Reliable automation is defined as much by its failure behavior as by its normal behavior.
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
          eyebrow="Failure Families"
          title="Twelve Ways Automation Can Break"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {failureFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.family}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Control: {item.control}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Failure Severity"
          title="Eight Dimensions for Understanding How Bad a Failure Could Become"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {failureDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Lower concern: {item.low}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Higher concern: {item.high}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Containment"
          title="Eight Patterns for Keeping One Failure From Becoming Many"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {containmentPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Use when: {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Outcome: {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Monitoring Signals"
          title="Ten Signals That Automation Health Is Changing"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {detectionSignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Meaning: {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Failure Register"
          title="What a Reviewable Failure Mode Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {registerFields.map((item) => (
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
          eyebrow="Fictional Failure Register"
          title="Eight Northbridge Automation Failure Modes"
        >
          <div className="grid gap-5">
            {northbridgeFailures.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.linked}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.failure}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Cause", item.cause],
                    ["Impact", item.impact],
                    ["Detectability", item.detectability],
                    ["Scope", item.scope],
                    ["Propagation", item.propagation],
                    ["Containment", item.containment],
                    ["Recovery", item.recovery],
                    ["Evidence", item.evidence],
                    ["Owner", item.owner],
                    ["Disable criteria", item.disable],
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
          title="Northbridge Automation Failure Dashboard"
          subtitle="Fictional failure families, containment states, graceful degradation, and evidence-driven recovery"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Approval Timeout Could Have Created an Unauthorized Transition"
          severity="High"
          time="10:22"
          source="Fictional Automation Health Monitor"
          details="FM-707 detected an approval-state design that could interpret reviewer silence as approval for an authority-sensitive workflow branch."
          recommendation="Block the transition, require an explicit approval state, and escalate when the authorized reviewer does not respond."
        />

        <FakeLogPanel
          title="Fictional Automation Failure Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Optional Enrichment Outage"
          question="What is the strongest containment design for FM-704?"
          evidence={[
            "The failed enrichment source is optional.",
            "The base alert remains reviewable.",
            "The workflow can visibly mark the source Unavailable.",
            "Analysts can continue with reduced context.",
            "Source health is monitored.",
          ]}
          options={[
            "Use visible degraded mode and continue to analyst review while the source owner repairs the dependency.",
            "Guess the missing context from old records.",
            "Stop the entire alert queue.",
            "Hide the missing source so analysts are not distracted.",
          ]}
          bestAnswer={0}
          explanation="A nonessential dependency should not become a single point of failure when the workflow can safely degrade to human review."
        />

        <Section
          eyebrow="Common Failure-Handling Mistakes"
          title="Eight Ways Teams Make Failures Worse"
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
          title="Scenario Decision Lab 1 — Optional Dependency Outage"
          scenario="A fictional enrichment service becomes unavailable. The alert itself remains valid and analysts can continue reviewing without that one optional context source."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Missing Human Approval"
          scenario="A fictional high-consequence workflow reaches an approval gate, but the authorized reviewer does not respond before the normal timeout."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Automation Failure Mode Register"
        >
          <p className="leading-8">
            Create a fictional failure register that shows how each automation
            can fail, how the failure is detected, how far it can spread, how it
            is contained, and how normal service is restored safely.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least forty fictional FM records.",
              "Give every record a stable FM ID.",
              "Link each failure to relevant OPP, HITL, ENR, WFA, PRB, and BND IDs.",
              "Name the failure mode.",
              "Describe the trigger or cause.",
              "Describe the likely impact.",
              "Rate detectability.",
              "Rate scope.",
              "Rate reversibility.",
              "Rate propagation risk.",
              "Rate evidence confidence.",
              "Describe business dependency.",
              "Define containment.",
              "Define whether the failure should degrade, pause, or disable.",
              "Define the exception queue or manual fallback.",
              "Define retry behavior.",
              "Define duplicate protection.",
              "Define timeout behavior.",
              "Define reconciliation where needed.",
              "Define recovery steps conceptually.",
              "Define evidence fields.",
              "Assign a remediation owner.",
              "Assign a workflow owner.",
              "Define health signals.",
              "Define disable criteria.",
              "Define re-enable criteria.",
              "Define review cadence.",
              "Define change triggers.",
              "Include at least five stale-data failures.",
              "Include at least five duplicate-execution failures.",
              "Include at least five routing or state-loop failures.",
              "Include at least five dependency failures.",
              "Include at least five partial-completion failures.",
              "Include at least five silent-failure or evidence-gap failures.",
              "Include at least five configuration-drift failures.",
              "Include at least five approval or authority failures.",
              "Include at least five retry-storm scenarios.",
              "Include at least five graceful-degradation examples.",
              "Include at least five hard-stop examples.",
              "Include at least three examples where a workflow should be disabled until evidence quality is restored.",
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
              Use fictional alerts, tickets, dependencies, queues, failures,
              metrics, and recovery records only. Do not intentionally disrupt,
              overload, probe, or test failure conditions against real systems.
              Keep all analysis conceptual, synthetic, and defensive.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Approval Failure"
          question="What is the strongest containment for FM-707?"
          evidence={[
            "The decision is high consequence.",
            "The reviewer has explicit authority.",
            "No approval response was received.",
            "The workflow can pause and escalate.",
            "Automation confidence is not the same as authorization.",
          ]}
          options={[
            "Pause, escalate, and require explicit authorized approval before the workflow advances.",
            "Treat timeout as approval.",
            "Use the automation confidence score instead of approval.",
            "Let any available user approve.",
          ]}
          bestAnswer={0}
          explanation="Authority-sensitive workflow branches should fail closed to pause when explicit human approval is missing."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Automation Resilience Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide resilience standard that
            defines how automation should detect, contain, recover from, and
            learn from failure without creating cascading problems.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Failure taxonomy",
              "Impact rating",
              "Detectability rating",
              "Scope rating",
              "Propagation rating",
              "Reversibility",
              "Evidence confidence",
              "Graceful degradation criteria",
              "Hard-stop criteria",
              "Exception queues",
              "Retry limits",
              "Idempotency",
              "Timeouts",
              "Circuit-breaker behavior",
              "Reconciliation",
              "Health metrics",
              "Disable criteria",
              "Recovery evidence",
              "Re-enable criteria",
              "Post-failure review",
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
            The standard should help teams decide when automation may continue
            with reduced capability, when it must pause, and when it should be
            disabled entirely.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.7 Mini Quiz: Automation Failure Modes"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Automation Failure Mode Register"
          prompt="Create the seventh artifact for your A17 Safe Automation Design and Governance Plan: a fictional Automation Failure Mode Register with at least forty records. Include FM ID, linked OPP/HITL/ENR/WFA/PRB/BND IDs, failure mode, trigger/cause, impact, detectability, scope, reversibility, propagation risk, evidence confidence, business dependency, containment, degrade/pause/disable decision, manual fallback, retry behavior, duplicate protection, timeout, reconciliation, recovery, evidence, remediation owner, workflow owner, health signals, disable criteria, re-enable criteria, review cadence, and change triggers."
          tips={[
            "Assume automation can fail in multiple ways.",
            "Separate optional dependency failure from authority-sensitive failure.",
            "Use bounded retry and duplicate protection.",
            "Make partial completion visible.",
            "Treat evidence loss as a control problem.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.8?"
        >
          <p className="leading-8">
            A17.8 focuses on Measuring Automation Value. Before continuing, make
            sure you can explain how quality metrics should include failure,
            exception, override, stale-data, and fallback behavior—not just
            speed or action count.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify major automation failure families.",
              "I can choose between graceful degradation, pause, exception review, and disable.",
              "I can explain retry storms, idempotency, and partial completion.",
              "I can explain why approval failure and evidence gaps are serious control issues.",
              "I can design failure metrics that support later value measurement.",
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
          title="How to Make the Automation Failure Mode Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Describe the failure precisely",
                detail:
                  "Avoid vague labels like 'automation error.' Name the actual failure mechanism.",
              },
              {
                title: "Show propagation",
                detail:
                  "A stale field may affect routing, SLA ownership, escalation, and reporting downstream.",
              },
              {
                title: "Show containment",
                detail:
                  "Explain how the workflow prevents one failure from spreading.",
              },
              {
                title: "Show detectability",
                detail:
                  "Failures that look normal can be more dangerous than obvious errors.",
              },
              {
                title: "Show recovery",
                detail:
                  "Explain how the workflow returns to a known-good state after containment.",
              },
              {
                title: "Show disable criteria",
                detail:
                  "Automation should stop when continued operation creates more risk than manual fallback.",
              },
              {
                title: "Show evidence",
                detail:
                  "Preserve versions, state changes, exceptions, retry counts, overrides, and owner decisions.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.8 will convert these health and failure signals into a balanced Automation Value Scorecard.",
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
            A17.7 failure analysis remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not intentionally trigger outages, overload, retry storms,
            routing loops, or other failure conditions against real systems.
            Do not probe or disrupt live services. All failure analysis in this
            lesson should use synthetic records, fictional dependencies, and
            conceptual defensive reasoning only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.7 Automation Failure Modes Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for stale data, duplicates, loops,
            outages, partial completion, silent failure, configuration drift,
            approval failure, retry storms, evidence gaps, containment, recovery,
            health monitoring, and disable criteria. Next, A17.8 focuses on
            Measuring Automation Value.
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