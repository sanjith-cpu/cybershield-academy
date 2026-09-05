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
const previousLesson = `${modulePath}/input-handling-and-output-safety`;
const nextLesson = `${modulePath}/secure-headers-and-browser-protections`;

const objectives = [
  "Explain how secure API design connects caller identity, authorization, object ownership, request contracts, resource actions, response minimization, safe errors, dependencies, versioning, monitoring, and resilience.",
  "Evaluate fictional API access using caller purpose, service identity, least privilege, resource sensitivity, action scope, object ownership, business context, source health, and decision ownership.",
  "Design fictional API contracts with explicit request schemas, bounded responses, safe error behavior, version ownership, privacy expectations, and resource-protection concepts without offensive testing.",
  "Use fictional evidence to identify excessive API privilege, ambiguous service-identity ownership, weak object-scope assumptions, over-broad responses, hidden dependency risk, monitoring gaps, and incomplete version governance.",
  "Create a professional fictional API Defense Review package containing callers, resources, actions, schemas, ownership rules, response limits, errors, dependencies, monitoring questions, resilience decisions, remediation owners, and public-safe documentation."
];

const vocabulary = [
  {
    "term": "API",
    "definition": "A fictional contract allowing approved applications or services to request specific data or actions from another service."
  },
  {
    "term": "Caller",
    "definition": "The fictional user, application, service, or service identity requesting an API action."
  },
  {
    "term": "Service identity",
    "definition": "A fictional non-human identity representing an approved application or service under explicit purpose and privilege."
  },
  {
    "term": "Resource",
    "definition": "The fictional object or capability exposed by an API, such as case status, report summary, profile preference, recovery state, or configuration."
  },
  {
    "term": "API action",
    "definition": "The bounded fictional operation requested on a resource, such as read status, update an approved field, generate a report, or perform a privileged configuration change."
  },
  {
    "term": "Request schema",
    "definition": "The fictional contract describing required and optional fields, types, allowed values, sizes, relationships, and business meaning for a request."
  },
  {
    "term": "Response schema",
    "definition": "The fictional contract defining which approved fields a caller receives and their meaning, sensitivity, and optionality."
  },
  {
    "term": "Object ownership",
    "definition": "The fictional relationship determining whether a caller is legitimately associated with the exact resource requested."
  },
  {
    "term": "Least privilege",
    "definition": "Giving a fictional caller only the API resources and actions required for its approved purpose."
  },
  {
    "term": "Response minimization",
    "definition": "Returning only the fictional fields the caller needs instead of every field stored by the service."
  },
  {
    "term": "Safe API error",
    "definition": "A fictional failure response that provides useful handling information without exposing unnecessary internal, secret, private, or security-sensitive detail."
  },
  {
    "term": "Versioning",
    "definition": "A fictional process for managing API contract changes, compatibility, migration, validation, ownership, and retirement."
  },
  {
    "term": "Dependency",
    "definition": "A fictional internal or supplier service an API relies on for identity, data, monitoring, reporting, recovery, or another business function."
  },
  {
    "term": "Resource-protection concept",
    "definition": "A defensive design defining normal request size, response size, workload, concurrency, expensive-operation, and degraded-mode expectations without bypass guidance."
  },
  {
    "term": "Idempotency concept",
    "definition": "A fictional design property that helps repeated approved requests produce predictable business effects when the workflow requires it."
  },
  {
    "term": "Observability",
    "definition": "The ability of fictional owners and defenders to understand API health, access decisions, errors, version use, dependency state, and important changes through approved monitoring."
  }
];

const corePrinciples = [
  {
    "principle": "Start with caller purpose",
    "explanation": "Every fictional API caller should have an explicit business reason, owner, environment, and resource/action need.",
    "question": "Why does this caller need this exact API capability?"
  },
  {
    "principle": "Authenticate the caller",
    "explanation": "The API needs bounded identity context for the fictional caller before protected decisions can be made.",
    "question": "Which approved identity represents this caller?"
  },
  {
    "principle": "Authorize every protected action",
    "explanation": "Successful caller identity does not automatically grant every API resource or action.",
    "question": "Which explicit policy allows this caller to perform this action on this resource?"
  },
  {
    "principle": "Check object ownership",
    "explanation": "A caller may be allowed to access some fictional objects but not unrelated objects of the same type.",
    "question": "What relationship connects this caller to this exact resource?"
  },
  {
    "principle": "Define the request contract",
    "explanation": "Every request should have an expected structure, type, allowed values, size, relationships, and business meaning.",
    "question": "What does a valid fictional request look like before the API relies on it?"
  },
  {
    "principle": "Minimize the response",
    "explanation": "The API should return only the fields needed for the approved caller purpose.",
    "question": "Which response fields are actually necessary?"
  },
  {
    "principle": "Design safe errors",
    "explanation": "Legitimate callers need predictable failure categories without unnecessary internal, secret, or private detail.",
    "question": "What must the caller know to handle the failure safely?"
  },
  {
    "principle": "Protect resources proportionally",
    "explanation": "API design should define normal request sizes, work limits, concurrency, and business-volume assumptions without teaching bypass methods.",
    "question": "What normal workload should this API support while preserving availability?"
  },
  {
    "principle": "Govern versions",
    "explanation": "Contract changes can alter data, authorization, caller behavior, privacy, monitoring, dependencies, and support.",
    "question": "Who owns this version change, migration, validation, and retirement?"
  },
  {
    "principle": "Treat dependencies as governed trust",
    "explanation": "Internal and supplier APIs need purpose, owner, expected behavior, monitoring, failure handling, and re-review.",
    "question": "What happens when this dependency becomes unavailable or changes behavior?"
  },
  {
    "principle": "Monitor defender questions",
    "explanation": "API monitoring should focus on access decisions, errors, health, sensitive actions, version changes, source health, and business-impact signals.",
    "question": "Which API event helps an owner or defender make a decision?"
  },
  {
    "principle": "Record Unknowns",
    "explanation": "Incomplete ownership, service identity, version, dependency, or policy assumptions should become owned Unknowns rather than guessed conclusions.",
    "question": "Which missing fact prevents a defensible API decision?"
  }
];

const dataHandlingWorkflow = [
  {
    "step": "1. Define the API purpose",
    "detail": "Identify the fictional business service, caller classes, owners, resources, actions, sensitive data, availability goals, privacy goals, and exclusions.",
    "output": "API review charter."
  },
  {
    "step": "2. Define callers and identities",
    "detail": "List fictional users, application components, service identities, administrators, recovery roles, and suppliers with approved purposes.",
    "output": "Caller and service-identity register."
  },
  {
    "step": "3. Define resources and actions",
    "detail": "Map exact fictional resources and bounded actions instead of using broad API-access permissions.",
    "output": "Resource/action matrix."
  },
  {
    "step": "4. Define authorization and ownership",
    "detail": "Connect role, service purpose, object ownership, business scope, administrative context, and least privilege.",
    "output": "API authorization matrix."
  },
  {
    "step": "5. Define request schemas",
    "detail": "Document required/optional fields, types, allowed values, sizes, relationships, normalization, and business validation.",
    "output": "Request contracts."
  },
  {
    "step": "6. Define response schemas",
    "detail": "Return only approved fields and avoid unnecessary sensitive, administrative, identity, or internal data.",
    "output": "Minimized response contracts."
  },
  {
    "step": "7. Define errors and resource protection",
    "detail": "Create safe failure categories and normal workload/resource expectations without exposing unnecessary detail or bypass guidance.",
    "output": "Error and resilience policy."
  },
  {
    "step": "8. Review dependencies and versions",
    "detail": "Map internal/supplier dependencies, owner expectations, failure states, compatibility, migration, and retirement.",
    "output": "Dependency and version register."
  },
  {
    "step": "9. Design monitoring",
    "detail": "Tie access decisions, errors, health, sensitive actions, configuration, versions, source health, and dependency events to defender questions.",
    "output": "API monitoring plan."
  },
  {
    "step": "10. Validate and improve",
    "detail": "Use safe fictional contract cases, owner review, expected allow/deny decisions, monitoring, and resilience scenarios without unauthorized testing.",
    "output": "API Defense Review package."
  }
];

const fieldContracts = [
  {
    "field": "Case Status API",
    "purpose": "Provide approved fictional case status to Application Service B.",
    "expected": "Service Identity P; bounded case reference; read-status action; authorized workflow ownership; minimized status response.",
    "avoid": "Do not treat internal service identity as permission for every case or return full case content by default.",
    "review": "Caller purpose, case ownership, response fields, errors, dependencies, monitoring, recertification."
  },
  {
    "field": "Case Update API",
    "purpose": "Allow approved case participants to update selected workflow fields.",
    "expected": "Application Service B on behalf of an authenticated user; authorized case; approved action and field contract.",
    "avoid": "Do not let schema validity replace authorization or allow unrestricted field changes.",
    "review": "User/session context, case ownership, field authorization, business rule, change audit, safe response."
  },
  {
    "field": "Reporting API",
    "purpose": "Generate approved aggregate fictional reports.",
    "expected": "Reporting Service Q; approved report category, date range, team scope, and aggregate response.",
    "avoid": "Do not expose raw case content or unrelated team data because the caller is a reporting service.",
    "review": "Team authorization, aggregation, export purpose, privacy, response size, version, monitoring."
  },
  {
    "field": "Profile Preferences API",
    "purpose": "Allow users to manage approved personal portal preferences.",
    "expected": "Current authenticated user; own profile; approved preference actions and response fields.",
    "avoid": "Do not expose unrelated identity/admin data or permit edits to another user's resource.",
    "review": "Object ownership, sensitive-action state, schema, response minimization, audit."
  },
  {
    "field": "Administrative Configuration API",
    "purpose": "Support privileged application configuration.",
    "expected": "Application Administrator; privileged session; approved change; bounded setting/action; monitored result.",
    "avoid": "Do not combine ordinary user access with privileged configuration or assume admins own all business data.",
    "review": "Least privilege, change approval, rollback, monitoring, dependency health, session state."
  },
  {
    "field": "Recovery Validation API",
    "purpose": "Support staged fictional recovery checks.",
    "expected": "Recovery Service R or approved Recovery Operator; active recovery event; time-bound access; validation-only response.",
    "avoid": "Do not let recovery access become permanent production administration.",
    "review": "Event scope, expiration, dependencies, monitoring, rollback, owner approval."
  },
  {
    "field": "Supplier Status API",
    "purpose": "Exchange one purpose-limited fictional service status with Supplier S.",
    "expected": "Approved supplier identity; service identifier/status only; contracted business purpose.",
    "avoid": "Do not expose case content, user profiles, admin configuration, or reporting data.",
    "review": "Contract scope, minimization, retention, monitoring, outage behavior, re-review."
  },
  {
    "field": "API Version V2",
    "purpose": "Provide the current approved contract generation for supported callers.",
    "expected": "Documented caller migration, compatible schemas, updated authorization/privacy review, monitoring, owner and retirement plan for V1.",
    "avoid": "Do not leave deprecated versions indefinitely without owner-approved transition.",
    "review": "Migration state, version use, changed fields/actions, dependencies, privacy, retirement."
  },
  {
    "field": "Mobile Preferences Caller",
    "purpose": "Proposed fictional mobile client for Profile Preferences API.",
    "expected": "New caller identity, business purpose, own-profile scope, minimized response, version/support ownership.",
    "avoid": "Do not inherit browser-client privileges automatically.",
    "review": "Caller identity, authorization, schema, response, privacy, monitoring, support, version compatibility."
  }
];

const handlingDimensions = [
  {
    "dimension": "Caller identity",
    "question": "Who or what is making the fictional request?",
    "strongEvidence": "Current user or service identity, owner, environment, valid session/service context.",
    "weakAssumption": "Internal caller means trusted caller."
  },
  {
    "dimension": "Business purpose",
    "question": "Why is this API request needed?",
    "strongEvidence": "Documented workflow, owner, and approved service purpose.",
    "weakAssumption": "The caller may need it someday."
  },
  {
    "dimension": "Resource and action",
    "question": "What exact object/capability and operation are requested?",
    "strongEvidence": "Bounded resource plus read, update, report, configure, or validate action.",
    "weakAssumption": "API access means access to every action."
  },
  {
    "dimension": "Object ownership",
    "question": "What relationship connects the caller to this exact resource?",
    "strongEvidence": "Case assignment, own profile, approved team scope, service contract, recovery event.",
    "weakAssumption": "Same role means all objects."
  },
  {
    "dimension": "Request schema",
    "question": "Does the request meet its expected contract?",
    "strongEvidence": "Required fields, types, values, sizes, relationships, and business validation.",
    "weakAssumption": "Any parsable request is acceptable."
  },
  {
    "dimension": "Response scope",
    "question": "Which fields does the caller actually need?",
    "strongEvidence": "Minimized response tied to business purpose and authorization.",
    "weakAssumption": "Return everything and let the caller ignore extra fields."
  },
  {
    "dimension": "Dependency state",
    "question": "Are identity, data, supplier, monitoring, and recovery dependencies healthy enough for this decision?",
    "strongEvidence": "Current source health and approved degraded-mode rules.",
    "weakAssumption": "Dependency failure never changes security decisions."
  },
  {
    "dimension": "Version and monitoring",
    "question": "Which contract version and evidence sources apply?",
    "strongEvidence": "Supported version, migration state, source health, owner, and monitoring coverage.",
    "weakAssumption": "Older versions and blind intervals are equivalent to current healthy state."
  }
];

const safeReviewCases = [
  {
    "caseId": "API-CASE-01",
    "scenario": "Application Service B requests status for an authorized fictional case.",
    "subject": "Service Identity P",
    "resource": "Case Status API / Case C-104",
    "action": "Read status",
    "context": "Approved workflow and object ownership.",
    "decision": "Allow",
    "reason": "Caller purpose, action, and object scope align.",
    "monitoring": "Record caller, resource class, decision, health, and source state."
  },
  {
    "caseId": "API-CASE-02",
    "scenario": "The same service requests a case outside its approved workflow scope.",
    "subject": "Service Identity P",
    "resource": "Case Status API / unrelated case",
    "action": "Read status",
    "context": "Schema valid; ownership/business scope does not match.",
    "decision": "Deny",
    "reason": "Valid request shape does not replace authorization.",
    "monitoring": "Record denial without assuming malicious intent."
  },
  {
    "caseId": "API-CASE-03",
    "scenario": "Reporting Service Q requests Team Blue aggregate metrics.",
    "subject": "Reporting Service Q",
    "resource": "Reporting API / Team Blue",
    "action": "Generate report",
    "context": "Category/date valid and team scope approved.",
    "decision": "Allow",
    "reason": "Purpose and authorization align.",
    "monitoring": "Record report type, scope, result, size, and health metadata."
  },
  {
    "caseId": "API-CASE-04",
    "scenario": "Reporting Service Q requests Team Gold metrics without approved scope.",
    "subject": "Reporting Service Q",
    "resource": "Reporting API / Team Gold",
    "action": "Generate report",
    "context": "Technically valid schema; authorization mismatch.",
    "decision": "Deny",
    "reason": "Team scope is an independent authorization decision.",
    "monitoring": "Record policy decision and ownership mismatch."
  },
  {
    "caseId": "API-CASE-05",
    "scenario": "Application Administrator updates one approved configuration setting.",
    "subject": "Application Administrator",
    "resource": "Administrative Configuration API",
    "action": "Update bounded setting",
    "context": "Privileged session, change approval, monitoring Healthy.",
    "decision": "Allow",
    "reason": "Role, session, action scope, and owner approval align.",
    "monitoring": "Record privileged action, change reference, validation, rollback state."
  },
  {
    "caseId": "API-CASE-06",
    "scenario": "Supplier S requests full case details though its contract requires only service status.",
    "subject": "Supplier Integration S",
    "resource": "Case data outside supplier contract",
    "action": "Read full case",
    "context": "Well-formed request but purpose/scope exceeds contract.",
    "decision": "Deny",
    "reason": "Supplier trust is purpose-limited.",
    "monitoring": "Record scope mismatch and supplier-owner review trigger."
  },
  {
    "caseId": "API-CASE-07",
    "scenario": "Recovery Service R requests validation state during an active recovery event.",
    "subject": "Recovery Service R",
    "resource": "Recovery Validation API",
    "action": "Read validation state",
    "context": "Active event, time-bound approval, healthy monitoring.",
    "decision": "Allow temporarily",
    "reason": "Recovery purpose and event scope align.",
    "monitoring": "Record time-bound access and expiration."
  },
  {
    "caseId": "API-CASE-08",
    "scenario": "A caller uses fictional API V1 after its approved retirement date.",
    "subject": "Legacy Reporting Client",
    "resource": "Deprecated API V1",
    "action": "Generate report",
    "context": "No approved migration extension exists.",
    "decision": "Reject / transition",
    "reason": "Version lifecycle is an explicit contract decision.",
    "monitoring": "Record V1 use and migration owner."
  }
];

const errorRules = [
  {
    "field": "Validation failure",
    "requirement": "Return a safe category and enough field-level guidance for an approved caller to correct the request.",
    "failure": "Expose parser internals, private payload detail, or implementation paths."
  },
  {
    "field": "Authorization failure",
    "requirement": "Return a bounded denial without revealing hidden object details or internal policy structure.",
    "failure": "Return the protected data or explain hidden access internals."
  },
  {
    "field": "Object-scope mismatch",
    "requirement": "Preserve the denial and route legitimate ownership questions to the approved workflow.",
    "failure": "Treat a valid identifier as automatic proof of access."
  },
  {
    "field": "Dependency unavailable",
    "requirement": "Use a safe degraded/unavailable response and owner-visible health context.",
    "failure": "Invent data or bypass the dependency's control role."
  },
  {
    "field": "Deprecated version",
    "requirement": "Return safe migration/support guidance without exposing implementation detail.",
    "failure": "Keep retired behavior indefinitely with no owner."
  },
  {
    "field": "Privileged API error",
    "requirement": "Provide a safe reference and keep sensitive configuration diagnostics restricted.",
    "failure": "Expose configuration, secrets, or internal admin detail in the response."
  },
  {
    "field": "Supplier API error",
    "requirement": "Limit shared detail to contract purpose and provide a safe correlation reference.",
    "failure": "Send internal requests, secrets, or unrelated case data to the supplier."
  },
  {
    "field": "Logging policy",
    "requirement": "Record useful caller, resource class, action, decision, version, health, and result metadata while minimizing sensitive request/response content.",
    "failure": "Copy full sensitive payloads into general security logs by default."
  }
];

const outputReviewQuestions = [
  "Which fictional caller identity made the API request?",
  "What approved business purpose does this caller serve?",
  "Which exact resource and action were requested?",
  "What object ownership or team scope applies?",
  "Did the request meet the expected schema and business rules?",
  "Was the action independently authorized after validation?",
  "Did the response include only fields required by the caller purpose?",
  "Which API version and migration state applied?",
  "Were identity, data, supplier, monitoring, and recovery dependencies Healthy enough for the decision?",
  "Could useful monitoring metadata answer the defender question without storing full sensitive request or response content?"
];

const changeTriggers = [
  {
    "trigger": "New API caller",
    "question": "Does the caller have a defined identity, owner, purpose, resources, actions, version, privacy, and monitoring plan?",
    "action": "Run caller/service-identity review before release."
  },
  {
    "trigger": "New resource or action",
    "question": "Does the change expand authorization or object-ownership scope?",
    "action": "Re-run least-privilege and policy review."
  },
  {
    "trigger": "Response field added",
    "question": "Does every caller need the new field and is its privacy classification understood?",
    "action": "Review minimization, authorization, retention, and logging."
  },
  {
    "trigger": "Schema change",
    "question": "Do request validation, business rules, compatibility, and safe errors still match?",
    "action": "Update contract and safe regression cases."
  },
  {
    "trigger": "New supplier dependency",
    "question": "Which data and capability cross the new ownership boundary?",
    "action": "Review purpose, minimization, service identity, monitoring, outage plan, and re-review."
  },
  {
    "trigger": "New API version",
    "question": "Which authorization, data, error, dependency, privacy, and monitoring assumptions changed?",
    "action": "Create migration, validation, and retirement plan."
  },
  {
    "trigger": "Monitoring/source change",
    "question": "Can current evidence still support allow/deny, health, error, and absence claims?",
    "action": "Update source-health rules, gaps, correlation, and owner decisions."
  },
  {
    "trigger": "Recovery or major architecture change",
    "question": "Did time-bound access, dependencies, service identities, or resource scopes change?",
    "action": "Re-run API purpose, authorization, version, monitoring, and recertification review."
  }
];

const evidenceSet = [
  {
    "id": "API-E01",
    "source": "Fictional API catalog",
    "health": "Current",
    "observation": "Seven Northbridge APIs have documented purpose, callers, resources, actions, response scope, and dependencies.",
    "supports": "A structured API defense review.",
    "limits": "Documentation does not prove every implementation follows the contract.",
    "use": "Build caller/resource/action and response-minimization decisions."
  },
  {
    "id": "API-E02",
    "source": "Fictional service-identity register",
    "health": "Conditional",
    "observation": "Service Identity P has clear resource/action scope but its next recertification owner is not recorded.",
    "supports": "Current least-privilege purpose is documented.",
    "limits": "Lifecycle governance is incomplete.",
    "use": "Record an ownership Unknown and assign the service owner."
  },
  {
    "id": "API-E03",
    "source": "Fictional reporting contract",
    "health": "Current",
    "observation": "Reporting API validates report fields separately from Team scope authorization.",
    "supports": "Validation and authorization are distinct controls.",
    "limits": "Does not prove every team-scope rule is correct.",
    "use": "Evaluate API-CASE-03 and API-CASE-04."
  },
  {
    "id": "API-E04",
    "source": "Fictional response review",
    "health": "Current",
    "observation": "Case Status API returns status and safe summary fields rather than full case content.",
    "supports": "Response minimization.",
    "limits": "Does not prove every caller receives the correct object.",
    "use": "Review response schema plus object ownership."
  },
  {
    "id": "API-E05",
    "source": "Fictional supplier contract",
    "health": "Current",
    "observation": "Supplier S needs only service identifier and status.",
    "supports": "Purpose limitation and data minimization.",
    "limits": "Does not prove all supplier retention/failure behavior is correct.",
    "use": "Review supplier scope, errors, monitoring, and outage behavior."
  },
  {
    "id": "API-E06",
    "source": "Fictional version register",
    "health": "Current",
    "observation": "API V1 is scheduled for retirement after approved callers move to V2.",
    "supports": "Defined version lifecycle.",
    "limits": "Does not prove every caller has migrated.",
    "use": "Monitor version use and transition ownership."
  },
  {
    "id": "API-E07",
    "source": "Fictional monitoring summary",
    "health": "Healthy",
    "observation": "Allow/deny decisions, privileged actions, errors, version use, dependency health, and supplier interactions are monitored.",
    "supports": "High-level API observability.",
    "limits": "Does not prove every alert is high quality or privacy-minimized.",
    "use": "Build defender questions and source-health rules."
  },
  {
    "id": "API-E08",
    "source": "Fictional architecture change",
    "health": "Current",
    "observation": "A new mobile client is proposed as an additional caller for Profile Preferences API.",
    "supports": "A new caller identity and contract relationship.",
    "limits": "Does not prove the new client is unsafe.",
    "use": "Re-review identity, authorization, schema, response, monitoring, privacy, version, and support expectations."
  }
];

const commonMistakes = [
  {
    "mistake": "Internal API means trusted API",
    "why": "Internal connectivity does not replace caller identity, authorization, validation, object ownership, monitoring, or least privilege.",
    "correction": "Treat every API relationship as governed trust."
  },
  {
    "mistake": "One service identity for everything",
    "why": "Broad service identities make purpose, privilege, monitoring, and recertification harder to control.",
    "correction": "Scope service identities to bounded application purposes and resource/action needs."
  },
  {
    "mistake": "Valid request means authorized request",
    "why": "A structurally correct request can still target an unauthorized object or scope.",
    "correction": "Keep schema validation and authorization independent."
  },
  {
    "mistake": "Return every field",
    "why": "Extra response data increases privacy and exposure without helping the caller.",
    "correction": "Use minimized response schemas tied to caller purpose."
  },
  {
    "mistake": "Detailed errors help everyone",
    "why": "Legitimate callers need actionable failure categories, not unnecessary internal or sensitive detail.",
    "correction": "Separate safe caller errors from restricted owner diagnostics."
  },
  {
    "mistake": "Versioning is only naming",
    "why": "A version change can alter authorization, data, errors, dependencies, privacy, monitoring, and support.",
    "correction": "Treat versions as governed contract changes."
  },
  {
    "mistake": "Resource protection means blocking users",
    "why": "The defensive goal is predictable service availability for legitimate business workloads.",
    "correction": "Define expected sizes, workload ranges, expensive operations, concurrency, and degraded behavior conceptually."
  },
  {
    "mistake": "Prove API risk through enumeration or bypass",
    "why": "A10.5 teaches defensive design and safe review without unauthorized API testing.",
    "correction": "Use fictional expected decisions, schemas, owners, monitoring, dependencies, and contract evidence."
  }
];

const labPhases = [
  {
    "phase": "Phase 1 — Build the API catalog",
    "tasks": [
      "Use Case Status, Case Update, Reporting, Profile Preferences, Administrative Configuration, Recovery Validation, and Supplier Status APIs.",
      "Document purpose, owner, callers, resources, actions, sensitivity, dependencies, and business criticality.",
      "Keep all names and identifiers fictional."
    ]
  },
  {
    "phase": "Phase 2 — Build caller identities",
    "tasks": [
      "Create application, reporting, user, administrative, recovery, and supplier caller classes.",
      "Assign exact service identity purpose and owner.",
      "Record which APIs/actions each caller may and may not use."
    ]
  },
  {
    "phase": "Phase 3 — Build authorization rules",
    "tasks": [
      "Map caller + resource + action + object ownership + business scope.",
      "Create expected allow/deny cases using fictional data only.",
      "Use deny by default and least privilege."
    ]
  },
  {
    "phase": "Phase 4 — Define request and response contracts",
    "tasks": [
      "Create safe schemas for status, reporting, preferences, admin configuration, recovery, and supplier workflows.",
      "Define required/optional fields, types, bounds, relationships, and business validation.",
      "Minimize every response to approved caller purpose."
    ]
  },
  {
    "phase": "Phase 5 — Design errors and resource protection",
    "tasks": [
      "Create safe fictional error categories for validation, authorization, dependency, version, and temporary service conditions.",
      "Define expected request size, response size, workload, expensive-operation, concurrency, and degraded-mode concepts.",
      "Do not describe bypass or evasion."
    ]
  },
  {
    "phase": "Phase 6 — Review dependencies and versions",
    "tasks": [
      "Map Identity, Data, Monitoring, Supplier, and Recovery dependencies.",
      "Define V1-to-V2 fictional migration ownership and retirement.",
      "Identify which contract changes require privacy and authorization re-review."
    ]
  },
  {
    "phase": "Phase 7 — Build monitoring",
    "tasks": [
      "Use the ten API review questions in this lesson.",
      "Add source health, baselines, alert lineage, privacy/minimization, owner, and decision value.",
      "State which conclusions become Unknown when monitoring is Degraded."
    ]
  },
  {
    "phase": "Phase 8 — Produce the review package",
    "tasks": [
      "Create caller register, API catalog, authorization matrix, schemas, service-identity register, error policy, resource-protection plan, version register, dependency map, monitoring plan, findings, remediation owners, leadership summary, and public-safe artifact.",
      "Record Unknowns rather than inventing implementation detail.",
      "Do not test real APIs or send unauthorized requests."
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

export default function ApiSecurityConceptsPage() {
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
              Lesson A10.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              API Defense
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.5 API Security Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders reason about APIs as explicit
            contracts between fictional users, applications, services, and
            suppliers. Review caller identity, authorization, object ownership,
            request schemas, response minimization, safe errors, versioning,
            dependencies, resource protection, monitoring, privacy, and
            resilience without enumeration, fuzzing, exploit payloads,
            unauthorized requests, or real API testing.
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
          lessonTitle="API Defense Control Design"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.5 teaches defensive API design, not enumeration, fuzzing, credential attacks, unauthorized requests, object-access bypass, exploit payloads, or rate-limit bypass techniques.",
            "I will use only invented Northbridge callers, service identities, resources, actions, schemas, responses, dependencies, versions, errors, monitoring, and decisions.",
            "I can keep API authentication, authorization, object ownership, validation, and business rules separate.",
            "I will treat internal and supplier APIs as governed trust relationships rather than automatically trusted connections.",
            "I will reason about resource protection as availability and business-capacity design, not as a bypass challenge.",
            "I will not test real APIs, accounts, tokens, credentials, objects, identifiers, endpoints, headers, or private traffic.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An API Is a Contract, Not an Open Door"
        >
          <p className="leading-8">
            Northbridge's fictional Application Service B can call Case Status
            API for an approved case workflow. That does not mean the service
            automatically receives every case, field, administrative action, or
            API in the environment.
          </p>
          <p className="mt-4 leading-8">
            Professional defenders ask who the caller is, why it needs the API,
            which exact resource and action are required, what ownership applies,
            what request structure is valid, which response fields are necessary,
            how dependencies fail, and which evidence proves the contract still
            matches current business need.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak API thinking</p>
              <p className="mt-2 leading-7">“The service is internal and authenticated, so it can use the API.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defender API thinking</p>
              <p className="mt-2 leading-7">“Identity is only the start. Purpose, authorization, object ownership, schemas, minimized responses, safe errors, monitoring, dependencies, and lifecycle ownership still matter.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.5"
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
          title="APIs Concentrate Trust, Data, and Business Actions"
        >
          <p className="leading-8">
            APIs connect browser-facing applications to identity, data, reporting,
            administration, suppliers, monitoring, and recovery. If API contracts
            are vague, callers can accumulate excessive privilege, receive
            unnecessary data, depend on undocumented behavior, or remain on
            retired versions indefinitely.
          </p>
          <p className="mt-4 leading-8">
            Strong API design makes those assumptions explicit through callers,
            owners, least-privilege decisions, schemas, minimized responses, safe
            errors, version plans, monitoring questions, and resilience rules.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="API Defense-Control Language"
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
          title="Twelve API Defense-Control Principles"
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
          title="The Ten-Step API Defense Review Workflow"
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
          title="Fictional Northbridge API Defense Dashboard"
          subtitle="A10.5 — API contract review"
          metrics={[
            { label: "API contracts", value: "9", note: "Case, reporting, preferences, admin, recovery, supplier, version, and new-caller examples" },
            { label: "Decision cases", value: "8", note: "Allow, deny, temporary allow, supplier-scope, and deprecated-version decisions" },
            { label: "Review dimensions", value: "8", note: "Caller, purpose, resource/action, ownership, schema, response, dependency, version/monitoring" },
            { label: "Primary rule", value: "Explicit contract", note: "Identity alone never replaces authorization, ownership, schema, and response rules" },
          ]}
        />

        <SectionCard
          eyebrow="API Contracts"
          title="Nine Fictional API Contracts and Changes"
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
          title="Fictional API Scope Review Warning"
          severity="High"
          time="Northbridge API review 15:25"
          source="A10.5 API defense board"
          details="Supplier Integration S is contracted only for a fictional service-status workflow, but a proposed change would allow it to request full support-case records because broader access might simplify future troubleshooting."
          recommendation="Hold the change. Keep Supplier S limited to the approved purpose, return only minimized fields, require a new owner-approved business case for expanded scope, review privacy and retention, update monitoring, and document failure and rollback before release."
        />

        <SectionCard
          eyebrow="Contract Dimensions"
          title="Eight Inputs to a Defensible API Decision"
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
          title="Fictional API Review Log"
          logs={[
            "15:00 | API | CaseStatus | caller=ServiceIdentity-P | action=read-status | result=Allow",
            "15:03 | OWNERSHIP | case=C-104 | workflow=approved | decision=Allow",
            "15:05 | REPORT | caller=Reporting-Q | scope=TeamBlue | result=Allow",
            "15:06 | REPORT | caller=Reporting-Q | scope=TeamGold | result=Deny",
            "15:10 | ADMIN | caller=AppAdmin | privileged_session=true | change_approval=true",
            "15:15 | RECOVERY | caller=Recovery-R | access=time-bound | result=Allow",
            "15:20 | VERSION | V1 | status=Deprecated | migration_owner=API-Owner",
            "15:25 | SUPPLIER | request=full-case-data | contracted_scope=status-only | approval=Hold",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Valid Request for the Wrong Team"
          question="Reporting Service Q sends a structurally valid report request for Team Gold while the caller is approved only for Team Blue. What is strongest?"
          evidence={[
            "The request schema is valid.",
            "The caller identity is known.",
            "Team Gold scope is not approved for this caller.",
            "Validation and authorization are separate decisions.",
          ]}
          options={[
            "Allow because the request schema is valid.",
            "Deny Team Gold scope, return a safe authorization failure, and record the policy decision.",
            "Give the service broader access so future reports are easier.",
            "Assume the caller is malicious because the request was denied.",
          ]}
          bestAnswer={1}
          explanation="A valid schema does not grant authorization. The caller must still be approved for the exact business scope."
        />

        <SectionCard
          eyebrow="Safe API Decision Cases"
          title="Eight Fictional API Decisions"
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
          title="Scenario Decision Lab 1: The Valid Request for the Wrong Team"
          scenario="Reporting Service Q sends a fictional request with a valid report category and date range, but requests Team Gold data while approved only for Team Blue."
          choices={[
            { label: "Choice A", response: "Allow because the request schema is valid.", outcome: "Schema validity does not replace authorization or object/scope ownership.", tone: "risk" },
            { label: "Choice B", response: "Deny Team Gold scope, return a safe authorization failure, record the policy decision, and preserve the valid schema result as a separate fact.", outcome: "This keeps validation and authorization correctly separated.", tone: "best" },
            { label: "Choice C", response: "Assume the caller is malicious because the request was denied.", outcome: "A denied request is an access-control event; intent requires separate evidence.", tone: "caution" },
          ]}
        />

        <SectionCard
          eyebrow="API Review Questions"
          title="Ten Questions for Every API Contract"
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
          eyebrow="Safe API Errors and Logging"
          title="Eight Requirements for Safe API Errors and Minimized Diagnostics"
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
          title="Analyze the Service Identity Record"
          question="What is the strongest response to API-E02?"
          evidence={[
            "Service Identity P has a documented application purpose.",
            "Its API resources and actions are bounded.",
            "The next recertification owner is missing.",
            "No supplied evidence shows unauthorized use.",
          ]}
          options={[
            "Declare the service identity compromised.",
            "Record an ownership/recertification Unknown, assign the service/API owner, and complete lifecycle governance.",
            "Ignore the missing owner because the identity is non-human.",
            "Send unauthorized requests to discover whether the identity has excessive access.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports incomplete lifecycle governance, not a proven access failure."
        />

        <SectionCard
          eyebrow="API Change Review"
          title="Eight Triggers for Rechecking an API Contract"
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
          title="Scenario Decision Lab 2: Deprecated Version Still in Use"
          scenario="A fictional API V1 reached its approved retirement date, but one internal reporting client still uses it. V2 is active and validated, and no migration extension has been approved."
          choices={[
            { label: "Choice A", response: "Keep V1 forever because one caller still depends on it.", outcome: "Unbounded legacy support increases contract drift and weakens lifecycle ownership.", tone: "risk" },
            { label: "Choice B", response: "Follow the retirement process, coordinate migration, use a time-bound owner-approved exception only if necessary, monitor V1 use, and remove it when the transition ends.", outcome: "This keeps compatibility, ownership, monitoring, and retirement explicit.", tone: "best" },
            { label: "Choice C", response: "Assume the remaining caller is malicious because it uses V1.", outcome: "Legacy use may reflect migration delay or ownership problems, not malicious intent.", tone: "caution" },
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence"
          title="Northbridge API Defense Evidence Set"
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
          title="Eight API Security Mistakes to Avoid"
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
          title="Build the Northbridge API Defense Review"
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
          title="Redesign a Broad Internal API into Three Purpose-Limited Contracts"
        >
          <p className="leading-8">
            A fictional Northbridge internal API currently returns case data,
            reporting data, administrative configuration, and supplier status
            through one broad service identity. Redesign it without offensive testing.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Split the broad API into at least three purpose-specific contracts.",
              "Create separate service identities with explicit owners.",
              "Define exact resources and actions for each contract.",
              "Add object-ownership and team-scope rules.",
              "Create request schemas using safe fictional values.",
              "Minimize response fields for every caller.",
              "Define safe error categories and restricted diagnostics.",
              "Create resource-protection expectations for size, workload, expensive operations, and degraded modes.",
              "Create a version migration and retirement plan.",
              "Write a leadership summary explaining how the redesign reduces unnecessary trust, data exposure, and dependency risk.",
            ].map((item) => <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>)}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.5 API Security Concepts Checklist"
          items={[
            "I can define an API by business purpose, callers, resources, actions, owners, and dependencies.",
            "I can separate caller authentication from authorization and object ownership.",
            "I can scope service identities to least-privilege resource/action needs.",
            "I can design request schemas without offensive test payloads.",
            "I can minimize response schemas to the approved caller purpose.",
            "I can design safe API errors without unnecessary internal or sensitive detail.",
            "I can reason about resource protection as availability and business-capacity design.",
            "I can govern API versions with owners, migration, monitoring, and retirement.",
            "I can treat internal and supplier dependencies as governed trust relationships.",
            "I can design API monitoring around decisions, errors, health, versions, dependencies, source health, and privacy.",
            "I can record Unknowns and incomplete governance without unauthorized testing.",
            "I can create a public-safe fictional API artifact with no real endpoints, credentials, tokens, identifiers, or exploit content.",
          ]}
        />

        <MiniQuiz
          title="A10.5 Mini Quiz: API Security Concepts"
          questions={[
            { question: "What does a fictional API service identity establish?", choices: ["Automatic access to every API.", "A bounded caller identity; authorization still determines resources and actions.", "Object ownership for every resource.", "Administrative privilege."], answer: 1, explanation: "Caller identity is only the first decision. Resource/action authorization and ownership remain separate." },
            { question: "A request schema is valid but the caller lacks the requested team scope. What is strongest?", choices: ["Allow because validation passed.", "Deny the unauthorized scope because validation and authorization are separate.", "Return all data and log the event.", "Assume the caller is malicious."], answer: 1, explanation: "Structural validity does not grant business authorization." },
            { question: "What is response minimization?", choices: ["Always returning an empty response.", "Returning only the fields the approved caller needs for its business purpose.", "Compressing every response.", "Removing authorization checks."], answer: 1, explanation: "Minimization reduces unnecessary data exposure while preserving legitimate work." },
            { question: "Why should service identities be recertified?", choices: ["They should not; only humans need review.", "Their application purpose, resource scope, architecture, environment, and business need can change.", "They automatically expire every hour.", "They cannot be monitored."], answer: 1, explanation: "Non-human access can drift and needs lifecycle ownership." },
            { question: "Why should API versions be governed?", choices: ["Version names look cleaner.", "Changes can affect data, authorization, callers, errors, privacy, dependencies, monitoring, and support.", "Older versions are always compromised.", "Versioning removes validation."], answer: 1, explanation: "API versions are security and business contract changes, not just labels." },
            { question: "What does resource protection mean in A10.5?", choices: ["Teaching rate-limit bypass.", "Defining normal request/response sizes, workload expectations, expensive operations, concurrency, degraded behavior, and availability protections conceptually.", "Blocking every repeated request.", "Stress-testing a real API."], answer: 1, explanation: "The lesson treats resource protection as defensive availability planning." },
            { question: "What is strongest when an API ownership rule is incomplete?", choices: ["Enumerate real objects to discover it.", "Record an Unknown, assign an owner, define the expected policy, and validate with fictional decision cases.", "Assume access should be allowed.", "Assume a vulnerability is confirmed."], answer: 1, explanation: "Safe review resolves gaps through design ownership and fictional evidence." },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: API Defense Review"
          prompt="Create a fully fictional A10.5 API Defense Review for Northbridge. Include API catalog; business purpose; owners; caller classes; service identities; resources; actions; object ownership; least privilege; authorization matrix; request schemas; required/optional fields; allowed values; size/range; business validation; response schemas; data minimization; safe error categories; restricted diagnostics; resource-protection concepts; workload expectations; dependencies; supplier trust; version register; migration; retirement; monitoring questions; source-health expectations; privacy/minimization; expected allow/deny cases; findings; remediation owners; validation criteria; technical summary; leadership summary; governance summary; and a public-safe API architecture diagram. Every API, caller, service identity, resource, object, version, event, and decision must be invented."
          tips={[
            "Start with caller purpose and exact resource/action need.",
            "Keep authentication, authorization, object ownership, and validation separate.",
            "Minimize response fields to the approved caller purpose.",
            "Treat versions and dependencies as governed contracts.",
            "Design resource protection around legitimate service availability, not bypass behavior.",
            "Use fictional expected decisions instead of real API testing.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A10.6 Secure Headers and Browser Protections?"
        >
          <p className="leading-8">Rate your readiness from 1 to 5 for caller identity, least privilege, object ownership, schemas, minimized responses, safe errors, resource protection, versions, dependencies, monitoring, and API governance.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can define an API by caller, resource, action, and business purpose.",
              "I can separate API authentication from authorization and object ownership.",
              "I can scope service identities to exact resource/action needs.",
              "I can create request schemas using safe fictional data.",
              "I can minimize API responses.",
              "I can design safe errors and restricted diagnostics.",
              "I can explain resource-protection concepts without bypass guidance.",
              "I can govern versions and dependencies.",
              "I can design API monitoring around defender questions and source health.",
              "I am ready for A10.6 browser-facing defensive layers.",
            ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>)}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What a Strong A10.5 Artifact Should Show"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "API catalog with purpose and owners",
              "Caller and service-identity register",
              "Resource/action matrix",
              "Object-ownership and scope rules",
              "Least-privilege authorization decisions",
              "Request schemas with safe fictional examples",
              "Minimized response schemas",
              "Safe error categories and restricted diagnostics",
              "Resource-protection expectations",
              "Dependency and supplier review",
              "Version migration and retirement plan",
              "API monitoring questions and source health",
              "Expected allow/deny decision cases",
              "Evidence-based findings and remediation owners",
              "Technical, leadership, and governance summaries",
              "A public-safe API review with invented details only",
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
            "Secure APIs are explicit contracts among callers, resources, actions, ownership, schemas, responses, errors, dependencies, versions, monitoring, and owners.",
            "Caller authentication does not replace authorization or object ownership.",
            "Service identities need bounded purpose, least privilege, owners, monitoring, lifecycle, and recertification.",
            "A valid request schema does not automatically make the requested business action authorized.",
            "Response minimization limits data to what the approved caller actually needs.",
            "Safe API errors separate caller guidance from restricted internal diagnostics.",
            "Resource protection is about predictable legitimate availability and business-capacity design, not bypass behavior.",
            "API versions can change authorization, data, dependencies, privacy, monitoring, compatibility, and support expectations.",
            "Internal and supplier APIs are governed trust relationships rather than automatically trusted connections.",
            "A10.5 prepares you for A10.6, where browser-facing protections are reviewed as another layer of the web defense architecture.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Defensive API Review — No Enumeration, Fuzzing, or Unauthorized Requests</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.5 authorizes testing real APIs, endpoints, accounts, service identities, resources, identifiers, versions, suppliers, credentials, tokens, or rate controls. Do not enumerate, fuzz, modify identifiers, send unauthorized requests, attempt object-level access, bypass authorization, guess credentials, capture tokens, test resource limits, or construct exploit payloads. Use only fictional contracts, expected decisions, monitoring evidence, and safe review questions.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Secure Headers and Browser Protections</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.5 established API callers, service identities, authorization, object ownership, schemas, minimized responses, safe errors, resource-protection concepts, versions, dependencies, monitoring, and resilience. A10.6 will focus on browser-facing defensive layers such as transport expectations, content restrictions, framing, cookie protections, referrer privacy, compatibility, exceptions, rollout, monitoring, validation, and rollback.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}