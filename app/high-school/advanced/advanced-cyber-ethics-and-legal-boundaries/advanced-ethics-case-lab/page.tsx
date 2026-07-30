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
  `${modulePath}/professional-communication-during-risk`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate authorization, scope, legal-risk awareness, responsible disclosure, sensitive-information handling, safe research, conflict management, AI ethics, and professional communication into one fictional case.",
  "Separate confirmed facts, supported conclusions, possible impact, unknowns, conflicts, ownership, decisions, and stop conditions across multiple evidence sources.",
  "Choose proportionate fictional actions that protect privacy, service continuity, evidence integrity, fairness, trust, and professional accountability.",
  "Build a complete fictional ethics case package with timelines, owner maps, decision matrices, communication drafts, validation, closure, and lessons learned.",
  "Demonstrate advanced readiness for Module A1 by defending a decision with evidence rather than urgency, seniority, technical access, or personal benefit."
];
const vocabulary = [
  [
    "Integrated ethics review",
    "A fictional process that evaluates authorization, privacy, evidence, service, communication, fairness, trust, and ownership together rather than as isolated questions."
  ],
  [
    "Case boundary",
    "The exact fictional purpose, systems, identities, data, evidence, actions, time, tools, recipients, and decisions included in the case."
  ],
  [
    "Competing duty",
    "A fictional situation in which two valid responsibilities, such as speed and privacy or containment and service continuity, pull toward different actions."
  ],
  [
    "Proportionality",
    "Choosing a fictional action whose scope and impact are justified by the strength of evidence, urgency, service context, and reversibility."
  ],
  [
    "Decision integrity",
    "The degree to which a fictional choice is authorized, evidence-based, fair, documented, reviewable, and free from unmanaged influence."
  ],
  [
    "Ethical escalation",
    "Routing a fictional concern to the correct authorized owner when scope, competence, authority, privacy, service, or trust limits are reached."
  ],
  [
    "Evidence sufficiency",
    "Whether the fictional evidence is strong, complete, current, healthy, and relevant enough to support a particular conclusion or action."
  ],
  [
    "Residual uncertainty",
    "The important fictional questions that remain unanswered after reasonable review and controls."
  ],
  [
    "Owner conflict",
    "A fictional situation in which the person expected to approve or review a decision has a personal, financial, organizational, or role-based interest in the outcome."
  ],
  [
    "Communication correction",
    "A documented fictional update that replaces an inaccurate or unsafe earlier message while preserving revision history."
  ],
  [
    "Controlled disclosure",
    "Sharing a fictional concern privately through approved recipients, channels, evidence boundaries, and timelines."
  ],
  [
    "Safe fallback",
    "A fictional lower-risk action used when data, authority, automation, service, or evidence is unreliable."
  ],
  [
    "Validation gate",
    "A required fictional checkpoint proving that the intended control, service, evidence, communication, and owner outcomes are achieved before closure."
  ],
  [
    "Decision record",
    "A fictional artifact showing the question, options, evidence, owners, rationale, approvals, action, validation, and residual risk."
  ],
  [
    "After-action review",
    "A structured fictional reflection on what happened, what worked, what failed safely, and what must improve."
  ],
  [
    "Professional defensibility",
    "The ability to explain and justify a fictional decision to an authorized reviewer using scope, evidence, policy, ownership, and documented reasoning."
  ]
];
const caseInjects = [
  {
    "time": "08:45",
    "title": "Authorization begins",
    "detail": "A fictional review is approved for supplied identity and service logs relating to APP-ETHICS-01 and ID-SVC-07 from 9:00 AM to 1:00 PM.",
    "ethical_question": "What exactly is permitted, prohibited, time-limited, and owner-controlled?",
    "required_response": "Build the initial scope, owner, evidence, action, communication, and stop-condition record."
  },
  {
    "time": "09:10",
    "title": "High identity alert appears",
    "detail": "One unusual sign-in is labeled High by a fictional AI-assisted workflow with 92% confidence.",
    "ethical_question": "What does the alert support, and what does confidence fail to prove?",
    "required_response": "Preserve the alert, source health, model limits, and alternate explanations."
  },
  {
    "time": "09:18",
    "title": "Critical service dependency discovered",
    "detail": "The account supports a fictional overnight process used by several internal services.",
    "ethical_question": "How should service continuity affect proposed identity actions?",
    "required_response": "Involve the service owner and compare targeted, reversible options."
  },
  {
    "time": "09:27",
    "title": "Supervisor requests mailbox export",
    "detail": "A fictional supervisor asks for a full year of mailbox content to determine intent.",
    "ethical_question": "Does the request fit purpose, authorization, minimum necessary, and data ownership?",
    "required_response": "Pause the request and route it to the data owner and privacy reviewer."
  },
  {
    "time": "09:34",
    "title": "Unapproved database review requested",
    "detail": "A manager says the connected database should be checked because it supports the application.",
    "ethical_question": "Does technical dependency make the database in scope?",
    "required_response": "Document the dependency but require separate written authorization."
  },
  {
    "time": "09:42",
    "title": "Potential conflict discovered",
    "detail": "The assigned analyst is a close friend of the fictional account owner and helped design the alert rule.",
    "ethical_question": "How should personal relationship and self-review be managed?",
    "required_response": "Disclose, preserve evidence contribution, and assign independent review and separate approval."
  },
  {
    "time": "09:55",
    "title": "Leadership draft overstates impact",
    "detail": "A draft states that an employee account was compromised and confidential data was stolen.",
    "ethical_question": "Which claims are supported, and what correction is required?",
    "required_response": "Block release, rebuild the fact set, and issue evidence-limited language."
  },
  {
    "time": "10:08",
    "title": "AI workflow proposes automatic disabling",
    "detail": "The fictional automation recommends disabling the account based on confidence and severity.",
    "ethical_question": "Does the workflow have authority, fairness evidence, service context, approval, and rollback?",
    "required_response": "Pause high-impact execution and require human, service-aware review."
  },
  {
    "time": "10:20",
    "title": "Supplier tickets offered",
    "detail": "A fictional supplier connected to the service offers event tickets to the reviewer before a contract-related decision.",
    "ethical_question": "How should the benefit and supplier relationship be managed?",
    "required_response": "Decline or report the benefit and remove conflicted approval authority."
  },
  {
    "time": "10:36",
    "title": "Unknown-origin file appears",
    "detail": "A lab folder contains realistic employee names and private-message text from an unknown source.",
    "ethical_question": "Can the file be used merely because the case is fictional?",
    "required_response": "Quarantine, restrict access, determine origin, and replace with synthetic data."
  },
  {
    "time": "11:05",
    "title": "Independent review finds plausible maintenance activity",
    "detail": "A fictional owner statement and schedule record show the sign-in may match approved maintenance.",
    "ethical_question": "How should conflicting evidence change urgency and communication?",
    "required_response": "Preserve both explanations and avoid unsupported attribution."
  },
  {
    "time": "11:32",
    "title": "Targeted control selected",
    "detail": "The service owner approves a temporary session review and additional monitoring rather than disabling the account.",
    "ethical_question": "What makes the action proportionate and defensible?",
    "required_response": "Record owner approval, scope, rollback, monitoring, and validation."
  },
  {
    "time": "12:10",
    "title": "Control validation succeeds",
    "detail": "Expected service activity succeeds, an unapproved test is denied, service remains healthy, and logs are complete.",
    "ethical_question": "What does the validation prove and what remains uncertain?",
    "required_response": "Support bounded closure while preserving future monitoring and limitations."
  },
  {
    "time": "12:42",
    "title": "Portfolio draft contains real-looking evidence",
    "detail": "The student case study includes realistic screenshots, names, message excerpts, dates, and system labels.",
    "ethical_question": "Is partial redaction enough?",
    "required_response": "Replace the entire evidence set with fully invented material and document the revision."
  },
  {
    "time": "13:00",
    "title": "Authorization expires",
    "detail": "The written review window ends, but the team wants to continue polishing the case.",
    "ethical_question": "Does unfinished work extend authorization?",
    "required_response": "Stop case activity or obtain a documented extension for any further work."
  }
];
const ownerMap = [
  {
    "owner": "Security lead",
    "responsibility": "Coordinates the fictional case, evidence boundaries, risk, escalation, temporary safeguards, and response quality.",
    "decision": "Whether the case remains within authorized defensive review and which owner must act next.",
    "must_not_do": "Override privacy, service, supplier, communication, or risk owners without authority.",
    "artifact": "Case coordination and escalation log"
  },
  {
    "owner": "System or application owner",
    "responsibility": "Defines fictional expected behavior, application purpose, architecture, dependencies, and remediation ownership.",
    "decision": "Whether the application behavior and related technical actions are acceptable.",
    "must_not_do": "Assume ownership of connected databases, personal data, or supplier systems.",
    "artifact": "Application owner statement and validation"
  },
  {
    "owner": "Identity owner",
    "responsibility": "Explains fictional account purpose, role, expected sign-in patterns, access state, and approved identity actions.",
    "decision": "Whether identity controls should be applied, modified, or removed.",
    "must_not_do": "Treat one alert as proof of malicious intent.",
    "artifact": "Identity decision and effective-state record"
  },
  {
    "owner": "Service owner",
    "responsibility": "Explains fictional service dependencies, criticality, acceptable disruption, continuity, rollback, and health validation.",
    "decision": "Whether a proposed action is safe for the service.",
    "must_not_do": "Ignore security evidence merely to avoid inconvenience.",
    "artifact": "Service-impact and rollback decision"
  },
  {
    "owner": "Data owner or privacy reviewer",
    "responsibility": "Controls fictional mailbox, employee, private-message, and other confidential information.",
    "decision": "Which records and fields may be used, shared, retained, and deleted.",
    "must_not_do": "Authorize unrelated technical or supplier activity.",
    "artifact": "Minimum-necessary and data-handling plan"
  },
  {
    "owner": "Independent reviewer",
    "responsibility": "Reassesses fictional evidence and decisions without the original personal or self-review conflict.",
    "decision": "Whether conclusions are reproducible and which corrections are needed.",
    "must_not_do": "Expand technical scope or access new data without permission.",
    "artifact": "Independent review and limitation statement"
  },
  {
    "owner": "Supplier or contract owner",
    "responsibility": "Coordinates fictional external evidence, communication, contract obligations, benefits, and supplier remediation.",
    "decision": "Which supplier contact or evidence request may proceed.",
    "must_not_do": "Allow a conflicted reviewer to approve the supplier decision.",
    "artifact": "Supplier communication and conflict record"
  },
  {
    "owner": "Communications owner",
    "responsibility": "Maintains one fictional approved fact set and creates audience-specific messages.",
    "decision": "What may be communicated, to whom, when, and through which channel.",
    "must_not_do": "Release unsupported impact claims or unnecessary sensitive detail.",
    "artifact": "Fact set, message package, and correction log"
  },
  {
    "owner": "Risk owner or leadership",
    "responsibility": "Reviews fictional business impact, options, resources, residual risk, and continuation.",
    "decision": "Which treatment is accepted and who owns remaining risk.",
    "must_not_do": "Require deception, unsupported certainty, unsafe disclosure, or unauthorized action.",
    "artifact": "Risk treatment and acceptance record"
  },
  {
    "owner": "Teacher or portfolio reviewer",
    "responsibility": "Ensures the fictional case is original, fully invented, educational, safe, and free of real confidential information.",
    "decision": "Whether the artifact is safe to submit or publish.",
    "must_not_do": "Treat name changes as sufficient fictionalization.",
    "artifact": "Portfolio safety and originality review"
  }
];
const decisionFramework = [
  {
    "step": "1",
    "title": "Freeze the case boundary",
    "question": "What fictional purpose, assets, identities, data, methods, time, tools, actions, outputs, and audiences are authorized?",
    "output": "Written case boundary and exclusions.",
    "failure": "The team begins exploring connected systems and private data."
  },
  {
    "step": "2",
    "title": "Build the fact set",
    "question": "What is directly observed, what is concluded, what is possible, what conflicts, and what remains unknown?",
    "output": "Versioned evidence and uncertainty register.",
    "failure": "Alert labels and confidence scores become facts."
  },
  {
    "step": "3",
    "title": "Map owners and conflicts",
    "question": "Who owns each decision, and does any relationship, benefit, loyalty, self-review, or pressure weaken independence?",
    "output": "Owner and conflict-management matrix.",
    "failure": "The same conflicted person designs, validates, approves, and communicates."
  },
  {
    "step": "4",
    "title": "Protect sensitive information",
    "question": "Which fictional records and fields are necessary, classified, owner-approved, and safe to retain or share?",
    "output": "Minimum-necessary data plan.",
    "failure": "The team collects a full mailbox and unknown-origin files."
  },
  {
    "step": "5",
    "title": "Compare proportionate actions",
    "question": "Which option reduces risk with the least unjustified privacy, service, evidence, fairness, and trust harm?",
    "output": "Option comparison with reversibility and owner approval.",
    "failure": "The broadest action is chosen because it feels safest."
  },
  {
    "step": "6",
    "title": "Control AI and automation",
    "question": "What may the fictional tool summarize or recommend, and which actions must remain human-owned?",
    "output": "Automation authority, approval, audit, and rollback plan.",
    "failure": "Confidence directly triggers account disabling."
  },
  {
    "step": "7",
    "title": "Coordinate disclosure and communication",
    "question": "Who receives the fictional concern privately, and how do messages remain accurate, safe, and consistent?",
    "output": "Recipient map, fact set, correction, and status cadence.",
    "failure": "Leadership, users, suppliers, and portfolios receive different claims."
  },
  {
    "step": "8",
    "title": "Execute with stop conditions",
    "question": "What conditions require pause for scope, privacy, evidence, service, tool, conflict, or authority concerns?",
    "output": "Action log and stop-condition record.",
    "failure": "Work continues after unknown data or expired permission appears."
  },
  {
    "step": "9",
    "title": "Validate outcomes",
    "question": "Did the fictional control work, service remain healthy, evidence remain complete, communication stay accurate, and owners sign off?",
    "output": "Technical, operational, communication, and governance validation.",
    "failure": "The team closes because the ticket is marked done."
  },
  {
    "step": "10",
    "title": "Close and improve",
    "question": "What residual risk, uncertainty, monitoring, retention, deletion, corrections, lessons, and future controls remain?",
    "output": "Closure package and after-action review.",
    "failure": "The team hides errors or leaves sensitive working copies behind."
  }
];
const optionMatrix = [
  {
    "option": "Disable the fictional account immediately",
    "security_value": "Could reduce identity risk quickly if compromise is real.",
    "privacy_and_fairness": "May unfairly affect the account owner when evidence and intent are unconfirmed.",
    "service_impact": "Could interrupt multiple overnight services.",
    "authorization": "Current scope permits review and recommendation, not automatic disabling.",
    "decision": "Reject as the immediate action; require owner-approved targeted alternatives."
  },
  {
    "option": "Export the full fictional mailbox",
    "security_value": "May reveal additional context.",
    "privacy_and_fairness": "Creates broad exposure of unrelated private and confidential information.",
    "service_impact": "Low direct outage risk but high handling and trust burden.",
    "authorization": "Not approved; data-owner and privacy review are absent.",
    "decision": "Reject and use minimum-necessary approved identity evidence."
  },
  {
    "option": "Review the connected fictional database",
    "security_value": "Could add application context.",
    "privacy_and_fairness": "May expose unrelated records.",
    "service_impact": "Unknown because ownership and dependencies are not confirmed.",
    "authorization": "Database is not listed in scope.",
    "decision": "Document dependency and seek separate written authorization if truly necessary."
  },
  {
    "option": "Use targeted session review and increased monitoring",
    "security_value": "Reduces risk while preserving evidence and supporting additional review.",
    "privacy_and_fairness": "Narrower impact and no unsupported blame.",
    "service_impact": "Designed to preserve critical service continuity.",
    "authorization": "Requires documented service and identity owner approval.",
    "decision": "Preferred proportionate action after approval and rollback validation."
  },
  {
    "option": "Publish the fictional finding immediately",
    "security_value": "Could create public pressure for action.",
    "privacy_and_fairness": "May expose sensitive details and unfairly identify people.",
    "service_impact": "Could disrupt coordinated response and supplier relationships.",
    "authorization": "No public communication approval exists.",
    "decision": "Reject; use private coordinated disclosure and a fully invented portfolio artifact later."
  },
  {
    "option": "Close after validation and continued monitoring",
    "security_value": "Documents a bounded effective outcome while preserving future review.",
    "privacy_and_fairness": "Avoids unnecessary data collection and blame.",
    "service_impact": "Confirms service health and rollback state.",
    "authorization": "Fits the approved case when completed before expiration or under extension.",
    "decision": "Accept with residual uncertainty, owner signoff, retention, deletion, and monitoring."
  }
];
const evidenceMatrix = [
  {
    "id": "CASE-01",
    "source": "Fictional written authorization",
    "observation": "Permits supplied identity and service-log review for two named assets from 9:00 AM to 1:00 PM.",
    "supports": "A narrow purpose, evidence set, asset list, and time window are approved.",
    "limits": "Does not authorize mailbox access, database review, public disclosure, or automatic account disabling.",
    "case_use": "Treat as the primary boundary and stop at expiration."
  },
  {
    "id": "CASE-02",
    "source": "Fictional AI-assisted alert",
    "observation": "One sign-in is labeled High with 92% confidence.",
    "supports": "The model produced a high-confidence output requiring review.",
    "limits": "Does not prove compromise, intent, data access, or impact.",
    "case_use": "Use as decision support, not automatic action authority."
  },
  {
    "id": "CASE-03",
    "source": "Fictional service dependency map",
    "observation": "ID-SVC-07 supports multiple overnight services.",
    "supports": "Broad account disabling may create operational harm.",
    "limits": "Does not prove no identity action should occur.",
    "case_use": "Require service-owner input and targeted reversible options."
  },
  {
    "id": "CASE-04",
    "source": "Fictional supervisor request",
    "observation": "Requests a full mailbox export and connected database review.",
    "supports": "Two scope-expansion requests exist.",
    "limits": "Does not prove the supervisor owns the data or database.",
    "case_use": "Pause and route each request to the correct owner."
  },
  {
    "id": "CASE-05",
    "source": "Fictional conflict disclosure",
    "observation": "The analyst is a close friend of the account owner and helped design the alert rule.",
    "supports": "Personal relationship and self-review could affect or appear to affect judgment.",
    "limits": "Does not prove the analyst acted dishonestly.",
    "case_use": "Preserve evidence contribution but assign independent validation and separate approval."
  },
  {
    "id": "CASE-06",
    "source": "Fictional leadership draft",
    "observation": "Claims confirmed compromise and stolen confidential data.",
    "supports": "The draft exceeds the evidence.",
    "limits": "Does not prove intentional deception.",
    "case_use": "Block, correct, version, and preserve the communication revision."
  },
  {
    "id": "CASE-07",
    "source": "Fictional unknown-origin file",
    "observation": "Contains realistic employee names and private-message text.",
    "supports": "The file may create privacy and confidentiality risk.",
    "limits": "Does not prove the content is real or intentionally copied.",
    "case_use": "Quarantine, restrict access, determine origin, and replace with synthetic data."
  },
  {
    "id": "CASE-08",
    "source": "Fictional owner and schedule records",
    "observation": "The sign-in may match an approved maintenance window.",
    "supports": "A legitimate alternate explanation exists.",
    "limits": "Does not prove the event is expected.",
    "case_use": "Preserve the alternative and reduce unsupported certainty."
  },
  {
    "id": "CASE-09",
    "source": "Fictional targeted-control approval",
    "observation": "Identity and service owners approve temporary session review and increased monitoring.",
    "supports": "A narrow, reversible, service-aware action is authorized.",
    "limits": "Does not prove the case is resolved.",
    "case_use": "Execute within scope and validate technical and service outcomes."
  },
  {
    "id": "CASE-10",
    "source": "Fictional validation record",
    "observation": "Expected service activity succeeds, the unapproved test is denied, service is healthy, and logs are complete.",
    "supports": "The intended control and service state are validated for the approved scope.",
    "limits": "Does not prove every future event will be safe.",
    "case_use": "Support bounded closure, monitoring, and residual uncertainty."
  }
];
const communicationPackage = [
  {
    "audience": "Technical team",
    "message": "One unusual fictional sign-in triggered a High alert. Confidence is 92%, but compromise, intent, and data access are unconfirmed. Service dependency and maintenance context are under review.",
    "decision_request": "Review evidence CASE-02, CASE-03, and CASE-08 and confirm whether targeted session controls remain appropriate.",
    "remove": "Unsupported blame, full mailbox content, and unrelated employee details.",
    "next_update": "11:30 AM or earlier if confirmed impact changes."
  },
  {
    "audience": "Service owner",
    "message": "The fictional account supports multiple overnight services. No outage is confirmed, and a broad disable could create disruption.",
    "decision_request": "Approve or reject temporary session review and increased monitoring with rollback.",
    "remove": "Raw private data and unsupported compromise language.",
    "next_update": "11:15 AM after service-health review."
  },
  {
    "audience": "Leadership",
    "message": "One service-account sign-in is under review. No confirmed compromise, data loss, or service outage is currently supported.",
    "decision_request": "No immediate broad action is recommended; targeted owner-approved monitoring is in progress.",
    "remove": "Technical raw logs, private identities, and dramatic language.",
    "next_update": "12:00 PM with validation status."
  },
  {
    "audience": "Data and privacy owner",
    "message": "A full mailbox export was requested, but the current review can proceed using approved identity fields.",
    "decision_request": "Confirm rejection of broad collection and approve the minimum-necessary field list.",
    "remove": "Unrelated communications and full employee history.",
    "next_update": "Before any new data request is considered."
  },
  {
    "audience": "Supplier owner",
    "message": "A supplier-related decision exists, and a reviewer received a benefit offer during the review period.",
    "decision_request": "Document the benefit, reassign approval, and use the contract-approved contact path.",
    "remove": "Public accusations or unrelated internal information.",
    "next_update": "After independent supplier review is assigned."
  },
  {
    "audience": "Teacher or portfolio reviewer",
    "message": "The case demonstrates integrated fictional ethics reasoning using invented evidence, owners, decisions, and corrections.",
    "decision_request": "Confirm that all realistic screenshots, names, dates, messages, and system labels have been replaced.",
    "remove": "Any real or uncertain-origin evidence.",
    "next_update": "Before submission or publication."
  }
];
const validationGates = [
  {
    "gate": "Authorization",
    "pass_condition": "Every fictional action, asset, data source, recipient, and time remains within written scope or documented extension.",
    "evidence": "Authorization, approvals, timestamps, and scope-change records.",
    "failure_action": "Stop and seek correct owner authorization."
  },
  {
    "gate": "Evidence",
    "pass_condition": "Original fictional sources, context, timestamps, provenance, health, limitations, and alternate explanations are preserved.",
    "evidence": "Evidence register and source-health review.",
    "failure_action": "Reduce confidence, preserve uncertainty, and obtain better sources."
  },
  {
    "gate": "Privacy",
    "pass_condition": "Only minimum-necessary approved fictional fields are used and unknown-origin data is excluded.",
    "evidence": "Field allowlist, owner approval, access, retention, and deletion records.",
    "failure_action": "Restrict access, remove unnecessary data, and notify the data owner."
  },
  {
    "gate": "Independence",
    "pass_condition": "Personal, supplier, portfolio, and self-review conflicts are disclosed and managed.",
    "evidence": "Conflict record, reassignment, independent review, and separate signoff.",
    "failure_action": "Remove conflicted authority and re-review the decision."
  },
  {
    "gate": "Automation",
    "pass_condition": "AI remains decision support; high-impact action has human approval, explanation, audit, rate limits, and rollback.",
    "evidence": "Model output, source links, approval log, rollback test, and audit record.",
    "failure_action": "Pause high-impact automation and use manual fallback."
  },
  {
    "gate": "Service",
    "pass_condition": "The fictional service remains healthy and dependencies are protected during and after action.",
    "evidence": "Service metrics, owner statement, rollback, and recovery checks.",
    "failure_action": "Rollback or adjust through the service owner."
  },
  {
    "gate": "Communication",
    "pass_condition": "All fictional audiences use one approved fact set with safe, accurate, actionable language.",
    "evidence": "Fact-set version, drafts, approvals, acknowledgments, and corrections.",
    "failure_action": "Pause release, correct the record, and reconcile all messages."
  },
  {
    "gate": "Closure",
    "pass_condition": "Technical behavior, service state, evidence handling, communication, ownership, residual risk, retention, deletion, and monitoring are complete.",
    "evidence": "Closure checklist and owner signoff.",
    "failure_action": "Keep the case open or document a controlled transfer of remaining work."
  }
];
const commonMistakes = [
  "Allowing urgency, severity, confidence, seniority, or technical access to replace written authorization.",
  "Treating connected fictional systems as automatically in scope.",
  "Using a full mailbox or private-message review when a narrow identity question can be answered with fewer fields.",
  "Assuming a conflict of interest proves dishonesty or makes every observation useless.",
  "Letting the same fictional person design, validate, approve, communicate, and accept risk for their own work.",
  "Using AI confidence as proof and allowing automatic high-impact action without service context or human approval.",
  "Ignoring alternate explanations because they make the case less dramatic.",
  "Sending different impact claims to technical, service, leadership, supplier, user, teacher, or public audiences.",
  "Accepting gifts, benefits, recognition, or secrecy pressure without disclosure and control.",
  "Using unknown-origin or realistic confidential evidence in a training lab or portfolio.",
  "Continuing after authorization expires because the work is nearly complete.",
  "Calling the case resolved after one configuration or workflow change without validation.",
  "Deleting evidence or working copies before retention and preservation review.",
  "Changing only names while keeping real dates, screenshots, messages, systems, relationships, and incident structure."
];
const quizQuestions = [
  {
    "question": "Which fictional action best integrates authorization, service continuity, and proportionality?",
    "choices": [
      "Immediately disable the critical service account.",
      "Use owner-approved targeted session review and increased monitoring with rollback and validation.",
      "Export the full mailbox before deciding.",
      "Review every connected system."
    ],
    "answer": 1,
    "explanation": "The targeted action is narrow, reversible, service-aware, owner-approved, and evidence-limited."
  },
  {
    "question": "The assigned fictional analyst is a close friend of the account owner and designed the alert rule. What is strongest?",
    "choices": [
      "Discard every observation.",
      "Keep the conflict private because the analyst is skilled.",
      "Disclose the conflict, preserve useful evidence, assign independent review, and separate approval.",
      "Ask the friend directly for an explanation."
    ],
    "answer": 2,
    "explanation": "Conflict management protects trust without treating the conflict as proof of misconduct."
  },
  {
    "question": "What does a fictional AI output with 92% confidence prove?",
    "choices": [
      "The account is compromised.",
      "The user acted maliciously.",
      "The tool produced a high-confidence label that still requires evidence review and human ownership.",
      "Automatic disabling is authorized."
    ],
    "answer": 2,
    "explanation": "Confidence is not proof and does not create authority."
  },
  {
    "question": "A fictional leadership draft says confidential data was stolen, but the evidence confirms only one unusual sign-in. What should happen?",
    "choices": [
      "Send the draft because it creates urgency.",
      "Block release, correct the fact set, document the revision, and state the evidence limits.",
      "Delete the alert from all messages.",
      "Publish the draft only internally."
    ],
    "answer": 1,
    "explanation": "Professional communication must remain accurate regardless of audience or urgency."
  },
  {
    "question": "A lab file contains realistic employee names and private-message text from an unknown source. What is strongest?",
    "choices": [
      "Use it because the case is fictional.",
      "Blur the names and continue.",
      "Quarantine it, restrict access, determine origin, notify the owner, and replace it with synthetic data.",
      "Post it for classmates to review."
    ],
    "answer": 2,
    "explanation": "Unknown-origin possibly sensitive data is a stop condition."
  },
  {
    "question": "What should happen when the fictional authorization window ends?",
    "choices": [
      "Continue because the case is almost finished.",
      "Stop or obtain a documented extension before any further case activity.",
      "Continue only on a personal device.",
      "Change the time in the notes."
    ],
    "answer": 1,
    "explanation": "Unfinished work does not extend written permission."
  },
  {
    "question": "What makes the final advanced ethics case portfolio safe to share?",
    "choices": [
      "Only names are changed.",
      "Real screenshots are cropped.",
      "Every organization, person, system, account, message, record, relationship, supplier, date, action, decision, and outcome is invented.",
      "The real case is summarized without URLs."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization is required for responsible educational sharing."
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
        Module Test
      </Link>
    </div>
  );
}

export default function AdvancedEthicsCaseLabPage() {
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
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Integrated Case Lab
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.10 Advanced Ethics Case Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete an integrated fictional case involving authorization,
            privacy, service continuity, AI confidence, scope expansion,
            conflicts of interest, supplier influence, communication errors,
            safe research, responsible disclosure, validation, and closure.
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
          lessonTitle="Advanced Ethics Case Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the fictional organizations, people, systems, identities, messages, logs, suppliers, conflicts, dates, decisions, and outcomes provided in this lesson.",
            "I will not treat urgency, severity, confidence, seniority, technical access, friendship, gifts, or portfolio recognition as permission.",
            "I will separate confirmed facts, supported conclusions, possible impact, alternate explanations, and unknowns.",
            "I will use minimum-necessary fictional information and protect evidence, privacy, service continuity, fairness, and trust.",
            "I will stop for unclear authority, scope expansion, unknown-origin data, unmanaged conflict, unsafe automation, inaccurate communication, or expired permission.",
            "I will not use real incidents, screenshots, private messages, employee records, school records, supplier details, credentials, or confidential information.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="The Hardest Ethical Cases Contain Several Correct Concerns at Once"
        >
          <p className="leading-8">
            The fictional Northbridge team wants to reduce identity risk
            quickly. The supervisor wants more data, the service owner wants
            continuity, leadership wants certainty, the analyst wants a strong
            portfolio result, the supplier wants influence, the AI wants a
            broad automated action, and the privacy owner wants minimal
            collection. Advanced judgment does not choose one concern and
            ignore the rest. It coordinates ownership, evidence, scope,
            proportionality, communication, validation, and trust.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak case handling
              </p>
              <p className="mt-2 leading-7">
                Collect everything, act broadly, trust the model, hide
                conflicts, use dramatic communication, and validate later.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Advanced case handling
              </p>
              <p className="mt-2 leading-7">
                Freeze scope, preserve evidence, map owners, disclose
                conflicts, minimize data, compare options, control automation,
                communicate accurately, validate, and close transparently.
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
          eyebrow="Case Rule"
          title="No Single Signal Owns the Decision"
        >
          <p className="leading-8">
            The fictional alert, AI confidence, supervisor request, service
            dependency, analyst relationship, supplier benefit, leadership
            pressure, unknown-origin file, and maintenance explanation are all
            relevant. None of them alone determines the outcome. The case must
            be resolved through bounded evidence, authorized ownership,
            proportionate options, independent review, safe communication, and
            measurable validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Evidence",
                "What the fictional sources support, conflict with, and cannot prove.",
              ],
              [
                "Authority",
                "Who may review, approve, execute, communicate, validate, and accept remaining risk.",
              ],
              [
                "Impact",
                "How privacy, service, fairness, evidence, trust, and future risk change under each option.",
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
          title="Scope → Evidence → Owners → Options → Action → Validation"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Scope", "Define the fictional purpose, assets, identities, data, actions, methods, time, outputs, and exclusions."],
              ["Evidence", "Separate facts, conclusions, possible impact, alternate explanations, source health, and unknowns."],
              ["Owners", "Assign system, identity, service, data, supplier, communication, independent-review, and risk authority."],
              ["Options", "Compare security value with privacy, service, fairness, evidence, trust, reversibility, and authorization."],
              ["Action", "Execute the narrow authorized plan with human approval, audit, rollback, and stop conditions."],
              ["Validation", "Confirm control behavior, service health, evidence integrity, communication accuracy, residual risk, and closure."],
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
          title="Language for Integrated Ethics Decisions"
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
            Case Timeline
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Fifteen Fictional Injects
          </h2>

          <div className="mt-6 grid gap-5">
            {caseInjects.map((item) => (
              <article
                key={`${item.time}-${item.title}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-sm font-black text-cyan-200">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-black text-cyan-100">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Ethical question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.ethical_question}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required response
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.required_response}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Ownership Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners with Different Authority
          </h2>

          <div className="mt-6 grid gap-5">
            {ownerMap.map((item) => (
              <article
                key={item.owner}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.owner}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Responsibility", item.responsibility],
                    ["Primary decision", item.decision],
                    ["Must not do", item.must_not_do],
                    ["Required artifact", item.artifact],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.owner}-${label}`}
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
            Integrated Decision Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps for a Defensible Ethics Decision
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionFramework.map((item) => (
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
                  <p className="leading-7 text-slate-300">{item.question}</p>
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
                      Failure pattern
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
            Option Comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Security Value with Ethical Consequence
          </h2>

          <div className="mt-6 grid gap-5">
            {optionMatrix.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.option}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  {[
                    ["Security value", item.security_value],
                    ["Privacy and fairness", item.privacy_and_fairness],
                    ["Service impact", item.service_impact],
                    ["Authorization", item.authorization],
                    ["Decision", item.decision],
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
          title="Fake Northbridge Advanced Ethics Case Dashboard"
          subtitle="Fictional integrated authorization, privacy, conflict, automation, service, communication, and validation review."
          metrics={[
            {
              label: "Open ethical issues",
              value: "8",
              note: "Scope, privacy, conflict, automation, service, supplier, communication, and portfolio safety require coordinated controls.",
            },
            {
              label: "Confirmed technical impact",
              value: "Limited",
              note: "One unusual sign-in is confirmed; compromise and data loss remain unconfirmed.",
            },
            {
              label: "Selected treatment",
              value: "Targeted",
              note: "Owner-approved session review and increased monitoring preserve service and evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Ethics Failure Could Create Privacy, Service, Trust, and Evidence Harm"
          severity="High"
          time="10:40 AM"
          source="Fake Northbridge Ethics Coordination Console"
          details="A fictional case combines unauthorized scope expansion, full-mailbox collection, AI-driven account disabling, analyst conflict, supplier influence, inaccurate leadership messaging, and unknown-origin data."
          recommendation="Freeze the case boundary, preserve the approved evidence, disclose and manage conflicts, reject excessive collection, pause high-impact automation, involve service and data owners, correct communication, quarantine questionable data, choose a targeted reversible action, and validate before closure."
        />

        <FakeLogPanel
          title="Fake Advanced Ethics Case Timeline"
          logs={[
            "08:45 AUTH assets='APP-ETHICS-01,ID-SVC-07'",
            "09:10 ALERT severity='High' confidence='0.92'",
            "09:18 SERVICE dependency='critical-overnight'",
            "09:27 REQUEST mailbox='full-year'",
            "09:28 PRIVACY scope='not-approved'",
            "09:34 REQUEST database='connected'",
            "09:35 SCOPE database='not-listed'",
            "09:42 CONFLICT analyst='friend-and-designer'",
            "09:55 DRAFT leadership='confirmed-theft'",
            "10:08 AUTOMATION action='disable-account'",
            "10:09 AUTH automation='not-approved'",
            "10:20 GIFT supplier='event-tickets'",
            "10:36 DATA file-origin='unknown'",
            "11:05 ALT maintenance='plausible'",
            "11:32 ACTION targeted-session='approved'",
            "12:10 VALIDATION service='healthy' control='effective'",
            "12:42 PORTFOLIO realistic-evidence='rejected'",
            "13:00 AUTH window='expired'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Case Evidence Supports
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
                    ["Case use", item.case_use],
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
            Communication Package
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Audiences, One Approved Fact Set
          </h2>

          <div className="mt-6 grid gap-5">
            {communicationPackage.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Message", item.message],
                    ["Decision request", item.decision_request],
                    ["Remove", item.remove],
                    ["Next update", item.next_update],
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
            Validation Gates
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Gates before Ethical Closure
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {validationGates.map((item) => (
              <article
                key={item.gate}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.gate}
                </h3>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Pass condition", item.pass_condition],
                    ["Evidence", item.evidence],
                    ["Failure action", item.failure_action],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.gate}-${label}`}
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
          title="Which Fictional Final Decision Is Most Defensible?"
          evidence={[
            "Written authorization permits supplied identity and service-log review only until 1:00 PM.",
            "One High alert with 92% confidence exists, but compromise and data loss are unconfirmed.",
            "The account supports several critical overnight services.",
            "Mailbox and database review are outside scope.",
            "The assigned analyst has a personal and self-review conflict.",
            "A plausible maintenance explanation exists.",
            "Identity and service owners approve a targeted reversible session review.",
            "Validation confirms expected activity, denied unapproved access, healthy service, and complete logs.",
          ]}
          options={[
            "Use the targeted owner-approved control, preserve competing explanations, keep broad data and connected systems out of scope, use independent review, correct communication, validate, and close with residual monitoring.",
            "Disable the account automatically because confidence is above 90%.",
            "Export the mailbox and review the database to remove uncertainty.",
            "Publish the case immediately because validation succeeded.",
          ]}
          bestAnswer={0}
          explanation="The selected decision is authorized, proportionate, reversible, privacy-aware, service-aware, independently reviewed, accurately communicated, and validated."
        />

        <SectionCard
          eyebrow="Common Case Failures"
          title="What Would Make the Final Decision Unprofessional"
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
          eyebrow="Advanced Case Lab"
          title="Build the Complete Fictional Ethics Decision Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Final assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Defend the Northbridge Decision
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                quote, copy, lightly modify, summarize, or reproduce real
                incidents, screenshots, employee records, private messages,
                supplier details, AI outputs, authorization documents, school
                records, credentials, or confidential information.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Case boundary and written authorization summary.</li>
                <li>Timeline of all fifteen fictional injects.</li>
                <li>Fact, conclusion, impact, alternative, conflict, and unknown matrix.</li>
                <li>Owner, authority, conflict, recusal, and independent-review map.</li>
                <li>Minimum-necessary data and evidence-handling plan.</li>
                <li>AI authority, approval, fairness, audit, rollback, and fallback plan.</li>
                <li>Six-option decision matrix and selected treatment.</li>
                <li>Private disclosure and multi-audience communication package.</li>
                <li>Eight validation gates and closure record.</li>
                <li>After-action review, correction log, revision history, and full fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The final package must explain why the selected decision is more
            defensible than every rejected option. It must remain completely
            fictional and cannot provide authorization or operational guidance
            for any real-world system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Demands Immediate Account Disabling"
          scenario="A fictional leader argues that the High severity and 92% confidence justify immediate disabling. The account supports critical services, compromise is unconfirmed, and the workflow lacks authority for automatic action."
          choices={[
            {
              label: "Choice A",
              response: "Explain the evidence limits, preserve urgency, require service and identity owner approval, use the targeted reversible control, and provide a fixed update time.",
              outcome: "Best professional choice. The response protects security without inventing certainty or causing unjustified service harm.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the account because leadership is the highest authority.",
              outcome: "Risky. Seniority does not replace the correct technical, service, and authorization owners.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore leadership and close the alert.",
              outcome: "Unsafe. The concern still requires coordinated review and action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Portfolio Deadline Is Today"
          scenario="The fictional student wants to submit the case immediately, but the draft contains realistic screenshots, names, dates, message excerpts, supplier details, and system labels."
          choices={[
            {
              label: "Choice A",
              response: "Delay submission, replace the full evidence set with invented material, document the revision, and obtain portfolio-safety review.",
              outcome: "Best professional choice. Deadlines do not remove privacy, confidentiality, originality, or safety duties.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Change the names and submit.",
              outcome: "Risky. The remaining details may still reveal or imitate real information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Submit privately and publish later.",
              outcome: "Unsafe. Private submission still requires authorized and safe information handling.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Advanced Ethics Case Checklist"
          items={[
            "I can define the fictional case purpose, scope, assets, identities, data, actions, methods, time, tools, audiences, and exclusions.",
            "I can separate fictional observations, supported conclusions, possible impact, confirmed impact, alternate explanations, conflicts, and unknowns.",
            "I can identify fictional security, system, identity, service, data, supplier, communication, independent-review, risk, and portfolio owners.",
            "I can recognize fictional personal, supplier, portfolio, organizational, and self-review conflicts without treating them as proof of misconduct.",
            "I can reject fictional mailbox, database, or other scope expansion until the correct owner provides written authorization.",
            "I can preserve fictional minimum-necessary evidence, source health, provenance, access, retention, deletion, and unknown-origin data stop conditions.",
            "I can keep fictional AI as decision support and require human approval, explanation, audit, rate limits, rollback, and fallback for high-impact actions.",
            "I can compare fictional options using security value, privacy, fairness, service impact, evidence, authorization, reversibility, trust, and residual risk.",
            "I can create fictional technical, service, leadership, privacy, supplier, and teacher messages from one approved fact set.",
            "I can correct unsupported fictional claims, document the revision, and provide owners, deadlines, and next updates.",
            "I can validate fictional control behavior, service health, logging, evidence integrity, communication, conflict controls, residual risk, retention, deletion, and monitoring.",
            "I will never treat this fictional case, lab, portfolio, or lesson as permission for real-world access, testing, scanning, changes, investigation, or disclosure.",
          ]}
        />

        <MiniQuiz
          title="A1.10 Mini Quiz: Advanced Ethics Case Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create the final fully fictional Advanced Ethics Case Package for the Northbridge scenario. Include authorization, scope, timeline, evidence register, uncertainty matrix, owner map, conflict disclosures, independent review, sensitive-information plan, AI and automation controls, decision matrix, selected action, disclosure plan, multi-audience communications, corrections, validation gates, closure, residual risk, monitoring, after-action review, revision history, and a complete statement that every person, organization, system, account, message, supplier, record, relationship, action, decision, date, and outcome is invented."
          tips={[
            "Defend the selected fictional action against every rejected option using evidence and owner authority.",
            "Show how authorization, privacy, service continuity, conflict management, AI ethics, disclosure, and communication affect one another.",
            "Include at least three fictional mistakes, corrections, and lessons learned.",
            "Preserve uncertainty even after successful validation.",
            "Make the final portfolio artifact completely invented, reviewable, professional, and safe to share.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Advanced ethics requires integrating authorization, evidence, privacy, service, fairness, trust, automation, disclosure, and communication.",
            "No single alert, confidence score, supervisor request, service concern, relationship, or deadline should own the decision.",
            "Connected systems and interesting evidence remain out of scope until separately authorized.",
            "Minimum-necessary information and unknown-origin data controls protect privacy and evidence quality.",
            "Conflicts should be disclosed and managed without assuming dishonesty or discarding all evidence.",
            "AI may support analysis but cannot own high-impact authorization, service, communication, or residual-risk decisions.",
            "Proportionate actions are evidence-based, narrow, reversible, owner-approved, service-aware, and auditable.",
            "All audiences should receive one consistent fact set with different levels of safe detail.",
            "Validation should cover control behavior, service health, evidence, communication, ownership, residual risk, retention, deletion, and monitoring.",
            "Every CyberShield advanced ethics case must remain fully fictional, defensive, privacy-safe, non-operational, professionally defensible, and incapable of affecting real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Completion
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to the A1 Module Test
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            You have reached the final lesson in Module A1. Review your ethics
            case package, confirm every artifact is fictional, and continue to
            the 25-question module test.
          </p>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}