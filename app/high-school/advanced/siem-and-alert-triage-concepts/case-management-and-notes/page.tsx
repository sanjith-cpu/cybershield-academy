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
const previousLesson = `${modulePath}/escalation-criteria`;
const nextLesson = `${modulePath}/dashboards-and-metrics`;

const objectives = [
  "Create a fictional case record that preserves neutral observations, evidence provenance, source health, chronology, questions, hypotheses, decisions, owners, actions, communications, limitations, and lifecycle state.",
  "Distinguish fictional facts, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, actions, outcomes, and residual uncertainty in professional notes.",
  "Write fictional case notes that are concise enough for operational use while complete enough for another reviewer to reconstruct what happened, why decisions were made, and what remains unresolved.",
  "Use fictional note templates for intake, evidence review, owner requests, escalation, state changes, decisions, recovery, closure, and reopening without copying sensitive real-world details.",
  "Create a portfolio-ready fictional Case Management and Notes Package containing a case schema, chronology, evidence ledger, decision log, owner matrix, communication log, closure checklist, reopening criteria, quality metrics, and reflection.",
];

const vocabulary = [
  [
    "Case record",
    "A fictional structured collection of alerts, evidence, questions, decisions, actions, owners, communications, timelines, limitations, and lifecycle states for one bounded defensive review.",
  ],
  [
    "Case identifier",
    "A fictional unique reference used to connect alerts, evidence, notes, owners, decisions, and lifecycle changes.",
  ],
  [
    "Case intake",
    "The fictional first record that captures alert identity, neutral observation, severity, confidence, priority, source health, primary question, owner, and initial state.",
  ],
  [
    "Case note",
    "A fictional timestamped record of an observation, review, request, response, decision, action, limitation, or state change.",
  ],
  [
    "Chronology",
    "A fictional ordered record of events, evidence arrival, analyst actions, owner responses, decisions, and state transitions.",
  ],
  [
    "Evidence ledger",
    "A fictional register showing each evidence item, source, provenance, time, health, meaning, limitation, owner, and case use.",
  ],
  [
    "Decision log",
    "A fictional register documenting what decision was made, by whom, when, using which evidence, with which limitations, and under which review triggers.",
  ],
  [
    "Action log",
    "A fictional record of approved defensive actions, owners, start times, completion times, validation, rollback, and outcomes.",
  ],
  [
    "Communication log",
    "A fictional record of purpose-limited requests, responses, recipients, deadlines, acceptance, and unresolved questions.",
  ],
  [
    "State transition",
    "A fictional documented movement from one case state to another based on evidence, ownership, timing, impact, source health, or lifecycle criteria.",
  ],
  [
    "Fact",
    "A fictional statement directly supported by documented evidence under known provenance, timing, and source-health conditions.",
  ],
  [
    "Observation",
    "A fictional neutral description of what records or conditions show without claiming cause, intent, complete scope, impact, or final outcome.",
  ],
  [
    "Hypothesis",
    "A fictional possible explanation proposed to guide evidence review and clearly labeled as unconfirmed.",
  ],
  [
    "Assumption",
    "A fictional belief used temporarily when evidence is incomplete and documented with owner, risk, and validation need.",
  ],
  [
    "Decision",
    "A fictional evidence-based conclusion about case state, priority, escalation, ownership, closure, reopening, or next review.",
  ],
  [
    "Action",
    "A fictional approved step taken by an accountable owner to reduce risk, restore state, validate evidence, communicate, or complete the case.",
  ],
  [
    "Outcome",
    "A fictional observed result after a decision or action, separated from the action itself.",
  ],
  [
    "Residual uncertainty",
    "A fictional record of important questions or evidence limitations that remain unresolved.",
  ],
  [
    "Residual risk",
    "A fictional risk that remains after current actions, validations, and decisions are complete.",
  ],
  [
    "Reopen trigger",
    "A fictional condition that requires renewed review after closure, such as new evidence, changed scope, repeated behavior, failed validation, or source recovery.",
  ],
  [
    "Note quality",
    "The fictional degree to which a case note is accurate, neutral, traceable, timely, privacy-aware, complete, and useful to another reviewer.",
  ],
  [
    "Case aging",
    "A fictional process that identifies cases, questions, actions, or owner responses that remain unresolved beyond documented deadlines.",
  ],
  [
    "Case debt",
    "Fictional risk created by stale notes, missing owners, unclear decisions, incomplete chronology, unresolved actions, weak closure, or missing reopen criteria.",
  ],
  [
    "Public-safe case",
    "A fictional portfolio artifact that teaches case management without exposing real alerts, identities, services, owners, systems, communications, or internal operations.",
  ],
];

const caseSections = [
  {
    section: "1. Case identity",
    purpose:
      "Establish the fictional case identifier, title, version, creation time, current state, owner, reviewer, and linked alerts.",
    requiredFields:
      "Case ID, neutral title, version, creation time, last update, state, priority, owner, reviewer, and linked alert IDs.",
    qualityRisk:
      "Without a stable identity, evidence and decisions may become fragmented across records.",
    strongPractice:
      "Use one fictional case ID and preserve change history rather than creating disconnected notes.",
  },
  {
    section: "2. Neutral intake summary",
    purpose:
      "Explain what fictional condition entered review without unsupported intent, cause, scope, impact, or outcome.",
    requiredFields:
      "Observation, primary defender question, non-proof statement, severity, confidence, priority, and source-health summary.",
    qualityRisk:
      "The alert title may become the case conclusion.",
    strongPractice:
      "Rewrite the alert in neutral language before adding hypotheses or decisions.",
  },
  {
    section: "3. Scope and boundaries",
    purpose:
      "Define which fictional identities, devices, services, destinations, periods, environments, questions, and owners are inside or outside the case.",
    requiredFields:
      "In-scope entities, out-of-scope entities, time range, evidence categories, privacy boundary, and decision boundary.",
    qualityRisk:
      "The case may grow without control or collect unnecessary information.",
    strongPractice:
      "Document scope changes explicitly with rationale, owner, and review date.",
  },
  {
    section: "4. Evidence ledger",
    purpose:
      "Track fictional evidence by source, provenance, time, source health, interpretation, limitation, owner, and case use.",
    requiredFields:
      "Evidence ID, source, event time, collection time, processing time, health, observation, supports, does not prove, owner, and reference.",
    qualityRisk:
      "Facts, enrichment, derived context, and hypotheses may become mixed.",
    strongPractice:
      "Label each evidence layer and preserve source-specific meaning.",
  },
  {
    section: "5. Chronology",
    purpose:
      "Reconstruct fictional events, evidence arrival, analyst review, owner responses, decisions, actions, and state changes in time.",
    requiredFields:
      "Timestamp, time type, actor or owner, event, evidence reference, decision relevance, and uncertainty.",
    qualityRisk:
      "Collection order or note order may be mistaken for event order.",
    strongPractice:
      "Keep event time, collection time, processing time, and note time separate.",
  },
  {
    section: "6. Question register",
    purpose:
      "Track fictional primary and supporting questions, evidence needs, owners, deadlines, status, and decision effect.",
    requiredFields:
      "Question ID, wording, purpose, owner, evidence needed, deadline, state, answer, limitation, and next step.",
    qualityRisk:
      "Cases may contain broad review activity without clear decision questions.",
    strongPractice:
      "Every evidence request should answer a documented question.",
  },
  {
    section: "7. Hypothesis and alternative register",
    purpose:
      "Preserve fictional possible explanations without treating them as facts.",
    requiredFields:
      "Hypothesis, supporting evidence, contradicting evidence, source health, owner, next test, and current confidence.",
    qualityRisk:
      "The first plausible explanation may become the final conclusion.",
    strongPractice:
      "Compare multiple alternatives and update them when evidence changes.",
  },
  {
    section: "8. Decision log",
    purpose:
      "Explain fictional state, priority, escalation, ownership, closure, or reopening decisions.",
    requiredFields:
      "Decision ID, timestamp, decision, decision owner, supporting evidence, limitations, alternatives, affected state, review trigger, and expiration.",
    qualityRisk:
      "Later reviewers may know what happened but not why.",
    strongPractice:
      "Record the evidence and limitations that justified each decision.",
  },
  {
    section: "9. Action and validation log",
    purpose:
      "Track fictional approved actions, owners, timing, completion, validation, rollback, and observed outcomes.",
    requiredFields:
      "Action ID, purpose, owner, authorization, start, completion, validation, outcome, rollback, and residual risk.",
    qualityRisk:
      "Actions may be mistaken for successful outcomes.",
    strongPractice:
      "Separate action performed, validation result, and final outcome.",
  },
  {
    section: "10. Communication and handoff log",
    purpose:
      "Preserve fictional requests, responses, escalations, recipients, deadlines, acceptance, and unresolved questions.",
    requiredFields:
      "Communication ID, purpose, sender role, recipient role, time, request, evidence boundary, deadline, response, acceptance, and next step.",
    qualityRisk:
      "Ownership may disappear during handoff or parallel review.",
    strongPractice:
      "Keep one coordinating owner and record receiving-owner acceptance.",
  },
  {
    section: "11. Closure and residual risk",
    purpose:
      "Document why the fictional case can close and what uncertainty or risk remains.",
    requiredFields:
      "Question resolution, source health, authorization, scope, impact, owner actions, validation, residual risk, review date, and closure owner.",
    qualityRisk:
      "Alert silence or elapsed time may be mistaken for resolution.",
    strongPractice:
      "Use explicit closure criteria and independent validation where appropriate.",
  },
  {
    section: "12. Reopening and lifecycle",
    purpose:
      "Define fictional conditions that require renewed review and preserve the original case history.",
    requiredFields:
      "Reopen triggers, owner, new evidence, changed scope, repeated behavior, failed validation, source recovery, review date, and replacement case rules.",
    qualityRisk:
      "Closed cases may remain closed even when new evidence changes the conclusion.",
    strongPractice:
      "Link reopened work to the original chronology and decisions.",
  },
];

const noteTypes = [
  {
    type: "Intake note",
    purpose:
      "Capture the fictional alert, neutral observation, primary question, source health, severity, confidence, priority, owner, and initial state.",
    strongExample:
      "09:00 — Case opened after role state remained Active twenty minutes beyond approval_end. Extension evidence is Conditional and group evidence is Degraded. Primary question: did effective emergency authority remain active without a valid matching extension? Current state: In Review.",
    weakExample:
      "09:00 — Suspicious privileged misuse detected.",
  },
  {
    type: "Evidence note",
    purpose:
      "Record one fictional evidence item with provenance, timing, source health, meaning, and limitation.",
    strongExample:
      "09:07 — Identity role source, Healthy: role_state=Active at event time 08:58. Supports continuing assignment state. Does not prove valid authorization, effective access, or use.",
    weakExample:
      "09:07 — User still has access.",
  },
  {
    type: "Hypothesis note",
    purpose:
      "Record a fictional possible explanation and the evidence needed to evaluate it.",
    strongExample:
      "09:12 — Hypothesis H-02: revocation synchronization may be delayed. Supporting evidence: group source is Degraded. Contradicting evidence: role source remains Healthy and Active. Next evidence: source-side group state and delay report.",
    weakExample:
      "09:12 — Probably just a sync issue.",
  },
  {
    type: "Owner request note",
    purpose:
      "Record a fictional purpose-limited request, recipient, deadline, and decision use.",
    strongExample:
      "09:15 — Requested identity owner confirmation of current approval, extension, role scope, and owner for the alert period. Deadline 09:45 due to active session and critical service. No unrelated identity history requested.",
    weakExample:
      "09:15 — Asked identity team for everything.",
  },
  {
    type: "Owner response note",
    purpose:
      "Record a fictional owner statement, evidence supplied, limitations, and next question.",
    strongExample:
      "09:28 — Identity owner reports no extension visible in the governance record. Statement is current as of 09:26 but extension source remains Conditional. Next step: source owner validation before authorization conclusion.",
    weakExample:
      "09:28 — Identity team says unauthorized.",
  },
  {
    type: "Escalation note",
    purpose:
      "Record fictional trigger, level, owners, bounded questions, deadlines, acceptance, and non-proof statement.",
    strongExample:
      "09:31 — Escalated to Level 3 because privileged role and session remain Active after expiration and the response window is short. Identity, source, and service owners assigned separate questions. Case owner retains coordination.",
    weakExample:
      "09:31 — Escalated because this is serious.",
  },
  {
    type: "Decision note",
    purpose:
      "Record a fictional evidence-based state, priority, or ownership decision.",
    strongExample:
      "09:35 — Decision D-03: case remains Conditional, High priority. Observation confidence High; authorization confidence Moderate because extension evidence is delayed. Review trigger: extension source recovery or owner deadline.",
    weakExample:
      "09:35 — Still suspicious.",
  },
  {
    type: "Action note",
    purpose:
      "Record a fictional approved action separately from validation and outcome.",
    strongExample:
      "09:41 — Identity owner initiated approved role revocation. Action completion does not yet prove session closure or source reconciliation. Validation assigned to identity and source owners.",
    weakExample:
      "09:41 — Fixed.",
  },
  {
    type: "Validation note",
    purpose:
      "Record fictional checks showing whether an action achieved the intended state.",
    strongExample:
      "09:48 — Validation: role source reports Revoked and session source reports Closed. Group source remains Recovering; historical authorization still unresolved. Immediate active condition ended, but closure criteria are incomplete.",
    weakExample:
      "09:48 — Everything looks good.",
  },
  {
    type: "Closure note",
    purpose:
      "Record fictional question resolution, evidence, source health, owner actions, validation, residual risk, and reopen criteria.",
    strongExample:
      "11:10 — Case closed after extension history confirmed no valid approval, role and group revocation validated, sessions closed, service impact reviewed, source recovery completed, residual risk assigned, and reopen triggers documented.",
    weakExample:
      "11:10 — Closed because alerts stopped.",
  },
  {
    type: "Reopen note",
    purpose:
      "Record fictional new evidence, changed scope, failed validation, repeated behavior, or source recovery that changes the prior decision.",
    strongExample:
      "14:20 — Case reopened after recovery replay revealed a second session during the original period. Original chronology and decisions preserved. Scope and authorization questions returned to In Review.",
    weakExample:
      "14:20 — Reopened.",
  },
];

const evidenceLayers = [
  {
    layer: "Direct source fact",
    label:
      "Fictional evidence directly recorded by a source under known timing and health conditions.",
    noteLanguage:
      "The role source records Active at event time 08:58.",
    caution:
      "Direct evidence can still be incomplete, delayed, duplicated, or semantically limited.",
  },
  {
    layer: "Parsed or normalized field",
    label:
      "Fictional source evidence interpreted or mapped into structured fields.",
    noteLanguage:
      "Normalized authorization.state is expired based on approval_end and current time.",
    caution:
      "The note should preserve source value, mapping, and transformation where meaning matters.",
  },
  {
    layer: "Enrichment",
    label:
      "Fictional service, identity, destination, owner, criticality, peer, change, or mission context added after collection.",
    noteLanguage:
      "Service enrichment identifies the destination as a critical student-support service.",
    caution:
      "Enrichment may be stale or nonauthoritative.",
  },
  {
    layer: "Derived context",
    label:
      "Fictional value calculated from several records or conditions.",
    noteLanguage:
      "Authorization confidence is Moderate because role and session evidence are current while extension evidence is delayed.",
    caution:
      "Derived context should never be presented as a direct source fact.",
  },
  {
    layer: "Owner statement",
    label:
      "Fictional statement from an accountable owner with time, scope, and authority documented.",
    noteLanguage:
      "Service owner reports no current user impact as of 09:26.",
    caution:
      "Owner statements should be validated where possible and may become stale.",
  },
  {
    layer: "Hypothesis",
    label:
      "Fictional possible explanation used to guide review.",
    noteLanguage:
      "Hypothesis: group state may remain Active because synchronization is delayed.",
    caution:
      "A hypothesis is not evidence and should include next validation.",
  },
  {
    layer: "Decision",
    label:
      "Fictional case state, priority, escalation, closure, or ownership conclusion supported by evidence.",
    noteLanguage:
      "Decision: remain Conditional and High priority pending extension-source validation.",
    caution:
      "The note should cite evidence, limitations, owner, and review trigger.",
  },
  {
    layer: "Outcome",
    label:
      "Fictional observed result after an action or decision.",
    noteLanguage:
      "Outcome: role source reports Revoked and session source reports Closed.",
    caution:
      "An outcome should be separated from the action that attempted to produce it.",
  },
];

const chronologyRules = [
  {
    rule: "Separate time types",
    explanation:
      "Record fictional event time, collection time, processing time, alert time, note time, action time, and validation time separately.",
    risk:
      "A note timestamp may be mistaken for the underlying event time.",
    example:
      "Event 08:58; collected 09:04; processed 09:06; alert 09:08; analyst note 09:10.",
  },
  {
    rule: "Use one time zone and label it",
    explanation:
      "Represent fictional times consistently while preserving original source time when relevant.",
    risk:
      "Cross-source chronology can become misleading.",
    example:
      "All case times use the fictional Northbridge operating time; source offset retained in evidence ledger.",
  },
  {
    rule: "Preserve out-of-order arrival",
    explanation:
      "Record fictional events by event time and show when delayed evidence entered the case.",
    risk:
      "Collection order may create a false sequence.",
    example:
      "Revocation event occurred 09:04 but arrived 09:19 after session evidence.",
  },
  {
    rule: "Mark duplicates and replay",
    explanation:
      "Identify fictional repeated delivery without deleting legitimate repeated actions.",
    risk:
      "Alert count and scope may be inflated or meaningful changes may be hidden.",
    example:
      "Records R-11, R-12, and R-13 share one event ID and recovery-replay marker.",
  },
  {
    rule: "Record blind periods",
    explanation:
      "Show fictional periods when required evidence was unavailable and which conclusions were affected.",
    risk:
      "Quiet activity may be mistaken for absence.",
    example:
      "Session source Blind from 09:20 to 09:43; active-use conclusion remains Unknown for that period.",
  },
  {
    rule: "Record state changes with reasons",
    explanation:
      "Document fictional case-state transitions and the evidence or deadline that triggered them.",
    risk:
      "Later reviewers may not understand why the case changed.",
    example:
      "09:31 — In Review to Escalated after owner deadline and active privileged session.",
  },
  {
    rule: "Record corrections transparently",
    explanation:
      "When a fictional note is wrong or incomplete, add a correction with reason and preserve the original history.",
    risk:
      "Silent edits can damage trust and chronology.",
    example:
      "10:05 — Correction to 09:28 note: owner statement referred to role assignment, not effective access.",
  },
  {
    rule: "Link every major note",
    explanation:
      "Connect fictional notes to evidence IDs, question IDs, decision IDs, action IDs, owner requests, or state transitions.",
    risk:
      "Case notes may become narrative without traceability.",
    example:
      "Decision D-04 references evidence E-03, E-07, question Q-02, and source-health record SH-02.",
  },
];

const decisionLogFields = [
  {
    field: "Decision ID",
    purpose:
      "Provides fictional traceability across notes, actions, state changes, and reviews.",
    example:
      "D-05",
  },
  {
    field: "Decision time",
    purpose:
      "Shows when the fictional conclusion was made relative to evidence and deadlines.",
    example:
      "09:35 case time",
  },
  {
    field: "Decision owner",
    purpose:
      "Identifies fictional accountability and authority.",
    example:
      "Case owner with identity-owner input",
  },
  {
    field: "Decision statement",
    purpose:
      "Records the fictional state, priority, escalation, ownership, closure, or reopening conclusion.",
    example:
      "Remain Conditional and High priority",
  },
  {
    field: "Supporting evidence",
    purpose:
      "Lists fictional evidence IDs, owner statements, source-health records, and chronology.",
    example:
      "E-02, E-04, E-07, SH-03",
  },
  {
    field: "Conflicting evidence",
    purpose:
      "Preserves fictional information that limits or challenges the conclusion.",
    example:
      "Extension source delayed; group source Degraded",
  },
  {
    field: "Alternatives considered",
    purpose:
      "Shows fictional approved, technical, timing, source-health, and workflow explanations reviewed.",
    example:
      "Valid late extension; synchronization delay; incomplete closure",
  },
  {
    field: "Confidence, severity, and priority",
    purpose:
      "Separates fictional evidence certainty, potential impact, and review urgency.",
    example:
      "Observation High; authorization Moderate; severity High; priority High",
  },
  {
    field: "Limitations and non-proof statement",
    purpose:
      "Explains what the fictional decision does not establish.",
    example:
      "Does not prove harmful intent, privileged action, complete scope, or service impact",
  },
  {
    field: "Next owner and deadline",
    purpose:
      "Connects the fictional decision to accountable next work.",
    example:
      "Source owner validates extension evidence by 09:45",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines fictional evidence, deadline, scope, impact, or source-health condition that requires reassessment.",
    example:
      "Extension-source recovery, new session, changed destination, or missed deadline",
  },
  {
    field: "Expiration or closure effect",
    purpose:
      "Prevents fictional decisions from remaining valid after context changes.",
    example:
      "Decision expires when source state changes or after sixty minutes",
  },
];

const privacyControls = [
  {
    control: "Purpose limitation",
    practice:
      "Every fictional field, note, attachment, request, and communication must support a documented case question or lifecycle need.",
    failure:
      "Interesting but unnecessary information expands the case.",
  },
  {
    control: "Data minimization",
    practice:
      "Use fictional categories, identifiers, counts, and bounded records instead of complete personal, content, or operational histories.",
    failure:
      "Case notes become privacy-heavy and difficult to share safely.",
  },
  {
    control: "Role-based access",
    practice:
      "Limit fictional case sections to analysts, source owners, service owners, privacy reviewers, risk owners, or leadership roles that need them.",
    failure:
      "Sensitive context reaches unnecessary audiences.",
  },
  {
    control: "Need-to-know communication",
    practice:
      "Send fictional owners only the questions and evidence required for their decision.",
    failure:
      "Parallel escalation spreads unrelated case information.",
  },
  {
    control: "Retention and deletion",
    practice:
      "Document fictional retention, archival, deletion, and portfolio boundaries for case records and attachments.",
    failure:
      "Case data remains indefinitely without purpose.",
  },
  {
    control: "Public-safe transformation",
    practice:
      "For portfolio work, replace every fictional organization, identity, source, service, field, owner, date, decision, and outcome with invented material from the start.",
    failure:
      "Sanitized real cases may still reveal internal patterns or context.",
  },
  {
    control: "Attachment discipline",
    practice:
      "Avoid fictional attachments when a bounded note or evidence reference is sufficient.",
    failure:
      "Screenshots and exports may contain unrelated fields or hidden metadata.",
  },
  {
    control: "Correction and access history",
    practice:
      "Preserve fictional corrections, note authorship, changes, and access expectations.",
    failure:
      "Silent edits or unclear ownership reduce trust.",
  },
];

const caseStates = [
  {
    state: "New",
    noteRequirement:
      "Fictional intake note, neutral observation, primary question, owner, priority, source health, and initial deadline.",
    transition:
      "Move to In Review when structured review begins.",
    aging:
      "Alert if ownership or first-review deadline is missed.",
  },
  {
    state: "In Review",
    noteRequirement:
      "Fictional evidence ledger, questions, chronology, source-health review, alternatives, owner requests, and current limitations.",
    transition:
      "Move when evidence supports Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or another defined state.",
    aging:
      "Alert when open questions or owner requests exceed deadlines.",
  },
  {
    state: "Conditional",
    noteRequirement:
      "Fictional supported observation, unresolved context, affected confidence, owners, evidence requests, and review triggers.",
    transition:
      "Move when authorization, source health, impact, scope, or owner evidence changes.",
    aging:
      "Require exact unresolved questions rather than an indefinite holding label.",
  },
  {
    state: "Expected",
    noteRequirement:
      "Fictional current approval, purpose, scope, identity, service, destination, timing, source health, owner, and expiration.",
    transition:
      "Move when the expected window ends, scope changes, evidence degrades, or validation fails.",
    aging:
      "Review before authorization or change context expires.",
  },
  {
    state: "Source-Degraded",
    noteRequirement:
      "Fictional affected sources, fields, periods, populations, confidence limits, alternate evidence, owner, and recovery plan.",
    transition:
      "Move after recovery validation, alternate evidence, escalation, or a documented Unknown conclusion.",
    aging:
      "Escalate broad or prolonged source loss.",
  },
  {
    state: "Unknown",
    noteRequirement:
      "Fictional evidence reviewed, unresolved conflicts or gaps, owner attempts, limitations, and conditions for future reassessment.",
    transition:
      "Move when new evidence, source recovery, owner response, or scope change supports another state.",
    aging:
      "Review whether the decision can remain open, close with residual risk, or escalate.",
  },
  {
    state: "Escalated",
    noteRequirement:
      "Fictional trigger, level, bounded questions, owners, handoff acceptance, deadlines, parallel work, and de-escalation criteria.",
    transition:
      "Move after escalated questions are resolved or trigger conditions change.",
    aging:
      "Activate alternate owners or leadership paths when deadlines are missed.",
  },
  {
    state: "Resolved",
    noteRequirement:
      "Fictional questions answered, source health reviewed, authorization resolved, scope and impact documented, actions validated, residual risk assigned, closure approved, and reopen triggers recorded.",
    transition:
      "Move to Reopened when a documented trigger occurs.",
    aging:
      "Schedule review when residual risk or follow-up remains.",
  },
  {
    state: "Reopened",
    noteRequirement:
      "Fictional reopen trigger, new evidence, preserved original chronology, changed assumptions, new scope, owners, and current state.",
    transition:
      "Return to an evidence-supported active or resolved state.",
    aging:
      "Ensure reopened work is not treated as a separate unrelated case.",
  },
];

const closureCriteria = [
  {
    criterion: "Primary question resolved",
    evidence:
      "Fictional final observation, supported interpretation, alternatives, confidence, and non-proof statement are documented.",
    weakClosure:
      "The alert stopped or the title changed.",
  },
  {
    criterion: "Evidence provenance complete",
    evidence:
      "Fictional evidence IDs, sources, timing, health, transformations, owners, and limitations are traceable.",
    weakClosure:
      "The analyst remembers which evidence was used.",
  },
  {
    criterion: "Authorization and ownership resolved",
    evidence:
      "Fictional approval, assignment, extension, purpose, scope, owner, and lifecycle state are current enough.",
    weakClosure:
      "An owner verbally said the activity was normal.",
  },
  {
    criterion: "Scope and impact documented",
    evidence:
      "Fictional affected and unaffected identities, devices, services, destinations, users, periods, active effect, and recoverability are recorded.",
    weakClosure:
      "Only the first alert subject was reviewed.",
  },
  {
    criterion: "Source health reconciled",
    evidence:
      "Fictional required sources are Healthy enough or remaining Degraded, Blind, Conflicting, or Recovering gaps are explicitly accepted.",
    weakClosure:
      "The source is connected again.",
  },
  {
    criterion: "Actions validated",
    evidence:
      "Fictional revocation, session closure, service recovery, mapping correction, documentation update, or tuning change passed defined validation.",
    weakClosure:
      "An action was performed.",
  },
  {
    criterion: "Owner decisions complete",
    evidence:
      "Fictional identity, service, source, supplier, change, privacy, quality, risk, or leadership owners completed assigned decisions.",
    weakClosure:
      "The case owner closed open requests.",
  },
  {
    criterion: "Residual risk and reopening documented",
    evidence:
      "Fictional remaining uncertainty, accepted risk, owner, review date, reopen triggers, and follow-up are recorded.",
    weakClosure:
      "No more work is planned.",
  },
];

const validationCases = [
  {
    id: "CASE-T01",
    type: "Neutral intake",
    fictionalInput:
      "A High alert title claims confirmed misuse, but evidence only shows a role Active after expiration.",
    expected:
      "Case intake rewrites the observation neutrally and records the bounded authorization question.",
    protects:
      "Bias and unsupported certainty.",
  },
  {
    id: "CASE-T02",
    type: "Evidence-layer separation",
    fictionalInput:
      "Derived authorization.state is entered as a direct source fact.",
    expected:
      "Note is corrected to show source fields, transformation, derived value, and limitation.",
    protects:
      "Provenance integrity.",
  },
  {
    id: "CASE-T03",
    type: "Out-of-order evidence",
    fictionalInput:
      "Revocation occurred before session closure but arrived later.",
    expected:
      "Chronology preserves event order and collection delay separately.",
    protects:
      "Timeline accuracy.",
  },
  {
    id: "CASE-T04",
    type: "Duplicate replay",
    fictionalInput:
      "Three alerts share one event ID during source recovery.",
    expected:
      "Evidence ledger marks replay relationship without deleting legitimate distinct state changes.",
    protects:
      "Scope and count accuracy.",
  },
  {
    id: "CASE-T05",
    type: "Owner statement",
    fictionalInput:
      "Service owner says there is no impact, but application source is Degraded.",
    expected:
      "Note records the statement, source limitation, time, scope, and need for alternate validation.",
    protects:
      "Owner-evidence quality.",
  },
  {
    id: "CASE-T06",
    type: "Action versus outcome",
    fictionalInput:
      "Role revocation is recorded as case resolution before session and group validation.",
    expected:
      "Action note remains separate from validation and outcome notes.",
    protects:
      "Premature closure.",
  },
  {
    id: "CASE-T07",
    type: "Correction",
    fictionalInput:
      "An earlier note confused role assignment with effective access.",
    expected:
      "Transparent correction preserves original chronology and explains the change.",
    protects:
      "Auditability and trust.",
  },
  {
    id: "CASE-T08",
    type: "Privacy boundary",
    fictionalInput:
      "Case note includes unrelated personal and device history.",
    expected:
      "Privacy review fails; unnecessary content is removed and field purpose is documented.",
    protects:
      "Data minimization.",
  },
  {
    id: "CASE-T09",
    type: "Escalation handoff",
    fictionalInput:
      "Case ownership is transferred without receiving-owner acceptance or a bounded question.",
    expected:
      "Handoff is corrected and original case owner retains coordination.",
    protects:
      "Ownership continuity.",
  },
  {
    id: "CASE-T10",
    type: "Closure",
    fictionalInput:
      "Alerts stop after revocation, but source recovery and residual risk remain incomplete.",
    expected:
      "Case remains Conditional or Source-Degraded until closure criteria pass.",
    protects:
      "Evidence-based lifecycle.",
  },
  {
    id: "CASE-T11",
    type: "Reopening",
    fictionalInput:
      "Recovery replay reveals a second session during the original period.",
    expected:
      "Case reopens with original chronology preserved and scope reassessed.",
    protects:
      "Historical continuity.",
  },
  {
    id: "CASE-T12",
    type: "Public portfolio",
    fictionalInput:
      "Student plans to sanitize a real case by changing names.",
    expected:
      "Portfolio validation fails; every organization, source, record, owner, date, and outcome must be invented from the start.",
    protects:
      "Confidentiality and safety.",
  },
];

const qualityMetrics = [
  {
    metric: "Note neutrality",
    question:
      "Do fictional case notes distinguish observations from intent, cause, scope, impact, and final outcomes?",
    evidence:
      "Quality audits, corrected notes, reviewer feedback, and closure reviews.",
    limitation:
      "Neutral language does not guarantee complete evidence.",
  },
  {
    metric: "Evidence traceability",
    question:
      "Can fictional facts, fields, owner statements, hypotheses, decisions, and outcomes be traced to evidence IDs and source health?",
    evidence:
      "Evidence ledger, note links, source references, timing, transformations, and owner records.",
    limitation:
      "Traceable evidence may still be incomplete or incorrect.",
  },
  {
    metric: "Chronology accuracy",
    question:
      "Do fictional case records preserve event, collection, processing, note, action, and validation times correctly?",
    evidence:
      "Timeline review, out-of-order cases, replay records, corrections, and source delays.",
    limitation:
      "Accurate timestamps may still have source-clock uncertainty.",
  },
  {
    metric: "Decision-log completeness",
    question:
      "Do fictional decisions include owner, evidence, alternatives, limitations, confidence, severity, priority, next owner, and review trigger?",
    evidence:
      "Decision log, state transitions, reopened cases, quality reviews, and owner feedback.",
    limitation:
      "Complete decisions can still rely on stale context.",
  },
  {
    metric: "Action-validation separation",
    question:
      "Do fictional notes separate action initiated, action completed, validation performed, and outcome observed?",
    evidence:
      "Action log, validation log, rollback, reopen rate, and closure review.",
    limitation:
      "Passing validation covers only the checks performed.",
  },
  {
    metric: "Owner and deadline quality",
    question:
      "Do fictional questions, actions, escalations, and residual risks have accountable owners and current deadlines?",
    evidence:
      "Owner matrix, response log, missed deadlines, aging, alternate paths, and case state.",
    limitation:
      "Assigned ownership does not guarantee response quality.",
  },
  {
    metric: "Closure quality",
    question:
      "Do fictional cases close only after evidence, source health, authorization, scope, impact, actions, validation, owners, residual risk, and reopen criteria are complete?",
    evidence:
      "Closure checklist, reopen rate, failed validations, residual-risk records, and review audits.",
    limitation:
      "Low reopen rate may reflect weak detection of reopen conditions.",
  },
  {
    metric: "Case debt",
    question:
      "Which fictional notes, evidence links, owner records, state transitions, actions, validations, closure fields, or reopen criteria are stale or unresolved?",
    evidence:
      "Debt register, aging report, quality audits, reopened cases, and owner review.",
    limitation:
      "Counting debt does not identify mission impact by itself.",
  },
];

const evidenceMatrix = [
  {
    id: "CASE-E01",
    source: "Fictional intake record",
    observation:
      "The case title is neutral, but the opening note repeats the alert's claim of confirmed misuse.",
    supports:
      "The intake note contains unsupported interpretation.",
    limits:
      "The wording error does not prove the evidence review itself is incorrect.",
    use:
      "Correct the note transparently and restate the primary defender question.",
  },
  {
    id: "CASE-E02",
    source: "Fictional evidence ledger",
    observation:
      "Role source is Healthy and Active; group source is Degraded and Active; extension source is Conditional and delayed.",
    supports:
      "Role assignment appears active while effective-access and authorization confidence remain limited.",
    limits:
      "The evidence does not prove misuse, intent, or service impact.",
    use:
      "Document separate confidence statements and targeted owner requests.",
  },
  {
    id: "CASE-E03",
    source: "Fictional chronology",
    observation:
      "Revocation event occurred at 09:04 but arrived at 09:19 after session evidence.",
    supports:
      "Collection order differs from event order.",
    limits:
      "The timeline does not prove source clocks are perfectly aligned.",
    use:
      "Preserve event-time sequence and collection delay.",
  },
  {
    id: "CASE-E04",
    source: "Fictional decision log",
    observation:
      "Decision D-04 sets state Conditional and priority High but does not list limitations or review triggers.",
    supports:
      "The decision may be reasonable but incomplete for future review.",
    limits:
      "The missing fields do not prove the state or priority is wrong.",
    use:
      "Add limitations, alternatives, owner deadline, source-health trigger, and expiration.",
  },
  {
    id: "CASE-E05",
    source: "Fictional action log",
    observation:
      "Role revocation is marked Completed, but group state, sessions, and source recovery have not been validated.",
    supports:
      "The action occurred but the intended outcome is not fully verified.",
    limits:
      "The action record does not prove the revocation failed.",
    use:
      "Keep validation and closure work open.",
  },
  {
    id: "CASE-E06",
    source: "Fictional communication log",
    observation:
      "Identity owner responded, source owner accepted the handoff, but service-impact question has no owner.",
    supports:
      "Case coordination remains incomplete.",
    limits:
      "The missing owner does not prove service impact exists.",
    use:
      "Assign service owner and deadline before escalation can de-escalate.",
  },
  {
    id: "CASE-E07",
    source: "Fictional privacy review",
    observation:
      "One note includes unrelated personal profile and device-history details.",
    supports:
      "The case exceeds documented purpose and minimization.",
    limits:
      "The privacy finding does not invalidate all case evidence.",
    use:
      "Remove unnecessary content, document correction, and review access and retention.",
  },
  {
    id: "CASE-E08",
    source: "Fictional closure review",
    observation:
      "Alerts stopped and the role is Revoked, but extension-source recovery, historical authorization, residual risk, and reopen criteria remain incomplete.",
    supports:
      "The immediate condition ended while lifecycle closure remains unsupported.",
    limits:
      "The review does not prove the case requires permanent escalation.",
    use:
      "Remain Conditional or Source-Degraded until closure criteria pass.",
  },
];

const commonMistakes = [
  {
    mistake: "The note repeats the alert title as fact",
    observation:
      "A fictional case note says confirmed misuse when the alert only identifies stale authority.",
    impact:
      "Unsupported certainty becomes part of the official record.",
    correction:
      "Use a neutral observation, primary question, evidence, and non-proof statement.",
  },
  {
    mistake: "Facts and hypotheses are mixed",
    observation:
      "A fictional sync-delay hypothesis appears in the chronology without a label.",
    impact:
      "Later reviewers may treat a possible explanation as established fact.",
    correction:
      "Use separate evidence, hypothesis, assumption, decision, and outcome fields.",
  },
  {
    mistake: "Notes are too vague",
    observation:
      "A fictional entry says checked logs and looks okay.",
    impact:
      "Another reviewer cannot reconstruct evidence, source health, question, or decision.",
    correction:
      "Record what was reviewed, what it showed, limitations, owner, and next step.",
  },
  {
    mistake: "Notes are too broad",
    observation:
      "A fictional case includes long unrelated identity, device, and service histories.",
    impact:
      "Privacy, relevance, maintenance, and review quality decrease.",
    correction:
      "Use purpose-limited fields, periods, questions, and evidence references.",
  },
  {
    mistake: "Note order becomes event order",
    observation:
      "A fictional analyst assumes records happened in the order notes were written.",
    impact:
      "Delayed or out-of-order evidence creates false chronology.",
    correction:
      "Separate event, collection, processing, alert, note, action, and validation time.",
  },
  {
    mistake: "Actions are documented as outcomes",
    observation:
      "A fictional role revocation action is labeled resolved before validation.",
    impact:
      "Cases may close while sessions, groups, sources, or impact remain unresolved.",
    correction:
      "Separate action, completion, validation, observed outcome, and closure.",
  },
  {
    mistake: "Decisions lack rationale",
    observation:
      "A fictional case changes from Conditional to Expected with no supporting evidence or owner.",
    impact:
      "Future reviewers cannot defend or reassess the decision.",
    correction:
      "Record evidence, alternatives, limitations, owner, confidence, and review trigger.",
  },
  {
    mistake: "Handoffs remove central ownership",
    observation:
      "A fictional case is transferred to the identity team and disappears from the analyst queue.",
    impact:
      "Deadlines, service questions, source health, and final decisions may be lost.",
    correction:
      "Retain one coordinating case owner and require receiving-owner acceptance.",
  },
  {
    mistake: "Closure is based on silence",
    observation:
      "A fictional case closes because alerts stop after revocation.",
    impact:
      "Source recovery, historical authorization, validation, residual risk, and reopen criteria remain incomplete.",
    correction:
      "Use explicit closure and reopening requirements.",
  },
  {
    mistake: "Real case notes enter the portfolio",
    observation:
      "A fictional learning artifact uses sanitized real owner messages, alert text, timelines, or screenshots.",
    impact:
      "Sensitive people, systems, suppliers, priorities, and defensive processes may still be exposed.",
    correction:
      "Invent every organization, alert, record, identity, service, owner, date, note, decision, and outcome from the start.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the case intake",
    action:
      "Write a fictional case ID, neutral title, alert references, observation, primary question, source health, severity, confidence, priority, owner, and initial state.",
    output:
      "Case intake record.",
    quality:
      "The opening note does not repeat unsupported alert conclusions.",
  },
  {
    step: "2",
    title: "Define scope and privacy",
    action:
      "Document fictional in-scope identities, devices, services, destinations, periods, questions, evidence categories, out-of-scope areas, access, retention, and portfolio boundary.",
    output:
      "Scope and privacy statement.",
    quality:
      "Every field supports a documented case purpose.",
  },
  {
    step: "3",
    title: "Build the evidence ledger",
    action:
      "Record fictional evidence IDs, sources, timing, health, observations, supports, non-proof limits, owners, and references.",
    output:
      "Evidence ledger.",
    quality:
      "Direct evidence, normalization, enrichment, derived context, owner statements, and hypotheses remain separate.",
  },
  {
    step: "4",
    title: "Build the chronology",
    action:
      "Order fictional events, evidence arrival, notes, owner responses, decisions, actions, and validation using separate time types.",
    output:
      "Case chronology.",
    quality:
      "Delay, duplicates, replay, out-of-order arrival, blind periods, and corrections remain visible.",
  },
  {
    step: "5",
    title: "Create the question register",
    action:
      "Write fictional primary and supporting questions with purpose, evidence need, owner, deadline, state, answer, limitation, and next step.",
    output:
      "Question and evidence-request register.",
    quality:
      "Every evidence request answers a documented question.",
  },
  {
    step: "6",
    title: "Create the hypothesis register",
    action:
      "Compare fictional extension delay, synchronization delay, maintenance, replay, stale ownership, and normalization alternatives.",
    output:
      "Hypothesis and alternative matrix.",
    quality:
      "Each hypothesis has supporting, contradicting, and next evidence.",
  },
  {
    step: "7",
    title: "Create the decision and action logs",
    action:
      "Record fictional state, priority, escalation, owner, action, validation, outcome, rollback, limitation, and review trigger.",
    output:
      "Decision log and action-validation log.",
    quality:
      "Actions are never treated as successful outcomes without validation.",
  },
  {
    step: "8",
    title: "Create the communication log",
    action:
      "Record fictional owner requests, responses, recipients, deadlines, handoff acceptance, parallel work, and unresolved questions.",
    output:
      "Communication and handoff register.",
    quality:
      "One coordinating owner preserves the complete case.",
  },
  {
    step: "9",
    title: "Evaluate closure and reopening",
    action:
      "Review fictional question resolution, source health, authorization, scope, impact, owner actions, validation, residual risk, closure owner, and reopen triggers.",
    output:
      "Closure and reopening checklist.",
    quality:
      "Alert silence or elapsed time cannot substitute for evidence.",
  },
  {
    step: "10",
    title: "Prepare the portfolio package",
    action:
      "Combine the fictional intake, scope, ledger, chronology, questions, hypotheses, decisions, actions, communications, state changes, closure, reopening, metrics, debt, and reflection.",
    output:
      "Public-safe Case Management and Notes Package.",
    quality:
      "Every organization, alert, record, identity, service, owner, date, note, decision, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of a fictional case note?",
    choices: [
      "To create the longest possible record.",
      "To preserve what was observed, reviewed, decided, requested, completed, limited, and still unresolved so another reviewer can reconstruct the case.",
      "To repeat the alert title.",
      "To replace evidence references.",
    ],
    answer: 1,
    explanation:
      "Professional notes preserve decision context and continuity without becoming broad or unsupported narratives.",
  },
  {
    question:
      "Which fictional note is strongest?",
    choices: [
      "User looks suspicious.",
      "Checked everything; probably fine.",
      "Role source records Active after approval_end; extension evidence is Conditional and delayed. Authorization remains unresolved. Identity and source owners assigned bounded questions.",
      "High alert confirmed.",
    ],
    answer: 2,
    explanation:
      "The strongest note uses neutral evidence, source health, a bounded conclusion, ownership, and uncertainty.",
  },
  {
    question:
      "Why should action and outcome remain separate?",
    choices: [
      "Because actions are never useful.",
      "Because performing an action does not prove the intended state was achieved or validated.",
      "Because outcomes happen before actions.",
      "Because validation is optional.",
    ],
    answer: 1,
    explanation:
      "A role-revocation action, for example, does not prove sessions, groups, services, or source records reached the intended state.",
  },
  {
    question:
      "A fictional owner says there is no impact, but the application source is Degraded. How should the note handle this?",
    choices: [
      "Record no impact as confirmed.",
      "Ignore the owner statement.",
      "Record the statement with time, scope, source limitation, and need for alternate validation.",
      "Close the case.",
    ],
    answer: 2,
    explanation:
      "Owner evidence is useful, but source health and validation limitations should remain visible.",
  },
  {
    question:
      "Which fictional correction practice is strongest?",
    choices: [
      "Silently edit the old note.",
      "Delete the incorrect note.",
      "Add a timestamped correction explaining what changed and preserve the original chronology.",
      "Leave the error unaddressed.",
    ],
    answer: 2,
    explanation:
      "Transparent corrections preserve trust, reviewability, and case history.",
  },
  {
    question:
      "When is a fictional case ready for closure?",
    choices: [
      "When alerts stop.",
      "When the case becomes old.",
      "When evidence, source health, authorization, scope, impact, owner actions, validation, residual risk, closure criteria, and reopen criteria are complete enough.",
      "When one owner says it is done.",
    ],
    answer: 2,
    explanation:
      "Closure is an evidence and lifecycle decision, not a silence or age decision.",
  },
  {
    question:
      "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real case by changing names.",
      "Use real timestamps and owner messages without service names.",
      "Invent every organization, alert, record, identity, service, owner, date, note, decision, and outcome.",
      "Use real screenshots with blurred details.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, systems, suppliers, priorities, and defensive workflows.",
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
        Module A6
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

export default function CaseManagementAndNotesPage() {
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
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Chronology, Evidence, Decisions, Actions, Closure, and Reopening
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.7 Case Management and Notes
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional analysts create professional case records that
            preserve evidence, source health, chronology, questions,
            hypotheses, ownership, decisions, actions, communication,
            uncertainty, privacy, validation, closure, and reopening.
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
          lessonTitle="Case Management and Notes"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, records, identities, devices, services, destinations, owners, notes, dates, decisions, actions, and outcomes.",
            "I will separate fictional facts, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, actions, and outcomes.",
            "I will preserve evidence provenance, source health, timing, questions, limitations, owners, deadlines, state changes, and review triggers.",
            "I will write notes that are concise, neutral, purpose-limited, privacy-aware, and understandable to another reviewer.",
            "I will not treat alert silence, action completion, or one owner statement as proof of resolution.",
            "I will not access, copy, sanitize, upload, review, manage, document, close, reopen, or modify any real alert, case, SIEM, account, endpoint, network, domain, service, supplier, organization, communication, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Case Note Should Let Another Reviewer Rebuild the Decision"
        >
          <p className="leading-8">
            A fictional analyst writes, “User had suspicious access. Identity
            team fixed it. Case closed.” The note is short, but it does not show
            what evidence existed, which source was healthy, what authorization
            question mattered, what action occurred, whether sessions closed,
            whether the source recovered, who validated the outcome, or what
            would reopen the case. A professional note is not necessarily much
            longer—it is more structured.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak note
              </p>
              <p className="mt-2 leading-7">
                “User had suspicious access. Identity team fixed it. Closed.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong note
              </p>
              <p className="mt-2 leading-7">
                “Role and session remained Active after approval_end. Extension
                evidence was delayed and group evidence Degraded. Identity owner
                initiated revocation; role and session closure validated.
                Historical authorization and source reconciliation remain open,
                so case stays Conditional.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Strong case notes preserve evidence and uncertainty without becoming
            a transcript of everything that happened.
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
          title="Case Records Protect Continuity, Accountability, and Learning"
        >
          <p className="leading-8">
            Fictional alerts may involve several analysts, owners, sources,
            services, decisions, actions, and review periods. A good case record
            prevents duplicated work, missing ownership, lost evidence,
            unsupported conclusions, privacy-heavy notes, premature closure,
            and inconsistent reopening. It also creates the evidence needed to
            improve detections, runbooks, source quality, training, and
            leadership decisions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Operational continuity",
                "Preserve fictional chronology, evidence, questions, owners, deadlines, decisions, actions, and state changes.",
              ],
              [
                "Decision accountability",
                "Show fictional who decided what, using which evidence, under which limitations, and with which review triggers.",
              ],
              [
                "Quality improvement",
                "Use fictional case patterns to improve alerts, source health, escalation, closure, training, privacy, and metrics.",
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
          title="The C-A-S-E-N-O-T-E Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "C — Capture neutral context",
                "Record the fictional case identity, observation, primary question, scope, severity, confidence, priority, source health, and non-proof statement.",
              ],
              [
                "A — Anchor every fact",
                "Link fictional facts and decisions to evidence IDs, provenance, timing, source health, owners, and limitations.",
              ],
              [
                "S — Separate evidence layers",
                "Distinguish fictional direct records, normalized fields, enrichment, derived context, owner statements, hypotheses, decisions, actions, and outcomes.",
              ],
              [
                "E — Establish chronology",
                "Preserve fictional event, collection, processing, alert, note, action, validation, and state-transition times.",
              ],
              [
                "N — Name questions and owners",
                "Track fictional primary and supporting questions, evidence needs, accountable owners, deadlines, status, and next steps.",
              ],
              [
                "O — Organize decisions and actions",
                "Record fictional rationale, alternatives, limitations, authorization, validation, rollback, and outcomes.",
              ],
              [
                "T — Track states and aging",
                "Maintain fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states.",
              ],
              [
                "E — Exit with evidence",
                "Use fictional closure, residual risk, follow-up, review dates, and reopen criteria rather than silence or elapsed time.",
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
              Decision-ready case statement
            </p>
            <p className="mt-2 leading-7">
              This fictional case remains Conditional because role and session
              evidence support continuing authority after expiration, extension
              evidence was delayed, group evidence is Recovering, the immediate
              active condition ended after validated revocation, and historical
              authorization, source reconciliation, residual risk, and reopen
              criteria remain incomplete.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Case Management and Notes"
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
            Build a Twelve-Section Case Record
          </h2>

          <div className="mt-6 grid gap-5">
            {caseSections.map((item) => (
              <article
                key={item.section}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.section}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required fields
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.requiredFields}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Quality risk
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.qualityRisk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong practice
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongPractice}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Write Eleven Professional Note Types"
        >
          <div className="grid gap-5">
            {noteTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.type}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

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
          eyebrow="Instructional Section 3"
          title="Separate Eight Evidence and Decision Layers"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.layer}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Strong note language
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.noteLanguage}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Use Eight Chronology Rules"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {chronologyRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.rule}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.explanation}
                </p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Build a Twelve-Field Decision Log"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Field", "Purpose", "Fictional example"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {decisionLogFields.map((row) => (
                  <tr key={row.field}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.field}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.purpose}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Apply Eight Privacy and Information Controls"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {privacyControls.map((item) => (
              <article
                key={item.control}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.control}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.practice}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure mode
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Document Nine Case States"
        >
          <div className="grid gap-5">
            {caseStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.state}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Note requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.noteRequirement}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Transition
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.transition}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Aging rule
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.aging}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Require Eight Closure Criteria"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {closureCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.criterion}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak closure
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.weakClosure}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Validate Twelve Case-Management Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Case",
                    "Type",
                    "Fictional input",
                    "Expected result",
                    "Quality protected",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">
                      {row.id}
                    </td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.fictionalInput}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.expected}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.protects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 10"
          title="Measure Eight Case-Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityMetrics.map((item) => (
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
          eyebrow="Fictional Case Architecture"
          title="Northbridge Alert-to-Case Lifecycle"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches case management without
            real alerts, identities, services, owners, screenshots, notes,
            communications, suppliers, incidents, or internal workflows.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Alert inputs", "Observation, severity, confidence, priority, source health"],
                ["Evidence inputs", "Records, fields, timing, owners, limitations"],
                ["Review inputs", "Questions, hypotheses, alternatives, scope, impact"],
                ["Lifecycle inputs", "States, deadlines, escalation, validation, closure"],
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
                Fictional Case Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Intake", "Case ID, neutral summary, question, owner, state"],
                  ["Ledger", "Evidence, source health, timing, supports, limits"],
                  ["Chronology", "Events, notes, responses, decisions, actions"],
                  ["Questions", "Purpose, evidence need, owner, deadline, answer"],
                  ["Decisions", "Rationale, alternatives, limitations, triggers"],
                  ["Actions", "Authorization, completion, validation, outcomes"],
                  ["Communications", "Requests, responses, handoffs, acceptance"],
                  ["Lifecycle", "States, aging, closure, residual risk, reopening"],
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
                ["Analyst output", "Traceable notes, questions, states, decisions"],
                ["Owner output", "Bounded requests, actions, validation, risk"],
                ["Leadership output", "Impact, aging, debt, resources, trends"],
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
          title="Fake Northbridge Case Quality Dashboard"
          subtitle="Fictional note neutrality, evidence traceability, chronology, decision logs, owner deadlines, validation, closure, reopening, privacy, and case debt for training only."
          metrics={[
            {
              label: "Open cases with complete evidence ledgers",
              value: "11 / 16",
              note: "Five fictional cases still lack source-health, timing, limitation, owner, or evidence-layer fields.",
            },
            {
              label: "Open questions beyond deadline",
              value: "6",
              note: "Two identity, one source, one service, one supplier, and one recovery question require aging or escalation.",
            },
            {
              label: "Open fictional case-debt items",
              value: "10",
              note: "Neutrality, chronology, owner acceptance, corrections, validation, privacy, closure, reopening, metrics, and review dates remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Case Closure and Note Quality Require Review"
          severity="High"
          time="5:02 PM"
          source="Fake Northbridge Case Governance Console"
          details="The fictional stale-authority case is marked Resolved because the role was revoked and alerts stopped. The decision log lacks limitations and review triggers, group-source recovery remains incomplete, one service-impact question has no owner, and residual risk plus reopen criteria are missing."
          recommendation="Move the fictional case to Conditional or Source-Degraded. Complete the evidence ledger, decision rationale, service ownership, source reconciliation, action validation, residual risk, closure criteria, and reopen triggers before final closure."
        />

        <FakeLogPanel
          title="Fake Case Management Timeline"
          logs={[
            "09:00 CASE id='CASE-ST-09'",
            "09:01 NOTE intake='created'",
            "09:03 QUESTION primary='stale-authority'",
            "09:05 EVIDENCE role='healthy-active'",
            "09:06 EVIDENCE group='degraded-active'",
            "09:07 EVIDENCE extension='conditional-delay'",
            "09:08 EVIDENCE session='healthy-active'",
            "09:10 STATE in-review='true'",
            "09:15 REQUEST identity-owner='sent'",
            "09:16 REQUEST source-owner='sent'",
            "09:17 REQUEST service-owner='missing'",
            "09:28 RESPONSE identity-owner='received'",
            "09:31 STATE escalated='level-3'",
            "09:41 ACTION role-revocation='initiated'",
            "09:48 VALIDATION role='revoked'",
            "09:49 VALIDATION session='closed'",
            "09:50 SOURCE group='recovering'",
            "09:52 DECISION state='resolved'",
            "09:53 CLOSURE criteria='incomplete'",
            "17:02 ALERT issue='case-quality-review'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Case Evidence Supports—and What It Does Not Prove
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
                    ["Case use", item.use],
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
          title="Which Case State Is Best Supported?"
          question="Which fictional case decision best fits the Northbridge stale-authority record after revocation and session closure?"
          evidence={[
            "Role source reports Revoked and session source reports Closed.",
            "Group source remains Recovering.",
            "Extension-source recovery and historical authorization remain incomplete.",
            "One service-impact question has no assigned owner.",
            "The decision log lacks limitations and review triggers.",
            "Residual risk and reopen criteria are missing.",
            "Alerts stopped after revocation.",
            "The case was marked Resolved based only on the stopped alerts.",
          ]}
          options={[
            "Move the fictional case to Conditional or Source-Degraded until source reconciliation, historical authorization, service ownership, validation, residual risk, closure criteria, and reopen triggers are complete.",
            "Keep Resolved because the alerts stopped.",
            "Mark Expected because the role is now Revoked.",
            "Delete the case because the immediate condition ended.",
          ]}
          bestAnswer={0}
          explanation="The first option recognizes that the immediate condition ended while preserving unresolved evidence, ownership, validation, and lifecycle requirements that prevent defensible closure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Case-Management and Note Errors"
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
          title="Build the Northbridge Case Management and Notes Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, copy, sanitize, upload, review, manage, document, close,
            reopen, query, suppress, investigate, or modify any real alert,
            case, SIEM, source, account, endpoint, network, domain, service,
            supplier, organization, communication, or person.
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
          title="A Note Confuses an Action with an Outcome"
          scenario="A fictional analyst writes, 'Role revoked; case resolved.' The identity owner initiated revocation, but group state, sessions, source recovery, historical authorization, and service impact have not yet been validated."
          choices={[
            {
              label: "Choice A",
              response:
                "Correct the fictional note to separate action initiated, completion, validation, observed outcome, remaining questions, source health, owner assignments, and closure criteria.",
              outcome:
                "Best defensive choice. Performing an action does not prove the intended state or justify closure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the note because revocation usually solves the problem.",
              outcome:
                "Weak. The case still contains unresolved evidence and lifecycle questions.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the action note and wait for alerts to stop.",
              outcome:
                "Weak. The action and its validation should remain traceable.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Recovery Replay Reveals a Second Session"
          scenario="A fictional case was closed after role revocation and session closure. During source recovery, replayed evidence reveals a second session during the original alert period."
          choices={[
            {
              label: "Choice A",
              response:
                "Reopen the fictional case, preserve the original chronology and decisions, add the new evidence, reassess scope and authorization, assign owners, and document why the prior closure no longer fully applies.",
              outcome:
                "Best choice. Reopening should extend the original evidence history rather than create an unrelated review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the replay because the case was already closed.",
              outcome:
                "Weak. New evidence can change scope and the prior decision.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Create a brand-new unrelated case and delete the old one.",
              outcome:
                "Weak. The original chronology and decision context would be lost.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Case Record before a Review Board"
        >
          <p className="leading-8">
            Fictional Northbridge presents a case with strong evidence but weak
            notes. The opening summary repeats the alert title, event and note
            time are mixed, one hypothesis is labeled fact, the decision log
            lacks limitations, the action log treats revocation as resolution,
            the service-impact question has no owner, and closure lacks residual
            risk or reopen criteria.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend intake and scope",
                "Explain fictional case identity, neutral observation, primary question, source health, severity, confidence, priority, scope, exclusions, and privacy boundary.",
              ],
              [
                "Defend evidence and chronology",
                "Explain fictional evidence IDs, provenance, time types, health, supports, limitations, duplicates, replay, blind periods, and corrections.",
              ],
              [
                "Defend questions and hypotheses",
                "Explain fictional decision questions, evidence requests, owners, deadlines, alternatives, supporting evidence, contradicting evidence, and next tests.",
              ],
              [
                "Defend decisions and actions",
                "Explain fictional rationale, owner authority, confidence, severity, priority, actions, validation, rollback, outcomes, and review triggers.",
              ],
              [
                "Defend communication and ownership",
                "Explain fictional requests, responses, handoffs, acceptance, parallel owners, coordinator, deadlines, aging, and unresolved questions.",
              ],
              [
                "Defend closure and reopening",
                "Explain fictional question resolution, source health, authorization, scope, impact, owner actions, validation, residual risk, closure owner, and reopen triggers.",
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
              Produce a fictional case charter, intake record, scope statement,
              evidence ledger, chronology, question register, hypothesis
              register, decision log, action-validation log, communication log,
              owner matrix, state-transition map, closure checklist, reopen
              register, quality dashboard, case-debt register, residual-risk
              statement, leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Case Management and Notes Checklist"
          items={[
            "I can create a fictional case identity, neutral title, intake summary, primary question, source-health statement, severity, confidence, priority, owner, and state.",
            "I can separate fictional facts, observations, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, actions, and outcomes.",
            "I can preserve fictional evidence IDs, provenance, timing, source health, supports, limitations, owners, and references.",
            "I can build fictional chronology using separate event, collection, processing, alert, note, action, and validation times.",
            "I can document duplicates, replay, out-of-order evidence, blind periods, corrections, and state transitions transparently.",
            "I can create fictional question, hypothesis, decision, action, validation, communication, and residual-risk registers.",
            "I can write fictional notes that are concise, neutral, privacy-aware, traceable, and useful to another reviewer.",
            "I can preserve one fictional coordinating case owner during parallel handoffs and escalations.",
            "I can distinguish fictional action completion from validation and observed outcome.",
            "I can close fictional cases only after evidence, source health, authorization, scope, impact, owner actions, validation, residual risk, and reopen criteria are complete.",
            "I can reopen fictional cases when new evidence, changed scope, failed validation, repeated behavior, or source recovery changes the prior decision.",
            "I can create a completely fictional case artifact without exposing real alerts, records, identities, services, owners, communications, suppliers, or internal workflows.",
          ]}
        />

        <MiniQuiz
          title="A6.7 Mini Quiz: Case Management and Notes"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Case Management and Notes Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, case identifiers, neutral titles, versions, creation times, last-update times, current states, priorities, case owners, reviewers, linked alerts, neutral intake summaries, primary defender questions, supporting questions, non-proof statements, severity, confidence, priority, source-health summaries, in-scope identities, devices, services, destinations, users, environments, periods, evidence categories, out-of-scope boundaries, privacy boundaries, decision boundaries, evidence IDs, source categories, provenance, event time, collection time, processing time, alert time, note time, source health, observations, supports, does-not-prove statements, owners, references, direct source facts, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, actions, outcomes, chronology, out-of-order arrival, duplicates, replay, blind periods, corrections, question IDs, question purpose, evidence needs, question owners, deadlines, question state, answers, limitations, next steps, hypotheses, alternatives, supporting evidence, contradicting evidence, next tests, decision IDs, decision times, decision owners, decision statements, confidence, severity, priority, limitations, next owners, review triggers, expirations, action IDs, action purpose, authorization, action owners, start times, completion times, validation, outcomes, rollback, residual risk, communication IDs, sender roles, recipient roles, purpose, requests, evidence boundaries, response deadlines, responses, acceptance, handoffs, escalation levels, parallel owners, coordinating owners, New state, In Review state, Conditional state, Expected state, Source-Degraded state, Unknown state, Escalated state, Resolved state, Reopened state, state-entry criteria, state-exit criteria, aging rules, closure criteria, reopen triggers, retention, deletion, access roles, attachment discipline, public-safe transformation, note-neutrality metrics, evidence-traceability metrics, chronology-accuracy metrics, decision-log metrics, action-validation metrics, owner-deadline metrics, closure-quality metrics, case debt, owner matrix, change history, quality review, leadership summary, reflection, and a statement that every organization, alert, record, identity, service, owner, date, note, decision, and outcome is invented."
          tips={[
            "Use fictional structure and evidence references instead of long unsupported narratives.",
            "Separate direct evidence, normalization, enrichment, hypotheses, decisions, actions, validation, and outcomes.",
            "Preserve chronology, source health, ownership, deadlines, corrections, privacy, closure, and reopening.",
            "Make another fictional reviewer able to reconstruct why every major state and decision occurred.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Dashboards and Metrics?"
        >
          <p className="leading-8">
            Before moving to A6.8, rate your readiness from 1 to 5 for case
            identity, neutral notes, evidence layers, provenance, timing,
            chronology, questions, hypotheses, decisions, actions, validation,
            communication, ownership, privacy, state transitions, closure,
            reopening, metrics, debt, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can write a fictional case intake without repeating unsupported alert conclusions.",
              "I can separate facts, hypotheses, owner statements, decisions, actions, validation, and outcomes.",
              "I can preserve fictional chronology and evidence traceability.",
              "I can write concise notes that another reviewer can reconstruct.",
              "I can maintain one coordinating owner through parallel handoffs.",
              "I can correct fictional notes transparently without deleting history.",
              "I can use evidence-based closure and reopening criteria.",
              "I can produce a safe fictional case package without copying real notes, alerts, messages, or timelines.",
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
            Record one fictional case note, one evidence ID, one question, one
            decision, one action, one validation, one closure gap, and one
            question you will carry into A6.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional case record should allow another reviewer to reconstruct what was observed, reviewed, decided, requested, completed, limited, and still unresolved.",
            "Facts, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, actions, and outcomes are different note layers.",
            "Strong fictional notes are neutral, traceable, timely, concise, privacy-aware, and linked to evidence, questions, owners, deadlines, and state changes.",
            "Event time, collection time, processing time, alert time, note time, action time, and validation time should remain separate.",
            "Actions should never be treated as successful outcomes without validation.",
            "Decision logs should include evidence, conflicting evidence, alternatives, confidence, severity, priority, limitations, owners, and review triggers.",
            "One coordinating fictional case owner should remain responsible during parallel handoffs and escalations.",
            "Alert silence, elapsed time, or one completed action does not prove case resolution.",
            "Closure requires evidence, source health, authorization, scope, impact, owner actions, validation, residual risk, and reopen criteria.",
            "Every CyberShield case artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how fictional defenders design dashboards and metrics
            that measure alert quality, source health, queue aging, triage
            usefulness, escalation, case closure, coverage, workload, privacy,
            residual risk, and improvement without rewarding the wrong behavior.
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