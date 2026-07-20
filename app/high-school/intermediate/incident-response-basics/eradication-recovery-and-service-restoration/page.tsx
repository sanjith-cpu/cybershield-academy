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
const modulePath = `${trackPath}/incident-response-basics`;
const previousLesson = `${modulePath}/evidence-preservation-and-timeline-building`;
const nextLesson = `${modulePath}/communication-escalation-and-documentation`;

const objectives = [
  "Explain how fictional incident teams move from containment to eradication, staged recovery, service restoration, observation, and phase exit.",
  "Identify and correct fictional root causes across code, configuration, identity, data, dependencies, deployment, recovery assets, monitoring, and business workflows.",
  "Design fictional positive, negative, compatibility, source-health, rollback, continuity, and business-validation tests before restoring service.",
  "Use fictional recovery gates, approved artifacts, named owners, staged rollout, monitoring, rollback, and observation to reduce recurrence and disruption.",
  "Create a professional fictional Eradication, Recovery, and Service Restoration Package using only supplied records and safe defensive methods."
];
const vocabulary = [
  [
    "Eradication",
    "The fictional process of removing or correcting validated root causes, unsafe conditions, unauthorized access, vulnerable configurations, and affected artifacts."
  ],
  [
    "Recovery",
    "The fictional controlled return of assets, identities, data, services, and workflows to approved operation after eradication and validation."
  ],
  [
    "Service restoration",
    "The fictional staged reactivation of legitimate business capability with approved artifacts, configuration, identity, monitoring, continuity, and owner acceptance."
  ],
  [
    "Recovery gate",
    "A fictional checkpoint requiring technical, operational, business, evidence, monitoring, rollback, and owner conditions before the next restoration stage."
  ],
  [
    "Known-good state",
    "A fictional approved and verified artifact, image, configuration, identity, data set, backup, or service condition used as a recovery reference."
  ],
  [
    "Positive test",
    "A fictional test proving an approved user, role, file, transaction, route, and workflow still function after correction."
  ],
  [
    "Negative test",
    "A fictional test proving unauthorized, unsupported, excessive, revoked, old-version, wrong-scope, or prohibited behavior is denied."
  ],
  [
    "Regression test",
    "A fictional repeatable test that protects the corrected requirement from returning in later code, configuration, identity, deployment, or recovery changes."
  ],
  [
    "Observation window",
    "A fictional period after restoration during which source health, controls, user outcomes, performance, errors, and recurrence indicators are reviewed."
  ],
  [
    "Rollback",
    "A fictional tested and approved method for returning to the last safe state when recovery validation or business outcomes fail."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after eradication and recovery, including accepted exposure, uncertainty, dependencies, exceptions, and monitoring needs."
  ],
  [
    "Reopen trigger",
    "A fictional event requiring the case or recovery phase to be reviewed again, such as failed tests, old artifacts, source-health loss, or repeated indicators."
  ]
];
const eradicationDomains = [
  {
    "title": "Code and package correction",
    "summary": "Update fictional source, libraries, dependencies, build inputs, validation logic, and secure defaults connected to the confirmed root cause.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to code and package correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support code and package correction."
      ],
      [
        "Avoid",
        "Do not declare code and package correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Image and artifact correction",
    "summary": "Replace fictional unsupported images, mutable tags, unapproved artifacts, stale recovery packages, and unverifiable build outputs.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to image and artifact correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support image and artifact correction."
      ],
      [
        "Avoid",
        "Do not declare image and artifact correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Identity and permission correction",
    "summary": "Replace fictional shared identities, excessive roles, stale tokens, broad permissions, missing revocation, and weak authorization.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to identity and permission correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support identity and permission correction."
      ],
      [
        "Avoid",
        "Do not declare identity and permission correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Configuration correction",
    "summary": "Narrow fictional storage prefixes, routes, features, debug settings, allowlists, queue rules, integrations, and environment values.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to configuration correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support configuration correction."
      ],
      [
        "Avoid",
        "Do not declare configuration correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Data and file correction",
    "summary": "Review fictional affected files, caches, exports, temporary copies, queues, retention, backups, and cleanup requirements.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to data and file correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support data and file correction."
      ],
      [
        "Avoid",
        "Do not declare data and file correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Deployment and runtime correction",
    "summary": "Ensure fictional source, artifact, image, configuration, identity, runtime, and recovery assets match the approved secure state.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to deployment and runtime correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support deployment and runtime correction."
      ],
      [
        "Avoid",
        "Do not declare deployment and runtime correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Monitoring and evidence correction",
    "summary": "Repair fictional missing events, delayed sources, parser errors, weak alerts, retention gaps, and source-health detection.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to monitoring and evidence correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support monitoring and evidence correction."
      ],
      [
        "Avoid",
        "Do not declare monitoring and evidence correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  },
  {
    "title": "Process and workflow correction",
    "summary": "Update fictional approvals, business controls, support procedures, fallback, maintenance, recovery, and ownership that contributed to the event.",
    "details": [
      [
        "Root-cause work",
        "Identify the fictional code, package, image, configuration, identity, permission, data, workflow, deployment, recovery, or monitoring condition connected to process and workflow correction."
      ],
      [
        "Required evidence",
        "Use the fictional validation record, scope map, timeline, build and deployment evidence, owner review, dependency map, and business requirement to support process and workflow correction."
      ],
      [
        "Avoid",
        "Do not declare process and workflow correction complete when only one symptom, one environment, one identity, or one source record has changed."
      ]
    ]
  }
];
const recoveryGates = [
  {
    "title": "Gate 1: Root cause addressed",
    "summary": "Every fictional validated root cause maps to a completed technical, process, identity, data, recovery, or monitoring correction.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 1: root cause addressed is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 1: root cause addressed."
      ],
      [
        "Block when",
        "Block gate 1: root cause addressed when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 2: Approved recovery artifact",
    "summary": "The fictional build, artifact, image, configuration, dependency set, identity, and data reference are approved and traceable.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 2: approved recovery artifact is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 2: approved recovery artifact."
      ],
      [
        "Block when",
        "Block gate 2: approved recovery artifact when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 3: Test package passed",
    "summary": "The fictional positive, negative, regression, compatibility, recovery, source-health, and rollback tests meet expectations.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 3: test package passed is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 3: test package passed."
      ],
      [
        "Block when",
        "Block gate 3: test package passed when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 4: Dependencies ready",
    "summary": "The fictional identity, storage, queues, APIs, vendors, monitoring, support, fallback, and recovery dependencies are available.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 4: dependencies ready is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 4: dependencies ready."
      ],
      [
        "Block when",
        "Block gate 4: dependencies ready when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 5: Staged rollout approved",
    "summary": "The fictional sequence, limited scope, health checks, monitoring, communication, rollback, and decision rights are documented.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 5: staged rollout approved is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 5: staged rollout approved."
      ],
      [
        "Block when",
        "Block gate 5: staged rollout approved when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 6: Business validation passed",
    "summary": "The fictional approved workflow, service quality, data handling, fallback, support readiness, and user outcome are confirmed.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 6: business validation passed is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 6: business validation passed."
      ],
      [
        "Block when",
        "Block gate 6: business validation passed when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 7: Observation stable",
    "summary": "The fictional control, service, source-health, error, performance, identity, file, transaction, and recurrence indicators remain within thresholds.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 7: observation stable is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 7: observation stable."
      ],
      [
        "Block when",
        "Block gate 7: observation stable when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  },
  {
    "title": "Gate 8: Phase exit approved",
    "summary": "The fictional incident, technical, operations, business, security, risk, support, and governance owners approve the recovery evidence.",
    "details": [
      [
        "Entry condition",
        "Require current fictional evidence showing that gate 8: phase exit approved is ready for technical, operations, security, business, and incident-owner review."
      ],
      [
        "Validation",
        "Test the approved artifact, configuration, identity, data, service behavior, source health, business outcome, monitoring, rollback, and recovery dependencies connected to gate 8: phase exit approved."
      ],
      [
        "Block when",
        "Block gate 8: phase exit approved when evidence is incomplete, source health is unreliable, rollback is untested, owners are missing, or approved and denied behavior has not been verified."
      ]
    ]
  }
];
const testTypes = [
  {
    "title": "Exact original-condition retest",
    "summary": "Repeat the fictional condition that originally demonstrated the weakness using the corrected expectation and approved scope.",
    "details": [
      [
        "Test purpose",
        "Use the fictional exact original-condition retest to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for exact original-condition retest."
      ],
      [
        "Failure response",
        "When exact original-condition retest fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Approved-workflow positive test",
    "summary": "Confirm fictional authorized users, roles, files, transactions, routes, and business processes still function correctly.",
    "details": [
      [
        "Test purpose",
        "Use the fictional approved-workflow positive test to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for approved-workflow positive test."
      ],
      [
        "Failure response",
        "When approved-workflow positive test fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Unauthorized-workflow negative test",
    "summary": "Confirm fictional wrong-role, wrong-tenant, excessive, unsupported, revoked, old-version, and prohibited behavior is denied.",
    "details": [
      [
        "Test purpose",
        "Use the fictional unauthorized-workflow negative test to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for unauthorized-workflow negative test."
      ],
      [
        "Failure response",
        "When unauthorized-workflow negative test fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Compatibility and dependency test",
    "summary": "Confirm fictional clients, services, queues, identities, integrations, vendors, reports, and recovery assets remain compatible.",
    "details": [
      [
        "Test purpose",
        "Use the fictional compatibility and dependency test to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for compatibility and dependency test."
      ],
      [
        "Failure response",
        "When compatibility and dependency test fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Build and artifact verification",
    "summary": "Confirm fictional source, dependency lock, build runner, artifact digest, image, configuration, identity, and approval match.",
    "details": [
      [
        "Test purpose",
        "Use the fictional build and artifact verification to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for build and artifact verification."
      ],
      [
        "Failure response",
        "When build and artifact verification fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Source-health and monitoring test",
    "summary": "Confirm fictional expected events arrive, missing-event alerts work, parsers are correct, and delays remain within limits.",
    "details": [
      [
        "Test purpose",
        "Use the fictional source-health and monitoring test to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for source-health and monitoring test."
      ],
      [
        "Failure response",
        "When source-health and monitoring test fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Business and continuity validation",
    "summary": "Confirm fictional critical workflows, user outcomes, fallback, support readiness, communication, and service thresholds are acceptable.",
    "details": [
      [
        "Test purpose",
        "Use the fictional business and continuity validation to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for business and continuity validation."
      ],
      [
        "Failure response",
        "When business and continuity validation fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  },
  {
    "title": "Rollback and recovery test",
    "summary": "Confirm fictional rollback, restore, backup, configuration recovery, identity recovery, service order, and approval work as designed.",
    "details": [
      [
        "Test purpose",
        "Use the fictional rollback and recovery test to prove a specific technical, security, operational, business, monitoring, or recovery requirement."
      ],
      [
        "Evidence to record",
        "Document precondition, input, expected result, actual result, artifact, environment, identity, owner, timestamp, source health, limitation, and follow-up for rollback and recovery test."
      ],
      [
        "Failure response",
        "When rollback and recovery test fails, stop or limit restoration, preserve evidence, assign an owner, correct the cause, retest, and reassess scope and residual risk."
      ]
    ]
  }
];
const restorationStages = [
  {
    "title": "Stage 1: Isolated validation",
    "summary": "Validate the fictional corrected artifact, configuration, identity, data, and monitoring in an isolated approved environment.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 1: isolated validation capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 1: isolated validation."
      ],
      [
        "Exit criteria",
        "Complete stage 1: isolated validation only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 2: Limited production canary",
    "summary": "Restore the fictional service to one controlled instance, user group, workflow, route, or transaction class.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 2: limited production canary capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 2: limited production canary."
      ],
      [
        "Exit criteria",
        "Complete stage 2: limited production canary only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 3: Expanded technical rollout",
    "summary": "Increase fictional service scope after health, security, source-health, performance, and rollback gates pass.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 3: expanded technical rollout capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 3: expanded technical rollout."
      ],
      [
        "Exit criteria",
        "Complete stage 3: expanded technical rollout only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 4: Business workflow restoration",
    "summary": "Return fictional approved teacher, support, reporting, file, communication, or administrative workflows in priority order.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 4: business workflow restoration capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 4: business workflow restoration."
      ],
      [
        "Exit criteria",
        "Complete stage 4: business workflow restoration only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 5: Recovery-environment alignment",
    "summary": "Update and verify fictional recovery images, identities, configuration, data references, monitoring, and restore procedures.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 5: recovery-environment alignment capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 5: recovery-environment alignment."
      ],
      [
        "Exit criteria",
        "Complete stage 5: recovery-environment alignment only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 6: Full service restoration",
    "summary": "Return the fictional approved production scope after technical and business validation across intended dependencies.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 6: full service restoration capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 6: full service restoration."
      ],
      [
        "Exit criteria",
        "Complete stage 6: full service restoration only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 7: Observation and support",
    "summary": "Maintain fictional enhanced monitoring, support readiness, user feedback, performance review, error review, and recurrence detection.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 7: observation and support capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 7: observation and support."
      ],
      [
        "Exit criteria",
        "Complete stage 7: observation and support only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  },
  {
    "title": "Stage 8: Recovery phase exit",
    "summary": "Complete fictional documentation, residual-risk review, action handoff, regression ownership, metrics, and owner approvals.",
    "details": [
      [
        "Restoration goal",
        "Return the fictional stage 8: recovery phase exit capability in a controlled sequence while preserving continuity, monitoring, evidence, and rollback."
      ],
      [
        "Required owners",
        "Assign fictional application, platform, identity, data, operations, business, support, security, and incident owners as relevant to stage 8: recovery phase exit."
      ],
      [
        "Exit criteria",
        "Complete stage 8: recovery phase exit only after approved and denied tests, source health, business validation, observation, documentation, and owner approval are satisfied."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "13:00",
    "source": "Phase handoff",
    "event": "A fictional configuration and identity weakness is contained; production preview is paused while manual fallback supports urgent cases.",
    "meaning": "The team can plan permanent correction without losing continuity."
  },
  {
    "time": "13:20",
    "source": "Root-cause review",
    "event": "The case confirms a broad storage prefix, shared identity, unsupported image, mutable artifact tag, and delayed application source.",
    "meaning": "Eradication must address connected causes rather than one symptom."
  },
  {
    "time": "14:00",
    "source": "Remediation plan",
    "event": "The team approves a narrow prefix, named identity, supported image, pinned artifact, source-health repair, and recovery update.",
    "meaning": "Every validated cause receives an owner and action."
  },
  {
    "time": "Day 2 09:00",
    "source": "Build record",
    "event": "Approved fictional source, dependency lock, build runner, artifact digest, image, configuration, and identity policy are recorded.",
    "meaning": "The candidate recovery state is traceable."
  },
  {
    "time": "Day 2 10:00",
    "source": "Isolated tests",
    "event": "Exact retest, approved preview, denied unrelated storage, denied old identity, source-health, compatibility, and rollback tests pass.",
    "meaning": "The corrected design meets technical and security expectations."
  },
  {
    "time": "Day 2 11:00",
    "source": "Canary rollout",
    "event": "One fictional production worker receives the approved artifact and named identity with enhanced monitoring.",
    "meaning": "Restoration begins with limited scope."
  },
  {
    "time": "Day 2 11:30",
    "source": "Business validation",
    "event": "One approved teacher preview succeeds, unrelated support workflows remain available, and support reports no new issue.",
    "meaning": "The canary meets business and operational expectations."
  },
  {
    "time": "Day 2 12:00",
    "source": "Expanded rollout",
    "event": "All fictional production preview workers match the approved artifact, image, configuration, and identity.",
    "meaning": "Production restoration advances after gate approval."
  },
  {
    "time": "Day 2 13:00",
    "source": "Recovery alignment",
    "event": "The primary recovery image and restore procedure are updated and tested with the same approved state.",
    "meaning": "Recovery no longer reintroduces the weakness."
  },
  {
    "time": "Day 2 14:00",
    "source": "Observation",
    "event": "Approved previews pass; unrelated storage, old identity, old image, mutable artifact, and debug output remain absent or denied.",
    "meaning": "Positive and negative evidence support restoration."
  },
  {
    "time": "Day 3",
    "source": "Source health",
    "event": "Application events arrive within threshold, missing-event tests pass, and dashboards reproduce the underlying records.",
    "meaning": "Monitoring evidence is trustworthy."
  },
  {
    "time": "Day 7",
    "source": "Business review",
    "event": "Preview success, support volume, service latency, file outcomes, and user feedback remain within approved limits.",
    "meaning": "The restored service remains stable."
  },
  {
    "time": "Day 14",
    "source": "Phase exit",
    "event": "Owners approve recovery evidence, low residual risk, regression ownership, reopen triggers, and post-incident handoff.",
    "meaning": "The fictional case can leave active recovery."
  }
];
const commonMistakes = [
  "Treating fictional containment as permanent eradication or final recovery.",
  "Correcting one symptom while leaving old identities, permissions, images, configurations, recovery assets, monitoring gaps, or process causes unchanged.",
  "Declaring eradication complete because a code change merged or a ticket closed without approved build, artifact, deployment, and runtime proof.",
  "Testing only the approved workflow and skipping unauthorized, unsupported, excessive, revoked, old-version, wrong-scope, and failure cases.",
  "Restoring all fictional production scope at once without isolated validation, canary rollout, monitoring, business validation, and rollback.",
  "Ignoring recovery images, backups, test environments, background workers, vendors, support processes, and evidence sources.",
  "Using quiet dashboards as proof of recovery without source-health testing.",
  "Allowing a business fallback to remain indefinitely without owner review, expiry, support readiness, and return-to-service criteria.",
  "Performing rollback with an unknown, unsupported, or previously affected artifact or configuration.",
  "Ending observation after a few successful transactions without thresholds, a time window, recurrence indicators, and owner approval.",
  "Writing residual risk as zero forever instead of documenting remaining exposure, uncertainty, dependencies, monitoring, and reopen triggers.",
  "Publishing real artifacts, versions, identities, routes, tests, logs, owners, recovery procedures, or private incident records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What distinguishes fictional eradication from containment?",
    "choices": [
      "Eradication corrects validated root causes, while containment temporarily reduces immediate risk.",
      "They are identical.",
      "Containment always closes the case.",
      "Eradication requires no testing."
    ],
    "answer": 0,
    "explanation": "Containment protects temporarily; eradication removes or corrects the underlying condition."
  },
  {
    "question": "What is required before fictional service restoration begins?",
    "choices": [
      "Approved root-cause correction, artifact and runtime plan, tests, dependencies, monitoring, business review, rollback, owners, and recovery gates.",
      "A quiet dashboard.",
      "A merged code change.",
      "A completed support ticket."
    ],
    "answer": 0,
    "explanation": "Restoration should begin from a verified and controlled recovery package."
  },
  {
    "question": "Why are negative tests essential during recovery?",
    "choices": [
      "They prove unauthorized, unsupported, excessive, revoked, old-version, and wrong-scope behavior remains denied.",
      "They replace positive tests.",
      "They prove zero risk.",
      "They are only needed after closure."
    ],
    "answer": 0,
    "explanation": "A restored service must support legitimate use without reintroducing the unsafe condition."
  },
  {
    "question": "What is the strongest restoration sequence?",
    "choices": [
      "Isolated validation, limited canary, expanded rollout, business restoration, recovery alignment, full service, observation, and phase exit.",
      "Restore everything at once.",
      "Restore recovery before testing production.",
      "Skip observation when tests pass."
    ],
    "answer": 0,
    "explanation": "Staging limits disruption and creates evidence at each gate."
  },
  {
    "question": "Why must source health be validated during recovery?",
    "choices": [
      "The team cannot rely on quiet monitoring when evidence delivery is delayed, incomplete, or misparsed.",
      "Healthy sources prove no incident occurred.",
      "Source health replaces business validation.",
      "Only governance needs source health."
    ],
    "answer": 0,
    "explanation": "Monitoring supports recovery only when the underlying evidence is trustworthy."
  },
  {
    "question": "When should a fictional recovery phase reopen?",
    "choices": [
      "When regression fails, old artifacts return, source health is lost, recurrence indicators appear, or business validation changes.",
      "Never.",
      "Only after public impact.",
      "Only when severity becomes critical."
    ],
    "answer": 0,
    "explanation": "Material evidence changes can invalidate the recovery decision."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional artifacts, versions, identities, tests, logs, routes, owners, recovery stages, and organizations.",
      "Publish real recovery runbooks.",
      "Include internal artifact digests and routes.",
      "Reuse private deployment screenshots."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate recovery skill without exposing real systems or response details."
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
        Recovery Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Case from Containment to Recovery Phase Exit
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

export default function EradicationRecoveryAndServiceRestorationPage() {
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
              Module I11
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.5 Eradication, Recovery, and Service Restoration
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams correct every validated root
            cause, build a known-good recovery package, test approved and denied
            behavior, restore service in stages, validate business outcomes,
            monitor for recurrence, preserve rollback, document residual risk,
            and leave recovery only when evidence and owners agree.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I11: Incident Response Basics"
          lessonTitle="Eradication, Recovery, and Service Restoration"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional containment reduces immediate risk but does not automatically remove the root cause or complete recovery.",
            "I will map every validated root cause to a correction, owner, test, deployment, monitoring, and closure requirement.",
            "I will verify approved and denied behavior, source health, business outcomes, recovery assets, observation, and rollback before phase exit.",
            "I will restore fictional services in stages rather than returning every environment and workflow at once.",
            "I will use only supplied fictional artifacts, identities, configurations, tests, logs, systems, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Fast Restoration Can Reintroduce the Exact Condition the Team Contained"
        >
          <p className="leading-8">
            A fictional preview service is contained after a broad storage
            prefix and shared identity are confirmed. The source code is fixed,
            but the recovery image still contains the old configuration, the
            artifact tag is mutable, the old identity remains active, and the
            application log source is delayed. Restoring from that state would
            create the appearance of recovery while preserving root causes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak recovery</p>
              <p className="mt-2 leading-7">Merge the code change, restart every worker, remove containment, watch one dashboard, and close when the service appears normal.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong recovery</p>
              <p className="mt-2 leading-7">Correct all root causes, verify artifact and runtime, test approved and denied behavior, restore in stages, validate business outcomes and source health, observe, and preserve rollback and reopen triggers.</p>
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
          title="Recovery Must Restore Trust, Not Only Availability"
        >
          <p className="leading-8">
            Fictional services may become available before the corrected
            security, identity, data, monitoring, continuity, and recovery state
            is proven. A professional recovery process connects root-cause
            correction to traceable artifacts, deployed runtime, positive and
            negative testing, business validation, observation, rollback,
            residual risk, and owner approval.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Eradication"
          title="Eight Root-Cause Domains to Correct"
          items={eradicationDomains}
        />

        <DetailSection
          eyebrow="Recovery Gates"
          title="Eight Conditions before Phase Exit"
          items={recoveryGates}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Cause–Correction–Test–Deployment–Observation–Approval Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Cause", "Which fictional code, package, image, identity, permission, configuration, data, workflow, recovery, or monitoring condition is validated?"],
              ["Correction", "Which fictional approved source, artifact, image, configuration, identity, cleanup, process, and owner address every cause?"],
              ["Test", "Which fictional exact retest, positive, negative, compatibility, source-health, business, recovery, and rollback results are required?"],
              ["Deployment", "Which fictional limited scope, sequence, health gate, communication, monitoring, and rollback govern restoration?"],
              ["Observation", "Which fictional security, service, evidence, business, data, identity, recovery, and recurrence indicators must remain stable?"],
              ["Approval", "Which fictional technical, operations, business, security, incident, risk, support, and governance owners approve phase exit?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DetailSection
          eyebrow="Test Strategy"
          title="Eight Test Types for Recovery Confidence"
          items={testTypes}
        />

        <DetailSection
          eyebrow="Restoration"
          title="Eight Stages from Isolation to Phase Exit"
          items={restorationStages}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eradication, Recovery, and Service Restoration Terms
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
          title="Fake Recovery and Service Restoration Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            { label: "Root causes corrected", value: "7 of 7", note: "Fictional package, image, artifact, identity, configuration, monitoring, and recovery causes mapped to evidence and owners." },
            { label: "Recovery gates passed", value: "7 of 8", note: "The fictional case remains in observation before final recovery phase exit." },
            { label: "Negative tests passing", value: "18 of 18", note: "Fictional unauthorized, unsupported, excessive, revoked, old-version, and wrong-scope behaviors are denied." },
          ]}
        />

        <FakeAlertCard
          title="Recovery Image Still Uses Old Identity and Mutable Artifact"
          severity="High"
          time="Day 2 8:35 AM"
          source="Fake Recovery Readiness Console"
          details="The fictional production candidate uses the corrected package and storage prefix, but the recovery image still references the shared identity and mutable artifact tag. The application source has not passed its missing-event test."
          recommendation="Block recovery phase exit; preserve containment and continuity; update and verify the recovery image; replace the shared identity; pin the artifact; repair and retest source health; run exact, positive, negative, compatibility, business, restore, and rollback tests; use a limited rollout; observe thresholds; document residual risk and reopen triggers; and require owner approval."
        />

        <FakeLogPanel
          title="Fake Recovery Evidence Timeline"
          logs={[
            "13:00 HANDOFF containment='active' fallback='manual'",
            "13:20 ROOT_CAUSE prefix='broad' identity='shared' image='unsupported' artifact='mutable'",
            "14:00 PLAN prefix='narrow' identity='named' image='supported' artifact='pinned'",
            "D2 09:00 BUILD source='approved' dependencies='locked' digest='verified'",
            "D2 10:00 TEST exact='pass' positive='pass' negative='pass' rollback='pass'",
            "D2 11:00 CANARY workers='1' monitoring='enhanced'",
            "D2 11:30 BUSINESS preview='pass' unrelated_support='available'",
            "D2 12:00 DEPLOY production='aligned'",
            "D2 13:00 RECOVERY image='aligned' restore='pass'",
            "D2 14:00 OBSERVE old_identity='deny' old_image='absent' debug='absent'",
            "D3 SOURCE_HEALTH delay='within_threshold' missing_event='pass'",
            "D7 BUSINESS latency='normal' support_volume='normal' file_outcomes='approved'",
            "D14 EXIT residual_risk='low' owners='approved' reopen_triggers='documented'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Recovery Conclusion Is Best Supported?"
          evidence={[
            "The fictional root-cause review identifies a broad storage prefix, shared identity, unsupported image, mutable artifact, delayed source, and outdated recovery asset.",
            "The approved build uses a supported image, pinned artifact, named least-privileged identity, narrow storage prefix, and repaired source-health checks.",
            "Exact retest, approved preview, denied unrelated storage, denied old identity, compatibility, business, restore, and rollback tests pass.",
            "Production and recovery runtimes match the approved artifact, image, configuration, and identity.",
            "Application events arrive within threshold and missing-event tests pass.",
            "Approved previews and business service levels remain stable through observation.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional root causes are corrected and verified across production and recovery; service restoration is supported after staged rollout, source-health validation, business acceptance, observation, residual-risk review, and owner approval.",
            "The case was fixed when the code merged.",
            "A quiet dashboard alone proves permanent recovery.",
            "Recovery should exclude the recovery environment because production works.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports recovery because the complete correction, deployment, testing, monitoring, business, recovery, and owner chain is present."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Eradication and Recovery"
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
          title="Build a Fictional Eradication and Recovery Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Fictional Evidence Set</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Recovery Review</h3>
              <p className="mt-3 leading-7 text-slate-300">Review sixty-two supplied fictional records covering root causes, source changes, dependencies, builds, artifacts, images, identities, configuration, data and files, deployments, runtimes, recovery assets, tests, source health, business outcomes, support, monitoring, rollback, observation, residual risk, and owner decisions.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required Deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create the fictional root-cause-to-correction matrix.</li>
                <li>Build the approved source, artifact, image, identity, configuration, and recovery record.</li>
                <li>Design exact, positive, negative, compatibility, source-health, business, restore, and rollback tests.</li>
                <li>Create the staged restoration plan, recovery gates, monitoring, and owner matrix.</li>
                <li>Complete observation, residual risk, reopen triggers, and phase-exit records.</li>
                <li>Produce a portfolio-safe executive recovery summary.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Use only supplied fictional evidence. Do not access, deploy, restore, alter, test, identify, contact, or publish real systems, artifacts, identities, files, routes, logs, backups, credentials, owners, or private organizational information.</div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Canary Works but Monitoring Is Unhealthy"
          scenario="A fictional limited production canary passes its user test, but the application source is delayed and the missing-event alert has not been validated."
          choices={[
            { label: "Choice A", response: "Hold expansion, repair and test source health, use alternate evidence, keep the canary limited, document confidence, and continue only after monitoring and business gates pass.", outcome: "Best defensive choice. A successful user test does not replace trustworthy monitoring.", tone: "best" },
            { label: "Choice B", response: "Expand immediately because the preview succeeded.", outcome: "Risky. The team cannot reliably observe recurrence or control failure.", tone: "risk" },
            { label: "Choice C", response: "Roll back automatically without reviewing alternate evidence.", outcome: "Incomplete. A monitoring gap requires proportionate review rather than an automatic conclusion.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="Two Sources Disagree by Seven Minutes"
          scenario="A fictional identity service and application record describe the same job but differ by seven minutes, and the application source was delayed during collection."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both original times, document clock and ingestion context, use a supported time range or sequence, correlate identifiers and outcomes, and revise when stronger evidence appears.",
              outcome:
                "Best defensive choice. Precision remains matched to the evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Average the two times and present the result as exact.",
              outcome:
                "Unsupported. Averaging hides the cause and uncertainty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Discard the later source automatically.",
              outcome:
                "Weak. Delay does not make the source useless; it must be evaluated and documented.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Eradication, Recovery, and Service Restoration Checklist"
          items={[
            "I map every fictional validated root cause to a correction, owner, test, deployment, monitoring, recovery, and closure requirement.",
            "I correct code, package, image, artifact, identity, permission, configuration, data, deployment, recovery, monitoring, and process causes where relevant.",
            "I verify approved source, dependencies, build runner, artifact digest, image, configuration, identity, deployment, runtime, and recovery alignment.",
            "I run exact retest, positive, negative, compatibility, build, source-health, business, recovery, and rollback tests.",
            "I restore through isolated validation, limited canary, expanded rollout, business restoration, recovery alignment, full service, observation, and phase exit.",
            "I preserve continuity, support readiness, communication, evidence, monitoring, rollback, and owner decision rights throughout recovery.",
            "I observe controls, service health, evidence sources, business outcomes, data and files, identities, recovery readiness, and recurrence indicators.",
            "I document residual risk, uncertainty, dependencies, exceptions, owners, monitoring, review dates, and reopen triggers.",
            "I leave recovery only after accountable technical, operations, business, security, incident, support, risk, and governance approval.",
            "I use only fictional information and never expose real artifacts, versions, identities, routes, tests, logs, recovery plans, owners, or private incident records.",
          ]}
        />

        <MiniQuiz
          title="I11.5 Mini Quiz: Eradication, Recovery, and Service Restoration"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Eradication, Recovery, and Service Restoration Package using at least sixty-two root-cause, source, dependency, build, artifact, image, identity, configuration, data, file, deployment, runtime, recovery, test, source-health, business, support, monitoring, rollback, observation, residual-risk, and owner records. Include a root-cause matrix, approved recovery baseline, test package, staged restoration plan, recovery gates, observation dashboard, rollback record, residual-risk statement, reopen triggers, phase-exit checklist, and portfolio-safe executive summary."
          tips={[
            "Use only clearly fictional artifacts, versions, images, identities, routes, files, tests, logs, owners, organizations, and recovery records.",
            "Show how every validated cause connects to correction, test, deployment, monitoring, observation, and phase exit.",
            "Include approved and denied behavior, production and recovery alignment, source-health validation, business acceptance, rollback, and reopen triggers.",
            "Do not include real deployment records, artifact digests, internal routes, identities, logs, backups, owner names, recovery procedures, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional eradication removes or corrects validated root causes, while containment provides temporary risk reduction.",
            "Recovery should prove the complete source-to-runtime and production-to-recovery chain rather than relying on a merged change or completed ticket.",
            "Positive and negative testing protect both legitimate workflows and the corrected security boundary.",
            "Staged restoration, source-health validation, business acceptance, monitoring, and rollback reduce recurrence and unnecessary disruption.",
            "Recovery assets, identities, data, vendors, workers, monitoring, and support processes remain part of correction scope.",
            "Professional recovery phase exit requires observation, residual-risk documentation, reopen triggers, and accountable owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I11
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