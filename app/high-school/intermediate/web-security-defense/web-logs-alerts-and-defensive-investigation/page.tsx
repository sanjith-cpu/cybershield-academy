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
const modulePath = `${trackPath}/web-security-defense`;
const previousLesson = `${modulePath}/secure-headers-cookies-tls-and-configuration`;
const nextLesson = `${modulePath}/web-security-defense-lab`;

const objectives = [
  "Explain how fictional reverse-proxy, web-server, application, API, authentication, session, database, browser, user, and business records describe different parts of one web event.",
  "Distinguish raw events, normalized fields, alerts, detections, investigations, findings, confirmed impact, and residual risk.",
  "Build a defensible fictional timeline using request IDs, session IDs, account IDs, object IDs, device labels, timestamps, routes, and transaction identifiers.",
  "Evaluate fictional web alerts without treating one status code, tool verdict, blocked request, click, or sign-in event as proof of the entire case.",
  "Create a professional fictional Web Investigation Report with evidence, confidence, gaps, containment, validation, monitoring, rollback, and closure criteria."
];

const vocabulary = [
  [
    "Event",
    "A fictional record created when a browser, proxy, server, application, API, identity service, database, device, or business system observes an action or condition."
  ],
  [
    "Log source",
    "A fictional system that records selected events according to its own field names, timestamps, retention, and visibility."
  ],
  [
    "Normalization",
    "A defensive process that maps fictional records from different systems into consistent fields and time formats."
  ],
  [
    "Correlation",
    "A defensive process that connects fictional events using shared identifiers, timing, identities, resources, routes, devices, and business context."
  ],
  [
    "Alert",
    "A fictional notification generated when a rule, model, threshold, policy, or analyst review identifies activity that may require attention."
  ],
  [
    "Detection",
    "A fictional analytic conclusion that selected evidence matches a defined suspicious or risky pattern."
  ],
  [
    "Finding",
    "A documented fictional conclusion supported by evidence, confidence, limitations, owner, and recommended action."
  ],
  [
    "False positive",
    "A fictional alert that appears suspicious but is verified as expected, approved, or harmless activity."
  ],
  [
    "False negative",
    "A fictional risky event that is not identified or prioritized by the available control or detection."
  ],
  [
    "Correlation ID",
    "A fictional identifier used across selected services to connect one request or workflow."
  ],
  [
    "Evidence gap",
    "A documented fictional area where logs, retention, fields, timestamps, ownership, or visibility are insufficient for a reliable conclusion."
  ],
  [
    "Closure criteria",
    "The fictional technical, business, monitoring, evidence, and owner conditions that must be met before an investigation is closed."
  ]
];

const logSources = [
  {
    "source": "Reverse proxy or load balancer",
    "records": "Fictional host, method, path, source label, request ID, status, latency, route, upstream service, and selected policy decisions.",
    "bestUse": "Confirm whether the request reached the edge, which route handled it, and which upstream service received it.",
    "limitation": "The edge may not understand the application’s user, object, authorization, database, or business result.",
    "keyFields": "timestamp, request_id, host, method, path, source_label, status, latency, upstream"
  },
  {
    "source": "Web server",
    "records": "Fictional virtual host, resource, status, response size, content type, server timing, static or dynamic handling, and error category.",
    "bestUse": "Confirm resource delivery, routing, response behavior, and selected server errors.",
    "limitation": "A successful web response does not prove the application authorized the action or changed data.",
    "keyFields": "timestamp, request_id, vhost, route, status, bytes, content_type, server_time"
  },
  {
    "source": "Application",
    "records": "Fictional account, role, session, route handler, object, validation, authorization, business rule, action, error, and decision.",
    "bestUse": "Understand how the application interpreted the request and which control or workflow branch acted.",
    "limitation": "Application logging can omit branches, fail before writing, or record only selected business context.",
    "keyFields": "timestamp, request_id, account_id, session_id, object_id, action, decision, reason"
  },
  {
    "source": "API gateway or service",
    "records": "Fictional endpoint, method, caller identity, token context, scope, schema result, service route, status, and response category.",
    "bestUse": "Trace browser, mobile, internal, or third-party calls across service boundaries.",
    "limitation": "An API success does not prove the caller had correct business approval or that downstream state committed.",
    "keyFields": "timestamp, trace_id, caller, audience, scope, endpoint, status, downstream_service"
  },
  {
    "source": "Authentication and session",
    "records": "Fictional sign-in, factors, device, risk, session creation, token issue, expiration, revocation, logout, and policy result.",
    "bestUse": "Connect a request with recognized identity and session context.",
    "limitation": "A successful sign-in or valid session does not prove physical identity, user intent, or authorization for every resource.",
    "keyFields": "timestamp, account_id, sign_in_id, session_id, device_id, factor, policy, result"
  },
  {
    "source": "Database or data store",
    "records": "Fictional service identity, operation, object, row or document count, transaction, commit, rollback, and final state.",
    "bestUse": "Confirm whether data was read, changed, created, removed, committed, or rolled back.",
    "limitation": "The data layer may not directly identify the originating browser user without application correlation.",
    "keyFields": "timestamp, transaction_id, service_identity, object_id, operation, row_count, result"
  },
  {
    "source": "Browser, device, or endpoint",
    "records": "Fictional page navigation, browser request, rendered result, download, local storage, device posture, process, and user interaction.",
    "bestUse": "Confirm what appeared in the client and which interaction occurred locally.",
    "limitation": "Client evidence can be incomplete, user controlled, or unavailable and does not prove server-side processing.",
    "keyFields": "timestamp, device_id, browser_id, account_id, page, action, destination, local_result"
  },
  {
    "source": "User and business systems",
    "records": "Fictional intended action, owner confirmation, ticket, invoice, enrollment, payment, export, approval, record state, and business impact.",
    "bestUse": "Establish expected workflow, legitimate explanation, business consequence, and accountable ownership.",
    "limitation": "Human statements and business records should be correlated with technical systems and timestamps.",
    "keyFields": "timestamp, user, owner, workflow_id, transaction_id, expected_action, observed_result, impact"
  }
];

const alertPipeline = [
  {
    "stage": "1. Collection",
    "description": "Fictional systems generate and forward selected web, identity, application, database, browser, and business events.",
    "defensiveQuestion": "Which required systems are included, and are records arriving completely and on time?",
    "failureMode": "Missing sources, parsing errors, disabled logging, duplicate events, or delayed delivery create blind spots.",
    "evidence": "Source inventory, event count, last-seen time, parser status, retention, owner, and health alert."
  },
  {
    "stage": "2. Parsing",
    "description": "Fictional raw records are separated into fields such as time, account, route, status, request ID, action, and result.",
    "defensiveQuestion": "Did the parser interpret the current log format correctly?",
    "failureMode": "Format changes can place values in the wrong fields or drop important context.",
    "evidence": "Raw sample, parsed event, parser version, error count, field coverage, and validation test."
  },
  {
    "stage": "3. Normalization",
    "description": "Fictional source-specific fields are mapped into consistent names, types, categories, and time zones.",
    "defensiveQuestion": "Are account, route, status, action, device, object, and result represented consistently?",
    "failureMode": "Inconsistent types or time formats can break searches and correlations.",
    "evidence": "Normalization rule, source field, target field, type, time zone, and test result."
  },
  {
    "stage": "4. Enrichment",
    "description": "Fictional events receive approved context such as application owner, route sensitivity, account role, device status, tenant, or business process.",
    "defensiveQuestion": "Is the added context current, trusted, and relevant to the detection?",
    "failureMode": "Stale ownership, role, asset, or risk data can create false conclusions.",
    "evidence": "Enrichment source, update time, owner, version, matched object, and confidence."
  },
  {
    "stage": "5. Detection",
    "description": "A fictional rule, threshold, model, or analytic groups events into a suspicious pattern.",
    "defensiveQuestion": "What exact condition triggered, and what evidence does it not include?",
    "failureMode": "Broad rules create noise, while narrow rules miss meaningful variations.",
    "evidence": "Rule ID, version, conditions, event IDs, threshold, severity, and excluded context."
  },
  {
    "stage": "6. Prioritization",
    "description": "Fictional severity, asset value, user role, control result, scope, and business context influence the investigation priority.",
    "defensiveQuestion": "Does the priority reflect potential impact and evidence strength rather than dramatic wording?",
    "failureMode": "Every alert becomes high priority, or critical business systems are treated like ordinary pages.",
    "evidence": "Severity logic, application tier, account role, data class, control outcome, and owner."
  },
  {
    "stage": "7. Investigation",
    "description": "A fictional analyst correlates source records, tests alternative explanations, documents gaps, and separates facts from conclusions.",
    "defensiveQuestion": "Which evidence supports the finding, which alternatives remain, and what is still unknown?",
    "failureMode": "The analyst accepts the alert title as proof and skips downstream or business evidence.",
    "evidence": "Case timeline, queries, event references, user confirmation, data state, confidence, and gaps."
  },
  {
    "stage": "8. Response and feedback",
    "description": "Fictional containment, remediation, validation, monitoring, and rule tuning are completed under accountable ownership.",
    "defensiveQuestion": "Did the response reduce risk without breaking legitimate use, and did the detection improve?",
    "failureMode": "Overbroad blocking, undocumented exceptions, untested tuning, and premature closure create new risk.",
    "evidence": "Action, owner, scope, test results, monitoring, rollback, rule change, and closure approval."
  }
];

const correlationFields = [
  {
    "field": "Request or trace ID",
    "connects": "Fictional proxy, web, application, API, and selected database events for one request or service flow.",
    "strength": "High when the same generated identifier is preserved accurately across services.",
    "risk": "Some services may replace or omit the identifier, and retries can create several related IDs.",
    "practice": "Record parent-child relationships and never assume one ID represents an entire user workflow."
  },
  {
    "field": "Session ID",
    "connects": "Fictional browser requests, application activity, account context, logout, expiration, and revocation.",
    "strength": "High for recognized application-session activity.",
    "risk": "A session can be copied, rotated, shared, expired, or disconnected from the physical user.",
    "practice": "Correlate with account, device, issue time, rotation, and risk events."
  },
  {
    "field": "Account ID",
    "connects": "Fictional sign-ins, sessions, application actions, approvals, access reviews, and user reports.",
    "strength": "Useful for identity-centered investigation.",
    "risk": "Shared, service, renamed, disabled, or compromised accounts require additional context.",
    "practice": "Include account type, owner, role, tenant, and lifecycle state."
  },
  {
    "field": "Device or browser ID",
    "connects": "Fictional sign-ins, browser actions, endpoint records, downloads, and session context.",
    "strength": "Useful for separating account activity across devices.",
    "risk": "Identifiers may reset, be unavailable, or represent a shared device.",
    "practice": "Correlate with managed state, user assignment, browser profile, and time."
  },
  {
    "field": "Object or resource ID",
    "connects": "Fictional route requests, authorization checks, application actions, database operations, and business records.",
    "strength": "Strong for understanding which record, file, invoice, profile, or project was affected.",
    "risk": "Client-supplied identifiers can differ from trusted server-resolved objects.",
    "practice": "Use the server-validated object and tenant relationship."
  },
  {
    "field": "Transaction or workflow ID",
    "connects": "Fictional approvals, payments, enrollments, exports, database commits, and business-system results.",
    "strength": "Strong for confirming business impact and duplicate handling.",
    "risk": "A request can fail before a transaction is created, or several requests can belong to one workflow.",
    "practice": "Document request-to-transaction mapping and final state."
  },
  {
    "field": "Timestamp",
    "connects": "Fictional events across all systems when identifiers are missing or partial.",
    "strength": "Essential for sequence and timing analysis.",
    "risk": "Time zones, clock drift, ingestion delay, batching, and event-generation time can differ.",
    "practice": "Normalize to one time zone and record source-time limitations."
  },
  {
    "field": "Route, method, and action",
    "connects": "Fictional edge, server, application, API, detection, and business behavior.",
    "strength": "Useful for identifying repeated patterns and affected functions.",
    "risk": "Similar routes can perform different actions depending on account, object, and workflow state.",
    "practice": "Combine route with authorization, object, session, and result."
  }
];

const investigationSteps = [
  {
    "step": "1",
    "title": "Preserve the alert and source events",
    "detail": "Record fictional alert ID, rule version, source event IDs, timestamps, systems, fields, severity logic, and retention status."
  },
  {
    "step": "2",
    "title": "Normalize the timeline",
    "detail": "Convert fictional timestamps to one zone, note clock and ingestion limitations, sort events, and keep original source times."
  },
  {
    "step": "3",
    "title": "Map identities and resources",
    "detail": "Connect fictional account, session, device, browser, request, route, object, tenant, service, and business workflow."
  },
  {
    "step": "4",
    "title": "Separate control results from impact",
    "detail": "Distinguish fictional allowed, warned, challenged, denied, blocked, quarantined, committed, rolled back, and no-record outcomes."
  },
  {
    "step": "5",
    "title": "Test alternative explanations",
    "detail": "Compare fictional automation, old bookmarks, retries, monitoring tools, approved testing, user mistakes, application defects, and suspicious activity."
  },
  {
    "step": "6",
    "title": "Respond and validate",
    "detail": "Apply narrow fictional containment or remediation, test legitimate and denied conditions, monitor, define rollback, and document residual risk."
  }
];

const evidenceMatrix = [
  {
    "source": "Alert record",
    "supports": "The fictional rule, version, severity, triggering conditions, grouped events, time, asset, and selected context.",
    "limitation": "The alert is an analytic starting point and does not prove intent, compromise, data access, or business impact."
  },
  {
    "source": "Raw source event",
    "supports": "The fictional original fields, timestamp, system, request, account, route, status, or action observed by one source.",
    "limitation": "One event reflects one system’s visibility and may be incomplete or ambiguous."
  },
  {
    "source": "Normalized event",
    "supports": "The fictional mapped fields and consistent types used across sources.",
    "limitation": "Normalization can hide source detail or propagate parser errors if not validated."
  },
  {
    "source": "Application decision log",
    "supports": "The fictional validation, authentication, authorization, business rule, action, denial, or error.",
    "limitation": "The application may log a decision without confirming database or business-system state."
  },
  {
    "source": "Database or transaction record",
    "supports": "The fictional object, read, write, transaction, commit, rollback, row count, and final data state.",
    "limitation": "The data layer may not show the original user intent or browser context."
  },
  {
    "source": "Browser or endpoint record",
    "supports": "The fictional page, click, navigation, download, process, device, and local result.",
    "limitation": "Client evidence can be incomplete, and a click does not prove form submission or server acceptance."
  },
  {
    "source": "User and owner confirmation",
    "supports": "The fictional intended action, recognized activity, approved workflow, system purpose, and observed business effect.",
    "limitation": "Human statements require technical and system-of-record correlation."
  },
  {
    "source": "Change, deployment, and monitoring record",
    "supports": "The fictional application version, rule change, configuration change, owner, validation, health, exception, and rollback.",
    "limitation": "A documented change can still be incorrect or unrelated to the observed event."
  }
];

const investigationTimeline = [
  {
    "time": "11:42:00.000",
    "source": "Alert",
    "event": "A fictional rule creates a high-severity alert for repeated requests to an administrative export route from a teacher account.",
    "meaning": "A suspicious pattern is identified, but intent and impact are not yet established."
  },
  {
    "time": "11:41:51.120",
    "source": "Sign-in",
    "event": "The fictional teacher account has an approved active session from a known managed device.",
    "meaning": "Recognized authentication and session context exists."
  },
  {
    "time": "11:41:55.006",
    "source": "Proxy",
    "event": "The session requests /admin/export three times with three related request IDs.",
    "meaning": "Repeated route access is confirmed at the edge."
  },
  {
    "time": "11:41:55.012",
    "source": "Application",
    "event": "Each request is denied because the teacher role lacks district-export permission.",
    "meaning": "Server-side function authorization prevents the action."
  },
  {
    "time": "11:41:55.016",
    "source": "Database",
    "event": "No fictional export query, job, file, or transaction is created.",
    "meaning": "No confirmed export or data-layer impact follows the denied requests."
  },
  {
    "time": "11:41:56.100",
    "source": "Browser",
    "event": "The fictional browser shows an old bookmarked administrative page refreshing after an expired interface state.",
    "meaning": "Client evidence supports a possible nonmalicious explanation for repetition."
  },
  {
    "time": "11:43:10.000",
    "source": "User report",
    "event": "The teacher reports opening an old bookmark and pressing refresh when the page failed to load.",
    "meaning": "The user explanation aligns with browser and request timing."
  },
  {
    "time": "11:44:20.000",
    "source": "Route review",
    "event": "The administrative page shell is reachable by any authenticated role, while the export API correctly enforces permission.",
    "meaning": "A confusing interface exposure exists without confirmed data access."
  },
  {
    "time": "11:46:00.000",
    "source": "Detection review",
    "event": "The rule raises high severity for any three export-route requests but does not include authorization result or database state.",
    "meaning": "The detection lacks outcome context and overstates priority."
  },
  {
    "time": "11:50:00.000",
    "source": "Containment",
    "event": "No account disablement is applied because the requests were denied and evidence supports accidental navigation.",
    "meaning": "Response remains proportional to the evidence."
  },
  {
    "time": "11:55:00.000",
    "source": "Remediation",
    "event": "The application adds server-verified route gating and redirects unauthorized roles to a safe not-authorized page.",
    "meaning": "The interface no longer exposes the unavailable route."
  },
  {
    "time": "12:02:00.000",
    "source": "Detection tuning",
    "event": "The rule lowers priority when all requests are denied and no downstream action exists, while retaining high priority for allowed or committed export activity.",
    "meaning": "Tuning adds control and impact context without suppressing meaningful cases."
  },
  {
    "time": "12:08:00.000",
    "source": "Positive test",
    "event": "A fictional administrator completes an approved export after reauthentication and dual approval.",
    "meaning": "Legitimate privileged use remains visible and functional."
  },
  {
    "time": "12:12:00.000",
    "source": "Negative test",
    "event": "A fictional teacher cannot load the route or call the export API, and repeated denied requests create a lower-priority review event.",
    "meaning": "Application and detection behavior match the revised design."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No teacher export attempts reach the API, legitimate administrator exports remain normal, and no related database anomalies appear.",
    "meaning": "Short-term validation supports closure."
  }
];

const classifications = [
  {
    "classification": "True positive with confirmed impact",
    "meaning": "The fictional alert matches suspicious activity and supporting evidence confirms unauthorized or harmful application, data, account, or business effect.",
    "documentation": "Record exact facts, scope, affected objects, impact, confidence, containment, remediation, owners, and closure criteria."
  },
  {
    "classification": "True positive blocked or denied",
    "meaning": "The fictional suspicious or policy-violating action occurred, but controls prevented the protected result.",
    "documentation": "Record request, control decision, downstream evidence, user context, monitoring, and whether tuning is needed."
  },
  {
    "classification": "Expected activity",
    "meaning": "The fictional alert matches approved testing, automation, administration, monitoring, or business workflow.",
    "documentation": "Record owner, purpose, scope, schedule, account, route, expected volume, validation, and exception expiration."
  },
  {
    "classification": "User error or accidental navigation",
    "meaning": "The fictional event results from an old bookmark, retry, misunderstanding, expired page, or normal mistake without confirmed harmful intent.",
    "documentation": "Record user statement, browser evidence, server decision, downstream state, usability fix, and monitoring."
  },
  {
    "classification": "Application or configuration defect",
    "meaning": "The fictional alert reflects a bug, routing issue, logging error, parser problem, interface exposure, or inconsistent control.",
    "documentation": "Record affected version, route, evidence, owner, remediation, regression tests, and deployment validation."
  },
  {
    "classification": "Detection false positive",
    "meaning": "The fictional alert logic incorrectly classifies expected or harmless activity as suspicious.",
    "documentation": "Record triggering fields, missing context, alternative explanation, rule owner, tuning, positive tests, and negative tests."
  },
  {
    "classification": "Detection gap or false negative",
    "meaning": "The fictional risky activity is visible in source evidence but is missed, grouped incorrectly, or assigned insufficient priority.",
    "documentation": "Record missed pattern, available sources, missing logic, impact, owner, new test cases, and monitoring."
  },
  {
    "classification": "Evidence incomplete",
    "meaning": "The fictional sources, fields, retention, timestamps, user context, data state, or business records are insufficient for a reliable conclusion.",
    "documentation": "State the gap, confidence, temporary control, owner, due date, and decision criteria."
  }
];

const commonMistakes = [
  "Treating a fictional alert title or severity as proof of compromise or business impact.",
  "Using only normalized events without checking raw records and parser accuracy.",
  "Correlating by timestamp alone without considering time zones, clock drift, batching, and ingestion delay.",
  "Assuming a 2xx status proves authorized business completion or a 4xx status proves no related activity occurred.",
  "Treating repeated requests as malicious without reviewing retries, refreshes, automation, monitoring, and application defects.",
  "Treating a valid session as proof of physical user identity or intent.",
  "Closing after a control denial without confirming database, transaction, file, permission, account, and business state.",
  "Disabling an account or blocking an entire source before understanding scope and legitimate use.",
  "Tuning a detection by suppressing the noisy route instead of adding authorization, outcome, identity, asset, and business context.",
  "Ignoring missing logs, parser failures, retention limits, and stale enrichment data.",
  "Publishing real requests, account names, session IDs, tokens, routes, database records, screenshots, or private business data.",
  "Using real systems or aggressive testing instead of supplied fictional evidence and authorized validation."
];

const quizQuestions = [
  {
    "question": "What is the strongest interpretation of a fictional high-severity web alert?",
    "choices": [
      "It is a prioritized analytic starting point that requires source, control, impact, user, and business correlation.",
      "It proves compromise.",
      "It proves data loss.",
      "It proves the user acted maliciously."
    ],
    "answer": 0,
    "explanation": "Severity guides attention but does not replace investigation evidence."
  },
  {
    "question": "Why should raw fictional events be reviewed alongside normalized events?",
    "choices": [
      "Parsing and normalization can drop, transform, or misclassify important source details.",
      "Normalized events are always false.",
      "Raw events automatically prove intent.",
      "Raw events replace business records."
    ],
    "answer": 0,
    "explanation": "Analysts should validate that source details were mapped correctly."
  },
  {
    "question": "A fictional teacher makes three export requests, all denied, and no database export exists. What is the strongest direct conclusion?",
    "choices": [
      "Repeated export requests occurred and were denied; export impact is not confirmed.",
      "The teacher stole the data.",
      "The account is definitely compromised.",
      "The export succeeded because the route was requested."
    ],
    "answer": 0,
    "explanation": "Request attempts, control decisions, and downstream impact are separate."
  },
  {
    "question": "Which correlation field most directly connects a fictional proxy request to the matching application action?",
    "choices": [
      "A preserved request or trace ID.",
      "The page color.",
      "The user’s job title alone.",
      "The alert severity alone."
    ],
    "answer": 0,
    "explanation": "Shared generated identifiers are strong connectors when preserved accurately."
  },
  {
    "question": "Why must timestamps be normalized?",
    "choices": [
      "Sources can use different time zones, clocks, generation times, and ingestion delays.",
      "Normalization proves physical location.",
      "Every system already uses one clock.",
      "It removes the need for identifiers."
    ],
    "answer": 0,
    "explanation": "Reliable sequence analysis requires a common time basis and documented limitations."
  },
  {
    "question": "Which detection-tuning change is strongest?",
    "choices": [
      "Add authorization result, downstream state, account role, asset value, and legitimate workflow context, then test true and false cases.",
      "Suppress every event from the route.",
      "Lower every alert to informational.",
      "Block all users who trigger the rule once."
    ],
    "answer": 0,
    "explanation": "Contextual tuning reduces noise while preserving meaningful detection."
  },
  {
    "question": "Which closure plan is strongest after a fictional web alert investigation?",
    "choices": [
      "Validate source coverage, timeline, identities, control results, data and business state, remediation, detection behavior, legitimate use, monitoring, gaps, residual risk, and owner approval.",
      "Close after the alert disappears.",
      "Close after one user interview.",
      "Close because the request was blocked."
    ],
    "answer": 0,
    "explanation": "Professional closure requires technical, business, monitoring, evidence, and governance validation."
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
        Evidence Sources
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources That Describe Different Parts of a Web Event
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {logSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.records}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Best use
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.bestUse}
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

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Key fields
              </p>

              <p className="mt-2 font-mono text-xs leading-6 text-blue-50">
                {item.keyFields}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlertPipelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Alert Lifecycle
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Collection to Feedback
      </h2>

      <div className="mt-6 grid gap-5">
        {alertPipeline.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.stage}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive question
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.defensiveQuestion}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Failure mode
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.failureMode}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorrelationFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlation Keys
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Fields That Connect Separate Records
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {correlationFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.connects}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strength
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strength}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Risk
              </p>

              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Analyst practice
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.practice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InvestigationWorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Investigation Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Investigate a Web Alert in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {investigationSteps.map((item) => (
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Investigation Evidence Can and Cannot Prove
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
        Eight Outcomes That Require Different Actions
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
                {item.documentation}
              </p>
            </div>
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
        Correlated Investigation Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Export Alert from Detection to Closure
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

export default function WebLogsAlertsAndDefensiveInvestigationPage() {
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
              Module I8
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.7 Web Logs, Alerts, and Defensive Investigation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defenders collect, normalize, correlate, and
            interpret web evidence across proxies, servers, applications, APIs,
            identity services, sessions, databases, browsers, users, and
            business systems while separating alerts, control results,
            confirmed impact, evidence gaps, validation, and closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I8: Web Security Defense"
          lessonTitle="Web Logs, Alerts, and Defensive Investigation"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional alert is an investigation starting point rather than proof of compromise or impact.",
            "I will compare raw source records with normalized events and verify parser accuracy.",
            "I will separate request attempts, control decisions, user actions, data state, and business impact.",
            "I will use only supplied fictional logs, accounts, sessions, routes, devices, objects, transactions, and organizations.",
            "I will never publish real logs, account identifiers, session IDs, tokens, routes, database records, screenshots, or private business data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A High-Severity Alert Can Still Describe a Blocked or Expected Event"
        >
          <p className="leading-8">
            A fictional rule may label three requests to an administrative
            export route as high severity. The proxy confirms the requests, the
            application confirms authorization denials, the database confirms
            no export, the browser confirms an old bookmark, and the user
            confirms repeated refreshes. The alert is real, but the strongest
            finding depends on all of the evidence—not the alert title alone.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak investigation
              </p>

              <p className="mt-2 leading-7">
                “The fictional alert is high severity, so disable the account
                and report data theft immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong investigation
              </p>

              <p className="mt-2 leading-7">
                “Preserve source events, normalize time, correlate identities
                and objects, verify control and data results, test alternatives,
                respond proportionally, and validate the detection.”
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
          title="Web Investigations Cross Technical and Business Boundaries"
        >
          <p className="leading-8">
            Fictional web evidence may begin at a proxy, move through an
            application and database, connect to a session and device, and end
            in an invoice, export, enrollment, permission, or user report.
            Professional defenders preserve the chain, explain what each source
            proves, document what remains unknown, and avoid both panic and
            false reassurance.
          </p>
        </SectionCard>

        <LogSourceGuide />
        <AlertPipelineGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Six Investigation Layers"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              [
                "Observed event",
                "What fictional source directly recorded the request, action, decision, or state?",
              ],
              [
                "Normalized meaning",
                "How was the fictional source field mapped, timed, categorized, and enriched?",
              ],
              [
                "Detection",
                "Which fictional rule or analytic grouped the events and why?",
              ],
              [
                "Control result",
                "Was the fictional action allowed, warned, challenged, denied, blocked, committed, or rolled back?",
              ],
              [
                "Impact",
                "Which fictional account, object, database, file, transaction, permission, or business state changed?",
              ],
              [
                "Confidence",
                "Which fictional alternatives and evidence gaps limit the final conclusion?",
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

        <CorrelationFieldGuide />
        <EvidenceGuide />
        <InvestigationWorkflowGuide />
        <ClassificationGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Web Investigation Terms
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
          title="Fake Web Investigation Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student and administration applications."
          metrics={[
            {
              label: "Connected sources",
              value: "18",
              note: "Fictional proxy, server, application, API, identity, session, database, browser, user, and business sources.",
            },
            {
              label: "Open web alerts",
              value: "23",
              note: "Authentication, authorization, input, rendering, request, export, configuration, and evidence-health reviews.",
            },
            {
              label: "Evidence gaps",
              value: "6",
              note: "Parser, retention, missing request ID, stale ownership, browser visibility, and business-record cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Administrative Export Requests"
          severity="High"
          time="11:42 AM"
          source="Fake Web Detection Console"
          details="A fictional teacher account makes three requests to an administrative export route within ten seconds. The requests share one valid session and a known managed device. The application denies all three because the teacher role lacks export permission. No export query, job, file, transaction, or business-system change is created."
          recommendation="Preserve the alert and raw source events, normalize timestamps, correlate request, session, account, device, route, authorization, database, browser, user, and business evidence, review the interface and rule logic, remediate narrowly, test legitimate and denied cases, and monitor."
        />

        <FakeLogPanel
          title="Fake Export Alert Investigation Timeline"
          logs={[
            "11:41:51.120 SIGN_IN account='teacher-204' device='managed-17' session='sess-882' result='approved'",
            "11:41:55.006 PROXY request='req-301' route='/admin/export' status='403'",
            "11:41:55.012 APP request='req-301' role='teacher' permission='district_export' result='deny'",
            "11:41:55.016 DB request='req-301' export_query='none' transaction='none'",
            "11:41:56.100 BROWSER page='old_admin_bookmark' action='refresh'",
            "11:42:00.000 ALERT rule='WEB-EXP-14' count='3' severity='high'",
            "11:43:10.000 USER_REPORT explanation='old_bookmark_and_refresh'",
            "11:44:20.000 ROUTE_REVIEW page_shell='reachable' api_permission='enforced'",
            "11:46:00.000 DETECTION_REVIEW outcome_context='missing'",
            "11:55:00.000 REMEDIATE route_gate='server_verified' safe_denial_page='enabled'",
            "12:02:00.000 TUNE denied_without_downstream='lower_priority' allowed_or_committed='high'",
            "12:08:00.000 POSITIVE_TEST admin_export='success' reauth='pass' dual_approval='pass'",
            "12:12:00.000 NEGATIVE_TEST teacher_route='deny' api='deny' database='none'",
            "DAY7 MONITOR teacher_api_attempts='0' admin_exports='normal' db_anomalies='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Web Investigation Conclusion Is Best Supported?"
          evidence={[
            "The fictional teacher account has an approved session on a known managed device.",
            "Three administrative export requests reach the proxy within ten seconds.",
            "The application denies all three because the teacher role lacks permission.",
            "No export query, job, file, transaction, or business-system change exists.",
            "The browser shows an old administrative bookmark and repeated refreshes.",
            "The teacher’s explanation matches the browser and request timing.",
            "The page shell is reachable, but the API correctly enforces authorization.",
            "The detection uses request count without authorization or downstream outcome context.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Repeated export-route requests occurred and were denied, no export impact is confirmed, the interface exposed an unavailable route, and the detection needed outcome-aware tuning.",
            "The teacher stole district data.",
            "The account is definitely compromised.",
            "The alert should be deleted because no export occurred.",
          ]}
          bestAnswer={0}
          explanation="The correlated evidence supports a denied, likely accidental pattern, a narrow interface weakness, and a noisy detection—not confirmed data theft or account compromise."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Web Investigations"
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
          title="Complete a Fictional Web Alert Investigation"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Web Investigation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty-four supplied fictional records covering alert
                logic, raw events, parsing, normalization, enrichment, proxy,
                server, application, API, identity, session, database, browser,
                device, user, business, remediation, validation, monitoring,
                rule tuning, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve the fictional alert, rule version, grouped events, and raw source records.</li>
                <li>Normalize timestamps and document source-time and ingestion limitations.</li>
                <li>Correlate request, trace, session, account, device, object, transaction, route, and business identifiers.</li>
                <li>Separate request, control result, user action, application state, database state, and business impact.</li>
                <li>Test expected activity, user error, application defect, false positive, blocked suspicious activity, and evidence-incomplete alternatives.</li>
                <li>Write findings with confidence, owners, containment, remediation, positive tests, negative tests, monitoring, rollback, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, probe, modify,
            or test real applications, accounts, sessions, logs, routes,
            databases, devices, transactions, or monitoring systems. Do not
            publish real identifiers, screenshots, private records, or business data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A High-Severity Alert Contains Only Denied Requests"
          scenario="A fictional rule raises high severity after five requests to a sensitive route. Every request is denied by authorization, no downstream data action exists, and the browser shows an approved monitoring tool checking the route."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the monitoring owner and purpose, document the denied control results and absence of downstream impact, narrow the approved exception, tune the rule with identity and outcome context, test suspicious allowed cases, and monitor.",
              outcome:
                "Best defensive choice. It preserves detection value while reducing expected noise.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the rule for the route permanently.",
              outcome:
                "Weak control. Meaningful future activity could be missed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the monitoring account immediately without verification.",
              outcome:
                "Overbroad. Response should match ownership, scope, control result, and evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Application Log Is Missing Request IDs"
          scenario="A fictional proxy and API preserve request IDs, but a legacy application component records only timestamps, account names, and routes. Several requests occur in the same second."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the correlation gap, use time, account, session, route, object, and downstream evidence cautiously, add request-ID propagation to the component, validate parsing and retention, and state lower confidence for historical conclusions.",
              outcome:
                "Best defensive choice. It improves future evidence while remaining honest about current limitations.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume every same-second event belongs to the alert.",
              outcome:
                "Unsafe. Timestamp-only correlation can combine unrelated requests.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the proxy evidence because the application log is incomplete.",
              outcome:
                "Incorrect. Other sources remain useful when their limitations are documented.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Web Logs, Alerts, and Defensive Investigation Checklist"
          items={[
            "I preserve fictional alert IDs, rule versions, source event IDs, raw records, timestamps, and retention status.",
            "I validate parsing and normalization before relying on mapped fields.",
            "I normalize time zones and document clock, generation, batching, and ingestion limitations.",
            "I correlate request, trace, session, account, device, object, transaction, route, and business identifiers.",
            "I separate observed events, normalized meaning, detection, control result, user action, data state, and business impact.",
            "I test expected activity, user error, application defects, false positives, blocked suspicious activity, false negatives, and evidence gaps.",
            "I use proportional containment and avoid broad account, source, route, or application actions without evidence.",
            "I tune detections with authorization, outcome, identity, asset, scope, and business context rather than simple suppression.",
            "I validate legitimate use, denied conditions, data state, detection behavior, monitoring, rollback, and closure criteria.",
            "I use only fictional evidence and never expose or access real logs, sessions, accounts, databases, routes, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.7 Mini Quiz: Web Logs, Alerts, and Defensive Investigation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Web Investigation Report using at least forty-four alert, raw-event, parser, normalized, enrichment, proxy, server, application, API, identity, session, database, browser, device, user, business, remediation, validation, monitoring, detection-tuning, and closure records. Include a source inventory, field map, normalized timeline, correlation table, findings, confidence, alternatives, evidence gaps, owners, positive tests, negative tests, rollback, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, accounts, sessions, devices, routes, objects, transactions, logs, alerts, users, and organizations.",
            "Include one true positive blocked case, one expected activity case, one user-error case, one application-defect case, one false positive, and one evidence-incomplete case.",
            "Keep alert severity, request occurrence, control decision, user intent, data state, and business impact separate.",
            "Do not include real logs, identifiers, tokens, source addresses, screenshots, database records, or private business information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A fictional alert is a prioritized analytic starting point, not proof of compromise or impact.",
            "Each log source sees one layer of the web workflow and carries its own limitations.",
            "Reliable correlation uses shared identifiers, normalized time, trusted identity and object context, and downstream state.",
            "Request attempts, control decisions, user actions, database changes, and business impact require separate evidence.",
            "Detection tuning should add outcome and business context instead of hiding noisy activity.",
            "Strong closure validates source health, timeline, identities, data and business state, remediation, detection behavior, monitoring, gaps, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I8
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