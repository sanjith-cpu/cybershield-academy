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
const previousLesson = `${modulePath}/soc-roles-responsibilities-and-workflow`;
const nextLesson = `${modulePath}/case-management-and-evidence-handling`;

const objectives = [
  "Explain how fictional alert triage connects source health, event details, asset and identity context, expected behavior, duplicate history, business impact, confidence, ownership, and next action.",
  "Distinguish fictional alert severity, triage priority, incident severity, business criticality, evidence confidence, and response urgency.",
  "Build a fictional triage decision that separates direct observations, supported conclusions, alternate explanations, missing evidence, limitations, and escalation criteria.",
  "Prioritize fictional alerts using risk, time sensitivity, active exposure, control condition, service importance, source reliability, scope, and response readiness.",
  "Create a portfolio-safe fictional alert-triage package with a queue review, prioritization matrix, triage worksheet, findings, escalation decisions, and leadership summary."
];
const vocabulary = [
  [
    "Alert",
    "A fictional notification generated when approved detection logic identifies a condition that may require review."
  ],
  [
    "Triage",
    "A fictional structured process for validating a signal, gathering context, assigning priority, documenting evidence, and deciding the next action."
  ],
  [
    "Alert severity",
    "A fictional label assigned by detection logic or a tool to represent potential concern before analyst validation."
  ],
  [
    "Triage priority",
    "A fictional analyst decision about how quickly and deeply an alert should be handled after context and evidence are reviewed."
  ],
  [
    "Incident severity",
    "A fictional classification applied after incident criteria, scope, impact, confidence, and business consequences are evaluated."
  ],
  [
    "Business criticality",
    "A fictional measure of how important an asset, service, identity, data set, process, supplier, or deadline is to the organization."
  ],
  [
    "Source health",
    "A fictional assessment of whether evidence sources are current, complete enough, timely, correctly parsed, available, and within expected scope."
  ],
  [
    "Duplicate alert",
    "A fictional alert that represents the same or substantially similar activity as another open or recently reviewed alert."
  ],
  [
    "Expected behavior",
    "Fictional activity supported by approved change, maintenance, job function, application design, policy, schedule, or owner confirmation."
  ],
  [
    "False positive",
    "A fictional alert that correctly matched its logic but did not represent the harmful condition the detection was intended to identify."
  ],
  [
    "False negative",
    "A fictional harmful condition that was not detected or alerted as intended."
  ],
  [
    "Confidence",
    "A fictional judgment about how strongly the current evidence supports the triage conclusion and assigned priority."
  ],
  [
    "Escalation criterion",
    "A fictional documented condition that requires deeper investigation, specialist review, owner involvement, response coordination, or leadership attention."
  ],
  [
    "Active exposure",
    "A fictional current condition in which access, service, data, identity, supplier, or control risk remains available or ongoing."
  ],
  [
    "Queue aging",
    "A fictional measure of how long an alert or case has remained open without required review or action."
  ],
  [
    "Decision latency",
    "A fictional elapsed time between receiving a supported signal and making the necessary triage, escalation, response, or ownership decision."
  ]
];
const triageDimensions = [
  {
    "dimension": "Source health",
    "strong": "The fictional analyst checks delivery, parsing, timestamps, coverage, ownership, delay, duplication, and known blind spots before interpreting the alert.",
    "weak": "The alert is trusted or dismissed without checking whether the source is healthy.",
    "question": "Can the source support the conclusion being considered?"
  },
  {
    "dimension": "Asset and service context",
    "strong": "The fictional analyst confirms asset ownership, service purpose, criticality, data, dependencies, environment, maintenance, and business timing.",
    "weak": "A critical label is accepted without understanding the affected service.",
    "question": "What does this asset support, and how important is it now?"
  },
  {
    "dimension": "Identity context",
    "strong": "The fictional analyst checks identity type, owner, role, approval, recent changes, expected duties, privilege, location concepts, and lifecycle status.",
    "weak": "Every service identity or privileged identity is treated as suspicious.",
    "question": "Is this identity approved for this action under these conditions?"
  },
  {
    "dimension": "Behavior and timeline",
    "strong": "The fictional analyst compares the alert to approved change windows, normal patterns, prior events, sequence, frequency, duration, and related activity.",
    "weak": "One isolated event is interpreted without timeline context.",
    "question": "How does the current behavior compare with expected and prior behavior?"
  },
  {
    "dimension": "Scope and exposure",
    "strong": "The fictional analyst identifies affected identities, systems, data, actions, suppliers, time periods, and whether risky capability remains active.",
    "weak": "The scope is guessed from the alert title.",
    "question": "How wide is the supported scope, and is the exposure still active?"
  },
  {
    "dimension": "Business impact",
    "strong": "The fictional analyst separates possible impact from confirmed impact and checks service function, users, data, deadlines, recovery, and owner context.",
    "weak": "Potential harm is reported as confirmed harm.",
    "question": "What business effect is supported, possible, or still unknown?"
  },
  {
    "dimension": "Evidence confidence",
    "strong": "The fictional analyst documents supporting sources, conflicting evidence, missing evidence, alternate explanations, and confidence.",
    "weak": "The priority sounds certain even when coverage is partial.",
    "question": "How strongly does the evidence support this priority and next action?"
  },
  {
    "dimension": "Action readiness",
    "strong": "The fictional analyst identifies the correct owner, authority, runbook, escalation path, validation, rollback, communication, and response deadline.",
    "weak": "The alert is marked urgent even though no one knows who can act.",
    "question": "Who can safely perform the next action, and how soon?"
  }
];
const priorityFactors = [
  {
    "factor": "Active high-risk capability",
    "increase": "The fictional alert shows currently available stale privilege, unauthorized-looking access, exposed data path, or control bypass with credible evidence.",
    "decrease": "The risky capability is already removed, expired, blocked, or proven unavailable.",
    "caution": "Current capability is not the same as confirmed misuse."
  },
  {
    "factor": "Critical asset or service",
    "increase": "The fictional alert affects a critical service, recovery dependency, privileged identity, confidential data, or major deadline.",
    "decrease": "The affected asset is isolated, low criticality, and has limited business dependency.",
    "caution": "Criticality does not automatically make every alert an incident."
  },
  {
    "factor": "Evidence reliability",
    "increase": "Multiple healthy fictional sources support the same event, timeline, identity, scope, and control condition.",
    "decrease": "The alert depends on one delayed, stale, misparsed, incomplete, or out-of-scope source.",
    "caution": "Low confidence may require more investigation rather than lower priority."
  },
  {
    "factor": "Supported impact",
    "increase": "The fictional evidence confirms service disruption, unauthorized data access, control failure, account misuse, or broader spread.",
    "decrease": "No service, data, identity, or user impact is supported after review.",
    "caution": "Potential impact should remain labeled as potential."
  },
  {
    "factor": "Time sensitivity",
    "increase": "A fictional active session, continuing access, expiring evidence, upcoming deadline, or widening condition requires prompt action.",
    "decrease": "The event is historical, contained, stable, and evidence is preserved.",
    "caution": "Urgency should be tied to a real decision deadline."
  },
  {
    "factor": "Control failure",
    "increase": "The fictional alert shows a preventive, detective, recovery, identity, supplier, or governance control is not operating as intended.",
    "decrease": "The relevant controls are healthy and the activity matches approved behavior.",
    "caution": "A detection firing does not by itself prove another control failed."
  },
  {
    "factor": "Scope growth",
    "increase": "The fictional alert expands across assets, identities, data, suppliers, regions, or time periods.",
    "decrease": "The scope remains narrow, stable, and well understood.",
    "caution": "Do not infer spread from one shared identifier without evidence."
  },
  {
    "factor": "Response readiness",
    "increase": "The fictional owner, runbook, authority, safe action, rollback, monitoring, and validation are ready.",
    "decrease": "The action could create major service impact and authority or dependencies are unclear.",
    "caution": "Low readiness may require urgent coordination, not inactivity."
  }
];
const queueRecords = [
  {
    "id": "NBR-ALT-01",
    "alert": "Stale supplier account remains active",
    "severity": "High",
    "context": "The fictional support project and exception ended, but one limited account remains active.",
    "sources": "Identity register and exception record are healthy; post-expiration activity review is incomplete.",
    "priority": "High",
    "reason": "Active stale capability, confidential service context, expired approval, and available owner action.",
    "next": "Remove or narrowly renew access and complete activity review.",
    "limit": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-ALT-02",
    "alert": "Maintenance access pattern",
    "severity": "High",
    "context": "A fictional authorized maintenance identity accessed a confidential support service during an approved change window.",
    "sources": "Primary alert source is healthy; one supporting storage source is delayed.",
    "priority": "Medium-High",
    "reason": "High-severity signal on important service requires validation, but approved context and prior similar events reduce immediate incident confidence.",
    "next": "Validate change details, identity actions, source health, service impact, and tuning need.",
    "limit": "No unauthorized access or impact is confirmed."
  },
  {
    "id": "NBR-ALT-03",
    "alert": "Privileged sign-in from unusual network",
    "severity": "Medium",
    "context": "A fictional administrator signed in through an approved emergency network during a documented exercise.",
    "sources": "Identity, change, and exercise records are healthy; session activity is available.",
    "priority": "Medium",
    "reason": "Privileged access deserves review, but current context supports expected exercise activity.",
    "next": "Validate task scope, session actions, approvals, and exercise closure.",
    "limit": "Unusual network location alone does not prove misuse."
  },
  {
    "id": "NBR-ALT-04",
    "alert": "Critical reporting service source stopped",
    "severity": "Medium",
    "context": "A fictional critical-service audit source has not delivered events for forty minutes.",
    "sources": "Source-health monitor is healthy and confirms the delivery gap.",
    "priority": "High",
    "reason": "Current monitoring blind spot on a critical service reduces investigation capability and may hide control activity.",
    "next": "Escalate to telemetry owner, preserve gap timing, use compensating sources, and validate restoration.",
    "limit": "The gap does not prove malicious activity occurred."
  },
  {
    "id": "NBR-ALT-05",
    "alert": "Repeated low-risk user lockout",
    "severity": "Low",
    "context": "A fictional user generated several lockouts after a documented password reset problem.",
    "sources": "Identity and help-desk records are healthy and consistent.",
    "priority": "Low",
    "reason": "The pattern is explained, narrow, and not linked to privileged or sensitive access.",
    "next": "Resolve the user issue, document the explanation, and review only if the pattern changes.",
    "limit": "The evidence does not support an account-compromise conclusion."
  },
  {
    "id": "NBR-ALT-06",
    "alert": "Unapproved storage policy change",
    "severity": "Medium",
    "context": "A fictional confidential storage policy changed outside the approved change window.",
    "sources": "Configuration, identity, and change records are healthy and consistent.",
    "priority": "High",
    "reason": "Unsupported control change affects confidential data and may create active exposure.",
    "next": "Confirm owner intent, assess effective permissions, preserve evidence, and coordinate authorized rollback if needed.",
    "limit": "No unauthorized data access is yet confirmed."
  },
  {
    "id": "NBR-ALT-07",
    "alert": "Old endpoint detection finding",
    "severity": "High",
    "context": "A fictional endpoint alert from three weeks ago was already contained and linked to a closed case.",
    "sources": "Case, containment, and validation records are healthy.",
    "priority": "Low",
    "reason": "The event is historical, contained, linked, and validated with no new evidence.",
    "next": "Link as duplicate and verify that no new activity exists.",
    "limit": "The old severity does not justify current high priority."
  },
  {
    "id": "NBR-ALT-08",
    "alert": "Supplier service degradation",
    "severity": "Medium",
    "context": "A fictional communications provider reports delayed message delivery during a major user notification window.",
    "sources": "Supplier status and internal delivery metrics are healthy and consistent.",
    "priority": "Medium-High",
    "reason": "Time-sensitive business communication and supplier dependency require coordination, though no security incident is shown.",
    "next": "Activate alternate communication, monitor recovery, and document supplier and business-owner decisions.",
    "limit": "Operational degradation is supported; malicious cause is not."
  }
];
const triageWorkflow = [
  {
    "step": "1",
    "title": "Receive and normalize",
    "detail": "Record the fictional alert identifier, source, severity, timestamp, rule, entity, service, initial scope, and queue age.",
    "output": "Normalized alert record."
  },
  {
    "step": "2",
    "title": "Validate the source",
    "detail": "Check fictional delivery, parsing, timestamps, duplicates, completeness, expected volume, ownership, and known outages or delays.",
    "output": "Source-health decision."
  },
  {
    "step": "3",
    "title": "Gather context",
    "detail": "Add fictional asset, service, identity, data, change, maintenance, supplier, history, business, and control context.",
    "output": "Context-enriched alert."
  },
  {
    "step": "4",
    "title": "Separate facts and possibilities",
    "detail": "Document fictional direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, and confidence.",
    "output": "Evidence-limited triage note."
  },
  {
    "step": "5",
    "title": "Assign priority",
    "detail": "Compare fictional active exposure, criticality, source reliability, scope, control condition, time sensitivity, impact, and response readiness.",
    "output": "Priority rationale."
  },
  {
    "step": "6",
    "title": "Choose the next action",
    "detail": "Close as supported benign, link as duplicate, monitor, request context, escalate, open a case, correct a source, or coordinate authorized response.",
    "output": "Triage disposition."
  },
  {
    "step": "7",
    "title": "Set ownership and deadline",
    "detail": "Assign fictional case, service, control, supplier, telemetry, risk, or response ownership with an action time and communication requirement.",
    "output": "Owned action record."
  },
  {
    "step": "8",
    "title": "Validate and review",
    "detail": "Confirm fictional action results, source recovery, business function, evidence quality, priority accuracy, tuning needs, and improvement opportunities.",
    "output": "Reviewed triage outcome."
  }
];
const priorityMatrix = [
  {
    "priority": "Critical",
    "definition": "Fictional immediate severe risk with credible evidence, active exposure, major supported impact, or rapidly widening scope requiring coordinated authority now.",
    "response": "Immediate case ownership, incident-response coordination, service and risk-owner escalation, evidence preservation, communication, and continuous updates.",
    "example": "Confirmed unauthorized privileged activity affecting a critical service with active access and supported service impact.",
    "limit": "Critical priority must not be assigned from tool severity alone."
  },
  {
    "priority": "High",
    "definition": "Fictional serious active risk, critical blind spot, unsupported high-impact control change, stale privileged access, or time-sensitive condition requiring prompt action.",
    "response": "Rapid investigation, owner coordination, case opening, decision deadline, validation, and possible response escalation.",
    "example": "Expired supplier access remains active or a critical-service audit source stops reporting.",
    "limit": "High priority does not automatically mean a confirmed incident."
  },
  {
    "priority": "Medium",
    "definition": "Fictional meaningful signal requiring review, but evidence, scope, impact, or urgency is limited or supported by expected context.",
    "response": "Complete timely triage, gather context, validate sources, assign owner, and escalate if conditions change.",
    "example": "Privileged access during an approved exercise with healthy evidence and no supported impact.",
    "limit": "Medium does not mean unimportant or safe to ignore."
  },
  {
    "priority": "Low",
    "definition": "Fictional narrow, explained, historical, duplicate, contained, or low-impact activity with healthy evidence and no active high-risk condition.",
    "response": "Document, link, resolve, monitor for change, and close using proportional criteria.",
    "example": "A historical contained finding linked to a validated closed case.",
    "limit": "Low-priority patterns still deserve trend and tuning review."
  }
];
const findings = [
  {
    "id": "NBR-TRI-F01",
    "statement": "The fictional stale supplier account deserves higher priority than the high-severity maintenance alert because active unsupported capability is confirmed.",
    "support": "Expired approval, active account, confidential service scope, current capability, incomplete activity review, and available owner action.",
    "alternative": "A current approved support need may justify narrow renewal.",
    "confidence": "High",
    "limitation": "No supplier misuse or disclosure is confirmed."
  },
  {
    "id": "NBR-TRI-F02",
    "statement": "The fictional maintenance alert should remain Medium-High until the delayed source and current activity are validated.",
    "support": "Healthy primary source, approved window, authorized identity, similar prior events, delayed supporting source, and no supported impact.",
    "alternative": "The current event could differ from earlier approved maintenance.",
    "confidence": "High",
    "limitation": "One source remains delayed."
  },
  {
    "id": "NBR-TRI-F03",
    "statement": "The fictional critical-service source outage is a High-priority monitoring risk even without a suspicious security event.",
    "support": "Critical service, confirmed telemetry gap, healthy source monitor, current blind spot, and available telemetry owner.",
    "alternative": "The source may recover quickly without affecting any investigation.",
    "confidence": "High",
    "limitation": "No malicious activity during the gap is supported."
  },
  {
    "id": "NBR-TRI-F04",
    "statement": "The fictional unapproved storage-policy change should be prioritized above repeated low-risk lockouts.",
    "support": "Confidential data, unsupported configuration change, active control condition, healthy change evidence, and possible access expansion.",
    "alternative": "The change may have been legitimate but poorly documented.",
    "confidence": "Medium-High",
    "limitation": "No unauthorized data access is confirmed."
  },
  {
    "id": "NBR-TRI-F05",
    "statement": "The fictional historical endpoint alert should be linked as a duplicate unless new evidence changes the current scope.",
    "support": "Old timestamp, linked closed case, validated containment, no new activity, and healthy case records.",
    "alternative": "A new related event could require reopening or a new case.",
    "confidence": "High",
    "limitation": "Duplicate handling depends on confirming there is no new activity."
  },
  {
    "id": "NBR-TRI-F06",
    "statement": "The fictional supplier service degradation requires business coordination but should not be labeled a security incident from the supplied evidence.",
    "support": "Supplier status, internal delivery delay, major notification window, alternate channel, and no malicious indicators.",
    "alternative": "Later evidence could reveal a security cause.",
    "confidence": "Medium-High",
    "limitation": "The current evidence supports operational impact only."
  }
];
const commonMistakes = [
  "Treating fictional alert severity as the final triage priority.",
  "Treating a critical asset as proof that every alert affecting it is critical.",
  "Lowering priority only because confidence is low even when the possible exposure is active and high impact.",
  "Raising priority without identifying a real time-sensitive decision or active condition.",
  "Ignoring source health, duplicate history, maintenance, change, identity, asset, supplier, or business context.",
  "Reporting potential impact as confirmed impact.",
  "Treating repeated alerts as automatically benign or automatically malicious.",
  "Opening separate cases for every duplicate without preserving one coherent owner and timeline.",
  "Closing a fictional alert because the user, supplier, or service owner says it is expected without validating evidence.",
  "Ignoring queue age and decision latency for alerts that require owner action.",
  "Prioritizing dramatic alert titles above stale access, control failure, source blindness, or unvalidated recovery risk.",
  "Using priority labels without written rationale, confidence, owner, next action, and deadline.",
  "Allowing real credentials, employee data, school records, private company alerts, incident evidence, supplier details, or confidential SOC information into a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the difference between fictional alert severity and triage priority?",
    "choices": [
      "Severity is usually assigned by detection logic, while priority is an analyst decision based on evidence, context, risk, and urgency.",
      "They are always identical.",
      "Priority is assigned before an alert exists.",
      "Severity is a business-risk acceptance decision."
    ],
    "answer": 0,
    "explanation": "Triage priority should incorporate evidence and context rather than copy the tool label."
  },
  {
    "question": "Which fictional alert should normally receive the highest priority?",
    "choices": [
      "An active stale supplier account with expired approval and confidential service access.",
      "A historical contained alert linked to a closed case.",
      "A low-risk explained user lockout.",
      "A duplicate with no new activity."
    ],
    "answer": 0,
    "explanation": "Active unsupported access creates current capability and requires prompt owner action."
  },
  {
    "question": "What should an analyst do when a fictional supporting source is delayed?",
    "choices": [
      "Document the limitation, check source health, use compensating evidence, and avoid overconfident conclusions.",
      "Assume the alert is false.",
      "Assume a major incident occurred.",
      "Delete the source from the case."
    ],
    "answer": 0,
    "explanation": "Missing evidence changes confidence and investigation needs but does not dictate the conclusion."
  },
  {
    "question": "What does a fictional repeated maintenance pattern prove?",
    "choices": [
      "It provides context for validation and tuning review but does not prove the current event is benign.",
      "Every future alert should be suppressed.",
      "The current activity is malicious.",
      "No case documentation is needed."
    ],
    "answer": 0,
    "explanation": "Historical similarity informs but does not replace current validation."
  },
  {
    "question": "Why can a fictional log-source outage be High priority?",
    "choices": [
      "It creates a current monitoring blind spot on a critical service even without a confirmed malicious event.",
      "Every source outage proves compromise.",
      "The alerting tool assigns High severity.",
      "Source outages always cause business downtime."
    ],
    "answer": 0,
    "explanation": "Loss of visibility can create serious operational risk and requires rapid correction."
  },
  {
    "question": "What makes a fictional triage decision defensible?",
    "choices": [
      "It documents facts, source health, context, scope, confidence, alternatives, impact limits, priority rationale, owner, next action, and deadline.",
      "It copies the alert title.",
      "It uses only a severity label.",
      "It hides missing evidence."
    ],
    "answer": 0,
    "explanation": "Defensible triage makes the evidence-to-action chain visible."
  },
  {
    "question": "When should a fictional alert be linked as a duplicate?",
    "choices": [
      "When it represents the same supported activity as an existing or closed case and no meaningful new evidence or scope is present.",
      "Whenever two alerts have similar titles.",
      "Whenever the queue is busy.",
      "Only after leadership approval."
    ],
    "answer": 0,
    "explanation": "Duplicate handling requires evidence that the event is materially the same and adds no new scope."
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

export default function AlertTriagePrioritizationPage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.2 Alert Triage and Prioritization
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders validate fictional signals, enrich alerts with
            context, separate severity from priority, preserve evidence limits,
            rank active risk, assign owners, choose next actions, and document
            decision-ready triage.
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
          lessonTitle="Alert Triage and Prioritization"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge alerts, logs, identities, assets, suppliers, services, sources, cases, and decisions.",
            "I will not request, expose, or evaluate real credentials, employee data, school records, private company alerts, incident evidence, supplier records, or confidential SOC information.",
            "I will distinguish alert severity, triage priority, incident severity, business criticality, evidence confidence, and response urgency.",
            "I will not treat missing evidence, unusual behavior, repeated patterns, source outages, or active access as proof of compromise or impact.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Loudest Alert May Not Be the Most Urgent Risk"
        >
          <p className="leading-8">
            A fictional Northbridge queue contains a high-severity maintenance
            alert, a medium-severity storage-policy change, a medium-severity
            critical log-source outage, and a high-severity historical endpoint
            alert already linked to a closed case. The right priority is not the
            loudest label. It is the alert whose supported evidence, active
            exposure, business criticality, time sensitivity, and available
            response most strongly require action.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak triage
              </p>

              <p className="mt-2 leading-7">
                Copy the severity label, ignore source health, skip business
                context, overstate impact, and leave the queue without clear
                ownership or deadlines.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional triage
              </p>

              <p className="mt-2 leading-7">
                Validate the source, enrich context, separate facts from
                possibilities, assign a reasoned priority, choose the next
                action, and preserve evidence limits.
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
          title="Triage Determines Which Risks Receive Time, Expertise, and Authority"
        >
          <p className="leading-8">
            Fictional SOC teams work with limited analysts, investigation time,
            source coverage, service-owner availability, and response capacity.
            Poor prioritization can delay active risk, overload responders,
            create unnecessary service disruption, or hide important blind
            spots. Defensible triage makes every priority traceable to evidence,
            business context, ownership, urgency, and next action.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Validate–Contextualize–Prioritize–Act Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Validate", "Is the fictional source healthy, timely, correctly parsed, within scope, non-duplicate, and capable of supporting the alert claim?"],
              ["Contextualize", "Which fictional asset, identity, service, data, change, supplier, history, business need, and control condition explain the event?"],
              ["Prioritize", "How do fictional active exposure, criticality, scope, confidence, time sensitivity, impact, and response readiness affect urgency?"],
              ["Act", "Should the fictional alert be closed, linked, monitored, enriched, escalated, converted to a case, corrected at the source, or coordinated for response?"],
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
            Alert Triage, Priority, and Evidence Terms
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
            Triage Dimensions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions behind a Defensible Fictional Priority
          </h2>

          <div className="mt-6 grid gap-5">
            {triageDimensions.map((item) => (
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
                      Strong triage
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak triage
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
            Priority Factors
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Factors That Raise or Lower Fictional Urgency
          </h2>

          <div className="mt-6 grid gap-5">
            {priorityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.factor}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Raises priority
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.increase}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      May lower priority
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.decrease}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Evidence caution
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.caution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Priority Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Four Fictional Triage Priority Levels
          </h2>

          <div className="mt-6 grid gap-5">
            {priorityMatrix.map((item) => (
              <article
                key={item.priority}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.priority}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Definition", item.definition],
                    ["Expected response", item.response],
                    ["Fictional example", item.example],
                    ["Important limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.priority}-${label}`}
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
            Alert Queue
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Triage Records
          </h2>

          <div className="mt-6 grid gap-5">
            {queueRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.alert}</h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    Tool: {item.severity}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Priority: {item.priority}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Context", item.context],
                    ["Source health", item.sources],
                    ["Priority rationale", item.reason],
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
            Triage Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Alert Receipt to Reviewed Outcome
          </h2>

          <div className="mt-6 grid gap-4">
            {triageWorkflow.map((item) => (
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
          title="Fake Northbridge Alert Queue Dashboard"
          subtitle="Training dashboard for fictional alert-triage evidence only."
          metrics={[
            {
              label: "Alerts awaiting triage",
              value: "8",
              note: "Two High, three Medium-High, two Medium, and one Low priority records are represented.",
            },
            {
              label: "Source-health issues",
              value: "2",
              note: "One delayed supporting storage source and one confirmed critical-service telemetry gap require attention.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional queue supports active risks and operational issues but no confirmed incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Reporting Service Audit Source Has Stopped"
          severity="High"
          time="7:14 PM"
          source="Fake Northbridge Source Health Console"
          details="A fictional required audit source for the Reporting Service has not delivered events for forty minutes. The source-health monitor is operating normally and confirms the gap."
          recommendation="Assign High triage priority, open or link a case, escalate to the telemetry and service owners, preserve the blind-spot window, use compensating sources, monitor for related activity, validate restoration, and avoid claiming malicious activity without evidence."
        />

        <FakeLogPanel
          title="Fake Northbridge Triage Timeline"
          logs={[
            "19:00 QUEUE alerts='8' oldest='42m'",
            "19:04 ALERT supplier-account severity='High' priority='High'",
            "19:08 ALERT maintenance-access severity='High' priority='Medium-High'",
            "19:12 ALERT emergency-network severity='Medium' priority='Medium'",
            "19:16 SOURCE reporting-audit delivery='stopped 40m'",
            "19:18 ALERT source-gap severity='Medium' priority='High'",
            "19:22 ALERT user-lockout severity='Low' priority='Low'",
            "19:26 ALERT storage-policy severity='Medium' priority='High'",
            "19:30 ALERT old-endpoint severity='High' priority='Low duplicate'",
            "19:34 ALERT supplier-delay severity='Medium' priority='Medium-High'",
            "19:38 FINDING severity='not equal priority'",
            "19:42 FINDING potential-impact='not confirmed-impact'",
            "19:46 ESCALATE telemetry-owner='source gap'",
            "19:50 ESCALATE service-owner='storage policy'",
            "19:54 LINK duplicate='old endpoint case'",
            "20:00 REVIEW queue='owned with deadlines'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Triage Findings and Limits
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
          title="Which Alert Should Be Triaged First?"
          evidence={[
            "The fictional maintenance alert is High severity but occurs during an approved change with an authorized identity.",
            "The fictional supplier account remains active after its exception and project ended.",
            "The supplier account can reach a confidential support service.",
            "The supplier activity review is incomplete.",
            "The maintenance alert has one delayed supporting source.",
            "No supplied evidence confirms misuse or impact in either record.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The stale supplier account should be triaged first because unsupported active capability is confirmed, while the maintenance alert remains important but has stronger expected context.",
            "The maintenance alert must be first because its tool severity is High.",
            "Neither record requires action because no incident is confirmed.",
            "The supplier account proves a breach occurred.",
          ]}
          bestAnswer={0}
          explanation="Priority follows active exposure, business context, evidence, and action urgency rather than the loudest severity label."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Alert Triage and Prioritization"
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
          title="Build the Northbridge Alert Triage and Prioritization Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Queue Review, Evidence, Priority, Ownership, and Next Action
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                a professional queue review and triage package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Triage charter with scope, queue, owners, sources, privacy, authority, and service goals.</li>
                <li>Alert register with severity, source health, asset, identity, service, supplier, context, history, and queue age.</li>
                <li>Facts, conclusions, alternatives, missing evidence, potential impact, confirmed impact, confidence, and limitations matrix.</li>
                <li>Critical, High, Medium, and Low priority model with triggers, owners, deadlines, and escalation.</li>
                <li>Duplicate-linking, expected-behavior, source-outage, and active-exposure decision rules.</li>
                <li>Triage dispositions with close, link, monitor, enrich, escalate, case-open, source-correct, and response options.</li>
                <li>Queue quality review covering aging, decision latency, ownership, documentation, tuning, and follow-up.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real alerts, credentials, company logs, employee
            data, school records, supplier details, incidents, or confidential
            SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Medium-Severity Source Outage Competes with a High-Severity Maintenance Alert"
          scenario="The fictional source outage creates a current blind spot on a critical service. The maintenance alert has approved context and one delayed supporting source."
          choices={[
            {
              label: "Choice A",
              response:
                "Prioritize the critical source outage as High, continue Medium-High validation of the maintenance alert, assign owners to both, document limits, and monitor for conditions that change priority.",
              outcome:
                "Best triage choice. Priority reflects active risk and evidence rather than tool severity alone.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Handle only the maintenance alert because it is labeled High severity.",
              outcome:
                "Weak. A critical monitoring blind spot may require faster action.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close both because no incident is confirmed.",
              outcome:
                "Unsafe. Both records require owned defensive action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Historical High-Severity Alert Reappears in the Queue"
          scenario="The fictional alert is three weeks old, linked to a closed case, contained, validated, and has no new activity."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm no new scope, link it as a duplicate, document the relationship, preserve the original case reference, and close proportionately.",
              outcome:
                "Best triage choice. Queue noise is reduced without losing history.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open a new critical case because the historical severity is High.",
              outcome:
                "Weak. Current evidence does not support that priority.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the alert without a case reference.",
              outcome:
                "Weak. The decision would not be reconstructable.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Alert Triage and Prioritization Checklist"
          items={[
            "I can distinguish fictional alert severity, triage priority, incident severity, business criticality, confidence, and urgency.",
            "I can validate fictional source delivery, parsing, timing, completeness, ownership, duplicates, and blind spots.",
            "I can enrich fictional alerts with asset, service, identity, data, change, maintenance, supplier, history, and business context.",
            "I can separate fictional direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, and limitations.",
            "I can prioritize fictional active exposure, critical services, source outages, control changes, supplier risk, and time-sensitive decisions.",
            "I can link fictional duplicate alerts without losing history or ownership.",
            "I can choose fictional close, link, monitor, enrich, escalate, case-open, source-correct, or response dispositions.",
            "I can assign fictional owners, deadlines, escalation criteria, communication, validation, and review.",
            "I can review fictional queue aging, decision latency, documentation quality, tuning needs, and recurring patterns.",
            "I will use only fictional evidence and never expose real alerts, credentials, logs, employee data, school records, suppliers, incidents, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.2 Mini Quiz: Alert Triage and Prioritization"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Alert Triage and Prioritization Package for Northbridge. Include the triage charter, alert register, source-health review, context-enrichment fields, evidence matrix, priority model, queue ordering, duplicate rules, triage dispositions, owner and deadline map, escalation criteria, queue-quality review, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional alerts, sources, systems, identities, suppliers, services, logs, cases, dates, priorities, actions, and outcomes.",
            "Do not treat alert severity, unusual activity, repeated behavior, missing evidence, active capability, or source outages as automatic proof of compromise or impact.",
            "Make every priority traceable to current evidence, business context, confidence, owner, deadline, and next action.",
            "Show why an active stale access or critical source gap may outrank a louder but better-explained alert.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Alert severity and triage priority are different.",
            "Source health and context should be validated before conclusions are made.",
            "Active exposure, criticality, supported impact, scope, time sensitivity, and response readiness shape priority.",
            "Low confidence may require faster evidence collection rather than lower urgency.",
            "Duplicate handling should preserve one coherent case history and ownership path.",
            "A defensible triage decision includes evidence, limits, rationale, owner, next action, and deadline.",
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