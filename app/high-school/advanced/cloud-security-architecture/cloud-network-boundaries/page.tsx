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
const previousLesson = `${modulePath}/storage-security-and-data-exposure`;
const nextLesson = `${modulePath}/cloud-logging-and-monitoring-design`;

const objectives = [
  "Explain cloud network boundaries as trust and exposure decisions rather than simply lists of subnets, addresses, or firewall rules.",
  "Distinguish public ingress, private service-to-service communication, administrative access, partner connectivity, and outbound egress by purpose, trust, and evidence.",
  "Evaluate fictional network paths using source, destination, business purpose, identity context, allowed direction, exposure, monitoring, ownership, and change triggers.",
  "Identify architecture risks such as unnecessary public exposure, broad internal trust, unrestricted egress, unclear administrative paths, stale partner connectivity, and undocumented cross-environment flows.",
  "Build a Cloud Trust Boundary Map that becomes the fourth artifact in the A12 Cloud Security Architecture Assessment.",
];

const boundaryTypes = [
  {
    title: "Internet-to-application boundary",
    meaning:
      "Traffic crosses from the public internet into an approved public application entry point.",
    architectureQuestions:
      "Which service must be public? What business purpose requires exposure? Which component terminates public access? What protects downstream private services?",
    evidence:
      "Architecture diagram, approved exposure record, application entry-point configuration, monitoring coverage, owner, and change history.",
  },
  {
    title: "Application-to-data boundary",
    meaning:
      "A workload communicates with a database, storage service, or other protected data service.",
    architectureQuestions:
      "Which workload identity is allowed? Which data service is reachable? Is the path private? Is access narrower than general network reachability?",
    evidence:
      "Workload identity record, service connection architecture, resource authorization, private connectivity design, and logs.",
  },
  {
    title: "Service-to-service boundary",
    meaning:
      "One application or managed service calls another service inside the cloud architecture.",
    architectureQuestions:
      "Is the call required? Which service identity makes it? What action is allowed? Does the target need to accept traffic from an entire network or only a named service?",
    evidence:
      "Service dependency map, identity binding, connection policy, application logs, and ownership.",
  },
  {
    title: "Administrative boundary",
    meaning:
      "Privileged operators access configuration, management, support, or recovery functions.",
    architectureQuestions:
      "Where can administrative access originate? Is it separated from normal user traffic? Is privileged identity required? Is access monitored and time-bounded where appropriate?",
    evidence:
      "Privileged IAM record, approved management path, JIT record, audit logs, and access review.",
  },
  {
    title: "Third-party or partner boundary",
    meaning:
      "An external organization, SaaS provider, vendor, or partner exchanges approved traffic or data with the cloud environment.",
    architectureQuestions:
      "What business purpose justifies the connection? Which direction is required? Which data fields or service endpoints are involved? Who owns the relationship and its termination?",
    evidence:
      "Integration architecture, sponsor, vendor record, connection scope, data-flow documentation, logs, and review date.",
  },
  {
    title: "Environment boundary",
    meaning:
      "Development, test, staging, and production environments are separated so lower-trust environments do not casually reach production resources.",
    architectureQuestions:
      "Which flows cross environments? Why are they needed? Are production identities, data, and administrative paths isolated from lower environments?",
    evidence:
      "Environment architecture, identity matrix, data handling rules, approved exceptions, and change records.",
  },
  {
    title: "Outbound egress boundary",
    meaning:
      "A workload or user-controlled process sends traffic from the cloud environment to an external destination.",
    architectureQuestions:
      "Which workloads need outbound communication? To what service categories or named destinations? Is the purpose documented? What telemetry exists?",
    evidence:
      "Dependency inventory, egress policy, integration record, DNS or connection telemetry, and owner.",
  },
];

const trafficClasses = [
  {
    className: "Public user traffic",
    source:
      "General internet users or approved public clients.",
    destination:
      "Public application entry point only.",
    trust:
      "Untrusted external source until the application authenticates and authorizes the user.",
    design:
      "Keep downstream application, storage, and database services private unless a business requirement says otherwise.",
  },
  {
    className: "Authenticated application traffic",
    source:
      "Application components acting for authenticated users.",
    destination:
      "Approved internal services and data stores.",
    trust:
      "Identity and authorization still matter even after traffic enters the cloud environment.",
    design:
      "Use workload identity and service-level authorization rather than relying on network location alone.",
  },
  {
    className: "Privileged management traffic",
    source:
      "Approved administrators using privileged identities.",
    destination:
      "Management interfaces or configuration services.",
    trust:
      "High-impact path requiring stronger identity, approval, monitoring, and review.",
    design:
      "Separate management paths from public user traffic and ordinary workforce access.",
  },
  {
    className: "Partner integration traffic",
    source:
      "Approved vendor, SaaS, or partner system.",
    destination:
      "Specific integration endpoint or service.",
    trust:
      "External but business-approved; still bounded by scope, identity, data minimization, and lifecycle.",
    design:
      "Do not treat partner traffic as equivalent to internal trusted traffic.",
  },
  {
    className: "Outbound dependency traffic",
    source:
      "Application or workload.",
    destination:
      "Approved external dependency such as notification, payment, or scheduling service.",
    trust:
      "The workload initiates the connection, but external dependency risk and data-sharing scope still matter.",
    design:
      "Document business purpose, destination class, data exchanged, owner, and monitoring.",
  },
  {
    className: "Recovery and backup traffic",
    source:
      "Protected workload, backup service, or recovery operator.",
    destination:
      "Backup or recovery service.",
    trust:
      "Sensitive because backup and restore paths often carry production-classified data.",
    design:
      "Keep access narrow, monitored, and tied to recovery ownership.",
  },
];

const segmentationModels = [
  {
    model: "Public edge + private application tier",
    purpose:
      "Only the approved public entry point is internet-facing; application and data services remain private.",
    value:
      "Reduces unnecessary exposure and makes the public trust boundary visible.",
    caution:
      "A private network tier is not automatically trusted; identity and service authorization still matter.",
  },
  {
    model: "Service-oriented segmentation",
    purpose:
      "Services are grouped or isolated by business function, sensitivity, or workload purpose.",
    value:
      "Limits broad lateral reach and makes service dependencies easier to review.",
    caution:
      "Too many undocumented exceptions can defeat the design.",
  },
  {
    model: "Environment separation",
    purpose:
      "Development, test, staging, and production have separate identity, data, and network expectations.",
    value:
      "Reduces accidental cross-environment access and protects production trust boundaries.",
    caution:
      "Shared services and emergency exceptions need explicit review.",
  },
  {
    model: "Management-plane separation",
    purpose:
      "Privileged configuration and administrative access follow a different path from user-facing traffic.",
    value:
      "Makes high-impact access easier to authenticate, monitor, and review.",
    caution:
      "A separate path is useful only if privileged identities and approvals are also well-governed.",
  },
  {
    model: "Partner integration boundary",
    purpose:
      "External partner connectivity terminates at a specific integration service rather than gaining broad access to the internal environment.",
    value:
      "Keeps external trust narrow and easier to remove when the relationship ends.",
    caution:
      "Integration scope, data minimization, and ownership still require evidence.",
  },
  {
    model: "Restricted outbound connectivity",
    purpose:
      "Workloads have only the external connectivity needed for documented dependencies.",
    value:
      "Makes external communication more explainable and reduces unnecessary destinations.",
    caution:
      "Restrictions should match real application dependencies and include a safe change process.",
  },
];

const networkPrinciples = [
  {
    title: "Expose only what must be public",
    meaning:
      "Internet exposure should follow explicit business purpose rather than convenience.",
    review:
      "Can every public endpoint explain why public access is necessary?",
  },
  {
    title: "Network location is not identity",
    meaning:
      "Being inside a private network should not automatically grant application or data access.",
    review:
      "Do services authenticate and authorize workloads even on private paths?",
  },
  {
    title: "Trust changes should be visible",
    meaning:
      "Boundaries between internet, partner, management, workload, data, and environment contexts should be explicit.",
    review:
      "Can the architecture show where trust assumptions change?",
  },
  {
    title: "Direction matters",
    meaning:
      "Inbound and outbound communication create different risks and ownership questions.",
    review:
      "Is the required direction documented for each flow?",
  },
  {
    title: "Purpose before reachability",
    meaning:
      "A connection should exist because a business or technical dependency requires it.",
    review:
      "Can the owner explain why source A must communicate with destination B?",
  },
  {
    title: "Segmentation should reduce meaningful risk",
    meaning:
      "Segmentation is useful when it limits unnecessary communication between trust zones or services.",
    review:
      "Does the boundary actually reduce reach, privilege, or exposure?",
  },
  {
    title: "Administration is a special path",
    meaning:
      "Privileged management access should be separated, strongly authenticated, monitored, and reviewable.",
    review:
      "Can administrative access be distinguished from normal application traffic?",
  },
  {
    title: "Evidence must match the current architecture",
    meaning:
      "Old diagrams and stale connection inventories should not be treated as proof of current exposure.",
    review:
      "Are network records refreshed when services, identities, partners, or environments change?",
  },
];

const vocabulary = [
  {
    term: "Trust boundary",
    definition:
      "A point where the architecture changes its assumptions about identity, exposure, privilege, data sensitivity, ownership, or control.",
  },
  {
    term: "Ingress",
    definition:
      "Traffic entering a service, environment, or protected boundary.",
  },
  {
    term: "Egress",
    definition:
      "Traffic leaving a service, environment, or protected boundary toward another destination.",
  },
  {
    term: "Segmentation",
    definition:
      "Dividing systems or services into bounded communication zones so unnecessary reachability is reduced.",
  },
  {
    term: "Public endpoint",
    definition:
      "A service entry point intentionally reachable from the public internet.",
  },
  {
    term: "Private endpoint",
    definition:
      "A service path intended to be reachable only through approved private or internal connectivity.",
  },
  {
    term: "Management plane",
    definition:
      "Interfaces and services used to configure, administer, monitor, or control cloud resources.",
  },
  {
    term: "Data plane",
    definition:
      "The application or service path that carries normal workload or business data.",
  },
  {
    term: "East-west traffic",
    definition:
      "Communication between workloads or services inside a cloud or data-center environment.",
  },
  {
    term: "North-south traffic",
    definition:
      "Communication entering or leaving an environment, often between internal services and external users or systems.",
  },
  {
    term: "Network policy",
    definition:
      "A rule or design statement describing which sources may communicate with which destinations and under what conditions.",
  },
  {
    term: "Route intent",
    definition:
      "The documented reason traffic should travel between specific sources, destinations, or trust zones.",
  },
];

const networkFlows = [
  {
    id: "NET-01",
    source: "Public Internet Users",
    destination: "Student Portal Public Entry",
    purpose: "Reach the public student-support application",
    direction: "Inbound",
    identity: "Unauthenticated until application sign-in",
    exposure: "Public entry only",
    data: "Application requests",
    owner: "Application Platform Team",
    monitoring: "Entry-point request and application security logs",
    status: "Confirmed",
    concern:
      "Public exposure is required, but downstream services remain private.",
  },
  {
    id: "NET-02",
    source: "Student Portal Workload",
    destination: "Student Support Database",
    purpose: "Read and write approved application records",
    direction: "Service-to-service",
    identity: "PortalDatabaseClient workload identity",
    exposure: "Private",
    data: "Restricted application records",
    owner: "Application + Data Platform",
    monitoring: "Database connection and audit telemetry",
    status: "Confirmed",
    concern:
      "Database should not accept general workforce or public network access.",
  },
  {
    id: "NET-03",
    source: "Student Portal Workload",
    destination: "Generated Report Storage",
    purpose: "Create approved reports",
    direction: "Service-to-service",
    identity: "PortalReporting workload identity",
    exposure: "Private",
    data: "Sensitive generated reports",
    owner: "Reporting Team",
    monitoring: "Storage read/write telemetry",
    status: "Confirmed",
    concern:
      "Report storage has no public-read requirement.",
  },
  {
    id: "NET-04",
    source: "Privileged Platform Operators",
    destination: "Cloud Management Plane",
    purpose: "Perform approved platform administration",
    direction: "Administrative",
    identity: "PlatformAdmin-JIT",
    exposure: "Restricted management path",
    data: "Configuration and administrative metadata",
    owner: "Platform Engineering",
    monitoring: "Privileged activation + administrative audit",
    status: "Conditional",
    concern:
      "One emergency session is missing a linked post-use review.",
  },
  {
    id: "NET-05",
    source: "Notification Worker",
    destination: "External Notification Provider",
    purpose: "Send approved application notifications",
    direction: "Outbound",
    identity: "Notification workload identity + provider integration",
    exposure: "External dependency",
    data: "Minimized notification fields",
    owner: "Notification Team",
    monitoring: "Application integration telemetry",
    status: "Confirmed",
    concern:
      "No other workload should inherit the same outbound dependency by default.",
  },
  {
    id: "NET-06",
    source: "Scheduling SaaS",
    destination: "Scheduling Integration Service",
    purpose: "Exchange approved appointment status",
    direction: "Partner integration",
    identity: "External integration identity",
    exposure: "Specific integration endpoint",
    data: "Minimized appointment fields",
    owner: "Integration Owner",
    monitoring: "Integration request and error telemetry",
    status: "Conditional",
    concern:
      "Partner access review is due soon and must not expand into general application reachability.",
  },
  {
    id: "NET-07",
    source: "Development Environment",
    destination: "Production Reporting Storage",
    purpose: "Historical troubleshooting convenience",
    direction: "Cross-environment",
    identity: "Legacy developer service identity",
    exposure: "Private but cross-environment",
    data: "Potentially sensitive report metadata",
    owner: "Unknown",
    monitoring: "Limited",
    status: "Blocked",
    concern:
      "Current business need, owner, identity scope, and environment exception are not established.",
  },
  {
    id: "NET-08",
    source: "Backup Service",
    destination: "Recovery Repository",
    purpose: "Protect critical production data",
    direction: "Service-to-service",
    identity: "Backup workload identity",
    exposure: "Private recovery path",
    data: "Restricted backup data",
    owner: "Recovery Owner",
    monitoring: "Backup and restore activity",
    status: "Confirmed",
    concern:
      "Restore operators should remain separate from ordinary application users.",
  },
];

const boundaryEvidence = [
  {
    claim:
      "Only the approved application entry point is publicly exposed.",
    evidence:
      "Current architecture diagram, exposure register, and application entry-point review align.",
    status: "Confirmed",
  },
  {
    claim:
      "The production database accepts only the portal workload path.",
    evidence:
      "Workload identity mapping, private service connection record, and database audit evidence align.",
    status: "Confirmed",
  },
  {
    claim:
      "All cross-environment traffic is approved and owned.",
    evidence:
      "NET-07 shows a legacy development-to-production flow with no current owner or exception record.",
    status: "Blocked",
  },
  {
    claim:
      "Privileged management access has complete review evidence.",
    evidence:
      "JIT activation exists, but one emergency session lacks linked post-use review.",
    status: "Conditional",
  },
  {
    claim:
      "Outbound application dependencies are documented.",
    evidence:
      "Notification and scheduling dependencies are documented; one analytics export dependency is under review.",
    status: "Conditional",
  },
  {
    claim:
      "Partner traffic terminates at a narrow integration service.",
    evidence:
      "Integration architecture and current request logs support the narrow endpoint design.",
    status: "Confirmed",
  },
];

const antiPatterns = [
  {
    title: "Private network means trusted",
    problem:
      "Services grant broad access simply because traffic originates from an internal network.",
    better:
      "Use workload identity and service authorization even on private paths.",
  },
  {
    title: "Everything behind one public endpoint is reachable",
    problem:
      "Downstream application and data services become directly exposed when only the front-door service requires public access.",
    better:
      "Keep public exposure at the approved entry point and preserve private downstream boundaries.",
  },
  {
    title: "Allow all outbound traffic",
    problem:
      "Workloads can communicate with destinations unrelated to documented business dependencies.",
    better:
      "Document required external dependencies and bound egress to meaningful service needs.",
  },
  {
    title: "Partner equals internal",
    problem:
      "External vendors or SaaS systems receive broad internal trust because the business relationship is approved.",
    better:
      "Keep partner access narrow, identity-aware, monitored, and tied to a specific integration purpose.",
  },
  {
    title: "Development can reach production for convenience",
    problem:
      "Lower-environment identities and tools gain paths into production data or services.",
    better:
      "Preserve environment separation and require explicit, reviewed exceptions.",
  },
  {
    title: "Administrative traffic looks like normal user traffic",
    problem:
      "High-impact configuration paths are hard to distinguish, monitor, and review.",
    better:
      "Use separate privileged identity and management access patterns.",
  },
  {
    title: "Network diagram without ownership",
    problem:
      "The picture shows arrows but nobody owns the dependencies or knows when they should be removed.",
    better:
      "Attach owner, purpose, evidence, review date, and change triggers to meaningful flows.",
  },
  {
    title: "Old diagram equals current evidence",
    problem:
      "Services and integrations change while the architecture picture remains unchanged.",
    better:
      "Refresh the network map after meaningful deployment, identity, partner, or environment changes.",
  },
];

const dashboardMetrics = [
  {
    label: "Documented network flows",
    value: "8",
    note: "Public, private, administrative, partner, outbound, recovery, and cross-environment paths",
  },
  {
    label: "Public entry points",
    value: "1",
    note: "Only the approved student portal entry point is intended for public access",
  },
  {
    label: "Private service flows",
    value: "4",
    note: "Database, report storage, recovery, and internal application paths",
  },
  {
    label: "Blocked boundary gaps",
    value: "1",
    note: "Legacy development-to-production reporting path has no current owner",
  },
];

const logs = [
  "[08:12] NET-01 internet->portal-entry exposure=PUBLIC_REQUIRED status=CONFIRMED",
  "[08:39] NET-02 portal-workload->student-db path=PRIVATE identity=PortalDatabaseClient",
  "[09:01] NET-03 portal-workload->report-storage path=PRIVATE public_access=NO",
  "[09:27] NET-04 admin->management-plane JIT=YES post_review=PARTIAL status=CONDITIONAL",
  "[09:55] NET-05 notification-worker->provider egress=APPROVED purpose=NOTIFICATION",
  "[10:18] NET-06 scheduling-saas->integration-service partner_scope=NARROW review=8d",
  "[10:43] NET-07 dev->prod-reporting owner=UNKNOWN exception=NONE status=BLOCKED",
  "[11:02] NET-08 backup-service->recovery-repo path=PRIVATE status=CONFIRMED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep NET-07 Blocked, identify whether the flow is still needed, assign an owner, remove it if unnecessary, or create a narrowly scoped and reviewed exception if a valid production support need exists.",
    outcome:
      "Best. Cross-environment access should not survive merely because it is convenient.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow the development environment permanent access to production reporting storage because both are internal.",
    outcome:
      "Risky. Internal location does not remove environment, identity, and data-boundary concerns.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Make production reporting storage public so development no longer needs a special route.",
    outcome:
      "Risky. Public exposure would increase risk rather than resolve the cross-environment governance gap.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the SaaS connection limited to the integration service, use the external integration identity, minimize exchanged fields, monitor the path, and review it when the vendor relationship or data flow changes.",
    outcome:
      "Best. Partner connectivity should remain purpose-specific and bounded.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow the SaaS provider broad internal network access because the company has a contract with the vendor.",
    outcome:
      "Risky. A business relationship does not justify broad trust.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Treat partner traffic exactly like employee traffic and skip integration-specific monitoring.",
    outcome:
      "Risky. External partner boundaries need their own scope, ownership, lifecycle, and evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of a cloud network boundary?",
    choices: [
      "A list of IP addresses only.",
      "A point where trust, exposure, identity, privilege, data handling, or ownership changes.",
      "Any service that uses encryption.",
      "Only the public internet edge.",
    ],
    answer: 1,
    explanation:
      "Cloud network boundaries are useful because they show where architecture assumptions change.",
  },
  {
    question:
      "Why should a private network not automatically be treated as trusted?",
    choices: [
      "Because private networks cannot carry traffic.",
      "Because services still need identity and authorization; internal location alone should not grant application or data access.",
      "Because every private service must be public.",
      "Because cloud providers do not support private networking.",
    ],
    answer: 1,
    explanation:
      "Network location and identity are different controls. Private reachability should still be paired with service authorization.",
  },
  {
    question:
      "What is the strongest reason to limit public exposure to an application entry point?",
    choices: [
      "To keep downstream services private when they do not need direct internet access.",
      "To make every service anonymous.",
      "To remove the need for authentication.",
      "To stop internal monitoring.",
    ],
    answer: 0,
    explanation:
      "Only components that require public access should be directly exposed.",
  },
  {
    question:
      "Why does outbound egress need architecture review?",
    choices: [
      "Because workloads may communicate with external destinations unrelated to approved business dependencies.",
      "Because outbound traffic is always malicious.",
      "Because applications never need external services.",
      "Because egress eliminates the need for identity.",
    ],
    answer: 0,
    explanation:
      "Documented egress helps keep external communication aligned to real dependencies.",
  },
  {
    question:
      "A development environment has an unowned route to production reporting storage. What is the strongest status?",
    choices: [
      "Confirmed because both environments are internal.",
      "Blocked or Unknown until need, ownership, scope, identity, and exception evidence are resolved.",
      "Public.",
      "Trusted permanently.",
    ],
    answer: 1,
    explanation:
      "Cross-environment access is a meaningful boundary and should not remain undocumented.",
  },
  {
    question:
      "What is the strongest design for an external SaaS integration?",
    choices: [
      "Broad internal network access.",
      "A narrow integration endpoint with explicit identity, minimized data, ownership, monitoring, and lifecycle review.",
      "A shared employee account.",
      "No monitoring because the vendor is trusted.",
    ],
    answer: 1,
    explanation:
      "Partner connections should be purpose-specific rather than treated as general internal trust.",
  },
  {
    question:
      "Why should administrative access be separated from normal user traffic?",
    choices: [
      "Because administrators should never access systems.",
      "Because high-impact configuration actions need stronger identity, approval, monitoring, and review.",
      "Because public users should have administrator roles.",
      "Because management actions do not need logs.",
    ],
    answer: 1,
    explanation:
      "Administrative paths carry higher-impact authority and deserve distinct controls and evidence.",
  },
];

const checklistItems = [
  "Every meaningful network flow has a business or technical purpose.",
  "Public exposure is limited to services that actually require it.",
  "Private network location is not treated as a substitute for identity and authorization.",
  "Service-to-service communication identifies source workload, destination, purpose, and owner.",
  "Administrative access follows a distinct privileged path.",
  "Partner and SaaS integrations terminate at narrow, purpose-specific services.",
  "Outbound egress aligns to documented external dependencies.",
  "Development, test, staging, and production boundaries are explicit.",
  "Production data and privileged access do not casually cross into lower environments.",
  "Recovery and backup traffic are included in the network map.",
  "Every important flow has monitoring or evidence coverage appropriate to its risk.",
  "Connection owners and review dates are documented.",
  "Unknown or stale network paths remain visible rather than being assumed safe.",
  "Diagrams and flow inventories are refreshed after meaningful architecture changes.",
  "Change triggers cover new services, new partners, new public exposure, new data flows, identity changes, environment changes, and recovery design changes.",
  "No lesson activity requires scanning, probing, enumerating, testing, or accessing any real network or cloud environment.",
];

const takeaways = [
  "Cloud network architecture is about trust, exposure, purpose, direction, identity, and evidence — not only addresses and subnets.",
  "Public exposure should be limited to components that genuinely require internet reachability.",
  "Private reachability does not replace workload identity or service authorization.",
  "Service-to-service paths should be tied to named dependencies and accountable owners.",
  "Administrative access deserves separate identity, approval, monitoring, and review.",
  "Partner connectivity should remain narrow and should not inherit broad internal trust.",
  "Outbound egress is part of the architecture and should align to documented dependencies.",
  "Environment separation helps keep development and test identities or data from casually reaching production.",
  "Cross-environment and legacy network paths should remain Blocked or Unknown until ownership and purpose are current.",
  "The Cloud Trust Boundary Map becomes a foundation for A12 logging, monitoring, resilience, misconfiguration, and governance reviews.",
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
        Previous Lesson
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

export default function CloudNetworkBoundariesPage() {
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
              A12.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Network Boundaries
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud networking is not secure merely because a resource sits inside
            a private address range. Strong architecture explains which sources
            can reach which destinations, why the path exists, where trust
            changes, which identity is involved, and what evidence proves the
            intended exposure.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional diagrams, synthetic flow records, and
            safe network evidence only. It does not involve scanning, probing,
            enumerating, or testing any real cloud network.
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
          lessonTitle="Cloud Network Boundaries"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.4 Entry Readiness"
          items={[
            "I understand cloud IAM architecture from A12.2.",
            "I understand storage exposure and data boundaries from A12.3.",
            "I can distinguish public access, private service access, and privileged administration.",
            "I will use only fictional network paths and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Private Address Does Not Automatically Mean a Trusted Service"
        >
          <p className="leading-8">
            Imagine a fictional database is reachable only through private cloud
            networking. That is useful, but it does not answer who can connect,
            which workload identity is authorized, whether development can
            reach production, or whether a partner service can traverse the
            same path.
          </p>

          <p className="mt-4 leading-8">
            Network architecture should reduce unnecessary reachability while
            identity architecture decides which people and workloads are
            actually allowed to use the path.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Private reachability is a boundary control — not a replacement for identity.
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
          eyebrow="Trust Boundaries"
          title="Seven Places Where Cloud Network Trust Commonly Changes"
        >
          <div className="grid gap-5">
            {boundaryTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Architecture questions
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.architectureQuestions}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Traffic Classes"
          title="Different Traffic Types Deserve Different Trust Assumptions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trafficClasses.map((item) => (
              <article
                key={item.className}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.className}
                </h3>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Source
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.source}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Destination
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.destination}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Trust model
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.trust}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Design intent
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.design}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Segmentation"
          title="Useful Segmentation Reflects Real Trust and Business Boundaries"
        >
          <div className="grid gap-5">
            {segmentationModels.map((item) => (
              <article
                key={item.model}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.model}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.purpose}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Security value
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.value}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Caution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.caution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Principles"
          title="Eight Principles for Explainable Cloud Connectivity"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {networkPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Cloud Network Boundary Terms"
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
          eyebrow="Fictional Network Flow Register"
          title="Eight Northbridge Cloud Communication Paths"
        >
          <div className="grid gap-5">
            {networkFlows.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.direction}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Source
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.source}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Destination
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.destination}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Identity", item.identity],
                    ["Exposure", item.exposure],
                    ["Data", item.data],
                    ["Owner", item.owner],
                    ["Monitoring", item.monitoring],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.concern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Network Boundary Dashboard"
          subtitle="Fictional exposure and trust-boundary metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Unowned Development-to-Production Network Path"
          severity="High"
          time="10:43"
          source="Fictional Cloud Network Architecture Review"
          details="NET-07 allows a legacy development environment path toward production reporting storage. No current owner or approved exception is documented."
          recommendation="Keep the flow Blocked until business need, identity scope, ownership, data exposure, monitoring, and environment exception are resolved."
        />

        <Section
          eyebrow="Boundary Evidence"
          title="A Network Diagram Is Stronger When It Is Backed by Current Evidence"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Claim</th>
                  <th className="border-b border-slate-700 p-4">Evidence</th>
                  <th className="border-b border-slate-700 p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {boundaryEvidence.map((item) => (
                  <tr key={item.claim} className="align-top">
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-white">
                      {item.claim}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.evidence}
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
          title="Fictional Cloud Network Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Development-to-Production Flow"
          question="What is the strongest conclusion about NET-07?"
          evidence={[
            "The flow originates in a development environment.",
            "The destination is production reporting storage.",
            "The original troubleshooting purpose is historical.",
            "No current owner is documented.",
            "No current environment exception is documented.",
            "Monitoring coverage is limited.",
          ]}
          options={[
            "The flow is safe because both environments belong to the same organization.",
            "The flow should remain Blocked until current purpose, ownership, identity scope, exception, data handling, and monitoring are resolved.",
            "The production storage should be made public.",
            "Cross-environment paths never require review.",
          ]}
          bestAnswer={1}
          explanation="Environment separation is a real trust boundary. An unowned legacy path should not remain active by default."
        />

        <Section
          eyebrow="Network Anti-Patterns"
          title="Eight Ways Cloud Connectivity Becomes Hard to Defend"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
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
          eyebrow="Ingress and Egress"
          title="Direction Changes the Architecture Question"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                Ingress asks: who can reach us?
              </h3>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-cyan-100">
                <p>Which service accepts the connection?</p>
                <p>Is public exposure actually required?</p>
                <p>Which identity or authentication step follows?</p>
                <p>Which downstream services stay private?</p>
                <p>What telemetry records the boundary crossing?</p>
              </div>
            </article>

            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">
                Egress asks: where can our workloads go?
              </h3>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-purple-100">
                <p>Which workload initiates the connection?</p>
                <p>What business dependency requires it?</p>
                <p>Which data leaves the environment?</p>
                <p>Who owns the dependency?</p>
                <p>How will the path be reviewed when the dependency changes?</p>
              </div>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Management Plane"
          title="Administrative Connectivity Deserves Its Own Architecture"
        >
          <p className="leading-8">
            Management actions can change identity, data access, network state,
            monitoring, deployments, and recovery configuration. That makes the
            management path materially different from ordinary application
            traffic.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Identity",
                detail:
                  "Use named privileged identities with stronger authentication and narrow administrative roles.",
              },
              {
                title: "Activation",
                detail:
                  "Use time-bounded or just-in-time privilege where appropriate rather than broad standing authority.",
              },
              {
                title: "Path",
                detail:
                  "Keep management access separate from public user entry points and ordinary application traffic.",
              },
              {
                title: "Evidence",
                detail:
                  "Record privileged activation, configuration changes, approvals, and post-use review where required.",
              },
              {
                title: "Environment",
                detail:
                  "Production administration should not casually inherit lower-environment identities or access paths.",
              },
              {
                title: "Ownership",
                detail:
                  "Every privileged path should have an accountable platform or service owner.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Legacy Cross-Environment Flow"
          scenario="A development environment still has a legacy path toward production reporting storage from an old troubleshooting workflow. No current owner or exception exists."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Partner Connectivity"
          scenario="A scheduling SaaS needs to exchange a minimized appointment-status dataset with one Northbridge integration service. The vendor does not need broad internal access."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Trust Boundary Map"
        >
          <p className="leading-8">
            Use fictional services, users, workloads, partners, environments,
            and evidence only. Do not test or inspect any real cloud network.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional network flows.",
              "Include public ingress, private service-to-service traffic, administrative access, partner connectivity, outbound egress, recovery traffic, and an environment boundary.",
              "Assign each flow a stable ID.",
              "Record source and destination.",
              "State business or technical purpose.",
              "Identify direction.",
              "Record human or workload identity context.",
              "Classify public, private, partner, management, recovery, or cross-environment exposure.",
              "Record the data or service category carried by the flow.",
              "Assign an accountable owner.",
              "Record monitoring or evidence coverage.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Identify at least two unnecessary or overly broad paths.",
              "Identify at least one outbound dependency.",
              "Identify at least one administrative path.",
              "Identify at least one partner boundary.",
              "Define remediation or retirement decisions.",
              "Add change triggers for new services, partners, public endpoints, identities, data flows, dependencies, or environment changes.",
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
              This is a fictional architecture-mapping exercise. Do not scan,
              probe, enumerate, connect to, or alter any real cloud network,
              endpoint, address range, service, or account.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Integration Boundary"
          question="What is the strongest conclusion about NET-06?"
          evidence={[
            "The scheduling SaaS is an approved business dependency.",
            "Traffic terminates at a specific integration service rather than general internal services.",
            "An external integration identity is used.",
            "Only minimized appointment fields are exchanged.",
            "Monitoring is enabled.",
            "The partner access review is due soon.",
          ]}
          options={[
            "The vendor should receive broad internal access because the relationship is approved.",
            "The integration is reasonably bounded but remains Conditional until the upcoming partner review is completed.",
            "Partner traffic does not need identity.",
            "The integration should use a shared employee account.",
          ]}
          bestAnswer={1}
          explanation="The architecture is narrow and purpose-specific, but review freshness still matters."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Flat Cloud Network Into Explainable Trust Zones"
        >
          <p className="leading-8">
            A fictional organization currently allows its public application,
            internal services, administrative tools, development environment,
            analytics, and partner integration to communicate through one broad
            internal network with few documented boundaries.
          </p>

          <p className="mt-4 leading-8">
            Redesign the architecture conceptually. Do not write implementation
            commands or real network rules. Your goal is to make trust and
            ownership understandable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Public application edge",
              "Private application services",
              "Protected data services",
              "Management plane",
              "Development and test environment",
              "Production environment",
              "Partner integration boundary",
              "Outbound dependency boundary",
              "Backup and recovery path",
              "Workload identity requirements",
              "Monitoring coverage",
              "Owner for each zone",
              "Exception process",
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
            A strong redesign explains why communication exists and how identity,
            data, management, partner, and environment boundaries reinforce one
            another.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.4 Mini Quiz: Cloud Network Boundaries"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Trust Boundary Map"
          prompt="Create the fourth artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Trust Boundary Map with at least twelve communication flows. Include flow ID, source, destination, purpose, direction, identity context, exposure type, data or service category, accountable owner, monitoring evidence, status, risk concern, next action, and change trigger."
          tips={[
            "Include public, private, administrative, partner, outbound, recovery, and cross-environment paths.",
            "Show that private network location does not replace workload identity.",
            "Include at least one intentionally public entry point and keep downstream data services private.",
            "Include one Blocked cross-environment path with unresolved ownership.",
            "Show at least one partner path terminating at a narrow integration service.",
            "Use provider-neutral fictional services and no real addresses, account IDs, or infrastructure details.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.5?"
        >
          <p className="leading-8">
            A12.5 moves into Cloud Logging and Monitoring Design. Before
            continuing, make sure you can explain which trust-boundary events
            should become visible evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify public, private, administrative, partner, outbound, and environment boundaries.",
              "I can explain why private network location does not replace workload identity.",
              "I can evaluate a network flow using purpose, direction, identity, exposure, owner, and evidence.",
              "I can identify why unrestricted egress and cross-environment access create architecture risk.",
              "I can connect network boundaries to storage, IAM, monitoring, and governance decisions.",
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
          title="How to Make the Trust Boundary Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use directional arrows",
                detail:
                  "A reviewer should immediately understand which service initiates a flow and which service receives it.",
              },
              {
                title: "Label trust changes",
                detail:
                  "Clearly distinguish internet, partner, management, workload, data, recovery, and environment boundaries.",
              },
              {
                title: "Show identity context",
                detail:
                  "Link each important service path to the human or workload identity responsible for the action.",
              },
              {
                title: "Show data sensitivity",
                detail:
                  "Indicate whether a path carries public, internal, sensitive, restricted, administrative, or recovery data.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every important path should have an accountable application, platform, data, integration, or recovery owner.",
              },
              {
                title: "Show evidence",
                detail:
                  "Connect network claims to current architecture records, identity mappings, logs, and reviews.",
              },
              {
                title: "Keep exceptions visible",
                detail:
                  "Cross-environment and legacy paths should never disappear inside a generic private-network label.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the map reusable in A12.5 monitoring, A12.7 resilience, A12.8 misconfiguration prevention, and A12.9 governance.",
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
            Network architecture review does not require real network testing
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, enumerate, connect to, test, or modify real cloud
            networks, endpoints, address ranges, accounts, routes, security
            policies, private services, or production systems. All network
            records and evidence in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.4 Cloud Network Boundaries Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a cloud network architecture model for trust
            boundaries, public and private exposure, service communication,
            management access, partner connectivity, egress, environment
            separation, monitoring, ownership, and evidence. Next, A12.5
            focuses on Cloud Logging and Monitoring Design.
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