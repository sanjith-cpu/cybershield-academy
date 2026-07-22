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
const modulePath = `${trackPath}/security-policies-and-risk`;
const previousPage = modulePath;
const nextLesson = `${modulePath}/risk-identification-and-assessment`;

const objectives = [
  "Explain how fictional security governance connects mission, leadership, policy ownership, accountability, ethics, risk decisions, control operation, and review.",
  "Distinguish fictional policy, standard, procedure, guideline, baseline, control, evidence, exception, risk acceptance, and escalation responsibilities.",
  "Build a fictional governance model that assigns decision authority to leadership, policy owners, control owners, asset owners, data owners, reviewers, and responders.",
  "Evaluate fictional governance gaps by correlating policy text, approvals, control evidence, exceptions, incidents, business priorities, ownership, and review cycles.",
  "Create a portfolio-safe fictional governance package with a responsibility matrix, policy lifecycle, decision log, escalation map, evidence register, findings, and improvement plan."
];
const vocabulary = [
  [
    "Security governance",
    "The fictional system of leadership, authority, accountability, policy, oversight, evidence, risk decision-making, and review used to guide security work."
  ],
  [
    "Policy",
    "A fictional leadership-approved statement of required security direction, responsibility, and expected outcomes."
  ],
  [
    "Standard",
    "A fictional mandatory rule that translates policy into specific measurable requirements."
  ],
  [
    "Procedure",
    "A fictional step-by-step method used to carry out a policy, standard, control, review, or response task."
  ],
  [
    "Guideline",
    "A fictional recommended practice that supports consistent decisions while allowing justified flexibility."
  ],
  [
    "Baseline",
    "A fictional approved minimum security configuration or control state for a defined type of asset, service, identity, or data."
  ],
  [
    "Control owner",
    "The fictional person or team accountable for designing, operating, testing, monitoring, improving, and evidencing a security control."
  ],
  [
    "Policy owner",
    "The fictional person or team accountable for policy content, approvals, review cycle, exceptions, communication, and updates."
  ],
  [
    "Risk owner",
    "The fictional business decision-maker accountable for understanding, accepting, reducing, transferring, or avoiding a risk."
  ],
  [
    "Asset owner",
    "The fictional person accountable for a system, service, device, application, or resource and its business use, protection, lifecycle, and support."
  ],
  [
    "Data owner",
    "The fictional person accountable for classification, access, retention, protection, sharing, quality, recovery, and approved use of a data set."
  ],
  [
    "Accountability",
    "A fictional obligation to explain decisions, operate assigned controls, preserve evidence, report gaps, and complete required actions."
  ],
  [
    "Authority",
    "The fictional approved power to make a specific security, risk, access, policy, change, incident, or exception decision."
  ],
  [
    "Oversight",
    "A fictional review function that checks whether governance, policies, controls, owners, evidence, and risk decisions remain effective."
  ],
  [
    "Exception",
    "A fictional approved departure from a policy, standard, baseline, or control with narrow scope, owner, reason, compensating controls, residual risk, expiration, and removal plan."
  ],
  [
    "Escalation",
    "A fictional process for moving a decision, conflict, risk, delay, control failure, or incident to a person with the required authority."
  ]
];
const governanceLayers = [
  {
    "layer": "Mission and business direction",
    "purpose": "Explains why the fictional organization exists, which services matter, which users depend on them, and which outcomes leadership must protect.",
    "owner": "Executive Leadership",
    "evidence": "Mission statement, service priorities, strategic plan, critical-service list, and leadership decisions.",
    "failure": "Security work becomes disconnected from actual business needs and user impact."
  },
  {
    "layer": "Leadership and risk authority",
    "purpose": "Defines who may approve policy, accept residual risk, fund controls, set priorities, and resolve conflicts.",
    "owner": "Executive Risk Committee",
    "evidence": "Committee charter, approval records, risk decisions, funding decisions, and escalation outcomes.",
    "failure": "High-risk decisions remain informal, delayed, or assigned to people without authority."
  },
  {
    "layer": "Policy direction",
    "purpose": "States fictional mandatory outcomes for identity, data, systems, suppliers, logging, recovery, incident response, and security behavior.",
    "owner": "Security Policy Owner",
    "evidence": "Approved policies, version history, review schedule, communication record, and exception register.",
    "failure": "Controls operate without clear direction or different teams interpret requirements inconsistently."
  },
  {
    "layer": "Standards and baselines",
    "purpose": "Turns fictional policy into measurable technical and operational requirements.",
    "owner": "Security Architecture and Governance",
    "evidence": "Standards, baselines, configuration requirements, control mappings, and validation criteria.",
    "failure": "Policies remain too general to test, automate, or enforce consistently."
  },
  {
    "layer": "Procedures and operations",
    "purpose": "Explains how fictional teams perform access reviews, change approvals, backups, logging checks, vendor reviews, incident actions, and evidence collection.",
    "owner": "Operational Control Owners",
    "evidence": "Procedures, runbooks, tickets, checklists, action logs, and operating records.",
    "failure": "Required controls exist on paper but are not performed consistently."
  },
  {
    "layer": "Control evidence and monitoring",
    "purpose": "Shows whether fictional controls operate, fail, drift, improve, and reduce risk over time.",
    "owner": "Control Owners and Security Operations",
    "evidence": "Logs, test results, metrics, alerts, reviews, validation records, and issue tracking.",
    "failure": "Leadership cannot distinguish a stated control from an effective control."
  },
  {
    "layer": "Independent review and assurance",
    "purpose": "Challenges fictional assumptions, validates evidence, tests governance, and identifies blind spots or conflicts.",
    "owner": "Independent Review Function",
    "evidence": "Assurance reviews, audit-style findings, peer reviews, exception checks, and remediation validation.",
    "failure": "The same team designs, operates, approves, and validates its own controls without challenge."
  },
  {
    "layer": "Continuous improvement",
    "purpose": "Updates fictional policies, controls, ownership, training, metrics, and response practices after changes, incidents, failures, and lessons learned.",
    "owner": "Governance Improvement Lead",
    "evidence": "Lessons learned, review actions, policy updates, control changes, due dates, owners, and closure evidence.",
    "failure": "Known weaknesses return because no one converts lessons into lasting governance changes."
  }
];
const governanceRoles = [
  {
    "role": "Executive leadership",
    "authority": "Approve fictional strategic direction, policy, funding, major risk acceptance, and organization-wide priorities.",
    "evidence": "Signed approvals, meeting records, risk decisions, funding actions, and executive communication.",
    "boundary": "Leadership should not silently delegate major risk acceptance to technical staff without clear authority.",
    "handoff": "Receives evidence-based recommendations from governance and risk owners."
  },
  {
    "role": "Risk owner",
    "authority": "Choose fictional risk treatment and accept residual business risk within an approved authority level.",
    "evidence": "Risk register, treatment options, impact analysis, control evidence, decision, rationale, and review date.",
    "boundary": "Risk owners need technical evidence but should not pretend to validate controls they do not operate.",
    "handoff": "Works with control, asset, data, legal, privacy, continuity, and leadership owners."
  },
  {
    "role": "Policy owner",
    "authority": "Draft, maintain, review, communicate, and propose approval of fictional security policies.",
    "evidence": "Policy version, owner, reviewers, approvals, publication, training, exceptions, and review schedule.",
    "boundary": "A policy owner should not approve their own exception if the exception changes business risk.",
    "handoff": "Coordinates with standards, control, risk, and business owners."
  },
  {
    "role": "Control owner",
    "authority": "Design, operate, test, monitor, improve, and evidence a fictional preventive, detective, corrective, recovery, or governance control.",
    "evidence": "Control design, operating records, tests, metrics, failures, remediation, and validation.",
    "boundary": "Control ownership does not automatically grant authority to accept residual risk.",
    "handoff": "Reports control health and gaps to policy and risk owners."
  },
  {
    "role": "Asset or service owner",
    "authority": "Approve fictional business use, access needs, lifecycle, service priorities, support, and change decisions for an asset or service.",
    "evidence": "Asset register, service map, access approvals, change records, criticality, dependencies, and lifecycle decisions.",
    "boundary": "Asset ownership does not replace data ownership, security control ownership, or risk acceptance authority.",
    "handoff": "Coordinates with data, identity, network, application, and recovery owners."
  },
  {
    "role": "Data owner",
    "authority": "Approve fictional classification, access, retention, sharing, protection, recovery, and acceptable use for a data set.",
    "evidence": "Classification, access decisions, retention schedule, sharing agreements, recovery needs, and periodic reviews.",
    "boundary": "A data owner should not assume every technical copy or path is visible without system evidence.",
    "handoff": "Works with asset, storage, application, privacy, security, and recovery owners."
  },
  {
    "role": "Independent reviewer",
    "authority": "Evaluate fictional governance, policy, controls, evidence, exceptions, and remediation without operating the reviewed control.",
    "evidence": "Review plan, criteria, evidence notes, findings, confidence, limitations, owner responses, and closure validation.",
    "boundary": "Independent review should challenge evidence without taking over management decisions.",
    "handoff": "Reports findings to governance, risk owners, and authorized leadership."
  },
  {
    "role": "Incident and escalation lead",
    "authority": "Coordinate fictional urgent security decisions, evidence preservation, containment, communication, and escalation within an approved charter.",
    "evidence": "Incident charter, action log, approvals, timeline, decisions, communication, recovery, and closure.",
    "boundary": "Incident authority is time-bound and does not permanently replace normal policy and risk governance.",
    "handoff": "Returns long-term issues to policy, control, risk, asset, and leadership owners."
  }
];
const policyLifecycle = [
  {
    "stage": "1",
    "title": "Trigger and scope",
    "detail": "A fictional business change, risk, incident, legal need, technology shift, supplier change, review date, or control failure creates a need for policy work.",
    "evidence": "Trigger record, scope statement, owner, affected services, users, data, suppliers, and decision deadline."
  },
  {
    "stage": "2",
    "title": "Research and evidence",
    "detail": "The fictional policy owner gathers business, technical, operational, risk, privacy, legal, recovery, supplier, and user evidence.",
    "evidence": "Evidence register, source health, stakeholder input, assumptions, alternatives, and known limitations."
  },
  {
    "stage": "3",
    "title": "Draft and map responsibilities",
    "detail": "The fictional policy defines required outcomes, scope, responsibilities, exceptions, evidence, enforcement, and review.",
    "evidence": "Draft policy, responsibility matrix, control mapping, exception process, and version record."
  },
  {
    "stage": "4",
    "title": "Review and challenge",
    "detail": "Fictional technical, business, risk, privacy, legal, continuity, accessibility, and operational reviewers challenge ambiguity and feasibility.",
    "evidence": "Review comments, conflicts, alternatives, accepted changes, rejected changes, and rationale."
  },
  {
    "stage": "5",
    "title": "Approval and publication",
    "detail": "An authorized fictional decision-maker approves the policy and confirms effective date, scope, communication, and implementation ownership.",
    "evidence": "Approval record, final version, effective date, publication location, audience, and owner."
  },
  {
    "stage": "6",
    "title": "Implementation and communication",
    "detail": "Fictional standards, procedures, training, tools, contracts, controls, and owner actions put the policy into practice.",
    "evidence": "Implementation plan, communication record, training, control updates, supplier changes, and due dates."
  },
  {
    "stage": "7",
    "title": "Monitoring and exceptions",
    "detail": "The fictional organization checks control operation, compliance, exceptions, incidents, metrics, and unintended effects.",
    "evidence": "Control records, metrics, alerts, exception register, incidents, user feedback, and owner review."
  },
  {
    "stage": "8",
    "title": "Review, update, or retire",
    "detail": "The fictional policy is reviewed after the stated cycle or major change and is updated, renewed, replaced, or retired.",
    "evidence": "Review decision, current risk, lessons learned, version change, retirement plan, and archive."
  }
];
const governanceRecords = [
  {
    "id": "NBR-GOV-01",
    "record": "Information Security Policy",
    "observation": "The fictional policy requires annual review, but the last approval is eighteen fictional months old.",
    "meaning": "The policy review cycle is overdue and current applicability must be confirmed.",
    "limit": "An overdue review does not prove the policy is ineffective or ignored.",
    "owner": "Security Policy Owner"
  },
  {
    "id": "NBR-GOV-02",
    "record": "Vendor access exception",
    "observation": "A fictional supplier access exception expired thirty fictional days ago while the supplier account remains active.",
    "meaning": "The exception and access require immediate owner review and renewal or removal.",
    "limit": "No supplied evidence supports unauthorized use or data access.",
    "owner": "Third-Party Risk Owner"
  },
  {
    "id": "NBR-GOV-03",
    "record": "Critical recovery service",
    "observation": "A fictional critical reporting service has a technical operator but no confirmed recovery risk owner.",
    "meaning": "Operational responsibility exists, but business accountability for recovery decisions is unclear.",
    "limit": "The service may still recover successfully despite the ownership gap.",
    "owner": "Business Service Executive"
  },
  {
    "id": "NBR-GOV-04",
    "record": "Access review control",
    "observation": "The fictional access review procedure is current, but one business unit has not completed its quarterly review.",
    "meaning": "The control is designed and operating elsewhere, but execution is incomplete for one scope.",
    "limit": "The delay does not prove inappropriate access exists.",
    "owner": "Identity Governance"
  },
  {
    "id": "NBR-GOV-05",
    "record": "Security metrics dashboard",
    "observation": "The fictional dashboard reports ninety-eight percent policy compliance without documenting excluded systems.",
    "meaning": "The metric may overstate coverage because the denominator and exclusions are unclear.",
    "limit": "The underlying controls may still perform well within the measured scope.",
    "owner": "Security Metrics Owner"
  },
  {
    "id": "NBR-GOV-06",
    "record": "Incident lessons learned",
    "observation": "A fictional incident review recommended stronger supplier offboarding, but no policy or procedure owner was assigned.",
    "meaning": "The improvement action lacks accountable ownership and may not become a lasting control change.",
    "limit": "Some operational changes may have occurred outside the supplied record.",
    "owner": "Governance Improvement Lead"
  },
  {
    "id": "NBR-GOV-07",
    "record": "Encryption standard",
    "observation": "The fictional encryption standard names required outcomes but not the team responsible for validating exceptions.",
    "meaning": "The standard has an accountability and exception-review gap.",
    "limit": "Individual exceptions may still have been reviewed through another process.",
    "owner": "Security Architecture"
  },
  {
    "id": "NBR-GOV-08",
    "record": "Executive risk decision",
    "observation": "A fictional executive accepted residual risk for six months, but the review date passed without renewal or closure evidence.",
    "meaning": "The risk decision is stale and requires reassessment.",
    "limit": "The underlying risk may have decreased, increased, or been remediated since the decision.",
    "owner": "Executive Risk Owner"
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional governance question",
    "detail": "Restate the decision, scope, authority, stakeholders, services, data, suppliers, evidence sources, time window, privacy limits, and prohibited real-world use.",
    "output": "Governance review charter."
  },
  {
    "step": "2",
    "title": "Map roles and authority",
    "detail": "Assign fictional leadership, risk, policy, control, asset, data, supplier, review, incident, and escalation responsibilities.",
    "output": "Governance responsibility matrix."
  },
  {
    "step": "3",
    "title": "Map policy hierarchy",
    "detail": "Connect fictional policy, standards, baselines, procedures, guidelines, controls, evidence, exceptions, and review cycles.",
    "output": "Policy and control hierarchy."
  },
  {
    "step": "4",
    "title": "Validate evidence and ownership",
    "detail": "Review fictional approvals, versions, operating records, metrics, incidents, exceptions, owner actions, source health, and missing evidence.",
    "output": "Governance evidence register."
  },
  {
    "step": "5",
    "title": "Identify governance gaps",
    "detail": "Separate fictional overdue review, unclear authority, missing ownership, weak evidence, incomplete operation, stale exception, and unsupported conclusions.",
    "output": "Governance findings matrix."
  },
  {
    "step": "6",
    "title": "Prioritize decisions",
    "detail": "Compare fictional business criticality, exposure, control failure, uncertainty, dependencies, decision deadlines, authority, and remediation readiness.",
    "output": "Risk-ranked governance backlog."
  },
  {
    "step": "7",
    "title": "Assign improvement actions",
    "detail": "Define fictional owners, approvals, due dates, communication, validation, monitoring, escalation, residual risk, and closure evidence.",
    "output": "Governance improvement plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional findings, alternatives, confidence, limitations, leadership decisions, lessons learned, policy updates, and portfolio safety.",
    "output": "Reviewed governance package."
  }
];
const findings = [
  {
    "id": "NBR-GOV-F01",
    "statement": "The fictional Information Security Policy is overdue for review and lacks current evidence that scope, owners, controls, and business priorities remain accurate.",
    "support": "Policy metadata, approval date, review requirement, current service inventory, owner record, and governance calendar.",
    "alternative": "The policy may remain substantively correct despite the overdue formal review.",
    "confidence": "High",
    "limitation": "No evidence shows that the policy was ignored or ineffective."
  },
  {
    "id": "NBR-GOV-F02",
    "statement": "The expired supplier exception and active account create an immediate governance decision gap requiring renewal or removal by the authorized owners.",
    "support": "Exception record, expiration date, supplier account status, sponsor record, access requirement, and third-party policy.",
    "alternative": "The supplier may still have a valid business need, but no current approval is supplied.",
    "confidence": "High",
    "limitation": "No unauthorized use, access, or disclosure is confirmed."
  },
  {
    "id": "NBR-GOV-F03",
    "statement": "The fictional critical reporting service lacks a confirmed business recovery risk owner even though technical operators are assigned.",
    "support": "Service register, criticality record, recovery plan, technical roster, executive ownership map, and escalation chart.",
    "alternative": "An informal executive owner may exist outside the supplied records.",
    "confidence": "Medium-High",
    "limitation": "The ownership gap does not prove the service cannot recover."
  },
  {
    "id": "NBR-GOV-F04",
    "statement": "The fictional policy-compliance metric is not leadership-ready because system exclusions and the measurement denominator are unclear.",
    "support": "Dashboard definition, scope notes, asset register, excluded-system list, control records, and metric-owner response.",
    "alternative": "The ninety-eight percent figure may be accurate within a narrower undocumented scope.",
    "confidence": "High",
    "limitation": "The finding concerns metric interpretation, not proof of poor control operation."
  },
  {
    "id": "NBR-GOV-F05",
    "statement": "The supplier-offboarding lesson from the fictional incident remains at risk of recurrence because no policy or procedure owner was assigned.",
    "support": "Incident review, improvement recommendation, action tracker, policy register, procedure register, and ownership matrix.",
    "alternative": "A team may have implemented an operational change without updating governance records.",
    "confidence": "Medium-High",
    "limitation": "The supplied evidence does not establish whether offboarding improved in practice."
  },
  {
    "id": "NBR-GOV-F06",
    "statement": "The safest governance improvement sequence begins with assigning decision authority and owners before revising policy text, metrics, exceptions, and procedures.",
    "support": "Ownership gaps, overdue decisions, stale exception, metric ambiguity, incident action, and policy lifecycle dependencies.",
    "alternative": "Immediate document edits may create visible progress but leave accountability unresolved.",
    "confidence": "High",
    "limitation": "Final sequencing remains subject to fictional executive authority."
  }
];
const commonMistakes = [
  "Treating fictional governance as document writing instead of a system of authority, accountability, evidence, decisions, and review.",
  "Assuming a policy owner, control owner, risk owner, asset owner, and data owner are always the same person.",
  "Allowing technical staff to accept business risk without documented authority.",
  "Treating an overdue policy review as proof that every control is ineffective.",
  "Treating a stale exception as proof of unauthorized activity or data disclosure.",
  "Using a policy-compliance percentage without defining scope, denominator, exclusions, evidence quality, and limitations.",
  "Writing a policy with no measurable standards, operating procedures, evidence, exception process, or review cycle.",
  "Assigning a control owner but no risk owner for decisions about residual business impact.",
  "Allowing the same fictional team to design, operate, approve, and independently validate the same control without challenge.",
  "Failing to convert incidents, failed controls, supplier issues, and lessons learned into policy, procedure, ownership, or training changes.",
  "Closing governance findings when a document changes without validating implementation, communication, control operation, and owner approval.",
  "Keeping expired exceptions, risk acceptances, supplier access, or review dates without active escalation.",
  "Confusing leadership accountability with detailed technical operation.",
  "Using or exposing any real company policy, internal governance record, supplier contract, risk decision, employee identity, school record, or confidential evidence."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of fictional security governance?",
    "choices": [
      "Connect leadership, authority, accountability, policy, controls, evidence, risk decisions, and review to the organization’s mission.",
      "Create as many documents as possible.",
      "Give every security decision to technical staff.",
      "Replace all operational controls."
    ],
    "answer": 0,
    "explanation": "Governance directs and oversees security decisions in support of organizational goals."
  },
  {
    "question": "Who should normally accept significant fictional residual business risk?",
    "choices": [
      "An authorized risk owner or leadership decision-maker with evidence and defined authority.",
      "Any analyst who found the issue.",
      "The control operator automatically.",
      "The vendor involved in the issue."
    ],
    "answer": 0,
    "explanation": "Risk acceptance is a business decision requiring documented authority."
  },
  {
    "question": "What is the difference between a fictional policy and procedure?",
    "choices": [
      "A policy states required direction and outcomes, while a procedure explains the steps for carrying out the requirement.",
      "A procedure is always optional and a policy is always technical.",
      "They are identical.",
      "A policy contains only screenshots."
    ],
    "answer": 0,
    "explanation": "Policies define direction; procedures define execution."
  },
  {
    "question": "Which conclusion about an overdue fictional policy review is strongest?",
    "choices": [
      "The policy requires current owner review, but the overdue date alone does not prove that the policy or controls are ineffective.",
      "Every control has failed.",
      "A confirmed incident occurred.",
      "The policy should be deleted immediately."
    ],
    "answer": 0,
    "explanation": "An overdue review is a governance gap with important evidence limits."
  },
  {
    "question": "What makes a fictional exception defensible?",
    "choices": [
      "Narrow scope, business reason, owner, compensating controls, residual risk, approval, expiration, review, and removal plan.",
      "A comment saying temporary.",
      "No expiration date.",
      "Approval by the person requesting the exception only."
    ],
    "answer": 0,
    "explanation": "Exceptions should be controlled, time-bound, reviewable risk decisions."
  },
  {
    "question": "Why is a fictional ninety-eight percent compliance metric incomplete without a denominator?",
    "choices": [
      "The reviewer cannot determine which systems were included, excluded, or measured.",
      "All percentages are inaccurate.",
      "Metrics should never be reported.",
      "A denominator proves control effectiveness automatically."
    ],
    "answer": 0,
    "explanation": "Scope and exclusions determine what a metric actually means."
  },
  {
    "question": "What makes a fictional governance finding defensible?",
    "choices": [
      "It links authority, ownership, policy, evidence, business context, alternatives, confidence, limitations, actions, validation, and review.",
      "It relies on one outdated document.",
      "It assumes missing evidence proves failure.",
      "It ignores leadership decisions."
    ],
    "answer": 0,
    "explanation": "Defensible governance analysis connects evidence, accountability, decisions, and limits."
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
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
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

export default function SecurityGovernancePolicyFoundationsPage() {
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
              Module I14
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14.1 Security Governance and Policy Foundations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional organizations connect mission, leadership,
            authority, accountability, policies, standards, procedures,
            controls, evidence, exceptions, risk ownership, escalation, and
            continuous improvement.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I14: Security Policies and Risk"
          lessonTitle="Security Governance and Policy Foundations"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge governance, policy, risk, ownership, and control records.",
            "I will not use, request, expose, or evaluate any real company policy, supplier contract, employee record, school record, internal audit, private risk register, credential, or confidential governance document.",
            "I will distinguish policy direction, operational control, evidence, ownership, authority, risk acceptance, and independent review.",
            "I will preserve alternatives, confidence, limitations, missing evidence, business context, and decision authority.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Policy Can Be Current on Paper and Weak in Practice"
        >
          <p className="leading-8">
            The fictional Northbridge organization has a published information
            security policy, access-review procedure, supplier exception
            process, recovery plan, incident lessons-learned process, and
            leadership dashboard. Yet the main policy review is overdue, one
            supplier exception expired, a critical service lacks a recovery
            risk owner, one business unit missed its access review, a dashboard
            hides excluded systems, and a lesson-learned action has no owner.
            Governance quality depends on more than the existence of documents.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak governance
              </p>

              <p className="mt-2 leading-7">
                Publish policies, assume teams follow them, report attractive
                percentages, and assign issues to technical staff without clear
                authority or business ownership.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional governance
              </p>

              <p className="mt-2 leading-7">
                Define authority, assign owners, connect policy to measurable
                standards and procedures, preserve evidence, review exceptions,
                validate controls, escalate stale decisions, and improve after
                change or failure.
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
          title="Security Decisions Fail when Ownership and Authority Are Unclear"
        >
          <p className="leading-8">
            Fictional organizations often have talented technical teams but
            unclear decision rights. A control owner may know that a safeguard
            is weak but lack authority to accept the business risk. A policy
            owner may maintain a document but not operate the control. An asset
            owner may approve service access but not own the data. A leader may
            see a compliance score without knowing the exclusions. Governance
            makes these boundaries explicit so decisions are accountable and
            reviewable.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Direction–Ownership–Evidence–Decision Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Direction", "Which fictional mission, leadership priority, policy, standard, baseline, procedure, guideline, or contract defines the expected outcome?"],
              ["Ownership", "Which fictional leader, risk owner, policy owner, control owner, asset owner, data owner, reviewer, responder, or supplier owns each responsibility?"],
              ["Evidence", "Which fictional approvals, versions, operating records, tests, metrics, incidents, exceptions, source-health notes, and reviews show actual performance?"],
              ["Decision", "Which fictional authority chooses treatment, accepts residual risk, approves exceptions, funds improvement, escalates failure, validates closure, and sets the next review?"],
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
            Governance, Policy, Ownership, and Decision Terms
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
            Governance Layers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Layers from Mission to Continuous Improvement
          </h2>

          <div className="mt-6 grid gap-5">
            {governanceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.layer}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure risk
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Governance Roles
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Roles, Authorities, Boundaries, and Handoffs
          </h2>

          <div className="mt-6 grid gap-5">
            {governanceRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Authority
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.authority}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Boundary
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.boundary}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Handoff
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.handoff}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Policy Lifecycle
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Stages of a Reviewable Fictional Policy
          </h2>

          <div className="mt-6 grid gap-5">
            {policyLifecycle.map((item) => (
              <article
                key={item.stage}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.4fr_1fr_0.8fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.stage}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">
                    Evidence:{" "}
                  </span>
                  {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Governance Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Governance Records
          </h2>

          <div className="mt-6 grid gap-5">
            {governanceRecords.map((item) => (
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

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Direct observation
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supported meaning
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete a Fictional Governance and Policy Review
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
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
          title="Fake Northbridge Governance Dashboard"
          subtitle="Training dashboard for fictional governance evidence only."
          metrics={[
            {
              label: "Governance records reviewed",
              value: "8",
              note: "Policy, supplier exception, recovery ownership, access review, metrics, lessons learned, standards, and risk decisions are mapped.",
            },
            {
              label: "Priority governance gaps",
              value: "6",
              note: "Overdue review, stale exception, missing owner, incomplete review, unclear metric scope, and unowned improvement require action.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports governance gaps but no confirmed incident or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Exception with Active Access"
          severity="High"
          time="9:40 AM"
          source="Fake Governance Review Console"
          details="A fictional supplier access exception expired thirty days ago, but the associated account remains active and no renewed approval is attached."
          recommendation="Confirm the supplier sponsor, current business need, account scope, access activity, data and service exposure, compensating controls, residual risk, decision authority, and owner. Remove or renew the access through approved governance, preserve evidence, validate the outcome, monitor, and document closure without claiming unauthorized use."
        />

        <FakeLogPanel
          title="Fake Northbridge Governance Review Records"
          logs={[
            "09:00 CHARTER scope='security governance and policy foundations'",
            "09:08 POLICY information-security review='overdue 6 months'",
            "09:15 EXCEPTION supplier-access status='expired' account='active'",
            "09:22 RECOVERY reporting-service risk_owner='missing'",
            "09:29 CONTROL access-review business-unit='incomplete'",
            "09:36 METRIC compliance='98%' exclusions='undocumented'",
            "09:43 LESSON supplier-offboarding owner='not assigned'",
            "09:50 STANDARD encryption exception-review-owner='unclear'",
            "09:57 RISK acceptance review-date='passed'",
            "10:05 FINDING confirmed_incident='not supported'",
            "10:12 PRIORITY authority_and_owners='first'",
            "10:20 ACTION supplier_access='remove or renew'",
            "10:28 ACTION policy_review='schedule and approve'",
            "10:36 ACTION metric_definition='scope and denominator'",
            "10:44 VALIDATE controls='required'",
            "10:52 CLOSE evidence='owner + approval + implementation + review'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Governance Findings and Limits
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
          title="What Does the Expired Supplier Exception Prove?"
          evidence={[
            "The fictional supplier exception expired thirty days ago.",
            "The supplier account remains active.",
            "The last approved business purpose was tied to a completed project.",
            "No renewed sponsor approval is supplied.",
            "No post-expiration sign-in, service use, data access, or disclosure is shown.",
            "The supplier owner can remove or formally renew the access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The expired exception and active account create a governance and access-review gap requiring owner action, but unauthorized use and impact are not proven.",
            "The supplier stole data.",
            "A confirmed breach occurred.",
            "No action is needed because no misuse is shown.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves both the stale-governance finding and the activity and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Governance and Policy Analysis"
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
          title="Build the Northbridge Governance and Policy Foundations Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Direction, Ownership, Evidence, Decisions, and Improvement
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end security governance and policy-foundations review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Governance review charter with scope, authority, services, evidence, owners, privacy, and deliverables.</li>
                <li>Leadership, risk, policy, control, asset, data, supplier, reviewer, and incident responsibility matrix.</li>
                <li>Policy, standard, baseline, procedure, guideline, control, evidence, and exception hierarchy.</li>
                <li>Policy lifecycle with triggers, reviewers, approvals, implementation, monitoring, and retirement.</li>
                <li>Governance evidence register and source limitations.</li>
                <li>Findings with alternatives, confidence, limitations, owners, and decision deadlines.</li>
                <li>Improvement plan with approvals, communication, validation, monitoring, escalation, and closure evidence.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real company, school, employee, supplier, contract,
            policy, audit, credential, or risk information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Critical Service Has No Confirmed Recovery Risk Owner"
          scenario="The fictional reporting service has technical operators and a recovery procedure, but no business owner is assigned to accept recovery risk or approve priorities."
          choices={[
            {
              label: "Choice A",
              response:
                "Escalate to authorized leadership, assign a business risk owner, confirm service criticality and recovery objectives, review evidence, and document decision authority and follow-up.",
              outcome:
                "Best governance choice. Technical operation and business accountability are both addressed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ask the technical operator to accept the business risk.",
              outcome:
                "Unsafe. Operational knowledge does not automatically grant risk-acceptance authority.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the gap because a recovery procedure exists.",
              outcome:
                "Weak. A procedure does not replace accountable risk ownership.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Sees a Ninety-Eight Percent Compliance Score"
          scenario="The fictional dashboard reports ninety-eight percent compliance, but the metric definition does not identify excluded systems."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause broad interpretation, define the denominator and exclusions, verify evidence quality, show confidence and limitations, and republish the metric with business meaning.",
              outcome:
                "Best governance choice. Leadership receives a decision-ready measure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Report that the organization is almost completely secure.",
              outcome:
                "Unsupported. Compliance percentage is not the same as overall security or complete coverage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the metric permanently.",
              outcome:
                "Weak. The metric can be improved rather than abandoned.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Security Governance and Policy Foundations Checklist"
          items={[
            "I can explain how fictional mission, leadership, policy, standards, procedures, controls, evidence, risk, and review connect.",
            "I can distinguish fictional policy, control, risk, asset, data, supplier, review, and incident ownership.",
            "I can identify who has authority to approve policy, accept residual risk, approve exceptions, fund controls, and validate closure.",
            "I can build a fictional policy hierarchy from direction through measurable standards, procedures, controls, evidence, and exceptions.",
            "I can map the complete fictional policy lifecycle from trigger through review, approval, implementation, monitoring, update, and retirement.",
            "I can evaluate overdue reviews, stale exceptions, missing ownership, unclear metrics, incomplete control execution, and unowned lessons learned.",
            "I can separate a governance gap from unsupported claims about incidents, misuse, malicious intent, or confirmed impact.",
            "I can write fictional findings with evidence, alternatives, confidence, limitations, owners, decisions, and deadlines.",
            "I can create improvement actions with approval, communication, validation, monitoring, escalation, residual risk, and closure evidence.",
            "I will use only fictional evidence and never expose real policies, supplier records, employee data, school records, credentials, audits, or confidential risk information.",
          ]}
        />

        <MiniQuiz
          title="I14.1 Mini Quiz: Security Governance and Policy Foundations"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Security Governance and Policy Foundations Package for Northbridge. Include the governance charter, mission and leadership context, responsibility matrix, authority boundaries, policy hierarchy, policy lifecycle, control-evidence map, exception process, escalation model, governance findings, alternatives, confidence, limitations, improvement plan, validation, monitoring, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional organizations, policies, standards, procedures, owners, suppliers, incidents, evidence, dates, metrics, and decisions.",
            "Do not treat an overdue review, stale exception, missing owner, or unclear metric as proof of compromise or confirmed harm.",
            "Make every decision traceable to authority, evidence, business context, owner, review date, and closure criteria.",
            "Show where technical operation ends and business risk authority begins.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Security governance connects mission, leadership, policy, ownership, controls, evidence, risk decisions, and continuous improvement.",
            "Policy owners, control owners, risk owners, asset owners, and data owners have different responsibilities.",
            "A policy becomes useful only when standards, procedures, controls, evidence, exceptions, communication, and review support it.",
            "Residual risk should be accepted by an authorized business decision-maker using current evidence.",
            "Metrics need clear scope, denominator, exclusions, evidence quality, confidence, and business meaning.",
            "Governance findings should preserve alternatives, limitations, and the difference between control gaps and confirmed impact.",
            "Portfolio artifacts should use fully fictional governance evidence and never expose real organizational records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I14
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