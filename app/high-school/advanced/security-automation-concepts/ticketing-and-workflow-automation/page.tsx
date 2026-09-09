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
const previousLesson = `${modulePath}/alert-enrichment-concepts`;
const nextLesson = `${modulePath}/playbooks-and-runbooks`;

const objectives = [
  "Explain how defensive ticketing and workflow automation can create, enrich, assign, update, escalate, deduplicate, and track work without making unsafe response decisions.",
  "Design workflow states, ownership transitions, routing logic, service-level reminders, evidence attachment, duplicate handling, and exception queues that remain reviewable and reversible.",
  "Evaluate workflow quality using routing accuracy, stale-ticket rate, reassignment rate, evidence completeness, queue age, exception rate, duplicate rate, and analyst override rather than raw ticket volume alone.",
  "Recognize failure modes such as routing loops, duplicate-ticket storms, stale ownership, silent status changes, missing evidence, closed-without-review records, and automation that outruns human authority.",
  "Build a Ticketing and Workflow Automation Map that becomes the fourth artifact in the A17 Safe Automation Design and Governance Plan.",
];

const workflowStages = [
  {
    stage: "Intake",
    purpose:
      "Receive the synthetic alert or work item and verify that the minimum required fields are present.",
    automation:
      "Normalize IDs, timestamps, source references, and workflow category.",
    human:
      "Review only when required fields are missing or the category is ambiguous.",
    evidence:
      "Source ID, intake time, normalized category, validation state.",
  },
  {
    stage: "Enrichment",
    purpose:
      "Attach the approved context from A17.3 without turning enrichment into a final disposition.",
    automation:
      "Add source-attributed operational context, freshness, and missing-data states.",
    human:
      "Interpret the evidence and resolve material conflicts.",
    evidence:
      "Enrichment source, timestamp, confidence, stale/missing state.",
  },
  {
    stage: "Ticket creation",
    purpose:
      "Create a consistent work record when the approved creation rule is met.",
    automation:
      "Create the fictional ticket, preserve alert references, and populate required fields.",
    human:
      "Validate ambiguous matches or creation exceptions.",
    evidence:
      "Ticket ID, creation rule, linked alert IDs, creation timestamp.",
  },
  {
    stage: "Routing and assignment",
    purpose:
      "Send the work to the correct fictional queue or owner using current routing rules.",
    automation:
      "Assign by service, detection family, or approved ownership mapping.",
    human:
      "Override incorrect routing and record the reason.",
    evidence:
      "Routing rule version, assigned queue, previous queue, override history.",
  },
  {
    stage: "Review",
    purpose:
      "Give the analyst a complete and understandable evidence package.",
    automation:
      "Present enrichment, related records, ownership, SLA, and workflow history.",
    human:
      "Interpret evidence and decide the appropriate governed next step.",
    evidence:
      "Analyst, review start time, evidence version, disposition rationale.",
  },
  {
    stage: "Escalation",
    purpose:
      "Move work when age, uncertainty, authority, or impact requires another role.",
    automation:
      "Notify the approved escalation role and package the current evidence.",
    human:
      "Accept escalation, request more evidence, or reassign within authority.",
    evidence:
      "Trigger, escalation time, receiving role, decision rationale.",
  },
  {
    stage: "Closure",
    purpose:
      "Close the fictional work item only when required evidence and ownership criteria are satisfied.",
    automation:
      "Validate required fields and mark candidate-for-closure.",
    human:
      "Confirm closure when judgment or accountability is required.",
    evidence:
      "Closure criteria, reviewer, closure time, residual issue state.",
  },
  {
    stage: "Reopen / review trigger",
    purpose:
      "Bring closed or monitored work back into review when material context changes.",
    automation:
      "Detect approved change triggers and create a linked follow-up item.",
    human:
      "Determine whether the original decision still holds.",
    evidence:
      "Trigger source, new evidence, linked ticket, review owner.",
  },
];

const routingPrinciples = [
  {
    principle: "Route by current ownership",
    explanation:
      "Use a maintained fictional ownership source rather than old ticket history when deciding the initial queue.",
    failure:
      "Stale ownership repeatedly sends work to the wrong team.",
  },
  {
    principle: "Preserve original context",
    explanation:
      "Routing should move responsibility without losing the original alert, enrichment, or source references.",
    failure:
      "Reassignment strips evidence and forces the next analyst to start over.",
  },
  {
    principle: "Make override visible",
    explanation:
      "Analysts need a governed way to correct incorrect routing and record the reason.",
    failure:
      "The ticket bounces between teams with no explanation.",
  },
  {
    principle: "Avoid routing loops",
    explanation:
      "Detect repeated back-and-forth assignment and move the item to an exception owner.",
    failure:
      "Two queues repeatedly reassign the same work to each other.",
  },
  {
    principle: "Use fallback queues",
    explanation:
      "When ownership is unknown, send work to a defined review queue instead of guessing.",
    failure:
      "The workflow invents an owner based on weak similarity.",
  },
  {
    principle: "Escalate by rule, not panic",
    explanation:
      "Use documented age, impact, or authority triggers for escalation.",
    failure:
      "Every old ticket is escalated to leadership regardless of context.",
  },
  {
    principle: "Keep assignment reversible",
    explanation:
      "Low-impact workflow routing should be easy to correct without losing evidence.",
    failure:
      "A wrong assignment locks the record or duplicates it.",
  },
  {
    principle: "Review routing metrics",
    explanation:
      "Reassignment rate, loop rate, unowned age, and override reasons should inform workflow maintenance.",
    failure:
      "Bad routing continues because no one measures it.",
  },
];

const duplicateHandling = [
  {
    case: "Exact duplicate alert",
    signals:
      "Same synthetic alert fingerprint, source, asset, category, and time window.",
    safeAction:
      "Link to the existing ticket and preserve all source alert IDs.",
    analystRole:
      "Separate the records if business context shows they are not actually equivalent.",
  },
  {
    case: "Likely duplicate",
    signals:
      "Strong similarity but one or more fields differ.",
    safeAction:
      "Present a possible-match suggestion rather than merging automatically.",
    analystRole:
      "Confirm whether one ticket can represent the work.",
  },
  {
    case: "Related but distinct",
    signals:
      "Same service or category but different evidence or impact.",
    safeAction:
      "Cross-link the records while keeping separate tickets.",
    analystRole:
      "Review shared context without losing separate accountability.",
  },
  {
    case: "Duplicate creation storm",
    signals:
      "Many tickets created from the same underlying synthetic event because the deduplication rule failed.",
    safeAction:
      "Pause the creation rule, route to maintenance review, and preserve all generated IDs.",
    analystRole:
      "Determine which records should remain active and what rule needs correction.",
  },
  {
    case: "Old closed ticket match",
    signals:
      "A new alert resembles a historical closed item.",
    safeAction:
      "Reference the old ticket as context; do not automatically reopen or merge.",
    analystRole:
      "Decide whether the new evidence represents recurrence or a separate issue.",
  },
  {
    case: "Conflicting ticket matches",
    signals:
      "More than one open ticket appears relevant.",
    safeAction:
      "Show candidate tickets and require analyst confirmation.",
    analystRole:
      "Select the correct linkage or keep the new record separate.",
  },
];

const statusModel = [
  {
    status: "New",
    meaning:
      "The work item exists but has not yet completed initial enrichment and assignment.",
    exit:
      "Required intake validation succeeds.",
  },
  {
    status: "Enriching",
    meaning:
      "Approved context sources are being queried or evaluated.",
    exit:
      "Essential enrichment is complete or the safe degraded path is invoked.",
  },
  {
    status: "Ready for Review",
    meaning:
      "The evidence package is available and the ticket has an owner.",
    exit:
      "An analyst begins review.",
  },
  {
    status: "In Review",
    meaning:
      "A human is interpreting evidence and determining the governed next step.",
    exit:
      "Decision, escalation, more-evidence request, or closure candidate.",
  },
  {
    status: "Waiting on Evidence",
    meaning:
      "The analyst needs additional approved context before deciding.",
    exit:
      "Evidence arrives, times out, or escalates.",
  },
  {
    status: "Escalated",
    meaning:
      "The item requires higher authority, specialized context, or another team.",
    exit:
      "Receiving reviewer accepts ownership or sends back with rationale.",
  },
  {
    status: "Candidate for Closure",
    meaning:
      "Automated checks indicate the record may satisfy closure criteria.",
    exit:
      "Authorized review confirms closure or returns to In Review.",
  },
  {
    status: "Closed",
    meaning:
      "The required decision and evidence are complete under the fictional workflow.",
    exit:
      "Material change or new evidence triggers a linked follow-up review.",
  },
];

const workflowEvidenceFields = [
  {
    field: "WFA ID",
    purpose:
      "Stable identifier for the automated workflow rule or transition.",
    example:
      "WFA-401",
  },
  {
    field: "Linked records",
    purpose:
      "Connects the workflow to OPP, HITL, and ENR evidence.",
    example:
      "OPP-102 / HITL-205 / ENR-305",
  },
  {
    field: "Trigger",
    purpose:
      "Defines the condition that starts the workflow step.",
    example:
      "Validated synthetic alert with no matching open ticket",
  },
  {
    field: "Current state",
    purpose:
      "Shows the workflow status before automation acts.",
    example:
      "Ready for Review",
  },
  {
    field: "Automation action",
    purpose:
      "Defines the bounded ticketing or workflow support step.",
    example:
      "Create ticket and assign approved queue",
  },
  {
    field: "Next state",
    purpose:
      "Shows the expected state after successful completion.",
    example:
      "Ready for Review",
  },
  {
    field: "Human role",
    purpose:
      "Defines the analyst or owner judgment that remains.",
    example:
      "Validate routing and interpret evidence",
  },
  {
    field: "Failure state",
    purpose:
      "Defines what happens when the action cannot complete safely.",
    example:
      "Exception Queue",
  },
  {
    field: "Override",
    purpose:
      "Defines how an analyst corrects routing, grouping, or status.",
    example:
      "Reassign with reason code",
  },
  {
    field: "Evidence",
    purpose:
      "Defines the metadata needed to reconstruct the workflow behavior.",
    example:
      "Rule version, timestamp, previous/next state, owner, exception",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional operational owner for the workflow.",
    example:
      "SOC Workflow Owner",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the automation design.",
    example:
      "Reassignment spike, loop detection, schema change, stale ownership",
  },
];

const northbridgeWorkflow = [
  {
    id: "WFA-401",
    linked:
      "OPP-102 / HITL-205 / ENR-305",
    trigger:
      "Validated synthetic alert with no matching open ticket",
    current:
      "New",
    action:
      "Create a fictional ticket and attach source alert references.",
    next:
      "Enriching",
    human:
      "Analyst later validates context and disposition.",
    fallback:
      "If creation fails, send record to Ticket Creation Exception queue.",
    override:
      "Analyst can manually create a replacement ticket and link the failed record.",
    evidence:
      "Ticket ID, creation rule, source alert IDs, creation timestamp",
    owner:
      "SOC Workflow Owner",
    state:
      "Approved",
  },
  {
    id: "WFA-402",
    linked:
      "OPP-102 / HITL-205 / ENR-301 / ENR-302",
    trigger:
      "Ticket exists and current ownership enrichment is available",
    current:
      "Enriching",
    action:
      "Assign the approved fictional queue using service ownership.",
    next:
      "Ready for Review",
    human:
      "Analyst confirms routing is appropriate.",
    fallback:
      "Use General Security Review queue when ownership is missing.",
    override:
      "Reassign with reason code.",
    evidence:
      "Routing rule, queue, owner source, timestamp, override history",
    owner:
      "SOC Workflow Owner",
    state:
      "Approved",
  },
  {
    id: "WFA-403",
    linked:
      "OPP-103 / HITL-202 / ENR-304",
    trigger:
      "A new synthetic alert strongly matches an open-ticket fingerprint",
    current:
      "New",
    action:
      "Suggest linking the alert to the existing ticket.",
    next:
      "Ready for Review",
    human:
      "Analyst confirms duplicate linkage when similarity is not exact.",
    fallback:
      "Create a separate ticket if confidence is below the approved threshold.",
    override:
      "Analyst separates linked records.",
    evidence:
      "Match rule, confidence, candidate ticket ID, analyst confirmation",
    owner:
      "Detection Operations Owner",
    state:
      "Conditional",
  },
  {
    id: "WFA-404",
    linked:
      "OPP-104 / HITL-203 / ENR-307",
    trigger:
      "Ticket reaches analyst review with an approved category",
    current:
      "Ready for Review",
    action:
      "Attach recommended playbook reference and evidence completeness summary.",
    next:
      "In Review",
    human:
      "Analyst selects, rejects, or changes the recommended playbook.",
    fallback:
      "Show general triage guidance if the category is unclear.",
    override:
      "Analyst selects another approved playbook.",
    evidence:
      "Playbook version, recommendation reason, analyst choice",
    owner:
      "Incident Response Process Owner",
    state:
      "Decision Support",
  },
  {
    id: "WFA-405",
    linked:
      "OPP-106 / HITL-206 / ENR-306",
    trigger:
      "Ticket age exceeds the fictional SLA threshold without review",
    current:
      "Ready for Review",
    action:
      "Send reminder and notify the queue owner.",
    next:
      "Ready for Review",
    human:
      "Queue owner decides whether reassignment or escalation is needed.",
    fallback:
      "Create an escalation-review item if the queue owner is unavailable.",
    override:
      "Owner can document a justified extension.",
    evidence:
      "Age, threshold, reminder time, owner response, extension reason",
    owner:
      "SOC Workflow Owner",
    state:
      "Monitor",
  },
  {
    id: "WFA-406",
    linked:
      "HITL-204",
    trigger:
      "High-consequence decision requires authorized review",
    current:
      "In Review",
    action:
      "Package current evidence and route to the Incident Response Lead.",
    next:
      "Escalated",
    human:
      "Authorized reviewer makes the decision.",
    fallback:
      "Pause in Escalation Exception queue when approver is unavailable.",
    override:
      "No automated bypass of the approval gate.",
    evidence:
      "Trigger, evidence version, reviewer, timestamp, final rationale",
    owner:
      "Incident Response Lead",
    state:
      "Human Required",
  },
  {
    id: "WFA-407",
    linked:
      "OPP-106 / HITL-206",
    trigger:
      "Routing loop detected between two fictional queues",
    current:
      "Ready for Review",
    action:
      "Stop automatic reassignment and move the ticket to Workflow Exception Review.",
    next:
      "Waiting on Evidence",
    human:
      "Workflow owner resolves ownership and corrects the routing rule.",
    fallback:
      "Keep the ticket visible and unclosed until ownership is resolved.",
    override:
      "Workflow owner assigns manually after review.",
    evidence:
      "Queue history, loop count, rule versions, owner decision",
    owner:
      "Security Platform Owner",
    state:
      "Exception",
  },
  {
    id: "WFA-408",
    linked:
      "OPP-106 / HITL-206",
    trigger:
      "Closure criteria appear satisfied",
    current:
      "In Review",
    action:
      "Mark the fictional ticket Candidate for Closure and validate required fields.",
    next:
      "Candidate for Closure",
    human:
      "Authorized analyst confirms closure when judgment is required.",
    fallback:
      "Return to In Review if required evidence is missing.",
    override:
      "Analyst can reject closure and document the gap.",
    evidence:
      "Closure checklist, reviewer, evidence completeness, closure time",
    owner:
      "SOC Workflow Owner",
    state:
      "Approval Gated",
  },
];

const dashboardMetrics = [
  {
    label: "Workflow rules",
    value: "8",
    note: "Creation, routing, duplicate handling, guidance, reminders, escalation, loop handling, and closure",
  },
  {
    label: "Automated support",
    value: "5",
    note: "Most rules create or move work without making the final security decision",
  },
  {
    label: "Human-gated decisions",
    value: "2",
    note: "High-consequence escalation and closure confirmation preserve accountability",
  },
  {
    label: "Exception rule",
    value: "1",
    note: "Routing loops stop automatically and move to manual ownership review",
  },
];

const logs = [
  "[08:10] WFA-401 action=CREATE_TICKET current=NEW next=ENRICHING state=SUCCESS",
  "[08:32] WFA-402 action=ROUTE_QUEUE owner_source=CURRENT next=READY_FOR_REVIEW state=SUCCESS",
  "[08:54] WFA-403 action=DUPLICATE_SUGGESTION confidence=0.86 analyst_confirm=REQUIRED state=CONDITIONAL",
  "[09:16] WFA-404 action=ATTACH_PLAYBOOK execute_response=NO next=IN_REVIEW state=DECISION_SUPPORT",
  "[09:38] WFA-405 action=SLA_REMINDER age=THRESHOLD queue_owner=NOTIFIED state=MONITOR",
  "[10:00] WFA-406 action=ESCALATE_TO_AUTHORITY automated_decision=NO state=HUMAN_REQUIRED",
  "[10:22] WFA-407 action=STOP_ROUTING_LOOP next=WAITING_ON_EVIDENCE state=EXCEPTION",
  "[10:44] WFA-408 action=CLOSURE_CANDIDATE analyst_confirm=REQUIRED state=APPROVAL_GATED",
];

const failureModes = [
  {
    mode: "Routing loop",
    symptom:
      "The same ticket bounces repeatedly between two or more queues.",
    safeResponse:
      "Stop automatic reassignment and move the record to a workflow exception owner.",
  },
  {
    mode: "Duplicate-ticket storm",
    symptom:
      "One event causes many tickets because deduplication or idempotency failed.",
    safeResponse:
      "Pause ticket creation, preserve generated IDs, and open a maintenance review.",
  },
  {
    mode: "Stale ownership",
    symptom:
      "Tickets are routed using an old team mapping.",
    safeResponse:
      "Mark ownership enrichment stale and use the fallback review queue.",
  },
  {
    mode: "Silent status transition",
    symptom:
      "The ticket moves states without recording why or under which rule.",
    safeResponse:
      "Require previous state, next state, trigger, rule version, and timestamp in evidence.",
  },
  {
    mode: "Closed without evidence",
    symptom:
      "Automation closes work because a timer expired or a field changed.",
    safeResponse:
      "Use Candidate for Closure and require the approved evidence or human confirmation.",
  },
  {
    mode: "Stuck waiting state",
    symptom:
      "A ticket waits forever on a dependency or owner who is unavailable.",
    safeResponse:
      "Use timeout, reminder, escalation, and alternate-owner rules.",
  },
  {
    mode: "Over-escalation",
    symptom:
      "The system escalates too many routine items because thresholds are too broad.",
    safeResponse:
      "Review age, impact, and exception evidence and tune the escalation rule.",
  },
  {
    mode: "Workflow outruns authority",
    symptom:
      "A ticket transition is treated as permission for a consequential response decision.",
    safeResponse:
      "Separate administrative workflow state from human decision authority.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Route the ticket using the current ownership source, preserve the evidence, and send missing ownership to the General Security Review queue.",
    outcome:
      "Best. The workflow uses current data and a safe fallback instead of guessing.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Guess the queue from the last ticket involving a similar asset.",
    outcome:
      "Risky. Historical similarity is not reliable ownership evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Leave the ticket unassigned indefinitely until ownership data returns.",
    outcome:
      "Caution. A visible fallback queue is safer than creating an orphaned work item.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Stop automatic reassignment, move the ticket to Workflow Exception Review, and have the owner resolve the routing rule.",
    outcome:
      "Best. The automation detects that its own routing logic is failing and moves to a controlled fallback.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep reassigning until one team accepts the ticket.",
    outcome:
      "Risky. That creates an uncontrolled routing loop and hides the governance problem.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Close the ticket because neither team accepts ownership.",
    outcome:
      "Risky. Lack of ownership is not closure evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is a strong use of ticketing automation?",
    choices: [
      "Create, enrich, assign, update, remind, and track work while preserving human judgment for consequential decisions.",
      "Automatically make every response decision.",
      "Hide reassignment history.",
      "Close any old ticket automatically.",
    ],
    answer: 0,
    explanation:
      "Ticketing automation is strongest when it supports workflow consistency without replacing judgment or authority.",
  },
  {
    question:
      "What is the strongest fallback when ownership is missing?",
    choices: [
      "Send the ticket to a defined general review queue and mark ownership as missing.",
      "Guess from an old ticket.",
      "Leave it unassigned forever.",
      "Close it.",
    ],
    answer: 0,
    explanation:
      "A visible fallback queue preserves accountability without inventing ownership.",
  },
  {
    question:
      "What should happen when two queues keep reassigning the same ticket?",
    choices: [
      "Stop automatic routing and move the ticket to workflow exception review.",
      "Keep reassigning until someone accepts it.",
      "Delete the ticket.",
      "Create a duplicate ticket for each queue.",
    ],
    answer: 0,
    explanation:
      "Loop detection should move the workflow into a safe manual-resolution state.",
  },
  {
    question:
      "What is strongest for likely-but-not-certain duplicate tickets?",
    choices: [
      "Suggest a match and require analyst confirmation before merging or linking.",
      "Merge automatically.",
      "Delete the older ticket.",
      "Ignore the similarity.",
    ],
    answer: 0,
    explanation:
      "Ambiguous duplicate handling benefits from human confirmation.",
  },
  {
    question:
      "Why is Candidate for Closure safer than automatic closure in some workflows?",
    choices: [
      "It allows automation to validate administrative criteria while preserving human confirmation where judgment or accountability is required.",
      "It makes closure slower for no reason.",
      "It removes evidence requirements.",
      "It means tickets can never close.",
    ],
    answer: 0,
    explanation:
      "Closure often combines mechanical checks with accountable judgment.",
  },
  {
    question:
      "Which metric is most useful for routing quality?",
    choices: [
      "Reassignment rate and override reasons.",
      "Total number of tickets only.",
      "Number of workflow buttons.",
      "Number of analysts.",
    ],
    answer: 0,
    explanation:
      "Reassignment and override patterns reveal whether routing logic is actually working.",
  },
  {
    question:
      "What is the purpose of the Ticketing and Workflow Automation Map?",
    choices: [
      "Document triggers, states, bounded actions, human roles, fallback, overrides, evidence, ownership, and review triggers for each workflow step.",
      "Replace human review.",
      "Automate unsafe environment changes.",
      "Maximize ticket volume.",
    ],
    answer: 0,
    explanation:
      "The map makes safe workflow behavior explicit and reviewable.",
  },
];

const checklistItems = [
  "Every workflow rule has a clear trigger.",
  "Current and next states are documented.",
  "Ticket creation preserves source references.",
  "Routing uses current ownership data.",
  "Fallback queues are defined.",
  "Routing loops are detectable.",
  "Duplicate handling preserves original records.",
  "Likely duplicates can require analyst confirmation.",
  "Status changes are attributable.",
  "Human judgment remains explicit.",
  "Escalation authority is documented.",
  "SLA reminders do not make final decisions.",
  "Waiting states have timeouts.",
  "Closure criteria are evidence-based.",
  "Candidate-for-closure is used where human confirmation matters.",
  "Override is available.",
  "Override reasons are recorded.",
  "Workflow evidence includes rule version and timestamps.",
  "Review triggers are defined.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Ticketing automation should organize defensive work without turning workflow state into response authority.",
  "Strong workflow design separates intake, enrichment, creation, routing, review, escalation, closure, and reopen triggers.",
  "Current ownership and safe fallback queues reduce orphaned or misrouted work.",
  "Duplicate handling should preserve source records and use human confirmation when similarity is uncertain.",
  "Routing loops are a workflow failure and should trigger exception review rather than endless reassignment.",
  "Status transitions need evidence: trigger, prior state, next state, rule version, time, and owner.",
  "SLA automation should remind and escalate according to governed rules rather than force premature decisions.",
  "Candidate for Closure is useful when mechanical checks can be automated but accountability still belongs to a person.",
  "Workflow metrics such as reassignment, stale-ticket age, exception rate, duplicate rate, and evidence completeness reveal quality better than ticket count alone.",
  "The Ticketing and Workflow Automation Map prepares you for A17.5 Playbooks and Runbooks.",
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

export default function TicketingAndWorkflowAutomationPage() {
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
              A17.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Ticketing and Workflow Automation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Ticketing automation can make defensive work easier to find, assign,
            review, escalate, and measure. The strongest workflows improve
            consistency without confusing administrative state changes with
            security decision authority.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All tickets, alerts, queues, SLAs, owners, evidence, and workflow
            states in this lesson are fictional or synthetic.
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
          lessonTitle="Ticketing and Workflow Automation"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.4 Entry Readiness"
          items={[
            "I can explain how enrichment supports analysts without making final decisions.",
            "I can distinguish ticket state from decision authority.",
            "I understand why routing and duplicate handling need override and fallback.",
            "I will use only fictional or synthetic workflow records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Ticket Is a Work Record, Not a Decision"
        >
          <p className="leading-8">
            A workflow may create a ticket, assign it to a queue, attach
            enrichment, set a review deadline, and notify an owner. None of those
            steps automatically determine whether an alert is important or what
            a real-world response should be.
          </p>

          <p className="mt-4 leading-8">
            This distinction matters because administrative automation is often
            safe and valuable. It becomes risky when a state transition such as
            “Escalated” or “Closed” is treated as authority for a consequential
            action without evidence or human judgment.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Workflow automation should move the work—not silently make the security decision.
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
          eyebrow="Workflow Lifecycle"
          title="Eight Stages of a Defensive Ticket Workflow"
        >
          <div className="grid gap-5">
            {workflowStages.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.stage}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.purpose}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Automation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.automation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Human
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.human}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Routing"
          title="Eight Principles for Safe Assignment and Ownership"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {routingPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.principle}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Failure mode: {item.failure}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Duplicate Handling"
          title="Duplicate, Related, and Similar Are Not the Same"
        >
          <p className="leading-8">
            Deduplication can reduce queue noise, but aggressive merging can
            destroy context or hide distinct work. The workflow should match its
            confidence level to the action it takes.
          </p>

          <div className="mt-6 grid gap-5">
            {duplicateHandling.map((item) => (
              <article
                key={item.case}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.case}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Signals
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white">
                      {item.signals}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Safe workflow action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.safeAction}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Analyst role
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.analystRole}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Status Model"
          title="Eight States That Keep Workflow Progress Understandable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {statusModel.map((item) => (
              <article
                key={item.status}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.status}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Exit condition: {item.exit}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="SLA and Escalation"
          title="Reminders Should Support Ownership, Not Override Judgment"
        >
          <p className="leading-8">
            A service-level target can help teams manage age and workload, but
            the workflow should distinguish between reminding an owner,
            escalating stale work, and making a substantive security decision.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Reminder",
                detail:
                  "Notify the current owner that the review deadline is approaching.",
              },
              {
                title: "Escalation",
                detail:
                  "Notify a higher or alternate owner when defined age, authority, or impact conditions are met.",
              },
              {
                title: "Extension",
                detail:
                  "Allow a documented exception when more evidence or approved maintenance justifies additional time.",
              },
              {
                title: "No-response fallback",
                detail:
                  "Move the work to a review queue or alternate owner instead of treating silence as approval.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Workflow Evidence"
          title="What a Reviewable Automation Rule Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {workflowEvidenceFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Workflow Map"
          title="Eight Northbridge Ticketing and Workflow Rules"
        >
          <div className="grid gap-5">
            {northbridgeWorkflow.map((item) => (
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
                  {item.action}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Trigger", item.trigger],
                    ["Current state", item.current],
                    ["Next state", item.next],
                    ["Human role", item.human],
                    ["Fallback", item.fallback],
                    ["Override", item.override],
                    ["Evidence", item.evidence],
                    ["Owner", item.owner],
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
          title="Northbridge Ticketing and Workflow Dashboard"
          subtitle="Fictional routing, duplicate handling, escalation, exception, and closure-support summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Routing Loop Detected Between Two Queues"
          severity="High"
          time="10:22"
          source="Fictional Workflow Health Monitor"
          details="WFA-407 detected repeated reassignment between two fictional queues. Continued automatic routing would increase delay and hide the ownership problem."
          recommendation="Stop automatic reassignment, move the ticket to Workflow Exception Review, and require the workflow owner to resolve the routing rule."
        />

        <FakeLogPanel
          title="Fictional Ticketing and Workflow Automation Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Missing Ownership"
          question="What is the strongest routing behavior when the current ownership source has no valid value?"
          evidence={[
            "The ticket itself is valid.",
            "The ownership enrichment is missing.",
            "A General Security Review queue exists.",
            "Historical tickets may contain stale ownership.",
            "The analyst can later reassign the ticket with a reason.",
          ]}
          options={[
            "Send the ticket to the General Security Review queue, mark ownership missing, and preserve analyst reassignment.",
            "Guess the queue from the latest historical ticket.",
            "Leave the ticket unassigned indefinitely.",
            "Close the ticket because routing failed.",
          ]}
          bestAnswer={0}
          explanation="A defined fallback queue keeps the work visible and owned without inventing uncertain routing information."
        />

        <Section
          eyebrow="Failure Modes"
          title="Eight Ways Ticket Automation Can Break"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {failureModes.map((item) => (
              <article
                key={item.mode}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.mode}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Symptom: {item.symptom}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Safe response: {item.safeResponse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Unknown Queue Ownership"
          scenario="A fictional ticket is created successfully, but the current ownership source returns no valid queue. An old ticket from six months ago names a team that may no longer own the service."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Routing Loop"
          scenario="A fictional ticket has been automatically reassigned between two queues four times because each routing rule sends it back to the other team."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Ticketing and Workflow Automation Map"
        >
          <p className="leading-8">
            Design fictional ticketing rules that create, enrich, route, remind,
            escalate, deduplicate, and close work safely while preserving human
            judgment, evidence, override, and exception handling.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty-five fictional WFA records.",
              "Give every record a stable WFA ID.",
              "Link each rule to relevant OPP, HITL, and ENR IDs.",
              "Name the workflow trigger.",
              "Record the current state.",
              "Describe the bounded automation action.",
              "Record the next state.",
              "Describe the required human role.",
              "Define assignment ownership.",
              "Define routing source and freshness.",
              "Define fallback queue behavior.",
              "Define duplicate handling.",
              "Define likely-duplicate review.",
              "Define related-but-distinct handling.",
              "Define SLA reminder behavior.",
              "Define escalation trigger.",
              "Define no-response fallback.",
              "Define waiting-state timeout.",
              "Define closure criteria.",
              "Define when Candidate for Closure is used.",
              "Define reopen triggers.",
              "Define analyst override.",
              "Define override reason capture.",
              "Define exception queues.",
              "Define routing-loop detection.",
              "Define duplicate-storm handling.",
              "Define evidence fields.",
              "Name the workflow owner.",
              "Define review cadence.",
              "Define change triggers.",
              "Include at least eight ticket-creation or enrichment transitions.",
              "Include at least eight routing or assignment transitions.",
              "Include at least five duplicate-handling rules.",
              "Include at least five SLA/reminder/escalation rules.",
              "Include at least five exception or fallback rules.",
              "Include at least five closure/reopen rules.",
              "Include at least three routing-loop examples.",
              "Include at least three stale-ownership examples.",
              "Include at least three closed-without-evidence examples that are redesigned safely.",
              "Include at least three rules where automation prepares work but a human makes the consequential decision.",
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
              Use fictional alerts, tickets, queues, owners, SLAs, workflow
              states, and evidence only. Do not connect to real ticketing
              platforms, production security tools, networks, endpoints, cloud
              accounts, credentials, or live response systems. Do not automate
              destructive, exploitative, credential-related, bypass, or
              unauthorized actions.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Routing Loop"
          question="What is the strongest design when the workflow detects repeated back-and-forth assignment?"
          evidence={[
            "The ticket has moved between two queues four times.",
            "Both routing rules are operating as configured.",
            "Neither team accepts ownership.",
            "A workflow exception queue exists.",
            "The workflow owner can correct the routing table.",
          ]}
          options={[
            "Stop automatic reassignment, move the ticket to Workflow Exception Review, and require the owner to resolve the routing rule.",
            "Continue routing until a queue accepts the ticket.",
            "Close the ticket because ownership is unclear.",
            "Create a duplicate ticket for each team.",
          ]}
          bestAnswer={0}
          explanation="The automation should recognize its own failure mode and move to a safe human-owned exception state."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Workflow Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for ticket creation,
            routing, duplicate handling, status transitions, reminders,
            escalation, exception queues, closure, and review.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Ticket creation criteria",
              "Source alert preservation",
              "Routing data source",
              "Fallback queue",
              "Assignment override",
              "Routing-loop detection",
              "Duplicate confidence",
              "Likely-duplicate confirmation",
              "Related-record linking",
              "Status-transition evidence",
              "SLA reminders",
              "Escalation criteria",
              "Waiting-state timeout",
              "No-response fallback",
              "Candidate-for-closure criteria",
              "Human closure authority",
              "Reopen triggers",
              "Exception queues",
              "Workflow metrics",
              "Change review",
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
            The strongest standard should keep administrative automation
            efficient while preserving human judgment, authority, evidence, and
            exception handling.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.4 Mini Quiz: Ticketing and Workflow Automation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Ticketing and Workflow Automation Map"
          prompt="Create the fourth artifact for your A17 Safe Automation Design and Governance Plan: a fictional Ticketing and Workflow Automation Map with at least thirty-five records. Include WFA ID, linked OPP/HITL/ENR IDs, trigger, current state, bounded automation action, next state, human role, routing source, assignment owner, fallback queue, duplicate handling, SLA/reminder behavior, escalation, waiting timeout, closure criteria, reopen trigger, override, override reason, exception queue, evidence, workflow owner, review cadence, and change triggers."
          tips={[
            "Treat a ticket as a work record, not a security decision.",
            "Preserve original alert and evidence references.",
            "Use current ownership with a safe fallback queue.",
            "Detect routing loops and duplicate storms.",
            "Use evidence-based closure.",
            "Use fictional or synthetic workflow records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.5?"
        >
          <p className="leading-8">
            A17.5 focuses on Playbooks and Runbooks. Before continuing, make sure
            you can explain how a ticket reaches the right human with enough
            context, clear state, safe fallback, and preserved evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can separate workflow state from decision authority.",
              "I can design routing, fallback queues, duplicate handling, and exception review.",
              "I can explain why routing loops and stale ownership require safe fallback.",
              "I can design SLA reminders and escalation without forcing a security decision.",
              "I can use evidence-based closure and human confirmation where needed.",
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
          title="How to Make the Ticketing and Workflow Automation Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use clear states",
                detail:
                  "A reviewer should understand where the ticket is, why it moved, and what must happen next.",
              },
              {
                title: "Preserve evidence",
                detail:
                  "Creation, routing, escalation, override, and closure should all be attributable.",
              },
              {
                title: "Show safe fallback",
                detail:
                  "Unknown ownership, missing enrichment, loops, and failed dependencies should move to visible exception states.",
              },
              {
                title: "Show human authority",
                detail:
                  "Workflow automation should prepare and route work while consequential decisions remain with the authorized role.",
              },
              {
                title: "Show duplicate logic",
                detail:
                  "Exact duplicates, likely duplicates, and related records should not all be treated the same.",
              },
              {
                title: "Show quality metrics",
                detail:
                  "Reassignment, loop, stale-ticket, exception, and evidence-completeness rates reveal workflow health.",
              },
              {
                title: "Show closure discipline",
                detail:
                  "Timers and status changes should not substitute for actual closure evidence.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.5 will use these workflow states and ticket evidence to design safe playbooks and runbooks.",
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
            A17.4 workflow automation remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not connect lesson workflows to real ticketing platforms,
            endpoints, networks, cloud accounts, credentials, production
            security tools, or live response systems. Do not automate
            destructive, environment-changing, exploitative,
            credential-related, bypass, or unauthorized actions. This lesson is
            about safe work orchestration, routing, evidence, escalation,
            exception handling, and accountability.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.4 Ticketing and Workflow Automation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for ticket creation, routing,
            assignment, duplicate handling, SLA reminders, escalation,
            exception queues, status transitions, closure, evidence, and human
            authority. Next, A17.5 focuses on Playbooks and Runbooks.
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