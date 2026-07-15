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
const modulePath = `${trackPath}/identity-and-access-management`;
const previousLesson = `${modulePath}/account-lifecycle-and-access-reviews`;
const nextLesson = `${modulePath}/identity-and-access-management-lab`;

const objectives = [
  "Explain how fictional identity-provider, directory, application, device, session, privileged-access, recovery, and lifecycle logs support access monitoring.",
  "Interpret timestamps, event IDs, account states, authentication results, role changes, session actions, policy decisions, and owner context.",
  "Separate expected activity, policy enforcement, suspicious patterns, tool interpretation, and missing evidence.",
  "Build a fictional identity timeline by correlating account, device, application, session, role, approval, and business evidence.",
  "Create a professional fictional Identity Monitoring Case Report with confirmed facts, findings, owners, validation, monitoring, and residual risk.",
];

const vocabulary = [
  ["Identity log", "A fictional record describing an authentication, account, role, group, session, factor, policy, recovery, or lifecycle event."],
  ["Event ID", "A fictional identifier used to distinguish one recorded event type or event instance from another."],
  ["Correlation ID", "A fictional value used to connect related sign-in, challenge, session, application, and access-decision records."],
  ["Authentication event", "A fictional record showing a sign-in attempt, factor result, device context, policy result, or session creation."],
  ["Authorization event", "A fictional record showing whether a subject was allowed, denied, challenged, or restricted for a specific resource action."],
  ["Directory event", "A fictional record showing account, group, role, owner, attribute, status, or lifecycle changes."],
  ["Session event", "A fictional record showing session creation, refresh, expiration, revocation, step-up, or continued use."],
  ["Baseline", "A fictional description of expected activity used to compare timing, device, application, location, role, and workflow patterns."],
  ["Anomaly", "A fictional activity pattern that differs from the current baseline and requires context before interpretation."],
  ["False positive", "A fictional alert that appears concerning but is explained by approved, expected, or harmless activity after review."],
  ["Confirmed fact", "A conclusion directly supported by the available fictional evidence."],
  ["Evidence gap", "Important fictional information that is missing, delayed, inconsistent, unavailable, or not preserved."],
];

const logSources = [
  {
    source: "Identity-provider sign-in logs",
    records:
      "Fictional account, application, device, source, factor, MFA, policy, result, reason, risk, session, and time.",
    defensiveUse:
      "Review successful and failed sign-ins, MFA, device context, policy challenges, session creation, and unusual sequences.",
    limitation:
      "A successful sign-in does not prove the physical person, safe intent, or approval for later actions.",
  },
  {
    source: "Directory and account logs",
    records:
      "Fictional account creation, disablement, lockout, expiration, owner, manager, group, role, attribute, and password-reset events.",
    defensiveUse:
      "Trace lifecycle changes, privilege assignments, ownership changes, and account-state transitions.",
    limitation:
      "Application-local roles, active sessions, and external resource shares may not appear.",
  },
  {
    source: "Application access logs",
    records:
      "Fictional account, session, resource, action, allow or deny result, request ID, local role, owner, and time.",
    defensiveUse:
      "Confirm what the authenticated session attempted and whether the application enforced the expected authorization.",
    limitation:
      "The application may not explain every central role, nested group, or external policy input.",
  },
  {
    source: "Device and endpoint logs",
    records:
      "Fictional device identity, managed state, user association, compliance, sign-in, session, application, and security posture.",
    defensiveUse:
      "Correlate account activity with a known or unknown device and evaluate changes in device trust.",
    limitation:
      "A managed device does not prove the expected person is using it at that moment.",
  },
  {
    source: "Privileged-access logs",
    records:
      "Fictional request, approval, elevation, role, administrative account, device, session, target, action, result, and expiration.",
    defensiveUse:
      "Trace privileged authority from request through de-elevation and post-use review.",
    limitation:
      "Some local tools may not forward complete action evidence.",
  },
  {
    source: "Recovery and factor logs",
    records:
      "Fictional password reset, factor registration, factor removal, recovery approval, device replacement, and backup-method use.",
    defensiveUse:
      "Identify authentication-lifecycle changes and connect them to sign-ins and session cleanup.",
    limitation:
      "A completed recovery event does not prove the physical initiator without owner and verification evidence.",
  },
  {
    source: "Lifecycle and access-review logs",
    records:
      "Fictional joiner, mover, leaver, temporary expiration, suspension, recertification, owner decision, and deprovisioning actions.",
    defensiveUse:
      "Compare approved identity state with current technical state.",
    limitation:
      "A closed ticket does not prove every application, session, resource, and owner relationship was updated.",
  },
  {
    source: "Security and case-management logs",
    records:
      "Fictional alert, severity, source, linked events, analyst notes, owner, status, action, validation, and closure.",
    defensiveUse:
      "Preserve the investigation trail and document why an alert was escalated, downgraded, or closed.",
    limitation:
      "Analyst notes and severity are interpretations that must remain tied to source evidence.",
  },
];


const eventFields = [
  {
    field: "Timestamp",
    question:
      "When did the fictional event occur, which timezone is used, and is the source clock reliable?",
    risk:
      "Timezone differences, delayed ingestion, clock drift, and rounding can distort event order.",
  },
  {
    field: "Account or subject",
    question:
      "Which fictional user, service, application, device, or session is associated with the event?",
    risk:
      "Display names can be duplicated, renamed, stale, or mapped to the wrong identity.",
  },
  {
    field: "Application or system",
    question:
      "Which fictional identity provider, directory, application, device, service, or enforcement point recorded the event?",
    risk:
      "Similar event labels can mean different things in different systems.",
  },
  {
    field: "Action",
    question:
      "Was the fictional event a sign-in, challenge, reset, role change, group update, session action, view, edit, export, or administrative change?",
    risk:
      "Broad labels can hide the exact resource or permission involved.",
  },
  {
    field: "Result and reason",
    question:
      "Was the fictional action allowed, denied, failed, challenged, expired, revoked, or partially completed, and why?",
    risk:
      "A final result can be misread without the policy, session, account state, and resource context.",
  },
  {
    field: "Device and source",
    question:
      "Which fictional device, network, workload, browser, application, or source context is recorded?",
    risk:
      "Network location can be approximate, and a trusted device can be shared or left unlocked.",
  },
  {
    field: "Session and correlation",
    question:
      "Which fictional session ID, request ID, challenge ID, case ID, or correlation value connects related events?",
    risk:
      "Events can be grouped incorrectly when IDs are missing, reused, or not preserved.",
  },
  {
    field: "Owner and business context",
    question:
      "Which fictional owner, manager, resource, purpose, approval, duration, and expected workflow explain the activity?",
    risk:
      "Technical activity can be normal or inappropriate depending on current business need.",
  },
];

const monitoringPatterns = [
  {
    pattern: "Repeated failures followed by success",
    directMeaning:
      "A fictional account records several failed authentication events before a successful sign-in.",
    possibleExplanations:
      "Typing mistakes, stale saved credentials, password reset, user confusion, automated retries, or unauthorized attempts.",
    nextEvidence:
      "Device, source, application, user report, MFA, session, password-reset history, and later actions.",
  },
  {
    pattern: "Successful sign-in from a new device",
    directMeaning:
      "A fictional account authenticates from a device not previously recorded in the current baseline.",
    possibleExplanations:
      "Approved replacement, new school device, shared lab device, travel, enrollment change, or unauthorized use.",
    nextEvidence:
      "Device registration, asset owner, managed state, user confirmation, application, session, and lifecycle records.",
  },
  {
    pattern: "MFA denied after password accepted",
    directMeaning:
      "The fictional knowledge factor succeeds, but the required possession-factor challenge is rejected.",
    possibleExplanations:
      "Unexpected sign-in, wrong session, user caution, unavailable device, application error, or unauthorized attempt.",
    nextEvidence:
      "Challenge ID, session, device, user report, source, surrounding attempts, and recovery activity.",
  },
  {
    pattern: "Role assignment followed by sensitive action",
    directMeaning:
      "A fictional role is granted and a protected action occurs soon afterward.",
    possibleExplanations:
      "Approved maintenance, scheduled onboarding, emergency recovery, excessive access, or unauthorized privilege.",
    nextEvidence:
      "Request, approval, owner, duration, device, session, target, action, validation, and role expiration.",
  },
  {
    pattern: "Temporary role expires but session continues",
    directMeaning:
      "A fictional role ends while an older session still accesses the protected resource.",
    possibleExplanations:
      "Expected short refresh delay, application cache, incomplete session revocation, or policy-enforcement gap.",
    nextEvidence:
      "Role state, session issue time, application claims, revocation, later access tests, and owner confirmation.",
  },
  {
    pattern: "Dormant account becomes active",
    directMeaning:
      "A fictional account with little expected activity records a new sign-in or resource action.",
    possibleExplanations:
      "Approved reactivation, delayed project work, automated task, ownership change, stale account, or unauthorized use.",
    nextEvidence:
      "Owner, sponsor, account state, application, device, session, business request, and recent lifecycle review.",
  },
  {
    pattern: "New factor registration and recovery",
    directMeaning:
      "A fictional account completes recovery and adds or replaces an authentication factor.",
    possibleExplanations:
      "Approved device replacement, lost factor, support-assisted recovery, or unauthorized account takeover attempt.",
    nextEvidence:
      "Recovery verification, owner approval, device, source, prior factor removal, session cleanup, and post-recovery sign-in.",
  },
  {
    pattern: "Group change outside expected workflow",
    directMeaning:
      "A fictional group or role membership changes without a matching normal provisioning or access-review event.",
    possibleExplanations:
      "Emergency change, administrative mistake, delayed ticket ingestion, automation, or unauthorized assignment.",
    nextEvidence:
      "Requester, approver, administrator, change record, owner, role purpose, session, and effective-access validation.",
  },
];

const evidenceMatrix = [
  {
    source: "Raw identity event",
    supports:
      "The fictional source recorded a specific account, action, result, reason, context, and time.",
    limitation:
      "One event rarely proves the complete sequence, physical identity, business purpose, or impact.",
  },
  {
    source: "Correlated timeline",
    supports:
      "Multiple fictional events share account, session, request, device, application, or correlation relationships.",
    limitation:
      "Incorrect grouping or missing events can produce a misleading narrative.",
  },
  {
    source: "Baseline comparison",
    supports:
      "The fictional activity differs from or matches expected device, application, timing, role, and workflow patterns.",
    limitation:
      "Baselines can be incomplete, outdated, too broad, or based on limited history.",
  },
  {
    source: "User or owner report",
    supports:
      "The fictional account or resource owner confirms whether an activity was expected, approved, or understood.",
    limitation:
      "Human memory can be incomplete, and confirmation does not replace technical evidence.",
  },
  {
    source: "Access request and approval",
    supports:
      "The fictional purpose, resource, action, duration, requester, owner, approver, and expected outcome.",
    limitation:
      "The implemented access or actual activity can differ from the approved request.",
  },
  {
    source: "Application and resource activity",
    supports:
      "The fictional authenticated session attempted or completed specific actions on named resources.",
    limitation:
      "The event may not show the full identity, role, or device context.",
  },
  {
    source: "Session and lifecycle evidence",
    supports:
      "The fictional session creation, expiration, revocation, account state, role state, and lifecycle timing.",
    limitation:
      "Different applications can refresh or revoke sessions at different times.",
  },
  {
    source: "Case notes and alert status",
    supports:
      "The fictional analyst’s interpretation, questions, owner, actions, validation, and closure decision.",
    limitation:
      "Case conclusions must remain traceable to source evidence and clearly labeled confidence.",
  },
];

const classifications = [
  {
    classification: "Expected activity",
    meaning:
      "The fictional activity matches the approved owner, device, application, role, timing, resource, and workflow.",
    requirement:
      "Preserve the matching evidence and explain why the event is normal.",
  },
  {
    classification: "Expected policy enforcement",
    meaning:
      "The fictional system correctly denies, challenges, expires, or restricts an action under the approved policy.",
    requirement:
      "Document the policy, decision reason, resource, action, and owner expectation.",
  },
  {
    classification: "False positive",
    meaning:
      "A fictional alert is explained by authorized activity, tool limitations, baseline gaps, or harmless system behavior.",
    requirement:
      "Preserve the explanation, supporting evidence, tuning recommendation, and coverage impact.",
  },
  {
    classification: "Suspicious pattern",
    meaning:
      "The fictional evidence differs from the baseline or approved workflow but does not yet prove a confirmed issue.",
    requirement:
      "Collect more evidence, assign an owner, use safe temporary controls, and avoid unsupported attribution.",
  },
  {
    classification: "Confirmed control issue",
    meaning:
      "The fictional evidence proves an access, lifecycle, session, policy, monitoring, or ownership control failed.",
    requirement:
      "Correct narrowly, validate the new state, review related systems, and document residual risk.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional evidence is too limited, delayed, inconsistent, or unavailable for a reliable conclusion.",
    requirement:
      "State the gap, confidence, investigation owner, due date, temporary risk control, and decision criteria.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the alert or question",
    detail:
      "Identify the fictional account, application, event type, time range, resource, severity, and reason for review.",
  },
  {
    step: "2",
    title: "Preserve source evidence",
    detail:
      "Collect the fictional raw events, IDs, timestamps, sessions, devices, policy decisions, role changes, approvals, and owners.",
  },
  {
    step: "3",
    title: "Build the timeline",
    detail:
      "Normalize time and correlate sign-in, MFA, session, directory, application, privileged, recovery, and lifecycle events.",
  },
  {
    step: "4",
    title: "Compare context and baseline",
    detail:
      "Check expected devices, applications, roles, timing, workflow, resource ownership, and recent changes.",
  },
  {
    step: "5",
    title: "Classify and respond",
    detail:
      "Separate normal activity, expected policy enforcement, false positive, suspicious pattern, confirmed issue, and evidence gap.",
  },
  {
    step: "6",
    title: "Validate and close",
    detail:
      "Confirm technical state, owner outcome, monitoring, related accounts, session cleanup, residual risk, and closure criteria.",
  },
];


const timeline = [
  {
    time: "14:00:00",
    source: "Directory",
    event:
      "Fictional dormant account training-dnguyen is reactivated after an approved project assignment.",
    meaning:
      "Establishes the account-state change and approved reason for renewed use.",
  },
  {
    time: "14:02:00",
    source: "Access request",
    event:
      "The project owner approves report-view access for fourteen days.",
    meaning:
      "Defines the resource, action, duration, and accountable owner.",
  },
  {
    time: "14:05:00",
    source: "Directory",
    event:
      "training-dnguyen is added to project-report-viewers with automatic expiration.",
    meaning:
      "Implements the approved role path.",
  },
  {
    time: "14:10:11",
    source: "Identity provider",
    event:
      "The account signs in from managed-laptop-61 using password and approved MFA.",
    meaning:
      "Supports successful authentication under the recorded device and policy context.",
  },
  {
    time: "14:10:14",
    source: "Session",
    event:
      "Session session-8812 is created for the reporting application.",
    meaning:
      "Connects the sign-in with later resource actions.",
  },
  {
    time: "14:10:20",
    source: "Application",
    event:
      "The report-view request is allowed through project-report-viewers.",
    meaning:
      "Matches the approved role and resource action.",
  },
  {
    time: "14:11:02",
    source: "Application",
    event:
      "An export request is denied because the role provides view only.",
    meaning:
      "Shows correct least-privilege policy enforcement.",
  },
  {
    time: "14:15:00",
    source: "Monitoring alert",
    event:
      "The monitoring platform creates an alert because a dormant account became active and attempted export.",
    meaning:
      "The alert combines a real baseline change with a correctly denied action.",
  },
  {
    time: "14:20:00",
    source: "Owner confirmation",
    event:
      "The project owner confirms the account reactivation and report-view need but confirms export is unnecessary.",
    meaning:
      "Adds business context that supports expected use and correct denial.",
  },
  {
    time: "14:25:00",
    source: "Analyst review",
    event:
      "The analyst correlates the lifecycle approval, role, sign-in, session, view allow, export deny, and owner confirmation.",
    meaning:
      "Builds a complete evidence-based timeline.",
  },
  {
    time: "14:30:00",
    source: "Case classification",
    event:
      "The case is classified as expected reactivation with correct policy enforcement and a baseline-tuning opportunity.",
    meaning:
      "Separates the account activation from a confirmed access-control failure.",
  },
  {
    time: "Day 14 17:00",
    source: "Role lifecycle",
    event:
      "The temporary project-report-viewers membership expires automatically.",
    meaning:
      "Ends the approved access duration.",
  },
  {
    time: "Day 14 17:02",
    source: "Session control",
    event:
      "The reporting session is revoked and a new access decision is required.",
    meaning:
      "Aligns the session with the expired role.",
  },
  {
    time: "Day 14 17:05",
    source: "Validation",
    event:
      "The account is denied report access after expiration.",
    meaning:
      "Confirms technical closure.",
  },
  {
    time: "Day 15",
    source: "Owner review",
    event:
      "The owner confirms the project task is complete and the case records no remaining access.",
    meaning:
      "Completes business validation and closure.",
  },
];

const monitoringUseCases = [
  {
    useCase: "Authentication monitoring",
    question:
      "Are fictional sign-in failures, successes, MFA results, devices, sources, applications, and sessions consistent with the expected workflow?",
    usefulEvidence:
      "Password result, factor result, device, source, session, account state, user report, and application access.",
  },
  {
    useCase: "Privilege-change monitoring",
    question:
      "Do fictional role, group, direct-permission, local-role, and elevation changes match approved requests and owners?",
    usefulEvidence:
      "Change event, requester, approver, administrator, role, resource, duration, session, and validation.",
  },
  {
    useCase: "Lifecycle monitoring",
    question:
      "Do fictional joiner, mover, leaver, suspension, reactivation, and expiration events produce the expected technical state?",
    usefulEvidence:
      "Lifecycle event, account state, roles, groups, local access, sessions, devices, resources, and owner confirmation.",
  },
  {
    useCase: "Recovery monitoring",
    question:
      "Do fictional resets, factor registrations, device replacements, and recovery events match approved ownership and session cleanup?",
    usefulEvidence:
      "Recovery verification, factor changes, device, source, owner, active sessions, and post-recovery sign-in.",
  },
  {
    useCase: "Dormant-account monitoring",
    question:
      "Does fictional activity from an inactive or rarely used account have a current approved owner and purpose?",
    usefulEvidence:
      "Last expected use, owner, sponsor, reactivation request, application, device, session, and resource actions.",
  },
  {
    useCase: "Privileged-session monitoring",
    question:
      "Do fictional administrative activations, actions, targets, expirations, and session endings match the approved change?",
    usefulEvidence:
      "Request, approval, role, device, MFA, session, action, target, result, expiration, and post-use review.",
  },
  {
    useCase: "Application authorization monitoring",
    question:
      "Are fictional sensitive views, edits, exports, approvals, and administrative actions allowed or denied as expected?",
    usefulEvidence:
      "Application event, resource, action, session, effective role, policy reason, owner, and business purpose.",
  },
  {
    useCase: "Monitoring-health review",
    question:
      "Are fictional identity events complete, timely, correctly parsed, correlated, retained, and routed to accountable owners?",
    usefulEvidence:
      "Source health, ingestion time, parsing status, event count, missing fields, alert route, case status, and validation test.",
  },
];

const mistakes = [
  "Treating one fictional sign-in or alert as proof of physical identity, intent, or impact.",
  "Ignoring timezone, ingestion delay, clock drift, and event-order uncertainty.",
  "Grouping unrelated events because the display names look similar.",
  "Failing to preserve session, request, challenge, correlation, and event identifiers.",
  "Using a risk score, severity, or alert title as the final conclusion.",
  "Treating every anomaly as malicious instead of comparing approved workflow, lifecycle, and owner context.",
  "Closing an alert as a false positive without documenting the supporting evidence and tuning impact.",
  "Ignoring correctly denied actions that reveal useful policy-enforcement evidence.",
  "Reviewing identity-provider logs without application actions, directory changes, sessions, approvals, and owner confirmation.",
  "Assuming no log event means no activity when source coverage or ingestion may be incomplete.",
  "Changing access or disabling accounts before preserving evidence and confirming the approved business workflow.",
  "Publishing real usernames, device IDs, session IDs, IP addresses, role names, resource names, screenshots, or internal monitoring architecture.",
];

const quizQuestions = [
  {
    question:
      "What does a correlation ID help defenders do?",
    choices: [
      "Connect related fictional sign-in, challenge, session, application, and access-decision events.",
      "Prove the physical person with certainty.",
      "Grant administrator access.",
      "Replace account ownership.",
    ],
    answer: 0,
    explanation:
      "Correlation values help reconstruct an event sequence across systems.",
  },
  {
    question:
      "What is a baseline?",
    choices: [
      "A fictional description of expected activity used to compare devices, applications, timing, roles, and workflows.",
      "A permanent rule that every anomaly is malicious.",
      "A password policy.",
      "A list of administrator accounts only.",
    ],
    answer: 0,
    explanation:
      "A baseline provides context, but it can be incomplete or outdated and must not be treated as certainty.",
  },
  {
    question:
      "A dormant fictional account is reactivated through an approved project request and later attempts an unauthorized export that is denied. What is the strongest conclusion?",
    choices: [
      "The reactivation can be expected while the export denial shows correct least-privilege enforcement; correlate the full timeline before classifying the alert.",
      "The account is definitely compromised.",
      "The denied export proves data was exported.",
      "The account should receive export access.",
    ],
    answer: 0,
    explanation:
      "The account-state change and denied action require separate interpretations supported by lifecycle, owner, and application evidence.",
  },
  {
    question:
      "Why should defenders normalize timestamps?",
    choices: [
      "Different timezones, clock drift, and ingestion delays can distort the sequence of fictional events.",
      "Normalization reveals passwords.",
      "Every system already uses the same clock.",
      "Timestamps are not useful in identity analysis.",
    ],
    answer: 0,
    explanation:
      "A reliable timeline requires understanding how each source records and delivers time.",
  },
  {
    question:
      "What makes an alert a false positive?",
    choices: [
      "Evidence explains the fictional activity as authorized, expected, harmless, or caused by tool or baseline limitations.",
      "The alert severity is low.",
      "The user says the alert is wrong without evidence.",
      "No one reviewed the event.",
    ],
    answer: 0,
    explanation:
      "False-positive closure requires evidence, explanation, and consideration of tuning and coverage.",
  },
  {
    question:
      "What should happen when identity logs are incomplete?",
    choices: [
      "State the evidence gap, confidence, owner, due date, temporary control, and decision criteria.",
      "Assume the missing events were safe.",
      "Invent a complete timeline.",
      "Close the case automatically.",
    ],
    answer: 0,
    explanation:
      "Evidence-incomplete cases should remain transparent and owned rather than being disguised as certainty.",
  },
  {
    question:
      "Which monitoring review is strongest?",
    choices: [
      "Correlate raw events, sessions, devices, directory changes, application actions, approvals, lifecycle context, owner reports, and validation.",
      "Use only the alert title.",
      "Use only a risk score.",
      "Review only successful sign-ins.",
    ],
    answer: 0,
    explanation:
      "Professional identity monitoring combines multiple technical and business evidence sources.",
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


function LogSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Identity Log Sources
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources That Build an Identity Timeline
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {logSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Typical records
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.records}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveUse}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
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

function EventFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Event Fields
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Fields to Read Before Interpreting an Alert
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {eventFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Interpretation risk
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

function MonitoringPatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Monitoring Patterns
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Patterns That Require Correlation
      </h2>

      <div className="mt-6 grid gap-5">
        {monitoringPatterns.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.pattern}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Direct meaning
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.directMeaning}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Possible explanations
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.possibleExplanations}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Next evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.nextEvidence}
                </p>
              </div>
            </div>
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
        What Monitoring Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
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

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Classification
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Outcomes with Different Evidence Requirements
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {classifications.map((item) => (
          <div
            key={item.classification}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.classification}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Required documentation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.requirement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MonitoringUseCaseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Monitoring Use Cases
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Identity Questions Worth Monitoring
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {monitoringUseCases.map((item) => (
          <div
            key={item.useCase}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.useCase}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Useful evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.usefulEvidence}
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
        Review an Identity Alert in Six Steps
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
        Correlated Identity Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Dormant-Account Reactivation from Approval to Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.36fr_1fr_1fr]"
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


export default function IdentityLogsAndAccessMonitoringPage() {
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
              Module I6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.7 Identity Logs and Access Monitoring
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders correlate fictional sign-ins, MFA events,
            account changes, roles, sessions, application actions, recovery,
            privileged access, lifecycle events, and owner context without
            overstating what any single log or alert proves.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I6: Identity and Access Management"
          lessonTitle="Identity Logs and Access Monitoring"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that one fictional log event or alert rarely proves physical identity, intent, business purpose, or impact.",
            "I will preserve timestamps, event IDs, session IDs, challenge IDs, correlation values, devices, applications, results, and reasons.",
            "I will correlate identity-provider, directory, application, device, privileged-access, recovery, lifecycle, and owner evidence.",
            "I will distinguish expected activity, expected policy enforcement, false positives, suspicious patterns, confirmed issues, and evidence gaps.",
            "I will use only fictional accounts, devices, applications, resources, sessions, logs, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Alert Is a Starting Question, Not a Final Verdict"
        >
          <p className="leading-8">
            A fictional monitoring platform may alert when a dormant account
            becomes active, an MFA challenge is denied, a role changes, or an
            export is attempted. The alert identifies a pattern worth review.
            Defenders still need the raw events, account state, session,
            device, application, approval, owner, lifecycle, and business
            context before reaching a conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The alert is high severity, so the account is definitely
                compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the source events, build the correlated timeline,
                compare approved context, classify confidence, and validate the
                current state.”
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
          title="Identity Activity Is Distributed Across Many Systems"
        >
          <p className="leading-8">
            The identity provider may show the sign-in, the directory may show
            the role change, the application may show the resource action, the
            device system may show managed state, the lifecycle record may show
            an approved reactivation, and the resource owner may explain the
            business need. Monitoring becomes reliable when those records are
            connected rather than reviewed in isolation.
          </p>
        </SectionCard>

        <LogSourceGuide />
        <EventFieldGuide />
        <MonitoringPatternGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Build the Timeline Before You Explain the Pattern"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Identity",
                "Which fictional user, service, application, device, or session is represented, and who owns it?",
              ],
              [
                "Time",
                "Which timezone, source clock, ingestion delay, and event order apply?",
              ],
              [
                "Connection",
                "Which session, request, challenge, event, device, or correlation values connect the records?",
              ],
              [
                "Context",
                "Which application, resource, role, policy, lifecycle event, approval, and business purpose explain the activity?",
              ],
              [
                "Conclusion",
                "Which facts are confirmed, what remains possible, what evidence is missing, and what should happen next?",
              ],
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

        <EvidenceGuide />
        <ClassificationGuide />
        <MonitoringUseCaseGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Identity Monitoring and Evidence Terms
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
          title="Fake Identity Monitoring Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services identity environment."
          metrics={[
            {
              label: "Identity events",
              value: "1,284",
              note: "Sign-ins, MFA, sessions, role changes, application decisions, recovery, privileged activity, and lifecycle records.",
            },
            {
              label: "Alerts reviewed",
              value: "19",
              note: "Seven expected activities, four correct policy denials, three false positives, three suspicious patterns, one confirmed session issue, and one evidence-incomplete case.",
            },
            {
              label: "Monitoring gaps",
              value: "5",
              note: "Two delayed application sources, one missing correlation field, one stale baseline, and one unowned alert route.",
            },
          ]}
        />

        <FakeAlertCard
          title="Dormant Account Reactivated and Export Attempt Denied"
          severity="High"
          time="02:15 PM"
          source="Fake Identity Monitoring Console"
          details="A fictional dormant account is reactivated through an approved project assignment, signs in from a managed device with MFA, views the approved report, and then attempts an export that is denied by the view-only role. The monitoring platform alerts because the account was previously dormant and the export action is sensitive."
          recommendation="Preserve the lifecycle, approval, role, sign-in, device, session, application, denial, and owner evidence; classify the reactivation separately from the denied action; confirm no export occurred; validate role expiration; tune the baseline carefully; and document the case reasoning."
        />

        <FakeLogPanel
          title="Fake Identity Monitoring Timeline"
          logs={[
            "14:00:00 DIRECTORY user='training-dnguyen' account_state='reactivated' reason='approved_project'",
            "14:02:00 ACCESS_REQUEST role='project-report-viewers' duration='14d' owner_approved='true'",
            "14:05:00 DIRECTORY role='project-report-viewers' assigned='true' expires='day14_17:00'",
            "14:10:11 AUTH user='training-dnguyen' device='managed-laptop-61' password='accepted' mfa='approved'",
            "14:10:14 SESSION id='session-8812' app='reporting-app' issued='true'",
            "14:10:20 AUTHZ action='view_report' result='allow'",
            "14:11:02 AUTHZ action='export_report' result='deny' reason='view_only_role'",
            "14:15:00 ALERT pattern='dormant_reactivation_plus_sensitive_denial' severity='high'",
            "14:20:00 OWNER_CONFIRMATION reactivation='expected' export_needed='false'",
            "14:25:00 REVIEW correlation='complete'",
            "14:30:00 CASE classification='expected_activity_and_policy_enforcement'",
            "DAY14 17:00 ROLE state='expired'",
            "DAY14 17:02 SESSION id='session-8812' action='revoked'",
            "DAY14 17:05 TEST report_access='deny'",
            "DAY15 OWNER_REVIEW closure='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Identity-Monitoring Conclusion Is Best Supported?"
          evidence={[
            "The fictional account was previously dormant.",
            "A current project owner approves reactivation and report-view access for fourteen days.",
            "The account signs in from a managed device using the required password and MFA.",
            "The approved report-view action succeeds.",
            "A report-export action is denied because the role is view only.",
            "The owner confirms that export is unnecessary.",
            "No application event shows a successful export.",
            "The role expires, the session is revoked, and later report access is denied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The reactivation is supported by current approval, while the export denial shows correct policy enforcement; the alert is useful but does not prove account compromise or data export.",
            "The account exported data because an export attempt appears in the logs.",
            "The managed device and MFA prove every action was performed by the expected person.",
            "The account should receive export access to prevent future alerts.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an approved reactivation, successful view access, a correctly denied export, and complete expiration validation. It does not support successful export or certain physical attribution."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Identity Monitoring"
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
          title="Build a Fictional Identity Monitoring Case"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Identity Monitoring Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-six supplied fictional records involving sign-in
                failures, MFA, new devices, sessions, account reactivation,
                group changes, role expiration, application allows and denials,
                privileged activity, recovery, owner approvals, monitoring
                health, and closure evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify every fictional account, device, application, session, event ID, correlation value, resource, owner, and time.</li>
                <li>Normalize timestamps and build one evidence-linked timeline.</li>
                <li>Separate raw events, tool interpretations, owner statements, confirmed facts, reasonable conclusions, and evidence gaps.</li>
                <li>Compare device, timing, application, role, lifecycle, and business activity with the baseline.</li>
                <li>Classify expected activity, policy enforcement, false positive, suspicious pattern, confirmed issue, or evidence incomplete.</li>
                <li>Recommend narrow owner-approved actions with preserved evidence, rollback, validation, and monitoring.</li>
                <li>Document confidence, related-account review, session cleanup, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            request credentials or codes, enter live monitoring consoles, change
            roles, disable users, revoke sessions, investigate private data, or
            publish real usernames, device IDs, network addresses, session IDs,
            resource names, screenshots, or internal monitoring architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Dormant Account Becomes Active After an Approved Project Assignment"
          scenario="A fictional dormant account is reactivated through a current owner-approved request. It signs in from a managed device, opens the approved report, and receives a denial when it attempts export."
          choices={[
            {
              label: "Choice A",
              response:
                "Correlate the reactivation, approval, role, sign-in, device, session, view allow, export denial, owner confirmation, expiration, and later validation; classify each part separately and document the alert reasoning.",
              outcome:
                "Best defensive choice. The response distinguishes approved activity from correct policy enforcement.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare compromise because the account was previously dormant.",
              outcome:
                "Unsupported. Dormancy is a useful signal, but the current lifecycle and owner evidence matter.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Grant export permission because the denial generated an alert.",
              outcome:
                "Unsafe. The owner confirms that export is not required.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A High-Severity Identity Alert Has Missing Application Logs"
          scenario="A fictional monitoring platform reports a role change followed by a sensitive application action. The directory and sign-in records are available, but the application source stopped sending events during the time window."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve available evidence, state the application-log gap, assign source-recovery and case owners, use narrow temporary controls if approved, collect owner and change records, validate the current state, and avoid claiming the action occurred until evidence supports it.",
              outcome:
                "Best defensive choice. The investigation remains transparent about confidence and missing evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the sensitive action occurred because the alert says so.",
              outcome:
                "Unsupported. The alert interpretation lacks the required source evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the case because one log source is unavailable.",
              outcome:
                "Unsafe. The evidence gap requires ownership, recovery, temporary risk decisions, and follow-up.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Identity Logs and Access Monitoring Checklist"
          items={[
            "I identify fictional identity-provider, directory, application, device, session, privileged-access, recovery, lifecycle, and case-management sources.",
            "I preserve timestamps, timezones, event IDs, session IDs, request IDs, challenge IDs, correlation values, results, and reasons.",
            "I normalize time and connect events through reliable account, session, device, application, and correlation evidence.",
            "I distinguish raw events, tool interpretations, baselines, owner reports, confirmed facts, reasonable conclusions, and evidence gaps.",
            "I compare sign-ins, devices, applications, roles, permissions, lifecycle events, resources, and business purpose.",
            "I classify expected activity, expected policy enforcement, false positive, suspicious pattern, confirmed issue, or evidence incomplete.",
            "I verify whether a denied action remained denied and whether any alternate access path succeeded.",
            "I document source-health, ingestion, parsing, routing, ownership, tuning, and coverage gaps.",
            "I validate technical state, session cleanup, role expiration, owner outcome, related accounts, monitoring, and residual risk.",
            "I use only fictional evidence and never publish real identities, device IDs, addresses, sessions, resources, screenshots, or internal monitoring architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.7 Mini Quiz: Identity Logs and Access Monitoring"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Identity Monitoring Case Report containing at least thirty-six identity-provider, directory, application, device, MFA, session, role, permission, privileged-access, recovery, lifecycle, owner, alert, source-health, validation, and closure records. Include normalized timestamps, event and correlation IDs, a complete timeline, baseline comparison, confirmed facts, alternative explanations, evidence gaps, confidence, case classification, narrow recommendations, session and role validation, monitoring-health review, residual risk, and closure criteria."
          tips={[
            "Use only fictional accounts, devices, applications, resources, sessions, event IDs, owners, logs, alerts, and organizations.",
            "Include one approved dormant-account reactivation, one correctly denied action, one role-change alert, one missing-log-source case, and one session-expiration validation.",
            "Clearly distinguish an alert, a tool interpretation, a raw event, an owner statement, and a confirmed conclusion.",
            "Do not include real usernames, email addresses, device IDs, network addresses, session values, resource names, screenshots, or internal monitoring architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Identity monitoring requires correlation across sign-in, directory, application, device, session, recovery, privilege, lifecycle, and owner evidence.",
            "An alert identifies a pattern worth review; it does not prove physical identity, intent, or impact.",
            "Timestamps, event IDs, session IDs, challenge IDs, correlation values, and source health determine whether a timeline is reliable.",
            "Expected activity, correct policy enforcement, false positives, suspicious patterns, confirmed issues, and evidence gaps require different documentation.",
            "Denied actions can demonstrate that least-privilege controls are working when no alternate path succeeds.",
            "Strong case closure validates the technical state, owner outcome, session and role lifecycle, monitoring coverage, confidence, and residual risk.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I6
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