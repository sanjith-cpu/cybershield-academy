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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = `${modulePath}/risk-register-case`;
const nextLesson = `${modulePath}/executive-summary-writing`;

const objectives = [
  "Reconstruct a defensible fictional timeline by separating source event time, collection time, processing time, analyst-note time, workflow time, and normalized time.",
  "Evaluate clock offsets, delayed collection, timestamp conflicts, missing intervals, parallel activity, and source freshness without silently correcting uncertainty.",
  "Distinguish direct observations from interpretations, inferences, contradictions, and unresolved questions while preserving evidence provenance and confidence.",
  "Use sequence, simultaneity, and correlation carefully so a chronological pattern is not mistaken for proof of causation.",
  "Produce a portfolio-ready Forensics Timeline and Evidence Narrative that communicates anchor events, gaps, contradictions, bounded conclusions, and leadership-relevant meaning.",
];

const timeConcepts = [
  {
    term: "Source event time",
    meaning: "The time the originating synthetic system says an event occurred.",
    caution: "The source clock may be wrong, offset, or only approximately synchronized.",
  },
  {
    term: "Collection time",
    meaning: "The time a fictional collector or evidence pipeline receives the event.",
    caution: "Collection can be delayed even when the underlying event happened earlier.",
  },
  {
    term: "Processing time",
    meaning: "The time a collected record is parsed, enriched, correlated, or attached to another record.",
    caution: "Processing order is not necessarily event order.",
  },
  {
    term: "Analyst-note time",
    meaning: "The time an analyst records an observation or interpretation after reviewing available evidence.",
    caution: "The note may summarize earlier events and must not be treated as a technical event itself.",
  },
  {
    term: "Ticket / workflow time",
    meaning: "The time a person or workflow records an operational action such as opening, updating, or closing a ticket.",
    caution: "Manual workflow entries often occur after the event they describe.",
  },
  {
    term: "Normalized time",
    meaning: "A common reference time used to compare records from different sources.",
    caution: "Normalization should record the transformation and uncertainty; it should not erase the original timestamp.",
  },
  {
    term: "Clock offset",
    meaning: "A known or estimated difference between a source clock and the common reference clock.",
    caution: "A known offset can be applied transparently; an uncertain offset should remain labeled as uncertain.",
  },
];

const evidenceStates = [
  {
    state: "Fact",
    meaning: "A directly supported observation in the synthetic evidence packet.",
    example: "Service health shows API error rate increased at 09:06:02.",
  },
  {
    state: "Interpretation",
    meaning: "A reasoned explanation of one or more facts that remains distinct from the facts themselves.",
    example: "The brief degradation overlaps maintenance and may be change-related.",
  },
  {
    state: "Inferred",
    meaning: "A conclusion suggested by multiple records even though no single direct record proves it.",
    example: "A temporary secondary queue may have carried traffic during the main-queue telemetry gap.",
  },
  {
    state: "Contradicted",
    meaning: "A record or claim conflicts with other evidence and should remain visible for review.",
    example: "The stale architecture registry says one queue path exists, while an approved change shows a temporary second path.",
  },
  {
    state: "Uncertain",
    meaning: "The evidence is incomplete, stale, or too ambiguous to support a stronger label.",
    example: "The exact cause of the queue telemetry gap remains uncertain.",
  },
  {
    state: "Unresolved question",
    meaning: "A specific question that remains open and could materially change the narrative if answered.",
    example: "Was the secondary queue path active for the entire missing-evidence interval?",
  },
];

const provenancePrinciples = [
  {
    title: "Keep the original source reference",
    detail: "Every timeline row should preserve a stable evidence ID or source name so another reviewer can trace the statement back to the synthetic record.",
  },
  {
    title: "Preserve the observed timestamp",
    detail: "Do not replace the source timestamp with the normalized timestamp. Keep both so the transformation is auditable.",
  },
  {
    title: "Record normalization logic",
    detail: "When a known clock offset is applied, explain the offset and confidence rather than pretending the source was originally synchronized.",
  },
  {
    title: "Separate evidence from analyst language",
    detail: "A log record and an analyst note are both records, but they represent different kinds of evidence and should not be given identical weight.",
  },
  {
    title: "Keep contradictions visible",
    detail: "A timeline becomes weaker when conflicting records are silently harmonized. Preserve the conflict and explain the current best interpretation.",
  },
  {
    title: "Mark missing evidence windows",
    detail: "A gap is not permission to invent events. It is a boundary on what the timeline can support.",
  },
  {
    title: "Track evidence freshness",
    detail: "Architecture, ownership, and workflow records can be technically valid yet stale. Freshness affects confidence.",
  },
  {
    title: "Document later clarification",
    detail: "Later evidence may change confidence in an earlier hypothesis, but it must not rewrite what was known at the earlier point in time.",
  },
];

const anchorEvents = [
  {
    id: "ANCHOR-1",
    time: "09:00:00",
    event: "Approved maintenance begins",
    importance: "Establishes legitimate context before the alert and service degradation.",
  },
  {
    id: "ANCHOR-2",
    time: "09:05:11",
    event: "DET-NB-7 alert is created",
    importance: "Marks the investigative pivot but does not prove misuse.",
  },
  {
    id: "ANCHOR-3",
    time: "09:06:02–09:10:02",
    event: "Brief service degradation and recovery",
    importance: "Defines the operational-impact window that must be compared with change and identity evidence.",
  },
  {
    id: "ANCHOR-4",
    time: "09:12:46–09:13:20",
    event: "Maintenance linkage and identity-owner confirmation arrive",
    importance: "Later evidence materially reduces confidence in the misuse hypothesis.",
  },
  {
    id: "ANCHOR-5",
    time: "09:12:58–09:19:39",
    event: "Main queue telemetry gap",
    importance: "Creates a real evidence limitation that remains unresolved.",
  },
  {
    id: "ANCHOR-6",
    time: "09:21:12",
    event: "Analyst formally lowers misuse confidence",
    importance: "Demonstrates evidence-driven reassessment rather than retroactive certainty.",
  },
  {
    id: "ANCHOR-7",
    time: "09:31:00",
    event: "Case moves to evidence-review status",
    importance: "Shows bounded closure: no confirmed misuse, one telemetry gap still open.",
  },
];

const normalizationNotes = [
  {
    source: "Identity Event Feed",
    observedIssue: "Source clock is approximately 78 seconds fast.",
    treatment: "Retain the observed timestamp and include a normalized comparison time with Medium confidence.",
    consequence: "Without the offset note, the identity event appears to occur after an application audit event that actually belongs to the same maintenance transaction.",
  },
  {
    source: "Collector Receipt",
    observedIssue: "Identity source experiences a measurable collection backlog.",
    treatment: "Keep event time and collection time as separate fields.",
    consequence: "Arrival order cannot be used as event order.",
  },
  {
    source: "Workflow Tickets",
    observedIssue: "Manual ticket updates are entered after technical actions occur.",
    treatment: "Use workflow timestamps as records of documentation or decision time, not exact technical occurrence time.",
    consequence: "A later ticket timestamp does not mean the underlying technical action happened later.",
  },
  {
    source: "Architecture Registry",
    observedIssue: "The registry is stale for a temporary queue path.",
    treatment: "Lower confidence in architecture-based sequence claims and preserve the contradiction with the approved change record.",
    consequence: "A stale dependency map can distort the case narrative if treated as current truth.",
  },
];

const contradictionCases = [
  {
    title: "Identity clock versus application audit",
    records: "EVT-180812, EVT-180819",
    conflict: "The identity source timestamp appears later than the application audit event even though both describe the same maintenance transaction.",
    handling: "Keep both original times, document the approximate +78 second identity-source offset, and use normalized order with Medium confidence.",
  },
  {
    title: "Architecture registry versus approved change",
    records: "EVT-180818, EVT-180831",
    conflict: "The architecture registry says only one queue path exists, while the approved change record shows a temporary secondary path.",
    handling: "Treat the architecture record as stale evidence, not as a reason to delete or overwrite it.",
  },
  {
    title: "Early misuse hypothesis versus later maintenance evidence",
    records: "EVT-180821, EVT-180828, EVT-180829, EVT-180840",
    conflict: "An early analyst hypothesis considers misuse plausible; later maintenance linkage and owner confirmation reduce that confidence.",
    handling: "Preserve the early note with its original confidence and add the later reassessment as a new event.",
  },
  {
    title: "Queue alert versus missing source data",
    records: "EVT-180830, EVT-180839, EVT-180842",
    conflict: "A queue telemetry-gap alert exists, but the underlying source cannot provide records for the missing interval.",
    handling: "Record the alert as a fact, the missing interval as a gap, and the cause as unresolved rather than inventing hidden events.",
  },
];

const caseTimeline = [
  {
    id: "EVT-180801",
    source: "Change Record CHG-FT-41",
    observed: "2026-04-14 08:41:00 -04:00",
    normalized: "2026-04-14 12:41:00Z",
    confidence: "High",
    state: "Fact",
    description: "Approved maintenance window opens for API-NB-41 and service identity SVC-NB-40.",
    provenance: "Synthetic change-management record; approved version captured before the case begins.",
    related: "EVT-180805, EVT-180812, EVT-180828",
    contradiction: "None",
    gap: "None",
    unresolved: "Did every dependent team receive the maintenance notice?",
    significance: "Establishes legitimate maintenance context before later unusual activity.",
  },
  {
    id: "EVT-180802",
    source: "Service Health",
    observed: "2026-04-14 08:42:18 -04:00",
    normalized: "2026-04-14 12:42:18Z",
    confidence: "High",
    state: "Fact",
    description: "APP-NB-40 reports normal availability and latency before maintenance work begins.",
    provenance: "Synthetic service-health export created for the lab.",
    related: "EVT-180816, EVT-180823",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Provides a pre-change service baseline.",
  },
  {
    id: "EVT-180803",
    source: "Architecture Registry",
    observed: "2026-04-14 08:44:00 -04:00",
    normalized: "2026-04-14 12:44:00Z",
    confidence: "Medium",
    state: "Fact",
    description: "Architecture record lists API-NB-41 as depending on QUEUE-NB-2 and SVC-NB-40.",
    provenance: "Synthetic architecture snapshot last reviewed 19 days earlier.",
    related: "EVT-180818, EVT-180831",
    contradiction: "None",
    gap: "Registry freshness is not same-day.",
    unresolved: "Were any dependencies added after the last review?",
    significance: "Defines expected relationships but carries freshness limits.",
  },
  {
    id: "EVT-180804",
    source: "Identity Review",
    observed: "2026-04-14 08:47:26 -04:00",
    normalized: "2026-04-14 12:47:26Z",
    confidence: "High",
    state: "Fact",
    description: "SVC-NB-40 has a current owner and approved application role for the maintenance workflow.",
    provenance: "Synthetic identity-governance review with current approval date.",
    related: "EVT-180812, EVT-180819, EVT-180829",
    contradiction: "None",
    gap: "None",
    unresolved: "Does the role scope still match the current application design?",
    significance: "Shows that the service identity is legitimate; it does not explain every later event.",
  },
  {
    id: "EVT-180805",
    source: "Workflow Ticket OPS-1842",
    observed: "2026-04-14 08:50:03 -04:00",
    normalized: "2026-04-14 12:50:03Z",
    confidence: "High",
    state: "Fact",
    description: "Operations ticket records that maintenance verification will start after configuration deployment.",
    provenance: "Synthetic workflow record.",
    related: "EVT-180801, EVT-180813, EVT-180828",
    contradiction: "None",
    gap: "None",
    unresolved: "What exact verification evidence will be attached?",
    significance: "Separates planned workflow time from later technical event time.",
  },
  {
    id: "EVT-180806",
    source: "Collector Health",
    observed: "2026-04-14 08:53:12 -04:00",
    normalized: "2026-04-14 12:53:12Z",
    confidence: "High",
    state: "Fact",
    description: "Security telemetry collector reports healthy ingestion with median delay under 20 seconds.",
    provenance: "Synthetic monitoring-health record.",
    related: "EVT-180820, EVT-180838",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Establishes that later collection delays are a change from baseline.",
  },
  {
    id: "EVT-180807",
    source: "Synthetic Log — API-NB-41",
    observed: "2026-04-14 08:55:41 -04:00",
    normalized: "2026-04-14 12:55:41Z",
    confidence: "High",
    state: "Fact",
    description: "Routine health-check request is processed successfully.",
    provenance: "Synthetic application log included in the lesson packet.",
    related: "EVT-180802, EVT-180816",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Another pre-change anchor confirming normal service behavior.",
  },
  {
    id: "EVT-180808",
    source: "Analyst Note",
    observed: "2026-04-14 08:58:00 -04:00",
    normalized: "2026-04-14 12:58:00Z",
    confidence: "Medium",
    state: "Interpretation",
    description: "Analyst writes that the environment appears stable before the scheduled maintenance window.",
    provenance: "Synthetic analyst note written after reviewing health records.",
    related: "EVT-180802, EVT-180806, EVT-180807",
    contradiction: "None",
    gap: "Analyst note summarizes prior evidence rather than creating a technical event.",
    unresolved: "Which specific sources did the analyst review?",
    significance: "Demonstrates that analyst-note time is later than the evidence being summarized.",
  },
  {
    id: "EVT-180809",
    source: "Change Record CHG-FT-41",
    observed: "2026-04-14 09:00:00 -04:00",
    normalized: "2026-04-14 13:00:00Z",
    confidence: "High",
    state: "Fact",
    description: "Approved maintenance execution window formally begins.",
    provenance: "Synthetic change-management record.",
    related: "EVT-180801, EVT-180812, EVT-180828",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Primary anchor event for evaluating maintenance overlap.",
  },
  {
    id: "EVT-180810",
    source: "Synthetic Log — QUEUE-NB-2",
    observed: "2026-04-14 09:01:14 -04:00",
    normalized: "2026-04-14 13:01:14Z",
    confidence: "High",
    state: "Fact",
    description: "Queue depth increases modestly from 18 to 43 messages during deployment startup.",
    provenance: "Synthetic queue-health log.",
    related: "EVT-180816, EVT-180823",
    contradiction: "None",
    gap: "None",
    unresolved: "Is the increase expected for deployment?",
    significance: "Shows a small operational change without proving a security cause.",
  },
  {
    id: "EVT-180811",
    source: "Synthetic Log — APP-NB-40",
    observed: "2026-04-14 09:02:07 -04:00",
    normalized: "2026-04-14 13:02:07Z",
    confidence: "High",
    state: "Fact",
    description: "Application records a brief dependency retry against API-NB-41.",
    provenance: "Synthetic application log.",
    related: "EVT-180810, EVT-180816",
    contradiction: "None",
    gap: "None",
    unresolved: "Was the retry expected during the deployment transition?",
    significance: "Provides sequence evidence for early service degradation.",
  },
  {
    id: "EVT-180812",
    source: "Identity Event Feed",
    observed: "2026-04-14 09:03:22 -04:00",
    normalized: "2026-04-14 13:03:22Z",
    confidence: "Medium",
    state: "Fact",
    description: "SVC-NB-40 performs an approved application role action associated with the maintenance process.",
    provenance: "Synthetic identity event; source clock later found to be approximately +78 seconds fast.",
    related: "EVT-180804, EVT-180819, EVT-180829",
    contradiction: "Observed clock conflicts with application chronology until offset is considered.",
    gap: "Known clock offset is approximate, not exact.",
    unresolved: "Was the offset stable for the entire review window?",
    significance: "Introduces a deliberate clock conflict that must remain visible.",
  },
  {
    id: "EVT-180813",
    source: "Workflow Ticket OPS-1842",
    observed: "2026-04-14 09:04:51 -04:00",
    normalized: "2026-04-14 13:04:51Z",
    confidence: "High",
    state: "Fact",
    description: "Operator marks deployment step complete and begins verification.",
    provenance: "Synthetic workflow record entered manually.",
    related: "EVT-180805, EVT-180828",
    contradiction: "None",
    gap: "Manual workflow entry may lag the technical completion event.",
    unresolved: "How long after technical completion was the ticket updated?",
    significance: "Shows why workflow timestamps should not be treated as exact technical event timestamps.",
  },
  {
    id: "EVT-180814",
    source: "Synthetic Alert DET-NB-7",
    observed: "2026-04-14 09:05:11 -04:00",
    normalized: "2026-04-14 13:05:11Z",
    confidence: "High",
    state: "Fact",
    description: "Detection flags an unusual service-identity action associated with API-NB-41.",
    provenance: "Synthetic alert object generated from fictional telemetry.",
    related: "EVT-180812, EVT-180819, EVT-180829",
    contradiction: "Alert timestamp is earlier than one source event timestamp because source normalization differs.",
    gap: "Alert creation time is not identical to underlying source event time.",
    unresolved: "Which normalized source event triggered the alert?",
    significance: "Creates the investigation pivot without declaring compromise.",
  },
  {
    id: "EVT-180815",
    source: "Collector Receipt",
    observed: "2026-04-14 09:05:34 -04:00",
    normalized: "2026-04-14 13:05:34Z",
    confidence: "High",
    state: "Fact",
    description: "Collector receives the identity event associated with EVT-180812 roughly two minutes after the source-reported event.",
    provenance: "Synthetic collection metadata.",
    related: "EVT-180812, EVT-180814, EVT-180820",
    contradiction: "None",
    gap: "Collection delay is measurable.",
    unresolved: "Was the delay source-side, network-side, or collector-side?",
    significance: "Separates source event time from collection time.",
  },
  {
    id: "EVT-180816",
    source: "Service Health",
    observed: "2026-04-14 09:06:02 -04:00",
    normalized: "2026-04-14 13:06:02Z",
    confidence: "High",
    state: "Fact",
    description: "API-NB-41 error rate rises briefly while APP-NB-40 latency increases.",
    provenance: "Synthetic service-health telemetry.",
    related: "EVT-180810, EVT-180811, EVT-180823",
    contradiction: "None",
    gap: "None",
    unresolved: "Is the degradation caused by maintenance, queue behavior, or another factor?",
    significance: "Establishes operational impact but not cause.",
  },
  {
    id: "EVT-180817",
    source: "Synthetic Log — API-NB-41",
    observed: "2026-04-14 09:06:18 -04:00",
    normalized: "2026-04-14 13:06:18Z",
    confidence: "High",
    state: "Fact",
    description: "API-NB-41 records a configuration reload and successful health check 11 seconds later.",
    provenance: "Synthetic application log.",
    related: "EVT-180809, EVT-180816, EVT-180824",
    contradiction: "None",
    gap: "None",
    unresolved: "Did the reload directly cause the brief error-rate increase?",
    significance: "Supports maintenance correlation while preserving causation uncertainty.",
  },
  {
    id: "EVT-180818",
    source: "Architecture Registry",
    observed: "2026-04-14 09:07:00 -04:00",
    normalized: "2026-04-14 13:07:00Z",
    confidence: "Low",
    state: "Uncertain",
    description: "Registry entry implies that QUEUE-NB-2 is the only downstream queue for API-NB-41.",
    provenance: "Synthetic architecture record older than several recent changes.",
    related: "EVT-180803, EVT-180831",
    contradiction: "Later change evidence suggests a temporary secondary path existed.",
    gap: "Architecture freshness gap.",
    unresolved: "Was the temporary path formally documented elsewhere?",
    significance: "Shows that stale architecture evidence can create a misleading timeline interpretation.",
  },
  {
    id: "EVT-180819",
    source: "Synthetic Log — API-NB-41",
    observed: "2026-04-14 09:07:09 -04:00",
    normalized: "2026-04-14 13:07:09Z",
    confidence: "High",
    state: "Fact",
    description: "Application audit record links the unusual service action to the maintenance verification transaction.",
    provenance: "Synthetic application audit log with transaction correlation ID.",
    related: "EVT-180812, EVT-180814, EVT-180829",
    contradiction: "Source chronology appears earlier than identity event until clock offset is considered.",
    gap: "None after normalization note.",
    unresolved: "Does the transaction explain all alert conditions or only one part?",
    significance: "Later evidence weakens the misuse hypothesis without rewriting earlier alert chronology.",
  },
  {
    id: "EVT-180820",
    source: "Collector Health",
    observed: "2026-04-14 09:08:00 -04:00",
    normalized: "2026-04-14 13:08:00Z",
    confidence: "High",
    state: "Fact",
    description: "Collector reports ingestion backlog of 96 seconds for the identity source while other sources remain near baseline.",
    provenance: "Synthetic monitoring-health record.",
    related: "EVT-180806, EVT-180815, EVT-180838",
    contradiction: "None",
    gap: "Identity-source collection delay window begins.",
    unresolved: "What caused the isolated source backlog?",
    significance: "Explains why several records arrive out of chronological order.",
  },
  {
    id: "EVT-180821",
    source: "Analyst Note",
    observed: "2026-04-14 09:08:41 -04:00",
    normalized: "2026-04-14 13:08:41Z",
    confidence: "Low",
    state: "Interpretation",
    description: "Analyst hypothesizes that the unusual service event may represent misuse because the alert preceded full maintenance context review.",
    provenance: "Synthetic analyst note based on evidence available at 09:08.",
    related: "EVT-180814, EVT-180819, EVT-180828",
    contradiction: "Later evidence reduces confidence in this hypothesis.",
    gap: "Maintenance ticket and audit linkage not yet reviewed at note time.",
    unresolved: "What evidence would distinguish misuse from approved maintenance?",
    significance: "Preserves what was believed at the time instead of rewriting the note later.",
  },
  {
    id: "EVT-180822",
    source: "Ticket IR-NB-55",
    observed: "2026-04-14 09:09:12 -04:00",
    normalized: "2026-04-14 13:09:12Z",
    confidence: "High",
    state: "Fact",
    description: "Investigation ticket is opened with initial scope limited to SVC-NB-40, API-NB-41, and related maintenance evidence.",
    provenance: "Synthetic incident-workflow record.",
    related: "EVT-180814, EVT-180821, EVT-180834",
    contradiction: "None",
    gap: "Ticket open time is after the technical events under review.",
    unresolved: "Should scope expand to APP-NB-40 or QUEUE-NB-2?",
    significance: "Demonstrates workflow time occurring after technical event time.",
  },
  {
    id: "EVT-180823",
    source: "Service Health",
    observed: "2026-04-14 09:09:37 -04:00",
    normalized: "2026-04-14 13:09:37Z",
    confidence: "High",
    state: "Fact",
    description: "API error rate returns toward baseline; APP-NB-40 latency also begins recovering.",
    provenance: "Synthetic service-health telemetry.",
    related: "EVT-180816, EVT-180824",
    contradiction: "None",
    gap: "None",
    unresolved: "Was recovery caused by completion of configuration reload or another parallel event?",
    significance: "Provides recovery sequence evidence without proving cause.",
  },
  {
    id: "EVT-180824",
    source: "Synthetic Log — API-NB-41",
    observed: "2026-04-14 09:10:02 -04:00",
    normalized: "2026-04-14 13:10:02Z",
    confidence: "High",
    state: "Fact",
    description: "API-NB-41 records stable health status after configuration reload.",
    provenance: "Synthetic application log.",
    related: "EVT-180817, EVT-180823",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Strong anchor for end of the brief degradation period.",
  },
  {
    id: "EVT-180825",
    source: "Processing Pipeline",
    observed: "2026-04-14 09:10:14 -04:00",
    normalized: "2026-04-14 13:10:14Z",
    confidence: "High",
    state: "Fact",
    description: "Identity event from EVT-180812 completes enrichment and is attached to DET-NB-7.",
    provenance: "Synthetic processing metadata.",
    related: "EVT-180812, EVT-180814, EVT-180815",
    contradiction: "None",
    gap: "Processing occurred materially after source event time.",
    unresolved: "None",
    significance: "Separates processing time from event and collection time.",
  },
  {
    id: "EVT-180826",
    source: "Analyst Note",
    observed: "2026-04-14 09:11:03 -04:00",
    normalized: "2026-04-14 13:11:03Z",
    confidence: "Medium",
    state: "Interpretation",
    description: "Analyst notes that service degradation overlaps the approved change but that causation is not yet established.",
    provenance: "Synthetic analyst note.",
    related: "EVT-180809, EVT-180816, EVT-180823",
    contradiction: "None",
    gap: "None",
    unresolved: "What evidence would establish or weaken a causal link?",
    significance: "Models bounded language: overlap is evidence of correlation, not proof of cause.",
  },
  {
    id: "EVT-180827",
    source: "Synthetic Log — APP-NB-40",
    observed: "2026-04-14 09:11:19 -04:00",
    normalized: "2026-04-14 13:11:19Z",
    confidence: "High",
    state: "Fact",
    description: "Application records normal dependency response times for three consecutive checks.",
    provenance: "Synthetic application log.",
    related: "EVT-180823, EVT-180824",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Confirms recovery from the application perspective.",
  },
  {
    id: "EVT-180828",
    source: "Workflow Ticket OPS-1842",
    observed: "2026-04-14 09:12:46 -04:00",
    normalized: "2026-04-14 13:12:46Z",
    confidence: "High",
    state: "Fact",
    description: "Operator attaches maintenance verification note identifying SVC-NB-40 activity as expected for CHG-FT-41.",
    provenance: "Synthetic workflow attachment entered after technical verification.",
    related: "EVT-180801, EVT-180819, EVT-180821",
    contradiction: "Conflicts with the earlier low-confidence misuse hypothesis, not with the underlying event.",
    gap: "Workflow evidence arrived after alert triage began.",
    unresolved: "Was the verification reviewed independently?",
    significance: "Later evidence changes confidence while preserving the earlier chronology and analyst state.",
  },
  {
    id: "EVT-180829",
    source: "Identity Review",
    observed: "2026-04-14 09:13:20 -04:00",
    normalized: "2026-04-14 13:13:20Z",
    confidence: "High",
    state: "Fact",
    description: "Identity owner confirms SVC-NB-40 action type is authorized for the maintenance workflow.",
    provenance: "Synthetic owner-confirmation record.",
    related: "EVT-180804, EVT-180812, EVT-180819",
    contradiction: "Weakens misuse interpretation.",
    gap: "Owner confirmation is contextual evidence, not a replacement for technical evidence.",
    unresolved: "Did the action remain within approved scope?",
    significance: "Strengthens legitimate-maintenance interpretation.",
  },
  {
    id: "EVT-180830",
    source: "Synthetic Alert DET-NB-12",
    observed: "2026-04-14 09:13:43 -04:00",
    normalized: "2026-04-14 13:13:43Z",
    confidence: "High",
    state: "Fact",
    description: "Separate alert reports a brief telemetry gap from QUEUE-NB-2.",
    provenance: "Synthetic alert generated from source-health logic.",
    related: "EVT-180831, EVT-180838",
    contradiction: "None",
    gap: "Alert indicates missing evidence window from one source.",
    unresolved: "Was the queue inactive or was telemetry unavailable?",
    significance: "Introduces an evidence gap that cannot be silently filled.",
  },
  {
    id: "EVT-180831",
    source: "Change Record CHG-FT-39",
    observed: "2026-04-14 09:14:05 -04:00",
    normalized: "2026-04-14 13:14:05Z",
    confidence: "High",
    state: "Fact",
    description: "Older approved change record reveals a temporary secondary queue path was enabled two days earlier for resilience testing.",
    provenance: "Synthetic approved change record found during review.",
    related: "EVT-180803, EVT-180818, EVT-180830",
    contradiction: "Contradicts stale architecture statement that only one queue path exists.",
    gap: "Consolidated architecture record did not yet reflect the temporary path.",
    unresolved: "Was the temporary path still active during the incident window?",
    significance: "Shows why contradictory records should remain visible rather than being silently reconciled.",
  },
  {
    id: "EVT-180832",
    source: "Synthetic Log — Secondary Queue",
    observed: "2026-04-14 09:14:21 -04:00",
    normalized: "2026-04-14 13:14:21Z",
    confidence: "Medium",
    state: "Fact",
    description: "Secondary queue records a small burst of messages during the main queue telemetry gap.",
    provenance: "Synthetic resilience-test log with complete provenance.",
    related: "EVT-180830, EVT-180831",
    contradiction: "None",
    gap: "Main QUEUE-NB-2 telemetry remains absent for the same interval.",
    unresolved: "Did traffic fail over automatically or was it intentionally redirected?",
    significance: "Supports parallel activity during a missing-evidence window.",
  },
  {
    id: "EVT-180833",
    source: "Analyst Note",
    observed: "2026-04-14 09:15:02 -04:00",
    normalized: "2026-04-14 13:15:02Z",
    confidence: "Medium",
    state: "Inferred",
    description: "Analyst infers that queue resilience behavior may explain why service health recovered despite missing main-queue telemetry.",
    provenance: "Synthetic analyst inference based on EVT-180831 and EVT-180832.",
    related: "EVT-180830, EVT-180831, EVT-180832",
    contradiction: "Not contradicted, but not directly proven.",
    gap: "No direct failover event record is present.",
    unresolved: "Is there a separate synthetic controller record that confirms failover?",
    significance: "Distinguishes an inference from a direct event.",
  },
  {
    id: "EVT-180834",
    source: "Ticket IR-NB-55",
    observed: "2026-04-14 09:16:10 -04:00",
    normalized: "2026-04-14 13:16:10Z",
    confidence: "High",
    state: "Fact",
    description: "Investigation scope expands to include queue telemetry and resilience-change evidence.",
    provenance: "Synthetic incident-workflow record.",
    related: "EVT-180822, EVT-180830, EVT-180831",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Shows scope changing as new evidence appears.",
  },
  {
    id: "EVT-180835",
    source: "Synthetic Log — API-NB-41",
    observed: "2026-04-14 09:16:44 -04:00",
    normalized: "2026-04-14 13:16:44Z",
    confidence: "High",
    state: "Fact",
    description: "API-NB-41 continues healthy processing with no repeat of the earlier unusual service-identity condition.",
    provenance: "Synthetic application audit log.",
    related: "EVT-180819, EVT-180827",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Reduces confidence that the unusual identity condition is ongoing.",
  },
  {
    id: "EVT-180836",
    source: "Service Health",
    observed: "2026-04-14 09:17:00 -04:00",
    normalized: "2026-04-14 13:17:00Z",
    confidence: "High",
    state: "Fact",
    description: "All monitored service indicators return to normal ranges.",
    provenance: "Synthetic service-health record.",
    related: "EVT-180823, EVT-180827, EVT-180835",
    contradiction: "None",
    gap: "None",
    unresolved: "Does stable service health prove the alert was benign? No.",
    significance: "Confirms operational recovery while leaving security interpretation separate.",
  },
  {
    id: "EVT-180837",
    source: "Architecture Review Note",
    observed: "2026-04-14 09:18:32 -04:00",
    normalized: "2026-04-14 13:18:32Z",
    confidence: "Medium",
    state: "Interpretation",
    description: "Reviewer records that the architecture registry is stale for the temporary queue path and should not be used alone for causal reconstruction.",
    provenance: "Synthetic reviewer note.",
    related: "EVT-180818, EVT-180831",
    contradiction: "None",
    gap: "Architecture freshness gap remains.",
    unresolved: "When will the registry be updated?",
    significance: "Documents evidence-quality limits instead of silently correcting the source.",
  },
  {
    id: "EVT-180838",
    source: "Collector Health",
    observed: "2026-04-14 09:19:05 -04:00",
    normalized: "2026-04-14 13:19:05Z",
    confidence: "High",
    state: "Fact",
    description: "Identity-source backlog clears; collector delay returns below 20 seconds.",
    provenance: "Synthetic collector-health record.",
    related: "EVT-180806, EVT-180820",
    contradiction: "None",
    gap: "Main queue telemetry gap is separate from identity-source backlog.",
    unresolved: "None",
    significance: "Closes the identity collection-delay window.",
  },
  {
    id: "EVT-180839",
    source: "Synthetic Log — QUEUE-NB-2",
    observed: "2026-04-14 09:19:40 -04:00",
    normalized: "2026-04-14 13:19:40Z",
    confidence: "Medium",
    state: "Fact",
    description: "Main queue telemetry resumes with normal depth and no retained record for the missing interval.",
    provenance: "Synthetic queue log after source recovery.",
    related: "EVT-180830, EVT-180832",
    contradiction: "None",
    gap: "09:12:58–09:19:39 main-queue telemetry remains missing.",
    unresolved: "What occurred in the missing interval cannot be fully reconstructed from this source.",
    significance: "Preserves an evidence gap as an explicit limitation.",
  },
  {
    id: "EVT-180840",
    source: "Analyst Note",
    observed: "2026-04-14 09:21:12 -04:00",
    normalized: "2026-04-14 13:21:12Z",
    confidence: "High",
    state: "Interpretation",
    description: "Analyst lowers confidence in service-identity misuse from Medium to Low based on maintenance transaction linkage, owner confirmation, and no repeated behavior.",
    provenance: "Synthetic analyst reassessment note.",
    related: "EVT-180821, EVT-180828, EVT-180829, EVT-180835",
    contradiction: "Supersedes confidence level of earlier hypothesis without deleting it.",
    gap: "None",
    unresolved: "Could any unexplained activity remain inside the queue telemetry gap?",
    significance: "Explicitly demonstrates confidence change over time.",
  },
  {
    id: "EVT-180841",
    source: "Ticket IR-NB-55",
    observed: "2026-04-14 09:23:05 -04:00",
    normalized: "2026-04-14 13:23:05Z",
    confidence: "High",
    state: "Fact",
    description: "Ticket records current case status: no confirmed misuse, maintenance overlap supported, telemetry gap unresolved, service stable.",
    provenance: "Synthetic incident-workflow status update.",
    related: "EVT-180834, EVT-180840",
    contradiction: "None",
    gap: "Queue evidence gap remains open.",
    unresolved: "Is additional synthetic evidence available for the gap?",
    significance: "Creates a bounded case-status anchor.",
  },
  {
    id: "EVT-180842",
    source: "Processing Pipeline",
    observed: "2026-04-14 09:24:17 -04:00",
    normalized: "2026-04-14 13:24:17Z",
    confidence: "High",
    state: "Fact",
    description: "Late-arriving enrichment associates DET-NB-12 with collector-health degradation rather than a confirmed queue security event.",
    provenance: "Synthetic processing metadata.",
    related: "EVT-180830, EVT-180839",
    contradiction: "Changes interpretation of the alert but not its creation time.",
    gap: "Underlying missing queue interval still exists.",
    unresolved: "Was collector degradation the sole cause of the telemetry gap?",
    significance: "Shows how later processing can clarify an earlier record without changing chronology.",
  },
  {
    id: "EVT-180843",
    source: "Change Record CHG-FT-41",
    observed: "2026-04-14 09:26:00 -04:00",
    normalized: "2026-04-14 13:26:00Z",
    confidence: "High",
    state: "Fact",
    description: "Maintenance owner records successful completion of planned verification.",
    provenance: "Synthetic change-management record.",
    related: "EVT-180809, EVT-180828, EVT-180845",
    contradiction: "None",
    gap: "None",
    unresolved: "None",
    significance: "Provides formal end-of-change anchor.",
  },
  {
    id: "EVT-180844",
    source: "Service Health",
    observed: "2026-04-14 09:27:30 -04:00",
    normalized: "2026-04-14 13:27:30Z",
    confidence: "High",
    state: "Fact",
    description: "Post-maintenance health review remains stable across APP-NB-40, API-NB-41, and QUEUE-NB-2.",
    provenance: "Synthetic service-health record.",
    related: "EVT-180836, EVT-180843",
    contradiction: "None",
    gap: "Main queue missing interval remains historical.",
    unresolved: "None",
    significance: "Supports recovery validation after the change.",
  },
  {
    id: "EVT-180845",
    source: "Ticket IR-NB-55",
    observed: "2026-04-14 09:31:00 -04:00",
    normalized: "2026-04-14 13:31:00Z",
    confidence: "High",
    state: "Fact",
    description: "Case moves to evidence-review status rather than active escalation; no root cause is declared for the queue telemetry gap.",
    provenance: "Synthetic incident-workflow record.",
    related: "EVT-180841, EVT-180842, EVT-180843",
    contradiction: "None",
    gap: "Queue telemetry gap remains unresolved.",
    unresolved: "Should the telemetry gap become a separate monitoring-quality finding?",
    significance: "Demonstrates bounded closure language without overstating certainty.",
  },
  {
    id: "EVT-180846",
    source: "Leadership Note",
    observed: "2026-04-14 09:34:22 -04:00",
    normalized: "2026-04-14 13:34:22Z",
    confidence: "High",
    state: "Interpretation",
    description: "Leadership summary states that service impact was brief, current evidence supports approved maintenance as the strongest explanation for the identity alert, and monitoring-quality follow-up remains necessary.",
    provenance: "Synthetic leadership communication derived from the case record.",
    related: "EVT-180840, EVT-180841, EVT-180845",
    contradiction: "None",
    gap: "Does not claim exact cause for the telemetry gap.",
    unresolved: "Monitoring owner must decide follow-up priority.",
    significance: "Models a concise bounded narrative based on the completed timeline.",
  },
];

const narrativeLayers = [
  {
    title: "What is directly supported",
    detail: "Approved maintenance was active; an unusual service-identity alert occurred; service degradation was brief; the identity action later linked to the maintenance transaction; one queue telemetry window remained missing.",
  },
  {
    title: "What is strongly suggested",
    detail: "The maintenance activity is the strongest explanation for the unusual identity event, and the temporary queue path may explain resilience during the main-queue evidence gap.",
  },
  {
    title: "What is not proven",
    detail: "The evidence does not prove that maintenance caused every service symptom, nor does it establish the exact cause of the queue telemetry gap.",
  },
  {
    title: "What changed over time",
    detail: "Misuse confidence moved from a plausible early hypothesis to Low after later evidence added maintenance transaction linkage, current ownership, and no repeated behavior.",
  },
  {
    title: "What leadership should know",
    detail: "The immediate service impact was brief and recovered, no misuse is confirmed, and monitoring-quality follow-up remains necessary because the evidence gap limits complete reconstruction.",
  },
];

const antiPatterns = [
  {
    antiPattern: "Sorting timestamps and calling it a timeline",
    weak: "Put every row in observed-time order and assume that is the true sequence.",
    better: "Separate event, collection, processing, analyst, and workflow times; normalize only when the transformation is supported and documented.",
  },
  {
    antiPattern: "Silently fixing a clock conflict",
    weak: "Change the source timestamp so the records look consistent.",
    better: "Preserve the original timestamp, document the known or uncertain offset, and carry confidence into the normalized time.",
  },
  {
    antiPattern: "Treating alert time as event time",
    weak: "Assume the alert timestamp is exactly when the underlying activity happened.",
    better: "Record alert creation separately from source event, collection, and processing times.",
  },
  {
    antiPattern: "Turning correlation into cause",
    weak: "The service degraded during maintenance, therefore maintenance caused the degradation.",
    better: "State that the events overlap and identify what additional evidence would be needed to support causation.",
  },
  {
    antiPattern: "Using later knowledge to rewrite earlier decisions",
    weak: "Because later evidence looked benign, pretend the early analyst should have known that immediately.",
    better: "Judge each note and decision against the evidence available at that time, then record reassessment separately.",
  },
  {
    antiPattern: "Filling evidence gaps with a story",
    weak: "Assume the missing queue interval contained normal behavior because service recovered.",
    better: "Keep the gap explicit and limit the conclusion to what other sources can support.",
  },
  {
    antiPattern: "Treating workflow records as technical telemetry",
    weak: "Use the ticket update time as the exact time the system changed.",
    better: "Use ticket time to show when the action was recorded, approved, or communicated.",
  },
  {
    antiPattern: "Dropping provenance to make the report shorter",
    weak: "Summarize every event without stable evidence references.",
    better: "Keep concise provenance so important conclusions remain reviewable and defensible.",
  },
];

const labTasks = [
  "Create a case scope that defines the fictional services, identities, evidence sources, and review window.",
  "Build an evidence inventory before building the timeline.",
  "Use at least forty synthetic records across alerts, logs, tickets, changes, service health, identity, analyst notes, and architecture or workflow evidence.",
  "Give every record a stable event or evidence ID.",
  "Record the source for every event.",
  "Preserve each observed timestamp exactly as provided in the fictional evidence packet.",
  "Add a normalized timestamp only when the normalization logic is documented.",
  "Label timestamp confidence as High, Medium, or Low.",
  "Identify at least one known clock offset and explain how it affects ordering.",
  "Identify at least one uncertain clock offset and keep the uncertainty visible.",
  "Separate source event time from collection time.",
  "Separate collection time from processing time.",
  "Separate technical event time from analyst-note time.",
  "Separate technical event time from ticket or workflow time.",
  "Classify each timeline row as Fact, Interpretation, Inferred, Contradicted, or Uncertain where appropriate.",
  "Record source provenance for every important event.",
  "Link related records using stable IDs.",
  "Mark deliberate timestamp conflicts instead of silently correcting them.",
  "Mark delayed-collection examples.",
  "Mark workflow-versus-event-time examples.",
  "Preserve the legitimate maintenance context without assuming it explains every alert.",
  "Mark at least one missing-evidence window.",
  "Show parallel activity where multiple events occur independently or at nearly the same time.",
  "Choose a small set of anchor events that organize the case.",
  "Identify contradictions and explain whether they affect chronology, confidence, or interpretation.",
  "Identify evidence gaps and explain how each gap limits the narrative.",
  "Create at least three hypotheses and label the evidence that strengthens or weakens each one.",
  "Show at least one case where later evidence changes confidence without rewriting earlier chronology.",
  "Distinguish sequence from causation.",
  "Distinguish simultaneity from relationship.",
  "Write unresolved questions that would materially affect the conclusion if answered.",
  "Write a bounded timeline narrative using evidence-backed language.",
  "Include a final evidence-backed conclusion with explicit uncertainty.",
  "Create a short leadership note that explains impact, confidence, and the next defensive decision.",
  "Do not use real devices, real accounts, real cloud environments, real private data, or real forensic tools.",
  "Do not perform acquisition, password bypass, data recovery, account access, device access, or any operational forensic activity.",
  "Keep the lab entirely synthetic, defensive, review-focused, and school-appropriate.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response: "Keep the source timestamp, record the approximate clock offset, create a normalized comparison time with Medium confidence, and preserve the conflict note.",
    outcome: "Best. This keeps provenance and uncertainty visible while still allowing defensible sequence analysis.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response: "Overwrite the identity timestamp with the application timestamp so the events line up cleanly.",
    outcome: "Risky. Silent correction destroys provenance and creates false certainty.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response: "Ignore the identity event because its clock is imperfect.",
    outcome: "Caution. Imperfect time does not make the evidence useless; it changes how confidently it can be ordered.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response: "Preserve the missing interval as an explicit evidence gap, use other sources only for bounded context, and keep the exact cause unresolved.",
    outcome: "Best. A defensible timeline shows where evidence stops supporting the story.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response: "Assume the missing queue interval was normal because the service recovered afterward.",
    outcome: "Risky. Recovery after the gap does not prove what happened inside the gap.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response: "Declare the telemetry gap a confirmed security incident without additional evidence.",
    outcome: "Caution. The gap is important, but a missing record window is not itself proof of malicious activity.",
    tone: "caution" as const,
  },
];

const dashboardMetrics = [
  {
    label: "Synthetic timeline records",
    value: "46",
    note: "Alerts, logs, service health, tickets, change records, identity, analyst notes, and architecture evidence",
  },
  {
    label: "Primary clock conflict",
    value: "+78 sec",
    note: "Approximate identity-source offset retained with Medium confidence",
  },
  {
    label: "Main evidence gap",
    value: "6m 42s",
    note: "QUEUE-NB-2 telemetry missing from 09:12:58 through 09:19:39",
  },
  {
    label: "Early misuse confidence",
    value: "Medium",
    note: "Recorded before maintenance transaction linkage and owner confirmation were reviewed",
  },
  {
    label: "Later misuse confidence",
    value: "Low",
    note: "Reduced by later evidence; earlier note remains preserved",
  },
  {
    label: "Confirmed malicious activity",
    value: "0",
    note: "The fictional evidence does not support a confirmed compromise conclusion",
  },
  {
    label: "Real systems accessed",
    value: "0",
    note: "All evidence is synthetic and inert",
  },
];

const logs = [
  "[09:00:00] CHG-FT-41 state=MAINTENANCE_START scope=API-NB-41,SVC-NB-40",
  "[09:03:22] ID-SRC event=SVC-NB-40_ACTION clock_offset=APPROX_PLUS_78S confidence=MEDIUM",
  "[09:05:11] DET-NB-7 alert=UNUSUAL_SERVICE_ACTION status=OPEN",
  "[09:05:34] COLLECTOR source=IDENTITY receipt_delay=MEASURABLE",
  "[09:06:02] SERVICE api_error=ELEVATED app_latency=ELEVATED",
  "[09:07:09] API-AUDIT transaction=CHG-FT-41 identity=SVC-NB-40 linkage=FOUND",
  "[09:12:58] QUEUE-NB-2 telemetry=GAP_START",
  "[09:12:46] OPS-1842 maintenance_linkage=CONFIRMED",
  "[09:13:20] ID-OWNER scope=AUTHORIZED owner=CONFIRMED",
  "[09:19:40] QUEUE-NB-2 telemetry=RESUMED missing_interval=PRESERVED",
  "[09:21:12] ANALYST hypothesis=MISUSE confidence=LOW reason=LATER_EVIDENCE",
  "[09:31:00] IR-NB-55 state=EVIDENCE_REVIEW no_confirmed_misuse=TRUE gap=OPEN",
];

const quizQuestions = [
  {
    question: "Why is a forensic timeline more than a sorted list of timestamps?",
    choices: [
      "Different records can represent event, collection, processing, analyst, or workflow times and may use clocks with different accuracy.",
      "Because the latest timestamp is always the most important.",
      "Because every timestamp should be replaced with ticket time.",
      "Because chronology is unnecessary in defensive review.",
    ],
    answer: 0,
    explanation: "A defensible timeline preserves time semantics, clock confidence, provenance, and uncertainty rather than treating every timestamp as the same kind of fact.",
  },
  {
    question: "What is the best handling of a known approximate clock offset?",
    choices: [
      "Preserve the original time, document the offset, provide a normalized comparison time, and label confidence.",
      "Delete the original timestamp.",
      "Ignore the record entirely.",
      "Round every source to the nearest hour.",
    ],
    answer: 0,
    explanation: "Normalization should improve comparison without destroying the source record or hiding uncertainty.",
  },
  {
    question: "A service degradation overlaps approved maintenance. What is the strongest conclusion from overlap alone?",
    choices: [
      "The events are correlated in time, but additional evidence is required to establish causation.",
      "Maintenance definitely caused the degradation.",
      "The alert is automatically false.",
      "The maintenance record should be ignored.",
    ],
    answer: 0,
    explanation: "Temporal overlap supports correlation, not automatic causal proof.",
  },
  {
    question: "Why should an early analyst hypothesis remain in the timeline after later evidence weakens it?",
    choices: [
      "It documents what was reasonably believed at that time and shows how confidence changed as evidence improved.",
      "Because every hypothesis becomes a fact later.",
      "Because old notes should never be reviewed.",
      "Because later evidence cannot affect confidence.",
    ],
    answer: 0,
    explanation: "A timeline should preserve the historical decision state instead of rewriting earlier thinking using later knowledge.",
  },
  {
    question: "What should a reviewer do with a missing evidence window?",
    choices: [
      "Mark it explicitly, explain how it limits conclusions, and avoid inventing events inside the gap.",
      "Assume nothing happened.",
      "Assume the worst happened.",
      "Remove the gap from the report so the timeline looks complete.",
    ],
    answer: 0,
    explanation: "Evidence gaps are meaningful limitations and should remain visible.",
  },
  {
    question: "What is provenance in this lesson?",
    choices: [
      "The traceable source reference and context showing where a timeline statement came from and how it was handled.",
      "A severity score for every event.",
      "A method for accessing real devices.",
      "A requirement to use only analyst notes.",
    ],
    answer: 0,
    explanation: "Provenance makes conclusions reviewable by linking statements to their synthetic source records and transformations.",
  },
  {
    question: "What is the strongest final conclusion for the Northbridge case?",
    choices: [
      "Current evidence supports approved maintenance as the strongest explanation for the identity alert, no misuse is confirmed, and the queue telemetry gap remains an unresolved monitoring-quality limitation.",
      "The service identity was definitely compromised.",
      "Maintenance definitely caused every event in the case.",
      "The evidence gap proves an attack occurred.",
    ],
    answer: 0,
    explanation: "The best conclusion is bounded by the evidence: it communicates the strongest explanation, what is not confirmed, and what remains unresolved.",
  },
];

const checklistItems = [
  "Case scope is explicit.",
  "Evidence inventory uses stable references.",
  "Observed timestamps are preserved.",
  "Normalized timestamps are documented rather than silently substituted.",
  "Source event time is distinct from collection time.",
  "Collection time is distinct from processing time.",
  "Analyst-note time is distinct from technical event time.",
  "Workflow time is distinct from technical event time.",
  "Known clock offsets are recorded.",
  "Uncertain clock offsets remain labeled as uncertain.",
  "Facts and interpretations are separated.",
  "Inferences are labeled as inferences.",
  "Contradictions remain visible.",
  "Evidence gaps remain visible.",
  "Parallel events are not automatically treated as related.",
  "Sequence is not presented as proof of causation.",
  "Evidence freshness is considered.",
  "Confidence labels are used consistently.",
  "Later evidence changes confidence without rewriting earlier chronology.",
  "Unresolved questions are specific and decision-relevant.",
  "The final narrative is bounded by evidence.",
  "The leadership note separates impact, confidence, and next action.",
  "All evidence is fictional and synthetic.",
  "No real acquisition, account access, device access, password bypass, or private-data recovery is performed.",
];

const takeaways = [
  "A forensic timeline is a model of evidence relationships, not merely a timestamp sort.",
  "Source event, collection, processing, analyst, and workflow times describe different moments and should remain distinct.",
  "Clock normalization is useful only when its logic and uncertainty are documented.",
  "Original timestamps and provenance should be preserved even when normalized comparison times are added.",
  "Contradictions and gaps strengthen a professional timeline when they are made explicit instead of hidden.",
  "Sequence, simultaneity, and correlation do not automatically prove causation.",
  "Later evidence can change confidence without changing what was known earlier.",
  "A bounded narrative states what is supported, what is inferred, what is contradicted, and what remains unresolved.",
  "The Northbridge evidence supports maintenance as the strongest explanation for the identity alert while leaving the queue telemetry gap unresolved.",
  "The Forensics Timeline and Evidence Narrative becomes the eighth artifact in the A18 Advanced Defensive Casebook.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A18
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

export default function ForensicsTimelineCasePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A18.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Forensics Timeline Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A professional timeline does not simply sort timestamps. It explains
            what each timestamp means, how trustworthy the clock is, when the
            record arrived, what was known at that moment, where evidence is
            missing, and how later records change confidence without rewriting
            the past.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses a completely fictional Northbridge evidence packet.
            No real forensic acquisition, account access, device access,
            password bypass, private-data recovery, or cloud access is used or
            taught.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Forensics Timeline Case"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.8 Entry Readiness"
          items={[
            "I can separate evidence from interpretation.",
            "I understand that timestamps from different sources may represent different moments.",
            "I can keep contradictions and uncertainty visible instead of forcing a clean story.",
            "I will use only the synthetic evidence provided in this fictional lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Chronology Is Not the Same as Truth"
        >
          <p className="leading-8">
            A timeline is a structured argument about sequence. The argument is
            only as strong as its sources, clocks, provenance, and uncertainty
            labels. Two records can carry the same minute while describing
            different moments: one may record a source event, another a
            collector receipt, and another an analyst note written after both.
          </p>

          <p className="mt-4 leading-8">
            This matters because defensive decisions often depend on what was
            known at a particular point in time. If later evidence is used to
            rewrite earlier uncertainty, the case record becomes less accurate,
            not more accurate.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A defensible timeline preserves original evidence, documents
              transformations, shows gaps, and limits conclusions to what the
              evidence can actually support.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Time Semantics"
          title="One Case Can Contain Several Different Kinds of Time"
        >
          <p className="leading-8">
            Before ordering the Northbridge records, identify what each
            timestamp represents. A source event can occur first, reach a
            collector later, be processed later still, and finally appear in an
            analyst note or ticket. Those are related records, not interchangeable
            timestamps.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {timeConcepts.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence States"
          title="Facts, Interpretations, Inferences, and Uncertainty Must Not Collapse Into One Label"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Provenance"
          title="Every Important Timeline Statement Should Be Traceable"
        >
          <p className="leading-8">
            Provenance is the connection between a claim and the evidence that
            supports it. In a classroom case, that means stable synthetic IDs,
            original timestamps, source names, freshness notes, and documented
            normalization logic. Provenance is what lets a second reviewer ask,
            “Where did this statement come from?” and receive a precise answer.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {provenancePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Anchor Events"
          title="Use a Few Strong Anchors to Organize a Dense Case"
        >
          <p className="leading-8">
            A forty-record case can become unreadable if every row is treated as
            equally important. Anchor events provide structure without deleting
            detail. They define the change window, alert pivot, impact window,
            major evidence updates, unresolved gap, and bounded case status.
          </p>

          <div className="mt-6 grid gap-5">
            {anchorEvents.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 font-mono text-xs font-black text-blue-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.time}
                  </span>
                </div>
                <h3 className="mt-4 font-black text-white">{item.event}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.importance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Normalization"
          title="Normalize Carefully, Never Invisibly"
        >
          <p className="leading-8">
            Normalization helps compare different clocks, but it is a documented
            analytical transformation. The original timestamp remains evidence.
            The normalized time is a comparison aid whose confidence depends on
            what is known about the source clock.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {normalizationNotes.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black text-white">Observed issue:</span> 
                  {item.observedIssue}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black text-white">Treatment:</span> 
                  {item.treatment}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black text-white">Why it matters:</span> 
                  {item.consequence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case File"
          title="Northbridge Forensics Timeline — 46 Synthetic Records"
        >
          <p className="leading-8">
            The following case intentionally contains delayed collection,
            workflow-versus-event timing, an approximate clock offset, stale
            architecture evidence, parallel activity, later clarification, and
            a missing evidence window. The goal is not to make the story perfectly
            clean. The goal is to make the reasoning defensible.
          </p>

          <div className="mt-6 grid gap-5">
            {caseTimeline.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.state}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.confidence} confidence
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.description}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Source", item.source],
                    ["Observed timestamp", item.observed],
                    ["Normalized timestamp", item.normalized],
                    ["Provenance", item.provenance],
                    ["Related records", item.related],
                    ["Contradiction", item.contradiction],
                    ["Gap note", item.gap],
                    ["Unresolved question", item.unresolved],
                    ["Narrative significance", item.significance],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Forensics Timeline Dashboard"
          subtitle="Synthetic case metrics, clock confidence, evidence gaps, and bounded case status"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Unusual Service Identity Activity During Approved Maintenance"
          severity="High"
          time="09:05:11"
          source="Fictional DET-NB-7"
          details="An unusual SVC-NB-40 event is detected during an approved maintenance window while API-NB-41 also shows brief service degradation. The alert is real within the fictional case, but its meaning is not yet established at creation time."
          recommendation="Correlate the alert with maintenance, identity, service-health, collector, and application-audit evidence before assigning a cause. Preserve timing uncertainty and avoid treating overlap as proof."
        />

        <FakeLogPanel
          title="Northbridge Synthetic Timeline Extract"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Clock Conflict"
          question="What is the strongest way to handle the identity-source timestamp that conflicts with application chronology?"
          evidence={[
            "Identity source reports the service action at 09:03:22.",
            "Application audit links the same transaction at 09:07:09.",
            "Independent synthetic validation says the identity-source clock is approximately 78 seconds fast.",
            "Collector receipt occurs after the source event and includes measurable delay.",
            "The exact offset is approximate rather than guaranteed for every record.",
          ]}
          options={[
            "Preserve the observed time, document the approximate offset, add a normalized comparison time, and keep confidence at Medium.",
            "Rewrite the source timestamp so it exactly matches the application log.",
            "Ignore the identity record because its clock is imperfect.",
            "Treat the later collector receipt as the true event time.",
          ]}
          bestAnswer={0}
          explanation="The goal is transparent normalization, not silent correction. Original evidence and uncertainty stay visible."
        />

        <Section
          eyebrow="Contradictions"
          title="Contradictory Records Are Evidence About the Case"
        >
          <p className="leading-8">
            A contradiction does not always mean one source is false. The sources
            may have different freshness, time semantics, or scopes. Professional
            review keeps the conflict visible and explains how it affects the
            current narrative.
          </p>

          <div className="mt-6 grid gap-5">
            {contradictionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  <span className="font-black text-white">Records:</span> 
                  {item.records}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  <span className="font-black text-white">Conflict:</span> 
                  {item.conflict}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  <span className="font-black">Handling:</span> 
                  {item.handling}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Narrative Reasoning"
          title="Build the Story in Layers of Confidence"
        >
          <p className="leading-8">
            The goal of the evidence narrative is not to sound certain. It is to
            tell a useful story whose confidence matches the evidence. A reader
            should be able to see which parts are direct, which are inferred,
            which are contradicted, and which remain unresolved.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {narrativeLayers.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Sequence and Cause"
          title="A Sequence Can Be Accurate While the Causal Story Is Still Uncertain"
        >
          <p className="leading-8">
            In Northbridge, maintenance begins, an unusual identity alert appears,
            service health briefly degrades, and later evidence links the identity
            action to the change. That sequence is useful. It still does not prove
            that one event caused every other event.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Sequence",
                detail: "Event A is placed before Event B with a stated level of time confidence.",
              },
              {
                title: "Correlation",
                detail: "Events overlap or move together in a way that may be relevant.",
              },
              {
                title: "Causation",
                detail: "Evidence supports that one event materially produced another outcome. This requires stronger support than sequence or overlap alone.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Timeline Quality"
          title="Common Forensic Timeline Anti-Patterns"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item) => (
              <article
                key={item.antiPattern}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="font-black text-white">{item.antiPattern}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Better
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Conflicting Clocks"
          scenario="The fictional identity source places an event in a sequence that conflicts with application evidence, and an independent validation shows an approximate source-clock offset."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Missing Queue Evidence"
          scenario="QUEUE-NB-2 telemetry disappears for several minutes while a temporary secondary path shows limited activity and service health later recovers."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Forensics Timeline and Evidence Narrative"
        >
          <p className="leading-8">
            Use only the synthetic Northbridge evidence in this lesson. Your job
            is to reconstruct and communicate the timeline, not to obtain data
            from any real device, account, system, or cloud environment.
          </p>

          <div className="mt-6 grid gap-4">
            {labTasks.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not acquire data from real devices, access real accounts,
              bypass passwords, recover private files, inspect real cloud
              tenants, or use real forensic tooling. The entire case is synthetic
              and designed only for defensive reasoning, documentation, and
              evidence-quality analysis.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Later Evidence and Earlier Decisions"
          question="How should the 09:08 misuse hypothesis be treated after later evidence weakens it?"
          evidence={[
            "At 09:08 the analyst had an unusual identity alert, service degradation, and incomplete maintenance context.",
            "At 09:12–09:13 maintenance transaction linkage and current identity-owner confirmation became available.",
            "No repeated unusual behavior was observed afterward.",
            "At 09:21 the analyst explicitly lowered confidence from Medium to Low.",
            "The original 09:08 note remains part of the case history.",
          ]}
          options={[
            "Keep the original note with its original confidence and add the later reassessment as a separate timeline event.",
            "Edit the 09:08 note so it says the alert was expected all along.",
            "Delete the early note because later evidence is more accurate.",
            "Treat both Medium and Low confidence as simultaneous facts about the same moment.",
          ]}
          bestAnswer={0}
          explanation="A professional timeline preserves what was known at each point in time and documents confidence changes as new evidence arrives."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Bounded Narrative From a Messy Timeline"
        >
          <p className="leading-8">
            Write a one-page case narrative that a technical reviewer and a
            manager could both trust. You must communicate the strongest current
            explanation without hiding the clock conflict, stale architecture
            record, delayed collection, or queue telemetry gap.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Case scope and review window",
              "Three strongest anchor events",
              "Most important clock-normalization note",
              "Most important contradiction",
              "Main evidence gap",
              "Strongest direct facts",
              "Strongest inference",
              "Early hypothesis and original confidence",
              "Later evidence that changed confidence",
              "What is correlated but not proven causal",
              "Current bounded conclusion",
              "One unresolved question that could change the narrative",
              "One monitoring-quality follow-up",
              "One concise leadership note",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="font-black">Model bounded conclusion</p>
            <p className="mt-2 leading-7">
              The current fictional evidence supports approved maintenance as
              the strongest explanation for the unusual SVC-NB-40 activity. A
              brief service degradation occurred during the same window, but the
              timeline does not establish that the identity event caused the
              degradation. No misuse is confirmed. A main-queue telemetry gap
              remains unresolved and should be tracked as a monitoring-quality
              finding because it limits complete reconstruction of the case.
            </p>
          </div>
        </Section>

        <DefenderChecklist
          title="A18.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.8 Mini Quiz: Forensics Timeline Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Forensics Timeline and Evidence Narrative"
          prompt="Create the eighth artifact for your A18 Advanced Defensive Casebook: a fictional Forensics Timeline and Evidence Narrative. Include case scope, evidence inventory, time-normalization notes, source/provenance map, timeline, anchor events, contradictions, evidence gaps, confidence labels, hypotheses, unresolved questions, a bounded narrative, a final evidence-backed conclusion, and a short leadership note."
          tips={[
            "Preserve original timestamps and stable evidence IDs.",
            "Explain every normalization decision and clock-confidence limit.",
            "Keep facts, interpretations, inferences, contradictions, and uncertainty distinct.",
            "Do not fill evidence gaps with assumptions.",
            "Show how later evidence changes confidence without rewriting earlier chronology.",
            "Keep the conclusion bounded by what the synthetic evidence supports.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.9?"
        >
          <p className="leading-8">
            A18.9 moves from detailed evidence reconstruction to Executive
            Summary Writing. Before continuing, make sure you can explain what
            happened, what remains uncertain, and why it matters without dumping
            every timeline row into the summary.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish source, collection, processing, analyst, and workflow times.",
              "I can normalize a clock transparently without deleting the original timestamp.",
              "I can preserve contradictions and evidence gaps.",
              "I can distinguish sequence and correlation from causation.",
              "I can write a bounded evidence narrative with confidence and unresolved questions.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Timeline Artifact Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with scope",
                detail: "Name the fictional systems, identities, time window, and evidence types so readers know what the timeline can and cannot address.",
              },
              {
                title: "Create an evidence inventory",
                detail: "List stable IDs, source names, timestamp types, freshness, and confidence before drawing conclusions.",
              },
              {
                title: "Keep two time columns when needed",
                detail: "Observed and normalized times should both be visible whenever a clock transformation matters.",
              },
              {
                title: "Use short state labels",
                detail: "Fact, Interpretation, Inferred, Contradicted, and Uncertain labels make the timeline easier to scan without flattening meaning.",
              },
              {
                title: "Call out anchor events",
                detail: "A small number of anchors helps leadership and reviewers understand the case without losing access to the full record.",
              },
              {
                title: "Give gaps their own section",
                detail: "Missing evidence should be visible as a limitation rather than buried inside narrative prose.",
              },
              {
                title: "Show confidence movement",
                detail: "Record when a hypothesis becomes stronger or weaker and identify the specific evidence that changed the assessment.",
              },
              {
                title: "End with a bounded conclusion",
                detail: "State the strongest supported explanation, what is not confirmed, what remains unresolved, and what defensive follow-up is justified.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <Section
          eyebrow="Safety Boundary"
          title="Synthetic Evidence Only"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="font-black">This lesson allows</p>
              <p className="mt-2 text-sm leading-7">
                Synthetic logs, fake alerts, fictional tickets, synthetic change
                records, service-health evidence, identity-governance evidence,
                architecture records, timestamp normalization, provenance review,
                timeline reconstruction, confidence analysis, and bounded
                defensive communication.
              </p>
            </div>

            <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-50">
              <p className="font-black">This lesson does not allow</p>
              <p className="mt-2 text-sm leading-7">
                Real forensic acquisition, real device access, real account or
                cloud access, password bypass, private-data recovery, secret
                extraction, deanonymization, exploitation, persistence, evasion,
                offensive playbooks, or any operational response action against
                a real system.
              </p>
            </div>
          </div>
        </Section>

        <section className="rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Lesson Complete
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A18.8 — Forensics Timeline Case
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            You now have the eighth artifact in the A18 casebook: a Forensics
            Timeline and Evidence Narrative that preserves original timestamps,
            provenance, clock uncertainty, contradictions, gaps, confidence
            changes, and a bounded conclusion.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}