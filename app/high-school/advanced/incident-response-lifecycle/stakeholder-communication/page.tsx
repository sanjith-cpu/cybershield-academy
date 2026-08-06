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
const previousLesson = `${modulePath}/eradication-and-recovery-planning`;
const nextLesson = `${modulePath}/evidence-preservation-concepts`;

const objectives = [
  "Distinguish fictional analyst, technical-owner, service-owner, user, supplier, privacy, legal or policy, leadership, recovery, and public-safe communication needs without sending the same message to every audience.",
  "Create fictional incident updates that separate confirmed facts, supported conclusions, uncertainty, non-proof statements, impact, decisions, actions, owner needs, privacy boundaries, next steps, and next-update commitments.",
  "Design fictional communication governance using message ownership, approval, versioning, distribution, acknowledgements, corrections, confidentiality, escalation, archival, and expiration.",
  "Evaluate fictional messages for speculation, blame, excessive detail, hidden uncertainty, unsupported promises, inconsistent impact claims, privacy exposure, stale versions, and missing correction records.",
  "Create a portfolio-ready fictional Stakeholder Communication Package containing an audience map, message matrix, template library, approval workflow, update timeline, correction process, dashboard, leadership brief, validation cases, and reflection.",
];

const vocabulary = [
  ["Stakeholder", "A fictional person, role, team, supplier, user group, owner, leader, or reviewer who needs information or must make a response decision."],
  ["Audience need", "The fictional decision, action, reassurance, safety guidance, approval, coordination, or accountability information required by a specific audience."],
  ["Confirmed fact", "A fictional observation supported by sufficient evidence for the exact statement being made."],
  ["Supported conclusion", "A fictional interpretation that connects evidence to a bounded response question while preserving uncertainty and limitations."],
  ["Uncertainty", "A fictional known limitation involving scope, source health, timing, causation, impact, identity, data, supplier, recovery, or another unanswered question."],
  ["Non-proof statement", "A fictional statement describing what an alert, report, record, source condition, or relationship does not establish."],
  ["Impact statement", "A fictional evidence-supported description of who or what is affected, possibly affected, unaffected, unknown, excluded, or outside the current boundary."],
  ["Decision statement", "A fictional record of the question, options, evidence, authority, selected choice, rationale, conditions, validation, rollback, and review trigger."],
  ["Action statement", "A fictional description of an authorized response activity without exposing unnecessary internal detail."],
  ["Next-update commitment", "A fictional promise to provide the next approved update at a defined time or when a defined condition changes."],
  ["Message owner", "The fictional role accountable for drafting, coordinating, approving, distributing, correcting, archiving, and retiring a communication."],
  ["Approval workflow", "A fictional sequence of technical, incident, service, privacy, legal or policy, supplier, communications, and leadership review required before distribution."],
  ["Version", "A fictional identifier showing which message is current and how it differs from prior approved communications."],
  ["Distribution record", "A fictional log of audience, channel category, owner, approval, version, time, acknowledgement, and correction status."],
  ["Correction", "A fictional approved update that clearly identifies and replaces inaccurate, outdated, incomplete, or misleading information."],
  ["Retraction", "A fictional formal withdrawal of a message that should no longer be relied upon."],
  ["Acknowledgement", "A fictional record that a recipient or role received and understood a required communication or decision request."],
  ["Confidentiality boundary", "A fictional rule limiting information to the audience, purpose, detail, and duration necessary for the communication."],
  ["Need to know", "A fictional principle that shares only information required for the recipient's legitimate response or mission need."],
  ["Plain-language guidance", "A fictional message written so users can understand what happened, what they should do, what they should not do, and when they will hear more."],
  ["Holding statement", "A fictional brief approved message acknowledging that review is underway while facts, scope, impact, or decisions remain incomplete."],
  ["Situation report", "A fictional structured internal update covering facts, uncertainty, scope, impact, decisions, actions, needs, risks, and next update."],
  ["Leadership brief", "A fictional decision-focused communication describing mission effect, options, evidence, uncertainty, resources, authority, risk, and recommended decisions."],
  ["User advisory", "A fictional audience-specific message providing clear service status, safe guidance, limitations, support, and next-update information."],
  ["Supplier request", "A fictional purpose-limited communication asking an external provider for evidence, status, commitments, validation, or recovery support."],
  ["Communication debt", "Fictional unresolved work involving stale templates, missing approvals, conflicting messages, unacknowledged decisions, unclear ownership, absent corrections, or incomplete archives."],
];

const audienceProfiles = [
  {
    audience: "Incident analysts",
    primaryNeed: "Fictional evidence, hypotheses, source health, scope changes, unanswered questions, owner assignments, and decision deadlines.",
    include: "Evidence IDs, chronology, confidence, non-proof statements, source limitations, next evidence, and case references.",
    exclude: "Unsupported intent, blame, broad personal details, and irrelevant private information.",
    owner: "Incident lead or technical lead.",
    cadence: "Whenever decision-relevant evidence or scope changes.",
    success: "Analysts know the current facts, unknowns, owners, and next decisions.",
  },
  {
    audience: "Technical and identity owners",
    primaryNeed: "Fictional bounded technical questions, current state, required validation, authority, dependencies, rollback, and deadlines.",
    include: "Target entity, expected state, source health, evidence needed, action owner, validation, and break conditions.",
    exclude: "Unnecessary audience speculation or unrelated service detail.",
    owner: "Technical lead with incident coordination.",
    cadence: "At activation, decision points, containment, recovery gates, and validation failures.",
    success: "Owners can answer or act within documented authority.",
  },
  {
    audience: "Service and continuity owners",
    primaryNeed: "Fictional user impact, critical functions, capacity, alternate workflows, service state, dependency effects, expected duration, and recovery gates.",
    include: "Affected and possible populations, service limitations, continuity options, user guidance, validation, and next decision.",
    exclude: "Low-level evidence not needed for mission decisions.",
    owner: "Incident lead with service and continuity leads.",
    cadence: "At impact changes, containment, recovery waves, and user-guidance updates.",
    success: "Critical mission work and affected users have a coordinated path.",
  },
  {
    audience: "End users",
    primaryNeed: "Fictional clear service status, safe actions, actions to avoid, support path, privacy-respecting reassurance, and next update.",
    include: "What users may notice, what to do, what not to do, who can help, and when more information is expected.",
    exclude: "Internal architecture, identities, evidence sources, unconfirmed cause, blame, or sensitive investigative detail.",
    owner: "Communications lead with service and incident approval.",
    cadence: "When user action, service impact, correction, or recovery status changes.",
    success: "Users understand the current guidance without unnecessary fear or confusion.",
  },
  {
    audience: "Suppliers and partners",
    primaryNeed: "Fictional bounded request, affected dependency, relevant period, evidence or action needed, confidentiality, commitment time, and escalation path.",
    include: "Purpose, service relationship, requested records or validation, deadline, secure response category, and owner.",
    exclude: "Unnecessary internal systems, unrelated user details, or unsupported accusations.",
    owner: "Supplier owner with incident, service, and privacy review.",
    cadence: "At dependency activation, missed commitment, containment, recovery, and reconciliation.",
    success: "The supplier knows the exact request, deadline, owner, and confidentiality boundary.",
  },
  {
    audience: "Privacy and policy reviewers",
    primaryNeed: "Fictional data categories, purpose, affected population, evidence, source health, sharing, access, retention, communication, and unresolved privacy questions.",
    include: "Data scope, confirmed and unknown states, necessary recipients, message language, correction, and decision deadlines.",
    exclude: "Unnecessary personal details or unsupported exposure claims.",
    owner: "Privacy lead with incident coordination.",
    cadence: "When protected data, user communication, supplier sharing, retention, or source Blindness is relevant.",
    success: "Privacy decisions are evidence-based, purpose-limited, and recorded.",
  },
  {
    audience: "Legal or policy authority",
    primaryNeed: "Fictional policy threshold, documented facts, uncertainty, decision timing, preservation, communication, contractual or governance questions, and responsible owners.",
    include: "Verified timeline, current scope, impact, actions, approvals, obligations under the fictional policy framework, and next review.",
    exclude: "Speculative conclusions or unnecessary technical volume.",
    owner: "Incident lead with policy authority.",
    cadence: "At documented policy triggers and material decision changes.",
    success: "Required governance decisions occur without overstating legal conclusions.",
  },
  {
    audience: "Leadership",
    primaryNeed: "Fictional mission impact, current risk, confidence, options, decisions, resources, dependencies, user effect, recovery status, residual risk, and next decision time.",
    include: "One-page bounded summary, clear asks, tradeoffs, recommendation, owner, timing, and what could change the recommendation.",
    exclude: "Unfiltered logs, excessive detail, unsupported certainty, or technical jargon without decision relevance.",
    owner: "Incident lead with communications support.",
    cadence: "At activation, material scope or impact change, major containment, recovery gates, and closure readiness.",
    success: "Leadership can make the required decision within the available evidence and authority.",
  },
  {
    audience: "Recovery teams",
    primaryNeed: "Fictional clean-state gates, recovery waves, source health, dependencies, rollback, validation, acceptance, and break conditions.",
    include: "Wave scope, entry criteria, expected state, owners, monitoring, side effects, prior accepted state, and next decision.",
    exclude: "Stale instructions from earlier scope versions.",
    owner: "Recovery lead with incident and service approval.",
    cadence: "Before every wave, after validation, at freeze, rollback, expansion, and observation.",
    success: "Recovery teams act from the current approved wave and gates.",
  },
  {
    audience: "Public-safe portfolio readers",
    primaryNeed: "Fictional educational explanation of communication quality, evidence discipline, audience tailoring, corrections, and governance.",
    include: "Invented scenario, message structure, audience matrix, versioning, correction, lessons, and reflection.",
    exclude: "Any real organization, incident, identity, service, source, supplier, architecture, contact, decision, or response detail.",
    owner: "Student author with educator review.",
    cadence: "At portfolio publication and revision.",
    success: "The artifact teaches professional communication without exposing real information.",
  },
];

const messageElements = [
  {
    element: "Purpose",
    question: "Why does this fictional audience need this message now?",
    strong: "The message supports one clear decision, action, awareness, reassurance, coordination, or accountability need.",
    weak: "The update exists because the team always sends everything to everyone.",
  },
  {
    element: "Confirmed facts",
    question: "Which fictional observations can be stated with sufficient support?",
    strong: "Facts are bounded by entity, period, evidence, source health, and current scope.",
    weak: "Alert titles and assumptions are presented as facts.",
  },
  {
    element: "Supported conclusions",
    question: "Which fictional interpretation is justified by the current evidence?",
    strong: "The conclusion names confidence, evidence, limitations, and the exact question answered.",
    weak: "The message jumps from unusual activity to intent, cause, exposure, or complete impact.",
  },
  {
    element: "Uncertainty",
    question: "Which fictional scope, source, timing, impact, cause, data, supplier, or recovery questions remain unresolved?",
    strong: "Unknowns are explicit, owned, time-bounded, and linked to evidence requests.",
    weak: "Uncertainty is hidden to make the update sound confident.",
  },
  {
    element: "Non-proof statements",
    question: "What does the fictional evidence not establish?",
    strong: "The message prevents readers from assuming intent, broad impact, data access, complete scope, or trusted recovery.",
    weak: "The message lets ambiguous evidence sound conclusive.",
  },
  {
    element: "Impact",
    question: "Who or what is fictional confirmed affected, possibly affected, unaffected, unknown, excluded, or out of scope?",
    strong: "Impact is categorized, versioned, and separated from service relationships or dependencies.",
    weak: "Every related user, service, supplier, or data category is called affected.",
  },
  {
    element: "Decisions",
    question: "Which fictional decision was made, by whom, under what authority, and why?",
    strong: "The update names options, rationale, conditions, validation, rollback, and review trigger at the right level.",
    weak: "The action appears without authority or tradeoff context.",
  },
  {
    element: "Actions and guidance",
    question: "What should the fictional audience do, avoid, approve, review, or prepare?",
    strong: "Guidance is clear, safe, audience-specific, time-bounded, and owned.",
    weak: "Recipients must guess what the message means for them.",
  },
  {
    element: "Privacy and confidentiality",
    question: "Which fictional detail is necessary for this audience and purpose?",
    strong: "The message minimizes identities, data, architecture, suppliers, evidence, and internal procedures.",
    weak: "Urgency is used to justify sharing every detail.",
  },
  {
    element: "Next update",
    question: "When will the fictional audience receive another approved update?",
    strong: "The message gives a time or condition-based commitment and an owner.",
    weak: "The message ends with no expectation or says more soon without accountability.",
  },
];

const updateTypes = [
  {
    type: "Initial holding statement",
    purpose: "Acknowledge fictional review without overstating cause, scope, or impact.",
    audience: "Users, internal stakeholders, or leadership according to need.",
    required: "What is known, what is being reviewed, current guidance, support path, message owner, and next update.",
    approval: "Incident, service, communications, privacy, and policy review as applicable.",
    weakPattern: "Promising that no data or users are affected before evidence supports it.",
  },
  {
    type: "Internal situation report",
    purpose: "Coordinate fictional analysts and owners around current facts, scope, uncertainty, decisions, actions, and needs.",
    audience: "Incident, technical, service, continuity, privacy, supplier, evidence, and recovery roles.",
    required: "Version, time, facts, scope, impact, source health, decisions, actions, open questions, owners, deadlines, risks, and next update.",
    approval: "Incident lead with domain-owner review.",
    weakPattern: "A long unstructured message mixing facts, speculation, and old instructions.",
  },
  {
    type: "Leadership decision brief",
    purpose: "Request or record a fictional decision involving mission, resources, interruption, risk, policy, supplier, or public communication.",
    audience: "Leadership or documented risk authority.",
    required: "Decision needed, deadline, facts, uncertainty, mission impact, options, recommendation, consequences, owner, and review trigger.",
    approval: "Incident lead, relevant owner, communications, privacy, and policy reviewers.",
    weakPattern: "Providing status without a clear leadership question.",
  },
  {
    type: "Technical owner request",
    purpose: "Ask a fictional owner for bounded evidence, validation, action, or approval.",
    audience: "Identity, service, infrastructure, data, source, monitoring, or recovery owner.",
    required: "Question, target, evidence needed, purpose, source-health concern, deadline, decision consequence, and acknowledgement.",
    approval: "Technical or incident lead.",
    weakPattern: "Saying investigate everything with no bounded question.",
  },
  {
    type: "User advisory",
    purpose: "Give fictional users clear service and safety guidance.",
    audience: "Affected, possibly affected, or broader user groups according to need.",
    required: "What users may notice, what to do, what not to do, support path, current limitations, privacy-respecting reassurance, and next update.",
    approval: "Service, communications, incident, privacy, and policy review as needed.",
    weakPattern: "Including internal architecture or telling users the issue is resolved before validation.",
  },
  {
    type: "Supplier coordination request",
    purpose: "Obtain fictional evidence, status, commitment, containment, validation, or recovery support from a provider.",
    audience: "Named supplier owner and approved provider contact role.",
    required: "Purpose, affected dependency, relevant period, bounded request, confidentiality, deadline, escalation, and acknowledgement.",
    approval: "Supplier owner, incident lead, service owner, privacy reviewer, and policy authority as applicable.",
    weakPattern: "Sending broad internal incident detail or unsupported blame.",
  },
  {
    type: "Recovery wave update",
    purpose: "Coordinate fictional entry, validation, rollback, expansion, freeze, or observation decisions.",
    audience: "Recovery, technical, service, continuity, privacy, supplier, monitoring, and leadership roles.",
    required: "Wave, scope, gates, source health, results, side effects, owner acceptance, rollback status, residual risk, and next decision.",
    approval: "Recovery lead with required domain owners.",
    weakPattern: "Announcing recovered because the service responds.",
  },
  {
    type: "Correction or retraction",
    purpose: "Replace fictional inaccurate, incomplete, outdated, or misleading communication.",
    audience: "Every audience that received or relied upon the affected message.",
    required: "Prior version, incorrect statement, corrected statement, current evidence, effect on guidance or decisions, owner, and next update.",
    approval: "Original approval roles plus incident and communications leads.",
    weakPattern: "Quietly editing a message without acknowledging the change.",
  },
  {
    type: "Closure-readiness update",
    purpose: "Explain whether fictional technical, business, privacy, source, communication, corrective-action, observation, and risk gates support closure.",
    audience: "Incident authority, owners, leadership, and relevant reviewers.",
    required: "What is complete, what remains, acceptance, residual risk, debt, reopen triggers, corrective actions, archive, and decision request.",
    approval: "Incident lead and closure authority with domain reviewers.",
    weakPattern: "Calling the incident closed because alerts stopped.",
  },
];

const approvalMatrix = [
  {
    message: "Internal analyst update",
    drafts: "Technical analyst or incident lead",
    reviews: "Relevant technical, source, or evidence owners",
    approves: "Incident lead",
    distributes: "Case communications owner",
    acknowledges: "Assigned responders and decision owners",
    correctionOwner: "Incident lead",
  },
  {
    message: "Technical owner request",
    drafts: "Technical lead or analyst",
    reviews: "Incident lead and affected domain owner",
    approves: "Incident or technical lead",
    distributes: "Case communications owner",
    acknowledges: "Requested owner or authorized alternate",
    correctionOwner: "Technical lead",
  },
  {
    message: "Service and continuity update",
    drafts: "Service or continuity lead",
    reviews: "Incident, technical, communications, and user-support owners",
    approves: "Incident and service leads",
    distributes: "Service communications owner",
    acknowledges: "Continuity, support, and affected operational owners",
    correctionOwner: "Service lead",
  },
  {
    message: "User advisory",
    drafts: "Communications lead",
    reviews: "Incident, service, privacy, policy, accessibility, and support reviewers",
    approves: "Authorized communications and service owners",
    distributes: "Approved user-communication channel owner",
    acknowledges: "Support teams and accountable user-service owners",
    correctionOwner: "Communications lead",
  },
  {
    message: "Supplier request",
    drafts: "Supplier relationship owner",
    reviews: "Incident, service, technical, privacy, data, and policy owners",
    approves: "Supplier owner within delegated authority",
    distributes: "Approved supplier-contact owner",
    acknowledges: "Supplier role and local decision owner",
    correctionOwner: "Supplier owner",
  },
  {
    message: "Privacy or policy update",
    drafts: "Privacy or policy reviewer",
    reviews: "Incident, data, service, communications, and evidence owners",
    approves: "Documented privacy or policy authority",
    distributes: "Approved confidential channel owner",
    acknowledges: "Required decision and action owners",
    correctionOwner: "Privacy or policy authority",
  },
  {
    message: "Leadership brief",
    drafts: "Incident lead",
    reviews: "Technical, service, continuity, privacy, supplier, recovery, communications, and risk owners",
    approves: "Incident lead or documented executive-communications authority",
    distributes: "Executive communications owner",
    acknowledges: "Decision authority and action owners",
    correctionOwner: "Incident lead",
  },
  {
    message: "Recovery wave update",
    drafts: "Recovery lead",
    reviews: "Technical, service, data, privacy, supplier, continuity, monitoring, and incident owners",
    approves: "Recovery and incident leads",
    distributes: "Recovery communications owner",
    acknowledges: "Wave owners, validators, and acceptance authorities",
    correctionOwner: "Recovery lead",
  },
  {
    message: "Correction or retraction",
    drafts: "Original message owner",
    reviews: "Original reviewers plus incident and communications leads",
    approves: "Original approval authority or documented alternate",
    distributes: "Same audience and channels as the affected version",
    acknowledges: "Decision owners affected by the correction",
    correctionOwner: "Incident communications owner",
  },
];

const messageLibrary = [
  {
    name: "Fictional initial holding statement",
    sample:
      "Northbridge is reviewing an issue affecting the Student Assistance Coordination Service. One administrative session is confirmed within the current review scope. Broader user impact and protected-data access are not confirmed. Users should continue using the published support process unless they receive different guidance. The next approved update will be provided at 11:30 AM or sooner if user guidance changes.",
    strongestFeature: "Acknowledges review while separating one confirmed fact from unresolved impact.",
    missingRisk: "Must be updated if user action, scope, service effect, or privacy evidence changes.",
  },
  {
    name: "Fictional analyst situation report",
    sample:
      "Version 1.5 confirms identity NB-ID-042, session NB-SES-881, service NB-SVC-07, and destination coordination-admin. Device and supplier relationships remain possible. Protected-data access is Unknown because the required source is Blind. Session containment is validated; role and group state remain Conditional. Owners and next evidence are recorded in the case.",
    strongestFeature: "Uses categories, source health, decision status, and current version.",
    missingRisk: "Analysts still need exact deadlines and links to the fictional evidence register.",
  },
  {
    name: "Fictional technical owner request",
    sample:
      "Please determine whether the recovery-admin group provided effective access to NB-ID-042 between 09:00 and 09:10. The group source is Degraded, so identify available alternate evidence and state what the evidence supports and does not prove. A decision-ready response is needed by 10:20 because identity recovery Wave 1 depends on this question.",
    strongestFeature: "Provides a bounded question, source-health limitation, deadline, and decision consequence.",
    missingRisk: "The owner must acknowledge or an alternate must be activated.",
  },
  {
    name: "Fictional user advisory",
    sample:
      "Some users may experience delays in the Student Assistance Coordination Service. Continue using the service for urgent support and use the published alternate process if a submission does not complete. Do not resend the same request repeatedly. No broad service interruption is currently confirmed. Support teams will provide another update at noon.",
    strongestFeature: "Uses plain language and gives concrete, non-alarming guidance.",
    missingRisk: "Accessibility and alternate-process capacity must be validated.",
  },
  {
    name: "Fictional supplier request",
    sample:
      "Northbridge requests a status and evidence update for integration NB-SUP-03 from 09:00 to 10:30. Please confirm service state, known delays, queue behavior, data replay or duplication concerns, and expected recovery timing. This request is limited to the Student Assistance Coordination dependency. Acknowledgement is requested by 10:45.",
    strongestFeature: "Uses a purpose-limited request, defined period, bounded fields, and acknowledgement deadline.",
    missingRisk: "Privacy and approved response-channel requirements must remain visible.",
  },
  {
    name: "Fictional leadership brief",
    sample:
      "One stale privileged session is confirmed and contained. No broad service impact is confirmed. Identity recovery is Conditional because group evidence is Degraded; protected-data access is Unknown because one source is Blind; supplier backlog remains unreconciled. The recommended decision is to keep recovery at Wave 1 until four gates pass or receive explicit risk acceptance for a narrower exception.",
    strongestFeature: "Summarizes mission, evidence, uncertainty, recommendation, and decision need.",
    missingRisk: "The decision deadline and consequence of delay should be stated.",
  },
  {
    name: "Fictional recovery update",
    sample:
      "Recovery remains at Wave 1 Conditional. Identity and session canary preparation passes. Group, protected-data, supplier-queue, and critical-user gates remain incomplete. No expansion is authorized. Rollback remains available, containment continues, and the next recovery review occurs at 11:45.",
    strongestFeature: "Separates passing and failing gates and prevents stale instructions.",
    missingRisk: "Each incomplete gate should have a named owner and deadline.",
  },
  {
    name: "Fictional correction notice",
    sample:
      "Correction to Update 2.1: The prior message stated that protected-data access was not affected. That statement was not supported because the required source is Blind for part of the relevant period. The correct current status is Unknown. User guidance is unchanged. Privacy and source owners are reviewing alternate evidence, and the next update is due at 12:15.",
    strongestFeature: "Names the previous error, corrected status, evidence reason, guidance effect, owners, and next update.",
    missingRisk: "Every recipient of Update 2.1 must receive or acknowledge the correction.",
  },
];

const communicationTimeline = [
  {
    time: "09:00",
    event: "Fictional incident coordination activates.",
    audience: "Incident and technical owners.",
    message: "Initial situation report with alert facts, source health, bounded questions, owner assignments, and next review.",
    approval: "Incident lead.",
    nextCommitment: "Update when session relationship is confirmed or at 09:20.",
  },
  {
    time: "09:08",
    event: "Fictional session relationship is confirmed.",
    audience: "Identity, service, incident, and continuity owners.",
    message: "Technical decision request for scoped session containment and mission-effect review.",
    approval: "Incident and identity leads.",
    nextCommitment: "Containment result by 09:35.",
  },
  {
    time: "09:15",
    event: "One fictional user reports delay.",
    audience: "Service, continuity, support, and communications owners.",
    message: "Possible user-impact update; no broad impact claim.",
    approval: "Service and incident leads.",
    nextCommitment: "User guidance decision at 09:30.",
  },
  {
    time: "09:20",
    event: "Fictional supplier reports integration delay.",
    audience: "Supplier, service, privacy, incident, and recovery owners.",
    message: "Purpose-limited supplier evidence request and commitment deadline.",
    approval: "Supplier owner.",
    nextCommitment: "Supplier acknowledgement by 09:45.",
  },
  {
    time: "09:24",
    event: "Fictional data-access source becomes Blind.",
    audience: "Privacy, data, incident, leadership, and communications owners.",
    message: "Protected-data status changed to Unknown; prior absence claims prohibited.",
    approval: "Incident and privacy leads.",
    nextCommitment: "Alternate-evidence status at 10:15.",
  },
  {
    time: "09:38",
    event: "Fictional scoped session containment validates.",
    audience: "Incident, technical, service, continuity, recovery, and leadership owners.",
    message: "Containment result, remaining uncertainty, service status, and recovery prerequisites.",
    approval: "Incident lead.",
    nextCommitment: "Recovery-readiness review at 10:30.",
  },
  {
    time: "10:05",
    event: "Fictional user advisory is approved.",
    audience: "Affected service users and support teams.",
    message: "Plain-language service guidance, alternate process, support, and next update.",
    approval: "Communications and service owners.",
    nextCommitment: "User update at noon or sooner if guidance changes.",
  },
  {
    time: "10:20",
    event: "Fictional group evidence remains Degraded.",
    audience: "Identity, incident, recovery, and leadership owners.",
    message: "Identity recovery remains Conditional; owner and source-recovery deadlines recorded.",
    approval: "Incident and identity leads.",
    nextCommitment: "Source review at 11:00.",
  },
  {
    time: "10:45",
    event: "Fictional supplier misses acknowledgement deadline.",
    audience: "Supplier escalation owner, service owner, incident lead, and leadership.",
    message: "Missed commitment, local fallback, decision impact, new deadline, and escalation.",
    approval: "Supplier and incident leads.",
    nextCommitment: "Escalation outcome at 11:15.",
  },
  {
    time: "11:05",
    event: "A fictional inaccurate data-status statement is discovered.",
    audience: "Every audience that received Update 2.1.",
    message: "Correction changes protected-data status from unaffected to Unknown.",
    approval: "Incident, privacy, and communications leads.",
    nextCommitment: "Acknowledgement review by 11:30.",
  },
  {
    time: "11:18",
    event: "Fictional recovery expansion is blocked.",
    audience: "Recovery, service, technical, privacy, supplier, continuity, and leadership roles.",
    message: "Wave 1 remains Conditional; four gates remain incomplete; no expansion authorized.",
    approval: "Recovery and incident leads.",
    nextCommitment: "Next recovery decision at 11:45.",
  },
  {
    time: "12:00",
    event: "Fictional user guidance remains unchanged.",
    audience: "Service users and support teams.",
    message: "Current status, confirmed guidance, service limitations, support path, and next update.",
    approval: "Communications and service owners.",
    nextCommitment: "Next update at 2:00 PM or upon meaningful service change.",
  },
];

const correctionProcess = [
  {
    step: "1. Detect the communication problem",
    question: "Which fictional statement, version, audience, decision, or guidance is inaccurate, incomplete, outdated, misleading, or unsupported?",
    record: "Affected message ID, version, statement, discovery time, reporter, recipients, and decision effect.",
    qualityGate: "The exact communication defect is identified rather than vaguely described.",
  },
  {
    step: "2. Preserve the prior version",
    question: "Can fictional reviewers reconstruct what recipients received and when?",
    record: "Original approved version, distribution, acknowledgements, attachments, approval, and archive reference.",
    qualityGate: "The correction does not silently overwrite history.",
  },
  {
    step: "3. Establish the current evidence",
    question: "Which fictional facts, conclusions, source-health conditions, uncertainties, and non-proof statements support the correction?",
    record: "Evidence IDs, source health, scope version, owner review, confidence, and limitations.",
    qualityGate: "The corrected statement is evidence-supported.",
  },
  {
    step: "4. Assess decision and guidance impact",
    question: "Did the fictional defect change containment, recovery, user action, supplier coordination, privacy, leadership, risk, or closure decisions?",
    record: "Affected decisions, audiences, actions, owners, deadlines, and required reversals or reviews.",
    qualityGate: "Consequences are addressed rather than only the wording.",
  },
  {
    step: "5. Draft the correction",
    question: "Does the fictional correction clearly state what was wrong, what is correct, why, what changes, and what remains the same?",
    record: "Correction text, replaced version, new version, audience, confidentiality, and next update.",
    qualityGate: "Recipients do not need to compare multiple messages to discover the difference.",
  },
  {
    step: "6. Review and approve",
    question: "Which fictional incident, technical, service, privacy, policy, communications, supplier, recovery, or leadership roles must review?",
    record: "Reviewer, decision, conditions, approval time, authority, and unresolved concerns.",
    qualityGate: "The correction receives at least the review required for the original message.",
  },
  {
    step: "7. Redistribute to affected audiences",
    question: "Did every fictional audience and decision owner who received or relied on the old message receive the correction?",
    record: "Channels, recipients, distribution time, delivery status, and acknowledgement requirement.",
    qualityGate: "Distribution matches the impact of the original message.",
  },
  {
    step: "8. Obtain acknowledgement",
    question: "Which fictional owners must confirm they understand the correction and have adjusted decisions or actions?",
    record: "Acknowledgement, owner, time, changed action, escalation, and unresolved issue.",
    qualityGate: "High-impact corrections are not treated as complete upon sending.",
  },
  {
    step: "9. Update connected records",
    question: "Which fictional case notes, scope statements, dashboards, decisions, playbooks, user guidance, recovery gates, or leadership briefs must change?",
    record: "Updated record, version, owner, validation, and audit link.",
    qualityGate: "The correction reaches every decision artifact, not only the communication log.",
  },
  {
    step: "10. Review the process gap",
    question: "Why did the fictional communication defect occur, and what prevents recurrence?",
    record: "Contributing conditions, template issue, approval gap, source-health gap, owner, corrective action, due date, validation, and exercise.",
    qualityGate: "The correction produces program learning rather than blame.",
  },
];

const validationCases = [
  ["COMM-T01", "Alert uncertainty", "A fictional alert exists, but scope and impact are incomplete.", "Use a holding statement that separates review from confirmation.", "Uncertainty integrity"],
  ["COMM-T02", "Blind data source", "A fictional source is Blind, and no data alert exists.", "State data status as Unknown rather than unaffected.", "Source-health honesty"],
  ["COMM-T03", "One user report", "One fictional user reports delay.", "Describe possible limited impact without claiming broad disruption.", "Impact accuracy"],
  ["COMM-T04", "Supplier request", "A fictional provider is a dependency but not a confirmed cause.", "Request bounded evidence without blame or excessive internal detail.", "Supplier fairness"],
  ["COMM-T05", "Leadership decision", "A fictional broad service pause requires approval.", "Present decision, deadline, evidence, uncertainty, mission effect, options, recommendation, and consequences.", "Decision usefulness"],
  ["COMM-T06", "Technical owner", "A fictional identity owner receives investigate this request.", "Replace it with a bounded question, evidence need, deadline, source-health note, and decision consequence.", "Action clarity"],
  ["COMM-T07", "User advisory", "Fictional users need an alternate workflow.", "Provide plain-language status, safe guidance, support, limitations, and next update.", "User safety"],
  ["COMM-T08", "Conflicting messages", "Two fictional teams publish different impact statements.", "Pause unapproved distribution, assign one message owner, reconcile evidence, correct, version, and redistribute.", "Message consistency"],
  ["COMM-T09", "Quiet edit", "A fictional inaccurate statement is changed without a correction notice.", "Preserve the prior version and issue an explicit correction to affected recipients.", "Auditability"],
  ["COMM-T10", "Recovery claim", "A fictional service responds, but clean-state gates remain incomplete.", "Say restoration is Conditional and name the incomplete gates.", "Recovery accuracy"],
  ["COMM-T11", "Missed next update", "A fictional promised update time passes without new facts.", "Send an approved status update acknowledging that review continues and provide a new commitment.", "Reliability"],
  ["COMM-T12", "Public portfolio", "A student plans to sanitize a real incident email chain.", "Fail portfolio validation and invent every organization, audience, event, message, owner, and outcome.", "Confidentiality and safety"],
];

const communicationMetrics = [
  {
    metric: "Time to first approved update",
    question: "How long does fictional response take to provide an accurate audience-appropriate initial message?",
    evidence: "Activation time, draft time, approvals, distribution, source health, audience, and next-update commitment.",
    limitation: "Faster communication can still be inaccurate or harmful.",
  },
  {
    metric: "Update commitment reliability",
    question: "What percentage of fictional next-update commitments are met or formally reset?",
    evidence: "Commitment time, actual update, owner, reason, correction, and acknowledgement.",
    limitation: "Meeting a time does not prove the update was useful.",
  },
  {
    metric: "Correction rate",
    question: "How often do fictional messages require correction because of unsupported, stale, incomplete, or conflicting information?",
    evidence: "Prior version, defect, source health, approval path, correction time, affected decisions, and recurrence action.",
    limitation: "A healthy correction culture may initially raise the reported rate.",
  },
  {
    metric: "Correction completion time",
    question: "How long does fictional response take to identify, approve, redistribute, acknowledge, and propagate a correction?",
    evidence: "Discovery, approval, distribution, acknowledgement, connected-record updates, and closure.",
    limitation: "Simple wording corrections differ from high-impact decision corrections.",
  },
  {
    metric: "Audience acknowledgement",
    question: "Do fictional high-impact recipients confirm receipt and understanding of decisions, guidance, corrections, and recovery gates?",
    evidence: "Recipient role, message version, acknowledgement, action, owner, deadline, and escalation.",
    limitation: "Acknowledgement does not prove correct execution.",
  },
  {
    metric: "Conflicting-message incidents",
    question: "How often do fictional audiences receive incompatible facts, impact statements, guidance, or decisions?",
    evidence: "Message versions, owners, channels, evidence, approval, correction, and affected actions.",
    limitation: "Different audience detail is not automatically a conflict.",
  },
  {
    metric: "Privacy-minimization quality",
    question: "Do fictional messages share only the identities, data, architecture, evidence, supplier, and incident detail required for the purpose?",
    evidence: "Audience need, fields shared, recipients, approval, retention, correction, and privacy review.",
    limitation: "Minimal detail must still support the recipient's decision.",
  },
  {
    metric: "Communication-debt aging",
    question: "How long do fictional stale templates, unclear owners, missing approvals, unacknowledged corrections, or incomplete archives remain open?",
    evidence: "Debt item, owner, mission effect, risk, due date, dependency, validation, and escalation.",
    limitation: "Some long-lived work may be formally accepted and monitored.",
  },
];

const evidenceMatrix = [
  ["COMM-E01", "Fictional session evidence", "One privileged session is confirmed after approval expiration.", "A bounded technical and leadership update can state the session relationship.", "Does not prove harmful intent, data access, broad impact, or complete scope.", "Use the fact with a non-proof statement and current containment status."],
  ["COMM-E02", "Fictional service-health evidence", "The service remains available with no broad error increase.", "No broad active disruption is currently confirmed.", "Does not prove no limited-user, privacy, integrity, authorization, or historical effect.", "Use cautious service-status language rather than saying unaffected."],
  ["COMM-E03", "Fictional user report", "One staff user reports delay.", "Possible limited user impact deserves review and support guidance.", "Does not prove organization-wide disruption or cause.", "State one report and avoid population-wide claims."],
  ["COMM-E04", "Fictional supplier notice", "A supplier reports delayed integration responses.", "A dependency and possible alternative explanation exist.", "Does not prove the supplier caused the incident.", "Send a bounded evidence request without blame."],
  ["COMM-E05", "Fictional group-source health", "Group evidence is Degraded.", "Identity and recovery conclusions must remain qualified.", "Does not prove the group state was safe or unsafe at every moment.", "State Conditional status and the owner plus next evidence."],
  ["COMM-E06", "Fictional data-source health", "The data-access source is Blind for part of the relevant period.", "Protected-data access remains Unknown.", "Does not prove access or no access.", "Prohibit unaffected claims and explain alternate-evidence review."],
  ["COMM-E07", "Fictional containment validation", "The confirmed session is Closed and service continuity remains stable.", "The selected containment achieved its session-level expected state.", "Does not prove eradication, complete identity cleanup, or trusted recovery.", "Communicate session-level success with remaining obligations."],
  ["COMM-E08", "Fictional recovery dashboard", "Seven of ten clean-state gates pass; four decision areas remain incomplete.", "Recovery expansion should remain Conditional.", "Does not prove all failed gates have equal mission effect.", "Summarize the blocked decision, owners, consequences, and next review."],
];

const commonMistakes = [
  {
    mistake: "Every audience receives the same message",
    observation: "Fictional users receive analyst evidence details while analysts receive vague user-facing language.",
    impact: "Users may be confused or exposed to unnecessary information, while responders lack decision detail.",
    correction: "Map each audience to its decision, action, reassurance, coordination, or accountability need.",
  },
  {
    mistake: "Alert language becomes confirmed fact",
    observation: "A fictional message repeats the alert title as though cause, intent, impact, and scope are proven.",
    impact: "Speculation becomes institutional memory and may drive inappropriate response.",
    correction: "Separate observation, supported conclusion, uncertainty, and non-proof statements.",
  },
  {
    mistake: "Uncertainty is hidden",
    observation: "A fictional update omits Blind sources and unresolved data or supplier questions to sound confident.",
    impact: "Recipients may make decisions from false certainty.",
    correction: "State meaningful uncertainty, owner, evidence need, decision effect, and next review.",
  },
  {
    mistake: "One report becomes broad impact",
    observation: "A fictional user advisory says all users are affected after one delay report.",
    impact: "The message may create unnecessary concern and misdirect resources.",
    correction: "Use confirmed, possible, unknown, unaffected, excluded, and out-of-scope impact categories.",
  },
  {
    mistake: "Technical detail replaces guidance",
    observation: "A fictional user message contains internal identifiers, source states, and architecture but no clear action.",
    impact: "Users cannot understand what to do and sensitive details may spread.",
    correction: "Use plain language, safe guidance, support, limitations, and next update.",
  },
  {
    mistake: "Leadership receives status without a decision",
    observation: "A fictional long briefing lists facts but does not name the decision, deadline, options, recommendation, or consequence.",
    impact: "Leadership cannot act within the required time.",
    correction: "Lead with the bounded decision and mission tradeoff.",
  },
  {
    mistake: "Supplier communication assigns blame",
    observation: "A fictional request accuses a provider before causation is supported.",
    impact: "Cooperation, evidence quality, fairness, and contractual coordination may suffer.",
    correction: "Ask purpose-limited questions and separate dependency, observation, and causation.",
  },
  {
    mistake: "A message is quietly edited",
    observation: "A fictional inaccurate data-status sentence changes without a correction record.",
    impact: "Recipients may continue relying on the old version and the case loses auditability.",
    correction: "Preserve the original, issue an explicit correction, redistribute, acknowledge, and update connected records.",
  },
  {
    mistake: "Next update means more soon",
    observation: "A fictional message provides no time, condition, or owner for the next update.",
    impact: "Recipients repeatedly ask for status or assume the response has stalled.",
    correction: "Provide a time or condition-based commitment and reset it transparently when needed.",
  },
  {
    mistake: "Real incident messages enter the portfolio",
    observation: "A student sanitizes a real email, chat, executive brief, user advisory, supplier request, or correction.",
    impact: "Sensitive identities, systems, decisions, timelines, authority, and incident details may remain identifiable.",
    correction: "Invent every organization, audience, event, message, source, owner, approval, decision, date, and outcome.",
  },
];

const labSteps = [
  ["1", "Define the fictional communication mission", "Document audiences, decisions, actions, user needs, privacy, confidentiality, approvals, channels, timing, support, correction, archive, and safety boundaries.", "Communication mission charter.", "Every organization, role, person, service, source, supplier, message, date, and outcome is invented."],
  ["2", "Build the audience map", "Identify fictional analysts, technical owners, service owners, users, suppliers, privacy, policy, leadership, recovery, and public-safe readers.", "Audience-needs matrix.", "Each audience has a bounded purpose, required detail, exclusions, owner, cadence, and success condition."],
  ["3", "Separate message elements", "Document fictional facts, supported conclusions, uncertainty, non-proof statements, impact, decisions, actions, privacy, and next update.", "Ten-element message worksheet.", "No statement combines fact and assumption without labeling."],
  ["4", "Create the template library", "Draft fictional holding, situation, leadership, technical-request, user, supplier, recovery, correction, and closure-readiness updates.", "Versioned template library.", "Templates guide structure without forcing stale facts into new cases."],
  ["5", "Assign governance", "Document fictional drafting, review, approval, distribution, acknowledgement, correction, archive, and alternate-owner responsibilities.", "Communication authority matrix.", "High-impact messages have clear ownership and separation of duties."],
  ["6", "Build the update timeline", "Sequence fictional activation, evidence, containment, user, supplier, privacy, recovery, correction, and leadership communications.", "Incident communication timeline.", "Every important update has an owner, audience, version, approval, and next commitment."],
  ["7", "Run the correction process", "Identify a fictional unsupported data statement, preserve the prior version, correct it, redistribute, obtain acknowledgement, and update connected records.", "Correction and retraction package.", "The correction addresses both wording and decision impact."],
  ["8", "Validate twelve scenarios", "Test fictional alert uncertainty, Blind data, one-user impact, supplier request, leadership decision, owner request, user guidance, conflicting messages, quiet edit, recovery claim, missed update, and portfolio safety.", "Communication validation matrix.", "Cases test accuracy, usefulness, privacy, governance, and reliability."],
  ["9", "Measure communication quality", "Track fictional first-update time, commitment reliability, corrections, acknowledgement, conflicts, privacy minimization, and debt.", "Communication dashboard and metric dictionary.", "Metrics include purpose, population, source health, owner, limitations, and action."],
  ["10", "Prepare the portfolio package", "Combine mission, audience map, templates, approval workflow, timeline, distribution, correction, metrics, dashboard, leadership brief, lessons, and reflection.", "Public-safe Stakeholder Communication Package.", "No real communication, contact, identity, service, supplier, incident, or internal decision appears."],
];

const quizQuestions = [
  {
    question: "What is the strongest reason to tailor fictional incident messages by audience?",
    choices: [
      "To make every message longer.",
      "Different audiences need different decisions, actions, reassurance, detail, and confidentiality.",
      "To hide facts from owners.",
      "To avoid version control.",
    ],
    answer: 1,
    explanation: "Audience tailoring improves usefulness while protecting privacy and avoiding unnecessary detail.",
  },
  {
    question: "A fictional data-access source is Blind. Which user-facing statement is strongest?",
    choices: [
      "No protected data was affected.",
      "Protected-data access is currently Unknown while alternate evidence is reviewed.",
      "Protected data was definitely accessed.",
      "The source problem does not matter.",
    ],
    answer: 1,
    explanation: "Blind evidence supports neither access nor no-access conclusions.",
  },
  {
    question: "What should a fictional leadership brief lead with?",
    choices: [
      "Every raw record.",
      "The bounded decision, deadline, mission effect, options, recommendation, uncertainty, and consequences.",
      "A list of technical abbreviations.",
      "An unsupported promise.",
    ],
    answer: 1,
    explanation: "Leadership communication should make the required decision clear and evidence-aware.",
  },
  {
    question: "What is strongest when a fictional prior update contained an unsupported statement?",
    choices: [
      "Quietly edit it.",
      "Preserve the prior version and issue an explicit approved correction to affected recipients.",
      "Delete the communication log.",
      "Wait until case closure.",
    ],
    answer: 1,
    explanation: "Corrections must be visible, distributed, acknowledged when needed, and propagated to connected records.",
  },
  {
    question: "Which fictional supplier request is strongest?",
    choices: [
      "Send all internal incident details.",
      "Ask a bounded purpose-limited question with relevant period, requested evidence, confidentiality, deadline, owner, and acknowledgement.",
      "Accuse the supplier of causing the incident.",
      "Ask the supplier to investigate everything.",
    ],
    answer: 1,
    explanation: "Supplier coordination should be specific, fair, minimal, and decision-focused.",
  },
  {
    question: "A promised fictional update time arrives but no new facts exist. What should happen?",
    choices: [
      "Say nothing.",
      "Send an approved status update explaining that review continues and provide a new commitment.",
      "Invent progress.",
      "Close the case.",
    ],
    answer: 1,
    explanation: "Reliability includes resetting commitments transparently rather than disappearing.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real incident email.",
      "Use a real executive brief with fake service names.",
      "Invent every organization, audience, event, message, source, owner, approval, decision, date, and outcome.",
      "Use real supplier communication without contacts.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real incidents, identities, systems, decisions, and response capabilities.",
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

export default function StakeholderCommunicationPage() {
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
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Facts, Uncertainty, Audience, Approval, Correction, and Trust
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.6 Stakeholder Communication
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams communicate facts, uncertainty,
            impact, decisions, containment, recovery, privacy, user guidance,
            supplier coordination, leadership needs, corrections, and
            next-update commitments to different audiences.
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
          lessonTitle="Stakeholder Communication"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, audiences, identities, services, sources, suppliers, incidents, messages, owners, approvals, decisions, dates, and outcomes.",
            "I will separate fictional facts, supported conclusions, uncertainty, non-proof statements, impact, decisions, actions, guidance, privacy, and next updates.",
            "I will tailor fictional messages to audience need instead of sending the same detail to everyone.",
            "I will preserve fictional ownership, approval, versioning, distribution, acknowledgement, correction, archival, and expiration.",
            "I will avoid fictional blame, speculation, excessive detail, hidden uncertainty, unsupported promises, and quiet message edits.",
            "I will not access, copy, sanitize, upload, reuse, forward, or publish any real incident email, chat, alert, executive brief, user notice, supplier message, contact, organization, system, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Technically Accurate Message Can Still Be the Wrong Message"
        >
          <p className="leading-8">
            Fictional Northbridge has one confirmed stale session, one possible
            user delay, a Degraded group source, a Blind data source, and an
            unresolved supplier queue. A single message is sent to analysts,
            users, suppliers, and leadership. It contains internal identifiers,
            raw technical detail, unsupported reassurance, and no clear action.
            The information is not fully false, but it is not useful, safe, or
            appropriate for every audience.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak communication
              </p>
              <p className="mt-2 leading-7">
                “Send the entire incident record to everyone so no detail is
                missed.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong communication
              </p>
              <p className="mt-2 leading-7">
                “Give each audience the facts, uncertainty, decision, action,
                privacy boundary, and next update required for its role.”
              </p>
            </div>
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
          title="Communication Changes Decisions, User Behavior, and Trust"
        >
          <p className="leading-8">
            Fictional incident communication can accelerate safe decisions or
            spread unsupported assumptions. A missing uncertainty statement can
            make Unknown data sound unaffected. A vague user notice can increase
            duplicate requests. A supplier accusation can reduce cooperation. A
            leadership update without a decision ask can delay containment or
            recovery. Communication is therefore part of the response, not a
            separate public-relations task.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Decision quality", "Fictional owners receive the evidence, options, authority, deadline, and consequence needed for a bounded decision."],
              ["Mission clarity", "Fictional users and service teams receive plain-language status, safe guidance, support, and next-update commitments."],
              ["Trust and accountability", "Fictional versions, approvals, corrections, acknowledgements, and archives make communication reconstructable."],
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
          title="The C-L-E-A-R Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["C — Classify the audience", "Define the fictional decision, action, reassurance, guidance, coordination, or accountability need."],
              ["L — Limit to necessary detail", "Share fictional identities, data, architecture, evidence, supplier, and response detail only when required."],
              ["E — Express facts and uncertainty", "Separate fictional observations, supported conclusions, Unknowns, non-proof statements, and impact categories."],
              ["A — Assign ownership and approval", "Record fictional drafter, reviewers, approver, distributor, acknowledgement owner, correction owner, and alternate."],
              ["R — Record version and next update", "Preserve fictional version, distribution, correction, archive, expiration, and next time or condition commitment."],
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
              Decision-ready leadership statement
            </p>
            <p className="mt-2 leading-7">
              One fictional privileged session is confirmed and contained. No
              broad service interruption is confirmed. Identity recovery
              remains Conditional because group evidence is Degraded, and
              protected-data access remains Unknown because one source is
              Blind. Leadership is asked to support continued Wave 1 recovery
              until four gates pass or approve a narrower time-bounded risk
              exception.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Stakeholder Communication"
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
          title="Map Ten Stakeholder Audiences"
        >
          <div className="grid gap-5">
            {audienceProfiles.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary need", item.primaryNeed],
                    ["Include", item.include],
                    ["Exclude", item.exclude],
                    ["Message owner", item.owner],
                    ["Cadence", item.cadence],
                    ["Success condition", item.success],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.audience}-${label}`}
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
          title="Build Messages from Ten Elements"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {messageElements.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.element}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Communication question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong use
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak use
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Use Nine Communication Types"
        >
          <div className="grid gap-5">
            {updateTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Audience", item.audience],
                    ["Required content", item.required],
                    ["Approval", item.approval],
                    ["Weak pattern", item.weakPattern],
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
          eyebrow="Instructional Section 4"
          title="Govern Nine Message Workflows"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Message",
                    "Drafts",
                    "Reviews",
                    "Approves",
                    "Distributes",
                    "Acknowledges",
                    "Correction owner",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {approvalMatrix.map((row) => (
                  <tr key={row.message}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.message}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.drafts}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.reviews}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.approves}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.distributes}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.acknowledges}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.correctionOwner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Review Eight Fictional Message Templates"
        >
          <div className="grid gap-5">
            {messageLibrary.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.name}
                </h3>

                <div className="mt-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional sample
                  </p>
                  <p className="mt-3 leading-7">{item.sample}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strongest feature
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongestFeature}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Remaining requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.missingRisk}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Build a Twelve-Update Communication Timeline"
        >
          <div className="grid gap-4">
            {communicationTimeline.map((item) => (
              <article
                key={`${item.time}-${item.event}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-sm font-black text-cyan-200">
                    {item.time}
                  </span>
                  <h3 className="font-black text-white">{item.event}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Audience", item.audience],
                    ["Message", item.message],
                    ["Approval", item.approval],
                    ["Next commitment", item.nextCommitment],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.time}-${label}`}
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
          eyebrow="Instructional Section 7"
          title="Use a Ten-Step Correction Process"
        >
          <div className="grid gap-5">
            {correctionProcess.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.step}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Review question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required record
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.record}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality gate
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.qualityGate}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Validate Twelve Communication Scenarios"
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
          eyebrow="Instructional Section 9"
          title="Measure Eight Communication Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {communicationMetrics.map((item) => (
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
          eyebrow="Fictional Communication Architecture"
          title="Northbridge Evidence-to-Audience Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches communication quality
            without real incidents, identities, contacts, services, suppliers,
            messages, channels, approvals, or organizations.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Evidence inputs", "Facts, conclusions, uncertainty, source health, non-proof"],
                ["Response inputs", "Scope, impact, decisions, containment, recovery, risk"],
                ["Audience inputs", "Decision, action, guidance, reassurance, coordination"],
                ["Governance inputs", "Owner, approval, privacy, policy, version, correction"],
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
                Fictional Communication Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Classify", "Audience, purpose, decision, action, timing"],
                  ["Limit", "Necessary identity, data, architecture, supplier detail"],
                  ["Explain", "Facts, supported conclusions, Unknowns, non-proof"],
                  ["Guide", "What to do, avoid, approve, review, or prepare"],
                  ["Approve", "Draft, review, authorization, distribution"],
                  ["Version", "Current message, prior message, change, archive"],
                  ["Correct", "Error, corrected fact, decision effect, acknowledgement"],
                  ["Commit", "Next time or condition, owner, support path"],
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
                ["Analyst output", "Evidence, questions, owners, deadlines"],
                ["User output", "Status, safe guidance, support, next update"],
                ["Leadership output", "Mission, options, decision, resources, risk"],
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
          title="Fake Northbridge Incident Communication Dashboard"
          subtitle="Fictional message ownership, update commitments, acknowledgement, corrections, conflicting messages, privacy review, and communication debt."
          metrics={[
            {
              label: "Current fictional approved update",
              value: "Version 3.2",
              note: "Protected-data status is Unknown, session containment is validated, and recovery remains Wave 1 Conditional.",
            },
            {
              label: "Open fictional acknowledgements",
              value: "4",
              note: "Identity owner, supplier escalation owner, recovery validator, and leadership decision owner have pending acknowledgement.",
            },
            {
              label: "Open fictional communication debt",
              value: "7",
              note: "User-template accessibility, supplier fallback language, alternate approver, correction acknowledgement, archive link, metric owner, and exercise retest remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Communication Correction Requires Immediate Redistribution"
          severity="High"
          time="11:05 AM"
          source="Fake Northbridge Communication Governance Console"
          details="Fictional Update 2.1 stated that protected-data access was unaffected. The required source is Blind for part of the relevant period, so the statement is unsupported. Leadership and recovery decisions may have relied on the prior wording."
          recommendation="Preserve fictional Update 2.1, issue Version 3.2 stating that protected-data access is Unknown, redistribute to every affected audience, obtain acknowledgement from decision owners, and update connected scope, privacy, recovery, and leadership records."
        />

        <FakeLogPanel
          title="Fake Incident Communication Timeline"
          logs={[
            "09:00 MESSAGE type='initial-sitrep' version='1.0'",
            "09:15 IMPACT user='possible-one-report'",
            "09:24 DATA status='unknown' source='blind'",
            "09:38 CONTAINMENT session='validated'",
            "10:05 USER-ADVISORY version='2.0'",
            "10:20 RECOVERY state='conditional'",
            "10:45 SUPPLIER acknowledgement='missed'",
            "11:05 CORRECTION prior='2.1' current='3.2'",
            "11:07 DISTRIBUTION audiences='all-affected'",
            "11:12 ACK leadership='pending'",
            "11:15 ACK privacy='received'",
            "11:18 RECOVERY expansion='blocked'",
            "11:30 NEXT-UPDATE owner='communications-lead'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Communication Evidence Supports—and What It Does Not Prove"
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
                      ["Communication use", use],
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
          title="Which Leadership Update Is Best Supported?"
          question="Which fictional update best fits the current Northbridge evidence?"
          evidence={[
            "One privileged session is confirmed and contained.",
            "No broad service interruption is confirmed.",
            "One user reported delay.",
            "Group evidence is Degraded.",
            "Protected-data evidence is Blind.",
            "Supplier backlog remains unreconciled.",
            "Recovery remains Wave 1 Conditional.",
            "Leadership must decide whether to continue the current recovery boundary.",
          ]}
          options={[
            "State the confirmed session and containment, describe no confirmed broad impact, identify user impact as possible, data as Unknown, identity and recovery as Conditional, summarize the supplier gap, request the bounded leadership decision, and provide the next review time.",
            "Say the incident is resolved because the session is closed.",
            "Say all data and users are affected.",
            "Send the raw fictional evidence records without a decision request.",
          ]}
          bestAnswer={0}
          explanation="The first option is accurate, audience-focused, evidence-aware, decision-ready, and explicit about uncertainty."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Stakeholder Communication Errors"
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
          title="Build the Northbridge Stakeholder Communication Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, forward, adapt, reuse, or publish any real
            incident email, chat, executive brief, user advisory, supplier
            message, correction, contact, identity, service, source,
            organization, system, or person.
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
          title="A Blind Data Source and an Unsupported Reassurance"
          scenario="Fictional Update 2.1 tells leadership and recovery owners that protected-data access was unaffected. The required data-access source is Blind during part of the relevant period."
          choices={[
            {
              label: "Choice A",
              response: "Preserve Update 2.1, issue an approved correction changing the fictional data status to Unknown, explain the source-health reason and decision effect, redistribute to every affected audience, obtain acknowledgement, and update connected records.",
              outcome: "Best defensive choice. It corrects both the statement and the decisions that may have relied on it.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Quietly edit Update 2.1 so the record looks correct.",
              outcome: "Weak. Recipients may continue relying on the prior version and the history becomes incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Leave the message unchanged because no data alert exists.",
              outcome: "Weak. Alert silence cannot support an unaffected conclusion when the source is Blind.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Receives Status but No Decision Request"
          scenario="A fictional leadership brief contains two pages of technical status. A whole-service pause may be required within thirty minutes, but the message does not identify the decision, options, mission effect, recommendation, authority, or deadline."
          choices={[
            {
              label: "Choice A",
              response: "Rewrite the fictional brief around the bounded decision, deadline, current facts, uncertainty, mission effect, options, recommendation, consequences, owner, and next review trigger.",
              outcome: "Best choice. Leadership communication should make the required decision visible and actionable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Add more raw logs so leadership can decide independently.",
              outcome: "Weak. More volume does not create a clear decision frame.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Send the same technical update to users and suppliers.",
              outcome: "Weak. Those audiences have different needs and confidentiality boundaries.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Multi-Audience Communication Plan before an Incident Board"
        >
          <p className="leading-8">
            Fictional Northbridge confirms one contained privileged session,
            possible limited user impact, Degraded identity evidence, Blind
            protected-data evidence, an unresolved supplier queue, and
            Conditional recovery. A prior update incorrectly described the data
            status as unaffected. Analysts, users, suppliers, privacy reviewers,
            recovery teams, and leadership all need different communications.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend audience tailoring", "Explain the fictional decision, action, guidance, reassurance, privacy, and detail needs for every audience."],
              ["Defend facts and uncertainty", "Explain fictional confirmed facts, supported conclusions, Unknowns, non-proof statements, impact categories, and source-health limits."],
              ["Defend governance", "Explain fictional drafting, review, approval, distribution, acknowledgement, correction, archive, expiration, and alternate ownership."],
              ["Defend the user advisory", "Explain fictional plain-language status, safe guidance, support, accessibility, limitations, and next-update commitment."],
              ["Defend the supplier request", "Explain fictional purpose, bounded evidence, period, confidentiality, deadline, acknowledgement, escalation, and fairness."],
              ["Defend the correction", "Explain fictional prior version, error, current evidence, corrected statement, decision effect, redistribution, acknowledgement, and corrective action."],
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
              Produce a fictional audience map, ten-element message model,
              holding statement, analyst situation report, technical owner
              request, user advisory, supplier request, privacy update,
              leadership decision brief, recovery-wave update, correction
              notice, approval matrix, distribution log, acknowledgement
              tracker, update timeline, communication dashboard, debt register,
              leadership summary, lessons, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Stakeholder Communication Checklist"
          items={[
            "I can distinguish fictional analyst, technical, service, user, supplier, privacy, policy, leadership, recovery, and public-safe audience needs.",
            "I can separate fictional facts, supported conclusions, uncertainty, non-proof statements, impact, decisions, actions, guidance, privacy, and next updates.",
            "I can create fictional holding statements, situation reports, leadership briefs, owner requests, user advisories, supplier requests, recovery updates, corrections, and closure-readiness messages.",
            "I can minimize fictional identities, data, architecture, supplier, evidence, and response detail according to audience and purpose.",
            "I can assign fictional drafter, reviewers, approver, distributor, acknowledgement owner, correction owner, archive owner, and alternate.",
            "I can give fictional next-update commitments based on time or meaningful condition changes.",
            "I can preserve fictional message versions and avoid quiet edits.",
            "I can issue fictional corrections that identify the prior error, current evidence, corrected statement, decision effect, guidance effect, owners, and next update.",
            "I can obtain fictional acknowledgement when a message changes high-impact decisions or actions.",
            "I can update fictional scope, privacy, recovery, leadership, playbook, dashboard, and case records after a correction.",
            "I can measure fictional update timing, commitment reliability, corrections, acknowledgements, conflicts, privacy minimization, and communication debt.",
            "I can create a completely fictional communication artifact without exposing real messages, contacts, incidents, identities, services, suppliers, decisions, or response capabilities.",
          ]}
        />

        <MiniQuiz
          title="A7.6 Mini Quiz: Stakeholder Communication"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Stakeholder Communication Package for the Northbridge Student-Support Cooperative. Include mission, audiences, audience needs, decision needs, action needs, reassurance needs, coordination needs, accountability needs, confidentiality boundaries, confirmed facts, supported conclusions, uncertainty, non-proof statements, impact categories, decisions, authorized actions, user guidance, privacy limits, support paths, next-update commitments, message owners, alternate owners, drafting, review, approval, distribution, acknowledgement, correction, retraction, archive, expiration, holding statement, internal situation report, leadership decision brief, technical owner request, service and continuity update, user advisory, supplier coordination request, privacy or policy update, recovery wave update, correction notice, closure-readiness update, audience map, message matrix, template library, approval matrix, version history, distribution log, acknowledgement tracker, twelve-update timeline, correction process, correction evidence, affected decisions, connected-record updates, validation cases, time to first update, commitment reliability, correction rate, correction completion time, acknowledgement rate, conflicting-message incidents, privacy-minimization quality, communication-debt aging, dashboard, leadership brief, communication debt, lessons, reflection, and a statement that every organization, audience, identity, service, source, supplier, message, contact, approval, decision, date, and outcome is invented."
          tips={[
            "Tailor each fictional message to the audience's actual decision, action, reassurance, coordination, or accountability need.",
            "Separate fictional confirmed facts, supported conclusions, uncertainty, impact, and non-proof statements.",
            "Give every fictional high-impact message an owner, approval path, version, distribution record, acknowledgement rule, correction owner, and next-update commitment.",
            "Treat fictional corrections as changes to decisions and records, not only wording.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Evidence Preservation Concepts?"
        >
          <p className="leading-8">
            Before moving to A7.7, rate your readiness from 1 to 5 for audience
            mapping, facts, conclusions, uncertainty, non-proof statements,
            impact, decisions, user guidance, supplier coordination, leadership
            asks, privacy, ownership, approvals, versions, distribution,
            acknowledgement, corrections, next updates, metrics, debt, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional analysts, users, suppliers, recovery teams, and leadership need different messages.",
              "I can separate fictional fact, conclusion, uncertainty, impact, and non-proof statements.",
              "I can create a fictional user advisory with clear guidance and no unnecessary internal detail.",
              "I can create a fictional leadership brief with a bounded decision and deadline.",
              "I can create a fictional supplier request without blame or excessive sharing.",
              "I can preserve fictional version, approval, distribution, acknowledgement, and correction history.",
              "I can reset a fictional missed next-update commitment transparently.",
              "I can produce a safe fictional communication package without adapting real messages or contacts.",
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
            Record one fictional confirmed fact, one uncertainty, one
            non-proof statement, one user action, one leadership decision ask,
            one supplier request, one correction trigger, one next-update
            commitment, and one question you will carry into A7.7.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional stakeholder communication should support a specific decision, action, reassurance, guidance, coordination, or accountability need.",
            "Analysts, technical owners, service owners, users, suppliers, privacy reviewers, policy authorities, leadership, recovery teams, and portfolio readers require different detail.",
            "Strong fictional updates separate confirmed facts, supported conclusions, uncertainty, non-proof statements, impact, decisions, actions, privacy, and next updates.",
            "A Blind or Degraded source must remain visible in fictional communication and prevents unsupported unaffected or recovered claims.",
            "User-facing fictional messages should use plain language, concrete safe guidance, support, limitations, and a next-update commitment.",
            "Leadership fictional messages should make the bounded decision, deadline, mission effect, options, recommendation, uncertainty, and consequences clear.",
            "Supplier fictional communication should be purpose-limited, bounded, fair, confidential, owned, time-bounded, and acknowledgement-based.",
            "Fictional messages require ownership, review, approval, versioning, distribution, acknowledgement, correction, archive, expiration, and alternate coverage.",
            "A fictional correction should preserve the prior version, identify the error, state the correction, explain decision effects, redistribute, obtain acknowledgement, and update connected records.",
            "Every CyberShield communication artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real incidents, messages, contacts, systems, or decisions.",
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
            Next, study how fictional evidence preservation protects purpose,
            authorization, scope, provenance, timing, integrity, source health,
            access, custody, storage, retention, privacy, transfer, review, and
            reporting without teaching invasive collection techniques.
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