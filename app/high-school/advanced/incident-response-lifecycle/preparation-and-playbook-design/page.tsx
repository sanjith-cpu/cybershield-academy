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
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousLesson = `${modulePath}/advanced-incident-response-roles`;
const nextLesson = `${modulePath}/detection-and-scoping`;

const objectives = [
  "Distinguish fictional incident response policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register by purpose and level of detail.",
  "Design fictional playbooks with activation criteria, roles, bounded questions, evidence, source-health behavior, branches, containment, continuity, communication, recovery, validation, rollback, closure, and reopening.",
  "Evaluate fictional playbooks for rigid scripting, missing authority, stale assumptions, untested branches, absent privacy boundaries, weak recovery gates, and unclear ownership.",
  "Create fictional tabletop exercises that test decisions, handoffs, owner unavailability, source degradation, scope change, containment tradeoffs, supplier delays, communication, recovery, and improvement.",
  "Create a portfolio-ready fictional Preparation and Playbook Design Package containing a response plan, scenario playbooks, activation matrix, evidence map, exercise record, validation cases, version history, debt register, and reflection.",
];

const vocabulary = [
  ["Incident response policy", "A fictional high-level statement of purpose, authority, scope, responsibilities, governance, and minimum program expectations."],
  ["Incident response plan", "A fictional organization-wide framework describing preparation, activation, coordination, evidence, containment, communication, recovery, closure, and improvement."],
  ["Playbook", "A fictional scenario-focused decision guide containing triggers, questions, roles, evidence, branches, options, validation, rollback, communication, continuity, and lifecycle steps."],
  ["Checklist", "A fictional concise list used to confirm required evidence, actions, approvals, or validation without replacing judgment."],
  ["Reference", "A fictional supporting document containing definitions, maps, source details, decision criteria, role information, or communication templates."],
  ["Contact list", "A fictional readiness record containing primary owners, alternates, authority, availability, escalation, and review dates."],
  ["Decision record", "A fictional log of the question, options, evidence, uncertainty, owner, authority, selected action, rationale, validation, and review trigger."],
  ["Evidence register", "A fictional record of evidence identity, source, purpose, provenance, timing, health, integrity, access, custody, retention, and case use."],
  ["Activation criterion", "A fictional condition that triggers routine review, incident coordination, specialist escalation, leadership review, source recovery, or another workflow."],
  ["Decision point", "A fictional moment at which evidence, source health, scope, authority, continuity, privacy, impact, or recovery requires an explicit choice."],
  ["Branch condition", "A fictional condition that moves a playbook into a different path based on evidence or mission context."],
  ["Entry condition", "A fictional requirement that must be true before a playbook or phase begins."],
  ["Exit criterion", "A fictional requirement that must be satisfied before a response phase ends."],
  ["Quality gate", "A fictional required evidence, approval, validation, source-health, privacy, continuity, or lifecycle check."],
  ["Assumption", "A fictional planning belief that must be documented, tested, reviewed, and changed when evidence or conditions change."],
  ["Dependency", "A fictional identity, service, platform, source, supplier, data, communication, continuity, or authority condition needed for a response step."],
  ["Fallback", "A fictional alternate path used when a primary role, source, service, supplier, communication channel, or recovery method is unavailable."],
  ["Tabletop exercise", "A fictional discussion-based simulation used to test roles, decisions, evidence, authority, continuity, communication, recovery, and improvement."],
  ["Exercise inject", "A fictional new fact, source failure, owner response, scope change, impact update, or constraint introduced during a simulation."],
  ["Expected action", "A fictional documented response that should occur when a specific exercise condition appears."],
  ["Observed action", "The fictional decision or response actually produced during an exercise."],
  ["Playbook debt", "Fictional unresolved work involving stale roles, missing evidence, untested branches, weak recovery, unclear authority, or outdated assumptions."],
  ["Version history", "A fictional record of playbook changes, owner, reason, date, evidence, test result, approval, and rollback reference."],
  ["Playbook expiration", "A fictional date or condition requiring review because mission, services, identities, suppliers, sources, ownership, policy, or architecture may have changed."],
];

const documentTypes = [
  {
    type: "Policy",
    purpose: "Define fictional program authority, scope, governance, responsibilities, required outcomes, and exception rules.",
    contains: "Purpose, scope, authority, responsibilities, minimum controls, exceptions, review, and accountability.",
    boundary: "Does not contain live case decisions or detailed scenario steps.",
    owner: "Program governance or leadership authority.",
  },
  {
    type: "Plan",
    purpose: "Describe the fictional organization-wide incident response lifecycle and coordination model.",
    contains: "Activation, command, roles, evidence, communication, containment, continuity, recovery, closure, reopening, review, and metrics.",
    boundary: "Does not attempt to contain every scenario branch.",
    owner: "Incident response program owner.",
  },
  {
    type: "Playbook",
    purpose: "Guide fictional scenario-specific evidence and decision workflows.",
    contains: "Triggers, questions, sources, health rules, roles, branches, options, validation, rollback, communication, recovery, and exit criteria.",
    boundary: "Does not authorize one rigid response for every case.",
    owner: "Scenario owner with program approval.",
  },
  {
    type: "Checklist",
    purpose: "Confirm fictional required evidence, actions, approvals, validation, and lifecycle steps.",
    contains: "Short verification items, status, owner, and completion evidence.",
    boundary: "Does not replace complex decision reasoning.",
    owner: "Operational or quality owner.",
  },
  {
    type: "Reference",
    purpose: "Provide fictional definitions, service maps, source details, role information, criteria, and templates.",
    contains: "Definitions, maps, sources, criteria, templates, role details, and review dates.",
    boundary: "Does not contain unsupported case conclusions.",
    owner: "Domain owner.",
  },
  {
    type: "Contact and authority list",
    purpose: "Provide fictional primary owners, alternates, availability, decision rights, and escalation.",
    contains: "Role, primary, alternate, authority, response expectation, access readiness, escalation, and review date.",
    boundary: "Public learning versions contain no real contacts.",
    owner: "Program owner and role owners.",
  },
  {
    type: "Decision record",
    purpose: "Preserve fictional case-specific reasoning and authority.",
    contains: "Question, evidence, source health, options, owner, authority, decision, rationale, conditions, validation, and review trigger.",
    boundary: "Excludes unnecessary personal details and unsupported certainty.",
    owner: "Incident lead or decision owner.",
  },
  {
    type: "Evidence register",
    purpose: "Preserve fictional evidence traceability and governance.",
    contains: "Evidence ID, source, purpose, provenance, timing, health, integrity, access, custody, retention, transfer, limitations, and use.",
    boundary: "Technical interpretation stays in the analysis record.",
    owner: "Evidence coordinator.",
  },
];

const playbookSections = [
  {
    section: "1. Purpose and scenario",
    question: "What fictional condition does the playbook address, and which mission decision does it support?",
    required: "Scenario, mission relevance, users, supported decisions, exclusions, and safety boundary.",
    weak: "A vague title such as suspicious activity with no bounded question.",
  },
  {
    section: "2. Entry and activation",
    question: "Which fictional observations, evidence, health states, reports, impacts, or owner concerns justify activation?",
    required: "Routine, incident, specialist, leadership, source-recovery, privacy, continuity, and supplier triggers.",
    weak: "Every alert automatically becomes a confirmed incident.",
  },
  {
    section: "3. Roles and authority",
    question: "Who coordinates, analyzes, owns decisions, preserves evidence, communicates, maintains continuity, recovers, and accepts risk?",
    required: "Primary roles, alternates, decision rights, availability, handoff acceptance, conflicts, and escalation.",
    weak: "Roles are named without authority or backups.",
  },
  {
    section: "4. Questions and scope",
    question: "Which fictional observation, authorization, identity, service, impact, source-health, supplier, privacy, continuity, and recovery questions matter?",
    required: "Bounded questions, evidence, owners, deadlines, affected/possible/unknown categories, and scope-change history.",
    weak: "Investigate everything related to the alert.",
  },
  {
    section: "5. Evidence and source health",
    question: "Which fictional sources, fields, provenance, times, health states, alternatives, and limitations support each decision?",
    required: "Source inventory, evidence IDs, event/collection/processing time, health behavior, privacy, retention, and missing-data rules.",
    weak: "No visible evidence is treated as absence.",
  },
  {
    section: "6. Severity, confidence, and priority",
    question: "How do consequence, certainty, active impact, scope, time sensitivity, source health, and recoverability affect urgency?",
    required: "Separate severity, confidence, priority, rationale, owner, and reassessment triggers.",
    weak: "Severity alone determines the full response.",
  },
  {
    section: "7. Options and branches",
    question: "Which fictional containment, continuity, communication, evidence, supplier, privacy, and leadership options exist under different conditions?",
    required: "Options, entry conditions, authority, dependencies, benefits, costs, evidence effects, validation, rollback, and break conditions.",
    weak: "One irreversible action for every case.",
  },
  {
    section: "8. Communication",
    question: "Which fictional audiences need which facts, uncertainty, guidance, approvals, timing, correction, and next update?",
    required: "Audience, owner, review, approval, privacy, version, distribution, correction, and next-update commitment.",
    weak: "One generic message goes to every audience.",
  },
  {
    section: "9. Continuity and recovery",
    question: "How will fictional critical functions continue, and what proves trustworthy restoration?",
    required: "Continuity options, clean-state criteria, dependencies, identity, configuration, data, source recovery, monitoring, rollback, and acceptance.",
    weak: "Service reachable equals recovered.",
  },
  {
    section: "10. Closure, reopening, and lifecycle",
    question: "Which fictional evidence and approvals end phases, close the response, reopen it, and keep the playbook current?",
    required: "Exit criteria, residual uncertainty, residual risk, corrective actions, reopen triggers, owner, version, expiration, debt, archive, and replacement.",
    weak: "Alerts stop, so the case and playbook are complete.",
  },
];

const activationMatrix = [
  {
    condition: "Single low-confidence alert",
    evidence: "One fictional alert, Healthy sources, no confirmed impact, narrow scope, and plausible expected alternatives.",
    workflow: "Routine triage with bounded questions and source-health review.",
    authority: "Analyst or incident lead within routine authority.",
    escalation: "Escalate if confidence, scope, impact, source health, or owner deadlines change.",
  },
  {
    condition: "Multiple independent reports",
    evidence: "Fictional SIEM alert, user reports, service symptoms, or supplier notice align around one mission service.",
    workflow: "Incident coordination readiness review.",
    authority: "Incident lead or authorized alternate.",
    escalation: "Activate when evidence crosses documented mission or coordination criteria.",
  },
  {
    condition: "Critical service impact",
    evidence: "Fictional Healthy service evidence confirms broad user effect or loss of critical function.",
    workflow: "Incident coordination plus service and continuity activation.",
    authority: "Incident lead, service owner, and continuity owner.",
    escalation: "Leadership when containment, resources, continuity, or risk exceed routine authority.",
  },
  {
    condition: "Privileged authority unresolved",
    evidence: "Fictional role or session remains active after expiration while authorization evidence is incomplete.",
    workflow: "Time-sensitive identity and incident coordination.",
    authority: "Incident lead with identity owner.",
    escalation: "Alternate owner or leadership if the identity decision deadline is missed.",
  },
  {
    condition: "Required source Blind",
    evidence: "Fictional evidence source is Blind during the key period and affects mission-relevant conclusions.",
    workflow: "Source-recovery and evidence-limited response path.",
    authority: "Incident lead with source and affected decision owners.",
    escalation: "Leadership if evidence loss blocks critical decisions.",
  },
  {
    condition: "Privacy-sensitive concern",
    evidence: "Fictional evidence suggests unnecessary access, sharing, or exposure of protected information.",
    workflow: "Incident coordination with privacy and governance review.",
    authority: "Incident lead and privacy authority.",
    escalation: "Legal, policy, or leadership authority according to documented triggers.",
  },
  {
    condition: "Supplier dependency",
    evidence: "Fictional critical service depends on an external provider and local evidence cannot answer the bounded question.",
    workflow: "Incident coordination plus supplier escalation.",
    authority: "Supplier owner with incident lead.",
    escalation: "Leadership when service continuity, data sharing, contract, or delay creates mission risk.",
  },
  {
    condition: "Recovery validation failure",
    evidence: "Fictional service is reachable but clean-state, identity, configuration, data, source, or dependency validation fails.",
    workflow: "Recovery remains Conditional; rollback or continued containment is evaluated.",
    authority: "Recovery owner with service and incident owners.",
    escalation: "Leadership if restoration delay or rollback has major mission consequences.",
  },
];

const sourceHealthRules = [
  {
    state: "Healthy",
    behavior: "Fictional freshness, completeness, schema, parser, queue, timing, and coverage support normal-confidence use.",
    rule: "Use evidence normally while preserving provenance, scope, and limitations.",
    prohibition: "Healthy evidence still does not prove intent or complete scope.",
  },
  {
    state: "Conditional",
    behavior: "Fictional evidence is usable for some questions but limited by delay, partial coverage, stale context, or assumptions.",
    rule: "Label affected conclusions, request alternate evidence, assign owner, and define reassessment.",
    prohibition: "Do not present Conditional evidence as complete.",
  },
  {
    state: "Degraded",
    behavior: "Fictional evidence is materially weakened by delay, missing fields, parser defects, conflicts, or incomplete coverage.",
    rule: "Reduce confidence, narrow decisions, use alternate evidence, and escalate source repair.",
    prohibition: "Do not treat missing records as no activity.",
  },
  {
    state: "Blind",
    behavior: "Fictional required evidence is unavailable for the relevant population or period.",
    rule: "Use Source-Degraded or Unknown, activate alternate evidence and recovery, and require historical reassessment.",
    prohibition: "Do not claim confirmation, absence, success, or full scope.",
  },
  {
    state: "Conflicting",
    behavior: "Fictional sources disagree beyond timing or semantic tolerance.",
    rule: "Preserve both observations, compare authority, timing, mapping, scope, and ownership, and assign reconciliation.",
    prohibition: "Do not choose the preferred source without documented reason.",
  },
  {
    state: "Recovering",
    behavior: "Fictional connectivity is returning but backlog, replay, duplicates, schema, timing, or historical gaps remain.",
    rule: "Keep recovery obligations open, reconcile affected cases, and delay final closure conclusions.",
    prohibition: "Connected does not equal trustworthy recovery.",
  },
];

const branches = [
  {
    branch: "Expected activity",
    entry: "Fictional identity, service, destination, purpose, owner, approval, timing, and source health match current approved activity.",
    action: "Document Expected state, preserve visibility, set expiration, monitor break conditions, and record owner confirmation.",
    break: "New identity, session, destination, service, scope, result, time, owner, impact, or source-health change.",
    exit: "Expected context remains valid through observation or returns to active triage.",
  },
  {
    branch: "Source-Degraded",
    entry: "A fictional required source is Conditional, Degraded, Blind, Conflicting, or Recovering.",
    action: "Lower confidence, preserve affected periods, use alternate evidence, assign source owner, and define reassessment.",
    break: "Source recovery, conflicting evidence, wider scope, active impact, or deadline failure.",
    exit: "Source obligations and historical reassessment support the needed decision.",
  },
  {
    branch: "Identity containment",
    entry: "Fictional privileged authority or active session creates time-sensitive risk under authorization uncertainty.",
    action: "Compare scoped restriction, session closure, monitoring, continuity, validation, and rollback with identity-owner approval.",
    break: "New identity, service, session, active impact, health change, or broader scope.",
    exit: "Authorized action is validated and remaining authorization, scope, continuity, and risk work is assigned.",
  },
  {
    branch: "Service continuity",
    entry: "Fictional containment or recovery may interrupt critical users or workflows.",
    action: "Activate approved alternate workflows, prioritize critical users, communicate limits, monitor capacity, and define transition-back criteria.",
    break: "Worsening impact, capacity failure, dependency loss, privacy issue, supplier failure, or recovery milestone.",
    exit: "Trusted restoration is accepted and temporary workflows retire safely.",
  },
  {
    branch: "Supplier coordination",
    entry: "Fictional evidence, service, recovery, or source questions depend on an external provider.",
    action: "Send purpose-limited request, track commitment, preserve confidentiality, compare evidence, and escalate mission issues.",
    break: "Missed deadline, conflicting evidence, broader impact, data-sharing concern, or continuity risk.",
    exit: "Dependency resolves, becomes accepted residual risk, or transfers to a long-term owner.",
  },
  {
    branch: "Leadership decision",
    entry: "Fictional resource conflict, major interruption, policy exception, public communication, or risk decision exceeds operational authority.",
    action: "Provide bounded decision, options, evidence, uncertainty, mission impact, recommendations, urgency, and residual risk.",
    break: "Evidence changes, deadline expires, an option disappears, or impact increases.",
    exit: "Authorized decision is recorded with conditions, owners, review trigger, and communication.",
  },
];

const tabletopInjects = [
  {
    id: "INJECT-01",
    event: "The fictional primary incident lead is unavailable when the first alert arrives.",
    tests: "Alternate authority, activation, handoff, contact readiness, and command continuity.",
    expected: "Named alternate accepts the role using the documented transfer checklist.",
  },
  {
    id: "INJECT-02",
    event: "A fictional required identity source becomes Degraded during authorization review.",
    tests: "Source-health behavior, alternate evidence, confidence, ownership, and reassessment.",
    expected: "Authorization becomes Conditional rather than forced into yes or no.",
  },
  {
    id: "INJECT-03",
    event: "A fictional second service appears after initial scope is documented.",
    tests: "Scope change, service ownership, severity, priority, communication, and continuity.",
    expected: "Scope version updates without assuming the second service is fully affected.",
  },
  {
    id: "INJECT-04",
    event: "A fictional broad containment option would interrupt urgent support workflows.",
    tests: "Containment tradeoff, continuity, authority, alternatives, validation, rollback, and leadership escalation.",
    expected: "Team compares narrow and broad options and selects only an authorized evidence-supported path.",
  },
  {
    id: "INJECT-05",
    event: "Two fictional owners provide conflicting impact statements.",
    tests: "Evidence reconciliation, message approval, uncertainty, correction, and versioning.",
    expected: "Incident lead establishes supported wording and assigns a technical decision deadline.",
  },
  {
    id: "INJECT-06",
    event: "A fictional supplier misses the committed response deadline.",
    tests: "Supplier escalation, local fallback, continuity, evidence limits, and leadership decision need.",
    expected: "Supplier owner activates alternate escalation and the incident lead records decision impact.",
  },
  {
    id: "INJECT-07",
    event: "The fictional service becomes reachable, but one source remains Blind and data validation is incomplete.",
    tests: "Recovery gates, source reconciliation, data integrity, business acceptance, rollback, and closure.",
    expected: "Recovery remains Conditional and closure is blocked.",
  },
  {
    id: "INJECT-08",
    event: "Leadership requests immediate closure before residual-risk ownership is assigned.",
    tests: "Closure authority, risk acceptance, evidence, owner recommendations, and communication.",
    expected: "Incident lead presents closure gaps and requires the documented risk authority or continued Conditional state.",
  },
];

const exerciseDomains = [
  {
    domain: "Activation quality",
    strong: "Fictional activation uses evidence, source health, mission relevance, authority, scope, and non-proof statements.",
    weak: "The alert title alone declares the incident.",
    record: "Activation record and decision rationale.",
  },
  {
    domain: "Role quality",
    strong: "Fictional primary and alternate owners accept bounded responsibilities under documented authority.",
    weak: "Roles are assigned without acknowledgement, authority, or alternate.",
    record: "Role roster, handoff log, and decision-rights matrix.",
  },
  {
    domain: "Evidence quality",
    strong: "Fictional evidence includes provenance, timing, source health, supports, limitations, privacy, and purpose.",
    weak: "Missing evidence becomes absence or raw records are shared broadly.",
    record: "Evidence register and source-health map.",
  },
  {
    domain: "Scope quality",
    strong: "Fictional affected, possible, unknown, excluded, and out-of-scope categories are versioned.",
    weak: "Scope is permanently defined by the first alert.",
    record: "Scope register and change log.",
  },
  {
    domain: "Containment quality",
    strong: "Fictional options compare risk reduction, continuity, evidence, authority, reversibility, validation, rollback, and risk.",
    weak: "The fastest or broadest action is selected automatically.",
    record: "Containment decision matrix.",
  },
  {
    domain: "Communication quality",
    strong: "Fictional messages preserve facts, uncertainty, audience need, approvals, privacy, versions, and corrections.",
    weak: "One message goes to everyone or conflicting statements remain unresolved.",
    record: "Communication log and approvals.",
  },
  {
    domain: "Recovery quality",
    strong: "Fictional clean-state, identity, configuration, data, source, dependency, monitoring, rollback, and acceptance gates pass.",
    weak: "Availability alone is treated as recovery.",
    record: "Recovery and validation checklist.",
  },
  {
    domain: "Lifecycle quality",
    strong: "Fictional closure, reopening, corrective actions, debt, owners, review, and versioning are complete.",
    weak: "The exercise ends without improvement or retest.",
    record: "Closure review, after-action report, and updated playbook.",
  },
];

const validationCases = [
  ["PLAY-T01", "Routine alert", "One fictional low-confidence alert, Healthy sources, no impact, and narrow scope.", "Use routine triage rather than automatic incident activation.", "Proportionate response"],
  ["PLAY-T02", "Multiple evidence categories", "Fictional alert, user reports, and service symptoms align around one mission service.", "Trigger coordinated response review.", "Mission-aware activation"],
  ["PLAY-T03", "Primary unavailable", "Fictional incident lead is unavailable.", "Authorized alternate accepts command through the handoff process.", "Command continuity"],
  ["PLAY-T04", "Blind source", "Fictional required source is Blind during the key period.", "Follow Source-Degraded branch, alternate evidence, and reassessment.", "Evidence honesty"],
  ["PLAY-T05", "Scope expansion", "Fictional second service appears after initial scope.", "Update scope version, owners, and priority.", "Dynamic scoping"],
  ["PLAY-T06", "Containment tradeoff", "Fictional broad shutdown interrupts critical support.", "Compare narrow, broad, continuity, validation, and rollback options.", "Mission continuity"],
  ["PLAY-T07", "Privacy-sensitive evidence", "Fictional request includes fields unnecessary for the decision.", "Apply minimization and privacy review.", "Purpose limitation"],
  ["PLAY-T08", "Supplier delay", "Fictional critical supplier misses a response commitment.", "Activate supplier escalation and local fallback.", "External readiness"],
  ["PLAY-T09", "Recovery incomplete", "Fictional service is reachable while data and source validation remain incomplete.", "Keep recovery Conditional and block closure.", "Trustworthy restoration"],
  ["PLAY-T10", "Stale playbook", "Fictional ownership, contacts, and supplier paths changed after review.", "Fail readiness validation and update plus retest.", "Lifecycle accuracy"],
  ["PLAY-T11", "Closure pressure", "Fictional leadership requests closure before residual-risk ownership exists.", "Route risk decision to documented authority.", "Evidence-based closure"],
  ["PLAY-T12", "Public portfolio", "Student plans to adapt a real playbook and contact tree.", "Fail portfolio validation and invent every detail.", "Confidentiality and safety"],
];

const versionFields = [
  ["Playbook identifier", "Trace across versions, exercises, cases, approvals, and archive.", "IR-PB-NB-004"],
  ["Version", "Identify the fictional approved state.", "Version 2.3"],
  ["Owner", "Assign content, testing, review, debt, and retirement accountability.", "Incident response program owner"],
  ["Approvers", "Record required incident, technical, service, privacy, continuity, evidence, recovery, supplier, and leadership approvals.", "Incident lead, service owner, privacy reviewer, recovery owner"],
  ["Change reason", "Explain which exercise, incident, source, role, supplier, policy, or architecture change required revision.", "Tabletop found missing supplier fallback"],
  ["Affected sections", "Identify activation, roles, evidence, branches, communication, recovery, closure, or other sections changed.", "Sections 3, 8, 9, and 10"],
  ["Supporting evidence", "Link exercise observations, validation cases, source changes, owner review, or corrective actions.", "EX-NB-07 and PLAY-T08 to PLAY-T11"],
  ["Test result", "Document expected and observed behavior after revision.", "Supplier delay, recovery gate, and closure cases passed"],
  ["Approval date", "Record fictional authorization for use.", "Invented date: 2026-08-01"],
  ["Review and expiration", "Prevent use after assumptions or dependencies change.", "Review in ninety days or after service, role, source, supplier, policy, or architecture change"],
  ["Rollback reference", "Identify the prior validated version if the new version causes defects.", "Return to 2.2 if recovery branch validation fails"],
  ["Archive and replacement", "Document retirement, replacement coverage, history, and access.", "Archive 2.2 read-only after 2.3 approval"],
];

const readinessMetrics = [
  {
    metric: "Playbook coverage",
    question: "Do fictional mission-critical scenarios, services, identities, suppliers, privacy concerns, source failures, and recovery conditions have playbooks?",
    evidence: "Scenario inventory, mission map, service criticality, source map, supplier map, and residual-risk register.",
    limitation: "A written playbook does not prove readiness.",
  },
  {
    metric: "Activation clarity",
    question: "Can fictional responders distinguish routine triage, incident coordination, specialist, leadership, source-recovery, and privacy paths?",
    evidence: "Activation matrix, exercise decisions, false activations, delayed activations, and owner review.",
    limitation: "Real conditions may not match exercise categories exactly.",
  },
  {
    metric: "Branch validation",
    question: "Have fictional Expected, Source-Degraded, Containment, Continuity, Supplier, Leadership, Recovery, Closure, and Reopen paths been tested?",
    evidence: "Validation cases, injects, observed actions, defects, corrections, and retest.",
    limitation: "Passing known branches does not cover unknown future conditions.",
  },
  {
    metric: "Role readiness",
    question: "Do fictional playbook roles have current authority, alternates, access, training, contacts, and handoff acceptance?",
    evidence: "Role roster, alternate map, contact test, access review, and tabletop performance.",
    limitation: "A tested role may still be unavailable later.",
  },
  {
    metric: "Evidence-source readiness",
    question: "Are fictional sources, fields, health rules, alternate evidence, privacy, retention, and owners current?",
    evidence: "Source inventory, schema tests, health exercises, alternate evidence, and review dates.",
    limitation: "Source behavior can change after review.",
  },
  {
    metric: "Exercise quality",
    question: "Do fictional exercises test authority, uncertainty, source degradation, scope change, containment, communication, recovery, closure, and improvement?",
    evidence: "Exercise plan, injects, expected actions, observed actions, scoring, defects, and retest.",
    limitation: "Discussion success does not prove operational execution.",
  },
  {
    metric: "Corrective-action aging",
    question: "How long do fictional exercise and playbook defects remain open?",
    evidence: "Action owner, due date, mission effect, dependency, evidence, validation, escalation, and closure.",
    limitation: "Fast closure does not prove the correction worked.",
  },
  {
    metric: "Playbook debt",
    question: "Which fictional assumptions, roles, contacts, branches, sources, suppliers, recovery gates, tests, approvals, and review dates remain incomplete?",
    evidence: "Debt register, age, mission effect, owner, due date, priority, escalation, and residual risk.",
    limitation: "Debt count alone does not show mission impact.",
  },
];

const evidenceMatrix = [
  ["PLAY-E01", "Fictional playbook inventory", "Northbridge has identity and service playbooks but none for supplier evidence loss.", "Supplier-dependent response coverage is incomplete.", "Does not prove a supplier event will occur.", "Create and test supplier coordination and fallback branches."],
  ["PLAY-E02", "Fictional activation matrix", "A low-confidence alert and multi-source service-impact condition use the same activation path.", "Activation criteria are too broad.", "Does not prove every activation was wrong.", "Separate routine triage from coordinated response."],
  ["PLAY-E03", "Fictional source-health review", "Playbook says no record means no activity even when the source is Blind.", "The playbook can create false absence.", "Does not prove prior cases were misclassified.", "Add six source-health states and alternate evidence."],
  ["PLAY-E04", "Fictional tabletop record", "Responders selected broad shutdown before reviewing continuity or rollback.", "Containment criteria and authority are incomplete.", "Does not prove they would always choose that action.", "Add option comparison, continuity, validation, rollback, and approvals."],
  ["PLAY-E05", "Fictional communication exercise", "Two audiences received different impact statements because no message owner was assigned.", "Communication ownership and version control are weak.", "Does not determine which statement is correct.", "Add communication owner, approval, correction, and next-update rules."],
  ["PLAY-E06", "Fictional recovery checklist", "Service availability is checked, but identity, configuration, data, supplier, source, and monitoring validation are absent.", "Recovery criteria are incomplete.", "Does not prove a recovery failed.", "Add clean-state and multi-owner validation gates."],
  ["PLAY-E07", "Fictional version history", "Playbook owner changed, but approval and review records were not updated.", "Current authority and lifecycle are uncertain.", "Content may still be technically useful.", "Assign current owner, approval, expiration, validation, and debt."],
  ["PLAY-E08", "Fictional closure exercise", "Team closed after service restoration while one source remained Recovering and risk was unassigned.", "Closure and recovery gates are weak.", "Does not prove every closure would be premature.", "Add source reconciliation, risk authority, observation, and reopen triggers."],
];

const commonMistakes = [
  ["The playbook becomes an inflexible script", "Team follows one path even when source health, scope, impact, continuity, or authority changes.", "Responders may take inappropriate actions or miss important branches.", "Use decision points, branches, alternatives, validation, and rollback."],
  ["Every alert activates an incident", "A single low-confidence alert triggers full coordination.", "Resources are consumed and triage disappears.", "Define evidence-based activation and reassessment criteria."],
  ["Every source is assumed Healthy", "A missing record is treated as no activity.", "Blind or delayed evidence creates false certainty.", "Document health states, alternatives, confidence changes, and reassessment."],
  ["Roles lack authority", "Tasks are assigned but no one knows who may contain, communicate, recover, close, or reopen.", "Teams delay or exceed authority.", "Link every decision point to rights and escalation."],
  ["Containment is one mandatory action", "The playbook always shuts down the service.", "Continuity, evidence, privacy, users, and recovery may be harmed.", "Compare options with dependencies, validation, rollback, and authority."],
  ["Communication is generic", "One identical message goes to analysts, users, suppliers, and leadership.", "Audiences receive too much, too little, or unsupported information.", "Use audience-specific facts, uncertainty, approvals, versions, and corrections."],
  ["Recovery means the service responds", "The playbook closes when connectivity returns.", "Identity, data, source health, monitoring, and risk may remain unresolved.", "Use clean-state, staged validation, observation, rollback, and reopen triggers."],
  ["Exercises test only happy paths", "No inject covers unavailable owners, Blind sources, scope growth, supplier delay, or failed recovery.", "Important branches remain untested.", "Use difficult injects, expected outcomes, defects, owners, and retest."],
  ["Playbooks never expire", "Contacts, sources, suppliers, authority, and assumptions remain unchanged on paper.", "The documented process may fail under pressure.", "Assign owner, review, expiration, debt, exercises, and archive."],
  ["Real playbooks enter the portfolio", "A student sanitizes real role names, contacts, service maps, triggers, or steps.", "Sensitive structures and capabilities may remain identifiable.", "Invent every organization, role, service, source, supplier, trigger, action, and outcome."],
];

const labSteps = [
  ["1", "Define the mission", "Document fictional critical services, users, identity, data, suppliers, continuity, privacy, evidence, recovery, and leadership priorities.", "Preparation mission and safety charter.", "Every organization, service, identity, source, and decision is invented."],
  ["2", "Separate document types", "Create fictional policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register purposes.", "Response-document architecture.", "Each document has a clear owner, scope, detail level, and lifecycle."],
  ["3", "Build the plan", "Define fictional activation, roles, evidence, health, severity, priority, containment, communication, continuity, recovery, closure, reopening, review, and metrics.", "Incident response plan.", "The plan coordinates the lifecycle without becoming a rigid script."],
  ["4", "Design scenario playbooks", "Create purpose, entry criteria, roles, questions, scope, evidence, branches, options, validation, rollback, communication, recovery, and exit criteria.", "Scenario playbook set.", "Every decision point identifies evidence, owner, authority, alternatives, and reassessment."],
  ["5", "Add source-health behavior", "Define fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering rules.", "Source-health decision matrix.", "Missing or delayed evidence cannot become absence or success."],
  ["6", "Create branch conditions", "Design fictional Expected, Source-Degraded, Containment, Continuity, Supplier, Leadership, Recovery, Closure, and Reopen paths.", "Branch map.", "Each branch has entry, action, break, validation, and exit."],
  ["7", "Plan the tabletop", "Write fictional purpose, participants, observers, initial state, injects, expected actions, scoring, safety, and timing.", "Tabletop exercise plan.", "The exercise tests difficult paths rather than only the happy path."],
  ["8", "Run and score", "Compare fictional expected and observed actions across activation, roles, evidence, scope, containment, communication, recovery, and lifecycle.", "Exercise observation and score record.", "Defects are evidence-based, non-blaming, and tied to mission effect."],
  ["9", "Correct and retest", "Assign fictional defects, owners, due dates, dependencies, revisions, validation, approval, rollback reference, and retest.", "Corrective-action and version package.", "A change is incomplete until intended behavior is validated."],
  ["10", "Prepare the portfolio", "Combine the fictional mission, documents, plan, playbooks, activation, sources, branches, exercise, validation, versioning, debt, risk, and reflection.", "Public-safe Preparation and Playbook Design Package.", "No real playbook, contact tree, service, source, supplier, or action is used."],
];

const quizQuestions = [
  {
    question: "Which statement best distinguishes a fictional incident response plan from a playbook?",
    choices: [
      "They are exactly the same.",
      "The plan describes the organization-wide lifecycle, while a playbook guides scenario-specific decisions and branches.",
      "The playbook contains only contacts.",
      "The plan contains only technical commands.",
    ],
    answer: 1,
    explanation: "A plan defines the overall framework. A playbook applies it to a bounded scenario.",
  },
  {
    question: "What should happen when a fictional required source is Blind?",
    choices: [
      "Assume no activity occurred.",
      "Follow a Source-Degraded branch with alternate evidence, reduced confidence, source recovery, and historical reassessment.",
      "Close the response.",
      "Delete the source from the playbook.",
    ],
    answer: 1,
    explanation: "Blind evidence prevents both confirmation and absence claims.",
  },
  {
    question: "Why should a fictional playbook contain branch conditions?",
    choices: [
      "To make it longer.",
      "To change paths when evidence, source health, scope, impact, authority, continuity, or recovery differs.",
      "To avoid ownership.",
      "To guarantee the same action every time.",
    ],
    answer: 1,
    explanation: "Branches prevent rigid scripting and connect conditions to appropriate decisions.",
  },
  {
    question: "Which fictional containment section is strongest?",
    choices: [
      "Always shut down the service.",
      "List narrow and broad options with authority, dependencies, continuity, evidence effect, validation, rollback, and residual risk.",
      "Let any responder choose.",
      "Ignore user impact.",
    ],
    answer: 1,
    explanation: "Containment should be governed by evidence, tradeoffs, authority, validation, and rollback.",
  },
  {
    question: "What makes a fictional tabletop exercise useful?",
    choices: [
      "It proves complete readiness.",
      "It tests difficult decisions, roles, source failures, scope changes, communication, containment, recovery, and improvement using expected and observed actions.",
      "It contains no unexpected information.",
      "It rewards the fastest team.",
    ],
    answer: 1,
    explanation: "A tabletop reveals readiness gaps by testing how the process behaves under changing conditions.",
  },
  {
    question: "A fictional service is reachable, but data and source validation remain incomplete. What is strongest?",
    choices: [
      "Mark recovered and close.",
      "Keep recovery Conditional until clean-state and validation gates pass.",
      "Ignore the missing evidence.",
      "Delete the recovery checklist.",
    ],
    answer: 1,
    explanation: "Availability is only one recovery dimension.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Adapt a real playbook and change names.",
      "Use real role details with fake incidents.",
      "Invent every organization, role, service, source, trigger, contact, action, decision, date, and outcome.",
      "Use a real contact tree without numbers.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real people, systems, suppliers, authority, and defensive capabilities.",
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
        Module A7
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

export default function PreparationAndPlaybookDesignPage() {
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
              Module A7
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Plans, Playbooks, Branches, Exercises, and Versioning
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.2 Preparation and Playbook Design
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional response teams transform mission, authority,
            evidence, source health, containment, continuity, communication,
            recovery, validation, rollback, closure, reopening, ownership, and
            exercises into usable plans and playbooks.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A7: Incident Response Lifecycle"
          lessonTitle="Preparation and Playbook Design"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, services, identities, roles, sources, suppliers, triggers, decisions, actions, exercises, dates, and outcomes.",
            "I will separate fictional policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register by purpose.",
            "I will design fictional decision points and branches rather than one rigid response script.",
            "I will include source-health behavior, authority, alternatives, continuity, privacy, validation, rollback, closure, reopening, ownership, and lifecycle review.",
            "I will test fictional owner unavailability, Blind sources, scope expansion, supplier delay, conflicting evidence, and failed recovery.",
            "I will not access, copy, sanitize, upload, test, adapt, or modify any real incident response plan, playbook, role chart, contact tree, service map, supplier path, organization, system, or person.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Playbook Can Create Risk When It Is Too Simple">
          <p className="leading-8">
            A fictional playbook says: “If a critical alert appears, isolate the
            service, notify everyone, restore from backup, and close when the
            service responds.” During a tabletop, the source is Blind, the
            service supports urgent student assistance, the supplier contact is
            stale, recovery has not been validated, and the incident lead is
            unavailable. The document contains steps but not the decisions
            needed for safe response.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak playbook
              </p>
              <p className="mt-2 leading-7">
                “Follow the same steps quickly whenever the alert appears.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong playbook
              </p>
              <p className="mt-2 leading-7">
                “Use activation criteria, bounded questions, source-health
                branches, authorized options, continuity tradeoffs, validation,
                rollback, and lifecycle gates.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
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

        <SectionCard eyebrow="Why This Matters" title="Preparation Protects Decision Quality Before Time Pressure">
          <p className="leading-8">
            Fictional response becomes safer when teams decide in advance who
            has authority, which evidence is needed, how source health changes
            conclusions, which continuity options exist, how containment is
            validated, who approves communication, what proves recovery, and
            when closure or reopening is justified.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Prepared decisions", "Activation, containment, communication, recovery, and closure criteria are defined before urgency distorts judgment."],
              ["Tested assumptions", "Roles, contacts, sources, suppliers, branches, recovery gates, and fallbacks are exercised rather than trusted on paper."],
              ["Governed lifecycle", "Owners, versions, approvals, expiration, debt, corrective actions, and retest prevent silent decay."],
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

        <SectionCard eyebrow="Core Framework" title="The P-L-A-Y-B-O-O-K Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["P — Purpose", "Define the fictional scenario, mission question, supported decisions, users, exclusions, and safety boundary."],
              ["L — Launch criteria", "Document entry conditions, activation levels, roles, authority, alternates, and escalation."],
              ["A — Ask bounded questions", "List observation, authorization, service, impact, source-health, scope, supplier, privacy, continuity, and recovery questions."],
              ["Y — Yield evidence", "Map sources, fields, provenance, timing, health, alternate evidence, privacy, retention, and limitations."],
              ["B — Branch by conditions", "Create Expected, Source-Degraded, Containment, Continuity, Supplier, Leadership, Recovery, Closure, and Reopen paths."],
              ["O — Options and owners", "Compare choices using authority, benefit, cost, dependencies, evidence effect, continuity, validation, rollback, and risk."],
              ["O — Observe outcomes", "Define expected state, validation evidence, monitoring, owner acceptance, failure triggers, and rollback."],
              ["K — Keep current", "Assign owner, version, approval, exercises, corrective actions, expiration, debt, archive, and replacement."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Preparation and Playbooks">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 1" title="Separate Eight Response Document Types">
          <div className="grid gap-5">
            {documentTypes.map((item) => (
              <article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.type}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Contains", item.contains],
                    ["Boundary", item.boundary],
                    ["Owner", item.owner],
                  ].map(([label, detail]) => (
                    <div key={`${item.type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 2" title="Build a Ten-Section Playbook">
          <div className="grid gap-5">
            {playbookSections.map((item) => (
              <article key={item.section} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-purple-100">{item.section}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Core question", item.question],
                    ["Required content", item.required],
                    ["Weak pattern", item.weak],
                  ].map(([label, detail]) => (
                    <div key={`${item.section}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 3" title="Create an Eight-Condition Activation Matrix">
          <div className="grid gap-5">
            {activationMatrix.map((item) => (
              <article key={item.condition} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.condition}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional evidence", item.evidence],
                    ["Workflow", item.workflow],
                    ["Authority", item.authority],
                    ["Escalation", item.escalation],
                  ].map(([label, detail]) => (
                    <div key={`${item.condition}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 4" title="Define Six Source-Health Rules">
          <div className="grid gap-5 md:grid-cols-2">
            {sourceHealthRules.map((item) => (
              <article key={item.state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.state}</h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Behavior</p>
                  <p className="mt-2 text-sm leading-6">{item.behavior}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Playbook rule</p>
                  <p className="mt-2 text-sm leading-6">{item.rule}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Prohibited conclusion</p>
                  <p className="mt-2 text-sm leading-6">{item.prohibition}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 5" title="Design Six Response Branches">
          <div className="grid gap-5">
            {branches.map((item) => (
              <article key={item.branch} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-purple-100">{item.branch}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Entry condition", item.entry],
                    ["Fictional action", item.action],
                    ["Break condition", item.break],
                    ["Exit criterion", item.exit],
                  ].map(([label, detail]) => (
                    <div key={`${item.branch}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 6" title="Run Eight Tabletop Injects">
          <div className="grid gap-5 md:grid-cols-2">
            {tabletopInjects.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-200">
                  {item.id}
                </span>
                <h3 className="mt-4 font-black text-white">{item.event}</h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Tests</p>
                  <p className="mt-2 text-sm leading-6">{item.tests}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Expected response</p>
                  <p className="mt-2 text-sm leading-6">{item.expected}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 7" title="Score Eight Exercise Domains">
          <div className="grid gap-5">
            {exerciseDomains.map((item) => (
              <article key={item.domain} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.domain}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Strong behavior", item.strong],
                    ["Weak behavior", item.weak],
                    ["Evidence record", item.record],
                  ].map(([label, detail]) => (
                    <div key={`${item.domain}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 8" title="Validate Twelve Playbook Scenarios">
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Case", "Type", "Fictional input", "Expected result", "Quality protected"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(([id, type, input, expected, protects]) => (
                  <tr key={id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">{id}</td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">{type}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{input}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{expected}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{protects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 9" title="Maintain a Twelve-Field Version Record">
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Field", "Purpose", "Fictional example"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {versionFields.map(([field, purpose, example]) => (
                  <tr key={field}>
                    <td className="px-4 py-4 align-top font-bold text-white">{field}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{purpose}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 10" title="Measure Eight Preparation Outcomes">
          <div className="grid gap-5 md:grid-cols-2">
            {readinessMetrics.map((item) => (
              <article key={item.metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.metric}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Fictional Preparation Architecture" title="Northbridge Plan-to-Playbook Model">
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches preparation without real organizations,
            contacts, systems, sources, suppliers, incidents, containment
            actions, or internal procedures.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission inputs", "Critical services, users, data, privacy, continuity"],
                ["Readiness inputs", "Roles, authority, alternates, contacts, suppliers"],
                ["Evidence inputs", "Sources, fields, health, provenance, timing, limits"],
                ["Lifecycle inputs", "Activation, branches, recovery, closure, review"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50">
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Playbook Core
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Purpose", "Scenario, mission question, users, exclusions"],
                  ["Activation", "Entry criteria, authority, roles, alternatives"],
                  ["Questions", "Evidence, scope, impact, source health, owners"],
                  ["Branches", "Expected, degraded, containment, continuity, supplier"],
                  ["Decisions", "Options, authority, cost, validation, rollback"],
                  ["Communication", "Audience, facts, uncertainty, approval, correction"],
                  ["Recovery", "Clean state, dependencies, monitoring, acceptance"],
                  ["Lifecycle", "Exercise, version, expiration, debt, archive"],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4">
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Operational output", "Plan, playbooks, checklists, contacts, decisions"],
                ["Exercise output", "Injects, observations, scoring, defects, retest"],
                ["Leadership output", "Coverage, debt, resources, risk, improvement"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50">
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Playbook Readiness Dashboard"
          subtitle="Fictional scenario coverage, activation clarity, branch validation, role readiness, evidence-source readiness, exercise quality, action aging, and playbook debt."
          metrics={[
            {
              label: "Critical fictional scenarios with tested playbooks",
              value: "6 / 9",
              note: "Supplier evidence loss, broad source Blindness, and extended recovery still require exercises.",
            },
            {
              label: "Playbook branches passing validation",
              value: "11 / 15",
              note: "Leadership risk, supplier fallback, recovery rollback, and reopen branches remain incomplete.",
            },
            {
              label: "Open fictional preparation debt",
              value: "13",
              note: "Contacts, alternates, health rules, branch tests, supplier path, privacy review, communication correction, recovery gates, closure authority, expiration, rollback, archive, and retest remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Incident Playbook Failed Recovery and Closure Validation"
          severity="High"
          time="10:42 AM"
          source="Fake Northbridge Preparedness Governance Console"
          details="The fictional tabletop restored service availability, but identity validation, data reconciliation, supplier dependency, source recovery, residual-risk ownership, and reopen criteria remained incomplete. The team closed because the service responded."
          recommendation="Keep the fictional playbook unapproved. Add clean-state criteria, multi-owner validation, source reconciliation, risk authority, closure gates, reopen triggers, version ownership, and a retest."
        />

        <FakeLogPanel
          title="Fake Playbook Exercise Timeline"
          logs={[
            "09:00 EXERCISE id='EX-NB-07'",
            "09:02 ALERT confidence='low'",
            "09:05 REPORTS users='2'",
            "09:06 ACTIVATION state='coordinated'",
            "09:10 SOURCE identity='degraded'",
            "09:12 SCOPE service='1'",
            "09:20 INJECT second-service='added'",
            "09:25 CONTAINMENT option='broad-shutdown'",
            "09:27 CONTINUITY review='missing'",
            "09:30 SUPPLIER response='late'",
            "09:45 SERVICE availability='restored'",
            "09:47 IDENTITY validation='incomplete'",
            "09:48 DATA validation='incomplete'",
            "09:49 SOURCE recovery='incomplete'",
            "09:50 RISK owner='missing'",
            "09:51 REOPEN criteria='missing'",
            "09:52 CASE state='closed'",
            "10:42 ALERT issue='playbook-validation-failed'",
          ]}
        />

        <SectionCard eyebrow="Fictional Evidence Matrix" title="What Preparation Evidence Supports—and What It Does Not Prove">
          <div className="grid gap-5">
            {evidenceMatrix.map(([id, source, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <h3 className="font-black text-white">{source}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Does not prove", limits],
                    ["Preparation use", use],
                  ].map(([label, detail]) => (
                    <div key={`${id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Playbook Decision Is Best Supported?"
          question="Which fictional response best addresses the Northbridge tabletop failure?"
          evidence={[
            "Service availability was restored.",
            "Identity validation remained incomplete.",
            "Data reconciliation remained incomplete.",
            "Supplier dependency remained unresolved.",
            "One required source remained Recovering.",
            "Residual-risk ownership was not assigned.",
            "Reopen criteria were missing.",
            "The team closed because the service responded.",
          ]}
          options={[
            "Keep the fictional playbook unapproved, add multi-owner recovery and closure gates, source reconciliation, risk authority, reopen criteria, version ownership, and retest the revised branches.",
            "Approve the playbook because availability returned.",
            "Remove the failed injects from the exercise.",
            "Replace recovery with one service-ping check.",
          ]}
          bestAnswer={0}
          explanation="The first option treats the exercise as evidence, corrects the exact readiness defects, and requires validation before approval."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Preparation and Playbook Errors">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Impact</p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Practice Lab" title="Build the Northbridge Preparation and Playbook Design Package">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, test, adapt, approve, or modify any real response
            plan, playbook, role chart, contact tree, service map, source list,
            supplier path, organization, system, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality check</p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Required Source Becomes Blind"
          scenario="During a fictional tabletop, the identity source becomes Blind during the key authorization period. The playbook says that no visible extension means no extension existed."
          choices={[
            {
              label: "Choice A",
              response: "Move into the Source-Degraded branch, mark authorization Unknown or Conditional, request alternate evidence, assign source recovery, preserve the affected period, and require historical reassessment.",
              outcome: "Best defensive choice. It prevents missing data from becoming false absence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the no-extension conclusion because the playbook says so.",
              outcome: "Weak. A rigid playbook cannot override source-health limitations.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Close the case until the source returns.",
              outcome: "Weak. Time-sensitive decisions may still require alternate evidence and coordination.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Service Is Reachable but Recovery Is Incomplete"
          scenario="A fictional service responds after containment. Identity validation, data reconciliation, supplier dependency, source recovery, and residual-risk ownership remain incomplete."
          choices={[
            {
              label: "Choice A",
              response: "Keep recovery Conditional, continue clean-state validation, assign unresolved owners, preserve rollback, document observation and reopen triggers, and block closure until required gates pass.",
              outcome: "Best choice. Availability is only one dimension of trustworthy recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Close immediately because the service responds.",
              outcome: "Weak. Important recovery and lifecycle evidence remains incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the incomplete checks from the playbook.",
              outcome: "Weak. Removing quality gates hides risk rather than resolving it.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Playbook before a Readiness Review Board">
          <p className="leading-8">
            Fictional Northbridge has nine critical scenarios, three untested
            playbooks, one stale supplier path, two missing alternates, a
            playbook that treats missing evidence as absence, a generic
            communication template, incomplete recovery gates, no rollback
            reference, and overdue corrective actions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend document architecture", "Explain fictional policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register."],
              ["Defend activation", "Explain routine triage, coordinated response, specialist, leadership, source-recovery, privacy, continuity, and supplier criteria."],
              ["Defend evidence", "Explain sources, fields, provenance, timing, health, alternatives, privacy, retention, and limitations."],
              ["Defend branches", "Explain Expected, Source-Degraded, Containment, Continuity, Supplier, Leadership, Recovery, Closure, and Reopen paths."],
              ["Defend exercise design", "Explain injects, expected actions, observers, scoring, defects, owners, validation, and retest."],
              ["Defend lifecycle", "Explain owner, approvers, version, reason, review, expiration, debt, rollback, archive, replacement, and residual risk."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50">
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Preparation and Playbook Design Checklist"
          items={[
            "I can distinguish fictional policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register.",
            "I can define fictional playbook purpose, scenario, users, exclusions, safety, and supported decisions.",
            "I can create fictional activation criteria for routine, incident, specialist, leadership, source-recovery, privacy, continuity, and supplier paths.",
            "I can connect fictional roles, authority, alternates, handoffs, and escalation to decision points.",
            "I can map fictional questions to evidence, provenance, timing, source health, privacy, retention, owners, and deadlines.",
            "I can design fictional branches with entry conditions, actions, break conditions, validation, rollback, and exit criteria.",
            "I can compare fictional containment and recovery options using continuity, evidence, privacy, authority, dependencies, monitoring, and residual risk.",
            "I can build fictional audience-specific communication, approvals, versions, corrections, and next-update commitments.",
            "I can design fictional tabletop injects that test difficult conditions rather than only happy paths.",
            "I can score fictional expected and observed behavior and turn defects into corrective actions and retest.",
            "I can maintain fictional owner, version, approvals, change reason, review, expiration, debt, rollback, archive, and replacement.",
            "I can create a completely fictional playbook artifact without exposing real people, services, sources, suppliers, triggers, contacts, actions, or incidents.",
          ]}
        />

        <MiniQuiz title="A7.2 Mini Quiz: Preparation and Playbook Design" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Preparation and Playbook Design Package for the Northbridge Student-Support Cooperative. Include mission, critical services, users, data categories, identity model, supplier dependencies, continuity priorities, privacy boundary, response policy, organization-wide plan, scenario playbooks, checklists, references, contact and authority list, decision record, evidence register, activation criteria, routine-triage path, incident path, specialist path, leadership path, source-recovery path, privacy path, continuity path, supplier path, roles, alternates, decision rights, authority limits, handoff acceptance, bounded questions, evidence sources, required fields, provenance, event time, collection time, processing time, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, alternate evidence, privacy, retention, limitations, severity, confidence, priority, Expected branch, Source-Degraded branch, Identity Containment branch, Continuity branch, Supplier branch, Leadership branch, Recovery branch, Closure branch, Reopen branch, entry criteria, actions, break conditions, validation, exit criteria, containment options, benefits, costs, dependencies, evidence effects, continuity effects, authority, rollback, residual risk, audience matrix, message ownership, approvals, uncertainty, versioning, distribution, correction, next update, clean-state criteria, identity validation, configuration validation, data reconciliation, source recovery, supplier validation, monitoring, observation period, owner acceptance, closure criteria, reopen triggers, tabletop purpose, participants, observers, initial state, injects, expected actions, observed actions, scoring, defects, owners, due dates, dependencies, validation, retest, playbook identifier, version, owner, approvers, change reason, affected sections, evidence, test result, approval date, review date, expiration, rollback reference, archive, replacement, playbook coverage, activation clarity, branch validation, role readiness, source readiness, exercise quality, corrective-action aging, playbook debt, residual risk, leadership summary, reflection, and a statement that every organization, role, service, source, supplier, trigger, contact, action, decision, date, and outcome is invented."
          tips={[
            "Use fictional decision points and branches instead of one rigid script.",
            "Connect every fictional choice to evidence, source health, authority, continuity, privacy, validation, rollback, and ownership.",
            "Test fictional owner unavailability, Blind sources, scope growth, conflicting evidence, supplier delay, containment tradeoffs, failed recovery, closure pressure, and reopening.",
            "Treat exercise findings as evidence requiring corrective action and retest before approval.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for Detection and Scoping?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for response documents, activation,
            roles, authority, evidence, source health, scope questions,
            branches, containment, continuity, communication, recovery,
            exercises, validation, versioning, debt, risk, and fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain the difference between a fictional plan and playbook.",
              "I can define activation criteria without treating every alert as an incident.",
              "I can connect decisions to roles, authority, evidence, source health, and deadlines.",
              "I can design branches for different evidence and mission conditions.",
              "I can build recovery and closure gates beyond service availability.",
              "I can design a tabletop with difficult injects and measurable behavior.",
              "I can maintain versions, approvals, expiration, debt, actions, and retest.",
              "I can produce a safe fictional package without adapting real playbooks or contacts.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional activation criterion, one source-health rule,
            one branch condition, one containment tradeoff, one recovery gate,
            one exercise inject, and one question for A7.3.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional policy, plan, playbook, checklist, reference, contact list, decision record, and evidence register serve different purposes.",
            "A professional fictional playbook organizes judgment through evidence, authority, alternatives, branches, validation, rollback, and lifecycle controls.",
            "Activation should distinguish routine triage, coordinated response, specialist, leadership, source-recovery, privacy, continuity, and supplier paths.",
            "Fictional source-health states must change confidence, evidence use, alternate paths, and reassessment.",
            "Branches should have entry conditions, actions, break conditions, validation, and exit criteria.",
            "Containment, communication, continuity, recovery, closure, and reopening require owners, authority, evidence, dependencies, and quality gates.",
            "Tabletop exercises should test owner unavailability, source degradation, scope changes, supplier delay, containment tradeoffs, failed recovery, and closure pressure.",
            "Exercise findings become corrective actions with owners, due dates, evidence, validation, and retest.",
            "Playbooks require current owners, versions, approvals, review dates, expiration, debt, rollback references, archive, and replacement.",
            "Every CyberShield playbook artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real response plans or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A7
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how fictional responders move from alerts, reports,
            source-health conditions, and service symptoms into an
            evidence-based activation and scope that separates confirmed,
            possible, unknown, unaffected, excluded, and out-of-scope
            categories.
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