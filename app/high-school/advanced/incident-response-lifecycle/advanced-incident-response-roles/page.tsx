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
const previousPage = modulePath;
const nextLesson = `${modulePath}/preparation-and-playbook-design`;

const objectives = [
  "Distinguish fictional incident command, technical analysis, identity, service, infrastructure, evidence, communications, privacy, continuity, recovery, supplier, and leadership responsibilities.",
  "Create fictional role charters with mission, authority, decision rights, boundaries, required evidence, alternates, availability, escalation paths, and handoff acceptance.",
  "Evaluate fictional role conflicts, unavailable owners, duplicate command, missing authority, responsibility gaps, overloaded specialists, and abandoned coordination.",
  "Use fictional separation of duties so that incident declaration, containment approval, evidence handling, communication approval, recovery acceptance, residual-risk acceptance, closure, and reopening remain properly governed.",
  "Create a portfolio-ready fictional Incident Response Role and Authority Package containing a role matrix, decision-rights model, alternate-owner map, handoff checklist, conflict-resolution process, escalation map, readiness metrics, and reflection.",
];

const vocabulary = [
  [
    "Incident lead",
    "The fictional coordinating role responsible for activation, scope, state, priorities, owner assignments, decision records, conflicts, deadlines, and overall response continuity.",
  ],
  [
    "Technical analysis lead",
    "The fictional role coordinating evidence review, technical questions, hypotheses, source health, containment options, validation, and technical risk communication.",
  ],
  [
    "Service owner",
    "The fictional role accountable for service purpose, users, dependencies, impact, continuity, recovery priorities, and business acceptance.",
  ],
  [
    "Identity owner",
    "The fictional role accountable for accounts, roles, groups, sessions, approvals, extensions, revocations, effective access, and identity validation.",
  ],
  [
    "Infrastructure owner",
    "The fictional role accountable for shared compute, network, platform, hosting, storage, configuration, availability, and recovery dependencies.",
  ],
  [
    "Evidence coordinator",
    "The fictional role maintaining evidence identity, purpose, provenance, timing, integrity, access, custody, retention, transfer, limitations, and reporting records.",
  ],
  [
    "Communications lead",
    "The fictional role coordinating audience, facts, uncertainty, approvals, timing, distribution, corrections, guidance, and next-update commitments.",
  ],
  [
    "Privacy reviewer",
    "The fictional role evaluating purpose limitation, data minimization, access, sharing, retention, user effect, and residual privacy risk.",
  ],
  [
    "Continuity owner",
    "The fictional role responsible for keeping critical mission functions operating safely through workarounds, alternate services, prioritization, and user guidance.",
  ],
  [
    "Recovery owner",
    "The fictional role coordinating clean-state criteria, staged restoration, validation, rollback, monitoring, dependencies, and recovery acceptance.",
  ],
  [
    "Supplier owner",
    "The fictional role coordinating an external provider relationship, bounded questions, contracts, service dependencies, response expectations, evidence, and escalation.",
  ],
  [
    "Leadership decision owner",
    "The fictional role authorized to resolve resource conflict, accept residual risk, approve major service disruption, or make decisions beyond routine operational authority.",
  ],
  [
    "Decision right",
    "A fictional documented authority to make a specific response decision under defined conditions and limits.",
  ],
  [
    "Authority boundary",
    "A fictional limit describing which decisions a role may make and which decisions require another owner or escalation.",
  ],
  [
    "Role charter",
    "A fictional document defining a role's mission, responsibilities, authority, inputs, outputs, alternates, dependencies, availability, escalation, and review.",
  ],
  [
    "Primary owner",
    "The fictional first accountable role for a defined responsibility or decision.",
  ],
  [
    "Alternate owner",
    "The fictional approved replacement who assumes responsibility when the primary owner is unavailable or conflicted.",
  ],
  [
    "Handoff acceptance",
    "A fictional confirmation that the receiving role understands the question, authority, evidence, deadline, current state, dependencies, and next action.",
  ],
  [
    "Separation of duties",
    "A fictional control that prevents one role from making, executing, validating, and approving every high-impact decision without independent review.",
  ],
  [
    "Coordinating owner",
    "The fictional role preserving the whole response while specialists answer bounded questions.",
  ],
  [
    "Responsibility gap",
    "A fictional required task or decision with no accountable owner.",
  ],
  [
    "Duplicate command",
    "A fictional condition in which several roles issue conflicting instructions or believe they control the same decision.",
  ],
  [
    "Role conflict",
    "A fictional situation in which one person's responsibilities, incentives, authority, evidence access, or decision interests may interfere with independent judgment.",
  ],
  [
    "Availability expectation",
    "A fictional documented response time, alternate path, and escalation trigger for a role during different urgency levels.",
  ],
  [
    "Decision debt",
    "Fictional unresolved work caused by unclear authority, missing owners, stale contacts, unaccepted handoffs, delayed approvals, or undocumented decisions.",
  ],
];

const roleCatalog = [
  {
    role: "Incident lead",
    mission:
      "Maintain one coordinated fictional response from activation through closure or reopening.",
    coreResponsibilities:
      "Confirm activation, preserve scope, set case state, assign owners, manage deadlines, record major decisions, resolve coordination conflicts, approve transitions within authority, and communicate current response status.",
    decisionRights:
      "May activate routine incident coordination, assign work, set operational priorities, request bounded evidence, schedule updates, and escalate decisions beyond authority.",
    authorityBoundary:
      "Does not independently approve every technical action, privacy decision, major service interruption, public message, legal conclusion, or residual-risk acceptance.",
    inputs:
      "Initial report, evidence summary, source health, service context, owner availability, priority, active impact, continuity needs, and playbook.",
    outputs:
      "Activation decision, role assignments, response state, decision log, owner deadlines, escalation path, update cadence, and closure recommendation.",
    alternate:
      "Named deputy incident lead with identical documentation access and a formal transfer checklist.",
  },
  {
    role: "Technical analysis lead",
    mission:
      "Coordinate fictional technical evidence, hypotheses, source-health interpretation, and validation.",
    coreResponsibilities:
      "Review evidence provenance, compare alternatives, identify evidence gaps, assess technical scope, propose containment options, define validation, and explain technical uncertainty.",
    decisionRights:
      "May organize technical review, assign technical questions, recommend actions, define technical tests, and mark evidence conclusions within the documented scope.",
    authorityBoundary:
      "Does not independently declare the incident, approve business interruption, communicate externally, accept residual risk, or close the response.",
    inputs:
      "Logs, alerts, case notes, source-health records, system context, service dependencies, identity evidence, and owner statements.",
    outputs:
      "Technical assessment, hypotheses, evidence matrix, scope inputs, containment options, validation criteria, source-health limits, and recovery evidence needs.",
    alternate:
      "Secondary analyst lead with access to the evidence register, current hypotheses, question log, and decision history.",
  },
  {
    role: "Identity and access owner",
    mission:
      "Answer fictional questions about accounts, roles, groups, sessions, approvals, effective access, and identity recovery.",
    coreResponsibilities:
      "Validate identity state, approval scope, role assignment, group membership, session status, sponsor, owner, revocation, recovery, and post-action state.",
    decisionRights:
      "May approve authorized identity actions within policy, confirm identity evidence, assign identity specialists, and validate identity recovery.",
    authorityBoundary:
      "Does not determine complete incident scope, service impact, communications, evidence custody, or overall closure.",
    inputs:
      "Identity ID, role, group, session, approval, extension, sponsor, owner, source health, timing, service relationship, and response question.",
    outputs:
      "Identity evidence, authorization conclusion, approved action, validation result, remaining limitations, and identity residual risk.",
    alternate:
      "Named access-governance alternate with equivalent authority for emergency review.",
  },
  {
    role: "Service owner",
    mission:
      "Protect fictional service purpose, users, dependencies, continuity, impact assessment, and recovery acceptance.",
    coreResponsibilities:
      "Explain service function, critical users, dependencies, acceptable interruption, current impact, continuity options, recovery sequence, business validation, and owner decisions.",
    decisionRights:
      "May approve service-specific continuity steps, validate service impact, accept service restoration, and recommend service containment within authority.",
    authorityBoundary:
      "Does not independently alter identity policy, preserve evidence, issue public communication, or accept organization-wide residual risk.",
    inputs:
      "Service status, user reports, dependency map, identity relationships, current changes, supplier state, containment options, recovery evidence, and continuity plan.",
    outputs:
      "Impact statement, criticality, continuity decision, dependency list, recovery acceptance criteria, and service residual risk.",
    alternate:
      "Deputy service owner or continuity owner with documented service decision authority.",
  },
  {
    role: "Infrastructure owner",
    mission:
      "Coordinate fictional shared platform, network, compute, storage, hosting, and infrastructure dependencies.",
    coreResponsibilities:
      "Provide platform state, configuration context, dependency evidence, infrastructure containment options, restoration support, capacity, source health, and infrastructure validation.",
    decisionRights:
      "May perform approved infrastructure actions within the documented plan and validate platform restoration.",
    authorityBoundary:
      "Does not independently decide business continuity, identity authorization, public communication, or final incident closure.",
    inputs:
      "Affected service, network zone, platform, configuration, hosting relationship, source health, dependencies, action request, and rollback criteria.",
    outputs:
      "Infrastructure evidence, approved action result, platform validation, dependency status, rollback readiness, and remaining infrastructure risk.",
    alternate:
      "Secondary platform or network owner selected according to the affected infrastructure domain.",
  },
  {
    role: "Evidence coordinator",
    mission:
      "Preserve fictional evidence identity, purpose, provenance, timing, integrity, access, custody, retention, and transfer.",
    coreResponsibilities:
      "Assign evidence IDs, document source and handler, record purpose and scope, preserve original records conceptually, track controlled copies, maintain access history, document limitations, and support reporting.",
    decisionRights:
      "May enforce evidence-register requirements, reject unscoped evidence requests, and require custody or integrity documentation.",
    authorityBoundary:
      "Does not independently determine technical meaning, legal outcome, incident severity, business impact, or containment.",
    inputs:
      "Evidence request, authority, scope, source, event time, collection time, handler, integrity record, access need, retention rule, and privacy requirement.",
    outputs:
      "Evidence register, custody history, integrity record, access log, transfer record, limitation statement, retention decision, and public-safe summary.",
    alternate:
      "Named evidence-record alternate with access to the register and custody process.",
  },
  {
    role: "Communications lead",
    mission:
      "Deliver fictional audience-specific, evidence-bounded, approved, timely, and correctable messages.",
    coreResponsibilities:
      "Map audiences, draft updates, preserve confirmed facts and uncertainty, manage approvals, coordinate timing, track distribution, correct errors, and record next-update commitments.",
    decisionRights:
      "May coordinate internal update timing and approved templates; may not publish beyond assigned authority.",
    authorityBoundary:
      "Does not invent technical conclusions, assign blame, disclose unnecessary details, or independently approve legal, privacy, or public statements.",
    inputs:
      "Confirmed facts, supported conclusions, uncertainty, current impact, owner decisions, approved actions, audience needs, privacy constraints, and next milestone.",
    outputs:
      "Analyst update, service-owner update, user guidance, supplier message, leadership brief, correction notice, distribution log, and next-update schedule.",
    alternate:
      "Deputy communications coordinator with template and approval-chain access.",
  },
  {
    role: "Privacy and governance reviewer",
    mission:
      "Ensure fictional response evidence, actions, communications, sharing, and retention remain purpose-limited and appropriately governed.",
    coreResponsibilities:
      "Review minimization, access, sharing, retention, user effect, evidence purpose, communication content, supplier exchange, correction, and residual privacy risk.",
    decisionRights:
      "May require privacy review, restrict unnecessary fields, request narrower sharing, and escalate decisions beyond routine authority.",
    authorityBoundary:
      "Does not replace technical analysis, incident command, service recovery, or leadership risk acceptance.",
    inputs:
      "Data categories, purpose, affected users, evidence request, audience, sharing plan, access model, retention, supplier relationship, and legal or policy trigger.",
    outputs:
      "Privacy decision, minimization requirement, sharing boundary, retention instruction, approval condition, user-impact guidance, and residual privacy risk.",
    alternate:
      "Named governance alternate with equivalent review authority.",
  },
  {
    role: "Continuity owner",
    mission:
      "Maintain fictional critical mission functions while incident response and recovery work continue.",
    coreResponsibilities:
      "Identify essential workflows, acceptable interruption, alternate processes, user priorities, dependency constraints, temporary guidance, capacity, and continuity risks.",
    decisionRights:
      "May activate approved continuity options and prioritize critical workflows within documented authority.",
    authorityBoundary:
      "Does not independently approve technical containment, evidence handling, identity actions, or organization-wide risk acceptance.",
    inputs:
      "Service impact, user needs, dependency status, containment options, expected duration, capacity, supplier state, and recovery plan.",
    outputs:
      "Continuity decision, alternate workflow, user priority, operational limitation, service expectation, and transition-back criteria.",
    alternate:
      "Service deputy or operations continuity alternate.",
  },
  {
    role: "Recovery owner",
    mission:
      "Coordinate fictional eradication, clean-state criteria, staged restoration, validation, rollback, monitoring, and acceptance.",
    coreResponsibilities:
      "Translate root-cause evidence into approved recovery tasks, sequence dependencies, define clean state, manage staged restoration, monitor validation, maintain rollback, and coordinate owner acceptance.",
    decisionRights:
      "May direct approved recovery sequence and pause restoration when quality gates fail.",
    authorityBoundary:
      "Does not independently accept business impact, close the response, approve public messaging, or override evidence and privacy requirements.",
    inputs:
      "Root-cause evidence, containment state, service dependencies, identity state, configuration, data integrity, backup status, supplier readiness, validation criteria, and rollback.",
    outputs:
      "Recovery plan, clean-state checklist, staged rollout, validation results, rollback decision, monitoring period, acceptance record, and residual risk.",
    alternate:
      "Deputy recovery coordinator with authority to pause or roll back within the approved plan.",
  },
  {
    role: "Supplier relationship owner",
    mission:
      "Coordinate fictional external-provider dependencies, bounded requests, response expectations, evidence exchange, service commitments, and escalation.",
    coreResponsibilities:
      "Confirm supplier contact, contract expectations, affected service, evidence needs, update cadence, dependency state, confidentiality, action ownership, and escalation.",
    decisionRights:
      "May communicate approved bounded requests and activate documented supplier escalation paths.",
    authorityBoundary:
      "Does not disclose unrestricted internal details, accept supplier conclusions without review, or transfer incident command.",
    inputs:
      "Supplier relationship, service dependency, contract expectation, evidence question, source health, timing, confidentiality boundary, and owner deadline.",
    outputs:
      "Supplier request, response record, dependency assessment, commitment, escalation, limitation, and supplier residual risk.",
    alternate:
      "Named contract or service relationship alternate.",
  },
  {
    role: "Leadership decision owner",
    mission:
      "Resolve fictional high-impact resource, continuity, policy, risk, or authority decisions beyond operational roles.",
    coreResponsibilities:
      "Review bounded decision options, mission impact, evidence, uncertainty, continuity, privacy, resources, recovery, residual risk, and owner recommendations.",
    decisionRights:
      "May approve major service interruption, resource redirection, exceptional continuity choices, organization-level risk acceptance, and decisions defined by governance.",
    authorityBoundary:
      "Does not replace technical evidence review, evidence custody, service validation, or detailed incident coordination.",
    inputs:
      "Decision statement, options, evidence, limitations, active impact, urgency, mission tradeoffs, owner recommendations, privacy, cost, and residual risk.",
    outputs:
      "Leadership decision, authority record, selected option, conditions, owner assignments, review trigger, and risk acceptance or rejection.",
    alternate:
      "Named executive or governance alternate with equivalent delegated authority.",
  },
];

const decisionRights = [
  {
    decision: "Activate incident coordination",
    primary: "Incident lead",
    requiredInput:
      "Neutral observation, initial evidence, source health, mission relevance, urgency, owner availability, and activation criteria.",
    independentReview:
      "Technical analysis lead or appropriate service owner may challenge the activation basis.",
    escalation:
      "Leadership only when activation creates major policy, resource, or service consequences beyond routine authority.",
  },
  {
    decision: "Set initial severity, confidence, and priority",
    primary: "Incident lead with technical analysis lead",
    requiredInput:
      "Potential consequence, evidence certainty, active effect, scope, source health, timing, recoverability, and mission context.",
    independentReview:
      "Service, identity, privacy, or source owners review their affected dimensions.",
    escalation:
      "Escalate when ratings drive exceptional service interruption, policy exception, or leadership decision.",
  },
  {
    decision: "Approve identity containment",
    primary: "Identity and access owner",
    requiredInput:
      "Identity state, role, group, session, authorization, active effect, scope, continuity impact, validation, and rollback.",
    independentReview:
      "Incident lead confirms coordination; service owner reviews continuity effect.",
    escalation:
      "Leadership or governance review for broad, high-impact, or policy-exception actions.",
  },
  {
    decision: "Approve service containment",
    primary: "Service owner within authority",
    requiredInput:
      "Current risk, user impact, dependencies, continuity, evidence preservation, reversibility, validation, and rollback.",
    independentReview:
      "Technical lead reviews effectiveness; continuity owner reviews mission effect.",
    escalation:
      "Leadership approval for major or prolonged service interruption.",
  },
  {
    decision: "Preserve and share evidence",
    primary: "Evidence coordinator with privacy reviewer",
    requiredInput:
      "Purpose, authority, scope, source, provenance, access need, recipient, retention, integrity, and privacy.",
    independentReview:
      "Technical lead confirms relevance; incident lead confirms decision use.",
    escalation:
      "Governance, privacy, or legal authority when sharing or retention exceeds routine boundaries.",
  },
  {
    decision: "Approve stakeholder communication",
    primary: "Communications lead within assigned audience",
    requiredInput:
      "Confirmed facts, supported conclusions, uncertainty, impact, guidance, approval chain, privacy, timing, and next update.",
    independentReview:
      "Incident lead, technical lead, service owner, privacy reviewer, and leadership as required by audience.",
    escalation:
      "Public, legal, policy, or high-impact messages require the documented authority.",
  },
  {
    decision: "Approve staged recovery",
    primary: "Recovery owner with service owner",
    requiredInput:
      "Root-cause evidence, clean-state criteria, dependencies, identity, configuration, data integrity, source health, validation, monitoring, and rollback.",
    independentReview:
      "Technical lead validates evidence; continuity owner validates transition effect.",
    escalation:
      "Leadership when recovery risk, resource need, service interruption, or residual risk exceeds operational authority.",
  },
  {
    decision: "Accept residual risk",
    primary: "Risk or leadership decision owner",
    requiredInput:
      "Known gap, mission impact, likelihood, duration, compensating controls, owner, review date, and alternatives.",
    independentReview:
      "Incident, service, technical, privacy, continuity, and recovery owners provide bounded recommendations.",
    escalation:
      "Escalate according to the documented risk threshold and authority level.",
  },
  {
    decision: "Close the incident",
    primary: "Incident lead within closure authority",
    requiredInput:
      "Questions resolved, source health reviewed, scope and impact documented, actions validated, recovery accepted, residual risk assigned, review obligations, and reopen triggers.",
    independentReview:
      "Service, technical, identity, evidence, privacy, recovery, and risk owners confirm their criteria.",
    escalation:
      "Leadership or governance when unresolved risk requires exceptional acceptance.",
  },
  {
    decision: "Reopen the incident",
    primary: "Incident lead or documented review authority",
    requiredInput:
      "New evidence, failed validation, changed scope, repeated behavior, source recovery, or residual-risk trigger.",
    independentReview:
      "Relevant technical and service owners verify the trigger and impact on the prior decision.",
    escalation:
      "Escalate when the reopened condition requires higher authority or broader coordination.",
  },
];

const handoffFields = [
  {
    field: "Current incident state",
    requirement:
      "Name the fictional state, activation basis, severity, confidence, priority, active impact, and current response phase.",
    failure:
      "The receiving role may act from an outdated or unsupported understanding.",
  },
  {
    field: "Bounded question or decision",
    requirement:
      "State exactly what the fictional receiving role must answer, approve, validate, communicate, or own.",
    failure:
      "The recipient may review too broadly or return an unusable answer.",
  },
  {
    field: "Authority",
    requirement:
      "Document which fictional decision rights the receiving role has and which require escalation.",
    failure:
      "The role may act without authority or wait unnecessarily.",
  },
  {
    field: "Evidence and source health",
    requirement:
      "Provide fictional evidence IDs, observations, provenance, timing, source states, limitations, and non-proof statements.",
    failure:
      "The recipient may treat missing or degraded evidence as fact.",
  },
  {
    field: "Scope",
    requirement:
      "List fictional affected, possibly affected, unknown, excluded, and out-of-scope entities, services, data, suppliers, and periods.",
    failure:
      "The handoff may unintentionally broaden or narrow the response.",
  },
  {
    field: "Prior decisions",
    requirement:
      "Summarize fictional decisions, alternatives, owners, rationale, conditions, expirations, and review triggers.",
    failure:
      "The receiving role may repeat or contradict earlier decisions.",
  },
  {
    field: "Actions and validation",
    requirement:
      "Separate fictional actions proposed, approved, initiated, completed, validated, failed, rolled back, and still pending.",
    failure:
      "Action completion may be mistaken for successful outcome.",
  },
  {
    field: "Dependencies and continuity",
    requirement:
      "Document fictional service, identity, infrastructure, evidence, supplier, user, communication, and recovery dependencies.",
    failure:
      "The receiving role may cause unexpected mission or recovery effects.",
  },
  {
    field: "Deadline and urgency",
    requirement:
      "Provide fictional response deadline, time sensitivity, missed-deadline path, update cadence, and escalation trigger.",
    failure:
      "Time-sensitive decisions may age without visibility.",
  },
  {
    field: "Acceptance",
    requirement:
      "The fictional receiving role confirms the question, authority, evidence, deadline, dependencies, next step, and ownership.",
    failure:
      "Work may be assigned but not actually owned.",
  },
];

const separationMatrix = [
  {
    activity: "Incident declaration",
    initiates: "Incident lead",
    validates: "Technical or service evidence owner",
    approves:
      "Incident lead within authority or leadership for exceptional activation",
    reason:
      "Prevents one unsupported alert interpretation from becoming an unquestioned declaration.",
  },
  {
    activity: "High-impact containment",
    initiates: "Technical, identity, service, or infrastructure owner",
    validates: "Independent technical and continuity reviewers",
    approves:
      "Authorized owner and leadership when the action exceeds routine authority",
    reason:
      "Separates recommendation, business effect, execution authority, and outcome validation.",
  },
  {
    activity: "Evidence preservation and access",
    initiates: "Technical analyst or incident lead",
    validates: "Evidence coordinator and privacy reviewer",
    approves:
      "Evidence and governance authority according to purpose and scope",
    reason:
      "Prevents unnecessary access, uncontrolled copies, or unsupported evidence use.",
  },
  {
    activity: "External communication",
    initiates: "Communications lead",
    validates:
      "Technical, service, privacy, legal, and incident owners as appropriate",
    approves: "Documented communication authority",
    reason:
      "Prevents speculation, conflicting facts, unnecessary disclosure, and unsupported promises.",
  },
  {
    activity: "Recovery acceptance",
    initiates: "Recovery owner",
    validates:
      "Technical, identity, infrastructure, data, source, and service owners",
    approves: "Service owner and incident lead within authority",
    reason:
      "Prevents connectivity or availability from being mistaken for trustworthy recovery.",
  },
  {
    activity: "Residual-risk acceptance",
    initiates: "Incident, service, technical, or recovery owner",
    validates: "Risk, privacy, continuity, and affected owners",
    approves: "Documented leadership or risk authority",
    reason:
      "Prevents operational teams from silently accepting risk beyond their authority.",
  },
  {
    activity: "Incident closure",
    initiates: "Incident lead",
    validates:
      "Technical, service, identity, evidence, privacy, recovery, and risk owners",
    approves: "Incident lead or higher closure authority",
    reason:
      "Prevents closure based on alert silence, action completion, or one owner's view.",
  },
  {
    activity: "Post-incident action closure",
    initiates: "Corrective-action owner",
    validates: "Independent quality or control owner",
    approves: "Program or incident improvement owner",
    reason:
      "Prevents corrective actions from closing without evidence that the intended improvement occurred.",
  },
];

const availabilityTiers = [
  {
    tier: "Tier 1 — Routine",
    condition:
      "Fictional review with no confirmed active impact, broad scope, urgent continuity issue, or executive decision need.",
    expectation:
      "Primary owner acknowledges within the documented routine window; alternate activates if missed.",
    escalation:
      "Escalate through the operational owner chain when the deadline is missed.",
    documentation:
      "Role assignment, question, deadline, acknowledgement, and next update.",
  },
  {
    tier: "Tier 2 — Time-sensitive",
    condition:
      "Fictional active session, privileged authority, increasing impact, short response opportunity, or important source degradation.",
    expectation:
      "Primary owner responds within the shortened urgent window; alternate and incident lead are notified immediately.",
    escalation:
      "Activate alternate owner and specialist escalation when acknowledgement or decision is late.",
    documentation:
      "Urgency basis, missed-deadline trigger, alternate activation, and decision deadline.",
  },
  {
    tier: "Tier 3 — Mission-impacting",
    condition:
      "Fictional critical service, broad user effect, major continuity need, privacy concern, supplier dependency, or high-impact containment decision.",
    expectation:
      "Incident lead, service owner, continuity owner, technical lead, and required authorities are continuously coordinated.",
    escalation:
      "Leadership and governance paths activate according to decision rights.",
    documentation:
      "Command structure, update cadence, authority, impact, options, decisions, and leadership needs.",
  },
  {
    tier: "Tier 4 — Extended response",
    condition:
      "Fictional response continues across shifts, teams, suppliers, recovery stages, or observation periods.",
    expectation:
      "Formal shift handoffs, deputy coverage, role rotation, fatigue controls, and current decision records are required.",
    escalation:
      "Resource, staffing, and continuity gaps go to program and leadership owners.",
    documentation:
      "Shift transfer, open questions, current state, pending actions, next milestones, and acceptance.",
  },
];

const conflictCases = [
  {
    conflict: "Incident lead is also the affected service owner",
    risk:
      "The fictional coordinator may feel pressure to minimize service impact or avoid independent review.",
    response:
      "Use a deputy incident lead or independent service-impact reviewer while preserving the service owner's expertise.",
    evidence:
      "Conflict declaration, delegated decision rights, independent validation, and review record.",
  },
  {
    conflict: "Technical lead proposes and validates the same containment",
    risk:
      "The fictional action may be approved without independent outcome review.",
    response:
      "Assign another qualified owner to validate expected state, side effects, rollback readiness, and residual risk.",
    evidence:
      "Proposal record, approval, independent validation, result, and exception if no alternate exists.",
  },
  {
    conflict: "Communications lead receives inconsistent technical conclusions",
    risk:
      "Different fictional audiences may receive conflicting or overstated updates.",
    response:
      "Incident lead identifies the current supported statement, records uncertainty, and assigns a technical decision deadline.",
    evidence:
      "Source conclusions, limitation statement, approved wording, version, and correction path.",
  },
  {
    conflict: "Supplier says the service is healthy while local evidence is Degraded",
    risk:
      "The fictional response may accept one party's statement without reconciling evidence scope and timing.",
    response:
      "Record both statements, compare source authority, timing, scope, and limitations, and assign a bounded reconciliation question.",
    evidence:
      "Supplier response, local source health, affected period, service evidence, and owner decision.",
  },
  {
    conflict: "Primary owner is unavailable and alternate is unclear",
    risk:
      "A fictional decision may remain unowned while active impact or evidence loss continues.",
    response:
      "Use the documented authority chain, incident lead interim coordination, and leadership escalation if no authorized alternate exists.",
    evidence:
      "Availability record, contact attempts, authority map, interim owner, and escalation decision.",
  },
  {
    conflict: "Two specialists issue conflicting containment instructions",
    risk:
      "Fictional actions may interfere, duplicate, expand scope, damage continuity, or weaken evidence.",
    response:
      "Pause unapproved action, return to the incident lead, compare evidence and authority, select one coordinated plan, and document rejected alternatives.",
    evidence:
      "Proposals, owners, authority, dependencies, impact, selected option, validation, and rollback.",
  },
  {
    conflict: "Leadership requests immediate closure for reporting simplicity",
    risk:
      "The fictional case may close while source recovery, validation, residual risk, or reopen criteria remain incomplete.",
    response:
      "Present the closure gaps, available options, risk acceptance requirement, owner recommendations, and documented review trigger.",
    evidence:
      "Closure checklist, unresolved obligations, decision authority, accepted risk, and review date.",
  },
  {
    conflict: "Evidence coordinator is asked to share the entire case",
    risk:
      "Fictional unnecessary personal, supplier, operational, or internal response information may be exposed.",
    response:
      "Require purpose, recipient, minimum fields, authority, privacy review, retention, and transfer records.",
    evidence:
      "Purpose-limited request, approved subset, recipient, access, transfer, retention, and limitations.",
  },
];

const validationCases = [
  {
    id: "ROLE-T01",
    type: "Primary unavailable",
    input:
      "Fictional incident lead is unavailable during a time-sensitive activation.",
    expected:
      "Named alternate accepts the role using the documented transfer checklist.",
    protects:
      "Command continuity.",
  },
  {
    id: "ROLE-T02",
    type: "No alternate",
    input:
      "Fictional service owner is unavailable and no authorized alternate exists.",
    expected:
      "Incident lead records the gap and activates the authority escalation path rather than inventing authority.",
    protects:
      "Decision legitimacy.",
  },
  {
    id: "ROLE-T03",
    type: "Duplicate command",
    input:
      "Fictional technical lead and service owner issue conflicting containment instructions.",
    expected:
      "Uncoordinated action pauses and the incident lead resolves the decision through evidence, authority, continuity, and rollback review.",
    protects:
      "Coordinated response.",
  },
  {
    id: "ROLE-T04",
    type: "Unaccepted handoff",
    input:
      "A fictional identity question is sent but the receiving owner never acknowledges it.",
    expected:
      "Ownership remains with the coordinator, aging activates, and alternate escalation begins.",
    protects:
      "No abandoned work.",
  },
  {
    id: "ROLE-T05",
    type: "Authority exceeded",
    input:
      "Fictional analyst proposes a major service interruption without approval authority.",
    expected:
      "The proposal is documented and routed to service, continuity, incident, and leadership decision owners.",
    protects:
      "Authorized action.",
  },
  {
    id: "ROLE-T06",
    type: "Self-validation",
    input:
      "The same fictional owner proposes, executes, and validates a high-impact action.",
    expected:
      "Independent validation is assigned unless an approved emergency exception is documented.",
    protects:
      "Separation of duties.",
  },
  {
    id: "ROLE-T07",
    type: "Role conflict",
    input:
      "Fictional incident lead also owns the affected service.",
    expected:
      "Conflict is declared and independent coordination or service-impact review is assigned.",
    protects:
      "Decision objectivity.",
  },
  {
    id: "ROLE-T08",
    type: "Shift change",
    input:
      "A fictional extended response moves to a new shift with open decisions and pending recovery.",
    expected:
      "Formal handoff includes state, evidence, scope, decisions, actions, deadlines, dependencies, and acceptance.",
    protects:
      "Response continuity.",
  },
  {
    id: "ROLE-T09",
    type: "Broad evidence request",
    input:
      "A fictional owner asks for the entire case to answer one service question.",
    expected:
      "Evidence coordinator supplies only purpose-limited fields after authority and privacy review.",
    protects:
      "Privacy and evidence governance.",
  },
  {
    id: "ROLE-T10",
    type: "Closure pressure",
    input:
      "Fictional leadership asks to close while source reconciliation remains incomplete.",
    expected:
      "Incident lead presents closure gaps and requires appropriate risk acceptance or continued Conditional state.",
    protects:
      "Evidence-based closure.",
  },
  {
    id: "ROLE-T11",
    type: "Supplier dependency",
    input:
      "Fictional supplier owner has no current contact or escalation path.",
    expected:
      "Dependency is marked as readiness debt and leadership receives the resulting response limitation.",
    protects:
      "External coordination.",
  },
  {
    id: "ROLE-T12",
    type: "Public portfolio",
    input:
      "Student plans to use sanitized real role charts and response contacts.",
    expected:
      "Portfolio validation fails; every organization, role, contact, authority, event, and decision must be invented.",
    protects:
      "Confidentiality and safety.",
  },
];

const readinessMetrics = [
  {
    metric: "Role coverage",
    question:
      "Do all fictional required command, technical, service, identity, evidence, communications, privacy, continuity, recovery, supplier, and leadership responsibilities have owners?",
    evidence:
      "Role matrix, incident types, critical services, dependency map, and responsibility-gap register.",
    limitation:
      "Named ownership does not prove availability or decision quality.",
  },
  {
    metric: "Alternate coverage",
    question:
      "Does each fictional critical role have an authorized alternate with current access and training?",
    evidence:
      "Alternate map, authority delegation, contact test, access review, and exercise results.",
    limitation:
      "An alternate may still be unavailable during a real schedule conflict.",
  },
  {
    metric: "Authority clarity",
    question:
      "Can fictional responders identify who may activate, contain, communicate, recover, accept risk, close, and reopen?",
    evidence:
      "Decision-rights matrix, playbook tests, tabletop answers, exceptions, and escalation records.",
    limitation:
      "Authority may change across jurisdictions, services, suppliers, or policy conditions.",
  },
  {
    metric: "Handoff acceptance",
    question:
      "What percentage of fictional assignments receive documented acknowledgement and complete handoff fields?",
    evidence:
      "Assignment log, response time, missing fields, acceptance, rejected handoffs, and aging.",
    limitation:
      "Acknowledgement does not prove the owner can complete the work.",
  },
  {
    metric: "Owner response time",
    question:
      "How long do fictional owners take to acknowledge, answer, approve, execute, and validate?",
    evidence:
      "Time-stamped requests, urgency tier, owner role, alternate use, complexity, and response quality.",
    limitation:
      "Fast response does not prove a correct decision.",
  },
  {
    metric: "Role-conflict resolution",
    question:
      "How often are fictional conflicts declared, independently reviewed, reassigned, or escalated?",
    evidence:
      "Conflict register, delegated authority, independent review, decision outcome, and lessons.",
    limitation:
      "Low conflict count may mean conflicts are not being recognized.",
  },
  {
    metric: "Separation-of-duties compliance",
    question:
      "Do fictional high-impact decisions separate proposal, approval, execution, validation, and acceptance where required?",
    evidence:
      "Decision records, action logs, validation records, emergency exceptions, and quality review.",
    limitation:
      "Separation can be limited by staffing and may require documented exceptions.",
  },
  {
    metric: "Role and contact debt",
    question:
      "Which fictional roles, alternates, authority statements, contact paths, training, access, supplier paths, or review dates are stale or incomplete?",
    evidence:
      "Debt register, owner, age, mission effect, due date, escalation, and validation.",
    limitation:
      "Counting debt does not show which gap has the greatest mission impact.",
  },
];

const evidenceMatrix = [
  {
    id: "ROLE-E01",
    source: "Fictional role roster",
    observation:
      "Incident lead, technical lead, and evidence coordinator are assigned, but no continuity owner is named.",
    supports:
      "A continuity responsibility gap exists.",
    limits:
      "The roster does not prove continuity decisions will be needed in every incident.",
    use:
      "Assign a primary and alternate continuity owner before activation.",
  },
  {
    id: "ROLE-E02",
    source: "Fictional authority matrix",
    observation:
      "Technical lead may recommend service containment but cannot approve prolonged interruption.",
    supports:
      "Containment approval requires service and possibly leadership authority.",
    limits:
      "The matrix does not determine which option is technically strongest.",
    use:
      "Route the proposal through coordinated technical, service, continuity, and leadership review.",
  },
  {
    id: "ROLE-E03",
    source: "Fictional handoff log",
    observation:
      "Identity question was assigned at 09:10 but not acknowledged by 09:30.",
    supports:
      "The work is not yet accepted and the deadline is aging.",
    limits:
      "Nonresponse does not prove the identity owner is unavailable or the activity unauthorized.",
    use:
      "Activate alternate contact and preserve the incident lead as coordinating owner.",
  },
  {
    id: "ROLE-E04",
    source: "Fictional conflict register",
    observation:
      "Incident lead also owns the affected service and requested immediate closure.",
    supports:
      "Independent closure review is appropriate.",
    limits:
      "The dual role does not prove the closure recommendation is wrong.",
    use:
      "Assign independent service or incident review and document decision authority.",
  },
  {
    id: "ROLE-E05",
    source: "Fictional action record",
    observation:
      "Infrastructure owner proposed, executed, and validated a major isolation action.",
    supports:
      "Separation-of-duties review is required.",
    limits:
      "The record does not prove the action failed.",
    use:
      "Assign independent validation and review whether an emergency exception was authorized.",
  },
  {
    id: "ROLE-E06",
    source: "Fictional communications log",
    observation:
      "Two audiences received different impact statements from separate owners.",
    supports:
      "Message coordination and correction are required.",
    limits:
      "The log does not establish which statement is correct.",
    use:
      "Incident lead and communications lead reconcile evidence and issue a versioned correction.",
  },
  {
    id: "ROLE-E07",
    source: "Fictional supplier readiness review",
    observation:
      "The critical supplier relationship has no tested alternate contact or escalation path.",
    supports:
      "Supplier coordination is a readiness gap and decision debt.",
    limits:
      "The gap does not prove supplier response would fail.",
    use:
      "Assign owner, test contact, document escalation, and report residual limitation.",
  },
  {
    id: "ROLE-E08",
    source: "Fictional shift-handoff review",
    observation:
      "The receiving incident lead acknowledged the case but did not receive the open decision and rollback trigger.",
    supports:
      "The handoff is incomplete despite acknowledgement.",
    limits:
      "The review does not prove the new lead made an incorrect decision.",
    use:
      "Complete the handoff fields and confirm acceptance again.",
  },
];

const commonMistakes = [
  {
    mistake: "One person becomes the entire response team",
    observation:
      "A fictional incident lead collects evidence, approves containment, sends messages, validates recovery, accepts risk, and closes the case alone.",
    impact:
      "Authority, expertise, independence, privacy, continuity, and validation become weak.",
    correction:
      "Separate coordination, technical analysis, owner decisions, evidence, communication, validation, and risk acceptance.",
  },
  {
    mistake: "Role names exist without decision rights",
    observation:
      "A fictional roster lists owners but does not explain what each may approve or when to escalate.",
    impact:
      "Teams may delay, exceed authority, or issue conflicting decisions.",
    correction:
      "Create a decision-rights matrix with conditions, limits, inputs, independent review, and escalation.",
  },
  {
    mistake: "No alternate is tested",
    observation:
      "A fictional critical role has a backup name but the alternate lacks access, training, or delegated authority.",
    impact:
      "The response may still stop when the primary is unavailable.",
    correction:
      "Validate alternate authority, access, contact, training, documentation, and tabletop performance.",
  },
  {
    mistake: "Assignment is treated as acceptance",
    observation:
      "A fictional question is sent to a role and removed from the coordinator's queue.",
    impact:
      "Work can become unowned or silently delayed.",
    correction:
      "Require handoff acknowledgement and retain coordinating ownership until acceptance.",
  },
  {
    mistake: "Specialists issue independent commands",
    observation:
      "Fictional identity, network, and service owners act without one coordinated containment plan.",
    impact:
      "Actions may conflict, damage continuity, hide evidence, or create unclear outcomes.",
    correction:
      "Use incident command, explicit authority, dependency review, one plan, validation, and rollback.",
  },
  {
    mistake: "Role conflict remains hidden",
    observation:
      "A fictional service owner serving as incident lead recommends rapid closure without independent review.",
    impact:
      "Bias or perceived bias can weaken trust and decision quality.",
    correction:
      "Declare the conflict, delegate the affected decision, and preserve independent validation.",
  },
  {
    mistake: "Leadership receives a technical dump",
    observation:
      "A fictional analyst sends raw evidence without a bounded decision request.",
    impact:
      "Leadership may make a resource or risk decision without clear options, uncertainty, or owner recommendations.",
    correction:
      "Provide mission impact, options, evidence, limitations, urgency, recommendation, authority need, and residual risk.",
  },
  {
    mistake: "Evidence coordination is confused with investigation",
    observation:
      "A fictional evidence coordinator is asked to decide technical cause and severity.",
    impact:
      "Provenance responsibilities and technical interpretation become mixed.",
    correction:
      "Keep evidence governance separate from technical conclusions while supporting traceability.",
  },
  {
    mistake: "Role records are stale",
    observation:
      "Fictional contact lists, alternates, authority, service ownership, and supplier paths are not reviewed.",
    impact:
      "The documented response structure may fail under time pressure.",
    correction:
      "Use review dates, tests, exercises, debt tracking, owner confirmation, and expiration.",
  },
  {
    mistake: "Real response contacts enter the portfolio",
    observation:
      "A student uses sanitized real staff names, phone trees, role charts, service ownership, or authority records.",
    impact:
      "Sensitive people, structures, priorities, and response capabilities may be exposed.",
    correction:
      "Invent every organization, role, contact, authority, service, event, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define the fictional mission",
    action:
      "Document Northbridge's critical services, users, data, identity model, supplier dependencies, continuity priorities, privacy boundary, and response purpose.",
    output:
      "Incident response mission and safety charter.",
    quality:
      "Every organization, service, identity, role, contact, and decision is invented.",
  },
  {
    step: "2",
    title: "Build the role catalog",
    action:
      "Define fictional incident lead, technical lead, identity, service, infrastructure, evidence, communications, privacy, continuity, recovery, supplier, and leadership roles.",
    output:
      "Role catalog with missions and boundaries.",
    quality:
      "Each role has a distinct purpose and does not silently replace other expertise.",
  },
  {
    step: "3",
    title: "Assign decision rights",
    action:
      "Map fictional activation, severity, containment, evidence, communication, recovery, risk, closure, and reopening decisions to authorized owners.",
    output:
      "Decision-rights matrix.",
    quality:
      "Every decision includes required inputs, independent review, authority limit, and escalation.",
  },
  {
    step: "4",
    title: "Create primary and alternate ownership",
    action:
      "Assign fictional primary owners, alternates, availability tiers, delegated authority, access needs, and escalation paths.",
    output:
      "Primary and alternate owner register.",
    quality:
      "A named alternate is not counted as ready until authority, access, training, and contact are validated.",
  },
  {
    step: "5",
    title: "Design the handoff",
    action:
      "Document fictional state, bounded question, authority, evidence, source health, scope, prior decisions, actions, dependencies, deadline, and acceptance.",
    output:
      "Ten-field handoff checklist.",
    quality:
      "Assignment remains with the coordinating owner until the receiver accepts.",
  },
  {
    step: "6",
    title: "Apply separation of duties",
    action:
      "Separate fictional initiation, validation, approval, execution, business acceptance, residual-risk acceptance, and closure for high-impact decisions.",
    output:
      "Separation-of-duties matrix.",
    quality:
      "Emergency exceptions are documented, time-bounded, reviewed, and independently validated later.",
  },
  {
    step: "7",
    title: "Test role conflicts",
    action:
      "Evaluate fictional unavailable owners, duplicate command, dual roles, supplier disagreement, inconsistent messages, self-validation, and closure pressure.",
    output:
      "Conflict and exception register.",
    quality:
      "Every conflict has delegated authority, independent review, or escalation.",
  },
  {
    step: "8",
    title: "Run availability scenarios",
    action:
      "Test fictional routine, time-sensitive, mission-impacting, and extended-response conditions.",
    output:
      "Availability and escalation test record.",
    quality:
      "Acknowledgement, alternate activation, leadership path, and shift handoff are measurable.",
  },
  {
    step: "9",
    title: "Measure readiness",
    action:
      "Track fictional role coverage, alternate coverage, authority clarity, handoff acceptance, response time, conflict resolution, separation of duties, and role debt.",
    output:
      "Role-readiness dashboard and debt register.",
    quality:
      "Metrics balance speed with authority, quality, completeness, privacy, and continuity.",
  },
  {
    step: "10",
    title: "Prepare the portfolio package",
    action:
      "Combine the fictional mission, roles, authority, alternates, handoffs, separation, conflicts, availability, metrics, debt, residual risk, and reflection.",
    output:
      "Public-safe Incident Response Role and Authority Package.",
    quality:
      "No real role chart, contact, service owner, supplier path, authority, or response structure is used.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest responsibility of a fictional incident lead?",
    choices: [
      "Personally perform every technical and business task.",
      "Coordinate activation, scope, owners, decisions, deadlines, state transitions, conflicts, and response continuity.",
      "Approve every public message without review.",
      "Replace service, identity, evidence, privacy, and recovery owners.",
    ],
    answer: 1,
    explanation:
      "The incident lead coordinates the whole response while accountable specialists and authorities own bounded decisions.",
  },
  {
    question:
      "Why are fictional decision rights necessary?",
    choices: [
      "To make the role chart longer.",
      "To show who may make specific decisions, under which conditions and limits, and when escalation is required.",
      "To let every role approve every action.",
      "To remove the need for evidence.",
    ],
    answer: 1,
    explanation:
      "Decision rights reduce delay, authority gaps, duplicate command, and unauthorized action.",
  },
  {
    question:
      "A fictional identity question is assigned but not acknowledged. Who still owns coordination?",
    choices: [
      "Nobody.",
      "The receiving owner automatically.",
      "The coordinating incident owner until acceptance is documented.",
      "The communications lead.",
    ],
    answer: 2,
    explanation:
      "Assignment is not acceptance. The coordinator preserves ownership and activates aging or alternate paths.",
  },
  {
    question:
      "Which fictional situation most clearly requires separation of duties?",
    choices: [
      "Writing a routine internal note.",
      "One person proposes, executes, validates, and approves a high-impact containment action.",
      "Scheduling the next update.",
      "Creating a fictional role title.",
    ],
    answer: 1,
    explanation:
      "High-impact actions should separate recommendation, authority, execution, validation, and acceptance where possible.",
  },
  {
    question:
      "The primary fictional service owner is unavailable and no authorized alternate exists. What is strongest?",
    choices: [
      "Let any analyst assume service-owner authority.",
      "Ignore the service decision.",
      "Record the authority gap and activate the documented escalation path while the incident lead coordinates interim work.",
      "Close the incident.",
    ],
    answer: 2,
    explanation:
      "Responders should not invent authority. The gap must become visible and escalate to an authorized decision owner.",
  },
  {
    question:
      "Which fictional handoff is strongest?",
    choices: [
      "Please investigate everything.",
      "Here is the alert title; respond soon.",
      "Confirm whether approval covered the identity, role, service, destination, and period using the listed evidence, by the stated deadline, under the documented authority, and acknowledge ownership.",
      "The incident is yours now.",
    ],
    answer: 2,
    explanation:
      "A strong handoff contains a bounded question, evidence, scope, authority, deadline, and acceptance.",
  },
  {
    question:
      "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real role chart by changing names.",
      "Use real response contacts without phone numbers.",
      "Invent every organization, role, contact, authority, service, event, decision, and outcome.",
      "Use a real supplier escalation path with fake dates.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, organizations, authority structures, and defensive capabilities.",
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
        Module A7
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

export default function AdvancedIncidentResponseRolesPage() {
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
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Roles, Authority, Alternates, Handoffs, and Separation
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.1 Advanced Incident Response Roles
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident response teams establish command,
            technical analysis, identity, service, infrastructure, evidence,
            communication, privacy, continuity, recovery, supplier, and
            leadership responsibilities before time pressure begins.
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
          lessonTitle="Advanced Incident Response Roles"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, roles, contacts, authority, services, suppliers, incidents, records, decisions, actions, and outcomes.",
            "I will separate coordination, technical analysis, owner decisions, evidence governance, communications, privacy, continuity, recovery, validation, and risk acceptance.",
            "I will not assume that assignment equals acceptance or that a role title automatically grants authority.",
            "I will document primary owners, alternates, availability, escalation, handoff fields, decision rights, conflicts, and separation of duties.",
            "I will preserve one coordinating owner while specialists answer bounded questions.",
            "I will not access, copy, sanitize, upload, contact, investigate, direct, coordinate, or modify any real incident response plan, role chart, contact list, organization, service, supplier, system, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Wrong Response Structure Can Create a Second Incident"
        >
          <p className="leading-8">
            A fictional alert affects a critical student-support service. The
            technical lead tells infrastructure to isolate the service. The
            service owner tells staff to keep it online. The identity owner
            revokes an account without telling the incident lead. A
            communications coordinator tells users that the issue is resolved
            before recovery validation finishes. Every person is trying to
            help, yet the response becomes less safe because authority,
            coordination, evidence, continuity, and communication were never
            clearly assigned.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak structure
              </p>
              <p className="mt-2 leading-7">
                “Everyone respond quickly and do what seems necessary.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong structure
              </p>
              <p className="mt-2 leading-7">
                “One incident lead coordinates. Specialists answer bounded
                questions. Authorized owners approve actions. Independent roles
                validate outcomes. Communications use the current decision
                record.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Incident response roles are not titles for a chart. They are a
            decision system designed to preserve evidence, authority, mission
            continuity, and accountability under pressure.
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
          title="Roles Control Decisions, Not Just Tasks"
        >
          <p className="leading-8">
            Fictional incident response includes decisions about activation,
            scope, containment, evidence, communication, continuity, recovery,
            privacy, suppliers, risk, closure, and reopening. Each decision
            requires the right evidence and authority. Without role design,
            responders may duplicate work, exceed authority, abandon questions,
            issue conflicting messages, damage continuity, weaken evidence, or
            close before validation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "One coordinator",
                "One fictional incident lead preserves the complete response while specialists own bounded questions.",
              ],
              [
                "Right authority",
                "Each fictional decision goes to the role authorized to make it under documented conditions and limits.",
              ],
              [
                "Independent validation",
                "High-impact fictional actions separate recommendation, approval, execution, validation, and acceptance.",
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
          title="The R-O-L-E-S Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "R — Responsibility",
                "Define the fictional mission, tasks, questions, evidence, outputs, dependencies, and lifecycle responsibilities of each role.",
              ],
              [
                "O — Ownership",
                "Assign one primary owner, an authorized alternate, availability expectations, handoff acceptance, and a coordinating incident owner.",
              ],
              [
                "L — Limits",
                "Document fictional decision rights, authority boundaries, required independent review, privacy limits, continuity limits, and escalation triggers.",
              ],
              [
                "E — Evidence",
                "Require fictional source, provenance, timing, source health, scope, uncertainty, decisions, actions, validation, and residual risk for role decisions.",
              ],
              [
                "S — Separation and succession",
                "Separate high-impact duties, declare conflicts, activate alternates, preserve shift handoffs, and maintain continuity when roles change.",
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
              Decision-ready role statement
            </p>
            <p className="mt-2 leading-7">
              The fictional identity owner may approve a scoped role revocation
              after reviewing authorization, active sessions, service
              continuity, validation, and rollback. The incident lead
              coordinates the decision, and an independent owner validates the
              resulting identity and session state.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Incident Response Roles"
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
            Build a Twelve-Role Response Team
          </h2>

          <div className="mt-6 grid gap-5">
            {roleCatalog.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">{item.role}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.mission}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Core responsibilities", item.coreResponsibilities],
                    ["Decision rights", item.decisionRights],
                    ["Authority boundary", item.authorityBoundary],
                    ["Required inputs", item.inputs],
                    ["Professional outputs", item.outputs],
                    ["Alternate requirement", item.alternate],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Assign Ten Critical Decision Rights"
        >
          <div className="grid gap-5">
            {decisionRights.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary decision owner", item.primary],
                    ["Required fictional input", item.requiredInput],
                    ["Independent review", item.independentReview],
                    ["Escalation condition", item.escalation],
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
          eyebrow="Instructional Section 3"
          title="Use a Ten-Field Handoff"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {handoffFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.requirement}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure if missing
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Apply Separation of Duties to Eight Decisions"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Activity",
                    "Initiates",
                    "Validates",
                    "Approves",
                    "Why separation matters",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {separationMatrix.map((row) => (
                  <tr key={row.activity}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.activity}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.initiates}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.validates}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.approves}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Define Four Availability Tiers"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {availabilityTiers.map((item) => (
              <article
                key={item.tier}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.tier}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Condition
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.condition}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Availability expectation
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.expectation}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Escalation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.escalation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Documentation
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.documentation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Resolve Eight Role Conflicts"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {conflictCases.map((item) => (
              <article
                key={item.conflict}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.conflict}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional response
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.response}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence to preserve
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Validate Twelve Role Scenarios"
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
                {validationCases.map((row) => (
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
          title="Measure Eight Role-Readiness Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {readinessMetrics.map((item) => (
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
          eyebrow="Fictional Response Architecture"
          title="Northbridge Role and Authority Model"
        >
          <p className="leading-8">
            This conceptual structure is completely invented and intentionally
            non-operational. It teaches role design without real personnel,
            services, contacts, authority chains, suppliers, incidents, or
            response procedures.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission inputs", "Critical services, users, continuity, privacy, suppliers"],
                ["Evidence inputs", "Alerts, records, source health, scope, uncertainty"],
                ["Authority inputs", "Policies, decision rights, alternates, escalation"],
                ["Lifecycle inputs", "Activation, containment, recovery, closure, reopening"],
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
                Fictional Response Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Command", "One coordinator, state, scope, decisions, conflicts"],
                  ["Technical", "Evidence, hypotheses, source health, options, validation"],
                  ["Owners", "Identity, service, infrastructure, supplier decisions"],
                  ["Governance", "Evidence, privacy, communications, authority, risk"],
                  ["Continuity", "Critical workflows, alternatives, user priorities"],
                  ["Recovery", "Clean state, staged restoration, rollback, monitoring"],
                  ["Handoffs", "Question, authority, evidence, deadline, acceptance"],
                  ["Lifecycle", "Readiness, activation, closure, reopening, improvement"],
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
                ["Operational output", "Assigned owners, deadlines, decisions, actions"],
                ["Governance output", "Authority, evidence, privacy, risk, approval"],
                ["Leadership output", "Impact, options, decisions, resources, residual risk"],
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
          title="Fake Northbridge Incident Role Readiness Dashboard"
          subtitle="Fictional role coverage, alternate readiness, authority clarity, handoff acceptance, owner delay, conflict review, separation of duties, and role debt for training only."
          metrics={[
            {
              label: "Critical fictional roles with validated alternates",
              value: "9 / 12",
              note: "Continuity, supplier, and privacy alternates still require access, authority, contact, and exercise validation.",
            },
            {
              label: "Open handoffs without acceptance",
              value: "3",
              note: "Identity, service-impact, and supplier questions remain with the coordinating incident owner until acknowledgement.",
            },
            {
              label: "Open fictional role and authority debt",
              value: "11",
              note: "Alternates, supplier escalation, authority statements, shift handoff, conflicts, evidence access, communication approval, recovery acceptance, risk authority, training, and review dates remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Incident Response Role Conflict Requires Review"
          severity="High"
          time="9:36 AM"
          source="Fake Northbridge Response Governance Console"
          details="The fictional incident lead also owns the affected service and requested immediate closure. Group-source reconciliation, service recovery validation, and residual-risk acceptance remain incomplete. No independent closure reviewer is assigned."
          recommendation="Declare the fictional role conflict, assign an independent incident or service reviewer, preserve the current Conditional state, complete closure evidence, and route residual-risk acceptance to the documented authority."
        />

        <FakeLogPanel
          title="Fake Incident Role Coordination Timeline"
          logs={[
            "09:00 RESPONSE state='activated'",
            "09:01 INCIDENT-LEAD primary='assigned'",
            "09:02 TECH-LEAD primary='assigned'",
            "09:03 SERVICE-OWNER role='same-as-incident-lead'",
            "09:04 CONFLICT status='undeclared'",
            "09:10 HANDOFF identity-question='sent'",
            "09:11 HANDOFF service-impact='sent'",
            "09:12 HANDOFF supplier-state='sent'",
            "09:25 ACCEPT identity='missing'",
            "09:26 ACCEPT service='received'",
            "09:27 ACCEPT supplier='missing'",
            "09:30 CLOSURE request='immediate'",
            "09:31 SOURCE group='recovering'",
            "09:32 VALIDATION service='incomplete'",
            "09:33 RISK owner='missing'",
            "09:34 REVIEW independent='missing'",
            "09:36 ALERT issue='role-conflict'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Role Evidence Supports—and What It Does Not Prove
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
                    ["Response use", item.use],
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
          title="Which Role Decision Is Best Supported?"
          question="Which fictional response decision best fits the Northbridge role-conflict evidence?"
          evidence={[
            "The incident lead also owns the affected service.",
            "The same person requested immediate closure.",
            "Group-source reconciliation remains incomplete.",
            "Service recovery validation remains incomplete.",
            "Residual-risk acceptance has no assigned authority.",
            "No independent closure reviewer is assigned.",
            "Identity and supplier handoffs remain unaccepted.",
            "The current case state is Conditional.",
          ]}
          options={[
            "Declare the fictional conflict, assign independent incident or service review, preserve coordinating ownership, age unaccepted handoffs, complete closure evidence, and route residual-risk acceptance to the documented authority.",
            "Close immediately because the incident lead and service owner agree.",
            "Transfer the entire response to the technical lead without authority review.",
            "Ignore the conflict because dual roles are always acceptable.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves authority, independence, ownership, evidence, and lifecycle quality without assuming that the dual role automatically invalidates every decision."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Incident Response Role Errors"
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
          title="Build the Northbridge Incident Response Role and Authority Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, contact, test, investigate, coordinate, or modify
            any real incident response plan, role chart, contact list, authority
            matrix, organization, service, supplier, system, or person.
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
          title="The Primary Incident Lead Is Unavailable"
          scenario="A fictional time-sensitive response begins while the primary incident lead is unavailable. A trained alternate exists, but the service owner suggests waiting for the primary because the alternate has never led a real event."
          choices={[
            {
              label: "Choice A",
              response:
                "Activate the fictional trained alternate using the documented authority and transfer checklist, record the primary's unavailability, confirm coordination ownership, and continue escalation according to the playbook.",
              outcome:
                "Best defensive choice. Prepared alternates exist to preserve command continuity under exactly this condition.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Wait indefinitely for the primary incident lead.",
              outcome:
                "Weak. Time-sensitive evidence, impact, and decisions may age without coordination.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Let every specialist act independently until the primary returns.",
              outcome:
                "Weak. Duplicate command and conflicting actions become likely.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Incident Lead Also Owns the Affected Service"
          scenario="The fictional incident lead is also the service owner and recommends immediate closure. Source recovery, independent service validation, and residual-risk acceptance remain incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Declare the fictional role conflict, delegate the closure or service-review decision to an independent authorized owner, preserve the current case state, and complete evidence plus risk requirements.",
              outcome:
                "Best choice. The service owner's expertise remains useful while the conflicted decision receives independent review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close immediately because one person holds both roles.",
              outcome:
                "Weak. Dual responsibility does not remove closure evidence or independent-review requirements.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the person from every part of the response.",
              outcome:
                "Weak. The conflict affects specific decisions, not necessarily all service expertise.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend the Role Structure before a Governance Board"
        >
          <p className="leading-8">
            Fictional Northbridge has twelve response responsibilities, three
            missing alternates, one unaccepted identity handoff, one conflicted
            incident lead, an untested supplier escalation path, a
            self-validated containment action, and no current residual-risk
            authority for extended recovery.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend command",
                "Explain fictional incident lead mission, authority, limits, alternate, state, scope, decisions, conflicts, handoffs, and closure role.",
              ],
              [
                "Defend specialist ownership",
                "Explain fictional technical, identity, service, infrastructure, evidence, privacy, communications, continuity, recovery, and supplier questions.",
              ],
              [
                "Defend decision rights",
                "Explain fictional activation, containment, evidence, communication, recovery, risk, closure, and reopening authority.",
              ],
              [
                "Defend handoffs",
                "Explain fictional state, question, authority, evidence, source health, scope, decisions, actions, dependencies, deadline, and acceptance.",
              ],
              [
                "Defend independence",
                "Explain fictional separation of duties, conflicts, delegated decisions, emergency exceptions, independent validation, and review.",
              ],
              [
                "Defend readiness",
                "Explain fictional alternates, availability tiers, contact tests, exercises, debt, metrics, residual risk, and review dates.",
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
              Produce a fictional mission charter, twelve-role catalog,
              responsibility matrix, decision-rights matrix, primary and
              alternate owner map, availability model, ten-field handoff,
              separation-of-duties matrix, conflict register, escalation map,
              role-readiness dashboard, debt register, residual-risk statement,
              leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Advanced Incident Response Roles Checklist"
          items={[
            "I can distinguish fictional incident command, technical analysis, identity, service, infrastructure, evidence, communications, privacy, continuity, recovery, supplier, and leadership responsibilities.",
            "I can define fictional role mission, responsibilities, authority, boundaries, inputs, outputs, alternate, availability, and escalation.",
            "I can assign fictional decision rights for activation, priority, containment, evidence, communication, recovery, risk, closure, and reopening.",
            "I can preserve one fictional coordinating owner while specialists answer bounded questions.",
            "I can require fictional handoff state, question, authority, evidence, source health, scope, prior decisions, actions, dependencies, deadline, and acceptance.",
            "I can distinguish assignment from acceptance and activate aging or alternate paths when ownership is not acknowledged.",
            "I can apply fictional separation of duties to high-impact containment, communication, evidence, recovery, risk, closure, and corrective actions.",
            "I can identify fictional duplicate command, role conflict, unavailable owners, self-validation, stale contacts, responsibility gaps, and unclear authority.",
            "I can create fictional routine, time-sensitive, mission-impacting, and extended-response availability expectations.",
            "I can measure fictional role coverage, alternate readiness, authority clarity, handoff quality, owner delay, conflict resolution, separation, and debt.",
            "I can communicate fictional leadership decision needs with evidence, options, limitations, authority, urgency, and residual risk.",
            "I can create a completely fictional role artifact without exposing real people, contacts, authority, services, suppliers, or response structures.",
          ]}
        />

        <MiniQuiz
          title="A7.1 Mini Quiz: Advanced Incident Response Roles"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Incident Response Role and Authority Package for the Northbridge Student-Support Cooperative. Include mission, critical services, users, data categories, identity model, supplier dependencies, continuity priorities, privacy boundary, incident lead, deputy incident lead, technical analysis lead, alternate technical lead, identity owner, alternate identity owner, service owner, alternate service owner, infrastructure owner, alternate infrastructure owner, evidence coordinator, alternate evidence coordinator, communications lead, alternate communications lead, privacy reviewer, alternate privacy reviewer, continuity owner, alternate continuity owner, recovery owner, alternate recovery owner, supplier owner, alternate supplier owner, leadership decision owner, alternate leadership owner, role mission, responsibilities, decision rights, authority boundaries, inputs, outputs, required evidence, availability expectations, escalation paths, training requirements, access requirements, review dates, activation authority, severity authority, confidence authority, priority authority, identity-containment authority, service-containment authority, infrastructure-action authority, evidence-preservation authority, evidence-sharing authority, communication authority, recovery authority, residual-risk authority, closure authority, reopening authority, decision inputs, independent review, escalation conditions, current incident state, bounded handoff questions, handoff authority, handoff evidence, source health, handoff scope, prior decisions, actions, validation, dependencies, continuity, deadlines, urgency, acceptance, incident declaration separation, high-impact containment separation, evidence-access separation, communication separation, recovery-acceptance separation, residual-risk separation, closure separation, corrective-action separation, routine availability, time-sensitive availability, mission-impacting availability, extended-response availability, conflict declaration, dual-role conflict, unavailable-owner conflict, duplicate-command conflict, supplier-evidence conflict, inconsistent-communication conflict, self-validation conflict, closure-pressure conflict, broad-evidence-request conflict, validation cases, expected results, role-coverage metrics, alternate-coverage metrics, authority-clarity metrics, handoff-acceptance metrics, owner-response metrics, role-conflict metrics, separation-of-duties metrics, role debt, owner matrix, residual risk, leadership summary, reflection, and a statement that every organization, role, contact, authority, service, supplier, incident, event, decision, action, and outcome is invented."
          tips={[
            "Design fictional roles around decisions and evidence, not titles alone.",
            "Give every critical fictional role a tested alternate with delegated authority, access, training, and a handoff path.",
            "Separate fictional coordination, technical expertise, owner authority, evidence governance, communication, validation, and risk acceptance.",
            "Require fictional acknowledgement before a handoff becomes accepted ownership.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Preparation and Playbook Design?"
        >
          <p className="leading-8">
            Before moving to A7.2, rate your readiness from 1 to 5 for role
            mission, command, technical ownership, service and identity
            authority, evidence, communication, privacy, continuity, recovery,
            supplier coordination, leadership, alternates, handoffs,
            separation, conflicts, availability, metrics, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why one fictional incident lead should coordinate while specialists retain bounded ownership.",
              "I can distinguish fictional responsibility from decision authority.",
              "I can define a fictional primary owner, alternate, availability expectation, and escalation path.",
              "I can build a complete fictional handoff and require acceptance.",
              "I can apply separation of duties to fictional high-impact decisions.",
              "I can declare and resolve fictional role conflicts without discarding useful expertise.",
              "I can measure fictional role and authority readiness.",
              "I can produce a safe fictional role package without copying real people, contacts, or response structures.",
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
            Record one fictional role, one decision right, one authority
            boundary, one alternate requirement, one handoff field, one
            separation-of-duties control, and one question you will carry into
            A7.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional incident response roles form a decision system, not merely a list of titles.",
            "One fictional incident lead should preserve the complete response while specialists answer bounded questions and make authorized decisions.",
            "Every fictional role needs mission, responsibilities, decision rights, authority boundaries, inputs, outputs, alternates, availability, escalation, and review.",
            "Assignment does not equal acceptance; the coordinating owner retains responsibility until the receiving role acknowledges the handoff.",
            "High-impact fictional actions should separate recommendation, approval, execution, validation, business acceptance, and residual-risk acceptance where possible.",
            "Role conflicts should be declared and managed through delegated authority, independent review, or escalation rather than ignored.",
            "Primary and alternate fictional owners require current authority, access, training, contact, exercises, and review dates.",
            "Leadership should receive bounded decision options, evidence, uncertainty, mission impact, urgency, owner recommendations, and residual risk.",
            "Role readiness should measure coverage, alternates, authority clarity, handoff acceptance, owner delay, conflict resolution, separation of duties, and debt.",
            "Every CyberShield role artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real people or response structures.",
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
            Next, learn how fictional incident response teams transform mission,
            authority, roles, evidence, source health, containment, continuity,
            communication, recovery, validation, rollback, closure, and
            reopening into usable plans and scenario-specific playbooks.
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