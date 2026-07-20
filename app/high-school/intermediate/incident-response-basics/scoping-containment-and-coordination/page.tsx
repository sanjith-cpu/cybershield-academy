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
const previousLesson = `${modulePath}/detection-triage-and-initial-assessment`;
const nextLesson = `${modulePath}/evidence-preservation-and-timeline-building`;

const objectives = [
  "Explain how fictional responders build incident scope from asset, identity, data, file, transaction, service, workflow, business, source-health, owner, and time evidence.",
  "Distinguish confirmed affected, suspected affected, related, reviewed-unaffected, unknown, excluded, contained, and recovered scope without overstating the case.",
  "Choose fictional containment that is narrow, authorized, reversible, evidence-preserving, monitored, continuity-aware, and connected to rollback and expiry.",
  "Coordinate fictional technical, business, support, communication, operations, evidence, and risk owners through a shared case record and decision cadence.",
  "Create a professional fictional Scope, Containment, and Coordination Package using only supplied evidence and safe defensive actions."
];
const vocabulary = [
  [
    "Incident scope",
    "The fictional assets, identities, users, data, files, transactions, services, environments, workflows, owners, and time windows connected to a response case."
  ],
  [
    "Scope hypothesis",
    "A fictional evidence-based statement about what may be affected and which records would confirm, narrow, or reject that possibility."
  ],
  [
    "Confirmed scope",
    "Fictional scope supported by current reliable evidence."
  ],
  [
    "Suspected scope",
    "Fictional scope with meaningful indicators but incomplete confirmation."
  ],
  [
    "Unknown scope",
    "Fictional scope that cannot be assessed reliably because important evidence or ownership is missing."
  ],
  [
    "Containment",
    "A fictional temporary defensive action that reduces risk while preserving evidence, legitimate operations, monitoring, continuity, and future remediation."
  ],
  [
    "Continuity",
    "The fictional ability to preserve essential school workflows through approved fallback, reduced service, alternate systems, or recovery procedures."
  ],
  [
    "Rollback",
    "A fictional tested method for reversing containment or recovery when expected technical or business outcomes fail."
  ],
  [
    "Decision log",
    "A fictional record of major response decisions, evidence, alternatives, owners, authority, timing, and review triggers."
  ],
  [
    "Exit criteria",
    "The fictional evidence and owner approval required to end containment, advance recovery, change severity, or close a response phase."
  ]
];
const scopeDimensions = [
  {
    "title": "Asset and environment scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to asset and environment scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for asset and environment scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink asset and environment scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Identity and user scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to identity and user scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for identity and user scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink identity and user scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Data and file scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to data and file scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for data and file scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink data and file scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Service and dependency scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to service and dependency scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for service and dependency scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink service and dependency scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Workflow and business scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to workflow and business scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for workflow and business scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink workflow and business scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Time-window scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to time-window scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for time-window scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink time-window scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Organizational and vendor scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to organizational and vendor scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for organizational and vendor scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink organizational and vendor scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  },
  {
    "title": "Evidence and source-health scope",
    "summary": "This dimension helps the fictional team determine what is directly involved, related, unknown, or outside the reviewed case boundary.",
    "details": [
      [
        "Questions to answer",
        "Identify which fictional assets, environments, identities, users, data, files, transactions, services, workflows, owners, dependencies, and time windows are connected to evidence and source-health scope."
      ],
      [
        "Evidence",
        "Use current fictional inventory, deployment, runtime, identity, file, transaction, business, source-health, and owner records to support the scope decision for evidence and source-health scope."
      ],
      [
        "Avoid",
        "Do not expand or shrink evidence and source-health scope from one alert, one hostname, one user report, one vendor relationship, or one unavailable evidence source."
      ]
    ]
  }
];
const scopeStates = [
  {
    "title": "Confirmed affected",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional confirmed affected state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for confirmed affected."
      ],
      [
        "Change when",
        "Reclassify confirmed affected when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Confirmed unaffected within reviewed limits",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional confirmed unaffected within reviewed limits state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for confirmed unaffected within reviewed limits."
      ],
      [
        "Change when",
        "Reclassify confirmed unaffected within reviewed limits when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Suspected affected",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional suspected affected state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for suspected affected."
      ],
      [
        "Change when",
        "Reclassify suspected affected when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Related but not affected",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional related but not affected state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for related but not affected."
      ],
      [
        "Change when",
        "Reclassify related but not affected when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Unknown due to evidence gap",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional unknown due to evidence gap state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for unknown due to evidence gap."
      ],
      [
        "Change when",
        "Reclassify unknown due to evidence gap when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Excluded by approved boundary",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional excluded by approved boundary state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for excluded by approved boundary."
      ],
      [
        "Change when",
        "Reclassify excluded by approved boundary when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Contained pending review",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional contained pending review state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for contained pending review."
      ],
      [
        "Change when",
        "Reclassify contained pending review when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  },
  {
    "title": "Recovered and under observation",
    "summary": "This scope state records the current evidence-based relationship between the fictional object and the response case.",
    "details": [
      [
        "Use when",
        "Apply the fictional recovered and under observation state only when the current evidence matches its exact definition, reviewed time window, and source coverage."
      ],
      [
        "Required record",
        "Preserve supporting facts, confidence, limitations, owner, next action, monitoring, and reassessment triggers for recovered and under observation."
      ],
      [
        "Change when",
        "Reclassify recovered and under observation when new asset, identity, file, transaction, business, deployment, recovery, or source-health evidence appears."
      ]
    ]
  }
];
const containmentOptions = [
  {
    "title": "Identity restriction",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to identity restriction while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for identity restriction."
      ],
      [
        "Failure mode",
        "Avoid applying identity restriction broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Route or feature limitation",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to route or feature limitation while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for route or feature limitation."
      ],
      [
        "Failure mode",
        "Avoid applying route or feature limitation broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "File, queue, or message control",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to file, queue, or message control while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for file, queue, or message control."
      ],
      [
        "Failure mode",
        "Avoid applying file, queue, or message control broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Network or service isolation",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to network or service isolation while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for network or service isolation."
      ],
      [
        "Failure mode",
        "Avoid applying network or service isolation broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Configuration safeguard",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to configuration safeguard while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for configuration safeguard."
      ],
      [
        "Failure mode",
        "Avoid applying configuration safeguard broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Monitoring increase",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to monitoring increase while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for monitoring increase."
      ],
      [
        "Failure mode",
        "Avoid applying monitoring increase broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Business-process fallback",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to business-process fallback while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for business-process fallback."
      ],
      [
        "Failure mode",
        "Avoid applying business-process fallback broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  },
  {
    "title": "Recovery hold",
    "summary": "This defensive option can reduce fictional risk when it is narrow, authorized, tested, monitored, reversible, and continuity-aware.",
    "details": [
      [
        "Control goal",
        "Reduce the fictional risk connected to recovery hold while preserving evidence, legitimate school workflows, continuity, monitoring, and rollback."
      ],
      [
        "Required record",
        "Document exact scope, owner, authority, expected risk reduction, user impact, test, monitoring, communication, expiry, and rollback for recovery hold."
      ],
      [
        "Failure mode",
        "Avoid applying recovery hold broadly, permanently, without testing, without business review, or in a way that destroys evidence or hides later activity."
      ]
    ]
  }
];
const coordinationDomains = [
  {
    "title": "Incident leadership",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for incident leadership."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for incident leadership."
      ],
      [
        "Escalate when",
        "Escalate incident leadership when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Technical coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for technical coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for technical coordination."
      ],
      [
        "Escalate when",
        "Escalate technical coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Business coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for business coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for business coordination."
      ],
      [
        "Escalate when",
        "Escalate business coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Evidence coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for evidence coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for evidence coordination."
      ],
      [
        "Escalate when",
        "Escalate evidence coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Communication coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for communication coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for communication coordination."
      ],
      [
        "Escalate when",
        "Escalate communication coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Change and operations coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for change and operations coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for change and operations coordination."
      ],
      [
        "Escalate when",
        "Escalate change and operations coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Risk and exception coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for risk and exception coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for risk and exception coordination."
      ],
      [
        "Escalate when",
        "Escalate risk and exception coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  },
  {
    "title": "Governance and handoff coordination",
    "summary": "This coordination area keeps fictional responders aligned through shared evidence, decisions, ownership, timing, and escalation.",
    "details": [
      [
        "Responsible parties",
        "Assign the fictional incident lead and the technical, business, support, communication, operations, evidence, and risk owners needed for governance and handoff coordination."
      ],
      [
        "Shared evidence",
        "Maintain one fictional case record containing scope, facts, conclusions, gaps, actions, decisions, timing, owners, blockers, and next-update expectations for governance and handoff coordination."
      ],
      [
        "Escalate when",
        "Escalate governance and handoff coordination when authority is unclear, risk grows, a critical workflow is affected, evidence sources fail, deadlines slip, or containment creates unacceptable impact."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "09:15",
    "source": "Initial assessment",
    "event": "A fictional preview-worker configuration weakness is confirmed with medium severity and no supported unrelated-file access.",
    "meaning": "The case requires coordinated review and narrow protection without claiming broader impact."
  },
  {
    "time": "09:20",
    "source": "Asset map",
    "event": "Production preview worker, one recovery worker, shared service identity, approved storage path, and one broader prefix enter scope review.",
    "meaning": "The team separates confirmed and suspected components."
  },
  {
    "time": "09:25",
    "source": "Identity evidence",
    "event": "The shared identity used its normal source, but permissions included the broader prefix.",
    "meaning": "Identity scope is confirmed while actual file access remains limited by transaction evidence."
  },
  {
    "time": "09:30",
    "source": "Business owner",
    "event": "Teacher previews are important, but a slower manual fallback can support urgent cases.",
    "meaning": "Containment can preserve critical continuity."
  },
  {
    "time": "09:35",
    "source": "Containment design",
    "event": "The team proposes restricting the identity to the approved path and pausing only the automated preview worker.",
    "meaning": "The control is narrow and targets the validated weakness."
  },
  {
    "time": "09:40",
    "source": "Evidence review",
    "event": "Identity, transaction, file, deployment, and source-health records remain available after the proposed containment.",
    "meaning": "The control preserves investigation evidence."
  },
  {
    "time": "09:45",
    "source": "Business test",
    "event": "Manual preview fallback succeeds for one urgent fictional case, and unrelated support functions remain available.",
    "meaning": "Continuity is validated before implementation."
  },
  {
    "time": "09:50",
    "source": "Approval",
    "event": "Incident lead, application owner, identity owner, business owner, and operations owner approve the limited containment.",
    "meaning": "Authority and accountability are explicit."
  },
  {
    "time": "10:00",
    "source": "Implementation",
    "event": "The service identity is narrowed, the preview worker is paused, monitoring is increased, and rollback is ready.",
    "meaning": "Risk reduction, monitoring, and reversibility are active."
  },
  {
    "time": "10:15",
    "source": "Scope review",
    "event": "The recovery worker uses a separate named identity and approved storage prefix.",
    "meaning": "It is related but not affected within the reviewed evidence."
  },
  {
    "time": "10:30",
    "source": "Source health",
    "event": "Delayed application logs arrive and show no unrelated-file read, export, or cache creation.",
    "meaning": "Confidence rises and the impact boundary remains narrow."
  },
  {
    "time": "11:00",
    "source": "Coordination update",
    "event": "Technical, business, support, leadership, and risk updates use consistent facts, limitations, actions, and next-review time.",
    "meaning": "Coordination preserves one shared case truth."
  },
  {
    "time": "13:00",
    "source": "Phase exit",
    "event": "Scope, containment, owners, evidence gaps, remediation needs, continuity, monitoring, and recovery gates are documented.",
    "meaning": "The case can move into detailed evidence and timeline work."
  }
];
const commonMistakes = [
  "Treating the first fictional affected asset as the complete incident scope.",
  "Expanding scope because several systems share a vendor, network, or software platform without evidence of direct involvement.",
  "Declaring an asset unaffected when the supporting source is delayed, missing, stale, or incomplete.",
  "Excluding recovery, worker, identity, data, vendor, build, monitoring, or support systems because they are not user-facing.",
  "Using broad containment that disables unrelated school workflows, destroys evidence, or creates avoidable support harm.",
  "Applying containment without documented authority, ownership, business review, testing, monitoring, rollback, or expiry.",
  "Confusing containment with permanent eradication or final closure.",
  "Failing to preserve a common case record, causing technical and business teams to communicate different facts.",
  "Allowing unassigned actions, blocked dependencies, or missed update times to remain invisible.",
  "Treating manual fallback as automatically safe without testing user, data, support, privacy, and continuity effects.",
  "Ending containment because urgent activity stopped without verifying root-cause correction, source health, business outcome, and recovery readiness.",
  "Publishing real assets, identities, routes, users, owners, system maps, containment controls, communications, or private incident records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest way to build fictional incident scope?",
    "choices": [
      "Correlate asset, environment, identity, data, file, transaction, service, workflow, business, owner, source-health, and time evidence.",
      "Use the first alert title.",
      "Include every system in the organization.",
      "Use only the affected hostname."
    ],
    "answer": 0,
    "explanation": "Scope should be evidence-based, multi-dimensional, and reviewable."
  },
  {
    "question": "Which statement about confirmed unaffected scope is strongest?",
    "choices": [
      "It is limited to the reviewed asset, identity, workflow, time window, and healthy evidence coverage.",
      "It means the asset can never be affected.",
      "It can be declared from a quiet dashboard.",
      "It requires no documentation."
    ],
    "answer": 0,
    "explanation": "Unaffected conclusions remain bounded by evidence and time."
  },
  {
    "question": "What makes fictional containment defensible?",
    "choices": [
      "It is authorized, narrow, reversible, tested, monitored, evidence-preserving, continuity-aware, owned, and connected to rollback and expiry.",
      "It disables every related service.",
      "It is permanent.",
      "It requires no business review."
    ],
    "answer": 0,
    "explanation": "Containment should reduce risk without unnecessary harm or evidence loss."
  },
  {
    "question": "Why should containment preserve evidence sources?",
    "choices": [
      "The team still needs records to validate scope, understand the event, verify the control, and support recovery and closure.",
      "Evidence is unnecessary after containment.",
      "Monitoring recreates all lost evidence.",
      "Containment proves closure."
    ],
    "answer": 0,
    "explanation": "Investigation and validation continue after the protective action."
  },
  {
    "question": "What should a fictional coordination board contain?",
    "choices": [
      "Objectives, severity, facts, conclusions, scope, gaps, actions, owners, blockers, decisions, updates, and phase-exit criteria.",
      "Only a chat transcript.",
      "Only scanner results.",
      "Only leadership messages."
    ],
    "answer": 0,
    "explanation": "A shared board keeps teams aligned around one case record."
  },
  {
    "question": "When should a scope decision be reassessed?",
    "choices": [
      "When new asset, identity, file, transaction, source-health, business, deployment, recovery, or impact evidence appears.",
      "Never after the first meeting.",
      "Only at final closure.",
      "Only when severity rises."
    ],
    "answer": 0,
    "explanation": "Incident scope is a living evidence-based model."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional assets, identities, scope maps, controls, owners, timelines, communications, and organizations.",
      "Publish real containment maps.",
      "Include internal routes and identities.",
      "Reuse private case boards."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate coordination skill without exposing real response details."
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
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
  const labelStyles = ["text-emerald-200", "text-blue-200", "text-red-200"];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>

      <div className="mt-6 grid gap-5">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {item.details.map(([label, detail], index) => (
                <div
                  key={`${item.title}-${label}`}
                  className={`rounded-xl border p-4 ${
                    detailStyles[index % detailStyles.length]
                  }`}
                >
                  <p className={`text-xs font-black uppercase tracking-[0.16em] ${
                    labelStyles[index % labelStyles.length]
                  }`}>
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
        Scope and Containment Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Case from Initial Scope to Phase Exit
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">{item.time}</p>
            <p className="text-sm font-black text-blue-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ScopingContainmentAndCoordinationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I11</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 3 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.3 Scoping, Containment, and Coordination
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams define affected scope, preserve
            uncertainty, choose narrow and reversible containment, protect
            evidence and critical workflows, coordinate owners, maintain one
            case record, and define phase-exit and reassessment conditions.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I11: Incident Response Basics"
          lessonTitle="Scoping, Containment, and Coordination"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional incident scope is a living evidence-based model and not a list copied from the first alert.",
            "I will distinguish confirmed, suspected, related, reviewed-unaffected, unknown, excluded, contained, and recovered scope.",
            "I will require authority, testing, business review, evidence preservation, monitoring, rollback, expiry, and ownership for containment.",
            "I will maintain one shared fictional case record for facts, conclusions, gaps, actions, decisions, owners, updates, and phase-exit criteria.",
            "I will use only supplied fictional assets, identities, files, transactions, services, users, owners, controls, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Containment Can Cause More Harm Than the Event When Scope Is Weak"
        >
          <p className="leading-8">
            A fictional preview-worker alert involves one service identity, one
            broader storage prefix, and an approved teacher workflow. A broad
            response could disable the full support platform, block urgent
            student services, destroy evidence, and still miss the recovery
            worker. Strong responders build scope carefully and choose the
            smallest protective action that meaningfully reduces risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak containment</p>
              <p className="mt-2 leading-7">
                Disable the full fictional support platform, revoke unrelated
                identities, stop evidence sources, and communicate confirmed
                compromise before scope is established.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Strong containment</p>
              <p className="mt-2 leading-7">
                Restrict the exact identity and path, preserve logs and
                transactions, test continuity and rollback, monitor effects,
                assign owners, and reassess scope as evidence improves.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Scope Determines Which Evidence, Owners, Controls, Communications, and Recovery Actions Are Relevant"
        >
          <p className="leading-8">
            Fictional response teams need enough scope to protect the right
            assets without disrupting unrelated services. They also need
            visible uncertainty so missing evidence is not mistaken for safety.
            A disciplined process connects technical protection to business
            continuity, evidence quality, ownership, communication, and later
            recovery.
          </p>
        </SectionCard>

        <DetailSection eyebrow="Scope Dimensions" title="Eight Dimensions of Incident Scope" items={scopeDimensions} />
        <DetailSection eyebrow="Scope States" title="Eight Ways to Describe Current Scope" items={scopeStates} />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Hypothesis–Evidence–State–Control–Monitoring–Review Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Hypothesis", "Which fictional asset, identity, file, data, service, workflow, environment, and time scope may be involved?"],
              ["Evidence", "Which fictional independent and healthy sources support, narrow, contradict, or leave the scope unknown?"],
              ["State", "Is the fictional scope affected, suspected, related, unaffected within limits, unknown, contained, or recovered?"],
              ["Control", "Which fictional narrow and authorized containment reduces risk while preserving evidence and continuity?"],
              ["Monitoring", "Which fictional alerts, transactions, files, source-health checks, user outcomes, and owner reviews prove the control works?"],
              ["Review", "Which fictional evidence, expiry, failure, business change, recovery gate, or owner decision requires reassessment?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DetailSection eyebrow="Containment Options" title="Eight Defensive Controls for Narrow Protection" items={containmentOptions} />
        <DetailSection eyebrow="Coordination" title="Eight Domains That Must Share One Case Truth" items={coordinationDomains} />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Scoping, Containment, and Coordination Terms</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Incident Scope and Containment Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Confirmed affected assets",
              value: "2",
              note: "Fictional production preview worker and shared service identity supported by current evidence.",
            },
            {
              label: "Unknown scope items",
              value: "3",
              note: "Fictional recovery, cache, and vendor-support records awaiting healthy source or owner confirmation.",
            },
            {
              label: "Active containment actions",
              value: "2",
              note: "Fictional identity restriction and preview-worker pause with monitoring, fallback, rollback, and expiry.",
            },
          ]}
        />

        <FakeAlertCard
          title="Broad Platform Shutdown Proposed before Scope Review"
          severity="High"
          time="9:32 AM"
          source="Fake Incident Coordination Console"
          details="A fictional team proposes disabling the entire student-support platform after one preview-worker identity requests storage outside its documented scope. Current evidence shows an approved teacher job, no unrelated file retrieval, one delayed application source, and a recent configuration change."
          recommendation="Reject the broad shutdown at the current evidence gate; preserve original evidence; map production, recovery, identity, storage, workflow, owner, and source-health scope; test a narrow identity and path restriction; validate manual fallback; keep unrelated services active; assign owners; monitor results; prepare rollback; and reassess when delayed logs arrive."
        />

        <FakeLogPanel
          title="Fake Scope and Containment Timeline"
          logs={[
            "09:15 ASSESS class='confirmed_security_event' severity='medium' impact='not_supported'",
            "09:20 SCOPE production_worker='confirmed' recovery_worker='suspected'",
            "09:25 IDENTITY shared_identity='confirmed' permissions='broader_prefix'",
            "09:30 BUSINESS preview='important' fallback='manual_available'",
            "09:35 PLAN identity_scope='approved_path' worker='pause_only'",
            "09:40 EVIDENCE identity='preserved' transactions='preserved' files='preserved'",
            "09:45 TEST fallback='pass' unrelated_support='available'",
            "09:50 APPROVAL incident='yes' app='yes' identity='yes' business='yes' ops='yes'",
            "10:00 CONTAIN identity='narrowed' worker='paused' monitoring='increased'",
            "10:15 REVIEW recovery_identity='separate_named' storage='approved'",
            "10:30 LOGS delayed='arrived' unrelated_read='none_supported'",
            "11:00 UPDATE audiences='aligned' limitations='included'",
            "13:00 EXIT scope='documented' recovery_gate='defined'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Scope and Containment Conclusion Is Best Supported?"
          evidence={[
            "The fictional production preview worker used a shared identity with a broader-than-approved storage prefix.",
            "The approved teacher preview transaction failed before unrelated file retrieval.",
            "No supplied file, transaction, or later application record shows unrelated documents were read or exported.",
            "The recovery worker uses a separate named identity and approved storage prefix.",
            "Manual preview fallback supports urgent cases.",
            "A narrow identity restriction and preview-worker pause preserve unrelated support services and all needed evidence.",
            "Monitoring, rollback, owners, expiry, and reassessment triggers are documented.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional production worker and shared identity are confirmed affected; the recovery worker is related but not affected; narrow containment is justified and broader platform shutdown is not supported.",
            "Every support-system component is compromised.",
            "No containment is needed because no files were returned.",
            "The entire platform should remain offline permanently.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a narrow scope and targeted protection while preserving uncertainty and avoiding unsupported impact claims."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Scoping, Containment, and Coordination">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build a Fictional Scope, Containment, and Coordination Package">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Fictional Evidence Set</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Scope Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review fifty-six supplied fictional records covering assets,
                environments, identities, users, files, data, transactions,
                services, dependencies, business workflows, source health,
                containment options, continuity, monitoring, communication,
                owners, decisions, rollback, and phase-exit criteria.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required Deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create the fictional scope hypothesis and evidence matrix.</li>
                <li>Classify confirmed, suspected, related, unaffected, unknown, excluded, contained, and recovered scope.</li>
                <li>Design narrow containment with authority, tests, monitoring, continuity, rollback, expiry, and owners.</li>
                <li>Create the coordination board, decision log, action register, communication schedule, and owner matrix.</li>
                <li>Define reassessment, escalation, recovery, and phase-exit gates.</li>
                <li>Produce an executive summary and portfolio-safe scope-and-containment report.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access, test, isolate,
            alter, identify, contact, or publish real systems, users, identities,
            files, transactions, services, owners, routes, controls, or private
            organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Broad Shutdown Is Proposed"
          scenario="A fictional incident lead is asked to disable an entire support platform even though current evidence confirms only one worker and one service identity."
          choices={[
            {
              label: "Choice A",
              response:
                "Reject the broad action at the current evidence gate, map dependencies and continuity, apply a narrow tested identity and worker restriction, preserve evidence, monitor, document rollback, and reassess scope.",
              outcome:
                "Best defensive choice. It reduces known risk without unsupported disruption.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable every related service immediately.",
              outcome:
                "Risky. Current scope does not support organization-wide containment.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Take no action until every scope question is answered.",
              outcome:
                "Unsafe. Proportionate protective action can be justified before full certainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Recovery Worker Shares a Vendor but Uses Different Controls"
          scenario="A fictional recovery worker uses the same vendor platform as the affected production worker but has a separate named identity, approved storage path, and no matching events."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify it as related but not affected within the reviewed evidence, continue monitoring, document the boundary, and define reassessment triggers.",
              outcome:
                "Best defensive choice. Shared technology alone does not prove direct involvement.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare it compromised because the vendor is the same.",
              outcome:
                "Unsupported. Scope requires direct evidence, not association alone.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Exclude it permanently from review.",
              outcome:
                "Weak. Related recovery scope should remain documented and monitored.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Scoping, Containment, and Coordination Checklist"
          items={[
            "I build fictional scope across assets, environments, identities, users, data, files, transactions, services, dependencies, workflows, owners, time, and source health.",
            "I distinguish confirmed affected, suspected, related, unaffected within limits, unknown, excluded, contained, and recovered scope.",
            "I use scope hypotheses and define which evidence would confirm, narrow, reject, or expand each one.",
            "I require documented authority before containment and preserve decision history.",
            "I choose containment that is narrow, reversible, tested, monitored, evidence-preserving, continuity-aware, owned, and connected to rollback and expiry.",
            "I validate critical fallback and support readiness before disrupting an approved workflow.",
            "I maintain one shared case record for facts, conclusions, gaps, scope, actions, owners, blockers, decisions, communication, and update times.",
            "I coordinate technical, business, support, communication, operations, evidence, risk, governance, and handoff responsibilities.",
            "I define reassessment, escalation, recovery, containment-exit, and phase-exit triggers.",
            "I use only fictional information and never expose real scope maps, identities, routes, controls, owners, communications, systems, or private case records.",
          ]}
        />

        <MiniQuiz
          title="I11.3 Mini Quiz: Scoping, Containment, and Coordination"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Scope, Containment, and Coordination Package using at least fifty-six asset, environment, identity, user, data, file, transaction, service, dependency, workflow, source-health, containment, continuity, monitoring, communication, owner, decision, rollback, and phase-exit records. Include a scope map, hypothesis matrix, containment action register, decision log, coordination board, owner matrix, business-continuity record, communication schedule, reassessment triggers, and portfolio-safe executive summary."
          tips={[
            "Use only clearly fictional assets, identities, users, routes, files, transactions, controls, owners, communications, timelines, and organizations.",
            "Show how scope changes as independent evidence arrives and source-health limitations are resolved.",
            "Preserve the difference between confirmed, suspected, related, unaffected, unknown, contained, and recovered scope.",
            "Do not include real architecture, incident maps, control details, owner names, communication records, routes, credentials, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional incident scope is a living evidence-based model rather than a list copied from the first alert.",
            "Strong scope combines asset, identity, data, file, transaction, service, business, time, owner, and source-health evidence.",
            "Containment should be authorized, narrow, reversible, tested, monitored, evidence-preserving, continuity-aware, and connected to rollback and expiry.",
            "Related technology or shared vendors do not automatically prove direct involvement.",
            "One shared case record keeps technical, business, support, communication, operations, evidence, and risk teams aligned.",
            "Reassessment triggers ensure new evidence can narrow, expand, change, or close scope and containment decisions.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I11</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}