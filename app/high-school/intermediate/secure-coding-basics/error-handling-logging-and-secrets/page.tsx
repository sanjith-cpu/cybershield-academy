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
const modulePath = `${trackPath}/secure-coding-basics`;
const previousLesson = `${modulePath}/authentication-session-and-access-control-code`;
const nextLesson = `${modulePath}/dependency-build-and-configuration-security`;

const objectives = [
  "Explain how fictional user-facing errors, protected diagnostics, structured security events, metrics, traces, audit records, alerts, and case evidence serve different audiences.",
  "Design fictional safe error contracts that support users and defenders without exposing secrets, private records, account existence, internal paths, stack details, dependency versions, or policy logic.",
  "Create fictional structured logging requirements with useful request, identity, object, action, decision, result, timing, environment, and owner context while minimizing sensitive data.",
  "Review fictional secrets and service identities for managed storage, least privilege, environment separation, rotation, revocation, short-lived access, monitoring, and retirement.",
  "Produce a professional fictional Error Handling, Logging, and Secrets Review with findings, evidence, owners, validation, rollback, monitoring, residual risk, and closure criteria."
];
const vocabulary = [
  [
    "Safe error",
    "A fictional user-facing response that explains the next step without exposing unnecessary internal, security, account, object, or dependency details."
  ],
  [
    "Diagnostic detail",
    "Fictional technical context stored in protected systems for authorized developers and operators rather than returned publicly."
  ],
  [
    "Structured event",
    "A fictional machine-readable record with named fields such as time, request ID, identity, route, object category, decision, reason, result, and environment."
  ],
  [
    "Correlation ID",
    "A fictional identifier connecting proxy, application, identity, database, integration, alert, and case records for one request or workflow."
  ],
  [
    "Redaction",
    "A fictional process that removes or masks secrets, private content, or unnecessary personal data before storage, display, transfer, or support use."
  ],
  [
    "Secret",
    "A fictional credential or cryptographic value such as an API key, private key, signing key, database credential, or webhook secret."
  ],
  [
    "Service identity",
    "A fictional nonhuman identity used by an application, job, integration, deployment, or monitoring service."
  ],
  [
    "Secret rotation",
    "A fictional controlled process that issues a replacement, updates consumers, validates service, revokes the old value, monitors, and preserves rollback."
  ]
];
const errorLayers = [
  {
    "title": "Browser and user interface",
    "summary": "Help the fictional user correct input, sign in again, retry later, contact support, or return to a safe page.",
    "details": [
      [
        "Safe pattern",
        "Use a clear message, stable error code, correlation reference, accessible next step, and no secret, stack, path, role, object, or dependency detail."
      ],
      [
        "Evidence",
        "User-visible response, status category, request reference, accessibility review, and support instruction."
      ],
      [
        "Failure mode",
        "The page reveals framework traces, database errors, object existence, account existence, policy rules, or private fields."
      ]
    ]
  },
  {
    "title": "API response",
    "summary": "Return a fictional predictable error contract to approved clients without leaking implementation details.",
    "details": [
      [
        "Safe pattern",
        "Use stable categories, safe field-level feedback, correct status, request ID, and minimal retry guidance."
      ],
      [
        "Evidence",
        "Response schema, status, request ID, client behavior, and negative tests."
      ],
      [
        "Failure mode",
        "Raw exception messages, query text, file paths, dependency versions, headers, or secret values reach the client."
      ]
    ]
  },
  {
    "title": "Protected application diagnostic",
    "summary": "Give fictional authorized engineers enough context to diagnose the exact component and operation.",
    "details": [
      [
        "Safe pattern",
        "Record bounded exception category, component, operation, deployment, request and trace IDs, and approved state in protected internal logs."
      ],
      [
        "Evidence",
        "Structured event, trace, build version, component, operation, exception category, and access review."
      ],
      [
        "Failure mode",
        "Full request bodies, tokens, passwords, private records, environment values, or unnecessary stack content are stored broadly."
      ]
    ]
  },
  {
    "title": "Security decision",
    "summary": "Explain why fictional validation, authentication, authorization, session, file, destination, or policy checks allowed or denied an action.",
    "details": [
      [
        "Safe pattern",
        "Record identity category, request, object category, action, policy version, decision, reason code, and result."
      ],
      [
        "Evidence",
        "Decision event, account or service identity, route, object category, policy, reason, and downstream state."
      ],
      [
        "Failure mode",
        "A generic failure prevents defenders from separating invalid, unauthorized, expired, duplicate, rate-limited, and system-error cases."
      ]
    ]
  },
  {
    "title": "Operational metric",
    "summary": "Measure fictional health, volume, latency, failures, retries, queues, dependencies, and capacity without retaining private content.",
    "details": [
      [
        "Safe pattern",
        "Use aggregate counts, bounded labels, approved dimensions, thresholds, baselines, and owner routing."
      ],
      [
        "Evidence",
        "Metric name, labels, threshold, dashboard, alert, owner, and historical baseline."
      ],
      [
        "Failure mode",
        "High-cardinality user values or private content become metric labels and create cost, privacy, or reliability problems."
      ]
    ]
  },
  {
    "title": "Distributed trace",
    "summary": "Follow fictional timing and dependency behavior across services.",
    "details": [
      [
        "Safe pattern",
        "Use trace and span IDs, component, operation, timing, result, approved attributes, sampling, retention, and access control."
      ],
      [
        "Evidence",
        "Trace ID, spans, service categories, durations, result, sampling rule, and reviewer access."
      ],
      [
        "Failure mode",
        "Headers, tokens, full payloads, private records, or secret-bearing environment values become trace attributes."
      ]
    ]
  },
  {
    "title": "Audit and business record",
    "summary": "Preserve fictional accountability for identity, access, export, payment, role, configuration, recovery, and secret changes.",
    "details": [
      [
        "Safe pattern",
        "Record actor, subject, action, before and after state, approval, request, transaction, time, owner, and required retention."
      ],
      [
        "Evidence",
        "Audit ID, actor, object, action, approvals, transaction, before and after state, and owner review."
      ],
      [
        "Failure mode",
        "A technical request exists, but no durable business record proves whether the high-impact action completed."
      ]
    ]
  },
  {
    "title": "Alert and case",
    "summary": "Prioritize fictional evidence and preserve analyst conclusions, alternatives, tasks, findings, and closure.",
    "details": [
      [
        "Safe pattern",
        "Link source records, context, confidence, alternatives, impact, owner, actions, gaps, validation, and final outcome."
      ],
      [
        "Evidence",
        "Alert, case timeline, linked events, analyst notes, owner, remediation, validation, and approval."
      ],
      [
        "Failure mode",
        "A severity label is treated as proof of compromise without control, data, user, and business correlation."
      ]
    ]
  }
];
const loggingFields = [
  {
    "title": "Time, environment, and deployment",
    "summary": "Place the fictional event in the correct runtime and compare behavior across releases.",
    "details": [
      [
        "Include",
        "Event time, normalized time zone, environment, application, service, deployment version, and broad region category."
      ],
      [
        "Avoid",
        "Ambiguous local time, uncontrolled host strings, exact personal location, or missing environment."
      ],
      [
        "Validation",
        "Compare source time, normalized time, deployment version, environment, and a known test event."
      ]
    ]
  },
  {
    "title": "Request and trace",
    "summary": "Correlate fictional edge, application, database, integration, and case records.",
    "details": [
      [
        "Include",
        "Request ID, trace ID, parent span, bounded route category, method, and operation name."
      ],
      [
        "Avoid",
        "Full URLs containing private query values, unbounded paths, raw headers, and secret-bearing parameters."
      ],
      [
        "Validation",
        "Follow one supplied request across proxy, application, database, alert, and case records."
      ]
    ]
  },
  {
    "title": "Identity and session",
    "summary": "Describe the recognized fictional identity and current trust state.",
    "details": [
      [
        "Include",
        "Account or service ID category, role, tenant, session reference, factor category, and account state where required."
      ],
      [
        "Avoid",
        "Passwords, recovery answers, complete tokens, cookie values, factor secrets, and unnecessary personal details."
      ],
      [
        "Validation",
        "Confirm identity correlation and verify protected values are absent from every evidence path."
      ]
    ]
  },
  {
    "title": "Object and action",
    "summary": "Explain the fictional protected resource and requested operation without storing sensitive contents.",
    "details": [
      [
        "Include",
        "Object category, opaque reference, tenant, action, workflow state, and field category."
      ],
      [
        "Avoid",
        "Student notes, document content, message bodies, export rows, or secret configuration values."
      ],
      [
        "Validation",
        "Confirm defenders can identify the object and action while private content remains excluded."
      ]
    ]
  },
  {
    "title": "Decision and reason",
    "summary": "Separate fictional allowed, denied, invalid, expired, duplicate, rate-limited, and system-error outcomes.",
    "details": [
      [
        "Include",
        "Validation, identity, authorization, file, destination, secret, or policy decision with stable reason code."
      ],
      [
        "Avoid",
        "Unbounded exception text, policy source code, internal rule expressions, and user-controlled reason labels."
      ],
      [
        "Validation",
        "Run approved and denied tests and compare expected decisions and reason codes."
      ]
    ]
  },
  {
    "title": "Result and downstream state",
    "summary": "Determine whether a fictional request produced data or business impact.",
    "details": [
      [
        "Include",
        "Response category, database operation, transaction state, file job, queue result, and business reference."
      ],
      [
        "Avoid",
        "Assuming a request, alert, click, or status code proves the final result."
      ],
      [
        "Validation",
        "Correlate application evidence with database, file, transaction, and business-system records."
      ]
    ]
  },
  {
    "title": "Performance and reliability",
    "summary": "Support fictional reliability, capacity, abuse, and dependency investigation.",
    "details": [
      [
        "Include",
        "Duration, retry count, timeout category, dependency result, queue time, and resource-limit result."
      ],
      [
        "Avoid",
        "High-cardinality private values, arbitrary user labels, or raw payloads in metrics."
      ],
      [
        "Validation",
        "Compare baseline, slow request, timeout, retry, dependency failure, and recovery tests."
      ]
    ]
  },
  {
    "title": "Ownership and governance",
    "summary": "Make the fictional event actionable and govern access, retention, review, and closure.",
    "details": [
      [
        "Include",
        "Source owner, alert route, case ID, retention class, sensitivity, and remediation ticket where appropriate."
      ],
      [
        "Avoid",
        "Unowned events, indefinite retention, broad access, and case notes containing unnecessary private data."
      ],
      [
        "Validation",
        "Confirm routing, access, retention, owner response, case linkage, and review date."
      ]
    ]
  }
];
const redactionRules = [
  {
    "title": "Passwords and recovery evidence",
    "summary": "Never store fictional password values, temporary passwords, recovery answers, or complete recovery evidence.",
    "details": [
      [
        "Safe alternative",
        "Record factor category, result, policy, attempt count, and reason code."
      ],
      [
        "Validation",
        "Use inert placeholders and verify the original value is absent from responses, logs, traces, alerts, support views, and exports."
      ],
      [
        "Owner",
        "Identity and Application Teams."
      ]
    ]
  },
  {
    "title": "Tokens, cookies, and API keys",
    "summary": "Never store complete fictional bearer tokens, session cookies, refresh tokens, API keys, or webhook secrets.",
    "details": [
      [
        "Safe alternative",
        "Use a nonreversible short fingerprint, identifier category, issuer, audience, scope, issue time, and result."
      ],
      [
        "Validation",
        "Search approved test records for placeholder secret values and confirm only safe references remain."
      ],
      [
        "Owner",
        "Application and Platform Teams."
      ]
    ]
  },
  {
    "title": "Private user content",
    "summary": "Exclude fictional student notes, messages, uploaded document content, narratives, and complete report rows.",
    "details": [
      [
        "Safe alternative",
        "Record object category, opaque ID, size, field category, classification, and decision."
      ],
      [
        "Validation",
        "Confirm the event supports investigation without reproducing the private content."
      ],
      [
        "Owner",
        "Application and Privacy Teams."
      ]
    ]
  },
  {
    "title": "Personal identifiers",
    "summary": "Limit fictional names, addresses, phone numbers, device details, and exact location to an approved need.",
    "details": [
      [
        "Safe alternative",
        "Use account IDs, tenant, broad device category, and privacy-reviewed enrichment."
      ],
      [
        "Validation",
        "Compare event fields with minimization requirements, access roles, and retention."
      ],
      [
        "Owner",
        "Privacy and Security Operations."
      ]
    ]
  },
  {
    "title": "Financial or regulated fields",
    "summary": "Do not log fictional complete payment, identity, health, or regulated values.",
    "details": [
      [
        "Safe alternative",
        "Record transaction ID, field category, validation result, approval state, and masked reference where approved."
      ],
      [
        "Validation",
        "Review positive, denied, failure, and exception events for forbidden fields."
      ],
      [
        "Owner",
        "Business Application and Compliance Teams."
      ]
    ]
  },
  {
    "title": "Source, query, and configuration content",
    "summary": "Avoid fictional full queries, templates, source snippets, file paths, and internal expressions in broad logs.",
    "details": [
      [
        "Safe alternative",
        "Record operation name, code-location category, error category, build version, and request or trace ID."
      ],
      [
        "Validation",
        "Trigger supplied safe failures and confirm public and standard logs contain bounded metadata only."
      ],
      [
        "Owner",
        "Engineering Teams."
      ]
    ]
  },
  {
    "title": "Secrets in exceptions",
    "summary": "Filter fictional secret-bearing headers, connection strings, environment variables, and dependency messages.",
    "details": [
      [
        "Safe alternative",
        "Store secret-name category, provider, operation, result, and approved diagnostic code."
      ],
      [
        "Validation",
        "Use inert placeholders and confirm exception, trace, alert, and support systems redact them."
      ],
      [
        "Owner",
        "Application and Platform Teams."
      ]
    ]
  },
  {
    "title": "Cases, screenshots, and exports",
    "summary": "Apply fictional privacy and secret rules to analyst comments, screenshots, copied logs, reports, tickets, and portfolios.",
    "details": [
      [
        "Safe alternative",
        "Use fictionalized examples, bounded fields, evidence references, and restricted attachments where required."
      ],
      [
        "Validation",
        "Review the final case and export for credentials, private content, unnecessary identifiers, and real-system details."
      ],
      [
        "Owner",
        "Security Operations and Case Owners."
      ]
    ]
  }
];
const secretLifecycle = [
  {
    "title": "1. Define the need",
    "summary": "Confirm the fictional workload requires a secret and cannot use a safer platform identity mechanism.",
    "details": [
      [
        "Controls",
        "Document purpose, owner, consumer, target, environment, scope, lifetime, rotation, recovery, and retirement."
      ],
      [
        "Evidence",
        "Secret request, architecture decision, service owner, target resource, and approval."
      ],
      [
        "Failure mode",
        "A shared long-lived secret is created for convenience without clear scope or ownership."
      ]
    ]
  },
  {
    "title": "2. Generate or issue",
    "summary": "Create the fictional secret through an approved managed system with unique environment scope.",
    "details": [
      [
        "Controls",
        "Managed generation, separate development and production values, no human reuse, secure delivery, and audit event."
      ],
      [
        "Evidence",
        "Secret identifier, version, environment, owner, creation event, and consumers."
      ],
      [
        "Failure mode",
        "A developer invents a reusable value and sends it through chat, email, source, or a ticket."
      ]
    ]
  },
  {
    "title": "3. Store",
    "summary": "Keep the fictional value in managed secret storage rather than source code, images, local files, logs, or documents.",
    "details": [
      [
        "Controls",
        "Encryption, access policy, versioning, backup, audit logging, break-glass governance, and restricted administration."
      ],
      [
        "Evidence",
        "Secret-manager record, access policy, key ownership, version, backup, and administrator review."
      ],
      [
        "Failure mode",
        "The value appears in repository history, build arguments, environment dumps, support bundles, or shared files."
      ]
    ]
  },
  {
    "title": "4. Access",
    "summary": "Allow only the fictional named workload to retrieve the required secret for the approved purpose.",
    "details": [
      [
        "Controls",
        "Named service identity, exact secret permission, environment boundary, short-lived platform credentials, and access logging."
      ],
      [
        "Evidence",
        "Service identity, policy, secret ID, access event, environment, purpose, and result."
      ],
      [
        "Failure mode",
        "One broad deployment identity can retrieve every secret across applications and environments."
      ]
    ]
  },
  {
    "title": "5. Use",
    "summary": "Use the fictional secret only with the intended target and keep it out of arguments, errors, logs, traces, and responses.",
    "details": [
      [
        "Controls",
        "Safe client library, redaction, bounded diagnostics, target validation, and least-privileged downstream permission."
      ],
      [
        "Evidence",
        "Application configuration, target identity, operation, redacted logs, and downstream access review."
      ],
      [
        "Failure mode",
        "The secret is printed, sent to the wrong destination, or grants excessive target permissions."
      ]
    ]
  },
  {
    "title": "6. Rotate",
    "summary": "Replace the fictional value on schedule or after risk without breaking legitimate service.",
    "details": [
      [
        "Controls",
        "Issue new version, update consumers, use a controlled transition, test, monitor, revoke old version, and retain rollback."
      ],
      [
        "Evidence",
        "Rotation ticket, versions, consumer update, validation, old-version denial, monitoring, and approval."
      ],
      [
        "Failure mode",
        "The old value remains valid indefinitely or an unknown consumer fails after rotation."
      ]
    ]
  },
  {
    "title": "7. Revoke",
    "summary": "End fictional access promptly after exposure concern, consumer retirement, ownership change, or closure.",
    "details": [
      [
        "Controls",
        "Immediate disablement, consumer isolation, investigation, replacement, notification, and target verification."
      ],
      [
        "Evidence",
        "Revocation event, affected consumers, access denial, replacement status, case, and owner review."
      ],
      [
        "Failure mode",
        "The value is removed from one configuration but remains valid at the target service."
      ]
    ]
  },
  {
    "title": "8. Retire and verify",
    "summary": "Remove the fictional secret, permissions, copies, consumers, alerts, and references when no longer required.",
    "details": [
      [
        "Controls",
        "Inventory cleanup, repository and image review, policy removal, target denial, evidence retention, and sign-off."
      ],
      [
        "Evidence",
        "Retirement record, policy removal, target denial, inventory update, monitoring result, and approval."
      ],
      [
        "Failure mode",
        "Unused values, service identities, permissions, and alerts remain active without ownership."
      ]
    ]
  }
];
const serviceControls = [
  {
    "title": "Named identity per workload",
    "summary": "Give each fictional application, job, integration, and deployment process a distinct identity.",
    "details": [
      [
        "Risk",
        "Shared identities prevent attribution and create broad blast radius."
      ],
      [
        "Validation",
        "Each supplied workload uses its own identity and unrelated workloads are denied."
      ],
      [
        "Owner",
        "Platform Engineering."
      ]
    ]
  },
  {
    "title": "Exact audience and scope",
    "summary": "Limit fictional identity use to the intended service, environment, operations, and resources.",
    "details": [
      [
        "Risk",
        "A valid credential can be replayed against an unintended target or used for excessive actions."
      ],
      [
        "Validation",
        "Approved target and action succeed; wrong audience, environment, resource, and action fail."
      ],
      [
        "Owner",
        "Application and Platform Teams."
      ]
    ]
  },
  {
    "title": "Short-lived credentials",
    "summary": "Prefer fictional platform-issued temporary credentials over static long-lived values where supported.",
    "details": [
      [
        "Risk",
        "Long-lived values remain useful after accidental exposure."
      ],
      [
        "Validation",
        "Confirm expiration, renewal, revocation, workload identity, and old-credential denial."
      ],
      [
        "Owner",
        "Platform Engineering."
      ]
    ]
  },
  {
    "title": "Least-privileged downstream access",
    "summary": "Grant only the fictional reads, writes, queues, files, secrets, or configuration actions required.",
    "details": [
      [
        "Risk",
        "A compromised or defective service can affect unrelated data and systems."
      ],
      [
        "Validation",
        "Required operations pass while unrelated objects and actions are denied."
      ],
      [
        "Owner",
        "Data, Infrastructure, and Application Teams."
      ]
    ]
  },
  {
    "title": "Environment separation",
    "summary": "Use different fictional identities, secrets, targets, and policies for development, test, staging, production, and recovery.",
    "details": [
      [
        "Risk",
        "A lower-trust environment can access production or reuse production secrets."
      ],
      [
        "Validation",
        "Cross-environment access fails and inventories show no shared production value."
      ],
      [
        "Owner",
        "Platform Engineering."
      ]
    ]
  },
  {
    "title": "Access logging and review",
    "summary": "Record fictional identity, secret or resource, target, action, time, environment, result, and owner.",
    "details": [
      [
        "Risk",
        "Unusual service access remains unattributed or unnoticed."
      ],
      [
        "Validation",
        "Approved test access appears with correct context and routes to the accountable owner."
      ],
      [
        "Owner",
        "Platform and Security Operations."
      ]
    ]
  },
  {
    "title": "Rotation and emergency revocation",
    "summary": "Maintain fictional tested procedures for normal rotation and urgent access removal.",
    "details": [
      [
        "Risk",
        "Teams delay revocation because consumers are unknown or outage risk is unclear."
      ],
      [
        "Validation",
        "A safe rotation updates consumers, denies the old value, preserves health, and demonstrates rollback."
      ],
      [
        "Owner",
        "Platform and Application Teams."
      ]
    ]
  },
  {
    "title": "Retirement",
    "summary": "Remove fictional identity permissions, values, consumers, alerts, documents, and inventory when the workload ends.",
    "details": [
      [
        "Risk",
        "Dormant service identities and secrets remain valid without active ownership."
      ],
      [
        "Validation",
        "The retired identity cannot access targets and no deployment references remain."
      ],
      [
        "Owner",
        "Platform Engineering."
      ]
    ]
  }
];
const qualityChecks = [
  {
    "title": "Complete",
    "summary": "Do fictional critical routes, background jobs, errors, and privileged actions produce required records?",
    "details": [
      [
        "Warning",
        "Some routes, retries, failures, or business actions have no usable evidence."
      ],
      [
        "Improvement",
        "Define coverage, event schemas, source inventory, and automated source-health tests."
      ],
      [
        "Proof",
        "Known test events appear from every critical source with expected fields."
      ]
    ]
  },
  {
    "title": "Correct",
    "summary": "Do fictional fields accurately describe identity, route, object, decision, result, time, and environment?",
    "details": [
      [
        "Warning",
        "Parser mappings, time zones, reason codes, or tenant fields are wrong or ambiguous."
      ],
      [
        "Improvement",
        "Compare raw and normalized events and validate mappings after changes."
      ],
      [
        "Proof",
        "Expected source values match normalized values and case display."
      ]
    ]
  },
  {
    "title": "Correlatable",
    "summary": "Can fictional request, trace, session, object, transaction, job, and case records be joined safely?",
    "details": [
      [
        "Warning",
        "Each source uses unrelated identifiers and analysts depend on time alone."
      ],
      [
        "Improvement",
        "Propagate approved correlation IDs and safe cross-system references."
      ],
      [
        "Proof",
        "One supplied workflow can be followed from edge to business outcome."
      ]
    ]
  },
  {
    "title": "Minimal",
    "summary": "Does the fictional event exclude secrets, private content, unnecessary identifiers, and unbounded values?",
    "details": [
      [
        "Warning",
        "Logs reproduce request bodies, tokens, notes, files, or personal details."
      ],
      [
        "Improvement",
        "Use approved schemas, redaction, bounded fields, fingerprints, and privacy review."
      ],
      [
        "Proof",
        "Inert placeholders and private sample content are absent from all evidence paths."
      ]
    ]
  },
  {
    "title": "Actionable",
    "summary": "Can a fictional owner understand the control, failure, object category, impact, and next action?",
    "details": [
      [
        "Warning",
        "Events contain only generic statements such as access failed or server error."
      ],
      [
        "Improvement",
        "Add stable decision, reason, component, operation, owner, and result fields."
      ],
      [
        "Proof",
        "The event routes correctly and supports a repeatable response step."
      ]
    ]
  },
  {
    "title": "Protected",
    "summary": "Are fictional logs, traces, audits, alerts, and cases access controlled, retained properly, and safely rendered?",
    "details": [
      [
        "Warning",
        "Broad users can read sensitive evidence or untrusted values render as active content."
      ],
      [
        "Improvement",
        "Apply least privilege, encryption, safe viewers, retention, export control, and access review."
      ],
      [
        "Proof",
        "Unauthorized access fails and inert values remain visible text."
      ]
    ]
  },
  {
    "title": "Available",
    "summary": "Are fictional sources timely, healthy, retained, searchable, and resilient during application failure?",
    "details": [
      [
        "Warning",
        "A source silently stops, expires too quickly, or depends only on the failed service."
      ],
      [
        "Improvement",
        "Monitor delay, volume, parser errors, queues, retention, and alternate evidence."
      ],
      [
        "Proof",
        "Source-loss and delayed-delivery tests create owned alerts."
      ]
    ]
  },
  {
    "title": "Owned",
    "summary": "Does every fictional source, schema, alert, secret, retention class, and remediation path have an accountable team?",
    "details": [
      [
        "Warning",
        "Events and values remain active without review, tuning, rotation, maintenance, or closure."
      ],
      [
        "Improvement",
        "Assign owners, review dates, service expectations, rotation schedules, and escalation."
      ],
      [
        "Proof",
        "Owner acknowledgments, completed reviews, and overdue escalation are recorded."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "08:00:00",
    "source": "Deployment",
    "event": "A fictional reporting service starts with a database credential retrieved from managed secret storage.",
    "meaning": "The production value is not embedded in source or the image."
  },
  {
    "time": "08:00:01",
    "source": "Secret access",
    "event": "The named reporting-service identity retrieves secret version 12 for the production database.",
    "meaning": "The workload, environment, secret version, and target are recorded."
  },
  {
    "time": "09:18:00",
    "source": "API request",
    "event": "A fictional teacher submits an invalid report filter to the modern endpoint.",
    "meaning": "A predictable validation error should occur without exposing internal details."
  },
  {
    "time": "09:18:01",
    "source": "User response",
    "event": "The API returns a safe invalid-filter message, stable code, and request reference.",
    "meaning": "The user receives useful guidance without query or stack information."
  },
  {
    "time": "09:18:01",
    "source": "Structured event",
    "event": "The application records request, identity category, route, field category, decision, reason, and no report content.",
    "meaning": "Defenders receive actionable minimized evidence."
  },
  {
    "time": "09:24:00",
    "source": "Legacy failure",
    "event": "A fictional legacy endpoint returns an internal path, framework version, and inert placeholder credential.",
    "meaning": "A confirmed error-handling and secret-exposure weakness exists in the safe test environment."
  },
  {
    "time": "09:25:00",
    "source": "Support evidence",
    "event": "The same placeholder appears in the exception log and support export.",
    "meaning": "The exposure crosses browser, internal log, and exported evidence paths."
  },
  {
    "time": "09:28:00",
    "source": "Containment",
    "event": "The route is disabled, the fictional credential is revoked, and the support export is restricted.",
    "meaning": "Narrow containment removes the exposed path and invalidates the value."
  },
  {
    "time": "09:35:00",
    "source": "Rotation",
    "event": "Secret version 13 is issued, consumers are updated, health checks pass, and version 12 is denied.",
    "meaning": "Service continues with a replacement and the old value no longer works."
  },
  {
    "time": "09:45:00",
    "source": "Remediation",
    "event": "The legacy route adopts the standard safe error contract, protected diagnostics, structured fields, and redaction.",
    "meaning": "User and defender needs are separated and controlled."
  },
  {
    "time": "10:00:00",
    "source": "Positive test",
    "event": "An approved report succeeds and produces correlated application, database, and business records.",
    "meaning": "Legitimate workflow remains available."
  },
  {
    "time": "10:05:00",
    "source": "Negative test",
    "event": "Invalid filters, dependency failures, missing records, and authorization denials return safe responses and minimized events.",
    "meaning": "Several error classes behave as designed."
  },
  {
    "time": "10:10:00",
    "source": "Redaction test",
    "event": "Inert placeholder secrets and private values do not appear in responses, logs, traces, alerts, support views, or exports.",
    "meaning": "Reviewed evidence paths apply the redaction rules."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "Source delivery is healthy, no old-secret access succeeds, and no new verbose-error events appear.",
    "meaning": "Short-term operational evidence supports remediation."
  },
  {
    "time": "Day 30",
    "source": "Owner review",
    "event": "The owner confirms rotation readiness, retention, log access, support export controls, and source-health alerts.",
    "meaning": "Operational ownership continues after deployment."
  }
];
const commonMistakes = [
  "Returning fictional raw exceptions, stack traces, file paths, dependency versions, query text, policy detail, or secret values to users.",
  "Using one generic error for every validation, authentication, authorization, missing-object, rate-limit, dependency, and internal failure.",
  "Logging full fictional request bodies, uploaded content, student notes, messages, exports, passwords, tokens, cookies, or recovery evidence.",
  "Assuming internal logs, traces, support bundles, tickets, screenshots, and case exports do not need privacy or secret controls.",
  "Building log messages through unbounded strings instead of structured bounded fields and safe rendering.",
  "Recording only the request without the control decision, downstream state, transaction, or business outcome.",
  "Creating alerts without source-health monitoring, owner routing, retention, tuning, or closure criteria.",
  "Storing fictional secrets in source, repository history, images, local files, build arguments, chat, email, or tickets.",
  "Using one shared overprivileged service identity across applications, environments, and targets.",
  "Rotating a secret without identifying consumers, validating service, revoking the old value, monitoring, and preserving rollback.",
  "Deleting a secret reference from code while leaving the value valid at the target.",
  "Publishing real logs, credentials, traces, source paths, service names, account data, or private evidence in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest fictional user-facing error response?",
    "choices": [
      "A clear safe message, stable error code, request reference, and next step without internal or sensitive details.",
      "The complete stack trace.",
      "The database query and connection value.",
      "The user’s full request body."
    ],
    "answer": 0,
    "explanation": "Users need useful guidance while protected diagnostics remain internal."
  },
  {
    "question": "Why are structured fictional events stronger than free-form log strings?",
    "choices": [
      "They support consistent fields, correlation, validation, safe rendering, searching, ownership, and controlled redaction.",
      "They automatically authorize every action.",
      "They remove the need for retention.",
      "They prove business impact by themselves."
    ],
    "answer": 0,
    "explanation": "Structured fields improve evidence quality and reduce ambiguity and unsafe interpretation."
  },
  {
    "question": "Which fictional value should never appear completely in standard logs?",
    "choices": [
      "A password, bearer token, session cookie, API key, recovery value, or private signing key.",
      "A stable reason code.",
      "A request ID.",
      "A bounded route category."
    ],
    "answer": 0,
    "explanation": "Secrets should be excluded and replaced with safe metadata or nonreversible references."
  },
  {
    "question": "What is the strongest fictional service-identity design?",
    "choices": [
      "A named identity per workload with exact audience, environment, resource, action, short lifetime, logging, and retirement.",
      "One shared administrator credential for every service.",
      "A production key reused in development.",
      "An unowned identity with no review."
    ],
    "answer": 0,
    "explanation": "Distinct least-privileged identities improve scope, attribution, rotation, and revocation."
  },
  {
    "question": "What should fictional secret rotation include?",
    "choices": [
      "Issue a replacement, update consumers, validate health, revoke the old version, monitor, retain rollback, and obtain owner approval.",
      "Change the value without testing consumers.",
      "Keep the old value active indefinitely.",
      "Post the replacement in a team message."
    ],
    "answer": 0,
    "explanation": "Rotation is a controlled lifecycle process rather than only generating a new value."
  },
  {
    "question": "Why is fictional source-health monitoring required?",
    "choices": [
      "A missing or delayed evidence source can create false confidence and weaken investigations.",
      "It makes every alert high severity.",
      "It replaces application testing.",
      "It proves user intent."
    ],
    "answer": 0,
    "explanation": "Defenders need proof that expected sources are complete, timely, and correctly parsed."
  },
  {
    "question": "Which closure plan is strongest after a fictional verbose-error and secret-exposure finding?",
    "choices": [
      "Contain the route, revoke and rotate the value, remediate every response and evidence path, test redaction and legitimate workflows, verify old-value denial, monitor sources, preserve rollback, document residual risk, and obtain owner approval.",
      "Close after deleting one log line.",
      "Close after hiding the error page.",
      "Close because the value was only in a support export."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies containment, secret lifecycle, all evidence paths, operations, and ownership."
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
        Correlated Investigation Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Error and Secret from Exposure to Closure
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

export default function ErrorHandlingLoggingAndSecretsPage() {
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
              Module I9
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.5 Error Handling, Logging, and Secrets
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional developers provide safe errors, protected
            diagnostics, structured evidence, secret management, service
            identities, source-health monitoring, and defensible closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I9: Secure Coding Basics"
          lessonTitle="Error Handling, Logging, and Secrets"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional user errors, diagnostics, decisions, metrics, traces, audits, alerts, and cases serve different purposes.",
            "I will preserve useful evidence without storing secrets, full tokens, private content, unnecessary personal data, or unsafe unbounded values.",
            "I will review every place fictional errors and evidence are displayed, copied, exported, retained, and shared.",
            "I will treat secret creation, storage, access, use, rotation, revocation, and retirement as one controlled lifecycle.",
            "I will use only supplied fictional evidence and never publish real credentials, logs, traces, source paths, account data, or private organizational details.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Error Can Help the User Without Exposing the System"
        >
          <p className="leading-8">
            A fictional user needs to know whether to correct a field, sign in
            again, retry later, or contact support. A developer needs the
            component and exception category. A defender needs the request,
            identity, object, decision, and downstream state. A business owner
            may need the transaction outcome. Secure code gives each audience
            the minimum appropriate information and keeps secrets out of every
            evidence path.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak handling
              </p>
              <p className="mt-2 leading-7">
                Return the fictional database exception to the browser and copy
                the complete request, token, and stack trace into every log.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong handling
              </p>
              <p className="mt-2 leading-7">
                Give the user a safe response and request reference while
                storing bounded structured diagnostics, decisions, and outcomes
                in protected systems with redaction, ownership, and retention.
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
          title="Evidence Systems Can Become a Second Sensitive Application"
        >
          <p className="leading-8">
            Fictional logs, traces, alerts, support exports, screenshots, case
            notes, and tickets often collect data from many applications and
            may be retained longer or accessed more broadly. If they contain
            secrets, private records, raw user content, or unsafe rendering, the
            evidence system creates a new exposure. Secure coding treats
            evidence as protected data with exact purpose, schema, access,
            retention, safe display, and deletion requirements.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Error and Evidence Layers"
          title="Eight Different Records for Users, Engineers, and Defenders"
          items={errorLayers}
        />

        <DetailSection
          eyebrow="Structured Logging"
          title="Eight Field Groups for Useful, Minimal Evidence"
          items={loggingFields}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Error–Evidence–Secret–Outcome Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["User response", "What safe fictional message, code, request reference, and next step does the user need?"],
              ["Diagnostic", "Which fictional component, operation, exception category, and deployment context do authorized engineers need?"],
              ["Decision", "Which fictional validation, identity, authorization, file, destination, or policy result explains the control?"],
              ["Secret boundary", "Could a credential, token, cookie, key, private value, or internal detail enter the response or evidence path?"],
              ["Outcome", "Which fictional database, file, transaction, service, user, and business records prove the final effect?"],
              ["Ownership", "Who owns the fictional source, schema, alert, secret, remediation, rotation, retention, monitoring, and closure?"],
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

        <DetailSection
          eyebrow="Redaction and Minimization"
          title="Eight Categories That Need Explicit Protection"
          items={redactionRules}
        />

        <DetailSection
          eyebrow="Secret Lifecycle"
          title="Eight Stages from Need to Retirement"
          items={secretLifecycle}
        />

        <DetailSection
          eyebrow="Service Identities"
          title="Eight Controls for Nonhuman Access"
          items={serviceControls}
        />

        <DetailSection
          eyebrow="Evidence Quality"
          title="Eight Tests for Reliable Security Logging"
          items={qualityChecks}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Error, Logging, and Secret Terms
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
          title="Fake Error, Logging, and Secrets Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook reporting environment."
          metrics={[
            {
              label: "Critical evidence sources",
              value: "32",
              note: "Fictional proxy, application, identity, database, queue, file, integration, deployment, audit, and business sources.",
            },
            {
              label: "Redaction coverage",
              value: "29",
              note: "Sources validated for passwords, tokens, cookies, keys, private content, personal data, and support exports.",
            },
            {
              label: "Open findings",
              value: "6",
              note: "Legacy verbose error, support export, shared identity, rotation gap, source-health rule, and overlong retention cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Error Exposes Diagnostic and Placeholder Secret Data"
          severity="High"
          time="09:24 AM"
          source="Fake Secure Coding Review Console"
          details="A fictional legacy report endpoint returns an internal path, framework version, database error category, and inert placeholder credential value to the browser. The same placeholder appears in the protected exception log and a broadly accessible support export in the supplied safe test environment."
          recommendation="Disable the route, restrict the support export, revoke and rotate the fictional value, inventory every evidence path and consumer, implement the standard safe error contract and redacted diagnostics, validate legitimate and failure workflows, verify old-value denial, monitor source health, retain rollback, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Error and Secret Investigation Timeline"
          logs={[
            "08:00:00 DEPLOY service='reporting' secret_source='managed_store'",
            "08:00:01 SECRET_ACCESS identity='reporting-service' version='12' target='production-db'",
            "09:18:00 REQUEST route='modern-report' filter='invalid'",
            "09:18:01 USER_ERROR code='REPORT_FILTER_INVALID' request_ref='req-4401'",
            "09:18:01 STRUCTURED_EVENT decision='deny' reason='invalid_filter' private_content='excluded'",
            "09:24:00 LEGACY_ERROR internal_path='exposed' framework_version='exposed' placeholder_secret='exposed'",
            "09:25:00 SUPPORT_EXPORT placeholder_secret='present'",
            "09:28:00 CONTAIN route='disabled' secret_v12='revoked' support_export='restricted'",
            "09:35:00 ROTATE secret_v13='issued' consumers='updated' health='pass' old_version='deny'",
            "09:45:00 REMEDIATE error_contract='safe' diagnostics='protected' redaction='enabled'",
            "10:00:00 POSITIVE_TEST approved_report='pass' correlation='complete'",
            "10:05:00 NEGATIVE_TEST validation='safe' dependency_failure='safe' authorization='safe'",
            "10:10:00 REDACTION_TEST responses='clean' logs='clean' traces='clean' exports='clean'",
            "DAY7 MONITOR source_health='normal' old_secret_access='0' verbose_errors='0'",
            "DAY30 REVIEW rotation_ready='true' retention='reviewed' access='reviewed'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Error and Secret Conclusion Is Best Supported?"
          evidence={[
            "The fictional modern endpoint returns a safe validation error and request reference.",
            "The modern structured event records decision context without report content or secrets.",
            "The fictional legacy endpoint exposes internal details and an inert placeholder credential in the safe test environment.",
            "The placeholder value also appears in an exception log and support export.",
            "The route is disabled, the support export is restricted, and secret version 12 is revoked.",
            "Secret version 13 is issued, approved consumers pass health checks, and the old version is denied.",
            "The remediated route uses safe responses, protected diagnostics, structured fields, and redaction.",
            "Positive, negative, redaction, source-health, and old-secret-denial tests pass in the reviewed scope.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional legacy path had confirmed verbose-error and multi-system secret-exposure weaknesses in the safe test environment; containment, rotation, remediation, and reviewed validation succeeded without evidence of real-system impact.",
            "The entire production environment was compromised.",
            "The support export was safe because it was internal.",
            "Deleting one log entry would fully close the finding.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports specific controlled test-environment weaknesses and successful remediation while preserving clear limits on impact."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Errors, Logs, and Secrets"
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
          title="Complete a Fictional Error, Logging, and Secrets Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Reporting Service
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review forty-six supplied fictional records covering user
                responses, API errors, diagnostics, decisions, metrics, traces,
                audits, alerts, cases, support exports, redaction, secrets,
                service identities, rotation, revocation, source health,
                retention, tests, monitoring, and ownership.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map user errors, diagnostics, decisions, metrics, traces, audits, alerts, cases, and business outcomes.</li>
                <li>Define structured fields, correlation, ownership, redaction, access, retention, and safe rendering.</li>
                <li>Inventory secrets, versions, consumers, service identities, targets, environments, scopes, rotation, and retirement.</li>
                <li>Identify every response, log, trace, support, ticket, screenshot, export, and portfolio exposure path.</li>
                <li>Design positive, negative, dependency-failure, redaction, source-health, rotation, old-value-denial, and rollback tests.</li>
                <li>Document findings, owners, remediation, evidence gaps, monitoring, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence and inert placeholder values. Do
            not inspect real logs, credentials, repositories, secret stores,
            support exports, accounts, source code, production systems, or
            private organizational data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Dependency Error Includes a Secret-Bearing Header"
          scenario="A fictional integration client includes request headers in its default exception text, and one header contains an inert placeholder API key."
          choices={[
            {
              label: "Choice A",
              response:
                "Prevent secret-bearing headers from entering exceptions, use bounded diagnostics, revoke and rotate the fictional value, review every response and evidence path, validate redaction and old-value denial, monitor, and document ownership.",
              outcome:
                "Best defensive choice. It addresses both the exposure path and the secret lifecycle.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the exception because only engineers can see the log.",
              outcome:
                "Unsafe. Logs, support systems, exports, and engineering access still require secret controls.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the one observed event and take no other action.",
              outcome:
                "Incomplete. The source behavior and exposed value would remain.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Shared Service Identity Simplifies Deployment"
          scenario="Three fictional applications in development and production use one service identity with broad database and secret access."
          choices={[
            {
              label: "Choice A",
              response:
                "Create named identities per workload and environment, reduce each scope to required resources and operations, rotate credentials, validate approved and denied access, update monitoring and inventory, preserve rollback, and retire the shared identity.",
              outcome:
                "Best defensive choice. Scope, attribution, environment separation, rotation, and revocation improve together.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the shared identity because deployment is easier.",
              outcome:
                "Risky. Convenience creates broad blast radius and weak attribution.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rename the identity without changing permissions.",
              outcome:
                "Insufficient. The underlying scope and lifecycle weaknesses remain.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Error Handling, Logging, and Secrets Checklist"
          items={[
            "I separate fictional user responses, diagnostics, decisions, metrics, traces, audits, alerts, cases, and business records.",
            "I return safe error categories, stable codes, request references, and next steps without internal or sensitive details.",
            "I use bounded structured fields for time, environment, request, identity, object, action, decision, result, timing, and ownership.",
            "I exclude or redact passwords, tokens, cookies, keys, recovery evidence, private content, personal data, and unsafe exception text.",
            "I correlate edge, application, identity, database, integration, transaction, alert, and case records.",
            "I monitor source completeness, correctness, delay, parser health, retention, access, safe rendering, and ownership.",
            "I manage secrets through approved need, generation, storage, access, use, rotation, revocation, retirement, and evidence.",
            "I use named least-privileged service identities with exact audience, environment, target, action, lifetime, logging, and review.",
            "I validate legitimate workflows, safe failures, redaction, source health, rotation, old-value denial, monitoring, rollback, and residual risk.",
            "I use only fictional evidence and never expose real credentials, logs, traces, source paths, accounts, systems, or private data.",
          ]}
        />

        <MiniQuiz
          title="I9.5 Mini Quiz: Error Handling, Logging, and Secrets"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Error Handling, Logging, and Secrets Review using at least forty-six user-response, API-error, diagnostic, security-decision, metric, trace, audit, alert, case, support-export, redaction, secret, service-identity, rotation, revocation, source-health, retention, test, monitoring, and owner records. Include an error-layer map, event schema, redaction matrix, secret inventory, service-identity review, findings, positive tests, negative tests, rotation and rollback plan, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, accounts, services, logs, errors, secrets, identifiers, tests, and organizations.",
            "For every event, define purpose, fields, exclusions, access, retention, safe rendering, owner, and correlation.",
            "For every secret, define purpose, owner, consumer, environment, scope, storage, access, rotation, revocation, monitoring, and retirement.",
            "Do not include real credentials, traces, source paths, logs, account data, secret-store records, support exports, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Safe error handling gives users useful guidance while keeping technical and sensitive details in protected evidence systems.",
            "Structured fictional events should be complete, correct, correlatable, minimal, actionable, protected, available, and owned.",
            "Logs, traces, alerts, cases, support exports, screenshots, tickets, and portfolios all require secret, privacy, retention, and safe-rendering controls.",
            "Secrets need controlled purpose, generation, storage, access, use, rotation, revocation, retirement, monitoring, and evidence.",
            "Named least-privileged service identities improve scope, attribution, environment separation, rotation, and incident response.",
            "Professional closure verifies safe responses, evidence quality, redaction, legitimate workflows, source health, old-value denial, monitoring, rollback, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I9
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