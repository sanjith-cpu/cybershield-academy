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
const previousLesson = `${modulePath}/measuring-automation-value`;
const nextLesson = `${modulePath}/security-automation-design-lab`;

const objectives = [
  "Explain automation governance as the assignment of ownership, authority, evidence, review, change control, exception handling, monitoring, and lifecycle responsibility around defensive automation.",
  "Distinguish the responsibilities of automation owners, control owners, evidence owners, workflow owners, risk or governance owners, approvers, analysts, and platform operators.",
  "Design decision rights for approval, permissions, change review, exceptions, threshold changes, disabling, re-enabling, retirement, and risk acceptance without confusing technical access with authority.",
  "Evaluate governance quality using accountability, separation of duties, evidence freshness, review cadence, metric ownership, change traceability, exception aging, and lifecycle completeness.",
  "Build an Automation Governance Matrix that becomes the ninth artifact in the A17 Safe Automation Design and Governance Plan.",
];

const governanceRoles = [
  {
    role: "Automation Owner",
    responsibility:
      "Owns the overall automation outcome, scope, health, maintenance, and lifecycle.",
    decisions:
      "Proposes changes, coordinates reviews, responds to degradation, and ensures ownership remains current.",
    evidence:
      "Version history, health records, change requests, owner reviews, retirement records.",
  },
  {
    role: "Workflow Owner",
    responsibility:
      "Owns how the automation fits into the defensive process, queue, ticket, and analyst workflow.",
    decisions:
      "Approves workflow-state logic, routing design, fallback, and operational handoffs.",
    evidence:
      "Workflow maps, routing decisions, exception history, SLA and state records.",
  },
  {
    role: "Control Owner",
    responsibility:
      "Owns the intended defensive control objective the automation supports.",
    decisions:
      "Defines what success means and whether the automation still supports the control as designed.",
    evidence:
      "Control intent, control test results, evidence requirements, residual gaps.",
  },
  {
    role: "Evidence Owner",
    responsibility:
      "Ensures records are attributable, complete, current, and available for review.",
    decisions:
      "Defines evidence fields, retention expectations, source quality, and evidence-health triggers.",
    evidence:
      "Log schema, source inventory, evidence completeness metrics, exception evidence.",
  },
  {
    role: "Platform Owner",
    responsibility:
      "Owns the fictional automation platform, integration reliability, permissions, and service health.",
    decisions:
      "Approves platform changes, monitors dependencies, and manages technical disable or degraded states.",
    evidence:
      "Platform health, dependency status, permission reviews, availability records.",
  },
  {
    role: "Analyst / Operator",
    responsibility:
      "Uses the automation output, applies judgment, records overrides, and reports workflow problems.",
    decisions:
      "Accepts, rejects, corrects, or escalates automation-supported outputs within assigned authority.",
    evidence:
      "Review notes, overrides, reason codes, analyst feedback, escalations.",
  },
  {
    role: "Risk / Governance Owner",
    responsibility:
      "Owns acceptance of residual risk, policy alignment, exception oversight, and material governance decisions.",
    decisions:
      "Approves exceptions, material scope changes, risk acceptance, and continued operation under known gaps.",
    evidence:
      "Exception approvals, risk decisions, governance reviews, review dates.",
  },
  {
    role: "Authorized Approver",
    responsibility:
      "Provides explicit decision authority at defined human-gated workflow points.",
    decisions:
      "Approves, rejects, escalates, or requests more evidence for authority-sensitive transitions.",
    evidence:
      "Approver identity, evidence package, decision, rationale, timestamp.",
  },
  {
    role: "Change Reviewer",
    responsibility:
      "Independently reviews proposed automation changes before they become active.",
    decisions:
      "Checks scope, permissions, failure behavior, metrics, evidence, and rollback or fallback readiness.",
    evidence:
      "Change review record, test summary, approvals, conditions, effective version.",
  },
  {
    role: "Business / Service Owner",
    responsibility:
      "Provides context on business criticality, operational dependencies, acceptable disruption, and service ownership.",
    decisions:
      "Confirms whether automation behavior still fits the service's business context.",
    evidence:
      "Service mapping, dependency statement, ownership confirmation, business-impact notes.",
  },
];

const governanceDomains = [
  {
    domain: "Purpose and scope",
    questions:
      "What problem does the automation solve? Which workflows and objects are in scope? What is explicitly out of scope?",
    evidence:
      "Approved purpose statement, boundary checklist, linked workflow records.",
    trigger:
      "New data, new action, new workflow, new business use, or new environment.",
  },
  {
    domain: "Decision authority",
    questions:
      "Which decisions may automation support, which may it make administratively, and which require human approval?",
    evidence:
      "Human-in-the-Loop Decision Matrix and approval records.",
    trigger:
      "New consequential transition or authority change.",
  },
  {
    domain: "Permissions",
    questions:
      "What is the smallest conceptual permission set needed for the approved support task?",
    evidence:
      "Permission design, allowlists, environment boundaries, review results.",
    trigger:
      "Any request for broader access or a new write capability.",
  },
  {
    domain: "Evidence",
    questions:
      "What proves the automation acted correctly, failed safely, and stayed within scope?",
    evidence:
      "Version, inputs, outputs, timestamps, error states, approvals, overrides.",
    trigger:
      "Evidence completeness drops or logging changes.",
  },
  {
    domain: "Metrics",
    questions:
      "Which measures show value, safety, reliability, analyst impact, and governance health?",
    evidence:
      "Automation Value Scorecard.",
    trigger:
      "Metric threshold breach, unexplained trend, or loss of measurement confidence.",
  },
  {
    domain: "Change control",
    questions:
      "Who reviews changes to logic, sources, permissions, thresholds, dependencies, or fallback?",
    evidence:
      "Change request, test evidence, reviewer, approval, version, effective date.",
    trigger:
      "Any material automation change.",
  },
  {
    domain: "Exceptions",
    questions:
      "How are temporary deviations documented, approved, bounded, monitored, and closed?",
    evidence:
      "Exception ID, owner, rationale, scope, expiration, conditions, closure evidence.",
    trigger:
      "Any need to operate outside the normal approved rule.",
  },
  {
    domain: "Lifecycle",
    questions:
      "How is automation introduced, reviewed, maintained, paused, re-enabled, retired, and archived?",
    evidence:
      "Lifecycle state, owner review, version history, retirement decision, replacement link.",
    trigger:
      "Ownership loss, replacement workflow, obsolete purpose, or repeated degradation.",
  },
];

const decisionRights = [
  {
    decision: "Approve initial automation scope",
    accountable:
      "Automation Owner",
    consulted:
      "Workflow Owner, Control Owner, Risk / Governance Owner",
    evidence:
      "Purpose, boundary, value hypothesis, safe fallback, owners.",
  },
  {
    decision: "Approve low-impact workflow rule change",
    accountable:
      "Workflow Owner",
    consulted:
      "Automation Owner, Change Reviewer",
    evidence:
      "Change diff, synthetic test evidence, rollback/fallback plan.",
  },
  {
    decision: "Approve broader permission request",
    accountable:
      "Platform Owner",
    consulted:
      "Automation Owner, Risk / Governance Owner, Change Reviewer",
    evidence:
      "Purpose, least-privilege analysis, new boundary, risk review.",
  },
  {
    decision: "Approve authority-sensitive workflow transition",
    accountable:
      "Authorized Approver",
    consulted:
      "Analyst, Workflow Owner",
    evidence:
      "Current evidence package, uncertainty, rationale, timestamp.",
  },
  {
    decision: "Accept temporary exception",
    accountable:
      "Risk / Governance Owner",
    consulted:
      "Automation Owner, Control Owner, Evidence Owner",
    evidence:
      "Exception scope, rationale, compensating control, owner, expiration.",
  },
  {
    decision: "Disable degraded automation",
    accountable:
      "Platform Owner",
    consulted:
      "Automation Owner, Workflow Owner",
    evidence:
      "Threshold breach, impact, fallback readiness, disable reason.",
  },
  {
    decision: "Re-enable automation",
    accountable:
      "Automation Owner",
    consulted:
      "Platform Owner, Change Reviewer, Workflow Owner",
    evidence:
      "Root cause addressed, validation passed, metrics healthy, fallback ready.",
  },
  {
    decision: "Retire automation",
    accountable:
      "Automation Owner",
    consulted:
      "Workflow Owner, Business / Service Owner, Evidence Owner",
    evidence:
      "Replacement or end-of-need rationale, final evidence, archive record.",
  },
];

const lifecycleStates = [
  {
    state: "Proposed",
    meaning:
      "The automation idea exists but has not been approved for use.",
    required:
      "Purpose, owner, scope, value hypothesis, boundary, initial risks.",
    exit:
      "Governance review approves design work.",
  },
  {
    state: "Designed",
    meaning:
      "Workflow logic, human boundaries, evidence, failure modes, metrics, and safeguards are documented.",
    required:
      "A17 artifacts or equivalent design evidence.",
    exit:
      "Testing and independent change review are ready.",
  },
  {
    state: "Validated",
    meaning:
      "Synthetic testing confirms normal behavior, safe fallback, evidence, and monitoring.",
    required:
      "Test results, failure tests, dry-run evidence, reviewer decision.",
    exit:
      "Authorized activation approval.",
  },
  {
    state: "Active",
    meaning:
      "The fictional automation is approved for its bounded workflow purpose.",
    required:
      "Current version, owners, metrics, permissions, evidence, fallback.",
    exit:
      "Continued review, degraded state, paused state, or retirement.",
  },
  {
    state: "Degraded",
    meaning:
      "The automation remains partially usable but one or more dependencies or metrics are unhealthy.",
    required:
      "Visible degraded indicator, affected scope, owner, fallback, review date.",
    exit:
      "Recovery validation or pause.",
  },
  {
    state: "Paused",
    meaning:
      "Automation is intentionally stopped while manual or alternate workflow handles the work.",
    required:
      "Pause reason, owner, fallback, affected scope, re-enable criteria.",
    exit:
      "Validated re-enable or retirement.",
  },
  {
    state: "Exception",
    meaning:
      "A temporary approved deviation from the normal design is active.",
    required:
      "Exception ID, scope, rationale, approval, expiration, compensating control.",
    exit:
      "Close exception, redesign, or retire.",
  },
  {
    state: "Retired",
    meaning:
      "The automation is no longer approved for active use.",
    required:
      "Retirement decision, replacement link, evidence archive, permission removal confirmation conceptually.",
    exit:
      "No return without a new governance review.",
  },
];

const changeTypes = [
  {
    type: "Logic change",
    examples:
      "New branch, new routing rule, different duplicate threshold, new closure condition.",
    review:
      "Re-test affected behavior, failure modes, evidence, metrics, and human boundaries.",
  },
  {
    type: "Data-source change",
    examples:
      "New enrichment source, changed schema, different owner directory.",
    review:
      "Reassess relevance, freshness, attribution, sensitivity, and failure behavior.",
  },
  {
    type: "Permission change",
    examples:
      "Read becomes write, new queue scope, broader object access.",
    review:
      "Reassess least privilege, impact, authorization, dry run, and rollback/fallback.",
  },
  {
    type: "Metric change",
    examples:
      "Threshold or target is changed.",
    review:
      "Document rationale and ensure targets are not being weakened simply because performance is poor.",
  },
  {
    type: "Ownership change",
    examples:
      "Automation owner, workflow owner, or approver changes.",
    review:
      "Confirm responsibilities, access, review cadence, and unresolved exceptions transfer cleanly.",
  },
  {
    type: "Business-purpose change",
    examples:
      "Automation is used for a different service or decision context.",
    review:
      "Treat as material scope review, not a minor configuration update.",
  },
  {
    type: "Dependency change",
    examples:
      "Ticketing platform field, enrichment service, playbook catalog, or integration changes.",
    review:
      "Re-test compatibility, fallback, and evidence completeness.",
  },
  {
    type: "Retirement / replacement",
    examples:
      "New workflow supersedes the old one.",
    review:
      "Stop new use, archive evidence, update references, confirm replacement ownership.",
  },
];

const exceptionFields = [
  {
    field: "EXC ID",
    purpose:
      "Stable identifier for the governance exception.",
    example:
      "EXC-901",
  },
  {
    field: "Normal rule",
    purpose:
      "Shows what the approved automation would normally require.",
    example:
      "Routing accuracy must remain above 90%",
  },
  {
    field: "Requested deviation",
    purpose:
      "Defines exactly what temporary difference is being approved.",
    example:
      "Continue at 88% while ownership source is repaired",
  },
  {
    field: "Rationale",
    purpose:
      "Explains why the exception is necessary.",
    example:
      "Manual fallback would create a larger backlog during a short source migration",
  },
  {
    field: "Scope",
    purpose:
      "Limits the exception to specific workflows, queues, or records.",
    example:
      "Only fictional scheduling alerts",
  },
  {
    field: "Compensating control",
    purpose:
      "Defines extra review or protection while the exception exists.",
    example:
      "Mandatory analyst routing confirmation",
  },
  {
    field: "Owner",
    purpose:
      "Names who must remediate the exception.",
    example:
      "SOC Workflow Owner",
  },
  {
    field: "Approver",
    purpose:
      "Names the authority accepting temporary residual risk.",
    example:
      "Risk / Governance Owner",
  },
  {
    field: "Expiration",
    purpose:
      "Prevents the exception from becoming permanent by default.",
    example:
      "14 days",
  },
  {
    field: "Closure evidence",
    purpose:
      "Defines what proves the exception is no longer needed.",
    example:
      "Routing source repaired and two healthy review windows",
  },
];

const governanceFields = [
  {
    field: "GOV-A ID",
    purpose:
      "Stable identifier for the governance record.",
    example:
      "GOV-A901",
  },
  {
    field: "Automation",
    purpose:
      "Names the fictional automation or workflow being governed.",
    example:
      "Northbridge Ticket Routing Automation",
  },
  {
    field: "Purpose owner",
    purpose:
      "Names who owns the automation outcome.",
    example:
      "Automation Owner",
  },
  {
    field: "Workflow owner",
    purpose:
      "Names who owns the operational process.",
    example:
      "SOC Workflow Owner",
  },
  {
    field: "Evidence owner",
    purpose:
      "Names who owns evidence completeness and quality.",
    example:
      "Evidence Owner",
  },
  {
    field: "Decision authority",
    purpose:
      "Defines who may approve material or authority-sensitive decisions.",
    example:
      "Incident Response Lead",
  },
  {
    field: "Review cadence",
    purpose:
      "Defines routine governance review frequency.",
    example:
      "Monthly plus event-driven review",
  },
  {
    field: "Key metrics",
    purpose:
      "Links the automation to value and health measures.",
    example:
      "VAL-802, VAL-809, VAL-810",
  },
  {
    field: "Change trigger",
    purpose:
      "Defines what material change reopens governance review.",
    example:
      "New write permission or changed routing source",
  },
  {
    field: "Disable authority",
    purpose:
      "Defines who can stop the automation when safety or quality degrades.",
    example:
      "Platform Owner",
  },
  {
    field: "Exception authority",
    purpose:
      "Defines who may approve a temporary deviation.",
    example:
      "Risk / Governance Owner",
  },
  {
    field: "Retirement owner",
    purpose:
      "Defines who closes the lifecycle when automation is no longer needed.",
    example:
      "Automation Owner",
  },
];

const northbridgeGovernance = [
  {
    id: "GOV-A901",
    automation:
      "Alert Enrichment Automation",
    linked:
      "OPP-101 / ENR-301 / BND-601 / FM-701 / VAL-801",
    automationOwner:
      "Security Automation Engineer",
    workflowOwner:
      "SOC Workflow Owner",
    controlOwner:
      "Detection Operations Owner",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Security Operations Lead",
    review:
      "Monthly + source-change review",
    metrics:
      "Time to usable evidence, stale-data rate, evidence completeness",
    changes:
      "New enrichment field, new source, new sensitivity, changed freshness threshold",
    disable:
      "Platform Owner may disable when required enrichment quality breaches threshold",
    exception:
      "Risk / Governance Owner",
    state:
      "Active",
  },
  {
    id: "GOV-A902",
    automation:
      "Ticket Creation and Routing Automation",
    linked:
      "OPP-102 / WFA-401 / WFA-402 / BND-603 / FM-702 / FM-703 / VAL-802",
    automationOwner:
      "SOC Workflow Owner",
    workflowOwner:
      "SOC Workflow Owner",
    controlOwner:
      "Security Operations Lead",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Security Operations Lead",
    review:
      "Weekly operations + monthly governance",
    metrics:
      "Routing accuracy, reassignment rate, duplicate rate, loop rate",
    changes:
      "Queue map, ownership source, routing rule, ticket schema, write scope",
    disable:
      "Platform Owner or SOC Workflow Owner on loop or duplicate threshold breach",
    exception:
      "Risk / Governance Owner",
    state:
      "Active",
  },
  {
    id: "GOV-A903",
    automation:
      "Playbook Recommendation Automation",
    linked:
      "OPP-104 / HITL-203 / PRB-501 / BND-602 / VAL-803",
    automationOwner:
      "Incident Response Process Owner",
    workflowOwner:
      "SOC Workflow Owner",
    controlOwner:
      "Incident Response Lead",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Incident Response Lead",
    review:
      "Monthly + playbook-catalog change review",
    metrics:
      "Recommendation acceptance, override reasons, analyst review time",
    changes:
      "New playbook, category mapping, branch logic, recommendation rule",
    disable:
      "Incident Response Process Owner if guidance becomes stale or misleading",
    exception:
      "Risk / Governance Owner",
    state:
      "Active",
  },
  {
    id: "GOV-A904",
    automation:
      "High-Consequence Approval Workflow",
    linked:
      "HITL-204 / WFA-406 / BND-604 / FM-707 / VAL-810",
    automationOwner:
      "Incident Response Lead",
    workflowOwner:
      "Incident Response Lead",
    controlOwner:
      "Risk / Governance Owner",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Authorized Incident Response Lead",
    review:
      "Every material change + monthly evidence review",
    metrics:
      "Explicit approval completeness, timeout escalation quality",
    changes:
      "Authority map, approval states, timeout, evidence package schema",
    disable:
      "Immediate block if explicit approval completeness is below 100%",
    exception:
      "No exception to explicit approval requirement within A17",
    state:
      "Human Gated",
  },
  {
    id: "GOV-A905",
    automation:
      "Automation Health Monitor",
    linked:
      "OPP-106 / ENR-306 / BND-606 / FM-708 / VAL-806",
    automationOwner:
      "Security Platform Owner",
    workflowOwner:
      "Security Platform Owner",
    controlOwner:
      "Automation Owner",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Security Platform Owner",
    review:
      "Weekly health + monthly threshold review",
    metrics:
      "Failure rate, retry rate, fallback success, recovery time",
    changes:
      "Threshold, metric window, health source, disable criteria",
    disable:
      "Platform Owner",
    exception:
      "Risk / Governance Owner",
    state:
      "Active",
  },
  {
    id: "GOV-A906",
    automation:
      "Routing Exception Process",
    linked:
      "WFA-407 / PRB-504 / BND-605 / FM-703 / VAL-809",
    automationOwner:
      "SOC Workflow Owner",
    workflowOwner:
      "SOC Workflow Owner",
    controlOwner:
      "Security Operations Lead",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Security Operations Lead",
    review:
      "Weekly exception aging review",
    metrics:
      "Loop rate, exception age, reassignment, ownership resolution time",
    changes:
      "Loop threshold, fallback queue, ownership rule",
    disable:
      "Automatic routing stops at defined loop threshold",
    exception:
      "Risk / Governance Owner for temporary alternate routing",
    state:
      "Exception Support",
  },
  {
    id: "GOV-A907",
    automation:
      "Candidate-for-Closure Workflow",
    linked:
      "WFA-408 / PRB-505 / FM-705 / VAL-808",
    automationOwner:
      "SOC Workflow Owner",
    workflowOwner:
      "SOC Workflow Owner",
    controlOwner:
      "Security Operations Lead",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Authorized Analyst",
    review:
      "Monthly closure-quality review",
    metrics:
      "Evidence completeness, reopen rate, closure-confirmation completeness",
    changes:
      "Closure criteria, required fields, approval rule",
    disable:
      "Stop auto-candidate transition when required evidence completeness drops",
    exception:
      "Risk / Governance Owner",
    state:
      "Approval Gated",
  },
  {
    id: "GOV-A908",
    automation:
      "Retired Documentation Linker",
    linked:
      "PRB-506 / FM-706",
    automationOwner:
      "Security Operations Documentation Owner",
    workflowOwner:
      "Incident Response Process Owner",
    controlOwner:
      "Security Operations Lead",
    evidenceOwner:
      "Evidence Owner",
    approver:
      "Documentation Owner",
    review:
      "Monthly version-health review",
    metrics:
      "Retired-version usage, broken-link rate, current-version coverage",
    changes:
      "Document retirement, replacement, dependency link update",
    disable:
      "Block retired versions from active recommendation immediately",
    exception:
      "No active-use exception for retired guidance",
    state:
      "Maintenance",
  },
];

const dashboardMetrics = [
  {
    label: "Governed automations",
    value: "8",
    note: "Enrichment, routing, recommendations, approvals, health, exceptions, closure, and documentation",
  },
  {
    label: "Human-gated",
    value: "2",
    note: "High-consequence approval and closure preserve explicit human authority",
  },
  {
    label: "No-exception rules",
    value: "2",
    note: "Explicit approval and retired guidance cannot be bypassed within A17",
  },
  {
    label: "Lifecycle coverage",
    value: "8 states",
    note: "Proposed through Retired with evidence and ownership at every stage",
  },
];

const logs = [
  "[08:10] GOV-A901 review=MONTHLY owner=SECURITY_AUTOMATION_ENGINEER state=ACTIVE",
  "[08:32] GOV-A902 metric=ROUTING_ACCURACY current=94% target=95% action=CONTINUE_TUNE",
  "[08:54] GOV-A903 override_review=ENABLED recommendation_acceptance=78% state=ACTIVE",
  "[09:16] GOV-A904 approval_completeness=100% exception_allowed=NO state=HUMAN_GATED",
  "[09:38] GOV-A905 fallback_success=97% target=98% action=REVIEW",
  "[10:00] GOV-A906 routing_loop=DETECTED action=STOP_AUTOROUTING owner=SOC_WORKFLOW_OWNER",
  "[10:22] GOV-A907 evidence_completeness=99% closure_confirm=REQUIRED state=APPROVAL_GATED",
  "[10:44] GOV-A908 retired_version_usage=0 active_link_check=PASS state=MAINTENANCE",
];

const governanceHealthSignals = [
  {
    signal: "Owner missing",
    meaning:
      "No current person or role is accountable for the automation outcome.",
    response:
      "Pause expansion and assign ownership before further change.",
  },
  {
    signal: "Review overdue",
    meaning:
      "The automation has not received its required governance review.",
    response:
      "Open review and consider temporary restrictions if dependencies changed.",
  },
  {
    signal: "Exception expired",
    meaning:
      "A temporary deviation reached its expiration without closure or renewal.",
    response:
      "Return to the normal rule, pause, or obtain new explicit approval.",
  },
  {
    signal: "Metric threshold breached",
    meaning:
      "A defined quality, reliability, safety, or governance threshold has been crossed.",
    response:
      "Trigger the documented tune, investigate, pause, or disable decision.",
  },
  {
    signal: "Permission expanded",
    meaning:
      "Automation requests broader access than the approved boundary.",
    response:
      "Require a material change review before activation.",
  },
  {
    signal: "Evidence completeness drops",
    meaning:
      "The automation is less explainable or auditable than before.",
    response:
      "Treat as a control issue and block affected transitions where required.",
  },
  {
    signal: "Ownership changes",
    meaning:
      "A responsible team or approver has changed.",
    response:
      "Revalidate decision rights, access, exception ownership, and review cadence.",
  },
  {
    signal: "Purpose changes",
    meaning:
      "The automation is being used for a different workflow or business reason.",
    response:
      "Reopen scope, risk, permission, human-boundary, and metric review.",
  },
  {
    signal: "Replacement available",
    meaning:
      "A newer workflow supersedes the old automation.",
    response:
      "Plan retirement, update references, preserve evidence, and close permissions conceptually.",
  },
  {
    signal: "Repeated overrides",
    meaning:
      "Human reviewers frequently correct the automation.",
    response:
      "Investigate whether logic, evidence, ownership, or business context has drifted.",
  },
];

const antiPatterns = [
  {
    title: "Technical owner equals all authority",
    problem:
      "The person maintaining the automation is assumed to have authority to accept risk, approve business scope, and make high-impact decisions.",
    better:
      "Separate operational ownership from approval, control, risk, and business authority.",
  },
  {
    title: "Exceptions never expire",
    problem:
      "Temporary deviations become permanent without review.",
    better:
      "Require scope, compensating control, owner, expiration, and closure evidence.",
  },
  {
    title: "Metrics have no owner",
    problem:
      "Dashboards show threshold breaches but nobody is responsible for deciding what happens next.",
    better:
      "Assign metric ownership and explicit decision rules.",
  },
  {
    title: "Change without re-review",
    problem:
      "A permission, data source, or purpose changes but the automation remains 'approved' under the old design.",
    better:
      "Use material change triggers that reopen governance review.",
  },
  {
    title: "No retirement process",
    problem:
      "Old automations and documentation remain active after replacement.",
    better:
      "Retire intentionally, block new use, preserve evidence, and update references.",
  },
  {
    title: "Access mistaken for approval",
    problem:
      "Anyone who can click or configure a workflow is treated as authorized to approve the decision.",
    better:
      "Map decision rights explicitly.",
  },
  {
    title: "Governance only after failure",
    problem:
      "Reviews happen only when something breaks.",
    better:
      "Use routine cadence plus event-driven triggers.",
  },
  {
    title: "Owner leaves, automation continues",
    problem:
      "A workflow keeps running with no accountable maintainer or approver.",
    better:
      "Ownership change itself should trigger governance review.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the new write permission as a material change, update the boundary analysis, re-test, and obtain the appropriate governance approval before activation.",
    outcome:
      "Best. Permission expansion changes impact and should reopen review.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve it automatically because the script already has read access.",
    outcome:
      "Risky. Read and write permissions have different impact and authority implications.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Let the technical owner decide alone because they understand the code best.",
    outcome:
      "Caution. Technical expertise matters, but broader permission decisions may require governance and control review.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Expire the exception unless it is explicitly renewed with current evidence, scope, compensating controls, owner, and approval.",
    outcome:
      "Best. Exceptions should not become permanent by default.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave the exception active because nothing bad happened.",
    outcome:
      "Risky. Lack of an incident does not replace required governance review.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the expiration field from future exceptions.",
    outcome:
      "Risky. That eliminates an important control against permanent drift.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is automation governance?",
    choices: [
      "The assignment of ownership, authority, evidence, review, change control, exceptions, monitoring, and lifecycle responsibility around automation.",
      "A list of technical settings only.",
      "A replacement for analysts.",
      "A way to maximize automation scope.",
    ],
    answer: 0,
    explanation:
      "Governance defines who is responsible, who may decide, what evidence is required, and how automation changes over time.",
  },
  {
    question:
      "Who should accept a temporary governance exception?",
    choices: [
      "The role with appropriate risk or governance authority.",
      "Any user who can edit the automation.",
      "The script itself.",
      "The newest analyst on shift.",
    ],
    answer: 0,
    explanation:
      "Technical access is not the same as authority to accept residual risk.",
  },
  {
    question:
      "What should happen when automation requests broader permissions?",
    choices: [
      "Treat it as a material change and reopen least-privilege, impact, and approval review.",
      "Approve automatically.",
      "Hide the change in a minor version.",
      "Remove logging.",
    ],
    answer: 0,
    explanation:
      "Permission expansion changes the risk and action boundary.",
  },
  {
    question:
      "Why should exceptions have expiration dates?",
    choices: [
      "So temporary deviations do not become permanent without review.",
      "To make the form longer.",
      "Because every automation must retire on that date.",
      "So no compensating controls are needed.",
    ],
    answer: 0,
    explanation:
      "Expiration forces a decision to close, renew, redesign, or stop the deviation.",
  },
  {
    question:
      "What is strongest when an automation owner leaves?",
    choices: [
      "Trigger governance review and assign new ownership before relying on continued operation.",
      "Let the automation continue indefinitely with no owner.",
      "Delete all evidence.",
      "Give ownership to any user with access.",
    ],
    answer: 0,
    explanation:
      "Ownership changes can affect decisions, maintenance, exceptions, and escalation.",
  },
  {
    question:
      "What should happen to a retired automation?",
    choices: [
      "Stop active use, preserve required evidence, update references, and document the retirement or replacement.",
      "Keep it running just in case.",
      "Remove all history.",
      "Let analysts choose between current and retired versions.",
    ],
    answer: 0,
    explanation:
      "Retirement is a governed lifecycle state, not simply abandonment.",
  },
  {
    question:
      "What is the purpose of the Automation Governance Matrix?",
    choices: [
      "Map owners, decision rights, reviews, metrics, changes, exceptions, disable authority, and lifecycle responsibilities for each automation.",
      "Replace technical documentation.",
      "Remove human accountability.",
      "Approve every future change automatically.",
    ],
    answer: 0,
    explanation:
      "The matrix makes accountability and authority explicit across the automation portfolio.",
  },
];

const checklistItems = [
  "Every automation has an accountable owner.",
  "Workflow ownership is explicit.",
  "Control ownership is explicit.",
  "Evidence ownership is explicit.",
  "Decision authority is explicit.",
  "Technical access is not treated as decision authority.",
  "Review cadence is defined.",
  "Event-driven review triggers are defined.",
  "Key metrics have owners.",
  "Metric thresholds map to decisions.",
  "Permission changes trigger review.",
  "Purpose changes trigger review.",
  "Data-source changes trigger review.",
  "Ownership changes trigger review.",
  "Exceptions have scope.",
  "Exceptions have compensating controls.",
  "Exceptions have expiration dates.",
  "Exceptions have closure evidence.",
  "Disable authority is explicit.",
  "Re-enable criteria are explicit.",
  "Retirement criteria are explicit.",
  "Retired versions are blocked from active use.",
  "Lifecycle states are documented.",
  "Evidence is preserved through change and retirement.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Automation governance assigns ownership, authority, evidence, metrics, change control, exceptions, and lifecycle responsibility.",
  "Technical ownership does not automatically grant risk, business, or approval authority.",
  "Decision rights should be explicit for activation, changes, permissions, exceptions, disable, re-enable, and retirement.",
  "Material changes include logic, data sources, permissions, metrics, ownership, purpose, dependencies, and replacement.",
  "Exceptions need scope, rationale, compensating controls, owner, approver, expiration, and closure evidence.",
  "Routine review and event-driven review are both necessary.",
  "Metric thresholds should map to governance decisions rather than remain passive dashboard numbers.",
  "Ownership changes and purpose changes should reopen review.",
  "Retirement is a governed lifecycle state with evidence preservation and reference cleanup.",
  "The Automation Governance Matrix prepares you for A17.10 Security Automation Design Lab.",
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

export default function GovernanceForAutomationPage() {
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
              A17.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Governance for Automation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Automation governance answers the questions that code cannot:
            Who owns the outcome? Who may approve a change? Who monitors
            evidence? Who accepts an exception? Who can disable the workflow?
            And who decides when it is time to retire it?
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All organizations, automations, roles, decisions, metrics,
            exceptions, and lifecycle records in this lesson are fictional.
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
          lessonTitle="Governance for Automation"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.9 Entry Readiness"
          items={[
            "I can interpret automation-value and failure metrics.",
            "I understand the difference between technical access and decision authority.",
            "I can explain why automation needs owners, change review, exceptions, and retirement.",
            "I will keep all governance examples fictional, defensive, and school-safe.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Automation Without Ownership Is Just Unattended Risk"
        >
          <p className="leading-8">
            A workflow may be technically reliable today and still become unsafe
            later if nobody owns it. Sources change. Teams reorganize. Metrics
            drift. A ticket schema is renamed. An exception quietly expires.
            A temporary workaround becomes permanent. A trusted reviewer leaves.
          </p>

          <p className="mt-4 leading-8">
            Governance keeps those changes from silently rewriting the meaning
            of automation. It creates a durable connection between purpose,
            authority, evidence, ownership, review, and lifecycle.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The automation may execute the workflow, but people and governance remain accountable for the system.
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
          eyebrow="Governance Roles"
          title="Ten Roles That Keep Automation Accountable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Responsibility: {item.responsibility}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Decisions: {item.decisions}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Domains"
          title="Eight Areas That Need Ongoing Ownership"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Ask: {item.questions}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Reopen review when: {item.trigger}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Rights"
          title="Who Is Accountable for Which Automation Decisions?"
        >
          <p className="leading-8">
            Strong governance avoids vague phrases like “the security team
            approves.” Different decisions need different owners. The person who
            maintains a script may not be the person authorized to accept risk
            or approve a high-impact transition.
          </p>

          <div className="mt-6 grid gap-5">
            {decisionRights.map((item) => (
              <article
                key={item.decision}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Accountable
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.accountable}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Consulted
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.consulted}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence required
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
          eyebrow="Lifecycle"
          title="Eight Automation Lifecycle States"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Required evidence: {item.required}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Exit condition: {item.exit}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Change Control"
          title="Eight Changes That Should Reopen Governance Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {changeTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Exception Governance"
          title="A Temporary Exception Must Still Be Controlled"
        >
          <p className="leading-8">
            Exceptions are sometimes necessary when a source migration,
            dependency change, or temporary operational constraint prevents the
            normal rule from being met. The danger is allowing temporary
            deviations to become permanent simply because nobody revisits them.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {exceptionFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
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
          eyebrow="Governance Matrix Anatomy"
          title="What a Reviewable Automation Governance Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceFields.map((item) => (
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
          eyebrow="Fictional Governance Matrix"
          title="Eight Northbridge Automation Governance Records"
        >
          <div className="grid gap-5">
            {northbridgeGovernance.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.automation}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-purple-200">
                  Linked evidence: {item.linked}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Automation owner", item.automationOwner],
                    ["Workflow owner", item.workflowOwner],
                    ["Control owner", item.controlOwner],
                    ["Evidence owner", item.evidenceOwner],
                    ["Approver", item.approver],
                    ["Review cadence", item.review],
                    ["Key metrics", item.metrics],
                    ["Change triggers", item.changes],
                    ["Disable authority", item.disable],
                    ["Exception authority", item.exception],
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
          title="Northbridge Automation Governance Dashboard"
          subtitle="Fictional ownership, approval, exception, lifecycle, and governance-health summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Permission Expansion Requested Without Material Change Review"
          severity="High"
          time="10:18"
          source="Fictional Automation Governance Monitor"
          details="A fictional automation currently approved for read-only evidence support requested a broader write capability. The requested permission would increase action impact and exceeds the current approved boundary."
          recommendation="Treat the request as a material change. Reopen least-privilege, impact, validation, fallback, and governance approval review before activation."
        />

        <FakeLogPanel
          title="Fictional Automation Governance Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Permission Expansion"
          question="What is the strongest governance response when a read-only automation requests a new write permission?"
          evidence={[
            "The current approved boundary is read-only.",
            "The proposed permission can modify fictional workflow state.",
            "The business purpose may still be legitimate.",
            "The change increases action impact.",
            "A change-review process exists.",
          ]}
          options={[
            "Treat it as a material change, update the boundary analysis, test the new behavior, and require appropriate approval.",
            "Approve it automatically because the purpose did not change.",
            "Allow the technical owner to decide alone.",
            "Hide the permission change in a minor version update.",
          ]}
          bestAnswer={0}
          explanation="A new write capability changes the automation's impact and therefore requires renewed boundary, testing, and governance review."
        />

        <Section
          eyebrow="Governance Health"
          title="Ten Signals That Ownership or Control Is Drifting"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceHealthSignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Meaning: {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Governance response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Governance Mistakes"
          title="Eight Ways Accountability Becomes Unclear"
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
          title="Scenario Decision Lab 1 — New Write Permission"
          scenario="A fictional automation approved for read-only enrichment support now requests permission to update a workflow field. The technical owner says the new feature is small."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Expired Exception"
          scenario="A fictional automation has been operating under a temporary routing exception for fourteen days. The expiration date has arrived, but the owner has not submitted closure evidence or a renewal request."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Automation Governance Matrix"
        >
          <p className="leading-8">
            Build a fictional governance matrix that assigns ownership,
            authority, reviews, metrics, changes, exceptions, lifecycle states,
            and retirement responsibility across the A17 automation portfolio.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty-five fictional GOV-A records.",
              "Give every record a stable GOV-A ID.",
              "Link each record to relevant OPP, HITL, ENR, WFA, PRB, BND, FM, and VAL IDs.",
              "Name the automation.",
              "State the approved purpose.",
              "Assign an Automation Owner.",
              "Assign a Workflow Owner.",
              "Assign a Control Owner.",
              "Assign an Evidence Owner.",
              "Assign a Platform Owner where relevant.",
              "Assign an Authorized Approver where relevant.",
              "Assign a Risk / Governance Owner.",
              "Assign a Business / Service Owner where relevant.",
              "Define decision authority.",
              "Define disable authority.",
              "Define re-enable authority.",
              "Define exception authority.",
              "Define retirement ownership.",
              "Define routine review cadence.",
              "Define event-driven review triggers.",
              "Link key value metrics.",
              "Link key failure metrics.",
              "Define permission-review triggers.",
              "Define purpose-change triggers.",
              "Define data-source-change triggers.",
              "Define ownership-change triggers.",
              "Define evidence-health triggers.",
              "Define threshold-breach decisions.",
              "Define exception scope requirements.",
              "Define compensating-control requirements.",
              "Define exception expiration.",
              "Define exception closure evidence.",
              "Define lifecycle state.",
              "Define transition criteria.",
              "Define retirement criteria.",
              "Include at least five Proposed-state records.",
              "Include at least five Validated-state records.",
              "Include at least ten Active-state records.",
              "Include at least five Degraded or Paused-state records.",
              "Include at least five Exception-state records.",
              "Include at least five Retired-state records.",
              "Include at least five permission-expansion reviews.",
              "Include at least five expired-exception scenarios.",
              "Include at least five ownership-transfer scenarios.",
              "Include at least five metric-threshold governance decisions.",
              "Include at least three examples where technical access does not equal decision authority.",
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
              Use fictional organizations, owners, workflows, approvals,
              exceptions, and governance decisions only. Do not attempt to gain
              access to real systems, change real permissions, or bypass real
              approval processes. This lab is about safe governance design.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Exception"
          question="What is the strongest response when a temporary exception reaches its expiration with no closure or renewal evidence?"
          evidence={[
            "The exception was approved for fourteen days.",
            "A compensating control was required during that period.",
            "The expiration date has arrived.",
            "The owner has not submitted closure evidence.",
            "No new approval exists.",
          ]}
          options={[
            "Expire the exception and return to the normal rule, pause, or obtain a new explicit approval with current evidence.",
            "Leave it active because no incident occurred.",
            "Remove expiration dates from future exceptions.",
            "Let the technical owner extend it informally.",
          ]}
          bestAnswer={0}
          explanation="Temporary deviations need explicit closure or renewal; otherwise they become uncontrolled permanent changes."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Automation Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that defines who owns
            automation, who may approve what, when reviews occur, how exceptions
            work, and how automations are paused, re-enabled, or retired.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Purpose ownership",
              "Workflow ownership",
              "Control ownership",
              "Evidence ownership",
              "Platform ownership",
              "Decision authority",
              "Change-review authority",
              "Permission-review authority",
              "Risk acceptance",
              "Exception approval",
              "Exception expiration",
              "Review cadence",
              "Metric ownership",
              "Threshold-to-decision mapping",
              "Disable authority",
              "Re-enable criteria",
              "Ownership transfer",
              "Lifecycle states",
              "Retirement",
              "Evidence archive",
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
            The strongest standard should make responsibility visible before a
            problem occurs, not only after.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.9 Mini Quiz: Governance for Automation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Automation Governance Matrix"
          prompt="Create the ninth artifact for your A17 Safe Automation Design and Governance Plan: a fictional Automation Governance Matrix with at least thirty-five records. Include GOV-A ID, linked OPP/HITL/ENR/WFA/PRB/BND/FM/VAL IDs, automation name, approved purpose, Automation Owner, Workflow Owner, Control Owner, Evidence Owner, Platform Owner where relevant, Authorized Approver, Risk/Governance Owner, Business/Service Owner where relevant, decision authority, disable authority, re-enable authority, exception authority, retirement owner, review cadence, event-driven triggers, key metrics, failure metrics, lifecycle state, transition criteria, exception controls, and retirement criteria."
          tips={[
            "Separate technical ownership from approval and risk authority.",
            "Use both routine and event-driven reviews.",
            "Give exceptions expiration and closure evidence.",
            "Make metric thresholds trigger explicit decisions.",
            "Treat ownership and purpose changes as governance events.",
            "Use fictional records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.10?"
        >
          <p className="leading-8">
            A17.10 is the Security Automation Design Lab. Before continuing,
            make sure you can connect automation opportunity, human judgment,
            enrichment, ticketing, playbooks, scripting boundaries, failure
            handling, measurement, and governance into one defensible design.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can assign distinct automation, workflow, control, evidence, platform, approval, and governance roles.",
              "I can define decision rights for change, permission, exception, disable, re-enable, and retirement.",
              "I can design lifecycle states and review triggers.",
              "I can govern exceptions with scope, compensating controls, expiration, and closure evidence.",
              "I can connect scorecard thresholds and failure signals to governance decisions.",
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
          title="How to Make the Automation Governance Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Separate the roles",
                detail:
                  "A technical maintainer, control owner, approver, and risk owner may all be different roles.",
              },
              {
                title: "Show decision rights",
                detail:
                  "A reviewer should know exactly who may approve scope, permissions, exceptions, disabling, and retirement.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Automation should move through Proposed, Designed, Validated, Active, Degraded, Paused, Exception, and Retired states deliberately.",
              },
              {
                title: "Show review triggers",
                detail:
                  "Permissions, purpose, ownership, evidence, metrics, and dependencies can all reopen governance review.",
              },
              {
                title: "Show exception discipline",
                detail:
                  "Every exception should have scope, owner, approver, expiration, compensating control, and closure evidence.",
              },
              {
                title: "Show metric ownership",
                detail:
                  "Threshold breaches should trigger a named person's decision rather than sit on a dashboard.",
              },
              {
                title: "Show retirement",
                detail:
                  "Old automations should not remain active simply because nobody turns them off.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.10 will combine all nine artifacts into the final Safe Automation Design and Governance Plan.",
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
            A17.9 governance remains fictional, defensive, and human-accountable
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to change real permissions, bypass real approval
            processes, or access real operational systems. This lesson uses
            fictional governance records to teach ownership, authority,
            evidence, exceptions, reviews, lifecycle, and accountability.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.9 Governance for Automation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for ownership, decision rights,
            review cadence, change control, exceptions, metrics, disable and
            re-enable authority, lifecycle states, ownership transfer, and
            retirement. Next, A17.10 brings every A17 artifact together in the
            Security Automation Design Lab.
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