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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-cloud-misconfiguration-review-lab`;
const nextLesson = `${modulePath}/writing-a-defensive-report`;

const objectives = [
  "Define a fictional incident-response tabletop scope covering the scenario, systems, identities, services, suppliers, data, business impact, evidence sources, privacy limits, authority, participants, and exercise goals.",
  "Evaluate fictional signals through readiness, detection, triage, declaration criteria, evidence quality, source health, service context, alternate explanations, potential impact, confirmed impact, and confidence.",
  "Coordinate fictional containment, continuity, communication, evidence preservation, supplier actions, recovery, validation, closure, and lessons learned through the correct approved roles.",
  "Distinguish fictional tabletop decisions, real operational actions, proposed actions, authorized actions, completed actions, validated outcomes, assumptions, limitations, and residual risk.",
  "Create a portfolio-safe fictional incident-response tabletop package with an exercise charter, inject log, decision register, communication map, recovery plan, validation record, metrics, and improvement recommendations."
];
const vocabulary = [
  [
    "Tabletop exercise",
    "A fictional discussion-based defensive exercise in which participants review a scenario, make decisions, test roles, identify gaps, and record improvements without affecting real systems."
  ],
  [
    "Exercise objective",
    "A fictional statement describing which readiness, coordination, communication, evidence, continuity, recovery, or decision capability the tabletop is designed to evaluate."
  ],
  [
    "Inject",
    "A fictional new fact, event, request, constraint, or change introduced during the tabletop to test participant decisions."
  ],
  [
    "Facilitator",
    "The fictional role that presents the scenario, controls injects, keeps time, asks questions, and preserves safe exercise boundaries."
  ],
  [
    "Controller",
    "The fictional role that manages exercise flow, expected outcomes, rules, and realism while preventing confusion with real operations."
  ],
  [
    "Participant",
    "A fictional person or role expected to make decisions, explain responsibilities, communicate, or validate an outcome during the exercise."
  ],
  [
    "Observer",
    "A fictional role that records decisions, timing, strengths, gaps, assumptions, and lessons without directing the response."
  ],
  [
    "Incident declaration",
    "A fictional authorized decision that the available evidence and business impact meet defined criteria for formal incident handling."
  ],
  [
    "Containment",
    "A fictional approved action intended to limit additional harm, exposure, access, spread, or service impact while preserving evidence and business continuity."
  ],
  [
    "Business continuity",
    "A fictional plan for maintaining or restoring essential services while defensive work continues."
  ],
  [
    "Evidence preservation",
    "A fictional process for maintaining relevant records, timestamps, ownership, integrity, handling, scope, and limitations for later review."
  ],
  [
    "Decision register",
    "A fictional chronological record of decisions, rationale, evidence, authority, owner, deadline, status, rollback, and validation."
  ],
  [
    "Communication cadence",
    "A fictional planned schedule for technical, service, leadership, user, supplier, legal, privacy, and recovery updates."
  ],
  [
    "Recovery criterion",
    "A fictional measurable condition that must be satisfied before a service, identity, control, or process returns to normal operation."
  ],
  [
    "Closure criterion",
    "A fictional requirement covering evidence, impact, recovery, validation, ownership, communication, residual risk, lessons learned, and follow-up before the case closes."
  ],
  [
    "After-action review",
    "A fictional structured review of what happened in the exercise, what worked, what failed, why, and which improvements require owners and deadlines."
  ]
];
const roles = [
  {
    "role": "Incident Commander",
    "responsibility": "Maintains the fictional response objective, approves coordination priorities, resolves conflicts, confirms declaration status, and ensures decisions have owners and deadlines.",
    "authority": "Coordinates the response within the approved incident framework but does not automatically own every technical, legal, privacy, supplier, or business decision.",
    "handoff": "Provides current scope, facts, impact, decisions, actions, blockers, cadence, next milestone, and unresolved risks."
  },
  {
    "role": "SOC Analyst",
    "responsibility": "Validates fictional alerts, builds the timeline, compares sources, records findings, tracks evidence gaps, and recommends proportionate next actions.",
    "authority": "May perform approved analysis and case actions but escalates containment or service-impact decisions beyond assigned authority.",
    "handoff": "Provides evidence identifiers, source health, observations, conclusions, alternatives, confidence, and requested owner decisions."
  },
  {
    "role": "Identity Owner",
    "responsibility": "Reviews fictional account state, sessions, roles, authentication activity, recovery needs, access restrictions, and identity validation.",
    "authority": "Approves identity restrictions and recovery steps according to the fictional process.",
    "handoff": "Provides identity scope, actions completed, remaining sessions, recovery status, validation, and residual risk."
  },
  {
    "role": "Service Owner",
    "responsibility": "Explains fictional business function, criticality, dependencies, approved changes, service impact, continuity needs, rollback, and recovery acceptance.",
    "authority": "Approves service changes and business-impact tradeoffs within the fictional service model.",
    "handoff": "Provides service status, dependencies, continuity plan, owner decisions, validation criteria, and customer impact."
  },
  {
    "role": "Cloud and Platform Owner",
    "responsibility": "Reviews fictional cloud resources, configuration, network controls, logs, identity paths, rollback options, and platform health.",
    "authority": "Approves platform changes according to the fictional change and incident process.",
    "handoff": "Provides effective state, actions, rollback, logging health, validation, and unresolved platform risk."
  },
  {
    "role": "Communications Lead",
    "responsibility": "Creates fictional audience-specific updates that separate known facts, impact, actions, limitations, next steps, and next update time.",
    "authority": "Coordinates approved communications but does not independently determine legal, privacy, or regulatory conclusions.",
    "handoff": "Provides audience, message, approval, delivery time, response channel, and next cadence."
  },
  {
    "role": "Supplier Owner",
    "responsibility": "Coordinates fictional supplier verification, access decisions, service obligations, escalation, evidence requests, and support deadlines.",
    "authority": "Manages the supplier relationship but uses independent verification and approved internal ownership.",
    "handoff": "Provides supplier status, verified contacts, actions, evidence received, contract considerations, and next checkpoint."
  },
  {
    "role": "Recovery Lead",
    "responsibility": "Coordinates fictional restoration, validation, monitoring, service acceptance, rollback readiness, and transition to normal operations.",
    "authority": "Directs recovery tasks within the approved recovery plan and confirms technical readiness with service owners.",
    "handoff": "Provides recovery stage, completed tests, failed tests, monitoring state, service acceptance, and residual risk."
  }
];
const injects = [
  {
    "id": "INJ-01",
    "time": "09:00",
    "title": "Unusual supplier sign-in",
    "new_information": "A fictional supplier administrator signed in to a confidential support service after its exception expired.",
    "decision_question": "Does this meet incident declaration criteria, or should the team open a focused access case while gathering more evidence?",
    "expected_focus": "Scope, identity status, approval expiration, activity evidence, impact limits, ownership, and proportionate access restriction.",
    "safe_boundary": "No real identity, credential, supplier, or service information is used."
  },
  {
    "id": "INJ-02",
    "time": "09:12",
    "title": "Cloud policy changed",
    "new_information": "A fictional confidential storage policy changed outside the approved window and now includes a broad read condition.",
    "decision_question": "Should the team restrict the policy immediately, and what can be communicated about possible exposure?",
    "expected_focus": "Effective access, rollback authority, confirmed versus possible impact, access evidence, data ownership, and validation.",
    "safe_boundary": "No real cloud account, resource, key, secret, or data is involved."
  },
  {
    "id": "INJ-03",
    "time": "09:24",
    "title": "Audit source stops reporting",
    "new_information": "A fictional administrative audit source stops delivering records thirty minutes after the storage-policy change.",
    "decision_question": "How does the source gap affect confidence, priority, containment, evidence preservation, and communication?",
    "expected_focus": "Source health, compensating evidence, uncertainty, failover, gap reconstruction, and avoidance of unsupported incident claims.",
    "safe_boundary": "The source and all logs are fictional training artifacts."
  },
  {
    "id": "INJ-04",
    "time": "09:36",
    "title": "Service owner reports no outage",
    "new_information": "The fictional application remains available, but the service owner cannot confirm whether unauthorized access occurred.",
    "decision_question": "How should the team balance service continuity with targeted restrictions and evidence review?",
    "expected_focus": "Business impact, containment options, least disruption, approved changes, owner authority, and measurable recovery criteria.",
    "safe_boundary": "No live service action is requested."
  },
  {
    "id": "INJ-05",
    "time": "09:48",
    "title": "User report arrives",
    "new_information": "A fictional employee reports a suspicious payroll-themed message and one link click without credential entry.",
    "decision_question": "Is the message related to the cloud and supplier records, or should it remain a separate case?",
    "expected_focus": "Case boundaries, evidence-based linkage, phishing triage, user guidance, identity review, and avoidance of scope inflation.",
    "safe_boundary": "No real message, link, recipient, or credential is included."
  },
  {
    "id": "INJ-06",
    "time": "10:00",
    "title": "Leadership requests an update",
    "new_information": "Fictional leadership asks whether confidential data was exposed and whether the service must be taken offline.",
    "decision_question": "What can be stated confidently, what remains unknown, what actions are underway, and when is the next update?",
    "expected_focus": "Decision-ready communication, facts, impact limits, owners, actions, service status, confidence, and cadence.",
    "safe_boundary": "The update remains fictional and contains no private information."
  },
  {
    "id": "INJ-07",
    "time": "10:15",
    "title": "Access restriction completed",
    "new_information": "The fictional supplier access is removed and the storage policy is restored to the approved identity group.",
    "decision_question": "What evidence is still needed before recovery or closure?",
    "expected_focus": "Effective access validation, session state, access review, source restoration, service function, owner signoff, and residual risk.",
    "safe_boundary": "No real change is performed."
  },
  {
    "id": "INJ-08",
    "time": "10:30",
    "title": "Audit source recovers",
    "new_information": "The fictional audit source resumes and delayed records show no covered unauthorized storage read during the gap.",
    "decision_question": "Can the team conclude no unauthorized access occurred?",
    "expected_focus": "Coverage limits, delayed evidence, source completeness, alternate paths, confidence, and careful impact language.",
    "safe_boundary": "All recovered records are fictional."
  },
  {
    "id": "INJ-09",
    "time": "10:45",
    "title": "Supplier owner confirms outdated access",
    "new_information": "The fictional supplier owner confirms the administrative access should have ended with the project.",
    "decision_question": "What governance and process improvements should follow?",
    "expected_focus": "Lifecycle control, exception expiration, owner accountability, automatic review, supplier process, metrics, and lessons learned.",
    "safe_boundary": "No real contract or supplier record is involved."
  },
  {
    "id": "INJ-10",
    "time": "11:00",
    "title": "Recovery review",
    "new_information": "The fictional service is healthy, access is restricted, logging is current, and no confirmed disclosure appears in covered evidence.",
    "decision_question": "Should the case close, remain in monitoring, or transition to a lower-severity follow-up?",
    "expected_focus": "Closure criteria, residual risk, owner signoff, evidence limits, monitoring, communication, and tracked improvements.",
    "safe_boundary": "The exercise ends with documentation only."
  }
];
const decisionFramework = [
  {
    "question": "What is directly observed?",
    "strong": "Record only fictional facts supported by identified evidence, timestamps, source health, scope, and limitations.",
    "weak": "Repeat the scenario narrative as though every statement were verified.",
    "review": "Which exact source supports each fact?"
  },
  {
    "question": "What is the current response objective?",
    "strong": "State the fictional priority such as protecting identity, restricting access, preserving service, restoring visibility, validating impact, or communicating clearly.",
    "weak": "Allow each team to optimize its own task without one coordinated objective.",
    "review": "What result matters most in the next decision window?"
  },
  {
    "question": "Do declaration criteria apply?",
    "strong": "Compare fictional evidence, impact, criticality, persistence, uncertainty, authority, and defined thresholds.",
    "weak": "Declare an incident because an alert is High or avoid declaration because no outage exists.",
    "review": "Which criterion is met, not met, or still unknown?"
  },
  {
    "question": "Which actions are authorized?",
    "strong": "Separate fictional proposed, approved, completed, failed, rolled back, and validated actions with owners and deadlines.",
    "weak": "Treat recommendations as completed containment.",
    "review": "Who approved the action and what evidence confirms completion?"
  },
  {
    "question": "What business impact is known?",
    "strong": "Separate fictional service availability, access-control weakness, possible exposure, confirmed access, confirmed disclosure, user impact, supplier impact, and operational disruption.",
    "weak": "Use a worst-case scenario as the current impact statement.",
    "review": "What impact is directly supported now?"
  },
  {
    "question": "What evidence is missing or unhealthy?",
    "strong": "Document fictional gaps, delays, incomplete coverage, conflicting records, stale sources, and compensating evidence.",
    "weak": "Treat missing evidence as proof of harm or proof of safety.",
    "review": "How does the gap change confidence and action?"
  },
  {
    "question": "Who must receive which update?",
    "strong": "Tailor fictional technical, service, leadership, user, supplier, legal, privacy, and recovery messages to audience need and authority.",
    "weak": "Send one detailed message to everyone.",
    "review": "What does this audience need to decide or do?"
  },
  {
    "question": "What proves recovery or closure?",
    "strong": "Use fictional access, configuration, source, service, communication, owner, validation, residual-risk, and improvement criteria.",
    "weak": "Close when alerts stop or when one change ticket is complete.",
    "review": "Which measurable evidence proves the response objective was achieved?"
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Prepare the exercise",
    "detail": "Define fictional objectives, scope, safety boundaries, participants, roles, scenario, injects, evidence, timebox, communication rules, and success criteria.",
    "output": "Exercise charter and participant brief."
  },
  {
    "step": "2",
    "title": "Validate the initial signal",
    "detail": "Review fictional alert, source health, identity, service, business context, change history, criticality, alternatives, and immediate risks.",
    "output": "Initial triage statement."
  },
  {
    "step": "3",
    "title": "Decide response status",
    "detail": "Compare fictional facts with declaration criteria, impact, uncertainty, persistence, ownership, and authority.",
    "output": "Declaration and priority decision."
  },
  {
    "step": "4",
    "title": "Coordinate containment and continuity",
    "detail": "Choose fictional access, configuration, network, identity, supplier, service, logging, monitoring, and continuity actions with rollback.",
    "output": "Containment and continuity plan."
  },
  {
    "step": "5",
    "title": "Preserve evidence and communicate",
    "detail": "Maintain fictional timestamps, evidence references, source health, decision rationale, audience-specific updates, approvals, and next cadence.",
    "output": "Evidence and communication register."
  },
  {
    "step": "6",
    "title": "Recover and validate",
    "detail": "Confirm fictional access, sessions, configuration, source delivery, service function, owner acceptance, monitoring, rollback readiness, and residual risk.",
    "output": "Recovery validation record."
  },
  {
    "step": "7",
    "title": "Close or transition",
    "detail": "Apply fictional closure criteria, record unresolved risks, transfer follow-up actions, communicate status, and preserve case ownership.",
    "output": "Closure or transition decision."
  },
  {
    "step": "8",
    "title": "Learn and improve",
    "detail": "Complete fictional after-action review, assign owners and deadlines, update runbooks, controls, training, suppliers, metrics, detection, and exercise plans.",
    "output": "After-action and improvement package."
  }
];
const findings = [
  {
    "id": "NBR-IR-F01",
    "statement": "The fictional supplier access should be handled as an urgent access-control case and may support incident declaration if additional impact evidence appears.",
    "support": "Expired approval, confidential service scope, active sign-in, supplier-owner confirmation, and no current renewal.",
    "alternative": "A legitimate emergency support need may have existed but was not documented.",
    "confidence": "High",
    "impact": "Unsupported administrative capability is confirmed; misuse and disclosure are unconfirmed.",
    "next": "Remove access, review activity, validate sessions, notify owners, and preserve declaration criteria for reassessment."
  },
  {
    "id": "NBR-IR-F02",
    "statement": "The fictional broad storage policy requires immediate restriction without claiming confirmed data disclosure.",
    "support": "Outside-window change, confidential classification, broad read condition, no approved exception, and healthy configuration evidence.",
    "alternative": "A legitimate temporary sharing need may exist but is not documented.",
    "confidence": "High",
    "impact": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "next": "Restore approved access, review covered access evidence, validate effective state, and communicate impact limits."
  },
  {
    "id": "NBR-IR-F03",
    "statement": "The fictional audit-source outage increases uncertainty and response priority but does not prove malicious activity.",
    "support": "Current thirty-eight-minute administrative logging gap, critical cloud coverage, healthy source monitor, and partial compensating evidence.",
    "alternative": "A nonsecurity delivery failure may explain the outage.",
    "confidence": "High",
    "impact": "Monitoring assurance is reduced; harmful activity during the gap is unconfirmed.",
    "next": "Restore or fail over, preserve the gap, reconstruct events, and state confidence limits."
  },
  {
    "id": "NBR-IR-F04",
    "statement": "The fictional payroll message should remain a separate phishing case unless evidence establishes a relationship.",
    "support": "Different identity, message source, recipients, evidence, requested action, owners, and timeline from the supplier and cloud records.",
    "alternative": "A coordinated scenario is possible but not currently supported.",
    "confidence": "High",
    "impact": "One click is confirmed; credential compromise and relationship to the cloud case are unconfirmed.",
    "next": "Triage separately, review the clicked identity, and link cases only through evidence."
  },
  {
    "id": "NBR-IR-F05",
    "statement": "The fictional recovered audit records increase confidence but cannot prove that no unauthorized access occurred through every path.",
    "support": "Source recovery, delayed covered records, no observed covered storage read, and documented source scope.",
    "alternative": "An uncovered or delayed access path may exist.",
    "confidence": "Medium-High",
    "impact": "No covered unauthorized read is observed; universal absence of access is not proven.",
    "next": "Document source scope, review compensating evidence, monitor, and preserve residual uncertainty."
  },
  {
    "id": "NBR-IR-F06",
    "statement": "The fictional response can transition to monitored follow-up after access, policy, logging, service, owner, communication, and improvement criteria are validated.",
    "support": "Supplier access removed, policy restored, logging current, service healthy, owner signoff available, and no confirmed disclosure in covered evidence.",
    "alternative": "Unresolved source coverage or related activity may require the case to remain open.",
    "confidence": "Medium-High",
    "impact": "Immediate control conditions are corrected; residual uncertainty and improvement work remain.",
    "next": "Document closure limits, continue targeted monitoring, assign improvements, and schedule review."
  }
];
const communications = [
  {
    "audience": "Technical response team",
    "need": "Detailed fictional scope, evidence, source health, timeline, decisions, owners, actions, blockers, and next validation.",
    "avoid": "Unsupported impact claims, real credentials, private data, or unapproved operational instructions.",
    "cadence": "At major injects and every thirty fictional minutes."
  },
  {
    "audience": "Service owner",
    "need": "Fictional service status, dependencies, containment options, business tradeoffs, validation, and recovery criteria.",
    "avoid": "Raw technical detail that does not support a service decision.",
    "cadence": "At each service-impact or recovery decision."
  },
  {
    "audience": "Leadership",
    "need": "Fictional facts, confirmed impact, possible impact, confidence, actions, service status, decisions required, and next update time.",
    "avoid": "Long raw logs, speculation, blame, or certainty beyond evidence.",
    "cadence": "At declaration, major impact change, recovery milestone, and closure transition."
  },
  {
    "audience": "Affected users",
    "need": "Fictional clear guidance about what not to do, what is known, what action is required, support path, and next update.",
    "avoid": "Unnecessary technical detail, private case data, or unsupported claims.",
    "cadence": "When user action or awareness is required."
  },
  {
    "audience": "Supplier owner",
    "need": "Fictional verified request, access status, service need, evidence required, deadline, and escalation path.",
    "avoid": "Using contact details supplied by a suspicious message or unverified source.",
    "cadence": "At access restriction, verification, evidence receipt, and resolution."
  },
  {
    "audience": "Recovery team",
    "need": "Fictional recovery stage, dependencies, tests, failures, rollback, monitoring, service acceptance, and residual risk.",
    "avoid": "Declaring recovery before validation is complete.",
    "cadence": "At each recovery gate."
  }
];
const commonMistakes = [
  "Using real incidents, identities, credentials, messages, cloud resources, logs, employee data, school records, or private organizational details in a tabletop artifact.",
  "Confusing a fictional tabletop decision with an action completed in a real environment.",
  "Declaring an incident solely because an alert is High.",
  "Avoiding incident declaration solely because the service is still available.",
  "Treating recommendations as authorized or completed actions.",
  "Combining unrelated phishing, supplier, cloud, identity, and telemetry records without evidence.",
  "Treating missing evidence as proof of harm or proof of safety.",
  "Reporting possible exposure as confirmed disclosure.",
  "Taking broad service-disrupting action without the correct owner and authority.",
  "Failing to preserve rollback and continuity options.",
  "Sending one identical update to technical staff, leadership, users, and suppliers.",
  "Closing after access removal without validating sessions, effective policy, logging, service function, owner signoff, and residual risk.",
  "Completing an after-action review without named owners, deadlines, success measures, and follow-up.",
  "Turning the exercise into offensive planning, real-system testing, credential collection, or unsafe experimentation."
];
const quizQuestions = [
  {
    "question": "What is the purpose of a fictional incident-response tabletop?",
    "choices": [
      "To test readiness, roles, decisions, communication, continuity, recovery, and improvement without affecting real systems.",
      "To perform live containment on production.",
      "To collect real credentials.",
      "To prove an incident occurred."
    ],
    "answer": 0,
    "explanation": "A tabletop is a safe discussion-based exercise, not live operational work."
  },
  {
    "question": "What does the fictional broad storage policy prove?",
    "choices": [
      "A serious unsupported control condition and possible exposure, while unauthorized access and disclosure remain unconfirmed.",
      "Every confidential file was disclosed.",
      "The provider was compromised.",
      "The service must be deleted."
    ],
    "answer": 0,
    "explanation": "Configuration state and confirmed impact are separate conclusions."
  },
  {
    "question": "How should the fictional phishing message relate to the cloud case?",
    "choices": [
      "Keep it separate unless evidence establishes a relationship, while preserving any supported links.",
      "Merge it because both are High priority.",
      "Ignore it because the cloud case is larger.",
      "Assume it caused the policy change."
    ],
    "answer": 0,
    "explanation": "Case boundaries should follow evidence, systems, identities, timelines, owners, and decisions."
  },
  {
    "question": "What does the fictional audit-source gap prove?",
    "choices": [
      "Visibility is reduced and uncertainty increases, but malicious activity is not automatically confirmed.",
      "An attacker changed the cloud policy.",
      "Every missing event is harmful.",
      "The incident should close."
    ],
    "answer": 0,
    "explanation": "A source gap affects confidence and response, not the truth of an unsupported claim."
  },
  {
    "question": "What should a leadership update include?",
    "choices": [
      "Known facts, confirmed and possible impact, confidence, actions, service status, decisions required, and next update time.",
      "Every raw log line.",
      "Only the worst-case scenario.",
      "No mention of uncertainty."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be decision-ready and evidence-limited."
  },
  {
    "question": "When can the fictional response transition toward closure?",
    "choices": [
      "After access, configuration, logging, service, owner, communication, residual-risk, and improvement criteria are validated.",
      "When alerts stop.",
      "When one ticket closes.",
      "When no outage is reported."
    ],
    "answer": 0,
    "explanation": "Closure requires a complete validated outcome, not one signal."
  },
  {
    "question": "What makes an after-action item useful?",
    "choices": [
      "A clear gap, improvement, owner, deadline, success measure, dependency, and follow-up review.",
      "A general statement that communication should improve.",
      "A list without owners.",
      "A promise to be more careful."
    ],
    "answer": 0,
    "explanation": "Improvement work must be accountable and measurable."
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

export default function FakeIncidentResponseTabletopPage() {
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
              Module I16
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.6 Fake Incident Response Tabletop
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Coordinate a fictional incident-response exercise through
            readiness, detection, triage, declaration, containment concepts,
            continuity, evidence preservation, communication, recovery,
            validation, closure, and lessons learned.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I16: Intermediate Defensive Labs"
          lessonTitle="Fake Incident Response Tabletop"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge scenario, identities, services, suppliers, cloud resources, logs, messages, owners, decisions, and outcomes.",
            "I understand that this is a discussion-based tabletop and does not authorize any action on a real system, account, service, network, website, cloud resource, or message.",
            "I will not request or expose real credentials, employee data, school records, company logs, suppliers, private incidents, legal advice, regulatory conclusions, or confidential organizational information.",
            "I will distinguish proposed, authorized, completed, failed, rolled-back, and validated actions.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Tabletop Tests the Decision System, Not Just the Technical Team"
        >
          <p className="leading-8">
            The fictional scenario combines expired supplier access, a broad
            storage policy, a monitoring gap, a suspicious message, leadership
            questions, and recovery decisions. The goal is not to invent the
            most dramatic incident. It is to test whether the organization can
            define scope, make authorized decisions, preserve evidence, protect
            service continuity, communicate accurately, validate outcomes, and
            improve.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak tabletop
              </p>

              <p className="mt-2 leading-7">
                Treat the scenario as fact, merge every signal, skip owners,
                assume actions happened, overstate impact, ignore continuity,
                and end without accountable improvements.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional tabletop
              </p>

              <p className="mt-2 leading-7">
                Define objectives, test decisions, preserve evidence limits,
                coordinate owners, communicate by audience, validate recovery,
                apply closure criteria, and assign improvements.
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
          title="Readiness Fails When Roles, Authority, Communication, or Validation Are Unclear"
        >
          <p className="leading-8">
            Fictional technical evidence may be strong while the response still
            fails because no one owns the decision, service continuity is
            ignored, communications overstate impact, suppliers are not
            verified, recovery criteria are vague, or improvements never gain
            owners. Tabletop exercises reveal these coordination gaps before a
            real event.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Objectiveā€“Evidenceā€“Authorityā€“Actionā€“Validation Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Objective", "What fictional security, service, evidence, communication, recovery, or continuity result matters in the current decision window?"],
              ["Evidence", "Which fictional facts, source health, timeline, context, alternatives, confidence, and limitations support the decision?"],
              ["Authority", "Which fictional incident, identity, service, cloud, supplier, communications, privacy, legal, or recovery owner may approve the action?"],
              ["Action", "Which fictional proposed, authorized, completed, failed, rolled-back, monitored, or escalated action follows?"],
              ["Validation", "Which fictional access, configuration, source, service, owner, communication, residual-risk, and closure evidence proves the result?"],
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
            Incident Response Tabletop Terms
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
            Response Roles
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Tabletop Roles
          </h2>

          <div className="mt-6 grid gap-5">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Responsibility", item.responsibility],
                    ["Authority boundary", item.authority],
                    ["Handoff content", item.handoff],
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
            Tabletop Injects
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Scenario Injects
          </h2>

          <div className="mt-6 grid gap-5">
            {injects.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.time}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["New information", item.new_information],
                    ["Decision question", item.decision_question],
                    ["Expected focus", item.expected_focus],
                    ["Safety boundary", item.safe_boundary],
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
            Decision Framework
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions for Every Major Inject
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionFramework.map((item) => (
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
                      Strong decision
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak decision
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
            Communication Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Audience Plans
          </h2>

          <div className="mt-6 grid gap-5">
            {communications.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Needs", item.need],
                    ["Avoid", item.avoid],
                    ["Cadence", item.cadence],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Tabletop Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Exercise Preparation to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
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
          title="Fake Northbridge Incident Response Tabletop Dashboard"
          subtitle="Training dashboard for fictional exercise decisions only."
          metrics={[
            {
              label: "Scenario injects",
              value: "10",
              note: "Supplier access, cloud policy, source health, service continuity, phishing, leadership, recovery, and governance decisions are represented.",
            },
            {
              label: "Separate cases",
              value: "2",
              note: "The fictional supplier and cloud records may share one response thread, while the phishing report remains separate without linkage evidence.",
            },
            {
              label: "Confirmed disclosure",
              value: "0",
              note: "The fictional evidence supports control weaknesses and possible exposure but no confirmed data disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Access, Broad Cloud Policy, and Audit Gap Require Coordinated Response"
          severity="High"
          time="10:22 AM"
          source="Fake Northbridge Tabletop Console"
          details="A fictional supplier administrator used access after approval expiration, a confidential storage policy contains a broad read condition, and a critical cloud audit source stopped reporting. No confirmed disclosure appears in the supplied evidence."
          recommendation="Restrict unsupported access and policy state, restore logging, preserve evidence and source limits, assign incident, identity, service, cloud, supplier, and communications owners, protect service continuity, validate outcomes, and communicate only supported impact."
        />

        <FakeLogPanel
          title="Fake Northbridge Tabletop Decision Timeline"
          logs={[
            "09:00 INJECT supplier-signin='post-expiration'",
            "09:08 DECISION access-case='opened'",
            "09:12 INJECT storage-policy='broad-read'",
            "09:18 ACTION policy-restriction='proposed'",
            "09:24 INJECT audit-source='stopped'",
            "09:30 ACTION source-failover='authorized'",
            "09:36 SERVICE availability='healthy'",
            "09:48 INJECT payroll-message='separate-case'",
            "10:00 LEADERSHIP update='requested'",
            "10:06 IMPACT disclosure='unconfirmed'",
            "10:15 ACCESS supplier='removed'",
            "10:17 POLICY approved-state='restored'",
            "10:30 SOURCE audit='recovered'",
            "10:34 EVIDENCE covered-read='none-observed'",
            "10:45 OWNER supplier-access='outdated'",
            "11:00 TRANSITION monitored-followup='proposed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Tabletop Findings with Confidence and Limits
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

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact statement", item.impact],
                    ["Next action", item.next],
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
          title="Do Recovered Audit Records Prove No Unauthorized Access Occurred?"
          evidence={[
            "The fictional audit source recovered after a thirty-eight-minute gap.",
            "Delayed covered records show no unauthorized storage read.",
            "The source has documented coverage limits.",
            "Compensating configuration records remained available.",
            "No confirmed disclosure appears in the supplied evidence.",
            "Not every possible access path is represented.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "No covered unauthorized read is observed, but universal absence of unauthorized access is not proven.",
            "No unauthorized access occurred anywhere.",
            "The audit source should be ignored because it was delayed.",
            "The storage policy was safe.",
          ]}
          bestAnswer={0}
          explanation="Recovered evidence improves confidence within its documented scope but cannot prove what it does not cover."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional Tabletop Exercises"
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
          title="Run the Northbridge Fake Incident Response Tabletop"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Decisions, Authority, Continuity, Communication, Recovery, and Improvement
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge scenario and
                injects to conduct a discussion-based defensive exercise.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Exercise charter with objectives, scope, safety boundaries, participants, roles, timeline, evidence, communication rules, and success criteria.</li>
                <li>Inject log with decisions, assumptions, evidence, authority, owners, deadlines, status, rollback, and validation.</li>
                <li>Incident declaration and priority decision with criteria and confidence.</li>
                <li>Containment, continuity, evidence preservation, supplier, identity, cloud, service, and communication plans.</li>
                <li>Audience-specific technical, service, leadership, user, supplier, and recovery messages.</li>
                <li>Recovery and closure criteria with access, policy, source, service, owner, residual-risk, and monitoring evidence.</li>
                <li>After-action review with strengths, gaps, root causes, improvements, owners, deadlines, dependencies, and success measures.</li>
                <li>Leadership summary, technical summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This is a fictional discussion exercise only. Do not perform any
            real containment, account change, cloud action, system test,
            message interaction, credential request, or operational response.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Asks Whether Confidential Data Was Exposed"
          scenario="The fictional policy was broad, the audit source had a gap, and no covered unauthorized read is observed after source recovery."
          choices={[
            {
              label: "Choice A",
              response:
                "State that an unsupported broad-read condition and possible exposure are confirmed, no covered unauthorized read or disclosure is currently confirmed, actions are complete, source limits remain, and the next update follows validation.",
              outcome:
                "Best leadership communication. It is accurate, useful, and evidence-limited.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "State that confidential data was definitely exposed.",
              outcome:
                "Unsupported. The supplied evidence does not confirm disclosure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "State that no access occurred anywhere.",
              outcome:
                "Unsupported. The recovered source does not cover every possible path.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Team Wants to Close after Access and Policy Restoration"
          scenario="The fictional supplier access is removed and the storage policy is restored, but source recovery, session validation, owner signoff, communication, and improvement actions are not complete."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the case open or transition it formally until logging, sessions, effective access, service function, owner signoff, communication, residual risk, and follow-up actions are validated.",
              outcome:
                "Best closure choice. Corrective change is only one part of complete response.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close immediately because the two visible controls were fixed.",
              outcome:
                "Premature. Important validation and ownership work remains.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the incident open forever because certainty is impossible.",
              outcome:
                "Weak. Evidence-based closure can preserve residual uncertainty and monitored follow-up.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Fake Incident Response Tabletop Checklist"
          items={[
            "I can define fictional exercise objectives, scope, safety boundaries, participants, roles, injects, evidence, timebox, communication rules, and success criteria.",
            "I can distinguish fictional facts, assumptions, conclusions, alternatives, gaps, confidence, potential impact, confirmed impact, and residual risk.",
            "I can compare fictional evidence with incident declaration and priority criteria.",
            "I can separate fictional proposed, authorized, completed, failed, rolled-back, and validated actions.",
            "I can coordinate fictional identity, service, cloud, supplier, communications, telemetry, recovery, and incident owners.",
            "I can preserve fictional evidence references, timestamps, source health, decision rationale, authority, owners, deadlines, and validation.",
            "I can write fictional technical, service, leadership, user, supplier, and recovery communications for the correct audience.",
            "I can define fictional continuity, recovery, rollback, monitoring, closure, and transition criteria.",
            "I can create fictional after-action improvements with owners, deadlines, dependencies, success measures, and follow-up.",
            "I will use only fictional evidence and never expose or act on real credentials, systems, incidents, cloud resources, messages, employee data, school records, suppliers, or confidential information.",
          ]}
        />

        <MiniQuiz
          title="I16.6 Mini Quiz: Fake Incident Response Tabletop"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Fake Incident Response Tabletop Package for Northbridge. Include the exercise charter, participant and authority map, inject log, evidence register, normalized timeline, declaration decision, containment and continuity plan, case-boundary decisions, supplier and identity actions, cloud and logging actions, audience communication matrix, recovery and closure criteria, decision register, findings, validation, residual risk, after-action review, metrics, improvements, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, services, suppliers, cloud resources, messages, logs, decisions, dates, actions, and outcomes.",
            "Make clear that tabletop decisions do not authorize or represent completed actions on real systems.",
            "Do not treat High severity, source gaps, policy state, user clicks, access expiration, or recovered records as automatic proof.",
            "Show how accurate communication and validated recovery are as important as technical containment.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A tabletop tests the whole decision and coordination system.",
            "Scenario injects are prompts for analysis, not automatically verified facts.",
            "Incident declaration should follow criteria, evidence, impact, uncertainty, and authority.",
            "Containment should preserve continuity, evidence, rollback, and correct ownership.",
            "Technical, leadership, user, supplier, and recovery audiences need different updates.",
            "Recovery and closure require validated outcomes, not only completed change tickets.",
            "Portfolio artifacts should use fully fictional evidence and never expose or affect real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I16
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