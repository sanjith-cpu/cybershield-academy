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
const previousLesson = `${modulePath}/memory-process-and-volatile-evidence-concepts`;
const nextLesson = `${modulePath}/reporting-findings-and-case-communication`;

const objectives = [
  "Explain how fictional network, DNS, proxy, firewall, flow, application, identity, storage, cloud, support, and business records contribute different pieces of a forensic timeline.",
  "Normalize fictional timestamps by preserving original values, source time zones, clock state, delay, resolution, collection time, and conversion method.",
  "Distinguish genuinely independent evidence from dashboards, screenshots, exports, and summaries derived from the same underlying source.",
  "Resolve fictional conflicts by documenting source health, missing records, alternative explanations, confidence, and the reason for every timeline revision.",
  "Create a defensible fictional network-and-cloud correlation package with source maps, normalized events, findings, limitations, version history, and portfolio-safe reporting."
];
const vocabulary = [
  [
    "Network evidence",
    "Fictional DNS, proxy, firewall, flow, routing, connection, gateway, service, or packet-summary records relevant to an approved case question."
  ],
  [
    "Cloud audit evidence",
    "Fictional platform records describing identity, administrative, storage, sharing, configuration, service, API, or object activity within a hosted environment."
  ],
  [
    "Timeline correlation",
    "The fictional process of comparing events from several sources to understand order, relationship, agreement, conflict, and uncertainty."
  ],
  [
    "Original timestamp",
    "The fictional time exactly as recorded by its source before normalization or interpretation."
  ],
  [
    "Normalized timestamp",
    "A fictional converted time placed into a common reference zone while preserving the original value and conversion method."
  ],
  [
    "Clock drift",
    "A fictional difference between a source clock and the trusted reference time."
  ],
  [
    "Source delay",
    "A fictional gap between when an event occurred and when the record became available to the collector or analyst."
  ],
  [
    "Timestamp resolution",
    "The level of fictional time precision supported by a source, such as minutes, seconds, or milliseconds."
  ],
  [
    "Event lineage",
    "The fictional relationship connecting a normalized timeline event to every original evidence record and transformation used to create it."
  ],
  [
    "Independent corroboration",
    "Support from a genuinely different fictional source with its own collection path, event-generation logic, and limitations."
  ],
  [
    "Timeline version",
    "A fictional numbered state of the timeline that preserves changes, new evidence, conflicts, corrections, reviewer decisions, and prior conclusions."
  ],
  [
    "Conflict record",
    "A fictional entry documenting when sources disagree about time, actor, action, result, scope, or sequence."
  ],
  [
    "Negative evidence",
    "The fictional absence of an expected event, used cautiously only when source health, coverage, retention, ownership, and event-generation conditions are verified."
  ],
  [
    "Confidence statement",
    "A fictional explanation of how strongly the timeline relationship is supported and which limitations or alternatives remain."
  ]
];
const sourceFamilies = [
  {
    "title": "DNS and name-resolution records",
    "examples": "Fictional query time, requested name, response, resolver, client, cache state, result code, and source health.",
    "can_support": "That a fictional system attempted to resolve a service or destination name within the source's coverage.",
    "cannot_prove": "That a connection succeeded, content transferred, a human initiated the request, or every resolution attempt was retained.",
    "correlate": "Proxy, firewall, flow, process, application, identity, and cloud records."
  },
  {
    "title": "Proxy and secure-web-gateway records",
    "examples": "Fictional source identity, destination category, request method, result, bytes, policy action, session, and timestamp.",
    "can_support": "That a fictional request passed through the gateway and received a recorded policy or service result.",
    "cannot_prove": "The full content, human intent, complete session behavior, or activity that bypassed the gateway.",
    "correlate": "DNS, endpoint process, identity, application, firewall, cloud, and vendor records."
  },
  {
    "title": "Firewall and network-flow records",
    "examples": "Fictional source and destination, ports, protocol, direction, action, byte counts, duration, session identifiers, and device time.",
    "can_support": "That a fictional network relationship was allowed, denied, or observed under the recorded conditions.",
    "cannot_prove": "Application meaning, payload content, successful authentication, user intent, or exact business impact.",
    "correlate": "Process connections, DNS, proxy, application, identity, cloud, and service records."
  },
  {
    "title": "Application and API records",
    "examples": "Fictional request identifier, job, route, object, response, user or service identity, retry, error, and processing time.",
    "can_support": "How a fictional workflow processed a request and which service action produced an observed result.",
    "cannot_prove": "Complete platform activity when logging is delayed, sampled, filtered, unhealthy, or missing expected event types.",
    "correlate": "Identity, process, file, storage, cloud, network, deployment, support, and business records."
  },
  {
    "title": "Identity and session records",
    "examples": "Fictional sign-in, token, session, role, service identity, device context, authentication result, and lifecycle event.",
    "can_support": "Which fictional identity context was active and how it relates to an approved workflow.",
    "cannot_prove": "Which human controlled a shared or service identity, every later action, or intent.",
    "correlate": "Application requests, process ownership, cloud audit, storage transactions, network connections, and role records."
  },
  {
    "title": "Cloud storage and sharing records",
    "examples": "Fictional object read, write, copy, delete, version, share, public-link, permission, download, and administrative events.",
    "can_support": "Which fictional platform action was recorded for an object or access setting within verified coverage.",
    "cannot_prove": "That no unrecorded activity occurred outside retention, event coverage, time, account, region, or platform boundaries.",
    "correlate": "Identity, application, network, process, file metadata, support, and vendor records."
  },
  {
    "title": "Deployment and configuration records",
    "examples": "Fictional version, artifact, configuration, rollout, approval, runtime state, startup time, rollback, and environment.",
    "can_support": "Which approved or outdated fictional version and configuration should have been active during an event.",
    "cannot_prove": "That repository state exactly matched runtime state without startup, process, integrity, and deployment validation.",
    "correlate": "Process, application, file, cloud, monitoring, support, and recovery records."
  },
  {
    "title": "Which time zone and offset apply?",
    "question": "Did the fictional source use local time, UTC, a regional offset, or an application-specific display setting?",
    "strong": "Record original zone or offset, normalized zone, daylight-saving state, and conversion method.",
    "risk": "Assuming every source displays the same zone."
  },
  {
    "title": "Is the source clock trustworthy?",
    "question": "Was fictional clock synchronization healthy, drifting, manually changed, unavailable, or compared with a trusted reference?",
    "strong": "Record measured drift, verification time, trusted reference, uncertainty, and correction range.",
    "risk": "Correcting a clock without preserving the original value or evidence for the adjustment."
  },
  {
    "title": "Was delivery delayed?",
    "question": "Did the fictional record arrive late because of queueing, forwarding, export, parsing, outage, batching, or repair?",
    "strong": "Separate event time from receipt time and preserve the delay as a source-health limitation.",
    "risk": "Placing events according to arrival order instead of source event time."
  },
  {
    "title": "What precision does the source support?",
    "question": "Does the fictional source resolve time to minutes, seconds, milliseconds, grouped batches, or an estimated range?",
    "strong": "Use time ranges or grouped ordering when exact order is unsupported.",
    "risk": "Inventing precise sequence from coarse timestamps."
  },
  {
    "title": "Do independent records agree?",
    "question": "Do fictional file, process, identity, application, network, cloud, deployment, support, and business records support the same relationship?",
    "strong": "Map source independence, agreements, conflicts, and limits before assigning confidence.",
    "risk": "Counting several dashboards generated from one source as separate confirmation."
  },
  {
    "field": "Original time and source",
    "purpose": "Preserves the fictional timestamp exactly as recorded with source, field name, time zone, offset, and resolution.",
    "example": "09:17:00 UTC-04:00 from file-system creation metadata.",
    "quality": "Original value remains visible after normalization."
  },
  {
    "field": "Normalized time or range",
    "purpose": "Places the fictional event in a common reference zone while preserving uncertainty.",
    "example": "13:17:00 UTC, or 13:17–13:18 UTC when source precision is coarse.",
    "quality": "Conversion and uncertainty are documented."
  },
  {
    "field": "Source health",
    "purpose": "Records fictional delivery, completeness, retention, parsing, clock, accessibility, ownership, and expected-event coverage.",
    "example": "Application source delayed twelve minutes; completeness validated after repair.",
    "quality": "Health is evaluated at the relevant event window."
  },
  {
    "field": "Direct event observation",
    "purpose": "States exactly what the fictional source records without interpretation.",
    "example": "The copy worker targeted the approved-copy folder for job 441.",
    "quality": "Uses exact source fields and evidence identifiers."
  },
  {
    "field": "Related events",
    "purpose": "Connects fictional process, file, identity, application, network, cloud, deployment, support, and business events.",
    "example": "P-03, A-03, APP-17, ID-07, NET-11, and CLOUD-21.",
    "quality": "Independent and duplicate source relationships are visible."
  },
  {
    "field": "Conflict or alternative",
    "purpose": "Preserves fictional disagreement, missing evidence, alternate mechanism, or unresolved ordering.",
    "example": "File creation appears before delayed application delivery; source delay explains the apparent order conflict.",
    "quality": "The conflict is not deleted merely because one explanation is preferred."
  },
  {
    "field": "Confidence and limitation",
    "purpose": "Explains how strongly the fictional relationship is supported and what remains uncertain.",
    "example": "High confidence in automated copy mechanism; low confidence in exact human awareness time.",
    "quality": "Reasoning is tied to source quality and alternatives."
  },
  {
    "step": "2",
    "title": "Verify source identity and health",
    "detail": "Confirm fictional evidence integrity, lineage, collection method, time zone, clock state, delay, retention, parsing, completeness, accessibility, and expected-event coverage.",
    "output": "Source-health and normalization register."
  },
  {
    "step": "3",
    "title": "Extract direct events",
    "detail": "Record fictional event identifiers, original timestamps, fields, actors, objects, actions, results, sessions, destinations, and source references without interpretation.",
    "output": "Original event table."
  },
  {
    "step": "4",
    "title": "Normalize time carefully",
    "detail": "Convert fictional events to a common zone while preserving original values, offset, drift, delay, resolution, uncertainty, and conversion method.",
    "output": "Normalized event table with time ranges."
  },
  {
    "step": "5",
    "title": "Map source independence",
    "detail": "Identify fictional independent sources, duplicate views, derived exports, shared collectors, transformation steps, and common failure modes.",
    "output": "Source-dependency and duplication map."
  },
  {
    "step": "6",
    "title": "Correlate relationships and conflicts",
    "detail": "Compare fictional process, file, identity, application, network, cloud, deployment, support, business, and source-health evidence.",
    "output": "Correlation matrix, conflicts, and alternatives."
  },
  {
    "step": "7",
    "title": "Build and version the timeline",
    "detail": "Order fictional events only as precisely as the evidence supports, preserve grouped or uncertain ranges, link every event to parent evidence, and document revisions.",
    "output": "Versioned normalized timeline."
  },
  {
    "step": "8",
    "title": "Write bounded findings",
    "detail": "Separate fictional observations, supported relationships, alternatives, confidence, limitations, impact boundaries, owner decisions, and follow-up needs.",
    "output": "Timeline findings and reviewer package."
  }
];
const normalizationQuestions = [
  {
    "title": "Identify the timestamp meaning",
    "question": "Is the fictional value an event, receipt, processing, export, collection, file, or report time?",
    "strong": "Preserve the original field name, source, meaning, and value before converting it.",
    "risk": "Combining different timestamp meanings into one generic time column."
  },
  {
    "title": "Confirm zone, offset, and clock state",
    "question": "Which zone and offset apply, and was the fictional source clock synchronized or drifting?",
    "strong": "Record the original zone, normalized zone, daylight-saving state, drift, reference, and conversion method.",
    "risk": "Assuming every source uses the same clock or silently correcting a value."
  },
  {
    "title": "Separate event time from delivery time",
    "question": "Did queueing, forwarding, export, parsing, outage, or batching delay the fictional record?",
    "strong": "Preserve both event and receipt times and document the delay as a source-health limitation.",
    "risk": "Ordering events by when the analyst received them."
  },
  {
    "title": "Respect source precision",
    "question": "Does the fictional source support minutes, seconds, milliseconds, a batch, or only an estimated range?",
    "strong": "Use a range or grouped ordering when exact sequence is unsupported.",
    "risk": "Inventing exact order from coarse timestamps."
  },
  {
    "title": "Map source independence",
    "question": "Are the fictional records genuinely independent or several views of the same underlying evidence?",
    "strong": "Trace dashboards, screenshots, exports, and summaries to their parent source and common failure modes.",
    "risk": "Counting duplicate views as separate confirmation."
  },
  {
    "title": "Preserve every revision",
    "question": "Did delayed evidence, corrected timing, owner clarification, or reviewer feedback change the fictional timeline?",
    "strong": "Keep the prior version and record the reason, author, reviewer, affected events, findings, and confidence.",
    "risk": "Silently replacing the earlier timeline."
  }
];

const correlationFields = [
  {
    "field": "Timeline event identifier",
    "purpose": "Creates a unique fictional reference for the normalized event and its revision history.",
    "example": "NRA-T-014-v2.",
    "quality": "Unique, never reused, and linked to parent evidence."
  },
  {
    "field": "Original and normalized time",
    "purpose": "Preserves the fictional source value while placing the event into a common reference zone.",
    "example": "09:17 UTC-04:00 preserved beside 13:17 UTC.",
    "quality": "Includes source field, zone, offset, resolution, and conversion method."
  },
  {
    "field": "Source health",
    "purpose": "Records fictional delay, completeness, retention, parsing, clock state, ownership, and expected coverage.",
    "example": "Application records arrived twelve minutes late and were later validated.",
    "quality": "Evaluated for the relevant event window."
  },
  {
    "field": "Direct observation",
    "purpose": "States exactly what the fictional source records without adding interpretation.",
    "example": "The copy worker targeted approved-copy for job 441.",
    "quality": "Uses exact fields and evidence identifiers."
  },
  {
    "field": "Related evidence",
    "purpose": "Connects fictional process, file, identity, application, network, cloud, deployment, and business events.",
    "example": "P-03, A-03, APP-17, ID-07, NET-11, and CLOUD-21.",
    "quality": "Independent and duplicate-source relationships remain visible."
  },
  {
    "field": "Conflict or alternative",
    "purpose": "Preserves disagreement, missing evidence, alternate mechanisms, or unresolved ordering.",
    "example": "File creation appears before application delivery because the application source was delayed.",
    "quality": "The conflict remains documented even after a preferred explanation is selected."
  },
  {
    "field": "Confidence and limitation",
    "purpose": "Explains how strongly the fictional relationship is supported and what remains uncertain.",
    "example": "High confidence in the automated copy mechanism; low confidence in exact human awareness time.",
    "quality": "Tied to source quality, alternatives, and evidence gaps."
  },
  {
    "field": "Version and review history",
    "purpose": "Records the fictional author, reviewer, reason, changed sources, affected findings, and confidence updates.",
    "example": "Version 2 added delayed application records and adjusted three events.",
    "quality": "Earlier versions remain preserved and reviewable."
  }
];

const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the case boundary",
    "detail": "Restate the fictional question, approved sources, owners, time window, privacy limits, and evidence identifiers.",
    "output": "Correlation objective and approved source map."
  },
  {
    "step": "2",
    "title": "Verify source identity and health",
    "detail": "Confirm fictional integrity, lineage, collection method, zone, clock state, delay, retention, parsing, and completeness.",
    "output": "Source-health and normalization register."
  },
  {
    "step": "3",
    "title": "Extract direct events",
    "detail": "Record fictional identifiers, original timestamps, actors, objects, actions, results, sessions, destinations, and source references.",
    "output": "Original event table."
  },
  {
    "step": "4",
    "title": "Normalize time carefully",
    "detail": "Convert events to a common zone while preserving original values, drift, delay, resolution, uncertainty, and method.",
    "output": "Normalized event table with ranges."
  },
  {
    "step": "5",
    "title": "Map source independence",
    "detail": "Identify independent sources, duplicate views, shared collectors, transformations, and common failure modes.",
    "output": "Source-dependency map."
  },
  {
    "step": "6",
    "title": "Correlate relationships and conflicts",
    "detail": "Compare fictional process, file, identity, application, network, cloud, deployment, support, and business records.",
    "output": "Correlation matrix and conflict register."
  },
  {
    "step": "7",
    "title": "Build and version the timeline",
    "detail": "Order events only as precisely as supported, retain uncertain ranges, link parent evidence, and record every revision.",
    "output": "Versioned normalized timeline."
  },
  {
    "step": "8",
    "title": "Write bounded findings",
    "detail": "Separate observations, supported relationships, alternatives, confidence, limitations, impact boundaries, and follow-up needs.",
    "output": "Timeline findings and reviewer package."
  }
];

const timelineEvents = [
  {
    "id": "T-01",
    "original": "09:14:36 UTC-04:00",
    "normalized": "13:14:36 UTC",
    "source": "Identity",
    "event": "Approved fictional archive-export service session SVC-22 begins.",
    "relationship": "Provides service context for job 441.",
    "confidence": "High",
    "limit": "Identity context does not prove every later action."
  },
  {
    "id": "T-02",
    "original": "09:15:42 UTC-04:00",
    "normalized": "13:15:42 UTC",
    "source": "Process + application",
    "event": "Scheduler launches archive-export-worker for job 441 using export-legacy configuration.",
    "relationship": "Connects approved scheduling to the outdated runtime configuration.",
    "confidence": "High",
    "limit": "The application record arrived later but preserved the earlier event time."
  },
  {
    "id": "T-03",
    "original": "09:16:08 UTC-04:00",
    "normalized": "13:16:08 UTC",
    "source": "Process",
    "event": "Export worker launches child copy-worker with target approved-copy.",
    "relationship": "Strongest runtime link to the duplicate-folder mechanism.",
    "confidence": "High",
    "limit": "The snapshot does not capture the full process lifetime."
  },
  {
    "id": "T-04",
    "original": "09:16:11–09:16:48 UTC-04:00",
    "normalized": "13:16:11–13:16:48 UTC",
    "source": "Network flow",
    "event": "Copy-worker communicates with the internal archive-storage API.",
    "relationship": "Supports an internal service route during the copy operation.",
    "confidence": "High",
    "limit": "Flow records do not reveal full payload content."
  },
  {
    "id": "T-05",
    "original": "09:17:00 UTC-04:00",
    "normalized": "13:17:00–13:17:59 UTC",
    "source": "File metadata",
    "event": "Duplicate-folder creation values begin appearing.",
    "relationship": "Consistent with a later duplicate-path creation event.",
    "confidence": "Medium-High",
    "limit": "Source resolution and platform copy behavior require a range."
  },
  {
    "id": "T-06",
    "original": "09:17:14 UTC-04:00",
    "normalized": "13:17:14 UTC",
    "source": "Storage transaction",
    "event": "First duplicate-file write completes under job 441.",
    "relationship": "Corroborates the process target and file metadata.",
    "confidence": "High",
    "limit": "The record supports object completion, not human intent."
  },
  {
    "id": "T-07",
    "original": "09:18:03 UTC-04:00",
    "normalized": "13:18:03 UTC",
    "source": "Cloud audit",
    "event": "No public-link or external-share setting is created in the approved window.",
    "relationship": "Narrows supported cloud impact within verified coverage.",
    "confidence": "Medium-High",
    "limit": "The conclusion remains bounded by platform and time-window coverage."
  },
  {
    "id": "T-08",
    "original": "09:20:05 UTC event / 09:32:09 UTC receipt",
    "normalized": "09:20:05 UTC event",
    "source": "Application audit",
    "event": "Application records completion of the job 441 copy operation.",
    "relationship": "Confirms the workflow after delayed delivery is resolved.",
    "confidence": "High",
    "limit": "Receipt order must not be mistaken for event order."
  },
  {
    "id": "T-09",
    "original": "09:38 local",
    "normalized": "13:38 UTC",
    "source": "Source health",
    "event": "The application-audit delivery delay is identified and assigned for repair.",
    "relationship": "Explains why application events appeared after file and process records.",
    "confidence": "High",
    "limit": "Timeline version 1 had reduced confidence until repair."
  },
  {
    "id": "T-10",
    "original": "10:02 local",
    "normalized": "14:02 UTC",
    "source": "Deployment + owner decision",
    "event": "The outdated configuration is replaced and corrected validation is approved.",
    "relationship": "Provides the corrective transition after the forensic finding.",
    "confidence": "High",
    "limit": "Recovery validation does not prove earlier human intent."
  }
];

const sourceHealthRecords = [
  {
    "source": "File metadata",
    "health": "Current and verified",
    "time": "UTC-04:00; second-level resolution",
    "coverage": "Approved and duplicate folder paths, five files each, creation and modification fields.",
    "limit": "Copy behavior may reset creation values while preserving modification values.",
    "role": "Direct artifact timing and content-identity evidence."
  },
  {
    "source": "Process snapshot",
    "health": "Verified supplied snapshot",
    "time": "Captured 09:24:10 UTC-04:00",
    "coverage": "Process tree, sessions, arguments, open handles, modules, and internal connections.",
    "limit": "Represents one moment and omits earlier or later process state.",
    "role": "Runtime mechanism and process relationship evidence."
  },
  {
    "source": "Identity records",
    "health": "Current and complete for approved window",
    "time": "UTC with millisecond resolution",
    "coverage": "Service-session start, role, token lifecycle, and approved identity context.",
    "limit": "Service identity does not prove human intent or every action.",
    "role": "Identity and session correlation."
  },
  {
    "source": "Application audit",
    "health": "Delayed twelve minutes, later validated",
    "time": "UTC; second-level event time and separate receipt time",
    "coverage": "Job start, copy operation, retry state, result, configuration, and completion.",
    "limit": "Initial arrival order was not the same as event order.",
    "role": "Workflow and job-level confirmation after repair."
  },
  {
    "source": "Cloud audit",
    "health": "Current with verified event coverage",
    "time": "UTC; second-level resolution",
    "coverage": "Object operations, sharing, public links, downloads, permissions, and administrative actions.",
    "limit": "Conclusion remains bounded by retention, account, platform, and approved time window.",
    "role": "Impact and cloud-action boundary."
  },
  {
    "source": "Network flow",
    "health": "Current and complete for internal service routes",
    "time": "UTC-04:00; second-level start and duration",
    "coverage": "Source process route, internal storage destination, protocol, bytes, and duration.",
    "limit": "Does not reveal full payload or application meaning.",
    "role": "Internal connection and destination correlation."
  },
  {
    "source": "Deployment records",
    "health": "Verified repository and rollout history",
    "time": "UTC; minute-level approval and second-level startup records",
    "coverage": "Approved version, outdated configuration reference, rollout, correction, and restart.",
    "limit": "Repository state requires runtime confirmation.",
    "role": "Configuration and root-condition timing."
  },
  {
    "id": "T-02",
    "original": "09:14:36 UTC-04:00",
    "normalized": "13:14:36 UTC",
    "source": "Identity",
    "event": "Approved archive-export service session SVC-22 begins.",
    "relationship": "Provides the service identity context for job 441.",
    "confidence": "High",
    "limit": "Identity context does not prove every later action."
  },
  {
    "id": "T-03",
    "original": "09:15:42 UTC-04:00",
    "normalized": "13:15:42 UTC",
    "source": "Process + application",
    "event": "Scheduler launches archive-export-worker for job 441 using export-legacy configuration.",
    "relationship": "Connects approved scheduling to the outdated runtime configuration.",
    "confidence": "High",
    "limit": "Application record arrived later but preserved the earlier event time."
  },
  {
    "id": "T-04",
    "original": "09:16:08 UTC-04:00",
    "normalized": "13:16:08 UTC",
    "source": "Process",
    "event": "Export worker launches child copy-worker with source approved and target approved-copy.",
    "relationship": "Strongest runtime link to the duplicate-folder mechanism.",
    "confidence": "High",
    "limit": "Snapshot does not capture the entire process lifetime."
  },
  {
    "id": "T-05",
    "original": "09:16:11–09:16:48 UTC-04:00",
    "normalized": "13:16:11–13:16:48 UTC",
    "source": "Network flow",
    "event": "Copy-worker communicates with the internal archive-storage API.",
    "relationship": "Supports an internal service route during the copy operation.",
    "confidence": "High",
    "limit": "Flow records do not reveal full payload content."
  },
  {
    "id": "T-06",
    "original": "09:17:00 UTC-04:00",
    "normalized": "13:17:00–13:17:59 UTC",
    "source": "File metadata",
    "event": "Duplicate-folder file-system creation values begin appearing.",
    "relationship": "Consistent with a later duplicate-path creation event.",
    "confidence": "Medium-High",
    "limit": "Second-level field display and platform copy behavior require a range."
  },
  {
    "id": "T-07",
    "original": "09:17:14 UTC-04:00",
    "normalized": "13:17:14 UTC",
    "source": "Storage transaction",
    "event": "First duplicate-file write completes under job 441.",
    "relationship": "Corroborates the process target and file metadata.",
    "confidence": "High",
    "limit": "Storage record covers object completion, not human intent."
  },
  {
    "id": "T-08",
    "original": "09:18:03 UTC-04:00",
    "normalized": "13:18:03 UTC",
    "source": "Cloud audit",
    "event": "No public link or external-share setting is created for the approved or duplicate folder.",
    "relationship": "Narrows supported cloud impact within verified coverage.",
    "confidence": "Medium-High",
    "limit": "Negative conclusion remains bounded by platform and time-window coverage."
  },
  {
    "id": "T-09",
    "original": "09:20:05 UTC event / 09:32:09 UTC receipt",
    "normalized": "09:20:05 UTC event",
    "source": "Application audit",
    "event": "Application records copy operation completion for job 441.",
    "relationship": "Confirms the same copy workflow after delayed delivery is resolved.",
    "confidence": "High",
    "limit": "Receipt order must not be mistaken for event order."
  },
  {
    "id": "T-10",
    "original": "09:28 local minute resolution",
    "normalized": "13:28–13:28:59 UTC",
    "source": "Support + application",
    "event": "Research-review application session references the approved folder.",
    "relationship": "Supports application reference after the export completes.",
    "confidence": "High for application reference",
    "limit": "Does not prove full human viewing of every file."
  },
  {
    "id": "T-11",
    "original": "09:38 local",
    "normalized": "13:38 UTC",
    "source": "Source-health record",
    "event": "Application-audit delivery delay is identified and assigned for repair.",
    "relationship": "Explains why application events appeared after file and process records.",
    "confidence": "High",
    "limit": "Earlier timeline version had reduced confidence until repair."
  },
  {
    "id": "T-12",
    "original": "10:02 local",
    "normalized": "14:02 UTC",
    "source": "Deployment + owner decision",
    "event": "Outdated configuration is replaced and the corrected workflow is approved for validation.",
    "relationship": "Provides the corrective-action transition after the forensic finding.",
    "confidence": "High",
    "limit": "Recovery validation belongs to the incident-response record, not proof of prior intent."
  }
];
const findingMatrix = [
  {
    "finding": "F-01",
    "statement": "The approved fictional scheduler launched archive-export job 441 under the approved service identity.",
    "support": "Independent identity, process, application, and business-schedule records.",
    "alternative": "Manual execution is not supported by the supplied session or command records.",
    "confidence": "High",
    "limitation": "Service identity does not identify human intent."
  },
  {
    "finding": "F-02",
    "statement": "The export worker using the outdated configuration launched the child copy process that created the duplicate path.",
    "support": "Process arguments, application job, storage transaction, file metadata, deployment state, and internal network flow.",
    "alternative": "Synchronization or manual copying remain possible but receive less support.",
    "confidence": "High",
    "limitation": "The process snapshot represents one moment and exact activation start depends on deployment correlation."
  },
  {
    "finding": "F-03",
    "statement": "The apparent file-and-application timestamp conflict was caused by delayed application delivery, not by a reversed event sequence.",
    "support": "Separate application event and receipt times, source-health record, process start, storage transaction, and file creation range.",
    "alternative": "Clock drift was considered but not supported by source synchronization checks.",
    "confidence": "High",
    "limitation": "The file source supports a one-minute range rather than a single exact ordering point."
  },
  {
    "finding": "F-04",
    "statement": "All observed copy-related network activity remained on the approved internal archive-storage route.",
    "support": "Process-to-flow association, internal destination, DNS, firewall, and application service mapping.",
    "alternative": "Unrecorded activity outside verified coverage cannot be completely excluded.",
    "confidence": "Medium-High",
    "limitation": "Flow data does not reveal full payload content."
  },
  {
    "finding": "F-05",
    "statement": "The supplied fictional evidence does not support public sharing, external download, or unrelated-account access.",
    "support": "Cloud audit, identity, network, application, support, and business records.",
    "alternative": "Events outside retention, platform, account, or approved time boundaries remain outside the conclusion.",
    "confidence": "Medium-High",
    "limitation": "This is a bounded no-supported-evidence statement, not proof of impossibility."
  },
  {
    "finding": "F-06",
    "statement": "Timeline version 2 is more reliable than version 1 because it integrates repaired application records and preserves earlier source-health limitations.",
    "support": "Application completeness validation, event-versus-receipt distinction, reviewer record, and preserved prior version.",
    "alternative": "No competing timeline better explains the independent evidence set.",
    "confidence": "High",
    "limitation": "Future approved evidence could still require another revision."
  }
];
const commonMistakes = [
  "Placing fictional events in the order that records arrived instead of using the actual event-time field.",
  "Converting timestamps without preserving original values, source fields, offsets, resolution, clock state, and conversion method.",
  "Assuming every fictional source uses the same time zone.",
  "Inventing exact event order when a source supports only a minute or multi-second range.",
  "Treating several dashboards, screenshots, CSV files, and summaries generated from one source as independent corroboration.",
  "Ignoring fictional source delay, parsing failure, retention, clock drift, batching, queueing, or export behavior.",
  "Treating a firewall or flow record as proof of payload content, purpose, or human intent.",
  "Treating a cloud-audit absence as proof that an event was impossible without verifying coverage, health, retention, owner, account, platform, and time boundaries.",
  "Assuming an identity event proves every later application, file, storage, or network action.",
  "Silently replacing an earlier fictional timeline after delayed evidence arrives.",
  "Deleting conflicts rather than preserving alternative explanations and the reason for the preferred interpretation.",
  "Failing to connect normalized events and findings to parent evidence identifiers.",
  "Publishing real hostnames, addresses, routes, accounts, logs, timestamps, cloud records, vendors, destinations, or internal architecture in a portfolio."
];
const quizQuestions = [
  {
    "question": "What should happen before fictional timestamps from different sources are compared?",
    "choices": [
      "Preserve original values and identify timestamp meaning, source, time zone, clock state, delay, resolution, and conversion method.",
      "Sort all values alphabetically.",
      "Assume every source uses UTC.",
      "Discard conflicting timestamps."
    ],
    "answer": 0,
    "explanation": "Reliable correlation begins with source-aware timestamp normalization."
  },
  {
    "question": "What is independent corroboration?",
    "choices": [
      "Support from a genuinely different fictional source with its own event-generation and collection path.",
      "A screenshot and CSV from the same dashboard.",
      "Two copies of the same export.",
      "A summary that repeats one log record."
    ],
    "answer": 0,
    "explanation": "Independent corroboration should not share the same underlying source or failure mode."
  },
  {
    "question": "How should a fictional application record with separate event and receipt times be placed in the timeline?",
    "choices": [
      "Use the event time for the activity, preserve the receipt time and delay as source-health context, and document both.",
      "Use only the receipt time.",
      "Use whichever time matches the preferred story.",
      "Delete the delayed record."
    ],
    "answer": 0,
    "explanation": "Event time and delivery time answer different questions and both should remain visible."
  },
  {
    "question": "What can a fictional internal network-flow record support?",
    "choices": [
      "That a process communicated with the recorded internal destination under the documented conditions.",
      "The full payload content.",
      "Human intent.",
      "External disclosure."
    ],
    "answer": 0,
    "explanation": "Flow records show network relationships but not complete application meaning or intent."
  },
  {
    "question": "When can fictional negative evidence be useful?",
    "choices": [
      "When source health, event coverage, retention, ownership, account, platform, and time boundaries are verified.",
      "Whenever no record is immediately visible.",
      "Only when one dashboard is green.",
      "It can never be useful."
    ],
    "answer": 0,
    "explanation": "Absence can be meaningful only within a verified evidence boundary."
  },
  {
    "question": "Why should earlier fictional timeline versions be preserved?",
    "choices": [
      "They show how new evidence, corrections, source health, and reviewer decisions changed events, findings, and confidence.",
      "They are needed only for decoration.",
      "They should be deleted to avoid confusion.",
      "They replace the evidence register."
    ],
    "answer": 0,
    "explanation": "Version history makes the analytical process transparent and reviewable."
  },
  {
    "question": "What makes a fictional timeline finding defensible?",
    "choices": [
      "It links original and normalized times to independent evidence, conflicts, alternatives, confidence, limitations, scope, and version history.",
      "It contains the largest number of events.",
      "It always assigns one exact second.",
      "It matches the first dashboard."
    ],
    "answer": 0,
    "explanation": "Defensible timelines are traceable, bounded, and honest about uncertainty."
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

export default function NetworkCloudTimelineCorrelationPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.6 Network, Cloud, and Timeline Correlation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender correlates supplied fictional
            network, identity, application, file, process, storage, cloud,
            deployment, support, business, and source-health evidence while
            preserving original timestamps, normalizing time carefully,
            resolving conflicts, tracking source independence, and versioning
            every major timeline change.
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
          lessonTitle="Network, Cloud, and Timeline Correlation"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive evidence.",
            "I will not capture traffic, connect to, query, scan, inspect, export from, or access any real network, cloud platform, account, system, log, or private record.",
            "I will preserve original timestamps, source fields, time zones, clock state, delay, resolution, collection time, and conversion method.",
            "I will distinguish independent evidence from duplicate dashboards, screenshots, exports, and summaries.",
            "I will preserve conflicts, alternative explanations, limitations, confidence, source health, and every timeline version.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same Incident Can Look Different in Every Evidence Source"
        >
          <p className="leading-8">
            The fictional Northbridge case contains file timestamps in local
            time, identity records in UTC, network flows in local time,
            minute-level support reports, a process snapshot at one exact
            moment, and application events that arrived twelve minutes late.
            Without careful normalization, the copy operation appears to occur
            after the duplicate files already exist. Once event time and receipt
            time are separated, the sources support a consistent automated
            workflow.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak correlation
              </p>

              <p className="mt-2 leading-7">
                Sort every exported timestamp, count every dashboard as
                independent confirmation, delete conflicts, and present one
                exact sequence without source-health or precision limits.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional correlation
              </p>

              <p className="mt-2 leading-7">
                Preserve original values, understand source behavior, normalize
                with documented methods, map source independence, use ranges
                where needed, retain conflicts, and version the timeline.
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
          title="A Timeline Is an Analytical Model, Not a Simple Sorted Spreadsheet"
        >
          <p className="leading-8">
            Fictional sources record different stages of the same event. A file
            system may record object creation, an application may record job
            completion, a network device may record a connection start, a cloud
            platform may record an object operation, and a collector may record
            when the event arrived. The analyst must preserve these meanings and
            avoid converting several different times into one unsupported
            certainty.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Preserve–Normalize–Correlate–Version Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Preserve", "Keep every fictional original timestamp, source field, time zone, offset, resolution, clock state, receipt time, and source-health condition."],
              ["Normalize", "Convert to a common reference only with a documented method, uncertainty range, drift or delay note, and parent evidence."],
              ["Correlate", "Compare genuinely independent fictional file, process, identity, application, network, cloud, deployment, support, business, and source-health evidence."],
              ["Version", "Preserve every fictional timeline revision, new source, correction, conflict, reviewer decision, affected finding, and confidence change."],
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
            Network, Cloud, and Timeline Correlation Terms
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
            Evidence Sources
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Source Families and Their Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceFamilies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Examples
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Can support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.can_support}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Cannot prove alone
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.cannot_prove}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Correlate with
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.correlate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Timestamp Normalization
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Ordering Fictional Events
          </h2>

          <div className="mt-6 grid gap-5">
            {normalizationQuestions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong method
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Analysis risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Correlation Fields
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fields for a Reviewable Timeline Event
          </h2>

          <div className="mt-6 grid gap-5">
            {correlationFields.map((item) => (
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
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Build a Versioned Fictional Forensic Timeline
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
          title="Fake Northbridge Timeline Correlation Dashboard"
          subtitle="Training dashboard for supplied fictional evidence only."
          metrics={[
            {
              label: "Sources normalized",
              value: "8",
              note: "File, process, identity, application, cloud, network, deployment, and business records are mapped.",
            },
            {
              label: "Timeline events",
              value: "12",
              note: "Every fictional event preserves original time, normalized time, source, relationship, confidence, and limitation.",
            },
            {
              label: "Open correlation conflicts",
              value: "1",
              note: "Exact file-event ordering remains a one-minute range because of source resolution.",
            },
          ]}
        />

        <FakeAlertCard
          title="Application Event Arrived after File and Process Records"
          severity="Medium"
          time="09:38 AM"
          source="Fake Timeline Correlation Console"
          details="The fictional application audit record arrived twelve minutes after its event time, creating an apparent conflict with file creation and process records."
          recommendation="Preserve event and receipt times, document source delay and repair, validate completeness, compare process, storage, file, identity, network, and deployment records, use a range where precision is limited, retain timeline version 1, create version 2 with the new evidence, and record every changed finding and confidence level."
        />

        <FakeLogPanel
          title="Fake Northbridge Correlation Records"
          logs={[
            "09:14:36 ID session='SVC-22' identity='archive-export-service'",
            "09:15:42 PROCESS worker='archive-export-worker' job='441'",
            "09:16:08 PROCESS child='copy-worker' target='approved-copy'",
            "09:16:11 FLOW destination='archive-storage-api.internal' state='allowed'",
            "09:17:00 FILE creation='duplicate paths begin' resolution='seconds'",
            "09:17:14 STORAGE object_write='first duplicate file complete'",
            "09:18:03 CLOUD public_share='none' external_download='none'",
            "09:20:05 APP event='copy complete' receipt='09:32:09'",
            "09:28 SUPPORT app='archive-review' target='approved folder'",
            "09:38 HEALTH app_delivery='delayed_12m' repair='assigned'",
            "09:54 CORRELATE mechanism='approved worker with outdated config'",
            "09:58 TIMELINE version='v2' changed_events='T-03,T-06,T-09'",
            "10:02 DEPLOY config='corrected' validation='approved'",
            "10:06 FINDING external_disclosure='not supported within coverage'",
            "10:10 REVIEW source_independence='verified' duplicate_views='marked'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Source Health
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Source Normalization Register
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceHealthRecords.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.source}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.health}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Time behavior", item.time],
                    ["Coverage", item.coverage],
                    ["Limitation", item.limit],
                    ["Correlation role", item.role],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.source}-${label}`}
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
            Versioned Timeline
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Normalized Timeline Version 2
          </h2>

          <div className="mt-6 grid gap-4">
            {timelineEvents.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-200">
                    {item.source}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[0.55fr_0.55fr_1.2fr]">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      Original
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.original}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      Normalized
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.normalized}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Event
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.event}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Relationship
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.relationship}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Correlation Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findingMatrix.map((item) => (
              <article
                key={item.finding}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.finding}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Timeline Conclusion Is Best Supported?"
          evidence={[
            "The fictional service session begins before job 441 starts.",
            "The scheduler launches the export worker using the outdated configuration.",
            "The export worker launches the child copy process targeting approved-copy.",
            "Internal network flow and storage transactions align with the copy process.",
            "Duplicate-folder file creation values begin during the same correlation window.",
            "Application event time confirms the copy operation even though the record arrived twelve minutes late.",
            "Cloud and identity records do not support public sharing, external download, or unrelated-account access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The approved fictional export workflow using an outdated configuration created the duplicate path through an internal service route; delayed application delivery caused the apparent timestamp conflict, and external disclosure is not supported within verified coverage.",
            "The delayed application record proves the file metadata is false.",
            "The internal network connection proves data exfiltration.",
            "Every dashboard confirms the conclusion independently.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves time meaning, source independence, delayed delivery, internal routing, impact boundaries, and verified evidence limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Network, Cloud, and Timeline Correlation"
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
          title="Build the Northbridge Versioned Correlation Timeline"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Source Health, Time Normalization, Correlation, and Findings
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete source map, normalized timeline, conflict register,
                findings matrix, and revision history.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Approved source inventory with parent evidence identifiers.</li>
                <li>Source-health register covering time zone, clock state, delay, resolution, retention, parsing, completeness, ownership, and expected events.</li>
                <li>Original event table with direct observations.</li>
                <li>Normalized event table preserving original and converted times.</li>
                <li>Independent-source and duplicate-view map.</li>
                <li>Correlation matrix with agreements, conflicts, alternatives, and gaps.</li>
                <li>Timeline versions 1 and 2 with a revision record.</li>
                <li>Findings, confidence, limitations, impact boundaries, owner decisions, and portfolio-safe summaries.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not capture, query, scan, inspect, or access any real network or
            cloud environment. Complete the lab only from fictional records
            displayed on this page.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Application Record Arrives Twelve Minutes Late"
          scenario="The fictional application event time fits the file, process, and storage sequence, but the record was received twelve minutes later."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve event and receipt times, document source delay and repair, validate completeness, retain timeline version 1, create version 2, update affected events and findings, and explain the confidence change.",
              outcome:
                "Best defensive choice. Delivery timing and event timing remain separate and reviewable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Place the event at the receipt time because that is when the analyst saw it.",
              outcome:
                "Weak. Receipt order is not the same as event order.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the earlier timeline so no one sees the conflict.",
              outcome:
                "Unsafe. Prior versions and analytical changes should remain visible.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Several Dashboards Show the Same Cloud Event"
          scenario="A fictional cloud dashboard, CSV export, screenshot, and leadership summary all show no public-link creation."
          choices={[
            {
              label: "Choice A",
              response:
                "Trace all four views to the same cloud-audit source, count them as one evidence family, verify coverage and health, and seek independent identity, network, application, and support evidence.",
              outcome:
                "Best defensive choice. Source independence is evaluated instead of inflated.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Count all four views as four independent confirmations.",
              outcome:
                "Weak. They share the same underlying source and failure modes.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the cloud source because it has several views.",
              outcome:
                "Incomplete. The source remains useful when its lineage and limits are understood.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Network, Cloud, and Timeline Correlation Checklist"
          items={[
            "I can identify fictional DNS, proxy, firewall, flow, application, identity, cloud, storage, deployment, support, business, and source-health records.",
            "I can preserve original timestamps, source fields, time zones, offsets, clock state, delay, resolution, receipt time, collection time, and conversion method.",
            "I can distinguish event time from delivery, export, collection, processing, and report-generation time.",
            "I can use a time range when fictional source precision does not support an exact second.",
            "I can map genuinely independent evidence and mark dashboards, screenshots, exports, and summaries derived from the same source.",
            "I can interpret DNS, network flow, cloud audit, identity, and application evidence within their real boundaries.",
            "I can preserve negative-evidence limits involving health, retention, coverage, account, platform, ownership, and approved time windows.",
            "I can document conflicts, alternatives, missing records, source repair, and confidence changes.",
            "I can preserve earlier fictional timeline versions and record why each event or finding changed.",
            "I will use only fictional evidence and never expose or inspect real routes, addresses, accounts, logs, cloud records, destinations, hostnames, owners, or private information.",
          ]}
        />

        <MiniQuiz
          title="I12.6 Mini Quiz: Network, Cloud, and Timeline Correlation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Network, Cloud, and Timeline Correlation Package for the Northbridge Research Archive case. Include source inventory, source-health records, original event times, normalized times, conversion methods, clock and delay notes, source-independence map, duplicate views, correlation windows, conflict records, alternatives, timeline versions 1 and 2, findings, confidence, limitations, impact boundaries, reviewer decisions, revision history, and a portfolio-safety statement."
          tips={[
            "Use only fictional hostnames, addresses, routes, accounts, logs, events, clouds, services, owners, dates, times, and organizations.",
            "Preserve original and normalized timestamps together rather than replacing one with the other.",
            "Count evidence by underlying source and collection path, not by the number of dashboards or exports.",
            "Use bounded no-supported-evidence language when negative conclusions depend on verified coverage and retention.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A forensic timeline is a versioned analytical model built from source-aware evidence rather than a simple sorted list.",
            "Original timestamps, event meaning, time zone, clock state, delay, resolution, collection context, and conversion method should remain visible.",
            "Event time and receipt time answer different questions and should not be confused.",
            "Independent corroboration comes from genuinely different sources, not several views of one underlying record set.",
            "DNS, flow, proxy, identity, application, and cloud records provide useful relationships but do not independently prove payload, intent, or complete impact.",
            "Conflicts, missing records, source-health problems, alternatives, confidence, and earlier timeline versions should remain documented.",
            "Portfolio artifacts should recreate correlation with clearly fictional evidence rather than exposing real network, cloud, or organizational records.",
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