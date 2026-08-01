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
const modulePath = `${trackPath}/threat-modeling`;
const previousLesson = `${modulePath}/abuse-cases-and-misuse-thinking`;
const nextLesson = `${modulePath}/risk-ranking-in-threat-models`;

const objectives = [
  "Explain why conceptual threat categories help defenders organize questions without proving that a threat exists, that a control failed, or that an actor acted maliciously.",
  "Classify fictional threat-model concerns across identity, integrity, confidentiality, availability, privilege, accountability, privacy, safety, dependency, recovery, and governance themes.",
  "Use categories as prompts that connect fictional assets, actors, entry points, flows, trust boundaries, abuse cases, evidence, assumptions, controls, owners, and review triggers.",
  "Recognize cross-category, uncategorized, overlapping, and context-specific concerns without forcing every scenario into one rigid label.",
  "Create a portfolio-ready fictional threat-category worksheet that remains ethical, authorized, defensive, evidence-aware, privacy-safe, and completely invented.",
];

const vocabulary = [
  [
    "Threat category",
    "A conceptual label used to organize defensive questions about possible harm, unsafe conditions, control gaps, or trust assumptions in a fictional system.",
  ],
  [
    "Category prompt",
    "A structured question that helps defenders review a fictional design, workflow, role, flow, boundary, or abuse case from a particular security perspective.",
  ],
  [
    "Classification",
    "The act of assigning one or more conceptual labels to a fictional concern so that related questions, owners, controls, and evidence can be compared.",
  ],
  [
    "Cross-category concern",
    "A fictional scenario that affects more than one security property, such as identity, privacy, integrity, availability, accountability, and recovery at the same time.",
  ],
  [
    "Primary category",
    "The conceptual label that best represents the main decision or harm being reviewed in a fictional scenario.",
  ],
  [
    "Secondary category",
    "An additional conceptual label that captures another important effect, dependency, control, or owner decision.",
  ],
  [
    "Uncategorized concern",
    "A fictional issue that does not fit the chosen category set clearly and therefore requires a custom question rather than forced labeling.",
  ],
  [
    "Category coverage",
    "The degree to which a fictional threat model considers relevant security, privacy, safety, resilience, governance, and operational questions.",
  ],
  [
    "Category bias",
    "The risk that a chosen framework causes reviewers to notice some concerns while overlooking context that does not match familiar labels.",
  ],
  [
    "Category inflation",
    "Assigning too many labels to every scenario until categories no longer help distinguish decisions, owners, evidence, or mitigations.",
  ],
  [
    "Category collapse",
    "Combining different concerns into one vague label that hides distinct assets, outcomes, controls, owners, or evidence requirements.",
  ],
  [
    "Category evidence",
    "The fictional records, owner decisions, diagrams, events, role definitions, data inventories, tickets, reviews, and exercises that support or limit a category assignment.",
  ],
  [
    "Identity concern",
    "A fictional question about who or what is acting, how identity is established, how trust is carried, and how lifecycle or recovery affects that identity.",
  ],
  [
    "Authorization concern",
    "A fictional question about whether an actor or service may perform a specific action on a specific object under defined conditions.",
  ],
  [
    "Integrity concern",
    "A fictional question about whether data, workflow state, configuration, evidence, decisions, or system behavior remain accurate, complete, consistent, and authorized.",
  ],
  [
    "Confidentiality concern",
    "A fictional question about whether information is disclosed only to approved actors, services, audiences, and purposes.",
  ],
  [
    "Availability concern",
    "A fictional question about whether a service, workflow, data set, dependency, or recovery capability is accessible and usable when needed.",
  ],
  [
    "Accountability concern",
    "A fictional question about whether actions, approvals, decisions, failures, changes, and recoveries can be attributed and reviewed using trustworthy evidence.",
  ],
  [
    "Privacy concern",
    "A fictional question about collection, purpose, minimization, audience, retention, inference, consent, expectation, deletion, and responsible use of data.",
  ],
  [
    "Safety concern",
    "A fictional question about whether system behavior, communication, automation, or failure could create harm to people, operations, or essential services.",
  ],
  [
    "Resilience concern",
    "A fictional question about whether the system can continue, degrade safely, recover correctly, reconcile state, and restore trust after disruption.",
  ],
  [
    "Dependency concern",
    "A fictional question about shared services, suppliers, identities, networks, queues, data sources, people, and recovery steps on which other functions rely.",
  ],
  [
    "Governance concern",
    "A fictional question about ownership, approval, policy, exception, evidence, review, risk acceptance, lifecycle, and decision rights.",
  ],
  [
    "Category traceability",
    "The connection from a conceptual category to the exact fictional asset, scenario, evidence, owner, control, decision, and review trigger it supports.",
  ],
];

const categoryFamilies = [
  {
    category: "Identity and authenticity",
    centralQuestion:
      "Who or what is acting, and what evidence supports that identity, relationship, device, service, session, or trust assertion?",
    fictionalExamples:
      "A stale service identity remains active; a supplier assertion lacks current ownership; a recovery identity is used outside the approved event window.",
    assets:
      "Accounts, roles, service identities, sessions, federation, user trust, approvals, recovery authority, and evidence.",
    evidence:
      "Authentication results, assertion source, lifecycle records, role assignment, device context, approvals, access reviews, and recovery closure.",
    controls:
      "Strong identity proof, lifecycle, role ownership, service-identity governance, session protection, conditional access, and recovery controls.",
    warning:
      "An identity category does not prove impersonation, credential theft, compromise, or malicious intent.",
  },
  {
    category: "Authorization and privilege",
    centralQuestion:
      "May this fictional actor perform this action on this object, for this purpose, under these conditions, at this time?",
    fictionalExamples:
      "A support role can reprocess records without case-state confirmation; a broad role grants access beyond active assignment; emergency authority outlives recovery.",
    assets:
      "Permissions, roles, case assignments, administrative functions, sensitive records, workflow state, and separation of duties.",
    evidence:
      "Policy decisions, role maps, object checks, approval records, access reviews, administrative events, and reason capture.",
    controls:
      "Least privilege, object-level authorization, separation, time limits, approval, reason capture, review, and denial evidence.",
    warning:
      "A privileged role is not automatically unsafe, and broad authority does not by itself prove misuse.",
  },
  {
    category: "Integrity and correctness",
    centralQuestion:
      "Can fictional data, workflow state, decisions, configuration, evidence, or derived output become incorrect, incomplete, duplicated, reordered, stale, or unauthorized?",
    fictionalExamples:
      "Delayed supplier results update the wrong workflow state; duplicate submissions create conflicting case status; recovery restores stale notification data.",
    assets:
      "Case state, data records, event order, approvals, configuration, evidence, reports, and user-facing status.",
    evidence:
      "Validation results, event correlation, version records, reconciliation, change history, queue state, and business-state checks.",
    controls:
      "Validation, freshness, duplicate and ordering handling, versioning, approvals, reconciliation, integrity checks, and safe rollback.",
    warning:
      "Integrity concerns include business meaning and workflow state, not only file or database modification.",
  },
  {
    category: "Confidentiality and exposure",
    centralQuestion:
      "Could fictional information be disclosed to an unapproved actor, service, audience, destination, environment, or purpose?",
    fictionalExamples:
      "Notification content includes unnecessary case detail; a supplier receives a free-text support note; support access reveals records outside assigned cases.",
    assets:
      "Personal data, case records, metadata, support notes, identities, derived reports, logs, backups, and trust.",
    evidence:
      "Field inventories, classification, access records, sharing decisions, audience settings, retention, supplier fields, and privacy reviews.",
    controls:
      "Access control, minimization, audience restriction, masking, encryption concepts, retention, deletion, review, and monitoring.",
    warning:
      "Confidentiality is broader than secrecy; purpose, audience, derived information, and metadata also matter.",
  },
  {
    category: "Availability and service continuity",
    centralQuestion:
      "Can fictional users, services, defenders, or recovery teams access the required capability, data, identity, dependency, or evidence when needed?",
    fictionalExamples:
      "Processing results are delayed; identity services are unavailable; a queue backlog creates hidden user impact; monitoring evidence stops arriving.",
    assets:
      "Portal access, identity, processing, notifications, evidence, support, recovery, supplier services, and communication.",
    evidence:
      "Health signals, queue state, service objectives, support tickets, retry records, dependency maps, and recovery exercises.",
    controls:
      "Redundancy, bounded retry, graceful degradation, health monitoring, capacity planning, alternate workflows, communication, and recovery.",
    warning:
      "A service can be technically online while the business workflow is unusable or misleading.",
  },
  {
    category: "Accountability and evidence",
    centralQuestion:
      "Can fictional teams explain who or what acted, what changed, why, when, on which object, with which result, and whether evidence sources were healthy?",
    fictionalExamples:
      "Notification changes lack reason and confirmation; dashboard status conflicts with delayed events; administrative actions cannot be linked to a ticket.",
    assets:
      "Logs, approvals, tickets, timestamps, event meaning, source health, decision history, and auditability.",
    evidence:
      "Event schemas, source-health records, actor and target fields, approvals, tickets, correlation identifiers, retention, and review notes.",
    controls:
      "Purposeful logging, event quality, integrity, time context, source health, correlation, access restrictions, retention, and review.",
    warning:
      "More logging is not automatically better; evidence must be useful, trustworthy, privacy-aware, and owned.",
  },
  {
    category: "Privacy and responsible data use",
    centralQuestion:
      "Is fictional data collected, used, combined, shared, retained, inferred, or deleted only for a clear and approved purpose?",
    fictionalExamples:
      "A future analytics process combines support and supplier events without approved fields; free text crosses a supplier boundary; data remains beyond its retention purpose.",
    assets:
      "Personal data, metadata, derived information, consent or notice, expectations, trust, retention, and deletion evidence.",
    evidence:
      "Purpose records, field inventories, classification, privacy review, retention schedules, audience decisions, and deletion records.",
    controls:
      "Purpose limitation, minimization, access restrictions, masking, retention, deletion, transparency, review, and governance.",
    warning:
      "A security control can still create privacy risk if it collects excessive data or uses it beyond the approved purpose.",
  },
  {
    category: "Safety and human impact",
    centralQuestion:
      "Could fictional system behavior, automation, communication, failure, or recovery create harm to people, fairness, essential service, or trusted decision-making?",
    fictionalExamples:
      "Incorrect case status changes a student decision; delayed communication causes duplicate action; low-confidence automation affects priority without review.",
    assets:
      "People, service access, fairness, accurate communication, trusted decisions, essential workflows, and recovery outcomes.",
    evidence:
      "User journeys, support themes, decision records, error messages, automation outcomes, complaints, exercises, and owner review.",
    controls:
      "Human review, safer defaults, clear communication, guardrails, appeal paths, accessibility, workload limits, and escalation.",
    warning:
      "Safety is not limited to physical harm; service and decision consequences can matter.",
  },
  {
    category: "Resilience and recovery",
    centralQuestion:
      "Can fictional services, data, identities, configurations, evidence, dependencies, and business state be restored safely after disruption?",
    fictionalExamples:
      "Application recovery occurs before queue validation; emergency access remains active; stale notifications are sent after restore.",
    assets:
      "Backups, recovery identities, configuration baselines, dependency order, communication, business state, and trust.",
    evidence:
      "Restore tests, recovery triggers, approvals, source artifacts, validation, reconciliation, communication, and closure review.",
    controls:
      "Trusted baselines, restore order, strong recovery identity, integrity checks, reconciliation, communication, revocation, and lessons learned.",
    warning:
      "Backup presence does not prove correct, timely, complete, or usable recovery.",
  },
  {
    category: "Dependency and concentration",
    centralQuestion:
      "Which fictional services, suppliers, identities, people, queues, data sources, or recovery steps create shared or concentrated dependence?",
    fictionalExamples:
      "One identity provider supports portal, administration, and supplier trust; one queue carries multiple business-critical event types; one supplier performs all document processing.",
    assets:
      "Shared services, supplier relationships, identity, network paths, queues, specialized staff, evidence sources, and recovery dependencies.",
    evidence:
      "Dependency maps, service catalogs, supplier records, identity consumers, queue metrics, staffing plans, and recovery order.",
    controls:
      "Redundancy, alternate providers, isolation, capacity, ownership, fallback, contract planning, recovery, and exit strategy.",
    warning:
      "A small or low-volume dependency can still create broad impact when many functions rely on it.",
  },
  {
    category: "Governance and ownership",
    centralQuestion:
      "Are fictional purpose, ownership, approval, policy, exception, evidence, lifecycle, risk acceptance, and review responsibilities clear?",
    fictionalExamples:
      "A temporary interface has no owner; a service identity review has expired; a future analytics flow lacks approved purpose and retention.",
    assets:
      "Decision rights, ownership records, policies, exceptions, risk decisions, change history, reviews, and accountability.",
    evidence:
      "Owner registers, approvals, policies, review records, exception decisions, change tickets, risk acceptance, and retirement records.",
    controls:
      "Named owners, review cadence, approval, expiration, exception governance, evidence standards, change management, and retirement.",
    warning:
      "A governance gap does not automatically prove a technical weakness or harmful event, but it increases uncertainty and decision risk.",
  },
];

const categoryPromptMatrix = [
  {
    prompt: "Who or what is trusted?",
    categories:
      "Identity, authorization, accountability, governance",
    applyTo:
      "Actors, service identities, sessions, federation, roles, emergency access, approvals, and lifecycle.",
    evidence:
      "Identity source, role, policy result, assignment, approval, access review, event, and owner.",
  },
  {
    prompt: "What value could become incorrect?",
    categories:
      "Integrity, safety, accountability, recovery",
    applyTo:
      "Data, workflow state, decisions, configuration, event order, notifications, reports, backups, and restored state.",
    evidence:
      "Validation, version, state, reconciliation, change record, exercise result, and business owner decision.",
  },
  {
    prompt: "What could be disclosed or used too broadly?",
    categories:
      "Confidentiality, privacy, governance",
    applyTo:
      "Records, fields, metadata, support notes, logs, notifications, analytics, suppliers, backups, and derived information.",
    evidence:
      "Field inventory, classification, purpose, audience, access, sharing, retention, privacy review, and deletion.",
  },
  {
    prompt: "What must remain available?",
    categories:
      "Availability, dependency, resilience, safety",
    applyTo:
      "Portal, identity, processing, notifications, monitoring, support, suppliers, queues, recovery, and communication.",
    evidence:
      "Service objective, health, queue state, support impact, dependency map, retry, fallback, and recovery exercise.",
  },
  {
    prompt: "What must be explainable later?",
    categories:
      "Accountability, governance, integrity, privacy",
    applyTo:
      "Administrative actions, approvals, policy decisions, support changes, supplier results, recovery actions, and risk acceptance.",
    evidence:
      "Actor, action, target, reason, result, time, source health, ticket, approval, correlation, and review.",
  },
  {
    prompt: "What if one dependency fails?",
    categories:
      "Dependency, availability, resilience, safety",
    applyTo:
      "Identity provider, supplier, queue, notification service, monitoring source, specialized staff, backup, and network path.",
    evidence:
      "Dependency map, failure test, alternate process, capacity, support impact, recovery order, and communication plan.",
  },
  {
    prompt: "What changes during degraded or emergency operation?",
    categories:
      "Resilience, authorization, identity, accountability, safety",
    applyTo:
      "Emergency roles, alternate workflows, delayed processing, manual review, failover, restore, and reconciliation.",
    evidence:
      "Trigger, approval, authority, source artifact, actions, validation, communication, closure, and revocation.",
  },
  {
    prompt: "Who owns the remaining uncertainty?",
    categories:
      "Governance, accountability, risk, dependency",
    applyTo:
      "Unowned interfaces, stale identities, unclear supplier fields, draft analytics, missing evidence, and unresolved recovery assumptions.",
    evidence:
      "Owner assignment, decision log, evidence request, review date, residual risk decision, and change trigger.",
  },
];

const categoryAssignmentRules = [
  {
    rule: "Start with the decision, not the label",
    explanation:
      "Identify the fictional decision, affected asset, actor, flow, boundary, abuse case, and evidence before selecting categories.",
    failure:
      "Beginning with a favorite category can distort the scenario and hide context that does not match the framework.",
  },
  {
    rule: "Choose one primary category when useful",
    explanation:
      "Select the label that best represents the main harmful outcome or owner decision.",
    failure:
      "Assigning every category as primary makes prioritization and ownership unclear.",
  },
  {
    rule: "Add secondary categories only when they change the decision",
    explanation:
      "Use additional labels when they introduce a different asset, owner, control, evidence source, or recovery requirement.",
    failure:
      "Decorative labels create category inflation without improving reasoning.",
  },
  {
    rule: "Preserve uncategorized concerns",
    explanation:
      "Record a custom concern when the chosen category set does not fit the fictional context.",
    failure:
      "Forced classification can erase safety, human, operational, supplier, or governance concerns.",
  },
  {
    rule: "Keep category and evidence separate",
    explanation:
      "A label organizes a question; evidence supports or limits the underlying claim.",
    failure:
      "Calling a scenario an integrity threat does not prove data was changed or a control failed.",
  },
  {
    rule: "Keep category and severity separate",
    explanation:
      "A category describes the kind of concern, while later risk ranking evaluates impact, likelihood, exposure, control strength, uncertainty, and mission context.",
    failure:
      "A confidentiality label is not automatically higher or lower risk than availability, privacy, or governance.",
  },
  {
    rule: "Keep category and actor intent separate",
    explanation:
      "Categories describe possible effects and control questions, not whether a fictional actor acted deliberately.",
    failure:
      "Identity or authorization concerns do not prove impersonation, insider misuse, or malicious behavior.",
  },
  {
    rule: "Review category coverage with multiple roles",
    explanation:
      "Technical, privacy, data, operations, support, recovery, supplier, and mission owners notice different concerns.",
    failure:
      "One reviewer may overemphasize familiar technical categories and miss human or business impact.",
  },
  {
    rule: "Trace categories to controls and owners",
    explanation:
      "Every important category assignment should connect to specific mitigations, evidence, decision rights, and review triggers.",
    failure:
      "A category worksheet that stops at labels does not improve the design.",
  },
  {
    rule: "Retire or revise labels when context changes",
    explanation:
      "Update assignments when assets, flows, suppliers, identity, automation, recovery, evidence, or business purpose changes.",
    failure:
      "Stale category labels can create false confidence and preserve outdated assumptions.",
  },
];

const overlapExamples = [
  {
    scenario:
      "A fictional support analyst changes notification preferences without complete reason and user-confirmation evidence.",
    primary:
      "Accountability",
    secondary:
      "Authorization, privacy, integrity, governance",
    why:
      "The main supported gap is incomplete evidence, while permission scope, data use, correct preference state, and ownership also affect the decision.",
    notProven:
      "The evidence does not prove unauthorized action, malicious intent, or user harm.",
  },
  {
    scenario:
      "A fictional supplier result arrives late and updates a case after the workflow has moved to another state.",
    primary:
      "Integrity",
    secondary:
      "Availability, dependency, accountability, resilience",
    why:
      "The central concern is incorrect workflow state, while delay, supplier reliance, evidence, and recovery also matter.",
    notProven:
      "The scenario does not prove tampering, compromise, or permanent data loss.",
  },
  {
    scenario:
      "A fictional analytics proposal combines support, supplier, portal, and notification events without approved fields or retention.",
    primary:
      "Privacy",
    secondary:
      "Confidentiality, governance, accountability, integrity",
    why:
      "Purpose, minimization, audience, inference, and retention are central, while exposure, owner decisions, evidence quality, and interpretation also matter.",
    notProven:
      "The proposal is future-state and does not prove collection or misuse has occurred.",
  },
  {
    scenario:
      "A fictional identity provider outage causes teams to rely on broad emergency access for longer than planned.",
    primary:
      "Availability",
    secondary:
      "Authorization, identity, accountability, safety, resilience",
    why:
      "Loss of identity service drives the condition, but emergency authority, identity confidence, evidence, human impact, and recovery closure also change.",
    notProven:
      "The scenario does not prove that emergency access is currently broad or improperly used.",
  },
  {
    scenario:
      "A fictional recovery restores application service but sends stale notifications and repeats archival tasks.",
    primary:
      "Resilience",
    secondary:
      "Integrity, accountability, availability, safety, trust",
    why:
      "The central decision is correct recovery, while business state, evidence, service timing, user impact, and confidence are also affected.",
    notProven:
      "One exercise does not prove future frequency or current production exposure.",
  },
  {
    scenario:
      "A fictional temporary migration interface remains documented as enabled without a current owner or purpose.",
    primary:
      "Governance",
    secondary:
      "Identity, authorization, accountability, dependency",
    why:
      "Ownership and lifecycle are the supported gaps, while connected identity, accepted operations, evidence, and dependencies require validation.",
    notProven:
      "The record does not prove reachability, use, unsafe configuration, or malicious activity.",
  },
];

const categoryQuality = [
  {
    level: "Weak category statement",
    statement:
      "This is a confidentiality threat.",
    problem:
      "The label does not identify the fictional asset, actor, flow, boundary, scenario, evidence, owner, or decision.",
    improvement:
      "Explain what information could be exposed, to whom, for which purpose, through which flow, under which condition, and with which evidence limits.",
  },
  {
    level: "Developing category statement",
    statement:
      "The supplier flow may create a privacy concern because it includes free text.",
    problem:
      "The statement does not identify field purpose, actual population, destination use, retention, owner, or whether the flow is current.",
    improvement:
      "Record the field, approved purpose, minimization question, supplier boundary, evidence, unknowns, owner, and review trigger.",
  },
  {
    level: "Strong category statement",
    statement:
      "The fictional supplier request creates a primary privacy concern and secondary confidentiality and governance concerns because a free-text support note may cross an administrative boundary without confirmed necessity, retention, or owner approval.",
    problem:
      "The statement still requires current-state evidence, controls, confidence, and residual decision.",
    improvement:
      "Add field-population evidence, access, retention, validation, minimization controls, owner actions, and uncertainty.",
  },
  {
    level: "Decision-ready category statement",
    statement:
      "The fictional supplier request is categorized primarily as privacy because the free-text support note may exceed the minimum processing purpose; confidentiality and governance are secondary because external audience and owner approval also matter. Current evidence does not prove the field is populated or unapproved, so the data and supplier owners must validate purpose, fields, retention, access, and controls before risk ranking.",
    problem:
      "The category assignment remains a model and must be reviewed when fields, purpose, supplier, interface, evidence, or ownership changes.",
    improvement:
      "Record version, review date, control evidence, residual uncertainty, and change triggers.",
  },
];

const evidenceMatrix = [
  {
    id: "TC-01",
    source: "Fictional support-role matrix",
    observation:
      "The support role can reset accounts, change notification settings, view case status, and initiate reprocessing.",
    supports:
      "Identity, authorization, integrity, privacy, accountability, and governance questions may apply to different support actions.",
    limits:
      "The matrix does not prove current effective permission, misuse, malicious intent, or inadequate controls.",
    use:
      "Assign categories to exact action-object scenarios rather than labeling the entire role as dangerous.",
  },
  {
    id: "TC-02",
    source: "Fictional notification-ticket review",
    observation:
      "Several notification changes lack recorded reason and user-confirmation fields.",
    supports:
      "Accountability is a strong primary category, with possible authorization, privacy, integrity, and governance overlap.",
    limits:
      "Missing fields do not prove that the changes were unauthorized, incorrect, deliberate, or harmful.",
    use:
      "Separate evidence quality from actor intent and connect category assignments to owner review.",
  },
  {
    id: "TC-03",
    source: "Fictional supplier-field inventory",
    observation:
      "A processing request may include a free-text support note in addition to case reference, category, and priority.",
    supports:
      "Privacy, confidentiality, governance, integrity, and supplier-dependency questions may apply.",
    limits:
      "The inventory does not prove the field is populated, unnecessary, retained, accessed, or unapproved.",
    use:
      "Use privacy as a likely primary prompt while preserving field-purpose uncertainty.",
  },
  {
    id: "TC-04",
    source: "Fictional queue-health dashboard",
    observation:
      "Result events were delayed for twenty-two minutes while source health remained Green.",
    supports:
      "Availability, integrity, accountability, dependency, and resilience questions may overlap.",
    limits:
      "The dashboard does not prove data loss, tampering, malicious activity, or incorrect final state.",
    use:
      "Create category prompts about delay, state, source health, reconciliation, and evidence meaning.",
  },
  {
    id: "TC-05",
    source: "Fictional support-ticket pattern",
    observation:
      "Users submitted duplicate documents after delayed status notifications.",
    supports:
      "Integrity, availability, safety, usability, accountability, and resilience concerns may be connected.",
    limits:
      "The tickets do not prove one technical cause or that every duplicate had the same explanation.",
    use:
      "Avoid category collapse by separating user impact, workflow state, communication, and evidence.",
  },
  {
    id: "TC-06",
    source: "Fictional service-identity review",
    observation:
      "An archival service identity lacks a confirmed owner and has passed its review date.",
    supports:
      "Governance is a strong primary category, with identity, authorization, accountability, and recovery overlap.",
    limits:
      "The record does not prove compromise, misuse, excessive permission, or active processing.",
    use:
      "Use categories to organize owner, lifecycle, authority, activity, and recovery questions.",
  },
  {
    id: "TC-07",
    source: "Fictional recovery exercise",
    observation:
      "Application service returned before notification and archival dependencies were validated, creating stale messages and repeated archival tasks.",
    supports:
      "Resilience, integrity, availability, accountability, safety, dependency, and trust concerns are connected.",
    limits:
      "One exercise does not prove current exposure, future frequency, or control failure outside the exercise.",
    use:
      "Select a primary recovery category while preserving distinct secondary outcomes and owners.",
  },
  {
    id: "TC-08",
    source: "Fictional analytics proposal",
    observation:
      "A proposed analytics process may combine portal, support, supplier, and notification events, but fields, audience, purpose, retention, and ownership remain unresolved.",
    supports:
      "Privacy and governance prompts are central, with confidentiality, integrity, accountability, and safety questions possible.",
    limits:
      "The proposal is future-state and does not prove current collection, exposure, or misuse.",
    use:
      "Label the scenario future-state and require owner decisions before final risk ranking.",
  },
];

const commonMistakes = [
  {
    mistake: "Treating categories as proof",
    why:
      "A label such as integrity or privacy organizes a question but does not prove a harmful condition, control failure, or event.",
    correction:
      "Link every category assignment to fictional evidence, assumptions, confidence, unknowns, and owner review.",
  },
  {
    mistake: "Using categories as severity",
    why:
      "Category describes the type of concern, while severity requires later impact, likelihood, exposure, control, uncertainty, and mission analysis.",
    correction:
      "Keep category assignment separate from A3.6 risk ranking.",
  },
  {
    mistake: "Assigning every category to every scenario",
    why:
      "Category inflation makes the worksheet unreadable and hides which decisions, owners, controls, and evidence actually differ.",
    correction:
      "Use one primary category and only meaningful secondary categories.",
  },
  {
    mistake: "Forcing every concern into one framework",
    why:
      "Human safety, usability, supplier responsibility, governance, recovery, or context-specific concerns may not fit a chosen label set.",
    correction:
      "Preserve uncategorized and custom concerns when needed.",
  },
  {
    mistake: "Ignoring cross-category effects",
    why:
      "One fictional scenario may affect integrity, privacy, availability, accountability, recovery, and trust in different ways.",
    correction:
      "Record primary and secondary categories when each changes assets, owners, controls, evidence, or recovery.",
  },
  {
    mistake: "Categorizing a person instead of a scenario",
    why:
      "Labels should describe concerns about a fictional interaction or condition, not mark a role, employee, supplier, or user as a threat.",
    correction:
      "Categorize the exact actor-action-object-flow scenario and preserve intent uncertainty.",
  },
  {
    mistake: "Ignoring business and user context",
    why:
      "A technical label can hide user harm, fairness, communication, mission, workflow, or service impact.",
    correction:
      "Include mission, privacy, safety, trust, usability, and operational perspectives.",
  },
  {
    mistake: "Using labels without controls or owners",
    why:
      "A category list that does not change a design, evidence, ownership, or risk decision has little value.",
    correction:
      "Trace each category to specific questions, controls, evidence, owners, and review triggers.",
  },
  {
    mistake: "Mixing current and proposed concerns",
    why:
      "A future analytics design may be mistaken for an existing privacy issue.",
    correction:
      "Label current, future, temporary, degraded, recovery, and retired states clearly.",
  },
  {
    mistake: "Using real internal classifications",
    why:
      "Real threat models, categories, diagrams, roles, suppliers, evidence, and recovery details may reveal sensitive organizational information.",
    correction:
      "Invent every organization, actor, system, flow, scenario, category assignment, record, date, control, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Confirm scope and category purpose",
    action:
      "State which fictional Northbridge threat-model decision the category worksheet supports and which abuse cases, assets, actors, flows, boundaries, suppliers, and recovery states are included.",
    output:
      "Purpose, scope, exclusions, category set, stakeholders, version, and safety boundary.",
    quality:
      "The worksheet explains why categories are being used and what they do not prove.",
  },
  {
    step: "2",
    title: "Select decision-relevant scenarios",
    action:
      "Choose fictional abuse cases from A3.4 that affect different assets, owners, states, and dependencies.",
    output:
      "A scenario list with identifiers, affected assets, evidence, uncertainty, and current or future-state label.",
    quality:
      "Each scenario is specific enough to categorize without labeling a person or entire system.",
  },
  {
    step: "3",
    title: "Assign primary categories",
    action:
      "Choose the category that best represents the central harmful outcome or owner decision for each fictional scenario.",
    output:
      "One primary category with written rationale for every scenario.",
    quality:
      "The rationale explains why the category helps the decision rather than merely repeating the label.",
  },
  {
    step: "4",
    title: "Add meaningful secondary categories",
    action:
      "Add another category only when it introduces a distinct asset, owner, control, evidence source, or recovery requirement.",
    output:
      "A limited set of secondary categories with decision impact.",
    quality:
      "The worksheet avoids decorative or automatic multi-labeling.",
  },
  {
    step: "5",
    title: "Preserve uncategorized concerns",
    action:
      "Record fictional safety, usability, supplier, governance, human, or context-specific questions that do not fit clearly.",
    output:
      "A custom-concern register with rationale and owner.",
    quality:
      "No important concern is removed simply because the framework lacks a perfect label.",
  },
  {
    step: "6",
    title: "Connect controls and evidence",
    action:
      "For each category assignment, record controls, evidence, evidence limits, owners, current state, assumptions, unknowns, and review triggers.",
    output:
      "A traceability matrix from scenario to category, control, evidence, owner, and decision.",
    quality:
      "The worksheet remains evidence-aware and does not treat labels as proof.",
  },
  {
    step: "7",
    title: "Review coverage and bias",
    action:
      "Ask technical, privacy, data, support, operations, supplier, recovery, and mission perspectives to identify missed or overused categories.",
    output:
      "A category coverage review, overlap log, bias findings, and revisions.",
    quality:
      "The review can explain both category gaps and category inflation.",
  },
  {
    step: "8",
    title: "Prepare for risk ranking",
    action:
      "Summarize which fictional scenarios are ready for ranking and which still need evidence, owner decisions, scope clarification, or category revision.",
    output:
      "A readiness summary for A3.6 with unresolved questions and next actions.",
    quality:
      "Category labels remain separate from severity and do not predetermine risk scores.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of a threat category?",
    choices: [
      "To prove that a threat exists.",
      "To organize defensive questions and connect concerns to assets, evidence, controls, owners, and decisions.",
      "To assign severity automatically.",
      "To identify malicious actors.",
    ],
    answer: 1,
    explanation:
      "Categories are conceptual prompts. They do not prove events, severity, exploitability, or intent.",
  },
  {
    question:
      "A fictional supplier result arrives late and updates stale workflow state. Which category is the strongest likely primary label?",
    choices: [
      "Integrity",
      "Confidentiality",
      "Identity",
      "Privacy",
    ],
    answer: 0,
    explanation:
      "The central supported concern is incorrect workflow state, while availability, dependency, accountability, and resilience may be secondary.",
  },
  {
    question:
      "Why should a scenario sometimes have secondary categories?",
    choices: [
      "To make the worksheet look more advanced.",
      "Because additional categories may introduce different assets, owners, controls, evidence, or recovery requirements.",
      "Because every scenario should use all categories.",
      "Because the primary category is always wrong.",
    ],
    answer: 1,
    explanation:
      "Secondary categories are useful only when they change the decision or traceability.",
  },
  {
    question:
      "What should a reviewer do when a concern does not fit the chosen category framework?",
    choices: [
      "Delete the concern.",
      "Force it into the closest label.",
      "Record it as uncategorized or custom and preserve the defensive question.",
      "Assume it is low risk.",
    ],
    answer: 2,
    explanation:
      "Frameworks should support reasoning, not erase context-specific concerns.",
  },
  {
    question:
      "A fictional service identity has no confirmed owner and an expired review. What does a governance category prove?",
    choices: [
      "The identity is compromised.",
      "The identity has been misused.",
      "There is an ownership and lifecycle question that requires validation.",
      "The identity must be deleted immediately.",
    ],
    answer: 2,
    explanation:
      "The category organizes the supported governance gap without proving compromise or misuse.",
  },
  {
    question:
      "Why must category and severity remain separate?",
    choices: [
      "Because categories are only for beginners.",
      "Because category describes the type of concern, while severity requires impact, likelihood, exposure, control, uncertainty, and mission context.",
      "Because severity is always based on confidentiality.",
      "Because every category has the same risk.",
    ],
    answer: 1,
    explanation:
      "A3.5 organizes concern types; A3.6 evaluates risk using additional evidence and criteria.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real threat-category worksheet but change organization names.",
      "Use real logs and role names but remove addresses.",
      "Invent every organization, scenario, actor, asset, flow, category assignment, record, control, date, decision, and outcome from scratch.",
      "Use a real recovery model because it is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, suppliers, organizations, and sensitive design information.",
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
        Module A3
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

export default function ThreatCategoriesConceptuallyPage() {
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
              Module A3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Conceptual Classification
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.5 Threat Categories Conceptually
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders use conceptual categories to
            organize fictional threat questions about identity, authority,
            integrity, confidentiality, availability, accountability, privacy,
            safety, resilience, dependency, and governance. Categories support
            reasoning, but they do not prove that a threat exists, that a
            control failed, that an actor acted maliciously, or that a scenario
            is high risk.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A3: Threat Modeling"
          lessonTitle="Threat Categories Conceptually"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, identities, systems, interfaces, flows, boundaries, abuse cases, categories, evidence, controls, dates, decisions, and outcomes.",
            "I understand that a threat category is a prompt for defensive review and not proof of compromise, misuse, exploitability, control failure, severity, or actor intent.",
            "I will classify exact fictional scenarios rather than labeling a person, supplier, role, organization, or entire system as a threat.",
            "I will preserve cross-category and uncategorized concerns when they affect different assets, owners, controls, evidence, recovery, or user outcomes.",
            "I will keep category assignment separate from the risk ranking taught in A3.6.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real internal threat-model material.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Category Is a Lens, Not a Verdict"
        >
          <p className="leading-8">
            A fictional Northbridge reviewer sees that several notification
            changes lack a recorded reason and user-confirmation field. Calling
            this a “privacy threat” may be partly useful, but it does not explain
            the strongest supported issue. The available evidence first raises
            an accountability question: can the team connect actor, purpose,
            approval, action, target, result, and user confirmation? Secondary
            authorization, privacy, integrity, and governance questions may also
            matter. None of those labels proves misuse or malicious intent.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak category use
              </p>
              <p className="mt-2 leading-7">
                “This is an insider threat and a critical privacy breach.” The
                statement assumes actor intent, event, impact, category, and
                severity without evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong category use
              </p>
              <p className="mt-2 leading-7">
                “The fictional ticket pattern creates a primary accountability
                question and secondary authorization, privacy, integrity, and
                governance questions; current evidence does not prove
                unauthorized action, harmful outcome, or intent.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Categories should improve questions, traceability, ownership,
            control design, evidence review, and communication. If a label does
            not change any of those, it may not be useful.
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
          title="Categories Help Teams See Different Questions in the Same Scenario"
        >
          <p className="leading-8">
            One fictional event may create several legitimate review questions.
            A delayed supplier result can affect integrity because workflow state
            becomes stale, availability because the service is delayed,
            dependency because an external service is involved, accountability
            because health evidence is unclear, and resilience because recovery
            and reconciliation may be needed. The goal is not to collect labels.
            The goal is to identify distinct defensive decisions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Category as prompt",
                "Ask a structured question about a fictional asset, actor, flow, boundary, abuse case, control, evidence source, or owner decision.",
              ],
              [
                "Category as organizer",
                "Group related concerns so reviewers can compare controls, owners, evidence gaps, assumptions, and review triggers.",
              ],
              [
                "Category as communication",
                "Explain the kind of concern without overstating proof, severity, exploitability, or intent.",
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

        <SectionCard
          eyebrow="Core Framework"
          title="The C-L-E-A-R Category Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "C — Context",
                "Define the fictional asset, actor, action, object, flow, boundary, abuse case, state, and business purpose.",
              ],
              [
                "L — Label",
                "Choose a primary conceptual category and only meaningful secondary categories.",
              ],
              [
                "E — Evidence",
                "Record what supports the category assignment, what does not, source health, confidence, and unknowns.",
              ],
              [
                "A — Action",
                "Connect the category to controls, evidence needs, owners, decisions, recovery, and residual questions.",
              ],
              [
                "R — Review",
                "Revisit the label when assets, actors, flows, suppliers, automation, recovery, evidence, ownership, or purpose changes.",
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
              Decision-ready category statement
            </p>
            <p className="mt-2 leading-7">
              This fictional scenario is categorized primarily as a named
              concern because the central affected asset and decision involve a
              specific harmful outcome. Secondary categories apply only where
              they introduce different owners, controls, evidence, or recovery
              requirements. The assignment is based on supplied evidence with
              documented limits and does not prove event, intent, severity, or
              exploitability.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Precise Conceptual Classification"
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
            Use Eleven Conceptual Category Families
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            The categories below are not an exhaustive or mandatory framework.
            They are a defensive question set for the fictional Northbridge
            model. Reviewers may add, combine, split, or retire categories when
            context requires it.
          </p>

          <div className="mt-6 grid gap-5">
            {categoryFamilies.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Central defender question
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.centralQuestion}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional examples", item.fictionalExamples],
                    ["Affected assets", item.assets],
                    ["Supporting evidence", item.evidence],
                    ["Control themes", item.controls],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.category}-${label}`}
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

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Category warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Turn Categories into Defensive Prompts"
        >
          <div className="grid gap-5">
            {categoryPromptMatrix.map((item, index) => (
              <article
                key={item.prompt}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.prompt}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Related categories
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.categories}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      Apply to
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.applyTo}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Useful evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Apply Ten Category-Assignment Rules
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {categoryAssignmentRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.rule}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.explanation}
                </p>

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
          eyebrow="Instructional Section 4"
          title="Handle Cross-Category Scenarios without Losing Precision"
        >
          <p className="leading-8">
            Cross-category classification is useful when each label adds a
            distinct defensive decision. The examples below show how to select
            a primary category, identify meaningful secondary categories, and
            preserve what the evidence does not prove.
          </p>

          <div className="mt-6 grid gap-5">
            {overlapExamples.map((item) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.scenario}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-cyan-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Primary category
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.primary}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Secondary categories
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.secondary}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Why this classification helps
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.why}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      What is not proven
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.notProven}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Separate Category, Evidence, Severity, and Intent"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Dimension",
                    "Question answered",
                    "Example",
                    "What it does not answer",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Category",
                    "What kind of fictional security, privacy, safety, resilience, or governance question is this?",
                    "Primary integrity concern with secondary availability and dependency concerns.",
                    "Whether the event occurred, how severe it is, or who intended it.",
                  ],
                  [
                    "Evidence",
                    "What supports or limits the fictional claim?",
                    "Queue delay, stale state, source-health report, support tickets, and recovery exercise.",
                    "Automatic proof of one cause or complete control state.",
                  ],
                  [
                    "Severity",
                    "How important is the fictional risk after considering impact, likelihood, exposure, controls, uncertainty, and mission context?",
                    "To be evaluated in A3.6 using defined criteria.",
                    "The category name alone does not determine severity.",
                  ],
                  [
                    "Intent",
                    "What is known about why a fictional actor or process behaved as observed?",
                    "Deliberate, accidental, process, supplier, automation, or unknown explanation.",
                    "Role, source, timing, denial, or error alone does not prove intent.",
                  ],
                  [
                    "Control",
                    "Which safeguard should prevent, detect, limit, recover, govern, or communicate the scenario?",
                    "State validation, bounded retry, source health, reconciliation, and owner review.",
                    "A control label does not prove implementation or effectiveness.",
                  ],
                  [
                    "Ownership",
                    "Who validates the assumption, chooses mitigation, accepts residual risk, and maintains the decision?",
                    "Workflow owner, supplier owner, operations owner, risk owner.",
                    "Shared responsibility does not eliminate named accountability.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Category Quality"
          title="Move from a Label to a Decision-Ready Classification"
        >
          <div className="grid gap-5">
            {categoryQuality.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Statement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.statement}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Remaining problem
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.problem}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Improvement
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.improvement}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Category Map"
          title="Northbridge Threat-Question Coverage"
        >
          <p className="leading-8">
            The following conceptual map is completely invented. It shows how
            one fictional system can require several distinct category lenses
            without treating those labels as proof or severity.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Identity", "Human and service identity, session, federation, lifecycle"],
                ["Authorization", "Role, object, action, purpose, conditions, approval"],
                ["Integrity", "Data, state, order, version, configuration, decisions"],
                ["Confidentiality", "Audience, access, disclosure, destination, exposure"],
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
                Fictional Northbridge Scenarios
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Support change", "Reason, confirmation, scope, privacy"],
                  ["Supplier result", "State, delay, source health, reconciliation"],
                  ["Analytics proposal", "Purpose, fields, inference, retention"],
                  ["Service identity", "Owner, lifecycle, authority, recovery"],
                  ["Duplicate submission", "Integrity, usability, communication"],
                  ["Recovery sequence", "State, identity, evidence, closure"],
                  ["Temporary interface", "Purpose, ownership, retirement"],
                  ["Notification delay", "Availability, safety, trust, support"],
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
                ["Availability", "Service, dependency, delay, evidence, capacity"],
                ["Accountability", "Actor, action, target, reason, result, health"],
                ["Privacy and safety", "Purpose, minimization, people, communication"],
                ["Resilience and governance", "Recovery, ownership, exception, review"],
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
          title="Fake Northbridge Threat-Category Dashboard"
          subtitle="Fictional category coverage, overlap, evidence, and ownership status for training only."
          metrics={[
            {
              label: "Scenarios categorized",
              value: "18 / 18",
              note: "Every fictional abuse case has one primary category and a written rationale.",
            },
            {
              label: "Scenarios with category inflation",
              value: "4",
              note: "Four cases currently use more secondary labels than distinct owner or control decisions justify.",
            },
            {
              label: "Uncategorized concerns preserved",
              value: "3",
              note: "Usability, communication trust, and human-review quality remain custom concerns pending owner discussion.",
            },
          ]}
        />

        <FakeAlertCard
          title="Category Assignment Mistaken for Risk Severity"
          severity="High"
          time="1:22 PM"
          source="Fake Northbridge Threat-Model Quality Console"
          details="A fictional reviewer marked every confidentiality and identity scenario High while assigning Low to availability and governance scenarios. No impact, likelihood, exposure, control, uncertainty, mission, dependency, or recovery analysis was recorded."
          recommendation="Separate category from severity. Preserve the conceptual labels, document evidence and affected assets, and defer final priority until the A3.6 risk-ranking criteria are applied."
        />

        <FakeLogPanel
          title="Fake Threat-Category Review Timeline"
          logs={[
            "09:00 REVIEW scope='northbridge-abuse-library' scenarios='18'",
            "09:08 CATEGORY support-change primary='accountability'",
            "09:16 CATEGORY support-change secondary='authorization,privacy,integrity'",
            "09:24 CATEGORY supplier-delay primary='integrity'",
            "09:32 CATEGORY supplier-delay secondary='availability,dependency,resilience'",
            "09:40 CATEGORY analytics-proposal primary='privacy' state='future'",
            "09:48 CATEGORY archive-identity primary='governance'",
            "09:56 CATEGORY recovery-sequence primary='resilience'",
            "10:04 QUALITY category-inflation='4'",
            "10:12 QUALITY uncategorized='3'",
            "10:20 EVIDENCE category-proof='false'",
            "10:28 EVIDENCE intent-proof='false'",
            "10:36 RISK severity-assignment='premature'",
            "10:44 OWNER privacy='assigned' supplier='assigned' recovery='assigned'",
            "10:52 ACTION reduce-secondary-labels='required'",
            "11:00 ACTION preserve-custom-concerns='required'",
            "11:08 REVIEW technical='complete' privacy='pending'",
            "11:16 REVIEW operations='pending' mission='pending'",
            "11:24 CONFIDENCE category-map='medium'",
            "13:22 ALERT issue='category-equals-severity'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Evidence Supports—and What It Does Not Prove
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
                    ["Category use", item.use],
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
          title="Which Category Assignment Is Best Supported?"
          question="Which conclusion most accurately classifies the fictional notification-change evidence?"
          evidence={[
            "The fictional support role can change notification settings.",
            "Several notification-change tickets lack a recorded reason and user-confirmation field.",
            "The available evidence does not show whether each action was authorized, accurate, accidental, deliberate, or harmful.",
            "Notification settings affect user communication, privacy expectations, workflow state, and trust.",
            "The ticket pattern creates questions about actor, action, target, purpose, result, and review evidence.",
            "No risk-ranking criteria have been applied yet.",
            "The scenario has not been connected to one confirmed technical cause.",
            "The fictional model remains draft with medium confidence.",
          ]}
          options={[
            "Use accountability as the primary category because evidence quality is the strongest supported issue, with authorization, privacy, integrity, and governance as possible secondary categories; do not infer intent or severity.",
            "Classify the support analyst as a malicious insider.",
            "Mark the scenario Critical because it involves notification settings.",
            "Use confidentiality as the only category and treat the missing fields as proof of disclosure.",
          ]}
          bestAnswer={0}
          explanation="The first option uses categories as evidence-aware prompts. It identifies the strongest supported concern, preserves meaningful overlap, and keeps category separate from intent, event proof, and severity."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Conceptual Threat Classification"
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
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Threat-Category Worksheet"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real identities, threat models,
            diagrams, roles, logs, interfaces, suppliers, configurations,
            incidents, recovery details, or private information.
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
          title="A Reviewer Labels Every Supplier Scenario High Risk"
          scenario="The fictional reviewer assigns High severity to every supplier-related scenario because external services are involved. No impact, likelihood, exposure, control strength, evidence, mission, or recovery criteria are recorded."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep supplier and dependency categories where useful, remove the premature severity judgment, document evidence and affected assets, and wait for A3.6 risk-ranking criteria.",
              outcome:
                "Best defensive choice. Category and severity answer different questions.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep all High ratings because external suppliers are always dangerous.",
              outcome:
                "Weak and unsupported. Supplier involvement does not determine risk by itself.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove every supplier category because categories create bias.",
              outcome:
                "Incomplete. Categories can still help when used as prompts with evidence and context.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Scenario Does Not Fit the Existing Category List"
          scenario="A fictional student-support communication scenario raises concerns about confusing language, accessibility, user trust, and delayed help. The current worksheet has no clear usability or communication category."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the concern as a custom category or uncategorized item, assign an owner, document the affected users and evidence, and review whether the framework should expand.",
              outcome:
                "Best choice. The framework serves the decision; the decision should not be distorted to serve the framework.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Force the scenario into confidentiality because every concern must have a standard label.",
              outcome:
                "Weak. Forced labeling hides the actual user and communication decision.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the concern because it is not technical.",
              outcome:
                "Unsafe and incomplete. Human impact, accessibility, communication, and trust can be important security and safety concerns.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Resolve a Category Disagreement without Choosing Labels by Vote"
        >
          <p className="leading-8">
            The fictional privacy owner classifies the supplier free-text field
            as privacy. The security reviewer calls it confidentiality. The
            supplier manager calls it governance. The workflow owner calls it
            integrity because the field may influence processing. Build a
            classification that preserves all legitimate perspectives without
            assigning four primary categories.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Define the decision",
                "State whether the team must approve the field, change the flow, add controls, request evidence, or accept residual risk.",
              ],
              [
                "Identify the central asset",
                "Determine whether purpose and responsible use, exposure, ownership, or workflow correctness is the main decision.",
              ],
              [
                "Choose one primary category",
                "Select the label that best organizes the central owner decision and explain the rationale.",
              ],
              [
                "Preserve secondary categories",
                "Add only labels that introduce different evidence, owners, controls, or outcomes.",
              ],
              [
                "Document disagreement",
                "Record each owner's reasoning, supporting evidence, assumptions, and unresolved questions.",
              ],
              [
                "Defer severity",
                "Do not convert the category disagreement into a risk score before A3.6 criteria are applied.",
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
              Create a fictional category-decision record with one primary
              label, limited secondary labels, owner perspectives, evidence,
              evidence limits, controls, unresolved questions, confidence, and
              a statement explaining why category disagreement can improve the
              model when it is documented rather than hidden.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Threat Categories Conceptually Checklist"
          items={[
            "I can explain categories as conceptual prompts rather than proof, severity, exploitability, or intent.",
            "I can classify exact fictional scenarios rather than labeling a person, role, supplier, organization, or entire system.",
            "I can use identity, authorization, integrity, confidentiality, availability, accountability, privacy, safety, resilience, dependency, and governance categories.",
            "I can select one primary category when useful and add secondary categories only when they change assets, owners, controls, evidence, or recovery.",
            "I can preserve uncategorized and custom concerns when the framework does not fit.",
            "I can separate category assignment from risk ranking.",
            "I can separate category assignment from actor intent.",
            "I can connect every important category to fictional evidence, evidence limits, assumptions, unknowns, confidence, and review triggers.",
            "I can identify category inflation, category collapse, framework bias, and missing perspectives.",
            "I can review category coverage with technical, privacy, data, support, operations, supplier, recovery, and mission owners.",
            "I can trace categories to specific controls, evidence needs, decisions, owners, and maintenance triggers.",
            "I can create a completely fictional category worksheet without copying or modifying real threat models, incidents, roles, suppliers, logs, diagrams, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A3.5 Mini Quiz: Threat Categories Conceptually"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Threat-Category Worksheet for the Northbridge Student-Support Portal. Include purpose, scope, exclusions, safety boundary, category definitions, at least eighteen fictional abuse cases, one primary category per case, limited secondary categories, category rationale, affected assets, actors, entry points, flows, trust boundaries, evidence, evidence limits, assumptions, unknowns, confidence, controls, owners, current-state or future-state label, cross-category analysis, uncategorized concerns, category-inflation review, coverage review, bias review, disagreement log, readiness statement for A3.6, leadership summary, technical appendix, reflection, and a statement that every organization, scenario, actor, asset, flow, category assignment, record, control, date, decision, and outcome is invented."
          tips={[
            "Begin with the fictional scenario and decision before choosing a label.",
            "Use one primary category and add a secondary category only when it changes the owner, control, evidence, recovery, or affected asset.",
            "Preserve custom or uncategorized concerns rather than forcing every scenario into one framework.",
            "Keep category, evidence, severity, intent, control, and ownership as separate fields.",
            "Keep the entire artifact completely fictional, defensive, evidence-aware, non-operational, privacy-safe, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Rank Threat-Model Risks?"
        >
          <p className="leading-8">
            Before moving to A3.6, rate your readiness from 1 to 5 for category
            purpose, primary and secondary labels, cross-category reasoning,
            uncategorized concerns, evidence limits, intent separation,
            severity separation, control traceability, owner decisions, bias
            review, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a category organizes a question but does not prove an event or control failure.",
              "I can choose a primary category based on the central affected asset and decision.",
              "I can add secondary categories only when they create distinct owner, evidence, control, or recovery needs.",
              "I can preserve uncategorized, human, usability, safety, supplier, and context-specific concerns.",
              "I can separate category assignment from severity, intent, evidence, and exploitability.",
              "I can identify category inflation, category collapse, and framework bias.",
              "I can document category disagreement and use it to improve the model.",
              "I can create a complete fictional worksheet without copying, modifying, or exposing real internal information.",
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
            Record one fictional scenario whose primary category changed after
            review, one useful secondary category, one concern you preserved
            outside the framework, one category-evidence limitation, and one
            question you will carry into A3.6 risk ranking.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Threat categories are conceptual prompts that organize defensive questions; they do not prove events, control failure, exploitability, severity, or intent.",
            "The most useful categories connect directly to fictional assets, actors, flows, boundaries, abuse cases, controls, evidence, owners, and decisions.",
            "Identity, authorization, integrity, confidentiality, availability, accountability, privacy, safety, resilience, dependency, and governance provide different review lenses.",
            "One scenario may have a primary category and several meaningful secondary categories.",
            "Secondary categories should be used only when they introduce different assets, owners, controls, evidence, recovery, or user outcomes.",
            "Uncategorized and custom concerns should be preserved when the framework does not fit.",
            "Category inflation and category collapse both reduce decision quality.",
            "Category, evidence, severity, intent, control, and ownership answer different questions and should remain separate.",
            "Category assignments should be versioned and reviewed when system purpose, assets, actors, flows, suppliers, automation, recovery, evidence, or ownership changes.",
            "Every CyberShield category worksheet and artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, use fictional evidence and clearly defined criteria to rank
            threat-model risks without confusing category labels with impact,
            likelihood, exposure, control strength, uncertainty, or mission
            priority.
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