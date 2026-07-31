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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/security-architecture`;
const previousLesson = `${modulePath}/what-security-architecture-means`;
const nextLesson = `${modulePath}/trust-boundaries-and-security-zones`;

const objectives = [
  "Explain defense in depth as coordinated fictional protection across prevention, detection, response, recovery, governance, and human decision-making rather than simply adding more tools.",
  "Distinguish independent control layers from duplicated controls that share the same platform, identity, data source, administrator, network path, supplier, or failure mode.",
  "Map fictional controls to mission outcomes, assets, trust boundaries, threats, evidence sources, owners, failure conditions, and validation methods.",
  "Design a fictional layered-defense strategy that preserves privacy, service continuity, evidence integrity, least privilege, safe failure, and recovery.",
  "Create a portfolio-ready defense-in-depth package using only invented organizations, systems, identities, evidence, decisions, dates, controls, and outcomes."
];
const vocabulary = [
  [
    "Defense in depth",
    "A fictional design strategy that combines coordinated preventive, detective, responsive, recovery, governance, and human controls so one failure does not expose the entire mission."
  ],
  [
    "Control layer",
    "A fictional safeguard or group of safeguards protecting a mission outcome, asset, identity, data flow, trust boundary, service, or recovery path."
  ],
  [
    "Preventive control",
    "A fictional safeguard intended to reduce the likelihood or scope of unsafe behavior before it succeeds."
  ],
  [
    "Detective control",
    "A fictional safeguard intended to produce trustworthy evidence that unusual, unauthorized, failed, or harmful activity may be occurring."
  ],
  [
    "Responsive control",
    "A fictional decision, workflow, communication, containment, or escalation used while an issue is being reviewed."
  ],
  [
    "Recovery control",
    "A fictional safeguard that restores identity, data, service, configuration, evidence, or operations to an approved known state."
  ],
  [
    "Compensating control",
    "A fictional alternative safeguard used when a preferred requirement cannot be implemented fully, with documented limits and owner approval."
  ],
  [
    "Control dependency",
    "A fictional platform, identity, source, network, administrator, supplier, service, clock, or process required for a control to work."
  ],
  [
    "Correlated failure",
    "A fictional event in which several controls fail together because they rely on the same dependency or assumption."
  ],
  [
    "Control diversity",
    "Using fictional safeguards with meaningfully different mechanisms, evidence, owners, or failure paths."
  ],
  [
    "Blast radius",
    "The fictional scope of systems, identities, users, data, services, or decisions affected when a failure occurs."
  ],
  [
    "Safe default",
    "A fictional state that limits access, exposure, or action when a control, input, owner, or dependency becomes unreliable."
  ],
  [
    "Fail-open",
    "A fictional behavior that allows access or service to continue when a control fails, preserving availability while increasing some security risk."
  ],
  [
    "Fail-closed",
    "A fictional behavior that blocks access or service when a control fails, reducing some exposure while increasing availability risk."
  ],
  [
    "Effective-state validation",
    "Evidence that a fictional control works in the actual design state rather than only appearing in documentation or intended configuration."
  ],
  [
    "Residual exposure",
    "The fictional risk remaining after layered controls are applied, including exceptions, shared dependencies, uncertainty, and operational limits."
  ]
];
const controlLayers = [
  {
    "layer": "Mission and governance",
    "objective": "Keep fictional security decisions aligned with purpose, ownership, privacy, service continuity, and risk tolerance.",
    "examples": "Requirements, approvals, exceptions, change control, review cadence, risk acceptance, and portfolio safety.",
    "failure": "Technical controls operate without clear authority, purpose, or residual-risk ownership.",
    "independence": "Can governance still stop or correct the design if a technical platform or operator fails?",
    "evidence": "Decision records, approvals, exceptions, review notes, and owner signoff."
  },
  {
    "layer": "Identity and privilege",
    "objective": "Limit which fictional humans, services, devices, and workloads may act and under what conditions.",
    "examples": "Authentication, authorization, least privilege, role separation, lifecycle, emergency access, review, and monitoring.",
    "failure": "One mistaken or compromised identity reaches too many critical functions.",
    "independence": "Do critical actions require separate approval, context, or evidence beyond the same identity service?",
    "evidence": "Role matrix, approvals, reviews, lifecycle records, and privileged-session evidence."
  },
  {
    "layer": "Workload and application protection",
    "objective": "Reduce fictional exposure and validate requests, authorization, configuration, errors, services, and dependencies.",
    "examples": "Secure baselines, least functionality, request validation, service identity, rate limits, error handling, and rollback.",
    "failure": "A weak workload becomes a path to data, identity, or service control.",
    "independence": "Can identity, network, data, and visibility controls still limit impact if the workload layer fails?",
    "evidence": "Baseline review, service map, authorization checks, error records, and approved tests."
  },
  {
    "layer": "Network and trust boundaries",
    "objective": "Limit unnecessary fictional communication and require validation where trust, ownership, or sensitivity changes.",
    "examples": "Zones, approved flows, gateways, segmentation, supplier paths, remote access, monitoring, and exceptions.",
    "failure": "A single allowed path enables broad movement or bypasses intended service boundaries.",
    "independence": "Do identity, application, and data controls still work if one network path is misconfigured?",
    "evidence": "Zone diagram, flow matrix, effective-path review, denied-path checks, and exception records."
  },
  {
    "layer": "Data protection and privacy",
    "objective": "Limit fictional collection, access, exposure, alteration, sharing, retention, and loss.",
    "examples": "Classification, minimum necessary, access control, encryption concepts, integrity, retention, deletion, backup, and audit.",
    "failure": "A broad identity or service failure exposes more information than the mission requires.",
    "independence": "Does data remain limited and recoverable if application or identity controls fail?",
    "evidence": "Data inventory, flow map, field allowlist, access evidence, retention, deletion, and restore checks."
  },
  {
    "layer": "Detection and visibility",
    "objective": "Provide trustworthy fictional evidence about identity, system, network, application, data, change, and recovery behavior.",
    "examples": "Logs, alerts, metrics, source health, time quality, integrity, retention, access, and case linkage.",
    "failure": "The team cannot detect or reconstruct control failure, misuse, drift, or recovery errors.",
    "independence": "Do important events remain visible if one platform, source, clock, or administrator becomes unreliable?",
    "evidence": "Coverage map, sample events, source-health records, time-quality checks, and access review."
  },
  {
    "layer": "Response and communication",
    "objective": "Coordinate fictional triage, containment, approvals, owner decisions, user guidance, supplier contact, and status messages.",
    "examples": "Playbooks, approval gates, case ownership, safe messages, escalation, corrections, and status cadence.",
    "failure": "A technically correct action creates confusion, service harm, privacy exposure, or delayed decisions.",
    "independence": "Can authorized owners pause or alter an automated or technical response?",
    "evidence": "Case notes, approvals, communication logs, acknowledgments, and corrections."
  },
  {
    "layer": "Resilience, recovery, and learning",
    "objective": "Preserve critical functions, restore known states, validate outcomes, and strengthen the fictional architecture after failure.",
    "examples": "Redundancy, backups, restoration, rollback, dependency order, exercises, after-action review, and improvement.",
    "failure": "One outage removes service, evidence, identity, recovery, and future learning together.",
    "independence": "Are recovery and review separate enough from the systems and owners they must restore or challenge?",
    "evidence": "Recovery exercises, restore records, health checks, lessons learned, corrective actions, and signoff."
  }
];
const independenceTests = [
  {
    "test": "Different mechanism",
    "question": "Does the fictional secondary control protect the outcome in a different way?",
    "weak": "Two passwords protect the same administrator account.",
    "strong": "Least privilege, independent approval, session evidence, validation, and rollback protect different stages.",
    "validation": "Map how each layer works and which failure it addresses."
  },
  {
    "test": "Different dependency",
    "question": "Do several fictional controls rely on the same identity service, platform, network, supplier, source, clock, or administrator?",
    "weak": "Authentication, approval, logging, and recovery all depend on one unavailable platform.",
    "strong": "Critical evidence, approval, and recovery retain separate approved paths and owners.",
    "validation": "Create a control-to-dependency matrix and review one-dependency loss."
  },
  {
    "test": "Different owner",
    "question": "Can one fictional person disable, bypass, approve, and hide every layer?",
    "weak": "One support administrator owns identity, application, data, logs, and backups.",
    "strong": "Critical decisions use role separation, owner-specific approval, and independent validation.",
    "validation": "Review authority, emergency access, approval, evidence ownership, and signoff."
  },
  {
    "test": "Different evidence",
    "question": "Would one fictional source failure remove proof from every layer?",
    "weak": "All controls write only to the same logging platform.",
    "strong": "Important actions leave source, destination, owner, and recovery evidence with source-health checks.",
    "validation": "Confirm key defender questions remain answerable when one source is unavailable."
  },
  {
    "test": "Different failure state",
    "question": "Do fictional controls fail open or fail closed in ways that create the same harmful outcome?",
    "weak": "Every layer blocks access when one shared service fails, causing total outage.",
    "strong": "Critical approved functions use a limited safe degraded mode while risky actions remain blocked.",
    "validation": "Document fail-open, fail-closed, degraded, manual, and recovery behavior."
  },
  {
    "test": "Different recovery path",
    "question": "Can fictional recovery operate if the primary environment, identity service, or administrator is unavailable?",
    "weak": "Backups require the same failed identity platform and administrator.",
    "strong": "Recovery uses separate approved authority, evidence, restore states, and validation.",
    "validation": "Review recovery access, integrity, dependency order, restoration, and post-recovery checks."
  }
];
const failureDomains = [
  {
    "domain": "Identity-service failure",
    "affected": "Authentication, authorization, approval, administration, attribution, and recovery access.",
    "danger": "Several fictional layers may fail together or block every service.",
    "response": "Use limited degraded service, separate emergency ownership, independent evidence, and recovery validation.",
    "stop": "No owner can confirm who may act safely during the outage."
  },
  {
    "domain": "Logging-platform failure",
    "affected": "Detection, investigation, change validation, identity evidence, supplier review, and recovery proof.",
    "danger": "The team may continue high-impact work without reliable evidence.",
    "response": "Use source-health alerts, independent records, action limits, manual review, and safe fallback.",
    "stop": "Critical actions cannot be reconstructed or attributed."
  },
  {
    "domain": "Network-control failure",
    "affected": "Segmentation, remote access, supplier paths, management traffic, and monitoring visibility.",
    "danger": "Broad reachability or unnecessary total service loss may occur.",
    "response": "Use identity and application validation, safe defaults, targeted isolation, approved fallback paths, and owner review.",
    "stop": "Effective paths cannot be confirmed against the approved design."
  },
  {
    "domain": "Administrator misuse or error",
    "affected": "Identity, configuration, data, logging, backup, recovery, and evidence integrity.",
    "danger": "One fictional identity may alter both systems and proof of the alteration.",
    "response": "Separate duties, require approval, limit sessions, preserve independent evidence, and review effective state.",
    "stop": "The same identity can change controls and remove all evidence."
  },
  {
    "domain": "Bad automation or rule update",
    "affected": "Detection, response, identity, communication, service availability, fairness, and audit.",
    "danger": "The same incorrect fictional action may scale rapidly.",
    "response": "Use narrow scope, approval gates, rate limits, versioning, rollback, monitoring, and manual fallback.",
    "stop": "High-impact action occurs without approver, explanation, or rollback."
  },
  {
    "domain": "Recovery-path failure",
    "affected": "Restoration, evidence, continuity, trust, identity, data consistency, and future resilience.",
    "danger": "The organization may restore unsafe, incomplete, or altered states.",
    "response": "Use separate ownership, protected restore states, integrity checks, exercises, and complete service validation.",
    "stop": "Restore integrity or recovery authority cannot be confirmed."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the mission outcome",
    "questions": "Which fictional function, user need, data, service, decision, or recovery outcome must remain protected?",
    "output": "Mission and critical-outcome statement.",
    "stop": "Do not design layers without knowing which outcome they protect."
  },
  {
    "step": "2",
    "title": "Identify assets, flows, and trust boundaries",
    "questions": "Which fictional systems, identities, data, paths, suppliers, owners, and dependencies enable the outcome?",
    "output": "Context, trust-boundary, and dependency map.",
    "stop": "Pause if important ownership or paths are unclear."
  },
  {
    "step": "3",
    "title": "Write control objectives",
    "questions": "What must the fictional design prevent, detect, limit, preserve, continue, restore, explain, and validate?",
    "output": "Measurable layered-control requirements.",
    "stop": "Reject vague objectives that cannot be tested."
  },
  {
    "step": "4",
    "title": "Select control layers",
    "questions": "Which fictional identity, workload, network, application, data, visibility, response, recovery, and governance safeguards support each objective?",
    "output": "Layered control map.",
    "stop": "Do not count repeated versions of the same control as independent depth."
  },
  {
    "step": "5",
    "title": "Map dependencies and correlated failure",
    "questions": "Which fictional platform, identity, administrator, supplier, source, network, clock, or process does each layer require?",
    "output": "Control-to-dependency and failure-domain matrix.",
    "stop": "Pause if one failure removes prevention, evidence, response, and recovery together."
  },
  {
    "step": "6",
    "title": "Design safe failure",
    "questions": "Should each fictional control fail open, fail closed, degrade, pause, or require manual fallback?",
    "output": "Failure-state and fallback design.",
    "stop": "Do not accept uncontrolled access or unnecessary total outage."
  },
  {
    "step": "7",
    "title": "Assign ownership and approval",
    "questions": "Who designs, operates, changes, monitors, approves, validates, recovers, communicates, and accepts residual exposure?",
    "output": "Control-owner and decision map.",
    "stop": "Pause if one person can bypass all layers or hide the evidence."
  },
  {
    "step": "8",
    "title": "Validate layers and the combined service",
    "questions": "What fictional evidence proves individual controls and end-to-end outcomes work under normal, degraded, failed, and recovered states?",
    "output": "Layer and end-to-end validation plan.",
    "stop": "Do not approve based only on intended configuration."
  },
  {
    "step": "9",
    "title": "Measure residual exposure",
    "questions": "What fictional risk remains from exceptions, shared dependencies, uncertainty, usability, privacy, service, suppliers, and recovery limits?",
    "output": "Residual-exposure register and owner decision.",
    "stop": "Do not claim that defense in depth makes the system perfectly secure."
  },
  {
    "step": "10",
    "title": "Govern change and improvement",
    "questions": "How are fictional controls, dependencies, owners, exceptions, evidence, failures, suppliers, and recovery reviewed over time?",
    "output": "Defense-depth lifecycle and improvement plan.",
    "stop": "Do not allow layers to drift, duplicate, or lose evidence silently."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "responsibility": "Defines the fictional critical outcome, acceptable disruption, user need, service priority, and business risk.",
    "decision": "Whether the layered design protects the mission sufficiently.",
    "evidence": "Mission priorities, service expectations, options, and risk acceptance."
  },
  {
    "role": "Security architect",
    "responsibility": "Coordinates fictional control objectives, layers, dependencies, failure states, evidence, tradeoffs, and decisions.",
    "decision": "Whether the layers are meaningful, independent enough, measurable, and governed.",
    "evidence": "Layer map, dependency matrix, requirements, failure analysis, and validation plan."
  },
  {
    "role": "Identity owner",
    "responsibility": "Owns fictional authentication, authorization, privilege, lifecycle, emergency access, approval, and identity evidence.",
    "decision": "Which identities and access paths may support each layer.",
    "evidence": "Role matrix, approvals, lifecycle, privileged-session records, and reviews."
  },
  {
    "role": "Network and platform owner",
    "responsibility": "Owns fictional zones, paths, gateways, infrastructure, dependencies, configuration, availability, and monitoring.",
    "decision": "Which communication paths and fallback modes are supportable.",
    "evidence": "Flow matrix, effective-state checks, health records, changes, and exceptions."
  },
  {
    "role": "Service and data owners",
    "responsibility": "Own fictional service behavior, dependencies, continuity, data purpose, fields, access, retention, deletion, and restore needs.",
    "decision": "Whether controls preserve service and minimum-necessary data use.",
    "evidence": "Service map, data inventory, access review, health tests, retention, deletion, and rollback."
  },
  {
    "role": "Evidence owner",
    "responsibility": "Owns fictional logs, alerts, metrics, source health, time quality, integrity, access, retention, and coverage.",
    "decision": "Whether layer failure and recovery can be detected and reconstructed.",
    "evidence": "Coverage map, source-health checks, sample events, and retention evidence."
  },
  {
    "role": "Response and recovery owner",
    "responsibility": "Owns fictional containment, communication, rollback, continuity, restoration, exercises, and recovery validation.",
    "decision": "Whether the design can fail and recover safely.",
    "evidence": "Playbooks, approvals, restore records, health checks, and signoff."
  },
  {
    "role": "Governance and risk owner",
    "responsibility": "Owns fictional versions, exceptions, review cadence, control drift, residual exposure, and final acceptance.",
    "decision": "Which layered design and remaining risk are acceptable.",
    "evidence": "Decision record, architecture diff, exceptions, corrective actions, and acceptance."
  }
];
const patterns = [
  {
    "pattern": "Identity plus context plus approval",
    "mission": "Protect fictional privileged changes without relying on one password or one identity decision.",
    "layers": "Authentication, least privilege, separate approval, session evidence, change validation, and rollback.",
    "resistance": "A stolen credential alone does not create complete authority.",
    "validation": "Approved requests succeed; unapproved or context-mismatched requests are denied and recorded."
  },
  {
    "pattern": "Segmented service path",
    "mission": "Limit fictional application-to-data communication to the required service path.",
    "layers": "Trust zones, service identity, application authorization, narrow data role, path monitoring, and denied direct administration.",
    "resistance": "One network or application mistake does not expose every data function.",
    "validation": "Approved flow works; alternate path is denied; evidence identifies actor, service, target, and result."
  },
  {
    "pattern": "Protected evidence chain",
    "mission": "Preserve fictional evidence when one logging component fails.",
    "layers": "Source records, transport health, central analysis, independent administrative evidence, time-quality monitoring, and access control.",
    "resistance": "One platform outage does not remove all visibility.",
    "validation": "Important actions remain reconstructable during source or platform degradation."
  },
  {
    "pattern": "Safe automated response",
    "mission": "Reduce fictional risk quickly without scaling an incorrect action.",
    "layers": "Narrow detection, evidence enrichment, human approval, service context, rate limit, reversible action, audit, and rollback.",
    "resistance": "One noisy rule cannot disable many critical identities.",
    "validation": "Noisy input triggers pause or capped action rather than broad disruption."
  },
  {
    "pattern": "Resilient recovery",
    "mission": "Restore fictional service, identity, data, logging, access, and communication from known states.",
    "layers": "Protected recovery identity, separate evidence, data integrity, dependency order, service checks, user validation, and monitoring.",
    "resistance": "Recovery does not depend completely on the failed production environment.",
    "validation": "The complete service outcome is restored and independently signed off."
  },
  {
    "pattern": "Governed supplier dependency",
    "mission": "Use a fictional external service without relying on invisible supplier assumptions.",
    "layers": "Supplier requirements, owner, evidence, access limits, monitoring, communication, fallback, exit, and risk review.",
    "resistance": "Supplier outage or change does not remove every mission function.",
    "validation": "Fallback, evidence, communication, and owner decisions are reviewed and exercised conceptually."
  }
];
const evidence = [
  {
    "id": "DID-01",
    "source": "Fictional control inventory",
    "observation": "Five controls depend on the same identity service and administrator group.",
    "supports": "The design has correlated identity and ownership dependencies.",
    "limits": "Does not prove the controls are ineffective during normal operation.",
    "use": "Add independent approval, evidence, fallback, and recovery paths."
  },
  {
    "id": "DID-02",
    "source": "Fictional network diagram",
    "observation": "Public, application, data, management, logging, and backup zones exist.",
    "supports": "The design intends several trust and service boundaries.",
    "limits": "Does not prove effective paths, identity checks, or denied communication.",
    "use": "Validate flows and combine network boundaries with identity, application, data, and monitoring controls."
  },
  {
    "id": "DID-03",
    "source": "Fictional visibility map",
    "observation": "Application and identity events are recorded, but changes to logging and backup controls are not.",
    "supports": "A privileged administrator may alter systems and reduce evidence.",
    "limits": "Does not prove this occurred.",
    "use": "Add independent administrative evidence and source-health alerts."
  },
  {
    "id": "DID-04",
    "source": "Fictional automation record",
    "observation": "One High alert can trigger broad account disabling without service-owner approval.",
    "supports": "The response layer may scale a false positive into service disruption.",
    "limits": "Does not prove the alert is wrong.",
    "use": "Use enrichment, approval gates, rate limits, targeted reversible action, and audit."
  },
  {
    "id": "DID-05",
    "source": "Fictional recovery exercise",
    "observation": "Restoration requires the same identity service and administrator group that failed.",
    "supports": "Recovery is not independent from the primary failure domain.",
    "limits": "Does not prove all backup data is unusable.",
    "use": "Redesign recovery authority, evidence, and validation with separate approved paths."
  },
  {
    "id": "DID-06",
    "source": "Fictional service-health review",
    "observation": "Fail-closed identity behavior protects administration but blocks a critical support function.",
    "supports": "One failure state creates availability harm.",
    "limits": "Does not prove fail-open behavior is safer.",
    "use": "Define a limited safe degraded mode for critical approved functions."
  },
  {
    "id": "DID-07",
    "source": "Fictional exception register",
    "observation": "Three temporary network and privilege exceptions have no expiration, owner review, or monitoring.",
    "supports": "Exceptions may silently weaken several layers.",
    "limits": "Does not prove the exceptions are unnecessary.",
    "use": "Assign owner, purpose, expiration, evidence, validation, and removal criteria."
  },
  {
    "id": "DID-08",
    "source": "Fictional after-action review",
    "observation": "A previous event identified the same shared dependencies, but no architecture change was completed.",
    "supports": "The learning and governance layer is ineffective.",
    "limits": "Does not prove every recommendation was feasible.",
    "use": "Assign corrective owners, deadlines, evidence, and independent closure validation."
  }
];
const mistakes = [
  "Counting several fictional tools as defense in depth when they rely on the same identity, platform, administrator, source, network, supplier, or recovery path.",
  "Adding layers without connecting them to a mission outcome, asset, trust boundary, owner, failure, evidence source, and validation method.",
  "Focusing only on prevention while neglecting visibility, response, recovery, communication, and improvement.",
  "Assuming a firewall, identity provider, or logging platform automatically creates independent protection.",
  "Using broad fail-closed behavior that protects one boundary but causes unnecessary total outage.",
  "Using fail-open behavior without limiting privilege, data, service, time, action, evidence, or owner review.",
  "Allowing the same fictional administrator to change systems, approvals, logs, backups, and recovery evidence.",
  "Treating backups as recovery without testing authority, integrity, dependency order, identity restoration, service health, and logging.",
  "Automating high-impact action without human approval, service context, rate limits, audit, and rollback.",
  "Leaving temporary exceptions without owner, purpose, expiration, monitoring, validation, and removal.",
  "Assuming more controls always improve security even when complexity makes operation and recovery unreliable.",
  "Validating each control separately but never testing the complete fictional service outcome.",
  "Failing to update the architecture after incidents, tests, supplier changes, or control drift.",
  "Using real internal control maps, diagrams, configurations, logs, identities, suppliers, or failure reports in a portfolio artifact."
];
const quiz = [
  {
    "question": "What best describes defense in depth?",
    "choices": [
      "Buying several security products.",
      "Coordinating fictional preventive, detective, response, recovery, governance, and human controls so one failure does not expose the mission.",
      "Using the same control in several locations.",
      "Blocking every action whenever any system fails."
    ],
    "answer": 1,
    "explanation": "Defense in depth depends on coordinated outcomes, meaningful diversity, ownership, evidence, and safe failure—not tool count."
  },
  {
    "question": "Five fictional controls depend on the same identity service and administrator group. What is the main concern?",
    "choices": [
      "There are too many controls.",
      "A correlated failure could remove several layers at once.",
      "Identity should never be used in security.",
      "The controls are automatically ineffective."
    ],
    "answer": 1,
    "explanation": "Shared dependencies can make apparently separate controls fail together."
  },
  {
    "question": "Which design provides the strongest independent depth for a privileged fictional change?",
    "choices": [
      "Two passwords on the same administrator account.",
      "Authentication, least privilege, separate approval, session evidence, validation, and rollback.",
      "One administrator with more training.",
      "A longer password only."
    ],
    "answer": 1,
    "explanation": "The stronger design protects different stages with different mechanisms, owners, evidence, and recovery."
  },
  {
    "question": "A fictional logging platform fails. What is the strongest response?",
    "choices": [
      "Continue every high-impact action because systems still work.",
      "Use source-health alerts, independent evidence, action limits, manual review, and safe fallback until visibility returns.",
      "Delete local evidence.",
      "Assume no event occurred."
    ],
    "answer": 1,
    "explanation": "When evidence becomes unreliable, high-impact decisions should be limited and alternate approved evidence should be used."
  },
  {
    "question": "Why can fail-closed behavior be risky?",
    "choices": [
      "It always allows access.",
      "It may protect one boundary while causing unnecessary loss of critical service or recovery capability.",
      "It removes all security controls.",
      "It is never appropriate."
    ],
    "answer": 1,
    "explanation": "Fail-closed can be appropriate, but service and safety consequences must be designed and validated."
  },
  {
    "question": "What is strongest evidence that layered controls work?",
    "choices": [
      "The diagram contains many control icons.",
      "Each control is configured.",
      "Normal, degraded, failed, and recovered fictional service outcomes are validated with trustworthy evidence and owner signoff.",
      "The supplier says the design is secure."
    ],
    "answer": 2,
    "explanation": "Defense in depth must be validated as an end-to-end system under several conditions."
  },
  {
    "question": "What makes an A2.2 portfolio artifact safe to share?",
    "choices": [
      "Only real usernames are changed.",
      "Internal diagrams are cropped.",
      "Every organization, system, identity, control, dependency, failure, evidence item, decision, date, and outcome is invented.",
      "The real design is summarized without credentials."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, systems, people, and security designs."
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A2
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function DefenseInDepthDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A2</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 10</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Layered Defense</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.2 Defense-in-Depth Design
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders build fictional control layers that
            prevent, detect, limit, respond, recover, and improve without all
            failing through the same platform, identity, administrator, data
            source, network path, supplier, or assumption.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A2: Security Architecture"
          lessonTitle="Defense-in-Depth Design"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, controls, dependencies, evidence, failures, decisions, dates, and outcomes.",
            "I understand that more tools do not automatically create more independent protection.",
            "I will connect each fictional layer to a mission outcome, asset, trust boundary, owner, failure mode, evidence source, and validation method.",
            "I will not upload or reproduce real internal control maps, configurations, logs, network details, credentials, supplier information, or failure reports.",
            "I will analyze only supplied fictional evidence and will not access, scan, test, change, or investigate real systems.",
            "I will document correlated failures, safe defaults, degraded operation, recovery, residual exposure, and owner decisions.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Five Controls Can Still Equal One Failure">
          <p className="leading-8">
            A fictional design lists identity checks, approval, privileged
            access, logging, and recovery as separate layers. All five depend
            on the same identity platform and administrator group. If that
            dependency becomes unavailable or untrustworthy, prevention,
            evidence, response, and recovery may fail together. Defense in
            depth requires meaningful independence, not a longer inventory.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">False depth</p>
              <p className="mt-2 leading-7">Several fictional controls share the same platform, owner, identity, evidence source, network, and recovery path.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defensible depth</p>
              <p className="mt-2 leading-7">Layers protect different stages, retain evidence, fail safely, recover independently, and have clear owners.</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Layered Protection Should Reduce Likelihood and Consequence">
          <p className="leading-8">
            Fictional preventive controls lower the chance of unsafe action,
            but no control is perfect. Detection should reveal failed
            prevention. Response should limit scope while preserving service
            and evidence. Recovery should restore known safe outcomes.
            Governance and learning should prevent the same weakness from
            returning.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Reduce likelihood", "Use fictional secure defaults, least privilege, segmentation, validation, and approved change."],
              ["Reduce impact", "Limit fictional blast radius through narrow access, service boundaries, rate limits, and targeted response."],
              ["Restore trust", "Preserve fictional evidence, recover known states, validate outcomes, communicate, and improve."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Model" title="Prevent → Detect → Limit → Recover → Learn">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Prevent", "Reduce fictional unsafe access, exposure, change, communication, and data use before harm occurs."],
              ["Detect", "Produce trustworthy fictional evidence that a control, service, identity, path, or assumption may have failed."],
              ["Limit", "Use fictional response, segmentation, approval, rate limits, and service context to contain impact."],
              ["Recover", "Restore fictional identity, data, service, evidence, access, and trust from approved known states."],
              ["Learn", "Use fictional tests, events, exceptions, and evidence to improve architecture and ownership."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Language for Layered Defense">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Control Layers</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Connected Layers of a Defensible Fictional Architecture</h2>
          <div className="mt-6 grid gap-5">
            {controlLayers.map((item) => (
              <article key={item.layer} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-100">{item.layer}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.objective}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Examples", item.examples],
                    ["Failure mode", item.failure],
                    ["Independence question", item.independence],
                    ["Evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div key={`${item.layer}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Independence Tests</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Tests for Real Depth versus Repeated Weakness</h2>
          <div className="mt-6 grid gap-5">
            {independenceTests.map((item) => (
              <article key={item.test} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.test}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak example</p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong example</p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Validation</p>
                    <p className="mt-2 text-sm leading-6">{item.validation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Correlated Failure Domains</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Happens When Shared Dependencies Fail</h2>
          <div className="mt-6 grid gap-5">
            {failureDomains.map((item) => (
              <article key={item.domain} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.domain}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Affected layers", item.affected],
                    ["Main danger", item.danger],
                    ["Design response", item.response],
                    ["Stop condition", item.stop],
                  ].map(([label, detail]) => (
                    <div key={`${item.domain}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defense-in-Depth Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Ten Steps from Mission Outcome to Governed Layers</h2>
          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</span>
                  <h3 className="text-lg font-black text-cyan-100">{item.title}</h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Required output</p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Stop condition</p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Layer Ownership</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Owners for Design, Operation, Validation, and Risk</h2>
          <div className="mt-6 grid gap-5">
            {owners.map((item) => (
              <article key={item.role} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.role}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Responsibility", item.responsibility],
                    ["Primary decision", item.decision],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div key={`${item.role}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Design Patterns</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Patterns for Meaningful Layered Protection</h2>
          <div className="mt-6 grid gap-5">
            {patterns.map((item) => (
              <article key={item.pattern} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.pattern}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission outcome", item.mission],
                    ["Layers", item.layers],
                    ["Failure resistance", item.resistance],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div key={`${item.pattern}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Defense-in-Depth Dashboard"
          subtitle="Fictional control-layer, dependency, evidence, failure, and recovery review for training only."
          metrics={[
            { label: "Listed controls", value: "12", note: "Twelve controls appear in the fictional inventory." },
            { label: "Shared dependencies", value: "5", note: "Identity, administration, logging, approval, and recovery share one platform and owner group." },
            { label: "Depth status", value: "Weak", note: "The design has multiple controls but insufficient independence and recovery separation." },
          ]}
        />

        <FakeAlertCard
          title="Layered Controls Share One Identity, Evidence, and Recovery Failure Domain"
          severity="High"
          time="3:18 PM"
          source="Fake Northbridge Defense Architecture Console"
          details="Five fictional controls depend on the same identity platform and administrator group. High-impact automation can disable critical accounts without service approval, and restoration requires the same failed access path."
          recommendation="Pause approval, map dependencies, separate authority and evidence, add approval gates and rate limits, design safe degraded operation, create independent recovery access, validate end-to-end outcomes, and document residual exposure."
        />

        <FakeLogPanel
          title="Fake Layered-Defense Review Timeline"
          logs={[
            "14:00 CONTROL identity-auth='enabled'",
            "14:01 CONTROL privileged-approval='same-idp'",
            "14:02 CONTROL admin-logging='same-platform'",
            "14:03 CONTROL recovery-access='same-idp'",
            "14:04 OWNER admin-group='shared'",
            "14:15 DEPENDENCY correlated='confirmed'",
            "14:30 AUTOMATION broad-disable='allowed'",
            "14:31 APPROVAL service-owner='missing'",
            "14:45 LOGGING backup-change='not-covered'",
            "15:00 RECOVERY restore-access='primary-idp'",
            "15:01 RECOVERY independence='failed'",
            "15:05 FAIL-CLOSED support-service='blocked'",
            "15:10 EXCEPTION count='3-unowned'",
            "15:15 DECISION architecture='paused'",
            "15:18 STATUS redesign='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fictional Evidence Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Evidence before Approving the Layered Design</h2>
          <div className="mt-6 grid gap-5">
            {evidence.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Design use", item.use],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Does the Fictional Design Have Real Defense in Depth?"
          question="Does the current fictional Northbridge design provide meaningful independent defense in depth?"
          evidence={[
            "Five controls depend on the same identity platform and administrator group.",
            "One High alert can trigger broad account disabling without service-owner approval.",
            "Application and identity events are logged, but logging and backup changes are not.",
            "Restoration requires the same identity platform that failed.",
            "Fail-closed identity behavior blocks a critical support function.",
            "Three temporary exceptions have no owner, expiration, or monitoring.",
            "A previous review identified the same dependencies without corrective closure.",
          ]}
          options={[
            "No. Pause approval, map shared dependencies, separate authority and evidence, design safe degraded operation, add approval and rate limits, create independent recovery, govern exceptions, and validate the combined service outcome.",
            "Yes, because five controls are listed.",
            "Yes, because fail-closed behavior is always secure.",
            "Yes, because backups exist.",
          ]}
          bestAnswer={0}
          explanation="Meaningful defense in depth requires mission-linked layers, different failure paths, trustworthy evidence, safe fallback, independent recovery, ownership, validation, and improvement."
        />

        <SectionCard eyebrow="Common Layering Mistakes" title="What Advanced Defenders Must Avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build a Fictional Defense-in-Depth Strategy">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Redesign the Northbridge Layer Stack</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                internal controls, diagrams, configurations, credentials,
                logs, network details, supplier information, or failure reports.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Mission outcome, assets, dependencies, and trust boundaries.</li>
                <li>Control objectives across prevention, detection, response, recovery, governance, and learning.</li>
                <li>Eight-layer fictional control map.</li>
                <li>Control-to-dependency and owner matrix.</li>
                <li>Correlated-failure and blast-radius analysis.</li>
                <li>Fail-open, fail-closed, degraded, manual, and recovery decisions.</li>
                <li>Evidence coverage and source-health plan.</li>
                <li>Layer and end-to-end validation matrix.</li>
                <li>Residual-exposure, exception, change, and improvement register.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, testing, configuration, change, recovery, or
            investigation involving any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Identity Platform Becomes Unavailable"
          scenario="The fictional identity platform provides authentication, approval, administrator access, evidence attribution, and recovery access. It becomes unavailable during an important support period."
          choices={[
            {
              label: "Choice A",
              response: "Use a preapproved limited degraded mode for critical support, block high-risk administration, activate separate emergency ownership and evidence, restore the platform, and validate every affected layer.",
              outcome: "Best professional choice. The response protects the mission without creating uncontrolled privilege.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Fail open for every user and administrator.",
              outcome: "Risky. Broad access creates uncontrolled security and accountability harm.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Fail closed for every function and wait.",
              outcome: "Risky. Total outage may be unnecessary when a controlled degraded mode is available.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A High Alert Triggers Broad Automation"
          scenario="One fictional High alert can disable many service accounts automatically. The affected services are critical, evidence is incomplete, and no service owner approves the action."
          choices={[
            {
              label: "Choice A",
              response: "Pause broad automation, enrich the evidence, require human and service-owner approval, apply rate limits, use a targeted reversible action, preserve audit records, and validate impact.",
              outcome: "Best professional choice. The design keeps speed without allowing one weak signal to scale harm.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the automation because High alerts are urgent.",
              outcome: "Risky. Severity does not prove correctness, authority, or proportionality.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove all automation permanently.",
              outcome: "Unsafe. Automation can provide value when bounded, approved, auditable, and reversible.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard eyebrow="Advanced Challenge" title="Protect the Mission after a Shared Platform Failure">
          <p className="leading-8">
            Extend the fictional Northbridge design for a scenario in which one
            platform provides identity, approval, administrative access,
            logging, and recovery. The platform becomes unreliable while the
            service must continue in a limited safe mode. Design independent
            safeguards that preserve critical outcomes, block risky actions,
            retain evidence, assign authority, support recovery, and validate
            the complete service state.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Required architecture", "Show fictional control objectives, alternate dependencies, owners, safe defaults, degraded service, evidence, fallback, recovery order, and validation."],
              ["Required defense", "Explain why each added layer is meaningfully different and which correlated failure or blast radius it reduces."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50">
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Defense-in-Depth Design Checklist"
          items={[
            "I can state the fictional mission outcome, assets, dependencies, trust boundaries, and blast-radius concerns.",
            "I can distinguish fictional preventive, detective, response, recovery, governance, and learning controls.",
            "I can connect every fictional layer to an objective, owner, evidence source, failure mode, and validation method.",
            "I can identify fictional shared platforms, identities, administrators, suppliers, networks, sources, clocks, and recovery dependencies.",
            "I can distinguish meaningful fictional control diversity from duplicated controls that fail together.",
            "I can design fictional fail-open, fail-closed, degraded, manual, and recovery states based on mission and risk.",
            "I can protect fictional evidence when logging, identity, network, automation, administrator, supplier, or recovery dependencies fail.",
            "I can require fictional human approval, service context, rate limits, audit, rollback, and targeted action for high-impact automation.",
            "I can assign fictional mission, architecture, identity, network, service, data, evidence, recovery, governance, and risk owners.",
            "I can validate fictional controls individually and as a complete end-to-end service outcome.",
            "I can document fictional exceptions, residual exposure, architecture changes, lessons learned, corrective owners, and closure evidence.",
            "I will never use real internal control maps, diagrams, configurations, logs, identities, supplier details, or failure reports in this portfolio.",
          ]}
        />

        <MiniQuiz title="A2.2 Mini Quiz: Defense-in-Depth Design" questions={quiz} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Defense-in-Depth Design Package for Northbridge. Include the mission outcome, assets, dependencies, trust boundaries, control objectives, layered map, independence tests, dependency matrix, correlated-failure analysis, blast-radius review, fail-open and fail-closed decisions, safe degraded mode, owner map, evidence coverage, automation controls, recovery separation, validation plan, exception register, residual exposure, improvement actions, reflection, revision history, and a statement that every organization, system, identity, control, dependency, failure, evidence item, decision, date, and outcome is invented."
          tips={[
            "Count a fictional layer only when it adds meaningful independent value.",
            "Show which platform, identity, owner, source, network, supplier, or clock each control depends on.",
            "Include at least one correlated failure and redesign the architecture around it.",
            "Validate the complete fictional service under normal, degraded, failed, and recovered states.",
            "Keep every control, architecture element, evidence item, decision, and outcome fully invented and safe to share.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready to Map Trust Boundaries and Security Zones?">
          <p className="leading-8">
            Before moving to A2.3, rate your readiness from 1 to 5 for each
            area: control objectives, layer diversity, dependency mapping,
            correlated failure, blast radius, failure-state decisions,
            ownership, evidence, recovery, and end-to-end validation.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why several fictional tools may still represent one failure domain.",
              "I can map fictional preventive, detective, response, recovery, governance, and learning layers.",
              "I can identify fictional shared dependencies and correlated failures.",
              "I can design fictional safe degraded operation without uncontrolled access or unnecessary total outage.",
              "I can validate fictional controls individually and as a complete service outcome.",
              "I can keep the entire defense-in-depth portfolio fully invented and safe to share.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional control layer you can defend confidently, one
            shared dependency you would challenge before approval, and one
            boundary question you will carry into A2.3.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Defense in depth is coordinated layered protection, not a count of products or controls.",
            "Fictional layers should reduce likelihood, reveal failure, limit impact, support recovery, and improve future design.",
            "Several controls may still represent one failure when they share a platform, identity, administrator, source, network, supplier, clock, or recovery path.",
            "Meaningful depth requires different mechanisms, dependencies, owners, evidence, failure states, trust boundaries, or recovery paths.",
            "Fail-open and fail-closed decisions should protect both security and mission outcomes through approved safe degraded modes.",
            "High-impact fictional automation requires evidence, human approval, service context, rate limits, audit, rollback, and targeted action.",
            "Recovery is a control layer only when authority, evidence, integrity, dependencies, restoration, and validation are protected.",
            "Layered controls should be validated individually and as an end-to-end fictional service under normal, degraded, failed, and recovered conditions.",
            "Exceptions and lessons learned need owners, deadlines, evidence, architecture updates, and independent closure.",
            "Every CyberShield defense-in-depth artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module A2</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}