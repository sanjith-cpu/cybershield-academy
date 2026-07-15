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
const previousLesson = `${modulePath}/email-web-and-dns-security-controls`;
const nextLesson = `${modulePath}/defensive-tool-analysis-lab`;

const objectives = [
"Explain why tool validation, health checks, coverage review, rule testing, and change history are necessary before trusting alerts or dashboards.",
"Distinguish false positives, benign true positives, false negatives, duplicate alerts, stale data, parser errors, threshold problems, exclusion problems, and evidence-incomplete findings.",
"Evaluate fictional rules, thresholds, baselines, suppressions, exceptions, and exclusions without weakening high-risk defensive coverage.",
"Design a controlled tuning workflow with authorization, preserved evidence, positive and negative tests, rollback, monitoring, owner approval, and residual-risk documentation.",
"Create a professional fictional Tool Validation and Tuning Report that explains the original logic, evidence, problem, narrow change, validation results, and remaining risk.",
];

const vocabulary = [
["Tool validation", "Evidence-based confirmation that a fictional security tool is healthy, current, correctly configured, receiving expected data, and producing the intended defensive result."],
["Tuning", "An approved change to fictional rules, thresholds, fields, exclusions, routing, severity, enrichment, or correlation logic intended to improve signal quality."],
["False positive", "A tool output that appears concerning but does not represent the intended risky condition after evidence-based review."],
["Benign true positive", "A tool correctly detects its defined behavior, but the behavior is approved, expected, or operationally explained."],
["False negative", "Relevant activity that a fictional tool fails to detect because of missing data, weak logic, broad exclusions, poor thresholds, unsupported fields, or coverage gaps."],
["Threshold", "A count, rate, value, score, duration, or condition that must be reached before a rule triggers."],
["Baseline", "A documented fictional pattern of expected activity used for comparison."],
["Suppression", "A controlled reduction of duplicate or expected alerts under exact documented conditions."],
["Exclusion", "A rule condition that removes a specific fictional user, device, process, destination, file, application, pattern, or time window from matching."],
["Rule drift", "A difference between the documented rule, tested rule, and currently deployed rule."],
["Rollback", "A prepared method to restore the previous approved tool configuration if tuning causes unexpected results."],
["Residual risk", "The remaining fictional risk after validation, tuning, compensating controls, monitoring, and accepted limitations are considered."],
];

const validationDimensions = [
{
  dimension: "Tool health",
  question:
    "Is the fictional agent, collector, gateway, service, connector, API, policy engine, and management plane operating normally?",
  evidence:
    "Service state, last check-in, policy status, update level, queue health, connectivity, and error records.",
  risk:
    "A dashboard can look normal while one source, agent, or control is offline.",
},
{
  dimension: "Data freshness",
  question:
    "Are endpoint, identity, firewall, DNS, web, application, cloud, inventory, and change records arriving on time?",
  evidence:
    "Event time, collection time, ingestion time, last received record, delayed batches, and queue metrics.",
  risk:
    "Stale data can create missing, late, or misordered alerts.",
},
{
  dimension: "Coverage",
  question:
    "Which fictional devices, users, applications, services, operating systems, network zones, and event types are included or excluded?",
  evidence:
    "Asset inventory, policy assignment, source inventory, supported platforms, exclusions, and retention.",
  risk:
    "A low alert count can reflect blind spots instead of low risk.",
},
{
  dimension: "Parsing and normalization",
  question:
    "Are source fields extracted and mapped correctly?",
  evidence:
    "Raw events, parsed values, normalized fields, parser version, field population, and source-format history.",
  risk:
    "A parser change can silently break searches and rule logic.",
},
{
  dimension: "Rule logic",
  question:
    "Do the fictional data sources, fields, conditions, entities, sequence, threshold, time window, and exclusions match the intended defensive question?",
  evidence:
    "Rule version, documentation, tests, alert examples, source events, and owner expectations.",
  risk:
    "Broad or incomplete logic can create excessive noise or missed coverage.",
},
{
  dimension: "Enrichment",
  question:
    "Are owner, role, privilege, asset criticality, location, managed state, application, and business mappings current?",
  evidence:
    "Inventory, identity, ownership, sensitivity, application, and change records.",
  risk:
    "Stale enrichment can misprioritize or misattribute alerts.",
},
{
  dimension: "Routing and workflow",
  question:
    "Does the fictional alert reach the correct queue, owner, severity, case, escalation path, and review timeline?",
  evidence:
    "Routing configuration, case creation, assignment, response time, and closure records.",
  risk:
    "A technically correct alert may still fail if nobody receives or reviews it.",
},
{
  dimension: "Validation and monitoring",
  question:
    "Has the rule or tool been tested against expected, disallowed, high-risk, missing-field, delayed, and duplicate scenarios?",
  evidence:
    "Test cases, results, rollback record, alert volume, missed detections, owner approval, and post-change monitoring.",
  risk:
    "A tuning change may reduce noise while creating a hidden false-negative gap.",
},
];

const classificationGuide = [
{
  outcome: "True positive",
  evidence:
    "The fictional rule triggered correctly and source evidence confirms the concerning condition the rule was designed to detect.",
  action:
    "Preserve evidence, assess scope and impact, assign the correct owner, take authorized action, validate, monitor, and document residual risk.",
},
{
  outcome: "Benign true positive",
  evidence:
    "The rule correctly detected the defined behavior, but owner, change, application, user, or business evidence explains it as expected.",
  action:
    "Document the explanation and consider narrow enrichment or tuning only when repeated expected noise creates operational burden.",
},
{
  outcome: "False positive",
  evidence:
    "The fictional alert does not represent the intended condition because of wrong asset mapping, stale reputation, parser error, threshold mismatch, duplicate data, or flawed logic.",
  action:
    "Correct the exact data or rule problem, test the correction, preserve broader coverage, and monitor.",
},
{
  outcome: "False negative risk",
  evidence:
    "Missing data, exclusions, unsupported fields, delayed ingestion, threshold design, retention, or source-health problems could hide relevant activity.",
  action:
    "Restore or document coverage, test high-risk variations, monitor health, and escalate the visibility gap.",
},
{
  outcome: "Duplicate or repeated alert",
  evidence:
    "The same fictional source event or entity sequence produces multiple alerts because of repeated ingestion, overlapping rules, retries, or grouping problems.",
  action:
    "Deduplicate narrowly while preserving distinct alerts for genuinely separate users, devices, sessions, requests, or time windows.",
},
{
  outcome: "Evidence-incomplete",
  evidence:
    "The alert exists, but required source events, fields, owners, timestamps, tool health, rule version, or business context are missing.",
  action:
    "State confirmed facts, identify the gaps, lower confidence, and request authorized supporting evidence.",
},
];

const tuningTargets = [
{
  target: "Threshold",
  use:
    "Adjust a fictional count, rate, score, duration, or value when baseline evidence shows the current trigger is too sensitive or too weak.",
  safeChange:
    "Use environment-specific data, preserve high-risk variations, test multiple values, and document why the chosen threshold is appropriate.",
  unsafeChange:
    "Increase the threshold until alerts disappear.",
},
{
  target: "Time window",
  use:
    "Adjust how close together events must occur when delays, normal workflows, or expected sequences affect correlation.",
  safeChange:
    "Compare event time and ingestion time, test short and long sequences, and preserve delayed high-risk cases.",
  unsafeChange:
    "Shorten the window without checking delayed sources.",
},
{
  target: "Entity grouping",
  use:
    "Change whether events are grouped by user, device, process, application, destination, session, request, or other identifier.",
  safeChange:
    "Use the most defensible shared identifiers and test that unrelated entities remain separate.",
  unsafeChange:
    "Group everything by time or network zone alone.",
},
{
  target: "Exclusion",
  use:
    "Remove an exact approved fictional pattern from matching when repeated expected activity is fully validated.",
  safeChange:
    "Limit the exclusion to the exact package, change ID, application, destination, owner, and time when possible.",
  unsafeChange:
    "Exclude an entire user group, folder, domain, application, zone, or device class.",
},
{
  target: "Enrichment",
  use:
    "Add fictional owner, role, criticality, application, location, or change context to improve classification and priority.",
  safeChange:
    "Validate the enrichment source, freshness, ownership, and fallback behavior.",
  unsafeChange:
    "Trust stale or manually entered labels without review.",
},
{
  target: "Severity and priority",
  use:
    "Change how technical evidence, confidence, privilege, exposure, criticality, and impact influence alert priority.",
  safeChange:
    "Separate tool severity from analyst confidence and business impact.",
  unsafeChange:
    "Set every alert to critical or lower everything to reduce workload.",
},
{
  target: "Suppression and deduplication",
  use:
    "Reduce repeated alerts for the same fictional event or ongoing case.",
  safeChange:
    "Suppress exact duplicates or linked case repeats while retaining new users, devices, destinations, and material changes.",
  unsafeChange:
    "Suppress all future alerts after the first one.",
},
{
  target: "Routing",
  use:
    "Send the alert to the correct fictional owner, queue, case type, and escalation path.",
  safeChange:
    "Test delivery, assignment, timing, backup ownership, and closure workflow.",
  unsafeChange:
    "Route alerts to a general mailbox with no accountable reviewer.",
},
];

const evidenceMatrix = [
{
  source: "Original alert",
  supports:
    "The fictional tool triggered under the displayed rule, severity, time, entities, fields, and action.",
  limitation:
    "Does not automatically prove final classification, cause, impact, or complete scope.",
},
{
  source: "Raw source events",
  supports:
    "What the originating fictional systems actually recorded before parsing and normalization.",
  limitation:
    "May still lack ownership, business purpose, or cross-source context.",
},
{
  source: "Rule configuration",
  supports:
    "The active logic, fields, entities, threshold, window, exclusions, severity, routing, and version.",
  limitation:
    "The documented and deployed rule may differ.",
},
{
  source: "Tool-health evidence",
  supports:
    "Agent, collector, parser, connector, policy, queue, update, and data-freshness state.",
  limitation:
    "Healthy status does not prove complete coverage or correct logic.",
},
{
  source: "Baseline and history",
  supports:
    "Expected fictional activity volume, timing, users, devices, applications, and prior alert behavior.",
  limitation:
    "Historical patterns can include unnoticed problems or may no longer represent current operations.",
},
{
  source: "Change and owner context",
  supports:
    "Approved maintenance, software deployment, role change, business workflow, expected activity, and ownership.",
  limitation:
    "Documentation can be incomplete, stale, or different from the technical sequence.",
},
{
  source: "Test results",
  supports:
    "How the fictional rule behaves against positive, negative, expected, delayed, duplicate, missing-field, and high-risk cases.",
  limitation:
    "Test cases cannot represent every future condition.",
},
{
  source: "Post-change monitoring",
  supports:
    "Whether alert volume, false positives, high-risk coverage, routing, and owner outcomes improved after tuning.",
  limitation:
    "Short monitoring periods may miss rare or seasonal behavior.",
},
];

const workflow = [
{
  step: "1",
  title: "Define the problem",
  detail:
    "State whether the fictional issue is noise, missed coverage, duplicate alerts, stale data, wrong routing, poor priority, or evidence incompleteness.",
},
{
  step: "2",
  title: "Preserve the original state",
  detail:
    "Keep the current rule, tool version, source events, alert examples, health state, baseline, exclusions, routing, and change history.",
},
{
  step: "3",
  title: "Identify the exact cause",
  detail:
    "Determine whether the problem comes from data, parsing, enrichment, thresholds, grouping, exclusions, logic, routing, or ownership.",
},
{
  step: "4",
  title: "Design the narrow change",
  detail:
    "Change only the exact fictional condition supported by evidence and preserve high-risk coverage.",
},
{
  step: "5",
  title: "Test and approve",
  detail:
    "Run positive, negative, expected, delayed, duplicate, missing-field, and high-risk tests with rollback ready.",
},
{
  step: "6",
  title: "Monitor and document",
  detail:
    "Compare alert volume, coverage, owner workload, missed detections, routing, business function, and residual risk after deployment.",
},
];


const testCases = [
{
  test: "Positive test",
  purpose:
    "Confirm that a supplied fictional sequence matching the intended rule creates the expected alert.",
  example:
    "Five failed sign-ins for one privileged account from a new device within ten minutes followed by denied MFA.",
  success:
    "The correct rule triggers once, includes all required evidence, receives the intended priority, and reaches the correct owner.",
},
{
  test: "Negative test",
  purpose:
    "Confirm that a similar fictional sequence missing an essential condition does not trigger.",
  example:
    "Five failures from the expected device during an approved password reset with no denied MFA and successful owner validation.",
  success:
    "The sequence is documented as expected or remains below the intended alert conditions.",
},
{
  test: "Expected-activity test",
  purpose:
    "Confirm that a known fictional deployment, backup, maintenance, or training workflow is handled correctly.",
  example:
    "An approved application update creates a temporary service restart and one new process.",
  success:
    "The exact approved pattern is enriched or narrowly tuned while unexplained variations remain visible.",
},
{
  test: "High-risk variation",
  purpose:
    "Confirm that tuning does not hide the most concerning version of the pattern.",
  example:
    "The same service restart occurs outside maintenance under a privileged account with an unknown parent process.",
  success:
    "The high-risk variation still alerts with appropriate evidence and priority.",
},
{
  test: "Missing-field test",
  purpose:
    "Determine how the tool behaves when one required fictional field is absent or fails parsing.",
  example:
    "The process path is missing while the process name and device remain present.",
  success:
    "The tool records an evidence gap, avoids false certainty, and does not silently treat the event as safe.",
},
{
  test: "Delayed-ingestion test",
  purpose:
    "Evaluate how a fictional event arriving after the normal correlation window affects alerting.",
  example:
    "A firewall event arrives twelve minutes late because the collector queue was delayed.",
  success:
    "The team understands whether the alert is late, missed, reconstructed, or covered by a separate health rule.",
},
{
  test: "Duplicate-event test",
  purpose:
    "Confirm that repeated ingestion of one fictional source event does not inflate counts.",
  example:
    "A connector retry sends the same event ID three times.",
  success:
    "The platform preserves one evidence chain and does not create artificial threshold matches.",
},
{
  test: "Rollback test",
  purpose:
    "Confirm that the prior fictional configuration can be restored quickly if tuning changes behavior unexpectedly.",
  example:
    "The new threshold reduces noise but also lowers visibility for a high-risk variation.",
  success:
    "The previous version is restored, alerting is validated, and the failed change remains documented.",
},
];

const tuningExamples = [
{
  title: "Approved deployment creates repeated endpoint alerts",
  originalLogic:
    "Alert whenever a new service is registered on a managed device.",
  problem:
    "Every approved study-client installation creates the same expected service-registration alert.",
  supportingEvidence:
    "Change ID, package identity, publisher, deployment agent, application path, owner, time window, and successful validation all match.",
  narrowChange:
    "Add exact approved package and change identifiers as enrichment while preserving alerts for unknown publishers, paths, parents, devices, and unapproved times.",
  validation:
    "Expected deployment test produces low-priority documented activity; unknown-process and unapproved-time tests still create alerts.",
},
{
  title: "Backup traffic exceeds the outbound-volume threshold",
  originalLogic:
    "Alert when one fictional server sends more than the set number of bytes within thirty minutes.",
  problem:
    "Scheduled backups consistently trigger the rule even though the destination, process, owner, and schedule are approved.",
  supportingEvidence:
    "Backup job ID, process, source, destination, schedule, owner, expected volume, and successful backup validation agree.",
  narrowChange:
    "Enrich the exact backup job and approved destination rather than excluding the server or raising the threshold for every process.",
  validation:
    "Approved backup traffic is classified correctly, while new destinations, unknown processes, and off-schedule transfers still alert.",
},
{
  title: "Parser update breaks a process-path rule",
  originalLogic:
    "Alert when a process launches from a fictional user-writable path.",
  problem:
    "A parser update places the path into the wrong normalized field, causing the rule to stop alerting.",
  supportingEvidence:
    "Raw events still contain the path, normalized events do not, and rule volume drops immediately after the parser version changes.",
  narrowChange:
    "Repair the exact field mapping, preserve the original parser and rule versions, and add a field-population health check.",
  validation:
    "Positive path test alerts, approved application-path test does not, and missing-field test generates a visibility warning.",
},
{
  title: "Authentication failures create duplicate alerts",
  originalLogic:
    "Alert after five failures for the same fictional account within ten minutes.",
  problem:
    "Connector retries duplicate one source event and create two alerts for one sequence.",
  supportingEvidence:
    "The repeated records share the same event ID, source timestamp, account, device, result, and collector retry identifier.",
  narrowChange:
    "Deduplicate exact event IDs before threshold calculation while preserving distinct failures from separate attempts.",
  validation:
    "Duplicate test creates one alert; six genuinely separate failures still meet the threshold.",
},
{
  title: "Temporary maintenance exclusion is too broad",
  originalLogic:
    "Suppress every alert from the application zone during the maintenance window.",
  problem:
    "An unrelated privileged sign-in from a new device is hidden during maintenance.",
  supportingEvidence:
    "The maintenance ticket covers one application deployment, not all users, devices, or identity activity in the zone.",
  narrowChange:
    "Replace the zone-wide exclusion with exact application, package, host, change ID, and approved process conditions.",
  validation:
    "Expected deployment alerts are handled as planned, while privileged new-device and unrelated endpoint variations remain visible.",
},
{
  title: "New educational domain is miscategorized",
  originalLogic:
    "Block fictional destinations categorized as entertainment.",
  problem:
    "A new approved learning platform is assigned the wrong category.",
  supportingEvidence:
    "Teacher owner, privacy review, content review, business purpose, destination ownership, and classroom validation agree.",
  narrowChange:
    "Correct only the exact destination classification with owner, expiration, and monitoring instead of allowing the entire category.",
  validation:
    "The approved destination works; unrelated entertainment destinations remain blocked.",
},
];

const monitoringMetrics = [
{
  metric: "Alert volume",
  question:
    "Did the fictional change reduce unnecessary alerts without creating an unexplained drop?",
  caution:
    "Lower volume is not automatically better if coverage also decreased.",
},
{
  metric: "True-positive retention",
  question:
    "Do known concerning test cases and high-risk variations still trigger?",
  caution:
    "A tuning change that removes noise but hides important patterns is unsuccessful.",
},
{
  metric: "False-positive rate",
  question:
    "How many reviewed alerts are still caused by known expected patterns or data-quality problems?",
  caution:
    "Classification quality depends on consistent review and sufficient evidence.",
},
{
  metric: "False-negative indicators",
  question:
    "Are missing fields, disconnected sources, delayed data, broad exclusions, or quiet rules creating visibility gaps?",
  caution:
    "False negatives are harder to measure because they may not create an alert.",
},
{
  metric: "Data quality",
  question:
    "Are required fictional fields populated, current, correctly normalized, and linked to the right entities?",
  caution:
    "A rule can appear healthy while using incomplete or incorrect fields.",
},
{
  metric: "Routing and response",
  question:
    "Does the alert reach the right owner, and is it reviewed within the expected time?",
  caution:
    "Detection without accountable response is incomplete.",
},
{
  metric: "Business impact",
  question:
    "Did the change preserve approved applications, users, services, and workflows?",
  caution:
    "A technically successful change can still create unacceptable operational impact.",
},
{
  metric: "Exception and owner status",
  question:
    "Are temporary exclusions, suppressions, category changes, and risk acceptances still owned and unexpired?",
  caution:
    "Temporary tuning often becomes permanent when lifecycle review is missing.",
},
];

const changeRecordFields = [
{
  field: "Original problem",
  example:
    "The fictional rule creates an average of forty expected alerts per approved deployment.",
},
{
  field: "Evidence",
  example:
    "Alert samples, raw events, rule version, baseline, owner records, change IDs, tool health, and validation results.",
},
{
  field: "Root cause",
  example:
    "The rule lacks exact package and approved-change context.",
},
{
  field: "Proposed change",
  example:
    "Add package ID and change ID enrichment for the approved deployment pattern.",
},
{
  field: "Protected coverage",
  example:
    "Unknown publisher, unapproved path, new device, privileged context, unexpected destination, and off-schedule behavior remain alerting.",
},
{
  field: "Approval and owner",
  example:
    "Security monitoring owner and application owner approve the fictional change.",
},
{
  field: "Test plan",
  example:
    "Positive, negative, expected, high-risk, missing-field, delayed, duplicate, and rollback cases.",
},
{
  field: "Rollback",
  example:
    "Restore rule version 18 and prior enrichment mapping if validation fails.",
},
{
  field: "Monitoring",
  example:
    "Review alert volume, high-risk test coverage, field quality, owner workload, and business function for fourteen fictional days.",
},
{
  field: "Residual risk",
  example:
    "Rare approved packages without a recorded change ID may still create alerts and require manual review.",
},
];

const timeline = [
{
  time: "08:00:00",
  source: "Rule baseline",
  event:
    "Fictional service-restart rule averages thirty-two alerts per approved deployment.",
  meaning:
    "Establishes the operational-noise problem without assuming the rule is unnecessary.",
},
{
  time: "08:05:12",
  source: "Change records",
  event:
    "Twenty-six alerts match exact deployment IDs and approved application hosts.",
  meaning:
    "Explains most alert volume with independent owner and change evidence.",
},
{
  time: "08:07:00",
  source: "System logs",
  event:
    "Four alerts match automatic service recovery after a documented dependency failure.",
  meaning:
    "Identifies a second expected operational pattern.",
},
{
  time: "08:08:30",
  source: "Endpoint evidence",
  event:
    "One alert is linked to an unknown parent process outside the approved maintenance window.",
  meaning:
    "Shows why the rule must not be disabled or broadly suppressed.",
},
{
  time: "08:09:10",
  source: "Data quality",
  event:
    "One alert lacks the required process-path field after a parser update.",
  meaning:
    "Identifies a visibility and confidence problem separate from alert noise.",
},
{
  time: "08:15:00",
  source: "Tuning proposal",
  event:
    "Proposal enriches exact deployment IDs, preserves recovery and unknown-process coverage, and adds a missing-field health alert.",
  meaning:
    "Targets separate causes instead of applying one broad exclusion.",
},
{
  time: "08:25:00",
  source: "Positive test",
  event:
    "Unknown-process restart still triggers a high-priority alert.",
  meaning:
    "Confirms important coverage remains.",
},
{
  time: "08:27:00",
  source: "Expected test",
  event:
    "Approved deployment restart is labeled expected and linked to its change record.",
  meaning:
    "Confirms reduced noise without hiding the event.",
},
{
  time: "08:29:00",
  source: "Missing-field test",
  event:
    "Absent process path creates a data-quality warning.",
  meaning:
    "Prevents silent false confidence.",
},
{
  time: "09:00:00",
  source: "Deployment",
  event:
    "Rule version 19 is approved and deployed with rollback ready.",
  meaning:
    "Records controlled implementation.",
},
{
  time: "16:00:00",
  source: "Monitoring",
  event:
    "Expected alert workload decreases while high-risk tests and owner routing remain successful.",
  meaning:
    "Provides initial post-change validation.",
},
{
  time: "Day 14",
  source: "Review",
  event:
    "Tuning remains effective; one residual-risk condition is retained for manual review.",
  meaning:
    "Supports closure with documented limitations rather than claiming perfect detection.",
},
];

const mistakes = [
"Assuming fewer alerts automatically means a better tool.",
"Disabling a rule because most recent alerts were expected.",
"Increasing thresholds without reviewing baseline, privilege, asset criticality, and high-risk variations.",
"Creating broad exclusions for users, devices, processes, folders, applications, domains, zones, or maintenance windows.",
"Treating benign true positives and false positives as the same problem.",
"Ignoring false-negative risk because missed activity does not produce visible alerts.",
"Tuning the rule without preserving the original version, evidence, health state, and change history.",
"Testing only the expected case and not positive, negative, missing-field, delayed, duplicate, and high-risk cases.",
"Using stale owner, identity, asset, reputation, or criticality enrichment.",
"Changing severity or routing merely to reduce workload.",
"Closing the change before post-deployment monitoring and owner validation.",
"Publishing real rules, alerts, exclusions, thresholds, logs, users, devices, addresses, domains, screenshots, or internal tool details.",
];

const quizQuestions = [
{
  question:
    "What is a benign true positive?",
  choices: [
    "The fictional tool correctly detects its defined behavior, but the behavior is approved or expected after review.",
    "The tool fails to trigger.",
    "The alert is caused only by missing data.",
    "The rule is disabled.",
  ],
  answer: 0,
  explanation:
    "The detection is technically correct even though the activity is not a security incident.",
},
{
  question:
    "What is the greatest danger of a broad exclusion?",
  choices: [
    "It can hide unrelated high-risk activity and create false-negative coverage gaps.",
    "It always increases alert volume.",
    "It automatically repairs data quality.",
    "It improves ownership records.",
  ],
  answer: 0,
  explanation:
    "Exclusions should be limited to exact validated patterns.",
},
{
  question:
    "Why should the original rule version be preserved?",
  choices: [
    "So reviewers can compare behavior, audit the change, and restore the prior state if tuning fails.",
    "So testing is unnecessary.",
    "So all alerts can be deleted.",
    "So the owner never needs approval.",
  ],
  answer: 0,
  explanation:
    "Preservation supports traceability, rollback, and reliable validation.",
},
{
  question:
    "Which test best checks that important coverage remains after tuning?",
  choices: [
    "A high-risk variation using a privileged account, new device, unknown process, or unexplained destination.",
    "Only the expected maintenance case.",
    "Only the dashboard count.",
    "Only a duplicate event.",
  ],
  answer: 0,
  explanation:
    "High-risk testing checks whether noise reduction created a hidden blind spot.",
},
{
  question:
    "What can cause a false negative?",
  choices: [
    "Missing sources, parser failures, broad exclusions, delayed data, poor thresholds, unsupported fields, or short retention.",
    "Only high alert volume.",
    "Only user reports.",
    "Only successful validation.",
  ],
  answer: 0,
  explanation:
    "False negatives can result from many visibility and logic problems.",
},
{
  question:
    "What is the strongest threshold-tuning method?",
  choices: [
    "Use fictional baseline evidence, test several values, preserve high-risk cases, prepare rollback, and monitor results.",
    "Raise the threshold until alerts stop.",
    "Copy a threshold from an unrelated environment.",
    "Use the same threshold for every asset.",
  ],
  answer: 0,
  explanation:
    "Thresholds should reflect the specific environment and defensive purpose.",
},
{
  question:
    "When is a tuning change complete?",
  choices: [
    "After approval, testing, deployment, technical and business validation, monitoring, owner acceptance, and residual-risk documentation.",
    "When the alert count decreases.",
    "When the configuration saves successfully.",
    "When one expected test passes.",
  ],
  answer: 0,
  explanation:
    "A successful save or lower volume does not prove safe, effective tuning.",
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


function ValidationDimensionGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Validation Dimensions
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Eight Questions to Ask Before Trusting Tool Output
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {validationDimensions.map((item) => (
        <div
          key={item.dimension}
          className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="text-lg font-black text-cyan-100">
            {item.dimension}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {item.question}
          </p>

          <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Useful evidence
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              {item.evidence}
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function ClassificationGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Signal Classification
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Six Outcomes That Require Different Responses
    </h2>

    <div className="mt-6 grid gap-5">
      {classificationGuide.map((item) => (
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
              {item.evidence}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Strong response
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              {item.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

function TuningTargetGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Tuning Targets
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Eight Places a Tool Can Be Improved—or Accidentally Weakened
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {tuningTargets.map((item) => (
        <div
          key={item.target}
          className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="font-black text-cyan-100">{item.target}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.use}</p>

          <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Safe change
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              {item.safeChange}
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
              Unsafe change
            </p>
            <p className="mt-2 text-sm leading-6 text-red-50">
              {item.unsafeChange}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

function TestGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Validation Tests
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Eight Safe Tests for a Fictional Tool Change
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {testCases.map((item) => (
        <div
          key={item.test}
          className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="font-black text-cyan-100">{item.test}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {item.purpose}
          </p>

          <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
              Fictional example
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-50">
              {item.example}
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
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

function ExampleGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Tuning Examples
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Six Narrow Corrections That Preserve Defensive Coverage
    </h2>

    <div className="mt-6 grid gap-5">
      {tuningExamples.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="text-xl font-black text-white">{item.title}</h3>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Original logic
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                {item.originalLogic}
              </p>
            </div>

            <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Problem
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.problem}
              </p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Supporting evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.supportingEvidence}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Narrow change
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.narrowChange}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Validation result
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              {item.validation}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

function MetricGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Post-Change Monitoring
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Eight Metrics That Show Whether Tuning Actually Worked
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {monitoringMetrics.map((item) => (
        <div
          key={item.metric}
          className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="font-black text-cyan-100">{item.metric}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {item.question}
          </p>
          <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
              Caution
            </p>
            <p className="mt-2 text-sm leading-6 text-yellow-50">
              {item.caution}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

function ChangeRecordGuide() {
return (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Change Record
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Ten Fields in a Professional Tuning Record
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {changeRecordFields.map((item) => (
        <div
          key={item.field}
          className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
        >
          <h3 className="font-black text-cyan-100">{item.field}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {item.example}
          </p>
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
      What Tuning Evidence Can and Cannot Prove
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
      Validate and Tune a Tool in Six Controlled Steps
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
      Tuning Timeline
    </p>
    <h2 className="mt-2 text-2xl font-bold text-white">
      Follow a Noisy Rule from Baseline to Monitored Improvement
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
          <p className="text-sm font-black text-blue-200">{item.source}</p>
          <p className="text-sm font-semibold text-white">{item.event}</p>
          <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
        </div>
      ))}
    </div>
  </section>
);
}


export default function ToolValidationTuningAndFalsePositivesPage() {
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
            Lesson 7 of 8
          </span>
        </div>

        <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
          I5.7 Tool Validation, Tuning, and False Positives
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          Learn how defenders verify fictional tool health, data quality,
          coverage, rules, thresholds, exclusions, alerts, routing, and
          monitoring before making narrow, tested improvements.
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
        lessonTitle="Tool Validation, Tuning, and False Positives"
        lessonNumber={7}
        totalLessons={8}
      />

      <ReadinessCheck
        title="Before You Start"
        items={[
          "I understand that fewer alerts do not automatically mean stronger security.",
          "I will preserve the original fictional rule, alert examples, source events, health state, baseline, exclusions, routing, and change history.",
          "I will distinguish true positives, benign true positives, false positives, false negatives, duplicates, and evidence-incomplete findings.",
          "I will test expected and high-risk variations before approving a tuning change.",
          "I will use only fictional rules, alerts, tools, users, devices, addresses, domains, logs, and organizations.",
        ]}
      />

      <SectionCard
        eyebrow="Professional Hook"
        title="A Tool Can Be Noisy, Quiet, Healthy, Broken, or Misleading"
      >
        <p className="leading-8">
          A noisy tool may be correctly detecting expected activity. A quiet
          tool may be missing data. A high-severity alert may come from stale
          enrichment. A rule that worked last month may fail after a parser
          update. Defenders validate the whole evidence chain before changing
          thresholds or exclusions.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
              Weak response
            </p>
            <p className="mt-2 leading-7">
              “The rule is annoying, so disable it.”
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
              Strong response
            </p>
            <p className="mt-2 leading-7">
              “Preserve the original state, identify the exact source of
              noise or missed coverage, make the narrowest approved change,
              test high-risk variations, keep rollback ready, and monitor.”
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
        title="Tuning Shapes Both Analyst Workload and Defensive Visibility"
      >
        <p className="leading-8">
          Poor tuning can overwhelm reviewers with expected alerts or hide
          real concerns behind broad exclusions. Strong tuning improves
          signal quality while preserving source evidence, high-risk
          coverage, accountable ownership, safe rollback, and measurable
          post-change results.
        </p>
      </SectionCard>

      <ValidationDimensionGuide />
      <ClassificationGuide />
      <TuningTargetGuide />

      <SectionCard
        eyebrow="Core Concept"
        title="Reduce Noise Without Reducing Evidence"
      >
        <p className="leading-8">
          The goal of tuning is not to make alerts disappear. The goal is to
          help the fictional tool distinguish expected activity, data-quality
          problems, and high-risk variations more accurately while keeping
          the original evidence available for review.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-5">
          {[
            ["Preserve", "Keep the original rule, source events, alert examples, health state, and baseline."],
            ["Explain", "Identify the exact data, logic, threshold, exclusion, enrichment, or routing problem."],
            ["Narrow", "Change only the condition supported by evidence."],
            ["Challenge", "Test expected, negative, missing-field, delayed, duplicate, and high-risk variations."],
            ["Monitor", "Measure signal quality, coverage, business function, ownership, and residual risk."],
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

      <TestGuide />
      <ExampleGuide />
      <MetricGuide />
      <ChangeRecordGuide />
      <EvidenceGuide />
      <WorkflowGuide />
      <TimelineGuide />

      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Key Vocabulary
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">
          Validation and Tuning Terms
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
        title="Fake Tool Validation and Tuning Dashboard"
        subtitle="Training dashboard for the fictional Northstar Learning Services defensive-tool environment."
        metrics={[
          {
            label: "Rules under review",
            value: "12",
            note: "Four noisy rules, three missing-field risks, two duplicate-alert problems, two stale-enrichment issues, and one routing failure.",
          },
          {
            label: "Validated changes",
            value: "7",
            note: "Each has preserved evidence, approval, positive and negative tests, rollback, monitoring, and owner acceptance.",
          },
          {
            label: "Coverage gaps",
            value: "5",
            note: "Two delayed collectors, one broad maintenance exclusion, one unsupported endpoint type, and one short-retention source remain open.",
          },
        ]}
      />

      <FakeAlertCard
        title="Service-Restart Rule Produces Heavy Expected Noise"
        severity="Medium"
        time="08:08 AM"
        source="Fake Monitoring Rule Validation Console"
        details="A fictional rule creates thirty-two alerts during one approved deployment. Twenty-six match exact deployment IDs, four match documented automatic recovery, one involves an unknown parent process outside maintenance, and one lacks a required process-path field after a parser change."
        recommendation="Do not disable the rule. Preserve the original evidence, enrich exact deployment identifiers, keep recovery and unknown-process coverage, add a missing-field health warning, run positive and high-risk tests, prepare rollback, and monitor alert volume and missed coverage."
      />

      <FakeLogPanel
        title="Fake Rule Validation Evidence"
        logs={[
          "08:00:00 BASELINE rule='service_restart_monitor' average_alerts='32_per_deployment'",
          "08:05:12 CHANGE_MATCH alerts='26' deployment_ids='approved'",
          "08:07:00 SYSTEM recovery_alerts='4' dependency_failure='documented'",
          "08:08:30 ENDPOINT parent='unknown-helper.exe' maintenance_match='false' severity='high'",
          "08:09:10 DATA_QUALITY process_path='missing' parser_version='7.2'",
          "08:15:00 PROPOSAL exact_change_enrichment='true' broad_exclusion='false'",
          "08:25:00 TEST high_risk_unknown_parent='alerted'",
          "08:27:00 TEST approved_deployment='expected_enriched'",
          "08:29:00 TEST missing_field='health_warning_created'",
          "09:00:00 DEPLOY rule_version='19' rollback='ready'",
          "16:00:00 MONITOR workload='reduced' high_risk_coverage='preserved'",
          "DAY14 REVIEW residual_risk='documented' owner_acceptance='complete'",
        ]}
      />

      <AnalyzeEvidenceCard
        title="Which Tuning Decision Is Best Supported?"
        evidence={[
          "Most alerts match exact approved deployment identifiers.",
          "Four alerts represent documented automatic service recovery.",
          "One alert involves an unknown parent process outside maintenance.",
          "One alert lacks a required field after a parser update.",
          "The original rule and source events are preserved.",
          "The proposed change uses exact change enrichment rather than a broad exclusion.",
          "High-risk and missing-field tests remain successful.",
          "Post-change monitoring shows lower workload without loss of tested coverage.",
        ]}
        question="Which decision is strongest?"
        options={[
          "Deploy the narrow enrichment and data-quality correction with approval, rollback, testing, monitoring, and documented residual risk.",
          "Disable the service-restart rule because most alerts were expected.",
          "Exclude every service restart during maintenance windows.",
          "Increase the threshold until the rule never alerts during deployments.",
        ]}
        bestAnswer={0}
        explanation="The evidence supports separate, narrow corrections for expected deployment activity and missing data while preserving the unexplained high-risk pattern."
      />

      <SectionCard
        eyebrow="Common Mistakes"
        title="Mistakes That Create Noise or Hidden Blind Spots"
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
        title="Tune a Fictional Monitoring Rule"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Fictional Environment
            </p>
            <h3 className="mt-3 text-xl font-black text-white">
              Meadowbrook Rule Quality Review
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Review a supplied fictional monitoring rule with thirty alert
              examples, one delayed source, one parser error, one duplicate
              batch, two expected workflows, one broad exclusion, one routing
              problem, and three high-risk test variations.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
              Required Analysis
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
              <li>State the original fictional rule purpose, sources, fields, entities, threshold, window, exclusions, severity, routing, and owner.</li>
              <li>Preserve alerts, raw events, normalized fields, health records, baseline, rule version, and change history.</li>
              <li>Classify true positives, benign true positives, false positives, duplicates, false-negative risks, and incomplete findings.</li>
              <li>Identify the exact cause of each signal-quality problem.</li>
              <li>Propose only narrow changes that preserve high-risk coverage.</li>
              <li>Run positive, negative, expected, high-risk, missing-field, delayed, duplicate, and rollback tests.</li>
              <li>Define post-change alert volume, data quality, coverage, routing, business, owner, and residual-risk monitoring.</li>
            </ol>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
          Use only supplied fictional evidence. Do not access real security
          consoles, alter production rules, disable alerts, change exclusions,
          search private logs, test real systems, or publish real rules,
          thresholds, users, devices, addresses, domains, screenshots, or
          internal monitoring details.
        </div>
      </SectionCard>

      <ScenarioDecisionLab
        title="A Broad Maintenance Exclusion Hides a Privileged Sign-In"
        scenario="A fictional rule suppresses every alert from the application zone during maintenance. A privileged sign-in from a new device occurs during the window and is not reported."
        choices={[
          {
            label: "Choice A",
            response:
              "Replace the broad exclusion with exact application, host, package, process, and change identifiers; restore privileged new-device coverage; test both expected and high-risk cases; document the missed-coverage risk; and monitor.",
            outcome:
              "Best defensive choice. The tuning becomes specific to the approved work instead of hiding unrelated activity.",
            tone: "best",
          },
          {
            label: "Choice B",
            response:
              "Keep the exclusion because maintenance windows are expected.",
            outcome:
              "Unsafe. Expected maintenance does not make unrelated privileged activity safe.",
            tone: "risk",
          },
          {
            label: "Choice C",
            response:
              "Disable all maintenance tuning without reviewing operational impact.",
            outcome:
              "Weak response. Evidence-based narrow tuning is the stronger solution.",
            tone: "risk",
          },
        ]}
      />

      <ScenarioDecisionLab
        title="A Parser Error Makes the Dashboard Quiet"
        scenario="A fictional endpoint source remains connected, but a format change leaves the process-path field empty. A path-based rule stops alerting."
        choices={[
          {
            label: "Choice A",
            response:
              "Compare raw and normalized events, preserve parser and rule versions, repair the exact field mapping through approved change control, add a field-health check, run positive and missing-field tests, and monitor.",
            outcome:
              "Best defensive choice. Quiet alerting is treated as a data-quality and false-negative risk.",
            tone: "best",
          },
          {
            label: "Choice B",
            response:
              "Assume the concerning behavior stopped because alerts disappeared.",
            outcome:
              "Unsupported. The rule may be missing required evidence.",
            tone: "risk",
          },
          {
            label: "Choice C",
            response:
              "Remove the process-path condition so every process triggers.",
            outcome:
              "Unsafe. The rule would lose meaning and create heavy noise.",
            tone: "risk",
          },
        ]}
      />

      <DefenderChecklist
        title="Tool Validation, Tuning, and False Positives Checklist"
        items={[
          "I define the fictional signal-quality problem before changing the tool.",
          "I preserve the original rule, alerts, source events, normalized fields, health state, baseline, exclusions, routing, and change history.",
          "I distinguish true positives, benign true positives, false positives, false negatives, duplicates, and evidence-incomplete findings.",
          "I review tool health, freshness, coverage, parsing, normalization, enrichment, rule logic, routing, suppression, and retention.",
          "I identify the exact root cause instead of treating every noisy alert the same way.",
          "I make the narrowest approved change and protect privileged, new-device, unknown-process, unexpected-destination, off-schedule, and other high-risk variations.",
          "I run positive, negative, expected, high-risk, missing-field, delayed, duplicate, and rollback tests.",
          "I monitor alert volume, true-positive retention, false-positive rate, false-negative indicators, data quality, routing, business impact, and exception status.",
          "I document approval, owner, test results, rollback, monitoring, confidence, limitations, residual risk, and closure criteria.",
          "I use only fictional evidence and never publish real rules, alerts, exclusions, thresholds, logs, users, devices, addresses, domains, screenshots, or internal tool details.",
        ]}
      />

      <MiniQuiz
        title="I5.7 Mini Quiz: Tool Validation, Tuning, and False Positives"
        questions={quizQuestions}
      />

      <PortfolioPrompt
        title="Portfolio Prompt"
        prompt="Create a fictional Tool Validation and Tuning Report for one monitoring rule. Include tool purpose, source inventory, tool health, data freshness, coverage, raw events, normalized fields, parser state, enrichment, original rule version, entities, threshold, time window, exclusions, routing, baseline, alert samples, true positives, benign true positives, false positives, duplicates, false-negative risks, evidence gaps, root cause, proposed narrow change, protected high-risk coverage, owner, approval, rollback, positive tests, negative tests, expected tests, high-risk tests, missing-field tests, delayed-ingestion tests, duplicate tests, post-change metrics, business validation, residual risk, and closure criteria."
        tips={[
          "Use only fictional tools, sources, events, users, devices, addresses, domains, rules, alerts, owners, and organizations.",
          "Include one parser problem, one duplicate-event problem, one broad-exclusion risk, one expected workflow, and one high-risk variation.",
          "Show the original and revised rule behavior clearly without including executable attack instructions.",
          "Do not include real console screenshots, rules, queries, logs, thresholds, exclusions, addresses, domains, or internal security details.",
        ]}
      />

      <KeyTakeaways
        takeaways={[
          "Tool validation includes health, freshness, coverage, parsing, normalization, enrichment, rule logic, routing, testing, and monitoring.",
          "Benign true positives are correctly detected expected behavior; false positives are incorrect representations of the intended condition.",
          "False-negative risk can come from missing sources, parser failures, broad exclusions, delayed data, weak thresholds, or short retention.",
          "Tuning should reduce known noise without removing evidence or high-risk variations.",
          "Every change needs preserved configuration, approval, positive and negative tests, rollback, business validation, and post-change monitoring.",
          "A strong tuning report explains what changed, why it changed, what coverage remains protected, and what residual risk still exists.",
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