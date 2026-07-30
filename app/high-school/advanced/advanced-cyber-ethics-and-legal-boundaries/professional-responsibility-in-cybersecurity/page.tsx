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
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const nextLesson =
  `${modulePath}/authorization-scope-and-written-permission`;

const objectives = [
  "Explain professional responsibility as a duty to protect people, systems, information, service continuity, evidence, privacy, trust, and public safety.",
  "Separate technical ability, curiosity, urgency, business pressure, and helpful intent from actual written authority.",
  "Identify the people and roles affected by a fictional cybersecurity decision, including users, service owners, data owners, legal or privacy reviewers, leadership, suppliers, and the public.",
  "Use an evidence-limited professional decision model that considers scope, necessity, proportionality, reversibility, service impact, privacy, documentation, validation, and residual risk.",
  "Create a portfolio-ready professional responsibility statement and fictional decision record that demonstrates ethical defensive judgment."
];
const vocabulary = [
  [
    "Professional responsibility",
    "The duty to use cybersecurity knowledge carefully, lawfully, ethically, accurately, and in ways that protect people, systems, data, services, evidence, privacy, and trust."
  ],
  [
    "Authorization",
    "Explicit permission from an appropriate owner or authority to perform defined actions within defined boundaries."
  ],
  [
    "Scope",
    "The systems, identities, data, actions, methods, locations, time windows, evidence rules, and limits included in an authorized task."
  ],
  [
    "Duty of care",
    "The expectation that a professional will take reasonable precautions to avoid preventable harm."
  ],
  [
    "Minimum necessary",
    "Using only the access, information, actions, time, and visibility required to complete an authorized purpose."
  ],
  [
    "Proportionality",
    "Choosing an action whose intrusiveness and operational effect match the evidence, urgency, authority, and risk."
  ],
  [
    "Reversibility",
    "The ability to safely undo an action if evidence changes, service impact appears, or the decision proves incorrect."
  ],
  [
    "Evidence preservation",
    "Protecting the accuracy, context, provenance, timestamps, handling history, and availability of records used for a decision."
  ],
  [
    "Privacy boundary",
    "A rule limiting what personal or confidential information may be viewed, collected, stored, shared, retained, or included in reports."
  ],
  [
    "Conflict of interest",
    "A personal, financial, academic, organizational, or relationship-based interest that could interfere with independent professional judgment."
  ],
  [
    "Escalation",
    "Sending a question, risk, decision, or action request to the role with the required authority, expertise, or ownership."
  ],
  [
    "Stop condition",
    "A pre-defined event requiring work to pause, such as uncertain scope, unexpected sensitive data, service instability, missing approval, or evidence-integrity concerns."
  ],
  [
    "Validation",
    "Measurable confirmation that an authorized action produced the intended effective state without unacceptable harm."
  ],
  [
    "Residual risk",
    "The risk or uncertainty remaining after controls, decisions, corrective actions, monitoring, and validation."
  ],
  [
    "Accountability",
    "Clear ownership for decisions, actions, communication, validation, documentation, and acceptance of remaining risk."
  ],
  [
    "Professional trust",
    "Confidence earned when a defender consistently respects authorization, evidence, privacy, accuracy, ownership, safety, and transparent limits."
  ]
];
const responsibilityDomains = [
  {
    "domain": "People and users",
    "duty": "Protect fictional users from unnecessary disruption, unfair blame, privacy invasion, misleading claims, and avoidable security harm.",
    "evidence_question": "Which users are affected, what is confirmed, what is only possible, and what support or notice is appropriate?",
    "weak_pattern": "Treat users as obstacles, disclose private details, or assume intent from one alert.",
    "strong_output": "A user-impact note with evidence limits, minimum necessary action, support path, and validation."
  },
  {
    "domain": "Systems and service continuity",
    "duty": "Reduce security risk while preserving important fictional services whenever targeted reversible actions are sufficient.",
    "evidence_question": "Which service is affected, how critical is it, what dependencies exist, and which action is proportionate?",
    "weak_pattern": "Recommend broad shutdown because an alert is severe.",
    "strong_output": "A service-aware action plan with owner, rollback, health checks, and residual risk."
  },
  {
    "domain": "Data and privacy",
    "duty": "Use only fictional information needed for the approved purpose and prevent unnecessary collection, exposure, retention, or sharing.",
    "evidence_question": "What data classification applies, who owns it, what minimum fields are needed, and when should they be deleted?",
    "weak_pattern": "Collect every available record because it might be useful.",
    "strong_output": "A minimum-necessary handling plan with access, storage, sharing, retention, and deletion controls."
  },
  {
    "domain": "Evidence and accuracy",
    "duty": "Preserve context, distinguish observation from conclusion, state limitations, and avoid unsupported attribution or impact claims.",
    "evidence_question": "What does each source support, what can it not prove, how healthy is it, and what conflicting evidence exists?",
    "weak_pattern": "Copy a tool conclusion or convert missing evidence into proof.",
    "strong_output": "An evidence register connecting source, observation, conclusion, limitation, confidence, and next question."
  },
  {
    "domain": "Authorization and ownership",
    "duty": "Act only within written permission and route decisions to the role authorized to approve, execute, communicate, or accept risk.",
    "evidence_question": "Who owns the system, data, service, risk, action, and communication, and what is each role allowed to decide?",
    "weak_pattern": "Treat supervisor pressure, urgency, or technical access as permission.",
    "strong_output": "An authority map with allowed actions, approval gates, stop conditions, and escalation routes."
  },
  {
    "domain": "Public and organizational trust",
    "duty": "Communicate truthfully, protect confidential details, avoid exaggeration, and document mistakes or uncertainty transparently.",
    "evidence_question": "Which audience needs which facts, what must remain private, and which decisions or updates are required?",
    "weak_pattern": "Use dramatic language, hide uncertainty, or disclose details to prove expertise.",
    "strong_output": "Aligned technical, service, leadership, user, and portfolio summaries from one approved fact set."
  },
  {
    "domain": "Professional competence",
    "duty": "Recognize personal limits, request review, use approved procedures, and avoid experimenting on operational systems.",
    "evidence_question": "Does the assigned defender have the training, supervision, tools, environment, and authorization required?",
    "weak_pattern": "Proceed because the defender believes they can figure it out.",
    "strong_output": "A competence and supervision check with escalation, safe environment, and review requirements."
  },
  {
    "domain": "Long-term improvement",
    "duty": "Learn from fictional decisions, measure outcomes, correct weaknesses, record feedback, and improve procedures without blaming individuals unfairly.",
    "evidence_question": "What worked, what failed, what remained uncertain, and which owner should improve the control or process?",
    "weak_pattern": "Close the ticket after an action and never revisit effectiveness.",
    "strong_output": "A validated improvement record with lessons learned, owner, deadline, metric, and reassessment."
  }
];
const stakeholders = [
  {
    "role": "Analyst or student defender",
    "responsibility": "Review only authorized fictional evidence, preserve scope, document reasoning, escalate uncertainty, and avoid unsupported claims.",
    "cannot_assume": "That technical access grants authority or that urgency removes privacy and safety obligations.",
    "decision": "Whether evidence supports continued review, pause, escalation, or a recommended next step."
  },
  {
    "role": "System or service owner",
    "responsibility": "Explain business purpose, dependencies, criticality, acceptable disruption, required functionality, and recovery needs.",
    "cannot_assume": "That business ownership permits bypassing legal, privacy, or organizational rules.",
    "decision": "Whether an operational change is acceptable within delegated authority."
  },
  {
    "role": "Data owner or privacy reviewer",
    "responsibility": "Define classification, permitted use, minimum necessary fields, sharing limits, retention, and deletion.",
    "cannot_assume": "That security work automatically permits access to every personal or confidential record.",
    "decision": "Which information may be used and how it must be protected."
  },
  {
    "role": "Incident lead or security manager",
    "responsibility": "Coordinate scope, case boundaries, priorities, actions, evidence, communication, and validation.",
    "cannot_assume": "That one severe alert proves one incident, one actor, or maximum impact.",
    "decision": "Which response path and escalation level are proportionate."
  },
  {
    "role": "Legal, compliance, or policy owner",
    "responsibility": "Interpret applicable obligations, approved procedures, disclosure limits, exceptions, and documentation requirements.",
    "cannot_assume": "That a general policy statement resolves every specific factual question.",
    "decision": "Whether specialized review, hold, notification, or formal approval is required."
  },
  {
    "role": "Leadership or risk owner",
    "responsibility": "Balance mission, service, people, legal obligations, resources, options, timelines, and residual risk.",
    "cannot_assume": "That the most dramatic technical option is automatically the best business decision.",
    "decision": "Which risk treatment is accepted and who owns implementation."
  },
  {
    "role": "Supplier or partner owner",
    "responsibility": "Coordinate approved external access, contracts, service dependencies, communication, evidence requests, and revocation.",
    "cannot_assume": "That historical approval or commercial importance makes current access permanent.",
    "decision": "Which supplier action or evidence is required under the approved relationship."
  },
  {
    "role": "Reviewer, mentor, or teacher",
    "responsibility": "Check fictional reasoning, evidence limits, safety, professionalism, consistency, portfolio quality, and learning growth.",
    "cannot_assume": "That polished design proves correct judgment.",
    "decision": "Which feedback, revision, reassessment, or readiness action is needed."
  }
];
const decisionModel = [
  {
    "step": "1",
    "title": "State the authorized purpose",
    "questions": "What fictional question must be answered, for whom, by when, and under which written authority?",
    "evidence": "Task request, authorization memo, owner statement, policy reference, and time window.",
    "output": "One-sentence purpose and scope statement.",
    "stop": "Pause if permission, owner, purpose, or boundaries are missing or contradictory."
  },
  {
    "step": "2",
    "title": "Map affected people, systems, and data",
    "questions": "Who may be affected, which services matter, what information is sensitive, and what dependencies exist?",
    "evidence": "Architecture, service catalog, data classification, user roles, owner notes, and dependency map.",
    "output": "Stakeholder and impact map.",
    "stop": "Pause if unexpected private or highly sensitive information appears."
  },
  {
    "step": "3",
    "title": "Separate facts, conclusions, and unknowns",
    "questions": "What is directly observed, what is reasonably supported, what alternatives exist, and what cannot be proven?",
    "evidence": "Fictional logs, alerts, messages, configuration, source-health records, and owner confirmations.",
    "output": "Evidence register with confidence and limitations.",
    "stop": "Pause if source integrity or handling becomes uncertain."
  },
  {
    "step": "4",
    "title": "Check necessity and minimum action",
    "questions": "What is the least access, data, action, time, and disruption required to answer the approved question?",
    "evidence": "Scope, privacy rules, service needs, available controls, and alternate actions.",
    "output": "Minimum-necessary action proposal.",
    "stop": "Pause if the proposed action exceeds purpose or collects unrelated information."
  },
  {
    "step": "5",
    "title": "Compare harm and proportionality",
    "questions": "What harm could the action prevent, what harm could the action create, and which option best balances both?",
    "evidence": "Risk context, service criticality, user impact, control state, rollback, and residual uncertainty.",
    "output": "Option comparison with rationale.",
    "stop": "Pause if broad or irreversible action is proposed without sufficient evidence and authority."
  },
  {
    "step": "6",
    "title": "Verify authority and approval gates",
    "questions": "Who may recommend, approve, execute, communicate, validate, and accept residual risk?",
    "evidence": "Role map, delegation, policy, incident plan, supplier agreement, and owner confirmation.",
    "output": "Decision and approval map.",
    "stop": "Pause if the action owner or approving authority is unclear."
  },
  {
    "step": "7",
    "title": "Act safely and preserve evidence",
    "questions": "How will the authorized action remain reversible, traceable, privacy-aware, service-aware, and evidence-preserving?",
    "evidence": "Action plan, change record, backup or rollback, handling log, communication plan, and monitoring.",
    "output": "Controlled action record.",
    "stop": "Stop if service instability, scope expansion, unexpected data, or evidence damage occurs."
  },
  {
    "step": "8",
    "title": "Validate, communicate, and improve",
    "questions": "Did the intended state occur, did service remain acceptable, what remains uncertain, and what should improve?",
    "evidence": "Effective-state checks, service tests, source health, owner signoff, user state, metrics, and review notes.",
    "output": "Validation, residual-risk, communication, reflection, and improvement record.",
    "stop": "Do not claim closure until required technical and operational checks are complete."
  }
];
const evidenceMatrix = [
  {
    "id": "E-A1",
    "source": "Fictional written authorization memo",
    "observation": "Approves review of two named training systems from 9:00 AM to 1:00 PM using supplied logs only.",
    "supports": "Limited authority exists for two systems, one evidence type, and a defined time window.",
    "limits": "Does not authorize live testing, additional systems, private user records, configuration changes, or public disclosure.",
    "professional_use": "Use as the primary scope boundary and stop any request that exceeds it."
  },
  {
    "id": "E-A2",
    "source": "Fictional supervisor chat",
    "observation": "Requests a full employee mailbox export because it may contain useful clues.",
    "supports": "A request for broader data collection was made.",
    "limits": "Does not prove the requester has data-owner or privacy authority and does not override written scope.",
    "professional_use": "Pause, document the conflict, and escalate for proper approval and minimum-necessary alternatives."
  },
  {
    "id": "E-A3",
    "source": "Fictional alert summary",
    "observation": "One account generated a High alert after an unusual sign-in.",
    "supports": "A detection condition occurred for one account.",
    "limits": "Does not prove compromise, intent, data access, or organization-wide impact.",
    "professional_use": "Use targeted identity review rather than broad accusation or maximum containment."
  },
  {
    "id": "E-A4",
    "source": "Fictional service-health dashboard",
    "observation": "Authentication and support services remain available with normal response times.",
    "supports": "No current service outage appears in the supplied health view.",
    "limits": "Does not prove every function or security control is healthy.",
    "professional_use": "Consider targeted reversible controls before broad shutdown."
  },
  {
    "id": "E-A5",
    "source": "Fictional privacy classification note",
    "observation": "Employee mailbox content is classified confidential and requires data-owner approval.",
    "supports": "Special handling and approval are required.",
    "limits": "Does not determine whether any particular message is relevant.",
    "professional_use": "Restrict access and seek a narrower owner-approved evidence request."
  },
  {
    "id": "E-A6",
    "source": "Fictional automated-response proposal",
    "observation": "Would disable any account after one High alert without human review or rollback testing.",
    "supports": "The proposal lacks an approval gate and may create user or service harm.",
    "limits": "Does not prove all automation is unsafe.",
    "professional_use": "Recommend enrichment, human approval, limited actions, rollback, validation, and exception handling."
  },
  {
    "id": "E-A7",
    "source": "Fictional owner statement",
    "observation": "The affected account supports an important overnight service and cannot be disabled casually.",
    "supports": "The account has a service dependency requiring continuity planning.",
    "limits": "Does not prove the sign-in is expected or that access should remain unchanged.",
    "professional_use": "Coordinate targeted session, credential, and service checks with the owner."
  },
  {
    "id": "E-A8",
    "source": "Fictional review note",
    "observation": "A previous analyst copied an unsupported compromise claim into a leadership message.",
    "supports": "The communication exceeded the evidence.",
    "limits": "Does not prove intentional deception.",
    "professional_use": "Correct the record, explain evidence limits, document revision, and improve review controls."
  }
];
const professionalTests = [
  {
    "test": "Authorized?",
    "strong_question": "Is the exact action permitted by written scope and the correct owner?",
    "weak_shortcut": "I have access, so I can do it.",
    "evidence_needed": "Authorization, role, system, method, time, data, and approval."
  },
  {
    "test": "Necessary?",
    "strong_question": "Is this action or information actually required to answer the approved question?",
    "weak_shortcut": "More data is always better.",
    "evidence_needed": "Purpose, relevance, minimum fields, alternatives, and expected decision value."
  },
  {
    "test": "Proportionate?",
    "strong_question": "Does the action match the evidence, urgency, service context, and possible harm?",
    "weak_shortcut": "The alert is High, so use the strongest action.",
    "evidence_needed": "Impact, service state, available targeted controls, continuity, and residual risk."
  },
  {
    "test": "Privacy-aware?",
    "strong_question": "Does the plan minimize collection, viewing, storage, sharing, retention, and exposure?",
    "weak_shortcut": "Security work has automatic access to private information.",
    "evidence_needed": "Classification, owner approval, purpose, minimum necessary, storage, sharing, and deletion."
  },
  {
    "test": "Reversible?",
    "strong_question": "Can the action be safely undone if evidence changes or service impact appears?",
    "weak_shortcut": "Permanent action is faster.",
    "evidence_needed": "Rollback, backup, session plan, dependency check, owner approval, and test."
  },
  {
    "test": "Evidence-preserving?",
    "strong_question": "Will records remain accurate, contextual, traceable, and available for review?",
    "weak_shortcut": "Screenshots alone are enough.",
    "evidence_needed": "Source, timestamp, provenance, handling, integrity, context, and limitation."
  },
  {
    "test": "Owner-aware?",
    "strong_question": "Are recommendation, approval, execution, communication, validation, and risk acceptance assigned correctly?",
    "weak_shortcut": "Security owns every decision.",
    "evidence_needed": "Role map, delegation, service owner, data owner, risk owner, and escalation path."
  },
  {
    "test": "Validated?",
    "strong_question": "What measurable result proves the action worked without unacceptable harm?",
    "weak_shortcut": "The ticket is complete, so the problem is solved.",
    "evidence_needed": "Effective state, service, source health, user state, owner signoff, monitoring, and residual risk."
  }
];
const commonMistakes = [
  "Confusing technical ability, access, urgency, or supervisor pressure with written authorization.",
  "Collecting every available fictional record instead of using minimum-necessary evidence.",
  "Treating a High alert as proof of compromise, malicious intent, maximum impact, or one common cause.",
  "Blaming a fictional user before confirming what happened, what the user knew, and what the evidence can prove.",
  "Using broad irreversible containment when targeted reversible controls can reduce risk safely.",
  "Allowing real names, screenshots, logs, private messages, employee records, or school records into a portfolio artifact.",
  "Copying a tool or vendor conclusion without validating the underlying evidence and source coverage.",
  "Failing to pause when scope, authority, privacy, evidence integrity, or service safety becomes uncertain.",
  "Hiding mistakes, uncertainty, conflicts of interest, or evidence limitations to appear more confident.",
  "Treating completed actions, quiet dashboards, or closed tickets as validated outcomes.",
  "Using different facts in technical, leadership, user, supplier, and portfolio messages.",
  "Assuming good intentions remove the possibility of harm, accountability, or the need for approval."
];
const quizQuestions = [
  {
    "question": "What best defines professional responsibility in fictional cybersecurity work?",
    "choices": [
      "Using technical knowledge carefully, lawfully, ethically, accurately, and in ways that protect people, systems, data, services, evidence, privacy, and trust.",
      "Using every available tool whenever risk seems possible.",
      "Following any request from a more senior person.",
      "Keeping findings secret from all owners."
    ],
    "answer": 0,
    "explanation": "Professional responsibility combines technical competence with authorization, safety, evidence, privacy, ownership, and accountability."
  },
  {
    "question": "A fictional analyst has technical access to a mailbox, but the written scope allows supplied authentication logs only. What is strongest?",
    "choices": [
      "Access proves permission.",
      "The analyst should export the mailbox because it may help.",
      "The analyst should pause and seek proper data-owner and privacy approval or a narrower alternative.",
      "The analyst should ask another student to export it."
    ],
    "answer": 2,
    "explanation": "Technical capability and system access do not replace written authorization or data-owner approval."
  },
  {
    "question": "Which fictional response best demonstrates proportionality?",
    "choices": [
      "Disable every account after one unusual sign-in.",
      "Use targeted, reversible, owner-approved identity checks while service remains stable.",
      "Ignore the alert because no outage exists.",
      "Publish the alert to warn others."
    ],
    "answer": 1,
    "explanation": "A proportionate response matches the current evidence and service context while reducing risk safely."
  },
  {
    "question": "What is the strongest reason to use minimum-necessary evidence?",
    "choices": [
      "It reduces privacy exposure and keeps collection tied to the authorized purpose.",
      "It guarantees every conclusion is correct.",
      "It removes the need for documentation.",
      "It allows analysts to avoid owner review."
    ],
    "answer": 0,
    "explanation": "Minimum-necessary handling reduces unnecessary access and supports purpose limitation."
  },
  {
    "question": "Which event should trigger a fictional professional stop condition?",
    "choices": [
      "The analyst has an interesting idea.",
      "Unexpected confidential data appears outside the approved scope.",
      "The dashboard is visually confusing.",
      "The task is taking longer than expected but remains authorized."
    ],
    "answer": 1,
    "explanation": "Unexpected sensitive information can create privacy and authorization risk and should trigger a pause and escalation."
  },
  {
    "question": "Why is ticket completion not enough to prove professional success?",
    "choices": [
      "The effective state, service function, source health, user impact, owner signoff, monitoring, and residual risk still require validation.",
      "Tickets are never useful.",
      "Only leadership can validate technical actions.",
      "Validation applies only after outages."
    ],
    "answer": 0,
    "explanation": "Completion records that an action was attempted; validation proves the intended outcome."
  },
  {
    "question": "What makes a fictional professional-responsibility portfolio artifact safe to share?",
    "choices": [
      "Only passwords are removed.",
      "Real evidence is shortened.",
      "The organization name is changed.",
      "Every organization, system, identity, message, log, record, decision, date, action, and outcome is invented."
    ],
    "answer": 3,
    "explanation": "Full fictionalization protects privacy and keeps the work safe and ethical."
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
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Module A1
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

export default function ProfessionalResponsibilityInCybersecurityPage() {
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
              Module A1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Professional Ethics
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.1 Professional Responsibility in Cybersecurity
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn why advanced cybersecurity begins with professional duty:
            protect people, systems, information, services, evidence, privacy,
            trust, and public safety while staying inside written authority and
            communicating only what fictional evidence can support.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A1: Advanced Cyber Ethics and Legal Boundaries"
          lessonTitle="Professional Responsibility in Cybersecurity"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, messages, logs, records, decisions, actions, dates, and outcomes.",
            "I understand that technical ability, curiosity, urgency, system access, or a verbal request does not automatically create authorization.",
            "I will not access, scan, test, alter, bypass, investigate, or disclose any real system without explicit written authorization.",
            "I will not upload or reproduce real credentials, suspicious files, private messages, employee records, school records, screenshots, logs, or confidential information.",
            "I will distinguish observations, supported conclusions, alternate explanations, possible impact, confirmed impact, and unknowns.",
            "I will pause and escalate when scope, authority, privacy, evidence integrity, competence, service safety, or conflicts of interest are unclear.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Defender Can Cause Harm Even While Trying to Help"
        >
          <p className="leading-8">
            A fictional analyst receives one High alert for an account used by
            an important overnight service. A supervisor asks for a full
            employee mailbox export, even though the written authorization
            allows only supplied authentication logs. The analyst has technical
            access and believes more data might help. Professional
            responsibility requires the analyst to pause, preserve the written
            boundary, protect private information, identify the correct owner,
            choose a minimum-necessary alternative, and document the decision.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Technically possible
              </p>
              <p className="mt-2 leading-7">
                Export the mailbox, disable the account immediately, copy the
                alert's compromise label, and explain the decision after the
                work is complete.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professionally responsible
              </p>
              <p className="mt-2 leading-7">
                Stay inside written scope, seek data-owner review, use targeted
                evidence, preserve service, separate alert from impact,
                document authority, and validate every approved action.
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
          title="Professional Trust Is a Security Control"
        >
          <p className="leading-8">
            Organizations give defenders access to sensitive systems,
            identities, logs, configurations, communications, and decisions.
            That access is valuable only when the defender is predictable:
            respects written authority, protects privacy, states evidence
            limits, preserves service, reports mistakes, escalates uncertainty,
            and allows others to review the reasoning. When those habits fail,
            the defender can create privacy harm, outages, inaccurate
            accusations, lost evidence, legal risk, and damaged trust even
            without malicious intent.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Trust enables access",
                "Defenders receive sensitive visibility because owners expect careful, limited, documented use.",
              ],
              [
                "Trust improves decisions",
                "Accurate limitations prevent leadership, users, suppliers, and responders from acting on exaggeration.",
              ],
              [
                "Trust supports recovery",
                "Transparent actions, validation, and lessons learned make future controls and response stronger.",
              ],
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

        <SectionCard
          eyebrow="Core Model"
          title="Responsibility = Authority + Care + Accuracy + Accountability"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Authority",
                "Know exactly who approved the task, what is included, which actions are allowed, when work must stop, and who owns each decision.",
              ],
              [
                "Care",
                "Use minimum-necessary access and proportionate reversible actions that protect people, privacy, services, and evidence.",
              ],
              [
                "Accuracy",
                "Separate observations from conclusions, preserve limitations, avoid blame, and correct the record when new evidence appears.",
              ],
              [
                "Accountability",
                "Document decisions, owners, actions, validation, communication, residual risk, mistakes, feedback, and improvements.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Professional Responsibility"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Responsibility Domains
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Areas a Professional Defender Must Protect
          </h2>

          <div className="mt-6 grid gap-5">
            {responsibilityDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.domain}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.duty}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidence_question}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak pattern
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_pattern}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong output
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_output}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Stakeholder and Authority Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Responsibility Is Shared, but Decisions Are Not Interchangeable
          </h2>

          <div className="mt-6 grid gap-5">
            {stakeholders.map((item) => (
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
                    ["Cannot assume", item.cannot_assume],
                    ["Typical decision", item.decision],
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
            Professional Decision Model
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Request to Validated Outcome
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionModel.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.5fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Decision Tests
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before a Defender Proceeds
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {professionalTests.map((item) => (
              <article
                key={item.test}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.test}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.strong_question}
                </p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Unsafe shortcut
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.weak_shortcut}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence needed
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.evidence_needed}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Professional Responsibility Dashboard"
          subtitle="Fictional ethics and authorization review for training only."
          metrics={[
            {
              label: "Written scope",
              value: "Limited",
              note: "Two training systems, supplied authentication logs, and a four-hour review window are approved.",
            },
            {
              label: "Privacy conflict",
              value: "Open",
              note: "A mailbox-export request exceeds the current evidence and data-authorization boundary.",
            },
            {
              label: "Service status",
              value: "Stable",
              note: "Important authentication and support functions remain available while targeted review continues.",
            },
          ]}
        />

        <FakeAlertCard
          title="Request Exceeds Written Authorization and Minimum-Necessary Evidence"
          severity="High"
          time="10:18 AM"
          source="Fake Northbridge Ethics Review Console"
          details="A fictional supervisor requests a full confidential mailbox export even though the approved task permits supplied authentication logs for two named training systems only."
          recommendation="Pause the expanded request, preserve the written scope, document the conflict, identify the data owner and privacy reviewer, propose a narrower evidence request, and continue only after appropriate approval."
        />

        <FakeLogPanel
          title="Fake Professional Responsibility Decision Timeline"
          logs={[
            "09:00 AUTH scope='two-training-systems'",
            "09:02 AUTH evidence='supplied-auth-logs-only'",
            "09:05 AUTH window='09:00-13:00'",
            "09:20 ALERT identity='svc-night-01' severity='High'",
            "09:24 SERVICE authentication='healthy'",
            "09:25 SERVICE support='healthy'",
            "09:30 REQUEST mailbox-export='full'",
            "09:31 SCOPE mailbox-export='not-approved'",
            "09:35 PRIVACY classification='confidential'",
            "09:37 OWNER data-approval='required'",
            "09:40 DECISION expanded-request='paused'",
            "09:45 OPTION targeted-auth-review='available'",
            "09:50 OWNER service-dependency='confirmed'",
            "10:00 ACTION targeted-review='proposed'",
            "10:10 COMM supervisor='scope-conflict-documented'",
            "10:18 ESCALATION privacy-owner='requested'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Each Source Supports and What It Cannot Prove
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
                    ["Professional use", item.professional_use],
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
          title="What Should the Fictional Analyst Do Next?"
          evidence={[
            "Written authorization permits supplied authentication logs for two named training systems only.",
            "The mailbox export request is outside that written scope.",
            "Mailbox content is classified confidential and requires data-owner approval.",
            "One High identity alert exists, but compromise, intent, mailbox access, and wider impact are unconfirmed.",
            "Authentication and support services remain stable.",
            "The affected account has an important service dependency.",
            "A targeted identity review can continue using approved evidence.",
          ]}
          options={[
            "Pause the mailbox request, document the scope conflict, seek proper data-owner and privacy approval or a narrower evidence request, and continue targeted authorized review.",
            "Export the mailbox because the supervisor requested it.",
            "Disable every account immediately because the alert is High.",
            "Ignore the alert because services remain available.",
          ]}
          bestAnswer={0}
          explanation="The strongest response protects written scope, privacy, service continuity, evidence accuracy, and ownership while continuing proportionate authorized review."
        />

        <SectionCard
          eyebrow="Common Professional Mistakes"
          title="Patterns That Damage Trust Even without Malicious Intent"
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
          title="Build a Fictional Professional Responsibility Decision Record"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Resolve the Northbridge Scope and Privacy Conflict
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the evidence on this page. Do not visit, test, access,
                or reproduce any real system, account, mailbox, message, log,
                file, organization, or incident.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>One-sentence professional duty and authorized purpose.</li>
                <li>Written scope table with included and excluded systems, evidence, actions, time, and data.</li>
                <li>Stakeholder, owner, and decision-authority map.</li>
                <li>Evidence register separating facts, conclusions, alternatives, limitations, and unknowns.</li>
                <li>Minimum-necessary evidence proposal.</li>
                <li>Three-option action comparison covering privacy, service, reversibility, and residual risk.</li>
                <li>Selected recommendation with approval gates and stop conditions.</li>
                <li>Validation, communication, reflection, revision, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Everything must remain invented. Do not copy, lightly edit, upload,
            or summarize real authorization letters, internal policies,
            employee information, private communications, screenshots, logs,
            incidents, systems, or confidential security records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Supervisor Says, 'Do It Now'"
          scenario="The fictional supervisor requests a confidential mailbox export that is not included in the written scope. The analyst has technical access, but the data owner and privacy reviewer have not approved the request."
          choices={[
            {
              label: "Choice A",
              response: "Pause the request, document the conflict, explain the written boundary, propose a narrower authorized alternative, and escalate for proper approval.",
              outcome: "Best professional choice. Authority, privacy, minimum necessity, and accountability remain protected.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Perform the export because the supervisor is senior.",
              outcome: "Risky. Seniority and urgency do not automatically create data-owner or legal authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Secretly ask another analyst to export it.",
              outcome: "Unsafe. This avoids accountability and does not repair the authorization problem.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The High Alert Involves a Critical Service Account"
          scenario="The fictional account supports an important overnight service. One unusual sign-in triggered a High alert, services remain stable, and compromise is unconfirmed."
          choices={[
            {
              label: "Choice A",
              response: "Coordinate a targeted, reversible, owner-approved identity review and containment plan with service-health monitoring and validation.",
              outcome: "Best professional choice. The response reduces risk while preserving evidence, authority, and continuity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the account immediately without checking dependencies.",
              outcome: "Risky. The action may create avoidable service harm and lacks proportionality.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Close the alert because services are healthy.",
              outcome: "Unsafe. Service availability does not resolve the identity concern.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Professional Responsibility Checklist"
          items={[
            "I can explain the fictional professional duty to protect people, systems, data, services, evidence, privacy, trust, and public safety.",
            "I can separate technical access, ability, curiosity, urgency, business pressure, and good intentions from written authority.",
            "I can define fictional purpose, scope, systems, identities, data, actions, methods, time windows, owners, approval gates, and stop conditions.",
            "I can identify fictional system, service, data, risk, action, communication, supplier, privacy, and review owners.",
            "I can use minimum-necessary fictional evidence and avoid unrelated private or confidential information.",
            "I can distinguish fictional observations, conclusions, alternatives, possible impact, confirmed impact, and unknowns.",
            "I can compare fictional action options for necessity, proportionality, reversibility, service impact, privacy, evidence preservation, and residual risk.",
            "I can pause and escalate when fictional scope, authority, privacy, competence, evidence integrity, service safety, or conflicts are uncertain.",
            "I can define fictional validation measures for effective state, service, source health, user impact, owner signoff, monitoring, and residual risk.",
            "I can create consistent fictional technical, service, leadership, user, supplier, teacher, and portfolio communication.",
            "I can document fictional mistakes, corrections, feedback, revision, unresolved questions, and long-term improvement.",
            "I will never use real systems, credentials, suspicious files, private messages, employee records, school records, screenshots, logs, incidents, or confidential security information.",
          ]}
        />

        <MiniQuiz
          title="A1.1 Mini Quiz: Professional Responsibility in Cybersecurity"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Professional Responsibility and Decision Record for the Northbridge training scenario. Include the professional duty, authorized purpose, written scope, excluded actions, stakeholder and authority map, privacy boundary, evidence register, minimum-necessary proposal, three-option comparison, recommendation, approval gates, stop conditions, action record, validation plan, multi-audience communication, residual risk, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Use only invented organizations, systems, identities, records, messages, dates, actions, decisions, and outcomes.",
            "Make the written authorization boundary visible before discussing any technical response.",
            "Separate what the fictional evidence confirms from what remains possible, alternative, or unknown.",
            "Show why professional responsibility includes people, privacy, service continuity, evidence, ownership, communication, validation, and improvement.",
            "Include at least one correction made after feedback and explain how the revision improved safety or accuracy.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Professional cybersecurity responsibility begins before any technical action.",
            "Technical ability, access, curiosity, urgency, senior pressure, and helpful intent do not replace written authorization.",
            "Defenders protect people, systems, data, services, evidence, privacy, trust, and public safety at the same time.",
            "Minimum-necessary evidence and proportionate reversible action reduce unnecessary harm.",
            "Observations, supported conclusions, alternatives, possible impact, confirmed impact, and unknowns must remain separate.",
            "Responsibility is shared across stakeholders, but recommendation, approval, execution, communication, validation, and risk acceptance belong to different authorized roles.",
            "Completed actions are not validated outcomes, and quiet dashboards are not proof of closure.",
            "Professional trust grows through accurate communication, transparent limits, documented decisions, correction of mistakes, and measurable improvement.",
            "Every CyberShield Advanced artifact must remain fully fictional, defensive, authorized, privacy-safe, and suitable for responsible sharing.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A1
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