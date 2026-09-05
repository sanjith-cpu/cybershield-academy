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
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = `${modulePath}/authorization-and-access-control-design`;
const nextLesson = `${modulePath}/api-security-concepts`;

const objectives = [
  "Explain how safe web data handling separates input collection, expected contracts, normalization, validation, storage, authorization, output handling, errors, logging, and privacy into distinct defensive decisions.",
  "Design fictional input contracts that define source, business meaning, type, format, allowed values, size, range, optionality, ownership, sensitivity, and rejection behavior without using attack payloads.",
  "Evaluate fictional output contexts and explain why data displayed in page text, reports, notifications, logs, exports, or administrative views may require different safe handling decisions.",
  "Use fictional evidence to identify weak validation assumptions, excessive collection, ambiguous normalization, unsafe error detail, sensitive logging, output-context confusion, and inconsistent ownership.",
  "Create a professional fictional Input Handling and Output Safety Review containing field contracts, validation rules, normalization decisions, output contexts, error behavior, logging limits, privacy requirements, safe test cases, owners, and public-safe documentation."
];

const vocabulary = [
  {
    "term": "Input",
    "definition": "Any fictional data entering a web workflow from a user, browser, API, supplier, file metadata record, administrative form, configuration source, or another service."
  },
  {
    "term": "Input contract",
    "definition": "A fictional definition of what a field or message is expected to mean, where it comes from, its type, format, size, allowed values, ownership, sensitivity, and rejection behavior."
  },
  {
    "term": "Untrusted input",
    "definition": "A defensive assumption that incoming fictional data must be checked against its expected contract before the application relies on it."
  },
  {
    "term": "Validation",
    "definition": "A fictional decision about whether supplied data meets the expected business and technical contract for the field or message."
  },
  {
    "term": "Normalization",
    "definition": "A controlled fictional transformation that converts equivalent accepted representations into one expected form before later processing, when appropriate."
  },
  {
    "term": "Allow-list-style rule",
    "definition": "A defensive design that describes what values or structures are expected instead of trying to list every possible bad value."
  },
  {
    "term": "Business validation",
    "definition": "A fictional check that asks whether an otherwise well-formed value makes sense for the approved workflow, ownership, status, or business rule."
  },
  {
    "term": "Output context",
    "definition": "The fictional destination where data is used or displayed, such as page text, a report, notification, log, export, administrative review panel, or service response."
  },
  {
    "term": "Context-aware output handling",
    "definition": "A defensive principle that data should be prepared for its exact destination rather than assuming one generic output rule works everywhere."
  },
  {
    "term": "Safe error behavior",
    "definition": "A fictional error design that helps legitimate users recover without exposing unnecessary implementation, secret, private, or security-sensitive detail."
  },
  {
    "term": "Data minimization",
    "definition": "Collecting, storing, displaying, and logging only the fictional information necessary for the approved purpose."
  },
  {
    "term": "Sensitive field",
    "definition": "A fictional field containing private, security-sensitive, identity-related, or business-sensitive information needing stronger handling."
  },
  {
    "term": "Canonical form",
    "definition": "The fictional normalized representation chosen for consistent comparison, storage, or business processing."
  },
  {
    "term": "Schema",
    "definition": "A fictional description of expected fields, types, relationships, required values, and constraints for structured input."
  },
  {
    "term": "Rejection behavior",
    "definition": "The fictional response when data does not meet its contract, including user feedback, logging, owner visibility, and whether processing safely stops."
  },
  {
    "term": "Safe test case",
    "definition": "An inert fictional value designed to test length, format, boundary, optionality, Unicode, normalization, or business-rule handling without exploit payloads or malicious content."
  }
];

const corePrinciples = [
  {
    "principle": "Define the contract before validation",
    "explanation": "A field cannot be validated well unless the team knows its business meaning, expected source, type, format, size, range, optionality, ownership, and sensitivity.",
    "question": "What exactly is this fictional field supposed to represent?"
  },
  {
    "principle": "Treat external data as untrusted",
    "explanation": "Browser, user, API, supplier, import, and administrative data should be checked against expected rules before the application relies on it.",
    "question": "Which trust boundary did this fictional data cross?"
  },
  {
    "principle": "Prefer expected-good rules",
    "explanation": "Defenders reason more clearly when they define accepted values and structures rather than trying to imagine every bad input.",
    "question": "What values, lengths, formats, and relationships are valid for the approved workflow?"
  },
  {
    "principle": "Normalize intentionally",
    "explanation": "Normalization should happen only when equivalent representations are expected and the transformation is clearly owned and tested.",
    "question": "Could normalization accidentally change business meaning or ownership?"
  },
  {
    "principle": "Separate technical and business validation",
    "explanation": "A value can be well-formed yet still be invalid for the current fictional user, resource, workflow stage, or business rule.",
    "question": "Is this value valid for this exact business context?"
  },
  {
    "principle": "Authorization still applies",
    "explanation": "Valid data does not grant permission. The subject must still be authorized for the protected action and resource.",
    "question": "Is the fictional subject allowed to submit or change this value for this resource?"
  },
  {
    "principle": "Handle output by destination",
    "explanation": "Data displayed as page text, reports, notifications, attributes, logs, exports, or administrative views may need different defensive handling.",
    "question": "Where will this fictional value appear next?"
  },
  {
    "principle": "Design safe errors",
    "explanation": "Errors should explain what legitimate users can fix without revealing unnecessary internal implementation, secrets, private data, or security-control detail.",
    "question": "What does the user need to know, and what should remain internal?"
  },
  {
    "principle": "Minimize stored and logged data",
    "explanation": "Validation does not justify collecting or logging every submitted value.",
    "question": "Which fictional fields are actually needed for the business, audit, support, or security purpose?"
  },
  {
    "principle": "Test safe boundaries",
    "explanation": "Defensive teams can test expected minimums, maximums, empty values, Unicode, spacing, valid alternate formats, and business states using inert fictional data.",
    "question": "Which safe boundary case proves the contract behaves as intended?"
  },
  {
    "principle": "Keep transformations traceable",
    "explanation": "If input is normalized, converted, summarized, or redacted, owners should know which representation is authoritative.",
    "question": "Which fictional representation is stored, displayed, audited, and compared?"
  },
  {
    "principle": "Review changes as new contracts",
    "explanation": "Adding a field, changing allowed values, changing output destination, or connecting a new API may change validation, privacy, authorization, monitoring, and retention requirements.",
    "question": "Which defensive assumptions changed with this feature?"
  }
];

const dataHandlingWorkflow = [
  {
    "step": "1. Define field purpose",
    "detail": "State the fictional business purpose, source, owner, user group, workflow, and sensitivity of the field or structured message.",
    "output": "Purpose and ownership statement."
  },
  {
    "step": "2. Define the input contract",
    "detail": "Document type, required/optional status, length, range, accepted values, expected format, relationships, and privacy classification.",
    "output": "Field or schema contract."
  },
  {
    "step": "3. Define normalization",
    "detail": "Decide whether whitespace, casing, date representation, identifiers, or equivalent fictional forms should be normalized.",
    "output": "Normalization decision and canonical form."
  },
  {
    "step": "4. Define technical validation",
    "detail": "Check the fictional value against expected type, format, size, range, and structural rules.",
    "output": "Technical allow/reject result."
  },
  {
    "step": "5. Define business validation",
    "detail": "Confirm that the accepted value is appropriate for the subject, resource, ownership, workflow state, and business rule.",
    "output": "Business-validity result."
  },
  {
    "step": "6. Check authorization",
    "detail": "Confirm the fictional subject may create or change the protected field or resource.",
    "output": "Authorized or denied action."
  },
  {
    "step": "7. Store only what is needed",
    "detail": "Choose whether to store the original, normalized, minimized, redacted, or derived fictional representation according to purpose and policy.",
    "output": "Storage and retention decision."
  },
  {
    "step": "8. Handle output for the destination",
    "detail": "Prepare the fictional value for page text, reports, notifications, administrative views, logs, exports, or another specific context.",
    "output": "Context-aware output decision."
  },
  {
    "step": "9. Handle errors and logging",
    "detail": "Provide useful user feedback while keeping internal diagnostics, private data, secrets, and security-sensitive implementation detail out of public errors and unnecessary logs.",
    "output": "User-safe error plus internal review record."
  },
  {
    "step": "10. Validate and review changes",
    "detail": "Use safe inert test cases, owner review, expected outputs, privacy checks, monitoring, and regression evidence whenever the contract changes.",
    "output": "Input/output safety review package."
  }
];

const fieldContracts = [
  {
    "field": "Display Name",
    "purpose": "Show a fictional user-selected display label in approved portal contexts.",
    "expected": "Text, 1–60 display characters, ordinary letters/numbers/spacing and approved punctuation; international text supported.",
    "avoid": "Do not treat the value as trusted control information or log full history without purpose.",
    "review": "Trim surrounding spacing intentionally; preserve meaningful text; apply naming policy and destination-specific output handling."
  },
  {
    "field": "Case Subject",
    "purpose": "Provide a short fictional description of a support request.",
    "expected": "Plain text, 1–120 characters, required for case creation.",
    "avoid": "Do not copy full case subject into every security log or assume format validation grants case authorization.",
    "review": "Validate length, business presence, case authorization, notification/report destinations, and minimized logging."
  },
  {
    "field": "Case Note",
    "purpose": "Record fictional support information needed by authorized case participants.",
    "expected": "Long text within the approved maximum and policy for this lesson.",
    "avoid": "Do not log full note content by default or treat note validity as permission to edit any case.",
    "review": "Preserve meaningful text, enforce case authorization, minimize logs, and review report/export visibility."
  },
  {
    "field": "Priority",
    "purpose": "Represent fictional case priority used by service operations.",
    "expected": "One approved enumeration: Low, Standard, High, or Critical.",
    "avoid": "Do not accept arbitrary new values or allow all users to raise priority without business approval.",
    "review": "Map UI labels to canonical values and apply manager approval where required."
  },
  {
    "field": "Department",
    "purpose": "Associate fictional records with an approved department.",
    "expected": "One current identifier selected from the fictional directory.",
    "avoid": "Do not infer permission simply because the identifier is valid.",
    "review": "Use canonical ID, friendly display label, ownership rules, and assignment authorization."
  },
  {
    "field": "Report Date Range",
    "purpose": "Define the fictional reporting period.",
    "expected": "Valid start/end dates; start not after end; within approved historical range.",
    "avoid": "Do not treat two well-formed dates as business-valid automatically.",
    "review": "Normalize date representation and apply role-specific reporting-window policy."
  },
  {
    "field": "Notification Preference",
    "purpose": "Choose how fictional non-sensitive service updates are delivered.",
    "expected": "One approved preference value.",
    "avoid": "Do not let preference suppress mandatory security-critical notices where policy requires them.",
    "review": "Map to canonical preference and record only necessary setting-change metadata."
  },
  {
    "field": "Attachment Metadata",
    "purpose": "Describe safe metadata for an already-approved fictional attachment without opening or inspecting file contents.",
    "expected": "Invented file label, category, declared size, uploader role, and case ID.",
    "avoid": "Do not open suspicious real files, include real paths, or inspect content during this lesson.",
    "review": "Validate metadata schema, case ownership, category, and safe display/logging only."
  },
  {
    "field": "API Report Filter",
    "purpose": "Select a fictional report category, date window, and optional team scope for an approved internal reporting workflow.",
    "expected": "Approved category plus valid dates and optional canonical team scope.",
    "avoid": "Do not assume a valid team identifier is authorized for the caller.",
    "review": "Separate schema validity, business validity, and caller authorization."
  }
];

const handlingDimensions = [
  {
    "dimension": "Source",
    "question": "Where did the fictional data come from?",
    "strongEvidence": "Known user form, approved API, supplier contract, administrative workflow, or pre-supplied metadata.",
    "weakAssumption": "Internal source means the data can be trusted without validation."
  },
  {
    "dimension": "Purpose",
    "question": "Why does the application need this field?",
    "strongEvidence": "Documented business or security purpose and owner.",
    "weakAssumption": "Collect it now because it might be useful later."
  },
  {
    "dimension": "Type and format",
    "question": "What representation is expected?",
    "strongEvidence": "Explicit text, enumeration, date, identifier, or structured schema rules.",
    "weakAssumption": "Any value that can be stored is acceptable."
  },
  {
    "dimension": "Size and range",
    "question": "What boundaries are legitimate?",
    "strongEvidence": "Business-supported minimum, maximum, date window, numeric range, or set of values.",
    "weakAssumption": "Unlimited input is simpler."
  },
  {
    "dimension": "Normalization",
    "question": "Which equivalent forms should become canonical?",
    "strongEvidence": "Documented transformations with preserved business meaning.",
    "weakAssumption": "Lowercase, trim, or rewrite everything automatically."
  },
  {
    "dimension": "Business validity",
    "question": "Does the value make sense for this workflow?",
    "strongEvidence": "Current resource state, ownership, role, policy, and business relationship.",
    "weakAssumption": "Well-formed means business-valid."
  },
  {
    "dimension": "Output context",
    "question": "Where will the value appear?",
    "strongEvidence": "Known page, report, notification, log, export, admin view, or service response.",
    "weakAssumption": "One output rule is enough everywhere."
  },
  {
    "dimension": "Privacy and logging",
    "question": "What should be retained or recorded?",
    "strongEvidence": "Purpose-limited storage, minimized logs, approved retention, and audience rules.",
    "weakAssumption": "More data always improves troubleshooting and security."
  }
];

const safeReviewCases = [
  {
    "caseId": "IO-CASE-01",
    "scenario": "A fictional Case Subject uses exactly the maximum approved length.",
    "subject": "Authorized Support User",
    "resource": "Case Subject",
    "action": "Create case",
    "context": "120 harmless characters; case ownership valid.",
    "decision": "Accept",
    "reason": "The value is at the documented boundary and the action is authorized.",
    "monitoring": "Record case-created event metadata, not full subject content in general security logs."
  },
  {
    "caseId": "IO-CASE-02",
    "scenario": "A fictional Case Subject is one character over the approved maximum.",
    "subject": "Authorized Support User",
    "resource": "Case Subject",
    "action": "Create case",
    "context": "121 harmless characters.",
    "decision": "Reject safely",
    "reason": "The value exceeds the field contract even though it contains no malicious content.",
    "monitoring": "Record validation-failure category if useful; avoid copying unnecessary content."
  },
  {
    "caseId": "IO-CASE-03",
    "scenario": "A Reporting Analyst submits a valid category and date range but requests Team Gold without authorization.",
    "subject": "Reporting Analyst Blue",
    "resource": "Team Gold Report",
    "action": "Generate report",
    "context": "Technically valid filter; ownership/authorization mismatch.",
    "decision": "Deny team scope",
    "reason": "Validation does not replace authorization.",
    "monitoring": "Record authorization decision and report metadata without assuming malicious intent."
  },
  {
    "caseId": "IO-CASE-04",
    "scenario": "A display name contains ordinary international characters supported by policy.",
    "subject": "Authenticated User",
    "resource": "Display Name",
    "action": "Update profile",
    "context": "Within length; Unicode-supported field; naming policy satisfied.",
    "decision": "Accept",
    "reason": "The contract supports legitimate international text.",
    "monitoring": "Normal profile-change metadata if required."
  },
  {
    "caseId": "IO-CASE-05",
    "scenario": "A user selects an unknown harmless priority label not present in the approved enumeration.",
    "subject": "Support User",
    "resource": "Priority",
    "action": "Set priority",
    "context": "Value is text but not an allowed canonical option.",
    "decision": "Reject safely",
    "reason": "Enumeration contracts accept only approved values.",
    "monitoring": "Validation category and field name if useful; no need for excessive content."
  },
  {
    "caseId": "IO-CASE-06",
    "scenario": "A valid date pair has the end date before the start date.",
    "subject": "Reporting Analyst",
    "resource": "Report Date Range",
    "action": "Generate report",
    "context": "Both dates individually valid; ordering invalid.",
    "decision": "Reject by business validation",
    "reason": "Well-formed values can still violate business relationships.",
    "monitoring": "User-safe error and optional report-validation metric."
  },
  {
    "caseId": "IO-CASE-07",
    "scenario": "A new Internal Explanation field is proposed for an internal workflow but would also appear in user notifications.",
    "subject": "Product Change",
    "resource": "Internal Explanation",
    "action": "Add field/output",
    "context": "Purpose and audience conflict unresolved.",
    "decision": "Hold release",
    "reason": "New output destination changes privacy, audience, authorization, and handling requirements.",
    "monitoring": "Change-review record and owner decision."
  },
  {
    "caseId": "IO-CASE-08",
    "scenario": "A fictional attachment metadata record references an unsupported category.",
    "subject": "Approved Case User",
    "resource": "Attachment Metadata",
    "action": "Associate metadata",
    "context": "Metadata only; no file content is opened or inspected.",
    "decision": "Reject metadata state",
    "reason": "The pre-supplied fictional category is outside the approved schema.",
    "monitoring": "Metadata validation event only; no real file handling."
  }
];

const errorRules = [
  {
    "field": "Invalid format",
    "requirement": "Tell the fictional user which expected format is required in simple language.",
    "failure": "Expose internal parsing, stack, path, or implementation details."
  },
  {
    "field": "Missing required value",
    "requirement": "Identify the missing field and the legitimate next step.",
    "failure": "Return a generic failure that gives the user no recovery guidance."
  },
  {
    "field": "Unauthorized change",
    "requirement": "State that the action is not permitted and direct the user to the approved owner/support path.",
    "failure": "Reveal hidden role logic, internal identifiers, or detailed policy internals."
  },
  {
    "field": "Unexpected server condition",
    "requirement": "Provide a safe reference while keeping diagnostics inside approved restricted monitoring.",
    "failure": "Display stack details, internal paths, secrets, or configuration values."
  },
  {
    "field": "Sensitive field rejection",
    "requirement": "Name the field/rule without unnecessarily echoing the entire sensitive value.",
    "failure": "Copy rejected sensitive content into the page and logs."
  },
  {
    "field": "Supplier/API validation failure",
    "requirement": "Use an abstract failure category, correlation/reference ID, source health, and owner-visible diagnostic summary.",
    "failure": "Expose full internal requests, credentials, headers, or implementation details."
  },
  {
    "field": "File metadata rejection",
    "requirement": "Use only fictional pre-supplied metadata and reject unsupported category/state safely.",
    "failure": "Open or inspect a suspicious real file to learn more."
  },
  {
    "field": "Logging policy",
    "requirement": "Record only metadata needed for the approved business, security, or audit question.",
    "failure": "Log full user content by default because it may help someday."
  }
];

const outputReviewQuestions = [
  "Which fictional audience receives this output?",
  "Is the subject authorized to view every field included in the destination?",
  "Can the destination use a minimized or aggregated representation instead?",
  "Does page text need different handling from a notification, report, log, or internal service response?",
  "Could a user-facing message accidentally include an internal-only field?",
  "Should the security log record event metadata rather than full submitted content?",
  "Does an export introduce new retention or distribution requirements?",
  "Does an administrative view expose unrelated business data simply because the viewer is privileged?",
  "Are error messages separated from internal diagnostics?",
  "Does the output contract still match the field's current business purpose and privacy classification?"
];

const changeTriggers = [
  {
    "trigger": "New field",
    "question": "Does the fictional field have a defined purpose, owner, sensitivity, contract, output, retention, and logging rule?",
    "action": "Run full field-contract review before release."
  },
  {
    "trigger": "New output destination",
    "question": "Does an existing field now reach a new audience, report, log, notification, export, or service?",
    "action": "Review authorization, privacy, output handling, minimization, and retention."
  },
  {
    "trigger": "Changed allowed values",
    "question": "Do business rules, canonical values, normalization, and safe tests still match?",
    "action": "Update the contract and regression set."
  },
  {
    "trigger": "Changed maximum size",
    "question": "Is the new boundary supported by real business need and downstream handling?",
    "action": "Review storage, display, notifications, reports, logs, and performance assumptions conceptually."
  },
  {
    "trigger": "New API caller",
    "question": "Does the caller need every field in the schema and response?",
    "action": "Review caller authorization, validation, minimization, errors, monitoring, and versioning."
  },
  {
    "trigger": "New supplier",
    "question": "Which fictional data crosses the new ownership boundary?",
    "action": "Review purpose, minimization, expected format, errors, retention, monitoring, and failure handling."
  },
  {
    "trigger": "Logging change",
    "question": "Does the new log content answer a defender question without excessive private data?",
    "action": "Apply minimization, access, retention, and review."
  },
  {
    "trigger": "Privacy or policy change",
    "question": "Do current collection, display, logs, reports, and retention remain necessary?",
    "action": "Reclassify fields and update contracts, outputs, tests, and owner decisions."
  }
];

const evidenceSet = [
  {
    "id": "IO-01",
    "source": "Fictional field inventory",
    "health": "Current",
    "observation": "Nine fictional fields have documented purpose, source, type, expected contract, output destinations, and logging expectations.",
    "supports": "A structured input/output review.",
    "limits": "Documentation does not prove every implementation follows the contract.",
    "use": "Compare safe test cases and owner decisions."
  },
  {
    "id": "IO-02",
    "source": "Fictional case-form design",
    "health": "Current",
    "observation": "Case Subject allows up to 120 characters and Case Note uses a separate larger approved limit.",
    "supports": "Field-specific rather than one-size-fits-all validation.",
    "limits": "Length rules alone do not establish business validity or authorization.",
    "use": "Test safe boundaries and output destinations."
  },
  {
    "id": "IO-03",
    "source": "Fictional logging summary",
    "health": "Conditional",
    "observation": "Security logs record case-note creation events, but one draft proposes logging the full note content for troubleshooting.",
    "supports": "A logging-minimization review is needed.",
    "limits": "Does not prove private content has already been exposed.",
    "use": "Prefer event metadata and restricted diagnostics over full user content."
  },
  {
    "id": "IO-04",
    "source": "Fictional error-design record",
    "health": "Current",
    "observation": "User-facing errors use short safe messages while internal diagnostic references are available only to approved support owners.",
    "supports": "Separation of user guidance from internal diagnostics.",
    "limits": "Does not prove every error path is covered.",
    "use": "Review consistency across forms, APIs, reports, and admin workflows."
  },
  {
    "id": "IO-05",
    "source": "Fictional report-filter schema",
    "health": "Current",
    "observation": "The report filter validates category and dates but team-scope authorization is documented separately.",
    "supports": "Validation and authorization are separate controls.",
    "limits": "Does not prove all resource-access rules are correct.",
    "use": "Demonstrate technical validity versus business authorization."
  },
  {
    "id": "IO-06",
    "source": "Fictional display-name policy",
    "health": "Current",
    "observation": "International characters are supported and surrounding whitespace is normalized.",
    "supports": "Inclusive validation and deliberate normalization.",
    "limits": "Does not answer every naming-policy case.",
    "use": "Safe Unicode and normalization test cases."
  },
  {
    "id": "IO-07",
    "source": "Fictional output review",
    "health": "Current",
    "observation": "The same Case Subject appears in case headers, notifications, and reports under different authorization and privacy contexts.",
    "supports": "Output handling must consider destination and audience.",
    "limits": "Does not prove one destination is unsafe.",
    "use": "Review context, privacy, authorization, and minimization."
  },
  {
    "id": "IO-08",
    "source": "Fictional change proposal",
    "health": "Current",
    "observation": "A new free-text Internal Explanation field would be visible in a user notification unless the output design is changed.",
    "supports": "A field/output contract change with privacy and audience implications.",
    "limits": "Does not prove data has already been sent externally.",
    "use": "Hold release until output scope, authorization, privacy, and logging are reviewed."
  }
];

const commonMistakes = [
  {
    "mistake": "One validation rule for every field",
    "why": "Different fictional fields have different business meaning, type, size, privacy, output, and ownership.",
    "correction": "Create field-specific contracts."
  },
  {
    "mistake": "Validation replaces authorization",
    "why": "A perfectly formatted value may still be submitted by the wrong subject or for the wrong resource.",
    "correction": "Keep technical/business validation and authorization as separate decisions."
  },
  {
    "mistake": "Normalization is always harmless",
    "why": "Changing case, spacing, identifiers, or formatting can alter business meaning when the contract is unclear.",
    "correction": "Normalize only documented equivalent forms and keep the canonical representation explicit."
  },
  {
    "mistake": "One output rule works everywhere",
    "why": "Page text, notifications, reports, logs, admin views, and service responses have different audience and privacy requirements.",
    "correction": "Handle data according to its exact destination."
  },
  {
    "mistake": "Errors reveal internal detail",
    "why": "Legitimate users need recovery guidance, not internal paths, secrets, implementation details, or private diagnostic data.",
    "correction": "Separate user-safe errors from restricted internal diagnostics."
  },
  {
    "mistake": "Log full user content for convenience",
    "why": "Security and operational questions often need event metadata, not the entire submitted value.",
    "correction": "Minimize logs and record only what the approved purpose needs."
  },
  {
    "mistake": "Only malicious-looking inputs deserve tests",
    "why": "Important defects also appear at harmless boundaries such as empty, maximum-length, Unicode, date-order, or ownership cases.",
    "correction": "Use inert safe test cases tied to the contract."
  },
  {
    "mistake": "Inspect suspicious real files during a lesson",
    "why": "A10.4 is about design and metadata reasoning, not file analysis or malware handling.",
    "correction": "Use fictional pre-supplied metadata only and follow approved safe processes for real files."
  }
];

const labPhases = [
  {
    "phase": "Phase 1 — Build the field inventory",
    "tasks": [
      "Use Display Name, Case Subject, Case Note, Priority, Department, Report Date Range, Notification Preference, Attachment Metadata, and API Report Filter.",
      "Record source, purpose, owner, sensitivity, type, optionality, and output destinations.",
      "Mark which fields are user-provided, service-provided, or pre-supplied fictional metadata."
    ]
  },
  {
    "phase": "Phase 2 — Define contracts",
    "tasks": [
      "Document expected types, allowed values, size/range, format, relationships, and rejection behavior.",
      "Use allow-list-style expected-good definitions.",
      "Do not create attack strings, payloads, or bypass examples."
    ]
  },
  {
    "phase": "Phase 3 — Define normalization",
    "tasks": [
      "Decide where surrounding whitespace, case, dates, or identifiers use a canonical form.",
      "Document where normalization is intentionally not performed.",
      "Record the owner and reason for every transformation."
    ]
  },
  {
    "phase": "Phase 4 — Separate validation and authorization",
    "tasks": [
      "Create at least six fictional examples where data is technically valid but business or authorization rules still matter.",
      "Use case ownership, manager approval, report scope, and department assignment examples.",
      "Explain the separate decision order."
    ]
  },
  {
    "phase": "Phase 5 — Review output contexts",
    "tasks": [
      "Map each field to page text, notification, report, admin view, log, export, or internal service response.",
      "Document audience, authorization, minimization, and handling expectations.",
      "Identify fields that should never appear in general security logs or broad notifications."
    ]
  },
  {
    "phase": "Phase 6 — Design safe errors and logs",
    "tasks": [
      "Create user-safe error messages for invalid format, missing required value, unauthorized change, report-range error, and service failure.",
      "Create separate internal diagnostic metadata requirements.",
      "Avoid real paths, secrets, tokens, private values, or detailed implementation information."
    ]
  },
  {
    "phase": "Phase 7 — Build the safe test set",
    "tasks": [
      "Use minimum, maximum, over-maximum, optional-empty, required-missing, allowed enumeration, unknown enumeration, whitespace, Unicode, date-order, ownership mismatch, and safe-error cases.",
      "Record expected result and reason.",
      "Keep every value inert and fictional."
    ]
  },
  {
    "phase": "Phase 8 — Produce the review package",
    "tasks": [
      "Create field contracts, normalization register, validation matrix, output-context map, error policy, logging/minimization rules, safe tests, evidence review, findings, owners, validation criteria, leadership summary, and public-safe portfolio summary.",
      "Record Unknowns rather than inventing implementation detail.",
      "Keep the package free of exploit strings or real data."
    ]
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A10
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

export default function InputHandlingAndOutputSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A10.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Data Handling Safety
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.4 Input Handling and Output Safety
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders define safe fictional input
            contracts, validate expected data, normalize intentionally, keep
            authorization separate, store only what is needed, handle output
            according to destination, design user-safe errors, minimize logs,
            protect privacy, and test boundaries using harmless inert values
            instead of attack payloads or exploitation strings.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Data Handling Safety Control Design"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.4 teaches safe data handling without injection payloads, exploit strings, bypass tricks, fuzzing, malicious file content, or real-form testing.",
            "I will use only invented Northbridge fields, values, forms, reports, notifications, logs, services, metadata, errors, and test cases.",
            "I can separate technical validation, business validation, authorization, storage, output handling, logging, and privacy as distinct decisions.",
            "I will use harmless inert values for boundary and format tests.",
            "I will not open, inspect, execute, upload, or test suspicious real files; attachment examples use fictional pre-supplied metadata only.",
            "I will keep real passwords, tokens, cookies, private user data, file paths, internal requests, implementation details, and secrets out of all lesson artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Valid Value Can Still Be Wrong for the Workflow"
        >
          <p className="leading-8">
            A fictional reporting form receives a valid department identifier
            and a valid date range. That does not automatically mean the current
            user may request that department's report. Technical validation can
            succeed while business validation or authorization still rejects the
            action.
          </p>
          <p className="mt-4 leading-8">
            Professional web defense separates several questions: Is the value
            shaped correctly? Does it make business sense? Is the user allowed
            to submit it? Should it be stored? Where will it be displayed? What
            should the user see if it is rejected? What should be logged? Which
            private data should never be copied into diagnostics?
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak handling</p>
              <p className="mt-2 leading-7">“The input passed the format check, so the application can trust and display it anywhere.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defender handling</p>
              <p className="mt-2 leading-7">“Format is one checkpoint. Business rules, authorization, normalization, storage, output context, privacy, errors, and logging still require separate decisions.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why It Matters"
          title="Safe Data Handling Connects Security, Privacy, Reliability, and User Experience"
        >
          <p className="leading-8">
            Weak contracts make applications ambiguous. Overly broad validation
            can accept values the business never intended. Overly strict
            validation can reject legitimate international users. Excessive
            logging can expose private content. Detailed errors can reveal
            information users do not need. Reusing one output rule everywhere
            can ignore important audience and privacy context.
          </p>
          <p className="mt-4 leading-8">
            Strong handling begins with expected data and purpose, not with a
            list of attacks. That design can be reviewed and tested safely using
            ordinary boundary cases and fictional evidence.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Data Handling Safety-Control Language"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="Twelve Data Handling Safety-Control Principles"
        >
          <div className="grid gap-5">
            {corePrinciples.map((item, index) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.principle}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.explanation}
                    </p>

                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                        Defender question
                      </p>
                      <p className="mt-2 text-sm leading-6">{item.question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Safe Data Handling Workflow"
        >
          <div className="grid gap-5">
            {dataHandlingWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.step}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.detail}</p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Input/Output Safety Dashboard"
          subtitle="A10.4 — safe data-handling review"
          metrics={[
            { label: "Field contracts", value: "9", note: "Text, enumeration, date, metadata, and structured-reporting examples" },
            { label: "Handling dimensions", value: "8", note: "Source, purpose, type, size, normalization, business validity, output, privacy/logging" },
            { label: "Safe review cases", value: "8", note: "Boundary, Unicode, enumeration, date, ownership, field-change, and metadata cases" },
            { label: "Primary rule", value: "Contract first", note: "Define expected-good data before deciding validation behavior" },
          ]}
        />

        <SectionCard
          eyebrow="Field Contracts"
          title="Nine Fictional Input Contracts"
        >
          <div className="grid gap-5">
            {fieldContracts.map((item) => (
              <article key={item.field} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Expected contract</p>
                    <p className="mt-2 text-sm leading-6">{item.expected}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Avoid</p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Review focus</p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Logging and Output Design Warning"
          severity="High"
          time="Northbridge data-handling review 14:20"
          source="A10.4 input-output review board"
          details="A draft troubleshooting change would copy the full fictional Case Note into general security logs and would also include a new Internal Explanation field in user-facing notifications without separate privacy, authorization, or output-context review."
          recommendation="Hold the change. Log only the metadata needed for the approved defender question, keep full case content out of general security logs, review the new field's audience and authorization, and define separate output rules for internal and user-facing destinations."
        />

        <SectionCard
          eyebrow="Handling Dimensions"
          title="Eight Inputs to a Defensible Data-Handling Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {handlingDimensions.map((item) => (
              <article key={item.dimension} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.question}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong evidence</p>
                  <p className="mt-2 text-sm leading-6">{item.strongEvidence}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Weak assumption</p>
                  <p className="mt-2 text-sm leading-6">{item.weakAssumption}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Data-Handling Review Log"
          logs={[
            "14:00 | FIELD | DisplayName | type=text | max=60 | normalize=trim",
            "14:03 | FIELD | Priority | type=enum | allowed=Low,Standard,High,Critical",
            "14:05 | BUSINESS | Priority=Critical | manager_approval=required",
            "14:07 | REPORT | DateRange | technical=valid | business=valid",
            "14:09 | AUTHZ | TeamScope=Gold | subject=Analyst-Blue | result=Deny",
            "14:12 | OUTPUT | CaseSubject | destinations=header,notification,report",
            "14:15 | LOGGING | CaseNote | full_content=false | event_metadata=true",
            "14:20 | REVIEW | InternalExplanation-to-user-notification=true | approval=hold",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Valid-but-Unauthorized Report Filter"
          question="A fictional analyst submits a structurally valid report category and date range, but requests Team Gold scope without authorization. What is the strongest result?"
          evidence={[
            "The category value is allowed.",
            "The date range is well formed and within policy.",
            "The analyst is authorized only for Team Blue.",
            "Validation and authorization are separate decisions.",
          ]}
          options={[
            "Allow because all fields passed validation.",
            "Reject the requested Team Gold scope because technical validity does not replace authorization.",
            "Change the analyst's role automatically.",
            "Treat the request as proof of malicious intent.",
          ]}
          bestAnswer={1}
          explanation="The input can be technically valid while the requested business action is unauthorized. Authorization remains a separate decision."
        />

        <SectionCard
          eyebrow="Safe Review Cases"
          title="Eight Fictional Input and Output Decisions"
        >
          <div className="grid gap-5">
            {safeReviewCases.map((item) => (
              <article key={item.caseId} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.caseId}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{item.decision}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.scenario}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[["Subject", item.subject],["Resource", item.resource],["Action", item.action],["Context", item.context],["Reason", item.reason],["Monitoring", item.monitoring]].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: Log Everything for Troubleshooting"
          scenario="A fictional developer proposes copying the complete Case Note into general security logs whenever a user saves a note. The stated goal is easier troubleshooting, but the defender questions currently require only the case identifier, actor role, event type, time, and result."
          choices={[
            { label: "Choice A", response: "Log the full note because more data always improves security.", outcome: "Excessive logging can increase privacy and exposure without improving the approved defender question.", tone: "risk" },
            { label: "Choice B", response: "Keep general security logs to the metadata needed for the defender question and use separately governed diagnostic processes only when additional content is genuinely necessary.", outcome: "This applies data minimization while preserving useful observability.", tone: "best" },
            { label: "Choice C", response: "Stop logging all case events.", outcome: "Useful event metadata can support security and operations without copying full private content.", tone: "caution" },
          ]}
        />

        <SectionCard
          eyebrow="Output Review"
          title="Ten Questions for Every Output Destination"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {outputReviewQuestions.map((question, index) => (
              <div key={question} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Output Question {index + 1}</p>
                <p className="mt-2 text-sm leading-7">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Errors and Logging"
          title="Eight Requirements for User-Safe Errors and Minimized Diagnostics"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {errorRules.map((item) => (
              <article key={item.field} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Requirement</p>
                  <p className="mt-2 text-sm leading-6">{item.requirement}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Failure pattern</p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the New Internal Explanation Field"
          question="What is the strongest response to IO-08?"
          evidence={[
            "A new free-text field is proposed.",
            "The field is intended for internal explanation.",
            "The current notification template would include the field in a user-facing message.",
            "No supplied evidence shows the field has already been exposed.",
          ]}
          options={[
            "Approve because the value is valid text.",
            "Hold release until purpose, audience, authorization, output destination, privacy, logging, retention, and user-notification behavior are explicitly reviewed.",
            "Delete all free-text fields from the application.",
            "Test the field with attack strings to decide whether it is safe.",
          ]}
          bestAnswer={1}
          explanation="A new field changes the data and output contract. The strongest defensive response is a structured review, not an assumption or offensive test."
        />

        <SectionCard
          eyebrow="Change Review"
          title="Eight Triggers for Rechecking a Data Contract"
        >
          <div className="grid gap-5">
            {changeTriggers.map((item) => (
              <article key={item.trigger} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.trigger}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Review question</p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Review action</p>
                    <p className="mt-2 text-sm leading-6">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Strict ASCII-Only Display Name"
          scenario="A fictional team proposes rejecting every display name containing ordinary international characters because the simplest validation rule accepts only basic English letters. Northbridge supports users in multiple languages."
          choices={[
            { label: "Choice A", response: "Approve the strict rule because narrower input is always more secure.", outcome: "Overly restrictive validation can reject legitimate users and create accessibility and inclusion problems without a business need.", tone: "risk" },
            { label: "Choice B", response: "Define the legitimate international-text requirements, choose a Unicode-aware display-name contract, normalize only documented equivalent forms, and test with safe ordinary international names.", outcome: "This keeps validation tied to real business requirements and safe test cases.", tone: "best" },
            { label: "Choice C", response: "Remove all validation from the field.", outcome: "Supporting international users does not require abandoning an expected contract.", tone: "caution" },
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence"
          title="Northbridge Input and Output Evidence Set"
        >
          <div className="grid gap-5">
            {evidenceSet.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.health}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.source}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limits", item.limits],
                    ["Review use", item.use],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Eight Input and Output Mistakes to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build the Northbridge Input and Output Safety Review"
        >
          <p className="leading-8">
            Use only the fictional fields, output contexts, safe review cases,
            evidence records, and error examples on this page. The lab teaches
            contract design, privacy, authorization, output context, error
            handling, logging, and safe validation—not exploitation.
          </p>
          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
              <article key={item.phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.phase}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not use injection strings, exploit payloads, bypass examples,
              fuzzing, malicious markup, malicious file content, real forms,
              real APIs, real accounts, or real websites. Do not open or inspect
              suspicious files. Use harmless invented values and fictional
              pre-supplied metadata only.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design One Field Correctly Across Six Destinations"
        >
          <p className="leading-8">
            Choose the fictional Case Subject field and review it across case
            creation, case-header display, team notification, management report,
            audit log, and approved export. The value is the same, but the
            defensive context changes.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Write the complete Case Subject input contract.",
              "Define minimum, maximum, optionality, expected characters, normalization, and rejection behavior.",
              "Separate technical validation, business validation, and authorization.",
              "Define how the value is stored and which representation is authoritative.",
              "Create context-aware handling decisions for all six output destinations.",
              "Define what should and should not appear in audit/security logs.",
              "Write user-safe error messages for missing, over-length, and unauthorized changes.",
              "Create eight inert safe test cases without attack strings.",
              "Add privacy and retention decisions for notifications, reports, and exports.",
              "Write a leadership summary explaining why one field needs multiple defensive decisions across its lifecycle.",
            ].map((item) => <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>)}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.4 Input Handling and Output Safety Checklist"
          items={[
            "I can define a fictional input contract before deciding validation rules.",
            "I can treat browser, API, supplier, service, and administrative data as untrusted until checked against the expected contract.",
            "I can use allow-list-style expected-good rules.",
            "I can normalize only documented equivalent forms.",
            "I can separate technical validation, business validation, and authorization.",
            "I can map the same value to different output contexts and audiences.",
            "I can design user-safe errors without exposing internal or sensitive detail.",
            "I can minimize logs and avoid copying full user content when metadata answers the defender question.",
            "I can use inert safe tests for length, optionality, Unicode, dates, enumerations, ownership, and error behavior.",
            "I can treat file examples as fictional metadata only without opening or inspecting suspicious content.",
            "I can record Unknowns and change-review requirements when a new field or destination changes the contract.",
            "I can create a public-safe input/output portfolio artifact with no exploit strings, real data, private content, or implementation secrets.",
          ]}
        />

        <MiniQuiz
          title="A10.4 Mini Quiz: Input Handling and Output Safety"
          questions={[
            {
              question: "What should come before writing validation rules for a fictional field?",
              choices: [
                "A list of attack strings.",
                "The field's business purpose, source, type, format, size, allowed values, ownership, sensitivity, and rejection behavior.",
                "A real-world exploit test.",
                "A general rule that applies to every field.",
              ],
              answer: 1,
              explanation: "Good validation begins with an explicit expected contract.",
            },
            {
              question: "A fictional report filter is well formed but requests a team the user cannot access. What is strongest?",
              choices: [
                "Allow because validation passed.",
                "Reject the unauthorized team scope because validation and authorization are separate.",
                "Change the user's role.",
                "Treat the request as proof of malicious intent.",
              ],
              answer: 1,
              explanation: "Technical validity does not grant permission for the business action.",
            },
            {
              question: "Why should output handling consider destination?",
              choices: [
                "One generic rule is always enough.",
                "Page text, notifications, reports, logs, exports, and service responses have different audiences, privacy, authorization, and handling requirements.",
                "Output never needs review.",
                "Only logs need special handling.",
              ],
              answer: 1,
              explanation: "The same value can appear in multiple contexts with different defensive requirements.",
            },
            {
              question: "Which logging choice is strongest for fictional Case Note creation?",
              choices: [
                "Always log the entire note.",
                "Log event metadata such as case ID, actor role, time, and result unless a separately governed diagnostic purpose needs more.",
                "Never log that a note was created.",
                "Send the note to every monitoring source.",
              ],
              answer: 1,
              explanation: "Data minimization keeps observability useful without unnecessarily copying private content.",
            },
            {
              question: "What is a safe fictional boundary test?",
              choices: [
                "Use an exploit payload.",
                "Use a harmless repeated-letter value at the maximum approved length.",
                "Test a real production form.",
                "Open a suspicious file.",
              ],
              answer: 1,
              explanation: "Inert values can test the contract without offensive content.",
            },
            {
              question: "What should a user-facing error do?",
              choices: [
                "Reveal internal paths and implementation details.",
                "Explain what the legitimate user can correct while keeping unnecessary internal, secret, private, and security-sensitive detail out of the response.",
                "Echo every rejected sensitive value.",
                "Show the complete diagnostic log.",
              ],
              answer: 1,
              explanation: "Safe errors help users recover without exposing details they do not need.",
            },
            {
              question: "What is strongest when a new field is added to a user notification?",
              choices: [
                "Assume existing validation makes it safe.",
                "Review field purpose, audience, authorization, privacy, output context, logging, retention, and safe test cases before release.",
                "Test it with attack payloads.",
                "Remove all notifications.",
              ],
              answer: 1,
              explanation: "A new destination changes the data contract and requires structured defensive review.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Input Handling and Output Safety Review"
          prompt="Create a fully fictional A10.4 Input Handling and Output Safety Review for Northbridge. Include field inventory; sources; business purpose; owner; sensitivity; type; required/optional state; allowed values; size/range; expected format; schema; normalization; canonical form; technical validation; business validation; authorization dependency; storage decision; retention; output contexts; user-visible text; reports; notifications; administrative views; logs; exports; service responses; safe errors; internal diagnostics; privacy/minimization; safe inert test cases; evidence records; findings; remediation owners; validation criteria; change-review triggers; technical summary; leadership summary; governance summary; and public-safe documentation. Use only invented values and do not include exploit strings, attack payloads, real data, real file content, or sensitive implementation detail."
          tips={[
            "Start with the expected field contract, not a list of bad inputs.",
            "Keep technical validation, business validation, and authorization separate.",
            "Normalize only documented equivalent forms.",
            "Review output by exact destination and audience.",
            "Minimize user-submitted content in logs and errors.",
            "Use harmless inert values for all test cases.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A10.5 API Security Concepts?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for defining field contracts,
            validation, normalization, business rules, authorization,
            context-aware output, safe errors, privacy, logging, and inert tests.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can define an input contract before validation rules.",
              "I can separate technical validation from business validation.",
              "I can explain why valid data may still be unauthorized.",
              "I can normalize only intentional equivalent forms.",
              "I can map data safely to different output destinations.",
              "I can design user-safe errors and restricted diagnostics.",
              "I can minimize logs while preserving useful event metadata.",
              "I can create inert tests for normal boundaries and business rules.",
              "I can review new fields and destinations as contract changes.",
              "I am ready to apply these ideas to API interactions in A10.5.",
            ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>)}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What a Strong A10.4 Artifact Should Show"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A field inventory with purpose, owner, sensitivity, and source",
              "Field-specific expected types, formats, lengths, ranges, and allowed values",
              "Clear required/optional behavior",
              "Normalization and canonical-form decisions",
              "Technical validation separated from business validation",
              "Authorization dependencies for protected field changes",
              "Storage and retention decisions",
              "Output-context mapping",
              "Privacy-aware notification and report behavior",
              "Minimized audit/security logging",
              "User-safe error patterns",
              "Restricted internal diagnostic rules",
              "Safe inert test cases",
              "Evidence-based findings and owners",
              "Change-review triggers for new fields and destinations",
              "A public-safe review package with no offensive or sensitive content",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Portfolio element {index + 1}</p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Safe web data handling starts with an explicit expected contract for each fictional field or message.",
            "Technical validation, business validation, authorization, storage, output handling, errors, logging, and privacy are separate decisions.",
            "Allow-list-style expected-good rules are easier to reason about than trying to imagine every bad value.",
            "Normalization should be intentional, documented, and tied to a canonical representation.",
            "A technically valid value may still be wrong for the current user, resource, ownership, or workflow.",
            "The same data value may need different handling in page text, notifications, reports, logs, exports, and internal service responses.",
            "User-facing errors should support recovery without exposing unnecessary internal, secret, private, or security-sensitive detail.",
            "Security logs often need event metadata rather than the complete user-submitted content.",
            "Safe inert tests can cover boundaries, optionality, Unicode, normalization, dates, enumerations, ownership, and errors without offensive payloads.",
            "A10.4 prepares you for A10.5, where the same contract, authorization, validation, output, error, monitoring, privacy, and dependency principles are applied to APIs.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Safe Data Design — No Injection or Exploitation Testing</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.4 authorizes testing real forms, pages, APIs,
            accounts, files, fields, or websites. Do not use injection strings,
            exploit payloads, malicious markup, fuzzing, bypass techniques,
            malicious files, or suspicious real content. Do not open or inspect
            suspicious files. Use only harmless invented values, fictional
            schemas, pre-supplied metadata, and safe expected-result testing.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to API Security Concepts</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.4 established contracts, validation, normalization,
            authorization, storage, output contexts, safe errors, logging,
            privacy, and inert testing. A10.5 will extend these same principles
            to fictional API callers, service identities, resources, actions,
            schemas, object ownership, error behavior, versioning, dependencies,
            resource protection, monitoring, and resilience.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}