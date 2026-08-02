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
const previousLesson = `${modulePath}/detection-documentation`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional detection goals, telemetry, source health, logic, behavior context, false-positive and false-negative review, tuning, alert questions, testing, documentation, and lifecycle governance into one coherent defensive program.",
  "Build a fictional capstone evidence model that distinguishes direct observations, derived context, source-health limitations, hypotheses, alternatives, confidence, severity, priority, response boundaries, and non-proof statements.",
  "Create and evaluate fictional detection hypotheses across identity, service, destination, privilege, sequence, timing, source health, change, maintenance, peer groups, mission impact, and recovery.",
  "Validate a fictional detection program with positive, negative, boundary, missing-field, duplicate, delayed-source, conflicting-source, change, privacy, recovery, and regression cases.",
  "Produce a portfolio-ready fictional Detection Engineering Capstone Package with governance, analyst guidance, quality metrics, corrective actions, residual risks, leadership communication, and retirement planning.",
];

const vocabulary = [
  [
    "Detection engineering capstone",
    "A fictional integrated defensive project combining mission, evidence, logic, quality, tuning, testing, documentation, ownership, and lifecycle.",
  ],
  [
    "Detection program",
    "A fictional coordinated set of detection objectives, sources, hypotheses, tests, alerts, analyst workflows, metrics, owners, and review processes.",
  ],
  [
    "Capstone charter",
    "A fictional document defining mission, scope, safety boundary, stakeholders, deliverables, owners, evidence, milestones, and completion criteria.",
  ],
  [
    "Detection portfolio",
    "A fictional collection of documented detections organized by mission risk, defender question, evidence, quality, and lifecycle.",
  ],
  [
    "Coverage map",
    "A fictional view of identities, devices, services, destinations, workflows, states, environments, periods, and evidence represented by the program.",
  ],
  [
    "Evidence model",
    "A fictional explanation of sources, fields, timing, relationships, provenance, health, coverage, privacy, and limitations.",
  ],
  [
    "Detection hypothesis",
    "A fictional statement linking a meaningful condition to evidence, alternatives, confidence, impact, tests, and an analyst decision.",
  ],
  [
    "Detection objective",
    "A fictional bounded defensive result that a detection is designed to support.",
  ],
  [
    "Behavior model",
    "A fictional description of expected, unusual, changed, policy-different, source-degraded, and potentially harmful activity.",
  ],
  [
    "Alert contract",
    "A fictional definition of the observation, evidence, context, source health, questions, owners, confidence, severity, and decision criteria displayed to analysts.",
  ],
  [
    "Quality baseline",
    "A fictional before-change record of alert usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source degradation, analyst effort, user impact, and lifecycle debt.",
  ],
  [
    "Tuning proposal",
    "A fictional versioned change intended to improve quality while preserving defender questions and meaningful coverage.",
  ],
  [
    "Synthetic test library",
    "A fictional collection of invented positive, negative, boundary, degraded-source, change, privacy, recovery, and regression cases.",
  ],
  [
    "Validation gate",
    "A fictional measurable requirement that must pass before a detection or program advances.",
  ],
  [
    "Analyst decision path",
    "A fictional ordered sequence of questions, evidence requests, owners, decision states, escalation, closure, and reopen criteria.",
  ],
  [
    "Program metric",
    "A fictional measure of usefulness, coverage, misses, evidence health, decision latency, privacy, impact, maintenance, or retirement readiness.",
  ],
  [
    "Detection debt",
    "Fictional risk created by stale logic, missing tests, weak sources, broad exceptions, incomplete documentation, owner gaps, or unresolved residual risks.",
  ],
  [
    "Coverage gap",
    "A fictional identity, service, state, environment, source, period, or behavior that the current program cannot evaluate reliably.",
  ],
  [
    "Program governance",
    "Fictional roles, approvals, standards, metrics, review triggers, change controls, rollback, risk acceptance, and retirement decisions.",
  ],
  [
    "Readiness decision",
    "A fictional evidence-based conclusion that a detection or program is Draft, In Review, Conditional, Approved, Observing, Rolled Back, or Retired.",
  ],
  [
    "Residual-risk register",
    "A fictional record of remaining gaps, assumptions, dependencies, unobservable states, false-negative risks, privacy concerns, and owners.",
  ],
  [
    "Leadership brief",
    "A fictional concise explanation of mission value, readiness, coverage, quality, limitations, resources, milestones, and decisions needed.",
  ],
  [
    "Portfolio boundary",
    "A fictional safety rule ensuring every public artifact uses invented data and reveals no real internal systems, identities, suppliers, evidence, or defensive capabilities.",
  ],
  [
    "Capstone completion criterion",
    "A fictional measurable condition required before the project is considered complete and ready for assessment.",
  ],
];

const capstonePrinciples = [
  {
    principle: "Start with mission, not alerts",
    description:
      "A fictional capstone should begin with user, identity, service, privacy, supplier, availability, evidence, or recovery outcomes that matter.",
    strongPractice:
      "Define the risk of emergency authority outliving its approved recovery purpose.",
    failure:
      "The project becomes a collection of disconnected alert ideas.",
  },
  {
    principle: "Use bounded defender questions",
    description:
      "Each fictional detection must support one primary decision rather than a vague concern.",
    strongPractice:
      "Ask whether temporary authority remained effectively active beyond approval without a valid extension.",
    failure:
      "Analysts may collect broad evidence without reaching a consistent decision.",
  },
  {
    principle: "Treat source health as detection input",
    description:
      "Fictional evidence freshness, completeness, schema, timing, coverage, duplication, and blind periods must change confidence and state.",
    strongPractice:
      "Return Conditional when group evidence is delayed.",
    failure:
      "The design may claim certainty during evidence loss.",
  },
  {
    principle: "Preserve alternatives and non-proof statements",
    description:
      "Fictional alerts should not convert unusual behavior into a claim of malicious intent.",
    strongPractice:
      "Include extension delay, synchronization lag, approved change, source defect, and incomplete closure as alternatives.",
    failure:
      "The capstone may reward dramatic but unsupported conclusions.",
  },
  {
    principle: "Evaluate both noise and misses",
    description:
      "Fictional quality review must consider expected alerts, false positives, false negatives, Unknown outcomes, and coverage gaps.",
    strongPractice:
      "Reduce extension-related noise while retaining stale-authority and changed-destination coverage.",
    failure:
      "A quieter program may become a weaker program.",
  },
  {
    principle: "Tune with precise context",
    description:
      "Fictional identity, service, destination, purpose, time, owner, change, authorization, and source-health context should be narrow and current.",
    strongPractice:
      "Use one current extension record rather than suppressing all recovery-role alerts.",
    failure:
      "Broad exceptions create suppression debt and hidden false negatives.",
  },
  {
    principle: "Test realistic evidence variation",
    description:
      "Fictional validation should include missing, duplicate, delayed, conflicting, out-of-order, changed, and recovering evidence.",
    strongPractice:
      "Replay queued records after a Blind source period and verify duplicate-aware reassessment.",
    failure:
      "The program may work only in ideal conditions.",
  },
  {
    principle: "Document the whole decision chain",
    description:
      "Fictional mission, evidence, logic, alert, runbook, tests, metrics, changes, limitations, owners, and retirement should be traceable.",
    strongPractice:
      "Link one detection identifier across all capstone artifacts.",
    failure:
      "Future reviewers cannot reconstruct why the design exists.",
  },
  {
    principle: "Separate severity, confidence, priority, and response",
    description:
      "Fictional potential impact, evidence certainty, review urgency, and action are different dimensions.",
    strongPractice:
      "Keep severity High but confidence Moderate during delayed authorization evidence.",
    failure:
      "Analysts may overreact to uncertain evidence or underreact to high-impact conditions.",
  },
  {
    principle: "Keep every artifact fictional and safe",
    description:
      "The capstone must use invented organizations, sources, identities, services, fields, events, alerts, tests, owners, and outcomes.",
    strongPractice:
      "Use generic fictional categories and inert evidence panels.",
    failure:
      "Public work may expose real systems, people, incidents, suppliers, or defensive architecture.",
  },
];

const programPhases = [
  {
    phase: "1. Mission and charter",
    purpose:
      "Define the fictional cooperative, essential services, users, data categories, suppliers, recovery goals, safety boundary, stakeholders, deliverables, and completion criteria.",
    requiredOutput:
      "Capstone charter and mission-risk register.",
    questions:
      "Which outcomes matter? Which risks are in scope? Which actions and real environments are prohibited?",
    gate:
      "Mission, scope, safety, owners, and completion criteria approved.",
  },
  {
    phase: "2. Detection goals",
    purpose:
      "Translate fictional mission risks into bounded detection objectives and defender questions.",
    requiredOutput:
      "Detection-goal catalog with non-proof statements.",
    questions:
      "What decision should each detection support? What does a match not establish?",
    gate:
      "Every proposed detection has a mission link and one primary question.",
  },
  {
    phase: "3. Telemetry and source health",
    purpose:
      "Map fictional identity, endpoint, network, DNS, application, supplier, change, support, and source-health evidence.",
    requiredOutput:
      "Telemetry inventory, field dictionary, coverage map, and source-health model.",
    questions:
      "Which sources and fields are required? What happens when they are delayed, missing, conflicting, or blind?",
    gate:
      "Evidence dependencies, limitations, privacy, owners, and degraded behavior documented.",
  },
  {
    phase: "4. Logic and behavior",
    purpose:
      "Write fictional conditions, relationships, sequences, thresholds, expected behavior, alternatives, confidence, severity, and analyst questions.",
    requiredOutput:
      "Detection hypothesis and logic specification set.",
    questions:
      "What meaningful difference is observed? Which context changes interpretation?",
    gate:
      "Every logic narrative is explainable, non-operational, and tied to evidence.",
  },
  {
    phase: "5. Alert and analyst workflow",
    purpose:
      "Design fictional alert contracts, decision states, evidence requests, ownership, escalation, closure, reopen, and response boundaries.",
    requiredOutput:
      "Alert catalog and analyst runbook.",
    questions:
      "What should the analyst see? Which question comes next? Who owns the answer?",
    gate:
      "Another reviewer can reach a consistent bounded decision.",
  },
  {
    phase: "6. Quality and tuning",
    purpose:
      "Establish fictional quality baselines and design narrow context, grouping, threshold, presentation, or exception improvements.",
    requiredOutput:
      "Quality baseline, defect register, tuning proposals, and suppression-debt register.",
    questions:
      "What creates noise? What creates misses? Which change addresses the root cause?",
    gate:
      "Tuning improves usefulness without unacceptable coverage loss.",
  },
  {
    phase: "7. Safe fake-data testing",
    purpose:
      "Validate fictional positive, negative, expected-alert, boundary, missing, duplicate, delayed, conflict, change, privacy, recovery, and regression cases.",
    requiredOutput:
      "Synthetic test library, expected outcomes, observed results, defects, and validation gates.",
    questions:
      "Which behavior is proven by the supplied cases? Which conditions remain untested?",
    gate:
      "Required safety, behavior, source-health, privacy, coverage, regression, and lifecycle gates pass.",
  },
  {
    phase: "8. Documentation and governance",
    purpose:
      "Create fictional specifications, source maps, logic narratives, runbooks, metrics, ownership, change records, limitations, and retirement plans.",
    requiredOutput:
      "Detection documentation package and governance matrix.",
    questions:
      "Can future reviewers understand, test, maintain, challenge, change, and retire the program?",
    gate:
      "Artifacts are complete, current, traceable, owned, and reviewable.",
  },
  {
    phase: "9. Portfolio and leadership communication",
    purpose:
      "Present fictional findings, readiness, coverage, quality, residual risks, milestones, resource needs, and decisions without exposing operational detail.",
    requiredOutput:
      "Portfolio case study, analyst summary, owner summary, and leadership brief.",
    questions:
      "What should each audience know? Which limitations must remain explicit?",
    gate:
      "Public materials are fictional, privacy-safe, non-operational, and accurate.",
  },
  {
    phase: "10. Readiness and reflection",
    purpose:
      "Evaluate fictional program readiness, unresolved defects, residual risks, personal skill growth, and next learning priorities.",
    requiredOutput:
      "Readiness decision, residual-risk statement, lessons learned, and reflection.",
    questions:
      "What is Approved, Conditional, Unknown, or out of scope? What evidence supports that conclusion?",
    gate:
      "Completion criteria and unresolved limitations are honestly documented.",
  },
];

const detectionPortfolio = [
  {
    id: "DET-CAP-01",
    title: "Stale Emergency Authority",
    missionRisk:
      "Temporary recovery privilege may remain effective beyond its approved purpose.",
    primaryQuestion:
      "Did fictional emergency authority remain effectively active beyond approval without a valid extension?",
    sources:
      "Role, group, approval, extension, session, service, revocation, owner, and source-health evidence.",
    expectedAlert:
      "Current valid extension remains visible as Expected; stale effective authority produces In Review or Escalated.",
    limitation:
      "Role assignment does not prove effective access, privileged action, intent, or impact.",
  },
  {
    id: "DET-CAP-02",
    title: "Service Destination Difference",
    missionRisk:
      "A fictional service may communicate beyond its approved dependency set.",
    primaryQuestion:
      "Did the service reach a destination outside its current approved purpose and change context?",
    sources:
      "Service identity, network, DNS, application, policy, change, owner, peer, and source-health evidence.",
    expectedAlert:
      "Approved deployment destinations are Expected; unlisted or out-of-scope destinations remain In Review.",
    limitation:
      "New destination does not prove compromise, harmful content, or data transfer.",
  },
  {
    id: "DET-CAP-03",
    title: "Supplier Support Session outside Assignment",
    missionRisk:
      "A fictional supplier identity may retain or use support access beyond a current request.",
    primaryQuestion:
      "Did the supplier session align with current sponsor, assignment, device, destination, purpose, and time?",
    sources:
      "Supplier identity, sponsor, assignment, device, destination, session, support ticket, owner, and source health.",
    expectedAlert:
      "Current assigned support is Expected; unassigned or expired access is Conditional or Escalated.",
    limitation:
      "Outside-hours activity alone does not prove unauthorized behavior.",
  },
  {
    id: "DET-CAP-04",
    title: "DNS Audience Policy Difference",
    missionRisk:
      "Fictional resolver groups may receive inconsistent answers that change service routing or trust boundaries.",
    primaryQuestion:
      "Did a requester group receive an answer inconsistent with current naming and audience policy?",
    sources:
      "Requester group, resolver, question category, response category, cache, policy, application result, and source health.",
    expectedAlert:
      "Approved migration differences are Expected; unexplained policy differences remain Conditional.",
    limitation:
      "Different resolution does not prove harmful destination use.",
  },
  {
    id: "DET-CAP-05",
    title: "Wireless Device Class Change",
    missionRisk:
      "A fictional device may enter a network class inconsistent with ownership, purpose, onboarding, or support state.",
    primaryQuestion:
      "Did the device class change without current ownership, onboarding, event, replacement, or policy context?",
    sources:
      "Device identity, owner, class, onboarding, wireless policy, event, replacement, service, and source health.",
    expectedAlert:
      "Approved replacement or event onboarding is Expected; unexplained class changes remain In Review.",
    limitation:
      "Device class does not prove who controlled the device or what activity occurred.",
  },
  {
    id: "DET-CAP-06",
    title: "Source Coverage Loss",
    missionRisk:
      "A fictional evidence gap may create false confidence or missed detection coverage.",
    primaryQuestion:
      "Did a required source, field, relationship, or scope become unable to support normal detection confidence?",
    sources:
      "Connectivity, freshness, completeness, schema, transformation, clock, queue, coverage, blind period, and owner evidence.",
    expectedAlert:
      "Healthy state produces no source-risk alert; Degraded, Blind, Conflicting, or Recovering states remain visible.",
    limitation:
      "Source degradation does not prove the underlying behavior occurred or did not occur.",
  },
  {
    id: "DET-CAP-07",
    title: "Recovery Reconciliation Incomplete",
    missionRisk:
      "Connectivity may return while sessions, queues, DNS, policy, roles, source health, and service state remain inconsistent.",
    primaryQuestion:
      "Were critical fictional recovery states reconciled and validated before closure?",
    sources:
      "Failover, service state, queues, sessions, DNS, policy, role, source health, owner, and closure evidence.",
    expectedAlert:
      "Complete reconciliation resolves; remaining differences stay Conditional or Escalated.",
    limitation:
      "Connectivity restoration does not prove full service or evidence recovery.",
  },
  {
    id: "DET-CAP-08",
    title: "Detection Documentation Drift",
    missionRisk:
      "Fictional sources, fields, logic, alert behavior, runbooks, tests, or ownership may no longer match the active capability.",
    primaryQuestion:
      "Does current documentation accurately represent the detection's evidence, behavior, analyst workflow, and lifecycle?",
    sources:
      "Specification versions, source schemas, alert contract, test results, runbook, change log, owner matrix, and review dates.",
    expectedAlert:
      "Current traceable documentation is Healthy; stale or contradictory artifacts are Conditional or High depending on impact.",
    limitation:
      "A recent review date does not prove the documentation is correct.",
  },
];

const evidenceDomains = [
  {
    domain: "Identity and authorization",
    directEvidence:
      "Fictional role, group, approval, extension, session, assignment, sponsor, expiration, and revocation records.",
    derivedContext:
      "Identity category, owner group, privilege level, peer group, and lifecycle state.",
    healthQuestions:
      "Are identity populations complete? Are group and extension sources current? Are role meanings unchanged?",
    privacy:
      "Use role, owner group, purpose, and timing rather than unrelated personal details.",
    decision:
      "Determine valid identity, effective authority, authorization scope, and ownership.",
  },
  {
    domain: "Endpoint and device",
    directEvidence:
      "Fictional device identity, class, onboarding, replacement, posture, owner, network class, support, and retirement.",
    derivedContext:
      "Managed, administrative, service, supplier, guest, personal, event, or recovery classification.",
    healthQuestions:
      "Is inventory current? Are replacement and ownership records synchronized?",
    privacy:
      "Use device category and owner group rather than personal content.",
    decision:
      "Determine whether the device relationship fits the identity and workflow.",
  },
  {
    domain: "Network and destination",
    directEvidence:
      "Fictional source group, destination class, direction, policy result, session, service relationship, timing, and sensor health.",
    derivedContext:
      "Zone, dependency, trust boundary, service purpose, peer relationship, and criticality.",
    healthQuestions:
      "Is coverage complete for the required zones and periods? Are records duplicated or delayed?",
    privacy:
      "Use destination classes and service categories rather than exact real endpoints.",
    decision:
      "Determine whether the communication relationship fits current service purpose and policy.",
  },
  {
    domain: "DNS and naming",
    directEvidence:
      "Fictional requester group, resolver, question category, response category, cache, policy, timing, and health.",
    derivedContext:
      "Audience, service ownership, migration, destination relationship, and application outcome.",
    healthQuestions:
      "Are authoritative, cache, policy, and resolver records current and comparable?",
    privacy:
      "Limit evidence to the invented service question rather than broad user histories.",
    decision:
      "Determine whether naming behavior explains or contradicts a destination relationship.",
  },
  {
    domain: "Application and service",
    directEvidence:
      "Fictional operation category, result, object class, service owner, request, response, state, and source health.",
    derivedContext:
      "Mission purpose, user journey, criticality, dependency, expected workflow, and recovery state.",
    healthQuestions:
      "Are application records delayed, partial, transformed, or outside coverage?",
    privacy:
      "Use object and result categories rather than message content or personal records.",
    decision:
      "Determine business purpose, result, scope, user impact, and owner context.",
  },
  {
    domain: "Supplier and support",
    directEvidence:
      "Fictional supplier identity, sponsor, request, assignment, device, destination, session, result, and closure.",
    derivedContext:
      "Supplier role, support purpose, contract responsibility, schedule, and risk owner.",
    healthQuestions:
      "Are sponsor, assignment, and session sources current? Is supplier offboarding complete?",
    privacy:
      "Use role and support purpose rather than personal supplier details.",
    decision:
      "Determine whether supplier activity was current, approved, scoped, and closed.",
  },
  {
    domain: "Change and maintenance",
    directEvidence:
      "Fictional change identifier, owner, scope, expected behavior, start, end, validation, result, rollback, and closure.",
    derivedContext:
      "Operating state, approved destination, expected volume, maintenance purpose, and service dependency.",
    healthQuestions:
      "Are change records current, complete, and linked to actual observed behavior?",
    privacy:
      "Avoid internal configuration or architecture details unnecessary for the decision.",
    decision:
      "Determine whether observed behavior fits the approved change and whether closure is complete.",
  },
  {
    domain: "Source health and pipeline",
    directEvidence:
      "Fictional freshness, completeness, queue age, schema, clock, transformation, duplication, coverage, blind period, and recovery.",
    derivedContext:
      "Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering state.",
    healthQuestions:
      "Do health metrics represent field and semantic quality, not only connectivity?",
    privacy:
      "Use operational health metadata without personal event content.",
    decision:
      "Determine which conclusions, confidence levels, and coverage claims are supportable.",
  },
];

const capstoneScenarios = [
  {
    scenario: "Recovery role remains after exercise closure",
    missionRisk:
      "Temporary authority may exceed approved duration and service scope.",
    observations:
      "Role active after expiration; one session visible; extension freshness Unknown; group evidence delayed; service evidence current.",
    alternatives:
      "Valid extension delay, synchronization lag, incomplete closure, source mapping issue, or stale authority.",
    nextQuestions:
      "Extension validity, group state, session destination and action, service impact, revocation, owner expectation, source health, closure.",
    readiness:
      "Conditional until authorization and source-health questions are resolved.",
  },
  {
    scenario: "Workflow service reaches two new destinations",
    missionRisk:
      "Service dependency set may expand beyond approved change scope.",
    observations:
      "One destination appears in the deployment plan; one does not; DNS maps both; application result for the second is Unknown.",
    alternatives:
      "Stale documentation, secondary approved dependency, DNS mapping difference, source transformation, or unapproved relationship.",
    nextQuestions:
      "Change scope, destination ownership, DNS audience, application result, policy, peer role, source health, owner confirmation.",
    readiness:
      "Approved destination Expected; second destination In Review.",
  },
  {
    scenario: "Supplier session outside normal schedule",
    missionRisk:
      "Support access may occur outside current assignment or sponsor expectations.",
    observations:
      "Sponsor current; device replaced; maintenance ticket open; destination approved; assignment source delayed.",
    alternatives:
      "Approved maintenance, delayed assignment evidence, emergency support, schedule change, or unassigned access.",
    nextQuestions:
      "Assignment, purpose, replacement onboarding, session scope, maintenance result, source health, closure, owner.",
    readiness:
      "Conditional because several approved explanations remain and assignment evidence is delayed.",
  },
  {
    scenario: "DNS resolver groups disagree during migration",
    missionRisk:
      "Different audiences may reach inconsistent service environments.",
    observations:
      "One resolver group returns the new destination; another returns the previous destination; migration active; application health mixed.",
    alternatives:
      "Expected staged migration, cache variation, policy difference, incomplete change, source timing, or configuration defect.",
    nextQuestions:
      "Migration scope, authoritative state, cache, audience policy, application outcome, resolver health, owner, rollback.",
    readiness:
      "Conditional until audience and service outcomes are validated.",
  },
  {
    scenario: "Evidence source returns after a blind period",
    missionRisk:
      "Queued and replayed records may create duplicate alerts or leave historical gaps.",
    observations:
      "Source online; backlog replay active; duplicate rate elevated; original event times preserved; one field schema changed.",
    alternatives:
      "Normal recovery replay, transformation issue, duplicate collector path, incomplete backfill, or schema drift.",
    nextQuestions:
      "Blind-period scope, replay markers, uniqueness, schema compatibility, missing records, reassessment, source owner, completion.",
    readiness:
      "Recovering, not Healthy, until reconciliation and regression tests pass.",
  },
  {
    scenario: "Documentation claims complete coverage",
    missionRisk:
      "Leadership may rely on a detection program with hidden source and identity gaps.",
    observations:
      "Overview says all recovery identities are covered; test library excludes one recovery population; source map lists it as out of scope.",
    alternatives:
      "Stale overview, recent scope change, documentation error, source onboarding delay, or incorrect test coverage.",
    nextQuestions:
      "Approved scope, source coverage, owner decision, test map, risk acceptance, correction, metrics, leadership communication.",
    readiness:
      "Documentation Conditional and leadership claim unsupported.",
  },
];

const qualityReview = [
  {
    dimension: "Mission usefulness",
    question:
      "Does each fictional detection help answer a decision that matters to users, services, identity, suppliers, privacy, availability, evidence, or recovery?",
    evidence:
      "Mission-risk register, primary questions, analyst outcomes, owner feedback, and leadership decisions.",
    risk:
      "A technically interesting detection may create no meaningful defensive value.",
    metric:
      "Percentage of detections with documented mission link and decision use.",
  },
  {
    dimension: "Alert usefulness",
    question:
      "Do fictional alerts present observation, evidence, source health, context, confidence, questions, owners, alternatives, and limits?",
    evidence:
      "Alert contracts, analyst walkthroughs, decision latency, evidence requests, and rework.",
    risk:
      "Correct detections may remain operationally unusable.",
    metric:
      "Analyst decision quality and evidence-request count per reviewed alert.",
  },
  {
    dimension: "Precision and expected alerts",
    question:
      "Are fictional approved conditions handled as Expected rather than mislabeled or broadly suppressed?",
    evidence:
      "Reviewed alert outcomes, extension cases, change cases, maintenance cases, and tuning records.",
    risk:
      "Useful awareness may become noise or disappear entirely.",
    metric:
      "Expected-alert accuracy and false-positive root-cause distribution.",
  },
  {
    dimension: "False-negative and coverage risk",
    question:
      "Which fictional meaningful conditions, populations, services, states, or periods remain outside reliable detection?",
    evidence:
      "Missed-condition review, coverage maps, Blind source periods, synthetic tests, and owner reports.",
    risk:
      "A quiet dashboard may create false confidence.",
    metric:
      "Known misses, coverage gaps, untested states, and residual-risk age.",
  },
  {
    dimension: "Source-health resilience",
    question:
      "Do fictional detections behave safely under Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence?",
    evidence:
      "Health-state tests, alert outputs, confidence behavior, alternate evidence, and reassessment records.",
    risk:
      "Evidence loss may look like normal activity or complete coverage.",
    metric:
      "Percentage of detections with full source-health test coverage.",
  },
  {
    dimension: "Tuning quality",
    question:
      "Do fictional tuning changes address root causes while preserving defender questions and meaningful coverage?",
    evidence:
      "Before-and-after metrics, regression results, exceptions, rollback, and observation.",
    risk:
      "Noise reduction may create hidden misses or suppression debt.",
    metric:
      "Tuning proposals passing both precision and coverage validation gates.",
  },
  {
    dimension: "Documentation and ownership",
    question:
      "Are fictional specifications, sources, fields, logic, alerts, runbooks, tests, metrics, changes, limitations, and retirement records current and owned?",
    evidence:
      "Artifact inventory, review dates, owner matrix, debt register, and change history.",
    risk:
      "The program may continue without maintainable meaning.",
    metric:
      "Documentation completeness, freshness, owner responsiveness, and debt.",
  },
  {
    dimension: "Privacy and portfolio safety",
    question:
      "Do fictional evidence, alerts, tests, documentation, and public artifacts use only necessary invented fields and reveal no real internal information?",
    evidence:
      "Field-purpose map, access, retention, deletion, public review, and safety statement.",
    risk:
      "A defensive project may still expose sensitive people, systems, or operations.",
    metric:
      "Privacy-gate completion and unnecessary-field findings.",
  },
];

const testMatrix = [
  {
    id: "CAP-T01",
    type: "Positive",
    input:
      "Fictional role, group, and session remain active after expiration; no extension; sources Healthy.",
    expected:
      "Stale-authority alert, High observation confidence, authorization question, identity and service owners assigned.",
    protects:
      "Core detection coverage.",
  },
  {
    id: "CAP-T02",
    type: "Negative",
    input:
      "Fictional role and sessions are revoked before expiration; closure evidence complete.",
    expected:
      "No stale-authority risk alert; normal lifecycle record remains available.",
    protects:
      "False-positive control.",
  },
  {
    id: "CAP-T03",
    type: "Expected alert",
    input:
      "Fictional current extension covers identity, role, purpose, destination, and time.",
    expected:
      "Expected alert or lower-priority visibility with extension expiration and owner context.",
    protects:
      "Useful approved-condition awareness.",
  },
  {
    id: "CAP-T04",
    type: "Boundary",
    input:
      "Fictional role state evaluated immediately before, exactly at, and immediately after expiration.",
    expected:
      "Results match documented grace period, event-time semantics, and clock assumptions.",
    protects:
      "Timing and comparison correctness.",
  },
  {
    id: "CAP-T05",
    type: "Missing required field",
    input:
      "Fictional approval end missing; role and session evidence present.",
    expected:
      "Conditional or Unknown, no definitive stale-authority conclusion, alternate evidence requested.",
    protects:
      "Missing-data safety.",
  },
  {
    id: "CAP-T06",
    type: "Delayed source",
    input:
      "Fictional group evidence delayed eight minutes; role and session current.",
    expected:
      "Source-Degraded or Conditional; effective-access confidence lower than role-state confidence.",
    protects:
      "Evidence-health honesty.",
  },
  {
    id: "CAP-T07",
    type: "Conflicting sources",
    input:
      "Fictional role source says Revoked while group source says Active beyond expected synchronization.",
    expected:
      "Conflicting state, reconciliation owner assigned, no silent source preference.",
    protects:
      "Source-authority and conflict handling.",
  },
  {
    id: "CAP-T08",
    type: "Duplicate and replay",
    input:
      "Fictional source recovery replays three records with one underlying event and two collector paths.",
    expected:
      "One grouped historical case with replay context; no duplicate flooding.",
    protects:
      "Uniqueness and recovery resilience.",
  },
  {
    id: "CAP-T09",
    type: "Change scope",
    input:
      "Fictional deployment approves one new destination; a second unlisted destination appears.",
    expected:
      "Approved destination Expected; unlisted destination In Review with owner and application questions.",
    protects:
      "Narrow change context.",
  },
  {
    id: "CAP-T10",
    type: "Privacy",
    input:
      "Fictional alert draft includes full profile and activity fields unrelated to the defender question.",
    expected:
      "Privacy gate fails; unnecessary fields removed; analyst usefulness retested.",
    protects:
      "Purpose limitation and portfolio safety.",
  },
  {
    id: "CAP-T11",
    type: "Documentation drift",
    input:
      "Fictional logic uses extension freshness, but the field dictionary and runbook omit it.",
    expected:
      "Documentation Change Review; field, alert, runbook, test, and change artifacts updated.",
    protects:
      "Operational consistency.",
  },
  {
    id: "CAP-T12",
    type: "Retirement",
    input:
      "Fictional legacy service removed; replacement detection validated; one old exception remains active.",
    expected:
      "Retirement blocked until exception removal and dependency validation complete.",
    protects:
      "Lifecycle closure.",
  },
];

const governanceRoles = [
  {
    role: "Detection program owner",
    responsibilities:
      "Own fictional mission alignment, portfolio priorities, standards, readiness decisions, metrics, debt, and retirement.",
    evidence:
      "Program charter, detection catalog, quality reports, risk decisions, and leadership brief.",
    failure:
      "The portfolio becomes a collection of uncoordinated rules.",
  },
  {
    role: "Detection owner",
    responsibilities:
      "Own fictional objective, logic, alert contract, tests, quality, tuning, documentation, changes, and review triggers.",
    evidence:
      "Detection specification, test package, tuning record, metrics, and change history.",
    failure:
      "Individual detections drift without accountable maintenance.",
  },
  {
    role: "Source owner",
    responsibilities:
      "Own fictional provenance, fields, schema, timing, health, coverage, transformations, alternate evidence, and recovery.",
    evidence:
      "Source map, field dictionary, health dashboard, blind-period record, and schema changes.",
    failure:
      "Evidence quality and field meaning become uncertain.",
  },
  {
    role: "Identity owner",
    responsibilities:
      "Own fictional roles, assignments, approvals, extensions, sponsors, sessions, expiration, revocation, and lifecycle.",
    evidence:
      "Identity model, authorization records, owner confirmations, and lifecycle changes.",
    failure:
      "Valid identity may be confused with valid use.",
  },
  {
    role: "Service owner",
    responsibilities:
      "Own fictional service purpose, dependencies, operations, user impact, criticality, change, recovery, and closure.",
    evidence:
      "Service catalog, dependency map, application results, change records, and recovery evidence.",
    failure:
      "Technical alerts remain disconnected from mission impact.",
  },
  {
    role: "Test and quality owner",
    responsibilities:
      "Own fictional case libraries, expected outcomes, defects, regression, validation gates, quality labels, and review methodology.",
    evidence:
      "Test charter, case catalog, results, defect register, metrics, and validation decisions.",
    failure:
      "Readiness may be declared from incomplete or biased evidence.",
  },
  {
    role: "Privacy reviewer",
    responsibilities:
      "Own fictional purpose limitation, field minimization, access, display, retention, deletion, sharing, and portfolio boundaries.",
    evidence:
      "Field-purpose map, privacy tests, access matrix, retention plan, and public review.",
    failure:
      "The program may collect or reveal unnecessary information.",
  },
  {
    role: "Risk and leadership owner",
    responsibilities:
      "Own fictional priorities, resources, accepted limitations, residual risk, deadlines, milestones, and program decisions.",
    evidence:
      "Leadership brief, risk register, resource plan, acceptance records, and review schedule.",
    failure:
      "Important gaps may remain open without a decision or resource owner.",
  },
];

const commonMistakes = [
  {
    mistake: "Capstone begins with a favorite alert idea",
    observation:
      "A fictional project starts with a technically interesting pattern but has no mission risk or defender question.",
    impact:
      "The detection may not support a meaningful decision.",
    correction:
      "Begin with mission outcomes, risk, scope, stakeholders, and bounded questions.",
  },
  {
    mistake: "Too many detections, too little depth",
    observation:
      "A fictional portfolio includes dozens of alert titles without source, logic, test, analyst, or lifecycle detail.",
    impact:
      "Breadth hides weak design and unmaintainable debt.",
    correction:
      "Use a smaller complete portfolio with traceable evidence and quality.",
  },
  {
    mistake: "Healthy sources are assumed",
    observation:
      "Fictional logic, tests, and alerts never address delayed, missing, conflicting, blind, or recovering evidence.",
    impact:
      "The program may create false confidence during source failure.",
    correction:
      "Model source health as a first-class input and test all states.",
  },
  {
    mistake: "Behavior difference becomes accusation",
    observation:
      "A fictional new destination or outside-hours session is labeled malicious.",
    impact:
      "Alternative explanations, authorization, source health, and policy context are ignored.",
    correction:
      "Use neutral observations, alternatives, non-proof statements, and bounded questions.",
  },
  {
    mistake: "Tuning is measured only by alert reduction",
    observation:
      "A fictional broad suppression is approved because the dashboard becomes quieter.",
    impact:
      "False negatives and coverage gaps may increase.",
    correction:
      "Compare expected alerts, false positives, false negatives, Unknowns, source health, effort, impact, and residual risk.",
  },
  {
    mistake: "Testing proves only ideal behavior",
    observation:
      "A fictional positive case passes under perfect evidence and the detection is declared Approved.",
    impact:
      "Boundary, duplicate, change, privacy, recovery, and lifecycle defects remain hidden.",
    correction:
      "Use a balanced synthetic test library and validation gates.",
  },
  {
    mistake: "Alert design is separated from analyst workflow",
    observation:
      "A fictional alert fires correctly but lacks questions, evidence, owners, limits, escalation, and closure.",
    impact:
      "Analysts cannot convert detection into consistent decisions.",
    correction:
      "Create a complete alert contract and runbook.",
  },
  {
    mistake: "Documentation is assembled at the end",
    observation:
      "Fictional artifacts are written after the design is finished and do not match current evidence or tests.",
    impact:
      "Traceability and design intent are lost.",
    correction:
      "Document continuously and update every affected artifact with each change.",
  },
  {
    mistake: "Residual risks are hidden to make the project look complete",
    observation:
      "A fictional portfolio claims full coverage and no known limitations.",
    impact:
      "Leadership and reviewers receive false confidence.",
    correction:
      "State untested conditions, source gaps, false-negative risk, documentation debt, and next milestones.",
  },
  {
    mistake: "Real defensive details appear in the portfolio",
    observation:
      "A fictional capstone includes copied rules, logs, source names, field values, screenshots, architecture, owners, or incident history.",
    impact:
      "Sensitive people, systems, suppliers, and defensive capabilities may be exposed.",
    correction:
      "Invent every organization, source, field, event, alert, test, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the capstone charter",
    action:
      "Define the fictional organization, mission, essential services, users, data categories, suppliers, safety boundary, scope, stakeholders, roles, deliverables, milestones, and completion criteria.",
    output:
      "Detection Engineering Capstone Charter.",
    quality:
      "The charter prohibits all real-system access, testing, monitoring, and copied evidence.",
  },
  {
    step: "2",
    title: "Build the mission-risk register",
    action:
      "Document fictional identity, service, supplier, network, DNS, wireless, application, privacy, source-health, and recovery risks.",
    output:
      "Prioritized mission-risk and defender-question register.",
    quality:
      "Every proposed detection traces to one meaningful outcome and one bounded question.",
  },
  {
    step: "3",
    title: "Create the telemetry model",
    action:
      "Define fictional sources, fields, provenance, timing, transformations, relationships, source-health states, coverage, privacy, owners, and limitations.",
    output:
      "Telemetry inventory, field dictionary, coverage map, and source-health model.",
    quality:
      "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior is explicit.",
  },
  {
    step: "4",
    title: "Design the detection portfolio",
    action:
      "Write fictional objectives, hypotheses, expected behavior, meaningful differences, alternatives, logic narratives, confidence, severity, and non-proof statements.",
    output:
      "Versioned detection portfolio.",
    quality:
      "Each design is explainable, non-operational, evidence-driven, and mission-linked.",
  },
  {
    step: "5",
    title: "Create alert contracts and runbooks",
    action:
      "Define fictional observations, evidence, source health, context, confidence, severity, priority, questions, owners, states, escalation, closure, reopen, privacy, and response boundaries.",
    output:
      "Alert catalog and analyst decision runbook.",
    quality:
      "Another analyst can reach a consistent bounded decision.",
  },
  {
    step: "6",
    title: "Establish quality baselines",
    action:
      "Record fictional expected alerts, true positives, false positives, false negatives, Unknown outcomes, source degradation, effort, user impact, privacy, and documentation debt.",
    output:
      "Detection quality baseline and defect register.",
    quality:
      "Alert volume is never the only quality measure.",
  },
  {
    step: "7",
    title: "Design tuning and exception governance",
    action:
      "Create fictional context, grouping, deduplication, threshold, window, presentation, severity, confidence, narrow exception, expiration, rollback, and residual-risk records.",
    output:
      "Tuning plan, exception register, and suppression-debt register.",
    quality:
      "Every change is narrow, owned, temporary, tested, and reversible.",
  },
  {
    step: "8",
    title: "Build the synthetic test library",
    action:
      "Create invented positive, negative, expected-alert, boundary, missing-field, duplicate, out-of-order, delayed, conflict, change, privacy, recovery, documentation-drift, and retirement cases.",
    output:
      "Synthetic data dictionary, expected-outcome matrix, test records, and regression library.",
    quality:
      "Expected outcomes are written before comparison.",
  },
  {
    step: "9",
    title: "Evaluate readiness and defects",
    action:
      "Compare fictional expected and observed behavior, identify defects, create corrective actions, apply validation gates, preserve rollback, and record residual risk.",
    output:
      "Readiness review, defect register, corrective-action plan, and validation report.",
    quality:
      "Approved, Conditional, Unknown, and out-of-scope conclusions are evidence-based.",
  },
  {
    step: "10",
    title: "Document and present the program",
    action:
      "Create fictional specifications, diagrams, test evidence, quality reports, owner matrices, change history, leadership brief, public portfolio summary, reflection, and retirement plan.",
    output:
      "Complete Detection Engineering Capstone Package.",
    quality:
      "All public material is fictional, privacy-safe, non-operational, and honest about limitations.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest starting point for the fictional A5 capstone?",
    choices: [
      "A favorite alert pattern.",
      "Mission outcomes, risks, stakeholders, scope, safety boundary, and defender questions.",
      "A list of platform features.",
      "A large synthetic dataset.",
    ],
    answer: 1,
    explanation:
      "Detection engineering should begin with meaningful defensive decisions rather than disconnected alert ideas.",
  },
  {
    question:
      "Why must source health be part of the fictional detection logic and alert?",
    choices: [
      "Because connectivity alone proves complete evidence.",
      "Because freshness, completeness, schema, timing, coverage, conflicts, and blind periods affect confidence and coverage.",
      "Because source health replaces authorization.",
      "Because degraded sources should always suppress alerts.",
    ],
    answer: 1,
    explanation:
      "Evidence quality changes which conclusions and decisions are supportable.",
  },
  {
    question:
      "Which fictional tuning proposal is strongest?",
    choices: [
      "Suppress every recovery-role alert.",
      "Add precise extension, identity, purpose, destination, timing, owner, source-health, expiration, tests, and rollback context.",
      "Raise every threshold.",
      "Remove the detection after one false positive.",
    ],
    answer: 1,
    explanation:
      "Precise, current, owned, testable context can improve precision without broad coverage loss.",
  },
  {
    question:
      "What does a passed positive test prove?",
    choices: [
      "The entire detection program is ready.",
      "The fictional design behaved as expected for that supplied case and evidence state.",
      "There are no false negatives.",
      "All sources are healthy.",
    ],
    answer: 1,
    explanation:
      "Testing supports only the conditions and cases actually evaluated.",
  },
  {
    question:
      "Which fictional alert is most decision-ready?",
    choices: [
      "High risk score with no explanation.",
      "Neutral observation, primary question, evidence, source health, context, confidence, severity, alternatives, owners, next questions, limits, and criteria.",
      "Full identity history and a warning label.",
      "Alert title and timestamp only.",
    ],
    answer: 1,
    explanation:
      "A strong alert supports a bounded analyst decision without unsupported certainty or unnecessary data.",
  },
  {
    question:
      "When should a fictional detection program remain Conditional?",
    choices: [
      "Whenever it has any documentation.",
      "When important source, test, coverage, privacy, owner, quality, or lifecycle conditions remain unresolved.",
      "Only when alert volume is high.",
      "Never; capstones should always be Approved.",
    ],
    answer: 1,
    explanation:
      "Conditional status honestly communicates useful progress with unresolved readiness conditions.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real logs after replacing usernames.",
      "Use internal screenshots with blurred values.",
      "Invent every organization, source, field, event, alert, test, owner, date, decision, and outcome.",
      "Use real rule logic without source names.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, systems, suppliers, incidents, and defensive capabilities.",
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
        A5 Module Test
      </Link>
    </div>
  );
}

export default function DetectionEngineeringCapstoneLabPage() {
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
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Integrated Detection Engineering Capstone
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.10 Detection Engineering Capstone Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Integrate the complete A5 workflow into one fully fictional
            defensive program: goals, telemetry, source health, logic, behavior,
            quality, tuning, alert questions, fake-data testing, documentation,
            governance, leadership communication, and portfolio presentation.
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
          lessonTitle="Detection Engineering Capstone Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will invent every organization, source, field, identity, service, destination, event, alert, test, owner, date, decision, and outcome.",
            "I will use only inert fictional evidence and conceptual reasoning.",
            "I will not copy, sanitize, transform, upload, or reproduce any real telemetry, detection rule, runbook, architecture, screenshot, or internal record.",
            "I will distinguish observations, context, hypotheses, alternatives, confidence, severity, priority, response, and confirmed outcomes.",
            "I will test both precision and meaningful coverage across healthy and degraded evidence.",
            "I will not access, scan, monitor, query, test, configure, investigate, respond to, or modify any real account, endpoint, network, domain, service, supplier, platform, organization, or production environment.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Detection Program Is Strong Only When Its Parts Agree"
        >
          <p className="leading-8">
            A fictional program has useful alerts, but the source map is stale,
            one identity population is outside coverage, extension alerts are
            mislabeled, the recovery replay test fails, and the analyst runbook
            closes when alerts disappear. Each artifact looks acceptable alone,
            yet the complete program is not ready.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak capstone conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional alerts fired, so the program is complete.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong capstone conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional core detections are useful, but program
                readiness remains Conditional until source coverage, outcome
                labels, replay behavior, runbook closure, ownership, regression,
                and residual-risk documentation meet their gates.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The capstone is not a demonstration that everything works. It is an
            evidence-based explanation of what works, what does not, what
            remains unknown, and what should happen next.
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
          title="Detection Engineering Is a System of Decisions"
        >
          <p className="leading-8">
            Fictional detection quality depends on how mission, evidence,
            behavior, logic, alert design, testing, tuning, documentation,
            ownership, privacy, recovery, and leadership decisions work
            together. A weakness in any layer can change confidence, coverage,
            impact, or maintainability across the entire program.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Integrated evidence",
                "Connect fictional sources, fields, timing, health, context, and limitations to every detection decision.",
              ],
              [
                "Integrated quality",
                "Evaluate fictional expected alerts, false positives, false negatives, Unknowns, effort, impact, privacy, and debt together.",
              ],
              [
                "Integrated lifecycle",
                "Maintain fictional versions, owners, tests, changes, rollback, residual risk, leadership decisions, and retirement.",
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
          title="The D-E-T-E-C-T-I-O-N Capstone Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "D — Define mission and defender questions",
                "Document fictional outcomes, risks, scope, stakeholders, safety, questions, and non-proof statements.",
              ],
              [
                "E — Establish evidence and health",
                "Map fictional sources, fields, provenance, timing, relationships, privacy, coverage, and health states.",
              ],
              [
                "T — Translate evidence into logic",
                "Write fictional conditions, behavior differences, alternatives, confidence, severity, and missing-data behavior.",
              ],
              [
                "E — Engineer alert decisions",
                "Create fictional alert contracts, questions, owners, states, escalation, closure, reopen, and response boundaries.",
              ],
              [
                "C — Check quality in both directions",
                "Review fictional expected alerts, false positives, false negatives, Unknowns, source degradation, effort, and impact.",
              ],
              [
                "T — Tune with narrow context",
                "Use fictional identity, service, destination, time, change, authorization, source-health, testing, expiration, and rollback.",
              ],
              [
                "I — Invent and validate fake-data cases",
                "Test fictional positive, negative, boundary, missing, duplicate, conflict, change, recovery, privacy, and regression behavior.",
              ],
              [
                "O — Organize documentation and ownership",
                "Link fictional mission, sources, fields, logic, alerts, runbooks, tests, metrics, changes, limitations, and owners.",
              ],
              [
                "N — Navigate readiness and lifecycle",
                "Decide fictional Draft, Conditional, Approved, Observing, Rolled Back, or Retired status with residual risk and milestones.",
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
              Decision-ready capstone statement
            </p>
            <p className="mt-2 leading-7">
              This fictional detection engineering program connects mission,
              evidence, source health, logic, behavior, alerts, analyst
              questions, quality, tuning, testing, documentation, ownership,
              privacy, residual risk, leadership decisions, and lifecycle
              through traceable, reproducible, non-operational artifacts.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for the Detection Engineering Capstone"
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
            Apply Ten Capstone Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {capstonePrinciples.map((item) => (
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
          title="Complete Ten Program Phases"
        >
          <div className="grid gap-5">
            {programPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.requiredOutput}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Review questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Validation gate
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.gate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Build an Eight-Detection Fictional Portfolio"
        >
          <div className="grid gap-5">
            {detectionPortfolio.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission risk", item.missionRisk],
                    ["Primary defender question", item.primaryQuestion],
                    ["Fictional sources", item.sources],
                    ["Expected alert behavior", item.expectedAlert],
                    ["Important limitation", item.limitation],
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
          eyebrow="Instructional Section 4"
          title="Integrate Eight Evidence Domains"
        >
          <div className="grid gap-5">
            {evidenceDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Direct fictional evidence", item.directEvidence],
                    ["Derived context", item.derivedContext],
                    ["Source-health questions", item.healthQuestions],
                    ["Privacy boundary", item.privacy],
                    ["Decision supported", item.decision],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.domain}-${label}`}
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
          eyebrow="Instructional Section 5"
          title="Analyze Six Integrated Capstone Scenarios"
        >
          <div className="grid gap-5">
            {capstoneScenarios.map((item, index) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-purple-100">
                    {item.scenario}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission risk", item.missionRisk],
                    ["Fictional observations", item.observations],
                    ["Alternative explanations", item.alternatives],
                    ["Next defender questions", item.nextQuestions],
                    ["Readiness decision", item.readiness],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.scenario}-${label}`}
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
          eyebrow="Instructional Section 6"
          title="Review Eight Program Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityReview.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.dimension}
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

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Example metric
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.metric}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Use a Twelve-Case Validation Matrix"
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
                {testMatrix.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">
                      {row.id}
                    </td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.input}
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
          eyebrow="Instructional Section 8"
          title="Assign Eight Governance Roles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{item.role}</h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Responsibilities
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.responsibilities}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure if unowned
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Capstone Architecture"
          title="Northbridge Detection Engineering Program Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches program integration without real
            telemetry, query syntax, detection rules, identities, systems,
            domains, applications, suppliers, incidents, or internal
            architecture.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission", "Users, services, identity, suppliers, privacy, recovery"],
                ["Evidence", "Sources, fields, timing, relationships, health, coverage"],
                ["Detection", "Goals, hypotheses, logic, behavior, alerts, questions"],
                ["Assurance", "Quality, tuning, tests, documentation, governance"],
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
                Fictional Detection Program Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Observe", "Direct evidence, provenance, timing, source health"],
                  ["Interpret", "Context, expected behavior, alternatives, confidence"],
                  ["Decide", "Questions, owners, states, severity, priority, response"],
                  ["Validate", "Positive, negative, boundary, degraded, recovery"],
                  ["Improve", "Root causes, tuning, exceptions, rollback, regression"],
                  ["Document", "Specifications, alerts, runbooks, tests, changes"],
                  ["Govern", "Owners, privacy, risk, metrics, review, acceptance"],
                  ["Retire", "Replacement, removal, retention, lessons, closure"],
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
                ["Analyst output", "Evidence, questions, decisions, limits, closure"],
                ["Owner output", "Quality, defects, actions, milestones, residual risk"],
                ["Leadership output", "Readiness, coverage, resources, priorities, decisions"],
                ["Portfolio output", "Fictional, privacy-safe, non-operational case study"],
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
          title="Fake Northbridge Detection Engineering Capstone Dashboard"
          subtitle="Fictional mission coverage, evidence health, detection readiness, quality, testing, documentation, governance, and residual risk for training only."
          metrics={[
            {
              label: "Detection portfolio readiness",
              value: "5 / 8 Approved",
              note: "Three fictional detections remain Conditional because of source-health, coverage, testing, or documentation gaps.",
            },
            {
              label: "Required validation gates passed",
              value: "7 / 10",
              note: "Recovery replay, privacy minimization, and retirement-readiness gates remain incomplete.",
            },
            {
              label: "Open residual-risk items",
              value: "9",
              note: "Identity coverage, source Blind behavior, changed-destination tests, stale owners, documentation debt, and exception removal require action.",
            },
          ]}
        />

        <FakeAlertCard
          title="Capstone Program Readiness Is Conditional"
          severity="High"
          time="3:50 PM"
          source="Fake Northbridge Detection Program Console"
          details="Five fictional detections meet current gates. Three remain Conditional because one recovery identity population is outside source coverage, recovery replay produces duplicates, the privacy test found unnecessary fields, one runbook closes on alert disappearance, and two retirement dependencies remain open."
          recommendation="Keep the fictional program Conditional. Complete identity coverage review, replay deduplication, privacy minimization, evidence-based closure, retirement dependency removal, regression testing, owner assignments, residual-risk updates, and leadership decisions before Approved status."
        />

        <FakeLogPanel
          title="Fake Capstone Program Review Timeline"
          logs={[
            "09:00 CHARTER status='approved'",
            "09:08 MISSION risks='12'",
            "09:16 DETECTIONS portfolio='8'",
            "09:24 TELEMETRY sources='9-categories'",
            "09:32 COVERAGE identity-gap='1'",
            "09:40 SOURCE-HEALTH blind-tests='partial'",
            "09:48 ALERT-CONTRACTS complete='7-of-8'",
            "09:56 QUALITY expected-alert-labels='corrected'",
            "10:04 QUALITY known-misses='1'",
            "10:12 TUNING broad-suppressions='0'",
            "10:20 TESTS passed='9-of-12'",
            "10:28 DEFECT replay-duplicates='open'",
            "10:36 PRIVACY unnecessary-fields='open'",
            "10:44 DOCUMENTATION current='6-of-8'",
            "10:52 OWNERS missing='2'",
            "11:00 RETIREMENT dependencies='2-open'",
            "11:08 RESIDUAL-RISK items='9'",
            "11:16 READINESS status='conditional'",
            "11:24 CONFIDENCE program='moderate'",
            "15:50 ALERT issue='capstone-readiness'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Capstone Evidence Supports—and What Remains Unresolved
          </h2>

          <div className="mt-6 grid gap-5">
            {[
              {
                id: "CAP-E01",
                source: "Fictional mission-risk register",
                observation:
                  "Every detection maps to a user, identity, service, supplier, privacy, evidence, availability, or recovery outcome.",
                supports:
                  "The portfolio is mission-linked rather than alert-driven.",
                limits:
                  "Mission mapping does not prove evidence, logic, tests, or operations are ready.",
                use:
                  "Preserve the portfolio priorities and defender questions.",
              },
              {
                id: "CAP-E02",
                source: "Fictional coverage map",
                observation:
                  "One recovery identity population is outside current source coverage.",
                supports:
                  "The program has a known false-negative and readiness risk.",
                limits:
                  "The gap does not prove a missed condition occurred in every period.",
                use:
                  "Keep affected detections Conditional and assign source or scope action.",
              },
              {
                id: "CAP-E03",
                source: "Fictional quality review",
                observation:
                  "Expected extension alerts are now labeled correctly, but one known recovery-role miss remains.",
                supports:
                  "Outcome quality improved while coverage risk remains.",
                limits:
                  "Known misses do not reveal every possible false negative.",
                use:
                  "Track both precision and coverage milestones.",
              },
              {
                id: "CAP-E04",
                source: "Fictional tuning register",
                observation:
                  "All current exceptions are narrow and expiring, and no broad category suppression remains.",
                supports:
                  "Suppression-debt risk is lower than before.",
                limits:
                  "Narrow exceptions can still hide behavior inside their approved scope.",
                use:
                  "Maintain expiration, testing, rollback, and residual-risk review.",
              },
              {
                id: "CAP-E05",
                source: "Fictional test package",
                observation:
                  "Core positive, negative, boundary, delay, conflict, and change cases pass; replay, privacy, and retirement cases remain open.",
                supports:
                  "Important behavior is validated, but readiness gates are incomplete.",
                limits:
                  "Passing cases do not prove untested behavior.",
                use:
                  "Keep program Conditional and rerun failed cases after correction.",
              },
              {
                id: "CAP-E06",
                source: "Fictional documentation review",
                observation:
                  "Six of eight detection packages are current; one runbook has stale closure and one field dictionary lacks source-health behavior.",
                supports:
                  "Documentation drift affects analyst and evidence decisions.",
                limits:
                  "Stale documentation does not prove every analyst decision is wrong.",
                use:
                  "Update artifacts and retrain affected reviewers.",
              },
              {
                id: "CAP-E07",
                source: "Fictional privacy review",
                observation:
                  "Two alert drafts include unnecessary personal-context fields.",
                supports:
                  "Privacy and portfolio gates are not complete.",
                limits:
                  "The finding does not invalidate all alert context.",
                use:
                  "Remove unnecessary fields and retest analyst usefulness.",
              },
              {
                id: "CAP-E08",
                source: "Fictional governance matrix",
                observation:
                  "Detection, source, identity, service, test, privacy, and risk roles exist, but two artifacts lack accountable owners.",
                supports:
                  "Lifecycle accountability is incomplete.",
                limits:
                  "Missing owners do not prove the artifacts are currently incorrect.",
                use:
                  "Assign owners, due dates, escalation, and review triggers.",
              },
            ].map((item) => (
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
                    ["Capstone use", item.use],
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
          title="Which Capstone Readiness Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional Detection Engineering Capstone?"
          evidence={[
            "Every detection maps to a mission risk and defender question.",
            "Five of eight detections meet current readiness gates.",
            "One recovery identity population is outside source coverage.",
            "Core positive, negative, boundary, delay, conflict, and change cases pass.",
            "Recovery replay, privacy minimization, and retirement gates remain incomplete.",
            "One runbook has stale closure criteria.",
            "Two artifacts lack accountable owners.",
            "Nine residual-risk items remain open.",
          ]}
          options={[
            "Keep the fictional program Conditional, preserve the five ready detections, resolve identity coverage, replay, privacy, closure, ownership, retirement, and residual-risk actions, then rerun affected gates before Approved status.",
            "Approve the entire program because most detections passed.",
            "Retire the three Conditional detections without replacement review.",
            "Hide the unresolved items from the portfolio to make the capstone look complete.",
          ]}
          bestAnswer={0}
          explanation="The first option recognizes demonstrated strengths while preserving the exact unresolved conditions that affect coverage, privacy, operations, ownership, and lifecycle."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Capstone Errors"
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
          title="Complete the Northbridge Detection Engineering Capstone"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            copy, sanitize, upload, query, inspect, test, monitor, scan,
            investigate, respond to, or modify any real telemetry, detection
            rule, alert, account, endpoint, network, domain, application,
            supplier, platform, organization, or production environment.
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
          title="Leadership Wants the Program Marked Approved before the Presentation"
          scenario="Fictional leadership wants a clean capstone presentation. Five detections meet current gates, but three remain Conditional because of identity coverage, replay duplication, privacy, closure, ownership, and retirement gaps."
          choices={[
            {
              label: "Choice A",
              response:
                "Present the fictional program as Conditional, clearly separate ready and unresolved detections, show evidence, milestones, owners, resource needs, residual risks, validation gates, and the path to Approved status.",
              outcome:
                "Best defensive choice. It protects trust and gives leadership a decision-ready plan.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark the entire program Approved because most detections passed.",
              outcome:
                "Weak. The label would overstate coverage, privacy, testing, ownership, and lifecycle readiness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the three Conditional detections from the report.",
              outcome:
                "Weak. Hiding unresolved scope would make the leadership picture incomplete.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Tuning Change Reduces Noise but Fails a Recovery Regression"
          scenario="A fictional grouping change reduces repeated alerts during normal operation. During recovery replay, a new session and a changed destination remain hidden inside the old grouped case."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional tuning Conditional or roll it back, create break conditions for new sessions, destinations, severity, source health, and state changes, rerun normal and recovery regressions, compare effort and coverage, and update documentation.",
              outcome:
                "Best choice. It preserves the intended noise reduction without accepting hidden scope changes.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the tuning because normal alert volume improved.",
              outcome:
                "Weak. The recovery regression demonstrates meaningful coverage loss.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the failed recovery case because it is uncommon.",
              outcome:
                "Weak. Recovery conditions are exactly where evidence and state differences can matter most.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Present a Defensible Capstone Review Board"
        >
          <p className="leading-8">
            Prepare a fictional review-board presentation in which analysts,
            source owners, identity owners, service owners, privacy reviewers,
            risk owners, and leadership challenge the program. Your goal is not
            to defend every design. Your goal is to show that the evidence,
            readiness decisions, limitations, and next actions are trustworthy.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Mission challenge",
                "Explain why each fictional detection exists and which user, service, identity, supplier, privacy, evidence, availability, or recovery outcome it protects.",
              ],
              [
                "Evidence challenge",
                "Explain fictional provenance, field meaning, timing, source health, coverage, privacy, limitations, and alternate evidence.",
              ],
              [
                "Quality challenge",
                "Explain fictional expected alerts, false positives, false negatives, Unknowns, misses, analyst effort, user impact, and tuning tradeoffs.",
              ],
              [
                "Testing challenge",
                "Explain fictional positive, negative, boundary, degraded, conflict, change, privacy, recovery, and regression evidence.",
              ],
              [
                "Governance challenge",
                "Explain fictional owners, approvals, metrics, changes, rollback, risk acceptance, documentation debt, review triggers, and retirement.",
              ],
              [
                "Leadership challenge",
                "Explain fictional readiness, residual risks, priorities, resources, milestones, limitations, and decisions needed.",
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
              Produce a fictional capstone review deck outline, executive
              summary, program architecture, detection catalog, evidence map,
              quality baseline, test summary, defect and action register,
              readiness matrix, residual-risk statement, governance model,
              milestones, resource requests, leadership decisions, and final
              reflection.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Detection Engineering Capstone Checklist"
          items={[
            "I can connect fictional mission risks to bounded detection objectives and defender questions.",
            "I can document fictional telemetry, fields, provenance, timing, relationships, source health, coverage, privacy, and limitations.",
            "I can write fictional logic and behavior hypotheses with expected states, meaningful differences, alternatives, confidence, severity, and non-proof statements.",
            "I can design fictional alert contracts with observation, evidence, source health, context, questions, owners, states, escalation, closure, reopen, and response boundaries.",
            "I can review fictional expected alerts, true positives, false positives, false negatives, Unknown outcomes, source degradation, analyst effort, user impact, privacy, and detection debt.",
            "I can tune fictional detections with precise, current, owned, temporary, testable, and reversible context.",
            "I can validate fictional positive, negative, expected-alert, boundary, missing-field, duplicate, out-of-order, delayed, conflict, change, privacy, recovery, documentation-drift, and retirement cases.",
            "I can assign fictional detection, source, identity, service, test, privacy, risk, documentation, change, and retirement owners.",
            "I can maintain fictional specifications, field dictionaries, logic narratives, alert contracts, runbooks, test evidence, metrics, changes, limitations, residual risks, rollback, and retirement records.",
            "I can make evidence-based fictional Draft, In Review, Conditional, Approved, Observing, Rolled Back, and Retired decisions.",
            "I can communicate fictional readiness, coverage, quality, limitations, resources, milestones, residual risks, and decisions to analysts, owners, and leadership.",
            "I can create a completely fictional public capstone without exposing real rules, sources, fields, alerts, systems, identities, suppliers, incidents, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A5.10 Mini Quiz: Detection Engineering Capstone Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Engineering Capstone Package for the Northbridge Student-Support Cooperative. Include mission, organization profile, essential services, user groups, data categories, suppliers, recovery goals, stakeholders, exclusions, safety boundary, capstone charter, deliverables, milestones, completion criteria, at least twenty mission risks, at least twenty defender questions, detection objectives, non-proof statements, at least twelve fictional detections, detection identifiers, versions, statuses, telemetry categories, source owners, fields, field meanings, provenance, event time, collection time, processing time, transformations, correlation relationships, source-health states, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, coverage maps, privacy purpose, retention, limitations, detection hypotheses, expected behavior, meaningful differences, alternative explanations, logic narratives, timing, sequence, thresholds, confidence, severity, priority, response boundaries, alert contracts, observations, evidence, enrichment, analyst questions, evidence requests, decision states, escalation criteria, closure criteria, reopen criteria, quality baselines, expected alerts, true positives, false positives, false negatives, true negatives, Unknown outcomes, source-degraded outcomes, known misses, analyst effort, user impact, privacy impact, tuning hypotheses, root causes, enrichment changes, threshold changes, window changes, grouping, deduplication, narrow exceptions, expiration, rollback, suppression debt, synthetic data dictionary, positive tests, negative tests, expected-alert tests, boundary tests, missing-field tests, duplicate tests, out-of-order tests, delayed-source tests, conflicting-source tests, change tests, privacy tests, recovery tests, replay tests, documentation-drift tests, retirement tests, expected outcomes, observed outcomes, defects, corrective actions, regression library, validation gates, detection specifications, field dictionaries, alert contracts, analyst runbooks, metrics, owner matrices, change histories, documentation debt, residual-risk register, leadership brief, analyst summary, owner summary, privacy summary, portfolio case study, architecture diagram, readiness matrix, resource needs, milestones, leadership decisions, retirement plan, lessons learned, reflection, and a statement that every organization, source, field, event, alert, test, owner, date, decision, and outcome is invented."
          tips={[
            "Use one fictional detection identifier across mission, evidence, logic, alert, test, quality, tuning, documentation, and lifecycle artifacts.",
            "Show both what the fictional program can detect and what it cannot reliably observe.",
            "Present Conditional and Unknown results honestly rather than forcing every design into Approved status.",
            "Use evidence, quality, privacy, ownership, rollback, residual risk, and retirement as equal parts of the capstone.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A5 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for detection goals, telemetry,
            source health, logic, behavior, quality labels, tuning, alert
            questions, synthetic testing, documentation, governance, privacy,
            residual risk, leadership communication, retirement, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain the full fictional detection engineering lifecycle from mission to retirement.",
              "I can connect evidence quality and source health to confidence, coverage, and analyst decisions.",
              "I can evaluate both false-positive and false-negative risk.",
              "I can tune with narrow context without creating broad suppression debt.",
              "I can create balanced fake-data tests and interpret their limits.",
              "I can document alerts, runbooks, tests, owners, changes, limitations, and residual risk.",
              "I can defend Conditional readiness honestly before a fictional review board.",
              "I can produce a safe public capstone without copying real defensive data or internal workflows.",
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
            Record one fictional detection objective, one source-health risk,
            one behavior alternative, one false-negative risk, one tuning
            tradeoff, one validation gate, one residual-risk item, and one final
            question you will review before the A5 module test.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection engineering begins with fictional mission outcomes, risks, stakeholders, scope, safety boundaries, and bounded defender questions.",
            "Telemetry, field meaning, timing, relationships, source health, coverage, privacy, and limitations are part of detection behavior.",
            "Strong fictional detections separate observation, context, hypothesis, alternatives, confidence, severity, priority, response, and confirmed outcome.",
            "Program quality must consider expected alerts, false positives, false negatives, Unknown outcomes, source degradation, analyst effort, user impact, privacy, and debt.",
            "Tuning should address root causes through narrow, current, owned, testable, expiring, and reversible context.",
            "Balanced fake-data testing includes positive, negative, boundary, missing, duplicate, timing, conflict, change, privacy, recovery, regression, documentation, and retirement cases.",
            "Alerts need evidence, source health, questions, owners, decision states, escalation, closure, reopen criteria, and non-proof statements.",
            "Documentation and ownership connect mission, sources, fields, logic, tests, alerts, quality, changes, limitations, residual risk, rollback, and retirement.",
            "Conditional readiness is a professional evidence-based conclusion, not a failure.",
            "Every CyberShield detection engineering artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module A5
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            You have completed all ten Detection Engineering lessons. Continue
            to the A5 Module Test to demonstrate your understanding of goals,
            telemetry, logic, behavior, quality, tuning, alert questions, safe
            fake-data testing, documentation, governance, and lifecycle.
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