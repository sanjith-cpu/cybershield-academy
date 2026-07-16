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
const nextLesson = `${modulePath}/threat-modeling-and-attack-surface-review`;

const objectives = [
  "Explain how fictional security requirements belong in planning, design, implementation, review, testing, deployment, operations, and retirement.",
  "Distinguish business requirements, security requirements, privacy requirements, misuse cases, acceptance criteria, evidence sources, owners, and closure conditions.",
  "Translate fictional risks into clear, testable requirements for authentication, authorization, data handling, logging, secrets, dependencies, configuration, monitoring, and recovery.",
  "Evaluate fictional requirements without making them vague, impossible to test, disconnected from owners, or dependent on one tool or person.",
  "Create a professional fictional Secure Development Requirements Package with traceability, tests, evidence, owners, due dates, exceptions, and residual risk."
];

const vocabulary = [
  [
    "Secure development lifecycle",
    "A fictional process that includes security and privacy activities throughout planning, design, implementation, review, testing, deployment, operations, maintenance, and retirement."
  ],
  [
    "Security requirement",
    "A fictional statement describing a protection, constraint, behavior, or evidence condition that the application must meet."
  ],
  [
    "Acceptance criterion",
    "A fictional measurable condition used to decide whether a requirement has been implemented successfully."
  ],
  [
    "Misuse case",
    "A fictional description of how a feature, role, workflow, or dependency could be used incorrectly, abused, or misunderstood."
  ],
  [
    "Threat model",
    "A fictional structured review of assets, users, data flows, trust boundaries, entry points, dependencies, and possible failures."
  ],
  [
    "Traceability",
    "A fictional connection from requirement to design, code, configuration, test, evidence, owner, deployment, and monitoring."
  ],
  [
    "Security gate",
    "A fictional decision point that requires selected evidence or approval before work moves to the next lifecycle stage."
  ],
  [
    "Exception",
    "A fictional approved and documented temporary or narrow departure from the security baseline."
  ],
  [
    "Residual risk",
    "The fictional risk that remains after controls, validation, monitoring, and exceptions are considered."
  ],
  [
    "Definition of done",
    "A fictional set of technical, security, privacy, testing, documentation, and operational conditions required before work is complete."
  ],
  [
    "Evidence source",
    "A fictional record such as a test, log, review, configuration, deployment result, owner approval, or business-system state used to support a conclusion."
  ],
  [
    "Control owner",
    "The fictional team or person accountable for implementation, operation, validation, monitoring, and review of a control."
  ]
];

const lifecycleStages = [
  {
    "stage": "1. Planning and discovery",
    "goal": "Define the fictional business problem, users, data, owners, legal or policy needs, critical workflows, dependencies, and acceptable risk.",
    "securityWork": "Classify data, identify high-impact actions, define baseline security and privacy requirements, assign owners, and document assumptions.",
    "evidence": "Business brief, data inventory, owner list, risk statement, security requirement set, privacy review, and scope approval.",
    "failureMode": "Security is added after architecture and deadlines are fixed, creating expensive redesign or weak exceptions."
  },
  {
    "stage": "2. Architecture and design",
    "goal": "Choose fictional components, trust boundaries, identity flows, data paths, storage, integrations, deployment model, and recovery behavior.",
    "securityWork": "Threat model the design, define authorization boundaries, encryption needs, secrets handling, logging, failure behavior, and resilience.",
    "evidence": "Architecture diagram, data-flow diagram, threat model, design decisions, security patterns, dependency plan, and review notes.",
    "failureMode": "The design assumes internal systems, trusted users, or browser controls are sufficient without server-side enforcement."
  },
  {
    "stage": "3. Implementation",
    "goal": "Build fictional application code, configuration, infrastructure, integrations, and operational features.",
    "securityWork": "Use approved secure patterns for validation, parameterization, output handling, sessions, access control, errors, logs, secrets, dependencies, and defaults.",
    "evidence": "Pull requests, peer review, secure-coding checklist, tests, configuration, build output, secret references, and implementation notes.",
    "failureMode": "Developers use local shortcuts, raw dynamic construction, hard-coded secrets, weak errors, or inconsistent authorization."
  },
  {
    "stage": "4. Verification and testing",
    "goal": "Confirm the fictional application meets functional, security, privacy, performance, accessibility, and reliability expectations.",
    "securityWork": "Run positive, negative, misuse-case, authorization, session, input, rendering, configuration, regression, and monitoring tests.",
    "evidence": "Test plan, test results, defects, retests, coverage report, reviewer approval, evidence gaps, and residual-risk record.",
    "failureMode": "Testing proves only the happy path and misses invalid, unauthorized, expired, duplicate, cross-tenant, or failure conditions."
  },
  {
    "stage": "5. Deployment and release",
    "goal": "Move the fictional build into an approved environment using controlled change and rollback.",
    "securityWork": "Validate artifact integrity, runtime identity, secrets, ports, headers, certificates, feature flags, migration, monitoring, and rollback readiness.",
    "evidence": "Release ticket, build ID, artifact verification, deployment template, environment comparison, smoke tests, owner approval, and rollback plan.",
    "failureMode": "A secure code review is weakened by debug mode, broad permissions, wrong secrets, outdated dependencies, or configuration drift."
  },
  {
    "stage": "6. Operations and monitoring",
    "goal": "Run the fictional service safely while supporting users, responding to issues, and preserving business workflows.",
    "securityWork": "Monitor source health, authentication, authorization, errors, configuration drift, certificate lifecycle, dependencies, alerts, user reports, and business outcomes.",
    "evidence": "Dashboards, alerts, source-health reports, access reviews, incident records, certificate alerts, dependency reports, and owner reviews.",
    "failureMode": "The team assumes deployment completed the security work and does not monitor drift, abuse, outages, or control failures."
  },
  {
    "stage": "7. Maintenance and change",
    "goal": "Update fictional features, dependencies, configurations, integrations, data models, and infrastructure safely.",
    "securityWork": "Revisit requirements and threat models, review changed trust boundaries, test regression, update detections, and revalidate exceptions.",
    "evidence": "Change request, updated architecture, impact analysis, dependency review, test results, deployment validation, and exception review.",
    "failureMode": "Small changes bypass security review even though they alter data flow, access, browser behavior, or deployment settings."
  },
  {
    "stage": "8. Retirement and disposal",
    "goal": "Remove the fictional service or feature without leaving data, accounts, secrets, integrations, domains, certificates, or monitoring behind.",
    "securityWork": "Revoke access, archive or delete data safely, remove secrets, disable integrations, update inventories, preserve required evidence, and confirm ownership transfer.",
    "evidence": "Retirement plan, data disposition record, account and secret revocation, dependency cleanup, DNS and certificate changes, and owner sign-off.",
    "failureMode": "Old services remain reachable, credentials stay active, data is retained indefinitely, and monitoring no longer covers the environment."
  }
];

const requirementCategories = [
  {
    "category": "Identity and authentication",
    "weak": "Users must log in securely.",
    "strong": "Fictional staff accounts must use approved multifactor authentication; sign-in events must record account, factor, device, policy, result, and request ID; recovery must require separate verification.",
    "acceptance": "Approved staff sign-in succeeds, missing-factor and failed-recovery cases are denied, and all results appear in structured identity logs.",
    "owner": "Identity and Access Team"
  },
  {
    "category": "Authorization and least privilege",
    "weak": "Users should access only what they need.",
    "strong": "The fictional server must verify role, tenant, object relationship, requested action, and workflow state before returning or changing protected records.",
    "acceptance": "Assigned-record access succeeds; unassigned, wrong-tenant, wrong-role, and expired-session cases are denied before protected data is returned.",
    "owner": "Application Team"
  },
  {
    "category": "Input and data handling",
    "weak": "Validate all input.",
    "strong": "The fictional API must reject unknown fields, invalid types, unsupported choices, excessive sizes, malformed identifiers, and unauthorized objects before database operations.",
    "acceptance": "Approved requests pass; invalid or unauthorized requests produce safe errors, no database operation, and a structured validation event.",
    "owner": "Web Platform Team"
  },
  {
    "category": "Browser and output safety",
    "weak": "Prevent browser attacks.",
    "strong": "Plain fictional text must use safe text binding; approved rich text must use a maintained sanitizer with a documented allowlist; sensitive pages must use the approved browser-policy baseline.",
    "acceptance": "Approved formatting renders correctly while unsupported elements, attributes, destinations, and inert markup-like samples are removed or displayed as text.",
    "owner": "Front-End and Platform Teams"
  },
  {
    "category": "Sessions and user actions",
    "weak": "Sessions must be secure.",
    "strong": "Fictional sessions must rotate after sign-in and privilege elevation, expire after approved idle and maximum lifetimes, revoke on logout and account disablement, and require reauthentication for high-risk actions.",
    "acceptance": "Old identifiers fail after rotation, expired and revoked sessions are denied, and high-risk actions require fresh approved verification.",
    "owner": "Identity and Application Teams"
  },
  {
    "category": "Errors, logs, and monitoring",
    "weak": "Log security events.",
    "strong": "Fictional security-relevant decisions must create structured events with time, request ID, account or service identity, route, object category, decision, reason, and result while excluding secrets and unnecessary personal data.",
    "acceptance": "Approved test events appear in monitoring with correct fields, safe redaction, owner routing, retention, and alert behavior.",
    "owner": "Application and Security Operations Teams"
  },
  {
    "category": "Secrets and service identities",
    "weak": "Protect secrets.",
    "strong": "Fictional production secrets must be stored in managed secret storage, accessed only by named service identities, rotated on schedule and incident, and excluded from source code, images, logs, and tickets.",
    "acceptance": "The application retrieves only required secrets; old versions are retired; access is logged; source and image reviews contain no secret values.",
    "owner": "Platform Engineering"
  },
  {
    "category": "Dependencies and configuration",
    "weak": "Keep software updated.",
    "strong": "Fictional dependencies and runtimes must be inventoried, locked, reviewed for support status and known risk, updated through tested change, and deployed using version-controlled secure baselines.",
    "acceptance": "The deployed build matches the approved manifest and configuration; exceptions are documented; update and rollback tests pass.",
    "owner": "Engineering and Infrastructure Operations"
  }
];

const qualityTests = [
  {
    "quality": "Specific",
    "question": "Does the fictional requirement identify the exact system, user, data, action, control, and condition?",
    "weakSignal": "Words such as secure, strong, appropriate, or protected appear without measurable meaning.",
    "improvement": "Name the route, role, object, session condition, browser context, log fields, or configuration value."
  },
  {
    "quality": "Testable",
    "question": "Can a fictional reviewer prove the requirement with repeatable positive and negative evidence?",
    "weakSignal": "The requirement depends on opinion or cannot produce a clear pass or fail.",
    "improvement": "Add exact acceptance criteria, expected results, evidence sources, and test owners."
  },
  {
    "quality": "Owned",
    "question": "Is a fictional team accountable for implementation, operation, validation, monitoring, and review?",
    "weakSignal": "The owner is listed as everyone, security, engineering, or later.",
    "improvement": "Assign one accountable owner and supporting teams with due dates and escalation."
  },
  {
    "quality": "Traceable",
    "question": "Can the fictional requirement be followed into design, code, configuration, tests, deployment, logs, and closure?",
    "weakSignal": "The requirement appears only in a planning document and is disconnected from implementation evidence.",
    "improvement": "Use a requirement ID and link every artifact, test, change, finding, and exception."
  },
  {
    "quality": "Risk aligned",
    "question": "Does the fictional control strength match data sensitivity, action impact, exposure, user type, and business consequence?",
    "weakSignal": "Every feature receives the same control regardless of risk.",
    "improvement": "Use stronger verification, approval, monitoring, or recovery for higher-impact workflows."
  },
  {
    "quality": "Operational",
    "question": "Does the fictional requirement include logging, monitoring, maintenance, renewal, review, and failure behavior?",
    "weakSignal": "The control is implemented once but has no owner after deployment.",
    "improvement": "Add source health, alerting, drift review, certificate or dependency lifecycle, and incident actions."
  },
  {
    "quality": "Privacy safe",
    "question": "Does the fictional requirement minimize collection, retention, display, logging, and sharing of user data?",
    "weakSignal": "The control collects or stores more personal information than needed.",
    "improvement": "Limit fields, access, retention, export, display, and monitoring content to the business need."
  },
  {
    "quality": "Maintainable",
    "question": "Can the fictional requirement survive new features, environments, roles, dependencies, and architecture changes?",
    "weakSignal": "The requirement is hard-coded to one page, person, tool, or temporary workaround.",
    "improvement": "Use reusable patterns, versioned baselines, automated tests, documented exceptions, and periodic review."
  }
];

const traceabilityMatrix = [
  {
    "requirement": "SR-01 Object authorization",
    "design": "Fictional server resolves tenant, assignment, role, and object before returning a support record.",
    "implementation": "Protected record service uses a central authorization policy.",
    "test": "Assigned access passes; unassigned, wrong-tenant, wrong-role, and expired-session cases fail.",
    "evidence": "Requirement record, architecture note, pull request, test IDs, application decisions, and database results."
  },
  {
    "requirement": "SR-02 Safe report input",
    "design": "Fictional report requests use strict schemas and server-defined sort and filter mappings.",
    "implementation": "Approved values are bound through supported data APIs.",
    "test": "Unknown fields, invalid types, excessive limits, unsupported sort choices, and unauthorized objects fail before database access.",
    "evidence": "Schema, code review, test result, safe error, no-operation database record, and monitoring event."
  },
  {
    "requirement": "SR-03 Protected sessions",
    "design": "Fictional sessions rotate at trust changes and use approved idle, maximum, logout, and revocation rules.",
    "implementation": "Central session service issues and revokes session identifiers.",
    "test": "Old, expired, revoked, and wrong-device-risk sessions are denied while approved sessions work.",
    "evidence": "Session policy, configuration, identity logs, application decisions, and test report."
  },
  {
    "requirement": "SR-04 Safe announcement rendering",
    "design": "Fictional plain text and approved rich text follow separate rendering paths.",
    "implementation": "Plain text uses safe binding; rich text uses a maintained sanitizer and content policy.",
    "test": "Approved formatting works; unsupported content is removed or displayed as text.",
    "evidence": "Component review, sanitizer configuration, browser result, policy event, and regression test."
  },
  {
    "requirement": "SR-05 Sensitive-action protection",
    "design": "Fictional approvals require POST, anti-forgery validation, authorization, confirmation, reauthentication, and idempotency.",
    "implementation": "Central action service validates token, origin, user, object, workflow, and transaction state.",
    "test": "Approved action creates one result; missing-token, wrong-origin, framed, canceled, GET, and duplicate cases create none.",
    "evidence": "Request logs, application decisions, transaction records, confirmation view, and test report."
  },
  {
    "requirement": "SR-06 Secure production baseline",
    "design": "Fictional hosts, certificates, headers, cookies, services, secrets, runtime, and errors use a version-controlled standard.",
    "implementation": "Deployment templates define approved settings and identities.",
    "test": "Approved workflows pass; HTTP redirects, unapproved framing, debug details, unnecessary services, and drift fail.",
    "evidence": "Baseline, build, deployment, certificate, header, cookie, listener, drift, and validation records."
  }
];

const gateModel = [
  {
    "gate": "Planning gate",
    "required": "Fictional scope, owners, data classification, critical workflows, security requirements, privacy needs, and initial risk statement.",
    "decision": "Proceed only when high-impact requirements and accountable owners are identified.",
    "exception": "A time-limited discovery exception may allow research work but not production data or real users."
  },
  {
    "gate": "Design gate",
    "required": "Fictional architecture, data flow, trust boundaries, threat model, control decisions, logging plan, and recovery design.",
    "decision": "Proceed only when critical risks have approved controls or documented exceptions.",
    "exception": "Unresolved design risk requires an owner, compensating control, decision date, and approval."
  },
  {
    "gate": "Implementation gate",
    "required": "Fictional peer review, secure-coding checklist, dependency review, secret scan, unit tests, and requirement traceability.",
    "decision": "Proceed only when critical code paths use approved patterns and blocking findings are resolved.",
    "exception": "A temporary code exception must be isolated, monitored, tested, and scheduled for removal."
  },
  {
    "gate": "Release gate",
    "required": "Fictional integration tests, negative tests, environment comparison, artifact validation, monitoring readiness, rollback, and owner approval.",
    "decision": "Release only when acceptance criteria pass and residual risk is approved.",
    "exception": "Emergency release requires narrow scope, extra monitoring, rapid follow-up, and documented business approval."
  },
  {
    "gate": "Operational gate",
    "required": "Fictional source health, alert routing, access reviews, certificate and dependency lifecycle, drift monitoring, user support, and incident readiness.",
    "decision": "Keep the service active only while required controls remain healthy and owned.",
    "exception": "A degraded control requires temporary protection, owner, due date, monitoring, and escalation."
  },
  {
    "gate": "Retirement gate",
    "required": "Fictional data disposition, account and secret revocation, integration removal, inventory updates, evidence preservation, and owner sign-off.",
    "decision": "Close only when no unintended service, data, credential, domain, certificate, or dependency remains active.",
    "exception": "Required archival retention must be narrow, access controlled, time limited, and documented."
  }
];

const evidenceMatrix = [
  {
    "source": "Requirement record",
    "supports": "The fictional control statement, scope, owner, priority, acceptance criteria, exception, and review date.",
    "limitation": "A written requirement does not prove implementation or operational effectiveness."
  },
  {
    "source": "Architecture and threat model",
    "supports": "The fictional components, users, data flows, trust boundaries, risks, control decisions, and assumptions.",
    "limitation": "Architecture can become stale or omit implementation and runtime differences."
  },
  {
    "source": "Code and configuration review",
    "supports": "The fictional implementation pattern, control logic, dependency, runtime setting, secret reference, and baseline alignment.",
    "limitation": "Review must be confirmed against the deployed build and actual behavior."
  },
  {
    "source": "Positive test",
    "supports": "The fictional approved workflow works for the correct user, object, data, environment, and business state.",
    "limitation": "A positive test does not prove invalid or unauthorized conditions are denied."
  },
  {
    "source": "Negative or misuse-case test",
    "supports": "The fictional application denies invalid, unauthorized, expired, duplicate, cross-tenant, unsafe, or misconfigured conditions.",
    "limitation": "Test coverage may not include every role, object, browser, integration, or failure path."
  },
  {
    "source": "Deployment and drift record",
    "supports": "The fictional build, environment, secrets, runtime, listeners, flags, configuration, change, and baseline comparison.",
    "limitation": "A documented deployment can still be incorrect or change later."
  },
  {
    "source": "Monitoring and business record",
    "supports": "The fictional control health, alert, user effect, transaction, workflow state, availability, and business outcome.",
    "limitation": "Short monitoring periods and missing sources can leave residual uncertainty."
  },
  {
    "source": "Owner approval and exception",
    "supports": "The fictional accountability, decision, business context, accepted residual risk, expiration, and follow-up.",
    "limitation": "Approval does not make an unsafe condition technically secure or permanent."
  }
];

const investigationTimeline = [
  {
    "time": "Day 1",
    "source": "Planning",
    "event": "A fictional team proposes a student-support portal with teacher and administrator workflows.",
    "meaning": "The application scope and user groups begin to form."
  },
  {
    "time": "Day 2",
    "source": "Data review",
    "event": "The team classifies support summaries and case notes as nonpublic student information.",
    "meaning": "Privacy, authorization, logging, retention, and export requirements become higher priority."
  },
  {
    "time": "Day 3",
    "source": "Requirement",
    "event": "SR-01 requires teachers to view only assigned student records and administrators to use reauthentication for district export.",
    "meaning": "Two high-impact authorization expectations are documented."
  },
  {
    "time": "Day 4",
    "source": "Design",
    "event": "The fictional architecture places browser requests behind a reverse proxy, application API, identity service, and reporting database.",
    "meaning": "Trust boundaries and evidence sources are identified."
  },
  {
    "time": "Day 5",
    "source": "Threat model",
    "event": "The team identifies unassigned-record access, unsafe report input, exposed administrative routes, weak sessions, and overbroad logs as misuse cases.",
    "meaning": "Security requirements are connected to specific failure paths."
  },
  {
    "time": "Day 8",
    "source": "Implementation review",
    "event": "A fictional route checks authentication but does not verify the record assignment relationship.",
    "meaning": "The code does not meet SR-01."
  },
  {
    "time": "Day 9",
    "source": "Negative test",
    "event": "A fictional teacher can request another teacher’s assigned record in the safe test environment.",
    "meaning": "The object-authorization weakness produces an unauthorized result."
  },
  {
    "time": "Day 10",
    "source": "Containment",
    "event": "The affected test feature is blocked from release while the central authorization policy is corrected.",
    "meaning": "The release gate prevents the known weakness from reaching production."
  },
  {
    "time": "Day 11",
    "source": "Remediation",
    "event": "The server resolves tenant, record, assignment, role, and action using trusted data before returning content.",
    "meaning": "The implementation now aligns with the requirement."
  },
  {
    "time": "Day 12",
    "source": "Positive test",
    "event": "A fictional teacher can view an assigned record successfully.",
    "meaning": "Legitimate use remains available."
  },
  {
    "time": "Day 12",
    "source": "Negative test",
    "event": "Unassigned, wrong-tenant, wrong-role, expired-session, and missing-session requests are denied before data access.",
    "meaning": "Several misuse and failure conditions are controlled."
  },
  {
    "time": "Day 13",
    "source": "Release review",
    "event": "The requirement, design, code, tests, logs, deployment baseline, rollback, and owner approvals are linked in the release record.",
    "meaning": "Traceability supports a defensible gate decision."
  },
  {
    "time": "Day 14",
    "source": "Deployment",
    "event": "The fictional build is released through the approved production template.",
    "meaning": "The reviewed implementation and configuration move into operation."
  },
  {
    "time": "Day 21",
    "source": "Monitoring",
    "event": "Assigned access remains normal and no unexplained authorization denials or cross-tenant results appear.",
    "meaning": "Short-term operational evidence supports the control."
  },
  {
    "time": "Day 30",
    "source": "Review",
    "event": "The owner confirms the requirement remains current after a new reporting feature is proposed.",
    "meaning": "Maintenance work triggers requirement and threat-model review."
  }
];

const commonMistakes = [
  "Writing fictional requirements with vague words such as secure, strong, appropriate, or protected without measurable criteria.",
  "Treating a tool scan or checklist as the complete secure-development lifecycle.",
  "Defining requirements without an accountable owner, due date, evidence source, or review date.",
  "Testing only approved workflows and skipping invalid, unauthorized, expired, duplicate, cross-tenant, and failure cases.",
  "Assuming a written requirement proves implementation or a passing test proves production operation.",
  "Allowing emergency or temporary exceptions without narrow scope, expiration, monitoring, and follow-up.",
  "Keeping threat models and architecture diagrams unchanged after features, dependencies, data flows, or environments change.",
  "Treating privacy as a separate document instead of requirements for collection, access, display, logging, retention, export, and deletion.",
  "Passing a release gate while monitoring, alert routing, rollback, or operational ownership is incomplete.",
  "Using one requirement for every application regardless of data, user, exposure, action, and business impact.",
  "Closing a requirement after deployment without validating source health, user workflows, business outcomes, and drift.",
  "Including real code, credentials, logs, users, student data, secrets, or production details in a portfolio artifact."
];

const quizQuestions = [
  {
    "question": "What makes a fictional security requirement strong?",
    "choices": [
      "It is specific, testable, owned, traceable, risk aligned, operational, privacy safe, and maintainable.",
      "It contains the word secure.",
      "It depends on one scanning tool.",
      "It has no acceptance criteria."
    ],
    "answer": 0,
    "explanation": "Strong requirements connect protection goals to measurable evidence and accountable ownership."
  },
  {
    "question": "Why should fictional security work begin during planning and design?",
    "choices": [
      "Early requirements and architecture decisions reduce late redesign and make controls easier to test and own.",
      "Security is only a deployment setting.",
      "Developers cannot change design later.",
      "Planning proves implementation."
    ],
    "answer": 0,
    "explanation": "Security is more effective when built into the application before implementation is fixed."
  },
  {
    "question": "Which acceptance criterion best supports an object-authorization requirement?",
    "choices": [
      "Assigned access succeeds, while unassigned, wrong-tenant, wrong-role, missing-session, and expired-session cases are denied before data is returned.",
      "The page hides the record link.",
      "The user is told not to access other records.",
      "The application has a login page."
    ],
    "answer": 0,
    "explanation": "The criterion verifies both legitimate access and several unauthorized conditions."
  },
  {
    "question": "What does traceability provide?",
    "choices": [
      "A connection from fictional requirement to design, code, configuration, tests, deployment, evidence, monitoring, and closure.",
      "Automatic proof that the control cannot fail.",
      "A replacement for testing.",
      "Permission for every exception."
    ],
    "answer": 0,
    "explanation": "Traceability makes implementation and validation reviewable across the lifecycle."
  },
  {
    "question": "When should a fictional threat model be updated?",
    "choices": [
      "When features, users, data, trust boundaries, dependencies, environments, or business workflows change.",
      "Only after an incident.",
      "Never after initial design.",
      "Only when a password policy changes."
    ],
    "answer": 0,
    "explanation": "Threat models should follow meaningful changes to the system and its context."
  },
  {
    "question": "Which release-gate decision is strongest?",
    "choices": [
      "Release after acceptance criteria, negative tests, environment validation, monitoring, rollback, residual-risk review, and owner approval are complete.",
      "Release because development finished.",
      "Release because one positive test passed.",
      "Release before monitoring exists."
    ],
    "answer": 0,
    "explanation": "A secure release requires technical, operational, business, and governance readiness."
  },
  {
    "question": "Which exception design is strongest?",
    "choices": [
      "Narrow scope, accountable owner, business reason, compensating controls, monitoring, expiration, follow-up, and approval.",
      "Permanent undocumented bypass.",
      "No expiration or owner.",
      "An exception for every environment and user."
    ],
    "answer": 0,
    "explanation": "Exceptions should be controlled decisions rather than hidden permanent weaknesses."
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

function LifecycleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Secure Development Lifecycle
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Planning to Retirement
      </h2>

      <div className="mt-6 grid gap-5">
        {lifecycleStages.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.stage}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.goal}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Security work
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.securityWork}
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

function RequirementCategoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Requirement Writing
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Turn Eight Vague Ideas into Testable Requirements
      </h2>

      <div className="mt-6 grid gap-5">
        {requirementCategories.map((item) => (
          <div
            key={item.category}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.category}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak statement
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weak}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong requirement
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strong}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Acceptance criterion
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.acceptance}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Accountable owner
                </p>

                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.owner}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QualityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Quality Review
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Tests for a Strong Requirement
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {qualityTests.map((item) => (
          <div
            key={item.quality}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.quality}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Weak signal
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakSignal}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Improvement
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.improvement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TraceabilityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Requirement Traceability
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Requirements Connected to Design, Code, Tests, and Evidence
      </h2>

      <div className="mt-6 grid gap-5">
        {traceabilityMatrix.map((item) => (
          <div
            key={item.requirement}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">
              {item.requirement}
            </h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Design
                </p>

                <p className="mt-2 text-sm leading-6 text-cyan-50">
                  {item.design}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Implementation
                </p>

                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.implementation}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Test
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.test}
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

function GateGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Security Gates
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Decision Points with Evidence and Exceptions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {gateModel.map((item) => (
          <div
            key={item.gate}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.gate}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Required evidence
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.required}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Decision
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.decision}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Exception rule
              </p>

              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.exception}
              </p>
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
        What Lifecycle Evidence Can and Cannot Prove
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

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Traceable Requirement Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Authorization Requirement from Planning to Operations
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

export default function SecureDevelopmentLifecycleAndSecurityRequirementsPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.1 Secure Development Lifecycle and Security Requirements
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional teams turn business and privacy needs into
            specific, testable, owned, traceable, operational security
            requirements across planning, design, implementation, review,
            testing, deployment, monitoring, maintenance, and retirement.
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
          lessonTitle="Secure Development Lifecycle and Security Requirements"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional secure coding begins before implementation and continues after deployment.",
            "I will separate written requirements, implemented controls, test results, deployed behavior, and operational evidence.",
            "I will write requirements with exact scope, owners, acceptance criteria, evidence, exceptions, and review dates.",
            "I will use only fictional applications, users, records, code paths, logs, configurations, and organizations.",
            "I will not expose real source code, credentials, secrets, logs, student information, production systems, or private data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Security Requirements Turn Good Intentions into Verifiable Work"
        >
          <p className="leading-8">
            A fictional team may agree that student records should be secure,
            sessions should be protected, and logs should help defenders. Those
            ideas are not enough. A professional requirement identifies the
            exact user, object, action, condition, expected result, evidence,
            owner, test, exception process, monitoring signal, and closure rule.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak requirement
              </p>

              <p className="mt-2 leading-7">
                “The fictional portal must be secure and use strong access
                control.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong requirement
              </p>

              <p className="mt-2 leading-7">
                “Before returning a protected record, the fictional server must
                verify the account, role, tenant, assignment, object, action, and
                session state; approved access must work and unauthorized cases
                must be denied with structured evidence.”
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
          title="Late Security Work Creates Weak Controls and Expensive Exceptions"
        >
          <p className="leading-8">
            If fictional identity, privacy, access, logging, dependency,
            configuration, recovery, and monitoring requirements appear only
            before release, the architecture and schedule may already prevent a
            strong solution. Integrating security early allows teams to choose
            safer patterns, assign ownership, build testability, preserve
            legitimate workflows, and reduce permanent workarounds.
          </p>
        </SectionCard>

        <LifecycleGuide />
        <RequirementCategoryGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Requirement–Control–Evidence Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Need", "Which fictional business, security, privacy, reliability, or legal need must be protected?"],
              ["Requirement", "What exact fictional behavior, constraint, or evidence condition is required?"],
              ["Control", "Which fictional design, code, configuration, process, or owner implements it?"],
              ["Test", "Which fictional positive and negative cases prove expected behavior?"],
              ["Evidence", "Which fictional records show implementation, deployment, operation, and business result?"],
              ["Closure", "Which fictional monitoring, residual-risk, exception, rollback, and approval conditions complete the work?"],
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

        <QualityGuide />
        <TraceabilityGuide />
        <GateGuide />
        <EvidenceGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Secure Development and Requirement Terms
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
          title="Fake Secure Development Requirements Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student-support portal."
          metrics={[
            {
              label: "Security requirements",
              value: "42",
              note: "Fictional identity, access, data, browser, session, logging, secret, dependency, configuration, recovery, and privacy requirements.",
            },
            {
              label: "Traceable requirements",
              value: "37",
              note: "Requirements linked to design, implementation, tests, deployment, monitoring, owners, and closure evidence.",
            },
            {
              label: "Open gaps",
              value: "5",
              note: "Missing negative test, incomplete owner, stale threat model, temporary exception, and operational-monitoring cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Object-Authorization Requirement Fails Negative Testing"
          severity="High"
          time="02:15 PM"
          source="Fake Secure Development Review Console"
          details="A fictional requirement states that teachers may view only assigned student-support records. The reviewed route confirms authentication but does not verify the trusted assignment relationship. A supplied negative test shows that one teacher account can request another teacher’s assigned record in the safe test environment."
          recommendation="Block the feature from release, preserve requirement and test evidence, implement centralized server-side object authorization, add wrong-role, wrong-tenant, unassigned, expired-session, and missing-session tests, validate deployment and logs, monitor, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Requirement Traceability Timeline"
          logs={[
            "DAY1 PLAN application='student-support-portal' users='teacher,admin'",
            "DAY2 DATA_CLASSIFICATION support_notes='nonpublic'",
            "DAY3 REQUIREMENT id='SR-01' teacher_access='assigned_only'",
            "DAY4 DESIGN proxy='defined' identity='defined' api='defined' database='defined'",
            "DAY5 THREAT_MODEL misuse='unassigned_record_access'",
            "DAY8 CODE_REVIEW route_authentication='present' assignment_check='missing'",
            "DAY9 NEGATIVE_TEST teacher_other_record='allowed'",
            "DAY10 RELEASE_GATE result='blocked'",
            "DAY11 REMEDIATE tenant='verified' assignment='verified' object='verified'",
            "DAY12 POSITIVE_TEST assigned_record='pass'",
            "DAY12 NEGATIVE_TEST unassigned='deny' wrong_tenant='deny' expired_session='deny'",
            "DAY13 TRACEABILITY requirement='linked' code='linked' tests='linked' rollback='linked'",
            "DAY14 DEPLOY release='approved_template'",
            "DAY21 MONITOR unexplained_authorization_denials='0' cross_tenant_results='0'",
            "DAY30 CHANGE_REVIEW reporting_feature='threat_model_update_required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Secure Development Conclusion Is Best Supported?"
          evidence={[
            "The fictional SR-01 requirement limits teacher access to assigned records.",
            "The architecture identifies the application API as the trusted authorization boundary.",
            "A code review finds authentication but no assignment check in the route.",
            "A negative test shows one teacher can request another teacher’s assigned record in the safe test environment.",
            "The release gate blocks deployment of the affected feature.",
            "The remediation verifies tenant, assignment, role, object, action, and session state.",
            "Positive assigned-access testing passes.",
            "Unassigned, wrong-tenant, wrong-role, expired-session, and missing-session cases are denied after remediation.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional requirement was valid, the original implementation failed object authorization, the release gate prevented production exposure, and the remediated control passed the reviewed positive and negative tests.",
            "The entire production environment was compromised.",
            "The written requirement alone proves the control always worked.",
            "Authentication made the missing object check unnecessary.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a confirmed test-environment authorization weakness, successful release prevention, narrow remediation, and validation without supporting a production-compromise claim."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Security Requirements"
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
          title="Build a Fictional Secure Development Requirements Package"
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
                Review forty supplied fictional records covering planning,
                owners, users, data, architecture, threat modeling, requirements,
                code review, configuration, tests, deployment, monitoring,
                exceptions, change, retirement, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define fictional business, security, privacy, reliability, and recovery needs.</li>
                <li>Write eight requirements with exact scope, owners, acceptance criteria, evidence, and review dates.</li>
                <li>Create misuse cases and connect each requirement to architecture and threat-model decisions.</li>
                <li>Link each requirement to implementation, positive tests, negative tests, deployment, and monitoring.</li>
                <li>Design planning, design, implementation, release, operational, and retirement gates.</li>
                <li>Document exceptions, compensating controls, residual risk, rollback, lessons learned, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not inspect or publish real
            source code, credentials, secrets, logs, student records, production
            settings, applications, repositories, or private organizational data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Requirement Is Too Vague to Test"
          scenario="A fictional project requirement says, “The portal must use strong access control,” but it does not identify roles, objects, tenants, actions, sessions, owners, or evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Rewrite the requirement with exact protected resources, trusted server checks, roles, relationships, actions, session conditions, positive and negative tests, evidence fields, owners, and review dates.",
              outcome:
                "Best defensive choice. The requirement becomes specific, testable, traceable, and owned.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the statement because the word strong gives developers flexibility.",
              outcome:
                "Weak. The team cannot prove consistent implementation or acceptance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Replace the requirement with a note telling users not to access other records.",
              outcome:
                "Unsafe. User instructions do not replace server-side authorization.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Release Has One Temporary Security Exception"
          scenario="A fictional reporting feature meets most requirements, but one low-impact legacy export path cannot use the new monitoring format before the deadline."
          choices={[
            {
              label: "Choice A",
              response:
                "Document exact scope and business need, assess risk, add temporary compensating monitoring, assign an owner and due date, limit users and data, test the exception, define rollback and expiration, and obtain approval.",
              outcome:
                "Best defensive choice. The exception remains narrow, temporary, visible, and controlled.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Release the exception without documentation because the deadline is close.",
              outcome:
                "Unsafe. Hidden exceptions often become permanent blind spots.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every reporting feature.",
              outcome:
                "Overbroad. Response should match the specific low-impact gap and evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Secure Development Lifecycle and Requirements Checklist"
          items={[
            "I define fictional business, security, privacy, reliability, recovery, and retirement needs before implementation.",
            "I write requirements that are specific, testable, owned, traceable, risk aligned, operational, privacy safe, and maintainable.",
            "I connect requirements to architecture, trust boundaries, threat models, misuse cases, and control decisions.",
            "I link each requirement to code or configuration, positive tests, negative tests, deployment evidence, monitoring, and closure.",
            "I include identity, authorization, input, output, sessions, errors, logs, secrets, dependencies, configuration, recovery, and data handling.",
            "I use security gates with clear evidence and decision criteria.",
            "I document exceptions with narrow scope, owner, reason, compensating controls, monitoring, expiration, and follow-up.",
            "I update requirements and threat models when features, users, data, dependencies, environments, or workflows change.",
            "I include operations, maintenance, retirement, residual risk, rollback, evidence gaps, and owner approval.",
            "I use only fictional evidence and never expose real code, secrets, logs, users, systems, or private data.",
          ]}
        />

        <MiniQuiz
          title="I9.1 Mini Quiz: Secure Development Lifecycle and Security Requirements"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Development Requirements Package using at least forty planning, architecture, threat-model, requirement, owner, code-review, configuration, test, deployment, monitoring, exception, maintenance, retirement, and closure records. Include eight requirements, acceptance criteria, misuse cases, traceability links, gate decisions, owners, positive tests, negative tests, evidence gaps, exceptions, residual risk, rollback, and closure criteria."
          tips={[
            "Use only fictional applications, users, records, code paths, tests, environments, owners, and organizations.",
            "Give every requirement a unique ID, exact scope, accountable owner, testable acceptance criteria, and review date.",
            "Keep written requirement, implemented control, test result, deployed behavior, monitoring evidence, and business outcome separate.",
            "Do not include real source code, credentials, secrets, logs, student data, production configurations, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Secure coding begins with clear, testable, owned requirements before implementation.",
            "Requirements become defensible when they are connected to architecture, threat models, code, configuration, tests, deployment, monitoring, and closure.",
            "Positive tests prove legitimate workflows, while negative and misuse-case tests prove unsafe or unauthorized conditions are denied.",
            "Security gates prevent known weaknesses from moving forward without evidence, ownership, or controlled exceptions.",
            "Operations, maintenance, retirement, privacy, monitoring, residual risk, and rollback are part of the lifecycle.",
            "A written requirement does not prove a control works; implementation, validation, deployment, and operational evidence complete the chain.",
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