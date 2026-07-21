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
const previousLesson = `${modulePath}/secure-cloud-storage-and-data-protection`;
const nextLesson = `${modulePath}/cloud-logging-monitoring-and-detection`;

const objectives = [
  "Explain fictional virtual networks, subnets, routes, gateways, load balancers, private endpoints, security rules, service exposure, segmentation, and network trust boundaries.",
  "Evaluate fictional inbound and outbound reachability by correlating architecture, route, rule, endpoint, identity, application, DNS, flow, and business evidence.",
  "Distinguish public capability, public addressability, practical reachability, authenticated access, service use, and confirmed impact.",
  "Design fictional segmentation and service-exposure improvements with named owners, approvals, staged validation, rollback, monitoring, and completion evidence.",
  "Create a portfolio-safe fictional cloud network exposure package with asset maps, dependency diagrams, findings, alternatives, confidence, limitations, and owner decisions."
];
const vocabulary = [
  [
    "Virtual network",
    "A fictional customer-defined cloud network boundary containing subnets, routes, security controls, endpoints, and connected services."
  ],
  [
    "Subnet",
    "A fictional segment of a virtual network used to group workloads, services, and network controls by purpose or trust level."
  ],
  [
    "Route table",
    "A fictional set of rules that determines where network traffic is sent based on destination, next hop, and network design."
  ],
  [
    "Gateway",
    "A fictional network service that connects a cloud network to the internet, another network, a provider service, or a private connection."
  ],
  [
    "Load balancer",
    "A fictional service that receives traffic and distributes it to approved application targets according to health and routing rules."
  ],
  [
    "Private endpoint",
    "A fictional customer-controlled network interface that provides private access to a managed cloud service."
  ],
  [
    "Public endpoint",
    "A fictional service address that may be reachable through a public network path when routing, security, service policy, and authentication permit it."
  ],
  [
    "Security rule",
    "A fictional allow or deny control applied to a subnet, interface, workload, gateway, or service under documented conditions."
  ],
  [
    "Network segmentation",
    "Dividing a fictional environment into smaller trust zones to reduce unnecessary communication and limit failure or incident spread."
  ],
  [
    "North-south traffic",
    "Fictional traffic entering or leaving a cloud environment, application boundary, or external trust zone."
  ],
  [
    "East-west traffic",
    "Fictional traffic moving between internal workloads, subnets, services, or application tiers."
  ],
  [
    "Service exposure",
    "The fictional practical ability of a user, system, network, or identity to reach and interact with a cloud service."
  ],
  [
    "Reachability",
    "Whether a fictional source can establish the required network path to a destination under effective routes, rules, gateways, endpoints, and service controls."
  ],
  [
    "Flow record",
    "A fictional summary of a network relationship such as source, destination, protocol, ports, action, bytes, duration, and time."
  ],
  [
    "Egress",
    "Fictional outbound traffic from a workload, subnet, application, or cloud service toward another destination."
  ],
  [
    "Dependency map",
    "A fictional record of which applications, services, networks, identities, data stores, monitoring systems, and recovery processes depend on one another."
  ]
];
const networkComponents = [
  {
    "component": "Public application edge",
    "purpose": "Receives fictional learner traffic through an approved public service and forwards only expected application requests.",
    "strong_controls": "Approved public entry, health checks, encrypted connection concept, application filtering, limited back-end targets, logging, and owner review.",
    "common_gap": "Administrative or internal services are accidentally attached to the same public path.",
    "evidence": "Architecture, listener configuration, target groups, health checks, DNS, access logs, and change records."
  },
  {
    "component": "Application subnet",
    "purpose": "Hosts fictional application workloads that process approved user requests.",
    "strong_controls": "Restricted inbound from the public edge, restricted outbound to required services, workload identities, monitoring, and segmentation.",
    "common_gap": "Broad outbound access or unrestricted communication to unrelated internal services.",
    "evidence": "Subnet routes, interface rules, workload inventory, flow records, application dependencies, and owner requirements."
  },
  {
    "component": "Private service subnet",
    "purpose": "Hosts fictional internal APIs, processing services, database interfaces, and storage endpoints.",
    "strong_controls": "No direct public path, limited application-tier access, private name resolution, service-specific rules, and detailed monitoring.",
    "common_gap": "A wide provider-service route or shared rule allows more sources than the approved architecture requires.",
    "evidence": "Private endpoints, route tables, rules, DNS, flow records, service policy, and dependency map."
  },
  {
    "component": "Administrative path",
    "purpose": "Supports fictional approved maintenance, troubleshooting, configuration, and incident-response access.",
    "strong_controls": "Separate identity, approval, temporary access, controlled source, session monitoring, narrow destinations, and expiration.",
    "common_gap": "Permanent administrative reachability from broad user networks or daily-use identities.",
    "evidence": "Access request, privileged session, source network, route, rule, target, approval, and expiration."
  },
  {
    "component": "Private endpoint",
    "purpose": "Provides fictional private network access to managed storage, database, identity, logging, or other provider services.",
    "strong_controls": "Approved subnets, private DNS, limited resource policy, route validation, source restrictions, and flow monitoring.",
    "common_gap": "A private endpoint exists, but the resource also remains reachable through a wider path.",
    "evidence": "Endpoint configuration, service policy, DNS records, routes, resource policy, flow logs, and application configuration."
  },
  {
    "component": "Internet gateway or public route",
    "purpose": "Supports fictional approved public services and outbound connectivity under controlled conditions.",
    "strong_controls": "Only approved subnets and services, narrow security rules, monitored egress, documented business purpose, and owner approval.",
    "common_gap": "A default route appears in a subnet that was intended to remain private.",
    "evidence": "Route table, gateway attachment, subnet association, interface address, rules, flow records, and owner design."
  },
  {
    "component": "Service gateway or provider route",
    "purpose": "Connects fictional workloads to managed provider services without using the normal public internet path.",
    "strong_controls": "Limited service destinations, approved source subnets, resource policy, monitoring, and private design review.",
    "common_gap": "The route is wider than the documented service dependency and increases reachable resource scope.",
    "evidence": "Gateway policy, route, service destination, source subnet, resource policy, flow records, and business requirement."
  },
  {
    "component": "Network monitoring path",
    "purpose": "Collects fictional flow, DNS, load-balancer, gateway, endpoint, and service-access records for defense and investigation.",
    "strong_controls": "Source coverage, delivery health, protected storage, retention, owner, detection rules, and review.",
    "common_gap": "A subnet or endpoint is outside flow coverage, making negative conclusions unreliable.",
    "evidence": "Logging configuration, source matrix, delivery status, retention, access, alert history, and source-health records."
  }
];
const exposureQuestions = [
  {
    "question": "Is the fictional service addressable?",
    "strong": "Identify public or private addresses, names, endpoints, interfaces, load balancers, and provider service paths.",
    "risk": "Treating the existence of a public-capable service as proof of practical reachability."
  },
  {
    "question": "Which routes make the path possible?",
    "strong": "Map source subnet, route association, next hop, gateway, destination prefix, provider route, and return path.",
    "risk": "Reviewing only security rules while ignoring routing."
  },
  {
    "question": "Which security rules apply?",
    "strong": "Evaluate fictional subnet, interface, workload, load-balancer, gateway, endpoint, and service controls together.",
    "risk": "Assuming one allow rule is enough when another layer denies or narrows the path."
  },
  {
    "question": "Which identity or application controls remain?",
    "strong": "Separate network reachability from authentication, authorization, resource policy, application role, and object access.",
    "risk": "Treating a reachable service as proof that data or functions are accessible."
  },
  {
    "question": "What does DNS or service discovery show?",
    "strong": "Use fictional name resolution to understand intended destination and path while preserving cache, source, and coverage limits.",
    "risk": "Treating name resolution as proof of successful connection or use."
  },
  {
    "question": "What do flow and application records show?",
    "strong": "Correlate fictional source, destination, action, bytes, duration, process or service, request, response, and identity.",
    "risk": "Treating a flow record as proof of payload content or human intent."
  },
  {
    "question": "Which dependencies require the path?",
    "strong": "Connect fictional business workflow, application tier, data store, monitoring, recovery, administration, and third-party needs.",
    "risk": "Removing a route or rule without understanding service continuity."
  },
  {
    "question": "How will the change be validated?",
    "strong": "Use fictional staged rollout, owner approval, expected success and failure cases, rollback, monitoring, and completion evidence.",
    "risk": "Making a one-step network change with no recovery or observation plan."
  }
];
const segmentationZones = [
  {
    "zone": "Public edge zone",
    "assets": "Fictional public load balancer, content-delivery service, and approved public DNS.",
    "allowed": "Public user traffic to approved listeners and health checks to approved targets.",
    "blocked": "Direct public access to private application, database, storage, monitoring, and administration services.",
    "evidence": "Listener rules, target mapping, DNS, access logs, health checks, security rules, and architecture."
  },
  {
    "zone": "Application zone",
    "assets": "Fictional learning portal workloads and export orchestration services.",
    "allowed": "Public edge to application listeners; application to required private services and monitoring.",
    "blocked": "Unnecessary peer-to-peer traffic, direct database administration, and broad outbound access.",
    "evidence": "Subnet routes, workload rules, application dependencies, identities, flow records, and change approvals."
  },
  {
    "zone": "Data zone",
    "assets": "Fictional managed database, confidential object storage, and approved private service endpoints.",
    "allowed": "Approved application and recovery identities from documented private paths.",
    "blocked": "Direct public access, unrelated workloads, broad partner paths, and unapproved administrative sources.",
    "evidence": "Private endpoints, resource policies, database rules, storage policies, DNS, and flow records."
  },
  {
    "zone": "Management zone",
    "assets": "Fictional temporary administration service, deployment control, and security operations access.",
    "allowed": "Approved privileged identities from controlled sources for limited time and documented tasks.",
    "blocked": "Daily user traffic, broad standing access, direct public management, and unmonitored sessions.",
    "evidence": "Access request, identity activation, source network, route, rule, session log, and expiration."
  },
  {
    "zone": "Monitoring zone",
    "assets": "Fictional audit, flow, DNS, detection, and security-event storage.",
    "allowed": "Cloud services writing approved records and security operations reading under least privilege.",
    "blocked": "Application modification of logs, public access, and unapproved deletion or retention changes.",
    "evidence": "Source configuration, delivery, access, retention, health, alert, and integrity records."
  },
  {
    "zone": "Recovery zone",
    "assets": "Fictional backup vault, recovery targets, configuration archives, and restoration workflow.",
    "allowed": "Protected service identities and approved recovery administrators during tests or incidents.",
    "blocked": "Routine application write access, broad network paths, and shared administrative credentials.",
    "evidence": "Backup network path, identity, key, restore plan, test record, monitoring, and owner approval."
  }
];
const networkRecords = [
  {
    "id": "NLC-NET-01",
    "asset": "learning-public-edge",
    "source": "Public network",
    "destination": "Application load balancer",
    "path": "Public DNS → approved listener → application targets",
    "controls": "Encrypted connection concept, health checks, narrow listener, application logging",
    "finding": "The public entry matches the approved learner-facing service design.",
    "limit": "Application security and user authorization require separate evidence."
  },
  {
    "id": "NLC-NET-02",
    "asset": "application-subnet",
    "source": "Application workloads",
    "destination": "Private database and storage endpoints",
    "path": "Application subnet → private service subnet",
    "controls": "Service-specific rules and private DNS",
    "finding": "The primary application-to-data path is private and limited to required services.",
    "limit": "One wider provider-service route remains available."
  },
  {
    "id": "NLC-NET-03",
    "asset": "archive-secondary-storage",
    "source": "Application subnet",
    "destination": "Managed object-storage service",
    "path": "Private endpoint plus wider provider-service route",
    "controls": "Resource policy and role authorization",
    "finding": "The wider route increases network reachability beyond the approved private-only design.",
    "limit": "Public internet reachability and object access are not established."
  },
  {
    "id": "NLC-NET-04",
    "asset": "student-progress-database",
    "source": "Application and recovery zones",
    "destination": "Managed database private interface",
    "path": "Private DNS and private endpoint",
    "controls": "Narrow source rules, database identities, encrypted connection concept",
    "finding": "The database path aligns with the confidential-data design.",
    "limit": "Query authorization and database logging require separate review."
  },
  {
    "id": "NLC-NET-05",
    "asset": "temporary-admin-service",
    "source": "Management zone",
    "destination": "Application and data administration interfaces",
    "path": "Approved temporary session through controlled source",
    "controls": "Just-in-time role, expiration, session monitoring, target restrictions",
    "finding": "The temporary path is safer than broad standing administrative reachability.",
    "limit": "The last emergency-path validation is overdue."
  },
  {
    "id": "NLC-NET-06",
    "asset": "export-function-egress",
    "source": "Export automation",
    "destination": "Approved storage and monitoring services",
    "path": "Private endpoints and provider-service gateway",
    "controls": "Destination restriction and workload identity",
    "finding": "The function has an additional general outbound route not required by the documented workflow.",
    "limit": "No supplied flow shows use of the additional route."
  },
  {
    "id": "NLC-NET-07",
    "asset": "monitoring-pipeline",
    "source": "Cloud services and network components",
    "destination": "Restricted monitoring workspace",
    "path": "Service delivery path",
    "controls": "Protected destination, retention, security-operations access",
    "finding": "Flow logging is missing for one private-service subnet.",
    "limit": "Negative network conclusions for that subnet are weaker until coverage is restored."
  },
  {
    "id": "NLC-NET-08",
    "asset": "partner-integration",
    "source": "Fictional school partner",
    "destination": "Approved application API",
    "path": "Partner identity → public API edge → limited application route",
    "controls": "Approved partner role, request logging, rate limits, and application authorization",
    "finding": "The current partner path is documented, but the role expiration is approaching.",
    "limit": "Network reachability does not prove access to unrelated application functions."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional network question",
    "detail": "Restate the approved services, sources, destinations, identities, data, accounts, regions, time window, owners, evidence, privacy limits, and prohibited real-network actions.",
    "output": "Network-review objective and scope."
  },
  {
    "step": "2",
    "title": "Build the architecture and dependency map",
    "detail": "Record fictional virtual networks, subnets, routes, gateways, endpoints, load balancers, services, DNS, identities, applications, data stores, monitoring, and recovery dependencies.",
    "output": "Cloud network and dependency diagram."
  },
  {
    "step": "3",
    "title": "Calculate effective reachability",
    "detail": "Compare fictional addressability, routes, return paths, security rules, endpoint policies, resource policies, identity controls, application authorization, and source conditions.",
    "output": "Reachability and exposure matrix."
  },
  {
    "step": "4",
    "title": "Correlate observed traffic",
    "detail": "Use fictional DNS, flow, gateway, load-balancer, application, identity, storage, database, and source-health records to distinguish capability from observed use.",
    "output": "Observed-traffic and evidence-correlation table."
  },
  {
    "step": "5",
    "title": "Evaluate segmentation and egress",
    "detail": "Compare fictional public edge, application, data, management, monitoring, and recovery zones with required inbound, east-west, and outbound paths.",
    "output": "Segmentation and egress gap register."
  },
  {
    "step": "6",
    "title": "Test alternatives and impact",
    "detail": "Consider fictional operational exceptions, migration paths, recovery needs, provider routes, application dependencies, and compensating controls without overstating exposure.",
    "output": "Alternatives, confidence, limitations, and impact boundaries."
  },
  {
    "step": "7",
    "title": "Plan safe network changes",
    "detail": "Assign fictional owners, approvals, staged rules or routes, expected tests, rollback, monitoring, communication, residual risk, and completion evidence.",
    "output": "Cloud network remediation plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional evidence lineage, source health, change control, privacy, reviewer approval, owner decisions, and portfolio-safe reporting.",
    "output": "Reviewed service-exposure package."
  }
];
const findings = [
  {
    "id": "NLC-NET-F01",
    "statement": "The fictional learner-facing public edge is limited to the approved application entry and does not directly expose the private data services.",
    "support": "Architecture, DNS, listener configuration, target groups, subnet routes, security rules, and access logs.",
    "alternative": "An undocumented alternate path is possible but not supported by the supplied records.",
    "confidence": "High",
    "limitation": "Application-layer vulnerabilities and user authorization are outside this network-only conclusion."
  },
  {
    "id": "NLC-NET-F02",
    "statement": "Archive-secondary storage remains reachable through a wider provider-service route in addition to the approved private endpoint.",
    "support": "Route table, endpoint configuration, provider-service gateway policy, storage policy, application subnet association, and owner design.",
    "alternative": "The route may support an undocumented operational exception.",
    "confidence": "High",
    "limitation": "Public internet reachability, object access, and disclosure are not established."
  },
  {
    "id": "NLC-NET-F03",
    "statement": "The export function has a general outbound route beyond the documented storage and monitoring destinations.",
    "support": "Function subnet route, workload inventory, destination requirement, endpoint map, flow coverage, and application owner record.",
    "alternative": "A software-update or provider dependency may require controlled outbound access, but no approved requirement is supplied.",
    "confidence": "Medium-High",
    "limitation": "No supplied flow record shows use of the general outbound route."
  },
  {
    "id": "NLC-NET-F04",
    "statement": "One private-service subnet lacks flow-log coverage, reducing confidence in negative network conclusions for that zone.",
    "support": "Logging configuration, source matrix, subnet association, delivery status, retention, and security-operations ownership.",
    "alternative": "Application or provider service logs may supply partial evidence.",
    "confidence": "High",
    "limitation": "Missing flow coverage does not prove suspicious activity."
  },
  {
    "id": "NLC-NET-F05",
    "statement": "The temporary administration path follows stronger controls than permanent broad administrative reachability, but its emergency validation is overdue.",
    "support": "Identity activation, source restriction, routes, target rules, session monitoring, expiration, and test schedule.",
    "alternative": "Normal administrative paths may remain sufficient, but emergency readiness still requires validation.",
    "confidence": "High",
    "limitation": "No real emergency access or live validation is performed."
  },
  {
    "id": "NLC-NET-F06",
    "statement": "The safest correction requires coordinated application, network, storage, identity, monitoring, change, and recovery owners.",
    "support": "Dependency map, route ownership, endpoint ownership, workload identity, storage policy, logging ownership, rollback, and validation requirements.",
    "alternative": "A single-team change may be faster but risks service disruption or incomplete evidence.",
    "confidence": "High",
    "limitation": "Final implementation depends on approved fictional change procedures."
  }
];
const commonMistakes = [
  "Treating the existence of a public-capable fictional service as proof that the resource is publicly reachable.",
  "Reviewing only security rules and ignoring routes, return paths, gateways, endpoints, service policies, identities, and application authorization.",
  "Treating DNS resolution as proof of successful connection or service use.",
  "Treating a flow record as proof of payload content, user intent, or data disclosure.",
  "Treating a private endpoint as proof that no wider provider or public path exists.",
  "Treating one allowed port as proof that every source can reach the destination.",
  "Ignoring east-west traffic, service-to-service dependencies, administrative paths, monitoring, and recovery networks.",
  "Removing a route or rule without validating application, provider, update, backup, monitoring, and recovery dependencies.",
  "Assuming no flow event means no activity without verifying source health, coverage, retention, and expected event generation.",
  "Leaving broad outbound access because inbound access appears restricted.",
  "Using the same fictional network zone for public applications, private data, administration, monitoring, and recovery.",
  "Changing network exposure without named owners, approvals, staged validation, rollback, monitoring, and completion evidence.",
  "Confusing network reachability with identity authorization, resource permission, application access, or business impact.",
  "Using or exposing any real cloud network, subnet, route, gateway, endpoint, address, DNS name, log, account, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What determines fictional effective network reachability?",
    "choices": [
      "Addressability, routes, return paths, gateways, security rules, endpoints, service policies, identity controls, and application authorization together.",
      "Only one inbound rule.",
      "Only the public address.",
      "Only the DNS record."
    ],
    "answer": 0,
    "explanation": "Reachability depends on several interacting network and service-control layers."
  },
  {
    "question": "What does a fictional private endpoint prove?",
    "choices": [
      "A private access path exists within its documented configuration.",
      "No wider path exists.",
      "The service cannot be publicly reachable.",
      "Every request is authorized."
    ],
    "answer": 0,
    "explanation": "A private endpoint is one path and should be compared with routes, policies, and alternate endpoints."
  },
  {
    "question": "What can a fictional flow record most directly support?",
    "choices": [
      "A recorded network relationship between source and destination under documented conditions.",
      "The full payload content.",
      "Human intent.",
      "Confirmed disclosure."
    ],
    "answer": 0,
    "explanation": "Flow records describe network relationships, not full application meaning or intent."
  },
  {
    "question": "Which statement about a wider provider-service route is strongest?",
    "choices": [
      "It increases possible reachability beyond the approved private-only design, but public access or data use is not proven.",
      "It proves the storage is public.",
      "It proves every object was downloaded.",
      "It is harmless because the provider manages the service."
    ],
    "answer": 0,
    "explanation": "The route supports an exposure-design finding while preserving the practical-access limit."
  },
  {
    "question": "Why should fictional outbound access be reviewed?",
    "choices": [
      "A workload may reach unnecessary destinations even when inbound access is tightly restricted.",
      "Outbound traffic is always safe.",
      "Only public applications use outbound traffic.",
      "Egress cannot affect incident impact."
    ],
    "answer": 0,
    "explanation": "Outbound paths can expand dependency, exposure, and incident scope."
  },
  {
    "question": "What is the safest way to reduce a fictional network path?",
    "choices": [
      "Confirm dependencies and owners, stage the change, test expected success and failure, preserve rollback, monitor, and document completion.",
      "Delete the route immediately.",
      "Change several controls at once without records.",
      "Ignore the path until an incident occurs."
    ],
    "answer": 0,
    "explanation": "Cloud network changes should be controlled, reversible, validated, and observed."
  },
  {
    "question": "What makes a fictional cloud networking finding defensible?",
    "choices": [
      "It links architecture, routes, rules, endpoints, identities, application controls, observed traffic, source health, alternatives, confidence, and limitations.",
      "It relies on one diagram.",
      "It assumes every possible path was used.",
      "It ignores service dependencies."
    ],
    "answer": 0,
    "explanation": "Defensible exposure analysis combines intended design, effective controls, observed evidence, and bounded conclusions."
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

export default function CloudNetworkingServiceExposurePage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.4 Cloud Networking and Service Exposure
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders interpret fictional virtual networks, subnets,
            routes, gateways, load balancers, private endpoints, public paths,
            security rules, segmentation, egress, DNS, flow evidence, service
            dependencies, and practical reachability without touching any real
            cloud network.
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
          lessonTitle="Cloud Networking and Service Exposure"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud network evidence.",
            "I will not sign in to, scan, probe, connect to, configure, route, query, capture from, test, export from, or inspect any real cloud network, endpoint, address, DNS name, gateway, service, account, or private record.",
            "I will distinguish public capability, addressability, reachability, authentication, authorization, observed use, and impact.",
            "I will compare routes, return paths, rules, endpoints, resource policies, identities, application controls, dependencies, and source health.",
            "I will create only defensive and portfolio-safe fictional artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Private Endpoint Can Exist while a Wider Route Still Remains"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud uses private endpoints for
            databases and storage, but one storage collection also remains
            reachable through a wider provider-service route. The export
            function has a general outbound route beyond its documented
            destinations. One private-service subnet lacks flow-log coverage.
            These records support design and monitoring gaps, but they do not
            independently prove public access, data use, or disclosure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak exposure analysis
              </p>

              <p className="mt-2 leading-7">
                Find one public-capable feature or broad route, declare the
                service exposed, and remove controls without checking return
                paths, identities, applications, or dependencies.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional exposure analysis
              </p>

              <p className="mt-2 leading-7">
                Calculate effective reachability, correlate observed traffic,
                preserve authentication and impact limits, map dependencies,
                and stage a reversible, monitored change.
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
          title="Cloud Exposure Is the Result of Several Controls, Not One Checkbox"
        >
          <p className="leading-8">
            A fictional cloud service may have a public address but remain
            unreachable because no route or rule permits the source. A private
            endpoint may exist while a wider alternate route remains. A network
            path may succeed but application authorization may still deny the
            action. Strong analysis therefore connects intended architecture,
            effective routes, security controls, service policies, identities,
            application permissions, observed traffic, source health, and
            business dependencies.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Source–Path–Control–Service Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Source", "Which fictional user, workload, subnet, partner, administrator, service, or recovery process starts the connection?"],
              ["Path", "Which fictional address, DNS record, route, gateway, endpoint, load balancer, subnet, and return path carry the traffic?"],
              ["Control", "Which fictional rules, resource policies, identities, conditions, application permissions, and explicit denies apply?"],
              ["Service", "Which fictional application or data function is reached, what business need exists, and what evidence supports observed use or impact?"],
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
            Cloud Networking and Exposure Terms
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
            Network Components
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Components and Their Defensive Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {networkComponents.map((item) => (
              <article
                key={item.component}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.component}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong controls
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_controls}
                    </p>
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
            Exposure Analysis
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Calling a Service Exposed
          </h2>

          <div className="mt-6 grid gap-5">
            {exposureQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong method
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Analysis risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Segmentation Zones
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Trust Zones
          </h2>

          <div className="mt-6 grid gap-5">
            {segmentationZones.map((item) => (
              <article
                key={item.zone}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.zone}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Assets", item.assets],
                    ["Allowed paths", item.allowed],
                    ["Blocked paths", item.blocked],
                    ["Evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.zone}-${label}`}
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
            Network Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Network and Exposure Records
          </h2>

          <div className="mt-6 grid gap-5">
            {networkRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {item.asset}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Source", item.source],
                    ["Destination", item.destination],
                    ["Path", item.path],
                    ["Controls", item.controls],
                    ["Finding", item.finding],
                    ["Limitation", item.limit],
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
            Complete a Fictional Cloud Exposure Review
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
          title="Fake Northbridge Cloud Network Dashboard"
          subtitle="Training dashboard for fictional network evidence only."
          metrics={[
            {
              label: "Network assets reviewed",
              value: "8",
              note: "Public edge, application, data, administration, export, monitoring, recovery, and partner paths are mapped.",
            },
            {
              label: "Exposure gaps",
              value: "4",
              note: "Wider storage route, general function egress, missing flow coverage, and overdue emergency validation require action.",
            },
            {
              label: "Confirmed public data paths",
              value: "0",
              note: "The supplied fictional evidence supports design gaps but no confirmed public data-service path.",
            },
          ]}
        />

        <FakeAlertCard
          title="Private Storage Also Has a Wider Provider-Service Route"
          severity="High"
          time="11:06 AM"
          source="Fake Cloud Network Review Console"
          details="The fictional archive-secondary storage service has an approved private endpoint, but the application subnet also has a wider provider-service route that can address the service."
          recommendation="Confirm route and return path, endpoint and resource policies, identity and application authorization, owner requirement, observed flows, source health, and dependencies. Do not claim public access or disclosure. Stage route reduction, validate expected application success and denied alternate paths, preserve rollback, monitor, and document completion."
        />

        <FakeLogPanel
          title="Fake Northbridge Network Review Records"
          logs={[
            "09:00 REVIEW scope='cloud networking and exposure'",
            "09:08 MAP zones='public,application,data,management,monitoring,recovery'",
            "09:14 EDGE listener='approved' private_data_targets='none'",
            "09:21 ROUTE storage='private endpoint + provider-service route'",
            "09:28 EGRESS export-function='general outbound route present'",
            "09:35 FLOW private-service-subnet='logging missing'",
            "09:42 ADMIN access='temporary' session='monitored' test='overdue'",
            "09:49 DNS database='private name' storage='private name'",
            "09:56 FLOW observed='application to approved storage and database'",
            "10:02 FINDING public_data_path='not supported'",
            "10:12 FINDING wider_route='supported' use='not proven'",
            "10:20 ACTION owners='network,application,storage,identity,monitoring'",
            "10:32 VALIDATE expected='allow approved path' denied='alternate path'",
            "10:44 ROLLBACK route='preserved' monitoring='enabled'",
            "11:06 PORTFOLIO fictionalization='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Network Findings and Limits
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
          title="What Does the Wider Storage Route Prove?"
          evidence={[
            "The fictional storage collection has a private endpoint.",
            "The application subnet also has a provider-service route that can address the storage service.",
            "The storage resource policy and workload role still control object access.",
            "Observed flow records show the approved application using the private path.",
            "No supplied flow, application, identity, or storage record supports public internet use or external disclosure.",
            "The approved architecture expects private-only service access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The wider route is a network-design gap because it expands possible reachability beyond the approved private-only design; public access, object use, and disclosure are not proven.",
            "The storage service is publicly exposed.",
            "Every object was downloaded through the wider route.",
            "The private endpoint makes the wider route irrelevant.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves the exposure-design finding and the practical-use and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Network Exposure Analysis"
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
          title="Build the Northbridge Cloud Network Exposure Review"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Architecture, Reachability, Segmentation, Findings, and Change Plan
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud networking and exposure review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Virtual-network, subnet, route, gateway, endpoint, load-balancer, DNS, and service map.</li>
                <li>Application, identity, data, monitoring, administration, recovery, and partner dependency map.</li>
                <li>Effective reachability matrix with return paths and service controls.</li>
                <li>Segmentation-zone and egress review.</li>
                <li>Observed-flow and source-health correlation table.</li>
                <li>Findings with alternatives, confidence, limitations, and impact boundaries.</li>
                <li>Staged network change plan with approval, tests, rollback, monitoring, and completion evidence.</li>
                <li>Technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not scan, connect to, test, capture from, or modify any real
            cloud network. Complete the lab only with fictional records
            displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Wider Route Exists, but No Public Use Is Supported"
          scenario="The fictional storage service has both a private endpoint and a wider provider-service route, while observed traffic uses the private path."
          choices={[
            {
              label: "Choice A",
              response:
                "Report the wider-route design gap, preserve the no-supported-public-use limitation, verify dependencies and owners, stage route reduction, test approved and denied paths, preserve rollback, monitor, and document completion.",
              outcome:
                "Best defensive choice. Exposure is reduced without overstating observed activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the storage publicly exposed and breached.",
              outcome:
                "Unsupported. The route does not independently prove public reachability or impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the route because a private endpoint exists.",
              outcome:
                "Unsafe. Alternate paths can still expand effective reachability.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Export Function Has General Outbound Access"
          scenario="The fictional export function requires only approved storage and monitoring destinations but also has a general outbound route."
          choices={[
            {
              label: "Choice A",
              response:
                "Validate provider and update dependencies, map observed destinations, define approved egress, stage restriction, preserve rollback, monitor failures and denied attempts, and obtain owner approval.",
              outcome:
                "Best defensive choice. Egress is reduced safely and transparently.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove all outbound access immediately.",
              outcome:
                "Unsafe. The function may require approved provider services.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep general outbound access because no misuse is confirmed.",
              outcome:
                "Weak. Unnecessary capability remains a valid defensive gap.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Networking and Service-Exposure Checklist"
          items={[
            "I can map fictional virtual networks, subnets, routes, gateways, endpoints, load balancers, DNS, services, and return paths.",
            "I can identify public edge, application, data, management, monitoring, recovery, and partner trust zones.",
            "I can calculate effective reachability using addressability, routes, rules, endpoints, service policies, identities, application authorization, and conditions.",
            "I can distinguish public capability, public addressability, practical reachability, authentication, observed use, and confirmed impact.",
            "I can interpret DNS and flow records without claiming connection success, payload content, or intent beyond the evidence.",
            "I can evaluate north-south, east-west, administrative, service-to-service, and outbound paths.",
            "I can preserve source-health, coverage, retention, and missing-evidence limits for negative network conclusions.",
            "I can write findings with evidence, alternatives, confidence, limitations, owners, and impact boundaries.",
            "I can design staged route, rule, endpoint, and egress changes with approval, validation, rollback, monitoring, and completion evidence.",
            "I will use only fictional evidence and never access or expose real cloud networks, addresses, endpoints, DNS, routes, logs, owners, accounts, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.4 Mini Quiz: Cloud Networking and Service Exposure"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Networking and Service-Exposure Review for the Northbridge Learning Cloud. Include architecture, virtual networks, subnets, routes, gateways, endpoints, load balancers, DNS, trust zones, dependencies, effective reachability, inbound and outbound paths, flow evidence, source health, findings, alternatives, confidence, limitations, staged remediation, validation, rollback, monitoring, and a portfolio-safety statement."
          tips={[
            "Use only fictional networks, addresses, DNS names, routes, endpoints, services, identities, logs, owners, dates, and decisions.",
            "Do not treat public capability, one route, one rule, DNS resolution, or a flow record as proof of confirmed public use or disclosure.",
            "Map both intended architecture and effective reachability.",
            "Make every network change approved, staged, reversible, validated, monitored, and documented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud service exposure depends on addressability, routing, return paths, rules, endpoints, service policies, identities, and application authorization.",
            "A private endpoint can coexist with a wider alternate path.",
            "A public-capable service is not automatically publicly reachable or usable.",
            "DNS and flow evidence provide useful network context but do not independently prove payload, intent, or impact.",
            "Segmentation should separate public, application, data, administration, monitoring, and recovery trust zones.",
            "Outbound access deserves the same careful ownership and validation as inbound access.",
            "Portfolio artifacts should use fully fictional cloud network evidence and never expose real architecture or addresses.",
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