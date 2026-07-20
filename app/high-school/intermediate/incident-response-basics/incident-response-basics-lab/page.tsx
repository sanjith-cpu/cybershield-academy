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
const previousLesson = `${modulePath}/post-incident-review-and-lessons-learned`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional readiness, detection, triage, scoping, containment, evidence preservation, timeline building, communication, recovery, review, metrics, and closure into one coordinated case.",
  "Use fictional multi-source evidence to distinguish confirmed facts, supported conclusions, alternatives, unknowns, affected scope, reviewed-unaffected scope, business impact, and residual risk.",
  "Create fictional incident decisions with documented authority, owners, deadlines, dependencies, validation, escalation, communication, rollback, and reassessment triggers.",
  "Produce fictional technical, business, leadership, support, recovery, post-incident, governance, and portfolio artifacts that remain consistent with one shared case truth.",
  "Complete a professional fictional Incident Response Case Package using only supplied records, defensive reasoning, privacy-aware communication, and safe authorized training actions."
];
const vocabulary = [
  [
    "Integrated response case",
    "A fictional end-to-end incident exercise combining readiness, triage, scope, containment, evidence, communication, recovery, lessons, governance, and closure."
  ],
  [
    "Case truth",
    "The fictional shared set of current facts, supported conclusions, uncertainty, scope, impact, actions, decisions, and limitations used across all response teams."
  ],
  [
    "Case objective",
    "A fictional evidence-based outcome the response team is trying to achieve during a defined phase, such as preserving evidence, reducing risk, restoring service, or validating closure."
  ],
  [
    "Decision gate",
    "A fictional checkpoint requiring specific evidence, authority, owner approval, business context, monitoring, and rollback before the case advances."
  ],
  [
    "Evidence package",
    "A fictional collection of indexed original records, source lineage, source-health status, normalized timestamps, timeline events, conflicts, confidence, and handling history."
  ],
  [
    "Scope model",
    "A fictional map of confirmed affected, suspected, related, unknown, reviewed-unaffected, contained, recovered, and excluded assets, identities, data, services, workflows, and time windows."
  ],
  [
    "Containment package",
    "A fictional set of narrow protective controls with authority, scope, testing, monitoring, continuity, rollback, expiry, and exit criteria."
  ],
  [
    "Recovery package",
    "A fictional approved source-to-runtime and production-to-recovery record with tests, staged rollout, source health, business validation, observation, and phase exit."
  ],
  [
    "Communication package",
    "A fictional set of audience-specific updates, escalations, requests, decisions, corrections, approvals, handoffs, and closure messages sharing one case truth."
  ],
  [
    "Improvement package",
    "A fictional post-incident set of causes, strengths, gaps, actions, metrics, validation, governance, residual risk, and recurrence monitoring."
  ],
  [
    "Closure package",
    "A fictional record proving scope, remediation, recovery, monitoring, business outcomes, communication, residual risk, actions, lessons, approvals, and reopen triggers are complete."
  ],
  [
    "Portfolio-safe artifact",
    "A fictional public-facing demonstration of defensive skill that excludes real users, systems, contacts, credentials, routes, logs, files, owners, and private organizational details."
  ]
];
const casePhases = [
  {
    "title": "Phase 1: Readiness activation",
    "summary": "Confirm fictional authority, roles, contacts, evidence sources, source-health status, playbooks, continuity, communication, and safe-lab boundaries.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 1: readiness activation."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 1: readiness activation."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 1: readiness activation when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 2: Detection and intake",
    "summary": "Preserve fictional alerts, user reports, support records, source identifiers, timestamps, original context, and duplicate relationships.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 2: detection and intake."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 2: detection and intake."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 2: detection and intake when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 3: Triage and classification",
    "summary": "Correlate fictional asset, identity, file, transaction, deployment, business, and source-health evidence into an initial assessment.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 3: triage and classification."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 3: triage and classification."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 3: triage and classification when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 4: Scope and containment",
    "summary": "Build fictional affected and unknown scope, select narrow protective actions, preserve evidence, validate continuity, monitor, and prepare rollback.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 4: scope and containment."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 4: scope and containment."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 4: scope and containment when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 5: Evidence and investigation",
    "summary": "Create the fictional evidence index, source-lineage map, normalized timeline, conflicts, confidence, alternatives, and decision links.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 5: evidence and investigation."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 5: evidence and investigation."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 5: evidence and investigation when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 6: Eradication and recovery",
    "summary": "Correct fictional root causes, verify known-good artifacts and identities, run tests, restore in stages, validate business outcomes, and observe.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 6: eradication and recovery."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 6: eradication and recovery."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 6: eradication and recovery when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 7: Review and improvement",
    "summary": "Conduct a fictional blameless review, preserve strengths, classify causes and gaps, assign actions, validate lessons, and govern residual risk.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 7: review and improvement."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 7: review and improvement."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 7: review and improvement when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  },
  {
    "title": "Phase 8: Closure and portfolio",
    "summary": "Complete fictional closure evidence, owner approvals, reopen triggers, metrics, executive summary, and a safe public-facing case artifact.",
    "details": [
      [
        "Primary objective",
        "Define the fictional case objective, decision owner, evidence required, deadline, dependencies, communication need, and phase-exit criteria for phase 8: closure and portfolio."
      ],
      [
        "Evidence and decisions",
        "Use fictional alerts, source health, assets, identities, files, transactions, business records, timeline events, actions, tests, and approvals to support phase 8: closure and portfolio."
      ],
      [
        "Failure mode",
        "Avoid advancing phase 8: closure and portfolio when ownership, evidence quality, scope, business impact, monitoring, rollback, or decision authority remains unclear."
      ]
    ]
  }
];
const requiredDeliverables = [
  {
    "title": "Readiness activation brief",
    "summary": "A fictional one-page record of authority, roles, contacts, evidence sources, safe-lab boundary, playbooks, continuity, severity rules, and initial objectives.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in readiness activation brief."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of readiness activation brief from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in readiness activation brief."
      ]
    ]
  },
  {
    "title": "Initial assessment and scope map",
    "summary": "A fictional record of original signals, source health, facts, conclusions, alternatives, confidence, severity, affected scope, unknown scope, and next actions.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in initial assessment and scope map."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of initial assessment and scope map from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in initial assessment and scope map."
      ]
    ]
  },
  {
    "title": "Containment and continuity plan",
    "summary": "A fictional set of narrow controls, authority, tests, monitoring, business fallback, user impact, rollback, expiry, and exit criteria.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in containment and continuity plan."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of containment and continuity plan from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in containment and continuity plan."
      ]
    ]
  },
  {
    "title": "Evidence index and correlated timeline",
    "summary": "A fictional traceable package of originals, derived records, source lineage, handling, timestamps, conflicts, gaps, confidence, and event order.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in evidence index and correlated timeline."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of evidence index and correlated timeline from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in evidence index and correlated timeline."
      ]
    ]
  },
  {
    "title": "Communication and escalation set",
    "summary": "Fictional technical, business, leadership, support, partner, recovery, correction, handoff, and closure updates with approvals and decision requests.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in communication and escalation set."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of communication and escalation set from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in communication and escalation set."
      ]
    ]
  },
  {
    "title": "Eradication and recovery plan",
    "summary": "A fictional root-cause matrix, approved artifact and identity baseline, test package, staged rollout, source-health plan, business validation, observation, and rollback.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in eradication and recovery plan."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of eradication and recovery plan from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in eradication and recovery plan."
      ]
    ]
  },
  {
    "title": "Post-incident review and action register",
    "summary": "A fictional blameless review of causes, strengths, gaps, performance, actions, validation, metrics, residual risk, governance, and recurrence.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in post-incident review and action register."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of post-incident review and action register from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in post-incident review and action register."
      ]
    ]
  },
  {
    "title": "Closure and portfolio package",
    "summary": "A fictional final case summary, owner approvals, evidence checklist, reopen triggers, lessons, metrics, executive brief, and safe public-facing artifact.",
    "details": [
      [
        "Required contents",
        "Include fictional scope, evidence references, facts, conclusions, uncertainty, owner, decision, actions, timing, validation, limitations, and approval in closure and portfolio package."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional reasoning and current state of closure and portfolio package from original evidence and linked case records."
      ],
      [
        "Portfolio safety",
        "Use clearly fictional names, systems, identities, routes, logs, contacts, owners, dates, metrics, and organizations in closure and portfolio package."
      ]
    ]
  }
];
const decisionGates = [
  {
    "title": "Gate 1: Alert becomes a case",
    "summary": "Decide whether the fictional signal is expected, benign, operational, suspicious, evidence-limited, security-relevant, or an incident candidate.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 1: alert becomes a case is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 1: alert becomes a case."
      ],
      [
        "Reject when",
        "Reject gate 1: alert becomes a case when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 2: Severity and coordination",
    "summary": "Decide the fictional response priority, incident lead, owner set, communication cadence, escalation, and evidence-collection urgency.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 2: severity and coordination is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 2: severity and coordination."
      ],
      [
        "Reject when",
        "Reject gate 2: severity and coordination when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 3: Containment approval",
    "summary": "Decide which fictional narrow control, business fallback, monitoring, rollback, expiry, and communication are justified.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 3: containment approval is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 3: containment approval."
      ],
      [
        "Reject when",
        "Reject gate 3: containment approval when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 4: Scope confidence",
    "summary": "Decide whether fictional affected, suspected, unknown, related, reviewed-unaffected, and contained scope is sufficient for the next phase.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 4: scope confidence is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 4: scope confidence."
      ],
      [
        "Reject when",
        "Reject gate 4: scope confidence when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 5: Recovery readiness",
    "summary": "Decide whether fictional root causes, approved artifacts, identities, configuration, tests, dependencies, monitoring, rollback, and business validation are ready.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 5: recovery readiness is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 5: recovery readiness."
      ],
      [
        "Reject when",
        "Reject gate 5: recovery readiness when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 6: Service restoration",
    "summary": "Decide whether the fictional canary, expanded rollout, recovery alignment, source health, support, business outcomes, and observation justify broader service.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 6: service restoration is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 6: service restoration."
      ],
      [
        "Reject when",
        "Reject gate 6: service restoration when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 7: Improvement action closure",
    "summary": "Decide whether fictional corrective actions have evidence, validation, owner acceptance, governance review, and reduced risk.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 7: improvement action closure is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 7: improvement action closure."
      ],
      [
        "Reject when",
        "Reject gate 7: improvement action closure when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  },
  {
    "title": "Gate 8: Case closure",
    "summary": "Decide whether fictional scope, evidence, remediation, recovery, communication, residual risk, actions, lessons, approvals, and reopen triggers are complete.",
    "details": [
      [
        "Decision question",
        "Determine which fictional action for gate 8: case closure is justified by current scope, consequence, evidence confidence, business need, authority, and available controls."
      ],
      [
        "Required record",
        "Document alternatives, chosen option, owner, authority, evidence, expected result, monitoring, rollback, deadline, communication, and review trigger for gate 8: case closure."
      ],
      [
        "Reject when",
        "Reject gate 8: case closure when it depends on unsupported impact, one unhealthy source, copied evidence, broad assumptions, missing ownership, or untested control behavior."
      ]
    ]
  }
];
const caseTimeline = [
  {
    "time": "08:32",
    "source": "User report",
    "event": "A fictional teacher reports repeated preview failures during an active student-support case.",
    "meaning": "A business observation enters the case before a monitoring alert."
  },
  {
    "time": "08:40",
    "source": "Support monitor",
    "event": "A fictional alert reports preview errors and unusual service-identity access outside documented storage scope.",
    "meaning": "The original security signal is preserved for intake."
  },
  {
    "time": "08:43",
    "source": "Source health",
    "event": "Application logs are delayed while identity, transaction, storage, deployment, and business records remain current.",
    "meaning": "The team identifies an evidence limitation and alternate sources."
  },
  {
    "time": "08:50",
    "source": "Identity and transaction",
    "event": "The normal service source requests a broader prefix during an approved teacher preview job.",
    "meaning": "A legitimate workflow overlaps a real access-control concern."
  },
  {
    "time": "09:05",
    "source": "Initial assessment",
    "event": "The case is classified as a confirmed security event with medium response severity and no supported unrelated-file access.",
    "meaning": "The team preserves the validated weakness without exaggerating impact."
  },
  {
    "time": "09:20",
    "source": "Containment",
    "event": "The identity is narrowed, the automated preview worker is paused, manual fallback is activated, monitoring is increased, and rollback is ready.",
    "meaning": "Risk is reduced while critical support and evidence remain available."
  },
  {
    "time": "09:35",
    "source": "Delayed application logs",
    "event": "Later records confirm no unrelated file read, export, or cache creation.",
    "meaning": "Confidence increases and the impact boundary remains narrow."
  },
  {
    "time": "10:15",
    "source": "Scope review",
    "event": "The recovery worker uses a separate named identity and approved prefix and is classified as related but not affected.",
    "meaning": "Shared technology does not automatically expand scope."
  },
  {
    "time": "13:20",
    "source": "Root-cause review",
    "event": "The case identifies a broad prefix, shared identity, mutable artifact, unsupported image, stale recovery asset, delayed source, and unclear communication approval.",
    "meaning": "The response identifies connected technical and organizational causes."
  },
  {
    "time": "Day 2 10:00",
    "source": "Recovery tests",
    "event": "Exact, positive, negative, compatibility, source-health, business, restore, and rollback tests pass for the corrected candidate.",
    "meaning": "The known-good recovery state is supported by several evidence types."
  },
  {
    "time": "Day 2 11:00",
    "source": "Canary rollout",
    "event": "One production worker receives the approved artifact, named identity, narrow prefix, and enhanced monitoring.",
    "meaning": "Restoration begins with controlled scope."
  },
  {
    "time": "Day 2 14:00",
    "source": "Service restoration",
    "event": "Production and recovery align with the approved state; support guidance is updated; observation remains open.",
    "meaning": "Availability returns without prematurely declaring full recovery."
  },
  {
    "time": "Day 14",
    "source": "Recovery exit",
    "event": "Service, security, source-health, business, support, and recurrence indicators remain stable with low residual risk.",
    "meaning": "The case can enter formal post-incident review."
  },
  {
    "time": "Day 20",
    "source": "Lessons review",
    "event": "Eight corrective actions receive owners, deadlines, dependencies, evidence, validation, escalation, and governance review dates.",
    "meaning": "Lessons become accountable improvement work."
  },
  {
    "time": "Day 45",
    "source": "Exercise and re-test",
    "event": "Authority, source delay, containment, communication correction, recovery, rollback, and handoff scenarios pass.",
    "meaning": "Several improvements are validated in practice."
  },
  {
    "time": "Day 60",
    "source": "Closure review",
    "event": "Seven actions close with evidence; one vendor dependency remains under interim control, funding, monitoring, and a new deadline.",
    "meaning": "Closure can preserve visible residual risk and open governance work."
  }
];
const commonMistakes = [
  "Treating the fictional integrated lab as eight disconnected worksheets instead of one shared case with linked evidence, decisions, actions, communications, and phase gates.",
  "Changing facts between technical, business, leadership, support, recovery, review, and closure artifacts.",
  "Treating the first alert, tool severity, hostname, or user report as complete incident scope.",
  "Using dashboard silence without verifying source availability, delay, parsing, retention, ownership, and missing-event detection.",
  "Counting copied dashboards, exports, screenshots, and summaries from one source as independent corroboration.",
  "Applying broad containment without authority, testing, continuity, evidence preservation, monitoring, rollback, expiry, and owner approval.",
  "Declaring recovery complete from a merged code change, successful canary, quiet dashboard, or completed ticket.",
  "Skipping negative tests, recovery alignment, source-health validation, business acceptance, observation, residual risk, and reopen triggers.",
  "Sending one message to every audience or hiding uncertainty, scope limitations, requested decisions, owners, and correction history.",
  "Writing vague lessons without exact actions, deadlines, dependencies, validation, escalation, metrics, governance, and recurrence review.",
  "Closing the fictional case while source health, owner approvals, actions, exceptions, business outcomes, lessons, or reopen criteria remain incomplete.",
  "Publishing real users, contacts, system names, routes, identities, files, logs, credentials, evidence sources, owners, vendors, metrics, or private response details."
];
const quizQuestions = [
  {
    "question": "What is the most important requirement for an integrated fictional incident lab?",
    "choices": [
      "All phases, artifacts, decisions, actions, communications, and metrics must use one shared evidence-based case truth.",
      "Each worksheet should tell a different story.",
      "The alert severity should decide every phase.",
      "The case should close as quickly as possible."
    ],
    "answer": 0,
    "explanation": "Integration requires consistency and traceability across the entire response lifecycle."
  },
  {
    "question": "What should happen when an important evidence source is delayed?",
    "choices": [
      "Document the source-health gap, use alternate evidence, adjust confidence, repair the source, and reassess when records arrive.",
      "Assume no activity occurred.",
      "Declare critical compromise.",
      "Delete the source from the case."
    ],
    "answer": 0,
    "explanation": "A delayed source creates uncertainty and must be managed transparently."
  },
  {
    "question": "What makes fictional containment ready for use?",
    "choices": [
      "Authority, sufficient scope, evidence preservation, business continuity, testing, monitoring, rollback, expiry, ownership, and exit criteria.",
      "A high-severity alert.",
      "A technical owner's preference.",
      "A permanent shutdown."
    ],
    "answer": 0,
    "explanation": "Containment should be proportionate, reviewable, and safe for evidence and operations."
  },
  {
    "question": "What is required before fictional service restoration expands?",
    "choices": [
      "Root-cause correction, approved artifact and runtime, positive and negative tests, source health, business validation, monitoring, rollback, and owner approval.",
      "One successful transaction.",
      "A quiet dashboard.",
      "A closed remediation ticket."
    ],
    "answer": 0,
    "explanation": "Recovery requires a complete evidence chain, not one success signal."
  },
  {
    "question": "What makes a fictional post-incident action complete?",
    "choices": [
      "The action has evidence, validation, owner acceptance, expected risk reduction, governance review, and recurrence monitoring where needed.",
      "The document was updated.",
      "The meeting occurred.",
      "The ticket status changed."
    ],
    "answer": 0,
    "explanation": "Completion should prove the improvement works in practice."
  },
  {
    "question": "When may a fictional case close?",
    "choices": [
      "When scope, evidence, remediation, recovery, communication, business outcomes, residual risk, actions, lessons, approvals, and reopen triggers meet the closure standard.",
      "When containment starts.",
      "When the urgent alert stops.",
      "When leadership asks for closure."
    ],
    "answer": 0,
    "explanation": "Closure requires evidence across technical, operational, business, communication, risk, and governance domains."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional systems, users, identities, contacts, evidence, controls, decisions, metrics, timelines, owners, and organizations.",
      "Publish real alerts after removing one username.",
      "Include internal routes and recovery details.",
      "Reuse private case screenshots."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate defensive skill without exposing real incident information."
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
        href={nextPage}
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
        Integrated Case Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow the Fictional Meadowbrook Case from First Report to Closure Review
      </h2>

      <div className="mt-6 grid gap-3">
        {caseTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">
              {item.time}
            </p>

            <p className="text-sm font-black text-blue-200">
              {item.source}
            </p>

            <p className="text-sm font-semibold text-white">
              {item.event}
            </p>

            <p className="text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function IncidentResponseBasicsLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.8 Incident Response Basics Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a fictional end-to-end incident response case that
            integrates readiness, detection, triage, scope, containment,
            evidence preservation, timeline building, communication,
            escalation, eradication, recovery, business validation,
            post-incident review, corrective actions, metrics, residual risk,
            governance, closure, and a portfolio-safe final package.
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
          lessonTitle="Incident Response Basics Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will maintain one fictional case truth across readiness, triage, scope, containment, evidence, communication, recovery, review, metrics, and closure.",
            "I will preserve original evidence, source health, timestamps, lineage, confidence, conflicts, gaps, decisions, actions, owners, and revisions.",
            "I will use narrow, authorized, reversible, tested, monitored, evidence-preserving, continuity-aware containment and recovery.",
            "I will tailor communication by audience without changing the underlying facts, uncertainty, scope, impact, or owner responsibilities.",
            "I will use only supplied fictional systems, users, identities, files, logs, contacts, owners, organizations, and records.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Final Lab Tests Whether Every Response Phase Can Support the Next"
        >
          <p className="leading-8">
            A fictional teacher reports preview failures during an active
            student-support case. Minutes later, a monitoring alert identifies
            a service identity requesting storage outside its approved scope.
            One log source is delayed, a recent configuration change exists,
            recovery assets may be stale, and the approved business workflow
            cannot simply be disabled. The team must protect evidence and
            students, avoid unsupported conclusions, restore service safely, and
            prove that its lessons lead to measurable improvement.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Fragmented response
              </p>

              <p className="mt-2 leading-7">
                Let each team create a different story, use tool severity as
                proof, contain broadly, lose evidence context, restore quickly,
                communicate certainty, and close actions after documents change.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Integrated response
              </p>

              <p className="mt-2 leading-7">
                Preserve one case truth, link every decision to evidence, protect
                continuity, restore through gates, communicate limitations,
                validate improvements, and close only when the complete standard
                is met.
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

              <p className="mt-3 font-semibold leading-7">
                {objective}
              </p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Professional Incident Response Is a Chain of Evidence-Based Decisions"
        >
          <p className="leading-8">
            Fictional response quality depends on how well each phase preserves
            and improves the next. Weak readiness slows triage. Weak triage
            damages scope. Weak scope makes containment dangerous. Weak evidence
            undermines recovery and communication. Weak recovery creates
            recurrence. Weak lessons leave the same causes in place. This lab
            requires a complete and reviewable chain.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Case Phases"
          title="Eight Phases in the Integrated Response"
          items={casePhases}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Readiness–Evidence–Decision–Action–Validation–Learning Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Readiness", "Which fictional authority, roles, contacts, evidence, playbooks, continuity, communication, and closure standards are active?"],
              ["Evidence", "Which fictional originals, source health, timestamps, identities, files, transactions, business records, conflicts, and gaps support the case?"],
              ["Decision", "Which fictional classification, severity, scope, containment, communication, recovery, residual risk, and closure choice is justified?"],
              ["Action", "Which fictional owner, task, deadline, dependency, control, message, test, monitoring, rollback, and escalation follow?"],
              ["Validation", "Which fictional positive, negative, source-health, business, recovery, exercise, metric, owner, and governance evidence prove the action worked?"],
              ["Learning", "Which fictional cause, strength, gap, corrective action, metric, policy, playbook, exercise, recurrence check, and reopen trigger improve future response?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">
                  {title}
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DetailSection
          eyebrow="Required Deliverables"
          title="Eight Artifacts in the Final Case Package"
          items={requiredDeliverables}
        />

        <DetailSection
          eyebrow="Decision Gates"
          title="Eight Decisions That Control Case Progress"
          items={decisionGates}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Integrated Incident Response Lab Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">
                  {term}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Integrated Incident Response Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Response phases complete",
              value: "7 of 8",
              note: "Fictional readiness through improvement phases have evidence; final closure remains under review.",
            },
            {
              label: "Evidence-linked decisions",
              value: "94%",
              note: "Fictional severity, scope, containment, recovery, communication, action, risk, and closure decisions linked to indexed records.",
            },
            {
              label: "Open residual-risk items",
              value: "1",
              note: "A fictional vendor dependency remains under interim control, monitoring, funding, ownership, and scheduled review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Closure Proposed while One Action and One Source-Health Check Remain Open"
          severity="High"
          time="Day 60 2:30 PM"
          source="Fake Incident Closure Console"
          details="A fictional case owner proposes closure because service is stable and seven corrective actions passed. One vendor dependency remains open, and the quarterly missing-event test for a critical evidence source has not yet completed."
          recommendation="Do not claim unconditional closure; review whether the approved closure standard allows case closure with governed residual risk; preserve the open action, interim control, owner, funding, deadline, monitoring, risk approval, and reopen trigger; complete or schedule the source-health test; obtain technical, business, incident, risk, and governance approvals; publish an accurate closure statement; and keep the improvement action register active."
        />

        <FakeLogPanel
          title="Fake Integrated Incident Response Timeline"
          logs={[
            "08:32 USER_REPORT preview_failures='active_case'",
            "08:40 ALERT identity_path='outside_documented_scope' severity='high'",
            "08:43 SOURCE_HEALTH app_logs='delayed' alternate_sources='healthy'",
            "08:50 CORRELATE teacher_job='approved' broader_prefix='requested'",
            "09:05 CLASSIFY event='confirmed_security_event' severity='medium' impact='narrow'",
            "09:20 CONTAIN identity='narrowed' worker='paused' fallback='manual'",
            "09:35 EVIDENCE unrelated_read='none_supported' confidence='high'",
            "10:15 SCOPE recovery_worker='related_not_affected'",
            "13:20 ROOT_CAUSE prefix='broad' identity='shared' artifact='mutable' source='delayed'",
            "D2 10:00 TEST exact='pass' positive='pass' negative='pass' rollback='pass'",
            "D2 11:00 CANARY workers='1' monitoring='enhanced'",
            "D2 14:00 RESTORE production='aligned' recovery='aligned' observation='open'",
            "D14 RECOVERY_EXIT indicators='stable' residual_risk='low'",
            "D20 ACTIONS total='8' owners='assigned' validation='defined'",
            "D45 EXERCISE authority='pass' source_delay='pass' recovery='pass'",
            "D60 CLOSURE actions_validated='7' vendor_dependency='open'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Final Case Conclusion Is Best Supported?"
          evidence={[
            "The fictional preview-worker event involved a broad storage prefix and shared identity during an approved teacher workflow.",
            "No supplied file, transaction, or application evidence supports unrelated-file access.",
            "Narrow containment preserved urgent support, unrelated services, evidence sources, monitoring, and rollback.",
            "Root causes were corrected across production and recovery using a named identity, supported image, pinned artifact, narrow prefix, and healthy source monitoring.",
            "Exact, positive, negative, compatibility, business, restore, source-health, and rollback tests passed.",
            "Seven of eight corrective actions passed re-testing and governance review.",
            "One vendor dependency remains under interim control, funding, monitoring, ownership, deadline, and reopen criteria.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional case demonstrates a narrow security event that was contained and recovered safely; no unrelated-file access is supported; most improvements are validated; one vendor dependency remains as visible governed residual risk.",
            "A district-wide data breach was confirmed.",
            "All future risk has been eliminated.",
            "The case should remain permanently open because one governed dependency exists.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves the confirmed weakness, narrow impact, successful response, validated improvement, remaining dependency, and limits of certainty."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken an Integrated Incident Response Case"
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
          title="Complete the Fictional Meadowbrook Incident Response Case"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Integrated Case
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review ninety supplied fictional records covering readiness,
                contacts, authority, alerts, source health, assets, identities,
                files, transactions, services, deployments, business workflows,
                containment, evidence handling, timelines, communications,
                recovery, tests, support, metrics, corrective actions, residual
                risk, governance, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Final Submission
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Complete the fictional readiness activation and initial objectives.</li>
                <li>Produce the intake, triage, evidence, scope, containment, decision, and communication records.</li>
                <li>Build the root-cause, remediation, recovery, testing, rollout, observation, and phase-exit package.</li>
                <li>Complete the blameless review, action register, validation plan, metric guide, and governance dashboard.</li>
                <li>Write the final closure recommendation, residual-risk statement, reopen triggers, and owner approvals.</li>
                <li>Create a portfolio-safe executive case study that demonstrates defensive reasoning without exposing real information.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, contact, test,
            isolate, alter, identify, collect, request, deploy, restore, publish,
            or expose real systems, users, identities, files, logs, routes,
            credentials, evidence sources, contacts, owners, vendors, metrics,
            or private organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Case Has Strong Recovery Evidence but One Open Vendor Dependency"
          scenario="A fictional response has stable service, healthy sources, approved business outcomes, and seven validated corrective actions. One vendor dependency remains under an interim control and scheduled governance review."
          choices={[
            {
              label: "Choice A",
              response:
                "Evaluate the approved closure standard, document the governed residual risk, preserve the open action and interim control, obtain required owner approvals, define reopen triggers, and issue an accurate closure statement without claiming zero risk.",
              outcome:
                "Best defensive choice. Closure can preserve visible and governed residual risk when the standard and owners allow it.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare all risk eliminated.",
              outcome:
                "Unsupported. The vendor dependency remains open.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Hide the dependency so the case can close.",
              outcome:
                "Unsafe. Residual risk must remain visible and owned.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Requests a Public Portfolio Artifact"
          scenario="A fictional leadership sponsor asks for a student portfolio version of the case study and suggests reusing real internal screenshots after hiding a few names."
          choices={[
            {
              label: "Choice A",
              response:
                "Create a new clearly fictional artifact with invented systems, identities, logs, timelines, metrics, owners, contacts, and organizations while preserving only the defensive reasoning and workflow.",
              outcome:
                "Best defensive choice. It demonstrates skill without exposing real incident information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the screenshots after hiding usernames.",
              outcome:
                "Unsafe. Other system, route, evidence, timing, and organizational details may remain sensitive.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the full case because it is educational.",
              outcome:
                "Unsafe. Educational purpose does not remove privacy and security boundaries.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Incident Response Lab Checklist"
          items={[
            "I maintain one fictional case truth across readiness, triage, scope, containment, evidence, communication, recovery, review, governance, and closure.",
            "I preserve original signals, source health, assets, identities, files, transactions, business records, timestamps, lineage, conflicts, gaps, confidence, and revisions.",
            "I distinguish confirmed facts, supported conclusions, alternatives, uncertainty, affected scope, related scope, reviewed-unaffected scope, unknown scope, and residual risk.",
            "I connect every major decision to authority, evidence, alternatives, owner, expected result, monitoring, rollback, deadline, communication, and review trigger.",
            "I use containment that is narrow, reversible, tested, monitored, evidence-preserving, continuity-aware, owned, and connected to expiry and exit criteria.",
            "I prove recovery across source, build, artifact, image, identity, configuration, deployment, runtime, recovery assets, tests, business outcomes, source health, observation, and rollback.",
            "I tailor communications by audience without changing facts, and I preserve uncertainty, approvals, decisions, deadlines, corrections, and next-update expectations.",
            "I create blameless lessons, specific actions, trustworthy metrics, validation, governance review, recurrence checks, residual risk, and reopen triggers.",
            "I close only when technical, operational, business, evidence, communication, action, risk, lesson, ownership, and governance requirements meet the approved standard.",
            "I use only fictional information and never expose real users, systems, identities, files, logs, routes, credentials, contacts, owners, vendors, metrics, or private incident details.",
          ]}
        />

        <MiniQuiz
          title="I11.8 Mini Quiz: Incident Response Basics Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional end-to-end Incident Response Case Package using at least ninety readiness, authority, contact, alert, source-health, asset, identity, file, transaction, service, deployment, business, containment, evidence-handling, timeline, communication, recovery, test, support, metric, action, residual-risk, governance, and closure records. Include a readiness brief, initial assessment, scope map, containment plan, evidence index, timeline, decision log, action register, communication set, recovery package, post-incident review, metric guide, residual-risk statement, closure checklist, executive summary, and portfolio-safe public case study."
          tips={[
            "Use only clearly fictional systems, users, identities, files, logs, routes, contacts, owners, vendors, metrics, timelines, organizations, and decisions.",
            "Preserve one evidence-based case truth across every artifact and phase.",
            "Show how evidence changes classification, scope, containment, communication, recovery, lessons, metrics, residual risk, and closure.",
            "Do not include real screenshots, alerts, logs, system names, routes, filenames, credentials, owner names, contact lists, vendor records, metrics, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Professional fictional incident response is an integrated chain from readiness through closure rather than a set of isolated tasks.",
            "One shared case truth keeps technical, business, leadership, support, recovery, review, and governance decisions consistent.",
            "Every major conclusion and decision should link to preserved evidence, source health, scope, confidence, ownership, validation, and review triggers.",
            "Containment and recovery should protect evidence, legitimate workflows, source health, rollback, business outcomes, and future investigation.",
            "Communication should tailor detail without changing facts, and corrections should remain visible and traceable.",
            "Lessons require specific actions, trustworthy metrics, re-testing, governance, residual-risk visibility, and recurrence monitoring.",
            "A portfolio-safe case study should preserve defensive reasoning while replacing all real people, systems, evidence, routes, organizations, and operational details with fictional content.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I11
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