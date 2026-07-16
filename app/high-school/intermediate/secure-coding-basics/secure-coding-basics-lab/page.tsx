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
const previousLesson = `${modulePath}/secure-code-review-and-testing`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional secure-development requirements, threat modeling, input and output safety, identity and session controls, error handling, logging, secrets, dependencies, build security, configuration, code review, testing, deployment, and monitoring into one defensive lab.",
  "Separate fictional confirmed facts, supported conclusions, assumptions, evidence gaps, possible impact, reproduced test impact, production evidence, remediation, validation, residual risk, and closure.",
  "Build a traceable fictional evidence package connecting requirements, architecture, code-review notes, configuration, tests, artifacts, runtime, logs, business records, owners, exceptions, and monitoring.",
  "Prioritize fictional findings using asset value, reachability, privilege, exposure, control strength, business consequence, reversibility, owner readiness, and evidence confidence.",
  "Produce a fictional Secure Coding Lab Report and portfolio artifact without exposing real code, credentials, systems, users, logs, or private data."
];
const vocabulary = [
  [
    "Evidence package",
    "A fictional organized set of requirements, diagrams, review notes, tests, logs, transactions, artifacts, owner decisions, and monitoring records used to support a conclusion."
  ],
  [
    "Traceability",
    "A fictional connection from requirement to architecture, implementation, configuration, test, deployment, runtime evidence, owner, and closure."
  ],
  [
    "Confirmed fact",
    "A fictional statement directly supported by the supplied evidence, such as a code behavior, configuration value, test result, database state, or owner decision."
  ],
  [
    "Supported conclusion",
    "A fictional interpretation that logically follows from multiple confirmed facts while preserving stated limitations."
  ],
  [
    "Evidence gap",
    "A fictional missing, stale, inconsistent, unavailable, or out-of-scope record that limits confidence."
  ],
  [
    "Remediation",
    "A fictional correction to code, configuration, dependency, identity, process, or operation that addresses the root weakness."
  ],
  [
    "Validation",
    "A fictional set of positive, negative, regression, deployment, monitoring, business, and rollback checks that proves the corrected behavior."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after containment, remediation, compensating controls, monitoring, exceptions, and validation."
  ]
];
const caseStages = [
  {
    "title": "1. Intake and scope",
    "summary": "A fictional secure-coding case begins with an exact application, feature, environment, time window, owners, users, data, and business workflow.",
    "details": [
      [
        "Required work",
        "Define the reviewed routes, components, identities, objects, dependencies, configurations, artifacts, environments, and exclusions."
      ],
      [
        "Evidence",
        "Case brief, requirement IDs, architecture, change record, owner list, deployment inventory, and supplied evidence index."
      ],
      [
        "Failure mode",
        "The review expands into the entire organization or makes conclusions about systems not included in the evidence."
      ]
    ]
  },
  {
    "title": "2. Requirements and threat model",
    "summary": "The fictional team connects business protections and misuse cases to exact assets, trust boundaries, entry points, and owners.",
    "details": [
      [
        "Required work",
        "Identify authorization, session, input, output, file, secret, dependency, configuration, logging, privacy, availability, and recovery requirements."
      ],
      [
        "Evidence",
        "Requirement matrix, data flow, trust boundaries, misuse cases, acceptance criteria, control owners, and risk assumptions."
      ],
      [
        "Failure mode",
        "The review relies on generic words such as secure or protected without measurable expectations."
      ]
    ]
  },
  {
    "title": "3. Implementation and configuration review",
    "summary": "The fictional reviewer traces code and configuration across browser, API, identity, database, file, integration, build, and runtime paths.",
    "details": [
      [
        "Required work",
        "Review trusted data, schemas, parameterization, rendering, sessions, authorization, errors, logs, secrets, dependencies, artifact identity, and runtime baseline."
      ],
      [
        "Evidence",
        "Code-review notes, configuration, dependency graph, build record, artifact digest, service identity, and deployment comparison."
      ],
      [
        "Failure mode",
        "The reviewer reads one function while missing middleware, helpers, background jobs, legacy routes, feature flags, or runtime drift."
      ]
    ]
  },
  {
    "title": "4. Evidence validation",
    "summary": "The fictional team validates tool warnings and code observations using safe supplied tests and multiple independent sources.",
    "details": [
      [
        "Required work",
        "Confirm exact source, sink, object, role, tenant, workflow, runtime, control, result, data state, and business effect."
      ],
      [
        "Evidence",
        "Static-analysis note, test inputs, safe outputs, decision logs, database or file records, business records, and owner confirmation."
      ],
      [
        "Failure mode",
        "A tool severity, code pattern, alert, or status code is treated as proof of compromise or impact by itself."
      ]
    ]
  },
  {
    "title": "5. Finding and prioritization",
    "summary": "The fictional analyst writes exact findings and ranks them using technical, business, operational, and evidence context.",
    "details": [
      [
        "Required work",
        "State scope, facts, conclusion, confidence, alternatives, gaps, preconditions, impact, controls, owner, due date, and priority."
      ],
      [
        "Evidence",
        "Finding record, risk matrix, data classification, route exposure, privilege, reproducibility, business dependency, and owner review."
      ],
      [
        "Failure mode",
        "Every issue receives the same severity or dramatic unsupported impact language."
      ]
    ]
  },
  {
    "title": "6. Containment and remediation",
    "summary": "The fictional team reduces immediate risk and corrects the root cause without destroying evidence or unnecessarily breaking legitimate workflows.",
    "details": [
      [
        "Required work",
        "Block or limit the exact path, revoke affected trust, preserve evidence, implement approved patterns, assign owners, and prepare rollback."
      ],
      [
        "Evidence",
        "Containment ticket, code or configuration change, identity action, dependency update, test artifact cleanup, and remediation plan."
      ],
      [
        "Failure mode",
        "The response deletes logs, disables unrelated systems, or changes code without addressing the trusted boundary."
      ]
    ]
  },
  {
    "title": "7. Retest and deployment",
    "summary": "The fictional team proves legitimate use works, unsafe conditions fail, the approved artifact deploys, and monitoring receives expected evidence.",
    "details": [
      [
        "Required work",
        "Run positive, negative, boundary, authorization, session, file, secret, dependency, configuration, regression, deployment, and rollback tests."
      ],
      [
        "Evidence",
        "Test results, artifact digest, deployment record, runtime inventory, configuration comparison, logs, transactions, source health, and business check."
      ],
      [
        "Failure mode",
        "The finding closes because the pull request merged or one unit test passed."
      ]
    ]
  },
  {
    "title": "8. Monitoring and closure",
    "summary": "The fictional owner confirms the correction remains effective and all residual-risk and governance conditions are complete.",
    "details": [
      [
        "Required work",
        "Review source health, control behavior, business outcomes, old-path removal, exception status, rollback readiness, residual risk, and lessons learned."
      ],
      [
        "Evidence",
        "Monitoring window, dashboards, alerts, access review, exception record, closure checklist, owner sign-off, and future review date."
      ],
      [
        "Failure mode",
        "The team stops after deployment and never confirms operational behavior or long-term ownership."
      ]
    ]
  }
];
const evidencePackets = [
  {
    "title": "Packet A: Requirements and architecture",
    "summary": "Fictional requirements describe a district administrator bulk export, teacher record access, document preview, and announcement workflow.",
    "details": [
      [
        "Key records",
        "Requirement IDs, data classification, users, assets, trust boundaries, data flows, misuse cases, owners, and acceptance criteria."
      ],
      [
        "What it supports",
        "Expected access, input, output, file, secret, dependency, configuration, logging, and monitoring behavior."
      ],
      [
        "Limitation",
        "Written design and requirements do not prove implementation or deployed behavior."
      ]
    ]
  },
  {
    "title": "Packet B: Identity and access evidence",
    "summary": "Fictional identity records show sign-in, session creation, roles, tenants, assignments, approvals, reauthentication, and account state.",
    "details": [
      [
        "Key records",
        "Identity events, session records, role and tenant data, object relationships, approval records, and access decisions."
      ],
      [
        "What it supports",
        "Authentication, current session state, route and object authorization, privilege freshness, and workflow approval."
      ],
      [
        "Limitation",
        "A valid identity or session does not prove permission for every object, field, action, or business outcome."
      ]
    ]
  },
  {
    "title": "Packet C: Code and configuration review",
    "summary": "Fictional review notes cover schemas, query construction, output rendering, authorization, error handling, logging, secrets, dependencies, and runtime settings.",
    "details": [
      [
        "Key records",
        "Pull-request notes, code-path summaries, configuration values, dependency graph, secret references, feature flags, and baseline comparison."
      ],
      [
        "What it supports",
        "The implemented control or weakness in the reviewed source and configuration path."
      ],
      [
        "Limitation",
        "Source and configuration review must be confirmed against the approved artifact and deployed runtime."
      ]
    ]
  },
  {
    "title": "Packet D: Build and artifact evidence",
    "summary": "Fictional pipeline records identify source revision, runner, tools, dependencies, tests, service identity, artifact digest, and repository.",
    "details": [
      [
        "Key records",
        "Build ID, runner image, lockfile, dependency inventory, test results, artifact digest, provenance metadata, and publish event."
      ],
      [
        "What it supports",
        "The reviewed source and dependency graph produced an identifiable approved artifact."
      ],
      [
        "Limitation",
        "Artifact identity does not prove deployment configuration or operational effectiveness."
      ]
    ]
  },
  {
    "title": "Packet E: Test evidence",
    "summary": "Fictional tests cover approved workflows and supplied invalid, unauthorized, expired, duplicate, unsupported, excessive, and failure conditions.",
    "details": [
      [
        "Key records",
        "Unit, integration, positive, negative, boundary, misuse-case, regression, deployment, monitoring, and rollback tests."
      ],
      [
        "What it supports",
        "Observed behavior under the exact included roles, objects, sessions, inputs, files, environments, and expected outcomes."
      ],
      [
        "Limitation",
        "Tests cannot prove behavior outside the included scope or permanent future effectiveness."
      ]
    ]
  },
  {
    "title": "Packet F: Runtime and operational evidence",
    "summary": "Fictional production records show deployed artifact, runtime versions, service identities, listeners, certificates, headers, cookies, configuration, logs, and drift.",
    "details": [
      [
        "Key records",
        "Deployment ID, digest, runtime inventory, configuration digest, source health, access decisions, transactions, alerts, and business checks."
      ],
      [
        "What it supports",
        "The reviewed correction and controls are active in the deployed environment."
      ],
      [
        "Limitation",
        "Short observation windows and missing sources can leave residual uncertainty."
      ]
    ]
  }
];
const labFindings = [
  {
    "title": "Finding 1: Bulk export trusts browser tenant and fields",
    "summary": "The fictional route verifies administrator role but accepts tenant and field choices from browser-controlled data.",
    "details": [
      [
        "Confirmed evidence",
        "Code review, static-analysis path, missing negative tests, and supplied safe test export with unapproved-tenant rows and unsupported fields."
      ],
      [
        "Defensive correction",
        "Derive tenant from privileged session, use server-defined field mappings, require recent authentication and two approvals, add idempotency, protected storage, expiry, and audit evidence."
      ],
      [
        "Validation",
        "Approved export passes; wrong tenant, unsupported fields, ordinary role, stale session, missing approval, duplicate job, expired link, and wrong-user download fail."
      ]
    ]
  },
  {
    "title": "Finding 2: Legacy report uses unsafe structure and scope",
    "summary": "The fictional legacy endpoint accepts arbitrary sort text and checks authentication without department authorization.",
    "details": [
      [
        "Confirmed evidence",
        "Code review and supplied safe test show dynamic operation structure and rows from an unassigned department in the test environment."
      ],
      [
        "Defensive correction",
        "Adopt strict schema, server-defined sort mapping, parameterized read, trusted department authorization, result limits, safe errors, and structured logging."
      ],
      [
        "Validation",
        "Approved assigned report works; unknown fields, invalid dates, unsupported sort, excessive size, unassigned department, and expired session fail before data access."
      ]
    ]
  },
  {
    "title": "Finding 3: Raw preview rendering for stored labels",
    "summary": "A fictional preview component inserts database-stored labels through a raw markup feature even though the product requirement is plain text.",
    "details": [
      [
        "Confirmed evidence",
        "Source-to-sink review and supplied browser test show the raw interpretation path exists in the safe environment."
      ],
      [
        "Defensive correction",
        "Use framework text binding for plain labels, isolate approved rich text, maintain sanitizer policy, and add browser regression tests."
      ],
      [
        "Validation",
        "Reserved and markup-like inert values appear visibly as text, approved formatting remains limited to the rich-text feature, and unsupported destinations are removed."
      ]
    ]
  },
  {
    "title": "Finding 4: Record route misses assignment relationship",
    "summary": "The fictional teacher route verifies authentication and teacher role but not the trusted record assignment.",
    "details": [
      [
        "Confirmed evidence",
        "Identity, session, route review, and supplied safe test show an unassigned record returned in the test environment."
      ],
      [
        "Defensive correction",
        "Centralize tenant, record, assignment, role, action, field, workflow, and current-session authorization."
      ],
      [
        "Validation",
        "Assigned access passes; unassigned, wrong tenant, wrong role, missing session, expired session, revoked session, and stale role fail."
      ]
    ]
  },
  {
    "title": "Finding 5: Legacy error exposes diagnostic and placeholder secret",
    "summary": "A fictional legacy error returns internal details and an inert placeholder credential that also appears in exception and support-export evidence.",
    "details": [
      [
        "Confirmed evidence",
        "Browser response, exception log, and support export contain the same supplied placeholder value."
      ],
      [
        "Defensive correction",
        "Disable the route, restrict the export, revoke and rotate the value, use safe error contract, bounded diagnostics, redaction, managed secret storage, and named service identity."
      ],
      [
        "Validation",
        "Positive and failure workflows remain usable, placeholder values are absent from every evidence path, old secret access fails, source health remains normal, and rollback is ready."
      ]
    ]
  },
  {
    "title": "Finding 6: Preview worker combines dependency and privilege risk",
    "summary": "A fictional reachable image-processing package has a relevant advisory while the worker uses a shared identity, mutable image tag, broad bucket access, and debug logging.",
    "details": [
      [
        "Confirmed evidence",
        "Inventory, advisory, reachability review, identity policy, build record, runtime configuration, and supplied tests support the combined finding."
      ],
      [
        "Defensive correction",
        "Pause new previews, update package, pin base image, create named least-privileged identity, disable debug, minimize file metadata, and rebuild through approved pipeline."
      ],
      [
        "Validation",
        "Approved preview passes; unsupported, oversized, wrong-tenant, unrelated-bucket, old-version, mutable-image, and debug conditions are denied or absent."
      ]
    ]
  },
  {
    "title": "Finding 7: Feature flag preserves outdated sensitive route",
    "summary": "A fictional rollback flag leaves a legacy privileged export path available to a broad administrator audience after the replacement is stable.",
    "details": [
      [
        "Confirmed evidence",
        "Flag inventory, environment configuration, route map, access decisions, and owner review show the old path remains active beyond its approved date."
      ],
      [
        "Defensive correction",
        "Restrict and expire the flag, confirm replacement readiness, remove legacy code, update route inventory, and retire related permissions and alerts."
      ],
      [
        "Validation",
        "Approved replacement works, legacy route returns safe denial, wrong audience cannot enable it, rollback procedure is tested, and the flag disappears from inventory."
      ]
    ]
  },
  {
    "title": "Finding 8: Monitoring source health is incomplete",
    "summary": "The fictional application produces authorization events, but one background export worker has no source-health alert and shorter retention.",
    "details": [
      [
        "Confirmed evidence",
        "Source inventory, event counts, retention settings, and supplied delayed-delivery test show the coverage gap."
      ],
      [
        "Defensive correction",
        "Standardize event schema, request and job correlation, retention, delivery monitoring, parser-health alerts, ownership, and alternate business evidence."
      ],
      [
        "Validation",
        "Known worker events arrive on time, delayed or missing delivery creates an owned alert, retention meets the requirement, and end-to-end correlation succeeds."
      ]
    ]
  }
];
const priorityFactors = [
  {
    "title": "Asset and data value",
    "summary": "How important are the fictional records, identities, secrets, files, exports, approvals, and workflows?",
    "details": [
      [
        "Higher priority",
        "Nonpublic student information, privileged identities, concentrated exports, secrets, or critical support workflows."
      ],
      [
        "Lower priority",
        "Public low-impact content with easy recovery and no privileged action."
      ],
      [
        "Evidence",
        "Data classification, asset owner, workflow dependency, recovery requirement, and impact statement."
      ]
    ]
  },
  {
    "title": "Reachability and exposure",
    "summary": "Can the fictional path be reached in the reviewed runtime, and by which users, services, files, messages, or integrations?",
    "details": [
      [
        "Higher priority",
        "Internet-facing, broad authenticated population, ordinary workflow, shared service, or third-party input."
      ],
      [
        "Lower priority",
        "Isolated test-only code proven absent from the deployed artifact and runtime."
      ],
      [
        "Evidence",
        "Route map, runtime trace, feature flag, deployment inventory, user population, and safe test."
      ]
    ]
  },
  {
    "title": "Privilege and control strength",
    "summary": "What can the fictional identity or component access, and which independent controls limit it?",
    "details": [
      [
        "Higher priority",
        "Broad write, secret, cross-tenant, export, role-change, deployment, or administrative authority with weak controls."
      ],
      [
        "Lower priority",
        "Narrow read-only scope, isolation, strong authorization, monitored limits, and tested rollback."
      ],
      [
        "Evidence",
        "Identity policy, permissions, network and storage access, code and configuration review, tests, and monitoring."
      ]
    ]
  },
  {
    "title": "Reproducibility and confidence",
    "summary": "Can the fictional unsafe result be reproduced consistently, and do independent sources agree?",
    "details": [
      [
        "Higher priority",
        "Repeatable supplied test with code, logs, database or file state, business evidence, and current runtime support."
      ],
      [
        "Lower confidence",
        "One ambiguous warning, stale diagram, missing logs, unverified environment, or unreproduced assumption."
      ],
      [
        "Evidence",
        "Test result, raw and normalized events, artifact identity, runtime inventory, business record, and evidence gaps."
      ]
    ]
  },
  {
    "title": "Business consequence and reversibility",
    "summary": "What fictional privacy, integrity, availability, accountability, decision, and trust effect could occur, and can it be reversed?",
    "details": [
      [
        "Higher priority",
        "Unauthorized data, irreversible action, role change, payment, export, lost evidence, or prolonged outage."
      ],
      [
        "Lower priority",
        "Minor reversible inconvenience with no sensitive data or business decision."
      ],
      [
        "Evidence",
        "Data or transaction state, user report, business owner, recovery steps, rollback test, and residual-risk review."
      ]
    ]
  }
];
const testPlan = [
  {
    "title": "Positive business workflows",
    "summary": "Prove fictional teachers, administrators, services, files, reports, previews, and announcements still work for approved use.",
    "details": [
      [
        "Examples",
        "Assigned record access, approved report, approved export, safe document preview, approved announcement, valid session, and managed-secret retrieval."
      ],
      [
        "Evidence",
        "Request, response, access decision, database or file state, user-visible result, business record, and owner confirmation."
      ],
      [
        "Closure value",
        "Shows defensive controls preserve required functionality rather than merely blocking activity."
      ]
    ]
  },
  {
    "title": "Input and boundary tests",
    "summary": "Prove fictional unknown, malformed, oversized, unsupported, excessive, duplicate, and out-of-order inputs fail safely.",
    "details": [
      [
        "Examples",
        "Unknown fields, invalid dates, unsupported sort, excessive page size, oversized file, duplicate export, and wrong workflow state."
      ],
      [
        "Evidence",
        "Safe error, structured reason, no-operation database or file record, resource metric, and regression result."
      ],
      [
        "Closure value",
        "Shows server-side contracts and business limits are authoritative."
      ]
    ]
  },
  {
    "title": "Authorization and session tests",
    "summary": "Prove fictional wrong-role, wrong-tenant, wrong-object, wrong-field, stale-session, expired-session, revoked-session, and missing-approval cases fail.",
    "details": [
      [
        "Examples",
        "Teacher unassigned record, administrator other-tenant export, ordinary-role privileged route, old session after role removal, and wrong-user file download."
      ],
      [
        "Evidence",
        "Identity, session, object, policy decision, database or file state, business record, and no unauthorized result."
      ],
      [
        "Closure value",
        "Shows current trusted context controls exact objects and actions."
      ]
    ]
  },
  {
    "title": "Output and file tests",
    "summary": "Prove fictional plain text remains text, rich content follows policy, URLs are approved, files are private, and exports contain only allowed fields.",
    "details": [
      [
        "Examples",
        "Reserved characters, inert markup-like values, unapproved destination, unsupported file, expired link, wrong audience, and export formula-like sample."
      ],
      [
        "Evidence",
        "Browser or document result, sanitizer or policy event, response headers, object decision, file state, and regression test."
      ],
      [
        "Closure value",
        "Shows output safety is correct for each destination and audience."
      ]
    ]
  },
  {
    "title": "Error, logging, and secret tests",
    "summary": "Prove fictional users receive safe errors, defenders receive structured evidence, and secrets remain absent from every response and evidence path.",
    "details": [
      [
        "Examples",
        "Validation failure, dependency timeout, authorization denial, placeholder secret in exception, old-secret access, delayed log delivery, and support export."
      ],
      [
        "Evidence",
        "User response, structured event, trace, alert, secret-manager access, old-value denial, source-health alert, and export review."
      ],
      [
        "Closure value",
        "Shows evidence remains useful, protected, available, and owned."
      ]
    ]
  },
  {
    "title": "Dependency, artifact, and configuration tests",
    "summary": "Prove fictional fixed versions, approved build, artifact identity, runtime inventory, narrow permissions, secure defaults, and drift detection.",
    "details": [
      [
        "Examples",
        "Old package absent, mutable tag rejected, wrong artifact denied, debug disabled, unnecessary listener closed, cross-environment identity denied, and known drift detected."
      ],
      [
        "Evidence",
        "Build ID, lockfile, artifact digest, deployment, runtime inventory, configuration comparison, identity decision, and alert."
      ],
      [
        "Closure value",
        "Shows the source-to-runtime chain matches the reviewed correction."
      ]
    ]
  },
  {
    "title": "Regression and rollback tests",
    "summary": "Preserve fictional original unsafe conditions as permanent tests and prove the team can reverse the release safely.",
    "details": [
      [
        "Examples",
        "Wrong-tenant export, unassigned record, unsafe label preview, secret-bearing error, old worker image, and legacy flag route."
      ],
      [
        "Evidence",
        "Finding-linked tests, repeated run history, rollback artifact, configuration restore, health check, and business confirmation."
      ],
      [
        "Closure value",
        "Reduces recurrence risk and demonstrates operational recovery."
      ]
    ]
  },
  {
    "title": "Monitoring and business validation",
    "summary": "Prove fictional source health, control behavior, user workflows, business records, alerts, retention, and owner response remain correct after release.",
    "details": [
      [
        "Examples",
        "No unexplained cross-tenant results, old secret use, unsupported fields, old image, expired-link download, missing worker logs, or configuration drift."
      ],
      [
        "Evidence",
        "Dashboards, alerts, source-health tests, access review, transaction state, user report, owner review, and monitoring window."
      ],
      [
        "Closure value",
        "Shows the control operates beyond a one-time test or deployment."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "Day 1 09:00",
    "source": "Case intake",
    "event": "A fictional secure-coding review begins for the Meadowbrook portal, reporting, export, preview, identity, and deployment services.",
    "meaning": "The application and workflow scope is established."
  },
  {
    "time": "Day 1 09:20",
    "source": "Requirements",
    "event": "The team records authorization, session, input, output, file, secret, dependency, configuration, logging, privacy, monitoring, and recovery requirements.",
    "meaning": "Expected secure behavior becomes measurable."
  },
  {
    "time": "Day 1 10:00",
    "source": "Threat model",
    "event": "The review identifies browser-to-API, API-to-identity, API-to-database, file-processing, build, deployment, and monitoring trust boundaries.",
    "meaning": "Security-sensitive transitions and misuse cases are mapped."
  },
  {
    "time": "Day 1 11:00",
    "source": "Code review",
    "event": "Fictional reviewers identify browser-trusted export scope, legacy dynamic report structure, raw preview rendering, and missing assignment authorization.",
    "meaning": "Four implementation paths require validation."
  },
  {
    "time": "Day 1 12:00",
    "source": "Error and secret review",
    "event": "A fictional legacy error exposes internal detail and an inert placeholder credential across browser, log, and support export.",
    "meaning": "A multi-system evidence-path weakness is confirmed in the safe environment."
  },
  {
    "time": "Day 1 13:00",
    "source": "Dependency review",
    "event": "A reachable preview package advisory combines with a shared worker identity, mutable image tag, broad storage access, and debug logging.",
    "meaning": "Dependency, privilege, build, and configuration context increases priority."
  },
  {
    "time": "Day 1 14:00",
    "source": "Monitoring review",
    "event": "The background export worker has no source-health alert and shorter retention than the requirement.",
    "meaning": "Evidence completeness and availability are limited."
  },
  {
    "time": "Day 1 15:00",
    "source": "Safe tests",
    "event": "Supplied fictional tests reproduce wrong-tenant export, unassigned report and record access, raw preview interpretation, placeholder-secret exposure, and worker configuration gaps.",
    "meaning": "Multiple findings gain reproducible test evidence."
  },
  {
    "time": "Day 1 16:00",
    "source": "Containment",
    "event": "Affected pull requests and legacy routes are blocked, test artifacts are deleted, placeholder secret is revoked, preview processing is paused, and broad identities are reduced.",
    "meaning": "Narrow containment reduces risk while preserving unrelated workflows and evidence."
  },
  {
    "time": "Day 2 09:00",
    "source": "Remediation",
    "event": "The fictional team implements trusted tenant and object authorization, strict schemas, safe rendering, safe errors, managed secrets, fixed dependency, pinned image, named identities, and source-health monitoring.",
    "meaning": "Corrections address the root control boundaries."
  },
  {
    "time": "Day 2 11:00",
    "source": "Build",
    "event": "The approved source, dependency graph, tests, runner, identity, and artifact digest are recorded.",
    "meaning": "The corrected build is traceable and identifiable."
  },
  {
    "time": "Day 2 12:00",
    "source": "Positive tests",
    "event": "Approved records, reports, exports, previews, messages, secret retrieval, and business workflows succeed.",
    "meaning": "Legitimate use remains available."
  },
  {
    "time": "Day 2 13:00",
    "source": "Negative tests",
    "event": "Wrong tenant, wrong object, unsupported fields, stale sessions, unsafe outputs, expired links, old secrets, old packages, debug mode, and missing logs are denied or detected.",
    "meaning": "Unsafe and unauthorized conditions are controlled."
  },
  {
    "time": "Day 2 14:00",
    "source": "Deployment",
    "event": "The approved artifact and version-controlled configuration deploy, runtime inventory matches, and monitoring sources remain healthy.",
    "meaning": "The reviewed controls are active in the deployed environment."
  },
  {
    "time": "Day 9",
    "source": "Monitoring",
    "event": "No unexplained cross-tenant results, old-secret use, old-image use, unsupported fields, expired-link downloads, or silent source loss appear.",
    "meaning": "Operational evidence supports remediation."
  },
  {
    "time": "Day 30",
    "source": "Closure",
    "event": "Owners confirm regression coverage, retention, access reviews, flag cleanup, image retirement, rollback readiness, residual risk, and lessons learned.",
    "meaning": "The case closes with technical, operational, business, and governance evidence."
  }
];
const commonMistakes = [
  "Starting the fictional lab with conclusions instead of defining scope, requirements, evidence, owners, and limitations.",
  "Treating a tool warning, code pattern, alert, or severity label as proof of successful harmful use or business impact.",
  "Combining confirmed facts, supported conclusions, assumptions, evidence gaps, possible impact, and reproduced test impact into one claim.",
  "Reviewing source code without connecting build, artifact, deployment, runtime, configuration, monitoring, and business evidence.",
  "Testing only happy paths and skipping wrong-role, wrong-tenant, wrong-object, expired, revoked, unsupported, duplicate, excessive, and failure conditions.",
  "Using only response codes without checking database, file, queue, transaction, user, and business outcomes.",
  "Deleting fictional evidence before preservation or using overbroad containment that breaks unrelated workflows.",
  "Correcting one route while leaving helpers, background jobs, legacy paths, feature flags, support exports, or recovery environments unchanged.",
  "Closing findings because the scanner is quiet, the pull request merged, or deployment succeeded.",
  "Failing to create permanent regression tests linked to original unsafe conditions.",
  "Ignoring source health, monitoring, retention, rollback, exceptions, residual risk, lessons learned, and owner approval.",
  "Publishing real code, credentials, logs, users, student data, architecture, package inventory, routes, hostnames, configurations, or findings in the portfolio."
];
const quizQuestions = [
  {
    "question": "What should happen first in the fictional secure-coding lab?",
    "choices": [
      "Define exact scope, requirements, users, data, components, environments, owners, evidence, and exclusions.",
      "Declare the highest severity finding.",
      "Delete every suspicious record.",
      "Publish the tool output."
    ],
    "answer": 0,
    "explanation": "A defensible lab begins with scope and evidence rather than assumptions."
  },
  {
    "question": "Which statement best separates fact from conclusion?",
    "choices": [
      "The supplied test created an unapproved-tenant export is a fact; the route has a tenant-authorization weakness is the supported conclusion.",
      "Both statements are guesses.",
      "The tool severity proves production compromise.",
      "A code pattern proves business impact without testing."
    ],
    "answer": 0,
    "explanation": "The observed result is direct evidence, while the security meaning is a reasoned conclusion."
  },
  {
    "question": "Why should the lab include positive tests after remediation?",
    "choices": [
      "They prove legitimate fictional workflows remain available after defensive controls are added.",
      "They replace negative tests.",
      "They prove zero residual risk.",
      "They remove the need for monitoring."
    ],
    "answer": 0,
    "explanation": "Security changes should protect the system without breaking approved use."
  },
  {
    "question": "Which evidence best supports closure of a fictional finding?",
    "choices": [
      "Corrected implementation, positive and negative tests, regression coverage, approved artifact, deployed runtime, monitoring, business outcome, rollback, residual risk, and owner approval.",
      "A comment saying fixed.",
      "A silent scanner.",
      "One successful build."
    ],
    "answer": 0,
    "explanation": "Closure requires technical, operational, business, evidence, and governance proof."
  },
  {
    "question": "How should fictional dependency risk be prioritized?",
    "choices": [
      "Use exact component, support status, reachability, privilege, exposure, controls, business consequence, update path, and evidence confidence.",
      "Use the advisory title only.",
      "Ignore it unless compromise is confirmed.",
      "Rate every advisory critical."
    ],
    "answer": 0,
    "explanation": "Dependency priority depends on the actual environment and business context."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use entirely fictional organizations, systems, code-review summaries, data, logs, tests, and identifiers while demonstrating professional reasoning.",
      "Publish real internal routes and logs.",
      "Include production credentials with values hidden.",
      "Reuse real student records after changing names."
    ],
    "answer": 0,
    "explanation": "The portfolio should demonstrate skill without exposing real systems or people."
  },
  {
    "question": "What should reopen a fictional closed case?",
    "choices": [
      "Regression failure, source-health loss, control drift, old path reappearance, new evidence, exception expiration, or meaningful system change.",
      "A change in page color.",
      "A user requests a new feature unrelated to the finding.",
      "Nothing can reopen a closed case."
    ],
    "answer": 0,
    "explanation": "Closure is based on current evidence and should be reviewed when material conditions change."
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
        Module Test
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
        Integrated Lab Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow the Fictional Secure-Coding Case from Intake to Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
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

export default function SecureCodingBasicsLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.8 Secure Coding Basics Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Integrate requirements, threat modeling, input and output safety,
            identity, authorization, errors, logging, secrets, dependencies,
            build security, configuration, review, testing, deployment,
            monitoring, ownership, and closure in one case.
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
          lessonTitle="Secure Coding Basics Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only supplied fictional requirements, architecture, review notes, configurations, tests, logs, artifacts, runtime records, and business evidence.",
            "I will separate confirmed facts, supported conclusions, assumptions, evidence gaps, possible impact, reproduced test impact, and production evidence.",
            "I will preserve legitimate workflows while testing invalid, unauthorized, expired, duplicate, unsupported, excessive, and failure conditions.",
            "I will connect every finding to an accountable owner, remediation, positive and negative validation, monitoring, rollback, residual risk, and closure.",
            "I will never inspect or publish real private code, credentials, systems, users, student data, logs, routes, hostnames, package inventories, configurations, or findings.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secure-Coding Case Is Strong Only When Every Link Can Be Defended"
        >
          <p className="leading-8">
            A fictional code observation may identify a missing check, but a
            professional case must also show the requirement, affected asset,
            trusted boundary, runtime path, reproduced result, business effect,
            containment, remediation, positive and negative retests, approved
            artifact, deployed configuration, monitoring, owner, and remaining
            uncertainty. This lab turns eight lessons into one traceable workflow.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak case
              </p>
              <p className="mt-2 leading-7">
                A fictional scanner found several high-severity issues, so the
                application was compromised and is now safe because the pull
                request merged.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong case
              </p>
              <p className="mt-2 leading-7">
                For each exact path, connect the requirement, implementation,
                supplied test result, data or business outcome, containment,
                correction, regression coverage, deployed evidence, monitoring,
                residual risk, and owner decision.
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
          title="Integrated Evidence Prevents Both Overreaction and Missed Risk"
        >
          <p className="leading-8">
            Fictional teams can overreact when they treat warnings as proof, and
            they can underreact when they review code without runtime and
            business evidence. Integrated analysis avoids both mistakes. It
            shows exactly what happened, what did not happen, which controls
            worked, where evidence is missing, how the correction was proved,
            and which conditions must remain healthy after closure.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Integrated Workflow"
          title="Eight Stages from Intake to Operational Closure"
          items={caseStages}
        />

        <DetailSection
          eyebrow="Evidence Packets"
          title="Six Core Sources That Must Be Correlated"
          items={evidencePackets}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Scope–Fact–Conclusion–Action–Validation–Closure Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Scope", "Which fictional system, route, user, object, environment, time window, and evidence are actually reviewed?"],
              ["Fact", "What do the fictional requirement, code, configuration, test, log, file, database, artifact, and business records directly show?"],
              ["Conclusion", "Which specific fictional weakness or control result is supported, with what confidence and limitations?"],
              ["Action", "Which fictional containment, remediation, owner, deadline, exception, and rollback address the exact condition?"],
              ["Validation", "Which fictional positive, negative, regression, deployment, source-health, and business tests prove the result?"],
              ["Closure", "Which fictional monitoring, old-path removal, residual risk, lessons learned, and owner approval complete the case?"],
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
          eyebrow="Lab Findings"
          title="Eight Fictional Findings to Analyze and Resolve"
          items={labFindings}
        />

        <DetailSection
          eyebrow="Risk Prioritization"
          title="Five Factors for Ranking the Findings"
          items={priorityFactors}
        />

        <DetailSection
          eyebrow="Validation Plan"
          title="Eight Test Groups for Defensible Closure"
          items={testPlan}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Integrated Secure-Coding Lab Terms
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
          title="Fake Secure Coding Lab Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook secure-coding case."
          metrics={[
            {
              label: "Evidence records",
              value: "96",
              note: "Fictional requirements, diagrams, review notes, tests, artifacts, configurations, runtime events, business records, owners, and closure evidence.",
            },
            {
              label: "Validated findings",
              value: "8",
              note: "Authorization, input, output, error, secret, dependency, configuration, feature-flag, and monitoring findings.",
            },
            {
              label: "Closure readiness",
              value: "87%",
              note: "Most corrections and tests are complete; source-health observation, flag cleanup, and owner sign-off remain.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Secure-Coding Findings Share Trust and Evidence Gaps"
          severity="High"
          time="03:00 PM"
          source="Fake Integrated Secure Coding Console"
          details="The fictional case contains reproducible test-environment findings involving browser-trusted export scope, legacy report construction, raw preview rendering, missing record assignment authorization, secret-bearing errors, a reachable package with broad worker permissions, an outdated feature flag, and incomplete monitoring source health."
          recommendation="Preserve and index all fictional evidence, prioritize by asset value, reachability, privilege, exposure, business consequence, reversibility, and confidence; apply narrow containment; implement trusted server controls and approved build and configuration patterns; validate legitimate and denied workflows; deploy the approved artifact; monitor; document evidence gaps, residual risk, rollback, lessons learned, and owner approval."
        />

        <FakeLogPanel
          title="Fake Integrated Secure Coding Case Timeline"
          logs={[
            "DAY1 09:00 CASE_SCOPE systems='portal,reporting,export,preview,identity,deploy'",
            "DAY1 09:20 REQUIREMENTS access='defined' input='defined' output='defined' secrets='defined'",
            "DAY1 10:00 THREAT_MODEL boundaries='mapped' misuse_cases='recorded'",
            "DAY1 11:00 CODE_REVIEW export_scope='browser_trusted' legacy_report='dynamic' preview='raw'",
            "DAY1 12:00 ERROR_REVIEW placeholder_secret='browser,log,support_export'",
            "DAY1 13:00 DEPENDENCY_REVIEW package='reachable' identity='shared' image='mutable' debug='true'",
            "DAY1 14:00 MONITORING_REVIEW worker_source_health='missing' retention='short'",
            "DAY1 15:00 SAFE_TESTS wrong_tenant='reproduced' unassigned='reproduced' secret_exposure='reproduced'",
            "DAY1 16:00 CONTAIN routes='blocked' artifacts='deleted' secret='revoked' previews='paused'",
            "DAY2 09:00 REMEDIATE authorization='central' schemas='strict' rendering='safe' secrets='managed'",
            "DAY2 11:00 BUILD source='linked' graph='linked' tests='linked' artifact='verified'",
            "DAY2 12:00 POSITIVE_TESTS records='pass' reports='pass' exports='pass' previews='pass'",
            "DAY2 13:00 NEGATIVE_TESTS wrong_tenant='deny' stale_session='deny' old_secret='deny' drift='detect'",
            "DAY2 14:00 DEPLOY runtime='matches' config='matches' sources='healthy'",
            "DAY9 MONITOR unexplained_cross_tenant='0' old_secret_use='0' old_image_use='0'",
            "DAY30 CLOSE regression='healthy' flags='cleaned' rollback='ready' owners='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated Lab Conclusion Is Best Supported?"
          evidence={[
            "The fictional requirements define trusted tenant and object access, safe input and output handling, protected sessions, safe errors, managed secrets, approved dependencies, secure configuration, logging, monitoring, and closure.",
            "The supplied code and configuration reviews identify eight exact weaknesses or control gaps.",
            "Safe fictional tests reproduce wrong-tenant export, unassigned access, unsafe rendering, placeholder-secret exposure, and dependency and configuration gaps in the test environment.",
            "Affected changes and routes are blocked, test artifacts are deleted, the placeholder secret is revoked, preview processing is paused, and broad identities are reduced.",
            "The remediation adds trusted server authorization, strict schemas, safe rendering, safe errors, redaction, managed secrets, fixed dependency, pinned image, named identities, and source-health controls.",
            "Positive workflows pass and the selected invalid, unauthorized, expired, unsupported, old-version, old-secret, drift, and missing-source conditions are denied or detected.",
            "The approved artifact and configuration deploy, runtime inventory matches, and short-term monitoring remains healthy.",
            "Owners document residual risk, rollback readiness, regression coverage, cleanup, lessons learned, and closure.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional case contains eight specific validated secure-coding findings in the supplied scope; narrow containment reduced risk, and the reviewed remediation, testing, deployment, monitoring, and owner evidence support closure with documented residual risk.",
            "The entire production environment was completely compromised.",
            "The tool warnings alone proved every business impact.",
            "One successful deployment proves permanent security.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports exact scoped findings and a defensible correction and closure process without supporting total-compromise or permanent-effectiveness claims."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Integrated Lab"
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
          title="Complete the Fictional Meadowbrook Secure Coding Case"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Ninety-Six Defensive Records
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review supplied fictional requirements, architecture, threat
                models, code-review summaries, configuration, identities,
                sessions, dependency records, pipeline evidence, artifacts,
                tests, logs, database and file states, business outcomes,
                owners, exceptions, monitoring, and closure records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create an evidence index and define exact scope, systems, users, data, environments, owners, and exclusions.</li>
                <li>Build requirement, architecture, data-flow, trust-boundary, and misuse-case maps.</li>
                <li>Write eight findings with facts, conclusion, confidence, alternatives, gaps, impact, owner, remediation, validation, and residual risk.</li>
                <li>Create a prioritized risk matrix using asset value, reachability, privilege, exposure, controls, consequence, reversibility, and confidence.</li>
                <li>Design positive, negative, regression, deployment, monitoring, source-health, business, and rollback tests.</li>
                <li>Produce a final report, closure checklist, lessons learned section, and portfolio-safe presentation.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional evidence and inert sample values. Do
            not inspect real private repositories, applications, credentials,
            logs, users, student records, routes, package inventories, cloud
            resources, networks, configurations, or production systems.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Several Sources Disagree About One Finding"
          scenario="A fictional code review suggests a missing object check, an older diagram says the route is retired, but current runtime logs and a supplied safe test show the route still serves requests."
          choices={[
            {
              label: "Choice A",
              response:
                "Prioritize current runtime and reproducible test evidence, document the stale diagram as an evidence gap, confirm the deployed artifact and feature flag, update architecture, contain the route, remediate, retest, monitor, and record the limitation.",
              outcome:
                "Best defensive choice. Current independent evidence outweighs a stale design record while preserving uncertainty and cleanup.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the runtime evidence because the diagram says the route is retired.",
              outcome:
                "Unsafe. Documentation can be stale and must be compared with deployed behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare every route unsafe.",
              outcome:
                "Overbroad. The conclusion should remain tied to the exact supported path.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Fix Works, but Monitoring Is Incomplete"
          scenario="A fictional finding passes positive, negative, regression, artifact, and deployment tests, but the background worker still lacks source-health monitoring."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep closure pending or document a narrow time-limited exception, add source-health and retention controls, run missing and delayed-event tests, assign an owner, monitor the observation window, preserve rollback, and then complete residual-risk review.",
              outcome:
                "Best defensive choice. Operational evidence is part of control effectiveness and closure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close immediately because code and deployment tests passed.",
              outcome:
                "Incomplete. Silent evidence loss could hide future control failure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every background worker.",
              outcome:
                "Overbroad. The response should address the exact monitoring gap.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Secure Coding Lab Checklist"
          items={[
            "I define exact fictional scope, requirements, users, assets, data, environments, components, owners, evidence, and exclusions.",
            "I map architecture, data flows, trust boundaries, entry points, misuse cases, dependencies, identities, deployments, monitoring, and business workflows.",
            "I separate confirmed facts, supported conclusions, assumptions, evidence gaps, possible impact, reproduced test impact, and production evidence.",
            "I validate tool warnings and review observations using exact code, configuration, runtime, tests, logs, data, business, and owner evidence.",
            "I prioritize findings using asset value, reachability, privilege, exposure, control strength, consequence, reversibility, remediation readiness, and confidence.",
            "I preserve evidence and apply narrow containment before remediation.",
            "I validate legitimate and denied behavior across input, output, identity, sessions, authorization, errors, logs, secrets, dependencies, artifacts, configuration, and files.",
            "I confirm the approved artifact, deployed runtime, configuration, source health, business workflow, monitoring, and rollback.",
            "I document owners, due dates, exceptions, residual risk, lessons learned, review triggers, and closure approval.",
            "I use only fictional evidence and never expose or access real code, credentials, systems, users, logs, data, routes, packages, or production details.",
          ]}
        />

        <MiniQuiz
          title="I9.8 Mini Quiz: Secure Coding Basics Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Coding Lab Report using at least ninety-six requirement, architecture, data-flow, threat-model, source-review, configuration, identity, session, authorization, dependency, build, artifact, test, log, database, file, business, owner, exception, monitoring, rollback, and closure records. Include an evidence index, scope, architecture diagram, requirement matrix, threat model, eight findings, priority matrix, remediation plan, positive and negative tests, regression coverage, deployment validation, source-health review, residual risk, lessons learned, and closure criteria."
          tips={[
            "Use only fictional organizations, applications, code-review summaries, systems, routes, users, data, logs, configurations, packages, tests, and identifiers.",
            "Give every finding exact scope, facts, conclusion, confidence, alternatives, evidence gaps, business context, owner, remediation, validation, and residual risk.",
            "Keep tool warning, code observation, reproduced unsafe result, data state, user effect, business impact, remediation, deployed behavior, and closure separate.",
            "Do not include real source code, credentials, repositories, hostnames, internal routes, logs, student records, package inventories, cloud settings, or private findings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A professional secure-coding case connects fictional requirements, threat models, implementation, configuration, tests, artifacts, runtime, business evidence, owners, and closure.",
            "Tool warnings and code patterns are evidence inputs, not proof of successful harmful use or business impact.",
            "Strong findings separate confirmed facts, supported conclusions, assumptions, evidence gaps, possible impact, reproduced impact, and production evidence.",
            "Containment should be narrow, preserve evidence, reduce risk, and protect legitimate workflows while remediation is prepared.",
            "Defensible validation includes positive, negative, regression, artifact, deployment, source-health, business, monitoring, and rollback evidence.",
            "Closure requires operational effectiveness, old-path removal, exception review, residual risk, lessons learned, monitoring, and accountable owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I9
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