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
const previousLesson = `${modulePath}/ticketing-and-workflow-automation`;
const nextLesson = `${modulePath}/safe-scripting-boundaries`;

const objectives = [
  "Explain the difference between playbooks, runbooks, checklists, decision trees, and automation-supported workflow guidance without treating them as interchangeable.",
  "Design defensive playbooks that help analysts interpret evidence, choose governed paths, request approvals, escalate, and document decisions without automating unsafe response actions.",
  "Design runbooks for repeatable low-risk support tasks with clear prerequisites, inputs, validation, stop conditions, rollback or recovery expectations, evidence capture, and ownership.",
  "Evaluate documentation quality using clarity, scope, decision authority, versioning, evidence requirements, exception handling, handoffs, review triggers, and analyst feedback.",
  "Build a Playbook and Runbook Design that becomes the fifth artifact in the A17 Safe Automation Design and Governance Plan.",
];

const documentTypes = [
  {
    type: "Playbook",
    bestFor:
      "A situation with multiple possible paths where evidence and context determine what happens next.",
    structure:
      "Entry conditions, evidence review, branches, approval gates, escalation, exit criteria, and decision rationale.",
    example:
      "A fictional alert-triage playbook that helps an analyst choose the right review path based on evidence completeness and business context.",
    caution:
      "A playbook should guide judgment rather than disguise a rigid automatic decision as analyst choice.",
  },
  {
    type: "Runbook",
    bestFor:
      "A repeatable bounded support procedure with stable inputs and low ambiguity.",
    structure:
      "Prerequisites, ordered task steps, validation, expected result, stop conditions, evidence, and recovery notes.",
    example:
      "A fictional runbook for preparing an alert-review package and opening the correct ticket.",
    caution:
      "A runbook should not turn into an autonomous high-impact action sequence.",
  },
  {
    type: "Checklist",
    bestFor:
      "Confirming required items before, during, or after a process.",
    structure:
      "Short verifiable items with ownership and completion evidence.",
    example:
      "A pre-review checklist confirming source attribution, freshness, ownership, and ticket linkage.",
    caution:
      "A checklist confirms completion; it does not explain why a complex decision is correct.",
  },
  {
    type: "Decision tree",
    bestFor:
      "Making explicit how well-defined evidence conditions lead to different governed review paths.",
    structure:
      "Question, condition, branch, next step, stop point, escalation, and uncertainty path.",
    example:
      "A fictional tree that distinguishes Current, Stale, Missing, and Conflicting enrichment states.",
    caution:
      "A decision tree should include an uncertainty branch instead of forcing every case into a false binary.",
  },
  {
    type: "Reference guide",
    bestFor:
      "Providing definitions, roles, field meanings, evidence examples, and contextual reminders.",
    structure:
      "Topic sections, definitions, examples, source references, and version information.",
    example:
      "A fictional guide explaining workflow states and evidence-confidence labels.",
    caution:
      "Reference material should not be mistaken for an executable workflow.",
  },
];

const playbookAnatomy = [
  {
    element: "Purpose and scope",
    question:
      "What situation is this playbook designed to support, and what is explicitly outside scope?",
    strong:
      "The playbook covers synthetic alert triage and excludes autonomous environment-changing action.",
  },
  {
    element: "Entry conditions",
    question:
      "What evidence or workflow state must exist before the playbook begins?",
    strong:
      "A valid fictional ticket exists and minimum alert context is available.",
  },
  {
    element: "Evidence review",
    question:
      "Which sources must the analyst inspect before choosing a branch?",
    strong:
      "Alert metadata, source freshness, asset context, related ticket context, and conflict state.",
  },
  {
    element: "Decision points",
    question:
      "Which questions genuinely require human interpretation?",
    strong:
      "Does the evidence fit known business context, and is additional approved evidence needed?",
  },
  {
    element: "Branches",
    question:
      "What happens under different evidence states?",
    strong:
      "Current evidence continues review; stale evidence lowers confidence; conflicting evidence triggers a human-owned branch.",
  },
  {
    element: "Approval gates",
    question:
      "Where must authorized human approval occur before the workflow advances?",
    strong:
      "High-impact or authority-sensitive decisions pause and package evidence for the assigned reviewer.",
  },
  {
    element: "Escalation",
    question:
      "When should the case move to another role or higher authority?",
    strong:
      "Escalate when evidence remains unresolved, ownership is unclear, or authority exceeds the current analyst role.",
  },
  {
    element: "Stop conditions",
    question:
      "What conditions should prevent the playbook from continuing?",
    strong:
      "Required evidence is invalid, approval authority is unavailable, or the case falls outside the playbook scope.",
  },
  {
    element: "Evidence capture",
    question:
      "What should be recorded so the decision can be reconstructed?",
    strong:
      "Evidence version, analyst, branch chosen, rationale, overrides, approvals, timestamps, and exit state.",
  },
  {
    element: "Exit criteria",
    question:
      "What does it mean for the playbook to end?",
    strong:
      "The case is routed, escalated, returned for more evidence, or moved to candidate-for-closure with documented rationale.",
  },
];

const runbookAnatomy = [
  {
    element: "Prerequisites",
    purpose:
      "Confirm the bounded task is appropriate and required inputs are present.",
    example:
      "Validated synthetic alert ID and current workflow owner.",
  },
  {
    element: "Inputs",
    purpose:
      "List the exact fictional data needed for the support task.",
    example:
      "Alert ID, asset ID, ticket state, enrichment state, routing source.",
  },
  {
    element: "Expected output",
    purpose:
      "Define the low-impact result the runbook should produce.",
    example:
      "A complete evidence package attached to the fictional ticket.",
  },
  {
    element: "Validation",
    purpose:
      "Check source attribution, format, freshness, required fields, and allowed state before continuing.",
    example:
      "Reject malformed enrichment and label stale sources.",
  },
  {
    element: "Ordered task",
    purpose:
      "Describe the repeatable sequence clearly enough that people can follow it consistently.",
    example:
      "Validate record, attach context, update workflow metadata, confirm evidence completeness.",
  },
  {
    element: "Stop condition",
    purpose:
      "Define when the task should pause rather than force a bad result.",
    example:
      "Stop when the required ticket ID is missing or evidence conflicts materially.",
  },
  {
    element: "Fallback",
    purpose:
      "Define the safe degraded path.",
    example:
      "Move to the fictional Workflow Exception Review queue.",
  },
  {
    element: "Evidence",
    purpose:
      "Record what happened and under which version.",
    example:
      "Runbook version, timestamps, input state, output state, missing fields, operator or workflow ID.",
  },
  {
    element: "Owner",
    purpose:
      "Identify who maintains the runbook and resolves defects.",
    example:
      "SOC Workflow Owner.",
  },
  {
    element: "Review trigger",
    purpose:
      "Define what change should reopen the runbook design.",
    example:
      "Ticket schema change, source change, repeated exception, or new approval requirement.",
  },
];

const branchPatterns = [
  {
    pattern: "Evidence complete",
    condition:
      "Required synthetic context is current, attributable, and internally consistent.",
    next:
      "Continue to analyst review with normal confidence.",
  },
  {
    pattern: "Evidence stale",
    condition:
      "Required context exists but exceeds the defined freshness threshold.",
    next:
      "Display stale status, reduce confidence, and request verification if the stale field matters.",
  },
  {
    pattern: "Evidence missing",
    condition:
      "One or more expected fields are unavailable.",
    next:
      "Use the approved degraded mode or move to evidence collection.",
  },
  {
    pattern: "Evidence conflicting",
    condition:
      "Two approved fictional sources disagree on a material fact.",
    next:
      "Show both sources and move to human-led resolution.",
  },
  {
    pattern: "Ownership unclear",
    condition:
      "No current queue or decision owner is valid.",
    next:
      "Move to General Security Review or Governance Exception instead of guessing.",
  },
  {
    pattern: "Approval required",
    condition:
      "The next step is authority-sensitive or potentially high impact.",
    next:
      "Package evidence, pause, and request approval from the authorized role.",
  },
  {
    pattern: "Out of scope",
    condition:
      "The case does not fit the playbook assumptions or safe module boundary.",
    next:
      "Stop and escalate to the correct professional or governance path.",
  },
  {
    pattern: "Workflow degraded",
    condition:
      "Automation health, routing, enrichment, or dependency quality has materially deteriorated.",
    next:
      "Use manual fallback and open workflow-maintenance review.",
  },
];

const versioningRules = [
  {
    rule: "Stable version ID",
    why:
      "Analysts and reviewers need to know which instructions applied to a decision.",
    example:
      "PB-17.5-v1.3",
  },
  {
    rule: "Change summary",
    why:
      "A reviewer should understand what changed and why.",
    example:
      "Updated stale-evidence branch after source freshness threshold changed.",
  },
  {
    rule: "Effective date",
    why:
      "Old cases may have used a different version.",
    example:
      "Effective 2026-09-01",
  },
  {
    rule: "Owner and approver",
    why:
      "Documentation needs clear maintenance and governance accountability.",
    example:
      "Owner: SOC Workflow Owner; Approver: Security Operations Lead",
  },
  {
    rule: "Dependency list",
    why:
      "A playbook can become stale when ticket fields, enrichment sources, or ownership rules change.",
    example:
      "Asset Directory schema, Ticket Registry, Playbook Catalog",
  },
  {
    rule: "Review cadence",
    why:
      "Even unchanged documentation can drift away from actual operations.",
    example:
      "Quarterly review plus event-driven review",
  },
  {
    rule: "Retirement state",
    why:
      "Analysts should not accidentally use obsolete guidance.",
    example:
      "Archived version marked Retired and linked to replacement.",
  },
  {
    rule: "Feedback record",
    why:
      "Analyst overrides, confusion, and exceptions reveal where documentation needs improvement.",
    example:
      "Feedback ID, issue, frequency, owner, disposition",
  },
];

const qualitySignals = [
  {
    signal: "Low analyst confusion",
    meaning:
      "Analysts can determine what evidence to inspect and when to stop or escalate.",
  },
  {
    signal: "Low unnecessary override",
    meaning:
      "Branches and guidance generally match real workflow context.",
  },
  {
    signal: "High evidence completeness",
    meaning:
      "Required sources, rationale, and approval information are consistently recorded.",
  },
  {
    signal: "Low stale-version use",
    meaning:
      "Analysts are not relying on retired or outdated guidance.",
  },
  {
    signal: "Clear exception handling",
    meaning:
      "Out-of-scope or ambiguous cases move to a safe human-owned path.",
  },
  {
    signal: "Healthy review cadence",
    meaning:
      "Owners review documentation after material workflow or source changes.",
  },
  {
    signal: "Meaningful human decisions",
    meaning:
      "Approval points involve judgment rather than decorative clicking.",
  },
  {
    signal: "Bounded automation",
    meaning:
      "Automation prepares evidence, routes work, and supports low-impact tasks without crossing the approved action boundary.",
  },
];

const designFields = [
  {
    field: "PRB ID",
    purpose:
      "Stable identifier for the playbook or runbook design record.",
    example:
      "PRB-501",
  },
  {
    field: "Document type",
    purpose:
      "Classifies the artifact as Playbook, Runbook, Checklist, Decision Tree, or Reference Guide.",
    example:
      "Playbook",
  },
  {
    field: "Linked workflow",
    purpose:
      "Connects the document to OPP, HITL, ENR, and WFA evidence.",
    example:
      "OPP-104 / HITL-203 / ENR-307 / WFA-404",
  },
  {
    field: "Purpose",
    purpose:
      "Defines the defensive task or decision-support goal.",
    example:
      "Guide analyst playbook selection from evidence state",
  },
  {
    field: "Entry conditions",
    purpose:
      "Defines when the document is valid to use.",
    example:
      "Ticket is Ready for Review",
  },
  {
    field: "Human decision",
    purpose:
      "Defines the judgment that remains with the person.",
    example:
      "Select the approved playbook that fits current evidence",
  },
  {
    field: "Automation support",
    purpose:
      "Defines the bounded machine-supported step.",
    example:
      "Recommend relevant playbook and attach version",
  },
  {
    field: "Stop condition",
    purpose:
      "Defines when the workflow must pause or leave the document path.",
    example:
      "Material evidence conflict or out-of-scope condition",
  },
  {
    field: "Fallback",
    purpose:
      "Defines the safe alternate path.",
    example:
      "General triage guidance + analyst review",
  },
  {
    field: "Evidence",
    purpose:
      "Defines what must be captured.",
    example:
      "Document version, branch, analyst choice, rationale, timestamps",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional role responsible for maintenance.",
    example:
      "Incident Response Process Owner",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the design.",
    example:
      "Workflow schema change, repeated override, new decision authority",
  },
];

const northbridgeDesigns = [
  {
    id: "PRB-501",
    type:
      "Playbook",
    title:
      "Synthetic Alert Review Playbook",
    linked:
      "OPP-104 / HITL-203 / ENR-307 / WFA-404",
    purpose:
      "Guide analysts through evidence completeness, playbook selection, and escalation.",
    entry:
      "Ticket status is Ready for Review.",
    automation:
      "Attach recommended playbook, current evidence summary, and missing-data state.",
    human:
      "Analyst selects, rejects, or changes the guidance based on context.",
    stop:
      "Stop when evidence conflict is material or the case falls outside playbook scope.",
    fallback:
      "Move to General Triage Review.",
    evidence:
      "Playbook version, recommendation reason, analyst choice, rationale, timestamp",
    owner:
      "Incident Response Process Owner",
    state:
      "Approved",
  },
  {
    id: "PRB-502",
    type:
      "Runbook",
    title:
      "Ticket Evidence Package Runbook",
    linked:
      "OPP-102 / HITL-205 / ENR-301 / ENR-302 / WFA-401",
    purpose:
      "Prepare a consistent fictional ticket evidence package.",
    entry:
      "Validated synthetic alert and ticket ID exist.",
    automation:
      "Attach approved operational enrichment and evidence metadata.",
    human:
      "Review only exceptions or conflicting context.",
    stop:
      "Stop if the ticket ID is invalid or required evidence cannot be attributed.",
    fallback:
      "Move to Ticket Creation Exception.",
    evidence:
      "Runbook version, input validation, attached fields, missing/stale state",
    owner:
      "SOC Workflow Owner",
    state:
      "Approved",
  },
  {
    id: "PRB-503",
    type:
      "Decision Tree",
    title:
      "Enrichment Quality Decision Tree",
    linked:
      "ENR-301 / ENR-303 / ENR-306",
    purpose:
      "Guide handling of Current, Stale, Missing, Conflicting, Unavailable, and Rejected enrichment.",
    entry:
      "An enrichment field returns a state.",
    automation:
      "Classify the technical evidence state.",
    human:
      "Resolve material conflict or decide whether degraded context is sufficient.",
    stop:
      "Stop automatic progression for material conflict or invalid required data.",
    fallback:
      "Use safe degraded mode or manual evidence review.",
    evidence:
      "Source, state, freshness, branch chosen, analyst action",
    owner:
      "Security Platform Owner",
    state:
      "Approved",
  },
  {
    id: "PRB-504",
    type:
      "Runbook",
    title:
      "Routing Exception Runbook",
    linked:
      "WFA-402 / WFA-407",
    purpose:
      "Handle stale ownership, missing ownership, and routing loops.",
    entry:
      "Ticket routing cannot complete normally.",
    automation:
      "Stop repeated reassignment and package queue history.",
    human:
      "Workflow owner resolves ownership or updates routing rules.",
    stop:
      "Stop if no authorized owner can be identified.",
    fallback:
      "Workflow Exception Review queue.",
    evidence:
      "Queue history, ownership sources, loop count, decision rationale",
    owner:
      "SOC Workflow Owner",
    state:
      "Exception Support",
  },
  {
    id: "PRB-505",
    type:
      "Checklist",
    title:
      "Candidate-for-Closure Checklist",
    linked:
      "WFA-408",
    purpose:
      "Confirm required evidence before a fictional ticket can close.",
    entry:
      "Ticket is marked Candidate for Closure.",
    automation:
      "Check required administrative fields.",
    human:
      "Authorized analyst confirms closure when judgment is required.",
    stop:
      "Stop closure if evidence is incomplete or rationale is missing.",
    fallback:
      "Return ticket to In Review.",
    evidence:
      "Checklist results, reviewer, rationale, closure time",
    owner:
      "SOC Workflow Owner",
    state:
      "Approval Gated",
  },
  {
    id: "PRB-506",
    type:
      "Playbook",
    title:
      "High-Ambiguity Escalation Playbook",
    linked:
      "HITL-204 / WFA-406",
    purpose:
      "Guide cases where evidence conflicts and decision consequence is high.",
    entry:
      "Workflow identifies high ambiguity plus high consequence.",
    automation:
      "Package evidence, identify authority, and pause.",
    human:
      "Incident Response Lead interprets evidence and decides.",
    stop:
      "No automated continuation past the approval point.",
    fallback:
      "Escalation Exception queue if the authorized reviewer is unavailable.",
    evidence:
      "Evidence package version, approver, decision, rationale, timestamp",
    owner:
      "Incident Response Lead",
    state:
      "Human Required",
  },
  {
    id: "PRB-507",
    type:
      "Reference Guide",
    title:
      "Workflow State and Evidence Reference",
    linked:
      "WFA-401 through WFA-408",
    purpose:
      "Explain fictional workflow states, evidence labels, confidence terms, and escalation roles.",
    entry:
      "Used whenever an analyst needs field or state definitions.",
    automation:
      "No decision automation; reference may be linked automatically.",
    human:
      "Uses the reference to understand workflow meaning.",
    stop:
      "Retire the guide when states or labels change materially.",
    fallback:
      "Direct analyst to current module documentation.",
    evidence:
      "Guide version, owner, effective date, retired-version link",
    owner:
      "Security Operations Documentation Owner",
    state:
      "Reference",
  },
];

const dashboardMetrics = [
  {
    label: "Design records",
    value: "7",
    note: "Playbooks, runbooks, decision tree, checklist, and reference guide",
  },
  {
    label: "Human-decision artifacts",
    value: "3",
    note: "Alert review, closure, and high-ambiguity escalation preserve analyst authority",
  },
  {
    label: "Low-risk runbooks",
    value: "2",
    note: "Evidence packaging and routing-exception support remain bounded",
  },
  {
    label: "Versioned guidance",
    value: "7",
    note: "Every design requires owner, evidence, versioning, and review triggers",
  },
];

const logs = [
  "[08:10] PRB-501 type=PLAYBOOK entry=READY_FOR_REVIEW branch=EVIDENCE_COMPLETE analyst_choice=REQUIRED",
  "[08:32] PRB-502 type=RUNBOOK task=PACKAGE_EVIDENCE validation=PASS state=COMPLETE",
  "[08:54] PRB-503 type=DECISION_TREE enrichment_state=STALE branch=DEGRADED_REVIEW",
  "[09:16] PRB-504 type=RUNBOOK routing_loop=TRUE action=STOP_AUTOROUTING state=EXCEPTION_SUPPORT",
  "[09:38] PRB-505 type=CHECKLIST closure_fields=COMPLETE analyst_confirm=REQUIRED",
  "[10:00] PRB-506 type=PLAYBOOK ambiguity=HIGH consequence=HIGH action=PAUSE_FOR_AUTHORITY",
  "[10:22] PRB-507 type=REFERENCE version=2.1 status=CURRENT",
];

const antiPatterns = [
  {
    title: "Runbook becomes an action script",
    problem:
      "A supposedly safe runbook includes instructions for autonomous high-impact environment changes.",
    better:
      "Keep runbooks focused on bounded support work, validation, evidence, routing, and safe escalation.",
  },
  {
    title: "Playbook has only one branch",
    problem:
      "The analyst appears to have judgment but every path forces the same outcome.",
    better:
      "Use meaningful branches, uncertainty paths, stop conditions, and escalation.",
  },
  {
    title: "No out-of-scope condition",
    problem:
      "Analysts try to force unusual cases through a playbook that does not fit.",
    better:
      "Define when to stop and move to another governed process.",
  },
  {
    title: "No version history",
    problem:
      "Reviewers cannot tell which instructions were used for an older decision.",
    better:
      "Use stable versions, effective dates, owners, and change summaries.",
  },
  {
    title: "Checklist replaces judgment",
    problem:
      "Completing administrative boxes is treated as proof that a complex decision is correct.",
    better:
      "Use checklists for completeness while keeping substantive interpretation with the appropriate human.",
  },
  {
    title: "No fallback",
    problem:
      "When required evidence is missing, the document offers no safe alternate path.",
    better:
      "Define degraded mode, manual review, exception queue, or escalation.",
  },
  {
    title: "No feedback loop",
    problem:
      "Analysts repeatedly override guidance but documentation never changes.",
    better:
      "Track confusion, override, and exception patterns as maintenance evidence.",
  },
  {
    title: "Reference content copied into every ticket",
    problem:
      "Large documentation blocks clutter tickets and quickly become stale.",
    better:
      "Link the current version and record the version ID rather than duplicating the whole guide.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Use a playbook that shows evidence states, branches, stop conditions, and escalation while requiring the analyst to choose the path.",
    outcome:
      "Best. The situation needs contextual judgment, so guidance should support rather than replace the analyst.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Use a runbook that always chooses the same outcome after three mechanical checks.",
    outcome:
      "Risky. A rigid runbook is a poor fit when evidence and context create meaningful branches.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Provide no guidance because judgment is involved.",
    outcome:
      "Caution. Human judgment still benefits from clear evidence requirements and escalation guidance.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the runbook focused on preparing evidence and routing the ticket, with stop conditions for invalid or conflicting inputs.",
    outcome:
      "Best. The task remains bounded, repeatable, and safely reviewable.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Extend the runbook so it automatically makes the final high-impact response decision.",
    outcome:
      "Risky. That crosses the safe support boundary and removes required judgment and authority.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove validation so the runbook always finishes.",
    outcome:
      "Risky. Completion is not more important than evidence quality and safe stopping.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the best distinction between a playbook and a runbook?",
    choices: [
      "A playbook guides branching decisions and escalation, while a runbook describes repeatable bounded procedures.",
      "They are always identical.",
      "A runbook is always more important than a playbook.",
      "A playbook should never contain human judgment.",
    ],
    answer: 0,
    explanation:
      "Playbooks are usually decision-oriented; runbooks are usually procedure-oriented.",
  },
  {
    question:
      "What should a strong playbook include when evidence is ambiguous?",
    choices: [
      "An uncertainty branch, stop conditions, escalation, and human judgment.",
      "A forced automatic outcome.",
      "No evidence requirements.",
      "Automatic approval on timeout.",
    ],
    answer: 0,
    explanation:
      "Ambiguity should remain visible and should route to a meaningful human-owned path.",
  },
  {
    question:
      "What should a safe runbook do when required input validation fails?",
    choices: [
      "Stop and use the defined fallback or exception path.",
      "Guess the missing value.",
      "Continue silently.",
      "Delete the work item.",
    ],
    answer: 0,
    explanation:
      "Runbooks need stop conditions and safe fallback.",
  },
  {
    question:
      "Why does document versioning matter?",
    choices: [
      "It allows reviewers to reconstruct which guidance applied to a decision and what changed later.",
      "It makes the page look professional only.",
      "It removes the need for owners.",
      "It guarantees the guidance is correct.",
    ],
    answer: 0,
    explanation:
      "Versioning supports traceability and change governance.",
  },
  {
    question:
      "What is the strongest role for a checklist?",
    choices: [
      "Confirm required evidence or administrative conditions without pretending to replace complex judgment.",
      "Make all high-impact decisions.",
      "Replace every playbook.",
      "Hide missing evidence.",
    ],
    answer: 0,
    explanation:
      "Checklists are excellent for completeness but limited for nuanced judgment.",
  },
  {
    question:
      "What should happen when repeated analyst overrides show a playbook branch is usually wrong?",
    choices: [
      "Treat the override pattern as evidence for review and redesign.",
      "Disable analyst override.",
      "Ignore the pattern.",
      "Require faster approval.",
    ],
    answer: 0,
    explanation:
      "Overrides are feedback about the quality of the guidance.",
  },
  {
    question:
      "What is the purpose of the Playbook and Runbook Design artifact?",
    choices: [
      "Document purpose, entry conditions, decision points, bounded automation support, human judgment, stop conditions, fallback, evidence, ownership, versioning, and review triggers.",
      "Create autonomous response scripts.",
      "Replace ticketing.",
      "Remove human accountability.",
    ],
    answer: 0,
    explanation:
      "The artifact makes safe guidance and repeatable support procedures explicit and governable.",
  },
];

const checklistItems = [
  "The document type matches the task.",
  "Purpose and scope are explicit.",
  "Entry conditions are defined.",
  "Required evidence is identified.",
  "Human decision points are explicit.",
  "Automation support is bounded.",
  "Branches are meaningful.",
  "Uncertainty has a safe path.",
  "Approval gates are documented.",
  "Escalation paths are defined.",
  "Stop conditions are explicit.",
  "Fallback behavior is defined.",
  "Out-of-scope conditions are defined.",
  "Evidence capture is defined.",
  "Version ID is present.",
  "Effective date is present.",
  "Owner is assigned.",
  "Review cadence is defined.",
  "Change triggers are defined.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Playbooks guide branching decisions; runbooks guide repeatable bounded procedures.",
  "Checklists confirm completeness but should not replace complex judgment.",
  "Decision trees need uncertainty and out-of-scope branches.",
  "Playbooks should make evidence, approval, escalation, and stop conditions visible.",
  "Runbooks need prerequisites, validation, safe fallback, evidence, and ownership.",
  "Documentation should record versions so past decisions remain traceable.",
  "Analyst overrides and confusion are evidence that guidance may need redesign.",
  "A safe runbook supports workflow execution without becoming an autonomous high-impact action script.",
  "A safe playbook helps humans decide without turning them into a rubber stamp.",
  "The Playbook and Runbook Design prepares you for A17.6 Safe Scripting Boundaries.",
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

export default function PlaybooksAndRunbooksPage() {
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
              A17.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Playbooks and Runbooks
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Playbooks help analysts make governed decisions when context can
            branch. Runbooks support repeatable low-risk procedures when inputs
            and expected outputs are stable. This lesson teaches how to design
            both without turning documentation into unsafe autonomous action.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All alerts, tickets, playbooks, runbooks, queues, approvals,
            systems, and evidence in this lesson are fictional or synthetic.
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
          lessonTitle="Playbooks and Runbooks"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.5 Entry Readiness"
          items={[
            "I can explain how ticketing and workflow automation moves work without making every decision.",
            "I can identify when a task is repeatable versus when it requires contextual judgment.",
            "I understand why evidence, stop conditions, fallback, and ownership matter.",
            "I will keep all playbooks and runbooks fictional, inert, and defensive.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Good Documentation Reduces Confusion Without Removing Judgment"
        >
          <p className="leading-8">
            A new analyst should not have to invent the entire review process
            from scratch. At the same time, experienced analysts should not be
            trapped inside documentation that assumes every case is identical.
          </p>

          <p className="mt-4 leading-8">
            That is why defensive teams use different document types. A runbook
            is strong when the task is stable and bounded. A playbook is strong
            when evidence can lead to multiple legitimate paths. A checklist is
            strong when completeness matters. A decision tree is strong when
            evidence states can be expressed clearly.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Documentation should make the safe path easier to follow—not make the analyst stop thinking.
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
          eyebrow="Document Types"
          title="Playbook, Runbook, Checklist, Decision Tree, or Reference Guide?"
        >
          <div className="grid gap-5">
            {documentTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.type}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.bestFor}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Structure
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.structure}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Caution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.caution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Playbook Design"
          title="Ten Elements of a Strong Defensive Playbook"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {playbookAnatomy.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.element}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong design: {item.strong}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Runbook Design"
          title="Ten Elements of a Safe Repeatable Runbook"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {runbookAnatomy.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.element}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
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
          eyebrow="Branching"
          title="Eight Branch Patterns for Evidence-Aware Guidance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {branchPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Condition: {item.condition}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Next: {item.next}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Approval and Stop Conditions"
          title="Some Paths Must Pause"
        >
          <p className="leading-8">
            A well-designed playbook does not always end with “continue.” It
            should know when the analyst needs more evidence, when a different
            role has authority, when the case is outside scope, and when
            automation quality is too degraded to trust.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Required evidence is invalid or missing.",
              "Two material sources conflict.",
              "The next decision exceeds current authority.",
              "The case falls outside the documented scope.",
              "The workflow dependency is degraded.",
              "The current document version is retired.",
              "The safe fallback path cannot be reached.",
              "A repeated override pattern indicates the guidance is unreliable.",
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
          eyebrow="Versioning and Maintenance"
          title="Guidance Is a Governed Artifact"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {versioningRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.rule}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Why it matters: {item.why}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Quality"
          title="How to Know Whether Playbooks and Runbooks Are Actually Helping"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualitySignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Record"
          title="What a Reviewable Playbook or Runbook Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designFields.map((item) => (
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
          eyebrow="Fictional Design Set"
          title="Seven Northbridge Playbook and Runbook Records"
        >
          <div className="grid gap-5">
            {northbridgeDesigns.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-purple-200">
                  Linked evidence: {item.linked}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Entry conditions", item.entry],
                    ["Automation support", item.automation],
                    ["Human responsibility", item.human],
                    ["Stop condition", item.stop],
                    ["Fallback", item.fallback],
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
          title="Northbridge Playbook and Runbook Dashboard"
          subtitle="Fictional guidance types, human decision points, bounded procedures, and version-control summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Retired Runbook Version Still Linked From an Active Workflow"
          severity="High"
          time="10:22"
          source="Fictional Documentation Health Monitor"
          details="A fictional ticket workflow still references an older runbook version whose routing field names no longer match the current workflow schema."
          recommendation="Remove the retired link, point the workflow to the current version, and review whether any recent cases used outdated guidance."
        />

        <FakeLogPanel
          title="Fictional Playbook and Runbook Usage Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Playbook or Runbook?"
          question="Which document type best fits a synthetic alert-review situation with several legitimate paths depending on evidence freshness, conflict, and business context?"
          evidence={[
            "The same alert category can have different interpretations.",
            "Evidence may be Current, Stale, Missing, or Conflicting.",
            "Analysts may need to request more evidence or escalate.",
            "The final path depends on human judgment.",
            "A safe fallback exists when the case is outside scope.",
          ]}
          options={[
            "Use a playbook with evidence branches, stop conditions, and human decision points.",
            "Use a runbook that forces the same result every time.",
            "Use a checklist only.",
            "Use no guidance because judgment is involved.",
          ]}
          bestAnswer={0}
          explanation="A playbook is a better fit when evidence can lead to multiple governed paths and human judgment remains essential."
        />

        <Section
          eyebrow="Common Documentation Mistakes"
          title="Eight Ways Playbooks and Runbooks Lose Their Value"
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
          title="Scenario Decision Lab 1 — Choosing the Right Guidance Type"
          scenario="A fictional analyst reviews alerts where evidence can be complete, stale, missing, or conflicting, and each state may require a different safe path."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Bounded Runbook Scope"
          scenario="A fictional runbook currently prepares evidence and routes a ticket. A proposal suggests extending it so the same runbook automatically makes the final high-impact decision."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Playbook and Runbook Design"
        >
          <p className="leading-8">
            Build a fictional documentation set that supports analysts,
            automation, workflow state, evidence, approvals, exceptions, and
            safe fallback without becoming an unsafe action script.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional PRB records.",
              "Give every record a stable PRB ID.",
              "Link each record to relevant OPP, HITL, ENR, and WFA IDs.",
              "Classify each artifact as Playbook, Runbook, Checklist, Decision Tree, or Reference Guide.",
              "Name the document.",
              "Write its purpose.",
              "Define scope.",
              "Define out-of-scope conditions.",
              "Define entry conditions.",
              "Define required evidence.",
              "Define human decision points.",
              "Define bounded automation support.",
              "Define branches where relevant.",
              "Define approval gates.",
              "Define escalation.",
              "Define stop conditions.",
              "Define safe fallback.",
              "Define exit criteria.",
              "Define evidence capture.",
              "Assign a document owner.",
              "Assign an approver where relevant.",
              "Assign a version ID.",
              "Set an effective date.",
              "Write a short change summary.",
              "List dependencies.",
              "Define review cadence.",
              "Define change triggers.",
              "Define retirement behavior.",
              "Define analyst feedback capture.",
              "Include at least eight Playbooks.",
              "Include at least eight Runbooks.",
              "Include at least five Checklists.",
              "Include at least five Decision Trees.",
              "Include at least three Reference Guides.",
              "Include at least five uncertainty branches.",
              "Include at least five approval-gated branches.",
              "Include at least five out-of-scope stop conditions.",
              "Include at least five retired-version scenarios.",
              "Include at least five repeated-override examples that trigger document review.",
              "Include at least three examples where a runbook proposal is rejected because it would cross into unsafe autonomous action.",
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
              Use fictional alerts, tickets, queues, owners, evidence, approval
              roles, and workflow states only. Do not write operational
              instructions for exploiting systems, bypassing controls,
              credential access, destructive actions, unauthorized scanning, or
              real environment changes. Keep playbooks and runbooks focused on
              safe defensive evidence review, routing, documentation, and human
              approval.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Runbook Scope"
          question="What is the strongest design for a runbook that prepares evidence and routes a ticket?"
          evidence={[
            "The current task has stable synthetic inputs.",
            "Evidence preparation is low impact and reversible.",
            "Routing has a safe fallback queue.",
            "The proposed extension would make a high-impact decision automatically.",
            "That final decision requires contextual human authority.",
          ]}
          options={[
            "Keep the runbook bounded to evidence preparation and routing, with stop conditions before the high-impact decision.",
            "Extend the runbook so it automatically makes the final decision.",
            "Remove validation so the procedure always finishes.",
            "Allow the runbook to continue when evidence is conflicting.",
          ]}
          bestAnswer={0}
          explanation="The runbook is appropriate for repeatable low-impact support work but should stop before the authority-sensitive decision."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Playbook and Runbook Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for choosing document
            types, designing decision paths, controlling versions, handling
            exceptions, and preventing documentation from crossing safe
            automation boundaries.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Document-type selection",
              "Purpose and scope",
              "Entry conditions",
              "Evidence requirements",
              "Branching rules",
              "Uncertainty path",
              "Human decision point",
              "Approval authority",
              "Stop conditions",
              "Fallback",
              "Out-of-scope handling",
              "Exit criteria",
              "Evidence capture",
              "Version ID",
              "Effective date",
              "Change summary",
              "Owner and approver",
              "Dependency list",
              "Review cadence",
              "Retirement and replacement",
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
            The strongest standard should preserve human reasoning where it
            matters while making repeatable defensive work easier to perform
            consistently.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.5 Mini Quiz: Playbooks and Runbooks"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Playbook and Runbook Design"
          prompt="Create the fifth artifact for your A17 Safe Automation Design and Governance Plan: a fictional Playbook and Runbook Design with at least thirty records. Include PRB ID, document type, linked OPP/HITL/ENR/WFA IDs, title, purpose, scope, out-of-scope condition, entry conditions, evidence requirements, human decision points, bounded automation support, branches, approval gates, escalation, stop conditions, fallback, exit criteria, evidence capture, owner, approver, version ID, effective date, change summary, dependencies, review cadence, change triggers, retirement behavior, and analyst feedback."
          tips={[
            "Choose the document type that fits the work.",
            "Use playbooks for branching judgment and runbooks for bounded repeatable support.",
            "Make uncertainty and stop conditions visible.",
            "Version every governed artifact.",
            "Keep high-impact decisions outside automated runbook execution.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.6?"
        >
          <p className="leading-8">
            A17.6 focuses on Safe Scripting Boundaries. Before continuing, make
            sure you can explain exactly where a repeatable procedure may be
            automated and where the workflow should stop, validate, pause, or
            require a person.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish playbooks, runbooks, checklists, decision trees, and reference guides.",
              "I can design meaningful branches, stop conditions, and out-of-scope paths.",
              "I can explain why versioning and ownership matter.",
              "I can keep runbooks bounded to low-impact support work.",
              "I can use analyst feedback and override patterns to improve documentation.",
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
          title="How to Make the Playbook and Runbook Design Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Choose the right artifact",
                detail:
                  "Use a playbook when context branches and a runbook when the procedure is stable and bounded.",
              },
              {
                title: "Show the human decision",
                detail:
                  "A reviewer should know exactly where analyst judgment or approval enters the workflow.",
              },
              {
                title: "Show stop conditions",
                detail:
                  "Do not let a procedure force a result when evidence is invalid, conflicting, or out of scope.",
              },
              {
                title: "Show evidence",
                detail:
                  "Record version, branch, inputs, outputs, rationale, approvals, and timestamps.",
              },
              {
                title: "Show version governance",
                detail:
                  "Older cases should remain traceable to the guidance that existed at the time.",
              },
              {
                title: "Show feedback",
                detail:
                  "Repeated analyst overrides or confusion should feed back into maintenance.",
              },
              {
                title: "Show safe boundaries",
                detail:
                  "Runbooks should not quietly expand from administrative support into autonomous high-impact action.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.6 will translate these boundaries into safe scripting and execution constraints.",
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
            A17.5 guidance remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not create playbooks or runbooks that instruct exploitation,
            credential attacks, bypassing controls, destructive actions,
            unauthorized scanning, or real environment changes. This lesson
            focuses on evidence review, routing, workflow support, documentation,
            safe fallback, versioning, and authorized human decision-making.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.5 Playbooks and Runbooks Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for choosing document types,
            designing evidence-aware branches, building safe bounded
            procedures, preserving human authority, using stop conditions,
            maintaining versions, and learning from analyst feedback. Next,
            A17.6 focuses on Safe Scripting Boundaries.
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