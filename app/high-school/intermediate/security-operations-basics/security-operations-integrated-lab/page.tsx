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
const previousLesson = `${modulePath}/soc-metrics-quality-and-continuous-improvement`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional SOC roles, alert triage, case management, evidence handling, detection engineering, escalation, communication, threat intelligence, metrics, and continuous improvement into one coordinated workflow.",
  "Separate fictional observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, priority, confidence, ownership, authority, and next action.",
  "Build a fictional security-operations case package with a queue review, evidence register, timeline, decision log, communication plan, detection review, intelligence note, metrics, and closure criteria.",
  "Evaluate fictional response choices for proportionality, service impact, privacy, supplier coordination, rollback, validation, residual risk, and leadership communication.",
  "Create a portfolio-safe fictional integrated SOC artifact that demonstrates technical reasoning, operational discipline, business awareness, evidence limits, and improvement."
];
const vocabulary = [
  [
    "Integrated SOC workflow",
    "A fictional end-to-end process connecting monitoring, triage, case ownership, evidence, investigation, escalation, response, communication, validation, closure, and improvement."
  ],
  [
    "Queue review",
    "A fictional structured assessment of alerts and open cases based on source health, priority, age, ownership, active risk, and decision deadlines."
  ],
  [
    "Operational picture",
    "A fictional current summary of alerts, cases, sources, services, identities, suppliers, actions, decisions, risks, and constraints."
  ],
  [
    "Case hypothesis",
    "A fictional possible explanation that guides evidence collection but remains separate from confirmed findings."
  ],
  [
    "Evidence gap",
    "A fictional missing, delayed, stale, incomplete, conflicting, or unavailable source that limits confidence or closure."
  ],
  [
    "Triage disposition",
    "A fictional decision to close, link, monitor, enrich, escalate, open a case, correct a source, or coordinate response."
  ],
  [
    "Response option",
    "A fictional authorized action such as access removal, rollback, source failover, monitoring, supplier request, control correction, or recovery."
  ],
  [
    "Decision authority",
    "The fictional approved role that may authorize a service change, containment, risk acceptance, supplier action, leadership update, or closure."
  ],
  [
    "Compensating evidence",
    "Fictional alternate evidence used temporarily when a preferred source is delayed, unavailable, or incomplete."
  ],
  [
    "Detection feedback",
    "A fictional documented observation about alert quality, source assumptions, tuning needs, thresholds, context, grouping, or missed-test risk."
  ],
  [
    "Intelligence enrichment",
    "Fictional external or internal threat information added to a case to improve context without changing incident status unless local evidence supports it."
  ],
  [
    "Operational metric",
    "A fictional defined measure used to evaluate timeliness, quality, source health, outcomes, risk, workload, or improvement."
  ],
  [
    "Closure package",
    "A fictional record proving security outcome, business validation, source health, owner signoff, residual risk, communication completion, follow-up, and lessons learned."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after controls, response, monitoring, or corrective actions are applied."
  ],
  [
    "Reassessment trigger",
    "A fictional condition that requires a closed or monitored decision to be reviewed again."
  ],
  [
    "Portfolio-safe artifact",
    "A fictional and privacy-safe learning product that demonstrates reasoning without exposing real credentials, systems, people, suppliers, alerts, incidents, or confidential records."
  ]
];
const scenarioOverview = [
  {
    "area": "Supplier identity",
    "facts": "A fictional supplier account remains active after its exception and support project ended.",
    "owner": "Third-Party Risk Owner and Identity Owner",
    "risk": "Current unsupported capability to reach a confidential support service.",
    "limit": "No misuse, disclosure, or malicious intent is confirmed."
  },
  {
    "area": "Maintenance alert",
    "facts": "A fictional high-severity alert occurred during an approved maintenance window using an authorized identity.",
    "owner": "Tier 2 Analyst and Service Owner",
    "risk": "Current activity still requires validation because one supporting source is delayed.",
    "limit": "Approved context lowers incident confidence but does not prove the event benign."
  },
  {
    "area": "Telemetry gap",
    "facts": "A fictional critical reporting audit source has not delivered events for forty minutes.",
    "owner": "Telemetry Owner",
    "risk": "Current monitoring blind spot on a critical service.",
    "limit": "The gap does not prove malicious activity occurred."
  },
  {
    "area": "Storage policy",
    "facts": "A fictional confidential storage policy changed outside the approved change window.",
    "owner": "Cloud Control Owner and Service Owner",
    "risk": "Possible active access-control exposure.",
    "limit": "No unauthorized data access is confirmed."
  },
  {
    "area": "Supplier service",
    "facts": "A fictional communications provider is delaying important user notifications.",
    "owner": "Communications Service Owner and Supplier Owner",
    "risk": "Time-sensitive business communication may be missed.",
    "limit": "Operational degradation is supported; malicious cause is not."
  },
  {
    "area": "Detection quality",
    "facts": "A fictional maintenance detection generates repeated alerts on exact approved activity.",
    "owner": "Detection Engineer",
    "risk": "Analyst noise may hide higher-priority work.",
    "limit": "Broad suppression could create false negatives."
  },
  {
    "area": "Case quality",
    "facts": "A fictional case is marked Ready for Review while a required source and tuning action remain open.",
    "owner": "Case Owner and SOC Quality Lead",
    "risk": "Premature closure may hide unresolved evidence and follow-up.",
    "limit": "The missing source may not materially change the final decision."
  },
  {
    "area": "Threat intelligence",
    "facts": "A fictional sector bulletin warns about supplier credential abuse against remote-support services.",
    "owner": "Threat Intelligence Analyst and Third-Party Risk Owner",
    "risk": "The bulletin is locally relevant to the expired supplier account.",
    "limit": "No local campaign match or compromise is confirmed."
  }
];
const priorityQueue = [
  {
    "rank": "1",
    "record": "Expired supplier account",
    "priority": "High",
    "rationale": "Active unsupported capability, confidential service scope, expired approval, incomplete activity review, and available owner action.",
    "first_action": "Remove or narrowly renew access under approved authority and complete activity review.",
    "escalation": "Identity, service, supplier-governance, and business-risk owners.",
    "limit": "Misuse and disclosure are unconfirmed."
  },
  {
    "rank": "2",
    "record": "Critical audit-source gap",
    "priority": "High",
    "rationale": "Current blind spot on a critical service may reduce investigation and assurance capability.",
    "first_action": "Restore or fail over the source, preserve the gap window, and validate compensating evidence.",
    "escalation": "Telemetry owner, service owner, SOC manager, and leadership if the deadline is missed.",
    "limit": "No malicious activity during the gap is confirmed."
  },
  {
    "rank": "3",
    "record": "Unapproved storage-policy change",
    "priority": "High",
    "rationale": "Unsupported control change affects confidential data and may create active exposure.",
    "first_action": "Validate effective permissions and coordinate authorized rollback if unsupported.",
    "escalation": "Service owner, cloud control owner, risk owner, and responder if active high-risk exposure is confirmed.",
    "limit": "Unauthorized data access is unconfirmed."
  },
  {
    "rank": "4",
    "record": "Maintenance access alert",
    "priority": "Medium-High",
    "rationale": "Important service and delayed supporting evidence require review, but approved context and prior similar events reduce immediate incident confidence.",
    "first_action": "Validate the current actions, recover the delayed source, and open a narrow detection-tuning review.",
    "escalation": "Tier 2, service owner, telemetry owner, and detection engineer.",
    "limit": "Approved maintenance does not prove the activity was fully in scope."
  },
  {
    "rank": "5",
    "record": "Supplier notification delay",
    "priority": "Medium-High",
    "rationale": "A major business communication window creates time sensitivity even without a security incident.",
    "first_action": "Activate the alternate channel and require supplier recovery updates.",
    "escalation": "Communications owner, supplier owner, and leadership if user commitments are at risk.",
    "limit": "Malicious cause is unsupported."
  },
  {
    "rank": "6",
    "record": "Case ready before evidence completion",
    "priority": "Medium",
    "rationale": "The quality issue can cause premature closure and should be corrected before final review.",
    "first_action": "Return the case to Investigating or document why the missing evidence is non-material.",
    "escalation": "Case owner, peer reviewer, SOC quality lead, and SOC manager.",
    "limit": "The underlying alert may still be benign."
  },
  {
    "rank": "7",
    "record": "Maintenance detection noise",
    "priority": "Medium",
    "rationale": "Repeated noise consumes analyst time and may reduce queue quality, but a safe tuning path is available.",
    "first_action": "Design narrow context and complete positive, negative, boundary, missing-data, replay, and rollback tests.",
    "escalation": "Detection engineer, service owner, and SOC reviewer.",
    "limit": "Lower alert volume alone will not prove improvement."
  },
  {
    "rank": "8",
    "record": "Sector bulletin enrichment",
    "priority": "Low-Medium",
    "rationale": "The intelligence is relevant and useful for context but does not independently prove local compromise.",
    "first_action": "Enrich the supplier-access case and define a review date.",
    "escalation": "Threat intelligence analyst and third-party risk owner.",
    "limit": "External relevance and local incident evidence are different."
  }
];
const evidenceRegister = [
  {
    "id": "NBR-EV-01",
    "source": "Identity lifecycle register",
    "supports": "Supplier account remains active after exception and project expiration.",
    "health": "Healthy and current",
    "owner": "Identity Owner",
    "confidence": "High",
    "limitation": "Current business need may be incompletely documented."
  },
  {
    "id": "NBR-EV-02",
    "source": "Supplier exception record",
    "supports": "Approved access period ended.",
    "health": "Healthy",
    "owner": "Third-Party Risk Owner",
    "confidence": "High",
    "limitation": "Does not show whether narrow renewal was informally requested."
  },
  {
    "id": "NBR-EV-03",
    "source": "Maintenance change record",
    "supports": "Maintenance window, identity, service, and task were approved.",
    "health": "Healthy",
    "owner": "Service Owner",
    "confidence": "High",
    "limitation": "Does not alone prove every observed action stayed in scope."
  },
  {
    "id": "NBR-EV-04",
    "source": "Primary detection source",
    "supports": "Maintenance access alert and event timing.",
    "health": "Healthy",
    "owner": "Detection Engineer",
    "confidence": "High",
    "limitation": "One complementary storage source is delayed."
  },
  {
    "id": "NBR-EV-05",
    "source": "Supporting storage source",
    "supports": "Detailed service activity during the maintenance window.",
    "health": "Delayed",
    "owner": "Telemetry Owner",
    "confidence": "Low-Medium",
    "limitation": "Current delay reduces completeness and closure confidence."
  },
  {
    "id": "NBR-EV-06",
    "source": "Critical source-health monitor",
    "supports": "Reporting audit source has not delivered for forty minutes.",
    "health": "Healthy",
    "owner": "Telemetry Owner",
    "confidence": "High",
    "limitation": "Does not show whether harmful activity occurred during the gap."
  },
  {
    "id": "NBR-EV-07",
    "source": "Storage configuration history",
    "supports": "Confidential storage policy changed outside the approved window.",
    "health": "Healthy",
    "owner": "Cloud Control Owner",
    "confidence": "High",
    "limitation": "Effective-permission validation is still running."
  },
  {
    "id": "NBR-EV-08",
    "source": "Supplier delivery status",
    "supports": "Notification delay aligns with supplier service degradation.",
    "health": "Current but preliminary",
    "owner": "Supplier Owner",
    "confidence": "Medium-High",
    "limitation": "Root cause is not final."
  },
  {
    "id": "NBR-EV-09",
    "source": "Detection test record",
    "supports": "Current maintenance rule alerts on exact approved activity.",
    "health": "Healthy",
    "owner": "Detection Engineer",
    "confidence": "High",
    "limitation": "False-negative risk after tuning is not yet tested."
  },
  {
    "id": "NBR-EV-10",
    "source": "Case quality checklist",
    "supports": "One case lacks complete evidence and tuning closure.",
    "health": "Healthy",
    "owner": "SOC Quality Lead",
    "confidence": "High",
    "limitation": "The missing source may ultimately be non-material."
  },
  {
    "id": "NBR-EV-11",
    "source": "Fictional sector intelligence bulletin",
    "supports": "Supplier identity abuse is a relevant defensive hypothesis.",
    "health": "Current",
    "owner": "Threat Intelligence Analyst",
    "confidence": "Medium-High",
    "limitation": "No local campaign match is confirmed."
  },
  {
    "id": "NBR-EV-12",
    "source": "Internal communications metrics",
    "supports": "Alternate notification channel is available and tested.",
    "health": "Healthy",
    "owner": "Communications Service Owner",
    "confidence": "High",
    "limitation": "Alternate capacity during peak demand still requires monitoring."
  }
];
const integratedWorkflow = [
  {
    "step": "1",
    "title": "Establish shift readiness",
    "detail": "Confirm fictional staffing, cases, source health, critical services, suppliers, planned changes, open decisions, escalation contacts, and communication commitments.",
    "output": "Operational picture."
  },
  {
    "step": "2",
    "title": "Review and prioritize the queue",
    "detail": "Compare fictional active exposure, source blindness, criticality, control changes, time sensitivity, evidence confidence, owner readiness, and queue age.",
    "output": "Prioritized queue."
  },
  {
    "step": "3",
    "title": "Open or update cases",
    "detail": "Define fictional scope, owners, priority, evidence, timelines, hypotheses, alternatives, actions, decisions, communications, and deadlines.",
    "output": "Case records."
  },
  {
    "step": "4",
    "title": "Coordinate evidence and owners",
    "detail": "Request fictional service, identity, telemetry, supplier, risk, control, intelligence, and business context through approved channels.",
    "output": "Evidence and ownership map."
  },
  {
    "step": "5",
    "title": "Choose proportionate actions",
    "detail": "Select fictional access correction, source restoration, rollback, monitoring, alternate communication, tuning, enrichment, or further collection with authority and rollback.",
    "output": "Authorized action plan."
  },
  {
    "step": "6",
    "title": "Communicate and hand off",
    "detail": "Write fictional technical, service-owner, supplier, risk, leadership, and incoming-shift updates with facts, uncertainty, decisions, deadlines, and acknowledgement.",
    "output": "Communication and handoff package."
  },
  {
    "step": "7",
    "title": "Validate results",
    "detail": "Confirm fictional security outcome, service function, source recovery, effective permissions, access state, supplier recovery, detection coverage, residual risk, and owner signoff.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Close and improve",
    "detail": "Complete fictional peer review, closure criteria, retention, metrics, tuning, training, supplier, source, control, runbook, and governance improvements.",
    "output": "Closure and improvement package."
  }
];
const decisionRecords = [
  {
    "id": "NBR-DEC-01",
    "decision": "Disable the expired supplier account now.",
    "owner": "Identity Owner with Service and Third-Party Risk approval",
    "evidence": "Active account, expired exception, ended project, confidential service scope, and no current documented approval.",
    "benefit": "Removes unsupported capability quickly.",
    "risk": "Could interrupt a legitimate but undocumented support need.",
    "rollback": "Issue a new narrowly scoped, time-limited approval if validated.",
    "validation": "Confirm access removal, service function, activity review, owner signoff, and residual risk."
  },
  {
    "id": "NBR-DEC-02",
    "decision": "Activate compensating evidence for the critical source gap.",
    "owner": "Telemetry Owner and Service Owner",
    "evidence": "Confirmed forty-minute gap, healthy source monitor, critical service, and available alternate evidence.",
    "benefit": "Restores partial monitoring while the preferred source recovers.",
    "risk": "Compensating evidence may have narrower coverage.",
    "rollback": "Return to the primary source after restoration and validation.",
    "validation": "Confirm current delivery, parsing, completeness, coverage, gap reconstruction, and alert function."
  },
  {
    "id": "NBR-DEC-03",
    "decision": "Prepare rollback for the storage-policy change.",
    "owner": "Cloud Control Owner and Service Owner",
    "evidence": "Unsupported change outside the approved window and confidential data scope.",
    "benefit": "Reduces possible active exposure.",
    "risk": "Rollback may affect a legitimate service requirement.",
    "rollback": "Restore the approved baseline with change authority.",
    "validation": "Confirm effective permissions, service function, monitoring, and no unintended access."
  },
  {
    "id": "NBR-DEC-04",
    "decision": "Do not declare the maintenance alert an incident yet.",
    "owner": "Case Owner and SOC Manager",
    "evidence": "Approved change, authorized identity, healthy primary source, similar prior events, delayed complementary source, and no supported impact.",
    "benefit": "Preserves proportionality while investigation continues.",
    "risk": "A real out-of-scope action could remain undetected until the delayed source recovers.",
    "rollback": "Escalate to incident response if scope, impact, or confidence changes.",
    "validation": "Review detailed actions, service behavior, source recovery, and case findings."
  },
  {
    "id": "NBR-DEC-05",
    "decision": "Activate the alternate user-notification channel.",
    "owner": "Communications Service Owner",
    "evidence": "Confirmed supplier delay, major notification window, healthy alternate channel, and approaching deadline.",
    "benefit": "Protects the business communication objective.",
    "risk": "Alternate capacity or message consistency may be limited.",
    "rollback": "Return to the primary supplier after recovery and validation.",
    "validation": "Confirm user delivery, message consistency, supplier recovery, and business-owner signoff."
  },
  {
    "id": "NBR-DEC-06",
    "decision": "Tune maintenance detection with narrow approved context.",
    "owner": "Detection Engineer with Service and SOC review",
    "evidence": "Repeated alerts on exact approved behavior and healthy change and activity sources.",
    "benefit": "Reduces unnecessary noise while preserving out-of-scope detection.",
    "risk": "Incomplete change data could create false negatives.",
    "rollback": "Restore the prior detection version.",
    "validation": "Complete positive, negative, boundary, missing-data, replay, business, and rollback tests."
  },
  {
    "id": "NBR-DEC-07",
    "decision": "Return the incomplete case to Investigating.",
    "owner": "SOC Quality Lead",
    "evidence": "Required source and tuning action remain open.",
    "benefit": "Prevents premature closure and preserves traceability.",
    "risk": "Case age increases and may affect service targets.",
    "rollback": "Move to Ready for Review after evidence is recovered or documented as non-material.",
    "validation": "Peer review closure criteria, source limitations, tuning ownership, and owner signoff."
  },
  {
    "id": "NBR-DEC-08",
    "decision": "Use the sector bulletin only as case enrichment.",
    "owner": "Threat Intelligence Analyst and Case Owner",
    "evidence": "Relevant supplier-abuse concept but no local campaign match.",
    "benefit": "Improves context without overstating local evidence.",
    "risk": "Analysts may overweigh external reporting.",
    "rollback": "Remove or expire the enrichment if the source becomes stale or irrelevant.",
    "validation": "Record confidence, local findings, review date, and whether the intelligence changed any action."
  }
];
const metrics = [
  {
    "metric": "High-priority records with owned next action",
    "value": "3 of 3",
    "meaning": "All fictional High-priority records have named owners, decisions, deadlines, and validation paths.",
    "limit": "Ownership does not prove the actions are complete."
  },
  {
    "metric": "Critical source-health coverage",
    "value": "99.4%",
    "meaning": "One fictional critical source gap reduces current assurance.",
    "limit": "Availability alone does not measure parsing, completeness, or coverage."
  },
  {
    "metric": "Cases with complete evidence registers",
    "value": "7 of 8",
    "meaning": "One fictional case remains incomplete and should not close.",
    "limit": "Completeness does not automatically prove evidence relevance."
  },
  {
    "metric": "Detection changes with full test plans",
    "value": "1 of 1 planned",
    "meaning": "The fictional maintenance tuning has a complete required test design.",
    "limit": "The tests are planned but not all executed."
  },
  {
    "metric": "Shift handoffs acknowledged",
    "value": "100%",
    "meaning": "The fictional incoming owner accepted the open cases and commitments.",
    "limit": "Acknowledgement quality still depends on the handoff contents."
  },
  {
    "metric": "Leadership updates with decision fields",
    "value": "2 of 2",
    "meaning": "The fictional updates include facts, uncertainty, owners, decisions, deadlines, and next update.",
    "limit": "Message quality should still be sampled."
  },
  {
    "metric": "Improvement actions validated",
    "value": "1 of 5",
    "meaning": "Most fictional improvements remain open until outcomes are proven.",
    "limit": "Task completion is not the same as validation."
  },
  {
    "metric": "Confirmed incidents",
    "value": "0",
    "meaning": "The fictional evidence supports active risk and control action but no confirmed incident.",
    "limit": "The value may change if later evidence supports incident criteria."
  }
];
const findings = [
  {
    "id": "NBR-LAB-F01",
    "statement": "The fictional expired supplier account is the highest immediate access risk because unsupported active capability is confirmed.",
    "support": "Active identity, expired exception, ended project, confidential service scope, incomplete activity review, and available owner action.",
    "alternative": "A current undocumented support need may justify a new narrow approval.",
    "confidence": "High",
    "limitation": "Misuse and disclosure are unconfirmed."
  },
  {
    "id": "NBR-LAB-F02",
    "statement": "The fictional critical source gap requires rapid restoration and compensating evidence but not an incident declaration.",
    "support": "Critical service, confirmed current gap, healthy source monitor, available alternate evidence, and no malicious-event evidence.",
    "alternative": "Recovered events may later reveal activity that changes incident status.",
    "confidence": "High",
    "limitation": "The blind-spot period is not fully reconstructed."
  },
  {
    "id": "NBR-LAB-F03",
    "statement": "The fictional storage-policy change should be prepared for rollback while effective permissions are validated.",
    "support": "Unsupported change, confidential data, healthy configuration history, possible active exposure, and available control owner.",
    "alternative": "The change may be legitimate but poorly documented.",
    "confidence": "Medium-High",
    "limitation": "Unauthorized access is unconfirmed."
  },
  {
    "id": "NBR-LAB-F04",
    "statement": "The fictional maintenance alert should remain an open Medium-High case rather than a confirmed incident or immediate closure.",
    "support": "Approved context, authorized identity, healthy primary source, prior similar events, delayed supporting source, and no supported impact.",
    "alternative": "The current event may differ from prior maintenance and require escalation.",
    "confidence": "High",
    "limitation": "One source remains delayed."
  },
  {
    "id": "NBR-LAB-F05",
    "statement": "The fictional supplier delay requires alternate business communication but not a security-cause claim.",
    "support": "Confirmed delay, major communication window, supplier status, internal metrics, alternate channel, and no malicious indicators.",
    "alternative": "Later root-cause evidence may reveal a security issue.",
    "confidence": "Medium-High",
    "limitation": "Supplier root cause is preliminary."
  },
  {
    "id": "NBR-LAB-F06",
    "statement": "The fictional maintenance detection should be tuned narrowly rather than broadly suppressed.",
    "support": "Repeated exact-scope alerts, healthy context sources, out-of-scope risk, complete test design, staging, versioning, and rollback.",
    "alternative": "A simpler threshold change may reduce enough noise.",
    "confidence": "High",
    "limitation": "Detection quality depends on complete change data."
  },
  {
    "id": "NBR-LAB-F07",
    "statement": "The fictional incomplete case should return to Investigating until evidence and follow-up are complete or formally documented as non-material.",
    "support": "Open source issue, open tuning action, closure checklist, case status, and peer-review requirement.",
    "alternative": "The missing source may not affect the final decision.",
    "confidence": "High",
    "limitation": "Closure depth should remain proportional to risk."
  },
  {
    "id": "NBR-LAB-F08",
    "statement": "The fictional sector bulletin should improve supplier-case context without changing local incident status.",
    "support": "Relevant threat behavior, active supplier-access concern, medium-high source confidence, and no local campaign match.",
    "alternative": "Later local evidence may support stronger conclusions.",
    "confidence": "Medium-High",
    "limitation": "External reporting does not prove local compromise."
  }
];
const commonMistakes = [
  "Treating fictional alert severity as the final priority or incident status.",
  "Choosing the most dramatic alert instead of the most urgent supported risk.",
  "Closing a case because the likely explanation appears benign while required evidence remains incomplete.",
  "Treating missing evidence as proof that an incident did or did not occur.",
  "Applying broad suppression to reduce alert volume without false-negative testing.",
  "Taking technically possible containment action without service, risk, or emergency authority.",
  "Reporting possible data exposure, supplier fault, or malicious cause as confirmed.",
  "Using threat intelligence as proof of local compromise without local validation.",
  "Failing to distinguish source restoration, service recovery, control correction, and case closure.",
  "Sending the same message to analysts, suppliers, service owners, and leadership.",
  "Handing off open cases without decisions, deadlines, evidence gaps, commitments, and acknowledgement.",
  "Counting improvement tasks as complete before outcomes are validated.",
  "Using metrics that reward speed or volume while hiding quality, source health, and residual risk.",
  "Using or exposing any real credentials, employee data, school records, private company alerts, logs, cases, supplier records, incident details, detection logic, intelligence, metrics, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "Which fictional record should receive the highest immediate priority?",
    "choices": [
      "The expired supplier account with active unsupported access to a confidential service.",
      "The broad sector bulletin by itself.",
      "The historical duplicate alert.",
      "The explained user lockout."
    ],
    "answer": 0,
    "explanation": "Active unsupported capability with a clear owner action creates the strongest immediate risk."
  },
  {
    "question": "What should Northbridge do about the fictional critical audit-source gap?",
    "choices": [
      "Restore or fail over the source, preserve the gap, use compensating evidence, and avoid claiming malicious activity without evidence.",
      "Declare an incident immediately.",
      "Ignore the gap because the service still works.",
      "Close all related cases."
    ],
    "answer": 0,
    "explanation": "The gap creates serious monitoring risk but does not prove malicious activity."
  },
  {
    "question": "Why should the fictional maintenance case remain open?",
    "choices": [
      "One supporting source and one detection follow-up remain incomplete even though approved context is strong.",
      "Every maintenance alert is an incident.",
      "The alert severity is High.",
      "The case must remain open forever."
    ],
    "answer": 0,
    "explanation": "Likely benign context does not remove defined evidence and closure requirements."
  },
  {
    "question": "What is the safest fictional tuning decision?",
    "choices": [
      "Add narrow approved identity, service, action, and time context with full testing, staging, monitoring, versioning, and rollback.",
      "Suppress all maintenance alerts.",
      "Delete the detection.",
      "Lower every alert to Low."
    ],
    "answer": 0,
    "explanation": "Narrow, tested context reduces noise without creating a broad blind spot."
  },
  {
    "question": "How should the fictional sector bulletin affect incident status?",
    "choices": [
      "It may enrich the supplier-access case, but incident status should not change without local evidence.",
      "It proves a local compromise.",
      "It should be ignored completely.",
      "It should trigger broad blocking automatically."
    ],
    "answer": 0,
    "explanation": "Threat intelligence improves context but does not replace local validation."
  },
  {
    "question": "When is a fictional improvement action complete?",
    "choices": [
      "After the intended security and business outcome is validated and residual risk and follow-up are documented.",
      "When the task ticket is marked done.",
      "When alert volume drops.",
      "When leadership sees a green dashboard."
    ],
    "answer": 0,
    "explanation": "Task completion and outcome validation are different."
  },
  {
    "question": "What makes the fictional integrated SOC lab defensible?",
    "choices": [
      "Evidence, context, priority, ownership, authority, actions, communications, validation, limits, closure, and improvement are connected in one reviewable chain.",
      "Every alert is escalated.",
      "All uncertainty is removed.",
      "Only technical evidence is considered."
    ],
    "answer": 0,
    "explanation": "Integrated security operations connects the full evidence-to-decision lifecycle."
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
        href={nextPage}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function SecurityOperationsIntegratedLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.8 Security Operations Integrated Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Apply the full fictional SOC workflow by reviewing a mixed alert
            queue, prioritizing risk, opening cases, handling evidence,
            coordinating owners, evaluating detections, using threat
            intelligence, communicating decisions, validating outcomes, and
            creating measurable improvements.
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
          lessonTitle="Security Operations Integrated Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge alerts, cases, sources, identities, services, suppliers, detections, intelligence, metrics, actions, and decisions.",
            "I will not request, expose, or evaluate real credentials, employee data, school records, private company alerts, logs, cases, supplier records, incident details, detection logic, intelligence, metrics, or confidential SOC information.",
            "I will distinguish alert severity, triage priority, incident severity, business criticality, evidence confidence, active exposure, and decision urgency.",
            "I will preserve direct facts, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, limitations, ownership, authority, and deadlines.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Integrated Scenario"
          title="One Shift, Eight Records, Multiple Owners, and No Confirmed Incident"
        >
          <p className="leading-8">
            The fictional Northbridge evening shift inherits eight
            different security-operations records. The strongest SOC response
            prioritizes active risk, preserves uncertainty, assigns authority,
            coordinates owners, validates outcomes, and converts lessons into
            measurable improvement.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak integrated response
              </p>

              <p className="mt-2 leading-7">
                Rank by severity alone, declare incidents early, copy every
                stakeholder, suppress noisy alerts broadly, close incomplete
                cases, and report green metrics without quality context.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional integrated response
              </p>

              <p className="mt-2 leading-7">
                Validate sources, prioritize active risk, build evidence-backed
                cases, route decisions, communicate proportionately, test
                changes, validate outcomes, and improve the operating system.
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
          title="Security Operations Is a Decision System, Not Just an Alert Queue"
        >
          <p className="leading-8">
            Fictional alerts become useful when defenders connect them to
            healthy evidence, services, owners, authority, action,
            communication, validation, and improvement. This lab keeps the
            entire workflow proportionate, safe and reviewable.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Model"
          title="Use the Observeā€“Prioritizeā€“Ownā€“Actā€“Validateā€“Improve Cycle"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Observe", "Which fictional alerts, source-health records, assets, identities, services, suppliers, configurations, intelligence, and timelines are directly supported?"],
              ["Prioritize", "Which fictional active exposure, blind spot, control change, service deadline, evidence gap, or quality risk requires the fastest decision?"],
              ["Own", "Which fictional analyst, service owner, control owner, supplier owner, risk owner, responder, communicator, or leader is accountable?"],
              ["Act", "Which fictional access change, source restoration, rollback, monitoring, tuning, enrichment, supplier request, or communication is authorized and proportionate?"],
              ["Validate", "Which fictional evidence proves security outcome, business function, source health, permissions, recovery, communication completion, and residual risk?"],
              ["Improve", "Which fictional detection, source, case, handoff, training, supplier, metric, runbook, control, or governance change should follow?"],
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
            Integrated Security Operations Terms
          </h2>

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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Scenario Overview
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Northbridge Operating Conditions
          </h2>

          <div className="mt-6 grid gap-5">
            {scenarioOverview.map((item) => (
              <article key={item.area} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-cyan-100">{item.area}</h3>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Supported facts</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.facts}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Operational risk</p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Evidence limit</p>
                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Priority Queue
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Rank the Eight Fictional Records
          </h2>

          <div className="mt-6 grid gap-5">
            {priorityQueue.map((item) => (
              <article key={item.rank} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.5fr_1fr_1fr]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.rank}</span>
                <div>
                  <h3 className="font-black text-white">{item.record}</h3>
                  <p className="mt-2 text-sm font-bold text-emerald-200">{item.priority}</p>
                </div>
                <div className="text-sm leading-6 text-slate-300">
                  <p><span className="font-black text-cyan-200">Rationale: </span>{item.rationale}</p>
                  <p className="mt-2"><span className="font-black text-cyan-200">First action: </span>{item.first_action}</p>
                </div>
                <div className="text-sm leading-6">
                  <p className="text-blue-100"><span className="font-black text-blue-200">Escalation: </span>{item.escalation}</p>
                  <p className="mt-2 text-yellow-100"><span className="font-black text-yellow-200">Limit: </span>{item.limit}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Twelve Fictional Evidence Items
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceRegister.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <h3 className="text-lg font-black text-white">{item.source}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.health}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Supports", item.supports],
                    ["Owner", item.owner],
                    ["Limitation", item.limitation],
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Integrated Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Shift Readiness to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {integratedWorkflow.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decision Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Operational Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <h3 className="text-lg font-black text-white">{item.decision}</h3>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">{item.owner}</span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Expected benefit", item.benefit],
                    ["Operational risk", item.risk],
                    ["Rollback", item.rollback],
                    ["Validation", item.validation],
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Metrics and Assurance
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Shift Measures
          </h2>

          <div className="mt-6 grid gap-5">
            {metrics.map((item) => (
              <article key={item.metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-cyan-100">{item.metric}</h3>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.value}</span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Meaning</p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Integrated SOC Dashboard"
          subtitle="Training dashboard for fictional security-operations evidence only."
          metrics={[
            {
              label: "High-priority records",
              value: "3",
              note: "Supplier access, source blindness, and unsupported storage-policy change require the fastest owned decisions.",
            },
            {
              label: "Open evidence gaps",
              value: "2",
              note: "One delayed maintenance-support source and one critical reporting-source gap limit confidence and assurance.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The fictional evidence supports active risks, control actions, and quality improvements but no confirmed incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Account and Critical Source Gap Require Immediate Coordination"
          severity="High"
          time="11:42 PM"
          source="Fake Northbridge Integrated SOC Console"
          details="A fictional supplier account remains active after approval expiration while a critical reporting audit source is unavailable. The supplier account can reach a confidential support service, and one active case also contains delayed supporting evidence."
          recommendation="Prioritize the supplier access and source gap separately, assign the correct owners, preserve evidence limits, remove or narrowly renew access, restore or fail over telemetry, update affected cases, communicate decision deadlines, validate results, and avoid declaring an incident without supported criteria."
        />

        <FakeLogPanel
          title="Fake Northbridge Integrated Shift Timeline"
          logs={[
            "18:00 SHIFT readiness='complete'",
            "18:05 QUEUE records='8'",
            "18:10 PRIORITY supplier-account='High'",
            "18:12 PRIORITY source-gap='High'",
            "18:14 PRIORITY storage-policy='High'",
            "18:20 CASE supplier-access='opened'",
            "18:24 CASE source-gap='opened'",
            "18:28 CASE storage-policy='opened'",
            "18:34 ACTION supplier-disable='approval requested'",
            "18:40 ACTION source-failover='approved'",
            "18:48 ACTION storage-rollback='prepared'",
            "18:55 COMMUNICATION leadership='facts and limits'",
            "19:05 INTEL supplier-bulletin='case enrichment only'",
            "19:15 DETECTION maintenance-tuning='test plan opened'",
            "19:25 QUALITY incomplete-case='returned to investigating'",
            "19:35 VALIDATE alternate-channel='ready'",
            "19:45 HANDOFF incoming-owner='acknowledged'",
            "20:00 METRIC improvement-validated='1 of 5'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Integrated Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Evidence support</p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Alternative</p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Limitation</p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Record Should the SOC Address First?"
          evidence={[
            "The fictional supplier account remains active after approval expiration.",
            "The account can reach a confidential support service.",
            "The post-expiration activity review is incomplete.",
            "The maintenance alert has approved context and one delayed source.",
            "The sector bulletin is relevant but does not show a local campaign match.",
            "No supplied evidence confirms misuse or impact.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The expired supplier account should receive the first access decision because active unsupported capability is confirmed, while the other records continue through their own owned workflows.",
            "The sector bulletin should be handled first because it describes a campaign.",
            "The maintenance alert should be first because it is High severity.",
            "No action is required because no incident is confirmed.",
          ]}
          bestAnswer={0}
          explanation="The strongest priority is based on current unsupported capability, business scope, evidence, and available owner action."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Integrated Security Operations"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Integrated Lab"
          title="Build the Northbridge Security Operations Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                One Complete SOC Shift from Queue Review to Improvement
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete SOC deliverable.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Shift-readiness summary with staffing, cases, sources, services, changes, suppliers, decisions, and commitments.</li>
                <li>Prioritized alert and case queue with rationale, owner, deadline, disposition, escalation, and evidence limits.</li>
                <li>Case charter, evidence register, normalized timeline, facts and hypothesis matrix, action log, decision log, and communication record.</li>
                <li>Source-gap restoration and compensating-evidence plan.</li>
                <li>Supplier-access decision, storage-policy response, supplier-communication action, and alternate-channel validation.</li>
                <li>Detection-tuning design with complete tests, staging, monitoring, version control, and rollback.</li>
                <li>Threat-intelligence enrichment, metric critique, quality review, handoff, closure criteria, and improvement backlog.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company alerts, logs, cases, supplier records, incident
            details, detection logic, intelligence, metrics, or confidential
            SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The SOC Manager Wants One Immediate Action for the Entire Queue"
          scenario="The fictional queue contains active stale access, a critical source gap, a control change, a maintenance alert, supplier delay, detection noise, an incomplete case, and relevant threat intelligence."
          choices={[
            {
              label: "Choice A",
              response:
                "Separate the records, prioritize the active supplier access and source gap, assign distinct owners and deadlines, and coordinate the remaining records through separate evidence-based workflows.",
              outcome:
                "Best integrated choice. Different risks receive proportionate and accountable action.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare one major incident and treat every record as part of it.",
              outcome:
                "Unsupported. The records have different evidence, owners, and causes.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the entire queue because no incident is confirmed.",
              outcome:
                "Unsafe. Several active risks and control issues require action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Wants the Shift Declared Successful because All Actions Are Assigned"
          scenario="The fictional owners and deadlines are clear, but most response and improvement outcomes have not yet been validated."
          choices={[
            {
              label: "Choice A",
              response:
                "Report that ownership and coordination improved, but final success remains pending until security, service, source, detection, supplier, case-quality, and improvement outcomes are validated.",
              outcome:
                "Best assurance choice. Progress is reported without overstating completion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Report complete success because every task has an owner.",
              outcome:
                "Weak. Ownership does not prove the intended outcome.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Report failure because some work remains open.",
              outcome:
                "Overstated. Meaningful progress is supported even though final validation is incomplete.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Security Operations Integrated Lab Checklist"
          items={[
            "I can build a fictional operational picture covering alerts, cases, sources, services, identities, suppliers, changes, intelligence, metrics, and commitments.",
            "I can prioritize fictional active exposure, source blindness, control change, service deadlines, evidence gaps, and quality risks.",
            "I can separate fictional alert severity, triage priority, incident severity, business criticality, confidence, and urgency.",
            "I can create fictional case scopes, evidence registers, timelines, findings, actions, decisions, communications, validation, and closure criteria.",
            "I can assign fictional case, service, control, supplier, risk, response, communication, and leadership ownership correctly.",
            "I can choose fictional access correction, source restoration, rollback, monitoring, alternate communication, tuning, enrichment, and further collection proportionately.",
            "I can write fictional technical, owner, supplier, leadership, and handoff communications that preserve uncertainty and decision needs.",
            "I can validate fictional security outcome, business function, source health, permissions, supplier recovery, detection coverage, residual risk, and improvement.",
            "I can use fictional metrics without treating activity, speed, lower volume, or assigned tasks as automatic proof of success.",
            "I will use only fictional evidence and never expose real credentials, company records, employee data, school records, suppliers, incidents, detections, intelligence, metrics, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.8 Mini Quiz: Security Operations Integrated Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Security Operations Integrated Lab Package for Northbridge. Include the shift-readiness summary, prioritized queue, case charter, evidence register, normalized timeline, facts and hypothesis matrix, action and decision logs, escalation and communication plan, source-gap restoration, supplier-access decision, control rollback plan, detection-tuning design, intelligence enrichment, metrics critique, quality review, handoff, closure criteria, improvement backlog, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional alerts, cases, systems, identities, suppliers, services, sources, detections, intelligence, metrics, actions, decisions, dates, and outcomes.",
            "Do not treat alert severity, missing evidence, external reporting, assigned tasks, green metrics, or likely explanations as automatic proof.",
            "Make every conclusion traceable to evidence, ownership, authority, confidence, limits, deadlines, and validation.",
            "Show how serious active risk can exist without a confirmed incident.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated security operations connects alerts to evidence, services, owners, authority, actions, communication, validation, and improvement.",
            "The highest-priority record is not always the loudest alert.",
            "Missing evidence changes confidence and workflow but does not prove compromise.",
            "Different records require different owners, actions, escalation paths, and closure criteria.",
            "Detection, intelligence, metrics, and communication should improve decisions without unsupported certainty.",
            "Assigned tasks are progress; validated outcomes are completion.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational security operations.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I15
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