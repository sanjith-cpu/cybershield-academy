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
const previousLesson = `${modulePath}/secure-headers-and-browser-protections`;
const nextLesson = `${modulePath}/logging-and-monitoring-for-web-apps`;

const objectives = [
  "Explain the defensive difference between secrets, ordinary configuration, sensitive configuration, identifiers, and public settings without using or exposing real secret values.",
  "Design a fictional secret lifecycle covering purpose, owner, storage class, least privilege, environment separation, delivery/reference concepts, rotation, expiration, recovery, revocation, monitoring, and retirement.",
  "Evaluate fictional application configuration through secure defaults, change ownership, peer review, environment separation, drift detection, validation, rollback, documentation, and exception governance.",
  "Use fictional evidence to identify secret sprawl, unclear ownership, excessive access, logging exposure, stale credentials, cross-environment reuse, configuration drift, emergency-access risk, and incomplete rotation planning.",
  "Create a professional fictional Secrets and Configuration Management Review package containing metadata-only inventories, owner maps, lifecycle rules, environment boundaries, change controls, rotation plans, logging limits, exception records, recovery decisions, monitoring questions, and public-safe documentation.",
];

const vocabulary = [
  {
    term: "Secret",
    definition:
      "A fictional sensitive value whose unauthorized disclosure could allow unintended access, impersonation, decryption, signing, service use, or another protected capability.",
  },
  {
    term: "Secret metadata",
    definition:
      "Non-secret fictional information about a secret, such as its purpose, owner, environment, service, sensitivity, last rotation date, next review date, and status.",
  },
  {
    term: "Configuration",
    definition:
      "A fictional setting that changes application, service, integration, logging, feature, environment, or security behavior.",
  },
  {
    term: "Sensitive configuration",
    definition:
      "A fictional configuration item that may not be a secret itself but still reveals security-relevant, privacy-sensitive, privileged, or operational information.",
  },
  {
    term: "Secure default",
    definition:
      "A fictional configuration state that begins with the safest reasonable access, exposure, logging, feature, or privilege behavior until an owner approves a change.",
  },
  {
    term: "Environment separation",
    definition:
      "The defensive practice of keeping fictional development, test, staging, and production identities, secrets, data, and configuration responsibilities appropriately separated.",
  },
  {
    term: "Secret reference",
    definition:
      "A fictional application-level reference to an approved secret source without copying the actual secret value into code, logs, screenshots, tickets, or portfolio artifacts.",
  },
  {
    term: "Rotation",
    definition:
      "A fictional controlled lifecycle event that replaces an approved secret value according to policy, risk, expiration, incident, ownership, or system change.",
  },
  {
    term: "Revocation",
    definition:
      "A fictional owner-approved action that makes a secret, credential, certificate, token class, or privileged capability no longer accepted.",
  },
  {
    term: "Expiration",
    definition:
      "A fictional planned point after which a secret or temporary access mechanism should no longer remain valid without renewal or replacement.",
  },
  {
    term: "Secret sprawl",
    definition:
      "A defensive risk concept describing unnecessary copies of secret material across code, files, documents, logs, screenshots, messages, tickets, or systems.",
  },
  {
    term: "Configuration drift",
    definition:
      "A fictional difference between the approved configuration baseline and the actual or reported configuration state.",
  },
  {
    term: "Configuration baseline",
    definition:
      "The fictional owner-approved set of expected settings for a specific environment and application version.",
  },
  {
    term: "Change control",
    definition:
      "A fictional process that records why a configuration change is needed, who owns it, who reviewed it, when it is applied, how it is validated, and how it can be rolled back.",
  },
  {
    term: "Break-glass access concept",
    definition:
      "A fictional emergency access path reserved for rare business-critical situations with strong approval, limited scope, short duration, monitoring, automatic expiration, and post-use review.",
  },
  {
    term: "Redaction",
    definition:
      "A fictional data-handling process that removes or masks secret or sensitive values from logs, screenshots, reports, tickets, and other outputs while preserving useful context.",
  },
];

const principles = [
  {
    principle: "Inventory metadata, not secret values",
    explanation:
      "Defenders need to know what secret classes exist, what they protect, who owns them, and when they need review without copying the sensitive values into the inventory.",
    question:
      "Can this fictional secret be governed using metadata only?",
  },
  {
    principle: "Give every secret an owner and purpose",
    explanation:
      "A secret with no current owner or business purpose is difficult to rotate, revoke, review, or retire safely.",
    question:
      "Which fictional service and owner are accountable for this secret class?",
  },
  {
    principle: "Use least privilege",
    explanation:
      "Only the fictional application, service, role, or emergency workflow that needs a secret should be able to reference it.",
    question:
      "Who truly needs this protected capability?",
  },
  {
    principle: "Separate environments",
    explanation:
      "Development, test, staging, and production should not casually share high-value fictional secrets, service identities, sensitive data, or administrative settings.",
    question:
      "Would a lower-risk environment gain production capability if this value were reused?",
  },
  {
    principle: "Keep secrets out of code and public artifacts",
    explanation:
      "Source files, portfolio examples, screenshots, documentation, chat, tickets, and public repositories should use invented references or placeholders rather than actual secret material.",
    question:
      "Could this fictional artifact be shared safely without exposing a value?",
  },
  {
    principle: "Keep secrets out of logs",
    explanation:
      "Troubleshooting and monitoring should rely on metadata, status, references, owners, and event categories rather than copying secret values.",
    question:
      "Which diagnostic question can be answered without recording the secret?",
  },
  {
    principle: "Plan rotation before emergencies",
    explanation:
      "Rotation works best when dependencies, owners, validation, overlap, rollback, and retirement are known before a secret needs urgent replacement.",
    question:
      "What fictional services must recognize the new secret state during rotation?",
  },
  {
    principle: "Treat exposure as a lifecycle event",
    explanation:
      "If fictional evidence suggests a secret may have been exposed, defenders focus on containment, revocation/rotation, owner communication, dependency review, monitoring, and recovery rather than trying to use the value.",
    question:
      "What capability should be reduced or replaced safely?",
  },
  {
    principle: "Use secure configuration defaults",
    explanation:
      "Security-sensitive features, administrative access, debug behavior, data exposure, logging, and external connectivity should start from owner-approved safe states.",
    question:
      "What is the safest reasonable default for this fictional setting?",
  },
  {
    principle: "Change configuration deliberately",
    explanation:
      "A configuration change should have purpose, owner, review, environment, validation, monitoring, rollback, and documentation.",
    question:
      "How will the team know this fictional change produced the intended result?",
  },
  {
    principle: "Detect drift without exposing sensitive values",
    explanation:
      "Defenders can compare approved metadata, state categories, hashes/checksums where safely pre-supplied, or expected settings without publishing the underlying secret.",
    question:
      "Which safe evidence proves the configuration still matches the approved baseline?",
  },
  {
    principle: "Govern emergency paths",
    explanation:
      "Emergency secret/configuration access should be exceptional, time-bound, monitored, and reviewed rather than becoming a permanent shortcut.",
    question:
      "What ends this fictional emergency access and who confirms closure?",
  },
];

const workflow = [
  {
    step: "1. Define the protected capability",
    detail:
      "Identify the fictional service, integration, administrative action, signing function, encryption role, or application behavior that the secret/configuration supports.",
    output:
      "Purpose and business-owner statement.",
  },
  {
    step: "2. Classify the item",
    detail:
      "Decide whether it is a secret, sensitive configuration, ordinary configuration, identifier, public setting, or metadata-only record.",
    output:
      "Classification and handling level.",
  },
  {
    step: "3. Assign owners and environment",
    detail:
      "Record fictional application owner, security owner, operations owner, environment, service, and approved access roles.",
    output:
      "Ownership and environment map.",
  },
  {
    step: "4. Define storage/reference expectations",
    detail:
      "Document that applications use approved secret references or protected configuration sources without copying real values into source, logs, documentation, or public artifacts.",
    output:
      "Storage/reference policy.",
  },
  {
    step: "5. Apply least privilege",
    detail:
      "Limit fictional users, services, jobs, administrative functions, and emergency workflows to only the secret/configuration capability they need.",
    output:
      "Access-purpose matrix.",
  },
  {
    step: "6. Define lifecycle and rotation",
    detail:
      "Set review, rotation, expiration, revocation, owner-transfer, dependency-change, and retirement triggers.",
    output:
      "Secret lifecycle register.",
  },
  {
    step: "7. Govern configuration changes",
    detail:
      "Require reason, owner, peer review, environment, validation, monitoring, rollback, and documentation for security-relevant configuration changes.",
    output:
      "Configuration change record.",
  },
  {
    step: "8. Monitor safely",
    detail:
      "Watch secret-reference failures, stale metadata, upcoming expiration, unusual privileged access, configuration drift, emergency-path use, source health, and rotation status without recording the secret values.",
    output:
      "Secrets/configuration monitoring plan.",
  },
  {
    step: "9. Respond to suspected exposure or drift",
    detail:
      "Escalate to the owner, reduce affected capability, rotate/revoke conceptually when appropriate, validate dependencies, correct drift, and communicate without redistributing the sensitive value.",
    output:
      "Defensive response decision.",
  },
  {
    step: "10. Close and improve",
    detail:
      "Confirm retirement or rotation, remove stale access, close exceptions, update owners, validate configuration baseline, and capture lessons learned.",
    output:
      "Secrets and Configuration Management Review package.",
  },
];

const secretClasses = [
  {
    className: "Application-to-Service Credential Class",
    purpose:
      "Allow a fictional application service to identify itself to one approved internal dependency.",
    owner:
      "Application Owner + Service Owner",
    environment:
      "Separate fictional values per environment.",
    access:
      "Application service identity only; no ordinary user access.",
    lifecycle:
      "Reviewed after service changes, owner changes, exposure concerns, and scheduled rotation windows.",
    logs:
      "Record reference name, result, owner, service, and status—not the credential value.",
  },
  {
    className: "Supplier Integration Credential Class",
    purpose:
      "Support one fictional supplier-status integration.",
    owner:
      "Supplier Owner + Application Owner",
    environment:
      "Production separated from non-production.",
    access:
      "Purpose-limited integration service only.",
    lifecycle:
      "Reviewed on contract change, supplier change, service redesign, expiration, or suspected exposure.",
    logs:
      "Use supplier identifier, connection result, and reference metadata only.",
  },
  {
    className: "Privileged Administrative Credential Class",
    purpose:
      "Support a fictional high-impact administrative function.",
    owner:
      "Operations Owner + Identity Owner",
    environment:
      "Production privilege kept separate from lower environments.",
    access:
      "Approved privileged session or emergency workflow only.",
    lifecycle:
      "Shorter review interval, explicit revocation plan, monitored privileged use.",
    logs:
      "Record admin event, role, change reference, and outcome without credential material.",
  },
  {
    className: "Signing Key Class",
    purpose:
      "Represent a fictional cryptographic signing capability used by an approved application workflow.",
    owner:
      "Application Owner + Security Owner",
    environment:
      "Distinct fictional key classes for production and lower environments.",
    access:
      "Only the approved signing service or process.",
    lifecycle:
      "Rotation/retirement planned around dependent verification and version transition.",
    logs:
      "Record key reference/version metadata and signing outcome, never private key material.",
  },
  {
    className: "Encryption Key Class",
    purpose:
      "Represent a fictional key capability used to protect a defined sensitive data class.",
    owner:
      "Data Owner + Security Owner",
    environment:
      "Environment and data-class boundaries documented.",
    access:
      "Only approved services requiring the protected data workflow.",
    lifecycle:
      "Owner review, recovery planning, rotation strategy, retirement, and dependency validation.",
    logs:
      "Record key reference/state and operation category only.",
  },
  {
    className: "Recovery Emergency Secret Class",
    purpose:
      "Support a rare fictional business-continuity or recovery workflow.",
    owner:
      "Recovery Owner + Governance Reviewer",
    environment:
      "Production recovery scope only.",
    access:
      "Break-glass concept with multi-owner approval, short duration, monitoring, and automatic closure.",
    lifecycle:
      "Reviewed after every use and periodically for readiness.",
    logs:
      "Record approval, start/end, purpose, actor role, and review outcome without exposing the secret.",
  },
];

const configurationCatalog = [
  {
    setting: "Debug Detail",
    category:
      "Sensitive application behavior",
    secureDefault:
      "Detailed internal diagnostics are not shown to ordinary users.",
    owner:
      "Application Owner",
    changeRisk:
      "Could expose internal or private details if broadened.",
    validation:
      "Confirm user-safe errors and restricted diagnostics remain separated.",
    rollback:
      "Return to the last approved diagnostic level.",
  },
  {
    setting: "Administrative Feature Availability",
    category:
      "Privileged application behavior",
    secureDefault:
      "Administrative functions available only to the approved privileged workflow.",
    owner:
      "Operations Owner",
    changeRisk:
      "Could increase privileged capability or exposure.",
    validation:
      "Confirm ordinary users remain outside the admin path.",
    rollback:
      "Disable the new admin feature or restore the prior approved scope.",
  },
  {
    setting: "Supplier Integration Enabled",
    category:
      "External dependency",
    secureDefault:
      "Disabled unless the supplier purpose, owner, data scope, monitoring, and failure behavior are approved.",
    owner:
      "Supplier Owner",
    changeRisk:
      "Changes third-party trust and data flow.",
    validation:
      "Confirm purpose-limited data exchange and monitoring.",
    rollback:
      "Return to the approved alternate workflow.",
  },
  {
    setting: "Security Logging Level",
    category:
      "Monitoring and privacy",
    secureDefault:
      "Capture required event metadata without secret or unnecessary private content.",
    owner:
      "Monitoring Owner + Privacy Reviewer",
    changeRisk:
      "Too little can reduce visibility; too much can expose sensitive data.",
    validation:
      "Confirm defender questions can be answered and redaction rules still hold.",
    rollback:
      "Return to the last approved logging profile.",
  },
  {
    setting: "Session Policy Reference",
    category:
      "Identity configuration",
    secureDefault:
      "Use the owner-approved A10.2 session policy for the environment.",
    owner:
      "Identity Owner",
    changeRisk:
      "Could alter authentication/session assurance.",
    validation:
      "Confirm standard, sensitive, admin, recovery, logout, and timeout journeys.",
    rollback:
      "Restore previous approved session-policy reference.",
  },
  {
    setting: "Browser Protection Profile",
    category:
      "Browser-facing security",
    secureDefault:
      "Use the approved A10.6 policy profile and narrow exceptions only.",
    owner:
      "Application Owner + Security Owner",
    changeRisk:
      "Could weaken policy or break legitimate workflows.",
    validation:
      "Confirm policy presence, compatibility, exceptions, and accessibility.",
    rollback:
      "Restore prior approved browser-protection profile.",
  },
  {
    setting: "API Response Profile",
    category:
      "API data exposure",
    secureDefault:
      "Return minimized fields defined by the A10.5 response contract.",
    owner:
      "API Owner + Data Owner",
    changeRisk:
      "Could expose unnecessary fields or break callers.",
    validation:
      "Confirm caller purpose, response schema, authorization, and privacy.",
    rollback:
      "Restore previous minimized response contract.",
  },
  {
    setting: "Feature Flag F-7",
    category:
      "Application feature configuration",
    secureDefault:
      "Off until owner-approved release criteria are satisfied.",
    owner:
      "Product Owner + Application Owner",
    changeRisk:
      "May introduce new data flows, authorization rules, APIs, browser behavior, or logs.",
    validation:
      "Re-run the affected web security review areas before broad release.",
    rollback:
      "Disable the feature and restore prior workflow.",
  },
];

const lifecycleStates = [
  {
    state: "Planned",
    meaning:
      "A fictional secret/configuration need is identified but not yet active.",
    required:
      "Purpose, owner, environment, classification, access need, dependencies, and review.",
  },
  {
    state: "Approved",
    meaning:
      "The owner has approved the design and least-privilege use.",
    required:
      "Storage/reference expectations, access scope, logging limits, lifecycle and change controls.",
  },
  {
    state: "Active",
    meaning:
      "The fictional application or service currently relies on the secret/configuration.",
    required:
      "Healthy ownership, monitoring, expiration/rotation awareness, configuration baseline, and dependency mapping.",
  },
  {
    state: "Rotation Pending",
    meaning:
      "A planned or risk-driven replacement is required.",
    required:
      "Dependency coordination, owner approval, staged validation, overlap/transition concept, rollback, retirement criteria.",
  },
  {
    state: "Emergency Review",
    meaning:
      "Suspected exposure, unexpected access, configuration drift, or urgent business issue requires owner action.",
    required:
      "Limit capability, preserve safe metadata, rotate/revoke conceptually where appropriate, validate, communicate, and document.",
  },
  {
    state: "Retiring",
    meaning:
      "The fictional secret/configuration is no longer needed or is being replaced.",
    required:
      "Remove references, expire access, update dependencies, validate new state, retain only required metadata.",
  },
  {
    state: "Retired",
    meaning:
      "The fictional capability is no longer active.",
    required:
      "No active references, access removed, owner record closed, documentation updated, residual risk reviewed.",
  },
];

const environmentMatrix = [
  {
    environment: "Development",
    purpose:
      "Build fictional application features with low-risk non-production data and separate service identities.",
    secretRule:
      "Use dedicated non-production secret classes; never rely on production secret material.",
    configRule:
      "Safe developer settings without exposing production-sensitive behavior.",
    dataRule:
      "Use invented or approved non-sensitive test data.",
    monitoring:
      "Enough visibility to validate security-relevant development behavior without real secrets.",
  },
  {
    environment: "Test",
    purpose:
      "Run controlled fictional validation and regression cases.",
    secretRule:
      "Separate test identities and references.",
    configRule:
      "Match security-relevant behavior where needed for validation while remaining isolated from production capability.",
    dataRule:
      "Synthetic/invented data only for this curriculum.",
    monitoring:
      "Capture expected test outcome metadata and source health.",
  },
  {
    environment: "Staging",
    purpose:
      "Validate a production-like fictional release before deployment.",
    secretRule:
      "Separate staging secrets and service identities.",
    configRule:
      "Mirror approved production security posture where practical without sharing protected production values.",
    dataRule:
      "Synthetic or approved sanitized data.",
    monitoring:
      "Validate change, browser, API, session, and configuration evidence before release.",
  },
  {
    environment: "Production",
    purpose:
      "Serve the fictional live business workflow.",
    secretRule:
      "Production-only secret classes with strong ownership, least privilege, lifecycle, and monitoring.",
    configRule:
      "Owner-approved production baseline and controlled changes only.",
    dataRule:
      "Protected business data according to classification and authorization.",
    monitoring:
      "High-confidence operational/security monitoring with strict redaction and privacy controls.",
  },
];

const rotationPlan = [
  {
    phase: "Prepare",
    action:
      "Identify the fictional secret class, owner, services, dependencies, environment, current state, target state, monitoring, and rollback criteria.",
    evidence:
      "Metadata-only inventory and dependency map.",
  },
  {
    phase: "Create replacement capability",
    action:
      "Owner establishes a new approved secret state through the organization's protected process without publishing the value in lesson artifacts.",
    evidence:
      "Reference/version metadata shows the new state is ready.",
  },
  {
    phase: "Update approved consumers",
    action:
      "Move fictional services to the new reference/state according to the owner-approved change plan.",
    evidence:
      "Service/reference metadata and validation results.",
  },
  {
    phase: "Validate",
    action:
      "Confirm application health, authentication/service behavior, API dependencies, monitoring, error rates, and business workflows.",
    evidence:
      "Healthy monitoring and expected fictional user/service journeys.",
  },
  {
    phase: "Revoke/retire old capability",
    action:
      "After approved validation, make the previous fictional secret state no longer accepted.",
    evidence:
      "Old reference marked Retired and dependent systems no longer rely on it.",
  },
  {
    phase: "Close",
    action:
      "Remove stale access, close exceptions, update owner records, record lessons, and schedule the next review.",
    evidence:
      "Lifecycle register and post-change review.",
  },
];

const exceptionRules = [
  {
    field: "Reason",
    requirement:
      "A specific fictional business or recovery need that normal policy cannot currently meet.",
    failure:
      "Convenience or unclear urgency.",
  },
  {
    field: "Scope",
    requirement:
      "Exact service, environment, secret/configuration class, role, and action.",
    failure:
      "Broad access across multiple unrelated systems.",
  },
  {
    field: "Owner",
    requirement:
      "Named fictional business/security owner with approval authority.",
    failure:
      "Self-approved or ownerless exception.",
  },
  {
    field: "Duration",
    requirement:
      "Time- or event-bounded expiration.",
    failure:
      "Temporary access with no end condition.",
  },
  {
    field: "Monitoring",
    requirement:
      "Start/end, privileged use, configuration change, failure, expiration, and review events as appropriate.",
    failure:
      "Exception use is invisible.",
  },
  {
    field: "Redaction",
    requirement:
      "No real secret values in tickets, logs, screenshots, reports, or public artifacts.",
    failure:
      "Copying the sensitive value into the exception documentation.",
  },
  {
    field: "Validation",
    requirement:
      "Defined evidence that the exception achieved the business purpose safely.",
    failure:
      "No success or closure criteria.",
  },
  {
    field: "Closure",
    requirement:
      "Access expires, temporary configuration is reverted or formalized, and owners confirm the final state.",
    failure:
      "Exception remains active after the emergency or project ends.",
  },
];

const monitoringQuestions = [
  "Does every fictional secret class still have a current owner and approved business purpose?",
  "Are secret references limited to the intended application, service, role, and environment?",
  "Are production and non-production secret classes still separated?",
  "Are any secret values appearing in logs, screenshots, tickets, reports, or other outputs that should contain metadata only?",
  "Which fictional secrets are approaching rotation, expiration, owner transfer, supplier change, or retirement milestones?",
  "Are privileged or break-glass secret-access events rare, approved, time-bound, and reviewed?",
  "Does the current configuration state match the owner-approved baseline?",
  "Did a recent application release introduce configuration drift or a new undocumented setting?",
  "Are debug, logging, browser, API, session, supplier, and feature settings still using secure defaults?",
  "Are exception records current, owned, monitored, and approaching expiration?",
  "Is monitoring Healthy enough to support the conclusion that the expected secret/configuration state is present?",
  "After rotation or configuration change, do all dependent fictional services show the expected Healthy state?",
];

const evidenceSet = [
  {
    id: "SCM-01",
    source: "Fictional secret metadata inventory",
    health: "Current",
    observation:
      "Six secret classes have purpose, owner, environment, access scope, lifecycle, and logging rules documented without values.",
    supports:
      "Metadata-only secret governance.",
    limits:
      "Does not prove protected storage or runtime access implementation.",
    use:
      "Ownership, lifecycle, least privilege, and review planning.",
  },
  {
    id: "SCM-02",
    source: "Fictional environment map",
    health: "Healthy",
    observation:
      "Development, test, staging, and production use separate service identities and secret classes.",
    supports:
      "Environment separation.",
    limits:
      "Does not prove every dependency is correctly isolated.",
    use:
      "Review cross-environment trust and configuration.",
  },
  {
    id: "SCM-03",
    source: "Fictional logging review",
    health: "Conditional",
    observation:
      "One troubleshooting proposal would record a full supplier credential value in a diagnostic log.",
    supports:
      "A secret-redaction and logging-design issue.",
    limits:
      "Does not prove the value has already been logged.",
    use:
      "Hold the proposal and use metadata/reference logging instead.",
  },
  {
    id: "SCM-04",
    source: "Fictional rotation register",
    health: "Current",
    observation:
      "Application-to-Service Credential Class enters Rotation Pending next week; owners and dependencies are documented.",
    supports:
      "Planned lifecycle management.",
    limits:
      "Does not prove the rotation will succeed.",
    use:
      "Prepare, update consumers, validate, retire old state, and close.",
  },
  {
    id: "SCM-05",
    source: "Fictional configuration baseline",
    health: "Current",
    observation:
      "Production baseline expects user-safe errors, minimized logging, approved browser policy, minimized API responses, and Feature F-7 disabled.",
    supports:
      "A cross-lesson secure configuration baseline.",
    limits:
      "Does not prove actual state currently matches.",
    use:
      "Compare with drift evidence and release records.",
  },
  {
    id: "SCM-06",
    source: "Fictional drift alert",
    health: "Healthy",
    observation:
      "Feature F-7 is reported Enabled in production while the approved baseline says Disabled.",
    supports:
      "A configuration drift finding.",
    limits:
      "Does not prove malicious change or user impact.",
    use:
      "Validate source, identify change owner, restore/approve intentionally, and review related web controls.",
  },
  {
    id: "SCM-07",
    source: "Fictional emergency-access record",
    health: "Current",
    observation:
      "Recovery emergency access has an owner, two-person approval, event-bounded duration, monitoring, and post-use review.",
    supports:
      "Governed break-glass concept.",
    limits:
      "Does not prove every future use will follow policy.",
    use:
      "Readiness and exception-governance review.",
  },
  {
    id: "SCM-08",
    source: "Fictional ownership change",
    health: "Current",
    observation:
      "Supplier Integration S is moving to a new business owner next month.",
    supports:
      "A lifecycle and access-review trigger.",
    limits:
      "Does not require immediate revocation by itself.",
    use:
      "Review owner assignment, supplier credential class, configuration, monitoring, and next rotation date.",
  },
];

const commonMistakes = [
  {
    mistake: "Put secret values in the inventory",
    why:
      "Governance records need metadata, not the sensitive value itself.",
    correction:
      "Track purpose, owner, reference, environment, status, and lifecycle only.",
  },
  {
    mistake: "Reuse production secrets in lower environments",
    why:
      "A lower-risk environment could gain unintended production capability.",
    correction:
      "Use separate fictional secret classes and service identities per environment.",
  },
  {
    mistake: "Log secrets for troubleshooting",
    why:
      "Logs are copied, retained, searched, and viewed by systems and people that may not need the protected value.",
    correction:
      "Log references, event categories, status, owners, and safe diagnostic metadata.",
  },
  {
    mistake: "Rotate without dependency planning",
    why:
      "A replacement can break services if consumers, versions, validation, overlap, and retirement are not coordinated.",
    correction:
      "Use a staged owner-approved rotation plan.",
  },
  {
    mistake: "Treat configuration as harmless",
    why:
      "Debug, logging, browser, API, session, supplier, and feature settings can materially change security and privacy.",
    correction:
      "Use secure defaults, ownership, review, validation, monitoring, and rollback.",
  },
  {
    mistake: "Ignore configuration drift",
    why:
      "Actual state can quietly diverge from the approved baseline.",
    correction:
      "Monitor safe state metadata and investigate drift through owner/change evidence.",
  },
  {
    mistake: "Keep emergency access permanently",
    why:
      "Break-glass access becomes ordinary privilege when it lacks expiration and post-use review.",
    correction:
      "Use narrow scope, short duration, monitoring, automatic closure, and re-review.",
  },
  {
    mistake: "Investigate by using a suspicious secret",
    why:
      "Defensive review should not test whether a discovered or exposed credential works.",
    correction:
      "Treat suspected exposure as a reason to escalate, reduce capability, rotate/revoke conceptually, and validate through approved owner evidence.",
  },
];

const labPhases = [
  {
    phase: "Phase 1 — Build the metadata-only inventory",
    tasks: [
      "Use the six fictional secret classes from this lesson.",
      "Record purpose, owner, environment, service, access role, lifecycle state, next review, and logging rule.",
      "Do not record any secret values.",
    ],
  },
  {
    phase: "Phase 2 — Build the configuration catalog",
    tasks: [
      "Use Debug Detail, Administrative Feature Availability, Supplier Integration Enabled, Security Logging Level, Session Policy Reference, Browser Protection Profile, API Response Profile, and Feature Flag F-7.",
      "For each record secure default, owner, change risk, validation, monitoring, and rollback.",
      "Connect the decisions to earlier A10 lessons.",
    ],
  },
  {
    phase: "Phase 3 — Review environment separation",
    tasks: [
      "Create Development, Test, Staging, and Production columns.",
      "Document separate secret classes, service identities, data expectations, configuration, and monitoring.",
      "Flag any hypothetical cross-environment reuse as a design issue.",
    ],
  },
  {
    phase: "Phase 4 — Build least-privilege access",
    tasks: [
      "Map each secret/configuration class to the exact fictional service, privileged role, or recovery workflow that needs it.",
      "Remove broad ordinary-user or unrelated-service access.",
      "Add owner and recertification triggers.",
    ],
  },
  {
    phase: "Phase 5 — Build rotation and retirement",
    tasks: [
      "Use Prepare, Create Replacement Capability, Update Consumers, Validate, Revoke/Retire Old Capability, and Close.",
      "Create fictional evidence requirements for every phase.",
      "Do not include any real secret-generation, storage, retrieval, or command instructions.",
    ],
  },
  {
    phase: "Phase 6 — Review logging and redaction",
    tasks: [
      "Create examples of safe metadata such as reference ID, secret class, owner, service, status, and rotation date.",
      "List sensitive values that must never appear in the portfolio or general logs.",
      "Create a user-safe and owner-safe diagnostic pattern.",
    ],
  },
  {
    phase: "Phase 7 — Review drift and exceptions",
    tasks: [
      "Use SCM-06 and the exception rules.",
      "Create owner decisions for secure default, approved change, unapproved drift, emergency access, and temporary supplier change.",
      "Record whether the action is restore, approve, narrow, expire, rotate, or review.",
    ],
  },
  {
    phase: "Phase 8 — Produce the review package",
    tasks: [
      "Create metadata inventory, ownership map, environment matrix, least-privilege map, lifecycle register, rotation plan, configuration baseline, drift review, exception register, monitoring questions, findings, remediation owners, leadership summary, governance summary, and public-safe portfolio artifact.",
      "Use invented references only.",
      "Keep all real secret material completely out of the lab.",
    ],
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

export default function SecretsAndConfigurationManagementPage() {
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
              Lesson A10.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Secrets and Configuration
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.7 Secrets and Configuration Management
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders govern fictional secrets and
            security-relevant configuration without exposing sensitive values.
            Build metadata-only inventories, owners, least-privilege access,
            environment separation, lifecycle and rotation plans, secure
            defaults, change control, drift monitoring, redaction, recovery,
            exception governance, validation, and rollback using invented
            references only.
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
          lessonTitle="Secrets and Configuration Management"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.7 teaches defensive secrets/configuration governance and does not teach how to discover, retrieve, test, use, steal, guess, or expose real credentials or secret material.",
            "I will use only invented metadata, reference labels, owners, lifecycle states, environment names, configuration states, and monitoring records.",
            "I will never put real passwords, API keys, private keys, certificates, session values, tokens, recovery codes, or other sensitive values into the lesson or portfolio.",
            "I will treat suspected secret exposure as a reason for owner escalation, capability reduction, rotation/revocation concepts, dependency validation, and communication—not as permission to test the secret.",
            "I will keep security-relevant configuration changes owner-approved, reviewed, validated, monitored, and reversible.",
            "I will keep development, test, staging, and production fictional secrets, identities, data, and configuration appropriately separated.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secret Inventory Should Tell You Everything Except the Secret"
        >
          <p className="leading-8">
            Imagine a fictional service owner asks, “Which production
            credentials exist, who owns them, which services depend on them,
            when were they last rotated, and when are they reviewed next?” A
            professional inventory should answer those questions without
            printing a single sensitive value.
          </p>

          <p className="mt-4 leading-8">
            Secrets management is primarily lifecycle and governance: purpose,
            ownership, least privilege, environment separation, protected
            reference, rotation, expiration, revocation, recovery, monitoring,
            and retirement. Configuration management adds secure defaults,
            change control, validation, drift detection, exceptions, and
            rollback.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak secret thinking
              </p>
              <p className="mt-2 leading-7">
                “Put every credential value in one spreadsheet so the team can
                find them easily.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Defender secret thinking
              </p>
              <p className="mt-2 leading-7">
                “Inventory metadata and references, keep values inside the
                approved protected system, scope access by purpose, and make
                rotation, revocation, monitoring, and retirement predictable.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.7"
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
          title="Secrets and Configuration Quietly Control Major Web Capabilities"
        >
          <p className="leading-8">
            A single fictional secret may represent application-to-service
            access, supplier integration, signing, encryption, administration,
            or emergency recovery. A single configuration change may affect
            debugging, logging, sessions, APIs, browser protections, suppliers,
            data exposure, or new features.
          </p>

          <p className="mt-4 leading-8">
            These controls deserve the same rigor as application code:
            ownership, least privilege, environment boundaries, review,
            monitoring, validation, recovery, and retirement. The safest
            portfolio demonstrates that governance without revealing any
            sensitive value.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Secrets and Configuration Language"
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
          title="Twelve Secrets and Configuration Principles"
        >
          <div className="grid gap-5">
            {principles.map((item, index) => (
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
          title="The Ten-Step Secrets and Configuration Workflow"
        >
          <div className="grid gap-5">
            {workflow.map((item) => (
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
          title="Fictional Northbridge Secrets and Configuration Dashboard"
          subtitle="A10.7 — metadata-only governance"
          metrics={[
            {
              label: "Secret classes",
              value: "6",
              note: "Application, supplier, admin, signing, encryption, and recovery capabilities",
            },
            {
              label: "Config baseline items",
              value: "8",
              note: "Debug, admin, supplier, logging, session, browser, API, and feature settings",
            },
            {
              label: "Environments",
              value: "4",
              note: "Development, test, staging, and production remain appropriately separated",
            },
            {
              label: "Primary rule",
              value: "Metadata only",
              note: "Govern purpose, owner, state, and lifecycle without exposing secret values",
            },
          ]}
        />

        <SectionCard
          eyebrow="Secret Classes"
          title="Six Fictional Secret Capability Classes"
        >
          <div className="grid gap-5">
            {secretClasses.map((item) => (
              <article
                key={item.className}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">
                  {item.className}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Owner", item.owner],
                    ["Environment", item.environment],
                    ["Approved access", item.access],
                    ["Lifecycle", item.lifecycle],
                    ["Logging rule", item.logs],
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

        <FakeAlertCard
          title="Fictional Secret Logging Warning"
          severity="High"
          time="Northbridge secrets review 17:10"
          source="A10.7 secrets/configuration board"
          details="A troubleshooting proposal would copy the complete fictional Supplier Integration credential value into a diagnostic log so developers can compare connection attempts. The approved defender question requires only the secret-reference identifier, supplier, service, result, time, source health, and owner."
          recommendation="Reject the proposal. Keep the secret value out of logs, record only metadata/reference information needed for diagnosis, preserve redaction, and use the approved owner process for rotation or dependency validation if the credential state itself is in question."
        />

        <SectionCard
          eyebrow="Configuration Baseline"
          title="Eight Security-Relevant Configuration Items"
        >
          <div className="grid gap-5">
            {configurationCatalog.map((item) => (
              <article
                key={item.setting}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.setting}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.category}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Secure default", item.secureDefault],
                    ["Owner", item.owner],
                    ["Change risk", item.changeRisk],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
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

        <FakeLogPanel
          title="Fictional Secrets and Configuration Review Log"
          logs={[
            "17:00 | INVENTORY | secret_classes=6 | values_recorded=0",
            "17:02 | ENV | production_and_nonproduction_separate=true",
            "17:04 | ROTATION | AppToService-Class | state=Rotation-Pending | owner=AppOwner",
            "17:06 | BASELINE | Feature-F7 | expected=Disabled | environment=Production",
            "17:08 | DRIFT | Feature-F7 | observed=Enabled | source=Healthy | decision=Review",
            "17:10 | LOGGING | SupplierCredential | full_value_proposed=true | approval=Reject",
            "17:12 | EMERGENCY | RecoverySecretClass | approval=two-owner | duration=event-bounded",
            "17:15 | OWNER_CHANGE | Supplier-S | next_owner=pending-transfer | review=required",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Configuration Drift"
          question="What is the strongest response to SCM-06?"
          evidence={[
            "The approved production baseline says Feature F-7 should be Disabled.",
            "A Healthy fictional source reports Feature F-7 as Enabled.",
            "No supplied evidence explains who changed it or why.",
            "No supplied evidence proves malicious activity or user impact.",
          ]}
          options={[
            "Declare a compromise immediately.",
            "Treat this as confirmed configuration drift, identify the change owner and record, evaluate affected A10 controls, restore the approved state or formally approve the new state, validate, and monitor.",
            "Ignore the drift because the feature may be useful.",
            "Search real systems for credentials connected to the feature.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports a mismatch between approved and observed configuration. It does not establish intent. The correct response is owner-based change review, correction or approval, validation, and monitoring."
        />

        <SectionCard
          eyebrow="Lifecycle"
          title="Seven Secret and Configuration Lifecycle States"
        >
          <div className="grid gap-5">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.state}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required governance
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.required}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Environment Separation"
          title="Four Environments, Separate Capabilities"
        >
          <div className="grid gap-5">
            {environmentMatrix.map((item) => (
              <article
                key={item.environment}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.environment}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Secret rule", item.secretRule],
                    ["Configuration rule", item.configRule],
                    ["Data rule", item.dataRule],
                    ["Monitoring", item.monitoring],
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

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: Use Production Credentials in Staging"
          scenario="A fictional developer asks to reuse the production Application-to-Service credential class in staging for one week because the staging integration is not ready. No production business emergency exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Approve the reuse because staging is controlled by the same company.",
              outcome:
                "Cross-environment reuse can give a lower-risk environment unintended production capability and weakens isolation.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Keep production and staging capabilities separate, create or repair the approved staging identity/reference through the owner process, and delay the non-emergency integration until safe staging validation is possible.",
              outcome:
                "This preserves environment separation and avoids turning a convenience issue into production exposure.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Disable staging permanently.",
              outcome:
                "The environment is useful; the problem is the proposed secret reuse, not the existence of staging.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Rotation Planning"
          title="Six Phases of a Safe Fictional Rotation"
        >
          <div className="grid gap-5">
            {rotationPlan.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.phase}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.action}
                    </p>
                    <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                        Evidence
                      </p>
                      <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Logging Proposal"
          question="What is the strongest response to SCM-03?"
          evidence={[
            "The troubleshooting proposal would log the full fictional supplier credential value.",
            "The approved defender question needs only reference metadata, result, supplier, service, time, and owner.",
            "No supplied evidence says the value has already been logged.",
          ]}
          options={[
            "Approve the full-value logging because troubleshooting is important.",
            "Reject the full-value logging, preserve metadata-only diagnostics, and use owner-approved rotation/dependency validation if the credential state must be investigated.",
            "Print the value only in development logs.",
            "Use the value to test whether the supplier still accepts it.",
          ]}
          bestAnswer={1}
          explanation="The diagnostic purpose can be met without secret material. Defensive review should minimize exposure and never turn troubleshooting into secret-use testing."
        />

        <SectionCard
          eyebrow="Exception Governance"
          title="Eight Requirements for Emergency or Temporary Access"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {exceptionRules.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.requirement}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Monitoring"
          title="Twelve Defender Questions for Secrets and Configuration"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {monitoringQuestions.map((question, index) => (
              <div
                key={question}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Question {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Suspected Secret Exposure in a Screenshot"
          scenario="A fictional support ticket says a screenshot may contain part of a sensitive credential value. The screenshot is already inside the approved internal ticketing process, and no one has validated whether the value is complete or usable."
          choices={[
            {
              label: "Choice A",
              response:
                "Try the suspected value against the service to see whether it works.",
              outcome:
                "Testing a sensitive value is unnecessary and unsafe. Defensive response does not require using the credential.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Escalate to the secret owner, restrict further sharing, treat the value as potentially exposed, follow the approved rotation/revocation decision process, review affected dependencies and logs, and document only metadata.",
              outcome:
                "This reduces risk without using or redistributing the secret.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ignore the report because the screenshot may contain only part of the value.",
              outcome:
                "Uncertainty should be recorded, but possible exposure still deserves owner review.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence"
          title="Northbridge Secrets and Configuration Evidence Set"
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
          title="Eight Secrets and Configuration Mistakes to Avoid"
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
          title="Build the Northbridge Secrets and Configuration Review"
        >
          <p className="leading-8">
            Use only the invented metadata, secret classes, configuration
            categories, environment states, lifecycle records, drift evidence,
            exception rules, and monitoring questions on this page. The lab
            teaches governance and defensive decision-making, not access to
            secret material.
          </p>

          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not find, retrieve, display, copy, test, guess, validate,
              transmit, store, rotate, revoke, or use real credentials, API
              keys, tokens, private keys, certificates, recovery codes, or
              secret values. Do not access real secret stores or systems. Use
              invented metadata/reference labels and conceptual lifecycle
              decisions only.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Recover from Three Simultaneous Governance Problems"
        >
          <p className="leading-8">
            Northbridge receives three fictional findings at once: Feature F-7
            is enabled outside the approved baseline, a supplier secret class is
            approaching rotation while ownership is changing, and a screenshot
            may contain part of a sensitive value. Build a coordinated defensive
            response without using any secret material.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Separate the configuration-drift finding from the possible secret-exposure finding.",
              "Assign the correct owners and decision authority for each issue.",
              "Define the safest immediate capability-reduction decisions.",
              "Create a metadata-only evidence board.",
              "Build the supplier owner-transfer and rotation timeline.",
              "Define which dependent services need validation after rotation.",
              "Create a redaction and communication rule for the screenshot ticket.",
              "Define Feature F-7 restore-versus-approve decision criteria and rollback.",
              "Build monitoring questions for configuration state, rotation, owner transfer, and potential exposure.",
              "Write a leadership summary that communicates risk and actions without reproducing any sensitive value.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.7 Secrets and Configuration Management Checklist"
          items={[
            "I can distinguish secrets, secret metadata, sensitive configuration, ordinary configuration, identifiers, and public settings.",
            "I can build a metadata-only secret inventory without recording secret values.",
            "I can assign purpose, owner, environment, least-privilege access, lifecycle, and review triggers.",
            "I can keep production and non-production secret classes appropriately separated.",
            "I can keep secret values out of code, logs, screenshots, tickets, documentation, and portfolio artifacts.",
            "I can plan rotation through preparation, replacement state, consumer transition, validation, retirement, and closure.",
            "I can treat suspected exposure as a reason for owner escalation and capability reduction rather than testing the secret.",
            "I can define secure defaults and controlled changes for web application configuration.",
            "I can identify configuration drift without assuming malicious intent.",
            "I can govern emergency/break-glass access with scope, owner, duration, monitoring, expiration, and post-use review.",
            "I can design monitoring for ownership, environment separation, expiration, drift, exceptions, source health, and dependency validation.",
            "I can create a public-safe secrets/configuration portfolio artifact using invented metadata only.",
          ]}
        />

        <MiniQuiz
          title="A10.7 Mini Quiz: Secrets and Configuration Management"
          questions={[
            {
              question:
                "What belongs in a professional fictional secret inventory?",
              choices: [
                "The actual secret value for convenience.",
                "Purpose, owner, environment, service, reference metadata, lifecycle state, rotation/review dates, and access scope.",
                "Screenshots of credentials.",
                "A copy of every production token.",
              ],
              answer: 1,
              explanation:
                "Governance requires metadata and ownership, not exposure of the secret itself.",
            },
            {
              question:
                "Why should production and staging use separate fictional secret classes?",
              choices: [
                "They must always use different programming languages.",
                "Lower-risk environments should not gain unintended production capability through shared secret material.",
                "Staging does not need authentication.",
                "Production secrets never expire.",
              ],
              answer: 1,
              explanation:
                "Environment separation limits trust and reduces the impact of lower-environment exposure or mistakes.",
            },
            {
              question:
                "What is the strongest logging approach for a secret-related connection failure?",
              choices: [
                "Record the complete secret value.",
                "Record safe metadata such as secret reference, service, owner, result, time, and source health without the value.",
                "Disable all logs.",
                "Send the secret in the error message.",
              ],
              answer: 1,
              explanation:
                "The diagnostic question can usually be answered using metadata without exposing the secret.",
            },
            {
              question:
                "What is configuration drift?",
              choices: [
                "A difference between the approved configuration baseline and the observed or reported state.",
                "Proof that an attacker changed the system.",
                "A planned release.",
                "A password reset.",
              ],
              answer: 0,
              explanation:
                "Drift establishes a state mismatch. Intent and cause require separate evidence.",
            },
            {
              question:
                "What is strongest when a secret may have appeared in a screenshot?",
              choices: [
                "Try the value to see whether it works.",
                "Treat it as potentially exposed, restrict sharing, escalate to the owner, follow rotation/revocation decisions, and document metadata only.",
                "Post the screenshot to a public forum for help.",
                "Ignore it until someone proves the value is complete.",
              ],
              answer: 1,
              explanation:
                "Defensive response reduces capability and exposure without using or redistributing the secret.",
            },
            {
              question:
                "What should a configuration change record include?",
              choices: [
                "Only the new value.",
                "Purpose, owner, peer review, environment, validation, monitoring, rollback, and documentation.",
                "Only the developer's name.",
                "A real secret for testing.",
              ],
              answer: 1,
              explanation:
                "Security-relevant configuration changes need accountable, reversible change control.",
            },
            {
              question:
                "What is the strongest response to an ownerless temporary secret-access exception?",
              choices: [
                "Approve it because it is temporary.",
                "Reject or hold it until owner, purpose, exact scope, duration, monitoring, validation, redaction, and closure are defined.",
                "Make it permanent.",
                "Share the secret with the whole team.",
              ],
              answer: 1,
              explanation:
                "An exception without ownership and closure criteria is not governed access.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Secrets and Configuration Management Review"
          prompt="Create a fully fictional A10.7 Secrets and Configuration Management Review for Northbridge. Include metadata-only secret inventory; secret classes; business purpose; owners; environments; services; sensitivity; access roles; least privilege; secret references; development/test/staging/production separation; lifecycle states; review dates; rotation triggers; expiration; revocation concepts; retirement; dependency map; configuration catalog; secure defaults; change control; peer review; validation; monitoring; rollback; configuration baseline; drift findings; logging/redaction rules; emergency/break-glass governance; exception register; owner-transfer triggers; suspected-exposure response; recovery considerations; source-health rules; findings; remediation owners; technical summary; leadership summary; governance summary; and a public-safe diagram. Every secret reference, service, setting, event, owner, and outcome must be invented. Do not include any real or example credential values."
          tips={[
            "Inventory metadata, never secret values.",
            "Connect every secret to a purpose, owner, environment, access need, and lifecycle.",
            "Keep production and non-production capabilities separated.",
            "Treat rotation as a dependency-aware change process.",
            "Treat configuration as security-relevant state with secure defaults and rollback.",
            "Keep logs, screenshots, tickets, and portfolio artifacts free of secret material.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A10.8 Logging and Monitoring for Web Apps?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for metadata-only secret governance,
            environment separation, least privilege, rotation, revocation,
            configuration baselines, drift, change control, redaction, emergency
            access, monitoring, and closure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can inventory secret metadata without exposing secret values.",
              "I can separate production and non-production secret classes and identities.",
              "I can apply least privilege to application, supplier, admin, signing, encryption, and recovery secret classes.",
              "I can explain the rotation lifecycle without handling real secret material.",
              "I can treat suspected exposure as a defensive lifecycle event rather than a testing opportunity.",
              "I can define secure configuration defaults.",
              "I can identify configuration drift and review it through owner/change evidence.",
              "I can design redaction and logging limits for secret-related events.",
              "I can govern emergency access and exceptions.",
              "I am ready to focus on web application logging, monitoring coverage, source health, alert quality, privacy, correlation, dashboards, and operational decisions in A10.8.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What a Strong A10.7 Artifact Should Show"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Metadata-only secret inventory",
              "Purpose and owner for every secret class",
              "Least-privilege access map",
              "Development/test/staging/production separation",
              "Secret lifecycle states and review triggers",
              "Rotation, expiration, revocation, and retirement planning",
              "Configuration catalog with secure defaults",
              "Change control, validation, monitoring, and rollback",
              "Configuration baseline and drift findings",
              "Redaction and safe diagnostic rules",
              "Emergency/break-glass governance",
              "Time-bound exception records",
              "Dependency-aware rotation validation",
              "Source-health and monitoring questions",
              "Leadership and governance summaries",
              "A public-safe artifact containing no real secret material",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Portfolio element {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A strong secret inventory records metadata, purpose, ownership, environment, access scope, and lifecycle—not secret values.",
            "Secrets should be purpose-limited, least-privileged, environment-separated, monitored, reviewable, rotatable, revocable, and retireable.",
            "Secret values should stay out of source code, general logs, screenshots, tickets, public documents, and portfolio artifacts.",
            "Suspected secret exposure is a defensive lifecycle event that calls for owner escalation and capability reduction rather than testing the value.",
            "Security-relevant configuration includes debug, logging, session, browser, API, supplier, administrative, and feature behavior.",
            "Secure defaults and controlled changes reduce accidental exposure and make configuration state easier to reason about.",
            "Configuration drift is a state mismatch, not automatic proof of malicious activity.",
            "Rotation should be dependency-aware, staged, validated, and closed by retiring the old capability.",
            "Emergency access should be narrow, time-bound, monitored, and followed by closure review.",
            "A10.7 prepares you for A10.8, where web application logs and monitoring must provide useful security visibility without exposing secrets or unnecessary private data.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Metadata-Only Secret Governance — Never Use Real Secret Material
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A10.7 authorizes finding, retrieving, displaying,
            copying, testing, validating, guessing, transmitting, storing,
            rotating, revoking, or using real passwords, API keys, tokens,
            private keys, certificates, recovery codes, or other secret values.
            Do not access real secret stores or credential systems. Use invented
            references and conceptual owner/lifecycle decisions only.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Logging and Monitoring for Web Apps
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.7 established metadata-only secret governance, least privilege,
            environment separation, secret lifecycle, rotation, revocation,
            redaction, secure configuration defaults, change control, drift,
            exceptions, recovery, monitoring, and rollback. A10.8 will focus on
            what web applications should log, what they should avoid logging,
            how source health affects confidence, how alerts support decisions,
            and how dashboards, correlation, privacy, and operational monitoring
            fit together.
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