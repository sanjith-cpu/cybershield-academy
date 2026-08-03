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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/log-collection-and-normalization-concepts`;

const objectives = [
  "Explain a SIEM as a fictional defensive evidence-and-workflow platform that collects, normalizes, searches, correlates, presents, and preserves selected records without replacing source systems, analyst judgment, or response authority.",
  "Distinguish fictional source events, collected records, normalized fields, enrichment, correlations, alerts, dashboards, cases, decisions, and confirmed outcomes.",
  "Evaluate a fictional SIEM mission using stakeholders, source coverage, source health, privacy, retention, access, ownership, limitations, and lifecycle.",
  "Identify what fictional SIEM output can support, what it cannot prove, and which bounded defender questions must still be answered.",
  "Create a portfolio-ready fictional SIEM mission charter and architecture map containing purpose, users, inputs, processing stages, outputs, owners, risks, safeguards, metrics, and review triggers.",
];

const vocabulary = [
  ["SIEM", "A fictional security information and event management platform that helps defenders collect, organize, search, correlate, present, and preserve selected evidence for defensive decisions."],
  ["Source system", "A fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, change, or source-health system that creates original evidence."],
  ["Source event", "A fictional activity, state, transaction, result, or health observation produced by a source before SIEM processing."],
  ["Collection", "The fictional movement of selected records from a source into a defensive evidence pipeline."],
  ["Parsing", "The fictional interpretation of a source record into documented fields and values."],
  ["Normalization", "The fictional mapping of different source fields into a shared conceptual structure while preserving provenance and meaning."],
  ["Enrichment", "Fictional identity, device, service, destination, ownership, criticality, change, policy, or mission context added to a record."],
  ["Correlation", "A fictional relationship among records, identities, devices, services, destinations, sessions, requests, changes, timing, counts, sequences, or states."],
  ["Detection rule", "A fictional conceptual condition used to identify evidence that may support a defender question."],
  ["Alert", "A fictional notification that a documented condition matched and requires review; it is not proof of cause, intent, complete scope, or impact."],
  ["Dashboard", "A fictional visual summary of evidence, source health, queue state, alert quality, workload, impact, coverage, or lifecycle."],
  ["Case", "A fictional organized record of alerts, evidence, questions, owners, decisions, actions, communications, uncertainty, validation, closure, and reopening."],
  ["Source health", "The fictional freshness, completeness, schema, timing, coverage, duplication, conflict, queue, blind-period, and recovery state of evidence."],
  ["Provenance", "The fictional record of where evidence came from, how it was transformed, and which owner is responsible for its meaning."],
  ["Event time", "The fictional time when an activity or state occurred at the source."],
  ["Collection time", "The fictional time when a collector received or transferred the record."],
  ["Processing time", "The fictional time when parsing, normalization, enrichment, correlation, or alert evaluation occurred."],
  ["Defender question", "A fictional bounded question an analyst or owner must answer to make a defensive decision."],
  ["Non-proof statement", "A fictional statement describing what the available evidence and alert do not establish."],
  ["Evidence confidence", "A fictional rating describing how strongly available evidence supports the current interpretation."],
  ["Coverage", "The fictional identities, devices, services, destinations, environments, states, periods, fields, and behaviors that evidence can reliably represent."],
  ["Data minimization", "The fictional practice of collecting and displaying only the evidence needed for a documented defensive purpose."],
  ["Retention", "The fictional period and conditions under which records, alerts, cases, metrics, or decisions are preserved and later removed."],
  ["SIEM lifecycle", "The fictional planning, onboarding, validation, operation, review, change, improvement, source retirement, and platform retirement process."],
];

const coreFunctions = [
  {
    function: "Collect selected evidence",
    purpose: "Bring fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, change, and source-health records into one defensive evidence environment.",
    supports: "Cross-source questions, source-health review, timing analysis, coverage mapping, and coordinated triage.",
    doesNotProve: "That every relevant source, identity, service, field, or period is represented.",
    ownerQuestion: "Which source owner confirms provenance, field meaning, timing, privacy, retention, and completeness?",
  },
  {
    function: "Parse source records",
    purpose: "Interpret fictional records into named fields and values using documented source-specific meaning.",
    supports: "Search, comparison, filtering, normalization, quality checks, and rule evaluation.",
    doesNotProve: "That the parser interpreted every record correctly or that the source field itself is accurate.",
    ownerQuestion: "Which schema version, parser version, test result, and failure behavior apply?",
  },
  {
    function: "Normalize fields",
    purpose: "Map fictional source-specific fields into shared categories while preserving source meaning and provenance.",
    supports: "Consistent cross-source queries, dashboards, correlation, and analyst review.",
    doesNotProve: "That fields from different sources have identical semantics.",
    ownerQuestion: "Which differences were preserved, transformed, simplified, or lost?",
  },
  {
    function: "Enrich evidence",
    purpose: "Add fictional identity, device, service, destination, ownership, criticality, authorization, peer, change, and mission context.",
    supports: "More precise alert interpretation, routing, priority, scope, and owner questions.",
    doesNotProve: "That enrichment is current, authoritative, complete, or appropriate for every decision.",
    ownerQuestion: "Which enrichment owner, source, freshness, privacy purpose, and limitation apply?",
  },
  {
    function: "Search and retrieve",
    purpose: "Help fictional analysts locate records that answer a documented question across a defined scope and period.",
    supports: "Evidence review, source-health checks, chronology, relationships, and case documentation.",
    doesNotProve: "That no matching record means the activity did not occur.",
    ownerQuestion: "Was the search scope, field mapping, time basis, source coverage, and retention sufficient?",
  },
  {
    function: "Correlate evidence",
    purpose: "Connect fictional records by identity, device, service, destination, request, session, change, timing, count, sequence, or state.",
    supports: "Cross-source observations and defender questions that one source cannot answer alone.",
    doesNotProve: "Cause, intent, complete scope, harmful impact, or the correctness of every relationship.",
    ownerQuestion: "Which keys, windows, assumptions, source-health states, alternatives, and missing-data rules apply?",
  },
  {
    function: "Generate alerts",
    purpose: "Notify fictional analysts when evidence matches a documented detection condition.",
    supports: "Queueing, prioritization, triage, owner coordination, and evidence-driven review.",
    doesNotProve: "That the event is malicious, unauthorized, harmful, complete, or correctly prioritized.",
    ownerQuestion: "Which observation, evidence, source health, confidence, severity, alternatives, owners, and non-proof statement appear?",
  },
  {
    function: "Present dashboards",
    purpose: "Summarize fictional source health, alert queues, workload, service impact, detection quality, coverage, privacy, and lifecycle.",
    supports: "Analyst, owner, quality, and leadership decisions.",
    doesNotProve: "That counts or visual trends represent complete truth without definitions, denominators, confidence, and limitations.",
    ownerQuestion: "Which decision does the dashboard support, and which action follows each metric?",
  },
  {
    function: "Support case management",
    purpose: "Organize fictional alerts, chronology, evidence, questions, owners, decisions, actions, communications, closure, and reopening.",
    supports: "Repeatable coordination, handoff, traceability, review, and lessons learned.",
    doesNotProve: "That notes are objective, evidence is sufficient, or closure is justified.",
    ownerQuestion: "Which note standard, evidence requirement, reviewer, privacy rule, and closure criterion apply?",
  },
  {
    function: "Preserve defensive history",
    purpose: "Retain fictional records, alerts, cases, metrics, decisions, changes, tests, and lessons for approved periods.",
    supports: "Trend review, regression testing, auditability, quality improvement, and lifecycle decisions.",
    doesNotProve: "That longer retention is always useful, necessary, safe, or permitted.",
    ownerQuestion: "Which purpose, access role, period, deletion rule, policy boundary, and residual risk apply?",
  },
];

const platformBoundaries = [
  {
    boundary: "A SIEM is not the original source",
    explanation: "Fictional records may be delayed, transformed, normalized, enriched, duplicated, filtered, or missing after leaving the source.",
    strongPractice: "Preserve source identifiers, event time, collection time, processing time, schema, parser, and owner information.",
  },
  {
    boundary: "A SIEM is not proof of absence",
    explanation: "No fictional alert or no matching record may reflect source loss, coverage gaps, retention limits, field changes, logic gaps, or search mistakes.",
    strongPractice: "Review source health, scope, field meaning, time basis, retention, and alternate evidence before claiming absence.",
  },
  {
    boundary: "A SIEM is not proof of malicious intent",
    explanation: "A fictional correlation or alert describes a matched condition, not why it occurred or whether it was harmful.",
    strongPractice: "Use neutral observations, authorization review, alternative explanations, owner context, scope, impact, and non-proof statements.",
  },
  {
    boundary: "A SIEM is not automatically complete",
    explanation: "Fictional source onboarding may exclude identities, services, devices, destinations, fields, operating states, suppliers, or time periods.",
    strongPractice: "Maintain a coverage map, source inventory, known-gap register, and false-negative risk review.",
  },
  {
    boundary: "A SIEM is not a response authority",
    explanation: "A fictional platform can present alerts and workflow, but people and documented processes own escalation, communication, recovery, closure, and risk acceptance.",
    strongPractice: "Assign detection, analyst, source, identity, service, privacy, risk, and leadership owners with clear decision rights.",
  },
  {
    boundary: "A SIEM is not a privacy exception",
    explanation: "Defensive purpose does not justify collecting, displaying, retaining, or sharing every available fictional field.",
    strongPractice: "Use purpose limitation, field minimization, access control, retention, deletion, and audience-specific views.",
  },
  {
    boundary: "A SIEM is not quality by itself",
    explanation: "A fictional deployment can be available while producing noisy alerts, missed conditions, stale enrichment, confusing cases, weak dashboards, or documentation debt.",
    strongPractice: "Measure alert usefulness, misses, Unknowns, source health, decision latency, analyst effort, impact, privacy, and lifecycle.",
  },
  {
    boundary: "A SIEM is not finished after deployment",
    explanation: "Fictional sources, schemas, services, identities, policies, suppliers, risks, staffing, privacy requirements, and mission priorities change.",
    strongPractice: "Use versioning, testing, review triggers, observation, tuning, rollback, documentation updates, source retirement, and lifecycle review.",
  },
];

const missionQuestions = [
  {
    domain: "Mission",
    questions: "Which fictional users, identities, services, suppliers, data categories, trust boundaries, administrative functions, availability outcomes, or recovery decisions require support?",
    evidence: "Mission charter, service catalog, identity model, supplier model, recovery plan, risk register, and owner interviews.",
    failure: "The SIEM becomes a collection project without a decision purpose.",
  },
  {
    domain: "Stakeholders",
    questions: "Which fictional analysts, source owners, identity owners, service owners, privacy reviewers, risk owners, leadership users, and case coordinators need access or outputs?",
    evidence: "Role matrix, responsibilities, approval records, access model, escalation paths, and communication needs.",
    failure: "Dashboards and cases may serve the wrong audience or expose unnecessary information.",
  },
  {
    domain: "Sources",
    questions: "Which fictional source categories and fields are required, optional, alternate, or out of scope?",
    evidence: "Source inventory, field dictionary, coverage map, source-health model, retention plan, and onboarding status.",
    failure: "Correlation and search may appear complete while evidence is partial.",
  },
  {
    domain: "Processing",
    questions: "How are fictional records collected, parsed, normalized, enriched, stored, indexed, correlated, displayed, and preserved?",
    evidence: "Architecture map, pipeline stages, schema versions, transformations, tests, timing, and failure behavior.",
    failure: "Analysts may misunderstand where meaning, delay, loss, duplication, or derivation entered the evidence path.",
  },
  {
    domain: "Privacy",
    questions: "Which fictional fields are necessary, who may access them, how long are they retained, and how are they deleted or restricted?",
    evidence: "Field-purpose map, access roles, retention schedule, deletion rules, portfolio boundary, and privacy review.",
    failure: "The SIEM may collect or expose more information than the defender question requires.",
  },
  {
    domain: "Source health",
    questions: "How will the fictional platform identify Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence?",
    evidence: "Freshness, completeness, schema, parser, clock, queue, duplication, coverage, blind-period, and recovery checks.",
    failure: "Evidence loss may appear as normal activity or complete coverage.",
  },
  {
    domain: "Analyst workflow",
    questions: "How do fictional alerts become triage questions, evidence requests, decision states, escalation, case notes, closure, and reopening?",
    evidence: "Alert contract, runbook, case template, owner matrix, state model, criteria, and review records.",
    failure: "Alerts may be technically correct but operationally unusable.",
  },
  {
    domain: "Quality and lifecycle",
    questions: "How will fictional usefulness, misses, noise, source defects, decision latency, workload, privacy, documentation debt, changes, and retirement be measured?",
    evidence: "Quality baseline, metrics, tuning records, tests, change log, review triggers, rollback, residual risk, and retirement plan.",
    failure: "The platform may become quieter, larger, or faster without becoming more trustworthy.",
  },
];

const evidencePipeline = [
  {
    stage: "1. Source event",
    example: "A fictional identity role changes state, an application records a result, or a source-health monitor reports delay.",
    evidenceQuestion: "What happened at the source, when, under which schema, and with which local meaning?",
    risk: "The original record may already be incomplete, delayed, duplicated, or ambiguous.",
  },
  {
    stage: "2. Collection",
    example: "A fictional collector transfers selected records into the SIEM evidence path.",
    evidenceQuestion: "Which records, fields, identities, services, periods, and environments are included or excluded?",
    risk: "Collection gaps may create false absence or incomplete coverage.",
  },
  {
    stage: "3. Parsing",
    example: "A fictional parser identifies fields such as identity category, result, service class, event time, and source health.",
    evidenceQuestion: "Which parser and schema versions interpreted the record, and what happens when parsing fails?",
    risk: "Incorrect parsing can change field meaning or hide required evidence.",
  },
  {
    stage: "4. Normalization",
    example: "Different fictional source fields are mapped into shared categories for identity, action, result, service, destination, and time.",
    evidenceQuestion: "Which source differences were preserved, transformed, simplified, or lost?",
    risk: "Normalization may create false equivalence across sources.",
  },
  {
    stage: "5. Enrichment",
    example: "Fictional role, owner, device class, service criticality, destination class, change, authorization, or peer context is added.",
    evidenceQuestion: "Which enrichment source, owner, freshness, privacy purpose, and limitation apply?",
    risk: "Stale enrichment may be mistaken for current authoritative fact.",
  },
  {
    stage: "6. Storage and indexing",
    example: "Fictional normalized records become searchable for approved periods and roles.",
    evidenceQuestion: "Which retention, indexing, access, deletion, and availability conditions apply?",
    risk: "Missing search results may reflect retention or indexing rather than absence.",
  },
  {
    stage: "7. Correlation and detection",
    example: "Fictional conditions relate identity, session, service, destination, authorization, timing, count, sequence, or state.",
    evidenceQuestion: "Which keys, windows, source requirements, assumptions, alternatives, and missing-data behavior apply?",
    risk: "A correlation match may be mistaken for a complete conclusion.",
  },
  {
    stage: "8. Alert and dashboard",
    example: "A fictional alert enters a queue and related evidence appears on a dashboard.",
    evidenceQuestion: "Which observation, source health, confidence, severity, priority, alternatives, owner, and non-proof statement are visible?",
    risk: "Visual simplicity may hide uncertainty and evidence limitations.",
  },
  {
    stage: "9. Triage and case",
    example: "A fictional analyst reviews evidence, asks bounded questions, assigns owners, records decisions, and tracks actions.",
    evidenceQuestion: "Which evidence supports the current state, and which questions remain unresolved?",
    risk: "Notes may convert hypotheses into facts or close before evidence is sufficient.",
  },
  {
    stage: "10. Quality and lifecycle",
    example: "Fictional outcomes, misses, source health, effort, impact, privacy, defects, changes, and retirement are reviewed.",
    evidenceQuestion: "What should improve, who owns it, how will it be tested, and when will it be reviewed or retired?",
    risk: "The SIEM may continue operating with hidden debt and stale assumptions.",
  },
];

const roleModel = [
  {
    role: "SIEM program owner",
    responsibility: "Own fictional mission, scope, priorities, standards, funding, platform lifecycle, metrics, debt, governance, and leadership decisions.",
    evidence: "Mission charter, roadmap, quality report, risk register, ownership matrix, and lifecycle plan.",
  },
  {
    role: "Source owner",
    responsibility: "Own fictional provenance, field meaning, schema, timing, completeness, coverage, health, recovery, retention, and source retirement.",
    evidence: "Source inventory, field dictionary, health dashboard, change records, blind-period records, and tests.",
  },
  {
    role: "Detection owner",
    responsibility: "Own fictional defender question, correlation logic, alert contract, tests, quality, tuning, documentation, and review triggers.",
    evidence: "Detection specification, test library, tuning register, metrics, and change history.",
  },
  {
    role: "Analyst",
    responsibility: "Review fictional observations, evidence, source health, context, alternatives, scope, impact, owners, decision states, escalation, and closure.",
    evidence: "Triage worksheet, case notes, evidence requests, decision log, and validation record.",
  },
  {
    role: "Identity or service owner",
    responsibility: "Provide fictional authorization, purpose, ownership, assignment, expected behavior, service impact, change, recovery, and closure context.",
    evidence: "Owner confirmation, approval record, assignment, service state, change record, and recovery validation.",
  },
  {
    role: "Privacy reviewer",
    responsibility: "Own fictional purpose limitation, field minimization, access, display, sharing, retention, deletion, and public portfolio boundaries.",
    evidence: "Field-purpose map, access matrix, privacy tests, retention plan, and public review.",
  },
  {
    role: "Quality and test owner",
    responsibility: "Own fictional test cases, expected outcomes, defects, regression, metric definitions, review methodology, and validation gates.",
    evidence: "Test charter, case catalog, defect register, metric dictionary, and readiness decisions.",
  },
  {
    role: "Risk and leadership owner",
    responsibility: "Own fictional accepted limitations, residual risk, resource decisions, priorities, deadlines, milestones, and executive communication.",
    evidence: "Leadership brief, risk acceptance, resource plan, milestones, and review schedule.",
  },
];

const sourceHealthStates = [
  {
    state: "Healthy",
    meaning: "Fictional required records and fields are current, complete enough, correctly mapped, aligned, covered, and accessible for the documented purpose.",
    siemBehavior: "Normal search, correlation, alert, confidence, dashboard, and case behavior may proceed.",
    analystCaution: "Healthy does not prove every record is semantically correct or every relevant condition is visible.",
  },
  {
    state: "Conditional",
    meaning: "One fictional optional field, enrichment, ownership record, or noncritical relationship is stale or incomplete.",
    siemBehavior: "Core observations remain available, but enrichment-dependent severity, priority, or routing is limited.",
    analystCaution: "Do not use the stale context for closure or broad conclusions.",
  },
  {
    state: "Degraded",
    meaning: "A fictional required source, field, parser, mapping, clock, queue, or coverage element is delayed or incomplete.",
    siemBehavior: "Affected searches, correlations, alerts, dashboards, and confidence must show the limitation.",
    analystCaution: "Use alternate evidence and avoid normal-confidence claims.",
  },
  {
    state: "Blind",
    meaning: "Fictional required evidence is unavailable for a defined scope and period.",
    siemBehavior: "Do not report quiet activity as normal or absent; record the blind period and affected detections.",
    analystCaution: "Reassess after recovery and document residual uncertainty.",
  },
  {
    state: "Conflicting",
    meaning: "Two fictional sources disagree beyond expected timing, ownership, schema, or workflow differences.",
    siemBehavior: "Create a visible reconciliation state rather than silently trusting one source.",
    analystCaution: "Review provenance, authority, timing, transformation, schema, and owners.",
  },
  {
    state: "Recovering",
    meaning: "The fictional source has returned, but backlog, replay, duplication, clock, schema, field, or historical gaps remain.",
    siemBehavior: "Limit confidence until reconciliation, backfill, uniqueness, and regression checks pass.",
    analystCaution: "Connectivity restoration does not prove evidence recovery is complete.",
  },
];

const metrics = [
  {
    metric: "Mission coverage",
    question: "Which fictional users, identities, services, suppliers, trust boundaries, administrative functions, and recovery decisions have reliable SIEM support?",
    evidence: "Coverage map, source inventory, detection catalog, known-gap register, and owner confirmation.",
    limitation: "Documented coverage does not prove every behavior or period is observable.",
  },
  {
    metric: "Source health",
    question: "How often are fictional sources Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering?",
    evidence: "Freshness, completeness, schema, queue, clock, duplication, coverage, blind-period, and recovery records.",
    limitation: "A Healthy technical state may still hide semantic field problems.",
  },
  {
    metric: "Alert usefulness",
    question: "Do fictional alerts help analysts answer the intended defender questions with sufficient evidence and limits?",
    evidence: "Reviewed alerts, analyst decisions, evidence requests, rework, owner feedback, and closure quality.",
    limitation: "Fast decisions may still be shallow or incorrect.",
  },
  {
    metric: "Expected-alert quality",
    question: "Are fictional approved changes, extensions, maintenance, supplier work, migrations, and recovery conditions labeled and routed correctly?",
    evidence: "Outcome reviews, owner confirmation, tuning records, and test cases.",
    limitation: "Expected labels can become stale after scope or authorization changes.",
  },
  {
    metric: "False-positive and false-negative risk",
    question: "Which fictional alerts are incorrectly risky, and which meaningful conditions are missed or outside coverage?",
    evidence: "Case reviews, known misses, source gaps, tests, owner reports, and residual-risk records.",
    limitation: "Unknown misses cannot be counted completely.",
  },
  {
    metric: "Decision latency",
    question: "How long does it take fictional analysts and owners to reach evidence-supported states?",
    evidence: "Alert time, first review, evidence requests, owner responses, escalation, closure, and reopen times.",
    limitation: "Faster decisions are not automatically better decisions.",
  },
  {
    metric: "Analyst effort",
    question: "How much fictional evidence hunting, duplicate work, rework, note correction, owner chasing, and case reopening occur?",
    evidence: "Case activity, search count, evidence requests, duplicate alerts, handoffs, and analyst feedback.",
    limitation: "Lower effort may reflect broad suppression or incomplete review.",
  },
  {
    metric: "Lifecycle debt",
    question: "Which fictional sources, parsers, schemas, detections, dashboards, runbooks, owners, tests, exceptions, and retirement tasks are stale or unresolved?",
    evidence: "Debt register, change log, review dates, owner matrix, exceptions, and retirement plan.",
    limitation: "Counting debt does not show which item has the greatest mission impact.",
  },
];

const evidenceMatrix = [
  {
    id: "A6-E01",
    source: "Fictional SIEM mission charter",
    observation: "Northbridge wants shared visibility for identity, service, supplier, network, DNS, application, administrative, source-health, and recovery questions.",
    supports: "A cross-source defensive evidence platform may improve coordinated triage and case review.",
    limits: "The charter does not prove every source should be collected or every stakeholder should see every field.",
    use: "Define purpose, scope, access, privacy, source priorities, ownership, and non-proof statements.",
  },
  {
    id: "A6-E02",
    source: "Fictional source inventory",
    observation: "Nine source categories are proposed, but supplier assignment and one recovery identity population remain outside current coverage.",
    supports: "The initial SIEM scope has known identity and supplier coverage gaps.",
    limits: "The inventory does not prove a missed event occurred.",
    use: "Keep affected searches and detections Conditional and document residual risk.",
  },
  {
    id: "A6-E03",
    source: "Fictional processing timeline",
    observation: "One identity record reaches the SIEM twelve minutes after event time, while related application evidence arrives in two minutes.",
    supports: "Cross-source order and confidence may differ from the original event sequence.",
    limits: "Delay does not prove the identity event is wrong or harmful.",
    use: "Separate event, collection, processing, and alert time in searches and correlation.",
  },
  {
    id: "A6-E04",
    source: "Fictional field dictionary review",
    observation: "Two sources use the same normalized result value for different source meanings.",
    supports: "Normalization may be hiding an important semantic difference.",
    limits: "The finding does not prove every correlation using the field is incorrect.",
    use: "Review source-specific meanings, transformation rules, tests, and affected detections.",
  },
  {
    id: "A6-E05",
    source: "Fictional alert queue",
    observation: "A High alert has Moderate confidence, a Medium alert has confirmed user impact, and a Low source-health alert covers a broad Blind period.",
    supports: "Priority should consider more than severity.",
    limits: "The queue does not prove final cause, complete scope, or required response.",
    use: "Compare mission impact, active effect, source health, privilege, scope, time sensitivity, and response opportunity.",
  },
  {
    id: "A6-E06",
    source: "Fictional case note",
    observation: "The first note claims misuse before authorization, source health, service impact, alternatives, and owner context are reviewed.",
    supports: "The note is not evidence-disciplined.",
    limits: "A poor note does not prove the final case result is wrong.",
    use: "Require neutral observation, evidence links, hypotheses, confidence, owners, and review.",
  },
  {
    id: "A6-E07",
    source: "Fictional source-health dashboard",
    observation: "Identity evidence is Degraded, application evidence is Healthy, DNS evidence is Conditional, and network evidence is Recovering.",
    supports: "Different conclusions require different confidence and alternate evidence.",
    limits: "The dashboard does not prove the underlying activities were harmful or expected.",
    use: "Make source health visible in search, correlation, alerts, dashboards, and cases.",
  },
  {
    id: "A6-E08",
    source: "Fictional quality report",
    observation: "Alert volume fell after a broad suppression, but one known miss, two replay duplicates, and three reopened cases increased.",
    supports: "The change reduced volume without clearly improving overall quality.",
    limits: "The report does not identify every hidden miss or root cause.",
    use: "Reopen tuning review with coverage, source-health, effort, impact, privacy, testing, and rollback metrics.",
  },
];

const commonMistakes = [
  {
    mistake: "The SIEM is described as a complete source of truth",
    observation: "A fictional analyst assumes normalized records are complete and authoritative.",
    impact: "Source gaps, transformation differences, delay, retention, and field limitations are ignored.",
    correction: "Preserve provenance, field meaning, source health, coverage, alternate evidence, and confidence.",
  },
  {
    mistake: "The mission is to collect every log",
    observation: "A fictional plan adds every available source without defender questions, owners, privacy, or quality requirements.",
    impact: "Cost, noise, exposure, maintenance, and analyst overload increase.",
    correction: "Use mission-driven source selection, field minimization, access, retention, and lifecycle review.",
  },
  {
    mistake: "Normalization removes source context",
    observation: "A fictional shared result field hides different meanings from identity and application sources.",
    impact: "Search and correlation may create false equivalence.",
    correction: "Preserve source-specific meaning, provenance, transformations, schema versions, and tests.",
  },
  {
    mistake: "No alert means no event",
    observation: "A fictional quiet period is labeled normal during a source Blind state.",
    impact: "Missing evidence becomes false absence.",
    correction: "Display coverage and source-health limitations and reassess after recovery.",
  },
  {
    mistake: "An alert is treated as a confirmed incident",
    observation: "A fictional correlation match is described as confirmed misuse.",
    impact: "Authorization, alternatives, scope, impact, and evidence confidence are skipped.",
    correction: "Use neutral observations, bounded questions, non-proof statements, and decision states.",
  },
  {
    mistake: "Severity decides priority automatically",
    observation: "A fictional High alert is reviewed before a Medium alert with confirmed critical-service impact.",
    impact: "Mission and active effect are ignored.",
    correction: "Separate severity, confidence, priority, time sensitivity, scope, source health, and response opportunity.",
  },
  {
    mistake: "Case notes mix fact and interpretation",
    observation: "A fictional note records assumptions as facts without evidence or timestamps.",
    impact: "Handoffs, escalation, closure, and later review become unreliable.",
    correction: "Use objective chronology, evidence links, hypotheses, confidence, owners, and decision rationale.",
  },
  {
    mistake: "Dashboard counts replace quality review",
    observation: "A fictional program reports fewer alerts and faster closure as proof of success.",
    impact: "Misses, source gaps, reopened cases, user impact, privacy, and debt remain hidden.",
    correction: "Define decision-focused metrics with denominators, limitations, confidence, actions, and residual risk.",
  },
  {
    mistake: "One team owns everything",
    observation: "A fictional record says the security team owns sources, fields, logic, identity, service impact, privacy, tests, and risk.",
    impact: "Specialized questions and artifact maintenance lack accountable owners.",
    correction: "Assign SIEM, source, detection, analyst, identity, service, privacy, quality, risk, and leadership roles.",
  },
  {
    mistake: "Real SIEM material enters a public portfolio",
    observation: "A fictional learning page includes copied real source names, fields, screenshots, alerts, dashboards, cases, queries, or incidents.",
    impact: "Sensitive people, systems, suppliers, architecture, and defensive capabilities may be exposed.",
    correction: "Invent every organization, source, field, event, alert, dashboard, case, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Write the SIEM mission",
    action: "Define the fictional Northbridge users, identities, services, suppliers, administrative functions, evidence needs, availability outcomes, and recovery decisions the platform should support.",
    output: "SIEM mission and purpose statement.",
    quality: "Every proposed function traces to a bounded defender question.",
  },
  {
    step: "2",
    title: "Define scope and exclusions",
    action: "List fictional source categories, identities, devices, services, destinations, environments, states, periods, and fields that are in or out of scope.",
    output: "Scope, exclusion, and coverage statement.",
    quality: "Known gaps and false-negative risks remain visible.",
  },
  {
    step: "3",
    title: "Map the evidence pipeline",
    action: "Draw fictional source event, collection, parsing, normalization, enrichment, storage, correlation, alert, case, quality, and lifecycle stages.",
    output: "SIEM conceptual architecture map.",
    quality: "Every stage includes owner, timing, transformation, failure behavior, and limitation.",
  },
  {
    step: "4",
    title: "Assign owners",
    action: "Map fictional SIEM, source, detection, analyst, identity, service, privacy, quality, risk, and leadership responsibilities.",
    output: "Role and decision-rights matrix.",
    quality: "Every major question and artifact has one accountable owner.",
  },
  {
    step: "5",
    title: "Define source-health behavior",
    action: "Document fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states.",
    output: "Source-health decision model.",
    quality: "Each state changes search, correlation, alert, dashboard, confidence, and case behavior explicitly.",
  },
  {
    step: "6",
    title: "Design platform outputs",
    action: "Specify fictional search views, alerts, dashboards, case records, quality reports, and leadership summaries.",
    output: "Audience-specific output catalog.",
    quality: "Every output supports one audience and one decision without unnecessary fields.",
  },
  {
    step: "7",
    title: "Write platform boundaries",
    action: "Document fictional non-proof statements, source limitations, privacy limits, response boundaries, and out-of-scope uses.",
    output: "SIEM limitations and safety statement.",
    quality: "The platform is never described as proof, complete coverage, or automatic response authority.",
  },
  {
    step: "8",
    title: "Define quality metrics",
    action: "Create fictional mission coverage, source health, alert usefulness, expected-alert, miss, decision latency, effort, privacy, and lifecycle metrics.",
    output: "SIEM quality metric dictionary.",
    quality: "Every metric has definition, source, denominator, limitation, owner, action, and review trigger.",
  },
  {
    step: "9",
    title: "Create review triggers",
    action: "List fictional source, schema, field, parser, service, identity, policy, supplier, privacy, staffing, mission, and platform changes requiring review.",
    output: "SIEM lifecycle and change-review register.",
    quality: "The platform cannot remain Approved after a material change without revalidation.",
  },
  {
    step: "10",
    title: "Prepare the portfolio artifact",
    action: "Combine the fictional charter, architecture, owner matrix, source-health model, output catalog, metrics, limitations, risks, review triggers, and reflection.",
    output: "Public-safe SIEM Mission and Architecture Package.",
    quality: "Every organization, source, field, alert, dashboard, owner, date, decision, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question: "Which statement best describes a fictional SIEM?",
    choices: [
      "A platform that proves whether an incident occurred.",
      "A defensive evidence-and-workflow platform that helps collect, organize, correlate, present, and preserve selected records.",
      "A replacement for every source system and owner.",
      "An automatic response authority.",
    ],
    answer: 1,
    explanation: "A SIEM helps organize defensive evidence and workflow, but it does not replace source truth, analyst judgment, ownership, or response authority.",
  },
  {
    question: "Why must fictional source provenance be preserved?",
    choices: [
      "To make dashboards more colorful.",
      "To understand where evidence came from, how it changed, who owns it, and which limitations apply.",
      "To avoid documenting fields.",
      "To prove every record is correct.",
    ],
    answer: 1,
    explanation: "Provenance supports trustworthy interpretation of field meaning, transformations, timing, ownership, and limitations.",
  },
  {
    question: "A fictional SIEM search returns no matching records during a Blind source period. What is the strongest conclusion?",
    choices: [
      "The activity did not occur.",
      "The user was inactive.",
      "The available SIEM evidence cannot support an absence claim for the affected scope and period.",
      "The detection is a true negative.",
    ],
    answer: 2,
    explanation: "A Blind source state prevents a reliable absence conclusion and requires alternate evidence or later reassessment.",
  },
  {
    question: "What is the strongest reason to separate event time, collection time, and processing time?",
    choices: [
      "To create more fields.",
      "To understand delay, order, sequence, freshness, and when evidence became available.",
      "To make every source use the same timestamp.",
      "To eliminate source-health review.",
    ],
    answer: 1,
    explanation: "Different timestamps reveal pipeline delay and prevent collection order from being mistaken for event order.",
  },
  {
    question: "Which fictional alert statement is most responsible?",
    choices: [
      "Confirmed malicious access.",
      "The documented condition matched; authorization, source health, scope, impact, alternatives, and owner context remain under review.",
      "The SIEM proved compromise.",
      "High severity means the case is confirmed.",
    ],
    answer: 1,
    explanation: "The second statement separates observation from conclusion and preserves the questions still required for a defensible decision.",
  },
  {
    question: "Which fictional SIEM metric is most meaningful?",
    choices: [
      "Total records collected.",
      "Total alerts closed.",
      "Percentage of reviewed alerts that supported useful decisions, including misses, source-health limits, effort, impact, and reopen quality.",
      "Number of dashboard panels.",
    ],
    answer: 2,
    explanation: "Decision-focused quality measures are stronger than raw volume or visual-count metrics.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Use real source names but fake alert values.",
      "Use real dashboards with blurred screenshots.",
      "Invent every organization, source, field, event, alert, dashboard, case, owner, date, decision, and outcome.",
      "Copy internal schemas without organization names.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real systems, people, suppliers, architecture, and defensive capabilities.",
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
        A6 Homepage
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
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

export default function WhatASiemDoesPage() {
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
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">
              Evidence Platform, Workflow, Limits, and Governance
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.1 What a SIEM Does
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how a fictional SIEM helps defenders collect, normalize,
            search, correlate, present, preserve, and coordinate selected
            evidence—while still depending on source systems, source health,
            privacy, analyst judgment, ownership, and documented decision
            processes.
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
          lessonTitle="What a SIEM Does"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented sources, fields, identities, services, records, alerts, dashboards, cases, owners, dates, decisions, and outcomes.",
            "I understand that a fictional SIEM organizes selected evidence but does not replace source systems, source owners, analysts, service owners, privacy reviewers, or leadership decisions.",
            "I will distinguish source events, collected records, normalized fields, enrichment, correlations, alerts, cases, and confirmed outcomes.",
            "I will make source health, coverage, privacy, access, retention, ownership, and limitations visible.",
            "I will use neutral observations and non-proof statements rather than treating platform output as proof of harmful activity.",
            "I will not access, collect, search, query, monitor, correlate, scan, test, investigate, configure, or modify any real SIEM, account, endpoint, network, domain, service, supplier, alert, case, log, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A SIEM Can Show the Same Alert and Still Support Different Decisions"
        >
          <p className="leading-8">
            A fictional SIEM shows a High alert for an emergency role that
            remains visible after expiration. The platform also shows one active
            session, a delayed group source, an Unknown extension-source
            freshness state, and a critical student-support service. The alert
            is important, but the correct decision depends on which evidence is
            direct, which context is derived, which source is healthy, what
            authorization exists, what the session did, and which owner can
            confirm the service impact.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak interpretation
              </p>
              <p className="mt-2 leading-7">
                “The SIEM says High, so confirmed misuse occurred.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong interpretation
              </p>
              <p className="mt-2 leading-7">
                “The SIEM organized a meaningful observation. Authorization,
                effective access, source health, session scope, service impact,
                alternatives, ownership, and closure remain to be reviewed.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A SIEM can make evidence easier to find and connect. It cannot make
            incomplete evidence complete or convert an alert into a proven
            conclusion.
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
          title="SIEM Value Comes from Evidence Quality and Decision Quality"
        >
          <p className="leading-8">
            A fictional SIEM may bring many defensive records into one place,
            but the platform remains dependent on source coverage, field
            meaning, timing, source health, privacy, access, retention, analyst
            questions, owner context, and lifecycle maintenance. A technically
            available SIEM can still create false confidence when evidence is
            stale, incomplete, normalized incorrectly, overcollected, or
            disconnected from a defender decision.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Evidence coordination",
                "Bring selected fictional records together so analysts can answer cross-source questions.",
              ],
              [
                "Decision coordination",
                "Turn fictional alerts into triage, ownership, escalation, case, closure, and reopen workflows.",
              ],
              [
                "Quality coordination",
                "Measure fictional source health, usefulness, misses, effort, impact, privacy, debt, change, and retirement.",
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

        <SectionCard eyebrow="Core Framework" title="The S-I-E-M Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "S — Select mission-driven evidence",
                "Choose fictional sources and fields because they support documented defender questions, not because they are merely available.",
              ],
              [
                "I — Interpret provenance and health",
                "Understand fictional source meaning, event time, collection time, processing time, transformations, coverage, and health.",
              ],
              [
                "E — Enable analyst decisions",
                "Use fictional search, correlation, alerts, dashboards, cases, ownership, and evidence requests to support bounded decisions.",
              ],
              [
                "M — Maintain quality and lifecycle",
                "Review fictional usefulness, misses, source defects, privacy, ownership, changes, tests, rollback, debt, and retirement.",
              ],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready SIEM statement
            </p>
            <p className="mt-2 leading-7">
              This fictional SIEM supports selected defensive questions through
              documented sources, fields, provenance, timing, normalization,
              enrichment, source health, search, correlation, alerts,
              dashboards, cases, access, privacy, retention, ownership,
              limitations, quality metrics, review triggers, and lifecycle.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for SIEM Purpose and Architecture"
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
            Understand Ten Core SIEM Functions
          </h2>

          <div className="mt-6 grid gap-5">
            {coreFunctions.map((item, index) => (
              <article
                key={item.function}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-cyan-100">
                      {item.function}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.purpose}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Can support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.doesNotProve}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Owner question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.ownerQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Respect Eight SIEM Boundaries"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {platformBoundaries.map((item) => (
              <article
                key={item.boundary}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.boundary}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why the boundary matters
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.explanation}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongPractice}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Ask Eight SIEM Mission Questions"
        >
          <div className="grid gap-5">
            {missionQuestions.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure if ignored
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Trace Ten Evidence-Pipeline Stages"
        >
          <div className="grid gap-5">
            {evidencePipeline.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.stage}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidenceQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Assign Eight SIEM Roles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {roleModel.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Responsibility
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.responsibility}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Use Six Source-Health States"
        >
          <div className="grid gap-5">
            {sourceHealthStates.map((item) => (
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
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      SIEM behavior
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.siemBehavior}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Analyst caution
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.analystCaution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Measure Eight SIEM Quality Dimensions"
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
          eyebrow="Fictional SIEM Architecture"
          title="Northbridge Evidence-and-Workflow Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches SIEM purpose and architecture without
            real source names, schemas, products, fields, credentials,
            addresses, queries, alerts, dashboards, cases, incidents, or
            internal systems.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                [
                  "Identity sources",
                  "Roles, groups, approvals, sessions, source health",
                ],
                [
                  "Service sources",
                  "Applications, results, owners, dependencies, impact",
                ],
                [
                  "Network and DNS",
                  "Relationships, policy, naming, timing, coverage",
                ],
                [
                  "Supplier and change",
                  "Assignments, support, maintenance, recovery",
                ],
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
                Fictional SIEM Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Collect", "Selected records, timing, provenance, coverage"],
                  ["Parse", "Source fields, schemas, failures, owners"],
                  [
                    "Normalize",
                    "Shared categories with preserved differences",
                  ],
                  [
                    "Enrich",
                    "Identity, service, owner, change, mission context",
                  ],
                  ["Search", "Purpose, scope, time, fields, health, retention"],
                  [
                    "Correlate",
                    "Relationships, counts, sequences, states, windows",
                  ],
                  [
                    "Present",
                    "Alerts, dashboards, evidence, confidence, limits",
                  ],
                  [
                    "Coordinate",
                    "Triage, cases, owners, decisions, quality, lifecycle",
                  ],
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
                [
                  "Analyst outputs",
                  "Search views, alerts, evidence, triage, cases",
                ],
                [
                  "Owner outputs",
                  "Source health, authorization, service impact, actions",
                ],
                [
                  "Leadership outputs",
                  "Coverage, quality, risk, resources, milestones",
                ],
                [
                  "Portfolio boundary",
                  "Fully fictional, privacy-safe, non-operational",
                ],
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
          title="Fake Northbridge SIEM Mission Dashboard"
          subtitle="Fictional source coverage, source health, alert usefulness, ownership, privacy, and lifecycle readiness for training only."
          metrics={[
            {
              label: "Mission questions with documented SIEM support",
              value: "11 / 14",
              note: "Supplier assignment, one recovery identity population, and one service-impact question remain outside reliable coverage.",
            },
            {
              label: "Source categories with complete ownership and health rules",
              value: "7 / 9",
              note: "Supplier and administrative-source recovery ownership remain incomplete.",
            },
            {
              label: "Open fictional SIEM design risks",
              value: "8",
              note: "Normalization semantics, source Blind behavior, privacy fields, retention, access roles, dashboard definitions, case closure, and retirement require action.",
            },
          ]}
        />

        <FakeAlertCard
          title="SIEM Mission and Evidence Coverage Are Conditional"
          severity="High"
          time="2:42 PM"
          source="Fake Northbridge SIEM Governance Console"
          details="The fictional SIEM mission is documented and seven source categories have complete owners and health behavior. Supplier assignment evidence, one recovery identity population, normalization semantics, privacy fields, and case closure criteria remain incomplete."
          recommendation="Keep the fictional SIEM design Conditional. Resolve coverage gaps, field meaning, source-health behavior, access, retention, privacy, ownership, closure, testing, and review triggers before Approved status."
        />

        <FakeLogPanel
          title="Fake SIEM Evidence-Pipeline Timeline"
          logs={[
            "09:00 SOURCE identity-event='created'",
            "09:03 COLLECTION identity-record='received'",
            "09:05 PARSER schema='identity-v2'",
            "09:07 NORMALIZE role-state='mapped'",
            "09:09 ENRICH owner-group='added'",
            "09:11 SOURCE-HEALTH identity='healthy'",
            "09:13 SOURCE supplier-assignment='missing-coverage'",
            "09:15 SOURCE recovery-identity='partial'",
            "09:17 CORRELATION stale-role='matched'",
            "09:19 ALERT severity='high'",
            "09:21 ALERT confidence='moderate'",
            "09:23 DASHBOARD coverage='conditional'",
            "09:25 CASE state='new'",
            "09:27 QUESTION authorization='open'",
            "09:29 OWNER identity='assigned'",
            "09:31 OWNER source='assigned'",
            "09:33 PRIVACY review='required'",
            "09:35 RETENTION decision='open'",
            "09:37 READINESS siem='conditional'",
            "14:42 ALERT issue='mission-and-coverage'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the SIEM Evidence Supports—and What It Does Not Prove
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
                    ["SIEM design use", item.use],
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
          title="Which SIEM Readiness Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional Northbridge SIEM mission and architecture review?"
          evidence={[
            "The SIEM mission and major stakeholders are documented.",
            "Seven of nine source categories have complete owners and health behavior.",
            "Supplier assignment and one recovery identity population remain outside reliable coverage.",
            "Two normalized result meanings may be incorrectly treated as equivalent.",
            "The High alert has Moderate confidence because one required source is delayed.",
            "Privacy fields and retention decisions remain incomplete.",
            "One case template closes when the alert disappears.",
            "Eight fictional design risks remain open.",
          ]}
          options={[
            "Keep the fictional SIEM design Conditional, preserve the documented mission, and resolve source coverage, normalization meaning, source-health behavior, privacy, retention, ownership, case closure, testing, and lifecycle risks before approval.",
            "Approve the SIEM because most source categories are connected.",
            "Treat all normalized fields as authoritative because they share a name.",
            "Remove the incomplete sources from the design and claim full coverage.",
          ]}
          bestAnswer={0}
          explanation="The first option recognizes useful progress while preserving the exact gaps that affect evidence meaning, confidence, coverage, privacy, case quality, and lifecycle."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten SIEM Purpose and Architecture Errors"
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
          title="Build the Northbridge SIEM Mission and Architecture Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, copy, sanitize, upload, search, query, inspect, monitor,
            correlate, test, configure, investigate, or modify any real SIEM,
            source, schema, field, alert, dashboard, case, account, endpoint,
            network, domain, service, supplier, platform, or organization.
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
          title="Leadership Wants Every Available Source Added Immediately"
          scenario="Fictional leadership believes more data always creates better security. Several proposed sources have no defender question, no owner, unclear field meaning, broad personal detail, and no retention or source-health plan."
          choices={[
            {
              label: "Choice A",
              response: "Pause fictional onboarding for those sources, define mission questions, required fields, provenance, owners, health, privacy, access, retention, tests, limitations, and lifecycle before approval.",
              outcome: "Best defensive choice. It prevents unnecessary collection and unmaintainable evidence debt.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Collect everything now and document it later.",
              outcome: "Weak. This increases privacy, cost, noise, semantic, ownership, and lifecycle risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Give every analyst access so the data can be useful.",
              outcome: "Weak. Broad access ignores purpose limitation and role-based need.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The SIEM Shows No Matching Records during a Blind Period"
          scenario="A fictional analyst searches for emergency-role activity during a period when the required group source was Blind and the extension source was Degraded. The SIEM returns no matches."
          choices={[
            {
              label: "Choice A",
              response: "Record that the fictional SIEM cannot support an absence conclusion, identify affected coverage, seek approved alternate evidence, preserve Unknown or Source-Degraded status, and reassess after recovery.",
              outcome: "Best choice. Missing evidence is not evidence that the condition was absent.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Close the case as a true negative because the search returned nothing.",
              outcome: "Weak. The required evidence was unavailable or incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Mark the identity as safe permanently.",
              outcome: "Weak. One incomplete search cannot support that conclusion.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a SIEM Mission That Can Be Challenged"
        >
          <p className="leading-8">
            Fictional Northbridge wants one SIEM for all identity, service,
            supplier, network, DNS, application, administrative, source-health,
            and recovery evidence. The project team has a source list and
            dashboard mockup, but no defender questions, source-health model,
            field-purpose map, ownership, case workflow, quality metrics,
            limitations, review triggers, or retirement plan.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Challenge the mission",
                "Explain which fictional decisions the SIEM should support and which responsibilities remain outside the platform.",
              ],
              [
                "Challenge the evidence",
                "Explain fictional provenance, field meaning, timing, normalization, enrichment, source health, coverage, privacy, and limits.",
              ],
              [
                "Challenge the outputs",
                "Explain fictional searches, alerts, dashboards, cases, owner questions, non-proof statements, and audience boundaries.",
              ],
              [
                "Challenge the quality",
                "Explain fictional usefulness, misses, source gaps, decision latency, analyst effort, user impact, privacy, and debt.",
              ],
              [
                "Challenge the ownership",
                "Explain fictional SIEM, source, detection, analyst, identity, service, privacy, quality, risk, and leadership roles.",
              ],
              [
                "Challenge the lifecycle",
                "Explain fictional onboarding, testing, change review, observation, tuning, rollback, documentation, source retirement, and platform retirement.",
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
              Produce a fictional SIEM mission charter, source-priority model,
              evidence-pipeline architecture, source-health model, access and
              privacy matrix, owner matrix, output catalog, metric dictionary,
              risk register, review-trigger register, residual-risk statement,
              leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="What a SIEM Does Checklist"
          items={[
            "I can explain a fictional SIEM as an evidence-and-workflow platform rather than a complete source of truth or automatic response authority.",
            "I can distinguish source event, collection, parsing, normalization, enrichment, storage, search, correlation, alert, dashboard, case, decision, and outcome.",
            "I can document fictional provenance, field meaning, event time, collection time, processing time, schema, parser, transformation, coverage, and source health.",
            "I can explain what fictional SIEM evidence supports and what it does not prove.",
            "I can define mission-driven sources and fields using purpose limitation, privacy, access, retention, deletion, ownership, and lifecycle.",
            "I can use Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states.",
            "I can assign SIEM, source, detection, analyst, identity, service, privacy, quality, risk, and leadership responsibilities.",
            "I can design fictional alerts, dashboards, cases, and leadership summaries for specific decisions and audiences.",
            "I can evaluate fictional mission coverage, source health, alert usefulness, expected alerts, misses, decision latency, analyst effort, privacy, and lifecycle debt.",
            "I can identify SIEM design risks involving overcollection, false absence, semantic normalization, alert overconfidence, weak notes, vanity metrics, missing owners, and stale lifecycle decisions.",
            "I can create fictional review triggers for source, schema, field, parser, identity, service, supplier, policy, privacy, staffing, mission, and platform changes.",
            "I can create a completely fictional SIEM artifact without exposing real sources, fields, alerts, dashboards, cases, identities, systems, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A6.1 Mini Quiz: What a SIEM Does"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional SIEM Mission and Architecture Package for the Northbridge Student-Support Cooperative. Include mission, purpose, users, stakeholders, bounded defender questions, non-proof statements, scope, exclusions, safety boundary, source categories, source priorities, source owners, identity sources, endpoint sources, network sources, DNS sources, email sources, application sources, cloud sources, supplier sources, administrative sources, support sources, change sources, source-health sources, source events, collection, parsing, normalization, enrichment, storage, indexing, search, correlation, alerts, dashboards, cases, metrics, event time, collection time, processing time, schema versions, parser versions, transformations, provenance, required fields, optional fields, field meanings, privacy purpose, access roles, retention, deletion, coverage, source-health states, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, alert contracts, analyst users, owner users, leadership users, SIEM program owners, detection owners, analysts, identity owners, service owners, privacy reviewers, quality owners, risk owners, leadership owners, mission-coverage metrics, source-health metrics, alert-usefulness metrics, expected-alert metrics, false-positive and false-negative risk, decision latency, analyst effort, privacy findings, lifecycle debt, risks, safeguards, review triggers, onboarding gates, validation gates, change review, observation, rollback, residual risk, source retirement, platform retirement, leadership summary, architecture diagram, reflection, and a statement that every organization, source, field, event, alert, dashboard, case, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional mission decisions and bounded defender questions rather than a source list.",
            "Show where fictional evidence changes through collection, parsing, normalization, enrichment, correlation, alerting, and case use.",
            "Make source health, coverage, privacy, access, retention, ownership, limitations, and non-proof statements visible.",
            "Use audience-specific fictional outputs for analysts, owners, quality reviewers, privacy reviewers, risk owners, and leadership.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Log Collection and Normalization Concepts?"
        >
          <p className="leading-8">
            Before moving to A6.2, rate your readiness from 1 to 5 for SIEM
            mission, source systems, evidence stages, provenance, timing,
            source health, coverage, privacy, access, retention, ownership,
            limitations, outputs, quality, lifecycle, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain what a fictional SIEM does without describing it as complete truth.",
              "I can trace a fictional record from source event through collection, parsing, normalization, enrichment, correlation, alert, and case.",
              "I can distinguish direct source evidence from normalized and enriched context.",
              "I can explain why no record or no alert does not always prove absence.",
              "I can make source health and coverage visible in platform decisions.",
              "I can define privacy, access, retention, deletion, ownership, and lifecycle requirements.",
              "I can evaluate SIEM quality using useful decisions, misses, effort, impact, privacy, and debt rather than volume alone.",
              "I can produce a safe fictional SIEM architecture without copying real products, schemas, alerts, dashboards, or cases.",
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
            Record one fictional SIEM mission question, one required source,
            one field limitation, one source-health risk, one privacy control,
            one non-proof statement, and one question you will carry into A6.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional SIEM is a defensive evidence-and-workflow platform, not a complete source of truth, proof engine, or automatic response authority.",
            "SIEM value depends on mission-driven source selection, field meaning, provenance, timing, source health, coverage, privacy, access, retention, ownership, and lifecycle.",
            "Source events, collected records, parsed fields, normalized fields, enrichment, correlations, alerts, cases, decisions, and outcomes are different stages.",
            "No matching record or no alert does not prove absence when sources, fields, coverage, retention, searches, or logic are incomplete.",
            "A correlation or alert describes a matched condition and should include evidence, source health, confidence, alternatives, owners, and non-proof statements.",
            "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence should produce explicit platform and analyst behavior.",
            "SIEM outputs should be designed for specific analyst, owner, quality, privacy, risk, and leadership decisions.",
            "Quality requires more than alert volume: mission coverage, source health, usefulness, expected alerts, misses, decision latency, effort, impact, privacy, and debt matter.",
            "SIEM architecture and documentation must be reviewed after source, schema, field, parser, identity, service, supplier, policy, privacy, staffing, mission, or platform change.",
            "Every CyberShield SIEM artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, examine how fictional records move from source systems into
            collection, parsing, normalization, enrichment, storage, and
            quality controls—and why provenance, field meaning, timing, source
            health, privacy, and transformation must remain visible.
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