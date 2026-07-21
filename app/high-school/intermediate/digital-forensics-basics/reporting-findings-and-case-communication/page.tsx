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
const modulePath = `${trackPath}/digital-forensics-basics`;
const previousLesson = `${modulePath}/network-cloud-and-timeline-correlation`;
const nextLesson = `${modulePath}/digital-forensics-basics-lab`;

const objectives = [
  "Explain the purpose of a fictional forensic report and distinguish technical evidence records, findings, limitations, owner decisions, leadership summaries, support communications, and portfolio-safe artifacts.",
  "Write fictional findings that separate direct observations, supported interpretations, alternative explanations, confidence, limitations, impact boundaries, and unresolved questions.",
  "Tailor fictional communication for technical reviewers, incident owners, leadership, support teams, privacy reviewers, evidence custodians, and portfolio audiences without changing the underlying case truth.",
  "Create a defensible fictional evidence-exhibit list, correction record, reviewer checklist, approval path, and case communication log.",
  "Recognize and avoid reporting mistakes involving unsupported certainty, hidden limitations, copied raw evidence, audience mismatch, ambiguous ownership, missing lineage, and real private information."
];
const vocabulary = [
  [
    "Forensic report",
    "A fictional structured record explaining the approved question, evidence sources, methods, observations, findings, alternatives, confidence, limitations, decisions, and next actions."
  ],
  [
    "Finding",
    "A fictional evidence-supported interpretation connected to the approved case question and bounded by source quality, scope, alternatives, and limitations."
  ],
  [
    "Observation",
    "A fictional fact recorded directly from supplied evidence without interpretation or conclusion."
  ],
  [
    "Alternative explanation",
    "A different fictional mechanism or interpretation that remains reasonably possible and should be tested or preserved."
  ],
  [
    "Confidence statement",
    "A fictional explanation of how strongly a finding is supported and why the evidence, source health, conflicts, or gaps justify that level."
  ],
  [
    "Limitation statement",
    "A fictional record of missing evidence, source delay, clock uncertainty, collection boundary, privacy restriction, tool or method limit, or unresolved question."
  ],
  [
    "Impact boundary",
    "The fictional limit of what the evidence supports about affected systems, identities, files, services, data, users, locations, time, and business consequences."
  ],
  [
    "Evidence exhibit",
    "A fictional approved table, screenshot, timeline section, diagram, or record selected to support a finding while preserving source lineage and audience limits."
  ],
  [
    "Technical audience",
    "A fictional reviewer who needs methods, evidence identifiers, source health, exact observations, correlations, conflicts, and reproducibility details."
  ],
  [
    "Leadership audience",
    "A fictional decision maker who needs confirmed facts, impact, confidence, uncertainty, owner decisions, risk, timeline, and required action without unnecessary raw evidence."
  ],
  [
    "Correction record",
    "A fictional versioned note showing what report content changed, why, which evidence triggered the change, who reviewed it, and which audiences were notified."
  ],
  [
    "Reviewer checklist",
    "A fictional quality-control record confirming authorization, evidence lineage, accuracy, scope, privacy, clarity, reproducibility, limitations, and approval."
  ],
  [
    "Case communication log",
    "A fictional chronological record of report delivery, questions, clarifications, corrections, handoffs, approvals, and audience acknowledgments."
  ],
  [
    "Need-to-know reporting",
    "Sharing only the fictional information required by an approved audience for its role and decision."
  ],
  [
    "Portfolio-safe summary",
    "A fictional educational artifact that demonstrates reasoning without exposing real systems, people, files, logs, routes, contacts, owners, credentials, or private records."
  ]
];
const reportSections = [
  {
    "title": "Executive summary",
    "purpose": "Give fictional leadership a concise statement of the approved question, strongest findings, confidence, impact boundary, major limitation, owner decision, and immediate next action.",
    "include": "Case purpose, confirmed high-level facts, business effect, supported scope, confidence, unresolved risk, decision owner, and action.",
    "avoid": "Raw logs, long technical sequences, unsupported blame, real names, or certainty beyond the evidence.",
    "quality": "A reader can understand what happened, what remains uncertain, and what decision is required in under two minutes."
  },
  {
    "title": "Authorization and scope",
    "purpose": "Show that the fictional work remained within approved sources, subjects, methods, time windows, privacy limits, and stop conditions.",
    "include": "Case question, requester, owners, approved evidence, exclusions, methods, privacy controls, and scope changes.",
    "avoid": "Vague statements such as fully authorized without the actual boundary.",
    "quality": "Every reviewed source and method can be traced to a documented approval."
  },
  {
    "title": "Evidence and methodology",
    "purpose": "Explain which fictional sources were used, how originals and working copies were handled, how time was normalized, and how source health was assessed.",
    "include": "Evidence identifiers, source lineage, integrity checks, custody, collection method, transformation, normalization, and review process.",
    "avoid": "Tool output without context or methods that another reviewer cannot reproduce.",
    "quality": "A qualified fictional reviewer can follow the evidence path from source to report statement."
  },
  {
    "title": "Direct observations",
    "purpose": "Record exactly what the fictional evidence shows before interpretation.",
    "include": "Paths, hashes, timestamps, process relationships, identity events, network routes, cloud actions, source-health records, and business reports.",
    "avoid": "Intent, blame, motive, or impact claims in the observation field.",
    "quality": "Each observation includes an evidence identifier and exact source context."
  },
  {
    "title": "Findings and confidence",
    "purpose": "Connect fictional observations to the approved question while preserving alternatives, confidence, limitations, and impact boundaries.",
    "include": "Finding statement, support, conflicting evidence, alternatives, confidence, limitation, and affected decision.",
    "avoid": "Absolute language when the evidence supports only a bounded conclusion.",
    "quality": "Every finding can be defended without hiding uncertainty."
  },
  {
    "title": "Timeline and correlation",
    "purpose": "Present the fictional sequence with original and normalized times, ranges, source health, conflicts, revisions, and event lineage.",
    "include": "Timeline version, event identifiers, original time, normalized time, source, relationship, confidence, and limitation.",
    "avoid": "One exact sequence when the sources support only grouped or uncertain ordering.",
    "quality": "The timeline shows how new evidence or corrections changed the case."
  },
  {
    "title": "Impact, risk, and residual questions",
    "purpose": "Explain the fictional supported effect, what was not observed, which uncertainty remains, and what owner action or review is still required.",
    "include": "Affected and unaffected scope, business effect, privacy boundary, risk, residual questions, and follow-up evidence needs.",
    "avoid": "Claiming no impact when source coverage is incomplete.",
    "quality": "Negative conclusions are bounded by verified coverage and source health."
  },
  {
    "title": "Recommendations and next actions",
    "purpose": "Translate fictional findings into authorized defensive decisions, corrective actions, validation, monitoring, review, and closure steps.",
    "include": "Action, owner, reason, deadline, validation, evidence needed, escalation, rollback, and completion proof.",
    "avoid": "Unowned suggestions, vague improve security language, or actions outside current authority.",
    "quality": "Every action is specific, measurable, owned, time-bounded, and linked to evidence."
  }
];
const findingFields = [
  {
    "field": "Finding identifier",
    "purpose": "Creates a stable fictional reference for review, correction, communication, and closure.",
    "example": "NRA-F-03-v2.",
    "quality": "Unique, versioned, and linked to supporting evidence."
  },
  {
    "field": "Finding statement",
    "purpose": "States the strongest fictional conclusion in neutral, bounded language.",
    "example": "The approved export worker using an outdated configuration is the best-supported mechanism for creating the duplicate path.",
    "quality": "Answers the approved question without adding intent or unsupported impact."
  },
  {
    "field": "Direct support",
    "purpose": "Lists the fictional observations and independent sources supporting the finding.",
    "example": "Process arguments, file hashes, storage transactions, application job, deployment record, and internal network flow.",
    "quality": "Distinguishes independent evidence from duplicate views."
  },
  {
    "field": "Conflicting evidence",
    "purpose": "Preserves fictional records that appear inconsistent or reduce confidence.",
    "example": "Application delivery was delayed, creating an apparent timing conflict.",
    "quality": "Explains whether the conflict was resolved, remains open, or changed the finding."
  },
  {
    "field": "Alternative explanation",
    "purpose": "Documents another fictional mechanism that could produce the same observations.",
    "example": "Synchronization retry or manual copy received less support than the automated export-worker explanation.",
    "quality": "Specific, testable, and not dismissed without evidence."
  },
  {
    "field": "Confidence",
    "purpose": "Explains how strongly the fictional evidence supports the conclusion.",
    "example": "High confidence in automated duplicate creation; low confidence in exact human awareness time.",
    "quality": "Includes the evidence reason and remaining uncertainty."
  },
  {
    "field": "Limitation",
    "purpose": "Records the fictional source, method, scope, privacy, timing, or retention boundary affecting the finding.",
    "example": "The process snapshot represents one moment and cloud conclusions are limited to verified coverage.",
    "quality": "Visible in both technical and leadership versions."
  },
  {
    "field": "Decision impact",
    "purpose": "Shows which fictional owner action, corrective measure, communication, monitoring, or closure requirement depends on the finding.",
    "example": "Supports replacing the outdated configuration and validating the corrected export workflow.",
    "quality": "Stays within approved authority and business need."
  }
];
const audiences = [
  {
    "audience": "Forensic reviewer",
    "needs": "Evidence identifiers, methods, integrity, custody, source health, original and normalized times, direct observations, conflicts, alternatives, confidence, and reproducibility.",
    "avoid": "A summary without parent evidence, methods, or limitations.",
    "deliverable": "Technical report, evidence index, timeline, findings matrix, exhibit list, and review checklist."
  },
  {
    "audience": "Incident lead",
    "needs": "Confirmed facts, scope, confidence, unresolved questions, containment or recovery effect, owner decisions, deadlines, and escalation.",
    "avoid": "Unfiltered raw evidence that hides the required decision.",
    "deliverable": "Case status brief, decision log, action tracker, and correction notice."
  },
  {
    "audience": "Leadership",
    "needs": "Business effect, supported scope, confidence, uncertainty, risk, owner, timeline, corrective action, and closure standard.",
    "avoid": "Technical jargon, speculative blame, and unnecessary identifiers.",
    "deliverable": "Executive summary and decision brief."
  },
  {
    "audience": "Privacy or legal reviewer",
    "needs": "Authorization, data categories, minimization, access, sharing, retention, masking, out-of-scope evidence, and residual privacy risk.",
    "avoid": "Unnecessary content or unrelated personal information.",
    "deliverable": "Privacy-boundary statement, access record, exception log, and approval decision."
  },
  {
    "audience": "Support or operations",
    "needs": "Approved user-facing facts, current service state, expected behavior, workaround, owner, update time, correction path, and escalation trigger.",
    "avoid": "Unverified forensic theories or sensitive evidence details.",
    "deliverable": "Support bulletin, service note, and handoff checklist."
  },
  {
    "audience": "Evidence custodian",
    "needs": "Evidence identity, location, integrity, custody, access, transfer, retention, disposition, exceptions, and final archive decision.",
    "avoid": "Findings that are not connected to evidence handling.",
    "deliverable": "Evidence register, custody log, exception record, and archive approval."
  },
  {
    "audience": "Technical owner",
    "needs": "Affected configuration, version, process, service, validation requirement, corrective action, rollback, monitoring, and proof of completion.",
    "avoid": "A generic recommendation without exact technical scope and ownership.",
    "deliverable": "Corrective-action brief and validation evidence request."
  },
  {
    "audience": "Portfolio reviewer",
    "needs": "Clear defensive reasoning, fictional evidence, safe diagrams, bounded findings, lessons learned, and professional communication.",
    "avoid": "Real systems, people, logs, files, routes, credentials, contacts, internal controls, or private records.",
    "deliverable": "Fictional sanitized case study and reflection."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the approved reporting purpose",
    "detail": "Restate the fictional case question, decision owner, audience, deadline, evidence boundary, privacy limits, and required output.",
    "output": "Reporting objective and audience map."
  },
  {
    "step": "2",
    "title": "Verify evidence and finding lineage",
    "detail": "Confirm that every fictional observation, timeline event, exhibit, finding, limitation, and recommendation links to approved parent evidence.",
    "output": "Evidence-to-report traceability map."
  },
  {
    "step": "3",
    "title": "Separate observations from findings",
    "detail": "Record fictional facts exactly, then write supported interpretations, alternatives, confidence, limitations, and impact boundaries in separate fields.",
    "output": "Observation and finding matrix."
  },
  {
    "step": "4",
    "title": "Tailor the message by audience",
    "detail": "Choose the fictional detail level, terminology, evidence depth, privacy protection, action request, and delivery channel each audience requires.",
    "output": "Audience-specific report set."
  },
  {
    "step": "5",
    "title": "Build exhibits and summaries",
    "detail": "Create fictional tables, timeline sections, diagrams, screenshots, and summaries with parent evidence, masking, captions, and limitations.",
    "output": "Reviewed evidence-exhibit package."
  },
  {
    "step": "6",
    "title": "Run technical and privacy review",
    "detail": "Check fictional accuracy, scope, lineage, reproducibility, authorization, minimization, need-to-know, terminology, uncertainty, and real-data exposure.",
    "output": "Reviewer checklist and required corrections."
  },
  {
    "step": "7",
    "title": "Publish with version control",
    "detail": "Assign fictional report version, author, reviewer, approval, delivery list, access level, retention, and correction path.",
    "output": "Approved report and communication log."
  },
  {
    "step": "8",
    "title": "Handle questions and corrections",
    "detail": "Record fictional clarifications, new evidence, changed findings, audience notifications, owner decisions, and the reason for every revised version.",
    "output": "Correction record and final case communication history."
  }
];
const caseFindings = [
  {
    "id": "NRA-F-01",
    "statement": "The duplicate folder contains copies of the same five supplied file contents as the approved export folder.",
    "support": "Matching content hashes, file counts, sizes, and preserved modification metadata.",
    "alternative": "No competing explanation changes the content-identity conclusion within the supplied set.",
    "confidence": "High",
    "limitation": "The supplied set may not represent every historical version.",
    "decision": "Use the approved folder as the reference output and remove only the verified duplicate through the separate recovery process."
  },
  {
    "id": "NRA-F-02",
    "statement": "The approved export worker using an outdated configuration is the best-supported mechanism for creating the duplicate path.",
    "support": "Process tree, arguments, application job, storage transaction, file metadata, deployment record, and internal flow.",
    "alternative": "Manual copy and synchronization retry remain possible but receive substantially less support.",
    "confidence": "High",
    "limitation": "The supplied process snapshot represents one moment.",
    "decision": "Replace the outdated configuration, validate the corrected workflow, and monitor recurrence."
  },
  {
    "id": "NRA-F-03",
    "statement": "The apparent timing conflict resulted from delayed application delivery rather than a reversed event sequence.",
    "support": "Separate event and receipt times, source-health record, process start, file range, and storage transaction.",
    "alternative": "Clock drift was considered but not supported by the synchronization checks.",
    "confidence": "High",
    "limitation": "File metadata supports a range rather than an exact millisecond order.",
    "decision": "Use timeline version 2 and retain version 1 with the correction record."
  },
  {
    "id": "NRA-F-04",
    "statement": "All observed copy-related traffic remained on the approved internal archive-storage route.",
    "support": "Process-to-flow mapping, internal destination, DNS, firewall, application service mapping, and cloud records.",
    "alternative": "Unrecorded activity outside verified coverage cannot be completely excluded.",
    "confidence": "Medium-High",
    "limitation": "Flow records do not reveal the full payload.",
    "decision": "Report no supported external route within the approved evidence window."
  },
  {
    "id": "NRA-F-05",
    "statement": "The supplied evidence does not support public sharing, external download, or unrelated-account access.",
    "support": "Cloud audit, identity, network, application, support, and business records.",
    "alternative": "Events outside retention, platform, account, or approved time boundaries remain outside the conclusion.",
    "confidence": "Medium-High",
    "limitation": "This is a bounded no-supported-evidence statement rather than proof of impossibility.",
    "decision": "Keep impact language limited to verified coverage and continue normal monitoring."
  },
  {
    "id": "NRA-F-06",
    "statement": "The review application referenced the approved folder, but the evidence does not prove that a human fully opened or read every file.",
    "support": "Running review process, recent-item artifact, preview cache, and support workflow.",
    "alternative": "Automated initialization may create some reference artifacts.",
    "confidence": "High for application reference; low for full human viewing",
    "limitation": "No content-view evidence is included in the approved source set.",
    "decision": "Do not attribute full human review or intent."
  }
];
const exhibits = [
  {
    "id": "EX-01",
    "title": "Duplicate-content comparison",
    "parent": "NRA-E-002-WORK-01",
    "content": "Fictional table showing five approved files and five duplicate-path files with matching content hashes.",
    "audience": "Technical reviewer and incident lead",
    "limit": "Does not prove who created the copies or why."
  },
  {
    "id": "EX-02",
    "title": "Process relationship diagram",
    "parent": "NRA-E-003-ORIG",
    "content": "Fictional scheduler → archive-export-worker → copy-worker process tree with job and target arguments.",
    "audience": "Technical reviewer and technical owner",
    "limit": "Represents one snapshot moment."
  },
  {
    "id": "EX-03",
    "title": "Timeline version comparison",
    "parent": "NRA-D-014-v1 and NRA-D-014-v2",
    "content": "Fictional comparison showing how delayed application records changed three event placements and confidence.",
    "audience": "Technical reviewer, incident lead, and leadership summary",
    "limit": "Some file events remain grouped within a one-minute range."
  },
  {
    "id": "EX-04",
    "title": "Internal-route correlation",
    "parent": "NRA-E-007-NET and NRA-E-005-CLOUD",
    "content": "Fictional table linking the copy process to the approved internal storage service and showing no supported public-share event.",
    "audience": "Technical reviewer and leadership",
    "limit": "Network flow does not reveal full payload content."
  },
  {
    "id": "EX-05",
    "title": "Source-health register",
    "parent": "NRA-E-008-HEALTH",
    "content": "Fictional source table showing application delay, repair, completeness validation, and confidence impact.",
    "audience": "Technical reviewer and incident lead",
    "limit": "Health state applies to the approved case window."
  },
  {
    "id": "EX-06",
    "title": "Corrective-action validation summary",
    "parent": "NRA-DEC-04 and NRA-VAL-02",
    "content": "Fictional record of configuration replacement, staged validation, owner approval, monitoring, and recurrence check.",
    "audience": "Technical owner, incident lead, and leadership",
    "limit": "Validation confirms the corrected workflow, not earlier human intent."
  }
];
const communicationLog = [
  {
    "time": "10:30",
    "audience": "Forensic reviewer",
    "message": "Technical report version 1 submitted with evidence index, timeline, findings, and one application-source limitation.",
    "decision": "Review opened; clarification requested on event versus receipt time."
  },
  {
    "time": "10:48",
    "audience": "Application owner",
    "message": "Requested source-health validation and delayed-record completeness check.",
    "decision": "Owner confirmed delayed delivery and supplied validation evidence."
  },
  {
    "time": "11:05",
    "audience": "Forensic reviewer",
    "message": "Technical report version 2 submitted with corrected timeline and preserved version 1.",
    "decision": "Timeline correction approved."
  },
  {
    "time": "11:20",
    "audience": "Incident lead",
    "message": "Case brief delivered with six findings, confidence, impact boundary, corrective action, and unresolved questions.",
    "decision": "Approved configuration replacement and validation."
  },
  {
    "time": "11:35",
    "audience": "Leadership",
    "message": "Executive summary delivered: duplicate created by approved workflow using outdated configuration; no supported external disclosure within coverage.",
    "decision": "Acknowledged; requested completion evidence and recurrence monitoring."
  },
  {
    "time": "11:50",
    "audience": "Privacy reviewer",
    "message": "Confirmed metadata-first analysis, no unrelated-folder review, no unnecessary content access, and need-to-know reporting.",
    "decision": "Privacy boundary approved."
  },
  {
    "time": "12:15",
    "audience": "Technical owner",
    "message": "Corrective-action brief delivered with configuration, version, validation, rollback, monitoring, and completion requirements.",
    "decision": "Owner accepted action and deadline."
  },
  {
    "time": "13:10",
    "audience": "Support team",
    "message": "Approved service note explains duplicate-folder symptom, current safe workflow, escalation trigger, and next update time.",
    "decision": "Support handoff complete."
  },
  {
    "time": "15:30",
    "audience": "Incident lead and leadership",
    "message": "Validation summary confirms corrected export behavior and no recurrence during the observation window.",
    "decision": "Case moved to final review."
  },
  {
    "time": "16:00",
    "audience": "Portfolio reviewer",
    "message": "Fictional sanitized case study approved with invented systems, users, files, logs, owners, dates, and evidence.",
    "decision": "Portfolio artifact approved for educational use."
  }
];
const commonMistakes = [
  "Presenting a fictional observation and an interpretation in the same sentence without showing which part comes directly from evidence.",
  "Using absolute terms such as proved, impossible, never, or definitely when the evidence supports only a bounded conclusion.",
  "Hiding source delay, incomplete retention, clock uncertainty, scope limits, privacy restrictions, or unresolved alternatives.",
  "Changing the finding language for different audiences instead of changing only the level of detail.",
  "Sending leadership raw evidence without a decision-focused summary.",
  "Sending technical reviewers a summary without methods, evidence identifiers, source health, conflicts, or lineage.",
  "Including real people, systems, accounts, files, paths, hashes, logs, routes, contacts, owners, dates, or private records in a portfolio.",
  "Using an evidence screenshot without parent source, filter state, capture context, masking, caption, or limitation.",
  "Failing to distinguish independent evidence from several views of one underlying source.",
  "Writing recommendations without owner, deadline, validation, evidence, rollback, monitoring, and completion proof.",
  "Failing to preserve earlier report versions after new evidence changes a finding or confidence level.",
  "Silently correcting a timeline, finding, scope statement, or impact claim.",
  "Sharing unrelated fictional content beyond need-to-know because it appears in the evidence package.",
  "Attributing human intent to a service identity, process, path, connection, or recent-item artifact without supporting evidence.",
  "Claiming no impact when important source coverage, retention, account, platform, or time boundaries are unverified."
];
const quizQuestions = [
  {
    "question": "What is the strongest structure for a fictional forensic finding?",
    "choices": [
      "Finding statement, direct support, conflicts, alternatives, confidence, limitation, impact boundary, and decision effect.",
      "A conclusion without evidence identifiers.",
      "A screenshot and a severity label.",
      "A list of every raw log line."
    ],
    "answer": 0,
    "explanation": "A defensible finding preserves both support and uncertainty."
  },
  {
    "question": "How should the same fictional finding be communicated to technical and leadership audiences?",
    "choices": [
      "Keep the underlying truth and confidence consistent while changing the detail level, terminology, evidence depth, and action focus.",
      "Use a stronger conclusion for leadership.",
      "Remove all limitations from the leadership version.",
      "Change the facts to make the message shorter."
    ],
    "answer": 0,
    "explanation": "Audience tailoring should not change the case truth."
  },
  {
    "question": "What should an evidence exhibit include?",
    "choices": [
      "A unique identifier, parent evidence, purpose, caption, audience, masking, source context, and limitation.",
      "Only a screenshot.",
      "Only a filename.",
      "Only the final conclusion."
    ],
    "answer": 0,
    "explanation": "Exhibits must remain traceable and bounded."
  },
  {
    "question": "What should happen when delayed fictional evidence changes the timeline?",
    "choices": [
      "Preserve the earlier report, create a new version, document the new evidence, changed events, affected findings, confidence update, reviewer approval, and audience notification.",
      "Delete the earlier version.",
      "Change the times silently.",
      "Ignore the delayed evidence."
    ],
    "answer": 0,
    "explanation": "Versioned corrections make the analytical process transparent."
  },
  {
    "question": "Which leadership statement is strongest?",
    "choices": [
      "The approved export workflow using an outdated configuration created the duplicate path; no supported external disclosure appears within verified coverage, and the configuration has been corrected and validated.",
      "Nothing bad happened.",
      "The service account stole the files.",
      "The system was completely safe."
    ],
    "answer": 0,
    "explanation": "The first statement is concise, evidence-based, bounded, and action-oriented."
  },
  {
    "question": "Why should limitations appear in both technical and leadership reporting?",
    "choices": [
      "They show what remains uncertain and prevent decisions from relying on stronger claims than the evidence supports.",
      "They are needed only for technical readers.",
      "They make reports less professional.",
      "They replace confidence statements."
    ],
    "answer": 0,
    "explanation": "Decision makers need the evidence boundary as much as technical reviewers do."
  },
  {
    "question": "What makes a portfolio-safe forensic case study?",
    "choices": [
      "It recreates the reasoning with clearly fictional evidence and removes real systems, people, files, logs, routes, contacts, owners, credentials, and private records.",
      "It publishes real screenshots with one label covered.",
      "It keeps real hostnames but changes the company name.",
      "It includes raw internal logs because the purpose is educational."
    ],
    "answer": 0,
    "explanation": "Portfolio safety requires a fully fictional case rather than lightly edited real evidence."
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

export default function ReportingFindingsCaseCommunicationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I12
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.7 Reporting, Findings, and Case Communication
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender turns fictional evidence into
            precise findings, technical reports, leadership summaries, evidence
            exhibits, reviewer records, corrections, support communications,
            owner decisions, and portfolio-safe case studies without changing
            the underlying truth for different audiences.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I12: Digital Forensics Basics"
          lessonTitle="Reporting, Findings, and Case Communication"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive evidence and findings.",
            "I will not publish, upload, copy, quote, or expose any real report, incident record, log, screenshot, file, path, account, route, contact, owner, credential, or private information.",
            "I will preserve the same underlying facts, confidence, and limitations across every fictional audience.",
            "I will separate observations, findings, alternatives, confidence, limitations, impact boundaries, owner decisions, and recommendations.",
            "I will make every exhibit, timeline event, finding, and report statement traceable to fictional parent evidence.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Correct Finding Can Still Fail If It Is Reported Poorly"
        >
          <p className="leading-8">
            The fictional Northbridge investigation supports that an approved
            archive-export workflow using an outdated configuration created a
            duplicate folder. It does not support public sharing, external
            download, unrelated-account access, malicious intent, or complete
            human review of every file. Technical reviewers need evidence
            lineage and source-health details. Leadership needs impact,
            confidence, owner action, and closure criteria. Support teams need
            approved user-facing facts. A portfolio reviewer needs a fully
            fictional case study.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak reporting
              </p>

              <p className="mt-2 leading-7">
                Change the certainty for each audience, hide limitations,
                publish raw evidence, use blame-focused language, and issue
                recommendations without owners or validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional reporting
              </p>

              <p className="mt-2 leading-7">
                Preserve one case truth, tailor only the detail level, link every
                claim to evidence, state confidence and limits, protect privacy,
                assign owners, version corrections, and request specific action.
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
          title="Reports Drive Decisions, Actions, Accountability, and Memory"
        >
          <p className="leading-8">
            A fictional forensic report may influence incident actions,
            technical corrections, leadership decisions, privacy review,
            support guidance, evidence retention, lessons learned, and case
            closure. Unsupported certainty can create unfair blame or unsafe
            action. Missing limitations can hide risk. Excessive raw detail can
            expose private information. A professional report must therefore be
            accurate, traceable, audience-aware, privacy-conscious,
            reproducible, versioned, and action-oriented.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Evidence–Finding–Audience–Action Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Evidence", "Which fictional original records, working copies, timeline events, source-health notes, and exhibits directly support the statement?"],
              ["Finding", "What conclusion is supported, which alternatives remain, how confident are we, and what limitation or impact boundary applies?"],
              ["Audience", "Which approved fictional reader needs which level of detail, terminology, privacy protection, and decision context?"],
              ["Action", "Which fictional owner, deadline, validation, monitoring, escalation, rollback, review, or closure requirement follows from the finding?"],
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
            Reporting, Findings, and Communication Terms
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
            Report Structure
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Sections of a Defensible Fictional Forensic Report
          </h2>

          <div className="mt-6 grid gap-5">
            {reportSections.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Include
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.include}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Avoid
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Finding Fields
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields That Keep Conclusions Bounded and Reviewable
          </h2>

          <div className="mt-6 grid gap-5">
            {findingFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Audience Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Tailor Detail without Changing the Case Truth
          </h2>

          <div className="mt-6 grid gap-5">
            {audiences.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Needs
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.needs}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Avoid
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Deliverable
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.deliverable}</p>
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
            Build, Review, Publish, and Correct the Fictional Report
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
          title="Fake Northbridge Reporting Dashboard"
          subtitle="Training dashboard for fictional evidence and communication only."
          metrics={[
            {
              label: "Approved findings",
              value: "6",
              note: "Each fictional finding includes evidence, alternatives, confidence, limitation, and decision effect.",
            },
            {
              label: "Audience deliverables",
              value: "8",
              note: "Technical, incident, leadership, privacy, support, custody, owner, and portfolio reports are mapped.",
            },
            {
              label: "Open report corrections",
              value: "1",
              note: "Timeline version 2 requires a documented correction notice and audience acknowledgment.",
            },
          ]}
        />

        <FakeAlertCard
          title="Leadership Summary Omits a Major Source Limitation"
          severity="High"
          time="11:12 AM"
          source="Fake Report Quality Console"
          details="The fictional leadership draft states that no external disclosure occurred but does not limit the statement to verified cloud, network, identity, application, account, platform, retention, and time-window coverage."
          recommendation="Pause publication, replace the absolute statement with bounded no-supported-evidence language, add confidence and coverage limitations, identify the evidence sources, obtain technical and privacy review, version the correction, and notify every audience that received the earlier draft."
        />

        <FakeLogPanel
          title="Fake Northbridge Report and Communication Records"
          logs={[
            "10:20 REPORT version='v1' audience='forensic-reviewer'",
            "10:30 REVIEW request='clarify event_vs_receipt time'",
            "10:48 SOURCE application='delay validated' completeness='pass'",
            "11:05 REPORT version='v2' timeline='corrected' prior='preserved'",
            "11:12 QA leadership_limit='missing coverage boundary'",
            "11:14 CORRECT statement='no supported external disclosure within verified coverage'",
            "11:18 REVIEW technical='approved' privacy='approved'",
            "11:20 BRIEF audience='incident-lead' findings='6'",
            "11:35 BRIEF audience='leadership' action='config replacement'",
            "11:50 PRIVACY content_review='not performed' scope='approved'",
            "12:15 ACTION owner='Archive-Platform' deadline='today'",
            "13:10 SUPPORT message='approved symptom and workaround'",
            "15:30 VALIDATION corrected_workflow='pass' recurrence='none observed'",
            "15:45 CLOSURE residual_questions='documented'",
            "16:00 PORTFOLIO fictionalization='approved'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Findings
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Findings, Confidence, Limits, and Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {caseFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternative", item.alternative],
                    ["Limitation", item.limitation],
                    ["Decision effect", item.decision],
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
            Evidence Exhibits
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Reviewed Northbridge Exhibit List
          </h2>

          <div className="mt-6 grid gap-4">
            {exhibits.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.14fr_0.35fr_0.4fr_1fr_0.65fr_0.8fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.id}
                </p>

                <p className="font-black text-blue-200">{item.title}</p>

                <p className="text-sm font-semibold text-emerald-200">
                  {item.parent}
                </p>

                <p className="text-sm leading-6 text-slate-300">
                  {item.content}
                </p>

                <p className="text-sm leading-6 text-purple-100">
                  {item.audience}
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  {item.limit}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Communication Log
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Audience Delivery and Decision History
          </h2>

          <div className="mt-6 grid gap-4">
            {communicationLog.map((item) => (
              <article
                key={`${item.time}-${item.audience}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.18fr_0.35fr_1fr_0.85fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.time}
                </p>

                <p className="font-black text-blue-200">{item.audience}</p>

                <p className="text-sm leading-6 text-slate-300">
                  {item.message}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  {item.decision}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Leadership Statement Is Best Supported?"
          evidence={[
            "The fictional export worker used the outdated configuration and launched the child copy process.",
            "The duplicate folder contains the same five supplied file contents as the approved folder.",
            "All observed copy-related network activity remained on the approved internal storage route.",
            "No supplied cloud, identity, application, network, support, or business record supports public sharing or unrelated-account access.",
            "Cloud and network conclusions remain bounded by verified source coverage, retention, platform, account, and time window.",
            "The outdated configuration was replaced and the corrected workflow passed validation.",
          ]}
          question="Which leadership summary is strongest?"
          options={[
            "An approved export workflow using an outdated configuration created a duplicate folder containing the same five supplied files. No supported external disclosure appears within verified evidence coverage. The configuration was corrected, validation passed, and recurrence monitoring continues.",
            "A service account stole the files.",
            "No security issue was possible.",
            "The network flow proves that data left the organization.",
          ]}
          bestAnswer={0}
          explanation="The strongest summary preserves the supported mechanism, bounded impact, corrective action, validation, and monitoring without adding intent or absolute certainty."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Forensic Reporting and Communication"
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
          title="Build the Northbridge Fictional Forensic Reporting Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Findings, Technical Report, Leadership Brief, Exhibits, and Corrections
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete reporting and case-communication package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Case purpose, authorization, scope, audience, and reporting objective.</li>
                <li>Evidence index, methodology, source health, integrity, custody, and lineage summary.</li>
                <li>Observation table and six-field findings matrix.</li>
                <li>Versioned timeline and conflict statement.</li>
                <li>Technical report and leadership summary.</li>
                <li>Privacy statement, support note, technical-owner action brief, and evidence-custodian handoff.</li>
                <li>Evidence-exhibit list, reviewer checklist, correction record, and communication log.</li>
                <li>Fictional portfolio case study and reflection.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not use or publish any real incident report, screenshot, log,
            file, path, system, account, contact, owner, or private record.
            Complete the lab only with fictional evidence displayed in this
            lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants an Absolute No-Disclosure Statement"
          scenario="The fictional leadership draft says no external disclosure occurred, but the evidence supports only no observed external disclosure within verified cloud, network, identity, application, account, platform, retention, and time-window coverage."
          choices={[
            {
              label: "Choice A",
              response:
                "Use bounded no-supported-evidence language, state confidence and coverage limits, preserve the exact sources, obtain technical and privacy review, and document the final approved wording.",
              outcome:
                "Best defensive choice. The decision maker receives a clear answer without false certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the absolute statement because it is easier to understand.",
              outcome:
                "Unsafe. Simplicity does not justify overstating the evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the impact section entirely.",
              outcome:
                "Weak. Leadership still needs the supported impact boundary and uncertainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Delayed Evidence Changes Three Timeline Events"
          scenario="A fictional application source is repaired and new records change three event placements and increase confidence in the automated-copy finding."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve report version 1, create version 2, identify the new evidence, changed events, affected findings, confidence update, reviewer approval, delivery list, and audience notifications.",
              outcome:
                "Best defensive choice. The correction is transparent and reviewable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Replace version 1 and do not mention the change.",
              outcome:
                "Unsafe. Silent correction hides how the conclusion evolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the new source because the first report was already delivered.",
              outcome:
                "Unsafe. Relevant validated evidence should update the case through the correction process.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Reporting, Findings, and Case Communication Checklist"
          items={[
            "I can define the fictional report purpose, decision owner, audience, evidence boundary, privacy limits, deadline, and required output.",
            "I can link every observation, timeline event, exhibit, finding, limitation, recommendation, and report statement to approved parent evidence.",
            "I can separate direct observations, findings, conflicts, alternatives, confidence, limitations, impact boundaries, and decision effects.",
            "I can preserve one case truth while tailoring terminology, detail, evidence depth, privacy, and action focus for different audiences.",
            "I can write technical, incident, leadership, privacy, support, custody, owner, and portfolio deliverables.",
            "I can create evidence exhibits with identifiers, parent sources, captions, masking, filters, context, audience, and limitations.",
            "I can write bounded negative-evidence statements based on verified source health, coverage, retention, ownership, platform, account, and time windows.",
            "I can version fictional reports and preserve corrections, changed evidence, affected findings, reviewer approval, and audience notification.",
            "I can assign every recommendation an owner, deadline, validation, monitoring, evidence, escalation, rollback, and completion proof.",
            "I will use only fictional records and never expose real systems, users, files, logs, routes, contacts, owners, credentials, reports, or private information.",
          ]}
        />

        <MiniQuiz
          title="I12.7 Mini Quiz: Reporting, Findings, and Case Communication"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Digital Forensics Reporting and Communication Package for the Northbridge Research Archive case. Include report purpose, authorization, scope, evidence index, methodology, observations, findings, alternatives, confidence, limitations, timeline, impact boundary, recommendations, technical report, executive summary, privacy statement, support bulletin, technical-owner brief, exhibit list, reviewer checklist, correction record, communication log, and portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, accounts, files, paths, logs, identities, owners, contacts, dates, times, evidence, and decisions.",
            "Keep the facts and confidence consistent across audiences while changing only the level of detail and action focus.",
            "Use bounded language whenever the evidence depends on verified coverage, retention, platform, account, time, or source-health limits.",
            "Preserve report versions and document every correction rather than silently replacing earlier conclusions.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A forensic report should connect the approved question to evidence, observations, findings, alternatives, confidence, limitations, decisions, and actions.",
            "Audience tailoring changes detail and terminology, not the underlying case truth.",
            "Technical reviewers need reproducibility and lineage, while leadership needs impact, uncertainty, ownership, action, and closure criteria.",
            "Evidence exhibits should remain traceable to parent sources and include context, masking, captions, and limitations.",
            "Negative conclusions should remain bounded by verified source health, coverage, retention, ownership, platform, account, and time boundaries.",
            "Corrections should preserve earlier versions and identify new evidence, affected findings, confidence changes, reviewers, and notified audiences.",
            "Portfolio artifacts should recreate the case with clearly fictional evidence rather than exposing real incidents or organizational records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I12
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