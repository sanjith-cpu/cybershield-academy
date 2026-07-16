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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/authentication-sessions-and-access-control`;

const objectives = [
  "Explain how fictional browsers, clients, networks, reverse proxies, web servers, application services, APIs, databases, and third-party systems work together.",
  "Break fictional HTTP communication into methods, URLs, headers, cookies, bodies, status codes, redirects, caching, and content types.",
  "Map trust boundaries and identify which data is controlled by users, applications, infrastructure, administrators, and external services.",
  "Separate request intent, server processing, application authorization, database state, response behavior, browser rendering, and confirmed business impact.",
  "Create a professional fictional Web Request Flow Map with evidence, controls, owners, gaps, validation, and residual risk.",
];

const vocabulary = [
  [
    "Browser",
    "A fictional client application that creates requests, stores selected state, processes responses, enforces browser policies, and renders content.",
  ],
  [
    "Web server",
    "A fictional service that accepts network requests, applies transport or routing behavior, serves content, or forwards work to an application.",
  ],
  [
    "Application server",
    "A fictional service that performs business logic, validates requests, checks authorization, communicates with data stores, and creates responses.",
  ],
  [
    "HTTP request",
    "A fictional message from a client to a server containing a method, target, headers, optional body, and connection context.",
  ],
  [
    "HTTP response",
    "A fictional server reply containing a status code, headers, optional body, and instructions that may affect browser behavior.",
  ],
  [
    "Method",
    "A fictional request verb such as GET, POST, PUT, PATCH, DELETE, HEAD, or OPTIONS that describes the intended operation.",
  ],
  [
    "URL",
    "A fictional address describing the scheme, host, port, path, query, and optional fragment used to identify or reach a resource.",
  ],
  [
    "Header",
    "A fictional metadata field carrying information about content, identity, caching, origin, browser behavior, routing, and processing.",
  ],
  [
    "Cookie",
    "A fictional browser-managed value sent under defined domain, path, security, and same-site conditions.",
  ],
  [
    "Status code",
    "A fictional three-digit response value that summarizes whether a request succeeded, redirected, failed, or encountered a server condition.",
  ],
  [
    "API",
    "A fictional application interface that allows software clients and services to exchange structured requests and responses.",
  ],
  [
    "Trust boundary",
    "A fictional point where data, identity, control, ownership, or security assumptions change between components.",
  ],
];

const architectureLayers = [
  {
    layer: "User and browser",
    role:
      "A fictional user chooses an action, and the browser creates a request, applies local state, sends selected cookies, and renders the response.",
    evidence:
      "User report, browser history, developer-safe training capture, page state, client timestamp, and browser policy records.",
    defensiveQuestion:
      "Which parts of the action are directly controlled by the user, browser, page code, extension, or local device?",
    limitation:
      "Browser evidence may be incomplete and does not by itself prove what the server processed or changed.",
  },
  {
    layer: "Network and name resolution",
    role:
      "Fictional network and name services direct the client toward the intended host and transport path.",
    evidence:
      "Approved training DNS records, connection logs, destination host, certificate metadata, proxy records, and network timestamps.",
    defensiveQuestion:
      "Did the request reach the expected host and transport path?",
    limitation:
      "Network evidence can show connection behavior without revealing complete application intent or authorization.",
  },
  {
    layer: "Reverse proxy or gateway",
    role:
      "A fictional edge service receives requests, terminates transport, applies routing, rate, header, policy, or filtering controls, and forwards approved traffic.",
    evidence:
      "Request ID, route, source label, method, path, status, latency, policy decision, and upstream service.",
    defensiveQuestion:
      "Which control acted before the request reached the application?",
    limitation:
      "The edge may not understand the full business meaning of the request or the database result.",
  },
  {
    layer: "Web server",
    role:
      "A fictional web server serves static content or forwards dynamic requests to the application.",
    evidence:
      "Access logs, error logs, virtual host, path, response status, content type, size, and server timing.",
    defensiveQuestion:
      "Was the requested resource served directly or passed to another component?",
    limitation:
      "A web-server success code does not prove the application completed the intended business action.",
  },
  {
    layer: "Application service",
    role:
      "A fictional application parses input, validates data, checks authentication and authorization, performs business logic, and creates a response.",
    evidence:
      "Application logs, route handler, validation result, account, role, object ID, action, error, and correlation ID.",
    defensiveQuestion:
      "Which validation, authorization, and business rules were applied?",
    limitation:
      "Application logs can be incomplete, misconfigured, delayed, or missing important context.",
  },
  {
    layer: "API service",
    role:
      "A fictional API exchanges structured data with browser clients, mobile apps, internal services, or trusted third parties.",
    evidence:
      "Endpoint, method, request ID, token context, schema result, status, object, and caller identity.",
    defensiveQuestion:
      "Which client or service called the API, and which contract and permissions applied?",
    limitation:
      "A valid API response does not prove every downstream action or business assumption was correct.",
  },
  {
    layer: "Database or data store",
    role:
      "A fictional data store reads or writes application records under a service identity and query context.",
    evidence:
      "Query label, transaction ID, object, row or document count, result, service identity, and commit or rollback status.",
    defensiveQuestion:
      "Did the requested data state actually change, and under which authorized service context?",
    limitation:
      "Database evidence may show state change without explaining the user intent or complete application workflow.",
  },
  {
    layer: "Third-party service",
    role:
      "A fictional external provider supports identity, payments, messaging, storage, analytics, or another business function.",
    evidence:
      "Service request ID, tenant, account, callback, webhook, status, owner, and approved integration record.",
    defensiveQuestion:
      "Is the external dependency expected, approved, authenticated, and limited to the required purpose?",
    limitation:
      "Third-party visibility and retention may differ from the organization’s own systems.",
  },
];

const httpMethods = [
  {
    method: "GET",
    intendedUse:
      "Retrieve a fictional page, record, image, document, or other representation without intentionally changing server-side business state.",
    evidence:
      "Path, query, headers, account or session context, response status, content type, and application read event.",
    caution:
      "A poorly designed application may still change state during GET, and query values remain user controlled.",
  },
  {
    method: "POST",
    intendedUse:
      "Submit fictional data, create a record, start a workflow, upload content, or perform another state-changing action.",
    evidence:
      "Route, content type, body validation, session, anti-forgery control, authorization, application result, and database transaction.",
    caution:
      "Method choice alone does not prove validation, authorization, or safe processing.",
  },
  {
    method: "PUT",
    intendedUse:
      "Replace a fictional resource representation at a known target.",
    evidence:
      "Object ID, request body, version, account, role, authorization result, and final stored state.",
    caution:
      "The application must still protect object ownership, fields, and unintended overwrite.",
  },
  {
    method: "PATCH",
    intendedUse:
      "Apply a fictional partial update to selected fields of a resource.",
    evidence:
      "Target object, changed fields, prior value, new value, account, authorization, and transaction result.",
    caution:
      "Fields omitted from the visible interface may still require server-side protection.",
  },
  {
    method: "DELETE",
    intendedUse:
      "Request removal or deactivation of a fictional resource.",
    evidence:
      "Object, actor, role, confirmation, anti-forgery state, application result, and database or audit record.",
    caution:
      "Deletion may be soft, delayed, reversible, restricted, or denied even when the request reaches the server.",
  },
  {
    method: "HEAD",
    intendedUse:
      "Request fictional response metadata without the normal response body.",
    evidence:
      "Target, headers, status, cache information, and server handling.",
    caution:
      "Metadata can still reveal application behavior and should follow the same authorization expectations as the related resource.",
  },
  {
    method: "OPTIONS",
    intendedUse:
      "Describe fictional communication options or participate in browser cross-origin checks.",
    evidence:
      "Requested method, origin, allowed methods, allowed headers, credentials policy, and response.",
    caution:
      "Overbroad cross-origin configuration can expose application functions to unintended browser contexts.",
  },
  {
    method: "Other or unsupported",
    intendedUse:
      "Represent a fictional method not expected by the route or application.",
    evidence:
      "Method, route, gateway result, server status, application handling, and policy decision.",
    caution:
      "Unexpected methods should be handled consistently without exposing debug detail or bypassing controls.",
  },
];

const urlParts = [
  {
    part: "Scheme",
    example: "https",
    meaning:
      "The fictional protocol used to communicate with the destination.",
    defensiveReview:
      "Confirm secure transport requirements and expected application behavior.",
  },
  {
    part: "Host",
    example: "portal.meadowbrook.example",
    meaning:
      "The fictional destination name used to identify the service.",
    defensiveReview:
      "Verify the exact expected parent domain and application owner.",
  },
  {
    part: "Port",
    example: "443",
    meaning:
      "The fictional network service endpoint, often implied by the scheme.",
    defensiveReview:
      "Confirm the service uses the approved transport and exposed interface.",
  },
  {
    part: "Path",
    example: "/student/profile",
    meaning:
      "The fictional resource or application route requested from the host.",
    defensiveReview:
      "Review route ownership, expected method, authorization, and object handling.",
  },
  {
    part: "Query",
    example: "?view=summary",
    meaning:
      "Fictional user-controlled values supplied after the path.",
    defensiveReview:
      "Validate each accepted name, type, range, length, and business meaning on the server.",
  },
  {
    part: "Fragment",
    example: "#settings",
    meaning:
      "A fictional client-side page location normally handled by the browser rather than sent in the HTTP request.",
    defensiveReview:
      "Review client-side code if fragment data influences rendering or application behavior.",
  },
];

const requestEvidence = [
  {
    source: "Browser record",
    supports:
      "The fictional user-visible page, navigation, form action, request time, local session context, and rendered result.",
    limitation:
      "The browser may not show hidden server processing, database state, or every redirect and background request.",
  },
  {
    source: "Reverse-proxy log",
    supports:
      "The fictional method, host, path, source label, request ID, response status, latency, route, and upstream service.",
    limitation:
      "It may not include full request bodies, business meaning, or database result.",
  },
  {
    source: "Web-server log",
    supports:
      "The fictional resource, status, content type, response size, server timing, and static or dynamic handling.",
    limitation:
      "A successful server response does not prove the application’s authorization or business result.",
  },
  {
    source: "Application log",
    supports:
      "The fictional route handler, account, role, object, validation, authorization, action, error, and decision.",
    limitation:
      "Logging may omit fields, expose only selected branches, or fail before an event is recorded.",
  },
  {
    source: "Identity or session record",
    supports:
      "The fictional sign-in, account, session, token, factor, device, logout, timeout, and risk context.",
    limitation:
      "A valid session does not prove the user is permitted to access every object or function.",
  },
  {
    source: "Database record",
    supports:
      "The fictional read, write, object, row count, transaction, commit, rollback, and final data state.",
    limitation:
      "It may not identify the original browser user without application correlation.",
  },
  {
    source: "User report",
    supports:
      "The fictional action the user intended, what appeared in the browser, and any unexpected behavior.",
    limitation:
      "Human memory and interpretation require technical correlation.",
  },
  {
    source: "Business-system owner",
    supports:
      "The fictional expected workflow, resource owner, approved action, record state, and business impact.",
    limitation:
      "Owner statements should be documented and matched with systems of record.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the user action",
    detail:
      "Record the fictional user, page, intended action, browser, time, account, expected result, and business purpose.",
  },
  {
    step: "2",
    title: "Decompose the request",
    detail:
      "Identify fictional scheme, host, port, path, query, method, headers, cookies, content type, body, and origin context.",
  },
  {
    step: "3",
    title: "Map the server path",
    detail:
      "Follow the fictional request through edge, web server, application, API, database, third-party service, and response.",
  },
  {
    step: "4",
    title: "Identify trust boundaries",
    detail:
      "Mark where fictional user input, identity, sessions, services, data, and ownership assumptions change.",
  },
  {
    step: "5",
    title: "Correlate the outcome",
    detail:
      "Compare fictional response status, application decision, authorization, database state, browser result, and business record.",
  },
  {
    step: "6",
    title: "Validate and document",
    detail:
      "Test expected use and denied conditions with safe supplied evidence, assign owners, record gaps, and document residual risk.",
  },
];

const requestParts = [
  {
    part: "Request line",
    example: "GET /student/profile?view=summary HTTP/1.1",
    role:
      "States the fictional method, request target, and protocol version.",
    review:
      "Confirm the route expects the method and that every path and query value is validated server side.",
  },
  {
    part: "Host header",
    example: "Host: portal.meadowbrook.example",
    role:
      "Identifies the fictional host the client intends to reach.",
    review:
      "Confirm routing and application logic do not trust arbitrary host values for sensitive links, redirects, or decisions.",
  },
  {
    part: "Content-Type",
    example: "Content-Type: application/json",
    role:
      "Describes the fictional format of a request or response body.",
    review:
      "Accept only expected formats and parse them with the correct safe handler.",
  },
  {
    part: "Accept header",
    example: "Accept: text/html, application/json",
    role:
      "Describes which fictional response formats the client can process.",
    review:
      "Ensure content negotiation does not bypass authorization or expose unexpected representations.",
  },
  {
    part: "Cookie header",
    example: "Cookie: session=training-session-label",
    role:
      "Carries fictional browser-managed state that may identify a session or preference.",
    review:
      "Treat cookie values as untrusted input and validate the associated server-side session.",
  },
  {
    part: "Authorization header",
    example: "Authorization: Bearer fictional-token-label",
    role:
      "Carries fictional credentials or tokens for an API or protected route.",
    review:
      "Validate token integrity, audience, issuer, expiration, scope, account state, and route authorization.",
  },
  {
    part: "Origin and Referer context",
    example: "Origin: https://portal.meadowbrook.example",
    role:
      "Provides fictional browser context about where a request was initiated.",
    review:
      "Use as one control input for state-changing browser requests, not as the only authorization decision.",
  },
  {
    part: "Request body",
    example: '{ "displayName": "Student Example" }',
    role:
      "Carries fictional submitted fields, structured data, form values, or file metadata.",
    review:
      "Apply schema, type, length, range, authorization, business-rule, and safe-processing controls.",
  },
];

const responseParts = [
  {
    part: "Status line",
    example: "HTTP/1.1 403 Forbidden",
    role:
      "Summarizes the fictional server result for the request.",
    review:
      "Correlate the status with application authorization, database state, and the user-visible result.",
  },
  {
    part: "Content-Type",
    example: "Content-Type: application/json",
    role:
      "Tells the fictional browser or client how to interpret the response body.",
    review:
      "Return the intended type and prevent content from being interpreted in a more dangerous context.",
  },
  {
    part: "Set-Cookie",
    example: "Set-Cookie: session=label; Secure; HttpOnly; SameSite=Lax",
    role:
      "Instructs the fictional browser to store cookie state under defined conditions.",
    review:
      "Use secure attributes, narrow scope, rotation, expiration, and server-side session controls.",
  },
  {
    part: "Location",
    example: "Location: /signin",
    role:
      "Directs the fictional client to another route after a redirect response.",
    review:
      "Validate redirect destinations and avoid constructing trusted redirects from untrusted input.",
  },
  {
    part: "Cache instructions",
    example: "Cache-Control: no-store",
    role:
      "Tells fictional browsers and intermediaries how they may store or reuse a response.",
    review:
      "Prevent sensitive account, identity, payment, or personal pages from being stored inappropriately.",
  },
  {
    part: "Browser security headers",
    example: "Content-Security-Policy: default-src 'self'",
    role:
      "Provides fictional browser-enforced restrictions for content, framing, transport, and related behavior.",
    review:
      "Design policy around the application’s actual resources and validate that required functions still work.",
  },
  {
    part: "Response body",
    example: '{ "result": "denied", "requestId": "REQ-2041" }',
    role:
      "Contains the fictional page, data, message, or result returned to the client.",
    review:
      "Return only authorized data, encode output for its context, and avoid unnecessary internal details.",
  },
  {
    part: "Correlation header",
    example: "X-Request-ID: REQ-2041",
    role:
      "Provides a fictional identifier that can connect browser, proxy, application, and database records.",
    review:
      "Generate safely, preserve consistently, and avoid treating client-supplied identifiers as trusted without controls.",
  },
];

const trustBoundaries = [
  {
    boundary: "User to browser interface",
    untrustedData:
      "Fictional text, selections, files, clicks, pasted values, and navigation choices.",
    expectedControls:
      "Clear interface, client-side usability checks, safe defaults, confirmation for sensitive actions, and server-side enforcement.",
    evidence:
      "Page design, form definition, browser record, user report, and server validation result.",
  },
  {
    boundary: "Browser to web edge",
    untrustedData:
      "Fictional methods, paths, queries, headers, cookies, bodies, origins, and request frequency.",
    expectedControls:
      "TLS, routing policy, request limits, expected-host checks, size limits, filtering, and correlation IDs.",
    evidence:
      "Connection, certificate, reverse-proxy, request, policy, rate, and routing records.",
  },
  {
    boundary: "Edge to application",
    untrustedData:
      "Forwarded fictional request values plus edge-added identity, source, and policy context.",
    expectedControls:
      "Trusted proxy configuration, header normalization, authentication verification, and application-side validation.",
    evidence:
      "Proxy route, upstream request, application entry, identity context, and request ID.",
  },
  {
    boundary: "Application route to business logic",
    untrustedData:
      "Fictional object IDs, fields, actions, workflow state, account claims, and submitted data.",
    expectedControls:
      "Schema validation, authorization, object ownership, state checks, safe error handling, and audit logging.",
    evidence:
      "Route handler, validation, authorization, object, account, business-rule, and decision logs.",
  },
  {
    boundary: "Application to database",
    untrustedData:
      "Fictional application parameters that can influence reads, writes, filters, ordering, and transactions.",
    expectedControls:
      "Parameterized access, least-privileged service identity, transaction control, data constraints, and audit records.",
    evidence:
      "Query label, service identity, object, transaction, rows affected, commit, rollback, and database owner records.",
  },
  {
    boundary: "Application to third party",
    untrustedData:
      "Fictional external requests, callbacks, webhook content, identities, files, and status results.",
    expectedControls:
      "Approved integration, service authentication, schema validation, tenant checks, replay protection, and failure handling.",
    evidence:
      "Integration record, service request ID, callback, tenant, signature result, status, and owner confirmation.",
  },
  {
    boundary: "Server response to browser rendering",
    untrustedData:
      "Fictional stored or reflected content, external resources, templates, scripts, styles, links, and files.",
    expectedControls:
      "Context-aware output encoding, safe templates, sanitization where needed, content policy, and correct content type.",
    evidence:
      "Response body, template route, content type, policy header, browser console, and rendered result.",
  },
  {
    boundary: "Application event to business decision",
    untrustedData:
      "Fictional status messages, workflow events, payment requests, role changes, approvals, and record updates.",
    expectedControls:
      "Systems of record, separation of duties, owner approval, audit trail, reconciliation, and independent validation.",
    evidence:
      "Application event, transaction record, owner approval, final state, notification, and business-system log.",
  },
];

const timeline = [
  {
    time: "10:14:02.110",
    source: "Browser",
    event:
      "A fictional student selects “View profile” while signed in to the approved Meadowbrook portal.",
    meaning:
      "Establishes the intended user action and browser context.",
  },
  {
    time: "10:14:02.128",
    source: "Browser request",
    event:
      "The browser creates GET /student/profile?view=summary for portal.meadowbrook.example and includes the fictional session cookie.",
    meaning:
      "Defines method, route, query, host, and selected client state.",
  },
  {
    time: "10:14:02.143",
    source: "Reverse proxy",
    event:
      "The fictional edge assigns request ID REQ-2041, confirms the expected host, and forwards the request to profile-service.",
    meaning:
      "Connects the browser request with the application route and upstream service.",
  },
  {
    time: "10:14:02.156",
    source: "Session service",
    event:
      "The fictional session is active for student-104 with role Student and managed-device context.",
    meaning:
      "Supports authenticated session context, not automatic access to every resource.",
  },
  {
    time: "10:14:02.168",
    source: "Application",
    event:
      "The profile route validates view=summary and maps the request to the current account’s own profile object.",
    meaning:
      "Shows input validation and server-side object selection.",
  },
  {
    time: "10:14:02.181",
    source: "Authorization",
    event:
      "The fictional application allows student-104 to read profile-104 and excludes administrative fields.",
    meaning:
      "Confirms object-level and field-level access decisions.",
  },
  {
    time: "10:14:02.197",
    source: "Database",
    event:
      "The fictional database returns one profile summary record and records no write transaction.",
    meaning:
      "Supports a successful read without server-side state change.",
  },
  {
    time: "10:14:02.215",
    source: "Application response",
    event:
      "The fictional application creates a 200 response containing only the approved summary fields and request ID REQ-2041.",
    meaning:
      "Connects authorization and data selection to the returned representation.",
  },
  {
    time: "10:14:02.233",
    source: "Reverse proxy",
    event:
      "The fictional edge returns status 200, content type application/json, and a short no-store cache policy.",
    meaning:
      "Confirms response transport and caching instructions at the edge.",
  },
  {
    time: "10:14:02.249",
    source: "Browser",
    event:
      "The fictional portal renders the student’s own profile summary without administrative controls.",
    meaning:
      "Confirms the user-visible outcome for the legitimate request.",
  },
  {
    time: "10:15:11.008",
    source: "Browser request",
    event:
      "A later fictional request targets /admin/users from the same student session.",
    meaning:
      "Introduces a request to a route outside the account’s expected role.",
  },
  {
    time: "10:15:11.026",
    source: "Application",
    event:
      "The fictional authorization layer denies the Student role before any administrative data query is created.",
    meaning:
      "Supports successful preventive control at the application boundary.",
  },
  {
    time: "10:15:11.041",
    source: "Response",
    event:
      "The fictional server returns 403 with request ID REQ-2050 and a generic access-denied message.",
    meaning:
      "Confirms the request was denied without exposing sensitive internal detail.",
  },
  {
    time: "10:15:11.060",
    source: "Database",
    event:
      "No fictional administrative query, record read, write, or transaction is recorded for REQ-2050.",
    meaning:
      "Supports no confirmed administrative data access or state change.",
  },
];

const commonMistakes = [
  "Treating a fictional URL as one simple string instead of separating scheme, host, port, path, query, and fragment.",
  "Assuming a successful HTTP status proves the user was authorized or the business action was correct.",
  "Assuming a 403 response proves the request was malicious rather than simply unauthorized for that account or route.",
  "Trusting client-side validation without confirming the fictional server applies its own validation and authorization.",
  "Treating cookies, headers, query values, path values, and request bodies as trusted because the browser created them.",
  "Assuming a valid session grants access to every object, role, route, field, or administrative function.",
  "Ignoring reverse proxies, APIs, background requests, redirects, third parties, and asynchronous application work.",
  "Treating a database read or write as self-explanatory without connecting it to the application request and business owner.",
  "Combining unrelated fictional events because they share a path or user but not a request, session, transaction, or correlation identifier.",
  "Publishing real cookies, tokens, URLs, internal hosts, request bodies, accounts, logs, screenshots, or application architecture.",
  "Testing real websites or trying to bypass access controls instead of using the supplied safe fictional evidence.",
  "Closing a finding after a code or configuration change without positive, negative, business, monitoring, and rollback validation.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of an HTTP request?",
    choices: [
      "A fictional client message containing a method, target, headers, optional body, and connection context.",
      "A guarantee that the server will change data.",
      "A database transaction created by the browser.",
      "Proof that a user is authorized for every route.",
    ],
    answer: 0,
    explanation:
      "The request describes a client-to-server message; server handling and authorization require separate evidence.",
  },
  {
    question:
      "Which URL component most directly identifies the fictional destination service name?",
    choices: [
      "Host",
      "Fragment",
      "Query value",
      "Response status",
    ],
    answer: 0,
    explanation:
      "The host identifies the destination name, while the path and query identify a resource and supplied values.",
  },
  {
    question:
      "Why must a fictional server validate query and body values even when the browser already validated them?",
    choices: [
      "Client-controlled checks can be changed, skipped, or reproduced outside the intended interface.",
      "Browsers never send request bodies.",
      "Server validation is only needed for administrators.",
      "A 200 response validates every input automatically.",
    ],
    answer: 0,
    explanation:
      "The server must enforce security and business rules at the trusted processing boundary.",
  },
  {
    question:
      "What does a fictional 200 response most directly support?",
    choices: [
      "The server reports successful handling at that response layer.",
      "Every authorization decision was correct.",
      "No sensitive data was exposed.",
      "A database write definitely occurred.",
    ],
    answer: 0,
    explanation:
      "Status codes summarize response handling, not every security or business result.",
  },
  {
    question:
      "A fictional student session requests an administrative route and receives 403 before a database query occurs. Which conclusion is strongest?",
    choices: [
      "The administrative request was denied by authorization controls, with no confirmed administrative data access.",
      "The student successfully accessed the data.",
      "The account is compromised.",
      "The database was deleted.",
    ],
    answer: 0,
    explanation:
      "Application denial plus absence of a related data query supports a blocked request without confirmed data impact.",
  },
  {
    question:
      "Which fictional source best confirms whether a record was committed or rolled back?",
    choices: [
      "Database transaction evidence correlated with the application request.",
      "The browser page title.",
      "The URL fragment.",
      "The user’s display name.",
    ],
    answer: 0,
    explanation:
      "Database evidence directly supports state and transaction results, while correlation connects it to the request.",
  },
  {
    question:
      "What is a trust boundary?",
    choices: [
      "A point where fictional data, identity, ownership, control, or security assumptions change between components.",
      "A guarantee that all input is safe.",
      "A browser bookmark.",
      "A status code group.",
    ],
    answer: 0,
    explanation:
      "Trust boundaries identify where explicit validation, authentication, authorization, and safe handling are needed.",
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
        Module Homepage
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

function ArchitectureGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Application Architecture
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers Behind One Web Page
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {architectureLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Role
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.role}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defender question
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveQuestion}
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

function MethodGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        HTTP Methods
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Method Categories and Their Evidence
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {httpMethods.map((item) => (
          <div
            key={item.method}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.method}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.intendedUse}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Review evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Caution
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.caution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function UrlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        URL Anatomy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Parts of a Fictional Web Address
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {urlParts.map((item) => (
          <div
            key={item.part}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.part}</h3>
            <p className="mt-2 font-mono text-sm text-blue-200">
              {item.example}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive review
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveReview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RequestResponseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Request and Response Anatomy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Read Both Directions of the Conversation
      </h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-black text-blue-100">
            Fictional request parts
          </h3>
          <div className="mt-4 grid gap-4">
            {requestParts.map((item) => (
              <div
                key={item.part}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <h4 className="font-black text-blue-100">{item.part}</h4>
                <p className="mt-2 break-words font-mono text-sm text-blue-50">
                  {item.example}
                </p>
                <p className="mt-3 text-sm leading-6 text-blue-50">
                  {item.role}
                </p>
                <p className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-50">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black text-purple-100">
            Fictional response parts
          </h3>
          <div className="mt-4 grid gap-4">
            {responseParts.map((item) => (
              <div
                key={item.part}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5"
              >
                <h4 className="font-black text-purple-100">{item.part}</h4>
                <p className="mt-2 break-words font-mono text-sm text-purple-50">
                  {item.example}
                </p>
                <p className="mt-3 text-sm leading-6 text-purple-50">
                  {item.role}
                </p>
                <p className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-50">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
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
        Eight Places Where Assumptions Must Change
      </h2>

      <div className="mt-6 grid gap-5">
        {trustBoundaries.map((item) => (
          <div
            key={item.boundary}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.boundary}</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Data crossing boundary
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.untrustedData}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Expected controls
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.expectedControls}
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Each Source Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {requestEvidence.map((item) => (
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Trace a Web Request in Six Steps
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
        Correlated Request Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Profile Request and Denied Admin Request
      </h2>

      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.25fr_0.35fr_1fr_1fr]"
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

export default function WebApplicationsBrowsersAndHttpPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.1 Web Applications, Browsers, and HTTP
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Build a defensive mental model of fictional browsers, clients,
            networks, gateways, web servers, applications, APIs, databases,
            requests, responses, URLs, methods, headers, cookies, status codes,
            trust boundaries, and evidence-based investigation.
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
          lessonTitle="Web Applications, Browsers, and HTTP"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional web page can involve a browser, network, gateway, server, application, API, database, identity service, and third party.",
            "I will treat paths, queries, headers, cookies, bodies, files, and client-side state as untrusted until validated by the correct server-side control.",
            "I will separate request intent, response status, authorization result, database state, browser rendering, and business impact.",
            "I will use correlation identifiers and normalized timestamps when connecting evidence across systems.",
            "I will use only fictional requests, URLs, cookies, tokens, accounts, servers, databases, logs, users, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Click Can Produce Many Requests and Several Different Truths"
        >
          <p className="leading-8">
            A fictional user may click one button, but the browser can request a
            page, load styles and scripts, call an API, send cookies, follow a
            redirect, and render data from several services. A 200 response at
            one layer does not prove authorization, a 403 does not prove harmful
            intent, and a database event does not explain the entire user story.
            Defenders map the complete flow and state exactly what each source
            proves.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional server returned 200, so the request was secure
                and every business action succeeded.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The route returned 200; application, authorization, database,
                browser, and business evidence must confirm the complete result.”
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
          title="Defenders Need a Shared Model Before They Can Protect the Application"
        >
          <p className="leading-8">
            Web-security controls operate at different layers. Transport,
            authentication, authorization, validation, output handling, and
            database constraints answer different questions. Confusing these
            layers can hide weaknesses or break legitimate use.
          </p>
        </SectionCard>

        <ArchitectureGuide />
        <MethodGuide />
        <UrlGuide />
        <RequestResponseGuide />
        <TrustBoundaryGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Web and HTTP Terms
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
          title="Fake Web Request Flow Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Network portal."
          metrics={[
            {
              label: "Requests reviewed",
              value: "128",
              note: "Fictional browser, edge, server, application, API, database, and business records were correlated.",
            },
            {
              label: "Trust boundaries",
              value: "8",
              note: "User, browser, edge, application, database, third-party, rendering, and business-decision boundaries.",
            },
            {
              label: "Confirmed state changes",
              value: "3",
              note: "Most reviewed requests were reads, expected denials, validation failures, or evidence-incomplete cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Student Session Requests Administrative Route and Is Denied"
          severity="Medium"
          time="10:15 AM"
          source="Fake Web Defense Review Console"
          details="A fictional active student session requests /admin/users. The reverse proxy forwards the request, the application confirms the Student role, authorization denies the route, the server returns 403, and no administrative database query or state change is recorded."
          recommendation="Preserve the correlated request, session, application, authorization, response, and database evidence; verify whether the request came from normal navigation or unexpected client behavior; maintain the denial; review related requests; and document no confirmed administrative data access in the reviewed scope."
        />

        <FakeLogPanel
          title="Fake Browser-to-Database Request Timeline"
          logs={[
            "10:14:02.110 BROWSER action='view_profile' account='student-104'",
            "10:14:02.128 REQUEST method='GET' path='/student/profile' query='view=summary'",
            "10:14:02.143 EDGE request_id='REQ-2041' route='profile-service' host='expected'",
            "10:14:02.156 SESSION account='student-104' role='Student' state='active'",
            "10:14:02.168 APP validation='pass' object='profile-104' view='summary'",
            "10:14:02.181 AUTHZ decision='allow' fields='approved_summary'",
            "10:14:02.197 DATABASE operation='read' records='1' writes='0'",
            "10:14:02.215 RESPONSE status='200' content_type='application/json'",
            "10:14:02.249 BROWSER render='own_profile_summary' admin_controls='absent'",
            "10:15:11.008 REQUEST method='GET' path='/admin/users' session='same'",
            "10:15:11.026 AUTHZ decision='deny' reason='role_not_permitted'",
            "10:15:11.041 RESPONSE status='403' request_id='REQ-2050'",
            "10:15:11.060 DATABASE admin_queries='0' state_changes='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Request Conclusion Is Best Supported?"
          evidence={[
            "A fictional student session is active for account student-104.",
            "The session requests the administrative route /admin/users.",
            "The reverse proxy assigns request ID REQ-2050 and forwards the request normally.",
            "The application identifies the account role as Student.",
            "The authorization layer denies access before an administrative data query is created.",
            "The server returns 403 with a generic message.",
            "No administrative database read, write, or transaction is recorded for REQ-2050.",
            "The available evidence does not explain whether the request came from user action, a broken link, or unexpected client behavior.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The administrative request was attempted and correctly denied, with no confirmed administrative data access or state change; the request source remains an investigation question.",
            "The student successfully accessed every administrative record.",
            "The account is definitely compromised because the route was requested.",
            "The request never reached the application because the final status was 403.",
          ]}
          bestAnswer={0}
          explanation="Proxy and application evidence confirm the request reached the authorization layer. Authorization and database evidence support a successful denial without confirmed data impact, while intent and request origin remain uncertain."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Web Request Analysis"
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
          title="Build a Fictional Web Request Flow Map"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Student Portal Request Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-six supplied fictional records covering browser
                actions, URLs, methods, headers, cookies, request bodies,
                reverse-proxy events, web-server responses, application routes,
                validation, authorization, sessions, APIs, database activity,
                third-party calls, user reports, business owners, validation,
                monitoring, and evidence gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map the fictional user action from browser through every server-side component and back.</li>
                <li>Decompose each URL, method, header, cookie, body, response, and status.</li>
                <li>Identify every trust boundary and the controls expected at that boundary.</li>
                <li>Match request, session, application, database, user, and business correlation identifiers.</li>
                <li>Separate request intent, control action, application result, database state, browser result, and business impact.</li>
                <li>Classify expected success, expected denial, invalid request, suspicious pattern, confirmed weakness, confirmed impact, legitimate exception, or evidence incomplete.</li>
                <li>Write findings with facts, conclusions, alternatives, confidence, owners, remediation, validation, monitoring, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not test real websites,
            modify requests, bypass access controls, capture real cookies or
            tokens, submit harmful input, access accounts, run scanning or
            exploitation tools, or publish real URLs, internal hosts, request
            bodies, logs, users, screenshots, or application architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A 200 Response Appears, but the Business Record Is Missing"
          scenario="A fictional browser submits a profile update and receives status 200 with a success message. The application log records a validation pass, but no matching database transaction or final profile change is found."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the request and response, correlate the application and database identifiers, verify whether the action was queued, rolled back, or misreported, and state that the business change is not confirmed.",
              outcome:
                "Best defensive choice. A successful response at one layer does not prove the final system-of-record state.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the profile changed because the browser displayed success.",
              outcome:
                "Unsupported. Browser rendering and final database state require separate evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume the application was attacked because the database record is missing.",
              outcome:
                "Overstated. A defect, rollback, queue delay, logging gap, or other explanation may exist.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Authenticated Session Requests an Unauthorized Object"
          scenario="A fictional signed-in student session requests another student’s profile object. The route exists, but object-level authorization denies the request and the database records no returned profile data."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the authenticated session, object request, authorization denial, absence of returned data, request source, related attempts, and whether the event reflects user error, broken navigation, or suspicious behavior.",
              outcome:
                "Best defensive choice. Authentication and object authorization are separate, and the evidence supports a successful denial without confirmed data exposure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow the request because the user is already signed in.",
              outcome:
                "Unsafe. A valid session does not grant access to every object.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare data loss because the object ID appeared in the URL.",
              outcome:
                "Unsupported. The denial and database evidence show no confirmed data return.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Web Applications, Browsers, and HTTP Checklist"
          items={[
            "I map fictional users, browsers, networks, gateways, web servers, applications, APIs, databases, third parties, and business systems.",
            "I decompose fictional URLs into scheme, host, port, path, query, and fragment.",
            "I identify fictional methods, headers, cookies, content types, request bodies, response bodies, redirects, caching, and status groups.",
            "I treat browser-controlled values as untrusted and require server-side validation, authentication, authorization, and business rules.",
            "I identify trust boundaries and the specific controls and evidence expected at each boundary.",
            "I correlate browser, edge, server, application, session, API, database, user, and business records with identifiers and normalized time.",
            "I separate request intent, control decision, response status, database state, browser rendering, and business impact.",
            "I distinguish expected success, expected denial, invalid request, suspicious pattern, confirmed weakness, confirmed impact, legitimate exception, and evidence incomplete.",
            "I document facts, conclusions, alternatives, confidence, gaps, owners, remediation, validation, monitoring, rollback, and residual risk.",
            "I use only fictional evidence and never test real websites, capture real sessions, bypass controls, or publish private architecture and logs.",
          ]}
        />

        <MiniQuiz
          title="I8.1 Mini Quiz: Web Applications, Browsers, and HTTP"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Web Request Flow Map using at least thirty-six browser, URL, method, header, cookie, request-body, gateway, server, application, session, authorization, API, database, third-party, response, user, business, validation, monitoring, and evidence-gap records. Include architecture, trust boundaries, request and response anatomy, normalized timeline, classifications, findings, owners, remediation, validation, rollback, residual risk, and closure criteria."
          tips={[
            "Use only fictional URLs, requests, cookies, tokens, users, accounts, servers, databases, applications, and organizations.",
            "Include one expected read, one expected state change, one authorization denial, one validation failure, one legitimate exception, and one evidence-incomplete case.",
            "Clearly separate what the browser displayed, what the application decided, what the database recorded, and what the business system confirms.",
            "Do not include real cookies, tokens, internal hosts, request bodies, account data, logs, screenshots, or application architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A web page is the visible result of several fictional components and requests, not one isolated server action.",
            "URLs, methods, headers, cookies, bodies, status codes, and redirects each provide different evidence.",
            "Client-side controls improve usability, while trusted server-side controls enforce validation, authentication, authorization, and business rules.",
            "A successful status code does not prove correct authorization, safe output, database state, or business impact.",
            "Correlation identifiers and normalized timestamps connect browser, edge, application, database, user, and business evidence.",
            "Professional defense maps trust boundaries, documents uncertainty, tunes controls narrowly, and validates expected and denied behavior.",
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