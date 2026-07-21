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
const previousLesson = `${modulePath}/reporting-findings-and-case-communication`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate authorization, evidence-source planning, integrity, chain of custody, artifact analysis, volatile-evidence reasoning, network-and-cloud correlation, timeline versioning, reporting, and case communication in one fictional investigation.",
  "Build a complete fictional evidence register, collection plan, process map, artifact worksheet, normalized timeline, findings matrix, report set, correction record, and portfolio-safe case package.",
  "Separate direct observations from findings, alternatives, confidence, limitations, impact boundaries, owner decisions, and unresolved questions.",
  "Apply fictional privacy, minimization, need-to-know, source-health, evidence-lineage, version-control, and review requirements throughout the case.",
  "Demonstrate that every fictional conclusion can be traced from approved case question to original evidence, working copy, derived artifact, reviewer decision, and final communication."
];
const caseBrief = [
  {
    "label": "Organization",
    "value": "Northbridge Research Archive",
    "detail": "A fictional research-storage and export service used only for this defensive training lab."
  },
  {
    "label": "Case identifier",
    "value": "NRA-DF-2026-012",
    "detail": "The fictional case identifier used across evidence, findings, reports, exhibits, and communications."
  },
  {
    "label": "Primary question",
    "value": "Did the approved archive-export workflow create the unexpected duplicate folder during job 441?",
    "detail": "The case must answer the mechanism, scope, supported impact, confidence, limitations, and owner action."
  },
  {
    "label": "Decision owner",
    "value": "Fictional Incident Lead",
    "detail": "Responsible for approving the case scope, corrective action, communication, and closure."
  },
  {
    "label": "Approved evidence",
    "value": "Metadata, process, identity, application, storage, cloud, network, deployment, support, and source-health records",
    "detail": "Only the supplied fictional evidence on this page may be used."
  },
  {
    "label": "Privacy boundary",
    "value": "Metadata-first; no unrelated-folder or file-content review",
    "detail": "The approved question can be answered without opening fictional file contents."
  },
  {
    "label": "Stop conditions",
    "value": "Out-of-scope evidence, unclear ownership, unsafe collection method, missing authorization, or real-system access",
    "detail": "Any stop condition requires preservation, documentation, owner review, and an explicit restart decision."
  },
  {
    "label": "Required outcome",
    "value": "Complete fictional forensic case package",
    "detail": "The package must be reproducible, reviewable, privacy-aware, versioned, and portfolio-safe."
  }
];
const evidenceSet = [
  {
    "id": "NRA-E-001",
    "type": "Support report",
    "source": "Fictional archive owner",
    "record": "The approved export completed, but an unexpected approved-copy folder appeared several minutes later.",
    "relevance": "Defines the original observation and business question.",
    "limit": "Human report does not prove the technical mechanism.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-002",
    "type": "File-metadata export",
    "source": "Fictional archive platform",
    "record": "The approved and approved-copy folders each contain five files with matching content hashes and preserved modification values.",
    "relevance": "Supports duplicate content and later path creation.",
    "limit": "Copy behavior may reset creation values.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-003",
    "type": "Process snapshot",
    "source": "Fictional endpoint custodian",
    "record": "The scheduler launched archive-export-worker, which launched copy-worker with target approved-copy and configuration export-legacy.",
    "relevance": "Provides the strongest runtime mechanism for duplicate creation.",
    "limit": "Represents one moment rather than the full process history.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-004",
    "type": "Identity records",
    "source": "Fictional identity platform",
    "record": "The approved archive-export service identity opened session SVC-22 before job 441 started.",
    "relevance": "Connects the approved workflow to the event window.",
    "limit": "Service identity does not prove human intent.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-005",
    "type": "Application audit",
    "source": "Fictional archive application",
    "record": "The application records the copy operation for job 441, but the event arrived twelve minutes after its source event time.",
    "relevance": "Confirms the same workflow after source repair.",
    "limit": "Receipt time must not replace event time.",
    "status": "Approved with delay"
  },
  {
    "id": "NRA-E-006",
    "type": "Storage transaction",
    "source": "Fictional archive-storage service",
    "record": "Five duplicate-file writes completed under job 441 using the approved service route.",
    "relevance": "Corroborates file metadata and process target.",
    "limit": "Storage events do not prove intent.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-007",
    "type": "Cloud audit",
    "source": "Fictional cloud platform",
    "record": "No public-link, external-share, unrelated-account download, or permission-expansion event appears in verified coverage.",
    "relevance": "Narrows supported impact.",
    "limit": "Negative conclusion remains bounded by coverage, retention, account, platform, and time window.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-008",
    "type": "Network flow",
    "source": "Fictional network service",
    "record": "The copy-worker communicated only with archive-storage-api.internal during the observed operation.",
    "relevance": "Supports an internal-only service route.",
    "limit": "Flow does not reveal full payload content.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-009",
    "type": "Deployment record",
    "source": "Fictional release platform",
    "record": "The runtime used the outdated export-legacy configuration; the approved replacement was deployed after review.",
    "relevance": "Supports the root condition and corrective action.",
    "limit": "Repository state requires runtime correlation.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-010",
    "type": "Source-health record",
    "source": "Fictional monitoring service",
    "record": "Application delivery lagged by twelve minutes while file, identity, process, storage, cloud, and network sources remained current.",
    "relevance": "Explains the apparent timeline conflict.",
    "limit": "Earlier timeline confidence must remain visible.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-011",
    "type": "Recent-item and preview records",
    "source": "Fictional archive-review application",
    "record": "The approved folder was referenced by the review application and generated preview entries.",
    "relevance": "Supports application reference to the approved path.",
    "limit": "Does not prove that a human fully opened or read every file.",
    "status": "Approved"
  },
  {
    "id": "NRA-E-012",
    "type": "Unrelated-folder reference",
    "source": "Fictional metadata package",
    "record": "The export package contains a reference to an unrelated research folder outside current authorization.",
    "relevance": "Creates a scope and privacy stop condition.",
    "limit": "No content review or conclusion is permitted.",
    "status": "Reference only"
  }
];
const collectionPriorities = [
  {
    "priority": "1",
    "source": "Process snapshot",
    "reason": "Highest volatility and direct relevance to the active workflow.",
    "method": "Preserve the supplied fictional snapshot and verify integrity.",
    "alternate": "Application job, deployment, storage, and identity records.",
    "stop": "Do not collect from any real process or system."
  },
  {
    "priority": "2",
    "source": "File-metadata export",
    "reason": "Directly records duplicate paths, hashes, timestamps, and ownership.",
    "method": "Preserve the supplied export and create a verified working copy.",
    "alternate": "Storage transactions, backup catalog, and cloud object history.",
    "stop": "Do not open fictional file contents."
  },
  {
    "priority": "3",
    "source": "Identity and session records",
    "reason": "Connect the approved service identity to job 441.",
    "method": "Use the supplied fictional export with source-health documentation.",
    "alternate": "Application request, process ownership, and storage transactions.",
    "stop": "Do not infer human identity or intent."
  },
  {
    "priority": "4",
    "source": "Cloud and network records",
    "reason": "Test external sharing, download, destination, and route hypotheses.",
    "method": "Use the supplied fictional cloud and flow exports.",
    "alternate": "Application, support, identity, and vendor records.",
    "stop": "Do not capture or query any real network or cloud service."
  },
  {
    "priority": "5",
    "source": "Delayed application audit",
    "reason": "Confirms the job and copy operation after source repair.",
    "method": "Preserve event and receipt times and validate completeness.",
    "alternate": "Process, storage, file, and identity records.",
    "stop": "Do not order events by arrival time."
  },
  {
    "priority": "6",
    "source": "Deployment and configuration",
    "reason": "Tests whether export-legacy was active during the event.",
    "method": "Compare supplied repository, rollout, startup, and runtime records.",
    "alternate": "Process arguments and application startup records.",
    "stop": "Do not assume repository state equals runtime state."
  },
  {
    "priority": "7",
    "source": "Support and business records",
    "reason": "Preserve the original observation, expected workflow, and owner decision.",
    "method": "Use the supplied fictional report and approval records.",
    "alternate": "Application and storage records.",
    "stop": "Do not treat the human report as technical proof."
  },
  {
    "priority": "Do not collect",
    "source": "Unrelated research-folder content",
    "reason": "Outside scope and unnecessary for the approved case question.",
    "method": "Preserve only the existing reference.",
    "alternate": "None required.",
    "stop": "Pause and request new approval before any review."
  }
];
const chainEvents = [
  {
    "time": "09:00",
    "event": "Case opened",
    "handler": "Incident Lead",
    "evidence": "NRA-E-001",
    "action": "Original fictional support request preserved.",
    "verification": "Intake identifier assigned."
  },
  {
    "time": "09:06",
    "event": "Metadata export received",
    "handler": "Platform Custodian → Evidence Custodian",
    "evidence": "NRA-E-002",
    "action": "Original export stored in restricted repository.",
    "verification": "Receipt verification passed."
  },
  {
    "time": "09:11",
    "event": "Metadata working copy created",
    "handler": "Evidence Custodian → Forensic Analyst",
    "evidence": "NRA-E-002-WORK-01",
    "action": "Approved working copy created for artifact review.",
    "verification": "Working copy matched preserved reference."
  },
  {
    "time": "09:23",
    "event": "Process snapshot received",
    "handler": "Endpoint Custodian → Evidence Custodian",
    "evidence": "NRA-E-003",
    "action": "Snapshot and capture context preserved.",
    "verification": "Integrity passed; snapshot limitation recorded."
  },
  {
    "time": "09:34",
    "event": "Identity records received",
    "handler": "Identity Owner → Evidence Custodian",
    "evidence": "NRA-E-004",
    "action": "Approved event window and session records preserved.",
    "verification": "Verification passed."
  },
  {
    "time": "09:41",
    "event": "Cloud and network exports received",
    "handler": "Cloud and Network Custodians → Evidence Custodian",
    "evidence": "NRA-E-007 / NRA-E-008",
    "action": "Original exports preserved with coverage notes.",
    "verification": "Verification passed."
  },
  {
    "time": "09:48",
    "event": "Derived artifact table created",
    "handler": "Forensic Analyst",
    "evidence": "NRA-D-006",
    "action": "Path, hash, timestamp, and ownership comparison table created.",
    "verification": "Parent evidence and row counts recorded."
  },
  {
    "time": "10:02",
    "event": "Delayed application audit received",
    "handler": "Application Owner → Evidence Custodian",
    "evidence": "NRA-E-005",
    "action": "Event and receipt times preserved separately.",
    "verification": "Completeness validation passed."
  },
  {
    "time": "10:18",
    "event": "Timeline version 2 created",
    "handler": "Forensic Analyst",
    "evidence": "NRA-D-014-v2",
    "action": "Delayed application events integrated with preserved version 1.",
    "verification": "Changed events and confidence updates reviewed."
  },
  {
    "time": "10:45",
    "event": "Evidence-handling review completed",
    "handler": "Evidence Custodian + Incident Lead",
    "evidence": "All approved records",
    "action": "Integrity, custody, access, lineage, exceptions, and readiness confirmed.",
    "verification": "No unresolved custody gap."
  }
];
const processMap = [
  {
    "id": "P-01",
    "process": "scheduler-service",
    "parent": "service-manager",
    "owner": "archive-platform-service",
    "arguments": "--schedule archive-export-jobs",
    "relationship": "Expected fictional parent for approved export jobs.",
    "limit": "Snapshot does not show every earlier schedule event."
  },
  {
    "id": "P-02",
    "process": "archive-export-worker",
    "parent": "scheduler-service",
    "owner": "archive-export-service",
    "arguments": "--job 441 --config export-legacy",
    "relationship": "Connects approved job 441 to the outdated configuration.",
    "limit": "Runtime path still requires deployment correlation."
  },
  {
    "id": "P-03",
    "process": "copy-worker",
    "parent": "archive-export-worker",
    "owner": "archive-export-service",
    "arguments": "--source approved --target approved-copy",
    "relationship": "Strongest runtime evidence for the duplicate-path mechanism.",
    "limit": "One snapshot does not show the complete copy lifetime."
  },
  {
    "id": "P-04",
    "process": "preview-worker",
    "parent": "archive-export-worker",
    "owner": "archive-preview-service",
    "arguments": "--target approved",
    "relationship": "Explains preview records for the approved folder.",
    "limit": "Does not prove full human viewing."
  },
  {
    "id": "P-05",
    "process": "archive-review-ui",
    "parent": "desktop-session",
    "owner": "research-review-user",
    "arguments": "--case RA-202",
    "relationship": "Supports application reference to the approved folder.",
    "limit": "Does not prove every file was opened or read."
  },
  {
    "id": "P-06",
    "process": "sync-agent",
    "parent": "service-manager",
    "owner": "archive-sync-service",
    "arguments": "--scope recovery-mirror",
    "relationship": "Alternative automated-copy hypothesis considered and tested.",
    "limit": "No supplied handle or transaction links it to the duplicate folder."
  }
];
const artifactMatrix = [
  {
    "artifact": "Duplicate paths",
    "observation": "Five files appear under approved-copy.",
    "finding": "A second path exists within the approved job output.",
    "alternative": "Manual copy, retry, synchronization, or restore.",
    "confidence": "High",
    "limit": "Path naming does not prove intent."
  },
  {
    "artifact": "Matching hashes",
    "observation": "Five duplicate files match the approved files by content hash.",
    "finding": "The supplied duplicate contents are identical to the approved contents.",
    "alternative": "No alternative changes the content-identity result.",
    "confidence": "High",
    "limit": "Hash match does not prove creator or purpose."
  },
  {
    "artifact": "Creation metadata",
    "observation": "Duplicate paths have later creation values.",
    "finding": "The duplicate paths were created after the approved paths within the case window.",
    "alternative": "Copying, extraction, synchronization, or restore may reset creation values.",
    "confidence": "Medium-High",
    "limit": "Platform behavior requires correlation."
  },
  {
    "artifact": "Service ownership",
    "observation": "Both folders list archive-export-service.",
    "finding": "Both paths are associated with the approved service context.",
    "alternative": "Ownership may be inherited or assigned by the workflow.",
    "confidence": "High",
    "limit": "Ownership does not identify human intent."
  },
  {
    "artifact": "Recent-item record",
    "observation": "The review application referenced the approved folder.",
    "finding": "The application context was aware of the approved path.",
    "alternative": "Automated initialization may create the reference.",
    "confidence": "High for reference",
    "limit": "Full human reading is not proven."
  },
  {
    "artifact": "Cloud audit absence",
    "observation": "No public-share or unrelated-download event appears.",
    "finding": "External disclosure is not supported within verified coverage.",
    "alternative": "Events outside coverage remain outside the conclusion.",
    "confidence": "Medium-High",
    "limit": "This is not proof of impossibility."
  }
];
const timelineEvents = [
  {
    "id": "T-01",
    "original": "09:14:36 UTC-04:00",
    "normalized": "13:14:36 UTC",
    "source": "Identity",
    "event": "Approved archive-export service session SVC-22 begins.",
    "relationship": "Provides the identity context for job 441.",
    "confidence": "High",
    "limit": "Identity does not prove every later action."
  },
  {
    "id": "T-02",
    "original": "09:15:42 UTC-04:00",
    "normalized": "13:15:42 UTC",
    "source": "Process + application",
    "event": "Scheduler launches archive-export-worker using export-legacy.",
    "relationship": "Links approved scheduling to the outdated configuration.",
    "confidence": "High",
    "limit": "Application delivery was delayed."
  },
  {
    "id": "T-03",
    "original": "09:16:08 UTC-04:00",
    "normalized": "13:16:08 UTC",
    "source": "Process",
    "event": "Export worker launches copy-worker targeting approved-copy.",
    "relationship": "Strongest runtime link to duplicate creation.",
    "confidence": "High",
    "limit": "Snapshot represents one moment."
  },
  {
    "id": "T-04",
    "original": "09:16:11–09:16:48 UTC-04:00",
    "normalized": "13:16:11–13:16:48 UTC",
    "source": "Network flow",
    "event": "Copy-worker communicates with archive-storage-api.internal.",
    "relationship": "Supports an internal-only route.",
    "confidence": "High",
    "limit": "Flow does not reveal full payload."
  },
  {
    "id": "T-05",
    "original": "09:17:00 UTC-04:00",
    "normalized": "13:17:00–13:17:59 UTC",
    "source": "File metadata",
    "event": "Duplicate-folder creation values begin.",
    "relationship": "Consistent with later duplicate-path creation.",
    "confidence": "Medium-High",
    "limit": "Source precision requires a range."
  },
  {
    "id": "T-06",
    "original": "09:17:14 UTC-04:00",
    "normalized": "13:17:14 UTC",
    "source": "Storage transaction",
    "event": "First duplicate-file write completes under job 441.",
    "relationship": "Corroborates process target and file metadata.",
    "confidence": "High",
    "limit": "Does not prove intent."
  },
  {
    "id": "T-07",
    "original": "09:20:05 UTC event / 09:32:09 UTC receipt",
    "normalized": "09:20:05 UTC event",
    "source": "Application audit",
    "event": "Application records completion of the job 441 copy operation.",
    "relationship": "Confirms the workflow after source repair.",
    "confidence": "High",
    "limit": "Receipt order is not event order."
  },
  {
    "id": "T-08",
    "original": "09:38 local",
    "normalized": "13:38 UTC",
    "source": "Source health",
    "event": "Application-delivery delay is identified and assigned for repair.",
    "relationship": "Explains the apparent timeline conflict.",
    "confidence": "High",
    "limit": "Version 1 had reduced confidence."
  },
  {
    "id": "T-09",
    "original": "10:02 local",
    "normalized": "14:02 UTC",
    "source": "Deployment",
    "event": "Outdated configuration is replaced and corrected validation is approved.",
    "relationship": "Starts the corrective-action phase.",
    "confidence": "High",
    "limit": "Correction does not prove earlier human intent."
  }
];
const findings = [
  {
    "id": "F-01",
    "statement": "The duplicate folder contains copies of the same five supplied file contents as the approved folder.",
    "support": "Matching hashes, counts, sizes, and preserved modification values.",
    "alternative": "No competing explanation changes content identity within the supplied set.",
    "confidence": "High",
    "limit": "The supplied set may not represent every historical version.",
    "decision": "Use the approved folder as the reference output."
  },
  {
    "id": "F-02",
    "statement": "The approved export worker using the outdated configuration is the best-supported mechanism for creating the duplicate path.",
    "support": "Process tree, arguments, application job, storage transaction, file metadata, deployment, and internal flow.",
    "alternative": "Manual copy and synchronization retry receive less support.",
    "confidence": "High",
    "limit": "The process snapshot represents one moment.",
    "decision": "Replace the outdated configuration and validate the corrected workflow."
  },
  {
    "id": "F-03",
    "statement": "Delayed application delivery caused the apparent timestamp conflict.",
    "support": "Separate event and receipt times, source-health record, process start, file range, and storage transaction.",
    "alternative": "Clock drift was considered but not supported.",
    "confidence": "High",
    "limit": "Some file events remain within a one-minute range.",
    "decision": "Use timeline version 2 and preserve version 1."
  },
  {
    "id": "F-04",
    "statement": "Observed copy-related traffic remained on the approved internal archive-storage route.",
    "support": "Process association, internal destination, DNS, firewall, application mapping, and cloud records.",
    "alternative": "Activity outside verified coverage cannot be completely excluded.",
    "confidence": "Medium-High",
    "limit": "Flow records do not reveal full payload.",
    "decision": "Report internal-only observed routing."
  },
  {
    "id": "F-05",
    "statement": "The supplied evidence does not support public sharing, external download, or unrelated-account access.",
    "support": "Cloud, identity, network, application, support, and business records.",
    "alternative": "Events outside retention, account, platform, or time boundaries remain outside the conclusion.",
    "confidence": "Medium-High",
    "limit": "This is a bounded no-supported-evidence statement.",
    "decision": "Keep impact language limited to verified coverage."
  },
  {
    "id": "F-06",
    "statement": "The review application referenced the approved folder, but full human review of every file is not proven.",
    "support": "Running application process, recent-item record, preview cache, and support workflow.",
    "alternative": "Automated initialization may create some reference artifacts.",
    "confidence": "High for application reference",
    "limit": "No approved content-view evidence is included.",
    "decision": "Do not attribute full human review or intent."
  }
];
const deliverables = [
  {
    "title": "Authorization brief",
    "required": "Case question, requester, owners, approved sources, exclusions, privacy, methods, stop conditions, and portfolio rule.",
    "quality": "Every reviewed source and action is covered by explicit fictional approval."
  },
  {
    "title": "Collection plan",
    "required": "Source inventory, relevance, volatility, health, integrity risk, privacy, order, method, owner, alternate, limitation, and completion.",
    "quality": "The plan protects high-value evidence without crossing scope or touching real systems."
  },
  {
    "title": "Evidence register and custody log",
    "required": "Identifiers, originals, working copies, integrity, transfers, access, storage, lineage, exceptions, and review.",
    "quality": "Another fictional reviewer can reconstruct every evidence-handling event."
  },
  {
    "title": "Artifact worksheet",
    "required": "Paths, hashes, timestamps, ownership, recent items, previews, observations, alternatives, confidence, and limitations.",
    "quality": "No artifact is treated as stronger than its real evidence boundary."
  },
  {
    "title": "Process and session map",
    "required": "Processes, parents, owners, sessions, paths, arguments, handles, routes, baselines, alternatives, and limits.",
    "quality": "Runtime evidence is correlated without claiming human intent."
  },
  {
    "title": "Versioned normalized timeline",
    "required": "Original times, normalized times, zones, delay, precision, source health, relationships, conflicts, versions, and review.",
    "quality": "Timeline version 1 remains preserved after version 2 is created."
  },
  {
    "title": "Findings matrix",
    "required": "Finding, support, conflict, alternative, confidence, limitation, impact boundary, decision effect, and owner.",
    "quality": "Every conclusion is traceable, bounded, and reviewable."
  },
  {
    "title": "Reporting package",
    "required": "Technical report, executive summary, privacy statement, support note, owner brief, exhibits, correction record, and communication log.",
    "quality": "Audience detail changes, but the case truth does not."
  },
  {
    "title": "Portfolio case study",
    "required": "Fictional overview, safe diagrams, evidence reasoning, lessons learned, limitations, reflection, and portfolio-safety statement.",
    "quality": "No real systems, people, files, logs, routes, contacts, owners, credentials, or private records appear."
  }
];
const commonMistakes = [
  "Beginning analysis before the fictional case question, owners, scope, privacy boundary, approved sources, and stop conditions are documented.",
  "Collecting fictional evidence because it is available rather than because it supports an approved question.",
  "Using one identifier for originals, preserved references, working copies, filtered exports, screenshots, notes, timelines, and exhibits.",
  "Treating a matching hash as proof of creator, intent, authorization, completeness, or absence of compromise.",
  "Treating a process name, service identity, parent-child relationship, open handle, or network connection as proof of human intent.",
  "Treating file creation time as the moment the content first existed in every system.",
  "Ordering events by record arrival instead of event time.",
  "Counting dashboards, screenshots, exports, and summaries from one source as independent evidence.",
  "Using source silence as proof without verifying health, coverage, retention, ownership, account, platform, and time boundaries.",
  "Deleting conflicts, failed copies, delayed evidence, timeline versions, or report corrections.",
  "Changing the certainty of a finding for different audiences.",
  "Publishing raw fictional evidence without audience need, masking, parent lineage, context, and limitation.",
  "Opening unrelated fictional content even though a metadata-first method already answers the approved question.",
  "Using any real system, process, account, network, cloud service, log, file, route, contact, owner, credential, or private record."
];
const quizQuestions = [
  {
    "question": "What should happen first in the fictional Northbridge lab?",
    "choices": [
      "Confirm the case question, owners, scope, privacy boundary, approved sources, methods, stop conditions, and required decision.",
      "Open every available file.",
      "Build the final report immediately.",
      "Assume the duplicate folder is malicious."
    ],
    "answer": 0,
    "explanation": "Authorization and scope define the entire forensic workflow."
  },
  {
    "question": "Which evidence best supports the duplicate-copy mechanism?",
    "choices": [
      "The process tree, copy-worker arguments, application job, storage transaction, file metadata, deployment record, and internal flow together.",
      "The folder name alone.",
      "The service identity alone.",
      "The support report alone."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion uses several genuinely different sources."
  },
  {
    "question": "How should the delayed application record be handled?",
    "choices": [
      "Preserve event and receipt times, document source delay, validate completeness, retain timeline version 1, and create version 2.",
      "Place it at receipt time only.",
      "Delete it because it arrived late.",
      "Use whichever time matches the preferred conclusion."
    ],
    "answer": 0,
    "explanation": "Event time and delivery time answer different questions."
  },
  {
    "question": "What can the matching fictional hashes support?",
    "choices": [
      "The compared supplied file contents are identical under the chosen method.",
      "The human creator's identity.",
      "The purpose of the copy.",
      "Complete evidence coverage."
    ],
    "answer": 0,
    "explanation": "Hash agreement supports content identity, not authorship or intent."
  },
  {
    "question": "Which external-impact statement is strongest?",
    "choices": [
      "No supported public sharing, external download, or unrelated-account access appears within verified coverage.",
      "External disclosure was impossible.",
      "The internal flow proves exfiltration.",
      "The dashboard proves complete safety."
    ],
    "answer": 0,
    "explanation": "The first statement preserves the evidence boundary."
  },
  {
    "question": "What should happen to the unrelated-folder reference?",
    "choices": [
      "Preserve the reference, restrict exposure, record the stop condition, and do not inspect the content without new approval.",
      "Open it because it may be useful.",
      "Delete the reference.",
      "Add it to the portfolio."
    ],
    "answer": 0,
    "explanation": "Potential relevance does not create authorization."
  },
  {
    "question": "What makes the final fictional case package defensible?",
    "choices": [
      "Every conclusion is linked to approved evidence, integrity, custody, observations, alternatives, confidence, limitations, versions, reviewers, and decisions.",
      "It contains many screenshots.",
      "It uses absolute language.",
      "It hides all uncertainty."
    ],
    "answer": 0,
    "explanation": "Traceability, bounded reasoning, and review make the package defensible."
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

export default function DigitalForensicsBasicsLabPage() {
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

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Integrated Lab · Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.8 Digital Forensics Basics Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a full fictional digital-forensics investigation from
            authorization through evidence planning, integrity, chain of
            custody, artifact analysis, volatile-evidence reasoning, network and
            cloud correlation, timeline versioning, findings, reporting,
            communication, review, and portfolio-safe closure.
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
          lessonTitle="Digital Forensics Basics Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Integrated Lab Readiness"
          items={[
            "I completed or reviewed I12.1 through I12.7.",
            "I will use only the supplied fictional Northbridge Research Archive evidence.",
            "I will not access, collect, image, scan, inspect, execute, decrypt, recover, upload, download, query, or connect to any real system, device, process, account, network, cloud service, file, log, or private record.",
            "I will preserve authorization, privacy, source health, integrity, custody, lineage, alternatives, confidence, limitations, versions, and reviewer decisions.",
            "I will create only fictional, defensive, portfolio-safe deliverables.",
          ]}
        />

        <SectionCard
          eyebrow="Lab Mission"
          title="Investigate the Northbridge Duplicate Archive Folder"
        >
          <p className="leading-8">
            A fictional archive owner reports that approved export job 441
            created the expected folder and an unexpected approved-copy folder.
            The supplied evidence includes metadata, process, identity,
            application, storage, cloud, network, deployment, support, and
            source-health records. One application source was delayed. One
            unrelated folder reference is outside scope. Your task is to build a
            complete, reviewable case package without overstating any artifact
            or crossing the authorization boundary.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Required safety boundary
              </p>

              <p className="mt-2 leading-7">
                Every organization, identity, file, path, process, log, route,
                record, timestamp, owner, decision, and conclusion in this lab is
                fictional. Do not substitute real evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional standard
              </p>

              <p className="mt-2 leading-7">
                Every final claim must trace to approved evidence and preserve
                source health, alternatives, confidence, limitations, scope,
                impact boundary, review, and owner decision.
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Case Brief
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Authorization, Scope, Privacy, and Required Outcome
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {caseBrief.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.label}
                </p>

                <h3 className="mt-2 font-black text-white">{item.value}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Supplied Evidence
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Evidence Set
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceSet.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.type}</h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Source", item.source],
                    ["Direct record", item.record],
                    ["Case relevance", item.relevance],
                    ["Limitation", item.limit],
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
            Collection Plan
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Prioritize, Preserve, Substitute, or Stop
          </h2>

          <div className="mt-6 grid gap-5">
            {collectionPriorities.map((item) => (
              <article
                key={`${item.priority}-${item.source}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                    Priority {item.priority}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.source}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Reason", item.reason],
                    ["Approved method", item.method],
                    ["Alternate evidence", item.alternate],
                    ["Stop condition", item.stop],
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

        <FakeDashboardCard
          title="Fake Northbridge Integrated Forensics Dashboard"
          subtitle="Training dashboard for supplied fictional evidence only."
          metrics={[
            {
              label: "Approved evidence sources",
              value: "11",
              note: "Eleven fictional sources are approved for review; one unrelated-folder reference remains out of scope.",
            },
            {
              label: "Supported findings",
              value: "6",
              note: "Every fictional finding includes evidence, alternatives, confidence, limitation, impact boundary, and decision effect.",
            },
            {
              label: "Open analytical limits",
              value: "3",
              note: "Exact human awareness, full historical process state, and events outside verified coverage remain unsupported.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Case Review Requires a Scope Decision"
          severity="High"
          time="10:24 AM"
          source="Fake Northbridge Forensics Console"
          details="The fictional metadata package references an unrelated research folder while the approved case question is already answerable from metadata, process, identity, application, storage, cloud, network, deployment, support, and source-health evidence."
          recommendation="Do not inspect the unrelated folder. Preserve the reference and context, restrict exposure, record the stop condition, notify the fictional incident and privacy owners, continue only within approved scope, and request expansion only if a new documented case question makes the source necessary."
        />

        <FakeLogPanel
          title="Fake Northbridge Integrated Case Records"
          logs={[
            "09:00 CASE id='NRA-DF-2026-012' question='duplicate folder mechanism'",
            "09:06 RECEIVE evidence='NRA-E-002' type='metadata export'",
            "09:11 COPY evidence='NRA-E-002-WORK-01' verification='pass'",
            "09:14 ID session='SVC-22' identity='archive-export-service'",
            "09:15 PROCESS worker='archive-export-worker' config='export-legacy'",
            "09:16 PROCESS child='copy-worker' target='approved-copy'",
            "09:16 FLOW destination='archive-storage-api.internal'",
            "09:17 FILE duplicate_paths='begin' hashes='matching'",
            "09:17 STORAGE writes='5' job='441'",
            "09:20 APP event='copy complete' receipt='09:32'",
            "09:38 HEALTH application_delay='12m' repair='assigned'",
            "09:48 DERIVE artifact_table='NRA-D-006' parent='NRA-E-002-WORK-01'",
            "10:02 RECEIVE application='validated complete'",
            "10:18 TIMELINE version='v2' prior='preserved'",
            "10:24 SCOPE unrelated_folder='reference only'",
            "10:45 REVIEW integrity='pass' custody='complete' lineage='complete'",
            "11:05 FINDING mechanism='approved worker with outdated config'",
            "11:20 IMPACT external_disclosure='not supported within coverage'",
            "12:15 ACTION config='replaced' validation='approved'",
            "15:30 VALIDATE corrected_workflow='pass' recurrence='none observed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Chain of Custody
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence Handling and Derived-Artifact History
          </h2>

          <div className="mt-6 grid gap-4">
            {chainEvents.map((item) => (
              <article
                key={`${item.time}-${item.event}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.15fr_0.35fr_0.55fr_0.35fr_1fr_0.75fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.time}
                </p>

                <p className="font-black text-white">{item.event}</p>

                <p className="text-sm font-semibold text-blue-200">
                  {item.handler}
                </p>

                <p className="font-mono text-sm text-emerald-200">
                  {item.evidence}
                </p>

                <p className="text-sm leading-6 text-slate-300">
                  {item.action}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  {item.verification}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Process and Session Analysis
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Runtime Relationship Map
          </h2>

          <div className="mt-6 grid gap-5">
            {processMap.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.process}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Parent", item.parent],
                    ["Owner", item.owner],
                    ["Arguments", item.arguments],
                    ["Evidence relationship", item.relationship],
                    ["Limitation", item.limit],
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
            Artifact Analysis
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Observation, Finding, Alternative, Confidence, and Limit
          </h2>

          <div className="mt-6 grid gap-5">
            {artifactMatrix.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.artifact}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Direct observation", item.observation],
                    ["Supported finding", item.finding],
                    ["Alternative", item.alternative],
                    ["Limitation", item.limit],
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
            Northbridge Final Findings and Decisions
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
                    ["Limitation", item.limit],
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

        <AnalyzeEvidenceCard
          title="Which Final Case Conclusion Is Best Supported?"
          evidence={[
            "The approved and duplicate folders each contain five supplied files with matching content hashes.",
            "The approved scheduler launched archive-export-worker for job 441 using export-legacy.",
            "The export worker launched copy-worker targeting approved-copy.",
            "Storage transactions and internal network flow align with the same operation.",
            "Delayed application records later confirm the copy operation using the same job identifier.",
            "Cloud, identity, network, application, support, and business records do not support public sharing, external download, or unrelated-account access within verified coverage.",
            "The outdated configuration was replaced and the corrected workflow passed validation.",
          ]}
          question="Which final conclusion is strongest?"
          options={[
            "The approved fictional export workflow using an outdated configuration created a duplicate path containing the same five supplied files. No supported external disclosure appears within verified coverage. The configuration was corrected, validation passed, and recurrence monitoring continues.",
            "A human intentionally stole the files.",
            "The internal network connection proves data exfiltration.",
            "The duplicate folder name proves malicious activity.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion integrates the approved workflow, duplicate-content evidence, internal route, bounded impact, corrective action, validation, and monitoring without adding unsupported intent."
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Required Deliverables
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete the Full Fictional Case Package
          </h2>

          <div className="mt-6 grid gap-5">
            {deliverables.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.4fr_1fr_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">
                  {item.required}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">
                    Quality standard:{" "}
                  </span>
                  {item.quality}
                </p>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Integrated Forensic Case"
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

        <ScenarioDecisionLab
          title="Delayed Evidence Changes the Timeline"
          scenario="The fictional application source is repaired and validated. Its event time confirms the copy operation but changes three event placements from timeline version 1."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve version 1, create version 2, record the new evidence, changed events, affected findings, confidence update, reviewer approval, and audience notifications.",
              outcome:
                "Best defensive choice. The case remains transparent and reviewable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete version 1 and silently replace it.",
              outcome:
                "Unsafe. The analytical history and correction must remain visible.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the new evidence because the first timeline was already written.",
              outcome:
                "Unsafe. Validated relevant evidence should update the case through version control.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Requests an Absolute No-Disclosure Statement"
          scenario="The fictional evidence supports no observed public sharing or external download within verified coverage, but leadership asks for the statement no disclosure occurred."
          choices={[
            {
              label: "Choice A",
              response:
                "Use bounded no-supported-evidence language, preserve confidence and coverage limits, identify the supporting sources, and obtain technical and privacy review.",
              outcome:
                "Best defensive choice. Leadership receives a useful answer without false certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the absolute statement because it sounds clearer.",
              outcome:
                "Unsafe. Clarity does not justify overstating the evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the impact section entirely.",
              outcome:
                "Weak. Leadership still needs the supported impact boundary.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Digital Forensics Basics Lab Completion Checklist"
          items={[
            "I documented the fictional case question, owners, authorization, scope, privacy boundary, approved sources, excluded evidence, methods, stop conditions, and portfolio rule.",
            "I created a collection plan using relevance, volatility, source health, integrity risk, privacy, ownership, operational effect, alternate evidence, and completion criteria.",
            "I assigned unique identifiers to fictional originals, working copies, derived artifacts, timelines, exhibits, findings, and reports.",
            "I documented integrity verification, custody, access, transfer, storage, lineage, exceptions, review, and disposition.",
            "I analyzed fictional paths, hashes, timestamps, ownership, recent items, previews, process relationships, sessions, connections, and configuration within their evidence limits.",
            "I preserved original and normalized times, source delay, time zone, resolution, event-versus-receipt meaning, conflicts, and timeline versions.",
            "I distinguished independent evidence from duplicate dashboards, exports, screenshots, and summaries.",
            "I wrote findings with support, alternatives, confidence, limitations, impact boundaries, decision effects, owners, and follow-up needs.",
            "I created technical, leadership, privacy, support, owner, custody, correction, communication, and portfolio deliverables without changing the case truth.",
            "I used only fictional evidence and did not access or expose any real system, process, account, network, cloud service, file, log, route, credential, contact, owner, or private record.",
          ]}
        />

        <MiniQuiz
          title="I12.8 Integrated Lab Skill Check"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Artifact"
          prompt="Create a complete fictional Digital Forensics Basics Case Package for the Northbridge Research Archive case. Include authorization, collection plan, evidence register, chain of custody, integrity verification, artifact worksheet, process and session map, source-health register, normalized timeline versions 1 and 2, findings matrix, technical report, executive summary, privacy statement, support note, technical-owner brief, exhibit list, reviewer checklist, correction record, communication log, lessons learned, closure criteria, and a portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, users, identities, files, paths, processes, logs, routes, accounts, owners, contacts, dates, times, evidence, and decisions.",
            "Keep direct observations separate from findings, alternatives, confidence, limitations, impact boundaries, and owner actions.",
            "Preserve every parent-evidence reference, timeline version, report correction, reviewer decision, and audience notification.",
            "Use bounded language whenever conclusions depend on source health, retention, account, platform, time, scope, or privacy limits.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A complete digital-forensics case connects authorization, collection planning, integrity, custody, artifact analysis, volatile evidence, correlation, reporting, review, and closure.",
            "Evidence value depends on source context, integrity, lineage, source health, independent corroboration, alternatives, confidence, and limitations.",
            "Matching hashes, process relationships, service identities, network flows, cloud records, and timestamps should never be overstated beyond what they directly support.",
            "Original and normalized times, event and receipt times, source delay, precision, conflicts, and timeline versions should remain visible.",
            "Different audiences may need different detail, but the underlying facts, confidence, and limitations must remain consistent.",
            "Out-of-scope evidence should be preserved as a reference without being inspected until explicit approval exists.",
            "A portfolio artifact should recreate the defensive reasoning with fully fictional evidence rather than exposing real systems or private records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I12
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