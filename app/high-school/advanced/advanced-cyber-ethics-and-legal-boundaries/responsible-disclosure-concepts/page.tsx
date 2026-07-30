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
  `${modulePath}/legal-risk-and-consequences`;
const nextLesson =
  `${modulePath}/handling-sensitive-information-ethically`;

const objectives = [
  "Explain responsible disclosure as a coordinated, authorized, evidence-limited process for reporting a fictional security concern safely.",
  "Distinguish private reporting, coordinated disclosure, public communication, emergency escalation, supplier communication, and portfolio sharing.",
  "Build a fictional disclosure package containing scope, evidence, impact limits, owner routing, timelines, communication rules, validation, and closure.",
  "Recognize how premature publication, unsupported claims, unnecessary technical detail, private data, and bypassed ownership can create harm.",
  "Create a portfolio-ready responsible-disclosure brief using only invented systems, evidence, contacts, decisions, dates, actions, and outcomes."
];
const vocabulary = [
  [
    "Responsible disclosure",
    "A coordinated process for reporting a security concern to the appropriate fictional owner while protecting evidence, privacy, service continuity, confidentiality, and public safety."
  ],
  [
    "Disclosure recipient",
    "The approved fictional person, team, owner, supplier contact, or program responsible for receiving and coordinating the report."
  ],
  [
    "Coordinated disclosure",
    "A process in which reporters and owners agree on private communication, validation, remediation, updates, and possible later publication."
  ],
  [
    "Private report",
    "A non-public message containing only the evidence, scope, impact limits, and requested action needed by authorized recipients."
  ],
  [
    "Public disclosure",
    "Communication to a broad audience, such as a website, presentation, social platform, news outlet, or public repository."
  ],
  [
    "Embargo concept",
    "A fictional agreement to delay public release while owners validate, correct, test, and communicate about the issue."
  ],
  [
    "Acknowledgment",
    "Confirmation that the appropriate fictional recipient received the report and assigned an owner or tracking reference."
  ],
  [
    "Validation request",
    "A safe request asking the owner to confirm whether the fictional observation is accurate without requiring invasive or unauthorized testing."
  ],
  [
    "Remediation window",
    "The agreed period for the fictional owner to investigate, correct, test, communicate, and document the outcome."
  ],
  [
    "Disclosure timeline",
    "A record of report submission, acknowledgment, evidence requests, updates, remediation, validation, publication decisions, and closure."
  ],
  [
    "Evidence boundary",
    "The exact fictional records, systems, time, actions, and observations included in the report and what remains outside the evidence."
  ],
  [
    "Impact language",
    "Wording that separates possible exposure, confirmed access, confirmed change, confirmed disclosure, service impact, and unknowns."
  ],
  [
    "Need-to-know",
    "Sharing fictional details only with authorized recipients who require them for validation, remediation, governance, or communication."
  ],
  [
    "Sensitive technical detail",
    "Information that could increase risk if shared broadly, such as exact system identifiers, private configurations, internal paths, or unresolved control weaknesses."
  ],
  [
    "Safe reproduction",
    "A non-invasive, fictional, owner-approved method for demonstrating an observation without real-world exploitation or operational risk."
  ],
  [
    "Closure statement",
    "A final fictional record describing validated remediation, remaining limits, residual risk, communication status, and lessons learned."
  ]
];
const disclosurePrinciples = [
  {
    "principle": "Report privately first",
    "why": "The fictional owner needs a safe opportunity to validate, reduce risk, preserve service, and coordinate communication.",
    "strong_practice": "Use the approved internal, supplier, teacher, or program channel with minimum-necessary evidence.",
    "weak_practice": "Post the issue publicly to force attention.",
    "artifact": "Recipient and channel map"
  },
  {
    "principle": "Stay inside authorization",
    "why": "Finding one concern does not create permission to test related systems, collect more data, bypass controls, or prove worst-case impact.",
    "strong_practice": "Stop at the evidence boundary and request owner-led validation.",
    "weak_practice": "Continue testing because more proof would make the report stronger.",
    "artifact": "Scope and stop-condition statement"
  },
  {
    "principle": "Use evidence-limited language",
    "why": "A fictional observation may support a control weakness without proving compromise, malicious intent, data loss, or broad impact.",
    "strong_practice": "Separate observation, supported conclusion, possible impact, confirmed impact, and unknowns.",
    "weak_practice": "Use breach, attack, stolen, or compromised as dramatic shortcuts.",
    "artifact": "Finding and impact matrix"
  },
  {
    "principle": "Protect privacy and confidentiality",
    "why": "Reports may contain fictional identities, internal systems, confidential data, supplier details, or security-sensitive information.",
    "strong_practice": "Minimize fields, use secure channels, restrict access, define retention, and fictionalize portfolio versions.",
    "weak_practice": "Attach full screenshots, mailboxes, logs, or private messages.",
    "artifact": "Disclosure data-handling plan"
  },
  {
    "principle": "Route through the correct owner",
    "why": "System, data, supplier, communications, privacy, legal, and risk decisions belong to different authorized roles.",
    "strong_practice": "Identify the initial recipient, coordinating owner, validation owner, remediation owner, and communication owner.",
    "weak_practice": "Send the report to every contact or only to the most senior person.",
    "artifact": "Disclosure ownership map"
  },
  {
    "principle": "Make the report reproducible but safe",
    "why": "Owners need enough context to confirm the fictional observation without receiving invasive instructions or unnecessary sensitive detail.",
    "strong_practice": "Describe expected versus observed behavior, supplied evidence, environment, time, and owner-safe validation steps.",
    "weak_practice": "Provide operational exploitation steps or encourage live testing.",
    "artifact": "Safe validation guide"
  },
  {
    "principle": "Agree on updates and timelines",
    "why": "A clear cadence prevents silence, repeated pressure, surprise publication, and conflicting communication.",
    "strong_practice": "Define acknowledgment, evidence requests, progress updates, remediation review, publication decision, and closure.",
    "weak_practice": "Demand immediate public disclosure when the owner does not respond quickly.",
    "artifact": "Disclosure timeline"
  },
  {
    "principle": "Validate before claiming resolution",
    "why": "A ticket, code change, policy edit, or quiet alert does not prove the fictional control works.",
    "strong_practice": "Confirm expected and denied behavior, service health, logging, ownership, communication, and residual risk.",
    "weak_practice": "Close the report as soon as the owner says fixed.",
    "artifact": "Remediation validation record"
  },
  {
    "principle": "Coordinate public communication",
    "why": "Public release may affect users, suppliers, contracts, investigations, privacy, trust, and future risk.",
    "strong_practice": "Use the authorized communication owner, approved fact set, safe level of detail, and agreed timing.",
    "weak_practice": "Publish independently because the reporter discovered the issue.",
    "artifact": "Public-communication decision record"
  },
  {
    "principle": "Reflect and improve",
    "why": "Responsible disclosure should strengthen authorization, reporting channels, design, testing, communication, and professional trust.",
    "strong_practice": "Document feedback, corrections, lessons, unresolved issues, owner actions, and future review.",
    "weak_practice": "Treat acknowledgment or publication as the only measure of success.",
    "artifact": "Disclosure lessons-learned note"
  }
];
const recipientRoles = [
  {
    "role": "Initial disclosure recipient",
    "responsibility": "Receives the fictional report through the approved channel, confirms receipt, protects confidentiality, and assigns a tracking reference.",
    "should_receive": "Concise summary, scope, evidence identifiers, impact limits, urgency rationale, and reporter contact.",
    "should_not_receive": "Unrelated private data, unsupported claims, public threats, or operational exploitation steps.",
    "next_decision": "Whether the report belongs to the correct team and which owner coordinates validation."
  },
  {
    "role": "System or product owner",
    "responsibility": "Confirms expected behavior, architecture, dependencies, business purpose, service criticality, and remediation ownership.",
    "should_receive": "Affected fictional asset, expected versus observed behavior, time, environment, evidence, and service context.",
    "should_not_receive": "Private identity details not needed for validation.",
    "next_decision": "Whether the observation is valid and which corrective options are feasible."
  },
  {
    "role": "Security or incident lead",
    "responsibility": "Coordinates risk, evidence, case boundaries, temporary safeguards, validation, escalation, and response quality.",
    "should_receive": "Evidence register, source health, possible impact, confirmed impact, control state, and owner dependencies.",
    "should_not_receive": "Unsupported attribution or claims that public disclosure is required.",
    "next_decision": "Whether the issue is a vulnerability report, incident, policy weakness, false positive, or other case."
  },
  {
    "role": "Data owner or privacy reviewer",
    "responsibility": "Determines whether fictional personal or confidential information is necessary, permitted, protected, retained, and shared correctly.",
    "should_receive": "Data categories, minimum fields, purpose, access list, storage, retention, deletion, and possible exposure statement.",
    "should_not_receive": "Full data sets when a narrow sample is sufficient.",
    "next_decision": "Which evidence may be used and whether specialized privacy review is required."
  },
  {
    "role": "Supplier or contract owner",
    "responsibility": "Coordinates external fictional communication, agreement obligations, evidence requests, support, and remediation with a provider.",
    "should_receive": "Contract-relevant scope, service impact, requested action, approved evidence, deadline, and response channel.",
    "should_not_receive": "Internal speculation, unrelated user data, or unapproved technical details.",
    "next_decision": "Which supplier contact, contract process, and evidence exchange are authorized."
  },
  {
    "role": "Legal, compliance, or policy reviewer",
    "responsibility": "Reviews fictional legal-risk, notification, policy, contract, disclosure, and records questions within formal authority.",
    "should_receive": "Fact pattern, evidence limits, affected owners, data categories, agreements, timelines, and decision questions.",
    "should_not_receive": "Student claims that a specific real law was violated.",
    "next_decision": "Which specialized review, preservation, notification, or approval path applies."
  },
  {
    "role": "Communications owner",
    "responsibility": "Creates aligned fictional user, leadership, supplier, teacher, and possible public messages from one approved fact set.",
    "should_receive": "Confirmed facts, impact limits, actions, status, owner, residual risk, approved detail level, and next update.",
    "should_not_receive": "Raw sensitive technical evidence unless necessary.",
    "next_decision": "What may be communicated, to whom, through which channel, and when."
  },
  {
    "role": "Reporter or student defender",
    "responsibility": "Stays within scope, preserves evidence, uses accurate language, protects confidentiality, answers owner questions, and documents the process.",
    "should_receive": "Acknowledgment, tracking reference, approved evidence requests, update schedule, and closure decision.",
    "should_not_receive": "Permission to perform new live testing unless separately authorized.",
    "next_decision": "Whether to provide approved clarification, pause, escalate, revise, or close the fictional report."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Confirm authorization and stop",
    "questions": "What fictional evidence is already authorized, what actions are prohibited, and has the reporter stopped at the discovery boundary?",
    "output": "Scope, evidence, and stop-condition statement.",
    "red_flag": "The reporter continued testing to prove impact."
  },
  {
    "step": "2",
    "title": "Preserve and minimize evidence",
    "questions": "Which records support the observation, what context is required, what private or sensitive data can be removed, and how is provenance preserved?",
    "output": "Minimum-necessary evidence register.",
    "red_flag": "The report includes full logs, mailboxes, private messages, or unrelated records."
  },
  {
    "step": "3",
    "title": "Describe expected and observed behavior",
    "questions": "What should the fictional system do, what did the supplied evidence show, when, where, and under which conditions?",
    "output": "Finding statement with environment and time.",
    "red_flag": "The report describes an attack narrative rather than the observed control weakness."
  },
  {
    "step": "4",
    "title": "Separate impact levels",
    "questions": "What exposure is possible, what access is confirmed, what change is confirmed, what disclosure is confirmed, and what remains unknown?",
    "output": "Impact and limitation matrix.",
    "red_flag": "Possible exposure is described as confirmed data loss."
  },
  {
    "step": "5",
    "title": "Identify recipients and owners",
    "questions": "Who owns the fictional system, data, supplier relationship, remediation, validation, communication, and residual risk?",
    "output": "Disclosure ownership map.",
    "red_flag": "The report is sent to a broad list because ownership is unclear."
  },
  {
    "step": "6",
    "title": "Send the private report",
    "questions": "Which approved channel, subject, summary, requested acknowledgment, evidence references, and contact information should be used?",
    "output": "Private disclosure brief.",
    "red_flag": "The message includes public threats or unnecessary sensitive details."
  },
  {
    "step": "7",
    "title": "Coordinate validation",
    "questions": "How can the fictional owner confirm the observation safely, and what evidence or clarification may the reporter provide within scope?",
    "output": "Owner-safe validation plan.",
    "red_flag": "The reporter is asked to perform new unauthorized testing."
  },
  {
    "step": "8",
    "title": "Track remediation and updates",
    "questions": "What acknowledgment, progress, remediation, testing, communication, and escalation milestones apply?",
    "output": "Disclosure timeline and status log.",
    "red_flag": "No owner, tracking reference, update cadence, or escalation path exists."
  },
  {
    "step": "9",
    "title": "Validate correction and residual risk",
    "questions": "Does the intended control now work, does service remain stable, is logging healthy, what remains exposed, and who signs off?",
    "output": "Validation and residual-risk record.",
    "red_flag": "The issue is declared fixed because a code or policy change was made."
  },
  {
    "step": "10",
    "title": "Decide communication and closure",
    "questions": "Should any fictional user, supplier, leadership, teacher, or public communication occur, what detail is safe, and what lessons should improve the process?",
    "output": "Communication decision, closure statement, reflection, and revision history.",
    "red_flag": "The reporter assumes discovery creates a personal right to publish."
  }
];
const reportFields = [
  {
    "field": "Report title",
    "strong_example": "Possible authorization weakness in fictional manager-page access control",
    "weak_example": "Critical breach lets anyone steal everything",
    "reason": "The title should identify the control concern without overstating impact."
  },
  {
    "field": "Authorized scope",
    "strong_example": "Review of supplied role-test records for APP-DEMO-01; no live access or new testing.",
    "weak_example": "I investigated the website.",
    "reason": "The owner must know exactly how the observation was obtained."
  },
  {
    "field": "Expected behavior",
    "strong_example": "The fictional support role should be denied access to the manager-only page.",
    "weak_example": "The site should be secure.",
    "reason": "Expected behavior creates a measurable control question."
  },
  {
    "field": "Observed behavior",
    "strong_example": "The supplied record shows the support role received a successful page response at 10:14 AM.",
    "weak_example": "I hacked the manager page.",
    "reason": "The report should describe evidence, not dramatize the event."
  },
  {
    "field": "Confirmed impact",
    "strong_example": "Unauthorized page view is supported; change, persistence, disclosure, and broader access remain unconfirmed.",
    "weak_example": "All manager data was stolen.",
    "reason": "Impact levels should remain separate."
  },
  {
    "field": "Evidence references",
    "strong_example": "E-RD-01 role matrix, E-RD-02 access log, E-RD-03 owner statement.",
    "weak_example": "See screenshots.",
    "reason": "Evidence identifiers improve traceability and review."
  },
  {
    "field": "Sensitive-data handling",
    "strong_example": "Only fictional role, page, time, and result fields are included; unrelated identity fields are excluded.",
    "weak_example": "All available data is attached.",
    "reason": "Minimum-necessary handling reduces privacy and confidentiality risk."
  },
  {
    "field": "Requested action",
    "strong_example": "Please acknowledge receipt, assign an owner, confirm expected role behavior, and provide the next update by the fictional review date.",
    "weak_example": "Fix this now or I will publish.",
    "reason": "Requests should be clear, professional, and coordinated."
  },
  {
    "field": "Reporter boundary",
    "strong_example": "No additional testing will occur without new written authorization.",
    "weak_example": "I can test more if needed.",
    "reason": "The report should preserve the original scope and stop condition."
  },
  {
    "field": "Closure criteria",
    "strong_example": "Approved role succeeds, unapproved role is denied, service remains healthy, logs remain available, owner signs off, and residual risk is documented.",
    "weak_example": "Close when the developer says fixed.",
    "reason": "Closure should be measurable and owner-validated."
  }
];
const evidenceMatrix = [
  {
    "id": "E-RD-01",
    "source": "Fictional authorization memo",
    "observation": "Permits review of supplied role-test evidence for APP-DEMO-01 only.",
    "supports": "The reporter may analyze the provided records and write a private report.",
    "limits": "Does not authorize live application access, new accounts, scanning, code review, or public disclosure.",
    "disclosure_use": "State the discovery method and stop at the approved evidence boundary."
  },
  {
    "id": "E-RD-02",
    "source": "Fictional role matrix",
    "observation": "Support users should be denied the manager-only page.",
    "supports": "Expected authorization behavior is clearly defined.",
    "limits": "Does not prove the current application enforces the rule.",
    "disclosure_use": "Use as the expected-state reference."
  },
  {
    "id": "E-RD-03",
    "source": "Fictional access record",
    "observation": "A support-role test received a successful page response at 10:14 AM.",
    "supports": "An unauthorized page view is supported in the supplied test evidence.",
    "limits": "Does not prove data modification, persistence, account compromise, or disclosure.",
    "disclosure_use": "Report the page-view finding and preserve impact limits."
  },
  {
    "id": "E-RD-04",
    "source": "Fictional service-health record",
    "observation": "The application remained available with normal response time.",
    "supports": "No service outage appears in the supplied period.",
    "limits": "Does not prove every control or function is healthy.",
    "disclosure_use": "Avoid unnecessary emergency language while still prioritizing the authorization weakness."
  },
  {
    "id": "E-RD-05",
    "source": "Fictional data-owner note",
    "observation": "The manager page may display confidential planning information.",
    "supports": "Possible exposure involves confidential data.",
    "limits": "Does not prove the support-role test viewed or disclosed every data element.",
    "disclosure_use": "Route privacy and impact questions to the data owner."
  },
  {
    "id": "E-RD-06",
    "source": "Fictional recipient directory",
    "observation": "The approved reporting channel is security-reports@example.invalid with the product owner copied after acknowledgment.",
    "supports": "A private initial recipient and later owner path are defined.",
    "limits": "Does not authorize public, class-wide, or supplier disclosure.",
    "disclosure_use": "Use only the approved fictional channel."
  },
  {
    "id": "E-RD-07",
    "source": "Fictional remediation note",
    "observation": "The developer states that authorization logic was centralized and tests were added.",
    "supports": "A corrective action was implemented.",
    "limits": "Does not prove the effective behavior or service outcome.",
    "disclosure_use": "Request approved and denied role validation plus service and logging checks."
  },
  {
    "id": "E-RD-08",
    "source": "Fictional validation record",
    "observation": "Manager role succeeds, support role is denied, application health is normal, and security logs record both results.",
    "supports": "The intended control and monitoring behavior are validated for the supplied test scope.",
    "limits": "Does not prove every route or future deployment remains correct.",
    "disclosure_use": "Support closure with bounded residual-risk language and monitoring."
  }
];
const timeline = [
  {
    "phase": "Discovery and stop",
    "target": "Same fictional work session",
    "reporter_action": "Preserve supplied evidence, stop additional testing, record scope, and protect sensitive details.",
    "owner_action": "None yet.",
    "evidence": "Authorization, evidence register, expected and observed behavior."
  },
  {
    "phase": "Private report",
    "target": "Promptly after evidence review",
    "reporter_action": "Send the minimum-necessary report through the approved channel.",
    "owner_action": "Acknowledge receipt and assign a tracking reference.",
    "evidence": "Private report, recipient record, acknowledgment."
  },
  {
    "phase": "Initial validation",
    "target": "Within the agreed fictional review period",
    "reporter_action": "Answer approved clarification questions without new testing.",
    "owner_action": "Confirm ownership, expected behavior, evidence quality, service context, and priority.",
    "evidence": "Owner statements, architecture, role rules, source health."
  },
  {
    "phase": "Remediation planning",
    "target": "After validation",
    "reporter_action": "Provide evidence context and impact limits.",
    "owner_action": "Choose temporary safeguards and long-term correction with owner, deadline, rollback, and tests.",
    "evidence": "Treatment options, change plan, risk record."
  },
  {
    "phase": "Progress updates",
    "target": "At agreed milestones",
    "reporter_action": "Track facts, requests, limits, and next update without public pressure.",
    "owner_action": "Share status, blockers, evidence requests, and revised timeline.",
    "evidence": "Status log and communication record."
  },
  {
    "phase": "Validation",
    "target": "After corrective action",
    "reporter_action": "Review supplied validation evidence within scope.",
    "owner_action": "Confirm allowed and denied behavior, service health, logs, ownership, and residual risk.",
    "evidence": "Validation matrix and signoff."
  },
  {
    "phase": "Communication decision",
    "target": "Before any broader release",
    "reporter_action": "Follow the approved decision and safe detail level.",
    "owner_action": "Determine whether user, supplier, leadership, teacher, or public communication is needed.",
    "evidence": "Audience map, approved fact set, disclosure decision."
  },
  {
    "phase": "Closure and lessons",
    "target": "After required outcomes",
    "reporter_action": "Document closure, reflection, revision, and fully fictional portfolio version.",
    "owner_action": "Record lessons, process improvements, monitoring, and future review.",
    "evidence": "Closure statement, lessons learned, revision history."
  }
];
const commonMistakes = [
  "Continuing to test a fictional issue after the approved discovery boundary has been reached.",
  "Publishing or threatening publication before the proper owner receives and reviews the private report.",
  "Using dramatic titles such as critical breach when the evidence supports only a narrower control weakness.",
  "Including full logs, screenshots, private messages, employee details, school records, supplier information, or internal identifiers.",
  "Sending the report to a large audience because the correct owner is unclear.",
  "Assuming discovery gives the reporter authority to contact users, suppliers, media, regulators, or the public.",
  "Providing invasive reproduction steps or instructions that exceed safe defensive validation.",
  "Treating possible exposure as confirmed access, confirmed disclosure, or confirmed harm.",
  "Demanding immediate remediation without considering service dependencies, testing, rollback, and owner capacity.",
  "Assuming a developer statement or ticket status proves that the issue is fixed.",
  "Ignoring source-health, evidence-provenance, time, environment, role, and configuration context.",
  "Using different facts in the private report, leadership update, teacher portfolio, and possible public summary.",
  "Failing to track acknowledgment, evidence requests, updates, decisions, validation, residual risk, and closure.",
  "Using real organizational evidence in a portfolio after changing only names."
];
const quizQuestions = [
  {
    "question": "What is the strongest first step after a fictional student observes a security control weakness within an authorized exercise?",
    "choices": [
      "Stop at the authorized boundary, preserve minimum-necessary evidence, and report privately through the approved channel.",
      "Continue testing until maximum impact is proven.",
      "Publish the finding so the owner responds quickly.",
      "Send the issue to every staff member."
    ],
    "answer": 0,
    "explanation": "Responsible disclosure begins with scope discipline, evidence preservation, privacy, and private owner routing."
  },
  {
    "question": "A fictional support-role test viewed a manager page. Which impact statement is strongest?",
    "choices": [
      "All manager data was stolen.",
      "The entire application was compromised.",
      "Unauthorized page view is supported; modification, persistence, broader access, and disclosure remain unconfirmed.",
      "No issue exists because the service stayed online."
    ],
    "answer": 2,
    "explanation": "The statement preserves the confirmed behavior and avoids unsupported impact."
  },
  {
    "question": "Why should a fictional disclosure report include a reporter boundary?",
    "choices": [
      "To state that no additional testing will occur without new written authorization.",
      "To reserve the right to publish at any time.",
      "To avoid identifying the approved evidence.",
      "To allow the reporter to use any method requested by the owner."
    ],
    "answer": 0,
    "explanation": "The boundary prevents scope expansion and protects both reporter and owner."
  },
  {
    "question": "A fictional developer says the issue is fixed. What should happen next?",
    "choices": [
      "Close immediately.",
      "Request measurable validation of approved and denied behavior, service health, logging, ownership, and residual risk.",
      "Publish the original report.",
      "Delete the evidence."
    ],
    "answer": 1,
    "explanation": "Implementation does not prove the effective defensive outcome."
  },
  {
    "question": "Who should decide whether a fictional issue is communicated publicly?",
    "choices": [
      "The discoverer alone.",
      "The first person who reads the report.",
      "The authorized communications and risk owners using the approved fact set and relevant reviews.",
      "Any student who thinks the issue is important."
    ],
    "answer": 2,
    "explanation": "Public communication affects many stakeholders and requires authorized ownership."
  },
  {
    "question": "Which fictional report request is strongest?",
    "choices": [
      "Fix this now or I will publish.",
      "Please acknowledge receipt, assign an owner, confirm expected behavior, and provide the next update by the agreed review date.",
      "Prove that no data was ever exposed.",
      "Send every internal record related to the system."
    ],
    "answer": 1,
    "explanation": "A professional request is specific, coordinated, evidence-aware, and does not threaten or demand impossible proof."
  },
  {
    "question": "What makes a responsible-disclosure portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "The company name is changed.",
      "Every organization, system, identity, recipient, email, record, vulnerability, date, action, decision, and outcome is invented.",
      "Real screenshots are cropped."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects privacy, confidentiality, owners, and real systems."
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

export default function ResponsibleDisclosureConceptsPage() {
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
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Coordinated Reporting
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.4 Responsible Disclosure Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders report fictional security concerns
            privately, accurately, and safely through the correct owners while
            protecting authorization, evidence, privacy, service continuity,
            remediation, communication, and public trust.
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
          lessonTitle="Responsible Disclosure Concepts"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, recipients, email addresses, reports, evidence, dates, actions, decisions, and outcomes.",
            "I understand that discovering a concern does not authorize additional testing, public posting, supplier contact, user notification, or disclosure.",
            "I will stop at the written evidence boundary and use only owner-approved validation.",
            "I will separate possible exposure, confirmed access, confirmed change, confirmed disclosure, service impact, and unknowns.",
            "I will remove unnecessary private, confidential, internal, supplier, and security-sensitive details.",
            "I will not use real screenshots, logs, vulnerabilities, authorization letters, emails, messages, employee records, school records, supplier data, or confidential documents.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Good Finding Can Be Reported in a Harmful Way"
        >
          <p className="leading-8">
            A fictional support-role test record shows access to a manager-only
            page. The student could exaggerate the result, collect more evidence,
            publish screenshots, contact the supplier, or pressure the owner.
            Responsible disclosure takes the opposite approach: stop at the
            authorized boundary, preserve the minimum evidence, report privately,
            route the issue to the correct owners, coordinate validation, protect
            sensitive details, and communicate only what the evidence supports.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Harmful reporting
              </p>
              <p className="mt-2 leading-7">
                Continue testing, collect every record, title the issue a
                critical breach, send it widely, and threaten publication.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Responsible reporting
              </p>
              <p className="mt-2 leading-7">
                Stop, preserve scope, write an evidence-limited private report,
                request acknowledgment, coordinate owners, validate correction,
                and document closure.
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
          title="Disclosure Changes Risk, Not Just Awareness"
        >
          <p className="leading-8">
            A private report can help an owner correct a fictional weakness.
            A careless report can expose sensitive details, interfere with
            remediation, confuse users, violate contracts, create unfair blame,
            or increase the chance of misuse. Responsible disclosure is therefore
            a security process: it controls who knows what, when they know it,
            what actions are permitted, how evidence is handled, and how the
            outcome is validated.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Protects the owner",
                "The correct team receives enough evidence to validate and remediate without surprise public pressure.",
              ],
              [
                "Protects users and data",
                "Minimum-necessary reporting limits privacy exposure and unsupported claims.",
              ],
              [
                "Protects the reporter",
                "Scope, timestamps, recipients, updates, and decisions remain documented and reviewable.",
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
          title="Stop → Preserve → Report → Coordinate → Validate → Close"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Stop", "Do not expand testing or collect new data beyond the written authorization."],
              ["Preserve", "Keep minimum-necessary fictional evidence with source, context, timestamps, handling, and limitations."],
              ["Report", "Use the approved private channel and evidence-limited language."],
              ["Coordinate", "Assign system, data, supplier, remediation, communication, and risk owners."],
              ["Validate", "Confirm expected and denied behavior, service health, logging, ownership, and residual risk."],
              ["Close", "Record final status, approved communication, lessons learned, reflection, revision, and monitoring."],
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
          title="Language for Responsible Disclosure"
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
            Disclosure Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Principles for Safe Coordinated Reporting
          </h2>

          <div className="mt-6 grid gap-5">
            {disclosurePrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.principle}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.why}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong practice
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_practice}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak practice
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_practice}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Portfolio artifact
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.artifact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Recipients and Owners
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Who Receives What—and Who Decides Next
          </h2>

          <div className="mt-6 grid gap-5">
            {recipientRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Responsibility", item.responsibility],
                    ["Should receive", item.should_receive],
                    ["Should not receive", item.should_not_receive],
                    ["Next decision", item.next_decision],
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
            Disclosure Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Discovery to Closure
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
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

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Red flag
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.red_flag}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Report Quality
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Strong Disclosure Fields versus Harmful Language
          </h2>

          <div className="mt-6 grid gap-5">
            {reportFields.map((item) => (
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
                      Strong example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.reason}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Coordinated Timeline
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Track Both Reporter and Owner Responsibilities
          </h2>

          <div className="mt-6 grid gap-5">
            {timeline.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.phase}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.target}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Reporter action", item.reporter_action],
                    ["Owner action", item.owner_action],
                    ["Evidence", item.evidence],
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
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Responsible Disclosure Dashboard"
          subtitle="Fictional reporting and remediation coordination for training only."
          metrics={[
            {
              label: "Private reports",
              value: "1",
              note: "One authorization-control concern was submitted through the approved fictional channel.",
            },
            {
              label: "Confirmed impact",
              value: "Page view",
              note: "Unauthorized page view is supported; modification and disclosure remain unconfirmed.",
            },
            {
              label: "Disclosure status",
              value: "Validation",
              note: "Owner correction is implemented and approved and denied role tests are pending review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Premature Public Disclosure Would Exceed Authorization and Evidence"
          severity="High"
          time="3:22 PM"
          source="Fake Northbridge Disclosure Coordination Console"
          details="A fictional student draft proposes publishing screenshots and describing a critical breach before the product owner completes validation. The current evidence supports one unauthorized page view only."
          recommendation="Keep the report private, remove unnecessary sensitive detail, correct the impact language, preserve the approved timeline, coordinate validation, and route any broader communication through the authorized owner."
        />

        <FakeLogPanel
          title="Fake Responsible Disclosure Timeline"
          logs={[
            "10:14 EVIDENCE role='support' page='manager' result='success'",
            "10:16 SCOPE additional-testing='stopped'",
            "10:20 IMPACT page-view='confirmed'",
            "10:21 IMPACT modification='unconfirmed'",
            "10:22 IMPACT disclosure='unconfirmed'",
            "10:30 REPORT channel='security-reports@example.invalid'",
            "10:31 REPORT status='submitted-private'",
            "10:45 ACK tracking='RD-TRAIN-104'",
            "11:00 OWNER product='assigned'",
            "11:15 DATA confidential-content='possible'",
            "11:16 PRIVACY owner-review='requested'",
            "12:30 REMEDIATION auth-logic='centralized'",
            "13:00 TEST manager-role='success'",
            "13:01 TEST support-role='denied'",
            "13:02 LOGGING both-results='healthy'",
            "15:22 DISCLOSURE public-release='not-approved'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence for a Safe Disclosure Decision
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
                    ["Disclosure use", item.disclosure_use],
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
          title="Should the Fictional Student Publish the Finding Now?"
          evidence={[
            "Written authorization permits supplied-evidence review and private reporting only.",
            "The supplied record supports one unauthorized page view.",
            "Modification, persistence, compromise, and disclosure remain unconfirmed.",
            "The page may contain confidential information.",
            "The product owner implemented a correction.",
            "Approved and denied role tests are available for validation.",
            "No public communication owner has approved release.",
          ]}
          options={[
            "Keep the report private, validate the correction, preserve impact limits, route communication through the authorized owner, and publish only a fully fictional portfolio artifact if approved.",
            "Publish screenshots immediately because the control weakness is real.",
            "Continue live testing until data disclosure is proven.",
            "Contact users directly so they can protect themselves.",
          ]}
          bestAnswer={0}
          explanation="Discovery does not create authority for additional testing, user contact, or public release. Coordinated private validation protects users, owners, evidence, service, and trust."
        />

        <SectionCard
          eyebrow="Common Disclosure Mistakes"
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
          title="Build a Fictional Responsible Disclosure Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Report the Northbridge Authorization Weakness
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                quote, copy, lightly modify, or summarize a real vulnerability
                report, email, screenshot, log, product name, system,
                organization, supplier, private message, or confidential
                record.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Authorization, discovery method, and stop-condition statement.</li>
                <li>Minimum-necessary evidence register with provenance and limitations.</li>
                <li>Expected versus observed behavior.</li>
                <li>Possible and confirmed impact matrix.</li>
                <li>Recipient, owner, and communication map.</li>
                <li>Private disclosure brief and acknowledgment request.</li>
                <li>Owner-safe validation plan with no additional unauthorized testing.</li>
                <li>Remediation, update, and escalation timeline.</li>
                <li>Validation, residual-risk, communication, and closure record.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The finished artifact must not reveal, imitate, or reproduce any
            real unresolved vulnerability, organization, system, private
            communication, confidential record, supplier relationship, or
            security-sensitive technical detail.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Owner Has Not Responded Yet"
          scenario="The fictional student submitted the private report through the approved channel. The expected acknowledgment period has passed, but no response has arrived."
          choices={[
            {
              label: "Choice A",
              response: "Use the documented escalation channel, restate the minimum-necessary finding, request acknowledgment, and continue to protect confidentiality.",
              outcome: "Best professional choice. The reporter follows the process without expanding testing or threatening public release.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Publish the finding immediately to force a response.",
              outcome: "Risky. Delay does not automatically authorize public disclosure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Send the report to every employee and supplier.",
              outcome: "Unsafe. Broad distribution increases privacy, confidentiality, and coordination risk.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Owner Says the Issue Is Fixed"
          scenario="The fictional developer says authorization logic was centralized. No approved and denied role evidence, service test, or logging result has been provided."
          choices={[
            {
              label: "Choice A",
              response: "Request bounded validation showing approved-role success, unapproved-role denial, service health, logging, owner signoff, and residual risk.",
              outcome: "Best professional choice. Implementation and validated outcome remain separate.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Close the report because the developer made a change.",
              outcome: "Risky. A change record does not prove effective behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Perform new live testing without permission.",
              outcome: "Unsafe. Validation must remain owner-approved and within scope.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Responsible Disclosure Checklist"
          items={[
            "I can state the fictional authorization, discovery method, evidence boundary, and stop condition.",
            "I can preserve minimum-necessary fictional evidence with source, time, context, provenance, handling, and limitations.",
            "I can describe fictional expected and observed behavior without operational exploitation instructions.",
            "I can separate possible exposure, confirmed access, confirmed change, confirmed disclosure, service impact, and unknowns.",
            "I can identify the fictional initial recipient, system owner, data owner, security lead, supplier owner, legal or policy reviewer, communications owner, validation owner, and risk owner.",
            "I can use a private approved channel and request acknowledgment, ownership, validation, and a next update.",
            "I can avoid public threats, unsupported claims, invasive reproduction steps, excessive technical detail, and unrelated private data.",
            "I can coordinate fictional evidence requests and owner-safe validation without expanding my authorization.",
            "I can track acknowledgment, evidence questions, status, remediation, blockers, testing, communication, residual risk, and closure.",
            "I can require fictional validation of approved and denied behavior, service health, logging, ownership, and monitoring.",
            "I can distinguish private reporting, supplier communication, leadership communication, user notification, teacher review, portfolio sharing, and public disclosure.",
            "I will keep every responsible-disclosure artifact fully fictional, defensive, privacy-safe, confidential, non-operational, and safe to share.",
          ]}
        />

        <MiniQuiz
          title="A1.4 Mini Quiz: Responsible Disclosure Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Responsible Disclosure Package for the Northbridge training case. Include the authorization and stop boundary, evidence inventory, expected and observed behavior, impact matrix, recipient and ownership map, private report, acknowledgment request, safe validation plan, disclosure timeline, remediation options, status updates, validation record, residual-risk statement, communication decision, closure note, reflection, revision history, and complete fictionalization statement."
          tips={[
            "Use precise evidence-limited language and avoid breach, attack, stolen, compromised, or malicious unless the fictional evidence directly supports the term.",
            "Make the reporter boundary explicit: no additional testing or data collection without new written authorization.",
            "Show how private reporting, validation, remediation, supplier communication, user communication, teacher review, portfolio sharing, and public disclosure require different owners.",
            "Include at least one premature or exaggerated draft statement, revise it after fictional feedback, and explain why the correction improves safety and trust.",
            "Use only invented organizations, systems, identities, email addresses, reports, evidence, dates, decisions, actions, recipients, and outcomes.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Responsible disclosure is a coordinated defensive process, not a race to publish.",
            "Discovery does not authorize additional testing, data collection, supplier contact, user notification, or public release.",
            "The strongest fictional report explains authorization, expected behavior, observed behavior, evidence, impact limits, owners, requested action, and reporter boundaries.",
            "Possible exposure, confirmed access, confirmed modification, confirmed disclosure, service impact, and residual uncertainty are different claims.",
            "Private reporting should use minimum-necessary evidence and the approved recipient channel.",
            "System, data, supplier, security, legal or policy, communications, validation, and risk decisions belong to different authorized owners.",
            "A developer statement, code change, policy update, or quiet alert does not prove remediation success.",
            "Validation should confirm approved and denied behavior, service health, logging, ownership, monitoring, and residual risk.",
            "Public communication requires authorized ownership, an approved fact set, safe detail, and coordinated timing.",
            "Every CyberShield responsible-disclosure artifact must remain fully fictional, privacy-safe, confidential, non-operational, and incapable of guiding real-world exploitation.",
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