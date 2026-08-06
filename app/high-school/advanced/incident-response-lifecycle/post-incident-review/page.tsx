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
const previousLesson = `${modulePath}/evidence-preservation-concepts`;
const nextLesson = `${modulePath}/metrics-and-continuous-improvement`;

const objectives = [
  "Distinguish fictional post-incident review from blame, punishment, unsupported root-cause claims, performance ranking, or a simple event summary.",
  "Reconstruct a fictional response using chronology, evidence, source health, scope versions, decisions, actions, communications, containment, recovery, validation, and observation.",
  "Evaluate fictional response quality across preparation, roles, detection, scoping, authority, continuity, privacy, evidence, communication, containment, recovery, closure, and reopening.",
  "Convert fictional observations into lessons, contributing conditions, corrective actions, owners, due dates, validation tests, dependencies, risk, and escalation without confusing activity with improvement.",
  "Create a portfolio-ready fictional Post-Incident Review Package containing a review charter, timeline, decision review, gap register, lesson register, corrective-action plan, dashboard, leadership brief, closure review, and reflection.",
];

const vocabulary = [
  ["Post-incident review", "A fictional structured examination of what happened, how response decisions were made, what helped, what limited performance, what changed, and what should improve."],
  ["Blameless review", "A fictional review approach that examines systems, conditions, decisions, assumptions, evidence, ownership, and incentives without avoiding accountability or assigning unsupported personal blame."],
  ["Accountability", "A fictional responsibility to explain decisions, complete actions, own risk, correct records, validate improvements, and escalate unresolved obligations."],
  ["Review charter", "A fictional document defining purpose, scope, participants, evidence, questions, confidentiality, authority, outputs, due dates, and safety boundaries."],
  ["Review scope", "The fictional period, entities, decisions, actions, sources, communications, users, suppliers, services, data, and outcomes included in the review."],
  ["Chronology", "A fictional ordered reconstruction of event, collection, processing, report, decision, action, validation, communication, correction, recovery, and closure times."],
  ["Decision review", "A fictional examination of the question, evidence, source health, options, authority, selected choice, rationale, assumptions, validation, rollback, and outcome."],
  ["Expected outcome", "The fictional state that responders intended an action, message, control, or recovery step to produce."],
  ["Actual outcome", "The fictional observed result, including intended effects, side effects, delays, uncertainty, and later corrections."],
  ["Contributing condition", "A fictional circumstance that increased likelihood, duration, scope, impact, confusion, delay, or recovery difficulty."],
  ["Control gap", "A fictional missing, weak, stale, untested, unowned, misconfigured, or poorly monitored safeguard relevant to the incident or response."],
  ["Coordination gap", "A fictional problem involving authority, ownership, alternates, handoffs, acknowledgement, timing, dependencies, or conflicting work."],
  ["Evidence gap", "A fictional limitation involving source health, provenance, coverage, timing, access, retention, interpretation, or correction."],
  ["Communication gap", "A fictional issue involving audience, facts, uncertainty, guidance, approval, versions, distribution, acknowledgement, or correction."],
  ["Recovery gap", "A fictional weakness involving clean-state criteria, dependencies, canary testing, validation, rollback, observation, acceptance, debt, or reopening."],
  ["Lesson", "A fictional evidence-supported statement about what should be preserved, changed, tested, clarified, owned, or measured."],
  ["Corrective action", "A fictional specific improvement with owner, scope, due date, dependency, validation method, risk, status, and escalation."],
  ["Preventive action", "A fictional change intended to reduce the likelihood or impact of similar conditions before recurrence."],
  ["Detection improvement", "A fictional change to data, logic, ownership, source health, context, testing, routing, or documentation that improves defender questions."],
  ["Process improvement", "A fictional change to roles, approvals, playbooks, handoffs, communications, recovery, evidence, or governance."],
  ["Validation criterion", "A fictional measurable condition proving that a corrective action works as intended."],
  ["Action aging", "The fictional time a corrective action remains open, blocked, overdue, unvalidated, or conditionally accepted."],
  ["Residual risk", "The fictional risk remaining after response and planned improvements, including unresolved cause, source, supplier, privacy, monitoring, recovery, or governance concerns."],
  ["Closure condition", "A fictional evidence, owner, validation, communication, risk, corrective-action, or archive requirement needed before formal closure."],
  ["Reopen trigger", "A fictional new evidence, recurrence, source recovery, validation failure, scope change, user impact, supplier issue, or overdue risk condition that returns the case to active review."],
];

const reviewPrinciples = [
  {
    principle: "Evidence before memory",
    meaning: "Use fictional records, source health, chronology, decisions, communications, and validation before relying on recollection.",
    strongPractice: "Compare memories with preserved evidence and label unresolved conflicts.",
    weakPractice: "Choose the most confident speaker's version of events.",
  },
  {
    principle: "Systems before blame",
    meaning: "Examine fictional roles, tools, policies, incentives, dependencies, workload, assumptions, and control design.",
    strongPractice: "Ask what made the decision reasonable or difficult at the time.",
    weakPractice: "Name one person as the cause without evidence.",
  },
  {
    principle: "Context before hindsight",
    meaning: "Evaluate fictional decisions using the evidence, source health, authority, time pressure, and mission conditions available then.",
    strongPractice: "Separate information known at decision time from information discovered later.",
    weakPractice: "Judge earlier decisions using facts that were not yet available.",
  },
  {
    principle: "Outcomes before activity",
    meaning: "Measure whether fictional actions improved expected state, user safety, continuity, evidence quality, recovery, and risk.",
    strongPractice: "Validate results and side effects.",
    weakPractice: "Count meetings, messages, or completed tickets as proof of improvement.",
  },
  {
    principle: "Ownership before recommendations",
    meaning: "Every fictional improvement needs an accountable owner, alternate, authority, dependency, due date, and escalation.",
    strongPractice: "Convert lessons into governed corrective actions.",
    weakPractice: "End with vague recommendations such as communicate better.",
  },
  {
    principle: "Validation before closure",
    meaning: "A fictional corrective action is not complete when implemented; it is complete when its intended effect is tested and accepted.",
    strongPractice: "Define test cases, evidence, success, failure, and retest.",
    weakPractice: "Close the action when code, policy, or documentation is changed.",
  },
  {
    principle: "Privacy before detail",
    meaning: "Use only fictional minimum-necessary identities, data, supplier, evidence, and response detail for the review purpose.",
    strongPractice: "Limit attendees and outputs by role and need.",
    weakPractice: "Share the full incident record with every participant.",
  },
  {
    principle: "Learning before finality",
    meaning: "Preserve fictional reopen triggers, source-recovery obligations, late evidence, debt, and residual risk after the meeting ends.",
    strongPractice: "Treat review as part of continuous improvement.",
    weakPractice: "Assume the meeting permanently settles every conclusion.",
  },
];

const reviewPhases = [
  {
    phase: "1. Initiate",
    purpose: "Authorize the fictional review and define its purpose, scope, timing, participants, outputs, and confidentiality.",
    inputs: "Closure readiness, incident owner, policy, unresolved questions, source status, and stakeholder needs.",
    outputs: "Review charter, facilitator, participants, evidence owner, schedule, and safety boundary.",
    gate: "The review has authority and a bounded learning purpose.",
  },
  {
    phase: "2. Prepare evidence",
    purpose: "Assemble fictional chronology, evidence register, source health, scope versions, decisions, communications, containment, recovery, and corrections.",
    inputs: "Case records, preserved evidence, dashboards, owner statements, user reports, supplier records, and recovery validation.",
    outputs: "Evidence pack, source limitations, missing records, conflicts, and review questions.",
    gate: "Participants can distinguish facts, conclusions, Unknowns, and later-discovered information.",
  },
  {
    phase: "3. Reconstruct",
    purpose: "Build the fictional response timeline from preparation through closure readiness.",
    inputs: "Event, collection, processing, report, decision, action, validation, communication, correction, and recovery times.",
    outputs: "Multi-time chronology and key turning points.",
    gate: "The sequence is traceable and timing conflicts are visible.",
  },
  {
    phase: "4. Review decisions",
    purpose: "Evaluate fictional activation, scope, containment, communication, preservation, eradication, recovery, risk, and closure decisions.",
    inputs: "Decision records, evidence available then, options, authority, assumptions, expected state, validation, rollback, and outcome.",
    outputs: "Decision-quality matrix and decision lessons.",
    gate: "The review avoids hindsight bias and unsupported blame.",
  },
  {
    phase: "5. Identify strengths and gaps",
    purpose: "Document fictional practices that helped and conditions that limited response.",
    inputs: "Role performance, source health, playbooks, continuity, privacy, communications, supplier support, recovery, and metrics.",
    outputs: "Strength register, gap register, contributing-condition map, and risk statement.",
    gate: "Observations are evidence-supported and system-focused.",
  },
  {
    phase: "6. Create corrective actions",
    purpose: "Convert fictional lessons into specific owned improvements.",
    inputs: "Lessons, risks, dependencies, authority, resources, due dates, validation, and escalation.",
    outputs: "Corrective-action register and priority plan.",
    gate: "Every action has an owner, outcome, validation, and lifecycle.",
  },
  {
    phase: "7. Approve and communicate",
    purpose: "Obtain fictional action, risk, resource, privacy, service, supplier, and leadership decisions.",
    inputs: "Review findings, action options, costs, dependencies, risks, and recommended priorities.",
    outputs: "Approved report, leadership brief, action assignments, and audience-specific communication.",
    gate: "Recipients know what is approved, owned, due, confidential, and still uncertain.",
  },
  {
    phase: "8. Track and validate",
    purpose: "Monitor fictional action status, blockers, aging, validation results, residual risk, and recurrence.",
    inputs: "Action updates, test evidence, exercises, metrics, source recovery, owner acknowledgement, and risk review.",
    outputs: "Action dashboard, validation records, overdue escalations, and retest decisions.",
    gate: "Implemented does not become complete without evidence.",
  },
  {
    phase: "9. Close or reopen",
    purpose: "Decide whether fictional review obligations are complete or whether new evidence or failed improvements require renewed action.",
    inputs: "Validation, debt, residual risk, source reconciliation, recurrence, overdue actions, and leadership decisions.",
    outputs: "Review closure, transition, risk acceptance, or reopened case.",
    gate: "Closure preserves history, ownership, and reopen triggers.",
  },
];

const reviewDomains = [
  {
    domain: "Preparation and playbooks",
    question: "Did fictional plans define activation, roles, source-health branches, continuity, privacy, evidence, containment, recovery, validation, closure, and reopening?",
    evidence: "Playbook versions, exercise results, owner acknowledgements, decision branches, exceptions, and review dates.",
    strength: "The fictional session-containment branch included authority, validation, rollback, and continuity.",
    gap: "The playbook did not define a Blind protected-data source branch.",
    lesson: "Add source-health-specific privacy and recovery decisions.",
  },
  {
    domain: "Roles and authority",
    question: "Were fictional command, technical, service, identity, evidence, privacy, communications, supplier, continuity, recovery, and risk roles clear?",
    evidence: "Role chart, availability, alternates, acknowledgements, handoffs, approvals, and escalation records.",
    strength: "The identity owner approved the narrow session action quickly.",
    gap: "Supplier escalation ownership was unclear after the first missed commitment.",
    lesson: "Define primary and alternate supplier escalation authority.",
  },
  {
    domain: "Detection and activation",
    question: "Did fictional signals reach the correct owner with enough context to support activation?",
    evidence: "Alert logic, data sources, source health, routing, acknowledgement, triage questions, and activation record.",
    strength: "Role and session evidence aligned early.",
    gap: "The alert did not include group-source health or owner context.",
    lesson: "Attach source-health and ownership context to the defender question.",
  },
  {
    domain: "Scoping",
    question: "Did fictional scope distinguish confirmed, possible, unaffected, unknown, excluded, and out-of-scope entities?",
    evidence: "Scope versions, entity register, relationship map, source health, hypotheses, and change log.",
    strength: "Protected-data status changed to Unknown when the source became Blind.",
    gap: "Device relationships remained possible longer than necessary.",
    lesson: "Improve session-to-device evidence and owner deadlines.",
  },
  {
    domain: "Containment",
    question: "Did fictional response select the narrowest authorized action that reduced supported risk?",
    evidence: "Option matrix, authority, expected state, validation, continuity, rollback, and residual risk.",
    strength: "One confirmed session was closed without disabling the broader identity.",
    gap: "Role and group validation remained Conditional after the action.",
    lesson: "Add alternate effective-access validation to the containment plan.",
  },
  {
    domain: "Continuity and user impact",
    question: "Did fictional response protect critical services, users, accessibility, alternate workflows, capacity, and deadlines?",
    evidence: "Continuity plan, user reports, alternate process, queue, capacity, support guidance, and acceptance.",
    strength: "Urgent student-support work continued through a bounded alternate process.",
    gap: "Accessibility review occurred after the first user advisory draft.",
    lesson: "Make accessibility review a required pre-distribution gate.",
  },
  {
    domain: "Stakeholder communication",
    question: "Were fictional messages accurate, audience-specific, approved, versioned, corrected, and tied to next updates?",
    evidence: "Message versions, approval, distribution, acknowledgement, correction, and connected records.",
    strength: "The unsupported protected-data statement was explicitly corrected.",
    gap: "Leadership acknowledgement of the correction was delayed.",
    lesson: "Require acknowledgement for decision-changing corrections.",
  },
  {
    domain: "Evidence preservation",
    question: "Did fictional evidence have purpose, authority, provenance, timing, source health, access, custody, retention, and correction?",
    evidence: "Evidence charter, register, custody log, access matrix, retention plan, and source-recovery record.",
    strength: "The Blind period and prior communication version remained preserved.",
    gap: "One supplier transfer lacked immediate acknowledgement.",
    lesson: "Add a transfer-completion gate before evidence is considered delivered.",
  },
  {
    domain: "Eradication and cause",
    question: "Did fictional response separate trigger, immediate cause, root cause, contributing factors, control gaps, and recovery complications?",
    evidence: "Cause hypotheses, supporting and contradicting evidence, alternatives, source health, owner review, and correction target.",
    strength: "The review avoided treating session closure as root-cause removal.",
    gap: "Lifecycle ownership evidence was assembled late.",
    lesson: "Preserve role-expiration and ownership history during initial response.",
  },
  {
    domain: "Recovery",
    question: "Did fictional recovery use clean-state gates, canary waves, validation, rollback, observation, and multi-domain acceptance?",
    evidence: "Recovery plan, wave records, source health, user tests, supplier queue, data integrity, rollback, and acceptance.",
    strength: "Recovery expansion remained blocked when four gates were incomplete.",
    gap: "Supplier queue validation lacked a pre-approved test owner.",
    lesson: "Assign supplier-data reconciliation ownership during preparation.",
  },
  {
    domain: "Leadership and risk",
    question: "Did fictional leadership receive clear decisions, tradeoffs, resources, residual risk, deadlines, and escalation?",
    evidence: "Decision briefs, approvals, risk records, resource requests, acknowledgement, and review triggers.",
    strength: "The whole-service pause was framed as a decision rather than a default.",
    gap: "One residual-risk review date was missing.",
    lesson: "Require duration and review date for every accepted risk.",
  },
  {
    domain: "Closure and reopening",
    question: "Did fictional closure preserve observation, corrective actions, evidence debt, source reconciliation, residual risk, and reopen triggers?",
    evidence: "Closure checklist, observation record, action register, debt, risk acceptance, archive, and reopen criteria.",
    strength: "The case remained Conditional while source reconciliation was incomplete.",
    gap: "One action was assigned without an alternate owner.",
    lesson: "Require alternates for critical corrective actions.",
  },
];

const chronology = [
  ["08:15", "Approved fictional recovery change begins.", "Change evidence", "Creates a partial expected-activity alternative."],
  ["08:58", "Temporary recovery role remains Active.", "Role evidence", "Activation and stale-authority review begin."],
  ["09:04", "Privileged session reaches one administrative destination.", "Session evidence", "Identity, session, service, and destination enter confirmed scope."],
  ["09:09", "One staff user reports delay.", "User report", "Limited impact enters possible scope."],
  ["09:12", "Supplier reports integration delay.", "Supplier statement", "Supplier dependency and alternative explanation enter review."],
  ["09:24", "Data-access source is identified as Blind.", "Source-health evidence", "Protected-data status becomes Unknown."],
  ["09:38", "Scoped session containment validates.", "Containment evidence", "Immediate session risk reduces; role and group questions remain."],
  ["10:05", "User advisory is distributed.", "Communication record", "Alternate workflow and support guidance become active."],
  ["11:05", "Unsupported data-status statement is corrected.", "Correction record", "Leadership, privacy, recovery, and scope records require update."],
  ["11:18", "Recovery expansion is blocked.", "Recovery dashboard", "Four clean-state gates remain incomplete."],
  ["13:30", "Identity canary passes after group reconciliation.", "Recovery validation", "Wave 2 becomes eligible for approval."],
  ["Next day", "Post-incident review charter is approved.", "Review authority", "Evidence, participants, questions, confidentiality, and outputs are bounded."],
];

const decisionReviews = [
  {
    decision: "Activate incident coordination",
    question: "Did the fictional signal justify structured response?",
    knownThen: "Role and session evidence aligned; impact and intent were not confirmed.",
    options: "Routine triage, source recovery, service issue, or incident coordination.",
    choice: "Activate bounded incident coordination.",
    rationale: "Time-sensitive privileged-session risk and cross-owner decisions required coordination.",
    outcome: "Scope, ownership, containment, communication, and recovery questions were organized.",
    lesson: "Activation can be appropriate without claiming every incident dimension is confirmed.",
  },
  {
    decision: "Classify protected-data scope",
    question: "Could fictional data access be called unaffected?",
    knownThen: "The required data source was Blind during the key period.",
    options: "Unaffected, affected, possible, or Unknown.",
    choice: "Classify as Unknown.",
    rationale: "Blind evidence supported neither access nor no-access conclusions.",
    outcome: "Privacy review and alternate evidence remained active.",
    lesson: "Unknown is a professional state, not a failure to decide.",
  },
  {
    decision: "Contain the confirmed session",
    question: "Which fictional action reduced current risk with the smallest blast radius?",
    knownThen: "One session was confirmed; the broader identity remained mission-relevant.",
    options: "Monitor, close the session, restrict the role, disable identity, or pause service.",
    choice: "Close the confirmed session.",
    rationale: "The option targeted the strongest evidence-supported active risk.",
    outcome: "Session risk reduced while service continuity remained stable.",
    lesson: "Narrow action can outperform dramatic broad action.",
  },
  {
    decision: "Issue user guidance",
    question: "Did fictional users need action before broad impact was confirmed?",
    knownThen: "One delay report existed and an alternate process was available.",
    options: "No message, broad outage notice, or limited guidance.",
    choice: "Issue limited plain-language guidance.",
    rationale: "Users needed support without unsupported impact claims.",
    outcome: "Critical requests continued, though accessibility review was late.",
    lesson: "User communication needs both evidence accuracy and pre-approved accessibility review.",
  },
  {
    decision: "Correct the data-status message",
    question: "How should fictional unsupported reassurance be handled?",
    knownThen: "Update 2.1 said unaffected while the source was Blind.",
    options: "Quiet edit, delay, or explicit correction.",
    choice: "Preserve and explicitly correct.",
    rationale: "Decision owners may have relied on the prior statement.",
    outcome: "Current status changed to Unknown and connected records were updated.",
    lesson: "Corrections must address decision impact, not only wording.",
  },
  {
    decision: "Block recovery expansion",
    question: "Could fictional recovery proceed after the service became reachable?",
    knownThen: "Group, data, supplier, and critical-user gates remained incomplete.",
    options: "Full restoration, bounded exception, or hold at Wave 1.",
    choice: "Hold at Wave 1 Conditional.",
    rationale: "Availability did not establish trusted multi-domain recovery.",
    outcome: "A larger recovery failure was avoided.",
    lesson: "Clean-state gates protect against premature restoration.",
  },
  {
    decision: "Accept residual risk",
    question: "Could fictional source and supplier uncertainty be accepted temporarily?",
    knownThen: "Containment was stable, but source reconciliation and supplier backlog remained open.",
    options: "Continue response, accept bounded risk, or close.",
    choice: "Accept limited time-bounded risk with owners and review.",
    rationale: "Mission could continue under compensating controls.",
    outcome: "Risk remained visible, but one review date required correction.",
    lesson: "Risk acceptance needs owner, authority, duration, controls, and review date.",
  },
  {
    decision: "Delay formal closure",
    question: "Were fictional response and improvement obligations complete?",
    knownThen: "Source reconciliation and several corrective actions remained open.",
    options: "Close, close conditionally, or remain active.",
    choice: "Maintain Conditional closure readiness.",
    rationale: "Late evidence and unvalidated actions could still change conclusions.",
    outcome: "Review obligations transitioned without erasing reopen triggers.",
    lesson: "Quiet systems and completed meetings do not equal closure.",
  },
];

const lessonRegister = [
  {
    lesson: "Source health must travel with every decision",
    observation: "Fictional group and data conclusions changed when source health was reviewed.",
    evidence: "Degraded group source, Blind data source, scope change, correction, and recovery block.",
    improvement: "Add source-health fields and branches to alerts, playbooks, decisions, communications, and recovery gates.",
    owner: "Detection and incident-response owners.",
    validation: "A fictional exercise with Healthy, Degraded, and Blind sources produces the expected branches.",
  },
  {
    lesson: "Narrow containment protects mission and evidence",
    observation: "Closing one fictional session reduced supported risk without disabling the identity or pausing the service.",
    evidence: "Session relationship, option matrix, authority, continuity, validation, and service-health records.",
    improvement: "Preserve session, role, function, service, supplier, and observation options in the containment playbook.",
    owner: "Identity, service, and incident owners.",
    validation: "A fictional tabletop selects the narrowest effective action in at least three scope patterns.",
  },
  {
    lesson: "Accessibility belongs before user communication",
    observation: "Fictional user guidance was accurate but accessibility review occurred late.",
    evidence: "User-advisory draft, approval timeline, alternate workflow, and support feedback.",
    improvement: "Add accessibility reviewer and alternate owner to the user-message approval matrix.",
    owner: "Communications and service owners.",
    validation: "A fictional advisory cannot reach Approved without accessibility acknowledgement or documented exception.",
  },
  {
    lesson: "Decision-changing corrections require acknowledgement",
    observation: "The fictional data-status correction reached audiences, but leadership acknowledgement was delayed.",
    evidence: "Update 2.1, correction 3.2, distribution log, and acknowledgement tracker.",
    improvement: "Classify corrections by decision impact and require acknowledgement for High-impact changes.",
    owner: "Communications and incident owners.",
    validation: "A fictional correction exercise demonstrates recipient identification, acknowledgement, and connected-record updates.",
  },
  {
    lesson: "Supplier evidence needs preassigned escalation and validation",
    observation: "The fictional supplier missed its commitment and queue ownership was unclear.",
    evidence: "Supplier request, missed acknowledgement, escalation timeline, recovery gate, and queue record.",
    improvement: "Define primary, alternate, deadline, local evidence, queue validation, and leadership escalation.",
    owner: "Supplier relationship and service owners.",
    validation: "A fictional supplier-delay exercise reaches an alternate owner and produces a decision-ready queue status.",
  },
  {
    lesson: "Availability is only one recovery signal",
    observation: "The fictional service responded while data, supplier, group, and user gates remained incomplete.",
    evidence: "Recovery dashboard, clean-state matrix, user acceptance, source health, and supplier queue.",
    improvement: "Require ten-domain recovery readiness and canary validation before expansion.",
    owner: "Recovery and service owners.",
    validation: "A fictional canary failure blocks expansion and triggers rollback.",
  },
  {
    lesson: "Evidence corrections must preserve history",
    observation: "Recovered or corrected fictional evidence changed prior interpretations.",
    evidence: "Correction record, source-recovery record, affected decisions, and prior versions.",
    improvement: "Require correction propagation to scope, communication, recovery, risk, and closure records.",
    owner: "Evidence coordinator.",
    validation: "A fictional late-evidence test updates every connected artifact without overwriting history.",
  },
  {
    lesson: "Closure must preserve improvement ownership",
    observation: "One fictional critical corrective action lacked an alternate owner.",
    evidence: "Closure checklist, action register, owner availability, debt, and escalation review.",
    improvement: "Require primary, alternate, authority, due date, validation, and escalation before review closure.",
    owner: "Program and incident owners.",
    validation: "The closure checklist blocks completion when a critical action lacks alternate ownership.",
  },
];

const correctiveActions = [
  {
    id: "CA-01",
    action: "Add source-health branches to the fictional incident-response playbook.",
    category: "Playbook and evidence",
    owner: "Incident-response program owner",
    alternate: "Detection owner",
    due: "30 fictional days",
    dependency: "Source-health taxonomy and owner review.",
    expectedOutcome: "Responders choose evidence-aware paths for Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering sources.",
    validation: "Run six fictional branch tests and confirm expected decisions, communications, and recovery gates.",
    risk: "Unsupported certainty may recur if the action is delayed.",
    status: "Approved",
  },
  {
    id: "CA-02",
    action: "Connect fictional role expiration to active-session and group-state review.",
    category: "Identity lifecycle",
    owner: "Identity owner",
    alternate: "Identity governance owner",
    due: "45 fictional days",
    dependency: "Role, group, session, approval, and owner records.",
    expectedOutcome: "Expired temporary authority triggers an owned effective-access review.",
    validation: "Test normal expiration, approved extension, delayed group sync, active session, and source Blindness.",
    risk: "Stale authority may persist or remain difficult to validate.",
    status: "In progress",
  },
  {
    id: "CA-03",
    action: "Add accessibility review to fictional user-advisory approval.",
    category: "Communication",
    owner: "Communications lead",
    alternate: "Service communications owner",
    due: "15 fictional days",
    dependency: "User templates, reviewer list, exception rule, and exercise.",
    expectedOutcome: "User guidance supports clear and accessible action before distribution.",
    validation: "Run a fictional advisory through standard, urgent, and alternate-owner paths.",
    risk: "Critical users may receive guidance they cannot use.",
    status: "Approved",
  },
  {
    id: "CA-04",
    action: "Create a fictional High-impact correction acknowledgement workflow.",
    category: "Communication governance",
    owner: "Incident communications owner",
    alternate: "Case-management owner",
    due: "20 fictional days",
    dependency: "Message versioning, audience map, acknowledgement tracker, and escalation.",
    expectedOutcome: "Decision-changing corrections reach and are acknowledged by every affected owner.",
    validation: "Issue a fictional correction and verify distribution, acknowledgement, decision update, and escalation.",
    risk: "Old unsupported conclusions may continue guiding response.",
    status: "Planned",
  },
  {
    id: "CA-05",
    action: "Define fictional supplier escalation and queue-reconciliation ownership.",
    category: "Supplier and recovery",
    owner: "Supplier relationship owner",
    alternate: "Service owner",
    due: "30 fictional days",
    dependency: "Supplier map, local evidence, queue model, privacy review, and fallback.",
    expectedOutcome: "Missed supplier commitments and queue risks produce timely local and provider decisions.",
    validation: "Run fictional delayed, conflicting, and unavailable supplier scenarios.",
    risk: "Recovery may stall or data integrity may remain uncertain.",
    status: "Approved",
  },
  {
    id: "CA-06",
    action: "Require ten-domain clean-state gates before fictional recovery expansion.",
    category: "Recovery",
    owner: "Recovery lead",
    alternate: "Service continuity owner",
    due: "25 fictional days",
    dependency: "Identity, session, configuration, service, data, supplier, source, dependency, monitoring, and user owners.",
    expectedOutcome: "Service reachability cannot substitute for trusted recovery.",
    validation: "Run canary pass, user failure, Blind source, supplier queue, and rollback scenarios.",
    risk: "Premature restoration may reintroduce unsafe or inconsistent state.",
    status: "In progress",
  },
  {
    id: "CA-07",
    action: "Create fictional correction propagation across connected response artifacts.",
    category: "Evidence and case management",
    owner: "Evidence coordinator",
    alternate: "Case-management owner",
    due: "35 fictional days",
    dependency: "Evidence register, scope, decisions, messages, dashboards, risk, and closure records.",
    expectedOutcome: "New evidence or corrected metadata updates every affected decision record without silent overwrite.",
    validation: "Introduce late fictional evidence and verify versioned updates plus acknowledgement.",
    risk: "Different teams may rely on conflicting histories.",
    status: "Planned",
  },
  {
    id: "CA-08",
    action: "Add alternate ownership and overdue escalation to critical fictional corrective actions.",
    category: "Program governance",
    owner: "Security program owner",
    alternate: "Risk owner",
    due: "20 fictional days",
    dependency: "Action register, role directory, escalation thresholds, and dashboard.",
    expectedOutcome: "Critical actions remain owned when the primary is unavailable.",
    validation: "Simulate owner absence, missed due date, validation failure, and risk escalation.",
    risk: "Important improvements may silently age beyond acceptable risk.",
    status: "Approved",
  },
];

const validationCases = [
  ["PIR-T01", "Blame request", "A fictional leader asks which person caused the incident.", "Redirect the review to evidence, decisions, conditions, controls, ownership, and accountability.", "Blameless learning"],
  ["PIR-T02", "Hindsight bias", "A fictional decision is criticized using evidence discovered hours later.", "Evaluate the decision using information available at its decision time.", "Decision fairness"],
  ["PIR-T03", "Quiet source recovery", "Recovered fictional records change an earlier conclusion.", "Preserve prior versions, correct affected decisions, and reopen when required.", "Historical continuity"],
  ["PIR-T04", "Vague lesson", "The fictional review says communicate better.", "Convert it into audience, owner, approval, version, acknowledgement, due date, and validation action.", "Actionability"],
  ["PIR-T05", "Implemented action", "A fictional playbook was updated but not tested.", "Keep the action In validation rather than Complete.", "Outcome focus"],
  ["PIR-T06", "Service restored", "A fictional review claims recovery succeeded because the service responded.", "Review all clean-state, user, supplier, source, monitoring, and acceptance gates.", "Recovery accuracy"],
  ["PIR-T07", "One strong metric", "Fictional containment was fast, but side effects and validation were poor.", "Review quality, continuity, evidence, and outcome alongside speed.", "Balanced evaluation"],
  ["PIR-T08", "Private detail", "A fictional review deck includes unnecessary identity and user details.", "Minimize detail by purpose, audience, privacy, and confidentiality.", "Privacy"],
  ["PIR-T09", "Missing alternate", "A critical fictional action has one unavailable owner.", "Block closure or assign an authorized alternate and escalation.", "Ownership continuity"],
  ["PIR-T10", "Overdue action", "A high-risk fictional corrective action passes its due date.", "Escalate, reassess risk, update status, and set a decision deadline.", "Governance"],
  ["PIR-T11", "Review meeting complete", "The fictional team assumes every action can close after the meeting.", "Track actions through implementation, validation, acceptance, and residual-risk review.", "Lifecycle control"],
  ["PIR-T12", "Public portfolio", "A student plans to sanitize a real post-incident report.", "Fail portfolio validation and invent every organization, event, participant, decision, action, and outcome.", "Confidentiality and safety"],
];

const reviewMetrics = [
  ["Time to review", "How long after fictional stabilization does the review begin?", "Closure readiness, review charter, source availability, participant readiness, and risk.", "Faster is not always better if evidence is incomplete."],
  ["Evidence completeness", "What share of fictional review questions have qualified evidence and limitations?", "Evidence register, source health, conflicts, chronology, and owner statements.", "High completeness may hide weak relevance."],
  ["Decision-record coverage", "What share of material fictional decisions include question, evidence, options, authority, rationale, outcome, and review?", "Decision register and review matrix.", "Documentation quality does not prove decision quality."],
  ["Action ownership", "What share of fictional corrective actions have primary, alternate, authority, due date, dependency, and escalation?", "Action register and role acknowledgement.", "Assigned ownership does not prove progress."],
  ["Action validation rate", "What share of implemented fictional actions pass defined validation tests?", "Test evidence, source health, exercise results, acceptance, and retest.", "Some actions require long observation periods."],
  ["Overdue high-risk actions", "How many fictional critical actions exceed due dates or remain blocked?", "Aging, risk, owner, blocker, escalation, and leadership decision.", "Low counts can reflect weak risk classification."],
  ["Recurrence rate", "How often do fictional incident conditions or control gaps recur after action completion?", "Alerts, exercises, source recovery, incidents, user reports, and corrective-action history.", "A related event may have a different cause."],
  ["Review-debt aging", "How long do fictional missing evidence, unresolved disagreements, unvalidated actions, source gaps, or closure obligations remain open?", "Debt register, owner, risk, due date, escalation, and disposition.", "Some debt may be formally accepted and monitored."],
];

const commonMistakes = [
  ["The review becomes a blame meeting", "Participants focus on who made the wrong choice.", "People hide uncertainty and the system conditions remain unchanged.", "Use evidence, decision-time context, system factors, and accountable actions."],
  ["The timeline uses memory only", "Fictional participants reconstruct events from recollection.", "Confident stories may replace actual chronology.", "Start with preserved evidence and record conflicts."],
  ["Later facts rewrite earlier decisions", "The review assumes responders knew recovered evidence at the time.", "Hindsight bias produces unfair and unhelpful conclusions.", "Separate known-then from known-now."],
  ["Strengths are ignored", "The review records only failures.", "Effective practices may be removed or never standardized.", "Preserve what worked and why."],
  ["Lessons remain vague", "The report says improve communication and monitoring.", "No owner can implement or validate the recommendation.", "Create specific outcomes, owners, dates, dependencies, and tests."],
  ["Implementation equals completion", "A policy or playbook edit closes the action.", "The change may not work under realistic conditions.", "Require validation and acceptance."],
  ["Speed is the only measure", "Fast detection or containment is treated as complete success.", "Evidence, privacy, continuity, side effects, recovery, and trust disappear.", "Use balanced outcome measures."],
  ["Private detail spreads", "The review includes unnecessary identities, data, suppliers, and evidence.", "Learning creates new confidentiality risk.", "Apply minimum necessary and audience boundaries."],
  ["Actions lose ownership after closure", "The incident closes and the action register is forgotten.", "Residual risk and recurrence prevention disappear.", "Transfer actions into program governance with escalation."],
  ["Real review content enters the portfolio", "A student sanitizes a real report or meeting notes.", "Sensitive incidents, roles, systems, and decisions may remain identifiable.", "Invent every detail."],
];

const labSteps = [
  ["1", "Create the fictional review charter", "Define purpose, scope, participants, facilitator, evidence, confidentiality, outputs, due dates, authority, and safety.", "Post-incident review charter.", "The review is for learning and accountable improvement, not unsupported blame."],
  ["2", "Prepare the evidence pack", "Assemble fictional chronology, source health, scope versions, decisions, communications, preservation, containment, recovery, risk, and corrections.", "Review evidence pack.", "Known-then and known-now evidence remain separate."],
  ["3", "Reconstruct the lifecycle", "Map fictional preparation, detection, activation, scoping, containment, communication, preservation, eradication, recovery, observation, and closure.", "Lifecycle chronology.", "Every turning point links to evidence and limitations."],
  ["4", "Review decisions", "Compare fictional question, options, evidence, authority, assumptions, expected state, outcome, validation, rollback, and lesson.", "Decision-review matrix.", "Hindsight bias is explicitly checked."],
  ["5", "Identify strengths and gaps", "Review fictional roles, source health, playbooks, continuity, privacy, suppliers, evidence, communication, recovery, and leadership.", "Strength and gap register.", "Observations are system-focused and evidence-supported."],
  ["6", "Write lessons", "Create fictional lessons that state what should be preserved, changed, owned, tested, and measured.", "Lesson register.", "Each lesson names evidence and intended improvement."],
  ["7", "Create corrective actions", "Assign fictional owner, alternate, authority, due date, dependency, validation, risk, status, and escalation.", "Corrective-action register.", "No vague recommendation remains."],
  ["8", "Validate actions", "Define fictional expected outcome, test cases, evidence, success, failure, retest, and observation.", "Action-validation plan.", "Implemented cannot equal Complete without evidence."],
  ["9", "Approve and track", "Create fictional leadership brief, action dashboard, debt, risk, overdue escalation, and communication.", "Improvement governance package.", "Action progress remains visible after incident closure."],
  ["10", "Prepare the portfolio", "Combine charter, evidence, chronology, decisions, strengths, gaps, lessons, actions, validation, metrics, risk, and reflection.", "Public-safe Post-Incident Review Package.", "No real incident or review material appears."],
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of a fictional post-incident review?",
    choices: ["Identify one person to blame.", "Understand evidence, decisions, conditions, strengths, gaps, and owned improvements.", "Rewrite the incident so every decision looks correct.", "Close every action immediately."],
    answer: 1,
    explanation: "A professional review creates accountable learning without unsupported blame.",
  },
  {
    question: "How should a fictional decision be evaluated?",
    choices: ["Using every fact known after the incident.", "Using evidence, source health, authority, time pressure, and mission context available at decision time.", "Only by speed.", "Only by final outcome."],
    answer: 1,
    explanation: "Decision-time context reduces hindsight bias.",
  },
  {
    question: "When is a fictional corrective action complete?",
    choices: ["When assigned.", "When implemented.", "When its intended outcome is validated and accepted.", "When the review meeting ends."],
    answer: 2,
    explanation: "Implementation is an activity; validation demonstrates improvement.",
  },
  {
    question: "A fictional lesson says communicate better. What is strongest?",
    choices: ["Keep it as written.", "Convert it into a specific audience, owner, approval, due date, validation, and escalation action.", "Delete it.", "Assign it to everyone."],
    answer: 1,
    explanation: "Lessons must become specific governed actions.",
  },
  {
    question: "Recovered fictional evidence changes an earlier conclusion. What should happen?",
    choices: ["Ignore it after closure.", "Preserve prior versions, correct affected decisions, and reopen when required.", "Overwrite the old record.", "Blame the original analyst."],
    answer: 1,
    explanation: "Historical continuity requires visible correction and reassessment.",
  },
  {
    question: "Why should fictional reviews record strengths?",
    choices: ["To avoid all criticism.", "To preserve and standardize practices that improved response.", "To make the report longer.", "To replace corrective actions."],
    answer: 1,
    explanation: "Effective practices are part of organizational learning.",
  },
  {
    question: "Which portfolio approach is safest?",
    choices: ["Sanitize a real report.", "Use real meeting notes with fake names.", "Invent every organization, event, participant, decision, action, date, and outcome.", "Use real corrective actions without owners."],
    answer: 2,
    explanation: "Complete fictionalization protects real incidents, systems, people, and response capabilities.",
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

export default function PostIncidentReviewPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Evidence, Decisions, Learning, Actions, Validation, and Accountability
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.8 Post-Incident Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional response teams reconstruct the complete
            incident lifecycle, review decisions without hindsight blame,
            identify strengths and gaps, create owned corrective actions, and
            preserve validation, residual risk, closure, and reopening.
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
          lessonTitle="Post-Incident Review"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, incidents, participants, identities, services, sources, suppliers, decisions, actions, dates, and outcomes.",
            "I will distinguish fictional learning and accountability from punishment, unsupported blame, performance ranking, and hindsight bias.",
            "I will evaluate fictional decisions using evidence and conditions available at the time.",
            "I will preserve fictional strengths, gaps, uncertainty, source health, privacy, corrections, residual risk, and reopen triggers.",
            "I will convert fictional lessons into specific actions with owners, alternates, due dates, validation, risk, and escalation.",
            "I will not access, copy, sanitize, upload, reuse, or publish any real post-incident report, review notes, action register, incident record, organization, system, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Review Can Fail Even When Every Participant Agrees"
        >
          <p className="leading-8">
            Fictional Northbridge holds a review and quickly agrees that one
            responder should have acted sooner. The team does not compare
            evidence available at the time, does not review the Blind source,
            does not record what worked, and ends with recommendations such as
            improve communication. Everyone agrees, but no system condition,
            owner, validation test, or risk changes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>
              <p className="mt-2 leading-7">
                “Find the mistake, name who made it, and move on.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>
              <p className="mt-2 leading-7">
                “Reconstruct evidence and decisions, preserve strengths, examine
                system conditions, assign actions, and validate improvement.”
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
          title="The Incident Ends Only When Learning Becomes Change"
        >
          <p className="leading-8">
            Fictional response may reduce risk and restore services, yet the
            same weaknesses can remain in roles, source health, playbooks,
            communications, supplier coordination, recovery, evidence, and
            governance. A post-incident review protects institutional memory and
            turns response experience into measurable prevention, detection,
            readiness, and recovery improvement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Fairness and truth", "Fictional decisions are evaluated using evidence and context available at the time."],
              ["Program learning", "Fictional strengths are standardized and gaps become specific improvements."],
              ["Accountable change", "Fictional actions remain owned, validated, measured, escalated, and connected to residual risk."],
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

        <SectionCard eyebrow="Core Framework" title="The R-E-V-I-E-W Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["R — Reconstruct", "Build the fictional chronology, evidence, source health, scope, decisions, actions, corrections, recovery, and outcomes."],
              ["E — Evaluate context", "Review fictional known-then information, authority, options, assumptions, mission pressure, privacy, and dependencies."],
              ["V — Value strengths", "Identify fictional practices, decisions, ownership, communication, and controls that improved response."],
              ["I — Identify gaps", "Document fictional control, coordination, evidence, communication, recovery, supplier, and governance weaknesses."],
              ["E — Establish actions", "Assign fictional outcome, owner, alternate, due date, dependency, validation, risk, status, and escalation."],
              ["W — Watch improvement", "Track fictional aging, tests, recurrence, residual risk, debt, closure, and reopen triggers."],
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
            <p className="font-black text-blue-100">Decision-ready review statement</p>
            <p className="mt-2 leading-7">
              Fictional Northbridge's narrow containment, source-health
              reclassification, explicit communication correction, and staged
              recovery protected mission and evidence. Improvement is required
              for identity lifecycle ownership, accessibility review, supplier
              escalation, source-health playbook branches, correction
              acknowledgement, and alternate action ownership.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Post-Incident Review">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 1"
          title="Apply Eight Review Principles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.principle}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.meaning}</p>

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
                    Weak practice
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weakPractice}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Use a Nine-Phase Review Lifecycle"
        >
          <div className="grid gap-5">
            {reviewPhases.map((item) => (
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
                    ["Inputs", item.inputs],
                    ["Outputs", item.outputs],
                    ["Quality gate", item.gate],
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
          eyebrow="Instructional Section 3"
          title="Review Twelve Incident-Response Domains"
        >
          <div className="grid gap-5">
            {reviewDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.domain}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Strength", item.strength],
                    ["Gap", item.gap],
                    ["Lesson", item.lesson],
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
          title="Reconstruct Twelve Fictional Turning Points"
        >
          <div className="grid gap-4">
            {chronology.map(([time, event, evidence, reviewMeaning]) => (
              <article
                key={`${time}-${event}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.2fr_0.35fr_1fr]"
              >
                <p className="font-mono text-lg font-black text-cyan-200">
                  {time}
                </p>
                <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-3 text-sm text-blue-50">
                  {evidence}
                </div>
                <div>
                  <p className="leading-7 text-slate-300">{event}</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-200">
                    Review meaning: {reviewMeaning}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Evaluate Eight Material Decisions"
        >
          <div className="grid gap-5">
            {decisionReviews.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Decision question", item.question],
                    ["Known at the time", item.knownThen],
                    ["Options considered", item.options],
                    ["Selected choice", item.choice],
                    ["Rationale", item.rationale],
                    ["Actual outcome", item.outcome],
                    ["Review lesson", item.lesson],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.decision}-${label}`}
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
          title="Convert Eight Lessons into Improvement"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {lessonRegister.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.lesson}
                </h3>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Observation", item.observation],
                    ["Evidence", item.evidence],
                    ["Improvement", item.improvement],
                    ["Owner", item.owner],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.lesson}-${label}`}
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
          title="Govern Eight Corrective Actions"
        >
          <div className="grid gap-5">
            {correctiveActions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                      {item.id}
                    </span>
                    <h3 className="mt-3 text-xl font-black text-white">
                      {item.action}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-purple-200">
                      {item.category}
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary owner", item.owner],
                    ["Alternate owner", item.alternate],
                    ["Due date", item.due],
                    ["Dependency", item.dependency],
                    ["Expected outcome", item.expectedOutcome],
                    ["Validation", item.validation],
                    ["Risk if delayed", item.risk],
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
          eyebrow="Instructional Section 8"
          title="Validate Twelve Review Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Case", "Type", "Fictional input", "Expected result", "Quality protected"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(([id, type, input, expected, protects]) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Measure Eight Review Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewMetrics.map(([metric, question, evidence, limitation]) => (
              <article
                key={metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{metric}</h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-6">{limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Review Architecture"
          title="Northbridge Incident-to-Improvement Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches learning, accountability,
            and improvement without real incidents, people, organizations,
            systems, suppliers, records, decisions, or review materials.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Response inputs", "Preparation, detection, scope, containment, communication"],
                ["Recovery inputs", "Cause, clean state, waves, validation, observation"],
                ["Evidence inputs", "Chronology, source health, decisions, corrections, limitations"],
                ["Governance inputs", "Owners, authority, privacy, risk, closure, reopening"],
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
                Fictional Review Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Reconstruct", "Timeline, evidence, source health, decisions"],
                  ["Contextualize", "Known then, authority, mission, uncertainty"],
                  ["Preserve strengths", "What worked, why, where to standardize"],
                  ["Identify gaps", "Controls, roles, sources, communication, recovery"],
                  ["Create lessons", "Evidence, desired change, owner, validation"],
                  ["Assign actions", "Alternate, due date, dependency, risk, status"],
                  ["Validate", "Test, evidence, acceptance, retest, observation"],
                  ["Govern", "Metrics, debt, escalation, closure, reopening"],
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
                ["Team output", "Shared timeline, strengths, gaps, lessons"],
                ["Program output", "Actions, owners, validation, metrics, debt"],
                ["Leadership output", "Risk, resources, priorities, decisions"],
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
          title="Fake Northbridge Post-Incident Review Dashboard"
          subtitle="Fictional review readiness, evidence completeness, decision coverage, strengths, gaps, corrective actions, validation, aging, residual risk, and reopening."
          metrics={[
            {
              label: "Material fictional decisions reviewed",
              value: "8 / 8",
              note: "Every decision includes known-then evidence, options, authority, rationale, outcome, and lesson.",
            },
            {
              label: "Fictional corrective actions",
              value: "8",
              note: "Five are Approved or In progress; three remain Planned and require scheduling or dependency confirmation.",
            },
            {
              label: "Open fictional review debt",
              value: "6",
              note: "Source reconciliation, one alternate owner, supplier validation, correction acknowledgement, residual-risk date, and retest remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="High-Risk Corrective Action Requires Escalation"
          severity="High"
          time="3:20 PM"
          source="Fake Northbridge Improvement Governance Console"
          details="Fictional corrective action CA-02 addresses stale temporary authority and active-session review. The action is blocked by an unavailable source owner, and its due date is approaching without a validated alternate."
          recommendation="Assign the fictional alternate identity-governance owner, reassess residual risk, define the dependency decision deadline, and escalate if validation cannot occur within the approved period."
        />

        <FakeLogPanel
          title="Fake Post-Incident Review Timeline"
          logs={[
            "DAY-1 CHARTER status='approved'",
            "DAY-2 EVIDENCE completeness='conditional'",
            "DAY-2 TIMELINE turning-points='12'",
            "DAY-3 DECISIONS reviewed='8'",
            "DAY-3 STRENGTHS recorded='8'",
            "DAY-3 GAPS recorded='12'",
            "DAY-4 LESSONS accepted='8'",
            "DAY-4 ACTIONS created='8'",
            "DAY-5 ACTIONS approved='5'",
            "DAY-5 VALIDATION planned='8'",
            "DAY-6 DEBT open='6'",
            "DAY-6 ALERT action='CA-02'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Review Evidence Supports—and What It Does Not Prove"
        >
          <div className="grid gap-5">
            {[
              ["REVIEW-E01", "Scope versions", "Show how confirmed, possible, Unknown, and excluded entities changed.", "Do not prove every earlier classification was wrong."],
              ["REVIEW-E02", "Decision records", "Show what evidence, options, authority, and assumptions existed at decision time.", "Do not prove the selected option was the only reasonable choice."],
              ["REVIEW-E03", "Communication versions", "Show facts, uncertainty, guidance, corrections, and acknowledgement.", "Do not prove every recipient understood or acted correctly."],
              ["REVIEW-E04", "Containment validation", "Shows the targeted session reached the expected Closed state.", "Does not prove root cause removal or complete recovery."],
              ["REVIEW-E05", "Recovery gates", "Show which technical, data, supplier, source, and user conditions passed.", "Do not prove all domains carried equal risk."],
              ["REVIEW-E06", "Source-health history", "Shows where evidence was Healthy, Degraded, Blind, or Recovering.", "Does not prove how responders would have acted with perfect evidence."],
              ["REVIEW-E07", "User and supplier records", "Show limited impact, dependency, commitments, queues, and acceptance.", "Do not prove broad population or causation."],
              ["REVIEW-E08", "Corrective-action register", "Shows owners, due dates, validation, risk, status, and escalation.", "Does not prove improvement until outcomes are validated."],
            ].map(([id, source, supports, limits]) => (
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
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-6">{supports}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{limits}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Post-Incident Conclusion Is Best Supported?"
          question="Which fictional conclusion best fits the Northbridge review evidence?"
          evidence={[
            "One narrow session-containment action validated successfully.",
            "The group source was Degraded and the data source was Blind.",
            "A decision-changing communication required correction.",
            "Recovery expansion was blocked by incomplete clean-state gates.",
            "Critical service continuity remained available.",
            "Supplier escalation and accessibility review were delayed.",
            "Several corrective actions remain unvalidated.",
          ]}
          options={[
            "The response demonstrated strong narrow containment, source-health honesty, correction, continuity, and recovery discipline, while requiring specific improvements in lifecycle ownership, accessibility, supplier escalation, acknowledgement, and action validation.",
            "One responder caused every weakness.",
            "The response was completely successful because the service recovered.",
            "The response failed completely because some evidence was Blind.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves both strengths and evidence-supported gaps without unsupported blame or oversimplification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Post-Incident Review Errors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article
                key={mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Post-Incident Review Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, reuse, adapt, or publish any real incident report,
            review notes, action register, participant record, system detail,
            organization, or person.
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
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
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
          title="A Review Starts with Who Caused This?"
          scenario="A fictional leader opens the post-incident review by asking which responder caused the event. The evidence shows unclear lifecycle ownership, Degraded source visibility, a missing supplier alternate, and several reasonable decisions made under uncertainty."
          choices={[
            {
              label: "Choice A",
              response: "Redirect the fictional review toward chronology, evidence, decision-time context, roles, controls, dependencies, ownership, strengths, gaps, and specific accountable improvements.",
              outcome: "Best defensive choice. It preserves accountability while avoiding unsupported blame.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Name the responder who handled the first alert.",
              outcome: "Weak. The evidence does not support personal causation and system conditions remain unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Avoid all accountability so nobody feels blamed.",
              outcome: "Weak. Blameless review still requires decisions, actions, owners, risk, and validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Corrective Action Was Implemented but Never Tested"
          scenario="Fictional corrective action CA-01 updates the response playbook with source-health branches. The document is published, but no exercise or decision test has been run."
          choices={[
            {
              label: "Choice A",
              response: "Keep the fictional action In validation, run Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering scenarios, record outcomes, correct failures, and obtain owner acceptance before completion.",
              outcome: "Best choice. Implementation is not the same as validated improvement.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Mark the action Complete because the document changed.",
              outcome: "Weak. The new branches may not produce correct decisions under pressure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the action because testing takes time.",
              outcome: "Weak. The evidence-supported lesson remains unresolved.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Post-Incident Review before a Governance Board"
        >
          <p className="leading-8">
            Fictional Northbridge's response contained one stale session,
            protected continuity, corrected an unsupported statement, and
            blocked premature recovery. The review also identifies identity
            lifecycle, accessibility, supplier escalation, source-health
            branching, acknowledgement, alternate ownership, and validation
            gaps. Leadership wants the incident closed, but several corrective
            actions and source-reconciliation obligations remain open.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend the review charter", "Explain fictional purpose, scope, participants, authority, evidence, confidentiality, outputs, due dates, and safety."],
              ["Defend decision fairness", "Explain fictional known-then evidence, options, authority, assumptions, pressure, expected outcome, actual result, and hindsight checks."],
              ["Defend strengths and gaps", "Explain fictional evidence showing what helped and what limited preparation, detection, scope, containment, communication, evidence, recovery, and closure."],
              ["Defend corrective actions", "Explain fictional owner, alternate, authority, due date, dependency, expected outcome, validation, risk, status, and escalation."],
              ["Defend closure status", "Explain fictional source reconciliation, action validation, debt, residual risk, archive, observation, and reopen triggers."],
              ["Defend privacy and portfolio safety", "Explain fictional minimum necessary detail, audience boundaries, review confidentiality, and complete invention."],
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
              Produce a fictional review charter, evidence pack, twelve-point
              chronology, eight-decision matrix, strength register, gap
              register, eight lessons, eight corrective actions, validation
              cases, action dashboard, overdue escalation, residual-risk
              statement, leadership brief, closure recommendation, reopen
              triggers, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Post-Incident Review Checklist"
          items={[
            "I can distinguish fictional learning, accountability, and improvement from unsupported blame or punishment.",
            "I can create a fictional review charter with purpose, scope, participants, authority, evidence, confidentiality, outputs, due dates, and safety.",
            "I can reconstruct fictional event, evidence, report, decision, action, validation, communication, correction, recovery, and closure timing.",
            "I can evaluate fictional decisions using information available at decision time.",
            "I can preserve fictional strengths as well as gaps.",
            "I can identify fictional control, coordination, evidence, communication, supplier, recovery, privacy, and governance gaps.",
            "I can write fictional lessons tied to evidence, desired change, owner, and validation.",
            "I can create fictional corrective actions with primary and alternate owners, authority, due dates, dependencies, risk, status, and escalation.",
            "I can distinguish fictional assignment, implementation, validation, acceptance, and completion.",
            "I can track fictional action aging, blockers, overdue risk, recurrence, debt, closure, and reopening.",
            "I can apply fictional privacy, confidentiality, minimum necessary, and audience boundaries to review outputs.",
            "I can create a completely fictional review artifact without exposing real incidents, people, systems, organizations, decisions, or response capabilities.",
          ]}
        />

        <MiniQuiz
          title="A7.8 Mini Quiz: Post-Incident Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Post-Incident Review Package for the Northbridge Student-Support Cooperative. Include review purpose, scope, participants, facilitator, authority, confidentiality, safety boundary, outputs, due dates, evidence pack, source health, known-then evidence, known-now evidence, event time, report time, decision time, action time, validation time, communication time, correction time, recovery time, closure time, preparation review, role review, activation review, detection review, scope review, containment review, continuity review, communication review, evidence review, cause review, recovery review, leadership review, closure review, decision question, options, authority, rationale, assumptions, expected outcome, actual outcome, side effects, strengths, control gaps, coordination gaps, evidence gaps, communication gaps, recovery gaps, contributing conditions, lessons, preventive actions, detection improvements, process improvements, corrective-action IDs, owners, alternate owners, due dates, dependencies, expected outcomes, validation criteria, risks, statuses, escalation, review metrics, action aging, recurrence, review debt, residual risk, leadership brief, closure recommendation, archive, reopen triggers, reflection, and a statement that every organization, event, participant, service, source, supplier, decision, action, date, and outcome is invented."
          tips={[
            "Evaluate fictional decisions using the evidence and conditions available at the time.",
            "Record fictional strengths and explain why they worked.",
            "Convert every fictional gap into a specific owned and testable action.",
            "Keep fictional implementation, validation, acceptance, completion, closure, and reopening separate.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Metrics and Continuous Improvement?"
        >
          <p className="leading-8">
            Before moving to A7.9, rate your readiness from 1 to 5 for review
            chartering, evidence preparation, chronology, hindsight control,
            decision review, strengths, gaps, lessons, actions, validation,
            aging, escalation, residual risk, closure, reopening, privacy, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional blameless review still requires accountability.",
              "I can separate fictional known-then evidence from later-discovered evidence.",
              "I can reconstruct a fictional response across the full lifecycle.",
              "I can preserve fictional strengths and system gaps.",
              "I can convert fictional lessons into specific corrective actions.",
              "I can keep fictional actions open until validation and acceptance.",
              "I can defend fictional closure or reopening using evidence, risk, debt, and owners.",
              "I can produce a safe fictional review package without adapting real reports or meeting notes.",
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
            Record one fictional strength, one gap, one evidence-supported
            lesson, one corrective action, one validation test, one overdue
            escalation, one reopen trigger, and one question you will carry
            into A7.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional post-incident review should create learning and accountability without unsupported blame.",
            "Fictional decisions should be evaluated using evidence, source health, authority, time pressure, and mission context available at decision time.",
            "A strong fictional review preserves what worked as well as what failed.",
            "Preparation, roles, detection, scoping, containment, continuity, communication, evidence, cause, recovery, leadership, closure, and reopening all deserve review.",
            "Fictional lessons should identify evidence, desired change, owner, and validation.",
            "Fictional corrective actions need primary and alternate owners, authority, due dates, dependencies, expected outcomes, validation, risk, status, and escalation.",
            "Assigned, implemented, validated, accepted, and complete are different fictional action states.",
            "Review metrics should balance speed, evidence, decision quality, ownership, validation, recurrence, and debt.",
            "Closure should preserve fictional residual risk, source reconciliation, action ownership, archives, and reopen triggers.",
            "Every CyberShield post-incident artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real incidents, systems, people, or response capabilities.",
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
            Next, learn how fictional incident-response programs define useful
            metrics, avoid vanity measures, compare speed with quality,
            normalize context, track action validation, measure recurrence, and
            create continuous-improvement feedback loops.
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