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
const previousLesson = `${modulePath}/preparation-and-playbook-design`;
const nextLesson = `${modulePath}/containment-strategy`;

const objectives = [
  "Distinguish fictional alerts, events, issues, source-health failures, suspected incidents, confirmed incidents, and non-incident conditions without forcing early certainty.",
  "Build fictional incident scope using identities, devices, services, destinations, data, suppliers, users, dependencies, time periods, evidence, source health, confidence, exclusions, and owner statements.",
  "Separate fictional confirmed, possibly affected, unaffected, unknown, excluded, and out-of-scope categories while preserving the evidence and limitations behind each classification.",
  "Maintain a fictional scope-change log with version, trigger, evidence, source health, owner, severity, priority, communication, containment, recovery, and reassessment consequences.",
  "Create a portfolio-ready fictional Detection and Scoping Package containing an activation record, evidence matrix, chronology, entity register, relationship map, hypothesis register, source-health map, scope statement, change log, validation cases, dashboard, leadership brief, and reflection.",
];

const vocabulary = [
  ["Alert", "A fictional signal that a condition may deserve review; it does not automatically prove an incident."],
  ["Event", "A fictional recorded occurrence such as a session, change, service transition, identity update, source-health transition, or user report."],
  ["Issue", "A fictional condition requiring attention that may belong to service management, source recovery, privacy review, supplier coordination, identity governance, or another workflow."],
  ["Suspected incident", "A fictional response state in which evidence supports coordinated review but not a fully confirmed conclusion."],
  ["Confirmed incident", "A fictional response state supported by sufficient evidence that an organization-defined harmful, unauthorized, or materially disruptive condition occurred."],
  ["Activation decision", "A fictional choice to continue routine triage, activate incident coordination, involve specialists, escalate leadership, begin source recovery, or use another workflow."],
  ["Initial scope", "The first fictional evidence-supported description of confirmed, possible, unknown, excluded, unaffected, and out-of-scope categories."],
  ["Scope statement", "A fictional versioned description of affected entities, periods, relationships, confidence, evidence, source health, exclusions, assumptions, and unresolved questions."],
  ["Confirmed affected", "A fictional category supported by sufficient evidence for the exact conclusion being stated."],
  ["Possibly affected", "A fictional category for something connected by evidence or dependency but not yet supported strongly enough for confirmation."],
  ["Unaffected", "A fictional category supported by relevant Healthy evidence showing the item does not meet the incident condition within the defined boundary and period."],
  ["Unknown", "A fictional category used when evidence is missing, Blind, Degraded, conflicting, incomplete, delayed, or not yet reviewed."],
  ["Excluded", "A fictional category for evidence-supported items removed from the current incident condition because another explanation or workflow fits better."],
  ["Out of scope", "A fictional category for items not included in the current review boundary."],
  ["Scope boundary", "A fictional limit defining which entities, relationships, periods, evidence, and questions belong to the response."],
  ["Scope confidence", "A fictional conclusion-specific judgment about how complete and reliable the current scope is."],
  ["Scope hypothesis", "A fictional testable explanation describing how identities, services, devices, data, suppliers, users, or periods may be connected."],
  ["Scope expansion", "A fictional evidence-supported increase in affected or possibly affected identities, devices, services, data, suppliers, users, dependencies, or time."],
  ["Scope contraction", "A fictional evidence-supported narrowing after alternatives, Healthy evidence, validation, or owner review remove items."],
  ["Relationship map", "A fictional model connecting identity, device, service, destination, data, user, source, supplier, dependency, approval, change, and time."],
  ["Chronology", "A fictional ordered record of event, collection, processing, report, decision, action, validation, and communication times."],
  ["Scope-change trigger", "A fictional new evidence, source-health, relationship, impact, owner, supplier, data, time, validation, or recovery condition requiring reassessment."],
  ["Alternative explanation", "A fictional plausible expected, technical, timing, source-health, change, supplier, ownership, or recovery explanation tested against evidence."],
  ["Non-proof statement", "A fictional statement describing what an alert, record, owner claim, source-health condition, or relationship does not prove."],
];

const classificationModel = [
  {
    category: "Alert",
    definition: "A fictional signal that a condition may deserve review.",
    threshold: "One or more signals, reports, service symptoms, or source conditions.",
    owner: "Analyst or triage owner.",
    next: "Choose routine triage, source recovery, service review, privacy review, or incident coordination.",
    nonProof: "Does not prove intent, impact, authorization, or scope.",
  },
  {
    category: "Event",
    definition: "A fictional occurrence recorded by a source or reported by a person.",
    threshold: "A traceable record with source, timing, provenance, and meaning.",
    owner: "Source owner and analyst.",
    next: "Determine whether it supports a defender question or expected activity.",
    nonProof: "An event can be normal, expected, delayed, duplicated, or misunderstood.",
  },
  {
    category: "Issue",
    definition: "A fictional condition requiring attention but not necessarily incident response.",
    threshold: "Evidence of service, source, ownership, policy, supplier, privacy, or operational problems.",
    owner: "Appropriate service, source, privacy, supplier, identity, or program owner.",
    next: "Route to the correct workflow while preserving incident relevance.",
    nonProof: "A meaningful issue is not automatically an incident.",
  },
  {
    category: "Suspected incident",
    definition: "A fictional condition with enough evidence or coordination need to justify structured incident response.",
    threshold: "Supported observation, relevant scope, potential consequence, source-health review, and bounded questions.",
    owner: "Incident lead with specialists and service owners.",
    next: "Confirm, narrow, reclassify, contain, monitor, or transfer.",
    nonProof: "Suspected does not mean confirmed harmful activity.",
  },
  {
    category: "Confirmed incident",
    definition: "A fictional condition meeting documented evidence and impact criteria.",
    threshold: "Sufficient evidence for the exact harmful, unauthorized, disruptive, privacy, integrity, or mission conclusion.",
    owner: "Incident lead with required authorities.",
    next: "Coordinate containment, communication, preservation, recovery, and improvement.",
    nonProof: "Confirmation of one condition does not prove complete scope, intent, or final impact.",
  },
  {
    category: "Non-incident condition",
    definition: "A fictional alert or issue explained by expected activity, source defect, service condition, approved change, duplicate delivery, or another workflow.",
    threshold: "Relevant Healthy evidence, owner confirmation, scope match, timing match, and break-condition review.",
    owner: "Analyst with the appropriate owner.",
    next: "Document reclassification, assign fixes, and define reopen triggers.",
    nonProof: "Does not prove the alert was useless or future similar activity is safe.",
  },
];

const scopeDimensions = [
  ["Identity", "Which identities, sponsors, roles, groups, approvals, sessions, lifecycle states, and effective-access relationships are involved?", "Identity, role, group, approval, extension, session, sponsor, owner, and source-health records.", "Treating an identity as proof of the person controlling every action.", "Identity owner"],
  ["Device", "Which devices, categories, ownership states, management states, service relationships, and sessions are involved?", "Device inventory, session, management, service, owner, change, and source-health records.", "Assuming every device associated with an identity is affected.", "Device owner"],
  ["Service", "Which services, administrative functions, workflows, dependencies, owners, changes, and recovery states are involved?", "Service catalog, health, change, dependency, owner, continuity, and recovery records.", "Treating criticality as proof of current impact.", "Service owner"],
  ["Destination", "Which application area, administrative destination, data location, supplier connection, or service endpoint is relevant?", "Session, service, destination, supplier, change, and source-health records.", "Grouping distinct destinations under one broad label.", "Service or infrastructure owner"],
  ["Data", "Which data categories, user groups, sensitivity levels, stores, transfers, or integrity concerns are involved?", "Data catalog, application, service, access, change, owner, privacy, and integrity records.", "Claiming data access from a service session alone.", "Data owner and privacy reviewer"],
  ["User impact", "Which students, staff, families, partners, or support workflows experienced confirmed, possible, unknown, or no impact?", "User reports, service health, workflow status, owner statements, continuity, errors, and communication.", "Using one report as complete population impact.", "Service and continuity owners"],
  ["Supplier", "Which providers, integrations, support paths, data exchanges, dependencies, and response commitments are involved?", "Supplier register, integration map, service dependency, owner communication, source health, and timing.", "Treating a supplier statement as complete local evidence.", "Supplier owner"],
  ["Time", "Which start, end, observation, Blind, change, session, approval, impact, recovery, and validation periods matter?", "Event, collection, processing, report, decision, action, validation, communication, and source-health times.", "Using processing time as event time.", "Incident lead and source owners"],
  ["Dependency", "Which identity, service, infrastructure, source, supplier, data, communication, continuity, and recovery dependencies may change scope?", "Architecture, service catalog, owner statements, change, supplier, source, continuity, and recovery records.", "Ignoring indirect mission or recovery dependencies.", "Service, infrastructure, continuity, and recovery owners"],
  ["Evidence coverage", "Which sources, populations, fields, periods, schemas, parsers, queues, Blind periods, conflicts, and recovery states limit scope?", "Source inventory, health, completeness, freshness, field coverage, alternate evidence, and recovery plans.", "Calling something unaffected when the required source is Blind.", "Source owners and evidence coordinator"],
];

const categories = [
  {
    category: "Confirmed affected",
    standard: "Evidence supports that the item meets the exact incident condition being stated.",
    example: "One fictional session continued after approval expiration and reached the administrative destination.",
    required: "Evidence IDs, relationship, time, source health, confidence, owner, and non-proof statement.",
    reassess: "Reassess when source recovery, alternatives, corrected mappings, or owner validation change the conclusion.",
  },
  {
    category: "Possibly affected",
    standard: "Evidence supports a meaningful relationship or dependency, but confirmation is incomplete.",
    example: "A second fictional device shares the identity and period, but session evidence is Conditional.",
    required: "Why possible, evidence needed, source limitation, owner, deadline, and decision consequence.",
    reassess: "Move to confirmed, unaffected, excluded, unknown, or out of scope as evidence changes.",
  },
  {
    category: "Unaffected",
    standard: "Relevant Healthy evidence supports that the item does not meet the condition within the defined boundary and period.",
    example: "A fictional service has complete session evidence showing no relationship during the scoped period.",
    required: "Coverage, period, condition tested, evidence IDs, source health, confidence, and limitations.",
    reassess: "Reopen when period, source health, evidence, or incident condition changes.",
  },
  {
    category: "Unknown",
    standard: "Evidence is unavailable, incomplete, Blind, Degraded, conflicting, delayed, or not reviewed.",
    example: "A supplier integration may be related, but supplier and local evidence are unavailable.",
    required: "Missing evidence, affected question, owner, alternate evidence, deadline, recovery path, and risk.",
    reassess: "Unknown must have an owner and future decision point.",
  },
  {
    category: "Excluded",
    standard: "Evidence supports a different explanation or workflow outside the current incident condition.",
    example: "A change record fully explains one service event within matching time, owner, purpose, destination, and scope.",
    required: "Exclusion reason, evidence, owner validation, break conditions, expiration, and reopen trigger.",
    reassess: "Return to review when any matching field or source-health condition changes.",
  },
  {
    category: "Out of scope",
    standard: "The item is outside the current boundary and not required to answer the response questions.",
    example: "An unrelated fictional service with no identity, data, dependency, supplier, time, or evidence relationship.",
    required: "Boundary reason, owner, relationship check, and condition that would bring it into scope.",
    reassess: "Move into possible or unknown scope when a new relationship appears.",
  },
];

const evidenceRecords = [
  {
    id: "SCOPE-E01",
    source: "Fictional SIEM alert",
    eventTime: "08:58",
    collectionTime: "08:59",
    processingTime: "09:00",
    observation: "Temporary recovery role remains Active after approval_end for identity NB-ID-042.",
    supports: "A time-sensitive stale-authority question exists.",
    limits: "Does not prove harmful intent, exercised privilege, service impact, or complete scope.",
  },
  {
    id: "SCOPE-E02",
    source: "Fictional session source",
    eventTime: "09:04",
    collectionTime: "09:05",
    processingTime: "09:06",
    observation: "Session NB-SES-881 connects NB-ID-042 to service NB-SVC-07 and destination coordination-admin.",
    supports: "The identity, service, destination, session, and period are related.",
    limits: "Does not prove unauthorized use, modification, data exposure, or user impact.",
  },
  {
    id: "SCOPE-E03",
    source: "Fictional group source",
    eventTime: "09:02",
    collectionTime: "09:11",
    processingTime: "09:12",
    observation: "Recovery-admin group remains Active, but the source is Degraded and synchronization is delayed.",
    supports: "Effective-access uncertainty remains relevant.",
    limits: "Does not prove exact group state at every minute.",
  },
  {
    id: "SCOPE-E04",
    source: "Fictional service-health source",
    eventTime: "09:07",
    collectionTime: "09:08",
    processingTime: "09:09",
    observation: "NB-SVC-07 remains available with no confirmed error increase or user-impact signal.",
    supports: "Current service disruption is not confirmed.",
    limits: "Does not prove authorization, privacy, integrity, or historical safety.",
  },
  {
    id: "SCOPE-E05",
    source: "Fictional user report",
    eventTime: "09:09",
    collectionTime: "09:10",
    processingTime: "09:10",
    observation: "One staff user reports an unexpected delay in the Student Assistance Coordination Service.",
    supports: "A user-experience question deserves review.",
    limits: "One report does not prove broad impact or connection to the identity event.",
  },
  {
    id: "SCOPE-E06",
    source: "Fictional supplier notice",
    eventTime: "09:12",
    collectionTime: "09:14",
    processingTime: "09:15",
    observation: "Supplier reports delayed responses on an integration used by NB-SVC-07.",
    supports: "A supplier dependency may explain or contribute to the user report.",
    limits: "Does not prove the supplier caused the stale-authority condition or service impact.",
  },
  {
    id: "SCOPE-E07",
    source: "Fictional device source",
    eventTime: "09:03",
    collectionTime: "09:17",
    processingTime: "09:18",
    observation: "NB-ID-042 has sessions from managed-laptop and support-console; source completeness is Conditional.",
    supports: "Two device categories may require relationship review.",
    limits: "Does not prove both devices were used in the relevant session.",
  },
  {
    id: "SCOPE-E08",
    source: "Fictional change source",
    eventTime: "08:20",
    collectionTime: "08:21",
    processingTime: "08:22",
    observation: "Approved recovery change covers database reconciliation from 08:15 to 08:55 but not coordination-admin after 09:00.",
    supports: "The change is a partial alternative but not a complete match.",
    limits: "Does not prove later activity was unauthorized.",
  },
  {
    id: "SCOPE-E09",
    source: "Fictional privacy review",
    eventTime: "09:22",
    collectionTime: "09:23",
    processingTime: "09:24",
    observation: "No evidence confirms access to protected records; the required data-access source is Blind for 08:50 to 09:20.",
    supports: "Data access and exposure remain Unknown.",
    limits: "Blind evidence cannot support either access or no-access conclusions.",
  },
  {
    id: "SCOPE-E10",
    source: "Fictional service catalog",
    eventTime: "07:30",
    collectionTime: "07:31",
    processingTime: "07:32",
    observation: "NB-SVC-07 depends on supplier integration NB-SUP-03 and identity service NB-ID-SVC-02.",
    supports: "Supplier and identity dependencies belong in possible or unknown scope.",
    limits: "Dependency does not prove the dependent components are affected.",
  },
];

const relationshipMap = [
  ["Identity to role", "NB-ID-042", "Temporary recovery role", "SCOPE-E01", "Confirmed relationship", "Assignment does not prove exercised authority."],
  ["Identity to session", "NB-ID-042", "NB-SES-881", "SCOPE-E02", "Confirmed relationship", "Identity evidence does not prove the person controlling the session."],
  ["Session to service", "NB-SES-881", "NB-SVC-07", "SCOPE-E02", "Confirmed relationship", "Service access does not prove harmful effect."],
  ["Session to destination", "NB-SES-881", "coordination-admin", "SCOPE-E02", "Confirmed relationship", "Destination does not prove a configuration change."],
  ["Identity to group", "NB-ID-042", "recovery-admin", "SCOPE-E03", "Conditional relationship", "Group source is Degraded."],
  ["Service to user report", "NB-SVC-07", "one staff delay report", "SCOPE-E05", "Possible relationship", "The report may have another cause."],
  ["Service to supplier", "NB-SVC-07", "NB-SUP-03", "SCOPE-E06 and SCOPE-E10", "Confirmed dependency; impact unknown", "Supplier delay does not prove local service impact."],
  ["Identity to devices", "NB-ID-042", "managed-laptop and support-console", "SCOPE-E07", "Possible relationship", "Source completeness is Conditional."],
  ["Recovery change to session", "NB-CHG-114", "NB-SES-881", "SCOPE-E08", "Partial alternative", "Time and destination do not fully match."],
  ["Service to protected data", "NB-SVC-07", "protected student-support records", "SCOPE-E09", "Service dependency; access unknown", "Data-access source is Blind."],
];

const entityRegister = [
  {
    entity: "NB-ID-042",
    type: "Identity",
    category: "Confirmed affected",
    reason: "Role and session evidence connect the identity to the stale-authority condition.",
    evidence: "SCOPE-E01 and SCOPE-E02",
    confidence: "High relationship confidence; Moderate authorization confidence.",
    owner: "Identity owner.",
    nextQuestion: "Did a valid matching extension exist, and which sessions remained active?",
  },
  {
    entity: "NB-SES-881",
    type: "Session",
    category: "Confirmed affected",
    reason: "Session occurred after approval_end and reached the administrative destination.",
    evidence: "SCOPE-E02",
    confidence: "High observation confidence.",
    owner: "Identity and service owners.",
    nextQuestion: "What activity occurred, and what state followed authorized containment?",
  },
  {
    entity: "NB-SVC-07",
    type: "Service",
    category: "Confirmed related; impact unknown",
    reason: "The session reached the service, but service health shows no confirmed broad impact.",
    evidence: "SCOPE-E02 and SCOPE-E04",
    confidence: "High relationship confidence; Moderate impact confidence.",
    owner: "Service owner.",
    nextQuestion: "Did the session affect configuration, users, privacy, integrity, or recovery?",
  },
  {
    entity: "coordination-admin",
    type: "Destination",
    category: "Confirmed affected",
    reason: "The session reached this administrative destination after approval expiration.",
    evidence: "SCOPE-E02",
    confidence: "High relationship confidence.",
    owner: "Service owner.",
    nextQuestion: "Did the session only view status, or did any state change occur?",
  },
  {
    entity: "managed-laptop",
    type: "Device category",
    category: "Possibly affected",
    reason: "Identity relationship exists, but device-source completeness is Conditional.",
    evidence: "SCOPE-E07",
    confidence: "Low to Moderate.",
    owner: "Device owner.",
    nextQuestion: "Was this device associated with NB-SES-881 during the relevant period?",
  },
  {
    entity: "support-console",
    type: "Device category",
    category: "Possibly affected",
    reason: "Identity relationship exists, but session-to-device linkage is incomplete.",
    evidence: "SCOPE-E07",
    confidence: "Low to Moderate.",
    owner: "Infrastructure owner.",
    nextQuestion: "Did the support console create or continue the relevant session?",
  },
  {
    entity: "NB-SUP-03",
    type: "Supplier integration",
    category: "Possibly affected",
    reason: "The service depends on it and the supplier reported delayed responses.",
    evidence: "SCOPE-E06 and SCOPE-E10",
    confidence: "Moderate dependency confidence; Low incident-relationship confidence.",
    owner: "Supplier owner.",
    nextQuestion: "Did supplier delay contribute to user impact or only create a separate service issue?",
  },
  {
    entity: "Protected student-support records",
    type: "Data category",
    category: "Unknown",
    reason: "The service relates to the data, but the data-access source is Blind.",
    evidence: "SCOPE-E09",
    confidence: "Unknown.",
    owner: "Data owner and privacy reviewer.",
    nextQuestion: "Did any data-access event occur during the Blind period, and what alternate evidence exists?",
  },
  {
    entity: "One staff delay report",
    type: "User impact",
    category: "Possibly affected",
    reason: "A report exists, but its relationship to identity activity or supplier delay is unresolved.",
    evidence: "SCOPE-E05 and SCOPE-E06",
    confidence: "Low to Moderate.",
    owner: "Service and continuity owners.",
    nextQuestion: "Was the delay caused by the supplier, service, identity session, or another condition?",
  },
  {
    entity: "Unrelated scheduling service",
    type: "Service",
    category: "Out of scope",
    reason: "No identity, session, destination, data, supplier, dependency, time, or evidence relationship is supported.",
    evidence: "Current relationship review.",
    confidence: "Moderate.",
    owner: "Incident lead.",
    nextQuestion: "Bring into scope only when a new supported relationship appears.",
  },
];

const chronology = [
  ["08:15", "Fictional recovery change NB-CHG-114 begins for database reconciliation.", "SCOPE-E08", "Creates an expected alternative for matching activity only."],
  ["08:55", "Fictional recovery change ends.", "SCOPE-E08", "Later activity falls outside the approved change window."],
  ["08:58", "Fictional temporary recovery role remains Active near approval_end.", "SCOPE-E01", "Identity and role enter confirmed relationship scope."],
  ["09:00", "Fictional approved role window ends.", "SCOPE-E01", "Extension and continuing-session questions become time-sensitive."],
  ["09:02", "Fictional group membership is Active under Degraded source health.", "SCOPE-E03", "Effective access becomes Conditional rather than confirmed or excluded."],
  ["09:04", "Fictional session NB-SES-881 reaches NB-SVC-07 and coordination-admin.", "SCOPE-E02", "Session, service, and destination enter confirmed relationship scope."],
  ["09:07", "Fictional service remains available with no confirmed broad impact.", "SCOPE-E04", "Service impact remains unconfirmed despite confirmed relationship."],
  ["09:09", "One fictional staff user reports a service delay.", "SCOPE-E05", "User impact enters possible scope."],
  ["09:12", "Fictional supplier reports delayed integration responses.", "SCOPE-E06", "Supplier dependency enters possible scope and alternative analysis."],
  ["09:18", "Fictional device source shows two categories under Conditional completeness.", "SCOPE-E07", "Managed laptop and support console enter possible scope."],
  ["09:24", "Fictional privacy review identifies a Blind data-access period.", "SCOPE-E09", "Protected data becomes Unknown rather than unaffected."],
  ["09:30", "Fictional incident lead publishes Scope Version 1.5.", "Scope decision record", "Confirmed, possible, unknown, excluded, and out-of-scope categories are documented."],
];

const hypotheses = [
  {
    id: "H-01",
    statement: "A fictional stale temporary role allowed one session to continue after approval expiration.",
    supporting: "Role and session evidence align on identity and time.",
    contradicting: "Extension and group evidence are incomplete.",
    nextEvidence: "Source-side extension, group synchronization, session details, and identity-owner validation.",
    status: "Supported, but authorization remains Conditional.",
  },
  {
    id: "H-02",
    statement: "The fictional user delay was caused by the same session activity.",
    supporting: "The report occurred near the session and involves the same service.",
    contradicting: "Service health shows no broad impact, and supplier delay is a competing explanation.",
    nextEvidence: "User-impact details, service timing, supplier timing, destination behavior, and owner review.",
    status: "Possible.",
  },
  {
    id: "H-03",
    statement: "The fictional supplier delay caused the reported service delay.",
    supporting: "Supplier reported delay and the service depends on that integration.",
    contradicting: "Only one user report exists, and service health shows no broad error increase.",
    nextEvidence: "Supplier affected period, service dependency timing, and additional user reports.",
    status: "Possible.",
  },
  {
    id: "H-04",
    statement: "The fictional approved recovery change explains the session.",
    supporting: "The identity had a recovery role and an approved recovery change existed.",
    contradicting: "The change ended before the session and covers a different destination.",
    nextEvidence: "Change-owner confirmation and any additional approved change.",
    status: "Partial alternative; not a full explanation.",
  },
  {
    id: "H-05",
    statement: "Protected fictional data was accessed during the session.",
    supporting: "The service relates to protected records.",
    contradicting: "No direct data-access evidence is available, and the relevant source is Blind.",
    nextEvidence: "Alternate application evidence, source recovery, owner validation, and historical reconciliation.",
    status: "Unknown.",
  },
  {
    id: "H-06",
    statement: "Both fictional device categories participated in the relevant activity.",
    supporting: "Both are associated with the identity.",
    contradicting: "Session-to-device linkage is incomplete and source completeness is Conditional.",
    nextEvidence: "Session device field, source-side device evidence, and owner review.",
    status: "Possible but weak.",
  },
];

const scopeChangeLog = [
  ["1.0", "Initial role and session correlation", "Confirmed identity, role, session, service, destination, and initial period.", "SCOPE-E01 and SCOPE-E02", "Role and session Healthy", "Activate incident coordination and identity/service ownership."],
  ["1.1", "Degraded group evidence", "Effective-access conclusion changed from assumed Active to Conditional.", "SCOPE-E03", "Group source Degraded", "Lower authorization confidence and assign source owner."],
  ["1.2", "One staff user reports delay", "User impact enters possible scope.", "SCOPE-E05", "Human report; service source Healthy", "Assign service and continuity question without claiming broad impact."],
  ["1.3", "Supplier delay notice and dependency map", "Supplier integration enters possible scope and alternative register.", "SCOPE-E06 and SCOPE-E10", "Supplier statement not independently validated", "Assign supplier owner and compare timing with user impact."],
  ["1.4", "Conditional device evidence", "Managed laptop and support console enter possible scope.", "SCOPE-E07", "Device source Conditional", "Request session-to-device evidence."],
  ["1.5", "Blind data-access source", "Protected data moves from unreviewed to Unknown rather than unaffected.", "SCOPE-E09", "Data-access source Blind", "Activate privacy review, alternate evidence, and historical reassessment."],
];

const validationCases = [
  ["SCOPE-T01", "Alert only", "One fictional alert with no owner context, source-health review, or service relationship.", "Remain in triage; do not declare confirmed incident or broad scope.", "Proportionate activation"],
  ["SCOPE-T02", "Multi-source alignment", "Fictional role, session, and service evidence align on identity, destination, and time.", "Confirm the relationship while preserving authorization and impact limitations.", "Evidence-based confirmation"],
  ["SCOPE-T03", "Blind source", "Fictional data-access source is Blind during the key period.", "Classify data-access scope as Unknown rather than unaffected.", "Source-health honesty"],
  ["SCOPE-T04", "Dependency only", "A fictional supplier is a service dependency but has no evidence connection to the event.", "Keep supplier out of confirmed scope; use possible or out of scope.", "Avoiding over-scoping"],
  ["SCOPE-T05", "One user report", "One fictional user reports delay while service health remains normal.", "Classify user impact as possible and request supporting evidence.", "Population accuracy"],
  ["SCOPE-T06", "Healthy exclusion", "An approved change matches identity, service, destination, purpose, time, and owner under Healthy evidence.", "Exclude matching activity with break conditions and expiration.", "Defensible contraction"],
  ["SCOPE-T07", "Partial alternative", "A change matches purpose and identity but not time or destination.", "Keep as partial alternative; do not exclude the event.", "Scope accuracy"],
  ["SCOPE-T08", "Second service", "A second service appears through a confirmed shared dependency.", "Enter possible scope, assign owner, and reassess response decisions.", "Dynamic expansion"],
  ["SCOPE-T09", "Source recovery", "A recovering source provides new historical records after closure.", "Reassess scope and reopen when the prior conclusion changes.", "Historical continuity"],
  ["SCOPE-T10", "Time confusion", "An event processed at 10:00 actually occurred at 08:30.", "Use event time for chronology and preserve collection and processing delay.", "Timeline accuracy"],
  ["SCOPE-T11", "Unaffected claim", "A service has no alerts, but its required source is Degraded.", "Do not classify unaffected solely from alert silence.", "False-negative awareness"],
  ["SCOPE-T12", "Public portfolio", "Student plans to sanitize a real incident timeline and affected-system list.", "Fail portfolio validation and invent every detail.", "Confidentiality and safety"],
];

const scopeMetrics = [
  {
    metric: "Time to first scope statement",
    question: "How long does response take to document initial confirmed, possible, unknown, excluded, unaffected, and out-of-scope categories?",
    evidence: "Activation time, first scope version, source health, urgency, owner availability, and quality review.",
    limitation: "Fast scope can be incomplete or unsupported.",
  },
  {
    metric: "Scope revision rate",
    question: "How often does scope change as evidence, source recovery, owner input, impact, dependencies, or alternatives appear?",
    evidence: "Version count, triggers, evidence, owners, reason, direction, and consequences.",
    limitation: "Many revisions may reflect healthy learning or poor preparation.",
  },
  {
    metric: "Unknown aging",
    question: "How long do unknown identities, devices, services, data, suppliers, impacts, or periods remain unresolved?",
    evidence: "Unknown register, owner, evidence needed, source state, deadline, escalation, and decision effect.",
    limitation: "Some uncertainty may remain legitimately unresolved.",
  },
  {
    metric: "False expansion rate",
    question: "How often are entities added to scope and later excluded because the initial relationship was weak or misunderstood?",
    evidence: "Scope versions, relationship evidence, source health, alternative explanation, and contraction reason.",
    limitation: "Contraction can reflect good evidence review rather than failure.",
  },
  {
    metric: "False unaffected rate",
    question: "How often do items classified unaffected later enter confirmed or possible scope?",
    evidence: "Prior unaffected evidence, coverage, source health, new evidence, reopened cases, and decision impact.",
    limitation: "A changed condition or period may make the earlier decision reasonable.",
  },
  {
    metric: "Source-limited scope",
    question: "What share of scope decisions depend on Conditional, Degraded, Blind, Conflicting, or Recovering evidence?",
    evidence: "Source-health map, affected dimensions, confidence, alternate evidence, and reassessment obligations.",
    limitation: "A high rate may reflect honest classification rather than poor analysis.",
  },
  {
    metric: "Owner acknowledgement",
    question: "Do identity, service, device, data, supplier, source, privacy, continuity, and recovery owners acknowledge their scope questions?",
    evidence: "Question log, assignment, acceptance, deadline, response, escalation, and quality.",
    limitation: "Acknowledgement does not prove the answer is complete.",
  },
  {
    metric: "Scope communication lag",
    question: "How long does it take updates to reflect significant scope changes?",
    evidence: "Scope version time, communication approval, audience, distribution, correction, and next-update commitment.",
    limitation: "Immediate communication may be inappropriate when evidence is weak.",
  },
];

const matrixRows = [
  ["MATRIX-01", "Role and session evidence", "Identity, role, session, service, destination, and time relationships are supported.", "Confirmed relationship scope.", "Does not prove intent, data access, modification, or impact.", "Confirm bounded entities and open authorization, activity, and impact questions."],
  ["MATRIX-02", "Group-source health", "Group evidence is Degraded during the relevant period.", "Effective access remains uncertain.", "Does not prove group membership was active or inactive at every moment.", "Use Conditional scope and assign source recovery."],
  ["MATRIX-03", "Service health", "Service availability is normal with no broad error increase.", "Broad active impact is not currently confirmed.", "Does not prove no authorization, privacy, integrity, or limited-user effect.", "Separate service relationship from impact conclusion."],
  ["MATRIX-04", "User report", "One staff user reports delay.", "Possible user impact.", "Does not represent the full population or prove cause.", "Assign impact question and gather corroborating evidence."],
  ["MATRIX-05", "Supplier notice", "Supplier reports delayed integration responses.", "Supplier dependency may be relevant.", "Does not prove supplier caused the incident or local impact.", "Enter supplier into possible scope and test timing."],
  ["MATRIX-06", "Blind data source", "Data-access evidence is unavailable for the key period.", "Data scope must remain Unknown.", "Does not prove access or no access.", "Activate privacy review, alternate evidence, recovery, and reassessment."],
  ["MATRIX-07", "Approved change", "Change matches identity and purpose but not time or destination.", "Partial alternative explanation.", "Does not justify exclusion.", "Preserve the hypothesis and request owner clarification."],
  ["MATRIX-08", "Device evidence", "Two device categories are associated with the identity under Conditional completeness.", "Possible device scope.", "Does not prove either device created the session.", "Request session-to-device evidence before confirmation."],
];

const commonMistakes = [
  ["The alert title becomes the incident", "A fictional analyst copies the alert title into the declaration and scope.", "Unverified assumptions control severity, communication, containment, and evidence requests.", "Start with neutral observations, questions, evidence, source health, and non-proof statements."],
  ["Everything related becomes affected", "Every associated device, service dependency, supplier, and data set is marked affected.", "Scope becomes too broad and communication may overstate impact.", "Use confirmed, possible, unknown, unaffected, excluded, and out-of-scope categories."],
  ["No alert means unaffected", "A service is called unaffected because no alert exists.", "Blind or weak coverage becomes false reassurance.", "Require relevant Healthy evidence for unaffected classification."],
  ["Unknown is treated as failure", "A responder avoids Unknown and forces every item into affected or unaffected.", "Missing evidence becomes unsupported certainty.", "Use Unknown with owner, evidence need, deadline, alternate evidence, and reassessment."],
  ["Processing time replaces event time", "A delayed event is placed in chronology when processed rather than when it occurred.", "Cause, sequence, scope, and response decisions may be wrong.", "Preserve event, collection, processing, report, decision, action, validation, and communication times separately."],
  ["Dependencies are treated as impact", "A supplier or service is confirmed affected only because a dependency exists.", "Scope expands without direct or indirect impact evidence.", "Distinguish confirmed dependency from confirmed incident effect."],
  ["Scope never changes", "A team protects its first scope after source recovery or new evidence.", "Containment, communication, recovery, and risk decisions become stale.", "Use versioned scope changes with trigger, evidence, owner, consequence, and communication."],
  ["Scope changes are undocumented", "Entities enter and leave scope without a decision record.", "Reviewers cannot reconstruct why actions or messages changed.", "Maintain a scope-change log and preserve prior versions."],
  ["One report defines broad impact", "One individual delay report is described as organization-wide disruption.", "Severity and communication may be overstated.", "Classify possible impact and seek population, service, timing, and owner evidence."],
  ["Real scope data enters the portfolio", "A student sanitizes a real affected-system list, timeline, supplier, owner, or identity relationship.", "Sensitive architecture, services, people, incidents, and capabilities may remain visible.", "Invent every organization, identity, device, service, source, supplier, relationship, date, decision, and outcome."],
];

const labSteps = [
  ["1", "Establish the mission and boundary", "Document fictional critical services, users, identity model, data, suppliers, dependencies, sources, privacy, continuity, and safety.", "Detection and scoping mission charter.", "Every organization, identity, service, source, supplier, relationship, event, and outcome is invented."],
  ["2", "Classify the initial signal", "Decide whether evidence supports alert, event, issue, suspected incident, confirmed incident, or non-incident status.", "Activation and classification record.", "Classification includes threshold, owner, next decision, and non-proof statement."],
  ["3", "Build the evidence register", "Record evidence ID, source, event time, collection time, processing time, observation, supports, limitations, health, owner, and use.", "Evidence matrix and source-health map.", "Missing or degraded evidence never becomes absence."],
  ["4", "Create the chronology", "Order changes, approvals, sessions, alerts, reports, source-health transitions, decisions, actions, validation, and communications.", "Multi-time chronology.", "Event, collection, processing, report, decision, action, validation, and communication remain distinct."],
  ["5", "Map relationships", "Connect identities, roles, groups, sessions, devices, services, destinations, data, users, suppliers, changes, sources, and dependencies.", "Relationship map.", "Every relationship states evidence, confidence, and limitation."],
  ["6", "Assign scope categories", "Classify items as confirmed, possible, unaffected, unknown, excluded, or out of scope.", "Entity and impact register.", "Unaffected requires Healthy evidence; Unknown requires an owner and next evidence."],
  ["7", "Test hypotheses", "Compare stale authority, service impact, supplier delay, approved change, data access, and device participation explanations.", "Hypothesis and alternative matrix.", "Each hypothesis has supporting, contradicting, next evidence, owner, and status."],
  ["8", "Version scope changes", "Record trigger, evidence, source health, added or removed items, confidence, owner, severity, priority, response, and risk effects.", "Scope-change log.", "Prior versions remain available for reconstruction."],
  ["9", "Validate the scope", "Run alert-only, Blind-source, dependency, user-report, change, second-service, recovery, time, unaffected, and portfolio cases.", "Scope validation matrix.", "Validation protects against over-scoping and under-scoping."],
  ["10", "Prepare the portfolio", "Combine activation, evidence, chronology, relationships, entity register, hypotheses, versions, metrics, leadership brief, risk, and reflection.", "Public-safe Detection and Scoping Package.", "No real alerts, identities, services, devices, suppliers, sources, timelines, or incidents appear."],
];

const quizQuestions = [
  {
    question: "What is the strongest first response to a fictional alert?",
    choices: [
      "Declare a confirmed incident immediately.",
      "Start with a neutral observation, review evidence and source health, and decide which workflow is justified.",
      "Mark every related service affected.",
      "Close it unless user impact is confirmed.",
    ],
    answer: 1,
    explanation: "An alert is a signal, not proof. Start with evidence-aware classification and activation review.",
  },
  {
    question: "A fictional data-access source is Blind during the key period. Which category is strongest?",
    choices: ["Unaffected", "Confirmed affected", "Unknown", "Excluded"],
    answer: 2,
    explanation: "Blind evidence supports neither access nor no-access conclusions.",
  },
  {
    question: "Which condition supports a fictional unaffected classification?",
    choices: [
      "No alert exists.",
      "Relevant Healthy evidence shows the item does not meet the condition within the defined period and boundary.",
      "The owner thinks it is probably fine.",
      "The source is Degraded.",
    ],
    answer: 1,
    explanation: "Unaffected is an evidence-supported conclusion, not an absence-of-alert assumption.",
  },
  {
    question: "Why should a fictional supplier dependency not automatically enter confirmed affected scope?",
    choices: [
      "Suppliers never matter.",
      "A dependency proves a relationship but not necessarily incident effect or impact.",
      "Supplier evidence is always false.",
      "Only internal services can be affected.",
    ],
    answer: 1,
    explanation: "Dependency and incident effect are different conclusions requiring different evidence.",
  },
  {
    question: "What should a fictional scope-change log preserve?",
    choices: [
      "Only the newest scope.",
      "Version, trigger, evidence, source health, owner, classification changes, and decision consequences.",
      "Only affected services.",
      "Only leadership approval.",
    ],
    answer: 1,
    explanation: "Versioned changes allow responders to reconstruct why response decisions changed.",
  },
  {
    question: "A fictional user report appears near an identity event, but supplier delay is also present. What is strongest?",
    choices: [
      "Confirm identity activity caused broad impact.",
      "Classify impact as possible and test both explanations against timing, service, supplier, and owner evidence.",
      "Ignore the report.",
      "Confirm the supplier caused the incident.",
    ],
    answer: 1,
    explanation: "The evidence supports review, not a final causal conclusion.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real affected-system list.",
      "Use real timelines with fake names.",
      "Invent every organization, identity, device, service, source, supplier, relationship, date, decision, and outcome.",
      "Use a real supplier and service but fake the alert.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real people, architecture, incidents, and defensive capabilities.",
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A7
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function DetectionAndScopingPage() {
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
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Detection, Activation, Scope, Relationships, and Change Control
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.3 Detection and Scoping
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional responders move from alerts, reports, service
            symptoms, supplier notices, and source-health conditions into a
            defensible incident activation and scope that separates confirmed,
            possible, unknown, unaffected, excluded, and out-of-scope entities.
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
          lessonTitle="Detection and Scoping"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, alerts, reports, identities, devices, services, destinations, data categories, users, suppliers, sources, relationships, times, owners, decisions, and outcomes.",
            "I will not treat a fictional alert title, event, user report, supplier notice, service symptom, or missing record as automatic proof of an incident.",
            "I will separate confirmed, possibly affected, unaffected, unknown, excluded, and out-of-scope categories.",
            "I will preserve fictional source health, timing, provenance, confidence, alternatives, non-proof statements, owners, and reassessment obligations.",
            "I will maintain a fictional versioned scope-change log rather than protecting the first scope from new evidence.",
            "I will not access, copy, sanitize, upload, investigate, query, test, contact, or modify any real alert, incident, identity, device, service, supplier, source, organization, system, or person.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The First Scope Is Usually Incomplete">
          <p className="leading-8">
            Fictional Northbridge begins with one stale-role alert. Minutes
            later, a user reports a service delay, a supplier reports an
            integration problem, the device source becomes Conditional, and the
            data-access source is Blind. A weak response either marks everything
            affected or refuses to change the first scope. A professional
            response creates categories, assigns evidence questions, and changes
            scope only when supported.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak scope
              </p>
              <p className="mt-2 leading-7">
                “Everything connected to the alert is affected.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong scope
              </p>
              <p className="mt-2 leading-7">
                “Identity and session relationships are confirmed. Device,
                supplier, and user impact are possible. Data access is Unknown
                because the required source is Blind.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Good scoping is the disciplined process of matching every
            conclusion to the evidence that actually supports it.
          </div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Scope Controls Every Later Response Decision">
          <p className="leading-8">
            Fictional severity, priority, containment, communication, evidence
            preservation, continuity, recovery, leadership decisions, privacy,
            residual risk, closure, and reopening all depend on scope. If scope
            is too broad, teams may disrupt unrelated services and overstate
            impact. If scope is too narrow, meaningful identities, devices,
            data, suppliers, users, or periods may remain unreviewed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Evidence accuracy", "Every scope category states what supports it, what limits it, and what would change it."],
              ["Decision accuracy", "Containment, communication, recovery, and risk decisions use the current scope version."],
              ["Lifecycle accuracy", "Scope changes remain traceable through chronology, versions, owners, consequences, and reopening."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The S-C-O-P-E-D Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["S — Signal and state", "Classify the alert, event, issue, suspected incident, confirmed incident, source problem, or non-incident condition."],
              ["C — Chronology and coverage", "Preserve event, collection, processing, report, decision, action, validation, communication, and source-health timing."],
              ["O — Objects and owners", "Map identities, devices, services, destinations, data, users, suppliers, dependencies, sources, and accountable owners."],
              ["P — Possibility and proof", "Separate confirmed, possible, unaffected, unknown, excluded, and out-of-scope conclusions."],
              ["E — Explanations and evidence", "Compare hypotheses, alternatives, source health, provenance, confidence, supports, and non-proof statements."],
              ["D — Document change", "Version scope changes with trigger, evidence, owner, consequences, communication, containment, recovery, and risk."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Decision-ready scope statement</p>
            <p className="mt-2 leading-7">
              Fictional Scope Version 1.5 confirms one identity, one session,
              one service, and one administrative destination. Two device
              categories, one supplier dependency, and one user-impact report
              remain possible. Protected data access remains Unknown because the
              required source is Blind.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Terms for Detection and Scoping">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 1" title="Classify Six Response States">
          <div className="grid gap-5">
            {classificationModel.map((item) => (
              <article key={item.category} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.category}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.definition}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence threshold", item.threshold],
                    ["Primary owner", item.owner],
                    ["Next decision", item.next],
                    ["Does not prove", item.nonProof],
                  ].map(([label, detail]) => (
                    <div key={`${item.category}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 2" title="Review Ten Scope Dimensions">
          <div className="grid gap-5 md:grid-cols-2">
            {scopeDimensions.map(([dimension, questions, evidence, gap, owner]) => (
              <article key={dimension} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-purple-100">{dimension}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Questions</p>
                  <p className="mt-2 text-sm leading-6">{questions}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Common gap</p>
                  <p className="mt-2 text-sm leading-6">{gap}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Owner</p>
                  <p className="mt-2 text-sm leading-6">{owner}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 3" title="Use Six Scope Categories">
          <div className="grid gap-5">
            {categories.map((item) => (
              <article key={item.category} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.category}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Professional standard", item.standard],
                    ["Fictional example", item.example],
                    ["Required documentation", item.required],
                    ["Reassessment", item.reassess],
                  ].map(([label, detail]) => (
                    <div key={`${item.category}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 4" title="Review Ten Fictional Evidence Records">
          <div className="grid gap-5">
            {evidenceRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 font-mono text-xs font-black text-blue-200">{item.id}</span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[
                    ["Event time", item.eventTime],
                    ["Collection time", item.collectionTime],
                    ["Processing time", item.processingTime],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 font-mono text-sm text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Observation</p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Supports</p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Does not prove</p>
                    <p className="mt-2 text-sm leading-6">{item.limits}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 5" title="Build a Ten-Relationship Map">
          <div className="grid gap-5 md:grid-cols-2">
            {relationshipMap.map(([relationship, from, to, evidence, state, limitation]) => (
              <article key={relationship} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{relationship}</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">From</p>
                    <p className="mt-2 text-sm leading-6">{from}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">To</p>
                    <p className="mt-2 text-sm leading-6">{to}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">State</p>
                  <p className="mt-2 text-sm leading-6">{state} — Evidence {evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 6" title="Create a Ten-Entity Scope Register">
          <div className="grid gap-5">
            {entityRegister.map((item) => (
              <article key={item.entity} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.entity}</h3>
                    <p className="mt-1 text-sm font-bold text-cyan-200">{item.type}</p>
                  </div>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.category}
                  </span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Reason", item.reason],
                    ["Evidence", item.evidence],
                    ["Confidence", item.confidence],
                    ["Owner", item.owner],
                    ["Next question", item.nextQuestion],
                  ].map(([label, detail]) => (
                    <div key={`${item.entity}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 7" title="Reconstruct the Fictional Chronology">
          <div className="grid gap-4">
            {chronology.map(([time, event, evidence, scopeEffect]) => (
              <article key={`${time}-${event}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.2fr_0.3fr_1fr]">
                <p className="font-mono text-lg font-black text-cyan-200">{time}</p>
                <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-3 text-sm text-blue-50">{evidence}</div>
                <div>
                  <p className="leading-7 text-slate-300">{event}</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-200">Scope effect: {scopeEffect}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 8" title="Test Six Scope Hypotheses">
          <div className="grid gap-5 md:grid-cols-2">
            {hypotheses.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-200">{item.id}</span>
                  <h3 className="font-black text-white">{item.statement}</h3>
                </div>
                <div className="mt-4 grid gap-4">
                  {[
                    ["Supporting evidence", item.supporting],
                    ["Contradicting evidence", item.contradicting],
                    ["Next evidence", item.nextEvidence],
                    ["Current status", item.status],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 9" title="Maintain Six Scope Versions">
          <div className="grid gap-5">
            {scopeChangeLog.map(([version, trigger, change, evidence, health, consequence]) => (
              <article key={version} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    Version {version}
                  </span>
                  <h3 className="font-black text-white">{trigger}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Scope change", change],
                    ["Evidence", evidence],
                    ["Source health", health],
                    ["Decision consequence", consequence],
                  ].map(([label, detail]) => (
                    <div key={`${version}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Instructional Section 10" title="Validate Twelve Scope Scenarios">
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

        <SectionCard eyebrow="Instructional Section 11" title="Measure Eight Scoping Outcomes">
          <div className="grid gap-5 md:grid-cols-2">
            {scopeMetrics.map((item) => (
              <article key={item.metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.metric}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review question</p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Fictional Scoping Architecture" title="Northbridge Detection-to-Scope Model">
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches evidence-based detection and scoping
            without real alerts, identities, systems, services, suppliers,
            sources, incidents, or response actions.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Signal inputs", "Alerts, user reports, service symptoms, supplier notices"],
                ["Evidence inputs", "Identity, session, service, device, data, source health"],
                ["Mission inputs", "Critical services, users, continuity, privacy, suppliers"],
                ["Time inputs", "Event, collection, processing, report, decision, validation"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50">
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Scope Core
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Classification", "Alert, event, issue, suspected, confirmed, non-incident"],
                  ["Relationships", "Identity, device, service, destination, data, supplier"],
                  ["Categories", "Confirmed, possible, unaffected, unknown, excluded, out"],
                  ["Evidence", "Source, provenance, timing, health, supports, limitations"],
                  ["Hypotheses", "Supporting, contradicting, alternatives, next evidence"],
                  ["Ownership", "Identity, service, data, supplier, source, privacy"],
                  ["Change", "Version, trigger, consequence, communication, response"],
                  ["Lifecycle", "Reassessment, closure, reopening, improvement"],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4">
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Response output", "Activation, scope, severity, priority, owners"],
                ["Decision output", "Containment, communication, continuity, recovery"],
                ["Leadership output", "Impact, uncertainty, options, resources, risk"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50">
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Detection and Scope Dashboard"
          subtitle="Fictional activation state, confirmed and possible entities, unknown data scope, source-health limits, owner questions, scope revisions, and communication lag."
          metrics={[
            {
              label: "Current fictional scope categories",
              value: "4 confirmed / 4 possible / 1 unknown",
              note: "One unrelated service remains out of scope; no broad service impact is confirmed.",
            },
            {
              label: "Open fictional scope questions",
              value: "9",
              note: "Authorization, device linkage, supplier timing, user impact, data access, configuration change, session detail, group state, and recovery remain open.",
            },
            {
              label: "Current fictional scope version",
              value: "1.5",
              note: "The latest revision changed protected data from unreviewed to Unknown because the required source is Blind.",
            },
          ]}
        />

        <FakeAlertCard
          title="Scope Reassessment Required"
          severity="High"
          time="9:24 AM"
          source="Fake Northbridge Incident Coordination Console"
          details="The fictional response confirms one identity, one session, one service, and one destination. Device and supplier relationships remain possible. A protected-data source is Blind, so data access cannot be classified unaffected."
          recommendation="Publish Scope Version 1.5, classify protected data as Unknown, assign privacy and source owners, request alternate evidence, preserve the Blind period, and reassess response decisions when evidence recovers."
        />

        <FakeLogPanel
          title="Fake Detection and Scope Timeline"
          logs={[
            "08:58 ROLE identity='NB-ID-042' state='active'",
            "09:00 APPROVAL state='expired'",
            "09:02 GROUP state='active' health='degraded'",
            "09:04 SESSION id='NB-SES-881' service='NB-SVC-07'",
            "09:07 SERVICE impact='none-confirmed'",
            "09:09 USER-REPORT delay='one-user'",
            "09:12 SUPPLIER delay='reported'",
            "09:18 DEVICE source='conditional'",
            "09:24 DATA-SOURCE health='blind'",
            "09:25 SCOPE confirmed='4'",
            "09:25 SCOPE possible='4'",
            "09:25 SCOPE unknown='1'",
            "09:30 VERSION scope='1.5'",
          ]}
        />

        <SectionCard eyebrow="Fictional Evidence Matrix" title="What Scope Evidence Supports—and What It Does Not Prove">
          <div className="grid gap-5">
            {matrixRows.map(([id, source, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <h3 className="font-black text-white">{source}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Does not prove", limits],
                    ["Scope use", use],
                  ].map(([label, detail]) => (
                    <div key={`${id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Scope Decision Is Best Supported?"
          question="Which fictional Scope Version 1.5 decision best fits the evidence?"
          evidence={[
            "Role and session evidence confirm one identity and one session after approval expiration.",
            "The session reached one service and one administrative destination.",
            "Group evidence is Degraded.",
            "One user reported a delay.",
            "Supplier delay may be relevant.",
            "Two device categories have incomplete relationship evidence.",
            "The data-access source is Blind.",
            "No broad service impact is confirmed.",
          ]}
          options={[
            "Confirm the identity, session, service relationship, and destination; keep devices, supplier, and user impact possible; classify protected data Unknown; preserve no broad-impact conclusion; assign owners and reassessment.",
            "Mark every associated identity, device, supplier, data set, and service affected.",
            "Mark protected data unaffected because no data alert exists.",
            "Close the incident because service availability is normal.",
          ]}
          bestAnswer={0}
          explanation="The first option matches each conclusion to the strength and limitations of the available fictional evidence."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Detection and Scoping Errors">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, observation, impact, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Impact</p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Practice Lab" title="Build the Northbridge Detection and Scoping Package">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, copy,
            sanitize, upload, investigate, query, test, contact, monitor, or
            modify any real alert, incident, identity, device, service, source,
            supplier, data set, organization, system, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality check</p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Blind Data Source and No Data Alert"
          scenario="Fictional Northbridge has no data-access alert, but the required data-access source is Blind during the key period. The service handles protected student-support records."
          choices={[
            {
              label: "Choice A",
              response: "Classify fictional data access as Unknown, assign privacy and source owners, request alternate evidence, preserve the Blind period, and require historical reassessment after recovery.",
              outcome: "Best defensive choice. Alert silence cannot support an unaffected conclusion when coverage is Blind.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Mark protected data unaffected because no alert exists.",
              outcome: "Weak. Missing visibility becomes false reassurance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Mark protected data confirmed affected because the service stores it.",
              outcome: "Weak. Service dependency does not prove data access or exposure.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Second Service Appears through a Shared Dependency"
          scenario="A fictional second service shares an identity dependency with the affected service. No direct session or impact evidence currently connects it to the incident."
          choices={[
            {
              label: "Choice A",
              response: "Add the fictional second service to possible scope, assign the service owner, request relationship and impact evidence, and reassess priority, communication, containment, and recovery only when evidence supports change.",
              outcome: "Best choice. The dependency is meaningful but does not yet prove effect.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Mark the second service confirmed affected.",
              outcome: "Weak. Dependency alone is not incident-effect evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Keep the second service permanently out of scope.",
              outcome: "Weak. The supported relationship deserves bounded review.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Defend Scope Version 1.5 before an Incident Review Board">
          <p className="leading-8">
            Fictional Northbridge confirms one identity, one session, one
            service, and one destination. Two device categories, one supplier,
            and one user-impact report remain possible. Protected data is
            Unknown because the source is Blind. A partial approved-change
            alternative exists, broad impact is not confirmed, and several
            owners have open questions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend activation", "Explain why evidence supports incident coordination without claiming every incident dimension is confirmed."],
              ["Defend relationships", "Explain identity, role, group, session, device, service, destination, data, supplier, user, and time connections."],
              ["Defend categories", "Explain why each item is confirmed, possible, unaffected, unknown, excluded, or out of scope."],
              ["Defend chronology", "Explain event, collection, processing, report, decision, action, validation, communication, and source-health times."],
              ["Defend hypotheses", "Explain supporting, contradicting, alternative, missing, and next evidence for each scope theory."],
              ["Defend scope change", "Explain versions, triggers, owners, severity, priority, containment, communication, recovery, closure, and reopen effects."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50">
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional activation decision, classification record,
              evidence register, source-health map, chronology, relationship
              map, ten-entity scope register, hypothesis matrix, alternative
              register, six-version change log, validation matrix, dashboard,
              owner-question register, communication update, leadership brief,
              residual uncertainty, residual risk, reopen triggers, and public
              portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Detection and Scoping Checklist"
          items={[
            "I can distinguish fictional alerts, events, issues, suspected incidents, confirmed incidents, source problems, and non-incident conditions.",
            "I can create a fictional activation decision using evidence, source health, mission relevance, authority, urgency, and non-proof statements.",
            "I can scope fictional identities, devices, services, destinations, data, users, suppliers, dependencies, periods, and evidence coverage.",
            "I can classify fictional items as confirmed, possible, unaffected, unknown, excluded, or out of scope.",
            "I can require relevant Healthy evidence before calling a fictional item unaffected.",
            "I can use Unknown when fictional evidence is Blind, Degraded, conflicting, delayed, incomplete, or unavailable.",
            "I can preserve fictional event, collection, processing, report, decision, action, validation, communication, and source-health timing.",
            "I can create fictional relationship maps with evidence, confidence, owner, and limitations.",
            "I can test fictional hypotheses and alternatives using supporting, contradicting, next evidence, owner, and status.",
            "I can maintain fictional scope versions and explain effects on severity, priority, containment, communication, recovery, closure, and reopening.",
            "I can measure fictional scope speed, revisions, unknown aging, false expansion, false unaffected, source limits, owner acceptance, and communication lag.",
            "I can create a completely fictional scoping artifact without exposing real alerts, identities, services, suppliers, sources, timelines, or incidents.",
          ]}
        />

        <MiniQuiz
          title="A7.3 Mini Quiz: Detection and Scoping"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection and Scoping Package for the Northbridge Student-Support Cooperative. Include mission, critical services, users, identity model, device categories, data categories, suppliers, dependencies, source inventory, privacy boundary, safety boundary, alert classification, event classification, issue classification, suspected-incident criteria, confirmed-incident criteria, non-incident criteria, activation decision, activation evidence, source health, owner, next decision, non-proof statements, identity scope, device scope, service scope, destination scope, data scope, user-impact scope, supplier scope, time scope, dependency scope, evidence-coverage scope, confirmed category, possible category, unaffected category, unknown category, excluded category, out-of-scope category, category evidence standards, reassessment, evidence IDs, source, event time, collection time, processing time, report time, decision time, action time, validation time, communication time, observation, supports, limitations, relationship map, identity-to-role relationship, identity-to-session relationship, session-to-service relationship, session-to-destination relationship, identity-to-group relationship, service-to-user relationship, service-to-supplier relationship, identity-to-device relationship, change-to-session relationship, service-to-data relationship, entity register, confidence, owners, next questions, chronology, scope hypotheses, supporting evidence, contradicting evidence, alternate explanations, next evidence, hypothesis status, scope version, scope-change trigger, category changes, source-health effect, severity effect, priority effect, containment effect, communication effect, recovery effect, closure effect, reopen effect, validation cases, scope metrics, leadership brief, residual uncertainty, residual risk, reopen triggers, reflection, and a statement that every organization, identity, device, service, source, supplier, relationship, event, date, decision, action, and outcome is invented."
          tips={[
            "Match each fictional scope conclusion to the exact evidence that supports it.",
            "Use Unknown honestly when evidence cannot support confirmation or absence.",
            "Distinguish dependency, relationship, activity, impact, authorization, data access, and incident effect.",
            "Version scope changes and connect them to response decisions.",
            "Keep the artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for Containment Strategy?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for signal classification,
            activation, evidence, source health, chronology, relationships,
            scope categories, hypotheses, alternatives, scope changes, metrics,
            owner questions, communication, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can distinguish a fictional alert from a confirmed incident.",
              "I can build a fictional evidence-based initial scope.",
              "I can separate confirmed, possible, unaffected, unknown, excluded, and out-of-scope items.",
              "I can avoid using alert silence as proof of unaffected status.",
              "I can preserve fictional event and processing time separately.",
              "I can version fictional scope changes and explain response consequences.",
              "I can test fictional alternatives without forcing early certainty.",
              "I can produce a safe fictional scope package without adapting real incident information.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional confirmed item, one possible item, one Unknown
            item, one excluded alternative, one scope-change trigger, one
            source-health limitation, and one question for A7.4.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional alert is a signal for review, not proof of an incident.",
            "Detection and scoping should distinguish alert, event, issue, suspected incident, confirmed incident, source-health problem, and non-incident condition.",
            "Fictional scope should cover identities, devices, services, destinations, data, users, suppliers, dependencies, time, and evidence coverage.",
            "Confirmed, possible, unaffected, unknown, excluded, and out-of-scope categories require different evidence standards.",
            "Unaffected requires relevant Healthy evidence; alert silence or missing records are not enough.",
            "Unknown is a professional category when evidence is Blind, Degraded, conflicting, delayed, incomplete, or unavailable.",
            "Chronology should preserve event, collection, processing, report, decision, action, validation, communication, and source-health timing.",
            "Relationships and dependencies do not automatically prove activity, impact, authorization, data access, or incident effect.",
            "Scope should change through versioned evidence-based decisions rather than remain frozen.",
            "Every CyberShield scoping artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real incidents or systems.",
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
            Next, learn how fictional responders compare identity, session,
            service, network, data, supplier, evidence, communication, and
            continuity containment options using authority, reversibility,
            validation, rollback, mission impact, and residual risk.
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