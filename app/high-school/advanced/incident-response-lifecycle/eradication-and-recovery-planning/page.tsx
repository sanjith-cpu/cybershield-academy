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
const previousLesson = `${modulePath}/containment-strategy`;
const nextLesson = `${modulePath}/stakeholder-communication`;

const objectives = [
  "Distinguish fictional containment, eradication, recovery preparation, restoration, validation, observation, closure readiness, and reopening without treating them as one step.",
  "Build fictional eradication decisions from root-cause evidence, contributing factors, control gaps, ownership, dependencies, side effects, clean-state criteria, validation, rollback, and residual risk.",
  "Design fictional staged recovery plans covering identity, sessions, configuration, service, data, suppliers, sources, monitoring, continuity, users, communication, and owner acceptance.",
  "Evaluate fictional recovery readiness using clean-state gates, dependency gates, source-health gates, data-integrity gates, user-impact gates, rollback triggers, observation periods, and reopen criteria.",
  "Create a portfolio-ready fictional Eradication and Recovery Planning Package containing a cause register, clean-state model, recovery waves, authority map, validation matrix, rollback plan, observation record, metrics, leadership brief, residual-risk record, and reflection.",
];

const vocabulary = [
  ["Containment", "A fictional authorized action that reduces current risk while investigation, eradication, and recovery continue."],
  ["Eradication", "A fictional evidence-based process for removing or correcting the confirmed cause, unsafe condition, persistence point, control defect, stale authority, invalid configuration, harmful dependency, or other incident-enabling state."],
  ["Recovery preparation", "A fictional planning phase that defines clean-state criteria, dependencies, owners, evidence, sequencing, validation, rollback, communication, monitoring, and acceptance before restoration begins."],
  ["Restoration", "A fictional authorized process that returns identities, services, data, suppliers, sources, users, and workflows toward an approved operating state."],
  ["Validation", "A fictional evidence-based check that eradication or restoration produced the intended state without unacceptable side effects."],
  ["Observation period", "A fictional defined period after restoration during which responders monitor break conditions, source health, user impact, dependencies, and residual risk."],
  ["Closure readiness", "A fictional state in which required evidence, owner acceptance, recovery obligations, residual risk, corrective actions, communication, and reopen triggers are complete enough for formal closure review."],
  ["Reopen trigger", "A fictional new evidence, source recovery, recurring condition, validation failure, scope expansion, user impact, supplier issue, or control defect that returns a closed or closing case to active response."],
  ["Root cause", "A fictional underlying condition whose correction materially reduces the chance that the same incident condition will recur."],
  ["Contributing factor", "A fictional condition that increased likelihood, duration, scope, impact, uncertainty, or recovery difficulty but may not be the sole cause."],
  ["Trigger", "A fictional event or condition that started or revealed the incident without necessarily being the underlying cause."],
  ["Control gap", "A fictional missing, weak, stale, bypassed, misconfigured, untested, unowned, or poorly monitored safeguard relevant to the incident."],
  ["Clean state", "A fictional evidence-supported condition in which identity, session, configuration, service, data, supplier, source, dependency, monitoring, and ownership requirements are satisfied for the stated recovery decision."],
  ["Known-good baseline", "A fictional approved and evidence-supported reference state used to compare current identity, service, configuration, data, supplier, source, or workflow conditions."],
  ["Recovery wave", "A fictional group of identities, functions, services, users, suppliers, data, or dependencies restored together under shared gates and monitoring."],
  ["Canary recovery", "A fictional limited first restoration used to test assumptions, validation, monitoring, user impact, and rollback before broader recovery."],
  ["Rollback", "A fictional approved path to reverse or replace a recovery step when clean-state, validation, continuity, source health, or monitoring fails."],
  ["Recovery dependency", "A fictional identity, configuration, data, supplier, source, network relationship, user workflow, monitoring capability, owner, or approval needed before restoration."],
  ["Recovery owner", "The fictional role accountable for planning, sequencing, executing, validating, documenting, and accepting a specific recovery area."],
  ["Business acceptance", "A fictional owner decision that a restored service or workflow supports required mission outcomes within documented limitations."],
  ["Technical acceptance", "A fictional owner decision that identity, service, configuration, data, dependencies, sources, and monitoring satisfy technical recovery gates."],
  ["Privacy acceptance", "A fictional owner decision that data access, purpose, sharing, retention, exposure, and communication obligations are satisfied."],
  ["Recovery debt", "Fictional unresolved temporary controls, missing automation, incomplete validation, stale dependencies, source limits, manual workarounds, untested rollback, or deferred redesign remaining after restoration."],
  ["Residual risk", "The fictional risk remaining after eradication and recovery, including unresolved cause, scope, evidence, monitoring, supplier, privacy, continuity, or recurrence concerns."],
  ["Recovery freeze", "A fictional pause in restoration caused by failed gates, worsening impact, conflicting evidence, Blind sources, rollback need, or missing authority."],
];

const lifecycleStages = [
  {
    stage: "Containment",
    purpose: "Reduce fictional current risk and preserve decision options.",
    keyQuestion: "What must be limited now to reduce active or near-term harm?",
    evidence: "Current scope, active state, source health, mission effect, authority, expected state, validation, rollback, and residual risk.",
    exitGate: "Risk is reduced enough for structured eradication and recovery work to continue.",
    weakPattern: "Calling containment a permanent fix.",
  },
  {
    stage: "Eradication analysis",
    purpose: "Determine which fictional cause, contributing factor, trigger, and control gap should be corrected.",
    keyQuestion: "What evidence-supported condition must change so the same incident state does not continue or recur?",
    evidence: "Cause hypotheses, supporting and contradicting evidence, source health, owner review, dependencies, side effects, and alternatives.",
    exitGate: "The correction target, authority, validation, rollback, and residual risk are approved.",
    weakPattern: "Removing the most visible symptom without testing cause.",
  },
  {
    stage: "Eradication action",
    purpose: "Correct or remove the fictional confirmed unsafe condition.",
    keyQuestion: "Did the approved change remove the intended cause without creating unacceptable new risk?",
    evidence: "Pre-action state, action record, source-side state, configuration, identity, data, supplier, service, dependency, and independent validation.",
    exitGate: "The intended cause or unsafe state is no longer present according to qualified evidence.",
    weakPattern: "Treating action completion as proof of eradication.",
  },
  {
    stage: "Recovery preparation",
    purpose: "Define fictional clean-state criteria, recovery waves, dependencies, owners, communication, monitoring, and rollback.",
    keyQuestion: "What must be true before each restoration step begins?",
    evidence: "Known-good state, owner acceptance, continuity, source health, data integrity, supplier status, capacity, monitoring, and fallback.",
    exitGate: "Wave-specific entry criteria and authority are complete.",
    weakPattern: "Restoring first and deciding validation later.",
  },
  {
    stage: "Staged restoration",
    purpose: "Return fictional functions through limited, evidence-supported waves.",
    keyQuestion: "Can the smallest safe wave operate correctly before broader restoration?",
    evidence: "Canary results, source health, service behavior, user impact, dependencies, data integrity, monitoring, owner review, and rollback readiness.",
    exitGate: "The current wave passes all required gates and the next wave is authorized.",
    weakPattern: "Restoring every user and dependency at once.",
  },
  {
    stage: "Observation",
    purpose: "Monitor fictional recurrence, side effects, user experience, source recovery, supplier behavior, data integrity, and residual risk.",
    keyQuestion: "Does the restored state remain trustworthy over the defined period?",
    evidence: "Break conditions, alerts, source health, service metrics, user reports, owner review, dependency state, and corrective actions.",
    exitGate: "Observation criteria pass or the response rolls back, freezes, or reopens.",
    weakPattern: "Closing immediately after service availability returns.",
  },
  {
    stage: "Closure readiness",
    purpose: "Confirm fictional technical, business, privacy, evidence, communication, corrective-action, and risk obligations.",
    keyQuestion: "Is the response complete enough for formal closure while preserving reopen triggers?",
    evidence: "Acceptance records, residual risk, debt, observation, source reconciliation, lessons, owners, dates, and reopen criteria.",
    exitGate: "Authorized closure decision or continued Conditional state.",
    weakPattern: "Closing because alerts became quiet.",
  },
];

const causeModel = [
  {
    category: "Trigger",
    question: "What fictional event or condition started or revealed the incident?",
    example: "A temporary recovery role remained Active after its approved window.",
    evidenceNeeded: "Event time, approval state, role state, session relationship, source health, and owner review.",
    nonProof: "The trigger does not automatically identify the deeper cause.",
  },
  {
    category: "Immediate cause",
    question: "Which fictional condition directly enabled the observed incident state?",
    example: "An active privileged session continued after approval expiration.",
    evidenceNeeded: "Session, identity, role, destination, service, time, and source-side state.",
    nonProof: "The immediate cause may be one symptom of a larger lifecycle defect.",
  },
  {
    category: "Root cause",
    question: "Which fictional underlying condition allowed the unsafe state to exist or recur?",
    example: "Role expiration and active-session review were not linked to one owned lifecycle decision.",
    evidenceNeeded: "Process design, ownership, approval, synchronization, session policy, monitoring, change history, exercises, and repeated conditions.",
    nonProof: "A root-cause statement must be tested rather than selected because it sounds plausible.",
  },
  {
    category: "Contributing factor",
    question: "Which fictional condition increased duration, uncertainty, scope, impact, or recovery difficulty?",
    example: "The group source was Degraded during effective-access validation.",
    evidenceNeeded: "Source-health history, timing, alternate evidence, owner response, queue or synchronization behavior, and decision effect.",
    nonProof: "A contributing factor may not have caused the incident by itself.",
  },
  {
    category: "Control gap",
    question: "Which fictional safeguard was missing, weak, stale, unowned, untested, or unable to support the decision?",
    example: "No validated alert connected role expiration, group state, active sessions, owner acknowledgement, and break conditions.",
    evidenceNeeded: "Detection logic, ownership, playbook, testing, alert quality, source health, escalation, and corrective-action history.",
    nonProof: "A control gap does not prove intentional bypass.",
  },
  {
    category: "Recovery complication",
    question: "Which fictional dependency makes trusted restoration harder?",
    example: "The data-access source is Blind and the supplier integration has delayed responses.",
    evidenceNeeded: "Source recovery, supplier commitment, alternate evidence, data integrity, service dependency, backlog, and owner acceptance.",
    nonProof: "A complication may delay recovery without being part of the incident cause.",
  },
];

const cleanStateDomains = [
  {
    domain: "Identity and access",
    entryCriteria: "Fictional identity owner confirms current role, group, approval, sponsor, lifecycle state, effective access, emergency access, and session requirements.",
    evidence: "Identity, role, group, approval, extension, sponsor, session, source-health, owner, and exception records.",
    validation: "Source-side state and independent review agree that only approved access remains.",
    rollbackTrigger: "Unexpected role, group, session, owner conflict, missing approval, or source-health degradation.",
    owner: "Identity owner and independent identity reviewer.",
  },
  {
    domain: "Sessions",
    entryCriteria: "Fictional prior sessions are closed, reconciled, or explicitly accepted under current authorization.",
    evidence: "Session IDs, identities, devices, services, destinations, start/end times, source health, and containment records.",
    validation: "No unexpected active session remains and approved new sessions follow current authorization.",
    rollbackTrigger: "Recurring stale session, unexplained continuation, conflicting source evidence, or unexpected destination.",
    owner: "Identity and service owners.",
  },
  {
    domain: "Configuration",
    entryCriteria: "Fictional service and identity configuration match an approved known-good baseline or reviewed replacement state.",
    evidence: "Configuration baseline, change history, owner approval, dependencies, exceptions, validation record, and source health.",
    validation: "Independent comparison shows expected values and no unexplained drift in the scoped area.",
    rollbackTrigger: "Validation mismatch, dependency failure, user-impact increase, or unexpected configuration change.",
    owner: "Service or technical owner with independent reviewer.",
  },
  {
    domain: "Service behavior",
    entryCriteria: "Fictional critical functions, administrative functions, integrations, user paths, and error conditions are understood and testable.",
    evidence: "Service health, functional checks, administrative state, user workflows, dependencies, monitoring, continuity, and owner acceptance.",
    validation: "Canary users complete intended tasks and unacceptable errors or side effects do not appear.",
    rollbackTrigger: "Critical function failure, unexpected administrative access, rising errors, or user-impact threshold breach.",
    owner: "Service and continuity owners.",
  },
  {
    domain: "Data integrity and privacy",
    entryCriteria: "Fictional data categories, expected state, ownership, access, integrity, pending jobs, transfers, retention, and Blind periods are documented.",
    evidence: "Data catalog, application records, access evidence, integrity checks, queue state, privacy review, alternate evidence, and source recovery.",
    validation: "Data state supports the required mission and privacy conclusions within documented limitations.",
    rollbackTrigger: "Integrity mismatch, unexplained access, exposure concern, pending transfer, or source evidence conflict.",
    owner: "Data owner and privacy reviewer.",
  },
  {
    domain: "Supplier and integration",
    entryCriteria: "Fictional supplier status, service commitment, local dependency, data exchange, queue, fallback, owner, and recovery evidence are current.",
    evidence: "Supplier notice, local integration state, data-flow record, backlog, contract expectation, owner communication, and validation.",
    validation: "The integration operates within accepted limits and local service behavior remains stable.",
    rollbackTrigger: "Supplier recurrence, queue growth, data mismatch, missed commitment, privacy concern, or service degradation.",
    owner: "Supplier relationship and service owners.",
  },
  {
    domain: "Evidence sources",
    entryCriteria: "Fictional decision-critical sources are Healthy or their limitations are explicitly accepted for the recovery wave.",
    evidence: "Freshness, completeness, schema, parser, queue, timing, coverage, conflict, Blind period, recovery, and alternate evidence.",
    validation: "Required sources support the wave's identity, service, data, user, supplier, and monitoring decisions.",
    rollbackTrigger: "Source becomes Blind, Degraded, Conflicting, or unable to support a required gate.",
    owner: "Source owners and evidence coordinator.",
  },
  {
    domain: "Dependencies",
    entryCriteria: "Fictional identity, service, infrastructure, data, supplier, communication, continuity, monitoring, and recovery dependencies are available or have approved fallbacks.",
    evidence: "Architecture, service catalog, owner statements, source health, supplier state, capacity, fallback, and test record.",
    validation: "Required dependencies remain stable throughout the wave.",
    rollbackTrigger: "Dependency loss, capacity failure, conflicting state, or fallback failure.",
    owner: "Technical, service, continuity, and supplier owners.",
  },
  {
    domain: "Monitoring and detection",
    entryCriteria: "Fictional monitoring can observe the expected state, break conditions, recurrence signals, user effect, source health, and recovery milestones.",
    evidence: "Detection logic, dashboards, source health, alert routing, owners, thresholds, validation cases, and escalation.",
    validation: "Test signals produce expected visibility and ownership without unsupported certainty.",
    rollbackTrigger: "Blind monitoring, missed break condition, duplicate noise, unowned alert, or failed source test.",
    owner: "Detection and incident-response owners.",
  },
  {
    domain: "Business and user acceptance",
    entryCriteria: "Fictional critical users, accessibility needs, alternate workflows, communication, capacity, deadlines, and expected limitations are understood.",
    evidence: "User tests, continuity metrics, queue, support reports, communication, service-owner review, and leadership decisions.",
    validation: "Critical users complete essential tasks within accepted quality and timing limits.",
    rollbackTrigger: "Critical user failure, unacceptable backlog, accessibility issue, conflicting guidance, or mission threshold breach.",
    owner: "Service, continuity, and business owners.",
  },
];

const eradicationCriteria = [
  {
    criterion: "Cause confidence",
    question: "How strongly does fictional evidence support the proposed root cause or unsafe condition?",
    evidence: "Cause hypotheses, supporting and contradicting records, source health, chronology, repeated patterns, owner review, and alternatives.",
    weakPattern: "Selecting a cause because it matches the alert title.",
  },
  {
    criterion: "Correction precision",
    question: "Can the fictional correction target the cause without unnecessarily changing unrelated identities, services, data, suppliers, or workflows?",
    evidence: "Scope version, relationship map, known-good state, dependencies, expected unaffected population, and side-effect review.",
    weakPattern: "Replacing or resetting everything because the exact cause is uncertain.",
  },
  {
    criterion: "Authority",
    question: "Who may approve, execute, validate, accept side effects, and accept remaining risk?",
    evidence: "Decision-rights matrix, owner charters, emergency exception, leadership threshold, privacy authority, and service authority.",
    weakPattern: "The technical operator also approves and validates every high-impact change.",
  },
  {
    criterion: "Evidence preservation",
    question: "Will the fictional correction alter or remove evidence still needed for cause, scope, accountability, privacy, or lessons?",
    evidence: "Evidence register, preservation obligations, pre-action state, source behavior, retention, privacy, and owner review.",
    weakPattern: "Removing the suspected cause before preserving decision-critical evidence.",
  },
  {
    criterion: "Dependency effect",
    question: "Which fictional identity, service, data, supplier, source, user, continuity, monitoring, or recovery dependency could the correction change?",
    evidence: "Architecture, service catalog, supplier map, data flow, source map, owner review, and fallback.",
    weakPattern: "Correcting one component without understanding its mission and recovery relationships.",
  },
  {
    criterion: "Known-good replacement",
    question: "What fictional approved state will replace the unsafe state?",
    evidence: "Baseline, configuration, identity model, owner approval, version, validation, and expiration.",
    weakPattern: "Removing a condition without defining the intended replacement state.",
  },
  {
    criterion: "Validation",
    question: "What fictional source-side, service-side, data-side, user-side, and independent evidence will prove correction?",
    evidence: "Expected state, source health, functional checks, owner acceptance, monitoring, and negative side-effect checks.",
    weakPattern: "Treating a completed change request as eradication success.",
  },
  {
    criterion: "Rollback",
    question: "How will fictional response reverse or replace the correction when validation, continuity, or scope changes?",
    evidence: "Prior state, rollback authority, dependencies, data integrity, service state, monitoring, and restoration gates.",
    weakPattern: "Calling a correction reversible without a tested path.",
  },
  {
    criterion: "Recurrence prevention",
    question: "Which fictional lifecycle, monitoring, ownership, approval, source, playbook, or architecture changes reduce recurrence?",
    evidence: "Control-gap register, corrective actions, owner, due date, validation, exercise, alert quality, and governance review.",
    weakPattern: "Correcting one case while leaving the systemic condition unchanged.",
  },
  {
    criterion: "Residual risk",
    question: "Which fictional cause, factor, scope, evidence, supplier, privacy, source, monitoring, or redesign gaps remain?",
    evidence: "Residual-risk statement, owner, authority, duration, compensating controls, review date, and reopen trigger.",
    weakPattern: "Describing eradication as complete resolution of every risk.",
  },
];

const recoveryWaves = [
  {
    wave: "Wave 0 — Evidence and readiness",
    scope: "Fictional evidence sources, owners, known-good state, rollback, communication, monitoring, and continuity preparation.",
    entry: "Containment is stable enough to plan; urgent evidence-preservation obligations are complete.",
    actions: "Reconcile sources, approve clean-state criteria, verify authority, define canary group, confirm fallbacks, and test visibility conceptually.",
    validation: "Required owners acknowledge gates and decision-critical sources are Healthy or explicitly qualified.",
    rollback: "Recovery remains frozen; containment continues.",
    exit: "Wave 1 is authorized with documented residual risk.",
  },
  {
    wave: "Wave 1 — Identity and session canary",
    scope: "One fictional approved recovery identity, current role, limited session, and required owner coverage.",
    entry: "Identity, role, group, approval, sponsor, session, source-health, and rollback gates pass.",
    actions: "Restore the minimum approved identity capability and open one monitored canary session.",
    validation: "Effective access, session state, destination boundaries, monitoring, and owner acceptance match the known-good design.",
    rollback: "Close the canary session and return to scoped containment.",
    exit: "Identity and session gates remain stable through the canary observation period.",
  },
  {
    wave: "Wave 2 — Administrative function",
    scope: "One fictional limited administrative feature required for recovery or urgent support.",
    entry: "Wave 1 passes and the service configuration, identity, evidence, continuity, and monitoring gates are ready.",
    actions: "Restore the narrow administrative function for the approved identity and purpose.",
    validation: "Function works, unrelated functions remain limited, evidence stays visible, and no unacceptable user effect appears.",
    rollback: "Disable the restored function and return to the prior known-good state.",
    exit: "Technical and service owners accept the function state.",
  },
  {
    wave: "Wave 3 — Critical user workflow",
    scope: "A small fictional canary group of critical student-support users.",
    entry: "Identity, function, data, supplier, source, continuity, privacy, capacity, and communication gates pass.",
    actions: "Restore essential user workflow to the canary population with clear guidance and support.",
    validation: "Users complete essential tasks, data remains consistent, suppliers and dependencies remain stable, and monitoring sees expected behavior.",
    rollback: "Return canary users to the alternate workflow.",
    exit: "Business, privacy, technical, and continuity owners accept the canary result.",
  },
  {
    wave: "Wave 4 — Expanded users and integrations",
    scope: "Broader fictional user population and approved supplier integration.",
    entry: "Canary users pass, backlog is controlled, supplier evidence is current, and data reconciliation is complete enough.",
    actions: "Expand access in bounded groups and restore the integration under monitored limits.",
    validation: "Capacity, queue, user experience, data flow, supplier behavior, privacy, source health, and alerts remain within thresholds.",
    rollback: "Pause the integration and return affected users to the prior recovery wave or alternate workflow.",
    exit: "Service and supplier owners accept the expanded state.",
  },
  {
    wave: "Wave 5 — Full approved operation",
    scope: "All fictional approved users, functions, integrations, sources, and support workflows.",
    entry: "Earlier waves pass; residual risk is accepted; recovery debt, observation, communication, and reopen triggers are documented.",
    actions: "Restore remaining approved functions and retire temporary workarounds in a controlled sequence.",
    validation: "Technical, business, privacy, evidence, supplier, monitoring, and continuity acceptance are complete.",
    rollback: "Freeze or return to the last accepted wave when break conditions occur.",
    exit: "Observation period begins; formal closure is not yet automatic.",
  },
];

const authorityMatrix = [
  {
    decision: "Approve fictional eradication target",
    recommends: "Incident lead, technical owner, identity owner, service owner, or privacy owner",
    approves: "Owner with authority over the cause or unsafe state",
    executes: "Authorized operator",
    validates: "Independent technical or domain reviewer",
    acceptsImpact: "Service, continuity, data, supplier, or leadership owner",
    escalates: "Cause confidence, blast radius, policy exception, or mission effect exceeds delegated authority.",
  },
  {
    decision: "Approve known-good baseline",
    recommends: "Technical, identity, data, service, or supplier owner",
    approves: "Configuration or service authority",
    executes: "Not an execution action; baseline is recorded and versioned",
    validates: "Independent reviewer and relevant business owner",
    acceptsImpact: "Service or business owner",
    escalates: "No trusted reference exists or the replacement requires major redesign.",
  },
  {
    decision: "Start a fictional recovery wave",
    recommends: "Recovery owner with incident lead",
    approves: "Wave-specific technical, service, continuity, privacy, or supplier authority",
    executes: "Authorized recovery operator",
    validates: "Independent technical reviewer plus affected owners",
    acceptsImpact: "Business or service owner",
    escalates: "Critical users, protected data, supplier dependency, or broad mission impact is involved.",
  },
  {
    decision: "Freeze fictional recovery",
    recommends: "Any owner observing a required gate failure",
    approves: "Incident or recovery lead within plan",
    executes: "Authorized recovery operator",
    validates: "Independent reviewer confirms the freeze and preserved state",
    acceptsImpact: "Service and continuity owners",
    escalates: "Freeze creates major or prolonged mission interruption.",
  },
  {
    decision: "Roll back a fictional wave",
    recommends: "Technical, service, privacy, supplier, continuity, or monitoring owner",
    approves: "Recovery owner within rollback authority",
    executes: "Authorized operator",
    validates: "Independent reviewer and affected owners",
    acceptsImpact: "Service or business owner",
    escalates: "Rollback threatens data integrity, supplier obligations, or critical mission.",
  },
  {
    decision: "Accept a fictional recovered state",
    recommends: "Technical, service, privacy, continuity, supplier, and evidence owners",
    approves: "Named recovery acceptance authority",
    executes: "Not an execution action; acceptance is recorded",
    validates: "Independent governance review",
    acceptsImpact: "Business or leadership owner",
    escalates: "Required acceptance domains disagree or evidence remains materially Blind.",
  },
  {
    decision: "Accept fictional residual risk",
    recommends: "Incident, recovery, technical, service, privacy, supplier, or monitoring owner",
    approves: "Documented risk authority",
    executes: "Not an execution action; conditions and owners are recorded",
    validates: "Independent governance review",
    acceptsImpact: "Named risk owner",
    escalates: "Risk exceeds delegated threshold or lacks a time-bounded mitigation plan.",
  },
  {
    decision: "Declare fictional closure readiness",
    recommends: "Incident lead",
    approves: "Closure authority defined by the response plan",
    executes: "Case manager records the decision",
    validates: "Technical, business, privacy, evidence, communication, and recovery reviewers",
    acceptsImpact: "Leadership or designated incident authority",
    escalates: "Observation, source reconciliation, corrective actions, or reopen criteria remain incomplete.",
  },
];

const validationCases = [
  ["REC-T01", "Containment mistaken for eradication", "A fictional privileged session is closed, but the stale role lifecycle defect remains.", "Keep eradication open and correct the evidence-supported lifecycle cause.", "Cause accuracy"],
  ["REC-T02", "Action completed", "A fictional configuration change request is marked complete, but source-side state is not validated.", "Keep eradication Conditional until expected state is independently supported.", "Outcome validation"],
  ["REC-T03", "Blind source", "A decision-critical fictional source remains Blind before a recovery wave.", "Freeze or narrow the wave unless the limitation is explicitly accepted with alternate evidence.", "Source-health honesty"],
  ["REC-T04", "No known-good state", "The fictional team cannot identify an approved replacement configuration.", "Do not restore broadly; define and approve the intended state first.", "Baseline quality"],
  ["REC-T05", "Canary failure", "One fictional canary user experiences critical workflow failure.", "Freeze expansion, investigate the side effect, and roll back or revise the wave.", "Staged recovery"],
  ["REC-T06", "Supplier queue", "A fictional integration restores, but queued work duplicates records.", "Freeze the integration, preserve queue evidence, reconcile data, and use rollback.", "Data integrity"],
  ["REC-T07", "Role and group conflict", "The fictional role source is clean, but the group source shows unexpected effective access.", "Keep identity recovery Conditional and reconcile the conflict.", "Access integrity"],
  ["REC-T08", "Service available", "The fictional service responds, but monitoring, data, source, and business acceptance are incomplete.", "Do not declare recovered or close the case.", "Multi-domain acceptance"],
  ["REC-T09", "Observation recurrence", "A fictional stale session reappears during observation.", "Trigger rollback or renewed containment and reopen the cause analysis.", "Recurrence response"],
  ["REC-T10", "Temporary workaround aging", "A fictional manual continuity process remains after full restoration.", "Record recovery debt, assign owner, validate retirement, and track risk.", "Lifecycle governance"],
  ["REC-T11", "Closure pressure", "Leadership requests closure before source reconciliation and residual-risk acceptance.", "Present the missing gates and maintain Conditional closure readiness.", "Evidence-based closure"],
  ["REC-T12", "Public portfolio", "A student plans to sanitize a real recovery architecture and clean-state checklist.", "Fail portfolio validation and invent every organization, system, owner, dependency, action, and outcome.", "Confidentiality and safety"],
];

const recoveryMetrics = [
  {
    metric: "Time to approved eradication target",
    question: "How long does fictional response take to move from competing cause hypotheses to an approved correction target?",
    evidence: "Cause register, source health, owner review, alternatives, decision time, authority, and evidence quality.",
    limitation: "Faster selection can increase the chance of correcting the wrong condition.",
  },
  {
    metric: "Eradication validation quality",
    question: "What percentage of fictional corrections have source-side, independent, service, data, user, supplier, and monitoring validation?",
    evidence: "Expected state, validation records, source health, reviewer, side effects, rollback, and residual risk.",
    limitation: "High validation coverage does not guarantee the root cause was correct.",
  },
  {
    metric: "Recovery-wave pass rate",
    question: "How often do fictional canary and expansion waves meet every required gate without rollback or freeze?",
    evidence: "Wave entry, validation, failures, user impact, source health, supplier state, data integrity, and owner acceptance.",
    limitation: "A low pass rate may show strong gates catching real problems.",
  },
  {
    metric: "Rollback readiness",
    question: "What percentage of fictional recovery waves have approved prior state, criteria, authority, dependencies, execution owner, and validation?",
    evidence: "Rollback plans, conceptual tests, owner acknowledgement, monitoring, and recovery-wave records.",
    limitation: "A documented rollback can still fail when conditions change.",
  },
  {
    metric: "Time to trusted service",
    question: "How long does fictional recovery take from containment stability to multi-domain accepted operation?",
    evidence: "Wave times, technical acceptance, business acceptance, privacy acceptance, source health, supplier state, and observation.",
    limitation: "Speed alone does not measure recovery quality.",
  },
  {
    metric: "Recovery side-effect rate",
    question: "How often do fictional restoration waves create unexpected identity, service, data, supplier, user, evidence, or monitoring effects?",
    evidence: "Validation, user reports, data reconciliation, source health, rollback, scope changes, and corrective actions.",
    limitation: "Expected tradeoffs should not be counted as defects.",
  },
  {
    metric: "Observation recurrence rate",
    question: "How often do fictional break conditions or related unsafe states recur during observation?",
    evidence: "Alerts, source health, sessions, user reports, service behavior, supplier state, and reopen records.",
    limitation: "A recurrence may be unrelated and still deserve review.",
  },
  {
    metric: "Recovery-debt aging",
    question: "How long do fictional temporary controls, manual workarounds, source gaps, monitoring gaps, supplier limits, or deferred redesign remain open?",
    evidence: "Debt item, owner, mission effect, risk, due date, dependency, validation, escalation, and closure.",
    limitation: "Some long-lived debt may be formally accepted.",
  },
];

const evidenceMatrix = [
  ["REC-E01", "Fictional containment record", "One privileged session was closed under identity-owner authority.", "Immediate session risk was reduced.", "Does not prove the stale role lifecycle cause was removed.", "Keep cause analysis and identity recovery gates open."],
  ["REC-E02", "Fictional role and approval evidence", "Temporary role remained Active after approval_end.", "The stale-authority condition is confirmed.", "Does not prove why lifecycle enforcement failed.", "Test ownership, synchronization, session, and monitoring hypotheses."],
  ["REC-E03", "Fictional group-source health", "Group evidence is Degraded during the relevant period.", "Effective-access validation is limited.", "Does not prove group state was safe or unsafe at every moment.", "Keep identity recovery Conditional and assign source reconciliation."],
  ["REC-E04", "Fictional service health", "The service remains available with no broad error increase.", "Broad active disruption is not confirmed.", "Does not prove clean configuration, data integrity, authorization, or user acceptance.", "Use service availability as one gate, not the recovery conclusion."],
  ["REC-E05", "Fictional data-source state", "The data-access source is Blind for the key period.", "Data access and historical integrity remain Unknown.", "Does not prove access or no access.", "Require alternate evidence, privacy review, source recovery, and historical reassessment."],
  ["REC-E06", "Fictional supplier notice", "Supplier integration reports delay and possible queue backlog.", "Supplier recovery and data reconciliation are required dependencies.", "Does not prove the supplier caused the incident.", "Use a bounded supplier wave with queue and integrity validation."],
  ["REC-E07", "Fictional approved change", "Recovery change matches identity and purpose but not time or destination.", "A partial alternative explanation exists.", "Does not fully explain the post-expiration session.", "Preserve the alternative but do not close cause analysis."],
  ["REC-E08", "Fictional monitoring review", "No validated signal currently connects role expiration, group state, active sessions, and owner acknowledgement.", "A detection and lifecycle control gap may exist.", "Does not prove a single monitoring defect caused the incident.", "Create a corrective action and validate it through fictional tests."],
];

const commonMistakes = [
  {
    mistake: "Containment is called eradication",
    observation: "A fictional team closes one session and says the root cause is removed.",
    impact: "The stale role, lifecycle ownership, group state, monitoring, or approval defect may remain.",
    correction: "Separate immediate risk reduction from cause correction and recurrence prevention.",
  },
  {
    mistake: "The first plausible cause becomes the root cause",
    observation: "A fictional responder blames one person or tool without testing alternatives.",
    impact: "Corrective work may target the wrong condition and encourage unfair conclusions.",
    correction: "Use supporting, contradicting, source-health, owner, repeated-pattern, and alternative evidence.",
  },
  {
    mistake: "Action completion becomes eradication success",
    observation: "A fictional change request closes without source-side or independent validation.",
    impact: "The unsafe state may remain or side effects may be missed.",
    correction: "Define expected state, qualified evidence, independent review, side-effect checks, and rollback.",
  },
  {
    mistake: "Service availability becomes recovery",
    observation: "A fictional service responds, so the case is marked recovered.",
    impact: "Identity, configuration, data, supplier, source, monitoring, user, and privacy gates may remain incomplete.",
    correction: "Require multi-domain clean-state and owner acceptance.",
  },
  {
    mistake: "Everything restores at once",
    observation: "A fictional team restores all users, functions, identities, and integrations in one step.",
    impact: "Failures have a large blast radius and are harder to isolate or roll back.",
    correction: "Use canary and bounded recovery waves with entry, validation, rollback, and exit gates.",
  },
  {
    mistake: "Blind evidence is ignored",
    observation: "A fictional recovery wave proceeds even though a required source is Blind.",
    impact: "The team cannot prove expected state or detect recurrence.",
    correction: "Freeze, narrow, or formally accept the limitation with alternate evidence and risk authority.",
  },
  {
    mistake: "Rollback is written after failure",
    observation: "A fictional recovery wave fails before anyone defines the prior state or restoration path.",
    impact: "The team may be unable to return safely to the last accepted state.",
    correction: "Design rollback before authorization and preserve its dependencies.",
  },
  {
    mistake: "Observation is skipped",
    observation: "A fictional case moves from service restoration directly to closure.",
    impact: "Recurrence, delayed source records, supplier queues, user problems, and data issues may appear later.",
    correction: "Use a defined observation period with break conditions and reopen triggers.",
  },
  {
    mistake: "Recovery debt disappears",
    observation: "Fictional temporary controls and manual workarounds are left undocumented after restoration.",
    impact: "Residual risk becomes invisible and the temporary state may become permanent.",
    correction: "Create a recovery-debt register with owner, due date, risk, validation, and escalation.",
  },
  {
    mistake: "Real recovery details enter the portfolio",
    observation: "A student sanitizes a real clean-state checklist, architecture, supplier dependency, or rollback plan.",
    impact: "Sensitive systems, authorities, dependencies, response capabilities, and incidents may remain identifiable.",
    correction: "Invent every organization, identity, service, source, supplier, baseline, action, owner, and outcome.",
  },
];

const labSteps = [
  ["1", "Define the fictional recovery mission", "Document critical services, users, identities, data, suppliers, dependencies, sources, continuity, privacy, evidence, containment, and safety boundaries.", "Eradication and recovery mission charter.", "Every organization, system, role, source, supplier, action, and outcome is invented."],
  ["2", "Build the cause register", "Separate fictional trigger, immediate cause, root cause, contributing factor, control gap, recovery complication, supporting evidence, contradicting evidence, and alternatives.", "Cause and control-gap register.", "Cause statements are testable, evidence-based, and non-blaming."],
  ["3", "Select the correction target", "Compare fictional cause confidence, precision, authority, preservation, dependencies, known-good replacement, validation, rollback, recurrence prevention, and residual risk.", "Eradication decision record.", "The selected target changes the supported cause rather than only the visible symptom."],
  ["4", "Define clean-state criteria", "Create fictional identity, session, configuration, service, data, supplier, source, dependency, monitoring, and business gates.", "Clean-state matrix.", "Every gate names evidence, owner, validation, rollback trigger, and limitation."],
  ["5", "Build recovery waves", "Create fictional readiness, identity canary, function, user canary, expanded integration, and full-operation waves.", "Recovery-wave plan.", "Each wave has entry, action, validation, rollback, exit, communication, and residual risk."],
  ["6", "Assign authority", "Document who recommends, approves, executes, validates, accepts mission effect, accepts privacy or data state, and accepts residual risk.", "Recovery authority matrix.", "High-impact decisions use separation of duties."],
  ["7", "Prepare validation and rollback", "Record fictional pre-action state, expected state, source-health requirements, functional checks, side effects, prior accepted wave, rollback, and monitoring.", "Validation and rollback package.", "Action completion cannot equal success without qualified evidence."],
  ["8", "Run recovery validation cases", "Test fictional cause, Blind source, baseline, canary failure, supplier queue, access conflict, service availability, observation recurrence, debt, closure pressure, and portfolio scenarios.", "Recovery validation matrix.", "Cases protect against premature restoration and closure."],
  ["9", "Observe and decide closure readiness", "Monitor fictional recurrence, source recovery, user effect, supplier behavior, data integrity, corrective actions, residual risk, debt, and reopen triggers.", "Observation and closure-readiness record.", "Closure remains Conditional until required acceptance and risk gates are complete."],
  ["10", "Prepare the portfolio package", "Combine mission, cause, clean state, waves, authority, validation, rollback, observation, metrics, debt, leadership brief, risk, and reflection.", "Public-safe Eradication and Recovery Planning Package.", "No real architecture, identities, systems, suppliers, recovery procedures, or incidents appear."],
];

const quizQuestions = [
  {
    question: "Which statement best distinguishes fictional containment from eradication?",
    choices: [
      "They are the same.",
      "Containment reduces current risk; eradication removes or corrects the evidence-supported cause or unsafe state.",
      "Containment happens after closure.",
      "Eradication only means restoring service availability.",
    ],
    answer: 1,
    explanation: "Containment stabilizes. Eradication targets the cause or unsafe condition.",
  },
  {
    question: "A fictional service responds again, but data, source, identity, and business gates are incomplete. What is strongest?",
    choices: [
      "Declare full recovery.",
      "Keep recovery Conditional and continue multi-domain validation.",
      "Close the incident.",
      "Ignore the missing gates.",
    ],
    answer: 1,
    explanation: "Service availability is only one recovery dimension.",
  },
  {
    question: "Why use a fictional canary recovery wave?",
    choices: [
      "To restore everyone faster.",
      "To test assumptions, monitoring, user effect, validation, and rollback on a limited scope before expansion.",
      "To avoid ownership.",
      "To remove the need for clean-state criteria.",
    ],
    answer: 1,
    explanation: "Canary recovery limits the blast radius of failed assumptions.",
  },
  {
    question: "A required fictional source is Blind before a wave. What is strongest?",
    choices: [
      "Proceed and assume success.",
      "Freeze or narrow the wave unless the limitation is explicitly accepted with alternate evidence and risk ownership.",
      "Delete the source gate.",
      "Call the source Healthy.",
    ],
    answer: 1,
    explanation: "Blind evidence cannot validate the expected state.",
  },
  {
    question: "Which statement makes a fictional root-cause conclusion strongest?",
    choices: [
      "It sounds likely.",
      "It is tested against supporting, contradicting, source-health, owner, repeated-pattern, and alternative evidence.",
      "It names one person.",
      "It matches the alert title.",
    ],
    answer: 1,
    explanation: "Root-cause analysis must test evidence and alternatives rather than assign blame.",
  },
  {
    question: "What should happen when a fictional canary wave fails a critical-user gate?",
    choices: [
      "Expand anyway.",
      "Freeze expansion, investigate, and roll back or revise according to the approved plan.",
      "Delete the gate.",
      "Close the case.",
    ],
    answer: 1,
    explanation: "A failed required gate blocks broader recovery.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real recovery plan.",
      "Use a real clean-state checklist with fake service names.",
      "Invent every organization, identity, service, source, supplier, baseline, action, owner, date, and outcome.",
      "Use real rollback gates without contacts.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real architecture, dependencies, and response capabilities.",
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

export default function EradicationAndRecoveryPlanningPage() {
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
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Cause, Clean State, Staged Recovery, Validation, and Reopening
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.5 Eradication and Recovery Planning
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional responders separate containment, cause
            correction, recovery preparation, staged restoration, validation,
            observation, rollback, owner acceptance, closure readiness, and
            reopening.
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
          lessonTitle="Eradication and Recovery Planning"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, identities, sessions, services, configurations, data, suppliers, sources, dependencies, causes, recovery actions, owners, dates, and outcomes.",
            "I will distinguish fictional containment, eradication, recovery preparation, restoration, validation, observation, closure readiness, and reopening.",
            "I will not call a fictional completed change, quiet alert, reachable service, or missing record proof of eradication or recovery.",
            "I will use fictional clean-state gates, staged recovery waves, source-health rules, rollback, observation, residual-risk ownership, and reopen triggers.",
            "I will separate fictional trigger, immediate cause, root cause, contributing factor, control gap, and recovery complication without assigning unsupported blame.",
            "I will not access, copy, sanitize, upload, test, restore, alter, replace, validate, or investigate any real system, identity, service, data set, supplier, source, organization, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Reachable Service Is Not Necessarily Recovered"
        >
          <p className="leading-8">
            Fictional Northbridge closes one stale session and restores the
            service. The page loads again, but the role lifecycle defect has not
            been corrected, the group source is Degraded, the data-access source
            is Blind, the supplier queue may contain duplicates, and critical
            users have not tested the workflow. The service is available, but
            the organization cannot yet defend a clean-state or recovery
            conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak recovery
              </p>
              <p className="mt-2 leading-7">
                “The service responds, so the incident is fixed.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong recovery
              </p>
              <p className="mt-2 leading-7">
                “Cause correction, identity, configuration, data, supplier,
                source, user, monitoring, rollback, and acceptance gates must
                pass.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Trusted recovery is a chain of evidence-supported decisions, not one
            successful service check.
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
          title="Recovery Decisions Change Trust, Mission, and Closure"
        >
          <p className="leading-8">
            Fictional recovery affects identities, users, services, protected
            data, suppliers, evidence, monitoring, continuity, risk, and future
            recurrence. Restoring too quickly can reintroduce the unsafe state.
            Restoring too broadly can create a large failure. Closing too early
            can hide Blind sources, unresolved debt, or delayed supplier and
            user effects.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Correct the supported cause",
                "Fictional eradication targets an evidence-supported unsafe state rather than only its visible symptom.",
              ],
              [
                "Restore through gates",
                "Fictional waves begin only when clean-state, dependency, monitoring, rollback, and owner conditions are ready.",
              ],
              [
                "Observe before closure",
                "Fictional recurrence, delayed records, supplier queues, user effects, and residual risk remain visible.",
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
          title="The R-E-C-O-V-E-R Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["R — Review cause", "Separate fictional trigger, immediate cause, root cause, contributing factor, control gap, and recovery complication."],
              ["E — Establish clean state", "Define fictional identity, session, configuration, service, data, supplier, source, dependency, monitoring, and business gates."],
              ["C — Choose correction", "Select the fictional evidence-supported correction target, known-good replacement, authority, validation, and rollback."],
              ["O — Organize waves", "Create fictional readiness, identity canary, function, user canary, expanded integration, and full-operation waves."],
              ["V — Validate outcomes", "Confirm fictional expected state, source health, user effect, side effects, data integrity, suppliers, and owner acceptance."],
              ["E — Evaluate observation", "Monitor fictional recurrence, delayed evidence, source recovery, user reports, dependencies, debt, and reopen triggers."],
              ["R — Record closure readiness", "Document fictional acceptance, residual risk, corrective actions, communication, debt, observation, and authorized closure decision."],
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
              Decision-ready recovery statement
            </p>
            <p className="mt-2 leading-7">
              Fictional Northbridge will not restore broad access until the
              stale-role lifecycle cause is corrected, identity and group state
              reconcile, one canary session passes, the data limitation is
              accepted or resolved, supplier backlog is validated, and critical
              users complete the canary workflow.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Eradication and Recovery Planning"
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

        <SectionCard
          eyebrow="Instructional Section 1"
          title="Separate Seven Lifecycle Stages"
        >
          <div className="grid gap-5">
            {lifecycleStages.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.stage}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Key question", item.keyQuestion],
                    ["Required evidence", item.evidence],
                    ["Exit gate", item.exitGate],
                    ["Weak pattern", item.weakPattern],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.stage}-${label}`}
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
          eyebrow="Instructional Section 2"
          title="Build a Six-Part Cause Model"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {causeModel.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.category}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence needed
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.evidenceNeeded}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Does not prove
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.nonProof}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Define Ten Clean-State Domains"
        >
          <div className="grid gap-5">
            {cleanStateDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Entry criteria", item.entryCriteria],
                    ["Fictional evidence", item.evidence],
                    ["Validation", item.validation],
                    ["Rollback trigger", item.rollbackTrigger],
                    ["Owner", item.owner],
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
          eyebrow="Instructional Section 4"
          title="Evaluate Ten Eradication Criteria"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {eradicationCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.criterion}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Decision question
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
                    Weak pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.weakPattern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Design Six Recovery Waves"
        >
          <div className="grid gap-5">
            {recoveryWaves.map((item) => (
              <article
                key={item.wave}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.wave}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Scope", item.scope],
                    ["Entry criteria", item.entry],
                    ["Fictional actions", item.actions],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
                    ["Exit criteria", item.exit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.wave}-${label}`}
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
          title="Assign Eight Recovery Decision Paths"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Decision",
                    "Recommends",
                    "Approves",
                    "Executes",
                    "Validates",
                    "Accepts impact",
                    "Escalates when",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {authorityMatrix.map((row) => (
                  <tr key={row.decision}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.decision}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.recommends}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.approves}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.executes}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.validates}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.acceptsImpact}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.escalates}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Validate Twelve Recovery Scenarios"
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
                {validationCases.map(
                  ([id, type, input, expected, protects]) => (
                    <tr key={id}>
                      <td className="px-4 py-4 align-top font-mono font-bold text-white">
                        {id}
                      </td>
                      <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                        {type}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {input}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {expected}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {protects}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Measure Eight Recovery Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {recoveryMetrics.map((item) => (
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
          eyebrow="Fictional Recovery Architecture"
          title="Northbridge Cause-to-Recovery Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches recovery decision quality
            without real identities, systems, services, configurations, data,
            suppliers, sources, incidents, or restoration procedures.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Cause inputs", "Trigger, immediate cause, root cause, factors, control gaps"],
                ["State inputs", "Identity, session, configuration, service, data, supplier"],
                ["Evidence inputs", "Provenance, chronology, source health, alternatives, limitations"],
                ["Mission inputs", "Users, continuity, privacy, dependencies, owners, risk"],
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
                Fictional Recovery Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Correct", "Evidence-supported cause and known-good replacement"],
                  ["Gate", "Identity, service, data, supplier, source, monitoring"],
                  ["Sequence", "Readiness, canary, function, users, integration, full"],
                  ["Authorize", "Recommend, approve, execute, validate, accept"],
                  ["Validate", "Expected state, side effects, user effect, integrity"],
                  ["Roll back", "Prior wave, authority, triggers, dependencies"],
                  ["Observe", "Recurrence, source recovery, supplier, users, debt"],
                  ["Close", "Acceptance, residual risk, communication, reopen triggers"],
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
                ["Technical output", "Clean state, validated waves, rollback, monitoring"],
                ["Mission output", "Critical workflows, user acceptance, continuity"],
                ["Leadership output", "Cause, progress, decisions, debt, residual risk"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, defensive, non-operational"],
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
          title="Fake Northbridge Eradication and Recovery Dashboard"
          subtitle="Fictional cause confidence, clean-state readiness, recovery-wave progress, validation quality, source limitations, observation, recovery debt, and closure readiness."
          metrics={[
            {
              label: "Current fictional recovery state",
              value: "Wave 1 Conditional",
              note: "Identity canary is prepared, but group evidence is Degraded and the data-access source remains Blind.",
            },
            {
              label: "Clean-state gates passing",
              value: "7 / 10",
              note: "Identity, sessions, configuration, service, dependencies, monitoring, and continuity pass; data, supplier, and source gates remain incomplete.",
            },
            {
              label: "Open fictional recovery debt",
              value: "9",
              note: "Lifecycle redesign, group reconciliation, data-source recovery, supplier queue, canary completion, rollback test, user acceptance, observation, and risk acceptance remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Recovery Expansion Blocked by Failed Clean-State Gates"
          severity="High"
          time="11:18 AM"
          source="Fake Northbridge Recovery Coordination Console"
          details="The fictional service is reachable and one identity canary is ready, but group evidence is Degraded, protected-data evidence is Blind, the supplier queue has not been reconciled, and critical-user acceptance is incomplete."
          recommendation="Keep fictional recovery at Wave 1. Complete source, data, supplier, and user gates or obtain explicit qualified risk acceptance before any bounded expansion."
        />

        <FakeLogPanel
          title="Fake Eradication and Recovery Timeline"
          logs={[
            "09:37 CONTAINMENT session='closed'",
            "09:45 CAUSE trigger='role-expiration'",
            "09:52 CAUSE root='lifecycle-ownership-gap'",
            "10:05 CORRECTION target='role-session-linkage'",
            "10:15 BASELINE identity='approved'",
            "10:18 SOURCE group='degraded'",
            "10:20 SOURCE data='blind'",
            "10:24 SUPPLIER queue='unreconciled'",
            "10:35 WAVE readiness='conditional'",
            "10:50 WAVE identity-canary='prepared'",
            "11:02 VALIDATION service='pass'",
            "11:05 VALIDATION users='pending'",
            "11:10 CLEAN-STATE pass='7-of-10'",
            "11:18 ALERT expansion='blocked'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Recovery Evidence Supports—and What It Does Not Prove"
        >
          <div className="grid gap-5">
            {evidenceMatrix.map(
              ([id, source, observation, supports, limits, use]) => (
                <article
                  key={id}
                  className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                      {id}
                    </span>
                    <h3 className="font-black text-white">{source}</h3>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                      ["Observation", observation],
                      ["Supports", supports],
                      ["Does not prove", limits],
                      ["Recovery use", use],
                    ].map(([label, detail]) => (
                      <div
                        key={`${id}-${label}`}
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
              ),
            )}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Recovery Decision Is Best Supported?"
          question="Which fictional recovery decision best fits the current Northbridge evidence?"
          evidence={[
            "The confirmed privileged session is closed.",
            "The stale-role lifecycle cause has an approved correction target.",
            "Identity and session canary preparation is complete.",
            "Group evidence remains Degraded.",
            "The protected-data source remains Blind.",
            "The supplier queue is unreconciled.",
            "Critical-user acceptance has not occurred.",
            "Seven of ten clean-state domains currently pass.",
          ]}
          options={[
            "Keep recovery at Wave 1 Conditional, complete or explicitly qualify the group, data, supplier, and user gates, preserve rollback, and authorize expansion only after the required acceptance.",
            "Restore all users and integrations because the service responds.",
            "Declare eradication and recovery complete because the session is closed.",
            "Delete the failed gates from the recovery plan.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves staged recovery, source-health honesty, multi-domain validation, rollback, and owner acceptance."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Eradication and Recovery Errors"
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
                    Impact
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
          title="Build the Northbridge Eradication and Recovery Planning Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, test, restore, replace, reconfigure, validate,
            monitor, or investigate any real identity, service, configuration,
            data set, supplier, source, organization, system, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Service Is Reachable but Clean-State Gates Are Incomplete"
          scenario="Fictional Northbridge can reach the service again. Identity and configuration gates pass, but the data-access source is Blind, supplier backlog is unreconciled, and critical users have not completed the workflow."
          choices={[
            {
              label: "Choice A",
              response: "Keep fictional recovery Conditional, remain at the current wave, complete or qualify the failed gates, preserve rollback, and require technical, business, privacy, and supplier acceptance before expansion.",
              outcome: "Best defensive choice. Availability alone does not establish trusted recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Restore every user because the page loads.",
              outcome: "Weak. Important data, supplier, user, and acceptance gates remain incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Close the incident and track the missing gates later.",
              outcome: "Weak. Closure would hide material recovery uncertainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Canary Wave Reveals a Critical Workflow Failure"
          scenario="One fictional canary user can sign in, but the critical student-support submission workflow fails and creates an inconsistent queue state."
          choices={[
            {
              label: "Choice A",
              response: "Freeze fictional recovery expansion, preserve evidence, reconcile the queue, investigate the dependency, roll back or revise the wave, and update scope, communication, and residual risk.",
              outcome: "Best choice. A failed critical-user and data-state gate blocks expansion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Continue expansion because sign-in works.",
              outcome: "Weak. Authentication success does not prove service or data recovery.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the canary requirement and move to full operation.",
              outcome: "Weak. Removing the gate hides the recovery defect.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Recovery Expansion Decision before a Readiness Board"
        >
          <p className="leading-8">
            Fictional Northbridge has corrected the stale-role lifecycle design,
            closed the confirmed session, prepared an identity canary, and
            restored service availability. Group evidence remains Degraded,
            protected-data evidence remains Blind, the supplier queue is not
            reconciled, critical-user acceptance is incomplete, and observation
            has not begun. Leadership asks whether full restoration can start.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend the cause",
                "Explain the fictional trigger, immediate cause, root cause, contributing factors, control gaps, recovery complications, and alternative explanations.",
              ],
              [
                "Defend clean state",
                "Explain fictional identity, session, configuration, service, data, supplier, source, dependency, monitoring, and user gates.",
              ],
              [
                "Defend the recovery wave",
                "Explain fictional entry criteria, canary scope, actions, validation, rollback, exit criteria, communication, and owner acceptance.",
              ],
              [
                "Defend source-health decisions",
                "Explain fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence effects on recovery confidence.",
              ],
              [
                "Defend observation and reopening",
                "Explain fictional recurrence signals, delayed evidence, user reports, supplier queues, source recovery, rollback, and reopen triggers.",
              ],
              [
                "Defend residual risk",
                "Explain fictional unresolved data, supplier, monitoring, debt, redesign, owner, authority, duration, compensating controls, and review.",
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
              Produce a fictional cause register, correction decision,
              known-good baseline, ten-domain clean-state matrix, six recovery
              waves, authority map, source-health decision, canary plan,
              validation record, rollback plan, user and supplier acceptance,
              observation plan, break conditions, reopen criteria, recovery
              metrics, debt register, residual-risk statement, leadership brief,
              closure-readiness decision, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Eradication and Recovery Planning Checklist"
          items={[
            "I can distinguish fictional containment, eradication, recovery preparation, restoration, validation, observation, closure readiness, and reopening.",
            "I can separate fictional trigger, immediate cause, root cause, contributing factor, control gap, and recovery complication.",
            "I can test fictional cause statements using supporting, contradicting, source-health, owner, repeated-pattern, and alternative evidence.",
            "I can define fictional known-good replacement state before correction or restoration.",
            "I can build fictional identity, session, configuration, service, data, supplier, source, dependency, monitoring, and business clean-state gates.",
            "I can design fictional canary and staged recovery waves with entry, validation, rollback, exit, communication, and acceptance.",
            "I can freeze fictional recovery when required evidence, source health, data integrity, supplier, user, or authority gates fail.",
            "I can distinguish fictional action completion, service availability, technical acceptance, business acceptance, privacy acceptance, and trusted recovery.",
            "I can design fictional rollback before each wave and preserve the prior accepted state.",
            "I can use fictional observation periods, break conditions, delayed evidence, source recovery, and reopen triggers before closure.",
            "I can record fictional recovery debt and residual risk with owner, authority, duration, controls, review, and escalation.",
            "I can create a completely fictional recovery artifact without exposing real architecture, systems, identities, suppliers, sources, recovery procedures, or incidents.",
          ]}
        />

        <MiniQuiz
          title="A7.5 Mini Quiz: Eradication and Recovery Planning"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Eradication and Recovery Planning Package for the Northbridge Student-Support Cooperative. Include mission, critical services, users, identity model, data categories, suppliers, dependencies, source inventory, privacy boundary, safety boundary, containment state, trigger, immediate cause, root cause, contributing factors, control gaps, recovery complications, supporting evidence, contradicting evidence, alternative explanations, source health, owner review, cause confidence, correction target, correction precision, authority, evidence preservation, dependency effect, known-good replacement, validation, rollback, recurrence prevention, residual risk, identity clean state, session clean state, configuration clean state, service clean state, data clean state, supplier clean state, source clean state, dependency clean state, monitoring clean state, business clean state, entry criteria, evidence, owner, validation, rollback trigger, readiness wave, identity canary wave, administrative-function wave, critical-user wave, expanded-user and supplier wave, full-operation wave, scope, actions, exit criteria, recommendation owner, approval owner, executor, independent validator, business acceptance, technical acceptance, privacy acceptance, risk acceptance, recovery freeze authority, rollback authority, closure-readiness authority, validation cases, recovery metrics, time to eradication target, validation quality, wave pass rate, rollback readiness, time to trusted service, side-effect rate, observation recurrence rate, recovery-debt aging, canary result, supplier reconciliation, data integrity, source reconciliation, user acceptance, observation period, break conditions, reopen triggers, corrective actions, recovery debt, residual-risk statement, leadership brief, closure-readiness decision, reflection, and a statement that every organization, identity, service, configuration, data category, source, supplier, dependency, baseline, action, owner, date, and outcome is invented."
          tips={[
            "Separate fictional containment success from root-cause correction and trusted recovery.",
            "Require fictional clean-state evidence across technical, data, supplier, monitoring, user, privacy, and continuity domains.",
            "Use fictional canary and staged recovery waves to limit the blast radius of failed assumptions.",
            "Keep fictional closure Conditional until observation, source reconciliation, acceptance, debt, residual risk, and reopen triggers are complete.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Stakeholder Communication?"
        >
          <p className="leading-8">
            Before moving to A7.6, rate your readiness from 1 to 5 for lifecycle
            separation, cause analysis, known-good state, clean-state gates,
            recovery waves, authority, source health, canary validation,
            rollback, user acceptance, supplier reconciliation, observation,
            closure readiness, debt, residual risk, reopening, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional service availability is not the same as trusted recovery.",
              "I can separate fictional trigger, cause, factor, control gap, and recovery complication.",
              "I can define fictional clean-state evidence across ten domains.",
              "I can design fictional canary and staged recovery waves.",
              "I can freeze or roll back fictional recovery when a required gate fails.",
              "I can require fictional technical, business, privacy, supplier, source, and risk acceptance.",
              "I can use fictional observation and reopen triggers before closure.",
              "I can produce a safe fictional recovery package without adapting real recovery architecture or procedures.",
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
            Record one fictional root cause, one clean-state gate, one canary
            wave, one failed-gate response, one rollback trigger, one observation
            condition, one residual-risk owner, and one question you will carry
            into A7.6.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional containment reduces current risk, while eradication corrects the evidence-supported cause or unsafe state.",
            "Fictional recovery preparation defines clean state, dependencies, owners, sequencing, validation, rollback, communication, monitoring, and acceptance before restoration.",
            "Trigger, immediate cause, root cause, contributing factor, control gap, and recovery complication are different conclusions.",
            "Action completion and service availability do not prove fictional eradication or trusted recovery.",
            "Identity, session, configuration, service, data, supplier, source, dependency, monitoring, and business domains require separate clean-state gates.",
            "Fictional canary and staged recovery waves limit the blast radius of failed assumptions.",
            "Blind, Degraded, Conflicting, or Recovering sources must change fictional recovery confidence and may block or narrow a wave.",
            "Rollback should be designed before every fictional recovery wave and preserve the prior accepted state.",
            "Observation, delayed evidence, source reconciliation, debt, residual risk, owner acceptance, and reopen triggers belong before closure.",
            "Every CyberShield recovery artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real recovery capabilities.",
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
            Next, learn how fictional incident teams communicate facts,
            uncertainty, scope, impact, decisions, containment, recovery,
            privacy, user guidance, supplier coordination, leadership needs,
            correction, and next-update commitments to different stakeholders.
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