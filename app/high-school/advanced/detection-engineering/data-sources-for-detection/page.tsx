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
const modulePath = `${trackPath}/detection-engineering`;
const previousLesson = `${modulePath}/what-detection-engineering-means`;
const nextLesson = `${modulePath}/detection-logic-concepts`;

const objectives = [
  "Classify fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health data according to the defender questions they can support.",
  "Evaluate fictional data sources using provenance, field meaning, freshness, completeness, timing, schema, transformation, duplication, coverage, privacy, ownership, retention, and failure behavior.",
  "Distinguish source availability from source quality and explain how delayed, missing, transformed, duplicated, or inconsistent evidence changes detection confidence.",
  "Design a fictional detection data-source catalog, source-health model, evidence-provenance map, privacy plan, field dictionary, and coverage-gap register.",
  "Create a portfolio-ready fictional source-governance package that connects mission risks, defender questions, evidence sources, health requirements, limitations, owners, and review triggers.",
];

const vocabulary = [
  [
    "Detection data source",
    "A fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, or health record used to answer a defender question.",
  ],
  [
    "Provenance",
    "Fictional information describing where evidence originated, which system or role produced it, how it moved, and which transformations occurred.",
  ],
  [
    "Field dictionary",
    "A fictional record explaining field names, meanings, allowed values, timing, ownership, privacy, dependencies, and known limitations.",
  ],
  [
    "Freshness",
    "The fictional amount of time between an event or state change and when the evidence becomes available for detection or review.",
  ],
  [
    "Completeness",
    "The fictional degree to which expected records and required fields are present for the relevant scope and period.",
  ],
  [
    "Event time",
    "The fictional time associated with when an activity or state change occurred.",
  ],
  [
    "Collection time",
    "The fictional time associated with when a source or collector received the evidence.",
  ],
  [
    "Processing time",
    "The fictional time associated with when evidence was normalized, enriched, transformed, stored, or made available.",
  ],
  [
    "Clock alignment",
    "The fictional degree to which evidence sources use sufficiently consistent time references for reliable sequencing and correlation.",
  ],
  [
    "Schema",
    "A fictional structure describing which fields, types, values, relationships, and constraints a source provides.",
  ],
  [
    "Normalization",
    "A fictional transformation that maps differently structured records into a common model for comparison and correlation.",
  ],
  [
    "Enrichment source",
    "A fictional source that adds context such as asset value, identity role, service owner, device class, location concept, change state, or source health.",
  ],
  [
    "Transformation",
    "A fictional operation that parses, maps, aggregates, filters, masks, groups, or derives fields from original evidence.",
  ],
  [
    "Duplication",
    "A fictional condition in which the same underlying activity appears in more than one record, source, collector, or transformed dataset.",
  ],
  [
    "Coverage",
    "The fictional extent to which evidence represents the relevant identities, devices, services, environments, zones, time periods, states, and workflows.",
  ],
  [
    "Blind spot",
    "A fictional area where relevant evidence is unavailable, unreliable, delayed, inaccessible, or outside the designed scope.",
  ],
  [
    "Blind period",
    "A fictional time window during which a source was missing, delayed, unhealthy, or unable to support normal confidence.",
  ],
  [
    "Source health",
    "Fictional evidence about connectivity, event freshness, completeness, volume, queue age, clock, schema, transformation, duplication, storage, access, and blind periods.",
  ],
  [
    "Source owner",
    "The fictional role accountable for field meaning, health, change communication, access, privacy, retention, support, and lifecycle.",
  ],
  [
    "Authoritative source concept",
    "A fictional source designated as the approved record for a specific state or decision, while still requiring health and scope validation.",
  ],
  [
    "Corroborating source",
    "A fictional source that supports, challenges, or adds context to an observation from another source.",
  ],
  [
    "Derived field",
    "A fictional value calculated from one or more original fields rather than recorded directly by the producing system.",
  ],
  [
    "Retention",
    "The fictional period for which evidence is stored according to purpose, privacy, access, operational, legal, and deletion requirements.",
  ],
  [
    "Source review trigger",
    "A fictional event requiring revalidation, such as schema, platform, application, identity, network, supplier, privacy, retention, ownership, or mission change.",
  ],
];

const sourceCategories = [
  {
    category: "Identity evidence",
    defenderQuestions:
      "Which fictional user, service, supplier, privileged, emergency, or recovery identity authenticated, received authority, changed roles, or lost access?",
    strongFields:
      "Identity category, role, group, approval, authentication result, authorization result, session, expiration, revocation, owner, and source health.",
    strengths:
      "Supports identity lifecycle, privilege, assignment, session, revocation, and policy-related questions.",
    limitations:
      "Successful authentication does not prove the action, destination, object, purpose, or outcome was authorized.",
    privacy:
      "Prefer role, identity category, owner group, and decision context over unrelated personal profile details.",
    health:
      "Track assignment freshness, group synchronization, revocation delay, clock, missing records, and source changes.",
  },
  {
    category: "Endpoint evidence",
    defenderQuestions:
      "Which fictional managed device, service device, administrative device, or application process produced a local state or behavior?",
    strongFields:
      "Device identity, owner, class, health, process category, application, policy state, event category, result, time, and source health.",
    strengths:
      "Can add local device, process, configuration, and application context unavailable from network evidence alone.",
    limitations:
      "A local event does not automatically prove network reachability, user intent, service authorization, or wider impact.",
    privacy:
      "Collect only fields necessary for the approved defender question and avoid unrelated user activity detail.",
    health:
      "Track agent availability conceptually, last event, version, queue, clock, schema, duplicate reporting, and blind periods.",
  },
  {
    category: "Network evidence",
    defenderQuestions:
      "Which fictional source, destination, direction, service category, policy result, timing, duration, or volume relationship occurred?",
    strongFields:
      "Source group, destination group, identity context, service category, direction, policy result, timing, duration, volume class, sensor, and source health.",
    strengths:
      "Supports communication-path, segmentation, firewall, remote-access, wireless, and service-relationship questions.",
    limitations:
      "Network evidence may not prove application action, object authorization, user intent, content meaning, or business outcome.",
    privacy:
      "Use grouped identities, service categories, and minimized destination context when exact detail is unnecessary.",
    health:
      "Track sensor coverage, freshness, queue age, clock, policy version, packet or event loss concept, transformation, and encrypted boundaries.",
  },
  {
    category: "DNS evidence",
    defenderQuestions:
      "Which fictional requester group asked which question category, through which resolver, and received which response category under which policy and cache state?",
    strongFields:
      "Requester group, resolver, question category, response category, cache state, policy result, timing, source health, and application correlation.",
    strengths:
      "Supports naming, service-discovery, resolver-policy, unexpected-resolution, cache, and service-dependency questions.",
    limitations:
      "Successful resolution does not prove destination authorization, service health, application safety, or user intent.",
    privacy:
      "Exact naming activity may reveal sensitive interests or internal architecture; use purpose-based minimization.",
    health:
      "Track resolver availability, event freshness, policy version, cache context, clock, queue age, authoritative relationship, and blind periods.",
  },
  {
    category: "Email and messaging evidence",
    defenderQuestions:
      "Which fictional message, sender category, recipient group, routing service, policy decision, supplier relationship, attachment category, or delivery result occurred?",
    strongFields:
      "Sender category, recipient group, service identity, route category, policy result, delivery state, attachment class, supplier, time, and source health.",
    strengths:
      "Supports delivery, policy, supplier, routing, and message-workflow questions.",
    limitations:
      "Message metadata does not automatically prove content meaning, user intent, delivery reading, or downstream action.",
    privacy:
      "Prefer categories, policy outcomes, and routing context over unnecessary message content or personal details.",
    health:
      "Track source availability, queue age, delivery delay, duplicate events, supplier status, schema, and retention.",
  },
  {
    category: "Application evidence",
    defenderQuestions:
      "Which fictional user or service performed which approved operation on which object or workflow, with which result and business state?",
    strongFields:
      "Identity, role, assignment, object category, operation, old state, new state, result, application version, change, owner, and source health.",
    strengths:
      "Often provides the strongest context for service authorization, workflow state, object scope, and business outcome.",
    limitations:
      "Application logs may omit network path, device health, source provenance, or external supplier state.",
    privacy:
      "Minimize object detail and personal content while preserving the decision-relevant operation and result.",
    health:
      "Track event freshness, required fields, transaction coverage, queue, schema, application version, clock, and blind periods.",
  },
  {
    category: "Cloud-service evidence",
    defenderQuestions:
      "Which fictional cloud identity, service, resource category, administrative action, policy decision, configuration change, or access relationship occurred?",
    strongFields:
      "Identity category, service, resource class, action category, policy result, role, change, region concept, time, source health, and owner.",
    strengths:
      "Supports service, identity, administrative, policy, configuration, and provider-context questions.",
    limitations:
      "Provider records may reflect only one layer and may not prove application purpose, user intent, or downstream impact.",
    privacy:
      "Use resource and identity categories where exact names are unnecessary.",
    health:
      "Track export or collection delay, schema changes, provider status, duplicate records, clock, scope, permissions, and retention.",
  },
  {
    category: "Supplier evidence",
    defenderQuestions:
      "Which fictional supplier identity, request, result, support action, remote session, delivery state, or contractual responsibility is relevant?",
    strongFields:
      "Supplier identity, sponsor, request category, result category, support ticket, destination, session, contract state, time, source health, and owner.",
    strengths:
      "Supports shared-responsibility, external access, request-result correlation, support, and continuity questions.",
    limitations:
      "Supplier-provided evidence may not prove internal authorization, full processing, independent operation, or user impact.",
    privacy:
      "Limit data to the approved supplier relationship, service need, owner, and defensive purpose.",
    health:
      "Track supplier availability, delay, schema, support status, correlation, coverage, contract changes, and blind periods.",
  },
  {
    category: "Administrative and change evidence",
    defenderQuestions:
      "Which fictional privileged identity approved or performed which change, on which service or control, with which validation and rollback?",
    strongFields:
      "Administrator identity, device, role, approval, change identifier, target category, old state, new state, result, rollback, time, and source health.",
    strengths:
      "Supports privileged action, change, maintenance, emergency, and recovery context.",
    limitations:
      "A change record does not prove implementation success, complete scope, or correct business outcome.",
    privacy:
      "Preserve accountability without exposing unnecessary internal configuration or personal details.",
    health:
      "Track approval freshness, role state, change-system availability, session evidence, clock, closure, and retrospective review.",
  },
  {
    category: "Support and user-confirmation evidence",
    defenderQuestions:
      "Which fictional user or owner reported impact, confirmed a change, requested support, accepted a resolution, or disputed an outcome?",
    strongFields:
      "User group, service, issue category, assignment, ticket, confirmation, impact, accessibility need, time, owner, and source health.",
    strengths:
      "Adds mission, user-impact, support, accessibility, and business-outcome context.",
    limitations:
      "A report or confirmation may be incomplete, delayed, mistaken, or limited to one user's experience.",
    privacy:
      "Use issue and impact categories instead of unnecessary personal or content detail.",
    health:
      "Track ticket freshness, duplicate reports, assignment, closure, communication delay, sampling limits, and source availability.",
  },
  {
    category: "Source-health evidence",
    defenderQuestions:
      "Can the fictional source support normal confidence for the relevant scope, fields, time, and decision?",
    strongFields:
      "Connectivity, last event, event volume, queue age, clock, schema, transformation, duplication, storage, access, blind period, and owner.",
    strengths:
      "Explains whether other evidence is timely, complete, interpretable, and available.",
    limitations:
      "Healthy source metrics do not prove the underlying behavior is safe or harmful.",
    privacy:
      "Usually requires limited operational metadata rather than personal activity detail.",
    health:
      "Source-health evidence also needs ownership, freshness, completeness, and independent validation.",
  },
];

const provenanceChain = [
  {
    stage: "1. Event or state",
    question:
      "What fictional activity, decision, request, result, configuration, identity state, or service condition occurred?",
    evidence:
      "Original producing system context and event-time concept.",
    risk:
      "The source may not record every relevant action or may represent only one layer.",
  },
  {
    stage: "2. Source generation",
    question:
      "Which fictional system or role created the evidence and according to which schema and version?",
    evidence:
      "Source identifier, owner, schema, version, event category, required fields, and generation conditions.",
    risk:
      "Different versions may use different fields or meanings.",
  },
  {
    stage: "3. Collection",
    question:
      "When and how was the fictional evidence received by a collector or export process?",
    evidence:
      "Collection time, collector identity, channel concept, queue, connectivity, and missing-period record.",
    risk:
      "Collection may be delayed, partial, duplicated, or interrupted.",
  },
  {
    stage: "4. Parsing and normalization",
    question:
      "How was the fictional record interpreted and mapped into common fields?",
    evidence:
      "Parser version, field mapping, schema result, parse status, dropped fields, and transformation notes.",
    risk:
      "Field meaning may change or data may be incorrectly mapped.",
  },
  {
    stage: "5. Enrichment",
    question:
      "Which fictional identity, asset, service, owner, change, peer, or risk context was added?",
    evidence:
      "Enrichment source, version, join key concept, freshness, confidence, and owner.",
    risk:
      "Stale or incorrect enrichment can create misleading context.",
  },
  {
    stage: "6. Storage",
    question:
      "Where and for how long is fictional evidence retained, and who may access it?",
    evidence:
      "Storage category, retention, access roles, integrity checks, privacy, and deletion.",
    risk:
      "Retention or access may exceed purpose, while unavailable storage creates blind periods.",
  },
  {
    stage: "7. Detection evaluation",
    question:
      "Which fictional logic version evaluated which fields and source-health state?",
    evidence:
      "Detection version, required fields, evaluation time, source state, result, and confidence.",
    risk:
      "The logic may run with missing or degraded context without clearly indicating the limitation.",
  },
  {
    stage: "8. Alert presentation",
    question:
      "Which fictional evidence, enrichment, severity, confidence, limits, and next questions reached the analyst?",
    evidence:
      "Alert version, displayed fields, source health, explanation, owner, and triage guidance.",
    risk:
      "Important limitations may be hidden while irrelevant detail overwhelms the analyst.",
  },
  {
    stage: "9. Analyst decision",
    question:
      "Which fictional evidence was reviewed and which conclusion or action was recorded?",
    evidence:
      "Evidence request, alternatives, confidence, scope, impact, decision, escalation, and closure.",
    risk:
      "The analyst may treat alert text as fact or miss source-health limitations.",
  },
  {
    stage: "10. Feedback and lifecycle",
    question:
      "How did the fictional result improve source, logic, testing, tuning, documentation, ownership, or retirement?",
    evidence:
      "Outcome label, defect, change, test, metric, owner, due date, validation, and review trigger.",
    risk:
      "Without feedback, repeated false positives, false negatives, and source gaps remain unresolved.",
  },
];

const sourceHealthDimensions = [
  {
    dimension: "Connectivity",
    question:
      "Can the fictional collector, export, API, agent, or pipeline currently communicate?",
    goodEvidence:
      "Connection state, last successful exchange, failure reason, owner, and independent confirmation.",
    limitation:
      "Connectivity does not prove current events or complete fields.",
  },
  {
    dimension: "Freshness",
    question:
      "How old is the newest fictional event or state relevant to the defender question?",
    goodEvidence:
      "Last-event time, expected delay, actual delay, queue age, source type, and state.",
    limitation:
      "A fresh event does not prove complete coverage.",
  },
  {
    dimension: "Completeness",
    question:
      "Are expected fictional records and required fields present for the relevant scope and period?",
    goodEvidence:
      "Expected volume range, field presence, missing categories, comparison sources, and blind-period record.",
    limitation:
      "Normal volume does not prove every critical event is present.",
  },
  {
    dimension: "Clock alignment",
    question:
      "Can fictional events from different sources be sequenced with sufficient confidence?",
    goodEvidence:
      "Clock status, known offset, event time, collection time, processing time, and uncertainty.",
    limitation:
      "Aligned clocks do not prove semantic correlation.",
  },
  {
    dimension: "Schema stability",
    question:
      "Did fictional field names, types, values, relationships, or required fields change?",
    goodEvidence:
      "Schema version, change notice, parser status, field dictionary, test results, and owner review.",
    limitation:
      "A valid schema does not prove correct field meaning.",
  },
  {
    dimension: "Transformation quality",
    question:
      "Were fictional parsing, normalization, masking, aggregation, or enrichment steps successful and current?",
    goodEvidence:
      "Parser version, transformation status, dropped fields, mapping tests, enrichment freshness, and defects.",
    limitation:
      "Successful processing does not prove the original source was complete.",
  },
  {
    dimension: "Duplication and uniqueness",
    question:
      "Could fictional records represent the same underlying activity more than once or collapse multiple activities into one?",
    goodEvidence:
      "Source identifiers, event identifiers, correlation keys, duplicate rate, transformation, and sampling.",
    limitation:
      "Removing duplicates incorrectly may hide meaningful repeated behavior.",
  },
  {
    dimension: "Coverage",
    question:
      "Which fictional identities, devices, services, environments, zones, states, and time periods are represented?",
    goodEvidence:
      "Coverage map, inventory comparison, expected sources, sampling, exclusions, and blind spots.",
    limitation:
      "High overall coverage may still omit one critical service or identity class.",
  },
  {
    dimension: "Access and availability",
    question:
      "Can authorized fictional analysts and detections retrieve the needed fields within the required time?",
    goodEvidence:
      "Access role, query or retrieval health concept, storage status, latency, permissions, and owner.",
    limitation:
      "Available evidence may still be too sensitive or unnecessary for the purpose.",
  },
  {
    dimension: "Retention and deletion",
    question:
      "Is fictional evidence available for the required detection and review period without exceeding approved privacy needs?",
    goodEvidence:
      "Purpose, retention period, archive state, deletion, access, legal or policy basis concept, and owner review.",
    limitation:
      "Longer retention does not automatically improve detection quality.",
  },
];

const fieldReview = [
  {
    fieldType: "Directly recorded field",
    example:
      "Fictional application operation result or identity role assignment.",
    value:
      "May provide strong source-specific evidence when the schema and source are healthy.",
    caution:
      "The source may still record only one layer and may omit purpose or downstream impact.",
  },
  {
    fieldType: "Derived field",
    example:
      "Fictional risk level calculated from identity role, asset value, and destination category.",
    value:
      "Can simplify analyst understanding and detection logic.",
    caution:
      "The calculation, source versions, assumptions, and missing-data behavior must be documented.",
  },
  {
    fieldType: "Normalized field",
    example:
      "Fictional common identity or action category mapped from different source schemas.",
    value:
      "Supports comparison and reuse across source types.",
    caution:
      "Normalization may hide source-specific meaning or incorrectly merge distinct values.",
  },
  {
    fieldType: "Enriched field",
    example:
      "Fictional service owner, device class, change state, or maintenance window.",
    value:
      "Adds mission and authorization context.",
    caution:
      "Stale enrichment can create false confidence or wrong exclusions.",
  },
  {
    fieldType: "Aggregated field",
    example:
      "Fictional count of approved requests in a defined time window.",
    value:
      "Supports threshold and trend concepts without exposing every raw event.",
    caution:
      "Aggregation may hide sequence, uniqueness, or rare high-impact details.",
  },
  {
    fieldType: "Masked or grouped field",
    example:
      "Fictional requester group rather than exact personal identity.",
    value:
      "Reduces privacy exposure while preserving some defender questions.",
    caution:
      "Grouping may be too broad for privileged, supplier, or accountability decisions.",
  },
  {
    fieldType: "Missing field",
    example:
      "Fictional destination-owner or approval-expiration value is absent.",
    value:
      "The absence itself may identify a source, schema, lifecycle, or coverage problem.",
    caution:
      "Missing does not always mean false, unauthorized, or harmful.",
  },
  {
    fieldType: "Conflicting field",
    example:
      "Fictional identity source shows role removed while group source still shows membership.",
    value:
      "Supports reconciliation and source-health review.",
    caution:
      "The conflict may result from delay, scope, different authority, or mapping error.",
  },
];

const evidenceMatrix = [
  {
    id: "SRC-01",
    source: "Fictional identity-event stream",
    observation:
      "Role-assignment events are current, but group-membership updates arrive eight minutes later on average.",
    supports:
      "Role and effective-group state have different freshness characteristics.",
    limits:
      "The delay does not prove access remained active or that events were lost.",
    use:
      "Define separate confidence and delayed-group behavior for identity detections.",
  },
  {
    id: "SRC-02",
    source: "Fictional network sensor",
    observation:
      "The sensor reports Green connectivity and current heartbeat, but event volume falls below the expected range after a parser update.",
    supports:
      "Source availability and evidence completeness may differ.",
    limits:
      "Lower volume does not prove missing events, attack activity, or normal quiet behavior.",
    use:
      "Review schema, parser, field mapping, expected volume, and alternate sources.",
  },
  {
    id: "SRC-03",
    source: "Fictional DNS evidence",
    observation:
      "Resolver events are current, while application correlation for one migrated service is delayed.",
    supports:
      "Naming observations may be timely while service-outcome context remains incomplete.",
    limits:
      "Current DNS evidence does not prove the destination or application is correct or healthy.",
    use:
      "Lower conclusion confidence until application evidence catches up.",
  },
  {
    id: "SRC-04",
    source: "Fictional application audit stream",
    observation:
      "Required operation and result fields are present, but object-owner enrichment is two days old.",
    supports:
      "Core application evidence is current while contextual ownership may be stale.",
    limits:
      "Stale enrichment does not prove the operation was unauthorized.",
    use:
      "Avoid owner-based suppression or escalation until enrichment is refreshed.",
  },
  {
    id: "SRC-05",
    source: "Fictional supplier result feed",
    observation:
      "Requests and results are available, but duplicate result records appear after a delivery retry.",
    supports:
      "Counting logic may overstate supplier activity unless duplication is understood.",
    limits:
      "Duplicate records do not prove duplicate business processing.",
    use:
      "Document event identifiers, retry behavior, correlation, and safe deduplication tests.",
  },
  {
    id: "SRC-06",
    source: "Fictional support-ticket source",
    observation:
      "User-impact categories are available, but exact confirmation time is missing from older records.",
    supports:
      "The source can help with impact but may not support precise sequencing for the full retention period.",
    limits:
      "Missing timing does not prove the support record is invalid.",
    use:
      "Limit historical time-sequence claims and record the coverage boundary.",
  },
  {
    id: "SRC-07",
    source: "Fictional cloud administrative stream",
    observation:
      "The provider changed one action field from a detailed value to a broader category.",
    supports:
      "Existing logic and documentation may no longer represent the same behavior.",
    limits:
      "The schema change does not prove detection failure until tests are performed.",
    use:
      "Trigger field-dictionary review, regression testing, version update, and owner approval.",
  },
  {
    id: "SRC-08",
    source: "Fictional source-health service",
    observation:
      "The source-health dashboard is current, but its own storage status has not been independently validated.",
    supports:
      "Health evidence also requires provenance and dependency review.",
    limits:
      "The missing validation does not prove the health dashboard is wrong.",
    use:
      "Add independent confirmation and disclose residual confidence limits.",
  },
];

const commonMistakes = [
  {
    mistake: "Source exists, so coverage is complete",
    observation:
      "A fictional identity feed is listed in the catalog and treated as complete for every user and service.",
    impact:
      "Excluded environments, service identities, delayed groups, or recovery roles may be missed.",
    correction:
      "Document scope, expected populations, exclusions, freshness, fields, and blind periods.",
  },
  {
    mistake: "Connected means healthy",
    observation:
      "A fictional network collector is Green while event freshness and volume are degraded.",
    impact:
      "Detections may run with stale or incomplete evidence.",
    correction:
      "Measure connectivity, freshness, completeness, queue, clock, schema, transformation, and coverage separately.",
  },
  {
    mistake: "Field name equals field meaning",
    observation:
      "A fictional field called result is assumed to represent business success across every source.",
    impact:
      "Logic may compare values that have different meanings.",
    correction:
      "Use a field dictionary with source, version, type, meaning, values, owner, and limitations.",
  },
  {
    mistake: "Normalization removes differences safely",
    observation:
      "Fictional identity and action values from several sources are merged into broad categories.",
    impact:
      "Source-specific distinctions may disappear or be mapped incorrectly.",
    correction:
      "Preserve original source context and test normalized mappings.",
  },
  {
    mistake: "More data is always better",
    observation:
      "A fictional detection collects detailed personal, message, or object data unrelated to the defender question.",
    impact:
      "Privacy, access, retention, and analyst-overload risk increases.",
    correction:
      "Use purpose-based field minimization and role-limited access.",
  },
  {
    mistake: "One source proves the full outcome",
    observation:
      "A fictional network event is treated as proof that an application operation succeeded.",
    impact:
      "Transport, application authorization, object state, and user outcome may be confused.",
    correction:
      "Correlate network, identity, application, support, and source-health evidence.",
  },
  {
    mistake: "Duplicates are simply deleted",
    observation:
      "A fictional supplier feed contains repeated events and all repeated records are discarded.",
    impact:
      "Legitimate repeated activity or retry behavior may be hidden.",
    correction:
      "Understand identifiers, retry semantics, aggregation, and test deduplication carefully.",
  },
  {
    mistake: "Missing field equals malicious behavior",
    observation:
      "A fictional approval field is absent and the event is labeled unauthorized.",
    impact:
      "Schema, collection, transformation, delay, or coverage problems may be misclassified.",
    correction:
      "Treat missing data as an evidence condition requiring validation.",
  },
  {
    mistake: "Health source is assumed perfect",
    observation:
      "A fictional source-health dashboard is trusted without reviewing its own dependencies and freshness.",
    impact:
      "The program may gain false confidence about evidence quality.",
    correction:
      "Validate source-health provenance, availability, storage, clock, and independent checks.",
  },
  {
    mistake: "Real logs appear in a learning artifact",
    observation:
      "A fictional portfolio includes copied internal fields, screenshots, domains, event values, supplier records, or user activity.",
    impact:
      "Sensitive systems, people, and defensive capabilities may be exposed.",
    correction:
      "Invent every source, field, event, value, identity, owner, date, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define defender questions",
    action:
      "List the fictional identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health questions the program must answer.",
    output:
      "Defender-question and evidence-needs catalog.",
    quality:
      "Each question names one decision and one non-proof statement.",
  },
  {
    step: "2",
    title: "Create the source inventory",
    action:
      "Document fictional source category, owner, producing system class, purpose, scope, environments, fields, retention, access, and dependencies.",
    output:
      "Detection data-source catalog.",
    quality:
      "No source is described only by a product or platform label.",
  },
  {
    step: "3",
    title: "Build the field dictionary",
    action:
      "Define fictional field name, source, version, type, meaning, allowed values, direct or derived state, privacy, owner, and limits.",
    output:
      "Detection field dictionary.",
    quality:
      "Field meaning remains source-specific where necessary.",
  },
  {
    step: "4",
    title: "Map provenance",
    action:
      "Trace fictional event generation, collection, parsing, normalization, enrichment, storage, detection, alert, analyst decision, and feedback.",
    output:
      "Evidence-provenance map.",
    quality:
      "Every transformation and owner is visible.",
  },
  {
    step: "5",
    title: "Define source-health measures",
    action:
      "Record fictional connectivity, freshness, completeness, clock, schema, transformation, duplication, coverage, access, retention, and blind-period measures.",
    output:
      "Source-health requirements matrix.",
    quality:
      "Green connectivity alone cannot produce a Healthy rating.",
  },
  {
    step: "6",
    title: "Review privacy and access",
    action:
      "Specify fictional purpose, required fields, minimization, analyst roles, retention, deletion, sharing, and portfolio exclusions.",
    output:
      "Detection evidence privacy plan.",
    quality:
      "Every field is justified by an approved defender question.",
  },
  {
    step: "7",
    title: "Identify gaps and conflicts",
    action:
      "Document fictional missing sources, delayed fields, conflicting values, stale enrichment, duplication, incomplete populations, and unsupported time periods.",
    output:
      "Coverage-gap and evidence-conflict register.",
    quality:
      "Gaps are not converted into unsupported behavior conclusions.",
  },
  {
    step: "8",
    title: "Define degraded-source behavior",
    action:
      "State how fictional detection confidence, severity, analyst guidance, alternate evidence, suppression, and closure change during source degradation.",
    output:
      "Degraded-evidence decision matrix.",
    quality:
      "The design avoids both silent failure and false certainty.",
  },
  {
    step: "9",
    title: "Create review triggers",
    action:
      "Assign fictional source, schema, parser, field, application, identity, supplier, privacy, retention, and owner change triggers.",
    output:
      "Source lifecycle and recertification plan.",
    quality:
      "Each trigger has an owner, due date, validation, and documentation update.",
  },
  {
    step: "10",
    title: "Assemble the portfolio package",
    action:
      "Combine the fictional catalog, field dictionary, provenance, health, privacy, gaps, degraded behavior, owners, residual risks, and executive summary.",
    output:
      "Detection data-source governance package.",
    quality:
      "The final artifact is traceable, maintainable, privacy-safe, and fully fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest way to select a fictional detection data source?",
    choices: [
      "Choose the source with the most fields.",
      "Choose sources according to the defender question, field meaning, provenance, health, coverage, privacy, and limitations.",
      "Choose whichever source is easiest to collect.",
      "Choose only network evidence.",
    ],
    answer: 1,
    explanation:
      "Source selection should be question-driven and evidence-aware rather than based on volume or convenience.",
  },
  {
    question:
      "A fictional collector reports Green connectivity, but its last event is twenty minutes old. What is the strongest conclusion?",
    choices: [
      "The source is fully healthy.",
      "The source is connected but freshness is degraded.",
      "The underlying service is safe.",
      "No events occurred.",
    ],
    answer: 1,
    explanation:
      "Connectivity and freshness are separate source-health dimensions.",
  },
  {
    question:
      "Why is a field dictionary important?",
    choices: [
      "It makes dashboards more colorful.",
      "It explains source-specific meaning, values, versions, privacy, ownership, dependencies, and limitations.",
      "It proves every field is complete.",
      "It replaces source-health monitoring.",
    ],
    answer: 1,
    explanation:
      "Field names alone are not enough because meaning can differ across sources and versions.",
  },
  {
    question:
      "A fictional application source is current, but owner enrichment is stale. What is safest?",
    choices: [
      "Treat the owner field as current.",
      "Ignore the application source entirely.",
      "Use the current application evidence while marking owner-based conclusions or tuning as limited until enrichment is refreshed.",
      "Declare the activity unauthorized.",
    ],
    answer: 2,
    explanation:
      "Different evidence layers can have different confidence and should be handled separately.",
  },
  {
    question:
      "Why can duplicate fictional records be difficult?",
    choices: [
      "Duplicates always prove duplicate business actions.",
      "They can inflate counts, but removing them incorrectly can also hide legitimate repeated or retry behavior.",
      "They should always be ignored.",
      "They are only a privacy issue.",
    ],
    answer: 1,
    explanation:
      "Deduplication requires understanding identifiers, retries, transformations, and the defender question.",
  },
  {
    question:
      "Which privacy approach is strongest?",
    choices: [
      "Collect every available field for future use.",
      "Collect only fields needed for approved defender questions, restrict access, define retention, and review changes.",
      "Publish raw evidence in the portfolio.",
      "Remove every identity field even when accountability is required.",
    ],
    answer: 1,
    explanation:
      "Purpose-based minimization balances useful defense with privacy and accountability.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real source names with invented events.",
      "Use real screenshots after blurring usernames.",
      "Invent every source, field, schema, event, identity, owner, date, health state, and outcome from scratch.",
      "Use internal logs because no attack instructions are included.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, suppliers, evidence, and defensive capabilities.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A5
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function DataSourcesForDetectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 10
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">
              Evidence, Provenance, Health, and Privacy
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.2 Data Sources for Detection
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional identity, endpoint, network, DNS, email,
            application, cloud, supplier, administrative, support, and
            source-health data contribute different evidence—and why
            provenance, field meaning, freshness, completeness, timing,
            coverage, transformation, duplication, privacy, ownership, and
            failure behavior determine what a detection can responsibly claim.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A5: Detection Engineering"
          lessonTitle="Data Sources for Detection"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented source names, fields, schemas, events, identities, health states, owners, dates, decisions, and outcomes.",
            "I understand that source availability, source health, field quality, coverage, and decision usefulness are separate questions.",
            "I will distinguish event time, collection time, processing time, freshness, completeness, clock alignment, and blind periods.",
            "I will preserve provenance, transformations, enrichment, duplication, privacy, retention, ownership, and evidence limits.",
            "I will not treat missing, delayed, conflicting, or unusual fictional evidence as automatic proof of harmful behavior.",
            "I will not access, query, collect, monitor, inspect, export, correlate, or modify any real telemetry, account, endpoint, network, domain, application, cloud service, supplier, platform, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Green Data Source Can Still Produce Weak Evidence"
        >
          <p className="leading-8">
            A fictional network collector is connected and reports a Green
            heartbeat. After a parser update, event volume drops, one field
            disappears, and application correlation becomes delayed. The
            detection platform is still receiving records—but the source may no
            longer answer the same defender questions with the same confidence.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The collector is Green, so detections using this source are
                healthy.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional source is connected, but freshness,
                completeness, schema, field mapping, volume, transformation,
                and application-correlation health require validation before
                normal confidence is restored.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Data presence is not the same as evidence quality, and evidence
            quality is not the same as a confirmed conclusion.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exactly Five Learning Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why This Matters"
          title="Detections Can Only Be as Responsible as Their Evidence"
        >
          <p className="leading-8">
            Fictional detection logic may be perfectly documented and still
            fail if its sources arrive late, omit required identities, change
            field meaning, duplicate records, lose application context, use
            stale enrichment, overcollect personal information, or fail
            silently during recovery. Data-source engineering gives defenders
            the evidence foundation needed to interpret every later alert.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Question-source fit",
                "Choose fictional evidence according to the defender question rather than source popularity or volume.",
              ],
              [
                "Health-aware confidence",
                "Change fictional confidence and analyst guidance when required sources are delayed, incomplete, conflicting, or missing.",
              ],
              [
                "Privacy-aware usefulness",
                "Collect only fictional fields needed for approved detection and triage decisions.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The S-O-U-R-C-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "S — Start with the defender question",
                "Define which fictional decision needs evidence and what no source can prove alone.",
              ],
              [
                "O — Observe provenance and ownership",
                "Identify the fictional producing system, owner, schema, collection, transformation, enrichment, storage, and access path.",
              ],
              [
                "U — Understand fields and timing",
                "Document fictional field meaning, direct or derived status, event time, collection time, processing time, and clock limits.",
              ],
              [
                "R — Review health and coverage",
                "Measure fictional connectivity, freshness, completeness, queue, schema, duplication, populations, environments, and blind periods.",
              ],
              [
                "C — Control privacy and change",
                "Use fictional purpose-based fields, access, retention, deletion, source-change notifications, versioning, and review triggers.",
              ],
              [
                "E — Explain evidence limits",
                "State which fictional conclusions the source supports, which alternatives remain, and how degraded conditions affect confidence.",
              ],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready source statement
            </p>
            <p className="mt-2 leading-7">
              This fictional source supports a documented defender question
              through defined fields, provenance, timing, coverage, health,
              privacy, ownership, retention, transformation, and limitations.
              When source conditions degrade, detection confidence and analyst
              guidance change according to an approved plan.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Data Sources"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Eleven Detection Source Categories
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Defender questions", item.defenderQuestions],
                    ["Strong fictional fields", item.strongFields],
                    ["Strengths", item.strengths],
                    ["Limitations", item.limitations],
                    ["Privacy boundary", item.privacy],
                    ["Health requirements", item.health],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.category}-${label}`}
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

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Trace the Ten-Stage Evidence Provenance Chain"
        >
          <div className="grid gap-5">
            {provenanceChain.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.stage}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Separate Event, Collection, and Processing Time"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Time concept",
                    "Fictional meaning",
                    "Defender use",
                    "Important limitation",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Event time",
                    "When the fictional activity or state change occurred according to the producing source.",
                    "Sequence identity, service, network, DNS, application, supplier, and change behavior.",
                    "The source clock may be wrong, delayed, or based on a different state transition.",
                  ],
                  [
                    "Collection time",
                    "When a fictional collector or export process received the record.",
                    "Measure transport delay, backlog, and blind periods.",
                    "Collection time does not tell when the underlying activity occurred.",
                  ],
                  [
                    "Processing time",
                    "When fictional parsing, normalization, enrichment, storage, or detection evaluation occurred.",
                    "Measure pipeline delay and identify transformation bottlenecks.",
                    "Processing time can be much later than event time.",
                  ],
                  [
                    "Alert time",
                    "When the fictional detection result became visible to an analyst.",
                    "Measure end-to-end detection delay and response opportunity.",
                    "Alert time alone does not reveal where delay occurred.",
                  ],
                  [
                    "Owner-confirmation time",
                    "When a fictional service, identity, supplier, or user owner confirmed context or outcome.",
                    "Support authorization, impact, false-positive, false-negative, and closure review.",
                    "Confirmation may be delayed, incomplete, or limited to one perspective.",
                  ],
                  [
                    "Recovery time",
                    "When fictional evidence, service, policy, or source health returned to an approved state.",
                    "Define blind periods, reprocessing, reassessment, and closure.",
                    "A source returning does not prove historical gaps are repaired.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 4
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Ten Source-Health Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {sourceHealthDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.goodEvidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Important limitation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Review Eight Field Types"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {fieldReview.map((item) => (
              <article
                key={item.fieldType}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.fieldType}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Defensive value
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.value}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Build a Privacy-Aware Source Catalog"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Purpose",
                "State which fictional defender questions and decisions justify collecting the source.",
                "Do not keep fields merely because they may be useful someday.",
              ],
              [
                "Field minimization",
                "Collect fictional identity, device, service, operation, result, timing, and health fields only when needed.",
                "Exact content or personal attributes may be unnecessary.",
              ],
              [
                "Role-based access",
                "Limit fictional raw, enriched, sensitive, and source-health evidence to approved roles.",
                "Broad access can reveal user activity and internal architecture.",
              ],
              [
                "Retention",
                "Keep fictional evidence long enough for approved detection, testing, review, and recovery needs.",
                "Longer retention creates privacy, access, storage, and misuse risk.",
              ],
              [
                "Masking and grouping",
                "Use fictional requester groups, asset classes, service categories, and object categories when exact detail is unnecessary.",
                "Grouping must not remove accountability for privileged or supplier decisions.",
              ],
              [
                "Portfolio separation",
                "Use invented fields and records rather than sanitized real screenshots, logs, or source names.",
                "Redaction can miss hidden sensitive details.",
              ],
              [
                "Deletion and retirement",
                "Remove fictional data, fields, exports, and access when the purpose ends or the source is retired.",
                "A retired detection does not automatically remove retained evidence.",
              ],
              [
                "Change review",
                "Revalidate fictional privacy when fields, sources, enrichments, retention, users, services, or defender questions change.",
                "A previously approved field set may become unnecessary or incomplete.",
              ],
            ].map(([title, design, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {design}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Define Degraded-Source Decision States"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Source state",
                    "Fictional condition",
                    "Detection behavior",
                    "Analyst guidance",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Healthy",
                    "Required fields, freshness, completeness, timing, schema, transformation, and coverage meet approved expectations.",
                    "Evaluate normal logic and confidence.",
                    "Use standard triage while preserving normal evidence limits.",
                  ],
                  [
                    "Conditional",
                    "One noncritical field or enrichment is stale, but the core defender question can still be evaluated.",
                    "Evaluate with reduced context or adjusted confidence.",
                    "Avoid decisions that depend on the stale field.",
                  ],
                  [
                    "Degraded",
                    "One required source, field, timing relationship, or coverage area is delayed, incomplete, or unreliable.",
                    "Mark alerts provisional, reduce confidence, use alternate evidence, or limit logic according to design.",
                    "Do not close or escalate high-impact conclusions without compensating evidence.",
                  ],
                  [
                    "Blind",
                    "Required evidence is unavailable for a defined scope or period.",
                    "Stop or separate unsupported logic, record the blind period, and avoid false Healthy status.",
                    "Use approved alternate sources and reassess later when evidence is restored.",
                  ],
                  [
                    "Conflicting",
                    "Authoritative and corroborating fictional sources disagree beyond expected delay or scope differences.",
                    "Create a reconciliation condition rather than choosing one value silently.",
                    "Review provenance, authority, timing, schema, transformation, and owner context.",
                  ],
                  [
                    "Recovering",
                    "The source has returned, but backlog, historical gaps, duplicate replay, clock, or schema validation remains incomplete.",
                    "Use limited confidence until reconciliation and backfill status are understood.",
                    "Reassess alerts created during the blind or degraded period.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Evidence Architecture"
          title="Northbridge Detection Data-Source Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches source relationships without real
            platform names, log formats, fields, schemas, identities, events,
            domains, addresses, suppliers, or internal architecture.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Producing systems", "Identity, endpoint, network, DNS, email, app, cloud"],
                ["External context", "Supplier, support, user confirmation, change, recovery"],
                ["Collection", "Exports, collectors, queues, timestamps, missing periods"],
                ["Transformation", "Parsing, normalization, masking, enrichment, aggregation"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"
                >
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Detection Evidence Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Questions", "Mission, identity, service, destination, impact"],
                  ["Fields", "Meaning, type, direct, derived, normalized, enriched"],
                  ["Timing", "Event, collection, processing, alert, confirmation"],
                  ["Health", "Freshness, completeness, queue, clock, schema"],
                  ["Coverage", "Users, devices, services, zones, states, periods"],
                  ["Privacy", "Purpose, minimization, access, retention, deletion"],
                  ["Decision", "Confidence, alternatives, scope, impact, next evidence"],
                  ["Lifecycle", "Owners, changes, tests, reviews, blind periods, retirement"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Detection use", "Logic, missing-data behavior, alert, confidence"],
                ["Analyst use", "Triage, correlation, alternatives, scope, impact"],
                ["Owner use", "Health, schema, privacy, changes, support, recovery"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Detection Source-Health Dashboard"
          subtitle="Fictional source coverage, freshness, schema, privacy, ownership, and lifecycle status for training only."
          metrics={[
            {
              label: "Sources meeting full health requirements",
              value: "8 / 12",
              note: "Four fictional sources have delayed enrichment, schema drift, duplicate events, or incomplete coverage.",
            },
            {
              label: "Sources with current field dictionaries",
              value: "9 / 12",
              note: "Three fictional sources changed fields or value meanings without completed documentation review.",
            },
            {
              label: "Open evidence blind periods",
              value: "3",
              note: "Application correlation, supplier results, and historical support timing require bounded confidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Connected Network Source Shows Unexpected Evidence Drop"
          severity="High"
          time="3:07 PM"
          source="Fake Northbridge Source Assurance Console"
          details="The fictional network collector reports Green connectivity after a parser update, but event volume falls below the expected range, one destination-owner field is missing, and application correlation is delayed. No evidence confirms event loss or harmful network behavior."
          recommendation="Mark the fictional source Degraded. Review schema, parser version, field mapping, expected volume, queue age, clock, alternate sources, application correlation, affected detections, blind period, and rollback before restoring normal confidence."
        />

        <FakeLogPanel
          title="Fake Source Provenance and Health Timeline"
          logs={[
            "09:00 SOURCE network-stream='connected'",
            "09:08 CHANGE parser-version='updated'",
            "09:16 VOLUME network-events='below-expected'",
            "09:24 FIELD destination-owner='missing'",
            "09:32 SOURCE application-correlation='delayed'",
            "09:40 QUEUE network='normal'",
            "09:48 CLOCK network='aligned'",
            "09:56 SCHEMA validation='conditional'",
            "10:04 TRANSFORM mapping='under-review'",
            "10:12 COVERAGE affected-detections='4'",
            "10:20 PRIVACY field-set='unchanged'",
            "10:28 ALTERNATE firewall-events='current'",
            "10:36 ALTERNATE application-events='delayed'",
            "10:44 STATUS source='degraded'",
            "10:52 CONFIDENCE network-observation='moderate'",
            "11:00 CONFIDENCE application-outcome='low'",
            "11:08 BLIND-PERIOD start='09:16'",
            "11:16 OWNER source='assigned'",
            "11:24 CONFIDENCE source-health='moderate'",
            "15:07 ALERT issue='evidence-volume-drop'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Source Evidence Supports—and What It Does Not Prove
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Detection-source use", item.use],
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
          title="Which Source-Health Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional network-source evidence?"
          evidence={[
            "The collector is connected and its heartbeat is current.",
            "Event volume fell below the expected range after a parser update.",
            "One destination-owner field is missing.",
            "Application correlation is delayed.",
            "Queue age and clock alignment are normal.",
            "Firewall evidence is current and can provide limited corroboration.",
            "No supplied evidence confirms event loss or harmful network behavior.",
            "Four detections depend on the affected field or correlation.",
          ]}
          options={[
            "Mark the fictional source Degraded, review schema, parser, field mapping, expected volume, alternate evidence, affected detections, blind period, confidence, and rollback before restoring normal status.",
            "Keep the source Healthy because connectivity and heartbeat are Green.",
            "Declare an attack because event volume dropped.",
            "Disable every dependent detection permanently.",
          ]}
          bestAnswer={0}
          explanation="The first option separates connectivity from completeness, preserves uncertainty, uses alternate evidence, and addresses the source, dependent detections, and lifecycle."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Data-Source Errors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Detection Data-Source Catalog"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, export, inspect, monitor, search, correlate, copy,
            test, or modify any real telemetry, account, endpoint, network,
            domain, application, cloud service, supplier, platform, source,
            schema, field, or organization.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Best Source Is Missing One Required Population"
          scenario="A fictional identity source is current and well documented for employees, but service identities and recovery roles are excluded. A proposed detection is intended to cover all privileged identities."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the fictional coverage gap, limit the detection scope and claims, identify alternate or additional sources for service and recovery identities, add tests, and keep the capability Conditional until required populations are represented.",
              outcome:
                "Best defensive choice. It prevents a partial source from creating false confidence about complete privileged coverage.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the detection as complete because employee coverage is strong.",
              outcome:
                "Weak. The stated objective includes identity populations the source cannot represent.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Treat every missing service-identity event as malicious.",
              outcome:
                "Weak. Missing coverage is an evidence problem, not proof of harmful behavior.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Schema Change Preserves Records but Changes Meaning"
          scenario="A fictional cloud source continues sending records after an update. One detailed administrative-action field is replaced by a broad category, but existing logic and documentation still assume the old meaning."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark affected fictional detections Conditional, update the field dictionary and provenance record, compare old and new semantics, run positive, negative, boundary, and regression tests, revise logic or scope, and obtain owner approval.",
              outcome:
                "Best choice. Data continuity does not guarantee semantic continuity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep every detection unchanged because records still arrive.",
              outcome:
                "Weak. The source may no longer represent the same behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Increase severity to compensate for the broader field.",
              outcome:
                "Weak. Severity does not repair lost meaning or coverage.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Source Governance for a Multi-Source Detection Program"
        >
          <p className="leading-8">
            Fictional Northbridge wants detections across identity, endpoint,
            network, DNS, application, cloud, supplier, support, and recovery
            workflows. The sources have different owners, schemas, delays,
            populations, privacy needs, retention periods, transformations, and
            failure modes. Leadership assumes that collecting all of them will
            automatically provide strong detection coverage.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Build question-source mapping",
                "Connect each fictional defender question to primary, corroborating, enrichment, and health sources.",
              ],
              [
                "Create provenance standards",
                "Document fictional generation, collection, parsing, normalization, enrichment, storage, detection, alert, and feedback.",
              ],
              [
                "Define health states",
                "Use fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering decisions.",
              ],
              [
                "Measure coverage",
                "Map fictional identities, devices, services, environments, states, time periods, exclusions, and blind spots.",
              ],
              [
                "Protect privacy",
                "Justify fictional fields, access, retention, masking, deletion, sharing, and portfolio separation.",
              ],
              [
                "Control change",
                "Trigger fictional review after schema, parser, platform, source, application, identity, supplier, privacy, or owner change.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional source-governance charter, defender-question
              mapping, source inventory, field dictionary, provenance map,
              health-state model, privacy plan, retention matrix, coverage-gap
              register, degraded-source guidance, owner matrix, change-control
              process, residual-risk statement, and leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Data Sources for Detection Checklist"
          items={[
            "I can map fictional defender questions to identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health evidence.",
            "I can distinguish source presence, source availability, source health, coverage, field quality, and decision usefulness.",
            "I can document fictional provenance from event generation through collection, transformation, detection, alert, analyst decision, and feedback.",
            "I can separate event time, collection time, processing time, alert time, confirmation time, and recovery time.",
            "I can build a field dictionary covering source, version, meaning, type, values, direct or derived state, privacy, ownership, and limitations.",
            "I can evaluate connectivity, freshness, completeness, clock, schema, transformation, duplication, coverage, access, retention, and blind periods.",
            "I can distinguish directly recorded, derived, normalized, enriched, aggregated, grouped, missing, and conflicting fields.",
            "I can define Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states.",
            "I can change detection confidence and analyst guidance when required evidence is delayed, missing, stale, or conflicting.",
            "I can design purpose-based field minimization, access, retention, deletion, masking, sharing, and portfolio boundaries.",
            "I can assign source owners and review triggers for schema, platform, parser, field, application, identity, supplier, privacy, and mission changes.",
            "I can create a completely fictional source-governance artifact without exposing real sources, fields, schemas, logs, users, systems, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A5.2 Mini Quiz: Data Sources for Detection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Data-Source Governance Package for the Northbridge Student-Support Cooperative. Include mission, purpose, stakeholders, scope, exclusions, safety boundary, at least thirty defender questions, primary sources, corroborating sources, enrichment sources, source-health sources, identity evidence, endpoint evidence, network evidence, DNS evidence, email evidence, application evidence, cloud evidence, supplier evidence, administrative evidence, support evidence, source owners, schemas, field dictionaries, direct fields, derived fields, normalized fields, enriched fields, aggregated fields, grouped fields, missing fields, conflicting fields, event time, collection time, processing time, alert time, confirmation time, recovery time, provenance chains, parsing, normalization, enrichment, storage, access, retention, deletion, privacy, coverage, populations, environments, states, time periods, exclusions, blind spots, blind periods, connectivity, freshness, completeness, clock, queue age, schema health, transformation health, duplication, access availability, Healthy states, Conditional states, Degraded states, Blind states, Conflicting states, Recovering states, alternate evidence, confidence changes, affected detections, change notifications, review triggers, residual risks, leadership summary, analyst guide, reflection, and a statement that every organization, source, field, schema, event, identity, owner, date, decision, and outcome is invented."
          tips={[
            "Start with fictional defender questions before deciding which sources or fields to collect.",
            "Treat provenance, field meaning, timing, health, coverage, privacy, and ownership as part of detection quality.",
            "Separate source connectivity from event freshness, completeness, semantic meaning, and decision usefulness.",
            "Define degraded-source behavior so detections do not fail silently or create false certainty.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Detection Logic Concepts?"
        >
          <p className="leading-8">
            Before moving to A5.3, rate your readiness from 1 to 5 for source
            categories, defender questions, provenance, field meaning, timing,
            source health, coverage, transformations, duplication, privacy,
            degraded states, ownership, review triggers, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why one fictional source rarely proves a complete identity, service, or business outcome.",
              "I can trace evidence from producing system through alert and analyst decision.",
              "I can distinguish event, collection, processing, alert, confirmation, and recovery time.",
              "I can separate connectivity, freshness, completeness, schema, transformation, and coverage.",
              "I can explain how stale enrichment or conflicting sources change confidence.",
              "I can design privacy-aware field selection and retention.",
              "I can define detection behavior during Degraded or Blind source states.",
              "I can produce a safe fictional source catalog without copying real telemetry or internal details.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional defender question, one primary source, one
            corroborating source, one required field, one provenance risk, one
            source-health measure, one privacy decision, and one question you
            will carry into A5.3.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection data sources should be selected according to fictional defender questions, not volume, popularity, or convenience.",
            "Identity, endpoint, network, DNS, email, application, cloud, supplier, administrative, support, and source-health evidence answer different questions and have different limitations.",
            "Provenance connects fictional event generation, collection, parsing, normalization, enrichment, storage, detection, alerting, analyst decisions, and feedback.",
            "Field names do not guarantee field meaning; source, schema, version, type, transformation, ownership, and limitations matter.",
            "Event time, collection time, processing time, alert time, confirmation time, and recovery time support different conclusions.",
            "Connectivity, freshness, completeness, clock, schema, transformation, duplication, coverage, access, and retention are separate source-health dimensions.",
            "Missing, delayed, stale, duplicated, or conflicting fictional evidence should change confidence and guidance rather than become proof of harmful behavior.",
            "Purpose-based field minimization, access, retention, deletion, masking, and portfolio separation protect privacy.",
            "Source governance requires owners, health states, blind-period records, change notifications, review triggers, validation, and retirement.",
            "Every CyberShield detection-source artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A5
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, translate fictional defender questions and evidence into
            conceptual detection logic using conditions, sequences, counts,
            time windows, relationships, context, exclusions, source-health
            states, severity, confidence, and missing-data behavior.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}