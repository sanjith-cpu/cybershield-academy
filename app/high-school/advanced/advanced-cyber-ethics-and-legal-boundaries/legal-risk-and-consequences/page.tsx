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
const previousLesson =
  `${modulePath}/authorization-scope-and-written-permission`;
const nextLesson =
  `${modulePath}/responsible-disclosure-concepts`;

const objectives = [
  "Explain why legal risk in cybersecurity depends on authorization, action, data, ownership, location, contracts, policy, and consequence rather than technical intent alone.",
  "Distinguish legal, ethical, policy, contractual, privacy, operational, academic, financial, reputational, and trust consequences in fictional scenarios.",
  "Identify how unauthorized access, excessive data collection, disclosure, evidence mishandling, service disruption, deception, and negligence can create separate risks.",
  "Use a structured fictional legal-risk review without pretending to provide legal advice or making unsupported claims about specific real laws.",
  "Create a portfolio-ready legal-risk decision matrix with owners, escalation, documentation, mitigation, validation, and residual uncertainty."
];
const vocabulary = [
  [
    "Legal risk",
    "The possibility that an action, omission, decision, disclosure, or control failure could conflict with applicable law, regulation, contract, policy, or formal duty."
  ],
  [
    "Jurisdiction",
    "The country, state, region, organization, court, regulator, or authority whose rules may apply to a matter."
  ],
  [
    "Unauthorized access",
    "Accessing a system, account, data set, service, or environment without valid permission or beyond the limits of that permission."
  ],
  [
    "Exceeding authorized access",
    "Using valid access in a way that goes beyond approved purpose, assets, actions, methods, time, data, or ownership boundaries."
  ],
  [
    "Privacy obligation",
    "A requirement to protect personal or sensitive information through lawful purpose, minimum necessary use, access control, retention, deletion, and appropriate sharing."
  ],
  [
    "Confidentiality obligation",
    "A duty created by policy, agreement, role, trust, or law to protect information from unauthorized use or disclosure."
  ],
  [
    "Contractual duty",
    "A responsibility created by an agreement between organizations, suppliers, customers, employees, students, or partners."
  ],
  [
    "Policy violation",
    "An action that conflicts with an organization's approved rules even when a specific legal violation has not been established."
  ],
  [
    "Negligence",
    "A failure to use reasonable care that creates preventable risk or harm."
  ],
  [
    "Recklessness",
    "Disregarding a known and substantial risk without adequate justification or safeguards."
  ],
  [
    "Misrepresentation",
    "Providing false, misleading, exaggerated, incomplete, or unsupported information that could influence a decision."
  ],
  [
    "Evidence spoliation",
    "Improper destruction, alteration, loss, concealment, or mishandling of evidence that may be needed for review or legal process."
  ],
  [
    "Due process",
    "A fair and documented method for reviewing facts, authority, impact, responsibility, and response before serious decisions are made."
  ],
  [
    "Notification duty",
    "A possible obligation to inform an authorized party, owner, user, regulator, insurer, customer, or partner under defined conditions."
  ],
  [
    "Legal hold concept",
    "A formal direction to preserve relevant records when litigation, investigation, audit, or regulatory review may be expected."
  ],
  [
    "Residual legal risk",
    "The uncertainty or exposure that remains after authorization, controls, documentation, mitigation, review, communication, and validation."
  ]
];
const riskCategories = [
  {
    "category": "Unauthorized access or scope violation",
    "what_creates_risk": "Reviewing fictional systems, identities, data, or actions beyond written permission or after authorization expires.",
    "possible_consequences": "Internal discipline, loss of trust, contract issues, investigation, evidence exclusion, service harm, or legal exposure depending on facts and jurisdiction.",
    "strong_control": "Exact written scope, owner verification, time limits, method boundaries, approval gates, and stop conditions.",
    "owner": "System owner, security lead, legal or policy reviewer, and risk owner."
  },
  {
    "category": "Privacy and excessive collection",
    "what_creates_risk": "Collecting, viewing, storing, sharing, or retaining more fictional personal or confidential information than the approved purpose requires.",
    "possible_consequences": "Privacy complaints, breach-notification review, disciplinary action, contractual claims, regulatory attention, user harm, and reputational damage.",
    "strong_control": "Minimum-necessary fields, data-owner approval, classification, access control, retention, deletion, and audit records.",
    "owner": "Data owner, privacy reviewer, security lead, and records owner."
  },
  {
    "category": "Confidentiality and disclosure",
    "what_creates_risk": "Sharing fictional findings, screenshots, logs, vulnerabilities, employee details, customer details, supplier information, or incident records with unapproved audiences.",
    "possible_consequences": "Contract violations, loss of trust, operational exposure, investigation interference, privacy harm, and reputational damage.",
    "strong_control": "Audience map, disclosure owner, need-to-know limits, fictionalization, redaction, secure channel, and approval record.",
    "owner": "Information owner, legal or communications owner, privacy reviewer, and security lead."
  },
  {
    "category": "Service disruption and unsafe change",
    "what_creates_risk": "Disabling fictional accounts, changing configurations, isolating systems, or interrupting services without proper authority, continuity planning, rollback, or validation.",
    "possible_consequences": "Outage, financial loss, safety impact, customer harm, contract penalties, data loss, disciplinary action, and loss of confidence.",
    "strong_control": "Change authority, service-owner approval, dependency review, maintenance window, rollback, testing, and monitoring.",
    "owner": "Change owner, service owner, incident lead, and risk owner."
  },
  {
    "category": "Evidence mishandling",
    "what_creates_risk": "Editing, deleting, copying, renaming, sharing, or losing fictional records without preserving source, context, integrity, timestamps, and handling history.",
    "possible_consequences": "Unreliable findings, failed investigations, unfair decisions, audit problems, legal challenges, and inability to prove what occurred.",
    "strong_control": "Evidence inventory, provenance, handling log, read-only source, retention, integrity checks, access control, and documented limitations.",
    "owner": "Evidence custodian, incident lead, legal reviewer, and records owner."
  },
  {
    "category": "False statements and unsupported claims",
    "what_creates_risk": "Calling a fictional event a breach, compromise, attack, theft, malicious act, or legal violation without sufficient evidence.",
    "possible_consequences": "Unfair blame, bad leadership decisions, user harm, defamation concerns, investigation error, loss of trust, and unnecessary response cost.",
    "strong_control": "Evidence-limited language, review, correction process, confidence labels, alternate explanations, and approved fact set.",
    "owner": "Report author, reviewer, incident lead, communications owner, and leadership."
  },
  {
    "category": "Contract and supplier obligations",
    "what_creates_risk": "Ignoring fictional service agreements, evidence-sharing limits, notification timing, access restrictions, support procedures, or supplier responsibilities.",
    "possible_consequences": "Contract disputes, delayed response, loss of support, financial penalties, service interruption, and damaged partnerships.",
    "strong_control": "Contract owner, supplier scope, communication path, access record, notification rule, evidence request, and escalation.",
    "owner": "Supplier owner, procurement or contract owner, legal reviewer, service owner, and security lead."
  },
  {
    "category": "Academic and professional integrity",
    "what_creates_risk": "Using real confidential materials, copying others' work without attribution, fabricating findings, hiding mistakes, or presenting unauthorized testing as a portfolio project.",
    "possible_consequences": "School discipline, project rejection, loss of recommendation, damaged reputation, account consequences, and future trust issues.",
    "strong_control": "Fully fictional evidence, original analysis, transparent sources, revision history, teacher review, and honesty about limitations.",
    "owner": "Student, teacher, mentor, program owner, and platform owner."
  },
  {
    "category": "Automation and decision harm",
    "what_creates_risk": "Allowing fictional automation or AI to disable accounts, collect private data, notify users, classify guilt, or make high-impact decisions without oversight.",
    "possible_consequences": "Unfair treatment, service disruption, privacy harm, discrimination concerns, incorrect action, poor accountability, and difficult reversal.",
    "strong_control": "Human approval, narrow scope, explainability, logs, rollback, exception handling, validation, and owner review.",
    "owner": "Automation owner, security lead, service owner, privacy reviewer, and risk owner."
  },
  {
    "category": "Failure to escalate or preserve records",
    "what_creates_risk": "Continuing fictional work despite unclear authority, unexpected sensitive data, legal hold concerns, service instability, or possible evidence loss.",
    "possible_consequences": "Expanded harm, lost evidence, delayed notification, missed obligations, unfair decisions, and weakened response.",
    "strong_control": "Stop conditions, escalation tree, preservation plan, owner contact, documented uncertainty, and review deadline.",
    "owner": "Analyst, incident lead, legal or policy reviewer, data owner, and evidence custodian."
  }
];
const consequenceLayers = [
  {
    "layer": "Legal and regulatory",
    "question": "Could a fictional action conflict with an applicable law, regulation, court order, reporting duty, or regulator expectation?",
    "example": "Using confidential personal information outside an approved purpose may require specialized privacy review.",
    "control": "Escalate to the proper legal or compliance owner instead of guessing."
  },
  {
    "layer": "Contractual",
    "question": "Could the action violate a fictional agreement with a supplier, customer, employee, school, insurer, cloud provider, or partner?",
    "example": "Contacting a supplier outside the approved incident process may violate communication and evidence-sharing terms.",
    "control": "Review the agreement through the contract owner and use the approved contact path."
  },
  {
    "layer": "Policy and governance",
    "question": "Does the action violate internal rules, delegated authority, change control, acceptable use, privacy, retention, or disclosure policy?",
    "example": "An analyst may have technical access but lack policy authority to export data.",
    "control": "Use policy owners, approval gates, exceptions, and documented governance."
  },
  {
    "layer": "Operational",
    "question": "Could the action interrupt service, destroy data, break dependencies, reduce monitoring, or create recovery problems?",
    "example": "Disabling a service account may stop an important overnight process.",
    "control": "Use service-owner review, rollback, testing, and health monitoring."
  },
  {
    "layer": "Financial",
    "question": "Could the action create outage cost, recovery cost, contract penalties, investigation expense, lost productivity, or replacement cost?",
    "example": "A broad shutdown may cost more than a targeted reversible control.",
    "control": "Compare risk-reduction value with operational and financial impact."
  },
  {
    "layer": "Human and privacy",
    "question": "Could the action expose private information, unfairly blame a user, deny access, create stress, or harm someone who did not cause the problem?",
    "example": "One unusual sign-in does not prove malicious intent.",
    "control": "Use evidence limits, minimum necessary, due process, and supportive communication."
  },
  {
    "layer": "Reputational and trust",
    "question": "Could inaccurate claims, secrecy, poor disclosure, or careless data handling reduce confidence in the organization or defender?",
    "example": "Publishing unverified findings may damage people and organizations even if the technical issue is real.",
    "control": "Use approved communication, correction records, and transparent limitations."
  },
  {
    "layer": "Academic and career",
    "question": "Could the fictional student artifact show unsafe judgment, misuse of confidential information, copying, or unsupported claims?",
    "example": "A portfolio using real internal screenshots can create serious trust concerns.",
    "control": "Use complete fictionalization, original work, teacher review, and honest reflection."
  }
];
const legalReviewSteps = [
  {
    "step": "1",
    "title": "Describe the proposed action precisely",
    "questions": "What fictional action, system, identity, data, method, time, location, communication, and intended outcome are being considered?",
    "output": "Action statement with scope and purpose.",
    "stop": "Pause if the request is vague, broad, or technically undefined."
  },
  {
    "step": "2",
    "title": "Verify authority and ownership",
    "questions": "Who owns the system, data, service, supplier relationship, change, communication, and residual risk?",
    "output": "Authority and ownership map.",
    "stop": "Pause if the requester lacks the authority needed for the action."
  },
  {
    "step": "3",
    "title": "Identify obligation categories",
    "questions": "Which fictional legal, privacy, policy, contract, records, employment, academic, notification, or evidence duties may apply?",
    "output": "Obligation inventory with owners.",
    "stop": "Do not interpret specific real law without the qualified owner."
  },
  {
    "step": "4",
    "title": "Assess necessity and alternatives",
    "questions": "Is the action required, and is there a narrower, safer, less disruptive, less private, or more reversible option?",
    "output": "Three-option comparison.",
    "stop": "Pause if a broad action is proposed without considering targeted alternatives."
  },
  {
    "step": "5",
    "title": "Map consequence layers",
    "questions": "What legal, contractual, policy, operational, financial, human, privacy, academic, and trust effects could follow?",
    "output": "Consequence matrix.",
    "stop": "Escalate when consequences exceed the analyst's delegated authority."
  },
  {
    "step": "6",
    "title": "Protect evidence and records",
    "questions": "What should be preserved, who may handle it, how will context and integrity be maintained, and are retention or hold concerns present?",
    "output": "Evidence and preservation plan.",
    "stop": "Pause if records may be deleted, altered, lost, or shared improperly."
  },
  {
    "step": "7",
    "title": "Define approval, communication, and notification",
    "questions": "Who approves the action, who may be informed, what can be said, and which notification decisions belong to specialized owners?",
    "output": "Approval and audience map.",
    "stop": "Do not contact users, suppliers, media, regulators, or the public without authorized ownership."
  },
  {
    "step": "8",
    "title": "Apply controls and documentation",
    "questions": "What access limits, privacy controls, change controls, rollback, supervision, logging, review, and signoff reduce risk?",
    "output": "Controlled action plan.",
    "stop": "Pause if safeguards are missing or cannot be validated."
  },
  {
    "step": "9",
    "title": "Validate outcomes",
    "questions": "Did the approved action work, did service remain acceptable, were records preserved, did communication remain accurate, and what uncertainty remains?",
    "output": "Validation and residual-risk record.",
    "stop": "Do not claim completion or compliance without measurable evidence."
  },
  {
    "step": "10",
    "title": "Review and improve",
    "questions": "What should change in authorization, policy, training, automation, documentation, contracts, evidence handling, or review?",
    "output": "Lessons-learned and improvement plan.",
    "stop": "Do not hide errors or uncertainty to make the response appear successful."
  }
];
const evidenceMatrix = [
  {
    "id": "LR-01",
    "source": "Fictional authorization memo",
    "observation": "Permits supplied-log review and recommendations but prohibits live access, account changes, and private-message review.",
    "supports": "The analyst has a narrow evidence-review role.",
    "limits": "Does not authorize account disabling, mailbox export, or investigation of connected assets.",
    "risk_use": "Treat any expanded action as a separate approval question."
  },
  {
    "id": "LR-02",
    "source": "Fictional privacy classification",
    "observation": "Mailbox content and employee records are confidential and require data-owner approval.",
    "supports": "The proposed export creates a privacy and confidentiality concern.",
    "limits": "Does not establish that access would violate a specific real law.",
    "risk_use": "Escalate to the data owner and privacy reviewer rather than making a legal conclusion."
  },
  {
    "id": "LR-03",
    "source": "Fictional supplier agreement summary",
    "observation": "Only the supplier owner may request external evidence or contact the supplier during an incident.",
    "supports": "Direct analyst contact would exceed the approved communication path.",
    "limits": "Does not determine whether supplier notification is required.",
    "risk_use": "Route the question to the supplier owner and contract reviewer."
  },
  {
    "id": "LR-04",
    "source": "Fictional service dependency note",
    "observation": "The account supports a critical overnight process and broad disabling may interrupt service.",
    "supports": "The proposed action has operational and possibly financial consequences.",
    "limits": "Does not prove the account should remain unchanged.",
    "risk_use": "Use targeted reversible options with service-owner approval."
  },
  {
    "id": "LR-05",
    "source": "Fictional incident alert",
    "observation": "One unusual sign-in triggered a High alert.",
    "supports": "A detection condition requires review.",
    "limits": "Does not prove compromise, malicious intent, data access, or reportable impact.",
    "risk_use": "Avoid unsupported legal, disciplinary, or notification claims."
  },
  {
    "id": "LR-06",
    "source": "Fictional evidence-handling log",
    "observation": "A copied screenshot lacks source identifier, original timestamp, and handling history.",
    "supports": "Evidence quality and provenance are incomplete.",
    "limits": "Does not prove intentional evidence alteration.",
    "risk_use": "Treat it as unverified supporting material and preserve better sources."
  },
  {
    "id": "LR-07",
    "source": "Fictional draft leadership message",
    "observation": "States that an employee account was compromised and confidential data was stolen.",
    "supports": "The draft overstates the supplied evidence.",
    "limits": "Does not prove the author intended to mislead.",
    "risk_use": "Correct the statement before release and document the revision."
  },
  {
    "id": "LR-08",
    "source": "Fictional automation proposal",
    "observation": "Would disable accounts, notify managers, and preserve only a summary after one High alert.",
    "supports": "The proposal creates service, fairness, privacy, evidence, and accountability risk.",
    "limits": "Does not mean all automation is legally or ethically improper.",
    "risk_use": "Require human approval, full logs, narrow actions, rollback, exception handling, and validation."
  }
];
const decisionMatrix = [
  {
    "option": "Export the full fictional mailbox immediately",
    "benefit": "Could produce additional information quickly.",
    "legal_risk": "Authorization, privacy, confidentiality, retention, and evidence-use boundaries are unresolved.",
    "operational_risk": "Large data collection increases handling and review burden.",
    "human_risk": "Unrelated personal or confidential content may be exposed.",
    "decision": "Do not proceed without proper owner approval and minimum-necessary scope."
  },
  {
    "option": "Disable the fictional service account immediately",
    "benefit": "Could reduce identity risk quickly if the account is compromised.",
    "legal_risk": "Change authority and due-process questions remain unresolved.",
    "operational_risk": "Critical overnight service may fail.",
    "human_risk": "Users or staff may be blamed or disrupted without sufficient evidence.",
    "decision": "Use owner-approved targeted and reversible identity controls first."
  },
  {
    "option": "Continue only the authorized fictional log review",
    "benefit": "Preserves the current written purpose and evidence boundary.",
    "legal_risk": "Lower, provided handling, timing, and communication remain compliant with the fictional rules.",
    "operational_risk": "Low because no live change occurs.",
    "human_risk": "Lower because the review avoids unnecessary private data and unsupported blame.",
    "decision": "Proceed within scope while escalating expansion requests."
  },
  {
    "option": "Contact the fictional supplier directly",
    "benefit": "Could obtain relevant external context.",
    "legal_risk": "May conflict with contract, confidentiality, and approved communication procedures.",
    "operational_risk": "Could confuse coordinated response or delay support.",
    "human_risk": "May expose incomplete or inaccurate claims.",
    "decision": "Route contact through the supplier owner and contract-approved path."
  },
  {
    "option": "Publish a fictionalized case summary before review",
    "benefit": "Could demonstrate learning quickly.",
    "legal_risk": "Insufficient fictionalization may still reveal real confidential patterns or documents.",
    "operational_risk": "Could interfere with response or create conflicting messages.",
    "human_risk": "May unfairly identify or blame people.",
    "decision": "Use fully invented evidence and obtain teacher or owner review before sharing."
  }
];
const commonMistakes = [
  "Naming a specific real law or declaring a legal violation without qualified review and sufficient facts.",
  "Assuming good intentions remove legal, privacy, policy, contractual, or operational consequences.",
  "Treating a supervisor request as permission to access unrelated or confidential information.",
  "Calling an event a breach, theft, attack, crime, compromise, or malicious act before evidence supports the term.",
  "Failing to distinguish authorization risk from privacy risk, evidence risk, service risk, and disclosure risk.",
  "Collecting all available records instead of the minimum information required for the approved question.",
  "Sharing fictional findings with unapproved audiences because the information seems useful or educational.",
  "Deleting, editing, renaming, cropping, or moving evidence without preserving source, context, timestamps, and handling history.",
  "Ignoring contract or supplier communication procedures during an incident.",
  "Using broad irreversible actions when narrower reversible controls are available.",
  "Treating compliance, legal, policy, and ethical questions as the same thing.",
  "Assuming no outage means no harm or that no visible data loss means no notification question exists.",
  "Allowing AI or automation to make high-impact decisions without approval, evidence, explanation, rollback, and validation.",
  "Using real confidential documents in a school portfolio after changing only names."
];
const quizQuestions = [
  {
    "question": "What is the strongest way for a student defender to discuss legal risk in a fictional lesson?",
    "choices": [
      "Identify the possible legal or policy concern, preserve evidence limits, and escalate to the proper qualified owner instead of declaring a violation.",
      "Name a specific law and announce that it was broken.",
      "Avoid all discussion of consequences.",
      "Assume the most serious consequence applies."
    ],
    "answer": 0,
    "explanation": "A student should recognize risk categories and escalation needs without pretending to provide legal advice or making unsupported legal conclusions."
  },
  {
    "question": "A fictional supervisor requests a full mailbox export outside written scope. Which risks are most directly raised?",
    "choices": [
      "Only service availability.",
      "Authorization, privacy, confidentiality, data handling, and accountability.",
      "Only reputation.",
      "No risk because the request came from a supervisor."
    ],
    "answer": 1,
    "explanation": "The request raises several separate risk layers and requires owner review."
  },
  {
    "question": "Why is one High alert not enough to state that a fictional account was compromised?",
    "choices": [
      "Severity is never useful.",
      "The alert establishes a detection condition, but identity state, activity, impact, alternate explanations, and source limits still require review.",
      "High alerts are always false.",
      "Only leadership may read alerts."
    ],
    "answer": 1,
    "explanation": "Alert severity does not prove compromise, intent, data access, or legal consequence."
  },
  {
    "question": "What is the strongest response when fictional evidence may be needed for formal review?",
    "choices": [
      "Edit the evidence so it is easier to understand.",
      "Preserve source, context, integrity, timestamps, handling history, access, and retention, and escalate any hold question.",
      "Delete duplicates immediately.",
      "Share screenshots in a group chat."
    ],
    "answer": 1,
    "explanation": "Evidence should remain traceable and preserved under the appropriate process."
  },
  {
    "question": "A fictional supplier agreement says only the supplier owner may request evidence. What should an analyst do?",
    "choices": [
      "Contact the supplier directly because the issue is urgent.",
      "Post the request publicly.",
      "Route the evidence question through the supplier owner and approved contract process.",
      "Ignore all supplier evidence."
    ],
    "answer": 2,
    "explanation": "Contract and communication boundaries should be respected even during urgent response."
  },
  {
    "question": "Which fictional action is most proportionate when a critical service account has one unusual sign-in and services remain stable?",
    "choices": [
      "Broadly disable all related accounts.",
      "Use targeted, reversible, owner-approved identity controls with evidence preservation and validation.",
      "Close the alert.",
      "Publish the account name."
    ],
    "answer": 1,
    "explanation": "The strongest action reduces risk while preserving service, authority, evidence, and due process."
  },
  {
    "question": "What makes a fictional legal-risk portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "The real organization name is changed.",
      "Every organization, system, identity, document, agreement, law reference, record, incident, date, action, and outcome is invented.",
      "Real internal records are summarized."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects privacy, confidentiality, organizations, and individuals."
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
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

export default function LegalRiskAndConsequencesPage() {
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
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Legal-Risk Reasoning
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.3 Legal Risk and Consequences
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders recognize fictional legal, privacy,
            contractual, policy, operational, financial, academic, and trust
            risks without pretending to provide legal advice or making claims
            that exceed the evidence.
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
          lessonTitle="Legal Risk and Consequences"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, documents, agreements, records, laws, incidents, actions, dates, and outcomes.",
            "I understand that this lesson teaches legal-risk awareness and escalation, not legal advice about a real situation.",
            "I will not declare that a real person, organization, action, or event violated a law.",
            "I will distinguish possible legal or policy risk from a confirmed violation.",
            "I will preserve written authorization, privacy, evidence, service continuity, contracts, due process, and ownership.",
            "I will not upload or reproduce real contracts, authorization letters, private messages, employee records, school records, incident documents, screenshots, logs, or confidential information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Technically Useful Action Can Still Create Serious Risk"
        >
          <p className="leading-8">
            A fictional analyst has one High identity alert. The supervisor asks
            for a full mailbox export, immediate account disabling, direct
            supplier contact, and a leadership message stating that confidential
            data was stolen. Each request sounds security-focused, but each
            creates a different question about authorization, privacy,
            confidentiality, service continuity, contracts, evidence,
            accuracy, due process, and ownership.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Unsafe shortcut
              </p>
              <p className="mt-2 leading-7">
                Treat urgency as permission, assume the worst legal outcome,
                collect everything, act broadly, and write the most dramatic
                conclusion.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional approach
              </p>
              <p className="mt-2 leading-7">
                Define the action, verify authority, identify risk categories,
                preserve evidence, compare narrower options, route specialized
                questions to owners, and communicate only supported facts.
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
          eyebrow="Important Boundary"
          title="Risk Awareness Is Not Legal Advice"
        >
          <p className="leading-8">
            Laws, regulations, contracts, school rules, employment duties, and
            notification obligations vary by jurisdiction, organization,
            relationship, and fact pattern. A student defender should not guess
            which law applies or announce that a violation occurred. The
            professional skill is to recognize that a specialized question
            exists, preserve the relevant fictional evidence, stop unsafe
            action, document uncertainty, and escalate to the proper owner.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Strong language: “The proposed mailbox export exceeds the current
            written scope and raises privacy, confidentiality, retention, and
            authorization questions requiring data-owner and policy review.”
            Weak language: “The supervisor's request is illegal.”
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Model"
          title="Action + Context + Authority + Evidence + Consequence"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Action", "What exactly is being accessed, collected, changed, shared, preserved, deleted, automated, or communicated?"],
              ["Context", "Which system, service, person, data, contract, location, time, and emergency condition are involved?"],
              ["Authority", "Who may request, approve, execute, disclose, preserve, validate, and accept remaining risk?"],
              ["Evidence", "What is observed, what is supported, what is conflicting, and what cannot be proven?"],
              ["Consequence", "What legal, policy, contractual, operational, financial, privacy, human, academic, or trust impact may follow?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Legal-Risk Awareness"
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
            Risk Categories
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Legal and Professional Risk Areas
          </h2>

          <div className="mt-6 grid gap-5">
            {riskCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["What creates risk", item.what_creates_risk],
                    ["Possible consequences", item.possible_consequences],
                    ["Strong control", item.strong_control],
                    ["Likely owners", item.owner],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.category}-${label}`}
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
            Consequence Layers
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            One Decision Can Create Several Different Consequences
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {consequenceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.layer}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong control
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Legal-Risk Review Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Proposed Action to Validated Outcome
          </h2>

          <div className="mt-6 grid gap-5">
            {legalReviewSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Professional stop
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
            Decision Comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Benefit with Legal, Operational, and Human Risk
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionMatrix.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.option}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  {[
                    ["Potential benefit", item.benefit],
                    ["Legal or governance risk", item.legal_risk],
                    ["Operational risk", item.operational_risk],
                    ["Human or privacy risk", item.human_risk],
                    ["Professional decision", item.decision],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.option}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
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

        <FakeDashboardCard
          title="Fake Northbridge Legal-Risk Review Dashboard"
          subtitle="Fictional legal, privacy, contract, and operational review for training only."
          metrics={[
            {
              label: "Open risk categories",
              value: "6",
              note: "Authorization, privacy, confidentiality, service, supplier, and evidence questions remain.",
            },
            {
              label: "Confirmed impact",
              value: "Limited",
              note: "One unusual sign-in is confirmed; compromise and data loss are not.",
            },
            {
              label: "Required owners",
              value: "5",
              note: "Security, service, data/privacy, supplier, and risk owners must coordinate.",
            },
          ]}
        />

        <FakeAlertCard
          title="Proposed Response Creates Multiple Unresolved Legal and Governance Risks"
          severity="High"
          time="2:14 PM"
          source="Fake Northbridge Legal-Risk Review Console"
          details="A fictional response plan proposes full mailbox export, immediate service-account disabling, direct supplier contact, and a leadership message claiming confirmed data theft after one High sign-in alert."
          recommendation="Pause broad action and unsupported communication. Preserve evidence, verify authority, use minimum necessary data, involve service and privacy owners, route supplier contact properly, compare targeted reversible options, and obtain specialized legal or policy review where required."
        />

        <FakeLogPanel
          title="Fake Legal-Risk Decision Timeline"
          logs={[
            "13:00 ALERT identity='svc-night-01' severity='High'",
            "13:03 IMPACT compromise='unconfirmed'",
            "13:04 IMPACT data-loss='unconfirmed'",
            "13:10 REQUEST mailbox-export='full'",
            "13:11 AUTH mailbox='not-approved'",
            "13:12 PRIVACY classification='confidential'",
            "13:20 REQUEST disable-account='immediate'",
            "13:21 SERVICE dependency='critical-overnight'",
            "13:22 CHANGE authority='owner-required'",
            "13:30 REQUEST supplier-contact='direct'",
            "13:31 CONTRACT contact-path='supplier-owner-only'",
            "13:40 DRAFT message='confirmed-data-theft'",
            "13:41 EVIDENCE theft='unsupported'",
            "13:50 EVIDENCE screenshot-provenance='incomplete'",
            "14:00 DECISION broad-actions='paused'",
            "14:14 ESCALATION owners='security,service,privacy,supplier,risk'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Consequence
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
                    ["Legal-risk use", item.risk_use],
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
          title="Which Fictional Response Best Manages Legal Risk?"
          evidence={[
            "One High identity alert exists, but compromise and data loss are unconfirmed.",
            "The current authorization allows supplied-log review and recommendations only.",
            "Mailbox content is confidential and requires data-owner approval.",
            "The account supports a critical overnight service.",
            "Only the supplier owner may contact the external provider.",
            "The draft leadership message claims confirmed data theft without evidence.",
            "One copied screenshot has incomplete provenance.",
          ]}
          options={[
            "Pause broad actions and unsupported communication, preserve evidence, continue authorized review, involve the proper owners, compare targeted reversible controls, and escalate specialized legal or policy questions.",
            "Export the mailbox, disable the account, contact the supplier, and send the draft because the alert is High.",
            "Close the case because services are stable.",
            "Delete the weak screenshot and continue without documenting it.",
          ]}
          bestAnswer={0}
          explanation="The strongest response protects authorization, privacy, contracts, service continuity, evidence, accuracy, ownership, and due process while still addressing the security concern."
        />

        <SectionCard
          eyebrow="Common Legal-Risk Mistakes"
          title="What Advanced Defenders Must Avoid"
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
          title="Build a Fictional Legal-Risk Decision Matrix"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Review the Northbridge Response Proposal
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                quote, copy, lightly modify, or summarize a real law,
                regulation, contract, policy, authorization, incident record,
                private message, employee record, school record, or legal
                document.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Precise fictional action and purpose statement.</li>
                <li>Authorization, ownership, privacy, contract, service, and evidence map.</li>
                <li>Legal, policy, contractual, operational, financial, human, academic, and trust consequence matrix.</li>
                <li>Evidence register separating facts, conclusions, alternatives, and unknowns.</li>
                <li>Three-option comparison for mailbox, account, supplier, and communication decisions.</li>
                <li>Evidence-preservation and handling plan.</li>
                <li>Approval, notification, and communication ownership map.</li>
                <li>Selected recommendation with safeguards, rollback, validation, and residual uncertainty.</li>
                <li>Reflection explaining what requires qualified review rather than student judgment.</li>
                <li>Revision history and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This lab teaches risk recognition, documentation, and escalation.
            It must never be presented as legal advice, a real legal opinion,
            authorization for real action, or a conclusion about a real person
            or organization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Leadership Draft Says 'Confirmed Data Theft'"
          scenario="The fictional evidence confirms one unusual sign-in, but no supplied record proves compromise, mailbox access, file access, or data disclosure."
          choices={[
            {
              label: "Choice A",
              response: "Correct the message to state the confirmed alert, current evidence limits, service status, actions, decision needs, and next update.",
              outcome: "Best professional choice. Accurate language reduces legal, trust, fairness, and decision risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the dramatic wording because leadership needs urgency.",
              outcome: "Risky. Urgency does not justify unsupported impact or attribution.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove all mention of the alert.",
              outcome: "Unsafe. Hiding supported risk is also misleading.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Supplier May Have Relevant Evidence"
          scenario="The fictional supplier agreement states that only the supplier owner may request external evidence or contact the provider during response."
          choices={[
            {
              label: "Choice A",
              response: "Document the evidence need and route it through the supplier owner and approved contract process.",
              outcome: "Best professional choice. Contract, confidentiality, coordination, and accountability remain protected.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Contact the supplier directly because delay creates risk.",
              outcome: "Risky. Urgency does not automatically override the agreed communication path.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Never seek supplier evidence.",
              outcome: "Unsafe. The evidence may be useful, but it should be requested through the correct owner.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Legal-Risk Awareness Checklist"
          items={[
            "I can describe a fictional action precisely before evaluating possible consequences.",
            "I can distinguish authorization, privacy, confidentiality, contract, policy, service, evidence, communication, academic, and trust risks.",
            "I can identify the fictional system, data, service, supplier, change, communication, evidence, privacy, and risk owners.",
            "I can recognize when a question requires qualified legal, compliance, contract, privacy, records, or policy review.",
            "I can avoid declaring that a real or fictional action violated a specific law without proper authority and evidence.",
            "I can separate a detection alert from compromise, intent, data access, impact, notification, discipline, and legal conclusion.",
            "I can compare fictional actions for necessity, minimum necessary, proportionality, reversibility, service continuity, privacy, and due process.",
            "I can preserve fictional evidence source, context, integrity, timestamps, handling, access, retention, and limitations.",
            "I can route fictional supplier contact, user notification, leadership communication, public disclosure, and risk acceptance to the correct owners.",
            "I can correct unsupported fictional claims and document the revision without assuming intentional deception.",
            "I can define fictional safeguards, rollback, validation, signoff, monitoring, residual legal risk, and improvement actions.",
            "I will never use real laws, contracts, authorization documents, private records, incident evidence, or confidential organizational material in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A1.3 Mini Quiz: Legal Risk and Consequences"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Legal-Risk and Consequence Decision Package for the Northbridge training case. Include the proposed actions, authorized purpose, ownership map, obligation inventory, legal-risk disclaimer, consequence layers, evidence register, decision matrix, privacy and minimum-necessary controls, contract and supplier path, evidence-preservation plan, communication corrections, approval gates, selected recommendation, rollback, validation, residual uncertainty, specialized-review questions, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Use language such as raises a legal or policy question rather than declaring that a law was violated.",
            "Separate authorization, privacy, confidentiality, contract, policy, service, evidence, financial, human, academic, and trust consequences.",
            "Show why one High alert does not prove compromise, theft, malicious intent, notification duty, or legal consequence.",
            "Include at least one unsupported statement, revise it after fictional review, and explain how the correction improves accuracy and fairness.",
            "Keep every organization, system, identity, agreement, law reference, document, record, incident, action, date, and outcome fully invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity legal risk depends on the exact action, context, authority, evidence, ownership, jurisdiction, agreement, and consequence.",
            "Student defenders should recognize legal-risk questions and escalate them, not provide legal advice or announce legal violations.",
            "Authorization, privacy, confidentiality, contract, policy, service, evidence, communication, academic, and trust risks are related but distinct.",
            "Technical usefulness and good intentions do not remove consequences.",
            "One High alert does not prove compromise, malicious intent, data loss, notification duty, disciplinary responsibility, or legal violation.",
            "Minimum-necessary data, targeted reversible action, evidence preservation, due process, and owner review reduce legal and professional risk.",
            "Supplier contact, user notification, public disclosure, legal hold, change approval, and risk acceptance belong to authorized owners.",
            "Evidence quality matters because poor provenance, altered records, or unsupported claims can damage investigations and decisions.",
            "Correcting inaccurate communication is part of professional responsibility, not an admission that every mistake was intentional.",
            "Every CyberShield legal-risk artifact must remain fully fictional, defensive, privacy-safe, non-operational, and clearly not legal advice.",
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