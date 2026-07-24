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
const previousPage = modulePath;
const nextLesson = `${modulePath}/alert-triage-and-prioritization`;

const objectives = [
  "Explain how a fictional security operations center coordinates analysts, detection engineers, incident responders, platform teams, service owners, risk owners, communications, suppliers, and leadership.",
  "Distinguish fictional task ownership, control ownership, service ownership, risk ownership, escalation authority, communication authority, and final decision authority.",
  "Map a fictional SOC shift from monitoring and triage through case ownership, escalation, response coordination, validation, closure, handoff, and continuous improvement.",
  "Evaluate fictional security-operations decisions using scope, evidence quality, source health, business context, privacy, authority, urgency, and documented limitations.",
  "Create a portfolio-safe fictional SOC operating charter with role definitions, responsibility maps, shift workflow, escalation paths, handoff requirements, and quality controls."
];
const vocabulary = [
  [
    "Security operations center",
    "A fictional team and operating function that monitors approved evidence, triages signals, manages cases, coordinates response, communicates decisions, and improves defensive controls."
  ],
  [
    "Tier 1 analyst",
    "A fictional first-line defender who validates source health, gathers context, performs initial triage, documents facts, and escalates according to defined criteria."
  ],
  [
    "Tier 2 analyst",
    "A fictional investigator who performs deeper correlation, expands evidence review, tests competing explanations, and coordinates with service or control owners."
  ],
  [
    "Tier 3 analyst",
    "A fictional senior specialist who supports complex investigations, advanced detection analysis, high-risk decisions, and difficult technical validation."
  ],
  [
    "Detection engineer",
    "A fictional defender who designs, tests, tunes, documents, monitors, and improves approved defensive detection logic and data requirements."
  ],
  [
    "Incident responder",
    "A fictional professional who coordinates authorized containment, eradication, recovery, evidence preservation, validation, and lessons learned when incident criteria are met."
  ],
  [
    "SOC manager",
    "A fictional leader accountable for staffing, workflow, quality, escalation, metrics, priorities, communication, training, and operational improvement."
  ],
  [
    "Service owner",
    "The fictional person accountable for a business or technical service, including approved function, dependencies, priorities, and service-risk decisions."
  ],
  [
    "Control owner",
    "The fictional person accountable for a specific safeguard's design, implementation, evidence, operation, monitoring, maintenance, and improvement."
  ],
  [
    "Risk owner",
    "The fictional authorized person accountable for evaluating and accepting, reducing, transferring, avoiding, or monitoring business risk."
  ],
  [
    "Case owner",
    "The fictional analyst or responder responsible for maintaining case quality, actions, evidence references, communications, decisions, and next steps."
  ],
  [
    "Escalation",
    "A fictional transfer of attention, authority, expertise, or urgency to the correct role based on predefined criteria."
  ],
  [
    "Shift handoff",
    "A fictional structured transfer of open cases, risks, evidence, decisions, deadlines, source issues, and required actions between operational teams."
  ],
  [
    "Runbook",
    "A fictional documented workflow describing approved actions, evidence requirements, ownership, escalation, communication, validation, and closure."
  ],
  [
    "Decision authority",
    "The fictional approved power to authorize a response action, accept risk, declare an incident, notify leadership, contact a supplier, or close a case."
  ],
  [
    "Operational assurance",
    "Fictional evidence that the SOC workflow is defined, staffed, followed, reviewed, measured, tested, and improved."
  ]
];
const socRoles = [
  {
    "role": "Tier 1 Security Analyst",
    "purpose": "Validate fictional alert source health, gather asset and identity context, identify duplicates, record direct observations, and determine whether escalation criteria are met.",
    "owns": "Initial triage, case opening, evidence references, priority recommendation, first documentation, and timely escalation.",
    "does_not_own": "Business-risk acceptance, unauthorized containment, leadership declarations, or unsupported conclusions.",
    "evidence": "Triage notes, source checks, timestamps, asset context, identity context, duplicate review, escalation record, and handoff."
  },
  {
    "role": "Tier 2 Security Analyst",
    "purpose": "Perform deeper fictional investigation across approved sources, test alternate explanations, coordinate with owners, and refine scope, confidence, and next actions.",
    "owns": "Evidence correlation, investigative plan, technical findings, owner requests, case updates, and escalation recommendations.",
    "does_not_own": "Executive risk acceptance, supplier contract decisions, or changes outside approved authority.",
    "evidence": "Evidence matrix, timeline, queries or review steps, owner responses, findings, confidence, limitations, and action log."
  },
  {
    "role": "Tier 3 / Senior Analyst",
    "purpose": "Support complex fictional cases requiring advanced expertise, difficult interpretation, detection review, technical validation, or high-impact coordination.",
    "owns": "Complex technical assessment, advanced evidence review, specialist guidance, detection feedback, and quality challenge.",
    "does_not_own": "Automatic authority over every service, business process, privacy decision, or public communication.",
    "evidence": "Technical analysis, peer review, test results, alternate hypotheses, source limitations, and escalation guidance."
  },
  {
    "role": "Detection Engineer",
    "purpose": "Design and maintain fictional detection logic that matches defined objectives, approved data, expected behavior, source health, thresholds, and tuning rules.",
    "owns": "Detection design, test plan, tuning, version control, documentation, source requirements, and performance review.",
    "does_not_own": "Final business-risk acceptance or unsupported incident declaration.",
    "evidence": "Detection specification, data mapping, approved tests, results, tuning history, rollback, source monitoring, and owner review."
  },
  {
    "role": "Incident Responder",
    "purpose": "Coordinate fictional containment, eradication, recovery, communication, evidence preservation, validation, and lessons learned after incident criteria are met.",
    "owns": "Authorized response plan, action sequencing, coordination, timeline, validation, recovery handoff, and improvement tracking.",
    "does_not_own": "Unapproved service shutdown, public statements, or business-risk acceptance outside delegated authority.",
    "evidence": "Incident plan, approvals, action log, evidence register, service checks, communications, recovery validation, and closure review."
  },
  {
    "role": "SOC Manager",
    "purpose": "Maintain fictional operational readiness, staffing, quality, escalation, workload, service commitments, communications, metrics, and continuous improvement.",
    "owns": "SOC process, quality reviews, staffing decisions, escalation governance, operational reporting, training, and improvement backlog.",
    "does_not_own": "Every technical control, service, supplier relationship, or enterprise risk decision.",
    "evidence": "Shift plan, review records, metrics, quality sampling, training, escalations, backlog, and leadership updates."
  },
  {
    "role": "Service and Control Owners",
    "purpose": "Provide fictional business and technical context, approve service-related actions, validate normal operation, correct controls, and support closure.",
    "owns": "Service function, control operation, dependency knowledge, business validation, approved changes, and corrective actions.",
    "does_not_own": "Independent SOC case documentation or unsupported removal of evidence limits.",
    "evidence": "Service maps, control records, change approvals, validation results, owner decisions, and remediation evidence."
  },
  {
    "role": "Risk, Legal, Privacy, Communications, and Leadership",
    "purpose": "Provide fictional authority for risk decisions, privacy review, legal concepts, stakeholder communication, funding, escalation, and high-impact coordination.",
    "owns": "Business-risk decisions, protected communication, leadership priorities, regulatory concepts, and enterprise-level decisions.",
    "does_not_own": "Unreviewed technical conclusions or direct alteration of case evidence.",
    "evidence": "Decision records, approvals, communication plans, risk acceptances, meeting outcomes, funding decisions, and review dates."
  }
];
const responsibilityQuestions = [
  {
    "question": "Who performs the task?",
    "strong": "The fictional role with the correct skills, access, approved workflow, and current shift responsibility is named.",
    "weak": "The task is assigned to the SOC without identifying a role.",
    "review": "Is the performer clear and available?"
  },
  {
    "question": "Who owns the control or service?",
    "strong": "The fictional control or service owner provides context, approves relevant changes, validates function, and maintains long-term improvement.",
    "weak": "The analyst is expected to own a service they only monitor.",
    "review": "Who is accountable after the case closes?"
  },
  {
    "question": "Who owns the risk?",
    "strong": "The fictional authorized business owner decides whether residual risk is accepted, treated, escalated, or reviewed.",
    "weak": "The analyst silently accepts risk by closing the case.",
    "review": "Who has authority to make the business decision?"
  },
  {
    "question": "Who can approve the action?",
    "strong": "The fictional runbook identifies which role may authorize containment, access removal, supplier contact, service change, or leadership communication.",
    "weak": "A technically possible action is assumed to be authorized.",
    "review": "Is technical capability being confused with decision authority?"
  },
  {
    "question": "Who must be informed?",
    "strong": "The fictional notification path identifies affected service owners, responders, suppliers, privacy, communications, risk, or leadership based on criteria.",
    "weak": "Everyone is copied or no one is informed.",
    "review": "Which stakeholders need what information and when?"
  },
  {
    "question": "Who validates the outcome?",
    "strong": "The fictional technical owner, business owner, SOC reviewer, or responder confirms both security and service results.",
    "weak": "A completed ticket is treated as proof of success.",
    "review": "Who proves the action achieved its intended outcome?"
  },
  {
    "question": "Who closes the case?",
    "strong": "The fictional case owner closes only after evidence, actions, decisions, validation, residual risk, communications, and follow-up are complete.",
    "weak": "The first analyst closes the case when the alert stops.",
    "review": "Are all closure criteria satisfied?"
  },
  {
    "question": "Who reviews quality?",
    "strong": "The fictional SOC manager, peer reviewer, control owner, or assurance role samples cases and tracks improvement.",
    "weak": "No one reviews documentation, reasoning, or recurring failure.",
    "review": "How will the SOC know the workflow is improving?"
  }
];
const shiftWorkflow = [
  {
    "step": "1",
    "title": "Shift readiness and intake",
    "detail": "Confirm fictional staffing, open cases, high-risk services, planned changes, maintenance, supplier events, source health, outstanding actions, and escalation contacts.",
    "output": "Shift readiness record."
  },
  {
    "step": "2",
    "title": "Signal validation",
    "detail": "Check fictional alert details, source delivery, parsing, timestamps, duplicates, asset context, identity context, expected activity, and known exceptions.",
    "output": "Validated signal record."
  },
  {
    "step": "3",
    "title": "Initial triage",
    "detail": "Document fictional direct facts, possible explanations, priority, confidence, missing evidence, business relevance, owner, and next action.",
    "output": "Triage decision."
  },
  {
    "step": "4",
    "title": "Case creation and ownership",
    "detail": "Open or link a fictional case with timeline, evidence references, case owner, status, action log, communications, decision needs, and deadlines.",
    "output": "SOC case file."
  },
  {
    "step": "5",
    "title": "Investigation and coordination",
    "detail": "Gather fictional approved evidence, compare alternate explanations, contact service or control owners, escalate expertise, and refine scope and confidence.",
    "output": "Investigation and coordination record."
  },
  {
    "step": "6",
    "title": "Authorized response or monitoring",
    "detail": "Coordinate fictional containment, control correction, monitoring, supplier action, recovery, or risk review using the correct authority and rollback.",
    "output": "Approved action plan."
  },
  {
    "step": "7",
    "title": "Validation and closure",
    "detail": "Confirm fictional security outcome, business function, source health, residual risk, owner approval, communications, documentation, and follow-up.",
    "output": "Closure evidence."
  },
  {
    "step": "8",
    "title": "Handoff and improvement",
    "detail": "Transfer fictional open work and convert lessons into detection, runbook, training, staffing, source, control, supplier, or policy improvements.",
    "output": "Handoff and improvement backlog."
  }
];
const operatingRecords = [
  {
    "id": "NBR-SOC-01",
    "record": "Scheduled maintenance alert",
    "facts": "A fictional high-severity alert reports unusual support-service access during an approved maintenance window.",
    "owner": "Tier 1 Analyst",
    "next": "Validate source health, approved change, identity, asset scope, activity details, and duplicate history.",
    "authority": "Tier 1 may triage and escalate but may not declare an incident from severity alone.",
    "limit": "No unauthorized access, exposure, or impact is confirmed."
  },
  {
    "id": "NBR-SOC-02",
    "record": "Delayed storage evidence",
    "facts": "One fictional supporting storage source is delayed while the primary alert source remains healthy.",
    "owner": "Security Operations and Telemetry Owner",
    "next": "Document partial visibility, check source health, use available compensating evidence, and avoid overconfident closure.",
    "authority": "Telemetry owner repairs delivery; case owner preserves the evidence limitation.",
    "limit": "Delay does not prove compromise or source failure across the environment."
  },
  {
    "id": "NBR-SOC-03",
    "record": "Repeated maintenance pattern",
    "facts": "Two prior fictional approved maintenance events produced similar alerts.",
    "owner": "Tier 2 Analyst and Detection Engineer",
    "next": "Compare details, validate the current change, and review whether tuning can reduce noise without hiding real misuse.",
    "authority": "Detection changes require approved testing and review.",
    "limit": "Historical similarity does not automatically prove current benign activity."
  },
  {
    "id": "NBR-SOC-04",
    "record": "Supplier escalation request",
    "facts": "A fictional support supplier owns part of the affected service and may hold useful service evidence.",
    "owner": "Service Owner and Third-Party Risk Owner",
    "next": "Use the approved supplier contact path and request scoped evidence without exposing unnecessary internal information.",
    "authority": "Supplier communication follows contractual and governance rules.",
    "limit": "The supplier is not automatically responsible for the alert."
  },
  {
    "id": "NBR-SOC-05",
    "record": "Possible containment action",
    "facts": "Removing the fictional service role could reduce risk but may interrupt the approved maintenance task.",
    "owner": "Incident Responder and Service Owner",
    "next": "Confirm criteria, dependencies, alternative controls, rollback, business approval, and monitoring before action.",
    "authority": "Containment must follow delegated authority unless emergency criteria apply.",
    "limit": "The supplied evidence does not yet require immediate service interruption."
  },
  {
    "id": "NBR-SOC-06",
    "record": "Leadership update",
    "facts": "Fictional leadership requests a status summary before evidence review is complete.",
    "owner": "SOC Manager and Incident Communications Lead",
    "next": "Report direct facts, current service status, uncertainty, actions, owners, decision needs, and next update time.",
    "authority": "Only approved communicators issue leadership or external updates.",
    "limit": "Possible impact must not be reported as confirmed impact."
  },
  {
    "id": "NBR-SOC-07",
    "record": "Shift handoff",
    "facts": "The fictional case remains open at shift end with one delayed source and one pending service-owner response.",
    "owner": "Outgoing and Incoming Case Owners",
    "next": "Transfer timeline, facts, evidence, hypotheses, actions, decisions, deadlines, contacts, limitations, and priority.",
    "authority": "The incoming owner accepts operational responsibility after the handoff is acknowledged.",
    "limit": "Handoff does not change the evidence or confidence by itself."
  },
  {
    "id": "NBR-SOC-08",
    "record": "Case closure review",
    "facts": "The fictional maintenance was validated, no unauthorized activity was found, the delayed source recovered, and detection tuning was approved.",
    "owner": "Case Owner, Service Owner, and Detection Engineer",
    "next": "Close with evidence, validation, tuning reference, lessons learned, residual risk, and future review trigger.",
    "authority": "Case closure follows defined criteria and owner signoff.",
    "limit": "This result does not prove every future similar alert is benign."
  }
];
const escalationLevels = [
  {
    "level": "Operational clarification",
    "trigger": "Fictional alert or case needs asset, identity, maintenance, service, change, or control context.",
    "route": "Tier 1 or Tier 2 to service, control, identity, telemetry, or platform owner.",
    "result": "Context response, evidence, validation, or corrective action."
  },
  {
    "level": "Technical escalation",
    "trigger": "Fictional evidence conflicts, source behavior is complex, detection logic may be weak, or specialist analysis is needed.",
    "route": "Tier 2 to Tier 3, detection engineering, platform engineering, or incident response.",
    "result": "Deeper analysis, test plan, tuning, control review, or response recommendation."
  },
  {
    "level": "Business and risk escalation",
    "trigger": "Fictional action may affect critical service, data, supplier commitment, recovery objective, or residual business risk.",
    "route": "SOC manager or responder to service owner, risk owner, continuity, privacy, legal concept, or leadership.",
    "result": "Authorized decision, risk treatment, priority, communication, funding, or exception."
  },
  {
    "level": "Incident coordination",
    "trigger": "Fictional incident criteria are met or a high-impact response requires coordinated authority and communication.",
    "route": "Incident responder to approved incident team, service owners, leadership, communications, supplier contacts, and recovery.",
    "result": "Coordinated containment, recovery, evidence preservation, updates, and lessons learned."
  },
  {
    "level": "Emergency authority",
    "trigger": "A fictional immediate and severe condition meets documented emergency criteria and delay would create unacceptable harm.",
    "route": "Authorized emergency role under the approved runbook with immediate notification and later review.",
    "result": "Time-sensitive protective action, rollback readiness, evidence preservation, and formal post-action review."
  },
  {
    "level": "Quality and improvement escalation",
    "trigger": "Fictional recurring false positives, missed evidence, weak handoffs, overdue cases, source failures, or repeated process gaps appear.",
    "route": "Case reviewer or analyst to SOC manager, detection engineer, control owner, training owner, or governance improvement lead.",
    "result": "Owned improvement action, deadline, validation, metric, and closure review."
  }
];
const handoffFields = [
  "Case identifier, title, current owner, priority, status, and last updated time.",
  "Direct fictional observations separated from conclusions, hypotheses, and unsupported possibilities.",
  "Evidence references, source health, missing sources, delayed sources, timestamps, and known limitations.",
  "Asset, service, identity, supplier, data, business, and change context.",
  "Completed actions, current results, pending actions, blocked actions, approvals, and rollback status.",
  "Open decisions, required authority, escalation contacts, communication commitments, and next update time.",
  "Current confidence, alternate explanations, potential impact, confirmed impact, and what remains unproven.",
  "Closure criteria, residual risk, follow-up tasks, improvement opportunities, and acknowledgement by the incoming owner."
];
const findings = [
  {
    "id": "NBR-SOC-F01",
    "statement": "The fictional alert requires investigation but should not be declared an incident solely because it is high severity.",
    "support": "Healthy primary source, approved maintenance window, authorized identity, similar prior events, delayed supporting source, and no confirmed impact.",
    "alternative": "The current activity could still differ from prior maintenance and requires validation.",
    "confidence": "High",
    "limitation": "One supporting source is delayed."
  },
  {
    "id": "NBR-SOC-F02",
    "statement": "The fictional case should remain open until the delayed source recovers or the owner documents why compensating evidence is sufficient.",
    "support": "Partial visibility, source-health record, case requirements, available primary evidence, and closure criteria.",
    "alternative": "Available evidence may support closure if the missing source cannot materially change the decision.",
    "confidence": "Medium-High",
    "limitation": "The exact value of the delayed source is not yet known."
  },
  {
    "id": "NBR-SOC-F03",
    "statement": "The fictional repeated maintenance pattern supports detection tuning review, not automatic suppression.",
    "support": "Two prior similar events, current approved change, identity context, repeated alert logic, and detection owner availability.",
    "alternative": "A similar pattern could also represent misuse during a maintenance window.",
    "confidence": "High",
    "limitation": "Historical similarity does not prove current intent."
  },
  {
    "id": "NBR-SOC-F04",
    "statement": "The fictional service owner and risk owner should participate before containment that could interrupt the maintenance task.",
    "support": "Possible service impact, active approved work, role dependency, available alternate controls, and delegated authority model.",
    "alternative": "Emergency criteria could justify immediate action before full coordination.",
    "confidence": "Medium-High",
    "limitation": "No immediate severe harm is supported in the supplied evidence."
  },
  {
    "id": "NBR-SOC-F05",
    "statement": "The fictional leadership update should state that investigation is active and impact is unconfirmed.",
    "support": "Open case, healthy service, no confirmed exposure, delayed source, ongoing validation, and communication request.",
    "alternative": "Later evidence could increase or decrease the assessed impact.",
    "confidence": "High",
    "limitation": "The case is not complete."
  },
  {
    "id": "NBR-SOC-F06",
    "statement": "The fictional SOC should close the case only after security and business validation, source-health review, detection follow-up, owner signoff, and documented lessons.",
    "support": "Case workflow, maintenance validation, source recovery, tuning need, closure criteria, and quality requirements.",
    "alternative": "A lower-risk duplicate case may qualify for simplified closure under an approved runbook.",
    "confidence": "High",
    "limitation": "Closure requirements should remain proportionate to actual case risk."
  }
];
const commonMistakes = [
  "Treating fictional alert severity as proof of incident severity, intent, scope, or impact.",
  "Assigning every security decision to the SOC even when a service owner, risk owner, privacy role, supplier owner, or leadership authority is required.",
  "Confusing the person performing a task with the person accountable for the service, control, risk, or final decision.",
  "Opening duplicate fictional cases without linking related alerts and preserving one clear owner.",
  "Closing a case when an alert stops without validating security outcome, business function, source health, residual risk, and follow-up.",
  "Escalating every alert to leadership or refusing to escalate until impact is confirmed.",
  "Using unapproved containment that creates avoidable service disruption.",
  "Reporting possible impact as confirmed impact in a leadership, supplier, or incident update.",
  "Failing to document delayed, missing, stale, or unhealthy evidence sources.",
  "Suppressing a recurring fictional alert without testing whether tuning could hide real misuse.",
  "Handing off only a case summary without evidence, actions, decisions, deadlines, confidence, limits, and acknowledgement.",
  "Treating a case closure as the end of detection, control, training, supplier, staffing, or runbook improvement.",
  "Allowing real credentials, employee data, school records, private company evidence, supplier records, incident details, or confidential SOC information into a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of a fictional SOC?",
    "choices": [
      "Validate signals, manage cases, coordinate response, communicate decisions, and improve defensive controls.",
      "Declare every alert an incident.",
      "Own every business service.",
      "Replace all risk owners."
    ],
    "answer": 0,
    "explanation": "A SOC converts evidence into documented and coordinated defensive decisions."
  },
  {
    "question": "What should a fictional Tier 1 analyst normally do first with a high-severity alert?",
    "choices": [
      "Validate source health, gather context, document facts, identify duplicates, and apply the approved triage workflow.",
      "Shut down the affected service immediately.",
      "Notify the public.",
      "Assume the alert proves compromise."
    ],
    "answer": 0,
    "explanation": "Severity starts triage but does not replace evidence validation."
  },
  {
    "question": "Who normally accepts fictional residual business risk?",
    "choices": [
      "An authorized business risk owner.",
      "The analyst who opened the case.",
      "The alerting tool.",
      "Any supplier contact."
    ],
    "answer": 0,
    "explanation": "Risk acceptance requires documented business authority."
  },
  {
    "question": "What is the purpose of a fictional shift handoff?",
    "choices": [
      "Transfer open cases, evidence, actions, decisions, deadlines, limits, and responsibility to the incoming team.",
      "Close every case at shift end.",
      "Remove prior evidence limitations.",
      "Avoid assigning a case owner."
    ],
    "answer": 0,
    "explanation": "A handoff preserves continuity and accountability."
  },
  {
    "question": "What does a repeated fictional maintenance alert support?",
    "choices": [
      "Validation and possible detection tuning, but not automatic suppression or automatic benign classification.",
      "Permanent deletion of the detection.",
      "Proof that all future alerts are harmless.",
      "Proof that the current event is malicious."
    ],
    "answer": 0,
    "explanation": "Historical similarity informs triage but cannot replace current evidence."
  },
  {
    "question": "What should a fictional leadership case update include?",
    "choices": [
      "Current facts, service status, uncertainty, actions, owners, decisions needed, and next update time.",
      "Only the alert title.",
      "Every raw log line.",
      "Unsupported claims about impact."
    ],
    "answer": 0,
    "explanation": "Leadership updates should be concise, decision-ready, and evidence-limited."
  },
  {
    "question": "What makes a fictional SOC case closure defensible?",
    "choices": [
      "Evidence, actions, authority, security validation, business validation, source-health review, residual risk, owner signoff, and follow-up are documented.",
      "The alert stopped firing.",
      "A ticket was marked complete.",
      "The shift ended."
    ],
    "answer": 0,
    "explanation": "Closure requires reconstructable evidence and validated outcomes."
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
        href={previousPage}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Module Homepage
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

export default function SOCRolesResponsibilitiesWorkflowPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.1 SOC Roles, Responsibilities, and Workflow
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how a fictional security operations center coordinates
            analysts, detection engineers, incident responders, service owners,
            risk owners, suppliers, communications, leadership, shift handoffs,
            escalation, validation, and continuous improvement.
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
          lessonTitle="SOC Roles, Responsibilities, and Workflow"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge alerts, services, identities, suppliers, roles, cases, evidence, and decisions.",
            "I will not request, expose, or evaluate any real credentials, employee data, school records, private company evidence, supplier records, incident details, or confidential SOC information.",
            "I will distinguish task performance, service ownership, control ownership, risk ownership, case ownership, communication authority, and final decision authority.",
            "I will not treat alert severity, repeated patterns, missing evidence, or a case status as proof of compromise or impact.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The SOC Sees the Alert, but It Does Not Own Every Decision"
        >
          <p className="leading-8">
            A fictional Northbridge analyst receives a high-severity alert
            during scheduled maintenance. The analyst can validate the source,
            collect context, document facts, open a case, and escalate. The
            analyst may not automatically shut down a critical service, accept
            business risk, contact a supplier outside the approved path, or
            report confirmed impact. Strong security operations depends on
            knowing who performs each task, who owns the service and control,
            who accepts risk, who communicates, and who validates closure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak SOC workflow
              </p>

              <p className="mt-2 leading-7">
                Treat severity as proof, let one analyst make every decision,
                escalate inconsistently, hide evidence gaps, hand off poorly,
                and close when the alert stops.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional SOC workflow
              </p>

              <p className="mt-2 leading-7">
                Validate evidence, assign ownership, use defined authority,
                coordinate proportionately, preserve uncertainty, verify
                outcomes, and convert lessons into improvement.
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
          title="Clear Responsibility Prevents Delay, Overreaction, and Silent Risk Acceptance"
        >
          <p className="leading-8">
            A fictional SOC may have excellent tools and still fail if alerts
            have no owner, containment lacks authority, service dependencies are
            unknown, risk decisions are made silently, communications overstate
            impact, or shift handoffs omit critical evidence. Role clarity makes
            the workflow faster, safer, more reviewable, and more trustworthy.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Observeā€“Ownā€“Authorizeā€“Validate Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Observe", "Which fictional alert, log, source-health record, asset, identity, change, supplier, timeline, and business context are directly supported?"],
              ["Own", "Which fictional analyst owns the case, and which service, control, risk, supplier, recovery, privacy, or communication owners are accountable?"],
              ["Authorize", "Which fictional role may approve containment, service change, supplier contact, incident declaration, leadership update, risk acceptance, or closure?"],
              ["Validate", "Which fictional evidence proves security outcome, business function, source health, residual risk, communication completion, handoff, and improvement?"],
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
            Security Operations Roles and Workflow Terms
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
            SOC Roles
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Roles and Their Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {socRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Owns", item.owns],
                    ["Does not automatically own", item.does_not_own],
                    ["Evidence", item.evidence],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Responsibility Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions for Every Fictional SOC Workflow
          </h2>

          <div className="mt-6 grid gap-5">
            {responsibilityQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak design
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Shift Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Readiness to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {shiftWorkflow.map((item) => (
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Operating Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional SOC Records
          </h2>

          <div className="mt-6 grid gap-5">
            {operatingRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.record}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Facts", item.facts],
                    ["Next action", item.next],
                    ["Authority boundary", item.authority],
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
            Escalation Model
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Escalation Levels
          </h2>

          <div className="mt-6 grid gap-5">
            {escalationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Trigger
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.trigger}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Route
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.route}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Expected result
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Shift Handoff"
          title="Eight Fields That Make a Fictional Case Transfer Safe"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {handoffFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge SOC Shift Dashboard"
          subtitle="Training dashboard for fictional security-operations evidence only."
          metrics={[
            {
              label: "Open cases",
              value: "6",
              note: "One high-priority maintenance alert, three medium cases, and two low-priority quality reviews remain open.",
            },
            {
              label: "Source-health issues",
              value: "1",
              note: "One supporting storage source is delayed while the primary alert source remains healthy.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports investigation and tuning but no confirmed unauthorized access or impact.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unusual Support-Service Access during Scheduled Maintenance"
          severity="High"
          time="6:42 PM"
          source="Fake Northbridge Detection Console"
          details="A fictional authorized maintenance identity accessed a confidential support service during the approved change window. A similar pattern triggered during two earlier approved maintenance events, while one supporting storage source is delayed."
          recommendation="Validate the change, identity, asset scope, source health, activity details, duplicate history, service impact, and owner context. Open or link the case, preserve the delayed-source limitation, escalate if criteria are met, and avoid declaring an incident from severity alone."
        />

        <FakeLogPanel
          title="Fake Northbridge SOC Shift Records"
          logs={[
            "18:00 SHIFT readiness='complete' high-risk-services='reviewed'",
            "18:10 SOURCE primary-alert='healthy' storage-support='delayed'",
            "18:20 ALERT severity='High' maintenance-window='approved'",
            "18:28 IDENTITY maint-service='authorized for change'",
            "18:35 HISTORY similar-approved-events='2'",
            "18:42 CASE opened='NBR-CASE-221' owner='Tier1-A'",
            "18:50 TRIAGE priority='Medium-High' incident='not declared'",
            "19:05 ESCALATE service-owner='requested context'",
            "19:18 ESCALATE detection-engineer='tuning review requested'",
            "19:35 LEADERSHIP update='investigation active impact unconfirmed'",
            "19:50 SOURCE storage-support='recovering'",
            "20:05 VALIDATE maintenance-task='approved and expected'",
            "20:20 FINDING unauthorized-access='not supported'",
            "20:35 TUNING change='staged test required'",
            "20:50 HANDOFF open-actions='source review + tuning'",
            "21:00 CLOSE requires='validation + owner + improvement'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge SOC Findings and Limits
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
          title="What Does the High-Severity Maintenance Alert Support?"
          evidence={[
            "The fictional primary alert source is healthy.",
            "The access occurred during an approved maintenance window.",
            "The identity is authorized for the maintenance task.",
            "Two prior approved maintenance events produced similar alerts.",
            "One supporting storage source is delayed.",
            "No supplied evidence confirms unauthorized access, data exposure, or service impact.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The alert requires documented validation and possible tuning review, but a confirmed incident or impact is not supported.",
            "A major incident is confirmed because the alert is high severity.",
            "The alert should be permanently suppressed.",
            "No case is needed because maintenance was scheduled.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves both the need to investigate and the evidence limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken SOC Roles and Workflow"
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
          title="Build the Northbridge SOC Operating Charter"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Roles, Ownership, Workflow, Escalation, Handoff, and Assurance
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete security operations operating model.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>SOC charter with mission, scope, services, evidence, privacy, authority, and quality goals.</li>
                <li>Role catalog for Tier 1, Tier 2, Tier 3, detection engineering, response, management, owners, suppliers, and leadership.</li>
                <li>Responsibility matrix covering task, case, service, control, risk, approval, communication, validation, and closure.</li>
                <li>Eight-step shift workflow from readiness through improvement.</li>
                <li>Escalation model with triggers, routes, authority, expected outcomes, and emergency criteria.</li>
                <li>Case-opening, evidence, timeline, action, decision, communication, validation, and closure fields.</li>
                <li>Shift-handoff template and quality-review checklist.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee data, school records,
            private company logs, supplier records, incident details, or
            confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Tier 1 Analyst Wants to Disable the Service Role Immediately"
          scenario="The fictional high-severity alert occurred during approved maintenance, but one supporting source is delayed and the service role supports the active task."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve evidence, validate context, escalate to the service owner and authorized responder, compare containment options, define rollback, and act according to approved criteria.",
              outcome:
                "Best workflow choice. Risk is addressed without confusing technical capability with authority.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the role immediately without checking authority or service dependency.",
              outcome:
                "Unsafe. The action may create avoidable service disruption.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the alert because maintenance is scheduled.",
              outcome:
                "Weak. Scheduled activity still requires validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Shift Is Ending before the Supporting Source Recovers"
          scenario="The fictional primary investigation is mostly complete, but one delayed source and a detection-tuning decision remain open."
          choices={[
            {
              label: "Choice A",
              response:
                "Complete a structured handoff with facts, evidence, source health, actions, open decisions, deadlines, authority, confidence, limitations, closure criteria, and incoming-owner acknowledgement.",
              outcome:
                "Best handoff choice. Continuity and accountability are preserved.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case so the next shift starts with a clean queue.",
              outcome:
                "Unsafe. Required evidence and follow-up remain incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send only the alert title to the incoming analyst.",
              outcome:
                "Weak. The handoff is not reconstructable.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="SOC Roles, Responsibilities, and Workflow Checklist"
          items={[
            "I can distinguish fictional task, case, service, control, risk, supplier, communication, approval, validation, and closure ownership.",
            "I can explain fictional Tier 1, Tier 2, Tier 3, detection engineering, incident response, SOC management, service-owner, risk-owner, and leadership roles.",
            "I can validate fictional source health, asset context, identity context, change context, duplicate history, evidence limits, and business relevance.",
            "I can open and manage a fictional case with a timeline, evidence references, actions, decisions, communications, confidence, limitations, and deadlines.",
            "I can escalate fictional operational, technical, business, risk, supplier, incident, emergency, and quality issues through the correct path.",
            "I can distinguish technical capability from authorization.",
            "I can write fictional leadership updates that separate facts, uncertainty, possible impact, confirmed impact, actions, owners, and next update.",
            "I can complete fictional shift handoffs with responsibility acknowledgement.",
            "I can validate fictional security outcome, business function, source health, residual risk, owner signoff, and improvement before closure.",
            "I will use only fictional evidence and never expose real credentials, company logs, employee data, school records, suppliers, incidents, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.1 Mini Quiz: SOC Roles, Responsibilities, and Workflow"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional SOC Roles, Responsibilities, and Workflow Package for Northbridge. Include the SOC charter, role catalog, responsibility matrix, shift workflow, escalation model, authority boundaries, case-opening fields, evidence and timeline requirements, communication rules, handoff template, closure criteria, quality review, improvement process, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional roles, identities, systems, suppliers, alerts, logs, cases, actions, decisions, dates, and outcomes.",
            "Do not treat alert severity, repeated patterns, source delays, or a completed ticket as proof of incident or impact.",
            "Make every action traceable to the correct owner and authority.",
            "Show how the workflow preserves evidence, service function, privacy, communication quality, and continuous improvement.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The SOC observes and coordinates, but it does not automatically own every service, control, risk, or business decision.",
            "Task ownership and decision authority are different.",
            "Alert severity starts triage but does not prove incident severity or impact.",
            "Shift handoffs should transfer evidence, reasoning, actions, decisions, deadlines, limits, and responsibility.",
            "Containment, supplier contact, leadership communication, and risk acceptance require the correct authority.",
            "Case closure requires validated security and business outcomes plus documented follow-up.",
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