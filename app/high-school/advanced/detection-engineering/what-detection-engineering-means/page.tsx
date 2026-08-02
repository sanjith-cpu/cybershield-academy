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
const previousPage = modulePath;
const nextLesson = `${modulePath}/data-sources-for-detection`;

const objectives = [
  "Explain detection engineering as a mission-driven defensive lifecycle that converts risks and defender questions into tested, documented, maintainable detection capabilities.",
  "Differentiate observations, evidence, behavior hypotheses, conceptual logic, detections, alerts, triage decisions, response actions, and confirmed outcomes.",
  "Define fictional detection scope using assets, identities, users, devices, services, suppliers, trust boundaries, evidence sources, privacy, exclusions, ownership, and review triggers.",
  "Evaluate fictional detection quality through usefulness, evidence health, coverage, precision, missed conditions, analyst effort, operational impact, and lifecycle maturity.",
  "Create a portfolio-ready fictional detection-engineering charter with mission questions, stakeholders, safety boundaries, evidence needs, ownership, quality measures, and maintenance requirements.",
];

const vocabulary = [
  [
    "Detection engineering",
    "A fictional defensive discipline that turns mission risks and defender questions into evidence-aware, tested, tuned, documented, measurable, owned, and maintainable detection capabilities.",
  ],
  [
    "Mission risk",
    "A fictional condition that could affect users, identities, services, data, suppliers, policy, evidence, privacy, availability, or recovery outcomes.",
  ],
  [
    "Defender question",
    "A fictional question that an analyst or owner must answer to make a bounded defensive decision.",
  ],
  [
    "Observation",
    "A fictional statement describing what supplied evidence shows without unsupported conclusions about cause, intent, scope, or impact.",
  ],
  [
    "Evidence source",
    "A fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, or source-health record used to answer a defender question.",
  ],
  [
    "Behavior hypothesis",
    "A fictional explanation of an expected, unusual, risky, or policy-relevant sequence or relationship that should be tested against evidence.",
  ],
  [
    "Detection logic concept",
    "A fictional description of conditions, relationships, time windows, sequences, counts, exclusions, source requirements, and missing-data behavior used to identify an observation.",
  ],
  [
    "Detection",
    "A fictional capability that evaluates evidence according to documented logic and produces a defined result for defender review.",
  ],
  [
    "Alert",
    "A fictional output indicating that supplied evidence matched a detection condition and requires contextual interpretation.",
  ],
  [
    "Triage",
    "A fictional process for evaluating alert evidence, source health, identity, service, authorization, alternatives, scope, impact, priority, and next action.",
  ],
  [
    "Enrichment",
    "Fictional context added to an alert, such as asset value, identity role, device class, service purpose, change, maintenance, ownership, or source health.",
  ],
  [
    "False positive",
    "A fictional alert that appears concerning but is explained by acceptable, authorized, or expected activity after review.",
  ],
  [
    "False negative",
    "A fictional meaningful condition that the detection did not identify.",
  ],
  [
    "Expected alert",
    "A fictional alert that correctly reports a defined condition even when the activity is approved or benign and still requires awareness.",
  ],
  [
    "Unknown outcome",
    "A fictional alert or test result that cannot be classified confidently because evidence, context, coverage, ownership, or source health is incomplete.",
  ],
  [
    "Detection coverage",
    "The fictional extent to which a detection can evaluate the relevant identities, assets, services, environments, time periods, states, and evidence sources.",
  ],
  [
    "Detection precision",
    "The fictional proportion of alerts that are useful and correctly aligned with the documented detection objective.",
  ],
  [
    "Source health",
    "Fictional evidence about freshness, completeness, timing, schema, transformation, duplication, queue age, provenance, retention, and blind periods.",
  ],
  [
    "Detection tuning",
    "A fictional controlled process for improving precision and usefulness with context, thresholds, exclusions, timing, ownership, testing, and rollback.",
  ],
  [
    "Detection lifecycle",
    "A fictional sequence covering purpose, design, evidence, logic, testing, approval, deployment, observation, tuning, review, change, retirement, and lessons learned.",
  ],
  [
    "Detection owner",
    "The fictional role accountable for purpose, testing, documentation, tuning, source dependencies, analyst guidance, quality review, and retirement.",
  ],
  [
    "Analyst action",
    "A fictional bounded next step, such as requesting evidence, validating ownership, confirming change, escalating impact, or closing with documented explanation.",
  ],
  [
    "Residual risk",
    "The fictional uncertainty or potential impact that remains after the detection and related controls are considered.",
  ],
  [
    "Review trigger",
    "A fictional event requiring revalidation, such as source, field, identity, application, network, supplier, policy, privacy, threat, workflow, ownership, or mission change.",
  ],
];

const principles = [
  {
    principle: "Begin with a defender question",
    description:
      "A fictional detection should exist because someone must answer a meaningful defensive question.",
    strongPractice:
      "Ask whether a privileged role remained active after an approved emergency window and which evidence confirms revocation.",
    failure:
      "An alert may produce noise without helping an analyst decide what to do.",
  },
  {
    principle: "Trace detections to mission risk",
    description:
      "Every fictional detection should protect a user, identity, service, data flow, trust boundary, supplier, policy, evidence source, or recovery outcome.",
    strongPractice:
      "Connect stale emergency access to the risk of privileged authority outliving its approved purpose.",
    failure:
      "Teams may build detections because a field exists rather than because the capability matters.",
  },
  {
    principle: "Separate observation from conclusion",
    description:
      "A fictional alert records a match; it does not automatically establish compromise, intent, cause, scope, or impact.",
    strongPractice:
      "State that a service identity reached a new destination and then review deployment, policy, ownership, source health, and application context.",
    failure:
      "Unsupported certainty can cause poor escalation or unnecessary disruption.",
  },
  {
    principle: "Design around evidence quality",
    description:
      "Fictional logic is only as trustworthy as the sources, fields, timing, coverage, transformations, and health that support it.",
    strongPractice:
      "Reduce alert confidence when a required application source is delayed.",
    failure:
      "A detection may appear reliable while operating on incomplete or stale context.",
  },
  {
    principle: "Test positive and negative behavior",
    description:
      "Fictional testing should prove both that intended conditions alert and that acceptable alternatives do not alert incorrectly.",
    strongPractice:
      "Test stale-role, approved-maintenance, expired-exception, missing-field, and source-degraded cases.",
    failure:
      "A detection may pass one positive test while generating excessive noise or missing important variations.",
  },
  {
    principle: "Tune narrowly and reversibly",
    description:
      "Fictional tuning should add context or precise exclusions without hiding broad classes of meaningful behavior.",
    strongPractice:
      "Exclude a documented maintenance identity only during the approved window and only for the expected destination.",
    failure:
      "Broad suppression can reduce alert volume while increasing false negatives.",
  },
  {
    principle: "Document for analysts and owners",
    description:
      "Fictional detection documentation should explain purpose, evidence, logic, limitations, severity, questions, response guidance, and lifecycle.",
    strongPractice:
      "Include what the alert supports, what it does not prove, and which evidence should be collected next.",
    failure:
      "Analysts may interpret the same alert inconsistently or rely on outdated assumptions.",
  },
  {
    principle: "Measure usefulness, not only volume",
    description:
      "Fictional detection quality should consider coverage, missed conditions, analyst usefulness, evidence health, response time, user impact, and maintenance effort.",
    strongPractice:
      "Track how often the alert helps answer its defender question and how often required context is missing.",
    failure:
      "A low-volume detection may still be weak, while a high-volume alert may represent important expected conditions.",
  },
  {
    principle: "Assign lifecycle ownership",
    description:
      "Fictional detections require accountable roles for sources, logic, testing, triage guidance, tuning, exceptions, review, and retirement.",
    strongPractice:
      "Name a detection owner, source owners, service owner, analyst owner, privacy reviewer, and review schedule.",
    failure:
      "The capability may become stale after source, field, service, identity, or policy change.",
  },
  {
    principle: "Preserve safe fictionalization",
    description:
      "Every A5 artifact should be invented and incapable of exposing or changing real systems, identities, behavior, alerts, rules, or incidents.",
    strongPractice:
      "Create fake organizations, source names, events, fields, test cases, alerts, findings, owners, dates, and decisions.",
    failure:
      "A public portfolio may reveal sensitive architecture, activity, providers, or defensive capabilities.",
  },
];

const disciplineComponents = [
  {
    component: "Mission and risk",
    question:
      "Which fictional user, service, identity, data, supplier, policy, evidence, or recovery outcome needs defensive visibility?",
    output:
      "Mission-risk statement and detection priority.",
    example:
      "Detect when emergency administrative authority remains active after an approved exercise.",
    limit:
      "A mission statement does not prove which evidence sources or logic are available.",
  },
  {
    component: "Defender question",
    question:
      "What exactly must a fictional analyst or owner determine?",
    output:
      "Question, decision use, non-proof statement, owner, and priority.",
    example:
      "Did the emergency role remain effectively assigned beyond its approved end time?",
    limit:
      "A question does not guarantee that current evidence can answer it.",
  },
  {
    component: "Evidence sources",
    question:
      "Which fictional records can support the question, and how healthy are they?",
    output:
      "Source inventory, required fields, provenance, coverage, privacy, and health.",
    example:
      "Role assignment, approval, group membership, session, revocation, and source-health records.",
    limit:
      "Source presence does not prove completeness or correct correlation.",
  },
  {
    component: "Behavior hypothesis",
    question:
      "Which fictional sequence or relationship would represent the condition of interest?",
    output:
      "Expected behavior, meaningful deviation, alternatives, assumptions, and confidence.",
    example:
      "Emergency role remains assigned after the approved end time and no valid extension exists.",
    limit:
      "A hypothesis is not a confirmed event or cause.",
  },
  {
    component: "Conceptual logic",
    question:
      "Which fictional conditions, windows, relationships, exclusions, and missing-data rules represent the hypothesis?",
    output:
      "Detection-logic specification.",
    example:
      "Role active after approved expiration, no current extension, source health acceptable, and revocation not confirmed.",
    limit:
      "Logic can reflect only the fields and states it was designed to evaluate.",
  },
  {
    component: "Testing",
    question:
      "Does the fictional logic alert and not alert in the right invented cases?",
    output:
      "Positive, negative, boundary, missing-field, maintenance, degraded-source, and regression tests.",
    example:
      "Approved extension should not alert; expired role without revocation should alert.",
    limit:
      "Synthetic tests cannot prove all future operating behavior.",
  },
  {
    component: "Alert and triage",
    question:
      "What fictional result appears, and which analyst questions and evidence requests follow?",
    output:
      "Alert content, severity rationale, enrichment, triage guide, and closure criteria.",
    example:
      "High-priority stale-role alert with identity, approval, source-health, and next-evidence fields.",
    limit:
      "The alert does not prove misuse or harmful action.",
  },
  {
    component: "Tuning and quality",
    question:
      "Which fictional false positives, false negatives, expected alerts, unknowns, and source failures occurred?",
    output:
      "Quality metrics, defect register, tuning decisions, validation, and rollback.",
    example:
      "Approved extensions were initially missing from context and created avoidable alerts.",
    limit:
      "Lower alert volume does not automatically mean better coverage.",
  },
  {
    component: "Documentation and ownership",
    question:
      "Who maintains the fictional detection and how can others understand it?",
    output:
      "Specification, analyst guide, source ownership, change history, review schedule, and retirement criteria.",
    example:
      "Identity-detection owner reviews after role-model or approval-system changes.",
    limit:
      "Documentation does not prove current implementation unless validated.",
  },
  {
    component: "Lifecycle improvement",
    question:
      "When must the fictional detection be reviewed, changed, paused, or retired?",
    output:
      "Review triggers, observations, source-health monitoring, recertification, lessons learned, and replacement plan.",
    example:
      "Revalidate after emergency-access workflow, role schema, source, or recovery-process changes.",
    limit:
      "A once-successful detection may become stale as the environment changes.",
  },
];

const roleMatrix = [
  {
    role: "Detection owner",
    responsibility:
      "Own the fictional purpose, logic, testing, tuning, documentation, quality, review, and retirement.",
    evidence:
      "Specification, test results, change history, quality metrics, owner review, and lifecycle record.",
    failure:
      "The detection can become stale or unmaintained.",
  },
  {
    role: "Data-source owner",
    responsibility:
      "Maintain fictional source meaning, fields, freshness, coverage, schema, access, retention, and health.",
    evidence:
      "Source catalog, field dictionary, health metrics, change notices, and blind-period records.",
    failure:
      "Logic may silently lose fields or context.",
  },
  {
    role: "Service or asset owner",
    responsibility:
      "Explain fictional mission purpose, expected behavior, criticality, changes, maintenance, user impact, and recovery.",
    evidence:
      "Service catalog, dependency map, change records, maintenance schedule, and owner validation.",
    failure:
      "Detections may misclassify legitimate behavior or miss critical impact.",
  },
  {
    role: "Identity owner",
    responsibility:
      "Define fictional user, service, supplier, privileged, emergency, and recovery identities and lifecycle.",
    evidence:
      "Role model, assignments, approvals, authentication, authorization, revocation, and review.",
    failure:
      "Identity-based logic may rely on stale roles or incomplete context.",
  },
  {
    role: "Analyst or triage owner",
    responsibility:
      "Use fictional alerts, ask defender questions, gather evidence, preserve uncertainty, escalate proportionately, and document closure.",
    evidence:
      "Triage guide, case record, evidence request, decision, escalation, and closure.",
    failure:
      "Alerts may be handled inconsistently.",
  },
  {
    role: "Privacy reviewer",
    responsibility:
      "Confirm fictional fields, retention, access, enrichment, and analyst use are necessary and proportionate.",
    evidence:
      "Purpose statement, field minimization, access roles, retention, deletion, and review.",
    failure:
      "Detection data may reveal more personal or internal detail than needed.",
  },
  {
    role: "Platform or deployment owner",
    responsibility:
      "Maintain fictional deployment, versioning, approval, observation, rollback, availability, and change control.",
    evidence:
      "Version, approval, release record, rollback, health, and deployment validation.",
    failure:
      "A correct design may be implemented incorrectly or inconsistently.",
  },
  {
    role: "Leadership or risk owner",
    responsibility:
      "Approve fictional priorities, resources, accepted limitations, residual risks, milestones, and review expectations.",
    evidence:
      "Risk decision, funding, priority, acceptance, action owner, and milestone review.",
    failure:
      "Important detection gaps may remain unowned or under-resourced.",
  },
];

const qualityDimensions = [
  {
    dimension: "Mission usefulness",
    question:
      "Does the fictional detection help answer a real defender question and support a bounded decision?",
    strongEvidence:
      "Analysts consistently use the alert to validate a meaningful condition or escalate a confirmed impact.",
    warning:
      "Alert volume alone does not establish usefulness.",
  },
  {
    dimension: "Coverage",
    question:
      "Which fictional identities, assets, services, environments, states, time periods, and evidence sources are represented?",
    strongEvidence:
      "Documented scope, representative tests, source inventory, blind periods, and missed-condition review.",
    warning:
      "A passing test can hide untested environments or missing fields.",
  },
  {
    dimension: "Precision",
    question:
      "How often do fictional alerts align with the intended detection objective?",
    strongEvidence:
      "Reviewed true alerts, expected alerts, false positives, unknowns, and analyst feedback.",
    warning:
      "Precision can improve by suppressing too broadly and harming coverage.",
  },
  {
    dimension: "Missed-condition risk",
    question:
      "Which fictional meaningful cases did the detection fail to identify?",
    strongEvidence:
      "Negative findings, regression tests, retrospective review, and source-gap analysis.",
    warning:
      "No known misses does not prove no misses occurred.",
  },
  {
    dimension: "Evidence health",
    question:
      "Are fictional sources fresh, complete, correctly timed, transformed, correlated, and available?",
    strongEvidence:
      "Health metrics, queue age, schema checks, provenance, alternate evidence, and blind-period records.",
    warning:
      "A connected source can still provide stale or incomplete events.",
  },
  {
    dimension: "Analyst effort",
    question:
      "How much fictional time and context does an analyst need to understand and act on the alert?",
    strongEvidence:
      "Triage timing, evidence availability, enrichment quality, escalation clarity, and analyst feedback.",
    warning:
      "Reducing investigation time should not remove necessary context.",
  },
  {
    dimension: "Operational impact",
    question:
      "Could the fictional detection or related response disrupt users, services, suppliers, privacy, or recovery?",
    strongEvidence:
      "Response guidance, severity rationale, validation, rollback, user-impact review, and owner approval.",
    warning:
      "A correct alert can still lead to a harmful response.",
  },
  {
    dimension: "Maintainability",
    question:
      "Can fictional owners understand, test, tune, review, change, and retire the detection?",
    strongEvidence:
      "Current documentation, version history, owners, tests, dependencies, review triggers, and retirement criteria.",
    warning:
      "Complexity without documentation increases hidden failure risk.",
  },
  {
    dimension: "Resilience",
    question:
      "What happens when fictional sources, fields, platforms, identities, DNS, networks, or analyst workflows are degraded?",
    strongEvidence:
      "Missing-data behavior, source-health states, alternate evidence, fail-limited guidance, and recovery tests.",
    warning:
      "A detection that fails silently can create false confidence.",
  },
  {
    dimension: "Ethics and privacy",
    question:
      "Does the fictional detection collect and expose only the information needed for the approved purpose?",
    strongEvidence:
      "Field minimization, role-based access, retention, deletion, purpose, review, and safe portfolio boundaries.",
    warning:
      "More data may increase privacy and trust risk without improving the decision.",
  },
];

const evidenceMatrix = [
  {
    id: "A5-01",
    source: "Fictional mission-risk brief",
    observation:
      "The student-support environment uses emergency administrative roles during recovery exercises.",
    supports:
      "A defender question about stale emergency authority is mission-relevant.",
    limits:
      "The brief does not prove stale access occurred or that current sources can detect it.",
    use:
      "Define the detection purpose and stakeholders.",
  },
  {
    id: "A5-02",
    source: "Fictional identity source catalog",
    observation:
      "Role assignment, approval, group membership, authentication, session, and revocation evidence is available.",
    supports:
      "Several source types can contribute to a stale-role detection.",
    limits:
      "The catalog does not prove freshness, completeness, field consistency, or correlation.",
    use:
      "Specify required fields and source-health requirements.",
  },
  {
    id: "A5-03",
    source: "Fictional exercise timeline",
    observation:
      "An emergency role was approved for a two-hour exercise, and the role remained visible twenty minutes after the documented end.",
    supports:
      "A role-state difference exists after the approved window.",
    limits:
      "The timeline does not prove effective access, lack of extension, misuse, or harmful action.",
    use:
      "Create a behavior hypothesis and next-evidence questions.",
  },
  {
    id: "A5-04",
    source: "Fictional source-health dashboard",
    observation:
      "Role-assignment evidence is current, while group-membership evidence is eight minutes delayed.",
    supports:
      "Confidence in the assignment state is stronger than confidence in effective group removal.",
    limits:
      "Delay does not prove access remained effective or that events were lost.",
    use:
      "Define Degraded logic behavior and analyst guidance.",
  },
  {
    id: "A5-05",
    source: "Fictional test summary",
    observation:
      "The initial detection alerted on expired roles but also alerted when an approved extension was recorded in a separate source.",
    supports:
      "The logic needs extension context to improve precision.",
    limits:
      "One false-positive case does not prove all extension handling is wrong.",
    use:
      "Add an approved-extension relationship and regression test.",
  },
  {
    id: "A5-06",
    source: "Fictional analyst review",
    observation:
      "Analysts found the alert useful only when identity, approval end time, extension state, source health, and next questions were included.",
    supports:
      "Context and triage guidance affect detection usefulness.",
    limits:
      "Analyst feedback does not prove complete coverage or absence of missed conditions.",
    use:
      "Improve enrichment, documentation, and quality metrics.",
  },
  {
    id: "A5-07",
    source: "Fictional privacy review",
    observation:
      "Exact personal profile fields were unnecessary; role identifier, owner group, approval, timing, and source-health fields answered the defender question.",
    supports:
      "The detection can use minimized identity evidence.",
    limits:
      "The review does not prove all future cases require the same field set.",
    use:
      "Document purpose-based field minimization and review triggers.",
  },
  {
    id: "A5-08",
    source: "Fictional lifecycle record",
    observation:
      "The emergency-access workflow will change next term, but the detection has no assigned review trigger.",
    supports:
      "Lifecycle ownership and revalidation are incomplete.",
    limits:
      "The missing trigger does not prove current logic is incorrect.",
    use:
      "Assign owner, due date, change dependency, and recertification requirement.",
  },
];

const commonMistakes = [
  {
    mistake: "Starting with a product feature",
    observation:
      "A fictional detection is created because a platform offers a field or template.",
    impact:
      "The result may not support a meaningful defender question.",
    correction:
      "Start with mission risk, decision need, and evidence requirements.",
  },
  {
    mistake: "Copying logic without context",
    observation:
      "A fictional rule is reused without reviewing identities, services, fields, source health, workflows, or expected behavior.",
    impact:
      "The detection may create noise or miss the actual risk.",
    correction:
      "Rebuild the behavior hypothesis and validate the local fictional context.",
  },
  {
    mistake: "Alert equals incident",
    observation:
      "A fictional alert is immediately labeled as a confirmed compromise.",
    impact:
      "Analysts may escalate, block, or blame without evidence.",
    correction:
      "Separate observation, alternatives, confidence, scope, impact, and intent.",
  },
  {
    mistake: "Ignoring missing data",
    observation:
      "A fictional detection behaves the same when a required source is delayed or absent.",
    impact:
      "The alert may produce false certainty or fail silently.",
    correction:
      "Define source-health states, missing-data behavior, confidence changes, and analyst guidance.",
  },
  {
    mistake: "Testing only positive cases",
    observation:
      "A fictional detection alerts on the one intended case and is approved.",
    impact:
      "Expected activity, edge cases, and field gaps may create noise or misses.",
    correction:
      "Add negative, boundary, maintenance, change, missing-field, degraded-source, and regression cases.",
  },
  {
    mistake: "Suppressing noisy categories",
    observation:
      "A fictional team excludes an entire identity group after repeated maintenance alerts.",
    impact:
      "Meaningful behavior outside the maintenance context may be hidden.",
    correction:
      "Tune by documented identity, destination, time, change, owner, and expiration.",
  },
  {
    mistake: "Measuring only alert count",
    observation:
      "A fictional detection is judged successful because weekly alert volume decreased.",
    impact:
      "Coverage loss, missed conditions, analyst confusion, or source failure may remain hidden.",
    correction:
      "Measure usefulness, coverage, precision, misses, source health, effort, and impact.",
  },
  {
    mistake: "No detection owner",
    observation:
      "A fictional alert remains active after source and workflow changes, but no role owns review.",
    impact:
      "Logic, documentation, tests, and response guidance become stale.",
    correction:
      "Assign lifecycle ownership and review triggers.",
  },
  {
    mistake: "Overcollecting identity detail",
    observation:
      "A fictional detection retains personal attributes unrelated to the defender question.",
    impact:
      "Privacy and access risk increases without improving the decision.",
    correction:
      "Use purpose-limited fields and minimized enrichment.",
  },
  {
    mistake: "Using real evidence in a portfolio",
    observation:
      "A fictional-style project includes copied alerts, internal names, logs, domains, supplier activity, or real user behavior.",
    impact:
      "Sensitive systems, people, and defensive capabilities may be exposed.",
    correction:
      "Invent every source, field, event, identity, alert, test, owner, date, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Write the detection mission",
    action:
      "Define the fictional user, service, identity, supplier, policy, evidence, or recovery outcome the capability protects.",
    output:
      "Mission-risk and detection-purpose statement.",
    quality:
      "The purpose explains why the detection matters to the mission.",
  },
  {
    step: "2",
    title: "Create defender questions",
    action:
      "Write fictional questions about observation, authorization, identity, destination, sequence, source health, scope, impact, and ownership.",
    output:
      "Defender-question catalog.",
    quality:
      "Each question supports one bounded decision and includes what it cannot prove.",
  },
  {
    step: "3",
    title: "Map stakeholders and owners",
    action:
      "Assign fictional detection, source, identity, service, analyst, privacy, deployment, and risk owners.",
    output:
      "Detection responsibility matrix.",
    quality:
      "Every lifecycle task has one accountable role.",
  },
  {
    step: "4",
    title: "Inventory evidence needs",
    action:
      "List fictional sources, fields, provenance, freshness, completeness, coverage, privacy, source health, and blind periods.",
    output:
      "Evidence-source and health register.",
    quality:
      "Required and optional evidence are distinguished.",
  },
  {
    step: "5",
    title: "Form behavior hypotheses",
    action:
      "Describe fictional expected behavior, meaningful deviation, sequence, relationships, alternatives, and assumptions.",
    output:
      "Behavior-hypothesis library.",
    quality:
      "No hypothesis is written as a confirmed malicious event.",
  },
  {
    step: "6",
    title: "Define conceptual logic",
    action:
      "Specify fictional conditions, time windows, counts, sequences, relationships, exclusions, missing-data behavior, severity, and confidence.",
    output:
      "Detection-logic design sheet.",
    quality:
      "Logic traces directly to one defender question and known evidence.",
  },
  {
    step: "7",
    title: "Plan safe testing",
    action:
      "Create invented positive, negative, boundary, maintenance, change, degraded-source, missing-field, privacy, and regression cases.",
    output:
      "Synthetic test plan and expected-results matrix.",
    quality:
      "No real event, system, account, device, domain, or source is used.",
  },
  {
    step: "8",
    title: "Define triage and quality",
    action:
      "Write fictional alert content, enrichment, next questions, evidence requests, escalation, closure, metrics, and missed-condition review.",
    output:
      "Alert, triage, and quality plan.",
    quality:
      "The alert remains an observation and the next decision is clear.",
  },
  {
    step: "9",
    title: "Document lifecycle controls",
    action:
      "Assign fictional testing, tuning, exceptions, approval, change history, source dependencies, review triggers, rollback, and retirement.",
    output:
      "Detection lifecycle and maintenance plan.",
    quality:
      "The capability can be understood and maintained by another reviewer.",
  },
  {
    step: "10",
    title: "Create the portfolio charter",
    action:
      "Combine the fictional mission, questions, evidence, ownership, safety boundary, quality measures, risks, and lifecycle into a professional artifact.",
    output:
      "Detection-engineering charter and executive summary.",
    quality:
      "The final artifact is complete, traceable, privacy-safe, and fully fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of detection engineering?",
    choices: [
      "Watching a dashboard for alerts.",
      "A mission-driven lifecycle that turns risks and defender questions into tested, tuned, documented, measurable, and maintainable detection capabilities.",
      "Collecting every available log.",
      "Blocking every unusual action automatically.",
    ],
    answer: 1,
    explanation:
      "Detection engineering includes purpose, evidence, logic, testing, tuning, documentation, ownership, quality, and lifecycle.",
  },
  {
    question:
      "What should come before fictional detection logic?",
    choices: [
      "An alert severity label.",
      "A mission risk and defender question.",
      "A suppression list.",
      "A dashboard layout.",
    ],
    answer: 1,
    explanation:
      "Logic should represent a meaningful defensive question rather than exist only because data or tooling is available.",
  },
  {
    question:
      "A fictional alert matches a documented condition. What does that prove?",
    choices: [
      "A compromise occurred.",
      "The subject acted maliciously.",
      "The supplied evidence matched the detection logic; context, source health, authorization, scope, impact, and alternatives still require review.",
      "The response should always be automatic blocking.",
    ],
    answer: 2,
    explanation:
      "An alert is an observation, not a complete incident conclusion.",
  },
  {
    question:
      "Why is source health part of detection engineering?",
    choices: [
      "Because connected sources are always complete.",
      "Because freshness, completeness, timing, schema, transformation, and blind periods affect what logic and alerts can support.",
      "Because source health replaces testing.",
      "Because unhealthy sources should always be ignored permanently.",
    ],
    answer: 1,
    explanation:
      "Detection confidence and behavior should change when required evidence is delayed, missing, or unreliable.",
  },
  {
    question:
      "Which fictional test plan is strongest?",
    choices: [
      "One positive example.",
      "Positive, negative, boundary, maintenance, change, missing-field, degraded-source, privacy, and regression cases.",
      "Only cases that are expected to alert.",
      "Real production events copied into a public portfolio.",
    ],
    answer: 1,
    explanation:
      "Diverse invented cases reveal noise, misses, edge conditions, and evidence-dependency problems.",
  },
  {
    question:
      "Which tuning decision is safest?",
    choices: [
      "Suppress the entire administrator identity group.",
      "Use a documented maintenance identity, destination, time window, owner, expiration, test, and rollback.",
      "Disable the detection during every change.",
      "Remove source-health checks to reduce noise.",
    ],
    answer: 1,
    explanation:
      "Narrow, contextual, owned, testable, and reversible tuning protects precision without hiding broad risk.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real alert screenshots with names blurred.",
      "Use real internal source names but fake users.",
      "Invent every organization, source, field, event, identity, alert, test, owner, date, decision, and outcome.",
      "Use real logs because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, evidence, and defensive capabilities.",
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
        href={previousPage}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        A5 Homepage
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

export default function WhatDetectionEngineeringMeansPage() {
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
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Mission, Questions, Evidence, and Lifecycle
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.1 What Detection Engineering Means
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn why detection engineering begins with mission risks and
            defender questions—not alert volume or product features—and how
            professional defenders connect evidence, behavior hypotheses,
            conceptual logic, testing, tuning, documentation, ownership,
            measurement, and lifecycle improvement.
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
          lessonTitle="What Detection Engineering Means"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, identities, sources, fields, events, alerts, tests, owners, dates, decisions, and outcomes.",
            "I understand that a fictional alert is an observation, not automatic proof of compromise, cause, intent, scope, or impact.",
            "I will begin with mission risk and defender questions before designing conceptual logic.",
            "I will include source health, privacy, ownership, testing, tuning, documentation, limitations, and review triggers.",
            "I will preserve alternative explanations and uncertainty when evidence is incomplete.",
            "I will not access, query, collect, monitor, test, deploy, tune, suppress, or investigate any real telemetry, account, endpoint, network, domain, service, alerting platform, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Detection That Cannot Support a Decision Is Only Noise"
        >
          <p className="leading-8">
            A fictional dashboard shows a High alert titled “Privileged Role
            Active after Exercise.” The title sounds serious, but an analyst
            still needs to know which identity, which role, which approved end
            time, whether an extension exists, whether group evidence is
            current, whether effective access remains, which service is
            affected, and what action is safe. Detection engineering exists to
            design that complete decision path.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak detection thinking
              </p>
              <p className="mt-2 leading-7">
                “Create an alert whenever a privileged role is visible after
                hours.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong detection thinking
              </p>
              <p className="mt-2 leading-7">
                “Detect when an emergency role remains effectively assigned
                beyond its approved window, account for extensions and source
                health, and provide analysts with identity, owner, timing,
                evidence, confidence, and next questions.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Good detection engineering connects risk, question, evidence, logic,
            test, alert, analyst decision, ownership, and lifecycle.
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
          title="Detection Engineering Is a Professional Design Discipline"
        >
          <p className="leading-8">
            Fictional detection programs become useful when they explain which
            mission risk matters, which evidence can support a question, which
            behavior should be recognized, which conditions should alert, which
            cases should not alert, how analysts should respond, how privacy is
            protected, and how the capability stays current.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Before the alert",
                "Define fictional mission risk, defender questions, sources, fields, behavior, assumptions, logic, and tests.",
              ],
              [
                "At the alert",
                "Provide fictional evidence, enrichment, source health, confidence, severity, next questions, and bounded action.",
              ],
              [
                "After the alert",
                "Review fictional outcomes, false positives, false negatives, unknowns, tuning, documentation, ownership, and lifecycle.",
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

        <SectionCard eyebrow="Core Framework" title="The D-E-T-E-C-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "D — Define the mission risk",
                "Identify the fictional user, identity, service, data, supplier, policy, evidence, privacy, or recovery outcome that matters.",
              ],
              [
                "E — Express the defender question",
                "State exactly what a fictional analyst or owner must determine and what the detection cannot prove.",
              ],
              [
                "T — Trace the evidence",
                "Map fictional sources, fields, provenance, freshness, completeness, coverage, privacy, health, and blind periods.",
              ],
              [
                "E — Establish the behavior hypothesis",
                "Describe fictional expected behavior, meaningful deviation, sequences, relationships, alternatives, and assumptions.",
              ],
              [
                "C — Create and test conceptual logic",
                "Define fictional conditions, windows, counts, exclusions, missing-data behavior, severity, and synthetic tests.",
              ],
              [
                "T — Tune, document, and maintain",
                "Improve fictional precision, review misses, guide analysts, assign owners, manage changes, and retire stale detections.",
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
              Decision-ready detection statement
            </p>
            <p className="mt-2 leading-7">
              This fictional detection addresses a documented mission risk and
              defender question using named evidence sources, behavior
              assumptions, conceptual logic, safe tests, source-health rules,
              analyst guidance, quality measures, ownership, limitations,
              residual risks, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Engineering"
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
            Apply Ten Detection Engineering Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
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
          title="Connect Ten Components of the Discipline"
        >
          <div className="grid gap-5">
            {disciplineComponents.map((item) => (
              <article
                key={item.component}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.component}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Defender question", item.question],
                    ["Required output", item.output],
                    ["Fictional example", item.example],
                    ["Important limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.component}-${label}`}
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
          title="Separate the Detection Decision Chain"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Stage",
                    "Question answered",
                    "Fictional example",
                    "What it does not prove",
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
                    "Mission risk",
                    "Why does the fictional organization need visibility?",
                    "Emergency access may outlive its approved purpose.",
                    "That the condition occurred.",
                  ],
                  [
                    "Defender question",
                    "What must the fictional analyst determine?",
                    "Did the emergency role remain effectively active after expiration?",
                    "That current sources can answer completely.",
                  ],
                  [
                    "Observation",
                    "What does supplied fictional evidence show?",
                    "The role appears assigned twenty minutes after the approved end.",
                    "That effective access remained or misuse occurred.",
                  ],
                  [
                    "Behavior hypothesis",
                    "Which fictional sequence or relationship may represent the condition?",
                    "Role remains assigned, no extension exists, and revocation is not confirmed.",
                    "That the hypothesis is true in this case.",
                  ],
                  [
                    "Detection logic",
                    "Which fictional conditions should produce a result?",
                    "Expired role, no extension, healthy required source, revocation absent.",
                    "That the logic covers every variation.",
                  ],
                  [
                    "Alert",
                    "What fictional match occurred?",
                    "Stale emergency-role condition matched.",
                    "Compromise, intent, scope, or impact.",
                  ],
                  [
                    "Triage",
                    "Which fictional evidence and questions come next?",
                    "Validate identity, approval, extension, groups, session, source health, and owner.",
                    "That response or containment is already justified.",
                  ],
                  [
                    "Outcome",
                    "What fictional decision was supported?",
                    "Role was stale, removed, validated, and lifecycle improved.",
                    "That future recurrence is impossible.",
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
          eyebrow="Instructional Section 4"
          title="Assign Eight Professional Roles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {roleMatrix.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.responsibility}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    If ownership is weak
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 5
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Ten Detection Quality Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {qualityDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongEvidence}
                  </p>
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
        </section>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Use a Complete Detection Lifecycle"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "1. Intake",
                "Record fictional mission risk, stakeholder, priority, proposed defender question, scope, and exclusions.",
              ],
              [
                "2. Feasibility",
                "Review fictional source availability, fields, coverage, privacy, source health, ownership, and known gaps.",
              ],
              [
                "3. Design",
                "Write fictional behavior hypothesis, alternatives, assumptions, logic concept, severity rationale, and limits.",
              ],
              [
                "4. Test",
                "Run invented positive, negative, boundary, maintenance, change, missing-field, source-degraded, privacy, and regression cases.",
              ],
              [
                "5. Review",
                "Evaluate fictional detection owner, source owner, service owner, analyst, privacy, platform, and risk feedback.",
              ],
              [
                "6. Approve",
                "Record fictional version, expected quality, response guidance, deployment scope, observation period, and rollback.",
              ],
              [
                "7. Observe",
                "Measure fictional alert outcomes, source health, analyst usefulness, noise, misses, impact, and unknowns.",
              ],
              [
                "8. Tune",
                "Add fictional context, adjust conditions, narrow exceptions, retest, compare metrics, and preserve rollback.",
              ],
              [
                "9. Maintain",
                "Review fictional sources, fields, assumptions, workflows, owners, documentation, and quality on schedule and after change.",
              ],
              [
                "10. Retire",
                "Remove fictional detections when the risk, source, logic, service, or replacement capability no longer justifies operation.",
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
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Detection View"
          title="Northbridge Detection Engineering Operating Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches detection relationships without real
            source names, queries, rules, fields, identities, alerts, domains,
            events, platforms, or incident records.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission risks", "Identity, service, supplier, policy, evidence, recovery"],
                ["Defender questions", "Observation, authorization, scope, impact, ownership"],
                ["Evidence sources", "Identity, endpoint, network, DNS, app, cloud, supplier"],
                ["Behavior hypotheses", "Expected state, deviation, sequence, relationship"],
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
                Fictional Detection Engineering Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Purpose", "Mission, risk, question, owner, decision"],
                  ["Sources", "Fields, provenance, coverage, health, privacy"],
                  ["Logic", "Conditions, sequence, time, context, exclusions"],
                  ["Testing", "Positive, negative, edge, degraded, regression"],
                  ["Alert", "Observation, enrichment, confidence, severity"],
                  ["Triage", "Questions, evidence, alternatives, scope, impact"],
                  ["Quality", "Coverage, precision, misses, effort, usefulness"],
                  ["Lifecycle", "Version, review, tuning, change, retirement"],
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
                ["Analyst decisions", "Validate, enrich, escalate, close, reopen"],
                ["Owner decisions", "Approve, tune, accept risk, improve, retire"],
                ["Leadership decisions", "Priority, resources, residual risk, milestones"],
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
          title="Fake Northbridge Detection Engineering Dashboard"
          subtitle="Fictional purpose, source health, test, quality, ownership, and lifecycle status for training only."
          metrics={[
            {
              label: "Detections with current defender questions",
              value: "14 / 18",
              note: "Four fictional detections still begin with alert titles rather than documented decision questions.",
            },
            {
              label: "Detections with complete source-health behavior",
              value: "9 / 18",
              note: "Nine fictional detections require missing-data, delayed-source, or blind-period guidance.",
            },
            {
              label: "Detections past review trigger",
              value: "5",
              note: "Identity, application, DNS, supplier, and recovery changes require revalidation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Emergency Role Active after Approved Window"
          severity="High"
          time="2:18 PM"
          source="Fake Northbridge Identity Detection Console"
          details="The fictional emergency role remains visible twenty minutes after its approved end time. Role-assignment evidence is current, group-membership evidence is delayed by eight minutes, no approved extension is included in the supplied context, and effective access has not been confirmed."
          recommendation="Treat this as a High-priority observation, not proof of misuse. Validate fictional extension, group state, sessions, effective authorization, source health, owner, service impact, revocation, and closure."
        />

        <FakeLogPanel
          title="Fake Detection Design Timeline"
          logs={[
            "09:00 RISK emergency-access='stale-authority'",
            "09:08 QUESTION role-active-after-expiration='defined'",
            "09:16 SOURCE role-assignment='current'",
            "09:24 SOURCE group-membership='delayed-8m'",
            "09:32 HYPOTHESIS stale-role='drafted'",
            "09:40 LOGIC expiration-plus-no-extension='defined'",
            "09:48 TEST positive='passed'",
            "09:56 TEST approved-extension='failed'",
            "10:04 TUNING extension-context='added'",
            "10:12 TEST regression='passed'",
            "10:20 PRIVACY personal-fields='removed'",
            "10:28 DOCUMENTATION analyst-guide='updated'",
            "10:36 OWNER detection='assigned'",
            "10:44 REVIEW source-health='required'",
            "10:52 CONFIDENCE observation='high'",
            "11:00 CONFIDENCE effective-access='moderate'",
            "11:08 ALERT severity='high'",
            "11:16 STATUS detection='conditional'",
            "11:24 CONFIDENCE quality='moderate'",
            "14:18 ALERT issue='emergency-role-expired'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Detection Evidence Supports—and What It Does Not Prove
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
                    ["Detection-design use", item.use],
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
          title="Which Detection Engineering Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional emergency-role detection?"
          evidence={[
            "The role appears assigned twenty minutes after the approved end time.",
            "Role-assignment evidence is current.",
            "Group-membership evidence is delayed by eight minutes.",
            "No approved extension is included in the supplied context.",
            "Effective access and active sessions have not been confirmed.",
            "The initial test incorrectly alerted on an approved extension case.",
            "Extension context was added and the regression test passed.",
            "No supplied evidence proves misuse or harmful action.",
          ]}
          options={[
            "Keep the detection Conditional, preserve the High-priority observation, validate extension, group state, sessions, effective authorization, source health, owner, and revocation, then continue quality review before full approval.",
            "Declare the identity compromised because the role remained visible.",
            "Suppress all emergency-role alerts because approved extensions may exist.",
            "Approve the detection permanently because one regression test passed.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the strongest supplied evidence while preserving uncertainty, source-health limits, test limitations, and lifecycle requirements."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Detection Engineering Errors"
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
          title="Build the Northbridge Detection Engineering Charter"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, search, inspect, correlate, test, deploy, tune,
            suppress, block, investigate, or modify any real telemetry,
            account, identity, endpoint, network, domain, application, supplier,
            alert, rule, platform, or organization.
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
          title="A Popular Alert Has No Clear Defender Question"
          scenario="A fictional detection produces many alerts for unusual sign-in times. Analysts review them inconsistently, the service owner cannot explain the mission risk, and approved shift changes are not included."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause expansion of the fictional detection, define the mission risk and defender question, identify identity, schedule, assignment, source-health, peer, and impact evidence, then redesign and test before broader use.",
              outcome:
                "Best defensive choice. It rebuilds the capability around a meaningful decision instead of preserving noise.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Increase severity because the alerts are unusual.",
              outcome:
                "Weak. Severity does not replace purpose, evidence, context, or testing.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Suppress all outside-hours alerts permanently.",
              outcome:
                "Weak. Broad suppression may hide meaningful identity and privilege conditions.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Detection Passes Positive Tests but Fails When Data Is Delayed"
          scenario="A fictional detection identifies all supplied positive cases. During a source-health test, one required application field is delayed, but the alert still appears with High confidence and no warning."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional detection Conditional, define missing-data and delayed-source behavior, lower or separate confidence, add analyst guidance, create alternate-evidence checks, retest, and document the residual coverage gap.",
              outcome:
                "Best choice. It treats evidence quality as part of detection behavior and avoids false certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the detection because all positive cases passed.",
              outcome:
                "Weak. Positive tests alone do not establish reliable degraded-source behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the application source from the design without reviewing its purpose.",
              outcome:
                "Weak. Removing context may increase false positives or weaken the defender question.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Detection Program That Leadership Can Understand and Analysts Can Use"
        >
          <p className="leading-8">
            Fictional Northbridge has many alerts but cannot explain which
            mission risks they protect, which sources are required, which
            outcomes represent false positives or false negatives, or who owns
            tuning and retirement. Leadership wants fewer alerts, while
            analysts want better context and service owners want fewer
            disruptions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create a mission hierarchy",
                "Group fictional detection priorities by users, identities, services, suppliers, trust boundaries, evidence, and recovery outcomes.",
              ],
              [
                "Build a defender-question catalog",
                "Define fictional question, decision, non-proof statement, owner, priority, evidence, and review trigger.",
              ],
              [
                "Establish source governance",
                "Document fictional provenance, fields, freshness, coverage, privacy, source health, and change notifications.",
              ],
              [
                "Define quality measures",
                "Track fictional usefulness, coverage, precision, misses, unknowns, source health, analyst effort, impact, and maintenance.",
              ],
              [
                "Create lifecycle ownership",
                "Assign fictional design, testing, deployment, analyst, tuning, privacy, review, and retirement responsibilities.",
              ],
              [
                "Communicate residual risk",
                "Explain fictional blind spots, source limits, untested states, expected alerts, and next milestones honestly.",
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
              Produce a fictional detection-program charter, mission-risk map,
              defender-question catalog, role matrix, source-governance plan,
              quality model, lifecycle workflow, leadership summary, analyst
              guidance, residual-risk statement, and portfolio safety boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="What Detection Engineering Means Checklist"
          items={[
            "I can explain detection engineering as a mission-driven lifecycle rather than alert monitoring alone.",
            "I can begin with fictional mission risks and defender questions before logic or severity.",
            "I can distinguish observation, evidence, hypothesis, logic, detection, alert, triage, response, and outcome.",
            "I can document what a fictional alert supports and what it does not prove.",
            "I can include source provenance, field meaning, freshness, completeness, timing, coverage, privacy, and source health.",
            "I can define fictional behavior hypotheses with expected state, meaningful deviation, alternatives, assumptions, and confidence.",
            "I can evaluate coverage, precision, missed conditions, unknown outcomes, analyst effort, operational impact, and maintainability.",
            "I can design positive, negative, boundary, maintenance, change, missing-field, degraded-source, privacy, and regression tests.",
            "I can tune narrowly with context, ownership, expiration, validation, metrics, and rollback.",
            "I can assign detection, source, service, identity, analyst, privacy, platform, and risk ownership.",
            "I can maintain fictional versions, review triggers, change history, recertification, residual risk, and retirement.",
            "I can create a completely fictional detection artifact without exposing real sources, events, identities, systems, rules, alerts, or incidents.",
          ]}
        />

        <MiniQuiz
          title="A5.1 Mini Quiz: What Detection Engineering Means"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Engineering Charter for the Northbridge Student-Support Cooperative. Include mission, purpose, stakeholders, scope, exclusions, authorization, safety boundary, at least twelve mission risks, at least twenty defender questions, decision use, non-proof statements, priorities, detection owners, data-source owners, service owners, identity owners, analyst owners, privacy reviewers, platform owners, leadership owners, evidence categories, required fields, provenance, freshness, completeness, timing, coverage, privacy, source health, blind periods, behavior hypotheses, assumptions, alternative explanations, conceptual logic summaries, missing-data behavior, severity rationale, positive tests, negative tests, boundary tests, maintenance tests, change tests, degraded-source tests, privacy tests, regression tests, alert guidance, triage questions, escalation criteria, closure criteria, quality dimensions, false-positive review, false-negative review, expected alerts, unknown outcomes, tuning principles, exceptions, rollback, lifecycle stages, review triggers, residual risks, leadership summary, analyst summary, reflection, and a statement that every organization, source, field, event, identity, alert, test, owner, date, decision, and outcome is invented."
          tips={[
            "Begin every fictional detection with a mission risk and defender question.",
            "Separate observation, evidence, behavior hypothesis, logic, alert, triage, response, and confirmed outcome.",
            "Include source health, privacy, alternative explanations, confidence, and non-proof statements.",
            "Measure quality beyond alert volume by including coverage, misses, usefulness, effort, impact, and maintainability.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Data Sources for Detection?"
        >
          <p className="leading-8">
            Before moving to A5.2, rate your readiness from 1 to 5 for mission
            risk, defender questions, evidence, behavior hypotheses, logic,
            alerts, triage, testing, quality, tuning, ownership, privacy,
            lifecycle, limitations, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional detection engineering begins before an alert exists.",
              "I can write a defender question that supports one bounded decision.",
              "I can distinguish an observation from a confirmed cause, intent, scope, or impact.",
              "I can identify the evidence and source-health conditions needed to support logic.",
              "I can explain why positive tests alone are insufficient.",
              "I can measure detection quality beyond alert count.",
              "I can assign ownership and lifecycle review triggers.",
              "I can produce a safe fictional charter without copying real events, rules, sources, or alerts.",
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
            Record one fictional mission risk, one defender question, one
            evidence source, one non-proof statement, one source-health
            limitation, one quality measure, and one question you will carry
            into A5.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection engineering is a mission-driven lifecycle connecting risk, defender questions, evidence, behavior, logic, testing, alerts, triage, quality, ownership, and maintenance.",
            "A fictional alert is an observation that requires source health, authorization, context, alternatives, confidence, scope, and impact review.",
            "A strong detection begins with a useful defender question rather than a product feature, copied rule, or dramatic alert title.",
            "Evidence provenance, field meaning, freshness, completeness, timing, coverage, privacy, transformation, and blind periods shape detection confidence.",
            "Behavior hypotheses and conceptual logic should document assumptions, alternatives, exclusions, missing-data behavior, and limits.",
            "Testing must include positive, negative, boundary, maintenance, change, missing-field, degraded-source, privacy, and regression cases.",
            "Quality includes usefulness, coverage, precision, missed conditions, unknown outcomes, analyst effort, operational impact, resilience, and maintainability.",
            "Tuning should be narrow, contextual, owned, time-bound, testable, measurable, and reversible.",
            "Detection lifecycle requires documentation, ownership, source dependencies, review triggers, change history, recertification, residual risk, and retirement.",
            "Every CyberShield detection artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, study fictional identity, endpoint, network, DNS, email,
            application, cloud, supplier, administrative, support, and
            source-health data as detection evidence with different strengths,
            gaps, ownership, privacy, and failure modes.
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