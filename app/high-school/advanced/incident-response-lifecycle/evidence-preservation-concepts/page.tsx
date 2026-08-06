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
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousLesson = `${modulePath}/stakeholder-communication`;
const nextLesson = `${modulePath}/post-incident-review`;

const objectives = [
  "Distinguish fictional evidence preservation from invasive collection, surveillance, unrestricted copying, operational forensics, or unauthorized investigation.",
  "Build fictional evidence records containing purpose, authorization, scope, identity, provenance, timing, source health, integrity, access, custody, storage, retention, privacy, transfer, review, and reporting.",
  "Evaluate fictional evidence quality using relevance, authenticity, completeness, consistency, freshness, source health, chronology, reproducibility, privacy, and decision usefulness.",
  "Design fictional preservation workflows with decision questions, minimum necessary evidence, owners, approvals, handoffs, access reviews, retention triggers, correction records, and closure obligations.",
  "Create a portfolio-ready fictional Evidence Preservation Package containing an evidence charter, source inventory, evidence register, chronology, custody log, access matrix, retention plan, transfer record, quality review, dashboard, leadership brief, and reflection.",
];

const vocabulary = [
  ["Evidence preservation", "A fictional authorized process for maintaining decision-relevant records, context, provenance, timing, integrity, availability, and limitations without teaching invasive acquisition methods."],
  ["Evidence purpose", "The fictional response question, decision, validation, accountability, recovery, privacy, or lesson that the preserved item is meant to support."],
  ["Authorization", "The fictional documented permission defining who may preserve, review, transfer, retain, or report the item and within what boundary."],
  ["Scope", "The fictional identities, services, records, periods, sources, fields, users, suppliers, decisions, and questions included in the preservation activity."],
  ["Provenance", "The fictional record of where evidence came from, when it was created, how it was handled, and which source or owner supplied it."],
  ["Integrity", "The fictional condition that evidence remains accurate enough for its purpose and that changes, limitations, corrections, and handling are visible."],
  ["Authenticity", "A fictional judgment that the item is what it claims to be, based on source identity, provenance, ownership, context, and consistency."],
  ["Completeness", "A fictional judgment about whether the available item includes the required population, period, fields, relationships, and context for the question."],
  ["Source health", "A fictional rating such as Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering that changes how evidence may be interpreted."],
  ["Event time", "The fictional time the underlying event occurred."],
  ["Collection time", "The fictional time the source or process recorded or gathered the item."],
  ["Processing time", "The fictional time the evidence entered a platform, queue, workflow, or review system."],
  ["Decision time", "The fictional time a responder used the evidence to make or support a decision."],
  ["Custody", "A fictional record of who possessed, accessed, transferred, reviewed, corrected, or archived the item and for what purpose."],
  ["Access control", "A fictional purpose-based rule limiting who may view, change, share, export, or administer evidence."],
  ["Minimum necessary", "A fictional principle that preserves and shares only the evidence fields, populations, periods, and detail required for the legitimate purpose."],
  ["Retention", "A fictional rule describing how long evidence remains available, why, under whose authority, and what event changes or ends the obligation."],
  ["Disposition", "A fictional authorized action that archives, transfers, restricts, corrects, or removes evidence according to policy and purpose."],
  ["Transfer record", "A fictional log of sender, receiver, purpose, scope, approval, item identity, time, confidentiality, and acknowledgement."],
  ["Correction record", "A fictional record explaining that evidence metadata, interpretation, source status, or content description changed and how prior decisions are affected."],
  ["Derived artifact", "A fictional timeline, chart, summary, dashboard, score, or report created from original evidence and linked back to its sources."],
  ["Evidence limitation", "A fictional condition such as missing fields, delay, Blind periods, schema changes, conflicts, ownership gaps, or uncertain meaning."],
  ["Decision usefulness", "The degree to which fictional evidence helps answer the exact response question without creating unsupported certainty."],
  ["Evidence debt", "Fictional unresolved work involving missing provenance, unclear ownership, stale retention, weak access controls, incomplete source recovery, unlinked derived artifacts, or absent corrections."],
];

const evidenceLifecycle = [
  ["Define purpose", "Which fictional response question or decision requires evidence?", "Purpose statement, audience, decision owner, deadline, and non-purpose boundary.", "The request is tied to a legitimate decision rather than collect everything."],
  ["Confirm authority", "Who may preserve, review, transfer, retain, correct, and report the fictional evidence?", "Authority record, approver, scope, limitations, privacy conditions, and escalation path.", "No responder invents authority or expands beyond delegated scope."],
  ["Bound scope", "Which fictional sources, entities, fields, periods, relationships, and populations are necessary?", "Evidence scope statement and explicit exclusions.", "The request is narrow enough to protect privacy and broad enough to answer the question."],
  ["Identify source and provenance", "Where did the fictional item originate, and how is its identity supported?", "Source name, owner, record ID, creation context, event time, collection time, processing time, and source health.", "The item can be traced back to an identifiable fictional source."],
  ["Preserve context", "Which fictional relationships, schema, owner notes, source health, and limitations are required to understand the item?", "Context record, field definitions, related evidence IDs, and limitations.", "The evidence is not separated from the information needed to interpret it."],
  ["Protect integrity and access", "How will fictional changes, handlers, viewers, transfers, and corrections remain visible?", "Custody log, access matrix, version, correction record, and review trail.", "The evidence history remains reconstructable."],
  ["Store and retain", "Where and how long should the fictional item remain available for its stated purpose?", "Approved storage category, retention trigger, review date, owner, and disposition path.", "Retention is purpose-based, time-bounded, and owned."],
  ["Use and report", "Which fictional conclusion does the item support, and what does it not prove?", "Evidence citation, confidence, source health, non-proof statement, and decision record.", "Reports preserve uncertainty and link derived artifacts to source evidence."],
  ["Review and correct", "Did fictional source recovery, new context, corrected metadata, or conflicting evidence change interpretation?", "Correction record, affected decisions, redistributed reports, owner acknowledgement, and revalidation.", "Evidence and conclusions remain current rather than silently edited."],
  ["Close or transition", "Which fictional evidence remains needed after response, and which obligations end or change?", "Closure review, archive, transfer, restriction, disposition, debt, residual risk, and reopen trigger.", "Closure does not erase unresolved preservation, privacy, or governance obligations."],
];

const qualityDimensions = [
  ["Relevance", "Does the fictional item help answer the exact response question?", "Purpose, decision, scope, owner, and use record.", "Interesting evidence may still be irrelevant."],
  ["Authenticity", "Is the fictional item supported as the record it claims to be?", "Source identity, owner, provenance, context, consistency, and custody.", "A familiar format alone does not establish authenticity."],
  ["Completeness", "Does the fictional item cover the required period, fields, population, and relationships?", "Source inventory, coverage, gaps, Blind periods, schema, and alternate evidence.", "A complete-looking record can still omit the needed population."],
  ["Consistency", "Does the fictional item agree with related records, owner statements, and expected source behavior?", "Cross-source comparison, chronology, schema, and conflict register.", "Agreement does not automatically prove correctness."],
  ["Freshness", "Is the fictional item current enough for the decision?", "Event, collection, processing, receipt, review, and decision times.", "Recent processing time can hide old event time."],
  ["Source health", "Can the fictional source support the exact conclusion during the relevant period?", "Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering state with timing.", "A source may be Healthy for one field and weak for another."],
  ["Chronology", "Can fictional reviewers reconstruct event, collection, processing, transfer, access, review, and decision sequence?", "Multi-time chronology and custody records.", "One timestamp is rarely enough."],
  ["Reproducibility", "Can a fictional independent reviewer reach the same bounded interpretation?", "Source references, field definitions, logic, assumptions, and derived-artifact links.", "Reproducibility does not remove interpretation limits."],
  ["Privacy proportionality", "Does fictional preservation use the minimum necessary identities, data, fields, recipients, and duration?", "Purpose, scope, access matrix, retention, sharing, and privacy approval.", "Minimal evidence must still support the decision."],
  ["Decision usefulness", "Does the fictional evidence help make, validate, revisit, or explain the decision?", "Decision record, outcome, owner, confidence, limitations, and correction impact.", "High-quality evidence can still be used for the wrong question."],
];

const sourceInventory = [
  {
    source: "Fictional identity-role source",
    owner: "Identity owner",
    purpose: "Confirm role assignment, approval window, sponsor, owner, and current state.",
    health: "Healthy",
    coverage: "Identity NB-ID-042 and temporary recovery role from 08:00 to 10:00.",
    limits: "Does not prove effective group state or session activity.",
    retention: "Until response closure plus the fictional review period.",
  },
  {
    source: "Fictional group-membership source",
    owner: "Identity platform owner",
    purpose: "Review effective group relationship during the incident period.",
    health: "Degraded",
    coverage: "Group state present, but synchronization is delayed.",
    limits: "Cannot prove minute-by-minute effective access.",
    retention: "Retain current and recovered records through source reconciliation.",
  },
  {
    source: "Fictional session source",
    owner: "Identity and service owners",
    purpose: "Confirm session identity, service, destination, start, end, and state.",
    health: "Healthy",
    coverage: "Session NB-SES-881 and approved canary session.",
    limits: "Does not prove every action performed inside the session.",
    retention: "Through recovery observation and closure review.",
  },
  {
    source: "Fictional service-health source",
    owner: "Service owner",
    purpose: "Review availability, errors, administrative function, queues, and user effect.",
    health: "Healthy",
    coverage: "NB-SVC-07 from 08:30 through recovery observation.",
    limits: "Does not prove authorization, privacy, or complete user impact.",
    retention: "Through service acceptance and lessons learned.",
  },
  {
    source: "Fictional data-access source",
    owner: "Data owner",
    purpose: "Answer whether protected records were accessed during the relevant period.",
    health: "Blind",
    coverage: "Unavailable from 08:50 to 09:20; alternate evidence under review.",
    limits: "Supports neither access nor no-access conclusions.",
    retention: "Preserve recovered historical records and limitation history.",
  },
  {
    source: "Fictional supplier integration source",
    owner: "Supplier relationship owner",
    purpose: "Review integration delay, queue state, duplication, replay, and recovery timing.",
    health: "Conditional",
    coverage: "Supplier statement and local queue summary.",
    limits: "Supplier statement is not complete local evidence.",
    retention: "Through queue reconciliation and supplier corrective action.",
  },
  {
    source: "Fictional change-management source",
    owner: "Change owner",
    purpose: "Compare approved recovery activity with session, service, destination, and time.",
    health: "Healthy",
    coverage: "Change NB-CHG-114 from 08:15 to 08:55.",
    limits: "Only partially matches the later session.",
    retention: "Through cause review and corrective-action validation.",
  },
  {
    source: "Fictional user-support source",
    owner: "Service and continuity owners",
    purpose: "Review reported delays, affected workflows, support guidance, and recovery acceptance.",
    health: "Conditional",
    coverage: "One staff report and canary-user results.",
    limits: "Does not represent the full user population.",
    retention: "Through user acceptance and communication review.",
  },
];

const evidenceRegister = [
  {
    id: "PRES-E01",
    item: "Fictional role-state record",
    purpose: "Support the stale-authority and eradication questions.",
    provenance: "Identity-role source supplied by the identity owner.",
    eventTime: "08:58",
    collectionTime: "08:59",
    processingTime: "09:00",
    health: "Healthy",
    supports: "Temporary recovery role remained Active near and after approval expiration.",
    limits: "Does not prove exercised privilege, intent, or group-derived access.",
    access: "Incident lead, identity owner, independent validator.",
    retention: "Through corrective-action validation.",
  },
  {
    id: "PRES-E02",
    item: "Fictional session-state record",
    purpose: "Support containment, scope, and recovery validation.",
    provenance: "Session source supplied by identity and service owners.",
    eventTime: "09:04",
    collectionTime: "09:05",
    processingTime: "09:06",
    health: "Healthy",
    supports: "Session NB-SES-881 connected the identity to one service and destination.",
    limits: "Does not prove data access, modification, or harmful intent.",
    access: "Incident, identity, service, recovery reviewers.",
    retention: "Through observation and closure review.",
  },
  {
    id: "PRES-E03",
    item: "Fictional group-state record",
    purpose: "Support effective-access and recovery-gate questions.",
    provenance: "Group source supplied by identity platform owner.",
    eventTime: "09:02",
    collectionTime: "09:11",
    processingTime: "09:12",
    health: "Degraded",
    supports: "Group relationship requires review.",
    limits: "Cannot establish exact effective state throughout the period.",
    access: "Identity, incident, recovery, evidence reviewers.",
    retention: "Through source recovery and historical reconciliation.",
  },
  {
    id: "PRES-E04",
    item: "Fictional service-health summary",
    purpose: "Support impact, continuity, containment side-effect, and recovery decisions.",
    provenance: "Service-health source supplied by service owner.",
    eventTime: "09:07",
    collectionTime: "09:08",
    processingTime: "09:09",
    health: "Healthy",
    supports: "No broad service interruption was confirmed at that time.",
    limits: "Does not prove no privacy, integrity, authorization, or limited-user effect.",
    access: "Incident, service, continuity, leadership reviewers.",
    retention: "Through service acceptance and lessons review.",
  },
  {
    id: "PRES-E05",
    item: "Fictional protected-data limitation record",
    purpose: "Preserve the Blind period and prevent unsupported data conclusions.",
    provenance: "Data-source health record supplied by data owner.",
    eventTime: "08:50-09:20",
    collectionTime: "09:22",
    processingTime: "09:24",
    health: "Blind",
    supports: "Protected-data status must remain Unknown for the period.",
    limits: "Does not prove access or no access.",
    access: "Data owner, privacy reviewer, incident lead, evidence coordinator.",
    retention: "Through source recovery, privacy acceptance, and closure review.",
  },
  {
    id: "PRES-E06",
    item: "Fictional supplier queue statement",
    purpose: "Support supplier, service, data-integrity, and recovery-wave questions.",
    provenance: "Supplier statement and local integration owner summary.",
    eventTime: "09:12",
    collectionTime: "09:14",
    processingTime: "09:15",
    health: "Conditional",
    supports: "A delayed integration and possible queue issue require reconciliation.",
    limits: "Does not prove supplier causation or duplicate records.",
    access: "Supplier owner, service owner, data owner, recovery lead.",
    retention: "Through queue reconciliation and corrective action.",
  },
  {
    id: "PRES-E07",
    item: "Fictional correction notice",
    purpose: "Preserve the change from unaffected to Unknown protected-data status.",
    provenance: "Approved incident communication version 3.2.",
    eventTime: "11:05",
    collectionTime: "11:06",
    processingTime: "11:07",
    health: "Healthy",
    supports: "The prior message was unsupported and was explicitly corrected.",
    limits: "Does not prove all recipients changed their decisions.",
    access: "Affected decision owners, communications, privacy, incident, archive reviewers.",
    retention: "Through acknowledgement and lessons learned.",
  },
  {
    id: "PRES-E08",
    item: "Fictional recovery-gate dashboard",
    purpose: "Support recovery expansion and closure-readiness decisions.",
    provenance: "Derived artifact linked to identity, service, data, supplier, source, and user evidence.",
    eventTime: "11:18",
    collectionTime: "11:18",
    processingTime: "11:19",
    health: "Conditional",
    supports: "Seven of ten clean-state gates pass.",
    limits: "Does not replace review of the underlying evidence.",
    access: "Recovery, incident, service, privacy, supplier, leadership reviewers.",
    retention: "Through closure and recovery-debt review.",
  },
];

const custodyLog = [
  ["09:00", "PRES-E01", "Identity owner", "Incident lead", "Initial review", "Evidence identity and purpose confirmed", "No content change"],
  ["09:06", "PRES-E02", "Session source owner", "Incident analyst", "Scope and containment review", "Session relationship confirmed", "No content change"],
  ["09:12", "PRES-E03", "Identity platform owner", "Evidence coordinator", "Source-health review", "Degraded status recorded", "Interpretation qualified"],
  ["09:24", "PRES-E05", "Data owner", "Privacy reviewer", "Blind-period preservation", "Data status changed to Unknown", "Limitation added"],
  ["10:15", "PRES-E06", "Supplier owner", "Recovery lead", "Queue and dependency review", "Conditional status retained", "No causation conclusion"],
  ["11:07", "PRES-E07", "Communications lead", "Affected decision owners", "Correction redistribution", "Prior message preserved", "Version 3.2 issued"],
  ["11:19", "PRES-E08", "Recovery lead", "Leadership reviewer", "Recovery decision support", "Seven-of-ten gate summary", "Underlying evidence links required"],
  ["12:10", "PRES-E03", "Source owner", "Identity reviewer", "Recovered historical review", "New records pending reconciliation", "Case remains open"],
];

const accessMatrix = [
  ["Incident lead", "All fictional decision-relevant evidence", "Coordinate response and decisions", "View, annotate, approve use", "Cannot override domain ownership or privacy limits"],
  ["Evidence coordinator", "Evidence register, custody, source health, transfer, retention", "Maintain preservation quality", "Administer metadata and review access", "Cannot change source content or conclusions silently"],
  ["Identity owner", "Identity, role, group, session evidence", "Answer identity and recovery questions", "View and validate identity records", "No unrelated user or data access"],
  ["Service owner", "Service, destination, continuity, user-impact evidence", "Support service decisions", "View and validate service records", "No unnecessary identity or protected-data detail"],
  ["Privacy reviewer", "Protected-data scope, access, sharing, retention, correction", "Protect privacy and approve limited use", "View necessary data evidence and metadata", "No unrelated technical evidence"],
  ["Supplier owner", "Supplier, integration, queue, local dependency evidence", "Coordinate provider response", "View bounded supplier records", "No unrelated internal architecture"],
  ["Recovery lead", "Clean-state, validation, source, service, identity, supplier evidence", "Plan and authorize recovery waves", "View decision-relevant evidence", "Cannot declare privacy or business acceptance alone"],
  ["Leadership reviewer", "Summaries, decisions, impact, risk, recovery, corrections", "Make mission and risk decisions", "View derived and bounded source evidence", "No raw detail without decision need"],
  ["Communications lead", "Approved facts, uncertainty, impact, guidance, corrections", "Create audience-specific messages", "View approved communication evidence", "No unrestricted evidence browsing"],
  ["Portfolio reader", "Fully invented educational artifacts only", "Learn evidence-preservation concepts", "View public-safe fictional summaries", "No real evidence or adapted incident material"],
];

const retentionPlan = [
  {
    category: "Active-response evidence",
    purpose: "Support fictional scope, containment, recovery, communication, and immediate decisions.",
    reviewTrigger: "Incident phase changes, source recovery, correction, or closure readiness.",
    owner: "Evidence coordinator and incident lead.",
    disposition: "Transition to closure archive, corrective-action record, or authorized removal according to fictional policy.",
    risk: "Over-retention may expose unnecessary identities, data, and operational detail.",
  },
  {
    category: "Identity and session evidence",
    purpose: "Support fictional authorization, effective-access, containment, eradication, and recovery questions.",
    reviewTrigger: "Identity acceptance, source reconciliation, observation completion, or reopen event.",
    owner: "Identity owner.",
    disposition: "Retain bounded records needed for corrective-action and audit learning; remove unnecessary detail.",
    risk: "Stale identity evidence may be misused outside the original purpose.",
  },
  {
    category: "Protected-data evidence",
    purpose: "Support fictional privacy, access, integrity, communication, and acceptance decisions.",
    reviewTrigger: "Source recovery, privacy decision, correction, closure, or changed policy purpose.",
    owner: "Data owner and privacy reviewer.",
    disposition: "Restrict, archive, transfer, or remove under fictional privacy authority.",
    risk: "Unnecessary copies or broad access create privacy harm.",
  },
  {
    category: "Supplier evidence",
    purpose: "Support fictional dependency, queue, data-flow, commitment, recovery, and corrective-action decisions.",
    reviewTrigger: "Supplier reconciliation, contract review, recovery acceptance, or closure.",
    owner: "Supplier relationship owner.",
    disposition: "Preserve bounded decision records and remove unrelated provider detail.",
    risk: "Supplier communications may contain sensitive or contractual information.",
  },
  {
    category: "Derived artifacts",
    purpose: "Support fictional dashboards, timelines, leadership briefs, scope, recovery, and lessons.",
    reviewTrigger: "Source correction, version change, source recovery, or decision reversal.",
    owner: "Artifact creator and evidence coordinator.",
    disposition: "Archive only when source links, versions, limitations, and corrections remain visible.",
    risk: "Summaries can outlive corrected source interpretations.",
  },
  {
    category: "Communication and correction records",
    purpose: "Support fictional accountability, version history, acknowledgement, and decision reconstruction.",
    reviewTrigger: "Correction completion, acknowledgement, lessons learned, or closure.",
    owner: "Communications lead.",
    disposition: "Preserve approved versions and correction history; remove unnecessary recipient detail.",
    risk: "Quiet edits or missing versions can distort the case record.",
  },
  {
    category: "Corrective-action evidence",
    purpose: "Support fictional ownership, due dates, validation, exercise results, and recurrence prevention.",
    reviewTrigger: "Action validation, overdue escalation, retest, or risk acceptance.",
    owner: "Program owner.",
    disposition: "Retain until the corrective action is validated and formally accepted.",
    risk: "Closing the incident may cause unresolved action evidence to disappear.",
  },
  {
    category: "Public portfolio artifact",
    purpose: "Teach fictional evidence-preservation concepts.",
    reviewTrigger: "Publication, revision, educator review, or safety concern.",
    owner: "Student author and educator.",
    disposition: "Publish only fully invented and non-operational content.",
    risk: "Sanitized real evidence may still reveal identities, systems, timelines, or response capability.",
  },
];

const validationCases = [
  ["PRES-T01", "Collect everything request", "A fictional analyst asks to preserve every available record without a bounded question.", "Require purpose, authority, scope, minimum necessary fields, period, owner, retention, and privacy review.", "Proportionality"],
  ["PRES-T02", "Single timestamp", "A fictional record shows processing time but not event or collection time.", "Preserve the timing limitation and avoid chronology conclusions unsupported by the record.", "Timeline accuracy"],
  ["PRES-T03", "Blind source", "A fictional data source is Blind during the key period.", "Preserve the Blind period, alternate evidence, owner, recovery plan, and Unknown conclusion.", "Source-health honesty"],
  ["PRES-T04", "Derived dashboard", "A fictional dashboard shows seven clean-state gates passing.", "Link it to source evidence, version, logic, limitations, and correction triggers.", "Traceability"],
  ["PRES-T05", "Quiet metadata edit", "A fictional evidence description changes after owner review.", "Create a correction record rather than silently replacing the prior metadata.", "Auditability"],
  ["PRES-T06", "Broad access", "A fictional communications role requests all raw evidence.", "Provide only approved facts and necessary evidence for message creation.", "Need to know"],
  ["PRES-T07", "Supplier transfer", "A fictional provider requests internal evidence unrelated to its dependency.", "Limit the transfer to purpose, scope, approved fields, period, confidentiality, and acknowledgement.", "Supplier privacy"],
  ["PRES-T08", "Retention without owner", "A fictional evidence set has no review date or disposition authority.", "Assign owner, purpose, review trigger, expiration, and disposition path.", "Lifecycle governance"],
  ["PRES-T09", "Source recovery", "A fictional source later supplies historical records that change interpretation.", "Preserve prior conclusions, issue corrections, update affected decisions, and reopen when required.", "Historical continuity"],
  ["PRES-T10", "Custody gap", "A fictional item was shared between teams without a transfer record.", "Record the gap, current holder, purpose, access, effect, and corrective action.", "Handling integrity"],
  ["PRES-T11", "Closure pressure", "A fictional case is closing while source reconciliation and retention decisions remain incomplete.", "Keep preservation obligations open and record debt, owners, dates, and reopen triggers.", "Closure quality"],
  ["PRES-T12", "Public portfolio", "A student plans to sanitize a real evidence register.", "Fail portfolio validation and invent every organization, source, item, handler, time, decision, and outcome.", "Confidentiality and safety"],
];

const preservationMetrics = [
  ["Purpose completeness", "What percentage of fictional evidence items have a documented decision question and non-purpose boundary?", "Evidence register, request records, owners, and decision links.", "A purpose statement can still be too broad."],
  ["Provenance completeness", "What percentage of fictional items identify source, owner, event time, collection time, processing time, and handling history?", "Evidence register and custody log.", "Some sources legitimately lack one timing field."],
  ["Source-health coverage", "What percentage of fictional evidence uses a time-bounded source-health rating?", "Source inventory, health history, limitations, and corrections.", "A rating may be too general for the exact field."],
  ["Access-review completion", "How often are fictional access lists reviewed against purpose and current response phase?", "Access matrix, review date, owner, removals, and exceptions.", "Formal review does not prove appropriate use."],
  ["Correction propagation time", "How long does fictional response take to update evidence metadata, conclusions, messages, dashboards, and decisions after correction?", "Correction record, affected artifacts, acknowledgements, and closure.", "Low-impact corrections differ from decision-changing corrections."],
  ["Retention-decision coverage", "What percentage of fictional evidence has purpose, owner, review trigger, duration, and disposition?", "Retention plan and closure review.", "A documented duration may still be excessive."],
  ["Custody-gap rate", "How often do fictional transfers, handlers, or access events lack complete records?", "Custody and transfer logs, incident notes, and corrective actions.", "Low recorded gaps may reflect weak detection."],
  ["Evidence-debt aging", "How long do fictional provenance, source, access, retention, transfer, correction, or archive gaps remain open?", "Debt register, owner, due date, risk, escalation, and validation.", "Some debt may be formally accepted and monitored."],
];

const commonMistakes = [
  ["Preserve everything", "A fictional team copies every available record because more evidence feels safer.", "Privacy, review burden, access risk, retention debt, and confusion increase.", "Tie every item to purpose, authority, scope, minimum necessary fields, owner, and duration."],
  ["Preservation becomes investigation authority", "A fictional responder assumes that preserving evidence authorizes broader searching or monitoring.", "The response exceeds its approved boundary.", "Keep preservation purpose and investigative authority separate."],
  ["One timestamp becomes chronology", "A fictional processing time is used as the event time.", "Sequence, causation, scope, and response timing may be wrong.", "Preserve event, collection, processing, review, and decision times separately."],
  ["Healthy source becomes perfect source", "A fictional source is called complete for every field because its platform is available.", "Field-level gaps and population limits disappear.", "State health for the exact period, population, and decision question."],
  ["Derived artifact replaces sources", "A fictional dashboard is treated as the original evidence.", "Reviewers cannot test logic, limitations, or corrections.", "Link every derived artifact to source evidence, version, assumptions, and owner."],
  ["Access follows curiosity", "A fictional responder views evidence because it may be interesting.", "Need-to-know, privacy, and accountability weaken.", "Require purpose-based access and periodic review."],
  ["Correction overwrites history", "A fictional metadata or interpretation change silently replaces the earlier record.", "Decision reconstruction becomes impossible.", "Preserve the prior version and create a correction record."],
  ["Retention means forever", "A fictional team keeps evidence indefinitely in case it is useful.", "Privacy and governance risk grow without purpose.", "Use time-bounded retention, review triggers, owner, and disposition."],
  ["Closure ends every evidence obligation", "A fictional incident closes while source recovery and corrective-action evidence remain open.", "Later records and lessons may be lost.", "Transition obligations into archive, corrective action, risk, or reopen processes."],
  ["Real evidence enters the portfolio", "A student sanitizes real logs, screenshots, alerts, emails, timelines, or custody records.", "Sensitive identities, systems, incidents, and capabilities may remain visible.", "Invent every source, record, owner, field, time, decision, and outcome."],
];

const labSteps = [
  ["1", "Define the preservation mission", "Document fictional purpose, authority, scope, privacy, confidentiality, source, retention, transfer, reporting, and safety boundaries.", "Evidence preservation charter.", "The charter explicitly excludes real collection, surveillance, or operational investigation."],
  ["2", "Build the source inventory", "List fictional source, owner, purpose, health, coverage, limitations, alternate evidence, recovery, and retention.", "Source inventory.", "Source health is time-bounded and question-specific."],
  ["3", "Create the evidence register", "Record fictional ID, item, purpose, provenance, times, health, supports, limitations, access, retention, and related decisions.", "Evidence register.", "Every item answers a bounded question."],
  ["4", "Build the chronology", "Separate fictional event, collection, processing, receipt, transfer, access, review, decision, correction, and archive times.", "Multi-time chronology.", "No timestamp silently substitutes for another."],
  ["5", "Record custody and access", "Document fictional handlers, viewers, transfers, purposes, permissions, acknowledgement, and corrections.", "Custody log and access matrix.", "Every access is purpose-based."],
  ["6", "Create retention and disposition", "Assign fictional category, owner, purpose, review trigger, duration, archive, restriction, transfer, and removal path.", "Retention plan.", "No keep forever default exists."],
  ["7", "Review evidence quality", "Score fictional relevance, authenticity, completeness, consistency, freshness, source health, chronology, reproducibility, privacy, and usefulness.", "Quality review matrix.", "Scores include evidence and limitations."],
  ["8", "Run corrections and source recovery", "Update fictional metadata, interpretations, derived artifacts, communications, and decisions when new records appear.", "Correction package.", "Prior versions remain visible."],
  ["9", "Validate twelve scenarios", "Test fictional broad requests, timing gaps, Blind sources, derived artifacts, quiet edits, broad access, supplier transfer, retention, recovery, custody, closure, and portfolio cases.", "Validation matrix.", "Cases protect evidence quality and privacy."],
  ["10", "Prepare the portfolio package", "Combine charter, inventory, register, chronology, custody, access, retention, transfer, quality, metrics, dashboard, leadership brief, debt, and reflection.", "Public-safe Evidence Preservation Package.", "No real evidence or adapted incident material appears."],
];

const quizQuestions = [
  {
    question: "What is the strongest first step in fictional evidence preservation?",
    choices: ["Preserve everything.", "Define the decision question, authority, scope, and minimum necessary evidence.", "Share all evidence with every responder.", "Keep all evidence forever."],
    answer: 1,
    explanation: "Purpose, authority, and scope prevent unnecessary or unauthorized preservation.",
  },
  {
    question: "A fictional record has only processing time. What is strongest?",
    choices: ["Use it as event time.", "Preserve the limitation and avoid unsupported chronology conclusions.", "Delete the record.", "Assume the event occurred immediately before processing."],
    answer: 1,
    explanation: "Different timing fields have different meanings.",
  },
  {
    question: "A fictional data source is Blind during the key period. What should the evidence record say?",
    choices: ["No access occurred.", "Access definitely occurred.", "The question remains Unknown, with the Blind period, owner, alternate evidence, and recovery plan preserved.", "The source should be called Healthy."],
    answer: 2,
    explanation: "Blind evidence supports neither presence nor absence.",
  },
  {
    question: "Why should a fictional derived dashboard link to source evidence?",
    choices: ["To make it longer.", "So reviewers can test logic, source health, limitations, versions, and corrections.", "To remove the need for ownership.", "To avoid retention rules."],
    answer: 1,
    explanation: "Derived artifacts should remain traceable to their source records.",
  },
  {
    question: "What is strongest when fictional evidence metadata changes?",
    choices: ["Silently overwrite it.", "Create a correction record preserving the prior version and affected decisions.", "Delete the original.", "Ignore the change."],
    answer: 1,
    explanation: "Corrections should preserve history and decision impact.",
  },
  {
    question: "Which fictional access principle is strongest?",
    choices: ["Anyone curious may view the evidence.", "Access is purpose-based, minimum necessary, approved, recorded, and reviewed.", "Leadership always sees every raw item.", "Communication staff need unrestricted access."],
    answer: 1,
    explanation: "Need-to-know and purpose-based access protect privacy and evidence integrity.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: ["Sanitize a real evidence register.", "Use real screenshots with fake names.", "Invent every organization, source, item, handler, time, decision, and outcome.", "Use real custody records without contacts."],
    answer: 2,
    explanation: "Complete fictionalization protects real identities, systems, incidents, and response capabilities.",
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
        Module A7
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

export default function EvidencePreservationConceptsPage() {
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
              Module A7
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Purpose, Provenance, Integrity, Access, Retention, and Privacy
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.7 Evidence Preservation Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams preserve decision-relevant
            evidence purpose, authorization, provenance, timing, integrity,
            source health, access, custody, retention, transfer, privacy,
            corrections, review, and reporting without teaching invasive
            collection techniques.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A7: Incident Response Lifecycle"
          lessonTitle="Evidence Preservation Concepts"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, identities, services, sources, records, evidence items, handlers, transfers, decisions, dates, and outcomes.",
            "I will distinguish fictional preservation from invasive collection, surveillance, operational forensics, unrestricted copying, or unauthorized investigation.",
            "I will tie every fictional evidence item to purpose, authority, scope, provenance, source health, access, retention, and decision usefulness.",
            "I will preserve fictional event, collection, processing, review, transfer, correction, and decision times separately.",
            "I will use fictional minimum-necessary access, explicit corrections, time-bounded retention, custody records, and public-safe boundaries.",
            "I will not access, copy, sanitize, upload, inspect, acquire, transfer, preserve, or publish any real log, screenshot, alert, email, device record, system record, organization, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="More Evidence Is Not Automatically Better Evidence"
        >
          <p className="leading-8">
            Fictional Northbridge receives a request to preserve every available
            record because the incident may be serious. The request has no
            decision question, time range, fields, owner, privacy boundary,
            retention rule, or access list. A broad preservation effort could
            expose unrelated users, overwhelm reviewers, create uncontrolled
            copies, and still fail to preserve the context needed for the real
            decision.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak preservation
              </p>
              <p className="mt-2 leading-7">
                “Keep everything forever in case someone needs it.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong preservation
              </p>
              <p className="mt-2 leading-7">
                “Preserve the minimum necessary fictional evidence for a
                bounded question under documented authority and lifecycle
                controls.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Evidence quality depends on purpose, context, provenance, timing,
            source health, integrity, access, and limitations—not just volume.
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
          title="Evidence Supports Every Response Decision"
        >
          <p className="leading-8">
            Fictional scope, containment, recovery, communication, privacy,
            leadership, closure, reopening, and lessons learned all depend on
            evidence. Weak provenance can make a true-looking record
            untrustworthy. Missing timing can distort chronology. Blind sources
            can create false reassurance. Broad access can expose private
            information. Silent corrections can erase accountability.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Decision integrity", "Fictional responders can explain which evidence supported the decision and what remained uncertain."],
              ["Privacy and governance", "Fictional preservation remains minimum necessary, purpose-based, authorized, time-bounded, and reviewable."],
              ["Historical continuity", "Fictional corrections, source recovery, transfers, and derived artifacts remain linked to prior decisions."],
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

        <SectionCard eyebrow="Core Framework" title="The P-R-E-S-E-R-V-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["P — Purpose", "Define the fictional question, decision, audience, deadline, and non-purpose boundary."],
              ["R — Rights and authority", "Confirm who may preserve, access, transfer, retain, correct, report, and approve."],
              ["E — Evidence scope", "Select minimum necessary fictional sources, fields, entities, periods, and relationships."],
              ["S — Source and provenance", "Record fictional source identity, owner, context, timing, health, and limitations."],
              ["E — Ensure integrity", "Preserve fictional versions, custody, access, corrections, derived links, and handling history."],
              ["R — Retain responsibly", "Assign fictional storage category, owner, review trigger, duration, archive, and disposition."],
              ["V — Validate usefulness", "Review fictional relevance, authenticity, completeness, consistency, freshness, privacy, and decision value."],
              ["E — Explain and evolve", "Report fictional supports and non-proof statements, then correct and reopen when evidence changes."],
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
              Decision-ready preservation statement
            </p>
            <p className="mt-2 leading-7">
              Preserve fictional role, session, group-source, service-health,
              data-source limitation, supplier-queue, correction, and
              recovery-gate records only for the defined scope, response,
              recovery, privacy, and corrective-action questions. Access,
              retention, derived use, corrections, and closure transitions
              remain owned and versioned.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Evidence Preservation"
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

        <SectionCard
          eyebrow="Instructional Section 1"
          title="Use a Ten-Stage Evidence Lifecycle"
        >
          <div className="grid gap-5">
            {evidenceLifecycle.map(([stage, question, output, gate]) => (
              <article
                key={stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">{stage}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Question</p>
                    <p className="mt-2 text-sm leading-6">{question}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Output</p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality gate</p>
                    <p className="mt-2 text-sm leading-6">{gate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Evaluate Ten Evidence-Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityDimensions.map(([dimension, question, evidence, limitation]) => (
              <article
                key={dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">{dimension}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Review Eight Fictional Evidence Sources"
        >
          <div className="grid gap-5">
            {sourceInventory.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.source}</h3>
                    <p className="mt-1 text-sm font-bold text-cyan-200">Owner: {item.owner}</p>
                  </div>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.health}
                  </span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Coverage", item.coverage],
                    ["Limitations", item.limits],
                    ["Retention", item.retention],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.source}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Build an Eight-Item Evidence Register"
        >
          <div className="grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.item}</h3>
                  <span className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">
                    {item.health}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[
                    ["Event time", item.eventTime],
                    ["Collection time", item.collectionTime],
                    ["Processing time", item.processingTime],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 font-mono text-sm text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Provenance", item.provenance],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Access", item.access],
                    ["Retention", item.retention],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Preserve an Eight-Event Custody Log"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Time", "Evidence", "From", "To", "Purpose", "Result", "Change"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {custodyLog.map(([time, evidence, from, to, purpose, result, change]) => (
                  <tr key={`${time}-${evidence}`}>
                    <td className="px-4 py-4 align-top font-mono text-white">{time}</td>
                    <td className="px-4 py-4 align-top font-mono text-cyan-200">{evidence}</td>
                    <td className="px-4 py-4 align-top text-slate-300">{from}</td>
                    <td className="px-4 py-4 align-top text-slate-300">{to}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{purpose}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{result}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Apply a Ten-Role Access Matrix"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Role", "Evidence scope", "Purpose", "Permitted use", "Boundary"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {accessMatrix.map(([role, scope, purpose, use, boundary]) => (
                  <tr key={role}>
                    <td className="px-4 py-4 align-top font-bold text-white">{role}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{scope}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{purpose}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{use}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{boundary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Build an Eight-Category Retention Plan"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {retentionPlan.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">{item.category}</h3>
                <div className="mt-4 grid gap-4">
                  {[
                    ["Purpose", item.purpose],
                    ["Review trigger", item.reviewTrigger],
                    ["Owner", item.owner],
                    ["Disposition", item.disposition],
                    ["Risk", item.risk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.category}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Validate Twelve Preservation Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Case", "Type", "Fictional input", "Expected result", "Quality protected"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(([id, type, input, expected, protects]) => (
                  <tr key={id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">{id}</td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">{type}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{input}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{expected}</td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">{protects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Measure Eight Preservation Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {preservationMetrics.map(([metric, question, evidence, limitation]) => (
              <article
                key={metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{metric}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Preservation Architecture"
          title="Northbridge Evidence-to-Decision Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches evidence governance
            without real logs, screenshots, devices, identities, systems,
            suppliers, collection methods, or incident records.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Purpose inputs", "Question, decision, audience, deadline, non-purpose"],
                ["Authority inputs", "Owner, approver, privacy, policy, scope, escalation"],
                ["Source inputs", "Identity, service, data, supplier, communication, recovery"],
                ["Quality inputs", "Provenance, timing, health, integrity, completeness, limitations"],
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
                Fictional Preservation Core
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Scope", "Minimum necessary entities, fields, periods, sources"],
                  ["Identify", "Evidence ID, source, owner, provenance, timing"],
                  ["Qualify", "Health, completeness, consistency, limitations"],
                  ["Protect", "Access, custody, version, correction, transfer"],
                  ["Retain", "Purpose, owner, review trigger, duration, disposition"],
                  ["Use", "Supports, non-proof, confidence, decision link"],
                  ["Correct", "Prior version, new evidence, affected decisions"],
                  ["Transition", "Archive, debt, residual risk, reopen trigger"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Analyst output", "Evidence register, chronology, limitations, questions"],
                ["Governance output", "Access, custody, transfer, retention, correction"],
                ["Leadership output", "Decision evidence, uncertainty, risk, obligations"],
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
          title="Fake Northbridge Evidence Preservation Dashboard"
          subtitle="Fictional purpose, provenance, source health, access, custody, retention, corrections, transfers, evidence debt, and closure obligations."
          metrics={[
            {
              label: "Registered fictional evidence items",
              value: "8",
              note: "Every item has purpose, provenance, timing, health, supports, limitations, access, and retention.",
            },
            {
              label: "Open fictional source limitations",
              value: "3",
              note: "Group evidence is Degraded, protected-data evidence is Blind, and supplier evidence is Conditional.",
            },
            {
              label: "Open fictional evidence debt",
              value: "6",
              note: "Source reconciliation, transfer acknowledgement, access review, retention approval, derived-link review, and closure transition remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unsupported Broad Preservation Request"
          severity="High"
          time="12:22 PM"
          source="Fake Northbridge Evidence Governance Console"
          details="A fictional request asks responders to preserve every available identity, service, user, supplier, data, and communication record without a bounded decision question, time range, field list, owner, privacy review, access plan, retention rule, or disposition path."
          recommendation="Pause the fictional request. Define purpose, authority, minimum necessary scope, source owners, privacy conditions, access, retention, transfer, reporting, and closure obligations before preservation proceeds."
        />

        <FakeLogPanel
          title="Fake Evidence Preservation Timeline"
          logs={[
            "09:00 REGISTER item='PRES-E01' purpose='role-state'",
            "09:06 REGISTER item='PRES-E02' purpose='session-scope'",
            "09:12 SOURCE item='PRES-E03' health='degraded'",
            "09:24 SOURCE item='PRES-E05' health='blind'",
            "10:15 TRANSFER item='PRES-E06' status='conditional'",
            "11:07 CORRECTION item='PRES-E07' version='3.2'",
            "11:19 DERIVED item='PRES-E08' source-links='required'",
            "12:00 ACCESS review='pending'",
            "12:10 SOURCE recovery='historical-records-pending'",
            "12:22 ALERT request='overbroad'",
            "12:25 RETENTION review='scheduled'",
            "12:30 DEBT open='6'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What Preserved Evidence Supports—and What It Does Not Prove"
        >
          <div className="grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={`matrix-${item.id}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.item}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limits}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Provenance and health
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.provenance} Current fictional health: {item.health}.
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Governance
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      Access: {item.access} Retention: {item.retention}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Preservation Decision Is Best Supported?"
          question="A fictional responder asks to preserve every available record because the incident may expand. Which response best fits the evidence-preservation model?"
          evidence={[
            "The current fictional scope confirms one identity, one session, one service, and one destination.",
            "Device, supplier, and limited user-impact relationships remain possible.",
            "Protected-data access remains Unknown because a source is Blind.",
            "Group evidence is Degraded.",
            "The request has no bounded decision question, fields, period, owner, privacy review, retention rule, access list, or disposition path.",
          ]}
          options={[
            "Pause the broad request and define fictional purpose, authority, minimum necessary scope, source owners, timing, privacy, access, custody, retention, reporting, and closure obligations.",
            "Preserve every fictional record indefinitely.",
            "Preserve nothing because some sources are weak.",
            "Give every responder unrestricted access so review is faster.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves decision-relevant evidence while protecting authority, privacy, integrity, access, and lifecycle governance."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Preservation Errors">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article
                key={mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Evidence Preservation Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, acquire, inspect, transfer, preserve, monitor, or
            publish any real log, screenshot, alert, email, device record,
            system record, organization, source, incident, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Broad Preserve-Everything Request"
          scenario="Fictional Northbridge receives a request to preserve every identity, service, user, supplier, data, and communication record. The request has no decision question, time period, field scope, privacy review, access list, retention rule, or disposition owner."
          choices={[
            {
              label: "Choice A",
              response: "Pause the fictional request and require purpose, authority, minimum necessary scope, source owners, timing, privacy, custody, access, retention, reporting, and closure obligations.",
              outcome: "Best defensive choice. Preservation should be proportionate, authorized, useful, and governed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Preserve every fictional record indefinitely.",
              outcome: "Weak. Volume, privacy exposure, uncontrolled access, and retention debt increase without improving the decision.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Allow anyone on the response team to decide what they want.",
              outcome: "Weak. Authority, scope, consistency, and accountability disappear.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Recovered Historical Evidence Changes the Conclusion"
          scenario="After fictional closure-readiness review begins, a Recovering source supplies historical group records that conflict with the prior effective-access interpretation."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the fictional prior record and conclusion, register the recovered evidence, qualify source health, create a correction, identify affected scope, recovery, communication, and closure decisions, obtain owner acknowledgement, and reopen when required.",
              outcome: "Best choice. Historical continuity requires visible correction and decision reassessment.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Replace the old record so the file looks consistent.",
              outcome: "Weak. Silent replacement destroys reconstructability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the recovered record because the case is almost closed.",
              outcome: "Weak. Closure pressure does not remove evidence obligations.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend an Evidence Preservation Plan before a Governance Board"
        >
          <p className="leading-8">
            Fictional Northbridge has Healthy role, session, service, and change
            evidence; Degraded group evidence; Blind protected-data evidence;
            Conditional supplier and user evidence; a corrected communication;
            and a derived recovery dashboard. The board asks what should be
            preserved, who should access it, how long it should remain, and what
            must happen when sources recover.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend purpose and scope", "Explain fictional decision questions, non-purpose boundaries, minimum necessary sources, fields, periods, entities, and exclusions."],
              ["Defend provenance and timing", "Explain fictional source identity, owner, event, collection, processing, transfer, review, correction, and decision times."],
              ["Defend source health", "Explain fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence effects."],
              ["Defend access and custody", "Explain fictional need to know, permitted use, handlers, transfers, acknowledgements, corrections, and independent review."],
              ["Defend retention and disposition", "Explain fictional purpose, owner, review trigger, duration, archive, restriction, transfer, removal, debt, and residual risk."],
              ["Defend correction and reopening", "Explain fictional prior versions, new evidence, affected decisions, redistributed reports, acknowledgements, closure impact, and reopen triggers."],
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
              Produce a fictional preservation charter, source inventory,
              evidence register, multi-time chronology, custody log, access
              matrix, transfer record, retention plan, derived-artifact map,
              quality review, correction record, source-recovery plan,
              validation matrix, metrics dashboard, evidence-debt register,
              leadership brief, closure transition, reopen triggers, and public
              portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Evidence Preservation Checklist"
          items={[
            "I can distinguish fictional evidence preservation from collection, surveillance, operational forensics, unrestricted copying, and unauthorized investigation.",
            "I can define fictional purpose, authority, scope, minimum necessary evidence, owner, deadline, and non-purpose boundary.",
            "I can record fictional provenance, event time, collection time, processing time, review time, correction time, and decision time separately.",
            "I can rate fictional evidence relevance, authenticity, completeness, consistency, freshness, source health, chronology, reproducibility, privacy, and usefulness.",
            "I can preserve fictional supports, limitations, non-proof statements, related evidence, and affected decisions.",
            "I can create fictional custody, transfer, acknowledgement, access, correction, and derived-artifact records.",
            "I can apply fictional need-to-know and minimum-necessary access.",
            "I can create fictional retention rules with purpose, owner, review trigger, duration, disposition, debt, and residual risk.",
            "I can preserve fictional prior versions and create visible corrections rather than silent edits.",
            "I can reassess fictional decisions when sources recover or conflicting evidence appears.",
            "I can keep fictional evidence obligations visible through closure, corrective action, archive, risk, and reopening.",
            "I can create a completely fictional preservation artifact without exposing real records, systems, identities, incidents, or response capabilities.",
          ]}
        />

        <MiniQuiz
          title="A7.7 Mini Quiz: Evidence Preservation Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Evidence Preservation Package for the Northbridge Student-Support Cooperative. Include preservation mission, purpose, authority, scope, non-purpose boundary, privacy boundary, safety boundary, source inventory, source owner, source health, coverage, limitations, alternate evidence, recovery state, evidence ID, item description, provenance, event time, collection time, processing time, receipt time, transfer time, review time, correction time, decision time, supports, non-proof statements, access, custody, transfer, acknowledgement, storage category, retention purpose, retention trigger, review date, disposition, derived artifacts, source links, versions, corrections, affected decisions, quality dimensions, relevance, authenticity, completeness, consistency, freshness, chronology, reproducibility, privacy proportionality, decision usefulness, access matrix, custody log, transfer record, retention plan, validation cases, purpose completeness, provenance completeness, source-health coverage, access-review completion, correction propagation time, retention-decision coverage, custody-gap rate, evidence-debt aging, dashboard, leadership brief, evidence debt, residual risk, closure transition, reopen triggers, lessons, reflection, and a statement that every organization, identity, source, item, handler, transfer, time, decision, date, and outcome is invented."
          tips={[
            "Tie every fictional evidence item to a bounded decision question and non-purpose boundary.",
            "Preserve fictional provenance, timing, source health, limitations, access, custody, retention, and corrections together.",
            "Use minimum necessary fictional fields, recipients, periods, and duration.",
            "Link fictional dashboards, timelines, summaries, and reports back to source evidence and versions.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Lessons Learned and Corrective Actions?"
        >
          <p className="leading-8">
            Before moving to A7.8, rate your readiness from 1 to 5 for purpose,
            authority, scope, provenance, timing, source health, integrity,
            access, custody, transfers, retention, corrections, derived
            artifacts, privacy, quality, closure transition, debt, reopening,
            and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional preserve everything is not a professional default.",
              "I can create a fictional evidence register with purpose, provenance, timing, health, supports, limitations, access, and retention.",
              "I can separate fictional event, collection, processing, review, correction, and decision times.",
              "I can preserve fictional Blind, Degraded, Conditional, and Recovering source limitations.",
              "I can create fictional access, custody, transfer, acknowledgement, and correction records.",
              "I can design fictional purpose-based retention and disposition.",
              "I can reassess fictional decisions when evidence or source health changes.",
              "I can produce a safe fictional evidence package without adapting real logs, screenshots, emails, alerts, or custody records.",
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
            Record one fictional purpose statement, one non-purpose boundary,
            one provenance record, one source-health limitation, one access
            restriction, one retention trigger, one correction trigger, and one
            question you will carry into A7.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional evidence preservation is not permission for invasive collection, surveillance, unrestricted copying, or unauthorized investigation.",
            "Every fictional evidence item should have a purpose, authority, scope, source, provenance, timing, health, owner, access, retention, and decision link.",
            "Event, collection, processing, transfer, review, correction, and decision times should remain distinct.",
            "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states change what fictional evidence can support.",
            "Evidence quality includes relevance, authenticity, completeness, consistency, freshness, chronology, reproducibility, privacy proportionality, and decision usefulness.",
            "Fictional custody, transfers, access, versions, corrections, and derived artifacts should remain reconstructable.",
            "Minimum necessary and need-to-know principles protect fictional privacy and reduce evidence debt.",
            "Fictional retention should be purpose-based, time-bounded, owned, reviewed, and connected to disposition.",
            "Source recovery and corrected evidence may require fictional decision updates, communication corrections, closure changes, or reopening.",
            "Every CyberShield evidence artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real records, systems, incidents, or response capabilities.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A7
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how fictional incident teams turn evidence, decisions,
            communication, containment, recovery, validation, and observation
            into lessons learned, corrective actions, owners, due dates,
            validation tests, governance improvements, and measurable program
            change.
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