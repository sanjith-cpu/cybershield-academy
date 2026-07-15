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
const previousLesson = `${modulePath}/tool-validation-tuning-and-false-positives`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
"Integrate fictional endpoint, firewall, vulnerability, SIEM, email, web, DNS, inventory, change, owner, and validation evidence into one controlled defensive-tool review.",
"Separate tool alerts, raw observations, policy actions, verified findings, false positives, false-negative risks, evidence gaps, business impact, and residual risk.",
"Evaluate tool effectiveness using purpose, coverage, health, data freshness, configuration, ownership, alert quality, response capability, validation, and lifecycle evidence.",
"Prioritize fictional improvements without assuming that the highest alert severity, largest dashboard count, or loudest tool represents the greatest business risk.",
"Produce a professional fictional Defensive Tool Effectiveness Report containing evidence, confidence, limitations, owners, safe recommendations, validation, monitoring, and an executive summary.",
];

const vocabulary = [
["Tool effectiveness", "How well a fictional defensive tool fulfills its approved purpose with reliable evidence, appropriate coverage, controlled actions, useful workflow, and validated outcomes."],
["Coverage map", "A structured view showing which fictional users, devices, systems, applications, data sources, event types, and control layers each tool can and cannot observe."],
["Visibility gap", "An area where relevant fictional activity may not be collected, parsed, retained, correlated, displayed, or reviewed."],
["Control action", "An allow, deny, block, quarantine, warn, isolate, terminate, suppress, route, or other tool-defined outcome."],
["Verified finding", "A conclusion supported by preserved source evidence, context, ownership, limitations, and validation."],
["Tool-health evidence", "Records showing service state, policy assignment, updates, connectivity, collection freshness, parsing, queue health, and response readiness."],
["Compensating control", "A separate validated safeguard that reduces risk while the preferred correction remains incomplete."],
["Operational noise", "Expected or low-value fictional tool output that consumes review effort without improving defensive decisions."],
["False-negative risk", "The possibility that relevant fictional activity is not visible because of missing data, weak logic, broad exclusions, unsupported fields, or coverage gaps."],
["Residual risk", "The fictional risk that remains after controls, corrections, validation, monitoring, and accepted limitations are considered."],
["Executive summary", "A concise decision-focused explanation of the strongest findings, impact, confidence, owners, priorities, and next steps."],
["Evidence traceability", "The ability to connect every conclusion and recommendation back to preserved fictional source records and documented reasoning."],
];

const toolInventory = [
{
tool: "Endpoint protection and EDR",
purpose:
"Observe and protect fictional devices through process, file, service, user, network, alert, prevention, and response evidence.",
strengths:
"Detailed local timelines, process relationships, file actions, device state, and controlled response capabilities.",
limitations:
"Depends on agent health, policy, supported platforms, exclusions, retention, and endpoint connectivity.",
owner:
"Endpoint Security Team",
},
{
tool: "Segmentation firewall",
purpose:
"Control fictional traffic between user, application, database, management, and external zones.",
strengths:
"Clear source, destination, service, rule, action, state, zone, and session evidence.",
limitations:
"Shared gateways, translations, stale objects, rule order, and missing identity context can reduce precision.",
owner:
"Network Security Team",
},
{
tool: "Vulnerability and configuration assessment",
purpose:
"Identify fictional missing updates, unsupported software, exposed services, weak settings, and baseline drift.",
strengths:
"Consistent review across many assets with version, setting, service, and lifecycle evidence.",
limitations:
"Can rely on stale inventory, incorrect mapping, partial credentials, outdated logic, or unsuitable baselines.",
owner:
"Vulnerability Management Team",
},
{
tool: "SIEM and log management",
purpose:
"Collect, normalize, enrich, correlate, alert on, retain, and report fictional events from many sources.",
strengths:
"Cross-source timelines, centralized searches, rule logic, alert routing, case management, and reporting.",
limitations:
"Can only analyze the data it receives and may be affected by parser, enrichment, duplication, delay, and suppression problems.",
owner:
"Security Monitoring Team",
},
{
tool: "Email security gateway",
purpose:
"Evaluate fictional senders, recipients, authentication, links, attachments, reputation, content policy, and delivery actions.",
strengths:
"Message-level control, quarantine, sender context, link handling, attachment analysis, and user-report integration.",
limitations:
"Passing authentication or a clean verdict does not prove business legitimacy or safe later behavior.",
owner:
"Messaging Security Team",
},
{
tool: "Secure web gateway and DNS filtering",
purpose:
"Control fictional name resolution and web requests based on user, device, destination, category, method, path, reputation, and policy.",
strengths:
"Layered destination visibility, blocking, warning, rewriting, category, request, and response evidence.",
limitations:
"DNS does not prove connection, gateway metadata may not reveal complete content, and categories can be stale or wrong.",
owner:
"Web Protection Team",
},
{
tool: "Asset, identity, and ownership inventory",
purpose:
"Provide fictional device, user, application, role, privilege, owner, criticality, location, and managed-state context.",
strengths:
"Connects technical evidence to accountability, business role, expected software, and risk priority.",
limitations:
"Stale or incomplete records can misattribute findings or lower and raise priority incorrectly.",
owner:
"IT Asset and Identity Governance",
},
{
tool: "Change and ticket management",
purpose:
"Document fictional approvals, maintenance, deployment, expected behavior, rollback, validation, exceptions, and closure.",
strengths:
"Provides business context, ownership, scope, timing, review history, and planned outcomes.",
limitations:
"Human-entered records may be approximate, delayed, incomplete, or different from the actual technical state.",
owner:
"IT Service Management",
},
];

const caseQuestions = [
{
question: "What is the exact defensive question?",
detail:
"Determine whether the fictional defensive-tool environment provides reliable coverage and whether five supplied findings require correction, tuning, compensation, or further evidence.",
},
{
question: "Which systems and users are in scope?",
detail:
"Two managed laptops, two application servers, one database server, one mail workflow, one learning site, five fictional users, and the controls that observe them.",
},
{
question: "Which actions are allowed?",
detail:
"Read-only review, evidence correlation, classification, prioritization, report writing, and proposed changes. No real scans, isolation, blocking, quarantine, rule changes, or access testing.",
},
{
question: "Which evidence must remain preserved?",
detail:
"Original alerts, raw events, normalized fields, policies, rule versions, tool-health records, inventory, tickets, owner statements, tests, and validation outcomes.",
},
{
question: "What decisions must the report support?",
detail:
"Which findings are confirmed, expected, false positive, compensated, evidence-incomplete, or false-negative risk; what priority each receives; and who owns the next step.",
},
{
question: "What is outside scope?",
detail:
"Any real system, private mailbox, credential, live console, file execution, packet capture, exploitation, scanning, bypass, or production-control change.",
},
];

const evidenceQualityChecks = [
{
check: "Source authenticity",
strong:
"The fictional record identifies its source system, provider, event ID, rule, message ID, request ID, ticket, or other traceable origin.",
weak:
"A screenshot or copied summary appears without source or timestamp.",
},
{
check: "Time quality",
strong:
"Original time, normalized time, time zone, collection delay, and event sequence are documented.",
weak:
"Events are ordered only by dashboard display time.",
},
{
check: "Entity identity",
strong:
"User, device, process, application, service, request, destination, and owner identifiers agree across sources.",
weak:
"Events are grouped because names look similar.",
},
{
check: "Tool health",
strong:
"Agent, collector, parser, policy, connector, update, queue, freshness, and coverage state are available.",
weak:
"The reviewer assumes a quiet or incomplete tool is healthy.",
},
{
check: "Configuration traceability",
strong:
"The active fictional rule, policy, threshold, exclusion, object, version, and change history are preserved.",
weak:
"Only the current dashboard result is available.",
},
{
check: "Business context",
strong:
"Owner, application purpose, maintenance, deployment, user report, criticality, and expected workflow are documented.",
weak:
"Technical output is interpreted without operational context.",
},
{
check: "Independent corroboration",
strong:
"At least one separate source supports or challenges the tool output.",
weak:
"The conclusion repeats the tool label as if it were verification.",
},
{
check: "Limitation statement",
strong:
"The report states what the evidence does not show and how that affects confidence.",
weak:
"The report uses absolute language despite missing or delayed data.",
},
];

const findings = [
{
id: "Finding 1",
title: "Contained endpoint detection",
initialSignal:
"Endpoint protection quarantines a fictional archive in a browser cache.",
supportingEvidence:
"No process, child process, persistence, account change, network connection, or related endpoint event is supplied. Tool health is current and quarantine occurs before observed execution.",
classification:
"Contained alert with moderate-to-high confidence.",
impact:
"Low current impact under supplied evidence, with limited residual risk from incomplete visibility outside the reviewed time window.",
action:
"Preserve the evidence, confirm scope and recurrence, keep the endpoint healthy, avoid broad exclusions, and close only after monitoring.",
},
{
id: "Finding 2",
title: "Stale firewall source object",
initialSignal:
"A least-privilege application-to-database rule unexpectedly permits a retired server.",
supportingEvidence:
"The source object group contains a stale member. Inventory marks the server retired, the approved request names one source only, and removal of the stale member restores expected behavior.",
classification:
"Confirmed firewall-object configuration finding with high confidence.",
impact:
"Moderate because the rule crossed into the database zone, even though the unintended source was retired and no harmful application activity is supplied.",
action:
"Correct the exact object, validate positive and negative paths, review similar objects, monitor rule hits, and recertify ownership.",
},
{
id: "Finding 3",
title: "SIEM parser and missing-field gap",
initialSignal:
"A process-path correlation rule becomes quiet after a parser update.",
supportingEvidence:
"Raw endpoint events still contain the path, normalized events do not, rule volume drops after parser version 7.2, and the source remains connected.",
classification:
"Confirmed false-negative visibility risk with high confidence.",
impact:
"High because the missing field can prevent detection of high-risk user-writable-path activity.",
action:
"Repair the exact field mapping, preserve old and new versions, add field-population health monitoring, test high-risk cases, and backfill if authorized.",
},
{
id: "Finding 4",
title: "Web-category false positive",
initialSignal:
"A new fictional educational platform is blocked under the entertainment category.",
supportingEvidence:
"Teacher ownership, content review, privacy review, destination ownership, application purpose, and classroom validation support approved use.",
classification:
"Confirmed false positive with high confidence.",
impact:
"Moderate operational impact because the block interrupts an approved learning workflow without evidence of a security event.",
action:
"Correct only the exact destination classification, retain broader category controls, test allowed and blocked examples, set review ownership, and monitor.",
},
{
id: "Finding 5",
title: "Unsupported application component with compensating controls",
initialSignal:
"Assessment tool reports report-helper 4.1 as beyond fictional support.",
supportingEvidence:
"Inventory and lifecycle records confirm the version. The service uses restricted privilege, is reachable from one approved application source, is monitored, and has a tested replacement plan.",
classification:
"Confirmed vulnerability with validated compensating controls.",
impact:
"Moderate because the component supports important reporting, but exposure and privilege are limited while remediation is scheduled.",
action:
"Keep the finding open, maintain controls, complete controlled upgrade, validate reports and services, monitor, and close after production correction.",
},
];

const correlationKeys = [
{
key: "User and account",
examples:
"training-user-31, finance-training, svc-report-training",
use:
"Connect identity, endpoint, mail, web, application, and ownership evidence while distinguishing a user from a service identity.",
},
{
key: "Device and asset",
examples:
"training-laptop-31, report-app-3, report-server-18",
use:
"Connect tool health, inventory, process, network, finding, owner, and criticality evidence.",
},
{
key: "Process and service",
examples:
"approved-browser.exe, report-helper, StudyClientUpdate",
use:
"Connect endpoint behavior with application, system, network, change, and validation records.",
},
{
key: "Request, message, and session ID",
examples:
"msg-4408, request-1204, session-8401",
use:
"Connect email, proxy, application, identity, and case events without relying only on nearby timestamps.",
},
{
key: "Rule, policy, and version",
examples:
"DB-REPORT-44, service_restart_monitor v19, parser 7.2",
use:
"Connect tool output with exact configuration, deployment, testing, and rollback evidence.",
},
{
key: "Change and owner",
examples:
"CHG-551, learning-apps, Network Security Team",
use:
"Connect expected activity, approval, scope, responsibility, validation, expiration, and closure.",
},
{
key: "Destination and application",
examples:
"learning-platform.test, report-db-2, approved-learning-service.test",
use:
"Connect DNS, firewall, proxy, endpoint, application, reputation, category, and owner evidence.",
},
{
key: "Original and normalized time",
examples:
"13:41:14 local, 17:41:14Z, ingestion delay 4 seconds",
use:
"Order events accurately while preserving uncertainty caused by delay, clock offset, or batch collection.",
},
];

const workflow = [
{
step: "1",
title: "Confirm scope and inventory",
detail:
"Record the fictional question, assets, users, applications, owners, tools, evidence sources, time window, action limits, and report audience.",
},
{
step: "2",
title: "Preserve original evidence",
detail:
"Keep alerts, raw events, normalized fields, policies, rule versions, health records, tickets, owner statements, tests, and validation results.",
},
{
step: "3",
title: "Build tool and coverage maps",
detail:
"Document what each tool observes, controls, misses, retains, routes, and requires for trustworthy operation.",
},
{
step: "4",
title: "Correlate and classify findings",
detail:
"Use shared users, devices, processes, requests, rules, destinations, changes, owners, and times to separate the five patterns.",
},
{
step: "5",
title: "Prioritize improvements",
detail:
"Combine evidence confidence, exposure, privilege, asset criticality, business impact, control strength, urgency, and remediation complexity.",
},
{
step: "6",
title: "Recommend, validate, and report",
detail:
"Assign owners, propose narrow actions, define rollback and tests, monitor outcomes, state residual risk, and create an executive summary.",
},
];


const priorityMatrix = [
{
finding: "SIEM parser and missing-field gap",
confidence: "High",
exposure: "Monitoring-wide",
impact: "High visibility risk",
priority: "1 — Immediate",
reason:
"A required field is absent across a deployed rule, creating false-negative risk for high-value endpoint activity.",
},
{
finding: "Stale firewall source object",
confidence: "High",
exposure: "Database-zone path",
impact: "Moderate access risk",
priority: "2 — High",
reason:
"The implemented rule is broader than the approved request and crosses a sensitive network boundary.",
},
{
finding: "Unsupported application component",
confidence: "High",
exposure: "Narrow and compensated",
impact: "Moderate lifecycle risk",
priority: "3 — Planned high",
reason:
"The condition is confirmed, but restricted privilege, segmentation, monitoring, and a tested upgrade plan reduce immediate exposure.",
},
{
finding: "Web-category false positive",
confidence: "High",
exposure: "Approved learning workflow",
impact: "Moderate operational impact",
priority: "4 — Prompt",
reason:
"The control blocks a valid classroom resource, but the correction can remain narrow and does not require emergency security response.",
},
{
finding: "Contained endpoint detection",
confidence: "Moderate to high",
exposure: "One managed laptop",
impact: "Low current impact",
priority: "5 — Monitor and close",
reason:
"The file is quarantined before observed execution and no related process, persistence, account, or network evidence is supplied.",
},
];

const coverageGaps = [
{
gap: "Endpoint retention window",
evidence:
"Detailed process evidence is retained for fourteen fictional days while the report reviews a twenty-one-day period.",
effect:
"The contained endpoint finding cannot provide complete assurance for the earliest seven days.",
improvement:
"Align retention with review requirements or document the limit in future cases.",
},
{
gap: "SIEM process-path field",
evidence:
"Parser version 7.2 leaves the normalized process path empty for one endpoint event format.",
effect:
"Path-based correlation can miss high-risk activity even though raw events still contain the field.",
improvement:
"Repair mapping, add field-health monitoring, validate rule behavior, and backfill when authorized.",
},
{
gap: "Firewall object lifecycle",
evidence:
"A retired server remains in the fictional source object group.",
effect:
"Access exceeds the approved least-privilege source scope.",
improvement:
"Connect object membership with asset retirement and require recertification.",
},
{
gap: "Web-category review ownership",
evidence:
"The educational destination has no assigned category-review owner or expiration date.",
effect:
"A narrow correction could become stale or remain unreviewed.",
improvement:
"Assign the web-protection owner, review date, usage monitoring, and rollback criteria.",
},
{
gap: "Assessment asset freshness",
evidence:
"Two fictional assessment records rely on inventory collected nine days earlier.",
effect:
"Version, ownership, and exposure conclusions may become stale.",
improvement:
"Define freshness requirements and flag findings that use old inventory.",
},
{
gap: "Change-to-alert enrichment",
evidence:
"Approved deployment identifiers exist in tickets but are not consistently attached to endpoint and SIEM alerts.",
effect:
"Expected activity requires repeated manual correlation and creates avoidable noise.",
improvement:
"Add validated exact change enrichment while preserving unexplained variations.",
},
{
gap: "User-report correlation",
evidence:
"Email reports create separate tickets without automatically linking message IDs and affected recipients.",
effect:
"Related messages may be reviewed as isolated events.",
improvement:
"Use message IDs and recipient scope to connect reports while protecting privacy.",
},
{
gap: "Cross-tool ownership",
evidence:
"Three findings involve more than one team but have no single coordinating owner.",
effect:
"Technical corrections can remain incomplete across tool boundaries.",
improvement:
"Assign one accountable finding owner and supporting tool owners.",
},
];

const reportSections = [
{
section: "1. Executive Summary",
required:
"State the fictional scope, strongest findings, overall tool effectiveness, highest priorities, owners, confidence, business impact, and immediate next steps.",
},
{
section: "2. Scope and Safety Boundary",
required:
"List assets, users, applications, tools, evidence sources, time window, action level, privacy limits, exclusions, assumptions, and out-of-scope activity.",
},
{
section: "3. Tool Inventory",
required:
"For each tool, record purpose, owner, data sources, assets, actions, retention, health checks, strengths, limitations, and dependencies.",
},
{
section: "4. Coverage Map",
required:
"Show which identity, endpoint, system, application, firewall, DNS, web, email, cloud, inventory, and change evidence is visible or missing.",
},
{
section: "5. Findings Matrix",
required:
"Separate initial signal, preserved evidence, verified classification, confidence, impact, priority, owner, recommendation, validation, and residual risk.",
},
{
section: "6. Tool-Health Review",
required:
"Document agents, collectors, parsers, policies, updates, source freshness, queues, exclusions, rule versions, routing, retention, and known gaps.",
},
{
section: "7. Improvement Roadmap",
required:
"Prioritize immediate, high, planned, prompt, and monitoring actions with accountable owners, due dates, dependencies, rollback, and tests.",
},
{
section: "8. Validation Plan",
required:
"Define positive, negative, high-risk, missing-field, delayed, duplicate, operational, application, business, and rollback validation.",
},
{
section: "9. Residual Risk",
required:
"State what remains unknown, incomplete, compensated, accepted, time-limited, or dependent on future evidence.",
},
{
section: "10. Evidence Appendix",
required:
"Link every conclusion to fictional raw records, normalized fields, alerts, rules, policies, tickets, owners, tests, and validation results.",
},
];

const evidencePacket = [
{
time: "08:00:00",
source: "Assessment scope",
event:
"Read-only fictional tool-effectiveness review begins for the Northstar learning and reporting environment.",
relationship:
"Defines authorization, assets, tools, evidence sources, time window, owners, and prohibited actions.",
},
{
time: "08:02:10",
source: "Endpoint health",
event:
"training-laptop-31 reports current policy, agent version, connectivity, and event freshness.",
relationship:
"Supports reliability of later endpoint evidence for the contained detection.",
},
{
time: "08:03:12",
source: "Endpoint alert",
event:
"A fictional archive in the browser cache is detected and quarantined.",
relationship:
"Creates Finding 1 but does not prove execution or impact.",
},
{
time: "08:03:14",
source: "Endpoint process",
event:
"No process or child process is associated with the quarantined archive.",
relationship:
"Supports containment before observed execution under supplied evidence.",
},
{
time: "08:03:20",
source: "Endpoint network",
event:
"No related connection is recorded during the reviewed endpoint window.",
relationship:
"Reduces evidence of follow-on behavior but remains limited by retention.",
},
{
time: "08:10:00",
source: "Firewall change",
event:
"Rule DB-REPORT-44 is approved for report-app-3 to reach report-db-2 on one service.",
relationship:
"Defines the expected least-privilege network path.",
},
{
time: "08:12:01",
source: "Firewall allow",
event:
"report-app-3 successfully reaches report-db-2 under DB-REPORT-44.",
relationship:
"Validates the intended network path.",
},
{
time: "08:12:20",
source: "Firewall allow",
event:
"legacy-report-1 also reaches report-db-2 under the same rule.",
relationship:
"Creates Finding 2 because the source is outside the approved request.",
},
{
time: "08:13:00",
source: "Asset inventory",
event:
"legacy-report-1 is marked retired but remains in the report-app-sources object group.",
relationship:
"Identifies the stale-object cause.",
},
{
time: "08:15:00",
source: "Firewall validation",
event:
"Removing the stale member blocks legacy-report-1 while report-app-3 remains allowed.",
relationship:
"Confirms the narrow correction and positive and negative outcomes.",
},
{
time: "08:20:00",
source: "SIEM baseline",
event:
"The user-writable process-path rule normally creates four fictional alerts per week.",
relationship:
"Provides expected historical behavior before the parser change.",
},
{
time: "08:21:10",
source: "Parser deployment",
event:
"Endpoint parser version 7.2 becomes active.",
relationship:
"Creates the change point for Finding 3.",
},
{
time: "08:22:00",
source: "Raw endpoint event",
event:
"A fictional process event contains C:\\Users\\Training\\Temp\\review-helper.exe.",
relationship:
"Shows the source still records the required path.",
},
{
time: "08:22:04",
source: "Normalized SIEM event",
event:
"The normalized process_path field is empty for the same event ID.",
relationship:
"Confirms the field-mapping problem.",
},
{
time: "08:22:10",
source: "SIEM rule",
event:
"The path-based rule does not trigger.",
relationship:
"Demonstrates false-negative risk rather than absence of the source behavior.",
},
{
time: "08:25:00",
source: "Parser test",
event:
"Restored mapping populates process_path and the high-risk fictional test triggers.",
relationship:
"Validates the proposed correction.",
},
{
time: "08:30:00",
source: "Web policy",
event:
"learning-lab.test is blocked under the entertainment category.",
relationship:
"Creates Finding 4 and an approved-workflow interruption.",
},
{
time: "08:31:00",
source: "Teacher owner",
event:
"The destination is submitted as an approved fictional classroom resource.",
relationship:
"Adds ownership and business purpose.",
},
{
time: "08:32:00",
source: "Privacy and content review",
event:
"The learning platform meets the supplied fictional classroom and privacy requirements.",
relationship:
"Supports a category false-positive conclusion.",
},
{
time: "08:34:00",
source: "Web validation",
event:
"The exact destination is reclassified and opens; unrelated entertainment destinations remain blocked.",
relationship:
"Validates a narrow correction without broad policy weakening.",
},
{
time: "08:40:00",
source: "Assessment finding",
event:
"report-helper 4.1 on report-server-18 is reported beyond fictional support.",
relationship:
"Creates Finding 5.",
},
{
time: "08:41:00",
source: "Inventory and lifecycle",
event:
"Version 4.1 and its support status are confirmed.",
relationship:
"Validates the underlying lifecycle condition.",
},
{
time: "08:42:00",
source: "Identity",
event:
"The component runs under restricted svc-report-training.",
relationship:
"Adds limited privilege context.",
},
{
time: "08:43:00",
source: "Firewall",
event:
"Only report-app-3 can reach the component through an approved internal path.",
relationship:
"Confirms a compensating segmentation control.",
},
{
time: "08:45:00",
source: "Upgrade test",
event:
"Version 5.0 installs in the fictional test environment and report generation succeeds.",
relationship:
"Supports the planned remediation path but not completed production correction.",
},
{
time: "08:50:00",
source: "Owner record",
event:
"Production upgrade is scheduled with backup, rollback, validation, and monitoring.",
relationship:
"Provides accountable lifecycle remediation.",
},
{
time: "09:00:00",
source: "Cross-tool review",
event:
"Five findings are separated rather than combined into one incident.",
relationship:
"Prevents unsupported causal linkage across unrelated tool patterns.",
},
{
time: "09:05:00",
source: "Priority review",
event:
"SIEM visibility risk receives the highest priority despite a medium dashboard severity.",
relationship:
"Shows contextual priority differs from tool severity.",
},
{
time: "09:10:00",
source: "Ownership review",
event:
"Each finding receives one accountable owner and supporting tool teams.",
relationship:
"Improves cross-tool completion and closure.",
},
{
time: "09:20:00",
source: "Executive report",
event:
"The final fictional report documents tool strengths, gaps, findings, priorities, validation, monitoring, and residual risk.",
relationship:
"Completes the lab with traceable evidence-based recommendations.",
},
];

const mistakes = [
"Combining unrelated alerts from several tools into one incident because they occurred on the same day.",
"Ranking findings only by the severity displayed in each tool.",
"Treating a tool dashboard as stronger evidence than the original source records.",
"Assuming a green health status means complete coverage and correct configuration.",
"Ignoring asset, identity, application, owner, and change records when interpreting technical output.",
"Treating a compensating control as proof that the underlying finding no longer exists.",
"Treating a false positive as a reason to disable an entire rule, category, or protective layer.",
"Failing to distinguish contained activity from confirmed execution or impact.",
"Correcting one finding without testing related positive, negative, high-risk, and business outcomes.",
"Assigning several supporting teams but no single accountable owner.",
"Closing findings without monitoring, expiration, residual risk, and evidence-linked validation.",
"Publishing real alerts, logs, users, devices, addresses, domains, paths, policies, findings, screenshots, or internal tool details.",
];

const quizQuestions = [
{
question:
"What is the strongest basis for evaluating tool effectiveness?",
choices: [
"Purpose, coverage, health, evidence quality, configuration, ownership, workflow, validation, outcomes, and limitations.",
"The number of dashboard alerts alone.",
"The tool’s purchase price.",
"The color of its status page.",
],
answer: 0,
explanation:
"Tool effectiveness depends on whether the tool reliably supports its approved defensive purpose.",
},
{
question:
"Why does the SIEM parser problem receive the highest priority in the fictional case?",
choices: [
"It creates a monitoring-wide false-negative risk for a high-value rule.",
"Its dashboard severity is the highest.",
"It produces the largest number of alerts.",
"It affects the fewest sources.",
],
answer: 0,
explanation:
"Contextual priority reflects visibility impact and coverage risk, not just displayed severity.",
},
{
question:
"What best describes the unsupported application component?",
choices: [
"A confirmed finding with compensating controls and planned remediation that should remain open until production correction is validated.",
"A false positive because the server is internal.",
"Fully remediated because a test upgrade succeeded.",
"An incident that must be combined with every other finding.",
],
answer: 0,
explanation:
"The condition remains present even though controls reduce immediate risk and a replacement has been tested.",
},
{
question:
"What does the contained endpoint detection directly support?",
choices: [
"The fictional archive was quarantined before the supplied evidence shows process execution or related activity.",
"The device was fully compromised.",
"The user intended to run the archive.",
"Every related file was removed permanently.",
],
answer: 0,
explanation:
"The evidence supports containment while preserving retention and scope limitations.",
},
{
question:
"Why are positive and negative firewall tests both necessary?",
choices: [
"They confirm the required path works and unrelated paths remain blocked.",
"They prove every future connection is safe.",
"They remove the need for ownership.",
"They make rollback unnecessary.",
],
answer: 0,
explanation:
"Least-privilege validation must test both intended access and unintended access.",
},
{
question:
"What is the strongest correction for the web-category false positive?",
choices: [
"Reclassify only the exact approved fictional destination, test it, preserve broader controls, assign an owner, and monitor.",
"Allow the entire entertainment category.",
"Disable the secure web gateway.",
"Tell users to bypass the block.",
],
answer: 0,
explanation:
"A narrow correction restores the approved workflow without creating broad access.",
},
{
question:
"What makes the final report traceable?",
choices: [
"Every finding and recommendation links back to preserved fictional source records, configurations, owners, tests, and validation results.",
"It contains many screenshots without source details.",
"It repeats the tool labels exactly.",
"It avoids stating evidence limitations.",
],
answer: 0,
explanation:
"Traceability allows another reviewer to verify the reasoning and outcome.",
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
Module Test
</Link>
</div>
);
}


function ToolInventoryGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Tool Inventory
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Defensive Tools with Different Strengths and Limits
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{toolInventory.map((item) => (
<div
key={item.tool}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="text-lg font-black text-cyan-100">{item.tool}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.purpose}
</p>

<div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
Strengths
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.strengths}
</p>
</div>

<div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
Limitations
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.limitations}
</p>
</div>

<p className="mt-4 text-sm font-bold text-blue-200">
Owner: {item.owner}
</p>
</div>
))}
</div>
</section>
);
}

function ScopeGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Case Scope
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Six Questions That Keep the Lab Controlled
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{caseQuestions.map((item, index) => (
<div
key={item.question}
className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
>
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
{index + 1}
</div>
<h3 className="mt-4 font-black text-white">{item.question}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.detail}
</p>
</div>
))}
</div>
</section>
);
}

function QualityGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Evidence Quality
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Checks Before Using Tool Output in a Finding
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{evidenceQualityChecks.map((item) => (
<div
key={item.check}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.check}</h3>

<div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
Strong evidence
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.strong}
</p>
</div>

<div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
Weak evidence
</p>
<p className="mt-2 text-sm leading-6 text-red-50">
{item.weak}
</p>
</div>
</div>
))}
</div>
</section>
);
}

function FindingGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Findings Analysis
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Five Separate Findings from One Multi-Tool Evidence Packet
</h2>

<div className="mt-6 grid gap-5">
{findings.map((item) => (
<div
key={item.id}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<div className="flex flex-wrap items-center gap-3">
<span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
{item.id}
</span>
<h3 className="text-xl font-black text-white">{item.title}</h3>
</div>

<div className="mt-4 grid gap-4 md:grid-cols-2">
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
Initial signal
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.initialSignal}
</p>
</div>

<div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
Supporting evidence
</p>
<p className="mt-2 text-sm leading-6 text-slate-200">
{item.supportingEvidence}
</p>
</div>

<div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
Classification and impact
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.classification}
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.impact}
</p>
</div>

<div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
Strong next action
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.action}
</p>
</div>
</div>
</div>
))}
</div>
</section>
);
}

function CorrelationGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Correlation Keys
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Ways to Connect Evidence Without Assuming Causation
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{correlationKeys.map((item) => (
<div
key={item.key}
className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.key}</h3>
<p className="mt-3 font-mono text-sm text-blue-200">
{item.examples}
</p>
<p className="mt-3 text-sm leading-6 text-slate-300">{item.use}</p>
</div>
))}
</div>
</section>
);
}

function PriorityGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Priority Matrix
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Contextual Priority Is Different from Tool Severity
</h2>

<div className="mt-6 grid gap-4">
{priorityMatrix.map((item) => (
<div
key={item.finding}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[1fr_0.35fr_0.55fr_0.55fr_0.5fr_1.2fr]"
>
<p className="font-black text-white">{item.finding}</p>
<p className="text-sm font-bold text-cyan-200">
{item.confidence}
</p>
<p className="text-sm text-slate-300">{item.exposure}</p>
<p className="text-sm text-slate-300">{item.impact}</p>
<p className="text-sm font-black text-yellow-200">
{item.priority}
</p>
<p className="text-sm leading-6 text-slate-300">{item.reason}</p>
</div>
))}
</div>
</section>
);
}

function GapGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Coverage and Process Gaps
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Improvements Beyond the Individual Findings
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{coverageGaps.map((item) => (
<div
key={item.gap}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.gap}</h3>

<div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
Evidence
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.evidence}
</p>
</div>

<div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
Effect
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.effect}
</p>
</div>

<div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
Improvement
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.improvement}
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
Integrated Workflow
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Complete the Defensive Tool Review in Six Phases
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

function ReportGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Final Report Structure
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Ten Sections in the Defensive Tool Effectiveness Report
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
{reportSections.map((item) => (
<div
key={item.section}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.section}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.required}
</p>
</div>
))}
</div>
</section>
);
}

function EvidencePacketGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Fictional Evidence Packet
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Thirty Records Across Eight Defensive Tool Families
</h2>

<div className="mt-6 grid gap-3">
{evidencePacket.map((item) => (
<div
key={`${item.time}-${item.source}-${item.event}`}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
>
<p className="font-mono text-sm font-black text-cyan-300">
{item.time}
</p>
<p className="text-sm font-black text-blue-200">{item.source}</p>
<p className="text-sm font-semibold text-white">{item.event}</p>
<p className="text-sm leading-6 text-slate-300">
{item.relationship}
</p>
</div>
))}
</div>
</section>
);
}


export default function DefensiveToolAnalysisLabPage() {
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
Lesson 8 of 8
</span>
</div>

<h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
I5.8 Defensive Tool Analysis Lab
</h1>

<p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
Integrate fictional endpoint, firewall, assessment, SIEM, email,
web, DNS, inventory, change, owner, testing, and validation evidence
into one professional Defensive Tool Effectiveness Report.
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
lessonTitle="Defensive Tool Analysis Lab"
lessonNumber={8}
totalLessons={8}
/>

<ReadinessCheck
title="Before You Start"
items={[
"I will treat every fictional tool alert as evidence to validate rather than a final conclusion.",
"I will preserve raw events, normalized fields, rule versions, policies, tool-health records, tickets, owner statements, tests, and validation outcomes.",
"I will separate the five findings instead of forcing unrelated patterns into one incident.",
"I will prioritize using evidence, exposure, privilege, criticality, business impact, control strength, urgency, and remediation complexity.",
"I will use only fictional systems, users, tools, alerts, rules, addresses, domains, files, tickets, and organizations.",
]}
/>

<SectionCard
eyebrow="Professional Hook"
title="The Loudest Tool Is Not Always Showing the Most Important Risk"
>
<p className="leading-8">
One dashboard may display a high-severity alert that was contained
before execution. Another tool may quietly stop detecting because a
parser field is missing. A vulnerability can remain real while
strong compensating controls reduce immediate exposure. A web block
can protect users or interrupt an approved classroom workflow.
Professional analysis compares evidence across tools before
deciding what matters most.
</p>

<div className="mt-5 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
<p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
Weak response
</p>
<p className="mt-2 leading-7">
“Sort the dashboards by severity and treat every alert as one
connected incident.”
</p>
</div>

<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
Strong response
</p>
<p className="mt-2 leading-7">
“Preserve each tool’s evidence, validate its coverage and
limits, correlate only shared identifiers, separate the
findings, prioritize contextually, and assign accountable
owners.”
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
eyebrow="Lab Mission"
title="Evaluate Whether the Fictional Defensive Tool Environment Produces Reliable Decisions"
>
<p className="leading-8">
The Northstar Learning Services evidence packet contains five
separate tool findings and eight broader coverage or process gaps.
Your task is to determine what each tool observed, what the evidence
supports, what remains unknown, how the findings should be
prioritized, and how the environment should improve without
weakening protection or disrupting required services.
</p>

<div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
This is a read-only fictional analysis lab. Students do not access
live consoles, scan systems, test ports, open suspicious files,
visit destinations, inspect private mailboxes, change rules,
quarantine content, isolate devices, or use credentials.
</div>
</SectionCard>

<ScopeGuide />
<ToolInventoryGuide />
<QualityGuide />

<SectionCard
eyebrow="Core Concept"
title="Tool Output Becomes a Finding Only After Validation"
>
<div className="grid gap-4 md:grid-cols-5">
{[
["Observe", "What exact fictional event, alert, finding, policy action, or health state did the tool record?"],
["Corroborate", "Which raw source, inventory, owner, change, application, or validation records agree or conflict?"],
["Classify", "Is the pattern contained, confirmed, false positive, compensated, evidence-incomplete, or a visibility risk?"],
["Prioritize", "How do exposure, privilege, criticality, impact, controls, urgency, and confidence affect the order?"],
["Improve", "What narrow authorized correction, test, rollback, monitoring, owner, and residual-risk record are required?"],
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

<CorrelationGuide />
<EvidencePacketGuide />
<FindingGuide />
<PriorityGuide />
<GapGuide />
<WorkflowGuide />
<ReportGuide />

<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Key Vocabulary
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Integrated Defensive Tool Analysis Terms
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
title="Fake Defensive Tool Effectiveness Dashboard"
subtitle="Training dashboard for the fictional Northstar Learning Services integrated review."
metrics={[
{
label: "Verified findings",
value: "5",
note: "One contained endpoint alert, one firewall object error, one SIEM visibility gap, one web false positive, and one compensated lifecycle finding.",
},
{
label: "Coverage gaps",
value: "8",
note: "Retention, parsing, object lifecycle, category ownership, inventory freshness, change enrichment, report linking, and cross-tool ownership require improvement.",
},
{
label: "Priority actions",
value: "3",
note: "Repair SIEM field mapping, correct firewall object membership, and complete the controlled application-component upgrade.",
},
]}
/>

<FakeAlertCard
title="Cross-Tool Review Identifies a High-Priority Visibility Gap"
severity="High"
time="09:05 AM"
source="Fake Defensive Tool Review Console"
details="A fictional cross-tool review shows that endpoint raw events still contain process paths, but SIEM parser version 7.2 leaves the normalized path field empty. The path-based rule becomes quiet even though source connectivity remains healthy. Other dashboard alerts are louder but contained, compensated, or operational."
recommendation="Treat the parser issue as the highest-priority finding, preserve raw and normalized evidence, repair the exact mapping, add field-health monitoring, test high-risk and missing-field cases, backfill if authorized, keep rollback ready, and document the temporary visibility gap."
/>

<FakeLogPanel
title="Fake Integrated Finding Summary"
logs={[
"FINDING1 tool='endpoint' classification='contained' execution_evidence='none_supplied' priority='monitor'",
"FINDING2 tool='firewall' classification='stale_object' scope='broader_than_approved' priority='high'",
"FINDING3 tool='siem' classification='false_negative_risk' field='process_path' priority='immediate'",
"FINDING4 tool='web_gateway' classification='false_positive' destination='learning-lab.test' priority='prompt'",
"FINDING5 tool='assessment' classification='confirmed_compensated' component='report-helper-4.1' priority='planned_high'",
"COVERAGE endpoint_retention='14d' report_window='21d' limitation='documented'",
"VALIDATION firewall_positive='pass' firewall_negative='pass' siem_high_risk='pass_after_fix'",
"OWNERS accountable_findings='5' supporting_teams='8'",
"REPORT evidence_traceability='complete' residual_risk='documented'",
"REVIEW unrelated_findings_combined='false' executive_summary='ready'",
]}
/>

<AnalyzeEvidenceCard
title="Which Finding Should Receive the Highest Priority?"
evidence={[
"The endpoint archive is quarantined before supplied execution evidence.",
"The firewall rule is broader than approved because of one stale object member.",
"The SIEM source remains connected, but the required normalized process-path field is empty.",
"The path-based SIEM rule stops alerting after parser version 7.2.",
"The web block interrupts an approved classroom resource but can be corrected narrowly.",
"The unsupported component is real but has restricted privilege, segmentation, monitoring, and a tested upgrade plan.",
"The SIEM mapping repair restores the high-risk fictional test.",
"The parser problem can affect monitoring across multiple endpoints.",
]}
question="Which priority decision is strongest?"
options={[
"Repair the SIEM parser mapping first because it creates a broad false-negative visibility risk, while also assigning high priority to the firewall correction and planned remediation to the unsupported component.",
"Prioritize the endpoint archive because its dashboard alert appears most dramatic.",
"Treat all five findings as one incident and apply one response.",
"Ignore the SIEM issue because the source still reports healthy connectivity.",
]}
bestAnswer={0}
explanation="The parser problem affects the ability to detect high-risk activity across a wider scope. Tool health alone does not prove required fields are usable."
/>

<SectionCard
eyebrow="Common Mistakes"
title="Mistakes That Weaken Multi-Tool Analysis"
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
eyebrow="Safe Integrated Lab"
title="Produce the Defensive Tool Effectiveness Report"
>
<div className="grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
<p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
Required Evidence Work
</p>
<ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-slate-300">
<li>Inventory all eight fictional tool families and their owners.</li>
<li>Map which sources, assets, users, applications, fields, actions, and time ranges each tool covers.</li>
<li>Preserve and reference all thirty fictional evidence records.</li>
<li>Separate the five findings using defensible correlation keys.</li>
<li>State confirmed facts, conclusions, alternatives, gaps, confidence, impact, priority, owner, and residual risk.</li>
<li>Identify the eight broader coverage and process improvements.</li>
</ol>
</div>

<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
Required Report Work
</p>
<ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
<li>Create the ten-section report structure.</li>
<li>Assign one accountable owner and supporting teams for every finding.</li>
<li>Recommend only narrow authorized changes.</li>
<li>Define positive, negative, high-risk, missing-field, delayed, duplicate, technical, and business tests.</li>
<li>Include rollback, expiration, monitoring, recertification, and closure criteria.</li>
<li>Write a one-page executive summary for a nontechnical school or organization leader.</li>
</ol>
</div>
</div>

<div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
Use only supplied fictional evidence. Do not access real tools,
systems, accounts, mailboxes, files, destinations, rules, policies,
scans, logs, or credentials. Do not publish real users, devices,
addresses, domains, paths, alerts, screenshots, or internal
security details.
</div>
</SectionCard>

<ScenarioDecisionLab
title="Five Tools Alert During the Same Morning"
scenario="A fictional endpoint quarantine, firewall object error, SIEM parser gap, web category block, and unsupported component appear during one review period. The evidence shows no shared user, process, request, destination, or causal sequence across all five."
choices={[
{
label: "Choice A",
response:
"Keep the findings separate, correlate only where shared evidence exists, prioritize each contextually, assign accountable owners, and note that the common review period does not prove one incident.",
outcome:
"Best defensive choice. Time proximity alone does not create a shared cause.",
tone: "best",
},
{
label: "Choice B",
response:
"Combine all five into one major incident because they occurred on the same day.",
outcome:
"Unsupported. The evidence does not establish a common chain.",
tone: "risk",
},
{
label: "Choice C",
response:
"Ignore every finding because they are unrelated.",
outcome:
"Weak response. Separate findings can still require important action.",
tone: "risk",
},
]}
/>

<ScenarioDecisionLab
title="The Most Severe Dashboard Alert Was Already Contained"
scenario="A fictional endpoint alert appears high on the dashboard, but supplied evidence shows quarantine before execution. A medium-severity SIEM issue causes a required field to disappear across many endpoints."
choices={[
{
label: "Choice A",
response:
"Prioritize the SIEM visibility gap while completing scoped validation and monitoring for the contained endpoint alert.",
outcome:
"Best defensive choice. Contextual risk and coverage matter more than displayed severity alone.",
tone: "best",
},
{
label: "Choice B",
response:
"Prioritize only the highest displayed severity.",
outcome:
"Weak response. The quieter issue creates broader false-negative risk.",
tone: "risk",
},
{
label: "Choice C",
response:
"Close both findings because neither caused a confirmed outage.",
outcome:
"Unsafe. Visibility and control problems require correction even without an outage.",
tone: "risk",
},
]}
/>

<DefenderChecklist
title="Defensive Tool Analysis Lab Checklist"
items={[
"I confirm the fictional scope, safety boundary, assets, users, applications, tools, owners, evidence sources, and time window.",
"I preserve original alerts, raw events, normalized fields, policies, rule versions, health records, tickets, owner statements, tests, and validation outcomes.",
"I map tool purpose, strengths, limitations, coverage, retention, health checks, actions, and dependencies.",
"I correlate only through defensible users, devices, processes, services, requests, messages, sessions, rules, changes, destinations, owners, and times.",
"I separate tool signals, verified findings, false positives, contained events, compensated risks, evidence gaps, and false-negative risks.",
"I prioritize using confidence, exposure, privilege, criticality, business impact, control strength, urgency, and remediation complexity.",
"I assign one accountable owner and supporting teams to every finding.",
"I recommend narrow authorized actions with rollback, positive and negative tests, high-risk tests, business validation, monitoring, and recertification.",
"I link every conclusion to preserved fictional evidence and state limitations and residual risk.",
"I never publish or use real tools, systems, users, devices, addresses, domains, paths, alerts, screenshots, rules, policies, files, or credentials.",
]}
/>

<MiniQuiz
title="I5.8 Mini Quiz: Defensive Tool Analysis Lab"
questions={quizQuestions}
/>

<PortfolioPrompt
title="Portfolio Prompt"
prompt="Create a complete fictional Defensive Tool Effectiveness Report using the Northstar case or a new safe fictional environment. Include an executive summary, scope, safety boundary, tool inventory, coverage map, health review, thirty or more evidence records, five or more separate findings, correlation keys, confidence, impact, priority, accountable owners, coverage gaps, narrow improvements, rollback, positive and negative tests, high-risk tests, missing-field tests, delayed and duplicate tests, business validation, monitoring, recertification, residual risk, closure criteria, and an evidence appendix."
tips={[
"Use only fictional users, devices, applications, tools, alerts, rules, events, addresses, domains, paths, tickets, owners, and organizations.",
"Include at least one contained alert, one configuration finding, one false-positive correction, one false-negative visibility risk, and one compensated vulnerability.",
"Make the executive summary decision-focused and keep the evidence appendix detailed and traceable.",
"Do not include real console screenshots, logs, queries, rules, scans, policies, credentials, addresses, domains, paths, or internal security details.",
]}
/>

<KeyTakeaways
takeaways={[
"No single defensive tool provides complete visibility, context, or certainty.",
"Tool effectiveness depends on purpose, health, coverage, configuration, evidence quality, ownership, workflow, validation, and limitations.",
"Alerts that occur near each other should remain separate unless shared evidence supports a relationship.",
"Displayed severity is different from evidence confidence, business impact, coverage risk, and contextual priority.",
"False-positive correction, containment review, configuration repair, parser restoration, and compensated remediation require different actions.",
"A professional report links every finding to preserved evidence, assigns accountable owners, validates outcomes, and documents residual risk.",
]}
/>

<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
Navigation
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Complete Module I5
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