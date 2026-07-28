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
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const previousLesson = `${modulePath}/creating-a-risk-recommendation`;
const nextLesson = `${modulePath}/intermediate-final-readiness-review`;

const objectives = [
  "Define a fictional communication purpose, audience, decision need, scope, evidence boundary, privacy rule, urgency, owner, approval path, delivery channel, and next-update time.",
  "Translate fictional technical records into clear statements that preserve observations, supported conclusions, alternate explanations, confidence, potential impact, confirmed impact, limitations, ownership, and validation.",
  "Adapt one fictional evidence set for analysts, service owners, leadership, users, suppliers, teachers, and portfolio reviewers without changing the underlying facts.",
  "Use fictional diagrams, timelines, evidence tables, risk statements, recommendations, status summaries, and action requests to make complex defensive evidence understandable and decision-ready.",
  "Create a complete fictional technical-evidence communication package with source register, audience matrix, analyst brief, leadership update, service summary, user guidance, supplier note, visual aid, review record, reflection, and portfolio-safety statement."
];
const vocabulary = [
  [
    "Technical evidence",
    "A fictional log, alert, configuration record, identity record, message record, service record, source-health record, decision record, validation result, or owner confirmation used to support a defensive conclusion."
  ],
  [
    "Audience analysis",
    "A fictional review of who will receive the message, what they know, what they need, what they may decide, and which details should be included or omitted."
  ],
  [
    "Decision need",
    "The fictional approval, action, prioritization, service choice, communication choice, escalation, acceptance, or review the message should support."
  ],
  [
    "Observation",
    "A fictional fact directly represented in an approved source, such as a sign-in, policy state, page view, click, source gap, or validation result."
  ],
  [
    "Conclusion",
    "A fictional interpretation supported by one or more observations and limited by source coverage, context, alternatives, and confidence."
  ],
  [
    "Alternate explanation",
    "A fictional interpretation that also fits part of the evidence and should be considered until additional evidence increases confidence."
  ],
  [
    "Confidence",
    "A fictional estimate of how strongly the evidence supports the conclusion within the defined scope and source limits."
  ],
  [
    "Potential impact",
    "Fictional harm that could occur if the risk or control weakness led to an adverse outcome."
  ],
  [
    "Confirmed impact",
    "Fictional harm directly supported by evidence rather than inferred from possibility or severity."
  ],
  [
    "Audience summary",
    "A fictional version of the same evidence tailored to the reader’s role, terminology, detail, action, and decision need."
  ],
  [
    "Executive summary",
    "A fictional concise update covering known facts, confirmed and possible impact, current actions, service state, decision needed, residual risk, and next update."
  ],
  [
    "Action request",
    "A fictional clear statement of what the audience should approve, perform, review, communicate, validate, or monitor."
  ],
  [
    "Message cadence",
    "The fictional timing and frequency of updates based on urgency, audience needs, decisions, service state, and meaningful evidence change."
  ],
  [
    "Communication approval",
    "The fictional owner or role authorized to approve technical, leadership, user, supplier, service, or public-facing messages."
  ],
  [
    "Visual explanation",
    "A fictional diagram, timeline, matrix, chart, or flow that clarifies relationships, sequence, ownership, evidence, risk, or validation."
  ],
  [
    "Portfolio-safe communication",
    "A fictional message using invented organizations, systems, identities, evidence, dates, suppliers, incidents, actions, and outcomes without exposing private material."
  ]
];
const audiences = [
  {
    "audience": "SOC analyst",
    "decision": "Which fictional case should be opened, separated, escalated, enriched, monitored, or closed?",
    "include": "Evidence identifiers, timestamps, source health, case boundaries, findings, confidence, alternatives, actions, owners, blockers, and validation.",
    "omit": "Unnecessary business history and unsupported impact claims.",
    "tone": "Precise, operational, evidence-limited, and concise enough for handoff.",
    "sample": "Four fictional cases remain coordinated but separate because systems, identities, evidence, owners, actions, and impact limits differ."
  },
  {
    "audience": "Service owner",
    "decision": "Which fictional service change, continuity choice, rollback, dependency, test, or recovery action should be approved?",
    "include": "Service status, dependencies, targeted changes, owner responsibilities, rollback, validation, business tradeoffs, and next milestone.",
    "omit": "Raw fields that do not change a service decision.",
    "tone": "Operational, continuity-aware, and focused on safe implementation.",
    "sample": "The fictional service remains available while targeted access and authorization corrections are completed and validated."
  },
  {
    "audience": "Leadership",
    "decision": "Which fictional priority, resource, risk treatment, communication, or closure decision is needed?",
    "include": "Known facts, confirmed and possible impact, current actions, service state, residual risk, decision request, owner, and next update.",
    "omit": "Long event lists, unexplained acronyms, raw logs, blame, and certainty beyond evidence.",
    "tone": "Brief, calm, accurate, and decision-ready.",
    "sample": "Serious fictional control weaknesses were identified and corrected; no confirmed disclosure or account takeover appears in current covered evidence."
  },
  {
    "audience": "Affected user",
    "decision": "Which fictional safe action should the user take and where should the user get help?",
    "include": "What happened, what is confirmed, what not to do, required action, support path, privacy limits, and next update.",
    "omit": "Other users’ information, technical jargon, blame, or unsupported compromise claims.",
    "tone": "Clear, supportive, respectful, and action-oriented.",
    "sample": "The fictional message was malicious. One click is confirmed, no information entry is reported, and targeted identity review is complete."
  },
  {
    "audience": "Supplier owner",
    "decision": "Which fictional access, evidence, approval, deadline, contract, escalation, or support action is required?",
    "include": "Verified identity, business need, access state, approval status, requested evidence, owner, deadline, and response channel.",
    "omit": "Unrelated cases, accusations, unverified contacts, or unnecessary confidential details.",
    "tone": "Professional, neutral, specific, and accountable.",
    "sample": "The fictional supplier exception expired and access remains removed pending a new narrow, time-limited, owner-approved request."
  },
  {
    "audience": "Technical development team",
    "decision": "Which fictional design, code, authorization, logging, test, or validation change should be implemented?",
    "include": "Expected behavior, observed behavior, affected roles, evidence, impact limits, recommended control, test criteria, owner, and deadline.",
    "omit": "Vague statements such as the application is insecure.",
    "tone": "Specific, reproducible from supplied fictional evidence, and focused on defensive correction.",
    "sample": "The fictional support role can load a manager-only page; restrict the route to approved roles and validate approved and denied test cases."
  },
  {
    "audience": "Teacher or mentor",
    "decision": "Which fictional concept, reasoning step, artifact quality issue, or learning gap should be reviewed?",
    "include": "Learning claim, evidence, reasoning, limitation, reflection, revision, and next improvement.",
    "omit": "Private real-world material or unsupported claims of professional authority.",
    "tone": "Reflective, educational, and transparent about uncertainty.",
    "sample": "The fictional artifact demonstrates strong evidence analysis but needs clearer separation of possible exposure and confirmed impact."
  },
  {
    "audience": "Portfolio reviewer",
    "decision": "Which fictional defensive skills, communication choices, ethics, validation, and growth does the artifact demonstrate?",
    "include": "Project purpose, selected evidence, analytical narrative, audience versions, visuals, decisions, validation, reflection, and safety statement.",
    "omit": "Real organizations, incidents, logs, messages, identities, suppliers, systems, screenshots, or confidential context.",
    "tone": "Professional, accessible, traceable, and portfolio-safe.",
    "sample": "This fictional Northbridge package demonstrates how one evidence set can support several audiences without changing the underlying facts."
  }
];
const translationSteps = [
  {
    "step": "1. State the question",
    "technical": "Which fictional event, control state, service condition, user interaction, or decision must be explained?",
    "clear": "Open with the exact question the audience needs answered.",
    "avoid": "Beginning with a large evidence dump or dramatic alert title.",
    "check": "Can the reader explain why this message exists after the first two sentences?"
  },
  {
    "step": "2. Separate facts from interpretation",
    "technical": "List fictional observations, evidence identifiers, timestamps, source health, owners, and limitations.",
    "clear": "Use labels such as confirmed fact, supported conclusion, alternate explanation, and unknown.",
    "avoid": "Mixing observed records with analyst assumptions.",
    "check": "Can every factual sentence be traced to supplied evidence?"
  },
  {
    "step": "3. Explain significance",
    "technical": "Describe fictional control weakness, possible exposure, confirmed access, confirmed impact, service state, and residual risk.",
    "clear": "Tell the audience why the evidence matters to its decision.",
    "avoid": "Repeating the same technical details without connecting them to consequences.",
    "check": "Does the reader understand what changes because of this evidence?"
  },
  {
    "step": "4. Preserve uncertainty",
    "technical": "State fictional source gaps, alternate explanations, confidence, uncovered paths, and evidence that could change the conclusion.",
    "clear": "Use direct phrases such as current evidence supports, does not confirm, or remains unknown.",
    "avoid": "Using vague words such as maybe without explaining why.",
    "check": "Can the reader distinguish uncertainty from indecision?"
  },
  {
    "step": "5. Identify ownership",
    "technical": "Separate fictional analyst, identity, service, application, cloud, supplier, communications, recovery, and risk authority.",
    "clear": "Name who decides, who acts, who validates, and who accepts residual risk.",
    "avoid": "Assigning every action to security or to the message recipient.",
    "check": "Is every requested action directed to an authorized owner?"
  },
  {
    "step": "6. Request action",
    "technical": "State fictional approval, containment concept, service decision, communication, evidence request, implementation, monitoring, or validation need.",
    "clear": "Use one specific action sentence with owner and deadline.",
    "avoid": "Ending with vague advice such as please investigate.",
    "check": "Can the recipient identify the exact next step?"
  },
  {
    "step": "7. Define validation",
    "technical": "List fictional effective-state, service, source, user, owner, communication, monitoring, and residual-risk checks.",
    "clear": "Explain how the audience will know the action worked.",
    "avoid": "Treating a closed ticket or stopped alert as proof.",
    "check": "Is success measurable and reviewable?"
  },
  {
    "step": "8. Set cadence and next update",
    "technical": "Record fictional message owner, approval, channel, delivery time, next evidence milestone, escalation trigger, and update schedule.",
    "clear": "Tell the reader when another update will arrive and what may change it.",
    "avoid": "Leaving the audience uncertain about whether the situation is still active.",
    "check": "Does the message have a clear lifecycle?"
  }
];
const evidenceRecords = [
  {
    "id": "NBR-COM-01",
    "source": "Identity approval register",
    "fact": "A fictional supplier administrator exception expired at 17:00 and no approved renewal exists.",
    "what_it_supports": "Unsupported current capability.",
    "what_it_does_not_support": "Malicious intent or misuse.",
    "owner": "Identity Owner and Supplier Owner"
  },
  {
    "id": "NBR-COM-02",
    "source": "Authentication record",
    "fact": "The fictional supplier identity signed in once after expiration.",
    "what_it_supports": "Current use of the unsupported identity.",
    "what_it_does_not_support": "Which actions followed or whether harm occurred.",
    "owner": "Identity Owner"
  },
  {
    "id": "NBR-COM-03",
    "source": "Cloud configuration history",
    "fact": "A fictional confidential-storage policy gained a broad-read condition outside the approved window.",
    "what_it_supports": "A serious access-control weakness and possible exposure.",
    "what_it_does_not_support": "Unauthorized access or data disclosure.",
    "owner": "Cloud Storage Owner and Data Owner"
  },
  {
    "id": "NBR-COM-04",
    "source": "Cloud access evidence",
    "fact": "No covered unauthorized storage read is observed during the supplied review period.",
    "what_it_supports": "No confirmed unauthorized read in covered evidence.",
    "what_it_does_not_support": "A universal claim that no access occurred through any path.",
    "owner": "Cloud Security Owner"
  },
  {
    "id": "NBR-COM-05",
    "source": "Source-health monitor",
    "fact": "A fictional administrative audit source stopped delivering events for thirty-eight minutes.",
    "what_it_supports": "Reduced monitoring assurance.",
    "what_it_does_not_support": "Harmful activity during the gap.",
    "owner": "Telemetry Owner"
  },
  {
    "id": "NBR-COM-06",
    "source": "Mail security record",
    "fact": "A fictional payroll-themed message failed sender checks and used an unrelated sign-in destination description.",
    "what_it_supports": "High-confidence malicious-message disposition.",
    "what_it_does_not_support": "Account compromise for every recipient.",
    "owner": "Mail Security Owner"
  },
  {
    "id": "NBR-COM-07",
    "source": "User interaction record",
    "fact": "One fictional user clicked the link and reported entering no information.",
    "what_it_supports": "One interaction requiring targeted review.",
    "what_it_does_not_support": "Credential disclosure or account takeover.",
    "owner": "Identity Owner and User Support Owner"
  },
  {
    "id": "NBR-COM-08",
    "source": "Web authorization record",
    "fact": "A fictional support role loaded a manager-only page.",
    "what_it_supports": "An authorization gap and unauthorized page view.",
    "what_it_does_not_support": "Modification or wider disclosure.",
    "owner": "Application Owner and Access Control Owner"
  },
  {
    "id": "NBR-COM-09",
    "source": "Service-health dashboard",
    "fact": "The fictional support, storage, payroll, and web services remained available.",
    "what_it_supports": "Targeted action while preserving continuity.",
    "what_it_does_not_support": "Confidentiality, authorization, or account safety.",
    "owner": "Service Owners"
  },
  {
    "id": "NBR-COM-10",
    "source": "Corrective-action register",
    "fact": "Fictional supplier access was removed, the storage policy restored, and the manager-only route restricted.",
    "what_it_supports": "Completion of three corrective actions.",
    "what_it_does_not_support": "Successful effective-state validation.",
    "owner": "Identity, Cloud, and Application Owners"
  },
  {
    "id": "NBR-COM-11",
    "source": "Validation register",
    "fact": "Fictional effective-access, policy, route, source-health, user-state, and service tests passed.",
    "what_it_supports": "Validated immediate corrective outcomes.",
    "what_it_does_not_support": "Zero residual risk or permanent prevention.",
    "owner": "Control and Service Owners"
  },
  {
    "id": "NBR-COM-12",
    "source": "Case-boundary review",
    "fact": "The supplier, cloud, phishing, and web records use different systems, identities, evidence, owners, and actions.",
    "what_it_supports": "Four operational cases under one coordinated response view.",
    "what_it_does_not_support": "One confirmed common cause.",
    "owner": "SOC Lead and Incident Commander"
  }
];
const messageMatrix = [
  {
    "message": "Analyst handoff",
    "opening": "Four fictional operational cases remain coordinated but separate.",
    "facts": "List evidence identifiers, source health, status, owners, blockers, and next technical decisions.",
    "action": "Continue targeted validation and escalate only evidence-supported links.",
    "validation": "Peer review of case boundaries and handoff completeness.",
    "cadence": "At shift change or meaningful evidence change."
  },
  {
    "message": "Service-owner update",
    "opening": "Fictional services remain available while targeted control corrections are validated.",
    "facts": "Summarize service status, dependency, approved changes, rollback, tests, and residual limitations.",
    "action": "Approve the defined service tests and recovery acceptance.",
    "validation": "Service-health results and owner signoff.",
    "cadence": "Before and after each meaningful service change."
  },
  {
    "message": "Leadership brief",
    "opening": "Serious fictional control weaknesses were identified and corrected; no confirmed disclosure or takeover appears in current covered evidence.",
    "facts": "State confirmed facts, possible impact, actions, service state, decision need, and residual risk.",
    "action": "Approve the ninety-day control-improvement plan and owner milestones.",
    "validation": "Leadership decision, owner acceptance, and scheduled progress reviews.",
    "cadence": "At declaration, major status change, decision point, and closure transition."
  },
  {
    "message": "User guidance",
    "opening": "The fictional payroll message was malicious, and one click is confirmed.",
    "facts": "Explain current account evidence, what not to do, completed review, and support path.",
    "action": "Do not revisit the message and report any unexpected sign-in prompt.",
    "validation": "User confirmation and identity-review completion.",
    "cadence": "Initial notice plus update when review or required actions change."
  },
  {
    "message": "Supplier access notice",
    "opening": "The fictional supplier exception expired and the access is removed.",
    "facts": "State approval status, business-need confirmation, current state, and request process.",
    "action": "Submit a new narrow time-limited request only if support is still required.",
    "validation": "Owner approval and effective-access check.",
    "cadence": "At access change, evidence request, deadline, and final disposition."
  },
  {
    "message": "Development-team finding",
    "opening": "A fictional support role can load a manager-only page.",
    "facts": "State expected role boundary, observed result, impact limit, and supplied evidence.",
    "action": "Restrict the route and add approved and denied role tests.",
    "validation": "Successful approved-role test, denied support-role test, and service-health check.",
    "cadence": "At assignment, implementation, failed test, and validation."
  },
  {
    "message": "Teacher or mentor review",
    "opening": "The fictional communication package preserves facts across audiences but needs stronger visual hierarchy.",
    "facts": "State the learning claim, selected evidence, strengths, limitations, feedback, and revision.",
    "action": "Review the revised audience matrix and leadership brief.",
    "validation": "Feedback incorporated and reflection updated.",
    "cadence": "At draft, review, revision, and final submission."
  },
  {
    "message": "Portfolio summary",
    "opening": "This fictional Northbridge artifact demonstrates audience-aware defensive communication.",
    "facts": "Explain purpose, evidence, audience transformations, visuals, decisions, validation, reflection, and privacy.",
    "action": "Review the artifact against the stated learning claims.",
    "validation": "Portfolio checklist, reviewer feedback, and final revision.",
    "cadence": "At portfolio review or presentation."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the communication",
    "detail": "Identify the fictional audience, purpose, decision need, scope, urgency, owner, approval path, channel, privacy rule, and next-update time.",
    "output": "Communication charter."
  },
  {
    "step": "2",
    "title": "Validate the evidence",
    "detail": "Register fictional sources, timestamps, source health, owners, observations, limitations, alternatives, and confidence.",
    "output": "Evidence and claim register."
  },
  {
    "step": "3",
    "title": "Write the core fact set",
    "detail": "Create one fictional master statement covering known facts, supported conclusions, possible impact, confirmed impact, actions, validation, and unknowns.",
    "output": "Approved core facts."
  },
  {
    "step": "4",
    "title": "Analyze the audience",
    "detail": "Determine fictional reader knowledge, terminology, decision, action, privacy need, detail level, channel, and cadence.",
    "output": "Audience matrix."
  },
  {
    "step": "5",
    "title": "Translate and structure",
    "detail": "Adapt fictional headings, summaries, visuals, evidence references, action requests, limitations, owner labels, and validation for each audience.",
    "output": "Audience-specific drafts."
  },
  {
    "step": "6",
    "title": "Review for consistency",
    "detail": "Compare fictional facts, timestamps, status, impact language, owners, actions, confidence, and residual risk across every version.",
    "output": "Consistency review."
  },
  {
    "step": "7",
    "title": "Approve and deliver",
    "detail": "Record fictional message approval, sender role, recipient, channel, delivery time, acknowledgement, escalation path, and next update.",
    "output": "Communication log."
  },
  {
    "step": "8",
    "title": "Validate and improve",
    "detail": "Confirm fictional reader understanding, action completion, decision quality, outcome validation, feedback, revision, and lesson learned.",
    "output": "Communication effectiveness review."
  }
];
const findings = [
  {
    "id": "NBR-COM-F01",
    "statement": "The fictional technical summary is accurate but too detailed for leadership.",
    "support": "The draft includes raw fields, sixteen timeline entries, and four source-health notes but no opening decision request.",
    "alternative": "The document may have been intended as an analyst appendix.",
    "impact": "Leadership may miss the current service state, required decision, and residual risk.",
    "next": "Move technical detail to an appendix and open with facts, impact, actions, decision, owner, and next update.",
    "confidence": "High"
  },
  {
    "id": "NBR-COM-F02",
    "statement": "The fictional user message overstates account compromise.",
    "support": "One click is confirmed, no information entry is reported, and targeted identity review found no covered compromise evidence.",
    "alternative": "Uncovered activity or incomplete user recall remains possible.",
    "impact": "Unsupported language may create fear and reduce trust.",
    "next": "State the confirmed click, current evidence limits, completed review, safe guidance, and support path.",
    "confidence": "High"
  },
  {
    "id": "NBR-COM-F03",
    "statement": "The fictional supplier notice lacks a clear action owner and deadline.",
    "support": "The message explains the expired exception but ends with contact us if needed.",
    "alternative": "The supplier may already know the request process.",
    "impact": "Access requests may remain delayed, informal, or unsupported.",
    "next": "Name the supplier owner, request form, evidence needed, approval path, deadline, and escalation channel.",
    "confidence": "High"
  },
  {
    "id": "NBR-COM-F04",
    "statement": "The fictional development-team finding does not separate the confirmed page view from unconfirmed modification or disclosure.",
    "support": "The draft says restricted settings were compromised even though only a page load is recorded.",
    "alternative": "The writer may have used compromised to mean control weakness rather than impact.",
    "impact": "The development team may prioritize the wrong test or remediation scope.",
    "next": "State the authorization gap, confirmed page view, unconfirmed modification, expected role rule, corrective control, and test criteria.",
    "confidence": "High"
  },
  {
    "id": "NBR-COM-F05",
    "statement": "The fictional audience versions preserve most facts but use inconsistent residual-risk language.",
    "support": "The analyst handoff says moderate residual risk, while the leadership brief says low and the portfolio summary says resolved.",
    "alternative": "The messages may represent different points in time.",
    "impact": "Readers may make different decisions from inconsistent risk statements.",
    "next": "Add timestamps and use one approved current residual-risk statement across all versions.",
    "confidence": "Medium-High"
  },
  {
    "id": "NBR-COM-F06",
    "statement": "The fictional communication package is ready after targeted revisions to audience fit, impact language, action requests, and consistency.",
    "support": "Evidence traceability, privacy, source limits, ownership, validation, and visual support are otherwise strong.",
    "alternative": "A live presentation may reveal additional terminology or pacing issues.",
    "impact": "Remaining issues affect decision usefulness rather than core evidence accuracy.",
    "next": "Complete peer review, revise all audience versions, rehearse the oral brief, and document the final communication log.",
    "confidence": "Medium-High"
  }
];
const commonMistakes = [
  "Using the same fictional message for analysts, service owners, leadership, users, suppliers, teachers, and portfolio reviewers.",
  "Opening with raw technical detail before explaining the question or decision need.",
  "Repeating a fictional alert title as a validated conclusion.",
  "Using unexplained acronyms, field names, or tool terminology with nontechnical audiences.",
  "Removing so much technical context that the message no longer supports the conclusion.",
  "Turning possible exposure into confirmed access, disclosure, compromise, or outage.",
  "Describing a source gap as proof that harmful activity occurred or proof that nothing occurred.",
  "Treating one click as credential disclosure or account takeover.",
  "Using blame, certainty, fear, or dramatic language beyond the evidence.",
  "Ending with vague requests such as please investigate or improve security.",
  "Failing to identify who decides, who acts, who validates, and who accepts residual risk.",
  "Using inconsistent timestamps, status labels, confidence, impact, action, or residual-risk language across audience versions.",
  "Relying on color or visuals without labels, captions, legends, or written explanation.",
  "Copying or lightly editing real messages, incident updates, company systems, employee records, school records, supplier communications, logs, screenshots, or confidential information."
];
const quizQuestions = [
  {
    "question": "What should remain consistent across fictional audience summaries?",
    "choices": [
      "The underlying facts, evidence limits, impact statements, actions, validation, status, and residual risk.",
      "The amount of technical detail.",
      "The exact wording.",
      "The message length."
    ],
    "answer": 0,
    "explanation": "Audience versions may change structure and detail, but not the supported facts."
  },
  {
    "question": "What belongs at the beginning of a fictional leadership update?",
    "choices": [
      "The current situation, confirmed and possible impact, actions, service state, decision needed, and next update.",
      "Every raw log field.",
      "A long technical timeline.",
      "Unexplained acronyms."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be immediately decision-ready."
  },
  {
    "question": "How should one fictional click be communicated to the user?",
    "choices": [
      "State the confirmed click, current evidence limits, required safe action, support path, and next update without claiming compromise.",
      "State that the account was definitely taken over.",
      "Say nothing happened.",
      "Include other users’ details."
    ],
    "answer": 0,
    "explanation": "The message should preserve both the confirmed interaction and impact limits."
  },
  {
    "question": "What makes a fictional action request clear?",
    "choices": [
      "It identifies the exact action, authorized owner, deadline, evidence needed, response channel, and validation.",
      "It says please investigate.",
      "It includes a High label.",
      "It avoids naming an owner."
    ],
    "answer": 0,
    "explanation": "A clear request tells the recipient what to do and how success will be confirmed."
  },
  {
    "question": "Why should fictional technical evidence include limitations?",
    "choices": [
      "Limitations prevent the audience from treating partial source coverage or one observation as a universal conclusion.",
      "Limitations make the message weaker.",
      "Only analysts need limitations.",
      "Limitations replace recommendations."
    ],
    "answer": 0,
    "explanation": "Evidence limits support accurate decisions."
  },
  {
    "question": "What makes a fictional visual explanation useful?",
    "choices": [
      "It answers a clear question and labels relationships, sequence, ownership, evidence, uncertainty, risk, and validation.",
      "It uses many colors.",
      "It replaces all written explanation.",
      "It includes every available record."
    ],
    "answer": 0,
    "explanation": "A visual should make the evidence easier to understand rather than merely decorative."
  },
  {
    "question": "What makes a fictional communication package portfolio-safe?",
    "choices": [
      "Every organization, system, identity, message, supplier, record, date, incident, action, and outcome is invented.",
      "Only passwords are removed.",
      "Real communications are shortened.",
      "A company name is replaced while all other details remain."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required."
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

export default function ExplainingTechnicalEvidenceClearlyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 6 of 8</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">Technical Communication</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.6 Explaining Technical Evidence Clearly
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Translate one fictional defensive evidence set for analysts,
            service owners, leadership, users, suppliers, teachers, and
            portfolio reviewers while preserving the same facts, impact
            limits, ownership, validation, and residual uncertainty.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Explaining Technical Evidence Clearly"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional systems, identities, evidence, messages, suppliers, services, decisions, dates, actions, and outcomes.",
            "I will not copy, lightly edit, upload, or expose real incident updates, company messages, employee records, school records, supplier communications, logs, screenshots, identities, systems, or confidential information.",
            "I will preserve the same fictional facts, impact limits, ownership, validation, status, and residual risk across audience versions.",
            "I will distinguish fictional observation, conclusion, alternate explanation, confidence, potential impact, confirmed impact, limitation, and unknown.",
            "I will not create instructions for accessing, testing, changing, scanning, or probing real systems.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Clear Communication Changes Decisions without Changing Facts">
          <p className="leading-8">
            A fictional technical summary may be accurate and still fail if
            leadership cannot find the decision, the user receives an
            unsupported compromise warning, the supplier does not know the
            deadline, or the development team cannot identify the expected
            control and validation test. Strong communication preserves the
            evidence while changing structure, terminology, detail, and action
            for the audience.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak communication</p>
              <p className="mt-2 leading-7">Send one technical message to everyone, repeat alert titles, hide limitations, overstate impact, use jargon, make vague requests, and omit the next update.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional communication</p>
              <p className="mt-2 leading-7">Define the audience and decision, preserve facts, explain significance, show uncertainty, name owners, request one clear action, define validation, and set cadence.</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Evidence Has Value Only When the Right Person Can Use It">
          <p className="leading-8">
            Fictional defensive work crosses technical, operational, business,
            user, supplier, educational, and portfolio audiences. Each audience
            needs a different explanation, but inconsistent facts or impact
            language can create conflicting decisions, unnecessary disruption,
            missed action, fear, or loss of trust.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Fact–Meaning–Action–Owner–Validation Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Fact", "Which fictional observation, source, timestamp, source-health note, and limitation are confirmed?"],
              ["Meaning", "Which fictional conclusion, alternate explanation, confidence, potential impact, confirmed impact, and unknown are supported?"],
              ["Action", "Which fictional approval, review, change, communication, monitoring, or evidence request is needed?"],
              ["Owner", "Who may decide, perform, validate, communicate, escalate, or accept residual risk?"],
              ["Validation", "Which fictional effective-state, service, source, user, communication, metric, signoff, and next-update evidence proves success?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Technical Evidence and Audience Communication Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Audience Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Audiences, Eight Different Decision Needs</h2>
          <div className="mt-6 grid gap-5">
            {audiences.map((item) => (
              <article key={item.audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Decision need", item.decision],
                    ["Include", item.include],
                    ["Omit", item.omit],
                    ["Tone", item.tone],
                    ["Fictional sample", item.sample],
                  ].map(([label, detail]) => (
                    <div key={`${item.audience}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Translation Framework</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps for Turning Technical Evidence into Clear Communication</h2>
          <div className="mt-6 grid gap-5">
            {translationSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.step}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Technical task", item.technical],
                    ["Clear communication", item.clear],
                    ["Avoid", item.avoid],
                    ["Quality check", item.check],
                  ].map(([label, detail]) => (
                    <div key={`${item.step}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fictional Evidence Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Twelve Records and Their Communication Limits</h2>
          <div className="mt-6 grid gap-5">
            {evidenceRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.source}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.fact}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Supports", item.what_it_supports],
                    ["Does not support", item.what_it_does_not_support],
                    ["Owner", item.owner],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Message Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Messages from One Approved Fact Set</h2>
          <div className="mt-6 grid gap-5">
            {messageMatrix.map((item) => (
              <article key={item.message} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.message}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Opening", item.opening],
                    ["Core facts", item.facts],
                    ["Action request", item.action],
                    ["Validation", item.validation],
                    ["Cadence", item.cadence],
                  ].map(([label, detail]) => (
                    <div key={`${item.message}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Communication Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Evidence to Effective Action</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Communication Quality Dashboard"
          subtitle="Training dashboard for fictional audience communication only."
          metrics={[
            { label: "Audience versions", value: "8", note: "One approved fictional fact set supports analyst, service, leadership, user, supplier, development, teacher, and portfolio messages." },
            { label: "Fact inconsistencies", value: "1", note: "Residual-risk language differs across three fictional drafts and requires correction before approval." },
            { label: "Privacy review issues", value: "0", note: "All fictional organizations, identities, messages, systems, suppliers, evidence, dates, and outcomes are invented." },
          ]}
        />

        <FakeAlertCard
          title="Leadership Draft Contains Raw Technical Detail but No Decision Request"
          severity="Medium"
          time="4:36 PM"
          source="Fake Northbridge Communication Review Console"
          details="A fictional leadership update includes sixteen timeline records, raw source-health fields, and technical acronyms but does not state the required decision, owner, residual risk, or next update."
          recommendation="Lead with current facts, confirmed and possible impact, service state, actions, decision request, owner, residual risk, and next update; move technical detail to an appendix."
        />

        <FakeLogPanel
          title="Fake Communication Revision Timeline"
          logs={[
            "09:00 FACTSET records='12'",
            "09:15 AUDIENCE versions='8'",
            "09:30 ANALYST handoff='complete'",
            "09:45 SERVICE continuity='clear'",
            "10:00 LEADERSHIP detail='too-high'",
            "10:15 USER compromise='overstated'",
            "10:30 SUPPLIER deadline='missing'",
            "10:45 DEV impact-language='overstated'",
            "11:00 PORTFOLIO privacy='verified'",
            "11:15 REVIEW residual-risk='inconsistent'",
            "11:30 REVISION leadership='rewritten'",
            "11:45 REVISION user='corrected'",
            "12:00 REVISION supplier='owner-added'",
            "12:15 REVISION dev='validation-added'",
            "12:30 REVIEW consistency='passed'",
            "12:45 FINAL messages='approved'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Communication Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Audience-Quality Findings</h2>
          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Should Leadership Receive the Full Technical Timeline?"
          evidence={[
            "The fictional timeline contains sixteen records.",
            "Only six records change the leadership decision.",
            "The service remains available.",
            "Serious control weaknesses were corrected and validated.",
            "No confirmed disclosure or account takeover appears in covered evidence.",
            "A ninety-day improvement plan requires approval.",
          ]}
          question="Which communication approach is strongest?"
          options={[
            "Provide a brief decision-ready leadership update with six decision-changing facts and attach the technical timeline as supporting detail.",
            "Place all sixteen raw records at the beginning of the leadership message.",
            "Remove every technical fact and request approval without evidence.",
            "State the worst-case impact so the message receives attention.",
          ]}
          bestAnswer={0}
          explanation="Leadership should receive enough evidence to understand and decide, while detailed records remain available for review."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Technical-Evidence Communication">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Northbridge Fictional Evidence Communication Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">One Evidence Set, Eight Audiences, One Consistent Fact Base</h3>
              <p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge evidence to create a complete audience-aware communication package.</p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Communication charter with purpose, scope, audiences, decisions, urgency, privacy, owners, approval, channels, and cadence.</li>
                <li>Evidence and claim register with observations, conclusions, alternatives, confidence, impact, owners, limitations, and unknowns.</li>
                <li>One approved core fact set that every fictional audience version must preserve.</li>
                <li>Audience matrix covering analyst, service, leadership, user, supplier, development, teacher, and portfolio readers.</li>
                <li>Eight fictional audience messages with opening, evidence, significance, action request, owner, validation, and next update.</li>
                <li>At least two fictional visual explanations with legends, captions, evidence references, accessibility support, and written summaries.</li>
                <li>Consistency, accuracy, privacy, audience-fit, action-clarity, approval, delivery, and effectiveness review records.</li>
                <li>Version history, reviewer feedback, final revision, oral-brief notes, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fully fictional communication. Do not copy, lightly edit,
            expose, or recreate real incident messages, company systems,
            employee records, school records, suppliers, identities, logs,
            screenshots, decisions, or confidential organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The User Message Says the Account Was Compromised"
          scenario="The fictional evidence confirms one link click, no reported information entry, and no covered account-compromise evidence."
          choices={[
            { label: "Choice A", response: "State the confirmed click, current evidence limits, completed identity review, safe user action, support path, and next update without claiming compromise.", outcome: "Best communication choice. The message is useful, accurate, and supportive.", tone: "best" },
            { label: "Choice B", response: "Tell the user the account was definitely taken over.", outcome: "Unsupported and unnecessarily alarming.", tone: "risk" },
            { label: "Choice C", response: "Tell the user nothing happened.", outcome: "Misleading. One interaction is confirmed and guidance is still needed.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="The Leadership Brief Contains Every Raw Record"
          scenario="The fictional leadership reader needs to approve a ninety-day improvement plan, while the draft begins with sixteen technical timeline entries."
          choices={[
            { label: "Choice A", response: "Lead with facts, impact, actions, service state, decision request, owner, residual risk, and next update, then attach the detailed timeline.", outcome: "Best audience choice. The decision remains supported without hiding technical evidence.", tone: "best" },
            { label: "Choice B", response: "Keep all raw records at the beginning because more detail is always clearer.", outcome: "Weak. Important decisions may become difficult to find.", tone: "risk" },
            { label: "Choice C", response: "Remove all evidence and request approval with no explanation.", outcome: "Weak. The decision would not be traceable.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Explaining Technical Evidence Clearly Checklist"
          items={[
            "I can define a fictional audience, purpose, decision need, scope, urgency, privacy rule, owner, approval path, channel, and cadence.",
            "I can distinguish fictional observations, conclusions, alternate explanations, confidence, potential impact, confirmed impact, limitations, and unknowns.",
            "I can preserve one fictional fact base while adapting structure, terminology, detail, tone, visuals, and action requests.",
            "I can write fictional analyst, service, leadership, user, supplier, development, teacher, and portfolio messages.",
            "I can identify who decides, who acts, who validates, who communicates, and who accepts residual risk.",
            "I can write one clear fictional action request with owner, deadline, response channel, and validation.",
            "I can create fictional visual explanations with purpose, labels, legends, evidence references, accessibility support, and written summaries.",
            "I can check fictional timestamps, status, confidence, impact, actions, owners, validation, and residual-risk language for consistency.",
            "I can record fictional approval, delivery, acknowledgement, escalation, effectiveness, feedback, and revision.",
            "I will never expose or recreate real incident messages, systems, identities, suppliers, logs, screenshots, employee data, school records, decisions, or confidential information.",
          ]}
        />

        <MiniQuiz title="I17.6 Mini Quiz: Explaining Technical Evidence Clearly" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Northbridge Technical Evidence Communication Package. Include the communication charter, scope, audience matrix, evidence and claim register, approved core fact set, analyst handoff, service-owner update, leadership brief, user guidance, supplier notice, development-team finding, teacher or mentor summary, portfolio summary, two visual explanations, action requests, owners, approval paths, channels, cadence, validation, consistency review, privacy review, communication log, effectiveness review, reviewer feedback, revision history, oral-brief notes, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, identities, suppliers, messages, evidence, dates, decisions, actions, and outcomes.",
            "Change the explanation for the audience without changing the supported facts.",
            "Place the decision and action request where the audience can find them quickly.",
            "Review every audience version for consistent impact, status, validation, and residual-risk language.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Clear technical communication begins with the audience and decision need.",
            "Facts, evidence limits, impact statements, status, actions, validation, and residual risk should remain consistent across versions.",
            "Analysts, service owners, leadership, users, suppliers, technical teams, teachers, and portfolio reviewers need different levels of detail.",
            "A clear action request identifies the owner, deadline, response channel, and validation.",
            "Visuals should answer a question and support rather than replace written explanation.",
            "Communication effectiveness should be validated through understanding, action, decision quality, feedback, and revision.",
            "Portfolio communication artifacts must be fully fictional and should never expose or recreate private defensive material.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I17</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}