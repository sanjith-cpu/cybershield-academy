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

const modulePath = "/high-school/advanced/siem-and-alert-triage-concepts";
const previousLesson = `${modulePath}/reducing-noise-and-improving-quality`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Conduct a complete fictional SIEM triage workflow from alert intake through evidence review, prioritization, escalation, case management, quality improvement, closure, and reopening.",
  "Reconstruct fictional evidence using source health, event time, collection time, processing time, normalization, enrichment, correlation, provenance, limitations, and alternative explanations.",
  "Assign fictional severity, confidence, priority, owners, deadlines, escalation levels, case states, validation requirements, closure criteria, and reopen triggers.",
  "Evaluate fictional alert noise, duplicate delivery, grouping, thresholds, expected activity, source defects, false-positive risk, false-negative risk, rollback, and coverage preservation.",
  "Create a portfolio-ready fictional SIEM Triage Capstone Package containing an alert contract, evidence matrix, chronology, triage record, escalation plan, case notes, dashboard review, tuning proposal, leadership brief, residual-risk record, and reflection.",
];

const vocabulary = [
  ["Capstone triage", "A fictional end-to-end defensive review combining alert interpretation, evidence analysis, source health, prioritization, escalation, case management, quality improvement, closure, and reopening."],
  ["Alert contract", "A fictional statement of what an alert observes, which evidence it requires, how source health affects it, what it does not prove, and which defender question it supports."],
  ["Correlation bundle", "A fictional set of related normalized records joined by identity, device, service, destination, session, approval, timing, owner, or source-health relationships."],
  ["Evidence provenance", "A fictional record of where evidence originated, how it was parsed, normalized, enriched, transformed, and used."],
  ["Evidence confidence", "A fictional judgment about how reliable and complete available evidence is for a specific conclusion."],
  ["Severity", "A fictional estimate of potential consequence if the observed condition is meaningful."],
  ["Priority", "A fictional decision about review urgency using severity, confidence, active effect, scope, source health, time sensitivity, ownership, and recoverability."],
  ["Triage question map", "A fictional register of observation, authorization, effective-access, service, source-health, scope, impact, alternatives, ownership, and closure questions."],
  ["Escalation level", "A fictional classification describing routine, specialist, multi-owner, time-sensitive mission, or leadership review."],
  ["Case state", "A fictional lifecycle label such as New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or Reopened."],
  ["Break condition", "A fictional change that prevents grouping, expected handling, or suppression from hiding meaningful identity, session, destination, service, severity, source-health, timing, scope, owner, or result differences."],
  ["Quality gate", "A fictional required validation check before a rule, tuning change, state transition, escalation exit, or closure decision is approved."],
  ["Residual uncertainty", "A fictional important question or evidence limitation that remains unresolved after the current review."],
  ["Residual risk", "A fictional risk that remains after approved actions, validation, and decisions are complete."],
  ["Closure criterion", "A fictional documented requirement that must be satisfied before a case can be resolved."],
  ["Reopen trigger", "A fictional new-evidence, failed-validation, changed-scope, repeated-behavior, source-recovery, or residual-risk condition requiring renewed review."],
];

const organizationContext = [
  ["Organization", "Northbridge Student-Support Cooperative, a completely invented educational support organization."],
  ["Mission", "Provide reliable scheduling, counseling coordination, resource referrals, and family-support workflows for fictional partner schools."],
  ["Critical service", "Student Assistance Coordination Service, used by fictional staff to manage time-sensitive support referrals."],
  ["Identity model", "Permanent staff roles, temporary recovery roles, supplier support assignments, and service-owner approvals."],
  ["Evidence model", "Fictional identity, role, group, approval, extension, session, service, destination, change, source-health, and case records."],
  ["Safety boundary", "Every organization, identity, field, record, service, owner, date, alert, action, decision, and outcome is invented and non-operational."],
];

const sourceInventory = [
  { id: "SRC-01", source: "Identity directory", purpose: "Provides fictional identity category, sponsor, owner, and lifecycle state.", fields: "identity_id, identity_category, lifecycle_state, sponsor_id, owner_role, event_time", health: "Healthy", limitation: "Does not prove current role assignment, effective access, or session activity." },
  { id: "SRC-02", source: "Role-governance source", purpose: "Provides fictional role assignment, approval, extension, revocation, purpose, and scope.", fields: "identity_id, role_category, role_state, approval_start, approval_end, purpose, scope, event_time", health: "Healthy", limitation: "Role assignment does not prove current group membership or exercised access." },
  { id: "SRC-03", source: "Group-state source", purpose: "Provides fictional effective group membership and synchronization state.", fields: "identity_id, group_category, membership_state, sync_state, event_time", health: "Degraded", limitation: "Delayed synchronization makes exact effective access uncertain." },
  { id: "SRC-04", source: "Extension-approval source", purpose: "Provides fictional time-bounded emergency-role extensions.", fields: "identity_id, role_category, extension_id, extension_start, extension_end, approver_role, scope, event_time", health: "Conditional", limitation: "Ingestion delay may hide a valid extension or delay proof that none exists." },
  { id: "SRC-05", source: "Session source", purpose: "Provides fictional session, identity, device, service, destination, operation category, result, start, and end.", fields: "session_id, identity_id, device_category, service_id, destination_category, operation_category, result, event_time", health: "Healthy", limitation: "A session does not prove harmful intent or privileged modification." },
  { id: "SRC-06", source: "Service-health source", purpose: "Provides fictional availability, error, user-impact, dependency, and recovery states.", fields: "service_id, availability_state, error_state, impact_category, recovery_state, event_time", health: "Healthy", limitation: "Normal availability does not prove access was authorized or necessary." },
  { id: "SRC-07", source: "Change-management source", purpose: "Provides fictional maintenance, migration, recovery, owner, start, end, scope, and validation.", fields: "change_id, owner_role, purpose, scope, start_time, end_time, expected_behavior, validation_state", health: "Healthy", limitation: "A change explains only activity matching its exact scope and time." },
  { id: "SRC-08", source: "SIEM source-health source", purpose: "Provides fictional freshness, completeness, schema, parser, queue, blind-period, conflict, replay, and recovery state.", fields: "source_id, health_state, affected_period, freshness, completeness, schema_state, parser_state, recovery_state", health: "Healthy", limitation: "Health metadata describes evidence quality, not the underlying activity." },
];

const evidenceRecords = [
  { id: "RAW-01", source: "Role-governance source", eventTime: "08:58", collectionTime: "08:59", processingTime: "09:00", record: "identity_id=NB-ID-042; role_category=temporary-recovery; role_state=Active; approval_end=09:00; purpose=service-recovery", supports: "The fictional role remained assigned near the approved end time.", limits: "Does not prove a valid extension, effective group access, session activity, misuse, or service impact." },
  { id: "RAW-02", source: "Group-state source", eventTime: "09:02", collectionTime: "09:11", processingTime: "09:12", record: "identity_id=NB-ID-042; group_category=recovery-admin; membership_state=Active; sync_state=Delayed", supports: "Fictional effective group membership may still be active.", limits: "Delayed evidence does not establish the exact state at every minute." },
  { id: "RAW-03", source: "Extension-approval source", eventTime: "08:54", collectionTime: "09:18", processingTime: "09:19", record: "identity_id=NB-ID-042; role_category=temporary-recovery; extension_state=None-Visible; source_delay=24-minutes", supports: "No extension is visible in the fictional SIEM at processing time.", limits: "The delay prevents a confident source-side absence conclusion." },
  { id: "RAW-04", source: "Session source", eventTime: "09:04", collectionTime: "09:05", processingTime: "09:06", record: "session_id=NB-SES-881; identity_id=NB-ID-042; service_id=NB-SVC-07; destination_category=coordination-admin; operation_category=configuration-review; result=Success", supports: "One fictional session continued after approval_end and reached the critical service.", limits: "Does not prove unauthorized use, harmful intent, privileged modification, or user impact." },
  { id: "RAW-05", source: "Service-health source", eventTime: "09:07", collectionTime: "09:08", processingTime: "09:09", record: "service_id=NB-SVC-07; availability_state=Normal; error_state=No-Increase; impact_category=None-Confirmed; recovery_state=Stable", supports: "No current fictional service disruption is confirmed.", limits: "Normal service health does not prove the activity was expected or authorized." },
  { id: "RAW-06", source: "Change-management source", eventTime: "08:20", collectionTime: "08:21", processingTime: "08:22", record: "change_id=NB-CHG-114; purpose=service-recovery; scope=database-reconciliation; start=08:15; end=08:55; destination=coordination-database", supports: "A fictional approved recovery change existed before the alert.", limits: "The change ended before the observed session and covers a different destination." },
  { id: "RAW-07", source: "SIEM source-health source", eventTime: "09:00", collectionTime: "09:00", processingTime: "09:01", record: "source_id=SRC-03; health_state=Degraded; affected_period=08:50-09:25; freshness=Delayed; completeness=Conditional", supports: "Group-state evidence is not fully reliable for normal-confidence conclusions.", limits: "Source degradation does not prove effective access remained active or inactive." },
  { id: "RAW-08", source: "SIEM source-health source", eventTime: "09:00", collectionTime: "09:00", processingTime: "09:01", record: "source_id=SRC-04; health_state=Conditional; affected_period=08:45-09:30; freshness=Delayed; completeness=Unknown", supports: "Extension evidence may be incomplete at alert time.", limits: "The source state does not prove a valid extension exists." },
];

const normalizationRows = [
  { id: "NORM-01", source: "role_state=Active; approval_end=09:00", normalized: "authorization.assignment_state=active; authorization.window_state=expired", method: "Mapped source role state and compared approval_end with fictional event time.", risk: "The expired interpretation may change if a valid delayed extension exists." },
  { id: "NORM-02", source: "membership_state=Active; sync_state=Delayed", normalized: "access.group_state=active; evidence.group_confidence=conditional", method: "Preserved source state while lowering confidence because of source degradation.", risk: "Normalized Active must not become proof of exact effective access." },
  { id: "NORM-03", source: "extension_state=None-Visible; source_delay=24-minutes", normalized: "authorization.extension_state=unknown", method: "Converted no-visible evidence under delay into Unknown rather than None.", risk: "Mapping no-visible to no-extension would create false certainty." },
  { id: "NORM-04", source: "operation_category=configuration-review; result=Success", normalized: "activity.category=administrative-review; activity.result=success", method: "Mapped a source-specific operation into a shared category.", risk: "The canonical category may hide source-specific detail." },
  { id: "NORM-05", source: "availability_state=Normal; impact_category=None-Confirmed", normalized: "service.active_impact=false; service.impact_confidence=moderate", method: "Combined healthy service evidence with owner-independent availability fields.", risk: "No current impact does not prove no authority, privacy, or evidence risk." },
  { id: "NORM-06", source: "change end=08:55; session=09:04; destination mismatch", normalized: "change.match_state=partial", method: "Compared identity, time, service, destination, and purpose.", risk: "Partial match must not become full approval or full contradiction." },
];

const correlationSteps = [
  ["Identity join", "Join fictional role, group, extension, and session records using identity_id.", "One identity connects assignment, potential effective access, extension evidence, and active session.", "Identity equality does not prove the same actor controlled every record."],
  ["Role-window comparison", "Compare fictional session event time with approval_end and visible extension window.", "Session occurs after approval_end and no valid matching extension is currently visible.", "Extension delay keeps authorization confidence below High."],
  ["Service relationship", "Join fictional session destination and service catalog.", "Session reaches a critical student-support administrative destination.", "Criticality describes potential consequence, not current impact."],
  ["Change comparison", "Compare fictional session identity, service, destination, purpose, and time with approved changes.", "Existing change explains recovery context but not the observed time and destination.", "The change remains a partial alternative."],
  ["Source-health overlay", "Attach fictional group and extension source-health states.", "Observation confidence is stronger than authorization confidence.", "Missing or delayed evidence cannot become absence."],
  ["Impact overlay", "Attach fictional service availability and user-impact evidence.", "Potential severity is High, but active service impact is not confirmed.", "No current impact does not remove authority or privacy concerns."],
];

const alertContract = [
  ["Alert title", "Temporary Recovery Role and Session Continue after Approved End"],
  ["Primary defender question", "Did a fictional temporary recovery identity retain effective authority or session activity beyond its current approved authorization window?"],
  ["Neutral observation", "A fictional temporary recovery role and one session remain Active after approval_end. Extension evidence is delayed, group evidence is Degraded, and current service impact is not confirmed."],
  ["Required evidence", "Role, group, extension, session, service, change, owner, timing, and source-health evidence."],
  ["Severity", "High because privileged authority may affect a critical student-support service."],
  ["Confidence", "Moderate because role and session evidence are Healthy while extension and group evidence are limited."],
  ["Initial priority", "High because the session is active, the authorization window ended, and delay may reduce the response opportunity."],
  ["What the alert supports", "A time-sensitive fictional stale-authority review involving identity, source, and service owners."],
  ["What the alert does not prove", "It does not prove harmful intent, unauthorized use, privileged modification, complete scope, or current service impact."],
  ["Source-health behavior", "No-visible extension becomes Unknown when the source is delayed; missing group evidence cannot become false absence."],
  ["Expected alternatives", "Valid delayed extension, synchronization delay, partial maintenance context, stale owner context, or incomplete recovery."],
  ["Review trigger", "New session, new destination, active impact, missed owner deadline, source-health change, or scope expansion."],
];

const severityMatrix = [
  ["Potential consequence", "Temporary privileged authority reaches a critical service.", "High severity.", "Potential consequence is not current impact."],
  ["Observation confidence", "Healthy role and session evidence show activity after approval_end.", "High observation confidence.", "Observation does not establish authorization."],
  ["Authorization confidence", "Extension source is Conditional and group source is Degraded.", "Moderate authorization confidence.", "No valid extension is visible, but source-side absence is not yet confirmed."],
  ["Active effect", "Service source shows Normal availability and no current error increase.", "No confirmed active service impact.", "Authority and privacy concerns may still exist."],
  ["Time sensitivity", "Session remains Active after expiration and owner responses are pending.", "High urgency.", "Urgency does not prove harmful behavior."],
  ["Scope", "One identity, one session, one critical service, and one destination are observed.", "Bounded current scope with possible wider scope unknown.", "Degraded group evidence limits complete scope."],
  ["Recoverability", "Role revocation and session closure exist through authorized owner processes.", "Potentially recoverable with validation.", "Technical action does not complete historical authorization."],
  ["Initial priority", "High severity, Moderate confidence, active session, short response window, and limited authorization evidence.", "High priority.", "Priority must change when evidence changes."],
];

const triageQuestions = [
  ["Q-01", "Observation", "Which fictional records support role and session activity after approval_end?", "Role event, approval_end, session event, event times, source health, and correlation explanation.", "Case analyst and source owners", "Immediate"],
  ["Q-02", "Authorization", "Did a valid fictional extension exist for the identity, role, service, destination, purpose, and alert period?", "Source-side extension record, scope, approver, start, end, purpose, and source health.", "Identity owner and extension-source owner", "30 minutes"],
  ["Q-03", "Effective access", "Did fictional group membership and active sessions preserve effective authority after expiration?", "Group state, synchronization state, session state, device relationship, operation category, and result.", "Identity owner and group-source owner", "30 minutes"],
  ["Q-04", "Service and impact", "Did the fictional activity affect service availability, users, privacy, evidence, or recovery?", "Service state, errors, user-impact category, owner statement, destination purpose, and recovery state.", "Service owner", "45 minutes"],
  ["Q-05", "Alternatives", "Does the fictional recovery change, synchronization delay, or delayed extension fully explain the observation?", "Change scope, time, destination, owner, expected behavior, source health, and extension event time.", "Change, identity, and source owners", "45 minutes"],
  ["Q-06", "Scope", "Are additional fictional identities, sessions, services, destinations, devices, or periods affected?", "Unique relationship review, duplicate handling, source coverage, service dependencies, and blind periods.", "Case analyst and SIEM quality owner", "1 hour"],
  ["Q-07", "Source health", "Which conclusions are limited by fictional Degraded or Conditional evidence?", "Freshness, completeness, schema, parser, queue, coverage, conflict, recovery, and affected detections.", "Source owners and SIEM quality owner", "30 minutes"],
  ["Q-08", "Closure", "Which fictional evidence, owner actions, validation, residual risk, and reopen conditions are required before closure?", "Authorization, role and group state, sessions, service impact, source recovery, validation, and approvals.", "Case owner with identity, service, source, and risk owners", "Before closure"],
];

const alternatives = [
  ["Valid extension arrived late", "Extension source is delayed and current SIEM evidence may be incomplete.", "Identity owner initially sees no current extension and the visible change ended earlier.", "Source-side extension record with event time, scope, owner, and approval authority.", "Could move the case to Expected only if every scope and timing field matches."],
  ["Group synchronization delay", "Group source is Degraded and reports delayed synchronization.", "Role and session sources remain Healthy and show continuing activity.", "Source-side group state, expected synchronization duration, event times, and recovery status.", "May explain effective-access delay without proving authorization."],
  ["Approved recovery activity", "A recovery change exists and the identity has a temporary recovery role.", "The change ended before the session and covers a different destination.", "Change-owner clarification and any additional approved record.", "Currently a partial explanation only."],
  ["Stale service context", "Criticality or ownership may have changed.", "Current service source and catalog agree on the relationship.", "Service-owner confirmation and catalog review date.", "Could adjust severity or routing but not the role and session timing."],
  ["Recovery replay", "One source is recovering and delayed delivery exists.", "Role and session records have distinct event IDs and current event times.", "Uniqueness, replay markers, event IDs, collection paths, and source-owner review.", "May reduce alert count but not remove the underlying condition."],
];

const escalationPlan = [
  ["Identity escalation", "Privileged role and session remain active after expiration while authorization is unresolved.", "Level 3 time-sensitive mission escalation", "Identity owner and access-governance owner", "Was there a valid matching extension, and what is the current role, group, and effective-access state?"],
  ["Source-health escalation", "Extension and group evidence are delayed and affect authorization confidence.", "Level 2 multi-owner coordination", "Extension-source owner, group-source owner, and SIEM quality owner", "Which periods and conclusions are affected, when will evidence recover, and what alternate evidence is available?"],
  ["Service-owner escalation", "A critical service is involved and active impact remains unconfirmed.", "Level 2 multi-owner coordination", "Service owner and recovery owner", "Did the activity affect availability, users, privacy, configuration state, or recovery?"],
  ["Leadership escalation", "Use only for owner nonresponse, active impact, broad scope, privacy concern, resource conflict, or residual-risk acceptance beyond operational authority.", "Level 4 leadership or risk decision", "Program owner, risk owner, or privacy authority", "Which resource, priority, risk acceptance, or governance decision is required?"],
];

const timeline = [
  ["08:15", "Change start", "Fictional recovery change begins for database reconciliation.", "RAW-06", "Expected within documented scope."],
  ["08:55", "Change end", "Approved recovery change window ends.", "RAW-06", "Later session falls outside the change window."],
  ["08:58", "Role event", "Temporary recovery role remains Active.", "RAW-01", "Role assignment active near expiration."],
  ["09:00", "Approval end", "Approved role window ends.", "RAW-01", "Extension evidence required."],
  ["09:02", "Group event", "Group source records Active membership with delayed synchronization.", "RAW-02 and RAW-07", "Effective-access confidence Conditional."],
  ["09:04", "Session event", "Session reaches coordination-admin after approval_end.", "RAW-04", "Time-sensitive stale-authority question supported."],
  ["09:07", "Service event", "Service remains available with no confirmed user impact.", "RAW-05", "Potential severity High; active impact unconfirmed."],
  ["09:08", "Alert", "SIEM creates the fictional stale-authority alert.", "Alert contract", "New."],
  ["09:10", "Triage", "Analyst creates neutral observation and primary question.", "Q-01 through Q-08", "In Review."],
  ["09:15", "Owner requests", "Identity, source, and service owners receive bounded requests.", "Escalation plan", "Conditional and High priority."],
  ["09:31", "Escalation", "Identity owner misses the initial deadline while session remains active.", "Escalation plan", "Escalated Level 3."],
  ["09:38", "Authorized action", "Identity owner initiates approved role revocation.", "Action log", "Action initiated; outcome not yet validated."],
  ["09:44", "Validation", "Role source reports Revoked and session source reports Closed.", "Validation log", "Immediate active condition ended."],
  ["09:49", "Source recovery", "Extension source enters Recovering and historical records arrive.", "Source-health record", "Historical authorization unresolved."],
  ["10:12", "Recovered evidence", "Recovered record shows no valid matching extension.", "Recovered approval record", "Authorization conclusion strengthens."],
  ["10:18", "Service validation", "Service owner confirms no user impact or validated configuration change.", "Service note", "No confirmed active service impact."],
  ["10:25", "Case decision", "Case moves from Escalated to Conditional pending group reconciliation and residual-risk review.", "Decision log", "Conditional."],
];

const caseNotes = [
  ["NOTE-01", "Intake", "09:10 — Case opened for a fictional role and session remaining Active after approval_end. Extension evidence is delayed, group evidence is Degraded, and service impact is not confirmed."],
  ["NOTE-02", "Evidence", "09:12 — Healthy role and session evidence support activity after expiration. These records do not prove authorization, harmful intent, privileged modification, complete scope, or service impact."],
  ["NOTE-03", "Source health", "09:13 — Group source Degraded and extension source Conditional. No-visible extension is interpreted as Unknown until recovery and validation complete."],
  ["NOTE-04", "Hypotheses", "09:14 — Valid delayed extension, synchronization delay, and partial recovery-change context remain unconfirmed alternatives with named owners and next evidence."],
  ["NOTE-05", "Escalation", "09:31 — Level 3 identity escalation activated because privileged role and session remain Active after expiration and the owner deadline was missed. Case owner retains coordination."],
  ["NOTE-06", "Action", "09:38 — Identity owner initiated approved role revocation. Action completion does not prove group reconciliation, session closure, service impact resolution, or historical authorization."],
  ["NOTE-07", "Validation", "09:44 — Role source reports Revoked and session source reports Closed. Immediate active condition ended. Group and extension sources remain in recovery."],
  ["NOTE-08", "Recovered evidence", "10:12 — Recovered extension evidence shows no matching approval for the observed service, destination, and period. Historical authorization confidence increases."],
  ["NOTE-09", "Service validation", "10:18 — Service owner confirms no current user impact, no error increase, and no validated configuration change. This does not erase the stale-authority condition."],
  ["NOTE-10", "Decision", "10:25 — Case moves from Escalated to Conditional. Immediate authority and session condition ended; group reconciliation, residual risk, closure, and reopen criteria remain open."],
];

const dashboardReview = [
  ["Alert volume", "The fictional rule created six raw alerts but only two unique analyst work items.", "Are duplicates caused by replay, retries, or meaningful repeated sessions?", "Preserve raw count and unique work separately."],
  ["Source health", "Two required fictional sources were Degraded or Conditional during the alert period.", "Which conclusions and metrics are affected?", "Mark authorization metrics Conditional until recovery."],
  ["Queue age", "The fictional case reached first review in two minutes but owner response exceeded deadline.", "Is delay caused by analyst queue, ownership, or specialist capacity?", "Track analyst delay and owner delay separately."],
  ["Escalation quality", "Identity escalation was timely, but service-impact ownership was assigned later.", "Did all bounded questions receive the correct owner at escalation time?", "Improve handoff completeness."],
  ["Case quality", "Fictional notes preserve evidence layers, actions, validation, and unresolved closure conditions.", "Can another reviewer reconstruct every major decision?", "Pass with one open source-reconciliation gap."],
  ["Noise and tuning", "Replay creates duplicate raw alerts, but a changed destination must remain a grouping break.", "Can duplicate work be reduced without hiding new scope?", "Test narrow deduplication in shadow mode."],
];

const tuningProposal = [
  ["Quality problem", "Fictional recovery replay creates duplicate raw alerts for the same event and increases analyst workload."],
  ["Root cause", "Duplicate delivery during source recovery, not the stale-authority defender question itself."],
  ["Proposed change", "Deduplicate only records with identical event ID, session ID, destination, result, event time, and recovery-replay marker."],
  ["Break conditions", "New identity, session, destination, service, result, severity, source-health state, scope, or event time remains visible."],
  ["Expected benefit", "Reduce duplicate work while preserving all unique stale-authority questions."],
  ["False-negative risk", "Over-deduplication could hide repeated distinct sessions or changed destinations."],
  ["Validation", "Positive duplicate, distinct repeat, changed destination, second session, source recovery, boundary, regression, and rollback cases."],
  ["Rollout", "Fictional shadow comparison followed by limited staged rollout after all quality gates pass."],
  ["Rollback", "Return to the last validated grouping state when any break-condition test fails."],
  ["Owner", "Detection-quality owner with source-owner, identity-owner, and SIEM-quality review."],
  ["Expiration", "Review after source recovery changes, service redesign, identity-model change, or ninety days."],
  ["Residual risk", "Unknown future replay patterns may require additional uniqueness rules and monitoring."],
];

const closureCriteria = [
  ["Primary question answered", "Recovered fictional extension evidence confirms no valid matching extension after approval_end.", "Complete"],
  ["Role and effective access resolved", "Role source reports Revoked; group reconciliation remains incomplete.", "Conditional"],
  ["Sessions resolved", "Observed session reports Closed; no additional sessions found in currently healthy evidence.", "Complete with source-health limitation"],
  ["Service impact reviewed", "Service owner and Healthy service source report no current impact or validated configuration change.", "Complete"],
  ["Source health reconciled", "Extension source recovered; group source remains Recovering.", "Incomplete"],
  ["Actions validated", "Role revocation and session closure validated through fictional source evidence.", "Complete"],
  ["Residual risk assigned", "Group reconciliation and quality-improvement follow-up require owners and review dates.", "Incomplete"],
  ["Reopen triggers documented", "New session, changed destination, failed validation, conflicting recovered evidence, or repeated stale authority.", "Complete"],
];

const validationCases = [
  ["CAP-T01", "Healthy expected case", "Current matching extension, healthy sources, expected destination, active owner, and no impact.", "Expected or low-priority review with expiration and break conditions.", "Expected-activity accuracy"],
  ["CAP-T02", "Expired role and active session", "Role and session remain active after approval_end with no valid extension.", "High-priority time-sensitive triage and identity escalation.", "Stale-authority visibility"],
  ["CAP-T03", "Delayed extension source", "No extension visible while source is Conditional.", "Authorization remains Unknown or Conditional; no false absence claim.", "Source-health honesty"],
  ["CAP-T04", "Broad Blind period", "Session source is Blind during the key period.", "Source-Degraded or Unknown with alternate evidence and reassessment.", "False-confidence prevention"],
  ["CAP-T05", "Current impact", "Healthy service evidence confirms broad user disruption.", "Increase priority and activate service plus recovery escalation.", "Mission-impact response"],
  ["CAP-T06", "Partial change match", "Change matches identity and purpose but not time or destination.", "Keep as a partial alternative; do not mark Expected.", "Authorization scope accuracy"],
  ["CAP-T07", "Duplicate replay", "Several records share identical event, session, destination, result, and replay marker.", "Group as one work item while preserving delivery history.", "Workload reduction"],
  ["CAP-T08", "Changed destination", "A new destination appears inside a grouped stale-authority case.", "Break grouping and reassess scope, severity, priority, and owners.", "Widening-scope visibility"],
  ["CAP-T09", "Owner nonresponse", "Identity owner misses the deadline while the privileged session remains active.", "Activate aging and alternate-owner paths without treating nonresponse as proof.", "Time-sensitive accountability"],
  ["CAP-T10", "Action without validation", "Role revocation is initiated but group and session state are not checked.", "Keep the case open and separate action from outcome.", "Closure quality"],
  ["CAP-T11", "Recovered conflicting evidence", "After closure, recovery reveals a second session or extension mismatch.", "Reopen the original case and preserve chronology.", "Historical continuity"],
  ["CAP-T12", "Public portfolio", "Student plans to reuse sanitized real alert screenshots and timelines.", "Portfolio validation fails; every detail must be invented.", "Confidentiality and safety"],
];

const evidenceMatrix = [
  ["CAP-E01", "Role and session evidence", "Role and session remain Active after approval_end.", "A stale-authority review is justified.", "Does not prove harmful intent, unauthorized use, or service impact.", "Set High priority with bounded authorization questions."],
  ["CAP-E02", "Extension-source health", "Extension source is Conditional and delayed.", "Authorization absence cannot be confirmed at alert time.", "Does not prove a valid extension exists.", "Keep authorization confidence Moderate and request source-side evidence."],
  ["CAP-E03", "Group-source health", "Group source is Degraded and reports Active membership.", "Effective-access state may remain active but confidence is limited.", "Does not prove exact access state for the full period.", "Assign source-health ownership and keep the case Conditional."],
  ["CAP-E04", "Service evidence", "Critical service remains available with no confirmed current impact.", "Active service impact is not currently supported.", "Does not remove authority, privacy, or evidence concerns.", "Keep severity and active impact separate."],
  ["CAP-E05", "Change evidence", "Recovery change exists but ends earlier and covers a different destination.", "The change provides partial context only.", "Does not prove the later session was unauthorized.", "Keep as an alternative requiring owner review."],
  ["CAP-E06", "Recovered extension evidence", "No valid matching extension exists for the observed period and destination.", "Historical authorization confidence increases.", "Does not prove intent or privileged modification.", "Support the stale-authority conclusion and corrective-action review."],
  ["CAP-E07", "Action validation", "Role source reports Revoked and session source reports Closed.", "The immediate active condition ended.", "Does not complete group reconciliation, historical review, residual risk, or closure.", "Move from Escalated to Conditional rather than directly to Resolved."],
  ["CAP-E08", "Quality review", "Replay creates duplicate raw alerts while changed destinations remain meaningful.", "Narrow deduplication may reduce workload.", "Does not justify broad grouping or suppression.", "Test exact uniqueness plus break conditions in shadow mode."],
];

const leadershipBrief = [
  ["What happened", "A fictional temporary recovery role and session remained active after approval_end. Delayed extension and group evidence limited early authorization confidence."],
  ["Why it mattered", "The identity had temporary privileged authority associated with a critical student-support service, creating high potential consequence and a short review window."],
  ["What defenders did", "Analysts prioritized the case, escalated identity and source questions, preserved source-health limits, and coordinated authorized role revocation plus session validation."],
  ["What was confirmed", "Recovered extension evidence showed no valid matching extension. Role and observed session were later validated as ended."],
  ["What was not confirmed", "No harmful intent, privileged modification, broad scope, or current service impact was established."],
  ["What remains open", "Group-source reconciliation, residual-risk ownership, quality-improvement validation, and final closure review remain incomplete."],
  ["Decision needed", "Maintain the case as Conditional until source reconciliation and residual-risk criteria pass; approve only narrow replay deduplication after full regression testing."],
];

const mistakes = [
  ["Starting with the alert title", "A fictional analyst writes confirmed unauthorized access before reviewing source health.", "Unsupported certainty controls the case.", "Begin with a neutral observation and primary defender question."],
  ["Treating normalized fields as direct facts", "A derived expired state is documented as a source-recorded value.", "Transformation assumptions disappear.", "Preserve source value, normalized value, transformation, and limitation."],
  ["Using severity as priority", "A High-severity alert is prioritized without confidence, active effect, scope, timing, or recoverability.", "Queue decisions become inconsistent.", "Separate severity, confidence, and priority."],
  ["Ignoring source health", "No-visible extension is treated as proof of no extension during delay.", "Missing evidence becomes false absence.", "Use Conditional, Source-Degraded, or Unknown states."],
  ["Escalating without a question", "The case is sent to several teams with no bounded request.", "Ownership and response quality weaken.", "Assign separate identity, source, service, and leadership questions."],
  ["Closing after action", "The case closes immediately after role revocation begins.", "Sessions, group state, source recovery, validation, and residual risk remain unresolved.", "Separate action, validation, outcome, closure, and reopening."],
  ["Broad suppression", "All stale-role alerts are suppressed during source recovery.", "Meaningful stale authority may disappear.", "Repair the source and test narrow deduplication or expected handling."],
  ["Alert count as quality proof", "A tuning proposal passes because volume falls.", "Changed destinations, second sessions, and false-negative risk may be hidden.", "Require uniqueness, coverage, regression, and rollback tests."],
  ["Leadership overstatement", "A briefing claims an incident was prevented even though only stale authority was confirmed.", "Risk and program performance are misrepresented.", "Separate confirmed facts, unresolved questions, actions, outcomes, and residual risk."],
  ["Real material in the capstone", "A portfolio package includes sanitized real alerts, screenshots, owner messages, or timelines.", "Sensitive systems, people, suppliers, priorities, and methods may be exposed.", "Invent every organization, record, alert, identity, service, owner, date, decision, action, and outcome."],
];

const labPhases = [
  ["Phase 1", "Mission and safety", "Document the fictional mission, service, stakeholders, identity model, evidence sources, privacy boundary, and fictionalization statement.", "Mission and safety charter", "No real organization, system, identity, address, screenshot, or alert appears."],
  ["Phase 2", "Sources and health", "Classify identity, role, group, extension, session, service, change, and source-health evidence.", "Source inventory and health matrix", "Every conclusion shows which health conditions support or limit it."],
  ["Phase 3", "Normalization and correlation", "Preserve source values, document transformations, join relationships, and overlay service, change, and health context.", "Normalization and correlation workbook", "Derived context is never presented as direct evidence."],
  ["Phase 4", "Alert contract", "Write observation, question, evidence, health behavior, severity, confidence, priority, alternatives, non-proof statements, owners, and triggers.", "Complete alert contract", "The alert states what it supports and does not prove."],
  ["Phase 5", "Triage", "Build authorization, effective-access, service, impact, source-health, scope, alternative, ownership, and closure questions.", "Question map and evidence requests", "Every request is purpose-limited, owned, time-bounded, and decision-linked."],
  ["Phase 6", "Severity and priority", "Evaluate potential consequence, certainty, active effect, time sensitivity, scope, recoverability, ownership, and source health.", "Severity-confidence-priority record", "The three concepts remain separate."],
  ["Phase 7", "Escalation and case", "Assign escalation types, levels, owners, deadlines, acceptance, chronology, notes, decisions, actions, validation, and states.", "Escalation and case package", "One coordinating owner preserves the complete case."],
  ["Phase 8", "Dashboards and metrics", "Evaluate volume, uniqueness, source health, queue age, owner delay, case quality, coverage, workload, privacy, and residual risk.", "Decision-oriented dashboard review", "Averages, denominators, duplicates, and blind periods are addressed."],
  ["Phase 9", "Quality improvement", "Classify replay duplication, propose narrow deduplication, define breaks, test in shadow mode, assign rollback, and document expiration.", "Tuning and rollback package", "Lower count cannot pass when coverage tests fail."],
  ["Phase 10", "Closure and communication", "Review authorization, scope, impact, validation, source health, residual risk, closure, reopening, and leadership decisions.", "Closure review and leadership brief", "The case cannot close while required source or risk obligations remain incomplete."],
];

const quizQuestions = [
  { question: "What is the strongest first step in the fictional A6 capstone?", choices: ["Escalate immediately.", "Start tuning.", "Establish the fictional mission, safety boundary, source inventory, and neutral defender question.", "Close quickly."], answer: 2, explanation: "The workflow begins with mission, scope, evidence, safety, and a bounded question." },
  { question: "Why is fictional authorization confidence only Moderate at alert time?", choices: ["Because the service is critical.", "Because role and session evidence are Healthy while extension and group evidence are delayed or Degraded.", "Because all alerts begin at Moderate.", "Because no impact is confirmed."], answer: 1, explanation: "The observation is strong, but the authorization conclusion remains limited by source health." },
  { question: "Which fictional priority decision is strongest?", choices: ["Low because no impact is confirmed.", "High because privileged authority and an active session continue after expiration under limited authorization evidence and a short response window.", "Critical because harmful intent is proven.", "No priority until all sources are Healthy."], answer: 1, explanation: "High priority reflects consequence, active session, urgency, and uncertainty without claiming intent." },
  { question: "What should happen after role revocation and session closure are validated?", choices: ["Close immediately.", "Delete evidence.", "End the immediate active condition but keep the case Conditional until source reconciliation, residual risk, and closure criteria are complete.", "Mark Expected."], answer: 2, explanation: "Action and immediate outcome do not complete historical authorization or lifecycle requirements." },
  { question: "Which fictional noise-reduction proposal is strongest?", choices: ["Suppress all stale-role alerts.", "Raise a global threshold.", "Deduplicate only identical replay records and break on new identity, session, destination, service, result, severity, or source-health state.", "Group every alert for the same identity."], answer: 2, explanation: "Narrow deduplication addresses replay while preserving meaningful novelty." },
  { question: "When should the fictional case be reopened?", choices: ["Only when leadership requests it.", "When new evidence, changed scope, repeated behavior, failed validation, source recovery, or residual-risk triggers change the prior conclusion.", "Whenever any alert appears.", "Never."], answer: 1, explanation: "Reopening follows documented evidence and lifecycle triggers." },
  { question: "Which public portfolio approach is safest?", choices: ["Use sanitized real alerts.", "Use real service names with fake identities.", "Invent every organization, record, alert, identity, service, owner, date, decision, action, metric, and outcome.", "Use real timelines without addresses."], answer: 2, explanation: "Complete fictionalization protects real people, systems, suppliers, priorities, and defensive capabilities." },
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
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">Module Test</Link>
    </div>
  );
}

export default function SiemTriageLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A6</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 10 of 10</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Full SIEM and Alert-Triage Capstone</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A6.10 SIEM Triage Lab</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete an end-to-end fictional defensive investigation using log collection, normalization, correlation, alert design, severity, priority, triage questions, evidence review, escalation, case management, dashboards, metrics, tuning, rollback, closure, and reopening.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A6: SIEM and Alert Triage Concepts" lessonTitle="SIEM Triage Lab" lessonNumber={10} totalLessons={10} />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, records, identities, devices, services, destinations, owners, dates, decisions, actions, metrics, and outcomes.",
            "I will preserve source health, evidence provenance, timing, normalization, correlation, limitations, alternatives, confidence, severity, priority, and ownership.",
            "I will separate observations, facts, enrichment, derived context, hypotheses, decisions, actions, validation, outcomes, residual uncertainty, and residual risk.",
            "I will not treat no visible evidence, alert silence, fast closure, lower volume, or a completed action as proof of safety or resolution.",
            "I will require bounded questions, purpose-limited evidence requests, quality gates, break conditions, rollback, closure criteria, and reopen triggers.",
            "I will not access, copy, sanitize, upload, query, investigate, tune, suppress, deploy, close, reopen, or modify any real SIEM, alert, case, source, account, endpoint, network, domain, service, supplier, organization, or person.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Strong Triage Decision Can Remain Conditional">
          <p className="leading-8">Fictional Northbridge has strong evidence that a temporary role and session continued after expiration. Yet extension evidence is delayed, group evidence is Degraded, service impact is not confirmed, and recovery is incomplete. The professional goal is not to force a dramatic final label. It is to make the strongest evidence-supported decision, assign the right owners, preserve the right uncertainty, and define exactly what must happen next.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak conclusion</p><p className="mt-2 leading-7">“The SIEM proved malicious privileged access and the identity team fixed it.”</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong conclusion</p><p className="mt-2 leading-7">“The SIEM supported stale authority and active session evidence after expiration. Authorized revocation ended the immediate condition. Historical authorization, group reconciliation, residual risk, and closure remain under review.”</p></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Advanced defensive work values accurate uncertainty more than impressive certainty.</div>
        </SectionCard>

        <SectionCard eyebrow="Exactly Five Learning Objectives" title="What You Will Be Able to Do">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="SIEM Work Is a Chain of Evidence and Decisions">
          <p className="leading-8">Fictional SIEM work fails when teams treat logs, alerts, severity, priority, triage, escalation, notes, dashboards, and tuning as separate activities. A parser defect can distort normalization. A normalization defect can distort correlation. A correlation defect can distort severity. A priority error can delay review. A weak note can hide uncertainty. A bad metric can reward premature closure. A broad tuning change can hide the next important condition.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Evidence chain", "Sources, parsing, normalization, enrichment, correlation, timing, health, and provenance must remain traceable."],
              ["Decision chain", "Severity, confidence, priority, state, escalation, actions, closure, and reopening must remain evidence-supported."],
              ["Improvement chain", "Metrics, tuning, validation, rollback, ownership, debt, residual risk, and review must preserve mission coverage."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"><h3 className="font-black text-purple-100">{title}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Framework" title="The S-I-E-M C-A-S-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["S — Sources and safety", "Define mission, evidence sources, source health, owners, privacy, retention, and non-operational boundaries."],
              ["I — Interpret and normalize", "Preserve source values, parsed fields, normalized values, enrichment, transformations, timing, and limitations."],
              ["E — Evaluate correlation", "Join identity, role, group, extension, session, service, destination, change, owner, and health relationships."],
              ["M — Make the alert meaningful", "Document observation, primary question, evidence, non-proof statements, severity, confidence, priority, alternatives, and triggers."],
              ["C — Conduct triage", "Ask authorization, effective-access, service, impact, source-health, scope, alternative, ownership, and closure questions."],
              ["A — Assign escalation and action", "Name owners, levels, deadlines, handoff acceptance, authorized actions, validation, and de-escalation criteria."],
              ["S — Sustain the case", "Maintain chronology, notes, evidence ledger, decisions, state changes, residual uncertainty, closure, and reopening."],
              ["E — Evolve quality", "Use dashboards, metrics, root cause, tuning, break conditions, shadow comparison, rollback, debt, and lifecycle review."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Capstone Terms">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-200">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Context" title="Fictional Northbridge Organization">
          <div className="grid gap-4 md:grid-cols-2">
            {organizationContext.map(([area, detail]) => (
              <article key={area} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-purple-100">{area}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 1" title="Review Eight Fictional Evidence Sources">
          <div className="grid gap-5">
            {sourceInventory.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><h3 className="text-xl font-black text-white">{item.source}</h3><span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">{item.health}</span></div>
                <p className="mt-4 leading-7 text-slate-300">{item.purpose}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required fields</p><p className="mt-2 text-sm leading-6">{item.fields}</p></div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{item.limitation}</p></div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 2" title="Inspect Eight Raw Evidence Records">
          <div className="grid gap-5">
            {evidenceRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 font-mono text-xs font-black text-blue-200">{item.id}</span><h3 className="font-black text-white">{item.source}</h3></div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[ ["Event time", item.eventTime], ["Collection time", item.collectionTime], ["Processing time", item.processingTime] ].map(([label, value]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 font-mono text-sm text-slate-200">{value}</p></div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Fictional record</p><p className="mt-2 break-words font-mono text-sm leading-6 text-slate-300">{item.record}</p></div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Supports</p><p className="mt-2 text-sm leading-6">{item.supports}</p></div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Does not prove</p><p className="mt-2 text-sm leading-6">{item.limits}</p></div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 3" title="Review Six Normalization Decisions">
          <div className="grid gap-5 md:grid-cols-2">
            {normalizationRows.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-200">{item.id}</span>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Source value</p><p className="mt-2 break-words font-mono text-sm leading-6">{item.source}</p></div>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Normalized value</p><p className="mt-2 break-words font-mono text-sm leading-6">{item.normalized}</p></div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Transformation</p><p className="mt-2 text-sm leading-6">{item.method}</p></div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Risk</p><p className="mt-2 text-sm leading-6">{item.risk}</p></div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 4" title="Trace Six Correlation Stages">
          <div className="grid gap-5">
            {correlationSteps.map(([stage, logic, result, limitation]) => (
              <article key={stage} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-cyan-100">{stage}</h3><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Logic</p><p className="mt-2 text-sm leading-6">{logic}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Result</p><p className="mt-2 text-sm leading-6">{result}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{limitation}</p></div></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 5" title="Build the Twelve-Field Alert Contract">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr><th className="px-4 py-3 font-black">Field</th><th className="px-4 py-3 font-black">Fictional value</th></tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{alertContract.map(([field, value]) => (<tr key={field}><td className="px-4 py-4 align-top font-bold text-white">{field}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{value}</td></tr>))}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 6" title="Separate Severity, Confidence, and Priority">
          <div className="grid gap-5 md:grid-cols-2">
            {severityMatrix.map(([dimension, evidence, assessment, limitation]) => (
              <article key={dimension} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{dimension}</h3><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p><p className="mt-2 text-sm leading-6">{evidence}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Assessment</p><p className="mt-2 text-sm leading-6">{assessment}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6">{limitation}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 7" title="Create Eight Triage Questions">
          <div className="grid gap-5">
            {triageQuestions.map(([id, domain, question, evidence, owner, deadline]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span><h3 className="font-black text-white">{domain}</h3></div><div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Question</p><p className="mt-2 text-sm leading-6">{question}</p></div><div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence needed</p><p className="mt-2 text-sm leading-6">{evidence}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Owner</p><p className="mt-2 text-sm leading-6">{owner}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Deadline</p><p className="mt-2 text-sm leading-6">{deadline}</p></div></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 8" title="Compare Five Alternative Explanations">
          <div className="grid gap-5">
            {alternatives.map(([name, support, contradiction, next, effect]) => (
              <article key={name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-purple-100">{name}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Supporting evidence", support], ["Contradicting evidence", contradiction], ["Next evidence", next], ["Decision effect", effect]].map(([label, detail]) => (<div key={`${name}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>))}</div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 9" title="Build the Escalation Plan">
          <div className="grid gap-5">
            {escalationPlan.map(([type, trigger, level, recipient, question]) => (
              <article key={type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-xl font-black text-red-100">{type}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Trigger", trigger], ["Level", level], ["Recipient", recipient], ["Bounded question", question], ["Acceptance criteria", "Receiving owner confirms the question, deadline, evidence boundary, and authority to answer."]].map(([label, detail]) => (<div key={`${type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>))}</div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 10" title="Reconstruct the Fictional Chronology">
          <div className="grid gap-4">
            {timeline.map(([time, type, event, evidence, state]) => (
              <article key={`${time}-${event}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.18fr_0.25fr_1fr]"><div><p className="font-mono text-lg font-black text-cyan-200">{time}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{type}</p></div><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-3 text-sm text-blue-50">{evidence}</div><div><p className="leading-7 text-slate-300">{event}</p><p className="mt-2 text-sm font-semibold text-emerald-200">State: {state}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 11" title="Write Ten Professional Case Notes">
          <div className="grid gap-4">
            {caseNotes.map(([id, type, text]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-200">{id}</span><span className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">{type}</span></div><p className="mt-4 leading-7 text-slate-300">{text}</p></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 12" title="Review Six Dashboard Decisions">
          <div className="grid gap-5 md:grid-cols-2">
            {dashboardReview.map(([panel, observation, question, decision]) => (
              <article key={panel} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{panel}</h3><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Observation</p><p className="mt-2 text-sm leading-6">{observation}</p></div><div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Quality question</p><p className="mt-2 text-sm leading-6">{question}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Decision</p><p className="mt-2 text-sm leading-6">{decision}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 13" title="Design the Twelve-Field Tuning Proposal">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr><th className="px-4 py-3 font-black">Field</th><th className="px-4 py-3 font-black">Fictional value</th></tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{tuningProposal.map(([field, value]) => (<tr key={field}><td className="px-4 py-4 align-top font-bold text-white">{field}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{value}</td></tr>))}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 14" title="Evaluate Eight Closure Criteria">
          <div className="grid gap-5 md:grid-cols-2">
            {closureCriteria.map(([criterion, evidence, status]) => (
              <article key={criterion} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-emerald-100">{criterion}</h3><div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Fictional evidence</p><p className="mt-2 text-sm leading-6">{evidence}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Status</p><p className="mt-2 text-sm font-black">{status}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Capstone Stage 15" title="Validate Twelve End-to-End Scenarios">
          <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="min-w-full divide-y divide-slate-700 text-left text-sm"><thead className="bg-slate-950 text-cyan-200"><tr>{["Case", "Type", "Fictional input", "Expected result", "Quality protected"].map((heading) => (<th key={heading} className="px-4 py-3 font-black">{heading}</th>))}</tr></thead><tbody className="divide-y divide-slate-800 bg-slate-900">{validationCases.map(([id, type, input, expected, protectedQuality]) => (<tr key={id}><td className="px-4 py-4 align-top font-mono font-bold text-white">{id}</td><td className="px-4 py-4 align-top font-semibold text-cyan-200">{type}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{input}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{expected}</td><td className="px-4 py-4 align-top leading-6 text-slate-300">{protectedQuality}</td></tr>))}</tbody></table></div>
        </SectionCard>

        <SectionCard eyebrow="Leadership Communication" title="Write the Seven-Part Leadership Brief">
          <div className="grid gap-5">
            {leadershipBrief.map(([topic, message]) => (
              <article key={topic} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-purple-100">{topic}</h3><p className="mt-3 leading-7 text-slate-300">{message}</p></article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge SIEM Triage Capstone Dashboard"
          subtitle="Fictional source health, alert quality, priority, owner deadlines, case state, closure readiness, tuning validation, and residual risk for training only."
          metrics={[
            { label: "Current fictional case state", value: "Conditional", note: "Immediate active condition ended, but group-source reconciliation and residual-risk ownership remain incomplete." },
            { label: "Open fictional owner and evidence obligations", value: "4", note: "Group reconciliation, quality validation, residual-risk assignment, and final closure review remain open." },
            { label: "Capstone quality gates passed", value: "9 / 12", note: "Closure, source recovery, and tuning coverage-preservation gates remain incomplete." },
          ]}
        />

        <FakeAlertCard
          title="Capstone Closure Is Not Yet Supported"
          severity="High"
          time="6:12 PM"
          source="Fake Northbridge SIEM Governance Console"
          details="The fictional role is Revoked and the observed session is Closed. Recovered extension evidence shows no valid matching extension, but group-source reconciliation, residual-risk ownership, tuning regression, and final closure approval remain incomplete."
          recommendation="Keep the fictional case Conditional. Complete group-source recovery, residual-risk assignment, tuning coverage validation, closure review, and documented reopen triggers before resolving the case."
        />

        <FakeLogPanel
          title="Fake End-to-End SIEM Triage Timeline"
          logs={[
            "08:58 ROLE state='active'",
            "09:00 APPROVAL state='expired'",
            "09:02 GROUP state='active' health='degraded'",
            "09:04 SESSION state='active' service='critical'",
            "09:07 IMPACT service='none-confirmed'",
            "09:08 ALERT state='new'",
            "09:10 CASE state='in-review'",
            "09:13 SOURCE extension='conditional'",
            "09:15 REQUEST identity='sent'",
            "09:15 REQUEST source='sent'",
            "09:15 REQUEST service='sent'",
            "09:31 ESCALATION level='3'",
            "09:38 ACTION role-revocation='initiated'",
            "09:44 VALIDATION role='revoked'",
            "09:44 VALIDATION session='closed'",
            "09:49 SOURCE extension='recovering'",
            "10:12 EVIDENCE extension='no-valid-match'",
            "10:18 IMPACT service='none-confirmed'",
            "10:25 CASE state='conditional'",
            "18:12 CLOSURE readiness='incomplete'",
          ]}
        />

        <SectionCard eyebrow="Fictional Evidence Matrix" title="What the Capstone Evidence Supports—and What It Does Not Prove">
          <div className="grid gap-5">
            {evidenceMatrix.map(([id, source, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span><h3 className="font-black text-white">{source}</h3></div><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Observation", observation], ["Supports", supports], ["Does not prove", limits], ["Capstone use", use]].map(([label, detail]) => (<div key={`${id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>))}</div></article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="What Is the Best Final Capstone Decision?"
          question="Which fictional decision is best supported at 10:25?"
          evidence={[
            "Role source reports Revoked.",
            "Observed session source reports Closed.",
            "Recovered extension evidence shows no valid matching extension.",
            "Service owner and service source report no confirmed current impact.",
            "Group source remains Recovering.",
            "Residual-risk ownership is incomplete.",
            "Replay-deduplication tuning has not passed every coverage test.",
            "Reopen triggers are documented.",
          ]}
          options={[
            "Keep the fictional case Conditional until group-source reconciliation, residual-risk ownership, tuning validation, and final closure review are complete.",
            "Mark Resolved because the role and session ended.",
            "Mark Expected because no service impact occurred.",
            "Mark confirmed malicious activity because no valid extension existed.",
          ]}
          bestAnswer={0}
          explanation="The first option separates the confirmed stale-authority condition and validated immediate outcome from unresolved source, risk, quality, and lifecycle obligations that still block closure."
        />

        <SectionCard eyebrow="Common Mistakes" title="Avoid Ten Capstone Errors">
          <div className="grid gap-5 md:grid-cols-2">
            {mistakes.map(([mistake, observation, impact, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-red-100">{mistake}</h3><div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fictional observation</p><p className="mt-2 text-sm leading-6">{observation}</p></div><div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Decision impact</p><p className="mt-2 text-sm leading-6">{impact}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p><p className="mt-2 text-sm leading-6">{correction}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Capstone Lab" title="Complete Ten Capstone Phases">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Use only the supplied fictional Northbridge evidence. Do not access, copy, sanitize, upload, query, investigate, tune, suppress, deploy, escalate, close, reopen, or modify any real SIEM, alert, case, source, identity, account, endpoint, network, domain, service, supplier, organization, system, or person.</div>
          <div className="mt-6 grid gap-5">
            {labPhases.map(([phase, title, tasks, output, gate]) => (
              <article key={phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex items-start gap-4"><span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl bg-cyan-400 px-3 text-center text-sm font-black text-slate-950">{phase}</span><div><h3 className="text-xl font-black text-cyan-100">{title}</h3><p className="mt-2 leading-7 text-slate-300">{tasks}</p></div></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Required output</p><p className="mt-2 text-sm leading-6">{output}</p></div><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Quality gate</p><p className="mt-2 text-sm leading-6">{gate}</p></div></div></article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Session Ends before Source Recovery"
          scenario="Fictional Northbridge validates role revocation and session closure, but extension and group sources are still Recovering. No current service impact is confirmed."
          choices={[
            { label: "Choice A", response: "End the fictional immediate active condition, move from Escalated to Conditional, continue historical authorization and source reconciliation, assign residual risk, and keep closure criteria open.", outcome: "Best defensive choice. The urgent condition ended, but the evidence and lifecycle review are not complete.", tone: "best" },
            { label: "Choice B", response: "Close the case because the role and session ended.", outcome: "Weak. Source recovery, historical authorization, residual risk, and closure validation remain incomplete.", tone: "risk" },
            { label: "Choice C", response: "Mark Expected because no service impact is visible.", outcome: "Weak. Lack of current impact does not establish valid authorization.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="Replay Tuning Hides a Changed Destination"
          scenario="A fictional deduplication proposal reduces raw alerts by 60%, but shadow testing shows a changed destination is grouped into the original case."
          choices={[
            { label: "Choice A", response: "Reject or revise the fictional proposal, add destination as a break condition, rerun positive, negative, boundary, recovery, regression, and rollback tests, and preserve the last validated state.", outcome: "Best choice. Coverage preservation is more important than raw-count reduction.", tone: "best" },
            { label: "Choice B", response: "Approve the proposal because analyst workload improves.", outcome: "Weak. The tuning hides meaningful new scope.", tone: "risk" },
            { label: "Choice C", response: "Remove the changed-destination test from validation.", outcome: "Weak. Validation should reveal risk rather than guarantee approval.", tone: "risk" },
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Defend the Entire SIEM Triage Case before a Review Board">
          <p className="leading-8">Present the fictional Northbridge case as though a review board asks why the alert existed, why priority was High, why the case escalated, why the conclusion remained Conditional, why source health mattered, why the case did not close after revocation, and why narrow deduplication is safer than broad suppression.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend the evidence chain", "Explain raw evidence, parsing, normalization, enrichment, correlation, provenance, timing, source health, and limitations."],
              ["Defend the alert", "Explain observation, defender question, required evidence, severity, confidence, priority, alternatives, and non-proof statements."],
              ["Defend triage and escalation", "Explain questions, owners, deadlines, source-health limits, escalation types, levels, acceptance, aging, and de-escalation."],
              ["Defend the case", "Explain chronology, notes, hypotheses, decisions, actions, validation, state changes, residual uncertainty, and reopening."],
              ["Defend the metrics", "Explain volume, uniqueness, queue age, owner delay, source health, quality, coverage, workload, privacy, recovery, and residual risk."],
              ["Defend quality improvement", "Explain root cause, narrow deduplication, break conditions, shadow mode, regression, rollback, expiration, ownership, and residual risk."],
            ].map(([title, detail]) => (<div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"><p className="font-black text-purple-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">Challenge output</p><p className="mt-2 leading-7">Produce a fictional mission charter, source inventory, source-health matrix, evidence ledger, normalization map, correlation model, alert contract, severity-confidence-priority record, triage question map, alternative matrix, escalation plan, chronology, case notes, dashboard review, metric dictionary, tuning proposal, validation matrix, rollback plan, closure review, residual-risk record, leadership brief, and public portfolio boundary.</p></div>
        </SectionCard>

        <DefenderChecklist
          title="SIEM Triage Capstone Checklist"
          items={[
            "I can establish a completely fictional mission, evidence inventory, privacy boundary, and non-operational safety statement.",
            "I can preserve raw source values, normalized fields, enrichment, transformations, provenance, timing, source health, and limitations.",
            "I can explain identity, role, group, extension, session, service, destination, change, owner, and health correlations.",
            "I can create an alert contract with observation, primary question, evidence, severity, confidence, priority, alternatives, owners, and non-proof statements.",
            "I can separate severity, confidence, priority, active effect, scope, time sensitivity, and recoverability.",
            "I can build triage questions, evidence requests, alternative explanations, owner deadlines, and closure requirements.",
            "I can create identity, source-health, service, recovery, privacy, and leadership escalation paths.",
            "I can maintain chronology, evidence references, notes, hypotheses, decisions, actions, validation, state changes, residual uncertainty, and reopen triggers.",
            "I can evaluate dashboards for source health, duplicates, queue tails, owner delay, case quality, coverage, workload, privacy, recovery, and metric gaming.",
            "I can reduce noise through root-cause analysis, narrow deduplication, break conditions, shadow comparison, regression, rollback, expiration, and ownership.",
            "I can keep a case Conditional when urgent conditions end but source, risk, quality, or lifecycle requirements remain incomplete.",
            "I can create a completely fictional capstone artifact without exposing real alerts, records, identities, services, owners, suppliers, values, timelines, or defensive capabilities.",
          ]}
        />

        <MiniQuiz title="A6.10 Mini Quiz: SIEM Triage Lab" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional SIEM Triage Capstone Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, critical service, identity model, source inventory, source IDs, source roles, required fields, source owners, source-health states, raw evidence IDs, event times, collection times, processing times, source records, supports, non-proof statements, parsed fields, normalized fields, enrichment, derived context, transformations, mapping risks, correlations, alert title, primary defender question, neutral observation, required evidence, severity, confidence, priority, alternatives, review triggers, triage questions, evidence requests, owners, deadlines, escalation types, escalation levels, acceptance criteria, chronology, case notes, hypotheses, decisions, actions, validation, state changes, dashboard reviews, metrics, tuning root cause, proposed change, break conditions, validation cases, shadow comparison, rollout, rollback, expiration, closure criteria, residual uncertainty, residual risk, reopen triggers, leadership brief, advanced challenge, reflection, and a statement that every organization, record, alert, identity, service, owner, date, decision, action, metric, and outcome is invented."
          tips={[
            "Keep the fictional evidence chain and decision chain traceable from source to closure.",
            "Separate observation, authorization, impact, severity, confidence, priority, action, validation, outcome, and residual risk.",
            "Use source-health-aware uncertainty rather than forcing missing evidence into yes-or-no conclusions.",
            "Preserve coverage through break conditions, validation, shadow comparison, rollback, expiration, and review.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for the A6 Module Test?">
          <p className="leading-8">Rate your readiness from 1 to 5 for SIEM purpose, source inventory, collection, normalization, correlation, alert rules, severity, confidence, priority, triage questions, evidence review, escalation, case notes, dashboards, metrics, noise reduction, tuning, validation, rollback, closure, reopening, and complete fictionalization.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain the complete fictional path from source evidence to a case decision.",
              "I can preserve source-health limits and evidence provenance.",
              "I can separate severity, confidence, priority, active effect, scope, and urgency.",
              "I can create bounded triage questions and owner requests.",
              "I can escalate without exaggerating conclusions or abandoning case ownership.",
              "I can maintain professional chronology, notes, decisions, actions, validation, closure, and reopening.",
              "I can evaluate dashboards and tuning for misleading metrics, false negatives, coverage, rollback, and residual risk.",
              "I can produce a safe fictional capstone without copying any real alert, case, source, system, or organization detail.",
            ].map((item) => (<div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">Record one fictional evidence fact, one source-health limitation, one priority reason, one triage question, one escalation trigger, one closure gap, one tuning break condition, and one concept to review before the module test.</div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional SIEM investigation is a connected chain of source evidence, normalization, correlation, alert meaning, triage, escalation, case management, metrics, and improvement.",
            "Source health changes what conclusions are supported and can prevent both confirmation and absence claims.",
            "Severity, confidence, priority, active effect, scope, time sensitivity, and recoverability should remain separate.",
            "A strong alert contract states what matched, what evidence exists, what the alert supports, and what it does not prove.",
            "Triage should ask bounded identity, authorization, service, impact, source-health, scope, alternative, ownership, and closure questions.",
            "Escalation should expand expertise, authority, coordination, or urgency without exaggerating conclusions or abandoning ownership.",
            "Actions, validation, outcomes, closure, and reopening are separate lifecycle stages.",
            "Dashboards and metrics should balance speed, quality, coverage, source health, workload, privacy, recovery, and residual risk.",
            "Noise reduction should address root cause and preserve meaningful identity, session, destination, service, result, scope, and source-health changes.",
            "Every CyberShield capstone artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Complete Module A6</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">You have completed all ten A6 lessons. Next, take the A6 Module Test covering SIEM purpose, collection, normalization, correlation, severity, priority, triage, escalation, case management, dashboards, metrics, quality improvement, and the capstone workflow.</p>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}