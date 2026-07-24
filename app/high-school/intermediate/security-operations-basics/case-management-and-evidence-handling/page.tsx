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
const previousLesson = `${modulePath}/alert-triage-and-prioritization`;
const nextLesson = `${modulePath}/detection-engineering-and-tuning-basics`;

const objectives = [
  "Explain how fictional case management connects triage, ownership, scope, evidence, timeline, actions, decisions, communications, validation, closure, and improvement.",
  "Distinguish fictional alerts, cases, incidents, evidence items, analyst notes, findings, hypotheses, decisions, tasks, and closure records.",
  "Build a fictional SOC case file that is reconstructable, privacy-safe, evidence-limited, and suitable for shift handoff and quality review.",
  "Evaluate fictional evidence using relevance, source health, timestamps, traceability, integrity concepts, scope, consistency, confidence, and limitations.",
  "Create a portfolio-safe fictional case-management package with a case charter, evidence register, timeline, action log, communication record, findings, closure criteria, and leadership summary."
];
const vocabulary = [
  [
    "Case",
    "A fictional organized record that connects one or more related alerts, evidence items, actions, decisions, owners, communications, and outcomes."
  ],
  [
    "Case owner",
    "The fictional analyst or responder accountable for maintaining case quality, status, evidence references, actions, decisions, communications, and next steps."
  ],
  [
    "Evidence item",
    "A fictional approved record, event, configuration, statement, test result, source-health record, or artifact used to support or challenge a conclusion."
  ],
  [
    "Evidence register",
    "A fictional index that records evidence identifiers, sources, owners, timestamps, relevance, health, scope, handling, confidence, and limitations."
  ],
  [
    "Timeline",
    "A fictional ordered record of alerts, evidence, actions, communications, approvals, changes, decisions, and validation events."
  ],
  [
    "Action log",
    "A fictional record of tasks performed, requested, blocked, approved, completed, validated, or reassigned during a case."
  ],
  [
    "Decision log",
    "A fictional record of what was decided, by whom, with which authority, based on which evidence, under which limitations, and with which review date."
  ],
  [
    "Finding",
    "A fictional evidence-supported statement that separates direct observations, interpretation, alternatives, confidence, limitations, and required action."
  ],
  [
    "Hypothesis",
    "A fictional possible explanation that guides evidence collection but is not treated as a proven conclusion."
  ],
  [
    "Chain of custody concept",
    "A fictional record of who collected, transferred, accessed, stored, or reviewed an evidence item and when."
  ],
  [
    "Evidence integrity",
    "A fictional assurance concept that an evidence item remains traceable, protected from unauthorized change, and suitable for the intended decision."
  ],
  [
    "Case status",
    "A fictional label such as New, Triaging, Investigating, Awaiting Owner, Responding, Monitoring, Ready for Review, or Closed."
  ],
  [
    "Case linkage",
    "A fictional relationship between alerts, cases, incidents, suppliers, changes, controls, risks, or prior records."
  ],
  [
    "Closure criteria",
    "Fictional conditions that must be satisfied before the case is considered complete."
  ],
  [
    "Retention",
    "A fictional rule describing how long approved case records and evidence references should remain available."
  ],
  [
    "Quality review",
    "A fictional peer or management check of case reasoning, evidence, ownership, timeliness, communication, validation, and closure."
  ]
];
const caseFields = [
  {
    "field": "Case identity and scope",
    "strong": "The fictional case has a unique identifier, clear title, business service, assets, identities, data, suppliers, time window, environment, and explicit exclusions.",
    "weak": "The case title repeats the alert name but does not define what is actually being investigated.",
    "question": "What exact question does the case answer?"
  },
  {
    "field": "Ownership and authority",
    "strong": "The fictional case owner, service owner, control owner, risk owner, supplier owner, responder, communicator, and decision authority are identified.",
    "weak": "The case is assigned to the SOC with no specific accountable role.",
    "question": "Who owns the work, service, control, risk, and final decision?"
  },
  {
    "field": "Evidence references",
    "strong": "Each fictional item has an identifier, source, owner, timestamp, relevance, source health, scope, handling record, confidence, and limitation.",
    "weak": "The analyst pastes untraceable text or screenshots into notes.",
    "question": "Can another reviewer locate and understand each supporting item?"
  },
  {
    "field": "Timeline",
    "strong": "The fictional case records alert receipt, event time, evidence collection, actions, approvals, communications, source gaps, decisions, validation, and closure in order.",
    "weak": "Notes are written as a paragraph with no timestamps.",
    "question": "Can another reviewer reconstruct what happened and when?"
  },
  {
    "field": "Facts and hypotheses",
    "strong": "The fictional case separates direct observations, supported conclusions, hypotheses, alternatives, missing evidence, potential impact, confirmed impact, and unsupported claims.",
    "weak": "Possible explanations are written as facts.",
    "question": "Which statements are observed, inferred, possible, or unproven?"
  },
  {
    "field": "Actions and decisions",
    "strong": "The fictional record identifies requested and completed actions, owner, authority, reason, result, rollback, validation, and decision deadline.",
    "weak": "A ticket is marked complete without explaining what changed or who approved it.",
    "question": "What was done, why, by whom, with what result?"
  },
  {
    "field": "Communication",
    "strong": "The fictional case records audience, sender, approved facts, uncertainty, impact status, decision needs, commitments, and next update.",
    "weak": "Informal messages create conflicting or unsupported statements.",
    "question": "Who was told what, when, and under which evidence limits?"
  },
  {
    "field": "Closure and improvement",
    "strong": "The fictional case closes only after security and business validation, source-health review, residual risk, owner signoff, follow-up, metrics, and improvement actions.",
    "weak": "The case closes when the alert disappears or the shift ends.",
    "question": "What proves the case is complete and what must improve?"
  }
];
const evidenceQuality = [
  {
    "dimension": "Relevance",
    "good": "The fictional evidence directly supports or challenges the case question, scope, timeline, identity, service, control, impact, or action.",
    "risk": "A large amount of technically interesting data is included even though it does not affect the decision.",
    "check": "Why is this item needed?"
  },
  {
    "dimension": "Source health",
    "good": "The fictional source is current, timely, correctly parsed, available, owned, and known to cover the intended data.",
    "risk": "A delayed, stale, incomplete, duplicated, or misparsed source is treated as fully reliable.",
    "check": "Can the source support the conclusion?"
  },
  {
    "dimension": "Timestamp quality",
    "good": "The fictional event, receipt, collection, action, communication, and validation times are distinguished and normalized.",
    "risk": "Different time zones or delayed ingestion create a false sequence.",
    "check": "Which time does each timestamp represent?"
  },
  {
    "dimension": "Traceability",
    "good": "The fictional item has a stable identifier, origin, owner, collection method, case link, and reviewer path.",
    "risk": "Evidence is copied without a source reference.",
    "check": "Can another reviewer find the original approved record?"
  },
  {
    "dimension": "Integrity concept",
    "good": "The fictional item is protected, access-controlled, versioned, and documented during collection, transfer, review, and storage.",
    "risk": "Analyst notes overwrite the original or mix observations with interpretations.",
    "check": "How do we know which record was reviewed?"
  },
  {
    "dimension": "Consistency",
    "good": "The fictional evidence is compared across independent or complementary sources and conflicts are documented.",
    "risk": "One source is accepted even when another healthy source disagrees.",
    "check": "Do related sources support the same event and scope?"
  },
  {
    "dimension": "Scope",
    "good": "The fictional item identifies included systems, identities, data, actions, time periods, regions, suppliers, and exclusions.",
    "risk": "A narrow event is described as organization-wide.",
    "check": "What does the item cover and not cover?"
  },
  {
    "dimension": "Confidence and limitation",
    "good": "The fictional case records how strongly the evidence supports the conclusion and what remains unknown.",
    "risk": "The finding sounds certain even when evidence is partial.",
    "check": "What could change this conclusion?"
  }
];
const caseRecords = [
  {
    "id": "NBR-CASE-221",
    "title": "Scheduled maintenance access alert",
    "status": "Investigating",
    "owner": "Tier 2 Analyst",
    "scope": "Confidential support service, maintenance identity, approved change window, related alert and storage evidence.",
    "evidence": "Healthy primary alert source, approved change, authorized identity, two prior similar events, delayed supporting storage source.",
    "decision": "Continue validation and detection-tuning review; incident declaration is not supported.",
    "next": "Recover or justify the delayed source and complete service-owner validation.",
    "limit": "No unauthorized access, exposure, or service impact is confirmed."
  },
  {
    "id": "NBR-CASE-222",
    "title": "Expired supplier account",
    "status": "Awaiting Owner",
    "owner": "Third-Party Risk Owner",
    "scope": "One limited supplier account, confidential support service, expired exception, ended project, and incomplete activity review.",
    "evidence": "Identity register, exception record, sponsor record, project closure, service scope, and access status.",
    "decision": "Remove or narrowly renew the access through authorized governance.",
    "next": "Complete post-expiration activity review and validate approved support needs.",
    "limit": "No misuse or disclosure is confirmed."
  },
  {
    "id": "NBR-CASE-223",
    "title": "Critical audit-source delivery gap",
    "status": "Responding",
    "owner": "Telemetry Owner",
    "scope": "Reporting Service audit source, forty-minute gap, compensating sources, affected case coverage, and restoration.",
    "evidence": "Source-health monitor, expected delivery, last received event, parser status, service ownership, and compensating records.",
    "decision": "Treat as High-priority monitoring risk and restore source delivery.",
    "next": "Validate recovered events, gap completeness, parsing, retention, and alert function.",
    "limit": "No malicious activity during the gap is confirmed."
  },
  {
    "id": "NBR-CASE-224",
    "title": "Unapproved confidential storage-policy change",
    "status": "Investigating",
    "owner": "Service Owner",
    "scope": "One storage policy, confidential collection, change identity, approved baseline, effective permissions, and change window.",
    "evidence": "Configuration history, identity activity, change calendar, policy baseline, service map, and current permissions.",
    "decision": "Confirm intent and coordinate authorized rollback if the change is unsupported.",
    "next": "Validate effective access, service function, monitoring, and owner approval.",
    "limit": "No unauthorized data access is confirmed."
  },
  {
    "id": "NBR-CASE-225",
    "title": "Historical endpoint alert duplicate",
    "status": "Ready for Review",
    "owner": "Tier 1 Analyst",
    "scope": "One three-week-old endpoint alert linked to a validated closed case with no new activity.",
    "evidence": "Original case, containment record, endpoint health, validation, closure, and duplicate relationship.",
    "decision": "Link as duplicate and close proportionately.",
    "next": "Peer-review the linkage and confirm no new scope.",
    "limit": "A new related event would require reassessment."
  },
  {
    "id": "NBR-CASE-226",
    "title": "Supplier notification delay",
    "status": "Monitoring",
    "owner": "Communications Service Owner",
    "scope": "Communications provider, major user-notification window, delayed delivery, alternate channel, supplier status, and business deadline.",
    "evidence": "Supplier status, internal delivery metrics, user-notification plan, alternate channel test, and owner communications.",
    "decision": "Use alternate communication and monitor provider recovery.",
    "next": "Validate delivery completion and document supplier follow-up.",
    "limit": "Operational degradation is supported; malicious cause is not."
  },
  {
    "id": "NBR-CASE-227",
    "title": "Emergency exercise sign-in",
    "status": "Ready for Review",
    "owner": "Tier 2 Analyst",
    "scope": "One administrator, approved emergency network, documented exercise, privileged session, and exercise tasks.",
    "evidence": "Exercise plan, access approval, sign-in, session actions, owner validation, and closure record.",
    "decision": "Classify as expected exercise behavior after final validation.",
    "next": "Close with evidence and note detection-tuning considerations.",
    "limit": "The exercise result does not make future unusual sign-ins automatically benign."
  },
  {
    "id": "NBR-CASE-228",
    "title": "Repeated user lockouts",
    "status": "Closed",
    "owner": "Identity Support",
    "scope": "One fictional user, password-reset issue, repeated lockouts, help-desk case, and identity health.",
    "evidence": "Help-desk record, password-reset timeline, sign-in failures, user validation, and identity owner review.",
    "decision": "Resolved as a supported user issue with no compromise evidence.",
    "next": "Monitor only if pattern or scope changes.",
    "limit": "The result applies only to this user and time period."
  }
];
const caseWorkflow = [
  {
    "step": "1",
    "title": "Open or link the case",
    "detail": "Confirm the fictional alert relationship, case question, scope, priority, owner, service, time window, privacy boundary, and existing records.",
    "output": "Case charter."
  },
  {
    "step": "2",
    "title": "Create the evidence register",
    "detail": "Index fictional sources, identifiers, owners, timestamps, relevance, health, scope, handling, confidence, and limitations.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Build the timeline",
    "detail": "Order fictional event, alert, receipt, collection, action, communication, approval, source-gap, validation, and closure times.",
    "output": "Case timeline."
  },
  {
    "step": "4",
    "title": "Document facts and hypotheses",
    "detail": "Separate fictional observations, supported conclusions, hypotheses, alternatives, missing evidence, potential impact, confirmed impact, and unsupported claims.",
    "output": "Reasoning matrix."
  },
  {
    "step": "5",
    "title": "Track actions and decisions",
    "detail": "Record fictional owner, authority, request, task, result, blocked condition, deadline, rollback, validation, and decision rationale.",
    "output": "Action and decision log."
  },
  {
    "step": "6",
    "title": "Coordinate communication",
    "detail": "Document fictional audience, approved facts, uncertainty, service status, decision needs, commitments, supplier contacts, and next update.",
    "output": "Communication record."
  },
  {
    "step": "7",
    "title": "Validate outcomes",
    "detail": "Confirm fictional security result, business function, source health, control operation, supplier action, recovery, residual risk, and owner approval.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Review, close, and improve",
    "detail": "Complete fictional peer review, closure criteria, retention, linkage, lessons learned, detection or runbook updates, metrics, and reassessment triggers.",
    "output": "Closure and improvement package."
  }
];
const caseStatuses = [
  {
    "status": "New",
    "meaning": "A fictional alert or request has been received but source validation and ownership are not complete.",
    "entry": "Alert or request meets case-opening criteria.",
    "exit": "Owner, scope, source health, and initial priority are documented."
  },
  {
    "status": "Triaging",
    "meaning": "A fictional analyst is validating sources, gathering context, checking duplicates, and assigning priority.",
    "entry": "Initial owner accepts the record.",
    "exit": "Disposition is documented and the case is closed, linked, monitored, or advanced."
  },
  {
    "status": "Investigating",
    "meaning": "The fictional case requires deeper evidence correlation, owner context, hypotheses, findings, or scope review.",
    "entry": "Triage identifies unresolved questions or meaningful risk.",
    "exit": "The case moves to response, owner decision, monitoring, or review."
  },
  {
    "status": "Awaiting Owner",
    "meaning": "A fictional service, control, supplier, risk, privacy, or business owner must provide evidence or authority.",
    "entry": "The request, deadline, and escalation path are documented.",
    "exit": "The owner responds or escalation changes the action path."
  },
  {
    "status": "Responding",
    "meaning": "Authorized fictional containment, correction, recovery, source repair, access change, or supplier action is underway.",
    "entry": "Action authority, plan, owner, rollback, communication, and validation are approved.",
    "exit": "Action results are available for validation."
  },
  {
    "status": "Monitoring",
    "meaning": "The fictional immediate action is complete or risk is stable, but defined observation or supplier recovery continues.",
    "entry": "Monitoring objective, duration, source, threshold, owner, and escalation trigger are documented.",
    "exit": "The monitoring condition is satisfied or requires renewed action."
  },
  {
    "status": "Ready for Review",
    "meaning": "The fictional case owner believes evidence, actions, validation, decisions, and closure criteria are complete.",
    "entry": "Required records and signoffs are assembled.",
    "exit": "Peer or manager approves closure or returns the case for correction."
  },
  {
    "status": "Closed",
    "meaning": "The fictional case has approved closure, retained evidence references, residual-risk disposition, follow-up, and review triggers.",
    "entry": "Security and business outcomes are validated and owner signoff is recorded.",
    "exit": "A new event or reassessment trigger may reopen or create a linked case."
  }
];
const findings = [
  {
    "id": "NBR-CAS-F01",
    "statement": "The fictional maintenance-access case should remain open until the delayed source is recovered or its absence is formally accepted as non-material.",
    "support": "Open investigation, delayed supporting source, approved maintenance context, healthy primary evidence, and defined closure criteria.",
    "alternative": "The available evidence may already be sufficient if the missing source cannot change the decision.",
    "confidence": "Medium-High",
    "limitation": "The value of the missing source is not yet fully known."
  },
  {
    "id": "NBR-CAS-F02",
    "statement": "The fictional expired supplier account requires a distinct owned case because active unsupported capability remains after project closure.",
    "support": "Active account, expired exception, ended project, confidential service scope, named supplier owner, and incomplete activity review.",
    "alternative": "A current support need may justify a narrow renewed access path.",
    "confidence": "High",
    "limitation": "No misuse or disclosure is confirmed."
  },
  {
    "id": "NBR-CAS-F03",
    "statement": "The fictional source-gap case should record both the monitoring risk and the absence of confirmed malicious activity.",
    "support": "Confirmed forty-minute delivery gap, critical service, healthy source monitor, compensating sources, and no suspicious-event evidence.",
    "alternative": "Later recovered events could change the case scope.",
    "confidence": "High",
    "limitation": "The blind-spot period is not yet fully reconstructed."
  },
  {
    "id": "NBR-CAS-F04",
    "statement": "The fictional historical endpoint alert should be linked to the original case rather than managed as an independent high-priority case.",
    "support": "Old event, validated containment, closed original case, no new activity, and direct duplicate relationship.",
    "alternative": "New scope or activity would justify a separate or reopened case.",
    "confidence": "High",
    "limitation": "The analyst must verify that no new evidence exists."
  },
  {
    "id": "NBR-CAS-F05",
    "statement": "The fictional supplier delay case supports operational impact and alternate communication, but not a security-incident conclusion.",
    "support": "Supplier status, delayed delivery, major notification window, alternate channel, business-owner decision, and no malicious indicators.",
    "alternative": "Later supplier evidence could identify a security cause.",
    "confidence": "Medium-High",
    "limitation": "Supplier root cause is not yet final."
  },
  {
    "id": "NBR-CAS-F06",
    "statement": "A fictional case should not be closed solely because the alert stopped or the action ticket completed.",
    "support": "Case workflow, evidence requirements, business validation, source health, residual risk, owner signoff, and improvement needs.",
    "alternative": "Low-risk duplicate cases may use simplified closure under an approved runbook.",
    "confidence": "High",
    "limitation": "Closure depth should remain proportionate to case risk."
  }
];
const commonMistakes = [
  "Treating fictional analyst notes as a substitute for traceable evidence references.",
  "Combining alerts with different assets, identities, time periods, causes, or owners into one unclear case.",
  "Opening separate cases for duplicates without preserving one coherent timeline and owner.",
  "Using the alert timestamp as though it were also the event, receipt, collection, and action time.",
  "Writing hypotheses, assumptions, or potential impact as confirmed facts.",
  "Failing to record source delays, missing data, conflicting evidence, or scope exclusions.",
  "Pasting unnecessary sensitive information into a case rather than minimizing and referencing approved evidence.",
  "Recording an action without its owner, authority, reason, result, rollback, and validation.",
  "Allowing informal messages to replace the approved communication record.",
  "Closing a case when the alert disappears, the shift ends, or the ticket is marked complete.",
  "Failing to link related cases, incidents, suppliers, risks, controls, changes, or lessons learned.",
  "Editing original evidence or mixing it with analyst interpretation.",
  "Retaining fictional case data forever without a defined purpose or review.",
  "Using or exposing any real credentials, employee information, school records, private company alerts, logs, supplier records, incident evidence, case data, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of a fictional SOC case?",
    "choices": [
      "Organize related alerts, evidence, actions, decisions, owners, communications, validation, and outcomes into a reconstructable record.",
      "Store every raw log in one place.",
      "Replace incident response.",
      "Hide uncertainty from reviewers."
    ],
    "answer": 0,
    "explanation": "A case connects the full evidence-to-decision path."
  },
  {
    "question": "What makes a fictional evidence item traceable?",
    "choices": [
      "A stable identifier, source, owner, timestamp, relevance, scope, handling record, and case link.",
      "A copied screenshot with no reference.",
      "An analyst memory.",
      "A severity label."
    ],
    "answer": 0,
    "explanation": "Traceability allows another reviewer to locate and understand the original approved record."
  },
  {
    "question": "Why should a fictional timeline distinguish event time from receipt time?",
    "choices": [
      "Delayed ingestion or processing can otherwise create a false sequence of events.",
      "The times are always identical.",
      "Receipt time proves intent.",
      "Only leadership reports need timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in the evidence lifecycle."
  },
  {
    "question": "What should happen to a fictional hypothesis?",
    "choices": [
      "Use it to guide evidence collection while clearly labeling it as unproven.",
      "Write it as a confirmed finding.",
      "Hide it from the case.",
      "Treat it as incident severity."
    ],
    "answer": 0,
    "explanation": "Hypotheses support investigation but must remain distinct from supported conclusions."
  },
  {
    "question": "When is a fictional case ready for closure?",
    "choices": [
      "After evidence, actions, authority, security validation, business validation, source health, residual risk, communications, signoff, and follow-up are complete.",
      "When the alert stops.",
      "When the shift ends.",
      "When one action ticket closes."
    ],
    "answer": 0,
    "explanation": "Closure requires validated outcomes and reconstructable evidence."
  },
  {
    "question": "What should happen to a fictional duplicate alert?",
    "choices": [
      "Confirm the relationship, link it to the correct case, preserve the reference, and verify that no new scope exists.",
      "Delete it without documentation.",
      "Always create a new critical case.",
      "Ignore all future related activity."
    ],
    "answer": 0,
    "explanation": "Duplicate handling should reduce noise without losing history or new scope."
  },
  {
    "question": "What makes a fictional case-management finding defensible?",
    "choices": [
      "It links exact evidence, scope, timeline, source health, alternatives, confidence, limitations, owner, decision, validation, and next action.",
      "It repeats the alert title.",
      "It hides missing evidence.",
      "It assumes potential impact is confirmed."
    ],
    "answer": 0,
    "explanation": "A defensible finding makes the complete reasoning chain visible."
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

export default function CaseManagementEvidenceHandlingPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.3 Case Management and Evidence Handling
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders open, scope, own, document, link, investigate,
            communicate, validate, review, and close fictional SOC cases while
            preserving traceable evidence and clear limitations.
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
          lessonTitle="Case Management and Evidence Handling"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge alerts, cases, evidence sources, services, identities, suppliers, owners, actions, and decisions.",
            "I will not request, expose, or evaluate real credentials, employee information, school records, private company alerts, logs, supplier records, incident evidence, case data, or confidential SOC information.",
            "I will distinguish alerts, cases, incidents, evidence, notes, hypotheses, findings, actions, decisions, communications, and closure records.",
            "I will preserve direct observations, supported conclusions, alternatives, missing evidence, confidence, limitations, potential impact, and confirmed impact.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Case Should Explain the Decision without Requiring the Original Analyst"
        >
          <p className="leading-8">
            A fictional Northbridge case moves across shifts, service owners,
            telemetry teams, detection engineers, suppliers, responders, and
            leadership. If the record contains only a few informal notes, each
            new reviewer must guess what happened. A professional case allows
            another authorized reviewer to reconstruct the question, scope,
            evidence, timeline, actions, decisions, communications,
            limitations, validation, and closure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak case record
              </p>
              <p className="mt-2 leading-7">
                Paste untraceable evidence, mix facts and guesses, omit
                timestamps, record actions without authority, communicate
                inconsistently, and close when the alert stops.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional case record
              </p>
              <p className="mt-2 leading-7">
                Define scope, index evidence, build a timeline, preserve
                uncertainty, assign ownership, document decisions, validate
                outcomes, and complete quality review.
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
          title="Case Quality Protects Evidence, Decisions, Handoffs, and Trust"
        >
          <p className="leading-8">
            Fictional SOC decisions may affect access, critical services,
            suppliers, recovery, privacy, leadership communication, and
            residual risk. Weak case records create duplicated work,
            unsupported conclusions, delayed response, poor handoffs, and
            unreliable metrics. Strong case management turns separate actions
            into one reviewable evidence-to-decision chain.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Scope–Evidence–Timeline–Decision–Closure Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Scope", "Which fictional question, assets, identities, services, data, suppliers, time window, environment, and exclusions define the case?"],
              ["Evidence", "Which fictional sources, records, owners, timestamps, health checks, handling details, confidence, and limitations support review?"],
              ["Timeline", "Which fictional events, alerts, actions, approvals, communications, source gaps, decisions, and validations occurred and when?"],
              ["Decision", "Which fictional finding, owner, authority, action, deadline, rollback, communication, and residual-risk decision follow from the evidence?"],
              ["Closure", "Which fictional security, business, source-health, control, supplier, communication, signoff, retention, and improvement conditions are complete?"],
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
            Case Management and Evidence Terms
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
            Case Design
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields That Make a Fictional Case Reconstructable
          </h2>

          <div className="mt-6 grid gap-5">
            {caseFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong case
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak case
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Quality
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Evidence Review Dimensions
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceQuality.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Good practice
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.good}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Quality risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.check}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Case Status Model
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Case States
          </h2>

          <div className="mt-6 grid gap-5">
            {caseStatuses.map((item) => (
              <article
                key={item.status}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.status}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Meaning", item.meaning],
                    ["Entry condition", item.entry],
                    ["Exit condition", item.exit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.status}-${label}`}
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
            Case Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional SOC Cases
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
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.status}
                  </span>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Scope", item.scope],
                    ["Evidence", item.evidence],
                    ["Decision", item.decision],
                    ["Next action", item.next],
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
            Case Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Case Opening to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {caseWorkflow.map((item) => (
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
          title="Fake Northbridge Case Management Dashboard"
          subtitle="Training dashboard for fictional SOC case evidence only."
          metrics={[
            {
              label: "Open cases",
              value: "6",
              note: "Investigating, Awaiting Owner, Responding, Monitoring, and Ready for Review states are represented.",
            },
            {
              label: "Evidence-quality issues",
              value: "2",
              note: "One delayed supporting source and one incomplete post-expiration activity review limit confidence.",
            },
            {
              label: "Cases ready to close",
              value: "3",
              note: "Duplicate, exercise, and user-lockout cases are ready or already closed with proportional validation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Case Ready for Closure but Supporting Evidence Is Still Delayed"
          severity="Medium"
          time="8:18 PM"
          source="Fake Northbridge Case Quality Console"
          details="A fictional maintenance-access case has healthy primary evidence and approved context, but one supporting storage source remains delayed while the case owner marked the record Ready for Review."
          recommendation="Return the case to Investigating unless the owner documents why the missing source is non-material. Preserve the limitation, confirm scope, validate service behavior, review detection tuning, and require peer approval before closure."
        />

        <FakeLogPanel
          title="Fake Northbridge Case Timeline"
          logs={[
            "18:20 EVENT maintenance-access='observed'",
            "18:21 ALERT received='primary detection'",
            "18:22 SOURCE primary='healthy'",
            "18:24 SOURCE storage-support='delayed'",
            "18:28 CASE opened='NBR-CASE-221'",
            "18:32 OWNER assigned='Tier2-A'",
            "18:40 CONTEXT change-window='approved'",
            "18:44 IDENTITY maintenance='authorized'",
            "18:52 HYPOTHESIS expected-maintenance='supported but unproven'",
            "19:05 REQUEST service-owner='validation'",
            "19:18 FINDING incident='not supported'",
            "19:32 ACTION tuning-review='opened'",
            "19:48 COMMUNICATION impact='unconfirmed'",
            "20:05 SOURCE storage-support='still delayed'",
            "20:12 STATUS ready-for-review='premature'",
            "20:18 QUALITY return-to='Investigating'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Case-Management Findings and Limits
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
          title="Is the Maintenance Case Ready to Close?"
          evidence={[
            "The fictional primary alert source is healthy.",
            "The maintenance change and identity are approved.",
            "The service owner supports the expected activity explanation.",
            "One supporting storage source remains delayed.",
            "The detection-tuning review is open.",
            "No unauthorized access or impact is confirmed.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The case is not ready to close until the missing source is recovered or documented as non-material and the required validation and tuning follow-up are complete.",
            "The case should close because maintenance was approved.",
            "A confirmed incident occurred because evidence is missing.",
            "The delayed source should be deleted from the record.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves valid expected context while enforcing evidence and closure requirements."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Case Management and Evidence Handling"
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
          title="Build the Northbridge Case Management and Evidence Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Case Scope, Evidence, Timeline, Actions, Decisions, and Closure
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to produce a
                complete, reviewable SOC case package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Case charter with question, scope, exclusions, priority, owners, authority, privacy, and decision deadline.</li>
                <li>Evidence register with identifiers, sources, owners, timestamps, relevance, health, scope, handling, confidence, and limits.</li>
                <li>Normalized case timeline distinguishing event, receipt, collection, action, communication, approval, and validation time.</li>
                <li>Facts, findings, hypotheses, alternatives, missing evidence, potential impact, confirmed impact, and unsupported claims matrix.</li>
                <li>Action, decision, communication, supplier-contact, rollback, and validation logs.</li>
                <li>Case linkage and duplicate-handling record.</li>
                <li>Status, handoff, closure, retention, quality-review, metrics, and improvement plan.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company alerts, logs, supplier records, incidents, case
            data, or confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Reviewer Wants to Close the Case before the Delayed Source Recovers"
          scenario="The fictional maintenance explanation is well supported, but one source remains delayed and the case’s tuning action is still open."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the case open or return it to Investigating unless the missing source is documented as non-material, then complete validation, tuning ownership, peer review, and closure signoff.",
              outcome:
                "Best case-management choice. Evidence quality and closure criteria remain visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case because the likely explanation is expected maintenance.",
              outcome:
                "Weak. Required evidence and follow-up remain incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare an incident because one source is missing.",
              outcome:
                "Unsupported. Missing evidence changes confidence but does not prove compromise.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Duplicate High-Severity Alert Appears after the Original Case Closed"
          scenario="The fictional alert matches the same historical event and adds no new identity, asset, time period, activity, or impact."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify no new scope, link the alert to the original case, preserve the reference and rationale, and close proportionately under the duplicate runbook.",
              outcome:
                "Best case-linkage choice. History is preserved without unnecessary duplicate work.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open a new critical case because the severity label is High.",
              outcome:
                "Weak. Current evidence does not support a new high-priority case.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the alert without recording the relationship.",
              outcome:
                "Weak. The decision would not be reconstructable.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Case Management and Evidence Handling Checklist"
          items={[
            "I can distinguish fictional alerts, cases, incidents, evidence, analyst notes, findings, hypotheses, actions, decisions, communications, and closure records.",
            "I can define fictional case identity, scope, exclusions, owners, authority, priority, privacy, and decision deadline.",
            "I can create a fictional evidence register with identifiers, sources, owners, timestamps, relevance, health, scope, handling, confidence, and limitations.",
            "I can normalize fictional event, receipt, collection, action, communication, approval, and validation times.",
            "I can separate fictional direct observations, supported conclusions, hypotheses, alternatives, missing evidence, potential impact, confirmed impact, and unsupported claims.",
            "I can document fictional actions and decisions with owner, authority, reason, result, rollback, validation, deadline, and review.",
            "I can link fictional duplicate alerts and related cases without losing history or new scope.",
            "I can write fictional communication records that preserve evidence limits and decision needs.",
            "I can validate fictional security outcome, business function, source health, residual risk, signoff, retention, follow-up, and improvement before closure.",
            "I will use only fictional evidence and never expose real credentials, company data, employee information, school records, suppliers, incidents, case data, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.3 Mini Quiz: Case Management and Evidence Handling"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Case Management and Evidence Handling Package for Northbridge. Include the case charter, case register, evidence register, normalized timeline, facts and hypothesis matrix, action log, decision log, communication record, case-linkage model, status workflow, handoff, validation, closure criteria, retention, quality review, metrics, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional alerts, cases, systems, identities, suppliers, services, evidence, timestamps, actions, decisions, communications, and outcomes.",
            "Do not treat analyst notes, alert severity, source delays, duplicate titles, completed tickets, or likely explanations as automatic proof.",
            "Make every finding traceable to evidence, scope, timeline, confidence, limitations, owner, authority, and next action.",
            "Show why a case can have a likely benign explanation and still remain open because required evidence or follow-up is incomplete.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A SOC case connects related alerts, evidence, actions, decisions, owners, communications, validation, and outcomes.",
            "Evidence should be relevant, healthy enough, timestamped, traceable, scoped, protected, and limited.",
            "Hypotheses guide investigation but should never be written as confirmed findings.",
            "Case timelines should distinguish event, receipt, collection, action, communication, approval, and validation times.",
            "Duplicate alerts should be linked without losing history or new scope.",
            "Closure requires validated security and business outcomes, source-health review, residual risk, signoff, and improvement.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational records.",
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