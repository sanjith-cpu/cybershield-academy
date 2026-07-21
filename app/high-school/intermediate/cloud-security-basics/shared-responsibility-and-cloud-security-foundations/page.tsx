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
const previousPage = modulePath;
const nextLesson = `${modulePath}/cloud-identities-roles-and-least-privilege`;

const objectives = [
  "Explain fictional cloud service and deployment models without treating the cloud as one undifferentiated system.",
  "Map fictional provider, customer, partner, application-owner, identity-owner, data-owner, and user responsibilities across a complete cloud service.",
  "Identify fictional accounts, subscriptions, projects, regions, identities, data stores, networks, services, dependencies, and trust boundaries before evaluating risk.",
  "Separate direct observations from supported findings, alternative explanations, confidence, limitations, and missing evidence.",
  "Create a portfolio-safe fictional shared-responsibility and cloud-asset package with owners, controls, evidence, gaps, and review decisions."
];
const vocabulary = [
  [
    "Cloud service",
    "A fictional provider-hosted computing capability such as storage, identity, networking, databases, applications, or managed processing."
  ],
  [
    "Service model",
    "A fictional division of technical responsibility between provider and customer, commonly described as infrastructure, platform, or software services."
  ],
  [
    "Deployment model",
    "A fictional way cloud services are organized, such as public, private, hybrid, community, or multi-cloud environments."
  ],
  [
    "Shared responsibility",
    "The fictional division of security duties among the provider, customer organization, application team, data owner, identity owner, network owner, user, and partner."
  ],
  [
    "Tenant",
    "A fictional organization or isolated customer environment within a shared provider platform."
  ],
  [
    "Account or subscription",
    "A fictional administrative and billing boundary containing cloud resources, identities, policies, logs, and ownership."
  ],
  [
    "Project or resource group",
    "A fictional organizational boundary used to group related services, permissions, budgets, policies, and environments."
  ],
  [
    "Region",
    "A fictional geographic provider location containing one or more availability areas and services."
  ],
  [
    "Availability zone",
    "A fictional separated provider location within a region used to improve resilience and reduce common failure risk."
  ],
  [
    "Managed service",
    "A fictional cloud capability where the provider operates more of the platform while the customer still owns configuration, access, data, and usage decisions."
  ],
  [
    "Trust boundary",
    "A fictional point where data, identity, authority, ownership, network path, or responsibility changes."
  ],
  [
    "Cloud asset",
    "A fictional identity, service, data store, application, network, key, configuration, log source, dependency, or business process that requires ownership and protection."
  ],
  [
    "Responsibility gap",
    "A fictional security duty that is missing, unclear, duplicated without coordination, or incorrectly assumed to belong to another party."
  ],
  [
    "Evidence boundary",
    "The fictional limit of what supplied records can support about configuration, activity, ownership, exposure, or impact."
  ]
];
const serviceModels = [
  {
    "model": "Infrastructure as a Service",
    "provider": "Fictional physical facilities, hardware, core virtualization, and foundational provider network.",
    "customer": "Fictional operating systems, workloads, identities, data, application configuration, network rules, logging, patching choices, and recovery.",
    "common_gap": "The customer assumes the provider secures the guest operating system or application configuration.",
    "evidence": "Asset inventory, deployment records, operating-system baseline, network rules, identity audit, monitoring, and recovery evidence."
  },
  {
    "model": "Platform as a Service",
    "provider": "Fictional managed runtime, platform patching, core service availability, and underlying infrastructure.",
    "customer": "Fictional application code, identities, secrets, data, service configuration, access, logging, dependencies, and secure deployment.",
    "common_gap": "The application team assumes managed runtime automatically means secure application, identity, secret, and data configuration.",
    "evidence": "Application configuration, deployment pipeline, identity roles, secret references, audit logs, source-health records, and owner approvals."
  },
  {
    "model": "Software as a Service",
    "provider": "Fictional application platform, core service operation, infrastructure, and provider-controlled software maintenance.",
    "customer": "Fictional tenant settings, identities, access policies, data classification, sharing, retention, integration security, monitoring, and user governance.",
    "common_gap": "The customer assumes provider operation removes the need for tenant-level access, sharing, retention, and identity controls.",
    "evidence": "Tenant configuration, identity records, sharing audit, retention settings, integration list, administrator actions, and support evidence."
  },
  {
    "model": "Serverless or Function Service",
    "provider": "Fictional execution platform, scaling mechanism, infrastructure, and provider-managed runtime components.",
    "customer": "Fictional function code, trigger configuration, identities, permissions, dependencies, secrets, data access, logging, and event handling.",
    "common_gap": "The customer overlooks broad function roles, unsafe triggers, unreviewed dependencies, or missing logging because no server is directly managed.",
    "evidence": "Function configuration, trigger map, role policy, deployment artifact, dependency inventory, invocation logs, and data-flow records."
  },
  {
    "model": "Managed Database Service",
    "provider": "Fictional database platform operation, infrastructure, service availability features, and provider-controlled engine maintenance boundaries.",
    "customer": "Fictional database identities, network access, encryption choices, backups, retention, schema permissions, query logging, and data governance.",
    "common_gap": "The customer assumes managed database means provider-owned access control, backup validation, classification, and network exposure.",
    "evidence": "Database role map, network configuration, backup reports, encryption settings, retention, audit logs, and recovery validation."
  },
  {
    "model": "Managed Object Storage",
    "provider": "Fictional storage service availability, durability mechanisms, underlying infrastructure, and service APIs.",
    "customer": "Fictional object permissions, public-access settings, encryption choices, keys, versioning, retention, lifecycle, classification, and monitoring.",
    "common_gap": "The customer assumes durable storage is automatically private, correctly retained, recoverable, and monitored.",
    "evidence": "Storage policy, access list, sharing audit, encryption settings, key ownership, versioning, lifecycle, logging, and restore tests."
  }
];
const deploymentModels = [
  {
    "model": "Public cloud",
    "description": "A fictional provider operates shared infrastructure while each customer controls its own tenant, identities, data, configuration, and usage.",
    "responsibility_focus": "Tenant isolation, provider assurance, customer configuration, access, data protection, logging, and third-party dependency.",
    "evidence_need": "Provider documentation, tenant controls, identity records, configuration exports, audit logs, data-flow maps, and owner decisions."
  },
  {
    "model": "Private cloud",
    "description": "A fictional organization or dedicated provider operates cloud-like infrastructure for one organization.",
    "responsibility_focus": "Internal platform operation, capacity, patching, virtualization, identity, network, data, application, backup, and governance ownership.",
    "evidence_need": "Platform ownership, infrastructure records, baseline, patching, network maps, tenant policies, logging, recovery, and internal assurance."
  },
  {
    "model": "Hybrid cloud",
    "description": "Fictional on-premises and cloud services exchange identity, data, applications, or network traffic across trust boundaries.",
    "responsibility_focus": "Connector security, identity federation, data movement, routing, logging continuity, ownership handoffs, and failure isolation.",
    "evidence_need": "End-to-end architecture, identity trust, connection records, data classification, routing, service logs, ownership, and recovery plans."
  },
  {
    "model": "Multi-cloud",
    "description": "A fictional organization uses services from more than one cloud provider for different workloads or resilience goals.",
    "responsibility_focus": "Consistent identity, policy, inventory, logging, keys, data movement, ownership, skills, vendor coordination, and incident response.",
    "evidence_need": "Cross-provider asset register, identity map, policy comparison, logging coverage, data flows, provider contacts, and shared incident plan."
  },
  {
    "domain": "Identity and access",
    "provider": "Provides fictional identity, role, policy, authentication, federation, and audit capabilities.",
    "customer": "Designs identities, roles, approvals, least privilege, privileged access, lifecycle, reviews, and monitoring.",
    "shared": "Coordinates identity incidents, provider support, and evidence exchange.",
    "gap": "Broad roles remain because provider capability exists but customer governance does not."
  },
  {
    "domain": "Network and service exposure",
    "provider": "Operates fictional core provider networking and service availability.",
    "customer": "Configures virtual networks, routes, gateways, endpoints, security rules, load balancers, and service exposure.",
    "shared": "Maintains provider service protections and customer-specific network boundaries.",
    "gap": "A customer-managed endpoint becomes public even though the underlying service is provider-managed."
  },
  {
    "domain": "Data protection",
    "provider": "Provides fictional storage durability, encryption features, key options, backups, replication, and service controls.",
    "customer": "Classifies data, selects encryption, manages access, controls sharing, validates backup and restore, retention, and disposal.",
    "shared": "Defines technical features, customer choices, contractual requirements, and recovery expectations.",
    "gap": "The customer mistakes provider durability for complete backup, retention, and recovery assurance."
  },
  {
    "domain": "Application and workload security",
    "provider": "Secures fictional provider-managed runtime components within the service boundary.",
    "customer": "Secures code, configuration, dependencies, secrets, workload identities, deployment, validation, and application logging.",
    "shared": "Coordinates platform updates, compatibility, advisories, and incident evidence.",
    "gap": "An insecure customer configuration remains because the service itself is managed."
  },
  {
    "domain": "Logging and monitoring",
    "provider": "Generates fictional platform and service audit capabilities within documented coverage.",
    "customer": "Enables, retains, protects, monitors, correlates, reviews, and responds to relevant records.",
    "shared": "Documents available events, delivery, health, retention, access, and incident support.",
    "gap": "Logs exist as a feature but are disabled, unowned, unretained, or never reviewed."
  },
  {
    "domain": "Incident response and recovery",
    "provider": "Responds to fictional provider-controlled incidents and supports customer cases within service terms.",
    "customer": "Owns tenant investigation, containment, identity actions, configuration correction, communication, recovery, and closure.",
    "shared": "Coordinates evidence, timing, provider support, customer decisions, and notifications.",
    "gap": "Each party waits for the other because the handoff and decision authority are unclear."
  }
];
const responsibilityDomains = [
  {
    "domain": "Physical and facility security",
    "provider": "Operates fictional facilities, hardware access, environmental protections, physical monitoring, and hardware retirement.",
    "customer": "Reviews provider assurance and selects an appropriate service and region based on business needs.",
    "shared": "Documents provider assurance, customer requirements, exceptions, and residual risk.",
    "gap": "No owner verifies whether provider assurance matches the sensitivity and resilience requirement."
  },
  {
    "domain": "Identity and access",
    "provider": "Provides fictional identity, role, policy, authentication, federation, and audit capabilities.",
    "customer": "Designs identities, roles, approvals, least privilege, privileged access, lifecycle, reviews, and monitoring.",
    "shared": "Coordinates identity incidents, provider support, and evidence exchange.",
    "gap": "Broad roles remain because provider capability exists but customer governance does not."
  },
  {
    "domain": "Network and service exposure",
    "provider": "Operates fictional core provider networking and service availability.",
    "customer": "Configures virtual networks, routes, gateways, endpoints, security rules, load balancers, and service exposure.",
    "shared": "Maintains provider service protections and customer-specific network boundaries.",
    "gap": "A customer-managed endpoint becomes public even though the underlying service is provider-managed."
  },
  {
    "domain": "Data protection",
    "provider": "Provides fictional storage durability, encryption features, key options, backups, replication, and service controls.",
    "customer": "Classifies data, selects encryption, manages access, controls sharing, validates backup and restore, retention, and disposal.",
    "shared": "Defines technical features, customer choices, contractual requirements, and recovery expectations.",
    "gap": "The customer mistakes provider durability for complete backup, retention, and recovery assurance."
  },
  {
    "domain": "Application and workload security",
    "provider": "Secures fictional provider-managed runtime components within the service boundary.",
    "customer": "Secures code, configuration, dependencies, secrets, workload identities, deployment, validation, and application logging.",
    "shared": "Coordinates platform updates, compatibility, advisories, and incident evidence.",
    "gap": "An insecure customer configuration remains because the service itself is managed."
  },
  {
    "domain": "Logging and monitoring",
    "provider": "Generates fictional platform and service audit capabilities within documented coverage.",
    "customer": "Enables, retains, protects, monitors, correlates, reviews, and responds to relevant records.",
    "shared": "Documents available events, delivery, health, retention, access, and incident support.",
    "gap": "Logs exist as a feature but are disabled, unowned, unretained, or never reviewed."
  },
  {
    "domain": "Incident response and recovery",
    "provider": "Responds to fictional provider-controlled incidents and supports customer cases within service terms.",
    "customer": "Owns tenant investigation, containment, identity actions, configuration correction, communication, recovery, and closure.",
    "shared": "Coordinates evidence, timing, provider support, customer decisions, and notifications.",
    "gap": "Each party waits for the other because the handoff and decision authority are unclear."
  }
];

const assetMap = [
  {
    "id": "NLC-A-01",
    "asset": "Learning portal application",
    "type": "Managed application platform",
    "owner": "Learning Application Team",
    "data": "Student practice records and fictional course progress",
    "dependency": "Identity, object storage, database, logging, and private API",
    "trust": "Public user edge → managed application → private services",
    "evidence": "Deployment, application audit, identity, network, storage, and monitoring records"
  },
  {
    "id": "NLC-A-02",
    "asset": "Course-content storage",
    "type": "Managed object storage",
    "owner": "Content Platform Owner",
    "data": "Fictional lesson media, worksheets, and approved public assets",
    "dependency": "Content delivery, encryption, key service, logging, and lifecycle policy",
    "trust": "Private administration → storage; approved public delivery through content service",
    "evidence": "Storage policy, access audit, encryption, versioning, lifecycle, sharing, and restore records"
  },
  {
    "id": "NLC-A-03",
    "asset": "Student-progress database",
    "type": "Managed database",
    "owner": "Learning Data Owner",
    "data": "Fictional student identifiers, progress events, and assessment summaries",
    "dependency": "Application identity, private network, encryption, backup, and audit logging",
    "trust": "Private application service → managed database",
    "evidence": "Database roles, network rules, encryption, query audit, backup, restore, and retention records"
  },
  {
    "id": "NLC-A-04",
    "asset": "Export automation function",
    "type": "Serverless function",
    "owner": "Learning Operations Team",
    "data": "Approved fictional progress exports",
    "dependency": "Service identity, object storage, database read role, event trigger, and logging",
    "trust": "Scheduled trigger → function identity → approved data stores",
    "evidence": "Function configuration, role policy, trigger, invocation log, storage transaction, and deployment artifact"
  },
  {
    "id": "NLC-A-05",
    "asset": "Cloud identity tenant",
    "type": "Identity service",
    "owner": "Identity Governance Team",
    "data": "Fictional users, groups, roles, service identities, and sessions",
    "dependency": "Federation, authentication policy, privileged workflow, access review, and audit logs",
    "trust": "External identity provider → cloud tenant → application and service roles",
    "evidence": "Role map, sign-in audit, service identities, privileged approvals, lifecycle, and access review"
  },
  {
    "id": "NLC-A-06",
    "asset": "Learning cloud network",
    "type": "Virtual network and private services",
    "owner": "Cloud Network Team",
    "data": "Fictional application, administration, storage, database, and monitoring traffic",
    "dependency": "Subnets, routes, gateways, private endpoints, load balancer, security rules, and flow logs",
    "trust": "Public edge, application subnet, private-service subnet, administrative path, and provider services",
    "evidence": "Network map, rules, routes, flow records, endpoint configuration, and change approvals"
  },
  {
    "id": "NLC-A-07",
    "asset": "Cloud audit and monitoring pipeline",
    "type": "Logging and detection service",
    "owner": "Cloud Security Operations",
    "data": "Fictional identity, control-plane, storage, network, application, and configuration events",
    "dependency": "Source enablement, delivery, retention, access, detection rules, alerts, and source-health monitoring",
    "trust": "Cloud services → logging pipeline → restricted monitoring workspace",
    "evidence": "Source matrix, delivery status, retention, access, detections, alerts, and response records"
  },
  {
    "id": "NLC-A-08",
    "asset": "Backup and recovery repository",
    "type": "Managed backup storage",
    "owner": "Continuity and Recovery Team",
    "data": "Fictional database backups, configuration exports, and approved recovery points",
    "dependency": "Encryption, separate identity, retention, immutability concept, restore testing, and incident access",
    "trust": "Protected services → controlled backup repository → recovery workflow",
    "evidence": "Backup jobs, retention, encryption, access, restore tests, exceptions, and owner approvals"
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional cloud service boundary",
    "detail": "Restate the approved business service, service model, deployment model, tenant, accounts, projects, regions, evidence sources, owners, privacy limits, and prohibited real-system actions.",
    "output": "Cloud review objective and scope."
  },
  {
    "step": "2",
    "title": "Inventory assets and dependencies",
    "detail": "Record fictional applications, identities, storage, databases, networks, keys, logs, backups, deployment systems, users, data classes, and service dependencies.",
    "output": "Cloud asset and dependency register."
  },
  {
    "step": "3",
    "title": "Map trust boundaries and data flows",
    "detail": "Identify where fictional identity, data, traffic, authority, ownership, provider control, customer control, or partner responsibility changes.",
    "output": "Trust-boundary and data-flow map."
  },
  {
    "step": "4",
    "title": "Assign responsibility by control domain",
    "detail": "For each fictional domain, document provider duty, customer duty, shared coordination, named owner, evidence, reviewer, and escalation.",
    "output": "Shared-responsibility matrix."
  },
  {
    "step": "5",
    "title": "Find responsibility gaps",
    "detail": "Look for fictional missing ownership, duplicated effort, unclear handoffs, disabled controls, unreviewed provider assumptions, and unsupported customer expectations.",
    "output": "Responsibility-gap register."
  },
  {
    "step": "6",
    "title": "Correlate supporting evidence",
    "detail": "Compare fictional architecture, identity, configuration, deployment, network, storage, database, application, logging, backup, support, and provider records.",
    "output": "Evidence-backed findings and alternatives."
  },
  {
    "step": "7",
    "title": "Plan defensive ownership",
    "detail": "Assign fictional actions, approvals, deadlines, validation, rollback, monitoring, communication, residual risk, and closure evidence.",
    "output": "Owned cloud security action plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional evidence lineage, source health, privacy, need-to-know, confidence, limitations, reviewer approval, and portfolio-safe communication.",
    "output": "Reviewed responsibility package."
  }
];
const caseRecords = [
  {
    "id": "NLC-R-01",
    "record": "Provider service description",
    "observation": "The fictional provider operates the managed object-storage service, underlying infrastructure, and service APIs.",
    "meaning": "The provider owns service operation within the documented service boundary.",
    "limit": "The description does not show the customer's tenant configuration or data-access decisions."
  },
  {
    "id": "NLC-R-02",
    "record": "Tenant storage policy",
    "observation": "The fictional customer allows the export automation role to list and read two storage collections, although its approved workflow needs one.",
    "meaning": "The customer-managed role appears broader than the documented business need.",
    "limit": "Effective access still requires identity, inherited policy, and service-control correlation."
  },
  {
    "id": "NLC-R-03",
    "record": "Network architecture",
    "observation": "The fictional storage service supports a private endpoint, but the tenant also permits a wider provider-service route.",
    "meaning": "The customer has not fully limited the service to the approved private path.",
    "limit": "Reachability and exposure require route, rule, endpoint, and flow evidence."
  },
  {
    "id": "NLC-R-04",
    "record": "Audit configuration",
    "observation": "Control-plane logging is enabled, but object-level access logging is enabled only for the approved collection.",
    "meaning": "Monitoring coverage differs across the two collections available to the role.",
    "limit": "A missing event cannot be interpreted until expected event types, health, and retention are verified."
  },
  {
    "id": "NLC-R-05",
    "record": "Ownership register",
    "observation": "The application team owns the export function, the identity team owns roles, and the content owner owns storage data.",
    "meaning": "Several teams must coordinate to reduce the broad access safely.",
    "limit": "The register does not define who approves the final permission change."
  },
  {
    "id": "NLC-R-06",
    "record": "Provider assurance statement",
    "observation": "The fictional provider documents physical, infrastructure, and managed-service controls.",
    "meaning": "Provider assurance supports provider-controlled responsibilities.",
    "limit": "It does not prove the customer's identities, access policies, logging, retention, or network configuration are secure."
  },
  {
    "id": "NLC-R-07",
    "record": "Business requirement",
    "observation": "The export automation must read one approved content collection and write generated packages to one export collection.",
    "meaning": "The documented workflow provides the least-privilege reference.",
    "limit": "Operational exceptions and emergency workflows require separate evidence."
  },
  {
    "id": "NLC-R-08",
    "record": "Change history",
    "observation": "The broader storage role was created during a fictional migration and never reduced after the migration ended.",
    "meaning": "Temporary migration access became a persistent responsibility gap.",
    "limit": "The record does not prove misuse or impact."
  }
];
const findings = [
  {
    "id": "NLC-F-01",
    "statement": "The fictional provider operates the managed storage service, but the customer owns tenant identities, permissions, network paths, logging choices, data classification, retention, and recovery decisions.",
    "support": "Provider service description, tenant architecture, ownership register, identity policy, storage policy, and business requirements.",
    "alternative": "No evidence supports transferring these tenant responsibilities entirely to the provider.",
    "confidence": "High",
    "limitation": "Exact contractual duties require the approved fictional agreement."
  },
  {
    "id": "NLC-F-02",
    "statement": "The export automation role has broader storage access than its documented workflow requires.",
    "support": "Tenant role policy, effective-access record, application requirement, storage collection map, and migration history.",
    "alternative": "A still-active migration need is possible but not supported by current owner documentation.",
    "confidence": "High",
    "limitation": "No evidence supports misuse or unauthorized data access."
  },
  {
    "id": "NLC-F-03",
    "statement": "The wider provider-service network route is a customer-managed design gap because the approved architecture expects the private endpoint.",
    "support": "Architecture diagram, endpoint configuration, route policy, network rules, flow records, and owner requirement.",
    "alternative": "The wider route may support an undocumented operational exception.",
    "confidence": "Medium-High",
    "limitation": "Reachability and practical exposure remain bounded by effective rule and service-control evidence."
  },
  {
    "id": "NLC-F-04",
    "statement": "Monitoring coverage is incomplete for one storage collection available to the export role.",
    "support": "Audit configuration, source-health matrix, event coverage documentation, role access, and storage ownership.",
    "alternative": "Provider-level service logs may contain limited related events but do not replace tenant object-access coverage.",
    "confidence": "High",
    "limitation": "No missing event should be interpreted as proof of no activity."
  },
  {
    "id": "NLC-F-05",
    "statement": "The main control weakness is an ownership and lifecycle gap that allowed temporary migration access to remain after the migration ended.",
    "support": "Change history, business requirement, ownership register, access review, and absent closure evidence.",
    "alternative": "A deliberate permanent exception is possible but no approved exception record is supplied.",
    "confidence": "High",
    "limitation": "The evidence supports governance failure, not malicious intent."
  },
  {
    "id": "NLC-F-06",
    "statement": "The safest corrective path requires coordinated action by the application, identity, storage, network, security-operations, and change-approval owners.",
    "support": "Responsibility map, dependency register, role ownership, network ownership, logging ownership, and validation requirements.",
    "alternative": "A single-team change could be faster but would risk incomplete validation or service disruption.",
    "confidence": "High",
    "limitation": "Final implementation depends on approved fictional change procedures."
  }
];
const commonMistakes = [
  "Treating the cloud provider as responsible for every fictional security control.",
  "Treating the customer as responsible for provider-controlled physical or core platform controls.",
  "Using the label managed service as proof that customer configuration, identity, data, logging, and recovery are automatically secure.",
  "Beginning a cloud review without identifying the fictional service model, deployment model, tenant, accounts, projects, regions, owners, and trust boundaries.",
  "Listing cloud resources without business purpose, data class, owner, dependency, evidence source, and lifecycle state.",
  "Assuming provider assurance proves the customer's tenant configuration is secure.",
  "Assuming customer access to a provider feature means the feature is enabled, owned, retained, reviewed, or effective.",
  "Using one dashboard as complete evidence of identity, network, storage, application, logging, and impact.",
  "Treating a broad role as proof of misuse rather than a least-privilege and governance finding.",
  "Treating a public-capable service as proof that a resource is publicly reachable.",
  "Ignoring hybrid, multi-cloud, partner, federation, and integration trust boundaries.",
  "Failing to identify who approves changes when several fictional teams share responsibility.",
  "Writing remediation without owner, approval, deadline, validation, rollback, monitoring, and completion evidence.",
  "Using or exposing any real cloud account, tenant, project, role, bucket, database, key, route, log, alert, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What does fictional shared responsibility mean?",
    "choices": [
      "Security duties are divided among the provider, customer, application owner, data owner, identity owner, user, and partners.",
      "The provider owns every security decision.",
      "The customer owns the provider's physical facilities.",
      "No one needs named ownership."
    ],
    "answer": 0,
    "explanation": "Cloud security depends on clearly divided and coordinated responsibilities."
  },
  {
    "question": "Which responsibility usually remains with the fictional customer in a managed object-storage service?",
    "choices": [
      "Tenant identities, object permissions, public-access settings, classification, logging choices, retention, and recovery validation.",
      "Physical facility security.",
      "Provider hardware retirement.",
      "Core provider virtualization."
    ],
    "answer": 0,
    "explanation": "Managed infrastructure does not remove customer responsibility for tenant configuration and data governance."
  },
  {
    "question": "Why should a fictional cloud review identify the service model?",
    "choices": [
      "The service model changes which controls the provider operates and which controls the customer must configure and govern.",
      "The service model proves the environment is secure.",
      "Only billing depends on the service model.",
      "Service models eliminate shared responsibility."
    ],
    "answer": 0,
    "explanation": "Responsibility changes across infrastructure, platform, software, serverless, storage, and database services."
  },
  {
    "question": "What is a fictional trust boundary?",
    "choices": [
      "A point where data, identity, authority, ownership, network path, or responsibility changes.",
      "A list of provider marketing statements.",
      "A severity label.",
      "A guarantee that access is safe."
    ],
    "answer": 0,
    "explanation": "Trust boundaries help defenders understand where controls and evidence must change."
  },
  {
    "question": "What can a fictional provider assurance statement support?",
    "choices": [
      "Provider-controlled responsibilities within the documented assurance boundary.",
      "That every customer role is least privilege.",
      "That customer logging is enabled.",
      "That no tenant misconfiguration exists."
    ],
    "answer": 0,
    "explanation": "Provider assurance should not be stretched into proof of customer-controlled configuration."
  },
  {
    "question": "Which statement about a broad fictional service role is strongest?",
    "choices": [
      "The role is broader than the documented workflow requires, creating a least-privilege and governance gap; misuse is not proven.",
      "The role proves malicious access.",
      "The provider is automatically responsible.",
      "No action is needed because the service is managed."
    ],
    "answer": 0,
    "explanation": "Evidence can support over-permission without proving abuse or intent."
  },
  {
    "question": "What makes a fictional shared-responsibility finding defensible?",
    "choices": [
      "It identifies the service boundary, named owners, direct evidence, alternatives, confidence, limitations, and coordinated action.",
      "It assigns every issue to the provider.",
      "It relies on one dashboard.",
      "It uses absolute language without evidence."
    ],
    "answer": 0,
    "explanation": "Defensible cloud findings connect ownership, evidence, uncertainty, and action."
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

export default function SharedResponsibilityCloudFoundationsPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.1 Shared Responsibility and Cloud Security Foundations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders map fictional cloud services, deployment
            models, provider and customer duties, accounts, projects, regions,
            assets, owners, data flows, trust boundaries, evidence, and
            responsibility gaps before making any cloud-security decision.
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
          lessonTitle="Shared Responsibility and Cloud Security Foundations"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud evidence.",
            "I will not sign in to, query, scan, configure, export from, or investigate any real cloud tenant, account, subscription, project, role, storage service, database, network, key, log, or private record.",
            "I will identify the fictional service model, deployment model, tenant boundary, owners, assets, data, dependencies, trust boundaries, and evidence limits.",
            "I will separate provider responsibility, customer responsibility, shared coordination, alternatives, confidence, limitations, and missing evidence.",
            "I will create only defensive and portfolio-safe fictional artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Cloud Provider Can Operate the Service while the Customer Still Owns the Risky Setting"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud uses a managed application
            platform, object storage, a managed database, a serverless export
            function, cloud identity, virtual networking, logging, and managed
            backups. A storage role is broader than the export workflow
            requires, one network path is wider than the approved private
            design, and logging coverage differs between storage collections.
            None of these customer-controlled conditions are automatically
            fixed merely because the services are provider-managed.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak assumption
              </p>

              <p className="mt-2 leading-7">
                The provider secures the cloud, so customer roles, storage
                permissions, network routes, logging, retention, and recovery
                do not require separate ownership.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional approach
              </p>

              <p className="mt-2 leading-7">
                Define the service boundary, assign every control to a named
                provider or customer owner, identify shared handoffs, examine
                evidence, preserve limits, and coordinate safe action.
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
          title="Unclear Responsibility Creates Unprotected Controls and Delayed Response"
        >
          <p className="leading-8">
            Fictional cloud failures often occur because a security duty is
            assumed rather than assigned. The provider may offer logging, but
            the customer must enable, retain, protect, and review it. The
            provider may offer encryption, but the customer must choose the
            correct design, key ownership, access, and recovery process. The
            provider may operate a managed database, but the customer still
            controls identities, network access, data classification, backup
            choices, and application usage.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Service–Asset–Boundary–Owner Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Service", "Which fictional cloud service and deployment model are used, and which platform layers does the provider operate?"],
              ["Asset", "Which fictional applications, identities, data stores, networks, keys, logs, backups, dependencies, and business processes require protection?"],
              ["Boundary", "Where do fictional data, identity, authority, network path, provider control, customer control, or partner responsibility change?"],
              ["Owner", "Which fictional provider, team, data owner, identity owner, application owner, network owner, user, or partner owns each decision and action?"],
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
            Cloud Foundations and Responsibility Terms
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
            Service Models
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Provider and Customer Duties Change by Service Type
          </h2>

          <div className="mt-6 grid gap-5">
            {serviceModels.map((item) => (
              <article
                key={item.model}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.model}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Provider generally operates
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.provider}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Customer generally owns
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.customer}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common gap
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.common_gap}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Review evidence
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
            Deployment Models
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Public, Private, Hybrid, Multi-Cloud, and Partner Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {deploymentModels.map((item) => (
              <article
                key={item.model}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.model}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Responsibility focus
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.responsibility_focus}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence needed
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidence_need}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Responsibility Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Control Domains and Their Common Gaps
          </h2>

          <div className="mt-6 grid gap-5">
            {responsibilityDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Provider responsibility
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.provider}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Customer responsibility
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.customer}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Shared coordination
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.shared}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common responsibility gap
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.gap}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Cloud Asset Map
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Learning Cloud Assets, Owners, and Trust Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {assetMap.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.asset}</h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.type}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Owner", item.owner],
                    ["Data", item.data],
                    ["Dependencies", item.dependency],
                    ["Trust boundary", item.trust],
                    ["Review evidence", item.evidence],
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
            Build a Fictional Shared-Responsibility Review
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
          title="Fake Northbridge Cloud Responsibility Dashboard"
          subtitle="Training dashboard for fictional cloud evidence only."
          metrics={[
            {
              label: "Mapped cloud assets",
              value: "8",
              note: "Applications, identity, storage, database, network, logging, export automation, and recovery are assigned.",
            },
            {
              label: "Responsibility gaps",
              value: "3",
              note: "Broad storage role, wider network path, and incomplete logging ownership require review.",
            },
            {
              label: "Unresolved owner decisions",
              value: "2",
              note: "Final permission approval and network-exception ownership remain undocumented.",
            },
          ]}
        />

        <FakeAlertCard
          title="Managed Storage Has a Customer-Owned Access Gap"
          severity="High"
          time="10:18 AM"
          source="Fake Cloud Responsibility Console"
          details="The fictional provider operates the managed storage service, but the customer-managed export role can read two storage collections even though the approved workflow requires one."
          recommendation="Do not blame the provider or assume misuse. Confirm the service boundary, effective access, business requirement, migration history, owners, logging coverage, network paths, dependencies, and validation plan. Assign coordinated fictional action to the identity, application, storage, network, monitoring, and change-approval owners."
        />

        <FakeLogPanel
          title="Fake Northbridge Shared-Responsibility Records"
          logs={[
            "09:00 SCOPE service='Northbridge Learning Cloud' model='managed platform'",
            "09:05 ASSET count='8' owners='assigned'",
            "09:12 ROLE name='export-automation-role' collections='approved,archive-secondary'",
            "09:14 REQUIREMENT collections_needed='approved only'",
            "09:18 HISTORY role_scope='migration temporary' closure='missing'",
            "09:25 NETWORK private_endpoint='enabled' wider_route='present'",
            "09:31 LOGGING approved_collection='enabled' archive_secondary='disabled'",
            "09:38 PROVIDER assurance='physical, infrastructure, managed service'",
            "09:44 GAP identity_owner='assigned' final_approver='missing'",
            "09:50 FINDING overpermission='supported' misuse='not proven'",
            "10:02 FINDING route_gap='supported' public_reachability='not proven'",
            "10:10 ACTION teams='application,identity,storage,network,security,change'",
            "10:18 REVIEW evidence_lineage='complete' confidence='high'",
            "10:25 LIMIT contract_detail='approved agreement required'",
            "10:30 PORTFOLIO fictionalization='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Supplied Case Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Responsibility Evidence
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

                  <h3 className="text-lg font-black text-white">
                    {item.record}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
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
                      Supported meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
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
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Responsibility Findings and Limits
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
          title="Who Owns the Broad Storage Role?"
          evidence={[
            "The fictional provider operates the managed object-storage service and underlying infrastructure.",
            "The customer defines the export automation identity and role policy.",
            "The role can read two storage collections, but the approved workflow requires one.",
            "The broader access was created for a completed migration and has no current approved exception.",
            "Logging coverage is incomplete for the second collection.",
            "The provider assurance statement does not evaluate customer tenant roles or logging choices.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The broad role is a customer-owned least-privilege and governance gap requiring coordinated identity, application, storage, logging, and change-approval action; misuse is not proven.",
            "The cloud provider caused unauthorized access.",
            "The broad role proves malicious activity.",
            "No action is needed because storage is managed.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion maps the responsibility to the customer-controlled role while preserving the misuse and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Responsibility Analysis"
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
          title="Build the Northbridge Shared-Responsibility and Cloud-Asset Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Service Boundary, Asset Map, Responsibility Matrix, and Action Plan
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to map the
                cloud environment and identify responsibility gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Service model, deployment model, tenant, accounts, projects, regions, and review scope.</li>
                <li>Asset inventory with owner, data, dependency, trust boundary, and evidence source.</li>
                <li>Provider, customer, shared, reviewer, and escalation responsibilities for each control domain.</li>
                <li>Trust-boundary and data-flow map.</li>
                <li>Responsibility-gap register with evidence, alternatives, confidence, and limitations.</li>
                <li>Owned action plan with approval, deadline, validation, rollback, monitoring, and completion evidence.</li>
                <li>Technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not sign in to or inspect any real cloud environment. Complete
            the lab only with fictional records displayed on this page.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Says the Provider Owns the Broad Role"
          scenario="The fictional export automation role is broader than required, but the application team argues that the provider owns storage security."
          choices={[
            {
              label: "Choice A",
              response:
                "Map the service boundary, show that the customer controls the tenant role, verify effective access and business need, identify all owners, preserve evidence limits, and coordinate a tested least-privilege change.",
              outcome:
                "Best defensive choice. Responsibility is assigned without assuming misuse.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Escalate the role as a provider failure without reviewing the tenant policy.",
              outcome:
                "Weak. Provider operation does not transfer customer-managed identity policy.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the role because the service is managed.",
              outcome:
                "Unsafe. Managed service does not remove customer access responsibility.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Private Endpoint Exists, but a Wider Route Also Remains"
          scenario="The fictional architecture expects private access, yet a wider provider-service route is still allowed."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify effective reachability, route and rule ownership, application dependencies, approved exceptions, flow evidence, rollback, and validation before changing the route.",
              outcome:
                "Best defensive choice. Exposure and service continuity are tested rather than assumed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the storage collection public because a wider route exists.",
              outcome:
                "Unsupported. A wider route does not by itself prove public reachability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the route immediately without owner coordination.",
              outcome:
                "Unsafe. Unreviewed changes may disrupt the fictional service.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Shared Responsibility and Cloud Foundations Checklist"
          items={[
            "I can identify the fictional cloud service model, deployment model, tenant, accounts, projects, regions, and availability boundaries.",
            "I can distinguish provider-controlled infrastructure from customer-controlled identities, configuration, data, logging, networking, application, and recovery decisions.",
            "I can map fictional applications, services, identities, data stores, networks, keys, logs, backups, dependencies, owners, and business purposes.",
            "I can identify where data, identity, authority, network path, ownership, or responsibility crosses a trust boundary.",
            "I can build a provider, customer, shared, reviewer, and escalation responsibility matrix.",
            "I can use provider assurance only within the documented provider-controlled boundary.",
            "I can identify broad roles, wider routes, logging gaps, and unclear approvals without claiming misuse or impact.",
            "I can write findings with evidence, alternatives, confidence, limitations, named owners, and coordinated actions.",
            "I can design remediation with approval, deadline, validation, rollback, monitoring, residual risk, and completion evidence.",
            "I will use only fictional cloud evidence and never expose or access real tenants, accounts, roles, storage, databases, networks, keys, logs, alerts, owners, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.1 Mini Quiz: Shared Responsibility and Cloud Security Foundations"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Shared Responsibility and Cloud Security Foundations Package for the Northbridge Learning Cloud. Include service and deployment models, tenant and account boundaries, asset inventory, owner map, data-flow diagram, trust boundaries, responsibility matrix, provider assurance boundary, evidence register, responsibility gaps, findings, alternatives, confidence, limitations, action owners, validation, rollback, monitoring, and a portfolio-safety statement."
          tips={[
            "Use only fictional providers, organizations, tenants, accounts, projects, identities, services, data, networks, keys, logs, owners, and decisions.",
            "Do not assign a control to the provider or customer without showing the service boundary and supporting evidence.",
            "Distinguish a responsibility gap from proof of misuse, compromise, or impact.",
            "Make every asset, control, finding, and action traceable to a named fictional owner and parent evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud security is divided across provider, customer, application, data, identity, network, user, and partner responsibilities.",
            "Managed service does not mean managed customer configuration, access, data governance, logging, or recovery decisions.",
            "Service and deployment models change the location of responsibilities and trust boundaries.",
            "A cloud review should begin with assets, owners, data, dependencies, regions, accounts, projects, and evidence boundaries.",
            "Provider assurance supports provider-controlled duties but does not prove customer tenant settings are secure.",
            "Responsibility gaps should be supported by evidence and reported without assuming misuse or intent.",
            "Portfolio artifacts should recreate cloud responsibility reasoning with fully fictional services and records.",
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