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
const previousLesson = `${modulePath}/log-collection-and-normalization-concepts`;
const nextLesson = `${modulePath}/alert-severity-and-priority`;

const objectives = [
  "Explain fictional SIEM correlation as a documented relationship among records, identities, devices, services, destinations, sessions, requests, changes, timing, counts, sequences, states, and source health rather than proof of cause, intent, scope, or impact.",
  "Distinguish fictional single-record, multi-source, threshold, sequence, relationship, baseline, state-based, and source-health correlation concepts.",
  "Design a fictional alert-rule specification containing mission risk, defender question, sources, fields, keys, windows, conditions, context, missing-data behavior, alternatives, confidence, severity, owners, tests, limitations, and lifecycle.",
  "Evaluate fictional correlation and alert quality with positive, negative, boundary, duplicate, delayed, conflicting, blind, recovery, privacy, change, and regression cases.",
  "Create a portfolio-ready fictional Correlation and Alert Rules Package with specifications, evidence models, alert contracts, validation results, metrics, owners, residual risks, and review triggers.",
];

const vocabulary = [
  ["Correlation", "A fictional documented relationship among records, fields, identities, devices, services, destinations, sessions, requests, changes, timing conditions, counts, sequences, or states."],
  ["Correlation key", "A fictional field or relationship used to decide whether records belong to the same identity, device, service, session, request, change, destination, case, or activity."],
  ["Correlation window", "A fictional period within which records may be compared for count, sequence, relationship, state, or timing logic."],
  ["Single-record rule", "A fictional rule that evaluates one record against documented field, state, timing, source-health, or context conditions."],
  ["Multi-source rule", "A fictional rule that combines evidence from more than one source category."],
  ["Threshold rule", "A fictional rule that evaluates a count, rate, volume, duration, or repeated condition against a documented boundary."],
  ["Sequence rule", "A fictional rule that evaluates whether documented events or states occurred in a meaningful order."],
  ["Relationship rule", "A fictional rule that evaluates how identities, devices, services, destinations, sessions, approvals, assignments, or owners relate."],
  ["State-based rule", "A fictional rule that evaluates whether a condition remains active, incomplete, expired, inconsistent, unreconciled, or changed."],
  ["Baseline comparison", "A fictional comparison between current evidence and a documented expected pattern, peer group, service purpose, identity role, or operating state."],
  ["Required evidence", "Fictional sources and fields that must be present and healthy enough for the rule to support its intended observation."],
  ["Optional context", "Fictional enrichment that may improve confidence, severity, priority, routing, or analyst interpretation."],
  ["Missing-data behavior", "A fictional documented decision describing how a rule responds when evidence is absent, delayed, conflicting, blind, or recovering."],
  ["Grouping", "A fictional choice to combine related matches into one analyst work item while preserving meaningful changes and break conditions."],
  ["Deduplication", "A fictional process for recognizing repeated representations of the same condition without removing legitimate repeated activity."],
  ["Alert contract", "A fictional definition of what an alert must present to support a bounded analyst decision."],
  ["Non-proof statement", "A fictional explanation of what a rule match does not establish, such as intent, authorization, cause, scope, or impact."],
  ["Regression case", "A fictional previously validated test that must continue to pass after source, mapping, logic, context, grouping, threshold, or workflow changes."],
  ["Correlation debt", "Fictional risk created by stale rules, weak source assumptions, missing tests, broad suppressions, owner gaps, or unresolved limitations."],
];

const correlationTypes = [
  { type: "Single-record", purpose: "Evaluate one fictional normalized record against documented fields, values, state, timing, source health, and context.", example: "A temporary emergency role remains Active after its approved end.", strength: "Simple and explainable when one source carries the required meaning.", limitation: "One record may not prove effective access, authorization scope, activity, impact, or source completeness." },
  { type: "Multi-source", purpose: "Combine fictional identity, device, network, DNS, application, supplier, change, or source-health evidence.", example: "An expired role, active group relationship, current session, and service use appear across separate sources.", strength: "Supports questions one source cannot answer alone.", limitation: "Timing, semantics, authority, missing data, and conflicts can change the result." },
  { type: "Threshold", purpose: "Evaluate a fictional count, rate, volume, duration, or repeated condition against a boundary.", example: "A service identity reaches more destination categories than expected during a defined period.", strength: "Can identify meaningful scale or repetition.", limitation: "Thresholds may hide low-volume impact, duplication, seasonal variation, or approved bursts." },
  { type: "Sequence", purpose: "Evaluate whether fictional events or states occurred in a meaningful order.", example: "A role is assigned, a session begins, approval expires, and the session remains active.", strength: "Preserves process and lifecycle context.", limitation: "Out-of-order collection, replay, duplicates, and clock differences can create false sequence." },
  { type: "Relationship", purpose: "Evaluate identity-to-device, service-to-destination, supplier-to-assignment, request-to-change, or session-to-owner relationships.", example: "A supplier session reaches a destination not linked to the current assignment.", strength: "Connects activity to purpose, ownership, and trust boundaries.", limitation: "Relationship catalogs and ownership records may be stale or incomplete." },
  { type: "State-based", purpose: "Evaluate whether a condition remains active, expired, unresolved, unreconciled, or changed beyond an expected period.", example: "A source remains Recovering after its reconciliation deadline.", strength: "Useful for lifecycle, recovery, and closure questions.", limitation: "A continuing state may be duplicated or depend on stale updates." },
  { type: "Baseline or peer", purpose: "Compare fictional current behavior to a documented pattern, peer group, service purpose, identity role, or operating state.", example: "A student-support service reaches a destination class not used by its documented peers.", strength: "Can identify meaningful difference without a fixed known pattern.", limitation: "Rare or different behavior is not automatically harmful, and baselines may encode stale assumptions." },
  { type: "Source-health", purpose: "Evaluate freshness, completeness, schema, parser, queue, coverage, blind-period, conflict, or recovery conditions.", example: "A required identity source is Degraded while related alerts report normal confidence.", strength: "Makes evidence reliability visible as a defensive condition.", limitation: "Source degradation does not prove the underlying risky behavior occurred or did not occur." },
];

const designQuestions = [
  { domain: "Mission risk", question: "Which fictional user, identity, service, supplier, privacy, evidence, availability, administrative, or recovery outcome matters?", evidence: "Mission charter, service catalog, identity model, supplier model, risk register, recovery plan, and owner confirmation.", failure: "The rule may be technically interesting but disconnected from a meaningful decision." },
  { domain: "Primary defender question", question: "Which one bounded question should the fictional alert help answer?", evidence: "Detection objective, analyst workflow, owner needs, escalation criteria, and closure requirements.", failure: "The alert may collect broad evidence without supporting a consistent decision." },
  { domain: "Required sources", question: "Which fictional sources and fields must be present and healthy for the rule to support its observation?", evidence: "Source inventory, field dictionary, coverage map, source-health model, and quality tests.", failure: "Missing or degraded evidence may silently become normal confidence." },
  { domain: "Correlation keys", question: "Which fictional identity, device, session, request, service, destination, change, owner, or record relationships connect the evidence?", evidence: "Normalized fields, source identifiers, relationship catalogs, and uniqueness rules.", failure: "Unrelated records may be joined or related records may remain separated." },
  { domain: "Timing and windows", question: "Which fictional event time, collection time, processing time, duration, grace period, sequence, and tolerance define the rule?", evidence: "Timing model, source delays, clock states, window tests, boundary cases, and replay behavior.", failure: "The rule may create false matches, missed conditions, or incorrect sequence." },
  { domain: "Context and alternatives", question: "Which authorization, owner, service, destination, change, maintenance, peer, recovery, or source-health context changes interpretation?", evidence: "Extension records, change records, owner catalogs, service dependencies, peer groups, and operating states.", failure: "Expected activity may be mislabeled or meaningful changes may be hidden." },
  { domain: "Missing-data behavior", question: "How should the rule behave when required or optional evidence is missing, delayed, conflicting, blind, or recovering?", evidence: "Source-health states, alternate evidence, confidence rules, Unknown outcomes, and reassessment triggers.", failure: "The rule may force certainty or treat missing evidence as absence." },
  { domain: "Alert contract", question: "Which observation, evidence, source health, context, confidence, severity, priority, alternatives, owners, next questions, and limits must appear?", evidence: "Alert template, analyst walkthrough, case outcomes, owner feedback, and quality metrics.", failure: "The rule may match correctly but remain unusable for triage." },
  { domain: "Testing and quality", question: "Which positive, negative, boundary, duplicate, delay, conflict, blind, recovery, privacy, change, and regression cases are required?", evidence: "Test charter, synthetic data dictionary, expected outcomes, defects, validation gates, and quality reports.", failure: "The rule may appear ready after only ideal testing." },
  { domain: "Ownership and lifecycle", question: "Who owns mission, sources, fields, logic, alert, runbook, tests, privacy, quality, changes, rollback, residual risk, and retirement?", evidence: "Owner matrix, review dates, change log, debt register, exception register, and retirement plan.", failure: "The rule may continue after its meaning, scope, or evidence has changed." },
];

const ruleSpecification = [
  ["Identity and version", "Fictional rule identifier, title, status, version, owner, approver, creation date, review date, and retirement state."],
  ["Purpose and question", "Mission risk, protected outcome, primary defender question, supporting questions, users, and decision supported."],
  ["Scope and exclusions", "Identities, devices, services, destinations, environments, states, periods, source categories, and out-of-scope conditions."],
  ["Required evidence", "Sources, fields, schema versions, provenance, timing, health, coverage, required-versus-optional status, and alternate evidence."],
  ["Logic narrative", "Conditions, keys, relationships, sequence, counts, windows, thresholds, state, context, source-health behavior, and missing-data behavior."],
  ["Expected and alternative explanations", "Approved change, maintenance, extension, supplier work, recovery, source delay, mapping issue, stale ownership, or incomplete closure."],
  ["Alert contract", "Neutral title, observation, question, evidence, source health, context, confidence, severity, priority, alternatives, owners, and non-proof statement."],
  ["Testing and validation", "Positive, negative, boundary, missing, duplicate, delay, conflict, blind, recovery, privacy, change, and regression cases."],
  ["Quality and tuning", "Expected alerts, false positives, false negatives, Unknowns, source degradation, effort, grouping, deduplication, exceptions, tests, and rollback."],
  ["Lifecycle and limitations", "Known gaps, assumptions, residual risks, owners, review triggers, change history, observation, rollback, retirement, and replacement coverage."],
];

const sourceHealthBehavior = [
  { state: "Healthy", rule: "Required sources, fields, mappings, timing, coverage, and relationships support normal evaluation.", alert: "Use normal confidence while preserving ordinary limitations and non-proof statements.", test: "Positive, negative, boundary, and semantic tests still apply." },
  { state: "Conditional", rule: "An optional field or enrichment is stale or incomplete.", alert: "Keep the core observation but limit conclusions that depend on the stale context.", test: "Verify the primary question remains supportable without the optional context." },
  { state: "Degraded", rule: "A required source, field, parser, mapping, clock, queue, or relationship is delayed or incomplete.", alert: "Return Source-Degraded or Conditional behavior and lower affected confidence.", test: "Verify alternate evidence, wording, confidence, and reassessment." },
  { state: "Blind", rule: "Required evidence is unavailable for the relevant scope or period.", alert: "Do not treat quiet activity as normal or absent; expose the blind period and affected coverage.", test: "Verify missed-condition handling and historical reassessment." },
  { state: "Conflicting", rule: "Sources disagree beyond expected timing or authority differences.", alert: "Create a reconciliation state and preserve both source values and owners.", test: "Verify the rule does not silently trust one source." },
  { state: "Recovering", rule: "Evidence is returning, but backlog, replay, duplicates, schema, timing, or historical gaps remain.", alert: "Limit confidence, group replay carefully, and reassess affected periods.", test: "Verify duplicate, replay, sequence, backfill, and regression behavior." },
];

const validationCases = [
  ["CORR-T01", "Positive", "Role remains Active after expiration; no extension; group and session evidence Healthy.", "Alert with High observation confidence, bounded question, owners, alternatives, and non-proof statement."],
  ["CORR-T02", "Negative", "Role and sessions are revoked before expiration and closure evidence is complete.", "No stale-authority risk alert; lifecycle record remains searchable."],
  ["CORR-T03", "Expected", "Current extension matches identity, role, purpose, destination, owner, and time.", "Expected or lower-priority visibility without broad suppression."],
  ["CORR-T04", "Boundary", "Role state is evaluated immediately before, exactly at, and immediately after approval end.", "Results match grace period, event-time semantics, and clock tolerance."],
  ["CORR-T05", "Duplicate", "Retry and replay paths deliver three records for one underlying event.", "One grouped evidence relationship without inflated count; legitimate repeats remain distinct."],
  ["CORR-T06", "Out-of-order", "Revocation occurs before session closure but arrives after the session record.", "Sequence uses event time and shows collection delay; no false order claim."],
  ["CORR-T07", "Degraded", "Group evidence is delayed while role and session evidence are current.", "Conditional or Source-Degraded alert with lower effective-access confidence."],
  ["CORR-T08", "Conflict", "Role source says Revoked while group source says Active beyond expected synchronization.", "Conflicting state, reconciliation owner, preserved provenance, and no forced final label."],
  ["CORR-T09", "Blind", "Session source is Blind during the period when stale authority may exist.", "Coverage gap and Unknown active-use conclusion remain visible."],
  ["CORR-T10", "Recovery", "Source returns with queued records, replay markers, one schema change, and elevated duplicates.", "Recovering state, duplicate-aware grouping, historical reassessment, and regression review."],
  ["CORR-T11", "Privacy", "Alert draft includes unrelated full-profile and activity-history fields.", "Privacy validation fails; unnecessary fields are removed and usefulness is retested."],
  ["CORR-T12", "Regression", "Broader grouping hides a new session and changed destination.", "Regression fails; break conditions are added or the change is rolled back."],
];

const qualityMetrics = [
  { metric: "Rule usefulness", question: "Does each fictional alert help analysts answer the intended defender question?", evidence: "Alert contracts, walkthroughs, case outcomes, owner feedback, and evidence-request patterns.", limitation: "A useful alert may still miss other meaningful conditions." },
  { metric: "Expected-alert accuracy", question: "Are approved changes, extensions, supplier assignments, maintenance, migrations, and recovery states labeled correctly?", evidence: "Reviewed cases, owner confirmation, context freshness, tuning records, and tests.", limitation: "Expected context can become stale." },
  { metric: "False-positive rate", question: "How often does correlation create an unsupported risky interpretation?", evidence: "Reviewed outcomes, source defects, mapping issues, context gaps, timing errors, duplicates, and owner decisions.", limitation: "Outcome labels may be inconsistent or incomplete." },
  { metric: "False-negative and coverage risk", question: "Which identities, services, states, periods, health conditions, or low-volume behaviors remain missed or out of scope?", evidence: "Known misses, coverage maps, Blind periods, tests, owner reports, and residual-risk records.", limitation: "Unknown misses cannot be counted completely." },
  { metric: "Source-health sensitivity", question: "Does rule confidence change correctly under Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence?", evidence: "Health-state tests, alerts, decisions, alternate evidence, and reassessment records.", limitation: "Passing tests represent only included cases." },
  { metric: "Analyst effort", question: "How much evidence hunting, duplicate work, owner chasing, rework, and case reopening does the rule create?", evidence: "Search count, evidence requests, duplicate alerts, handoffs, decision latency, and feedback.", limitation: "Lower effort may reflect broad suppression." },
  { metric: "Alert-contract completeness", question: "Do alerts include observation, evidence, health, context, confidence, severity, priority, alternatives, owners, limits, and criteria?", evidence: "Contract checklist, analyst review, case quality, and owner feedback.", limitation: "Complete fields may still contain stale context." },
  { metric: "Correlation debt", question: "Which rules, keys, windows, thresholds, contexts, suppressions, tests, owners, documents, or retirement tasks are stale?", evidence: "Debt register, review dates, failed tests, exception records, owner matrix, change history, and residual risk.", limitation: "Counting debt does not identify mission impact by itself." },
];

const evidenceMatrix = [
  { id: "CORR-01", source: "Fictional rule specification", observation: "The stale-role rule has a clear mission risk and defender question but no missing-group behavior.", supports: "Core purpose is defined while source-health logic remains incomplete.", limits: "The specification does not prove current alerts are wrong.", use: "Add Degraded, Blind, Conflicting, and Recovering behavior." },
  { id: "CORR-02", source: "Fictional correlation timeline", observation: "Expiration occurs at 09:00, revocation at 09:04, session closure at 09:06, but collection order differs.", supports: "Collection order differs from event order.", limits: "The timeline does not prove source clocks are perfectly aligned.", use: "Use event-time sequence with tolerance and confidence." },
  { id: "CORR-03", source: "Fictional mapping review", observation: "Two sources use normalized Active for assignment-present and effective-access-present.", supports: "The shared value may hide a semantic difference.", limits: "The mapping difference does not prove every alert is inaccurate.", use: "Separate assignment from effective access." },
  { id: "CORR-04", source: "Fictional duplicate review", observation: "Three records share one event identifier through retry and recovery replay paths.", supports: "The count may be inflated by repeated delivery.", limits: "Matching identifiers do not prove all repeated records are duplicates.", use: "Apply documented uniqueness and break conditions." },
  { id: "CORR-05", source: "Fictional alert contract", observation: "The alert shows severity and identity but omits health, alternatives, confidence, owners, and non-proof statements.", supports: "The rule may match correctly but remain weak for decisions.", limits: "The contract does not prove every analyst conclusion was wrong.", use: "Expand presentation and validate usability." },
  { id: "CORR-06", source: "Fictional source-health dashboard", observation: "Role is Healthy, group Degraded, extension Conditional, and session Recovering.", supports: "Different parts of the correlation require different confidence.", limits: "Health does not prove whether authority was valid or used.", use: "Expose affected conclusions in the alert." },
  { id: "CORR-07", source: "Fictional test package", observation: "Positive, negative, boundary, duplicate, and delay tests pass; privacy, recovery, and grouping tests fail.", supports: "The rule is partially validated but not fully ready.", limits: "Passing tests do not prove untested behavior.", use: "Keep the rule Conditional and correct failed gates." },
  { id: "CORR-08", source: "Fictional quality report", observation: "Volume fell after broader grouping while a new session and destination were hidden.", supports: "Noise decreased but meaningful coverage weakened.", limits: "The report does not identify every possible miss.", use: "Add break conditions or roll back the change." },
];

const mistakes = [
  ["Correlation match becomes conclusion", "A fictional alert claims confirmed misuse before authorization, source health, scope, and impact are resolved.", "Use neutral observations, bounded questions, alternatives, confidence, owners, and non-proof statements."],
  ["Keys are undocumented", "A fictional rule joins records by a generic identity field without explaining source meaning or uniqueness.", "Document keys, provenance, mappings, uniqueness, assumptions, and tests."],
  ["Collection order becomes sequence", "A fictional rule uses arrival order even though sources have different delays.", "Use event-time reasoning, clock tolerance, delay review, and out-of-order tests."],
  ["Missing evidence becomes absence", "A fictional rule concludes no session exists while the session source is Blind.", "Return Unknown or Source-Degraded and request alternate evidence."],
  ["Thresholds are copied across populations", "One fictional count boundary is used for users, services, suppliers, administrators, and recovery identities.", "Document population-specific purpose, baselines, context, fairness, tests, and residual risk."],
  ["Grouping hides changes", "New sessions, destinations, severity changes, and source-health changes are grouped into an old case.", "Define grouping keys, time limits, and break conditions with regressions."],
  ["Suppression replaces root-cause review", "A broad maintenance suppression removes noise without reviewing duplication or stale context.", "Identify the root cause and use narrow, owned, expiring, tested, reversible changes."],
  ["Alert contract is an afterthought", "A rule is considered complete when it matches, even though analysts receive little evidence or guidance.", "Design and test the alert contract as part of the rule."],
  ["Only positive tests are used", "A fictional rule fires for one risky case and is marked Approved.", "Use balanced validation and explicit gates."],
  ["Real rules enter the portfolio", "A fictional project includes copied real logic, fields, alerts, screenshots, sources, or cases.", "Invent every organization, source, field, condition, alert, test, owner, date, decision, and outcome."],
];

const labSteps = [
  ["1", "Define mission risk", "Choose a fictional identity, service, supplier, destination, source-health, change, or recovery outcome.", "Mission-risk and primary-question statement."],
  ["2", "Document evidence", "List required and optional sources, fields, provenance, schemas, timing, health, coverage, privacy, and owners.", "Correlation evidence inventory."],
  ["3", "Choose correlation type", "Select single-record, multi-source, threshold, sequence, relationship, baseline, state, or source-health logic.", "Correlation model and rationale."],
  ["4", "Define keys and timing", "Document identity, device, session, service, destination, request, change, owner, event-time, window, uniqueness, and tolerance rules.", "Correlation-key and timing specification."],
  ["5", "Define context and alternatives", "Add authorization, owner, service, destination, change, maintenance, supplier, peer, recovery, and source-health context.", "Context and alternative-explanation matrix."],
  ["6", "Define missing-data behavior", "Write Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior.", "Source-health and uncertainty model."],
  ["7", "Create alert contract", "Specify title, observation, question, evidence, health, context, confidence, severity, priority, alternatives, owners, limits, and criteria.", "Decision-ready alert contract."],
  ["8", "Build test library", "Create positive, negative, expected, boundary, duplicate, out-of-order, degraded, conflict, blind, recovery, privacy, and regression cases.", "Correlation validation matrix."],
  ["9", "Evaluate quality", "Review usefulness, expected alerts, false positives, false negatives, Unknowns, health, effort, grouping, suppression, privacy, and debt.", "Rule-quality and tuning report."],
  ["10", "Prepare portfolio", "Combine specification, evidence model, logic, alert contract, tests, quality, owners, changes, limitations, residual risk, and reflection.", "Public-safe Correlation and Alert Rules Package."],
];

const quizQuestions = [
  { question: "What does a fictional SIEM correlation match prove?", choices: ["Malicious intent is confirmed.", "Documented evidence conditions or relationships matched under current data quality.", "The full incident scope is known.", "Response action is automatically authorized."], answer: 1, explanation: "A correlation match supports a bounded observation, not intent, cause, full scope, impact, or required response." },
  { question: "Why must correlation keys be documented?", choices: ["To make the rule longer.", "To explain how records are related and prevent false joins or missed relationships.", "To eliminate source-health review.", "To prove every record is unique."], answer: 1, explanation: "Keys define which identity, device, session, service, destination, request, change, owner, or record relationship connects the evidence." },
  { question: "A fictional session source is Blind. What is the safest rule behavior?", choices: ["Assume no session exists.", "Return Unknown or Source-Degraded for session use and expose the gap.", "Suppress the entire alert.", "Mark a true negative."], answer: 1, explanation: "Blind evidence cannot support an absence conclusion." },
  { question: "Which fictional sequence is strongest?", choices: ["The order records reached the SIEM.", "The event-time order with documented delay, clock tolerance, duplicates, and missing-data behavior.", "The dashboard order.", "The expected analyst order."], answer: 1, explanation: "Event-time reasoning with timing limitations is stronger than collection or display order." },
  { question: "What is the main risk of broad grouping?", choices: ["It always creates more alerts.", "It may hide new sessions, destinations, severity changes, health changes, or widening scope.", "It prevents all deduplication.", "It makes records unavailable."], answer: 1, explanation: "Grouping should reduce duplicate work without hiding meaningful changes." },
  { question: "Which alert contract is strongest?", choices: ["Title and severity only.", "Observation, question, evidence, provenance, health, context, confidence, severity, priority, alternatives, owners, limits, and criteria.", "A risk score only.", "The full identity history."], answer: 1, explanation: "A decision-ready alert shows what matched, why it matters, what remains unknown, and who owns the next questions." },
  { question: "Which public portfolio approach is safest?", choices: ["Use real rule syntax without source names.", "Use real alerts with fake identities.", "Invent every organization, source, field, condition, alert, test, owner, date, decision, and outcome.", "Use blurred internal screenshots."], answer: 2, explanation: "Complete fictionalization protects real systems, people, suppliers, architecture, and defensive capabilities." },
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Module A6</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function CorrelationAndAlertRulesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A6</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 3 of 10</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Relationships, Windows, Source Health, Alerts, and Validation</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A6.3 Correlation and Alert Rules</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Learn how fictional SIEM rules connect records through identities, devices, services, destinations, sessions, requests, changes, counts, sequences, states, timing, context, and source health while preserving explainability, uncertainty, privacy, ownership, and analyst decision quality.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A6: SIEM and Alert Triage Concepts" lessonTitle="Correlation and Alert Rules" lessonNumber={3} totalLessons={10} />

        <ReadinessCheck title="Before You Start" items={[
          "I will use only invented sources, fields, identities, devices, services, destinations, sessions, requests, changes, alerts, tests, owners, dates, and outcomes.",
          "I will treat a fictional rule match as a documented observation rather than proof of cause, intent, authorization, complete scope, impact, or required response.",
          "I will preserve provenance, field meaning, event time, collection time, processing time, source health, coverage, alternatives, and non-proof statements.",
          "I will make missing, delayed, duplicate, out-of-order, conflicting, blind, and recovering evidence visible in rule behavior.",
          "I will use purpose-limited fields, privacy-aware alert presentation, accountable owners, validation gates, rollback, and lifecycle review.",
          "I will not access, query, test, tune, suppress, correlate, monitor, investigate, configure, or modify any real SIEM, rule, alert, source, account, endpoint, network, domain, service, supplier, platform, or organization.",
        ]} />

        <SectionCard eyebrow="Professional Hook" title="A Strong Correlation Can Still Produce a Weak Alert">
          <p className="leading-8">A fictional SIEM correctly connects an expired emergency role, an active group relationship, a current session, and a critical student-support service. The rule match is useful, but the alert shows only High severity and an identity name. It omits source health, authorization uncertainty, timing, alternatives, owners, session purpose, service impact, and non-proof statements.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak conclusion</p><p className="mt-2 leading-7">The correlation fired, so harmful privileged misuse is confirmed.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong conclusion</p><p className="mt-2 leading-7">The correlation supports a stale-authority question. Authorization, effective access, session scope, source health, impact, alternatives, and owner validation remain under review.</p></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">The rule decides when evidence deserves review. Analysts and accountable owners decide what the evidence means.</div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
          <div className="grid gap-4 md:grid-cols-2">{objectives.map((objective, index) => <div key={objective} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p><p className="mt-3 font-semibold leading-7">{objective}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Correlation Connects Evidence—and Also Connects Its Weaknesses">
          <p className="leading-8">Fictional multi-source rules can answer important questions that no single source can answer alone. They also inherit source delays, field semantics, mapping assumptions, coverage gaps, duplicates, timing differences, stale context, privacy concerns, ownership gaps, and source-health limitations from every input.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{[
            ["Explainable relationships", "Show how identities, devices, services, destinations, sessions, requests, changes, and time are connected."],
            ["Evidence-aware decisions", "Adjust confidence and state when sources are missing, delayed, conflicting, blind, or recovering."],
            ["Operational usefulness", "Turn matches into alerts with evidence, questions, owners, alternatives, limits, tests, and lifecycle."],
          ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"><h3 className="font-black text-purple-100">{title}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The C-O-R-R-E-L-A-T-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
            ["C — Connect to mission", "Define protected outcome, risk, question, scope, exclusions, and non-proof statement."],
            ["O — Organize evidence", "Document required and optional sources, fields, provenance, timing, health, coverage, privacy, and owners."],
            ["R — Relate records", "Choose keys, identities, devices, sessions, services, destinations, requests, changes, and ownership relationships."],
            ["R — Reason about time", "Define event time, collection time, processing time, windows, sequence, duration, thresholds, tolerance, and recovery."],
            ["E — Explain context", "Add authorization, owner, service, destination, maintenance, supplier, peer, change, recovery, and alternatives."],
            ["L — Limit conclusions", "State what the match supports, what it cannot prove, and how confidence differs from severity and priority."],
            ["A — Adjust for source health", "Use Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior."],
            ["T — Test broadly", "Validate positive, negative, boundary, duplicate, delay, conflict, blind, recovery, privacy, change, and regression cases."],
            ["E — Evolve responsibly", "Measure usefulness, misses, effort, privacy, debt, tuning, ownership, rollback, review triggers, and retirement."],
          ].map(([title, detail]) => <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Correlation and Alert Rules">
          <div className="grid gap-4 md:grid-cols-2">{vocabulary.map(([term, definition]) => <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-200">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 1" title="Compare Eight Correlation Types">
          <div className="grid gap-5">{correlationTypes.map((item) => <article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-cyan-100">{item.type}</h3><p className="mt-3 leading-7 text-slate-300">{item.purpose}</p><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Example</p><p className="mt-2 text-sm leading-6">{item.example}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strength</p><p className="mt-2 text-sm leading-6">{item.strength}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{item.limitation}</p></div></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 2" title="Ask Ten Rule-Design Questions">
          <div className="grid gap-5">{designQuestions.map((item) => <article key={item.domain} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-purple-100">{item.domain}</h3><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Question</p><p className="mt-2 text-sm leading-6">{item.question}</p></div><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p><p className="mt-2 text-sm leading-6">{item.evidence}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Failure if ignored</p><p className="mt-2 text-sm leading-6">{item.failure}</p></div></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 3" title="Write a Ten-Part Rule Specification">
          <div className="grid gap-5 md:grid-cols-2">{ruleSpecification.map(([section, content]) => <article key={section} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{section}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{content}</p></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 4" title="Change Rule Behavior with Source Health">
          <div className="grid gap-5">{sourceHealthBehavior.map((item) => <article key={item.state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-emerald-100">{item.state}</h3><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Rule behavior</p><p className="mt-2 text-sm leading-6">{item.rule}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Alert behavior</p><p className="mt-2 text-sm leading-6">{item.alert}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Testing need</p><p className="mt-2 text-sm leading-6">{item.test}</p></div></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 5" title="Validate Twelve Correlation Cases">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr>{["Case", "Type", "Fictional input", "Expected result"].map((heading) => <th key={heading} className="px-4 py-3 font-black">{heading}</th>)}</tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{validationCases.map(([id, type, input, expected]) => <tr key={id}><td className="px-4 py-4 align-top font-mono font-bold text-white">{id}</td><td className="px-4 py-4 align-top font-semibold text-cyan-200">{type}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{input}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{expected}</td></tr>)}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 6" title="Measure Eight Correlation Quality Dimensions">
          <div className="grid gap-5 md:grid-cols-2">{qualityMetrics.map((item) => <article key={item.metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.metric}</h3><div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p><p className="mt-2 text-sm leading-6">{item.question}</p></div><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p><p className="mt-2 text-sm leading-6">{item.evidence}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{item.limitation}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Fictional Architecture" title="Northbridge Rule-to-Decision Model">
          <p className="leading-8">This conceptual architecture is completely invented and intentionally non-operational. It teaches correlation and alert design without real products, query syntax, source names, fields, credentials, addresses, alerts, cases, incidents, suppliers, or internal systems.</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">{[["Identity evidence", "Roles, groups, approvals, sessions, revocation"], ["Service evidence", "Actions, results, owners, impact, recovery"], ["Relationship evidence", "Devices, destinations, suppliers, changes"], ["Source-health evidence", "Freshness, completeness, conflicts, recovery"]].map(([title, detail]) => <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"><p className="font-black text-purple-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Fictional Correlation Core</p><div className="mt-4 grid gap-3 md:grid-cols-2">{[["Purpose", "Mission risk, question, scope, limits"], ["Inputs", "Sources, fields, provenance, timing, health"], ["Relationships", "Keys, sessions, services, requests, owners"], ["Logic", "Conditions, windows, thresholds, sequences, states"], ["Context", "Authorization, change, maintenance, peer, recovery"], ["Uncertainty", "Missing, delayed, conflicting, blind, recovering"], ["Alert", "Observation, evidence, confidence, severity, priority"], ["Lifecycle", "Tests, quality, tuning, owners, rollback, retirement"]].map(([title, detail]) => <div key={title} className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"><p className="font-black text-cyan-100">{title}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></div>
            <div className="grid gap-3">{[["Analyst output", "Questions, evidence, owners, states, criteria"], ["Owner output", "Source, identity, service, change, risk decisions"], ["Quality output", "Usefulness, misses, effort, source health, debt"], ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"]].map(([title, detail]) => <div key={title} className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"><p className="font-black text-blue-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
          </div>
        </SectionCard>

        <FakeDashboardCard title="Fake Northbridge Correlation Quality Dashboard" subtitle="Fictional rule usefulness, source-health coverage, alert-contract completeness, regression status, ownership, privacy, and correlation debt for training only." metrics={[
          { label: "Rules meeting current validation gates", value: "6 / 9", note: "Three rules remain Conditional because of privacy, recovery, grouping, or missing-data defects." },
          { label: "Rules with complete source-health behavior", value: "7 / 9", note: "Two rules still treat Blind or Recovering evidence as normal confidence." },
          { label: "Open fictional correlation debt items", value: "10", note: "Keys, windows, semantic mappings, alert contracts, grouping, tests, owners, privacy, documentation, and retirement remain open." },
        ]} />

        <FakeAlertCard title="Correlation Rule Readiness Is Conditional" severity="High" time="3:31 PM" source="Fake Northbridge Correlation Quality Console" details="The fictional stale-authority rule matches its core positive case, but group-source degradation is not reflected in confidence, one normalized Active value hides assignment versus effective-access meaning, the alert contract lacks alternatives and non-proof statements, and recovery grouping fails regression." recommendation="Keep the fictional rule Conditional. Separate source meanings, add source-health behavior, expand the alert contract, define grouping break conditions, complete privacy and recovery tests, assign owners, document rollback, and rerun validation gates." />

        <FakeLogPanel title="Fake Correlation Evaluation Timeline" logs={[
          "09:00 RULE id='CORR-ST-04'", "09:02 SOURCE role='healthy'", "09:03 SOURCE group='degraded'", "09:04 SOURCE extension='conditional'", "09:05 SOURCE session='recovering'", "09:06 KEY identity='matched'", "09:07 KEY role='matched'", "09:08 WINDOW event-time='20-minutes'", "09:09 CONDITION expired-role='true'", "09:10 CONDITION valid-extension='unknown'", "09:11 RELATION session='present'", "09:12 CONFIDENCE observation='high'", "09:13 CONFIDENCE authorization='moderate'", "09:14 ALERT severity='high'", "09:15 ALERT priority='high'", "09:16 CONTRACT alternatives='missing'", "09:17 TEST recovery-grouping='failed'", "09:18 PRIVACY alert-fields='conditional'", "09:19 READINESS rule='conditional'", "15:31 ALERT issue='correlation-readiness'",
        ]} />

        <SectionCard eyebrow="Fictional Evidence Matrix" title="What Correlation Evidence Supports—and What It Does Not Prove">
          <div className="grid gap-5">{evidenceMatrix.map((item) => <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><h3 className="font-black text-white">{item.source}</h3></div><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Observation", item.observation], ["Supports", item.supports], ["Does not prove", item.limits], ["Rule-design use", item.use]].map(([label, detail]) => <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </SectionCard>

        <AnalyzeEvidenceCard title="Which Correlation Readiness Decision Is Best Supported?" question="Which conclusion most responsibly represents the fictional Northbridge rule review?" evidence={[
          "The stale-role rule has a clear mission risk and primary defender question.",
          "Role evidence is Healthy, group evidence is Degraded, extension evidence is Conditional, and session evidence is Recovering.",
          "Two sources use normalized Active for different meanings.",
          "Positive, negative, boundary, duplicate, and delay tests pass.",
          "Privacy, recovery replay, and grouping-regression tests fail.",
          "The alert contract omits alternatives, owner questions, confidence separation, and non-proof statements.",
          "Broader grouping hid a new session and changed destination.",
          "Ten fictional correlation-debt items remain open.",
        ]} options={[
          "Keep the fictional rule Conditional, preserve the validated core logic, and resolve semantic mappings, source-health behavior, alert-contract gaps, grouping break conditions, failed tests, ownership, privacy, rollback, and debt before approval.",
          "Approve the rule because the core positive test passed.",
          "Treat every normalized Active value as equivalent.",
          "Suppress recovery alerts so the failed grouping test no longer appears.",
        ]} bestAnswer={0} explanation="The first option recognizes proven behavior while preserving the exact evidence, alert, privacy, grouping, testing, and lifecycle gaps that affect safe readiness." />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Correlation and Alert Rule Errors">
          <div className="grid gap-5 md:grid-cols-2">{mistakes.map(([title, observation, correction]) => <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-red-100">{title}</h3><div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p><p className="mt-2 text-sm leading-6">{observation}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p><p className="mt-2 text-sm leading-6">{correction}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Practice Lab" title="Build the Northbridge Correlation and Alert Rules Package">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Use only supplied fictional information. Do not access, copy, sanitize, upload, inspect, query, test, tune, suppress, correlate, monitor, investigate, configure, or modify any real SIEM, rule, alert, source, field, account, endpoint, network, domain, service, supplier, platform, case, or organization.</div>
          <div className="mt-6 grid gap-5">{labSteps.map(([step, title, action, output]) => <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</span><div><h3 className="text-lg font-black text-cyan-100">{title}</h3><p className="mt-2 leading-7 text-slate-300">{action}</p></div></div><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p><p className="mt-2 text-sm leading-6">{output}</p></div></article>)}</div>
        </SectionCard>

        <ScenarioDecisionLab title="A Rule Matches while a Required Source Is Blind" scenario="A fictional stale-role rule matches role expiration and group state, but the session source is Blind for the entire review period. The alert currently says no active session was found." choices={[
          { label: "Choice A", response: "Change the fictional alert to Unknown or Source-Degraded for active-use conclusions, expose the Blind period, request approved alternate evidence, preserve the stale-authority question, and reassess after recovery.", outcome: "Best defensive choice. Missing session evidence cannot support an absence conclusion.", tone: "best" },
          { label: "Choice B", response: "Keep the statement because the SIEM search returned no session records.", outcome: "Weak. The source could not provide the evidence.", tone: "risk" },
          { label: "Choice C", response: "Suppress the entire alert until the source returns.", outcome: "Weak. The stale-authority condition may still require review.", tone: "risk" },
        ]} />

        <ScenarioDecisionLab title="Grouping Reduces Noise but Hides a New Destination" scenario="A fictional grouping change combines repeated alerts for one service identity. During review, a new session and previously unseen destination are added to the existing case without new analyst attention." choices={[
          { label: "Choice A", response: "Keep the change Conditional or roll it back, add break conditions for new sessions, destinations, severity, source health, and scope changes, then rerun normal and recovery regressions.", outcome: "Best choice. Grouping should reduce duplicate work without hiding meaningful changes.", tone: "best" },
          { label: "Choice B", response: "Approve the change because alert volume decreased.", outcome: "Weak. Lower volume does not justify hidden scope changes.", tone: "risk" },
          { label: "Choice C", response: "Remove the changed-destination regression case.", outcome: "Weak. Deleting the test hides a known quality risk.", tone: "risk" },
        ]} />

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Correlation Rule before a Review Board">
          <p className="leading-8">Fictional Northbridge proposes a rule connecting identity, group, session, service, destination, extension, change, and source-health records. The design has a useful mission question, but weak keys, a collection-time window, incomplete health behavior, thin alert presentation, mostly positive tests, and grouping with no break conditions.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{[
            ["Defend the mission", "Explain the protected outcome, question, scope, exclusions, and non-proof statement."],
            ["Defend the evidence", "Explain sources, fields, provenance, mappings, health, coverage, privacy, and limitations."],
            ["Defend the relationships", "Explain keys, identity, device, session, service, destination, request, change, owner, and uniqueness assumptions."],
            ["Defend the timing", "Explain event time, collection time, processing time, windows, sequence, tolerance, duplicates, and replay."],
            ["Defend the alert", "Explain observation, evidence, context, health, confidence, severity, priority, alternatives, owners, and criteria."],
            ["Defend the lifecycle", "Explain tests, quality, tuning, grouping, suppression, ownership, rollback, review triggers, debt, and retirement."],
          ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"><p className="font-black text-purple-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
        </SectionCard>

        <DefenderChecklist title="Correlation and Alert Rules Checklist" items={[
          "I can explain a fictional correlation match as a bounded evidence relationship rather than proof of cause, intent, scope, impact, or required response.",
          "I can compare single-record, multi-source, threshold, sequence, relationship, baseline, state-based, and source-health correlation.",
          "I can define mission risk, primary question, scope, exclusions, required evidence, optional context, alternatives, and non-proof statements.",
          "I can document keys, relationships, event time, collection time, processing time, windows, thresholds, sequence, tolerance, uniqueness, and missing-data behavior.",
          "I can preserve source meaning and avoid treating normalized values as automatically equivalent.",
          "I can use Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering rule behavior.",
          "I can design an alert contract with observation, evidence, provenance, source health, context, confidence, severity, priority, alternatives, owners, limits, and criteria.",
          "I can validate positive, negative, expected, boundary, duplicate, out-of-order, degraded, conflict, blind, recovery, privacy, and regression cases.",
          "I can evaluate usefulness, expected alerts, false positives, false negatives, Unknowns, source-health sensitivity, effort, contract completeness, and correlation debt.",
          "I can tune grouping, deduplication, thresholds, context, and suppressions narrowly with expiration, testing, rollback, and residual-risk review.",
          "I can assign source, detection, analyst, identity, service, privacy, quality, risk, change, and retirement owners.",
          "I can create a completely fictional correlation artifact without exposing real rules, queries, sources, fields, alerts, identities, systems, suppliers, or internal architecture.",
        ]} />

        <MiniQuiz title="A6.3 Mini Quiz: Correlation and Alert Rules" questions={quizQuestions} />

        <PortfolioPrompt title="Portfolio Prompt" prompt="Create a fully fictional Correlation and Alert Rules Package for the Northbridge Student-Support Cooperative. Include mission, protected outcomes, risks, stakeholders, defender questions, non-proof statements, scope, exclusions, rule identifiers, versions, statuses, owners, sources, fields, provenance, schemas, parser versions, normalized values, transformations, event time, collection time, processing time, correlation keys, identity relationships, device relationships, session relationships, service relationships, destination relationships, request relationships, change relationships, owner relationships, rule types, conditions, counts, rates, durations, thresholds, windows, grace periods, tolerance, uniqueness, grouping, deduplication, break conditions, authorization context, owner context, service context, destination context, supplier context, change context, maintenance context, peer context, recovery context, expected behavior, alternatives, missing-data behavior, all six source-health states, alert contracts, confidence, severity, priority, owners, next questions, decision criteria, positive tests, negative tests, expected-alert tests, boundary tests, duplicate tests, out-of-order tests, degraded-source tests, conflict tests, blind-period tests, recovery tests, privacy tests, regression tests, expected outcomes, observed outcomes, defects, corrective actions, validation gates, quality metrics, tuning records, suppression records, expiration, rollback, change history, review triggers, residual risks, retirement, replacement coverage, architecture diagram, leadership summary, reflection, and a statement that every organization, source, field, rule, alert, test, owner, date, decision, and outcome is invented." tips={[
          "Use fictional mission and defender questions before writing rule conditions.",
          "Keep source meaning, provenance, timing, source health, coverage, and missing-data behavior visible.",
          "Separate observation confidence, potential severity, review priority, and response decisions.",
          "Test rule logic, alert presentation, grouping, privacy, recovery, and lifecycle—not only positive matching.",
          "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
        ]} />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for Alert Severity and Priority?">
          <p className="leading-8">Before moving to A6.4, rate your readiness from 1 to 5 for mission, rule types, sources, fields, keys, timing, windows, sequence, context, source health, alert contracts, testing, quality, grouping, privacy, ownership, lifecycle, and complete fictionalization.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[
            "I can explain what a fictional correlation match supports and what it does not prove.",
            "I can choose an appropriate correlation type for a bounded defender question.",
            "I can document keys, relationships, timing, sequence, thresholds, uniqueness, and missing-data behavior.",
            "I can preserve source meaning and avoid false equivalence across normalized fields.",
            "I can adjust rule behavior for Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence.",
            "I can create a decision-ready fictional alert contract.",
            "I can build balanced validation cases and interpret their limitations.",
            "I can produce a safe fictional rule package without copying real queries, alerts, fields, or systems.",
          ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>)}</div>
          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">Record one fictional defender question, one correlation type, one required source, one correlation key, one timing risk, one source-health behavior, and one question you will carry into A6.4.</div>
        </SectionCard>

        <KeyTakeaways takeaways={[
          "A fictional SIEM correlation match supports a documented observation, not proof of cause, intent, complete scope, impact, or required response.",
          "Different correlation types support different defender questions.",
          "Keys, field meaning, provenance, uniqueness, relationships, timing, windows, sequence, thresholds, and missing-data behavior must be documented.",
          "Collection order and event order are not automatically the same.",
          "Normalized values from different sources may share a category while preserving different meanings.",
          "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence should change confidence and alert behavior.",
          "A strong alert contract includes observation, evidence, health, context, confidence, severity, priority, alternatives, owners, non-proof statements, and criteria.",
          "Balanced testing includes positive, negative, expected, boundary, duplicate, timing, degraded, conflict, blind, recovery, privacy, change, and regression cases.",
          "Grouping and suppression should reduce unnecessary work without hiding new sessions, destinations, source-health changes, severity changes, or widening scope.",
          "Every CyberShield correlation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p><h2 className="mt-2 text-2xl font-bold text-white">Continue Module A6</h2><p className="mt-3 max-w-3xl leading-7 text-slate-300">Next, learn how fictional defenders separate alert severity, evidence confidence, analyst priority, response urgency, mission impact, privilege, scope, source health, time sensitivity, active effect, and recoverability.</p><div className="mt-5"><Navigation /></div></section>
      </div>

      <Footer />
    </main>
  );
}