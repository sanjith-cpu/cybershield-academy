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
const previousLesson = `${modulePath}/dependency-build-and-configuration-security`;
const nextLesson = `${modulePath}/secure-coding-basics-lab`;

const objectives = [
  "Explain how fictional peer review, focused checklists, static analysis, dependency review, unit tests, integration tests, negative tests, misuse-case tests, regression tests, deployment checks, and monitoring support one another.",
  "Distinguish a tool warning, review observation, confirmed weakness, reproducible unsafe result, business impact, remediation, validation, residual risk, and closure.",
  "Review fictional code and configuration changes for exact scope, trusted data, input and output handling, identity, sessions, authorization, errors, logs, secrets, dependencies, runtime settings, and operational ownership.",
  "Design fictional positive, negative, boundary, authorization, session, file, dependency, configuration, abuse-case, regression, deployment, monitoring, and rollback tests.",
  "Create a professional fictional Secure Code Review and Testing Report with evidence, findings, owners, remediation, retest results, confidence, evidence gaps, residual risk, and closure criteria."
];
const vocabulary = [
  [
    "Code review",
    "A fictional structured examination of a change, related design, tests, configuration, dependencies, and evidence to identify defects and verify secure patterns."
  ],
  [
    "Pull request",
    "A fictional proposed set of source, configuration, test, documentation, and dependency changes prepared for review before merging."
  ],
  [
    "Static analysis",
    "A fictional automated examination of source or build inputs that produces warnings requiring validation and context."
  ],
  [
    "False positive",
    "A fictional tool warning that does not represent the claimed weakness in the reviewed context after evidence-based validation."
  ],
  [
    "False negative",
    "A fictional weakness that a tool or test does not detect even though the unsafe condition exists."
  ],
  [
    "Positive test",
    "A fictional test confirming an approved user, input, object, workflow, environment, or operation succeeds."
  ],
  [
    "Negative test",
    "A fictional test confirming invalid, unauthorized, expired, duplicate, unsupported, excessive, or unsafe conditions are denied."
  ],
  [
    "Regression test",
    "A fictional repeatable test added or updated to prevent a corrected weakness from returning during future change."
  ],
  [
    "Test oracle",
    "A fictional expected result used to decide whether the observed behavior is correct, safe, and complete."
  ],
  [
    "Coverage",
    "A fictional measurement or evidence set describing which code paths, roles, objects, states, conditions, environments, and outcomes were reviewed or tested."
  ],
  [
    "Finding",
    "A fictional evidence-based statement describing exact scope, behavior, risk, proof, owner, remediation, and validation needs."
  ],
  [
    "Closure criteria",
    "The fictional technical, operational, business, evidence, monitoring, rollback, and owner conditions required to complete a finding."
  ]
];
const reviewFlow = [
  {
    "title": "1. Understand the change",
    "summary": "A fictional reviewer identifies the business purpose, users, data, components, dependencies, trust boundaries, environments, owners, and expected behavior.",
    "details": [
      [
        "Review focus",
        "Change description, requirement IDs, architecture, data flow, risk, dependencies, configuration, and affected workflows."
      ],
      [
        "Evidence",
        "Pull request, design record, requirement trace, owner, issue or ticket, and before-and-after behavior."
      ],
      [
        "Failure mode",
        "The reviewer reads isolated lines without understanding the business action or security boundary."
      ]
    ]
  },
  {
    "title": "2. Map the security-sensitive paths",
    "summary": "The fictional reviewer traces entry points, validation, identity, authorization, processing, storage, output, errors, logs, secrets, and downstream effects.",
    "details": [
      [
        "Review focus",
        "User and service inputs, object resolution, role and tenant checks, output contexts, files, exports, integrations, and administrative actions."
      ],
      [
        "Evidence",
        "Route map, call graph, data-flow notes, policy references, test plan, and runtime configuration."
      ],
      [
        "Failure mode",
        "The review concentrates on one function and misses helpers, middleware, background jobs, legacy routes, or deployment settings."
      ]
    ]
  },
  {
    "title": "3. Review secure patterns",
    "summary": "The fictional reviewer compares implementation with approved coding, configuration, dependency, logging, secret, and deployment patterns.",
    "details": [
      [
        "Review focus",
        "Strict schemas, parameterization, safe rendering, centralized authorization, session checks, safe errors, redaction, least privilege, and secure defaults."
      ],
      [
        "Evidence",
        "Code diff, shared libraries, policy implementation, configuration, dependency graph, and secure-pattern documentation."
      ],
      [
        "Failure mode",
        "A custom shortcut bypasses the standard control or duplicates it inconsistently."
      ]
    ]
  },
  {
    "title": "4. Evaluate automated findings",
    "summary": "The fictional reviewer validates tool warnings using exact code path, input, control, runtime, configuration, reachability, and test evidence.",
    "details": [
      [
        "Review focus",
        "Rule meaning, source and sink, data flow, control effectiveness, reachability, severity, confidence, and alternatives."
      ],
      [
        "Evidence",
        "Tool output, source lines, configuration, dependency or runtime version, test evidence, and reviewer conclusion."
      ],
      [
        "Failure mode",
        "Every warning is treated as proof or dismissed without validation."
      ]
    ]
  },
  {
    "title": "5. Inspect the test strategy",
    "summary": "The fictional reviewer checks whether tests prove both legitimate operation and denial of unsafe conditions.",
    "details": [
      [
        "Review focus",
        "Unit, integration, negative, boundary, misuse-case, regression, deployment, monitoring, and rollback coverage."
      ],
      [
        "Evidence",
        "Test names, inputs, expected results, fixtures, environment, results, logs, database state, and business records."
      ],
      [
        "Failure mode",
        "Tests cover only the happy path or assert only status codes without checking data and business outcomes."
      ]
    ]
  },
  {
    "title": "6. Write evidence-based findings",
    "summary": "The fictional reviewer records exact scope, facts, conclusion, confidence, alternatives, evidence gaps, impact, owner, and remediation.",
    "details": [
      [
        "Review focus",
        "Confirmed behavior, affected path, preconditions, existing controls, data or business effect, and residual uncertainty."
      ],
      [
        "Evidence",
        "Code, configuration, tests, logs, database or transaction records, user effect, and owner review."
      ],
      [
        "Failure mode",
        "The finding uses dramatic language, vague scope, unsupported impact, or no reproducible evidence."
      ]
    ]
  },
  {
    "title": "7. Validate remediation",
    "summary": "The fictional team confirms the narrow correction, legitimate workflows, denied conditions, compatibility, deployment, monitoring, and rollback.",
    "details": [
      [
        "Review focus",
        "Code or configuration change, test additions, related routes, dependency impact, environment behavior, and operational evidence."
      ],
      [
        "Evidence",
        "Updated diff, positive and negative tests, regression test, artifact, deployment, monitoring, and old-path denial."
      ],
      [
        "Failure mode",
        "A finding closes because the code changed without proving the unsafe result stopped and legitimate use still works."
      ]
    ]
  },
  {
    "title": "8. Close and maintain",
    "summary": "The fictional owner confirms residual risk, evidence retention, monitoring, exception status, lessons learned, and future regression protection.",
    "details": [
      [
        "Review focus",
        "Closure criteria, owner approval, source health, test ownership, exception expiry, documentation, and review trigger."
      ],
      [
        "Evidence",
        "Closure record, linked tests, monitoring result, residual-risk decision, owner sign-off, and follow-up date."
      ],
      [
        "Failure mode",
        "The team merges the correction but leaves no permanent test, monitoring, ownership, or lessons learned."
      ]
    ]
  }
];
const reviewDomains = [
  {
    "title": "Input and processing",
    "summary": "Review fictional input contracts and ensure values stay separate from query, command, template, path, destination, and configuration structure.",
    "details": [
      [
        "Questions",
        "Are fields, types, ranges, sizes, relationships, allowlists, object checks, fixed mappings, parameterization, and resource limits enforced server-side?"
      ],
      [
        "Evidence",
        "Schema, code path, operation map, safe API use, database record, file decision, and boundary tests."
      ],
      [
        "Warning",
        "Client validation, blocklists, dynamic structure, free-form administrative values, or unsupported file handling."
      ]
    ]
  },
  {
    "title": "Output and browser behavior",
    "summary": "Review fictional text, rich content, attributes, URLs, script data, logs, messages, files, documents, and exports for exact context handling.",
    "details": [
      [
        "Questions",
        "Does plain text use safe binding, rich content use narrow sanitization, URLs use allowlists, and documents preserve inert data safely?"
      ],
      [
        "Evidence",
        "Source-to-sink map, component review, browser result, sanitizer policy, export result, and regression tests."
      ],
      [
        "Warning",
        "Raw markup, manual string construction, broad sanitizer policy, unapproved destination, or unsafe export interpretation."
      ]
    ]
  },
  {
    "title": "Authentication and sessions",
    "summary": "Review fictional factor evaluation, session creation, scope, lifetime, rotation, renewal, revocation, logout, recovery, and current account state.",
    "details": [
      [
        "Questions",
        "Are post-authentication identifiers fresh, cookies or tokens narrowly scoped, old sessions denied after trust changes, and recovery at least as strong as sign-in?"
      ],
      [
        "Evidence",
        "Identity events, session records, code and configuration, positive tests, expiration tests, revocation tests, and account lifecycle records."
      ],
      [
        "Warning",
        "Pre-authentication session reuse, stale role state, weak recovery, long lifetime, missing revocation, or client-trusted identity claims."
      ]
    ]
  },
  {
    "title": "Authorization and business rules",
    "summary": "Review fictional route, object, field, action, tenant, workflow, privileged, and service authorization.",
    "details": [
      [
        "Questions",
        "Does the server resolve trusted tenant and object data, evaluate exact action and relationship, enforce workflow state, and require fresh privilege when needed?"
      ],
      [
        "Evidence",
        "Policy code, decision event, object and tenant data, transaction state, role change, and wrong-access tests."
      ],
      [
        "Warning",
        "Authentication-only checks, hidden links, client roles, valid-looking object IDs, broad administrator roles, or missing field filtering."
      ]
    ]
  },
  {
    "title": "Errors, logs, and secrets",
    "summary": "Review fictional user errors, protected diagnostics, structured events, redaction, secret storage, service identities, rotation, and source health.",
    "details": [
      [
        "Questions",
        "Do users receive safe responses, defenders receive minimized structured evidence, and secrets remain out of source, images, logs, traces, tickets, and exports?"
      ],
      [
        "Evidence",
        "Error contract, event schema, redaction test, secret-manager reference, identity policy, rotation result, and source-health alert."
      ],
      [
        "Warning",
        "Raw exceptions, full request bodies, tokens, shared credentials, broad secret access, or unowned evidence sources."
      ]
    ]
  },
  {
    "title": "Dependencies and build",
    "summary": "Review fictional package identity, versions, sources, reachability, runners, tools, secrets, artifact integrity, and provenance.",
    "details": [
      [
        "Questions",
        "Are versions pinned, registries approved, transitive components visible, build identities limited, artifacts immutable, and the deployed digest verified?"
      ],
      [
        "Evidence",
        "Manifest, lockfile, dependency graph, runner image, build ID, tests, artifact digest, repository, and deployment record."
      ],
      [
        "Warning",
        "Floating versions, mutable tags, untrusted sources, privileged runners, manual artifacts, or missing runtime inventory."
      ]
    ]
  },
  {
    "title": "Runtime and configuration",
    "summary": "Review fictional runtimes, listeners, certificates, headers, cookies, identities, permissions, feature flags, logging, and drift.",
    "details": [
      [
        "Questions",
        "Does the deployed environment match the version-controlled baseline and fail safely when required configuration is missing or invalid?"
      ],
      [
        "Evidence",
        "Runtime inventory, configuration digest, listener map, certificate record, header and cookie tests, identity policy, and drift report."
      ],
      [
        "Warning",
        "Debug mode, exposed administrative route, broad permissions, shared production values, stale flags, manual drift, or missing monitoring."
      ]
    ]
  },
  {
    "title": "Operations and closure",
    "summary": "Review fictional monitoring, alert routing, access, retention, deployment checks, rollback, business validation, and owner approval.",
    "details": [
      [
        "Questions",
        "Can the team detect control failure, distinguish source loss from no activity, preserve legitimate workflow, reverse change, and demonstrate closure?"
      ],
      [
        "Evidence",
        "Dashboard, alert, case, source-health test, business metric, rollback test, owner decision, and residual-risk record."
      ],
      [
        "Warning",
        "Closure based only on merge or deployment success without runtime, business, monitoring, and ownership evidence."
      ]
    ]
  }
];
const testLayers = [
  {
    "title": "Unit tests",
    "summary": "Verify fictional small functions, policies, validators, mappers, serializers, error builders, and redaction behavior in isolation.",
    "details": [
      [
        "Best use",
        "Exact input contracts, allowlists, policy decisions, boundary values, safe output helpers, and deterministic error or log formatting."
      ],
      [
        "Limitation",
        "A passing unit test does not prove route integration, identity context, database state, deployment, or business outcome."
      ],
      [
        "Evidence",
        "Test ID, implementation version, fixture, expected result, actual result, and coverage link."
      ]
    ]
  },
  {
    "title": "Integration tests",
    "summary": "Verify fictional components cooperate across route, identity, authorization, database, queue, file, integration, and monitoring boundaries.",
    "details": [
      [
        "Best use",
        "Trusted context propagation, object resolution, prepared operations, transaction state, file flow, secret reference, and structured evidence."
      ],
      [
        "Limitation",
        "A test environment may differ from production configuration, scale, data, identity, or third-party behavior."
      ],
      [
        "Evidence",
        "Environment, services, identities, request, database or queue state, logs, and business record."
      ]
    ]
  },
  {
    "title": "Positive workflow tests",
    "summary": "Prove fictional approved users, objects, inputs, files, sessions, configurations, and business actions still work.",
    "details": [
      [
        "Best use",
        "Prevent defensive changes from breaking legitimate users and required operations."
      ],
      [
        "Limitation",
        "Success does not prove unsafe or unauthorized conditions are denied."
      ],
      [
        "Evidence",
        "Approved identity, request, response, data state, user-visible result, and business outcome."
      ]
    ]
  },
  {
    "title": "Negative and boundary tests",
    "summary": "Prove fictional malformed, unknown, excessive, expired, unsupported, missing, duplicate, and edge conditions fail safely.",
    "details": [
      [
        "Best use",
        "Schema limits, session expiration, file size, retry, timeout, date range, count, precision, and error behavior."
      ],
      [
        "Limitation",
        "Boundary tests must be chosen from requirements and risk rather than random values alone."
      ],
      [
        "Evidence",
        "Input, expected denial, safe error, no-operation record, structured event, and resource result."
      ]
    ]
  },
  {
    "title": "Authorization and misuse-case tests",
    "summary": "Prove fictional wrong-role, wrong-tenant, wrong-object, wrong-field, out-of-order, stale-session, and unapproved privileged actions are denied.",
    "details": [
      [
        "Best use",
        "Object-level access, tenant isolation, workflow rules, reauthentication, dual approval, and service scope."
      ],
      [
        "Limitation",
        "Tests must cover representative roles, relationships, states, objects, and service identities."
      ],
      [
        "Evidence",
        "Identity, session, object, policy decision, database or transaction result, and business outcome."
      ]
    ]
  },
  {
    "title": "Dependency and configuration tests",
    "summary": "Prove fictional fixed versions, artifact identity, supported runtime, secure defaults, narrow listeners, secret references, and drift controls.",
    "details": [
      [
        "Best use",
        "Build and runtime inventories, configuration schema, header and cookie baseline, old-version denial, and environment separation."
      ],
      [
        "Limitation",
        "A source test does not prove the deployed artifact and configuration match."
      ],
      [
        "Evidence",
        "Build ID, artifact digest, deployment, runtime inventory, configuration comparison, and monitoring."
      ]
    ]
  },
  {
    "title": "Regression tests",
    "summary": "Preserve fictional corrections by reproducing the original unsafe condition and proving it remains denied after future changes.",
    "details": [
      [
        "Best use",
        "Authorization, validation, output handling, session, secret redaction, dependency, configuration, and workflow defects."
      ],
      [
        "Limitation",
        "A narrow regression test may miss related paths unless coverage is reviewed."
      ],
      [
        "Evidence",
        "Finding ID, original condition, corrected expected result, future run history, and test owner."
      ]
    ]
  },
  {
    "title": "Deployment and operational tests",
    "summary": "Prove the fictional approved artifact, configuration, monitoring, source health, business workflow, and rollback operate after release.",
    "details": [
      [
        "Best use",
        "Smoke tests, runtime inventory, source delivery, alert routing, user workflow, business state, rollback, and residual-risk monitoring."
      ],
      [
        "Limitation",
        "Short observation periods cannot prove permanent effectiveness."
      ],
      [
        "Evidence",
        "Release record, deployed digest, runtime state, dashboards, alerts, transactions, rollback result, and owner approval."
      ]
    ]
  }
];
const findingQuality = [
  {
    "title": "Exact scope",
    "summary": "Name the fictional route, component, version, role, object, tenant, environment, configuration, and workflow affected.",
    "details": [
      [
        "Strong evidence",
        "Source line or configuration, route map, runtime inventory, object or role context, and reproducible test."
      ],
      [
        "Weak wording",
        "The application is insecure or authorization is broken everywhere."
      ],
      [
        "Improvement",
        "State the exact reviewed path and explicitly exclude unverified areas."
      ]
    ]
  },
  {
    "title": "Confirmed facts",
    "summary": "Separate what fictional code, configuration, tool output, tests, logs, database, and business systems directly show.",
    "details": [
      [
        "Strong evidence",
        "Multiple independent records with timestamps, identifiers, and consistent results."
      ],
      [
        "Weak wording",
        "Assumptions and possibilities are written as proven facts."
      ],
      [
        "Improvement",
        "Use confirmed, supported, possible, unknown, and not observed categories."
      ]
    ]
  },
  {
    "title": "Reasoned conclusion",
    "summary": "Explain why the fictional facts support a specific weakness and not a broader unsupported claim.",
    "details": [
      [
        "Strong evidence",
        "Control expectation, implementation behavior, reproducible result, alternative explanation review, and limitation."
      ],
      [
        "Weak wording",
        "Tool severity becomes the conclusion without validation."
      ],
      [
        "Improvement",
        "Connect requirement, code path, result, impact, and uncertainty."
      ]
    ]
  },
  {
    "title": "Impact and business context",
    "summary": "Describe the fictional data, user, transaction, availability, evidence, privacy, or trust effect actually supported.",
    "details": [
      [
        "Strong evidence",
        "Database or transaction state, user-visible result, owner confirmation, workflow dependency, and recovery requirement."
      ],
      [
        "Weak wording",
        "Catastrophic impact is assumed from a code pattern alone."
      ],
      [
        "Improvement",
        "Separate possible impact, confirmed test impact, production evidence, and business consequence."
      ]
    ]
  },
  {
    "title": "Remediation",
    "summary": "Recommend a fictional narrow correction aligned with requirements, architecture, approved patterns, ownership, and operations.",
    "details": [
      [
        "Strong evidence",
        "Specific code or configuration control, owner, due date, compatibility plan, tests, deployment, monitoring, and rollback."
      ],
      [
        "Weak wording",
        "Fix security, sanitize everything, or update all software."
      ],
      [
        "Improvement",
        "Name the exact control and how success will be proved."
      ]
    ]
  },
  {
    "title": "Validation",
    "summary": "Define fictional positive, negative, regression, deployment, monitoring, business, and rollback evidence required for closure.",
    "details": [
      [
        "Strong evidence",
        "Test inputs, expected results, environment, artifact, runtime, source health, business record, and owner approval."
      ],
      [
        "Weak wording",
        "Retest passed without showing what was tested."
      ],
      [
        "Improvement",
        "Link each closure condition to a repeatable source and expected result."
      ]
    ]
  },
  {
    "title": "Confidence and evidence gaps",
    "summary": "State how strongly fictional evidence supports the finding and what remains missing, stale, inconsistent, or out of scope.",
    "details": [
      [
        "Strong evidence",
        "Independent sources, reproducibility, current runtime, known limitations, and explicit alternatives."
      ],
      [
        "Weak wording",
        "High confidence appears without explaining evidence quality."
      ],
      [
        "Improvement",
        "Document source limitations, missing roles, environments, retention, or third-party records."
      ]
    ]
  },
  {
    "title": "Ownership and closure",
    "summary": "Assign the fictional application, identity, platform, data, security, business, or operations owner responsible for each action.",
    "details": [
      [
        "Strong evidence",
        "Accountable owner, supporting teams, due dates, exception, residual-risk decision, monitoring, and sign-off."
      ],
      [
        "Weak wording",
        "Security team owns every correction or the finding closes automatically after merge."
      ],
      [
        "Improvement",
        "Tie implementation, validation, operation, risk acceptance, and review to named teams."
      ]
    ]
  }
];
const toolValidation = [
  {
    "title": "Static analysis warning",
    "summary": "A fictional rule identifies a possible unsafe source-to-sink or API pattern.",
    "details": [
      [
        "Validate",
        "Exact source, sink, data type, sanitization or parameterization, framework behavior, reachability, configuration, and test result."
      ],
      [
        "Possible outcomes",
        "Confirmed weakness, safe by construction, unreachable in reviewed scope, duplicate, accepted exception, or insufficient evidence."
      ],
      [
        "Do not assume",
        "The rule title proves exploitation, impact, or production exposure."
      ]
    ]
  },
  {
    "title": "Dependency advisory",
    "summary": "A fictional scanner identifies a known issue for a package or transitive component.",
    "details": [
      [
        "Validate",
        "Exact package, version, source, support, reachability, privilege, exposure, fixed version, controls, artifact, and runtime inventory."
      ],
      [
        "Possible outcomes",
        "Urgent update, scheduled update, isolation, removal, exception, false match, or not deployed."
      ],
      [
        "Do not assume",
        "Presence in a manifest proves reachable harmful use."
      ]
    ]
  },
  {
    "title": "Secret scanner result",
    "summary": "A fictional scanner detects a string that resembles a credential or private value.",
    "details": [
      [
        "Validate",
        "Whether the value is inert test data or a real secret category, where it appears, history, consumers, target validity, logs, artifacts, and copies."
      ],
      [
        "Possible outcomes",
        "Revoke and rotate, remove inert sample, suppress exact test pattern safely, or investigate unknown ownership."
      ],
      [
        "Do not assume",
        "Deleting the current line invalidates a value or removes repository history and artifacts."
      ]
    ]
  },
  {
    "title": "Configuration scanner result",
    "summary": "A fictional tool identifies a baseline difference such as debug mode, broad listener, weak header, or excessive permission.",
    "details": [
      [
        "Validate",
        "Actual environment, route coverage, runtime value, exception, compensating control, business need, and drift history."
      ],
      [
        "Possible outcomes",
        "Correct baseline, narrow exception, false environment match, stale inventory, or owner remediation."
      ],
      [
        "Do not assume",
        "A source template proves the deployed environment matches."
      ]
    ]
  },
  {
    "title": "Test failure",
    "summary": "A fictional automated test observes behavior different from its expected result.",
    "details": [
      [
        "Validate",
        "Requirement, test oracle, fixture, environment, test isolation, timing, dependency state, actual application result, and reproducibility."
      ],
      [
        "Possible outcomes",
        "Product defect, test defect, environment issue, stale expectation, data problem, or intermittent dependency failure."
      ],
      [
        "Do not assume",
        "Every failed test is a security weakness or every passed rerun closes the issue."
      ]
    ]
  },
  {
    "title": "Runtime alert",
    "summary": "A fictional alert identifies unusual errors, authorization denials, dependency use, configuration drift, or source loss.",
    "details": [
      [
        "Validate",
        "Raw events, source health, baseline, identity, object, control result, downstream state, user effect, and business outcome."
      ],
      [
        "Possible outcomes",
        "True control failure, blocked misuse, expected test, operational issue, parser problem, or missing evidence."
      ],
      [
        "Do not assume",
        "Severity or event volume proves compromise or impact."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "09:00",
    "source": "Pull request",
    "event": "A fictional change adds a bulk student-support export for approved district administrators.",
    "meaning": "The change introduces privileged data access, file creation, approval, and audit requirements."
  },
  {
    "time": "09:05",
    "source": "Requirement review",
    "event": "The export must require administrator role, recent reauthentication, dual approval, exact tenant scope, selected fields, protected storage, expiry, and audit evidence.",
    "meaning": "The expected security and business controls are explicit."
  },
  {
    "time": "09:12",
    "source": "Code review",
    "event": "The route checks administrator role but accepts tenant and field selection directly from browser data.",
    "meaning": "Trusted tenant resolution and server-defined field selection are missing."
  },
  {
    "time": "09:18",
    "source": "Static analysis",
    "event": "A fictional tool warns that request-controlled fields reach dynamic export construction.",
    "meaning": "The warning identifies a path requiring validation, not proof of impact by itself."
  },
  {
    "time": "09:25",
    "source": "Test review",
    "event": "The pull request includes one positive administrator test but no wrong-tenant, unsupported-field, stale-session, missing-approval, duplicate, or expiry tests.",
    "meaning": "The test strategy does not cover major misuse and failure cases."
  },
  {
    "time": "09:35",
    "source": "Safe negative test",
    "event": "A fictional administrator selects another tenant and unsupported private fields in the supplied test environment.",
    "meaning": "The test exercises the missing controls without using real systems or data."
  },
  {
    "time": "09:35",
    "source": "Export job",
    "event": "The test job creates an export containing rows from the unapproved tenant and unsupported fields.",
    "meaning": "A confirmed test-environment authorization and field-selection impact exists."
  },
  {
    "time": "09:40",
    "source": "Review decision",
    "event": "The pull request is blocked, the test export is deleted, and the issue is assigned to the reporting team.",
    "meaning": "The review gate prevents release and removes the supplied test artifact."
  },
  {
    "time": "10:00",
    "source": "Remediation",
    "event": "The server derives tenant from the privileged session, maps approved fields, verifies recent authentication and both approvals, and uses idempotent export jobs.",
    "meaning": "The implementation aligns with the requirement and trusted server context."
  },
  {
    "time": "10:20",
    "source": "Positive test",
    "event": "An approved administrator creates one authorized export with selected allowed fields.",
    "meaning": "Legitimate workflow remains available."
  },
  {
    "time": "10:25",
    "source": "Negative tests",
    "event": "Wrong-tenant, unsupported-field, ordinary-role, stale-session, missing-approval, duplicate, expired-link, and wrong-user downloads are denied.",
    "meaning": "Several authorization, workflow, and file-access conditions are controlled."
  },
  {
    "time": "10:35",
    "source": "Regression test",
    "event": "The original wrong-tenant and unsupported-field conditions are preserved as permanent tests linked to finding SCR-17.",
    "meaning": "Future changes can detect return of the corrected weakness."
  },
  {
    "time": "11:00",
    "source": "Deployment validation",
    "event": "The approved artifact and configuration deploy, the export workflow passes, and audit and source-health records appear.",
    "meaning": "The reviewed controls operate in the deployed environment."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No unexplained cross-tenant exports, unsupported fields, duplicate jobs, or expired-link downloads appear.",
    "meaning": "Short-term operational evidence supports remediation."
  },
  {
    "time": "Day 30",
    "source": "Closure review",
    "event": "The owner confirms regression-test health, export retention, approval workflow, monitoring, rollback readiness, and residual risk.",
    "meaning": "The finding closes with technical, operational, business, and ownership evidence."
  }
];
const commonMistakes = [
  "Reviewing fictional source lines without understanding requirements, data flow, trust boundaries, business workflow, deployment, and operations.",
  "Treating every static-analysis or dependency warning as a confirmed weakness or dismissing it without evidence.",
  "Checking only the changed function while missing middleware, helpers, background jobs, legacy routes, tests, configuration, and downstream services.",
  "Assuming a passing positive test proves invalid, unauthorized, expired, duplicate, and failure conditions are denied.",
  "Writing tests that assert only a response code without checking database, file, queue, transaction, user, and business outcomes.",
  "Using unrealistic fixtures that bypass the identity, tenant, object, workflow, dependency, or configuration conditions of the real design.",
  "Closing a finding after code changes without reproducing the original condition and confirming the unsafe result stopped.",
  "Failing to add a permanent regression test tied to the finding and expected security requirement.",
  "Using dramatic impact language unsupported by the reviewed test, runtime, data, user, or business evidence.",
  "Assigning every remediation to the security team instead of the accountable application, identity, platform, data, business, or operations owner.",
  "Ignoring deployment, source health, monitoring, rollback, evidence retention, residual risk, and owner approval during closure.",
  "Publishing real source code, repositories, internal routes, credentials, logs, users, data, configurations, or findings in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest purpose of fictional secure code review?",
    "choices": [
      "Connect requirements, architecture, implementation, configuration, dependencies, tests, deployment, evidence, ownership, and closure.",
      "Find formatting preferences only.",
      "Replace all testing.",
      "Prove every tool warning is exploitable."
    ],
    "answer": 0,
    "explanation": "Secure review combines human reasoning, automated evidence, testing, and operational validation."
  },
  {
    "question": "How should a fictional static-analysis warning be handled?",
    "choices": [
      "Validate the exact source, sink, data flow, control, reachability, configuration, runtime, and test evidence before concluding.",
      "Treat the title as proof of compromise.",
      "Ignore every warning.",
      "Close it because the code compiles."
    ],
    "answer": 0,
    "explanation": "Automated findings require context and evidence."
  },
  {
    "question": "Why are fictional positive and negative tests both required?",
    "choices": [
      "Positive tests preserve approved workflows, while negative tests prove unsafe and unauthorized conditions are denied.",
      "Positive tests always include every negative case.",
      "Negative tests replace requirements.",
      "Only negative tests matter."
    ],
    "answer": 0,
    "explanation": "Security changes should protect the system without breaking legitimate use."
  },
  {
    "question": "What makes a fictional regression test valuable?",
    "choices": [
      "It reproduces the original unsafe condition and permanently verifies the corrected expected result.",
      "It runs only once.",
      "It hides the finding.",
      "It replaces deployment validation."
    ],
    "answer": 0,
    "explanation": "Regression tests reduce the chance that a corrected weakness returns."
  },
  {
    "question": "Which fictional finding statement is strongest?",
    "choices": [
      "The reviewed export route trusted browser tenant and field selection, and a supplied test created an unapproved-tenant export in the test environment.",
      "The entire production environment is compromised.",
      "Security is broken everywhere.",
      "The tool reported high severity, so impact is certain."
    ],
    "answer": 0,
    "explanation": "The strongest statement uses exact scope and evidence without overstating impact."
  },
  {
    "question": "Which fictional closure evidence is strongest?",
    "choices": [
      "Updated code and configuration, positive and negative tests, regression coverage, approved artifact, deployed runtime, source health, monitoring, business outcome, rollback, residual risk, and owner approval.",
      "A comment saying fixed.",
      "One passing unit test.",
      "The pull request was merged."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies the full technical and operational chain."
  },
  {
    "question": "Which portfolio practice is safest?",
    "choices": [
      "Use fictional code-review notes, systems, routes, accounts, data, logs, tests, and organizations without real secrets or private details.",
      "Publish production source and logs.",
      "Include real session identifiers.",
      "Reuse real student records after changing names."
    ],
    "answer": 0,
    "explanation": "A portfolio should show reasoning and evidence handling without exposing real systems or people."
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
        Correlated Review Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Export Finding from Pull Request to Closure
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

export default function SecureCodeReviewAndTestingPage() {
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
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.7 Secure Code Review and Testing
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional reviewers combine requirements, architecture,
            human review, automated tools, code and configuration evidence,
            positive and negative tests, regression coverage, deployment checks,
            monitoring, business outcomes, and accountable closure.
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
          lessonTitle="Secure Code Review and Testing"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional tool warnings, code observations, confirmed weaknesses, test results, impact, and closure are different evidence categories.",
            "I will review requirements, architecture, code, configuration, dependencies, tests, deployment, runtime, monitoring, and ownership together.",
            "I will preserve legitimate workflows while testing invalid, unauthorized, expired, duplicate, unsupported, and failure conditions.",
            "I will use only supplied fictional code-review notes, tool outputs, tests, logs, configurations, and organizations.",
            "I will never inspect or publish real private source code, credentials, repositories, internal routes, logs, users, data, or production findings.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Tool Can Point to a Question, but Evidence Must Answer It"
        >
          <p className="leading-8">
            A fictional static-analysis warning may identify a real unsafe path,
            a safe framework pattern, unreachable test-only code, or incomplete
            evidence. A passing unit test may prove one function but not route
            authorization, deployed configuration, database state, or business
            outcome. Secure review combines human reasoning and multiple sources
            before declaring a finding or closing one.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>
              <p className="mt-2 leading-7">
                The fictional scanner says high severity, so the application is
                compromised and the fix is complete when the warning disappears.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>
              <p className="mt-2 leading-7">
                Validate the exact code and configuration path, requirement,
                reachability, control, reproducible result, impact, remediation,
                positive and negative tests, deployment, monitoring, and owner
                approval.
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
          title="Review Quality Determines Whether Security Work Is Reproducible"
        >
          <p className="leading-8">
            Fictional organizations make better decisions when findings explain
            exact scope, facts, uncertainty, business effect, owners, and
            validation. Weak reviews create false alarms, missed weaknesses,
            broken workflows, vague remediation, and findings that return.
            Strong reviews create permanent tests, measurable closure, and
            evidence that future teams can understand.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Review Workflow"
          title="Eight Steps from Change Understanding to Closure"
          items={reviewFlow}
        />

        <DetailSection
          eyebrow="Review Domains"
          title="Eight Security Areas to Examine Together"
          items={reviewDomains}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Requirement–Implementation–Test–Outcome–Closure Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Requirement", "Which fictional protection, business rule, acceptance criterion, and owner define correct behavior?"],
              ["Implementation", "Which fictional code, configuration, dependency, identity, and runtime path enforce the control?"],
              ["Test", "Which fictional positive, negative, boundary, misuse-case, regression, deployment, and rollback cases evaluate it?"],
              ["Outcome", "Which fictional response, database, file, transaction, user, and business records show the actual result?"],
              ["Finding", "Which fictional facts, conclusion, confidence, impact, alternatives, gaps, owner, and remediation are supported?"],
              ["Closure", "Which fictional retests, artifact, deployment, monitoring, source health, rollback, residual risk, and approval complete the work?"],
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
          eyebrow="Testing Strategy"
          title="Eight Layers of Defensive Validation"
          items={testLayers}
        />

        <DetailSection
          eyebrow="Finding Quality"
          title="Eight Parts of a Professional Finding"
          items={findingQuality}
        />

        <DetailSection
          eyebrow="Tool Validation"
          title="Six Automated Signals That Require Context"
          items={toolValidation}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Code Review and Testing Terms
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
          title="Fake Secure Code Review Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook application portfolio."
          metrics={[
            {
              label: "Open reviews",
              value: "14",
              note: "Fictional application, identity, reporting, messaging, file, dependency, configuration, and deployment changes.",
            },
            {
              label: "Validated tool findings",
              value: "37",
              note: "Warnings classified as confirmed, safe pattern, duplicate, unreachable, exception, or insufficient evidence.",
            },
            {
              label: "Regression coverage",
              value: "91%",
              note: "Closed high and medium findings linked to permanent positive and negative regression tests.",
            },
          ]}
        />

        <FakeAlertCard
          title="Bulk Export Review Finds Missing Tenant and Field Controls"
          severity="High"
          time="09:35 AM"
          source="Fake Secure Code Review Console"
          details="A fictional bulk-export route checks administrator role but accepts tenant and field selection from browser data. A static-analysis warning identifies dynamic export construction, and a supplied safe negative test creates a test export containing rows from an unapproved tenant and unsupported private fields."
          recommendation="Block the pull request, delete the test export, preserve requirement, code, tool, test, job, and file evidence, derive tenant from trusted privileged session, use server-defined field mappings, require recent authentication and both approvals, add idempotency and protected expiry, validate positive and denied cases, add regression coverage, deploy the approved artifact, monitor, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Secure Review and Retest Timeline"
          logs={[
            "09:00 PULL_REQUEST feature='bulk_support_export'",
            "09:05 REQUIREMENT role='admin' reauth='required' approvals='2' tenant='trusted'",
            "09:12 CODE_REVIEW tenant_source='browser' field_source='browser'",
            "09:18 STATIC_ANALYSIS dynamic_export_structure='warning'",
            "09:25 TEST_REVIEW positive='1' negative='0'",
            "09:35 SAFE_NEGATIVE_TEST wrong_tenant='supplied' unsupported_fields='supplied'",
            "09:35 EXPORT_JOB unapproved_tenant_rows='created' unsupported_fields='present'",
            "09:40 REVIEW_GATE result='blocked' test_export='deleted' owner='reporting-team'",
            "10:00 REMEDIATE tenant='session_derived' fields='server_mapped' reauth='verified' approvals='verified'",
            "10:20 POSITIVE_TEST approved_export='pass'",
            "10:25 NEGATIVE_TEST wrong_tenant='deny' unsupported='deny' stale_session='deny' missing_approval='deny'",
            "10:35 REGRESSION finding='SCR-17' original_conditions='preserved'",
            "11:00 DEPLOY artifact='approved' config='approved' audit_source='healthy'",
            "DAY7 MONITOR cross_tenant_exports='0' unsupported_fields='0' duplicate_jobs='0'",
            "DAY30 CLOSE regression='healthy' retention='reviewed' rollback='ready' owner='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Secure Review Conclusion Is Best Supported?"
          evidence={[
            "The fictional requirement requires trusted tenant scope, allowed fields, recent authentication, dual approval, protected storage, expiry, and audit evidence.",
            "The reviewed route checks administrator role but accepts tenant and field choices from browser data.",
            "A static-analysis rule identifies dynamic export construction.",
            "The pull request contains one positive test and no major negative or misuse-case tests.",
            "A supplied safe test creates a test export with unapproved-tenant rows and unsupported fields.",
            "The pull request is blocked and the test export is deleted.",
            "The remediation derives tenant from the privileged session, maps approved fields, verifies recent authentication and approvals, and uses idempotent jobs.",
            "Positive, negative, regression, deployment, monitoring, and owner-review evidence pass in the reviewed scope.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional bulk-export change had confirmed tenant-authorization and field-selection weaknesses in the test environment; the review gate prevented release, and the reviewed remediation and closure evidence support correction.",
            "The entire production environment was compromised.",
            "The static-analysis warning alone proved the business impact.",
            "The administrator role made tenant and field checks unnecessary.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports two specific confirmed test-path weaknesses, prevented release, and validated remediation without supporting a production-compromise claim."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Code Review and Testing"
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
          title="Complete a Fictional Secure Code Review and Test Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Bulk Export Pull Request
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review forty-eight supplied fictional records covering
                requirements, architecture, code diff, configuration,
                dependencies, static analysis, secret scanning, tests, export
                jobs, files, identity, sessions, approvals, artifact,
                deployment, monitoring, rollback, owners, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define fictional change scope, requirements, users, data, trust boundaries, business workflow, owners, and expected behavior.</li>
                <li>Trace input, identity, session, authorization, processing, storage, output, errors, logs, secrets, dependencies, and configuration.</li>
                <li>Validate automated warnings using exact path, reachability, controls, runtime, configuration, and test evidence.</li>
                <li>Design unit, integration, positive, negative, boundary, misuse-case, regression, deployment, monitoring, and rollback tests.</li>
                <li>Write findings with facts, conclusion, confidence, alternatives, evidence gaps, impact, owner, remediation, and validation.</li>
                <li>Define closure using retests, artifact, runtime, source health, business outcome, residual risk, and approval.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence and inert sample values. Do not
            inspect real private repositories, source code, credentials, logs,
            internal routes, production data, deployed applications, or
            organizational findings.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Static Tool Reports a High-Severity Warning"
          scenario="A fictional tool reports that request data reaches a sensitive operation, but the reviewer has not examined the framework API, trusted mapping, reachability, configuration, or tests."
          choices={[
            {
              label: "Choice A",
              response:
                "Trace the exact source and sink, inspect the framework and server mapping, confirm reachability and runtime configuration, review existing controls, run safe positive and negative tests, record evidence and limitations, and then classify the warning.",
              outcome:
                "Best defensive choice. Tool output becomes one source in an evidence-based conclusion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare compromise because the tool used a high-severity label.",
              outcome:
                "Unsupported. Severity does not prove exploitability, impact, or production exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Dismiss it because automated tools make mistakes.",
              outcome:
                "Unsafe. The warning still requires validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Fix Removes the Warning but Has No Regression Test"
          scenario="A fictional code change makes a scanner warning disappear, but the original unsafe condition was not reproduced and no negative test was added."
          choices={[
            {
              label: "Choice A",
              response:
                "Reproduce the original condition safely, verify the prior result, confirm the narrow fix, test legitimate and denied behavior, add a permanent regression test linked to the finding, validate deployment and monitoring, and document closure evidence.",
              outcome:
                "Best defensive choice. The team proves behavior instead of relying on tool silence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the finding because the scanner is quiet.",
              outcome:
                "Weak. Tool silence does not prove the unsafe behavior stopped or that workflows still work.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove every related feature.",
              outcome:
                "Overbroad. A narrow evidence-based correction is preferred when possible.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Secure Code Review and Testing Checklist"
          items={[
            "I understand the fictional business purpose, requirements, architecture, data, users, trust boundaries, environments, dependencies, owners, and expected behavior.",
            "I trace fictional input, identity, sessions, authorization, processing, storage, output, errors, logs, secrets, dependencies, build, configuration, and operations.",
            "I compare implementation with approved secure patterns and document every meaningful deviation.",
            "I validate automated warnings using exact source, sink, data flow, reachability, controls, runtime, configuration, and test evidence.",
            "I review unit, integration, positive, negative, boundary, authorization, misuse-case, regression, deployment, monitoring, and rollback coverage.",
            "I verify database, file, queue, transaction, user, and business outcomes rather than status codes alone.",
            "I write findings with exact scope, facts, conclusion, confidence, alternatives, gaps, impact, owner, remediation, and validation.",
            "I reproduce the original condition after remediation and preserve it as a permanent regression test.",
            "I verify the approved artifact, deployed runtime, configuration, source health, business workflow, monitoring, rollback, residual risk, and owner approval.",
            "I use only fictional evidence and never expose real source code, credentials, repositories, logs, users, data, routes, or production findings.",
          ]}
        />

        <MiniQuiz
          title="I9.7 Mini Quiz: Secure Code Review and Testing"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Code Review and Testing Report using at least forty-eight requirement, architecture, pull-request, source-review, configuration, dependency, tool-warning, secret-scan, unit-test, integration-test, positive-test, negative-test, misuse-case, regression, artifact, deployment, monitoring, rollback, business, owner, and closure records. Include a review map, validated-tool matrix, test strategy, findings, evidence references, remediation, retest results, evidence gaps, confidence, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, code-review notes, warnings, routes, users, data, configurations, logs, tests, and organizations.",
            "For every warning, state exact path, control, reachability, runtime, evidence, classification, confidence, and limitation.",
            "For every finding, keep code observation, confirmed unsafe result, data state, user effect, business impact, remediation, and closure separate.",
            "Do not include real source code, credentials, repository names, internal routes, logs, student records, production configuration, or private findings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Secure code review connects fictional requirements, architecture, implementation, configuration, dependencies, tests, deployment, evidence, ownership, and closure.",
            "Automated warnings identify questions; they do not prove exploitability, business impact, or production exposure without validation.",
            "Positive tests preserve legitimate workflows, while negative and misuse-case tests prove unsafe and unauthorized conditions are denied.",
            "Strong findings use exact scope, confirmed facts, reasoned conclusions, supported impact, narrow remediation, validation, confidence, gaps, and ownership.",
            "Regression tests preserve the original unsafe condition as a permanent expectation after remediation.",
            "Professional closure verifies code and configuration, tests, artifact, runtime, monitoring, source health, business outcomes, rollback, residual risk, and owner approval.",
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