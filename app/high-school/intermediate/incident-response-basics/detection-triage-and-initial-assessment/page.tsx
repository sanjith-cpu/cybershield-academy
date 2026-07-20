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
const previousLesson = `${modulePath}/incident-response-lifecycle-and-readiness`;
const nextLesson = `${modulePath}/scoping-containment-and-coordination`;

const objectives = [
  "Explain how fictional alerts move through intake, source-health review, evidence correlation, classification, severity recommendation, ownership, and next-action decisions.",
  "Distinguish fictional operational noise, expected activity, benign events, suspicious activity, evidence-limited cases, confirmed security events, and incidents.",
  "Build a defensible fictional initial assessment using asset, identity, file, transaction, service, deployment, source-health, business, and timeline evidence.",
  "Assign fictional confidence, severity, owners, containment recommendations, evidence-collection actions, communication needs, and reassessment triggers.",
  "Create a professional fictional Triage and Initial Assessment Package using only supplied records and safe, authorized defensive reasoning."
];
const vocabulary = [
  [
    "Intake",
    "The fictional process of receiving, preserving, labeling, deduplicating, assigning, and recording a new signal for review."
  ],
  [
    "Triage",
    "A fictional structured review that determines urgency, evidence quality, classification, ownership, severity recommendation, and next actions."
  ],
  [
    "Initial assessment",
    "A fictional early case summary separating confirmed facts, supported conclusions, alternatives, evidence gaps, confidence, scope, and immediate needs."
  ],
  [
    "False positive",
    "A fictional signal that appears security-relevant but is unsupported after evidence review and is better explained by expected or benign activity."
  ],
  [
    "Benign positive",
    "A fictional real event correctly detected by a control but caused by approved activity rather than harmful behavior."
  ],
  [
    "Suspicious activity",
    "A fictional condition that differs from expected behavior and deserves further review but is not yet a confirmed incident."
  ],
  [
    "Confirmed security event",
    "A fictional security-relevant occurrence supported by reliable evidence, though scope, impact, or incident status may still require investigation."
  ],
  [
    "Incident",
    "A fictional confirmed or sufficiently supported condition requiring coordinated response because security or business trust may be affected."
  ],
  [
    "Confidence",
    "A fictional statement describing how strongly the available evidence supports a conclusion and what limitations remain."
  ],
  [
    "Severity recommendation",
    "A fictional proposed response priority based on scope, consequence, confidence, business context, controls, and coordination needs."
  ],
  [
    "Evidence gap",
    "A fictional missing, delayed, conflicting, incomplete, inaccessible, or unhealthy record that limits the assessment."
  ],
  [
    "Reassessment trigger",
    "A fictional event that requires the triage decision to be reviewed again, such as new scope, impact, source health, identity, file, transaction, or business evidence."
  ]
];
const triageSteps = [
  {
    "title": "Preserve the original signal",
    "summary": "Keep the fictional alert, user report, support ticket, vendor notice, or control event unchanged and record its source, time, and identifier.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for preserve the original signal."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of preserve the original signal."
      ],
      [
        "Common failure",
        "Avoid treating preserve the original signal as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Verify source health",
    "summary": "Confirm that the fictional source is current, complete, correctly parsed, retained, accessible, and owned before relying on silence or detail.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for verify source health."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of verify source health."
      ],
      [
        "Common failure",
        "Avoid treating verify source health as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Identify the affected context",
    "summary": "Map the fictional signal to a stable asset, environment, identity, service, user, file, transaction, data set, workflow, and owner.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for identify the affected context."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of identify the affected context."
      ],
      [
        "Common failure",
        "Avoid treating identify the affected context as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Compare expected behavior",
    "summary": "Determine whether the fictional activity is normal, approved, unusual, unsupported, prohibited, or unknown for the reviewed scope and time.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for compare expected behavior."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of compare expected behavior."
      ],
      [
        "Common failure",
        "Avoid treating compare expected behavior as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Correlate independent evidence",
    "summary": "Use fictional identity, application, transaction, file, queue, deployment, network, support, and business records to test competing explanations.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for correlate independent evidence."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of correlate independent evidence."
      ],
      [
        "Common failure",
        "Avoid treating correlate independent evidence as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Classify and assign confidence",
    "summary": "Choose the narrowest fictional classification supported by current evidence and document confidence, alternatives, and gaps.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for classify and assign confidence."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of classify and assign confidence."
      ],
      [
        "Common failure",
        "Avoid treating classify and assign confidence as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Recommend severity and action",
    "summary": "Connect fictional urgency, scope, consequence, business effect, controls, uncertainty, owners, communication, and protective action.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for recommend severity and action."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of recommend severity and action."
      ],
      [
        "Common failure",
        "Avoid treating recommend severity and action as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  },
  {
    "title": "Document and hand off",
    "summary": "Create a fictional initial assessment, evidence index, open questions, action register, next update time, and reassessment triggers.",
    "details": [
      [
        "What to examine",
        "Review fictional asset, identity, time window, source health, expected behavior, related events, business workflow, and known controls for document and hand off."
      ],
      [
        "Evidence standard",
        "Use at least two relevant fictional sources when possible, preserve the original record, document confidence and limitations, and identify what additional evidence would change the assessment of document and hand off."
      ],
      [
        "Common failure",
        "Avoid treating document and hand off as confirmed impact, broad scope, or final severity when the supporting evidence is incomplete, duplicated, stale, delayed, or dependent on one source."
      ]
    ]
  }
];
const sourceTypes = [
  {
    "title": "Alert and control records",
    "summary": "Fictional monitoring, detection, prevention, authentication, policy, rate-limit, source-health, and configuration events.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to alert and control records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about alert and control records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use alert and control records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "Identity and access records",
    "summary": "Fictional sign-in, session, role, service identity, token, permission, revocation, approval, and access-decision evidence.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to identity and access records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about identity and access records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use identity and access records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "Application and service records",
    "summary": "Fictional request, response, error, workflow, job, queue, API, feature, health, and configuration evidence.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to application and service records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about application and service records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use application and service records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "File and data records",
    "summary": "Fictional upload, download, preview, export, storage, hash, metadata, retention, deletion, backup, and data-state evidence.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to file and data records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about file and data records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use file and data records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "Transaction and business records",
    "summary": "Fictional approved workflows, support cases, user actions, reports, schedules, service outcomes, and business confirmations.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to transaction and business records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about transaction and business records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use transaction and business records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "Deployment and runtime records",
    "summary": "Fictional builds, artifacts, images, versions, configurations, feature flags, service identities, runtime inventory, and recovery state.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to deployment and runtime records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about deployment and runtime records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use deployment and runtime records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "User and support reports",
    "summary": "Fictional observations from students, teachers, staff, support, vendors, or service owners with time, scope, and uncertainty.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to user and support reports, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about user and support reports when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use user and support reports alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  },
  {
    "title": "Source-health and evidence-quality records",
    "summary": "Fictional delay, missing-event, parser, retention, access, timestamp, ownership, and completeness evidence.",
    "details": [
      [
        "Useful records",
        "Collect the fictional records connected to source-health and evidence-quality records, including timestamps, source owner, expected events, retention, delay, parsing, and access history."
      ],
      [
        "Can support",
        "This source can support narrow conclusions about source-health and evidence-quality records when its health, scope, and relationship to the event are known."
      ],
      [
        "Limitations",
        "Do not use source-health and evidence-quality records alone to prove motive, full scope, production impact, or a complete incident narrative."
      ]
    ]
  }
];
const classificationModel = [
  {
    "title": "Expected or approved activity",
    "summary": "Fictional evidence shows the event matches an authorized workflow, identity, time, asset, data, and business purpose.",
    "details": [
      [
        "Definition",
        "Use the fictional expected or approved activity classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to expected or approved activity."
      ],
      [
        "Reclassify when",
        "Reassess expected or approved activity when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Benign positive",
    "summary": "The fictional control correctly detected real activity, but the activity was approved and did not violate the expected security requirement.",
    "details": [
      [
        "Definition",
        "Use the fictional benign positive classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to benign positive."
      ],
      [
        "Reclassify when",
        "Reassess benign positive when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Operational or reliability issue",
    "summary": "Fictional evidence points to service, deployment, capacity, configuration, queue, file, timing, or source-health failure rather than a security incident.",
    "details": [
      [
        "Definition",
        "Use the fictional operational or reliability issue classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to operational or reliability issue."
      ],
      [
        "Reclassify when",
        "Reassess operational or reliability issue when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Duplicate or related record",
    "summary": "The fictional signal belongs to an existing case or repeated source record and should be linked rather than counted as a separate event.",
    "details": [
      [
        "Definition",
        "Use the fictional duplicate or related record classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to duplicate or related record."
      ],
      [
        "Reclassify when",
        "Reassess duplicate or related record when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Suspicious activity",
    "summary": "The fictional behavior is unusual or inconsistent with expectations and requires more evidence, scope review, or protective action.",
    "details": [
      [
        "Definition",
        "Use the fictional suspicious activity classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to suspicious activity."
      ],
      [
        "Reclassify when",
        "Reassess suspicious activity when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Insufficient evidence",
    "summary": "The fictional team cannot classify reliably because important asset, identity, source-health, business, time, or outcome evidence is missing.",
    "details": [
      [
        "Definition",
        "Use the fictional insufficient evidence classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to insufficient evidence."
      ],
      [
        "Reclassify when",
        "Reassess insufficient evidence when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Confirmed security event",
    "summary": "Reliable fictional evidence supports a security-relevant occurrence, while full incident scope or business impact may remain uncertain.",
    "details": [
      [
        "Definition",
        "Use the fictional confirmed security event classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to confirmed security event."
      ],
      [
        "Reclassify when",
        "Reassess confirmed security event when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  },
  {
    "title": "Incident candidate",
    "summary": "The fictional evidence supports coordinated response, containment, investigation, communication, recovery, and governance even if some scope or impact remains under review.",
    "details": [
      [
        "Definition",
        "Use the fictional incident candidate classification only when the documented evidence matches its exact threshold and scope."
      ],
      [
        "Required record",
        "Preserve the facts, supported conclusion, alternatives, confidence, evidence gaps, owner, severity recommendation, and next action connected to incident candidate."
      ],
      [
        "Reclassify when",
        "Reassess incident candidate when new asset, identity, source-health, business, scope, transaction, file, or timeline evidence appears."
      ]
    ]
  }
];
const decisionPoints = [
  {
    "title": "Open a new case or link an existing case",
    "summary": "Determine whether the fictional signal represents a distinct event, duplicate record, related activity, or scope expansion.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to open a new case or link an existing case is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for open a new case or link an existing case."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when open a new case or link an existing case depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Collect more evidence or act immediately",
    "summary": "Balance fictional uncertainty, urgency, possible consequence, source health, business criticality, and available preapproved protection.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to collect more evidence or act immediately is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for collect more evidence or act immediately."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when collect more evidence or act immediately depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Escalate severity or maintain current level",
    "summary": "Use fictional scope, impact, confidence, privilege, data, service criticality, controls, and coordination needs.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to escalate severity or maintain current level is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for escalate severity or maintain current level."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when escalate severity or maintain current level depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Apply narrow containment or continue monitoring",
    "summary": "Choose fictional protective actions that are proportionate, reversible, evidence-preserving, and continuity-aware.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to apply narrow containment or continue monitoring is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for apply narrow containment or continue monitoring."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when apply narrow containment or continue monitoring depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Notify business or leadership owners",
    "summary": "Decide when fictional operational, privacy, continuity, legal, policy, or leadership attention is necessary.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to notify business or leadership owners is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for notify business or leadership owners."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when notify business or leadership owners depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Request technical-owner review",
    "summary": "Engage fictional application, platform, identity, data, network, vendor, or service owners for expected behavior and safe actions.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to request technical-owner review is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for request technical-owner review."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when request technical-owner review depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Declare an incident candidate",
    "summary": "Advance the fictional record when current evidence justifies coordinated response beyond routine triage.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to declare an incident candidate is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for declare an incident candidate."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when declare an incident candidate depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  },
  {
    "title": "Close intake or keep pending",
    "summary": "Close only when the fictional explanation, evidence, ownership, documentation, and reopen triggers are sufficient.",
    "details": [
      [
        "Decision question",
        "Ask which fictional action connected to close intake or keep pending is justified by current evidence, urgency, business context, and available authority."
      ],
      [
        "Required evidence",
        "Use the original signal, correlated sources, source health, asset and identity context, expected behavior, business effect, and documented uncertainty for close intake or keep pending."
      ],
      [
        "Stop condition",
        "Pause escalation or broad action when close intake or keep pending depends on unsupported assumptions, missing ownership, or an evidence source known to be unhealthy."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "08:40",
    "source": "Support monitor",
    "event": "A fictional alert reports repeated preview failures and one unusual service-identity access decision.",
    "meaning": "The original signal requires preservation and review but does not prove an incident."
  },
  {
    "time": "08:43",
    "source": "Source health",
    "event": "Application logs are delayed by eighteen minutes, while identity and transaction sources are current.",
    "meaning": "The team must lower confidence in application-level silence and use alternate evidence."
  },
  {
    "time": "08:46",
    "source": "Asset inventory",
    "event": "The alert maps to the fictional student-support preview worker in production, owned by the support applications team.",
    "meaning": "Stable asset and owner context are established."
  },
  {
    "time": "08:50",
    "source": "Identity records",
    "event": "The service identity uses its normal source, but requests one storage location outside its documented scope.",
    "meaning": "The behavior is unusual and security-relevant but not yet fully explained."
  },
  {
    "time": "08:55",
    "source": "Business records",
    "event": "A teacher initiated an approved preview job for an active support case at the same time.",
    "meaning": "There is a legitimate workflow that may explain part of the activity."
  },
  {
    "time": "09:00",
    "source": "Deployment record",
    "event": "A configuration update expanded a storage prefix during a maintenance window the previous evening.",
    "meaning": "A recent change provides a plausible operational or configuration explanation."
  },
  {
    "time": "09:05",
    "source": "Transaction review",
    "event": "No unrelated documents were returned, and the preview transaction failed before file retrieval completed.",
    "meaning": "Current evidence does not support confirmed data exposure."
  },
  {
    "time": "09:10",
    "source": "Technical owner",
    "event": "The storage prefix was intended for one recovery folder but was broader than the approved design.",
    "meaning": "A configuration weakness is confirmed even though harmful impact is not."
  },
  {
    "time": "09:15",
    "source": "Triage decision",
    "event": "The case is classified as a confirmed security event with medium severity, high confidence, narrow containment, and additional scope review.",
    "meaning": "The classification matches the evidence without claiming a broader incident."
  },
  {
    "time": "09:20",
    "source": "Containment",
    "event": "The identity is restricted to the approved support-case path, preview jobs continue, and monitoring is increased.",
    "meaning": "The response reduces risk while preserving legitimate workflow and evidence."
  },
  {
    "time": "09:35",
    "source": "Application logs",
    "event": "Delayed logs arrive and confirm the failed job did not read or export unrelated files.",
    "meaning": "Confidence increases and production impact remains unsupported."
  },
  {
    "time": "10:00",
    "source": "Handoff",
    "event": "The initial assessment records facts, conclusions, alternatives, gaps, severity, actions, owners, and reassessment triggers.",
    "meaning": "The investigation can continue from a complete and defensible triage package."
  }
];
const commonMistakes = [
  "Treating a fictional alert title, severity, or rule name as proof of an incident or business impact.",
  "Rewriting the original signal before preserving the raw record, source, time, identifier, and context.",
  "Using dashboard silence without checking source health, delivery delay, parsing, retention, and access.",
  "Failing to map the signal to a stable asset, environment, identity, owner, workflow, and time window.",
  "Counting repeated copies of one source as independent corroboration.",
  "Ignoring expected maintenance, approved workflows, business transactions, and operational changes that may explain activity.",
  "Closing a record as benign when important evidence is missing or conflicting.",
  "Escalating to critical severity because the activity is unusual without evidence of scope, consequence, or impact.",
  "Applying broad containment before understanding affected services, continuity, evidence needs, and rollback.",
  "Writing an initial assessment that mixes facts, conclusions, alternatives, and assumptions in one paragraph.",
  "Failing to assign evidence collection, technical review, source repair, communication, and reassessment actions to owners and deadlines.",
  "Publishing real alerts, logs, users, identities, case details, owner names, system names, routes, or private organizational information in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the first triage action after receiving a fictional alert?",
    "choices": [
      "Preserve the original signal with its source, timestamp, identifier, and context.",
      "Declare an incident.",
      "Delete duplicates immediately.",
      "Notify every stakeholder."
    ],
    "answer": 0,
    "explanation": "The original record should be preserved before interpretation or transformation."
  },
  {
    "question": "Why must source health be checked during triage?",
    "choices": [
      "Missing, delayed, incomplete, or misparsed evidence can change confidence and explain a quiet dashboard.",
      "Healthy sources prove malicious activity.",
      "Source health replaces correlation.",
      "Only auditors need source health."
    ],
    "answer": 0,
    "explanation": "Evidence quality affects what conclusions the team can safely make."
  },
  {
    "question": "Which classification is best when activity is unusual but critical evidence is still missing?",
    "choices": [
      "Suspicious activity or insufficient evidence, with collection actions and reassessment triggers.",
      "Confirmed incident.",
      "Benign positive.",
      "Closed with no action."
    ],
    "answer": 0,
    "explanation": "The classification should match the available evidence and preserve uncertainty."
  },
  {
    "question": "What makes evidence truly corroborating?",
    "choices": [
      "It comes from relevant and genuinely independent fictional sources that agree within the same scope and time window.",
      "It appears on several dashboards fed by one source.",
      "It uses the same rule name.",
      "It has a high severity color."
    ],
    "answer": 0,
    "explanation": "Copies of one source should not be treated as independent confirmation."
  },
  {
    "question": "What should an initial assessment separate?",
    "choices": [
      "Confirmed facts, supported conclusions, alternatives, evidence gaps, confidence, scope, severity, actions, and triggers.",
      "Only the final conclusion.",
      "Only the alert title and owner.",
      "Only technical details."
    ],
    "answer": 0,
    "explanation": "A clear assessment lets later reviewers reproduce and challenge the decision."
  },
  {
    "question": "When is narrow containment appropriate during triage?",
    "choices": [
      "When current evidence and possible consequence justify a reversible, monitored, evidence-preserving action that protects legitimate workflows.",
      "Whenever an alert appears.",
      "Only after final closure.",
      "When no owner is available."
    ],
    "answer": 0,
    "explanation": "Containment should be proportionate to evidence, risk, authority, and business needs."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional alerts, assets, identities, logs, transactions, users, owners, timelines, and organizations.",
      "Publish real alerts after removing one username.",
      "Include internal service names and routes.",
      "Reuse private case notes."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate triage skill without exposing real incident data or systems."
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
        Correlated Triage Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Alert from Intake to Initial Assessment
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

export default function DetectionTriageAndInitialAssessmentPage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.2 Detection, Triage, and Initial Assessment
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defensive teams preserve alerts, verify source
            health, identify affected context, compare expected behavior,
            correlate independent evidence, classify uncertainty, recommend
            severity, choose proportionate protective actions, and create a
            reviewable initial assessment.
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
          lessonTitle="Detection, Triage, and Initial Assessment"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional alert is an intake signal and does not automatically prove an incident, harmful intent, production impact, or broad scope.",
            "I will preserve the original signal and verify source health before using dashboard silence or tool detail in a conclusion.",
            "I will connect the signal to a stable asset, environment, identity, service, file, transaction, business workflow, owner, and time window.",
            "I will separate facts, supported conclusions, alternatives, evidence gaps, confidence, severity, actions, and reassessment triggers.",
            "I will use only supplied fictional alerts, logs, users, identities, files, transactions, systems, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A High-Severity Alert Can Still Produce the Wrong Response"
        >
          <p className="leading-8">
            A fictional support-service monitor reports unusual storage access
            by a preview-worker identity. The alert is high severity, but one
            log source is delayed, a teacher started an approved preview job,
            and a configuration change occurred the previous evening. Strong
            triage does not ignore the alert or assume compromise. It preserves
            the signal, tests each explanation, protects the workflow, and
            records exactly what the evidence supports.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak triage
              </p>
              <p className="mt-2 leading-7">
                Copy the alert title, accept the tool severity, declare a
                confirmed incident, disable the entire support platform, and
                notify every stakeholder.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong triage
              </p>
              <p className="mt-2 leading-7">
                Preserve the signal, verify source health, map context,
                correlate independent evidence, classify carefully, apply
                narrow protection, assign owners, and define reassessment.
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
          title="Triage Controls the Quality of Every Later Incident Decision"
        >
          <p className="leading-8">
            If the initial classification is wrong, teams may lose evidence,
            disrupt critical services, communicate unsupported claims, miss
            real scope, or close a meaningful event too early. A defensible
            initial assessment creates a shared evidence baseline for
            containment, investigation, communication, recovery, governance,
            and closure.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Triage Workflow"
          title="Eight Steps from Signal to Initial Assessment"
          items={triageSteps}
        />

        <DetailSection
          eyebrow="Evidence Sources"
          title="Eight Source Families for Correlation"
          items={sourceTypes}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Signal–Source–Context–Correlation–Classification–Action Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Signal", "What fictional alert, report, event, transaction, or control record started the review?"],
              ["Source", "Is the fictional evidence current, complete, independent, correctly parsed, retained, accessible, and owned?"],
              ["Context", "Which fictional asset, environment, identity, data, file, service, workflow, owner, and time window are involved?"],
              ["Correlation", "Which fictional independent sources support or contradict the alert and competing explanations?"],
              ["Classification", "Which fictional facts, conclusions, alternatives, gaps, confidence, severity, and scope are justified?"],
              ["Action", "Which fictional collection, protection, escalation, communication, ownership, deadline, and reassessment should follow?"],
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
          eyebrow="Classification"
          title="Eight Evidence-Based Triage Outcomes"
          items={classificationModel}
        />

        <DetailSection
          eyebrow="Decision Points"
          title="Eight Decisions That Require Evidence and Ownership"
          items={decisionPoints}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Detection, Triage, and Initial Assessment Terms
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
          title="Fake Incident Triage Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "New signals awaiting triage",
              value: "12",
              note: "Fictional alerts and reports awaiting source-health, asset, identity, business, and classification review.",
            },
            {
              label: "Evidence-limited cases",
              value: "4",
              note: "Fictional records with delayed sources, unknown assets, conflicting timestamps, or incomplete business context.",
            },
            {
              label: "Median initial assessment time",
              value: "24 min",
              note: "Fictional time from preserved intake to documented classification, confidence, ownership, and next action.",
            },
          ]}
        />

        <FakeAlertCard
          title="Preview Worker Requests Storage outside Documented Scope"
          severity="High"
          time="8:40 AM"
          source="Fake Support Service Monitor"
          details="A fictional preview-worker identity requests one storage path outside its documented scope during an approved teacher preview job. Application logs are delayed, identity and transaction sources are current, and a configuration update occurred during the previous maintenance window."
          recommendation="Preserve the alert; confirm source health; map the asset, identity, storage, workflow, owner, and change record; review expected behavior; correlate transaction and file outcomes; apply narrow least-privilege containment if justified; avoid claiming data exposure without evidence; assign technical and business owners; document confidence, gaps, severity, and reassessment triggers."
        />

        <FakeLogPanel
          title="Fake Triage Evidence Timeline"
          logs={[
            "08:40 ALERT preview_failures='repeated' identity_access='unusual'",
            "08:43 SOURCE_HEALTH app_logs='delayed_18m' identity='current' transactions='current'",
            "08:46 ASSET worker='support_preview_prod' owner='support_apps'",
            "08:50 IDENTITY source='normal' requested_path='outside_documented_scope'",
            "08:55 BUSINESS teacher_preview='approved' case='active'",
            "09:00 CHANGE storage_prefix='expanded' window='previous_evening'",
            "09:05 TRANSACTION unrelated_documents='0' retrieval='failed_before_read'",
            "09:10 OWNER config_scope='broader_than_design'",
            "09:15 CLASSIFY result='confirmed_security_event' severity='medium' confidence='high'",
            "09:20 CONTAIN identity_scope='approved_path_only' workflow='preserved'",
            "09:35 APP_LOGS arrived='yes' unrelated_read='none_supported'",
            "10:00 HANDOFF facts='recorded' gaps='recorded' triggers='defined'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Initial Assessment Is Best Supported?"
          evidence={[
            "The fictional service identity used its normal source and time window.",
            "The identity requested one storage path outside documented scope.",
            "An approved teacher preview job was active.",
            "A recent configuration update broadened the storage prefix.",
            "The transaction failed before unrelated file retrieval completed.",
            "No supplied file or transaction record shows unrelated documents were returned.",
            "Delayed application logs later confirm no unrelated file read.",
            "The technical owner confirms the configuration exceeded the approved design.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "A fictional configuration and least-privilege weakness produced a confirmed security event; harmful production data access is not supported; medium severity, narrow containment, remediation, and scope review are justified.",
            "A confirmed district-wide data breach occurred.",
            "The alert is a false positive because a teacher initiated the job.",
            "The event should be closed because no files were returned.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a real security-relevant configuration and access-control issue while preserving the limitation that harmful data access was not confirmed."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Triage and Initial Assessment"
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
          title="Complete a Fictional Detection and Triage Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Initial Assessment
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review fifty-four supplied fictional records covering alerts,
                source health, assets, identities, services, files, queues,
                transactions, deployments, configurations, support reports,
                business workflows, owners, expected behavior, containment,
                communication, and handoff.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve and deduplicate the fictional intake records.</li>
                <li>Validate source health and identify alternate evidence.</li>
                <li>Map asset, identity, service, data, file, transaction, workflow, owner, and time context.</li>
                <li>Classify each signal and assign confidence, alternatives, gaps, and severity.</li>
                <li>Recommend proportionate evidence collection, technical review, containment, communication, and escalation.</li>
                <li>Produce an initial assessment, evidence index, action register, handoff summary, and portfolio-safe report.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, test, alter,
            identify, contact, or publish real systems, users, identities,
            files, transactions, alerts, logs, owners, routes, credentials, or
            private organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The High-Severity Alert Has a Plausible Approved Explanation"
          scenario="A fictional alert reports unusual service activity, but an approved business workflow and a recent configuration change may explain part of the behavior."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the alert, verify source health, correlate identity, transaction, file, deployment, and business evidence, classify the confirmed control weakness separately from unproven impact, and apply narrow protection.",
              outcome:
                "Best defensive choice. It respects both the alert and the competing explanation without overstating either.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the alert because approved activity exists.",
              outcome:
                "Unsafe. Approved workflow does not explain every unusual condition.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare critical compromise from the alert severity.",
              outcome:
                "Unsupported. Tool severity is not evidence of full scope or impact.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Quiet Dashboard Uses a Delayed Source"
          scenario="A fictional dashboard shows no further application events, but the application source is delayed while identity and transaction sources remain healthy."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the source-health gap, avoid using silence as proof, continue with alternate evidence, repair the source, lower confidence where appropriate, and reassess when delayed records arrive.",
              outcome:
                "Best defensive choice. The team makes the evidence limitation visible and keeps the review proportionate.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case because the dashboard is quiet.",
              outcome:
                "Unsafe. The source delay explains the quiet view.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Escalate to critical because any source delay proves compromise.",
              outcome:
                "Unsupported. Source failure creates uncertainty, not proof of harmful activity.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Detection, Triage, and Initial Assessment Checklist"
          items={[
            "I preserve the fictional original signal, source, timestamp, identifier, severity, rule, and context before interpretation.",
            "I validate source availability, delay, completeness, parsing, retention, access, ownership, timestamp quality, and alternate evidence.",
            "I map the signal to a stable asset, environment, identity, service, file, transaction, data set, business workflow, owner, and time window.",
            "I compare expected, approved, unusual, unsupported, prohibited, and unknown behavior.",
            "I use genuinely independent fictional sources and do not count repeated dashboards as separate confirmation.",
            "I separate facts, conclusions, alternatives, evidence gaps, confidence, scope, severity, and impact.",
            "I recommend proportionate collection, technical review, containment, communication, escalation, ownership, deadlines, and rollback.",
            "I define reassessment triggers for new scope, identity, source-health, business, file, transaction, deployment, or impact evidence.",
            "I create a complete handoff with an evidence index, action register, open questions, next update, and decision history.",
            "I use only fictional information and never expose real alerts, logs, users, identities, files, transactions, systems, owners, routes, or private case records.",
          ]}
        />

        <MiniQuiz
          title="I11.2 Mini Quiz: Detection, Triage, and Initial Assessment"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Detection, Triage, and Initial Assessment Package using at least fifty-four alert, source-health, asset, identity, service, file, queue, transaction, deployment, configuration, support, business, owner, expected-behavior, containment, communication, and handoff records. Include an intake register, source-health review, evidence index, classification matrix, severity rationale, initial assessment, action register, communication recommendation, reassessment triggers, and portfolio-safe summary."
          tips={[
            "Use only clearly fictional alerts, assets, identities, logs, files, transactions, owners, systems, routes, organizations, and timelines.",
            "Preserve original evidence and show how source health, expected behavior, business context, and independent correlation change the assessment.",
            "Keep confirmed facts, supported conclusions, alternatives, evidence gaps, confidence, severity, and impact separate.",
            "Do not include real alerts, scanner exports, logs, service names, user identities, routes, credentials, case notes, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A fictional alert is an intake signal requiring validation and does not automatically prove an incident or impact.",
            "Strong triage preserves the original record, verifies source health, maps context, and correlates independent evidence.",
            "Classification should match current evidence and preserve uncertainty through confidence, alternatives, gaps, and reassessment triggers.",
            "Severity recommendations combine scope, consequence, business context, controls, confidence, and coordination needs rather than tool severity alone.",
            "Narrow containment may be appropriate during triage when it is justified, reversible, monitored, evidence-preserving, and continuity-aware.",
            "A complete initial assessment gives later responders a reproducible evidence baseline, action register, ownership map, and decision history.",
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