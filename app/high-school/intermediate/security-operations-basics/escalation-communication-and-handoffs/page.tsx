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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/security-operations-basics`;
const previousLesson = `${modulePath}/detection-engineering-and-tuning-basics`;
const nextLesson = `${modulePath}/threat-intelligence-in-security-operations`;

const objectives = [
  "Explain how fictional security operations escalation connects urgency, evidence, service criticality, business impact, authority, expertise, privacy, suppliers, communications, and response coordination.",
  "Distinguish fictional operational escalation, technical escalation, business escalation, incident escalation, supplier escalation, leadership escalation, emergency action, and quality escalation.",
  "Create fictional technical, operational, leadership, supplier, and shift-handoff communications that preserve facts, uncertainty, impact status, ownership, decisions, deadlines, and next updates.",
  "Evaluate fictional handoffs using case scope, evidence references, source health, timeline, actions, decisions, open questions, risks, authorities, commitments, closure criteria, and acknowledgement.",
  "Build a portfolio-safe fictional escalation and communication package with matrices, message templates, handoff records, findings, validation, metrics, and leadership summaries."
];
const vocabulary = [
  [
    "Escalation",
    "A fictional transfer of attention, expertise, authority, urgency, ownership, or decision-making to the correct role based on defined criteria."
  ],
  [
    "Operational escalation",
    "A fictional request for service, asset, identity, change, telemetry, supplier, or workflow context needed to complete triage or case work."
  ],
  [
    "Technical escalation",
    "A fictional transfer to a more specialized defender, engineer, analyst, responder, or owner for deeper technical review."
  ],
  [
    "Business escalation",
    "A fictional transfer to a service owner, risk owner, continuity role, leadership decision-maker, or budget authority when business consequences or residual risk require action."
  ],
  [
    "Incident escalation",
    "A fictional move into coordinated incident handling when approved criteria for scope, impact, confidence, and urgency are met."
  ],
  [
    "Supplier escalation",
    "A fictional approved request to an external provider for evidence, service action, recovery, contract-based response, or corrective work."
  ],
  [
    "Leadership update",
    "A fictional concise communication that explains supported facts, business meaning, uncertainty, actions, owners, decisions needed, and the next update."
  ],
  [
    "Technical update",
    "A fictional detailed communication for analysts and engineers that records evidence, source health, timeline, findings, actions, limitations, and next steps."
  ],
  [
    "Handoff",
    "A fictional structured transfer of open work, evidence, decisions, deadlines, risks, commitments, and operational responsibility."
  ],
  [
    "Acknowledgement",
    "A fictional confirmation that the receiving role has reviewed the handoff and accepted responsibility for the next actions."
  ],
  [
    "Communication authority",
    "The fictional approved power to send technical, business, supplier, leadership, legal-concept, privacy, or external messages."
  ],
  [
    "Need-to-know",
    "A fictional communication principle that shares only the information required for an approved role to make or perform a decision."
  ],
  [
    "Status cadence",
    "A fictional agreed schedule for sending updates while a case, incident, supplier issue, or response remains open."
  ],
  [
    "Decision request",
    "A fictional concise statement of the choice, authority, deadline, evidence, options, risks, and recommended next step requiring owner action."
  ],
  [
    "Message consistency",
    "A fictional quality condition in which technical, operational, leadership, and supplier communications describe the same supported facts and impact status."
  ],
  [
    "Communication closure",
    "A fictional confirmation that commitments, corrections, final status, follow-up, ownership, and future contact paths have been completed."
  ]
];
const escalationTypes = [
  {
    "type": "Operational clarification",
    "trigger": "The fictional analyst needs asset, identity, maintenance, change, service, source-health, supplier, or user context.",
    "route": "Tier 1 or Tier 2 analyst to the service, control, identity, telemetry, platform, or supplier owner.",
    "message": "Ask a narrow question, reference the case, identify the deadline, and explain which decision depends on the answer.",
    "outcome": "Context, evidence, correction, or owner validation.",
    "limit": "A context request is not an incident declaration."
  },
  {
    "type": "Technical specialist escalation",
    "trigger": "The fictional evidence conflicts, detection logic is complex, source behavior is unclear, or advanced review is required.",
    "route": "Tier 2 to Tier 3, detection engineer, platform engineer, forensic reviewer, or incident responder.",
    "message": "Provide the case question, exact evidence, source health, attempted steps, alternatives, confidence, and requested specialist decision.",
    "outcome": "Deeper analysis, technical guidance, test plan, tuning, or response recommendation.",
    "limit": "Technical expertise does not automatically grant business authority."
  },
  {
    "type": "Business and risk escalation",
    "trigger": "The fictional case may affect critical service, confidential data, supplier commitments, recovery goals, funding, deadlines, or residual business risk.",
    "route": "SOC manager or responder to the service owner, risk owner, continuity role, privacy concept, legal concept, or leadership.",
    "message": "Translate the supported technical condition into business meaning, options, uncertainty, owner decisions, and deadlines.",
    "outcome": "Authorized treatment, priority, funding, exception, service decision, communication, or risk acceptance.",
    "limit": "Potential business impact must not be stated as confirmed impact."
  },
  {
    "type": "Incident coordination escalation",
    "trigger": "The fictional evidence meets approved incident criteria or requires coordinated containment, recovery, communications, and leadership oversight.",
    "route": "Case owner or SOC manager to the incident responder and approved incident team.",
    "message": "State criteria met, current scope, confidence, supported impact, urgent actions, authority, evidence gaps, and communication cadence.",
    "outcome": "Coordinated response, containment, recovery, evidence preservation, updates, and lessons learned.",
    "limit": "High alert severity alone is not enough."
  },
  {
    "type": "Supplier escalation",
    "trigger": "The fictional provider controls relevant service evidence, access, recovery, delivery, configuration, subcontractors, or corrective action.",
    "route": "Approved supplier owner or third-party risk owner through the contractual contact path.",
    "message": "Request only scoped evidence or action, preserve internal privacy, state deadline and service effect, and avoid unsupported blame.",
    "outcome": "Supplier evidence, restoration, corrective action, recovery commitment, or contract escalation.",
    "limit": "Supplier involvement does not prove supplier fault."
  },
  {
    "type": "Leadership escalation",
    "trigger": "The fictional issue requires enterprise priority, cross-team authority, funding, risk acceptance, major service decisions, or executive awareness.",
    "route": "SOC manager, incident lead, service executive, or approved communications lead to leadership.",
    "message": "Provide concise facts, business meaning, uncertainty, actions, owners, decisions required, timing, and next update.",
    "outcome": "Leadership decision, priority, funding, accountability, or communication direction.",
    "limit": "Leadership updates should not include unnecessary raw technical detail."
  },
  {
    "type": "Emergency escalation",
    "trigger": "A fictional immediate severe condition meets documented emergency criteria and delay would create unacceptable harm.",
    "route": "Authorized emergency role under the approved runbook with rapid notification and later review.",
    "message": "Record the emergency condition, authority, action, expected outcome, rollback, evidence preservation, and immediate notifications.",
    "outcome": "Time-sensitive protective action followed by validation and formal review.",
    "limit": "Emergency authority should be narrow, documented, and reviewable."
  },
  {
    "type": "Quality and improvement escalation",
    "trigger": "The fictional SOC sees recurring false positives, weak handoffs, delayed ownership, source gaps, overdue cases, inconsistent messages, or repeated control failures.",
    "route": "Analyst, reviewer, or case owner to the SOC manager, detection engineer, training owner, control owner, or governance lead.",
    "message": "Describe the repeated pattern, evidence, operational effect, owner, proposed improvement, deadline, metric, and validation.",
    "outcome": "Owned improvement action and measurable closure.",
    "limit": "Individual blame should not replace process evidence."
  }
];
const communicationAudiences = [
  {
    "audience": "SOC analysts and engineers",
    "need": "Detailed fictional evidence, source health, timeline, findings, hypotheses, actions, dependencies, technical risks, and next steps.",
    "avoid": "Unsupported certainty, vague requests, missing timestamps, and unexplained decisions.",
    "format": "Case update, technical note, investigation plan, detection review, or shift handoff."
  },
  {
    "audience": "Service and control owners",
    "need": "The fictional affected service, supported condition, required context, possible service effect, action options, authority, validation, and deadline.",
    "avoid": "Security jargon without explaining the business or technical decision.",
    "format": "Owner request, change decision, validation request, or remediation task."
  },
  {
    "audience": "Risk and business owners",
    "need": "The fictional risk scenario, current controls, evidence confidence, potential and confirmed impact, treatment options, decision deadline, and residual risk.",
    "avoid": "Raw logs or technical detail that does not change the decision.",
    "format": "Risk decision request, treatment recommendation, or exception review."
  },
  {
    "audience": "Leadership",
    "need": "Fictional facts, business meaning, service status, uncertainty, top actions, owners, decisions, deadlines, and next update.",
    "avoid": "Alarmist language, unsupported impact, long technical timelines, and hidden decision needs.",
    "format": "Executive status update or decision brief."
  },
  {
    "audience": "Suppliers",
    "need": "Fictional scoped service issue, contract path, evidence request, required action, deadline, service impact, and communication channel.",
    "avoid": "Unnecessary internal architecture, private identities, unsupported blame, or unrelated case details.",
    "format": "Supplier evidence request, service escalation, recovery request, or corrective-action notice."
  },
  {
    "audience": "Privacy or legal-concept reviewers",
    "need": "Fictional data categories, affected people or services, evidence scope, collection limits, retention, communication need, and decision question.",
    "avoid": "Sharing more data than necessary or making legal conclusions without authority.",
    "format": "Scoped consultation request or review record."
  },
  {
    "audience": "Incident response team",
    "need": "Fictional incident criteria, scope, confidence, evidence, active conditions, actions, owners, dependencies, communications, and recovery needs.",
    "avoid": "A simple alert-forward with no analysis or ownership.",
    "format": "Incident escalation record, response briefing, or action plan."
  },
  {
    "audience": "Incoming shift",
    "need": "Fictional case status, facts, evidence, source health, actions, decisions, deadlines, risks, open questions, commitments, closure criteria, and acknowledgement.",
    "avoid": "Only the alert title or a short informal message.",
    "format": "Structured shift handoff."
  }
];
const messageStructure = [
  {
    "field": "Purpose",
    "detail": "State why the fictional message is being sent and which decision, action, context, or acknowledgement is required.",
    "example": "Decision requested: approve temporary source failover before the next reporting deadline."
  },
  {
    "field": "Supported facts",
    "detail": "List only fictional observations supported by current evidence and source-health checks.",
    "example": "The primary reporting audit source has not delivered events for forty minutes."
  },
  {
    "field": "Business or operational meaning",
    "detail": "Explain the fictional service, users, data, deadline, recovery, control, or decision affected.",
    "example": "The gap reduces monitoring coverage for a critical reporting service."
  },
  {
    "field": "Uncertainty and limits",
    "detail": "Identify fictional missing evidence, alternate explanations, confidence, source gaps, and what remains unconfirmed.",
    "example": "No malicious activity during the gap is confirmed."
  },
  {
    "field": "Actions completed",
    "detail": "Record fictional work already performed, results, approvals, and validation status.",
    "example": "Compensating sources were confirmed healthy and telemetry ownership accepted the case."
  },
  {
    "field": "Decision or action needed",
    "detail": "State the fictional owner, exact choice or task, options, recommendation, deadline, and consequence of delay.",
    "example": "Telemetry owner must approve failover within fifteen minutes."
  },
  {
    "field": "Next update",
    "detail": "Set the fictional communication cadence, responsible sender, expected evidence, and escalation if the update is missed.",
    "example": "Next status update at 9:30 PM or earlier if source delivery returns."
  },
  {
    "field": "Reference and handling",
    "detail": "Link the fictional case, evidence identifiers, sensitivity, audience, and approved channel.",
    "example": "Case NBR-CASE-223; internal need-to-know distribution."
  }
];
const handoffFields = [
  {
    "field": "Case and owner",
    "detail": "Fictional case identifier, title, priority, current status, outgoing owner, incoming owner, and acknowledgement time.",
    "risk": "Responsibility becomes unclear after shift change."
  },
  {
    "field": "Scope and context",
    "detail": "Fictional assets, identities, services, data, suppliers, environment, time window, criticality, change, and exclusions.",
    "risk": "The incoming analyst investigates the wrong question or broadens scope without evidence."
  },
  {
    "field": "Facts and findings",
    "detail": "Fictional direct observations, supported conclusions, alternate explanations, confidence, potential impact, confirmed impact, and limitations.",
    "risk": "Hypotheses become facts or impact is overstated."
  },
  {
    "field": "Evidence and source health",
    "detail": "Fictional evidence identifiers, locations, owners, timestamps, coverage, healthy sources, delayed sources, missing sources, and conflicts.",
    "risk": "The incoming analyst repeats work or assumes complete visibility."
  },
  {
    "field": "Timeline and actions",
    "detail": "Fictional key events, completed actions, pending actions, blocked actions, approvals, results, rollback, and validation.",
    "risk": "Actions are duplicated, reversed, or left incomplete."
  },
  {
    "field": "Decisions and authority",
    "detail": "Fictional decisions made, decision owners, open decisions, required authority, deadlines, and escalation path.",
    "risk": "The incoming analyst silently accepts risk or acts without approval."
  },
  {
    "field": "Communications and commitments",
    "detail": "Fictional audiences informed, approved facts, supplier contacts, leadership updates, promises, next update, and sender.",
    "risk": "Stakeholders receive inconsistent messages or missed updates."
  },
  {
    "field": "Closure and improvement",
    "detail": "Fictional closure criteria, residual risk, review, retention, follow-up, tuning, training, control, supplier, or process improvements.",
    "risk": "The case closes without validated outcomes or lessons learned."
  }
];
const caseRecords = [
  {
    "id": "NBR-COM-01",
    "situation": "Critical audit-source gap",
    "facts": "A fictional reporting audit source has not delivered events for forty minutes; source-health monitoring confirms the gap.",
    "escalation": "High-priority operational and technical escalation to telemetry and service owners.",
    "audience": "SOC, telemetry owner, service owner, leadership if the decision deadline is missed.",
    "decision": "Approve source failover or another compensating evidence path.",
    "message": "Monitoring visibility is reduced; malicious activity is not confirmed; next update in fifteen minutes.",
    "limit": "The blind-spot period is not yet fully reconstructed."
  },
  {
    "id": "NBR-COM-02",
    "situation": "Expired supplier account",
    "facts": "A fictional supplier account remains active after project and exception closure.",
    "escalation": "Business, risk, service-owner, and supplier-governance escalation.",
    "audience": "Third-party risk owner, service owner, identity owner, supplier sponsor.",
    "decision": "Remove or narrowly renew access and complete activity review.",
    "message": "Active unsupported capability is confirmed; misuse and disclosure are not confirmed.",
    "limit": "A current undocumented support need may exist."
  },
  {
    "id": "NBR-COM-03",
    "situation": "Maintenance access alert",
    "facts": "A fictional high-severity alert occurred during approved maintenance with an authorized identity; one source is delayed.",
    "escalation": "Technical clarification and detection-engineering escalation, not automatic incident escalation.",
    "audience": "Case owner, service owner, detection engineer, incoming shift.",
    "decision": "Complete evidence validation and approve narrow tuning if tests pass.",
    "message": "Investigation remains active; unauthorized access and impact are unconfirmed.",
    "limit": "The delayed source may change confidence."
  },
  {
    "id": "NBR-COM-04",
    "situation": "Unapproved storage-policy change",
    "facts": "A fictional confidential storage policy changed outside the approved window.",
    "escalation": "Service, control, risk, and possible response escalation based on effective permissions.",
    "audience": "Service owner, cloud control owner, SOC manager, risk owner.",
    "decision": "Confirm intent and authorize rollback if the change is unsupported.",
    "message": "A control change is supported; unauthorized data access is not confirmed.",
    "limit": "Effective-permission calculation is still being validated."
  },
  {
    "id": "NBR-COM-05",
    "situation": "Supplier notification delay",
    "facts": "A fictional communications supplier has delayed messages during a major user-notification window.",
    "escalation": "Operational, supplier, and business escalation.",
    "audience": "Communications service owner, supplier owner, leadership, alternate-channel owner.",
    "decision": "Activate alternate communication and require supplier recovery updates.",
    "message": "Operational delay is confirmed; malicious cause is not supported.",
    "limit": "Supplier root cause remains incomplete."
  },
  {
    "id": "NBR-COM-06",
    "situation": "Case marked ready before evidence completion",
    "facts": "A fictional case is marked Ready for Review while one required source and one tuning action remain open.",
    "escalation": "Quality escalation to the case owner and SOC manager.",
    "audience": "Case owner, peer reviewer, SOC manager, detection owner.",
    "decision": "Return the case to Investigating or document why the missing source is non-material.",
    "message": "Closure criteria are incomplete; this does not prove the underlying alert is malicious.",
    "limit": "The missing source may not materially change the final decision."
  },
  {
    "id": "NBR-COM-07",
    "situation": "Emergency containment proposal",
    "facts": "A fictional active privileged session may affect a critical service, but service dependencies are only partially known.",
    "escalation": "Incident-response and emergency-authority review.",
    "audience": "Incident responder, service owner, risk owner, SOC manager, continuity owner.",
    "decision": "Approve immediate containment only if emergency criteria are met and rollback is ready.",
    "message": "Active risk may be severe; impact and full dependency scope remain uncertain.",
    "limit": "The supplied evidence does not yet prove service impact."
  },
  {
    "id": "NBR-COM-08",
    "situation": "Shift handoff with pending supplier response",
    "facts": "A fictional case remains open with one supplier evidence request, one owner decision, and one next-update commitment.",
    "escalation": "Structured operational handoff with acknowledgement.",
    "audience": "Outgoing analyst, incoming analyst, case owner, SOC manager if acknowledgement fails.",
    "decision": "Incoming owner accepts the case and preserves commitments and deadlines.",
    "message": "No new incident evidence exists; three operational actions remain open.",
    "limit": "The supplier response may change scope or priority."
  }
];
const communicationWorkflow = [
  {
    "step": "1",
    "title": "Identify the decision and audience",
    "detail": "Define the fictional purpose, required action, authority, audience, deadline, sensitivity, and approved communication channel.",
    "output": "Communication charter."
  },
  {
    "step": "2",
    "title": "Validate facts and source health",
    "detail": "Confirm fictional evidence, timestamps, service status, source gaps, scope, confidence, and whether impact is potential or confirmed.",
    "output": "Approved fact set."
  },
  {
    "step": "3",
    "title": "Translate for the audience",
    "detail": "Adjust fictional detail, terminology, business meaning, technical depth, privacy, and decision framing without changing the supported facts.",
    "output": "Audience-specific draft."
  },
  {
    "step": "4",
    "title": "State uncertainty and limits",
    "detail": "Document fictional missing evidence, alternate explanations, confidence, unresolved scope, and statements that must not be made.",
    "output": "Evidence-limit statement."
  },
  {
    "step": "5",
    "title": "Request action or decision",
    "detail": "Name the fictional owner, exact task or choice, options, recommendation, deadline, consequence of delay, and escalation path.",
    "output": "Decision request."
  },
  {
    "step": "6",
    "title": "Review and authorize",
    "detail": "Confirm fictional sender authority, need-to-know audience, message consistency, privacy, leadership wording, supplier path, and approvals.",
    "output": "Approved communication."
  },
  {
    "step": "7",
    "title": "Send, record, and acknowledge",
    "detail": "Use the approved fictional channel, record the message, recipient, time, response, commitments, and acknowledgement.",
    "output": "Communication log."
  },
  {
    "step": "8",
    "title": "Update, correct, and close",
    "detail": "Maintain fictional cadence, correct changed facts, complete commitments, validate decisions, close communication tasks, and capture improvements.",
    "output": "Communication closure record."
  }
];
const findings = [
  {
    "id": "NBR-COM-F01",
    "statement": "The fictional audit-source gap requires immediate technical and operational escalation but not an incident declaration.",
    "support": "Critical service, confirmed current blind spot, healthy source monitor, available telemetry owner, compensating sources, and no malicious-event evidence.",
    "alternative": "Recovered events may later reveal activity requiring incident escalation.",
    "confidence": "High",
    "limitation": "The blind-spot period is not fully reconstructed."
  },
  {
    "id": "NBR-COM-F02",
    "statement": "The fictional supplier-account message should emphasize unsupported active capability without accusing the supplier of misuse.",
    "support": "Expired exception, active account, confidential service scope, incomplete activity review, and supplier-governance ownership.",
    "alternative": "A current support need may justify narrow renewal.",
    "confidence": "High",
    "limitation": "No misuse, intent, or disclosure is confirmed."
  },
  {
    "id": "NBR-COM-F03",
    "statement": "The fictional maintenance case should be handed off with the delayed-source limitation and tuning action still open.",
    "support": "Approved context, healthy primary source, delayed supporting source, active case, open tuning review, and incoming shift.",
    "alternative": "The source may recover before handoff and reduce open work.",
    "confidence": "High",
    "limitation": "The missing source may or may not change the conclusion."
  },
  {
    "id": "NBR-COM-F04",
    "statement": "The fictional leadership update for the storage-policy case should request a rollback decision while stating that data access is unconfirmed.",
    "support": "Unsupported control change, confidential storage, effective-permission review, service-owner involvement, and no access evidence.",
    "alternative": "The change may be legitimate but undocumented.",
    "confidence": "Medium-High",
    "limitation": "Effective permissions remain under validation."
  },
  {
    "id": "NBR-COM-F05",
    "statement": "The fictional supplier-delay communication should activate alternate business action while avoiding a security-cause claim.",
    "support": "Confirmed delivery delay, major notification window, alternate channel, supplier status, and no malicious indicators.",
    "alternative": "Later root-cause evidence may identify a security issue.",
    "confidence": "Medium-High",
    "limitation": "Supplier root cause is incomplete."
  },
  {
    "id": "NBR-COM-F06",
    "statement": "A fictional handoff is incomplete until the incoming owner acknowledges responsibility and open commitments.",
    "support": "Open supplier request, owner decision, next-update commitment, shift change, and defined handoff process.",
    "alternative": "Automated case assignment may provide partial acknowledgement if policy defines it.",
    "confidence": "High",
    "limitation": "Acknowledgement method may vary by approved workflow."
  }
];
const commonMistakes = [
  "Escalating fictional alerts only because the tool severity is high.",
  "Waiting for confirmed impact before escalating a time-sensitive active risk or critical blind spot.",
  "Sending the same level of technical detail to analysts, suppliers, service owners, and leadership.",
  "Reporting potential impact, possible compromise, or supplier responsibility as confirmed.",
  "Confusing technical expertise with service, business, risk, privacy, supplier, communication, or emergency authority.",
  "Escalating without a clear question, owner, deadline, evidence, recommendation, or consequence of delay.",
  "Copying unnecessary private or sensitive information into supplier or leadership messages.",
  "Using alarmist wording that causes unsupported conclusions.",
  "Hiding uncertainty because the message is intended for leadership.",
  "Allowing different teams to send inconsistent fictional facts or impact statements.",
  "Treating a sent message as complete without acknowledgement, response tracking, commitments, and closure.",
  "Handing off only the alert title, status, or last action.",
  "Failing to transfer open decisions, evidence gaps, deadlines, communication promises, and closure criteria.",
  "Using or exposing any real credentials, employee information, school records, private company messages, supplier communications, incident details, case evidence, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of fictional escalation?",
    "choices": [
      "Move attention, expertise, authority, urgency, or decision-making to the correct role based on defined criteria.",
      "Send every alert to leadership.",
      "Declare incidents faster.",
      "Avoid assigning a case owner."
    ],
    "answer": 0,
    "explanation": "Escalation should solve a specific expertise, authority, ownership, or urgency need."
  },
  {
    "question": "What should a fictional leadership update include?",
    "choices": [
      "Supported facts, business meaning, uncertainty, actions, owners, decisions needed, deadlines, and next update.",
      "Every raw log line.",
      "Only the alert severity.",
      "Unsupported worst-case impact."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be concise, evidence-limited, and decision-ready."
  },
  {
    "question": "How should a fictional supplier escalation be written?",
    "choices": [
      "Request scoped evidence or action through the approved path while avoiding unnecessary internal detail and unsupported blame.",
      "Send the complete internal case file.",
      "Accuse the supplier before evidence review.",
      "Avoid setting a deadline."
    ],
    "answer": 0,
    "explanation": "Supplier communication should be narrow, authorized, respectful, and decision-focused."
  },
  {
    "question": "When is fictional emergency escalation appropriate?",
    "choices": [
      "When a documented immediate severe condition meets approved emergency criteria and delay would create unacceptable harm.",
      "Whenever an alert is High severity.",
      "Whenever an analyst prefers a faster action.",
      "Only after a case closes."
    ],
    "answer": 0,
    "explanation": "Emergency authority should be tied to narrow approved criteria and later review."
  },
  {
    "question": "What makes a fictional handoff complete?",
    "choices": [
      "Scope, facts, evidence, source health, actions, decisions, deadlines, communications, risks, closure criteria, and incoming-owner acknowledgement.",
      "The alert title and severity.",
      "A brief informal message.",
      "Automatic closure at shift end."
    ],
    "answer": 0,
    "explanation": "A complete handoff preserves continuity and accountability."
  },
  {
    "question": "How should fictional uncertainty appear in communications?",
    "choices": [
      "Explicitly, with confidence, missing evidence, alternate explanations, and what remains unconfirmed.",
      "It should be removed from leadership messages.",
      "It should be replaced with the worst-case assumption.",
      "It should appear only after closure."
    ],
    "answer": 0,
    "explanation": "Uncertainty is part of accurate decision-making, not a weakness to hide."
  },
  {
    "question": "What makes a fictional communication defensible?",
    "choices": [
      "It is authorized, audience-appropriate, fact-based, evidence-limited, action-oriented, recorded, acknowledged, updated, and closed.",
      "It uses urgent language.",
      "It includes every available detail.",
      "It avoids naming an owner."
    ],
    "answer": 0,
    "explanation": "Defensible communication connects evidence to an approved audience, action, and follow-through."
  }
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function EscalationCommunicationHandoffsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I15
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.5 Escalation, Communication, and Handoffs
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders route fictional technical, operational,
            business, supplier, incident, leadership, emergency, and quality
            decisions while writing accurate updates and preserving complete
            shift handoffs.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I15: Security Operations Basics"
          lessonTitle="Escalation, Communication, and Handoffs"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge cases, alerts, services, identities, suppliers, evidence, owners, communications, and decisions.",
            "I will not request, expose, or evaluate real credentials, employee information, school records, private company messages, supplier communications, incident details, case evidence, or confidential SOC information.",
            "I will distinguish operational, technical, business, incident, supplier, leadership, emergency, and quality escalation.",
            "I will preserve facts, uncertainty, confidence, potential impact, confirmed impact, authority, ownership, deadlines, and communication limits.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Right Message Depends on the Decision and the Audience"
        >
          <p className="leading-8">
            A fictional Northbridge source gap requires a technical owner to
            restore evidence, a service owner to assess operational risk, a SOC
            manager to coordinate priority, and leadership to make a decision
            only if the deadline is missed. Sending the same raw alert to all
            four audiences would create confusion. Professional escalation
            identifies the exact decision, routes it to the correct authority,
            preserves evidence limits, and records the response.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak escalation
              </p>

              <p className="mt-2 leading-7">
                Forward the alert without analysis, copy everyone, overstate
                impact, omit the decision deadline, and assume the recipient
                knows what to do.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional escalation
              </p>

              <p className="mt-2 leading-7">
                State the purpose, facts, meaning, uncertainty, owner, decision,
                deadline, recommendation, next update, and approved handling.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Escalation and Communication Control the Speed and Quality of Decisions"
        >
          <p className="leading-8">
            Fictional SOC work crosses technical teams, service owners,
            suppliers, risk owners, continuity, privacy, leadership, and
            incident response. Weak messages can delay action, create
            unnecessary service disruption, expose sensitive information, or
            produce conflicting impact claims. Strong escalation and handoff
            practices make work continuous, accountable, proportionate, and
            reviewable.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Purpose–Facts–Meaning–Decision–Follow-Through Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Purpose", "Why is the fictional message being sent, to whom, through which approved channel, and by what deadline?"],
              ["Facts", "Which fictional evidence, source health, timeline, scope, service state, and actions are directly supported?"],
              ["Meaning", "What fictional technical, operational, supplier, recovery, privacy, or business effect matters to this audience?"],
              ["Decision", "Which fictional owner must choose or perform what, with which authority, options, recommendation, and consequence of delay?"],
              ["Follow-through", "When is the fictional next update, who records acknowledgement, which commitments remain, and what closes the communication?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>

                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Escalation, Communication, and Handoff Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Escalation Types
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Escalation Paths
          </h2>

          <div className="mt-6 grid gap-5">
            {escalationTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Trigger", item.trigger],
                    ["Route", item.route],
                    ["Message design", item.message],
                    ["Expected outcome", item.outcome],
                    ["Evidence limit", item.limit],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Audience Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Communication Audiences
          </h2>

          <div className="mt-6 grid gap-5">
            {communicationAudiences.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Needs
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.need}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Avoid
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Best format
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.format}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Message Structure
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields in a Decision-Ready Fictional Message
          </h2>

          <div className="mt-6 grid gap-5">
            {messageStructure.map((item, index) => (
              <article
                key={item.field}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.35fr_1fr_0.8fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </span>

                <h3 className="font-black text-cyan-100">{item.field}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Example: </span>
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Handoff Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Complete Fictional Shift Handoff
          </h2>

          <div className="mt-6 grid gap-5">
            {handoffFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required content
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.detail}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Risk if omitted
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Case Communication Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Escalation Records
          </h2>

          <div className="mt-6 grid gap-5">
            {caseRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.situation}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Supported facts", item.facts],
                    ["Escalation path", item.escalation],
                    ["Audience", item.audience],
                    ["Decision needed", item.decision],
                    ["Core message", item.message],
                    ["Evidence limit", item.limit],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Communication Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Decision Need to Communication Closure
          </h2>

          <div className="mt-6 grid gap-4">
            {communicationWorkflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Escalation and Communication Dashboard"
          subtitle="Training dashboard for fictional SOC communication quality only."
          metrics={[
            {
              label: "Open escalations",
              value: "8",
              note: "Operational, technical, supplier, business, incident, leadership, emergency, and quality paths are represented.",
            },
            {
              label: "Pending acknowledgements",
              value: "2",
              note: "One incoming shift and one supplier owner must acknowledge open commitments.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The fictional records support active risks and decisions but no confirmed incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Source Gap Requires Owner Decision before Reporting Deadline"
          severity="High"
          time="9:18 PM"
          source="Fake Northbridge Escalation Console"
          details="A fictional reporting audit source remains unavailable, the service deadline is approaching, compensating evidence is healthy, and the telemetry owner has not yet approved source failover."
          recommendation="Escalate the decision to the telemetry and service owners with supported facts, business meaning, uncertainty, options, recommendation, deadline, and next update. Notify leadership only if the decision deadline or service risk requires it. Do not report malicious activity as confirmed."
        />

        <FakeLogPanel
          title="Fake Northbridge Communication Timeline"
          logs={[
            "20:00 SOURCE reporting-audit='gap confirmed'",
            "20:05 CASE owner='Tier2-A'",
            "20:10 ESCALATE telemetry-owner='restore or failover'",
            "20:15 MESSAGE facts='approved' impact='unconfirmed'",
            "20:20 DECISION deadline='20:35'",
            "20:25 ACK service-owner='received'",
            "20:30 ACK telemetry-owner='pending'",
            "20:35 ESCALATE soc-manager='deadline missed'",
            "20:40 LEADERSHIP update='visibility reduced, service healthy'",
            "20:45 DECISION failover='approved'",
            "20:50 ACTION compensating-source='active'",
            "20:55 UPDATE supplier='not required'",
            "21:00 HANDOFF incoming-owner='acknowledged'",
            "21:10 SOURCE primary='restoring'",
            "21:20 VALIDATE events='current and parsed'",
            "21:30 CLOSE communication='commitments complete'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Communication Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Should the Source Gap Be Escalated to Leadership Immediately?"
          evidence={[
            "The fictional reporting audit source has been unavailable for forty minutes.",
            "The service is currently functioning.",
            "Compensating sources remain healthy.",
            "The telemetry owner has not yet approved failover.",
            "The reporting deadline is approaching.",
            "No malicious activity or service impact is confirmed.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Escalate the owner decision immediately and involve leadership if the deadline or business risk requires enterprise authority, while clearly stating that impact and malicious activity are unconfirmed.",
            "Declare a major incident and notify leadership because the source is unavailable.",
            "Do nothing because the service is still functioning.",
            "Send every raw log to leadership.",
          ]}
          bestAnswer={0}
          explanation="The strongest response matches escalation to the real decision and preserves evidence limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Escalation, Communication, and Handoffs"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build the Northbridge Escalation, Communication, and Handoff Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Escalation Matrix, Audience Messages, Decisions, and Handoffs
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to produce
                an authorized and decision-ready communication package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Escalation charter with purpose, criteria, owners, authority, privacy, channels, and service goals.</li>
                <li>Operational, technical, business, incident, supplier, leadership, emergency, and quality escalation matrix.</li>
                <li>Technical, service-owner, risk-owner, leadership, supplier, privacy-concept, incident, and shift-handoff message templates.</li>
                <li>Approved fact set with evidence, source health, scope, confidence, potential impact, confirmed impact, and limitations.</li>
                <li>Decision requests with owner, authority, options, recommendation, deadline, consequence of delay, and next update.</li>
                <li>Communication log with sender, audience, time, channel, approval, acknowledgement, commitments, corrections, and closure.</li>
                <li>Structured shift-handoff record with incoming-owner acknowledgement and open commitments.</li>
                <li>Technical summary, leadership summary, metrics, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company messages, supplier communications, incident
            details, case evidence, or confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants a One-Sentence Update before the Evidence Review Is Complete"
          scenario="The fictional storage-policy case confirms an unsupported change, but effective permissions and data-access impact remain under review."
          choices={[
            {
              label: "Choice A",
              response:
                "Report that an unsupported confidential-storage control change is confirmed, access impact is unconfirmed, rollback review is active, owners are assigned, and the next update will follow validation.",
              outcome:
                "Best communication choice. The update is concise, accurate, and decision-ready.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Report that confidential data was exposed.",
              outcome:
                "Unsupported. The evidence does not confirm data access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the full technical timeline with no summary.",
              outcome:
                "Weak. Leadership needs the business meaning and decision status.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Incoming Shift Has Not Acknowledged an Open Supplier Commitment"
          scenario="The fictional outgoing analyst must leave, but a supplier response and leadership update are due within thirty minutes."
          choices={[
            {
              label: "Choice A",
              response:
                "Escalate the missing acknowledgement, keep the outgoing owner responsible until transfer is accepted, document the handoff, and ensure commitments have an active owner.",
              outcome:
                "Best handoff choice. Responsibility and deadlines remain clear.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the incoming shift will see the case and leave.",
              outcome:
                "Unsafe. Commitments may be missed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the case because the outgoing shift is ending.",
              outcome:
                "Unsafe. Open evidence, supplier, and communication work remains.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Escalation, Communication, and Handoffs Checklist"
          items={[
            "I can distinguish fictional operational, technical, business, incident, supplier, leadership, emergency, and quality escalation.",
            "I can identify the fictional purpose, audience, authority, deadline, sensitivity, and approved communication channel.",
            "I can write fictional messages that separate facts, business meaning, uncertainty, potential impact, confirmed impact, and unsupported claims.",
            "I can adapt fictional technical detail for analysts, service owners, risk owners, leadership, suppliers, privacy concepts, incident teams, and incoming shifts.",
            "I can create fictional decision requests with owners, options, recommendations, deadlines, consequences of delay, and escalation paths.",
            "I can preserve fictional need-to-know and avoid unnecessary private or sensitive detail.",
            "I can record fictional messages, approvals, recipients, times, acknowledgements, commitments, corrections, and closure.",
            "I can complete fictional handoffs with scope, evidence, source health, actions, decisions, deadlines, communications, risks, closure criteria, and acknowledgement.",
            "I can maintain fictional status cadence and correct messages when evidence changes.",
            "I will use only fictional evidence and never expose real credentials, company messages, employee data, school records, suppliers, incidents, cases, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.5 Mini Quiz: Escalation, Communication, and Handoffs"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Escalation, Communication, and Handoff Package for Northbridge. Include the escalation charter, escalation matrix, audience map, approved fact set, technical update, service-owner request, risk decision request, leadership summary, supplier request, incident escalation, emergency record, communication log, shift-handoff template, acknowledgement record, metrics, findings, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional cases, alerts, systems, identities, suppliers, services, messages, decisions, dates, actions, and outcomes.",
            "Do not treat urgency, leadership interest, supplier involvement, missing evidence, or active access as automatic proof of incident or impact.",
            "Make every message traceable to evidence, audience, authority, owner, deadline, next update, acknowledgement, and closure.",
            "Show how the same facts can be translated differently for technical, business, supplier, and leadership audiences without changing their meaning.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Escalation should match a real need for expertise, authority, urgency, ownership, or decision-making.",
            "Different audiences need different levels of detail, but the supported facts must remain consistent.",
            "Leadership updates should be concise, evidence-limited, business-focused, and decision-ready.",
            "Supplier communications should be scoped, authorized, privacy-safe, and free of unsupported blame.",
            "Handoffs transfer evidence, reasoning, decisions, deadlines, commitments, risks, closure criteria, and responsibility.",
            "A sent message is not complete until acknowledgement, commitments, updates, corrections, and closure are recorded.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational communications.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I15
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}