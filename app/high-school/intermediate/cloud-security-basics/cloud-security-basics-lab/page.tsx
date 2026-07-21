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
const previousLesson = `${modulePath}/cloud-incident-response-and-recovery`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional shared responsibility, identity, storage, networking, logging, configuration, incident response, recovery, and communication into one cloud-security case.",
  "Build a defensible fictional cloud evidence package that separates direct observations, supported findings, alternatives, confidence, limitations, potential impact, and confirmed impact.",
  "Prioritize fictional cloud risks by combining exposure, privilege, data sensitivity, reachability, source health, business effect, control coverage, and remediation readiness.",
  "Create a staged fictional remediation plan with owners, approvals, validation, rollback, monitoring, communication, residual risk, and closure evidence.",
  "Produce a portfolio-safe fictional cloud security lab report suitable for technical, leadership, teacher, and student audiences."
];
const vocabulary = [
  [
    "Integrated cloud review",
    "A fictional defensive assessment that combines identity, data, network, logging, configuration, incident, recovery, provider, and business evidence."
  ],
  [
    "Evidence register",
    "A fictional inventory of supplied records with source, owner, scope, timing, health, lineage, limitations, and use."
  ],
  [
    "Responsibility matrix",
    "A fictional map assigning provider, customer, application, identity, data, network, monitoring, recovery, and approval duties."
  ],
  [
    "Effective access",
    "The fictional permission that remains after direct roles, groups, resource policies, guardrails, denies, session conditions, and application rules are combined."
  ],
  [
    "Effective reachability",
    "The fictional network path that remains after addresses, routes, gateways, endpoints, rules, return paths, service policies, identities, and application controls are combined."
  ],
  [
    "Source health",
    "The fictional condition of a logging source, including enablement, scope, delivery, delay, parsing, retention, access, integrity, ownership, and limitations."
  ],
  [
    "Configuration drift",
    "A fictional difference between the approved secure baseline and the current effective cloud state."
  ],
  [
    "Combined risk",
    "A fictional risk that becomes more important because several access, network, monitoring, recovery, ownership, or configuration weaknesses affect the same asset or workflow."
  ],
  [
    "Containment",
    "A fictional action that limits further risk while preserving evidence, service, recovery options, authority, and rollback."
  ],
  [
    "Recovery validation",
    "Fictional evidence that approved identities, data, services, paths, keys, monitoring, user functions, and owners are ready after restoration."
  ]
];
const caseOverview = [
  {
    "area": "Cloud architecture",
    "detail": "The fictional service uses a public application edge, application subnet, private data services, managed object storage, managed database, serverless export automation, monitoring, and backup services.",
    "owner": "Cloud Architecture Owner",
    "question": "Which provider and customer responsibilities, trust boundaries, dependencies, and alternate paths exist?"
  },
  {
    "area": "Identity",
    "detail": "The fictional environment contains human users, service identities, partner federation, privileged roles, support roles, recovery roles, and emergency access.",
    "owner": "Identity Governance",
    "question": "Which identities have effective access beyond current business need?"
  },
  {
    "area": "Data",
    "detail": "The fictional service stores public course content, confidential student-progress records, confidential exports, support attachments, restricted audit records, and recovery copies.",
    "owner": "Learning Data Owner",
    "question": "Are access, classification, encryption, versioning, retention, logging, backup, and recovery aligned?"
  },
  {
    "area": "Network",
    "detail": "The fictional design includes public entry, private endpoints, provider-service routing, application egress, management access, monitoring delivery, and recovery paths.",
    "owner": "Cloud Network Team",
    "question": "Which paths are intended, effectively reachable, observed, unsupported, or broader than required?"
  },
  {
    "area": "Monitoring",
    "detail": "The fictional team receives identity, control-plane, storage, database, network, application, configuration, key, backup, and provider records.",
    "owner": "Cloud Security Operations",
    "question": "Which sources are healthy enough to support positive and negative conclusions?"
  },
  {
    "area": "Incident and recovery",
    "detail": "The fictional case begins with a high-priority posture alert and one failed staged containment test caused by an undocumented dependency.",
    "owner": "Incident Lead",
    "question": "Which actions should occur first, and what proves safe recovery and closure?"
  }
];
const evidenceSources = [
  {
    "id": "NLC-LAB-E01",
    "source": "Cloud architecture and responsibility map",
    "supports": "Service models, provider and customer boundaries, assets, owners, regions, trust boundaries, data flows, and dependencies.",
    "health": "Current for the fictional review window.",
    "limit": "Architecture intent does not prove effective state or observed activity."
  },
  {
    "id": "NLC-LAB-E02",
    "source": "Identity and access records",
    "supports": "Users, service identities, groups, roles, federation, sessions, privileged activation, approvals, lifecycle, and access reviews.",
    "health": "Healthy; approval workflow can arrive fifteen fictional minutes late.",
    "limit": "Role assignment does not prove every permission was used."
  },
  {
    "id": "NLC-LAB-E03",
    "source": "Storage and database configuration",
    "supports": "Resource policies, classification, encryption, key ownership, versioning, retention, logging, backup, and restore requirements.",
    "health": "Current for all listed resources.",
    "limit": "Configuration alone does not prove object or query activity."
  },
  {
    "id": "NLC-LAB-E04",
    "source": "Network architecture, routes, rules, endpoints, DNS, and flow records",
    "supports": "Effective reachability, public and private paths, egress, segmentation, observed covered traffic, and network change validation.",
    "health": "Healthy except one private-service subnet lacks flow coverage.",
    "limit": "Flow records do not prove payload content, identity intent, or data disclosure."
  },
  {
    "id": "NLC-LAB-E05",
    "source": "Application and function records",
    "supports": "Approved workflows, deployment versions, service identities, job outcomes, authorization failures, dependencies, and user-facing effects.",
    "health": "Healthy after accounting for twelve fictional minutes of delivery delay.",
    "limit": "Application logs may omit provider-internal and unrelated service activity."
  },
  {
    "id": "NLC-LAB-E06",
    "source": "Cloud audit and configuration history",
    "supports": "Role, route, logging, storage, key, backup, and policy changes with actor, time, request, result, and prior state.",
    "health": "Healthy across the approved fictional accounts and regions.",
    "limit": "Short-lived state between posture snapshots may require event correlation."
  },
  {
    "id": "NLC-LAB-E07",
    "source": "Backup and recovery records",
    "supports": "Coverage, schedule, retention, identity, key, recovery point, restore target, test result, and recovery-owner approval.",
    "health": "Healthy for documented backup jobs and tests.",
    "limit": "One application-storage collection is outside the documented backup scope."
  }
];
const labPhases = [
  {
    "phase": "1",
    "title": "Authorize and scope",
    "work": "Write the fictional case objective, service boundary, accounts, projects, regions, assets, identities, data, owners, time window, evidence, privacy rules, and prohibited real-system actions.",
    "deliverable": "Cloud security lab charter.",
    "quality": "Every later conclusion and action stays within the approved fictional boundary."
  },
  {
    "phase": "2",
    "title": "Map responsibility and architecture",
    "work": "Assign fictional provider, customer, application, identity, data, network, monitoring, recovery, change, and communication responsibilities.",
    "deliverable": "Responsibility matrix, asset register, trust-boundary map, and dependency diagram.",
    "quality": "No control or decision remains ownerless."
  },
  {
    "phase": "3",
    "title": "Build the evidence register",
    "work": "Record fictional source, owner, expected events, scope, timing, delivery, retention, access, health, lineage, independence, and limitations.",
    "deliverable": "Evidence and source-health register.",
    "quality": "Negative conclusions are made only inside verified source boundaries."
  },
  {
    "phase": "4",
    "title": "Analyze identities and data",
    "work": "Calculate fictional effective access, compare business need, review storage policies, classification, encryption, key ownership, versions, retention, logging, backup, and recovery.",
    "deliverable": "Identity and data-protection findings.",
    "quality": "Capability is separated from observed use and confirmed impact."
  },
  {
    "phase": "5",
    "title": "Analyze networking and exposure",
    "work": "Calculate fictional effective reachability using routes, return paths, rules, endpoints, DNS, service policies, identities, application authorization, and observed flows.",
    "deliverable": "Reachability, segmentation, and egress matrix.",
    "quality": "Public capability is not confused with practical reachability or access."
  },
  {
    "phase": "6",
    "title": "Validate configuration and combined risk",
    "work": "Compare fictional baselines with effective state, review drift, exceptions, compensating controls, alternatives, confidence, limitations, and combined risk.",
    "deliverable": "Risk-ranked cloud posture backlog.",
    "quality": "Several related gaps are considered together rather than scored in isolation."
  },
  {
    "phase": "7",
    "title": "Plan containment and remediation",
    "work": "Select fictional owners, approvals, monitoring restoration, staged identity and route changes, versioning, logging, dependency redesign, validation, rollback, and communication.",
    "deliverable": "Approved remediation and incident action plan.",
    "quality": "The sequence reduces risk without avoidable evidence loss or service disruption."
  },
  {
    "phase": "8",
    "title": "Validate recovery and communicate",
    "work": "Confirm fictional service, identity, data, network, monitoring, user function, recovery, residual risk, closure criteria, lessons learned, and audience-specific reporting.",
    "deliverable": "Closure package and portfolio-safe report.",
    "quality": "The final state is safe, functional, observable, owned, and reviewable."
  }
];
const artifactRequirements = [
  {
    "artifact": "Responsibility matrix",
    "must_include": "Provider, customer, application, identity, data, network, monitoring, recovery, change, communication, reviewer, and escalation duties.",
    "review_question": "Does every control and decision have a named owner?"
  },
  {
    "artifact": "Evidence register",
    "must_include": "Source, owner, scope, expected events, event time, receipt time, health, retention, access, lineage, independence, and limitations.",
    "review_question": "Are findings limited to what each source can actually support?"
  },
  {
    "artifact": "Asset and dependency map",
    "must_include": "Applications, identities, data stores, networks, endpoints, keys, logs, backups, regions, partners, users, and service dependencies.",
    "review_question": "Could a safe change be planned without discovering another hidden dependency?"
  },
  {
    "artifact": "Findings matrix",
    "must_include": "Observation, evidence, supported finding, alternative, confidence, limitation, potential impact, confirmed impact, owner, and next action.",
    "review_question": "Does the report avoid turning capability or alerts into unsupported incident claims?"
  },
  {
    "artifact": "Risk-ranked backlog",
    "must_include": "Exposure, privilege, data sensitivity, reachability, business effect, confidence, control coverage, remediation readiness, and combined risk.",
    "review_question": "Is priority based on practical risk instead of one severity label?"
  },
  {
    "artifact": "Remediation and action log",
    "must_include": "Time, owner, authority, action, evidence, expected result, validation, actual result, rollback, monitoring, communication, and follow-up.",
    "review_question": "Can every fictional decision and change be reconstructed?"
  },
  {
    "artifact": "Recovery and closure report",
    "must_include": "Recovery point, identity, key, target, service validation, denied excess access, monitoring, user function, residual risk, owner signoff, and lessons learned.",
    "review_question": "Is the fictional case closed through evidence rather than a green dashboard alone?"
  }
];
const caseRecords = [
  {
    "id": "NLC-LAB-R01",
    "domain": "Identity",
    "observation": "The fictional export automation role can read archive-secondary even though the redesigned workflow requires only approved-content and export-packages.",
    "support": "Role policy, effective-access map, business workflow, application dependency review, and migration history.",
    "alternative": "A legacy metadata dependency explains the original access but can be replaced.",
    "limit": "No evidence supports unauthorized object access or disclosure."
  },
  {
    "id": "NLC-LAB-R02",
    "domain": "Partner access",
    "observation": "The fictional migration partner federation trust and role remain active after project closure.",
    "support": "Project closure, sponsor expiration, federation configuration, role assignment, and access review.",
    "alternative": "A post-project validation need is possible but no approved extension is supplied.",
    "limit": "No post-project sign-in or resource access is supported."
  },
  {
    "id": "NLC-LAB-R03",
    "domain": "Storage",
    "observation": "The fictional archive-secondary collection is confidential, has disabled versioning, and lacks object-level access logging.",
    "support": "Storage configuration, classification, source matrix, lifecycle policy, and owner requirement.",
    "alternative": "The collection may be reproducible, but that does not replace access and logging controls.",
    "limit": "No deletion, modification, read, sharing, or disclosure is confirmed."
  },
  {
    "id": "NLC-LAB-R04",
    "domain": "Network",
    "observation": "The fictional storage collection has an approved private endpoint plus a wider provider-service route.",
    "support": "Route table, endpoint configuration, resource policy, architecture, and owner design.",
    "alternative": "The wider route may have supported migration, but no current exception is supplied.",
    "limit": "Public internet reachability and object access are not established."
  },
  {
    "id": "NLC-LAB-R05",
    "domain": "Egress",
    "observation": "The fictional export function has a general outbound route beyond approved storage and monitoring destinations.",
    "support": "Function subnet route, endpoint map, dependency list, flow coverage, and application-owner requirement.",
    "alternative": "A provider update dependency may exist, but no approved requirement is documented.",
    "limit": "No supplied flow record shows use of the general route."
  },
  {
    "id": "NLC-LAB-R06",
    "domain": "Monitoring",
    "observation": "One private-service subnet lacks flow logging, while archive-secondary lacks object-access logging.",
    "support": "Source matrix, logging configuration, subnet and storage inventory, delivery health, and owner review.",
    "alternative": "Application, identity, DNS, and provider records supply partial context.",
    "limit": "The blind spots do not independently prove suspicious activity."
  },
  {
    "id": "NLC-LAB-R09",
    "domain": "Containment",
    "observation": "The first staged role reduction caused the fictional export job to fail because an undocumented metadata dependency remained.",
    "support": "Change record, application configuration, job failure, rollback event, and dependency review.",
    "alternative": "A temporary application fault was considered but repeated testing supported the dependency explanation.",
    "limit": "The impact was limited to failed fictional export validation jobs."
  },
  {
    "id": "NLC-LAB-R10",
    "domain": "Provider",
    "observation": "The fictional provider reports no provider-controlled service incident in the reviewed region and time window.",
    "support": "Provider case, service status, regional scope, application health, and customer configuration history.",
    "alternative": "A provider condition outside the reviewed service or time boundary remains possible.",
    "limit": "The response does not evaluate customer-managed roles, routes, storage policies, applications, or logs."
  }
];
const findings = [
  {
    "id": "NLC-LAB-F01",
    "statement": "Archive-secondary represents the highest combined fictional risk because stale access, broader service access, wider routing, disabled object logging, and disabled versioning affect one confidential resource.",
    "support": "Identity, partner, storage, network, monitoring, configuration, migration, and owner evidence.",
    "alternative": "A current approved migration or recovery exception is possible but not supplied.",
    "confidence": "High",
    "limitation": "No confirmed read, deletion, modification, sharing, disclosure, or malicious intent is supported.",
    "priority": "High"
  },
  {
    "id": "NLC-LAB-F02",
    "statement": "The export automation and network design exceed the redesigned workflow through broader storage access and general outbound capability.",
    "support": "Effective-access map, application workflow, route table, endpoint map, dependency review, and owner approval.",
    "alternative": "A limited provider dependency may require narrow outbound access after validation.",
    "confidence": "High",
    "limitation": "No supplied evidence shows use of the extra storage access or general egress.",
    "priority": "High"
  },
  {
    "id": "NLC-LAB-F03",
    "statement": "Restoring object and flow logging should precede final access and route reduction because monitoring gaps weaken validation, negative conclusions, and recurrence detection.",
    "support": "Source-health matrix, missing storage and subnet coverage, change plan, test requirements, and monitoring-owner review.",
    "alternative": "Immediate reduction may lower capability faster but would leave weaker change evidence.",
    "confidence": "High",
    "limitation": "The final sequence remains subject to fictional incident-lead authority.",
    "priority": "High"
  },
  {
    "id": "NLC-LAB-F04",
    "statement": "The first failed role-reduction test revealed a legitimate but undocumented application dependency that can be redesigned rather than preserved as permanent broad access.",
    "support": "Staged change, application failure, rollback, configuration review, owner analysis, and successful redesign plan.",
    "alternative": "The broad role could remain as a compensating convenience, but that would preserve unnecessary access.",
    "confidence": "High",
    "limitation": "The replacement workflow must pass final validation before closure.",
    "priority": "High"
  },
  {
    "id": "NLC-LAB-F05",
    "statement": "The standing cloud-security administrator role can likely move to approved temporary activation with protected emergency access and tested response timing.",
    "support": "Role scope, task frequency, activation capability, emergency procedure, session monitoring, and owner review.",
    "alternative": "One on-call duty may require faster access, but the exact requirement is incomplete.",
    "confidence": "Medium-High",
    "limitation": "Availability and response effects require staged testing.",
    "priority": "Medium-High"
  },
  {
    "id": "NLC-LAB-F08",
    "statement": "The fictional case can close as a combined cloud-control and unsafe-change event with no confirmed compromise, disclosure, data loss, or broad user outage.",
    "support": "Identity, control-plane, covered storage, covered network, application, configuration, provider, backup, recovery, validation, and owner evidence.",
    "alternative": "Activity inside prior logging blind spots cannot be fully excluded.",
    "confidence": "Medium-High",
    "limitation": "Closure requires restored monitoring, final validation, residual-risk approval, and follow-up review.",
    "priority": "Closure"
  }
];
const actionPlan = [
  {
    "order": "1",
    "action": "Confirm incident charter, owners, responsibility boundaries, evidence preservation, and source-health limitations.",
    "owner": "Incident Lead and Evidence Custodian",
    "validation": "All supplied sources, owners, event meanings, timing, lineage, limits, and approval paths are documented.",
    "rollback": "No technical change; original fictional evidence remains preserved.",
    "monitoring": "Track source health and evidence access throughout the lab."
  },
  {
    "order": "2",
    "action": "Restore fictional archive-secondary object logging and private-service subnet flow logging.",
    "owner": "Storage Security Owner and Cloud Network Team",
    "validation": "Expected test object and network events arrive with correct source, time, action, result, retention, and owner.",
    "rollback": "Restore prior logging configuration only if the fictional service is affected, while preserving alternate evidence.",
    "monitoring": "Source-health alerts, delivery delay, parsing, retention, and access."
  },
  {
    "order": "3",
    "action": "Remove or expire the fictional migration partner role and federation trust after final sponsor confirmation.",
    "owner": "Identity Governance and Migration Program Sponsor",
    "validation": "Partner session fails after expiration; approved internal workflows continue; identity and control-plane events arrive.",
    "rollback": "Time-limited approved reactivation only through incident-lead and sponsor authority.",
    "monitoring": "Federation, role session, denied access, and exception review."
  },
  {
    "order": "4",
    "action": "Replace the fictional export metadata dependency and reduce the automation role to approved-content read and export-packages write.",
    "owner": "Learning Application Team and Identity Governance",
    "validation": "Approved export succeeds; archive-secondary read fails; application, identity, storage, and control-plane logs match expectations.",
    "rollback": "Restore the prior role temporarily if validation fails, preserving the failed test and owner decision.",
    "monitoring": "Export success, authorization failures, object access, role changes, and user-facing effects."
  },
  {
    "order": "5",
    "action": "Remove the wider fictional provider-service route and restrict export-function egress to approved dependencies.",
    "owner": "Cloud Network Team and Application Owner",
    "validation": "Private approved paths succeed; alternate storage and general outbound paths fail; health checks and flows remain correct.",
    "rollback": "Restore the prior route within the approved observation window.",
    "monitoring": "Flow, DNS, application errors, service health, denied paths, and source health."
  },
  {
    "order": "6",
    "action": "Enable fictional versioning or approve a documented alternate recovery design for archive-secondary.",
    "owner": "Storage Owner and Recovery Owner",
    "validation": "Overwrite and deletion recovery behavior matches the approved fictional requirement.",
    "rollback": "Preserve prior lifecycle settings and owner-approved recovery points.",
    "monitoring": "Version, lifecycle, deletion, recovery, storage cost, and exception status."
  },
  {
    "order": "8",
    "action": "Resolve the fictional backup-scope decision, complete recovery validation, approve residual risk, and close the case.",
    "owner": "Recovery Owner, Data Owner, Incident Lead, and Leadership Reviewer",
    "validation": "Required data is restored or documented as reproducible; services, identities, paths, logs, user functions, and owners pass closure criteria.",
    "rollback": "Recovery and service rollback remain available until the observation period ends.",
    "monitoring": "Backup, restore, service health, user function, access, recurrence, and follow-up actions."
  }
];
const commonMistakes = [
  "Treating the fictional cloud lab as eight unrelated checklists instead of one connected service and evidence case.",
  "Beginning with remediation before defining scope, owners, architecture, dependencies, evidence, and source health.",
  "Treating a posture alert, high severity, broad role, wide route, or disabled control as proof of compromise.",
  "Treating role capability as proof that every permission was used.",
  "Treating missing logs as proof of no activity rather than an evidence limitation.",
  "Changing identity and network controls simultaneously and losing the ability to identify which change affected the service.",
  "Removing broad access without discovering application, storage, provider, recovery, or monitoring dependencies.",
  "Accepting a green backup job without checking scope, keys, restore targets, recovery objectives, and restore evidence.",
  "Keeping an exception without owner, business reason, narrow scope, compensating controls, residual risk, expiration, and removal plan.",
  "Closing the fictional case because the service is online while monitoring, ownership, validation, residual risk, and lessons learned remain incomplete.",
  "Using or exposing any real cloud account, provider, identity, role, storage resource, database, route, key, log, alert, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What should be completed first in the integrated fictional cloud lab?",
    "choices": [
      "Confirm scope, authority, owners, responsibility boundaries, evidence sources, source health, privacy limits, and deliverables.",
      "Delete the highest-severity resource.",
      "Disable every privileged identity.",
      "Start with the final executive summary."
    ],
    "answer": 0,
    "explanation": "A defensible lab begins with an authorized and reviewable boundary."
  },
  {
    "question": "Why is archive-secondary the highest combined fictional risk?",
    "choices": [
      "Several access, routing, monitoring, and recovery weaknesses affect one confidential resource.",
      "One dashboard labels it high.",
      "The provider manages the storage service.",
      "The collection is old."
    ],
    "answer": 0,
    "explanation": "Combined risk considers interacting weaknesses on the same asset and trust boundary."
  },
  {
    "question": "What does the failed fictional role-reduction test prove?",
    "choices": [
      "An undocumented dependency remained and the least-privilege design requires redesign, rollback, and retesting.",
      "The application was compromised.",
      "Broad access should remain forever.",
      "Security changes should never be tested."
    ],
    "answer": 0,
    "explanation": "A failed staged test is valuable evidence about dependency and change design."
  },
  {
    "question": "Why should fictional monitoring be restored before final access and route changes?",
    "choices": [
      "Healthy logs improve validation, recurrence detection, negative conclusions, and closure evidence.",
      "Monitoring replaces containment.",
      "Logs remove the need for rollback.",
      "Monitoring proves no prior activity occurred."
    ],
    "answer": 0,
    "explanation": "Visibility makes later changes safer and more defensible without proving what happened during a prior blind spot."
  },
  {
    "question": "What makes the fictional action plan safe?",
    "choices": [
      "Each action has an owner, authority, sequence, validation, rollback, monitoring, communication, and completion evidence.",
      "Every action happens at once.",
      "Only high-severity items are documented.",
      "Rollback is removed to prevent reversal."
    ],
    "answer": 0,
    "explanation": "Safe cloud remediation is owned, staged, reversible, validated, monitored, and traceable."
  },
  {
    "question": "What is the strongest fictional case conclusion?",
    "choices": [
      "The evidence supports combined cloud control gaps and one unsafe change event, but no confirmed compromise, disclosure, data loss, or broad outage.",
      "The cloud provider caused a breach.",
      "The partner stole confidential data.",
      "No risk existed because no compromise was confirmed."
    ],
    "answer": 0,
    "explanation": "The conclusion preserves both the supported risks and the impact limits."
  },
  {
    "question": "What makes the final fictional portfolio artifact defensible?",
    "choices": [
      "It links scope, responsibility, architecture, source health, observations, findings, alternatives, confidence, limitations, risk, actions, validation, recovery, closure, and fictionalization.",
      "It contains many screenshots.",
      "It uses dramatic language.",
      "It hides failed tests and uncertainty."
    ],
    "answer": 0,
    "explanation": "A strong portfolio artifact demonstrates transparent evidence-based reasoning."
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
        href={nextPage}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function CloudSecurityBasicsLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.8 Cloud Security Basics Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete an integrated fictional cloud-security case combining
            shared responsibility, identities, storage, data protection,
            networking, logging, configuration defense, incident response,
            recovery, validation, communication, and portfolio documentation.
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
          lessonTitle="Cloud Security Basics Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud evidence.",
            "I will not sign in to, query, scan, test, change, disable, restore, export from, or investigate any real cloud tenant, account, project, identity, role, network, storage service, database, key, backup, log, alert, provider case, or private record.",
            "I will keep provider, customer, application, identity, data, network, monitoring, recovery, and approval responsibilities separate.",
            "I will distinguish direct observations, supported findings, alternatives, confidence, limitations, potential impact, confirmed impact, and missing evidence.",
            "I will create only defensive, authorized, reversible, fictional, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Best Cloud Lab Connects Every Control to One Business Service"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud has no confirmed
            compromise, but several related weaknesses affect one confidential
            storage resource and one export workflow. Stale partner access,
            broader service permissions, wider routing, disabled object
            logging, disabled versioning, general egress, incomplete flow
            coverage, standing privilege, and a backup-scope question create a
            realistic defensive challenge. The lab is not to find the most
            dramatic answer. The lab is to build the most defensible answer.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak lab approach
              </p>

              <p className="mt-2 leading-7">
                Treat each alert separately, assume high severity means breach,
                remove access immediately, ignore failed validation, and hide
                uncertainty from the final report.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional lab approach
              </p>

              <p className="mt-2 leading-7">
                Map the complete service, preserve evidence, connect related
                risks, restore visibility, stage changes, learn from failed
                tests, validate recovery, and communicate only what the
                evidence supports.
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
          title="Cloud Security Decisions Become Safer when Identity, Data, Network, Logs, and Recovery Are Reviewed Together"
        >
          <p className="leading-8">
            A fictional role reduction can break an application. A route change
            can interrupt storage access. A storage correction can remove
            useful evidence. A logging gap can make a negative conclusion
            unreliable. A backup dashboard can be green while one dataset is
            excluded. Integrated reasoning helps defenders reduce risk without
            creating a new outage, blind spot, recovery failure, or unsupported
            incident claim.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Service–Evidence–Risk–Decision Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Service", "Which fictional business workflow, asset, identity, data set, network path, provider service, dependency, owner, and user outcome are involved?"],
              ["Evidence", "Which fictional sources are healthy, delayed, missing, independent, derived, provider-controlled, customer-controlled, or limited?"],
              ["Risk", "Which fictional exposure, privilege, data sensitivity, reachability, combined gaps, potential effect, confidence, and compensating controls apply?"],
              ["Decision", "Which fictional owner, sequence, approval, change, validation, rollback, monitoring, recovery, residual risk, communication, and closure evidence are required?"],
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
            Integrated Cloud Lab Terms
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
            Case Overview
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Learning Cloud Review Areas
          </h2>

          <div className="mt-6 grid gap-5">
            {caseOverview.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.area}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Lab question
                  </p>

                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Evidence Sources and Their Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceSources.map((item) => (
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
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Source health
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.health}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Lab Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Integrated Cloud Lab Phases
          </h2>

          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
              <article
                key={item.phase}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.phase}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <div>
                  <p className="text-sm leading-6 text-slate-300">{item.work}</p>

                  <p className="mt-3 text-sm leading-6 text-emerald-100">
                    <span className="font-black text-emerald-200">
                      Deliverable:{" "}
                    </span>
                    {item.deliverable}
                  </p>
                </div>

                <p className="text-sm leading-6 text-purple-100">
                  <span className="font-black text-purple-200">
                    Quality standard:{" "}
                  </span>
                  {item.quality}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Required Artifacts
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Deliverables for the Final Lab Package
          </h2>

          <div className="mt-6 grid gap-5">
            {artifactRequirements.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.artifact}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Must include
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.must_include}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.review_question}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Case Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Direct Observations, Support, Alternatives, and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {caseRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.domain}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Direct observation
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Alternative
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Integrated Cloud Lab Dashboard"
          subtitle="Training dashboard for fictional cloud evidence only."
          metrics={[
            {
              label: "Evidence sources",
              value: "10",
              note: "Architecture, identity, storage, network, application, audit, backup, provider, business, and action records are mapped.",
            },
            {
              label: "Integrated findings",
              value: "8",
              note: "Combined storage risk, broad access, wider paths, monitoring gaps, privilege, backup, provider boundary, and closure are reviewed.",
            },
            {
              label: "Confirmed compromises",
              value: "0",
              note: "The supplied fictional evidence supports control gaps and one failed change test but no confirmed compromise or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Combined Cloud Risk Affects One Confidential Storage Resource"
          severity="High"
          time="1:05 PM"
          source="Fake Integrated Cloud Lab Console"
          details="The fictional archive-secondary resource has stale partner access, broader automation access, a wider provider-service route, disabled object-access logging, and disabled versioning."
          recommendation="Treat the combined condition as a high-priority defensive finding without claiming compromise. Preserve evidence, confirm owners and dependencies, restore monitoring, expire stale partner access, redesign the export dependency, stage identity and route reductions, validate approved and denied behavior, improve recovery protection, preserve rollback, monitor, and document residual risk and closure."
        />

        <FakeLogPanel
          title="Fake Northbridge Integrated Lab Timeline"
          logs={[
            "09:00 CHARTER scope='Northbridge Learning Cloud' authority='fictional lab'",
            "09:10 MAP responsibility='provider,customer,identity,data,network,monitoring,recovery'",
            "09:20 EVIDENCE sources='10' blindspots='archive object,private subnet flow'",
            "09:30 IDENTITY export-role='broader than redesigned need'",
            "09:38 PARTNER migration-role='active after closure'",
            "09:45 STORAGE archive-secondary='logging off,versioning off'",
            "09:52 NETWORK route='private endpoint + wider provider path'",
            "10:00 EGRESS export-function='general outbound route present'",
            "10:10 PRIORITY combined_storage_risk='High'",
            "10:20 MONITOR restore='object and flow logging first'",
            "10:40 CONTAIN role_reduction='staged'",
            "10:49 TEST export='failed' hidden_dependency='found'",
            "10:51 ROLLBACK role='restored'",
            "11:10 REDESIGN metadata_dependency='replacement approved'",
            "11:30 VALIDATE export='pass' excess_read='denied'",
            "11:45 NETWORK private_path='pass' wider_path='denied'",
            "12:00 RECOVERY versioning='enabled concept' backup_decision='approved'",
            "12:20 PRIVILEGE temporary_activation='validated'",
            "12:40 PROVIDER platform_incident='not supported in scope'",
            "13:05 CLOSE compromise='not confirmed' monitoring='active'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Integrated Findings
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

                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    {item.priority}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

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

                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Action Plan
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ordered Fictional Remediation and Closure Sequence
          </h2>

          <div className="mt-6 grid gap-5">
            {actionPlan.map((item) => (
              <article
                key={item.order}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {item.order}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.action}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Owner", item.owner],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
                    ["Monitoring", item.monitoring],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.order}-${label}`}
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

        <AnalyzeEvidenceCard
          title="What Is the Strongest Final Case Conclusion?"
          evidence={[
            "The fictional archive-secondary resource has several related control gaps.",
            "The migration partner role and broader export role remain beyond current need.",
            "The wider route and general egress expand capability beyond the approved design.",
            "Object-access and private-subnet flow logging were initially missing.",
            "The first staged role reduction failed because of an undocumented dependency and was rolled back.",
            "The dependency was redesigned and later tests passed.",
            "Covered identity, control-plane, application, network, storage, provider, backup, and recovery evidence does not support confirmed compromise or disclosure.",
            "Prior blind spots prevent absolute claims about all historical activity.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional case supports combined customer-controlled cloud gaps and one unsafe change event, but no confirmed compromise, disclosure, data loss, or broad outage; closure requires restored monitoring, validated remediation, residual-risk approval, and follow-up review.",
            "The provider caused a confirmed breach.",
            "The migration partner stole confidential data.",
            "No meaningful risk existed because compromise was not confirmed.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes serious control risk, successful remediation, impact limits, prior evidence gaps, and the requirements for defensible closure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Integrated Cloud Lab"
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
          eyebrow="Capstone Lab"
          title="Complete the Northbridge Cloud Security Basics Case"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Build the Complete Eight-Artifact Cloud Security Package
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional evidence to produce a complete
                and defensible cloud-security case from authorization through
                closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Final deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Case charter and responsibility matrix.</li>
                <li>Asset, trust-boundary, data-flow, and dependency maps.</li>
                <li>Evidence register and source-health review.</li>
                <li>Identity, data, network, logging, and configuration findings.</li>
                <li>Risk-ranked backlog and combined-risk explanation.</li>
                <li>Ordered remediation and incident action log.</li>
                <li>Recovery, validation, residual-risk, and closure package.</li>
                <li>Technical report, leadership summary, and portfolio-safe reflection.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete this lab only with fictional records shown on this page.
            Do not access, test, change, or expose any real cloud environment.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Monitoring Is Missing, but the Team Wants Immediate Global Containment"
          scenario="The fictional team wants to remove roles and routes immediately, but archive object logs and one private-subnet flow source are missing."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve evidence, confirm immediate risk, restore critical monitoring where time allows, stage narrow changes, define expected tests and rollback, and monitor the result.",
              outcome:
                "Best defensive choice. Visibility and risk reduction are balanced.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Change every related role and route at once.",
              outcome:
                "Unsafe. The team may create disruption and lose diagnostic clarity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delay every action until perfect evidence exists.",
              outcome:
                "Weak. Immediate supported risk may still require controlled containment.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The First Least-Privilege Test Breaks the Export Workflow"
          scenario="The fictional staged role reduction causes export failures because an undocumented metadata dependency remains."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the failure evidence, roll back, map the dependency, decide whether it remains necessary, redesign the workflow, restore monitoring, and retest approved success and denied excess access.",
              outcome:
                "Best defensive choice. The failed test improves the final design.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the broad role permanently because the first test failed.",
              outcome:
                "Weak. The original unnecessary access remains unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Force the global change and accept the outage.",
              outcome:
                "Unsafe. Service impact and dependency are known.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Security Basics Lab Checklist"
          items={[
            "I can define a fictional cloud case charter with scope, authority, owners, accounts, regions, data, evidence, privacy, and deliverables.",
            "I can map fictional provider, customer, identity, data, network, application, monitoring, recovery, change, and communication responsibilities.",
            "I can build an asset, trust-boundary, data-flow, and dependency map.",
            "I can validate evidence sources through expected events, scope, delivery, timing, retention, access, lineage, ownership, and limitations.",
            "I can calculate fictional effective access and reachability using all relevant identity, policy, network, resource, and application layers.",
            "I can distinguish capability, observed activity, control gap, potential impact, confirmed impact, compromise, and disclosure.",
            "I can prioritize combined risk using exposure, privilege, data sensitivity, reachability, source health, business effect, control coverage, and remediation readiness.",
            "I can create an ordered fictional action plan with owners, approvals, validation, rollback, monitoring, communication, and completion evidence.",
            "I can validate recovery and closure through safe state, service function, monitoring, residual risk, owner approval, and lessons learned.",
            "I will use only fictional evidence and never access or expose real cloud accounts, identities, architecture, resources, logs, providers, owners, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.8 Mini Quiz: Cloud Security Basics Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Security Basics Lab Portfolio Package for the Northbridge Learning Cloud. Include the case charter, responsibility matrix, architecture, assets, trust boundaries, dependencies, evidence register, source health, effective access, effective reachability, data protection, cloud monitoring, configuration drift, combined risk, findings, alternatives, confidence, limitations, action plan, validation, rollback, monitoring, recovery, residual risk, closure criteria, technical summary, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional providers, tenants, accounts, projects, identities, resources, addresses, storage, databases, keys, logs, owners, dates, and decisions.",
            "Preserve failed tests and uncertainty because they demonstrate professional reasoning.",
            "Do not claim compromise, disclosure, malicious intent, or broad impact without direct supporting evidence.",
            "Make every conclusion traceable to parent evidence and every action traceable to an owner, approval, test, rollback, and closure record.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated cloud defense connects shared responsibility, identity, data, network, monitoring, configuration, incident response, recovery, and communication.",
            "The highest risk may come from several related weaknesses affecting one asset or workflow.",
            "Source-health gaps limit both positive and negative conclusions.",
            "A failed staged change can reveal hidden dependencies and improve the final design.",
            "Remediation should restore visibility, preserve evidence, reduce risk, validate service behavior, preserve rollback, and document residual risk.",
            "No confirmed compromise does not mean no control risk, and serious control risk does not automatically prove compromise.",
            "Portfolio artifacts should demonstrate transparent fictional reasoning without exposing any real cloud environment.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I13
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