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
const previousLesson = `${modulePath}/building-a-defender-portfolio-artifact`;
const nextLesson = `${modulePath}/creating-a-security-diagram`;

const objectives = [
  "Define a fictional incident-report purpose, audience, case scope, evidence boundary, privacy rule, document status, owner, review standard, and decision need.",
  "Transform fictional alerts, logs, timelines, identity records, email evidence, web evidence, cloud evidence, decisions, communications, recovery actions, and validation into a traceable professional report.",
  "Distinguish fictional observations, supported conclusions, alternate explanations, missing evidence, confidence, potential impact, confirmed impact, actions, limitations, and residual risk.",
  "Write fictional executive, technical, service-owner, user-support, supplier, recovery, and portfolio-safe summaries while preserving one consistent set of facts.",
  "Produce a complete fictional incident report with document control, executive summary, scope, methods, evidence register, timeline, findings, decisions, communications, recovery, closure, appendices, reflection, and quality review."
];
const vocabulary = [
  [
    "Incident report",
    "A fictional formal record of the case purpose, scope, evidence, timeline, findings, decisions, actions, communications, validation, limitations, and outcome."
  ],
  [
    "Document control",
    "A fictional section recording the report identifier, title, version, status, author role, reviewer role, approval state, date, classification, owner, and distribution boundary."
  ],
  [
    "Case scope",
    "A fictional boundary covering systems, identities, services, suppliers, data, time period, evidence, privacy, authority, and exclusions."
  ],
  [
    "Executive summary",
    "A fictional concise overview of what happened, what is confirmed, what remains unconfirmed, what actions occurred, current service state, residual risk, and next decision."
  ],
  [
    "Incident status",
    "A fictional label such as investigating, declared, contained, recovering, monitoring, transitioned, or closed, supported by defined criteria."
  ],
  [
    "Evidence register",
    "A fictional index of records used in the report, including source, timestamp, owner, health, relevance, handling note, and limitation."
  ],
  [
    "Normalized timeline",
    "A fictional ordered sequence that separates event, collection, alert, decision, action, communication, recovery, and validation times."
  ],
  [
    "Finding",
    "A fictional evidence-limited conclusion with support, alternate explanations, confidence, potential impact, confirmed impact, owner, recommendation, and validation."
  ],
  [
    "Decision record",
    "A fictional entry documenting the decision, evidence, rationale, authority, owner, time, alternatives, dependency, deadline, rollback, and result."
  ],
  [
    "Containment record",
    "A fictional account of approved actions intended to limit additional exposure, access, spread, or service impact while preserving evidence and continuity."
  ],
  [
    "Communication log",
    "A fictional record of audience, message, approval, sender role, delivery time, required action, response channel, and next cadence."
  ],
  [
    "Recovery criterion",
    "A fictional measurable condition that must be satisfied before a system, identity, service, control, or process returns to normal operation."
  ],
  [
    "Closure criterion",
    "A fictional requirement covering evidence, impact, action completion, validation, ownership, communication, residual risk, lessons learned, and follow-up before closure."
  ],
  [
    "Residual risk",
    "The fictional risk or uncertainty remaining after corrective action, validation, monitoring, or accepted limitation."
  ],
  [
    "Technical appendix",
    "A fictional supporting section containing detailed evidence tables, timelines, field mappings, decision logs, communications, validation, and glossary material."
  ],
  [
    "Portfolio-safe incident report",
    "A fictional report using invented organizations, systems, identities, evidence, dates, identifiers, incidents, actions, and outcomes while preserving professional structure."
  ]
];
const incidentSections = [
  {
    "section": "1. Document control",
    "purpose": "Identify the fictional report, current version, status, owner, author role, reviewer role, approval state, date, classification, and intended distribution.",
    "include": "Report title, fictional case identifier, version, status, author role, reviewer role, approval date, owner, and audience.",
    "avoid": "Real organizations, names, case numbers, classifications, internal distribution lists, or private project labels.",
    "quality": "The reader can identify the current approved version and who owns the document."
  },
  {
    "section": "2. Executive summary",
    "purpose": "Give decision-makers a concise fictional overview of the issue, confirmed facts, impact, actions, service state, residual risk, and decision request.",
    "include": "What happened, what is confirmed, what is not confirmed, what was done, what remains open, and when the next update occurs.",
    "avoid": "Raw logs, unexplained acronyms, unsupported certainty, blame, or technical details that do not support a decision.",
    "quality": "A leadership reader understands the current situation in under two minutes."
  },
  {
    "section": "3. Scope and exclusions",
    "purpose": "Define the fictional systems, identities, services, suppliers, data, time period, evidence, privacy constraints, authority, and out-of-scope questions.",
    "include": "Exact boundaries, review window, approved sources, owners, assumptions, excluded systems, and evidence limitations.",
    "avoid": "Universal claims that appear to cover systems or time periods that were never reviewed.",
    "quality": "Every conclusion remains inside a clear review boundary."
  },
  {
    "section": "4. Incident declaration and status",
    "purpose": "Explain whether the fictional case met declaration criteria and which status applies at each stage.",
    "include": "Criteria, evidence, impact, criticality, uncertainty, authority, declaration time, status changes, and owner approvals.",
    "avoid": "Declaring an incident solely because an alert is High or denying one solely because no outage exists.",
    "quality": "Each status change is evidence-based and authorized."
  },
  {
    "section": "5. Methods and evidence handling",
    "purpose": "Explain how fictional evidence was validated, normalized, compared, preserved, reviewed, and limited.",
    "include": "Source-health checks, timestamp handling, evidence identifiers, ownership, privacy rules, confidence method, and peer review.",
    "avoid": "Unsafe operational detail, real-system instructions, or unsupported claims about evidence integrity.",
    "quality": "Another authorized reviewer can understand how the conclusions were formed."
  },
  {
    "section": "6. Evidence register",
    "purpose": "Index the fictional records used in the report and document source health, relevance, timing, ownership, and limitation.",
    "include": "Evidence identifier, source, event time, collection time, owner, health, relevance, report use, and limitation.",
    "avoid": "Unnecessary raw content, credentials, private data, real addresses, or unexplained excerpts.",
    "quality": "Every important claim can be traced to one or more evidence identifiers."
  },
  {
    "section": "7. Normalized timeline",
    "purpose": "Present fictional events, collection, alerts, decisions, actions, communications, recovery, and validation in the correct sequence.",
    "include": "Normalized timestamp, event type, evidence reference, owner, interpretation, decision, and uncertainty.",
    "avoid": "Mixing event time with collection time or inserting unsupported events.",
    "quality": "The sequence remains accurate even when sources are delayed."
  },
  {
    "section": "8. Findings and impact",
    "purpose": "State fictional observations and supported conclusions with alternatives, confidence, potential impact, confirmed impact, limitations, owners, and next actions.",
    "include": "Finding identifier, statement, evidence, alternate explanation, confidence, impact, recommendation, and validation.",
    "avoid": "Alert titles presented as findings or possible exposure presented as confirmed disclosure.",
    "quality": "Each finding is specific, evidence-limited, actionable, and reviewable."
  },
  {
    "section": "9. Decisions and actions",
    "purpose": "Document fictional declaration, containment, continuity, evidence, supplier, identity, communication, recovery, and monitoring decisions.",
    "include": "Decision, evidence, rationale, authority, owner, deadline, dependency, rollback, status, and validation.",
    "avoid": "Treating proposed actions as authorized or completed actions as validated.",
    "quality": "Every major action has a complete decision trail."
  },
  {
    "section": "10. Communications",
    "purpose": "Record fictional technical, service, leadership, user, supplier, recovery, and handoff messages.",
    "include": "Audience, facts, impact, action, decision request, approval, delivery time, response path, and next cadence.",
    "avoid": "One identical message for every audience or unnecessary private details.",
    "quality": "Each communication supports a specific reader decision or action."
  },
  {
    "section": "11. Recovery, validation, and closure",
    "purpose": "Show whether fictional access, configuration, telemetry, user, service, communication, owner, residual-risk, and improvement criteria were satisfied.",
    "include": "Recovery tests, owner signoff, failed checks, monitoring, closure limits, transition status, residual risk, and follow-up.",
    "avoid": "Treating a closed ticket, stopped alert, or restored service as proof of complete resolution.",
    "quality": "The reader can see exactly what is fixed, what remains, and why the case may close or transition."
  },
  {
    "section": "12. Appendices and reflection",
    "purpose": "Preserve fictional technical detail, version history, glossary, quality review, lessons learned, reflection, and portfolio-safety evidence.",
    "include": "Detailed timeline, evidence table, decision register, communication log, validation results, revision notes, reflection, and safety statement.",
    "avoid": "Real logs, screenshots, identities, systems, messages, incidents, suppliers, or private information.",
    "quality": "The appendices strengthen traceability while remaining safe and readable."
  }
];
const evidenceRecords = [
  {
    "id": "NBR-IRP-01",
    "source": "Identity approval register",
    "record": "A fictional supplier administrator exception expired at 17:00 and no approved renewal exists.",
    "event_time": "17:00",
    "collection_time": "17:01",
    "health": "Healthy",
    "owner": "Identity Owner and Supplier Owner",
    "relevance": "Confirms unsupported administrative capability.",
    "limit": "Does not establish intent or misuse."
  },
  {
    "id": "NBR-IRP-02",
    "source": "Authentication record",
    "record": "The fictional supplier identity signed in to a confidential support service at 18:42.",
    "event_time": "18:42",
    "collection_time": "18:42",
    "health": "Healthy",
    "owner": "Identity Owner",
    "relevance": "Confirms current use after approval expiration.",
    "limit": "Does not prove which actions followed."
  },
  {
    "id": "NBR-IRP-03",
    "source": "Application activity",
    "record": "The fictional supplier identity viewed one service-status page and performed no recorded configuration change.",
    "event_time": "18:43",
    "collection_time": "18:43",
    "health": "Healthy",
    "owner": "Service Owner",
    "relevance": "Limits the supported activity.",
    "limit": "Covers only the support application."
  },
  {
    "id": "NBR-IRP-04",
    "source": "Cloud configuration history",
    "record": "A fictional confidential-storage policy changed outside the approved window and gained a broad read condition.",
    "event_time": "20:11",
    "collection_time": "20:11",
    "health": "Healthy",
    "owner": "Cloud Storage Owner and Data Owner",
    "relevance": "Confirms a serious unsupported configuration state.",
    "limit": "Does not confirm successful access or disclosure."
  },
  {
    "id": "NBR-IRP-05",
    "source": "Cloud access evidence",
    "record": "No covered unauthorized storage read is observed from 20:11 through 20:45.",
    "event_time": "20:11–20:45",
    "collection_time": "20:46",
    "health": "Healthy with limited coverage",
    "owner": "Cloud Security Owner",
    "relevance": "Provides partial evidence against confirmed disclosure.",
    "limit": "Does not represent every possible access path."
  },
  {
    "id": "NBR-IRP-06",
    "source": "Source-health monitor",
    "record": "A fictional cloud audit source stopped delivering administrative events at 21:02.",
    "event_time": "21:02",
    "collection_time": "21:02",
    "health": "Healthy monitor reporting an unhealthy source",
    "owner": "Telemetry Owner",
    "relevance": "Confirms a monitoring blind spot.",
    "limit": "Does not prove harmful activity occurred during the gap."
  },
  {
    "id": "NBR-IRP-07",
    "source": "Compensating records",
    "record": "Fictional configuration history and service-health records remained current while the audit source was unavailable.",
    "event_time": "21:02–21:37",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Cloud Platform Owner and Service Owner",
    "relevance": "Provides partial visibility during the gap.",
    "limit": "Coverage is narrower than the missing source."
  },
  {
    "id": "NBR-IRP-08",
    "source": "Mail security record",
    "record": "A fictional payroll-themed message failed sender checks and used an unrelated sign-in destination description.",
    "event_time": "21:14",
    "collection_time": "21:15",
    "health": "Healthy",
    "owner": "Mail Security Owner",
    "relevance": "Supports a high-confidence malicious-message disposition.",
    "limit": "No real link, message, domain, or credential is included."
  },
  {
    "id": "NBR-IRP-09",
    "source": "User interaction record",
    "record": "One fictional user clicked the payroll-themed link and reported entering no information.",
    "event_time": "21:18",
    "collection_time": "21:21",
    "health": "Healthy",
    "owner": "Identity Owner and User Support Owner",
    "relevance": "Confirms one interaction requiring targeted review.",
    "limit": "Credential disclosure and account compromise are unconfirmed."
  },
  {
    "id": "NBR-IRP-10",
    "source": "Web authorization record",
    "record": "A fictional support role loaded a manager-only account-settings page.",
    "event_time": "21:26",
    "collection_time": "21:26",
    "health": "Healthy",
    "owner": "Application Owner and Access Control Owner",
    "relevance": "Confirms an authorization gap and unauthorized page view.",
    "limit": "No modification or wider disclosure is confirmed."
  },
  {
    "id": "NBR-IRP-11",
    "source": "Change-management record",
    "record": "No approved change matched the storage-policy state or manager-route authorization.",
    "event_time": "Review window",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Change Owner",
    "relevance": "Supports that both control states were unsupported.",
    "limit": "An undocumented emergency action remains possible."
  },
  {
    "id": "NBR-IRP-12",
    "source": "Service-health dashboard",
    "record": "The fictional support service, storage service, payroll service, and web application remained available.",
    "event_time": "21:30",
    "collection_time": "21:31",
    "health": "Healthy",
    "owner": "Service Owners",
    "relevance": "Supports targeted action rather than broad shutdown.",
    "limit": "Availability does not prove confidentiality or authorization."
  },
  {
    "id": "NBR-IRP-13",
    "source": "Supplier-owner confirmation",
    "record": "The fictional supplier owner confirmed the support project ended and no current administrative need exists.",
    "event_time": "21:40",
    "collection_time": "21:41",
    "health": "Healthy",
    "owner": "Supplier Owner",
    "relevance": "Confirms the supplier access should not remain active.",
    "limit": "Does not establish malicious intent."
  },
  {
    "id": "NBR-IRP-14",
    "source": "Corrective-action register",
    "record": "The fictional supplier access was removed, storage policy restored, and manager-only route restricted.",
    "event_time": "22:00–22:18",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Identity, Cloud, and Application Owners",
    "relevance": "Confirms three corrective actions were completed.",
    "limit": "Completion is not the same as validation."
  },
  {
    "id": "NBR-IRP-15",
    "source": "Validation register",
    "record": "The fictional audit source recovered, access tests passed, services remained healthy, and no covered unauthorized storage read was observed.",
    "event_time": "22:25–22:50",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Telemetry, Identity, Cloud, Application, and Service Owners",
    "relevance": "Supports transition to monitored follow-up.",
    "limit": "Residual uncertainty remains for uncovered paths and intent."
  },
  {
    "id": "NBR-IRP-16",
    "source": "Communication and closure record",
    "record": "Fictional leadership, service, supplier, user-support, and technical updates were delivered and follow-up owners were assigned.",
    "event_time": "22:10–23:00",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Incident Commander and Communications Lead",
    "relevance": "Confirms communication and ownership requirements.",
    "limit": "Does not replace technical validation."
  }
];
const decisionRecords = [
  {
    "time": "21:35",
    "decision": "Open four operational cases under one coordinated response view.",
    "evidence": "Different identities, systems, evidence, owners, actions, and impact limits.",
    "authority": "Incident Commander and SOC Lead",
    "owner": "Assigned case owners",
    "alternative": "Merge all records into one incident.",
    "reason": "Coordination is useful, but shared timing does not prove one cause.",
    "validation": "Peer review confirms case boundaries and supported links."
  },
  {
    "time": "21:45",
    "decision": "Remove unsupported supplier administration.",
    "evidence": "Expired approval, post-expiration sign-in, ended project, and no current need.",
    "authority": "Identity Owner and Supplier Owner",
    "owner": "Identity Operations",
    "alternative": "Leave access until the next periodic review.",
    "reason": "Active unnecessary high-impact capability exists now.",
    "validation": "Effective access and active sessions are checked after removal."
  },
  {
    "time": "21:48",
    "decision": "Restore the confidential-storage policy to the approved identity group.",
    "evidence": "Broad read condition, confidential classification, no approved change, and possible exposure.",
    "authority": "Cloud Storage Owner and Data Owner",
    "owner": "Cloud Platform Team",
    "alternative": "Leave the policy while gathering more evidence.",
    "reason": "A reversible targeted correction reduces current exposure.",
    "validation": "Effective policy, service function, and access tests are confirmed."
  },
  {
    "time": "21:52",
    "decision": "Restore or fail over the cloud audit source.",
    "evidence": "Current privileged-activity visibility gap.",
    "authority": "Telemetry Owner",
    "owner": "Logging Platform Team",
    "alternative": "Wait for automatic recovery.",
    "reason": "The source gap limits confidence in impact conclusions.",
    "validation": "Delivery, parsing, completeness, timeliness, and gap reconstruction are checked."
  },
  {
    "time": "21:55",
    "decision": "Perform targeted identity review for the clicked user.",
    "evidence": "One confirmed click with no confirmed credential entry.",
    "authority": "Identity Owner",
    "owner": "Identity and User Support Teams",
    "alternative": "Reset every recipient immediately.",
    "reason": "Targeted action matches the confirmed interaction and preserves proportionality.",
    "validation": "Account state, sessions, user report, and monitoring are reviewed."
  },
  {
    "time": "22:02",
    "decision": "Restrict the manager-only route to approved roles.",
    "evidence": "Confirmed support-role page view and no approved exception.",
    "authority": "Application Owner and Access Control Owner",
    "owner": "Application Team",
    "alternative": "Disable the entire application.",
    "reason": "Targeted authorization correction preserves service continuity.",
    "validation": "Approved and denied role tests and service health are confirmed."
  },
  {
    "time": "22:30",
    "decision": "Issue a leadership update stating serious control weaknesses but no confirmed disclosure or takeover.",
    "evidence": "Confirmed access and control states, limited user interaction, covered access evidence, and source limits.",
    "authority": "Incident Commander and Communications Lead",
    "owner": "Communications Lead",
    "alternative": "Report the worst-case scenario as current fact.",
    "reason": "Decision-ready communication must preserve impact limits.",
    "validation": "The approved message is delivered and the next update time recorded."
  },
  {
    "time": "22:55",
    "decision": "Transition the coordinated response to monitored follow-up.",
    "evidence": "Corrective actions validated, source recovered, services healthy, owner signoff complete, and no confirmed disclosure in covered evidence.",
    "authority": "Incident Commander and Case Owners",
    "owner": "Case Owners and SOC Quality Owner",
    "alternative": "Close immediately with no monitoring or improvement work.",
    "reason": "Immediate control conditions are corrected while residual uncertainty and follow-up remain.",
    "validation": "Closure criteria, residual risk, monitoring, communications, and improvement owners are documented."
  }
];
const findings = [
  {
    "id": "NBR-IRP-F01",
    "statement": "The fictional supplier administrator retained and used unsupported access after the approved exception expired.",
    "support": "Expired approval, active identity, post-expiration sign-in, service activity, ended project, and supplier-owner confirmation.",
    "alternative": "A legitimate emergency support need may have existed but was not documented.",
    "confidence": "High",
    "potential_impact": "Administrative capability could permit unauthorized service access or change.",
    "confirmed_impact": "Unsupported access and one post-expiration sign-in are confirmed; misuse and disclosure are not.",
    "next": "Keep access removed, review sessions and activity, and require a new narrow time-limited approval for future support."
  },
  {
    "id": "NBR-IRP-F02",
    "statement": "The fictional confidential-storage policy contained an unsupported broad-read condition.",
    "support": "Outside-window change, confidential classification, effective policy state, no approved exception, and successful restoration.",
    "alternative": "A temporary business sharing need may have existed but was not recorded.",
    "confidence": "High",
    "potential_impact": "The resource may have been readable by identities outside the approved group.",
    "confirmed_impact": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "next": "Maintain the approved policy, review covered access evidence, automate drift detection, and preserve source limits."
  },
  {
    "id": "NBR-IRP-F03",
    "statement": "The fictional cloud audit-source gap reduced monitoring assurance during the review window.",
    "support": "Healthy source-health monitor, thirty-eight-minute delivery gap, privileged coverage, compensating records, recovery, and delayed evidence.",
    "alternative": "A nonsecurity delivery failure may explain the outage.",
    "confidence": "High",
    "potential_impact": "Important administrative activity may have been delayed or unavailable during triage.",
    "confirmed_impact": "Visibility was reduced; harmful activity during the gap is unconfirmed.",
    "next": "Improve failover, delay alerting, gap reconstruction, source-coverage documentation, and closure guidance."
  },
  {
    "id": "NBR-IRP-F04",
    "statement": "The fictional payroll-themed message was high-confidence malicious, while user impact remained limited to one confirmed click.",
    "support": "Failed sender checks, unrelated destination, urgent sign-in request, no approved campaign, one click, and no reported data entry.",
    "alternative": "A badly configured legitimate vendor message is possible but not supported.",
    "confidence": "High",
    "potential_impact": "Credential theft and account takeover were possible if the user entered information.",
    "confirmed_impact": "One click is confirmed; credential disclosure and account compromise are unconfirmed.",
    "next": "Complete targeted identity review, user guidance, message removal, related-message search, and detection feedback."
  },
  {
    "id": "NBR-IRP-F05",
    "statement": "The fictional support role had excessive authorization to a manager-only route.",
    "support": "Successful page load, documented role boundary, no approved exception, route correction, and passed role tests.",
    "alternative": "The route documentation may have been outdated, but owner review confirmed the intended restriction.",
    "confidence": "High",
    "potential_impact": "Unauthorized users could view or potentially interact with restricted account settings.",
    "confirmed_impact": "Unauthorized page view is confirmed; modification and wider disclosure are unconfirmed.",
    "next": "Maintain the restriction and review related role mappings and inherited access."
  },
  {
    "id": "NBR-IRP-F06",
    "statement": "The fictional evidence supports four operational cases under one coordinated response rather than one confirmed common-cause incident.",
    "support": "Different identities, systems, services, evidence, owners, actions, timelines, and impact limits.",
    "alternative": "Later evidence may establish a relationship between selected cases.",
    "confidence": "High",
    "potential_impact": "Forced merging could distort declaration, priority, ownership, action, and reporting.",
    "confirmed_impact": "The grouped alert created an initial coordination need but not a proven common cause.",
    "next": "Maintain separate case records and link only evidence-supported relationships."
  },
  {
    "id": "NBR-IRP-F07",
    "statement": "The fictional coordinated response can transition to monitored follow-up after validated control restoration and documented residual uncertainty.",
    "support": "Supplier access removed, storage policy restored, web route restricted, source recovered, identity review completed, services healthy, and owner signoff.",
    "alternative": "New evidence or failed monitoring could require re-escalation.",
    "confidence": "Medium-High",
    "potential_impact": "Residual source-coverage and intent uncertainty may require continued review.",
    "confirmed_impact": "Immediate control conditions are corrected and no confirmed disclosure or takeover appears in covered evidence.",
    "next": "Document closure limits, continue targeted monitoring, and track improvements to completion."
  }
];
const audienceSummaries = [
  {
    "audience": "Technical response team",
    "purpose": "Coordinate fictional evidence collection, case boundaries, actions, blockers, validation, and next technical decisions.",
    "include": "Evidence identifiers, source health, timeline, findings, actions, owners, dependencies, validation, and residual risk.",
    "omit": "Unsupported impact claims and unnecessary private user details.",
    "sample": "Four fictional cases remain coordinated. Access, policy, route, telemetry, and clicked-user validation are the current priorities."
  },
  {
    "audience": "Service owners",
    "purpose": "Support fictional continuity, approved changes, rollback, business tradeoffs, and recovery acceptance.",
    "include": "Service status, dependencies, targeted changes, owner decisions, rollback, tests, and recovery criteria.",
    "omit": "Raw logs that do not change a service decision.",
    "sample": "Services remain available while targeted controls are corrected and validated."
  },
  {
    "audience": "Leadership",
    "purpose": "Support fictional prioritization, risk, resource, service, communication, and closure decisions.",
    "include": "Facts, confirmed impact, possible impact, actions, service status, residual risk, decision request, and next update.",
    "omit": "Technical jargon, raw fields, blame, and certainty beyond evidence.",
    "sample": "Serious control weaknesses were corrected; no confirmed disclosure or takeover appears in current covered evidence."
  },
  {
    "audience": "Clicked user",
    "purpose": "Provide fictional safe guidance, required actions, support path, and next update.",
    "include": "What happened, what not to do, what action is required, support owner, and current impact limits.",
    "omit": "Technical details, other users' information, or unsupported account-compromise claims.",
    "sample": "The message was malicious. Do not revisit it. One click is confirmed, and targeted identity review is complete."
  },
  {
    "audience": "Supplier owner",
    "purpose": "Coordinate fictional access status, approval, business need, evidence request, deadline, and escalation.",
    "include": "Expired exception, current access state, verified need, new request requirements, owner, and deadline.",
    "omit": "Accusations, unrelated case evidence, or unverified contacts.",
    "sample": "The supplier exception expired and access remains removed pending a new narrow approved request."
  },
  {
    "audience": "Portfolio reviewer",
    "purpose": "Demonstrate fictional incident-report structure, analytical reasoning, communication, validation, ethics, and reflection.",
    "include": "Sanitized evidence, diagrams, findings, decisions, summaries, validation, limitations, revision, and safety statement.",
    "omit": "Real organizations, incidents, logs, identities, messages, suppliers, systems, or confidential details.",
    "sample": "This report uses fully invented Northbridge evidence to demonstrate professional defensive reporting."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define purpose and control",
    "detail": "Set the fictional audience, decision need, case scope, status, owner, version, privacy rule, evidence boundary, deadline, and review standard.",
    "output": "Report charter and document-control block."
  },
  {
    "step": "2",
    "title": "Build the evidence register",
    "detail": "Index fictional alerts, logs, identity records, messages, cloud records, web records, source health, decisions, communications, recovery, and validation.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Normalize the timeline",
    "detail": "Separate fictional event, collection, alert, decision, action, communication, recovery, and validation times.",
    "output": "Normalized incident timeline."
  },
  {
    "step": "4",
    "title": "Write findings and impact",
    "detail": "State fictional observations, conclusions, alternatives, confidence, potential impact, confirmed impact, limitations, owners, and next actions.",
    "output": "Findings matrix."
  },
  {
    "step": "5",
    "title": "Document decisions and communications",
    "detail": "Record fictional authority, rationale, alternatives, owners, deadlines, dependencies, rollback, audience, message, approval, and cadence.",
    "output": "Decision and communication logs."
  },
  {
    "step": "6",
    "title": "Record recovery and validation",
    "detail": "Confirm fictional access, policy, route, source, user, service, owner, monitoring, closure, and residual-risk outcomes.",
    "output": "Recovery and closure matrix."
  },
  {
    "step": "7",
    "title": "Tailor and review",
    "detail": "Create fictional technical, service, leadership, user, supplier, and portfolio-safe versions and check accuracy, traceability, privacy, consistency, and audience fit.",
    "output": "Quality-review package."
  },
  {
    "step": "8",
    "title": "Finalize and reflect",
    "detail": "Approve the fictional version, appendices, distribution, follow-up, lessons learned, reflection, and portfolio-safe copy.",
    "output": "Final incident report package."
  }
];
const commonMistakes = [
  "Repeating a fictional alert title as though it were a validated incident finding.",
  "Using one broad case scope that hides separate systems, identities, owners, actions, and impact limits.",
  "Mixing fictional event time with collection, alert, decision, action, or validation time.",
  "Describing possible exposure as confirmed access or confirmed disclosure.",
  "Describing one click as confirmed credential compromise or account takeover.",
  "Treating a source gap as proof of harmful activity or proof that nothing happened.",
  "Declaring or closing a fictional incident solely from severity, outage status, or ticket state.",
  "Treating proposed, authorized, completed, and validated actions as equivalent.",
  "Using the same summary for technical staff, service owners, leadership, users, suppliers, and portfolio reviewers.",
  "Writing vague actions without authority, owner, deadline, dependency, rollback, validation, or residual risk.",
  "Closing after service recovery without validating access, configuration, source health, user state, communication, owner signoff, and monitoring.",
  "Hiding limitations or alternate explanations to make the report sound stronger.",
  "Using inconsistent identifiers, timestamps, status labels, confidence ratings, or impact language across sections.",
  "Copying or lightly editing real incident reports, logs, messages, identities, systems, suppliers, screenshots, employee data, school records, or confidential material."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of a fictional incident report?",
    "choices": [
      "To create an accurate, traceable, decision-ready record of scope, evidence, findings, decisions, actions, communications, validation, limitations, and outcome.",
      "To include every available log.",
      "To prove the worst-case explanation.",
      "To replace owner decisions."
    ],
    "answer": 0,
    "explanation": "An incident report supports review, coordination, accountability, and future improvement."
  },
  {
    "question": "What belongs in a strong fictional executive summary?",
    "choices": [
      "The issue, confirmed facts, unconfirmed impact, actions, service state, residual risk, decision need, and next update.",
      "Every raw technical field.",
      "Only the alert title.",
      "A complete evidence appendix."
    ],
    "answer": 0,
    "explanation": "Leadership needs concise decision-ready information."
  },
  {
    "question": "Why should fictional event time and collection time be separated?",
    "choices": [
      "Delayed collection can create a false sequence if the two times are confused.",
      "They always mean the same thing.",
      "Collection time proves intent.",
      "Only technical appendices need time."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in the evidence process."
  },
  {
    "question": "What is the strongest fictional impact statement for the broad storage policy?",
    "choices": [
      "Possible exposure is supported, while unauthorized access and disclosure remain unconfirmed.",
      "All confidential data was disclosed.",
      "No risk existed because the service stayed online.",
      "The provider caused a breach."
    ],
    "answer": 0,
    "explanation": "The statement preserves both severity and evidence limits."
  },
  {
    "question": "Why should proposed, authorized, completed, and validated actions be recorded separately?",
    "choices": [
      "They represent different stages and should not be treated as equivalent.",
      "They always happen at the same time.",
      "Only completed actions matter.",
      "Validation is optional."
    ],
    "answer": 0,
    "explanation": "A recommendation is not the same as an approved or proven outcome."
  },
  {
    "question": "When can a fictional incident report support closure or monitored transition?",
    "choices": [
      "After evidence, impact, action, access, configuration, source, user, service, communication, owner, residual-risk, and follow-up criteria are validated.",
      "When alerts stop.",
      "When tickets are complete.",
      "When no outage is visible."
    ],
    "answer": 0,
    "explanation": "Closure requires validated outcomes and documented limits."
  },
  {
    "question": "What makes a fictional incident report portfolio-safe?",
    "choices": [
      "It uses fully invented organizations, systems, identities, evidence, dates, identifiers, incidents, actions, and outcomes.",
      "It removes only passwords.",
      "It changes usernames in real logs.",
      "It copies a real report with a fictional title."
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function WritingAnIncidentReportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 3 of 8</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Incident Reporting</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.3 Writing an Incident Report
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Convert fictional incident evidence into a professional report that
            preserves scope, source health, timeline accuracy, findings,
            declaration criteria, ownership, communication, recovery,
            validation, limitations, residual risk, and portfolio safety.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Writing an Incident Report"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge identities, systems, services, messages, suppliers, logs, cloud records, web records, actions, dates, and outcomes.",
            "I will not copy, lightly edit, summarize, upload, or expose real incident reports, credentials, employee records, school records, company logs, private messages, suppliers, cloud identifiers, screenshots, or confidential documents.",
            "I will distinguish fictional observations, conclusions, alternatives, missing evidence, confidence, potential impact, confirmed impact, actions, validation, limitations, and residual risk.",
            "I will distinguish proposed, authorized, completed, failed, rolled-back, and validated actions.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="An Incident Report Is the Record of the Decision System">
          <p className="leading-8">
            A fictional response may include excellent technical work and still
            fail later if the report does not show what was known, when it was
            known, which evidence supported each conclusion, who had authority,
            what action occurred, how communication was approved, what was
            validated, and what uncertainty remained.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak report</p>
              <p className="mt-2 leading-7">Repeat alert titles, merge unrelated cases, mix timestamps, overstate impact, skip authority, list tickets as proof, and hide limitations.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional report</p>
              <p className="mt-2 leading-7">Define scope, cite evidence, normalize time, document status, preserve alternatives, record decisions, tailor communication, validate outcomes, and state residual risk.</p>
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

        <SectionCard eyebrow="Why This Matters" title="Reports Support Handoffs, Review, Accountability, Recovery, and Improvement">
          <p className="leading-8">
            Fictional incident work crosses SOC, identity, application, cloud,
            supplier, service, communications, recovery, leadership, and
            portfolio audiences. A complete report allows each reader to
            understand the same facts while receiving the detail needed for a
            specific decision.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Scope–Evidence–Finding–Decision–Validation Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Scope", "Which fictional systems, identities, services, suppliers, data, time window, evidence, authority, privacy rules, and exclusions apply?"],
              ["Evidence", "Which fictional sources, timestamps, source-health notes, owners, relevance, and limitations support the report?"],
              ["Finding", "Which fictional observation, conclusion, alternative, confidence, potential impact, confirmed impact, and limitation are supported?"],
              ["Decision", "Which fictional declaration, action, owner, authority, rationale, deadline, dependency, rollback, and communication follow?"],
              ["Validation", "Which fictional access, configuration, source, user, service, communication, owner, residual-risk, and closure evidence proves the outcome?"],
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
          <h2 className="mt-2 text-2xl font-bold text-white">Incident Reporting and Case Documentation Terms</h2>
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Report Architecture</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Twelve Sections of a Fictional Incident Report</h2>
          <div className="mt-6 grid gap-5">
            {incidentSections.map((item) => (
              <article key={item.section} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.section}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Include", item.include],
                    ["Avoid", item.avoid],
                    ["Quality standard", item.quality],
                  ].map(([label, detail]) => (
                    <div key={`${item.section}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Sixteen Fictional Incident Records</h2>
          <div className="mt-6 grid gap-5">
            {evidenceRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.source}</span>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">{item.health}</span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">{item.record}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Event time", item.event_time],
                    ["Collection time", item.collection_time],
                    ["Owner", item.owner],
                    ["Relevance", item.relevance],
                    ["Evidence limit", item.limit],
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Decision Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Incident Decisions</h2>
          <div className="mt-6 grid gap-5">
            {decisionRecords.map((item) => (
              <article key={`${item.time}-${item.decision}`} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.time}</span>
                  <h3 className="text-lg font-black text-white">{item.decision}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Authority", item.authority],
                    ["Owner", item.owner],
                    ["Alternative", item.alternative],
                    ["Rationale", item.reason],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div key={`${item.time}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Audience Summaries</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Report Audiences</h2>
          <div className="mt-6 grid gap-5">
            {audienceSummaries.map((item) => (
              <article key={item.audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Include", item.include],
                    ["Omit", item.omit],
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Reporting Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Charter to Final Report</h2>
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
          title="Fake Northbridge Incident Report Dashboard"
          subtitle="Training dashboard for fictional case documentation only."
          metrics={[
            { label: "Operational cases", value: "4", note: "Supplier access, cloud policy and telemetry, phishing, and web authorization remain separate evidence-based cases." },
            { label: "Validated corrective actions", value: "5", note: "Supplier access, storage policy, web route, audit source, and clicked-user identity review reached validated states." },
            { label: "Confirmed disclosure or takeover", value: "0", note: "Serious control weaknesses and one click are confirmed, while disclosure and account takeover remain unconfirmed." },
          ]}
        />

        <FakeAlertCard
          title="Draft Incident Report Overstates Confidential Data Exposure"
          severity="High"
          time="2:22 PM"
          source="Fake Northbridge Report Quality Console"
          details="A fictional draft states that confidential data was exposed, although the supplied evidence confirms only a broad-read policy, limited source coverage, and no covered unauthorized storage read."
          recommendation="Correct the impact language, cite the exact evidence, document source coverage and limitations, preserve possible exposure, identify owners and validation, and complete peer review before distribution."
        />

        <FakeLogPanel
          title="Fake Incident Report Timeline"
          logs={[
            "17:00 IAM supplier-exception='expired'",
            "18:42 AUTH supplier-signin='success'",
            "18:43 APP supplier-action='status-view'",
            "20:11 CLOUD storage-policy='broad-read'",
            "20:46 CLOUD covered-read='none-observed'",
            "21:02 SOURCE cloud-audit='delivery-stopped'",
            "21:14 EMAIL payroll-message='malicious'",
            "21:18 USER payroll-link='clicked'",
            "21:26 WEB support-role='manager-page-view'",
            "21:35 CASE operational-count='4'",
            "21:45 IAM supplier-access='removal-approved'",
            "21:48 CLOUD policy='rollback-approved'",
            "22:02 WEB route='restriction-approved'",
            "22:25 SOURCE cloud-audit='recovered'",
            "22:50 VALIDATION controls='passed'",
            "22:55 STATUS monitored-followup='approved'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Incident Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Seven Fictional Findings with Impact Limits</h2>
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
                    ["Potential impact", item.potential_impact],
                    ["Confirmed impact", item.confirmed_impact],
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
          title="Does the Broad Storage Policy Prove Confidential Data Was Disclosed?"
          evidence={[
            "The fictional storage policy contained an unsupported broad-read condition.",
            "The resource contained fictional confidential data.",
            "The policy was restored to the approved identity group.",
            "A cloud audit source experienced a temporary delivery gap.",
            "No covered unauthorized storage read is observed.",
            "The available sources do not represent every possible access path.",
          ]}
          question="Which incident-report sentence is strongest?"
          options={[
            "A serious access-control weakness and possible exposure are confirmed; unauthorized access and disclosure remain unconfirmed because source coverage is limited.",
            "Confidential data was definitely disclosed.",
            "No unauthorized access occurred anywhere.",
            "The event was harmless because the policy was restored.",
          ]}
          bestAnswer={0}
          explanation="The strongest sentence communicates control severity, current impact evidence, source limits, and residual uncertainty."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Fictional Incident Report">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Write the Complete Northbridge Fictional Incident Report">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Evidence, Timeline, Findings, Decisions, Communications, Recovery, and Closure</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete professional incident report and portfolio-safe copy.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Document control, case identifier, version, status, owner, author role, reviewer role, classification, and audience.</li>
                <li>Executive summary with facts, confirmed and unconfirmed impact, actions, service state, residual risk, and next decision.</li>
                <li>Scope, exclusions, declaration criteria, methods, privacy rules, assumptions, and evidence register.</li>
                <li>Normalized timeline separating event, collection, alert, decision, action, communication, recovery, and validation time.</li>
                <li>Findings with observations, conclusions, alternatives, confidence, potential impact, confirmed impact, limitations, owners, and recommendations.</li>
                <li>Decision, action, communication, recovery, and validation registers with authority, deadlines, dependencies, rollback, and status.</li>
                <li>Closure or transition criteria, monitoring, owner signoff, residual risk, lessons learned, and improvement actions.</li>
                <li>Technical, service, leadership, user, supplier, and portfolio-safe summaries plus reflection and quality review.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Build the report only from fictional evidence. Do not copy, lightly
            edit, expose, or recreate real incident reports, credentials,
            identities, logs, messages, systems, suppliers, cloud resources,
            screenshots, employee records, school records, or confidential
            organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Requests a Stronger Statement about Data Exposure"
          scenario="The fictional report already states that possible exposure is confirmed while unauthorized access and disclosure remain unconfirmed."
          choices={[
            { label: "Choice A", response: "Keep the evidence-limited statement, explain source coverage and remaining uncertainty, and state which monitoring or validation could change confidence.", outcome: "Best reporting choice. Accuracy is more valuable than dramatic certainty.", tone: "best" },
            { label: "Choice B", response: "Change the report to say confidential data was disclosed.", outcome: "Unsupported. The supplied evidence does not confirm disclosure.", tone: "risk" },
            { label: "Choice C", response: "Remove all mention of possible exposure.", outcome: "Misleading. The broad policy created a serious risk condition.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="All Corrective Tickets Are Marked Complete"
          scenario="The fictional supplier access, cloud policy, and web route were changed, but source health, sessions, user state, service function, owner signoff, communication, and residual risk still require confirmation."
          choices={[
            { label: "Choice A", response: "Keep the report in recovery or monitored transition until all required validation evidence and residual-risk statements are complete.", outcome: "Best closure choice. Ticket completion does not replace outcome validation.", tone: "best" },
            { label: "Choice B", response: "Close the incident immediately because every ticket is complete.", outcome: "Premature. The actual defensive state is not fully proven.", tone: "risk" },
            { label: "Choice C", response: "Never close the report because complete certainty is impossible.", outcome: "Weak. Evidence-based closure can preserve residual uncertainty and monitoring.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Writing an Incident Report Checklist"
          items={[
            "I can define a fictional report purpose, audience, case scope, status, owner, evidence boundary, privacy rule, and decision need.",
            "I can build a fictional evidence register with identifiers, timestamps, source health, ownership, relevance, and limitations.",
            "I can separate fictional event, collection, alert, decision, action, communication, recovery, and validation times.",
            "I can distinguish fictional observations, conclusions, alternatives, confidence, potential impact, confirmed impact, limitations, and residual risk.",
            "I can document fictional declaration criteria, authority, owners, deadlines, dependencies, rollback, status, and validation.",
            "I can tailor fictional technical, service, leadership, user, supplier, recovery, and portfolio-safe summaries.",
            "I can validate fictional access, configuration, source health, user state, service function, communication, owner signoff, monitoring, and closure.",
            "I can complete fictional accuracy, traceability, privacy, consistency, unsupported-claim, audience-fit, and version reviews.",
            "I can explain fictional lessons learned, improvements, reflection, and follow-up ownership.",
            "I will never expose or recreate real credentials, identities, reports, logs, messages, systems, suppliers, cloud resources, screenshots, employee data, school records, incidents, or confidential information.",
          ]}
        />

        <MiniQuiz title="I17.3 Mini Quiz: Writing an Incident Report" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Northbridge Incident Report Package. Include document control, case identifier, version, status, executive summary, scope, exclusions, declaration criteria, methods, privacy limits, evidence register, normalized timeline, findings, alternatives, confidence, impact statements, decision register, action register, communication log, recovery plan, validation, closure criteria, residual risk, lessons learned, improvement actions, technical summary, service summary, leadership summary, user guidance, supplier communication, appendices, quality review, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, identities, evidence, dates, identifiers, incidents, actions, and outcomes.",
            "Make every important claim traceable to evidence and source-health notes.",
            "Do not turn possible exposure into confirmed access or disclosure.",
            "Show why completed actions, validated outcomes, closure, and zero residual risk are different ideas.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "An incident report is the durable record of evidence, decisions, actions, communication, validation, and outcome.",
            "Scope, timestamps, source health, case boundaries, and impact limits determine what the report may claim.",
            "Observations, conclusions, alternatives, potential impact, confirmed impact, and residual risk are different report elements.",
            "Proposed, authorized, completed, failed, rolled-back, and validated actions should remain separate.",
            "Different audiences need different summaries while the underlying facts stay consistent.",
            "Closure requires validated outcomes, owner signoff, communication, residual-risk statements, and follow-up.",
            "Portfolio reports must be fully fictional and should never expose or recreate real defensive records.",
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