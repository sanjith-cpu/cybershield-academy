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
const modulePath = `${trackPath}/cloud-security-basics`;
const previousLesson = `${modulePath}/cloud-networking-and-service-exposure`;
const nextLesson = `${modulePath}/cloud-configuration-and-misconfiguration-defense`;

const objectives = [
  "Explain fictional cloud logging sources across identity, control plane, storage, database, network, application, configuration, billing, key use, backup, and provider support.",
  "Evaluate fictional monitoring coverage by comparing expected events, source enablement, delivery health, retention, access, ownership, timestamps, and incident usefulness.",
  "Distinguish a detection rule, alert, direct observation, supported finding, alternative explanation, confidence statement, limitation, and missing evidence.",
  "Build fictional cloud detections that reduce false positives through context, baselines, allowlists, suppression, aggregation, severity, owner, and response criteria.",
  "Create a portfolio-safe fictional cloud monitoring package with a source matrix, source-health review, detections, investigation records, findings, validation, tuning, and communication."
];
const vocabulary = [
  [
    "Cloud audit log",
    "A fictional record of cloud management activity such as creating, changing, deleting, authorizing, or configuring a resource."
  ],
  [
    "Identity log",
    "A fictional record of sign-in, federation, role activation, role assumption, service identity, authentication, and session activity."
  ],
  [
    "Control-plane event",
    "A fictional event showing management actions performed through the cloud provider's administrative interfaces or APIs."
  ],
  [
    "Data-plane event",
    "A fictional event showing interaction with stored objects, database records, application data, queues, functions, or service payloads."
  ],
  [
    "Flow record",
    "A fictional summary of network communication such as source, destination, protocol, action, bytes, and duration."
  ],
  [
    "Configuration history",
    "A fictional record showing how cloud resources, policies, logging, networking, encryption, and service settings changed over time."
  ],
  [
    "Source health",
    "The fictional condition of a logging source, including enablement, expected events, delivery delay, parsing, completeness, retention, access, and ownership."
  ],
  [
    "Detection rule",
    "A fictional analytical condition that identifies behavior requiring review based on supplied events and context."
  ],
  [
    "False positive",
    "A fictional alert that correctly matches a rule but does not represent the risk or condition the rule was intended to identify."
  ],
  [
    "Detection gap",
    "A fictional important activity or resource that lacks required event coverage, rule logic, ownership, retention, or response."
  ]
];
const logSources = [
  {
    "source": "Identity and federation",
    "records": "Fictional sign-ins, failures, service sessions, federation, role activation, role assumption, authentication context, and lifecycle events.",
    "questions": "Which identity, source, role, session, authentication method, device or workload, target, time, and result are recorded?",
    "gaps": "Missing service-identity activity, incomplete federation detail, short retention, or no privileged-session context.",
    "evidence": "Identity configuration, source matrix, sample events, delivery health, retention, access, and owner review."
  },
  {
    "source": "Control plane",
    "records": "Fictional resource creation, policy changes, role assignments, logging changes, network changes, key changes, deletion, and provider administrative actions.",
    "questions": "Which actor changed which resource, from which source, using which session, with which request, result, and change record?",
    "gaps": "Logging disabled for one account or region, delayed export, unclear provider actions, or no linkage to change approvals.",
    "evidence": "Audit configuration, account coverage, event samples, provider documentation, change records, and source-health checks."
  },
  {
    "source": "Storage and object access",
    "records": "Fictional object reads, writes, deletes, sharing, policy changes, lifecycle actions, version operations, and unusual access patterns.",
    "questions": "Which identity accessed which storage resource, object group, action, path, network source, and result?",
    "gaps": "Object-level logging enabled only for some collections or excluded from long-term retention.",
    "evidence": "Storage audit configuration, object-access samples, policy, identity, network, retention, and data-owner records."
  },
  {
    "source": "Database and query audit",
    "records": "Fictional connection, role, query class, schema, data-change, administrative, backup, restore, and failure activity.",
    "questions": "Which application or identity connected, what operation category occurred, which database or view was involved, and what was the result?",
    "gaps": "Administrative actions logged but read-only reporting queries omitted or masked by application-level pooling.",
    "evidence": "Database audit configuration, role map, connection logs, application identity, query categories, and owner requirements."
  },
  {
    "source": "Network and DNS",
    "records": "Fictional flows, accepted or denied connections, DNS queries, gateway events, load-balancer requests, endpoint activity, and provider-service paths.",
    "questions": "Which source reached which destination, through which path, with what action, bytes, duration, name resolution, and application context?",
    "gaps": "One private subnet lacks flow coverage or DNS logs have shorter retention than the investigation window.",
    "evidence": "Network logging configuration, subnet coverage, delivery health, DNS records, flow records, routes, and application logs."
  },
  {
    "source": "Application and workload",
    "records": "Fictional requests, job starts, errors, role use, object operations, database calls, function invocations, deployment versions, and business outcomes.",
    "questions": "Which service, workload identity, version, request, job, result, data object, and user-facing effect are recorded?",
    "gaps": "Application events use local time, lack request identifiers, or are delivered in delayed batches.",
    "evidence": "Application configuration, log format, deployment record, source health, request correlation, and service-owner review."
  },
  {
    "source": "Configuration and posture",
    "records": "Fictional current state, policy compliance, public-access settings, encryption, logging, network exposure, backup coverage, and drift.",
    "questions": "Which configuration changed, from what expected baseline, under which owner, exception, approval, and validation?",
    "gaps": "Snapshots are periodic and may not capture short-lived drift or effective access from several policy layers.",
    "evidence": "Configuration history, policy evaluation, change records, effective-access analysis, and owner approval."
  },
  {
    "source": "Key and secret use",
    "records": "Fictional key use, policy change, disable, deletion schedule, rotation, failure, secret retrieval, and unusual source activity.",
    "questions": "Which identity used or changed which key or secret, for which service, resource, result, and business workflow?",
    "gaps": "Provider-managed key detail may be limited or application secret access may not include the final data operation.",
    "evidence": "Key policy, use audit, service configuration, identity records, application logs, and recovery evidence."
  },
  {
    "source": "Backup and recovery",
    "records": "Fictional backup success, failure, coverage, retention, restore, deletion, policy change, recovery identity, and validation.",
    "questions": "Which dataset was protected, which recovery point was created, which restore was tested, and which owner approved the result?",
    "gaps": "Green backup status may not reveal excluded data, unavailable keys, untested restores, or missing recovery paths.",
    "evidence": "Backup jobs, asset map, failure alerts, restore test, identity, key, target, and recovery-owner records."
  }
];
const sourceHealthFields = [
  {
    "field": "Expected events",
    "purpose": "Defines which fictional activities should generate records for the reviewed identity, resource, action, and time window.",
    "example": "Role changes, storage reads, denied flows, application jobs, and key-policy updates.",
    "quality": "The event expectation is tied to provider documentation and the actual service configuration."
  },
  {
    "field": "Enablement and scope",
    "purpose": "Confirms fictional logging is enabled for every required account, project, region, resource, and event category.",
    "example": "Control-plane enabled in all regions; object access enabled for confidential collections.",
    "quality": "Coverage gaps and deliberate exclusions are explicit."
  },
  {
    "field": "Delivery and delay",
    "purpose": "Records fictional collection path, forwarding, queueing, batching, receipt time, loss, and health alerts.",
    "example": "Application events delivered twelve minutes late while identity and network sources remained current.",
    "quality": "Event time and receipt time remain separate."
  },
  {
    "field": "Parsing and normalization",
    "purpose": "Shows whether fictional fields, identifiers, time zones, actions, results, and resource names were transformed correctly.",
    "example": "Role session, source, resource, action, result, original time, and normalized time preserved.",
    "quality": "Original values and transformation method remain available."
  },
  {
    "field": "Retention and availability",
    "purpose": "Defines how long fictional records remain searchable, archived, recoverable, and accessible for incident needs.",
    "example": "Thirty-day searchable window plus approved long-term archive for security audit.",
    "quality": "Retention matches business, investigation, privacy, and cost requirements."
  },
  {
    "field": "Access and integrity",
    "purpose": "Identifies who may read, change, delete, export, or administer fictional logs and how unauthorized changes are detected.",
    "example": "Cloud Security Operations reads; Evidence Custodian controls archive export; application identities cannot modify records.",
    "quality": "Logging is protected from the systems it observes when practical."
  },
  {
    "field": "Ownership and response",
    "purpose": "Assigns fictional source owner, health owner, detection owner, responder, escalation, and review cadence.",
    "example": "Identity Governance owns sign-in source; Security Operations owns privileged-role detection.",
    "quality": "No source or detection remains unowned."
  },
  {
    "field": "Known limitations",
    "purpose": "Preserves fictional missing fields, sampling, aggregation, provider limits, disabled categories, blind spots, and uncertain completeness.",
    "example": "Flow logs do not include payload and one private subnet is outside coverage.",
    "quality": "Limitations appear in every finding that depends on the source."
  }
];
const detectionFields = [
  {
    "field": "Detection objective",
    "purpose": "States the exact fictional risk or control condition the rule should identify.",
    "example": "Identify unapproved privileged-role activation outside the normal access workflow.",
    "quality": "One clear defensive question rather than a vague suspicious-activity goal."
  },
  {
    "field": "Required sources",
    "purpose": "Lists the fictional identity, control-plane, application, network, configuration, and owner data needed.",
    "example": "Role activation, approval record, session, source network, administrative action, and expiration.",
    "quality": "Every source is healthy enough for the detection claim."
  },
  {
    "field": "Logic and threshold",
    "purpose": "Defines fictional actions, conditions, aggregation, time window, volume, sequence, and exceptions.",
    "example": "Privileged activation without matching approval within ten fictional minutes.",
    "quality": "The rule can be tested with both expected and unexpected examples."
  },
  {
    "field": "Context and enrichment",
    "purpose": "Adds fictional owner, asset, identity type, data class, region, environment, change record, and business purpose.",
    "example": "Production identity, restricted archive, after-hours, no approved change.",
    "quality": "Context improves priority without replacing evidence."
  },
  {
    "field": "Severity and priority",
    "purpose": "Connects fictional exposure, privilege, data sensitivity, confidence, business effect, and response urgency.",
    "example": "High severity for unapproved tenant-wide administrator activation.",
    "quality": "Severity is based on evidence and impact, not dramatic wording."
  },
  {
    "field": "False-positive controls",
    "purpose": "Documents fictional allowlists, maintenance windows, expected service identities, aggregation, suppression, and review.",
    "example": "Suppress approved monthly recovery test only when request, owner, source, and time all match.",
    "quality": "Suppression never hides important exceptions or destroys evidence."
  },
  {
    "field": "Response playbook",
    "purpose": "Assigns fictional triage, validation, owner contact, evidence, escalation, containment, communication, and closure.",
    "example": "Validate approval, identity, session, action, impact, and source health before changing access.",
    "quality": "The response remains authorized, reversible, and evidence-driven."
  },
  {
    "field": "Validation and tuning",
    "purpose": "Records fictional test cases, expected results, misses, false positives, source changes, version, reviewer, and next review.",
    "example": "Test approved activation, missing approval, delayed approval, break-glass event, and source outage.",
    "quality": "Detection changes are versioned and linked to evidence."
  }
];
const monitoringMatrix = [
  {
    "id": "NLC-MON-01",
    "source": "Identity and privileged sessions",
    "coverage": "Human sign-ins, service sessions, federation, role activation, and role assumption",
    "health": "Current and complete for the approved window",
    "owner": "Identity Governance",
    "detection": "Unapproved privileged activation and stale partner use",
    "gap": "Break-glass access test alert has not been validated recently.",
    "confidence": "High"
  },
  {
    "id": "NLC-MON-02",
    "source": "Control-plane audit",
    "coverage": "All fictional accounts and regions",
    "health": "Current; one provider maintenance category is delayed",
    "owner": "Cloud Security Operations",
    "detection": "Logging disable, policy change, network exposure, key change, and resource deletion",
    "gap": "Provider maintenance events require separate interpretation.",
    "confidence": "High"
  },
  {
    "id": "NLC-MON-03",
    "source": "Storage object access",
    "coverage": "Approved-content, export-packages, support attachments, and security archive",
    "health": "Healthy for listed resources",
    "owner": "Storage Security Owner",
    "detection": "Unexpected reads, sharing, deletion, broad listing, and unusual source",
    "gap": "Archive-secondary object access is not enabled.",
    "confidence": "High for covered resources"
  },
  {
    "id": "NLC-MON-04",
    "source": "Database audit",
    "coverage": "Administrative actions and application writes",
    "health": "Current",
    "owner": "Learning Data Owner",
    "detection": "Unapproved role changes, schema changes, and unusual write activity",
    "gap": "Read-only reporting query coverage requires validation.",
    "confidence": "Medium-High"
  },
  {
    "id": "NLC-MON-05",
    "source": "Network flow and DNS",
    "coverage": "Public edge, application subnet, management zone, and recovery zone",
    "health": "Healthy for covered zones",
    "owner": "Cloud Network Team",
    "detection": "Unexpected external destination, denied path spikes, and administrative-source mismatch",
    "gap": "One private-service subnet lacks flow logging.",
    "confidence": "High for covered zones"
  },
  {
    "id": "NLC-MON-06",
    "source": "Application and function events",
    "coverage": "Learning portal, export function, preview service, and support workflow",
    "health": "Application events may arrive twelve fictional minutes late",
    "owner": "Learning Application Team",
    "detection": "Failed export spikes, unexpected target collection, and repeated authorization failures",
    "gap": "Delayed delivery can create apparent timeline conflicts.",
    "confidence": "High after delay adjustment"
  },
  {
    "id": "NLC-MON-07",
    "source": "Configuration and posture",
    "coverage": "Identity, storage, network, logging, encryption, backup, and public-access settings",
    "health": "Periodic snapshots every fifteen fictional minutes",
    "owner": "Cloud Governance Team",
    "detection": "Drift from secure baseline and unapproved exception",
    "gap": "Short-lived changes may occur between snapshots.",
    "confidence": "Medium-High"
  },
  {
    "id": "NLC-MON-08",
    "source": "Key and secret audit",
    "coverage": "Customer-managed key use, policy changes, disable, and deletion schedule",
    "health": "Current",
    "owner": "Key Management Owner",
    "detection": "Unexpected key use, broad policy change, disable, and deletion scheduling",
    "gap": "Provider-managed key detail is limited.",
    "confidence": "High for customer-managed keys"
  }
];
const detections = [
  {
    "id": "NLC-DET-01",
    "title": "Unapproved privileged-role activation",
    "objective": "Identify fictional tenant-wide privileged activation without a matching approved request.",
    "sources": "Identity activation, approval workflow, source network, session, control-plane actions, and owner record",
    "logic": "Privileged activation with no matching approval in the expected time window",
    "false_positive": "Delayed approval export or approved break-glass event",
    "response": "Validate source health, approval, identity, session, actions, owner, and impact before access changes.",
    "severity": "High"
  },
  {
    "id": "NLC-DET-02",
    "title": "Cloud audit logging disabled",
    "objective": "Identify fictional removal or reduction of required control-plane, storage, network, database, or key logging.",
    "sources": "Control-plane audit, configuration history, logging health, change record, and owner approval",
    "logic": "Required logging changes from enabled to disabled or coverage decreases",
    "false_positive": "Approved short maintenance with alternate evidence and automatic restoration",
    "response": "Confirm change authority, preserve alternate evidence, restore coverage safely, and assess blind-spot duration.",
    "severity": "High"
  },
  {
    "id": "NLC-DET-03",
    "title": "Unexpected storage access source",
    "objective": "Identify fictional confidential-object access from an identity, network source, region, or application outside the approved baseline.",
    "sources": "Object access, identity, network, application, resource policy, and owner baseline",
    "logic": "Confidential object read where one or more approved-context fields do not match",
    "false_positive": "Approved recovery test, migration, or support action",
    "response": "Validate business context, effective permission, object scope, source health, related activity, and owner decision.",
    "severity": "High"
  },
  {
    "id": "NLC-DET-04",
    "title": "General egress from restricted workload",
    "objective": "Identify fictional outbound communication from the export function to destinations outside approved storage and monitoring services.",
    "sources": "Flow records, DNS, function logs, route map, workload identity, and dependency baseline",
    "logic": "Observed destination not in approved service set",
    "false_positive": "Approved provider update, certificate, or health dependency",
    "response": "Confirm destination ownership, dependency, process or function context, data boundary, and safe egress change.",
    "severity": "Medium"
  },
  {
    "id": "NLC-DET-05",
    "title": "Stale partner identity use",
    "objective": "Identify fictional sign-in or role use after project closure, sponsor expiration, or access-review failure.",
    "sources": "Federation, role session, sponsor, project status, expiration, resource access, and application records",
    "logic": "Partner session after approved business end date without renewed sponsor approval",
    "false_positive": "Approved post-project validation or contract extension",
    "response": "Validate sponsor, purpose, session, resources, impact, expiration, and removal or renewal decision.",
    "severity": "High"
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional monitoring question",
    "detail": "Restate the approved assets, identities, actions, data, services, accounts, regions, time window, evidence sources, owners, privacy limits, and prohibited real-system actions.",
    "output": "Monitoring-review objective and scope."
  },
  {
    "step": "2",
    "title": "Inventory sources and expected events",
    "detail": "Record fictional identity, control-plane, storage, database, network, application, configuration, key, backup, billing, and provider sources with expected event categories.",
    "output": "Cloud logging source matrix."
  },
  {
    "step": "3",
    "title": "Validate source health",
    "detail": "Confirm fictional enablement, scope, delivery, delay, parsing, normalization, retention, access, integrity, ownership, and known limitations.",
    "output": "Source-health and evidence-boundary register."
  },
  {
    "step": "4",
    "title": "Define detections and baselines",
    "detail": "State fictional objective, sources, logic, threshold, enrichment, severity, expected behavior, false-positive controls, and response criteria.",
    "output": "Detection-rule specification."
  },
  {
    "step": "5",
    "title": "Investigate alerts with several sources",
    "detail": "Compare fictional identity, change, network, storage, application, owner, provider, approval, and business records before reaching a finding.",
    "output": "Alert investigation and evidence matrix."
  },
  {
    "step": "6",
    "title": "Tune without hiding risk",
    "detail": "Use fictional aggregation, allowlists, maintenance windows, suppression, thresholds, enrichment, and rule versions while preserving evidence and exceptions.",
    "output": "Detection tuning and validation record."
  },
  {
    "step": "7",
    "title": "Close coverage and response gaps",
    "detail": "Assign fictional source, detection, response, retention, ownership, approval, validation, rollback, monitoring, and completion actions.",
    "output": "Monitoring improvement plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional evidence lineage, source limitations, confidence, residual risk, reviewer approval, owner decisions, and portfolio-safe reporting.",
    "output": "Reviewed cloud monitoring package."
  }
];
const findings = [
  {
    "id": "NLC-MON-F01",
    "statement": "The fictional control-plane and identity sources provide strong coverage for privileged-role changes and administrative activity during the approved window.",
    "support": "Source enablement, account and region coverage, delivery health, event samples, retention, access, and owner review.",
    "alternative": "Provider maintenance events may appear through a separate category and require interpretation.",
    "confidence": "High",
    "limitation": "The conclusion does not extend to every data-plane action."
  },
  {
    "id": "NLC-MON-F02",
    "statement": "Archive-secondary lacks object-level access logging, creating a detection and negative-evidence gap for that collection.",
    "support": "Storage audit configuration, resource inventory, data classification, owner requirement, source matrix, and event coverage.",
    "alternative": "Identity, network, and application logs may supply partial context but do not replace object-access records.",
    "confidence": "High",
    "limitation": "The gap does not prove unauthorized activity occurred."
  },
  {
    "id": "NLC-MON-F03",
    "statement": "One private-service subnet lacks flow logging, reducing confidence in claims about network silence for that zone.",
    "support": "Subnet inventory, flow configuration, source-health matrix, route map, owner record, and delivery status.",
    "alternative": "Application, DNS, endpoint, and provider service logs may provide partial evidence.",
    "confidence": "High",
    "limitation": "Missing flow coverage does not independently support suspicious activity."
  },
  {
    "id": "NLC-MON-F04",
    "statement": "Application-event delay can create false timeline conflicts unless event time and receipt time are preserved separately.",
    "support": "Application source-health record, event sample, receipt record, identity event, network flow, and storage transaction.",
    "alternative": "Clock drift was considered but not supported by the supplied synchronization records.",
    "confidence": "High",
    "limitation": "Some application batches may still contain coarse event precision."
  },
  {
    "id": "NLC-MON-F05",
    "statement": "The unapproved privileged-role detection is well supported but requires a tested break-glass exception and delayed-approval handling.",
    "support": "Detection logic, identity source, approval workflow, emergency procedure, test cases, and owner review.",
    "alternative": "A missing approval may result from delayed workflow delivery rather than unauthorized activation.",
    "confidence": "Medium-High",
    "limitation": "The rule should not auto-contain without validating source health and emergency context."
  }
];
const commonMistakes = [
  "Assuming a fictional log source is healthy because events are visible in one dashboard.",
  "Failing to define which events should exist before using source silence as evidence.",
  "Combining event time, receipt time, processing time, and dashboard display time into one timestamp.",
  "Treating control-plane logs as complete evidence of storage, database, network, application, or user activity.",
  "Treating a flow record as proof of payload content, data access, or human intent.",
  "Treating a configuration snapshot as proof that a short-lived change never occurred between snapshots.",
  "Building detections without named owners, source-health checks, baselines, false-positive controls, response criteria, and validation.",
  "Suppressing noisy alerts without preserving exceptions, evidence, review, and version history.",
  "Auto-remediating identity, network, storage, or key changes before validating authorization, dependencies, source health, and rollback.",
  "Assuming a green backup status proves complete coverage or successful recovery.",
  "Ignoring privacy, retention, access, and integrity requirements for the monitoring data itself.",
  "Using or exposing any real cloud tenant, account, project, identity, role, resource, log, alert, address, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What should be confirmed before using missing fictional events as evidence?",
    "choices": [
      "Expected event generation, enablement, scope, delivery, parsing, retention, access, ownership, and source health.",
      "Only the dashboard color.",
      "Only the severity label.",
      "Only the current time."
    ],
    "answer": 0,
    "explanation": "Absence is meaningful only within a verified source boundary."
  },
  {
    "question": "Why should fictional event time and receipt time remain separate?",
    "choices": [
      "They describe when the activity occurred and when the monitoring system received the record, which may differ.",
      "They are always identical.",
      "Receipt time is always more accurate.",
      "Only receipt time belongs in a timeline."
    ],
    "answer": 0,
    "explanation": "Delivery delay can create misleading sequence conclusions if the two meanings are combined."
  },
  {
    "question": "What makes a fictional detection rule reviewable?",
    "choices": [
      "A clear objective, required sources, logic, threshold, context, severity, false-positive controls, response, validation, and version history.",
      "A dramatic rule name.",
      "A high alert count.",
      "One screenshot."
    ],
    "answer": 0,
    "explanation": "A reviewable detection connects evidence, context, testing, response, and ownership."
  },
  {
    "question": "Which statement about a fictional high-severity alert is strongest?",
    "choices": [
      "The alert matched a high-priority rule and requires investigation; the underlying condition and impact are not confirmed until evidence is reviewed.",
      "A high-severity alert proves an incident occurred.",
      "The alert proves malicious intent.",
      "The alert should always trigger immediate destructive action."
    ],
    "answer": 0,
    "explanation": "Alert severity prioritizes review but does not replace investigation."
  },
  {
    "question": "What is the safest use of suppression?",
    "choices": [
      "Limit repeated expected alerts under documented conditions while preserving exceptions, evidence, ownership, review, and version history.",
      "Hide every noisy alert permanently.",
      "Delete the underlying records.",
      "Suppress all privileged activity during maintenance."
    ],
    "answer": 0,
    "explanation": "Suppression should reduce noise without hiding meaningful risk or destroying evidence."
  },
  {
    "question": "What can fictional billing records most directly support?",
    "choices": [
      "A change in aggregated resource usage or cost that should be correlated with deployment, workload, and owner evidence.",
      "The exact identity that performed an action.",
      "The full data payload.",
      "Confirmed compromise."
    ],
    "answer": 0,
    "explanation": "Billing data is useful context but is usually delayed and aggregated."
  },
  {
    "question": "What makes a fictional cloud monitoring finding defensible?",
    "choices": [
      "It links expected events, source health, several sources, direct observations, alternatives, confidence, limitations, ownership, and response decisions.",
      "It relies on one alert.",
      "It ignores retention and delivery delay.",
      "It treats silence as proof without coverage validation."
    ],
    "answer": 0,
    "explanation": "Defensible monitoring conclusions preserve both evidence and source boundaries."
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

export default function CloudLoggingMonitoringDetectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I13
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.5 Cloud Logging, Monitoring, and Detection
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders evaluate fictional cloud identity,
            control-plane, storage, database, network, application,
            configuration, key, backup, billing, and provider records; validate
            source health; investigate alerts; tune detections; and communicate
            bounded findings without touching any real cloud environment.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I13: Cloud Security Basics"
          lessonTitle="Cloud Logging, Monitoring, and Detection"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud events and monitoring records.",
            "I will not sign in to, query, export from, connect to, configure, disable, test, scan, or investigate any real cloud tenant, identity, account, resource, log, alert, network, database, storage service, key, backup, or private record.",
            "I will verify expected events, source coverage, delivery, parsing, retention, access, ownership, and limitations before using absence as evidence.",
            "I will treat alerts as investigation starting points rather than proof of incidents, intent, or impact.",
            "I will preserve fictional evidence lineage, alternatives, confidence, limitations, owner decisions, validation, tuning, and portfolio safety.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Green Dashboard Can Still Hide a Blind Spot"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud shows healthy control-plane
            and identity logging. However, object-level access logging is
            missing for archive-secondary, one private-service subnet lacks flow
            records, application events may arrive twelve minutes late, and a
            database reporting path has uncertain query coverage. A dashboard
            can be green while important questions remain unanswerable.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak monitoring
              </p>

              <p className="mt-2 leading-7">
                Trust one dashboard, assume missing events mean no activity,
                treat every high alert as confirmed, and suppress noise without
                preserving exceptions or evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional monitoring
              </p>

              <p className="mt-2 leading-7">
                Define expected events, validate source health, correlate
                independent evidence, preserve event and receipt times, tune
                carefully, and assign clear response and review ownership.
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
          title="Monitoring Quality Determines What Defenders Can Know"
        >
          <p className="leading-8">
            Fictional cloud investigations depend on records from several
            services with different event meanings, time zones, delays,
            retention, access, and limitations. If a source is disabled,
            delayed, incomplete, misparsed, inaccessible, unowned, or
            short-lived, the final conclusion must reflect that weakness.
            Strong monitoring therefore protects the sources themselves and
            makes every alert traceable to expected events, healthy evidence,
            context, and a reviewable response.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Sourceā€“Signalā€“Contextā€“Decision Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Source", "Which fictional service generated the event, what should it record, and is its enablement, delivery, parsing, retention, access, and ownership healthy?"],
              ["Signal", "Which fictional event, sequence, threshold, change, absence, volume, or relationship triggered review?"],
              ["Context", "Which fictional identity, owner, asset, data class, region, baseline, change, application, network, and business purpose explain the signal?"],
              ["Decision", "Which fictional finding, confidence, limitation, response, tuning, owner, validation, and closure action is supported?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Cloud Logging, Detection, and Source-Health Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Logging Sources
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Cloud Evidence Families
          </h2>

          <div className="mt-6 grid gap-5">
            {logSources.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.source}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Typical records
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.records}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Review questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common gaps
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.gaps}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Evidence needed
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Source Health
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields before Trusting a Fictional Log Source
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceHealthFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Detection Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Reviewable Fictional Detection
          </h2>

          <div className="mt-6 grid gap-5">
            {detectionFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Monitoring Coverage
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Source and Detection Matrix
          </h2>

          <div className="mt-6 grid gap-5">
            {monitoringMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.source}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Coverage", item.coverage],
                    ["Source health", item.health],
                    ["Owner", item.owner],
                    ["Detection use", item.detection],
                    ["Known gap", item.gap],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Detection Library
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Cloud Detections
          </h2>

          <div className="mt-6 grid gap-5">
            {detections.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.title}</h3>

                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    {item.severity}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Objective", item.objective],
                    ["Required sources", item.sources],
                    ["Logic", item.logic],
                    ["False-positive possibility", item.false_positive],
                    ["Response", item.response],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Build, Investigate, Tune, and Review Cloud Monitoring
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Cloud Monitoring Dashboard"
          subtitle="Training dashboard for fictional cloud evidence only."
          metrics={[
            {
              label: "Logging sources reviewed",
              value: "10",
              note: "Identity, control plane, storage, database, network, application, configuration, keys, backup, and billing are mapped.",
            },
            {
              label: "Coverage gaps",
              value: "5",
              note: "Object access, private-subnet flow, database reads, backup scope, and break-glass validation require action.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports monitoring gaps and alerts, but no confirmed incident impact.",
            },
          ]}
        />

        <FakeAlertCard
          title="Privileged Role Activated without an Immediate Approval Match"
          severity="High"
          time="11:18 AM"
          source="Fake Cloud Detection Console"
          details="A fictional tenant-wide security administrator role was activated from the approved management network, but the approval-workflow export does not yet contain a matching request."
          recommendation="Do not auto-contain based on the alert alone. Verify approval-source health and delay, break-glass procedure, identity, authentication, session, source, actions, owner, and business context. Preserve event and receipt times, document confidence and limits, escalate if the approval remains absent, and tune delayed-approval handling after review."
        />

        <FakeLogPanel
          title="Fake Northbridge Cloud Monitoring Records"
          logs={[
            "10:58 IDENTITY role='cloud-security-admin' activation='success'",
            "10:58 SESSION source='management-zone' auth='strong'",
            "10:59 CONTROL action='view security policy' result='success'",
            "11:00 APPROVAL lookup='no match received'",
            "11:01 HEALTH approval_source='delivery delay 15m'",
            "11:02 BREAKGLASS use='false' test_status='overdue'",
            "11:04 OWNER oncall='Cloud Security Operations'",
            "11:06 STORAGE archive-secondary object_logging='disabled'",
            "11:07 FLOW private-service-subnet coverage='missing'",
            "11:09 APP delivery_delay='12m' event_time='preserved'",
            "11:11 DETECTION confidence='medium pending approval source'",
            "11:13 ACTION containment='deferred pending validation'",
            "11:15 APPROVAL event_time='10:56' receipt_time='11:15'",
            "11:16 FINDING activation='approved' delivery_delay='confirmed'",
            "11:18 TUNE delayed_approval='preserve alert + lower duplicate noise'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Monitoring Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="What Does the Privileged-Activation Alert Support?"
          evidence={[
            "The fictional privileged role was activated successfully.",
            "The source was the approved management network.",
            "Strong authentication was recorded.",
            "The first approval lookup showed no matching request.",
            "The approval source had a fifteen-minute delivery delay.",
            "A matching approval with event time before activation arrived later.",
            "Only policy-viewing activity appears during the session.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The alert correctly identified a missing immediate approval match, but delayed approval delivery explains the condition; the activation was approved and no unsupported high-impact action is shown.",
            "The administrator acted maliciously.",
            "The role activation proves a cloud incident.",
            "The detection should be disabled because it produced a false positive.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves the alert value, source delay, approved context, observed activity, and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Monitoring and Detection"
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
          title="Build the Northbridge Cloud Monitoring and Detection Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Source Matrix, Health Review, Detections, Investigation, and Tuning
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud monitoring review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Cloud source inventory with expected events, accounts, regions, resources, owners, and evidence purposes.</li>
                <li>Source-health matrix covering enablement, delivery, delay, parsing, retention, access, integrity, ownership, and limits.</li>
                <li>Six detection specifications with logic, context, severity, false-positive controls, response, validation, and versions.</li>
                <li>Privileged-role alert investigation with direct observations, alternatives, confidence, limitations, and final finding.</li>
                <li>Coverage-gap register for storage, network, database, backup, and emergency-access evidence.</li>
                <li>Detection tuning record with test cases, expected results, misses, false positives, owners, reviewers, and next review.</li>
                <li>Monitoring improvement plan with approval, validation, rollback, retention, and completion evidence.</li>
                <li>Technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not query, enable, disable, export, test, or inspect any real
            cloud logging or monitoring system. Complete the lab only with
            fictional records displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Approval Record Is Missing when the Alert Fires"
          scenario="The fictional privileged-role alert fires because no approval record is immediately visible, but the approval source is known to be delayed."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the alert, verify source health, event and receipt times, break-glass status, identity, session, actions, owner, and delayed approval before deciding on containment or tuning.",
              outcome:
                "Best defensive choice. The signal is investigated without ignoring urgency or overstating certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the administrator immediately and declare malicious activity.",
              outcome:
                "Unsafe. The evidence and source-health condition are not yet resolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Suppress every missing-approval alert because the source is sometimes delayed.",
              outcome:
                "Unsafe. Real unapproved activations could be hidden.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Noisy Storage Detection Generates Repeated Alerts"
          scenario="The fictional storage detection repeatedly alerts during an approved monthly recovery test."
          choices={[
            {
              label: "Choice A",
              response:
                "Create a narrow documented suppression using the approved test identity, source, resource, request, owner, and time window while preserving exceptions, evidence, review, and rule versioning.",
              outcome:
                "Best defensive choice. Noise is reduced without hiding unrelated storage activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the entire storage detection.",
              outcome:
                "Unsafe. Important unexpected access could be missed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the recovery-test events from the monitoring system.",
              outcome:
                "Unsafe. Evidence should remain preserved.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Logging, Monitoring, and Detection Checklist"
          items={[
            "I can inventory fictional identity, control-plane, storage, database, network, application, configuration, key, backup, billing, and provider log sources.",
            "I can define which events each fictional source should generate for the approved question.",
            "I can validate source enablement, scope, delivery, delay, parsing, normalization, retention, access, integrity, ownership, and limitations.",
            "I can preserve event time, receipt time, original fields, normalized fields, and transformation methods.",
            "I can design fictional detections with objective, sources, logic, context, severity, false-positive controls, response, validation, and version history.",
            "I can treat alerts as investigation starting points rather than confirmed incidents.",
            "I can tune detections with aggregation, allowlists, maintenance windows, suppression, thresholds, enrichment, evidence preservation, and review.",
            "I can write monitoring findings with independent evidence, alternatives, confidence, limitations, source-health boundaries, and owner decisions.",
            "I can assign source, detection, response, retention, validation, rollback, and completion ownership.",
            "I will use only fictional evidence and never access or expose real cloud logs, alerts, identities, resources, accounts, owners, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.5 Mini Quiz: Cloud Logging, Monitoring, and Detection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Logging, Monitoring, and Detection Package for the Northbridge Learning Cloud. Include source inventory, expected events, source-health matrix, logging coverage, retention, access, integrity, detection specifications, baselines, alert investigation, alternatives, confidence, limitations, tuning, validation, false-positive controls, response playbooks, improvement actions, technical summary, leadership summary, and a portfolio-safety statement."
          tips={[
            "Use only fictional accounts, identities, resources, events, logs, alerts, rules, owners, dates, times, and decisions.",
            "Do not treat an alert, dashboard, high severity, missing event, or billing anomaly as proof of an incident.",
            "Preserve event and receipt times, source-health limitations, independent-source relationships, and rule versions.",
            "Make every detection and source owned, tested, reviewable, privacy-aware, and linked to an authorized response.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud monitoring quality depends on expected events, source enablement, delivery, parsing, retention, access, integrity, ownership, and limitations.",
            "Control-plane, data-plane, identity, network, application, configuration, key, backup, and billing sources answer different questions.",
            "An alert shows that a rule matched; it does not independently prove an incident, intent, or impact.",
            "Event time and receipt time should remain separate when delivery delay exists.",
            "Detection tuning should reduce noise without hiding exceptions, deleting evidence, or weakening coverage.",
            "Negative conclusions require verified source health and coverage.",
            "Portfolio artifacts should use fully fictional cloud monitoring evidence and never expose real logs or environments.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I13
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