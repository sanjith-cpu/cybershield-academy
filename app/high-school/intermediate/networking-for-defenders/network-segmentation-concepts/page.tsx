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
const modulePath = `${trackPath}/networking-for-defenders`;
const previousLesson =
  `${modulePath}/firewalls-and-network-access-rules`;
const nextLesson =
  `${modulePath}/reading-safe-network-diagrams`;

const objectives = [
  "Explain how segmentation separates systems, users, services, and trust levels into controlled network zones.",
  "Compare flat networks, VLAN-based segmentation, subnet boundaries, firewall zones, and isolated management networks.",
  "Evaluate fictional communication paths using least privilege, business need, identity, device role, and data sensitivity.",
  "Identify weak segmentation patterns such as broad lateral access, shared management paths, mixed trust levels, and missing monitoring.",
  "Recommend authorized segmentation improvements with testing, rollback, validation, and monitoring.",
];

const vocabulary = [
  [
    "Segmentation",
    "The practice of dividing a network into smaller zones or groups with controlled communication between them.",
  ],
  [
    "Flat network",
    "A network design with few internal boundaries, allowing many systems to communicate directly.",
  ],
  [
    "VLAN",
    "A logical local-network grouping that separates devices at the data-link layer.",
  ],
  [
    "Subnet",
    "A logical IP address range that defines a network boundary at the network layer.",
  ],
  [
    "Security zone",
    "A group of systems or interfaces with similar trust, function, sensitivity, or policy requirements.",
  ],
  [
    "Trust boundary",
    "A point where traffic moves between areas with different security expectations or access requirements.",
  ],
  [
    "Lateral movement",
    "The concept of movement from one internal system or segment to another after initial access.",
  ],
  [
    "East-west traffic",
    "Traffic moving between internal systems, subnets, zones, or workloads.",
  ],
  [
    "North-south traffic",
    "Traffic moving between an internal environment and external networks or services.",
  ],
  [
    "Management network",
    "A restricted network used for approved administration, monitoring, and infrastructure management.",
  ],
  [
    "Jump host",
    "A controlled system used as an approved access point for administration into protected environments.",
  ],
  [
    "Microsegmentation",
    "Fine-grained segmentation that applies controls close to individual workloads, applications, or identities.",
  ],
];

const zoneExamples = [
  {
    zone: "Student or user zone",
    purpose:
      "Contains standard user devices with limited access to approved applications and services.",
    risk:
      "User devices may encounter untrusted websites, email, downloads, or removable media.",
    controls:
      "Restricted server access, filtered internet access, endpoint protection, logging, and identity-based policy.",
  },
  {
    zone: "Staff or business zone",
    purpose:
      "Contains approved staff devices and access to internal business applications.",
    risk:
      "May handle more sensitive information and broader application access than general user zones.",
    controls:
      "Role-based access, MFA, endpoint monitoring, limited server paths, and stronger data controls.",
  },
  {
    zone: "Server zone",
    purpose:
      "Contains approved application, file, identity, database, and infrastructure services.",
    risk:
      "Compromise may affect many users or sensitive systems.",
    controls:
      "Narrow inbound access, restricted outbound paths, service ownership, monitoring, backups, and hardened administration.",
  },
  {
    zone: "Guest zone",
    purpose:
      "Provides limited internet access for unmanaged or temporary devices.",
    risk:
      "Devices may be unknown, untrusted, or outside organizational management.",
    controls:
      "Internet-only access, client isolation, no internal access, rate limits, and logging.",
  },
  {
    zone: "Management zone",
    purpose:
      "Supports approved administration of network, server, security, and monitoring infrastructure.",
    risk:
      "Broad administrative capability can create major impact if misused or compromised.",
    controls:
      "Strong authentication, named administrators, jump hosts, logging, limited source devices, and no general browsing.",
  },
  {
    zone: "Monitoring zone",
    purpose:
      "Receives approved logs, alerts, metrics, and telemetry from protected systems.",
    risk:
      "May reveal sensitive architecture, activity, identities, and incident data.",
    controls:
      "Restricted collectors, protected storage, controlled access, integrity checks, and reliable time synchronization.",
  },
];

const segmentationModels = [
  {
    model: "Flat network",
    description:
      "Most internal systems share broad reachability with few internal controls.",
    advantage:
      "Simple to build and manage in a small environment.",
    risk:
      "One compromised or misconfigured device may reach many unrelated systems.",
  },
  {
    model: "VLAN and subnet segmentation",
    description:
      "Devices are grouped by role, location, sensitivity, or function using VLANs and IP subnets.",
    advantage:
      "Creates clear boundaries and supports policy between groups.",
    risk:
      "Segmentation is weak if routing and firewall rules still allow broad access.",
  },
  {
    model: "Zone-based segmentation",
    description:
      "Traffic is controlled according to trust zones such as user, server, guest, management, and monitoring.",
    advantage:
      "Policy can reflect business purpose and trust level.",
    risk:
      "Poor ownership or overly broad zone rules can recreate a flat network.",
  },
  {
    model: "Application segmentation",
    description:
      "Only the systems and services required by one application may communicate.",
    advantage:
      "Reduces unnecessary paths and clarifies dependencies.",
    risk:
      "Incomplete dependency maps can cause outages or hidden exceptions.",
  },
  {
    model: "Microsegmentation concepts",
    description:
      "Controls are applied close to workloads, identities, or individual services.",
    advantage:
      "Supports fine-grained least privilege and detailed visibility.",
    risk:
      "Complexity, rule sprawl, stale labels, and unclear ownership can weaken the design.",
  },
];

const pathReviewQuestions = [
  {
    field: "Source zone",
    question:
      "Which user, device, workload, or administrative group begins the communication?",
  },
  {
    field: "Destination zone",
    question:
      "Which system, service, application, or protected environment receives it?",
  },
  {
    field: "Required service",
    question:
      "Which exact protocol, port, application, or API supports the approved workflow?",
  },
  {
    field: "Identity and device trust",
    question:
      "Does access depend on the approved user, role, device state, or managed system?",
  },
  {
    field: "Direction",
    question:
      "Is the path north-south, east-west, administrative, monitoring, backup, or recovery traffic?",
  },
  {
    field: "Data sensitivity",
    question:
      "Does the path involve public, internal, confidential, regulated, or highly sensitive information?",
  },
  {
    field: "Logging and ownership",
    question:
      "Who owns the path, which controls log it, when is it reviewed, and what is the escalation route?",
  },
  {
    field: "Failure and rollback",
    question:
      "How will the change be tested, validated, monitored, and reversed if it interrupts approved work?",
  },
];

const evidenceMatrix = [
  {
    source: "Network diagram",
    supports:
      "Intended zones, boundaries, gateways, firewalls, services, and approved communication paths.",
    limitation:
      "May be outdated or simplified and does not prove current traffic or configuration.",
  },
  {
    source: "VLAN and subnet inventory",
    supports:
      "Expected local grouping, address range, owner, purpose, and network placement.",
    limitation:
      "Does not prove that inter-zone policy is narrow or that devices are correctly assigned.",
  },
  {
    source: "Firewall rule and event logs",
    supports:
      "Configured and observed communication between zones, services, addresses, and times.",
    limitation:
      "Does not prove the complete application purpose, identity, or dependency by itself.",
  },
  {
    source: "Asset and identity inventory",
    supports:
      "Expected device role, owner, user group, environment, and sensitivity.",
    limitation:
      "Does not prove current network placement or active communication.",
  },
  {
    source: "Endpoint or workload telemetry",
    supports:
      "Local process, service, user, connection, and host-level activity.",
    limitation:
      "Does not prove every network-control decision along the path.",
  },
  {
    source: "Change and dependency records",
    supports:
      "Approved reason, owner, required communication, implementation, testing, and rollback.",
    limitation:
      "Does not prove the final network state matches the documented design.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the assets and trust levels",
    detail:
      "List users, devices, services, data, administrative systems, and monitoring tools by role and sensitivity.",
  },
  {
    step: "2",
    title: "Map required communication",
    detail:
      "Identify the exact source, destination, service, identity, direction, owner, and business need.",
  },
  {
    step: "3",
    title: "Find unnecessary paths",
    detail:
      "Look for broad east-west access, guest-to-internal access, shared management routes, and unrelated server communication.",
  },
  {
    step: "4",
    title: "Compare design with evidence",
    detail:
      "Use diagrams, inventories, rules, logs, endpoint records, identities, dependencies, and changes.",
  },
  {
    step: "5",
    title: "Design the narrowest safe boundary",
    detail:
      "Separate trust levels and allow only approved communication with logging and ownership.",
  },
  {
    step: "6",
    title: "Test and validate",
    detail:
      "Use staged rollout, success criteria, monitoring, rollback, post-change review, and updated documentation.",
  },
];

const mistakes = [
  "Assuming VLANs alone provide security without routing and firewall policy.",
  "Placing users, servers, management systems, and guest devices in one broad trust zone.",
  "Allowing every internal system to communicate because the traffic is not internet-facing.",
  "Using an any-to-any rule between segmented zones.",
  "Giving general user devices direct access to management interfaces.",
  "Forgetting monitoring, backup, update, authentication, and recovery dependencies.",
  "Creating too many zones without clear ownership, naming, documentation, or review.",
  "Changing segmentation without testing application dependencies and rollback.",
  "Assuming a diagram proves the actual configuration.",
  "Publishing real internal network zones, addresses, architecture, or access paths in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the main defensive purpose of network segmentation?",
    choices: [
      "To separate trust levels and limit unnecessary communication paths.",
      "To make every system publicly reachable.",
      "To eliminate the need for identity controls.",
      "To replace all logging.",
    ],
    answer: 0,
    explanation:
      "Segmentation limits exposure and supports controlled communication between groups.",
  },
  {
    question:
      "Why is a VLAN not a complete security control by itself?",
    choices: [
      "Inter-VLAN routing and access policy still determine which zones may communicate.",
      "VLANs cannot group devices.",
      "VLANs automatically permit every protocol.",
      "VLANs only work on public websites.",
    ],
    answer: 0,
    explanation:
      "Logical separation becomes meaningful security only when communication between groups is controlled.",
  },
  {
    question:
      "Which path is strongest for management access?",
    choices: [
      "Named administrators on managed devices use MFA and a logged jump host to reach specific management services.",
      "Any user device can directly access all management interfaces.",
      "Guest devices can reach management services during testing.",
      "Management interfaces are exposed to every internal zone.",
    ],
    answer: 0,
    explanation:
      "Management access should be narrow, strongly authenticated, monitored, and limited to approved sources.",
  },
  {
    question:
      "What is east-west traffic?",
    choices: [
      "Traffic moving between internal systems, workloads, subnets, or zones.",
      "Traffic moving only to public websites.",
      "Traffic that never crosses a switch.",
      "Traffic used only for email.",
    ],
    answer: 0,
    explanation:
      "East-west traffic describes internal communication and is important for lateral-access control.",
  },
  {
    question:
      "What is the strongest response to broad user-to-server access?",
    choices: [
      "Map required dependencies and request narrower authorized paths with testing, rollback, and monitoring.",
      "Disable every server immediately.",
      "Allow guest devices too.",
      "Ignore it because the traffic is internal.",
    ],
    answer: 0,
    explanation:
      "Internal traffic should still follow least privilege and approved dependency requirements.",
  },
  {
    question:
      "Why should monitoring and backup paths be included in segmentation design?",
    choices: [
      "Protected systems may depend on them for visibility, recovery, and incident response.",
      "They are never security-sensitive.",
      "They replace authentication.",
      "They should always use unrestricted access.",
    ],
    answer: 0,
    explanation:
      "Operational and security dependencies must remain functional while still being tightly controlled.",
  },
  {
    question:
      "What should happen after a segmentation change?",
    choices: [
      "Validate approved workflows, review logs, confirm blocked paths, update diagrams, and monitor for unexpected impact.",
      "Delete the rollback plan.",
      "Stop collecting logs.",
      "Assume the design is correct without testing.",
    ],
    answer: 0,
    explanation:
      "Post-change validation confirms both security goals and continued availability.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Continue Module I1
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: I1.5 Firewalls and Access Rules
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
          Next: I1.7 Reading Safe Network Diagrams
        </Link>
      </div>
    </section>
  );
}

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

function ZoneGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Zone Design
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Separate Systems by Role, Trust, Sensitivity, and Administrative Need
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {zoneExamples.map((item) => (
          <div
            key={item.zone}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.zone}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              {item.purpose}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Risk context
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
              </p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defensive controls
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.controls}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SegmentationModels() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Design Comparison
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Segmentation Can Range From Broad Zones to Fine-Grained Workload Controls
      </h2>

      <div className="mt-6 grid gap-4">
        {segmentationModels.map((item) => (
          <div
            key={item.model}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1.1fr_1fr_1fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.model}</p>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              {item.description}
            </p>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <span className="font-bold">Benefit:</span> {item.advantage}
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <span className="font-bold">Risk:</span> {item.risk}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PathReviewGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Path Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Every Cross-Zone Communication Path
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {pathReviewQuestions.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.question}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Segmentation Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SegmentationWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Improve Segmentation in Six Controlled Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetworkSegmentationConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.6 Network Segmentation Concepts
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Design and evaluate fictional network zones, trust boundaries,
            internal communication paths, management access, monitoring
            dependencies, and least-privilege segmentation controls.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I1: Networking for Defenders"
          lessonTitle="Network Segmentation Concepts"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain subnets, VLANs, firewalls, access rules, ports, protocols, services, and trust boundaries.",
            "I understand that internal traffic still requires ownership, purpose, controls, and monitoring.",
            "I will evaluate both security benefits and availability risks before recommending segmentation changes.",
            "I will use only fictional networks, zones, systems, identities, addresses, rules, logs, and diagrams.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Firewall at the Internet Edge Cannot Control Every Risk Inside a Flat Network"
        >
          <p className="leading-8">
            If user devices, servers, management interfaces, monitoring tools,
            backup systems, and guest devices can all communicate freely, one
            compromised or misconfigured device may reach systems unrelated to
            its role. Segmentation creates internal boundaries so that approved
            work continues while unnecessary paths are reduced.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 leading-7">
                “Everything is internal, so every internal system can reach
                every other system.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong design
              </p>
              <p className="mt-2 leading-7">
                “Separate systems by trust and function, document dependencies,
                and allow only the exact cross-zone communication required.”
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Segmentation Limits Exposure, Clarifies Ownership, and Improves Investigation"
        >
          <p className="leading-8">
            Strong segmentation reduces broad lateral access, protects
            management pathways, separates unmanaged devices, limits sensitive
            services, and creates clearer logs at trust boundaries. It also
            helps defenders answer which zone initiated a connection, which
            policy allowed it, and whether the path was expected.
          </p>
        </SectionCard>

        <ZoneGuide />
        <SegmentationModels />

        <SectionCard
          eyebrow="Core Concept"
          title="A Boundary Is Useful Only When Communication Across It Is Controlled"
        >
          <p className="leading-8">
            Creating separate VLANs or subnets does not automatically enforce
            security. Routers, firewalls, identity-aware controls, endpoint
            policy, service configuration, and monitoring determine what may
            cross the boundary. Good segmentation combines architecture,
            access control, ownership, logging, validation, and review.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> do not ask
            only “Are these systems separated?” Ask “Which exact communication
            is allowed, why, for whom, through which control, with what logging,
            and for how long?”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Segmentation and Trust-Boundary Terms
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

        <PathReviewGuide />
        <EvidenceLimits />
        <SegmentationWorkflow />

        <FakeDashboardCard
          title="Fake Segmentation Posture Dashboard"
          subtitle="Training dashboard for the fictional Harborview Learning Network. It compares expected zones, observed traffic paths, management access, and boundary controls."
          metrics={[
            {
              label: "Approved zones",
              value: "6",
              note: "Student, staff, guest, server, management, and monitoring zones are documented.",
            },
            {
              label: "Broad east-west rule",
              value: "1",
              note: "Student devices can reach all server-zone ports instead of only the learning portal.",
            },
            {
              label: "Direct management access",
              value: "7 devices",
              note: "Several standard staff devices can directly reach infrastructure management interfaces.",
            },
          ]}
        />

        <FakeAlertCard
          title="Student Zone Has Broad Access to the Server Zone"
          severity="High"
          time="03:14 PM"
          source="Fake Segmentation Governance Monitor"
          details="A fictional access rule permits all TCP services from the student zone to the server zone. Current logs show only HTTPS access to the learning portal is required, while other server services are reachable but unused."
          recommendation="Preserve rule, traffic, dependency, owner, and application evidence; confirm the approved requirement; then request a narrow student-to-portal HTTPS path with staged testing, rollback, and monitoring."
        />

        <FakeLogPanel
          title="Fake Segmentation Evidence Timeline"
          logs={[
            "14:41:02 DESIGN source_zone='student' destination_zone='server' approved_service='learning-portal-https'",
            "14:42:18 RULE id='INT-042' source_zone='student' destination_zone='server' service='all-tcp' action='allow'",
            "14:48:33 FIREWALL source='student-device-18' destination='learning-portal' service='https' action='allow' rule='INT-042'",
            "14:49:07 FIREWALL source='student-device-18' destination='file-server' service='smb' action='allow' rule='INT-042'",
            "14:49:08 ENDPOINT process='file-browser' user='student-user' connection='closed_by_user'",
            "14:55:44 DEPENDENCY required_paths='student-to-learning-portal-https-only'",
            "15:02:21 OWNER_CONFIRMATION file_server_student_access='not_required'",
            "15:14:05 CORRELATION finding='broad_student_to_server_rule' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Segmentation Conclusion Is Best Supported?"
          evidence={[
            "The fictional design requires only student-zone HTTPS access to the learning portal.",
            "The current rule allows all TCP services from the student zone to the entire server zone.",
            "Firewall logs show the rule allows both approved portal traffic and unnecessary file-server traffic.",
            "The file-server owner confirms student access is not required.",
            "No approved dependency requires other student-to-server communication.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The rule creates unnecessary east-west exposure; preserve evidence and request a narrow authorized student-to-portal HTTPS rule with staged testing, rollback, and monitoring.",
            "Every student device is definitely compromised.",
            "Remove the entire student network immediately.",
            "Allow all protocols instead of only TCP so the rule is more consistent.",
          ]}
          bestAnswer={0}
          explanation="The evidence shows a clear mismatch between the approved dependency and the broad rule. The safe response is a controlled least-privilege change, not an unsupported conclusion about user intent."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Segmentation"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Redesign a Fictional Flat Network Into Controlled Zones"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Digital Learning Center
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional environment currently places student devices,
                staff devices, file services, learning applications, monitoring,
                backups, guest devices, and network-management interfaces in one
                broad internal network.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Redesign
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Create user, staff, guest, server, management, monitoring, and backup zones.</li>
                <li>Label trust levels, subnets, gateways, owners, and sensitive data.</li>
                <li>Map every required cross-zone application dependency.</li>
                <li>Remove unnecessary east-west access.</li>
                <li>Protect management through approved devices, MFA, and a logged jump host.</li>
                <li>Preserve monitoring, backup, authentication, update, and recovery paths.</li>
                <li>Write staged test, validation, rollback, and post-change monitoring plans.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fictional diagrams, invented zones, documentation address
            ranges, and fake rules. Do not map, test, or publish a real home,
            school, company, cloud, or production network.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Guest Devices Can Reach an Internal Printer"
          scenario="A fictional guest zone is intended for internet-only access, but firewall logs show guest devices can reach an internal printer service through an old convenience rule."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the rule, logs, owner, and dependency evidence; confirm no approved guest need; then request controlled removal with validation and rollback.",
              outcome:
                "Best defensive choice. The old path crosses a trust boundary without a current approved purpose.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow guest access to every internal printer for consistency.",
              outcome:
                "Unsafe. Guest access should remain separated from internal resources unless a narrow approved need exists.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Conclude every guest device is malicious.",
              outcome:
                "Unsupported. The evidence proves the access path exists, not the intent of every device.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Monitoring Stops After a Segmentation Change"
          scenario="A fictional server-zone segmentation change successfully blocks unnecessary user traffic, but the monitoring collector can no longer receive approved logs because its dependency was missing from the design."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the rollback or approved exception path, restore the narrow monitoring dependency, validate log collection, and update the design and test plan.",
              outcome:
                "Best defensive choice. Security improvements must preserve approved visibility and operational dependencies.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave monitoring broken because the new boundary is more secure.",
              outcome:
                "Unsafe. Lost visibility weakens detection, investigation, and accountability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow all traffic between monitoring and every zone.",
              outcome:
                "Too broad. Restore only the exact approved collection paths.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Network Segmentation Review Checklist"
          items={[
            "I group systems by role, trust level, sensitivity, ownership, and administrative need.",
            "I distinguish VLANs, subnets, security zones, routing, and firewall policy.",
            "I document every required source, destination, service, direction, identity, and business purpose.",
            "I review both north-south and east-west communication.",
            "I restrict guest, user, server, management, monitoring, backup, update, and recovery paths appropriately.",
            "I protect administrative access with approved devices, strong authentication, logging, and controlled pathways.",
            "I compare diagrams and inventories with current rules, logs, endpoint evidence, identities, dependencies, and changes.",
            "I preserve monitoring, authentication, backup, update, and recovery dependencies.",
            "I include staged testing, success criteria, validation, rollback, monitoring, and documentation updates.",
            "I use fictional evidence and never inspect or publish real internal architecture.",
          ]}
        />

        <MiniQuiz
          title="I1.6 Mini Quiz: Network Segmentation Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Segmentation Redesign for a small learning organization. Begin with a flat network, then redesign it into student, staff, guest, server, management, monitoring, backup, and recovery zones. Include documentation address ranges, trust boundaries, owners, data sensitivity, required communication paths, denied paths, firewall-control points, identity requirements, logging, and validation."
          tips={[
            "Use only fictional organizations, systems, users, zones, services, rules, logs, and documentation address ranges.",
            "Include at least one north-south path, three east-west paths, one management path, one monitoring path, and one backup or recovery path.",
            "Explain how the redesign reduces exposure without interrupting approved work.",
            "Do not use real home, school, company, cloud, VPN, or production network information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Segmentation separates systems and trust levels so unnecessary communication can be reduced.",
            "VLANs and subnets create logical boundaries, but access policy determines what may cross them.",
            "Internal east-west traffic deserves the same ownership, purpose, logging, and least-privilege review as external traffic.",
            "Management, monitoring, backup, update, authentication, and recovery paths must be protected and preserved.",
            "Strong segmentation compares intended design with current rules, logs, identities, assets, dependencies, and changes.",
            "Segmentation changes require staged testing, rollback, validation, monitoring, and updated documentation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}