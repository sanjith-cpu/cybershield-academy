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
const previousPage = modulePath;
const nextLesson = `${modulePath}/detection-triage-and-initial-assessment`;

const objectives = [
  "Explain the fictional incident-response lifecycle from preparation through detection, triage, containment, investigation, eradication, recovery, post-incident review, governance, and closure.",
  "Define fictional incident-response authority, roles, escalation, severity, evidence sources, communication, continuity, safety boundaries, and decision rights before an event occurs.",
  "Distinguish fictional alerts, suspicious activity, confirmed security events, operational failures, evidence gaps, and incidents without overstating what early evidence proves.",
  "Build a fictional readiness program that connects people, processes, technology, business workflows, evidence quality, and closure standards.",
  "Create a professional fictional Incident Response Readiness Charter, role matrix, evidence-source register, escalation map, playbook inventory, exercise plan, and portfolio-safe artifact."
];
const vocabulary = [
  [
    "Incident response",
    "A fictional coordinated defensive process for preparing, detecting, assessing, containing, investigating, eradicating, recovering, communicating, reviewing, and improving after a possible security event."
  ],
  [
    "Readiness",
    "The fictional state in which authority, roles, evidence sources, playbooks, tools, communication, continuity, exercises, and closure standards are prepared and tested before an event."
  ],
  [
    "Alert",
    "A fictional signal from a tool, user, service, workflow, or control that requires review but does not automatically prove an incident."
  ],
  [
    "Security event",
    "A fictional observable occurrence related to an asset, identity, service, data flow, file, transaction, control, or source that may require analysis."
  ],
  [
    "Incident",
    "A fictional confirmed or sufficiently supported security condition requiring coordinated response because confidentiality, integrity, availability, accountability, continuity, or trust may be affected."
  ],
  [
    "Severity",
    "A fictional response category describing urgency, consequence, scope, business impact, evidence confidence, and required coordination."
  ],
  [
    "Escalation",
    "A fictional transfer of attention, authority, communication, funding, or decision-making when risk, scope, impact, uncertainty, or delay exceeds a defined threshold."
  ],
  [
    "Playbook",
    "A fictional repeatable response guide for a defined event type, including evidence, decisions, owners, communications, actions, validation, and closure."
  ],
  [
    "Evidence source",
    "A fictional system or record that can support response decisions, such as logs, alerts, transactions, files, identity events, support records, deployment data, or business systems."
  ],
  [
    "Source health",
    "The fictional availability, timeliness, completeness, parsing, retention, access, and ownership quality of an evidence source."
  ],
  [
    "Decision right",
    "The fictional authority granted to a role to approve containment, communication, recovery, exception, risk acceptance, or closure actions."
  ],
  [
    "Closure standard",
    "The fictional technical, operational, business, evidence, communication, residual-risk, and ownership conditions required before ending a response case."
  ]
];
const lifecycleStages = [
  {
    "title": "Preparation and readiness",
    "summary": "Establish fictional authority, scope, roles, playbooks, evidence, tools, communication, continuity, exercises, and closure standards before an event.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for preparation and readiness."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to preparation and readiness."
      ],
      [
        "Failure mode",
        "Do not advance through preparation and readiness when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Detection and intake",
    "summary": "Receive fictional signals from tools, users, services, transactions, support records, vendors, or business systems without treating the first signal as proof.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for detection and intake."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to detection and intake."
      ],
      [
        "Failure mode",
        "Do not advance through detection and intake when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Triage and initial assessment",
    "summary": "Classify the fictional signal as operational, benign, suspicious, evidence-limited, security-relevant, or incident-related using correlated evidence.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for triage and initial assessment."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to triage and initial assessment."
      ],
      [
        "Failure mode",
        "Do not advance through triage and initial assessment when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Scoping and containment",
    "summary": "Determine which fictional assets, identities, users, data, services, workflows, environments, and time windows are affected while applying narrow controls.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for scoping and containment."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to scoping and containment."
      ],
      [
        "Failure mode",
        "Do not advance through scoping and containment when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Investigation and coordination",
    "summary": "Build a fictional evidence index and timeline, test competing explanations, assign owners, communicate facts and uncertainty, and record decisions.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for investigation and coordination."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to investigation and coordination."
      ],
      [
        "Failure mode",
        "Do not advance through investigation and coordination when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Eradication and recovery",
    "summary": "Correct fictional root causes, remove unsafe conditions, restore approved services safely, verify identities and configurations, and monitor for recurrence.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for eradication and recovery."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to eradication and recovery."
      ],
      [
        "Failure mode",
        "Do not advance through eradication and recovery when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Post-incident review",
    "summary": "Review fictional causes, controls, evidence quality, decisions, communication, recovery, metrics, residual risk, and improvement opportunities without assigning blame.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for post-incident review."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to post-incident review."
      ],
      [
        "Failure mode",
        "Do not advance through post-incident review when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  },
  {
    "title": "Closure and continuous improvement",
    "summary": "Close the fictional case only when technical, operational, business, evidence, communication, residual-risk, documentation, and ownership criteria are complete.",
    "details": [
      [
        "Required work",
        "Define the fictional objectives, evidence, owners, decision points, communication, continuity, safety limits, and exit conditions for closure and continuous improvement."
      ],
      [
        "Evidence",
        "Use current fictional asset, identity, data, service, log, alert, transaction, file, deployment, source-health, business, and owner records relevant to closure and continuous improvement."
      ],
      [
        "Failure mode",
        "Do not advance through closure and continuous improvement when the conclusion exceeds the evidence, source health is unknown, ownership is missing, or legitimate workflows and rollback are not considered."
      ]
    ]
  }
];
const readinessDomains = [
  {
    "title": "Authority and governance",
    "summary": "Define who may declare a fictional incident, approve containment, authorize communication, accept residual risk, restore service, and close the case.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for authority and governance."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting authority and governance."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in authority and governance and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Asset and business context",
    "summary": "Maintain fictional visibility into assets, environments, identities, data, services, dependencies, critical dates, continuity, and owners.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for asset and business context."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting asset and business context."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in asset and business context and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Evidence and source health",
    "summary": "Ensure fictional logs, alerts, metrics, traces, transactions, files, identity records, deployment data, and business records are available and trustworthy.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for evidence and source health."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting evidence and source health."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in evidence and source health and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Roles and staffing",
    "summary": "Prepare fictional primary and backup responders with clear responsibilities, skills, contact methods, handoff rules, access, and fatigue management.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for roles and staffing."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting roles and staffing."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in roles and staffing and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Playbooks and decision support",
    "summary": "Create fictional playbooks for common event types while preserving evidence-based judgment, alternatives, and escalation.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for playbooks and decision support."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting playbooks and decision support."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in playbooks and decision support and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Communication and escalation",
    "summary": "Prepare fictional technical, business, leadership, support, partner, and closure communications with privacy-aware detail.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for communication and escalation."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting communication and escalation."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in communication and escalation and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Containment and continuity",
    "summary": "Prepare fictional narrow, reversible options that reduce risk while preserving evidence and critical school operations.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for containment and continuity."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting containment and continuity."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in containment and continuity and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  },
  {
    "title": "Recovery and closure",
    "summary": "Define fictional restoration order, tests, observation, source health, business validation, residual risk, lessons, and reopen criteria.",
    "details": [
      [
        "Include",
        "Document exact fictional scope, primary and backup owners, evidence sources, access, decision rights, review dates, failure conditions, and dependencies for recovery and closure."
      ],
      [
        "Readiness evidence",
        "Preserve fictional charters, inventories, policies, source-health checks, exercises, owner confirmations, business records, and action history supporting recovery and closure."
      ],
      [
        "Exercise",
        "Run a safe fictional scenario that creates ambiguity or failure in recovery and closure and require the team to identify gaps, assign actions, validate corrections, and re-test."
      ]
    ]
  }
];
const severityModel = [
  {
    "title": "Severity 1 — Critical",
    "summary": "Fictional evidence supports severe and urgent risk to critical services, privileged identities, sensitive data, safety, continuity, or broad business operations.",
    "details": [
      [
        "Typical indicators",
        "Use fictional scope, affected users and services, identity privilege, data sensitivity, continuity, observed impact, evidence confidence, and required coordination to support severity 1 — critical."
      ],
      [
        "Response expectation",
        "Assign an incident lead, owners, evidence and communication cadence, containment, business involvement, recovery planning, escalation, and review appropriate to severity 1 — critical."
      ],
      [
        "Caution",
        "Do not choose severity 1 — critical from a tool label alone or hide uncertainty, source-health problems, business context, or evidence limitations."
      ]
    ]
  },
  {
    "title": "Severity 2 — High",
    "summary": "Fictional evidence supports significant risk or confirmed limited impact requiring urgent multi-team response and short decision timelines.",
    "details": [
      [
        "Typical indicators",
        "Use fictional scope, affected users and services, identity privilege, data sensitivity, continuity, observed impact, evidence confidence, and required coordination to support severity 2 — high."
      ],
      [
        "Response expectation",
        "Assign an incident lead, owners, evidence and communication cadence, containment, business involvement, recovery planning, escalation, and review appropriate to severity 2 — high."
      ],
      [
        "Caution",
        "Do not choose severity 2 — high from a tool label alone or hide uncertainty, source-health problems, business context, or evidence limitations."
      ]
    ]
  },
  {
    "title": "Severity 3 — Medium",
    "summary": "Fictional evidence supports a contained or limited security-relevant condition requiring structured investigation and planned coordination.",
    "details": [
      [
        "Typical indicators",
        "Use fictional scope, affected users and services, identity privilege, data sensitivity, continuity, observed impact, evidence confidence, and required coordination to support severity 3 — medium."
      ],
      [
        "Response expectation",
        "Assign an incident lead, owners, evidence and communication cadence, containment, business involvement, recovery planning, escalation, and review appropriate to severity 3 — medium."
      ],
      [
        "Caution",
        "Do not choose severity 3 — medium from a tool label alone or hide uncertainty, source-health problems, business context, or evidence limitations."
      ]
    ]
  },
  {
    "title": "Severity 4 — Low",
    "summary": "Fictional evidence supports a minor, low-consequence, well-controlled, or largely informational condition that still requires ownership and documentation.",
    "details": [
      [
        "Typical indicators",
        "Use fictional scope, affected users and services, identity privilege, data sensitivity, continuity, observed impact, evidence confidence, and required coordination to support severity 4 — low."
      ],
      [
        "Response expectation",
        "Assign an incident lead, owners, evidence and communication cadence, containment, business involvement, recovery planning, escalation, and review appropriate to severity 4 — low."
      ],
      [
        "Caution",
        "Do not choose severity 4 — low from a tool label alone or hide uncertainty, source-health problems, business context, or evidence limitations."
      ]
    ]
  },
  {
    "title": "Pending assessment",
    "summary": "The fictional team cannot assign reliable severity because critical scope, source-health, identity, data, impact, or business evidence is missing.",
    "details": [
      [
        "Typical indicators",
        "Use fictional scope, affected users and services, identity privilege, data sensitivity, continuity, observed impact, evidence confidence, and required coordination to support pending assessment."
      ],
      [
        "Response expectation",
        "Assign an incident lead, owners, evidence and communication cadence, containment, business involvement, recovery planning, escalation, and review appropriate to pending assessment."
      ],
      [
        "Caution",
        "Do not choose pending assessment from a tool label alone or hide uncertainty, source-health problems, business context, or evidence limitations."
      ]
    ]
  }
];
const readinessArtifacts = [
  {
    "title": "Incident response charter",
    "summary": "Defines fictional purpose, authority, scope, principles, decision rights, severity model, roles, escalation, evidence, communication, continuity, review cadence, and closure.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for incident response charter."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing incident response charter."
      ],
      [
        "Exercise",
        "Use incident response charter during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Role and contact matrix",
    "summary": "Maps fictional primary and backup responders to responsibilities, contact methods, access, decision rights, handoff requirements, and escalation.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for role and contact matrix."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing role and contact matrix."
      ],
      [
        "Exercise",
        "Use role and contact matrix during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Evidence-source register",
    "summary": "Documents fictional logs, alerts, metrics, traces, identity events, transactions, files, deployments, business records, owners, retention, and source health.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for evidence-source register."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing evidence-source register."
      ],
      [
        "Exercise",
        "Use evidence-source register during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Playbook inventory",
    "summary": "Tracks fictional playbooks for identity anomalies, unusual files, service disruption, data-access concerns, vendor alerts, source failures, and recovery problems.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for playbook inventory."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing playbook inventory."
      ],
      [
        "Exercise",
        "Use playbook inventory during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Communication plan",
    "summary": "Defines fictional audience, owner, approval, content, cadence, privacy, correction, and archiving rules for technical, business, leadership, support, and closure updates.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for communication plan."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing communication plan."
      ],
      [
        "Exercise",
        "Use communication plan during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Containment and continuity catalog",
    "summary": "Lists fictional narrow controls, fallback workflows, monitoring, rollback, owner, approval, expiry, and known tradeoffs.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for containment and continuity catalog."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing containment and continuity catalog."
      ],
      [
        "Exercise",
        "Use containment and continuity catalog during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Exercise and training plan",
    "summary": "Schedules fictional tabletop, evidence, technical, communication, handoff, source-health, containment, and recovery exercises.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for exercise and training plan."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing exercise and training plan."
      ],
      [
        "Exercise",
        "Use exercise and training plan during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  },
  {
    "title": "Closure and improvement checklist",
    "summary": "Defines fictional technical, operational, business, evidence, communication, residual-risk, lesson, ownership, and governance requirements for closure.",
    "details": [
      [
        "Minimum contents",
        "Include fictional purpose, scope, owners, backups, decision rights, evidence, tests, communication, review dates, limitations, and approval history for closure and improvement checklist."
      ],
      [
        "Owner",
        "Assign a named fictional program, technical, business, evidence, communications, operations, or risk owner responsible for maintaining and reviewing closure and improvement checklist."
      ],
      [
        "Exercise",
        "Use closure and improvement checklist during a fictional ambiguous event and verify that another reviewer can make the same evidence-based decisions and identify missing information."
      ]
    ]
  }
];
const readinessTimeline = [
  {
    "time": "Month 1",
    "source": "Program charter",
    "event": "A fictional district defines incident authority, severity, roles, evidence standards, communication, continuity, and closure.",
    "meaning": "The response program has an approved operating model."
  },
  {
    "time": "Month 1",
    "source": "Asset review",
    "event": "Student-support portal, API, preview worker, identity service, storage, build, recovery, monitoring, and business systems enter readiness scope.",
    "meaning": "Supporting and hidden dependencies are included."
  },
  {
    "time": "Month 1",
    "source": "Source register",
    "event": "Application, identity, queue, file, transaction, deployment, source-health, support, and business records receive owners and tests.",
    "meaning": "Evidence availability becomes measurable."
  },
  {
    "time": "Month 2",
    "source": "Role exercise",
    "event": "The primary fictional incident lead is unavailable, and the backup assumes control using the role matrix and case template.",
    "meaning": "Backup authority and handoff are tested."
  },
  {
    "time": "Month 2",
    "source": "Source-health drill",
    "event": "One log source is delayed, a missing-event alert fires, and analysts use identity, transaction, and business records as alternate evidence.",
    "meaning": "The team detects and manages an evidence gap."
  },
  {
    "time": "Month 2",
    "source": "Containment exercise",
    "event": "A fictional preview workflow is paused while unrelated support functions and evidence delivery remain active.",
    "meaning": "Containment is narrow, reversible, and continuity-aware."
  },
  {
    "time": "Month 3",
    "source": "Communication drill",
    "event": "Analyst, teacher, leadership, and support updates use consistent facts with different levels of detail.",
    "meaning": "Audience tailoring does not change the underlying truth."
  },
  {
    "time": "Month 3",
    "source": "Recovery exercise",
    "event": "A fictional corrected artifact fails one business validation gate and the team performs a tested rollback.",
    "meaning": "Recovery and rollback readiness are demonstrated."
  },
  {
    "time": "Month 3",
    "source": "After-action review",
    "event": "The team identifies stale owner records, one untested source, unclear exception approval, and an outdated communication template.",
    "meaning": "Exercises produce concrete improvement actions."
  },
  {
    "time": "Month 4",
    "source": "Governance review",
    "event": "Owners complete corrective actions, rerun failed checks, update playbooks, and approve the next exercise cycle.",
    "meaning": "Readiness becomes continuous rather than one-time documentation."
  }
];
const commonMistakes = [
  "Waiting for a fictional incident before defining authority, roles, evidence access, communication, continuity, escalation, and closure.",
  "Treating the first alert as confirmed compromise or broad impact.",
  "Building readiness scope around only public or production assets while excluding workers, identities, data, recovery, vendors, build systems, and evidence sources.",
  "Listing names in a role matrix without decision rights, backups, access, handoff, after-hours contact, or review dates.",
  "Assuming logs exist without testing delivery, timestamp quality, parsing, retention, access, ownership, and missing-event detection.",
  "Creating rigid playbooks that force one conclusion instead of supporting evidence-based decisions and escalation.",
  "Preparing technical communication only and ignoring business, leadership, support, partner, and closure audiences.",
  "Using containment options that are broad, irreversible, untested, unmonitored, or harmful to critical workflows.",
  "Running exercises without objectives, observers, success criteria, actions, owners, deadlines, and re-testing.",
  "Closing readiness findings when documentation is written rather than when exercises prove the process works.",
  "Treating severity as a scanner label instead of a response decision combining scope, impact, confidence, business context, and coordination needs.",
  "Publishing real contact lists, architecture, evidence sources, playbooks, owners, systems, routes, logs, or private response details in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the primary purpose of incident-response readiness?",
    "choices": [
      "Prepare fictional authority, roles, evidence, playbooks, communication, continuity, exercises, and closure standards before an event.",
      "Guarantee incidents never occur.",
      "Replace asset inventory.",
      "Publish every alert immediately."
    ],
    "answer": 0,
    "explanation": "Readiness reduces confusion and delay by preparing people, process, evidence, and decisions before pressure arrives."
  },
  {
    "question": "Which statement about a fictional alert is strongest?",
    "choices": [
      "It is a signal requiring review and does not automatically prove an incident, impact, or compromise.",
      "It proves the organization is compromised.",
      "It always has the correct severity.",
      "It can be deleted after copying the title."
    ],
    "answer": 0,
    "explanation": "The original alert should be preserved and validated using asset, source-health, technical, and business evidence."
  },
  {
    "question": "What should a decision-rights matrix define?",
    "choices": [
      "Who may declare a case, approve containment, communicate, restore service, accept residual risk, and close.",
      "Only job titles.",
      "Only scanner access.",
      "Only business hours."
    ],
    "answer": 0,
    "explanation": "Readiness requires explicit authority, not only names or team labels."
  },
  {
    "question": "Why should source health be part of readiness?",
    "choices": [
      "Missing, delayed, incomplete, or misparsed evidence can make triage, scope, recovery, and closure conclusions unreliable.",
      "Healthy sources prove every event is malicious.",
      "Source health replaces analysis.",
      "Only auditors need source health."
    ],
    "answer": 0,
    "explanation": "A response team must know whether its evidence sources are trustworthy."
  },
  {
    "question": "What makes fictional containment ready for use?",
    "choices": [
      "It is narrow, reversible, tested, monitored, owned, continuity-aware, evidence-preserving, and connected to rollback and expiry.",
      "It disables every system.",
      "It has no business review.",
      "It is improvised during the event."
    ],
    "answer": 0,
    "explanation": "Prepared containment should reduce risk without creating unnecessary harm or evidence loss."
  },
  {
    "question": "What is the strongest exercise outcome?",
    "choices": [
      "Specific evidence-backed gaps become assigned actions with owners, deadlines, re-testing, and governance review.",
      "Participants say the exercise felt useful.",
      "No one identifies a problem.",
      "The scenario ends quickly."
    ],
    "answer": 0,
    "explanation": "Exercises create value when they produce measurable improvement and follow-up."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional charters, roles, systems, alerts, logs, contacts, exercises, dashboards, and organizations.",
      "Publish real contact and on-call lists.",
      "Include internal architecture and source names.",
      "Reuse private playbooks after changing one label."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate readiness skill without exposing real response capabilities or private details."
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
        href={previousPage}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Module Homepage
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
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
                  className={`rounded-xl border p-4 ${detailStyles[index % detailStyles.length]}`}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.16em] ${labelStyles[index % labelStyles.length]}`}
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
        Readiness Improvement Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Program from Charter to Tested Readiness
      </h2>

      <div className="mt-6 grid gap-3">
        {readinessTimeline.map((item) => (
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

export default function IncidentResponseLifecycleAndReadinessPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.1 Incident Response Lifecycle and Readiness
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defensive teams prepare authority, roles,
            evidence, playbooks, communication, continuity, containment,
            recovery, exercises, severity rules, escalation, and closure before
            a possible incident creates time pressure and uncertainty.
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
          lessonTitle="Incident Response Lifecycle and Readiness"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional alert is a signal requiring review and does not automatically prove an incident or impact.",
            "I will define authority, roles, evidence sources, source health, communication, continuity, escalation, and closure before using a playbook.",
            "I will preserve confirmed facts, supported conclusions, alternatives, evidence gaps, confidence, owners, and next actions separately.",
            "I will design narrow and reversible containment that protects legitimate workflows and evidence.",
            "I will use only supplied fictional systems, users, alerts, contacts, logs, records, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The First Minutes of an Incident Are Usually Determined Months Earlier"
        >
          <p className="leading-8">
            A fictional team receives an unusual support-service alert during a
            critical school workflow. The tool marks it high severity, but the
            primary incident lead is unavailable, one evidence source is
            delayed, the business owner has not reviewed containment options,
            and no one knows who may approve a user-facing message. The response
            problem is not only technical. It is a readiness failure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak readiness
              </p>
              <p className="mt-2 leading-7">
                Wait for an event, improvise authority and containment, search
                for logs, contact whoever is available, and close when urgent
                activity slows down.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong readiness
              </p>
              <p className="mt-2 leading-7">
                Prepare roles, evidence, source-health tests, escalation,
                communication, continuity, containment, recovery, exercises,
                residual-risk review, and closure standards before the event.
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
          title="Readiness Protects Evidence, Time, People, and Critical School Operations"
        >
          <p className="leading-8">
            Fictional incidents can affect identity, communication, student
            support, reporting, files, services, and recovery. Without prepared
            roles and evidence, teams may overreact, underreact, lose records,
            provide inconsistent updates, disrupt unrelated services, or close
            too early. Readiness makes a careful response possible under
            pressure.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Lifecycle"
          title="Eight Stages from Preparation to Continuous Improvement"
          items={lifecycleStages}
        />

        <DetailSection
          eyebrow="Readiness Domains"
          title="Eight Capabilities to Prepare and Test"
          items={readinessDomains}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Authority–Evidence–Decision–Action–Validation–Learning Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Authority", "Which fictional role may activate, contain, communicate, restore, accept risk, and close?"],
              ["Evidence", "Which fictional sources support the alert, asset, identity, scope, impact, recovery, and closure?"],
              ["Decision", "Which fictional classification, severity, scope, containment, escalation, and communication is justified?"],
              ["Action", "Which fictional owner, task, deadline, dependency, control, message, recovery step, and rollback follow?"],
              ["Validation", "Which fictional tests, source-health checks, business outcomes, monitoring, and approvals prove the action worked?"],
              ["Learning", "Which fictional lessons, actions, metrics, playbook changes, exercises, and review triggers improve readiness?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DetailSection
          eyebrow="Severity and Escalation"
          title="Five Readiness Categories"
          items={severityModel}
        />

        <DetailSection
          eyebrow="Required Artifacts"
          title="Eight Documents and Registers to Prepare"
          items={readinessArtifacts}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Incident Response Lifecycle and Readiness Terms
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
          title="Fake Incident Response Readiness Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Critical services mapped",
              value: "86%",
              note: "Fictional services with owners, dependencies, evidence sources, continuity, recovery, and response playbooks.",
            },
            {
              label: "Evidence sources tested",
              value: "91%",
              note: "Fictional sources with current health tests, retention, access, parsing, ownership, and alternate evidence.",
            },
            {
              label: "Exercise actions overdue",
              value: "4",
              note: "Fictional readiness gaps awaiting owner completion, validation, and governance review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Readiness Review Finds Missing Backup Authority and Delayed Evidence Source"
          severity="High"
          time="10:15 AM"
          source="Fake Incident Readiness Console"
          details="A fictional tabletop exercise shows that the primary incident lead is unavailable, the backup has no documented containment authority, one support-service log source is delayed, and business communication approval is unclear during a critical workflow."
          recommendation="Pause the exercise decision at the appropriate gate; update the role and decision-rights matrix; assign backup authority; repair and retest source health; document alternate evidence; define business and communication approval; review narrow containment and continuity; rerun the scenario; preserve actions, owners, deadlines, and governance approval."
        />

        <FakeLogPanel
          title="Fake Readiness Exercise Timeline"
          logs={[
            "09:00 EXERCISE scenario='support_service_anomaly' objective='authority_and_evidence'",
            "09:05 ALERT source='support_monitor' severity='high' status='preserved'",
            "09:10 SOURCE_HEALTH support_logs='delayed_25m' missing_event_alert='pass'",
            "09:15 ROLE primary_incident_lead='unavailable' backup='identified'",
            "09:20 AUTHORITY backup_containment_right='not_documented'",
            "09:25 BUSINESS workflow='student_support' fallback='manual_limited'",
            "09:30 EVIDENCE identity='available' transactions='available' support_logs='delayed'",
            "09:35 CONTAINMENT proposed='pause_preview_worker' unrelated_services='preserved'",
            "09:40 COMMUNICATION leadership_approval='clear' teacher_update_approval='unclear'",
            "09:50 DECISION exercise='paused_at_gate' actions='assigned'",
            "DAY7 UPDATE role_matrix='approved' source_health='retested' communication='updated'",
            "DAY14 RERUN authority='pass' evidence_gap='managed' containment='pass'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Readiness Conclusion Is Best Supported?"
          evidence={[
            "The fictional primary incident lead is unavailable during the exercise.",
            "A backup responder is listed but has no documented containment authority.",
            "One application log source is delayed, and the missing-event alert works.",
            "Identity, transaction, and business records remain available as alternate evidence.",
            "A narrow preview-worker pause preserves unrelated support services.",
            "Leadership communication approval is documented, but teacher-facing approval is unclear.",
            "The team records actions, owners, deadlines, and a required re-test.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional program has useful evidence and containment readiness but must correct backup authority and communication approval gaps before claiming full readiness.",
            "The district is experiencing a confirmed incident.",
            "The exercise proves every response process works.",
            "The delayed log source makes all other evidence unusable.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a specific readiness assessment, not an incident declaration or a claim of complete readiness."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Incident Response Readiness"
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
          title="Build a Fictional Incident Response Readiness Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Readiness Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review fifty-eight supplied fictional records covering program
                authority, assets, services, identities, data, business
                workflows, evidence sources, source health, roles, contacts,
                playbooks, containment options, communication, continuity,
                recovery, exercises, actions, metrics, and closure standards.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create the fictional incident-response charter and safety boundary.</li>
                <li>Build the role, backup, contact, authority, access, and escalation matrix.</li>
                <li>Create the evidence-source and source-health register.</li>
                <li>Build the playbook, containment, communication, continuity, recovery, and closure inventories.</li>
                <li>Design tabletop, source-health, containment, communication, handoff, and recovery exercises.</li>
                <li>Produce a readiness dashboard, action register, executive summary, and portfolio-safe artifact.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not contact, scan, test,
            access, alter, identify, or publish real systems, users, contacts,
            credentials, logs, evidence sources, response plans, or private
            organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Primary Incident Lead Is Unavailable"
          scenario="A fictional high-priority exercise begins outside normal hours. The primary incident lead cannot respond, and the backup is listed but has no written authority to approve containment."
          choices={[
            {
              label: "Choice A",
              response: "Pause any nonessential containment decision, preserve evidence, use only preapproved protective actions, escalate through the documented authority chain, record the gap, and update and retest the backup decision rights.",
              outcome: "Best defensive choice. It protects the environment without inventing authority.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Let the backup approve any action without documentation.",
              outcome: "Risky. Urgency does not create unlimited authority.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the alert until the primary lead returns.",
              outcome: "Unsafe. Evidence preservation and preapproved protective actions may still be required.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Key Log Source Is Delayed"
          scenario="A fictional support-service log source is delayed during triage, but identity events, transactions, deployment records, and a missing-event alert remain available."
          choices={[
            {
              label: "Choice A",
              response: "Document the source-health gap, lower confidence where appropriate, preserve alternate evidence, repair the source, continue proportionate review, and avoid claiming no activity from the quiet dashboard.",
              outcome: "Best defensive choice. The team continues carefully while making the evidence limitation visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare the event benign because the delayed source shows nothing.",
              outcome: "Unsafe. Missing evidence cannot support a no-activity conclusion.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Declare confirmed compromise because one source is delayed.",
              outcome: "Unsupported. Source delay creates uncertainty, not proof of compromise.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Incident Response Lifecycle and Readiness Checklist"
          items={[
            "I define fictional purpose, authority, scope, severity, decision rights, escalation, communication, continuity, evidence, exercises, and closure.",
            "I include production, recovery, test, legacy, worker, identity, data, vendor, build, monitoring, support, and business-workflow scope where relevant.",
            "I maintain primary and backup roles with contacts, access, authority, handoff, after-hours coverage, and review dates.",
            "I test evidence-source availability, timestamps, parsing, retention, access, ownership, delay, missing-event alerts, and alternate evidence.",
            "I create playbooks that support evidence-based judgment rather than forcing one conclusion.",
            "I prepare technical, business, leadership, support, partner, and closure communication with consistent facts and appropriate detail.",
            "I prepare narrow, reversible, monitored, evidence-preserving, continuity-aware containment and rollback options.",
            "I test readiness through tabletop, evidence, communication, containment, recovery, handoff, and source-health exercises.",
            "I assign exercise findings to owners with deadlines, validation, re-testing, and governance review.",
            "I use only fictional information and never expose real contacts, architecture, evidence sources, playbooks, systems, routes, logs, or private response records.",
          ]}
        />

        <MiniQuiz
          title="I11.1 Mini Quiz: Incident Response Lifecycle and Readiness"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Incident Response Readiness Package using at least fifty-eight authority, scope, asset, service, identity, data, business, evidence-source, source-health, role, contact, playbook, containment, communication, continuity, recovery, exercise, action, metric, and closure records. Include a charter, role and decision-rights matrix, source register, playbook inventory, communication plan, containment catalog, exercise plan, readiness dashboard, action register, executive summary, and closure standard."
          tips={[
            "Use only clearly fictional organizations, systems, contacts, roles, logs, evidence sources, alerts, playbooks, exercises, metrics, and decisions.",
            "Show how authority, evidence quality, business continuity, containment, communication, recovery, and closure connect.",
            "Include backups, source-health failures, missing evidence, handoffs, failed exercise gates, corrective actions, and re-testing.",
            "Do not include real contact lists, architecture, routes, evidence-source names, logs, system details, playbooks, or private response information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional incident-response readiness prepares authority, roles, evidence, communication, continuity, containment, recovery, exercises, and closure before an event.",
            "An alert is a signal for review and does not automatically prove an incident, impact, or compromise.",
            "Readiness scope includes supporting assets such as identities, data, workers, recovery, vendors, build systems, and evidence sources.",
            "Evidence-source health must be tested because missing or delayed data can change confidence and decisions.",
            "Roles require authority, backups, access, contacts, handoffs, and decision boundaries rather than names alone.",
            "Exercises should produce evidence-backed actions, owners, deadlines, re-testing, and governance review.",
            "Professional readiness protects evidence and legitimate workflows while enabling accurate escalation, recovery, residual-risk review, and closure.",
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