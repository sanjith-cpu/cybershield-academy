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
  `${modulePath}/responsible-disclosure-concepts`;
const nextLesson =
  `${modulePath}/research-boundaries-and-safe-environments`;

const objectives = [
  "Explain why sensitive-information handling is a professional duty tied to privacy, trust, safety, authorization, evidence quality, and organizational responsibility.",
  "Classify fictional information by sensitivity, ownership, purpose, audience, retention, and possible harm.",
  "Apply minimum-necessary collection, access, storage, sharing, redaction, retention, deletion, and audit practices.",
  "Distinguish security evidence from unrelated personal, confidential, educational, employee, customer, supplier, legal, and operational information.",
  "Create a portfolio-ready sensitive-information handling plan using only invented data, systems, identities, records, actions, dates, and outcomes."
];
const vocabulary = [
  [
    "Sensitive information",
    "Fictional information that could create privacy, safety, legal, financial, operational, reputational, or trust harm if misused or disclosed improperly."
  ],
  [
    "Personal information",
    "Information linked or reasonably linkable to a fictional person, such as identity, contact, account, activity, location, education, employment, or support records."
  ],
  [
    "Confidential information",
    "Information restricted by role, policy, agreement, ownership, or purpose, including internal plans, security records, employee data, student data, supplier details, and incident material."
  ],
  [
    "Data classification",
    "A system for labeling fictional information according to sensitivity, permitted use, handling, sharing, retention, and protection requirements."
  ],
  [
    "Data owner",
    "The fictional role accountable for deciding how a data set may be used, accessed, shared, retained, deleted, and reviewed."
  ],
  [
    "Data custodian",
    "The fictional role responsible for operating storage, access control, backup, logging, protection, and deletion according to owner requirements."
  ],
  [
    "Purpose limitation",
    "Using fictional information only for the specific approved reason for which it was collected or authorized."
  ],
  [
    "Minimum necessary",
    "Using the fewest fields, records, users, systems, actions, copies, recipients, and retention time needed for the approved purpose."
  ],
  [
    "Need-to-know",
    "Limiting fictional information to authorized recipients who require it for a defined decision, action, review, or responsibility."
  ],
  [
    "Redaction",
    "Removing or obscuring fictional fields that are not needed for the approved audience or purpose while preserving useful context."
  ],
  [
    "Pseudonymization",
    "Replacing direct fictional identifiers with controlled substitutes so analysis can continue with reduced identity exposure."
  ],
  [
    "Anonymization concept",
    "Transforming fictional information so individuals are no longer reasonably identifiable within the intended context."
  ],
  [
    "Retention",
    "The approved period for keeping fictional information based on purpose, policy, evidence, legal, operational, or educational need."
  ],
  [
    "Secure deletion",
    "A controlled fictional process for removing information when retention ends, including copies, exports, working files, and unnecessary derivatives."
  ],
  [
    "Access review",
    "A periodic check confirming that only appropriate fictional users and roles retain access to sensitive information."
  ],
  [
    "Audit trail",
    "A fictional record showing who accessed, changed, shared, exported, retained, reviewed, or deleted information and why."
  ]
];
const classificationLevels = [
  {
    "level": "Public",
    "description": "Fictional information approved for broad release with low expected harm if shared accurately.",
    "examples": "Published program descriptions, approved public guidance, fictional awareness posters, and finalized public announcements.",
    "handling": "Confirm approval, accuracy, accessibility, version, and communication owner before release.",
    "portfolio_rule": "May be included only when fully invented and not copied from real confidential materials."
  },
  {
    "level": "Internal",
    "description": "Fictional information intended for authorized organizational use but not broad public distribution.",
    "examples": "Internal procedures, training schedules, general architecture summaries, internal contact roles, and routine service notes.",
    "handling": "Use approved channels, role-based access, version control, limited sharing, and retention rules.",
    "portfolio_rule": "Convert to a fully fictional learning example and remove internal operational details."
  },
  {
    "level": "Confidential",
    "description": "Fictional information that could cause meaningful privacy, operational, contractual, financial, or trust harm if exposed.",
    "examples": "Employee records, student records, customer data, supplier agreements, private communications, security findings, and incident evidence.",
    "handling": "Use minimum necessary, owner approval, strict access, secure storage, limited recipients, audit logs, and deletion controls.",
    "portfolio_rule": "Never use real confidential records; create completely invented substitutes."
  },
  {
    "level": "Highly Restricted",
    "description": "Fictional information requiring the strongest controls because misuse could create severe harm.",
    "examples": "Authentication secrets, recovery material, private keys, regulated records, highly sensitive investigations, and critical security configurations.",
    "handling": "Avoid collection unless explicitly necessary, use special approval, strong segregation, strict logging, short retention, and controlled destruction.",
    "portfolio_rule": "Do not reproduce real secrets or highly restricted content under any circumstances; use harmless placeholders only."
  }
];
const informationCategories = [
  {
    "category": "Identity and account data",
    "examples": "Fictional names, usernames, role memberships, account status, sign-in history, recovery state, and contact information.",
    "legitimate_use": "Confirm identity behavior, role assignment, access decisions, or support needs within written scope.",
    "unnecessary_use": "Collect unrelated contacts, personal details, or full activity histories.",
    "control": "Use pseudonyms, minimum fields, owner approval, short retention, and access logs."
  },
  {
    "category": "Student and education records",
    "examples": "Fictional grades, schedules, accommodations, discipline records, support notes, attendance, and family contacts.",
    "legitimate_use": "Only when a fictional authorized education or security purpose specifically requires the information.",
    "unnecessary_use": "Include records in a cybersecurity report because they are available.",
    "control": "Use strict role separation, minimum necessary, purpose limitation, private review, and deletion."
  },
  {
    "category": "Employee and workplace records",
    "examples": "Fictional performance notes, payroll details, leave information, manager messages, investigations, and access requests.",
    "legitimate_use": "Use only approved fields needed for a defined security or administrative decision.",
    "unnecessary_use": "Review complete mailboxes or personnel files to search for clues.",
    "control": "Require data-owner approval, privacy review, targeted fields, and auditable handling."
  },
  {
    "category": "Customer or user information",
    "examples": "Fictional account profiles, transactions, support tickets, preferences, communication history, and service usage.",
    "legitimate_use": "Validate a specific control, user-impact question, or authorized service issue.",
    "unnecessary_use": "Export entire customer data sets for convenience.",
    "control": "Filter records, mask identifiers, restrict exports, use secure analysis spaces, and delete working copies."
  },
  {
    "category": "Private communications",
    "examples": "Fictional emails, direct messages, meeting notes, support chats, and internal conversations.",
    "legitimate_use": "Only when explicitly authorized, necessary, proportionate, and owner-approved.",
    "unnecessary_use": "Search communications broadly because they might reveal intent.",
    "control": "Narrow search criteria, legal or privacy review, limited reviewers, protected storage, and strict retention."
  },
  {
    "category": "Security and incident information",
    "examples": "Fictional alerts, logs, configurations, evidence records, findings, containment actions, and response notes.",
    "legitimate_use": "Support authorized detection, investigation, response, validation, governance, and lessons learned.",
    "unnecessary_use": "Share raw details with unrelated audiences or place them in a public portfolio.",
    "control": "Need-to-know access, source integrity, redaction, approved communication, and fictionalized portfolio versions."
  },
  {
    "category": "Supplier and contract information",
    "examples": "Fictional agreements, support contacts, pricing, service limits, evidence-sharing terms, and access details.",
    "legitimate_use": "Coordinate approved supplier security, service, evidence, or risk decisions.",
    "unnecessary_use": "Disclose contract terms or supplier details in broad internal or public messages.",
    "control": "Use supplier owners, approved channels, contract review, minimum excerpts, and confidentiality."
  },
  {
    "category": "Technical secrets and credentials",
    "examples": "Fictional passwords, tokens, certificates, private keys, recovery codes, secrets, and privileged configuration.",
    "legitimate_use": "Normally avoid viewing or copying; use only approved secret-management workflows.",
    "unnecessary_use": "Paste secrets into tickets, chats, screenshots, code, or portfolio documents.",
    "control": "Use placeholders, secret vaults, access control, rotation, monitoring, and immediate escalation if exposed."
  },
  {
    "category": "Legal, audit, and investigation records",
    "examples": "Fictional legal requests, audit findings, evidence holds, interviews, investigation notes, and formal decisions.",
    "legitimate_use": "Support the exact authorized review under controlled ownership.",
    "unnecessary_use": "Reuse records for unrelated training, examples, or public explanation.",
    "control": "Specialized owner approval, preservation, limited access, handling logs, and controlled closure."
  },
  {
    "category": "Operational and resilience information",
    "examples": "Fictional recovery plans, service dependencies, emergency contacts, maintenance schedules, and backup locations.",
    "legitimate_use": "Plan and validate authorized continuity and recovery decisions.",
    "unnecessary_use": "Publish sensitive operational details in awareness content.",
    "control": "Separate public guidance from internal details, limit recipients, review regularly, and retire outdated copies."
  }
];
const handlingLifecycle = [
  {
    "step": "1",
    "title": "Define the approved purpose",
    "questions": "What fictional question or decision requires information, and which written authority supports that use?",
    "output": "Purpose and authorization statement.",
    "stop": "Pause if the purpose is broad, secondary, or unrelated to the original authorization."
  },
  {
    "step": "2",
    "title": "Identify owner and classification",
    "questions": "Who owns the fictional data, how is it classified, and which rules govern access, sharing, retention, and deletion?",
    "output": "Ownership and classification record.",
    "stop": "Pause if classification or ownership is unknown."
  },
  {
    "step": "3",
    "title": "Select minimum-necessary fields",
    "questions": "Which exact records and fields are required, and which can be excluded, masked, summarized, or pseudonymized?",
    "output": "Field-level minimum-necessary matrix.",
    "stop": "Pause if a full export is proposed without field-level justification."
  },
  {
    "step": "4",
    "title": "Approve access and recipients",
    "questions": "Who may view, analyze, approve, communicate, validate, and retain the fictional information?",
    "output": "Access and need-to-know map.",
    "stop": "Pause if access is inherited from broad group membership rather than approved purpose."
  },
  {
    "step": "5",
    "title": "Collect or receive securely",
    "questions": "How will the information enter the approved environment, and how will source, integrity, time, and provenance be preserved?",
    "output": "Secure intake and evidence record.",
    "stop": "Stop if information arrives through an unapproved personal account, chat, device, or public channel."
  },
  {
    "step": "6",
    "title": "Store and analyze safely",
    "questions": "Where may the information be stored, which controls apply, and how will working copies, exports, notes, and screenshots be limited?",
    "output": "Storage and analysis plan.",
    "stop": "Pause if local copies, unmanaged devices, or uncontrolled tools are required."
  },
  {
    "step": "7",
    "title": "Share and communicate minimally",
    "questions": "Which audience needs which fields, what should be redacted, and which secure channel and approval are required?",
    "output": "Audience-specific sharing matrix.",
    "stop": "Pause if the message includes unrelated personal or confidential details."
  },
  {
    "step": "8",
    "title": "Retain only as long as needed",
    "questions": "What fictional retention rule applies, what evidence or review need remains, and when should working copies expire?",
    "output": "Retention schedule.",
    "stop": "Do not keep information indefinitely because it may be useful later."
  },
  {
    "step": "9",
    "title": "Delete and verify",
    "questions": "Which copies, exports, caches, attachments, notes, and derivative files must be removed, and who confirms completion?",
    "output": "Deletion and verification record.",
    "stop": "Pause if evidence-preservation or legal-hold questions are unresolved."
  },
  {
    "step": "10",
    "title": "Audit, review, and improve",
    "questions": "Who accessed the information, were controls followed, did any overcollection occur, and what should improve?",
    "output": "Handling audit, residual risk, reflection, and revision plan.",
    "stop": "Do not hide access mistakes, accidental exposure, or missing records."
  }
];
const ownerRoles = [
  {
    "role": "Data owner",
    "responsibility": "Defines fictional purpose, classification, permitted use, access, sharing, retention, deletion, and risk acceptance.",
    "decision": "Whether a data set or field may be used for the approved task.",
    "cannot_assume": "That security urgency automatically permits broader use.",
    "evidence": "Ownership record, classification, approval, and use conditions."
  },
  {
    "role": "Data custodian",
    "responsibility": "Operates fictional storage, encryption, backup, access control, monitoring, export, retention, and deletion controls.",
    "decision": "How owner requirements are implemented safely.",
    "cannot_assume": "That technical administration grants authority to use the data.",
    "evidence": "Control configuration, access logs, storage record, and deletion verification."
  },
  {
    "role": "Security analyst",
    "responsibility": "Uses only approved fictional evidence, minimizes fields, preserves context, documents access, and avoids unrelated private information.",
    "decision": "Which approved evidence supports the security question and what remains unknown.",
    "cannot_assume": "That every available record is necessary.",
    "evidence": "Scope, field list, evidence register, analysis notes, and access record."
  },
  {
    "role": "Privacy reviewer",
    "responsibility": "Evaluates fictional purpose, proportionality, personal-data use, sharing, retention, user expectations, and possible harm.",
    "decision": "Whether additional privacy controls or specialized review are required.",
    "cannot_assume": "That masking one identifier eliminates all privacy risk.",
    "evidence": "Data map, purpose, fields, recipients, retention, and risk assessment."
  },
  {
    "role": "Records or evidence owner",
    "responsibility": "Defines fictional preservation, retention, hold, deletion, integrity, and handling requirements.",
    "decision": "Whether information must be preserved or may be deleted.",
    "cannot_assume": "That duplicate or working copies are safe to keep indefinitely.",
    "evidence": "Retention rule, evidence inventory, hold status, deletion record, and signoff."
  },
  {
    "role": "Communications owner",
    "responsibility": "Creates fictional audience-specific messages using approved facts and minimum-necessary details.",
    "decision": "What information may be communicated, to whom, when, and through which channel.",
    "cannot_assume": "That technical accuracy alone makes a disclosure appropriate.",
    "evidence": "Approved fact set, audience map, redaction, channel, and review."
  },
  {
    "role": "System or service owner",
    "responsibility": "Explains fictional business purpose, service impact, dependencies, and operational need for information.",
    "decision": "Which technical or operational details are necessary for service decisions.",
    "cannot_assume": "That service ownership grants authority over personal or confidential data.",
    "evidence": "Service catalog, dependency map, owner statement, and decision need."
  },
  {
    "role": "Teacher, mentor, or portfolio reviewer",
    "responsibility": "Ensures fictional student work is original, safe, fully invented, educational, and free of real confidential information.",
    "decision": "Whether the artifact is safe to submit or share.",
    "cannot_assume": "That changing names is enough to fictionalize real evidence.",
    "evidence": "Safety statement, source record, revision history, and fictionalization review."
  }
];
const dataMinimizationTests = [
  {
    "test": "Purpose",
    "strong_question": "Which fictional decision requires this field?",
    "weak_pattern": "Keep it because it may become useful.",
    "control": "Tie every field to a documented purpose."
  },
  {
    "test": "Relevance",
    "strong_question": "Does this record directly support the approved question?",
    "weak_pattern": "Collect all related records.",
    "control": "Exclude unrelated dates, people, systems, and events."
  },
  {
    "test": "Granularity",
    "strong_question": "Can a summary, count, category, or masked value answer the question?",
    "weak_pattern": "Use complete raw records by default.",
    "control": "Prefer the least detailed form that remains useful."
  },
  {
    "test": "Identity",
    "strong_question": "Does the analyst need the fictional person's direct identity?",
    "weak_pattern": "Always keep names and contact details.",
    "control": "Use pseudonyms or role labels when identity is unnecessary."
  },
  {
    "test": "Time",
    "strong_question": "Which fictional time range is required?",
    "weak_pattern": "Export the entire history.",
    "control": "Use the smallest justified time window."
  },
  {
    "test": "Audience",
    "strong_question": "Which fields does each recipient actually need?",
    "weak_pattern": "Send the same full report to everyone.",
    "control": "Create audience-specific views and redactions."
  },
  {
    "test": "Copies",
    "strong_question": "How many working copies are necessary and where may they exist?",
    "weak_pattern": "Save copies on personal devices for convenience.",
    "control": "Limit controlled copies and track them."
  },
  {
    "test": "Retention",
    "strong_question": "When does the approved purpose end, and which evidence must remain?",
    "weak_pattern": "Keep everything indefinitely.",
    "control": "Use defined retention, deletion, and hold review."
  }
];
const evidenceMatrix = [
  {
    "id": "SI-01",
    "source": "Fictional authorization memo",
    "observation": "Permits review of sign-in time, role, result, and source category for two training accounts.",
    "supports": "Four specific fields for two accounts are authorized.",
    "limits": "Does not authorize mailbox content, contact details, full identity history, or unrelated accounts.",
    "handling_use": "Build a field-level allowlist and reject broader exports."
  },
  {
    "id": "SI-02",
    "source": "Fictional mailbox-export request",
    "observation": "Requests all messages from one employee for the previous year.",
    "supports": "A broad collection request exists.",
    "limits": "Does not prove the full mailbox is necessary, authorized, or proportionate.",
    "handling_use": "Pause and seek a narrower owner-approved evidence request."
  },
  {
    "id": "SI-03",
    "source": "Fictional data-classification record",
    "observation": "Mailbox content, employee records, and support notes are confidential.",
    "supports": "Strict access, owner approval, sharing, retention, and deletion controls apply.",
    "limits": "Does not decide whether any specific record is relevant.",
    "handling_use": "Use classification to control access and minimize collection."
  },
  {
    "id": "SI-04",
    "source": "Fictional access log",
    "observation": "A broad analyst group can currently open the confidential evidence folder.",
    "supports": "Access exceeds the likely need-to-know population.",
    "limits": "Does not prove every group member viewed the records.",
    "handling_use": "Restrict access, review activity, document exposure, and validate the corrected state."
  },
  {
    "id": "SI-05",
    "source": "Fictional portfolio draft",
    "observation": "Contains realistic names, dates, screenshots, internal system labels, and message excerpts.",
    "supports": "The draft may reveal or imitate sensitive organizational information.",
    "limits": "Does not prove the student intentionally used real data.",
    "handling_use": "Replace the entire evidence set with fully invented content and record the revision."
  },
  {
    "id": "SI-06",
    "source": "Fictional retention note",
    "observation": "Working exports remain stored after the authorized review is complete.",
    "supports": "Retention exceeds the stated working purpose unless another approved requirement exists.",
    "limits": "Does not prove deletion is immediately permitted if preservation requirements apply.",
    "handling_use": "Confirm hold status, delete unnecessary copies, and record verification."
  },
  {
    "id": "SI-07",
    "source": "Fictional redacted report",
    "observation": "Uses role labels, event categories, rounded times, and evidence IDs instead of direct identities.",
    "supports": "The report reduces unnecessary identity exposure while preserving decision context.",
    "limits": "Does not guarantee anonymity if combined with other information.",
    "handling_use": "Review re-identification risk and audience need before sharing."
  },
  {
    "id": "SI-08",
    "source": "Fictional deletion verification",
    "observation": "Approved working copies, attachments, exports, and temporary notes were removed after owner signoff.",
    "supports": "The documented deletion scope was completed.",
    "limits": "Does not prove every backup or unmanaged copy never existed.",
    "handling_use": "Record residual uncertainty and continue periodic access and retention review."
  }
];
const sharingMatrix = [
  {
    "audience": "Security analyst",
    "needs": "Fictional event time, role, result, source category, evidence ID, and system context.",
    "remove": "Unrelated contact details, private messages, full personnel history, and unnecessary identity fields.",
    "channel": "Approved secure analysis workspace.",
    "approval": "Security lead and data owner."
  },
  {
    "audience": "Service owner",
    "needs": "Fictional service impact, affected function, decision options, dependency, owner action, and validation state.",
    "remove": "Unnecessary personal details and raw confidential evidence.",
    "channel": "Approved owner briefing or case system.",
    "approval": "Security lead and service owner."
  },
  {
    "audience": "Privacy reviewer",
    "needs": "Fictional data categories, fields, purpose, recipients, storage, retention, deletion, and possible exposure.",
    "remove": "Technical details not needed for privacy review.",
    "channel": "Approved private review channel.",
    "approval": "Data owner or designated privacy process."
  },
  {
    "audience": "Leadership",
    "needs": "Confirmed facts, business impact, options, recommendation, owner, deadline, residual risk, and next update.",
    "remove": "Raw logs, private identities, speculative attribution, and unnecessary technical detail.",
    "channel": "Approved leadership brief.",
    "approval": "Incident lead and communications owner."
  },
  {
    "audience": "Affected fictional user",
    "needs": "What happened, what action is required, what support is available, what information is confirmed, and when the next update will occur.",
    "remove": "Other users' information, internal security details, speculation, and blame.",
    "channel": "Approved user communication channel.",
    "approval": "Communications, privacy, and service owners as required."
  },
  {
    "audience": "Supplier",
    "needs": "Contract-relevant fictional service, evidence request, timeline, expected action, and approved technical context.",
    "remove": "Internal speculation, unrelated customer or employee data, and unapproved security details.",
    "channel": "Contract-approved supplier contact path.",
    "approval": "Supplier owner and contract or legal reviewer."
  },
  {
    "audience": "Teacher or mentor",
    "needs": "Fully fictional learning goals, reasoning, evidence structure, decisions, reflection, and revision history.",
    "remove": "All real organizations, systems, identities, records, screenshots, messages, incidents, and confidential details.",
    "channel": "Approved educational submission method.",
    "approval": "Student and teacher safety review."
  },
  {
    "audience": "Public portfolio",
    "needs": "Only fully invented scenarios, safe defensive reasoning, generic architecture, learning outcomes, and professional reflection.",
    "remove": "Real or realistic confidential evidence, internal identifiers, private data, unresolved vulnerabilities, and operational details.",
    "channel": "Approved public platform after review.",
    "approval": "Student, teacher or mentor, and portfolio safety review."
  }
];
const commonMistakes = [
  "Collecting a full fictional mailbox, data set, or history when only a few approved fields are needed.",
  "Assuming security work automatically permits access to private, employee, student, customer, or supplier information.",
  "Using broad shared folders instead of role-based need-to-know access.",
  "Saving fictional sensitive records on personal devices, personal cloud storage, personal email, or unmanaged notes.",
  "Copying sensitive details into screenshots, chats, tickets, presentation slides, or portfolio drafts.",
  "Keeping working exports indefinitely because they might be useful later.",
  "Using direct identities when a role label, pseudonym, count, category, or summary would answer the question.",
  "Treating redaction as complete anonymization without considering context and re-identification.",
  "Sharing the same full report with technical, leadership, user, supplier, teacher, and public audiences.",
  "Deleting records before confirming evidence-preservation, retention, or legal-hold requirements.",
  "Failing to track who accessed, exported, shared, retained, or deleted fictional sensitive information.",
  "Hiding accidental exposure, overcollection, or unauthorized access instead of reporting and correcting it.",
  "Changing only names while keeping real dates, screenshots, message wording, system labels, and incident structure.",
  "Assuming encryption or password protection makes an otherwise unauthorized collection acceptable."
];
const quizQuestions = [
  {
    "question": "What best defines minimum-necessary handling?",
    "choices": [
      "Using the fewest fictional fields, records, users, copies, recipients, and retention time needed for the approved purpose.",
      "Collecting all available information and deleting some later.",
      "Sharing full records only with trusted people.",
      "Keeping extra data in case it becomes useful."
    ],
    "answer": 0,
    "explanation": "Minimum necessary limits collection and handling before exposure occurs."
  },
  {
    "question": "A fictional analyst is authorized to review sign-in time, role, result, and source category. May the analyst export a full mailbox?",
    "choices": [
      "Yes, because the mailbox may contain clues.",
      "Only if separate written authority, data-owner approval, minimum-necessary scope, and handling rules are established.",
      "Yes, if the supervisor requests it.",
      "Yes, if the mailbox is encrypted."
    ],
    "answer": 1,
    "explanation": "Encryption does not replace purpose, authorization, ownership, or minimum-necessary review."
  },
  {
    "question": "What is the strongest way to share a fictional leadership update?",
    "choices": [
      "Attach all raw evidence.",
      "Include confirmed facts, business impact, options, recommendation, ownership, residual risk, and next update while excluding unnecessary private detail.",
      "List every identity involved.",
      "Use the same report sent to analysts."
    ],
    "answer": 1,
    "explanation": "Audience-specific communication limits sensitive details while preserving decision value."
  },
  {
    "question": "Why can redacted fictional information still create privacy risk?",
    "choices": [
      "Redaction never works.",
      "Other contextual details may allow re-identification.",
      "Only names matter.",
      "Redacted data is always public."
    ],
    "answer": 1,
    "explanation": "Dates, roles, events, locations, system context, and combinations of fields can still identify someone."
  },
  {
    "question": "What should happen when a fictional review ends and working exports are no longer needed?",
    "choices": [
      "Keep them forever.",
      "Share them with the whole team.",
      "Confirm preservation or hold requirements, delete unnecessary copies, and record verification.",
      "Move them to a personal drive."
    ],
    "answer": 2,
    "explanation": "Retention and deletion should be controlled, documented, and owner-approved."
  },
  {
    "question": "A broad analyst group can access a confidential fictional evidence folder. What is strongest?",
    "choices": [
      "Leave access because no misuse is confirmed.",
      "Restrict access to approved roles, review activity, document possible exposure, and validate the corrected state.",
      "Delete the folder immediately without review.",
      "Copy the files elsewhere first."
    ],
    "answer": 1,
    "explanation": "The response should reduce access, preserve evidence, assess exposure, and validate correction."
  },
  {
    "question": "What makes a sensitive-information portfolio artifact safe to share?",
    "choices": [
      "Real names are changed.",
      "Screenshots are cropped.",
      "Every organization, system, identity, record, message, date, action, decision, and outcome is completely invented.",
      "Only passwords are removed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization is required; partial editing is not enough."
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

export default function HandlingSensitiveInformationEthicallyPage() {
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
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Privacy and Data Handling
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.5 Handling Sensitive Information Ethically
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders classify, minimize, protect,
            share, retain, delete, audit, and communicate fictional sensitive
            information without collecting or exposing more than the approved
            purpose requires.
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
          lessonTitle="Handling Sensitive Information Ethically"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, records, messages, classifications, access logs, dates, actions, and outcomes.",
            "I understand that security work does not automatically authorize access to personal, employee, student, customer, supplier, legal, or confidential information.",
            "I will use the fewest fictional records and fields needed for the approved purpose.",
            "I will not upload, paste, summarize, lightly edit, or reproduce real private messages, school records, employee records, customer data, supplier agreements, screenshots, logs, credentials, or confidential documents.",
            "I will pause if ownership, classification, purpose, access, retention, deletion, or evidence-preservation requirements are unclear.",
            "I will keep every portfolio artifact fully invented and safe for educational sharing.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="More Data Can Create More Risk, Not More Truth"
        >
          <p className="leading-8">
            A fictional analyst is authorized to review four sign-in fields for
            two training accounts. A supervisor requests a full mailbox export,
            and a broad analyst group can open the confidential evidence folder.
            The strongest response is not to collect everything. It is to use a
            field-level allowlist, protect need-to-know access, involve the data
            owner, preserve necessary evidence, reject unrelated information,
            define retention, and verify deletion of working copies.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Data-heavy shortcut
              </p>
              <p className="mt-2 leading-7">
                Export all available records, share them with the full team,
                save copies for later, and remove names before publishing.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Ethical handling
              </p>
              <p className="mt-2 leading-7">
                Define purpose, owner, classification, minimum fields,
                recipients, storage, retention, deletion, audit, validation,
                and a fully fictional portfolio version.
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
          title="Sensitive Information Is Both Evidence and Responsibility"
        >
          <p className="leading-8">
            Cybersecurity teams often need fictional identity, access,
            configuration, service, incident, user, supplier, and operational
            information. That information can support important decisions, but
            it can also expose people, reveal internal weaknesses, create
            unfair conclusions, violate trust, and increase risk if collected
            or shared carelessly. Ethical handling means preserving decision
            value while reducing unnecessary exposure throughout the full
            information lifecycle.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Collect less", "Use the smallest approved data set and field list that answers the security question."],
              ["Expose less", "Limit identities, recipients, copies, channels, screenshots, exports, and portfolio details."],
              ["Keep less", "Retain only what remains necessary, preserve what must remain, and verify deletion of the rest."],
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
          title="Purpose → Minimum Necessary → Need-to-Know → Retention → Deletion"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Purpose", "Use fictional information only for the approved security or educational decision."],
              ["Minimum necessary", "Choose the fewest records, fields, users, copies, and time needed."],
              ["Need-to-know", "Share each audience only what its role requires."],
              ["Retention", "Keep information only while an approved purpose, evidence, review, or preservation need exists."],
              ["Deletion", "Remove unnecessary copies and verify the result after owner review."],
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
          title="Language for Ethical Data Handling"
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
            Classification Levels
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Match Protection to Sensitivity and Harm
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {classificationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.level}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Fictional examples", item.examples],
                    ["Handling", item.handling],
                    ["Portfolio rule", item.portfolio_rule],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.level}-${label}`}
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
            Information Categories
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Categories Requiring Different Handling Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {informationCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Examples", item.examples],
                    ["Legitimate use", item.legitimate_use],
                    ["Unnecessary use", item.unnecessary_use],
                    ["Strong control", item.control],
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
            Handling Lifecycle
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Purpose to Verified Deletion
          </h2>

          <div className="mt-6 grid gap-5">
            {handlingLifecycle.map((item) => (
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
            Ownership and Accountability
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Who Decides How Sensitive Information Is Used
          </h2>

          <div className="mt-6 grid gap-5">
            {ownerRoles.map((item) => (
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
                    ["Decision", item.decision],
                    ["Cannot assume", item.cannot_assume],
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
            Data-Minimization Tests
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Collecting or Sharing
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {dataMinimizationTests.map((item) => (
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
                    Weak pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak_pattern}</p>
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
            Audience-Specific Sharing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Give Each Audience Only What It Needs
          </h2>

          <div className="mt-6 grid gap-5">
            {sharingMatrix.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Needs", item.needs],
                    ["Remove", item.remove],
                    ["Approved channel", item.channel],
                    ["Approval", item.approval],
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

        <FakeDashboardCard
          title="Fake Northbridge Sensitive-Information Dashboard"
          subtitle="Fictional classification, access, retention, and privacy review for training only."
          metrics={[
            {
              label: "Approved fields",
              value: "4",
              note: "Sign-in time, role, result, and source category are authorized for two training accounts.",
            },
            {
              label: "Excess access",
              value: "1 group",
              note: "A broad analyst group can currently open the confidential evidence folder.",
            },
            {
              label: "Working copies",
              value: "6",
              note: "Temporary exports, attachments, and notes require retention and deletion review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Sensitive Information Exceeds Purpose, Need-to-Know, and Retention Boundaries"
          severity="High"
          time="4:06 PM"
          source="Fake Northbridge Data-Handling Review Console"
          details="A fictional full mailbox export was requested for a four-field sign-in review, broad analyst access remains enabled, and working copies are still stored after the authorized task ended."
          recommendation="Pause expanded collection, confirm the data owner and classification, enforce a field-level allowlist, restrict access, review activity, preserve required evidence, remove unnecessary copies, and document retention and deletion verification."
        />

        <FakeLogPanel
          title="Fake Sensitive-Information Handling Timeline"
          logs={[
            "09:00 PURPOSE question='sign-in-behavior'",
            "09:01 AUTH accounts='two-training-identities'",
            "09:01 AUTH fields='time,role,result,source-category'",
            "09:10 REQUEST mailbox-export='full-year'",
            "09:11 PURPOSE mailbox='not-justified'",
            "09:12 DATA mailbox='confidential'",
            "09:15 DECISION mailbox-request='paused'",
            "09:30 ACCESS folder-group='analysts-all'",
            "09:31 NEED-TO-KNOW group='excessive'",
            "10:00 ACCESS correction='restricted'",
            "10:05 REVIEW prior-access='started'",
            "11:15 REPORT identifiers='pseudonymized'",
            "13:00 TASK status='complete'",
            "13:10 RETENTION working-copies='six'",
            "14:00 HOLD status='none'",
            "16:06 DELETE verification='pending'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Evidence Supports about Data Handling
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
                    ["Handling use", item.handling_use],
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
          title="What Should the Fictional Analyst Do with the Mailbox Request?"
          evidence={[
            "Written authorization permits four sign-in fields for two training accounts.",
            "A full year of mailbox content was requested.",
            "Mailbox content is classified confidential.",
            "No data-owner approval or field-level justification exists.",
            "A targeted sign-in review can answer the approved question.",
            "The broad evidence folder also has excessive analyst-group access.",
          ]}
          options={[
            "Pause the mailbox request, confirm the data owner, continue with the approved four fields, restrict folder access, review activity, and document retention and deletion.",
            "Export the mailbox because it may contain useful context.",
            "Export only half of the mailbox without approval.",
            "Ignore the access issue because no misuse is confirmed.",
          ]}
          bestAnswer={0}
          explanation="The strongest response protects purpose limitation, minimum necessary, ownership, need-to-know, access review, evidence, and retention."
        />

        <SectionCard
          eyebrow="Common Handling Mistakes"
          title="Patterns That Turn Evidence into Privacy and Trust Risk"
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
          title="Build a Fictional Sensitive-Information Handling Plan"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Minimize and Protect the Northbridge Evidence
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                private messages, employee records, school records, customer
                data, supplier information, legal records, credentials,
                screenshots, logs, or confidential documents.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Purpose, authorization, owner, and classification statement.</li>
                <li>Field-level minimum-necessary matrix.</li>
                <li>In-scope and excluded information categories.</li>
                <li>Access and need-to-know map.</li>
                <li>Secure intake, storage, working-copy, and audit plan.</li>
                <li>Pseudonymization, redaction, and re-identification review.</li>
                <li>Audience-specific sharing matrix.</li>
                <li>Retention, hold review, deletion, and verification plan.</li>
                <li>Exposure assessment, corrective action, and validation.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Never use realistic confidential evidence merely because names are
            changed. The organization, systems, identities, records, messages,
            dates, classifications, access history, actions, decisions, and
            outcomes must all be invented.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Broad Group Can Access the Confidential Folder"
          scenario="A fictional access review shows that the entire analyst group can open confidential evidence, but no supplied record proves that every member viewed it."
          choices={[
            {
              label: "Choice A",
              response: "Restrict access to approved roles, preserve and review activity records, notify the correct owner, assess possible exposure, validate the new state, and document residual uncertainty.",
              outcome: "Best professional choice. The response reduces risk without making unsupported accusations.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Assume everyone viewed the files and blame the group.",
              outcome: "Risky. Excess access is confirmed, but individual access or intent is not.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Leave access unchanged because misuse is unconfirmed.",
              outcome: "Unsafe. Excessive access itself requires correction and review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Portfolio Draft Contains Realistic Screenshots"
          scenario="A fictional student draft includes realistic names, internal labels, dates, screenshots, and message excerpts copied from an unknown source."
          choices={[
            {
              label: "Choice A",
              response: "Stop publication, replace the entire evidence set with fully invented content, document the source concern, review the artifact, and record the revision.",
              outcome: "Best professional choice. Partial redaction is not enough when origin and sensitivity are uncertain.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Change the names and keep everything else.",
              outcome: "Risky. Dates, wording, system labels, screenshots, and context may still expose real information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Publish because educational use makes it acceptable.",
              outcome: "Unsafe. Educational purpose does not remove privacy, confidentiality, ownership, or safety duties.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Sensitive-Information Handling Checklist"
          items={[
            "I can state the fictional purpose, authorization, data owner, custodian, classification, and decision need.",
            "I can select exact fictional records, fields, identities, systems, and time ranges using minimum-necessary reasoning.",
            "I can exclude unrelated fictional personal, employee, student, customer, supplier, legal, private-message, and confidential information.",
            "I can distinguish public, internal, confidential, and highly restricted fictional information.",
            "I can define fictional intake, provenance, integrity, storage, encryption, access, working-copy, export, screenshot, and audit controls.",
            "I can use fictional pseudonyms, role labels, summaries, categories, rounded times, and redaction without assuming perfect anonymization.",
            "I can create different fictional views for analysts, service owners, privacy reviewers, leadership, users, suppliers, teachers, and public portfolios.",
            "I can define fictional retention, evidence-preservation, hold review, deletion, verification, and residual uncertainty.",
            "I can identify and correct fictional excessive access, overcollection, uncontrolled copies, unnecessary retention, and unsafe sharing.",
            "I can report accidental fictional exposure or handling mistakes without hiding them or blaming unsupported individuals.",
            "I can validate fictional access, storage, sharing, retention, deletion, service, source health, owner signoff, and monitoring outcomes.",
            "I will never use real private messages, school records, employee records, customer data, supplier details, credentials, screenshots, logs, incidents, or confidential documents in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A1.5 Mini Quiz: Handling Sensitive Information Ethically"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Sensitive-Information Handling Package for the Northbridge training case. Include the approved purpose, written authority, data owner, custodian, classification, minimum-necessary field matrix, excluded information, access and need-to-know map, secure intake, storage, working-copy and audit controls, pseudonymization and redaction decisions, audience-specific sharing, retention and hold review, deletion and verification, access-exposure assessment, corrective actions, validation, residual risk, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Tie every fictional field to a specific decision need and remove fields that do not contribute.",
            "Show that encryption, trust, urgency, or technical access does not replace authorization and minimum necessary.",
            "Create separate fictional versions for technical, service, privacy, leadership, user, supplier, teacher, and public audiences.",
            "Include at least one overcollection or excessive-access mistake, revise it after review, and explain how the correction reduces harm.",
            "Keep every organization, system, identity, record, message, classification, date, access event, action, decision, and outcome completely invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Sensitive information should be used only for a defined authorized purpose.",
            "Security work does not automatically permit access to personal, employee, student, customer, supplier, legal, private, or confidential information.",
            "Minimum necessary applies to records, fields, identities, systems, time ranges, recipients, copies, and retention.",
            "Data owners define permitted use, while custodians implement storage, access, logging, retention, and deletion controls.",
            "Classification, need-to-know, purpose limitation, redaction, pseudonymization, retention, deletion, and audit work together.",
            "Redaction may reduce exposure but does not guarantee anonymity when context can identify a person or organization.",
            "Each audience should receive only the fictional information required for its authorized decision.",
            "Excess access, overcollection, uncontrolled copies, and unnecessary retention require correction even when misuse is not confirmed.",
            "Deletion must wait for appropriate preservation review and should include working copies, exports, attachments, notes, and derivatives.",
            "Every CyberShield sensitive-information artifact must remain fully fictional, defensive, privacy-safe, non-operational, and safe for responsible educational sharing.",
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