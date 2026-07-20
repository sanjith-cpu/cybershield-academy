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
const modulePath = `${trackPath}/incident-response-basics`;
const previousLesson = `${modulePath}/scoping-containment-and-coordination`;
const nextLesson = `${modulePath}/eradication-recovery-and-service-restoration`;

const objectives = [
  "Explain how fictional incident teams preserve evidence without altering its meaning, source context, timestamps, ownership, or limitations.",
  "Build a fictional evidence index connecting alerts, logs, identity events, transactions, files, deployments, source health, business records, and decisions.",
  "Normalize fictional timestamps and correlate independent evidence into a defensible timeline while preserving uncertainty and source differences.",
  "Distinguish fictional original records, transformed views, analyst notes, supported conclusions, conflicting evidence, duplicates, and evidence gaps.",
  "Create a professional fictional Evidence Preservation and Timeline Package using only supplied records and safe defensive methods."
];
const vocabulary = [
  [
    "Evidence preservation",
    "The fictional process of keeping records available, traceable, unaltered in meaning, properly labeled, and connected to source, time, owner, scope, and limitations."
  ],
  [
    "Evidence index",
    "A fictional register that maps each record to identifier, source, timestamp, owner, scope, integrity note, confidence, and case relevance."
  ],
  [
    "Source lineage",
    "The fictional path showing where evidence originated, how it was collected, transformed, displayed, copied, or summarized."
  ],
  [
    "Original record",
    "A fictional source record preserved as received before interpretation, filtering, normalization, or summarization."
  ],
  [
    "Derived record",
    "A fictional view, dashboard, export, parsed field, summary, or analyst note created from one or more original records."
  ],
  [
    "Timestamp normalization",
    "The fictional conversion of recorded times into a consistent reference while preserving the original value, time zone, clock source, and uncertainty."
  ],
  [
    "Timeline event",
    "A fictional evidence-backed occurrence with time, source, asset, identity, action, result, confidence, and limitations."
  ],
  [
    "Correlation",
    "The fictional process of comparing relevant records across independent sources, assets, identities, files, transactions, and workflows."
  ],
  [
    "Evidence gap",
    "A fictional missing, delayed, incomplete, inaccessible, stale, conflicting, or unhealthy record that limits the case."
  ],
  [
    "Chain of handling",
    "A fictional record of who collected, accessed, copied, reviewed, transferred, or transformed evidence and when."
  ],
  [
    "Duplicate evidence",
    "Fictional repeated copies or views of the same underlying source that should not be counted as independent confirmation."
  ],
  [
    "Timeline confidence",
    "A fictional assessment of how strongly the available records support event order, time, relationship, and interpretation."
  ]
];
const preservationSteps = [
  {
    "title": "Original alert and intake record",
    "summary": "Preserve the fictional signal exactly as received, including rule name, source, severity, identifier, timestamp, raw message, and intake context.",
    "details": [
      [
        "Required work",
        "Preserve the fictional original alert and intake record with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether original alert and intake record is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize original alert and intake record in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Raw source records",
    "summary": "Preserve fictional logs, identity events, transactions, files, queue events, deployments, configuration records, source-health data, and business records.",
    "details": [
      [
        "Required work",
        "Preserve the fictional raw source records with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether raw source records is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize raw source records in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Collection and access history",
    "summary": "Record fictional collection method, collector, access time, copy location, transformation, transfer, reviewer, and authorization.",
    "details": [
      [
        "Required work",
        "Preserve the fictional collection and access history with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether collection and access history is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize collection and access history in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Integrity and completeness notes",
    "summary": "Document fictional file size, record count, expected event range, missing periods, parser status, retention, source delay, and known truncation.",
    "details": [
      [
        "Required work",
        "Preserve the fictional integrity and completeness notes with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether integrity and completeness notes is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize integrity and completeness notes in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Source lineage",
    "summary": "Map fictional originals to exports, dashboards, parsed fields, summaries, screenshots, analyst notes, and final case conclusions.",
    "details": [
      [
        "Required work",
        "Preserve the fictional source lineage with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether source lineage is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize source lineage in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Time and clock context",
    "summary": "Preserve fictional original timestamp, time zone, device or service clock, synchronization status, delay, ingestion time, and normalization method.",
    "details": [
      [
        "Required work",
        "Preserve the fictional time and clock context with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether time and clock context is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize time and clock context in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Evidence labeling and storage",
    "summary": "Use fictional stable identifiers, consistent names, case references, access controls, retention, backups, and read-only handling where appropriate.",
    "details": [
      [
        "Required work",
        "Preserve the fictional evidence labeling and storage with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether evidence labeling and storage is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize evidence labeling and storage in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  },
  {
    "title": "Review and release control",
    "summary": "Define fictional who may review, share, summarize, redact, archive, or release evidence and which approvals and privacy limits apply.",
    "details": [
      [
        "Required work",
        "Preserve the fictional review and release control with original identifier, source, timestamp, time zone, owner, collection method, access history, integrity note, scope, and limitations."
      ],
      [
        "Evidence quality",
        "Confirm whether review and release control is original, derived, complete, current, independently sourced, correctly parsed, and supported by healthy evidence delivery."
      ],
      [
        "Avoid",
        "Do not rewrite, overwrite, relabel, delete, crop, merge, or summarize review and release control in a way that hides original meaning, uncertainty, or source context."
      ]
    ]
  }
];
const sourceFamilies = [
  {
    "title": "Identity and access evidence",
    "summary": "Fictional sign-in, session, service identity, token, role, permission, approval, revocation, and access-decision records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional identity and access evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use identity and access evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use identity and access evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "Application and service evidence",
    "summary": "Fictional requests, responses, errors, workflows, jobs, queues, APIs, feature flags, health events, and configuration records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional application and service evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use application and service evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use application and service evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "File and data evidence",
    "summary": "Fictional uploads, downloads, previews, exports, storage paths, hashes, metadata, retention, deletion, cache, backup, and data-state records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional file and data evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use file and data evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use file and data evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "Transaction and business evidence",
    "summary": "Fictional approved workflows, support cases, reports, service outcomes, schedules, user actions, and business-owner confirmations.",
    "details": [
      [
        "Useful records",
        "Collect the fictional transaction and business evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use transaction and business evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use transaction and business evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "Deployment and runtime evidence",
    "summary": "Fictional builds, artifacts, images, versions, runtime inventory, configuration, identity assignment, recovery state, and rollback records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional deployment and runtime evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use deployment and runtime evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use deployment and runtime evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "Monitoring and source-health evidence",
    "summary": "Fictional alerts, missing-event checks, delays, parser errors, retention gaps, source access, completeness, and alternate-source records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional monitoring and source-health evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use monitoring and source-health evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use monitoring and source-health evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "User, support, and owner evidence",
    "summary": "Fictional observations, support tickets, technical-owner explanations, business-owner review, vendor notes, and communication records.",
    "details": [
      [
        "Useful records",
        "Collect the fictional user, support, and owner evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use user, support, and owner evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use user, support, and owner evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  },
  {
    "title": "Decision and action evidence",
    "summary": "Fictional severity decisions, containment approvals, action assignments, change records, communications, handoffs, exceptions, and closure gates.",
    "details": [
      [
        "Useful records",
        "Collect the fictional decision and action evidence records, preserving raw values, identifiers, timestamps, source owner, retention, parsing, delay, and collection history."
      ],
      [
        "Can support",
        "Use decision and action evidence to support narrow conclusions about activity, identity, asset, file, transaction, deployment, workflow, or source health within its known scope."
      ],
      [
        "Limitations",
        "Do not use decision and action evidence alone to prove full incident scope, intent, business impact, or a complete event sequence."
      ]
    ]
  }
];
const timelineMethods = [
  {
    "title": "Preserve original time values",
    "summary": "Keep the fictional timestamp exactly as recorded before any conversion, rounding, sorting, or display transformation.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional preserve original time values belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for preserve original time values."
      ],
      [
        "Reassess when",
        "Rebuild the placement of preserve original time values when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Record time-zone and clock source",
    "summary": "Identify the fictional time zone, offset, daylight rule, device or service clock, synchronization state, and known drift.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional record time-zone and clock source belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for record time-zone and clock source."
      ],
      [
        "Reassess when",
        "Rebuild the placement of record time-zone and clock source when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Separate event time from ingestion time",
    "summary": "Distinguish when the fictional event occurred from when the source collected, forwarded, parsed, stored, or displayed it.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional separate event time from ingestion time belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for separate event time from ingestion time."
      ],
      [
        "Reassess when",
        "Rebuild the placement of separate event time from ingestion time when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Normalize to a reference time",
    "summary": "Convert fictional timestamps to one documented reference while retaining the original value and normalization rule.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional normalize to a reference time belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for normalize to a reference time."
      ],
      [
        "Reassess when",
        "Rebuild the placement of normalize to a reference time when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Use time ranges when exactness is unsupported",
    "summary": "Represent fictional uncertainty with earliest, latest, approximate, delayed, or sequence-only placement instead of false precision.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional use time ranges when exactness is unsupported belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for use time ranges when exactness is unsupported."
      ],
      [
        "Reassess when",
        "Rebuild the placement of use time ranges when exactness is unsupported when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Correlate by identifiers and outcomes",
    "summary": "Link fictional sessions, transactions, files, jobs, identities, artifacts, and business outcomes across sources rather than time alone.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional correlate by identifiers and outcomes belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for correlate by identifiers and outcomes."
      ],
      [
        "Reassess when",
        "Rebuild the placement of correlate by identifiers and outcomes when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Resolve conflicts explicitly",
    "summary": "Record fictional competing timestamps, possible clock drift, parser differences, delayed delivery, duplicate events, and unresolved alternatives.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional resolve conflicts explicitly belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for resolve conflicts explicitly."
      ],
      [
        "Reassess when",
        "Rebuild the placement of resolve conflicts explicitly when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Version the timeline",
    "summary": "Preserve fictional timeline changes, newly added evidence, revised confidence, moved events, rejected explanations, and reviewer approvals.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional version the timeline belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for version the timeline."
      ],
      [
        "Reassess when",
        "Rebuild the placement of version the timeline when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  }
];
const eventTypes = [
  {
    "title": "Detection and alert events",
    "summary": "Fictional signals showing when a tool, user, control, or workflow identified unusual or security-relevant activity.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional detection and alert events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for detection and alert events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of detection and alert events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Identity and authorization events",
    "summary": "Fictional sign-in, token, role, service identity, permission, denial, approval, revocation, and session activity.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional identity and authorization events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for identity and authorization events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of identity and authorization events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Application and workflow events",
    "summary": "Fictional requests, preview jobs, queue messages, API calls, errors, support actions, and business-process steps.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional application and workflow events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for application and workflow events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of application and workflow events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "File and data events",
    "summary": "Fictional upload, read, preview, export, cache, copy, delete, retention, backup, and storage-path activity.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional file and data events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for file and data events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of file and data events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Configuration and deployment events",
    "summary": "Fictional change windows, configuration updates, feature flags, builds, artifacts, images, runtime changes, and recovery state.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional configuration and deployment events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for configuration and deployment events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of configuration and deployment events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Containment and response events",
    "summary": "Fictional restrictions, pauses, approvals, monitoring changes, communications, owner assignments, rollback, and phase exits.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional containment and response events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for containment and response events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of containment and response events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Business and service events",
    "summary": "Fictional approved transactions, service interruptions, fallback activation, user outcomes, support volume, and business validation.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional business and service events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for business and service events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of business and service events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  },
  {
    "title": "Evidence and source-health events",
    "summary": "Fictional source delay, parser failure, missing-event alert, retention gap, access issue, alternate-source use, and later evidence arrival.",
    "details": [
      [
        "Timeline question",
        "Determine where fictional evidence and source-health events belongs in event order and which records independently support its time, relationship, and result."
      ],
      [
        "Required fields",
        "Record original time, normalized time, time zone, clock source, asset, identity, action, result, source, confidence, limitation, and linked evidence for evidence and source-health events."
      ],
      [
        "Reassess when",
        "Rebuild the placement of evidence and source-health events when delayed records arrive, clocks differ, parsing changes, duplicates are found, or new independent evidence conflicts."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "08:40:12",
    "source": "Support monitor",
    "event": "A fictional alert reports repeated preview failures and unusual service-identity storage activity.",
    "meaning": "The alert is preserved as the original intake signal."
  },
  {
    "time": "08:40:14",
    "source": "Alert ingestion",
    "event": "The monitoring platform records the alert two seconds after the source event.",
    "meaning": "Event time and ingestion time are separated."
  },
  {
    "time": "08:43",
    "source": "Source health",
    "event": "Application logs are delayed by eighteen minutes, while identity and transaction sources are healthy.",
    "meaning": "Application silence cannot support a no-activity conclusion."
  },
  {
    "time": "08:46",
    "source": "Asset inventory",
    "event": "The alert maps to the fictional production preview worker and shared service identity.",
    "meaning": "Stable asset and identity context are established."
  },
  {
    "time": "08:50:03",
    "source": "Identity service",
    "event": "The service identity requests one storage prefix outside its approved scope.",
    "meaning": "A security-relevant access decision is confirmed."
  },
  {
    "time": "08:50:05",
    "source": "Transaction system",
    "event": "An approved teacher preview job begins for an active support case.",
    "meaning": "A legitimate business workflow overlaps the unusual activity."
  },
  {
    "time": "08:50:11",
    "source": "Storage service",
    "event": "The preview request reaches the broader prefix but no unrelated file read completes.",
    "meaning": "Reachability is supported while harmful data access is not."
  },
  {
    "time": "08:55",
    "source": "Change record",
    "event": "A configuration update expanded the storage prefix during the previous maintenance window.",
    "meaning": "A recent approved change provides a plausible root-cause path."
  },
  {
    "time": "09:05",
    "source": "Triage record",
    "event": "The case is classified as a confirmed security event with medium severity and high confidence.",
    "meaning": "The classification matches the evidence and limitations."
  },
  {
    "time": "09:20",
    "source": "Containment record",
    "event": "The identity is narrowed to the approved path and the preview worker is paused.",
    "meaning": "A targeted protective action begins."
  },
  {
    "time": "09:35",
    "source": "Delayed application logs",
    "event": "The logs arrive and confirm no unrelated file read, export, or cache creation.",
    "meaning": "Later evidence increases confidence and narrows impact."
  },
  {
    "time": "09:45",
    "source": "Evidence coordinator",
    "event": "Original times, normalized times, source lineage, access history, conflicts, and gaps are added to the evidence index.",
    "meaning": "The case becomes reproducible for later review."
  },
  {
    "time": "10:00",
    "source": "Timeline version 2",
    "event": "The delayed application event is inserted without changing the preserved earlier timeline version.",
    "meaning": "Timeline revisions remain transparent."
  },
  {
    "time": "10:15",
    "source": "Handoff",
    "event": "The case summary links each fact, conclusion, scope state, and action to evidence identifiers.",
    "meaning": "The next team can reproduce the investigation."
  }
];
const commonMistakes = [
  "Copying a fictional alert into notes and discarding the original source record, identifier, timestamp, and raw context.",
  "Treating a dashboard, export, screenshot, and summary from one source as four independent confirmations.",
  "Converting timestamps without preserving original values, time zones, offsets, clock sources, ingestion times, and uncertainty.",
  "Sorting events by displayed time without considering delay, clock drift, parsing, batching, or ingestion order.",
  "Editing fictional evidence to make the timeline cleaner or more persuasive.",
  "Mixing original records, analyst notes, supported conclusions, and assumptions without labeling them.",
  "Failing to document who collected, copied, reviewed, transformed, redacted, transferred, or released evidence.",
  "Ignoring missing periods, delayed sources, parser errors, stale retention, and source-health failures.",
  "Using exact seconds when the evidence supports only a range, sequence, or approximate time.",
  "Building one fixed timeline and overwriting earlier versions when delayed or conflicting evidence appears.",
  "Citing timeline conclusions without links to evidence identifiers and source lineage.",
  "Publishing real logs, users, identities, filenames, routes, timestamps, system names, owners, or private incident records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What should happen before a fictional alert is summarized?",
    "choices": [
      "Preserve the original record with source, identifier, timestamp, raw content, context, and handling history.",
      "Rewrite it into a conclusion.",
      "Delete duplicate fields.",
      "Normalize every time and discard the original."
    ],
    "answer": 0,
    "explanation": "The original record should remain available before transformation or interpretation."
  },
  {
    "question": "Why should original and normalized timestamps both be preserved?",
    "choices": [
      "Reviewers need the original source value and the documented conversion used for cross-source comparison.",
      "Normalized time is always wrong.",
      "Original time is never useful.",
      "It makes every event independent."
    ],
    "answer": 0,
    "explanation": "Preserving both values makes the timeline reproducible and transparent."
  },
  {
    "question": "What makes two fictional records independent evidence?",
    "choices": [
      "They originate from genuinely different relevant sources or processes rather than copied views of the same underlying source.",
      "They appear on different dashboards.",
      "They have different colors.",
      "They were exported twice."
    ],
    "answer": 0,
    "explanation": "Copies and transformed views do not automatically provide independent corroboration."
  },
  {
    "question": "When should a time range be used instead of an exact time?",
    "choices": [
      "When clock drift, delayed delivery, batching, incomplete records, or conflicting sources do not support exact precision.",
      "Never.",
      "Only for low-severity events.",
      "Whenever an analyst prefers a range."
    ],
    "answer": 0,
    "explanation": "Timeline precision should match the strength of the evidence."
  },
  {
    "question": "What should an evidence index contain?",
    "choices": [
      "Identifier, source, owner, original and normalized time, scope, integrity, lineage, confidence, limitations, and handling history.",
      "Only filenames.",
      "Only analyst conclusions.",
      "Only the final timeline order."
    ],
    "answer": 0,
    "explanation": "The index connects case claims to traceable source records and limitations."
  },
  {
    "question": "Why should timeline versions be preserved?",
    "choices": [
      "Delayed or conflicting evidence may change event placement, confidence, and conclusions, and reviewers need to see that history.",
      "Old versions are always incorrect.",
      "Versioning replaces evidence preservation.",
      "Only auditors need revisions."
    ],
    "answer": 0,
    "explanation": "Transparent revisions protect trust and reproducibility."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional evidence identifiers, logs, users, identities, files, routes, systems, timestamps, owners, and organizations.",
      "Publish real logs after hiding one field.",
      "Include internal filenames and routes.",
      "Reuse private evidence screenshots."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate evidence skill without exposing real incident records or systems."
  }
];

type DetailItem = {
  title: string;
  summary: string;
  details: string[][];
};

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

function DetailSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: DetailItem[];
}) {
  const detailStyles = [
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-50",
    "border-blue-400/25 bg-blue-400/10 text-blue-50",
    "border-red-400/25 bg-red-400/10 text-red-50",
  ];

  const labelStyles = [
    "text-emerald-200",
    "text-blue-200",
    "text-red-200",
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>

      <div className="mt-6 grid gap-5">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.summary}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {item.details.map(([label, detail], index) => (
                <div
                  key={`${item.title}-${label}`}
                  className={`rounded-xl border p-4 ${
                    detailStyles[index % detailStyles.length]
                  }`}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.16em] ${
                      labelStyles[index % labelStyles.length]
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Evidence Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Case from Original Signal to Reproducible Timeline
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.35fr_1fr_1fr]"
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

export default function EvidencePreservationAndTimelineBuildingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I11
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.4 Evidence Preservation and Timeline Building
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams preserve original records,
            document source lineage and handling, normalize timestamps,
            correlate independent evidence, resolve conflicts, expose gaps,
            version timelines, and connect every important case conclusion to a
            reproducible evidence index.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I11: Incident Response Basics"
          lessonTitle="Evidence Preservation and Timeline Building"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will preserve fictional original records before summarizing, normalizing, filtering, or transforming them.",
            "I will record source, identifier, owner, collection method, original time, time zone, clock source, ingestion time, integrity, completeness, and limitations.",
            "I will not count dashboards, exports, screenshots, and summaries from one underlying source as independent evidence.",
            "I will use ranges or sequence-only placement when the evidence does not support exact timing.",
            "I will use only supplied fictional logs, alerts, users, identities, files, transactions, systems, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Clean Timeline Can Be Less Trustworthy Than a Messy One"
        >
          <p className="leading-8">
            A fictional case contains an alert at 8:40, an identity event at
            8:50, a transaction record at 8:50, and application logs that arrive
            eighteen minutes late. If a responder overwrites the original
            timestamps, hides the delay, and counts several dashboards as
            independent proof, the final timeline may look precise but be
            impossible to defend. Strong evidence work preserves uncertainty
            and source history rather than editing them away.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak evidence handling
              </p>
              <p className="mt-2 leading-7">
                Copy visible fields into notes, delete raw records, convert
                times without documentation, merge conflicts, and rewrite the
                timeline until every event appears exact.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong evidence handling
              </p>
              <p className="mt-2 leading-7">
                Preserve originals, record lineage and handling, normalize
                transparently, expose conflicts and gaps, version the timeline,
                and link every conclusion to evidence identifiers.
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
          title="Evidence Quality Determines Whether Scope, Containment, Recovery, Communication, and Closure Can Be Defended"
        >
          <p className="leading-8">
            Fictional response decisions may depend on a few minutes, one
            identity event, a file record, or a delayed source. If responders
            cannot show where the record came from, how it was handled, what
            time it actually represents, or which transformation produced the
            displayed value, later decisions become unreliable. Preservation
            and timeline discipline protect the entire response process.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Preservation Workflow"
          title="Eight Steps for Preserving Fictional Evidence"
          items={preservationSteps}
        />

        <DetailSection
          eyebrow="Evidence Sources"
          title="Eight Source Families for a Complete Case"
          items={sourceFamilies}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Original–Lineage–Time–Correlation–Confidence–Decision Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Original", "Which fictional raw record, identifier, source, owner, timestamp, and context were preserved first?"],
              ["Lineage", "Which fictional collection, export, parser, dashboard, screenshot, summary, or note transformed the record?"],
              ["Time", "Which fictional original time, time zone, clock source, ingestion time, drift, delay, and normalized time apply?"],
              ["Correlation", "Which fictional independent identity, application, file, transaction, deployment, business, and source-health records agree or conflict?"],
              ["Confidence", "Which fictional facts are strong, which remain uncertain, and which gaps or source problems limit the timeline?"],
              ["Decision", "Which fictional scope, containment, communication, recovery, residual-risk, or closure conclusion is supported?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DetailSection
          eyebrow="Timeline Method"
          title="Eight Rules for Reliable Event Ordering"
          items={timelineMethods}
        />

        <DetailSection
          eyebrow="Timeline Content"
          title="Eight Event Types to Correlate"
          items={eventTypes}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence Preservation and Timeline Terms
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
          title="Fake Evidence Preservation Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Indexed evidence records",
              value: "64",
              note: "Fictional originals and documented derived records with source, time, scope, lineage, confidence, and handling history.",
            },
            {
              label: "Unresolved time conflicts",
              value: "3",
              note: "Fictional events requiring clock, delay, parsing, or sequence review before exact placement.",
            },
            {
              label: "Healthy source coverage",
              value: "88%",
              note: "Fictional case questions supported by current, accessible, complete, and independently useful evidence sources.",
            },
          ]}
        />

        <FakeAlertCard
          title="Timeline Uses Three Dashboards from One Delayed Source"
          severity="High"
          time="9:42 AM"
          source="Fake Evidence Quality Console"
          details="A fictional analyst timeline cites an alert dashboard, a log dashboard, and a screenshot as three confirmations. All three are derived from the same delayed application source, and the original timestamps were replaced with display time during export."
          recommendation="Preserve the original alert and source records; document the shared lineage; count the three views as one underlying source; restore original timestamps and time-zone context; separate event and ingestion time; lower confidence where exact ordering is unsupported; use identity, transaction, file, deployment, and business evidence for independent correlation; version the corrected timeline; and link conclusions to evidence identifiers."
        />

        <FakeLogPanel
          title="Fake Evidence and Timeline Records"
          logs={[
            "08:40:12 ALERT source='support_monitor' id='AL-204' original='preserved'",
            "08:40:14 INGEST alert_id='AL-204' delay='2s'",
            "08:43:00 SOURCE_HEALTH app_logs='delayed_18m' identity='healthy' transactions='healthy'",
            "08:46:00 ASSET worker='support_preview_prod' identity='svc_preview_shared'",
            "08:50:03 IDENTITY path='broader_prefix' decision='allowed'",
            "08:50:05 TRANSACTION preview='approved' case='active'",
            "08:50:11 STORAGE broader_prefix='reached' unrelated_read='not_completed'",
            "08:55:00 CHANGE storage_prefix='expanded' window='previous_evening'",
            "09:05:00 CLASSIFY event='confirmed_security_event' severity='medium'",
            "09:20:00 CONTAIN identity='narrowed' worker='paused'",
            "09:35:00 DELAYED_LOGS unrelated_read='none' export='none' cache='none'",
            "09:45:00 INDEX originals='linked' normalized_times='documented'",
            "10:00:00 TIMELINE version='2' prior_version='preserved'",
            "10:15:00 HANDOFF claims='linked_to_evidence_ids'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Timeline Conclusion Is Best Supported?"
          evidence={[
            "The fictional alert occurred at 08:40:12 and was ingested two seconds later.",
            "Application logs were delayed by eighteen minutes.",
            "Identity and transaction sources were healthy and independent.",
            "The service identity requested a broader storage prefix at 08:50:03.",
            "An approved teacher preview transaction began at 08:50:05.",
            "Storage records show the broader prefix was reached but unrelated file read did not complete.",
            "Delayed application logs later show no unrelated read, export, or cache creation.",
            "The original timeline version and corrected version are both preserved.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional configuration and access-control weakness occurred during an approved workflow; broader-path reachability is supported, unrelated-file access is not supported, and the timeline is reliable because source delay and revisions remain visible.",
            "The district-wide incident began exactly at 08:50:03.",
            "Three dashboards independently prove data exposure.",
            "The delayed logs should replace every earlier record.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a narrow sequence and conclusion while preserving source delay, event limits, and timeline revision history."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Evidence Preservation and Timeline Building"
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
          title="Build a Fictional Evidence Preservation and Timeline Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Evidence Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review sixty-four supplied fictional records covering alerts,
                logs, identities, sessions, transactions, files, queues,
                deployments, configurations, source health, business activity,
                support notes, decisions, containment, communication, handling,
                timestamp conflicts, and timeline revisions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve and label the fictional original and derived records.</li>
                <li>Create the evidence index, source-lineage map, handling record, and source-health review.</li>
                <li>Document original time, normalized time, time zone, clock source, delay, drift, and uncertainty.</li>
                <li>Build and version a correlated timeline using independent evidence and visible conflicts.</li>
                <li>Link facts, conclusions, scope states, actions, and decisions to evidence identifiers.</li>
                <li>Produce a handoff summary, quality report, and portfolio-safe timeline package.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, copy, alter,
            identify, collect, publish, or request real logs, files, users,
            identities, timestamps, systems, routes, credentials, owners, or
            private incident records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Three Dashboards Use One Underlying Source"
          scenario="A fictional analyst cites an alert dashboard, a log dashboard, and a screenshot as three independent confirmations, but all are derived from one delayed application source."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the shared lineage, count them as one underlying source, preserve the original record, use independent identity and transaction evidence, and revise confidence and timeline notes.",
              outcome:
                "Best defensive choice. It prevents false corroboration and preserves traceability.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep all three as independent because they look different.",
              outcome:
                "Weak. Different views do not create independent evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete every dashboard and use no application evidence.",
              outcome:
                "Incomplete. The views may still be useful when their shared lineage and limitations are documented.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Two Sources Disagree by Seven Minutes"
          scenario="A fictional identity service and application record describe the same job but differ by seven minutes, and the application source was delayed during collection."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both original times, document clock and ingestion context, use a supported time range or sequence, correlate identifiers and outcomes, and revise when stronger evidence appears.",
              outcome:
                "Best defensive choice. Precision remains matched to the evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Average the two times and present the result as exact.",
              outcome:
                "Unsupported. Averaging hides the cause and uncertainty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Discard the later source automatically.",
              outcome:
                "Weak. Delay does not make the source useless; it must be evaluated and documented.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Evidence Preservation and Timeline Building Checklist"
          items={[
            "I preserve fictional original records before filtering, parsing, normalizing, summarizing, or transforming them.",
            "I record evidence identifier, source, owner, original time, time zone, clock source, ingestion time, normalized time, scope, relevance, integrity, completeness, and limitations.",
            "I document collection, access, copying, review, transfer, transformation, redaction, archive, retention, and release history.",
            "I map source lineage from originals to exports, dashboards, screenshots, summaries, analyst notes, and cited conclusions.",
            "I test source availability, delay, parsing, retention, access, expected events, missing-event detection, and alternate evidence.",
            "I count copied or derived views as one underlying source unless genuinely independent evidence exists.",
            "I use ranges or sequence-only placement when exact timing is unsupported.",
            "I preserve conflicting records, evidence gaps, alternative explanations, timeline revisions, changed confidence, and reviewer approvals.",
            "I link every important fact, conclusion, scope state, action, communication, recovery decision, and closure claim to evidence identifiers.",
            "I use only fictional information and never expose real logs, files, users, identities, timestamps, routes, systems, owners, or private incident records.",
          ]}
        />

        <MiniQuiz
          title="I11.4 Mini Quiz: Evidence Preservation and Timeline Building"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Evidence Preservation and Timeline Package using at least sixty-four alert, log, identity, session, transaction, file, queue, deployment, configuration, source-health, business, support, decision, containment, communication, handling, timestamp, and timeline-revision records. Include an evidence index, source-lineage map, handling history, timestamp-normalization register, correlated timeline, conflict log, confidence notes, quality review, handoff summary, and portfolio-safe executive timeline."
          tips={[
            "Use only clearly fictional evidence identifiers, systems, users, identities, files, routes, timestamps, owners, organizations, and records.",
            "Preserve original and normalized time, event and ingestion time, source health, clock differences, delay, uncertainty, and revisions.",
            "Show which views share one underlying source and which records provide independent corroboration.",
            "Do not include real logs, screenshots, usernames, filenames, routes, credentials, source names, timestamps, case notes, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional evidence should remain traceable to original records, source lineage, handling history, timestamps, owners, scope, and limitations.",
            "Dashboards, screenshots, exports, and summaries from one source do not automatically provide independent confirmation.",
            "Timeline precision should match the evidence, including delay, drift, batching, parsing, missing periods, and source conflicts.",
            "Original and normalized timestamps should both be preserved so the timeline can be reproduced.",
            "A strong evidence index links every important fact, conclusion, action, communication, recovery step, and closure decision to source records.",
            "Timeline revisions, changed confidence, delayed evidence, conflicts, and rejected explanations should remain visible rather than overwritten.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I11
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