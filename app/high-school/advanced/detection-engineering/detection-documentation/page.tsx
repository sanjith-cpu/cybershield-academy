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
const modulePath = `${trackPath}/detection-engineering`;
const previousLesson = `${modulePath}/testing-detections-safely-with-fake-data`;
const nextLesson = `${modulePath}/detection-engineering-capstone-lab`;

const objectives = [
  "Explain how fictional detection documentation connects mission risk, defender questions, evidence, logic, tests, alert behavior, analyst decisions, ownership, metrics, limitations, and lifecycle.",
  "Build a versioned fictional detection specification containing purpose, scope, exclusions, source requirements, field meaning, timing, context, missing-data behavior, confidence, severity, and non-proof statements.",
  "Document fictional alert presentation, analyst guidance, evidence requests, escalation, closure, reopen criteria, privacy controls, and response boundaries.",
  "Evaluate fictional documentation quality for completeness, traceability, freshness, reproducibility, maintainability, privacy, source-health awareness, residual risk, and retirement readiness.",
  "Create a portfolio-ready fictional detection documentation package containing specifications, diagrams, test evidence, change history, owner records, metrics, review triggers, and leadership summaries.",
];

const vocabulary = [
  [
    "Detection specification",
    "A fictional versioned document describing why a detection exists, what it evaluates, which evidence it needs, how it behaves, and how it is maintained.",
  ],
  [
    "Documentation traceability",
    "The fictional ability to connect mission risk, defender question, source, field, logic, test, alert, decision, change, owner, and review records.",
  ],
  [
    "Purpose statement",
    "A fictional explanation of the defensive outcome the detection is intended to support.",
  ],
  [
    "Scope statement",
    "A fictional description of the identities, services, devices, destinations, environments, states, periods, and evidence covered.",
  ],
  [
    "Exclusion statement",
    "A fictional description of what the detection does not cover and why.",
  ],
  [
    "Non-proof statement",
    "A fictional explanation of what an alert match does not establish, such as intent, compromise, cause, scope, or impact.",
  ],
  [
    "Source dependency",
    "A fictional evidence source, field set, timing relationship, or health state required for the detection to behave as documented.",
  ],
  [
    "Field dictionary",
    "A fictional versioned record of field meaning, source, type, values, transformations, requirements, privacy purpose, and limitations.",
  ],
  [
    "Logic narrative",
    "A fictional conceptual explanation of conditions, relationships, sequence, thresholds, timing, context, exclusions, and missing-data behavior.",
  ],
  [
    "Alert contract",
    "A fictional definition of what an alert must display and which analyst decision it should support.",
  ],
  [
    "Analyst runbook",
    "A fictional step-by-step question and evidence guide for reviewing an alert safely and consistently.",
  ],
  [
    "Decision criterion",
    "A fictional evidence-based rule for moving a case among New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or Reopened states.",
  ],
  [
    "Test evidence record",
    "A fictional record of test input, expected outcome, observed outcome, source health, defect, decision, and validation.",
  ],
  [
    "Change history",
    "A fictional versioned record of what changed, why, who approved it, how it was tested, and what rollback exists.",
  ],
  [
    "Documentation owner",
    "The fictional role accountable for the accuracy, freshness, accessibility, and lifecycle of a documentation artifact.",
  ],
  [
    "Review trigger",
    "A fictional event requiring documentation revalidation, such as source, schema, identity, service, policy, workflow, privacy, or mission change.",
  ],
  [
    "Residual risk",
    "The fictional detection limitation, coverage gap, uncertainty, dependency, or impact that remains after current controls.",
  ],
  [
    "Known limitation",
    "A fictional documented condition under which the detection may be incomplete, delayed, noisy, uncertain, or not applicable.",
  ],
  [
    "Decision log",
    "A fictional record of approvals, exceptions, risk acceptance, rollback, closure, reopening, and retirement decisions.",
  ],
  [
    "Documentation debt",
    "Fictional risk created by missing, stale, contradictory, ownerless, inaccessible, or untested documentation.",
  ],
  [
    "Operational readability",
    "The fictional degree to which analysts and owners can quickly understand and use the documentation.",
  ],
  [
    "Leadership summary",
    "A fictional concise explanation of mission value, readiness, limits, resources, milestones, residual risks, and decisions needed.",
  ],
  [
    "Retirement record",
    "A fictional document confirming why a detection is no longer needed, which replacement exists, which dependencies are removed, and which evidence is retained.",
  ],
  [
    "Documentation review date",
    "The fictional scheduled or event-triggered point when an artifact must be revalidated.",
  ],
];

const documentationPrinciples = [
  {
    principle: "Document the decision, not only the rule",
    description:
      "A fictional detection document should explain which defender question and analyst decision the capability supports.",
    strongPractice:
      "State that the detection helps determine whether temporary emergency authority remained effectively active beyond approval.",
    failure:
      "Technical logic may exist without a clear mission or triage purpose.",
  },
  {
    principle: "Use one source of truth",
    description:
      "Fictional purpose, scope, sources, logic, tests, owners, metrics, and lifecycle should be coordinated through a controlled specification.",
    strongPractice:
      "Link supporting artifacts to one versioned detection identifier.",
    failure:
      "Different teams may use contradictory assumptions and outdated versions.",
  },
  {
    principle: "Separate direct facts from derived context",
    description:
      "Fictional documents should label source-recorded fields, normalized fields, enrichment, owner statements, and hypotheses distinctly.",
    strongPractice:
      "Mark service criticality as derived and role state as direct source evidence.",
    failure:
      "Derived context may be treated as authoritative fact.",
  },
  {
    principle: "Make source health part of the specification",
    description:
      "Fictional documentation should state how Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence changes behavior.",
    strongPractice:
      "Document lower authorization confidence when group evidence is delayed.",
    failure:
      "Analysts may interpret degraded evidence as normal.",
  },
  {
    principle: "Document expected alerts",
    description:
      "Fictional documentation should explain which approved or benign conditions remain intentionally visible.",
    strongPractice:
      "Describe current approved extensions as Expected alerts rather than false positives.",
    failure:
      "Useful awareness may be tuned away or mislabeled.",
  },
  {
    principle: "Document what the detection cannot prove",
    description:
      "Fictional alert matches should never silently imply intent, compromise, root cause, complete scope, or impact.",
    strongPractice:
      "State that stale assignment does not prove misuse or harmful action.",
    failure:
      "Alert language may drive unsupported escalation.",
  },
  {
    principle: "Keep tests connected to requirements",
    description:
      "Fictional positive, negative, boundary, degraded-source, privacy, and regression cases should trace to specification statements.",
    strongPractice:
      "Link the valid-extension test to the documented expected-alert behavior.",
    failure:
      "Tests may pass without validating the actual requirement.",
  },
  {
    principle: "Assign artifact-level owners",
    description:
      "Fictional specification, source map, field dictionary, test library, runbook, metrics, and retirement records need accountable roles.",
    strongPractice:
      "Assign source owners to field meaning and detection owners to logic and alert behavior.",
    failure:
      "Documentation becomes stale because everyone owns it generally and no one owns it specifically.",
  },
  {
    principle: "Record changes and rollback",
    description:
      "Fictional documentation should preserve version, rationale, approvals, tests, observation, metrics, rollback, and completion.",
    strongPractice:
      "Record why extension context was added and which false-negative regression cases must still pass.",
    failure:
      "Future reviewers cannot understand why the current behavior exists.",
  },
  {
    principle: "Retire documentation with the detection",
    description:
      "Fictional retirement should confirm replacement coverage, source removal, exception removal, artifact retention, lessons learned, and residual risk.",
    strongPractice:
      "Close the specification only after the replacement and dependencies are validated.",
    failure:
      "Old artifacts may continue guiding analysts after the capability changes.",
  },
];

const documentSet = [
  {
    artifact: "Detection overview",
    purpose:
      "Explain the fictional mission risk, defender question, users, stakeholders, scope, exclusions, non-proof statement, readiness, and value.",
    requiredContent:
      "Identifier, title, owner, status, version, purpose, mission risk, primary question, scope, exclusions, safety boundary, limitations, and review date.",
    audience:
      "Analysts, detection engineers, service owners, risk owners, and leadership.",
    staleRisk:
      "The capability may continue after its mission, owner, scope, or risk has changed.",
  },
  {
    artifact: "Source and field specification",
    purpose:
      "Document fictional evidence provenance, field meaning, timing, transformations, health, coverage, privacy, and ownership.",
    requiredContent:
      "Source categories, required and optional fields, schema versions, event time, collection time, processing time, transformations, retention, health states, and owners.",
    audience:
      "Detection owners, source owners, analysts, privacy reviewers, and testers.",
    staleRisk:
      "Schema drift or field misunderstanding may create false positives, false negatives, or false confidence.",
  },
  {
    artifact: "Logic specification",
    purpose:
      "Explain fictional conditions, relationships, sequence, windows, thresholds, context, exclusions, missing-data behavior, confidence, and severity.",
    requiredContent:
      "Logic narrative, dependencies, correlation keys, timing, expected alerts, exclusions, source-health behavior, confidence, severity, and non-proof limits.",
    audience:
      "Detection owners, reviewers, testers, and analysts.",
    staleRisk:
      "Current behavior may differ from the documented logic.",
  },
  {
    artifact: "Alert contract",
    purpose:
      "Define what the fictional alert must communicate and which questions it should help answer.",
    requiredContent:
      "Title, observation, primary question, evidence, context, source health, confidence, severity, priority, alternatives, next questions, owners, and limits.",
    audience:
      "Analysts, case owners, service owners, and leadership reviewers.",
    staleRisk:
      "The alert may technically fire but fail to support a consistent decision.",
  },
  {
    artifact: "Analyst runbook",
    purpose:
      "Guide fictional triage through evidence requests, decision states, escalation, closure, reopening, and response boundaries.",
    requiredContent:
      "Question order, evidence sources, privacy limits, owners, states, escalation criteria, closure criteria, reopen triggers, and residual-risk documentation.",
    audience:
      "Analysts, incident coordinators, source owners, service owners, and reviewers.",
    staleRisk:
      "Analysts may collect irrelevant evidence, escalate too early, or close too soon.",
  },
  {
    artifact: "Test and validation package",
    purpose:
      "Demonstrate fictional behavior across positive, negative, boundary, degraded-source, change, privacy, recovery, and regression cases.",
    requiredContent:
      "Test charter, dataset dictionary, case catalog, expected results, observed results, defects, actions, validation gates, owners, and residual risks.",
    audience:
      "Detection owners, testers, source owners, privacy reviewers, and approvers.",
    staleRisk:
      "A detection may appear validated even though the environment or logic has changed.",
  },
  {
    artifact: "Tuning and exception register",
    purpose:
      "Record fictional enrichment, thresholds, grouping, deduplication, severity, confidence, exclusions, suppression debt, tests, expiration, and rollback.",
    requiredContent:
      "Problem, root cause, proposal, context, owner, expiration, tests, before-and-after metrics, rollback, completion, and review triggers.",
    audience:
      "Detection owners, analysts, risk owners, service owners, and reviewers.",
    staleRisk:
      "Temporary exceptions may become permanent blind spots.",
  },
  {
    artifact: "Metrics and quality report",
    purpose:
      "Track fictional alert usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source degradation, analyst effort, user impact, privacy, and lifecycle debt.",
    requiredContent:
      "Metric definition, data source, period, limitations, trends, findings, owner, action, due date, and confidence.",
    audience:
      "Detection owners, quality reviewers, analysts, service owners, and leadership.",
    staleRisk:
      "Leadership may rely on alert volume or misleading labels instead of meaningful quality.",
  },
  {
    artifact: "Change and decision log",
    purpose:
      "Preserve fictional approvals, version changes, risk acceptance, exceptions, rollback, completion, and reopen decisions.",
    requiredContent:
      "Date, version, change, reason, evidence, approver, tests, metrics, rollback, residual risk, and next review.",
    audience:
      "Detection owners, auditors, risk owners, source owners, and leadership.",
    staleRisk:
      "Future maintainers cannot explain why the current design behaves as it does.",
  },
  {
    artifact: "Retirement record",
    purpose:
      "Close the fictional capability safely when the risk, service, source, replacement, or mission changes.",
    requiredContent:
      "Reason, replacement, source removal, exception removal, final tests, residual risk, retained evidence, owner, closure date, and lessons learned.",
    audience:
      "Detection owners, source owners, service owners, risk owners, and leadership.",
    staleRisk:
      "Old rules, sources, runbooks, or exceptions may remain active after retirement.",
  },
];

const specificationSections = [
  {
    section: "Identity and version",
    questions:
      "What fictional identifier, title, status, version, owner, approver, creation date, review date, and retirement state apply?",
    strongExample:
      "DET-ID-004, Stale Emergency Authority, version 3, Conditional, reviewed after identity workflow change.",
    weakExample:
      "Admin alert, current version.",
  },
  {
    section: "Purpose and mission risk",
    questions:
      "Which fictional user, service, identity, supplier, data, policy, evidence, availability, or recovery outcome is protected?",
    strongExample:
      "Prevent emergency authority from outliving its approved recovery purpose.",
    weakExample:
      "Detect suspicious access.",
  },
  {
    section: "Defender questions",
    questions:
      "Which primary and supporting fictional questions should the alert help answer?",
    strongExample:
      "Did temporary emergency authority remain effectively active beyond approval without a valid extension?",
    weakExample:
      "Was there an attack?",
  },
  {
    section: "Scope and exclusions",
    questions:
      "Which fictional identities, devices, services, destinations, environments, states, periods, and evidence are covered or excluded?",
    strongExample:
      "Covers emergency roles in normal and recovery states; excludes training-only role records with separate identifiers.",
    weakExample:
      "Covers administrators.",
  },
  {
    section: "Evidence requirements",
    questions:
      "Which fictional sources, fields, timing, relationships, provenance, health, and alternate evidence are required?",
    strongExample:
      "Role, group, approval end, extension, session, revocation, service, owner, and source-health records.",
    weakExample:
      "Identity logs.",
  },
  {
    section: "Logic narrative",
    questions:
      "Which fictional conditions, relationships, sequence, windows, context, exclusions, and missing-data behavior apply?",
    strongExample:
      "Role appears active after approval end, no current matching extension exists, and evidence health determines confidence.",
    weakExample:
      "Alert on late role.",
  },
  {
    section: "Alert contract",
    questions:
      "Which fictional observation, evidence, source health, confidence, severity, priority, alternatives, questions, owners, and limits must appear?",
    strongExample:
      "Show role state, expiration, extension, group health, session state, service, owner, and non-proof statement.",
    weakExample:
      "Show user and severity.",
  },
  {
    section: "Analyst guidance",
    questions:
      "Which fictional evidence requests, decision states, escalation, closure, reopen, privacy, and response boundaries apply?",
    strongExample:
      "Validate extension freshness, group state, session scope, service impact, owner expectation, revocation, and closure criteria.",
    weakExample:
      "Investigate and escalate if needed.",
  },
  {
    section: "Testing and validation",
    questions:
      "Which fictional positive, negative, boundary, degraded-source, duplicate, change, privacy, recovery, and regression cases are required?",
    strongExample:
      "Valid extension, expired extension, delayed group, changed destination, new session, blind source, and replay duplicates.",
    weakExample:
      "Test alert.",
  },
  {
    section: "Metrics and quality",
    questions:
      "Which fictional usefulness, expected-alert, false-positive, false-negative, Unknown, source-health, effort, impact, and lifecycle measures apply?",
    strongExample:
      "Track expected extensions, known misses, Conditional outcomes, decision latency, source degradation, and review debt.",
    weakExample:
      "Track alert count.",
  },
  {
    section: "Ownership and lifecycle",
    questions:
      "Who owns fictional purpose, sources, logic, tests, alerts, runbook, privacy, risk, reviews, changes, rollback, and retirement?",
    strongExample:
      "Detection owner coordinates logic; source owner owns field meaning; identity owner owns role lifecycle.",
    weakExample:
      "Security team owns it.",
  },
  {
    section: "Limitations and residual risk",
    questions:
      "Which fictional gaps, assumptions, unobservable states, source dependencies, false-negative risks, privacy concerns, and future changes remain?",
    strongExample:
      "Effective access confidence is limited during group-source blind periods; session evidence is required as alternate support.",
    weakExample:
      "No known limitations.",
  },
];

const fieldDictionary = [
  {
    field: "role_state",
    source:
      "Fictional identity-role source",
    meaning:
      "Current observed assignment state for the invented emergency role.",
    requirement:
      "Required",
    transformation:
      "Normalized from invented Active, Revoked, Pending, and Unknown values.",
    privacy:
      "Role state only; no unrelated personal profile data.",
    limitation:
      "Assignment state does not prove effective group access or active use.",
  },
  {
    field: "approval_end",
    source:
      "Fictional access-approval source",
    meaning:
      "Approved end time for temporary authority.",
    requirement:
      "Required",
    transformation:
      "Converted to the fictional common time format.",
    privacy:
      "Purpose-limited approval timing.",
    limitation:
      "Missing or stale approval data requires Conditional or Unknown behavior.",
  },
  {
    field: "extension_state",
    source:
      "Fictional extension registry",
    meaning:
      "Whether a current approved extension covers the identity, role, purpose, destination, and period.",
    requirement:
      "Required for normal authorization confidence",
    transformation:
      "Derived from invented extension records and expiration.",
    privacy:
      "Uses owner group and purpose category rather than personal narrative.",
    limitation:
      "Extension does not authorize activity outside documented scope.",
  },
  {
    field: "group_effective_state",
    source:
      "Fictional group-membership source",
    meaning:
      "Observed effective membership supporting role authority.",
    requirement:
      "Required for high effective-access confidence",
    transformation:
      "Normalized from invented membership and synchronization records.",
    privacy:
      "Group category only.",
    limitation:
      "May be delayed during synchronization or recovery.",
  },
  {
    field: "session_state",
    source:
      "Fictional session-evidence source",
    meaning:
      "Whether an invented session remains active, ended, or Unknown.",
    requirement:
      "Optional corroborating evidence",
    transformation:
      "Grouped by invented identity and session relationship.",
    privacy:
      "Session state and service category only.",
    limitation:
      "Session visibility does not prove privileged action or harmful use.",
  },
  {
    field: "service_category",
    source:
      "Fictional service catalog",
    meaning:
      "Mission category of the service reached by the invented session.",
    requirement:
      "Optional enrichment for severity and ownership",
    transformation:
      "Mapped to invented Student Support, Notification, Administration, or Recovery categories.",
    privacy:
      "No real service names or internal routes.",
    limitation:
      "Category may be stale after service or ownership change.",
  },
  {
    field: "source_health",
    source:
      "Fictional source-health dashboard",
    meaning:
      "Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering state for required evidence.",
    requirement:
      "Required",
    transformation:
      "Derived from invented freshness, completeness, schema, clock, coverage, and queue checks.",
    privacy:
      "Operational metadata only.",
    limitation:
      "A healthy state does not prove semantic correctness in every record.",
  },
  {
    field: "owner_group",
    source:
      "Fictional ownership registry",
    meaning:
      "Accountable identity or service owner group.",
    requirement:
      "Required for routing and confirmation",
    transformation:
      "Normalized from invented organizational roles.",
    privacy:
      "Group-level ownership only.",
    limitation:
      "Ownership may be stale or disputed.",
  },
];

const alertContract = [
  {
    layer: "Neutral alert title",
    required:
      "Fictional condition and subject without unsupported intent or cause.",
    example:
      "Emergency Role Remains Visible after Approved End.",
    failure:
      "Privileged Misuse Confirmed.",
  },
  {
    layer: "Primary defender question",
    required:
      "The exact fictional decision question supported by the alert.",
    example:
      "Did temporary emergency authority remain effectively active beyond approval without a valid extension?",
    failure:
      "Is this malicious?",
  },
  {
    layer: "Observation",
    required:
      "The fictional matched condition and direct evidence.",
    example:
      "Role state is Active twenty minutes after approval end.",
    failure:
      "The user abused access.",
  },
  {
    layer: "Source health",
    required:
      "Fictional status for every required source and affected conclusion.",
    example:
      "Role current; group delayed; extension freshness Unknown.",
    failure:
      "All sources online.",
  },
  {
    layer: "Context",
    required:
      "Fictional identity, role, owner, service, destination, change, extension, session, and mission information needed for the question.",
    example:
      "Recovery role, student-support service, no current extension supplied, one active session.",
    failure:
      "Full identity profile and unrelated history.",
  },
  {
    layer: "Confidence, severity, and priority",
    required:
      "Separate fictional evidence certainty, potential impact, and review urgency.",
    example:
      "Observation confidence High; authorization confidence Moderate; severity High; priority High.",
    failure:
      "Risk score 92.",
  },
  {
    layer: "Alternatives and limits",
    required:
      "Fictional plausible explanations and non-proof statements.",
    example:
      "Extension delay, synchronization lag, incomplete closure, or stale source remain possible; misuse is unconfirmed.",
    failure:
      "Likely compromise.",
  },
  {
    layer: "Next questions and owners",
    required:
      "Ordered fictional questions and accountable roles.",
    example:
      "Source owner validates extension freshness; identity owner confirms approval; service owner validates session purpose.",
    failure:
      "Investigate immediately.",
  },
  {
    layer: "Decision criteria",
    required:
      "Fictional escalation, Expected, Conditional, Unknown, closure, and reopen conditions.",
    example:
      "Escalate on confirmed effective authority and active impact; close after revocation, session review, source reconciliation, owner validation, and residual-risk documentation.",
    failure:
      "Close when alert stops.",
  },
];

const lifecycleStates = [
  {
    state: "Draft",
    documentationMeaning:
      "The fictional purpose, scope, sources, logic, tests, owners, or limits remain incomplete.",
    requiredArtifacts:
      "Initial overview, source list, logic narrative, safety boundary, and open-question register.",
    exit:
      "Move to Review when the specification and supporting artifacts are complete enough for challenge.",
  },
  {
    state: "In Review",
    documentationMeaning:
      "Fictional detection, source, service, identity, privacy, test, and risk owners are validating the package.",
    requiredArtifacts:
      "Review comments, evidence, disagreements, actions, due dates, and revised version.",
    exit:
      "Move to Conditional, Approved, Rejected, or Draft.",
  },
  {
    state: "Conditional",
    documentationMeaning:
      "The fictional detection may proceed in limited scope while known source, test, context, privacy, ownership, or lifecycle conditions remain.",
    requiredArtifacts:
      "Conditions, owner, due date, observation, metrics, rollback, residual risk, and approval limit.",
    exit:
      "Move to Approved, Rolled Back, or Retired.",
  },
  {
    state: "Approved",
    documentationMeaning:
      "The fictional package satisfies required purpose, evidence, logic, test, privacy, ownership, rollback, and lifecycle gates.",
    requiredArtifacts:
      "Signed approval, current version, review date, baseline metrics, and distribution record.",
    exit:
      "Move to Observing, Change Review, or Retired.",
  },
  {
    state: "Observing",
    documentationMeaning:
      "The fictional detection is being measured for alert usefulness, expected alerts, false positives, false negatives, Unknowns, source health, effort, impact, and documentation gaps.",
    requiredArtifacts:
      "Observation metrics, findings, defects, actions, owner decisions, and next review.",
    exit:
      "Move to Approved, Conditional, Change Review, Rolled Back, or Retired.",
  },
  {
    state: "Change Review",
    documentationMeaning:
      "A fictional source, field, schema, logic, identity, service, policy, workflow, supplier, privacy, or mission change may invalidate the current package.",
    requiredArtifacts:
      "Change description, affected artifacts, tests, metrics, risk, approval, and rollback.",
    exit:
      "Move to Approved, Conditional, Rolled Back, or Retired.",
  },
  {
    state: "Rolled Back",
    documentationMeaning:
      "A fictional change caused unacceptable quality, coverage, source, privacy, user, or operational impact.",
    requiredArtifacts:
      "Rollback decision, restored version, defect evidence, impact, lessons learned, and retest plan.",
    exit:
      "Move to Draft, In Review, Conditional, or Retired.",
  },
  {
    state: "Retired",
    documentationMeaning:
      "The fictional detection is no longer needed or has been replaced.",
    requiredArtifacts:
      "Retirement reason, replacement validation, source and exception removal, retained evidence, owner signoff, and lessons learned.",
    exit:
      "Remain retired unless formally reopened.",
  },
];

const metrics = [
  {
    metric: "Documentation completeness",
    question:
      "Do fictional purpose, scope, evidence, logic, alert, runbook, tests, metrics, owners, limitations, and lifecycle artifacts exist?",
    evidence:
      "Artifact inventory, required-section checklist, owners, and review records.",
    limitation:
      "Complete sections may still be inaccurate or stale.",
  },
  {
    metric: "Documentation freshness",
    question:
      "Were fictional artifacts reviewed after relevant source, schema, service, identity, policy, workflow, privacy, or mission changes?",
    evidence:
      "Review dates, triggers, change log, source versions, and owner confirmation.",
    limitation:
      "A recent date does not prove meaningful review.",
  },
  {
    metric: "Traceability",
    question:
      "Can fictional requirements be linked to sources, fields, logic, tests, alerts, decisions, changes, and owners?",
    evidence:
      "Identifiers, links, matrices, test references, and version history.",
    limitation:
      "Strong linking does not prove the requirement itself is correct.",
  },
  {
    metric: "Analyst usability",
    question:
      "Can fictional analysts understand the alert, evidence, questions, source health, limits, owners, escalation, and closure?",
    evidence:
      "Walkthroughs, decision latency, evidence-request count, feedback, and rework.",
    limitation:
      "Fast use can still hide shallow or incomplete analysis.",
  },
  {
    metric: "Owner responsiveness",
    question:
      "Do fictional documentation owners update artifacts and answer assigned questions by required dates?",
    evidence:
      "Owner matrix, requests, responses, due dates, overdue items, and escalations.",
    limitation:
      "Fast response does not prove the content is correct.",
  },
  {
    metric: "Test traceability",
    question:
      "Does each fictional specification requirement have relevant positive, negative, boundary, degraded, privacy, and regression evidence?",
    evidence:
      "Requirement-to-test matrix, results, defects, and validation gates.",
    limitation:
      "Passing tests represent only the cases included.",
  },
  {
    metric: "Documentation debt",
    question:
      "How many fictional artifacts are missing, stale, contradictory, ownerless, inaccessible, or overdue?",
    evidence:
      "Debt register, risk rating, owners, due dates, milestones, and residual risk.",
    limitation:
      "Counting debt does not show which item has the greatest mission impact.",
  },
  {
    metric: "Retirement readiness",
    question:
      "Can the fictional organization safely remove the detection, sources, exceptions, runbooks, metrics, and artifacts when the capability ends?",
    evidence:
      "Replacement coverage, dependency map, exception register, source map, final tests, and retirement plan.",
    limitation:
      "A written plan does not prove all dependencies are known.",
  },
];

const evidenceMatrix = [
  {
    id: "DOC-01",
    source: "Fictional detection overview",
    observation:
      "The stale-role detection has a clear mission risk and primary defender question.",
    supports:
      "The capability has a documented purpose and bounded decision.",
    limits:
      "The overview does not prove sources, logic, tests, or alert behavior are current.",
    use:
      "Anchor the remaining artifacts to the same identifier and version.",
  },
  {
    id: "DOC-02",
    source: "Fictional source specification",
    observation:
      "Role, approval end, extension, group, session, service, owner, and source-health fields are documented.",
    supports:
      "The evidence dependencies are mostly visible.",
    limits:
      "The extension-source freshness rule and group-source recovery behavior are incomplete.",
    use:
      "Mark the specification Conditional and add missing health behavior.",
  },
  {
    id: "DOC-03",
    source: "Fictional logic narrative",
    observation:
      "The design evaluates role state after expiration and checks for a current extension.",
    supports:
      "The core conceptual condition is documented.",
    limits:
      "Changed destinations, new sessions, and conflicting sources are not addressed.",
    use:
      "Add scope-change and conflict behavior with tests.",
  },
  {
    id: "DOC-04",
    source: "Fictional alert contract",
    observation:
      "The alert displays role state and severity but omits source health, confidence separation, alternatives, and owner questions.",
    supports:
      "The alert exists but does not fully support analyst decisions.",
    limits:
      "The document does not prove analysts currently mis-handle every case.",
    use:
      "Expand the alert contract and test analyst usability.",
  },
  {
    id: "DOC-05",
    source: "Fictional test package",
    observation:
      "Positive, negative, valid-extension, boundary, delayed-group, and recovery replay cases exist.",
    supports:
      "Several important behaviors are validated.",
    limits:
      "Privacy, changed-destination, new-session, and retirement cases remain incomplete.",
    use:
      "Maintain Conditional status and complete validation gates.",
  },
  {
    id: "DOC-06",
    source: "Fictional analyst runbook",
    observation:
      "The runbook asks for extension, group, session, and service evidence but closes when the alert disappears.",
    supports:
      "The evidence questions are partially useful.",
    limits:
      "Closure behavior is incomplete and may hide unresolved authority or source state.",
    use:
      "Replace alert-silence closure with evidence-based criteria.",
  },
  {
    id: "DOC-07",
    source: "Fictional ownership matrix",
    observation:
      "Detection and identity owners are assigned, but source-health and privacy artifacts lack owners.",
    supports:
      "Some lifecycle accountability exists.",
    limits:
      "Unowned artifacts may become stale or inconsistent.",
    use:
      "Assign artifact-level source and privacy owners.",
  },
  {
    id: "DOC-08",
    source: "Fictional change log",
    observation:
      "Extension context was added after false positives, but the rationale, failed tests, observation metrics, and rollback are missing.",
    supports:
      "A meaningful change occurred.",
    limits:
      "Future maintainers cannot reconstruct why the current design exists or when to reverse it.",
    use:
      "Complete the change and decision record.",
  },
];

const commonMistakes = [
  {
    mistake: "Documentation begins with technical syntax",
    observation:
      "A fictional specification starts with logic fragments but never states the mission risk or defender question.",
    impact:
      "Reviewers cannot judge whether the capability supports a valuable decision.",
    correction:
      "Begin with purpose, mission, question, scope, non-proof statement, and stakeholders.",
  },
  {
    mistake: "Sources are listed without field meaning",
    observation:
      "A fictional document says identity logs are required but does not define role, extension, group, or timing fields.",
    impact:
      "Field semantics and source dependencies remain ambiguous.",
    correction:
      "Use a versioned field dictionary with provenance, meaning, transformations, privacy, and limitations.",
  },
  {
    mistake: "Logic documentation ignores degraded evidence",
    observation:
      "A fictional narrative explains normal matching but not delayed, missing, conflicting, blind, or recovering sources.",
    impact:
      "Analysts may interpret degraded results with full confidence.",
    correction:
      "Document explicit source-health states and missing-data behavior.",
  },
  {
    mistake: "Alert documentation repeats the alert title",
    observation:
      "A fictional alert contract contains a title and severity but no evidence, questions, source health, alternatives, or owners.",
    impact:
      "The alert is visible but not decision-ready.",
    correction:
      "Define the full alert contract and test analyst usability.",
  },
  {
    mistake: "Runbook says investigate",
    observation:
      "A fictional analyst guide provides generic instructions without ordered questions or evidence requests.",
    impact:
      "Triage becomes inconsistent and privacy-heavy.",
    correction:
      "Use purpose-limited questions, owners, states, criteria, and stop conditions.",
  },
  {
    mistake: "Tests are stored separately with no traceability",
    observation:
      "Fictional test cases do not reference requirements, logic versions, defects, or changes.",
    impact:
      "Passing results cannot prove current specification behavior.",
    correction:
      "Create requirement-to-test and change-to-regression links.",
  },
  {
    mistake: "Changes overwrite history",
    observation:
      "A fictional document is updated without preserving the previous version, reason, approval, tests, metrics, or rollback.",
    impact:
      "Future reviewers lose design intent and recovery options.",
    correction:
      "Maintain versioned change and decision logs.",
  },
  {
    mistake: "One broad owner is assigned",
    observation:
      "A fictional record says Security owns every artifact.",
    impact:
      "Source, privacy, service, identity, testing, and retirement responsibilities remain unclear.",
    correction:
      "Assign artifact-level and question-level owners.",
  },
  {
    mistake: "No limitations section",
    observation:
      "A fictional specification claims complete coverage and no known risks.",
    impact:
      "Unknown false negatives, source gaps, stale context, and untested states become invisible.",
    correction:
      "Document assumptions, known gaps, unobservable conditions, residual risks, and review triggers.",
  },
  {
    mistake: "Real internal documentation appears in a portfolio",
    observation:
      "A fictional learning project includes copied internal diagrams, source names, field values, alerts, runbooks, screenshots, or owner roles.",
    impact:
      "Sensitive systems, people, defensive capabilities, and operations may be exposed.",
    correction:
      "Invent every artifact, source, field, diagram, owner, test, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the documentation charter",
    action:
      "Define the fictional detection identifier, mission, scope, stakeholders, safety boundary, artifact set, owners, review triggers, and completion criteria.",
    output:
      "Detection documentation charter.",
    quality:
      "Every artifact is fictional and tied to one controlled identifier.",
  },
  {
    step: "2",
    title: "Write the overview",
    action:
      "Document fictional purpose, mission risk, primary defender question, scope, exclusions, expected alerts, non-proof statement, readiness, and residual risk.",
    output:
      "Detection overview.",
    quality:
      "The overview explains why the capability exists before how it works.",
  },
  {
    step: "3",
    title: "Document sources and fields",
    action:
      "Create fictional source categories, field definitions, timing, transformations, requirements, health behavior, privacy purpose, coverage, and owners.",
    output:
      "Source map and field dictionary.",
    quality:
      "Every required and optional field has meaning and limitation.",
  },
  {
    step: "4",
    title: "Write the logic narrative",
    action:
      "Describe fictional conditions, relationships, sequence, thresholds, windows, context, exclusions, missing-data behavior, confidence, severity, and limits.",
    output:
      "Versioned logic specification.",
    quality:
      "The narrative is conceptual, explainable, and non-operational.",
  },
  {
    step: "5",
    title: "Define the alert contract",
    action:
      "Specify fictional title, observation, question, evidence, source health, context, confidence, severity, priority, alternatives, owners, and criteria.",
    output:
      "Alert presentation contract.",
    quality:
      "The alert supports the intended analyst decision.",
  },
  {
    step: "6",
    title: "Write the analyst runbook",
    action:
      "Create fictional ordered questions, purpose-limited evidence requests, owners, states, escalation, closure, reopen, privacy, and response boundaries.",
    output:
      "Analyst decision runbook.",
    quality:
      "Another analyst can reach a consistent bounded decision.",
  },
  {
    step: "7",
    title: "Connect tests and defects",
    action:
      "Link fictional requirements to positive, negative, boundary, degraded, change, privacy, recovery, and regression cases.",
    output:
      "Requirement-to-test traceability matrix.",
    quality:
      "Every important behavior has evidence and known gaps.",
  },
  {
    step: "8",
    title: "Document quality and tuning",
    action:
      "Record fictional metrics, expected alerts, false positives, false negatives, Unknown outcomes, source degradation, effort, impact, exceptions, and suppression debt.",
    output:
      "Quality, tuning, and exception package.",
    quality:
      "Lower alert volume is never the only success measure.",
  },
  {
    step: "9",
    title: "Record decisions and lifecycle",
    action:
      "Maintain fictional versions, approvals, changes, observation, rollback, completion, review triggers, residual risk, and retirement readiness.",
    output:
      "Change, decision, and lifecycle log.",
    quality:
      "Future reviewers can reconstruct why the design exists.",
  },
  {
    step: "10",
    title: "Create audience summaries",
    action:
      "Prepare fictional analyst, owner, privacy, risk, and leadership summaries using only the detail each audience needs.",
    output:
      "Role-based documentation set.",
    quality:
      "Public portfolio material contains no real internal details.",
  },
];

const quizQuestions = [
  {
    question:
      "What should appear first in a strong fictional detection specification?",
    choices: [
      "Technical logic syntax.",
      "Mission risk, defender question, purpose, scope, non-proof statement, and ownership.",
      "Alert screenshots.",
      "A list of all available fields.",
    ],
    answer: 1,
    explanation:
      "Documentation should establish why the capability exists and which decision it supports before describing technical behavior.",
  },
  {
    question:
      "Why is a field dictionary important?",
    choices: [
      "It makes the document longer.",
      "It defines fictional provenance, meaning, transformations, requirements, privacy purpose, and limitations.",
      "It replaces testing.",
      "It proves source health.",
    ],
    answer: 1,
    explanation:
      "Field meaning and provenance are essential for correct logic and analyst interpretation.",
  },
  {
    question:
      "What should fictional documentation say about a delayed required source?",
    choices: [
      "Ignore the delay.",
      "Describe the Source-Degraded or Conditional behavior, affected conclusions, alternate evidence, confidence, and reassessment.",
      "Treat the condition as absent.",
      "Close the alert.",
    ],
    answer: 1,
    explanation:
      "Degraded evidence must have explicit documented behavior.",
  },
  {
    question:
      "Which fictional alert contract is strongest?",
    choices: [
      "Title and severity only.",
      "Observation, primary question, evidence, source health, context, confidence, severity, priority, alternatives, owners, limits, and decision criteria.",
      "A risk score only.",
      "The full identity history.",
    ],
    answer: 1,
    explanation:
      "A decision-ready alert needs evidence, context, questions, ownership, and limitations.",
  },
  {
    question:
      "Why should documentation link requirements to tests?",
    choices: [
      "To prove every untested case works.",
      "To show which fictional behaviors have validation evidence and which remain gaps.",
      "To replace change history.",
      "To avoid regression testing.",
    ],
    answer: 1,
    explanation:
      "Traceability reveals both validated behavior and remaining uncertainty.",
  },
  {
    question:
      "What is the strongest closure documentation?",
    choices: [
      "The alert stopped.",
      "Authority, sessions, service state, source health, owner validation, corrective action, residual risk, and reopen criteria are documented.",
      "The analyst is finished.",
      "Severity is lower.",
    ],
    answer: 1,
    explanation:
      "Closure requires evidence and lifecycle completeness rather than alert silence.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use internal runbooks after removing company names.",
      "Use real diagrams with fake labels.",
      "Invent every artifact, source, field, alert, owner, test, date, decision, and outcome.",
      "Use blurred screenshots.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, defensive capabilities, and internal workflows.",
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
        Module A5
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

export default function DetectionDocumentationPage() {
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
              Module A5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Specifications, Runbooks, Traceability, and Lifecycle
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.9 Detection Documentation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders document fictional detections as
            maintainable capabilities with purpose, evidence, logic, alerts,
            analyst guidance, tests, ownership, metrics, changes, limitations,
            review triggers, rollback, residual risk, and retirement.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A5: Detection Engineering"
          lessonTitle="Detection Documentation"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented detections, sources, fields, alerts, runbooks, owners, tests, changes, dates, decisions, and outcomes.",
            "I will document why the fictional capability exists before how it behaves.",
            "I will separate direct evidence, derived context, owner statements, hypotheses, and source-health limitations.",
            "I will include expected alerts, non-proof statements, known limitations, residual risk, review triggers, rollback, and retirement.",
            "I will use purpose-limited, privacy-safe, audience-appropriate documentation.",
            "I will not copy, expose, upload, or reproduce any real internal rule, source map, field dictionary, runbook, alert, architecture, incident, account, endpoint, network, domain, supplier, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Working Detection Can Still Be an Unmaintainable Detection"
        >
          <p className="leading-8">
            A fictional stale-role alert is active and produces useful results.
            The logic owner leaves, the extension source changes fields, the
            group source enters a blind period, and analysts use an old runbook
            that closes cases when alerts disappear. The detection still runs,
            but the organization can no longer explain, test, or trust it.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak documentation state
              </p>
              <p className="mt-2 leading-7">
                “The rule is in the platform, and the analyst knows what to do.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong documentation state
              </p>
              <p className="mt-2 leading-7">
                “The fictional capability has a versioned specification, source
                and field map, logic narrative, alert contract, runbook, test
                package, owner matrix, metrics, change log, limitations, and
                retirement plan.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Documentation is part of the control. When it becomes stale, the
            detection's meaning, confidence, and decision quality can become
            stale too.
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
          title="Documentation Preserves Defensive Meaning across People and Change"
        >
          <p className="leading-8">
            Fictional detections depend on sources, schemas, identities,
            services, workflows, owners, context, tests, and analyst decisions.
            Documentation connects those dependencies so a new reviewer can
            understand what the capability supports, what it cannot prove, how
            it behaves during degradation, and when it must change or retire.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Traceable design",
                "Connect fictional mission risk, questions, evidence, logic, tests, alerts, decisions, and changes.",
              ],
              [
                "Repeatable operations",
                "Give fictional analysts and owners clear evidence, question, state, escalation, and closure guidance.",
              ],
              [
                "Maintainable lifecycle",
                "Preserve fictional versions, owners, metrics, review triggers, rollback, residual risk, and retirement.",
              ],
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

        <SectionCard eyebrow="Core Framework" title="The D-O-C-U-M-E-N-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "D — Define mission and question",
                "State the fictional purpose, mission risk, stakeholders, primary defender question, scope, exclusions, and non-proof statement.",
              ],
              [
                "O — Organize evidence",
                "Document fictional sources, fields, provenance, timing, transformations, health, coverage, privacy, and owners.",
              ],
              [
                "C — Capture logic and context",
                "Explain fictional conditions, relationships, windows, thresholds, context, exclusions, missing-data behavior, confidence, and severity.",
              ],
              [
                "U — Specify analyst use",
                "Define fictional alert presentation, ordered questions, evidence requests, states, escalation, closure, reopen, and response boundaries.",
              ],
              [
                "M — Map tests and metrics",
                "Connect fictional requirements to validation cases, defects, alert usefulness, misses, source health, effort, and impact.",
              ],
              [
                "E — Establish ownership",
                "Assign fictional detection, source, identity, service, supplier, change, privacy, risk, documentation, and retirement owners.",
              ],
              [
                "N — Note limitations and changes",
                "Record fictional assumptions, known gaps, residual risks, versions, approvals, observation, rollback, and review triggers.",
              ],
              [
                "T — Terminate responsibly",
                "Retire fictional rules, sources, exceptions, runbooks, metrics, and artifacts only after replacement and dependency validation.",
              ],
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
              Decision-ready documentation statement
            </p>
            <p className="mt-2 leading-7">
              This fictional detection package explains mission, questions,
              evidence, logic, alerts, tests, analyst decisions, owners,
              metrics, changes, limitations, residual risks, review triggers,
              rollback, and retirement through controlled, versioned,
              privacy-safe artifacts.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Documentation"
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
            Apply Ten Documentation Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {documentationPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongPractice}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    If ignored
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Maintain Ten Core Documentation Artifacts"
        >
          <div className="grid gap-5">
            {documentSet.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.artifact}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Required fictional content", item.requiredContent],
                    ["Primary audience", item.audience],
                    ["Risk if stale", item.staleRisk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.artifact}-${label}`}
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
          title="Write Twelve Specification Sections"
        >
          <div className="grid gap-5">
            {specificationSections.map((item, index) => (
              <article
                key={item.section}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.section}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.questions}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongExample}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weakExample}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Build a Versioned Field Dictionary"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Fictional field",
                    "Source",
                    "Meaning",
                    "Requirement",
                    "Transformation",
                    "Privacy",
                    "Limitation",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {fieldDictionary.map((row) => (
                  <tr key={row.field}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">
                      {row.field}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.source}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.meaning}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.requirement}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.transformation}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.privacy}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Define a Nine-Layer Alert Contract"
        >
          <div className="grid gap-5">
            {alertContract.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.layer}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.required}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak version
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Use Eight Documentation Lifecycle States"
        >
          <div className="grid gap-5">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-emerald-100">
                  {item.state}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.documentationMeaning}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Required artifacts
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.requiredArtifacts}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Exit path
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.exit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Measure Eight Documentation Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {metrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.metric}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Documentation Architecture"
          title="Northbridge Detection Documentation Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches documentation relationships without
            real rules, source names, fields, identities, systems, domains,
            services, suppliers, runbooks, alerts, or internal architecture.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission layer", "Purpose, risk, question, scope, exclusions, limits"],
                ["Evidence layer", "Sources, fields, provenance, timing, health, privacy"],
                ["Logic layer", "Conditions, relationships, context, missing-data behavior"],
                ["Validation layer", "Tests, defects, metrics, quality, regression, gates"],
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
                Fictional Documentation Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Overview", "Why, who, what, scope, status, review"],
                  ["Specification", "Sources, fields, logic, context, limits"],
                  ["Alert contract", "Observation, evidence, health, questions, owners"],
                  ["Runbook", "Requests, states, escalation, closure, reopen"],
                  ["Testing", "Cases, expected, observed, defects, regression"],
                  ["Quality", "Usefulness, misses, effort, impact, debt"],
                  ["Change", "Version, rationale, approval, rollback, completion"],
                  ["Retirement", "Replacement, removal, retention, lessons"],
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
                ["Analyst output", "Usable alerts, questions, evidence, states, closure"],
                ["Owner output", "Dependencies, changes, tests, actions, residual risk"],
                ["Leadership output", "Value, readiness, limits, resources, milestones"],
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
          title="Fake Northbridge Detection Documentation Dashboard"
          subtitle="Fictional artifact completeness, freshness, traceability, ownership, testing, debt, and retirement status for training only."
          metrics={[
            {
              label: "Required documentation artifacts complete",
              value: "7 / 10",
              note: "Alert contract, retirement record, and source-health ownership remain incomplete.",
            },
            {
              label: "Artifacts reviewed after recent changes",
              value: "5 / 10",
              note: "Field dictionary, analyst runbook, metrics report, and exception register require revalidation.",
            },
            {
              label: "Open documentation debt items",
              value: "8",
              note: "Missing owners, stale closure criteria, unlinked tests, incomplete rollback, and undocumented residual risks remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Detection Documentation No Longer Matches Current Evidence Behavior"
          severity="High"
          time="3:16 PM"
          source="Fake Northbridge Documentation Quality Console"
          details="The fictional role source and extension context are current, but the field dictionary omits the new extension freshness state, the runbook closes on alert disappearance, the alert contract hides source-health differences, and the change log lacks rollback and observation metrics."
          recommendation="Keep the fictional documentation package Conditional. Update source and field specifications, alert contract, runbook closure criteria, test traceability, artifact ownership, change rationale, rollback, metrics, residual risk, and review triggers."
        />

        <FakeLogPanel
          title="Fake Documentation Review Timeline"
          logs={[
            "09:00 DOC overview='current'",
            "09:08 DOC source-map='partial'",
            "09:16 DOC field-dictionary='stale-extension-field'",
            "09:24 DOC logic-spec='partial-scope'",
            "09:32 DOC alert-contract='missing-source-health'",
            "09:40 DOC runbook='stale-closure'",
            "09:48 DOC test-package='conditional'",
            "09:56 DOC tuning-register='current'",
            "10:04 DOC metrics='stale'",
            "10:12 DOC change-log='missing-rollback'",
            "10:20 OWNER detection='assigned'",
            "10:28 OWNER source-health='missing'",
            "10:36 OWNER privacy='missing'",
            "10:44 TRACE tests-to-requirements='partial'",
            "10:52 LIMITATIONS documented='incomplete'",
            "11:00 DEBT open-items='8'",
            "11:08 STATUS documentation='conditional'",
            "11:16 REVIEW trigger='identity-workflow-change'",
            "11:24 CONFIDENCE package='moderate'",
            "15:16 ALERT issue='documentation-drift'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Documentation Evidence Supports—and What Remains Incomplete
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Documentation use", item.use],
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
        </section>

        <AnalyzeEvidenceCard
          title="Which Documentation Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional documentation review?"
          evidence={[
            "The overview and primary defender question are current.",
            "The field dictionary omits extension freshness behavior.",
            "The logic narrative lacks changed-destination and conflicting-source behavior.",
            "The alert contract hides source health and confidence differences.",
            "The runbook closes when the alert disappears.",
            "Several important tests exist, but privacy and new-session cases remain incomplete.",
            "Source-health and privacy artifacts lack owners.",
            "The change log lacks rationale, observation metrics, and rollback.",
          ]}
          options={[
            "Keep the fictional package Conditional, update the field dictionary, logic scope, alert contract, runbook closure, test traceability, artifact ownership, change log, metrics, limitations, rollback, and review triggers before approval.",
            "Approve the package because the overview is current.",
            "Delete the incomplete artifacts and rely on analyst experience.",
            "Retire the detection immediately without replacement review.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves what is current while addressing the exact documentation gaps that affect confidence, usability, ownership, testing, and lifecycle."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Detection Documentation Errors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Detection Documentation Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            copy, expose, upload, reproduce, inspect, or transform any real
            detection rule, source map, field dictionary, alert, runbook,
            diagram, incident, account, endpoint, network, domain, supplier,
            platform, organization, or internal document.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants One Short Document Instead of a Documentation Set"
          scenario="A fictional team proposes replacing the overview, source specification, logic narrative, alert contract, runbook, test package, metrics, and change history with one brief page that lists the alert title and owner."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep a concise fictional overview, but retain linked versioned artifacts for sources, fields, logic, alert behavior, runbook, tests, quality, changes, limitations, and retirement with clear owners and review triggers.",
              outcome:
                "Best defensive choice. It preserves usability without losing traceability or lifecycle detail.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the one-page document because analysts need speed.",
              outcome:
                "Weak. Important evidence, source-health, test, limitation, and lifecycle details disappear.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove documentation and rely on the platform configuration.",
              outcome:
                "Weak. Configuration alone does not explain mission, questions, decisions, tests, owners, or limitations.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Detection Changes but the Runbook Does Not"
          scenario="A fictional extension source adds a freshness state, and the logic now returns Conditional when freshness is Unknown. The analyst runbook still tells reviewers to treat any extension record as current and close the alert."
          choices={[
            {
              label: "Choice A",
              response:
                "Place the fictional package in Change Review, update the field dictionary, logic specification, alert contract, runbook, tests, metrics, change log, limitations, rollback, and owner training before restoring Approved status.",
              outcome:
                "Best choice. Documentation must change with the capability and its evidence behavior.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the runbook unchanged because the platform logic is correct.",
              outcome:
                "Weak. Analysts may still make incorrect decisions from stale guidance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the freshness field from the alert to avoid confusion.",
              outcome:
                "Weak. Hiding evidence quality creates false confidence.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Create a Documentation System That Survives Staff and Technology Change"
        >
          <p className="leading-8">
            Fictional Northbridge has detections for privileged access,
            suppliers, network behavior, DNS, wireless, applications,
            source health, and recovery. Documentation exists in separate
            locations, source owners have changed, tests are not linked to
            requirements, runbooks disagree with alert behavior, and no
            retirement records exist.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create artifact governance",
                "Define fictional required artifacts, templates, owners, access, versions, review dates, quality checks, and retirement.",
              ],
              [
                "Create traceability",
                "Link fictional mission risks, questions, sources, fields, logic, tests, alerts, decisions, changes, metrics, and owners.",
              ],
              [
                "Create source-health documentation",
                "Document fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior.",
              ],
              [
                "Create operational runbooks",
                "Use fictional ordered questions, evidence requests, ownership, states, escalation, closure, reopen, privacy, and response boundaries.",
              ],
              [
                "Create documentation quality review",
                "Measure fictional completeness, freshness, traceability, usability, ownership, test linkage, debt, and retirement readiness.",
              ],
              [
                "Create audience summaries",
                "Prepare fictional analyst, owner, privacy, risk, and leadership views without exposing internal operational detail.",
              ],
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
              Produce a fictional documentation-governance charter, artifact
              catalog, overview template, source and field template, logic
              template, alert contract, analyst runbook, test traceability
              matrix, tuning register, metrics report, owner matrix, change and
              decision log, documentation-debt register, residual-risk
              statement, retirement template, analyst summary, and leadership
              summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Detection Documentation Checklist"
          items={[
            "I can explain fictional detection documentation as part of the defensive control rather than optional paperwork.",
            "I can begin with purpose, mission risk, defender questions, scope, exclusions, stakeholders, and non-proof statements.",
            "I can document fictional sources, fields, provenance, timing, transformations, requirements, health, coverage, privacy, and owners.",
            "I can write a conceptual fictional logic narrative with conditions, relationships, timing, context, exclusions, missing-data behavior, confidence, severity, and limits.",
            "I can define a fictional alert contract with observation, evidence, source health, context, confidence, severity, priority, alternatives, owners, and decision criteria.",
            "I can write a fictional analyst runbook with ordered questions, purpose-limited evidence requests, states, escalation, closure, reopen, privacy, and response boundaries.",
            "I can connect fictional requirements to tests, defects, regression cases, validation gates, and changes.",
            "I can document expected alerts, false positives, false negatives, Unknown outcomes, source degradation, analyst effort, user impact, privacy, and documentation debt.",
            "I can assign artifact-level detection, source, identity, service, supplier, change, privacy, risk, documentation, and retirement owners.",
            "I can maintain fictional versions, approvals, observation, metrics, rollback, completion, review triggers, residual risk, and retirement records.",
            "I can measure fictional completeness, freshness, traceability, usability, owner responsiveness, test linkage, debt, and retirement readiness.",
            "I can create a completely fictional documentation package without exposing real rules, sources, fields, alerts, runbooks, incidents, systems, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A5.9 Mini Quiz: Detection Documentation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Documentation Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twelve fictional detections, detection identifiers, titles, versions, statuses, owners, approvers, creation dates, review dates, mission risks, primary defender questions, supporting questions, non-proof statements, identity scope, device scope, service scope, destination scope, environment scope, operating states, exclusions, source categories, source dependencies, source owners, required fields, optional fields, field meanings, field types, values, schema versions, event time, collection time, processing time, transformations, retention, privacy purpose, source-health states, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, logic narratives, conditions, relationships, sequences, thresholds, time windows, context, exclusions, missing-data behavior, confidence, severity, alert titles, observations, evidence, enrichment, alternatives, analyst questions, evidence requests, decision states, escalation criteria, closure criteria, reopen criteria, response boundaries, test charters, positive tests, negative tests, boundary tests, source-degraded tests, change tests, privacy tests, recovery tests, regression tests, expected outcomes, observed outcomes, defects, corrective actions, validation gates, tuning records, exception records, suppression debt, metrics, alert usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source-health impact, analyst effort, user impact, privacy impact, documentation completeness, freshness, traceability, usability, owner responsiveness, test linkage, documentation debt, change history, approvals, observation periods, rollback, completion criteria, review triggers, known limitations, assumptions, residual risks, retirement records, replacement coverage, lessons learned, analyst summaries, owner summaries, privacy summaries, leadership summaries, reflection, and a statement that every organization, detection, source, field, alert, owner, test, date, decision, and outcome is invented."
          tips={[
            "Write fictional mission and decision purpose before technical behavior.",
            "Use versioned linked artifacts rather than one giant unstructured page.",
            "Make source health, expected alerts, limitations, residual risk, ownership, rollback, and retirement explicit.",
            "Connect every major requirement to tests and every change to regression evidence.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the Detection Engineering Capstone Lab?"
        >
          <p className="leading-8">
            Before moving to A5.10, rate your readiness from 1 to 5 for mission
            documentation, source and field specifications, logic narratives,
            alert contracts, runbooks, test traceability, metrics, owners,
            changes, limitations, residual risk, review triggers, rollback,
            retirement, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional detection documentation is part of the control.",
              "I can write a versioned overview, source map, field dictionary, logic narrative, alert contract, and runbook.",
              "I can document source-health behavior and missing-data decisions.",
              "I can connect requirements to tests, defects, changes, and regression.",
              "I can assign artifact-level owners and review triggers.",
              "I can document known limitations, residual risks, rollback, and retirement.",
              "I can create audience-specific analyst, owner, privacy, risk, and leadership summaries.",
              "I can produce a safe fictional documentation package without copying real internal material.",
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
            Record one fictional detection purpose, one required source, one
            field limitation, one alert-contract requirement, one runbook
            closure criterion, one documentation-debt item, and one question
            you will carry into A5.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection documentation should begin with fictional mission risk, defender questions, purpose, scope, exclusions, stakeholders, and non-proof statements.",
            "Strong documentation connects fictional sources, fields, logic, tests, alerts, analyst decisions, owners, metrics, changes, limitations, and lifecycle.",
            "Field dictionaries should document provenance, meaning, transformations, requirements, privacy purpose, source health, and limitations.",
            "Alert contracts should separate observation, evidence, context, source health, confidence, severity, priority, alternatives, owners, limits, and decision criteria.",
            "Analyst runbooks should use ordered questions, purpose-limited evidence requests, accountable owners, decision states, escalation, closure, reopen, privacy, and response boundaries.",
            "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source behavior belongs in the specification.",
            "Requirements should trace to tests, defects, regression cases, changes, metrics, and review decisions.",
            "Documentation needs artifact-level owners, version history, observation, rollback, review triggers, residual risk, and retirement records.",
            "Complete documentation can still be stale, so freshness, usability, traceability, and owner responsiveness must be measured.",
            "Every CyberShield documentation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A5
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, complete the A5 Detection Engineering Capstone Lab by
            designing, testing, tuning, documenting, and presenting a fully
            fictional detection program with evidence, analyst decisions,
            quality review, governance, and portfolio artifacts.
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