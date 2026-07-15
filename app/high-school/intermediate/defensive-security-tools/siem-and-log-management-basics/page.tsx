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
const modulePath = `${trackPath}/defensive-security-tools`;
const previousLesson = `${modulePath}/vulnerability-scanners-and-configuration-assessment`;
const nextLesson = `${modulePath}/email-web-and-dns-security-controls`;

const objectives = [
  "Explain how SIEM and log-management platforms collect, normalize, retain, search, correlate, alert, and display fictional security evidence.",
  "Evaluate fictional SIEM alerts using source data, fields, time windows, rule logic, thresholds, exclusions, data freshness, asset context, owner context, and evidence limitations.",
  "Distinguish collection, parsing, normalization, enrichment, correlation, alerting, case management, retention, reporting, and tuning.",
  "Identify false positives, false negatives, missing sources, delayed ingestion, parsing failures, duplicate events, stale enrichment, and rule-quality problems.",
  "Create a professional fictional SIEM Rule Review and Validation Report with confirmed facts, confidence, impact, ownership, tuning, testing, rollback, monitoring, and residual risk.",
];

const vocabulary = [
  ["SIEM", "Security information and event management: a platform that centralizes, normalizes, searches, correlates, alerts on, and reports security-relevant events."],
  ["Log management", "The collection, storage, retention, search, and maintenance of event records from many fictional systems and applications."],
  ["Collector", "A service, agent, gateway, connector, or process that receives or forwards events into a monitoring platform."],
  ["Parser", "Logic that separates raw event text or fields into structured values such as user, device, source, destination, action, and result."],
  ["Normalization", "Mapping differently formatted source fields into a consistent comparison model."],
  ["Enrichment", "Adding asset, identity, ownership, sensitivity, location, threat, change, or business context to an event."],
  ["Correlation rule", "Logic that combines one or more conditions across fields, sources, entities, counts, and time windows."],
  ["Threshold", "The number, rate, amount, or condition that must be reached before a rule triggers."],
  ["Suppression", "A controlled method for reducing duplicate or expected alert noise under documented conditions."],
  ["False positive", "An alert that appears concerning but is explained by expected or benign activity after evidence-based review."],
  ["False negative", "Relevant activity that is not detected because of missing data, weak logic, exclusions, thresholds, or visibility gaps."],
  ["Retention", "The approved period during which original and normalized events remain available for review."],
];

const siemPipeline = [
  {
    stage: "1. Source generation",
    purpose:
      "A fictional identity platform, endpoint, server, application, firewall, proxy, DNS resolver, cloud service, or ticket system creates an event.",
    evidence:
      "Original timestamp, provider, message, fields, event ID, host, user, application, action, result, and source-specific context.",
    risk:
      "The source may not record every action or may use incomplete, local, delayed, or inconsistent fields.",
  },
  {
    stage: "2. Collection",
    purpose:
      "An agent, connector, forwarder, API, gateway, or collector receives and transports the event.",
    evidence:
      "Collection time, connector, status, last check-in, queue, dropped-event count, source health, and transport state.",
    risk:
      "Offline devices, broken connectors, queue delays, permissions, or network failures can create gaps.",
  },
  {
    stage: "3. Parsing",
    purpose:
      "The platform extracts structured fields from the original event format.",
    evidence:
      "Parsed user, device, source, destination, action, event type, process, service, method, path, response, and identifier fields.",
    risk:
      "A parser update or format change can misplace, omit, or mislabel important fields.",
  },
  {
    stage: "4. Normalization",
    purpose:
      "Different source fields are mapped into a common schema for comparison and search.",
    evidence:
      "Normalized user, host, source address, destination address, outcome, category, severity, process, application, and time.",
    risk:
      "Overly broad mapping can hide source-specific meaning or merge unlike events.",
  },
  {
    stage: "5. Enrichment",
    purpose:
      "The platform adds fictional inventory, identity, owner, sensitivity, role, location, change, and business context.",
    evidence:
      "Asset criticality, owner, department, managed state, privilege, known application, approved change, and expected baseline.",
    risk:
      "Stale or incorrect enrichment can misprioritize or misattribute activity.",
  },
  {
    stage: "6. Correlation and alerting",
    purpose:
      "Rules compare events, counts, sequences, entities, and time windows to create an alert.",
    evidence:
      "Rule name, version, trigger logic, events matched, entities, threshold, window, severity, confidence, and suppression state.",
    risk:
      "Weak logic can create false positives, while missing fields or exclusions can create false negatives.",
  },
  {
    stage: "7. Investigation and case management",
    purpose:
      "Analysts review alerts, preserve evidence, build timelines, assign owners, record findings, and track actions.",
    evidence:
      "Case notes, alert links, source records, assignments, decisions, confidence, impact, action, validation, and closure.",
    risk:
      "Poor documentation can hide assumptions, evidence gaps, and unresolved risk.",
  },
  {
    stage: "8. Retention and reporting",
    purpose:
      "The platform stores events and produces dashboards, trends, compliance evidence, and operational reports.",
    evidence:
      "Retention period, archive state, search availability, source coverage, alert trends, case outcomes, and reporting metrics.",
    risk:
      "Short retention, selective dashboards, or missing historical context can weaken later review.",
  },
];

const sourceCoverage = [
  {
    source: "Identity and authentication",
    usefulFor:
      "Sign-ins, failures, MFA, account changes, lockouts, sessions, privilege, conditional access, and identity lifecycle.",
    keyFields:
      "User, device, application, source, destination, result, reason, MFA, session ID, privilege, policy, and time.",
    gap:
      "A successful sign-in does not prove physical identity or safe later activity.",
  },
  {
    source: "Endpoint and EDR",
    usefulFor:
      "Processes, files, services, users, devices, alerts, prevention actions, network connections, and protection state.",
    keyFields:
      "Device, user, process, parent, path, publisher, file, service, action, destination, rule, and time.",
    gap:
      "Agent health, exclusions, unsupported event types, and offline periods can reduce visibility.",
  },
  {
    source: "System and operating system",
    usefulFor:
      "Service state, updates, permissions, startup, resources, local accounts, errors, recovery, and device health.",
    keyFields:
      "Host, provider, event ID, service, account, path, action, result, message, and time.",
    gap:
      "A system event may describe a symptom rather than the root cause.",
  },
  {
    source: "Application",
    usefulFor:
      "Requests, users, sessions, jobs, errors, dependencies, files, database actions, exports, and recovery.",
    keyFields:
      "Application, user, session, request ID, path, action, result, response, duration, and time.",
    gap:
      "Applications often use local naming, custom fields, or incomplete user context.",
  },
  {
    source: "Firewall and network",
    usefulFor:
      "Connections, source, destination, port, protocol, rule, action, state, bytes, duration, direction, and zones.",
    keyFields:
      "Source, destination, port, protocol, rule, action, state, zone, bytes, duration, and time.",
    gap:
      "Shared gateways, translation, and proxies can hide the original client.",
  },
  {
    source: "DNS and proxy",
    usefulFor:
      "Name resolution, web requests, methods, paths, responses, categories, users, destinations, and request IDs.",
    keyFields:
      "Client, user, query, answer, destination, method, host, path, response, category, request ID, and time.",
    gap:
      "DNS does not prove connection, and proxy metadata may not reveal complete content or intent.",
  },
  {
    source: "Cloud and SaaS",
    usefulFor:
      "Resource changes, identities, access decisions, storage events, administrative actions, service health, and policy state.",
    keyFields:
      "Account, resource, identity, action, region, result, source, policy, role, and time.",
    gap:
      "Cloud evidence may be split across services, accounts, regions, and control planes.",
  },
  {
    source: "Change, inventory, and ticketing",
    usefulFor:
      "Owner, asset role, maintenance, deployment, approval, expected behavior, exception, rollback, validation, and business impact.",
    keyFields:
      "Asset, owner, requester, approver, change ID, schedule, purpose, expected result, status, and time.",
    gap:
      "Human-entered records may be stale, approximate, or different from the technical state.",
  },
];

const ruleComponents = [
  {
    component: "Purpose",
    question:
      "What fictional defensive question should the rule answer, and who owns the decision?",
    weakDesign:
      "A vague title such as suspicious activity with no defined outcome.",
  },
  {
    component: "Data sources",
    question:
      "Which identity, endpoint, system, application, network, web, cloud, inventory, or change sources are required?",
    weakDesign:
      "The rule assumes a source exists but does not monitor source health.",
  },
  {
    component: "Fields",
    question:
      "Which normalized and source-specific fields are required for the logic?",
    weakDesign:
      "The rule depends on a field that is often missing or incorrectly parsed.",
  },
  {
    component: "Entities",
    question:
      "Which users, devices, applications, processes, sessions, requests, addresses, domains, or tickets connect the events?",
    weakDesign:
      "The rule groups unrelated events by time alone.",
  },
  {
    component: "Conditions",
    question:
      "Which exact outcomes, categories, values, sequences, counts, or state changes trigger the rule?",
    weakDesign:
      "The logic uses broad terms without source-specific meaning.",
  },
  {
    component: "Time window",
    question:
      "How close together must the events occur, and which timestamp is used?",
    weakDesign:
      "The window ignores clock offset, ingestion delay, or delayed batches.",
  },
  {
    component: "Threshold",
    question:
      "How many events, users, devices, destinations, or failures are required?",
    weakDesign:
      "The threshold is copied from another environment without baseline testing.",
  },
  {
    component: "Exclusions",
    question:
      "Which exact approved patterns should be excluded, and how will high-risk coverage remain protected?",
    weakDesign:
      "A broad user, device, process, or application exclusion hides unrelated activity.",
  },
  {
    component: "Severity and priority",
    question:
      "How do privilege, asset criticality, exposure, confidence, and business impact affect the alert?",
    weakDesign:
      "Every trigger receives the same critical severity.",
  },
  {
    component: "Validation and owner",
    question:
      "Who reviews the alert, what evidence is required, and how will the rule be tested and monitored?",
    weakDesign:
      "The rule is enabled without positive, negative, and false-positive testing.",
  },
];

const alertOutcomes = [
  {
    outcome: "True positive",
    support:
      "The fictional rule triggered correctly and source evidence confirms the concerning pattern under the intended logic.",
    response:
      "Preserve evidence, assess scope and impact, assign the correct owner, take authorized action, validate, monitor, and document residual risk.",
  },
  {
    outcome: "Benign true positive",
    support:
      "The rule correctly detected the defined behavior, but the behavior is approved, expected, or operationally explained.",
    response:
      "Document the context, consider narrow tuning if repeated noise exists, and preserve high-risk coverage.",
  },
  {
    outcome: "False positive",
    support:
      "The alert does not represent the intended pattern because of parser error, stale enrichment, incorrect threshold, wrong asset mapping, or flawed logic.",
    response:
      "Preserve the evidence, correct the exact data or rule issue, test, monitor, and avoid broad suppression.",
  },
  {
    outcome: "False negative risk",
    support:
      "Missing sources, parser failures, exclusions, delayed ingestion, unsupported fields, or thresholds could hide relevant activity.",
    response:
      "Document the visibility gap, restore coverage, backfill if authorized, test the rule, and monitor source health.",
  },
  {
    outcome: "Duplicate alert",
    support:
      "The same fictional event or entity sequence creates multiple alerts because of repeated ingestion, overlapping rules, or case grouping.",
    response:
      "Preserve one complete evidence chain, fix duplication narrowly, and retain distinct alerts for genuinely different activity.",
  },
  {
    outcome: "Evidence-incomplete",
    support:
      "The alert exists, but one or more required source events, fields, entities, timestamps, owners, or rule details are missing.",
    response:
      "State confirmed facts, identify the gaps, lower confidence, and request authorized supporting evidence.",
  },
];

const evidenceMatrix = [
  {
    source: "Raw source event",
    supports:
      "What the originating fictional system recorded, including original timestamp, provider, message, and source-specific fields.",
    limitation:
      "May not contain normalized, business, ownership, or cross-source context.",
  },
  {
    source: "Normalized event",
    supports:
      "How the SIEM mapped source fields into a common schema for search and correlation.",
    limitation:
      "Mapping can hide source-specific meaning or contain parser errors.",
  },
  {
    source: "Alert record",
    supports:
      "Which rule version triggered, which events matched, the threshold, window, entities, severity, and suppression state.",
    limitation:
      "Does not automatically prove the final classification or impact.",
  },
  {
    source: "Rule configuration",
    supports:
      "The active data sources, fields, entities, conditions, thresholds, exclusions, severity, and owner.",
    limitation:
      "The active rule may differ from documentation or another version may be deployed.",
  },
  {
    source: "Collector and parser health",
    supports:
      "Whether the source is connected, current, parsed, delayed, duplicated, or dropping events.",
    limitation:
      "Healthy status does not prove complete event coverage.",
  },
  {
    source: "Asset and identity enrichment",
    supports:
      "Owner, role, privilege, criticality, location, application, managed state, and sensitivity.",
    limitation:
      "Stale enrichment can misattribute or misprioritize an alert.",
  },
  {
    source: "Change and owner context",
    supports:
      "Approved maintenance, deployment, expected behavior, exception, rollback, validation, and business purpose.",
    limitation:
      "Documentation may be delayed or differ from the technical sequence.",
  },
  {
    source: "Case and validation record",
    supports:
      "Analyst findings, confidence, action, owner, impact, tuning, testing, monitoring, and closure.",
    limitation:
      "Case notes are interpretations that must remain linked to original evidence.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the alert question",
    detail:
      "Identify the fictional rule, entities, data sources, time window, owner, and decision the alert should support.",
  },
  {
    step: "2",
    title: "Preserve source and SIEM evidence",
    detail:
      "Keep raw events, normalized fields, alert record, rule version, collector state, parser state, and enrichment.",
  },
  {
    step: "3",
    title: "Validate coverage and timing",
    detail:
      "Check source health, data freshness, dropped events, duplicates, clock offset, ingestion delay, and retention.",
  },
  {
    step: "4",
    title: "Reconstruct the rule trigger",
    detail:
      "Confirm which events, fields, entities, sequence, threshold, exclusions, and time window caused the alert.",
  },
  {
    step: "5",
    title: "Classify and tune",
    detail:
      "Choose true positive, benign true positive, false positive, false-negative risk, duplicate, or evidence-incomplete.",
  },
  {
    step: "6",
    title: "Test and monitor",
    detail:
      "Use fictional positive and negative cases, preserve rollback, monitor alert volume and missed coverage, and document residual risk.",
  },
];


const ruleReviewExamples = [
  {
    rule: "Repeated sign-in failures followed by success",
    sources:
      "Identity sign-in, MFA, application, device inventory, and support records.",
    logic:
      "Five failures for the same user and application within ten minutes, followed by one success.",
    expectedPattern:
      "A stale saved credential after an approved password reset can create failures before the user updates the application.",
    highRiskContext:
      "New device, privileged account, denied MFA, unusual time, or unexplained source.",
    tuning:
      "Exclude only the exact approved password-reset workflow when owner and application evidence agree; keep coverage for new devices and privileged accounts.",
  },
  {
    rule: "Service restarts above baseline",
    sources:
      "System, application, change, endpoint, and service-owner records.",
    logic:
      "Three or more restarts for the same service within fifteen minutes.",
    expectedPattern:
      "Approved deployment testing or documented automatic recovery can create repeated restarts.",
    highRiskContext:
      "Unknown parent process, unapproved time, privileged change, new persistence, or unresolved application impact.",
    tuning:
      "Use deployment identifiers and owner-approved maintenance windows rather than excluding the service completely.",
  },
  {
    rule: "Large outbound transfer",
    sources:
      "Firewall, proxy, flow, endpoint process, application, destination, owner, and backup records.",
    logic:
      "Outbound bytes exceed the fictional baseline for one device within thirty minutes.",
    expectedPattern:
      "Scheduled backup, approved software distribution, or report export may explain the volume.",
    highRiskContext:
      "Unknown process, unapproved destination, privileged account, sensitive asset, unusual time, or no business owner.",
    tuning:
      "Use expected application, destination, schedule, and owner context while preserving alerts for new or unexplained combinations.",
  },
  {
    rule: "Endpoint alert with network activity",
    sources:
      "EDR, endpoint process, DNS, firewall, proxy, inventory, and change records.",
    logic:
      "A medium- or high-severity endpoint alert followed by a new destination within five minutes.",
    expectedPattern:
      "Approved software installation may create a new process and contact an approved update service.",
    highRiskContext:
      "Unknown publisher, user-writable path, persistence, unexpected destination, privileged context, or containment failure.",
    tuning:
      "Match exact approved package and destination identifiers; do not suppress all alerts from the application folder.",
  },
  {
    rule: "Administrative role assignment",
    sources:
      "Identity, cloud, change, approval, account lifecycle, and owner records.",
    logic:
      "A privileged role is assigned to an account outside the normal automated workflow.",
    expectedPattern:
      "An emergency access test or approved temporary role may be valid.",
    highRiskContext:
      "No ticket, no owner, long duration, inactive account, unusual location, or immediate sensitive action.",
    tuning:
      "Enrich with approval and expiration, but retain alerts when any required governance field is missing.",
  },
  {
    rule: "Web error spike",
    sources:
      "Web server, application, proxy, deployment, monitoring, and owner records.",
    logic:
      "The rate of fictional server-error responses exceeds the baseline for ten minutes.",
    expectedPattern:
      "A known deployment test or temporary dependency problem can create a short spike.",
    highRiskContext:
      "Unexpected paths, many clients, unusual methods, account failures, or persistent impact after rollback.",
    tuning:
      "Separate approved test identifiers and retain coverage for unexplained paths, clients, and continued errors.",
  },
];

const healthChecks = [
  {
    check: "Source connectivity",
    question:
      "Are all required fictional sources connected and sending events within the expected interval?",
    gap:
      "A disconnected source can make a rule appear quiet even when relevant activity occurs.",
  },
  {
    check: "Data freshness",
    question:
      "How long has it been since each source produced and the SIEM received an event?",
    gap:
      "Delayed ingestion can create false sequence, late alerts, or incomplete cases.",
  },
  {
    check: "Parser quality",
    question:
      "Are required fields populated correctly after recent source or format changes?",
    gap:
      "A parser failure can move users, actions, addresses, or results into the wrong fields.",
  },
  {
    check: "Normalization accuracy",
    question:
      "Do common fields preserve the original source meaning across identity, endpoint, network, application, and cloud events?",
    gap:
      "Overly broad normalization can combine different outcomes or hide source-specific context.",
  },
  {
    check: "Duplicate control",
    question:
      "Are events being received once, or are multiple connectors and retries creating duplicates?",
    gap:
      "Duplicate events can inflate thresholds and alert volume.",
  },
  {
    check: "Enrichment freshness",
    question:
      "Are owner, role, privilege, criticality, location, device state, and application mappings current?",
    gap:
      "Stale context can raise or lower priority incorrectly.",
  },
  {
    check: "Rule version",
    question:
      "Is the documented fictional rule version the same one currently deployed?",
    gap:
      "Testing one version while another is active makes validation unreliable.",
  },
  {
    check: "Retention and search",
    question:
      "Can reviewers access the original and normalized events for the full required time window?",
    gap:
      "Short retention or archive delays can prevent historical reconstruction.",
  },
  {
    check: "Alert routing",
    question:
      "Does the alert reach the correct fictional queue, owner, severity, and case workflow?",
    gap:
      "A valid alert can remain unreviewed if routing or assignment is broken.",
  },
  {
    check: "Suppression state",
    question:
      "Are active exclusions, maintenance windows, deduplication, and suppression rules documented and tested?",
    gap:
      "Broad suppression can hide relevant activity and create false-negative risk.",
  },
];

const testingPlan = [
  {
    test: "Positive test",
    purpose:
      "Confirm that a supplied fictional event sequence matching the intended rule creates one complete alert.",
    success:
      "Required sources and fields are present, the correct entities correlate, the intended severity applies, and the correct owner receives the case.",
  },
  {
    test: "Negative test",
    purpose:
      "Confirm that a similar but nonmatching fictional sequence does not trigger.",
    success:
      "Expected benign variation remains below threshold or fails the required condition without weakening high-risk coverage.",
  },
  {
    test: "Expected-activity test",
    purpose:
      "Confirm that an approved maintenance or deployment pattern is handled as documented.",
    success:
      "The exact expected identifier is tuned or enriched while unknown users, devices, processes, and destinations remain visible.",
  },
  {
    test: "Missing-field test",
    purpose:
      "Determine how the rule behaves when one required normalized field is absent.",
    success:
      "The rule documents the coverage limitation, creates an evidence-gap signal if appropriate, and does not silently misclassify the event.",
  },
  {
    test: "Delayed-ingestion test",
    purpose:
      "Evaluate a fictional source batch arriving after the normal correlation window.",
    success:
      "The team understands whether the rule alerts late, misses the sequence, or requires a separate data-quality control.",
  },
  {
    test: "Duplicate-event test",
    purpose:
      "Confirm that repeated ingestion of the same fictional event does not inflate thresholds.",
    success:
      "Deduplication preserves one evidence record and avoids duplicate alerts without hiding distinct events.",
  },
  {
    test: "High-risk variation",
    purpose:
      "Confirm that a privileged, new-device, unusual-time, or unexplained variation still triggers after tuning.",
    success:
      "The rule preserves the most important defensive coverage.",
  },
  {
    test: "Rollback test",
    purpose:
      "Confirm that the previous fictional rule version can be restored if alerting, routing, or coverage changes unexpectedly.",
    success:
      "Rollback is documented, authorized, fast, and validated.",
  },
];

const timeline = [
  {
    time: "07:55:00",
    source: "Change ticket",
    event:
      "Approved fictional password reset begins for training-user-84.",
    meaning:
      "Provides owner, user, device, application, expected retry pattern, and support context.",
  },
  {
    time: "07:57:12",
    source: "Identity",
    event:
      "Password reset completes successfully.",
    meaning:
      "Confirms the account credential changed.",
  },
  {
    time: "07:58:03",
    source: "Application",
    event:
      "Mail client reports stored credential rejected on training-laptop-84.",
    meaning:
      "Supports a stale saved credential explanation.",
  },
  {
    time: "07:58:05",
    source: "Identity",
    event:
      "First sign-in failure appears for training-user-84 from the expected laptop.",
    meaning:
      "Corroborates the application failure.",
  },
  {
    time: "07:58:40",
    source: "Identity",
    event:
      "Fifth sign-in failure appears within the ten-minute rule window.",
    meaning:
      "Meets the fictional correlation threshold.",
  },
  {
    time: "07:58:42",
    source: "SIEM",
    event:
      "Repeated Authentication Failure rule creates one medium-severity alert.",
    meaning:
      "Confirms rule trigger but not final cause.",
  },
  {
    time: "07:59:10",
    source: "Support",
    event:
      "User reports the mail client still contains the old password.",
    meaning:
      "Adds human context that agrees with the technical evidence.",
  },
  {
    time: "08:00:00",
    source: "Application",
    event:
      "Stored credential is updated.",
    meaning:
      "Shows the expected corrective action.",
  },
  {
    time: "08:00:04",
    source: "Identity",
    event:
      "Sign-in succeeds from the expected laptop and application.",
    meaning:
      "Supports recovery after the credential update.",
  },
  {
    time: "08:00:08",
    source: "MFA",
    event:
      "MFA challenge completes for the same fictional session.",
    meaning:
      "Adds corroborating authentication context.",
  },
  {
    time: "08:05:00",
    source: "Monitoring",
    event:
      "No additional failures occur.",
    meaning:
      "Supports the expected stale-credential conclusion.",
  },
  {
    time: "08:10:00",
    source: "Rule review",
    event:
      "Alert is classified as a benign true positive; tuning proposal uses the exact approved reset ticket and expected application.",
    meaning:
      "Reduces repeated known noise without excluding unexplained or high-risk failure patterns.",
  },
];

const mistakes = [
  "Treating a SIEM dashboard or alert title as the original evidence.",
  "Assuming every source is connected, current, complete, and parsed correctly.",
  "Ignoring the difference between event time, collection time, ingestion time, and alert time.",
  "Correlating events by time alone without shared users, devices, processes, sessions, requests, addresses, or other identifiers.",
  "Using stale asset, identity, owner, privilege, or criticality enrichment.",
  "Setting thresholds without reviewing the fictional environment’s baseline and expected workflows.",
  "Creating broad exclusions for users, devices, applications, processes, or maintenance windows.",
  "Tuning false positives without testing high-risk variations and false-negative risk.",
  "Ignoring duplicates, dropped events, parser failures, delayed batches, and missing normalized fields.",
  "Deploying a new rule version without preserved configuration, testing, approval, rollback, and monitoring.",
  "Closing an alert without linking the final finding to raw source records and validation evidence.",
  "Publishing real logs, queries, rules, dashboards, users, devices, addresses, domains, screenshots, or internal monitoring details.",
];

const quizQuestions = [
  {
    question:
      "What is the primary purpose of a SIEM?",
    choices: [
      "To centralize, normalize, search, correlate, alert on, retain, and report security-relevant events.",
      "To prove every alert is malicious.",
      "To replace all original log sources.",
      "To make every defensive decision automatically.",
    ],
    answer: 0,
    explanation:
      "A SIEM improves visibility and correlation but still depends on source quality and human validation.",
  },
  {
    question:
      "What does a SIEM alert directly prove?",
    choices: [
      "The deployed rule matched the recorded events, fields, entities, threshold, and time-window conditions.",
      "The system is definitely compromised.",
      "The alert severity equals business impact.",
      "Every source event is complete.",
    ],
    answer: 0,
    explanation:
      "The alert proves a rule trigger, not the final classification or impact.",
  },
  {
    question:
      "Why should raw source events be preserved?",
    choices: [
      "They allow reviewers to verify parsing, normalization, correlation, and interpretation.",
      "They make enrichment unnecessary.",
      "They remove all timing differences.",
      "They guarantee the rule is correct.",
    ],
    answer: 0,
    explanation:
      "Original evidence is needed to audit how the SIEM transformed and used the event.",
  },
  {
    question:
      "What can a parser failure cause?",
    choices: [
      "Required fields may be missing, misplaced, or mislabeled, weakening searches and rules.",
      "The source event becomes automatically malicious.",
      "Retention becomes unlimited.",
      "Asset ownership is corrected automatically.",
    ],
    answer: 0,
    explanation:
      "Correlation quality depends on accurate structured fields.",
  },
  {
    question:
      "What is a benign true positive?",
    choices: [
      "The rule correctly detects its intended behavior, but the activity is approved or expected after review.",
      "The rule fails to trigger.",
      "The alert is caused only by duplicate data.",
      "The source is disconnected.",
    ],
    answer: 0,
    explanation:
      "The detection is technically correct even though the behavior is not a security incident.",
  },
  {
    question:
      "What is the strongest approach to tuning a noisy rule?",
    choices: [
      "Identify the exact expected pattern, make a narrow approved change, test positive and negative cases, preserve high-risk coverage, prepare rollback, and monitor.",
      "Disable the rule.",
      "Exclude the entire user group.",
      "Raise the threshold without testing.",
    ],
    answer: 0,
    explanation:
      "Narrow, tested tuning reduces noise while protecting detection coverage.",
  },
  {
    question:
      "Why should collector and source health be monitored?",
    choices: [
      "A quiet rule may reflect missing data rather than absence of relevant activity.",
      "Healthy collectors prove all activity is safe.",
      "Collector health replaces rule testing.",
      "Only cloud sources need health monitoring.",
    ],
    answer: 0,
    explanation:
      "Missing or delayed data can create false-negative risk and incomplete timelines.",
  },
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


function PipelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        SIEM Pipeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Source Event to Defensive Report
      </h2>

      <div className="mt-6 grid gap-4">
        {siemPipeline.map((item) => (
          <div
            key={item.stage}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">{item.stage}</p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Purpose
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.purpose}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Useful evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SourceCoverageGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Source Coverage
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Source Families That Strengthen SIEM Correlation
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sourceCoverage.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.usefulFor}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Key fields
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.keyFields}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Evidence gap
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.gap}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RuleComponentGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlation Rule Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Components of a Defensible SIEM Rule
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {ruleComponents.map((item) => (
          <div
            key={item.component}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.component}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakDesign}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OutcomeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Alert Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Defensible SIEM Alert Classifications
      </h2>

      <div className="mt-6 grid gap-5">
        {alertOutcomes.map((item) => (
          <div
            key={item.outcome}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.4fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">
                {item.outcome}
              </p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Supporting evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.support}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.response}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RuleReviewGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Review Examples
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Separate Expected Patterns from High-Risk Variations
      </h2>

      <div className="mt-6 grid gap-5">
        {ruleReviewExamples.map((item) => (
          <div
            key={item.rule}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-white">{item.rule}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Sources and logic
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  <span className="font-black">Sources:</span> {item.sources}
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  <span className="font-black">Logic:</span> {item.logic}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Expected pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.expectedPattern}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                  High-risk variation
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.highRiskContext}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                  Narrow tuning
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.tuning}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        SIEM Health and Coverage
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Checks Before Trusting a Quiet or Noisy Dashboard
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {healthChecks.map((item) => (
          <div
            key={item.check}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.check}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Visibility gap
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.gap}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Validation Plan
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Safe Tests for a Fictional Correlation Rule
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testingPlan.map((item) => (
          <div
            key={item.test}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.test}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Success criteria
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.success}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What SIEM Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review and Tune a SIEM Rule in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlation Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Benign True Positive from Password Reset to Narrow Tuning
      </h2>

      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">
              {item.time}
            </p>
            <p className="text-sm font-black text-blue-200">
              {item.source}
            </p>
            <p className="text-sm font-semibold text-white">
              {item.event}
            </p>
            <p className="text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SIEMAndLogManagementBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5.5 SIEM and Log Management Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders collect, normalize, enrich, search, correlate,
            alert on, retain, validate, and tune fictional security evidence
            without confusing a SIEM alert with a complete conclusion.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I5: Defensive Security Tools"
          lessonTitle="SIEM and Log Management Basics"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a SIEM alert proves a rule triggered, not that a complete incident has been confirmed.",
            "I will preserve raw source events, normalized fields, alert records, rule versions, collector health, parser state, and enrichment.",
            "I will review event time, collection time, ingestion time, alert time, delayed batches, duplicates, and missing fields.",
            "I will tune only the exact expected pattern and preserve high-risk variations and false-negative visibility.",
            "I will use only fictional events, users, devices, addresses, domains, rules, dashboards, cases, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Quiet Dashboard Can Mean No Activity—or Missing Data"
        >
          <p className="leading-8">
            SIEM platforms summarize thousands of events into searches,
            dashboards, alerts, and cases. A busy dashboard can reflect true
            risk, expected operations, duplicate ingestion, or weak thresholds.
            A quiet dashboard can reflect normal conditions, broken collectors,
            parser failures, broad suppression, or short retention. Defenders
            verify the pipeline before trusting the picture.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “No alerts appeared, so nothing concerning happened.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm source coverage, collector health, parser quality,
                field population, rule version, suppression, retention, and
                expected baseline before interpreting alert volume.”
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="SIEM Quality Depends on the Entire Evidence Pipeline"
        >
          <p className="leading-8">
            Strong monitoring is more than writing alert rules. It requires
            healthy sources, accurate parsing, careful normalization, current
            enrichment, clear rule logic, appropriate thresholds, controlled
            exclusions, useful routing, sufficient retention, and documented
            validation.
          </p>
        </SectionCard>

        <PipelineGuide />
        <SourceCoverageGuide />
        <RuleComponentGuide />
        <OutcomeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Correlation Should Connect Shared Evidence, Not Just Nearby Timestamps"
        >
          <p className="leading-8">
            Events become meaningfully related when they share users, devices,
            applications, processes, sessions, request IDs, destinations,
            services, tickets, or other defensible identifiers. Time proximity
            helps locate possible relationships, but it does not prove one
            sequence or cause by itself.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Collect", "Are the required fictional sources connected, current, and complete?"],
              ["Parse", "Are source fields extracted and normalized correctly?"],
              ["Correlate", "Which entities, conditions, thresholds, and time windows connect the events?"],
              ["Classify", "Is the alert true, benign, false, duplicate, incomplete, or at risk of missing activity?"],
              ["Tune", "What narrow approved change reduces noise while preserving important coverage?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <RuleReviewGuide />
        <HealthGuide />
        <TestingGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            SIEM and Log Management Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>


        <FakeDashboardCard
          title="Fake SIEM and Log Management Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services monitoring environment."
          metrics={[
            {
              label: "Connected sources",
              value: "27/30",
              note: "Two endpoint collectors are delayed and one application parser requires repair before full coverage is restored.",
            },
            {
              label: "Open alerts",
              value: "18",
              note: "Six true positives, five benign true positives, three false positives, two duplicates, and two evidence-incomplete alerts.",
            },
            {
              label: "Rules under review",
              value: "9",
              note: "Four require threshold tuning, two need enrichment updates, two have missing-field risks, and one has broad suppression.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Authentication Failures Followed by Successful Sign-In"
          severity="Medium"
          time="07:58 AM"
          source="Fake SIEM Correlation Console"
          details="A fictional rule detects five sign-in failures for training-user-84 within ten minutes, followed by a successful sign-in. Change, application, support, device, MFA, and monitoring evidence show an approved password reset followed by a stale saved mail credential on the expected laptop."
          recommendation="Classify the alert as a benign true positive, preserve the source and SIEM evidence, tune only the exact approved reset-and-application pattern, retain coverage for new devices, privileged users, denied MFA, unusual times, and unexplained sources, then test and monitor the revised rule."
        />

        <FakeLogPanel
          title="Fake SIEM Rule Trigger Evidence"
          logs={[
            "07:55:00 CHANGE user='training-user-84' action='password_reset_started' approved='true'",
            "07:57:12 IDENTITY user='training-user-84' action='password_reset_completed' result='success'",
            "07:58:03 APPLICATION device='training-laptop-84' event='stored_credential_rejected'",
            "07:58:05 AUTH user='training-user-84' device='training-laptop-84' result='failure'",
            "07:58:40 AUTH user='training-user-84' failures='5' window='10m'",
            "07:58:42 SIEM rule='repeated_auth_failure' version='12' alert='created'",
            "07:59:10 SUPPORT user_report='mail_client_old_password'",
            "08:00:04 AUTH user='training-user-84' result='success' application='mail-client'",
            "08:00:08 MFA session='session-8401' result='approved'",
            "08:10:00 REVIEW classification='benign_true_positive' tuning='narrow'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which SIEM Rule Decision Is Best Supported?"
          evidence={[
            "The password reset has an approved fictional change record.",
            "The expected laptop and mail application generate the failures.",
            "The application reports a stale stored credential.",
            "The user provides matching support context.",
            "The credential is updated before the successful sign-in.",
            "MFA succeeds for the same session.",
            "No additional failures occur afterward.",
            "The high-risk variations still require coverage.",
          ]}
          question="Which decision is strongest?"
          options={[
            "Classify the alert as a benign true positive and tune only the exact approved password-reset and stale-application pattern while preserving high-risk variations.",
            "Disable the authentication rule because this alert was expected.",
            "Exclude the user permanently from all authentication monitoring.",
            "Declare account compromise because five failures occurred.",
          ]}
          bestAnswer={0}
          explanation="The rule correctly detected its intended behavior, but the full evidence explains the activity. Narrow tuning can reduce repeated expected noise without creating a broad false-negative gap."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken SIEM and Log Management"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
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
          title="Review and Tune a Fictional SIEM Correlation Rule"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Monitoring Rule Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review a supplied fictional SIEM rule that correlates identity,
                endpoint, system, application, firewall, proxy, DNS, inventory,
                and change events. The packet contains raw events, normalized
                fields, one parser issue, one delayed source, one duplicate
                batch, two expected workflows, and one high-risk variation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>State the rule purpose, owner, sources, fields, entities, conditions, threshold, window, exclusions, and routing.</li>
                <li>Preserve raw events, normalized values, alert record, rule version, collector state, parser state, and enrichment.</li>
                <li>Identify delayed, missing, duplicate, stale, or incorrectly parsed evidence.</li>
                <li>Reconstruct exactly why each fictional alert triggered.</li>
                <li>Classify true positive, benign true positive, false positive, duplicate, false-negative risk, or evidence-incomplete.</li>
                <li>Propose the narrowest approved tuning change with rollback.</li>
                <li>Run fictional positive, negative, expected-activity, missing-field, delayed, duplicate, and high-risk tests.</li>
                <li>Document monitoring, owner acceptance, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real SIEM
            platforms, search private logs, run queries against real systems,
            change production rules, disable alerts, collect credentials,
            capture traffic, or publish real logs, users, devices, addresses,
            domains, rules, dashboards, screenshots, or monitoring details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Rule Stops Alerting After a Parser Update"
          scenario="A fictional endpoint source remains connected, but a parser update places the process path into the wrong normalized field. The SIEM rule becomes quiet."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve raw and normalized events, document the parser change, repair the exact field mapping through approved change control, test the rule with positive and negative fictional cases, backfill if authorized, and monitor source health.",
              outcome:
                "Best defensive choice. Quiet alerting is treated as a possible coverage failure rather than proof of normal activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the concerning activity stopped because the dashboard is quiet.",
              outcome:
                "Unsupported. The rule may be missing required fields.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the process-path condition so every endpoint event triggers.",
              outcome:
                "Unsafe. Broad logic would create excessive noise and weaken meaning.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Maintenance Exclusion Hides an Unrelated High-Risk Event"
          scenario="A fictional rule excludes every event from the application zone during a maintenance window. An unrelated privileged sign-in from a new device occurs during that period and does not alert."
          choices={[
            {
              label: "Choice A",
              response:
                "Replace the broad zone-and-time exclusion with exact approved change identifiers and expected application entities, restore privileged new-device coverage, test the revised logic, document the false-negative gap, and monitor.",
              outcome:
                "Best defensive choice. Narrow tuning preserves expected maintenance handling without hiding unrelated high-risk activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the exclusion because maintenance windows are always safe.",
              outcome:
                "Unsafe. Unrelated activity can occur during approved maintenance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable all maintenance exclusions permanently without reviewing expected alert volume.",
              outcome:
                "Weak response. The correct solution is evidence-based narrow tuning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="SIEM and Log Management Checklist"
          items={[
            "I identify the fictional rule purpose, owner, sources, fields, entities, conditions, threshold, time window, exclusions, severity, routing, and expected outcome.",
            "I preserve raw source events, normalized fields, alert records, rule versions, collector health, parser state, enrichment, and case notes.",
            "I distinguish event time, collection time, ingestion time, alert time, and analyst review time.",
            "I check source connectivity, data freshness, parser quality, normalization, duplicates, enrichment, retention, routing, and suppression.",
            "I correlate using shared users, devices, applications, processes, sessions, requests, destinations, services, addresses, or tickets rather than time alone.",
            "I classify alerts as true positive, benign true positive, false positive, duplicate, false-negative risk, or evidence-incomplete.",
            "I tune only the exact expected pattern and preserve privileged, new-device, unusual-time, unexplained, and otherwise high-risk variations.",
            "I use fictional positive, negative, missing-field, delayed-ingestion, duplicate, expected-activity, high-risk, and rollback tests.",
            "I document confidence, impact, owner, action, validation, monitoring, residual risk, and closure.",
            "I use only fictional evidence and never publish real logs, queries, rules, users, devices, addresses, domains, dashboards, screenshots, or internal monitoring details.",
          ]}
        />

        <MiniQuiz
          title="I5.5 Mini Quiz: SIEM and Log Management Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional SIEM Rule Review and Validation Report containing at least thirty raw and normalized events from identity, endpoint, system, application, firewall, proxy, DNS, cloud, inventory, and change sources. Include rule purpose, owner, source inventory, required fields, entities, conditions, threshold, time window, severity, routing, exclusions, raw evidence, normalized evidence, collector health, parser quality, enrichment freshness, duplicates, delayed ingestion, retention, alert outcomes, false-positive analysis, false-negative risk, proposed tuning, approval, rollback, positive tests, negative tests, high-risk variations, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional events, users, devices, addresses, domains, applications, rules, alerts, tickets, cases, and organizations.",
            "Include one benign true positive, one parser-caused false positive, one duplicate alert, one delayed-source gap, and one broad-exclusion false-negative risk.",
            "Show original source fields beside normalized fields so transformations remain auditable.",
            "Do not include real SIEM screenshots, logs, queries, rules, users, devices, addresses, domains, or internal monitoring details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A SIEM centralizes and correlates evidence, but it can only analyze the data and fields it receives.",
            "Raw events, normalized values, rule versions, source health, parser state, enrichment, and retention must remain reviewable.",
            "Correlation should connect shared entities and evidence rather than rely on time proximity alone.",
            "True positives, benign true positives, false positives, duplicates, false-negative risks, and evidence-incomplete alerts require different responses.",
            "Narrow, authorized, tested tuning reduces expected noise while preserving high-risk coverage.",
            "A trustworthy monitoring program validates collection, logic, alert routing, investigation, business impact, monitoring, and residual risk.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I5
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