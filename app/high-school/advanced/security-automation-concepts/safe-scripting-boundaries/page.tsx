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
const previousLesson = `${modulePath}/playbooks-and-runbooks`;
const nextLesson = `${modulePath}/automation-failure-modes`;

const objectives = [
  "Explain safe scripting boundaries using purpose, authorization, least privilege, environment scope, data sensitivity, action impact, reversibility, evidence, and human approval.",
  "Distinguish read-only evidence collection, low-impact administrative updates, recommendation-only logic, approval-gated changes, and actions that should remain prohibited within the A17 curriculum.",
  "Design safeguards such as dry-run mode, validation, allowlists, bounded inputs, rate limits, timeout, idempotency, logging, error handling, safe fallback, and manual override without operating on real systems.",
  "Evaluate how secret handling, environment separation, dependency trust, change control, and script ownership reduce the chance that a useful automation becomes unsafe over time.",
  "Build a Safe Automation Boundary Checklist that becomes the sixth artifact in the A17 Safe Automation Design and Governance Plan.",
];

const boundaryDimensions = [
  {
    dimension: "Purpose",
    safe:
      "The script supports a clearly defined defensive workflow such as formatting evidence, validating synthetic records, or updating a fictional ticket state.",
    unsafe:
      "The script is built simply because automation is possible, with no approved defensive purpose.",
    question:
      "What legitimate task is this script supposed to support?",
  },
  {
    dimension: "Authorization",
    safe:
      "The fictional workflow has documented authority for the exact support action.",
    unsafe:
      "The script assumes that technical access equals permission.",
    question:
      "Which role or governance decision authorizes this action?",
  },
  {
    dimension: "Least privilege",
    safe:
      "The script has only the conceptual permissions needed for its bounded task.",
    unsafe:
      "The script is given broad access for convenience or future use.",
    question:
      "What is the smallest permission set that could perform the support task?",
  },
  {
    dimension: "Environment scope",
    safe:
      "The lesson uses fictional or isolated synthetic environments only.",
    unsafe:
      "The script is pointed at real endpoints, cloud accounts, production systems, credentials, or private data.",
    question:
      "Which environment is this automation allowed to touch?",
  },
  {
    dimension: "Action impact",
    safe:
      "The action is read-only, recommendation-only, or low-impact administrative support.",
    unsafe:
      "The action is destructive, exploitative, credential-related, bypasses controls, or materially changes a real environment.",
    question:
      "What is the worst plausible effect if the script is wrong?",
  },
  {
    dimension: "Reversibility",
    safe:
      "The output can be corrected or safely ignored without lasting harm.",
    unsafe:
      "A mistake would be difficult or impossible to undo.",
    question:
      "Can the workflow recover cleanly from an incorrect output?",
  },
  {
    dimension: "Evidence",
    safe:
      "Inputs, validation, output, version, timestamp, owner, errors, and approval state are recorded.",
    unsafe:
      "The script acts without leaving enough evidence to reconstruct what happened.",
    question:
      "Could another reviewer explain exactly what the script did and why?",
  },
  {
    dimension: "Human control",
    safe:
      "High-impact or ambiguous decisions pause for meaningful human review.",
    unsafe:
      "The script silently crosses from support work into consequential decision-making.",
    question:
      "Where must the script stop and ask for a person?",
  },
];

const scriptModes = [
  {
    mode: "Read-only evidence support",
    description:
      "Reads fictional or synthetic records and produces summaries, normalized fields, counts, comparisons, or evidence packages.",
    examples:
      "Validate a synthetic ticket record, summarize fictional alert metadata, or compare expected and actual workflow fields.",
    human:
      "Analyst reviews the result where interpretation matters.",
    rating:
      "Strong fit",
  },
  {
    mode: "Recommendation-only",
    description:
      "Uses approved rules to suggest a queue, playbook, review path, or maintenance action without executing the consequential decision.",
    examples:
      "Recommend the correct fictional playbook based on alert category and evidence completeness.",
    human:
      "Analyst accepts, rejects, or changes the recommendation.",
    rating:
      "Strong fit",
  },
  {
    mode: "Low-impact administrative write",
    description:
      "Updates fictional workflow metadata such as ticket assignment, label, reminder state, or evidence reference.",
    examples:
      "Attach a synthetic evidence ID or move a fictional ticket to an exception queue.",
    human:
      "Override remains available and changes are traceable.",
    rating:
      "Conditional fit",
  },
  {
    mode: "Approval-gated change",
    description:
      "Prepares a proposed change but pauses before the step that requires authority.",
    examples:
      "Package evidence and request approval before a fictional workflow changes a governed state.",
    human:
      "Authorized reviewer decides whether the change proceeds.",
    rating:
      "Human gate required",
  },
  {
    mode: "Prohibited autonomous action",
    description:
      "Would create unsafe, destructive, unauthorized, exploitative, credential-related, bypass, or real environment-changing behavior.",
    examples:
      "Outside the A17 curriculum boundary.",
    human:
      "Reject the automation design and replace it with safe evidence or approval support.",
    rating:
      "Blocked",
  },
];

const safeguards = [
  {
    safeguard: "Dry-run mode",
    purpose:
      "Show what the automation would do without applying any state change.",
    evidence:
      "Planned action, target identifier, rule version, validation result, and expected outcome.",
  },
  {
    safeguard: "Input validation",
    purpose:
      "Reject malformed, missing, out-of-range, unexpected, or untrusted inputs before the workflow continues.",
    evidence:
      "Validation rule, pass/fail state, rejected field, and reason.",
  },
  {
    safeguard: "Allowlist",
    purpose:
      "Limit the automation to approved fictional object types, queues, fields, or workflow states.",
    evidence:
      "Allowlist version, requested value, permitted/blocked result.",
  },
  {
    safeguard: "Rate limit",
    purpose:
      "Prevent a bug or feedback loop from generating an uncontrolled volume of actions.",
    evidence:
      "Action count, threshold, time window, throttle event.",
  },
  {
    safeguard: "Timeout",
    purpose:
      "Stop waiting on a dependency instead of leaving work stuck indefinitely.",
    evidence:
      "Dependency, timeout threshold, elapsed time, fallback state.",
  },
  {
    safeguard: "Idempotency",
    purpose:
      "Ensure repeating the same approved request does not create duplicate side effects.",
    evidence:
      "Request key, prior result, duplicate-detection state.",
  },
  {
    safeguard: "Safe default",
    purpose:
      "Choose pause, review, or no change when the script cannot confidently complete the bounded task.",
    evidence:
      "Failure state, fallback path, review owner.",
  },
  {
    safeguard: "Approval gate",
    purpose:
      "Require an authorized person before a consequential or authority-sensitive transition.",
    evidence:
      "Approver, evidence package version, decision, rationale, timestamp.",
  },
  {
    safeguard: "Manual override",
    purpose:
      "Let an authorized human correct or stop automation when context differs from the rule.",
    evidence:
      "Override reason, reviewer, old state, new state.",
  },
  {
    safeguard: "Audit logging",
    purpose:
      "Record enough metadata to reconstruct what happened without copying unnecessary sensitive content.",
    evidence:
      "Script version, input reference, result, error state, owner, time.",
  },
  {
    safeguard: "Health monitoring",
    purpose:
      "Detect rising failure, latency, stale-source, exception, or duplicate rates.",
    evidence:
      "Metric history, threshold, alert, owner response.",
  },
  {
    safeguard: "Disable switch",
    purpose:
      "Provide a governed way to stop the automation when safety or quality degrades.",
    evidence:
      "Disable reason, approver, time, affected workflow, fallback activation.",
  },
];

const inputValidation = [
  {
    check: "Required field check",
    good:
      "Reject or safely route when a required synthetic identifier is missing.",
    bad:
      "Guess or fabricate a missing value.",
  },
  {
    check: "Type and format check",
    good:
      "Accept only the expected fictional data format.",
    bad:
      "Coerce unexpected input into a value that merely lets the script continue.",
  },
  {
    check: "State check",
    good:
      "Run only when the fictional ticket is in an approved source state.",
    bad:
      "Ignore current workflow state.",
  },
  {
    check: "Freshness check",
    good:
      "Mark stale enrichment and reduce confidence.",
    bad:
      "Treat an old value as current because it exists.",
  },
  {
    check: "Source attribution check",
    good:
      "Require an approved fictional source identifier.",
    bad:
      "Accept unattributed context.",
  },
  {
    check: "Scope check",
    good:
      "Confirm the requested queue, label, or object appears on the approved allowlist.",
    bad:
      "Let the script act on any supplied target.",
  },
  {
    check: "Duplicate request check",
    good:
      "Detect whether the same logical request was already processed.",
    bad:
      "Create repeated changes whenever a retry occurs.",
  },
  {
    check: "Approval check",
    good:
      "Verify the required approval state before an authority-sensitive transition.",
    bad:
      "Treat the absence of a rejection as approval.",
  },
];

const environmentSeparation = [
  {
    area: "Development",
    purpose:
      "Build and inspect logic using fabricated records and no real operational connections.",
    allowed:
      "Synthetic examples, test fixtures, dry runs, static validation.",
    notAllowed:
      "Real credentials, private records, production endpoints, or real response systems.",
  },
  {
    area: "Testing",
    purpose:
      "Verify expected behavior, failure states, duplicate protection, and evidence capture.",
    allowed:
      "Fictional test cases, mocked dependencies, expected-output checks.",
    notAllowed:
      "Testing unsafe actions against real systems.",
  },
  {
    area: "Staging concept",
    purpose:
      "Model how change review and approval would occur before production in a professional environment.",
    allowed:
      "Conceptual review of permissions, evidence, owners, and fallback.",
    notAllowed:
      "Instructions for connecting the lesson to a real organization.",
  },
  {
    area: "Production concept",
    purpose:
      "Understand why professional production automation needs stronger authorization, monitoring, change control, and rollback planning.",
    allowed:
      "Architecture and governance discussion only.",
    notAllowed:
      "Executing, configuring, or accessing real production automation.",
  },
];

const secretHandling = [
  {
    principle: "Do not embed secrets in code",
    explanation:
      "Hard-coded secrets can spread through copies, logs, repositories, screenshots, or backups.",
    safeLessonApproach:
      "Use placeholders such as FICTIONAL_TOKEN_REFERENCE with no real credential value.",
  },
  {
    principle: "Use least-privilege identities conceptually",
    explanation:
      "Automation identity permissions should match the exact bounded support task.",
    safeLessonApproach:
      "Describe permission categories without creating or using real accounts.",
  },
  {
    principle: "Do not log secret values",
    explanation:
      "Evidence should show that an authorization check occurred without recording the secret itself.",
    safeLessonApproach:
      "Log a redacted reference or credential source name only.",
  },
  {
    principle: "Separate secret access from business logic",
    explanation:
      "A script should not spread authentication material through every workflow step.",
    safeLessonApproach:
      "Model secret use as an abstract dependency.",
  },
  {
    principle: "Rotate and revoke conceptually",
    explanation:
      "Professional systems need lifecycle controls when credentials change or are suspected to be exposed.",
    safeLessonApproach:
      "Document governance triggers without accessing real secrets.",
  },
  {
    principle: "Fail safely on authorization errors",
    explanation:
      "A denied permission should not cause the script to broaden scope or bypass controls.",
    safeLessonApproach:
      "Stop, record the failure, and route to the fictional owner.",
  },
];

const boundaryFields = [
  {
    field: "BND ID",
    purpose:
      "Stable identifier for the scripting boundary record.",
    example:
      "BND-601",
  },
  {
    field: "Linked workflow",
    purpose:
      "Connects the script boundary to OPP, HITL, ENR, WFA, and PRB artifacts.",
    example:
      "OPP-102 / HITL-205 / WFA-401 / PRB-502",
  },
  {
    field: "Purpose",
    purpose:
      "Defines the legitimate defensive support task.",
    example:
      "Validate synthetic ticket evidence fields",
  },
  {
    field: "Mode",
    purpose:
      "Classifies the script as Read-Only, Recommendation, Low-Impact Write, Approval-Gated, or Prohibited.",
    example:
      "Read-Only",
  },
  {
    field: "Environment",
    purpose:
      "Defines where the automation is conceptually allowed.",
    example:
      "Synthetic lab only",
  },
  {
    field: "Inputs",
    purpose:
      "Lists bounded fictional inputs.",
    example:
      "Ticket ID, evidence state, queue ID",
  },
  {
    field: "Permissions",
    purpose:
      "Describes the minimum conceptual permissions.",
    example:
      "Read ticket metadata only",
  },
  {
    field: "Validation",
    purpose:
      "Defines required input and state checks.",
    example:
      "Ticket ID valid; state on allowlist; evidence source current",
  },
  {
    field: "Dry run",
    purpose:
      "Defines whether the planned action can be previewed first.",
    example:
      "Required before enabling a workflow rule",
  },
  {
    field: "Fallback",
    purpose:
      "Defines the safe state when automation cannot proceed.",
    example:
      "Stop and route to Workflow Exception Review",
  },
  {
    field: "Evidence",
    purpose:
      "Defines what is logged.",
    example:
      "Version, request ID, validation result, output, error state",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional role accountable for maintenance.",
    example:
      "Security Automation Engineer",
  },
];

const northbridgeBoundaries = [
  {
    id: "BND-601",
    linked:
      "OPP-101 / HITL-201 / ENR-301",
    purpose:
      "Validate synthetic asset enrichment fields before display.",
    mode:
      "Read-Only Evidence Support",
    environment:
      "Synthetic lab",
    inputs:
      "Asset ID, owner field, source timestamp",
    permissions:
      "Read fictional enrichment records only",
    validation:
      "Required fields, expected type, source attribution, freshness state",
    dryRun:
      "Always available",
    rate:
      "Bounded per synthetic alert record",
    fallback:
      "Mark enrichment Missing/Stale and continue to analyst review",
    human:
      "Analyst interprets the alert",
    evidence:
      "Rule version, input ID, validation state, timestamp",
    owner:
      "Security Platform Owner",
    state:
      "Strong Fit",
  },
  {
    id: "BND-602",
    linked:
      "OPP-104 / HITL-203 / PRB-501",
    purpose:
      "Recommend a fictional playbook from alert category and evidence state.",
    mode:
      "Recommendation-Only",
    environment:
      "Synthetic lab",
    inputs:
      "Alert category, evidence completeness, playbook catalog version",
    permissions:
      "Read approved fictional catalog metadata",
    validation:
      "Category mapping valid; playbook version current",
    dryRun:
      "Default mode",
    rate:
      "One recommendation per ticket state change",
    fallback:
      "Show general triage guidance",
    human:
      "Analyst selects or rejects the recommendation",
    evidence:
      "Recommendation reason, catalog version, analyst choice",
    owner:
      "Incident Response Process Owner",
    state:
      "Strong Fit",
  },
  {
    id: "BND-603",
    linked:
      "OPP-102 / HITL-205 / WFA-402",
    purpose:
      "Assign a fictional ticket to an approved review queue.",
    mode:
      "Low-Impact Administrative Write",
    environment:
      "Synthetic lab",
    inputs:
      "Ticket ID, current queue, approved destination queue",
    permissions:
      "Update fictional assignment field only",
    validation:
      "Ticket state valid; destination on allowlist; ownership source current",
    dryRun:
      "Required before rule activation",
    rate:
      "One automatic reassignment before exception review",
    fallback:
      "General Security Review queue",
    human:
      "Analyst can override assignment with reason",
    evidence:
      "Previous queue, new queue, rule version, timestamp, override",
    owner:
      "SOC Workflow Owner",
    state:
      "Conditional",
  },
  {
    id: "BND-604",
    linked:
      "HITL-204 / WFA-406 / PRB-506",
    purpose:
      "Prepare evidence for a high-consequence fictional decision.",
    mode:
      "Approval-Gated",
    environment:
      "Synthetic lab",
    inputs:
      "Evidence package ID, conflict state, authority mapping",
    permissions:
      "Read evidence and create approval request only",
    validation:
      "Reviewer authority known; evidence package complete enough to review",
    dryRun:
      "Evidence preview required",
    rate:
      "One approval request per decision state",
    fallback:
      "Escalation Exception queue",
    human:
      "Authorized Incident Response Lead makes the decision",
    evidence:
      "Evidence version, approver, decision, rationale, timestamp",
    owner:
      "Incident Response Lead",
    state:
      "Human Gate Required",
  },
  {
    id: "BND-605",
    linked:
      "WFA-407 / PRB-504",
    purpose:
      "Detect repeated fictional routing loops and stop automatic reassignment.",
    mode:
      "Low-Impact Administrative Write",
    environment:
      "Synthetic lab",
    inputs:
      "Ticket ID, queue history, loop threshold",
    permissions:
      "Read queue history and update fictional exception state",
    validation:
      "Loop count meets approved threshold",
    dryRun:
      "Threshold simulation required",
    rate:
      "Single transition to exception state",
    fallback:
      "Workflow Exception Review",
    human:
      "Workflow owner resolves ownership",
    evidence:
      "Queue history, loop count, stop event, owner decision",
    owner:
      "Security Platform Owner",
    state:
      "Strong Fit",
  },
  {
    id: "BND-606",
    linked:
      "OPP-106 / HITL-206",
    purpose:
      "Monitor fictional automation-health metrics and recommend disable.",
    mode:
      "Recommendation-Only",
    environment:
      "Synthetic lab",
    inputs:
      "Failure rate, latency, stale-data rate, exception rate",
    permissions:
      "Read synthetic health metrics",
    validation:
      "Metric window and thresholds current",
    dryRun:
      "Threshold preview available",
    rate:
      "One recommendation per threshold window",
    fallback:
      "Display health Unknown if metrics are unavailable",
    human:
      "Platform owner decides whether to disable the workflow",
    evidence:
      "Metrics, threshold, recommendation, owner decision",
    owner:
      "Security Platform Owner",
    state:
      "Strong Fit",
  },
  {
    id: "BND-607",
    linked:
      "A17 Safety Boundary",
    purpose:
      "Autonomously perform a destructive, exploitative, credential-related, bypass, unauthorized, or real environment-changing action.",
    mode:
      "Prohibited",
    environment:
      "None",
    inputs:
      "Not applicable",
    permissions:
      "Not permitted",
    validation:
      "Reject design",
    dryRun:
      "Not used to justify prohibited behavior",
    rate:
      "Not applicable",
    fallback:
      "Replace with evidence packaging, recommendation, approval request, or other safe defensive support",
    human:
      "Use authorized professional processes outside this student curriculum",
    evidence:
      "Record the rejected proposal and safer redesign",
    owner:
      "A17 Governance Boundary",
    state:
      "Blocked",
  },
];

const dashboardMetrics = [
  {
    label: "Boundary records",
    value: "7",
    note: "Read-only, recommendation, low-impact write, approval-gated, and blocked designs",
  },
  {
    label: "Safe support designs",
    value: "6",
    note: "Every allowed design remains bounded, reviewable, and fictional",
  },
  {
    label: "Human-gated",
    value: "1",
    note: "High-consequence judgment stops for authorized review",
  },
  {
    label: "Prohibited",
    value: "1",
    note: "Unsafe autonomous real-world action is outside A17",
  },
];

const logs = [
  "[08:10] BND-601 mode=READ_ONLY validation=PASS source_state=CURRENT result=DISPLAY_CONTEXT",
  "[08:32] BND-602 mode=RECOMMENDATION_ONLY playbook_version=CURRENT analyst_choice=REQUIRED",
  "[08:54] BND-603 mode=LOW_IMPACT_WRITE destination=ALLOWLISTED dry_run=PASS result=ASSIGN_QUEUE",
  "[09:16] BND-604 mode=APPROVAL_GATED evidence=READY automated_decision=NO result=PAUSE_FOR_REVIEW",
  "[09:38] BND-605 mode=LOW_IMPACT_WRITE routing_loop=TRUE result=MOVE_TO_EXCEPTION",
  "[10:00] BND-606 mode=RECOMMENDATION_ONLY health=DEGRADED result=RECOMMEND_DISABLE",
  "[10:22] BND-607 mode=PROHIBITED result=BLOCK_AND_REDESIGN",
];

const antiPatterns = [
  {
    title: "Broad permission for convenience",
    problem:
      "A small support script is conceptually given far more access than its task requires.",
    better:
      "Design the minimum read or write scope needed for the bounded function.",
  },
  {
    title: "No dry run",
    problem:
      "A workflow change moves immediately from idea to action with no preview of affected records.",
    better:
      "Use a dry-run or simulation stage and review expected results.",
  },
  {
    title: "Guessing invalid input",
    problem:
      "The script invents values so it can continue.",
    better:
      "Reject, mark Missing, or route to human review.",
  },
  {
    title: "Unlimited retry",
    problem:
      "A failed operation repeats indefinitely and may create loops or duplicate records.",
    better:
      "Use bounded retry, idempotency, timeout, and exception handling.",
  },
  {
    title: "Secret in source code",
    problem:
      "Sensitive authentication material becomes part of files, logs, screenshots, or history.",
    better:
      "Use fictional placeholders in the lesson and model secure secret dependencies conceptually.",
  },
  {
    title: "No environment separation",
    problem:
      "Test logic is allowed to operate against real production systems.",
    better:
      "Keep this curriculum synthetic and understand professional dev/test/stage/prod separation conceptually.",
  },
  {
    title: "Logging sensitive content",
    problem:
      "Audit logs copy more private or secret material than reviewers need.",
    better:
      "Log identifiers, state, timing, version, and outcome while minimizing content.",
  },
  {
    title: "Script becomes policy",
    problem:
      "The team assumes whatever the script does must be authorized because the script exists.",
    better:
      "Governance defines permission; code implements only the approved boundary.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Use an allowlist, validate the ticket state and destination, preview the assignment in dry-run mode, then permit the low-impact fictional queue update with analyst override.",
    outcome:
      "Best. The write is bounded, validated, reversible, and observable.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Let the script assign any queue name supplied in the input.",
    outcome:
      "Risky. Unbounded targets weaken scope control and increase error impact.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Give the script broad permissions in case future features need them.",
    outcome:
      "Risky. Least privilege should reflect the current approved purpose.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Block the proposal and redesign it as evidence packaging plus an approval request for an authorized human.",
    outcome:
      "Best. The proposed autonomous action falls outside the A17 safe boundary.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow it only when the script's confidence score is high.",
    outcome:
      "Risky. Confidence does not create authorization or make prohibited autonomous action appropriate.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Allow it after one successful dry run.",
    outcome:
      "Risky. Dry-run quality does not override the safety and authority boundary.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest scripting boundary principle?",
    choices: [
      "Give the automation only the purpose, permissions, scope, and actions needed for its approved defensive support task.",
      "Give every script broad access for flexibility.",
      "Assume technical access equals authorization.",
      "Let the script decide its own scope.",
    ],
    answer: 0,
    explanation:
      "Safe automation begins with bounded purpose and least privilege.",
  },
  {
    question:
      "What is the purpose of dry-run mode?",
    choices: [
      "Preview what the automation would do without applying the state change.",
      "Hide errors.",
      "Bypass approval.",
      "Replace validation.",
    ],
    answer: 0,
    explanation:
      "Dry run supports review and testing before an allowed change is applied.",
  },
  {
    question:
      "What should happen when a required input fails validation?",
    choices: [
      "Stop or route to the defined safe fallback.",
      "Guess a value.",
      "Continue silently.",
      "Broaden permissions.",
    ],
    answer: 0,
    explanation:
      "Invalid input should reduce confidence and prevent unsafe continuation.",
  },
  {
    question:
      "Why is idempotency useful?",
    choices: [
      "It prevents repeated processing of the same logical request from creating duplicate effects.",
      "It makes a script run faster in every case.",
      "It removes the need for evidence.",
      "It allows unlimited retries.",
    ],
    answer: 0,
    explanation:
      "Idempotency is especially useful when retries or duplicate events can occur.",
  },
  {
    question:
      "What is strongest for a high-consequence decision?",
    choices: [
      "Package evidence and require an authorized human approval before advancing.",
      "Let the script decide when confidence is high.",
      "Treat timeout as approval.",
      "Allow any user to approve.",
    ],
    answer: 0,
    explanation:
      "High-consequence, authority-sensitive decisions need meaningful human review.",
  },
  {
    question:
      "What is strongest for secrets in this lesson?",
    choices: [
      "Use fictional placeholders and discuss secure lifecycle principles conceptually without accessing real credentials.",
      "Paste real secrets into sample code.",
      "Log authentication values for troubleshooting.",
      "Reuse one real credential everywhere.",
    ],
    answer: 0,
    explanation:
      "A17 should never use or expose real credentials.",
  },
  {
    question:
      "What is the purpose of the Safe Automation Boundary Checklist?",
    choices: [
      "Document purpose, authorization, permissions, environment, inputs, validation, dry run, fallback, evidence, ownership, and prohibited boundaries.",
      "Justify any automation that can technically run.",
      "Replace governance.",
      "Enable unsafe autonomous actions.",
    ],
    answer: 0,
    explanation:
      "The checklist makes the automation boundary explicit before scripting expands.",
  },
];

const checklistItems = [
  "The defensive purpose is explicit.",
  "Authorization is explicit.",
  "Environment scope is explicit.",
  "No real production systems are used in lesson work.",
  "No real credentials are used.",
  "Least privilege is defined conceptually.",
  "Inputs are bounded.",
  "Required fields are validated.",
  "State validation exists.",
  "Freshness validation exists where needed.",
  "Source attribution is checked.",
  "Allowlists are used for permitted values.",
  "Dry-run mode is available where appropriate.",
  "Rate limits are defined.",
  "Timeouts are defined.",
  "Duplicate protection or idempotency is considered.",
  "Safe fallback is defined.",
  "Human approval is required where consequence or authority demands it.",
  "Audit evidence is defined.",
  "Disable conditions are defined.",
  "Manual override is defined.",
  "Secret values are never logged.",
  "Unsafe autonomous actions are blocked.",
  "Ownership is assigned.",
  "Change triggers are defined.",
];

const takeaways = [
  "Safe scripting starts with purpose, authorization, least privilege, environment scope, impact, reversibility, evidence, and human control.",
  "Read-only evidence support and recommendation-only logic are generally safer than autonomous high-impact action.",
  "Low-impact administrative writes still need validation, allowlists, evidence, fallback, and override.",
  "Dry runs help reviewers inspect expected effects before an approved state change.",
  "Validation should stop bad input rather than guess missing or malformed values.",
  "Rate limits, timeout, idempotency, and retry boundaries reduce runaway workflow failure.",
  "Secret values should not appear in lesson code, logs, or screenshots; use fictional placeholders only.",
  "Environment separation keeps development and testing from affecting real operational systems.",
  "Governance grants authority; a script never grants itself authority.",
  "The Safe Automation Boundary Checklist prepares you for A17.7 Automation Failure Modes.",
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

export default function SafeScriptingBoundariesPage() {
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
              A17.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Safe Scripting Boundaries
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A useful script is not automatically a safe script. Professional
            automation needs explicit purpose, authority, least privilege,
            validation, environment separation, dry runs, evidence, fallback,
            monitoring, and stop conditions before it should be trusted.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches scripting boundaries conceptually using fictional
            workflows and synthetic records. It does not access or change real
            systems, credentials, networks, cloud accounts, endpoints, or
            production environments.
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
          lessonTitle="Safe Scripting Boundaries"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.6 Entry Readiness"
          items={[
            "I can distinguish playbook guidance from repeatable runbook procedures.",
            "I understand why automation needs stop conditions and fallback.",
            "I can distinguish low-impact support from authority-sensitive decisions.",
            "I will not connect lesson scripting concepts to real systems or credentials.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Script Should Have Less Power Than the Person Who Designed It"
        >
          <p className="leading-8">
            Automation can repeat a mistake far faster than a person. That is why
            professional script design does not begin with code. It begins with
            boundaries: what the script is allowed to see, what it is allowed to
            change, what it must validate, how it fails, what it records, and
            where a human must take over.
          </p>

          <p className="mt-4 leading-8">
            The strongest automation is deliberately boring. It performs a
            narrow job, rejects bad input, stops when uncertain, leaves evidence,
            and cannot silently expand into a more powerful role.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Code should implement an approved boundary—not invent a new one.
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
          eyebrow="Boundary Dimensions"
          title="Eight Questions Before a Script Is Allowed to Act"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {boundaryDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Safe: {item.safe}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Unsafe: {item.unsafe}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Script Modes"
          title="Not Every Automation Needs the Same Level of Permission"
        >
          <div className="grid gap-5">
            {scriptModes.map((item, index) => (
              <article
                key={item.mode}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap gap-3">
                      <h3 className="text-xl font-black text-purple-50">
                        {item.mode}
                      </h3>
                      <span className="rounded-full border border-purple-300/30 px-3 py-1 text-xs font-black text-purple-100">
                        {item.rating}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-purple-100">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Example: {item.examples}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Human role: {item.human}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safeguards"
          title="Twelve Controls That Make Automation More Predictable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {safeguards.map((item) => (
              <article
                key={item.safeguard}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.safeguard}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Input Validation"
          title="Bad Input Should Stop the Workflow, Not Be Invented Away"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {inputValidation.map((item) => (
              <article
                key={item.check}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.check}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Strong: {item.good}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak: {item.bad}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Environment Separation"
          title="Development, Testing, Staging, and Production Have Different Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {environmentSeparation.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.area}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Purpose: {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Allowed in this lesson: {item.allowed}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Not allowed: {item.notAllowed}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Secret Handling"
          title="Automation Credentials Are a Governance Dependency, Not Lesson Content"
        >
          <p className="leading-8">
            Real automation often depends on service identities or secrets, but
            A17 never needs actual credentials. The lesson focuses on the
            governance principles that keep secret handling separate, minimal,
            non-logged, and revocable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {secretHandling.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.principle}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Safe lesson approach: {item.safeLessonApproach}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Failure Behavior"
          title="A Safe Script Knows When to Stop"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Required input is missing.",
              "Input format is invalid.",
              "Requested target is outside the allowlist.",
              "Source data is stale beyond the approved threshold.",
              "Two required sources conflict.",
              "Approval is missing.",
              "A dependency times out.",
              "Retry limit is reached.",
              "Duplicate request is detected.",
              "Rate limit is crossed.",
              "Audit logging fails.",
              "Workflow health is degraded.",
              "A requested action crosses the permitted impact boundary.",
              "The script version is retired.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Boundary Record"
          title="What a Reviewable Scripting Boundary Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {boundaryFields.map((item) => (
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
          eyebrow="Fictional Boundary Set"
          title="Seven Northbridge Scripting Boundary Records"
        >
          <div className="grid gap-5">
            {northbridgeBoundaries.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.mode}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.purpose}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-purple-200">
                  Linked evidence: {item.linked}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Environment", item.environment],
                    ["Inputs", item.inputs],
                    ["Permissions", item.permissions],
                    ["Validation", item.validation],
                    ["Dry run", item.dryRun],
                    ["Rate / repetition", item.rate],
                    ["Fallback", item.fallback],
                    ["Human role", item.human],
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
          title="Northbridge Safe Scripting Boundary Dashboard"
          subtitle="Fictional permission scope, validation, dry-run, human gate, and prohibited-action summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Automation Proposal Crossed the Approved Action Boundary"
          severity="High"
          time="10:22"
          source="Fictional Automation Governance Review"
          details="BND-607 proposes an autonomous action that would be destructive, unauthorized, credential-related, exploitative, bypass-oriented, or capable of changing a real environment. That proposal is outside the A17 curriculum boundary."
          recommendation="Block the design and replace it with safe evidence packaging, recommendation, approval support, or another bounded defensive workflow."
        />

        <FakeLogPanel
          title="Fictional Safe Scripting Boundary Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Low-Impact Ticket Assignment"
          question="What is the strongest boundary for BND-603?"
          evidence={[
            "The task changes only a fictional queue-assignment field.",
            "The destination can be restricted to an approved allowlist.",
            "The ownership source exposes freshness.",
            "The assignment is reversible.",
            "Analysts can override incorrect routing and record the reason.",
          ]}
          options={[
            "Allow the bounded administrative write with validation, allowlist, dry run, evidence, and analyst override.",
            "Give the script permission to modify any ticket field.",
            "Allow any destination queue supplied by input.",
            "Remove logging to improve speed.",
          ]}
          bestAnswer={0}
          explanation="A low-impact, reversible administrative write can be reasonable when scope, validation, allowlists, evidence, and human correction are strong."
        />

        <Section
          eyebrow="Common Scripting Mistakes"
          title="Eight Ways Useful Automation Becomes Unsafe"
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
          title="Scenario Decision Lab 1 — Queue Assignment Script"
          scenario="A fictional script proposes moving a synthetic ticket to the correct review queue. The assignment is reversible, but the destination should be limited to approved queues and ownership data can occasionally be stale."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Proposal Outside the Safe Boundary"
          scenario="A proposed automation would independently perform a destructive, unauthorized, exploitative, credential-related, bypass-oriented, or real environment-changing action."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Safe Automation Boundary Checklist"
        >
          <p className="leading-8">
            Review fictional automation proposals and define the exact
            permissions, validation, scope, evidence, fallback, and human
            controls that keep each design within an approved defensive
            boundary.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty-five fictional BND records.",
              "Give every record a stable BND ID.",
              "Link each record to relevant OPP, HITL, ENR, WFA, and PRB IDs.",
              "Write the defensive purpose.",
              "Classify the mode as Read-Only, Recommendation, Low-Impact Write, Approval-Gated, or Prohibited.",
              "Define the fictional environment.",
              "List bounded inputs.",
              "Define conceptual least-privilege permissions.",
              "Define required-field validation.",
              "Define type and format validation.",
              "Define workflow-state validation.",
              "Define source freshness validation.",
              "Define source attribution validation.",
              "Define allowlists.",
              "Define dry-run behavior.",
              "Define rate limits.",
              "Define timeout.",
              "Define retry limits.",
              "Define idempotency or duplicate protection.",
              "Define safe default.",
              "Define approval gates.",
              "Define manual override.",
              "Define audit evidence.",
              "Define health monitoring.",
              "Define disable conditions.",
              "Define secret-handling assumptions using placeholders only.",
              "Define environment-separation assumptions.",
              "Assign a workflow owner.",
              "Assign a script owner.",
              "Define review cadence.",
              "Define change triggers.",
              "Include at least ten Read-Only designs.",
              "Include at least eight Recommendation designs.",
              "Include at least seven Low-Impact Write designs.",
              "Include at least five Approval-Gated designs.",
              "Include at least five Prohibited designs.",
              "Include at least five stale-data stop examples.",
              "Include at least five allowlist-block examples.",
              "Include at least five duplicate-protection examples.",
              "Include at least five rate-limit or timeout examples.",
              "Include at least five examples where missing approval causes pause rather than continuation.",
              "Include at least three examples where a script is redesigned from an unsafe action into safe evidence or approval support.",
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
              Use fictional scripts, synthetic records, mock dependencies, and
              conceptual permissions only. Do not access or operate on real
              endpoints, networks, cloud accounts, production platforms,
              credentials, private records, or live security tools. Do not
              create or execute destructive, exploitative, credential-related,
              bypass, unauthorized, or real environment-changing automation.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: High-Consequence Proposal"
          question="What is the strongest response to BND-607?"
          evidence={[
            "The proposed action could materially change a real environment.",
            "The action is not necessary for evidence preparation or ticket workflow support.",
            "The consequence is high.",
            "The proposed script would remove meaningful human authority.",
            "A safer evidence-packaging and approval-request workflow can support the same decision process.",
          ]}
          options={[
            "Block the autonomous action and redesign the workflow around evidence packaging and authorized human approval.",
            "Allow it when confidence is high.",
            "Allow it after a successful dry run.",
            "Allow it if the script has broad permissions.",
          ]}
          bestAnswer={0}
          explanation="Dry runs and confidence do not make a prohibited or unsafe action appropriate. The design should remain within safe defensive support."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Scripting Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that determines what
            scripts may read, what they may update, where human approval is
            required, how they fail safely, and how their permissions and
            versions are reviewed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Purpose authorization",
              "Environment classification",
              "Action-impact classification",
              "Least privilege",
              "Read vs write boundary",
              "Input validation",
              "Allowlists",
              "Dry-run requirements",
              "Rate limits",
              "Timeouts",
              "Retry limits",
              "Idempotency",
              "Safe default",
              "Approval gates",
              "Manual override",
              "Evidence logging",
              "Secret-handling policy",
              "Health monitoring",
              "Disable criteria",
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
            The strongest standard should make safe automation easy to approve
            and unsafe scope expansion easy to detect and stop.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.6 Mini Quiz: Safe Scripting Boundaries"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Safe Automation Boundary Checklist"
          prompt="Create the sixth artifact for your A17 Safe Automation Design and Governance Plan: a fictional Safe Automation Boundary Checklist with at least thirty-five records. Include BND ID, linked OPP/HITL/ENR/WFA/PRB IDs, defensive purpose, script mode, environment, bounded inputs, conceptual permissions, validation, allowlists, dry run, rate limit, timeout, retry limit, idempotency, safe default, approval gate, manual override, audit evidence, health monitoring, disable criteria, secret-handling assumptions using placeholders only, owner, review cadence, and change triggers."
          tips={[
            "Start from authority and purpose before code.",
            "Use least privilege and bounded inputs.",
            "Make invalid input stop safely.",
            "Use dry runs, limits, and evidence.",
            "Keep real credentials and real systems completely outside the lesson.",
            "Redesign unsafe proposals into evidence or approval support.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.7?"
        >
          <p className="leading-8">
            A17.7 focuses on Automation Failure Modes. Before continuing, make
            sure you can explain what a safe script is allowed to do, how it
            validates inputs, how it fails, and how a human can stop or correct
            it.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can classify read-only, recommendation, low-impact write, approval-gated, and prohibited script modes.",
              "I can explain least privilege, allowlists, dry runs, timeouts, rate limits, and idempotency.",
              "I can design safe validation and fallback without guessing bad data.",
              "I can explain why real secrets and production systems stay outside lesson work.",
              "I can identify when a script should stop and require a human.",
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
          title="How to Make the Safe Automation Boundary Checklist Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "State the purpose",
                detail:
                  "A reviewer should understand the legitimate defensive job before seeing permissions or implementation details.",
              },
              {
                title: "Classify action impact",
                detail:
                  "Read-only support, recommendation, low-impact write, approval-gated change, and prohibited action should be visibly different.",
              },
              {
                title: "Show validation",
                detail:
                  "List what must be true before the script is allowed to continue.",
              },
              {
                title: "Show bounded permissions",
                detail:
                  "Permissions should map to the exact task instead of broad future possibilities.",
              },
              {
                title: "Show failure behavior",
                detail:
                  "Timeout, retry limit, missing data, stale source, and invalid input should have safe outcomes.",
              },
              {
                title: "Show evidence",
                detail:
                  "Record version, input reference, validation state, output, exception, owner, and time.",
              },
              {
                title: "Show stop authority",
                detail:
                  "Humans need a governed way to disable or override automation when quality degrades.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.7 will use these boundaries to analyze how automation fails and how safe fallback prevents cascading errors.",
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
            A17.6 scripting remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not access or automate real endpoints, networks, cloud accounts,
            production platforms, credentials, private records, or live security
            tools. Do not create or execute destructive, exploitative,
            credential-related, bypass, unauthorized, or real
            environment-changing scripts. This lesson is about permissions,
            validation, evidence, dry runs, safe fallback, and governance.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.6 Safe Scripting Boundaries Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for scripting purpose,
            authorization, least privilege, action impact, validation,
            allowlists, dry runs, timeouts, rate limits, idempotency, secrets,
            evidence, fallback, and human control. Next, A17.7 focuses on
            Automation Failure Modes.
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