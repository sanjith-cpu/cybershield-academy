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
const previousLesson = `${modulePath}/detection-and-scoping`;
const nextLesson = `${modulePath}/eradication-and-recovery-planning`;

const objectives = [
  "Distinguish fictional immediate, short-term, long-term, identity, session, service, network, data, supplier, communication, and continuity containment without confusing containment with eradication or recovery.",
  "Compare fictional containment options using active risk, scope, evidence quality, authority, mission continuity, user effect, privacy, supplier dependency, reversibility, validation, rollback, monitoring, and residual risk.",
  "Select the narrowest fictional authorized action that meaningfully reduces current risk while avoiding destructive, irreversible, overly broad, evidence-damaging, or unsupported action.",
  "Create fictional containment decision records with trigger, owner, authority, evidence, alternatives, assumptions, dependencies, expected state, validation, rollback, communication, expiration, and reassessment.",
  "Create a portfolio-ready fictional Containment Strategy Package containing an option matrix, staged plan, authorization map, continuity review, evidence-preservation review, validation cases, rollback plan, dashboard, leadership brief, residual-risk record, and reflection.",
];

const vocabulary = [
  ["Containment", "A fictional authorized action intended to limit current or potential harm, reduce unsafe exposure, preserve mission, or prevent additional impact while investigation and recovery continue."],
  ["Immediate containment", "A fictional urgent action used when time-sensitive risk requires rapid reduction before every question is resolved."],
  ["Short-term containment", "A fictional temporary control designed to reduce risk while evidence, scope, authority, continuity, and recovery planning mature."],
  ["Long-term containment", "A fictional sustained control used when the underlying cause cannot yet be removed safely or when recovery requires extended preparation."],
  ["Identity containment", "A fictional control affecting roles, groups, sessions, approvals, credentials, effective access, or identity lifecycle under authorized governance."],
  ["Session containment", "A fictional control affecting one or more active sessions while preserving the broader identity or service when appropriate."],
  ["Service containment", "A fictional control limiting a service feature, administrative function, workflow, integration, or access path."],
  ["Network containment", "A fictional architectural control limiting communication between approved zones, services, or dependencies without teaching operational blocking procedures."],
  ["Data containment", "A fictional governance or service control limiting access, sharing, processing, transfer, or modification of a protected data category."],
  ["Supplier containment", "A fictional action limiting or isolating an external dependency, integration, data exchange, support path, or service relationship under documented authority."],
  ["Communication containment", "A fictional measure that limits misinformation, unnecessary disclosure, conflicting instructions, or unapproved statements while preserving accurate updates."],
  ["Continuity control", "A fictional alternate workflow, priority rule, capacity plan, or temporary service arrangement used to preserve critical mission functions."],
  ["Narrowest effective action", "The fictional least disruptive authorized option expected to reduce the defined risk enough for the current decision."],
  ["Active harm", "A fictional current condition causing or likely to cause ongoing mission, privacy, integrity, availability, identity, user, supplier, or evidence impact."],
  ["Containment trigger", "A fictional evidence, scope, impact, timing, source-health, authority, user-safety, privacy, or continuity condition that justifies action review."],
  ["Expected state", "The fictional observable condition that should exist after containment if the action works as intended."],
  ["Validation", "A fictional evidence-based check that the intended risk reduction occurred and unacceptable side effects did not."],
  ["Rollback", "A fictional approved path to reverse or replace a containment action when validation fails, continuity worsens, scope changes, or new evidence appears."],
  ["Reversibility", "The degree to which a fictional action can be safely undone without losing evidence, trust, service, data, or recovery options."],
  ["Blast radius", "The fictional identities, users, services, devices, destinations, data, suppliers, dependencies, or workflows affected by the action itself."],
  ["Containment cost", "The fictional operational, mission, privacy, evidence, user, supplier, recovery, or resource consequence of an action."],
  ["Residual risk", "The fictional remaining risk after containment, including unresolved cause, scope, evidence, access, service, data, supplier, recovery, or monitoring gaps."],
  ["Expiration condition", "A fictional date, event, evidence state, recovery milestone, owner decision, or review trigger requiring the containment to end, change, or renew."],
  ["Emergency exception", "A fictional time-bounded authorized deviation used when urgency prevents the normal approval sequence and later independent review is required."],
  ["Containment debt", "Fictional unresolved work involving temporary controls, weak validation, stale exceptions, unclear ownership, missing rollback, source limits, or delayed long-term resolution."],
];

const containmentPhases = [
  {
    phase: "Immediate",
    purpose: "Reduce fictional time-sensitive risk before every fact is known.",
    evidenceNeeded: "Enough evidence to define the current risk, affected boundary, urgency, likely benefit, authority, continuity cost, and minimum safe action.",
    duration: "Minutes to hours, with rapid review and expiration.",
    examples: "Scoped session closure, temporary role restriction, administrative-feature pause, approved supplier integration hold, or communication freeze.",
    qualityGate: "Authorized owner, narrow boundary, evidence preservation, validation, rollback, and next review time.",
    failurePattern: "Fast action becomes broad, permanent, undocumented, or impossible to validate.",
  },
  {
    phase: "Short term",
    purpose: "Maintain fictional risk reduction while scope, evidence, causes, continuity, and recovery plans mature.",
    evidenceNeeded: "Updated scope, source health, owner decisions, user effect, dependency review, monitoring, validation, and residual risk.",
    duration: "Hours to days, with owner and review date.",
    examples: "Temporary restricted role, segmented workflow, limited service function, alternate user process, or monitored supplier fallback.",
    qualityGate: "Documented owner, monitoring, break conditions, continuity, communication, and rollback.",
    failurePattern: "Temporary control silently becomes permanent without design review.",
  },
  {
    phase: "Long term",
    purpose: "Sustain fictional safety when eradication or trusted recovery requires extended preparation.",
    evidenceNeeded: "Root-cause evidence, architecture and identity review, recovery dependencies, long-term mission effect, risk authority, and replacement plan.",
    duration: "Days to weeks or until approved recovery criteria are met.",
    examples: "Extended service isolation, replacement integration, controlled manual workflow, reduced administrative surface, or enhanced approval process.",
    qualityGate: "Leadership or risk acceptance, periodic validation, debt tracking, exit criteria, and recovery ownership.",
    failurePattern: "Containment substitutes indefinitely for fixing the underlying condition.",
  },
];

const containmentTypes = [
  {
    type: "Identity-role containment",
    defenderQuestion: "Can fictional risk be reduced by limiting one role, group, approval, or effective-access relationship instead of disabling the entire identity?",
    evidence: "Role, group, approval, extension, sponsor, owner, service, session, source-health, and continuity evidence.",
    authority: "Identity owner within policy; leadership or governance for broad or exceptional action.",
    continuity: "Review critical responsibilities, alternate owners, emergency access, service dependencies, and affected users.",
    validation: "Confirm intended role or group state, effective access, active sessions, dependent services, and no unauthorized broader change.",
    rollback: "Restore only through approved evidence-supported authorization and revalidate access.",
  },
  {
    type: "Session containment",
    defenderQuestion: "Can fictional risk be reduced by ending or limiting one active session while preserving the identity and service?",
    evidence: "Session ID, identity, device relationship, service, destination, timing, active state, source health, authorization, and scope.",
    authority: "Identity or service authority according to the session type.",
    continuity: "Review active user work, service tasks, recovery actions, alternate session, and business deadlines.",
    validation: "Confirm the targeted session ended, no unexpected sessions remain, and the service remains in the intended state.",
    rollback: "Permit a new approved session only after owner validation and current authorization.",
  },
  {
    type: "Administrative-function containment",
    defenderQuestion: "Can fictional risk be reduced by limiting one high-impact administrative feature rather than the whole service?",
    evidence: "Function, identities, destinations, transactions, changes, service ownership, user need, source health, and current impact.",
    authority: "Service owner with technical and continuity review.",
    continuity: "Preserve ordinary user functions or provide an approved alternate administrative workflow.",
    validation: "Confirm the function is unavailable to the scoped identities while unaffected service functions remain healthy.",
    rollback: "Restore in stages after clean-state, authorization, monitoring, and owner acceptance.",
  },
  {
    type: "Service containment",
    defenderQuestion: "Does fictional active risk justify limiting an entire service or major workflow?",
    evidence: "Confirmed active impact, scope, dependencies, users, data, supplier, continuity, evidence, recovery readiness, and alternatives.",
    authority: "Service owner and incident lead; leadership for major interruption.",
    continuity: "Activate alternate workflows, prioritize critical users, communicate limits, and monitor capacity.",
    validation: "Confirm the service state, user effect, dependency effect, evidence preservation, and risk reduction.",
    rollback: "Use staged restoration or alternate service according to approved gates.",
  },
  {
    type: "Network-boundary containment",
    defenderQuestion: "Can fictional communication be limited between defined zones or services without broadly interrupting unrelated activity?",
    evidence: "Architecture, service relationships, source and destination categories, allowed dependencies, mission flows, monitoring, and scope.",
    authority: "Infrastructure owner under approved incident plan.",
    continuity: "Preserve required service-to-service, identity, supplier, monitoring, recovery, and support relationships.",
    validation: "Confirm intended communication relationship changed and required flows still function.",
    rollback: "Restore only the approved relationship after validation and risk review.",
  },
  {
    type: "Data-access containment",
    defenderQuestion: "Can fictional access, sharing, transfer, modification, or processing be narrowed for one protected data category?",
    evidence: "Data category, purpose, users, roles, services, destinations, privacy, source health, retention, integrity, and active impact.",
    authority: "Data owner, privacy reviewer, and service or identity owner as required.",
    continuity: "Preserve critical minimum access through approved purpose-limited alternatives.",
    validation: "Confirm scoped access changed, required access remains, no unauthorized copy or transfer occurred, and privacy limits hold.",
    rollback: "Restore purpose-limited access through current approval and owner validation.",
  },
  {
    type: "Supplier-integration containment",
    defenderQuestion: "Can fictional risk be reduced by limiting one external integration, data exchange, support path, or supplier feature?",
    evidence: "Supplier dependency, affected service, data exchange, evidence, contract expectation, current impact, continuity, and fallback.",
    authority: "Supplier owner with service, privacy, incident, and leadership review as needed.",
    continuity: "Use local fallback, alternate provider path, delayed processing, or approved manual workflow.",
    validation: "Confirm the integration state, local service behavior, data flow, supplier acknowledgement, and fallback capacity.",
    rollback: "Restore after supplier evidence, local validation, data review, monitoring, and owner approval.",
  },
  {
    type: "User-workflow containment",
    defenderQuestion: "Can fictional users be redirected from one risky workflow while preserving critical mission outcomes?",
    evidence: "User population, service function, active impact, privacy, accessibility, continuity, capacity, communications, and recovery.",
    authority: "Service and continuity owners.",
    continuity: "Provide clear alternate instructions, priority handling, accessibility support, and expected duration.",
    validation: "Confirm affected users can complete essential tasks through the alternate process.",
    rollback: "Return users only after service and communication validation.",
  },
  {
    type: "Evidence-protection containment",
    defenderQuestion: "Does fictional response need to pause changes, limit access, or preserve a state so evidence is not lost or altered?",
    evidence: "Evidence purpose, source, provenance, current state, retention, access, integrity, privacy, owner, and likely change risk.",
    authority: "Evidence coordinator with incident, technical, privacy, and system owners.",
    continuity: "Balance preservation with safety, service, privacy, recovery, and lawful business needs.",
    validation: "Confirm evidence identity, access, integrity, retention, custody, and system-state obligations.",
    rollback: "Release or modify the hold only through documented authority and evidence review.",
  },
  {
    type: "Communication containment",
    defenderQuestion: "Can fictional harm be reduced by preventing conflicting, speculative, excessive, or unapproved messages?",
    evidence: "Current facts, uncertainty, affected audiences, privacy, policy, approval chain, incorrect messages, and next-update need.",
    authority: "Communications lead within the documented approval structure.",
    continuity: "Preserve timely internal guidance, user safety, supplier coordination, and leadership decisions.",
    validation: "Confirm one approved current message, audience distribution, version, correction, and next update.",
    rollback: "Resume normal communication flow after facts, ownership, and approvals stabilize.",
  },
];

const decisionCriteria = [
  {
    criterion: "Active risk reduction",
    question: "How much fictional current or near-term risk should the action reduce?",
    evidence: "Confirmed and possible scope, active sessions, current impact, time sensitivity, break conditions, and source health.",
    weakUse: "Selecting a dramatic action without showing which risk it reduces.",
  },
  {
    criterion: "Evidence support",
    question: "Which fictional observations and relationships support the target and action?",
    evidence: "Evidence IDs, provenance, event time, source health, confidence, alternatives, and non-proof statements.",
    weakUse: "Acting on the alert title or unsupported assumption.",
  },
  {
    criterion: "Authority",
    question: "Who may approve, execute, validate, accept impact, and accept residual risk?",
    evidence: "Decision-rights matrix, role charter, emergency exception, service authority, privacy, and leadership thresholds.",
    weakUse: "Letting the fastest responder invent authority.",
  },
  {
    criterion: "Scope precision",
    question: "Can the fictional action target one identity, role, session, function, service, dependency, destination, data category, supplier, or user group?",
    evidence: "Current scope version, relationship map, entity register, and expected unaffected population.",
    weakUse: "Expanding the action to every related item.",
  },
  {
    criterion: "Mission continuity",
    question: "Which fictional critical functions, users, deadlines, accessibility needs, suppliers, or recovery tasks could the action interrupt?",
    evidence: "Service criticality, continuity plan, user priorities, alternate workflow, capacity, and dependency map.",
    weakUse: "Treating security action as automatically more important than every mission effect.",
  },
  {
    criterion: "Evidence preservation",
    question: "Could the fictional action alter, destroy, hide, duplicate, delay, or make evidence harder to interpret?",
    evidence: "Evidence register, source behavior, current system state, expected changes, preservation owner, and collection timing.",
    weakUse: "Taking an irreversible action before preserving decision-critical state.",
  },
  {
    criterion: "Privacy and data effect",
    question: "Could the fictional action expand access, sharing, retention, collection, or exposure of protected information?",
    evidence: "Data category, purpose, population, fields, recipients, access, transfer, retention, and privacy review.",
    weakUse: "Collecting or sharing everything because the case is urgent.",
  },
  {
    criterion: "Supplier and dependency effect",
    question: "Which fictional external or internal dependencies may fail, delay, conflict, or require coordination?",
    evidence: "Supplier map, integration state, contracts, service relationships, data exchange, local fallback, and response commitment.",
    weakUse: "Disconnecting a dependency without understanding the service or data consequence.",
  },
  {
    criterion: "Reversibility",
    question: "Can the fictional action be safely reversed or replaced if evidence, scope, continuity, or recovery changes?",
    evidence: "Rollback plan, prior state, approval, dependencies, data integrity, validation, and restoration gates.",
    weakUse: "Calling an action temporary when no safe reversal exists.",
  },
  {
    criterion: "Validation",
    question: "What fictional evidence will prove the intended state and reveal harmful side effects?",
    evidence: "Expected state, source health, identity, session, service, data, user, supplier, monitoring, and owner acceptance.",
    weakUse: "Treating action completion as successful containment.",
  },
  {
    criterion: "Duration and expiration",
    question: "When must the fictional containment be reviewed, renewed, replaced, or ended?",
    evidence: "Start time, owner, expiration, review cadence, recovery milestone, source recovery, scope change, and risk threshold.",
    weakUse: "Allowing emergency controls to remain indefinitely.",
  },
  {
    criterion: "Residual risk",
    question: "Which fictional cause, scope, evidence, identity, service, data, supplier, recovery, or monitoring gaps remain?",
    evidence: "Residual-risk statement, owner, authority, duration, compensating controls, review date, and reopen trigger.",
    weakUse: "Describing containment as complete resolution.",
  },
];

const optionMatrix = [
  {
    option: "End one fictional privileged session",
    target: "NB-SES-881",
    activeRisk: "Session continues after approval expiration.",
    benefit: "Rapidly reduces the session-specific exposure while preserving the broader identity and service.",
    cost: "May interrupt an authorized recovery task if an extension exists.",
    evidenceEffect: "Preserves identity and service evidence better than broad shutdown; session-end evidence must be captured.",
    authority: "Identity owner with incident coordination.",
    continuity: "Confirm alternate authorized session or owner coverage for critical recovery work.",
    expectedState: "NB-SES-881 is Closed and no unauthorized continuation remains.",
    validation: "Session source Healthy; identity owner confirms state; service remains available.",
    rollback: "Create a new approved session only after authorization review.",
    residualRisk: "Role, group, other sessions, device relationships, and possible data access remain unresolved.",
    recommendation: "Strong immediate candidate when the session relationship is confirmed.",
  },
  {
    option: "Restrict one fictional temporary role",
    target: "Temporary recovery role for NB-ID-042",
    activeRisk: "Role remains Active after approval_end.",
    benefit: "Reduces privilege while preserving the identity and unrelated access.",
    cost: "May block legitimate recovery responsibilities.",
    evidenceEffect: "Changes role state and may alter effective-access evidence; preserve prior state and approval records.",
    authority: "Identity owner; emergency exception if required by urgency.",
    continuity: "Assign an authorized alternate recovery owner before restriction when mission allows.",
    expectedState: "Role is Inactive or limited to the approved boundary; unrelated roles remain unchanged.",
    validation: "Role, group, effective-access, and session evidence agree after source reconciliation.",
    rollback: "Restore through current approval, sponsor confirmation, expiration, and owner validation.",
    residualRisk: "Existing sessions or group-derived authority may continue.",
    recommendation: "Strong short-term candidate when role evidence is reliable enough.",
  },
  {
    option: "Limit one fictional administrative destination",
    target: "coordination-admin",
    activeRisk: "Session reached a high-impact administrative area.",
    benefit: "Reduces access to the highest-risk service function while preserving ordinary service use.",
    cost: "Administrators may lose necessary support capabilities.",
    evidenceEffect: "May change destination telemetry and workflow evidence; preserve current configuration and decision record.",
    authority: "Service owner with technical and continuity review.",
    continuity: "Provide approved alternate administrative workflow and prioritize urgent support cases.",
    expectedState: "Scoped identities cannot reach coordination-admin; ordinary service functions remain available.",
    validation: "Destination-access evidence, service health, user workflow, and owner acceptance.",
    rollback: "Restore in stages after identity, configuration, monitoring, and recovery validation.",
    residualRisk: "Other destinations, identities, sessions, or supplier paths may remain relevant.",
    recommendation: "Strong narrow service-function option when service evidence supports the target.",
  },
  {
    option: "Pause the entire fictional service",
    target: "NB-SVC-07",
    activeRisk: "Potential administrative, privacy, or integrity risk may involve the service.",
    benefit: "Broadly removes active service exposure.",
    cost: "Interrupts student-support coordination, users, suppliers, evidence sources, and recovery work.",
    evidenceEffect: "May eliminate volatile service evidence and make impact reconstruction harder.",
    authority: "Service owner, incident lead, continuity owner, and leadership for major interruption.",
    continuity: "Activate alternate support workflow, user prioritization, accessibility support, and supplier coordination.",
    expectedState: "Service is unavailable by approved design and alternate workflow supports critical users.",
    validation: "Service state, user capacity, dependency effects, evidence preservation, and continuity metrics.",
    rollback: "Staged restoration only after clean-state and multi-owner validation.",
    residualRisk: "Identity, supplier, data, source-health, and underlying cause remain unresolved.",
    recommendation: "High-cost option reserved for evidence-supported active risk that narrower options cannot control.",
  },
  {
    option: "Limit one fictional supplier integration",
    target: "NB-SUP-03 integration",
    activeRisk: "Supplier delay or uncertain behavior may affect service and evidence.",
    benefit: "Separates local service from the uncertain external dependency.",
    cost: "Delays processing, support, data exchange, or recovery.",
    evidenceEffect: "May reduce supplier-generated evidence and create queue or replay effects.",
    authority: "Supplier owner with service, privacy, incident, and leadership review as needed.",
    continuity: "Use approved local fallback or manual queue with capacity and privacy checks.",
    expectedState: "Integration is paused or reduced; local service behavior and queued work are visible.",
    validation: "Supplier acknowledgement, local service health, data-flow state, queue health, and fallback capacity.",
    rollback: "Restore after supplier evidence, local validation, data reconciliation, and monitoring.",
    residualRisk: "Supplier root cause, delayed work, queued data, and local service questions remain.",
    recommendation: "Conditional option when supplier evidence or dependency risk justifies it.",
  },
  {
    option: "Restrict one fictional protected-data workflow",
    target: "Protected student-support record export",
    activeRisk: "Data access remains Unknown because the source is Blind.",
    benefit: "Reduces possible transfer or exposure risk while preserving core service viewing.",
    cost: "May delay approved reporting, support, or continuity workflows.",
    evidenceEffect: "Could change the data state being investigated; preserve configuration, pending jobs, and access records.",
    authority: "Data owner, privacy reviewer, and service owner.",
    continuity: "Provide a purpose-limited approved alternative for urgent reporting.",
    expectedState: "Export is unavailable to scoped roles while required core access remains.",
    validation: "Data workflow state, access paths, pending jobs, user effect, and privacy review.",
    rollback: "Restore after source recovery, authorization, data integrity, and owner approval.",
    residualRisk: "Prior data access, local copies, other workflows, and source Blindness remain.",
    recommendation: "Potentially strong privacy-focused short-term action when the protected workflow is clearly bounded.",
  },
  {
    option: "Redirect fictional users to an alternate workflow",
    target: "Student Assistance Coordination users",
    activeRisk: "Containment may disrupt the primary service.",
    benefit: "Preserves critical mission while technical controls remain in place.",
    cost: "Lower capacity, slower processing, training burden, accessibility concerns, and manual error risk.",
    evidenceEffect: "Creates new workflow evidence and may separate current impact from containment effect.",
    authority: "Service and continuity owners.",
    continuity: "Prioritize urgent users, define capacity, protect privacy, and publish clear guidance.",
    expectedState: "Critical users complete essential tasks through the alternate process.",
    validation: "Completion rate, queue, user reports, privacy checks, capacity, and service-owner acceptance.",
    rollback: "Return users after primary service restoration and communication validation.",
    residualRisk: "Temporary process debt, backlogs, inconsistent records, and user confusion remain.",
    recommendation: "Companion continuity action rather than a standalone risk-reduction control.",
  },
  {
    option: "Freeze unapproved fictional external communication",
    target: "Incident-related outbound statements",
    activeRisk: "Conflicting impact statements and unsupported conclusions are circulating.",
    benefit: "Reduces misinformation, unnecessary disclosure, blame, and contradictory instructions.",
    cost: "Stakeholders may experience delayed updates.",
    evidenceEffect: "Preserves one approved factual version but does not change technical risk.",
    authority: "Communications lead under documented approval.",
    continuity: "Continue urgent internal guidance and commit to a next update.",
    expectedState: "One current approved message exists; conflicting drafts are withdrawn or corrected.",
    validation: "Version, audience, distribution, correction, approvals, and next-update schedule.",
    rollback: "Resume normal communication after facts, ownership, and approval stabilize.",
    residualRisk: "Technical, service, privacy, and recovery questions remain.",
    recommendation: "Strong communication containment when message conflict creates active harm.",
  },
  {
    option: "Preserve one fictional service state before change",
    target: "NB-SVC-07 administrative configuration",
    activeRisk: "An immediate action may alter decision-critical evidence.",
    benefit: "Protects provenance, configuration context, timing, and later validation.",
    cost: "May delay containment briefly when the evidence-preservation step is safe and authorized.",
    evidenceEffect: "Improves evidence traceability and decision reconstruction.",
    authority: "Evidence coordinator with service and technical owners.",
    continuity: "Do not delay when active user safety or mission harm requires immediate authorized action.",
    expectedState: "Evidence ID, source, purpose, prior state, access, integrity, and handler are documented.",
    validation: "Evidence register and custody record are complete enough for the intended decision.",
    rollback: "Not applicable as reversal; release preservation obligations through documented review.",
    residualRisk: "Preservation itself does not reduce active technical risk.",
    recommendation: "Strong supporting action when it does not create unacceptable delay.",
  },
  {
    option: "Monitor without immediate technical containment",
    target: "Possible device and supplier relationships",
    activeRisk: "Relationships are possible but not confirmed; current service impact is not broad.",
    benefit: "Avoids disrupting unrelated devices, services, or suppliers while collecting decision-relevant evidence.",
    cost: "Risk may continue if the relationship becomes active and break conditions are missed.",
    evidenceEffect: "Preserves behavior for observation but requires Healthy sources and explicit thresholds.",
    authority: "Incident lead with relevant owners.",
    continuity: "No additional interruption beyond monitoring and owner review.",
    expectedState: "Evidence is collected, owners respond, and break conditions trigger action promptly.",
    validation: "Source health, owner response, threshold testing, scope updates, and alert quality.",
    rollback: "Escalate to active containment when break conditions occur.",
    residualRisk: "Possible active risk remains during observation.",
    recommendation: "Appropriate only when evidence, source health, time sensitivity, and impact justify observation.",
  },
];

const authorityMatrix = [
  {
    decision: "End a scoped fictional session",
    recommends: "Technical or identity analyst",
    approves: "Identity owner within authority",
    executes: "Authorized identity operator",
    validates: "Independent identity or technical reviewer",
    acceptsImpact: "Service owner when mission work may be interrupted",
    escalatesWhen: "Session is broadly shared, mission-critical, or outside routine authority.",
  },
  {
    decision: "Restrict a fictional role or group",
    recommends: "Identity owner or technical lead",
    approves: "Identity governance authority",
    executes: "Authorized identity operator",
    validates: "Independent identity reviewer and service owner",
    acceptsImpact: "Service or continuity owner",
    escalatesWhen: "Broad population, emergency access, policy exception, or major mission effect is involved.",
  },
  {
    decision: "Limit a fictional administrative function",
    recommends: "Technical lead and service owner",
    approves: "Service owner",
    executes: "Authorized service operator",
    validates: "Independent technical reviewer and user-workflow owner",
    acceptsImpact: "Continuity owner",
    escalatesWhen: "Critical user function, prolonged interruption, privacy, or supplier effect exceeds routine authority.",
  },
  {
    decision: "Pause a fictional service",
    recommends: "Incident, technical, and service owners",
    approves: "Service owner and leadership according to interruption threshold",
    executes: "Authorized service or infrastructure operator",
    validates: "Technical, service, continuity, evidence, and recovery owners",
    acceptsImpact: "Leadership or service authority",
    escalatesWhen: "The interruption is major, prolonged, public, cross-service, or policy-exceptional.",
  },
  {
    decision: "Limit a fictional supplier integration",
    recommends: "Supplier, service, technical, or privacy owner",
    approves: "Supplier and service authority",
    executes: "Authorized integration owner",
    validates: "Service, data, supplier, and continuity reviewers",
    acceptsImpact: "Service owner or leadership",
    escalatesWhen: "Contract, data exchange, critical dependency, or long delay creates significant mission risk.",
  },
  {
    decision: "Restrict a fictional protected-data workflow",
    recommends: "Privacy, data, service, or technical owner",
    approves: "Data and privacy authority",
    executes: "Authorized service or data operator",
    validates: "Privacy, data, service, and technical reviewers",
    acceptsImpact: "Service and continuity owners",
    escalatesWhen: "Broad population, legal or policy issue, or critical mission access is affected.",
  },
  {
    decision: "Activate a fictional continuity workaround",
    recommends: "Continuity or service owner",
    approves: "Service and continuity authority",
    executes: "Authorized operations owner",
    validates: "Users, service owner, privacy reviewer, and incident lead",
    acceptsImpact: "Service owner",
    escalatesWhen: "Capacity, accessibility, privacy, or prolonged mission effect is unacceptable.",
  },
  {
    decision: "Accept fictional residual risk",
    recommends: "Incident, technical, service, privacy, supplier, or recovery owner",
    approves: "Documented risk or leadership authority",
    executes: "Not an execution action; conditions and owners are recorded",
    validates: "Independent governance review",
    acceptsImpact: "Named risk authority",
    escalatesWhen: "Risk exceeds the current person's delegated threshold.",
  },
];

const continuityReview = [
  {
    domain: "Critical mission functions",
    review:
      "Which fictional student-support, safety, family, staff, accessibility, deadline, or leadership functions must continue?",
    containmentQuestion:
      "Can the action preserve the essential outcome even when the normal service or workflow is limited?",
    fallback:
      "Approved alternate service, manual queue, priority handling, or reduced-function workflow.",
    validation:
      "Critical tasks complete within the documented time and quality threshold.",
  },
  {
    domain: "Identity and owner coverage",
    review:
      "Which fictional owners, emergency roles, alternates, approvals, sessions, or delegated responsibilities are needed?",
    containmentQuestion:
      "Will role or session containment remove the only authorized person able to support recovery or mission work?",
    fallback:
      "Activate authorized alternate owner, emergency approval, or supervised purpose-limited role.",
    validation:
      "Required ownership exists without restoring unnecessary privilege.",
  },
  {
    domain: "User population",
    review:
      "Which fictional students, staff, families, partners, and support teams experience direct or indirect effect?",
    containmentQuestion:
      "Can the action target the confirmed population and protect unrelated users?",
    fallback:
      "Audience-specific guidance, alternate access, priority queue, accessibility support, and help process.",
    validation:
      "Affected users can complete critical tasks and unrelated users remain stable.",
  },
  {
    domain: "Service dependencies",
    review:
      "Which fictional identity, infrastructure, data, supplier, monitoring, communication, and recovery dependencies are required?",
    containmentQuestion:
      "Will the action break a dependency needed for evidence, continuity, rollback, or recovery?",
    fallback:
      "Preserve required flows, use alternate dependency, or sequence actions to protect the critical path.",
    validation:
      "Required dependencies remain Healthy or have approved alternatives.",
  },
  {
    domain: "Supplier relationships",
    review:
      "Which fictional integrations, data exchanges, service commitments, contacts, and fallback paths may be affected?",
    containmentQuestion:
      "Can the integration be narrowed without blocking critical service or creating untracked data queues?",
    fallback:
      "Local processing, delayed queue, alternate provider path, or manual owner-controlled exchange.",
    validation:
      "Supplier state, local service, queued work, privacy, and recovery conditions are visible.",
  },
  {
    domain: "Privacy and data",
    review:
      "Which fictional data categories, purposes, users, transfers, retention, exports, copies, and integrity obligations are involved?",
    containmentQuestion:
      "Will the action reduce exposure without expanding collection, sharing, retention, or unnecessary access?",
    fallback:
      "Purpose-limited minimum data, approved alternate workflow, narrower audience, and privacy review.",
    validation:
      "Only required data and access remain, with no unsupported copy or transfer.",
  },
  {
    domain: "Evidence and visibility",
    review:
      "Which fictional sources, records, states, queues, configurations, sessions, and access histories are decision-critical?",
    containmentQuestion:
      "Will the action destroy, alter, delay, duplicate, hide, or make evidence harder to interpret?",
    fallback:
      "Preserve the minimum safe state, record pre-action evidence, maintain alternate sources, and document limitations.",
    validation:
      "Evidence provenance, integrity, timing, access, and source-health obligations remain usable.",
  },
  {
    domain: "Recovery and rollback",
    review:
      "Which fictional clean-state, restoration, identity, configuration, data, source, supplier, monitoring, and owner gates depend on the action?",
    containmentQuestion:
      "Can the action be reversed or replaced without creating greater risk?",
    fallback:
      "Staged rollback, alternate service, preserved prior state, and leadership risk decision.",
    validation:
      "Rollback path is approved, tested conceptually, monitored, and owned.",
  },
];

const validationPlan = [
  {
    step: "1. Record pre-action state",
    required:
      "Fictional identity, role, group, session, service, destination, data workflow, supplier, source health, users, dependencies, configuration, time, and evidence IDs.",
    success:
      "The current decision-relevant state is documented well enough to compare against the result.",
    failureResponse:
      "Pause non-urgent action or document the emergency exception and missing evidence.",
  },
  {
    step: "2. Confirm authorization",
    required:
      "Fictional decision owner, approval, scope, authority limit, expiration, separation of duties, and emergency exception if used.",
    success:
      "The action, target, duration, and impact fall within documented authority.",
    failureResponse:
      "Escalate rather than invent authority.",
  },
  {
    step: "3. Confirm target precision",
    required:
      "Fictional identity, session, role, service function, destination, integration, data workflow, user group, or communication channel.",
    success:
      "The action targets the intended scope and identifies expected unaffected populations.",
    failureResponse:
      "Narrow the action or route the broad option through higher review.",
  },
  {
    step: "4. Confirm continuity",
    required:
      "Fictional critical workflows, users, alternates, accessibility, capacity, suppliers, dependencies, communication, and expected duration.",
    success:
      "Critical mission work can continue at an accepted level.",
    failureResponse:
      "Activate fallback, select a narrower option, or escalate the mission tradeoff.",
  },
  {
    step: "5. Execute the approved action",
    required:
      "Fictional executor, start time, action ID, selected option, scope version, dependencies, safety boundary, and communication.",
    success:
      "The action record shows exactly what was approved and initiated.",
    failureResponse:
      "Stop unapproved expansion and record unexpected behavior.",
  },
  {
    step: "6. Validate intended state",
    required:
      "Fictional source-side evidence, identity state, session state, service state, user effect, supplier state, data workflow, and monitoring.",
    success:
      "The expected state appears in Healthy or appropriately qualified evidence.",
    failureResponse:
      "Rollback, adjust, or escalate; do not treat completion as success.",
  },
  {
    step: "7. Validate side effects",
    required:
      "Fictional unaffected population, unrelated service functions, continuity, privacy, evidence, queues, dependencies, and recovery readiness.",
    success:
      "No unacceptable new impact is introduced.",
    failureResponse:
      "Use rollback or compensating controls and update scope and priority.",
  },
  {
    step: "8. Record residual risk",
    required:
      "Fictional unresolved cause, scope, evidence, identity, service, data, supplier, recovery, monitoring, owner, duration, and review trigger.",
    success:
      "Remaining risk is visible, owned, authorized, and time-bounded.",
    failureResponse:
      "Keep the decision open and escalate missing risk ownership.",
  },
  {
    step: "9. Monitor break conditions",
    required:
      "Fictional new session, new identity, service impact, source-health change, user report, supplier change, privacy concern, validation failure, or scope expansion.",
    success:
      "Break conditions trigger timely reassessment.",
    failureResponse:
      "Escalate or replace the containment when monitoring cannot support the decision.",
  },
  {
    step: "10. Expire, renew, replace, or transition",
    required:
      "Fictional expiration, review time, owner, recovery milestone, evidence state, continuity, risk decision, and communication.",
    success:
      "Temporary containment does not silently become permanent.",
    failureResponse:
      "Record containment debt and obtain authorized renewal or replacement.",
  },
];

const stagedPlan = [
  {
    stage: "Stage 0 — Observe and prepare",
    trigger:
      "Fictional scope is still developing and no supported active harm requires immediate action.",
    action:
      "Preserve evidence, confirm authority, monitor break conditions, contact owners, and prepare narrow options.",
    success:
      "Decision-ready evidence and owners are available without preventable delay.",
    transition:
      "Move to Stage 1 when active-risk or time-sensitivity criteria are met.",
  },
  {
    stage: "Stage 1 — Immediate narrow containment",
    trigger:
      "Fictional confirmed session, role, destination, workflow, or communication risk is time-sensitive.",
    action:
      "Apply the narrowest authorized control expected to reduce the defined risk.",
    success:
      "Targeted risk reduces and critical mission remains within accepted limits.",
    transition:
      "Move to Stage 2 for sustained control, broader scope, or unresolved cause.",
  },
  {
    stage: "Stage 2 — Short-term stabilization",
    trigger:
      "Fictional investigation, source recovery, supplier response, or recovery planning requires temporary sustained controls.",
    action:
      "Maintain scoped role, service-function, data, supplier, user-workflow, or communication controls with monitoring.",
    success:
      "Risk remains reduced, users have continuity, and evidence plus recovery work progress.",
    transition:
      "Move to Stage 3 when long-term containment or eradication planning is required.",
  },
  {
    stage: "Stage 3 — Long-term containment",
    trigger:
      "Fictional root cause cannot yet be removed safely or trusted recovery requires extended preparation.",
    action:
      "Use governed sustained controls, periodic validation, leadership risk acceptance, debt tracking, and replacement planning.",
    success:
      "Mission operates within accepted residual risk while recovery criteria mature.",
    transition:
      "Move to eradication and recovery when clean-state and restoration prerequisites exist.",
  },
  {
    stage: "Stage 4 — Transition to eradication and recovery",
    trigger:
      "Fictional root-cause evidence, recovery plan, owners, dependencies, clean-state criteria, validation, monitoring, rollback, and acceptance are ready.",
    action:
      "Preserve containment until trusted eradication and staged restoration demonstrate intended state.",
    success:
      "Containment can be removed or reduced without reopening active risk.",
    transition:
      "Rollback to an earlier stage when recovery validation fails.",
  },
];

const validationCases = [
  ["CONT-T01", "One confirmed session", "A fictional privileged session continues after approval expiration while the identity itself remains needed.", "Prefer scoped session containment over whole-identity disablement when authority and evidence support it.", "Narrowest effective action"],
  ["CONT-T02", "Blind data source", "Fictional data access is Unknown because the required source is Blind.", "Do not claim data containment success from missing evidence; use privacy controls, alternate evidence, and reassessment.", "Evidence honesty"],
  ["CONT-T03", "Critical service", "Fictional broad service shutdown would interrupt urgent support while one administrative function is the confirmed target.", "Compare function-level containment before whole-service interruption.", "Mission continuity"],
  ["CONT-T04", "No rollback", "A fictional service control cannot be safely reversed and its dependency effects are unknown.", "Do not call it temporary; escalate or select a more reversible option.", "Recoverability"],
  ["CONT-T05", "Supplier integration", "Fictional supplier delay may affect the service, but local evidence is incomplete.", "Use possible-scope review and bounded supplier options rather than automatic disconnection.", "Dependency accuracy"],
  ["CONT-T06", "Action completed", "A fictional operator reports the role restriction completed, but group and session sources remain Degraded.", "Keep containment validation Conditional until trustworthy evidence supports effective state.", "Outcome validation"],
  ["CONT-T07", "Continuity failure", "A fictional narrow identity action removes the only authorized recovery owner.", "Activate an approved alternate or revise the action before execution when time permits.", "Owner continuity"],
  ["CONT-T08", "Unexpected side effect", "A fictional administrative-function limit also blocks ordinary user submissions.", "Use rollback or revised targeting, update scope, and communicate the effect.", "Side-effect control"],
  ["CONT-T09", "Emergency action", "A fictional urgent session action occurs before normal approval completes.", "Document the emergency exception, authority basis, scope, validation, expiration, and independent review.", "Governed urgency"],
  ["CONT-T10", "Temporary control aging", "A fictional short-term role restriction remains for weeks without owner review.", "Create containment debt, require renewal or replacement, and connect it to recovery planning.", "Lifecycle governance"],
  ["CONT-T11", "Communication conflict", "Two fictional teams issue contradictory user guidance during containment.", "Use communication containment, one approved version, correction, and next-update ownership.", "Message integrity"],
  ["CONT-T12", "Public portfolio", "A student plans to adapt a real containment plan and system boundary diagram.", "Fail portfolio validation and invent every organization, system, role, action, dependency, and outcome.", "Confidentiality and safety"],
];

const containmentMetrics = [
  {
    metric: "Time to containment decision",
    question: "How long does fictional response take to compare evidence, authority, continuity, options, validation, and rollback?",
    evidence: "Decision request, scope version, source health, owner acknowledgement, approval time, urgency, and selected option.",
    limitation: "Faster decisions are not automatically better or safer.",
  },
  {
    metric: "Time to validated containment",
    question: "How long does fictional response take from approval to evidence-supported expected state?",
    evidence: "Approval, execution, source-side validation, service effect, user effect, supplier effect, and independent review.",
    limitation: "Action completion is not the same as validated outcome.",
  },
  {
    metric: "Narrow-action rate",
    question: "How often does fictional response select session, role, function, destination, data, supplier, or user-group controls before broader actions?",
    evidence: "Options considered, scope precision, selected target, affected population, and rationale.",
    limitation: "Narrow action is not always sufficient for broad active risk.",
  },
  {
    metric: "Containment side-effect rate",
    question: "How often do fictional actions create unexpected service, user, privacy, evidence, supplier, recovery, or dependency effects?",
    evidence: "Validation, user reports, continuity, source health, rollback, scope changes, and corrective actions.",
    limitation: "Some expected tradeoffs should not be counted as unexpected defects.",
  },
  {
    metric: "Rollback readiness",
    question: "What percentage of fictional containment actions have approved, evidence-supported, owned, and monitored rollback plans?",
    evidence: "Prior state, rollback criteria, authority, dependencies, validation, owner, and test record.",
    limitation: "A documented rollback may still fail under changed conditions.",
  },
  {
    metric: "Temporary-control aging",
    question: "How long do fictional immediate and short-term controls remain active before removal, renewal, replacement, or recovery transition?",
    evidence: "Start time, owner, expiration, review cadence, renewal, debt, recovery milestone, and residual risk.",
    limitation: "Long duration may be justified when recovery is complex.",
  },
  {
    metric: "Continuity performance",
    question: "Can fictional critical users and workflows complete essential tasks during containment?",
    evidence: "Completion rate, wait time, queue, accessibility, privacy, capacity, user reports, and owner acceptance.",
    limitation: "Continuity success does not prove technical risk is contained.",
  },
  {
    metric: "Residual-risk ownership",
    question: "Do fictional containment decisions assign remaining cause, scope, evidence, identity, service, data, supplier, recovery, and monitoring risk?",
    evidence: "Risk statement, owner, authority, duration, compensating controls, review date, and reopen trigger.",
    limitation: "Assigned ownership does not mean the risk is acceptable.",
  },
];

const evidenceMatrix = [
  ["CONT-E01", "Fictional role evidence", "Temporary recovery role remains Active after approval expiration.", "Role-level containment review is justified.", "Does not prove exercised authority or harmful intent.", "Compare role restriction with session-level options and continuity."],
  ["CONT-E02", "Fictional session evidence", "One confirmed session continues to the administrative destination.", "Session-specific containment may reduce immediate risk.", "Does not prove other sessions, data access, or service impact.", "Target the confirmed session and validate broader state separately."],
  ["CONT-E03", "Fictional service evidence", "Service remains available with no broad impact signal.", "Whole-service shutdown may be disproportionate at the current evidence state.", "Does not prove no limited, privacy, integrity, or authorization effect.", "Prefer narrow service-function options while keeping break conditions."],
  ["CONT-E04", "Fictional group-source health", "Group evidence is Degraded.", "Effective-access validation is limited.", "Does not prove role restriction succeeded or failed.", "Use Conditional validation, alternate evidence, and source recovery."],
  ["CONT-E05", "Fictional user report", "One user reports a delay.", "Continuity and side-effect review are necessary.", "Does not prove broad impact or causation.", "Monitor user effect and preserve alternate explanations."],
  ["CONT-E06", "Fictional supplier notice", "Supplier reports delayed responses.", "Supplier dependency may affect containment or continuity.", "Does not prove supplier caused the incident.", "Compare local fallback and bounded integration controls."],
  ["CONT-E07", "Fictional Blind data source", "Data-access evidence is unavailable during the key period.", "Privacy-focused containment and alternate evidence may be appropriate.", "Does not prove data was or was not accessed.", "Keep data conclusions Unknown and validate workflow state separately."],
  ["CONT-E08", "Fictional approved change", "Recovery change matches identity and purpose but not time or destination.", "A partial expected explanation exists.", "Does not justify excluding the confirmed session.", "Preserve the alternative while containing only the supported risk."],
];

const commonMistakes = [
  {
    mistake: "Containment is treated as punishment",
    observation: "A fictional team disables an entire identity because the alert appears serious.",
    impact: "Mission work, evidence, fairness, recovery, and unrelated access may be harmed.",
    correction: "Select the narrowest authorized action tied to the defined active risk.",
  },
  {
    mistake: "The broadest action is called safest",
    observation: "A fictional service is shut down even though one session or function is the confirmed target.",
    impact: "Critical users, suppliers, continuity, evidence, and recovery may be disrupted unnecessarily.",
    correction: "Compare session, role, function, destination, service, and continuity options before broad interruption.",
  },
  {
    mistake: "Containment and eradication are confused",
    observation: "A fictional temporary role restriction is described as removing the root cause.",
    impact: "Underlying lifecycle, architecture, approval, source, or governance problems remain hidden.",
    correction: "Document containment as risk reduction and transfer root-cause removal to eradication planning.",
  },
  {
    mistake: "Action completion becomes success",
    observation: "A fictional operator says the control was applied, but no source-side or user validation exists.",
    impact: "The intended state may not exist, or harmful side effects may go unnoticed.",
    correction: "Define expected state, independent validation, source health, and side-effect checks.",
  },
  {
    mistake: "Rollback is an afterthought",
    observation: "A fictional action is labeled temporary without a prior state, owner, criteria, dependencies, or approval path.",
    impact: "The team may be unable to restore safely when evidence or mission conditions change.",
    correction: "Design rollback before execution and validate its prerequisites.",
  },
  {
    mistake: "Continuity is reviewed after disruption",
    observation: "A fictional role or service is restricted before identifying critical users, owners, and alternate workflows.",
    impact: "Containment creates a second mission incident.",
    correction: "Review continuity, accessibility, capacity, alternate ownership, and communication before action when time permits.",
  },
  {
    mistake: "Missing evidence proves containment",
    observation: "A fictional source goes Blind after the action, and the team assumes the activity stopped.",
    impact: "Loss of visibility becomes false success.",
    correction: "Mark validation Conditional or Unknown and use alternate evidence plus source recovery.",
  },
  {
    mistake: "Emergency action has no lifecycle",
    observation: "A fictional urgent restriction has no expiration, independent review, renewal, or replacement.",
    impact: "Temporary exceptional control can become permanent and ungoverned.",
    correction: "Record authority, scope, validation, expiration, review, debt, and transition.",
  },
  {
    mistake: "Residual risk disappears from the record",
    observation: "A fictional decision says contained without naming unresolved cause, scope, evidence, data, supplier, or recovery gaps.",
    impact: "Leadership and recovery teams may assume the incident is resolved.",
    correction: "Create a residual-risk statement with owner, authority, duration, controls, review, and reopen trigger.",
  },
  {
    mistake: "Real containment information enters the portfolio",
    observation: "A student sanitizes a real access restriction, service boundary, supplier relationship, or rollback plan.",
    impact: "Sensitive architecture, authority, dependencies, response capability, and incident information may remain visible.",
    correction: "Invent every organization, identity, service, source, supplier, action, dependency, approval, and outcome.",
  },
];

const labSteps = [
  ["1", "Define the fictional containment mission", "Document critical services, users, data, identities, suppliers, dependencies, source health, continuity, privacy, evidence, and safety boundaries.", "Containment mission charter.", "Every organization, service, identity, source, supplier, action, and outcome is invented."],
  ["2", "State the active risk", "Describe the confirmed or possible fictional condition, scope, time sensitivity, impact, source health, and non-proof statements.", "Active-risk statement.", "The statement names the exact risk the action should reduce."],
  ["3", "Generate options", "Create fictional session, role, function, service, network-boundary, data, supplier, workflow, evidence, communication, and observation options.", "Containment option catalog.", "Options include both narrow and broad choices plus no-immediate-action when justified."],
  ["4", "Score twelve criteria", "Compare active-risk reduction, evidence, authority, scope, continuity, evidence preservation, privacy, supplier effect, reversibility, validation, duration, and residual risk.", "Containment decision matrix.", "Each score includes evidence and limitation rather than unsupported numbers."],
  ["5", "Assign authority and separation", "Document who recommends, approves, executes, validates, accepts mission effect, and accepts residual risk.", "Containment authority matrix.", "No one silently performs every high-impact role."],
  ["6", "Review continuity", "Identify fictional critical functions, users, owners, accessibility, capacity, dependencies, suppliers, data, evidence, recovery, and fallbacks.", "Continuity impact review.", "Critical mission work has an accepted path or explicit leadership decision."],
  ["7", "Design validation and rollback", "Define pre-action state, expected state, evidence sources, side-effect checks, source-health rules, rollback criteria, owners, and monitoring.", "Validation and rollback plan.", "Action completion cannot equal success without evidence."],
  ["8", "Stage the containment", "Create fictional observe, immediate, short-term, long-term, and recovery-transition stages with triggers and exit criteria.", "Staged containment plan.", "Each stage has owner, duration, expiration, communication, and residual risk."],
  ["9", "Run validation cases", "Test fictional session, Blind-source, critical-service, no-rollback, supplier, Conditional-validation, continuity, side-effect, emergency, aging, communication, and portfolio cases.", "Containment validation matrix.", "Cases test both risk reduction and unintended consequences."],
  ["10", "Prepare the portfolio package", "Combine mission, risk, scope, options, authority, continuity, evidence, decision, staged plan, validation, rollback, metrics, risk, leadership brief, and reflection.", "Public-safe Containment Strategy Package.", "No real system, identity, boundary, supplier, action, or incident detail appears."],
];

const quizQuestions = [
  {
    question: "What is the strongest general containment principle?",
    choices: [
      "Choose the broadest action available.",
      "Choose the narrowest authorized action expected to meaningfully reduce the defined current risk.",
      "Always wait until every fact is known.",
      "Containment should permanently fix the root cause.",
    ],
    answer: 1,
    explanation: "Professional containment balances meaningful risk reduction with evidence, authority, continuity, reversibility, and validation.",
  },
  {
    question: "One fictional privileged session is confirmed while the broader identity is still needed. Which option deserves comparison first?",
    choices: [
      "Disable every identity in the service.",
      "End or limit the confirmed session under identity-owner authority.",
      "Shut down the whole service.",
      "Ignore the session.",
    ],
    answer: 1,
    explanation: "Session-level containment may reduce the confirmed risk with a smaller blast radius.",
  },
  {
    question: "A fictional operator completed a role restriction, but the group source is Degraded. What is strongest?",
    choices: [
      "Declare containment successful.",
      "Keep validation Conditional and use alternate evidence plus source recovery.",
      "Delete the validation requirement.",
      "Assume the role restriction failed.",
    ],
    answer: 1,
    explanation: "Degraded evidence supports neither confident success nor confident failure.",
  },
  {
    question: "Why should continuity be reviewed before fictional containment when time permits?",
    choices: [
      "To avoid documenting the action.",
      "To prevent risk reduction from unnecessarily interrupting critical users, owners, dependencies, or recovery.",
      "To make containment slower.",
      "To remove the need for authorization.",
    ],
    answer: 1,
    explanation: "Containment can create a second mission problem when continuity is ignored.",
  },
  {
    question: "What makes a fictional rollback plan credible?",
    choices: [
      "The word temporary appears in the decision.",
      "Prior state, owner, authority, dependencies, criteria, validation, monitoring, and restoration gates are documented.",
      "The action is broad.",
      "The service owner is confident.",
    ],
    answer: 1,
    explanation: "Rollback must be a governed evidence-supported path, not an assumption.",
  },
  {
    question: "Which statement best distinguishes containment from eradication?",
    choices: [
      "They are identical.",
      "Containment reduces current risk; eradication removes the confirmed cause or condition.",
      "Containment always closes the incident.",
      "Eradication happens before detection.",
    ],
    answer: 1,
    explanation: "Containment stabilizes the situation while eradication and recovery address trusted long-term resolution.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real containment plan.",
      "Use a real network boundary with fake names.",
      "Invent every organization, identity, service, source, supplier, action, dependency, approval, and outcome.",
      "Use real rollback criteria without contacts.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real architecture, authority, dependencies, and response capabilities.",
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

export default function ContainmentStrategyPage() {
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
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Narrow Action, Authority, Continuity, Validation, and Rollback
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.4 Containment Strategy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional responders compare identity, session, service,
            network-boundary, data, supplier, user-workflow, evidence, and
            communication containment using authority, mission continuity,
            reversibility, validation, rollback, and residual-risk ownership.
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
          lessonTitle="Containment Strategy"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, identities, sessions, roles, services, destinations, data, users, suppliers, dependencies, sources, actions, approvals, decisions, and outcomes.",
            "I will distinguish fictional containment from eradication, recovery, punishment, and permanent redesign.",
            "I will compare narrow and broad fictional options using evidence, authority, continuity, privacy, evidence preservation, reversibility, validation, rollback, duration, and residual risk.",
            "I will not treat action completion, alert silence, or missing evidence as proof of successful containment.",
            "I will document fictional expected state, side effects, break conditions, expiration, emergency exceptions, owner acceptance, and transition to recovery.",
            "I will not access, copy, sanitize, upload, test, execute, direct, modify, isolate, disable, restrict, or investigate any real identity, session, service, supplier, system, network, data set, organization, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Fast Containment Action Can Create a Second Incident"
        >
          <p className="leading-8">
            Fictional Northbridge confirms one stale privileged session. The
            service still supports urgent student assistance, the group source
            is Degraded, and one supplier integration is delayed. A responder
            proposes shutting down the entire service because it feels safest.
            That action could interrupt users, erase decision-critical state,
            block recovery work, and create supplier backlogs even though a
            narrower session or administrative-function control may reduce the
            confirmed risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak strategy
              </p>
              <p className="mt-2 leading-7">
                “Use the broadest action so nothing can continue.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong strategy
              </p>
              <p className="mt-2 leading-7">
                “Choose the narrowest authorized action that meaningfully
                reduces the defined risk, then validate expected state and side
                effects.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Containment is a governed risk-reduction decision. It should protect
            the mission and preserve recovery options while reducing current
            danger.
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
          title="Containment Changes the Incident and the Mission"
        >
          <p className="leading-8">
            Every fictional containment action changes evidence, users,
            services, dependencies, communications, or recovery conditions.
            Identity restriction may affect ownership. Service isolation may
            affect critical users. Supplier limits may create queues. Data
            controls may protect privacy but delay approved work. The strongest
            decision therefore compares risk reduction with the impact created
            by the action itself.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Reduce defined risk",
                "The fictional action targets a supported current condition instead of reacting to vague fear.",
              ],
              [
                "Preserve mission and evidence",
                "The fictional action protects critical users, owners, sources, dependencies, privacy, and recovery paths.",
              ],
              [
                "Prove the result",
                "The fictional action has an expected state, independent validation, rollback, expiration, and residual-risk owner.",
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
          title="The C-O-N-T-A-I-N Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "C — Clarify current risk",
                "State the fictional active or time-sensitive risk, affected boundary, evidence, source health, uncertainty, and non-proof statements.",
              ],
              [
                "O — Options",
                "Generate fictional session, role, function, service, network, data, supplier, workflow, evidence, communication, and observation choices.",
              ],
              [
                "N — Narrow the target",
                "Prefer the smallest fictional identity, session, function, destination, service, data, supplier, or audience boundary that reduces risk.",
              ],
              [
                "T — Test authority and tradeoffs",
                "Confirm fictional decision rights, continuity, privacy, evidence preservation, dependencies, reversibility, and mission effect.",
              ],
              [
                "A — Authorize and act",
                "Record fictional approval, executor, scope version, start time, duration, emergency exception, and communication.",
              ],
              [
                "I — Inspect outcomes",
                "Validate fictional expected state, source health, user effect, service effect, side effects, break conditions, and residual risk.",
              ],
              [
                "N — Normalize or transition",
                "Expire, renew, replace, roll back, or transition fictional containment into eradication and recovery.",
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
              Decision-ready containment statement
            </p>
            <p className="mt-2 leading-7">
              Fictional Northbridge will end session NB-SES-881 under
              identity-owner authority because the session relationship and
              post-expiration timing are confirmed. The broader identity,
              service, supplier integration, and ordinary users remain
              unchanged. Success requires Healthy session evidence, service
              continuity, no unexpected sessions, and review of role and group
              state.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Containment Strategy"
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
          title="Separate Three Containment Phases"
        >
          <div className="grid gap-5">
            {containmentPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.phase}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Evidence needed", item.evidenceNeeded],
                    ["Typical duration", item.duration],
                    ["Fictional examples", item.examples],
                    ["Quality gate", item.qualityGate],
                    ["Failure pattern", item.failurePattern],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.phase}-${label}`}
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
          title="Compare Ten Containment Types"
        >
          <div className="grid gap-5">
            {containmentTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.type}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Defender question
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.defenderQuestion}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Required evidence", item.evidence],
                    ["Authority", item.authority],
                    ["Continuity review", item.continuity],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.type}-${label}`}
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
          title="Evaluate Twelve Decision Criteria"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionCriteria.map((item) => (
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
                    Weak use
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weakUse}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Compare Ten Fictional Containment Options"
        >
          <div className="grid gap-6">
            {optionMatrix.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.option}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-cyan-200">
                      Target: {item.target}
                    </p>
                  </div>

                  <span className="max-w-md rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold leading-6 text-emerald-100">
                    {item.recommendation}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Active risk", item.activeRisk],
                    ["Expected benefit", item.benefit],
                    ["Containment cost", item.cost],
                    ["Evidence effect", item.evidenceEffect],
                    ["Authority", item.authority],
                    ["Continuity", item.continuity],
                    ["Expected state", item.expectedState],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
                    ["Residual risk", item.residualRisk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.option}-${label}`}
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
          title="Assign Eight Containment Decision Paths"
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
                      {row.escalatesWhen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Review Eight Continuity Domains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {continuityReview.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Review
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.review}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Containment question
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.containmentQuestion}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Fallback
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.fallback}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Validation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.validation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Use a Ten-Step Validation and Rollback Plan"
        >
          <div className="grid gap-5">
            {validationPlan.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.step}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required record
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.required}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Success
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.success}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure response
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.failureResponse}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Build a Five-Stage Containment Plan"
        >
          <div className="grid gap-5">
            {stagedPlan.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.stage}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Trigger", item.trigger],
                    ["Fictional action", item.action],
                    ["Success", item.success],
                    ["Transition", item.transition],
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
          eyebrow="Instructional Section 9"
          title="Validate Twelve Containment Scenarios"
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
          eyebrow="Instructional Section 10"
          title="Measure Eight Containment Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {containmentMetrics.map((item) => (
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
                  <p className="mt-2 text-sm leading-6">
                    {item.limitation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Containment Architecture"
          title="Northbridge Risk-to-Containment Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches containment decision
            quality without real identities, systems, services, network rules,
            data stores, suppliers, incidents, or response actions.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                [
                  "Risk inputs",
                  "Active sessions, roles, service effects, data concerns, supplier conditions",
                ],
                [
                  "Evidence inputs",
                  "Scope, chronology, source health, relationships, alternatives, confidence",
                ],
                [
                  "Mission inputs",
                  "Critical users, owners, accessibility, continuity, deadlines, recovery",
                ],
                [
                  "Governance inputs",
                  "Authority, privacy, evidence preservation, approvals, risk thresholds",
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
                Fictional Containment Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  [
                    "Clarify",
                    "Current risk, scope, evidence, source health, urgency",
                  ],
                  [
                    "Generate",
                    "Session, role, function, service, data, supplier, workflow options",
                  ],
                  [
                    "Compare",
                    "Benefit, cost, authority, continuity, evidence, privacy",
                  ],
                  [
                    "Select",
                    "Narrowest effective authorized action",
                  ],
                  [
                    "Execute",
                    "Owner, start, scope version, duration, communication",
                  ],
                  [
                    "Validate",
                    "Expected state, side effects, source health, user effect",
                  ],
                  [
                    "Govern",
                    "Rollback, expiration, exception, residual risk, debt",
                  ],
                  [
                    "Transition",
                    "Renew, replace, remove, eradicate, recover, reopen",
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
                  "Operational output",
                  "Authorized action, owner, target, duration, expected state",
                ],
                [
                  "Quality output",
                  "Validation, side effects, rollback, monitoring, expiration",
                ],
                [
                  "Leadership output",
                  "Mission tradeoff, options, resources, residual risk, decisions",
                ],
                [
                  "Portfolio boundary",
                  "Fully fictional, privacy-safe, defensive, non-operational",
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
          title="Fake Northbridge Containment Decision Dashboard"
          subtitle="Fictional active risk, selected target, validation quality, continuity, rollback, temporary-control aging, and residual-risk ownership."
          metrics={[
            {
              label: "Current fictional containment stage",
              value: "Stage 1",
              note: "One scoped session is selected for immediate narrow containment while role, group, device, supplier, and data questions continue.",
            },
            {
              label: "Validation quality",
              value: "Conditional",
              note: "Session evidence is Healthy, but group evidence is Degraded and data-access evidence is Blind.",
            },
            {
              label: "Open fictional containment debt",
              value: "8",
              note: "Role state, group reconciliation, device linkage, supplier timing, data evidence, rollback review, expiration, and residual-risk authority remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Broad Containment Proposal Requires Leadership Review"
          severity="High"
          time="9:38 AM"
          source="Fake Northbridge Incident Coordination Console"
          details="A fictional proposal would pause the complete Student Assistance Coordination Service even though the confirmed target is one privileged session and one administrative destination. The service supports urgent student assistance, a supplier queue may form, and evidence-preservation review is incomplete."
          recommendation="Compare fictional session, role, and administrative-function controls first. Escalate whole-service interruption only when narrower authorized options cannot reduce the supported active risk."
        />

        <FakeLogPanel
          title="Fake Containment Decision Timeline"
          logs={[
            "09:24 SCOPE version='1.5'",
            "09:26 RISK target='NB-SES-881'",
            "09:27 OPTION session-close='candidate'",
            "09:28 OPTION role-restrict='candidate'",
            "09:29 OPTION function-limit='candidate'",
            "09:30 OPTION service-pause='high-cost'",
            "09:31 CONTINUITY critical-users='yes'",
            "09:32 EVIDENCE group='degraded'",
            "09:33 EVIDENCE data='blind'",
            "09:34 AUTHORITY identity-owner='available'",
            "09:35 ROLLBACK session='defined'",
            "09:36 EXPECTED-STATE session='closed'",
            "09:37 DECISION selected='session-close'",
            "09:38 ALERT broad-option='leadership-review'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Containment Evidence Supports—and What It Does Not Prove"
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
                      ["Containment use", use],
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
          title="Which Containment Decision Is Best Supported?"
          question="Which fictional immediate containment decision best fits the current Northbridge evidence?"
          evidence={[
            "One privileged session is confirmed after approval expiration.",
            "The session reached one administrative destination.",
            "The broader identity is still connected to recovery responsibilities.",
            "No broad service impact is confirmed.",
            "The group source is Degraded.",
            "The data-access source is Blind.",
            "The service supports urgent student assistance.",
            "Session-side validation and rollback are available.",
          ]}
          options={[
            "End the confirmed fictional session under identity-owner authority, preserve the broader identity and service, validate session and service state, keep role and group conclusions Conditional, and continue data and supplier review.",
            "Disable every identity and pause the entire service immediately.",
            "Take no action because the data source is Blind.",
            "Declare the incident eradicated after ending the session.",
          ]}
          bestAnswer={0}
          explanation="The first option targets the strongest confirmed active risk with the smallest supported blast radius while preserving continuity, evidence, validation, and unresolved scope."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Containment Strategy Errors"
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
          title="Build the Northbridge Containment Strategy Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, test, execute, direct, isolate, disable, restrict,
            alter, monitor, investigate, or modify any real identity, session,
            role, service, supplier, system, network, data set, organization, or
            person.
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
          title="One Confirmed Session, One Critical Service"
          scenario="Fictional Northbridge confirms that one privileged session continues after approval expiration. The broader identity supports recovery work, the service supports urgent student assistance, and no broad service impact is confirmed."
          choices={[
            {
              label: "Choice A",
              response: "End the confirmed fictional session under identity-owner authority, preserve the identity and service, validate the session and service state, and continue role, group, data, device, and supplier review.",
              outcome: "Best defensive choice. It reduces the strongest confirmed current risk with a narrow, reversible, evidence-supported action.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the entire identity and pause the service.",
              outcome: "Weak. The action is broader than the confirmed risk and may interrupt mission and evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Wait for every source to become Healthy before taking any action.",
              outcome: "Weak. Time-sensitive confirmed session risk may continue while unrelated evidence remains incomplete.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Containment Completed but Validation Is Conditional"
          scenario="A fictional operator restricts the temporary role. The role source shows Inactive, but the group source is Degraded and one earlier session is not yet reconciled."
          choices={[
            {
              label: "Choice A",
              response: "Record the action as completed but containment validation as Conditional, review session and alternate evidence, assign group-source recovery, preserve rollback, and keep break conditions active.",
              outcome: "Best choice. The record separates action status from evidence-supported outcome.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare containment successful because the role source changed.",
              outcome: "Weak. Effective access and prior sessions remain incompletely validated.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Assume the restriction failed because one source is Degraded.",
              outcome: "Weak. Degraded evidence does not prove failure either.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Containment Decision before a Mission and Risk Board"
        >
          <p className="leading-8">
            Fictional Northbridge has one confirmed privileged session, one
            administrative destination, a broader identity still needed for
            recovery, Degraded group evidence, Blind data evidence, a delayed
            supplier integration, one user-impact report, and a critical
            student-support service. The board wants to know why the whole
            service should not be paused immediately.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend the risk statement",
                "Explain the fictional confirmed session risk, possible role and data risk, current impact, source health, urgency, and non-proof statements.",
              ],
              [
                "Defend the option set",
                "Compare fictional session, role, administrative-function, service, supplier, data, workflow, evidence, communication, and monitoring options.",
              ],
              [
                "Defend the selected target",
                "Explain why the fictional target is the narrowest supported action expected to reduce the defined current risk.",
              ],
              [
                "Defend mission continuity",
                "Explain fictional critical users, owners, accessibility, suppliers, dependencies, alternate workflows, capacity, and communication.",
              ],
              [
                "Defend validation and rollback",
                "Explain fictional prior state, expected state, source health, side effects, break conditions, rollback, monitoring, and expiration.",
              ],
              [
                "Defend residual risk",
                "Explain fictional unresolved cause, scope, group state, data evidence, supplier effect, recovery, owner, authority, duration, and reopen triggers.",
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
              Produce a fictional active-risk statement, scope summary, ten
              containment options, twelve-criterion decision matrix, authority
              map, continuity review, evidence-preservation decision, selected
              action, expected state, staged plan, validation, side-effect
              review, rollback, expiration, emergency-exception record,
              residual-risk statement, containment-debt register, dashboard,
              leadership brief, recovery-transition criteria, and public
              portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Containment Strategy Checklist"
          items={[
            "I can distinguish fictional immediate, short-term, long-term, identity, session, service, network, data, supplier, communication, and continuity containment.",
            "I can distinguish fictional containment from eradication, recovery, punishment, and permanent redesign.",
            "I can state the exact fictional active risk that the selected action should reduce.",
            "I can generate narrow and broad fictional options rather than jumping to one response.",
            "I can compare fictional evidence, authority, scope, continuity, privacy, supplier, evidence-preservation, reversibility, validation, duration, and residual-risk criteria.",
            "I can choose the narrowest fictional authorized action expected to meaningfully reduce current risk.",
            "I can assign fictional recommendation, approval, execution, independent validation, mission-impact acceptance, and residual-risk acceptance.",
            "I can define fictional expected state, source-health requirements, side-effect checks, break conditions, monitoring, and owner acceptance.",
            "I can design fictional rollback before action and avoid calling an irreversible control temporary.",
            "I can prevent fictional emergency controls from becoming permanent through expiration, review, renewal, replacement, and debt tracking.",
            "I can communicate fictional containment as risk reduction with unresolved cause, scope, evidence, recovery, and residual risk.",
            "I can create a completely fictional containment artifact without exposing real identities, services, boundaries, suppliers, actions, dependencies, or response capabilities.",
          ]}
        />

        <MiniQuiz
          title="A7.4 Mini Quiz: Containment Strategy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Containment Strategy Package for the Northbridge Student-Support Cooperative. Include mission, critical services, users, identity model, data categories, suppliers, dependencies, source health, privacy boundary, safety boundary, active-risk statement, confirmed scope, possible scope, unknown scope, unaffected scope, exclusions, non-proof statements, immediate containment, short-term containment, long-term containment, identity containment, session containment, service containment, network-boundary containment, data containment, supplier containment, communication containment, continuity control, narrowest effective action, active harm, containment trigger, expected state, validation, rollback, reversibility, blast radius, containment cost, residual risk, expiration, emergency exception, containment debt, option catalog, session option, role option, administrative-function option, service option, supplier option, data-workflow option, alternate-user-workflow option, evidence-preservation option, communication option, monitored-observation option, active-risk reduction, evidence support, authority, scope precision, mission continuity, evidence preservation, privacy effect, supplier effect, reversibility, validation, duration, residual risk, recommendation owner, approval owner, executor, independent validator, mission-impact owner, risk-acceptance owner, escalation condition, critical functions, identity coverage, user population, service dependencies, supplier relationships, data effect, evidence effect, recovery dependency, fallback, pre-action state, authorization, target precision, continuity check, action record, intended-state validation, side-effect validation, residual-risk record, break-condition monitoring, expiration decision, observe stage, immediate stage, stabilization stage, long-term stage, eradication-and-recovery transition, validation cases, containment metrics, time to decision, time to validated containment, narrow-action rate, side-effect rate, rollback readiness, temporary-control aging, continuity performance, residual-risk ownership, containment dashboard, leadership brief, recovery-transition criteria, reflection, and a statement that every organization, identity, session, role, service, source, supplier, data category, dependency, action, approval, decision, date, and outcome is invented."
          tips={[
            "Start with the exact fictional risk and current scope rather than the emotional seriousness of the alert.",
            "Compare the fictional smallest target that can reduce risk with broader options and their mission effects.",
            "Separate fictional action completion from validated containment outcome.",
            "Give every fictional temporary control an owner, expiration, rollback, monitoring, debt, and recovery transition.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Eradication and Recovery Planning?"
        >
          <p className="leading-8">
            Before moving to A7.5, rate your readiness from 1 to 5 for
            containment phases, option generation, narrow targeting, authority,
            continuity, evidence preservation, privacy, supplier effect,
            expected state, validation, side effects, rollback, expiration,
            emergency exceptions, debt, residual risk, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional broad action is not automatically safest.",
              "I can compare fictional session, role, function, service, data, supplier, workflow, evidence, and communication options.",
              "I can choose a fictional narrow authorized action tied to a defined active risk.",
              "I can review fictional mission continuity before containment when time permits.",
              "I can separate fictional action completion from validated outcome.",
              "I can design fictional rollback, expiration, break conditions, and transition.",
              "I can record fictional residual risk and containment debt.",
              "I can produce a safe fictional containment package without adapting real response actions or boundaries.",
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
            Record one fictional active risk, one narrow option, one broad
            option, one continuity concern, one validation check, one rollback
            trigger, one residual-risk owner, and one question you will carry
            into A7.5.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional containment reduces current risk; it does not automatically eradicate the cause or complete recovery.",
            "Immediate, short-term, and long-term fictional containment require different evidence, authority, duration, review, and transition expectations.",
            "Session, role, function, service, network, data, supplier, user-workflow, evidence, and communication controls have different blast radii.",
            "The strongest general principle is to choose the narrowest authorized fictional action expected to meaningfully reduce the defined current risk.",
            "Containment decisions should compare evidence, authority, scope, continuity, privacy, evidence preservation, supplier effects, reversibility, validation, duration, and residual risk.",
            "Action completion is not successful containment until fictional expected state and unacceptable side effects are validated.",
            "Rollback should be designed before action and should include prior state, authority, dependencies, criteria, validation, monitoring, and restoration gates.",
            "Emergency fictional actions require documented authority, scope, validation, expiration, independent review, debt, and transition.",
            "Residual fictional cause, scope, evidence, identity, service, data, supplier, recovery, and monitoring risk must remain visible and owned.",
            "Every CyberShield containment artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real response capabilities.",
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
            Next, learn how fictional responders separate containment,
            eradication, restoration, validation, monitoring, and closure while
            defining root-cause evidence, clean-state criteria, staged recovery,
            owner acceptance, rollback, observation periods, and reopen
            triggers.
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