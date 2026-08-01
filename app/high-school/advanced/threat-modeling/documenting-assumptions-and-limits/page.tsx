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
const previousLesson = `${modulePath}/choosing-mitigations`;
const nextLesson = `${modulePath}/reviewing-a-threat-model`;

const objectives = [
  "Explain why fictional assumptions, limits, exclusions, dependencies, unknowns, and evidence gaps are essential parts of a trustworthy threat model rather than signs of failure.",
  "Write precise fictional assumption statements that identify scope, owner, evidence, confidence, expiration, consequences, and review triggers.",
  "Distinguish fictional observations, interpretations, hypotheses, assumptions, constraints, exclusions, unknowns, decisions, and accepted residual risks.",
  "Evaluate how fictional model limits affect threat categories, risk rankings, mitigation choices, recovery expectations, communication, and stakeholder confidence.",
  "Produce a portfolio-ready fictional assumptions-and-limits register that remains ethical, authorized, defensive, evidence-aware, privacy-safe, non-operational, and completely invented.",
];

const vocabulary = [
  [
    "Assumption",
    "A documented fictional belief used to continue analysis when complete evidence is unavailable, with an owner, confidence level, expiration, consequence, and validation plan.",
  ],
  [
    "Limit",
    "A fictional boundary on what the threat model can reliably describe, conclude, compare, rank, or recommend.",
  ],
  [
    "Constraint",
    "A fictional condition that restricts design, evidence collection, mitigation, timing, resources, authority, technology, supplier options, or recovery choices.",
  ],
  [
    "Exclusion",
    "A fictional asset, actor, environment, workflow, interface, data set, supplier, recovery state, or question intentionally left outside the current model.",
  ],
  [
    "Unknown",
    "A fictional fact, state, owner, behavior, dependency, control condition, or outcome that is not currently established.",
  ],
  [
    "Evidence gap",
    "A fictional missing, stale, incomplete, conflicting, unhealthy, inaccessible, or unowned record needed to support a claim or decision.",
  ],
  [
    "Observation",
    "A fictional fact directly represented by supplied evidence, such as a field appearing in an inventory or a queue delay appearing in a training dashboard.",
  ],
  [
    "Interpretation",
    "A fictional explanation of what an observation may mean, based on context and reasoning rather than direct proof.",
  ],
  [
    "Hypothesis",
    "A fictional, testable explanation for an observation or relationship that has not yet been confirmed.",
  ],
  [
    "Decision",
    "A fictional authorized choice about scope, category, risk, mitigation, evidence, ownership, exception, acceptance, or review.",
  ],
  [
    "Model confidence",
    "A documented fictional judgment about how strongly scope, evidence, ownership, control state, and stakeholder review support the model.",
  ],
  [
    "Assumption confidence",
    "A documented fictional judgment about how strongly available evidence supports one assumption.",
  ],
  [
    "Validity period",
    "The fictional time window during which an assumption or decision remains usable before scheduled review or expiration.",
  ],
  [
    "Expiration",
    "The fictional date or condition after which an assumption, exception, temporary control, or owner decision may no longer be relied upon.",
  ],
  [
    "Review trigger",
    "A fictional event or change that requires an assumption or model limit to be reconsidered before its normal review date.",
  ],
  [
    "Dependency",
    "A fictional service, identity, supplier, process, data source, person, queue, interface, environment, or recovery step on which the model or mitigation relies.",
  ],
  [
    "Scope boundary",
    "The fictional line separating what the current model includes from what it does not analyze.",
  ],
  [
    "Evidence provenance",
    "The fictional source, owner, collection context, timestamp, version, health, transformation, and review history of evidence used in the model.",
  ],
  [
    "Staleness",
    "The fictional risk that a record, diagram, role map, supplier statement, control review, or assumption no longer reflects current conditions.",
  ],
  [
    "Contradictory evidence",
    "Fictional records or owner statements that support different conclusions and therefore require reconciliation rather than silent selection.",
  ],
  [
    "Decision-blocking gap",
    "A fictional unknown or evidence limit serious enough to prevent responsible category assignment, risk ranking, mitigation selection, or residual-risk acceptance.",
  ],
  [
    "Residual uncertainty",
    "The fictional uncertainty that remains even after evidence collection, review, mitigation, or owner decisions.",
  ],
  [
    "Traceability",
    "The fictional connection from an assumption or limit to affected assets, actors, flows, boundaries, abuse cases, categories, risks, mitigations, owners, and review triggers.",
  ],
  [
    "Model caveat",
    "A concise fictional statement explaining a limitation that readers must understand before using the model.",
  ],
];

const documentationPrinciples = [
  {
    principle: "Write assumptions as testable statements",
    description:
      "A strong fictional assumption identifies exactly what is believed, why it matters, what evidence supports it, and what could disprove it.",
    strongPractice:
      "Assume the supplier-result service uses one managed identity for the documented interface until the supplier owner validates current identity and delegation records.",
    failure:
      "Vague statements such as “security is good” cannot be validated, owned, or reviewed.",
  },
  {
    principle: "Separate known from believed",
    description:
      "Distinguish fictional observations from interpretations, hypotheses, assumptions, decisions, and unknowns.",
    strongPractice:
      "Observation: the field appears in the inventory. Assumption: it may be populated in current requests. Unknown: actual current use and retention.",
    failure:
      "Readers may mistake a possibility or interpretation for a confirmed fact.",
  },
  {
    principle: "Name the affected decision",
    description:
      "Every fictional assumption should explain which category, risk ranking, mitigation, recovery, or ownership decision depends on it.",
    strongPractice:
      "The free-text-field assumption blocks final privacy risk ranking and supplier-data mitigation approval.",
    failure:
      "Teams cannot tell which conclusions must change when an assumption changes.",
  },
  {
    principle: "Assign one accountable owner",
    description:
      "A fictional role should be responsible for validating, updating, extending, or retiring each assumption.",
    strongPractice:
      "The fictional supplier owner validates interface identity, fields, retention, and evidence by the review date.",
    failure:
      "Shared responsibility without accountability often leaves assumptions unreviewed.",
  },
  {
    principle: "Record confidence and evidence limits",
    description:
      "Explain how strongly fictional evidence supports the assumption and where source health, coverage, timing, or ownership remains weak.",
    strongPractice:
      "Confidence is Moderate because the interface record is current, but operating evidence and supplier confirmation are incomplete.",
    failure:
      "An assumption may appear equally reliable whether supported by strong evidence or guesswork.",
  },
  {
    principle: "Use expiration and triggers",
    description:
      "Every important fictional assumption should have a review date and change conditions that cause earlier review.",
    strongPractice:
      "Review after supplier version, field schema, identity, queue, recovery, ownership, or contract change.",
    failure:
      "Temporary assumptions become permanent and stale.",
  },
  {
    principle: "Document consequences of failure",
    description:
      "State which fictional conclusions, controls, priorities, or user outcomes may be wrong if the assumption is false.",
    strongPractice:
      "If the queue preserves ordering differently than assumed, stale-state and duplicate-risk rankings must be revised.",
    failure:
      "The team may continue using invalid conclusions after the assumption fails.",
  },
  {
    principle: "Preserve exclusions visibly",
    description:
      "Explain which fictional systems, environments, actors, flows, states, and questions were not analyzed and why.",
    strongPractice:
      "The current model excludes mobile-client behavior and focuses only on the fictional web portal and connected services.",
    failure:
      "Readers may believe the model covers more than it does.",
  },
  {
    principle: "Treat model limits as decision inputs",
    description:
      "Fictional limitations should influence confidence, evidence actions, ranking, mitigation, communication, and review.",
    strongPractice:
      "Decision-blocking uncertainty pauses final residual-risk acceptance.",
    failure:
      "A model can look complete while relying on unsupported conclusions.",
  },
  {
    principle: "Version the register",
    description:
      "Maintain fictional history so readers can understand which assumptions changed, why, who approved the change, and which decisions were updated.",
    strongPractice:
      "Record previous statement, new evidence, revised confidence, affected risks, owner, and approval date.",
    failure:
      "Changes may overwrite the reasoning needed for accountability and learning.",
  },
];

const statementTypes = [
  {
    type: "Observation",
    definition:
      "A fictional fact directly shown by supplied evidence.",
    example:
      "The fictional queue dashboard shows a twenty-two-minute result delay while source health remains Green.",
    use:
      "Supports evidence review and prompts interpretation.",
    warning:
      "The observation does not prove cause, harm, compromise, or future frequency.",
  },
  {
    type: "Interpretation",
    definition:
      "A fictional explanation of what an observation may indicate.",
    example:
      "The Green health indicator may represent connectivity rather than event freshness or business completion.",
    use:
      "Guides defensive questions and evidence requests.",
    warning:
      "An interpretation must not be presented as direct evidence.",
  },
  {
    type: "Hypothesis",
    definition:
      "A fictional explanation that can be checked using safe, supplied evidence.",
    example:
      "The delayed results may have contributed to stale user status and duplicate submissions.",
    use:
      "Supports structured evidence analysis.",
    warning:
      "Correlation does not prove one cause.",
  },
  {
    type: "Assumption",
    definition:
      "A fictional belief temporarily relied upon so the model can continue.",
    example:
      "Assume queue result ordering is preserved unless supplier or queue evidence shows otherwise.",
    use:
      "Enables provisional modeling while keeping uncertainty visible.",
    warning:
      "The assumption requires an owner, confidence, expiration, consequence, and validation plan.",
  },
  {
    type: "Unknown",
    definition:
      "A fictional fact or state that is not established.",
    example:
      "Current population and supplier retention of the free-text support-note field are unknown.",
    use:
      "Identifies evidence work and possible decision blocking.",
    warning:
      "Unknown does not mean Low risk or Very High risk by itself.",
  },
  {
    type: "Constraint",
    definition:
      "A fictional restriction on possible design, timing, evidence, mitigation, or recovery choices.",
    example:
      "The fictional supplier cannot be replaced during the current quarter.",
    use:
      "Shapes feasible mitigation options and compensating controls.",
    warning:
      "A constraint should not silently become an excuse for indefinite risk acceptance.",
  },
  {
    type: "Exclusion",
    definition:
      "A fictional item intentionally outside the current model.",
    example:
      "The current threat model excludes the fictional mobile application and focuses on the web portal.",
    use:
      "Prevents overclaiming scope and informs follow-up work.",
    warning:
      "Exclusions that affect major dependencies or user outcomes may require a separate model.",
  },
  {
    type: "Decision",
    definition:
      "A fictional authorized choice based on current evidence and constraints.",
    example:
      "The fictional risk owner approves a provisional High residual ranking pending supplier evidence.",
    use:
      "Records accountability and the current action path.",
    warning:
      "A decision should state conditions, owner, date, evidence, and review triggers.",
  },
  {
    type: "Residual risk acceptance",
    definition:
      "A fictional authorized decision to tolerate remaining risk under defined conditions.",
    example:
      "The fictional owner accepts temporary manual-review delay until the state-validation control is implemented.",
    use:
      "Makes temporary or permanent risk ownership explicit.",
    warning:
      "Acceptance must not be implied by inaction.",
  },
  {
    type: "Model caveat",
    definition:
      "A concise fictional statement readers must understand before using the model.",
    example:
      "The model uses exercise evidence and does not establish current production frequency.",
    use:
      "Improves responsible communication.",
    warning:
      "Caveats should not be buried where decision-makers cannot see them.",
  },
];

const assumptionFields = [
  {
    field: "Assumption identifier",
    purpose:
      "Give the fictional assumption a stable reference for risks, mitigations, decisions, and reviews.",
    strongExample:
      "ASM-07",
    weakExample:
      "Assumption about supplier.",
  },
  {
    field: "Precise statement",
    purpose:
      "State exactly what the fictional model believes.",
    strongExample:
      "The supplier-result interface uses one managed service identity and does not delegate authority to additional downstream identities.",
    weakExample:
      "The supplier identity is secure.",
  },
  {
    field: "Reason for use",
    purpose:
      "Explain why the model needs the fictional assumption.",
    strongExample:
      "The identity relationship is required to evaluate trust boundaries, authorization, evidence, and recovery ownership.",
    weakExample:
      "We need to assume something.",
  },
  {
    field: "Supporting evidence",
    purpose:
      "List the fictional records that support the assumption.",
    strongExample:
      "Interface inventory, service-identity record, architecture diagram, and supplier-owner statement.",
    weakExample:
      "The documentation.",
  },
  {
    field: "Evidence limits",
    purpose:
      "Explain missing, stale, conflicting, unhealthy, transformed, or unowned evidence.",
    strongExample:
      "The service-identity record is current, but delegation, operating events, and supplier confirmation are incomplete.",
    weakExample:
      "Evidence may be incomplete.",
  },
  {
    field: "Confidence",
    purpose:
      "Rate how strongly fictional evidence supports the statement.",
    strongExample:
      "Moderate confidence because design evidence is current but operating evidence is partial.",
    weakExample:
      "Probably correct.",
  },
  {
    field: "Affected decisions",
    purpose:
      "Identify which fictional categories, risks, mitigations, owners, or recovery plans depend on the assumption.",
    strongExample:
      "Supplier trust-boundary model, identity risk, logging design, and recovery validation.",
    weakExample:
      "Security decisions.",
  },
  {
    field: "Consequence if false",
    purpose:
      "Explain what fictional conclusions may need revision.",
    strongExample:
      "If delegation exists, actor attribution, least privilege, monitoring, supplier ownership, and residual risk must be reassessed.",
    weakExample:
      "Risk could increase.",
  },
  {
    field: "Validation action",
    purpose:
      "Describe the safe fictional evidence needed to confirm, revise, or retire the assumption.",
    strongExample:
      "Supplier owner reviews the invented identity relationship record and supplied event schema.",
    weakExample:
      "Test the system.",
  },
  {
    field: "Owner",
    purpose:
      "Assign one fictional role accountable for review.",
    strongExample:
      "Fictional supplier integration owner.",
    weakExample:
      "Security team.",
  },
  {
    field: "Review date and expiration",
    purpose:
      "Define when reliance must stop or be reconsidered.",
    strongExample:
      "Review by October 15; expires after supplier identity, interface, contract, or recovery change.",
    weakExample:
      "Review later.",
  },
  {
    field: "Status and history",
    purpose:
      "Track whether the fictional assumption is open, validated, revised, rejected, expired, replaced, or retired.",
    strongExample:
      "Open—version 2, revised after interface-schema update.",
    weakExample:
      "Active.",
  },
];

const limitFamilies = [
  {
    family: "Scope limits",
    description:
      "The fictional model covers only defined systems, actors, environments, workflows, states, data, suppliers, or time periods.",
    example:
      "The model includes the web portal and connected services but excludes the separate fictional mobile client.",
    decisionEffect:
      "Findings cannot be generalized automatically to excluded components.",
    action:
      "Create follow-up scope or a separate model where excluded dependencies matter.",
  },
  {
    family: "Evidence limits",
    description:
      "Fictional records may be missing, stale, incomplete, conflicting, transformed, sampled, unhealthy, or unowned.",
    example:
      "Queue health reports connectivity but may not report event freshness or business completion.",
    decisionEffect:
      "Confidence and risk rationale must remain provisional.",
    action:
      "Assign source-health, completeness, ownership, and validation actions.",
  },
  {
    family: "Time limits",
    description:
      "The fictional model reflects a specific architecture version, review period, exercise, or design state.",
    example:
      "The current model uses the July fictional architecture record and one recovery exercise.",
    decisionEffect:
      "Later changes may invalidate flows, controls, ownership, or risk.",
    action:
      "Set scheduled review and change triggers.",
  },
  {
    family: "Control limits",
    description:
      "Fictional controls may be designed but not implemented, implemented but not operating, or operating only under normal conditions.",
    example:
      "Schema validation is documented, but resilient failure-state evidence is incomplete.",
    decisionEffect:
      "Residual-risk reduction may be smaller than expected.",
    action:
      "Separate design, implementation, operation, monitoring, review, and recovery evidence.",
  },
  {
    family: "Supplier limits",
    description:
      "Fictional teams may not have complete visibility into supplier identity, fields, internal processing, retention, evidence, recovery, or changes.",
    example:
      "The supplier field inventory is available, but current population and downstream retention are unknown.",
    decisionEffect:
      "Risk and mitigation may depend on shared responsibility and contract evidence.",
    action:
      "Assign supplier owner, evidence rights, change review, recovery, and exit decisions.",
  },
  {
    family: "Human and process limits",
    description:
      "Fictional workflows, approvals, support actions, communication, training, and manual reviews may vary under pressure or ambiguity.",
    example:
      "Reason and confirmation fields are missing in several support tickets.",
    decisionEffect:
      "A documented process may not represent every real fictional workflow outcome.",
    action:
      "Use quality review, workflow evidence, usability review, and bounded manual controls.",
  },
  {
    family: "Modeling-method limits",
    description:
      "The chosen fictional categories, scoring scales, diagrams, or templates may emphasize some concerns and miss others.",
    example:
      "A category worksheet may underrepresent accessibility, communication trust, or operational handoff.",
    decisionEffect:
      "Framework completeness should not be mistaken for system completeness.",
    action:
      "Preserve uncategorized concerns and use multidisciplinary review.",
  },
  {
    family: "Prediction limits",
    description:
      "Fictional risk rankings and abuse cases compare plausible scenarios but do not predict exact frequency, actor behavior, or future harm.",
    example:
      "One recovery exercise supports concern but not production frequency.",
    decisionEffect:
      "Scores and bands require confidence and review context.",
    action:
      "Avoid false precision and record assumptions, evidence, and uncertainty.",
  },
  {
    family: "Recovery limits",
    description:
      "Fictional backup or restore evidence may not prove complete business-state, identity, communication, evidence, or trust recovery.",
    example:
      "Application service returns before notification and archival state are validated.",
    decisionEffect:
      "Technical availability cannot be treated as full recovery.",
    action:
      "Model sequencing, reconciliation, user outcomes, evidence, and closure.",
  },
  {
    family: "Portfolio limits",
    description:
      "Public fictional artifacts intentionally omit or invent operational details to remain safe and privacy-preserving.",
    example:
      "All names, systems, identities, flows, fields, events, controls, dates, and outcomes are invented.",
    decisionEffect:
      "The artifact demonstrates reasoning rather than documenting a real environment.",
    action:
      "Maintain complete fictionalization and a clear safety statement.",
  },
];

const confidenceLevels = [
  {
    level: "Low confidence",
    indicators:
      "Important fictional scope, ownership, evidence, control state, or stakeholder review is missing or contradictory.",
    appropriateUse:
      "Early hypotheses, provisional scenarios, and evidence-planning decisions.",
    communication:
      "State that final ranking or mitigation may be decision-blocked.",
  },
  {
    level: "Moderate confidence",
    indicators:
      "The fictional scenario and main relationships are supported, but some operating evidence, owner confirmation, or failure-state coverage is incomplete.",
    appropriateUse:
      "Provisional categories, risk bands, and mitigation planning with explicit follow-up.",
    communication:
      "Explain which evidence could raise or lower the conclusion.",
  },
  {
    level: "High confidence",
    indicators:
      "Fictional scope, owners, current evidence, control state, affected assets, and stakeholder review are consistent and recent.",
    appropriateUse:
      "Decision-ready ranking and mitigation with normal residual uncertainty.",
    communication:
      "Avoid claiming certainty; preserve review triggers and limits.",
  },
  {
    level: "Decision-blocked",
    indicators:
      "The fictional scenario, asset, current state, owner, evidence, or control condition is too unclear for responsible use.",
    appropriateUse:
      "Evidence collection, scope clarification, ownership assignment, and escalation.",
    communication:
      "Do not force a final score, mitigation, or acceptance decision.",
  },
];

const registerExamples = [
  {
    id: "ASM-01",
    statement:
      "The fictional supplier-result queue preserves event order for one case reference.",
    evidence:
      "Queue design summary and interface sequence notes.",
    limits:
      "No operating or recovery evidence confirms ordering after delay, retry, or failover.",
    confidence:
      "Moderate",
    affected:
      "Integrity risk, duplicate handling, stale-state mitigation, and recovery reconciliation.",
    consequence:
      "If false, risk ranking and selected controls must include stronger ordering, correlation, and reconciliation requirements.",
    owner:
      "Fictional workflow integration owner",
    review:
      "Review after queue, supplier, retry, or recovery change.",
  },
  {
    id: "ASM-02",
    statement:
      "The fictional free-text support-note field may be populated in current supplier requests.",
    evidence:
      "Field inventory lists the field.",
    limits:
      "No current payload sample, usage summary, purpose approval, or retention evidence is supplied.",
    confidence:
      "Low",
    affected:
      "Privacy risk, confidentiality risk, data-minimization design, and supplier governance.",
    consequence:
      "If the field is unused, current residual risk may decrease; if used broadly, impact and mitigation urgency may increase.",
    owner:
      "Fictional data owner",
    review:
      "Decision-blocking until current use is validated.",
  },
  {
    id: "ASM-03",
    statement:
      "The fictional archival service identity is required for approved retention and recovery workflows.",
    evidence:
      "Service catalog and recovery process reference the identity.",
    limits:
      "Current owner, authority scope, activity, and review evidence are incomplete.",
    confidence:
      "Moderate",
    affected:
      "Identity risk, governance risk, archival mitigation, and recovery readiness.",
    consequence:
      "If the purpose has changed or ended, the identity may require restriction, replacement, or retirement.",
    owner:
      "Fictional records and recovery owner",
    review:
      "Review before any lifecycle decision and after recovery-design change.",
  },
  {
    id: "ASM-04",
    statement:
      "The fictional source-health dashboard represents source connectivity rather than complete event freshness and business processing.",
    evidence:
      "Green status remained during a twenty-two-minute event delay.",
    limits:
      "Dashboard semantics and source-health implementation are not fully documented.",
    confidence:
      "Moderate",
    affected:
      "Detection design, evidence confidence, supplier-result risk, and mitigation validation.",
    consequence:
      "If the dashboard already includes freshness, the monitoring gap may be smaller; if not, independent evidence is required.",
    owner:
      "Fictional monitoring owner",
    review:
      "Review when dashboard semantics or telemetry pipeline changes.",
  },
  {
    id: "ASM-05",
    statement:
      "The fictional support workflow expects reason capture and user confirmation for notification changes.",
    evidence:
      "Support procedure and ticket template contain both fields.",
    limits:
      "Several tickets are incomplete, and workflow enforcement is not demonstrated.",
    confidence:
      "Moderate",
    affected:
      "Accountability risk, support mitigation, user communication, and quality review.",
    consequence:
      "If the fields are optional by design, the control objective and evidence standard must be revised.",
    owner:
      "Fictional support operations owner",
    review:
      "Review after workflow, ticket, role, or notification-process change.",
  },
  {
    id: "ASM-06",
    statement:
      "The fictional recovery exercise represents a credible but not complete indicator of current recovery behavior.",
    evidence:
      "The exercise produced stale messages and repeated archival tasks.",
    limits:
      "One exercise does not establish production frequency, every dependency, or all corrective actions.",
    confidence:
      "High for the exercise observation; Moderate for current-state inference",
    affected:
      "Recovery risk, mitigation priority, dependency order, communication, and reconciliation.",
    consequence:
      "If corrective controls are already operating, residual risk may decrease; if not, recovery urgency remains High.",
    owner:
      "Fictional continuity owner",
    review:
      "Review after corrective action and the next exercise.",
  },
];

const evidenceMatrix = [
  {
    id: "AL-01",
    source: "Fictional architecture record",
    observation:
      "The current diagram shows web portal, supplier, notification, monitoring, archive, and recovery relationships.",
    supports:
      "The model can describe those documented relationships.",
    limits:
      "The diagram does not prove every current flow, identity, control, temporary path, or failure state.",
    use:
      "Create a scope caveat and assign current-state validation actions.",
  },
  {
    id: "AL-02",
    source: "Fictional queue dashboard",
    observation:
      "The dashboard shows a delay and Green source health.",
    supports:
      "The evidence sources may represent different dimensions of service state.",
    limits:
      "Cause, completeness, source-health semantics, and final business impact remain uncertain.",
    use:
      "Document an evidence limitation and monitoring assumption.",
  },
  {
    id: "AL-03",
    source: "Fictional supplier-field inventory",
    observation:
      "A free-text support-note field appears in the documented request schema.",
    supports:
      "The field is part of the documented design or inventory.",
    limits:
      "Current population, approved purpose, access, retention, and downstream use are unknown.",
    use:
      "Create a decision-blocking assumption for final privacy ranking.",
  },
  {
    id: "AL-04",
    source: "Fictional support tickets",
    observation:
      "Several notification changes lack recorded reason and confirmation fields.",
    supports:
      "The evidence record is incomplete for those fictional changes.",
    limits:
      "The tickets do not prove unauthorized action, harmful outcome, actor intent, or workflow design.",
    use:
      "Separate observation from interpretation and assign process-validation work.",
  },
  {
    id: "AL-05",
    source: "Fictional service-identity review",
    observation:
      "The archival identity lacks a confirmed owner and current review.",
    supports:
      "Ownership and lifecycle evidence are incomplete.",
    limits:
      "The record does not prove compromise, misuse, broad authority, or active processing.",
    use:
      "Document identity-purpose and lifecycle assumptions with Moderate confidence.",
  },
  {
    id: "AL-06",
    source: "Fictional recovery exercise",
    observation:
      "Application recovery preceded validation of notification and archival dependencies.",
    supports:
      "The exercise demonstrates a recovery-sequencing concern.",
    limits:
      "It does not prove production frequency, every current control, or future outcome.",
    use:
      "Record the exercise-to-current-state inference as a model limit.",
  },
  {
    id: "AL-07",
    source: "Fictional mitigation register",
    observation:
      "Several controls are designed but do not yet have operating, failure, or recovery evidence.",
    supports:
      "Residual-risk reduction should remain provisional.",
    limits:
      "The register does not prove the controls are absent or ineffective.",
    use:
      "Separate design evidence from operating-effectiveness assumptions.",
  },
  {
    id: "AL-08",
    source: "Fictional analytics proposal",
    observation:
      "The process is proposed and lacks approved fields, purpose, audience, retention, and ownership.",
    supports:
      "The scenario is future-state and design-blocking.",
    limits:
      "The proposal does not prove current collection, exposure, or misuse.",
    use:
      "Document a future-state exclusion from current residual-risk reporting.",
  },
];

const commonMistakes = [
  {
    mistake: "Hiding assumptions in narrative text",
    why:
      "Readers may not know which fictional conclusions depend on unverified beliefs.",
    correction:
      "Use a structured register with identifiers, owners, confidence, consequences, expiration, and triggers.",
  },
  {
    mistake: "Writing vague assumptions",
    why:
      "Statements such as “the supplier is secure” cannot be validated or tied to a decision.",
    correction:
      "Write precise, bounded, testable fictional statements.",
  },
  {
    mistake: "Treating unknown as Low risk",
    why:
      "Missing evidence does not prove a scenario is unlikely or harmless.",
    correction:
      "Record uncertainty, confidence, evidence actions, and possible decision blocking.",
  },
  {
    mistake: "Treating unknown as proof of danger",
    why:
      "An evidence gap does not prove compromise, misuse, control failure, or severe impact.",
    correction:
      "Use provisional conclusions and bounded defensive questions.",
  },
  {
    mistake: "Leaving assumptions without owners",
    why:
      "Unowned fictional beliefs can remain stale while risks and mitigations depend on them.",
    correction:
      "Assign one accountable role and a review date.",
  },
  {
    mistake: "Omitting consequences if false",
    why:
      "The team cannot tell which categories, rankings, controls, or decisions must change.",
    correction:
      "Trace the assumption to affected conclusions and revision actions.",
  },
  {
    mistake: "Using confidence without rationale",
    why:
      "Low, Moderate, or High can become another unsupported label.",
    correction:
      "Explain evidence quality, scope, owner review, staleness, conflict, and source health.",
  },
  {
    mistake: "Forgetting exclusions",
    why:
      "Readers may assume the fictional model includes mobile, supplier-internal, administrative, recovery, or support areas that were never reviewed.",
    correction:
      "Publish included and excluded scope prominently.",
  },
  {
    mistake: "Allowing assumptions to become permanent",
    why:
      "Architecture, identity, data, supplier, control, evidence, and recovery conditions change.",
    correction:
      "Use expiration, versioning, scheduled review, and change triggers.",
  },
  {
    mistake: "Using real assumptions or limitations",
    why:
      "Real gaps, owners, suppliers, controls, recovery details, and priorities may reveal sensitive information.",
    correction:
      "Invent every organization, asset, actor, assumption, limit, evidence record, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Confirm model scope and audience",
    action:
      "State which fictional Northbridge systems, actors, flows, environments, suppliers, states, time period, and decisions are included.",
    output:
      "Scope statement, audience, purpose, inclusions, exclusions, and safety boundary.",
    quality:
      "A reader can tell what the model does and does not cover.",
  },
  {
    step: "2",
    title: "Extract hidden assumptions",
    action:
      "Review fictional assets, actors, flows, boundaries, abuse cases, categories, risks, and mitigations for statements that depend on incomplete evidence.",
    output:
      "A candidate-assumption list with affected decisions.",
    quality:
      "The list includes identity, data, supplier, control, evidence, recovery, process, and user assumptions.",
  },
  {
    step: "3",
    title: "Classify each statement",
    action:
      "Label each item as observation, interpretation, hypothesis, assumption, unknown, constraint, exclusion, decision, acceptance, or caveat.",
    output:
      "A statement-classification table.",
    quality:
      "Possibility and interpretation are not presented as confirmed facts.",
  },
  {
    step: "4",
    title: "Build the assumption register",
    action:
      "Record identifier, statement, reason, evidence, limits, confidence, affected decisions, consequence if false, validation, owner, date, and status.",
    output:
      "A decision-ready assumptions register.",
    quality:
      "Every important assumption is testable, owned, time-bound, and traceable.",
  },
  {
    step: "5",
    title: "Document model limits",
    action:
      "Record scope, evidence, time, control, supplier, human, method, prediction, recovery, and portfolio limitations.",
    output:
      "A limitations and exclusions register.",
    quality:
      "Limits appear where decision-makers will see them.",
  },
  {
    step: "6",
    title: "Identify decision-blocking gaps",
    action:
      "Determine which fictional unknowns prevent responsible category, ranking, mitigation, or acceptance decisions.",
    output:
      "A blocked-decision queue with evidence owners.",
    quality:
      "The model does not force scores or conclusions through serious uncertainty.",
  },
  {
    step: "7",
    title: "Set maintenance rules",
    action:
      "Assign fictional review dates, expirations, change triggers, versions, owners, and revision history.",
    output:
      "An assumption-maintenance plan.",
    quality:
      "Temporary beliefs cannot remain active indefinitely.",
  },
  {
    step: "8",
    title: "Communicate confidence responsibly",
    action:
      "Write fictional leadership and technical summaries explaining what is known, assumed, unknown, excluded, blocked, and ready for decision.",
    output:
      "Leadership caveat, technical appendix, decision log, and reflection.",
    quality:
      "The summary remains useful without overstating certainty or completeness.",
  },
];

const quizQuestions = [
  {
    question:
      "Which statement is the strongest fictional assumption?",
    choices: [
      "The supplier is secure.",
      "Assume the fictional supplier-result interface uses one managed service identity until the supplier owner validates current identity and delegation evidence.",
      "Everything probably works.",
      "The queue is safe.",
    ],
    answer: 1,
    explanation:
      "The strongest statement is precise, bounded, testable, owned, and connected to evidence.",
  },
  {
    question:
      "What is the difference between an observation and an interpretation?",
    choices: [
      "There is no difference.",
      "An observation is directly shown by fictional evidence, while an interpretation explains what that observation may mean.",
      "An interpretation is always more reliable.",
      "An observation proves cause.",
    ],
    answer: 1,
    explanation:
      "Keeping evidence and explanation separate prevents unsupported conclusions.",
  },
  {
    question:
      "What should happen when uncertainty is decision-blocking?",
    choices: [
      "Assign Low because nothing is proven.",
      "Assign Very High because anything is possible.",
      "Pause the final decision, preserve the concern, assign evidence owners, and define what is required to continue.",
      "Delete the scenario.",
    ],
    answer: 2,
    explanation:
      "Decision-blocking uncertainty should be visible and managed rather than guessed away.",
  },
  {
    question:
      "Why must an assumption include consequences if false?",
    choices: [
      "To make the register longer.",
      "So reviewers know which fictional categories, rankings, mitigations, controls, or recovery decisions must be revised.",
      "Because every assumption will fail.",
      "To prove the model is inaccurate.",
    ],
    answer: 1,
    explanation:
      "Consequences provide traceability and support timely revision.",
  },
  {
    question:
      "What is a model exclusion?",
    choices: [
      "A fictional item intentionally outside the current scope.",
      "A proven weakness.",
      "A risk acceptance.",
      "An operating control.",
    ],
    answer: 0,
    explanation:
      "Exclusions prevent readers from assuming the model covers areas that were not analyzed.",
  },
  {
    question:
      "Why should assumptions expire?",
    choices: [
      "Because documentation should be deleted regularly.",
      "Because fictional architecture, ownership, evidence, controls, suppliers, and recovery conditions change.",
      "Because expired assumptions automatically become false.",
      "Because confidence never matters.",
    ],
    answer: 1,
    explanation:
      "Expiration and triggers prevent temporary beliefs from becoming stale permanent facts.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real organizational assumptions but remove names.",
      "Use real control gaps but change dates.",
      "Invent every organization, assumption, limit, evidence record, owner, date, decision, and outcome from scratch.",
      "Use real recovery limitations because they are defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, suppliers, controls, gaps, and recovery information.",
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

export default function DocumentingAssumptionsAndLimitsPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">
              Model Honesty and Traceability
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.8 Documenting Assumptions and Limits
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders make fictional threat models
            trustworthy by recording what is known, believed, unknown,
            constrained, excluded, provisional, accepted, and decision-blocking.
            Build assumption and limitation records that connect evidence,
            confidence, owners, consequences, expiration, review triggers,
            risks, mitigations, and recovery decisions.
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
          lessonTitle="Documenting Assumptions and Limits"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, systems, assumptions, limitations, evidence, owners, dates, decisions, controls, and outcomes.",
            "I understand that documenting uncertainty increases model trustworthiness and does not mean the fictional threat model has failed.",
            "I will distinguish observation, interpretation, hypothesis, assumption, unknown, constraint, exclusion, decision, and residual-risk acceptance.",
            "I will give important fictional assumptions owners, confidence, consequences, validation actions, expiration, and review triggers.",
            "I will not force final categories, scores, mitigations, or risk acceptance through decision-blocking uncertainty.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real internal assumptions, gaps, or limitations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Undocumented Assumption Can Quietly Control the Entire Threat Model"
        >
          <p className="leading-8">
            A fictional Northbridge risk register ranks stale supplier results
            as High. The selected mitigation relies on the belief that queue
            ordering is preserved and that one service identity represents all
            supplier result activity. Neither belief is clearly documented.
            If either is false, actor attribution, duplicate handling,
            reconciliation, control design, and residual risk may all change.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Hidden assumption
              </p>
              <p className="mt-2 leading-7">
                “The queue works normally.” No owner, evidence, confidence,
                meaning, expiration, consequence, or validation plan is shown.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Documented assumption
              </p>
              <p className="mt-2 leading-7">
                “Assume result ordering is preserved for one case reference
                until the workflow owner validates fictional delay, retry, and
                recovery evidence; confidence is Moderate and the assumption
                expires after queue or supplier change.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A trustworthy model does not pretend to know everything. It makes
            uncertainty visible, assigns responsibility, limits conclusions,
            and shows how decisions must change when evidence changes.
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
          title="Assumptions Determine How Far a Model Can Be Trusted"
        >
          <p className="leading-8">
            Fictional threat models combine incomplete evidence, stakeholder
            knowledge, diagrams, exercises, role records, supplier statements,
            control reviews, and professional judgment. Without explicit
            assumptions and limits, readers may mistake a draft model for a
            complete description, a possibility for a fact, a design control
            for an operating control, or an exercise result for current
            production behavior.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Decision integrity",
                "Readers can see which fictional conclusions are confirmed, provisional, blocked, or dependent on owner validation.",
              ],
              [
                "Maintenance",
                "Owners know when assumptions expire and which changes require review.",
              ],
              [
                "Responsible communication",
                "Leadership receives useful priorities without false certainty, hidden gaps, or exaggerated claims.",
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
          title="The H-O-N-E-S-T Model"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "H — Highlight what is known",
                "Record fictional observations, evidence sources, versions, owners, dates, and source-health context.",
              ],
              [
                "O — Outline what is assumed",
                "Write precise, testable fictional beliefs with confidence and consequences.",
              ],
              [
                "N — Name what is unknown",
                "Identify missing ownership, state, exposure, data, identity, control, supplier, and recovery information.",
              ],
              [
                "E — Explain exclusions and constraints",
                "Show which fictional areas are outside scope and which conditions limit options.",
              ],
              [
                "S — Set owners and schedules",
                "Assign validation actions, expiration, review dates, triggers, and version history.",
              ],
              [
                "T — Trace decision effects",
                "Connect assumptions and limits to categories, rankings, mitigations, residual risk, recovery, and communication.",
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
              Decision-ready assumption statement
            </p>
            <p className="mt-2 leading-7">
              The fictional model assumes a precise condition for a documented
              reason, based on named evidence with known limitations. The
              assumption has a confidence level, accountable owner, validation
              action, expiration, consequence if false, affected decisions,
              review triggers, status, and version history.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Model Honesty and Maintenance"
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
          title="Classify Ten Types of Model Statements"
        >
          <p className="leading-8">
            Threat-model quality improves when fictional teams label the type
            of statement they are making. This prevents evidence, reasoning,
            and decisions from blending together.
          </p>

          <div className="mt-6 grid gap-5">
            {statementTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.type}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.definition}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional use
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.use}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
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
            Build Every Important Assumption with Twelve Fields
          </h2>

          <div className="mt-6 grid gap-5">
            {assumptionFields.map((item, index) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.field}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.purpose}
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
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Document Ten Families of Model Limits"
        >
          <div className="grid gap-5">
            {limitFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.family}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Decision effect
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.decisionEffect}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required action
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Use Confidence without Pretending to Have Certainty"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {confidenceLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Indicators
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.indicators}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Appropriate use
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.appropriateUse}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Communication
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.communication}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Worked Fictional Register"
          title="Northbridge Assumption Examples"
        >
          <div className="grid gap-5">
            {registerExamples.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.statement}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Evidence limits", item.limits],
                    ["Confidence", item.confidence],
                    ["Affected decisions", item.affected],
                    ["Consequence if false", item.consequence],
                    ["Owner", item.owner],
                    ["Review trigger", item.review],
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
        </SectionCard>

        <SectionCard
          eyebrow="Traceability Matrix"
          title="Connect Assumptions to Threat-Model Decisions"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Threat-model area",
                    "Possible fictional assumption",
                    "If false",
                    "Required review",
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
                    "Assets",
                    "The documented case-status record is the authoritative source.",
                    "Integrity, recovery, and user-communication conclusions may be wrong.",
                    "Data owner validates authority, copies, lineage, and reconciliation.",
                  ],
                  [
                    "Actors",
                    "One fictional service identity represents all archival actions.",
                    "Attribution, privilege, monitoring, and recovery ownership may change.",
                    "Identity and archive owners validate delegation and activity.",
                  ],
                  [
                    "Entry points",
                    "The temporary migration interface is inactive.",
                    "Exposure, authority, monitoring, and retirement decisions may change.",
                    "Interface owner validates purpose, state, evidence, and dependencies.",
                  ],
                  [
                    "Data flows",
                    "Supplier results preserve ordering and correlation.",
                    "Duplicate, stale-state, and reconciliation risk may increase.",
                    "Workflow owner reviews queue and recovery evidence.",
                  ],
                  [
                    "Trust boundaries",
                    "Supplier identity and schema validation occur before results are trusted.",
                    "The boundary control model and residual risk may be incomplete.",
                    "Supplier and application owners validate controls and evidence.",
                  ],
                  [
                    "Abuse cases",
                    "Delayed notifications contribute to duplicate submissions.",
                    "Causal narrative and selected controls may need revision.",
                    "Support and workflow owners compare alternative explanations.",
                  ],
                  [
                    "Categories",
                    "Accountability is the primary notification-change concern.",
                    "Primary owner and control priorities may change.",
                    "Multidisciplinary review confirms the central decision.",
                  ],
                  [
                    "Risk ranking",
                    "Current controls reduce likelihood to Moderate.",
                    "Residual risk may be higher or lower than documented.",
                    "Control owners provide operating and failure evidence.",
                  ],
                  [
                    "Mitigations",
                    "State validation will reduce stale-update risk.",
                    "The chosen package may not achieve its objective.",
                    "Validation plan checks normal, delay, retry, and recovery states.",
                  ],
                  [
                    "Recovery",
                    "Restored application availability reflects usable service.",
                    "Business state, communication, evidence, and trust may remain incorrect.",
                    "Continuity owner validates full recovery and closure.",
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
          eyebrow="Fictional Model Boundary"
          title="Northbridge Included, Excluded, and Conditional Scope"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Included
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-6">
                {[
                  "Fictional web portal",
                  "Identity and support workflows",
                  "Supplier request and result flows",
                  "Notification service",
                  "Monitoring and queue evidence",
                  "Archive and recovery relationships",
                  "Normal, failure, degraded, and recovery states",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-300/25 bg-slate-950/70 p-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Excluded
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-6">
                {[
                  "Any real organization or system",
                  "Fictional mobile-client internals",
                  "Supplier internal architecture",
                  "Real-world legal conclusions",
                  "Operational attack methods",
                  "Real credentials, logs, routes, addresses, or configurations",
                  "Current production claims",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-red-300/25 bg-slate-950/70 p-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Conditional
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-6">
                {[
                  "Future analytics design",
                  "Temporary migration interface",
                  "Supplier field population",
                  "Current service-identity ownership",
                  "Queue ordering after recovery",
                  "Operating effectiveness of planned controls",
                  "Current recovery readiness",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-yellow-300/25 bg-slate-950/70 p-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Assumptions and Limits Dashboard"
          subtitle="Fictional assumption confidence, ownership, expiration, evidence, and decision-blocking status for training only."
          metrics={[
            {
              label: "Open assumptions",
              value: "14",
              note: "Six concern identity and suppliers, four concern control operation, and four concern recovery, workflow, or evidence.",
            },
            {
              label: "Assumptions without owners",
              value: "3",
              note: "Queue ordering, supplier retention, and temporary-interface state still need accountable fictional roles.",
            },
            {
              label: "Decision-blocking gaps",
              value: "2",
              note: "Current supplier free-text use and future analytics purpose block final privacy decisions.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Assumption Still Used in Residual-Risk Decision"
          severity="High"
          time="4:02 PM"
          source="Fake Northbridge Model Assurance Console"
          details="A fictional residual-risk decision still relies on an assumption that the archival service identity has one owner and a narrow scope. The assumption expired after a recovery-design change, and no updated identity or activity evidence is attached."
          recommendation="Mark the assumption expired, identify affected identity, governance, archival, and recovery decisions, assign an owner, collect only supplied fictional evidence, and pause any final acceptance that depends on the outdated statement."
        />

        <FakeLogPanel
          title="Fake Assumption Review Timeline"
          logs={[
            "09:00 REGISTER assumptions='14' limits='10'",
            "09:08 ASM-01 queue-order confidence='moderate'",
            "09:16 ASM-02 supplier-note confidence='low' status='blocking'",
            "09:24 ASM-03 archive-identity confidence='moderate'",
            "09:32 ASM-04 dashboard-semantics confidence='moderate'",
            "09:40 ASM-05 support-confirmation confidence='moderate'",
            "09:48 ASM-06 recovery-inference confidence='mixed'",
            "09:56 LIMIT scope-mobile='excluded'",
            "10:04 LIMIT supplier-internal='not-visible'",
            "10:12 LIMIT controls-operating='partial-evidence'",
            "10:20 OWNER missing='queue,supplier-retention,migration'",
            "10:28 EXPIRATION archive-identity='triggered'",
            "10:36 DECISION residual-acceptance='paused'",
            "10:44 TRACE affected='identity,governance,recovery'",
            "10:52 ACTION owner-validation='required'",
            "11:00 ACTION evidence-provenance='update'",
            "11:08 REVIEW leadership-caveat='draft'",
            "11:16 REVIEW technical-appendix='complete'",
            "11:24 CONFIDENCE model='moderate'",
            "16:02 ALERT issue='expired-assumption'",
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
          title="Which Assumption Record Is Most Responsible?"
          question="Which statement best documents the fictional free-text supplier-field uncertainty?"
          evidence={[
            "The fictional supplier-field inventory lists a free-text support-note field.",
            "No current usage summary or payload evidence is supplied.",
            "The approved purpose, access, retention, and downstream use are unresolved.",
            "The field may affect privacy, confidentiality, governance, supplier, and mitigation decisions.",
            "The evidence does not prove that the field is populated or misused.",
            "The current privacy residual-risk decision depends on whether the field is used.",
            "A fictional data owner has not yet been assigned.",
            "The model has Low confidence for current field use.",
          ]}
          options={[
            "Record a Low-confidence, decision-blocking assumption that the field may be used; assign a fictional data owner, list evidence limits, explain affected decisions and consequences, require validation, and set expiration and review triggers.",
            "State that the supplier is collecting sensitive information.",
            "Assume the field is unused and rate the risk Low.",
            "Delete the scenario until every fact is known.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves the supported observation, uncertainty, decision effect, ownership need, confidence, and validation path without claiming current misuse or forcing a risk decision."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Assumptions and Limitations"
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
          title="Build the Northbridge Assumptions and Limits Register"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real assumptions, gaps, owners,
            suppliers, logs, configurations, controls, incidents, recovery
            details, or organizational priorities.
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
          title="A Team Wants to Hide Low-Confidence Assumptions"
          scenario="The fictional team worries that leadership will distrust the threat model if several assumptions are marked Low confidence, so a reviewer proposes removing confidence labels from the summary."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the confidence labels, explain why uncertainty exists, identify affected decisions, assign evidence owners, and distinguish decision-ready findings from blocked or provisional findings.",
              outcome:
                "Best defensive choice. Honest uncertainty strengthens decision quality and trust.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove confidence so the report appears complete.",
              outcome:
                "Weak. The report may create false certainty and unsupported decisions.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove every low-confidence scenario from the model.",
              outcome:
                "Incomplete. Important concerns and evidence needs would disappear.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Excluded Component Affects a Major Dependency"
          scenario="The fictional model excludes the mobile client, but the mobile and web clients share the same identity service and notification process."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the exclusion visible, document the shared dependencies and decision limits, avoid generalizing conclusions, and create a separate or expanded fictional review.",
              outcome:
                "Best choice. Scope can remain bounded while dependency effects stay visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the web findings automatically apply to mobile.",
              outcome:
                "Weak. Shared dependencies do not prove identical flows, controls, or risks.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the shared identity and notification dependencies because mobile is excluded.",
              outcome:
                "Incomplete. Exclusions should not hide effects on included decisions.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Repair a Threat Model Built on Conflicting Assumptions"
        >
          <p className="leading-8">
            The fictional supplier owner says result ordering is guaranteed.
            The queue owner says ordering is best effort. The workflow owner
            assumes duplicates are impossible. The recovery exercise shows
            repeated archival tasks. Build a responsible assumption record and
            decision path without choosing one statement simply because it is
            more convenient.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Separate the claims",
                "Record each fictional owner statement as evidence with source, date, scope, and limits.",
              ],
              [
                "Document contradiction",
                "Explain which statements cannot all be relied upon together.",
              ],
              [
                "Identify affected decisions",
                "Trace ordering and duplication assumptions to integrity risk, mitigation, evidence, and recovery.",
              ],
              [
                "Set provisional confidence",
                "Use Low or Moderate confidence until supplied evidence resolves the conflict.",
              ],
              [
                "Create safe validation",
                "Use invented event sequences and recovery records rather than any real testing.",
              ],
              [
                "Pause unsupported acceptance",
                "Do not finalize residual risk if the contradiction materially changes the mitigation objective.",
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
              Produce a fictional contradictory-evidence record, revised
              assumption, confidence rationale, affected-decision map,
              validation plan, owner assignments, expiration, decision-blocking
              statement, leadership caveat, and revision history.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Documenting Assumptions and Limits Checklist"
          items={[
            "I can distinguish fictional observation, interpretation, hypothesis, assumption, unknown, constraint, exclusion, decision, acceptance, and caveat.",
            "I can write precise, bounded, testable fictional assumption statements.",
            "I can identify evidence, evidence limits, source health, staleness, conflict, and provenance.",
            "I can assign confidence with a written rationale.",
            "I can identify which categories, rankings, mitigations, controls, recovery decisions, and user outcomes depend on an assumption.",
            "I can explain the consequence if a fictional assumption is false.",
            "I can assign one accountable owner, validation action, review date, expiration, and change triggers.",
            "I can publish scope, exclusions, constraints, time limits, method limits, supplier limits, control limits, and recovery limits.",
            "I can identify decision-blocking uncertainty without converting it into an unsupported score or conclusion.",
            "I can version assumptions and preserve revision history.",
            "I can communicate model confidence and caveats clearly to leadership and technical readers.",
            "I can create a completely fictional assumptions-and-limits register without copying or modifying real gaps, owners, suppliers, controls, incidents, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A3.8 Mini Quiz: Documenting Assumptions and Limits"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Assumptions, Limits, and Confidence Register for the Northbridge Student-Support Portal. Include purpose, audience, scope, inclusions, exclusions, constraints, safety boundary, statement-type definitions, at least fifteen assumptions, stable identifiers, precise statements, reasons for use, evidence, evidence provenance, evidence limits, confidence, affected assets, actors, flows, trust boundaries, abuse cases, categories, risk rankings, mitigations, recovery decisions, consequences if false, validation actions, owners, review dates, expiration, triggers, status, revision history, at least eight model limitations, decision-blocking gaps, residual uncertainty, leadership caveat, technical appendix, reflection, and a statement that every organization, asset, actor, system, assumption, limit, record, owner, date, decision, and outcome is invented."
          tips={[
            "Separate fictional observations, interpretations, hypotheses, assumptions, unknowns, constraints, exclusions, and decisions.",
            "Give every important assumption a precise statement, owner, evidence, confidence, consequence, expiration, and review trigger.",
            "Trace assumptions to the exact threat-model conclusions that depend on them.",
            "Use decision-blocking status when missing evidence prevents responsible ranking, mitigation, or acceptance.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Review a Threat Model?"
        >
          <p className="leading-8">
            Before moving to A3.9, rate your readiness from 1 to 5 for statement
            classification, assumption quality, evidence provenance, confidence,
            ownership, consequences, expiration, exclusions, decision blocking,
            traceability, versioning, leadership caveats, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can identify where a fictional threat model depends on hidden or weak assumptions.",
              "I can separate supplied evidence from interpretation, hypothesis, and belief.",
              "I can write assumptions that are testable, owned, time-bound, and traceable.",
              "I can explain how scope, evidence, control, supplier, human, method, prediction, and recovery limits affect decisions.",
              "I can use confidence without presenting it as certainty.",
              "I can pause decisions when uncertainty is genuinely blocking.",
              "I can explain the model honestly to leadership without making it useless or dramatic.",
              "I can create a complete fictional register without copying, modifying, or exposing real organizational information.",
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
            Record one fictional assumption you rewrote, one model exclusion
            that affected a decision, one evidence limitation, one
            decision-blocking gap, and one review question you will carry into
            A3.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Assumptions, limits, exclusions, and unknowns are required parts of a trustworthy fictional threat model.",
            "Observations, interpretations, hypotheses, assumptions, unknowns, constraints, decisions, and acceptances answer different questions.",
            "A strong assumption is precise, testable, evidence-aware, owned, time-bound, and traceable to affected decisions.",
            "Confidence requires a rationale based on scope, evidence quality, ownership, staleness, conflict, source health, and stakeholder review.",
            "Unknowns should not be treated automatically as Low risk or proof of severe danger.",
            "Decision-blocking uncertainty should pause final category, ranking, mitigation, or acceptance decisions.",
            "Scope and exclusions must be visible so readers do not overgeneralize the fictional model.",
            "Every assumption should explain what must change if it is false.",
            "Expiration, review triggers, versions, owners, and revision history keep the model maintainable.",
            "Every CyberShield assumptions-and-limits artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, review the complete fictional threat model for scope,
            completeness, evidence, consistency, safety, category coverage,
            ranking quality, mitigation traceability, ownership, assumptions,
            limitations, communication, and maintenance.
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