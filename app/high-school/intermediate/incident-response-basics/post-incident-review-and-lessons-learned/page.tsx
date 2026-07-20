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
const previousLesson = `${modulePath}/communication-escalation-and-documentation`;
const nextLesson = `${modulePath}/incident-response-basics-lab`;

const objectives = [
  "Explain how fictional incident teams conduct a blameless post-incident review after containment, recovery, observation, and immediate communication stabilize.",
  "Separate fictional direct causes, contributing conditions, control gaps, evidence limitations, decision-quality issues, communication problems, recovery weaknesses, and organizational lessons.",
  "Evaluate fictional response performance using scope accuracy, evidence quality, containment effectiveness, recovery safety, business continuity, communication, ownership, timing, and residual risk.",
  "Create fictional corrective actions with clear owners, deadlines, dependencies, evidence, completion criteria, validation, re-testing, escalation, and governance review.",
  "Build a fictional Post-Incident Review and Lessons-Learned Package using only supplied records and safe defensive practices."
];
const vocabulary = [
  [
    "Post-incident review",
    "A fictional structured review of what happened, why it happened, how the response performed, what remains at risk, and which improvements are required."
  ],
  [
    "Blameless review",
    "A fictional review focused on systems, conditions, decisions, evidence, and process rather than personal blame or humiliation."
  ],
  [
    "Direct cause",
    "A fictional condition that immediately produced the reviewed event or control failure."
  ],
  [
    "Contributing condition",
    "A fictional technical, operational, business, evidence, ownership, communication, or governance condition that increased likelihood, duration, scope, or impact."
  ],
  [
    "Control gap",
    "A fictional missing, weak, misconfigured, untested, unhealthy, bypassed, or poorly owned safeguard."
  ],
  [
    "Response gap",
    "A fictional weakness in triage, scope, containment, evidence, communication, recovery, handoff, escalation, documentation, or closure."
  ],
  [
    "Lesson learned",
    "A fictional evidence-led insight that changes a control, process, role, playbook, metric, exercise, design, or governance decision."
  ],
  [
    "Corrective action",
    "A fictional assigned improvement task with owner, deadline, dependency, evidence, validation, escalation, and closure criteria."
  ],
  [
    "Effectiveness measure",
    "A fictional metric or test showing whether an improvement reduced risk, improved response quality, or protected business outcomes."
  ],
  [
    "Recurrence",
    "A fictional return of the same or meaningfully related unsafe condition, failed control, old artifact, weak process, or response problem."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after recovery and improvement planning, including exposure, uncertainty, dependencies, exceptions, and monitoring."
  ],
  [
    "Governance follow-up",
    "A fictional review confirming actions, metrics, re-tests, funding, policy, ownership, residual risk, and reopen triggers remain accountable."
  ]
];
const reviewDomains = [
  {
    "title": "Event summary and final scope",
    "summary": "Reconstruct the fictional event, reviewed time window, affected and unaffected scope, business effect, classification, severity, containment, recovery, and closure status.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about event summary and final scope, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for event summary and final scope."
      ],
      [
        "Avoid",
        "Do not reduce event summary and final scope to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Technical causes and control gaps",
    "summary": "Review fictional code, packages, images, identities, permissions, configuration, data handling, deployment, runtime, recovery, and monitoring conditions.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about technical causes and control gaps, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for technical causes and control gaps."
      ],
      [
        "Avoid",
        "Do not reduce technical causes and control gaps to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Detection and triage quality",
    "summary": "Review fictional alert quality, source health, asset mapping, expected behavior, correlation, classification, confidence, severity, and initial actions.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about detection and triage quality, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for detection and triage quality."
      ],
      [
        "Avoid",
        "Do not reduce detection and triage quality to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Scoping and containment quality",
    "summary": "Review fictional scope hypotheses, unknowns, continuity, authority, control selection, evidence preservation, monitoring, rollback, and reassessment.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about scoping and containment quality, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for scoping and containment quality."
      ],
      [
        "Avoid",
        "Do not reduce scoping and containment quality to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Evidence and timeline quality",
    "summary": "Review fictional original records, source lineage, timestamps, conflicts, gaps, duplicates, confidence, handling, and timeline revisions.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about evidence and timeline quality, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for evidence and timeline quality."
      ],
      [
        "Avoid",
        "Do not reduce evidence and timeline quality to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Recovery and restoration quality",
    "summary": "Review fictional eradication, artifact and runtime alignment, testing, staged rollout, source health, business validation, rollback, observation, and phase exit.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about recovery and restoration quality, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for recovery and restoration quality."
      ],
      [
        "Avoid",
        "Do not reduce recovery and restoration quality to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Communication and coordination quality",
    "summary": "Review fictional audience design, fact and conclusion separation, uncertainty, escalation, decisions, handoffs, corrections, support, and documentation.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about communication and coordination quality, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for communication and coordination quality."
      ],
      [
        "Avoid",
        "Do not reduce communication and coordination quality to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  },
  {
    "title": "Residual risk and governance",
    "summary": "Review fictional remaining exposure, uncertainty, exceptions, dependencies, actions, metrics, owners, review dates, and reopen triggers.",
    "details": [
      [
        "Questions to answer",
        "Determine what fictional evidence shows about residual risk and governance, which alternative explanations remain, and how the condition affected risk, response, continuity, or trust."
      ],
      [
        "Evidence",
        "Use the fictional timeline, evidence index, source-health record, decision log, action register, communication archive, test results, business outcomes, and owner review for residual risk and governance."
      ],
      [
        "Avoid",
        "Do not reduce residual risk and governance to one person, one alert, one tool label, or one unsupported story when system and organizational conditions are involved."
      ]
    ]
  }
];
const causeCategories = [
  {
    "title": "Design and architecture conditions",
    "summary": "Fictional service boundaries, trust assumptions, identity design, data flow, dependency, recovery, and observability choices that shaped the event.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional design and architecture conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether design and architecture conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about design and architecture conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Code and dependency conditions",
    "summary": "Fictional validation, authorization, package, library, build input, error handling, debug, and regression weaknesses.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional code and dependency conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether code and dependency conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about code and dependency conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Identity and permission conditions",
    "summary": "Fictional shared accounts, broad roles, stale tokens, missing revocation, excessive service permissions, and unclear ownership.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional identity and permission conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether identity and permission conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about identity and permission conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Configuration and deployment conditions",
    "summary": "Fictional broad prefixes, mutable tags, unsupported images, feature flags, environment drift, unapproved values, and incomplete recovery alignment.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional configuration and deployment conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether configuration and deployment conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about configuration and deployment conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Monitoring and evidence conditions",
    "summary": "Fictional delayed sources, missing-event gaps, weak parsing, short retention, unhealthy dashboards, duplicate evidence, and missing ownership.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional monitoring and evidence conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether monitoring and evidence conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about monitoring and evidence conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Process and ownership conditions",
    "summary": "Fictional unclear authority, stale contacts, missing backups, incomplete reviews, delayed actions, weak handoffs, and untested playbooks.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional process and ownership conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether process and ownership conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about process and ownership conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Business and continuity conditions",
    "summary": "Fictional critical dates, fallback limits, service dependencies, support readiness, communication needs, and acceptable interruption decisions.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional business and continuity conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether business and continuity conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about business and continuity conditions from linked records and documented limitations."
      ]
    ]
  },
  {
    "title": "Governance and measurement conditions",
    "summary": "Fictional misleading metrics, hidden denominator changes, weak exceptions, missing funding, overdue actions, and incomplete risk review.",
    "details": [
      [
        "Analysis method",
        "Trace the fictional governance and measurement conditions through code, configuration, identity, data, deployment, recovery, monitoring, workflow, ownership, and governance evidence."
      ],
      [
        "Required distinction",
        "Separate whether governance and measurement conditions is a direct cause, contributing condition, control gap, response gap, evidence limitation, or unrelated observation."
      ],
      [
        "Quality standard",
        "Another reviewer should be able to reproduce the fictional conclusion about governance and measurement conditions from linked records and documented limitations."
      ]
    ]
  }
];
const performanceAreas = [
  {
    "title": "Time to preserve and classify",
    "summary": "Assess how quickly the fictional original signal, source health, asset context, classification, confidence, owner, and next action became reliable.",
    "details": [
      [
        "Measure",
        "Evaluate fictional time to preserve and classify against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for time to preserve and classify."
      ],
      [
        "Interpret carefully",
        "Do not claim success for time to preserve and classify from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Scope accuracy and change control",
    "summary": "Assess how accurately fictional affected, suspected, related, unknown, unaffected, contained, and recovered scope changed with evidence.",
    "details": [
      [
        "Measure",
        "Evaluate fictional scope accuracy and change control against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for scope accuracy and change control."
      ],
      [
        "Interpret carefully",
        "Do not claim success for scope accuracy and change control from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Containment effectiveness",
    "summary": "Assess whether fictional containment reduced risk, preserved evidence, protected continuity, avoided unnecessary disruption, and remained reversible.",
    "details": [
      [
        "Measure",
        "Evaluate fictional containment effectiveness against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for containment effectiveness."
      ],
      [
        "Interpret carefully",
        "Do not claim success for containment effectiveness from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Evidence completeness and reproducibility",
    "summary": "Assess whether fictional conclusions could be reproduced from originals, lineage, timestamps, source health, conflicts, and handling history.",
    "details": [
      [
        "Measure",
        "Evaluate fictional evidence completeness and reproducibility against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for evidence completeness and reproducibility."
      ],
      [
        "Interpret carefully",
        "Do not claim success for evidence completeness and reproducibility from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Recovery safety and service quality",
    "summary": "Assess whether fictional root causes were corrected across production and recovery, tests passed, service returned safely, and observation remained stable.",
    "details": [
      [
        "Measure",
        "Evaluate fictional recovery safety and service quality against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for recovery safety and service quality."
      ],
      [
        "Interpret carefully",
        "Do not claim success for recovery safety and service quality from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Communication accuracy and timeliness",
    "summary": "Assess whether fictional updates were accurate, audience-appropriate, limitation-aware, owned, timely, versioned, and corrected visibly.",
    "details": [
      [
        "Measure",
        "Evaluate fictional communication accuracy and timeliness against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for communication accuracy and timeliness."
      ],
      [
        "Interpret carefully",
        "Do not claim success for communication accuracy and timeliness from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Action and decision accountability",
    "summary": "Assess whether fictional decisions and tasks had authority, owners, deadlines, evidence, dependencies, blockers, validation, and escalation.",
    "details": [
      [
        "Measure",
        "Evaluate fictional action and decision accountability against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for action and decision accountability."
      ],
      [
        "Interpret carefully",
        "Do not claim success for action and decision accountability from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  },
  {
    "title": "Business and governance outcomes",
    "summary": "Assess whether fictional critical workflows, support, users, residual risk, lessons, metrics, funding, and governance decisions were addressed.",
    "details": [
      [
        "Measure",
        "Evaluate fictional business and governance outcomes against the approved objective, threshold, owner expectation, evidence quality, business requirement, and case timeline."
      ],
      [
        "Evidence to compare",
        "Use fictional planned versus actual timing, decisions, actions, controls, source health, support outcomes, communications, tests, and approvals for business and governance outcomes."
      ],
      [
        "Interpret carefully",
        "Do not claim success for business and governance outcomes from ticket closure, one quiet dashboard, one successful transaction, or undocumented owner opinion."
      ]
    ]
  }
];
const correctiveActionTypes = [
  {
    "title": "Preventive technical action",
    "summary": "Change fictional code, package, image, identity, permission, configuration, data handling, deployment, recovery, or architecture to prevent recurrence.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for preventive technical action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close preventive technical action."
      ],
      [
        "Escalate when",
        "Escalate preventive technical action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Detective and evidence action",
    "summary": "Improve fictional alerts, logs, source health, missing-event detection, parsing, retention, correlation, evidence index, and timeline reproducibility.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for detective and evidence action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close detective and evidence action."
      ],
      [
        "Escalate when",
        "Escalate detective and evidence action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Response-process action",
    "summary": "Improve fictional triage, scope, containment, escalation, communication, handoff, recovery gates, documentation, and closure procedures.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for response-process action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close response-process action."
      ],
      [
        "Escalate when",
        "Escalate response-process action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Business-continuity action",
    "summary": "Improve fictional fallback, support readiness, critical-workflow mapping, service thresholds, communication, staffing, and recovery priorities.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for business-continuity action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close business-continuity action."
      ],
      [
        "Escalate when",
        "Escalate business-continuity action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Ownership and authority action",
    "summary": "Clarify fictional primary and backup roles, decision rights, contact paths, access, after-hours coverage, delegation, and review cadence.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for ownership and authority action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close ownership and authority action."
      ],
      [
        "Escalate when",
        "Escalate ownership and authority action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Exercise and training action",
    "summary": "Create fictional tabletop, evidence, containment, communication, recovery, source-health, handoff, and governance exercises with re-testing.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for exercise and training action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close exercise and training action."
      ],
      [
        "Escalate when",
        "Escalate exercise and training action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Metric and reporting action",
    "summary": "Correct fictional numerator, denominator, scope, lineage, status rules, data quality, thresholds, audience views, limitations, and action links.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for metric and reporting action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close metric and reporting action."
      ],
      [
        "Escalate when",
        "Escalate metric and reporting action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  },
  {
    "title": "Policy and governance action",
    "summary": "Update fictional standards, exceptions, funding, risk acceptance, review triggers, action oversight, closure criteria, and leadership accountability.",
    "details": [
      [
        "Action design",
        "Create a fictional corrective action for policy and governance action with exact scope, root cause, owner, deadline, dependency, priority, evidence, and expected risk reduction."
      ],
      [
        "Validation",
        "Define the fictional positive, negative, source-health, business, recovery, exercise, or governance proof required to close policy and governance action."
      ],
      [
        "Escalate when",
        "Escalate policy and governance action when ownership is missing, deadlines slip, dependencies block progress, evidence is weak, risk grows, or re-testing fails."
      ]
    ]
  }
];
const reviewTimeline = [
  {
    "time": "Day 14",
    "source": "Recovery exit",
    "event": "A fictional preview-service case leaves active recovery after stable observation, healthy sources, business validation, and low residual risk.",
    "meaning": "The team can begin the formal post-incident review."
  },
  {
    "time": "Day 15",
    "source": "Review charter",
    "event": "The fictional review defines purpose, safety boundary, participants, evidence, questions, schedule, output, and blameless expectations.",
    "meaning": "The review is structured before conclusions are written."
  },
  {
    "time": "Day 16",
    "source": "Evidence review",
    "event": "Original records, source lineage, timeline versions, scope states, decisions, actions, communications, tests, and business outcomes are sampled.",
    "meaning": "Findings are tied to evidence rather than memory."
  },
  {
    "time": "Day 17",
    "source": "Cause analysis",
    "event": "A broad storage prefix, shared identity, mutable artifact, unsupported image, delayed source, stale recovery asset, and unclear communication approval are classified.",
    "meaning": "Technical and organizational conditions are separated by category."
  },
  {
    "time": "Day 18",
    "source": "Response analysis",
    "event": "Triage and narrow containment performed well, but source-health readiness, recovery alignment, backup authority, and correction handling need improvement.",
    "meaning": "The review includes both strengths and gaps."
  },
  {
    "time": "Day 19",
    "source": "Business review",
    "event": "Manual fallback protected urgent support cases, but support guidance and critical-workflow ownership were incomplete at first.",
    "meaning": "Business and user outcomes shape the lessons."
  },
  {
    "time": "Day 20",
    "source": "Action workshop",
    "event": "Eight fictional corrective actions receive owners, deadlines, dependencies, evidence, validation, escalation, and governance review dates.",
    "meaning": "Lessons become accountable work."
  },
  {
    "time": "Day 30",
    "source": "First follow-up",
    "event": "Identity, artifact, recovery, source-health, role, communication, and playbook actions show evidence of completion; one vendor action remains blocked.",
    "meaning": "Action status is tested rather than self-reported."
  },
  {
    "time": "Day 45",
    "source": "Exercise",
    "event": "A fictional tabletop and recovery simulation re-test authority, source delay, containment, communication correction, rollback, and handoff.",
    "meaning": "Improvement is validated in practice."
  },
  {
    "time": "Day 60",
    "source": "Governance review",
    "event": "Seven actions close with evidence; one vendor dependency receives funding, monitoring, an interim control, and a new deadline.",
    "meaning": "Open risk remains visible and owned."
  },
  {
    "time": "Day 90",
    "source": "Recurrence review",
    "event": "No repeated storage, identity, artifact, source-health, recovery, or communication failure appears, and regression tests remain healthy.",
    "meaning": "The corrective program shows sustained effectiveness."
  }
];
const commonMistakes = [
  "Turning a fictional post-incident review into a search for one person to blame.",
  "Writing the review from memory or meeting discussion without sampling original evidence, timeline versions, decisions, actions, communications, tests, and business records.",
  "Naming only the direct technical cause while ignoring identity, deployment, recovery, evidence, business, ownership, and governance conditions.",
  "Listing vague lessons such as improve monitoring, communicate better, or train staff without exact scope, owner, deadline, evidence, and validation.",
  "Treating a completed ticket, policy update, or meeting as proof that a corrective action reduced risk.",
  "Closing corrective actions without positive, negative, source-health, business, recovery, exercise, or governance validation.",
  "Declaring residual risk zero after recovery and forgetting recurrence, regression, source-health, exception, and reopen monitoring.",
  "Publishing real systems, users, identities, logs, files, routes, contacts, owners, actions, metrics, or private incident-review records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the purpose of a fictional blameless post-incident review?",
    "choices": [
      "Understand evidence, causes, conditions, response quality, remaining risk, and improvements without personal blame.",
      "Identify one person to punish.",
      "Rewrite the timeline.",
      "Close every action immediately."
    ],
    "answer": 0,
    "explanation": "A blameless review focuses on how systems and decisions can improve."
  },
  {
    "question": "Which statement best distinguishes a direct cause from a contributing condition?",
    "choices": [
      "A direct cause immediately produced the event, while a contributing condition increased likelihood, duration, scope, or impact.",
      "They are always identical.",
      "A contributing condition is never important.",
      "A direct cause requires no evidence."
    ],
    "answer": 0,
    "explanation": "Both matter, but they describe different relationships to the event."
  },
  {
    "question": "What makes a fictional corrective action strong?",
    "choices": [
      "Exact scope, owner, deadline, dependency, evidence, completion criteria, validation, escalation, and governance review.",
      "A general recommendation.",
      "A closed ticket.",
      "A policy statement with no test."
    ],
    "answer": 0,
    "explanation": "Strong actions are specific, measurable, owned, and validated."
  },
  {
    "question": "Why should the review include what worked well?",
    "choices": [
      "Successful evidence, containment, continuity, communication, recovery, and ownership practices should be preserved and repeated.",
      "Only failures matter.",
      "It makes the report shorter.",
      "Success eliminates residual risk."
    ],
    "answer": 0,
    "explanation": "Learning includes preserving effective practices, not only correcting gaps."
  },
  {
    "question": "What should happen when an action misses its deadline?",
    "choices": [
      "Escalate the delay, reassess risk, preserve interim controls, assign a decision owner, and set evidence-led next steps.",
      "Hide it from the dashboard.",
      "Close it anyway.",
      "Remove the owner."
    ],
    "answer": 0,
    "explanation": "Overdue actions remain active risk and require accountable decisions."
  },
  {
    "question": "What proves a fictional lesson was effective?",
    "choices": [
      "Re-testing, exercises, metrics, sampled evidence, business outcomes, owner acceptance, and reduced recurrence or risk.",
      "A meeting occurred.",
      "The document was approved.",
      "No one reported a problem for one day."
    ],
    "answer": 0,
    "explanation": "Effectiveness requires evidence that the improvement works in practice."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional reviews, evidence, systems, identities, actions, metrics, owners, timelines, and organizations.",
      "Publish real incident-review notes.",
      "Include internal action owners and system names.",
      "Reuse private dashboards."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate review skill without exposing real incident information."
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
        Improvement Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Case from Recovery Exit to Recurrence Review
      </h2>

      <div className="mt-6 grid gap-3">
        {reviewTimeline.map((item) => (
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

export default function PostIncidentReviewAndLessonsLearnedPage() {
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
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.7 Post-Incident Review and Lessons Learned
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams conduct a blameless,
            evidence-led review of causes, controls, response performance,
            business outcomes, communication, recovery, metrics, residual risk,
            and corrective actions—then validate whether the lessons actually
            reduce recurrence and improve future response.
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
          lessonTitle="Post-Incident Review and Lessons Learned"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will conduct a fictional blameless review focused on systems, conditions, evidence, decisions, and process rather than personal attack.",
            "I will distinguish direct causes, contributing conditions, control gaps, response gaps, evidence limitations, and unrelated observations.",
            "I will connect every important finding and lesson to the evidence index, timeline, source health, decisions, actions, communications, tests, and business outcomes.",
            "I will create corrective actions with owners, deadlines, dependencies, evidence, validation, escalation, and governance follow-up.",
            "I will use only supplied fictional systems, users, identities, logs, files, actions, metrics, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Lesson Is Not Learned Because It Appears in a Report"
        >
          <p className="leading-8">
            A fictional team writes that monitoring should improve, recovery
            should be safer, and communication should be clearer. Three months
            later, the same delayed source, old recovery image, unclear backup
            authority, and silent message correction return. The report existed,
            but the lessons were not converted into owned actions, tested
            controls, trustworthy metrics, governance decisions, and recurrence
            monitoring.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>

              <p className="mt-2 leading-7">
                Blame one responder, summarize from memory, list vague lessons,
                close actions after meetings, and measure success only by how
                fast the original case closed.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>

              <p className="mt-2 leading-7">
                Sample evidence, classify causes and gaps, preserve strengths,
                assign measurable actions, re-test controls, track residual
                risk, and review recurrence over time.
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
          title="The Review Converts One Response Case into Long-Term Defensive Improvement"
        >
          <p className="leading-8">
            Fictional teams may restore service successfully yet still preserve
            weak identities, unhealthy evidence sources, misleading metrics,
            unclear authority, incomplete recovery assets, or overdue actions.
            A disciplined review identifies technical and organizational
            causes, measures response quality, creates accountable improvements,
            and verifies whether those changes protect future operations.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Review Scope"
          title="Eight Domains for a Complete Post-Incident Review"
          items={reviewDomains}
        />

        <DetailSection
          eyebrow="Cause Analysis"
          title="Eight Categories of Technical and Organizational Conditions"
          items={causeCategories}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Evidence–Cause–Performance–Action–Validation–Governance Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Evidence", "Which fictional originals, timeline events, source-health records, decisions, actions, communications, tests, and business outcomes support the review?"],
              ["Cause", "Which fictional direct causes, contributing conditions, control gaps, response gaps, evidence limitations, and unrelated observations exist?"],
              ["Performance", "How well did fictional triage, scope, containment, evidence, communication, recovery, continuity, ownership, and closure meet expectations?"],
              ["Action", "Which fictional preventive, detective, response, business, ownership, training, metric, policy, and governance improvements are required?"],
              ["Validation", "Which fictional re-test, exercise, metric, sample, business result, source-health result, and owner approval prove improvement?"],
              ["Governance", "Which fictional leader, owner, review date, threshold, funding, risk decision, escalation, residual risk, and reopen trigger remain accountable?"],
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
          eyebrow="Response Performance"
          title="Eight Areas to Measure and Improve"
          items={performanceAreas}
        />

        <DetailSection
          eyebrow="Corrective Actions"
          title="Eight Types of Improvement Work"
          items={correctiveActionTypes}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Post-Incident Review and Lessons-Learned Terms
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
          title="Fake Post-Incident Improvement Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Corrective actions validated",
              value: "7 of 8",
              note: "Fictional technical, evidence, recovery, role, communication, exercise, and governance actions with sampled completion proof.",
            },
            {
              label: "Overdue high-risk actions",
              value: "1",
              note: "A fictional vendor dependency remains open with interim control, funding, owner, deadline, and escalation.",
            },
            {
              label: "Recurrence indicators",
              value: "0",
              note: "No fictional repeated storage, identity, artifact, source-health, recovery, or communication failure during the current review window.",
            },
          ]}
        />

        <FakeAlertCard
          title="Three Lessons Marked Complete without Re-Test Evidence"
          severity="High"
          time="Day 30 9:10 AM"
          source="Fake Improvement Governance Console"
          details="A fictional action dashboard marks source-health monitoring, backup authority, and recovery-image alignment complete because documents were updated. No missing-event test, authority exercise, restore test, runtime comparison, or owner validation is attached."
          recommendation="Reopen the three actions; connect each to the original finding and residual risk; define exact validation; run the source-health, authority, recovery, positive, negative, rollback, and handoff checks; preserve results and limitations; assign owners and deadlines; escalate blocked dependencies; update metrics only after sampled evidence; and require governance approval before final closure."
        />

        <FakeLogPanel
          title="Fake Lessons-Learned Follow-Up Timeline"
          logs={[
            "D14 RECOVERY_EXIT service='stable' residual_risk='low'",
            "D15 REVIEW charter='approved' blameless='required'",
            "D16 EVIDENCE originals='sampled' timeline='reproduced'",
            "D17 CAUSE prefix='broad' identity='shared' artifact='mutable' source='delayed'",
            "D18 RESPONSE strengths='triage,containment' gaps='authority,recovery,correction'",
            "D19 BUSINESS fallback='effective' support_guidance='initially_incomplete'",
            "D20 ACTIONS total='8' owners='assigned' validation='defined'",
            "D22 METRICS closure_speed='replaced' recurrence='added'",
            "D30 FOLLOWUP validated='7' vendor_dependency='blocked'",
            "D45 EXERCISE authority='pass' source_delay='pass' rollback='pass'",
            "D60 GOVERNANCE actions_closed='7' interim_control='active'",
            "D90 RECURRENCE repeated_condition='none' regression='healthy'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Post-Incident Conclusion Is Best Supported?"
          evidence={[
            "The fictional broad storage prefix and shared identity directly enabled the unsafe access boundary.",
            "A mutable artifact, unsupported image, stale recovery asset, and delayed source increased recovery and evidence risk.",
            "Triage, narrow containment, business fallback, and staged recovery performed effectively.",
            "Backup authority, communication correction, source-health readiness, and recovery alignment were incomplete at first.",
            "Eight corrective actions were assigned with evidence and validation; seven passed re-testing.",
            "One vendor dependency remains open with an interim control, owner, funding, monitoring, and deadline.",
            "No recurrence indicator appears through the ninety-day review window.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional event resulted from connected technical and organizational causes; several response practices worked well; targeted actions reduced risk, but one vendor dependency remains as visible residual risk under governance review.",
            "One responder caused the entire incident.",
            "All risk is permanently eliminated because no recurrence appeared for ninety days.",
            "The review can close every action because documents were updated.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves multiple causes, successful practices, validated improvement, open dependency, residual risk, and review limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Post-Incident Reviews"
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
          title="Build a Fictional Post-Incident Review and Lessons-Learned Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Lessons Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review sixty-six supplied fictional records covering final
                scope, evidence, source health, timeline, causes, controls,
                decisions, actions, containment, business fallback,
                communication, corrections, recovery, tests, observation,
                support, metrics, exceptions, residual risk, governance, and
                recurrence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create the fictional review charter, final event summary, and evidence index.</li>
                <li>Classify direct causes, contributing conditions, control gaps, response gaps, evidence limits, and strengths.</li>
                <li>Evaluate triage, scope, containment, evidence, communication, recovery, continuity, business, and governance performance.</li>
                <li>Create corrective actions with owners, deadlines, dependencies, evidence, validation, escalation, and review.</li>
                <li>Build the metric plan, residual-risk record, governance dashboard, recurrence checks, and closure criteria.</li>
                <li>Produce a blameless executive summary and portfolio-safe lessons-learned package.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, identify,
            contact, publish, request, or expose real systems, users, identities,
            logs, files, routes, contacts, owners, metrics, actions, or private
            incident-review records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Leader Wants One Person Named as the Cause"
          scenario="A fictional leader asks the review team to identify the responder responsible for the event, even though evidence shows connected design, identity, configuration, recovery, monitoring, and governance conditions."
          choices={[
            {
              label: "Choice A",
              response:
                "Use blameless evidence-led language, classify the direct causes and contributing conditions, preserve decision context, identify system improvements, and assign accountable corrective actions.",
              outcome:
                "Best defensive choice. It improves the system without hiding responsibility for action ownership.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Choose the person who made the latest change.",
              outcome:
                "Unsupported. The evidence shows several connected conditions.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Avoid discussing causes at all.",
              outcome:
                "Weak. A blameless review still requires clear cause analysis.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Action Is Marked Complete after a Policy Update"
          scenario="A fictional source-health action is marked complete because the monitoring policy was updated, but no missing-event test or delayed-source exercise was performed."
          choices={[
            {
              label: "Choice A",
              response:
                "Reopen the action, run the defined source-health and missing-event tests, preserve results, validate alternate evidence, assign owners and deadlines, and close only after evidence and governance review.",
              outcome:
                "Best defensive choice. Documentation alone does not prove control effectiveness.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep it closed because the policy is approved.",
              outcome:
                "Weak. Approval is not evidence that the control works.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the action from the report.",
              outcome:
                "Unsafe. The unresolved risk would become invisible.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Post-Incident Review and Lessons-Learned Checklist"
          items={[
            "I define a fictional blameless review charter with purpose, scope, participants, evidence, questions, schedule, privacy, outputs, and approvals.",
            "I reconstruct final event scope, classification, severity, business effect, containment, recovery, observation, residual risk, and closure from evidence.",
            "I separate direct causes, contributing conditions, control gaps, response gaps, evidence limitations, unrelated observations, and successful practices.",
            "I evaluate triage, scope, containment, evidence, communication, recovery, business continuity, ownership, timing, metrics, and governance.",
            "I connect every finding and lesson to the evidence index, source health, timeline, decisions, actions, communications, tests, and business outcomes.",
            "I create corrective actions with exact scope, owner, deadline, dependency, priority, evidence, completion criteria, validation, escalation, and review.",
            "I validate improvements through re-tests, exercises, sampled evidence, metrics, business outcomes, source health, owner acceptance, and recurrence monitoring.",
            "I preserve residual risk, open dependencies, exceptions, interim controls, funding, monitoring, review dates, and reopen triggers.",
            "I require governance follow-up for actions, metrics, policy, playbooks, resources, risk, closure, and recurrence.",
            "I use only fictional information and never expose real systems, users, identities, logs, files, routes, contacts, owners, actions, metrics, or private review records.",
          ]}
        />

        <MiniQuiz
          title="I11.7 Mini Quiz: Post-Incident Review and Lessons Learned"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Post-Incident Review and Lessons-Learned Package using at least sixty-six final-scope, evidence, source-health, timeline, cause, control, decision, action, containment, business-fallback, communication, correction, recovery, test, observation, support, metric, exception, residual-risk, governance, and recurrence records. Include a review charter, final event summary, cause matrix, performance review, strengths, gaps, corrective-action register, validation plan, metric guide, residual-risk statement, governance dashboard, recurrence review, closure checklist, and portfolio-safe executive summary."
          tips={[
            "Use only clearly fictional systems, identities, logs, files, routes, contacts, owners, actions, metrics, timelines, organizations, and decisions.",
            "Use blameless language while preserving accountable owners for corrective actions and governance decisions.",
            "Show what worked, what failed, why it failed, what changed, how the change was tested, and what risk remains.",
            "Do not include real incident-review notes, system names, user identities, internal contacts, logs, filenames, actions, metrics, dashboards, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A fictional post-incident review should be blameless, evidence-led, limitation-aware, and focused on system improvement rather than personal attack.",
            "Direct causes, contributing conditions, control gaps, response gaps, evidence limitations, and unrelated observations should remain distinct.",
            "A lesson becomes meaningful only when it creates a specific action with owner, deadline, evidence, validation, escalation, and governance review.",
            "Post-incident performance should include scope accuracy, evidence quality, containment effects, recovery safety, business outcomes, communication, ownership, and residual risk.",
            "Re-tests, exercises, sampled evidence, trustworthy metrics, business validation, and recurrence monitoring prove whether improvement works.",
            "Open dependencies and residual risk should remain visible through interim controls, funding, ownership, deadlines, review dates, and reopen triggers.",
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