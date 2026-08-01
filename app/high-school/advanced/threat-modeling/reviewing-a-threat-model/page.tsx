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
const previousLesson = `${modulePath}/documenting-assumptions-and-limits`;
const nextLesson = `${modulePath}/threat-modeling-workshop-lab`;

const objectives = [
  "Explain a fictional threat-model review as a structured quality and decision check rather than a search for perfect completeness or dramatic findings.",
  "Evaluate fictional scope, assets, actors, entry points, data flows, trust boundaries, abuse cases, categories, risk rankings, mitigations, assumptions, limits, owners, evidence, and recovery for completeness and consistency.",
  "Identify fictional review defects such as missing traceability, unsupported claims, stale evidence, category inflation, false precision, unowned risks, weak mitigation evidence, hidden assumptions, and unsafe operational detail.",
  "Lead a multidisciplinary fictional review that records disagreements, decisions, evidence gaps, action owners, completion criteria, review triggers, and residual uncertainty.",
  "Create a portfolio-ready fictional threat-model review package that remains ethical, defensive, authorized, evidence-aware, privacy-safe, non-operational, and completely invented.",
];

const vocabulary = [
  [
    "Threat-model review",
    "A structured fictional examination of whether a threat model is scoped, evidence-aware, internally consistent, decision-ready, maintainable, and safe.",
  ],
  [
    "Review objective",
    "The fictional decision or quality outcome the review must support, such as approving a design, validating a risk register, or preparing a model for maintenance.",
  ],
  [
    "Review criterion",
    "A defined fictional standard used to judge model quality, such as scope clarity, evidence traceability, category coverage, risk rationale, mitigation ownership, or assumption maintenance.",
  ],
  [
    "Review finding",
    "A fictional observation about model quality, completeness, inconsistency, unsupported reasoning, missing ownership, stale evidence, or safety.",
  ],
  [
    "Review action",
    "A fictional task assigned to a named owner to resolve, validate, accept, or monitor a review finding.",
  ],
  [
    "Completion criterion",
    "The fictional evidence or condition required before a review action can be marked complete.",
  ],
  [
    "Peer review",
    "A fictional review performed by another knowledgeable person who challenges reasoning, evidence, assumptions, and conclusions.",
  ],
  [
    "Multidisciplinary review",
    "A fictional review involving technical, privacy, data, operations, support, supplier, recovery, mission, accessibility, and governance perspectives.",
  ],
  [
    "Traceability review",
    "A fictional check that connects assets, actors, flows, boundaries, abuse cases, categories, risks, mitigations, evidence, owners, assumptions, and review triggers.",
  ],
  [
    "Consistency review",
    "A fictional check that related parts of the model do not contradict one another without explanation.",
  ],
  [
    "Coverage review",
    "A fictional check that important assets, actors, interfaces, flows, states, dependencies, failure conditions, recovery needs, and stakeholder perspectives are represented.",
  ],
  [
    "Evidence review",
    "A fictional check of evidence source, provenance, freshness, health, completeness, ownership, meaning, and limits.",
  ],
  [
    "Risk-quality review",
    "A fictional check that risk rankings use defined criteria and separate impact, likelihood, exposure, controls, uncertainty, confidence, priority, urgency, and intent.",
  ],
  [
    "Mitigation-quality review",
    "A fictional check that controls address exact scenarios, have owners and evidence, consider tradeoffs, and leave residual risk visible.",
  ],
  [
    "Assumption review",
    "A fictional check that assumptions are precise, owned, evidence-aware, time-bound, traceable, and revised when conditions change.",
  ],
  [
    "Model defect",
    "A fictional quality problem that could mislead decisions, hide uncertainty, weaken ownership, or create unsafe conclusions.",
  ],
  [
    "Review severity",
    "The fictional importance of correcting a model defect based on decision impact, not the threat risk itself.",
  ],
  [
    "Review status",
    "The fictional state of a finding or action, such as Open, In Review, Blocked, Accepted, Complete, Reopened, or Retired.",
  ],
  [
    "Independent challenge",
    "A fictional review step where someone not responsible for the original conclusion tests its logic, evidence, assumptions, and alternatives.",
  ],
  [
    "Decision readiness",
    "The fictional degree to which a model contains enough scope, evidence, ownership, uncertainty, and rationale for an authorized decision.",
  ],
  [
    "Review gate",
    "A fictional condition that must be met before a design, risk, mitigation, release, recovery plan, or acceptance can proceed.",
  ],
  [
    "Reopened finding",
    "A fictional issue previously closed but made relevant again by new evidence, change, failure, ownership, or recovery results.",
  ],
  [
    "Review trigger",
    "A fictional change or event that requires part or all of the threat model to be reviewed again.",
  ],
  [
    "Model sign-off",
    "A fictional acknowledgment that named stakeholders reviewed specified decisions and limits; it is not a guarantee of perfect security.",
  ],
];

const reviewPrinciples = [
  {
    principle: "Review for decisions, not perfection",
    description:
      "A fictional threat model should be good enough to support specific decisions while clearly documenting uncertainty and remaining work.",
    strongPractice:
      "State which design, risk, mitigation, or residual-risk decisions the review must enable.",
    failure:
      "A search for perfect completeness can delay useful action or encourage hidden uncertainty.",
  },
  {
    principle: "Challenge the model, not the people",
    description:
      "Review fictional reasoning, evidence, assumptions, and traceability without accusing or labeling individuals.",
    strongPractice:
      "Ask which evidence supports the conclusion and what alternatives remain plausible.",
    failure:
      "Personal blame reduces openness and can turn uncertainty into unsupported intent claims.",
  },
  {
    principle: "Use the same review criteria",
    description:
      "Apply published fictional quality standards consistently across scenarios, categories, risks, and mitigations.",
    strongPractice:
      "Every High residual risk must show impact, likelihood, control evidence, uncertainty, owner, and review trigger.",
    failure:
      "Reviewers may accept strong reasoning in familiar areas and overlook weak reasoning elsewhere.",
  },
  {
    principle: "Verify traceability",
    description:
      "Important fictional conclusions should connect from system context to decision and maintenance.",
    strongPractice:
      "Trace asset to actor, flow, boundary, abuse case, category, risk, mitigation, evidence, owner, assumption, and review.",
    failure:
      "A risk or control may exist as an isolated label with no clear reason or owner.",
  },
  {
    principle: "Preserve disagreement",
    description:
      "Different fictional stakeholders may reasonably interpret impact, privacy, service, evidence, or recovery differently.",
    strongPractice:
      "Record each rationale, evidence, assumption, uncertainty, and final authorized decision.",
    failure:
      "Forced consensus can hide meaningful tradeoffs and unresolved conditions.",
  },
  {
    principle: "Check current and future state separately",
    description:
      "Fictional deployed conditions, proposed designs, temporary controls, degraded operation, and recovery states require distinct review.",
    strongPractice:
      "Label every scenario and decision by state.",
    failure:
      "A future proposal may be treated as current exposure or a planned control as operating.",
  },
  {
    principle: "Review evidence quality, not just presence",
    description:
      "A fictional document, event, dashboard, ticket, or diagram may be stale, incomplete, unhealthy, transformed, or unowned.",
    strongPractice:
      "Record source, version, owner, timestamp, health, meaning, limits, and affected decisions.",
    failure:
      "The model can appear evidence-rich while relying on weak sources.",
  },
  {
    principle: "Test controls for failure and recovery",
    description:
      "Fictional mitigations should be reviewed beyond normal operation.",
    strongPractice:
      "Ask what happens when the control is delayed, unavailable, stale, misconfigured, overloaded, or dependent on unhealthy evidence.",
    failure:
      "The control may become a new single point of failure.",
  },
  {
    principle: "Make actions measurable",
    description:
      "Every fictional finding should have an owner, due condition, evidence requirement, and closure test.",
    strongPractice:
      "Close only when the updated model and supporting evidence satisfy the criterion.",
    failure:
      "Actions such as “improve logging” can remain open indefinitely or be closed without proof.",
  },
  {
    principle: "Review the review",
    description:
      "The fictional review process should itself be checked for missing perspectives, conflicts, rushed decisions, hidden assumptions, and unresolved risk.",
    strongPractice:
      "End with a retrospective on coverage, fairness, evidence, ownership, and next triggers.",
    failure:
      "A review meeting can create confidence without improving the model.",
  },
];

const reviewDimensions = [
  {
    dimension: "Purpose and decision scope",
    questions:
      "What fictional decision does the model support? Who will use it? Which systems, environments, states, time period, and outcomes are included or excluded?",
    strongEvidence:
      "Purpose statement, scope boundary, audience, inclusions, exclusions, version, and review objective.",
    warning:
      "A broad title does not prove the model covers every related component or state.",
    likelyActions:
      "Clarify decision, narrow or expand scope, create follow-up models, and publish exclusions.",
  },
  {
    dimension: "Assets and mission value",
    questions:
      "Are fictional mission, data, identity, service, privacy, evidence, safety, trust, recovery, and human outcomes represented?",
    strongEvidence:
      "Asset inventory, mission owner input, classification, user journey, dependency context, and recovery needs.",
    warning:
      "A model focused only on servers or data can miss user, workflow, evidence, and recovery impact.",
    likelyActions:
      "Add missing asset types, owners, value statements, and impact context.",
  },
  {
    dimension: "Actors and authority",
    questions:
      "Are fictional human, service, supplier, automated, support, administrative, emergency, and recovery actors defined by relationship and authority?",
    strongEvidence:
      "Actor inventory, identity source, role, object, conditions, lifecycle, owner, approval, and evidence.",
    warning:
      "Role names do not prove current authority or actor intent.",
    likelyActions:
      "Clarify service identities, stale roles, delegation, emergency access, and ownership.",
  },
  {
    dimension: "Entry points and interfaces",
    questions:
      "Are fictional user, administrative, supplier, file, message, support, monitoring, recovery, and temporary interfaces included?",
    strongEvidence:
      "Interface inventory, purpose, owner, identity, accepted operations, data, environment, evidence, and lifecycle.",
    warning:
      "Temporary and recovery interfaces are often omitted.",
    likelyActions:
      "Add missing interfaces, validate purpose and state, restrict or retire stale channels.",
  },
  {
    dimension: "Data flows and trust boundaries",
    questions:
      "Are fictional sources, destinations, fields, purpose, identity, validation, state, timing, trust changes, evidence, failure, and recovery represented?",
    strongEvidence:
      "Flow table, trust-boundary map, data inventory, event schema, owner review, source health, and recovery path.",
    warning:
      "An arrow alone does not explain trust, data meaning, validation, or failure.",
    likelyActions:
      "Add flow semantics, boundary decisions, field purpose, delay, ordering, retry, and reconciliation.",
  },
  {
    dimension: "Abuse cases and misuse thinking",
    questions:
      "Do fictional scenarios include deliberate, accidental, process, supplier, automation, usability, degraded, and recovery outcomes without operational harmful detail?",
    strongEvidence:
      "Structured abuse-case register with assets, actors, preconditions, outcomes, evidence, controls, owners, and review triggers.",
    warning:
      "A dramatic actor story may hide process or accidental misuse.",
    likelyActions:
      "Rewrite unsafe scenarios, add missing families, preserve intent uncertainty, merge duplicates.",
  },
  {
    dimension: "Threat categories",
    questions:
      "Do fictional categories improve questions and ownership without being treated as proof, severity, or actor labels?",
    strongEvidence:
      "Primary and limited secondary categories, rationale, evidence, uncategorized concerns, and coverage review.",
    warning:
      "Category inflation and category collapse both reduce usefulness.",
    likelyActions:
      "Revise labels, preserve custom concerns, separate category from severity.",
  },
  {
    dimension: "Risk ranking",
    questions:
      "Are fictional impact, likelihood, exposure, control strength, uncertainty, confidence, priority, urgency, and residual risk defined and supported?",
    strongEvidence:
      "Published criteria, scenario-specific rationale, control evidence, disagreement, owners, and review triggers.",
    warning:
      "Numerical-looking scores can create false precision.",
    likelyActions:
      "Reassess unsupported bands, pause decision-blocking cases, document confidence and owner rationale.",
  },
  {
    dimension: "Mitigation quality",
    questions:
      "Do fictional controls address root conditions and include design, prevention, detection, response, recovery, privacy, governance, communication, evidence, and tradeoffs?",
    strongEvidence:
      "Control objectives, option comparison, selected layers, owners, dependencies, limitations, validation, and residual risk.",
    warning:
      "A control list may not prove implementation, operation, or effectiveness.",
    likelyActions:
      "Improve traceability, add failure-state review, define evidence, assign owners, and document residual risk.",
  },
  {
    dimension: "Assumptions and limits",
    questions:
      "Are fictional observations, interpretations, assumptions, unknowns, exclusions, constraints, confidence, consequences, expiration, and review triggers visible?",
    strongEvidence:
      "Assumption register, limitations register, evidence provenance, decision-blocking queue, and revision history.",
    warning:
      "Hidden assumptions can control the entire model.",
    likelyActions:
      "Rewrite vague assumptions, assign owners, add expiration, publish caveats, and pause unsupported decisions.",
  },
  {
    dimension: "Ownership and governance",
    questions:
      "Does every important fictional asset, risk, mitigation, evidence source, assumption, action, and residual-risk decision have accountable ownership?",
    strongEvidence:
      "Responsibility map, decision rights, approvals, review dates, exceptions, acceptance, and retirement records.",
    warning:
      "Shared responsibility does not replace one accountable owner.",
    likelyActions:
      "Assign owners, clarify authority, expire exceptions, and define sign-off scope.",
  },
  {
    dimension: "Maintenance and change",
    questions:
      "Does the fictional model define versions, review cadence, change triggers, reopened findings, evidence updates, and retirement?",
    strongEvidence:
      "Version history, review schedule, trigger list, change log, action status, and archived decisions.",
    warning:
      "A one-time model quickly becomes stale.",
    likelyActions:
      "Create maintenance plan, automate safe reminders, and connect reviews to design and recovery changes.",
  },
];

const defectTypes = [
  {
    defect: "Scope overclaim",
    example:
      "The fictional report says the entire platform was reviewed, but mobile, supplier-internal, and recovery interfaces are excluded.",
    decisionRisk:
      "Readers may apply conclusions to areas that were never analyzed.",
    correction:
      "Publish exact inclusions, exclusions, states, time period, and follow-up models.",
  },
  {
    defect: "Unsupported conclusion",
    example:
      "A missing ticket field is described as proof of malicious support activity.",
    decisionRisk:
      "The model may create unfair, inaccurate, or fear-based decisions.",
    correction:
      "Separate observation, interpretation, hypothesis, assumption, unknown, and intent.",
  },
  {
    defect: "Missing traceability",
    example:
      "A High risk has no linked asset, abuse case, evidence, control, owner, or assumption.",
    decisionRisk:
      "The priority cannot be explained, validated, or maintained.",
    correction:
      "Build a complete trace from context to decision and review.",
  },
  {
    defect: "Stale evidence",
    example:
      "A fictional role map predates a major workflow and supplier change.",
    decisionRisk:
      "Actor, authority, entry point, flow, and risk conclusions may be wrong.",
    correction:
      "Mark evidence stale, assign an owner, and pause dependent decisions where necessary.",
  },
  {
    defect: "Category inflation",
    example:
      "Every fictional scenario has eight categories with no distinct owners or controls.",
    decisionRisk:
      "Labels stop helping comparison and ownership.",
    correction:
      "Choose one primary category and only meaningful secondary categories.",
  },
  {
    defect: "False precision",
    example:
      "The fictional register uses exact scores without defined scales or evidence rationale.",
    decisionRisk:
      "Numbers may appear objective while hiding uncertainty and inconsistent judgment.",
    correction:
      "Publish criteria, preserve rationale, use confidence, and avoid unsupported exactness.",
  },
  {
    defect: "Control assumption",
    example:
      "A mitigation is treated as effective because it appears in a design document.",
    decisionRisk:
      "Residual risk may be understated.",
    correction:
      "Separate designed, implemented, operating, monitored, reviewed, and resilient evidence.",
  },
  {
    defect: "Single-control dependence",
    example:
      "Prevention, detection, response, and validation all rely on the same fictional dashboard.",
    decisionRisk:
      "One evidence failure can hide unsafe state and weaken recovery.",
    correction:
      "Add independent evidence, failure behavior, safe defaults, and reconciliation.",
  },
  {
    defect: "Unowned assumption",
    example:
      "The model assumes supplier result ordering but no fictional owner must validate it.",
    decisionRisk:
      "The belief can remain stale while major controls depend on it.",
    correction:
      "Assign owner, evidence, confidence, expiration, consequence, and review trigger.",
  },
  {
    defect: "Current/future-state confusion",
    example:
      "A proposed analytics flow is ranked as current deployed exposure.",
    decisionRisk:
      "Priorities and incident language become misleading.",
    correction:
      "Label current, future, temporary, degraded, recovery, and retired states separately.",
  },
  {
    defect: "Missing recovery review",
    example:
      "The fictional mitigation prevents stale updates but has no plan for existing incorrect business state.",
    decisionRisk:
      "Technical control success may not restore user, workflow, evidence, or trust outcomes.",
    correction:
      "Add recovery sequencing, reconciliation, communication, closure, and owner evidence.",
  },
  {
    defect: "Unsafe operational detail",
    example:
      "The public fictional portfolio includes procedural harmful instructions or real internal-style details.",
    decisionRisk:
      "The artifact may become unsafe, inappropriate, or expose sensitive information.",
    correction:
      "Use outcome-focused, invented, non-operational content and remove real-system details.",
  },
];

const reviewRoles = [
  {
    role: "Facilitator",
    responsibility:
      "Defines the fictional review objective, agenda, criteria, decision rights, time boundaries, and respectful challenge process.",
    questions:
      "Are reviewers discussing the same scenario and decision? Are disagreements and actions being recorded?",
    evidence:
      "Agenda, criteria, attendance, decision log, action log, and retrospective.",
  },
  {
    role: "System or architecture owner",
    responsibility:
      "Validates fictional components, interfaces, flows, boundaries, dependencies, environments, and change history.",
    questions:
      "Does the model reflect current and proposed architecture states accurately?",
    evidence:
      "Architecture version, interface inventory, flow table, owner review, and change record.",
  },
  {
    role: "Mission or business owner",
    responsibility:
      "Validates fictional service outcomes, user impact, priority, tolerance, urgency, and residual-risk decisions.",
    questions:
      "Are important mission, user, communication, and trust consequences represented?",
    evidence:
      "Service objectives, user journeys, business-impact notes, and risk acceptance.",
  },
  {
    role: "Security reviewer",
    responsibility:
      "Challenges fictional scenarios, categories, controls, evidence, assumptions, and residual-risk reasoning.",
    questions:
      "Do conclusions follow from evidence? Are controls layered and failure-aware?",
    evidence:
      "Abuse cases, risk register, mitigation package, evidence matrix, and finding log.",
  },
  {
    role: "Privacy or data owner",
    responsibility:
      "Validates fictional data purpose, fields, sharing, inference, audience, retention, access, and deletion.",
    questions:
      "Does the model minimize data and preserve responsible use across monitoring and suppliers?",
    evidence:
      "Data inventory, field-purpose record, privacy review, retention, access, and deletion evidence.",
  },
  {
    role: "Operations or support owner",
    responsibility:
      "Validates fictional workflows, human actions, tickets, exceptions, usability, workload, and degraded operation.",
    questions:
      "Will controls work under real fictional pressure without unsafe workarounds?",
    evidence:
      "Workflow records, support themes, quality review, training, and fake-data user testing.",
  },
  {
    role: "Supplier owner",
    responsibility:
      "Validates fictional external purpose, identity, fields, responsibilities, evidence, failures, changes, recovery, and offboarding.",
    questions:
      "Which assumptions depend on supplier confirmation or shared responsibility?",
    evidence:
      "Supplier inventory, interface definition, owner statements, change record, recovery plan, and exit decision.",
  },
  {
    role: "Recovery or continuity owner",
    responsibility:
      "Validates fictional restore order, identities, dependencies, reconciliation, communication, evidence, and closure.",
    questions:
      "Can the organization restore correct business state rather than only technical availability?",
    evidence:
      "Recovery exercise, source artifacts, validation, reconciliation, communication, and closure review.",
  },
  {
    role: "Accessibility and user advocate",
    responsibility:
      "Validates fictional clarity, accessibility, burden, fairness, support pathways, and user protection.",
    questions:
      "Could controls or failures create confusion, exclusion, delay, or unsafe user decisions?",
    evidence:
      "User journeys, accessibility review, message testing, support feedback, and appeal paths.",
  },
  {
    role: "Independent challenger",
    responsibility:
      "Tests fictional reasoning and alternatives without owning the original model decision.",
    questions:
      "What would need to be true for this conclusion to be wrong? Which alternative explanations remain?",
    evidence:
      "Challenge notes, alternative hypotheses, contradiction log, and revised decisions.",
  },
];

const findingFields = [
  {
    field: "Finding identifier",
    purpose:
      "Give the fictional finding a stable reference.",
    strongExample:
      "REV-09",
    weakExample:
      "Issue with model.",
  },
  {
    field: "Review criterion",
    purpose:
      "State which fictional quality standard is not met.",
    strongExample:
      "Risk rankings must show impact, likelihood, control evidence, uncertainty, confidence, owner, and review trigger.",
    weakExample:
      "Risk section needs work.",
  },
  {
    field: "Observation",
    purpose:
      "Describe what the fictional reviewer sees without adding unsupported conclusions.",
    strongExample:
      "Three High residual risks have no linked control-operating evidence.",
    weakExample:
      "The controls are bad.",
  },
  {
    field: "Decision impact",
    purpose:
      "Explain why the fictional defect matters.",
    strongExample:
      "Residual-risk reduction may be overstated and mitigation priority may be incorrect.",
    weakExample:
      "It is important.",
  },
  {
    field: "Evidence",
    purpose:
      "List the fictional records that support the finding.",
    strongExample:
      "Risk register rows RR-02, RR-05, RR-07 and the mitigation evidence matrix.",
    weakExample:
      "The document.",
  },
  {
    field: "Evidence limits",
    purpose:
      "Explain what the fictional review does not prove.",
    strongExample:
      "Missing attached evidence does not prove the controls are absent or ineffective.",
    weakExample:
      "More checking may be needed.",
  },
  {
    field: "Review severity",
    purpose:
      "Rate how urgently the model defect affects decisions.",
    strongExample:
      "High review severity because final residual-risk acceptance depends on the unsupported control effect.",
    weakExample:
      "Critical because it looks serious.",
  },
  {
    field: "Corrective action",
    purpose:
      "Define the fictional change or evidence needed.",
    strongExample:
      "Control owners attach operating, source-health, failure, and recovery evidence or revise residual rankings.",
    weakExample:
      "Improve controls.",
  },
  {
    field: "Owner",
    purpose:
      "Assign one fictional accountable role.",
    strongExample:
      "Fictional control assurance owner.",
    weakExample:
      "The team.",
  },
  {
    field: "Completion criterion",
    purpose:
      "Define the fictional evidence required to close the finding.",
    strongExample:
      "Each affected risk shows current control evidence, limits, revised residual rationale, owner approval, and review date.",
    weakExample:
      "When fixed.",
  },
  {
    field: "Status and due condition",
    purpose:
      "Track whether the fictional finding is open, blocked, accepted, complete, reopened, or retired.",
    strongExample:
      "Open—blocks final sign-off until evidence or revised rankings are approved.",
    weakExample:
      "Pending.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define when the fictional finding or related area must be reconsidered.",
    strongExample:
      "Reopen after control, supplier, queue, identity, recovery, or evidence-source change.",
    weakExample:
      "Review later.",
  },
];

const reviewWorkflow = [
  {
    step: "1",
    title: "Define the review objective",
    action:
      "State which fictional decision, release, architecture, risk register, mitigation package, or maintenance milestone the review supports.",
    output:
      "Review charter, scope, criteria, participants, decision rights, and safety boundary.",
    quality:
      "The review has a clear purpose and does not claim to certify perfect security.",
  },
  {
    step: "2",
    title: "Prepare the evidence package",
    action:
      "Collect only the supplied fictional model, registers, diagrams, flows, evidence, decisions, versions, and change history.",
    output:
      "Review index with evidence provenance and known gaps.",
    quality:
      "Every source has an owner, date, version, meaning, health, and limitation.",
  },
  {
    step: "3",
    title: "Run individual pre-review",
    action:
      "Ask each fictional reviewer to identify strengths, defects, questions, contradictions, and missing perspectives before the meeting.",
    output:
      "Independent notes and preliminary findings.",
    quality:
      "The review is not dominated by the original author or the first speaker.",
  },
  {
    step: "4",
    title: "Review scope and context",
    action:
      "Validate fictional purpose, assets, actors, entry points, flows, boundaries, dependencies, environments, states, and exclusions.",
    output:
      "Updated scope and context findings.",
    quality:
      "Current, future, temporary, degraded, and recovery states are distinguished.",
  },
  {
    step: "5",
    title: "Review scenarios and categories",
    action:
      "Examine fictional abuse cases, misuse families, category rationale, overlap, uncategorized concerns, and intent uncertainty.",
    output:
      "Scenario-quality and category-coverage findings.",
    quality:
      "No scenario contains operational harmful instructions or unsupported actor claims.",
  },
  {
    step: "6",
    title: "Review risk and mitigation",
    action:
      "Check fictional impact, likelihood, controls, uncertainty, residual risk, priority, layered mitigations, tradeoffs, evidence, and ownership.",
    output:
      "Risk-quality and mitigation-quality findings.",
    quality:
      "Category is separate from severity, and control listings are separate from operating effectiveness.",
  },
  {
    step: "7",
    title: "Review assumptions and limits",
    action:
      "Validate fictional assumptions, confidence, consequences, owners, expiration, exclusions, constraints, evidence gaps, and decision blocking.",
    output:
      "Assumption, limitation, and model-confidence findings.",
    quality:
      "Hidden assumptions are converted into visible, owned, time-bound records.",
  },
  {
    step: "8",
    title: "Record decisions and actions",
    action:
      "Assign fictional finding severity, owner, completion criterion, status, due condition, blocked decisions, and review trigger.",
    output:
      "Finding register, action plan, decision log, and disagreement log.",
    quality:
      "Actions are measurable and cannot be closed by assertion alone.",
  },
  {
    step: "9",
    title: "Verify closure",
    action:
      "Review supplied fictional completion evidence and update affected model sections, confidence, risks, mitigations, assumptions, and history.",
    output:
      "Closure evidence and revised model version.",
    quality:
      "Closure addresses the criterion and downstream decisions, not only the wording of the finding.",
  },
  {
    step: "10",
    title: "Set maintenance and triggers",
    action:
      "Define fictional scheduled reviews and event-driven reviews for architecture, identity, supplier, data, control, incident lesson, recovery, ownership, and mission changes.",
    output:
      "Maintenance calendar, trigger list, reopened-finding rules, and retrospective.",
    quality:
      "The model remains a living decision artifact.",
  },
];

const evidenceMatrix = [
  {
    id: "RV-01",
    source: "Fictional threat-model scope",
    observation:
      "The model includes the web portal and connected services but excludes the mobile client and supplier-internal architecture.",
    supports:
      "The scope is bounded and exclusions are visible.",
    limits:
      "Shared identity, notification, supplier, or recovery dependencies may still affect included decisions.",
    reviewUse:
      "Check whether exclusions are appropriately isolated or need follow-up models.",
  },
  {
    id: "RV-02",
    source: "Fictional risk register",
    observation:
      "Four residual risks are marked High; two have Moderate confidence and two are provisional.",
    supports:
      "The register distinguishes confidence and provisional status.",
    limits:
      "The labels do not prove consistent criteria or sufficient control evidence.",
    reviewUse:
      "Trace each High risk to scenario, impact, likelihood, controls, uncertainty, owner, and trigger.",
  },
  {
    id: "RV-03",
    source: "Fictional mitigation package",
    observation:
      "Nine controls are planned or designed without complete operating, failure, or recovery evidence.",
    supports:
      "Implementation readiness and validation work remain open.",
    limits:
      "The register does not prove the controls are absent or ineffective.",
    reviewUse:
      "Prevent unsupported residual-risk reduction and assign evidence actions.",
  },
  {
    id: "RV-04",
    source: "Fictional assumptions register",
    observation:
      "Three assumptions lack owners, and one identity assumption expired after a recovery-design change.",
    supports:
      "Ownership and maintenance defects affect dependent decisions.",
    limits:
      "The record does not prove the underlying assumptions are false.",
    reviewUse:
      "Pause dependent sign-off until assumptions are validated, revised, or retired.",
  },
  {
    id: "RV-05",
    source: "Fictional category worksheet",
    observation:
      "Four scenarios use more secondary categories than distinct owner or control decisions justify.",
    supports:
      "Category inflation may reduce clarity.",
    limits:
      "Multiple categories are not automatically wrong.",
    reviewUse:
      "Retain only labels that change assets, evidence, controls, owners, or recovery.",
  },
  {
    id: "RV-06",
    source: "Fictional support-ticket review",
    observation:
      "Several notification changes lack reason and user-confirmation fields.",
    supports:
      "Accountability and process evidence are incomplete.",
    limits:
      "The evidence does not prove unauthorized action, malicious intent, or harmful outcome.",
    reviewUse:
      "Check whether abuse cases and risks preserve neutral language and evidence limits.",
  },
  {
    id: "RV-07",
    source: "Fictional recovery exercise",
    observation:
      "Application service returned before notification and archival dependencies were validated.",
    supports:
      "Recovery sequencing, reconciliation, communication, identity, and closure need review.",
    limits:
      "One exercise does not prove production frequency or all current controls.",
    reviewUse:
      "Verify that recovery findings are represented in risk, mitigation, assumptions, and maintenance.",
  },
  {
    id: "RV-08",
    source: "Fictional supplier-field inventory",
    observation:
      "A free-text support-note field exists in the documented request schema, but current use and retention are unresolved.",
    supports:
      "A privacy and governance decision remains blocked.",
    limits:
      "The inventory does not prove current population or misuse.",
    reviewUse:
      "Check whether the model properly labels the evidence gap and future action.",
  },
];

const commonMistakes = [
  {
    mistake: "Treating review as proofreading",
    why:
      "Grammar and formatting do not validate fictional scope, evidence, risk rationale, controls, assumptions, ownership, or recovery.",
    correction:
      "Use published review criteria and trace decisions across the entire model.",
  },
  {
    mistake: "Reviewing only technical sections",
    why:
      "Privacy, users, mission, support, suppliers, accessibility, governance, and recovery may be missed.",
    correction:
      "Use multidisciplinary fictional reviewers and affected-owner evidence.",
  },
  {
    mistake: "Letting the original author answer every question",
    why:
      "The review may depend on undocumented personal knowledge rather than the artifact.",
    correction:
      "Require the model and evidence to support the conclusion independently.",
  },
  {
    mistake: "Closing findings with promises",
    why:
      "Statements such as “we will improve this” do not show the fictional criterion is met.",
    correction:
      "Use measurable completion evidence and review downstream decisions.",
  },
  {
    mistake: "Confusing review severity with threat risk",
    why:
      "A model defect can be urgent because it blocks a decision even when the underlying scenario is Moderate.",
    correction:
      "Rate review findings based on decision impact and closure urgency.",
  },
  {
    mistake: "Hiding disagreement",
    why:
      "Different fictional owners may have valid evidence or impact perspectives.",
    correction:
      "Record disagreement, assumptions, evidence, uncertainty, and final decision authority.",
  },
  {
    mistake: "Assuming more evidence means better evidence",
    why:
      "Fictional logs, dashboards, tickets, and diagrams can be stale, incomplete, noisy, unhealthy, or over-collected.",
    correction:
      "Review provenance, meaning, purpose, freshness, health, completeness, and privacy.",
  },
  {
    mistake: "Signing off with open decision-blocking gaps",
    why:
      "The fictional model may support conclusions it cannot responsibly justify.",
    correction:
      "Pause affected decisions or provide conditional sign-off with explicit blocked areas.",
  },
  {
    mistake: "Ignoring safe-publication review",
    why:
      "A fictional portfolio can still include operational harmful detail or real internal-style information.",
    correction:
      "Verify complete fictionalization, non-operational framing, privacy, and absence of real targets.",
  },
  {
    mistake: "Using real threat-model reviews",
    why:
      "Real findings, gaps, owners, suppliers, systems, controls, recovery details, and priorities may be sensitive.",
    correction:
      "Invent every organization, model, finding, owner, evidence record, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the review charter",
    action:
      "Define the fictional decision, scope, criteria, reviewers, decision rights, evidence package, timeline, and safety boundary.",
    output:
      "Review charter and agenda.",
    quality:
      "The review objective is narrower than “make the model perfect.”",
  },
  {
    step: "2",
    title: "Build the review index",
    action:
      "List fictional model sections, evidence sources, versions, owners, dates, health, limits, and missing items.",
    output:
      "Evidence and artifact index.",
    quality:
      "Every source can be traced and evaluated.",
  },
  {
    step: "3",
    title: "Run independent checks",
    action:
      "Use the twelve review dimensions to identify fictional strengths, defects, contradictions, and missing perspectives.",
    output:
      "Individual reviewer worksheets.",
    quality:
      "Reviewers complete initial analysis before group discussion.",
  },
  {
    step: "4",
    title: "Facilitate the group review",
    action:
      "Compare fictional findings, challenge reasoning, preserve disagreement, classify decision impact, and identify blocked areas.",
    output:
      "Meeting notes, challenge log, and decision log.",
    quality:
      "The discussion focuses on evidence and model quality rather than personal blame.",
  },
  {
    step: "5",
    title: "Write structured findings",
    action:
      "Record criterion, observation, decision impact, evidence, limits, review severity, action, owner, completion criterion, status, and trigger.",
    output:
      "Threat-model review findings register.",
    quality:
      "Each finding is specific, evidence-aware, and measurable.",
  },
  {
    step: "6",
    title: "Update the model",
    action:
      "Revise fictional scope, scenarios, categories, risks, mitigations, assumptions, owners, caveats, and maintenance where findings require change.",
    output:
      "Revised model version with change history.",
    quality:
      "Changes update downstream decisions, not only wording.",
  },
  {
    step: "7",
    title: "Verify closure",
    action:
      "Check fictional completion evidence against each criterion and reopen findings when change or contradiction remains.",
    output:
      "Closure record and residual open-items list.",
    quality:
      "No action closes through assertion alone.",
  },
  {
    step: "8",
    title: "Prepare sign-off and maintenance",
    action:
      "Summarize fictional decision-ready areas, conditional areas, blocked areas, accepted residual uncertainty, owners, review dates, and triggers.",
    output:
      "Leadership summary, conditional sign-off, maintenance plan, technical appendix, and retrospective.",
    quality:
      "Sign-off explains scope and limits and never guarantees perfect security.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of reviewing a threat model?",
    choices: [
      "To prove the system is perfectly secure.",
      "To check whether the fictional model is scoped, evidence-aware, consistent, decision-ready, maintainable, and safe.",
      "To find someone responsible for every weakness.",
      "To add more technical terminology.",
    ],
    answer: 1,
    explanation:
      "A review improves decision quality and model trustworthiness; it does not certify perfect security.",
  },
  {
    question:
      "Which finding is strongest?",
    choices: [
      "The risk section is bad.",
      "Three fictional High residual risks lack linked control-operating evidence, so residual reduction may be overstated; control owners must provide evidence or revise the rankings.",
      "The team should improve security.",
      "The reviewer does not like the scoring method.",
    ],
    answer: 1,
    explanation:
      "The strongest finding identifies criterion, observation, decision impact, action, and ownership.",
  },
  {
    question:
      "Why should disagreement be preserved?",
    choices: [
      "To make meetings longer.",
      "Because different fictional stakeholders may have valid evidence, impact, privacy, service, or recovery perspectives.",
      "Because no final decision should ever be made.",
      "Because every reviewer must use a different score.",
    ],
    answer: 1,
    explanation:
      "Documented disagreement exposes assumptions and improves the final authorized decision.",
  },
  {
    question:
      "A fictional control appears in a design document but has no operating evidence. What should the review conclude?",
    choices: [
      "The control is fully effective.",
      "The control is absent.",
      "The control is designed, but implementation and operating effectiveness remain unproven.",
      "The residual risk is automatically Low.",
    ],
    answer: 2,
    explanation:
      "Design evidence supports intent, not full operation or resilience.",
  },
  {
    question:
      "What should happen when an assumption expires and affects risk acceptance?",
    choices: [
      "Keep using it until the next annual review.",
      "Mark it expired, identify affected decisions, assign validation, and pause dependent acceptance when necessary.",
      "Delete the assumption history.",
      "Assume it remains correct.",
    ],
    answer: 1,
    explanation:
      "Expired assumptions must trigger traceable review and possible decision pause.",
  },
  {
    question:
      "What is a completion criterion?",
    choices: [
      "A statement that the team worked on the finding.",
      "The fictional evidence or condition required before a review action can be closed.",
      "The original risk score.",
      "The reviewer's personal preference.",
    ],
    answer: 1,
    explanation:
      "Completion criteria make closure measurable and reviewable.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real threat-model review but remove organization names.",
      "Use real findings and change dates.",
      "Invent every organization, model, finding, owner, evidence record, control, date, decision, and outcome from scratch.",
      "Use a real recovery review because it is defensive.",
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

export default function ReviewingAThreatModelPage() {
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
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Quality and Decision Review
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.9 Reviewing a Threat Model
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders review a complete fictional threat
            model for scope, evidence, consistency, coverage, risk quality,
            mitigation traceability, ownership, assumptions, limits, safety,
            communication, and maintenance. A review does not prove perfect
            security—it tests whether the model can support responsible
            decisions.
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
          lessonTitle="Reviewing a Threat Model"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, systems, evidence, findings, actions, owners, dates, decisions, controls, and outcomes.",
            "I understand that a threat-model review checks decision quality and model trustworthiness but does not certify perfect security.",
            "I will challenge fictional evidence, reasoning, assumptions, and traceability without accusing people or assuming intent.",
            "I will preserve disagreement, uncertainty, blocked decisions, scope limits, exclusions, and residual risk.",
            "I will require measurable completion criteria before closing fictional review findings.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real internal threat-model reviews.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Complete-Looking Model Can Still Be Decision-Unsafe"
        >
          <p className="leading-8">
            A fictional Northbridge threat model contains polished diagrams,
            eighteen abuse cases, four High risks, and several mitigation
            packages. During review, the team discovers that three High risks
            lack operating control evidence, one identity assumption expired,
            four scenarios use inflated categories, and the recovery exercise
            is not connected to the mitigation register. The model is detailed,
            but several decisions are not yet trustworthy.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>
              <p className="mt-2 leading-7">
                “The document is long and professional, so it is approved.”
                Appearance does not validate scope, evidence, ownership,
                controls, assumptions, recovery, or decision readiness.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>
              <p className="mt-2 leading-7">
                “Conditional approval: scope and scenarios are usable, but final
                residual-risk acceptance is blocked until expired assumptions
                and missing control evidence are resolved.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A review should identify what is decision-ready, what is
            conditional, what is blocked, what must be corrected, and who owns
            the next evidence—not simply label the model good or bad.
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
          title="Review Prevents Detail from Becoming False Confidence"
        >
          <p className="leading-8">
            Fictional threat models combine many artifacts and judgments.
            Review helps teams discover contradictions, missing perspectives,
            unsupported risk reductions, hidden assumptions, unowned actions,
            weak evidence, unsafe publication detail, and stale decisions before
            those problems guide architecture or governance.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Quality question",
                "Does each fictional conclusion follow from defined scope, evidence, assumptions, and criteria?",
              ],
              [
                "Decision question",
                "Which parts of the model are ready, conditional, blocked, or accepted with residual uncertainty?",
              ],
              [
                "Maintenance question",
                "Who owns changes, evidence, closure, expiration, review triggers, and reopened findings?",
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
          title="The R-E-V-I-E-W Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "R — Reconfirm purpose and scope",
                "Validate the fictional decision, audience, inclusions, exclusions, states, versions, and review criteria.",
              ],
              [
                "E — Examine evidence",
                "Check source, owner, freshness, health, completeness, meaning, conflict, transformation, and limits.",
              ],
              [
                "V — Verify traceability",
                "Connect assets, actors, interfaces, flows, boundaries, scenarios, categories, risks, controls, assumptions, owners, and triggers.",
              ],
              [
                "I — Identify defects and disagreement",
                "Record unsupported claims, contradictions, missing perspectives, stale assumptions, weak controls, and alternative views.",
              ],
              [
                "E — Establish actions and closure",
                "Assign review severity, owner, evidence requirement, completion criterion, blocked decision, and due condition.",
              ],
              [
                "W — Watch change over time",
                "Set versions, review dates, triggers, reopened-finding rules, maintenance ownership, and retrospective learning.",
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
              Decision-ready review statement
            </p>
            <p className="mt-2 leading-7">
              The fictional review used published criteria and multidisciplinary
              evidence to identify ready, conditional, blocked, accepted, and
              open areas. Every material finding has a rationale, evidence,
              limitation, owner, completion criterion, status, and review
              trigger. Sign-off applies only to the stated scope and does not
              guarantee perfect security.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Threat-Model Quality Review"
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
            Apply Ten Review Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviewPrinciples.map((item) => (
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
          title="Review Twelve Model Dimensions"
        >
          <p className="leading-8">
            A complete fictional review checks technical and non-technical
            quality. Each dimension below includes decision questions, expected
            evidence, common limits, and likely follow-up actions.
          </p>

          <div className="mt-6 grid gap-5">
            {reviewDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongEvidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Warning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.warning}</p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-cyan-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Likely actions
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.likelyActions}
                    </p>
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
            Recognize Twelve Common Model Defects
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {defectTypes.map((item) => (
              <article
                key={item.defect}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.defect}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision risk
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.decisionRisk}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Use Ten Multidisciplinary Review Roles"
        >
          <div className="grid gap-5">
            {reviewRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{item.role}</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.responsibility}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Write Every Finding with Twelve Fields"
        >
          <div className="grid gap-5">
            {findingFields.map((item, index) => (
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
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Review Charter to Living Model
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewWorkflow.map((item) => (
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
        </section>

        <SectionCard
          eyebrow="Traceability Review"
          title="Follow One Fictional Decision from Context to Maintenance"
        >
          <p className="leading-8">
            The table below shows how a reviewer can trace the fictional
            supplier-result integrity concern across the complete model.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Model element",
                    "Fictional record",
                    "Review question",
                    "Expected decision link",
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
                    "Asset",
                    "Case-state integrity, user communication, evidence, service, and trust.",
                    "Are all affected values and owners represented?",
                    "Impact dimensions and mission priority.",
                  ],
                  [
                    "Actor",
                    "Supplier service identity, queue service, workflow service, support reviewer.",
                    "Are relationship, authority, lifecycle, and evidence clear?",
                    "Identity, authorization, accountability, and recovery.",
                  ],
                  [
                    "Entry point",
                    "Supplier result interface and queue.",
                    "Are purpose, accepted operations, state, environment, and lifecycle current?",
                    "Exposure and control scope.",
                  ],
                  [
                    "Data flow",
                    "Processing result from supplier to queue to workflow.",
                    "Are source, destination, state, version, ordering, delay, validation, and evidence defined?",
                    "Integrity scenario and mitigation objective.",
                  ],
                  [
                    "Trust boundary",
                    "Supplier-to-Northbridge administrative boundary.",
                    "Which identity, schema, state, evidence, and failure controls justify trust?",
                    "Boundary control requirements.",
                  ],
                  [
                    "Abuse case",
                    "Delayed or stale result updates current case state.",
                    "Are preconditions, outcome, evidence, intent uncertainty, and owners complete?",
                    "Scenario identifier and defensive questions.",
                  ],
                  [
                    "Category",
                    "Primary integrity; secondary availability, dependency, accountability, resilience.",
                    "Does each label change a decision or owner?",
                    "Category rationale and coverage.",
                  ],
                  [
                    "Risk",
                    "High provisional residual risk with Moderate confidence.",
                    "Are impact, likelihood, controls, uncertainty, and urgency supported?",
                    "Priority and owner decision.",
                  ],
                  [
                    "Mitigation",
                    "State-version validation, correlation, delay monitoring, controlled review, reconciliation, communication.",
                    "Does the package address normal, failure, degraded, and recovery states?",
                    "Risk reduction and validation evidence.",
                  ],
                  [
                    "Assumption",
                    "Queue ordering is preserved for one case reference.",
                    "Is the assumption owned, evidenced, time-bound, and traceable?",
                    "Confidence, consequence, and review trigger.",
                  ],
                  [
                    "Review finding",
                    "Operating evidence for reconciliation and failure-state behavior is incomplete.",
                    "Does the finding block residual-risk acceptance?",
                    "Action owner and completion criterion.",
                  ],
                  [
                    "Maintenance",
                    "Review after supplier, queue, identity, schema, recovery, or evidence change.",
                    "Are triggers and reopened-finding rules defined?",
                    "Living model and version history.",
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
          eyebrow="Review Readiness Matrix"
          title="Ready, Conditional, Blocked, Accepted, and Reopened"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "Ready",
                "The fictional area meets criteria with current evidence, ownership, limits, and review triggers.",
              ],
              [
                "Conditional",
                "The fictional decision may proceed under stated assumptions, controls, deadlines, evidence actions, and owner approval.",
              ],
              [
                "Blocked",
                "A decision cannot proceed responsibly because scope, evidence, ownership, control state, or uncertainty is insufficient.",
              ],
              [
                "Accepted",
                "An authorized fictional owner accepts residual risk or a model limit under documented conditions and review.",
              ],
              [
                "Reopened",
                "A previously closed fictional finding becomes relevant after new evidence, change, failure, or recovery results.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="font-black text-cyan-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Sign-off may be conditional or partial. A fictional reviewer should
            never turn open decision-blocking gaps into silent approval.
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Threat-Model Review Dashboard"
          subtitle="Fictional model quality, findings, blocked decisions, closure, and maintenance status for training only."
          metrics={[
            {
              label: "Open review findings",
              value: "12",
              note: "Four concern evidence, three concern assumptions, two concern category quality, two concern recovery, and one concerns safe publication.",
            },
            {
              label: "Decision-blocking findings",
              value: "3",
              note: "Expired identity assumption, unresolved supplier field use, and unsupported control effectiveness block final sign-off.",
            },
            {
              label: "Findings with owners and closure criteria",
              value: "10 / 12",
              note: "Two findings still use vague team ownership and cannot be responsibly closed.",
            },
          ]}
        />

        <FakeAlertCard
          title="Conditional Sign-Off Omits a Decision-Blocking Assumption"
          severity="High"
          time="5:16 PM"
          source="Fake Northbridge Review Governance Console"
          details="The fictional review summary says the model is approved, but the archival service-identity assumption expired after a recovery-design change. Identity, governance, archival, and recovery conclusions still depend on the expired statement."
          recommendation="Revise sign-off to conditional or blocked for affected decisions. Assign an owner, validate only supplied fictional evidence, update dependent risks and mitigations, record the limitation, and define closure criteria."
        />

        <FakeLogPanel
          title="Fake Threat-Model Review Timeline"
          logs={[
            "09:00 REVIEW charter='approved' scope='web+services'",
            "09:08 EVIDENCE index='complete' gaps='supplier-field,control-operation'",
            "09:16 SCOPE mobile='excluded' shared-dependency='identity+notification'",
            "09:24 ASSET mission='reviewed' privacy='reviewed' recovery='reviewed'",
            "09:32 ACTOR archive-identity owner='missing'",
            "09:40 FLOW supplier-result traceability='complete'",
            "09:48 SCENARIO intent-language='neutral'",
            "09:56 CATEGORY inflation='4-scenarios'",
            "10:04 RISK control-evidence='missing-3-high-risks'",
            "10:12 MITIGATION failure-state='partial'",
            "10:20 ASSUMPTION expired='archive-identity'",
            "10:28 LIMIT current-future-state='clear'",
            "10:36 FINDING open='12' blocking='3'",
            "10:44 OWNER assigned='10-of-12'",
            "10:52 SIGNOFF status='conditional'",
            "11:00 ACTION supplier-field-validation='required'",
            "11:08 ACTION control-evidence='required'",
            "11:16 ACTION assumption-review='required'",
            "11:24 CONFIDENCE review='moderate'",
            "17:16 ALERT issue='signoff-omits-blocker'",
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
                    ["Review use", item.reviewUse],
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
          title="Which Review Decision Is Best Supported?"
          question="Which conclusion most responsibly summarizes the fictional model review?"
          evidence={[
            "The fictional scope clearly includes the web portal and connected services and excludes the mobile client and supplier-internal architecture.",
            "Four residual risks are High, but three lack complete control-operating evidence.",
            "One archival service-identity assumption expired after a recovery-design change.",
            "A supplier free-text field remains unresolved and blocks final privacy ranking.",
            "Four scenarios show category inflation.",
            "The recovery exercise is reflected in risk but only partially traced to mitigation validation.",
            "Most findings have owners and completion criteria, but two still use vague team ownership.",
            "The public artifact contains no real targets or operational harmful instructions.",
          ]}
          options={[
            "Issue conditional sign-off for the decision-ready scope, block affected residual-risk and privacy decisions, assign measurable actions and owners, revise inflated categories, update recovery traceability, and preserve model limits and triggers.",
            "Approve the entire model because most sections are detailed.",
            "Reject the entire model because some uncertainty remains.",
            "Mark every open finding Critical and remove all risk decisions.",
          ]}
          bestAnswer={0}
          explanation="The first option distinguishes ready, conditional, and blocked areas, uses the supplied evidence, preserves uncertainty, assigns actions, and avoids both false approval and unnecessary rejection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Threat-Model Reviews"
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
          title="Run the Northbridge Threat-Model Review"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real findings, gaps, owners,
            suppliers, logs, configurations, incidents, controls, recovery
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
          title="A Reviewer Wants to Approve the Model despite Open Blockers"
          scenario="The fictional project deadline is near. Three findings block residual-risk acceptance, but a reviewer suggests approving the model and resolving evidence later."
          choices={[
            {
              label: "Choice A",
              response:
                "Issue conditional sign-off only for decision-ready areas, keep affected decisions blocked, assign owners and completion criteria, and schedule a focused closure review.",
              outcome:
                "Best defensive choice. It preserves progress without hiding material uncertainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve everything because deadlines are important.",
              outcome:
                "Weak. Schedule pressure does not make unsupported decisions reliable.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reject every part of the model until no uncertainty remains.",
              outcome:
                "Overly rigid. Useful areas can proceed conditionally while blockers remain visible.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Finding Is Closed with a Promise"
          scenario="The fictional action says “improve monitoring.” The owner writes “we will do this soon” and marks the finding Complete."
          choices={[
            {
              label: "Choice A",
              response:
                "Reopen the finding, define the exact evidence objective, owner, fields, source health, privacy limits, validation, completion evidence, and review trigger.",
              outcome:
                "Best choice. Closure requires evidence that the review criterion is met.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep it closed because the owner accepted responsibility.",
              outcome:
                "Weak. Responsibility without completion evidence does not resolve the finding.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the finding so the dashboard looks complete.",
              outcome:
                "Unsafe. Removing unresolved quality defects creates false confidence.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Resolve a Review Disagreement about Sign-Off"
        >
          <p className="leading-8">
            The fictional architecture owner wants full approval because scope
            and flows are current. The privacy owner blocks approval because the
            supplier free-text field is unresolved. The recovery owner wants
            conditional approval because sequencing controls are planned but not
            validated. Build a sign-off decision that preserves all three
            perspectives.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Separate decision areas",
                "Identify architecture, privacy, recovery, and residual-risk decisions instead of forcing one overall label.",
              ],
              [
                "Define readiness",
                "Mark each fictional area Ready, Conditional, Blocked, Accepted, or Reopened.",
              ],
              [
                "Preserve evidence",
                "Record the evidence and limits supporting each owner's position.",
              ],
              [
                "Assign authority",
                "Identify who can approve architecture, privacy, recovery, and residual-risk decisions.",
              ],
              [
                "Create closure gates",
                "Define evidence and completion criteria for blocked and conditional areas.",
              ],
              [
                "Write the sign-off",
                "State exact scope, conditions, exclusions, residual uncertainty, owners, dates, and triggers.",
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
              Produce a fictional sign-off matrix, disagreement log, evidence
              table, blocked-decision list, conditional requirements, owner
              authority map, completion criteria, maintenance triggers, and
              leadership explanation of why partial approval can be more honest
              than one overall decision.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Reviewing a Threat Model Checklist"
          items={[
            "I can define a fictional review objective, scope, criteria, participants, decision rights, and safety boundary.",
            "I can review purpose, assets, actors, entry points, flows, trust boundaries, abuse cases, categories, risks, mitigations, assumptions, ownership, and maintenance.",
            "I can distinguish a model defect from the underlying threat risk.",
            "I can identify unsupported conclusions, stale evidence, missing traceability, false precision, category inflation, control assumptions, and unsafe detail.",
            "I can review evidence provenance, health, completeness, freshness, meaning, ownership, and limits.",
            "I can preserve multidisciplinary disagreement and document final decision authority.",
            "I can classify model areas as Ready, Conditional, Blocked, Accepted, Reopened, or Retired.",
            "I can write findings with criterion, observation, decision impact, evidence, limits, severity, action, owner, completion criterion, status, and trigger.",
            "I can require operating, failure, recovery, privacy, and source-health evidence before treating a mitigation as effective.",
            "I can trace findings to downstream categories, risks, mitigations, assumptions, residual risk, recovery, and sign-off.",
            "I can create review dates, change triggers, reopened-finding rules, versions, closure evidence, and retrospective learning.",
            "I can create a completely fictional review package without copying or modifying real findings, gaps, owners, suppliers, controls, incidents, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A3.9 Mini Quiz: Reviewing a Threat Model"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Threat-Model Review Package for the Northbridge Student-Support Portal. Include review objective, scope, exclusions, safety boundary, review criteria, multidisciplinary roles, artifact index, evidence provenance, twelve-dimension review worksheet, at least fifteen findings, finding identifiers, observations, decision impacts, evidence, evidence limits, review severity, corrective actions, owners, completion criteria, statuses, due conditions, blocked decisions, disagreements, conditional approvals, closure evidence, updated model decisions, reopened-finding rules, version history, maintenance schedule, change triggers, leadership summary, technical appendix, retrospective, and a statement that every organization, model, asset, actor, system, finding, owner, evidence record, control, date, decision, and outcome is invented."
          tips={[
            "Review the fictional model against published criteria rather than personal preference.",
            "Separate model-quality findings from the underlying threat-risk severity.",
            "Require measurable evidence before closing findings or counting control effects.",
            "Use Ready, Conditional, Blocked, Accepted, and Reopened states to communicate decision readiness honestly.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the Threat-Modeling Workshop?"
        >
          <p className="leading-8">
            Before moving to A3.10, rate your readiness from 1 to 5 for review
            scope, criteria, evidence, traceability, defect identification,
            multidisciplinary challenge, disagreement, findings, closure,
            sign-off, maintenance, safe publication, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a detailed fictional model may still be unsafe for decisions.",
              "I can review the full chain from assets and actors to risks, mitigations, assumptions, owners, and maintenance.",
              "I can separate review severity from threat-risk severity.",
              "I can challenge evidence and reasoning without blaming people or assuming intent.",
              "I can write measurable findings and closure criteria.",
              "I can issue partial, conditional, or blocked sign-off when evidence requires it.",
              "I can identify when a closed finding should be reopened after change or new evidence.",
              "I can create a complete fictional review artifact without copying, modifying, or exposing real organizational information.",
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
            Record one fictional finding you rewrote to become measurable, one
            blocked decision, one disagreement you preserved, one closure
            criterion, and one workshop skill you will carry into A3.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A threat-model review tests fictional scope, evidence, consistency, coverage, decision readiness, maintenance, and safety; it does not certify perfect security.",
            "Review should challenge the model and evidence rather than accuse people or assume intent.",
            "Important decisions require traceability from assets and actors through scenarios, risks, mitigations, assumptions, owners, and triggers.",
            "Evidence presence is not enough; provenance, freshness, health, completeness, meaning, ownership, and limits matter.",
            "Review findings and threat risks use different severity concepts.",
            "A control should not reduce residual risk without evidence of implementation, operation, monitoring, failure behavior, and recovery.",
            "Multidisciplinary disagreement can reveal hidden assumptions and improve the authorized decision.",
            "Ready, Conditional, Blocked, Accepted, and Reopened states communicate decision quality more honestly than one approval label.",
            "Findings require owners, measurable completion criteria, closure evidence, and review triggers.",
            "Every CyberShield threat-model review artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, combine the complete A3 workflow in a safe fictional workshop:
            scope the model, map assets and actors, trace flows and boundaries,
            write abuse cases, categorize threats, rank risks, choose
            mitigations, document assumptions, and conduct a final review.
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