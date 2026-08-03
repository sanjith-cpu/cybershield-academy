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
const modulePath = `${trackPath}/siem-and-alert-triage-concepts`;
const previousLesson = `${modulePath}/what-a-siem-does`;
const nextLesson = `${modulePath}/correlation-and-alert-rules`;

const objectives = [
  "Trace a fictional record from source creation through collection, parsing, normalization, enrichment, storage, indexing, correlation readiness, and analyst use while preserving provenance and timing.",
  "Differentiate fictional raw evidence, parsed fields, normalized fields, transformed values, enrichment, derived context, source-health metadata, and analyst interpretation.",
  "Evaluate fictional collection and normalization quality using schema versions, field meaning, event time, collection time, processing time, delay, duplication, loss, ordering, coverage, privacy, retention, and ownership.",
  "Design safe fictional source-health behavior for Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering collection states.",
  "Create a portfolio-ready fictional Collection and Normalization Package containing a source catalog, data dictionary, pipeline map, quality controls, failure modes, validation cases, metrics, owners, limitations, and review triggers."
];
const vocabulary = [
  [
    "Source record",
    "A fictional original record produced by an identity, endpoint, network, DNS, email, application, cloud, supplier, change, support, administrative, or source-health system."
  ],
  [
    "Raw evidence",
    "A fictional representation of source-created information before SIEM parsing, normalization, enrichment, or analyst interpretation."
  ],
  [
    "Collector",
    "A fictional defensive component or process that receives, transfers, or forwards selected records from a source into the evidence pipeline."
  ],
  [
    "Collection scope",
    "The fictional identities, services, devices, environments, fields, states, and periods that a collector is designed to include."
  ],
  [
    "Parsing",
    "The fictional interpretation of a source record into documented source-specific fields and values."
  ],
  [
    "Parser version",
    "The fictional version of parsing logic that defines how a source record is interpreted."
  ],
  [
    "Schema",
    "A fictional documented structure describing fields, types, allowed values, relationships, and meanings."
  ],
  [
    "Schema drift",
    "A fictional change in source fields, types, values, relationships, or meaning that may affect parsing and normalization."
  ],
  [
    "Field mapping",
    "The fictional relationship between a source-specific field and a shared normalized field."
  ],
  [
    "Normalization",
    "The fictional mapping of different source fields into common categories while preserving provenance, source meaning, and limitations."
  ],
  [
    "Canonical field",
    "A fictional shared field used across multiple source categories for consistent defensive analysis."
  ],
  [
    "Transformation",
    "A fictional documented change to a value, type, timestamp, category, format, or relationship during processing."
  ],
  [
    "Enrichment",
    "Fictional identity, device, service, ownership, authorization, criticality, destination, peer, change, policy, or mission context added after collection."
  ],
  [
    "Derived field",
    "A fictional field calculated or inferred from one or more source fields rather than directly recorded by the source."
  ],
  [
    "Event time",
    "The fictional time when the underlying activity or state occurred at the source."
  ],
  [
    "Collection time",
    "The fictional time when the collector received or transferred the record."
  ],
  [
    "Processing time",
    "The fictional time when parsing, normalization, enrichment, storage, indexing, or correlation preparation occurred."
  ],
  [
    "Ingestion delay",
    "The fictional difference between event time and the time evidence becomes available in the SIEM."
  ],
  [
    "Duplicate record",
    "A fictional repeated representation of the same underlying event, request, retry, replay, state, or collector delivery."
  ],
  [
    "Out-of-order arrival",
    "A fictional condition in which records enter the SIEM in a different order from the underlying event sequence."
  ],
  [
    "Data loss",
    "A fictional gap in which expected records, fields, populations, environments, or periods are unavailable."
  ],
  [
    "Field completeness",
    "The fictional degree to which required and optional fields are present for a defined source and purpose."
  ],
  [
    "Semantic quality",
    "The fictional degree to which field values and categories retain their intended meaning after processing."
  ],
  [
    "Normalization debt",
    "Fictional risk created by stale mappings, missing tests, undocumented transformations, weak ownership, or unresolved schema differences."
  ]
];
const pipelineStages = [
  {
    "stage": "1. Source creation",
    "purpose": "A fictional source records an activity, state, transaction, result, ownership change, support action, or source-health observation.",
    "evidence": "Original source category, schema version, record identifier, event time, field values, local meaning, and source owner.",
    "risk": "The original record may already be incomplete, delayed, duplicated, ambiguous, or outside intended coverage.",
    "control": "Document source purpose, local field meanings, expected record behavior, owner, schema, and limitations."
  },
  {
    "stage": "2. Purpose-based selection",
    "purpose": "The fictional program decides which records, fields, identities, services, environments, and periods should enter the SIEM.",
    "evidence": "Collection scope, field-purpose map, privacy review, access roles, retention need, exclusions, and owner approval.",
    "risk": "Overcollection increases privacy and maintenance risk while undercollection creates coverage gaps.",
    "control": "Use mission-driven selection, field minimization, documented exclusions, and periodic coverage review."
  },
  {
    "stage": "3. Collection",
    "purpose": "A fictional collector receives or transfers selected records from the source.",
    "evidence": "Collection time, collector identifier, delivery path, queue state, retry state, expected volume, and source health.",
    "risk": "Records may be delayed, lost, duplicated, retried, reordered, or delivered through overlapping paths.",
    "control": "Track freshness, completeness, queue age, delivery success, uniqueness, blind periods, and recovery."
  },
  {
    "stage": "4. Parsing",
    "purpose": "A fictional parser interprets source content into source-specific fields.",
    "evidence": "Parser version, schema version, extraction status, parse errors, unmapped values, and fallback behavior.",
    "risk": "A parser may silently drop fields, misread values, or continue after a source schema change.",
    "control": "Use versioned schemas, parser tests, parse-failure alerts, Unknown handling, and owner review."
  },
  {
    "stage": "5. Field mapping",
    "purpose": "Fictional source-specific fields are mapped to shared normalized categories.",
    "evidence": "Source field, canonical field, type, allowed values, transformation, confidence, provenance, and owner.",
    "risk": "Different source meanings may be treated as equivalent.",
    "control": "Preserve source-specific meaning, document assumptions, and test semantic differences."
  },
  {
    "stage": "6. Normalization",
    "purpose": "Fictional records are organized into consistent defensive structures for search, dashboards, correlation, and triage.",
    "evidence": "Canonical fields, normalized values, source labels, timestamps, missing-data states, and transformation history.",
    "risk": "Normalization can hide source nuance, time differences, missing fields, or uncertainty.",
    "control": "Retain provenance, source category, local values, transformation notes, and limitations."
  },
  {
    "stage": "7. Enrichment",
    "purpose": "Fictional identity, device, service, ownership, authorization, peer, destination, criticality, change, policy, or mission context is added.",
    "evidence": "Enrichment source, owner, timestamp, freshness, relationship, privacy purpose, and limitation.",
    "risk": "Stale or incorrect enrichment may change severity, priority, ownership, or interpretation.",
    "control": "Track freshness, authority, owner, expiration, confidence, and alternate context."
  },
  {
    "stage": "8. Storage and indexing",
    "purpose": "Fictional processed records become available for approved search, correlation, dashboard, case, and quality purposes.",
    "evidence": "Storage state, index status, retention, access roles, availability, deletion, and search scope.",
    "risk": "Missing results may reflect indexing, retention, access, or availability rather than absence.",
    "control": "Document searchable fields, retention boundaries, access limits, index health, and deletion behavior."
  },
  {
    "stage": "9. Correlation readiness",
    "purpose": "Fictional records are prepared for relationship, count, sequence, threshold, state, timing, and source-health analysis.",
    "evidence": "Correlation keys, normalized identities, session and service relationships, destination categories, time alignment, and uniqueness.",
    "risk": "Incorrect relationships or timing may create false matches or missed conditions.",
    "control": "Validate keys, windows, uniqueness, time basis, missing-data behavior, source health, and test coverage."
  },
  {
    "stage": "10. Analyst use and lifecycle",
    "purpose": "Fictional analysts use processed evidence for searches, alerts, dashboards, cases, decisions, quality review, change, and retirement.",
    "evidence": "Alert explanations, case notes, owner questions, health visibility, quality findings, change records, and review triggers.",
    "risk": "Processed evidence may be treated as unquestioned fact or remain stale after source changes.",
    "control": "Train analysts on provenance and limits, assign owners, measure quality, review changes, and retire outdated mappings."
  }
];
const sourceCategories = [
  {
    "source": "Identity and access",
    "records": "Role state, group state, approval, extension, sponsor, session, assignment, revocation, and source-health records.",
    "needs": "Identity category, role category, authorization state, approval timing, session relationship, owner group, and lifecycle state.",
    "risk": "A valid identity may be mistaken for valid use, or role assignment may be mistaken for effective access.",
    "privacy": "Collect purpose-limited identity, role, owner, and authorization fields rather than unrelated personal history."
  },
  {
    "source": "Endpoint and device",
    "records": "Device identity, device class, onboarding, owner, replacement, posture, support state, network class, and retirement.",
    "needs": "Device category, managed state, owner group, lifecycle state, support status, and source health.",
    "risk": "A device label may not prove who used the device or whether inventory is current.",
    "privacy": "Use device and ownership categories without personal content."
  },
  {
    "source": "Network",
    "records": "Source group, destination class, direction, session, policy result, service relationship, timing, and sensor health.",
    "needs": "Source zone, destination zone, direction, relationship type, session state, policy result, and time basis.",
    "risk": "A destination relationship does not prove application action, content, owner, or harmful intent.",
    "privacy": "Use service and destination categories rather than real addresses or browsing history."
  },
  {
    "source": "DNS and naming",
    "records": "Requester group, resolver, question category, response category, cache state, policy, timing, and health.",
    "needs": "Requester class, resolver class, question type, response class, audience, cache state, and policy result.",
    "risk": "Different answers may reflect audience, cache, migration, policy, or timing rather than harmful behavior.",
    "privacy": "Limit evidence to defined service questions rather than broad personal query histories."
  },
  {
    "source": "Application and service",
    "records": "Operation category, result, object class, service owner, request, response, state, user impact, and source health.",
    "needs": "Operation, result, object class, service category, owner group, user-impact state, and workflow state.",
    "risk": "The same word such as success may represent different outcomes across applications.",
    "privacy": "Use object and result categories rather than message contents or personal records."
  },
  {
    "source": "Cloud and administration",
    "records": "Administrative role, configuration change, service action, policy result, owner, approval, timing, and source health.",
    "needs": "Administrative action category, privilege class, change state, approval state, owner group, and service scope.",
    "risk": "An administrative action may be expected, automated, emergency, or incomplete depending on context.",
    "privacy": "Exclude real configuration detail, credentials, routes, and unnecessary operator information."
  },
  {
    "source": "Supplier and support",
    "records": "Supplier identity, sponsor, assignment, device, destination, session, support request, result, closure, and source health.",
    "needs": "Supplier role, sponsor state, assignment state, device class, support purpose, destination class, and closure state.",
    "risk": "Outside-hours activity may be approved maintenance or emergency support rather than unauthorized behavior.",
    "privacy": "Use role, sponsor, purpose, destination category, and assignment timing rather than personal supplier details."
  },
  {
    "source": "Change and recovery",
    "records": "Change identifier, owner, scope, expected behavior, start, end, validation, result, rollback, recovery, and closure.",
    "needs": "Change state, operating state, approved scope, expected difference, rollback state, and completion state.",
    "risk": "A linked change does not authorize every identity, destination, action, result, or time.",
    "privacy": "Avoid configuration and architecture details unnecessary for the decision."
  }
];
const fieldDictionary = [
  {
    "field": "actor.category",
    "examples": "Fictional user, service, supplier, administrative, or recovery identity labels.",
    "meaning": "Shared category describing the kind of actor represented by the record.",
    "transform": "Mapped into invented User, Service, Supplier, Administrative, Recovery, or Unknown categories.",
    "limit": "Actor category does not prove authorization, ownership, or intent."
  },
  {
    "field": "action.category",
    "examples": "Fictional sign-in, role change, service operation, destination request, support action, or policy evaluation.",
    "meaning": "Shared category describing observed activity or state transition.",
    "transform": "Mapped from source-specific action names into conceptual defensive categories.",
    "limit": "Different source actions may share a category while retaining different meanings."
  },
  {
    "field": "result.category",
    "examples": "Fictional completed, accepted, allowed, denied, pending, failed, partial, or unknown values.",
    "meaning": "Shared category describing the source-reported outcome.",
    "transform": "Normalized into invented Success, Denied, Failed, Pending, Partial, or Unknown values.",
    "limit": "Success in one source may mean request acceptance rather than business completion."
  },
  {
    "field": "service.category",
    "examples": "Fictional student-support, notification, identity, recovery, administrative, learning, or supplier-service labels.",
    "meaning": "Shared mission category for the associated service.",
    "transform": "Mapped from source-specific names into public-safe fictional classes.",
    "limit": "Service category may be stale after ownership, architecture, or mission changes."
  },
  {
    "field": "destination.category",
    "examples": "Fictional approved dependency, new dependency, supplier service, recovery service, or unknown destination.",
    "meaning": "Shared category describing the destination relationship.",
    "transform": "Derived from source evidence and an invented service-relationship catalog.",
    "limit": "Destination category does not prove application result or content."
  },
  {
    "field": "authorization.state",
    "examples": "Fictional approval, assignment, extension, sponsor, maintenance, or emergency-use records.",
    "meaning": "Shared state describing whether current authorization evidence supports the activity.",
    "transform": "Derived into Approved, Expired, Missing, Conflicting, or Unknown states.",
    "limit": "Authorization may depend on delayed or incomplete evidence."
  },
  {
    "field": "event.time",
    "examples": "Fictional source-recorded activity or state-change time.",
    "meaning": "Time when the underlying source event occurred.",
    "transform": "Converted to one fictional common format while preserving source time and clock state.",
    "limit": "Event time may be missing, rounded, delayed, or affected by clock differences."
  },
  {
    "field": "source.health",
    "examples": "Fictional freshness, completeness, schema, parser, queue, clock, coverage, duplication, blind-period, and recovery checks.",
    "meaning": "Shared state describing how reliably evidence supports its documented purpose.",
    "transform": "Derived into Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering.",
    "limit": "Healthy technical status does not guarantee perfect semantic quality."
  }
];
const timingModels = [
  {
    "name": "Event-time reasoning",
    "use": "Understand the fictional order and duration of underlying activities or state changes.",
    "question": "When did the source say the activity happened?",
    "risk": "Source clocks may be inaccurate, rounded, missing, or differently synchronized."
  },
  {
    "name": "Collection-time reasoning",
    "use": "Understand when fictional evidence entered the collection pipeline.",
    "question": "When did the collector receive or transfer the record?",
    "risk": "Collection order may differ from event order."
  },
  {
    "name": "Processing-time reasoning",
    "use": "Understand when fictional parsing, normalization, enrichment, indexing, and correlation became available.",
    "question": "When could the SIEM and analyst actually use the evidence?",
    "risk": "Processing delay may create late alerts or incomplete cross-source context."
  },
  {
    "name": "Alert-time reasoning",
    "use": "Understand when the fictional correlation or alert condition was evaluated and presented.",
    "question": "When did the platform produce the alert relative to the event?",
    "risk": "Alert time may be mistaken for event time."
  },
  {
    "name": "Window reasoning",
    "use": "Determine whether fictional records belong in a count, sequence, expiration, or correlation window.",
    "question": "Which time basis and tolerance define the window?",
    "risk": "A wrong time basis may create false matches or missed conditions."
  },
  {
    "name": "Recovery reasoning",
    "use": "Understand fictional blind periods, backlog, replay, duplication, historical reassessment, and restoration confidence.",
    "question": "Which records are original, delayed, replayed, duplicate, missing, or unreconciled?",
    "risk": "Source connectivity may be mistaken for complete evidence recovery."
  }
];
const sourceHealthStates = [
  {
    "state": "Healthy",
    "condition": "Required fictional records and fields are current, complete enough, correctly parsed, correctly mapped, aligned, covered, and accessible.",
    "behavior": "Normal collection, parsing, normalization, enrichment, storage, indexing, and analyst use may proceed.",
    "meaning": "Use normal confidence while preserving ordinary semantic and coverage limits."
  },
  {
    "state": "Conditional",
    "condition": "One optional field, enrichment source, owner record, or noncritical relationship is stale or incomplete.",
    "behavior": "Preserve the core record but mark enrichment-dependent severity, priority, or routing as limited.",
    "meaning": "Do not use stale context for closure or broad conclusions."
  },
  {
    "state": "Degraded",
    "condition": "A required source, field, parser, schema, mapping, clock, queue, or collection path is delayed or incomplete.",
    "behavior": "Make affected records and fields visibly limited, lower confidence, and request alternate evidence.",
    "meaning": "Do not interpret missing or delayed evidence as normal-confidence absence."
  },
  {
    "state": "Blind",
    "condition": "Required evidence is unavailable for a documented population, service, environment, or period.",
    "behavior": "Record the blind period, affected sources and detections, alternate evidence, and reassessment need.",
    "meaning": "Do not claim the condition was absent."
  },
  {
    "state": "Conflicting",
    "condition": "Source, parser, schema, mapping, timing, or ownership evidence disagrees beyond expected differences.",
    "behavior": "Preserve both versions, show provenance, and create a reconciliation state.",
    "meaning": "Avoid silently trusting one value without authority and timing review."
  },
  {
    "state": "Recovering",
    "condition": "The pipeline is available again, but backlog, replay, duplication, schema, clock, field, or historical gaps remain.",
    "behavior": "Use limited confidence until uniqueness, backfill, semantic quality, and regression checks pass.",
    "meaning": "Connectivity restoration does not prove the evidence pipeline is fully healthy."
  }
];
const validationCases = [
  {
    "case": "Expected record",
    "input": "A fictional identity role-state record arrives with required fields, current schema, and Healthy source status.",
    "expected": "The record parses, maps, normalizes, stores, and remains searchable with complete provenance.",
    "failure": "Possible collection, parser, mapping, indexing, or test-data defect."
  },
  {
    "case": "Missing required field",
    "input": "A fictional approval record arrives without approval_end.",
    "expected": "The record remains visible with missing-field state; authorization becomes Conditional or Unknown.",
    "failure": "Silent field loss or unsupported authorization confidence."
  },
  {
    "case": "Missing optional field",
    "input": "A fictional service record lacks criticality enrichment but includes action, result, owner, and source health.",
    "expected": "Core evidence remains usable while severity or priority context is limited.",
    "failure": "The pipeline depends unnecessarily on optional enrichment."
  },
  {
    "case": "Schema drift",
    "input": "A fictional source changes result_code to a new undocumented string.",
    "expected": "Unknown is preserved, a quality alert appears, and affected rules remain Conditional.",
    "failure": "Silent semantic corruption or false normalization."
  },
  {
    "case": "Duplicate delivery",
    "input": "The same fictional record identifier arrives through retry and replay paths.",
    "expected": "The duplicate relationship is visible and uniqueness rules avoid inflated counts without deleting legitimate repetition.",
    "failure": "Duplicate flooding or overaggressive deduplication."
  },
  {
    "case": "Out-of-order arrival",
    "input": "A fictional revocation occurs first but reaches the SIEM after session evidence.",
    "expected": "Event-time and collection-time order remain distinct; sequence confidence reflects delay.",
    "failure": "Collection order is mistaken for event order."
  },
  {
    "case": "Blind period",
    "input": "A fictional source provides no records for a documented period and population.",
    "expected": "Blind state and affected coverage are visible; quiet results are not labeled normal or absent.",
    "failure": "False-negative and false-confidence risk."
  },
  {
    "case": "Recovery replay",
    "input": "A fictional source returns and delivers queued records with original event times plus replay metadata.",
    "expected": "Recovering state, duplicate-aware handling, historical reassessment, and backfill validation.",
    "failure": "Duplicate alerts, false sequence, missed blind-period cases, or premature Healthy status."
  }
];
const qualityMetrics = [
  {
    "metric": "Collection completeness",
    "question": "Did the fictional pipeline receive expected records across documented identities, services, environments, and periods?",
    "evidence": "Expected volume, source counters, sequence checks, blind-period records, owner confirmation, and coverage maps.",
    "limit": "Expected volume may itself be inaccurate."
  },
  {
    "metric": "Field completeness",
    "question": "Are fictional required and optional fields present at expected rates?",
    "evidence": "Field-presence reports, schema tests, parser results, unknown-value counts, and source-owner review.",
    "limit": "A present field may still contain incorrect meaning."
  },
  {
    "metric": "Semantic quality",
    "question": "Do fictional normalized values preserve source meaning and documented differences?",
    "evidence": "Source-to-canonical mappings, test cases, owner review, unknown values, and correlation outcomes.",
    "limit": "Semantic quality can change after source workflow or policy changes."
  },
  {
    "metric": "Freshness and delay",
    "question": "How quickly do fictional records become available after event time?",
    "evidence": "Event, collection, processing, indexing, and alert timestamps with source states.",
    "limit": "Faster delivery does not guarantee correctness or completeness."
  },
  {
    "metric": "Duplicate rate",
    "question": "How often do fictional retries, replays, overlapping collectors, or continuing-state records create repeated representations?",
    "evidence": "Record identifiers, correlation keys, retry state, replay markers, collector paths, and grouping outcomes.",
    "limit": "Repeated records may represent legitimate repeated actions."
  },
  {
    "metric": "Parse and mapping failures",
    "question": "How often do fictional records fail parsing, produce Unknown values, or miss mappings?",
    "evidence": "Parser errors, unmapped fields, Unknown values, schema versions, fallback behavior, and affected detections.",
    "limit": "Low failure counts may hide silent misinterpretation."
  },
  {
    "metric": "Coverage confidence",
    "question": "Which fictional identities, services, devices, destinations, states, and periods have reliable collection and normalization?",
    "evidence": "Coverage map, source inventory, field dictionary, health states, tests, and known-gap register.",
    "limit": "Documented coverage does not prove every relevant behavior is observable."
  },
  {
    "metric": "Normalization debt",
    "question": "Which fictional mappings, parsers, schemas, tests, owners, transformations, and retirement tasks are stale or unresolved?",
    "evidence": "Debt register, review dates, owner matrix, change history, failed tests, and residual-risk records.",
    "limit": "Counting debt does not identify mission impact by itself."
  }
];
const evidenceMatrix = [
  {
    "id": "COLL-01",
    "source": "Fictional source catalog",
    "observation": "Eight source categories are documented, but one supplier assignment feed and one recovery identity population remain out of scope.",
    "supports": "Collection coverage is incomplete for some supplier and recovery questions.",
    "limits": "The gap does not prove a missed event occurred.",
    "use": "Keep affected detections Conditional and document residual risk."
  },
  {
    "id": "COLL-02",
    "source": "Fictional processing timeline",
    "observation": "An identity event occurs at 09:02, is collected at 09:10, processed at 09:13, and indexed at 09:15.",
    "supports": "The evidence became searchable thirteen minutes after the event.",
    "limits": "Delay does not prove the event is incorrect or harmful.",
    "use": "Separate event, collection, processing, and availability time in analyst review."
  },
  {
    "id": "COLL-03",
    "source": "Fictional parser report",
    "observation": "A new source value appears in result_code and is mapped to Unknown instead of Success or Failure.",
    "supports": "The parser preserved uncertainty rather than forcing a false category.",
    "limits": "Unknown does not identify the correct business meaning.",
    "use": "Escalate field meaning to the source owner and test affected correlations."
  },
  {
    "id": "COLL-04",
    "source": "Fictional normalization review",
    "observation": "Two application sources map completed and accepted to the same normalized Success value.",
    "supports": "The canonical field may hide different workflow outcomes.",
    "limits": "The mapping does not prove current alerts are wrong.",
    "use": "Document source-specific semantics and refine mappings or alert explanations."
  },
  {
    "id": "COLL-05",
    "source": "Fictional duplicate analysis",
    "observation": "Three records share one event identifier but arrive through retry and recovery replay paths.",
    "supports": "The records may represent one underlying event delivered multiple times.",
    "limits": "Matching identifiers alone do not prove every repeated action is duplicate.",
    "use": "Apply documented uniqueness and replay logic with regression tests."
  },
  {
    "id": "COLL-06",
    "source": "Fictional source-health dashboard",
    "observation": "Identity is Degraded, application is Healthy, DNS is Conditional, and network is Recovering.",
    "supports": "Different evidence domains require different confidence and alternate-evidence decisions.",
    "limits": "Health states do not prove the activities were expected or harmful.",
    "use": "Expose source health in normalized records, alerts, dashboards, and cases."
  },
  {
    "id": "COLL-07",
    "source": "Fictional privacy review",
    "observation": "The proposed endpoint record includes personal profile fields unrelated to the device-class defender question.",
    "supports": "The collection plan exceeds the documented purpose.",
    "limits": "The finding does not invalidate all endpoint evidence.",
    "use": "Remove unnecessary fields and retest analyst usefulness."
  },
  {
    "id": "COLL-08",
    "source": "Fictional recovery report",
    "observation": "The source is connected again, but replay backlog, duplicate rate, one schema change, and one missing period remain unresolved.",
    "supports": "The pipeline is Recovering rather than Healthy.",
    "limits": "The report does not prove every blind-period record is missing.",
    "use": "Maintain limited confidence and historical reassessment until validation passes."
  }
];
const commonMistakes = [
  {
    "mistake": "Raw, parsed, normalized, and enriched data are treated as identical",
    "observation": "A fictional analyst assumes a normalized field is the exact source record.",
    "impact": "Transformations, mappings, missing fields, and derived context are hidden.",
    "correction": "Label each evidence layer and preserve provenance, source field, transformation, and limitation."
  },
  {
    "mistake": "Collection time is treated as event time",
    "observation": "A fictional sequence is built from the order records reached the SIEM.",
    "impact": "Delayed or out-of-order evidence may create a false chronology.",
    "correction": "Preserve event, collection, processing, indexing, and alert times separately."
  },
  {
    "mistake": "Unknown values are forced into familiar categories",
    "observation": "A fictional new result value is automatically mapped to Success.",
    "impact": "Schema drift becomes silent semantic corruption.",
    "correction": "Preserve Unknown, alert on unmapped values, and obtain source-owner meaning."
  },
  {
    "mistake": "All duplicate-looking records are deleted",
    "observation": "A fictional pipeline removes every repeated record identifier or field combination.",
    "impact": "Legitimate repeated actions or state changes may disappear.",
    "correction": "Define uniqueness, retry, replay, continuing-state, and break conditions with tests."
  },
  {
    "mistake": "Normalization removes source context",
    "observation": "A fictional shared result field hides whether the source meant accepted, completed, or allowed.",
    "impact": "Search and correlation may create false equivalence.",
    "correction": "Preserve source category, local value, normalized value, mapping rationale, and limitation."
  },
  {
    "mistake": "Healthy connectivity is treated as healthy evidence",
    "observation": "A fictional source is marked Healthy because records are arriving.",
    "impact": "Schema, field, clock, completeness, semantic, or coverage defects may remain hidden.",
    "correction": "Evaluate technical and semantic health together."
  },
  {
    "mistake": "Every available field is collected",
    "observation": "A fictional source includes broad personal or operational detail unrelated to the defender question.",
    "impact": "Privacy, access, retention, maintenance, and portfolio risk increase.",
    "correction": "Use field-purpose mapping, minimization, role-based access, retention, deletion, and review."
  },
  {
    "mistake": "Source recovery ends the issue",
    "observation": "A fictional source is marked Healthy immediately after reconnection.",
    "impact": "Backlog, replay, duplicates, schema changes, missing periods, and false sequence remain unresolved.",
    "correction": "Use Recovering until reconciliation and regression checks pass."
  },
  {
    "mistake": "Mappings have no owner",
    "observation": "A fictional canonical field is used by many detections, but no owner reviews changes.",
    "impact": "Semantic drift can affect multiple alerts silently.",
    "correction": "Assign source, field, parser, normalization, detection, privacy, and lifecycle owners."
  },
  {
    "mistake": "Real schemas or records enter the portfolio",
    "observation": "A fictional artifact includes copied real field names, layouts, timestamps, addresses, screenshots, or identifiers.",
    "impact": "Sensitive systems, people, suppliers, and architecture may be exposed.",
    "correction": "Invent every source, schema, field, record, timestamp, owner, alert, and outcome."
  }
];
const labSteps = [
  {
    "step": "1",
    "title": "Define the collection purpose",
    "action": "Write fictional defender questions for identity, endpoint, network, DNS, application, supplier, change, recovery, and source-health evidence.",
    "output": "Collection-purpose matrix.",
    "quality": "Every source and field supports a documented defensive decision."
  },
  {
    "step": "2",
    "title": "Create the source catalog",
    "action": "Document fictional source category, owner, schema, event types, fields, timing, coverage, privacy, retention, health, and lifecycle.",
    "output": "Versioned source inventory.",
    "quality": "Known gaps and out-of-scope populations remain visible."
  },
  {
    "step": "3",
    "title": "Map the pipeline",
    "action": "Trace fictional source creation, selection, collection, parsing, mapping, normalization, enrichment, storage, indexing, and analyst use.",
    "output": "Collection and normalization architecture.",
    "quality": "Every stage includes owner, timing, transformation, failure behavior, and limitation."
  },
  {
    "step": "4",
    "title": "Build the field dictionary",
    "action": "Define fictional source fields, canonical fields, types, values, transformations, provenance, requirement, privacy purpose, and limitations.",
    "output": "Source-to-canonical field dictionary.",
    "quality": "Source-specific semantics remain visible after normalization."
  },
  {
    "step": "5",
    "title": "Define timing",
    "action": "Document fictional event, collection, processing, indexing, and alert time plus clock state, delay, and windows.",
    "output": "Timing and freshness model.",
    "quality": "Collection order is never treated automatically as event order."
  },
  {
    "step": "6",
    "title": "Define source-health states",
    "action": "Create fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior for sources, fields, parsers, mappings, queues, and coverage.",
    "output": "Collection source-health model.",
    "quality": "Missing or degraded evidence cannot silently become normal confidence."
  },
  {
    "step": "7",
    "title": "Create validation cases",
    "action": "Write fictional expected, missing-field, schema-drift, duplicate, out-of-order, blind-period, and recovery-replay tests.",
    "output": "Collection and normalization test library.",
    "quality": "Expected outcomes are documented before comparison."
  },
  {
    "step": "8",
    "title": "Define quality metrics",
    "action": "Measure fictional completeness, field presence, semantic quality, freshness, delay, duplicates, parse failures, coverage, privacy, and debt.",
    "output": "Collection-quality metric dictionary.",
    "quality": "Each metric has definition, source, denominator, limitation, owner, action, and trigger."
  },
  {
    "step": "9",
    "title": "Assign corrective actions",
    "action": "Connect fictional source, parser, mapping, timing, coverage, privacy, ownership, documentation, or retirement defects to owners, tests, rollback, and completion.",
    "output": "Collection defect and action register.",
    "quality": "Corrections address root causes rather than hiding evidence problems."
  },
  {
    "step": "10",
    "title": "Prepare the portfolio package",
    "action": "Combine the fictional source catalog, pipeline, field dictionary, timing, health, tests, metrics, defects, owners, limitations, triggers, and reflection.",
    "output": "Public-safe Collection and Normalization Package.",
    "quality": "Every organization, source, schema, field, record, timestamp, owner, decision, and outcome is invented."
  }
];
const quizQuestions = [
  {
    "question": "What is the strongest reason to preserve fictional source provenance after normalization?",
    "choices": [
      "To increase the number of fields.",
      "To understand original meaning, transformation, timing, ownership, and limitations.",
      "To prove the normalized value is correct.",
      "To eliminate the need for source owners."
    ],
    "answer": 1,
    "explanation": "Provenance allows analysts and owners to trace how evidence changed and which assumptions or limitations apply."
  },
  {
    "question": "Why should event time and collection time remain separate?",
    "choices": [
      "Because every source requires two timestamps.",
      "Because records may arrive late or out of order, changing chronology and correlation.",
      "Because collection time is always more accurate.",
      "Because event time should never be used."
    ],
    "answer": 1,
    "explanation": "Separating the times prevents collection order from being mistaken for the underlying event sequence."
  },
  {
    "question": "A fictional source introduces a new undocumented result value. What is the safest handling?",
    "choices": [
      "Map it to Success automatically.",
      "Drop the record.",
      "Preserve the value as Unknown, flag the mapping issue, and request source-owner review.",
      "Treat it as harmful activity."
    ],
    "answer": 2,
    "explanation": "Unknown-value handling preserves uncertainty and prevents silent semantic corruption."
  },
  {
    "question": "What is the main risk of normalization?",
    "choices": [
      "It always creates duplicate records.",
      "It may hide meaningful differences among source fields and values.",
      "It prevents searching.",
      "It eliminates timing."
    ],
    "answer": 1,
    "explanation": "Normalization is useful, but source meaning and provenance must remain visible so shared categories do not create false equivalence."
  },
  {
    "question": "A fictional source reconnects after a blind period. Which state is strongest initially?",
    "choices": [
      "Healthy immediately.",
      "Recovering until backlog, replay, duplication, schema, and missing-period checks pass.",
      "True negative.",
      "Retired."
    ],
    "answer": 1,
    "explanation": "Connectivity restoration does not prove the pipeline is complete, unique, semantically correct, or reconciled."
  },
  {
    "question": "Which fictional collection metric is most meaningful?",
    "choices": [
      "Total records stored.",
      "Total fields available.",
      "Purpose-based completeness, semantic quality, freshness, duplicate rate, parse failures, coverage, and limitations.",
      "Number of source categories alone."
    ],
    "answer": 2,
    "explanation": "Collection quality depends on whether evidence is complete enough, meaningful, timely, unique, healthy, and fit for purpose."
  },
  {
    "question": "Which portfolio approach is safest?",
    "choices": [
      "Use real schemas with fake organization names.",
      "Use real record layouts after deleting addresses.",
      "Invent every source, schema, field, record, timestamp, owner, alert, and outcome.",
      "Use internal screenshots with blurred values."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real systems, people, suppliers, architecture, and defensive capabilities."
  }
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Module A6</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function LogCollectionAndNormalizationConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A6</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 10</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Provenance, Schemas, Timing, Quality, and Source Health</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A6.2 Log Collection and Normalization Concepts</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Learn how fictional evidence moves from source systems through selection, collection, parsing, field mapping, normalization, enrichment, storage, indexing, and analyst use—while preserving source meaning, timing, health, privacy, ownership, and limitations.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A6: SIEM and Alert Triage Concepts" lessonTitle="Log Collection and Normalization Concepts" lessonNumber={2} totalLessons={10} />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented sources, schemas, fields, records, timestamps, identities, services, owners, alerts, and outcomes.",
            "I will distinguish raw source evidence, parsed fields, normalized fields, transformed values, enrichment, derived context, and analyst interpretation.",
            "I will preserve fictional provenance, event time, collection time, processing time, source category, schema version, parser version, and transformation history.",
            "I will make missing fields, Unknown values, duplicates, delay, out-of-order arrival, blind periods, recovery, and semantic limitations visible.",
            "I will use purpose limitation, field minimization, access controls, retention, deletion, ownership, and review triggers.",
            "I will not collect, copy, sanitize, upload, inspect, query, test, replay, parse, normalize, correlate, or modify any real log, source, schema, field, account, endpoint, network, domain, service, supplier, SIEM, or organization.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Same Normalized Value Can Hide Different Source Meanings">
          <p className="leading-8">A fictional identity source reports a request as accepted, while a fictional application source reports a workflow as completed. Both values are normalized to Success. A correlation then treats them as equivalent, even though one source records request acceptance and the other records business completion. The fields look consistent, but the meaning is not.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak interpretation</p><p className="mt-2 leading-7">“Both normalized fields say Success, so the same outcome occurred.”</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong interpretation</p><p className="mt-2 leading-7">“The shared category supports comparison, but source meaning, transformation, timing, and limitations remain necessary before the values are treated as equivalent.”</p></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Normalization creates consistency. It should not erase provenance, uncertainty, or meaningful source differences.</div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
          <div className="grid gap-4 md:grid-cols-2">{objectives.map((objective, index) => <div key={objective} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p><p className="mt-3 font-semibold leading-7">{objective}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Collection and Normalization Shape Every Later SIEM Decision">
          <p className="leading-8">Fictional searches, correlations, alerts, dashboards, cases, metrics, and leadership decisions depend on the records and fields available in the SIEM. A missing population, delayed source, parser defect, stale schema, incorrect mapping, duplicate path, privacy-heavy field set, or hidden transformation can affect confidence and coverage across many detections at once.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Evidence integrity", "Preserve fictional source meaning, timing, provenance, uniqueness, completeness, and transformation history."],
              ["Decision integrity", "Prevent fictional missing, delayed, duplicated, or semantically changed evidence from becoming false confidence."],
              ["Lifecycle integrity", "Maintain fictional schemas, parsers, mappings, owners, tests, metrics, privacy, retention, review triggers, and retirement."],
            ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"><h3 className="font-black text-purple-100">{title}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>)}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The P-I-P-E-L-I-N-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["P — Purpose-limit collection", "Select fictional sources and fields because they support documented defender questions, privacy needs, access roles, retention, and lifecycle."],
              ["I — Identify provenance", "Preserve fictional source category, record identity, schema, parser, event time, collection path, owner, and local meaning."],
              ["P — Parse with version control", "Interpret fictional records using documented schemas, parser versions, Unknown handling, failure behavior, and tests."],
              ["E — Establish field mappings", "Connect fictional source fields to shared fields while retaining source values, transformations, assumptions, and limitations."],
              ["L — Label normalization layers", "Distinguish fictional raw evidence, parsed fields, normalized fields, enrichment, derived context, and analyst interpretation."],
              ["I — Inspect timing and uniqueness", "Review fictional event, collection, processing, indexing, and alert times plus retries, replays, duplicates, and order."],
              ["N — Note source health", "Use fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states."],
              ["E — Evaluate quality and coverage", "Measure fictional completeness, semantic quality, freshness, failures, duplicates, privacy, coverage, debt, and residual risk."],
            ].map(([title, detail]) => <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p></article>)}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">Decision-ready pipeline statement</p><p className="mt-2 leading-7">This fictional collection and normalization design preserves source purpose, provenance, schema, parser, source field, normalized field, transformation, timing, source health, uniqueness, coverage, privacy, ownership, quality, limitations, review triggers, and lifecycle.</p></div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Collection and Normalization">
          <div className="grid gap-4 md:grid-cols-2">{vocabulary.map(([term, definition]) => <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-200">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></div>)}</div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Instructional Section 1</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Trace Ten Collection and Normalization Stages</h2>
          <div className="mt-6 grid gap-5">{pipelineStages.map((item) => <article key={item.stage} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-cyan-100">{item.stage}</h3><p className="mt-3 leading-7 text-slate-300">{item.purpose}</p><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p><p className="mt-2 text-sm leading-6">{item.evidence}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Risk</p><p className="mt-2 text-sm leading-6">{item.risk}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional control</p><p className="mt-2 text-sm leading-6">{item.control}</p></div></div></article>)}</div>
        </section>

        <SectionCard eyebrow="Instructional Section 2" title="Normalize Eight Fictional Source Categories">
          <div className="grid gap-5">{sourceCategories.map((item) => <article key={item.source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-purple-100">{item.source}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Fictional records",item.records],["Normalization needs",item.needs],["Semantic risk",item.risk],["Privacy boundary",item.privacy]].map(([label,detail]) => <div key={`${item.source}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 3" title="Build a Fictional Field Dictionary">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr>{["Normalized field","Source examples","Meaning","Transformation","Limitation"].map((heading) => <th key={heading} className="px-4 py-3 font-black">{heading}</th>)}</tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{fieldDictionary.map((row) => <tr key={row.field}><td className="px-4 py-4 align-top font-mono font-bold text-white">{row.field}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.examples}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.meaning}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.transform}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.limit}</td></tr>)}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 4" title="Use Six Timing Models">
          <div className="grid gap-5 md:grid-cols-2">{timingModels.map((item) => <article key={item.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.name}</h3><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Use</p><p className="mt-2 text-sm leading-6">{item.use}</p></div><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Defender question</p><p className="mt-2 text-sm leading-6">{item.question}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Risk</p><p className="mt-2 text-sm leading-6">{item.risk}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 5" title="Use Six Source-Health States">
          <div className="grid gap-5">{sourceHealthStates.map((item) => <article key={item.state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-emerald-100">{item.state}</h3><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Condition</p><p className="mt-2 text-sm leading-6">{item.condition}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Pipeline behavior</p><p className="mt-2 text-sm leading-6">{item.behavior}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Analyst meaning</p><p className="mt-2 text-sm leading-6">{item.meaning}</p></div></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 6" title="Validate Eight Collection Cases">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr>{["Fictional case","Input","Expected result","Failure may indicate"].map((heading) => <th key={heading} className="px-4 py-3 font-black">{heading}</th>)}</tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{validationCases.map((row) => <tr key={row.case}><td className="px-4 py-4 align-top font-bold text-white">{row.case}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.input}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.expected}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{row.failure}</td></tr>)}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 7" title="Measure Eight Collection Quality Dimensions">
          <div className="grid gap-5 md:grid-cols-2">{qualityMetrics.map((item) => <article key={item.metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.metric}</h3><div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p><p className="mt-2 text-sm leading-6">{item.question}</p></div><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p><p className="mt-2 text-sm leading-6">{item.evidence}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{item.limit}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Fictional Collection Architecture" title="Northbridge Source-to-SIEM Pipeline">
          <p className="leading-8">This conceptual architecture is completely invented and intentionally non-operational. It teaches collection and normalization without real products, source names, schemas, fields, credentials, addresses, queries, records, systems, suppliers, or internal architecture.</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">{[["Identity","Roles, approvals, groups, sessions, revocation"],["Device","Class, ownership, onboarding, replacement, support"],["Network and DNS","Relationships, direction, policy, naming, timing"],["Application and supplier","Actions, results, purpose, assignment, closure"]].map(([title,detail]) => <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"><p className="font-black text-purple-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Fictional Processing Pipeline</p><div className="mt-4 grid gap-3 md:grid-cols-2">{[["Select","Purpose, scope, privacy, fields, owners"],["Collect","Delivery, queues, retries, coverage, health"],["Parse","Schemas, fields, errors, versions, Unknowns"],["Map","Source fields, canonical fields, assumptions"],["Normalize","Shared categories with preserved provenance"],["Enrich","Identity, service, owner, change, mission context"],["Store","Indexing, access, retention, deletion, availability"],["Validate","Tests, metrics, defects, review, retirement"]].map(([title,detail]) => <div key={title} className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"><p className="font-black text-cyan-100">{title}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></div>
            <div className="grid gap-3">{[["Search-ready evidence","Fields, provenance, timing, health, limits"],["Correlation-ready evidence","Keys, relationships, sequence, windows"],["Analyst-ready evidence","Observation, context, confidence, questions"],["Portfolio boundary","Fully fictional, privacy-safe, non-operational"]].map(([title,detail]) => <div key={title} className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"><p className="font-black text-blue-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
          </div>
        </SectionCard>

        <FakeDashboardCard title="Fake Northbridge Collection Quality Dashboard" subtitle="Fictional completeness, semantic quality, delay, duplication, parser status, coverage, privacy, and normalization debt for training only." metrics={[{label:"Source categories meeting collection gates",value:"6 / 8",note:"Supplier assignment and recovery identity coverage remain incomplete."},{label:"Canonical fields with validated semantic mappings",value:"19 / 24",note:"Five mappings require source-owner review after schema or workflow changes."},{label:"Open fictional pipeline defects",value:"9",note:"Delay, duplicates, Unknown values, stale enrichment, missing fields, privacy excess, indexing, recovery, and ownership remain open."}]} />

        <FakeAlertCard title="Normalized Evidence Quality Is Conditional" severity="High" time="3:08 PM" source="Fake Northbridge Collection Quality Console" details="The fictional pipeline is receiving records, but one new result value maps to Unknown, two source meanings share the same normalized category, supplier assignment coverage is incomplete, recovery replay duplicates remain elevated, and unnecessary endpoint profile fields are still collected." recommendation="Keep the fictional collection design Conditional. Resolve schema meaning, mapping semantics, source coverage, replay uniqueness, privacy minimization, owner assignment, validation tests, and review triggers before approval." />

        <FakeLogPanel title="Fake Collection and Normalization Timeline" logs={["09:02 SOURCE identity-event='created'","09:10 COLLECT identity-event='received'","09:11 PARSER version='identity-v3'","09:12 FIELD result-code='new-value'","09:12 PARSE result='unknown'","09:13 NORMALIZE actor-category='recovery'","09:13 NORMALIZE result-category='unknown'","09:14 ENRICH owner-group='identity-operations'","09:15 INDEX status='available'","09:16 HEALTH identity='degraded'","09:17 SOURCE supplier-assignment='coverage-gap'","09:18 SOURCE application='healthy'","09:19 DUPLICATE replay-rate='elevated'","09:20 PRIVACY endpoint-fields='excess'","09:21 MAPPING semantic-review='required'","09:22 TEST schema-drift='failed'","09:23 TEST recovery-replay='conditional'","09:24 DEBT normalization='9-open'","09:25 READINESS pipeline='conditional'","15:08 ALERT issue='normalized-evidence-quality'"]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fictional Evidence Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Collection Evidence Supports—and What It Does Not Prove</h2>
          <div className="mt-6 grid gap-5">{evidenceMatrix.map((item) => <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><h3 className="font-black text-white">{item.source}</h3></div><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Observation",item.observation],["Supports",item.supports],["Does not prove",item.limits],["Pipeline use",item.use]].map(([label,detail]) => <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Collection Readiness Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional Northbridge collection and normalization review?"
          evidence={["Six of eight source categories meet current collection gates.","Supplier assignment and one recovery identity population remain outside reliable coverage.","One new result value is preserved as Unknown.","Two source meanings share one normalized Success category.","Recovery replay duplicates remain elevated.","Unnecessary endpoint profile fields are still collected.","Five canonical mappings require source-owner review.","Nine fictional pipeline defects remain open."]}
          options={["Keep the fictional pipeline Conditional, preserve the working mappings, and resolve coverage, schema meaning, semantic equivalence, replay uniqueness, privacy, ownership, testing, and review triggers before approval.","Approve the pipeline because most sources are connected.","Force every Unknown value into the nearest familiar category.","Delete all repeated records and claim the duplicate issue is solved."]}
          bestAnswer={0}
          explanation="The first option recognizes working collection while preserving the exact quality, coverage, privacy, semantic, and lifecycle gaps that affect later SIEM decisions."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Collection and Normalization Errors">
          <div className="grid gap-5 md:grid-cols-2">{commonMistakes.map((item) => <article key={item.mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-red-100">{item.mistake}</h3><div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p><p className="mt-2 text-sm leading-6">{item.observation}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Decision impact</p><p className="mt-2 text-sm leading-6">{item.impact}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p><p className="mt-2 text-sm leading-6">{item.correction}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Practice Lab" title="Build the Northbridge Collection and Normalization Package">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Use only the supplied fictional information on this page. Do not collect, copy, sanitize, upload, inspect, query, test, replay, parse, normalize, correlate, search, or modify any real log, source, schema, field, account, endpoint, network, domain, service, supplier, SIEM, platform, or organization.</div>
          <div className="mt-6 grid gap-5">{labSteps.map((item) => <article key={item.step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</span><div><h3 className="text-lg font-black text-cyan-100">{item.title}</h3><p className="mt-2 leading-7 text-slate-300">{item.action}</p></div></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p><p className="mt-2 text-sm leading-6">{item.output}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality check</p><p className="mt-2 text-sm leading-6">{item.quality}</p></div></div></article>)}</div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A New Source Value Does Not Match the Existing Schema"
          scenario="A fictional application source begins sending accepted_pending in a field that previously contained only completed, denied, and failed. The current parser maps any unrecognized value to Success."
          choices={[
            {label:"Choice A",response:"Preserve the fictional value as Unknown, flag schema drift, notify source and normalization owners, identify affected fields and detections, update tests, document meaning, and revalidate before changing the mapping.",outcome:"Best defensive choice. It prevents silent semantic corruption and preserves uncertainty.",tone:"best"},
            {label:"Choice B",response:"Keep mapping it to Success because that category is closest.",outcome:"Weak. Accepted or pending may not mean completed.",tone:"risk"},
            {label:"Choice C",response:"Drop every record containing the new value.",outcome:"Weak. Dropping evidence creates an invisible coverage gap.",tone:"risk"},
          ]}
        />

        <ScenarioDecisionLab
          title="A Source Reconnects after a Blind Period"
          scenario="A fictional source begins sending records again after a two-hour blind period. A backlog is replaying, duplicate delivery is elevated, one schema field changed, and a fifteen-minute period remains missing."
          choices={[
            {label:"Choice A",response:"Keep the fictional source in Recovering state, reconcile backlog and replay, validate uniqueness and schema mappings, identify the missing period, reassess affected alerts, rerun regression tests, and document residual uncertainty.",outcome:"Best choice. Reconnection is not the same as complete evidence recovery.",tone:"best"},
            {label:"Choice B",response:"Mark the source Healthy immediately because records are arriving.",outcome:"Weak. Backlog, duplicates, schema drift, and the missing period remain unresolved.",tone:"risk"},
            {label:"Choice C",response:"Delete the replayed records so no duplicate alerts occur.",outcome:"Weak. Deleting replay evidence can hide important blind-period activity.",tone:"risk"},
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Normalization Design before a Review Board">
          <p className="leading-8">Fictional Northbridge wants one shared schema for identity, endpoint, network, DNS, application, cloud administration, suppliers, changes, and recovery. The current proposal has broad canonical fields but weak source provenance, unclear timing, unowned mappings, no Unknown-value policy, incomplete privacy review, no recovery tests, and no normalization-debt register.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{[
            ["Defend source selection","Explain which fictional defender questions justify each source, record type, field, access role, retention period, and privacy purpose."],
            ["Defend field meaning","Explain fictional source fields, canonical fields, transformations, semantic differences, Unknown values, and limitations."],
            ["Defend timing","Explain fictional event, collection, processing, indexing, and alert times plus delays, clocks, windows, and order."],
            ["Defend source health","Explain fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior."],
            ["Defend quality","Explain fictional completeness, semantic quality, duplicate rate, parse failures, coverage, privacy, and debt metrics."],
            ["Defend lifecycle","Explain fictional owners, tests, changes, review triggers, rollback, residual risk, mapping retirement, and source retirement."],
          ].map(([title,detail]) => <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"><p className="font-black text-purple-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">Challenge output</p><p className="mt-2 leading-7">Produce a fictional source catalog, source-to-canonical matrix, field dictionary, transformation register, timing model, source-health model, test library, quality dashboard, privacy review, ownership matrix, normalization-debt register, residual-risk statement, leadership summary, and public portfolio boundary.</p></div>
        </SectionCard>

        <DefenderChecklist title="Log Collection and Normalization Checklist" items={[
          "I can trace a fictional record from source creation through selection, collection, parsing, mapping, normalization, enrichment, storage, indexing, correlation readiness, and analyst use.",
          "I can distinguish fictional raw evidence, parsed fields, normalized fields, transformed values, enrichment, derived context, and analyst interpretation.",
          "I can preserve source category, source field, source value, schema version, parser version, event time, collection time, processing time, and transformation history.",
          "I can explain why normalized fields from different sources may not have identical meanings.",
          "I can handle fictional Unknown values, missing required fields, missing optional fields, schema drift, duplicates, out-of-order records, blind periods, and recovery replay safely.",
          "I can use Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering pipeline states.",
          "I can define fictional source, parser, field, mapping, enrichment, storage, privacy, detection, quality, and lifecycle ownership.",
          "I can measure fictional completeness, field presence, semantic quality, freshness, delay, duplicates, parse failures, coverage, privacy, and normalization debt.",
          "I can create purpose-limited fictional collection plans with field minimization, access, retention, deletion, and review triggers.",
          "I can design validation cases for expected records, missing fields, schema drift, duplicates, timing, blind periods, and recovery.",
          "I can explain what fictional normalized evidence supports and what it does not prove.",
          "I can create a completely fictional pipeline artifact without exposing real sources, schemas, fields, records, identities, systems, suppliers, or internal architecture.",
        ]} />

        <MiniQuiz title="A6.2 Mini Quiz: Log Collection and Normalization Concepts" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Collection and Normalization Package for the Northbridge Student-Support Cooperative. Include mission, defender questions, source categories, source owners, source purpose, source scope, exclusions, source events, source schemas, schema versions, parser versions, source fields, field types, allowed values, local meanings, required fields, optional fields, collection paths, collector identifiers, event time, collection time, processing time, indexing time, alert time, clock state, ingestion delay, queue age, retries, replay, duplicate states, out-of-order states, blind periods, recovery states, parsing, parse failures, Unknown values, field mappings, canonical fields, normalized values, transformations, enrichment sources, derived fields, identity context, device context, service context, destination context, authorization context, ownership context, change context, mission context, storage, indexing, searchable fields, access roles, retention, deletion, privacy purpose, coverage, source-health states, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, expected-record tests, missing-required-field tests, missing-optional-field tests, schema-drift tests, duplicate tests, out-of-order tests, blind-period tests, recovery-replay tests, expected outcomes, observed outcomes, defects, corrective actions, validation gates, collection-completeness metrics, field-completeness metrics, semantic-quality metrics, freshness metrics, delay metrics, duplicate metrics, parse-failure metrics, coverage metrics, privacy metrics, normalization debt, owner matrix, change history, review triggers, rollback, residual risks, mapping retirement, source retirement, architecture diagram, leadership summary, reflection, and a statement that every organization, source, schema, field, record, timestamp, owner, decision, and outcome is invented."
          tips={["Show the fictional source value and normalized value together when semantic differences matter.","Keep event time, collection time, processing time, indexing time, and alert time separate.","Preserve Unknown and missing-data states rather than forcing familiar categories.","Use source health, privacy, ownership, testing, metrics, review triggers, rollback, and retirement as part of the pipeline design.","Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio."]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for Correlation and Alert Rules?">
          <p className="leading-8">Before moving to A6.3, rate your readiness from 1 to 5 for source purpose, schemas, parsing, field mapping, normalization, enrichment, provenance, timing, source health, duplicates, recovery, privacy, coverage, quality, ownership, and complete fictionalization.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[
            "I can explain how fictional evidence changes from source record to normalized SIEM record.",
            "I can preserve source-specific meaning after mapping to shared fields.",
            "I can separate event, collection, processing, indexing, and alert time.",
            "I can handle Unknown values, missing fields, duplicates, out-of-order records, blind periods, and recovery replay.",
            "I can make source health and coverage visible in normalized evidence.",
            "I can use privacy, access, retention, deletion, ownership, and review triggers.",
            "I can evaluate collection quality using completeness, semantic quality, freshness, duplicates, failures, coverage, and debt.",
            "I can produce a safe fictional pipeline without copying real schemas, fields, records, or systems.",
          ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>)}</div>
          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">Record one fictional source, one source field, one normalized field, one semantic limitation, one timing risk, one source-health state, and one question you will carry into A6.3.</div>
        </SectionCard>

        <KeyTakeaways takeaways={[
          "Collection and normalization shape every later fictional SIEM search, correlation, alert, dashboard, case, metric, and leadership decision.",
          "Raw evidence, parsed fields, normalized fields, transformed values, enrichment, derived context, and analyst interpretation are different layers.",
          "Provenance should preserve fictional source category, schema, parser, source field, source value, transformation, timing, owner, and limitation.",
          "Event time, collection time, processing time, indexing time, and alert time should remain separate.",
          "Normalization supports consistency but can hide semantic differences when source values are treated as identical.",
          "Unknown values, missing fields, duplicates, out-of-order records, blind periods, and recovery replay require explicit behavior.",
          "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states should affect pipeline and analyst confidence.",
          "Collection quality includes completeness, semantic quality, freshness, delay, duplicates, parse failures, coverage, privacy, and debt.",
          "Purpose limitation, field minimization, access, retention, deletion, ownership, testing, review triggers, rollback, and retirement belong in the design.",
          "Every CyberShield collection artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module A6</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">Next, learn how fictional SIEM correlation and alert rules connect normalized records through identity, device, service, destination, session, request, change, timing, counts, sequences, states, source health, alternatives, and missing-data behavior.</p>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}