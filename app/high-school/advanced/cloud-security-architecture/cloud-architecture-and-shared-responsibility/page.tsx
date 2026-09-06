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
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousLesson = modulePath;
const nextLesson = `${modulePath}/cloud-iam-architecture`;

const objectives = [
  "Explain shared responsibility as a cloud security ownership model rather than a slogan that assigns all security work to either the provider or the customer.",
  "Compare how responsibility changes across infrastructure, platform, managed-service, and software-service models without assuming the same boundary applies everywhere.",
  "Map cloud security responsibilities for identity, data, configuration, applications, networks, logging, resilience, and lifecycle ownership.",
  "Evaluate fictional cloud evidence to determine which responsibilities are Confirmed, Conditional, Unknown, or misassigned.",
  "Build a Shared Responsibility and Ownership Map that becomes the first artifact in the A12 Cloud Security Architecture Assessment.",
];

const serviceModels = [
  {
    model: "Infrastructure-oriented cloud service",
    provider:
      "The provider generally operates physical facilities, physical servers, core networking, and the underlying virtualization or hardware service.",
    organization:
      "The organization often retains significant responsibility for guest operating systems, application software, identities, data, security configuration, workload networking, logging, patching choices, and recovery design.",
    architectureLesson:
      "More infrastructure control usually means more direct operational and configuration responsibility for the organization.",
  },
  {
    model: "Platform-oriented cloud service",
    provider:
      "The provider operates more of the underlying compute platform, runtime, or managed application environment.",
    organization:
      "The organization still owns application code, identities, data, permissions, service configuration, integration choices, monitoring expectations, and secure use of the platform.",
    architectureLesson:
      "Managed platforms reduce some infrastructure work but do not remove application, identity, data, or configuration responsibility.",
  },
  {
    model: "Managed data or application service",
    provider:
      "The provider may operate the service engine, availability mechanisms, patching of the managed service, and the underlying infrastructure.",
    organization:
      "The organization still decides what data enters the service, who can access it, how identities are configured, which network paths exist, how retention works, and what evidence is monitored.",
    architectureLesson:
      "A highly managed service can still be insecure when access, configuration, data handling, or monitoring is poorly designed.",
  },
  {
    model: "Software-as-a-service style product",
    provider:
      "The provider operates the application platform and most of the software stack.",
    organization:
      "The organization still owns account lifecycle, role assignment, tenant configuration, data-sharing decisions, integrations, user behavior, retention choices, audit review, and governance.",
    architectureLesson:
      "Using finished software shifts technical operations to the provider, but the organization still owns how the service is configured and used.",
  },
];

const responsibilityDomains = [
  {
    domain: "Physical infrastructure",
    providerRole:
      "Typically provider-operated in public cloud environments.",
    organizationRole:
      "Usually no direct operation of provider facilities or hardware.",
    sharedQuestion:
      "What provider assurance or service documentation supports the organization's trust assumptions?",
  },
  {
    domain: "Cloud service availability",
    providerRole:
      "Operates the underlying service according to the published service design and commitments.",
    organizationRole:
      "Chooses architecture patterns, regions or zones where applicable, dependencies, recovery strategies, and business continuity plans.",
    sharedQuestion:
      "Does the organization's architecture actually use the provider's resilience features correctly?",
  },
  {
    domain: "Identity and access",
    providerRole:
      "Provides identity, authentication, authorization, federation, or access-control capabilities depending on the service.",
    organizationRole:
      "Defines users, workloads, roles, privileges, approvals, lifecycle rules, and access reviews.",
    sharedQuestion:
      "Who owns role design, privileged access, stale identities, and evidence that least privilege is maintained?",
  },
  {
    domain: "Data",
    providerRole:
      "Protects the provider-operated storage service and underlying infrastructure.",
    organizationRole:
      "Classifies data, chooses where it is stored, controls access, manages retention, approves sharing, and determines backups and deletion expectations.",
    sharedQuestion:
      "Who decides whether the data belongs in the service and which identities may access it?",
  },
  {
    domain: "Application code",
    providerRole:
      "May provide the hosting platform, runtime, managed service, or deployment infrastructure.",
    organizationRole:
      "Owns application logic, secure design, dependencies, authorization behavior, error handling, and release evidence for custom software.",
    sharedQuestion:
      "Which application controls are implemented by the organization versus inherited from the platform?",
  },
  {
    domain: "Configuration",
    providerRole:
      "Provides configuration mechanisms and supported security settings.",
    organizationRole:
      "Chooses and maintains the actual tenant, service, identity, storage, network, logging, and retention configuration.",
    sharedQuestion:
      "What is the approved baseline and how is drift detected?",
  },
  {
    domain: "Network exposure",
    providerRole:
      "Operates the cloud networking service and underlying infrastructure.",
    organizationRole:
      "Defines which services are public or private, which flows are allowed, and how ingress, egress, and service-to-service trust are bounded.",
    sharedQuestion:
      "Who approves internet exposure or cross-boundary connectivity?",
  },
  {
    domain: "Logging and monitoring",
    providerRole:
      "Produces platform and service telemetry according to service capabilities.",
    organizationRole:
      "Enables required logs, routes them, protects them, defines retention, reviews alerts, monitors source health, and responds to findings.",
    sharedQuestion:
      "A provider can offer logs, but who confirms they are enabled, current, retained, and reviewed?",
  },
  {
    domain: "Secrets and keys",
    providerRole:
      "May provide managed secret and key services and protect underlying infrastructure.",
    organizationRole:
      "Controls key or secret purpose, access policy, workload identity, rotation expectations, environment separation, and lifecycle ownership.",
    sharedQuestion:
      "Who owns the access policy and evidence that secrets are not over-scoped?",
  },
  {
    domain: "Backup and recovery",
    providerRole:
      "May provide backup, snapshot, replication, and recovery capabilities.",
    organizationRole:
      "Defines recovery requirements, configures backups, protects backup access, validates restoration, and maintains recovery ownership.",
    sharedQuestion:
      "Does backup existence actually support the organization's recovery objective?",
  },
  {
    domain: "Compliance and governance",
    providerRole:
      "Provides service assurances, documentation, certifications, and contractual information depending on the service.",
    organizationRole:
      "Determines whether the service and its configuration meet organizational, legal, contractual, and policy requirements.",
    sharedQuestion:
      "Who maps provider assurances to the organization's actual use of the service?",
  },
  {
    domain: "Incident response",
    providerRole:
      "Responds to incidents affecting provider-operated infrastructure and service layers.",
    organizationRole:
      "Responds to compromised identities, unsafe configuration, application issues, data exposure, tenant activity, and organization-owned evidence.",
    sharedQuestion:
      "How do provider notification and organization response responsibilities connect during an incident?",
  },
];

const vocabulary = [
  {
    term: "Shared responsibility model",
    definition:
      "A way to divide cloud security responsibilities among the provider, the organization, and sometimes multiple internal teams based on which layer each party operates or controls.",
  },
  {
    term: "Cloud provider",
    definition:
      "The organization that operates cloud infrastructure, platforms, managed services, or software services used by a customer organization.",
  },
  {
    term: "Customer organization",
    definition:
      "The organization consuming the cloud service and deciding how its identities, data, applications, configuration, integrations, and governance use that service.",
  },
  {
    term: "Inherited control",
    definition:
      "A security capability primarily operated by another party, such as provider physical security, that the organization relies on through the service relationship.",
  },
  {
    term: "Customer-managed control",
    definition:
      "A security control the organization must configure, operate, review, or validate itself.",
  },
  {
    term: "Shared control",
    definition:
      "A security outcome where both provider capability and customer configuration or operation contribute to the final result.",
  },
  {
    term: "Service model",
    definition:
      "The level of cloud capability consumed, which influences how much infrastructure, platform, application, and configuration responsibility remains with the organization.",
  },
  {
    term: "Control owner",
    definition:
      "The accountable person or team responsible for ensuring a security control is configured, monitored, evidenced, and maintained.",
  },
  {
    term: "Evidence owner",
    definition:
      "The person or team responsible for producing or maintaining the evidence needed to support a security claim.",
  },
  {
    term: "Responsibility gap",
    definition:
      "A condition where a needed security responsibility is not clearly assigned or where each party assumes another party owns it.",
  },
  {
    term: "Assumption",
    definition:
      "A belief the architecture relies on that should be supported by evidence or clearly marked as uncertain.",
  },
  {
    term: "Boundary",
    definition:
      "A point where ownership, trust, identity, data handling, network exposure, or security responsibility changes.",
  },
];

const northbridgeServices = [
  {
    id: "CLD-01",
    service: "Managed Application Platform",
    purpose: "Hosts the fictional Student Services Portal application",
    provider:
      "Operates underlying platform infrastructure, service runtime, and platform availability mechanisms.",
    organization:
      "Owns application code, application configuration, identity integration, data handling, dependencies, release evidence, and application logging requirements.",
    owner: "Application Platform Team",
    status: "Confirmed",
  },
  {
    id: "CLD-02",
    service: "Managed Workforce Identity Service",
    purpose: "Authenticates counselors and administrators",
    provider:
      "Operates identity service infrastructure and supported authentication capabilities.",
    organization:
      "Defines staff lifecycle, federation, role design, privileged access, account disablement, access review, and application authorization mapping.",
    owner: "Identity Platform Team",
    status: "Confirmed",
  },
  {
    id: "CLD-03",
    service: "Managed Database",
    purpose: "Stores student-support application records",
    provider:
      "Operates database service infrastructure, service engine maintenance, and platform availability.",
    organization:
      "Owns data classification, schema, database identities, permissions, retention, application queries, backup settings, audit configuration, and recovery objectives.",
    owner: "Data Platform + Application Team",
    status: "Conditional",
  },
  {
    id: "CLD-04",
    service: "Object Storage",
    purpose: "Stores approved generated reports and export packages",
    provider:
      "Operates storage infrastructure and supported durability and security features.",
    organization:
      "Controls storage access, public/private exposure, object lifecycle, retention, encryption configuration choices, logging, and data classification.",
    owner: "Reporting Team",
    status: "Conditional",
  },
  {
    id: "CLD-05",
    service: "Cloud Logging Service",
    purpose: "Collects application, identity, configuration, and platform events",
    provider:
      "Operates the logging service and supported collection/storage capabilities.",
    organization:
      "Enables required sources, defines schemas, routes events, protects access, sets retention, monitors source health, and reviews alerts.",
    owner: "Security Monitoring",
    status: "Confirmed",
  },
  {
    id: "CLD-06",
    service: "Managed Backup Service",
    purpose: "Protects critical database and storage data",
    provider:
      "Operates the backup service capability and supporting infrastructure.",
    organization:
      "Configures protected resources, retention, recovery access, restoration ownership, recovery objectives, and restoration validation.",
    owner: "Data Platform + Recovery Owner",
    status: "Unknown",
  },
  {
    id: "CLD-07",
    service: "Scheduling SaaS Integration",
    purpose: "Coordinates approved appointment information",
    provider:
      "Operates the external scheduling product and its service infrastructure.",
    organization:
      "Controls tenant configuration, integration identity, outbound fields, user access, retention choices available to the customer, and vendor governance.",
    owner: "Integration Owner",
    status: "Conditional",
  },
];

const ownershipAntiPatterns = [
  {
    title: "The provider handles security",
    problem:
      "This statement ignores customer responsibilities for identity, data, configuration, access, applications, logging, integrations, and governance.",
    better:
      "Name the exact provider-operated responsibility and the exact customer responsibility for each service.",
  },
  {
    title: "We own everything because it is our data",
    problem:
      "The organization owns decisions about its data, but it does not operate the provider's physical facilities or underlying managed infrastructure.",
    better:
      "Separate responsibility for data governance from responsibility for infrastructure operation.",
  },
  {
    title: "Managed means secure by default",
    problem:
      "A managed service can still be configured with overbroad access, weak retention, missing logs, unsafe integrations, or unclear ownership.",
    better:
      "Review how the organization configures and uses the managed service.",
  },
  {
    title: "Compliance certification means our configuration is compliant",
    problem:
      "Provider assurance describes the provider's controls and service scope, not automatically the customer's tenant configuration or business process.",
    better:
      "Map provider assurance to the organization's actual architecture and control responsibilities.",
  },
  {
    title: "The application team owns cloud security",
    problem:
      "Identity, networking, logging, data, recovery, and governance may belong to different platform and security teams.",
    better:
      "Use a responsibility matrix with accountable owners and evidence owners.",
  },
  {
    title: "If no one is sure, mark it shared",
    problem:
      "Shared should describe a real division of work, not hide uncertainty or missing ownership.",
    better:
      "Use Unknown when ownership is unclear and resolve the gap explicitly.",
  },
];

const evidenceMatrix = [
  {
    claim:
      "Provider operates the physical infrastructure supporting the managed application service.",
    evidence:
      "Provider service documentation and assurance materials referenced by the fictional architecture record.",
    owner: "Cloud Governance",
    status: "Confirmed",
  },
  {
    claim:
      "Production application identities are reviewed every quarter.",
    evidence:
      "Current access-review record exists for workforce identities.",
    owner: "Identity Platform Team",
    status: "Confirmed",
  },
  {
    claim:
      "All critical storage has current restoration evidence.",
    evidence:
      "Backup configuration exists, but the last documented restoration exercise predates the current architecture baseline.",
    owner: "Recovery Owner",
    status: "Unknown",
  },
  {
    claim:
      "Cloud logging sources are healthy and current.",
    evidence:
      "Identity, application, and configuration sources are current; one object-storage source lacks freshness monitoring.",
    owner: "Security Monitoring",
    status: "Conditional",
  },
  {
    claim:
      "The scheduling SaaS receives only approved appointment fields.",
    evidence:
      "Integration requirement and application test evidence support minimum-field payload.",
    owner: "Integration Owner",
    status: "Confirmed",
  },
  {
    claim:
      "All shared responsibilities have an accountable owner.",
    evidence:
      "Six services have owners; the recovery evidence owner for one backup path is still unresolved.",
    owner: "Cloud Architecture Owner",
    status: "Conditional",
  },
];

const dashboardMetrics = [
  {
    label: "Cloud services reviewed",
    value: "7",
    note: "Application, identity, database, storage, logging, backup, and SaaS integration",
  },
  {
    label: "Responsibilities mapped",
    value: "31 / 34",
    note: "Three recovery and storage evidence duties still need ownership clarification",
  },
  {
    label: "Current evidence",
    value: "82%",
    note: "Most identity, application, and logging evidence is current",
  },
  {
    label: "Open ownership gaps",
    value: "3",
    note: "Two recovery items and one storage-source health item remain incomplete",
  },
];

const logs = [
  "[08:30] CLD-01 app-platform provider=PLATFORM organization=APP_CODE+CONFIG owner=ApplicationPlatform",
  "[08:47] CLD-02 workforce-identity lifecycle_owner=IdentityPlatform status=CONFIRMED",
  "[09:11] CLD-03 managed-db backup_config=ENABLED restore_evidence=STALE",
  "[09:36] CLD-04 object-storage logging=ENABLED source_health=UNKNOWN",
  "[10:05] CLD-05 logging-service critical-sources=4 healthy=3 conditional=1",
  "[10:28] CLD-06 backup-service restore-owner=UNRESOLVED status=UNKNOWN",
  "[10:54] CLD-07 scheduling-saas fields=minimized owner=IntegrationOwner status=CONDITIONAL",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep recovery readiness Unknown until the organization identifies a restoration owner and collects current restoration evidence.",
    outcome:
      "Best. The provider offering backup capability does not prove the organization can meet its recovery objective.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark recovery Confirmed because the managed backup service shows backups exist.",
    outcome:
      "Risky. Backup existence is not the same as restoration evidence or recovery readiness.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assign the responsibility entirely to the provider because the backup service is managed.",
    outcome:
      "Risky. The organization still owns recovery requirements, configuration, access, restoration testing, and operational readiness.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat tenant access configuration, role assignment, integration scope, and audit review as organization responsibilities even though the provider operates the SaaS product.",
    outcome:
      "Best. SaaS reduces software operation but does not remove customer responsibilities for secure use and configuration.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat every security responsibility as the SaaS provider's because the organization does not manage servers.",
    outcome:
      "Risky. The organization still controls how its tenant, identities, roles, data, and integrations are used.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Give all SaaS users administrator access because the provider secures the application.",
    outcome:
      "Risky. Provider security does not replace least-privilege role design inside the customer tenant.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What does the cloud shared responsibility model describe?",
    choices: [
      "A rule that the cloud provider is responsible for all security.",
      "A division of security responsibilities between provider-operated layers and customer-controlled use, configuration, identity, data, applications, and governance.",
      "A rule that the customer must operate the provider's data centers.",
      "A guarantee that managed services are secure without configuration.",
    ],
    answer: 1,
    explanation:
      "Shared responsibility clarifies who operates, configures, validates, monitors, and governs each security responsibility.",
  },
  {
    question:
      "Why does responsibility change across different cloud service models?",
    choices: [
      "Because every cloud service has identical technical boundaries.",
      "Because the provider may operate more or less of the infrastructure, platform, runtime, or application stack depending on the service.",
      "Because customer data stops needing protection in managed services.",
      "Because identity is always provider-owned.",
    ],
    answer: 1,
    explanation:
      "The service model changes which technical layers are provider-operated, but customer identity, data, configuration, and governance responsibilities remain important.",
  },
  {
    question:
      "A cloud provider offers a managed logging service. What remains an organization responsibility?",
    choices: [
      "Nothing related to logging.",
      "Enabling required sources, choosing retention, protecting access, monitoring source health, reviewing alerts, and responding to findings.",
      "Operating the provider's physical storage hardware.",
      "Replacing the provider's logging software.",
    ],
    answer: 1,
    explanation:
      "Provider capability must still be configured and used by the organization in a way that supports its security requirements.",
  },
  {
    question:
      "A managed backup service shows successful backup jobs, but no current restoration test exists. What is the strongest recovery conclusion?",
    choices: [
      "Recovery is Confirmed.",
      "Recovery capability remains Unknown or Conditional until current restoration evidence supports the stated recovery objective.",
      "The provider owns the entire recovery responsibility.",
      "Backups should be deleted.",
    ],
    answer: 1,
    explanation:
      "Backup existence does not prove the organization can restore data or service within its required conditions.",
  },
  {
    question:
      "Which statement about SaaS is strongest?",
    choices: [
      "The provider owns all user access decisions.",
      "The customer still owns tenant configuration, account lifecycle, role assignment, integrations, data-sharing decisions, and audit review.",
      "SaaS eliminates the need for security governance.",
      "Every SaaS user should have administrator access.",
    ],
    answer: 1,
    explanation:
      "SaaS shifts application operation to the provider while leaving important customer configuration and governance responsibilities.",
  },
  {
    question:
      "When responsibility for a cloud control is unclear, what is the strongest approach?",
    choices: [
      "Mark it shared and move on.",
      "Keep ownership Unknown until the exact provider, organization, team, and evidence responsibilities are clarified.",
      "Assume the provider owns it.",
      "Assume the application developer owns it.",
    ],
    answer: 1,
    explanation:
      "Shared should describe a real division of responsibility, not hide missing ownership.",
  },
  {
    question:
      "Why should provider assurance documents not be treated as proof that the customer's cloud architecture is secure?",
    choices: [
      "Because provider assurance is never useful.",
      "Because provider assurance describes provider controls and service scope, while customer identity, data, configuration, access, integrations, and governance still require separate evidence.",
      "Because customers operate the provider's physical facilities.",
      "Because cloud services have no inherited controls.",
    ],
    answer: 1,
    explanation:
      "Provider assurance can support inherited-control claims, but it does not automatically validate the customer's actual configuration and use of the service.",
  },
];

const checklistItems = [
  "Every cloud service has a stated business purpose.",
  "The provider-operated layer is identified without assuming the provider owns all security.",
  "Customer-controlled identity, data, configuration, application, logging, and recovery responsibilities are explicit.",
  "Shared responsibilities describe a real division of work rather than hidden uncertainty.",
  "Accountable owners exist for customer-managed controls.",
  "Evidence owners are identified for important security claims.",
  "Provider assurance is linked only to the provider-operated responsibilities it actually supports.",
  "Managed services are still reviewed for access, data, configuration, logging, resilience, and governance.",
  "Backup existence is separated from restoration evidence.",
  "SaaS tenant configuration and role design remain organization responsibilities.",
  "Unknown ownership and stale evidence remain visible.",
  "Change triggers are defined when service models, providers, identities, data, or architecture boundaries change.",
  "No lesson activity requires access to real cloud accounts, credentials, tenant consoles, or production resources.",
];

const takeaways = [
  "Shared responsibility is a design and ownership model, not a statement that one side handles all security.",
  "The cloud service model changes which technical layers the provider operates, but customer identity, data, configuration, and governance responsibilities remain important.",
  "Managed services reduce operational burden but can still be insecure when configured or governed poorly.",
  "Provider assurance supports inherited-control claims but does not automatically validate the customer's tenant or architecture.",
  "Shared controls require a clear division of work between provider capability and customer configuration or operation.",
  "Responsibility gaps appear when teams assume another party owns a control.",
  "Backup capability does not prove recovery readiness without current restoration evidence.",
  "SaaS still requires customer account lifecycle, role design, data-sharing, integration, audit, and governance decisions.",
  "The Shared Responsibility and Ownership Map becomes the foundation for the rest of A12.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        A12 Module Homepage
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A12
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function CloudArchitectureSharedResponsibilityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A12.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Architecture and Shared Responsibility
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud security starts with a deceptively simple question:
            <strong className="text-white"> who owns what?</strong> The provider
            may operate the cloud service, but the organization still makes
            critical decisions about identity, data, configuration, access,
            applications, logging, resilience, and governance.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional cloud services and synthetic evidence to
            show how responsibility changes across service models and how
            ownership gaps become architecture risk.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A12: Cloud Security Architecture"
          lessonTitle="Cloud Architecture and Shared Responsibility"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.1 Entry Readiness"
          items={[
            "I understand that cloud security includes architecture, configuration, ownership, and evidence.",
            "I can distinguish an organization-controlled setting from provider-operated infrastructure.",
            "I can keep Unknown ownership visible instead of guessing.",
            "I will use only fictional cloud services and synthetic evidence in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Provider Can Secure the Cloud Service While the Customer Still Configures It Unsafely"
        >
          <p className="leading-8">
            Imagine a fictional team chooses a managed object-storage service.
            The provider operates the storage hardware, service software, and
            underlying infrastructure. The customer organization still decides
            who can access the storage, whether it is exposed publicly, how long
            files remain, which applications write to it, whether logging is
            enabled, and how backup or deletion works.
          </p>

          <p className="mt-4 leading-8">
            Both sides matter. The provider secures the service layer it
            operates. The organization must securely configure and use the
            service.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Shared responsibility is about control boundaries, not shared blame.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="The Core Idea"
          title="Security Responsibility Follows Control"
        >
          <p className="leading-8">
            A useful way to think about cloud responsibility is to ask who can
            actually operate or change each layer. The provider controls the
            provider-operated infrastructure. The organization controls how it
            configures identities, data, access, applications, integrations,
            logging, and business processes.
          </p>

          <p className="mt-4 leading-8">
            Some outcomes are genuinely shared. For example, the provider may
            offer an identity service and protect the infrastructure behind it,
            while the organization defines privileged roles, account lifecycle,
            federation, access reviews, and application authorization.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Provider-operated",
                text:
                  "The provider runs and protects a layer the customer cannot directly operate, such as physical infrastructure.",
              },
              {
                title: "Customer-managed",
                text:
                  "The organization configures, owns, reviews, or validates the control directly.",
              },
              {
                title: "Shared outcome",
                text:
                  "Provider capability and customer configuration both contribute to the security result.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Service Models"
          title="Responsibility Changes as the Provider Operates More of the Stack"
        >
          <p className="leading-8">
            Service models are useful because they show how operational
            responsibility moves. They do not remove the need to read the
            provider's actual service documentation in real-world work.
          </p>

          <div className="mt-6 grid gap-5">
            {serviceModels.map((item) => (
              <article
                key={item.model}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.model}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Provider
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.provider}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Organization
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.organization}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Architecture lesson
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.architectureLesson}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Responsibility Domains"
          title="Twelve Cloud Security Areas That Need Named Owners"
        >
          <div className="grid gap-5">
            {responsibilityDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Provider role
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.providerRole}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Organization role
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.organizationRole}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Shared-responsibility question
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.sharedQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Shared Responsibility Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Architecture"
          title="Northbridge Cloud Student Services Platform"
        >
          <p className="leading-8">
            The Northbridge scenario uses seven fictional cloud services. The
            goal is not to memorize the services. The goal is to see how
            responsibility changes across each one.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeServices.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.service}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Purpose: {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Provider responsibility
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.provider}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Organization responsibility
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.organization}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Accountable owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.owner}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Shared Responsibility Dashboard"
          subtitle="Fictional ownership and evidence status"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Recovery Responsibility Gap"
          severity="High"
          time="10:28"
          source="Fictional Cloud Architecture Review"
          details="The managed backup service is configured, but the current architecture record does not identify who owns restoration validation for one critical data path."
          recommendation="Keep recovery readiness Unknown until restoration ownership and current recovery evidence are established."
        />

        <Section
          eyebrow="Ownership Evidence"
          title="A Responsibility Claim Needs Evidence"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1050px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Claim</th>
                  <th className="border-b border-slate-700 p-4">Evidence</th>
                  <th className="border-b border-slate-700 p-4">Owner</th>
                  <th className="border-b border-slate-700 p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {evidenceMatrix.map((item) => (
                  <tr key={item.claim} className="align-top">
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-white">
                      {item.claim}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.evidence}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-cyan-100">
                      {item.owner}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-purple-200">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Shared Responsibility Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Managed Backup Service"
          question="What is the strongest conclusion about the fictional managed backup service?"
          evidence={[
            "Backup jobs are configured for the critical database.",
            "The provider operates the backup service capability.",
            "The last documented restoration exercise predates the current architecture baseline.",
            "One critical recovery path has no clearly assigned restoration owner.",
          ]}
          options={[
            "Recovery readiness is Confirmed because backups exist.",
            "The provider owns all recovery responsibilities.",
            "Backup capability exists, but recovery readiness remains Unknown until current restoration evidence and ownership are established.",
            "The application should stop using backups.",
          ]}
          bestAnswer={2}
          explanation="A managed backup capability supports one part of resilience. The organization still owns recovery objectives, restoration evidence, access, and operational readiness."
        />

        <Section
          eyebrow="Responsibility Gaps"
          title="Common Ways Teams Misread the Cloud Boundary"
        >
          <div className="grid gap-5">
            {ownershipAntiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Provider Assurance"
          title="Inherited Controls Still Need Customer Context"
        >
          <p className="leading-8">
            Real cloud providers publish documentation about service security,
            architecture, responsibilities, and assurance. Those materials can
            support claims about provider-operated layers. They do not
            automatically prove that the customer has configured its own tenant,
            identities, networks, storage, logging, or applications correctly.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Provider evidence can support",
                items: [
                  "Provider physical and environmental controls",
                  "Provider-operated service architecture",
                  "Provider service maintenance responsibilities",
                  "Provider assurance scope",
                  "Published shared-responsibility guidance",
                ],
              },
              {
                title: "Customer evidence still needs to support",
                items: [
                  "Identity and role design",
                  "Tenant and service configuration",
                  "Data classification and access",
                  "Application behavior",
                  "Logging and monitoring configuration",
                  "Recovery testing and governance",
                ],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-blue-300/20 bg-slate-950/20 p-3 text-sm leading-7 text-blue-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Backup Service vs. Recovery Ownership"
          scenario="Northbridge uses a managed backup service. Backup jobs are visible, but no current restoration exercise exists for the new architecture and one critical restore path has no accountable owner."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — SaaS Does Not Remove Tenant Responsibility"
          scenario="Northbridge adopts a fictional scheduling SaaS product. The provider operates the application and infrastructure, while Northbridge controls users, roles, tenant settings, integration fields, and audit review."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Shared Responsibility and Ownership Map"
        >
          <p className="leading-8">
            Use the fictional Northbridge services or create your own fictional
            cloud application. Do not sign in to, inspect, configure, or test a
            real cloud account.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "List at least eight fictional cloud services or architecture components.",
              "Write the business purpose of each service.",
              "Identify the provider-operated responsibilities.",
              "Identify the organization-controlled responsibilities.",
              "Identify any genuinely shared outcomes.",
              "Assign an accountable internal owner.",
              "Assign an evidence owner where different.",
              "List the evidence that supports each responsibility claim.",
              "Mark the status Confirmed, Conditional, Unknown, or Not Applicable.",
              "Identify at least two responsibility gaps.",
              "Explain how the gap could affect identity, data, configuration, monitoring, or recovery.",
              "Define the next action for each gap.",
              "Add change triggers for new services, provider changes, identity changes, new data flows, or service-model changes.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This is an ownership and architecture exercise. Use fictional
              services, synthetic identifiers, and safe evidence only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Cloud Logging Responsibility"
          question="What is the strongest shared-responsibility conclusion?"
          evidence={[
            "The provider operates the managed logging service.",
            "Northbridge enabled application, identity, and configuration log sources.",
            "Northbridge defined retention and access policies.",
            "One object-storage source is enabled but lacks freshness monitoring.",
          ]}
          options={[
            "Logging security is fully the provider's responsibility.",
            "Northbridge owns the logging service infrastructure.",
            "The provider operates the service, while Northbridge remains responsible for source enablement, retention, access, monitoring, and evidence quality; the storage source is therefore Conditional.",
            "The missing freshness monitor proves no storage activity occurred.",
          ]}
          bestAnswer={2}
          explanation="The provider supplies and operates the logging capability, but the customer controls how the service is configured and used to support security evidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Resolve a Responsibility Dispute"
        >
          <p className="leading-8">
            A fictional application owner says, “The database is managed, so
            backup, recovery, encryption, access, and logging are all the
            provider's responsibility.” Write a professional architecture
            response that separates the responsibilities accurately.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Provider-operated database responsibilities",
              "Organization data-classification responsibility",
              "Database identity and access ownership",
              "Application query and authorization ownership",
              "Backup configuration ownership",
              "Restoration validation ownership",
              "Logging and audit configuration ownership",
              "Retention ownership",
              "Encryption configuration or key-governance ownership where applicable",
              "Recovery objective ownership",
              "Evidence owner",
              "Change triggers",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            The strongest answer does not minimize the provider's role or the
            customer's role. It explains the actual boundary and the evidence
            needed on each side.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.1 Mini Quiz: Cloud Architecture and Shared Responsibility"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Shared Responsibility and Ownership Map"
          prompt="Create the first artifact for your A12 Cloud Security Architecture Assessment: a fictional Shared Responsibility and Ownership Map. Include at least eight cloud services or architecture components, business purpose, provider-operated responsibilities, organization responsibilities, shared outcomes, accountable owner, evidence owner, supporting evidence, status, responsibility gaps, next actions, and change triggers."
          tips={[
            "Use fictional cloud services and synthetic identifiers only.",
            "Include more than infrastructure — identity, data, application, logging, recovery, and SaaS responsibilities should appear.",
            "Include at least one managed service and one SaaS-style service.",
            "Use Unknown when ownership or evidence is unclear.",
            "Show at least one example where provider capability exists but customer configuration is still required.",
            "Keep the map provider-neutral enough that it teaches architecture reasoning rather than memorizing one vendor.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.2?"
        >
          <p className="leading-8">
            A12.2 moves deeper into Cloud IAM Architecture. Before continuing,
            make sure you can identify who owns identity decisions when the
            provider supplies the identity capability but the organization
            defines access.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain shared responsibility without saying the provider handles all security.",
              "I can compare infrastructure, platform, managed-service, and SaaS responsibility boundaries.",
              "I can assign provider, organization, shared, and Unknown responsibilities.",
              "I can connect responsibility claims to evidence owners.",
              "I can explain why managed backup, logging, identity, and storage services still require customer configuration and governance.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Ownership Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable service IDs",
                detail:
                  "Give each cloud service a unique reference so later IAM, storage, network, monitoring, and governance artifacts can connect back to it.",
              },
              {
                title: "Separate responsibility types",
                detail:
                  "Use clear columns for provider-operated, organization-managed, shared, and Unknown responsibilities.",
              },
              {
                title: "Show internal ownership",
                detail:
                  "The provider/customer split is not enough. Name the accountable internal team for each customer responsibility.",
              },
              {
                title: "Link evidence",
                detail:
                  "Record what supports each responsibility claim and who maintains that evidence.",
              },
              {
                title: "Show gaps",
                detail:
                  "A professional map makes missing ownership visible instead of hiding it inside a generic Shared label.",
              },
              {
                title: "Use service-model context",
                detail:
                  "Explain how responsibility changes when the organization moves from infrastructure to a more managed platform or SaaS service.",
              },
              {
                title: "Add change triggers",
                detail:
                  "Revisit the map when the provider, service model, identity system, data type, region, network path, or integration changes.",
              },
              {
                title: "Keep it safe to share",
                detail:
                  "Use fictional provider-neutral names, synthetic IDs, and no real tenant, account, project, subscription, credential, or infrastructure details.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Cloud architecture review does not require real cloud access
          </h2>
          <p className="mt-3 leading-7">
            Do not use real cloud credentials, tenant consoles, account IDs,
            subscriptions, projects, storage locations, keys, private logs, or
            production resources. All evidence in this lesson is fictional and
            defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.1 Cloud Architecture and Shared Responsibility Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a responsibility model for understanding who operates,
            configures, monitors, validates, and governs each part of a cloud
            architecture. Next, A12.2 applies that ownership thinking to Cloud
            IAM Architecture.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}