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
const previousLesson = `${modulePath}/authentication-sessions-and-access-control`;
const nextLesson = `${modulePath}/cross-site-scripting-and-browser-side-defense`;

const objectives = [
  "Explain why fictional applications must treat browser, API, form, file, header, cookie, query, path, and third-party data as untrusted until validated.",
  "Distinguish input validation, canonicalization, parameterization, output encoding, sanitization, authorization, least privilege, and error handling.",
  "Identify defensive patterns for fictional database queries, operating-system commands, directory lookups, templates, interpreters, and structured data processing.",
  "Evaluate fictional request, application, database, error, user, and business evidence without creating or running harmful payloads.",
  "Create a professional fictional Input Validation and Injection Defense Review with findings, owners, remediation, validation, monitoring, and residual risk."
];

const vocabulary = [
  [
    "Untrusted input",
    "Fictional data that originates outside the trusted processing boundary or can be influenced by users, clients, services, files, requests, or integrations."
  ],
  [
    "Validation",
    "A defensive check that confirms fictional data matches the expected type, format, length, range, structure, relationship, and business rule."
  ],
  [
    "Allowlist",
    "A defensive rule that accepts only explicitly approved fictional values, characters, formats, operations, or states."
  ],
  [
    "Denylist",
    "A defensive rule that rejects known unwanted patterns but may miss unknown or transformed input."
  ],
  [
    "Canonicalization",
    "A defensive process that converts fictional data into one consistent representation before security decisions are made."
  ],
  [
    "Parameterization",
    "A defensive pattern that keeps fictional data separate from the structure or instructions of a query or command."
  ],
  [
    "Output encoding",
    "A defensive transformation that makes fictional data safe for the exact browser, document, script, URL, or other output context."
  ],
  [
    "Sanitization",
    "A defensive process that removes or transforms disallowed fictional content when safe transformation is appropriate and well defined."
  ],
  [
    "Injection",
    "A defensive category in which untrusted fictional data is interpreted as part of a command, query, expression, template, or instruction instead of remaining data."
  ],
  [
    "Prepared statement",
    "A fictional database operation in which the query structure is fixed and data values are bound separately."
  ],
  [
    "Least privilege",
    "The principle of limiting fictional application, service, database, file, and operating-system permissions to only what the approved function requires."
  ],
  [
    "Fail safely",
    "A defensive design in which invalid or unexpected fictional input is rejected or handled without exposing sensitive detail or creating unsafe side effects."
  ]
];

const inputSources = [
  {
    "source": "URL path values",
    "example": "A fictional route such as /student/record/742.",
    "expected": "Known route structure, approved identifier type, valid tenant and ownership relationship.",
    "risk": "The browser-controlled identifier may reference another object or reach unexpected application logic.",
    "control": "Server-side type, range, tenant, ownership, authorization, and object-existence checks."
  },
  {
    "source": "Query parameters",
    "example": "A fictional request such as ?view=summary&page=2.",
    "expected": "Approved names, enumerated values, bounded numeric ranges, and documented defaults.",
    "risk": "Unexpected values can alter filtering, sorting, file selection, redirects, or downstream processing.",
    "control": "Allowlist names and values, parse types, enforce bounds, canonicalize, and reject unknown options."
  },
  {
    "source": "Form fields",
    "example": "A fictional profile form with name, grade, department, and notification preference.",
    "expected": "Defined field set, data types, lengths, formats, relationships, and business rules.",
    "risk": "Client-side controls can be modified or bypassed, and hidden fields remain user controlled.",
    "control": "Repeat all important validation and authorization on the server."
  },
  {
    "source": "Request headers",
    "example": "Fictional host, content type, origin, language, forwarding, and client metadata.",
    "expected": "Known infrastructure behavior and values from trusted components where required.",
    "risk": "Some headers are client controlled or can be changed by intermediaries.",
    "control": "Trust only documented headers from authenticated infrastructure and validate all others."
  },
  {
    "source": "Cookies and tokens",
    "example": "Fictional session, preference, tenant, locale, or feature values.",
    "expected": "Protected integrity, narrow scope, approved claims, valid lifetime, and server-side verification.",
    "risk": "Unsigned or user-modifiable state can influence identity, tenant, role, or application behavior.",
    "control": "Use protected server-recognized state and never trust client claims without verification."
  },
  {
    "source": "Uploaded files",
    "example": "A fictional profile image or assignment document.",
    "expected": "Approved type, size, structure, owner, storage location, naming, and processing workflow.",
    "risk": "Displayed extension, content type, and actual file structure can differ.",
    "control": "Use generated names, structure validation, size limits, safe storage, approved scanning, and least-privileged processing."
  },
  {
    "source": "API and third-party data",
    "example": "A fictional vendor webhook or internal service response.",
    "expected": "Authenticated source, documented schema, expected event type, replay protection, and business ownership.",
    "risk": "External data can be malformed, stale, duplicated, unauthorized, or semantically unsafe.",
    "control": "Verify source and integrity, validate schema and business state, enforce idempotency, and log decisions."
  },
  {
    "source": "Database and stored content",
    "example": "A fictional comment, profile value, template field, or imported record saved earlier.",
    "expected": "Stored values remain subject to context-specific validation and output handling.",
    "risk": "Previously stored data can become unsafe when reused in a new context.",
    "control": "Validate at trust boundaries and encode or transform for the exact output or processing context."
  }
];

const validationDimensions = [
  {
    "dimension": "Presence",
    "question": "Is the fictional field required, optional, conditionally required, or forbidden for this operation?",
    "strongPattern": "Reject missing required fields and unexpected fields according to a documented schema.",
    "weakPattern": "Assume every field sent by the browser is expected.",
    "evidence": "Schema, request record, validation result, error response, and application branch."
  },
  {
    "dimension": "Type",
    "question": "Should the fictional value be a string, number, Boolean, date, identifier, object, array, or another exact type?",
    "strongPattern": "Parse and reject type mismatches before business logic.",
    "weakPattern": "Coerce any value into a string and continue.",
    "evidence": "Parser result, schema rule, normalized value, rejection reason, and test case."
  },
  {
    "dimension": "Length and size",
    "question": "What are the approved fictional minimum, maximum, file, array, and body sizes?",
    "strongPattern": "Enforce bounded limits at gateway, application, file, and data layers.",
    "weakPattern": "Rely only on a browser input length.",
    "evidence": "Limit configuration, request size, application result, error, and resource usage."
  },
  {
    "dimension": "Format",
    "question": "Which fictional characters, separators, encodings, and structural rules are valid?",
    "strongPattern": "Use well-tested parsers or exact formats instead of informal string matching.",
    "weakPattern": "Accept any text that contains one expected character.",
    "evidence": "Parser, canonical value, format rule, rejection, and unit tests."
  },
  {
    "dimension": "Range",
    "question": "What fictional numeric, date, count, amount, and time bounds are permitted?",
    "strongPattern": "Enforce server-side minimums, maximums, precision, and business limits.",
    "weakPattern": "Trust a slider, hidden field, or client-calculated amount.",
    "evidence": "Original value, parsed value, business rule, decision, and system-of-record result."
  },
  {
    "dimension": "Enumeration",
    "question": "Which fictional named values or states are allowed?",
    "strongPattern": "Map to a small approved set of server-defined values.",
    "weakPattern": "Pass arbitrary user text into a query, command, sort, template, or workflow selector.",
    "evidence": "Allowed set, received value, mapped internal value, decision, and test result."
  },
  {
    "dimension": "Relationship",
    "question": "Does the fictional value belong to the authenticated user, tenant, project, workflow, or approved owner?",
    "strongPattern": "Validate ownership, tenant, sequence, and current state using trusted server-side data.",
    "weakPattern": "Trust an object owner or tenant ID supplied by the client.",
    "evidence": "Session identity, object, tenant, workflow state, authorization decision, and database record."
  },
  {
    "dimension": "Business meaning",
    "question": "Is the fictional request reasonable and allowed in the current business context?",
    "strongPattern": "Enforce approval, amount, sequence, frequency, separation of duties, and high-risk confirmation.",
    "weakPattern": "Accept a technically valid request that violates the approved process.",
    "evidence": "Business policy, owner approval, transaction state, request history, and final result."
  }
];

const defenseLayers = [
  {
    "layer": "Client-side guidance",
    "purpose": "Give fictional users immediate feedback about expected fields, choices, and limits.",
    "benefit": "Improves usability and reduces accidental invalid submissions.",
    "limitation": "The client can be modified or bypassed, so it is not an authoritative security boundary.",
    "validation": "Confirm helpful feedback appears while the server independently rejects invalid requests."
  },
  {
    "layer": "Gateway limits",
    "purpose": "Apply fictional request size, rate, method, route, content-type, and known policy limits before application processing.",
    "benefit": "Reduces unnecessary load and rejects clearly unsupported traffic early.",
    "limitation": "The gateway usually lacks complete application and business context.",
    "validation": "Test approved traffic and rejected oversized, unsupported, or excessive requests."
  },
  {
    "layer": "Server-side schema validation",
    "purpose": "Confirm fictional fields, types, lengths, formats, nested structures, and unknown-property rules.",
    "benefit": "Creates a consistent contract before business logic.",
    "limitation": "Schema validation alone does not prove authorization or business approval.",
    "validation": "Use positive and negative schema tests and verify safe error handling."
  },
  {
    "layer": "Business-rule validation",
    "purpose": "Confirm fictional ownership, tenant, workflow, amount, state, frequency, and approval requirements.",
    "benefit": "Prevents technically valid but unauthorized or unreasonable actions.",
    "limitation": "Rules must be current, documented, and based on trusted server-side state.",
    "validation": "Test approved and denied workflow transitions with systems of record."
  },
  {
    "layer": "Parameterization",
    "purpose": "Keep fictional data values separate from database, directory, command, or interpreter structure.",
    "benefit": "Prevents data from being reinterpreted as instructions in supported interfaces.",
    "limitation": "Dynamic table, column, sort, operator, or command choices still require strict allowlists.",
    "validation": "Review code paths and test safe placeholder values without executing harmful input."
  },
  {
    "layer": "Context-specific output handling",
    "purpose": "Encode or safely render fictional data for HTML text, attributes, URLs, styles, scripts, documents, or other contexts.",
    "benefit": "Prevents stored or reflected data from becoming active browser content.",
    "limitation": "The correct method depends on the exact output context.",
    "validation": "Confirm supplied inert special-character samples render as data rather than markup or instructions."
  },
  {
    "layer": "Least privilege",
    "purpose": "Limit fictional application, database, file, operating-system, and service permissions.",
    "benefit": "Reduces impact if validation or processing fails.",
    "limitation": "Least privilege does not replace validation, authorization, or secure code.",
    "validation": "Confirm required operations succeed and unrelated read, write, execute, or administrative actions are denied."
  },
  {
    "layer": "Monitoring and safe errors",
    "purpose": "Record fictional validation failures, unusual patterns, denied operations, exceptions, and evidence without revealing sensitive details to users.",
    "benefit": "Supports detection, debugging, tuning, and investigation.",
    "limitation": "Logs must avoid credentials, secrets, tokens, private data, and unsafe raw content.",
    "validation": "Confirm users receive safe messages while defenders receive enough structured evidence."
  }
];

const injectionContexts = [
  {
    "context": "Database query construction",
    "unsafePattern": "A fictional application joins untrusted values into query structure.",
    "defense": "Use prepared statements or approved query builders with bound values and strict allowlists for identifiers or sort options.",
    "evidence": "Code-review finding, query label, parameter metadata, database result, service identity, and validation tests.",
    "impactQuestion": "Did the database read, modify, or expose anything outside the approved operation?"
  },
  {
    "context": "Operating-system or process invocation",
    "unsafePattern": "A fictional application builds a process instruction from untrusted text.",
    "defense": "Avoid shell interpretation, call fixed approved functions with separated arguments, allowlist operations, and run with least privilege.",
    "evidence": "Application function, approved operation, argument validation, process event, service identity, and file or system result.",
    "impactQuestion": "Was any process, file, command, or system state actually changed?"
  },
  {
    "context": "Directory or search filters",
    "unsafePattern": "A fictional application inserts untrusted values into filter structure.",
    "defense": "Use approved APIs, structured parameters, exact escaping where defined, allowlists, and least-privileged directory access.",
    "evidence": "Filter builder, bound values, directory request, result count, account, and authorization decision.",
    "impactQuestion": "Did the query return records outside the approved user, tenant, or purpose?"
  },
  {
    "context": "Template and expression processing",
    "unsafePattern": "A fictional template engine interprets untrusted text as an expression or instruction.",
    "defense": "Treat user content as data, use safe rendering APIs, restrict template features, and separate trusted templates from untrusted values.",
    "evidence": "Template source, data binding, rendering context, policy, output, and error record.",
    "impactQuestion": "Did the renderer evaluate instructions or only display data?"
  },
  {
    "context": "Structured document generation",
    "unsafePattern": "A fictional application writes user-controlled values into CSV, spreadsheet, XML, or another structured format without context-safe handling.",
    "defense": "Validate values, use safe libraries, encode for the target format, and warn or neutralize dangerous formula-like interpretation where appropriate.",
    "evidence": "Export job, field mapping, generated file metadata, approved safe rendering result, and user workflow.",
    "impactQuestion": "Did the generated document trigger active behavior or expose unintended data?"
  },
  {
    "context": "Dynamic redirect or destination",
    "unsafePattern": "A fictional application accepts an arbitrary destination from the request.",
    "defense": "Use server-defined route names or strict approved destination allowlists and display clear confirmation for sensitive transitions.",
    "evidence": "Received destination, normalized host, allowlist result, redirect response, and browser result.",
    "impactQuestion": "Was the user sent to an unapproved destination?"
  },
  {
    "context": "File and path selection",
    "unsafePattern": "A fictional application combines user input with a file or storage path.",
    "defense": "Use server-generated identifiers, approved storage APIs, canonical paths, fixed directories, ownership checks, and least privilege.",
    "evidence": "Object ID, storage mapping, canonical path, owner, requested operation, and result.",
    "impactQuestion": "Was any file outside the approved object or directory accessed?"
  },
  {
    "context": "Logging and monitoring",
    "unsafePattern": "A fictional application records untrusted data without structure or safe handling.",
    "defense": "Use structured fields, length limits, canonical event types, safe encoding, secret filtering, and controlled viewer behavior.",
    "evidence": "Event schema, stored fields, log-viewer rendering, retention, redaction, and alert result.",
    "impactQuestion": "Did the log become misleading, expose sensitive data, or create unsafe viewer behavior?"
  }
];

const evidenceMatrix = [
  {
    "source": "Request and gateway record",
    "supports": "The fictional method, route, content type, size, source label, request ID, gateway decision, and response status.",
    "limitation": "It may not show the full body, application interpretation, database result, or business meaning."
  },
  {
    "source": "Validation log",
    "supports": "The fictional field, rule, parser, normalized value category, rejection reason, and safe error decision.",
    "limitation": "Logs should avoid storing secrets, private data, or unsafe raw content."
  },
  {
    "source": "Application trace",
    "supports": "The fictional handler, account, object, business rule, parameterization path, action, exception, and correlation ID.",
    "limitation": "A missing log does not prove the application branch did not execute."
  },
  {
    "source": "Database or service record",
    "supports": "The fictional prepared operation, service identity, object, row count, transaction, commit, rollback, and final state.",
    "limitation": "The data layer may not directly identify the original user without application correlation."
  },
  {
    "source": "Error and response evidence",
    "supports": "The fictional user-visible status, safe message, internal error category, and whether sensitive detail was exposed.",
    "limitation": "A generic error can hide the exact cause unless correlated with internal records."
  },
  {
    "source": "Browser or client evidence",
    "supports": "The fictional submitted fields, displayed result, client validation, rendered output, and user interaction.",
    "limitation": "Client behavior is user controlled and cannot replace server-side evidence."
  },
  {
    "source": "User and business-owner report",
    "supports": "The fictional intended action, expected values, observed behavior, approved workflow, and business impact.",
    "limitation": "Statements should be matched with technical and system-of-record evidence."
  },
  {
    "source": "Code and configuration review",
    "supports": "The fictional validation schema, parameterization API, output-handling function, permissions, error behavior, and test coverage.",
    "limitation": "Review findings should be validated against deployed behavior and current configuration."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Map every input",
    "detail": "List fictional path, query, form, body, header, cookie, token, file, API, stored, and third-party data entering the application."
  },
  {
    "step": "2",
    "title": "Define the contract",
    "detail": "Document fictional required fields, types, lengths, formats, ranges, enumerations, relationships, and business rules."
  },
  {
    "step": "3",
    "title": "Separate data from instructions",
    "detail": "Use fictional parameterization, safe APIs, server-defined operations, and strict allowlists for structural choices."
  },
  {
    "step": "4",
    "title": "Protect every output context",
    "detail": "Apply fictional context-specific encoding, safe rendering, structured export handling, and controlled error messages."
  },
  {
    "step": "5",
    "title": "Correlate evidence and impact",
    "detail": "Compare fictional request, validation, application, data, browser, user, and business records before claiming impact."
  },
  {
    "step": "6",
    "title": "Remediate and validate",
    "detail": "Apply narrow fictional fixes, least privilege, positive tests, negative tests, monitoring, rollback, and closure criteria."
  }
];

const investigationTimeline = [
  {
    "time": "13:20:01",
    "source": "Request",
    "event": "A fictional staff user submits a report filter with department=Science, sort=recent, and page=1.",
    "meaning": "The expected request shape and business purpose are established."
  },
  {
    "time": "13:20:02",
    "source": "Gateway",
    "event": "The fictional request uses the approved POST route, JSON content type, and size below the configured limit.",
    "meaning": "Transport and basic request-policy checks pass."
  },
  {
    "time": "13:20:03",
    "source": "Schema validation",
    "event": "Department matches an approved identifier, page is a bounded integer, and sort matches an allowed enumeration.",
    "meaning": "Type, range, and enumeration checks succeed."
  },
  {
    "time": "13:20:04",
    "source": "Authorization",
    "event": "The fictional staff account is authorized to view reports for the Science department.",
    "meaning": "Business and object scope are confirmed."
  },
  {
    "time": "13:20:05",
    "source": "Application",
    "event": "The report service maps sort=recent to a server-defined ordering choice and binds department as data.",
    "meaning": "Structural choices and data values remain separated."
  },
  {
    "time": "13:20:06",
    "source": "Database",
    "event": "A fictional prepared read returns twenty approved summary records.",
    "meaning": "The expected data operation completes under the reporting service identity."
  },
  {
    "time": "13:20:07",
    "source": "Response",
    "event": "The application returns a 200 response with structured summary data.",
    "meaning": "The expected workflow succeeds."
  },
  {
    "time": "13:24:10",
    "source": "Unexpected request",
    "event": "A second fictional request sends sort=custom_expression and an unknown field named debugMode.",
    "meaning": "The request contains unsupported structural and schema values."
  },
  {
    "time": "13:24:11",
    "source": "Schema validation",
    "event": "The application rejects the unknown field and disallowed sort option before query construction.",
    "meaning": "Server-side allowlist validation prevents the unsupported values from reaching the data layer."
  },
  {
    "time": "13:24:12",
    "source": "Response",
    "event": "The user receives a safe validation message without internal query or stack detail.",
    "meaning": "The application fails safely."
  },
  {
    "time": "13:24:13",
    "source": "Database",
    "event": "No fictional database operation is created for the rejected request.",
    "meaning": "No data-layer impact is confirmed."
  },
  {
    "time": "13:25:00",
    "source": "Monitoring",
    "event": "A structured validation event records account, route, field categories, decision, and request ID without storing unsafe raw content.",
    "meaning": "Defenders receive useful evidence while sensitive data is limited."
  },
  {
    "time": "13:28:00",
    "source": "Review",
    "event": "The team confirms that an older report endpoint still accepts arbitrary sort text.",
    "meaning": "A separate legacy-path control gap is identified."
  },
  {
    "time": "13:34:00",
    "source": "Remediation",
    "event": "The legacy endpoint is updated to the same server-defined sort allowlist and prepared query path.",
    "meaning": "The narrow fix aligns old and new routes."
  },
  {
    "time": "13:42:00",
    "source": "Positive test",
    "event": "Approved department, sort, and paging requests succeed on both endpoints.",
    "meaning": "Legitimate reporting remains available."
  },
  {
    "time": "13:46:00",
    "source": "Negative test",
    "event": "Unknown fields, invalid types, excessive page values, and unsupported sort options are rejected before database access.",
    "meaning": "The defensive contract is enforced."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No new legacy-path exceptions occur, and normal reporting volume and latency remain stable.",
    "meaning": "Short-term validation supports closure."
  }
];

const commonMistakes = [
  "Relying only on fictional browser validation while the server accepts modified requests.",
  "Using denylists as the primary defense against unknown or transformed input.",
  "Validating format without checking ownership, tenant, authorization, workflow, or business meaning.",
  "Treating data as safe because it came from a trusted-looking API, cookie, hidden field, database, or internal service.",
  "Building fictional query, command, filter, template, path, redirect, or sort structure from untrusted text.",
  "Assuming parameterization protects dynamic table names, column names, operators, sort directions, and command choices without allowlists.",
  "Using one output-encoding method for every browser, URL, script, document, log, or export context.",
  "Storing raw unsafe input, credentials, tokens, private data, or secrets in validation logs.",
  "Returning fictional database, stack, file-path, service, or implementation details to users.",
  "Fixing one endpoint while leaving older, mobile, API, batch, or administrative paths unchanged.",
  "Testing only approved input without verifying invalid, boundary, unexpected-field, and unauthorized cases.",
  "Creating or running harmful payloads instead of using safe inert samples and defensive evidence."
];

const quizQuestions = [
  {
    "question": "Why must fictional server-side validation repeat important checks performed in the browser?",
    "choices": [
      "Client behavior can be modified or bypassed, so the server remains the authoritative processing boundary.",
      "Browsers cannot display forms.",
      "Server validation proves physical identity.",
      "Client validation automatically changes the database."
    ],
    "answer": 0,
    "explanation": "Client-side checks improve usability but cannot enforce security against modified requests."
  },
  {
    "question": "Which validation strategy is strongest for a fictional sort option?",
    "choices": [
      "Map a small approved set of user choices to server-defined sort operations.",
      "Insert any received text into the query.",
      "Reject only one known unwanted word.",
      "Trust the hidden form field."
    ],
    "answer": 0,
    "explanation": "Structural choices should come from a strict server-controlled allowlist."
  },
  {
    "question": "What does parameterization primarily accomplish?",
    "choices": [
      "It keeps fictional data values separate from the structure of a supported query or command interface.",
      "It authorizes every object.",
      "It replaces output encoding.",
      "It proves the user’s intent."
    ],
    "answer": 0,
    "explanation": "Parameterization prevents values from being interpreted as instruction structure in supported contexts."
  },
  {
    "question": "Why should fictional stored data still receive output handling?",
    "choices": [
      "Previously stored content can become unsafe when reused in a new browser, document, log, or export context.",
      "Database content is always trusted.",
      "Output handling is only for passwords.",
      "Stored data cannot reach users."
    ],
    "answer": 0,
    "explanation": "Trust and safety depend on the current use and output context, not only where data was stored."
  },
  {
    "question": "A fictional request contains valid JSON but references another tenant’s record. What additional control is required?",
    "choices": [
      "Server-side tenant, ownership, relationship, and authorization checks.",
      "More client-side color changes.",
      "A larger request-size limit.",
      "A generic success response."
    ],
    "answer": 0,
    "explanation": "Technical validity does not prove the request is authorized for the resource."
  },
  {
    "question": "Which logging design is strongest for fictional validation failures?",
    "choices": [
      "Structured event fields with safe categories, identifiers, decisions, redaction, and limited raw content.",
      "Store complete credentials and tokens.",
      "Return the full stack trace to the user.",
      "Record nothing."
    ],
    "answer": 0,
    "explanation": "Defenders need useful evidence without creating new sensitive-data or rendering risk."
  },
  {
    "question": "Which closure plan is strongest after an input-validation weakness?",
    "choices": [
      "Validate all affected routes, approved inputs, invalid boundaries, unauthorized objects, data-layer state, error handling, monitoring, rollback, and owner approval.",
      "Close after changing one browser field.",
      "Close after one successful request.",
      "Close because the application returned an error once."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies the full data path and both legitimate and rejected behavior."
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

function InputSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Input Inventory
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources of Untrusted Fictional Data
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {inputSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.example}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Expected
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.expected}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive control
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.control}
              </p>
            </div>
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
        Validation Contract
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Dimensions Every Important Input Should Define
      </h2>

      <div className="mt-6 grid gap-5">
        {validationDimensions.map((item) => (
          <div
            key={item.dimension}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.dimension}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongPattern}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakPattern}
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

function DefenseLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defense in Depth
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers That Work Together
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {defenseLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.layer}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Benefit
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.benefit}
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
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.validation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InjectionContextGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Injection Contexts
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Places Where Data Must Not Become Instructions
      </h2>

      <div className="mt-6 grid gap-5">
        {injectionContexts.map((item) => (
          <div
            key={item.context}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.context}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Unsafe pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.unsafePattern}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.defense}
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

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Impact question
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.impactQuestion}
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
        What Input and Processing Evidence Can Prove
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Input Handling in Six Steps
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
        Correlated Validation Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Report Filter from Expected Use to Remediation
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
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

export default function InputValidationAndInjectionDefensePage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.3 Input Validation and Injection Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional applications define safe input contracts, keep
            data separate from instructions, use parameterization and strict
            allowlists, protect output contexts, limit permissions, fail safely,
            investigate evidence, validate fixes, and document residual risk.
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
          lessonTitle="Input Validation and Injection Defense"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional browser, API, file, header, cookie, stored, and third-party data remain untrusted until validated in context.",
            "I will not create, test, or run harmful payloads or attempt to exploit any real application.",
            "I will distinguish validation, parameterization, output encoding, sanitization, authorization, least privilege, and monitoring.",
            "I will use safe inert samples and supplied fictional evidence only.",
            "I will never publish real requests, private records, credentials, tokens, source code, database details, or security-sensitive configuration.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Applications Become Safer When Data Stays Data"
        >
          <p className="leading-8">
            A fictional report filter should choose from approved server-defined
            sort options. A profile value should remain text when rendered. A file
            identifier should map to an approved storage object rather than
            becoming a path. A database value should be bound separately from the
            query structure. Defenders reduce injection risk by defining exact
            contracts and preventing untrusted input from becoming instructions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 leading-7">
                “The fictional browser sent the value, so append it directly to
                the query, command, template, path, or redirect.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong design
              </p>
              <p className="mt-2 leading-7">
                “Validate the value against the server contract, bind data
                separately, allowlist structural choices, enforce authorization,
                and validate the final data and business state.”
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
          title="Validation Protects Meaning, Not Just Characters"
        >
          <p className="leading-8">
            A fictional value can be well formatted and still reference the
            wrong tenant, exceed an approved amount, skip a workflow step, select
            an unsupported operation, or reach an unsafe output context. Strong
            validation covers type, size, format, range, enumeration,
            relationship, authorization, and business meaning across every route
            and processing layer.
          </p>
        </SectionCard>

        <InputSourceGuide />
        <ValidationGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use Different Controls for Different Problems"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Validation",
                "Is the fictional data allowed for this field, user, object, workflow, and business purpose?",
              ],
              [
                "Parameterization",
                "Is fictional data kept separate from query, command, filter, or interpreter structure?",
              ],
              [
                "Output handling",
                "Is fictional data encoded or safely rendered for the exact destination context?",
              ],
              [
                "Authorization",
                "May the fictional account perform this action on this resource now?",
              ],
              [
                "Least privilege",
                "Can the fictional application or service access only the resources required for the approved task?",
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

        <DefenseLayerGuide />
        <InjectionContextGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Input Validation and Injection Defense Terms
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
          title="Fake Input Validation Review Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook reporting application."
          metrics={[
            {
              label: "Protected routes",
              value: "42",
              note: "Fictional browser, API, file, administrative, mobile, and legacy routes covered by server-side schemas.",
            },
            {
              label: "Rejected requests",
              value: "318",
              note: "Unknown fields, type mismatches, excessive sizes, invalid ranges, unsupported values, and unauthorized objects.",
            },
            {
              label: "Open findings",
              value: "5",
              note: "Legacy route, output context, file-mapping, temporary exception, and evidence-gap reviews.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Report Route Accepts Unsupported Sort Values"
          severity="High"
          time="01:28 PM"
          source="Fake Application Validation Review Console"
          details="A fictional modern report endpoint rejects unknown fields and maps approved sort options to server-defined operations. A legacy endpoint still accepts arbitrary sort text and passes it into dynamic query construction. No supplied evidence confirms unauthorized data access, but the unsafe construction path requires remediation."
          recommendation="Preserve the code and request evidence, disable or restrict the affected legacy route if needed, replace dynamic construction with server-defined sort mappings and bound values, verify service least privilege, test approved and rejected inputs on every route, review database state, and monitor for related requests."
        />

        <FakeLogPanel
          title="Fake Input Validation and Remediation Timeline"
          logs={[
            "13:20:01 REQUEST route='/reports/filter' department='Science' sort='recent' page='1'",
            "13:20:02 GATEWAY method='POST' content_type='application/json' size='within_limit'",
            "13:20:03 VALIDATE department='approved' page='bounded_integer' sort='allowlisted'",
            "13:20:04 AUTHORIZE account='staff-115' department='Science' result='allow'",
            "13:20:05 APPLICATION sort_mapping='server_defined' values='bound'",
            "13:20:06 DATABASE operation='prepared_read' rows='20' result='success'",
            "13:20:07 RESPONSE status='200' data='summary_only'",
            "13:24:10 REQUEST sort='custom_expression' unknown_field='debugMode'",
            "13:24:11 VALIDATE result='reject_before_query'",
            "13:24:12 RESPONSE status='400' detail_exposure='none'",
            "13:24:13 DATABASE operation='none'",
            "13:25:00 MONITOR raw_unsafe_content_stored='false' event='structured'",
            "13:28:00 REVIEW legacy_route_dynamic_sort='confirmed'",
            "13:34:00 REMEDIATE legacy_sort='allowlist' query='prepared'",
            "13:42:00 POSITIVE_TEST approved_requests='pass'",
            "13:46:00 NEGATIVE_TEST invalid_and_unknown_inputs='rejected'",
            "DAY7 MONITOR legacy_exceptions='0' normal_latency='stable'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Validation Conclusion Is Best Supported?"
          evidence={[
            "The fictional modern endpoint requires an approved JSON schema.",
            "Department is checked against the authenticated staff scope.",
            "Sort choices map to server-defined operations.",
            "Data values are bound separately in a prepared database read.",
            "Unknown fields and unsupported sort values are rejected before database access.",
            "Safe error responses reveal no query or stack details.",
            "A legacy endpoint still accepts arbitrary sort text.",
            "No supplied database evidence confirms unauthorized data access from the legacy path.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The modern route is injection resistant for the reviewed flow, while the legacy route has an unsafe dynamic-construction weakness that requires remediation; unauthorized data impact is not confirmed.",
            "Every report request is compromised.",
            "The legacy weakness is harmless because no error appeared.",
            "Client-side validation alone protects both endpoints.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports strong controls on the modern path, a specific unsafe legacy construction pattern, and no confirmed downstream data impact in the supplied records."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Input and Injection Defense"
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
          title="Complete a Fictional Input Validation Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Application Input Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty supplied fictional records covering paths, queries,
                forms, JSON bodies, headers, cookies, files, APIs, stored data,
                schemas, business rules, parameterized operations, output
                handling, service permissions, errors, database results, users,
                owners, remediation, validation, monitoring, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory every fictional input and trust boundary.</li>
                <li>Define field presence, type, length, format, range, enumeration, relationship, and business rules.</li>
                <li>Identify where data could enter query, command, filter, template, path, redirect, document, or log structure.</li>
                <li>Map parameterization, strict allowlists, safe APIs, output handling, least privilege, and error controls.</li>
                <li>Separate rejected request, unsafe code path, completed data operation, user effect, and business impact.</li>
                <li>Write findings with facts, alternatives, confidence, owners, remediation, validation, monitoring, rollback, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence and inert sample values. Do not
            create or run harmful payloads, test real websites, alter requests
            against live systems, access databases, invoke commands, upload
            suspicious files, or publish real source code, credentials, tokens,
            records, queries, paths, or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Report Endpoint Accepts a User-Controlled Sort Expression"
          scenario="A fictional legacy report route accepts any sort text and combines it with query structure. The modern route uses server-defined sort mappings and bound data values."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict or disable the affected legacy route, replace dynamic structure with server-defined allowlisted choices and parameterized values, verify least privilege, test approved and invalid inputs, and review data-layer evidence.",
              outcome:
                "Best defensive choice. It addresses the unsafe construction path without creating or running harmful payloads.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Add one unwanted word to a denylist and keep the dynamic query.",
              outcome:
                "Weak control. Denylists can miss transformed or unexpected input.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Trust the route because only staff users can sign in.",
              outcome:
                "Unsafe. Authentication does not make untrusted data safe or remove the need for parameterization.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Stored Profile Value Appears in a New Export"
          scenario="A fictional profile field was safely displayed as plain browser text, but a new spreadsheet export inserts the stored value without context-specific handling."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the stored value as untrusted for the export context, validate the field, use a safe export library and context-specific neutralization, test inert special-character samples, and review generated files.",
              outcome:
                "Best defensive choice. Stored content must be handled safely for each new output context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the value is safe because it is already in the database.",
              outcome:
                "Unsafe. Storage does not make content safe for every later context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove all punctuation from every user field.",
              outcome:
                "Overbroad. The defense should match the exact schema and output context.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Input Validation and Injection Defense Checklist"
          items={[
            "I inventory fictional path, query, form, body, header, cookie, token, file, API, stored, and third-party input.",
            "I define presence, type, length, size, format, range, enumeration, relationship, authorization, and business meaning.",
            "I repeat all important validation on trusted server-side boundaries.",
            "I keep fictional data separate from query, command, filter, template, path, redirect, and interpreter structure.",
            "I use strict server-defined allowlists for structural choices such as sort, field, operation, route, destination, and file mapping.",
            "I apply context-specific output handling for browser, URL, document, export, log, and other destinations.",
            "I combine validation with authorization, least privilege, safe errors, structured monitoring, and business controls.",
            "I compare request, application, database, browser, user, and business evidence before claiming impact.",
            "I test approved, invalid, boundary, unknown-field, unauthorized-object, and legacy-route behavior after remediation.",
            "I use only fictional evidence and never create harmful payloads or expose real source code, requests, queries, credentials, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.3 Mini Quiz: Input Validation and Injection Defense"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Input Validation and Injection Defense Review using at least forty request, schema, validation, authorization, application, parameterization, output-handling, file, API, database, error, user, business, remediation, validation, monitoring, and closure records. Include an input inventory, trust-boundary map, validation contract, unsafe-construction review, defense-layer matrix, timeline, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, requests, users, files, APIs, databases, services, records, and organizations.",
            "Include one strong parameterized path, one unsafe legacy construction path, one output-context issue, one file-mapping issue, and one evidence-incomplete case.",
            "Do not include or create harmful payloads; use inert labels such as unsupported_value, unknown_field, and unexpected_structure.",
            "Keep code weakness, attempted request, completed data action, user effect, and business impact separate.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Every fictional input remains untrusted until validated for its exact type, format, range, relationship, authorization, and business purpose.",
            "Client-side validation improves usability but does not replace server-side enforcement.",
            "Parameterization keeps data separate from supported instruction structure, while strict allowlists protect structural choices.",
            "Stored data can become unsafe when reused in a new browser, document, export, log, or processing context.",
            "Validation, authorization, output handling, least privilege, safe errors, and monitoring solve different parts of the problem.",
            "Strong closure validates every affected route, approved inputs, invalid cases, data state, legitimate workflows, monitoring, evidence gaps, and owner approval.",
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