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
const previousLesson = `${modulePath}/eradication-recovery-and-service-restoration`;
const nextLesson = `${modulePath}/post-incident-review-and-lessons-learned`;

const objectives = [
  "Explain how fictional incident teams communicate confirmed facts, supported conclusions, uncertainty, scope, impact, actions, decisions, and next-update expectations.",
  "Tailor fictional technical, business, leadership, support, partner, and closure communications without changing the underlying case truth.",
  "Use fictional escalation triggers for severity, scope, business impact, authority, evidence gaps, containment failure, recovery delay, privacy, and missed deadlines.",
  "Create complete fictional decision logs, action registers, handoff records, communication archives, approval histories, and correction records.",
  "Build a professional fictional Communication, Escalation, and Documentation Package using only supplied evidence and privacy-aware defensive practices."
];
const vocabulary = [
  [
    "Incident communication",
    "A fictional evidence-based update explaining current facts, supported conclusions, uncertainty, scope, impact, actions, decisions, owners, and next steps to an appropriate audience."
  ],
  [
    "Audience need",
    "The fictional information a recipient requires to decide, act, support users, protect continuity, or understand risk."
  ],
  [
    "Escalation trigger",
    "A fictional condition requiring additional authority, expertise, urgency, communication, funding, coordination, or review."
  ],
  [
    "Decision log",
    "A fictional record of a major response choice, including time, owner, authority, evidence, alternatives, rationale, expected result, and review trigger."
  ],
  [
    "Action register",
    "A fictional list of response tasks with owner, deadline, dependency, status, evidence, blocker, priority, and completion criteria."
  ],
  [
    "Situation report",
    "A fictional structured update describing current status, facts, scope, impact, actions, decisions, risks, support needs, and next update."
  ],
  [
    "Handoff",
    "A fictional transfer of response responsibility using a complete case summary, evidence index, open actions, decisions, risks, and priorities."
  ],
  [
    "Correction notice",
    "A fictional communication identifying an earlier statement, explaining what changed, providing corrected information, and preserving revision history."
  ],
  [
    "Need-to-know detail",
    "The fictional minimum accurate information required for an audience to act without exposing unnecessary technical, personal, or private information."
  ],
  [
    "Communication cadence",
    "The fictional schedule for recurring updates, decision reviews, leadership briefings, support notices, and phase-exit communication."
  ],
  [
    "Approval path",
    "The fictional sequence of owners authorized to review and approve a communication for a specific audience and sensitivity."
  ],
  [
    "Documentation integrity",
    "The fictional quality of records being complete, traceable, time-stamped, versioned, limitation-aware, and linked to evidence and owners."
  ]
];
const audienceTypes = [
  {
    "title": "Incident response team",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional incident response team audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for incident response team."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the incident response team audience."
      ]
    ]
  },
  {
    "title": "Technical owners",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional technical owners audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for technical owners."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the technical owners audience."
      ]
    ]
  },
  {
    "title": "Business owners",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional business owners audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for business owners."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the business owners audience."
      ]
    ]
  },
  {
    "title": "Leadership",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional leadership audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for leadership."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the leadership audience."
      ]
    ]
  },
  {
    "title": "Support and service desk",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional support and service desk audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for support and service desk."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the support and service desk audience."
      ]
    ]
  },
  {
    "title": "Students, teachers, or staff",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional students, teachers, or staff audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for students, teachers, or staff."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the students, teachers, or staff audience."
      ]
    ]
  },
  {
    "title": "Partners and vendors",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional partners and vendors audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for partners and vendors."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the partners and vendors audience."
      ]
    ]
  },
  {
    "title": "Closure and governance reviewers",
    "summary": "This fictional audience needs accurate, role-specific information while the underlying case facts remain unchanged.",
    "details": [
      [
        "Audience need",
        "Provide the fictional closure and governance reviewers audience with only the facts, impact, actions, decisions, timing, and support information required for its role."
      ],
      [
        "Include",
        "State confirmed facts, supported conclusions, uncertainty, affected scope, current protection, business effect, requested decision, owner, and next update for closure and governance reviewers."
      ],
      [
        "Avoid",
        "Do not expose unnecessary identities, file details, routes, evidence sources, speculation, private records, or unsupported impact claims to the closure and governance reviewers audience."
      ]
    ]
  }
];
const messageFields = [
  {
    "title": "Current status",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional current status clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The current status should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the current status when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Confirmed facts",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional confirmed facts clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The confirmed facts should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the confirmed facts when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Supported conclusions",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional supported conclusions clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The supported conclusions should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the supported conclusions when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Unknowns and evidence gaps",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional unknowns and evidence gaps clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The unknowns and evidence gaps should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the unknowns and evidence gaps when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Affected scope and business impact",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional affected scope and business impact clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The affected scope and business impact should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the affected scope and business impact when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Actions and decisions",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional actions and decisions clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The actions and decisions should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the actions and decisions when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Requests and deadlines",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional requests and deadlines clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The requests and deadlines should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the requests and deadlines when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  },
  {
    "title": "Next update and correction path",
    "summary": "This field keeps the fictional incident update evidence-based, actionable, reviewable, and consistent across audiences.",
    "details": [
      [
        "Required field",
        "Record the fictional next update and correction path clearly, using current evidence, exact scope, accountable ownership, and a visible timestamp or version."
      ],
      [
        "Quality standard",
        "The next update and correction path should remain consistent across technical, business, leadership, support, and closure communications while detail changes by audience."
      ],
      [
        "Failure mode",
        "Avoid hiding, exaggerating, merging, or omitting the next update and correction path when it changes a recipient's decision, action, or understanding of risk."
      ]
    ]
  }
];
const escalationTriggers = [
  {
    "title": "Severity or consequence increases",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when severity or consequence increases crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to severity or consequence increases."
      ],
      [
        "Do not",
        "Do not use severity or consequence increases as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Scope expands or remains unknown",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when scope expands or remains unknown crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to scope expands or remains unknown."
      ],
      [
        "Do not",
        "Do not use scope expands or remains unknown as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Containment fails or causes harm",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when containment fails or causes harm crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to containment fails or causes harm."
      ],
      [
        "Do not",
        "Do not use containment fails or causes harm as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Authority or ownership is unclear",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when authority or ownership is unclear crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to authority or ownership is unclear."
      ],
      [
        "Do not",
        "Do not use authority or ownership is unclear as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Evidence quality becomes unreliable",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when evidence quality becomes unreliable crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to evidence quality becomes unreliable."
      ],
      [
        "Do not",
        "Do not use evidence quality becomes unreliable as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Recovery misses a gate",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when recovery misses a gate crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to recovery misses a gate."
      ],
      [
        "Do not",
        "Do not use recovery misses a gate as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Deadline, resource, or dependency is at risk",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when deadline, resource, or dependency is at risk crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to deadline, resource, or dependency is at risk."
      ],
      [
        "Do not",
        "Do not use deadline, resource, or dependency is at risk as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  },
  {
    "title": "Privacy, policy, or external obligations arise",
    "summary": "This fictional condition may require greater authority, urgency, expertise, resources, communication, or governance.",
    "details": [
      [
        "Trigger",
        "Escalate the fictional case when privacy, policy, or external obligations arise crosses the approved threshold or cannot be resolved within current authority, skill, time, evidence, or resource limits."
      ],
      [
        "Required record",
        "Document the evidence, scope, urgency, impact, owner, requested decision, deadline, alternatives, and next review connected to privacy, policy, or external obligations arise."
      ],
      [
        "Do not",
        "Do not use privacy, policy, or external obligations arise as a reason for vague alarm, unsupported severity, broad notification, or bypassing the documented authority chain."
      ]
    ]
  }
];
const documentationRecords = [
  {
    "title": "Case intake and initial assessment",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional case intake and initial assessment with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the case intake and initial assessment to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the case intake and initial assessment review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Evidence index and timeline",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional evidence index and timeline with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the evidence index and timeline to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the evidence index and timeline review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Scope and containment register",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional scope and containment register with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the scope and containment register to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the scope and containment register review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Decision log",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional decision log with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the decision log to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the decision log review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Action register",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional action register with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the action register to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the action register review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Communication archive",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional communication archive with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the communication archive to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the communication archive review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Handoff and situation reports",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional handoff and situation reports with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the handoff and situation reports to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the handoff and situation reports review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  },
  {
    "title": "Recovery, closure, and lessons records",
    "summary": "This fictional record preserves continuity, accountability, evidence links, ownership, and later review.",
    "details": [
      [
        "Record",
        "Preserve the fictional recovery, closure, and lessons records with identifier, owner, time, source evidence, version, approval, status, limitation, and linked actions or decisions."
      ],
      [
        "Use",
        "Use the recovery, closure, and lessons records to support reproducible triage, scope, containment, recovery, communication, governance, handoff, and closure."
      ],
      [
        "Quality check",
        "Fail the recovery, closure, and lessons records review when required ownership, evidence links, timestamps, revisions, approvals, blockers, or completion criteria are missing."
      ]
    ]
  }
];
const communicationTimeline = [
  {
    "time": "08:40",
    "source": "Technical intake",
    "event": "A fictional preview-worker alert is preserved with high tool severity and unknown impact.",
    "meaning": "The first message describes an alert under review, not a confirmed incident."
  },
  {
    "time": "09:05",
    "source": "Initial assessment",
    "event": "The case is classified as a confirmed security event with medium response severity and no supported unrelated-file access.",
    "meaning": "Updates can state a validated weakness without claiming a breach."
  },
  {
    "time": "09:20",
    "source": "Containment update",
    "event": "The service identity is narrowed and the preview worker is paused while manual fallback supports urgent cases.",
    "meaning": "Support and business audiences receive service and workaround information."
  },
  {
    "time": "09:45",
    "source": "Evidence update",
    "event": "Delayed application logs arrive and confirm no unrelated read, export, or cache creation.",
    "meaning": "A correction narrows the earlier impact uncertainty."
  },
  {
    "time": "10:15",
    "source": "Leadership briefing",
    "event": "Leadership receives current scope, business effect, protections, uncertainty, resource needs, decisions, and next update.",
    "meaning": "Leadership gets decision-relevant detail rather than raw logs."
  },
  {
    "time": "11:00",
    "source": "Vendor request",
    "event": "The fictional vendor receives only affected integration scope, required evidence, response deadline, and approved contact path.",
    "meaning": "External coordination preserves need-to-know disclosure."
  },
  {
    "time": "13:00",
    "source": "Shift handoff",
    "event": "The next fictional incident lead receives timeline, facts, conclusions, gaps, scope, actions, decisions, blockers, communications, and priorities.",
    "meaning": "Responsibility transfers without losing context."
  },
  {
    "time": "Day 2 10:00",
    "source": "Recovery briefing",
    "event": "Technical and business owners receive test results, canary scope, source-health status, rollback readiness, and approval requests.",
    "meaning": "Recovery communication connects to gates and decisions."
  },
  {
    "time": "Day 2 14:00",
    "source": "Service update",
    "event": "Approved previews are restored in stages; support guidance and next review remain active.",
    "meaning": "User communication changes as service condition changes."
  },
  {
    "time": "Day 3",
    "source": "Correction notice",
    "event": "A previous message describing recovery as complete is corrected to state that observation and source-health review remain open.",
    "meaning": "The archive preserves error and correction transparently."
  },
  {
    "time": "Day 7",
    "source": "Executive update",
    "event": "Service, business, security, support, and evidence indicators remain stable with low residual risk.",
    "meaning": "Leadership receives trend and remaining-risk context."
  },
  {
    "time": "Day 14",
    "source": "Closure communication",
    "event": "The case summary records final scope, recovery, lessons, actions, residual risk, approvals, and reopen triggers.",
    "meaning": "Closure reflects the complete case package."
  }
];
const commonMistakes = [
  "Communicating a fictional alert as a confirmed incident before source health, asset context, scope, and evidence are reviewed.",
  "Sending the same technical and private detail to analysts, leadership, support, teachers, vendors, and closure reviewers.",
  "Removing uncertainty, evidence gaps, alternative explanations, or source-health limitations to make a message sound confident.",
  "Changing the underlying facts between technical and business messages instead of changing only detail and emphasis.",
  "Using breach, compromise, exposure, or district-wide impact without evidence supporting those exact claims.",
  "Failing to identify which owner must decide, provide evidence, complete an action, or approve the next phase.",
  "Escalating widely without a defined trigger, requested decision, deadline, evidence, or authority path.",
  "Keeping important decisions in chat or memory without a formal decision log and action register.",
  "Overwriting earlier messages rather than preserving versions and issuing a visible correction.",
  "Treating silence from leadership, a vendor, or an owner as approval.",
  "Closing communication before support guidance, business status, residual risk, actions, lessons, and reopen triggers are complete.",
  "Publishing real contacts, system names, routes, identities, logs, files, evidence sources, case records, or private communications in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What should a fictional incident update separate?",
    "choices": [
      "Confirmed facts, supported conclusions, uncertainty, scope, impact, actions, decisions, requests, owners, and next update.",
      "Only the final conclusion.",
      "Only technical details.",
      "Only leadership decisions."
    ],
    "answer": 0,
    "explanation": "A useful update separates evidence, interpretation, uncertainty, action, and ownership."
  },
  {
    "question": "Why should messages differ by audience?",
    "choices": [
      "Different recipients need different detail to make authorized decisions or perform actions while preserving one case truth.",
      "The facts should change for each audience.",
      "Leadership should receive raw logs.",
      "Support should receive every private detail."
    ],
    "answer": 0,
    "explanation": "Audience tailoring changes detail and emphasis, not underlying facts."
  },
  {
    "question": "What makes an escalation defensible?",
    "choices": [
      "A defined trigger, supporting evidence, scope, urgency, impact, requested decision, owner, deadline, alternatives, and authority path.",
      "A dramatic subject line.",
      "Copying every stakeholder.",
      "Using the highest severity."
    ],
    "answer": 0,
    "explanation": "Escalation should request a specific authorized decision or resource based on evidence."
  },
  {
    "question": "What should happen when an earlier fictional update is wrong?",
    "choices": [
      "Issue a visible correction identifying the earlier statement, what changed, corrected information, and revised evidence or confidence.",
      "Delete the message.",
      "Ignore the error.",
      "Change the archive silently."
    ],
    "answer": 0,
    "explanation": "Transparent correction protects trust and documentation integrity."
  },
  {
    "question": "What belongs in a fictional decision log?",
    "choices": [
      "Decision, time, owner, authority, evidence, alternatives, rationale, expected result, approval, and review trigger.",
      "Only the final action.",
      "Only meeting notes.",
      "Only severity."
    ],
    "answer": 0,
    "explanation": "The log should let another reviewer understand and reproduce the decision."
  },
  {
    "question": "What is required for a strong handoff?",
    "choices": [
      "Current objectives, facts, conclusions, scope, gaps, evidence, actions, decisions, blockers, communications, risks, priorities, and next updates.",
      "A short message saying continue.",
      "Only the latest dashboard.",
      "Only unresolved tasks."
    ],
    "answer": 0,
    "explanation": "A complete handoff prevents context and decision loss."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Use clearly fictional communications, contacts, systems, owners, evidence, timelines, organizations, and decisions.",
      "Publish real internal updates.",
      "Include actual contact and escalation lists.",
      "Reuse private case messages."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate skill without exposing real response information."
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
        Communication Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Case from Intake Communication to Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {communicationTimeline.map((item) => (
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

export default function CommunicationEscalationAndDocumentationPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11.6 Communication, Escalation, and Documentation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional incident teams maintain one evidence-based case
            truth while tailoring updates for technical, business, leadership,
            support, partner, and closure audiences; escalating at defined
            triggers; preserving decisions and actions; correcting earlier
            statements; and documenting every phase for reviewable handoff,
            governance, recovery, and closure.
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
          lessonTitle="Communication, Escalation, and Documentation"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will separate fictional confirmed facts, supported conclusions, uncertainty, scope, impact, actions, decisions, requests, and next-update times.",
            "I will tailor detail by audience without changing the underlying case truth.",
            "I will use defined escalation triggers, authority paths, requested decisions, owners, and deadlines instead of vague alarm.",
            "I will preserve communication versions, approvals, delivery, corrections, decisions, actions, handoffs, and completion evidence.",
            "I will use only supplied fictional contacts, messages, systems, users, owners, evidence, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Accurate Technical Analysis Can Still Produce a Failed Incident Response"
        >
          <p className="leading-8">
            A fictional response team correctly identifies a narrow
            configuration weakness, but the analyst tells leadership that a
            district-wide breach is confirmed, support receives no approved
            workaround, the business owner is not asked to approve fallback,
            and a later correction is silently edited into the original
            message. The technical evidence may be sound, but communication,
            escalation, and documentation have weakened trust and decision
            quality.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak communication
              </p>

              <p className="mt-2 leading-7">
                Send one dramatic message to every audience, hide uncertainty,
                request no specific decision, keep actions in chat, and replace
                earlier statements without a correction record.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong communication
              </p>

              <p className="mt-2 leading-7">
                Preserve one case truth, tailor detail, state uncertainty,
                request specific decisions, assign owners and deadlines,
                version messages, and issue visible corrections.
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
          title="Communication Moves Evidence into Decisions, Actions, Support, and Trust"
        >
          <p className="leading-8">
            Fictional incident response depends on technical evidence, but
            evidence creates value only when the correct owner understands what
            is known, what remains uncertain, which action is needed, who may
            approve it, and when the case will be reviewed again. Accurate,
            privacy-aware communication and documentation prevent conflicting
            decisions, missed deadlines, unsafe disclosure, and lost context.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Audience Design"
          title="Eight Audiences with Different Information Needs"
          items={audienceTypes}
        />

        <DetailSection
          eyebrow="Message Structure"
          title="Eight Fields in a Professional Incident Update"
          items={messageFields}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Evidence–Audience–Decision–Action–Record–Correction Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Evidence", "Which fictional facts, conclusions, uncertainty, scope, impact, and source-health limits are current?"],
              ["Audience", "Which fictional recipient needs which detail to decide, act, support, communicate, or review?"],
              ["Decision", "Which fictional approval, authority, resource, priority, exception, communication, recovery, or closure choice is required?"],
              ["Action", "Which fictional owner, task, deadline, dependency, blocker, evidence, and completion condition follow?"],
              ["Record", "Which fictional message, decision log, action register, handoff, approval, delivery, and version must be preserved?"],
              ["Correction", "Which fictional earlier statement, scope, impact, owner, timing, or confidence changed and requires a visible update?"],
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
          eyebrow="Escalation"
          title="Eight Triggers for Additional Authority or Coordination"
          items={escalationTriggers}
        />

        <DetailSection
          eyebrow="Documentation"
          title="Eight Records That Preserve the Case"
          items={documentationRecords}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Communication, Escalation, and Documentation Terms
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
          title="Fake Incident Communication and Documentation Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook district."
          metrics={[
            {
              label: "Updates delivered on time",
              value: "92%",
              note: "Fictional technical, business, leadership, support, partner, and recovery updates delivered within approved cadence.",
            },
            {
              label: "Open escalation decisions",
              value: "3",
              note: "Fictional authority, vendor, and recovery-gate decisions awaiting owners and deadlines.",
            },
            {
              label: "Documentation completeness",
              value: "88%",
              note: "Fictional case records with evidence links, owners, timestamps, versions, approvals, and completion criteria.",
            },
          ]}
        />

        <FakeAlertCard
          title="Leadership Update Claims District-Wide Breach without Supporting Evidence"
          severity="High"
          time="10:12 AM"
          source="Fake Communication Quality Console"
          details="A fictional draft leadership update states that a district-wide data breach is confirmed. Current evidence supports a narrow preview-worker configuration weakness, no unrelated-file access, limited containment, one source-health gap, and no confirmed broad business impact."
          recommendation="Stop the draft; replace unsupported breach language with the validated classification; separate facts, supported conclusions, uncertainty, scope, and business impact; state current containment and fallback; identify decisions, owners, deadlines, and next update; obtain approval; preserve the rejected draft and correction reason; deliver audience-appropriate versions; and update the decision and communication logs."
        />

        <FakeLogPanel
          title="Fake Communication and Escalation Timeline"
          logs={[
            "08:40 UPDATE audience='technical' status='alert_under_review' impact='unknown'",
            "09:05 UPDATE audience='business' event='confirmed_security_event' breach='not_supported'",
            "09:20 SUPPORT workaround='manual_preview' owner='support_lead'",
            "09:45 CORRECTION prior='impact_unknown' current='unrelated_access_not_supported'",
            "10:15 LEADERSHIP scope='narrow' protection='active' decision='recovery_resources'",
            "11:00 VENDOR request='config_evidence' deadline='14:00' disclosure='need_to_know'",
            "13:00 HANDOFF facts='complete' actions='owned' blockers='visible'",
            "D2 10:00 RECOVERY canary='ready' approvals='requested'",
            "D2 14:00 SERVICE production='staged_restore' support_guidance='updated'",
            "D3 CORRECTION prior='recovery_complete' current='observation_open'",
            "D7 EXECUTIVE risk='low' sources='healthy' business='stable'",
            "D14 CLOSURE lessons='recorded' actions='owned' reopen='defined'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Leadership Update Is Best Supported?"
          evidence={[
            "The fictional preview worker used a broader-than-approved storage prefix.",
            "The shared service identity exceeded the approved permission boundary.",
            "No supplied file, transaction, or application evidence supports unrelated-file access.",
            "The worker and identity were contained without disabling unrelated support services.",
            "Manual fallback supports urgent cases.",
            "One source-health issue was repaired and later evidence confirmed the narrow impact boundary.",
            "Recovery requires approved artifact, identity, configuration, monitoring, business validation, and observation.",
          ]}
          question="Which update is strongest?"
          options={[
            "A narrow fictional security event is contained; no unrelated-file access is supported; service impact is limited with fallback available; recovery and observation remain open; leadership decisions are needed for resources and timing.",
            "A district-wide breach is confirmed.",
            "The case is closed because containment succeeded.",
            "No security issue occurred because no files were returned.",
          ]}
          bestAnswer={0}
          explanation="The strongest update preserves the validated weakness, limited impact, current protection, remaining work, and required decisions without exaggeration."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Communication, Escalation, and Documentation"
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
          title="Build a Fictional Communication, Escalation, and Documentation Package"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Communication Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review sixty supplied fictional records covering alerts,
                assessments, scope, containment, source health, business impact,
                support, recovery, audience needs, approvals, decision rights,
                messages, corrections, actions, deadlines, handoffs, residual
                risk, closure, and governance.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create fictional technical, business, leadership, support, partner, recovery, and closure updates.</li>
                <li>Build the audience matrix, communication cadence, approval path, and privacy guide.</li>
                <li>Create the escalation matrix with triggers, evidence, requested decisions, owners, deadlines, and alternatives.</li>
                <li>Complete the decision log, action register, communication archive, correction record, and handoff package.</li>
                <li>Review consistency, uncertainty, scope, impact, ownership, versions, and completion evidence.</li>
                <li>Produce a portfolio-safe executive communication package.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not contact, message,
            identify, request, publish, or expose real users, staff, systems,
            identities, files, routes, logs, contacts, owners, vendors, or
            private organizational communication.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Requests a One-Sentence Status"
          scenario="A fictional leader asks whether a district-wide breach is confirmed, but current evidence supports only a narrow security event with no unrelated-file access."
          choices={[
            {
              label: "Choice A",
              response:
                "State that a narrow fictional security event is contained, broader impact is not supported, recovery and observation remain open, and specific leadership decisions are listed in the attached brief.",
              outcome:
                "Best defensive choice. The message is brief without sacrificing evidence boundaries.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Say yes because the alert was high severity.",
              outcome:
                "Unsupported. Tool severity does not prove broad impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Say no incident occurred because no files were returned.",
              outcome:
                "Incorrect. A validated security event still occurred.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Previous Update Used Incorrect Recovery Language"
          scenario="A fictional service message said recovery was complete, but observation and source-health validation remain open."
          choices={[
            {
              label: "Choice A",
              response:
                "Issue a visible correction, identify the earlier statement, explain the remaining recovery gates, provide current service guidance, preserve both versions, and update the communication log.",
              outcome:
                "Best defensive choice. It protects trust and documentation integrity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Silently edit the old message.",
              outcome:
                "Weak. Reviewers and recipients lose the correction history.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the incorrect message unchanged.",
              outcome:
                "Unsafe. Stakeholders may make decisions from stale information.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Communication, Escalation, and Documentation Checklist"
          items={[
            "I separate fictional confirmed facts, supported conclusions, uncertainty, evidence gaps, scope, impact, actions, decisions, requests, and next-update expectations.",
            "I tailor technical, business, leadership, support, user, partner, recovery, and closure detail without changing the underlying case truth.",
            "I use need-to-know detail and avoid unnecessary identities, files, routes, sources, private records, and speculation.",
            "I define escalation triggers for severity, scope, containment, authority, evidence quality, recovery, deadlines, resources, privacy, and external obligations.",
            "I include supporting evidence, requested decision, owner, deadline, alternatives, urgency, and authority path in every escalation.",
            "I preserve case intake, evidence index, scope register, decision log, action register, communication archive, handoffs, recovery, closure, and lessons records.",
            "I assign every action, approval, blocker, deadline, update, correction, and completion criterion to an accountable owner.",
            "I preserve message versions, approvals, delivery records, corrections, superseded statements, and revision reasons.",
            "I perform consistency, accuracy, uncertainty, scope, privacy, ownership, and documentation-quality checks.",
            "I use only fictional information and never expose real contacts, systems, identities, routes, logs, files, evidence sources, owners, or private incident communication.",
          ]}
        />

        <MiniQuiz
          title="I11.6 Mini Quiz: Communication, Escalation, and Documentation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Communication, Escalation, and Documentation Package using at least sixty alert, assessment, scope, containment, source-health, business-impact, support, recovery, audience, approval, decision-right, message, correction, action, deadline, handoff, residual-risk, closure, and governance records. Include an audience matrix, communication plan, technical update, business update, leadership brief, support notice, partner request, correction notice, escalation matrix, decision log, action register, communication archive, handoff report, closure communication, and portfolio-safe executive summary."
          tips={[
            "Use only clearly fictional contacts, systems, identities, messages, routes, files, evidence, owners, vendors, timelines, and organizations.",
            "Preserve one case truth while changing detail and emphasis for each audience.",
            "Show visible uncertainty, requested decisions, owners, deadlines, versions, approvals, corrections, and next-update expectations.",
            "Do not include real contact lists, internal messages, system names, routes, identities, logs, filenames, case records, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional incident communication should separate facts, conclusions, uncertainty, scope, impact, actions, decisions, requests, and next updates.",
            "Audience tailoring changes detail and emphasis, not the underlying case truth.",
            "Defensible escalation uses a defined trigger, evidence, scope, urgency, requested decision, owner, deadline, alternatives, and authority path.",
            "Decision logs, action registers, communication archives, handoffs, corrections, and closure records protect continuity and accountability.",
            "Visible correction is stronger than silently editing or deleting an earlier inaccurate message.",
            "Professional communication uses need-to-know detail, privacy awareness, source limitations, owner clarity, version control, and portfolio-safe fictional evidence.",
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