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
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/dependency-and-supply-chain-risk-concepts`;
const nextLesson = `${modulePath}/code-review-for-security`;

const objectives = [
  "Explain how secure error handling protects users while still giving defenders and engineers enough evidence to understand what happened.",
  "Separate user-facing messages, operational diagnostics, security telemetry, and protected debugging evidence by audience and purpose.",
  "Design logging requirements that capture useful context without exposing secrets, unnecessary private data, or sensitive implementation details.",
  "Evaluate fictional logging evidence for coverage, redaction, source health, retention, access, correlation, and auditability.",
  "Build an error-handling and logging design that becomes the sixth artifact in the A11 Secure Software Design Assessment.",
];

const fourAudienceModel = [
  {
    audience: "End user",
    purpose:
      "Explain what the user needs to know and what safe action they can take next.",
    include:
      "Simple outcome, retry guidance, support reference, neutral error code when useful.",
    avoid:
      "Internal paths, stack traces, secrets, database details, dependency names, raw exception objects.",
  },
  {
    audience: "Application operator",
    purpose:
      "Understand service health, failed workflows, degraded dependencies, and operational recovery needs.",
    include:
      "Service, environment, operation, correlation ID, result, dependency status, retry state.",
    avoid:
      "Secret values, unnecessary payloads, private records, raw credentials.",
  },
  {
    audience: "Security defender",
    purpose:
      "Investigate important identity, authorization, privilege, configuration, and security-control events.",
    include:
      "Actor or service identity, target reference, action, result, timestamp, source, correlation ID, policy decision.",
    avoid:
      "Passwords, tokens, keys, cookies, recovery codes, full sensitive request bodies.",
  },
  {
    audience: "Protected diagnostic reviewer",
    purpose:
      "Analyze deeper implementation failures in a tightly controlled diagnostic context.",
    include:
      "Sanitized exception class, component, operation, stack location or trace reference when approved, correlation ID.",
    avoid:
      "Anything broader than needed for troubleshooting; secret or private values should remain redacted.",
  },
];

const errorFlow = [
  {
    step: "01",
    title: "Detect the failure",
    question:
      "What condition occurred and which component recognized it?",
    detail:
      "Distinguish validation failures, authorization denials, dependency failures, internal faults, rate or capacity conditions, and expected business-rule outcomes.",
    evidence:
      "Application event, safe exception metadata, dependency state, request correlation.",
  },
  {
    step: "02",
    title: "Contain the impact",
    question:
      "What should the system do to prevent the failure from spreading?",
    detail:
      "Stop unsafe processing, preserve data integrity, use safe defaults, avoid partial privileged changes, and protect important state.",
    evidence:
      "Transaction result, rollback state, workflow status, resilience design.",
  },
  {
    step: "03",
    title: "Respond safely",
    question:
      "What should the user or calling service be told?",
    detail:
      "Return a useful but bounded response that does not expose internal implementation detail or sensitive information.",
    evidence:
      "User-facing response template, API error contract, support reference.",
  },
  {
    step: "04",
    title: "Record useful evidence",
    question:
      "What context do operators and defenders need?",
    detail:
      "Record service, environment, operation, actor or workload reference where appropriate, result, timestamp, correlation identifier, and policy decision.",
    evidence:
      "Operational event, security audit event, log schema.",
  },
  {
    step: "05",
    title: "Redact and minimize",
    question:
      "Which values must never appear in logs or errors?",
    detail:
      "Remove secrets, credentials, session tokens, private keys, recovery codes, unnecessary private data, and overly detailed request content.",
    evidence:
      "Logging requirement, redaction rule, sample sanitized event, validation result.",
  },
  {
    step: "06",
    title: "Route and retain",
    question:
      "Where should the evidence go and how long should it remain?",
    detail:
      "Send different event classes to appropriate protected destinations with defined access, retention, ownership, and review expectations.",
    evidence:
      "Logging architecture, retention policy, access-control summary, source ownership.",
  },
  {
    step: "07",
    title: "Monitor source health",
    question:
      "How does the team know the logging path itself still works?",
    detail:
      "Track freshness, parsing, expected volume, missing sources, delayed delivery, schema drift, and retention health.",
    evidence:
      "Source-health dashboard, heartbeat events, parser status, ingestion metrics.",
  },
  {
    step: "08",
    title: "Learn and improve",
    question:
      "What recurring failures should change the design?",
    detail:
      "Use trends, incidents, support patterns, and control failures to refine requirements, resilience, validation, and architecture.",
    evidence:
      "Post-incident review, trend report, requirement update, change trigger.",
  },
];

const loggingDomains = [
  {
    code: "AUTHN",
    title: "Authentication events",
    examples:
      "Successful staff sign-in, denied sign-in, disabled identity, session establishment failure.",
    important:
      "Identity reference, result, source, timestamp, correlation ID, reason category.",
    avoid:
      "Passwords, tokens, recovery codes, full identity claims.",
  },
  {
    code: "AUTHZ",
    title: "Authorization decisions",
    examples:
      "Allowed or denied access to assigned student record, privileged action approval.",
    important:
      "Actor reference, target reference, action, decision, policy or role basis, correlation ID.",
    avoid:
      "Full private record content or unnecessary user attributes.",
  },
  {
    code: "PRIV",
    title: "Privileged actions",
    examples:
      "Role change, account recovery, configuration change, broad data export approval.",
    important:
      "Actor, target reference, action, result, approval reference, timestamp, correlation ID.",
    avoid:
      "Secret values, full export data, private notes unrelated to the action.",
  },
  {
    code: "DATA",
    title: "Sensitive data operations",
    examples:
      "Record creation, deletion request, approved export, retention action.",
    important:
      "Actor or service, data category, operation, result, policy reference, target identifier.",
    avoid:
      "Full record content when metadata is sufficient.",
  },
  {
    code: "CFG",
    title: "Configuration changes",
    examples:
      "Authorization baseline change, logging schema update, feature-flag change.",
    important:
      "Actor, changed setting reference, environment, old/new state classification, approval reference.",
    avoid:
      "Secret configuration values.",
  },
  {
    code: "DEP",
    title: "Dependency and integration health",
    examples:
      "Scheduling vendor unavailable, notification retry, dependency timeout, supplier API degradation.",
    important:
      "Dependency ID, operation, result, duration, retry state, environment, correlation ID.",
    avoid:
      "Vendor credentials, private payloads, unnecessary response bodies.",
  },
  {
    code: "ERR",
    title: "Application failures",
    examples:
      "Unexpected server exception, workflow rollback, failed persistence operation.",
    important:
      "Sanitized exception category, service, operation, environment, correlation ID, impact class.",
    avoid:
      "Raw stack traces in user-facing output, secrets, full database statements, private data.",
  },
  {
    code: "SRC",
    title: "Logging source health",
    examples:
      "Missing heartbeat, delayed ingestion, parser failure, unexpected event-volume drop.",
    important:
      "Source ID, last-seen time, ingestion status, parser status, expected/actual volume.",
    avoid:
      "Assuming no alerts means the source is healthy.",
  },
];

const vocabulary = [
  {
    term: "Error handling",
    definition:
      "The design and process used to detect, contain, communicate, record, and recover from failures.",
  },
  {
    term: "User-facing error",
    definition:
      "A bounded message shown to a user or calling client that explains the outcome without revealing unnecessary internal detail.",
  },
  {
    term: "Operational log",
    definition:
      "Telemetry used to understand service health, workflows, dependencies, performance, and recovery.",
  },
  {
    term: "Security audit event",
    definition:
      "A record of a security-relevant action or decision such as authorization, privileged change, account recovery, or configuration modification.",
  },
  {
    term: "Correlation ID",
    definition:
      "A non-secret identifier used to connect related events across services or stages of one workflow.",
  },
  {
    term: "Redaction",
    definition:
      "Removing or masking sensitive values that should not appear in logs, errors, dashboards, or reports.",
  },
  {
    term: "Data minimization",
    definition:
      "Recording only the information needed for the stated operational or security purpose.",
  },
  {
    term: "Source health",
    definition:
      "Evidence that a logging source is current, delivering expected events, parsing correctly, and meeting retention expectations.",
  },
  {
    term: "Schema",
    definition:
      "The defined fields, types, and structure expected in an event.",
  },
  {
    term: "Retention",
    definition:
      "The approved period for keeping logs or diagnostic evidence.",
  },
  {
    term: "Diagnostic channel",
    definition:
      "A more restricted evidence path used for deeper troubleshooting than ordinary user or operational output.",
  },
  {
    term: "Fail safe",
    definition:
      "A design behavior that prefers a safer state when an important control or dependency cannot make a trustworthy decision.",
  },
];

const eventRegister = [
  {
    id: "LOG-01",
    event: "Counselor record access decision",
    audience: "Security audit",
    fields:
      "Actor ref, student ref, action, decision, assignment-policy ref, timestamp, correlation ID",
    redaction:
      "No counseling-note content, passwords, tokens, or unnecessary profile data",
    retention: "Security audit retention class",
    owner: "Application + Security Monitoring",
    status: "Confirmed",
  },
  {
    id: "LOG-02",
    event: "Privileged account recovery",
    audience: "Security audit",
    fields:
      "Approver ref, operator ref, target account ref, action, result, approval ref, timestamp, correlation ID",
    redaction:
      "No recovery codes, secrets, session values, or private identity-proof content",
    retention: "Privileged audit retention class",
    owner: "Identity Platform + Security Monitoring",
    status: "Confirmed",
  },
  {
    id: "LOG-03",
    event: "Scheduling vendor unavailable",
    audience: "Operational",
    fields:
      "Dependency ID, operation, result, retry state, duration, environment, correlation ID",
    redaction:
      "No vendor token, student appointment payload, or private fields",
    retention: "Operational retention class",
    owner: "Integration Owner",
    status: "Confirmed",
  },
  {
    id: "LOG-04",
    event: "Unhandled application exception",
    audience: "Protected diagnostic",
    fields:
      "Service, operation, sanitized exception class, environment, correlation ID, trace reference",
    redaction:
      "No stack trace to user, no database credentials, no request body, no private record content",
    retention: "Restricted diagnostic retention class",
    owner: "Application Engineering",
    status: "Conditional",
  },
  {
    id: "LOG-05",
    event: "Authorization source heartbeat",
    audience: "Source health",
    fields:
      "Source ID, last-seen time, parser state, expected volume, actual volume",
    redaction:
      "No user records",
    retention: "Monitoring health retention class",
    owner: "Security Monitoring",
    status: "Confirmed",
  },
  {
    id: "LOG-06",
    event: "Legacy report failure",
    audience: "Operational",
    fields:
      "Report job ref, component ref, result, duration, environment, correlation ID",
    redaction:
      "No generated report content",
    retention: "Operational retention class",
    owner: "Reporting Team",
    status: "Unknown",
  },
];

const responsePatterns = [
  {
    situation: "Authorization denied",
    user:
      "You do not have permission to perform this action. Reference: NB-403.",
    operator:
      "Action denied by authorization policy; correlation ID links to audit event.",
    security:
      "Actor ref, target ref, action, decision=deny, policy ref, correlation ID.",
  },
  {
    situation: "Dependency unavailable",
    user:
      "This feature is temporarily unavailable. Your main record was not changed. Please try again later.",
    operator:
      "Scheduling dependency unavailable; retry queue active; correlation ID recorded.",
    security:
      "Only if the failure is security-relevant; otherwise operational evidence may be sufficient.",
  },
  {
    situation: "Unexpected internal error",
    user:
      "We could not complete the request. Reference: NB-500-7F2.",
    operator:
      "Service and operation failed; sanitized exception category and correlation ID available.",
    security:
      "Escalate if the event pattern or affected workflow meets a defined security-monitoring rule.",
  },
  {
    situation: "Validation error",
    user:
      "One or more fields need attention. Review the highlighted entries.",
    operator:
      "Usually low-level operational evidence only unless repeated patterns matter to service health.",
    security:
      "Do not log full private field values merely because validation failed.",
  },
];

const mistakes = [
  {
    mistake: "Showing stack traces to users",
    why:
      "Internal component names, paths, line references, dependency details, and implementation context can leak unnecessarily.",
    better:
      "Give users a bounded message and correlation reference; keep deeper diagnostics in restricted channels.",
  },
  {
    mistake: "Logging everything",
    why:
      "Excess data increases privacy, access, retention, storage, and investigation burden.",
    better:
      "Record the minimum fields needed for the operational or security purpose.",
  },
  {
    mistake: "Logging secrets",
    why:
      "Logs often have broader access and longer retention than secret stores.",
    better:
      "Use secret metadata or record IDs, never secret values.",
  },
  {
    mistake: "No correlation ID",
    why:
      "Multi-service workflows become difficult to reconstruct without a safe way to connect related events.",
    better:
      "Use a non-secret correlation identifier across the workflow.",
  },
  {
    mistake: "No source-health monitoring",
    why:
      "A silent logging pipeline can make defenders believe nothing happened when evidence is simply missing.",
    better:
      "Track source freshness, expected volume, parser state, and ingestion health.",
  },
  {
    mistake: "One log audience for everything",
    why:
      "Users, operators, defenders, and diagnostic reviewers need different levels of detail.",
    better:
      "Separate user messages, operational logs, security audit events, and restricted diagnostics.",
  },
  {
    mistake: "Permanent verbose debugging",
    why:
      "Temporary diagnostic detail can become long-term sensitive telemetry.",
    better:
      "Time-bound diagnostic settings, restrict access, review retention, and return to the approved baseline.",
  },
  {
    mistake: "Treating every error as a security incident",
    why:
      "Ordinary validation and dependency failures can overwhelm monitoring if they are not classified by purpose and impact.",
    better:
      "Define which events are operational, which are security-relevant, and which need escalation.",
  },
];

const reviewQuestions = [
  "Who is the audience for this error or event?",
  "What decision should this evidence support?",
  "Which fields are required?",
  "Which sensitive values are forbidden?",
  "Does the user-facing message expose internal implementation detail?",
  "Does the event identify service and environment?",
  "Is actor or workload identity needed?",
  "Is target reference needed?",
  "Is a correlation ID present?",
  "Is the result or policy decision explicit?",
  "Is the event schema stable and documented?",
  "Who owns the source?",
  "Who can access the evidence?",
  "How long should it be retained?",
  "How is source health measured?",
  "What happens if the logging destination is unavailable?",
  "Which events should become alerts?",
  "What change triggers require schema or privacy re-review?",
];

const dashboardMetrics = [
  {
    label: "Critical audit sources",
    value: "12",
    note: "11 healthy, 1 degraded",
  },
  {
    label: "Redaction compliance",
    value: "98.7%",
    note: "One diagnostic schema requires remediation",
  },
  {
    label: "Events with correlation IDs",
    value: "96%",
    note: "Legacy reporting workflow remains incomplete",
  },
  {
    label: "Source freshness",
    value: "99.4%",
    note: "Authorization source delayed for 7 minutes earlier today",
  },
];

const logs = [
  "[09:02] AUTHZ decision=DENY actor=usr-102 target=stu-884 policy=ASSIGNMENT correlation=NB-91A",
  "[09:08] PRIV action=ACCOUNT_RECOVERY result=APPROVED approval=APR-224 correlation=NB-92C",
  "[09:14] DEP dependency=SCHEDULING result=UNAVAILABLE retry=QUEUED correlation=NB-93F",
  "[09:19] SRC source=AUTHZ_AUDIT last_seen=09:12 parser=HEALTHY freshness=DEGRADED",
  "[09:27] ERR service=RECORD_API class=StorageOperationError correlation=NB-94B redaction=PASS",
  "[09:41] LOG legacy_report correlation_id=MISSING status=UNKNOWN",
  "[09:55] SRC source=AUTHZ_AUDIT freshness=RECOVERED backlog=0",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Return a simple support-safe message to the user, generate a correlation ID, and route sanitized technical details to a restricted diagnostic channel.",
    outcome:
      "Best. The user gets useful guidance while deeper implementation evidence remains protected.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Show the full stack trace and database exception to the user so support has more information.",
    outcome:
      "Risky. This exposes unnecessary internal detail and may include sensitive context.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Show only â€œErrorâ€ and record nothing.",
    outcome:
      "Caution. The user receives little guidance and operators lose evidence needed to diagnose the failure.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat missing authorization-source freshness as a monitoring-quality issue, verify source health, preserve the evidence gap, and avoid assuming there were no authorization events.",
    outcome:
      "Best. The team distinguishes absence of evidence from evidence of absence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Assume no authorization activity occurred because the dashboard shows no events.",
    outcome:
      "Risky. The source itself may be delayed or unavailable.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Disable source-health checks because they create extra alerts.",
    outcome:
      "Risky. This removes evidence about whether the logging pipeline is functioning.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest goal of secure error handling?",
    choices: [
      "Hide every error from everyone.",
      "Give each audience the information needed for safe action while protecting unnecessary internal and sensitive detail.",
      "Show developers the same message shown to end users.",
      "Log every possible value.",
    ],
    answer: 1,
    explanation:
      "Secure error handling balances usability, diagnostics, security evidence, and privacy by audience.",
  },
  {
    question:
      "Why is a correlation ID useful?",
    choices: [
      "It stores the user's password.",
      "It links related events across services without exposing secret values.",
      "It replaces timestamps.",
      "It proves an incident occurred.",
    ],
    answer: 1,
    explanation:
      "Correlation IDs help reconstruct multi-service workflows and support troubleshooting and investigation.",
  },
  {
    question:
      "Which value should never be recorded in an ordinary security log?",
    choices: [
      "Timestamp",
      "Correlation ID",
      "Secret token value",
      "Action result",
    ],
    answer: 2,
    explanation:
      "Secret values should remain in approved secret-management systems and out of logs.",
  },
  {
    question:
      "What does source-health monitoring protect against?",
    choices: [
      "Only application crashes.",
      "Mistaking a broken or delayed logging pipeline for evidence that nothing happened.",
      "The need for log retention.",
      "The need for access control.",
    ],
    answer: 1,
    explanation:
      "Source-health evidence shows whether logging itself is current and reliable enough to support conclusions.",
  },
  {
    question:
      "Which is the strongest user-facing message for an unexpected internal error?",
    choices: [
      "Display the full stack trace.",
      "Display database names and server paths.",
      "Provide a bounded message with a safe reference or correlation code and no unnecessary internal detail.",
      "Display the application secret to support troubleshooting.",
    ],
    answer: 2,
    explanation:
      "Users need actionable guidance, not protected implementation detail.",
  },
  {
    question:
      "Why should logs use data minimization?",
    choices: [
      "Because logs should contain no useful information.",
      "Because only fields needed for the stated operational or security purpose should be retained, reducing privacy and access burden.",
      "Because timestamps are unnecessary.",
      "Because audit logs are never reviewed.",
    ],
    answer: 1,
    explanation:
      "Data minimization keeps logs useful while reducing unnecessary sensitive data.",
  },
  {
    question:
      "A security dashboard shows no authorization events, but source freshness is degraded. What is the strongest conclusion?",
    choices: [
      "No authorization activity occurred.",
      "The application is safe.",
      "Evidence is incomplete until source health is restored and backlog status is understood.",
      "Authorization logging should be disabled.",
    ],
    answer: 2,
    explanation:
      "A degraded source weakens confidence in event absence and should remain an explicit evidence limitation.",
  },
];

const checklistItems = [
  "User-facing errors provide safe, useful guidance without exposing internal implementation detail.",
  "Operational, security, and diagnostic evidence are separated by audience and purpose.",
  "Logs contain only fields needed for the stated purpose.",
  "Passwords, tokens, keys, cookies, recovery codes, and other secret values are excluded.",
  "Private record content is minimized when metadata is sufficient.",
  "Important workflows use correlation identifiers.",
  "Authorization and privileged actions record explicit outcomes.",
  "Logging schemas have accountable owners.",
  "Log access and retention are defined.",
  "Source health is monitored for freshness, volume, parser state, and ingestion status.",
  "Logging failure does not silently become evidence that nothing happened.",
  "Diagnostic verbosity is restricted and time-bounded.",
  "Error-handling behavior preserves integrity and safe failure where appropriate.",
  "No logging exercise requires real private data, credentials, production systems, or unauthorized access.",
];

const takeaways = [
  "Secure error handling is about giving the right audience the right amount of information.",
  "User messages should be useful but should not reveal unnecessary internal detail.",
  "Operational logs, security audit events, and protected diagnostics serve different purposes.",
  "Correlation IDs help connect distributed evidence without exposing secrets.",
  "Logs should minimize sensitive data and exclude secret values entirely.",
  "Source-health monitoring is necessary because missing logs can reflect a broken pipeline rather than absence of activity.",
  "Authorization, privileged actions, configuration changes, and important security decisions should be auditable.",
  "Retention and access are part of logging architecture, not afterthoughts.",
  "The A11 logging design becomes a direct input to code review, testing, deployment, and incident response.",
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
        Module A11
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

export default function SecureErrorHandlingAndLoggingPage() {
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
              A11.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secure Error Handling and Logging
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Software will fail sometimes. Secure architecture does not pretend
            every error can be prevented. Instead, it designs how failures are
            contained, communicated, recorded, investigated, and learned from.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches you to separate user-facing errors from
            operational diagnostics, security audit events, and protected
            debugging evidence while keeping secrets and unnecessary private
            data out of logs.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A11: Secure Software Architecture"
          lessonTitle="Secure Error Handling and Logging"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.6 Entry Readiness"
          items={[
            "I can explain how requirements, threat models, secrets, and dependencies affect software design.",
            "I understand that different audiences need different levels of error detail.",
            "I understand that logs are security evidence and must be protected like other important data.",
            "I will use only fictional events and synthetic identifiers in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="One Failure, Four Different Audiences"
        >
          <p className="leading-8">
            Imagine the fictional Northbridge portal fails while saving a
            privileged account change. The end user needs to know that the
            action did not complete. The operator needs to know which service
            failed. The security team needs an auditable record of the attempted
            privileged action. A developer may need deeper diagnostic context.
          </p>

          <p className="mt-4 leading-8">
            Those audiences should not all receive the same message.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fourAudienceModel.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.audience}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Include: {item.include}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Avoid: {item.avoid}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for This Lesson">
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

        <Section eyebrow="Why It Matters" title="Errors Can Leak, Hide, or Preserve Evidence">
          <p className="leading-8">
            Poor error handling can expose implementation details, private data,
            or secrets. Poor logging can hide important security decisions or
            create huge amounts of noisy data. Good design balances privacy,
            usability, operations, investigation, and accountability.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Protect the user",
                text:
                  "Give understandable guidance without exposing protected technical details.",
              },
              {
                title: "Protect the evidence",
                text:
                  "Record important decisions and outcomes with enough context to investigate later.",
              },
              {
                title: "Protect the data",
                text:
                  "Minimize what gets logged and keep secret or private values out of telemetry.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Framework" title="Eight Steps for Secure Failure Handling">
          <div className="grid gap-5">
            {errorFlow.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[100px_1fr]">
                  <span className="text-4xl font-black text-cyan-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 font-semibold leading-7 text-cyan-100">
                      {item.question}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.detail}
                    </p>
                    <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                      Evidence: {item.evidence}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Vocabulary" title="Error Handling and Logging Terms">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Logging Domains" title="Eight Event Areas Worth Designing Explicitly">
          <div className="grid gap-5">
            {loggingDomains.map((item) => (
              <article
                key={item.code}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl bg-cyan-300 px-3 py-2 font-mono font-black text-slate-950">
                    {item.code}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Examples
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.examples}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Important context
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.important}
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Avoid
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.avoid}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="User vs. Defender" title="One Event Can Produce Different Outputs">
          <p className="leading-8">
            Strong error handling creates different outputs from the same
            underlying event depending on the audience.
          </p>

          <div className="mt-6 grid gap-5">
            {responsePatterns.map((item) => (
              <article
                key={item.situation}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.situation}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      User
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.user}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Operator
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.operator}
                    </p>
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Security
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.security}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Logging Assurance Dashboard"
          subtitle="Fictional telemetry-health data"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Authorization Audit Source Freshness Degraded"
          severity="Medium"
          time="09:19"
          source="Fictional Source Health Monitor"
          details="The authorization audit source has not delivered new events for seven minutes. Parser state is healthy, but expected event volume is above zero."
          recommendation="Treat event absence as an evidence-quality issue until source freshness recovers. Do not assume no authorization activity occurred."
        />

        <Section eyebrow="Event Register" title="Six Fictional Logging Requirements">
          <div className="grid gap-5">
            {eventRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.audience}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.event}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Fields
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.fields}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Redaction
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.redaction}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Retention
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.retention}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.owner}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Error and Logging Evidence"
          logs={logs}
        />

        <Section eyebrow="Review Questions" title="Eighteen Questions for Error and Logging Design">
          <div className="grid gap-4 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Missing Correlation ID"
          question="What is the strongest conclusion about LOG-06?"
          evidence={[
            "The legacy reporting workflow records job reference, component reference, result, duration, and environment.",
            "The event does not contain a correlation ID.",
            "The workflow spans the application, reporting service, and storage service.",
            "No alternative cross-service linkage is documented.",
          ]}
          options={[
            "The event is useless and should be deleted.",
            "The logging design is partially useful but lacks reliable cross-service traceability for the workflow.",
            "The missing correlation ID proves malicious activity.",
            "The event should include the full generated report content instead.",
          ]}
          bestAnswer={1}
          explanation="The existing fields still provide operational value, but the missing correlation identifier weakens multi-service traceability."
        />

        <Section eyebrow="Source Health" title="No Logs Is Not the Same as No Activity">
          <p className="leading-8">
            Security teams depend on logging pipelines. If a source stops
            sending events, dashboards may look quiet even while the software is
            active. That is why source-health evidence belongs in the
            architecture.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Freshness", "When was the last expected event or heartbeat received?"],
              ["Volume", "Is current event volume within an expected range?"],
              ["Parsing", "Are events being interpreted by the expected schema?"],
              ["Ingestion", "Are events arriving at the intended destination?"],
              ["Retention", "Are required events still available for the approved period?"],
              ["Ownership", "Who responds when the source becomes stale or degraded?"],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Eight Ways Error and Logging Design Fails">
          <div className="grid gap-5">
            {mistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.mistake}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.why}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” Internal Error During Privileged Change"
          scenario="A fictional privileged account change fails because the record service returns an unexpected internal exception. The user is waiting, operators need to troubleshoot, and the security team must preserve the audit trail."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Quiet Dashboard, Degraded Source"
          scenario="The authorization dashboard shows no events for seven minutes, but the source-health monitor reports degraded freshness while parser health remains normal."
          choices={scenarioTwoChoices}
        />

        <Section eyebrow="Safe Fictional Lab" title="Design an Error and Logging Matrix">
          <p className="leading-8">
            Use only fictional events and synthetic identifiers. Do not include
            real private records, credentials, tokens, internal production
            endpoints, or confidential logs.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Choose at least eight fictional error or audit events.",
              "Identify the audience for each event.",
              "Write a safe user-facing message where applicable.",
              "Define the operational fields needed.",
              "Define the security audit fields needed.",
              "List forbidden sensitive values.",
              "Add a correlation ID requirement for multi-service workflows.",
              "Define event owner and source owner.",
              "Define access and retention class.",
              "Add source-health expectations.",
              "Define alert or escalation conditions.",
              "Assign status: Confirmed, Conditional, Unknown, or Blocked.",
              "Add validation evidence.",
              "Add change triggers for schema, privacy, or architecture changes.",
            ].map((item, index) => (
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Quiet Authorization Dashboard"
          question="What is the strongest evidence-based conclusion?"
          evidence={[
            "No authorization events are visible for seven minutes.",
            "The source-health monitor reports freshness=DEGRADED.",
            "Parser status is healthy.",
            "Expected event volume for this time period is above zero.",
            "The source later recovers and reports backlog=0.",
          ]}
          options={[
            "No authorization activity occurred during the seven-minute window.",
            "The application was compromised.",
            "The event record was temporarily unreliable; conclusions about activity during the degraded period should remain bounded until source health and delivery are confirmed.",
            "Source-health monitoring is unnecessary.",
          ]}
          bestAnswer={2}
          explanation="A degraded source creates an evidence-quality limitation. It does not prove activity or inactivity by itself."
        />

        <Section eyebrow="Advanced Challenge" title="Design a Privileged Audit Event Schema">
          <p className="leading-8">
            Create a fictional audit schema for a high-impact account-recovery
            workflow that is useful to defenders without exposing secrets or
            unnecessary private information.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Event ID",
              "Timestamp",
              "Environment",
              "Actor reference",
              "Approver reference",
              "Target account reference",
              "Action",
              "Result",
              "Policy or approval reference",
              "Correlation ID",
              "Service source",
              "Reason category",
              "Forbidden fields",
              "Retention class",
              "Access owner",
              "Source-health owner",
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

          <p className="mt-6 leading-8">
            The best schema is not the one with the most fields. It is the one
            that captures the evidence needed for accountability and
            investigation while minimizing sensitive data.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.6 Defender Checklist"
          items={checklistItems}
        />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz
            title="A11.6 Mini Quiz: Secure Error Handling and Logging"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Error Handling and Logging Design"
          prompt="Create the sixth artifact for your A11 Secure Software Design Assessment: a fictional error-handling and logging matrix with at least eight events. Include audience, safe user message, operational fields, security audit fields, forbidden fields, correlation requirement, owner, source owner, access class, retention class, source-health expectation, validation evidence, status, escalation rule, and change trigger."
          tips={[
            "Use synthetic identifiers and fictional events only.",
            "Include at least one authorization decision and one privileged action.",
            "Include one dependency failure and one source-health event.",
            "Show how user-facing messages differ from protected diagnostics.",
            "Include at least one event with an explicit redaction requirement.",
            "Explain how the design supports investigations without collecting unnecessary private data.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A11.7?">
          <p className="leading-8">
            A11.7 moves to Code Review for Security. Before continuing, make
            sure you can identify what secure implementation reviewers should
            look for in error handling, logging, and evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can separate user-facing errors, operational logs, security audit events, and protected diagnostics.",
              "I can define useful event fields without logging secrets or unnecessary private data.",
              "I can explain why correlation IDs improve multi-service traceability.",
              "I can evaluate source health before drawing conclusions from missing events.",
              "I can define access, retention, ownership, and change triggers for logging evidence.",
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

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Logging Design Look Professional">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use event IDs",
                detail:
                  "Give each important event a stable ID so requirements, code review, testing, alerts, and retention can reference it.",
              },
              {
                title: "Separate audiences",
                detail:
                  "Show the user response, operational evidence, security evidence, and diagnostic evidence separately.",
              },
              {
                title: "Show forbidden fields",
                detail:
                  "Make redaction rules explicit rather than assuming developers will know what not to log.",
              },
              {
                title: "Use synthetic references",
                detail:
                  "Use fictional actor, target, service, and correlation identifiers rather than real user data.",
              },
              {
                title: "Show source health",
                detail:
                  "Document freshness, volume, parsing, ingestion, and ownership expectations.",
              },
              {
                title: "Show access and retention",
                detail:
                  "Explain who can view the evidence and how long it should remain.",
              },
              {
                title: "Show validation",
                detail:
                  "Record how the team confirms required fields are present and forbidden values are absent.",
              },
              {
                title: "Connect to A11",
                detail:
                  "Link events back to requirements, threat-model concerns, secrets governance, and dependency workflows.",
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

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Use synthetic logging evidence only
          </h2>
          <p className="mt-3 leading-7">
            Do not collect, expose, or request real credentials, tokens,
            private records, confidential logs, production endpoints, or other
            sensitive operational data. All examples in this lesson are
            fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.6 Secure Error Handling and Logging Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an error-handling and logging architecture that
            balances user safety, operational troubleshooting, auditability,
            privacy, redaction, correlation, retention, access, and source
            health. Next, A11.7 focuses on Code Review for Security.
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
