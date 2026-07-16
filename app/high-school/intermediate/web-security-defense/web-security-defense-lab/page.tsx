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
const previousLesson = `${modulePath}/web-logs-alerts-and-defensive-investigation`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional web architecture, authentication, sessions, access control, input validation, browser defense, request protection, secure configuration, logging, investigation, remediation, validation, and closure.",
  "Build one defensible fictional case timeline using request IDs, sessions, accounts, objects, transactions, browser events, application decisions, database state, and business records.",
  "Separate confirmed facts, reasonable conclusions, alternative explanations, evidence gaps, confidence, control results, user intent, data state, and business impact.",
  "Recommend narrow fictional containment and remediation with accountable owners, positive tests, negative tests, monitoring, rollback, and residual risk.",
  "Produce a portfolio-ready fictional Web Security Defense Case Report using only supplied safe, inert, authorized evidence."
];

const labPhases = [
  {
    "phase": "Phase 1: Scope and architecture",
    "goal": "Define the fictional application, users, routes, APIs, identity, sessions, data stores, third parties, business workflows, owners, and trust boundaries.",
    "requiredEvidence": "Architecture diagram, host and route inventory, user and role list, application owner, data classification, business workflow, and evidence-source map.",
    "deliverable": "One application architecture and trust-boundary map with scope notes and assumptions.",
    "qualityCheck": "Every important user action and data flow has an owner, trust boundary, and evidence source."
  },
  {
    "phase": "Phase 2: Authentication and session review",
    "goal": "Trace fictional sign-in, factors, risk, session creation, cookies, expiration, rotation, logout, revocation, and reauthentication.",
    "requiredEvidence": "Identity records, factor results, session IDs, cookie attributes, issue and expiration times, device context, and session inventory.",
    "deliverable": "One authentication and session-control worksheet.",
    "qualityCheck": "Authentication success, valid session, authorization, user intent, and business impact remain separate."
  },
  {
    "phase": "Phase 3: Access and input review",
    "goal": "Evaluate fictional roles, permissions, ownership, tenants, workflow rules, input contracts, parameterization, safe APIs, and least privilege.",
    "requiredEvidence": "Authorization logs, object and tenant records, request schemas, validation results, application traces, prepared-operation records, and database outcomes.",
    "deliverable": "One access-control and input-defense matrix.",
    "qualityCheck": "Every structural choice is server defined, every data value is validated, and every protected object has a trusted authorization check."
  },
  {
    "phase": "Phase 4: Browser and request protection",
    "goal": "Review fictional output contexts, rendering paths, sanitization, content policy, anti-forgery controls, frame restrictions, confirmations, reauthentication, and idempotency.",
    "requiredEvidence": "Templates, component traces, browser records, content-policy events, anti-forgery decisions, origin records, confirmation screens, and transaction IDs.",
    "deliverable": "One browser and user-action protection review.",
    "qualityCheck": "Plain text, rich text, URLs, frames, sensitive actions, and cross-origin flows each use the correct control."
  },
  {
    "phase": "Phase 5: Transport and configuration",
    "goal": "Review fictional TLS, certificates, redirects, headers, cookies, proxies, debug settings, services, secrets, permissions, runtimes, and drift.",
    "requiredEvidence": "Certificate records, TLS metadata, response headers, cookie metadata, deployment templates, runtime inventory, drift reports, and change records.",
    "deliverable": "One secure configuration baseline comparison.",
    "qualityCheck": "Coverage includes every host, route, redirect, error, API, static path, legacy path, and environment."
  },
  {
    "phase": "Phase 6: Investigation and findings",
    "goal": "Normalize fictional timestamps, correlate records, test alternatives, classify findings, state confidence, and document evidence gaps.",
    "requiredEvidence": "Alert records, raw events, normalized events, request and trace IDs, sessions, objects, transactions, user reports, and system-of-record outcomes.",
    "deliverable": "One normalized timeline and finding set.",
    "qualityCheck": "No conclusion exceeds what the evidence proves, and every finding states limitations."
  },
  {
    "phase": "Phase 7: Remediation and validation",
    "goal": "Apply narrow fictional fixes, preserve legitimate workflows, perform positive and negative tests, monitor, and prepare rollback.",
    "requiredEvidence": "Change tickets, owners, implementation records, test cases, health metrics, alert results, rollback plan, and business-owner approval.",
    "deliverable": "One remediation, validation, monitoring, and rollback plan.",
    "qualityCheck": "Each finding has an owner, due date, test, monitoring signal, rollback trigger, and closure criterion."
  },
  {
    "phase": "Phase 8: Professional closure",
    "goal": "Summarize fictional scope, facts, conclusions, impact, residual risk, accepted exceptions, evidence gaps, lessons learned, and final ownership.",
    "requiredEvidence": "Completed findings, validation results, monitoring period, residual-risk statement, exception approvals, and closure sign-off.",
    "deliverable": "One portfolio-ready Web Security Defense Case Report.",
    "qualityCheck": "The report is clear, evidence based, privacy safe, reproducible, and useful to both technical and nontechnical readers."
  }
];

const caseAssets = [
  {
    "asset": "Student Support Portal",
    "purpose": "A fictional browser application used by students and teachers to view support records, submit updates, and communicate with staff.",
    "owner": "Student Services Technology",
    "data": "Fictional student-support summaries and nonpublic case notes.",
    "criticalControls": "Authentication, session protection, object authorization, safe rendering, input validation, secure configuration, and logging."
  },
  {
    "asset": "Administration Console",
    "purpose": "A fictional restricted interface used by authorized administrators for district-level reporting and account administration.",
    "owner": "District Applications Team",
    "data": "Fictional district reports, account settings, role assignments, and export jobs.",
    "criticalControls": "Privileged roles, reauthentication, dual approval, route gating, API authorization, export logging, and idempotency."
  },
  {
    "asset": "Identity Service",
    "purpose": "A fictional identity provider handling sign-in, factors, device context, application policy, session issuance, and revocation.",
    "owner": "Identity and Access Team",
    "data": "Fictional account, factor, device, session, and policy records.",
    "criticalControls": "MFA, conditional policy, secure session issuance, recovery review, rotation, timeout, and revocation."
  },
  {
    "asset": "Application API",
    "purpose": "A fictional API serving browser and internal application requests.",
    "owner": "Web Platform Team",
    "data": "Fictional support records, announcements, reports, and workflow state.",
    "criticalControls": "Schema validation, authorization, parameterization, anti-forgery protection, safe errors, and request correlation."
  },
  {
    "asset": "Reporting Database",
    "purpose": "A fictional data store containing report summaries and approved support records.",
    "owner": "Data Services Team",
    "data": "Fictional summary records, object relationships, audit entries, and transaction state.",
    "criticalControls": "Least-privileged service identity, prepared operations, tenant filtering, transaction logging, backup, and monitoring."
  },
  {
    "asset": "Announcement Service",
    "purpose": "A fictional service that publishes plain-text and approved rich-text announcements.",
    "owner": "Communications Technology",
    "data": "Fictional announcements, formatting metadata, publish state, and audience.",
    "criticalControls": "Safe text binding, maintained sanitization, content policy, preview isolation, approval, and monitoring."
  },
  {
    "asset": "Reverse Proxy",
    "purpose": "A fictional edge service providing TLS termination, routing, request IDs, redirects, headers, and policy enforcement.",
    "owner": "Infrastructure Operations",
    "data": "Fictional request metadata and routing decisions.",
    "criticalControls": "Certificate lifecycle, secure protocols, trusted forwarded headers, route policy, security headers, and log delivery."
  },
  {
    "asset": "Security Monitoring Platform",
    "purpose": "A fictional system collecting alerts and logs from the application environment.",
    "owner": "Security Operations",
    "data": "Fictional alerts, normalized events, enrichment, case notes, and detection rules.",
    "criticalControls": "Source health, parsing, normalization, correlation, retention, access control, privacy, tuning, and case governance."
  }
];

const evidenceBundle = [
  {
    "id": "E-01",
    "source": "Identity",
    "record": "A fictional teacher account completes approved password and authenticator verification from a known managed device.",
    "supports": "Approved authentication and device context for the teacher account.",
    "doesNotProve": "The physical person’s identity with certainty or authorization for district-wide export."
  },
  {
    "id": "E-02",
    "source": "Session",
    "record": "The application creates a fictional Secure, HttpOnly, SameSite=Lax session with a thirty-minute idle timeout and eight-hour maximum lifetime.",
    "supports": "Defined protected session state and lifetime.",
    "doesNotProve": "The user intended every later request."
  },
  {
    "id": "E-03",
    "source": "Browser",
    "record": "The fictional browser opens an old bookmarked administrative route and refreshes it three times.",
    "supports": "A client-side source for repeated route requests and a plausible accidental explanation.",
    "doesNotProve": "That no suspicious intent existed or that the server rejected every related path."
  },
  {
    "id": "E-04",
    "source": "Proxy",
    "record": "Three fictional requests reach /admin/export with related request IDs under the same teacher session.",
    "supports": "Repeated requests reached the edge and were routed to the application.",
    "doesNotProve": "Authorization success, export creation, or business impact."
  },
  {
    "id": "E-05",
    "source": "Application authorization",
    "record": "The fictional application denies all three requests because the teacher role lacks district-export permission.",
    "supports": "Server-side function authorization prevented the export operation.",
    "doesNotProve": "That the interface was designed well or that no other route exists."
  },
  {
    "id": "E-06",
    "source": "Database",
    "record": "No fictional export query, job, file, transaction, or committed data action is created.",
    "supports": "No confirmed export or database impact from the reviewed requests.",
    "doesNotProve": "That every historical or alternate-path request was harmless."
  },
  {
    "id": "E-07",
    "source": "Interface review",
    "record": "The administrative page shell is visible to any authenticated user before the export API denies the action.",
    "supports": "A route-gating and usability weakness.",
    "doesNotProve": "Unauthorized data access because the protected API still denies the action."
  },
  {
    "id": "E-08",
    "source": "Input validation",
    "record": "The modern report endpoint rejects unknown fields and maps approved sort choices to server-defined operations.",
    "supports": "Strong schema validation and safe structural allowlisting on the modern path.",
    "doesNotProve": "Every legacy or administrative endpoint uses the same pattern."
  },
  {
    "id": "E-09",
    "source": "Legacy code review",
    "record": "A fictional legacy report endpoint accepts arbitrary sort text and uses dynamic query construction.",
    "supports": "A confirmed unsafe construction weakness requiring remediation.",
    "doesNotProve": "That unauthorized data was accessed or changed."
  },
  {
    "id": "E-10",
    "source": "Rendering review",
    "record": "A fictional legacy announcement component inserts stored content through a raw markup feature.",
    "supports": "A confirmed unsafe stored rendering path.",
    "doesNotProve": "Account compromise, session theft, data export, or business impact."
  },
  {
    "id": "E-11",
    "source": "Content policy",
    "record": "A fictional report-only content policy records an unexpected inline behavior event on the announcement page.",
    "supports": "The browser observed behavior inconsistent with the policy.",
    "doesNotProve": "Successful harmful execution or downstream impact."
  },
  {
    "id": "E-12",
    "source": "User report",
    "record": "A fictional staff user reports an unexpected announcement layout change.",
    "supports": "Visible rendering impact to one user.",
    "doesNotProve": "Account, data, or transaction impact."
  },
  {
    "id": "E-13",
    "source": "Request protection",
    "record": "A fictional cross-site invoice-approval request is denied because the session cookie is withheld, the token is missing, and the origin is unapproved.",
    "supports": "Browser and server request-forgery controls prevented the action.",
    "doesNotProve": "Every state-changing route is protected."
  },
  {
    "id": "E-14",
    "source": "Legacy route review",
    "record": "A fictional legacy invoice route still accepts a state-changing GET request.",
    "supports": "A confirmed unsafe method and user-intent design weakness.",
    "doesNotProve": "That a payment or approval occurred."
  },
  {
    "id": "E-15",
    "source": "Certificate monitor",
    "record": "A fictional production certificate will expire in twenty-one days.",
    "supports": "A certificate lifecycle action is required.",
    "doesNotProve": "Current compromise or transport failure."
  },
  {
    "id": "E-16",
    "source": "Configuration review",
    "record": "A fictional legacy error service exposes a framework banner, debug detail, and an unnecessary management listener.",
    "supports": "Confirmed production configuration weaknesses.",
    "doesNotProve": "Credential theft, session compromise, or private-data exposure."
  },
  {
    "id": "E-17",
    "source": "Cookie review",
    "record": "A fictional nonessential preference cookie is parent-domain scoped and lasts one year.",
    "supports": "An overbroad browser-state scope and lifetime finding.",
    "doesNotProve": "Session compromise because it is not the primary session cookie."
  },
  {
    "id": "E-18",
    "source": "Detection rule",
    "record": "A fictional high-severity rule triggers on three export-route requests without considering authorization or database outcome.",
    "supports": "The detection lacks important outcome context.",
    "doesNotProve": "The alert should be disabled or ignored."
  },
  {
    "id": "E-19",
    "source": "Positive validation",
    "record": "A fictional administrator completes an approved export after reauthentication and dual approval.",
    "supports": "Legitimate privileged workflow remains functional.",
    "doesNotProve": "Unauthorized roles are denied unless negative tests also pass."
  },
  {
    "id": "E-20",
    "source": "Negative validation",
    "record": "A fictional teacher cannot load the administrative route or call the export API after remediation.",
    "supports": "Route and API controls deny the reviewed unauthorized role.",
    "doesNotProve": "Every other role and object combination is correct."
  },
  {
    "id": "E-21",
    "source": "Rendering validation",
    "record": "Plain announcements render through safe text binding, and approved rich text passes through a maintained sanitizer.",
    "supports": "The remediated rendering paths behave as designed for tested cases.",
    "doesNotProve": "Every notification, preview, export, and administrative viewer is covered."
  },
  {
    "id": "E-22",
    "source": "Request validation",
    "record": "Missing-token, wrong-origin, framed, GET, canceled, and duplicate invoice requests create no approval.",
    "supports": "Several unsafe conditions are denied after remediation.",
    "doesNotProve": "Every sensitive route has identical protection."
  },
  {
    "id": "E-23",
    "source": "Configuration validation",
    "record": "HTTP redirects safely, debug detail is absent, the management listener is denied, and the staged certificate validates.",
    "supports": "The reviewed configuration fixes and certificate change pass selected tests.",
    "doesNotProve": "All hosts and environments match the baseline."
  },
  {
    "id": "E-24",
    "source": "Monitoring",
    "record": "Seven days of fictional monitoring show stable legitimate workflows, no repeated teacher export attempts, no new announcement policy events, and no configuration drift.",
    "supports": "Short-term stability and control effectiveness for the monitored scope.",
    "doesNotProve": "Permanent elimination of risk."
  }
];

const findings = [
  {
    "id": "F-01",
    "title": "Administrative route exposed before API denial",
    "severity": "Medium",
    "fact": "The fictional page shell is reachable by teacher roles while the export API correctly denies the action.",
    "impact": "No export or data impact is confirmed; the weakness creates confusing interface exposure and unnecessary alert noise.",
    "owner": "District Applications Team",
    "remediation": "Add server-verified route gating and a safe not-authorized page while keeping API authorization.",
    "validation": "Approved administrators can export after reauthentication and dual approval; teachers cannot load the route or call the API."
  },
  {
    "id": "F-02",
    "title": "Legacy report endpoint uses unsafe dynamic construction",
    "severity": "High",
    "fact": "The fictional legacy endpoint accepts arbitrary sort text and uses dynamic query construction.",
    "impact": "A code-level injection weakness is confirmed; unauthorized data impact is not confirmed in supplied records.",
    "owner": "Web Platform Team",
    "remediation": "Replace dynamic construction with server-defined sort mappings, bound values, strict schema validation, and least privilege.",
    "validation": "Approved sort choices succeed; unknown fields, invalid types, unsupported sort values, and unauthorized objects are rejected before database access."
  },
  {
    "id": "F-03",
    "title": "Legacy announcement component uses raw markup rendering",
    "severity": "High",
    "fact": "Stored announcement content reaches a raw markup sink in a fictional legacy client component.",
    "impact": "A stored browser-rendering weakness and visible layout effect are confirmed; account or business impact is not confirmed.",
    "owner": "Communications Technology",
    "remediation": "Use safe text binding for plain text and a maintained sanitizer only for approved rich text; review related viewers and content policy.",
    "validation": "Approved formatting renders correctly; unsupported elements, attributes, destinations, and inert markup-like values are removed or displayed as text."
  },
  {
    "id": "F-04",
    "title": "Legacy invoice route uses state-changing GET",
    "severity": "High",
    "fact": "A fictional approval route changes business state through GET without complete request-intent protection.",
    "impact": "An unsafe design weakness is confirmed; no approval or payment from the reviewed cross-site request is confirmed.",
    "owner": "Finance Applications Team",
    "remediation": "Use POST, anti-forgery validation, exact origin policy, authorization, explicit confirmation, reauthentication, frame protection, and idempotency.",
    "validation": "Approved finance workflow creates one result; missing-token, wrong-origin, framed, GET, canceled, and duplicate requests do not."
  },
  {
    "id": "F-05",
    "title": "Certificate renewal required",
    "severity": "Medium",
    "fact": "The fictional production certificate expires in twenty-one days.",
    "impact": "A lifecycle and availability risk exists; no current trust failure is confirmed.",
    "owner": "Infrastructure Operations",
    "remediation": "Issue, stage, validate, activate, monitor, and retire the old certificate through controlled change.",
    "validation": "Production, recovery, identity redirects, APIs, and browser trust pass after activation; rollback remains available."
  },
  {
    "id": "F-06",
    "title": "Legacy error service differs from secure baseline",
    "severity": "High",
    "fact": "The fictional service reveals framework detail, runs debug mode, and exposes an unnecessary management listener.",
    "impact": "Configuration weaknesses are confirmed; credential, session, private-record, and administrative-action impact are not confirmed.",
    "owner": "Infrastructure Operations",
    "remediation": "Disable debug, remove the listener, apply standard errors and headers, and enforce version-controlled deployment settings.",
    "validation": "Legitimate error handling works; debug detail is absent; the listener is denied; drift monitoring remains healthy."
  },
  {
    "id": "F-07",
    "title": "Preference cookie is overbroad",
    "severity": "Low",
    "fact": "A fictional nonessential preference cookie is parent-domain scoped and lasts one year.",
    "impact": "The cookie reaches more hosts and lasts longer than required; it is not the primary session cookie.",
    "owner": "Student Services Technology",
    "remediation": "Make the cookie host scoped, path limited, shorter lived, minimal, and unnecessary for authorization.",
    "validation": "Required preferences work on the intended application while unrelated hosts and routes do not receive the cookie."
  },
  {
    "id": "F-08",
    "title": "Export detection overstates denied activity",
    "severity": "Medium",
    "fact": "The fictional rule uses request count without authorization, downstream, identity, or business outcome context.",
    "impact": "Expected or denied activity can receive excessive priority and create unnecessary response pressure.",
    "owner": "Security Operations",
    "remediation": "Add authorization result, database or export outcome, role, asset value, approved automation, and business context.",
    "validation": "Denied requests without downstream action receive review priority; allowed or committed unauthorized exports remain high priority."
  }
];

const validationTests = [
  {
    "test": "T-01 Approved teacher record access",
    "type": "Positive",
    "expected": "A fictional teacher can view only assigned support records.",
    "evidence": "Session, role, assignment, object, API allow, database read, and browser result.",
    "owner": "Student Services Technology"
  },
  {
    "test": "T-02 Other-record access",
    "type": "Negative",
    "expected": "A fictional teacher cannot view an unassigned student record.",
    "evidence": "Object and tenant check, API denial, no database result, safe response, and audit event.",
    "owner": "Web Platform Team"
  },
  {
    "test": "T-03 Approved administrator export",
    "type": "Positive",
    "expected": "A fictional administrator completes one approved export after reauthentication and dual approval.",
    "evidence": "Session, role, approvals, request, job, file, transaction, and audit records.",
    "owner": "District Applications Team"
  },
  {
    "test": "T-04 Teacher export denial",
    "type": "Negative",
    "expected": "A fictional teacher cannot load the route or call the export API.",
    "evidence": "Route denial, API denial, no export job, no file, and lower-priority review event.",
    "owner": "District Applications Team"
  },
  {
    "test": "T-05 Modern report input",
    "type": "Positive",
    "expected": "Approved department, sort, and paging values produce the correct summary.",
    "evidence": "Schema pass, authorization pass, server-defined mapping, prepared read, and expected rows.",
    "owner": "Web Platform Team"
  },
  {
    "test": "T-06 Unsupported report input",
    "type": "Negative",
    "expected": "Unknown fields, invalid types, excessive ranges, unsupported sort values, and unauthorized objects are rejected.",
    "evidence": "Validation denial, safe error, no database operation, and structured monitoring event.",
    "owner": "Web Platform Team"
  },
  {
    "test": "T-07 Plain announcement",
    "type": "Positive",
    "expected": "Fictional reserved characters display as visible text without creating new elements.",
    "evidence": "Stored value, API response, safe text binding, DOM result, and no policy violation.",
    "owner": "Communications Technology"
  },
  {
    "test": "T-08 Disallowed rich content",
    "type": "Negative",
    "expected": "Unsupported elements, attributes, destinations, and embeds are removed or displayed as text.",
    "evidence": "Sanitizer result, component output, browser DOM, policy event, and user-visible result.",
    "owner": "Communications Technology"
  },
  {
    "test": "T-09 Approved invoice action",
    "type": "Positive",
    "expected": "A fictional finance user reviews the exact invoice and creates one approval after reauthentication.",
    "evidence": "Session, token, origin, authorization, confirmation, idempotency, transaction, and business record.",
    "owner": "Finance Applications Team"
  },
  {
    "test": "T-10 Unsafe invoice requests",
    "type": "Negative",
    "expected": "Missing-token, wrong-origin, framed, GET, canceled, and duplicate requests create no extra approval.",
    "evidence": "Application denials, frame policy, transaction state, database state, and monitoring.",
    "owner": "Finance Applications Team"
  },
  {
    "test": "T-11 Secure configuration",
    "type": "Positive",
    "expected": "Approved login, logout, recovery, APIs, static content, and errors work under the new baseline.",
    "evidence": "Certificate, TLS, headers, cookies, routes, application health, and user workflows.",
    "owner": "Infrastructure Operations"
  },
  {
    "test": "T-12 Unsafe configuration conditions",
    "type": "Negative",
    "expected": "HTTP redirects safely, unapproved framing fails, debug detail is absent, management access is denied, and old certificate use ends.",
    "evidence": "Redirect, frame policy, error response, listener policy, certificate record, and monitoring.",
    "owner": "Infrastructure Operations"
  }
];

const closureCriteria = [
  "Every fictional finding has a named owner, severity, evidence references, scope, due date, and current status.",
  "Authentication, session, authorization, input, rendering, request-protection, transport, configuration, and logging controls have both positive and negative validation.",
  "No reviewed teacher request creates an export, file, database transaction, permission change, or business action.",
  "The legacy dynamic query path is replaced with strict server-defined choices and bound values.",
  "Plain text and approved rich text use separate, safe rendering paths across all identified viewers.",
  "Every sensitive state-changing route uses the approved method, anti-forgery control, authorization, confirmation, reauthentication where required, and idempotency.",
  "The replacement certificate is active across production and recovery paths, and the old certificate is retired safely.",
  "Debug mode, unnecessary management access, verbose errors, and baseline drift are removed or documented as approved exceptions.",
  "The preference cookie is narrowed and is not used for identity, role, tenant, permission, or authorization decisions.",
  "The export detection uses control and outcome context, preserves high-value cases, and passes true-positive and false-positive tests.",
  "Seven days of fictional monitoring show stable legitimate workflows, healthy source delivery, no new drift, and no related unexplained events.",
  "Residual risk, evidence gaps, accepted exceptions, rollback readiness, lessons learned, and final technical and business approvals are documented."
];

const commonMistakes = [
  "Writing the fictional case report before normalizing timestamps and validating raw source records.",
  "Treating one high-severity alert, status code, content-policy event, sign-in, click, or user report as proof of the whole incident.",
  "Combining confirmed facts and analyst conclusions in the same sentence without confidence or limitations.",
  "Ignoring legitimate explanations such as old bookmarks, retries, approved administration, monitoring, and user mistakes.",
  "Claiming no impact because a control blocked one request without checking database, transaction, file, account, and business records.",
  "Claiming compromise because a code or configuration weakness exists without evidence of successful use.",
  "Remediating only the visible route while leaving API, mobile, legacy, preview, export, error, and administrative paths unchanged.",
  "Using broad containment that disables unrelated accounts, applications, or business workflows.",
  "Testing only the fixed happy path and skipping invalid, unauthorized, duplicate, expired, cross-origin, framed, and rollback conditions.",
  "Closing before detection tuning, source health, ownership, monitoring, residual risk, and evidence gaps are resolved.",
  "Including real account names, hostnames, cookies, tokens, secrets, logs, routes, database records, screenshots, or private user data.",
  "Creating harmful payloads or testing real systems instead of using supplied inert fictional evidence."
];

const quizQuestions = [
  {
    "question": "What is the strongest first step in the fictional integrated lab?",
    "choices": [
      "Define scope, architecture, users, data flows, owners, trust boundaries, and evidence sources.",
      "Disable every account.",
      "Tune every alert to low severity.",
      "Write the executive summary before reviewing evidence."
    ],
    "answer": 0,
    "explanation": "A defensible investigation begins with clear scope, architecture, ownership, and evidence coverage."
  },
  {
    "question": "A fictional teacher makes three export requests, all denied, and no export job exists. What is the strongest conclusion?",
    "choices": [
      "Repeated requests occurred and were denied; export impact is not confirmed.",
      "District data was stolen.",
      "The teacher is malicious.",
      "The application has no weaknesses."
    ],
    "answer": 0,
    "explanation": "Request occurrence, authorization decision, intent, and downstream impact remain separate."
  },
  {
    "question": "A fictional legacy report endpoint uses dynamic query construction. What may be concluded directly?",
    "choices": [
      "A code-level injection weakness exists and requires remediation; unauthorized data impact needs separate evidence.",
      "The entire database was copied.",
      "Every report request is harmful.",
      "The alert system caused the weakness."
    ],
    "answer": 0,
    "explanation": "A weakness can be confirmed without overstating exploitation or impact."
  },
  {
    "question": "Why are both positive and negative tests required?",
    "choices": [
      "The application must preserve approved workflows while reliably denying unsafe or unauthorized conditions.",
      "Positive tests alone prove every denial.",
      "Negative tests replace monitoring.",
      "Testing is only for user-interface changes."
    ],
    "answer": 0,
    "explanation": "Security changes should reduce risk without breaking legitimate use."
  },
  {
    "question": "Which finding statement is strongest?",
    "choices": [
      "The fictional legacy announcement component has an unsafe stored rendering path; visible layout impact is confirmed, while account or business impact is not confirmed.",
      "The application was fully compromised.",
      "The database is trusted, so no issue exists.",
      "The content-policy alert proves data loss."
    ],
    "answer": 0,
    "explanation": "The statement separates confirmed weakness, observed effect, and unconfirmed impact."
  },
  {
    "question": "What should happen before closing the fictional case?",
    "choices": [
      "Validate controls, legitimate workflows, denied cases, data and business state, monitoring, evidence gaps, residual risk, rollback, and owner approval.",
      "Close when the first fix deploys.",
      "Close when alerts stop for one hour.",
      "Close after changing the password."
    ],
    "answer": 0,
    "explanation": "Professional closure requires technical, business, monitoring, evidence, and governance validation."
  },
  {
    "question": "Which portfolio practice is safest?",
    "choices": [
      "Use fictional names, identifiers, screenshots, evidence, and summaries with no real credentials, tokens, private records, or sensitive infrastructure details.",
      "Publish real session IDs to prove authenticity.",
      "Include private production logs.",
      "Reuse real customer data with names removed only."
    ],
    "answer": 0,
    "explanation": "A portfolio artifact should demonstrate reasoning without exposing real systems or people."
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
        Module Test
      </Link>
    </div>
  );
}

function LabPhaseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Lab Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Phases from Scope to Professional Closure
      </h2>

      <div className="mt-6 grid gap-5">
        {labPhases.map((item) => (
          <div
            key={item.phase}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.phase}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.goal}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Required evidence
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.requiredEvidence}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Deliverable
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.deliverable}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Quality check
                </p>

                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.qualityCheck}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AssetGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Architecture
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Fictional Assets in the Meadowbrook Environment
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {caseAssets.map((item) => (
          <div
            key={item.asset}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.asset}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Owner
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.owner}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Data
              </p>

              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.data}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Critical controls
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.criticalControls}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceBundleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Bundle
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Twenty-Four Records with Clear Evidence Limits
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceBundle.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.18fr_0.32fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="font-mono text-sm font-black text-cyan-300">
                {item.id}
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Source
              </p>

              <p className="mt-2 font-black text-white">{item.source}</p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Record
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.record}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Supports
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Does not prove
              </p>

              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.doesNotProve}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FindingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Findings
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Evidence-Based Findings
      </h2>

      <div className="mt-6 grid gap-5">
        {findings.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.id}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.title}
                </h3>
              </div>

              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                {item.severity}
              </span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Confirmed fact
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.fact}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Impact statement
                </p>

                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.impact}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Remediation
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.remediation}
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Validation
                </p>

                <p className="mt-2 text-sm leading-6 text-cyan-50">
                  {item.validation}
                </p>
              </div>
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

function ValidationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Validation Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Twelve Positive and Negative Tests
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {validationTests.map((item) => (
          <div
            key={item.test}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-black text-white">{item.test}</h3>

              <span
                className={
                  item.type === "Positive"
                    ? "rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-emerald-200"
                    : "rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-red-200"
                }
              >
                {item.type}
              </span>
            </div>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Expected result
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.expected}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Required evidence
              </p>

              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.evidence}
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

function ClosureGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Closure Criteria
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Twelve Conditions Required Before Case Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {closureCriteria.map((item, index) => (
          <div
            key={item}
            className="flex gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
              {index + 1}
            </div>

            <p className="text-sm font-semibold leading-6 text-emerald-50">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WebSecurityDefenseLabPage() {
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
              Module I8
            </span>

            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.8 Web Security Defense Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete an integrated fictional investigation covering web
            architecture, identity, sessions, access control, input handling,
            browser defense, request protection, transport, configuration,
            logging, findings, remediation, validation, monitoring, rollback,
            residual risk, and professional closure.
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
          lessonTitle="Web Security Defense Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Meadowbrook evidence bundle and will not test any real application.",
            "I will separate facts, conclusions, alternatives, evidence gaps, control results, user intent, data state, and business impact.",
            "I will preserve legitimate workflows while recommending narrow, owned, testable remediation.",
            "I will include positive tests, negative tests, monitoring, rollback, residual risk, and closure criteria.",
            "I will not include real credentials, cookies, tokens, accounts, logs, hostnames, routes, source code, screenshots, database records, or private data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Mission"
          title="Produce a Defensible Web Security Case Report"
        >
          <p className="leading-8">
            The fictional Meadowbrook environment contains several confirmed
            weaknesses, several controls that worked, several alerts that need
            context, and several areas where impact is not confirmed. Your task
            is not to make the case sound dramatic. Your task is to make every
            conclusion traceable to evidence, every remediation proportional,
            every validation repeatable, and every limitation visible.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak final report
              </p>

              <p className="mt-2 leading-7">
                “The fictional application was compromised because several
                alerts and weaknesses appeared.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong final report
              </p>

              <p className="mt-2 leading-7">
                “Eight specific findings are supported, several controls
                prevented impact, selected downstream effects are not confirmed,
                and each remediation has owners, tests, monitoring, rollback, and
                closure criteria.”
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
          eyebrow="Safety Boundary"
          title="Fictional, Inert, Authorized, and Defensive"
        >
          <p className="leading-8">
            All accounts, sessions, cookies, tokens, routes, requests, values,
            pages, scripts, services, certificates, logs, hosts, devices,
            databases, users, and organizations in this lab are fictional. Do not
            create harmful payloads, active scripts, hidden forms, overlays,
            exploit attempts, account access, real scans, or unauthorized tests.
            Analyze only the provided safe records and defensive controls.
          </p>
        </SectionCard>

        <LabPhaseGuide />
        <AssetGuide />

        <SectionCard
          eyebrow="Case Method"
          title="Use the Fact–Conclusion–Gap Model"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
              <p className="font-black text-blue-100">Confirmed fact</p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                A fictional source directly records the request, decision,
                object, session, transaction, error, configuration, or business
                state.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5">
              <p className="font-black text-emerald-100">Reasonable conclusion</p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Several fictional facts support an interpretation with stated
                confidence and alternative explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-100">Evidence gap</p>

              <p className="mt-2 text-sm leading-6 text-yellow-50">
                Missing, stale, inconsistent, or unavailable fictional records
                limit the conclusion and require an owner, due date, and temporary control.
              </p>
            </div>
          </div>
        </SectionCard>

        <EvidenceBundleGuide />
        <FindingGuide />
        <ValidationGuide />
        <ClosureGuide />

        <FakeDashboardCard
          title="Fake Web Security Defense Case Dashboard"
          subtitle="Integrated fictional case status for the Meadowbrook web environment."
          metrics={[
            {
              label: "Evidence records",
              value: "48",
              note: "Fictional architecture, identity, session, access, input, rendering, request, configuration, log, user, and business records.",
            },
            {
              label: "Confirmed findings",
              value: "8",
              note: "Route gating, dynamic construction, rendering, request method, certificate, configuration, cookie, and detection findings.",
            },
            {
              label: "Validation tests",
              value: "12",
              note: "Positive and negative tests across authorized use, denied use, browser behavior, transactions, and configuration.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Web Defense Review Requires Coordinated Remediation"
          severity="High"
          time="04:00 PM"
          source="Fake Meadowbrook Web Security Case Console"
          details="The fictional case contains eight confirmed findings across application routing, dynamic query construction, browser rendering, state-changing requests, certificate lifecycle, production configuration, cookie scope, and detection logic. Several defensive controls worked and no reviewed teacher export, cross-site invoice approval, credential theft, session compromise, or private-record exposure is confirmed."
          recommendation="Assign accountable owners, preserve the evidence bundle, remediate each finding narrowly, validate approved and denied workflows, monitor application and detection health, retain rollback, document evidence gaps and residual risk, and close only after technical and business criteria are met."
        />

        <FakeLogPanel
          title="Fake Integrated Case Timeline"
          logs={[
            "08:00 CERT_MONITOR certificate_expires_in='21d'",
            "08:15 CONFIG_REVIEW legacy_error_debug='true' management_listener='open'",
            "09:18 RENDER_REVIEW legacy_announcement_sink='raw_markup'",
            "10:07 ACCESS_REVIEW teacher_export='deny' database_export='none'",
            "11:42 ALERT export_requests='3' severity='high' outcome_context='missing'",
            "13:28 INPUT_REVIEW legacy_sort_construction='unsafe'",
            "15:12 REQUEST_REVIEW cross_site_invoice='deny' token='missing' origin='unapproved'",
            "15:18 ROUTE_REVIEW legacy_invoice_method='GET'",
            "16:00 CASE_OPEN findings='8' confirmed_export_impact='0'",
            "DAY1 CONTAIN legacy_routes='restricted' debug_listener='removed'",
            "DAY2 REMEDIATE route_gate='added' queries='parameterized' rendering='safe'",
            "DAY3 REMEDIATE invoice='POST+token+confirmation+idempotency'",
            "DAY4 REMEDIATE certificate='staged' cookie='narrowed' detection='tuned'",
            "DAY5 POSITIVE_TEST authorized_workflows='pass'",
            "DAY5 NEGATIVE_TEST unauthorized_and_unsafe_conditions='deny'",
            "DAY7 MONITOR drift='0' new_policy_events='0' business_health='stable'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated Case Conclusion Is Best Supported?"
          evidence={[
            "The fictional teacher export requests were denied and no export job, file, transaction, or data action exists.",
            "The legacy report endpoint has unsafe dynamic query construction, but unauthorized data access is not confirmed.",
            "The legacy announcement component has an unsafe stored rendering path and visible layout impact, but account or business impact is not confirmed.",
            "The cross-site invoice request was denied, while a separate state-changing GET route required remediation.",
            "The certificate lifecycle, debug service, management listener, preference cookie, and detection logic each have confirmed control gaps.",
            "After remediation, approved workflows succeed and unsafe, unauthorized, framed, duplicate, invalid, and debug conditions are denied.",
            "Seven days of fictional monitoring show stable business operation and no related unexplained events.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional environment had eight specific web-security findings, several preventive controls successfully limited impact, selected downstream harms are not confirmed, and closure depends on completed validation, monitoring, residual-risk review, and owner approval.",
            "The entire district environment was fully compromised.",
            "No security work was needed because several requests were denied.",
            "Every alert should be suppressed because no export occurred.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports specific weaknesses and successful control actions without supporting a claim of total compromise or zero risk."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken an Integrated Case Report"
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

        <ScenarioDecisionLab
          title="Several Weaknesses Exist but Impact Is Limited"
          scenario="A fictional application has a dynamic query weakness, an unsafe rendering component, a state-changing GET route, and a debug service. The reviewed requests were denied or produced no confirmed data or business change."
          choices={[
            {
              label: "Choice A",
              response:
                "Document each weakness separately, state the confirmed and unconfirmed impact, assign owners, contain narrowly, remediate every affected path, validate approved and denied behavior, monitor, and record residual risk.",
              outcome:
                "Best defensive choice. It takes the weaknesses seriously without overstating impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare total compromise because several weaknesses exist.",
              outcome:
                "Unsupported. Weaknesses do not automatically prove successful harmful use.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the weaknesses because no data loss is confirmed.",
              outcome:
                "Unsafe. Confirmed weaknesses still require remediation and validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Fix Passes Positive Tests but Fails One Negative Test"
          scenario="A fictional administrator can complete the approved export after remediation, but a teacher can still load the administrative page shell even though the API denies the export."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the finding open, preserve the successful API denial, correct route gating, rerun teacher and administrator tests, review alert behavior, monitor, and close only after both positive and negative criteria pass.",
              outcome:
                "Best defensive choice. Closure requires the full control design, not only one successful workflow.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close because the administrator workflow works.",
              outcome:
                "Incomplete. The unauthorized route condition remains.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the API authorization because the route should handle everything.",
              outcome:
                "Unsafe. Layered server-side authorization should remain in place.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Web Security Defense Lab Checklist"
          items={[
            "I defined the fictional application scope, architecture, owners, users, data, business workflows, trust boundaries, and evidence sources.",
            "I separated authentication, session, authorization, user intent, control result, data state, and business impact.",
            "I reviewed fictional input contracts, parameterization, safe APIs, output contexts, sanitization, request protection, and least privilege.",
            "I reviewed fictional TLS, certificates, headers, cookies, proxies, errors, services, secrets, runtimes, and drift.",
            "I normalized timestamps and correlated request, trace, session, account, device, object, transaction, route, and business identifiers.",
            "I documented confirmed facts, reasonable conclusions, alternatives, confidence, evidence gaps, and limitations.",
            "I created narrow remediation with named owners, due dates, positive tests, negative tests, monitoring, and rollback.",
            "I verified that legitimate workflows still work and unsafe or unauthorized conditions are denied.",
            "I documented residual risk, accepted exceptions, monitoring period, lessons learned, and closure approvals.",
            "I used only fictional evidence and did not create harmful payloads or expose real credentials, logs, systems, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.8 Mini Quiz: Web Security Defense Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Web Security Defense Case Report using at least forty-eight architecture, identity, session, access, input, rendering, request-protection, transport, configuration, alert, log, browser, database, user, business, remediation, validation, monitoring, and closure records. Include an executive summary, scope, architecture map, evidence index, normalized timeline, eight findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, monitoring plan, lessons learned, and closure criteria."
          tips={[
            "Use only fictional names, accounts, sessions, requests, routes, applications, certificates, logs, records, users, and organizations.",
            "For every finding, include confirmed fact, impact statement, evidence references, owner, remediation, validation, and limitation.",
            "Keep control weakness, attempted activity, successful action, user effect, data state, and business impact separate.",
            "Do not include real credentials, cookies, tokens, hostnames, source code, screenshots, logs, database records, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated web defense connects architecture, identity, sessions, access, input, rendering, request protection, configuration, logging, and business evidence.",
            "A confirmed weakness does not automatically prove successful harmful use, while a blocked request does not eliminate the need to review every affected path.",
            "Strong findings separate facts, conclusions, alternatives, confidence, limitations, owners, remediation, and validation.",
            "Positive tests preserve legitimate workflows, while negative tests prove unsafe and unauthorized conditions are denied.",
            "Monitoring, rollback, residual risk, evidence gaps, and owner approval are part of the control—not paperwork after the control.",
            "A safe portfolio artifact demonstrates professional reasoning using fictional evidence without exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I8
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