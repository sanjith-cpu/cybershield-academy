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
const previousLesson = `${modulePath}/secure-development-lifecycle-and-security-requirements`;
const nextLesson = `${modulePath}/secure-input-output-and-data-handling`;

const objectives = [
  "Explain how fictional threat modeling connects users, assets, data flows, trust boundaries, entry points, dependencies, privileges, misuse cases, and business impact.",
  "Distinguish attack surface, threat event, weakness, control, evidence, likelihood, impact, residual risk, assumption, and evidence gap.",
  "Build a fictional data-flow and trust-boundary model for a web application without probing, exploiting, or testing any real system.",
  "Prioritize fictional risks using evidence strength, exposure, control effectiveness, asset value, business consequence, and remediation ownership.",
  "Create a professional fictional Threat Model and Attack Surface Review with findings, owners, validation, monitoring, exceptions, and closure criteria."
];

const vocabulary = [
  [
    "Threat model",
    "A fictional structured review of assets, users, data, components, trust boundaries, entry points, dependencies, possible failures, controls, and residual risk."
  ],
  [
    "Attack surface",
    "The fictional collection of reachable interfaces, features, accounts, services, files, dependencies, trust transitions, and administrative paths that could affect security."
  ],
  [
    "Asset",
    "A fictional system, data set, identity, secret, service, workflow, decision, or business capability that requires protection."
  ],
  [
    "Trust boundary",
    "A fictional transition where data, identity, privilege, ownership, or control assumptions change and must be revalidated."
  ],
  [
    "Entry point",
    "A fictional interface through which data, requests, files, messages, users, services, or administrators interact with the system."
  ],
  [
    "Threat event",
    "A fictional condition or action that could cause loss of confidentiality, integrity, availability, privacy, accountability, or business trust."
  ],
  [
    "Misuse case",
    "A fictional scenario describing how a feature, role, workflow, dependency, or integration could be used incorrectly, abused, or misunderstood."
  ],
  [
    "Existing control",
    "A fictional design, code, configuration, process, monitoring, or governance measure already reducing the risk."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after existing and planned controls are considered."
  ],
  [
    "Assumption",
    "A fictional statement believed to be true for the model but requiring validation or periodic review."
  ],
  [
    "Evidence gap",
    "A fictional missing, stale, inconsistent, or unavailable record that limits confidence in the threat model or risk decision."
  ],
  [
    "Abuse case",
    "A fictional defensive test scenario that checks how the system behaves when inputs, identities, objects, timing, or workflows are used in an unsafe or unauthorized way."
  ]
];

const assets = [
  {
    "asset": "Student-support records",
    "value": "Fictional nonpublic summaries and case notes used by teachers and authorized support staff.",
    "securityNeeds": "Confidentiality, object authorization, tenant isolation, accurate updates, limited retention, controlled export, and auditability.",
    "failureImpact": "Unauthorized viewing, incorrect changes, privacy harm, loss of trust, or reporting errors.",
    "owner": "Student Services Technology"
  },
  {
    "asset": "Teacher and administrator identities",
    "value": "Fictional accounts, roles, factors, devices, sessions, permissions, and recovery state.",
    "securityNeeds": "Strong authentication, secure recovery, session rotation, revocation, least privilege, and access review.",
    "failureImpact": "Unauthorized actions, wrong-role access, account misuse, or inability to attribute activity.",
    "owner": "Identity and Access Team"
  },
  {
    "asset": "Application API",
    "value": "Fictional service enforcing input contracts, authorization, workflow rules, and data access.",
    "securityNeeds": "Schema validation, object authorization, safe operations, rate controls, error safety, logging, and service identity.",
    "failureImpact": "Data exposure, incorrect updates, service abuse, broken workflows, or unreliable evidence.",
    "owner": "Web Platform Team"
  },
  {
    "asset": "Reporting and export workflow",
    "value": "Fictional district reports, export jobs, files, approvals, and business records.",
    "securityNeeds": "Privileged access, reauthentication, dual approval, idempotency, secure files, expiry, and monitoring.",
    "failureImpact": "Unapproved data export, duplicate actions, incorrect reporting, or privacy and compliance impact.",
    "owner": "District Applications Team"
  },
  {
    "asset": "Announcement and messaging content",
    "value": "Fictional plain text, approved rich text, notifications, previews, and audience selections.",
    "securityNeeds": "Safe rendering, sanitization, approval, destination control, audience authorization, and browser policy.",
    "failureImpact": "Misleading content, unsafe rendering, wrong audience, deceptive links, or operational confusion.",
    "owner": "Communications Technology"
  },
  {
    "asset": "Secrets and service identities",
    "value": "Fictional API credentials, signing keys, database identities, certificate keys, and deployment identities.",
    "securityNeeds": "Managed storage, narrow access, rotation, audit logging, no code exposure, and retirement.",
    "failureImpact": "Service impersonation, unauthorized data access, deployment compromise, or loss of trust.",
    "owner": "Platform Engineering"
  },
  {
    "asset": "Application availability",
    "value": "Fictional login, record access, support workflows, reporting, recovery, and monitoring services.",
    "securityNeeds": "Capacity controls, graceful failure, dependency resilience, rollback, recovery, and health monitoring.",
    "failureImpact": "Interrupted support, delayed decisions, user frustration, operational cost, or missed deadlines.",
    "owner": "Infrastructure Operations"
  },
  {
    "asset": "Security and audit evidence",
    "value": "Fictional request IDs, identity events, application decisions, database transactions, alerts, cases, and owner approvals.",
    "securityNeeds": "Integrity, time accuracy, privacy, retention, access control, source health, correlation, and safe display.",
    "failureImpact": "Weak investigations, missing accountability, false conclusions, delayed response, or unsupported closure.",
    "owner": "Security Operations"
  }
];

const trustBoundaries = [
  {
    "boundary": "Public browser to reverse proxy",
    "change": "Fictional requests move from an untrusted client environment into owned infrastructure.",
    "requiredChecks": "TLS, host validation, request limits, safe headers, method rules, content type, routing, request ID, and edge logging.",
    "assumption": "The reverse proxy is the only approved external entry point.",
    "evidence": "DNS, certificate, listener, route policy, request logs, and architecture inventory."
  },
  {
    "boundary": "Reverse proxy to application API",
    "change": "Fictional network and forwarding context becomes application identity, session, route, object, and business context.",
    "requiredChecks": "Trusted forwarded headers, authenticated session, input schema, authorization, anti-forgery control, and safe errors.",
    "assumption": "Only approved proxies can set trusted client and scheme headers.",
    "evidence": "Proxy trust configuration, application logs, route tests, and deployment template."
  },
  {
    "boundary": "Application API to identity service",
    "change": "Fictional application requests depend on external identity claims, factors, session state, and risk decisions.",
    "requiredChecks": "Issuer, audience, signature, time, account state, factor, session, revocation, and application policy.",
    "assumption": "The application validates current identity metadata rather than trusting client-supplied role claims.",
    "evidence": "Identity configuration, token metadata, session logs, policy records, and negative tests."
  },
  {
    "boundary": "Application API to database",
    "change": "Fictional user intent becomes service-authorized data operations under a service identity.",
    "requiredChecks": "Object and tenant authorization, prepared operations, least privilege, transaction rules, row limits, and audit logging.",
    "assumption": "The database accepts requests only from approved service identities.",
    "evidence": "Service policy, prepared-operation record, database logs, network policy, and access review."
  },
  {
    "boundary": "Application to third-party integration",
    "change": "Fictional owned data and requests move to a provider with separate ownership and security practices.",
    "requiredChecks": "Business need, exact destination, authentication, minimum data, schema validation, timeout, retry, error handling, monitoring, and contract ownership.",
    "assumption": "The provider handles only the approved data and does not become a trusted authorization source.",
    "evidence": "Integration inventory, data-flow record, contract, configuration, test, and provider-owner review."
  },
  {
    "boundary": "Administrator to privileged function",
    "change": "Fictional ordinary authenticated access becomes high-impact export, role, account, configuration, or recovery authority.",
    "requiredChecks": "Privileged role, reauthentication, step-up verification, dual approval, confirmation, idempotency, and enhanced logging.",
    "assumption": "Privileged actions cannot be completed through ordinary user routes.",
    "evidence": "Role policy, approval record, session event, transaction log, and positive and negative tests."
  },
  {
    "boundary": "Stored content to browser rendering",
    "change": "Fictional database or message content becomes HTML text, rich text, attribute, URL, preview, notification, or export output.",
    "requiredChecks": "Output-context handling, safe binding, sanitization, destination allowlist, content policy, isolation, and viewer review.",
    "assumption": "Stored content is treated as untrusted at every new output boundary.",
    "evidence": "Source-to-sink map, component review, sanitizer policy, browser result, and regression tests."
  },
  {
    "boundary": "Production service to monitoring platform",
    "change": "Fictional operational events become centralized evidence used for detections and investigations.",
    "requiredChecks": "Structured fields, request correlation, redaction, source health, time normalization, retention, access control, and safe rendering.",
    "assumption": "Monitoring receives complete and timely events from all critical paths.",
    "evidence": "Source inventory, parser status, event counts, time checks, retention, and access review."
  }
];

const entryPoints = [
  {
    "entry": "Sign-in and recovery",
    "inputs": "Fictional account identifiers, factors, recovery evidence, devices, sessions, and redirects.",
    "threats": "Account guessing, unsafe recovery, session fixation, misleading redirects, or weak revocation.",
    "controls": "MFA, rate controls, recovery separation, rotation, safe redirects, device and risk policy, and monitoring.",
    "validation": "Approved sign-in and recovery work; invalid factors, expired sessions, unapproved redirects, and disabled accounts fail."
  },
  {
    "entry": "Record lookup and editing",
    "inputs": "Fictional record IDs, filters, fields, text, attachments, and workflow actions.",
    "threats": "Unassigned record access, wrong-tenant access, invalid updates, unsafe files, or excessive data exposure.",
    "controls": "Server-side object authorization, schemas, file policy, least privilege, field allowlists, and safe errors.",
    "validation": "Assigned records work; unassigned, wrong-tenant, malformed, excessive, and unauthorized requests fail before data access."
  },
  {
    "entry": "Search and reporting",
    "inputs": "Fictional queries, filters, sort choices, date ranges, page sizes, report types, and export requests.",
    "threats": "Dynamic construction, excessive resource use, unapproved export, duplicate jobs, or sensitive result exposure.",
    "controls": "Strict schemas, server-defined mappings, bound values, quotas, privileged approval, idempotency, and secure files.",
    "validation": "Approved reports work; unsupported choices, excessive ranges, unauthorized roles, and duplicate submissions do not create extra results."
  },
  {
    "entry": "Announcements and messages",
    "inputs": "Fictional plain text, approved rich text, links, audience selection, scheduling, and previews.",
    "threats": "Unsafe rendering, misleading destinations, wrong audience, unauthorized publishing, or stale content.",
    "controls": "Safe binding, narrow sanitization, destination allowlists, audience authorization, approval, expiry, and content policy.",
    "validation": "Approved formatting and audience work; unsupported content and unauthorized publishing are denied."
  },
  {
    "entry": "File upload and download",
    "inputs": "Fictional documents, names, metadata, content types, storage locations, previews, and download actions.",
    "threats": "Unsafe content, misleading files, oversized uploads, public exposure, path mistakes, or long-lived download links.",
    "controls": "Type and size policy, isolated processing, safe names, private storage, authorization, expiry, and viewer isolation.",
    "validation": "Approved files work; unsupported, oversized, unauthorized, expired, and cross-tenant access fail safely."
  },
  {
    "entry": "Administrative console",
    "inputs": "Fictional role changes, account state, exports, configuration, recovery, and approval actions.",
    "threats": "Privilege misuse, hidden sensitive actions, stale sessions, duplicate approvals, or overbroad access.",
    "controls": "Privileged roles, reauthentication, dual approval, confirmation, idempotency, route gating, and detailed evidence.",
    "validation": "Approved administrators succeed; ordinary users, stale sessions, missing approvals, and duplicate requests fail."
  },
  {
    "entry": "API and integration",
    "inputs": "Fictional tokens, service identities, JSON data, callbacks, webhooks, third-party responses, and retries.",
    "threats": "Wrong audience, overbroad scopes, replay, untrusted callbacks, schema drift, or provider outage.",
    "controls": "Exact identity and audience checks, schema validation, replay controls, destination allowlists, timeouts, retries, and monitoring.",
    "validation": "Approved integration messages work; wrong identity, malformed, duplicate, expired, and unapproved-destination cases fail."
  },
  {
    "entry": "Operations and deployment",
    "inputs": "Fictional builds, packages, images, feature flags, environment variables, secrets, migrations, and configuration changes.",
    "threats": "Unsafe dependency, secret exposure, debug mode, drift, wrong identity, excessive ports, or failed rollback.",
    "controls": "Artifact verification, managed secrets, secure baselines, peer approval, least privilege, smoke tests, monitoring, and rollback.",
    "validation": "Approved build and configuration deploy; altered artifacts, debug settings, unnecessary services, and failed health checks block release."
  }
];

const threatCategories = [
  {
    "category": "Identity misuse",
    "question": "Could a fictional user, service, device, or session be mistaken for another identity or retain access after trust changes?",
    "examples": "Weak recovery, stale sessions, shared accounts, overbroad service identities, or unvalidated identity claims.",
    "controlFocus": "MFA, secure recovery, session rotation and revocation, named identities, claim validation, and access review."
  },
  {
    "category": "Authorization failure",
    "question": "Could a fictional authenticated identity access another object, tenant, action, workflow state, or privilege level?",
    "examples": "Missing object checks, client-trusted roles, exposed administrator routes, or inconsistent API enforcement.",
    "controlFocus": "Central server-side authorization, tenant isolation, trusted object resolution, least privilege, and negative tests."
  },
  {
    "category": "Unsafe data interpretation",
    "question": "Could fictional data become query structure, command structure, markup, navigation, file behavior, or configuration?",
    "examples": "Dynamic queries, raw markup, untrusted destinations, unsafe filenames, or configuration injection.",
    "controlFocus": "Schemas, strict allowlists, parameterization, safe APIs, context output handling, and isolated processing."
  },
  {
    "category": "Information exposure",
    "question": "Could fictional private data, secrets, internal details, or evidence be returned, logged, cached, exported, or shared too broadly?",
    "examples": "Verbose errors, parent-domain cookies, overbroad exports, secret logging, or public download links.",
    "controlFocus": "Data minimization, safe errors, redaction, access control, private storage, cache policy, and retention limits."
  },
  {
    "category": "Integrity and workflow abuse",
    "question": "Could fictional data, approvals, roles, transactions, or records be changed incorrectly or without clear user intent?",
    "examples": "Request forgery, duplicate approval, missing confirmation, weak business rule, or stale workflow state.",
    "controlFocus": "Anti-forgery controls, authorization, confirmation, reauthentication, idempotency, transaction rules, and audit logs."
  },
  {
    "category": "Availability and resource exhaustion",
    "question": "Could fictional requests, files, queries, dependencies, retries, or administrative actions reduce service availability?",
    "examples": "Excessive search range, oversized upload, retry storm, slow dependency, unbounded export, or missing capacity limit.",
    "controlFocus": "Bounds, quotas, timeouts, circuit breaking, queues, graceful failure, capacity monitoring, and recovery."
  },
  {
    "category": "Dependency and configuration risk",
    "question": "Could fictional packages, services, build steps, runtime settings, certificates, or manual changes weaken the application?",
    "examples": "Unsupported runtime, debug mode, exposed port, stale certificate, broad permission, or compromised package source.",
    "controlFocus": "Inventory, lockfiles, trusted sources, supported versions, secure baselines, drift detection, and rollback."
  },
  {
    "category": "Evidence and accountability failure",
    "question": "Could fictional actions occur without reliable identity, request, decision, object, transaction, time, or owner evidence?",
    "examples": "Missing request IDs, incomplete logs, parser failure, shared accounts, weak retention, or unowned alerts.",
    "controlFocus": "Structured logs, correlation, time accuracy, named identities, source health, retention, access control, and case governance."
  }
];

const riskFactors = [
  {
    "factor": "Asset value",
    "low": "Fictional public or low-impact content with easy recovery.",
    "high": "Fictional nonpublic student data, privileged identity, secrets, exports, or critical support workflows.",
    "evidence": "Data classification, business owner, workflow dependency, recovery requirement, and impact statement."
  },
  {
    "factor": "Exposure",
    "low": "Fictional isolated test feature available only to a small approved group.",
    "high": "Fictional public route, broad authenticated population, third-party integration, or internet-facing service.",
    "evidence": "Route inventory, listener, user population, integration list, network path, and access policy."
  },
  {
    "factor": "Exploitability or misuse difficulty",
    "low": "Fictional issue requires several privileged approvals and unusual conditions.",
    "high": "Fictional issue occurs through ordinary browser requests, common user actions, or default workflow behavior.",
    "evidence": "Preconditions, roles, sessions, route behavior, required approvals, and supplied safe test results."
  },
  {
    "factor": "Existing control strength",
    "low": "Fictional independent controls prevent or limit the result and are validated.",
    "high": "Fictional controls are missing, inconsistent, bypassable, unmonitored, or unsupported by evidence.",
    "evidence": "Design, code, configuration, control decisions, positive tests, negative tests, and monitoring."
  },
  {
    "factor": "Scope",
    "low": "Fictional one user, one object, one test environment, or one isolated path.",
    "high": "Fictional many users, tenants, records, routes, environments, or shared services.",
    "evidence": "Affected inventory, user count, object count, tenant list, route list, and deployment map."
  },
  {
    "factor": "Business consequence",
    "low": "Fictional minor inconvenience with no sensitive data or critical workflow effect.",
    "high": "Fictional privacy harm, incorrect decision, unapproved payment, loss of evidence, outage, or legal and trust impact.",
    "evidence": "Business owner, transaction state, user effect, data state, availability, and policy requirement."
  },
  {
    "factor": "Detection and response",
    "low": "Fictional activity is reliably logged, alerted, owned, investigated, and reversible.",
    "high": "Fictional activity may be silent, unattributed, retained briefly, or difficult to reverse.",
    "evidence": "Source health, rule coverage, owner, retention, case process, rollback, and recovery evidence."
  },
  {
    "factor": "Evidence confidence",
    "low": "Fictional conclusion depends on assumptions, stale diagrams, missing logs, or one ambiguous event.",
    "high": "Fictional multiple independent sources support the same conclusion and limitations are documented.",
    "evidence": "Source count, raw records, normalized timeline, user confirmation, system-of-record state, and evidence gaps."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Define scope and assets",
    "detail": "List fictional users, data, identities, secrets, services, workflows, environments, owners, and business consequences."
  },
  {
    "step": "2",
    "title": "Map data and trust boundaries",
    "detail": "Draw fictional sources, destinations, protocols, transformations, identities, privilege changes, and storage locations."
  },
  {
    "step": "3",
    "title": "Inventory attack surface",
    "detail": "Review fictional routes, APIs, files, messages, integrations, administrative paths, dependencies, services, and deployments."
  },
  {
    "step": "4",
    "title": "Describe misuse and controls",
    "detail": "Write fictional threat events, preconditions, affected assets, existing controls, evidence, alternatives, and gaps."
  },
  {
    "step": "5",
    "title": "Prioritize and assign",
    "detail": "Evaluate fictional exposure, asset value, control strength, scope, business effect, reversibility, confidence, owner, and due date."
  },
  {
    "step": "6",
    "title": "Validate and maintain",
    "detail": "Run fictional positive and negative tests, monitor, update after changes, review exceptions, prepare rollback, and document residual risk."
  }
];

const investigationTimeline = [
  {
    "time": "Day 1",
    "source": "Scope",
    "event": "A fictional team defines the student-support portal, administration console, identity service, API, database, proxy, and monitoring platform.",
    "meaning": "The initial system boundary and major owners are established."
  },
  {
    "time": "Day 2",
    "source": "Asset review",
    "event": "Student-support records, privileged identities, exports, secrets, availability, and audit evidence are classified as important assets.",
    "meaning": "Protection priorities are connected to business value."
  },
  {
    "time": "Day 3",
    "source": "Data flow",
    "event": "The fictional browser sends record requests through the proxy and API to the reporting database.",
    "meaning": "Several trust boundaries and evidence sources are identified."
  },
  {
    "time": "Day 4",
    "source": "Attack surface",
    "event": "The team inventories sign-in, recovery, record access, reports, announcements, files, APIs, administrator routes, and deployment paths.",
    "meaning": "The reachable feature set is documented."
  },
  {
    "time": "Day 5",
    "source": "Misuse case",
    "event": "TM-07 describes a teacher requesting another teacher’s assigned student record.",
    "meaning": "An object-authorization failure scenario is made specific and testable."
  },
  {
    "time": "Day 6",
    "source": "Existing control",
    "event": "The fictional route verifies authentication and role but does not resolve the trusted assignment relationship.",
    "meaning": "The existing control is incomplete."
  },
  {
    "time": "Day 7",
    "source": "Negative test",
    "event": "A fictional teacher retrieves an unassigned record in the safe test environment.",
    "meaning": "The threat event produces a confirmed unauthorized result under the supplied conditions."
  },
  {
    "time": "Day 8",
    "source": "Risk review",
    "event": "The team rates the issue high because the data is nonpublic, the route is broadly available to teachers, and the result is reproducible.",
    "meaning": "Asset value, exposure, control weakness, and evidence strength drive priority."
  },
  {
    "time": "Day 9",
    "source": "Containment",
    "event": "The feature is blocked from release while the central authorization policy is corrected.",
    "meaning": "A narrow release control prevents known exposure."
  },
  {
    "time": "Day 10",
    "source": "Remediation",
    "event": "The server resolves tenant, record, assignment, role, action, and session using trusted data.",
    "meaning": "The control now matches the misuse case and security requirement."
  },
  {
    "time": "Day 11",
    "source": "Positive test",
    "event": "A fictional teacher can retrieve an assigned record.",
    "meaning": "Legitimate workflow remains available."
  },
  {
    "time": "Day 11",
    "source": "Negative test",
    "event": "Unassigned, wrong-tenant, wrong-role, expired-session, and missing-session requests are denied before data access.",
    "meaning": "Several related misuse cases are controlled."
  },
  {
    "time": "Day 12",
    "source": "Threat model update",
    "event": "The data-flow diagram, attack-surface inventory, risk record, tests, and owner status are updated.",
    "meaning": "The threat model becomes traceable to remediation and validation."
  },
  {
    "time": "Day 19",
    "source": "Monitoring",
    "event": "Assigned access remains normal and no unexplained cross-tenant result appears.",
    "meaning": "Short-term operational evidence supports the control."
  },
  {
    "time": "Day 30",
    "source": "Change review",
    "event": "A new third-party messaging integration triggers a threat-model and data-flow update.",
    "meaning": "The model remains a living lifecycle artifact."
  }
];

const commonMistakes = [
  "Treating a fictional threat model as a one-time diagram rather than a living decision and evidence record.",
  "Listing generic threats without connecting them to exact assets, entry points, trust boundaries, users, objects, and business workflows.",
  "Calling every feature an attack surface without identifying who can reach it, what it accepts, and which controls apply.",
  "Assuming internal users, services, networks, or stored data are automatically trusted.",
  "Scoring risk before confirming asset value, exposure, preconditions, existing controls, scope, and evidence quality.",
  "Treating a code weakness as proof of successful harmful use or treating a blocked test as proof that every path is safe.",
  "Ignoring third-party, administrative, recovery, deployment, legacy, preview, export, error, and monitoring paths.",
  "Using only happy-path tests and skipping wrong-role, wrong-tenant, expired, duplicate, malformed, cross-origin, and failure cases.",
  "Assigning all remediation to the security team instead of the accountable application, identity, platform, data, or business owner.",
  "Closing a threat after one code change without updating architecture, tests, monitoring, exceptions, rollback, and residual risk.",
  "Publishing real architecture, routes, hostnames, identities, source code, secrets, logs, or student data in a portfolio artifact.",
  "Creating exploit payloads or probing real systems instead of using supplied fictional evidence and safe defensive scenarios."
];

const quizQuestions = [
  {
    "question": "What is the primary purpose of a fictional threat model?",
    "choices": [
      "Connect assets, users, data flows, trust boundaries, misuse cases, controls, evidence, owners, and residual risk.",
      "Create exploit code.",
      "Replace secure requirements and testing.",
      "Prove every risk has already occurred."
    ],
    "answer": 0,
    "explanation": "Threat modeling supports structured defensive decisions across design, implementation, and operations."
  },
  {
    "question": "What makes a fictional trust boundary important?",
    "choices": [
      "Identity, data, privilege, ownership, or control assumptions change and must be revalidated.",
      "The page changes color.",
      "The request has a status code.",
      "The user knows the application owner."
    ],
    "answer": 0,
    "explanation": "Trust transitions are where controls should verify assumptions again."
  },
  {
    "question": "Which item belongs in an attack-surface inventory?",
    "choices": [
      "Fictional routes, APIs, files, messages, administrative paths, dependencies, services, integrations, and deployment interfaces.",
      "Only the public homepage.",
      "Only known vulnerabilities.",
      "Only user passwords."
    ],
    "answer": 0,
    "explanation": "Attack surface includes all reachable interfaces and trust transitions that affect security."
  },
  {
    "question": "A fictional route checks authentication but not object assignment. What is the strongest conclusion?",
    "choices": [
      "The object-authorization control is incomplete and requires validation of the trusted relationship.",
      "The entire database was copied.",
      "Authentication makes object checks unnecessary.",
      "No threat exists because the route is internal."
    ],
    "answer": 0,
    "explanation": "Authentication and object authorization are separate controls."
  },
  {
    "question": "Which risk-prioritization approach is strongest?",
    "choices": [
      "Use asset value, exposure, misuse difficulty, existing controls, scope, business consequence, detection, reversibility, and evidence confidence.",
      "Rate every issue critical.",
      "Use the alert title only.",
      "Prioritize by which issue sounds most dramatic."
    ],
    "answer": 0,
    "explanation": "Risk decisions should combine technical, business, control, and evidence context."
  },
  {
    "question": "When should a fictional threat model be updated?",
    "choices": [
      "When users, data, features, dependencies, trust boundaries, environments, incidents, or business workflows change.",
      "Only once before coding.",
      "Only after a public incident.",
      "Never after release."
    ],
    "answer": 0,
    "explanation": "Threat models should evolve with the system and its context."
  },
  {
    "question": "Which portfolio practice is safest?",
    "choices": [
      "Use fictional architecture, identifiers, evidence, users, routes, and organizations without real secrets, code, logs, or private data.",
      "Publish production hostnames and source code.",
      "Include real session IDs.",
      "Reuse real student records with names removed."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate professional reasoning without exposing real systems or people."
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

function AssetGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Asset Review
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Assets with Different Protection Needs
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {assets.map((item) => (
          <div
            key={item.asset}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.asset}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.value}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Security needs
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.securityNeeds}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Failure impact
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.failureImpact}
              </p>
            </div>

            <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
              Owner: {item.owner}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustBoundaryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Trust Boundaries
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Places Where Assumptions Must Be Revalidated
      </h2>

      <div className="mt-6 grid gap-5">
        {trustBoundaries.map((item) => (
          <div
            key={item.boundary}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.boundary}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.change}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Required checks
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.requiredChecks}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Assumption
                </p>

                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.assumption}
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

function EntryPointGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Attack Surface
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Entry-Point Groups to Review
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {entryPoints.map((item) => (
          <div
            key={item.entry}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.entry}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Inputs and actions
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.inputs}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Threats
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.threats}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Controls
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.controls}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Validation
              </p>

              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.validation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThreatCategoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Threat Categories
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions for Defensive Review
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {threatCategories.map((item) => (
          <div
            key={item.category}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.category}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Fictional examples
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.examples}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Control focus
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.controlFocus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RiskGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Risk Prioritization
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Factors for an Evidence-Based Priority
      </h2>

      <div className="mt-6 grid gap-5">
        {riskFactors.map((item) => (
          <div
            key={item.factor}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.factor}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Lower concern
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.low}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Higher concern
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.high}
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Threat-Model Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Build and Maintain the Model in Six Steps
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
        Traceable Threat Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Object-Authorization Threat from Model to Monitoring
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

export default function ThreatModelingAndAttackSurfaceReviewPage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.2 Threat Modeling and Attack Surface Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional development teams map assets, users, data flows,
            trust boundaries, entry points, dependencies, privileges, misuse
            cases, existing controls, evidence gaps, business impact, and
            residual risk before choosing and validating defensive controls.
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
          lessonTitle="Threat Modeling and Attack Surface Review"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional threat modeling is a defensive design and evidence activity, not an instruction to exploit systems.",
            "I will connect threats to exact assets, users, data flows, trust boundaries, entry points, controls, owners, and business impact.",
            "I will separate possible threat events, confirmed weaknesses, successful harmful use, control results, and residual risk.",
            "I will use only supplied fictional architecture, routes, identities, data, code paths, logs, tests, and organizations.",
            "I will not probe real systems, create exploit payloads, or publish real architecture, source code, credentials, secrets, logs, or private data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Threat Modeling Makes Security Decisions Visible Before Failure"
        >
          <p className="leading-8">
            A fictional application may have strong login controls while a
            teacher can request another teacher’s record. A secure API may still
            send data to an overbroad third-party integration. A protected
            administrator route may rely on an unreviewed recovery process.
            Threat modeling asks where assumptions change, what could fail, which
            controls exist, what evidence supports them, and who owns the risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak model
              </p>

              <p className="mt-2 leading-7">
                “The fictional application is internal and uses login, so the
                remaining risk is low.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong model
              </p>

              <p className="mt-2 leading-7">
                “Map each identity, object, route, trust boundary, privileged
                action, data flow, dependency, control, misuse case, evidence
                source, owner, and residual risk.”
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
          title="The Most Important Risks Often Appear Between Components"
        >
          <p className="leading-8">
            Fictional security failures frequently occur when one component
            trusts another component’s identity, role, input, output, route,
            destination, session, file, secret, or business decision. By mapping
            transitions and assumptions, teams can choose controls before unsafe
            patterns become difficult to remove and can design evidence that
            proves whether those controls work.
          </p>
        </SectionCard>

        <AssetGuide />
        <TrustBoundaryGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Asset–Flow–Boundary–Threat–Control Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Asset", "Which fictional data, identity, service, secret, workflow, decision, or evidence needs protection?"],
              ["Flow", "Where does the fictional asset move, transform, wait, render, or become a business action?"],
              ["Boundary", "Where do fictional identity, ownership, privilege, or trust assumptions change?"],
              ["Threat", "Which fictional misuse, failure, mistake, defect, dependency, or unsafe condition could occur?"],
              ["Control", "Which fictional design, code, configuration, process, monitoring, or owner reduces the risk?"],
              ["Evidence", "Which fictional test, log, transaction, owner review, and business record proves the result and residual risk?"],
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

        <EntryPointGuide />
        <ThreatCategoryGuide />
        <RiskGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Threat Modeling and Attack Surface Terms
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
          title="Fake Threat Model and Attack Surface Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student-support portal."
          metrics={[
            {
              label: "Modeled assets",
              value: "24",
              note: "Fictional data, identities, services, secrets, workflows, availability, and evidence assets.",
            },
            {
              label: "Trust boundaries",
              value: "17",
              note: "Browser, proxy, application, identity, database, third-party, privileged, rendering, and monitoring transitions.",
            },
            {
              label: "Open threat items",
              value: "9",
              note: "Authorization, input, rendering, recovery, export, dependency, configuration, availability, and evidence-gap reviews.",
            },
          ]}
        />

        <FakeAlertCard
          title="Threat Model Finds Missing Object-Assignment Check"
          severity="High"
          time="10:30 AM"
          source="Fake Threat Modeling Review Console"
          details="A fictional misuse case describes a teacher requesting another teacher’s assigned student-support record. The route verifies authentication and teacher role but does not resolve the trusted assignment relationship. A supplied negative test reproduces unauthorized access in the safe test environment."
          recommendation="Block release of the affected feature, preserve architecture and test evidence, implement centralized server-side tenant and object authorization, test assigned and unassigned access across roles and sessions, update the threat model and data flow, monitor, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Threat Model Traceability Timeline"
          logs={[
            "DAY1 SCOPE systems='portal,admin,identity,api,database,proxy,monitoring'",
            "DAY2 ASSET student_support_records='high_value'",
            "DAY3 DATA_FLOW browser='proxy' proxy='api' api='database'",
            "DAY4 ATTACK_SURFACE entries='signin,records,reports,announcements,files,api,admin,deploy'",
            "DAY5 MISUSE_CASE id='TM-07' scenario='teacher_unassigned_record'",
            "DAY6 CONTROL authentication='present' role_check='present' assignment_check='missing'",
            "DAY7 NEGATIVE_TEST unassigned_record='allowed'",
            "DAY8 RISK asset='nonpublic' exposure='teacher_population' reproducible='true' priority='high'",
            "DAY9 RELEASE_GATE result='blocked'",
            "DAY10 REMEDIATE tenant='verified' assignment='verified' object='verified' action='verified'",
            "DAY11 POSITIVE_TEST assigned_record='pass'",
            "DAY11 NEGATIVE_TEST unassigned='deny' wrong_tenant='deny' wrong_role='deny' expired='deny'",
            "DAY12 MODEL_UPDATE data_flow='updated' risk='updated' tests='linked' owner='assigned'",
            "DAY19 MONITOR unexplained_cross_tenant_results='0'",
            "DAY30 CHANGE_REVIEW third_party_messaging='model_update_required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Threat-Model Conclusion Is Best Supported?"
          evidence={[
            "The fictional student-support records are classified as nonpublic.",
            "The route is available to authenticated teacher accounts.",
            "The route checks authentication and teacher role.",
            "The route does not verify the trusted assignment relationship.",
            "A supplied negative test retrieves an unassigned record in the safe test environment.",
            "The feature is blocked from release.",
            "The remediation verifies tenant, record, assignment, role, action, and session state.",
            "Assigned access passes while unassigned, wrong-tenant, wrong-role, expired-session, and missing-session requests are denied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional threat model identified a high-priority object-authorization weakness in the test path; the release gate prevented production exposure, and the remediated control passed the reviewed positive and negative tests.",
            "The entire production database was copied.",
            "Authentication proved the route was safe.",
            "No threat existed because the application was internal.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a confirmed test-environment authorization weakness, justified priority, prevented release, and successful reviewed remediation without supporting a production-impact claim."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Threat Models"
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
          title="Build a Fictional Threat Model and Attack Surface Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Student-Support Portal
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty-two supplied fictional records covering assets,
                users, data flows, trust boundaries, entry points, dependencies,
                identities, privileges, misuse cases, code and configuration
                controls, tests, monitoring, owners, exceptions, and residual risk.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define fictional scope, owners, environments, users, assets, data, secrets, and business workflows.</li>
                <li>Create a data-flow diagram with sources, destinations, protocols, identities, storage, transformations, and trust boundaries.</li>
                <li>Inventory routes, APIs, files, messages, third parties, administrative paths, dependencies, services, and deployments.</li>
                <li>Write at least eight misuse cases with preconditions, assets, controls, evidence, alternatives, and gaps.</li>
                <li>Prioritize risks using asset value, exposure, control strength, scope, business consequence, detection, reversibility, and confidence.</li>
                <li>Document owners, remediation, positive tests, negative tests, monitoring, rollback, exceptions, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not probe real systems,
            create exploit payloads, access accounts, modify applications, or
            publish real architecture, routes, code, secrets, logs, user records,
            hostnames, integrations, or private organizational data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Threat Model Assumes Internal Users Are Trusted"
          scenario="A fictional design note says object authorization is unnecessary because only teachers can access the application."
          choices={[
            {
              label: "Choice A",
              response:
                "Replace the assumption with explicit server-side role, tenant, relationship, object, action, and session checks; add misuse cases and positive and negative tests; assign an owner; and update the model.",
              outcome:
                "Best defensive choice. Internal authenticated users still require least-privilege object authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the assumption because teachers are known users.",
              outcome:
                "Unsafe. Authentication and employment do not grant every object and action.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Hide record links in the browser.",
              outcome:
                "Incomplete. Client visibility does not replace server-side authorization.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A New Third-Party Messaging Integration Is Proposed"
          scenario="A fictional provider will receive selected announcement text and audience identifiers, but the existing threat model does not include the provider."
          choices={[
            {
              label: "Choice A",
              response:
                "Update scope and data flow, classify shared data, verify exact destination and identity, minimize fields, define schema and timeout behavior, review provider ownership and contract, test failures, monitor, and document residual risk.",
              outcome:
                "Best defensive choice. The new trust boundary becomes visible, owned, limited, and testable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat the provider as trusted because it is a paid service.",
              outcome:
                "Unsafe. Separate ownership and data handling require explicit review.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow the provider to receive every application field for flexibility.",
              outcome:
                "Overbroad. Data sharing should be minimized to the approved purpose.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Threat Modeling and Attack Surface Review Checklist"
          items={[
            "I define fictional scope, users, environments, owners, assets, data, secrets, services, and business workflows.",
            "I map fictional data sources, destinations, protocols, transformations, storage, identities, privileges, and trust boundaries.",
            "I inventory routes, APIs, files, messages, integrations, administrative paths, dependencies, services, and deployments.",
            "I write misuse cases that identify preconditions, affected assets, threat events, existing controls, evidence, alternatives, and gaps.",
            "I separate possible threats, confirmed weaknesses, successful harmful use, control results, impact, and residual risk.",
            "I prioritize with asset value, exposure, difficulty, control strength, scope, business consequence, detection, reversibility, and confidence.",
            "I assign accountable application, identity, platform, data, security, or business owners.",
            "I design positive, negative, misuse-case, regression, deployment, monitoring, and rollback validation.",
            "I update the threat model after meaningful changes, incidents, exceptions, new dependencies, and new business workflows.",
            "I use only fictional evidence and never expose or test real systems, code, secrets, logs, users, or private data.",
          ]}
        />

        <MiniQuiz
          title="I9.2 Mini Quiz: Threat Modeling and Attack Surface Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Threat Model and Attack Surface Review using at least forty-two architecture, asset, user, data-flow, trust-boundary, route, API, file, integration, dependency, misuse-case, control, test, monitoring, owner, exception, and residual-risk records. Include an architecture diagram, data-flow map, attack-surface inventory, eight misuse cases, risk ranking, evidence references, owners, remediation, positive tests, negative tests, rollback, evidence gaps, and closure criteria."
          tips={[
            "Use only fictional applications, users, routes, systems, data, identities, dependencies, logs, tests, and organizations.",
            "For every threat item, state the asset, boundary, entry point, precondition, existing control, evidence, impact, owner, and residual risk.",
            "Keep possible threat, confirmed weakness, successful harmful use, control result, data state, user effect, and business impact separate.",
            "Do not include real architecture, hostnames, source code, credentials, secrets, logs, student records, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Threat modeling connects fictional assets, data flows, trust boundaries, entry points, misuse cases, controls, evidence, owners, and residual risk.",
            "Attack surface includes public, authenticated, administrative, integration, file, dependency, deployment, recovery, and monitoring paths.",
            "Authentication does not replace object authorization, tenant isolation, workflow checks, or user-intent controls.",
            "Risk priority should reflect asset value, exposure, control strength, scope, business consequence, detection, reversibility, and evidence confidence.",
            "A threat model is a living lifecycle artifact that must change when the system, users, data, dependencies, environment, or business workflow changes.",
            "Strong validation preserves legitimate workflows while proving unsafe and unauthorized conditions are denied.",
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