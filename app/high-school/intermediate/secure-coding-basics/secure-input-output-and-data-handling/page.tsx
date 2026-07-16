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
const previousLesson = `${modulePath}/threat-modeling-and-attack-surface-review`;
const nextLesson = `${modulePath}/authentication-session-and-access-control-code`;

const objectives = [
  "Explain how fictional data moves from browser, API, file, message, integration, and administrator inputs through validation, authorization, processing, storage, logging, rendering, export, retention, and deletion.",
  "Distinguish client-side usability checks, server-side validation, structural allowlists, parameterization, safe APIs, output-context handling, sanitization, file controls, and authorization.",
  "Design fictional input contracts that define approved fields, types, formats, ranges, sizes, relationships, states, and business rules before data reaches sensitive operations.",
  "Evaluate fictional data handling for collection, classification, minimization, encryption, access, storage, logging, retention, export, backup, recovery, and safe disposal.",
  "Create a professional fictional Secure Input, Output, and Data Handling Review with findings, owners, tests, evidence gaps, monitoring, rollback, and closure criteria."
];

const vocabulary = [
  [
    "Untrusted input",
    "Fictional data that comes from a browser, API client, file, message, integration, administrator, database, cache, queue, or other source and must be validated for the current use."
  ],
  [
    "Input contract",
    "A fictional server-side definition of allowed fields, types, formats, sizes, ranges, relationships, states, and required business rules."
  ],
  [
    "Allowlist",
    "A fictional rule that permits only explicitly approved values, formats, fields, operations, destinations, or file types."
  ],
  [
    "Parameterization",
    "A defensive technique that keeps fictional data values separate from the structure of a supported query or operation."
  ],
  [
    "Safe API",
    "A fictional framework or library interface designed to keep values separate from instruction structure when used correctly."
  ],
  [
    "Output context",
    "The fictional destination where data is placed, such as visible text, HTML attribute, URL, style, script data, document, log, email, notification, or export."
  ],
  [
    "Encoding",
    "A defensive transformation that represents fictional data safely for one exact output context without changing its intended meaning."
  ],
  [
    "Sanitization",
    "A defensive process that removes or rewrites unsupported parts of fictional rich content according to a documented policy."
  ],
  [
    "Data minimization",
    "A fictional practice of collecting, storing, displaying, logging, sharing, and retaining only the data required for an approved purpose."
  ],
  [
    "Data classification",
    "A fictional label that connects information sensitivity and business value to access, encryption, logging, retention, export, and disposal controls."
  ],
  [
    "Retention",
    "The fictional approved period for keeping data, backups, logs, exports, files, and evidence before review or deletion."
  ],
  [
    "Safe deletion",
    "A fictional controlled process for removing data, copies, links, keys, indexes, exports, accounts, and access paths according to policy and business needs."
  ]
];

const dataLifecycle = [
  {
    "stage": "1. Collection",
    "purpose": "A fictional application receives only the fields, files, identifiers, and metadata needed for an approved workflow.",
    "controls": "Purpose definition, field minimization, consent or notice where required, type and size limits, authentication, authorization, and source identification.",
    "evidence": "Form or API schema, data inventory, privacy requirement, route review, owner approval, and positive and negative tests.",
    "failureMode": "The application collects optional, sensitive, or unrelated data because it might be useful later."
  },
  {
    "stage": "2. Validation",
    "purpose": "A fictional server checks structure, type, format, range, length, relationship, state, and business rules before processing.",
    "controls": "Strict schemas, unknown-field rejection, server-defined choices, canonicalization rules, file policy, and object authorization.",
    "evidence": "Schema, validation logs, safe errors, test cases, rejected requests, and no-operation database records.",
    "failureMode": "The application trusts browser controls, hidden fields, file names, client roles, or stored values without server checks."
  },
  {
    "stage": "3. Processing",
    "purpose": "A fictional application uses approved operations while keeping data separate from query, command, path, template, or configuration structure.",
    "controls": "Parameterization, safe APIs, fixed operation mappings, least privilege, transaction boundaries, timeouts, and resource limits.",
    "evidence": "Code review, operation map, prepared-operation record, service identity, transaction log, and resource metrics.",
    "failureMode": "Untrusted values influence structure, destinations, file paths, query fields, or administrative behavior."
  },
  {
    "stage": "4. Storage",
    "purpose": "A fictional system stores only required data under appropriate access, encryption, integrity, backup, and ownership controls.",
    "controls": "Classification, encryption decisions, least privilege, tenant isolation, integrity checks, private storage, key management, and backup policy.",
    "evidence": "Data model, storage configuration, key reference, access review, backup record, and recovery test.",
    "failureMode": "Sensitive data is stored in broad tables, public files, client-managed state, logs, or long-lived temporary locations."
  },
  {
    "stage": "5. Use and access",
    "purpose": "A fictional identity accesses data only for an approved role, object, tenant, workflow, and business purpose.",
    "controls": "Authentication, object authorization, role and relationship checks, field filtering, reauthentication, approval, and audit logging.",
    "evidence": "Access decision, account and role, object and tenant, workflow state, transaction, user report, and access review.",
    "failureMode": "The application authorizes the page but not the exact object, field, export, or downstream action."
  },
  {
    "stage": "6. Output and sharing",
    "purpose": "A fictional application displays, renders, exports, logs, emails, or shares data safely for the exact destination and audience.",
    "controls": "Context-specific encoding, safe binding, sanitization, destination allowlists, data minimization, authorization, expiry, watermarking, and secure transfer.",
    "evidence": "Source-to-sink map, component review, export record, audience, link expiry, browser result, and policy event.",
    "failureMode": "Stored or internal data is treated as trusted when moved into a new browser, document, log, message, or integration context."
  },
  {
    "stage": "7. Retention and recovery",
    "purpose": "A fictional organization keeps data, logs, exports, and backups only for approved periods and can recover required information safely.",
    "controls": "Retention schedule, legal or business hold, backup encryption, access controls, restore testing, versioning, and owner review.",
    "evidence": "Retention policy, object age, backup inventory, restore test, hold record, owner approval, and deletion queue.",
    "failureMode": "Production data is deleted while backups keep indefinite copies, or logs expire before investigations can use them."
  },
  {
    "stage": "8. Disposal",
    "purpose": "A fictional organization removes data, exports, temporary files, indexes, links, accounts, secrets, and access paths when no longer required.",
    "controls": "Approved deletion workflow, ownership verification, dependency review, backup expiration, key retirement, audit evidence, and exception handling.",
    "evidence": "Deletion request, object inventory, completion record, backup status, key action, access test, and owner sign-off.",
    "failureMode": "The primary record is deleted while exports, caches, previews, search indexes, or third-party copies remain available."
  }
];

const inputContracts = [
  {
    "fieldGroup": "Account and identity fields",
    "approved": "Fictional account identifiers, role requests, recovery references, and device labels in exact documented formats.",
    "checks": "Type, length, normalization, existence, account state, role eligibility, tenant, recovery policy, and rate limits.",
    "unsafeAssumption": "The account name or role received from the browser is already trusted.",
    "evidence": "Identity lookup, policy decision, validation event, account state, and negative tests."
  },
  {
    "fieldGroup": "Record and object identifiers",
    "approved": "Fictional opaque identifiers resolved by the server to a trusted tenant, owner, relationship, and object.",
    "checks": "Format, existence, tenant, ownership, assignment, object state, action, and session context.",
    "unsafeAssumption": "A valid-looking identifier proves the user may access the object.",
    "evidence": "Object resolution, authorization decision, database result, and wrong-object tests."
  },
  {
    "fieldGroup": "Text and rich content",
    "approved": "Fictional plain text or narrowly defined rich text with separate processing paths.",
    "checks": "Length, required fields, character handling, audience, business rules, safe binding, sanitizer policy, and destination review.",
    "unsafeAssumption": "Stored, internal, or staff-created content is safe in every output context.",
    "evidence": "Schema, source-to-sink map, component result, sanitizer output, and browser validation."
  },
  {
    "fieldGroup": "Search, sort, and filter choices",
    "approved": "Fictional choices mapped to a small server-defined set of fields, directions, operators, and ranges.",
    "checks": "Allowlisted name, type, range, page size, date window, authorization, result limit, and timeout.",
    "unsafeAssumption": "Any received field name or operator can become query structure.",
    "evidence": "Operation map, prepared read, query plan category, result count, and unsupported-choice tests."
  },
  {
    "fieldGroup": "Dates, numbers, and quantities",
    "approved": "Fictional typed values within documented minimums, maximums, precision, time zone, and business relationships.",
    "checks": "Type, format, canonical time zone, range, precision, ordering, uniqueness, quota, and workflow state.",
    "unsafeAssumption": "A value that parses is automatically reasonable and allowed.",
    "evidence": "Parsed value, normalized value, business-rule decision, transaction result, and boundary tests."
  },
  {
    "fieldGroup": "Files and attachments",
    "approved": "Fictional approved document categories within size limits, stored privately with generated names and controlled processing.",
    "checks": "Declared and observed type, size, count, filename handling, authorization, isolated processing, storage path, expiry, and viewer behavior.",
    "unsafeAssumption": "A familiar filename extension proves the content is safe.",
    "evidence": "Upload decision, generated object ID, storage policy, processing result, access decision, and unsupported-file tests."
  },
  {
    "fieldGroup": "URLs and destinations",
    "approved": "Fictional exact owned or partner destinations required by the workflow.",
    "checks": "Scheme, host, path rules, allowlist, redirect handling, audience, purpose, expiry, and user-visible destination.",
    "unsafeAssumption": "Any well-formed destination is approved and harmless.",
    "evidence": "Destination resolution, allowlist version, redirect result, owner approval, and unapproved-destination tests."
  },
  {
    "fieldGroup": "Administrative and configuration values",
    "approved": "Fictional server-defined feature, role, policy, environment, and configuration choices available only to approved administrators.",
    "checks": "Privileged role, reauthentication, dual approval where required, allowlisted value, environment, change ticket, and rollback.",
    "unsafeAssumption": "Administrative input can be free-form because administrators are trusted.",
    "evidence": "Role and session, change record, before-and-after configuration, validation, and audit event."
  }
];

const outputContexts = [
  {
    "context": "Visible browser text",
    "safePattern": "Use fictional framework text binding or a safe text-node API that keeps content as text.",
    "risk": "Raw markup insertion can turn data into browser-interpreted structure.",
    "validation": "Reserved and markup-like characters appear visibly without creating elements or actions.",
    "owner": "Front-End Team"
  },
  {
    "context": "Approved rich text",
    "safePattern": "Use a maintained fictional sanitizer with a documented allowlist, safe destinations, and content policy.",
    "risk": "Broad or outdated sanitizer policy can preserve unsafe elements, attributes, destinations, or embedded behavior.",
    "validation": "Approved formatting remains while unsupported content is removed or converted to text.",
    "owner": "Front-End and Platform Teams"
  },
  {
    "context": "HTML attribute",
    "safePattern": "Use framework-managed fictional properties with validation appropriate to the exact attribute.",
    "risk": "String construction can break attribute boundaries or create unintended browser behavior.",
    "validation": "Inert boundary values remain data and the final DOM contains the expected property only.",
    "owner": "Front-End Team"
  },
  {
    "context": "URL and navigation",
    "safePattern": "Use exact fictional destination allowlists, safe URL builders, approved schemes, clear user display, and redirect limits.",
    "risk": "Untrusted destinations can mislead users or send data to an unapproved location.",
    "validation": "Approved destinations work while unapproved schemes, hosts, paths, and redirects are rejected.",
    "owner": "Application Team"
  },
  {
    "context": "Structured script data",
    "safePattern": "Use fictional framework serialization designed for the exact data boundary and avoid building executable text.",
    "risk": "Manual string construction can turn data into program structure.",
    "validation": "Supplied inert values remain serialized data and never become executable instructions.",
    "owner": "Front-End and Platform Teams"
  },
  {
    "context": "Logs and alerts",
    "safePattern": "Use structured fictional fields, length limits, safe rendering, redaction, and no secrets or unnecessary personal data.",
    "risk": "Untrusted values can confuse analysts, corrupt display, expose private data, or break parsing.",
    "validation": "Events parse correctly, line breaks remain safe, sensitive fields are absent, and viewers render values as text.",
    "owner": "Application and Security Operations Teams"
  },
  {
    "context": "Email and notification",
    "safePattern": "Use fictional trusted templates, exact recipient and destination rules, safe text or approved markup handling, and data minimization.",
    "risk": "Dynamic recipients, links, markup, or private content can create misdelivery or deceptive messages.",
    "validation": "Approved recipients and content work while wrong-audience, unapproved-link, and unsupported-markup cases fail.",
    "owner": "Communications Technology"
  },
  {
    "context": "Export and document",
    "safePattern": "Use fictional document libraries, explicit field selection, safe cell and formula handling, authorization, expiry, and protected storage.",
    "risk": "Exports can expose excess fields, preserve dangerous interpretation, remain accessible too long, or reach the wrong audience.",
    "validation": "Only approved fields and rows appear, inert values remain data, access expires, and unauthorized users cannot retrieve the file.",
    "owner": "Reporting and Data Teams"
  }
];

const fileControls = [
  {
    "control": "Purpose and category",
    "detail": "Accept only fictional file categories required by a documented business workflow.",
    "evidence": "Requirement, route, allowed category, owner, and business use.",
    "negativeTest": "Unsupported categories are rejected before storage or processing."
  },
  {
    "control": "Size and count",
    "detail": "Limit fictional individual size, total request size, file count, processing time, and storage quota.",
    "evidence": "Policy, request metadata, processing metrics, quota, and rejection event.",
    "negativeTest": "Oversized, excessive-count, and quota-exceeding submissions fail safely."
  },
  {
    "control": "Name and storage key",
    "detail": "Generate fictional server-side object identifiers and treat the original name as display metadata only.",
    "evidence": "Generated object ID, storage path, original-name field, and retrieval mapping.",
    "negativeTest": "Boundary-like file names do not control paths or overwrite unrelated objects."
  },
  {
    "control": "Type review",
    "detail": "Compare fictional declared type, observed file structure, approved category, and processing capability.",
    "evidence": "Declared type, observed category, policy decision, and processing result.",
    "negativeTest": "Mismatched or unsupported content is denied or isolated."
  },
  {
    "control": "Private storage",
    "detail": "Store fictional files outside direct public paths with object authorization and controlled retrieval.",
    "evidence": "Storage policy, object owner, access decision, signed-link expiry, and audit event.",
    "negativeTest": "Anonymous, wrong-tenant, expired-link, and unassigned access fail."
  },
  {
    "control": "Isolated processing",
    "detail": "Use fictional restricted services for preview, conversion, or inspection with minimal permissions and resource limits.",
    "evidence": "Service identity, sandbox policy, timeout, result, and monitoring.",
    "negativeTest": "Failed or unsupported processing cannot access unrelated files, secrets, or services."
  },
  {
    "control": "Safe download and preview",
    "detail": "Use fictional safe content types, disposition, isolated viewers, clear names, authorization, and expiry.",
    "evidence": "Response headers, viewer, file ID, account, object decision, and expiry.",
    "negativeTest": "Unapproved inline display, stale links, and unauthorized previews fail."
  },
  {
    "control": "Retention and deletion",
    "detail": "Remove fictional temporary uploads, previews, failed objects, expired links, and unnecessary copies on schedule.",
    "evidence": "Retention rule, object age, deletion record, backup status, and owner review.",
    "negativeTest": "Expired objects cannot be accessed through primary, preview, cache, or old-link paths."
  }
];

const dataProtection = [
  {
    "area": "Collection minimization",
    "securePattern": "Collect fictional fields only when they are required for the documented purpose and current workflow.",
    "risk": "Extra sensitive data increases exposure, access complexity, retention cost, and user impact.",
    "evidence": "Data inventory, field purpose, route schema, owner, and privacy review."
  },
  {
    "area": "Encryption decisions",
    "securePattern": "Protect fictional transport and selected stored data or backups according to classification, threat model, platform capability, and key ownership.",
    "risk": "Encryption without access control, key management, rotation, or recovery can create false confidence or outages.",
    "evidence": "Classification, key reference, algorithm category, owner, rotation, access, and recovery test."
  },
  {
    "area": "Access and field filtering",
    "securePattern": "Return only fictional fields needed by the approved identity, role, object, tenant, and workflow.",
    "risk": "A user may be authorized for the record but not every sensitive field inside it.",
    "evidence": "Field policy, role and relationship, response shape, negative tests, and audit event."
  },
  {
    "area": "Logging and redaction",
    "securePattern": "Log fictional decisions and identifiers needed for defense while excluding secrets, full sensitive content, and unnecessary personal data.",
    "risk": "Logs can become a second sensitive database with broad access and long retention.",
    "evidence": "Event schema, redaction rule, sample event, retention, access review, and viewer behavior."
  },
  {
    "area": "Export control",
    "securePattern": "Use fictional exact field and row selection, privileged authorization, reauthentication, approval, protected files, expiry, and audit evidence.",
    "risk": "Exports can bypass normal page filtering and create long-lived concentrated copies.",
    "evidence": "Export request, approvals, job, file, field list, expiry, download, and deletion."
  },
  {
    "area": "Backup and recovery",
    "securePattern": "Protect fictional backups with narrow access, encryption, inventory, retention, restore testing, and deletion alignment.",
    "risk": "Backups can preserve deleted data, old secrets, vulnerable builds, and unreviewed access.",
    "evidence": "Backup set, encryption, owner, access review, restore result, retention, and disposal record."
  },
  {
    "area": "Third-party sharing",
    "securePattern": "Share fictional minimum approved data with exact providers under documented purpose, identity, schema, security, retention, and deletion rules.",
    "risk": "Provider scope, ownership, copies, logs, support access, or retention may exceed the application’s controls.",
    "evidence": "Integration inventory, data map, contract, destination, schema, test, monitoring, and owner review."
  },
  {
    "area": "Deletion and retirement",
    "securePattern": "Remove fictional primary records, exports, caches, previews, indexes, temporary files, links, backups on schedule, and access paths when no longer required.",
    "risk": "Partial deletion leaves discoverable or recoverable copies outside the primary database.",
    "evidence": "Deletion workflow, copy inventory, completion record, backup expiry, key action, access test, and sign-off."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Define the data purpose",
    "detail": "Identify fictional users, business need, fields, files, objects, sensitivity, destinations, owners, retention, and deletion expectations."
  },
  {
    "step": "2",
    "title": "Write the input contract",
    "detail": "Define fictional fields, types, formats, sizes, ranges, relationships, states, allowlists, authorization, and unknown-field behavior."
  },
  {
    "step": "3",
    "title": "Choose safe processing",
    "detail": "Use fictional parameterization, safe APIs, fixed mappings, generated identifiers, least privilege, transactions, timeouts, and resource limits."
  },
  {
    "step": "4",
    "title": "Map every output context",
    "detail": "Track fictional data into text, rich content, attributes, URLs, logs, messages, files, exports, integrations, caches, and backups."
  },
  {
    "step": "5",
    "title": "Test and correlate",
    "detail": "Run fictional positive, negative, boundary, authorization, file, output, retention, and deletion tests with source and business evidence."
  },
  {
    "step": "6",
    "title": "Monitor and close",
    "detail": "Review fictional failures, drift, exports, unusual access, retention, deletion, exceptions, rollback, residual risk, and owner approval."
  }
];

const investigationTimeline = [
  {
    "time": "09:00:00",
    "source": "Requirement",
    "event": "A fictional reporting feature must allow approved department and date filters while limiting results to authorized records.",
    "meaning": "The business and authorization purpose is defined."
  },
  {
    "time": "09:05:00",
    "source": "Schema",
    "event": "The modern endpoint allows department, start date, end date, sort choice, and page size with exact types and ranges.",
    "meaning": "A server-side input contract exists."
  },
  {
    "time": "09:08:00",
    "source": "Code review",
    "event": "Approved sort choices map to server-defined operations and all data values use supported parameterized interfaces.",
    "meaning": "The modern processing path separates values from structure."
  },
  {
    "time": "09:12:00",
    "source": "Legacy review",
    "event": "A fictional legacy endpoint accepts arbitrary sort text and builds operation structure dynamically.",
    "meaning": "A confirmed unsafe construction weakness exists."
  },
  {
    "time": "09:15:00",
    "source": "Access review",
    "event": "The legacy endpoint checks authentication but not department assignment before returning summary rows.",
    "meaning": "Input safety and object or scope authorization are both incomplete."
  },
  {
    "time": "09:18:00",
    "source": "Safe test",
    "event": "A fictional teacher requests an unsupported sort choice and an unassigned department in the supplied test environment.",
    "meaning": "The test exercises two defensive requirements without using real systems."
  },
  {
    "time": "09:18:01",
    "source": "Database",
    "event": "The legacy path returns summary rows from the unassigned department.",
    "meaning": "A test-environment authorization impact is confirmed."
  },
  {
    "time": "09:22:00",
    "source": "Containment",
    "event": "The legacy report route is disabled in the test release and removed from navigation.",
    "meaning": "Narrow containment prevents release of the known path."
  },
  {
    "time": "09:30:00",
    "source": "Remediation",
    "event": "The route adopts the modern schema, server-defined sort mappings, parameterized reads, department authorization, result limits, and safe errors.",
    "meaning": "The implementation aligns with input and access requirements."
  },
  {
    "time": "09:42:00",
    "source": "Positive test",
    "event": "An approved teacher retrieves the correct assigned department summary.",
    "meaning": "Legitimate report use remains available."
  },
  {
    "time": "09:46:00",
    "source": "Negative test",
    "event": "Unknown fields, invalid dates, unsupported sorts, excessive page sizes, unassigned departments, and expired sessions are denied before database access.",
    "meaning": "Several input and authorization failures are controlled."
  },
  {
    "time": "09:50:00",
    "source": "Output test",
    "event": "Fictional report labels with reserved characters remain visible text in the browser and export.",
    "meaning": "The reviewed output paths preserve data as data."
  },
  {
    "time": "09:55:00",
    "source": "Logging review",
    "event": "Structured events record request ID, account, route, validation result, authorization result, and row category without report content or secrets.",
    "meaning": "Defensive evidence is preserved with minimization."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No unassigned report results appear, validation failures remain within expected patterns, and no schema drift is detected.",
    "meaning": "Short-term operation supports the remediated control."
  },
  {
    "time": "Day 30",
    "source": "Retention review",
    "event": "Temporary exports expire and are deleted according to the fictional seven-day rule.",
    "meaning": "Data handling continues after request processing and display."
  }
];

const commonMistakes = [
  "Trusting fictional client-side validation, hidden fields, role values, file names, or browser controls as the final security boundary.",
  "Using a blocklist of known bad values instead of defining the exact allowed structure and choices.",
  "Applying parameterization to data values while still allowing untrusted structure such as field names, operators, destinations, or paths.",
  "Treating authentication as permission to access every fictional object, tenant, field, report, file, or export.",
  "Assuming stored, internal, staff-created, or database-sourced content is safe in every output context.",
  "Using one encoding or sanitization rule for text, rich content, attributes, URLs, logs, messages, files, and exports.",
  "Accepting files based only on extension or declared content type and storing them in directly public locations.",
  "Logging full fictional request bodies, secrets, session identifiers, private records, or unnecessary personal data.",
  "Keeping exports, temporary files, previews, caches, backups, and third-party copies longer than the approved purpose requires.",
  "Deleting a primary record without reviewing search indexes, caches, links, exports, backups, and integration copies.",
  "Testing only the happy path and skipping wrong-role, wrong-object, oversized, unsupported, duplicate, expired, and boundary cases.",
  "Publishing real source code, records, files, logs, schemas, secrets, users, or production data in a portfolio artifact."
];

const quizQuestions = [
  {
    "question": "What is the strongest role of fictional server-side validation?",
    "choices": [
      "Enforce the authoritative input contract before sensitive processing, storage, or business actions.",
      "Improve page colors.",
      "Replace authorization.",
      "Prove user intent."
    ],
    "answer": 0,
    "explanation": "The server is the trusted processing boundary for input structure and business rules."
  },
  {
    "question": "Which design is strongest for a fictional sort field?",
    "choices": [
      "Map a small approved set of choices to server-defined operations.",
      "Insert any received text into operation structure.",
      "Reject one known unwanted word.",
      "Trust a hidden browser field."
    ],
    "answer": 0,
    "explanation": "Structural choices should come from strict server-controlled mappings."
  },
  {
    "question": "What does parameterization primarily protect?",
    "choices": [
      "The separation between fictional data values and the structure of a supported operation.",
      "Every authorization decision.",
      "Every browser output context.",
      "Every file upload."
    ],
    "answer": 0,
    "explanation": "Parameterization is important, but it does not replace authorization, validation, or output handling."
  },
  {
    "question": "Why must fictional stored data still be handled safely during output?",
    "choices": [
      "Data can become unsafe when moved into a different browser, document, URL, log, message, file, or export context.",
      "Stored data is always executable.",
      "Databases never validate data.",
      "Output handling is only for passwords."
    ],
    "answer": 0,
    "explanation": "Safety depends on the exact destination and interpretation boundary."
  },
  {
    "question": "Which fictional file-upload pattern is strongest?",
    "choices": [
      "Approved category, strict size and count, generated storage ID, private storage, isolated processing, authorization, expiry, and deletion.",
      "Trust the filename extension.",
      "Store every file in a public folder.",
      "Allow unlimited size and count."
    ],
    "answer": 0,
    "explanation": "File safety requires layered controls across collection, storage, processing, access, and disposal."
  },
  {
    "question": "What does data minimization require?",
    "choices": [
      "Collect, store, display, log, share, and retain only fictional data required for the approved purpose.",
      "Delete every record immediately.",
      "Store every optional field.",
      "Log complete request contents."
    ],
    "answer": 0,
    "explanation": "Minimization limits data throughout its lifecycle rather than only at collection."
  },
  {
    "question": "Which closure plan is strongest after a fictional input and data-handling finding?",
    "choices": [
      "Validate approved and denied inputs, authorization, processing, output contexts, storage, logs, exports, retention, deletion, monitoring, rollback, residual risk, and owner approval.",
      "Close after one positive test.",
      "Close after hiding the route.",
      "Close because no user complained."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies the full data lifecycle and operational evidence."
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

function DataLifecycleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Data Lifecycle
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Collection to Disposal
      </h2>

      <div className="mt-6 grid gap-5">
        {dataLifecycle.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.stage}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive controls
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.controls}
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

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Failure mode
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.failureMode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InputContractGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Input Contracts
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Input Groups with Server-Side Rules
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {inputContracts.map((item) => (
          <div
            key={item.fieldGroup}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.fieldGroup}
            </h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Approved input
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.approved}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Required checks
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.checks}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Unsafe assumption
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.unsafeAssumption}
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
          </div>
        ))}
      </div>
    </section>
  );
}

function OutputContextGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Output Safety
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Destinations That Need Different Handling
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {outputContexts.map((item) => (
          <div
            key={item.context}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.context}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Safe pattern
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.safePattern}
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

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Validation
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.validation}
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

function FileControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        File Handling
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls for Fictional Uploads and Downloads
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fileControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.control}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Negative test
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.negativeTest}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DataProtectionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Data Protection
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Areas Beyond Validation
      </h2>

      <div className="mt-6 grid gap-5">
        {dataProtection.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.area}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Secure pattern
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.securePattern}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Risk
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.risk}
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
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Input, Output, and Data in Six Steps
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
        Correlated Data Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Report Request from Requirement to Retention
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

export default function SecureInputOutputAndDataHandlingPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.3 Secure Input, Output, and Data Handling
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional developers define server-side input contracts,
            separate data from structure, use safe APIs, protect files, handle
            output for exact destinations, minimize sensitive information,
            control storage and exports, preserve defender evidence, enforce
            retention, and complete safe deletion.
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
          lessonTitle="Secure Input, Output, and Data Handling"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional data from browsers, databases, files, messages, integrations, and administrators must be validated for its current use.",
            "I will separate input validation, structural allowlisting, parameterization, authorization, output handling, storage, logging, retention, and deletion.",
            "I will use only safe inert values and supplied fictional records rather than harmful payloads or real-system testing.",
            "I will review the full data lifecycle from collection through disposal.",
            "I will never publish real source code, schemas, credentials, secrets, files, logs, student information, exports, or private organizational data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Data Can Be Safe in One Stage and Unsafe in the Next"
        >
          <p className="leading-8">
            A fictional report label may be safe in a database but unsafe if
            inserted through raw markup. A valid record identifier may still
            refer to an object the user cannot access. A document may be an
            approved type but stored in a public location. A useful log event may
            expose too much private content. Secure coding follows the data
            through every interpretation and ownership boundary.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak approach
              </p>

              <p className="mt-2 leading-7">
                “The fictional value came from our database and passed the
                browser form, so it is trusted everywhere.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong approach
              </p>

              <p className="mt-2 leading-7">
                “Validate the exact input contract, authorize the object, keep
                values separate from structure, handle each output context, and
                control collection, storage, sharing, retention, and deletion.”
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
          title="Secure Data Handling Protects Both Systems and People"
        >
          <p className="leading-8">
            Fictional input weaknesses can affect query behavior, object access,
            file processing, destinations, configuration, and business
            transactions. Output weaknesses can affect browsers, documents,
            messages, logs, and exports. Poor minimization and retention can
            expand the impact even when application controls work. Professional
            teams define exact contracts and preserve only the data required.
          </p>
        </SectionCard>

        <DataLifecycleGuide />
        <InputContractGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Contract–Operation–Context–Lifecycle Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Purpose", "Why does the fictional workflow require this field, file, object, or data set?"],
              ["Contract", "Which fictional type, format, range, relationship, state, size, and authorization are allowed?"],
              ["Operation", "Which fictional safe API, fixed mapping, transaction, identity, and resource limit processes it?"],
              ["Context", "Where will the fictional value appear, render, navigate, log, export, notify, or integrate?"],
              ["Lifecycle", "How will the fictional data be stored, accessed, backed up, retained, shared, and deleted?"],
              ["Evidence", "Which fictional tests, logs, storage records, browser results, owner reviews, and business outcomes prove the result?"],
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

        <OutputContextGuide />
        <FileControlGuide />
        <DataProtectionGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Input, Output, and Data Handling Terms
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
          title="Fake Secure Data Handling Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook reporting and student-support applications."
          metrics={[
            {
              label: "Reviewed data flows",
              value: "58",
              note: "Fictional browser, API, database, file, message, export, logging, integration, backup, and deletion flows.",
            },
            {
              label: "Approved input contracts",
              value: "46",
              note: "Schemas with field, type, range, relationship, authorization, size, and unknown-field rules.",
            },
            {
              label: "Open findings",
              value: "7",
              note: "Legacy construction, object scope, raw rendering, file retention, export fields, log redaction, and backup-deletion cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Report Endpoint Accepts Unsafe Structure and Scope"
          severity="High"
          time="09:18 AM"
          source="Fake Secure Coding Review Console"
          details="A fictional legacy reporting endpoint accepts arbitrary sort text, constructs operation structure dynamically, and checks authentication without verifying department assignment. A supplied safe test retrieves summary rows from an unassigned department in the test environment."
          recommendation="Disable the legacy route from release, preserve schema, code, authorization, and database evidence, adopt strict server-side fields and types, server-defined sort mappings, parameterized reads, department authorization, result limits, safe output handling, structured logging, positive and negative tests, monitoring, rollback, and owner approval."
        />

        <FakeLogPanel
          title="Fake Input and Data Handling Timeline"
          logs={[
            "09:00:00 REQUIREMENT report_filters='department,date,sort,page_size'",
            "09:05:00 SCHEMA unknown_fields='reject' types='strict' ranges='defined'",
            "09:08:00 MODERN_CODE sort_mapping='server_defined' values='parameterized'",
            "09:12:00 LEGACY_CODE sort_structure='dynamic'",
            "09:15:00 ACCESS_CHECK authentication='present' department_assignment='missing'",
            "09:18:00 SAFE_TEST unsupported_sort='supplied' unassigned_department='supplied'",
            "09:18:01 DATABASE unassigned_rows='returned'",
            "09:22:00 CONTAIN legacy_route='disabled_from_release'",
            "09:30:00 REMEDIATE schema='modern' sort='allowlist' authorization='department_verified'",
            "09:42:00 POSITIVE_TEST assigned_department='pass'",
            "09:46:00 NEGATIVE_TEST unknown='deny' invalid_date='deny' unsupported_sort='deny' unassigned='deny'",
            "09:50:00 OUTPUT_TEST reserved_characters='visible_text'",
            "09:55:00 LOGGING request_id='present' report_content='excluded' secrets='excluded'",
            "DAY7 MONITOR unassigned_results='0' schema_drift='0'",
            "DAY30 RETENTION temporary_exports='deleted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Secure Data Handling Conclusion Is Best Supported?"
          evidence={[
            "The fictional modern endpoint uses a strict schema and server-defined sort mappings.",
            "The fictional legacy endpoint accepts arbitrary sort text and dynamic operation construction.",
            "The legacy path verifies authentication but not department assignment.",
            "A supplied safe test retrieves rows from an unassigned department in the test environment.",
            "The legacy route is blocked from release.",
            "The remediation adds the modern schema, parameterized reads, department authorization, limits, safe errors, and structured events.",
            "Approved assigned reporting succeeds.",
            "Unknown, malformed, unsupported, excessive, unassigned, and expired-session cases are denied before database access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional legacy report path had confirmed unsafe construction and scope-authorization weaknesses in the test environment; release containment prevented deployment, and the reviewed remediation passed positive and negative tests.",
            "The production database was fully copied.",
            "Authentication made department authorization unnecessary.",
            "The modern endpoint proves every legacy path is safe.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports two specific confirmed test-path weaknesses, controlled release containment, and validated remediation without supporting a production-impact claim."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Input, Output, and Data Handling"
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
          title="Complete a Fictional Secure Data Handling Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Profile and Reporting Features
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty-four supplied fictional records covering purpose,
                fields, schemas, objects, authorization, operations, database
                state, rendering, files, logs, messages, exports, integrations,
                storage, backups, retention, deletion, tests, monitoring, and owners.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define fictional purpose, classification, fields, files, users, objects, owners, destinations, retention, and deletion.</li>
                <li>Write server-side input contracts with types, formats, ranges, sizes, relationships, states, allowlists, and authorization.</li>
                <li>Review parameterization, safe APIs, fixed structural mappings, transactions, service identities, timeouts, and limits.</li>
                <li>Map each value to browser, document, URL, log, message, export, integration, cache, backup, and deletion contexts.</li>
                <li>Design positive, negative, boundary, file, object, output, retention, and deletion tests.</li>
                <li>Document findings, owners, remediation, monitoring, rollback, evidence gaps, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence and inert sample values. Do not
            create harmful payloads, access real applications, upload files to
            real systems, inspect private source code, or publish real schemas,
            records, logs, exports, credentials, secrets, or student information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Stored Value Is Reused in a New Browser Context"
          scenario="A fictional report label was originally stored as plain text. A new preview component plans to insert it through a raw markup feature."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep plain labels on a safe text-binding path, review every source-to-sink use, add reserved-character regression tests, use sanitization only for a separately approved rich-text feature, and monitor content-policy events.",
              outcome:
                "Best defensive choice. The control matches the exact output purpose and context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Trust the value because it already exists in the database.",
              outcome:
                "Unsafe. Stored data becomes untrusted at each new interpretation boundary.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove every special character from all labels.",
              outcome:
                "Overbroad. Safe text binding preserves legitimate data without raw interpretation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A File Feature Uses Public Storage for Convenience"
          scenario="A fictional support-document feature accepts approved files but stores them under directly reachable public paths using original file names."
          choices={[
            {
              label: "Choice A",
              response:
                "Move files to private object storage, generate server-side IDs, enforce type, size, count, ownership, isolated processing, controlled download, expiry, retention, deletion, and audit tests.",
              outcome:
                "Best defensive choice. File safety covers collection, processing, storage, access, and disposal.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep public storage because users need easy links.",
              outcome:
                "Unsafe. Convenience does not replace authorization and controlled expiry.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Trust files with familiar extensions.",
              outcome:
                "Incomplete. Extension alone does not establish approved content or safe handling.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Secure Input, Output, and Data Handling Checklist"
          items={[
            "I define fictional purpose, users, fields, files, objects, classification, destinations, owners, retention, and deletion before processing.",
            "I enforce server-side types, formats, ranges, sizes, relationships, states, unknown-field behavior, and business rules.",
            "I keep fictional data values separate from operation structure through parameterization, safe APIs, and fixed mappings.",
            "I verify role, tenant, object, relationship, field, action, workflow, and session before data access or change.",
            "I map fictional data to exact browser, URL, attribute, log, message, document, export, integration, cache, and backup contexts.",
            "I use safe text binding for plain text and narrow maintained sanitization only for approved rich text.",
            "I protect fictional files with purpose, size, generated IDs, private storage, isolated processing, authorization, expiry, and deletion.",
            "I minimize fictional collection, storage, display, logging, sharing, exports, backups, and retention.",
            "I validate positive, negative, boundary, object, file, output, retention, deletion, monitoring, and rollback behavior.",
            "I use only fictional evidence and never expose or test real code, files, records, logs, systems, secrets, or private data.",
          ]}
        />

        <MiniQuiz
          title="I9.3 Mini Quiz: Secure Input, Output, and Data Handling"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Input, Output, and Data Handling Review using at least forty-four purpose, schema, object, authorization, operation, database, rendering, file, log, message, export, integration, storage, backup, retention, deletion, test, monitoring, and owner records. Include an input-contract matrix, source-to-sink map, data inventory, file-control review, findings, evidence references, positive tests, negative tests, owners, remediation, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, users, values, fields, files, objects, records, logs, exports, tests, and organizations.",
            "For every value, identify its purpose, input contract, authorization, processing operation, output contexts, storage, retention, and deletion.",
            "Keep input validity, operation safety, object authorization, output safety, data state, user effect, and business impact separate.",
            "Do not include real source code, schemas, credentials, secrets, files, logs, student records, exports, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional input remains untrusted until the server validates the exact contract and authorization for the current operation.",
            "Parameterization protects the value–structure boundary but does not replace schemas, allowlists, authorization, output handling, or least privilege.",
            "Stored and internal data must be handled safely every time it enters a new browser, document, URL, log, message, export, or integration context.",
            "File safety requires controls for purpose, size, naming, type review, private storage, isolated processing, access, expiry, retention, and deletion.",
            "Data minimization applies to collection, storage, display, logging, sharing, exports, backups, retention, and disposal.",
            "Professional closure validates approved and denied behavior across the full data lifecycle with monitoring, rollback, residual risk, and owner approval.",
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