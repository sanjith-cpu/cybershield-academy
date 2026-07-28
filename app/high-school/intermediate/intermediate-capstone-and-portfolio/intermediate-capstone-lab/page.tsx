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
const previousLesson = `${modulePath}/intermediate-final-readiness-review`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional networking, operating-system, logging, identity, email, web, cloud, vulnerability, incident-response, risk, SOC, communication, diagram, reporting, and portfolio skills into one coordinated defensive capstone.",
  "Build a defensible fictional case structure by separating evidence-supported relationships from temporal proximity, assumptions, unknowns, and unrelated activity.",
  "Create fictional evidence registers, normalized timelines, findings, owner maps, risk recommendations, communications, validation records, diagrams, and final reports that remain traceable and privacy-safe.",
  "Make proportionate fictional decisions that preserve service continuity, authorization boundaries, evidence handling, user support, supplier coordination, and residual-risk transparency.",
  "Produce and defend a complete fictional Intermediate Capstone Portfolio Package using only invented systems, identities, evidence, messages, suppliers, dates, actions, and outcomes."
];
const vocabulary = [
  [
    "Capstone",
    "A fictional culminating project that requires the learner to combine several Intermediate defensive skills in one new scenario."
  ],
  [
    "Case package",
    "A fictional collection of evidence, timelines, findings, decisions, communications, validation, diagrams, reports, reflection, and portfolio records for one coordinated review."
  ],
  [
    "Operational case",
    "A fictional evidence-based unit of work with its own systems, identities, sources, owners, actions, impact limits, and closure criteria."
  ],
  [
    "Coordinated response",
    "A fictional structure that allows separate cases to share leadership, communication, scheduling, and resource coordination without claiming one common cause."
  ],
  [
    "Case boundary",
    "A fictional rule defining which records, systems, identities, time periods, owners, and conclusions belong together."
  ],
  [
    "Evidence chain",
    "The fictional connection from source record to observation, conclusion, decision, action, validation, and final report statement."
  ],
  [
    "Decision gate",
    "A fictional point where evidence, authority, service impact, risk, dependency, or validation determines the next step."
  ],
  [
    "Capstone artifact",
    "A fictional portfolio-safe product such as a report, diagram, risk recommendation, communication package, or validation record demonstrating applied skill."
  ],
  [
    "Integrated finding",
    "A fictional conclusion that combines several relevant sources while preserving limits, alternate explanations, confidence, and case boundaries."
  ],
  [
    "Cross-domain transfer",
    "The fictional application of a principle learned in one domain to another, such as using evidence limits in IAM, cloud, phishing, and reporting."
  ],
  [
    "Service continuity",
    "The fictional effort to preserve required business service while implementing proportionate defensive action."
  ],
  [
    "Residual uncertainty",
    "The fictional unanswered question or evidence limitation remaining after action and validation."
  ],
  [
    "Artifact defense",
    "A fictional presentation explaining the capstone purpose, evidence, decisions, limitations, validation, learning, and next improvement."
  ],
  [
    "Peer review",
    "A fictional structured review of evidence quality, reasoning, ownership, safety, communication, validation, and portfolio readiness."
  ],
  [
    "Capstone closure",
    "A fictional transition reached after evidence, actions, validation, communications, owners, residual risk, and improvement work are documented."
  ],
  [
    "Portfolio-safe capstone",
    "A fictional capstone using fully invented organizations, systems, identities, logs, messages, cloud resources, suppliers, incidents, dates, actions, and outcomes."
  ]
];
const scenarioOverview = [
  {
    "area": "Supplier identity",
    "record": "A fictional supplier administrator exception expired, yet the account remained active and signed in once after the approved window.",
    "owner": "Identity Owner and Supplier Owner",
    "risk": "Unsupported high-impact capability may remain available.",
    "limit": "The sign-in does not prove malicious intent or harmful action."
  },
  {
    "area": "Cloud storage",
    "record": "A fictional confidential-storage policy gained a broad-read condition outside the approved change window.",
    "owner": "Cloud Storage Owner and Data Owner",
    "risk": "Identities outside the approved group may have been able to read confidential data.",
    "limit": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed."
  },
  {
    "area": "Telemetry",
    "record": "A fictional administrative audit source stopped delivering events for thirty-eight minutes.",
    "owner": "Telemetry Owner",
    "risk": "Monitoring assurance and impact confidence are reduced.",
    "limit": "A source gap does not prove harmful activity occurred."
  },
  {
    "area": "Email",
    "record": "A fictional payroll-themed message failed sender checks and caused one confirmed link click.",
    "owner": "Mail Security Owner, Identity Owner, and User Support Owner",
    "risk": "Credential theft and account takeover were possible.",
    "limit": "No credential entry or account compromise is confirmed."
  },
  {
    "area": "Web authorization",
    "record": "A fictional support role loaded a manager-only account-settings page.",
    "owner": "Application Owner and Access Control Owner",
    "risk": "A role may possess capability outside its intended boundary.",
    "limit": "The page view does not prove modification or wider disclosure."
  },
  {
    "area": "Linux service",
    "record": "A fictional Linux collector restarted three times after an approved maintenance change.",
    "owner": "Linux Platform Owner and Telemetry Owner",
    "risk": "Collection reliability may be reduced.",
    "limit": "The restarts may be expected maintenance behavior rather than malicious activity."
  },
  {
    "area": "Windows endpoint",
    "record": "A fictional Windows administrative task ran under a service account during the same shift.",
    "owner": "Windows Platform Owner and Service Account Owner",
    "risk": "The task requires validation against the approved baseline.",
    "limit": "An unfamiliar task name does not prove compromise."
  },
  {
    "area": "Service continuity",
    "record": "The fictional support, storage, payroll, web, Linux, and Windows services remained available.",
    "owner": "Service Owners",
    "risk": "Broad shutdown could create unnecessary operational harm.",
    "limit": "Availability does not prove confidentiality, authorization, or integrity."
  }
];
const evidenceRecords = [
  {
    "id": "NBR-CAP-01",
    "source": "Identity approval register",
    "event_time": "17:00",
    "collection_time": "17:01",
    "record": "The fictional supplier administrator exception expired and no approved renewal exists.",
    "health": "Healthy",
    "supports": "Unsupported current administrative capability.",
    "does_not_support": "Malicious intent or use.",
    "owner": "Identity Owner and Supplier Owner"
  },
  {
    "id": "NBR-CAP-02",
    "source": "Authentication record",
    "event_time": "18:42",
    "collection_time": "18:42",
    "record": "The fictional supplier identity signed in successfully after expiration.",
    "health": "Healthy",
    "supports": "Current use of the unsupported identity.",
    "does_not_support": "Which actions followed.",
    "owner": "Identity Owner"
  },
  {
    "id": "NBR-CAP-03",
    "source": "Support application log",
    "event_time": "18:43",
    "collection_time": "18:43",
    "record": "The supplier identity viewed one service-status page and made no recorded configuration change.",
    "health": "Healthy",
    "supports": "Limited observed supplier activity.",
    "does_not_support": "Activity outside the support application.",
    "owner": "Service Owner"
  },
  {
    "id": "NBR-CAP-04",
    "source": "Cloud configuration history",
    "event_time": "20:11",
    "collection_time": "20:11",
    "record": "A fictional confidential-storage policy gained a broad-read condition outside the approved window.",
    "health": "Healthy",
    "supports": "A serious unsupported configuration state.",
    "does_not_support": "Successful data access or disclosure.",
    "owner": "Cloud Storage Owner and Data Owner"
  },
  {
    "id": "NBR-CAP-05",
    "source": "Cloud access evidence",
    "event_time": "20:11–20:45",
    "collection_time": "20:46",
    "record": "No covered unauthorized storage read is observed during the supplied period.",
    "health": "Healthy with limited coverage",
    "supports": "No confirmed unauthorized read in covered evidence.",
    "does_not_support": "A universal no-access conclusion.",
    "owner": "Cloud Security Owner"
  },
  {
    "id": "NBR-CAP-06",
    "source": "Linux service record",
    "event_time": "20:34–20:51",
    "collection_time": "20:52",
    "record": "A fictional Linux evidence collector restarted three times after an approved maintenance package was applied.",
    "health": "Healthy source with intermittent service",
    "supports": "A temporary reliability issue requiring validation.",
    "does_not_support": "Malicious process execution.",
    "owner": "Linux Platform Owner and Telemetry Owner"
  },
  {
    "id": "NBR-CAP-07",
    "source": "Change-management record",
    "event_time": "20:20",
    "collection_time": "Current",
    "record": "A fictional approved maintenance record covers the Linux package update but not the storage-policy change.",
    "health": "Healthy",
    "supports": "The Linux change may be authorized while the cloud change remains unsupported.",
    "does_not_support": "That every resulting Linux behavior is expected.",
    "owner": "Change Owner"
  },
  {
    "id": "NBR-CAP-08",
    "source": "Cloud source-health monitor",
    "event_time": "21:02",
    "collection_time": "21:02",
    "record": "A fictional administrative audit source stopped delivering events.",
    "health": "Healthy monitor reporting unhealthy source",
    "supports": "A monitoring blind spot.",
    "does_not_support": "Harmful activity during the gap.",
    "owner": "Telemetry Owner"
  },
  {
    "id": "NBR-CAP-09",
    "source": "Compensating telemetry",
    "event_time": "21:02–21:40",
    "collection_time": "Current",
    "record": "Fictional configuration history and service-health records remained available during the source gap.",
    "health": "Healthy",
    "supports": "Partial visibility and continuity evidence.",
    "does_not_support": "Complete privileged-activity coverage.",
    "owner": "Cloud Platform Owner and Service Owners"
  },
  {
    "id": "NBR-CAP-10",
    "source": "Mail security record",
    "event_time": "21:14",
    "collection_time": "21:15",
    "record": "A fictional payroll-themed message failed sender checks and used an unrelated sign-in destination description.",
    "health": "Healthy",
    "supports": "High-confidence malicious-message disposition.",
    "does_not_support": "Impact for every recipient.",
    "owner": "Mail Security Owner"
  },
  {
    "id": "NBR-CAP-11",
    "source": "User interaction record",
    "event_time": "21:18",
    "collection_time": "21:21",
    "record": "One fictional user clicked the link and reported entering no information.",
    "health": "Healthy",
    "supports": "One interaction requiring targeted review.",
    "does_not_support": "Credential disclosure or account takeover.",
    "owner": "Identity Owner and User Support Owner"
  },
  {
    "id": "NBR-CAP-12",
    "source": "Web authorization record",
    "event_time": "21:26",
    "collection_time": "21:26",
    "record": "A fictional support role loaded a manager-only account-settings page.",
    "health": "Healthy",
    "supports": "An authorization gap and unauthorized page view.",
    "does_not_support": "Modification or wider disclosure.",
    "owner": "Application Owner and Access Control Owner"
  },
  {
    "id": "NBR-CAP-13",
    "source": "Windows task record",
    "event_time": "21:31",
    "collection_time": "21:31",
    "record": "A fictional Windows maintenance task ran under service account svc-patch-lab.",
    "health": "Healthy",
    "supports": "A service-account action requiring baseline comparison.",
    "does_not_support": "Compromise or persistence.",
    "owner": "Windows Platform Owner and Service Account Owner"
  },
  {
    "id": "NBR-CAP-14",
    "source": "Windows baseline record",
    "event_time": "Current baseline",
    "collection_time": "Current",
    "record": "The fictional task name, service account, and approved patch window match the expected Windows maintenance baseline.",
    "health": "Healthy",
    "supports": "The Windows task is likely authorized maintenance.",
    "does_not_support": "That all Windows activity during the shift is safe.",
    "owner": "Windows Platform Owner"
  },
  {
    "id": "NBR-CAP-15",
    "source": "Service-health dashboard",
    "event_time": "21:35",
    "collection_time": "21:36",
    "record": "All fictional business services remained available and passed basic health checks.",
    "health": "Healthy",
    "supports": "Targeted action instead of broad shutdown.",
    "does_not_support": "Confidentiality, authorization, or source completeness.",
    "owner": "Service Owners"
  },
  {
    "id": "NBR-CAP-16",
    "source": "Supplier-owner confirmation",
    "event_time": "21:40",
    "collection_time": "21:41",
    "record": "The fictional supplier project ended and no current administrative business need exists.",
    "health": "Healthy",
    "supports": "The supplier access should not remain active.",
    "does_not_support": "Malicious intent.",
    "owner": "Supplier Owner"
  },
  {
    "id": "NBR-CAP-17",
    "source": "Corrective-action register",
    "event_time": "21:45–22:20",
    "collection_time": "Current",
    "record": "Fictional supplier access, storage policy, web route, Linux collector state, and cloud source recovery actions were completed.",
    "health": "Healthy",
    "supports": "Action completion.",
    "does_not_support": "Validated outcome.",
    "owner": "Identity, Cloud, Application, Linux, and Telemetry Owners"
  },
  {
    "id": "NBR-CAP-18",
    "source": "Validation register",
    "event_time": "22:25–22:55",
    "collection_time": "Current",
    "record": "Fictional effective-access, policy, route, collector, source-health, user-state, Windows baseline, and service tests passed.",
    "health": "Healthy",
    "supports": "Validated immediate corrective and baseline outcomes.",
    "does_not_support": "Zero residual risk or permanent prevention.",
    "owner": "Control and Service Owners"
  },
  {
    "id": "NBR-CAP-19",
    "source": "Communication log",
    "event_time": "22:10–23:00",
    "collection_time": "Current",
    "record": "Fictional analyst, service, leadership, user, supplier, development, and portfolio messages were approved and delivered.",
    "health": "Healthy",
    "supports": "Communication and handoff completion.",
    "does_not_support": "Technical validation by itself.",
    "owner": "Incident Commander and Communications Lead"
  },
  {
    "id": "NBR-CAP-20",
    "source": "Risk decision record",
    "event_time": "22:50",
    "collection_time": "Current",
    "record": "A fictional combined ninety-day improvement plan was approved with moderate residual risk and defined owners.",
    "health": "Healthy",
    "supports": "Risk treatment, ownership, deadlines, and monitoring.",
    "does_not_support": "That future recurrence is impossible.",
    "owner": "Risk Owner and Control Owners"
  }
];
const caseStructure = [
  {
    "case": "Case A — Supplier Access",
    "include": "NBR-CAP-01, 02, 03, 16, 17, and 18.",
    "question": "Did unsupported supplier capability remain, was it used, and was the final effective state validated?",
    "finding": "Unsupported access and one sign-in are confirmed; harmful use is not.",
    "owner": "Identity Owner and Supplier Owner",
    "action": "Remove access, review activity and sessions, require future narrow approval, and validate effective access.",
    "closure": "Access removed, sessions reviewed, owner signoff complete, monitoring defined, and residual risk documented."
  },
  {
    "case": "Case B — Cloud Storage and Telemetry",
    "include": "NBR-CAP-04, 05, 08, 09, 15, 17, 18, and 20.",
    "question": "What cloud-control weakness occurred, what impact is supported, and how did source health affect confidence?",
    "finding": "A serious broad-read policy and source gap are confirmed; unauthorized read and disclosure are not.",
    "owner": "Cloud Storage Owner, Data Owner, Telemetry Owner, and Risk Owner",
    "action": "Restore policy, recover telemetry, review covered evidence, add drift detection and failover, and validate.",
    "closure": "Approved policy effective, source healthy, services stable, monitoring active, and residual uncertainty stated."
  },
  {
    "case": "Case C — Phishing and User Support",
    "include": "NBR-CAP-10, 11, 17, 18, and 19.",
    "question": "Was the message malicious, what user interaction is confirmed, and what guidance is proportionate?",
    "finding": "The message is high-confidence malicious and one click is confirmed; credential disclosure and compromise are not.",
    "owner": "Mail Security Owner, Identity Owner, and User Support Owner",
    "action": "Remove related messages, perform targeted identity review, provide guidance, monitor, and validate user state.",
    "closure": "Message removal, identity review, user guidance, monitoring, and support acknowledgement complete."
  },
  {
    "case": "Case D — Web Authorization",
    "include": "NBR-CAP-12, 17, 18, and 19.",
    "question": "Did the support role possess capability outside its intended boundary and was the corrected rule validated?",
    "finding": "An authorization gap and unauthorized page view are confirmed; modification and wider disclosure are not.",
    "owner": "Application Owner and Access Control Owner",
    "action": "Restrict the route, review related role mappings, add approved and denied tests, and validate service health.",
    "closure": "Approved role succeeds, support role is denied, related mappings reviewed, and service remains healthy."
  },
  {
    "case": "Case E — Linux Collector Reliability",
    "include": "NBR-CAP-06, 07, 17, and 18.",
    "question": "Were the collector restarts authorized maintenance behavior, a reliability problem, or evidence of malicious activity?",
    "finding": "The maintenance change is approved and the restarts created temporary reliability risk; malicious activity is unsupported.",
    "owner": "Linux Platform Owner and Telemetry Owner",
    "action": "Stabilize the collector, confirm package state, validate delivery and completeness, and update maintenance checks.",
    "closure": "Collector stable, package approved, telemetry complete, source health monitored, and process improvement assigned."
  },
  {
    "case": "Case F — Windows Maintenance Task",
    "include": "NBR-CAP-13, 14, and 18.",
    "question": "Does the service-account task match the expected Windows baseline?",
    "finding": "The task, account, and window match the approved baseline; compromise is unsupported.",
    "owner": "Windows Platform Owner and Service Account Owner",
    "action": "Document the baseline match, preserve the record, and review only if new evidence conflicts.",
    "closure": "Baseline confirmed, owner review complete, no related anomaly found, and monitoring continues."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Read the capstone charter",
    "detail": "Define the fictional purpose, audience, scope, evidence, privacy, authority, service constraints, deadlines, deliverables, review rules, and success criteria.",
    "output": "Capstone charter."
  },
  {
    "step": "2",
    "title": "Register and validate evidence",
    "detail": "Index fictional sources, timestamps, source health, owners, relevance, limitations, handling notes, and missing evidence.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Build case boundaries and timeline",
    "detail": "Separate fictional operational cases, normalize time, identify supported relationships, mark unknowns, and preserve coordinated response needs.",
    "output": "Case map and normalized timeline."
  },
  {
    "step": "4",
    "title": "Develop findings and priorities",
    "detail": "Write fictional observations, conclusions, alternatives, confidence, potential impact, confirmed impact, owners, and next actions.",
    "output": "Findings and priority matrix."
  },
  {
    "step": "5",
    "title": "Make decisions and recommendations",
    "detail": "Record fictional authority, rationale, alternatives, continuity, deadlines, dependencies, rollback, treatment options, and residual risk.",
    "output": "Decision and risk package."
  },
  {
    "step": "6",
    "title": "Coordinate action and communication",
    "detail": "Create fictional analyst, service, leadership, user, supplier, development, recovery, and portfolio messages from one approved fact set.",
    "output": "Action and communication logs."
  },
  {
    "step": "7",
    "title": "Validate outcomes and closure",
    "detail": "Confirm fictional effective access, configuration, source health, user state, service function, owner signoff, monitoring, communication, and residual risk.",
    "output": "Validation and closure matrix."
  },
  {
    "step": "8",
    "title": "Assemble and defend the portfolio",
    "detail": "Finalize fictional report, diagrams, recommendation, communication package, evidence appendix, quality review, revision history, reflection, and artifact defense.",
    "output": "Intermediate Capstone Portfolio Package."
  }
];
const deliverables = [
  {
    "artifact": "Capstone charter",
    "purpose": "Defines the fictional problem, audience, scope, evidence, privacy, authority, service constraints, deliverables, deadlines, and success criteria.",
    "required": "Main question, included and excluded systems, review window, approved sources, owners, safety boundary, and quality standard.",
    "quality": "Every later conclusion and action remains inside the charter."
  },
  {
    "artifact": "Evidence register",
    "purpose": "Indexes the fictional records used in the capstone.",
    "required": "Identifier, source, event time, collection time, health, owner, relevance, limit, handling note, and linked case.",
    "quality": "Every major claim is traceable and no unnecessary private detail appears."
  },
  {
    "artifact": "Case-boundary map",
    "purpose": "Shows which fictional records belong together and which relationships remain unknown.",
    "required": "Systems, identities, sources, owners, time, actions, impact limits, supported links, and unknown links.",
    "quality": "Coordination does not become unsupported common cause."
  },
  {
    "artifact": "Normalized timeline",
    "purpose": "Separates fictional events, collection, alerts, decisions, actions, communications, recovery, and validation.",
    "required": "Normalized timestamp, event type, evidence reference, owner, interpretation, and uncertainty.",
    "quality": "Delayed sources do not create a false sequence."
  },
  {
    "artifact": "Findings matrix",
    "purpose": "Presents fictional evidence-limited conclusions.",
    "required": "Finding ID, statement, support, alternatives, confidence, potential impact, confirmed impact, owner, recommendation, and validation.",
    "quality": "No alert title, policy state, click, source gap, or task name is treated as universal proof."
  },
  {
    "artifact": "Decision and risk package",
    "purpose": "Records fictional declaration, priority, treatment, continuity, authority, owners, deadlines, dependencies, rollback, validation, and residual risk.",
    "required": "Options, rationale, selected action, owner, authority, milestone, success measure, monitoring, and reassessment.",
    "quality": "Actions are proportionate and decision-ready."
  },
  {
    "artifact": "Communication package",
    "purpose": "Adapts one fictional fact set for different audiences.",
    "required": "Analyst handoff, service update, leadership brief, user guidance, supplier notice, development finding, portfolio summary, approval, channel, and cadence.",
    "quality": "Facts, impact, status, validation, and residual risk remain consistent."
  },
  {
    "artifact": "Security diagram package",
    "purpose": "Explains fictional architecture, flows, boundaries, controls, evidence, risks, owners, and unknown relationships.",
    "required": "Legend, primary diagram, supporting flow, evidence references, accessibility review, and annotations.",
    "quality": "Every important node, arrow, boundary, control, and risk has purpose and evidence support."
  },
  {
    "artifact": "Validation and closure matrix",
    "purpose": "Shows whether fictional actions achieved the intended defensive state.",
    "required": "Effective access, configuration, source, user, service, owner, communication, monitoring, residual risk, and follow-up checks.",
    "quality": "Completion, validation, closure, and zero risk remain different concepts."
  },
  {
    "artifact": "Final report and portfolio defense",
    "purpose": "Presents the fictional capstone professionally.",
    "required": "Executive summary, scope, methods, evidence, timeline, findings, decisions, communications, validation, residual risk, lessons, reflection, revision, and safety statement.",
    "quality": "A reviewer can understand, challenge, and verify the student's reasoning."
  }
];
const findings = [
  {
    "id": "NBR-CAP-F01",
    "statement": "The fictional supplier administrator retained and used unsupported access after the approved exception expired.",
    "support": "Expired approval, active identity, post-expiration sign-in, ended project, and no current business need.",
    "alternative": "An undocumented emergency support need may have existed.",
    "confidence": "High",
    "potential_impact": "Administrative capability could permit unauthorized service access or change.",
    "confirmed_impact": "Unsupported access and one sign-in are confirmed; harmful use is not.",
    "next": "Keep access removed, review activity and sessions, require future narrow approval, and validate effective access."
  },
  {
    "id": "NBR-CAP-F02",
    "statement": "The fictional confidential-storage policy created a serious access-control weakness and possible exposure.",
    "support": "Broad-read condition, confidential classification, outside-window change, no approved exception, and successful restoration.",
    "alternative": "A legitimate temporary sharing need may have existed but was not documented.",
    "confidence": "High",
    "potential_impact": "Identities outside the approved group may have been able to read confidential data.",
    "confirmed_impact": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "next": "Maintain approved access, review covered evidence, add drift detection, improve telemetry, and monitor residual risk."
  },
  {
    "id": "NBR-CAP-F03",
    "statement": "The fictional cloud audit-source gap reduced confidence in privileged-activity analysis.",
    "support": "Thirty-eight-minute gap, privileged coverage, compensating records, source recovery, and delayed evidence.",
    "alternative": "A nonsecurity delivery failure may explain the outage.",
    "confidence": "High",
    "potential_impact": "Important activity may have been delayed or unavailable during response.",
    "confirmed_impact": "Monitoring assurance was reduced; harmful activity during the gap is unconfirmed.",
    "next": "Add failover, delay alerting, reconstruction, coverage documentation, and closure guidance."
  },
  {
    "id": "NBR-CAP-F04",
    "statement": "The fictional payroll-themed message was malicious, while user impact remained limited to one confirmed click.",
    "support": "Failed sender checks, unrelated destination, urgent sign-in request, no approved campaign, and one reported click.",
    "alternative": "A badly configured legitimate message is possible but not supported.",
    "confidence": "High",
    "potential_impact": "Credential theft and account takeover were possible.",
    "confirmed_impact": "One click is confirmed; credential disclosure and compromise are unconfirmed.",
    "next": "Complete targeted identity review, remove related messages, guide the user, and monitor."
  },
  {
    "id": "NBR-CAP-F05",
    "statement": "The fictional support role possessed excessive authorization to a manager-only route.",
    "support": "Successful page load, documented role boundary, no approved exception, route correction, and passed role tests.",
    "alternative": "Documentation may have been outdated, but the owner confirmed the intended restriction.",
    "confidence": "High",
    "potential_impact": "Unauthorized users could view or interact with restricted settings.",
    "confirmed_impact": "Unauthorized page view is confirmed; modification and wider disclosure are unconfirmed.",
    "next": "Maintain the restriction, review related role mappings, and preserve automated authorization tests."
  },
  {
    "id": "NBR-CAP-F06",
    "statement": "The fictional Linux collector restarts were associated with approved maintenance but created temporary reliability risk.",
    "support": "Approved package change, restart timing, collector evidence, later stabilization, and complete validation.",
    "alternative": "An unrelated service defect may also have contributed.",
    "confidence": "Medium-High",
    "potential_impact": "Evidence collection could be delayed or incomplete.",
    "confirmed_impact": "Temporary collector instability is confirmed; malicious activity is unsupported.",
    "next": "Improve maintenance validation, collector health checks, rollback criteria, and source completeness monitoring."
  },
  {
    "id": "NBR-CAP-F07",
    "statement": "The fictional Windows service-account task matched the approved maintenance baseline.",
    "support": "Expected task name, service account, patch window, owner confirmation, and no conflicting evidence.",
    "alternative": "A copied task name could be misleading, but no supporting anomaly is present.",
    "confidence": "High",
    "potential_impact": "An unauthorized administrative task could affect endpoint integrity.",
    "confirmed_impact": "The observed task is consistent with approved maintenance.",
    "next": "Document the baseline match and re-open review only if new conflicting evidence appears."
  },
  {
    "id": "NBR-CAP-F08",
    "statement": "The fictional evidence supports six operational cases under one coordinated response rather than one confirmed common-cause incident.",
    "support": "Different systems, identities, sources, owners, actions, timelines, and impact limits.",
    "alternative": "Future evidence may link selected cases.",
    "confidence": "High",
    "potential_impact": "Forced merging could distort scope, ownership, priority, action, and reporting.",
    "confirmed_impact": "Coordination need is confirmed; common cause is not.",
    "next": "Maintain separate case records and link only evidence-supported relationships."
  },
  {
    "id": "NBR-CAP-F09",
    "statement": "The fictional coordinated response may transition to monitored follow-up after validated immediate corrections.",
    "support": "Access, policy, route, collector, source, user, Windows baseline, service, communication, and owner checks passed.",
    "alternative": "New evidence or failed monitoring could require re-escalation.",
    "confidence": "Medium-High",
    "potential_impact": "Recurrence, source gaps, exception drift, or role defects remain possible.",
    "confirmed_impact": "Immediate unsupported states are corrected and no confirmed disclosure or takeover appears in covered evidence.",
    "next": "Complete the approved ninety-day improvement plan and scheduled reassessments."
  }
];
const commonMistakes = [
  "Treating all fictional records from one shift as one incident without identity, system, session, evidence, owner, action, or impact links.",
  "Using an alert title, severity, unfamiliar process, task name, policy state, page view, source gap, or click as a complete conclusion.",
  "Mixing fictional event, collection, alert, decision, action, communication, recovery, and validation times.",
  "Ignoring source health or compensating evidence when building the timeline.",
  "Treating possible exposure as confirmed access or disclosure.",
  "Treating one click as credential disclosure or account takeover.",
  "Treating approved maintenance as proof that every resulting system behavior is expected.",
  "Treating an unfamiliar Windows or Linux event as malicious without baseline comparison.",
  "Assigning every decision and action to the analyst or security team.",
  "Choosing broad shutdown when targeted reversible action can reduce risk while preserving service.",
  "Treating proposed, authorized, completed, failed, rolled-back, and validated actions as equivalent.",
  "Using inconsistent impact, status, action, validation, or residual-risk language across reports and audience messages.",
  "Closing because tickets are complete, services are available, or alerts stop.",
  "Creating portfolio material from real logs, screenshots, credentials, systems, incidents, suppliers, employee data, school records, or confidential information."
];
const quizQuestions = [
  {
    "question": "What is the strongest fictional capstone case structure?",
    "choices": [
      "Separate operational cases with evidence-supported relationships under one coordinated response view.",
      "One incident because every record occurred during the same shift.",
      "One case per alert title only.",
      "No coordination between related owners."
    ],
    "answer": 0,
    "explanation": "Coordination and common cause are different ideas."
  },
  {
    "question": "What does the fictional broad storage policy prove?",
    "choices": [
      "A serious control weakness and possible exposure, while unauthorized access and disclosure remain unconfirmed.",
      "All confidential data was disclosed.",
      "No risk existed because service stayed online.",
      "The supplier caused the change."
    ],
    "answer": 0,
    "explanation": "The strongest answer preserves both severity and evidence limits."
  },
  {
    "question": "How should the fictional Windows maintenance task be handled?",
    "choices": [
      "Compare it with the approved baseline, owner record, timing, account, and conflicting evidence before concluding.",
      "Treat it as compromise because the task name is unfamiliar.",
      "Ignore every service-account task.",
      "Merge it with the phishing case."
    ],
    "answer": 0,
    "explanation": "Context and baseline evidence are required."
  },
  {
    "question": "Why should fictional corrective actions and validation be recorded separately?",
    "choices": [
      "A completed change does not prove the intended effective state, service function, source health, user state, or residual risk.",
      "They always mean the same thing.",
      "Validation is only for cloud work.",
      "Completed tickets prove closure."
    ],
    "answer": 0,
    "explanation": "Completion is one stage; validated outcome is another."
  },
  {
    "question": "What should remain consistent across fictional analyst, service, leadership, user, supplier, and portfolio messages?",
    "choices": [
      "The facts, impact limits, status, actions, validation, and residual risk.",
      "The exact wording and length.",
      "The amount of technical detail.",
      "The number of evidence records shown."
    ],
    "answer": 0,
    "explanation": "Audience adaptation should not change supported facts."
  },
  {
    "question": "When may the fictional capstone transition to monitored follow-up?",
    "choices": [
      "After required access, configuration, source, user, service, owner, communication, monitoring, and residual-risk checks are validated.",
      "When the dashboard becomes quiet.",
      "When every ticket is marked complete.",
      "When no outage is visible."
    ],
    "answer": 0,
    "explanation": "Transition requires evidence-based closure criteria."
  },
  {
    "question": "What makes the fictional Intermediate Capstone Portfolio Package safe to share?",
    "choices": [
      "Every organization, system, identity, log, message, supplier, incident, date, action, and outcome is invented.",
      "Only passwords are removed.",
      "Real records are shortened.",
      "The organization name is changed while all other details remain."
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
        Module Test
      </Link>
    </div>
  );
}

export default function IntermediateCapstoneLabPage() {
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
              Module I17
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 8 of 8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Final Capstone
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.8 Intermediate Capstone Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a fictional multi-domain defender capstone that integrates
            evidence analysis, systems, identity, phishing, web, cloud,
            incident response, risk, operations, reporting, diagrams,
            communication, validation, reflection, and portfolio presentation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Intermediate Capstone Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge systems, identities, logs, messages, cloud resources, suppliers, dates, actions, and outcomes.",
            "I will not copy, lightly edit, upload, expose, or recreate real credentials, reports, architecture, messages, company systems, school systems, employee records, supplier information, cloud identifiers, incidents, or confidential material.",
            "I will distinguish fictional observations, conclusions, alternatives, confidence, potential impact, confirmed impact, source limits, actions, validation, and residual risk.",
            "I will separate operational cases unless evidence supports a relationship.",
            "I will not access, scan, test, change, or investigate real systems or suspicious content.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Final Challenge Is Integration without Overstatement"
        >
          <p className="leading-8">
            The fictional capstone dashboard groups supplier access, cloud
            policy drift, telemetry loss, phishing, web authorization, Linux
            collector restarts, and a Windows maintenance task into one urgent
            queue. A strong defender coordinates the work while preserving
            evidence limits, case boundaries, service continuity, ownership,
            validation, and audience trust.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak capstone
              </p>
              <p className="mt-2 leading-7">
                Merge every record, assume compromise, ignore maintenance
                baselines, recommend broad shutdown, write one message for all
                audiences, close completed tickets, and hide uncertainty.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional capstone
              </p>
              <p className="mt-2 leading-7">
                Validate sources, normalize time, separate cases, compare
                baselines, assign owners, choose proportionate action, tailor
                communication, validate outcomes, and defend the evidence chain.
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
          title="Professional Defensive Work Connects Many Small Decisions"
        >
          <p className="leading-8">
            Fictional evidence becomes useful only when the analyst understands
            systems and identities, preserves source and case limits, chooses
            proportionate action, coordinates owners, communicates accurately,
            validates the final state, and records the work for future review.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Register–Separate–Analyze–Decide–Validate Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Register", "Which fictional records, timestamps, source-health notes, owners, handling rules, relevance, and limitations exist?"],
              ["Separate", "Which fictional systems, identities, sessions, owners, actions, and impact limits belong in separate operational cases?"],
              ["Analyze", "Which fictional observations, conclusions, alternatives, confidence, possible impact, confirmed impact, and unknowns are supported?"],
              ["Decide", "Which fictional action, authority, owner, deadline, dependency, continuity choice, rollback, communication, and risk treatment follow?"],
              ["Validate", "Which fictional effective-state, service, source, user, owner, monitoring, communication, residual-risk, and closure checks prove the outcome?"],
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
            Integrated Capstone and Case-Management Terms
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
            Capstone Scenario
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Work Areas
          </h2>

          <div className="mt-6 grid gap-5">
            {scenarioOverview.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.area}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Record", item.record],
                    ["Owner", item.owner],
                    ["Risk", item.risk],
                    ["Evidence limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.area}-${label}`}
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
            Evidence Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Twenty Fictional Capstone Records
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.source}
                  </span>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.health}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.record}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Event time", item.event_time],
                    ["Collection time", item.collection_time],
                    ["Supports", item.supports],
                    ["Does not support", item.does_not_support],
                    ["Owner", item.owner],
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
            Case Structure
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Operational Cases
          </h2>

          <div className="mt-6 grid gap-5">
            {caseStructure.map((item) => (
              <article
                key={item.case}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.case}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Included records", item.include],
                    ["Main question", item.question],
                    ["Finding", item.finding],
                    ["Owner", item.owner],
                    ["Action", item.action],
                    ["Closure criteria", item.closure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.case}-${label}`}
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
            Capstone Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Charter to Portfolio Defense
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
                <p className="text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Required Portfolio Package
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Capstone Deliverables
          </h2>

          <div className="mt-6 grid gap-5">
            {deliverables.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.artifact}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Required", item.required],
                    ["Quality standard", item.quality],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.artifact}-${label}`}
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
          title="Fake Northbridge Intermediate Capstone Dashboard"
          subtitle="Training dashboard based on fictional evidence only."
          metrics={[
            {
              label: "Operational cases",
              value: "6",
              note: "Supplier access, cloud and telemetry, phishing, web authorization, Linux reliability, and Windows baseline remain separate evidence-based cases.",
            },
            {
              label: "Validated immediate outcomes",
              value: "8",
              note: "Access, policy, route, collector, source, user, Windows baseline, and service checks reached validated states.",
            },
            {
              label: "Confirmed common cause",
              value: "0",
              note: "Coordination is justified, but no supplied fictional evidence proves one common cause across all cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Capstone Queue Merges Six Cases into One Unsupported Incident"
          severity="High"
          time="6:18 PM"
          source="Fake Northbridge Capstone Review Console"
          details="A fictional draft groups supplier access, cloud policy drift, phishing, web authorization, Linux collector restarts, and a Windows maintenance task as one incident because they occurred during the same shift."
          recommendation="Separate operational cases by systems, identities, sources, owners, actions, and impact limits; preserve one coordinated response view and mark only evidence-supported relationships."
        />

        <FakeLogPanel
          title="Fake Intermediate Capstone Timeline"
          logs={[
            "17:00 IAM supplier-exception='expired'",
            "18:42 AUTH supplier-signin='success'",
            "18:43 APP supplier-action='status-view'",
            "20:11 CLOUD storage-policy='broad-read'",
            "20:34 LINUX collector-restart='1'",
            "20:51 LINUX collector-restart='3'",
            "21:02 SOURCE cloud-audit='delivery-stopped'",
            "21:14 EMAIL payroll-message='malicious'",
            "21:18 USER payroll-link='clicked'",
            "21:26 WEB support-role='manager-page-view'",
            "21:31 WINDOWS maintenance-task='baseline-match'",
            "21:35 SERVICE availability='healthy'",
            "21:40 SUPPLIER business-need='none'",
            "21:45 RESPONSE operational-cases='6'",
            "22:25 VALIDATION immediate-controls='running'",
            "22:55 STATUS monitored-followup='eligible'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Capstone Findings
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Nine Fictional Findings
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
                    ["Potential impact", item.potential_impact],
                    ["Confirmed impact", item.confirmed_impact],
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
          title="Do the Six Fictional Cases Share One Confirmed Cause?"
          evidence={[
            "The records occur during one shift.",
            "The supplier, cloud, phishing, web, Linux, and Windows cases involve different systems and identities.",
            "The cases use different evidence sources and owners.",
            "The Linux and Windows records have approved maintenance context.",
            "No common session, actor, identity, access path, or change record connects all cases.",
            "One coordinated response view supports shared communication and leadership awareness.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Maintain six operational cases under one coordinated response and link only relationships supported by additional evidence.",
            "Declare one common-cause incident because all records occurred during one shift.",
            "Ignore all records because services remained available.",
            "Treat the supplier as the confirmed cause of every case.",
          ]}
          bestAnswer={0}
          explanation="Shared timing supports coordination, not a proven common cause."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken an Intermediate Capstone"
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
          title="Build the Complete Intermediate Capstone Portfolio Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Analyze, Decide, Communicate, Validate, Report, and Defend
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge evidence to build a
                complete multi-domain case package and portfolio presentation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Capstone charter with purpose, audience, scope, exclusions, evidence, privacy, authority, service constraints, deadlines, and success criteria.</li>
                <li>Twenty-record evidence register with timestamps, source health, owners, relevance, limitations, handling notes, and case assignments.</li>
                <li>Six-case boundary map, normalized timeline, supported relationship matrix, unknown-relationship list, and evidence requests.</li>
                <li>Nine findings with observations, conclusions, alternatives, confidence, potential impact, confirmed impact, owners, recommendations, and validation.</li>
                <li>Decision, risk, action, continuity, rollback, dependency, communication, monitoring, residual-risk, and reassessment registers.</li>
                <li>Analyst, service, leadership, user, supplier, development, recovery, and portfolio communications from one approved fact set.</li>
                <li>Architecture and flow diagrams, incident report, risk recommendation, validation matrix, closure criteria, and ninety-day improvement plan.</li>
                <li>Quality review, peer feedback, version history, portfolio-safety review, reflection, timed artifact defense, reviewer questions, and final revision.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fully invented evidence and artifacts. Do not copy,
            lightly edit, expose, or recreate real systems, identities, logs,
            messages, architecture, cloud resources, suppliers, incidents,
            employee data, school records, credentials, or confidential
            organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Dashboard Suggests One Coordinated Incident"
          scenario="The fictional records occurred during one shift, but the systems, identities, sources, owners, actions, and impact limits differ."
          choices={[
            {
              label: "Choice A",
              response:
                "Create six operational cases under one coordinated response and link only evidence-supported relationships.",
              outcome:
                "Best capstone choice. Coordination is preserved without inventing common cause.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Merge every record into one incident because the timestamps are close.",
              outcome:
                "Unsupported. Temporal proximity alone is insufficient.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the maintenance records so the incident looks clearer.",
              outcome:
                "Unsafe for analysis. Relevant baseline evidence should be preserved.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Every Corrective Ticket Is Complete"
          scenario="Fictional access, policy, route, collector, and source actions are recorded, but effective-state, user, service, owner, communication, monitoring, and residual-risk checks are still pending."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the cases in recovery or monitored transition until all required validation and residual-risk evidence is complete.",
              outcome:
                "Best closure choice. Completion does not replace validated outcome.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close every case immediately because the tickets are complete.",
              outcome:
                "Premature. The intended defensive state is not fully proven.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Claim zero residual risk after the changes.",
              outcome:
                "Unsupported. Recurrence, coverage, process, and uncertainty remain.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Intermediate Capstone Lab Checklist"
          items={[
            "I can define a fictional capstone purpose, audience, scope, evidence boundary, privacy rule, authority, service constraint, deliverables, and success criteria.",
            "I can register fictional evidence with event time, collection time, source health, owner, relevance, limitation, and handling notes.",
            "I can create fictional operational cases based on systems, identities, sources, owners, actions, and impact limits.",
            "I can distinguish fictional observation, conclusion, alternative, confidence, potential impact, confirmed impact, unknown, and residual uncertainty.",
            "I can compare fictional baselines for networking, Linux, Windows, identity, email, web, cloud, and monitoring evidence.",
            "I can record fictional decisions with authority, owner, rationale, alternatives, continuity, deadline, dependency, rollback, validation, and residual risk.",
            "I can communicate one fictional fact set consistently to analysts, service owners, leadership, users, suppliers, development teams, teachers, and portfolio reviewers.",
            "I can validate fictional effective access, configuration, source health, user state, service function, owner signoff, communication, monitoring, and closure criteria.",
            "I can build and defend a fictional report, diagram package, risk recommendation, communication package, portfolio artifact, reflection, and revision history.",
            "I will never expose or recreate real credentials, systems, identities, logs, messages, architecture, suppliers, cloud resources, incidents, employee data, school records, or confidential information.",
          ]}
        />

        <MiniQuiz
          title="I17.8 Mini Quiz: Intermediate Capstone Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create the fictional Northbridge Intermediate Capstone Portfolio Package. Include the capstone charter, evidence register, case-boundary map, normalized timeline, relationship matrix, unknowns, evidence requests, findings, decisions, risk recommendation, action register, owner map, continuity plan, rollback plan, communication package, security diagrams, incident report, validation matrix, closure criteria, residual risk, ninety-day improvement plan, metrics, monitoring, peer review, quality checklist, privacy review, version history, reflection, artifact-defense notes, reviewer questions, final revision, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, evidence, messages, suppliers, dates, actions, and outcomes.",
            "Preserve case boundaries and link only evidence-supported relationships.",
            "Separate action completion from validated outcome and closure.",
            "Make every artifact traceable to the same approved fact set.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The Intermediate capstone tests integration rather than isolated recall.",
            "Shared timing supports coordination but does not prove common cause.",
            "Baselines and change records help distinguish expected system behavior from suspicious activity.",
            "Every finding should preserve evidence support, alternatives, confidence, impact limits, ownership, and validation.",
            "Proportionate action should reduce risk while preserving necessary service whenever possible.",
            "Completion, validation, closure, and zero residual risk are different ideas.",
            "The final portfolio package must be fully fictional, traceable, accessible, revised, and safe to share.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Finish Module I17
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